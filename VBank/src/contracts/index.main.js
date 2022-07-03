// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  return {
    infos: {
      Viewer: {
        read: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v3445, v3446, v3447, v3448, v3449, v3450, v3451, v3452, v3453, v3460, v3462, v3476, v3511, v3539] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = svs;
              return (await ((async () => {
                
                const v3592 = [v3559, v3561, v3560, v3564, v3552, v3558, v3551, v3562, v3563, v3556, v3555, v3557, v3554];
                
                return v3592;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc5],
      4: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc4 = stdlib.T_Object({
    metadata: ctc1,
    name: ctc1,
    supply: ctc0,
    symbol: ctc2,
    url: ctc3
    });
  const ctc5 = stdlib.T_Object({
    adminFeeRatio: ctc0,
    initialBaseCurrencyPrice: ctc0,
    maxReserveRatio: ctc0,
    minRCPrice: ctc0,
    minReserveRatio: ctc0,
    protocolFeeRatio: ctc0,
    reserveCoinParam: ctc4,
    stableCoinParam: ctc4,
    thresholdStableCoin: ctc0,
    totalFee: ctc0
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0]);
  const ctc11 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc8,
    AdminAPI_closeBank0_192: ctc8,
    AdminAPI_setAdminFee0_192: ctc9,
    AdminAPI_updatePrice0_192: ctc10,
    Claimant_burnReserve0_192: ctc10,
    Claimant_burnStable0_192: ctc10,
    Claimant_mintFirstStable0_192: ctc10,
    Claimant_mintReserve0_192: ctc10,
    Claimant_mintStable0_192: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc0, ctc0, ctc12]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v3395 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v3396 = [v3395, v3395];
  const v3402 = stdlib.protect(ctc5, await interact.setInitialParam(), {
    at: './index.rsh:60:44:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: 'setInitialParam',
    who: 'Admin'
    });
  const v3403 = v3402.adminFeeRatio;
  const v3404 = v3402.initialBaseCurrencyPrice;
  const v3405 = v3402.maxReserveRatio;
  const v3406 = v3402.minRCPrice;
  const v3407 = v3402.minReserveRatio;
  const v3408 = v3402.protocolFeeRatio;
  const v3409 = v3402.reserveCoinParam;
  const v3410 = v3402.stableCoinParam;
  const v3411 = v3402.thresholdStableCoin;
  const v3412 = v3402.totalFee;
  const v3415 = v3409.supply;
  const v3420 = v3410.supply;
  const v3433 = stdlib.add(v3403, v3408);
  const v3434 = stdlib.eq(v3433, stdlib.checkedBigNumberify('./index.rsh:61:48:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v3434, {
    at: './index.rsh:61:11:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3436 = stdlib.gt(v3415, stdlib.checkedBigNumberify('./index.rsh:62:38:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3436, {
    at: './index.rsh:62:11:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3438 = stdlib.gt(v3420, stdlib.checkedBigNumberify('./index.rsh:63:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3438, {
    at: './index.rsh:63:11:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3440 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:64:50:decimal', stdlib.UInt_max, '1'));
  const v3441 = stdlib.eq(v3415, v3440);
  stdlib.assert(v3441, {
    at: './index.rsh:64:11:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3444 = stdlib.eq(v3420, v3440);
  stdlib.assert(v3444, {
    at: './index.rsh:65:11:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3412, v3403, v3408, v3407, v3405, v3404, v3406, v3411, v3409, v3410],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:69:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3446, v3447, v3448, v3449, v3450, v3451, v3452, v3453, v3454, v3455], secs: v3457, time: v3456, didSend: v78, from: v3445 } = txn1;
      
      ;
      const v3460 = v3454.supply;
      const v3462 = v3455.supply;
      const v3470 = v3454.metadata;
      const v3471 = v3454.name;
      const v3473 = v3454.symbol;
      const v3474 = v3454.url;
      const v3475 = stdlib.simTokenNew(sim_r, v3471, v3473, v3474, v3470, v3460, undefined /* Nothing */, getSimTokCtr());
      const v3476 = await txn1.getOutput('internal', 'v3475', ctc6, v3475);
      const v3486 = v3396[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
      const v3488 = v3486[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '1')];
      const v3489 = v3486[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '2')];
      const v3490 = [v3460, v3488, v3489];
      const v3491 = stdlib.Array_set(v3396, stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0'), v3490);
      const v3493 = v3491[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
      const v3494 = v3493[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
      const v3496 = v3493[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '2')];
      const v3497 = [v3494, v3460, v3496];
      const v3498 = stdlib.Array_set(v3491, stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0'), v3497);
      const v3499 = v3498[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
      const v3500 = v3499[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
      const v3501 = v3499[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '1')];
      const v3503 = [v3500, v3501, false];
      const v3504 = stdlib.Array_set(v3498, stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0'), v3503);
      const v3505 = v3455.metadata;
      const v3506 = v3455.name;
      const v3508 = v3455.symbol;
      const v3509 = v3455.url;
      const v3510 = stdlib.simTokenNew(sim_r, v3506, v3508, v3509, v3505, v3462, undefined /* Nothing */, getSimTokCtr());
      const v3511 = await txn1.getOutput('internal', 'v3510', ctc6, v3510);
      const v3521 = v3504[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
      const v3523 = v3521[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
      const v3524 = v3521[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '2')];
      const v3525 = [v3462, v3523, v3524];
      const v3526 = stdlib.Array_set(v3504, stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1'), v3525);
      const v3528 = v3526[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
      const v3529 = v3528[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '0')];
      const v3531 = v3528[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '2')];
      const v3532 = [v3529, v3462, v3531];
      const v3533 = stdlib.Array_set(v3526, stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1'), v3532);
      const v3534 = v3533[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
      const v3535 = v3534[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '0')];
      const v3536 = v3534[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
      const v3538 = [v3535, v3536, false];
      const v3539 = stdlib.Array_set(v3533, stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1'), v3538);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v3446, v3447, v3448, v3449, v3450, v3451, v3452, v3453, v3454, v3455], secs: v3457, time: v3456, didSend: v78, from: v3445 } = txn1;
  ;
  const v3458 = stdlib.add(v3447, v3448);
  const v3459 = stdlib.eq(v3458, stdlib.checkedBigNumberify('./index.rsh:82:47:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v3459, {
    at: './index.rsh:82:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3460 = v3454.supply;
  const v3461 = stdlib.gt(v3460, stdlib.checkedBigNumberify('./index.rsh:83:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3461, {
    at: './index.rsh:83:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3462 = v3455.supply;
  const v3463 = stdlib.gt(v3462, stdlib.checkedBigNumberify('./index.rsh:84:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3463, {
    at: './index.rsh:84:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3465 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:86:49:decimal', stdlib.UInt_max, '1'));
  const v3466 = stdlib.eq(v3460, v3465);
  stdlib.assert(v3466, {
    at: './index.rsh:86:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3469 = stdlib.eq(v3462, v3465);
  stdlib.assert(v3469, {
    at: './index.rsh:87:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3470 = v3454.metadata;
  const v3471 = v3454.name;
  const v3473 = v3454.symbol;
  const v3474 = v3454.url;
  const v3475 = undefined /* TokenNew */;
  const v3476 = await txn1.getOutput('internal', 'v3475', ctc6, v3475);
  const v3486 = v3396[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
  const v3488 = v3486[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '1')];
  const v3489 = v3486[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '2')];
  const v3490 = [v3460, v3488, v3489];
  const v3491 = stdlib.Array_set(v3396, stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0'), v3490);
  const v3493 = v3491[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
  const v3494 = v3493[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
  const v3496 = v3493[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '2')];
  const v3497 = [v3494, v3460, v3496];
  const v3498 = stdlib.Array_set(v3491, stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0'), v3497);
  const v3499 = v3498[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
  const v3500 = v3499[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0')];
  const v3501 = v3499[stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '1')];
  const v3503 = [v3500, v3501, false];
  const v3504 = stdlib.Array_set(v3498, stdlib.checkedBigNumberify('./index.rsh:92:37:application', stdlib.UInt_max, '0'), v3503);
  const v3505 = v3455.metadata;
  const v3506 = v3455.name;
  const v3508 = v3455.symbol;
  const v3509 = v3455.url;
  const v3510 = undefined /* TokenNew */;
  const v3511 = await txn1.getOutput('internal', 'v3510', ctc6, v3510);
  const v3512 = [v3476];
  const v11051 = v3512[stdlib.checkedBigNumberify('reach standard library:154:21:application', stdlib.UInt_max, '0')];
  const v11055 = stdlib.tokenEq(v3511, v11051);
  const v3520 = v11055 ? false : true;
  stdlib.assert(v3520, {
    at: './index.rsh:94:36:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  const v3521 = v3504[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
  const v3523 = v3521[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
  const v3524 = v3521[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '2')];
  const v3525 = [v3462, v3523, v3524];
  const v3526 = stdlib.Array_set(v3504, stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1'), v3525);
  const v3528 = v3526[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
  const v3529 = v3528[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '0')];
  const v3531 = v3528[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '2')];
  const v3532 = [v3529, v3462, v3531];
  const v3533 = stdlib.Array_set(v3526, stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1'), v3532);
  const v3534 = v3533[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
  const v3535 = v3534[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '0')];
  const v3536 = v3534[stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1')];
  const v3538 = [v3535, v3536, false];
  const v3539 = stdlib.Array_set(v3533, stdlib.checkedBigNumberify('./index.rsh:94:36:application', stdlib.UInt_max, '1'), v3538);
  const v3540 = v3539[stdlib.checkedBigNumberify('./index.rsh:96:18:application', stdlib.UInt_max, '1')];
  const v3541 = v3540[stdlib.checkedBigNumberify('./index.rsh:96:18:application', stdlib.UInt_max, '0')];
  const v3542 = stdlib.eq(v3541, v3462);
  stdlib.assert(v3542, {
    at: './index.rsh:96:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3543 = v3539[stdlib.checkedBigNumberify('./index.rsh:97:18:application', stdlib.UInt_max, '0')];
  const v3544 = v3543[stdlib.checkedBigNumberify('./index.rsh:97:18:application', stdlib.UInt_max, '0')];
  const v3545 = stdlib.eq(v3544, v3460);
  stdlib.assert(v3545, {
    at: './index.rsh:97:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v3445, v3446, v3447, v3448, v3449, v3450, v3451, v3452, v3453, v3460, v3462, v3476, v3511, v3539],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3456,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:101:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v3548, time: v3547, didSend: v137, from: v3546 } = txn2;
      
      ;
      
      const v3551 = stdlib.checkedBigNumberify('./index.rsh:125:19:decimal', stdlib.UInt_max, '0');
      const v3552 = v3447;
      const v3554 = v3450;
      const v3555 = v3452;
      const v3556 = v3453;
      const v3557 = v3449;
      const v3558 = v3448;
      const v3559 = stdlib.checkedBigNumberify('./index.rsh:119:19:decimal', stdlib.UInt_max, '0');
      const v3560 = stdlib.checkedBigNumberify('./index.rsh:121:19:decimal', stdlib.UInt_max, '0');
      const v3561 = stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0');
      const v3562 = v3451;
      const v3563 = v3451;
      const v3564 = v3446;
      const v3565 = v3547;
      const v3571 = v3539;
      const v3572 = stdlib.checkedBigNumberify('./index.rsh:46:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc6, ctc6, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v3548, time: v3547, didSend: v137, from: v3546 } = txn2;
  ;
  const v3549 = stdlib.addressEq(v3445, v3546);
  stdlib.assert(v3549, {
    at: './index.rsh:101:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc7, await interact.ready(), {
    at: './index.rsh:102:23:application',
    fs: ['at ./index.rsh:102:23:application call to [unknown function] (defined at: ./index.rsh:102:23:function exp)', 'at ./index.rsh:102:23:application call to "liftedInteract" (defined at: ./index.rsh:102:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v3551 = stdlib.checkedBigNumberify('./index.rsh:125:19:decimal', stdlib.UInt_max, '0');
  let v3552 = v3447;
  let v3554 = v3450;
  let v3555 = v3452;
  let v3556 = v3453;
  let v3557 = v3449;
  let v3558 = v3448;
  let v3559 = stdlib.checkedBigNumberify('./index.rsh:119:19:decimal', stdlib.UInt_max, '0');
  let v3560 = stdlib.checkedBigNumberify('./index.rsh:121:19:decimal', stdlib.UInt_max, '0');
  let v3561 = stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0');
  let v3562 = v3451;
  let v3563 = v3451;
  let v3564 = v3446;
  let v3565 = v3547;
  let v3571 = v3539;
  let v3572 = stdlib.checkedBigNumberify('./index.rsh:46:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn3;
    switch (v4301[0]) {
      case 'AdminAPI_claimAdminFee0_192': {
        const v4304 = v4301[1];
        undefined /* setApiDetails */;
        ;
        const v4438 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v4439 = v4438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v4443 = v4438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v4444 = v4438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v4445 = [v4439, v4443, v4444];
        const v4446 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v4445);
        ;
        const v4447 = v4446[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v4448 = v4447[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v4452 = v4447[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v4453 = v4447[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v4454 = [v4448, v4452, v4453];
        const v4455 = stdlib.Array_set(v4446, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v4454);
        ;
        const v4457 = stdlib.addressEq(v4300, v3445);
        stdlib.assert(v4457, {
          at: './index.rsh:251:16:application',
          fs: ['at ./index.rsh:250:11:application call to [unknown function] (defined at: ./index.rsh:250:11:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4461 = stdlib.sub(v3572, v3551);
        ;
        const v4462 = true;
        await txn3.getOutput('AdminAPI_claimAdminFee', 'v4462', ctc12, v4462);
        const cv3551 = stdlib.checkedBigNumberify('./index.rsh:261:11:decimal', stdlib.UInt_max, '0');
        const cv3552 = v3552;
        const cv3554 = v3554;
        const cv3555 = v3555;
        const cv3556 = v3556;
        const cv3557 = v3557;
        const cv3558 = v3558;
        const cv3559 = v3559;
        const cv3560 = v3560;
        const cv3561 = v3561;
        const cv3562 = v3562;
        const cv3563 = v3563;
        const cv3564 = v3564;
        const cv3565 = v4302;
        const cv3571 = v4455;
        const cv3572 = v4461;
        
        v3551 = cv3551;
        v3552 = cv3552;
        v3554 = cv3554;
        v3555 = cv3555;
        v3556 = cv3556;
        v3557 = cv3557;
        v3558 = cv3558;
        v3559 = cv3559;
        v3560 = cv3560;
        v3561 = cv3561;
        v3562 = cv3562;
        v3563 = cv3563;
        v3564 = cv3564;
        v3565 = cv3565;
        v3571 = cv3571;
        v3572 = cv3572;
        
        continue;
        break;
        }
      case 'AdminAPI_closeBank0_192': {
        const v5052 = v4301[1];
        undefined /* setApiDetails */;
        ;
        const v5186 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v5187 = v5186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v5191 = v5186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v5192 = v5186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v5193 = [v5187, v5191, v5192];
        const v5194 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v5193);
        ;
        const v5195 = v5194[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v5196 = v5195[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v5200 = v5195[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v5201 = v5195[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v5202 = [v5196, v5200, v5201];
        const v5203 = stdlib.Array_set(v5194, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v5202);
        ;
        const v5218 = stdlib.addressEq(v4300, v3445);
        const v5219 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:304:35:decimal', stdlib.UInt_max, '0'));
        const v5220 = v5218 ? v5219 : false;
        const v5221 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:305:36:decimal', stdlib.UInt_max, '0'));
        const v5222 = v5220 ? v5221 : false;
        const v5223 = v5203[stdlib.checkedBigNumberify('./index.rsh:306:21:application', stdlib.UInt_max, '1')];
        const v5224 = v5223[stdlib.checkedBigNumberify('./index.rsh:306:21:application', stdlib.UInt_max, '0')];
        const v5225 = stdlib.eq(v5224, v3462);
        const v5226 = v5222 ? v5225 : false;
        const v5227 = v5203[stdlib.checkedBigNumberify('./index.rsh:307:21:application', stdlib.UInt_max, '0')];
        const v5228 = v5227[stdlib.checkedBigNumberify('./index.rsh:307:21:application', stdlib.UInt_max, '0')];
        const v5229 = stdlib.eq(v5228, v3460);
        const v5230 = v5226 ? v5229 : false;
        stdlib.assert(v5230, {
          at: './index.rsh:303:16:application',
          fs: ['at ./index.rsh:302:11:application call to [unknown function] (defined at: ./index.rsh:302:11:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v5238 = true;
        await txn3.getOutput('AdminAPI_closeBank', 'v5238', ctc12, v5238);
        const cv3551 = v3551;
        const cv3552 = v3552;
        const cv3554 = v3554;
        const cv3555 = v3555;
        const cv3556 = v3556;
        const cv3557 = v3557;
        const cv3558 = v3558;
        const cv3559 = v3559;
        const cv3560 = v3560;
        const cv3561 = v3561;
        const cv3562 = v3562;
        const cv3563 = v3563;
        const cv3564 = v3564;
        const cv3565 = v4302;
        const cv3571 = v5203;
        const cv3572 = v3572;
        
        v3551 = cv3551;
        v3552 = cv3552;
        v3554 = cv3554;
        v3555 = cv3555;
        v3556 = cv3556;
        v3557 = cv3557;
        v3558 = cv3558;
        v3559 = cv3559;
        v3560 = cv3560;
        v3561 = cv3561;
        v3562 = cv3562;
        v3563 = cv3563;
        v3564 = cv3564;
        v3565 = cv3565;
        v3571 = cv3571;
        v3572 = cv3572;
        
        continue;
        break;
        }
      case 'AdminAPI_setAdminFee0_192': {
        const v5800 = v4301[1];
        undefined /* setApiDetails */;
        ;
        const v5934 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v5935 = v5934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v5939 = v5934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v5940 = v5934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v5941 = [v5935, v5939, v5940];
        const v5942 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v5941);
        ;
        const v5943 = v5942[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v5944 = v5943[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v5948 = v5943[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v5949 = v5943[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v5950 = [v5944, v5948, v5949];
        const v5951 = stdlib.Array_set(v5942, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v5950);
        ;
        const v5994 = v5800[stdlib.checkedBigNumberify('./index.rsh:225:9:spread', stdlib.UInt_max, '0')];
        const v5995 = v5800[stdlib.checkedBigNumberify('./index.rsh:225:9:spread', stdlib.UInt_max, '1')];
        const v5996 = stdlib.add(v5994, v5995);
        const v5997 = stdlib.eq(v5996, stdlib.checkedBigNumberify('./index.rsh:229:49:decimal', stdlib.UInt_max, '100'));
        stdlib.assert(v5997, {
          at: './index.rsh:229:16:application',
          fs: ['at ./index.rsh:228:40:application call to [unknown function] (defined at: ./index.rsh:228:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6001 = stdlib.sub(v3572, v3551);
        ;
        const v6002 = true;
        await txn3.getOutput('AdminAPI_setAdminFee', 'v6002', ctc12, v6002);
        const cv3551 = stdlib.checkedBigNumberify('./index.rsh:239:11:decimal', stdlib.UInt_max, '0');
        const cv3552 = v5994;
        const cv3554 = v3554;
        const cv3555 = v3555;
        const cv3556 = v3556;
        const cv3557 = v3557;
        const cv3558 = v5995;
        const cv3559 = v3559;
        const cv3560 = v3560;
        const cv3561 = v3561;
        const cv3562 = v3562;
        const cv3563 = v3563;
        const cv3564 = v3564;
        const cv3565 = v4302;
        const cv3571 = v5951;
        const cv3572 = v6001;
        
        v3551 = cv3551;
        v3552 = cv3552;
        v3554 = cv3554;
        v3555 = cv3555;
        v3556 = cv3556;
        v3557 = cv3557;
        v3558 = cv3558;
        v3559 = cv3559;
        v3560 = cv3560;
        v3561 = cv3561;
        v3562 = cv3562;
        v3563 = cv3563;
        v3564 = cv3564;
        v3565 = cv3565;
        v3571 = cv3571;
        v3572 = cv3572;
        
        continue;
        break;
        }
      case 'AdminAPI_updatePrice0_192': {
        const v6548 = v4301[1];
        undefined /* setApiDetails */;
        ;
        const v6682 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v6683 = v6682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v6687 = v6682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v6688 = v6682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v6689 = [v6683, v6687, v6688];
        const v6690 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v6689);
        ;
        const v6691 = v6690[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v6692 = v6691[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v6696 = v6691[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v6697 = v6691[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v6698 = [v6692, v6696, v6697];
        const v6699 = stdlib.Array_set(v6690, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v6698);
        ;
        const v6760 = v6548[stdlib.checkedBigNumberify('./index.rsh:204:9:spread', stdlib.UInt_max, '0')];
        const v6761 = stdlib.gt(v6760, stdlib.checkedBigNumberify('./index.rsh:208:25:decimal', stdlib.UInt_max, '0'));
        const v6762 = stdlib.addressEq(v4300, v3445);
        const v6763 = v6761 ? v6762 : false;
        stdlib.assert(v6763, {
          at: './index.rsh:208:16:application',
          fs: ['at ./index.rsh:207:18:application call to [unknown function] (defined at: ./index.rsh:207:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6764 = true;
        await txn3.getOutput('AdminAPI_updatePrice', 'v6764', ctc12, v6764);
        const cv3551 = v3551;
        const cv3552 = v3552;
        const cv3554 = v3554;
        const cv3555 = v3555;
        const cv3556 = v3563;
        const cv3557 = v3557;
        const cv3558 = v3558;
        const cv3559 = v3559;
        const cv3560 = v3560;
        const cv3561 = v3561;
        const cv3562 = v6760;
        const cv3563 = v6760;
        const cv3564 = v3564;
        const cv3565 = v4302;
        const cv3571 = v6699;
        const cv3572 = v3572;
        
        v3551 = cv3551;
        v3552 = cv3552;
        v3554 = cv3554;
        v3555 = cv3555;
        v3556 = cv3556;
        v3557 = cv3557;
        v3558 = cv3558;
        v3559 = cv3559;
        v3560 = cv3560;
        v3561 = cv3561;
        v3562 = cv3562;
        v3563 = cv3563;
        v3564 = cv3564;
        v3565 = cv3565;
        v3571 = cv3571;
        v3572 = cv3572;
        
        continue;
        break;
        }
      case 'Claimant_burnReserve0_192': {
        const v7296 = v4301[1];
        undefined /* setApiDetails */;
        const v7344 = v7296[stdlib.checkedBigNumberify('./index.rsh:406:9:spread', stdlib.UInt_max, '0')];
        ;
        const v7430 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v7431 = v7430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v7435 = v7430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v7436 = v7430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v7437 = [v7431, v7435, v7436];
        const v7438 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v7437);
        ;
        const v7439 = v7438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v7440 = v7439[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v7441 = stdlib.add(v7440, v7344);
        const v7444 = v7439[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v7445 = v7439[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v7446 = [v7441, v7444, v7445];
        const v7447 = stdlib.Array_set(v7438, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v7446);
        ;
        let v7522;
        const v7523 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:163:23:decimal', stdlib.UInt_max, '0'));
        let v7524;
        const v7525 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
        if (v7525) {
          v7524 = v3562;
          }
        else {
          const v7526 = stdlib.div(v3560, v3561);
          const v7527 = stdlib.gt(v7526, v3562);
          const v7529 = v7527 ? v3562 : v7526;
          v7524 = v7529;
          }
        const v7530 = stdlib.mul(v3561, v7524);
        const v7531 = stdlib.sub(v3560, v7530);
        const v7532 = stdlib.eq(v7531, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
        const v7533 = v7523 ? true : v7532;
        if (v7533) {
          v7522 = v3555;
          }
        else {
          let v7534;
          if (v7525) {
            v7534 = v3562;
            }
          else {
            const v7536 = stdlib.div(v3560, v3561);
            const v7537 = stdlib.gt(v7536, v3562);
            const v7539 = v7537 ? v3562 : v7536;
            v7534 = v7539;
            }
          const v7540 = stdlib.mul(v3561, v7534);
          const v7541 = stdlib.sub(v3560, v7540);
          const v7542 = stdlib.div(v7541, v3559);
          const v7543 = stdlib.gt(v7542, v3555);
          let v7544;
          if (v7525) {
            v7544 = v3562;
            }
          else {
            const v7546 = stdlib.div(v3560, v3561);
            const v7547 = stdlib.gt(v7546, v3562);
            const v7549 = v7547 ? v3562 : v7546;
            v7544 = v7549;
            }
          const v7550 = stdlib.mul(v3561, v7544);
          const v7551 = stdlib.sub(v3560, v7550);
          const v7552 = stdlib.div(v7551, v3559);
          const v7553 = v7543 ? v7552 : v3555;
          v7522 = v7553;
          }
        const v7554 = stdlib.div(v7344, v7522);
        const v7555 = stdlib.mul(v7554, v3564);
        const v7556 = stdlib.div(v7555, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
        let v7557;
        if (v7525) {
          v7557 = v3562;
          }
        else {
          const v7559 = stdlib.div(v3560, v3561);
          const v7560 = stdlib.gt(v7559, v3562);
          const v7562 = v7560 ? v3562 : v7559;
          v7557 = v7562;
          }
        const v7563 = stdlib.mul(v3561, v7557);
        const v7564 = stdlib.div(v3560, v7563);
        const v7565 = stdlib.ge(v7564, v3557);
        let v7566;
        let v7568;
        if (v7525) {
          v7568 = v3562;
          }
        else {
          const v7570 = stdlib.div(v3560, v3561);
          const v7571 = stdlib.gt(v7570, v3562);
          const v7573 = v7571 ? v3562 : v7570;
          v7568 = v7573;
          }
        const v7574 = stdlib.mul(v3561, v7568);
        const v7575 = stdlib.sub(v3560, v7574);
        const v7576 = stdlib.eq(v7575, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
        const v7577 = v7523 ? true : v7576;
        if (v7577) {
          v7566 = v3555;
          }
        else {
          let v7578;
          if (v7525) {
            v7578 = v3562;
            }
          else {
            const v7580 = stdlib.div(v3560, v3561);
            const v7581 = stdlib.gt(v7580, v3562);
            const v7583 = v7581 ? v3562 : v7580;
            v7578 = v7583;
            }
          const v7584 = stdlib.mul(v3561, v7578);
          const v7585 = stdlib.sub(v3560, v7584);
          const v7586 = stdlib.div(v7585, v3559);
          const v7587 = stdlib.gt(v7586, v3555);
          let v7588;
          if (v7525) {
            v7588 = v3562;
            }
          else {
            const v7590 = stdlib.div(v3560, v3561);
            const v7591 = stdlib.gt(v7590, v3562);
            const v7593 = v7591 ? v3562 : v7590;
            v7588 = v7593;
            }
          const v7594 = stdlib.mul(v3561, v7588);
          const v7595 = stdlib.sub(v3560, v7594);
          const v7596 = stdlib.div(v7595, v3559);
          const v7597 = v7587 ? v7596 : v3555;
          v7566 = v7597;
          }
        const v7598 = stdlib.div(v7344, v7566);
        const v7599 = stdlib.gt(v7598, stdlib.checkedBigNumberify('./index.rsh:417:115:decimal', stdlib.UInt_max, '0'));
        const v7600 = v7565 ? v7599 : false;
        const v7602 = stdlib.ge(v3572, v7554);
        const v7603 = v7600 ? v7602 : false;
        const v7608 = stdlib.mul(v7556, v3558);
        const v7609 = stdlib.div(v7608, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v7612 = stdlib.mul(v7556, v3552);
        const v7613 = stdlib.div(v7612, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v7614 = stdlib.add(v7609, v7613);
        const v7615 = stdlib.eq(v7556, v7614);
        const v7616 = v7603 ? v7615 : false;
        stdlib.assert(v7616, {
          at: './index.rsh:416:14:application',
          fs: ['at ./index.rsh:413:23:application call to [unknown function] (defined at: ./index.rsh:413:23:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v7617 = stdlib.sub(v7554, v7556);
        const v7621 = stdlib.sub(v3572, v7617);
        ;
        const v7622 = true;
        await txn3.getOutput('Claimant_burnReserve', 'v7622', ctc12, v7622);
        const v7629 = stdlib.sub(v3559, v7344);
        const v7630 = stdlib.sub(v3560, v7554);
        const v7635 = stdlib.add(v7630, v7609);
        const v7640 = stdlib.add(v3551, v7613);
        const cv3551 = v7640;
        const cv3552 = v3552;
        const cv3554 = v3554;
        const cv3555 = v3555;
        const cv3556 = v3563;
        const cv3557 = v3557;
        const cv3558 = v3558;
        const cv3559 = v7629;
        const cv3560 = v7635;
        const cv3561 = v3561;
        const cv3562 = v3562;
        const cv3563 = v3556;
        const cv3564 = v3564;
        const cv3565 = v4302;
        const cv3571 = v7447;
        const cv3572 = v7621;
        
        v3551 = cv3551;
        v3552 = cv3552;
        v3554 = cv3554;
        v3555 = cv3555;
        v3556 = cv3556;
        v3557 = cv3557;
        v3558 = cv3558;
        v3559 = cv3559;
        v3560 = cv3560;
        v3561 = cv3561;
        v3562 = cv3562;
        v3563 = cv3563;
        v3564 = cv3564;
        v3565 = cv3565;
        v3571 = cv3571;
        v3572 = cv3572;
        
        continue;
        break;
        }
      case 'Claimant_burnStable0_192': {
        const v8044 = v4301[1];
        undefined /* setApiDetails */;
        const v8103 = v8044[stdlib.checkedBigNumberify('./index.rsh:381:9:spread', stdlib.UInt_max, '0')];
        ;
        const v8178 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v8179 = v8178[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v8180 = stdlib.add(v8179, v8103);
        const v8183 = v8178[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v8184 = v8178[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v8185 = [v8180, v8183, v8184];
        const v8186 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v8185);
        ;
        const v8187 = v8186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v8188 = v8187[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v8192 = v8187[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v8193 = v8187[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v8194 = [v8188, v8192, v8193];
        const v8195 = stdlib.Array_set(v8186, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v8194);
        ;
        let v8392;
        const v8393 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
        if (v8393) {
          v8392 = v3562;
          }
        else {
          const v8394 = stdlib.div(v3560, v3561);
          const v8395 = stdlib.gt(v8394, v3562);
          const v8397 = v8395 ? v3562 : v8394;
          v8392 = v8397;
          }
        const v8398 = stdlib.div(v8103, v8392);
        const v8400 = stdlib.ge(v3572, v8398);
        const v8401 = stdlib.mul(v8398, v3564);
        const v8402 = stdlib.div(v8401, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
        const v8405 = stdlib.mul(v8402, v3558);
        const v8406 = stdlib.div(v8405, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        let v8407;
        if (v8393) {
          v8407 = v3562;
          }
        else {
          const v8409 = stdlib.div(v3560, v3561);
          const v8410 = stdlib.gt(v8409, v3562);
          const v8412 = v8410 ? v3562 : v8409;
          v8407 = v8412;
          }
        const v8413 = stdlib.div(v8103, v8407);
        const v8414 = stdlib.mul(v8413, v3564);
        const v8415 = stdlib.div(v8414, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
        const v8416 = stdlib.mul(v8415, v3552);
        const v8417 = stdlib.div(v8416, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v8418 = stdlib.add(v8406, v8417);
        const v8419 = stdlib.eq(v8402, v8418);
        const v8420 = v8400 ? v8419 : false;
        stdlib.assert(v8420, {
          at: './index.rsh:387:14:application',
          fs: ['at ./index.rsh:385:23:application call to [unknown function] (defined at: ./index.rsh:385:23:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v8423 = stdlib.sub(v8398, v8402);
        const v8427 = stdlib.sub(v3572, v8423);
        ;
        const v8428 = true;
        await txn3.getOutput('Claimant_burnStable', 'v8428', ctc12, v8428);
        const v8435 = stdlib.sub(v3561, v8103);
        let v8436;
        if (v8393) {
          v8436 = v3562;
          }
        else {
          const v8438 = stdlib.div(v3560, v3561);
          const v8439 = stdlib.gt(v8438, v3562);
          const v8441 = v8439 ? v3562 : v8438;
          v8436 = v8441;
          }
        const v8442 = stdlib.div(v8103, v8436);
        const v8443 = stdlib.sub(v3560, v8442);
        let v8444;
        if (v8393) {
          v8444 = v3562;
          }
        else {
          const v8446 = stdlib.div(v3560, v3561);
          const v8447 = stdlib.gt(v8446, v3562);
          const v8449 = v8447 ? v3562 : v8446;
          v8444 = v8449;
          }
        const v8450 = stdlib.div(v8103, v8444);
        const v8451 = stdlib.mul(v8450, v3564);
        const v8452 = stdlib.div(v8451, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
        const v8453 = stdlib.mul(v8452, v3558);
        const v8454 = stdlib.div(v8453, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v8455 = stdlib.add(v8443, v8454);
        let v8456;
        if (v8393) {
          v8456 = v3562;
          }
        else {
          const v8458 = stdlib.div(v3560, v3561);
          const v8459 = stdlib.gt(v8458, v3562);
          const v8461 = v8459 ? v3562 : v8458;
          v8456 = v8461;
          }
        const v8462 = stdlib.div(v8103, v8456);
        const v8463 = stdlib.mul(v8462, v3564);
        const v8464 = stdlib.div(v8463, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
        const v8465 = stdlib.mul(v8464, v3552);
        const v8466 = stdlib.div(v8465, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v8467 = stdlib.add(v3551, v8466);
        const cv3551 = v8467;
        const cv3552 = v3552;
        const cv3554 = v3554;
        const cv3555 = v3555;
        const cv3556 = v3563;
        const cv3557 = v3557;
        const cv3558 = v3558;
        const cv3559 = v3559;
        const cv3560 = v8455;
        const cv3561 = v8435;
        const cv3562 = v3562;
        const cv3563 = v3556;
        const cv3564 = v3564;
        const cv3565 = v4302;
        const cv3571 = v8195;
        const cv3572 = v8427;
        
        v3551 = cv3551;
        v3552 = cv3552;
        v3554 = cv3554;
        v3555 = cv3555;
        v3556 = cv3556;
        v3557 = cv3557;
        v3558 = cv3558;
        v3559 = cv3559;
        v3560 = cv3560;
        v3561 = cv3561;
        v3562 = cv3562;
        v3563 = cv3563;
        v3564 = cv3564;
        v3565 = cv3565;
        v3571 = cv3571;
        v3572 = cv3572;
        
        continue;
        break;
        }
      case 'Claimant_mintFirstStable0_192': {
        const v8792 = v4301[1];
        undefined /* setApiDetails */;
        const v8862 = v8792[stdlib.checkedBigNumberify('./index.rsh:269:9:spread', stdlib.UInt_max, '0')];
        const v8863 = stdlib.mul(v8862, v3564);
        const v8864 = stdlib.div(v8863, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
        const v8865 = stdlib.add(v8862, v8864);
        const v8925 = stdlib.add(v3572, v8865);
        ;
        const v8926 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v8927 = v8926[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v8931 = v8926[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v8932 = v8926[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v8933 = [v8927, v8931, v8932];
        const v8934 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v8933);
        ;
        const v8935 = v8934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v8936 = v8935[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v8940 = v8935[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v8941 = v8935[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v8942 = [v8936, v8940, v8941];
        const v8943 = stdlib.Array_set(v8934, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v8942);
        ;
        const v9219 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:275:38:decimal', stdlib.UInt_max, '0'));
        let v9220;
        if (v9219) {
          v9220 = v3562;
          }
        else {
          const v9222 = stdlib.div(v3560, v3561);
          const v9223 = stdlib.gt(v9222, v3562);
          const v9225 = v9223 ? v3562 : v9222;
          v9220 = v9225;
          }
        const v9226 = stdlib.div(v8862, v9220);
        const v9227 = v8943[stdlib.checkedBigNumberify('./index.rsh:276:91:application', stdlib.UInt_max, '1')];
        const v9228 = v9227[stdlib.checkedBigNumberify('./index.rsh:276:91:application', stdlib.UInt_max, '0')];
        const v9229 = stdlib.le(v9226, v9228);
        const v9230 = v9219 ? v9229 : false;
        const v9235 = stdlib.mul(v8864, v3558);
        const v9236 = stdlib.div(v9235, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v9239 = stdlib.mul(v8864, v3552);
        const v9240 = stdlib.div(v9239, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v9241 = stdlib.add(v9236, v9240);
        const v9242 = stdlib.eq(v8864, v9241);
        const v9243 = v9230 ? v9242 : false;
        stdlib.assert(v9243, {
          at: './index.rsh:275:16:application',
          fs: ['at ./index.rsh:274:23:application call to [unknown function] (defined at: ./index.rsh:274:23:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v9244 = stdlib.div(v8862, v3562);
        const v9250 = stdlib.sub(v9228, v9244);
        const v9253 = v9227[stdlib.checkedBigNumberify('./index.rsh:278:72:application', stdlib.UInt_max, '1')];
        const v9254 = v9227[stdlib.checkedBigNumberify('./index.rsh:278:72:application', stdlib.UInt_max, '2')];
        const v9255 = [v9250, v9253, v9254];
        const v9256 = stdlib.Array_set(v8943, stdlib.checkedBigNumberify('./index.rsh:278:72:application', stdlib.UInt_max, '1'), v9255);
        ;
        const v9257 = true;
        await txn3.getOutput('Claimant_mintFirstStable', 'v9257', ctc12, v9257);
        const v9265 = stdlib.add(v3561, v9244);
        const v9266 = stdlib.add(v3560, v8862);
        const v9271 = stdlib.add(v9266, v9236);
        const v9276 = stdlib.add(v3551, v9240);
        const cv3551 = v9276;
        const cv3552 = v3552;
        const cv3554 = v3554;
        const cv3555 = v3555;
        const cv3556 = v3563;
        const cv3557 = v3557;
        const cv3558 = v3558;
        const cv3559 = v3559;
        const cv3560 = v9271;
        const cv3561 = v9265;
        const cv3562 = v3562;
        const cv3563 = v3556;
        const cv3564 = v3564;
        const cv3565 = v4302;
        const cv3571 = v9256;
        const cv3572 = v8925;
        
        v3551 = cv3551;
        v3552 = cv3552;
        v3554 = cv3554;
        v3555 = cv3555;
        v3556 = cv3556;
        v3557 = cv3557;
        v3558 = cv3558;
        v3559 = cv3559;
        v3560 = cv3560;
        v3561 = cv3561;
        v3562 = cv3562;
        v3563 = cv3563;
        v3564 = cv3564;
        v3565 = cv3565;
        v3571 = cv3571;
        v3572 = cv3572;
        
        continue;
        break;
        }
      case 'Claimant_mintReserve0_192': {
        const v9540 = v4301[1];
        undefined /* setApiDetails */;
        const v9624 = v9540[stdlib.checkedBigNumberify('./index.rsh:355:9:spread', stdlib.UInt_max, '0')];
        const v9625 = stdlib.mul(v9624, v3564);
        const v9626 = stdlib.div(v9625, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
        const v9627 = stdlib.add(v9624, v9626);
        const v9673 = stdlib.add(v3572, v9627);
        ;
        const v9674 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v9675 = v9674[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v9679 = v9674[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v9680 = v9674[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v9681 = [v9675, v9679, v9680];
        const v9682 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v9681);
        ;
        const v9683 = v9682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v9684 = v9683[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v9688 = v9683[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v9689 = v9683[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v9690 = [v9684, v9688, v9689];
        const v9691 = stdlib.Array_set(v9682, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v9690);
        ;
        const v10030 = stdlib.mul(v9626, v3558);
        const v10031 = stdlib.div(v10030, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v10032 = stdlib.add(v3560, v10031);
        let v10033;
        const v10034 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
        if (v10034) {
          v10033 = v3562;
          }
        else {
          const v10035 = stdlib.div(v10032, v3561);
          const v10036 = stdlib.gt(v10035, v3562);
          const v10038 = v10036 ? v3562 : v10035;
          v10033 = v10038;
          }
        const v10039 = stdlib.mul(v3561, v10033);
        const v10040 = stdlib.div(v10032, v10039);
        const v10041 = stdlib.le(v10040, v3554);
        const v10042 = stdlib.lt(v3561, v3563);
        const v10043 = v10041 ? true : v10042;
        let v10044;
        const v10045 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:163:23:decimal', stdlib.UInt_max, '0'));
        let v10046;
        if (v10034) {
          v10046 = v3562;
          }
        else {
          const v10048 = stdlib.div(v3560, v3561);
          const v10049 = stdlib.gt(v10048, v3562);
          const v10051 = v10049 ? v3562 : v10048;
          v10046 = v10051;
          }
        const v10052 = stdlib.mul(v3561, v10046);
        const v10053 = stdlib.sub(v3560, v10052);
        const v10054 = stdlib.eq(v10053, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
        const v10055 = v10045 ? true : v10054;
        if (v10055) {
          v10044 = v3555;
          }
        else {
          let v10056;
          if (v10034) {
            v10056 = v3562;
            }
          else {
            const v10058 = stdlib.div(v3560, v3561);
            const v10059 = stdlib.gt(v10058, v3562);
            const v10061 = v10059 ? v3562 : v10058;
            v10056 = v10061;
            }
          const v10062 = stdlib.mul(v3561, v10056);
          const v10063 = stdlib.sub(v3560, v10062);
          const v10064 = stdlib.div(v10063, v3559);
          const v10065 = stdlib.gt(v10064, v3555);
          let v10066;
          if (v10034) {
            v10066 = v3562;
            }
          else {
            const v10068 = stdlib.div(v3560, v3561);
            const v10069 = stdlib.gt(v10068, v3562);
            const v10071 = v10069 ? v3562 : v10068;
            v10066 = v10071;
            }
          const v10072 = stdlib.mul(v3561, v10066);
          const v10073 = stdlib.sub(v3560, v10072);
          const v10074 = stdlib.div(v10073, v3559);
          const v10075 = v10065 ? v10074 : v3555;
          v10044 = v10075;
          }
        const v10076 = stdlib.div(v9624, v10044);
        const v10077 = v9691[stdlib.checkedBigNumberify('./index.rsh:362:122:application', stdlib.UInt_max, '0')];
        const v10078 = v10077[stdlib.checkedBigNumberify('./index.rsh:362:122:application', stdlib.UInt_max, '0')];
        const v10079 = stdlib.le(v10076, v10078);
        const v10080 = v10043 ? v10079 : false;
        const v10089 = stdlib.mul(v9626, v3552);
        const v10090 = stdlib.div(v10089, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v10091 = stdlib.add(v10031, v10090);
        const v10092 = stdlib.eq(v9626, v10091);
        const v10093 = v10080 ? v10092 : false;
        stdlib.assert(v10093, {
          at: './index.rsh:361:14:application',
          fs: ['at ./index.rsh:360:21:application call to [unknown function] (defined at: ./index.rsh:360:21:function exp)'],
          msg: null,
          who: 'Admin'
          });
        let v10094;
        let v10096;
        if (v10034) {
          v10096 = v3562;
          }
        else {
          const v10098 = stdlib.div(v3560, v3561);
          const v10099 = stdlib.gt(v10098, v3562);
          const v10101 = v10099 ? v3562 : v10098;
          v10096 = v10101;
          }
        const v10102 = stdlib.mul(v3561, v10096);
        const v10103 = stdlib.sub(v3560, v10102);
        const v10104 = stdlib.eq(v10103, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
        const v10105 = v10045 ? true : v10104;
        if (v10105) {
          v10094 = v3555;
          }
        else {
          let v10106;
          if (v10034) {
            v10106 = v3562;
            }
          else {
            const v10108 = stdlib.div(v3560, v3561);
            const v10109 = stdlib.gt(v10108, v3562);
            const v10111 = v10109 ? v3562 : v10108;
            v10106 = v10111;
            }
          const v10112 = stdlib.mul(v3561, v10106);
          const v10113 = stdlib.sub(v3560, v10112);
          const v10114 = stdlib.div(v10113, v3559);
          const v10115 = stdlib.gt(v10114, v3555);
          let v10116;
          if (v10034) {
            v10116 = v3562;
            }
          else {
            const v10118 = stdlib.div(v3560, v3561);
            const v10119 = stdlib.gt(v10118, v3562);
            const v10121 = v10119 ? v3562 : v10118;
            v10116 = v10121;
            }
          const v10122 = stdlib.mul(v3561, v10116);
          const v10123 = stdlib.sub(v3560, v10122);
          const v10124 = stdlib.div(v10123, v3559);
          const v10125 = v10115 ? v10124 : v3555;
          v10094 = v10125;
          }
        const v10126 = stdlib.div(v9624, v10094);
        const v10132 = stdlib.sub(v10078, v10126);
        const v10135 = v10077[stdlib.checkedBigNumberify('./index.rsh:364:145:application', stdlib.UInt_max, '1')];
        const v10136 = v10077[stdlib.checkedBigNumberify('./index.rsh:364:145:application', stdlib.UInt_max, '2')];
        const v10137 = [v10132, v10135, v10136];
        const v10138 = stdlib.Array_set(v9691, stdlib.checkedBigNumberify('./index.rsh:364:145:application', stdlib.UInt_max, '0'), v10137);
        ;
        const v10139 = true;
        await txn3.getOutput('Claimant_mintReserve', 'v10139', ctc12, v10139);
        let v10146;
        let v10148;
        if (v10034) {
          v10148 = v3562;
          }
        else {
          const v10150 = stdlib.div(v3560, v3561);
          const v10151 = stdlib.gt(v10150, v3562);
          const v10153 = v10151 ? v3562 : v10150;
          v10148 = v10153;
          }
        const v10154 = stdlib.mul(v3561, v10148);
        const v10155 = stdlib.sub(v3560, v10154);
        const v10156 = stdlib.eq(v10155, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
        const v10157 = v10045 ? true : v10156;
        if (v10157) {
          v10146 = v3555;
          }
        else {
          let v10158;
          if (v10034) {
            v10158 = v3562;
            }
          else {
            const v10160 = stdlib.div(v3560, v3561);
            const v10161 = stdlib.gt(v10160, v3562);
            const v10163 = v10161 ? v3562 : v10160;
            v10158 = v10163;
            }
          const v10164 = stdlib.mul(v3561, v10158);
          const v10165 = stdlib.sub(v3560, v10164);
          const v10166 = stdlib.div(v10165, v3559);
          const v10167 = stdlib.gt(v10166, v3555);
          let v10168;
          if (v10034) {
            v10168 = v3562;
            }
          else {
            const v10170 = stdlib.div(v3560, v3561);
            const v10171 = stdlib.gt(v10170, v3562);
            const v10173 = v10171 ? v3562 : v10170;
            v10168 = v10173;
            }
          const v10174 = stdlib.mul(v3561, v10168);
          const v10175 = stdlib.sub(v3560, v10174);
          const v10176 = stdlib.div(v10175, v3559);
          const v10177 = v10167 ? v10176 : v3555;
          v10146 = v10177;
          }
        const v10178 = stdlib.div(v9624, v10146);
        const v10179 = stdlib.add(v3559, v10178);
        const v10180 = stdlib.add(v3560, v9624);
        const v10185 = stdlib.add(v10180, v10031);
        const v10190 = stdlib.add(v3551, v10090);
        const cv3551 = v10190;
        const cv3552 = v3552;
        const cv3554 = v3554;
        const cv3555 = v3555;
        const cv3556 = v3563;
        const cv3557 = v3557;
        const cv3558 = v3558;
        const cv3559 = v10179;
        const cv3560 = v10185;
        const cv3561 = v3561;
        const cv3562 = v3562;
        const cv3563 = v3556;
        const cv3564 = v3564;
        const cv3565 = v4302;
        const cv3571 = v10138;
        const cv3572 = v9673;
        
        v3551 = cv3551;
        v3552 = cv3552;
        v3554 = cv3554;
        v3555 = cv3555;
        v3556 = cv3556;
        v3557 = cv3557;
        v3558 = cv3558;
        v3559 = cv3559;
        v3560 = cv3560;
        v3561 = cv3561;
        v3562 = cv3562;
        v3563 = cv3563;
        v3564 = cv3564;
        v3565 = cv3565;
        v3571 = cv3571;
        v3572 = cv3572;
        
        continue;
        break;
        }
      case 'Claimant_mintStable0_192': {
        const v10288 = v4301[1];
        undefined /* setApiDetails */;
        const v10386 = v10288[stdlib.checkedBigNumberify('./index.rsh:326:9:spread', stdlib.UInt_max, '0')];
        const v10387 = stdlib.mul(v10386, v3564);
        const v10388 = stdlib.div(v10387, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
        const v10389 = stdlib.add(v10386, v10388);
        const v10421 = stdlib.add(v3572, v10389);
        ;
        const v10422 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v10423 = v10422[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v10427 = v10422[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v10428 = v10422[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v10429 = [v10423, v10427, v10428];
        const v10430 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v10429);
        ;
        const v10431 = v10430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v10432 = v10431[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
        const v10436 = v10431[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
        const v10437 = v10431[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
        const v10438 = [v10432, v10436, v10437];
        const v10439 = stdlib.Array_set(v10430, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v10438);
        ;
        let v10942;
        const v10943 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
        if (v10943) {
          v10942 = v3562;
          }
        else {
          const v10944 = stdlib.div(v3560, v3561);
          const v10945 = stdlib.gt(v10944, v3562);
          const v10947 = v10945 ? v3562 : v10944;
          v10942 = v10947;
          }
        const v10948 = stdlib.mul(v3561, v10942);
        const v10949 = stdlib.div(v3560, v10948);
        const v10950 = stdlib.ge(v10949, v3557);
        const v10953 = stdlib.mul(v10388, v3558);
        const v10954 = stdlib.div(v10953, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v10955 = stdlib.add(v3560, v10954);
        let v10956;
        if (v10943) {
          v10956 = v3562;
          }
        else {
          const v10958 = stdlib.div(v10955, v3561);
          const v10959 = stdlib.gt(v10958, v3562);
          const v10961 = v10959 ? v3562 : v10958;
          v10956 = v10961;
          }
        const v10962 = stdlib.mul(v3561, v10956);
        const v10963 = stdlib.div(v10955, v10962);
        const v10964 = stdlib.ge(v10963, v3557);
        const v10965 = v10950 ? v10964 : false;
        let v10966;
        if (v10943) {
          v10966 = v3562;
          }
        else {
          const v10968 = stdlib.div(v3560, v3561);
          const v10969 = stdlib.gt(v10968, v3562);
          const v10971 = v10969 ? v3562 : v10968;
          v10966 = v10971;
          }
        const v10972 = stdlib.div(v10386, v10966);
        const v10973 = v10439[stdlib.checkedBigNumberify('./index.rsh:335:91:application', stdlib.UInt_max, '1')];
        const v10974 = v10973[stdlib.checkedBigNumberify('./index.rsh:335:91:application', stdlib.UInt_max, '0')];
        const v10975 = stdlib.le(v10972, v10974);
        const v10976 = v10965 ? v10975 : false;
        const v10985 = stdlib.mul(v10388, v3552);
        const v10986 = stdlib.div(v10985, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
        const v10987 = stdlib.add(v10954, v10986);
        const v10988 = stdlib.eq(v10388, v10987);
        const v10989 = v10976 ? v10988 : false;
        stdlib.assert(v10989, {
          at: './index.rsh:333:16:application',
          fs: ['at ./index.rsh:332:23:application call to [unknown function] (defined at: ./index.rsh:332:23:function exp)'],
          msg: null,
          who: 'Admin'
          });
        let v10990;
        if (v10943) {
          v10990 = v3562;
          }
        else {
          const v10992 = stdlib.div(v3560, v3561);
          const v10993 = stdlib.gt(v10992, v3562);
          const v10995 = v10993 ? v3562 : v10992;
          v10990 = v10995;
          }
        const v10996 = stdlib.div(v10386, v10990);
        const v11002 = stdlib.sub(v10974, v10996);
        const v11005 = v10973[stdlib.checkedBigNumberify('./index.rsh:338:54:application', stdlib.UInt_max, '1')];
        const v11006 = v10973[stdlib.checkedBigNumberify('./index.rsh:338:54:application', stdlib.UInt_max, '2')];
        const v11007 = [v11002, v11005, v11006];
        const v11008 = stdlib.Array_set(v10439, stdlib.checkedBigNumberify('./index.rsh:338:54:application', stdlib.UInt_max, '1'), v11007);
        ;
        const v11009 = true;
        await txn3.getOutput('Claimant_mintStable', 'v11009', ctc12, v11009);
        let v11016;
        if (v10943) {
          v11016 = v3562;
          }
        else {
          const v11018 = stdlib.div(v3560, v3561);
          const v11019 = stdlib.gt(v11018, v3562);
          const v11021 = v11019 ? v3562 : v11018;
          v11016 = v11021;
          }
        const v11022 = stdlib.div(v10386, v11016);
        const v11023 = stdlib.add(v3561, v11022);
        const v11024 = stdlib.add(v3560, v10386);
        const v11029 = stdlib.add(v11024, v10954);
        const v11034 = stdlib.add(v3551, v10986);
        const cv3551 = v11034;
        const cv3552 = v3552;
        const cv3554 = v3554;
        const cv3555 = v3555;
        const cv3556 = v3563;
        const cv3557 = v3557;
        const cv3558 = v3558;
        const cv3559 = v3559;
        const cv3560 = v11029;
        const cv3561 = v11023;
        const cv3562 = v3562;
        const cv3563 = v3556;
        const cv3564 = v3564;
        const cv3565 = v4302;
        const cv3571 = v11008;
        const cv3572 = v10421;
        
        v3551 = cv3551;
        v3552 = cv3552;
        v3554 = cv3554;
        v3555 = cv3555;
        v3556 = cv3556;
        v3557 = cv3557;
        v3558 = cv3558;
        v3559 = cv3559;
        v3560 = cv3560;
        v3561 = cv3561;
        v3562 = cv3562;
        v3563 = cv3563;
        v3564 = cv3564;
        v3565 = cv3565;
        v3571 = cv3571;
        v3572 = cv3572;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _AdminAPI_claimAdminFee4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_claimAdminFee4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_claimAdminFee4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc6,
    AdminAPI_closeBank0_192: ctc6,
    AdminAPI_setAdminFee0_192: ctc7,
    AdminAPI_updatePrice0_192: ctc8,
    Claimant_burnReserve0_192: ctc8,
    Claimant_burnStable0_192: ctc8,
    Claimant_mintFirstStable0_192: ctc8,
    Claimant_mintReserve0_192: ctc8,
    Claimant_mintStable0_192: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v3621 = ctc.selfAddress();
  const v3623 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:248:10:application call to [unknown function] (defined at: ./index.rsh:248:10:function exp)', 'at ./index.rsh:118:17:application call to "runAdminAPI_claimAdminFee0_192" (defined at: ./index.rsh:247:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: 'in',
    who: 'AdminAPI_claimAdminFee'
    });
  const v3624 = stdlib.addressEq(v3621, v3445);
  stdlib.assert(v3624, {
    at: './index.rsh:248:19:application',
    fs: ['at ./index.rsh:248:10:application call to [unknown function] (defined at: ./index.rsh:248:10:function exp)', 'at ./index.rsh:248:10:application call to [unknown function] (defined at: ./index.rsh:248:10:function exp)', 'at ./index.rsh:118:17:application call to "runAdminAPI_claimAdminFee0_192" (defined at: ./index.rsh:247:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: null,
    who: 'AdminAPI_claimAdminFee'
    });
  const v3627 = ['AdminAPI_claimAdminFee0_192', v3623];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572, v3627],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:249:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:249:18:decimal', stdlib.UInt_max, '0'), v3511], [stdlib.checkedBigNumberify('./index.rsh:249:41:decimal', stdlib.UInt_max, '0'), v3476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
      
      switch (v4301[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v4304 = v4301[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_claimAdminFee"
            });
          ;
          const v4438 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v4439 = v4438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v4443 = v4438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v4444 = v4438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v4445 = [v4439, v4443, v4444];
          const v4446 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v4445);
          ;
          const v4447 = v4446[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v4448 = v4447[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v4452 = v4447[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v4453 = v4447[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v4454 = [v4448, v4452, v4453];
          const v4455 = stdlib.Array_set(v4446, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v4454);
          ;
          const v4461 = stdlib.sub(v3572, v3551);
          sim_r.txns.push({
            kind: 'from',
            to: v3445,
            tok: undefined /* Nothing */
            });
          const v4462 = true;
          const v4463 = await txn1.getOutput('AdminAPI_claimAdminFee', 'v4462', ctc3, v4462);
          
          const v24814 = stdlib.checkedBigNumberify('./index.rsh:261:11:decimal', stdlib.UInt_max, '0');
          const v24815 = v3552;
          const v24816 = v3554;
          const v24817 = v3555;
          const v24818 = v3556;
          const v24819 = v3557;
          const v24820 = v3558;
          const v24821 = v3559;
          const v24822 = v3560;
          const v24823 = v3561;
          const v24824 = v3562;
          const v24825 = v3563;
          const v24826 = v3564;
          const v24828 = v4455;
          const v24829 = v4461;
          sim_r.isHalt = false;
          
          break;
          }
        case 'AdminAPI_closeBank0_192': {
          const v5052 = v4301[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v5800 = v4301[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v6548 = v4301[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v7296 = v4301[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v8044 = v4301[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v8792 = v4301[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v9540 = v4301[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v10288 = v4301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
  switch (v4301[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v4304 = v4301[1];
      undefined /* setApiDetails */;
      ;
      const v4438 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v4439 = v4438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v4443 = v4438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v4444 = v4438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v4445 = [v4439, v4443, v4444];
      const v4446 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v4445);
      ;
      const v4447 = v4446[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v4448 = v4447[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v4452 = v4447[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v4453 = v4447[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v4454 = [v4448, v4452, v4453];
      const v4455 = stdlib.Array_set(v4446, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v4454);
      ;
      const v4457 = stdlib.addressEq(v4300, v3445);
      stdlib.assert(v4457, {
        at: './index.rsh:251:16:application',
        fs: ['at ./index.rsh:250:11:application call to [unknown function] (defined at: ./index.rsh:250:11:function exp)'],
        msg: null,
        who: 'AdminAPI_claimAdminFee'
        });
      const v4461 = stdlib.sub(v3572, v3551);
      ;
      const v4462 = true;
      const v4463 = await txn1.getOutput('AdminAPI_claimAdminFee', 'v4462', ctc3, v4462);
      if (v2094) {
        stdlib.protect(ctc10, await interact.out(v4304, v4463), {
          at: './index.rsh:247:10:application',
          fs: ['at ./index.rsh:247:10:application call to [unknown function] (defined at: ./index.rsh:247:10:function exp)', 'at ./index.rsh:253:10:application call to "k" (defined at: ./index.rsh:250:11:function exp)', 'at ./index.rsh:250:11:application call to [unknown function] (defined at: ./index.rsh:250:11:function exp)'],
          msg: 'out',
          who: 'AdminAPI_claimAdminFee'
          });
        }
      else {
        }
      
      const v24814 = stdlib.checkedBigNumberify('./index.rsh:261:11:decimal', stdlib.UInt_max, '0');
      const v24815 = v3552;
      const v24816 = v3554;
      const v24817 = v3555;
      const v24818 = v3556;
      const v24819 = v3557;
      const v24820 = v3558;
      const v24821 = v3559;
      const v24822 = v3560;
      const v24823 = v3561;
      const v24824 = v3562;
      const v24825 = v3563;
      const v24826 = v3564;
      const v24828 = v4455;
      const v24829 = v4461;
      return;
      
      break;
      }
    case 'AdminAPI_closeBank0_192': {
      const v5052 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v5800 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v6548 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v7296 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v8044 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v8792 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v9540 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v10288 = v4301[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AdminAPI_closeBank4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_closeBank4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_closeBank4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc6,
    AdminAPI_closeBank0_192: ctc6,
    AdminAPI_setAdminFee0_192: ctc7,
    AdminAPI_updatePrice0_192: ctc8,
    Claimant_burnReserve0_192: ctc8,
    Claimant_burnStable0_192: ctc8,
    Claimant_mintFirstStable0_192: ctc8,
    Claimant_mintReserve0_192: ctc8,
    Claimant_mintStable0_192: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v3658 = ctc.selfAddress();
  const v3660 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:296:10:application call to [unknown function] (defined at: ./index.rsh:296:10:function exp)', 'at ./index.rsh:118:17:application call to "runAdminAPI_closeBank0_192" (defined at: ./index.rsh:295:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: 'in',
    who: 'AdminAPI_closeBank'
    });
  const v3661 = stdlib.addressEq(v3658, v3445);
  const v3662 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:297:33:decimal', stdlib.UInt_max, '0'));
  const v3663 = v3661 ? v3662 : false;
  const v3664 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:298:34:decimal', stdlib.UInt_max, '0'));
  const v3665 = v3663 ? v3664 : false;
  const v3666 = v3571[stdlib.checkedBigNumberify('./index.rsh:299:19:application', stdlib.UInt_max, '1')];
  const v3667 = v3666[stdlib.checkedBigNumberify('./index.rsh:299:19:application', stdlib.UInt_max, '0')];
  const v3668 = stdlib.eq(v3667, v3462);
  const v3669 = v3665 ? v3668 : false;
  const v3670 = v3571[stdlib.checkedBigNumberify('./index.rsh:300:19:application', stdlib.UInt_max, '0')];
  const v3671 = v3670[stdlib.checkedBigNumberify('./index.rsh:300:19:application', stdlib.UInt_max, '0')];
  const v3672 = stdlib.eq(v3671, v3460);
  const v3673 = v3669 ? v3672 : false;
  stdlib.assert(v3673, {
    at: './index.rsh:296:19:application',
    fs: ['at ./index.rsh:296:10:application call to [unknown function] (defined at: ./index.rsh:296:10:function exp)', 'at ./index.rsh:296:10:application call to [unknown function] (defined at: ./index.rsh:296:10:function exp)', 'at ./index.rsh:118:17:application call to "runAdminAPI_closeBank0_192" (defined at: ./index.rsh:295:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: null,
    who: 'AdminAPI_closeBank'
    });
  const v3676 = ['AdminAPI_closeBank0_192', v3660];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572, v3676],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:301:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:301:18:decimal', stdlib.UInt_max, '0'), v3511], [stdlib.checkedBigNumberify('./index.rsh:301:41:decimal', stdlib.UInt_max, '0'), v3476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
      
      switch (v4301[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v4304 = v4301[1];
          
          break;
          }
        case 'AdminAPI_closeBank0_192': {
          const v5052 = v4301[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_closeBank"
            });
          ;
          const v5186 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v5187 = v5186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v5191 = v5186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v5192 = v5186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v5193 = [v5187, v5191, v5192];
          const v5194 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v5193);
          ;
          const v5195 = v5194[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v5196 = v5195[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v5200 = v5195[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v5201 = v5195[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v5202 = [v5196, v5200, v5201];
          const v5203 = stdlib.Array_set(v5194, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v5202);
          ;
          const v5238 = true;
          const v5239 = await txn1.getOutput('AdminAPI_closeBank', 'v5238', ctc3, v5238);
          
          const v24974 = v3551;
          const v24975 = v3552;
          const v24976 = v3554;
          const v24977 = v3555;
          const v24978 = v3556;
          const v24979 = v3557;
          const v24980 = v3558;
          const v24981 = v3559;
          const v24982 = v3560;
          const v24983 = v3561;
          const v24984 = v3562;
          const v24985 = v3563;
          const v24986 = v3564;
          const v24988 = v5203;
          const v24989 = v3572;
          sim_r.isHalt = false;
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v5800 = v4301[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v6548 = v4301[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v7296 = v4301[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v8044 = v4301[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v8792 = v4301[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v9540 = v4301[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v10288 = v4301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
  switch (v4301[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v4304 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_closeBank0_192': {
      const v5052 = v4301[1];
      undefined /* setApiDetails */;
      ;
      const v5186 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v5187 = v5186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v5191 = v5186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v5192 = v5186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v5193 = [v5187, v5191, v5192];
      const v5194 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v5193);
      ;
      const v5195 = v5194[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v5196 = v5195[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v5200 = v5195[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v5201 = v5195[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v5202 = [v5196, v5200, v5201];
      const v5203 = stdlib.Array_set(v5194, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v5202);
      ;
      const v5218 = stdlib.addressEq(v4300, v3445);
      const v5219 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:304:35:decimal', stdlib.UInt_max, '0'));
      const v5220 = v5218 ? v5219 : false;
      const v5221 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:305:36:decimal', stdlib.UInt_max, '0'));
      const v5222 = v5220 ? v5221 : false;
      const v5223 = v5203[stdlib.checkedBigNumberify('./index.rsh:306:21:application', stdlib.UInt_max, '1')];
      const v5224 = v5223[stdlib.checkedBigNumberify('./index.rsh:306:21:application', stdlib.UInt_max, '0')];
      const v5225 = stdlib.eq(v5224, v3462);
      const v5226 = v5222 ? v5225 : false;
      const v5227 = v5203[stdlib.checkedBigNumberify('./index.rsh:307:21:application', stdlib.UInt_max, '0')];
      const v5228 = v5227[stdlib.checkedBigNumberify('./index.rsh:307:21:application', stdlib.UInt_max, '0')];
      const v5229 = stdlib.eq(v5228, v3460);
      const v5230 = v5226 ? v5229 : false;
      stdlib.assert(v5230, {
        at: './index.rsh:303:16:application',
        fs: ['at ./index.rsh:302:11:application call to [unknown function] (defined at: ./index.rsh:302:11:function exp)'],
        msg: null,
        who: 'AdminAPI_closeBank'
        });
      const v5238 = true;
      const v5239 = await txn1.getOutput('AdminAPI_closeBank', 'v5238', ctc3, v5238);
      if (v2094) {
        stdlib.protect(ctc10, await interact.out(v5052, v5239), {
          at: './index.rsh:295:10:application',
          fs: ['at ./index.rsh:295:10:application call to [unknown function] (defined at: ./index.rsh:295:10:function exp)', 'at ./index.rsh:310:10:application call to "k" (defined at: ./index.rsh:302:11:function exp)', 'at ./index.rsh:302:11:application call to [unknown function] (defined at: ./index.rsh:302:11:function exp)'],
          msg: 'out',
          who: 'AdminAPI_closeBank'
          });
        }
      else {
        }
      
      const v24974 = v3551;
      const v24975 = v3552;
      const v24976 = v3554;
      const v24977 = v3555;
      const v24978 = v3556;
      const v24979 = v3557;
      const v24980 = v3558;
      const v24981 = v3559;
      const v24982 = v3560;
      const v24983 = v3561;
      const v24984 = v3562;
      const v24985 = v3563;
      const v24986 = v3564;
      const v24988 = v5203;
      const v24989 = v3572;
      return;
      
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v5800 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v6548 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v7296 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v8044 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v8792 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v9540 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v10288 = v4301[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AdminAPI_setAdminFee4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_setAdminFee4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_setAdminFee4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_closeBank0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc6,
    AdminAPI_updatePrice0_192: ctc8,
    Claimant_burnReserve0_192: ctc8,
    Claimant_burnStable0_192: ctc8,
    Claimant_mintFirstStable0_192: ctc8,
    Claimant_mintReserve0_192: ctc8,
    Claimant_mintStable0_192: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v3608 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:226:37:application call to [unknown function] (defined at: ./index.rsh:226:37:function exp)', 'at ./index.rsh:118:17:application call to "runAdminAPI_setAdminFee0_192" (defined at: ./index.rsh:225:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: 'in',
    who: 'AdminAPI_setAdminFee'
    });
  const v3609 = v3608[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3610 = v3608[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3613 = stdlib.add(v3609, v3610);
  const v3614 = stdlib.eq(v3613, stdlib.checkedBigNumberify('./index.rsh:226:79:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v3614, {
    at: './index.rsh:226:46:application',
    fs: ['at ./index.rsh:226:37:application call to [unknown function] (defined at: ./index.rsh:226:37:function exp)', 'at ./index.rsh:226:37:application call to [unknown function] (defined at: ./index.rsh:226:37:function exp)', 'at ./index.rsh:118:17:application call to "runAdminAPI_setAdminFee0_192" (defined at: ./index.rsh:225:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: null,
    who: 'AdminAPI_setAdminFee'
    });
  const v3619 = ['AdminAPI_setAdminFee0_192', v3608];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572, v3619],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:227:18:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:227:22:decimal', stdlib.UInt_max, '0'), v3511], [stdlib.checkedBigNumberify('./index.rsh:227:45:decimal', stdlib.UInt_max, '0'), v3476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
      
      switch (v4301[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v4304 = v4301[1];
          
          break;
          }
        case 'AdminAPI_closeBank0_192': {
          const v5052 = v4301[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v5800 = v4301[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_setAdminFee"
            });
          ;
          const v5934 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v5935 = v5934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v5939 = v5934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v5940 = v5934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v5941 = [v5935, v5939, v5940];
          const v5942 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v5941);
          ;
          const v5943 = v5942[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v5944 = v5943[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v5948 = v5943[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v5949 = v5943[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v5950 = [v5944, v5948, v5949];
          const v5951 = stdlib.Array_set(v5942, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v5950);
          ;
          const v5994 = v5800[stdlib.checkedBigNumberify('./index.rsh:225:9:spread', stdlib.UInt_max, '0')];
          const v5995 = v5800[stdlib.checkedBigNumberify('./index.rsh:225:9:spread', stdlib.UInt_max, '1')];
          const v6001 = stdlib.sub(v3572, v3551);
          sim_r.txns.push({
            kind: 'from',
            to: v3445,
            tok: undefined /* Nothing */
            });
          const v6002 = true;
          const v6003 = await txn1.getOutput('AdminAPI_setAdminFee', 'v6002', ctc3, v6002);
          
          const v25134 = stdlib.checkedBigNumberify('./index.rsh:239:11:decimal', stdlib.UInt_max, '0');
          const v25135 = v5994;
          const v25136 = v3554;
          const v25137 = v3555;
          const v25138 = v3556;
          const v25139 = v3557;
          const v25140 = v5995;
          const v25141 = v3559;
          const v25142 = v3560;
          const v25143 = v3561;
          const v25144 = v3562;
          const v25145 = v3563;
          const v25146 = v3564;
          const v25148 = v5951;
          const v25149 = v6001;
          sim_r.isHalt = false;
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v6548 = v4301[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v7296 = v4301[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v8044 = v4301[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v8792 = v4301[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v9540 = v4301[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v10288 = v4301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
  switch (v4301[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v4304 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_closeBank0_192': {
      const v5052 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v5800 = v4301[1];
      undefined /* setApiDetails */;
      ;
      const v5934 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v5935 = v5934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v5939 = v5934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v5940 = v5934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v5941 = [v5935, v5939, v5940];
      const v5942 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v5941);
      ;
      const v5943 = v5942[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v5944 = v5943[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v5948 = v5943[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v5949 = v5943[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v5950 = [v5944, v5948, v5949];
      const v5951 = stdlib.Array_set(v5942, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v5950);
      ;
      const v5994 = v5800[stdlib.checkedBigNumberify('./index.rsh:225:9:spread', stdlib.UInt_max, '0')];
      const v5995 = v5800[stdlib.checkedBigNumberify('./index.rsh:225:9:spread', stdlib.UInt_max, '1')];
      const v5996 = stdlib.add(v5994, v5995);
      const v5997 = stdlib.eq(v5996, stdlib.checkedBigNumberify('./index.rsh:229:49:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v5997, {
        at: './index.rsh:229:16:application',
        fs: ['at ./index.rsh:228:40:application call to [unknown function] (defined at: ./index.rsh:228:40:function exp)'],
        msg: null,
        who: 'AdminAPI_setAdminFee'
        });
      const v6001 = stdlib.sub(v3572, v3551);
      ;
      const v6002 = true;
      const v6003 = await txn1.getOutput('AdminAPI_setAdminFee', 'v6002', ctc3, v6002);
      if (v2094) {
        stdlib.protect(ctc10, await interact.out(v5800, v6003), {
          at: './index.rsh:225:10:application',
          fs: ['at ./index.rsh:225:10:application call to [unknown function] (defined at: ./index.rsh:225:10:function exp)', 'at ./index.rsh:231:10:application call to "k" (defined at: ./index.rsh:228:40:function exp)', 'at ./index.rsh:228:40:application call to [unknown function] (defined at: ./index.rsh:228:40:function exp)'],
          msg: 'out',
          who: 'AdminAPI_setAdminFee'
          });
        }
      else {
        }
      
      const v25134 = stdlib.checkedBigNumberify('./index.rsh:239:11:decimal', stdlib.UInt_max, '0');
      const v25135 = v5994;
      const v25136 = v3554;
      const v25137 = v3555;
      const v25138 = v3556;
      const v25139 = v3557;
      const v25140 = v5995;
      const v25141 = v3559;
      const v25142 = v3560;
      const v25143 = v3561;
      const v25144 = v3562;
      const v25145 = v3563;
      const v25146 = v3564;
      const v25148 = v5951;
      const v25149 = v6001;
      return;
      
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v6548 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v7296 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v8044 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v8792 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v9540 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v10288 = v4301[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AdminAPI_updatePrice4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_updatePrice4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_updatePrice4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_closeBank0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v3593 = ctc.selfAddress();
  const v3595 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:205:15:application call to [unknown function] (defined at: ./index.rsh:205:15:function exp)', 'at ./index.rsh:118:17:application call to "runAdminAPI_updatePrice0_192" (defined at: ./index.rsh:204:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: 'in',
    who: 'AdminAPI_updatePrice'
    });
  const v3596 = v3595[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3598 = stdlib.gt(v3596, stdlib.checkedBigNumberify('./index.rsh:205:33:decimal', stdlib.UInt_max, '0'));
  const v3599 = stdlib.addressEq(v3593, v3445);
  const v3600 = v3598 ? v3599 : false;
  stdlib.assert(v3600, {
    at: './index.rsh:205:24:application',
    fs: ['at ./index.rsh:205:15:application call to [unknown function] (defined at: ./index.rsh:205:15:function exp)', 'at ./index.rsh:205:15:application call to [unknown function] (defined at: ./index.rsh:205:15:function exp)', 'at ./index.rsh:118:17:application call to "runAdminAPI_updatePrice0_192" (defined at: ./index.rsh:204:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: null,
    who: 'AdminAPI_updatePrice'
    });
  const v3604 = ['AdminAPI_updatePrice0_192', v3595];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572, v3604],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:206:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:206:19:decimal', stdlib.UInt_max, '0'), v3511], [stdlib.checkedBigNumberify('./index.rsh:206:42:decimal', stdlib.UInt_max, '0'), v3476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
      
      switch (v4301[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v4304 = v4301[1];
          
          break;
          }
        case 'AdminAPI_closeBank0_192': {
          const v5052 = v4301[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v5800 = v4301[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v6548 = v4301[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_updatePrice"
            });
          ;
          const v6682 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v6683 = v6682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v6687 = v6682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v6688 = v6682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v6689 = [v6683, v6687, v6688];
          const v6690 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v6689);
          ;
          const v6691 = v6690[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v6692 = v6691[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v6696 = v6691[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v6697 = v6691[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v6698 = [v6692, v6696, v6697];
          const v6699 = stdlib.Array_set(v6690, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v6698);
          ;
          const v6760 = v6548[stdlib.checkedBigNumberify('./index.rsh:204:9:spread', stdlib.UInt_max, '0')];
          const v6764 = true;
          const v6765 = await txn1.getOutput('AdminAPI_updatePrice', 'v6764', ctc3, v6764);
          
          const v25294 = v3551;
          const v25295 = v3552;
          const v25296 = v3554;
          const v25297 = v3555;
          const v25298 = v3563;
          const v25299 = v3557;
          const v25300 = v3558;
          const v25301 = v3559;
          const v25302 = v3560;
          const v25303 = v3561;
          const v25304 = v6760;
          const v25305 = v6760;
          const v25306 = v3564;
          const v25308 = v6699;
          const v25309 = v3572;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v7296 = v4301[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v8044 = v4301[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v8792 = v4301[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v9540 = v4301[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v10288 = v4301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
  switch (v4301[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v4304 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_closeBank0_192': {
      const v5052 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v5800 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v6548 = v4301[1];
      undefined /* setApiDetails */;
      ;
      const v6682 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v6683 = v6682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v6687 = v6682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v6688 = v6682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v6689 = [v6683, v6687, v6688];
      const v6690 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v6689);
      ;
      const v6691 = v6690[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v6692 = v6691[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v6696 = v6691[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v6697 = v6691[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v6698 = [v6692, v6696, v6697];
      const v6699 = stdlib.Array_set(v6690, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v6698);
      ;
      const v6760 = v6548[stdlib.checkedBigNumberify('./index.rsh:204:9:spread', stdlib.UInt_max, '0')];
      const v6761 = stdlib.gt(v6760, stdlib.checkedBigNumberify('./index.rsh:208:25:decimal', stdlib.UInt_max, '0'));
      const v6762 = stdlib.addressEq(v4300, v3445);
      const v6763 = v6761 ? v6762 : false;
      stdlib.assert(v6763, {
        at: './index.rsh:208:16:application',
        fs: ['at ./index.rsh:207:18:application call to [unknown function] (defined at: ./index.rsh:207:18:function exp)'],
        msg: null,
        who: 'AdminAPI_updatePrice'
        });
      const v6764 = true;
      const v6765 = await txn1.getOutput('AdminAPI_updatePrice', 'v6764', ctc3, v6764);
      if (v2094) {
        stdlib.protect(ctc10, await interact.out(v6548, v6765), {
          at: './index.rsh:204:10:application',
          fs: ['at ./index.rsh:204:10:application call to [unknown function] (defined at: ./index.rsh:204:10:function exp)', 'at ./index.rsh:209:10:application call to "k" (defined at: ./index.rsh:207:18:function exp)', 'at ./index.rsh:207:18:application call to [unknown function] (defined at: ./index.rsh:207:18:function exp)'],
          msg: 'out',
          who: 'AdminAPI_updatePrice'
          });
        }
      else {
        }
      
      const v25294 = v3551;
      const v25295 = v3552;
      const v25296 = v3554;
      const v25297 = v3555;
      const v25298 = v3563;
      const v25299 = v3557;
      const v25300 = v3558;
      const v25301 = v3559;
      const v25302 = v3560;
      const v25303 = v3561;
      const v25304 = v6760;
      const v25305 = v6760;
      const v25306 = v3564;
      const v25308 = v6699;
      const v25309 = v3572;
      return;
      
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v7296 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v8044 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v8792 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v9540 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v10288 = v4301[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_burnReserve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_burnReserve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_burnReserve4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_closeBank0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v3867 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:407:20:application call to [unknown function] (defined at: ./index.rsh:407:20:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_burnReserve0_192" (defined at: ./index.rsh:406:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: 'in',
    who: 'Claimant_burnReserve'
    });
  const v3868 = v3867[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v3870;
  const v3871 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
  if (v3871) {
    v3870 = v3562;
    }
  else {
    const v3872 = stdlib.div(v3560, v3561);
    const v3873 = stdlib.gt(v3872, v3562);
    const v3875 = v3873 ? v3562 : v3872;
    v3870 = v3875;
    }
  const v3876 = stdlib.mul(v3561, v3870);
  const v3877 = stdlib.div(v3560, v3876);
  const v3878 = stdlib.ge(v3877, v3557);
  let v3879;
  const v3880 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:163:23:decimal', stdlib.UInt_max, '0'));
  let v3881;
  if (v3871) {
    v3881 = v3562;
    }
  else {
    const v3883 = stdlib.div(v3560, v3561);
    const v3884 = stdlib.gt(v3883, v3562);
    const v3886 = v3884 ? v3562 : v3883;
    v3881 = v3886;
    }
  const v3887 = stdlib.mul(v3561, v3881);
  const v3888 = stdlib.sub(v3560, v3887);
  const v3889 = stdlib.eq(v3888, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
  const v3890 = v3880 ? true : v3889;
  if (v3890) {
    v3879 = v3555;
    }
  else {
    let v3891;
    if (v3871) {
      v3891 = v3562;
      }
    else {
      const v3893 = stdlib.div(v3560, v3561);
      const v3894 = stdlib.gt(v3893, v3562);
      const v3896 = v3894 ? v3562 : v3893;
      v3891 = v3896;
      }
    const v3897 = stdlib.mul(v3561, v3891);
    const v3898 = stdlib.sub(v3560, v3897);
    const v3899 = stdlib.div(v3898, v3559);
    const v3900 = stdlib.gt(v3899, v3555);
    let v3901;
    if (v3871) {
      v3901 = v3562;
      }
    else {
      const v3903 = stdlib.div(v3560, v3561);
      const v3904 = stdlib.gt(v3903, v3562);
      const v3906 = v3904 ? v3562 : v3903;
      v3901 = v3906;
      }
    const v3907 = stdlib.mul(v3561, v3901);
    const v3908 = stdlib.sub(v3560, v3907);
    const v3909 = stdlib.div(v3908, v3559);
    const v3910 = v3900 ? v3909 : v3555;
    v3879 = v3910;
    }
  const v3911 = stdlib.div(v3868, v3879);
  const v3912 = stdlib.gt(v3911, stdlib.checkedBigNumberify('./index.rsh:408:113:decimal', stdlib.UInt_max, '0'));
  const v3913 = v3878 ? v3912 : false;
  let v3915;
  let v3917;
  if (v3871) {
    v3917 = v3562;
    }
  else {
    const v3919 = stdlib.div(v3560, v3561);
    const v3920 = stdlib.gt(v3919, v3562);
    const v3922 = v3920 ? v3562 : v3919;
    v3917 = v3922;
    }
  const v3923 = stdlib.mul(v3561, v3917);
  const v3924 = stdlib.sub(v3560, v3923);
  const v3925 = stdlib.eq(v3924, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
  const v3926 = v3880 ? true : v3925;
  if (v3926) {
    v3915 = v3555;
    }
  else {
    let v3927;
    if (v3871) {
      v3927 = v3562;
      }
    else {
      const v3929 = stdlib.div(v3560, v3561);
      const v3930 = stdlib.gt(v3929, v3562);
      const v3932 = v3930 ? v3562 : v3929;
      v3927 = v3932;
      }
    const v3933 = stdlib.mul(v3561, v3927);
    const v3934 = stdlib.sub(v3560, v3933);
    const v3935 = stdlib.div(v3934, v3559);
    const v3936 = stdlib.gt(v3935, v3555);
    let v3937;
    if (v3871) {
      v3937 = v3562;
      }
    else {
      const v3939 = stdlib.div(v3560, v3561);
      const v3940 = stdlib.gt(v3939, v3562);
      const v3942 = v3940 ? v3562 : v3939;
      v3937 = v3942;
      }
    const v3943 = stdlib.mul(v3561, v3937);
    const v3944 = stdlib.sub(v3560, v3943);
    const v3945 = stdlib.div(v3944, v3559);
    const v3946 = v3936 ? v3945 : v3555;
    v3915 = v3946;
    }
  const v3947 = stdlib.div(v3868, v3915);
  const v3948 = stdlib.ge(v3572, v3947);
  const v3949 = v3913 ? v3948 : false;
  let v3950;
  let v3952;
  if (v3871) {
    v3952 = v3562;
    }
  else {
    const v3954 = stdlib.div(v3560, v3561);
    const v3955 = stdlib.gt(v3954, v3562);
    const v3957 = v3955 ? v3562 : v3954;
    v3952 = v3957;
    }
  const v3958 = stdlib.mul(v3561, v3952);
  const v3959 = stdlib.sub(v3560, v3958);
  const v3960 = stdlib.eq(v3959, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
  const v3961 = v3880 ? true : v3960;
  if (v3961) {
    v3950 = v3555;
    }
  else {
    let v3962;
    if (v3871) {
      v3962 = v3562;
      }
    else {
      const v3964 = stdlib.div(v3560, v3561);
      const v3965 = stdlib.gt(v3964, v3562);
      const v3967 = v3965 ? v3562 : v3964;
      v3962 = v3967;
      }
    const v3968 = stdlib.mul(v3561, v3962);
    const v3969 = stdlib.sub(v3560, v3968);
    const v3970 = stdlib.div(v3969, v3559);
    const v3971 = stdlib.gt(v3970, v3555);
    let v3972;
    if (v3871) {
      v3972 = v3562;
      }
    else {
      const v3974 = stdlib.div(v3560, v3561);
      const v3975 = stdlib.gt(v3974, v3562);
      const v3977 = v3975 ? v3562 : v3974;
      v3972 = v3977;
      }
    const v3978 = stdlib.mul(v3561, v3972);
    const v3979 = stdlib.sub(v3560, v3978);
    const v3980 = stdlib.div(v3979, v3559);
    const v3981 = v3971 ? v3980 : v3555;
    v3950 = v3981;
    }
  const v3982 = stdlib.div(v3868, v3950);
  const v3983 = stdlib.mul(v3982, v3564);
  const v3984 = stdlib.div(v3983, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
  let v3985;
  let v3987;
  if (v3871) {
    v3987 = v3562;
    }
  else {
    const v3989 = stdlib.div(v3560, v3561);
    const v3990 = stdlib.gt(v3989, v3562);
    const v3992 = v3990 ? v3562 : v3989;
    v3987 = v3992;
    }
  const v3993 = stdlib.mul(v3561, v3987);
  const v3994 = stdlib.sub(v3560, v3993);
  const v3995 = stdlib.eq(v3994, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
  const v3996 = v3880 ? true : v3995;
  if (v3996) {
    v3985 = v3555;
    }
  else {
    let v3997;
    if (v3871) {
      v3997 = v3562;
      }
    else {
      const v3999 = stdlib.div(v3560, v3561);
      const v4000 = stdlib.gt(v3999, v3562);
      const v4002 = v4000 ? v3562 : v3999;
      v3997 = v4002;
      }
    const v4003 = stdlib.mul(v3561, v3997);
    const v4004 = stdlib.sub(v3560, v4003);
    const v4005 = stdlib.div(v4004, v3559);
    const v4006 = stdlib.gt(v4005, v3555);
    let v4007;
    if (v3871) {
      v4007 = v3562;
      }
    else {
      const v4009 = stdlib.div(v3560, v3561);
      const v4010 = stdlib.gt(v4009, v3562);
      const v4012 = v4010 ? v3562 : v4009;
      v4007 = v4012;
      }
    const v4013 = stdlib.mul(v3561, v4007);
    const v4014 = stdlib.sub(v3560, v4013);
    const v4015 = stdlib.div(v4014, v3559);
    const v4016 = v4006 ? v4015 : v3555;
    v3985 = v4016;
    }
  const v4017 = stdlib.div(v3868, v3985);
  const v4018 = stdlib.mul(v4017, v3564);
  const v4019 = stdlib.div(v4018, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
  const v4020 = stdlib.mul(v4019, v3558);
  const v4021 = stdlib.div(v4020, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  let v4022;
  let v4024;
  if (v3871) {
    v4024 = v3562;
    }
  else {
    const v4026 = stdlib.div(v3560, v3561);
    const v4027 = stdlib.gt(v4026, v3562);
    const v4029 = v4027 ? v3562 : v4026;
    v4024 = v4029;
    }
  const v4030 = stdlib.mul(v3561, v4024);
  const v4031 = stdlib.sub(v3560, v4030);
  const v4032 = stdlib.eq(v4031, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
  const v4033 = v3880 ? true : v4032;
  if (v4033) {
    v4022 = v3555;
    }
  else {
    let v4034;
    if (v3871) {
      v4034 = v3562;
      }
    else {
      const v4036 = stdlib.div(v3560, v3561);
      const v4037 = stdlib.gt(v4036, v3562);
      const v4039 = v4037 ? v3562 : v4036;
      v4034 = v4039;
      }
    const v4040 = stdlib.mul(v3561, v4034);
    const v4041 = stdlib.sub(v3560, v4040);
    const v4042 = stdlib.div(v4041, v3559);
    const v4043 = stdlib.gt(v4042, v3555);
    let v4044;
    if (v3871) {
      v4044 = v3562;
      }
    else {
      const v4046 = stdlib.div(v3560, v3561);
      const v4047 = stdlib.gt(v4046, v3562);
      const v4049 = v4047 ? v3562 : v4046;
      v4044 = v4049;
      }
    const v4050 = stdlib.mul(v3561, v4044);
    const v4051 = stdlib.sub(v3560, v4050);
    const v4052 = stdlib.div(v4051, v3559);
    const v4053 = v4043 ? v4052 : v3555;
    v4022 = v4053;
    }
  const v4054 = stdlib.div(v3868, v4022);
  const v4055 = stdlib.mul(v4054, v3564);
  const v4056 = stdlib.div(v4055, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
  const v4057 = stdlib.mul(v4056, v3552);
  const v4058 = stdlib.div(v4057, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  const v4059 = stdlib.add(v4021, v4058);
  const v4060 = stdlib.eq(v3984, v4059);
  const v4061 = v3949 ? v4060 : false;
  stdlib.assert(v4061, {
    at: './index.rsh:407:29:application',
    fs: ['at ./index.rsh:407:20:application call to [unknown function] (defined at: ./index.rsh:407:20:function exp)', 'at ./index.rsh:407:20:application call to [unknown function] (defined at: ./index.rsh:407:20:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_burnReserve0_192" (defined at: ./index.rsh:406:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: null,
    who: 'Claimant_burnReserve'
    });
  const v4065 = ['Claimant_burnReserve0_192', v3867];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572, v4065],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:412:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:412:28:decimal', stdlib.UInt_max, '0'), v3511], [v3868, v3476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
      
      switch (v4301[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v4304 = v4301[1];
          
          break;
          }
        case 'AdminAPI_closeBank0_192': {
          const v5052 = v4301[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v5800 = v4301[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v6548 = v4301[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v7296 = v4301[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_burnReserve"
            });
          const v7344 = v7296[stdlib.checkedBigNumberify('./index.rsh:406:9:spread', stdlib.UInt_max, '0')];
          ;
          const v7430 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v7431 = v7430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v7435 = v7430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v7436 = v7430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v7437 = [v7431, v7435, v7436];
          const v7438 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v7437);
          ;
          const v7439 = v7438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v7440 = v7439[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v7441 = stdlib.add(v7440, v7344);
          const v7444 = v7439[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v7445 = v7439[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v7446 = [v7441, v7444, v7445];
          const v7447 = stdlib.Array_set(v7438, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v7446);
          sim_r.txns.push({
            amt: v7344,
            kind: 'to',
            tok: v3476
            });
          let v7522;
          const v7523 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:163:23:decimal', stdlib.UInt_max, '0'));
          let v7524;
          const v7525 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
          if (v7525) {
            v7524 = v3562;
            }
          else {
            const v7526 = stdlib.div(v3560, v3561);
            const v7527 = stdlib.gt(v7526, v3562);
            const v7529 = v7527 ? v3562 : v7526;
            v7524 = v7529;
            }
          const v7530 = stdlib.mul(v3561, v7524);
          const v7531 = stdlib.sub(v3560, v7530);
          const v7532 = stdlib.eq(v7531, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
          const v7533 = v7523 ? true : v7532;
          if (v7533) {
            v7522 = v3555;
            }
          else {
            let v7534;
            if (v7525) {
              v7534 = v3562;
              }
            else {
              const v7536 = stdlib.div(v3560, v3561);
              const v7537 = stdlib.gt(v7536, v3562);
              const v7539 = v7537 ? v3562 : v7536;
              v7534 = v7539;
              }
            const v7540 = stdlib.mul(v3561, v7534);
            const v7541 = stdlib.sub(v3560, v7540);
            const v7542 = stdlib.div(v7541, v3559);
            const v7543 = stdlib.gt(v7542, v3555);
            let v7544;
            if (v7525) {
              v7544 = v3562;
              }
            else {
              const v7546 = stdlib.div(v3560, v3561);
              const v7547 = stdlib.gt(v7546, v3562);
              const v7549 = v7547 ? v3562 : v7546;
              v7544 = v7549;
              }
            const v7550 = stdlib.mul(v3561, v7544);
            const v7551 = stdlib.sub(v3560, v7550);
            const v7552 = stdlib.div(v7551, v3559);
            const v7553 = v7543 ? v7552 : v3555;
            v7522 = v7553;
            }
          const v7554 = stdlib.div(v7344, v7522);
          const v7555 = stdlib.mul(v7554, v3564);
          const v7556 = stdlib.div(v7555, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
          const v7608 = stdlib.mul(v7556, v3558);
          const v7609 = stdlib.div(v7608, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          const v7612 = stdlib.mul(v7556, v3552);
          const v7613 = stdlib.div(v7612, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          const v7617 = stdlib.sub(v7554, v7556);
          const v7621 = stdlib.sub(v3572, v7617);
          sim_r.txns.push({
            kind: 'from',
            to: v4300,
            tok: undefined /* Nothing */
            });
          const v7622 = true;
          const v7623 = await txn1.getOutput('Claimant_burnReserve', 'v7622', ctc3, v7622);
          
          const v7629 = stdlib.sub(v3559, v7344);
          const v7630 = stdlib.sub(v3560, v7554);
          const v7635 = stdlib.add(v7630, v7609);
          const v7640 = stdlib.add(v3551, v7613);
          const v25454 = v7640;
          const v25455 = v3552;
          const v25456 = v3554;
          const v25457 = v3555;
          const v25458 = v3563;
          const v25459 = v3557;
          const v25460 = v3558;
          const v25461 = v7629;
          const v25462 = v7635;
          const v25463 = v3561;
          const v25464 = v3562;
          const v25465 = v3556;
          const v25466 = v3564;
          const v25468 = v7447;
          const v25469 = v7621;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v8044 = v4301[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v8792 = v4301[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v9540 = v4301[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v10288 = v4301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
  switch (v4301[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v4304 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_closeBank0_192': {
      const v5052 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v5800 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v6548 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v7296 = v4301[1];
      undefined /* setApiDetails */;
      const v7344 = v7296[stdlib.checkedBigNumberify('./index.rsh:406:9:spread', stdlib.UInt_max, '0')];
      ;
      const v7430 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v7431 = v7430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v7435 = v7430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v7436 = v7430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v7437 = [v7431, v7435, v7436];
      const v7438 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v7437);
      ;
      const v7439 = v7438[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v7440 = v7439[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v7441 = stdlib.add(v7440, v7344);
      const v7444 = v7439[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v7445 = v7439[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v7446 = [v7441, v7444, v7445];
      const v7447 = stdlib.Array_set(v7438, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v7446);
      ;
      let v7522;
      const v7523 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:163:23:decimal', stdlib.UInt_max, '0'));
      let v7524;
      const v7525 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
      if (v7525) {
        v7524 = v3562;
        }
      else {
        const v7526 = stdlib.div(v3560, v3561);
        const v7527 = stdlib.gt(v7526, v3562);
        const v7529 = v7527 ? v3562 : v7526;
        v7524 = v7529;
        }
      const v7530 = stdlib.mul(v3561, v7524);
      const v7531 = stdlib.sub(v3560, v7530);
      const v7532 = stdlib.eq(v7531, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
      const v7533 = v7523 ? true : v7532;
      if (v7533) {
        v7522 = v3555;
        }
      else {
        let v7534;
        if (v7525) {
          v7534 = v3562;
          }
        else {
          const v7536 = stdlib.div(v3560, v3561);
          const v7537 = stdlib.gt(v7536, v3562);
          const v7539 = v7537 ? v3562 : v7536;
          v7534 = v7539;
          }
        const v7540 = stdlib.mul(v3561, v7534);
        const v7541 = stdlib.sub(v3560, v7540);
        const v7542 = stdlib.div(v7541, v3559);
        const v7543 = stdlib.gt(v7542, v3555);
        let v7544;
        if (v7525) {
          v7544 = v3562;
          }
        else {
          const v7546 = stdlib.div(v3560, v3561);
          const v7547 = stdlib.gt(v7546, v3562);
          const v7549 = v7547 ? v3562 : v7546;
          v7544 = v7549;
          }
        const v7550 = stdlib.mul(v3561, v7544);
        const v7551 = stdlib.sub(v3560, v7550);
        const v7552 = stdlib.div(v7551, v3559);
        const v7553 = v7543 ? v7552 : v3555;
        v7522 = v7553;
        }
      const v7554 = stdlib.div(v7344, v7522);
      const v7555 = stdlib.mul(v7554, v3564);
      const v7556 = stdlib.div(v7555, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
      let v7557;
      if (v7525) {
        v7557 = v3562;
        }
      else {
        const v7559 = stdlib.div(v3560, v3561);
        const v7560 = stdlib.gt(v7559, v3562);
        const v7562 = v7560 ? v3562 : v7559;
        v7557 = v7562;
        }
      const v7563 = stdlib.mul(v3561, v7557);
      const v7564 = stdlib.div(v3560, v7563);
      const v7565 = stdlib.ge(v7564, v3557);
      let v7566;
      let v7568;
      if (v7525) {
        v7568 = v3562;
        }
      else {
        const v7570 = stdlib.div(v3560, v3561);
        const v7571 = stdlib.gt(v7570, v3562);
        const v7573 = v7571 ? v3562 : v7570;
        v7568 = v7573;
        }
      const v7574 = stdlib.mul(v3561, v7568);
      const v7575 = stdlib.sub(v3560, v7574);
      const v7576 = stdlib.eq(v7575, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
      const v7577 = v7523 ? true : v7576;
      if (v7577) {
        v7566 = v3555;
        }
      else {
        let v7578;
        if (v7525) {
          v7578 = v3562;
          }
        else {
          const v7580 = stdlib.div(v3560, v3561);
          const v7581 = stdlib.gt(v7580, v3562);
          const v7583 = v7581 ? v3562 : v7580;
          v7578 = v7583;
          }
        const v7584 = stdlib.mul(v3561, v7578);
        const v7585 = stdlib.sub(v3560, v7584);
        const v7586 = stdlib.div(v7585, v3559);
        const v7587 = stdlib.gt(v7586, v3555);
        let v7588;
        if (v7525) {
          v7588 = v3562;
          }
        else {
          const v7590 = stdlib.div(v3560, v3561);
          const v7591 = stdlib.gt(v7590, v3562);
          const v7593 = v7591 ? v3562 : v7590;
          v7588 = v7593;
          }
        const v7594 = stdlib.mul(v3561, v7588);
        const v7595 = stdlib.sub(v3560, v7594);
        const v7596 = stdlib.div(v7595, v3559);
        const v7597 = v7587 ? v7596 : v3555;
        v7566 = v7597;
        }
      const v7598 = stdlib.div(v7344, v7566);
      const v7599 = stdlib.gt(v7598, stdlib.checkedBigNumberify('./index.rsh:417:115:decimal', stdlib.UInt_max, '0'));
      const v7600 = v7565 ? v7599 : false;
      const v7602 = stdlib.ge(v3572, v7554);
      const v7603 = v7600 ? v7602 : false;
      const v7608 = stdlib.mul(v7556, v3558);
      const v7609 = stdlib.div(v7608, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v7612 = stdlib.mul(v7556, v3552);
      const v7613 = stdlib.div(v7612, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v7614 = stdlib.add(v7609, v7613);
      const v7615 = stdlib.eq(v7556, v7614);
      const v7616 = v7603 ? v7615 : false;
      stdlib.assert(v7616, {
        at: './index.rsh:416:14:application',
        fs: ['at ./index.rsh:413:23:application call to [unknown function] (defined at: ./index.rsh:413:23:function exp)'],
        msg: null,
        who: 'Claimant_burnReserve'
        });
      const v7617 = stdlib.sub(v7554, v7556);
      const v7621 = stdlib.sub(v3572, v7617);
      ;
      const v7622 = true;
      const v7623 = await txn1.getOutput('Claimant_burnReserve', 'v7622', ctc3, v7622);
      if (v2094) {
        stdlib.protect(ctc10, await interact.out(v7296, v7623), {
          at: './index.rsh:406:10:application',
          fs: ['at ./index.rsh:406:10:application call to [unknown function] (defined at: ./index.rsh:406:10:function exp)', 'at ./index.rsh:422:8:application call to "k" (defined at: ./index.rsh:413:23:function exp)', 'at ./index.rsh:413:23:application call to [unknown function] (defined at: ./index.rsh:413:23:function exp)'],
          msg: 'out',
          who: 'Claimant_burnReserve'
          });
        }
      else {
        }
      
      const v7629 = stdlib.sub(v3559, v7344);
      const v7630 = stdlib.sub(v3560, v7554);
      const v7635 = stdlib.add(v7630, v7609);
      const v7640 = stdlib.add(v3551, v7613);
      const v25454 = v7640;
      const v25455 = v3552;
      const v25456 = v3554;
      const v25457 = v3555;
      const v25458 = v3563;
      const v25459 = v3557;
      const v25460 = v3558;
      const v25461 = v7629;
      const v25462 = v7635;
      const v25463 = v3561;
      const v25464 = v3562;
      const v25465 = v3556;
      const v25466 = v3564;
      const v25468 = v7447;
      const v25469 = v7621;
      return;
      
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v8044 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v8792 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v9540 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v10288 = v4301[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_burnStable4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_burnStable4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_burnStable4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_closeBank0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v3814 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:382:20:application call to [unknown function] (defined at: ./index.rsh:382:20:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_burnStable0_192" (defined at: ./index.rsh:381:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: 'in',
    who: 'Claimant_burnStable'
    });
  const v3815 = v3814[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v3818;
  const v3819 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
  if (v3819) {
    v3818 = v3562;
    }
  else {
    const v3820 = stdlib.div(v3560, v3561);
    const v3821 = stdlib.gt(v3820, v3562);
    const v3823 = v3821 ? v3562 : v3820;
    v3818 = v3823;
    }
  const v3824 = stdlib.div(v3815, v3818);
  const v3825 = stdlib.ge(v3572, v3824);
  let v3826;
  if (v3819) {
    v3826 = v3562;
    }
  else {
    const v3828 = stdlib.div(v3560, v3561);
    const v3829 = stdlib.gt(v3828, v3562);
    const v3831 = v3829 ? v3562 : v3828;
    v3826 = v3831;
    }
  const v3832 = stdlib.div(v3815, v3826);
  const v3833 = stdlib.mul(v3832, v3564);
  const v3834 = stdlib.div(v3833, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
  let v3835;
  if (v3819) {
    v3835 = v3562;
    }
  else {
    const v3837 = stdlib.div(v3560, v3561);
    const v3838 = stdlib.gt(v3837, v3562);
    const v3840 = v3838 ? v3562 : v3837;
    v3835 = v3840;
    }
  const v3841 = stdlib.div(v3815, v3835);
  const v3842 = stdlib.mul(v3841, v3564);
  const v3843 = stdlib.div(v3842, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
  const v3844 = stdlib.mul(v3843, v3558);
  const v3845 = stdlib.div(v3844, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  let v3846;
  if (v3819) {
    v3846 = v3562;
    }
  else {
    const v3848 = stdlib.div(v3560, v3561);
    const v3849 = stdlib.gt(v3848, v3562);
    const v3851 = v3849 ? v3562 : v3848;
    v3846 = v3851;
    }
  const v3852 = stdlib.div(v3815, v3846);
  const v3853 = stdlib.mul(v3852, v3564);
  const v3854 = stdlib.div(v3853, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
  const v3855 = stdlib.mul(v3854, v3552);
  const v3856 = stdlib.div(v3855, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  const v3857 = stdlib.add(v3845, v3856);
  const v3858 = stdlib.eq(v3834, v3857);
  const v3859 = v3825 ? v3858 : false;
  stdlib.assert(v3859, {
    at: './index.rsh:382:29:application',
    fs: ['at ./index.rsh:382:20:application call to [unknown function] (defined at: ./index.rsh:382:20:function exp)', 'at ./index.rsh:382:20:application call to [unknown function] (defined at: ./index.rsh:382:20:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_burnStable0_192" (defined at: ./index.rsh:381:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: null,
    who: 'Claimant_burnStable'
    });
  const v3863 = ['Claimant_burnStable0_192', v3814];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572, v3863],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:384:24:decimal', stdlib.UInt_max, '0'), [[v3815, v3511], [stdlib.checkedBigNumberify('./index.rsh:384:62:decimal', stdlib.UInt_max, '0'), v3476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
      
      switch (v4301[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v4304 = v4301[1];
          
          break;
          }
        case 'AdminAPI_closeBank0_192': {
          const v5052 = v4301[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v5800 = v4301[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v6548 = v4301[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v7296 = v4301[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v8044 = v4301[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_burnStable"
            });
          const v8103 = v8044[stdlib.checkedBigNumberify('./index.rsh:381:9:spread', stdlib.UInt_max, '0')];
          ;
          const v8178 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v8179 = v8178[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v8180 = stdlib.add(v8179, v8103);
          const v8183 = v8178[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v8184 = v8178[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v8185 = [v8180, v8183, v8184];
          const v8186 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v8185);
          sim_r.txns.push({
            amt: v8103,
            kind: 'to',
            tok: v3511
            });
          const v8187 = v8186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v8188 = v8187[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v8192 = v8187[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v8193 = v8187[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v8194 = [v8188, v8192, v8193];
          const v8195 = stdlib.Array_set(v8186, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v8194);
          ;
          let v8392;
          const v8393 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
          if (v8393) {
            v8392 = v3562;
            }
          else {
            const v8394 = stdlib.div(v3560, v3561);
            const v8395 = stdlib.gt(v8394, v3562);
            const v8397 = v8395 ? v3562 : v8394;
            v8392 = v8397;
            }
          const v8398 = stdlib.div(v8103, v8392);
          const v8401 = stdlib.mul(v8398, v3564);
          const v8402 = stdlib.div(v8401, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
          const v8423 = stdlib.sub(v8398, v8402);
          const v8427 = stdlib.sub(v3572, v8423);
          sim_r.txns.push({
            kind: 'from',
            to: v4300,
            tok: undefined /* Nothing */
            });
          const v8428 = true;
          const v8429 = await txn1.getOutput('Claimant_burnStable', 'v8428', ctc3, v8428);
          
          const v8435 = stdlib.sub(v3561, v8103);
          let v8436;
          if (v8393) {
            v8436 = v3562;
            }
          else {
            const v8438 = stdlib.div(v3560, v3561);
            const v8439 = stdlib.gt(v8438, v3562);
            const v8441 = v8439 ? v3562 : v8438;
            v8436 = v8441;
            }
          const v8442 = stdlib.div(v8103, v8436);
          const v8443 = stdlib.sub(v3560, v8442);
          let v8444;
          if (v8393) {
            v8444 = v3562;
            }
          else {
            const v8446 = stdlib.div(v3560, v3561);
            const v8447 = stdlib.gt(v8446, v3562);
            const v8449 = v8447 ? v3562 : v8446;
            v8444 = v8449;
            }
          const v8450 = stdlib.div(v8103, v8444);
          const v8451 = stdlib.mul(v8450, v3564);
          const v8452 = stdlib.div(v8451, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
          const v8453 = stdlib.mul(v8452, v3558);
          const v8454 = stdlib.div(v8453, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          const v8455 = stdlib.add(v8443, v8454);
          let v8456;
          if (v8393) {
            v8456 = v3562;
            }
          else {
            const v8458 = stdlib.div(v3560, v3561);
            const v8459 = stdlib.gt(v8458, v3562);
            const v8461 = v8459 ? v3562 : v8458;
            v8456 = v8461;
            }
          const v8462 = stdlib.div(v8103, v8456);
          const v8463 = stdlib.mul(v8462, v3564);
          const v8464 = stdlib.div(v8463, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
          const v8465 = stdlib.mul(v8464, v3552);
          const v8466 = stdlib.div(v8465, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          const v8467 = stdlib.add(v3551, v8466);
          const v25614 = v8467;
          const v25615 = v3552;
          const v25616 = v3554;
          const v25617 = v3555;
          const v25618 = v3563;
          const v25619 = v3557;
          const v25620 = v3558;
          const v25621 = v3559;
          const v25622 = v8455;
          const v25623 = v8435;
          const v25624 = v3562;
          const v25625 = v3556;
          const v25626 = v3564;
          const v25628 = v8195;
          const v25629 = v8427;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v8792 = v4301[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v9540 = v4301[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v10288 = v4301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
  switch (v4301[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v4304 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_closeBank0_192': {
      const v5052 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v5800 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v6548 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v7296 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v8044 = v4301[1];
      undefined /* setApiDetails */;
      const v8103 = v8044[stdlib.checkedBigNumberify('./index.rsh:381:9:spread', stdlib.UInt_max, '0')];
      ;
      const v8178 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v8179 = v8178[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v8180 = stdlib.add(v8179, v8103);
      const v8183 = v8178[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v8184 = v8178[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v8185 = [v8180, v8183, v8184];
      const v8186 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v8185);
      ;
      const v8187 = v8186[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v8188 = v8187[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v8192 = v8187[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v8193 = v8187[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v8194 = [v8188, v8192, v8193];
      const v8195 = stdlib.Array_set(v8186, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v8194);
      ;
      let v8392;
      const v8393 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
      if (v8393) {
        v8392 = v3562;
        }
      else {
        const v8394 = stdlib.div(v3560, v3561);
        const v8395 = stdlib.gt(v8394, v3562);
        const v8397 = v8395 ? v3562 : v8394;
        v8392 = v8397;
        }
      const v8398 = stdlib.div(v8103, v8392);
      const v8400 = stdlib.ge(v3572, v8398);
      const v8401 = stdlib.mul(v8398, v3564);
      const v8402 = stdlib.div(v8401, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
      const v8405 = stdlib.mul(v8402, v3558);
      const v8406 = stdlib.div(v8405, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      let v8407;
      if (v8393) {
        v8407 = v3562;
        }
      else {
        const v8409 = stdlib.div(v3560, v3561);
        const v8410 = stdlib.gt(v8409, v3562);
        const v8412 = v8410 ? v3562 : v8409;
        v8407 = v8412;
        }
      const v8413 = stdlib.div(v8103, v8407);
      const v8414 = stdlib.mul(v8413, v3564);
      const v8415 = stdlib.div(v8414, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
      const v8416 = stdlib.mul(v8415, v3552);
      const v8417 = stdlib.div(v8416, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v8418 = stdlib.add(v8406, v8417);
      const v8419 = stdlib.eq(v8402, v8418);
      const v8420 = v8400 ? v8419 : false;
      stdlib.assert(v8420, {
        at: './index.rsh:387:14:application',
        fs: ['at ./index.rsh:385:23:application call to [unknown function] (defined at: ./index.rsh:385:23:function exp)'],
        msg: null,
        who: 'Claimant_burnStable'
        });
      const v8423 = stdlib.sub(v8398, v8402);
      const v8427 = stdlib.sub(v3572, v8423);
      ;
      const v8428 = true;
      const v8429 = await txn1.getOutput('Claimant_burnStable', 'v8428', ctc3, v8428);
      if (v2094) {
        stdlib.protect(ctc10, await interact.out(v8044, v8429), {
          at: './index.rsh:381:10:application',
          fs: ['at ./index.rsh:381:10:application call to [unknown function] (defined at: ./index.rsh:381:10:function exp)', 'at ./index.rsh:390:8:application call to "k" (defined at: ./index.rsh:385:23:function exp)', 'at ./index.rsh:385:23:application call to [unknown function] (defined at: ./index.rsh:385:23:function exp)'],
          msg: 'out',
          who: 'Claimant_burnStable'
          });
        }
      else {
        }
      
      const v8435 = stdlib.sub(v3561, v8103);
      let v8436;
      if (v8393) {
        v8436 = v3562;
        }
      else {
        const v8438 = stdlib.div(v3560, v3561);
        const v8439 = stdlib.gt(v8438, v3562);
        const v8441 = v8439 ? v3562 : v8438;
        v8436 = v8441;
        }
      const v8442 = stdlib.div(v8103, v8436);
      const v8443 = stdlib.sub(v3560, v8442);
      let v8444;
      if (v8393) {
        v8444 = v3562;
        }
      else {
        const v8446 = stdlib.div(v3560, v3561);
        const v8447 = stdlib.gt(v8446, v3562);
        const v8449 = v8447 ? v3562 : v8446;
        v8444 = v8449;
        }
      const v8450 = stdlib.div(v8103, v8444);
      const v8451 = stdlib.mul(v8450, v3564);
      const v8452 = stdlib.div(v8451, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
      const v8453 = stdlib.mul(v8452, v3558);
      const v8454 = stdlib.div(v8453, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v8455 = stdlib.add(v8443, v8454);
      let v8456;
      if (v8393) {
        v8456 = v3562;
        }
      else {
        const v8458 = stdlib.div(v3560, v3561);
        const v8459 = stdlib.gt(v8458, v3562);
        const v8461 = v8459 ? v3562 : v8458;
        v8456 = v8461;
        }
      const v8462 = stdlib.div(v8103, v8456);
      const v8463 = stdlib.mul(v8462, v3564);
      const v8464 = stdlib.div(v8463, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
      const v8465 = stdlib.mul(v8464, v3552);
      const v8466 = stdlib.div(v8465, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v8467 = stdlib.add(v3551, v8466);
      const v25614 = v8467;
      const v25615 = v3552;
      const v25616 = v3554;
      const v25617 = v3555;
      const v25618 = v3563;
      const v25619 = v3557;
      const v25620 = v3558;
      const v25621 = v3559;
      const v25622 = v8455;
      const v25623 = v8435;
      const v25624 = v3562;
      const v25625 = v3556;
      const v25626 = v3564;
      const v25628 = v8195;
      const v25629 = v8427;
      return;
      
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v8792 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v9540 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v10288 = v4301[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_mintFirstStable4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_mintFirstStable4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_mintFirstStable4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_closeBank0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v3631 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:270:20:application call to [unknown function] (defined at: ./index.rsh:270:20:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_mintFirstStable0_192" (defined at: ./index.rsh:269:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: 'in',
    who: 'Claimant_mintFirstStable'
    });
  const v3632 = v3631[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3634 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:270:51:decimal', stdlib.UInt_max, '0'));
  const v3635 = stdlib.div(v3632, v3562);
  const v3636 = v3571[stdlib.checkedBigNumberify('./index.rsh:271:47:application', stdlib.UInt_max, '1')];
  const v3637 = v3636[stdlib.checkedBigNumberify('./index.rsh:271:47:application', stdlib.UInt_max, '0')];
  const v3638 = stdlib.le(v3635, v3637);
  const v3639 = v3634 ? v3638 : false;
  const v3640 = stdlib.mul(v3632, v3564);
  const v3641 = stdlib.div(v3640, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
  const v3644 = stdlib.mul(v3641, v3558);
  const v3645 = stdlib.div(v3644, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  const v3648 = stdlib.mul(v3641, v3552);
  const v3649 = stdlib.div(v3648, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  const v3650 = stdlib.add(v3645, v3649);
  const v3651 = stdlib.eq(v3641, v3650);
  const v3652 = v3639 ? v3651 : false;
  stdlib.assert(v3652, {
    at: './index.rsh:270:29:application',
    fs: ['at ./index.rsh:270:20:application call to [unknown function] (defined at: ./index.rsh:270:20:function exp)', 'at ./index.rsh:270:20:application call to [unknown function] (defined at: ./index.rsh:270:20:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_mintFirstStable0_192" (defined at: ./index.rsh:269:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: null,
    who: 'Claimant_mintFirstStable'
    });
  const v3656 = ['Claimant_mintFirstStable0_192', v3631];
  
  const v4220 = stdlib.add(v3632, v3641);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572, v3656],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v4220, [[stdlib.checkedBigNumberify('./index.rsh:273:66:decimal', stdlib.UInt_max, '0'), v3511], [stdlib.checkedBigNumberify('./index.rsh:273:89:decimal', stdlib.UInt_max, '0'), v3476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
      
      switch (v4301[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v4304 = v4301[1];
          
          break;
          }
        case 'AdminAPI_closeBank0_192': {
          const v5052 = v4301[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v5800 = v4301[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v6548 = v4301[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v7296 = v4301[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v8044 = v4301[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v8792 = v4301[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_mintFirstStable"
            });
          const v8862 = v8792[stdlib.checkedBigNumberify('./index.rsh:269:9:spread', stdlib.UInt_max, '0')];
          const v8863 = stdlib.mul(v8862, v3564);
          const v8864 = stdlib.div(v8863, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
          const v8865 = stdlib.add(v8862, v8864);
          const v8925 = stdlib.add(v3572, v8865);
          sim_r.txns.push({
            amt: v8865,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v8926 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v8927 = v8926[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v8931 = v8926[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v8932 = v8926[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v8933 = [v8927, v8931, v8932];
          const v8934 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v8933);
          ;
          const v8935 = v8934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v8936 = v8935[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v8940 = v8935[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v8941 = v8935[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v8942 = [v8936, v8940, v8941];
          const v8943 = stdlib.Array_set(v8934, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v8942);
          ;
          const v9227 = v8943[stdlib.checkedBigNumberify('./index.rsh:276:91:application', stdlib.UInt_max, '1')];
          const v9228 = v9227[stdlib.checkedBigNumberify('./index.rsh:276:91:application', stdlib.UInt_max, '0')];
          const v9235 = stdlib.mul(v8864, v3558);
          const v9236 = stdlib.div(v9235, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          const v9239 = stdlib.mul(v8864, v3552);
          const v9240 = stdlib.div(v9239, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          const v9244 = stdlib.div(v8862, v3562);
          const v9250 = stdlib.sub(v9228, v9244);
          const v9253 = v9227[stdlib.checkedBigNumberify('./index.rsh:278:72:application', stdlib.UInt_max, '1')];
          const v9254 = v9227[stdlib.checkedBigNumberify('./index.rsh:278:72:application', stdlib.UInt_max, '2')];
          const v9255 = [v9250, v9253, v9254];
          const v9256 = stdlib.Array_set(v8943, stdlib.checkedBigNumberify('./index.rsh:278:72:application', stdlib.UInt_max, '1'), v9255);
          sim_r.txns.push({
            kind: 'from',
            to: v4300,
            tok: v3511
            });
          const v9257 = true;
          const v9258 = await txn1.getOutput('Claimant_mintFirstStable', 'v9257', ctc3, v9257);
          
          const v9265 = stdlib.add(v3561, v9244);
          const v9266 = stdlib.add(v3560, v8862);
          const v9271 = stdlib.add(v9266, v9236);
          const v9276 = stdlib.add(v3551, v9240);
          const v25774 = v9276;
          const v25775 = v3552;
          const v25776 = v3554;
          const v25777 = v3555;
          const v25778 = v3563;
          const v25779 = v3557;
          const v25780 = v3558;
          const v25781 = v3559;
          const v25782 = v9271;
          const v25783 = v9265;
          const v25784 = v3562;
          const v25785 = v3556;
          const v25786 = v3564;
          const v25788 = v9256;
          const v25789 = v8925;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v9540 = v4301[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v10288 = v4301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
  switch (v4301[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v4304 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_closeBank0_192': {
      const v5052 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v5800 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v6548 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v7296 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v8044 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v8792 = v4301[1];
      undefined /* setApiDetails */;
      const v8862 = v8792[stdlib.checkedBigNumberify('./index.rsh:269:9:spread', stdlib.UInt_max, '0')];
      const v8863 = stdlib.mul(v8862, v3564);
      const v8864 = stdlib.div(v8863, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
      const v8865 = stdlib.add(v8862, v8864);
      const v8925 = stdlib.add(v3572, v8865);
      ;
      const v8926 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v8927 = v8926[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v8931 = v8926[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v8932 = v8926[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v8933 = [v8927, v8931, v8932];
      const v8934 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v8933);
      ;
      const v8935 = v8934[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v8936 = v8935[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v8940 = v8935[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v8941 = v8935[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v8942 = [v8936, v8940, v8941];
      const v8943 = stdlib.Array_set(v8934, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v8942);
      ;
      const v9219 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:275:38:decimal', stdlib.UInt_max, '0'));
      let v9220;
      if (v9219) {
        v9220 = v3562;
        }
      else {
        const v9222 = stdlib.div(v3560, v3561);
        const v9223 = stdlib.gt(v9222, v3562);
        const v9225 = v9223 ? v3562 : v9222;
        v9220 = v9225;
        }
      const v9226 = stdlib.div(v8862, v9220);
      const v9227 = v8943[stdlib.checkedBigNumberify('./index.rsh:276:91:application', stdlib.UInt_max, '1')];
      const v9228 = v9227[stdlib.checkedBigNumberify('./index.rsh:276:91:application', stdlib.UInt_max, '0')];
      const v9229 = stdlib.le(v9226, v9228);
      const v9230 = v9219 ? v9229 : false;
      const v9235 = stdlib.mul(v8864, v3558);
      const v9236 = stdlib.div(v9235, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v9239 = stdlib.mul(v8864, v3552);
      const v9240 = stdlib.div(v9239, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v9241 = stdlib.add(v9236, v9240);
      const v9242 = stdlib.eq(v8864, v9241);
      const v9243 = v9230 ? v9242 : false;
      stdlib.assert(v9243, {
        at: './index.rsh:275:16:application',
        fs: ['at ./index.rsh:274:23:application call to [unknown function] (defined at: ./index.rsh:274:23:function exp)'],
        msg: null,
        who: 'Claimant_mintFirstStable'
        });
      const v9244 = stdlib.div(v8862, v3562);
      const v9250 = stdlib.sub(v9228, v9244);
      const v9253 = v9227[stdlib.checkedBigNumberify('./index.rsh:278:72:application', stdlib.UInt_max, '1')];
      const v9254 = v9227[stdlib.checkedBigNumberify('./index.rsh:278:72:application', stdlib.UInt_max, '2')];
      const v9255 = [v9250, v9253, v9254];
      const v9256 = stdlib.Array_set(v8943, stdlib.checkedBigNumberify('./index.rsh:278:72:application', stdlib.UInt_max, '1'), v9255);
      ;
      const v9257 = true;
      const v9258 = await txn1.getOutput('Claimant_mintFirstStable', 'v9257', ctc3, v9257);
      if (v2094) {
        stdlib.protect(ctc10, await interact.out(v8792, v9258), {
          at: './index.rsh:269:10:application',
          fs: ['at ./index.rsh:269:10:application call to [unknown function] (defined at: ./index.rsh:269:10:function exp)', 'at ./index.rsh:279:10:application call to "k" (defined at: ./index.rsh:274:23:function exp)', 'at ./index.rsh:274:23:application call to [unknown function] (defined at: ./index.rsh:274:23:function exp)'],
          msg: 'out',
          who: 'Claimant_mintFirstStable'
          });
        }
      else {
        }
      
      const v9265 = stdlib.add(v3561, v9244);
      const v9266 = stdlib.add(v3560, v8862);
      const v9271 = stdlib.add(v9266, v9236);
      const v9276 = stdlib.add(v3551, v9240);
      const v25774 = v9276;
      const v25775 = v3552;
      const v25776 = v3554;
      const v25777 = v3555;
      const v25778 = v3563;
      const v25779 = v3557;
      const v25780 = v3558;
      const v25781 = v3559;
      const v25782 = v9271;
      const v25783 = v9265;
      const v25784 = v3562;
      const v25785 = v3556;
      const v25786 = v3564;
      const v25788 = v9256;
      const v25789 = v8925;
      return;
      
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v9540 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v10288 = v4301[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_mintReserve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_mintReserve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_mintReserve4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_closeBank0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v3738 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:356:18:application call to [unknown function] (defined at: ./index.rsh:356:18:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_mintReserve0_192" (defined at: ./index.rsh:355:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: 'in',
    who: 'Claimant_mintReserve'
    });
  const v3739 = v3738[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3741 = stdlib.mul(v3739, v3564);
  const v3742 = stdlib.div(v3741, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
  const v3743 = stdlib.mul(v3742, v3558);
  const v3744 = stdlib.div(v3743, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  const v3745 = stdlib.add(v3560, v3744);
  let v3746;
  const v3747 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
  if (v3747) {
    v3746 = v3562;
    }
  else {
    const v3748 = stdlib.div(v3745, v3561);
    const v3749 = stdlib.gt(v3748, v3562);
    const v3751 = v3749 ? v3562 : v3748;
    v3746 = v3751;
    }
  const v3752 = stdlib.mul(v3561, v3746);
  const v3753 = stdlib.div(v3745, v3752);
  const v3754 = stdlib.le(v3753, v3554);
  const v3755 = stdlib.lt(v3561, v3563);
  const v3756 = v3754 ? true : v3755;
  let v3757;
  const v3758 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:163:23:decimal', stdlib.UInt_max, '0'));
  let v3759;
  if (v3747) {
    v3759 = v3562;
    }
  else {
    const v3761 = stdlib.div(v3560, v3561);
    const v3762 = stdlib.gt(v3761, v3562);
    const v3764 = v3762 ? v3562 : v3761;
    v3759 = v3764;
    }
  const v3765 = stdlib.mul(v3561, v3759);
  const v3766 = stdlib.sub(v3560, v3765);
  const v3767 = stdlib.eq(v3766, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
  const v3768 = v3758 ? true : v3767;
  if (v3768) {
    v3757 = v3555;
    }
  else {
    let v3769;
    if (v3747) {
      v3769 = v3562;
      }
    else {
      const v3771 = stdlib.div(v3560, v3561);
      const v3772 = stdlib.gt(v3771, v3562);
      const v3774 = v3772 ? v3562 : v3771;
      v3769 = v3774;
      }
    const v3775 = stdlib.mul(v3561, v3769);
    const v3776 = stdlib.sub(v3560, v3775);
    const v3777 = stdlib.div(v3776, v3559);
    const v3778 = stdlib.gt(v3777, v3555);
    let v3779;
    if (v3747) {
      v3779 = v3562;
      }
    else {
      const v3781 = stdlib.div(v3560, v3561);
      const v3782 = stdlib.gt(v3781, v3562);
      const v3784 = v3782 ? v3562 : v3781;
      v3779 = v3784;
      }
    const v3785 = stdlib.mul(v3561, v3779);
    const v3786 = stdlib.sub(v3560, v3785);
    const v3787 = stdlib.div(v3786, v3559);
    const v3788 = v3778 ? v3787 : v3555;
    v3757 = v3788;
    }
  const v3789 = stdlib.div(v3739, v3757);
  const v3790 = v3571[stdlib.checkedBigNumberify('./index.rsh:357:119:application', stdlib.UInt_max, '0')];
  const v3791 = v3790[stdlib.checkedBigNumberify('./index.rsh:357:119:application', stdlib.UInt_max, '0')];
  const v3792 = stdlib.le(v3789, v3791);
  const v3793 = v3756 ? v3792 : false;
  const v3802 = stdlib.mul(v3742, v3552);
  const v3803 = stdlib.div(v3802, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  const v3804 = stdlib.add(v3744, v3803);
  const v3805 = stdlib.eq(v3742, v3804);
  const v3806 = v3793 ? v3805 : false;
  stdlib.assert(v3806, {
    at: './index.rsh:356:27:application',
    fs: ['at ./index.rsh:356:18:application call to [unknown function] (defined at: ./index.rsh:356:18:function exp)', 'at ./index.rsh:356:18:application call to [unknown function] (defined at: ./index.rsh:356:18:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_mintReserve0_192" (defined at: ./index.rsh:355:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: null,
    who: 'Claimant_mintReserve'
    });
  const v3810 = ['Claimant_mintReserve0_192', v3738];
  
  const v4248 = stdlib.add(v3739, v3742);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572, v3810],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v4248, [[stdlib.checkedBigNumberify('./index.rsh:359:63:decimal', stdlib.UInt_max, '0'), v3511], [stdlib.checkedBigNumberify('./index.rsh:359:86:decimal', stdlib.UInt_max, '0'), v3476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
      
      switch (v4301[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v4304 = v4301[1];
          
          break;
          }
        case 'AdminAPI_closeBank0_192': {
          const v5052 = v4301[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v5800 = v4301[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v6548 = v4301[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v7296 = v4301[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v8044 = v4301[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v8792 = v4301[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v9540 = v4301[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_mintReserve"
            });
          const v9624 = v9540[stdlib.checkedBigNumberify('./index.rsh:355:9:spread', stdlib.UInt_max, '0')];
          const v9625 = stdlib.mul(v9624, v3564);
          const v9626 = stdlib.div(v9625, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
          const v9627 = stdlib.add(v9624, v9626);
          const v9673 = stdlib.add(v3572, v9627);
          sim_r.txns.push({
            amt: v9627,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v9674 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v9675 = v9674[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v9679 = v9674[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v9680 = v9674[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v9681 = [v9675, v9679, v9680];
          const v9682 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v9681);
          ;
          const v9683 = v9682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v9684 = v9683[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v9688 = v9683[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v9689 = v9683[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v9690 = [v9684, v9688, v9689];
          const v9691 = stdlib.Array_set(v9682, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v9690);
          ;
          const v10030 = stdlib.mul(v9626, v3558);
          const v10031 = stdlib.div(v10030, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          const v10034 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
          const v10045 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:163:23:decimal', stdlib.UInt_max, '0'));
          const v10077 = v9691[stdlib.checkedBigNumberify('./index.rsh:362:122:application', stdlib.UInt_max, '0')];
          const v10078 = v10077[stdlib.checkedBigNumberify('./index.rsh:362:122:application', stdlib.UInt_max, '0')];
          const v10089 = stdlib.mul(v9626, v3552);
          const v10090 = stdlib.div(v10089, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          let v10094;
          let v10096;
          if (v10034) {
            v10096 = v3562;
            }
          else {
            const v10098 = stdlib.div(v3560, v3561);
            const v10099 = stdlib.gt(v10098, v3562);
            const v10101 = v10099 ? v3562 : v10098;
            v10096 = v10101;
            }
          const v10102 = stdlib.mul(v3561, v10096);
          const v10103 = stdlib.sub(v3560, v10102);
          const v10104 = stdlib.eq(v10103, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
          const v10105 = v10045 ? true : v10104;
          if (v10105) {
            v10094 = v3555;
            }
          else {
            let v10106;
            if (v10034) {
              v10106 = v3562;
              }
            else {
              const v10108 = stdlib.div(v3560, v3561);
              const v10109 = stdlib.gt(v10108, v3562);
              const v10111 = v10109 ? v3562 : v10108;
              v10106 = v10111;
              }
            const v10112 = stdlib.mul(v3561, v10106);
            const v10113 = stdlib.sub(v3560, v10112);
            const v10114 = stdlib.div(v10113, v3559);
            const v10115 = stdlib.gt(v10114, v3555);
            let v10116;
            if (v10034) {
              v10116 = v3562;
              }
            else {
              const v10118 = stdlib.div(v3560, v3561);
              const v10119 = stdlib.gt(v10118, v3562);
              const v10121 = v10119 ? v3562 : v10118;
              v10116 = v10121;
              }
            const v10122 = stdlib.mul(v3561, v10116);
            const v10123 = stdlib.sub(v3560, v10122);
            const v10124 = stdlib.div(v10123, v3559);
            const v10125 = v10115 ? v10124 : v3555;
            v10094 = v10125;
            }
          const v10126 = stdlib.div(v9624, v10094);
          const v10132 = stdlib.sub(v10078, v10126);
          const v10135 = v10077[stdlib.checkedBigNumberify('./index.rsh:364:145:application', stdlib.UInt_max, '1')];
          const v10136 = v10077[stdlib.checkedBigNumberify('./index.rsh:364:145:application', stdlib.UInt_max, '2')];
          const v10137 = [v10132, v10135, v10136];
          const v10138 = stdlib.Array_set(v9691, stdlib.checkedBigNumberify('./index.rsh:364:145:application', stdlib.UInt_max, '0'), v10137);
          sim_r.txns.push({
            kind: 'from',
            to: v4300,
            tok: v3476
            });
          const v10139 = true;
          const v10140 = await txn1.getOutput('Claimant_mintReserve', 'v10139', ctc3, v10139);
          
          let v10146;
          let v10148;
          if (v10034) {
            v10148 = v3562;
            }
          else {
            const v10150 = stdlib.div(v3560, v3561);
            const v10151 = stdlib.gt(v10150, v3562);
            const v10153 = v10151 ? v3562 : v10150;
            v10148 = v10153;
            }
          const v10154 = stdlib.mul(v3561, v10148);
          const v10155 = stdlib.sub(v3560, v10154);
          const v10156 = stdlib.eq(v10155, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
          const v10157 = v10045 ? true : v10156;
          if (v10157) {
            v10146 = v3555;
            }
          else {
            let v10158;
            if (v10034) {
              v10158 = v3562;
              }
            else {
              const v10160 = stdlib.div(v3560, v3561);
              const v10161 = stdlib.gt(v10160, v3562);
              const v10163 = v10161 ? v3562 : v10160;
              v10158 = v10163;
              }
            const v10164 = stdlib.mul(v3561, v10158);
            const v10165 = stdlib.sub(v3560, v10164);
            const v10166 = stdlib.div(v10165, v3559);
            const v10167 = stdlib.gt(v10166, v3555);
            let v10168;
            if (v10034) {
              v10168 = v3562;
              }
            else {
              const v10170 = stdlib.div(v3560, v3561);
              const v10171 = stdlib.gt(v10170, v3562);
              const v10173 = v10171 ? v3562 : v10170;
              v10168 = v10173;
              }
            const v10174 = stdlib.mul(v3561, v10168);
            const v10175 = stdlib.sub(v3560, v10174);
            const v10176 = stdlib.div(v10175, v3559);
            const v10177 = v10167 ? v10176 : v3555;
            v10146 = v10177;
            }
          const v10178 = stdlib.div(v9624, v10146);
          const v10179 = stdlib.add(v3559, v10178);
          const v10180 = stdlib.add(v3560, v9624);
          const v10185 = stdlib.add(v10180, v10031);
          const v10190 = stdlib.add(v3551, v10090);
          const v25934 = v10190;
          const v25935 = v3552;
          const v25936 = v3554;
          const v25937 = v3555;
          const v25938 = v3563;
          const v25939 = v3557;
          const v25940 = v3558;
          const v25941 = v10179;
          const v25942 = v10185;
          const v25943 = v3561;
          const v25944 = v3562;
          const v25945 = v3556;
          const v25946 = v3564;
          const v25948 = v10138;
          const v25949 = v9673;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v10288 = v4301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
  switch (v4301[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v4304 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_closeBank0_192': {
      const v5052 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v5800 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v6548 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v7296 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v8044 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v8792 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v9540 = v4301[1];
      undefined /* setApiDetails */;
      const v9624 = v9540[stdlib.checkedBigNumberify('./index.rsh:355:9:spread', stdlib.UInt_max, '0')];
      const v9625 = stdlib.mul(v9624, v3564);
      const v9626 = stdlib.div(v9625, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
      const v9627 = stdlib.add(v9624, v9626);
      const v9673 = stdlib.add(v3572, v9627);
      ;
      const v9674 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v9675 = v9674[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v9679 = v9674[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v9680 = v9674[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v9681 = [v9675, v9679, v9680];
      const v9682 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v9681);
      ;
      const v9683 = v9682[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v9684 = v9683[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v9688 = v9683[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v9689 = v9683[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v9690 = [v9684, v9688, v9689];
      const v9691 = stdlib.Array_set(v9682, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v9690);
      ;
      const v10030 = stdlib.mul(v9626, v3558);
      const v10031 = stdlib.div(v10030, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v10032 = stdlib.add(v3560, v10031);
      let v10033;
      const v10034 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
      if (v10034) {
        v10033 = v3562;
        }
      else {
        const v10035 = stdlib.div(v10032, v3561);
        const v10036 = stdlib.gt(v10035, v3562);
        const v10038 = v10036 ? v3562 : v10035;
        v10033 = v10038;
        }
      const v10039 = stdlib.mul(v3561, v10033);
      const v10040 = stdlib.div(v10032, v10039);
      const v10041 = stdlib.le(v10040, v3554);
      const v10042 = stdlib.lt(v3561, v3563);
      const v10043 = v10041 ? true : v10042;
      let v10044;
      const v10045 = stdlib.eq(v3559, stdlib.checkedBigNumberify('./index.rsh:163:23:decimal', stdlib.UInt_max, '0'));
      let v10046;
      if (v10034) {
        v10046 = v3562;
        }
      else {
        const v10048 = stdlib.div(v3560, v3561);
        const v10049 = stdlib.gt(v10048, v3562);
        const v10051 = v10049 ? v3562 : v10048;
        v10046 = v10051;
        }
      const v10052 = stdlib.mul(v3561, v10046);
      const v10053 = stdlib.sub(v3560, v10052);
      const v10054 = stdlib.eq(v10053, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
      const v10055 = v10045 ? true : v10054;
      if (v10055) {
        v10044 = v3555;
        }
      else {
        let v10056;
        if (v10034) {
          v10056 = v3562;
          }
        else {
          const v10058 = stdlib.div(v3560, v3561);
          const v10059 = stdlib.gt(v10058, v3562);
          const v10061 = v10059 ? v3562 : v10058;
          v10056 = v10061;
          }
        const v10062 = stdlib.mul(v3561, v10056);
        const v10063 = stdlib.sub(v3560, v10062);
        const v10064 = stdlib.div(v10063, v3559);
        const v10065 = stdlib.gt(v10064, v3555);
        let v10066;
        if (v10034) {
          v10066 = v3562;
          }
        else {
          const v10068 = stdlib.div(v3560, v3561);
          const v10069 = stdlib.gt(v10068, v3562);
          const v10071 = v10069 ? v3562 : v10068;
          v10066 = v10071;
          }
        const v10072 = stdlib.mul(v3561, v10066);
        const v10073 = stdlib.sub(v3560, v10072);
        const v10074 = stdlib.div(v10073, v3559);
        const v10075 = v10065 ? v10074 : v3555;
        v10044 = v10075;
        }
      const v10076 = stdlib.div(v9624, v10044);
      const v10077 = v9691[stdlib.checkedBigNumberify('./index.rsh:362:122:application', stdlib.UInt_max, '0')];
      const v10078 = v10077[stdlib.checkedBigNumberify('./index.rsh:362:122:application', stdlib.UInt_max, '0')];
      const v10079 = stdlib.le(v10076, v10078);
      const v10080 = v10043 ? v10079 : false;
      const v10089 = stdlib.mul(v9626, v3552);
      const v10090 = stdlib.div(v10089, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v10091 = stdlib.add(v10031, v10090);
      const v10092 = stdlib.eq(v9626, v10091);
      const v10093 = v10080 ? v10092 : false;
      stdlib.assert(v10093, {
        at: './index.rsh:361:14:application',
        fs: ['at ./index.rsh:360:21:application call to [unknown function] (defined at: ./index.rsh:360:21:function exp)'],
        msg: null,
        who: 'Claimant_mintReserve'
        });
      let v10094;
      let v10096;
      if (v10034) {
        v10096 = v3562;
        }
      else {
        const v10098 = stdlib.div(v3560, v3561);
        const v10099 = stdlib.gt(v10098, v3562);
        const v10101 = v10099 ? v3562 : v10098;
        v10096 = v10101;
        }
      const v10102 = stdlib.mul(v3561, v10096);
      const v10103 = stdlib.sub(v3560, v10102);
      const v10104 = stdlib.eq(v10103, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
      const v10105 = v10045 ? true : v10104;
      if (v10105) {
        v10094 = v3555;
        }
      else {
        let v10106;
        if (v10034) {
          v10106 = v3562;
          }
        else {
          const v10108 = stdlib.div(v3560, v3561);
          const v10109 = stdlib.gt(v10108, v3562);
          const v10111 = v10109 ? v3562 : v10108;
          v10106 = v10111;
          }
        const v10112 = stdlib.mul(v3561, v10106);
        const v10113 = stdlib.sub(v3560, v10112);
        const v10114 = stdlib.div(v10113, v3559);
        const v10115 = stdlib.gt(v10114, v3555);
        let v10116;
        if (v10034) {
          v10116 = v3562;
          }
        else {
          const v10118 = stdlib.div(v3560, v3561);
          const v10119 = stdlib.gt(v10118, v3562);
          const v10121 = v10119 ? v3562 : v10118;
          v10116 = v10121;
          }
        const v10122 = stdlib.mul(v3561, v10116);
        const v10123 = stdlib.sub(v3560, v10122);
        const v10124 = stdlib.div(v10123, v3559);
        const v10125 = v10115 ? v10124 : v3555;
        v10094 = v10125;
        }
      const v10126 = stdlib.div(v9624, v10094);
      const v10132 = stdlib.sub(v10078, v10126);
      const v10135 = v10077[stdlib.checkedBigNumberify('./index.rsh:364:145:application', stdlib.UInt_max, '1')];
      const v10136 = v10077[stdlib.checkedBigNumberify('./index.rsh:364:145:application', stdlib.UInt_max, '2')];
      const v10137 = [v10132, v10135, v10136];
      const v10138 = stdlib.Array_set(v9691, stdlib.checkedBigNumberify('./index.rsh:364:145:application', stdlib.UInt_max, '0'), v10137);
      ;
      const v10139 = true;
      const v10140 = await txn1.getOutput('Claimant_mintReserve', 'v10139', ctc3, v10139);
      if (v2094) {
        stdlib.protect(ctc10, await interact.out(v9540, v10140), {
          at: './index.rsh:355:10:application',
          fs: ['at ./index.rsh:355:10:application call to [unknown function] (defined at: ./index.rsh:355:10:function exp)', 'at ./index.rsh:365:8:application call to "k" (defined at: ./index.rsh:360:21:function exp)', 'at ./index.rsh:360:21:application call to [unknown function] (defined at: ./index.rsh:360:21:function exp)'],
          msg: 'out',
          who: 'Claimant_mintReserve'
          });
        }
      else {
        }
      
      let v10146;
      let v10148;
      if (v10034) {
        v10148 = v3562;
        }
      else {
        const v10150 = stdlib.div(v3560, v3561);
        const v10151 = stdlib.gt(v10150, v3562);
        const v10153 = v10151 ? v3562 : v10150;
        v10148 = v10153;
        }
      const v10154 = stdlib.mul(v3561, v10148);
      const v10155 = stdlib.sub(v3560, v10154);
      const v10156 = stdlib.eq(v10155, stdlib.checkedBigNumberify('./index.rsh:163:61:decimal', stdlib.UInt_max, '0'));
      const v10157 = v10045 ? true : v10156;
      if (v10157) {
        v10146 = v3555;
        }
      else {
        let v10158;
        if (v10034) {
          v10158 = v3562;
          }
        else {
          const v10160 = stdlib.div(v3560, v3561);
          const v10161 = stdlib.gt(v10160, v3562);
          const v10163 = v10161 ? v3562 : v10160;
          v10158 = v10163;
          }
        const v10164 = stdlib.mul(v3561, v10158);
        const v10165 = stdlib.sub(v3560, v10164);
        const v10166 = stdlib.div(v10165, v3559);
        const v10167 = stdlib.gt(v10166, v3555);
        let v10168;
        if (v10034) {
          v10168 = v3562;
          }
        else {
          const v10170 = stdlib.div(v3560, v3561);
          const v10171 = stdlib.gt(v10170, v3562);
          const v10173 = v10171 ? v3562 : v10170;
          v10168 = v10173;
          }
        const v10174 = stdlib.mul(v3561, v10168);
        const v10175 = stdlib.sub(v3560, v10174);
        const v10176 = stdlib.div(v10175, v3559);
        const v10177 = v10167 ? v10176 : v3555;
        v10146 = v10177;
        }
      const v10178 = stdlib.div(v9624, v10146);
      const v10179 = stdlib.add(v3559, v10178);
      const v10180 = stdlib.add(v3560, v9624);
      const v10185 = stdlib.add(v10180, v10031);
      const v10190 = stdlib.add(v3551, v10090);
      const v25934 = v10190;
      const v25935 = v3552;
      const v25936 = v3554;
      const v25937 = v3555;
      const v25938 = v3563;
      const v25939 = v3557;
      const v25940 = v3558;
      const v25941 = v10179;
      const v25942 = v10185;
      const v25943 = v3561;
      const v25944 = v3562;
      const v25945 = v3556;
      const v25946 = v3564;
      const v25948 = v10138;
      const v25949 = v9673;
      return;
      
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v10288 = v4301[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_mintStable4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_mintStable4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_mintStable4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_closeBank0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]);
  const v3680 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:327:20:application call to [unknown function] (defined at: ./index.rsh:327:20:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_mintStable0_192" (defined at: ./index.rsh:326:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: 'in',
    who: 'Claimant_mintStable'
    });
  const v3681 = v3680[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v3683;
  const v3684 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
  if (v3684) {
    v3683 = v3562;
    }
  else {
    const v3685 = stdlib.div(v3560, v3561);
    const v3686 = stdlib.gt(v3685, v3562);
    const v3688 = v3686 ? v3562 : v3685;
    v3683 = v3688;
    }
  const v3689 = stdlib.mul(v3561, v3683);
  const v3690 = stdlib.div(v3560, v3689);
  const v3691 = stdlib.ge(v3690, v3557);
  const v3692 = stdlib.mul(v3681, v3564);
  const v3693 = stdlib.div(v3692, stdlib.checkedBigNumberify('./index.rsh:172:31:decimal', stdlib.UInt_max, '100'));
  const v3694 = stdlib.mul(v3693, v3558);
  const v3695 = stdlib.div(v3694, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  const v3696 = stdlib.add(v3560, v3695);
  let v3697;
  if (v3684) {
    v3697 = v3562;
    }
  else {
    const v3699 = stdlib.div(v3696, v3561);
    const v3700 = stdlib.gt(v3699, v3562);
    const v3702 = v3700 ? v3562 : v3699;
    v3697 = v3702;
    }
  const v3703 = stdlib.mul(v3561, v3697);
  const v3704 = stdlib.div(v3696, v3703);
  const v3705 = stdlib.ge(v3704, v3557);
  const v3706 = v3691 ? v3705 : false;
  let v3707;
  if (v3684) {
    v3707 = v3562;
    }
  else {
    const v3709 = stdlib.div(v3560, v3561);
    const v3710 = stdlib.gt(v3709, v3562);
    const v3712 = v3710 ? v3562 : v3709;
    v3707 = v3712;
    }
  const v3713 = stdlib.div(v3681, v3707);
  const v3714 = v3571[stdlib.checkedBigNumberify('./index.rsh:329:89:application', stdlib.UInt_max, '1')];
  const v3715 = v3714[stdlib.checkedBigNumberify('./index.rsh:329:89:application', stdlib.UInt_max, '0')];
  const v3716 = stdlib.le(v3713, v3715);
  const v3717 = v3706 ? v3716 : false;
  const v3726 = stdlib.mul(v3693, v3552);
  const v3727 = stdlib.div(v3726, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
  const v3728 = stdlib.add(v3695, v3727);
  const v3729 = stdlib.eq(v3693, v3728);
  const v3730 = v3717 ? v3729 : false;
  stdlib.assert(v3730, {
    at: './index.rsh:327:29:application',
    fs: ['at ./index.rsh:327:20:application call to [unknown function] (defined at: ./index.rsh:327:20:function exp)', 'at ./index.rsh:327:20:application call to [unknown function] (defined at: ./index.rsh:327:20:function exp)', 'at ./index.rsh:118:17:application call to "runClaimant_mintStable0_192" (defined at: ./index.rsh:326:9:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:17:function exp)'],
    msg: null,
    who: 'Claimant_mintStable'
    });
  const v3734 = ['Claimant_mintStable0_192', v3680];
  
  const v4276 = stdlib.add(v3681, v3693);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3445, v3460, v3462, v3476, v3511, v3551, v3552, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3571, v3572, v3734],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v4276, [[stdlib.checkedBigNumberify('./index.rsh:331:66:decimal', stdlib.UInt_max, '0'), v3511], [stdlib.checkedBigNumberify('./index.rsh:331:89:decimal', stdlib.UInt_max, '0'), v3476]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
      
      switch (v4301[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v4304 = v4301[1];
          
          break;
          }
        case 'AdminAPI_closeBank0_192': {
          const v5052 = v4301[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v5800 = v4301[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v6548 = v4301[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v7296 = v4301[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v8044 = v4301[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v8792 = v4301[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v9540 = v4301[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v10288 = v4301[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_mintStable"
            });
          const v10386 = v10288[stdlib.checkedBigNumberify('./index.rsh:326:9:spread', stdlib.UInt_max, '0')];
          const v10387 = stdlib.mul(v10386, v3564);
          const v10388 = stdlib.div(v10387, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
          const v10389 = stdlib.add(v10386, v10388);
          const v10421 = stdlib.add(v3572, v10389);
          sim_r.txns.push({
            amt: v10389,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v10422 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v10423 = v10422[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v10427 = v10422[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v10428 = v10422[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v10429 = [v10423, v10427, v10428];
          const v10430 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v10429);
          ;
          const v10431 = v10430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v10432 = v10431[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
          const v10436 = v10431[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
          const v10437 = v10431[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
          const v10438 = [v10432, v10436, v10437];
          const v10439 = stdlib.Array_set(v10430, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v10438);
          ;
          const v10943 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
          const v10953 = stdlib.mul(v10388, v3558);
          const v10954 = stdlib.div(v10953, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          const v10973 = v10439[stdlib.checkedBigNumberify('./index.rsh:335:91:application', stdlib.UInt_max, '1')];
          const v10974 = v10973[stdlib.checkedBigNumberify('./index.rsh:335:91:application', stdlib.UInt_max, '0')];
          const v10985 = stdlib.mul(v10388, v3552);
          const v10986 = stdlib.div(v10985, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
          let v10990;
          if (v10943) {
            v10990 = v3562;
            }
          else {
            const v10992 = stdlib.div(v3560, v3561);
            const v10993 = stdlib.gt(v10992, v3562);
            const v10995 = v10993 ? v3562 : v10992;
            v10990 = v10995;
            }
          const v10996 = stdlib.div(v10386, v10990);
          const v11002 = stdlib.sub(v10974, v10996);
          const v11005 = v10973[stdlib.checkedBigNumberify('./index.rsh:338:54:application', stdlib.UInt_max, '1')];
          const v11006 = v10973[stdlib.checkedBigNumberify('./index.rsh:338:54:application', stdlib.UInt_max, '2')];
          const v11007 = [v11002, v11005, v11006];
          const v11008 = stdlib.Array_set(v10439, stdlib.checkedBigNumberify('./index.rsh:338:54:application', stdlib.UInt_max, '1'), v11007);
          sim_r.txns.push({
            kind: 'from',
            to: v4300,
            tok: v3511
            });
          const v11009 = true;
          const v11010 = await txn1.getOutput('Claimant_mintStable', 'v11009', ctc3, v11009);
          
          let v11016;
          if (v10943) {
            v11016 = v3562;
            }
          else {
            const v11018 = stdlib.div(v3560, v3561);
            const v11019 = stdlib.gt(v11018, v3562);
            const v11021 = v11019 ? v3562 : v11018;
            v11016 = v11021;
            }
          const v11022 = stdlib.div(v10386, v11016);
          const v11023 = stdlib.add(v3561, v11022);
          const v11024 = stdlib.add(v3560, v10386);
          const v11029 = stdlib.add(v11024, v10954);
          const v11034 = stdlib.add(v3551, v10986);
          const v26094 = v11034;
          const v26095 = v3552;
          const v26096 = v3554;
          const v26097 = v3555;
          const v26098 = v3563;
          const v26099 = v3557;
          const v26100 = v3558;
          const v26101 = v3559;
          const v26102 = v11029;
          const v26103 = v11023;
          const v26104 = v3562;
          const v26105 = v3556;
          const v26106 = v3564;
          const v26108 = v11008;
          const v26109 = v10421;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v4301], secs: v4303, time: v4302, didSend: v2094, from: v4300 } = txn1;
  switch (v4301[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v4304 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_closeBank0_192': {
      const v5052 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v5800 = v4301[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v6548 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v7296 = v4301[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v8044 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v8792 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v9540 = v4301[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v10288 = v4301[1];
      undefined /* setApiDetails */;
      const v10386 = v10288[stdlib.checkedBigNumberify('./index.rsh:326:9:spread', stdlib.UInt_max, '0')];
      const v10387 = stdlib.mul(v10386, v3564);
      const v10388 = stdlib.div(v10387, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '100'));
      const v10389 = stdlib.add(v10386, v10388);
      const v10421 = stdlib.add(v3572, v10389);
      ;
      const v10422 = v3571[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v10423 = v10422[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v10427 = v10422[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v10428 = v10422[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v10429 = [v10423, v10427, v10428];
      const v10430 = stdlib.Array_set(v3571, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1'), v10429);
      ;
      const v10431 = v10430[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v10432 = v10431[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0')];
      const v10436 = v10431[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '1')];
      const v10437 = v10431[stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '2')];
      const v10438 = [v10432, v10436, v10437];
      const v10439 = stdlib.Array_set(v10430, stdlib.checkedBigNumberify('./index.rsh:118:17:dot', stdlib.UInt_max, '0'), v10438);
      ;
      let v10942;
      const v10943 = stdlib.eq(v3561, stdlib.checkedBigNumberify('./index.rsh:142:23:decimal', stdlib.UInt_max, '0'));
      if (v10943) {
        v10942 = v3562;
        }
      else {
        const v10944 = stdlib.div(v3560, v3561);
        const v10945 = stdlib.gt(v10944, v3562);
        const v10947 = v10945 ? v3562 : v10944;
        v10942 = v10947;
        }
      const v10948 = stdlib.mul(v3561, v10942);
      const v10949 = stdlib.div(v3560, v10948);
      const v10950 = stdlib.ge(v10949, v3557);
      const v10953 = stdlib.mul(v10388, v3558);
      const v10954 = stdlib.div(v10953, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v10955 = stdlib.add(v3560, v10954);
      let v10956;
      if (v10943) {
        v10956 = v3562;
        }
      else {
        const v10958 = stdlib.div(v10955, v3561);
        const v10959 = stdlib.gt(v10958, v3562);
        const v10961 = v10959 ? v3562 : v10958;
        v10956 = v10961;
        }
      const v10962 = stdlib.mul(v3561, v10956);
      const v10963 = stdlib.div(v10955, v10962);
      const v10964 = stdlib.ge(v10963, v3557);
      const v10965 = v10950 ? v10964 : false;
      let v10966;
      if (v10943) {
        v10966 = v3562;
        }
      else {
        const v10968 = stdlib.div(v3560, v3561);
        const v10969 = stdlib.gt(v10968, v3562);
        const v10971 = v10969 ? v3562 : v10968;
        v10966 = v10971;
        }
      const v10972 = stdlib.div(v10386, v10966);
      const v10973 = v10439[stdlib.checkedBigNumberify('./index.rsh:335:91:application', stdlib.UInt_max, '1')];
      const v10974 = v10973[stdlib.checkedBigNumberify('./index.rsh:335:91:application', stdlib.UInt_max, '0')];
      const v10975 = stdlib.le(v10972, v10974);
      const v10976 = v10965 ? v10975 : false;
      const v10985 = stdlib.mul(v10388, v3552);
      const v10986 = stdlib.div(v10985, stdlib.checkedBigNumberify('./index.rsh:172:46:decimal', stdlib.UInt_max, '100'));
      const v10987 = stdlib.add(v10954, v10986);
      const v10988 = stdlib.eq(v10388, v10987);
      const v10989 = v10976 ? v10988 : false;
      stdlib.assert(v10989, {
        at: './index.rsh:333:16:application',
        fs: ['at ./index.rsh:332:23:application call to [unknown function] (defined at: ./index.rsh:332:23:function exp)'],
        msg: null,
        who: 'Claimant_mintStable'
        });
      let v10990;
      if (v10943) {
        v10990 = v3562;
        }
      else {
        const v10992 = stdlib.div(v3560, v3561);
        const v10993 = stdlib.gt(v10992, v3562);
        const v10995 = v10993 ? v3562 : v10992;
        v10990 = v10995;
        }
      const v10996 = stdlib.div(v10386, v10990);
      const v11002 = stdlib.sub(v10974, v10996);
      const v11005 = v10973[stdlib.checkedBigNumberify('./index.rsh:338:54:application', stdlib.UInt_max, '1')];
      const v11006 = v10973[stdlib.checkedBigNumberify('./index.rsh:338:54:application', stdlib.UInt_max, '2')];
      const v11007 = [v11002, v11005, v11006];
      const v11008 = stdlib.Array_set(v10439, stdlib.checkedBigNumberify('./index.rsh:338:54:application', stdlib.UInt_max, '1'), v11007);
      ;
      const v11009 = true;
      const v11010 = await txn1.getOutput('Claimant_mintStable', 'v11009', ctc3, v11009);
      if (v2094) {
        stdlib.protect(ctc10, await interact.out(v10288, v11010), {
          at: './index.rsh:326:10:application',
          fs: ['at ./index.rsh:326:10:application call to [unknown function] (defined at: ./index.rsh:326:10:function exp)', 'at ./index.rsh:339:10:application call to "k" (defined at: ./index.rsh:332:23:function exp)', 'at ./index.rsh:332:23:application call to [unknown function] (defined at: ./index.rsh:332:23:function exp)'],
          msg: 'out',
          who: 'Claimant_mintStable'
          });
        }
      else {
        }
      
      let v11016;
      if (v10943) {
        v11016 = v3562;
        }
      else {
        const v11018 = stdlib.div(v3560, v3561);
        const v11019 = stdlib.gt(v11018, v3562);
        const v11021 = v11019 ? v3562 : v11018;
        v11016 = v11021;
        }
      const v11022 = stdlib.div(v10386, v11016);
      const v11023 = stdlib.add(v3561, v11022);
      const v11024 = stdlib.add(v3560, v10386);
      const v11029 = stdlib.add(v11024, v10954);
      const v11034 = stdlib.add(v3551, v10986);
      const v26094 = v11034;
      const v26095 = v3552;
      const v26096 = v3554;
      const v26097 = v3555;
      const v26098 = v3563;
      const v26099 = v3557;
      const v26100 = v3558;
      const v26101 = v3559;
      const v26102 = v11029;
      const v26103 = v11023;
      const v26104 = v3562;
      const v26105 = v3556;
      const v26106 = v3564;
      const v26108 = v11008;
      const v26109 = v10421;
      return;
      
      break;
      }
    }
  
  
  };
export async function AdminAPI_claimAdminFee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_claimAdminFee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_claimAdminFee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _AdminAPI_claimAdminFee4(ctcTop, interact);}
  };
export async function AdminAPI_closeBank(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_closeBank expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_closeBank expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _AdminAPI_closeBank4(ctcTop, interact);}
  };
export async function AdminAPI_setAdminFee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_setAdminFee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_setAdminFee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _AdminAPI_setAdminFee4(ctcTop, interact);}
  };
export async function AdminAPI_updatePrice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_updatePrice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_updatePrice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _AdminAPI_updatePrice4(ctcTop, interact);}
  };
export async function Claimant_burnReserve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_burnReserve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_burnReserve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Claimant_burnReserve4(ctcTop, interact);}
  };
export async function Claimant_burnStable(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_burnStable expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_burnStable expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Claimant_burnStable4(ctcTop, interact);}
  };
export async function Claimant_mintFirstStable(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_mintFirstStable expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_mintFirstStable expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Claimant_mintFirstStable4(ctcTop, interact);}
  };
export async function Claimant_mintReserve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_mintReserve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_mintReserve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Claimant_mintReserve4(ctcTop, interact);}
  };
export async function Claimant_mintStable(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_mintStable expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_mintStable expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Claimant_mintStable4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`AdminAPI_claimAdminFee()byte`, `AdminAPI_closeBank()byte`, `AdminAPI_setAdminFee(uint64,uint64)byte`, `AdminAPI_updatePrice(uint64)byte`, `Claimant_burnReserve(uint64)byte`, `Claimant_burnStable(uint64)byte`, `Claimant_mintFirstStable(uint64)byte`, `Claimant_mintReserve(uint64)byte`, `Claimant_mintStable(uint64)byte`],
    pure: [`Viewer_read()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`],
    sigs: [`AdminAPI_claimAdminFee()byte`, `AdminAPI_closeBank()byte`, `AdminAPI_setAdminFee(uint64,uint64)byte`, `AdminAPI_updatePrice(uint64)byte`, `Claimant_burnReserve(uint64)byte`, `Claimant_burnStable(uint64)byte`, `Claimant_mintFirstStable(uint64)byte`, `Claimant_mintReserve(uint64)byte`, `Claimant_mintStable(uint64)byte`, `Viewer_read()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`]
    },
  appApproval: `BiAfAGQBCAQDQBAgKDA4BqCNBs7A3MMK97nNqA3ttsTVDc+wovkN2YOligyd3oP+ApSJ4aQG19iP9gmv89yQAkhQWGBocHgFJgMBAQEAACI1ADEYQRJ1KmRJIls1ASVbNQI2GgAXSUEBYiI1BCQ1BkkhDgxAAIBJIQ8MQABLSSEQDEAAL0khEQxAABIhERJEKjX/KTT/UCEHr1BCAUwhEBJENhoBNhoCUDX/gAECNP9QQgE2IQ8SRDYaATX/gAEGNP9QJa9QQgEhSSESDEAAEiESEkQqNf8oNP9QIQevUEIBCCEOEkQ2GgE1/4ABBzT/UCWvUEIA80khEwxAAJpJIRQMQAAxSSEVDEAAFSEVEkQ2GgE1/4ABBDT/UCWvUEIAySEUEkQ2GgE1/4ABAzT/UCWvUEIAtCETEkQ0ASEEEkQpZChkUEk1A1d4CDQDV4gIUDQDV4AIUDQDV6AIUDQDV0gIUDQDV3AIUDQDV0AIUDQDV5AIUDQDV5gIUDQDV2AIUDQDV1gIUDQDV2gIUDQDV1AIUDUHQhEsSSEWDEAAFSEWEkQ2GgE1/4ABBTT/UCWvUEIANoHxgORVEkQ2GgE1/4ABCDT/UCWvUEIAHjYaAhc1BDYaAzYaARdJJAxADaBJIQUMQA0bIQUSRCEENAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSkpKVwAgNf8hCFs1/iEJWzX9IQpbNfwhC1s1+yEGWzX6IRdbNfkhGFs1+CEZWzX3IRpbNfYhG1s19SEcWzX0IR1bNfOBgAFbNfKBiAFbNfGBkAFbNfCBmAFbNe+BoAFbNe5XqCI17YHKAVs17Ek1BTXrgAQ0IGXYNOtQsDTrIlVJIQQMQAn1SSEMDEAGC0mBBwxABNFJJQxAAcwlEkQ061cBCDXgNOAXSTXfNO4LIwo13jTfNN4INd003YgQIjTtVxERNdw07VcAETTcVwAINNxXCAhQNNxXEAFQUDXbNNtXABFJNdpXAAg02lcICFA02lcQAVA021cREVA12TTxIhJJNddBAAc08DXYQgASNPI08QpJNdY08DTWNPANTTXYNN409AsjCjXWNPI01gg11TTXQQAHNPA11EIAEjTVNPEKSTXTNPA00zTwDU011DTXQQAHNPA100IAEjTyNPEKSTXSNPA00jTwDU010zTZVxERSTXSIls10TTeNPkLIwo10DTyNPE02AsKNPUPNNU08TTUCwo09Q8QNN800wo00Q4QNN401jTQCBIQRDTXQQAHNPA1z0IAEjTyNPEKSTXONPA0zjTwDU01zzTfNM8KNc6xIrIBNM6yEiEEshAxALIUNPuyEbOACQAAAAAAACsBAbAoNQc010EABzTwNc1CABI08jTxCkk1zDTwNMw08A1NNc00/zT+NP00/DT7NPo00Ag0+TT4NPc07zT1NPQ08zTyNN8INNYINPE03zTNCgg08DT2NO4yBjTZVwARNNE0zgkWNNJXCAhQNNJXEAFQUDTsNN0IQg17SDTrVwEINeA04BdJNd807gsjCjXeNN803gg13TTdiA5YNO1XERE13DTtVwARNNxXAAg03FcICFA03FcQAVBQNds021cAEUk12lcACDTaVwgIUDTaVxABUDTbVxERUDXZNN409AsjCjXYNPI02Ag11zTxIhJJNdVBAAc08DXWQgASNNc08QpJNdQ08DTUNPANTTXWNPMiEjXTNNVBAAc08DXSQgASNPI08QpJNdE08DTRNPANTTXSNNM08jTxNNILCSISEUEABzT3NdRCAFo01UEABzTwNdFCABI08jTxCkk10DTwNNA08A1NNdE01UEABzTwNdBCABI08jTxCkk1zzTwNM808A1NNdA09zTyNPE00AsJNPMKNPI08TTRCwk08wo09w1NNdQ02VcAEUk10SJbNdA03jT5CyMKNc801zTxNNYLCjT4DjTxNO8METTfNNQKNNAOEDTeNNg0zwgSEEQ01UEABzTwNc1CABI08jTxCkk1zDTwNMw08A1NNc000zTyNPE0zQsJIhIRQQAHNPc1zkIAWjTVQQAHNPA1zEIAEjTyNPEKSTXLNPA0yzTwDU01zDTVQQAHNPA1y0IAEjTyNPEKSTXKNPA0yjTwDU01yzT3NPI08TTLCwk08wo08jTxNMwLCTTzCjT3DU01zjTfNM4KNcyxIrIBNMyyEiEEshAxALIUNPyyEbOACQAAAAAAACebAbAoNQc01UEABzTwNcpCABI08jTxCkk1yTTwNMk08A1NNco00zTyNPE0ygsJIhIRQQAHNPc1y0IAWjTVQQAHNPA1yUIAEjTyNPEKSTXINPA0yDTwDU01yTTVQQAHNPA1yEIAEjTyNPEKSTXHNPA0xzTwDU01yDT3NPI08TTICwk08wo08jTxNMkLCTTzCjT3DU01yzT/NP40/TT8NPs0+jTPCDT5NPg09zTvNPU09DTzNN80ywoINPI03wg02Ag08TTwNPY07jIGNNA0zAkWNNFXCAhQNNFXEAFQNNlXERFQNOw03QhCCnxINOtXAQg14DTgF0k13zTuCyMKNd403zTeCDXdNN2IC1k07VcRETXcNO1XABE03FcACDTcVwgIUDTcVxABUFA12zTbVwARSTXaVwAINNpXCAhQNNpXEAFQNNtXERFQNdk08SISSTXYQQAHNPA110IAEjTyNPEKSTXWNPA01jTwDU011zTZVxERSTXWIls11TTeNPQLIwo11DTeNPkLIwo10zTYNN801wo01Q4QNN401DTTCBIQRDTfNPAKNdKxIrIBNNKyEiEEshAxALIUNPuyEbOACQAAAAAAACQpAbAoNQc0/zT+NP00/DT7NPo00wg0+TT4NPc07zT1NPQ08zTyNN8INNQINPE00gg08DT2NO4yBjTZVwARNNU00gkWNNZXCAhQNNZXEAFQUDTsNN0IQglJSSEeDEABnEg061cBCDXgNOAXNd807VcRETXeNO1XABE03iJbNN8IFjTeVwgIUDTeVxABUFA13TTfNPuICiE03VcAETXcNPEiEkk12kEABzTwNdtCABI08jTxCkk12TTwNNk08A1NNds03zTbCkk12TTuCyMKNdg02kEABzTwNddCABI08jTxCkk11jTwNNY08A1NNdc07DTZDzTYSTT0CyMKNN801wo07gsjCjT5CyMKCBIQRDTZNNgJNdaxIrIBNNayCCSyEDEAsgezgAkAAAAAAAAg7AGwKDUHNNpBAAc08DXVQgASNPI08QpJNdQ08DTUNPANTTXVNNpBAAc08DXUQgASNPI08QpJNdM08DTTNPANTTXUNNpBAAc08DXTQgASNPI08QpJNdI08DTSNPANTTXTNP80/jT9NPw0+zT6NN800wo07gsjCjT5CyMKCDT5NPg09zTvNPU09DTzNPI03zTVCgk03zTUCjTuCyMKNPQLIwoINPE03wk08DT2NO4yBjTcVwAINNxXCAhQNNxXEAFQNN1XERFQNOw01glCB6ZINOtXAQg14DTgFzXfNO1XERE13jTtVwARNN5XAAg03lcICFA03lcQAVBQNd003VcAETXcNN80/IgIgTTzIhI12jTxIhJJNdhBAAc08DXZQgASNPI08QpJNdc08DTXNPANTTXZNNo08jTxNNkLCSISEUEABzT3NdtCAFo02EEABzTwNddCABI08jTxCkk11jTwNNY08A1NNdc02EEABzTwNdZCABI08jTxCkk11TTwNNU08A1NNdY09zTyNPE01gsJNPMKNPI08TTXCwk08wo09w1NNds03zTbCkk11zTuCyMKNdY02EEABzTwNdVCABI08jTxCkk11DTwNNQ08A1NNdU02EEABzTwNdNCABI08jTxCkk10jTwNNI08A1NNdM02jTyNPE00wsJIhIRQQAHNPc11EIAWjTYQQAHNPA10kIAEjTyNPEKSTXRNPA00TTwDU010jTYQQAHNPA10UIAEjTyNPEKSTXQNPA00DTwDU010TT3NPI08TTRCwk08wo08jTxNNILCTTzCjT3DU011DTWNPQLIwo10jTWNPkLIwo10TTyNPE01QsKNPUPNN801AoiDRA07DTXDxA01jTSNNEIEhBENNc01gk10LEisgE00LIIJLIQMQCyB7OACQAAAAAAAB3GAbAoNQc0/zT+NP00/DT7NPo00Qg0+TT4NPc07zT1NPQ08zTfCTTyNNcJNNIINPE08DT2NO4yBjTcIls03wgWNNxXCAhQNNxXEAFQNN1XERFQNOw00AlCBWZJgQIMQAE7SSEFDEAAjkg061cBCDXgNO1XERE13zTtVwARNN9XAAg031cICFA031cQAVBQNd403lcAETXdNOAXSTXcIg0xADT/EhBEgAkAAAAAAAAabAGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NO809TT0NPM08jTxNNxJNO4yBjTdVwAINN1XCAhQNN1XEAFQNN5XERFQNOxCBMpINOtXARA14DTtVxERNd807VcAETTfVwAINN9XCAhQNN9XEAFQUDXeNN5XABE13TTgIls13DTgJVs12zTcNNsIIxJEsSKyATT6sggkshA0/7IHs4AJAAAAAAAAF3IBsCg1BzT/NP40/TT8NPsiNNw0+DT3NPY09TTbNPM08jTxNPA07zTuMgY03VcACDTdVwgIUDTdVxABUDTeVxERUDTsNPoJQgQkSSQMQACiSDTtVxERNeA07VcAETTgVwAINOBXCAhQNOBXEAFQUDXfNN9XABFJNd5XAAg03lcICFA03lcQAVA031cREVA13TEANP8SNPEiEhA08yISEDTdVxERIls0/RIQNN1XABEiWzT+EhBEgAkAAAAAAAAUdgGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTxNPA07zTuMgY03TTsQgN8SDTtVxERNeA07VcAETTgVwAINOBXCAhQNOBXEAFQUDXfNN9XABE13jEANP8SRLEisgE0+rIIJLIQNP+yB7OACQAAAAAAABFuAbAoNQc0/zT+NP00/DT7IjT5NPg09zT2NPU09DTzNPI08TTwNO807jIGNN5XAAg03lcICFA03lcQAVA031cREVA07DT6CUIC6yQSRCQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lXACA1/yEXWzX+gASai5F0sDT/MQASRDT/NAMhGls0AyEbWzQDIRxbNAMhHVsiNAMhCVs0AyEGWzQDIRhbNAMhGVs0AyELWzQDIQpbIiIiNP5JNAMhCFsyBjQDV4AiIkICbUghDYgDZSI0ARJENARJIhJMNAISEURJNQVJSkpKSiJbNf8lWzX+IQdbNf2BGFs1/CEIWzX7IQlbNfohCls1+SELWzX4V0CwNfdX8LA19oAEv/eCXTT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlA0+BZQNPdQNPZQsIERr0k19UlQNfQ0/jT9CCMSRDT3IQZbSTXzIg1ENPYhBltJNfIiDUSB////////////ASQJNfE08zTxEkQ08jTxEkQhDYgCqLEisgEhBbIQNPOyIiEMsiM091dICLIlNPdXICCyJjT3V1Bgsic091cAILIoMgqyKbO0PDXwgAgAAAAAAAANkzTwFlCwNPA17zT0VwARNe408xY07lcICFA07lcQAVA09FcREVBJNe1XABFJNexXAAg08xZQNOxXEAFQNO1XERFQSTXrVwARSTXqVwAINOpXCAhQKVA061cREVA16SENiAIHsSKyASEFshA08rIiIQyyIzT2V0gIsiU09lcgILImNPZXUGCyJzT2VwAgsigyCrIps7Q8NeiACAAAAAAAAA22NOgWULA06Ek15zTvFiJbE0Q06VcRETXmNOlXABE08hY05lcICFA05lcQAVBQSTXlVxERNeQ05VcAETTkVwAINPIWUDTkVxABUFBJNeNXERE14jTjVwARNOJXAAg04lcICFApUFBJNeFXEREiWzTyEkQ04VcAESJbNPMSRDEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlA08xZQNPIWUDTvFlA05xZQNOFQKUsBVwB/ZyhLAVd/I2dIJDUBMgY1AkIArDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNexJNes07BZQNO0WUDTuFlA07xZQNPAWUDTxFlA08hZQNPMWUDT0FlA09RZQNPYWUDT3FlA0+BZQNPkWUDT6FlA0+xZQNPwWUDT+UDT/FlApSwFXAH9nKEsBV39TZ0ghBDUBMgY1AkIAHDEZIR4SRLEisgEisggkshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjE0EkQhBTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiQINQA4BzIKEkQ4ECQSRDgIEkSJNABJSkkkCDUAOBQyChJEOBAhBBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 210,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:99:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:453:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:118:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Admin": Admin,
  "AdminAPI_claimAdminFee": AdminAPI_claimAdminFee,
  "AdminAPI_closeBank": AdminAPI_closeBank,
  "AdminAPI_setAdminFee": AdminAPI_setAdminFee,
  "AdminAPI_updatePrice": AdminAPI_updatePrice,
  "Claimant_burnReserve": Claimant_burnReserve,
  "Claimant_burnStable": Claimant_burnStable,
  "Claimant_mintFirstStable": Claimant_mintFirstStable,
  "Claimant_mintReserve": Claimant_mintReserve,
  "Claimant_mintStable": Claimant_mintStable
  };
export const _APIs = {
  AdminAPI: {
    claimAdminFee: AdminAPI_claimAdminFee,
    closeBank: AdminAPI_closeBank,
    setAdminFee: AdminAPI_setAdminFee,
    updatePrice: AdminAPI_updatePrice
    },
  Claimant: {
    burnReserve: Claimant_burnReserve,
    burnStable: Claimant_burnStable,
    mintFirstStable: Claimant_mintFirstStable,
    mintReserve: Claimant_mintReserve,
    mintStable: Claimant_mintStable
    }
  };
