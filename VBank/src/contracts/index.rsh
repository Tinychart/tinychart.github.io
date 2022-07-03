'reach 0.1';

const tokenParameter = Object({name: Bytes(32), symbol: Bytes(8),
                              url: Bytes(96), metadata: Bytes(32), 
                              supply: UInt});
const contractState = Tuple(UInt, UInt, UInt, UInt, UInt, UInt, UInt,UInt, UInt, UInt, UInt, UInt, UInt)
export const main = Reach.App(() => {
  setOptions({ connectors: [ALGO] });
  const Admin = Participant('Admin',{
    setInitialParam: Fun([],
      Object({
        totalFee: UInt,
        adminFeeRatio: UInt,
        protocolFeeRatio: UInt,
        minReserveRatio: UInt,
        maxReserveRatio: UInt,
        initialBaseCurrencyPrice: UInt,
        minRCPrice: UInt,
        thresholdStableCoin: UInt,
        reserveCoinParam: tokenParameter,
        stableCoinParam: tokenParameter
      })),


    ready: Fun([], Null)
  })

  const Viewer = View("Viewer", {read: contractState})

  const Claimant = API('Claimant', {
    mintStable: Fun([UInt], Bool),
    burnStable: Fun([UInt], Bool),
    mintReserve: Fun([UInt], Bool),
    burnReserve: Fun([UInt], Bool),
    mintFirstStable: Fun([UInt], Bool)
    })

  const AdminAPI = API('AdminAPI',{
    setAdminFee: Fun([UInt, UInt], Bool),
    claimAdminFee: Fun([], Bool),
    updatePrice: Fun([UInt], Bool),
    closeBank: Fun([], Bool)
  })

  
  init();

  Admin.only(() =>{
    const{
      totalFee,
      adminFeeRatio,
      protocolFeeRatio,
      minReserveRatio,
      maxReserveRatio,
      initialBaseCurrencyPrice,
      minRCPrice,
      thresholdStableCoin,
      reserveCoinParam,
      stableCoinParam
    } = declassify(interact.setInitialParam());
    assume(adminFeeRatio + protocolFeeRatio == 100)
    assume(reserveCoinParam.supply > 0)
    assume(stableCoinParam.supply > 0)
    assume(reserveCoinParam.supply == UInt.max - 1)
    assume(stableCoinParam.supply == UInt.max- 1)

  });

  Admin.publish(
    totalFee,
    adminFeeRatio,
    protocolFeeRatio,
    minReserveRatio,
    maxReserveRatio,
    initialBaseCurrencyPrice,
    minRCPrice,
    thresholdStableCoin,
    reserveCoinParam,
    stableCoinParam
  );

  require(adminFeeRatio + protocolFeeRatio == 100)
  require(reserveCoinParam.supply > 0)
  require(stableCoinParam.supply > 0)

  require(reserveCoinParam.supply == UInt.max - 1)
  require(stableCoinParam.supply == UInt.max - 1)
  

  
  const mdReserve = {...reserveCoinParam}; 
  const reserveCoinToken = new Token(mdReserve);
  const mdStable = {...stableCoinParam};
  const stableCoinToken = new Token(mdStable);

  require(balance(stableCoinToken) == mdStable.supply)
  require(balance(reserveCoinToken) == mdReserve.supply)

  commit();

  Admin.publish();
  Admin.interact.ready();

  const [keepGoing, 
        reserveCirculation, 
        stableCirculation, 
        reserves, 
        totFee,
        adminFeeR, 
        protocolFeeR, 
        accruedAdminFees,
        targetPriceSC,
        thrshNumSC, 
        minPriceSC, 
        minPriceRC, 
        minRR, 
        maxRR] =
  parallelReduce([true, 
                  0, 
                  0, 
                  0, 
                  totalFee, 
                  adminFeeRatio, 
                  protocolFeeRatio, 
                  0, 
                  initialBaseCurrencyPrice, 
                  initialBaseCurrencyPrice,
                  thresholdStableCoin,
                  minRCPrice,
                  minReserveRatio, 
                  maxReserveRatio])
    .invariant(balance(stableCoinToken) == mdStable.supply - stableCirculation && !stableCoinToken.destroyed())
    .invariant(balance(reserveCoinToken) == mdReserve.supply - reserveCirculation && !reserveCoinToken.destroyed())
    .invariant(balance() == reserves + accruedAdminFees)
    .while(true) 
    .define(() =>{

      const reservesDivScCirc = (rsrvs, stCirc) =>{
        return div(rsrvs, stCirc);
      }
      const priceStable = (stCirc, tgtPSC, rsrvs) => {
        if (stCirc == 0){
          return tgtPSC;
        }
        else{
           return reservesDivScCirc(rsrvs, stCirc) > tgtPSC ? tgtPSC : reservesDivScCirc(rsrvs, stCirc) 
        }
      };

      const liabilities = (stCirc, tgtPSC, rsrvs) => {
        return mul(stCirc, priceStable(stCirc, tgtPSC, rsrvs));
      }
      const reserveRatio = (rsrvs, stCirc, tgtPSC) => {
        return div((rsrvs), liabilities(stCirc, tgtPSC, rsrvs))
      }
      const equity = (rsrvs, stCirc, tgtPSC) => {
        return rsrvs - liabilities(stCirc, tgtPSC, rsrvs);
      }
      const tgtReservePrice = (rsrvs, stCirc, rsCirc, tgtPSC) =>{
        return div(equity(rsrvs, stCirc, tgtPSC), rsCirc)
      }
      const priceReserve = (rsCirc, minPRC, rsrvs, stCirc, tgtPSC) => {
        if (rsCirc == 0 || equity(rsrvs, stCirc, tgtPSC) == 0){
          return minPRC
        }
        else{
          return tgtReservePrice(rsrvs, stCirc, rsCirc, tgtPSC) > minPRC ? tgtReservePrice(rsrvs,stCirc, rsCirc, tgtPSC) : minPRC
        }
      }

      const feeShare = (paid, tFee, pShare) =>{
        return ((paid * tFee)/100) * pShare /100  
      }

      const ttlFee = (paid, tFee) =>{
        return paid * tFee / 100
      }

      const stblDivPrice = (paidAmt, stCirc, tgtPSC, rsrvs) =>{
        return paidAmt/priceStable(stCirc, tgtPSC, rsrvs)
      }

      const rsrvDivPrice = (paidAmt, rsCirc, minPRC, rsrvs, stCirc, tgtPSC) =>{
        return paidAmt/priceReserve(rsCirc, minPRC, rsrvs, stCirc, tgtPSC)
      }
      
    })
    .define(() =>{
      Viewer.read.set([reserveCirculation, 
        stableCirculation, 
        reserves, 
        totFee,
        adminFeeR, 
        protocolFeeR, 
        accruedAdminFees,
        targetPriceSC,
        thrshNumSC, 
        minPriceSC, 
        minPriceRC, 
        minRR, 
        maxRR])
    })
    .paySpec([stableCoinToken, reserveCoinToken])
    .api(AdminAPI.updatePrice,
      (price) => assume(price > 0 && this == Admin),
      (_) => [0, [0, stableCoinToken] , [0, reserveCoinToken]] ,
      (price, k) => {
        require(price > 0 && this == Admin)
        k(true);
        return[keepGoing, 
          reserveCirculation, 
          stableCirculation, 
          reserves, 
          totFee,
          adminFeeR, 
          protocolFeeR, 
          accruedAdminFees,
          targetPriceSC, 
          minPriceSC,
          thrshNumSC, 
          minPriceRC, 
          minRR, 
          maxRR]
    })
    .api(AdminAPI.setAdminFee,
      (newAdminFee, newProtocolFee) => assume(newAdminFee + newProtocolFee == 100),
      (_, _) => [0, [0, stableCoinToken] , [0, reserveCoinToken]],
      (newAdminFee, newProtocolFee, k) => {
        require(newAdminFee + newProtocolFee == 100)
        transfer(accruedAdminFees).to(Admin)
        k(true);
        return[keepGoing, 
          reserveCirculation, 
          stableCirculation, 
          reserves, 
          totFee,
          newAdminFee, 
          newProtocolFee, 
          0,
          targetPriceSC, 
          thrshNumSC,
          minPriceSC, 
          minPriceRC, 
          minRR, 
          maxRR]
    })
    .api(AdminAPI.claimAdminFee,
      () => assume(this == Admin),
      () => [0, [0, stableCoinToken] , [0, reserveCoinToken]],
      (k) => {
        require(this == Admin)
        transfer(accruedAdminFees).to(Admin)
        k(true)
        return[keepGoing, 
          reserveCirculation, 
          stableCirculation, 
          reserves, 
          totFee,
          adminFeeR, 
          protocolFeeR, 
          0,
          targetPriceSC, 
          thrshNumSC,
          minPriceSC, 
          minPriceRC, 
          minRR, 
          maxRR]
    })
    .api(Claimant.mintFirstStable,
      (amountPaid) => assume(stableCirculation == 0 
      && amountPaid / targetPriceSC <= balance(stableCoinToken)
      && ttlFee(amountPaid, totFee) == feeShare(amountPaid, totFee, protocolFeeR) + feeShare(amountPaid, totFee, adminFeeR)),
      (amountPaid) => [amountPaid + ttlFee(amountPaid, totFee), [0, stableCoinToken] , [0, reserveCoinToken]],
      (amountPaid, k) =>{
        require(stableCirculation == 0  
        && stblDivPrice(amountPaid, stableCirculation, targetPriceSC, reserves) <= balance(stableCoinToken)
        && ttlFee(amountPaid, totFee) == feeShare(amountPaid, totFee, protocolFeeR) + feeShare(amountPaid, totFee, adminFeeR))
        transfer([0, [amountPaid / targetPriceSC, stableCoinToken]]).to(this)
        k(true)
        return[true, 
          reserveCirculation, 
          stableCirculation + amountPaid / targetPriceSC, 
          reserves + amountPaid + feeShare(amountPaid, totFee, protocolFeeR), 
          totFee,
          adminFeeR, 
          protocolFeeR, 
          accruedAdminFees + feeShare(amountPaid, totFee, adminFeeR),
          targetPriceSC, 
          minPriceSC, 
          thrshNumSC,
          minPriceRC, 
          minRR, 
          maxRR] 
        })
    .api(AdminAPI.closeBank,
      () => assume(this == Admin 
        && stableCirculation == 0 
        && reserveCirculation == 0 
        && balance(stableCoinToken) == mdStable.supply
        && balance(reserveCoinToken) == mdReserve.supply),
      () => [0, [0, stableCoinToken] , [0, reserveCoinToken]],
      (k) => {
        require(this == Admin 
          && stableCirculation == 0 
          && reserveCirculation == 0 
          && balance(stableCoinToken) == mdStable.supply
          && balance(reserveCoinToken) == mdReserve.supply)
        
        assert(balance(reserveCoinToken) == mdReserve.supply && balance(stableCoinToken) == mdStable.supply)
        k(true)
        return[false, 
          reserveCirculation, 
          stableCirculation, 
          reserves, 
          totFee,
          adminFeeR, 
          protocolFeeR, 
          accruedAdminFees,
          targetPriceSC, 
          thrshNumSC,
          minPriceSC, 
          minPriceRC, 
          minRR, 
          maxRR]
    })
    .api(Claimant.mintStable,
      (amountPaid) => assume(reserveRatio(reserves, stableCirculation, targetPriceSC)>=minRR 
      && reserveRatio(reserves+ feeShare(amountPaid, totFee, protocolFeeR), stableCirculation, targetPriceSC) >= minRR
      && stblDivPrice(amountPaid, stableCirculation, targetPriceSC, reserves) <= balance(stableCoinToken)
      && ttlFee(amountPaid, totFee) == feeShare(amountPaid, totFee, protocolFeeR) + feeShare(amountPaid, totFee, adminFeeR)),
      (amountPaid) => [amountPaid + ttlFee(amountPaid, totFee), [0, stableCoinToken] , [0, reserveCoinToken]],
      (amountPaid, k) =>{
        require(reserveRatio(reserves, stableCirculation, targetPriceSC)>=minRR 
        && reserveRatio(reserves+ feeShare(amountPaid, totFee, protocolFeeR), stableCirculation, targetPriceSC) >= minRR
        && stblDivPrice(amountPaid, stableCirculation, targetPriceSC, reserves) <= balance(stableCoinToken)
        && ttlFee(amountPaid, totFee) == feeShare(amountPaid, totFee, protocolFeeR) + feeShare(amountPaid, totFee, adminFeeR))
        const amtToPay = stblDivPrice(amountPaid, stableCirculation, targetPriceSC, reserves);
        transfer([0, [amtToPay, stableCoinToken]]).to(this)
        k(true)
        return[true, 
          reserveCirculation, 
          stableCirculation + stblDivPrice(amountPaid, stableCirculation, targetPriceSC, reserves), 
          reserves + amountPaid + feeShare(amountPaid, totFee, protocolFeeR), 
          totFee,
          adminFeeR, 
          protocolFeeR, 
          accruedAdminFees + feeShare(amountPaid, totFee, adminFeeR),
          targetPriceSC, 
          minPriceSC, 
          thrshNumSC,
          minPriceRC, 
          minRR, 
          maxRR]         
    })
    .api(Claimant.mintReserve,
    (amountPaid) => assume((reserveRatio(reserves + feeShare(amountPaid, totFee, protocolFeeR), stableCirculation, targetPriceSC) <= maxRR || stableCirculation < thrshNumSC)
    && rsrvDivPrice(amountPaid, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC) <= balance(reserveCoinToken)
    && ttlFee(amountPaid, totFee) == feeShare(amountPaid, totFee, protocolFeeR) + feeShare(amountPaid, totFee, adminFeeR)),
    (amountPaid) => [amountPaid + ttlFee(amountPaid,totFee), [0, stableCoinToken] , [0, reserveCoinToken]],
    (amountPaid, k) =>{
      require((reserveRatio(reserves + feeShare(amountPaid, totFee, protocolFeeR), stableCirculation, targetPriceSC) <= maxRR || stableCirculation < thrshNumSC)
      && rsrvDivPrice(amountPaid, reserveCirculation, minPriceRC, reserves, stableCirculation,  targetPriceSC) <= balance(reserveCoinToken)
      && ttlFee(amountPaid, totFee) == feeShare(amountPaid, totFee, protocolFeeR) + feeShare(amountPaid, totFee, adminFeeR))
      transfer([0, [rsrvDivPrice(amountPaid, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC), reserveCoinToken]]).to(this)
      k(true)
      return[true, 
        reserveCirculation + rsrvDivPrice(amountPaid, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC), 
        stableCirculation, 
        reserves + amountPaid + feeShare(amountPaid, totFee, protocolFeeR), 
        totFee,
        adminFeeR, 
        protocolFeeR, 
        accruedAdminFees + feeShare(amountPaid, totFee, adminFeeR),
        targetPriceSC, 
        minPriceSC, 
        thrshNumSC,
        minPriceRC, 
        minRR, 
        maxRR]
    })
    .api(Claimant.burnStable,
    (amountBurned) => assume(balance() >= stblDivPrice(amountBurned, stableCirculation, targetPriceSC, reserves)
    && ttlFee(stblDivPrice(amountBurned, stableCirculation, targetPriceSC, reserves), totFee) == feeShare(stblDivPrice(amountBurned, stableCirculation, targetPriceSC, reserves), totFee, protocolFeeR) + feeShare(stblDivPrice(amountBurned, stableCirculation, targetPriceSC, reserves), totFee, adminFeeR)),
    (amountBurned) => [0, [amountBurned, stableCoinToken] , [0, reserveCoinToken]],
    (amountBurned, k) =>{
      const stblPrice = stblDivPrice(amountBurned, stableCirculation, targetPriceSC, reserves);
      require(balance() >= stblPrice
      && ttlFee(stblPrice, totFee) == feeShare(stblPrice, totFee, protocolFeeR) + feeShare(stblDivPrice(amountBurned, stableCirculation, targetPriceSC, reserves), totFee, adminFeeR))
      transfer(stblPrice - ttlFee(stblPrice, totFee)).to(this)
      k(true)
      return[false, 
        reserveCirculation, 
        stableCirculation - amountBurned, 
        reserves - stblDivPrice(amountBurned, stableCirculation, targetPriceSC, reserves) + feeShare(stblDivPrice(amountBurned, stableCirculation, targetPriceSC, reserves), totFee, protocolFeeR), 
        totFee,
        adminFeeR, 
        protocolFeeR, 
        accruedAdminFees + feeShare(stblDivPrice(amountBurned, stableCirculation, targetPriceSC, reserves), totFee, adminFeeR),
        targetPriceSC, 
        minPriceSC, 
        thrshNumSC,
        minPriceRC, 
        minRR, 
        maxRR]
    })
    .api(Claimant.burnReserve,
    (amountBurned) => assume(reserveRatio(reserves, stableCirculation, targetPriceSC)>=minRR
    && rsrvDivPrice(amountBurned, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC) > 0
    && balance() >= rsrvDivPrice(amountBurned, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC)
    && ttlFee(rsrvDivPrice(amountBurned, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC), totFee) == 
    feeShare(rsrvDivPrice(amountBurned, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC), totFee, protocolFeeR) + feeShare(rsrvDivPrice(amountBurned, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC), totFee, adminFeeR)),
    (amountBurned) => [0, [0, stableCoinToken] , [amountBurned, reserveCoinToken]],
    (amountBurned, k) =>{
      const rsrvCoinPrice = rsrvDivPrice(amountBurned, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC);
      const totlFee = ttlFee(rsrvCoinPrice, totFee)
      require(reserveRatio(reserves, stableCirculation, targetPriceSC)>=minRR
      && rsrvDivPrice(amountBurned, reserveCirculation, minPriceRC, reserves, stableCirculation, targetPriceSC) > 0
      && balance() >= rsrvCoinPrice
      && ttlFee(rsrvCoinPrice, totFee) == 
      feeShare(rsrvCoinPrice, totFee, protocolFeeR) + feeShare(rsrvCoinPrice, totFee, adminFeeR))
      transfer(rsrvCoinPrice - totlFee).to(this)
      k(true)
      return[false, 
        reserveCirculation - amountBurned, 
        stableCirculation, 
        reserves - rsrvCoinPrice + feeShare(rsrvCoinPrice, totFee, protocolFeeR), 
        totFee,
        adminFeeR, 
        protocolFeeR, 
        accruedAdminFees + feeShare(rsrvCoinPrice, totFee, adminFeeR),
        targetPriceSC, 
        minPriceSC, 
        thrshNumSC,
        minPriceRC, 
        minRR, 
        maxRR]
    })



  /*Admin.publish();*/

 /*  transfer(balance()).to(Admin);
  assert(balance(reserveCoinToken) == mdReserve.supply)
  reserveCoinToken.burn(balance(reserveCoinToken));
  assert(reserveCoinToken.destroyed() == false);
  reserveCoinToken.destroy();
  assert(balance(stableCoinToken) == mdStable.supply)
  stableCoinToken.burn(balance(stableCoinToken));
  assert(stableCoinToken.destroyed() == false);
  stableCoinToken.destroy();*/

  commit();


  exit();


});
