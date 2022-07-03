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
              const [v3080, v3081, v3082, v3083, v3084, v3085, v3086, v3087, v3088, v3110, v3146, v3174] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208] = svs;
              return (await ((async () => {
                
                const v3228 = [v3195, v3197, v3196, v3200, v3189, v3194, v3188, v3198, v3199, v3192, v3191, v3193, v3190];
                
                return v3228;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc5],
      4: [ctc0, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]
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
    decimals: ctc0,
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
  
  
  const v3030 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v3031 = [v3030, v3030];
  const v3037 = stdlib.protect(ctc5, await interact.setInitialParam(), {
    at: './index.rsh:52:44:application',
    fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:17:function exp)'],
    msg: 'setInitialParam',
    who: 'Admin'
    });
  const v3038 = v3037.adminFeeRatio;
  const v3039 = v3037.initialBaseCurrencyPrice;
  const v3040 = v3037.maxReserveRatio;
  const v3041 = v3037.minRCPrice;
  const v3042 = v3037.minReserveRatio;
  const v3043 = v3037.protocolFeeRatio;
  const v3044 = v3037.reserveCoinParam;
  const v3045 = v3037.stableCoinParam;
  const v3046 = v3037.thresholdStableCoin;
  const v3047 = v3037.totalFee;
  const v3051 = v3044.supply;
  const v3057 = v3045.supply;
  const v3070 = stdlib.add(v3038, v3043);
  const v3071 = stdlib.eq(v3070, stdlib.checkedBigNumberify('./index.rsh:53:48:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v3071, {
    at: './index.rsh:53:11:application',
    fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3073 = stdlib.gt(v3051, stdlib.checkedBigNumberify('./index.rsh:54:38:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3073, {
    at: './index.rsh:54:11:application',
    fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3075 = stdlib.gt(v3057, stdlib.checkedBigNumberify('./index.rsh:55:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3075, {
    at: './index.rsh:55:11:application',
    fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3077 = stdlib.eq(v3051, stdlib.UInt_max);
  stdlib.assert(v3077, {
    at: './index.rsh:56:11:application',
    fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v3079 = stdlib.eq(v3057, stdlib.UInt_max);
  stdlib.assert(v3079, {
    at: './index.rsh:57:11:application',
    fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:17:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3047, v3038, v3043, v3042, v3040, v3039, v3041, v3046, v3044, v3045],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:61:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3081, v3082, v3083, v3084, v3085, v3086, v3087, v3088, v3089, v3090], secs: v3092, time: v3091, didSend: v78, from: v3080 } = txn1;
      
      ;
      const v3095 = v3089.supply;
      const v3097 = v3090.supply;
      const v3103 = v3089.decimals;
      const v3104 = v3089.metadata;
      const v3105 = v3089.name;
      const v3107 = v3089.symbol;
      const v3108 = v3089.url;
      const v3109 = stdlib.simTokenNew(sim_r, v3105, v3107, v3108, v3104, v3095, v3103, getSimTokCtr());
      const v3110 = await txn1.getOutput('internal', 'v3109', ctc6, v3109);
      const v3120 = v3031[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
      const v3122 = v3120[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '1')];
      const v3123 = v3120[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '2')];
      const v3124 = [v3095, v3122, v3123];
      const v3125 = stdlib.Array_set(v3031, stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0'), v3124);
      const v3127 = v3125[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
      const v3128 = v3127[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
      const v3130 = v3127[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '2')];
      const v3131 = [v3128, v3095, v3130];
      const v3132 = stdlib.Array_set(v3125, stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0'), v3131);
      const v3133 = v3132[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
      const v3134 = v3133[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
      const v3135 = v3133[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '1')];
      const v3137 = [v3134, v3135, false];
      const v3138 = stdlib.Array_set(v3132, stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0'), v3137);
      const v3139 = v3090.decimals;
      const v3140 = v3090.metadata;
      const v3141 = v3090.name;
      const v3143 = v3090.symbol;
      const v3144 = v3090.url;
      const v3145 = stdlib.simTokenNew(sim_r, v3141, v3143, v3144, v3140, v3097, v3139, getSimTokCtr());
      const v3146 = await txn1.getOutput('internal', 'v3145', ctc6, v3145);
      const v3156 = v3138[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
      const v3158 = v3156[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
      const v3159 = v3156[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '2')];
      const v3160 = [v3097, v3158, v3159];
      const v3161 = stdlib.Array_set(v3138, stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1'), v3160);
      const v3163 = v3161[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
      const v3164 = v3163[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '0')];
      const v3166 = v3163[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '2')];
      const v3167 = [v3164, v3097, v3166];
      const v3168 = stdlib.Array_set(v3161, stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1'), v3167);
      const v3169 = v3168[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
      const v3170 = v3169[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '0')];
      const v3171 = v3169[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
      const v3173 = [v3170, v3171, false];
      const v3174 = stdlib.Array_set(v3168, stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1'), v3173);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v3081, v3082, v3083, v3084, v3085, v3086, v3087, v3088, v3089, v3090], secs: v3092, time: v3091, didSend: v78, from: v3080 } = txn1;
  ;
  const v3093 = stdlib.add(v3082, v3083);
  const v3094 = stdlib.eq(v3093, stdlib.checkedBigNumberify('./index.rsh:74:47:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v3094, {
    at: './index.rsh:74:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3095 = v3089.supply;
  const v3096 = stdlib.gt(v3095, stdlib.checkedBigNumberify('./index.rsh:75:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3096, {
    at: './index.rsh:75:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3097 = v3090.supply;
  const v3098 = stdlib.gt(v3097, stdlib.checkedBigNumberify('./index.rsh:76:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3098, {
    at: './index.rsh:76:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3100 = stdlib.eq(v3095, stdlib.UInt_max);
  stdlib.assert(v3100, {
    at: './index.rsh:78:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3102 = stdlib.eq(v3097, stdlib.UInt_max);
  stdlib.assert(v3102, {
    at: './index.rsh:79:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3103 = v3089.decimals;
  const v3104 = v3089.metadata;
  const v3105 = v3089.name;
  const v3107 = v3089.symbol;
  const v3108 = v3089.url;
  const v3109 = undefined /* TokenNew */;
  const v3110 = await txn1.getOutput('internal', 'v3109', ctc6, v3109);
  const v3120 = v3031[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
  const v3122 = v3120[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '1')];
  const v3123 = v3120[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '2')];
  const v3124 = [v3095, v3122, v3123];
  const v3125 = stdlib.Array_set(v3031, stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0'), v3124);
  const v3127 = v3125[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
  const v3128 = v3127[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
  const v3130 = v3127[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '2')];
  const v3131 = [v3128, v3095, v3130];
  const v3132 = stdlib.Array_set(v3125, stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0'), v3131);
  const v3133 = v3132[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
  const v3134 = v3133[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0')];
  const v3135 = v3133[stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '1')];
  const v3137 = [v3134, v3135, false];
  const v3138 = stdlib.Array_set(v3132, stdlib.checkedBigNumberify('./index.rsh:84:37:application', stdlib.UInt_max, '0'), v3137);
  const v3139 = v3090.decimals;
  const v3140 = v3090.metadata;
  const v3141 = v3090.name;
  const v3143 = v3090.symbol;
  const v3144 = v3090.url;
  const v3145 = undefined /* TokenNew */;
  const v3146 = await txn1.getOutput('internal', 'v3145', ctc6, v3145);
  const v3147 = [v3110];
  const v9591 = v3147[stdlib.checkedBigNumberify('reach standard library:154:21:application', stdlib.UInt_max, '0')];
  const v9595 = stdlib.tokenEq(v3146, v9591);
  const v3155 = v9595 ? false : true;
  stdlib.assert(v3155, {
    at: './index.rsh:86:36:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  const v3156 = v3138[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
  const v3158 = v3156[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
  const v3159 = v3156[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '2')];
  const v3160 = [v3097, v3158, v3159];
  const v3161 = stdlib.Array_set(v3138, stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1'), v3160);
  const v3163 = v3161[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
  const v3164 = v3163[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '0')];
  const v3166 = v3163[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '2')];
  const v3167 = [v3164, v3097, v3166];
  const v3168 = stdlib.Array_set(v3161, stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1'), v3167);
  const v3169 = v3168[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
  const v3170 = v3169[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '0')];
  const v3171 = v3169[stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1')];
  const v3173 = [v3170, v3171, false];
  const v3174 = stdlib.Array_set(v3168, stdlib.checkedBigNumberify('./index.rsh:86:36:application', stdlib.UInt_max, '1'), v3173);
  const v3175 = v3174[stdlib.checkedBigNumberify('./index.rsh:88:18:application', stdlib.UInt_max, '1')];
  const v3176 = v3175[stdlib.checkedBigNumberify('./index.rsh:88:18:application', stdlib.UInt_max, '0')];
  const v3177 = stdlib.eq(v3176, v3097);
  stdlib.assert(v3177, {
    at: './index.rsh:88:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v3178 = v3174[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v3179 = v3178[stdlib.checkedBigNumberify('./index.rsh:89:18:application', stdlib.UInt_max, '0')];
  const v3180 = stdlib.eq(v3179, v3095);
  stdlib.assert(v3180, {
    at: './index.rsh:89:10:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v3080, v3081, v3082, v3083, v3084, v3085, v3086, v3087, v3088, v3110, v3146, v3174],
    evt_cnt: 0,
    funcNum: 1,
    lct: v3091,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v3183, time: v3182, didSend: v137, from: v3181 } = txn2;
      
      ;
      
      const v3186 = stdlib.div(v3086, stdlib.checkedBigNumberify('./index.rsh:116:44:decimal', stdlib.UInt_max, '1000000'));
      const v3188 = stdlib.checkedBigNumberify('./index.rsh:115:19:decimal', stdlib.UInt_max, '0');
      const v3189 = v3082;
      const v3190 = v3085;
      const v3191 = v3087;
      const v3192 = v3088;
      const v3193 = v3084;
      const v3194 = v3083;
      const v3195 = stdlib.checkedBigNumberify('./index.rsh:109:19:decimal', stdlib.UInt_max, '0');
      const v3196 = stdlib.checkedBigNumberify('./index.rsh:111:19:decimal', stdlib.UInt_max, '0');
      const v3197 = stdlib.checkedBigNumberify('./index.rsh:110:19:decimal', stdlib.UInt_max, '0');
      const v3198 = v3186;
      const v3199 = v3186;
      const v3200 = v3081;
      const v3201 = v3182;
      const v3207 = v3174;
      const v3208 = stdlib.checkedBigNumberify('./index.rsh:38:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
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
    tys: [ctc13, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc6, ctc6, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v3183, time: v3182, didSend: v137, from: v3181 } = txn2;
  ;
  const v3184 = stdlib.addressEq(v3080, v3181);
  stdlib.assert(v3184, {
    at: './index.rsh:93:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc7, await interact.ready(), {
    at: './index.rsh:94:23:application',
    fs: ['at ./index.rsh:94:23:application call to [unknown function] (defined at: ./index.rsh:94:23:function exp)', 'at ./index.rsh:94:23:application call to "liftedInteract" (defined at: ./index.rsh:94:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  const v3186 = stdlib.div(v3086, stdlib.checkedBigNumberify('./index.rsh:116:44:decimal', stdlib.UInt_max, '1000000'));
  let v3188 = stdlib.checkedBigNumberify('./index.rsh:115:19:decimal', stdlib.UInt_max, '0');
  let v3189 = v3082;
  let v3190 = v3085;
  let v3191 = v3087;
  let v3192 = v3088;
  let v3193 = v3084;
  let v3194 = v3083;
  let v3195 = stdlib.checkedBigNumberify('./index.rsh:109:19:decimal', stdlib.UInt_max, '0');
  let v3196 = stdlib.checkedBigNumberify('./index.rsh:111:19:decimal', stdlib.UInt_max, '0');
  let v3197 = stdlib.checkedBigNumberify('./index.rsh:110:19:decimal', stdlib.UInt_max, '0');
  let v3198 = v3186;
  let v3199 = v3186;
  let v3200 = v3081;
  let v3201 = v3182;
  let v3207 = v3174;
  let v3208 = stdlib.checkedBigNumberify('./index.rsh:38:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
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
    const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn3;
    switch (v3893[0]) {
      case 'AdminAPI_claimAdminFee0_192': {
        const v3896 = v3893[1];
        undefined /* setApiDetails */;
        ;
        const v4020 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v4021 = v4020[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v4025 = v4020[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v4026 = v4020[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v4027 = [v4021, v4025, v4026];
        const v4028 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v4027);
        ;
        const v4029 = v4028[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v4030 = v4029[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v4034 = v4029[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v4035 = v4029[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v4036 = [v4030, v4034, v4035];
        const v4037 = stdlib.Array_set(v4028, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v4036);
        ;
        const v4039 = stdlib.addressEq(v3892, v3080);
        stdlib.assert(v4039, {
          at: './index.rsh:232:16:application',
          fs: ['at ./index.rsh:231:11:application call to [unknown function] (defined at: ./index.rsh:231:11:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4043 = stdlib.sub(v3208, v3188);
        ;
        const v4044 = true;
        await txn3.getOutput('AdminAPI_claimAdminFee', 'v4044', ctc12, v4044);
        const cv3188 = stdlib.checkedBigNumberify('./index.rsh:241:11:decimal', stdlib.UInt_max, '0');
        const cv3189 = v3189;
        const cv3190 = v3190;
        const cv3191 = v3191;
        const cv3192 = v3192;
        const cv3193 = v3193;
        const cv3194 = v3194;
        const cv3195 = v3195;
        const cv3196 = v3196;
        const cv3197 = v3197;
        const cv3198 = v3198;
        const cv3199 = v3199;
        const cv3200 = v3200;
        const cv3201 = v3894;
        const cv3207 = v4037;
        const cv3208 = v4043;
        
        v3188 = cv3188;
        v3189 = cv3189;
        v3190 = cv3190;
        v3191 = cv3191;
        v3192 = cv3192;
        v3193 = cv3193;
        v3194 = cv3194;
        v3195 = cv3195;
        v3196 = cv3196;
        v3197 = cv3197;
        v3198 = cv3198;
        v3199 = cv3199;
        v3200 = cv3200;
        v3201 = cv3201;
        v3207 = cv3207;
        v3208 = cv3208;
        
        continue;
        break;
        }
      case 'AdminAPI_setAdminFee0_192': {
        const v4606 = v3893[1];
        undefined /* setApiDetails */;
        ;
        const v4730 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v4731 = v4730[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v4735 = v4730[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v4736 = v4730[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v4737 = [v4731, v4735, v4736];
        const v4738 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v4737);
        ;
        const v4739 = v4738[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v4740 = v4739[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v4744 = v4739[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v4745 = v4739[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v4746 = [v4740, v4744, v4745];
        const v4747 = stdlib.Array_set(v4738, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v4746);
        ;
        const v4762 = v4606[stdlib.checkedBigNumberify('./index.rsh:207:9:spread', stdlib.UInt_max, '0')];
        const v4763 = v4606[stdlib.checkedBigNumberify('./index.rsh:207:9:spread', stdlib.UInt_max, '1')];
        const v4764 = stdlib.add(v4762, v4763);
        const v4765 = stdlib.eq(v4764, stdlib.checkedBigNumberify('./index.rsh:211:49:decimal', stdlib.UInt_max, '100'));
        stdlib.assert(v4765, {
          at: './index.rsh:211:16:application',
          fs: ['at ./index.rsh:210:40:application call to [unknown function] (defined at: ./index.rsh:210:40:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4769 = stdlib.sub(v3208, v3188);
        ;
        const v4770 = true;
        await txn3.getOutput('AdminAPI_setAdminFee', 'v4770', ctc12, v4770);
        const cv3188 = stdlib.checkedBigNumberify('./index.rsh:220:11:decimal', stdlib.UInt_max, '0');
        const cv3189 = v4762;
        const cv3190 = v3190;
        const cv3191 = v3191;
        const cv3192 = v3192;
        const cv3193 = v3193;
        const cv3194 = v4763;
        const cv3195 = v3195;
        const cv3196 = v3196;
        const cv3197 = v3197;
        const cv3198 = v3198;
        const cv3199 = v3199;
        const cv3200 = v3200;
        const cv3201 = v3894;
        const cv3207 = v4747;
        const cv3208 = v4769;
        
        v3188 = cv3188;
        v3189 = cv3189;
        v3190 = cv3190;
        v3191 = cv3191;
        v3192 = cv3192;
        v3193 = cv3193;
        v3194 = cv3194;
        v3195 = cv3195;
        v3196 = cv3196;
        v3197 = cv3197;
        v3198 = cv3198;
        v3199 = cv3199;
        v3200 = cv3200;
        v3201 = cv3201;
        v3207 = cv3207;
        v3208 = cv3208;
        
        continue;
        break;
        }
      case 'AdminAPI_updatePrice0_192': {
        const v5316 = v3893[1];
        undefined /* setApiDetails */;
        ;
        const v5440 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v5441 = v5440[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v5445 = v5440[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v5446 = v5440[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v5447 = [v5441, v5445, v5446];
        const v5448 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v5447);
        ;
        const v5449 = v5448[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v5450 = v5449[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v5454 = v5449[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v5455 = v5449[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v5456 = [v5450, v5454, v5455];
        const v5457 = stdlib.Array_set(v5448, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v5456);
        ;
        const v5490 = v5316[stdlib.checkedBigNumberify('./index.rsh:187:9:spread', stdlib.UInt_max, '0')];
        const v5491 = stdlib.gt(v5490, stdlib.checkedBigNumberify('./index.rsh:191:25:decimal', stdlib.UInt_max, '0'));
        const v5492 = stdlib.addressEq(v3892, v3080);
        const v5493 = v5491 ? v5492 : false;
        stdlib.assert(v5493, {
          at: './index.rsh:191:16:application',
          fs: ['at ./index.rsh:190:18:application call to [unknown function] (defined at: ./index.rsh:190:18:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v5494 = true;
        await txn3.getOutput('AdminAPI_updatePrice', 'v5494', ctc12, v5494);
        const cv3188 = v3188;
        const cv3189 = v3189;
        const cv3190 = v3190;
        const cv3191 = v3191;
        const cv3192 = v3199;
        const cv3193 = v3193;
        const cv3194 = v3194;
        const cv3195 = v3195;
        const cv3196 = v3196;
        const cv3197 = v3197;
        const cv3198 = v5490;
        const cv3199 = v5490;
        const cv3200 = v3200;
        const cv3201 = v3894;
        const cv3207 = v5457;
        const cv3208 = v3208;
        
        v3188 = cv3188;
        v3189 = cv3189;
        v3190 = cv3190;
        v3191 = cv3191;
        v3192 = cv3192;
        v3193 = cv3193;
        v3194 = cv3194;
        v3195 = cv3195;
        v3196 = cv3196;
        v3197 = cv3197;
        v3198 = cv3198;
        v3199 = cv3199;
        v3200 = cv3200;
        v3201 = cv3201;
        v3207 = cv3207;
        v3208 = cv3208;
        
        continue;
        break;
        }
      case 'Claimant_burnReserve0_192': {
        const v6026 = v3893[1];
        undefined /* setApiDetails */;
        const v6064 = v6026[stdlib.checkedBigNumberify('./index.rsh:351:9:spread', stdlib.UInt_max, '0')];
        ;
        const v6150 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v6151 = v6150[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v6155 = v6150[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v6156 = v6150[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v6157 = [v6151, v6155, v6156];
        const v6158 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v6157);
        ;
        const v6159 = v6158[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v6160 = v6159[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v6161 = stdlib.add(v6160, v6064);
        const v6164 = v6159[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v6165 = v6159[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v6166 = [v6161, v6164, v6165];
        const v6167 = stdlib.Array_set(v6158, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v6166);
        ;
        let v6214;
        const v6215 = stdlib.eq(v3195, stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0'));
        let v6216;
        const v6217 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
        if (v6217) {
          v6216 = v3198;
          }
        else {
          const v6218 = stdlib.div(v3196, v3197);
          const v6219 = stdlib.gt(v6218, v3198);
          const v6221 = v6219 ? v3198 : v6218;
          v6216 = v6221;
          }
        const v6222 = stdlib.mul(v3197, v6216);
        const v6223 = stdlib.sub(v3196, v6222);
        const v6224 = stdlib.eq(v6223, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
        const v6225 = v6215 ? true : v6224;
        if (v6225) {
          v6214 = v3191;
          }
        else {
          let v6226;
          if (v6217) {
            v6226 = v3198;
            }
          else {
            const v6228 = stdlib.div(v3196, v3197);
            const v6229 = stdlib.gt(v6228, v3198);
            const v6231 = v6229 ? v3198 : v6228;
            v6226 = v6231;
            }
          const v6232 = stdlib.mul(v3197, v6226);
          const v6233 = stdlib.sub(v3196, v6232);
          const v6234 = stdlib.div(v6233, v3195);
          const v6235 = stdlib.gt(v6234, v3191);
          let v6236;
          if (v6217) {
            v6236 = v3198;
            }
          else {
            const v6238 = stdlib.div(v3196, v3197);
            const v6239 = stdlib.gt(v6238, v3198);
            const v6241 = v6239 ? v3198 : v6238;
            v6236 = v6241;
            }
          const v6242 = stdlib.mul(v3197, v6236);
          const v6243 = stdlib.sub(v3196, v6242);
          const v6244 = stdlib.div(v6243, v3195);
          const v6245 = v6235 ? v6244 : v3191;
          v6214 = v6245;
          }
        const v6246 = stdlib.div(v6064, v6214);
        const v6247 = stdlib.mul(v6246, v3200);
        const v6248 = stdlib.div(v6247, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
        let v6249;
        if (v6217) {
          v6249 = v3198;
          }
        else {
          const v6251 = stdlib.div(v3196, v3197);
          const v6252 = stdlib.gt(v6251, v3198);
          const v6254 = v6252 ? v3198 : v6251;
          v6249 = v6254;
          }
        const v6255 = stdlib.mul(v3197, v6249);
        const v6256 = stdlib.div(v3196, v6255);
        const v6257 = stdlib.ge(v6256, v3193);
        let v6258;
        let v6260;
        if (v6217) {
          v6260 = v3198;
          }
        else {
          const v6262 = stdlib.div(v3196, v3197);
          const v6263 = stdlib.gt(v6262, v3198);
          const v6265 = v6263 ? v3198 : v6262;
          v6260 = v6265;
          }
        const v6266 = stdlib.mul(v3197, v6260);
        const v6267 = stdlib.sub(v3196, v6266);
        const v6268 = stdlib.eq(v6267, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
        const v6269 = v6215 ? true : v6268;
        if (v6269) {
          v6258 = v3191;
          }
        else {
          let v6270;
          if (v6217) {
            v6270 = v3198;
            }
          else {
            const v6272 = stdlib.div(v3196, v3197);
            const v6273 = stdlib.gt(v6272, v3198);
            const v6275 = v6273 ? v3198 : v6272;
            v6270 = v6275;
            }
          const v6276 = stdlib.mul(v3197, v6270);
          const v6277 = stdlib.sub(v3196, v6276);
          const v6278 = stdlib.div(v6277, v3195);
          const v6279 = stdlib.gt(v6278, v3191);
          let v6280;
          if (v6217) {
            v6280 = v3198;
            }
          else {
            const v6282 = stdlib.div(v3196, v3197);
            const v6283 = stdlib.gt(v6282, v3198);
            const v6285 = v6283 ? v3198 : v6282;
            v6280 = v6285;
            }
          const v6286 = stdlib.mul(v3197, v6280);
          const v6287 = stdlib.sub(v3196, v6286);
          const v6288 = stdlib.div(v6287, v3195);
          const v6289 = v6279 ? v6288 : v3191;
          v6258 = v6289;
          }
        const v6290 = stdlib.div(v6064, v6258);
        const v6291 = stdlib.gt(v6290, stdlib.checkedBigNumberify('./index.rsh:362:115:decimal', stdlib.UInt_max, '0'));
        const v6292 = v6257 ? v6291 : false;
        const v6294 = stdlib.ge(v3208, v6246);
        const v6295 = v6292 ? v6294 : false;
        const v6300 = stdlib.mul(v6248, v3194);
        const v6301 = stdlib.div(v6300, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v6304 = stdlib.mul(v6248, v3189);
        const v6305 = stdlib.div(v6304, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v6306 = stdlib.add(v6301, v6305);
        const v6307 = stdlib.eq(v6248, v6306);
        const v6308 = v6295 ? v6307 : false;
        stdlib.assert(v6308, {
          at: './index.rsh:361:14:application',
          fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6309 = stdlib.sub(v6246, v6248);
        const v6313 = stdlib.sub(v3208, v6309);
        ;
        const v6314 = true;
        await txn3.getOutput('Claimant_burnReserve', 'v6314', ctc12, v6314);
        const v6321 = stdlib.sub(v3195, v6064);
        const v6322 = stdlib.sub(v3196, v6246);
        const v6327 = stdlib.add(v6322, v6301);
        const v6332 = stdlib.add(v3188, v6305);
        const cv3188 = v6332;
        const cv3189 = v3189;
        const cv3190 = v3190;
        const cv3191 = v3191;
        const cv3192 = v3199;
        const cv3193 = v3193;
        const cv3194 = v3194;
        const cv3195 = v6321;
        const cv3196 = v6327;
        const cv3197 = v3197;
        const cv3198 = v3198;
        const cv3199 = v3192;
        const cv3200 = v3200;
        const cv3201 = v3894;
        const cv3207 = v6167;
        const cv3208 = v6313;
        
        v3188 = cv3188;
        v3189 = cv3189;
        v3190 = cv3190;
        v3191 = cv3191;
        v3192 = cv3192;
        v3193 = cv3193;
        v3194 = cv3194;
        v3195 = cv3195;
        v3196 = cv3196;
        v3197 = cv3197;
        v3198 = cv3198;
        v3199 = cv3199;
        v3200 = cv3200;
        v3201 = cv3201;
        v3207 = cv3207;
        v3208 = cv3208;
        
        continue;
        break;
        }
      case 'Claimant_burnStable0_192': {
        const v6736 = v3893[1];
        undefined /* setApiDetails */;
        const v6785 = v6736[stdlib.checkedBigNumberify('./index.rsh:327:9:spread', stdlib.UInt_max, '0')];
        ;
        const v6860 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v6861 = v6860[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v6862 = stdlib.add(v6861, v6785);
        const v6865 = v6860[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v6866 = v6860[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v6867 = [v6862, v6865, v6866];
        const v6868 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v6867);
        ;
        const v6869 = v6868[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v6870 = v6869[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v6874 = v6869[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v6875 = v6869[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v6876 = [v6870, v6874, v6875];
        const v6877 = stdlib.Array_set(v6868, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v6876);
        ;
        let v7046;
        const v7047 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
        if (v7047) {
          v7046 = v3198;
          }
        else {
          const v7048 = stdlib.div(v3196, v3197);
          const v7049 = stdlib.gt(v7048, v3198);
          const v7051 = v7049 ? v3198 : v7048;
          v7046 = v7051;
          }
        const v7052 = stdlib.div(v6785, v7046);
        const v7054 = stdlib.ge(v3208, v7052);
        const v7055 = stdlib.mul(v7052, v3200);
        const v7056 = stdlib.div(v7055, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
        const v7059 = stdlib.mul(v7056, v3194);
        const v7060 = stdlib.div(v7059, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        let v7061;
        if (v7047) {
          v7061 = v3198;
          }
        else {
          const v7063 = stdlib.div(v3196, v3197);
          const v7064 = stdlib.gt(v7063, v3198);
          const v7066 = v7064 ? v3198 : v7063;
          v7061 = v7066;
          }
        const v7067 = stdlib.div(v6785, v7061);
        const v7068 = stdlib.mul(v7067, v3200);
        const v7069 = stdlib.div(v7068, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
        const v7070 = stdlib.mul(v7069, v3189);
        const v7071 = stdlib.div(v7070, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v7072 = stdlib.add(v7060, v7071);
        const v7073 = stdlib.eq(v7056, v7072);
        const v7074 = v7054 ? v7073 : false;
        stdlib.assert(v7074, {
          at: './index.rsh:333:14:application',
          fs: ['at ./index.rsh:331:23:application call to [unknown function] (defined at: ./index.rsh:331:23:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v7077 = stdlib.sub(v7052, v7056);
        const v7081 = stdlib.sub(v3208, v7077);
        ;
        const v7082 = true;
        await txn3.getOutput('Claimant_burnStable', 'v7082', ctc12, v7082);
        const v7089 = stdlib.sub(v3197, v6785);
        let v7090;
        if (v7047) {
          v7090 = v3198;
          }
        else {
          const v7092 = stdlib.div(v3196, v3197);
          const v7093 = stdlib.gt(v7092, v3198);
          const v7095 = v7093 ? v3198 : v7092;
          v7090 = v7095;
          }
        const v7096 = stdlib.div(v6785, v7090);
        const v7097 = stdlib.sub(v3196, v7096);
        let v7098;
        if (v7047) {
          v7098 = v3198;
          }
        else {
          const v7100 = stdlib.div(v3196, v3197);
          const v7101 = stdlib.gt(v7100, v3198);
          const v7103 = v7101 ? v3198 : v7100;
          v7098 = v7103;
          }
        const v7104 = stdlib.div(v6785, v7098);
        const v7105 = stdlib.mul(v7104, v3200);
        const v7106 = stdlib.div(v7105, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
        const v7107 = stdlib.mul(v7106, v3194);
        const v7108 = stdlib.div(v7107, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v7109 = stdlib.add(v7097, v7108);
        let v7110;
        if (v7047) {
          v7110 = v3198;
          }
        else {
          const v7112 = stdlib.div(v3196, v3197);
          const v7113 = stdlib.gt(v7112, v3198);
          const v7115 = v7113 ? v3198 : v7112;
          v7110 = v7115;
          }
        const v7116 = stdlib.div(v6785, v7110);
        const v7117 = stdlib.mul(v7116, v3200);
        const v7118 = stdlib.div(v7117, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
        const v7119 = stdlib.mul(v7118, v3189);
        const v7120 = stdlib.div(v7119, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v7121 = stdlib.add(v3188, v7120);
        const cv3188 = v7121;
        const cv3189 = v3189;
        const cv3190 = v3190;
        const cv3191 = v3191;
        const cv3192 = v3199;
        const cv3193 = v3193;
        const cv3194 = v3194;
        const cv3195 = v3195;
        const cv3196 = v7109;
        const cv3197 = v7089;
        const cv3198 = v3198;
        const cv3199 = v3192;
        const cv3200 = v3200;
        const cv3201 = v3894;
        const cv3207 = v6877;
        const cv3208 = v7081;
        
        v3188 = cv3188;
        v3189 = cv3189;
        v3190 = cv3190;
        v3191 = cv3191;
        v3192 = cv3192;
        v3193 = cv3193;
        v3194 = cv3194;
        v3195 = cv3195;
        v3196 = cv3196;
        v3197 = cv3197;
        v3198 = cv3198;
        v3199 = cv3199;
        v3200 = cv3200;
        v3201 = cv3201;
        v3207 = cv3207;
        v3208 = cv3208;
        
        continue;
        break;
        }
      case 'Claimant_mintFirstStable0_192': {
        const v7446 = v3893[1];
        undefined /* setApiDetails */;
        const v7506 = v7446[stdlib.checkedBigNumberify('./index.rsh:249:9:spread', stdlib.UInt_max, '0')];
        const v7507 = stdlib.mul(v7506, v3200);
        const v7508 = stdlib.div(v7507, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
        const v7509 = stdlib.add(v7506, v7508);
        const v7569 = stdlib.add(v3208, v7509);
        ;
        const v7570 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v7571 = v7570[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v7575 = v7570[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v7576 = v7570[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v7577 = [v7571, v7575, v7576];
        const v7578 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v7577);
        ;
        const v7579 = v7578[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v7580 = v7579[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v7584 = v7579[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v7585 = v7579[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v7586 = [v7580, v7584, v7585];
        const v7587 = stdlib.Array_set(v7578, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v7586);
        ;
        const v7835 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:255:38:decimal', stdlib.UInt_max, '0'));
        let v7836;
        if (v7835) {
          v7836 = v3198;
          }
        else {
          const v7838 = stdlib.div(v3196, v3197);
          const v7839 = stdlib.gt(v7838, v3198);
          const v7841 = v7839 ? v3198 : v7838;
          v7836 = v7841;
          }
        const v7842 = stdlib.div(v7506, v7836);
        const v7843 = v7587[stdlib.checkedBigNumberify('./index.rsh:256:91:application', stdlib.UInt_max, '1')];
        const v7844 = v7843[stdlib.checkedBigNumberify('./index.rsh:256:91:application', stdlib.UInt_max, '0')];
        const v7845 = stdlib.le(v7842, v7844);
        const v7846 = v7835 ? v7845 : false;
        const v7851 = stdlib.mul(v7508, v3194);
        const v7852 = stdlib.div(v7851, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v7855 = stdlib.mul(v7508, v3189);
        const v7856 = stdlib.div(v7855, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v7857 = stdlib.add(v7852, v7856);
        const v7858 = stdlib.eq(v7508, v7857);
        const v7859 = v7846 ? v7858 : false;
        stdlib.assert(v7859, {
          at: './index.rsh:255:16:application',
          fs: ['at ./index.rsh:254:23:application call to [unknown function] (defined at: ./index.rsh:254:23:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v7860 = stdlib.div(v7506, v3198);
        const v7866 = stdlib.sub(v7844, v7860);
        const v7869 = v7843[stdlib.checkedBigNumberify('./index.rsh:258:72:application', stdlib.UInt_max, '1')];
        const v7870 = v7843[stdlib.checkedBigNumberify('./index.rsh:258:72:application', stdlib.UInt_max, '2')];
        const v7871 = [v7866, v7869, v7870];
        const v7872 = stdlib.Array_set(v7587, stdlib.checkedBigNumberify('./index.rsh:258:72:application', stdlib.UInt_max, '1'), v7871);
        ;
        const v7873 = true;
        await txn3.getOutput('Claimant_mintFirstStable', 'v7873', ctc12, v7873);
        const v7881 = stdlib.add(v3197, v7860);
        const v7882 = stdlib.add(v3196, v7506);
        const v7887 = stdlib.add(v7882, v7852);
        const v7892 = stdlib.add(v3188, v7856);
        const cv3188 = v7892;
        const cv3189 = v3189;
        const cv3190 = v3190;
        const cv3191 = v3191;
        const cv3192 = v3199;
        const cv3193 = v3193;
        const cv3194 = v3194;
        const cv3195 = v3195;
        const cv3196 = v7887;
        const cv3197 = v7881;
        const cv3198 = v3198;
        const cv3199 = v3192;
        const cv3200 = v3200;
        const cv3201 = v3894;
        const cv3207 = v7872;
        const cv3208 = v7569;
        
        v3188 = cv3188;
        v3189 = cv3189;
        v3190 = cv3190;
        v3191 = cv3191;
        v3192 = cv3192;
        v3193 = cv3193;
        v3194 = cv3194;
        v3195 = cv3195;
        v3196 = cv3196;
        v3197 = cv3197;
        v3198 = cv3198;
        v3199 = cv3199;
        v3200 = cv3200;
        v3201 = cv3201;
        v3207 = cv3207;
        v3208 = cv3208;
        
        continue;
        break;
        }
      case 'Claimant_mintReserve0_192': {
        const v8156 = v3893[1];
        undefined /* setApiDetails */;
        const v8230 = v8156[stdlib.checkedBigNumberify('./index.rsh:302:9:spread', stdlib.UInt_max, '0')];
        const v8231 = stdlib.mul(v8230, v3200);
        const v8232 = stdlib.div(v8231, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
        const v8233 = stdlib.add(v8230, v8232);
        const v8279 = stdlib.add(v3208, v8233);
        ;
        const v8280 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v8281 = v8280[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v8285 = v8280[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v8286 = v8280[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v8287 = [v8281, v8285, v8286];
        const v8288 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v8287);
        ;
        const v8289 = v8288[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v8290 = v8289[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v8294 = v8289[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v8295 = v8289[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v8296 = [v8290, v8294, v8295];
        const v8297 = stdlib.Array_set(v8288, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v8296);
        ;
        const v8608 = stdlib.mul(v8232, v3194);
        const v8609 = stdlib.div(v8608, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v8610 = stdlib.add(v3196, v8609);
        let v8611;
        const v8612 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
        if (v8612) {
          v8611 = v3198;
          }
        else {
          const v8613 = stdlib.div(v8610, v3197);
          const v8614 = stdlib.gt(v8613, v3198);
          const v8616 = v8614 ? v3198 : v8613;
          v8611 = v8616;
          }
        const v8617 = stdlib.mul(v3197, v8611);
        const v8618 = stdlib.div(v8610, v8617);
        const v8619 = stdlib.le(v8618, v3190);
        const v8620 = stdlib.lt(v3197, v3199);
        const v8621 = v8619 ? true : v8620;
        let v8622;
        const v8623 = stdlib.eq(v3195, stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0'));
        let v8624;
        if (v8612) {
          v8624 = v3198;
          }
        else {
          const v8626 = stdlib.div(v3196, v3197);
          const v8627 = stdlib.gt(v8626, v3198);
          const v8629 = v8627 ? v3198 : v8626;
          v8624 = v8629;
          }
        const v8630 = stdlib.mul(v3197, v8624);
        const v8631 = stdlib.sub(v3196, v8630);
        const v8632 = stdlib.eq(v8631, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
        const v8633 = v8623 ? true : v8632;
        if (v8633) {
          v8622 = v3191;
          }
        else {
          let v8634;
          if (v8612) {
            v8634 = v3198;
            }
          else {
            const v8636 = stdlib.div(v3196, v3197);
            const v8637 = stdlib.gt(v8636, v3198);
            const v8639 = v8637 ? v3198 : v8636;
            v8634 = v8639;
            }
          const v8640 = stdlib.mul(v3197, v8634);
          const v8641 = stdlib.sub(v3196, v8640);
          const v8642 = stdlib.div(v8641, v3195);
          const v8643 = stdlib.gt(v8642, v3191);
          let v8644;
          if (v8612) {
            v8644 = v3198;
            }
          else {
            const v8646 = stdlib.div(v3196, v3197);
            const v8647 = stdlib.gt(v8646, v3198);
            const v8649 = v8647 ? v3198 : v8646;
            v8644 = v8649;
            }
          const v8650 = stdlib.mul(v3197, v8644);
          const v8651 = stdlib.sub(v3196, v8650);
          const v8652 = stdlib.div(v8651, v3195);
          const v8653 = v8643 ? v8652 : v3191;
          v8622 = v8653;
          }
        const v8654 = stdlib.div(v8230, v8622);
        const v8655 = v8297[stdlib.checkedBigNumberify('./index.rsh:309:122:application', stdlib.UInt_max, '0')];
        const v8656 = v8655[stdlib.checkedBigNumberify('./index.rsh:309:122:application', stdlib.UInt_max, '0')];
        const v8657 = stdlib.le(v8654, v8656);
        const v8658 = v8621 ? v8657 : false;
        const v8667 = stdlib.mul(v8232, v3189);
        const v8668 = stdlib.div(v8667, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v8669 = stdlib.add(v8609, v8668);
        const v8670 = stdlib.eq(v8232, v8669);
        const v8671 = v8658 ? v8670 : false;
        stdlib.assert(v8671, {
          at: './index.rsh:308:14:application',
          fs: ['at ./index.rsh:307:21:application call to [unknown function] (defined at: ./index.rsh:307:21:function exp)'],
          msg: null,
          who: 'Admin'
          });
        let v8672;
        let v8674;
        if (v8612) {
          v8674 = v3198;
          }
        else {
          const v8676 = stdlib.div(v3196, v3197);
          const v8677 = stdlib.gt(v8676, v3198);
          const v8679 = v8677 ? v3198 : v8676;
          v8674 = v8679;
          }
        const v8680 = stdlib.mul(v3197, v8674);
        const v8681 = stdlib.sub(v3196, v8680);
        const v8682 = stdlib.eq(v8681, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
        const v8683 = v8623 ? true : v8682;
        if (v8683) {
          v8672 = v3191;
          }
        else {
          let v8684;
          if (v8612) {
            v8684 = v3198;
            }
          else {
            const v8686 = stdlib.div(v3196, v3197);
            const v8687 = stdlib.gt(v8686, v3198);
            const v8689 = v8687 ? v3198 : v8686;
            v8684 = v8689;
            }
          const v8690 = stdlib.mul(v3197, v8684);
          const v8691 = stdlib.sub(v3196, v8690);
          const v8692 = stdlib.div(v8691, v3195);
          const v8693 = stdlib.gt(v8692, v3191);
          let v8694;
          if (v8612) {
            v8694 = v3198;
            }
          else {
            const v8696 = stdlib.div(v3196, v3197);
            const v8697 = stdlib.gt(v8696, v3198);
            const v8699 = v8697 ? v3198 : v8696;
            v8694 = v8699;
            }
          const v8700 = stdlib.mul(v3197, v8694);
          const v8701 = stdlib.sub(v3196, v8700);
          const v8702 = stdlib.div(v8701, v3195);
          const v8703 = v8693 ? v8702 : v3191;
          v8672 = v8703;
          }
        const v8704 = stdlib.div(v8230, v8672);
        const v8710 = stdlib.sub(v8656, v8704);
        const v8713 = v8655[stdlib.checkedBigNumberify('./index.rsh:311:145:application', stdlib.UInt_max, '1')];
        const v8714 = v8655[stdlib.checkedBigNumberify('./index.rsh:311:145:application', stdlib.UInt_max, '2')];
        const v8715 = [v8710, v8713, v8714];
        const v8716 = stdlib.Array_set(v8297, stdlib.checkedBigNumberify('./index.rsh:311:145:application', stdlib.UInt_max, '0'), v8715);
        ;
        const v8717 = true;
        await txn3.getOutput('Claimant_mintReserve', 'v8717', ctc12, v8717);
        let v8724;
        let v8726;
        if (v8612) {
          v8726 = v3198;
          }
        else {
          const v8728 = stdlib.div(v3196, v3197);
          const v8729 = stdlib.gt(v8728, v3198);
          const v8731 = v8729 ? v3198 : v8728;
          v8726 = v8731;
          }
        const v8732 = stdlib.mul(v3197, v8726);
        const v8733 = stdlib.sub(v3196, v8732);
        const v8734 = stdlib.eq(v8733, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
        const v8735 = v8623 ? true : v8734;
        if (v8735) {
          v8724 = v3191;
          }
        else {
          let v8736;
          if (v8612) {
            v8736 = v3198;
            }
          else {
            const v8738 = stdlib.div(v3196, v3197);
            const v8739 = stdlib.gt(v8738, v3198);
            const v8741 = v8739 ? v3198 : v8738;
            v8736 = v8741;
            }
          const v8742 = stdlib.mul(v3197, v8736);
          const v8743 = stdlib.sub(v3196, v8742);
          const v8744 = stdlib.div(v8743, v3195);
          const v8745 = stdlib.gt(v8744, v3191);
          let v8746;
          if (v8612) {
            v8746 = v3198;
            }
          else {
            const v8748 = stdlib.div(v3196, v3197);
            const v8749 = stdlib.gt(v8748, v3198);
            const v8751 = v8749 ? v3198 : v8748;
            v8746 = v8751;
            }
          const v8752 = stdlib.mul(v3197, v8746);
          const v8753 = stdlib.sub(v3196, v8752);
          const v8754 = stdlib.div(v8753, v3195);
          const v8755 = v8745 ? v8754 : v3191;
          v8724 = v8755;
          }
        const v8756 = stdlib.div(v8230, v8724);
        const v8757 = stdlib.add(v3195, v8756);
        const v8758 = stdlib.add(v3196, v8230);
        const v8763 = stdlib.add(v8758, v8609);
        const v8768 = stdlib.add(v3188, v8668);
        const cv3188 = v8768;
        const cv3189 = v3189;
        const cv3190 = v3190;
        const cv3191 = v3191;
        const cv3192 = v3199;
        const cv3193 = v3193;
        const cv3194 = v3194;
        const cv3195 = v8757;
        const cv3196 = v8763;
        const cv3197 = v3197;
        const cv3198 = v3198;
        const cv3199 = v3192;
        const cv3200 = v3200;
        const cv3201 = v3894;
        const cv3207 = v8716;
        const cv3208 = v8279;
        
        v3188 = cv3188;
        v3189 = cv3189;
        v3190 = cv3190;
        v3191 = cv3191;
        v3192 = cv3192;
        v3193 = cv3193;
        v3194 = cv3194;
        v3195 = cv3195;
        v3196 = cv3196;
        v3197 = cv3197;
        v3198 = cv3198;
        v3199 = cv3199;
        v3200 = cv3200;
        v3201 = cv3201;
        v3207 = cv3207;
        v3208 = cv3208;
        
        continue;
        break;
        }
      case 'Claimant_mintStable0_192': {
        const v8866 = v3893[1];
        undefined /* setApiDetails */;
        const v8954 = v8866[stdlib.checkedBigNumberify('./index.rsh:274:9:spread', stdlib.UInt_max, '0')];
        const v8955 = stdlib.mul(v8954, v3200);
        const v8956 = stdlib.div(v8955, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
        const v8957 = stdlib.add(v8954, v8956);
        const v8989 = stdlib.add(v3208, v8957);
        ;
        const v8990 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v8991 = v8990[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v8995 = v8990[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v8996 = v8990[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v8997 = [v8991, v8995, v8996];
        const v8998 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v8997);
        ;
        const v8999 = v8998[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v9000 = v8999[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
        const v9004 = v8999[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
        const v9005 = v8999[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
        const v9006 = [v9000, v9004, v9005];
        const v9007 = stdlib.Array_set(v8998, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v9006);
        ;
        let v9482;
        const v9483 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
        if (v9483) {
          v9482 = v3198;
          }
        else {
          const v9484 = stdlib.div(v3196, v3197);
          const v9485 = stdlib.gt(v9484, v3198);
          const v9487 = v9485 ? v3198 : v9484;
          v9482 = v9487;
          }
        const v9488 = stdlib.mul(v3197, v9482);
        const v9489 = stdlib.div(v3196, v9488);
        const v9490 = stdlib.ge(v9489, v3193);
        const v9493 = stdlib.mul(v8956, v3194);
        const v9494 = stdlib.div(v9493, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v9495 = stdlib.add(v3196, v9494);
        let v9496;
        if (v9483) {
          v9496 = v3198;
          }
        else {
          const v9498 = stdlib.div(v9495, v3197);
          const v9499 = stdlib.gt(v9498, v3198);
          const v9501 = v9499 ? v3198 : v9498;
          v9496 = v9501;
          }
        const v9502 = stdlib.mul(v3197, v9496);
        const v9503 = stdlib.div(v9495, v9502);
        const v9504 = stdlib.ge(v9503, v3193);
        const v9505 = v9490 ? v9504 : false;
        let v9506;
        if (v9483) {
          v9506 = v3198;
          }
        else {
          const v9508 = stdlib.div(v3196, v3197);
          const v9509 = stdlib.gt(v9508, v3198);
          const v9511 = v9509 ? v3198 : v9508;
          v9506 = v9511;
          }
        const v9512 = stdlib.div(v8954, v9506);
        const v9513 = v9007[stdlib.checkedBigNumberify('./index.rsh:283:91:application', stdlib.UInt_max, '1')];
        const v9514 = v9513[stdlib.checkedBigNumberify('./index.rsh:283:91:application', stdlib.UInt_max, '0')];
        const v9515 = stdlib.le(v9512, v9514);
        const v9516 = v9505 ? v9515 : false;
        const v9525 = stdlib.mul(v8956, v3189);
        const v9526 = stdlib.div(v9525, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
        const v9527 = stdlib.add(v9494, v9526);
        const v9528 = stdlib.eq(v8956, v9527);
        const v9529 = v9516 ? v9528 : false;
        stdlib.assert(v9529, {
          at: './index.rsh:281:16:application',
          fs: ['at ./index.rsh:280:23:application call to [unknown function] (defined at: ./index.rsh:280:23:function exp)'],
          msg: null,
          who: 'Admin'
          });
        let v9530;
        if (v9483) {
          v9530 = v3198;
          }
        else {
          const v9532 = stdlib.div(v3196, v3197);
          const v9533 = stdlib.gt(v9532, v3198);
          const v9535 = v9533 ? v3198 : v9532;
          v9530 = v9535;
          }
        const v9536 = stdlib.div(v8954, v9530);
        const v9542 = stdlib.sub(v9514, v9536);
        const v9545 = v9513[stdlib.checkedBigNumberify('./index.rsh:286:54:application', stdlib.UInt_max, '1')];
        const v9546 = v9513[stdlib.checkedBigNumberify('./index.rsh:286:54:application', stdlib.UInt_max, '2')];
        const v9547 = [v9542, v9545, v9546];
        const v9548 = stdlib.Array_set(v9007, stdlib.checkedBigNumberify('./index.rsh:286:54:application', stdlib.UInt_max, '1'), v9547);
        ;
        const v9549 = true;
        await txn3.getOutput('Claimant_mintStable', 'v9549', ctc12, v9549);
        let v9556;
        if (v9483) {
          v9556 = v3198;
          }
        else {
          const v9558 = stdlib.div(v3196, v3197);
          const v9559 = stdlib.gt(v9558, v3198);
          const v9561 = v9559 ? v3198 : v9558;
          v9556 = v9561;
          }
        const v9562 = stdlib.div(v8954, v9556);
        const v9563 = stdlib.add(v3197, v9562);
        const v9564 = stdlib.add(v3196, v8954);
        const v9569 = stdlib.add(v9564, v9494);
        const v9574 = stdlib.add(v3188, v9526);
        const cv3188 = v9574;
        const cv3189 = v3189;
        const cv3190 = v3190;
        const cv3191 = v3191;
        const cv3192 = v3199;
        const cv3193 = v3193;
        const cv3194 = v3194;
        const cv3195 = v3195;
        const cv3196 = v9569;
        const cv3197 = v9563;
        const cv3198 = v3198;
        const cv3199 = v3192;
        const cv3200 = v3200;
        const cv3201 = v3894;
        const cv3207 = v9548;
        const cv3208 = v8989;
        
        v3188 = cv3188;
        v3189 = cv3189;
        v3190 = cv3190;
        v3191 = cv3191;
        v3192 = cv3192;
        v3193 = cv3193;
        v3194 = cv3194;
        v3195 = cv3195;
        v3196 = cv3196;
        v3197 = cv3197;
        v3198 = cv3198;
        v3199 = cv3199;
        v3200 = cv3200;
        v3201 = cv3201;
        v3207 = cv3207;
        v3208 = cv3208;
        
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc6,
    AdminAPI_setAdminFee0_192: ctc7,
    AdminAPI_updatePrice0_192: ctc8,
    Claimant_burnReserve0_192: ctc8,
    Claimant_burnStable0_192: ctc8,
    Claimant_mintFirstStable0_192: ctc8,
    Claimant_mintReserve0_192: ctc8,
    Claimant_mintStable0_192: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v3257 = ctc.selfAddress();
  const v3259 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:229:10:application call to [unknown function] (defined at: ./index.rsh:229:10:function exp)', 'at ./index.rsh:109:17:application call to "runAdminAPI_claimAdminFee0_192" (defined at: ./index.rsh:228:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: 'in',
    who: 'AdminAPI_claimAdminFee'
    });
  const v3260 = stdlib.addressEq(v3257, v3080);
  stdlib.assert(v3260, {
    at: './index.rsh:229:19:application',
    fs: ['at ./index.rsh:229:10:application call to [unknown function] (defined at: ./index.rsh:229:10:function exp)', 'at ./index.rsh:229:10:application call to [unknown function] (defined at: ./index.rsh:229:10:function exp)', 'at ./index.rsh:109:17:application call to "runAdminAPI_claimAdminFee0_192" (defined at: ./index.rsh:228:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: null,
    who: 'AdminAPI_claimAdminFee'
    });
  const v3263 = ['AdminAPI_claimAdminFee0_192', v3259];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208, v3263],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:230:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:230:18:decimal', stdlib.UInt_max, '0'), v3146], [stdlib.checkedBigNumberify('./index.rsh:230:41:decimal', stdlib.UInt_max, '0'), v3110]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
      
      switch (v3893[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v3896 = v3893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_claimAdminFee"
            });
          ;
          const v4020 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v4021 = v4020[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v4025 = v4020[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v4026 = v4020[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v4027 = [v4021, v4025, v4026];
          const v4028 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v4027);
          ;
          const v4029 = v4028[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v4030 = v4029[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v4034 = v4029[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v4035 = v4029[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v4036 = [v4030, v4034, v4035];
          const v4037 = stdlib.Array_set(v4028, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v4036);
          ;
          const v4043 = stdlib.sub(v3208, v3188);
          sim_r.txns.push({
            kind: 'from',
            to: v3080,
            tok: undefined /* Nothing */
            });
          const v4044 = true;
          const v4045 = await txn1.getOutput('AdminAPI_claimAdminFee', 'v4044', ctc3, v4044);
          
          const v20116 = stdlib.checkedBigNumberify('./index.rsh:241:11:decimal', stdlib.UInt_max, '0');
          const v20117 = v3189;
          const v20118 = v3190;
          const v20119 = v3191;
          const v20120 = v3192;
          const v20121 = v3193;
          const v20122 = v3194;
          const v20123 = v3195;
          const v20124 = v3196;
          const v20125 = v3197;
          const v20126 = v3198;
          const v20127 = v3199;
          const v20128 = v3200;
          const v20130 = v4037;
          const v20131 = v4043;
          sim_r.isHalt = false;
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v4606 = v3893[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v5316 = v3893[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v6026 = v3893[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v6736 = v3893[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v7446 = v3893[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v8156 = v3893[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v8866 = v3893[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
  switch (v3893[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v3896 = v3893[1];
      undefined /* setApiDetails */;
      ;
      const v4020 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v4021 = v4020[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v4025 = v4020[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v4026 = v4020[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v4027 = [v4021, v4025, v4026];
      const v4028 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v4027);
      ;
      const v4029 = v4028[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v4030 = v4029[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v4034 = v4029[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v4035 = v4029[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v4036 = [v4030, v4034, v4035];
      const v4037 = stdlib.Array_set(v4028, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v4036);
      ;
      const v4039 = stdlib.addressEq(v3892, v3080);
      stdlib.assert(v4039, {
        at: './index.rsh:232:16:application',
        fs: ['at ./index.rsh:231:11:application call to [unknown function] (defined at: ./index.rsh:231:11:function exp)'],
        msg: null,
        who: 'AdminAPI_claimAdminFee'
        });
      const v4043 = stdlib.sub(v3208, v3188);
      ;
      const v4044 = true;
      const v4045 = await txn1.getOutput('AdminAPI_claimAdminFee', 'v4044', ctc3, v4044);
      if (v1894) {
        stdlib.protect(ctc10, await interact.out(v3896, v4045), {
          at: './index.rsh:228:10:application',
          fs: ['at ./index.rsh:228:10:application call to [unknown function] (defined at: ./index.rsh:228:10:function exp)', 'at ./index.rsh:234:10:application call to "k" (defined at: ./index.rsh:231:11:function exp)', 'at ./index.rsh:231:11:application call to [unknown function] (defined at: ./index.rsh:231:11:function exp)'],
          msg: 'out',
          who: 'AdminAPI_claimAdminFee'
          });
        }
      else {
        }
      
      const v20116 = stdlib.checkedBigNumberify('./index.rsh:241:11:decimal', stdlib.UInt_max, '0');
      const v20117 = v3189;
      const v20118 = v3190;
      const v20119 = v3191;
      const v20120 = v3192;
      const v20121 = v3193;
      const v20122 = v3194;
      const v20123 = v3195;
      const v20124 = v3196;
      const v20125 = v3197;
      const v20126 = v3198;
      const v20127 = v3199;
      const v20128 = v3200;
      const v20130 = v4037;
      const v20131 = v4043;
      return;
      
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v4606 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v5316 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v6026 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v6736 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v7446 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v8156 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v8866 = v3893[1];
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc6,
    AdminAPI_updatePrice0_192: ctc8,
    Claimant_burnReserve0_192: ctc8,
    Claimant_burnStable0_192: ctc8,
    Claimant_mintFirstStable0_192: ctc8,
    Claimant_mintReserve0_192: ctc8,
    Claimant_mintStable0_192: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v3244 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:208:37:application call to [unknown function] (defined at: ./index.rsh:208:37:function exp)', 'at ./index.rsh:109:17:application call to "runAdminAPI_setAdminFee0_192" (defined at: ./index.rsh:207:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: 'in',
    who: 'AdminAPI_setAdminFee'
    });
  const v3245 = v3244[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3246 = v3244[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3249 = stdlib.add(v3245, v3246);
  const v3250 = stdlib.eq(v3249, stdlib.checkedBigNumberify('./index.rsh:208:79:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v3250, {
    at: './index.rsh:208:46:application',
    fs: ['at ./index.rsh:208:37:application call to [unknown function] (defined at: ./index.rsh:208:37:function exp)', 'at ./index.rsh:208:37:application call to [unknown function] (defined at: ./index.rsh:208:37:function exp)', 'at ./index.rsh:109:17:application call to "runAdminAPI_setAdminFee0_192" (defined at: ./index.rsh:207:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: null,
    who: 'AdminAPI_setAdminFee'
    });
  const v3255 = ['AdminAPI_setAdminFee0_192', v3244];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208, v3255],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:209:18:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:209:22:decimal', stdlib.UInt_max, '0'), v3146], [stdlib.checkedBigNumberify('./index.rsh:209:45:decimal', stdlib.UInt_max, '0'), v3110]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
      
      switch (v3893[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v3896 = v3893[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v4606 = v3893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_setAdminFee"
            });
          ;
          const v4730 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v4731 = v4730[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v4735 = v4730[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v4736 = v4730[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v4737 = [v4731, v4735, v4736];
          const v4738 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v4737);
          ;
          const v4739 = v4738[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v4740 = v4739[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v4744 = v4739[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v4745 = v4739[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v4746 = [v4740, v4744, v4745];
          const v4747 = stdlib.Array_set(v4738, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v4746);
          ;
          const v4762 = v4606[stdlib.checkedBigNumberify('./index.rsh:207:9:spread', stdlib.UInt_max, '0')];
          const v4763 = v4606[stdlib.checkedBigNumberify('./index.rsh:207:9:spread', stdlib.UInt_max, '1')];
          const v4769 = stdlib.sub(v3208, v3188);
          sim_r.txns.push({
            kind: 'from',
            to: v3080,
            tok: undefined /* Nothing */
            });
          const v4770 = true;
          const v4771 = await txn1.getOutput('AdminAPI_setAdminFee', 'v4770', ctc3, v4770);
          
          const v20260 = stdlib.checkedBigNumberify('./index.rsh:220:11:decimal', stdlib.UInt_max, '0');
          const v20261 = v4762;
          const v20262 = v3190;
          const v20263 = v3191;
          const v20264 = v3192;
          const v20265 = v3193;
          const v20266 = v4763;
          const v20267 = v3195;
          const v20268 = v3196;
          const v20269 = v3197;
          const v20270 = v3198;
          const v20271 = v3199;
          const v20272 = v3200;
          const v20274 = v4747;
          const v20275 = v4769;
          sim_r.isHalt = false;
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v5316 = v3893[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v6026 = v3893[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v6736 = v3893[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v7446 = v3893[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v8156 = v3893[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v8866 = v3893[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
  switch (v3893[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v3896 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v4606 = v3893[1];
      undefined /* setApiDetails */;
      ;
      const v4730 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v4731 = v4730[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v4735 = v4730[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v4736 = v4730[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v4737 = [v4731, v4735, v4736];
      const v4738 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v4737);
      ;
      const v4739 = v4738[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v4740 = v4739[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v4744 = v4739[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v4745 = v4739[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v4746 = [v4740, v4744, v4745];
      const v4747 = stdlib.Array_set(v4738, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v4746);
      ;
      const v4762 = v4606[stdlib.checkedBigNumberify('./index.rsh:207:9:spread', stdlib.UInt_max, '0')];
      const v4763 = v4606[stdlib.checkedBigNumberify('./index.rsh:207:9:spread', stdlib.UInt_max, '1')];
      const v4764 = stdlib.add(v4762, v4763);
      const v4765 = stdlib.eq(v4764, stdlib.checkedBigNumberify('./index.rsh:211:49:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v4765, {
        at: './index.rsh:211:16:application',
        fs: ['at ./index.rsh:210:40:application call to [unknown function] (defined at: ./index.rsh:210:40:function exp)'],
        msg: null,
        who: 'AdminAPI_setAdminFee'
        });
      const v4769 = stdlib.sub(v3208, v3188);
      ;
      const v4770 = true;
      const v4771 = await txn1.getOutput('AdminAPI_setAdminFee', 'v4770', ctc3, v4770);
      if (v1894) {
        stdlib.protect(ctc10, await interact.out(v4606, v4771), {
          at: './index.rsh:207:10:application',
          fs: ['at ./index.rsh:207:10:application call to [unknown function] (defined at: ./index.rsh:207:10:function exp)', 'at ./index.rsh:213:10:application call to "k" (defined at: ./index.rsh:210:40:function exp)', 'at ./index.rsh:210:40:application call to [unknown function] (defined at: ./index.rsh:210:40:function exp)'],
          msg: 'out',
          who: 'AdminAPI_setAdminFee'
          });
        }
      else {
        }
      
      const v20260 = stdlib.checkedBigNumberify('./index.rsh:220:11:decimal', stdlib.UInt_max, '0');
      const v20261 = v4762;
      const v20262 = v3190;
      const v20263 = v3191;
      const v20264 = v3192;
      const v20265 = v3193;
      const v20266 = v4763;
      const v20267 = v3195;
      const v20268 = v3196;
      const v20269 = v3197;
      const v20270 = v3198;
      const v20271 = v3199;
      const v20272 = v3200;
      const v20274 = v4747;
      const v20275 = v4769;
      return;
      
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v5316 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v6026 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v6736 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v7446 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v8156 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v8866 = v3893[1];
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v3229 = ctc.selfAddress();
  const v3231 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)', 'at ./index.rsh:109:17:application call to "runAdminAPI_updatePrice0_192" (defined at: ./index.rsh:187:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: 'in',
    who: 'AdminAPI_updatePrice'
    });
  const v3232 = v3231[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3234 = stdlib.gt(v3232, stdlib.checkedBigNumberify('./index.rsh:188:33:decimal', stdlib.UInt_max, '0'));
  const v3235 = stdlib.addressEq(v3229, v3080);
  const v3236 = v3234 ? v3235 : false;
  stdlib.assert(v3236, {
    at: './index.rsh:188:24:application',
    fs: ['at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)', 'at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)', 'at ./index.rsh:109:17:application call to "runAdminAPI_updatePrice0_192" (defined at: ./index.rsh:187:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: null,
    who: 'AdminAPI_updatePrice'
    });
  const v3240 = ['AdminAPI_updatePrice0_192', v3231];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208, v3240],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:189:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:189:19:decimal', stdlib.UInt_max, '0'), v3146], [stdlib.checkedBigNumberify('./index.rsh:189:42:decimal', stdlib.UInt_max, '0'), v3110]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
      
      switch (v3893[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v3896 = v3893[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v4606 = v3893[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v5316 = v3893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_updatePrice"
            });
          ;
          const v5440 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v5441 = v5440[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v5445 = v5440[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v5446 = v5440[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v5447 = [v5441, v5445, v5446];
          const v5448 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v5447);
          ;
          const v5449 = v5448[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v5450 = v5449[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v5454 = v5449[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v5455 = v5449[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v5456 = [v5450, v5454, v5455];
          const v5457 = stdlib.Array_set(v5448, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v5456);
          ;
          const v5490 = v5316[stdlib.checkedBigNumberify('./index.rsh:187:9:spread', stdlib.UInt_max, '0')];
          const v5494 = true;
          const v5495 = await txn1.getOutput('AdminAPI_updatePrice', 'v5494', ctc3, v5494);
          
          const v20404 = v3188;
          const v20405 = v3189;
          const v20406 = v3190;
          const v20407 = v3191;
          const v20408 = v3199;
          const v20409 = v3193;
          const v20410 = v3194;
          const v20411 = v3195;
          const v20412 = v3196;
          const v20413 = v3197;
          const v20414 = v5490;
          const v20415 = v5490;
          const v20416 = v3200;
          const v20418 = v5457;
          const v20419 = v3208;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v6026 = v3893[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v6736 = v3893[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v7446 = v3893[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v8156 = v3893[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v8866 = v3893[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
  switch (v3893[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v3896 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v4606 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v5316 = v3893[1];
      undefined /* setApiDetails */;
      ;
      const v5440 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v5441 = v5440[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v5445 = v5440[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v5446 = v5440[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v5447 = [v5441, v5445, v5446];
      const v5448 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v5447);
      ;
      const v5449 = v5448[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v5450 = v5449[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v5454 = v5449[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v5455 = v5449[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v5456 = [v5450, v5454, v5455];
      const v5457 = stdlib.Array_set(v5448, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v5456);
      ;
      const v5490 = v5316[stdlib.checkedBigNumberify('./index.rsh:187:9:spread', stdlib.UInt_max, '0')];
      const v5491 = stdlib.gt(v5490, stdlib.checkedBigNumberify('./index.rsh:191:25:decimal', stdlib.UInt_max, '0'));
      const v5492 = stdlib.addressEq(v3892, v3080);
      const v5493 = v5491 ? v5492 : false;
      stdlib.assert(v5493, {
        at: './index.rsh:191:16:application',
        fs: ['at ./index.rsh:190:18:application call to [unknown function] (defined at: ./index.rsh:190:18:function exp)'],
        msg: null,
        who: 'AdminAPI_updatePrice'
        });
      const v5494 = true;
      const v5495 = await txn1.getOutput('AdminAPI_updatePrice', 'v5494', ctc3, v5494);
      if (v1894) {
        stdlib.protect(ctc10, await interact.out(v5316, v5495), {
          at: './index.rsh:187:10:application',
          fs: ['at ./index.rsh:187:10:application call to [unknown function] (defined at: ./index.rsh:187:10:function exp)', 'at ./index.rsh:192:10:application call to "k" (defined at: ./index.rsh:190:18:function exp)', 'at ./index.rsh:190:18:application call to [unknown function] (defined at: ./index.rsh:190:18:function exp)'],
          msg: 'out',
          who: 'AdminAPI_updatePrice'
          });
        }
      else {
        }
      
      const v20404 = v3188;
      const v20405 = v3189;
      const v20406 = v3190;
      const v20407 = v3191;
      const v20408 = v3199;
      const v20409 = v3193;
      const v20410 = v3194;
      const v20411 = v3195;
      const v20412 = v3196;
      const v20413 = v3197;
      const v20414 = v5490;
      const v20415 = v5490;
      const v20416 = v3200;
      const v20418 = v5457;
      const v20419 = v3208;
      return;
      
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v6026 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v6736 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v7446 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v8156 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v8866 = v3893[1];
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v3483 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:352:20:application call to [unknown function] (defined at: ./index.rsh:352:20:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_burnReserve0_192" (defined at: ./index.rsh:351:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: 'in',
    who: 'Claimant_burnReserve'
    });
  const v3484 = v3483[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v3486;
  const v3487 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
  if (v3487) {
    v3486 = v3198;
    }
  else {
    const v3488 = stdlib.div(v3196, v3197);
    const v3489 = stdlib.gt(v3488, v3198);
    const v3491 = v3489 ? v3198 : v3488;
    v3486 = v3491;
    }
  const v3492 = stdlib.mul(v3197, v3486);
  const v3493 = stdlib.div(v3196, v3492);
  const v3494 = stdlib.ge(v3493, v3193);
  let v3495;
  const v3496 = stdlib.eq(v3195, stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0'));
  let v3497;
  if (v3487) {
    v3497 = v3198;
    }
  else {
    const v3499 = stdlib.div(v3196, v3197);
    const v3500 = stdlib.gt(v3499, v3198);
    const v3502 = v3500 ? v3198 : v3499;
    v3497 = v3502;
    }
  const v3503 = stdlib.mul(v3197, v3497);
  const v3504 = stdlib.sub(v3196, v3503);
  const v3505 = stdlib.eq(v3504, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
  const v3506 = v3496 ? true : v3505;
  if (v3506) {
    v3495 = v3191;
    }
  else {
    let v3507;
    if (v3487) {
      v3507 = v3198;
      }
    else {
      const v3509 = stdlib.div(v3196, v3197);
      const v3510 = stdlib.gt(v3509, v3198);
      const v3512 = v3510 ? v3198 : v3509;
      v3507 = v3512;
      }
    const v3513 = stdlib.mul(v3197, v3507);
    const v3514 = stdlib.sub(v3196, v3513);
    const v3515 = stdlib.div(v3514, v3195);
    const v3516 = stdlib.gt(v3515, v3191);
    let v3517;
    if (v3487) {
      v3517 = v3198;
      }
    else {
      const v3519 = stdlib.div(v3196, v3197);
      const v3520 = stdlib.gt(v3519, v3198);
      const v3522 = v3520 ? v3198 : v3519;
      v3517 = v3522;
      }
    const v3523 = stdlib.mul(v3197, v3517);
    const v3524 = stdlib.sub(v3196, v3523);
    const v3525 = stdlib.div(v3524, v3195);
    const v3526 = v3516 ? v3525 : v3191;
    v3495 = v3526;
    }
  const v3527 = stdlib.div(v3484, v3495);
  const v3528 = stdlib.gt(v3527, stdlib.checkedBigNumberify('./index.rsh:353:113:decimal', stdlib.UInt_max, '0'));
  const v3529 = v3494 ? v3528 : false;
  let v3531;
  let v3533;
  if (v3487) {
    v3533 = v3198;
    }
  else {
    const v3535 = stdlib.div(v3196, v3197);
    const v3536 = stdlib.gt(v3535, v3198);
    const v3538 = v3536 ? v3198 : v3535;
    v3533 = v3538;
    }
  const v3539 = stdlib.mul(v3197, v3533);
  const v3540 = stdlib.sub(v3196, v3539);
  const v3541 = stdlib.eq(v3540, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
  const v3542 = v3496 ? true : v3541;
  if (v3542) {
    v3531 = v3191;
    }
  else {
    let v3543;
    if (v3487) {
      v3543 = v3198;
      }
    else {
      const v3545 = stdlib.div(v3196, v3197);
      const v3546 = stdlib.gt(v3545, v3198);
      const v3548 = v3546 ? v3198 : v3545;
      v3543 = v3548;
      }
    const v3549 = stdlib.mul(v3197, v3543);
    const v3550 = stdlib.sub(v3196, v3549);
    const v3551 = stdlib.div(v3550, v3195);
    const v3552 = stdlib.gt(v3551, v3191);
    let v3553;
    if (v3487) {
      v3553 = v3198;
      }
    else {
      const v3555 = stdlib.div(v3196, v3197);
      const v3556 = stdlib.gt(v3555, v3198);
      const v3558 = v3556 ? v3198 : v3555;
      v3553 = v3558;
      }
    const v3559 = stdlib.mul(v3197, v3553);
    const v3560 = stdlib.sub(v3196, v3559);
    const v3561 = stdlib.div(v3560, v3195);
    const v3562 = v3552 ? v3561 : v3191;
    v3531 = v3562;
    }
  const v3563 = stdlib.div(v3484, v3531);
  const v3564 = stdlib.ge(v3208, v3563);
  const v3565 = v3529 ? v3564 : false;
  let v3566;
  let v3568;
  if (v3487) {
    v3568 = v3198;
    }
  else {
    const v3570 = stdlib.div(v3196, v3197);
    const v3571 = stdlib.gt(v3570, v3198);
    const v3573 = v3571 ? v3198 : v3570;
    v3568 = v3573;
    }
  const v3574 = stdlib.mul(v3197, v3568);
  const v3575 = stdlib.sub(v3196, v3574);
  const v3576 = stdlib.eq(v3575, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
  const v3577 = v3496 ? true : v3576;
  if (v3577) {
    v3566 = v3191;
    }
  else {
    let v3578;
    if (v3487) {
      v3578 = v3198;
      }
    else {
      const v3580 = stdlib.div(v3196, v3197);
      const v3581 = stdlib.gt(v3580, v3198);
      const v3583 = v3581 ? v3198 : v3580;
      v3578 = v3583;
      }
    const v3584 = stdlib.mul(v3197, v3578);
    const v3585 = stdlib.sub(v3196, v3584);
    const v3586 = stdlib.div(v3585, v3195);
    const v3587 = stdlib.gt(v3586, v3191);
    let v3588;
    if (v3487) {
      v3588 = v3198;
      }
    else {
      const v3590 = stdlib.div(v3196, v3197);
      const v3591 = stdlib.gt(v3590, v3198);
      const v3593 = v3591 ? v3198 : v3590;
      v3588 = v3593;
      }
    const v3594 = stdlib.mul(v3197, v3588);
    const v3595 = stdlib.sub(v3196, v3594);
    const v3596 = stdlib.div(v3595, v3195);
    const v3597 = v3587 ? v3596 : v3191;
    v3566 = v3597;
    }
  const v3598 = stdlib.div(v3484, v3566);
  const v3599 = stdlib.mul(v3598, v3200);
  const v3600 = stdlib.div(v3599, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
  let v3601;
  let v3603;
  if (v3487) {
    v3603 = v3198;
    }
  else {
    const v3605 = stdlib.div(v3196, v3197);
    const v3606 = stdlib.gt(v3605, v3198);
    const v3608 = v3606 ? v3198 : v3605;
    v3603 = v3608;
    }
  const v3609 = stdlib.mul(v3197, v3603);
  const v3610 = stdlib.sub(v3196, v3609);
  const v3611 = stdlib.eq(v3610, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
  const v3612 = v3496 ? true : v3611;
  if (v3612) {
    v3601 = v3191;
    }
  else {
    let v3613;
    if (v3487) {
      v3613 = v3198;
      }
    else {
      const v3615 = stdlib.div(v3196, v3197);
      const v3616 = stdlib.gt(v3615, v3198);
      const v3618 = v3616 ? v3198 : v3615;
      v3613 = v3618;
      }
    const v3619 = stdlib.mul(v3197, v3613);
    const v3620 = stdlib.sub(v3196, v3619);
    const v3621 = stdlib.div(v3620, v3195);
    const v3622 = stdlib.gt(v3621, v3191);
    let v3623;
    if (v3487) {
      v3623 = v3198;
      }
    else {
      const v3625 = stdlib.div(v3196, v3197);
      const v3626 = stdlib.gt(v3625, v3198);
      const v3628 = v3626 ? v3198 : v3625;
      v3623 = v3628;
      }
    const v3629 = stdlib.mul(v3197, v3623);
    const v3630 = stdlib.sub(v3196, v3629);
    const v3631 = stdlib.div(v3630, v3195);
    const v3632 = v3622 ? v3631 : v3191;
    v3601 = v3632;
    }
  const v3633 = stdlib.div(v3484, v3601);
  const v3634 = stdlib.mul(v3633, v3200);
  const v3635 = stdlib.div(v3634, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
  const v3636 = stdlib.mul(v3635, v3194);
  const v3637 = stdlib.div(v3636, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  let v3638;
  let v3640;
  if (v3487) {
    v3640 = v3198;
    }
  else {
    const v3642 = stdlib.div(v3196, v3197);
    const v3643 = stdlib.gt(v3642, v3198);
    const v3645 = v3643 ? v3198 : v3642;
    v3640 = v3645;
    }
  const v3646 = stdlib.mul(v3197, v3640);
  const v3647 = stdlib.sub(v3196, v3646);
  const v3648 = stdlib.eq(v3647, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
  const v3649 = v3496 ? true : v3648;
  if (v3649) {
    v3638 = v3191;
    }
  else {
    let v3650;
    if (v3487) {
      v3650 = v3198;
      }
    else {
      const v3652 = stdlib.div(v3196, v3197);
      const v3653 = stdlib.gt(v3652, v3198);
      const v3655 = v3653 ? v3198 : v3652;
      v3650 = v3655;
      }
    const v3656 = stdlib.mul(v3197, v3650);
    const v3657 = stdlib.sub(v3196, v3656);
    const v3658 = stdlib.div(v3657, v3195);
    const v3659 = stdlib.gt(v3658, v3191);
    let v3660;
    if (v3487) {
      v3660 = v3198;
      }
    else {
      const v3662 = stdlib.div(v3196, v3197);
      const v3663 = stdlib.gt(v3662, v3198);
      const v3665 = v3663 ? v3198 : v3662;
      v3660 = v3665;
      }
    const v3666 = stdlib.mul(v3197, v3660);
    const v3667 = stdlib.sub(v3196, v3666);
    const v3668 = stdlib.div(v3667, v3195);
    const v3669 = v3659 ? v3668 : v3191;
    v3638 = v3669;
    }
  const v3670 = stdlib.div(v3484, v3638);
  const v3671 = stdlib.mul(v3670, v3200);
  const v3672 = stdlib.div(v3671, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
  const v3673 = stdlib.mul(v3672, v3189);
  const v3674 = stdlib.div(v3673, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  const v3675 = stdlib.add(v3637, v3674);
  const v3676 = stdlib.eq(v3600, v3675);
  const v3677 = v3565 ? v3676 : false;
  stdlib.assert(v3677, {
    at: './index.rsh:352:29:application',
    fs: ['at ./index.rsh:352:20:application call to [unknown function] (defined at: ./index.rsh:352:20:function exp)', 'at ./index.rsh:352:20:application call to [unknown function] (defined at: ./index.rsh:352:20:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_burnReserve0_192" (defined at: ./index.rsh:351:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: null,
    who: 'Claimant_burnReserve'
    });
  const v3681 = ['Claimant_burnReserve0_192', v3483];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208, v3681],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:357:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:357:28:decimal', stdlib.UInt_max, '0'), v3146], [v3484, v3110]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
      
      switch (v3893[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v3896 = v3893[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v4606 = v3893[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v5316 = v3893[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v6026 = v3893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_burnReserve"
            });
          const v6064 = v6026[stdlib.checkedBigNumberify('./index.rsh:351:9:spread', stdlib.UInt_max, '0')];
          ;
          const v6150 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v6151 = v6150[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v6155 = v6150[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v6156 = v6150[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v6157 = [v6151, v6155, v6156];
          const v6158 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v6157);
          ;
          const v6159 = v6158[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v6160 = v6159[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v6161 = stdlib.add(v6160, v6064);
          const v6164 = v6159[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v6165 = v6159[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v6166 = [v6161, v6164, v6165];
          const v6167 = stdlib.Array_set(v6158, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v6166);
          sim_r.txns.push({
            amt: v6064,
            kind: 'to',
            tok: v3110
            });
          let v6214;
          const v6215 = stdlib.eq(v3195, stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0'));
          let v6216;
          const v6217 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
          if (v6217) {
            v6216 = v3198;
            }
          else {
            const v6218 = stdlib.div(v3196, v3197);
            const v6219 = stdlib.gt(v6218, v3198);
            const v6221 = v6219 ? v3198 : v6218;
            v6216 = v6221;
            }
          const v6222 = stdlib.mul(v3197, v6216);
          const v6223 = stdlib.sub(v3196, v6222);
          const v6224 = stdlib.eq(v6223, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
          const v6225 = v6215 ? true : v6224;
          if (v6225) {
            v6214 = v3191;
            }
          else {
            let v6226;
            if (v6217) {
              v6226 = v3198;
              }
            else {
              const v6228 = stdlib.div(v3196, v3197);
              const v6229 = stdlib.gt(v6228, v3198);
              const v6231 = v6229 ? v3198 : v6228;
              v6226 = v6231;
              }
            const v6232 = stdlib.mul(v3197, v6226);
            const v6233 = stdlib.sub(v3196, v6232);
            const v6234 = stdlib.div(v6233, v3195);
            const v6235 = stdlib.gt(v6234, v3191);
            let v6236;
            if (v6217) {
              v6236 = v3198;
              }
            else {
              const v6238 = stdlib.div(v3196, v3197);
              const v6239 = stdlib.gt(v6238, v3198);
              const v6241 = v6239 ? v3198 : v6238;
              v6236 = v6241;
              }
            const v6242 = stdlib.mul(v3197, v6236);
            const v6243 = stdlib.sub(v3196, v6242);
            const v6244 = stdlib.div(v6243, v3195);
            const v6245 = v6235 ? v6244 : v3191;
            v6214 = v6245;
            }
          const v6246 = stdlib.div(v6064, v6214);
          const v6247 = stdlib.mul(v6246, v3200);
          const v6248 = stdlib.div(v6247, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
          const v6300 = stdlib.mul(v6248, v3194);
          const v6301 = stdlib.div(v6300, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          const v6304 = stdlib.mul(v6248, v3189);
          const v6305 = stdlib.div(v6304, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          const v6309 = stdlib.sub(v6246, v6248);
          const v6313 = stdlib.sub(v3208, v6309);
          sim_r.txns.push({
            kind: 'from',
            to: v3892,
            tok: undefined /* Nothing */
            });
          const v6314 = true;
          const v6315 = await txn1.getOutput('Claimant_burnReserve', 'v6314', ctc3, v6314);
          
          const v6321 = stdlib.sub(v3195, v6064);
          const v6322 = stdlib.sub(v3196, v6246);
          const v6327 = stdlib.add(v6322, v6301);
          const v6332 = stdlib.add(v3188, v6305);
          const v20548 = v6332;
          const v20549 = v3189;
          const v20550 = v3190;
          const v20551 = v3191;
          const v20552 = v3199;
          const v20553 = v3193;
          const v20554 = v3194;
          const v20555 = v6321;
          const v20556 = v6327;
          const v20557 = v3197;
          const v20558 = v3198;
          const v20559 = v3192;
          const v20560 = v3200;
          const v20562 = v6167;
          const v20563 = v6313;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v6736 = v3893[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v7446 = v3893[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v8156 = v3893[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v8866 = v3893[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
  switch (v3893[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v3896 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v4606 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v5316 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v6026 = v3893[1];
      undefined /* setApiDetails */;
      const v6064 = v6026[stdlib.checkedBigNumberify('./index.rsh:351:9:spread', stdlib.UInt_max, '0')];
      ;
      const v6150 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v6151 = v6150[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v6155 = v6150[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v6156 = v6150[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v6157 = [v6151, v6155, v6156];
      const v6158 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v6157);
      ;
      const v6159 = v6158[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v6160 = v6159[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v6161 = stdlib.add(v6160, v6064);
      const v6164 = v6159[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v6165 = v6159[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v6166 = [v6161, v6164, v6165];
      const v6167 = stdlib.Array_set(v6158, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v6166);
      ;
      let v6214;
      const v6215 = stdlib.eq(v3195, stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0'));
      let v6216;
      const v6217 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
      if (v6217) {
        v6216 = v3198;
        }
      else {
        const v6218 = stdlib.div(v3196, v3197);
        const v6219 = stdlib.gt(v6218, v3198);
        const v6221 = v6219 ? v3198 : v6218;
        v6216 = v6221;
        }
      const v6222 = stdlib.mul(v3197, v6216);
      const v6223 = stdlib.sub(v3196, v6222);
      const v6224 = stdlib.eq(v6223, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
      const v6225 = v6215 ? true : v6224;
      if (v6225) {
        v6214 = v3191;
        }
      else {
        let v6226;
        if (v6217) {
          v6226 = v3198;
          }
        else {
          const v6228 = stdlib.div(v3196, v3197);
          const v6229 = stdlib.gt(v6228, v3198);
          const v6231 = v6229 ? v3198 : v6228;
          v6226 = v6231;
          }
        const v6232 = stdlib.mul(v3197, v6226);
        const v6233 = stdlib.sub(v3196, v6232);
        const v6234 = stdlib.div(v6233, v3195);
        const v6235 = stdlib.gt(v6234, v3191);
        let v6236;
        if (v6217) {
          v6236 = v3198;
          }
        else {
          const v6238 = stdlib.div(v3196, v3197);
          const v6239 = stdlib.gt(v6238, v3198);
          const v6241 = v6239 ? v3198 : v6238;
          v6236 = v6241;
          }
        const v6242 = stdlib.mul(v3197, v6236);
        const v6243 = stdlib.sub(v3196, v6242);
        const v6244 = stdlib.div(v6243, v3195);
        const v6245 = v6235 ? v6244 : v3191;
        v6214 = v6245;
        }
      const v6246 = stdlib.div(v6064, v6214);
      const v6247 = stdlib.mul(v6246, v3200);
      const v6248 = stdlib.div(v6247, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
      let v6249;
      if (v6217) {
        v6249 = v3198;
        }
      else {
        const v6251 = stdlib.div(v3196, v3197);
        const v6252 = stdlib.gt(v6251, v3198);
        const v6254 = v6252 ? v3198 : v6251;
        v6249 = v6254;
        }
      const v6255 = stdlib.mul(v3197, v6249);
      const v6256 = stdlib.div(v3196, v6255);
      const v6257 = stdlib.ge(v6256, v3193);
      let v6258;
      let v6260;
      if (v6217) {
        v6260 = v3198;
        }
      else {
        const v6262 = stdlib.div(v3196, v3197);
        const v6263 = stdlib.gt(v6262, v3198);
        const v6265 = v6263 ? v3198 : v6262;
        v6260 = v6265;
        }
      const v6266 = stdlib.mul(v3197, v6260);
      const v6267 = stdlib.sub(v3196, v6266);
      const v6268 = stdlib.eq(v6267, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
      const v6269 = v6215 ? true : v6268;
      if (v6269) {
        v6258 = v3191;
        }
      else {
        let v6270;
        if (v6217) {
          v6270 = v3198;
          }
        else {
          const v6272 = stdlib.div(v3196, v3197);
          const v6273 = stdlib.gt(v6272, v3198);
          const v6275 = v6273 ? v3198 : v6272;
          v6270 = v6275;
          }
        const v6276 = stdlib.mul(v3197, v6270);
        const v6277 = stdlib.sub(v3196, v6276);
        const v6278 = stdlib.div(v6277, v3195);
        const v6279 = stdlib.gt(v6278, v3191);
        let v6280;
        if (v6217) {
          v6280 = v3198;
          }
        else {
          const v6282 = stdlib.div(v3196, v3197);
          const v6283 = stdlib.gt(v6282, v3198);
          const v6285 = v6283 ? v3198 : v6282;
          v6280 = v6285;
          }
        const v6286 = stdlib.mul(v3197, v6280);
        const v6287 = stdlib.sub(v3196, v6286);
        const v6288 = stdlib.div(v6287, v3195);
        const v6289 = v6279 ? v6288 : v3191;
        v6258 = v6289;
        }
      const v6290 = stdlib.div(v6064, v6258);
      const v6291 = stdlib.gt(v6290, stdlib.checkedBigNumberify('./index.rsh:362:115:decimal', stdlib.UInt_max, '0'));
      const v6292 = v6257 ? v6291 : false;
      const v6294 = stdlib.ge(v3208, v6246);
      const v6295 = v6292 ? v6294 : false;
      const v6300 = stdlib.mul(v6248, v3194);
      const v6301 = stdlib.div(v6300, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v6304 = stdlib.mul(v6248, v3189);
      const v6305 = stdlib.div(v6304, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v6306 = stdlib.add(v6301, v6305);
      const v6307 = stdlib.eq(v6248, v6306);
      const v6308 = v6295 ? v6307 : false;
      stdlib.assert(v6308, {
        at: './index.rsh:361:14:application',
        fs: ['at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)'],
        msg: null,
        who: 'Claimant_burnReserve'
        });
      const v6309 = stdlib.sub(v6246, v6248);
      const v6313 = stdlib.sub(v3208, v6309);
      ;
      const v6314 = true;
      const v6315 = await txn1.getOutput('Claimant_burnReserve', 'v6314', ctc3, v6314);
      if (v1894) {
        stdlib.protect(ctc10, await interact.out(v6026, v6315), {
          at: './index.rsh:351:10:application',
          fs: ['at ./index.rsh:351:10:application call to [unknown function] (defined at: ./index.rsh:351:10:function exp)', 'at ./index.rsh:367:8:application call to "k" (defined at: ./index.rsh:358:23:function exp)', 'at ./index.rsh:358:23:application call to [unknown function] (defined at: ./index.rsh:358:23:function exp)'],
          msg: 'out',
          who: 'Claimant_burnReserve'
          });
        }
      else {
        }
      
      const v6321 = stdlib.sub(v3195, v6064);
      const v6322 = stdlib.sub(v3196, v6246);
      const v6327 = stdlib.add(v6322, v6301);
      const v6332 = stdlib.add(v3188, v6305);
      const v20548 = v6332;
      const v20549 = v3189;
      const v20550 = v3190;
      const v20551 = v3191;
      const v20552 = v3199;
      const v20553 = v3193;
      const v20554 = v3194;
      const v20555 = v6321;
      const v20556 = v6327;
      const v20557 = v3197;
      const v20558 = v3198;
      const v20559 = v3192;
      const v20560 = v3200;
      const v20562 = v6167;
      const v20563 = v6313;
      return;
      
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v6736 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v7446 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v8156 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v8866 = v3893[1];
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v3430 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:328:20:application call to [unknown function] (defined at: ./index.rsh:328:20:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_burnStable0_192" (defined at: ./index.rsh:327:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: 'in',
    who: 'Claimant_burnStable'
    });
  const v3431 = v3430[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v3434;
  const v3435 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
  if (v3435) {
    v3434 = v3198;
    }
  else {
    const v3436 = stdlib.div(v3196, v3197);
    const v3437 = stdlib.gt(v3436, v3198);
    const v3439 = v3437 ? v3198 : v3436;
    v3434 = v3439;
    }
  const v3440 = stdlib.div(v3431, v3434);
  const v3441 = stdlib.ge(v3208, v3440);
  let v3442;
  if (v3435) {
    v3442 = v3198;
    }
  else {
    const v3444 = stdlib.div(v3196, v3197);
    const v3445 = stdlib.gt(v3444, v3198);
    const v3447 = v3445 ? v3198 : v3444;
    v3442 = v3447;
    }
  const v3448 = stdlib.div(v3431, v3442);
  const v3449 = stdlib.mul(v3448, v3200);
  const v3450 = stdlib.div(v3449, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
  let v3451;
  if (v3435) {
    v3451 = v3198;
    }
  else {
    const v3453 = stdlib.div(v3196, v3197);
    const v3454 = stdlib.gt(v3453, v3198);
    const v3456 = v3454 ? v3198 : v3453;
    v3451 = v3456;
    }
  const v3457 = stdlib.div(v3431, v3451);
  const v3458 = stdlib.mul(v3457, v3200);
  const v3459 = stdlib.div(v3458, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
  const v3460 = stdlib.mul(v3459, v3194);
  const v3461 = stdlib.div(v3460, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  let v3462;
  if (v3435) {
    v3462 = v3198;
    }
  else {
    const v3464 = stdlib.div(v3196, v3197);
    const v3465 = stdlib.gt(v3464, v3198);
    const v3467 = v3465 ? v3198 : v3464;
    v3462 = v3467;
    }
  const v3468 = stdlib.div(v3431, v3462);
  const v3469 = stdlib.mul(v3468, v3200);
  const v3470 = stdlib.div(v3469, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
  const v3471 = stdlib.mul(v3470, v3189);
  const v3472 = stdlib.div(v3471, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  const v3473 = stdlib.add(v3461, v3472);
  const v3474 = stdlib.eq(v3450, v3473);
  const v3475 = v3441 ? v3474 : false;
  stdlib.assert(v3475, {
    at: './index.rsh:328:29:application',
    fs: ['at ./index.rsh:328:20:application call to [unknown function] (defined at: ./index.rsh:328:20:function exp)', 'at ./index.rsh:328:20:application call to [unknown function] (defined at: ./index.rsh:328:20:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_burnStable0_192" (defined at: ./index.rsh:327:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: null,
    who: 'Claimant_burnStable'
    });
  const v3479 = ['Claimant_burnStable0_192', v3430];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208, v3479],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:330:24:decimal', stdlib.UInt_max, '0'), [[v3431, v3146], [stdlib.checkedBigNumberify('./index.rsh:330:62:decimal', stdlib.UInt_max, '0'), v3110]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
      
      switch (v3893[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v3896 = v3893[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v4606 = v3893[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v5316 = v3893[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v6026 = v3893[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v6736 = v3893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_burnStable"
            });
          const v6785 = v6736[stdlib.checkedBigNumberify('./index.rsh:327:9:spread', stdlib.UInt_max, '0')];
          ;
          const v6860 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v6861 = v6860[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v6862 = stdlib.add(v6861, v6785);
          const v6865 = v6860[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v6866 = v6860[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v6867 = [v6862, v6865, v6866];
          const v6868 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v6867);
          sim_r.txns.push({
            amt: v6785,
            kind: 'to',
            tok: v3146
            });
          const v6869 = v6868[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v6870 = v6869[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v6874 = v6869[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v6875 = v6869[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v6876 = [v6870, v6874, v6875];
          const v6877 = stdlib.Array_set(v6868, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v6876);
          ;
          let v7046;
          const v7047 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
          if (v7047) {
            v7046 = v3198;
            }
          else {
            const v7048 = stdlib.div(v3196, v3197);
            const v7049 = stdlib.gt(v7048, v3198);
            const v7051 = v7049 ? v3198 : v7048;
            v7046 = v7051;
            }
          const v7052 = stdlib.div(v6785, v7046);
          const v7055 = stdlib.mul(v7052, v3200);
          const v7056 = stdlib.div(v7055, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
          const v7077 = stdlib.sub(v7052, v7056);
          const v7081 = stdlib.sub(v3208, v7077);
          sim_r.txns.push({
            kind: 'from',
            to: v3892,
            tok: undefined /* Nothing */
            });
          const v7082 = true;
          const v7083 = await txn1.getOutput('Claimant_burnStable', 'v7082', ctc3, v7082);
          
          const v7089 = stdlib.sub(v3197, v6785);
          let v7090;
          if (v7047) {
            v7090 = v3198;
            }
          else {
            const v7092 = stdlib.div(v3196, v3197);
            const v7093 = stdlib.gt(v7092, v3198);
            const v7095 = v7093 ? v3198 : v7092;
            v7090 = v7095;
            }
          const v7096 = stdlib.div(v6785, v7090);
          const v7097 = stdlib.sub(v3196, v7096);
          let v7098;
          if (v7047) {
            v7098 = v3198;
            }
          else {
            const v7100 = stdlib.div(v3196, v3197);
            const v7101 = stdlib.gt(v7100, v3198);
            const v7103 = v7101 ? v3198 : v7100;
            v7098 = v7103;
            }
          const v7104 = stdlib.div(v6785, v7098);
          const v7105 = stdlib.mul(v7104, v3200);
          const v7106 = stdlib.div(v7105, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
          const v7107 = stdlib.mul(v7106, v3194);
          const v7108 = stdlib.div(v7107, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          const v7109 = stdlib.add(v7097, v7108);
          let v7110;
          if (v7047) {
            v7110 = v3198;
            }
          else {
            const v7112 = stdlib.div(v3196, v3197);
            const v7113 = stdlib.gt(v7112, v3198);
            const v7115 = v7113 ? v3198 : v7112;
            v7110 = v7115;
            }
          const v7116 = stdlib.div(v6785, v7110);
          const v7117 = stdlib.mul(v7116, v3200);
          const v7118 = stdlib.div(v7117, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
          const v7119 = stdlib.mul(v7118, v3189);
          const v7120 = stdlib.div(v7119, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          const v7121 = stdlib.add(v3188, v7120);
          const v20692 = v7121;
          const v20693 = v3189;
          const v20694 = v3190;
          const v20695 = v3191;
          const v20696 = v3199;
          const v20697 = v3193;
          const v20698 = v3194;
          const v20699 = v3195;
          const v20700 = v7109;
          const v20701 = v7089;
          const v20702 = v3198;
          const v20703 = v3192;
          const v20704 = v3200;
          const v20706 = v6877;
          const v20707 = v7081;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v7446 = v3893[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v8156 = v3893[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v8866 = v3893[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
  switch (v3893[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v3896 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v4606 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v5316 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v6026 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v6736 = v3893[1];
      undefined /* setApiDetails */;
      const v6785 = v6736[stdlib.checkedBigNumberify('./index.rsh:327:9:spread', stdlib.UInt_max, '0')];
      ;
      const v6860 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v6861 = v6860[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v6862 = stdlib.add(v6861, v6785);
      const v6865 = v6860[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v6866 = v6860[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v6867 = [v6862, v6865, v6866];
      const v6868 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v6867);
      ;
      const v6869 = v6868[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v6870 = v6869[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v6874 = v6869[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v6875 = v6869[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v6876 = [v6870, v6874, v6875];
      const v6877 = stdlib.Array_set(v6868, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v6876);
      ;
      let v7046;
      const v7047 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
      if (v7047) {
        v7046 = v3198;
        }
      else {
        const v7048 = stdlib.div(v3196, v3197);
        const v7049 = stdlib.gt(v7048, v3198);
        const v7051 = v7049 ? v3198 : v7048;
        v7046 = v7051;
        }
      const v7052 = stdlib.div(v6785, v7046);
      const v7054 = stdlib.ge(v3208, v7052);
      const v7055 = stdlib.mul(v7052, v3200);
      const v7056 = stdlib.div(v7055, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
      const v7059 = stdlib.mul(v7056, v3194);
      const v7060 = stdlib.div(v7059, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      let v7061;
      if (v7047) {
        v7061 = v3198;
        }
      else {
        const v7063 = stdlib.div(v3196, v3197);
        const v7064 = stdlib.gt(v7063, v3198);
        const v7066 = v7064 ? v3198 : v7063;
        v7061 = v7066;
        }
      const v7067 = stdlib.div(v6785, v7061);
      const v7068 = stdlib.mul(v7067, v3200);
      const v7069 = stdlib.div(v7068, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
      const v7070 = stdlib.mul(v7069, v3189);
      const v7071 = stdlib.div(v7070, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v7072 = stdlib.add(v7060, v7071);
      const v7073 = stdlib.eq(v7056, v7072);
      const v7074 = v7054 ? v7073 : false;
      stdlib.assert(v7074, {
        at: './index.rsh:333:14:application',
        fs: ['at ./index.rsh:331:23:application call to [unknown function] (defined at: ./index.rsh:331:23:function exp)'],
        msg: null,
        who: 'Claimant_burnStable'
        });
      const v7077 = stdlib.sub(v7052, v7056);
      const v7081 = stdlib.sub(v3208, v7077);
      ;
      const v7082 = true;
      const v7083 = await txn1.getOutput('Claimant_burnStable', 'v7082', ctc3, v7082);
      if (v1894) {
        stdlib.protect(ctc10, await interact.out(v6736, v7083), {
          at: './index.rsh:327:10:application',
          fs: ['at ./index.rsh:327:10:application call to [unknown function] (defined at: ./index.rsh:327:10:function exp)', 'at ./index.rsh:336:8:application call to "k" (defined at: ./index.rsh:331:23:function exp)', 'at ./index.rsh:331:23:application call to [unknown function] (defined at: ./index.rsh:331:23:function exp)'],
          msg: 'out',
          who: 'Claimant_burnStable'
          });
        }
      else {
        }
      
      const v7089 = stdlib.sub(v3197, v6785);
      let v7090;
      if (v7047) {
        v7090 = v3198;
        }
      else {
        const v7092 = stdlib.div(v3196, v3197);
        const v7093 = stdlib.gt(v7092, v3198);
        const v7095 = v7093 ? v3198 : v7092;
        v7090 = v7095;
        }
      const v7096 = stdlib.div(v6785, v7090);
      const v7097 = stdlib.sub(v3196, v7096);
      let v7098;
      if (v7047) {
        v7098 = v3198;
        }
      else {
        const v7100 = stdlib.div(v3196, v3197);
        const v7101 = stdlib.gt(v7100, v3198);
        const v7103 = v7101 ? v3198 : v7100;
        v7098 = v7103;
        }
      const v7104 = stdlib.div(v6785, v7098);
      const v7105 = stdlib.mul(v7104, v3200);
      const v7106 = stdlib.div(v7105, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
      const v7107 = stdlib.mul(v7106, v3194);
      const v7108 = stdlib.div(v7107, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v7109 = stdlib.add(v7097, v7108);
      let v7110;
      if (v7047) {
        v7110 = v3198;
        }
      else {
        const v7112 = stdlib.div(v3196, v3197);
        const v7113 = stdlib.gt(v7112, v3198);
        const v7115 = v7113 ? v3198 : v7112;
        v7110 = v7115;
        }
      const v7116 = stdlib.div(v6785, v7110);
      const v7117 = stdlib.mul(v7116, v3200);
      const v7118 = stdlib.div(v7117, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
      const v7119 = stdlib.mul(v7118, v3189);
      const v7120 = stdlib.div(v7119, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v7121 = stdlib.add(v3188, v7120);
      const v20692 = v7121;
      const v20693 = v3189;
      const v20694 = v3190;
      const v20695 = v3191;
      const v20696 = v3199;
      const v20697 = v3193;
      const v20698 = v3194;
      const v20699 = v3195;
      const v20700 = v7109;
      const v20701 = v7089;
      const v20702 = v3198;
      const v20703 = v3192;
      const v20704 = v3200;
      const v20706 = v6877;
      const v20707 = v7081;
      return;
      
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v7446 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v8156 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v8866 = v3893[1];
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v3267 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:250:20:application call to [unknown function] (defined at: ./index.rsh:250:20:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_mintFirstStable0_192" (defined at: ./index.rsh:249:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: 'in',
    who: 'Claimant_mintFirstStable'
    });
  const v3268 = v3267[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3270 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:250:51:decimal', stdlib.UInt_max, '0'));
  const v3271 = stdlib.div(v3268, v3198);
  const v3272 = v3207[stdlib.checkedBigNumberify('./index.rsh:251:47:application', stdlib.UInt_max, '1')];
  const v3273 = v3272[stdlib.checkedBigNumberify('./index.rsh:251:47:application', stdlib.UInt_max, '0')];
  const v3274 = stdlib.le(v3271, v3273);
  const v3275 = v3270 ? v3274 : false;
  const v3276 = stdlib.mul(v3268, v3200);
  const v3277 = stdlib.div(v3276, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
  const v3280 = stdlib.mul(v3277, v3194);
  const v3281 = stdlib.div(v3280, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  const v3284 = stdlib.mul(v3277, v3189);
  const v3285 = stdlib.div(v3284, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  const v3286 = stdlib.add(v3281, v3285);
  const v3287 = stdlib.eq(v3277, v3286);
  const v3288 = v3275 ? v3287 : false;
  stdlib.assert(v3288, {
    at: './index.rsh:250:29:application',
    fs: ['at ./index.rsh:250:20:application call to [unknown function] (defined at: ./index.rsh:250:20:function exp)', 'at ./index.rsh:250:20:application call to [unknown function] (defined at: ./index.rsh:250:20:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_mintFirstStable0_192" (defined at: ./index.rsh:249:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: null,
    who: 'Claimant_mintFirstStable'
    });
  const v3292 = ['Claimant_mintFirstStable0_192', v3267];
  
  const v3812 = stdlib.add(v3268, v3277);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208, v3292],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v3812, [[stdlib.checkedBigNumberify('./index.rsh:253:66:decimal', stdlib.UInt_max, '0'), v3146], [stdlib.checkedBigNumberify('./index.rsh:253:89:decimal', stdlib.UInt_max, '0'), v3110]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
      
      switch (v3893[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v3896 = v3893[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v4606 = v3893[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v5316 = v3893[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v6026 = v3893[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v6736 = v3893[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v7446 = v3893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_mintFirstStable"
            });
          const v7506 = v7446[stdlib.checkedBigNumberify('./index.rsh:249:9:spread', stdlib.UInt_max, '0')];
          const v7507 = stdlib.mul(v7506, v3200);
          const v7508 = stdlib.div(v7507, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
          const v7509 = stdlib.add(v7506, v7508);
          const v7569 = stdlib.add(v3208, v7509);
          sim_r.txns.push({
            amt: v7509,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v7570 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v7571 = v7570[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v7575 = v7570[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v7576 = v7570[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v7577 = [v7571, v7575, v7576];
          const v7578 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v7577);
          ;
          const v7579 = v7578[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v7580 = v7579[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v7584 = v7579[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v7585 = v7579[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v7586 = [v7580, v7584, v7585];
          const v7587 = stdlib.Array_set(v7578, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v7586);
          ;
          const v7843 = v7587[stdlib.checkedBigNumberify('./index.rsh:256:91:application', stdlib.UInt_max, '1')];
          const v7844 = v7843[stdlib.checkedBigNumberify('./index.rsh:256:91:application', stdlib.UInt_max, '0')];
          const v7851 = stdlib.mul(v7508, v3194);
          const v7852 = stdlib.div(v7851, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          const v7855 = stdlib.mul(v7508, v3189);
          const v7856 = stdlib.div(v7855, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          const v7860 = stdlib.div(v7506, v3198);
          const v7866 = stdlib.sub(v7844, v7860);
          const v7869 = v7843[stdlib.checkedBigNumberify('./index.rsh:258:72:application', stdlib.UInt_max, '1')];
          const v7870 = v7843[stdlib.checkedBigNumberify('./index.rsh:258:72:application', stdlib.UInt_max, '2')];
          const v7871 = [v7866, v7869, v7870];
          const v7872 = stdlib.Array_set(v7587, stdlib.checkedBigNumberify('./index.rsh:258:72:application', stdlib.UInt_max, '1'), v7871);
          sim_r.txns.push({
            kind: 'from',
            to: v3892,
            tok: v3146
            });
          const v7873 = true;
          const v7874 = await txn1.getOutput('Claimant_mintFirstStable', 'v7873', ctc3, v7873);
          
          const v7881 = stdlib.add(v3197, v7860);
          const v7882 = stdlib.add(v3196, v7506);
          const v7887 = stdlib.add(v7882, v7852);
          const v7892 = stdlib.add(v3188, v7856);
          const v20836 = v7892;
          const v20837 = v3189;
          const v20838 = v3190;
          const v20839 = v3191;
          const v20840 = v3199;
          const v20841 = v3193;
          const v20842 = v3194;
          const v20843 = v3195;
          const v20844 = v7887;
          const v20845 = v7881;
          const v20846 = v3198;
          const v20847 = v3192;
          const v20848 = v3200;
          const v20850 = v7872;
          const v20851 = v7569;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v8156 = v3893[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v8866 = v3893[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
  switch (v3893[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v3896 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v4606 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v5316 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v6026 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v6736 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v7446 = v3893[1];
      undefined /* setApiDetails */;
      const v7506 = v7446[stdlib.checkedBigNumberify('./index.rsh:249:9:spread', stdlib.UInt_max, '0')];
      const v7507 = stdlib.mul(v7506, v3200);
      const v7508 = stdlib.div(v7507, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
      const v7509 = stdlib.add(v7506, v7508);
      const v7569 = stdlib.add(v3208, v7509);
      ;
      const v7570 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v7571 = v7570[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v7575 = v7570[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v7576 = v7570[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v7577 = [v7571, v7575, v7576];
      const v7578 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v7577);
      ;
      const v7579 = v7578[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v7580 = v7579[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v7584 = v7579[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v7585 = v7579[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v7586 = [v7580, v7584, v7585];
      const v7587 = stdlib.Array_set(v7578, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v7586);
      ;
      const v7835 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:255:38:decimal', stdlib.UInt_max, '0'));
      let v7836;
      if (v7835) {
        v7836 = v3198;
        }
      else {
        const v7838 = stdlib.div(v3196, v3197);
        const v7839 = stdlib.gt(v7838, v3198);
        const v7841 = v7839 ? v3198 : v7838;
        v7836 = v7841;
        }
      const v7842 = stdlib.div(v7506, v7836);
      const v7843 = v7587[stdlib.checkedBigNumberify('./index.rsh:256:91:application', stdlib.UInt_max, '1')];
      const v7844 = v7843[stdlib.checkedBigNumberify('./index.rsh:256:91:application', stdlib.UInt_max, '0')];
      const v7845 = stdlib.le(v7842, v7844);
      const v7846 = v7835 ? v7845 : false;
      const v7851 = stdlib.mul(v7508, v3194);
      const v7852 = stdlib.div(v7851, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v7855 = stdlib.mul(v7508, v3189);
      const v7856 = stdlib.div(v7855, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v7857 = stdlib.add(v7852, v7856);
      const v7858 = stdlib.eq(v7508, v7857);
      const v7859 = v7846 ? v7858 : false;
      stdlib.assert(v7859, {
        at: './index.rsh:255:16:application',
        fs: ['at ./index.rsh:254:23:application call to [unknown function] (defined at: ./index.rsh:254:23:function exp)'],
        msg: null,
        who: 'Claimant_mintFirstStable'
        });
      const v7860 = stdlib.div(v7506, v3198);
      const v7866 = stdlib.sub(v7844, v7860);
      const v7869 = v7843[stdlib.checkedBigNumberify('./index.rsh:258:72:application', stdlib.UInt_max, '1')];
      const v7870 = v7843[stdlib.checkedBigNumberify('./index.rsh:258:72:application', stdlib.UInt_max, '2')];
      const v7871 = [v7866, v7869, v7870];
      const v7872 = stdlib.Array_set(v7587, stdlib.checkedBigNumberify('./index.rsh:258:72:application', stdlib.UInt_max, '1'), v7871);
      ;
      const v7873 = true;
      const v7874 = await txn1.getOutput('Claimant_mintFirstStable', 'v7873', ctc3, v7873);
      if (v1894) {
        stdlib.protect(ctc10, await interact.out(v7446, v7874), {
          at: './index.rsh:249:10:application',
          fs: ['at ./index.rsh:249:10:application call to [unknown function] (defined at: ./index.rsh:249:10:function exp)', 'at ./index.rsh:259:10:application call to "k" (defined at: ./index.rsh:254:23:function exp)', 'at ./index.rsh:254:23:application call to [unknown function] (defined at: ./index.rsh:254:23:function exp)'],
          msg: 'out',
          who: 'Claimant_mintFirstStable'
          });
        }
      else {
        }
      
      const v7881 = stdlib.add(v3197, v7860);
      const v7882 = stdlib.add(v3196, v7506);
      const v7887 = stdlib.add(v7882, v7852);
      const v7892 = stdlib.add(v3188, v7856);
      const v20836 = v7892;
      const v20837 = v3189;
      const v20838 = v3190;
      const v20839 = v3191;
      const v20840 = v3199;
      const v20841 = v3193;
      const v20842 = v3194;
      const v20843 = v3195;
      const v20844 = v7887;
      const v20845 = v7881;
      const v20846 = v3198;
      const v20847 = v3192;
      const v20848 = v3200;
      const v20850 = v7872;
      const v20851 = v7569;
      return;
      
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v8156 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v8866 = v3893[1];
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v3354 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:303:18:application call to [unknown function] (defined at: ./index.rsh:303:18:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_mintReserve0_192" (defined at: ./index.rsh:302:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: 'in',
    who: 'Claimant_mintReserve'
    });
  const v3355 = v3354[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3357 = stdlib.mul(v3355, v3200);
  const v3358 = stdlib.div(v3357, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
  const v3359 = stdlib.mul(v3358, v3194);
  const v3360 = stdlib.div(v3359, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  const v3361 = stdlib.add(v3196, v3360);
  let v3362;
  const v3363 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
  if (v3363) {
    v3362 = v3198;
    }
  else {
    const v3364 = stdlib.div(v3361, v3197);
    const v3365 = stdlib.gt(v3364, v3198);
    const v3367 = v3365 ? v3198 : v3364;
    v3362 = v3367;
    }
  const v3368 = stdlib.mul(v3197, v3362);
  const v3369 = stdlib.div(v3361, v3368);
  const v3370 = stdlib.le(v3369, v3190);
  const v3371 = stdlib.lt(v3197, v3199);
  const v3372 = v3370 ? true : v3371;
  let v3373;
  const v3374 = stdlib.eq(v3195, stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0'));
  let v3375;
  if (v3363) {
    v3375 = v3198;
    }
  else {
    const v3377 = stdlib.div(v3196, v3197);
    const v3378 = stdlib.gt(v3377, v3198);
    const v3380 = v3378 ? v3198 : v3377;
    v3375 = v3380;
    }
  const v3381 = stdlib.mul(v3197, v3375);
  const v3382 = stdlib.sub(v3196, v3381);
  const v3383 = stdlib.eq(v3382, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
  const v3384 = v3374 ? true : v3383;
  if (v3384) {
    v3373 = v3191;
    }
  else {
    let v3385;
    if (v3363) {
      v3385 = v3198;
      }
    else {
      const v3387 = stdlib.div(v3196, v3197);
      const v3388 = stdlib.gt(v3387, v3198);
      const v3390 = v3388 ? v3198 : v3387;
      v3385 = v3390;
      }
    const v3391 = stdlib.mul(v3197, v3385);
    const v3392 = stdlib.sub(v3196, v3391);
    const v3393 = stdlib.div(v3392, v3195);
    const v3394 = stdlib.gt(v3393, v3191);
    let v3395;
    if (v3363) {
      v3395 = v3198;
      }
    else {
      const v3397 = stdlib.div(v3196, v3197);
      const v3398 = stdlib.gt(v3397, v3198);
      const v3400 = v3398 ? v3198 : v3397;
      v3395 = v3400;
      }
    const v3401 = stdlib.mul(v3197, v3395);
    const v3402 = stdlib.sub(v3196, v3401);
    const v3403 = stdlib.div(v3402, v3195);
    const v3404 = v3394 ? v3403 : v3191;
    v3373 = v3404;
    }
  const v3405 = stdlib.div(v3355, v3373);
  const v3406 = v3207[stdlib.checkedBigNumberify('./index.rsh:304:119:application', stdlib.UInt_max, '0')];
  const v3407 = v3406[stdlib.checkedBigNumberify('./index.rsh:304:119:application', stdlib.UInt_max, '0')];
  const v3408 = stdlib.le(v3405, v3407);
  const v3409 = v3372 ? v3408 : false;
  const v3418 = stdlib.mul(v3358, v3189);
  const v3419 = stdlib.div(v3418, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  const v3420 = stdlib.add(v3360, v3419);
  const v3421 = stdlib.eq(v3358, v3420);
  const v3422 = v3409 ? v3421 : false;
  stdlib.assert(v3422, {
    at: './index.rsh:303:27:application',
    fs: ['at ./index.rsh:303:18:application call to [unknown function] (defined at: ./index.rsh:303:18:function exp)', 'at ./index.rsh:303:18:application call to [unknown function] (defined at: ./index.rsh:303:18:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_mintReserve0_192" (defined at: ./index.rsh:302:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: null,
    who: 'Claimant_mintReserve'
    });
  const v3426 = ['Claimant_mintReserve0_192', v3354];
  
  const v3840 = stdlib.add(v3355, v3358);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208, v3426],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v3840, [[stdlib.checkedBigNumberify('./index.rsh:306:63:decimal', stdlib.UInt_max, '0'), v3146], [stdlib.checkedBigNumberify('./index.rsh:306:86:decimal', stdlib.UInt_max, '0'), v3110]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
      
      switch (v3893[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v3896 = v3893[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v4606 = v3893[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v5316 = v3893[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v6026 = v3893[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v6736 = v3893[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v7446 = v3893[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v8156 = v3893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_mintReserve"
            });
          const v8230 = v8156[stdlib.checkedBigNumberify('./index.rsh:302:9:spread', stdlib.UInt_max, '0')];
          const v8231 = stdlib.mul(v8230, v3200);
          const v8232 = stdlib.div(v8231, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
          const v8233 = stdlib.add(v8230, v8232);
          const v8279 = stdlib.add(v3208, v8233);
          sim_r.txns.push({
            amt: v8233,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v8280 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v8281 = v8280[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v8285 = v8280[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v8286 = v8280[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v8287 = [v8281, v8285, v8286];
          const v8288 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v8287);
          ;
          const v8289 = v8288[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v8290 = v8289[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v8294 = v8289[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v8295 = v8289[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v8296 = [v8290, v8294, v8295];
          const v8297 = stdlib.Array_set(v8288, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v8296);
          ;
          const v8608 = stdlib.mul(v8232, v3194);
          const v8609 = stdlib.div(v8608, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          const v8612 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
          const v8623 = stdlib.eq(v3195, stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0'));
          const v8655 = v8297[stdlib.checkedBigNumberify('./index.rsh:309:122:application', stdlib.UInt_max, '0')];
          const v8656 = v8655[stdlib.checkedBigNumberify('./index.rsh:309:122:application', stdlib.UInt_max, '0')];
          const v8667 = stdlib.mul(v8232, v3189);
          const v8668 = stdlib.div(v8667, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          let v8672;
          let v8674;
          if (v8612) {
            v8674 = v3198;
            }
          else {
            const v8676 = stdlib.div(v3196, v3197);
            const v8677 = stdlib.gt(v8676, v3198);
            const v8679 = v8677 ? v3198 : v8676;
            v8674 = v8679;
            }
          const v8680 = stdlib.mul(v3197, v8674);
          const v8681 = stdlib.sub(v3196, v8680);
          const v8682 = stdlib.eq(v8681, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
          const v8683 = v8623 ? true : v8682;
          if (v8683) {
            v8672 = v3191;
            }
          else {
            let v8684;
            if (v8612) {
              v8684 = v3198;
              }
            else {
              const v8686 = stdlib.div(v3196, v3197);
              const v8687 = stdlib.gt(v8686, v3198);
              const v8689 = v8687 ? v3198 : v8686;
              v8684 = v8689;
              }
            const v8690 = stdlib.mul(v3197, v8684);
            const v8691 = stdlib.sub(v3196, v8690);
            const v8692 = stdlib.div(v8691, v3195);
            const v8693 = stdlib.gt(v8692, v3191);
            let v8694;
            if (v8612) {
              v8694 = v3198;
              }
            else {
              const v8696 = stdlib.div(v3196, v3197);
              const v8697 = stdlib.gt(v8696, v3198);
              const v8699 = v8697 ? v3198 : v8696;
              v8694 = v8699;
              }
            const v8700 = stdlib.mul(v3197, v8694);
            const v8701 = stdlib.sub(v3196, v8700);
            const v8702 = stdlib.div(v8701, v3195);
            const v8703 = v8693 ? v8702 : v3191;
            v8672 = v8703;
            }
          const v8704 = stdlib.div(v8230, v8672);
          const v8710 = stdlib.sub(v8656, v8704);
          const v8713 = v8655[stdlib.checkedBigNumberify('./index.rsh:311:145:application', stdlib.UInt_max, '1')];
          const v8714 = v8655[stdlib.checkedBigNumberify('./index.rsh:311:145:application', stdlib.UInt_max, '2')];
          const v8715 = [v8710, v8713, v8714];
          const v8716 = stdlib.Array_set(v8297, stdlib.checkedBigNumberify('./index.rsh:311:145:application', stdlib.UInt_max, '0'), v8715);
          sim_r.txns.push({
            kind: 'from',
            to: v3892,
            tok: v3110
            });
          const v8717 = true;
          const v8718 = await txn1.getOutput('Claimant_mintReserve', 'v8717', ctc3, v8717);
          
          let v8724;
          let v8726;
          if (v8612) {
            v8726 = v3198;
            }
          else {
            const v8728 = stdlib.div(v3196, v3197);
            const v8729 = stdlib.gt(v8728, v3198);
            const v8731 = v8729 ? v3198 : v8728;
            v8726 = v8731;
            }
          const v8732 = stdlib.mul(v3197, v8726);
          const v8733 = stdlib.sub(v3196, v8732);
          const v8734 = stdlib.eq(v8733, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
          const v8735 = v8623 ? true : v8734;
          if (v8735) {
            v8724 = v3191;
            }
          else {
            let v8736;
            if (v8612) {
              v8736 = v3198;
              }
            else {
              const v8738 = stdlib.div(v3196, v3197);
              const v8739 = stdlib.gt(v8738, v3198);
              const v8741 = v8739 ? v3198 : v8738;
              v8736 = v8741;
              }
            const v8742 = stdlib.mul(v3197, v8736);
            const v8743 = stdlib.sub(v3196, v8742);
            const v8744 = stdlib.div(v8743, v3195);
            const v8745 = stdlib.gt(v8744, v3191);
            let v8746;
            if (v8612) {
              v8746 = v3198;
              }
            else {
              const v8748 = stdlib.div(v3196, v3197);
              const v8749 = stdlib.gt(v8748, v3198);
              const v8751 = v8749 ? v3198 : v8748;
              v8746 = v8751;
              }
            const v8752 = stdlib.mul(v3197, v8746);
            const v8753 = stdlib.sub(v3196, v8752);
            const v8754 = stdlib.div(v8753, v3195);
            const v8755 = v8745 ? v8754 : v3191;
            v8724 = v8755;
            }
          const v8756 = stdlib.div(v8230, v8724);
          const v8757 = stdlib.add(v3195, v8756);
          const v8758 = stdlib.add(v3196, v8230);
          const v8763 = stdlib.add(v8758, v8609);
          const v8768 = stdlib.add(v3188, v8668);
          const v20980 = v8768;
          const v20981 = v3189;
          const v20982 = v3190;
          const v20983 = v3191;
          const v20984 = v3199;
          const v20985 = v3193;
          const v20986 = v3194;
          const v20987 = v8757;
          const v20988 = v8763;
          const v20989 = v3197;
          const v20990 = v3198;
          const v20991 = v3192;
          const v20992 = v3200;
          const v20994 = v8716;
          const v20995 = v8279;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v8866 = v3893[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
  switch (v3893[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v3896 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v4606 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v5316 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v6026 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v6736 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v7446 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v8156 = v3893[1];
      undefined /* setApiDetails */;
      const v8230 = v8156[stdlib.checkedBigNumberify('./index.rsh:302:9:spread', stdlib.UInt_max, '0')];
      const v8231 = stdlib.mul(v8230, v3200);
      const v8232 = stdlib.div(v8231, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
      const v8233 = stdlib.add(v8230, v8232);
      const v8279 = stdlib.add(v3208, v8233);
      ;
      const v8280 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v8281 = v8280[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v8285 = v8280[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v8286 = v8280[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v8287 = [v8281, v8285, v8286];
      const v8288 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v8287);
      ;
      const v8289 = v8288[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v8290 = v8289[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v8294 = v8289[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v8295 = v8289[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v8296 = [v8290, v8294, v8295];
      const v8297 = stdlib.Array_set(v8288, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v8296);
      ;
      const v8608 = stdlib.mul(v8232, v3194);
      const v8609 = stdlib.div(v8608, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v8610 = stdlib.add(v3196, v8609);
      let v8611;
      const v8612 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
      if (v8612) {
        v8611 = v3198;
        }
      else {
        const v8613 = stdlib.div(v8610, v3197);
        const v8614 = stdlib.gt(v8613, v3198);
        const v8616 = v8614 ? v3198 : v8613;
        v8611 = v8616;
        }
      const v8617 = stdlib.mul(v3197, v8611);
      const v8618 = stdlib.div(v8610, v8617);
      const v8619 = stdlib.le(v8618, v3190);
      const v8620 = stdlib.lt(v3197, v3199);
      const v8621 = v8619 ? true : v8620;
      let v8622;
      const v8623 = stdlib.eq(v3195, stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0'));
      let v8624;
      if (v8612) {
        v8624 = v3198;
        }
      else {
        const v8626 = stdlib.div(v3196, v3197);
        const v8627 = stdlib.gt(v8626, v3198);
        const v8629 = v8627 ? v3198 : v8626;
        v8624 = v8629;
        }
      const v8630 = stdlib.mul(v3197, v8624);
      const v8631 = stdlib.sub(v3196, v8630);
      const v8632 = stdlib.eq(v8631, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
      const v8633 = v8623 ? true : v8632;
      if (v8633) {
        v8622 = v3191;
        }
      else {
        let v8634;
        if (v8612) {
          v8634 = v3198;
          }
        else {
          const v8636 = stdlib.div(v3196, v3197);
          const v8637 = stdlib.gt(v8636, v3198);
          const v8639 = v8637 ? v3198 : v8636;
          v8634 = v8639;
          }
        const v8640 = stdlib.mul(v3197, v8634);
        const v8641 = stdlib.sub(v3196, v8640);
        const v8642 = stdlib.div(v8641, v3195);
        const v8643 = stdlib.gt(v8642, v3191);
        let v8644;
        if (v8612) {
          v8644 = v3198;
          }
        else {
          const v8646 = stdlib.div(v3196, v3197);
          const v8647 = stdlib.gt(v8646, v3198);
          const v8649 = v8647 ? v3198 : v8646;
          v8644 = v8649;
          }
        const v8650 = stdlib.mul(v3197, v8644);
        const v8651 = stdlib.sub(v3196, v8650);
        const v8652 = stdlib.div(v8651, v3195);
        const v8653 = v8643 ? v8652 : v3191;
        v8622 = v8653;
        }
      const v8654 = stdlib.div(v8230, v8622);
      const v8655 = v8297[stdlib.checkedBigNumberify('./index.rsh:309:122:application', stdlib.UInt_max, '0')];
      const v8656 = v8655[stdlib.checkedBigNumberify('./index.rsh:309:122:application', stdlib.UInt_max, '0')];
      const v8657 = stdlib.le(v8654, v8656);
      const v8658 = v8621 ? v8657 : false;
      const v8667 = stdlib.mul(v8232, v3189);
      const v8668 = stdlib.div(v8667, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v8669 = stdlib.add(v8609, v8668);
      const v8670 = stdlib.eq(v8232, v8669);
      const v8671 = v8658 ? v8670 : false;
      stdlib.assert(v8671, {
        at: './index.rsh:308:14:application',
        fs: ['at ./index.rsh:307:21:application call to [unknown function] (defined at: ./index.rsh:307:21:function exp)'],
        msg: null,
        who: 'Claimant_mintReserve'
        });
      let v8672;
      let v8674;
      if (v8612) {
        v8674 = v3198;
        }
      else {
        const v8676 = stdlib.div(v3196, v3197);
        const v8677 = stdlib.gt(v8676, v3198);
        const v8679 = v8677 ? v3198 : v8676;
        v8674 = v8679;
        }
      const v8680 = stdlib.mul(v3197, v8674);
      const v8681 = stdlib.sub(v3196, v8680);
      const v8682 = stdlib.eq(v8681, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
      const v8683 = v8623 ? true : v8682;
      if (v8683) {
        v8672 = v3191;
        }
      else {
        let v8684;
        if (v8612) {
          v8684 = v3198;
          }
        else {
          const v8686 = stdlib.div(v3196, v3197);
          const v8687 = stdlib.gt(v8686, v3198);
          const v8689 = v8687 ? v3198 : v8686;
          v8684 = v8689;
          }
        const v8690 = stdlib.mul(v3197, v8684);
        const v8691 = stdlib.sub(v3196, v8690);
        const v8692 = stdlib.div(v8691, v3195);
        const v8693 = stdlib.gt(v8692, v3191);
        let v8694;
        if (v8612) {
          v8694 = v3198;
          }
        else {
          const v8696 = stdlib.div(v3196, v3197);
          const v8697 = stdlib.gt(v8696, v3198);
          const v8699 = v8697 ? v3198 : v8696;
          v8694 = v8699;
          }
        const v8700 = stdlib.mul(v3197, v8694);
        const v8701 = stdlib.sub(v3196, v8700);
        const v8702 = stdlib.div(v8701, v3195);
        const v8703 = v8693 ? v8702 : v3191;
        v8672 = v8703;
        }
      const v8704 = stdlib.div(v8230, v8672);
      const v8710 = stdlib.sub(v8656, v8704);
      const v8713 = v8655[stdlib.checkedBigNumberify('./index.rsh:311:145:application', stdlib.UInt_max, '1')];
      const v8714 = v8655[stdlib.checkedBigNumberify('./index.rsh:311:145:application', stdlib.UInt_max, '2')];
      const v8715 = [v8710, v8713, v8714];
      const v8716 = stdlib.Array_set(v8297, stdlib.checkedBigNumberify('./index.rsh:311:145:application', stdlib.UInt_max, '0'), v8715);
      ;
      const v8717 = true;
      const v8718 = await txn1.getOutput('Claimant_mintReserve', 'v8717', ctc3, v8717);
      if (v1894) {
        stdlib.protect(ctc10, await interact.out(v8156, v8718), {
          at: './index.rsh:302:10:application',
          fs: ['at ./index.rsh:302:10:application call to [unknown function] (defined at: ./index.rsh:302:10:function exp)', 'at ./index.rsh:312:8:application call to "k" (defined at: ./index.rsh:307:21:function exp)', 'at ./index.rsh:307:21:application call to [unknown function] (defined at: ./index.rsh:307:21:function exp)'],
          msg: 'out',
          who: 'Claimant_mintReserve'
          });
        }
      else {
        }
      
      let v8724;
      let v8726;
      if (v8612) {
        v8726 = v3198;
        }
      else {
        const v8728 = stdlib.div(v3196, v3197);
        const v8729 = stdlib.gt(v8728, v3198);
        const v8731 = v8729 ? v3198 : v8728;
        v8726 = v8731;
        }
      const v8732 = stdlib.mul(v3197, v8726);
      const v8733 = stdlib.sub(v3196, v8732);
      const v8734 = stdlib.eq(v8733, stdlib.checkedBigNumberify('./index.rsh:151:61:decimal', stdlib.UInt_max, '0'));
      const v8735 = v8623 ? true : v8734;
      if (v8735) {
        v8724 = v3191;
        }
      else {
        let v8736;
        if (v8612) {
          v8736 = v3198;
          }
        else {
          const v8738 = stdlib.div(v3196, v3197);
          const v8739 = stdlib.gt(v8738, v3198);
          const v8741 = v8739 ? v3198 : v8738;
          v8736 = v8741;
          }
        const v8742 = stdlib.mul(v3197, v8736);
        const v8743 = stdlib.sub(v3196, v8742);
        const v8744 = stdlib.div(v8743, v3195);
        const v8745 = stdlib.gt(v8744, v3191);
        let v8746;
        if (v8612) {
          v8746 = v3198;
          }
        else {
          const v8748 = stdlib.div(v3196, v3197);
          const v8749 = stdlib.gt(v8748, v3198);
          const v8751 = v8749 ? v3198 : v8748;
          v8746 = v8751;
          }
        const v8752 = stdlib.mul(v3197, v8746);
        const v8753 = stdlib.sub(v3196, v8752);
        const v8754 = stdlib.div(v8753, v3195);
        const v8755 = v8745 ? v8754 : v3191;
        v8724 = v8755;
        }
      const v8756 = stdlib.div(v8230, v8724);
      const v8757 = stdlib.add(v3195, v8756);
      const v8758 = stdlib.add(v3196, v8230);
      const v8763 = stdlib.add(v8758, v8609);
      const v8768 = stdlib.add(v3188, v8668);
      const v20980 = v8768;
      const v20981 = v3189;
      const v20982 = v3190;
      const v20983 = v3191;
      const v20984 = v3199;
      const v20985 = v3193;
      const v20986 = v3194;
      const v20987 = v8757;
      const v20988 = v8763;
      const v20989 = v3197;
      const v20990 = v3198;
      const v20991 = v3192;
      const v20992 = v3200;
      const v20994 = v8716;
      const v20995 = v8279;
      return;
      
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v8866 = v3893[1];
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_192: ctc7,
    AdminAPI_setAdminFee0_192: ctc8,
    AdminAPI_updatePrice0_192: ctc6,
    Claimant_burnReserve0_192: ctc6,
    Claimant_burnStable0_192: ctc6,
    Claimant_mintFirstStable0_192: ctc6,
    Claimant_mintReserve0_192: ctc6,
    Claimant_mintStable0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v3296 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:275:20:application call to [unknown function] (defined at: ./index.rsh:275:20:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_mintStable0_192" (defined at: ./index.rsh:274:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: 'in',
    who: 'Claimant_mintStable'
    });
  const v3297 = v3296[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v3299;
  const v3300 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
  if (v3300) {
    v3299 = v3198;
    }
  else {
    const v3301 = stdlib.div(v3196, v3197);
    const v3302 = stdlib.gt(v3301, v3198);
    const v3304 = v3302 ? v3198 : v3301;
    v3299 = v3304;
    }
  const v3305 = stdlib.mul(v3197, v3299);
  const v3306 = stdlib.div(v3196, v3305);
  const v3307 = stdlib.ge(v3306, v3193);
  const v3308 = stdlib.mul(v3297, v3200);
  const v3309 = stdlib.div(v3308, stdlib.checkedBigNumberify('./index.rsh:159:31:decimal', stdlib.UInt_max, '100'));
  const v3310 = stdlib.mul(v3309, v3194);
  const v3311 = stdlib.div(v3310, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  const v3312 = stdlib.add(v3196, v3311);
  let v3313;
  if (v3300) {
    v3313 = v3198;
    }
  else {
    const v3315 = stdlib.div(v3312, v3197);
    const v3316 = stdlib.gt(v3315, v3198);
    const v3318 = v3316 ? v3198 : v3315;
    v3313 = v3318;
    }
  const v3319 = stdlib.mul(v3197, v3313);
  const v3320 = stdlib.div(v3312, v3319);
  const v3321 = stdlib.ge(v3320, v3193);
  const v3322 = v3307 ? v3321 : false;
  let v3323;
  if (v3300) {
    v3323 = v3198;
    }
  else {
    const v3325 = stdlib.div(v3196, v3197);
    const v3326 = stdlib.gt(v3325, v3198);
    const v3328 = v3326 ? v3198 : v3325;
    v3323 = v3328;
    }
  const v3329 = stdlib.div(v3297, v3323);
  const v3330 = v3207[stdlib.checkedBigNumberify('./index.rsh:277:89:application', stdlib.UInt_max, '1')];
  const v3331 = v3330[stdlib.checkedBigNumberify('./index.rsh:277:89:application', stdlib.UInt_max, '0')];
  const v3332 = stdlib.le(v3329, v3331);
  const v3333 = v3322 ? v3332 : false;
  const v3342 = stdlib.mul(v3309, v3189);
  const v3343 = stdlib.div(v3342, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
  const v3344 = stdlib.add(v3311, v3343);
  const v3345 = stdlib.eq(v3309, v3344);
  const v3346 = v3333 ? v3345 : false;
  stdlib.assert(v3346, {
    at: './index.rsh:275:29:application',
    fs: ['at ./index.rsh:275:20:application call to [unknown function] (defined at: ./index.rsh:275:20:function exp)', 'at ./index.rsh:275:20:application call to [unknown function] (defined at: ./index.rsh:275:20:function exp)', 'at ./index.rsh:109:17:application call to "runClaimant_mintStable0_192" (defined at: ./index.rsh:274:9:function exp)', 'at ./index.rsh:109:17:application call to [unknown function] (defined at: ./index.rsh:109:17:function exp)'],
    msg: null,
    who: 'Claimant_mintStable'
    });
  const v3350 = ['Claimant_mintStable0_192', v3296];
  
  const v3868 = stdlib.add(v3297, v3309);
  
  const txn1 = await (ctc.sendrecv({
    args: [v3080, v3110, v3146, v3188, v3189, v3190, v3191, v3192, v3193, v3194, v3195, v3196, v3197, v3198, v3199, v3200, v3207, v3208, v3350],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v3868, [[stdlib.checkedBigNumberify('./index.rsh:279:66:decimal', stdlib.UInt_max, '0'), v3146], [stdlib.checkedBigNumberify('./index.rsh:279:89:decimal', stdlib.UInt_max, '0'), v3110]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
      
      switch (v3893[0]) {
        case 'AdminAPI_claimAdminFee0_192': {
          const v3896 = v3893[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_192': {
          const v4606 = v3893[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_192': {
          const v5316 = v3893[1];
          
          break;
          }
        case 'Claimant_burnReserve0_192': {
          const v6026 = v3893[1];
          
          break;
          }
        case 'Claimant_burnStable0_192': {
          const v6736 = v3893[1];
          
          break;
          }
        case 'Claimant_mintFirstStable0_192': {
          const v7446 = v3893[1];
          
          break;
          }
        case 'Claimant_mintReserve0_192': {
          const v8156 = v3893[1];
          
          break;
          }
        case 'Claimant_mintStable0_192': {
          const v8866 = v3893[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_mintStable"
            });
          const v8954 = v8866[stdlib.checkedBigNumberify('./index.rsh:274:9:spread', stdlib.UInt_max, '0')];
          const v8955 = stdlib.mul(v8954, v3200);
          const v8956 = stdlib.div(v8955, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
          const v8957 = stdlib.add(v8954, v8956);
          const v8989 = stdlib.add(v3208, v8957);
          sim_r.txns.push({
            amt: v8957,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v8990 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v8991 = v8990[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v8995 = v8990[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v8996 = v8990[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v8997 = [v8991, v8995, v8996];
          const v8998 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v8997);
          ;
          const v8999 = v8998[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v9000 = v8999[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
          const v9004 = v8999[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
          const v9005 = v8999[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
          const v9006 = [v9000, v9004, v9005];
          const v9007 = stdlib.Array_set(v8998, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v9006);
          ;
          const v9483 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
          const v9493 = stdlib.mul(v8956, v3194);
          const v9494 = stdlib.div(v9493, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          const v9513 = v9007[stdlib.checkedBigNumberify('./index.rsh:283:91:application', stdlib.UInt_max, '1')];
          const v9514 = v9513[stdlib.checkedBigNumberify('./index.rsh:283:91:application', stdlib.UInt_max, '0')];
          const v9525 = stdlib.mul(v8956, v3189);
          const v9526 = stdlib.div(v9525, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
          let v9530;
          if (v9483) {
            v9530 = v3198;
            }
          else {
            const v9532 = stdlib.div(v3196, v3197);
            const v9533 = stdlib.gt(v9532, v3198);
            const v9535 = v9533 ? v3198 : v9532;
            v9530 = v9535;
            }
          const v9536 = stdlib.div(v8954, v9530);
          const v9542 = stdlib.sub(v9514, v9536);
          const v9545 = v9513[stdlib.checkedBigNumberify('./index.rsh:286:54:application', stdlib.UInt_max, '1')];
          const v9546 = v9513[stdlib.checkedBigNumberify('./index.rsh:286:54:application', stdlib.UInt_max, '2')];
          const v9547 = [v9542, v9545, v9546];
          const v9548 = stdlib.Array_set(v9007, stdlib.checkedBigNumberify('./index.rsh:286:54:application', stdlib.UInt_max, '1'), v9547);
          sim_r.txns.push({
            kind: 'from',
            to: v3892,
            tok: v3146
            });
          const v9549 = true;
          const v9550 = await txn1.getOutput('Claimant_mintStable', 'v9549', ctc3, v9549);
          
          let v9556;
          if (v9483) {
            v9556 = v3198;
            }
          else {
            const v9558 = stdlib.div(v3196, v3197);
            const v9559 = stdlib.gt(v9558, v3198);
            const v9561 = v9559 ? v3198 : v9558;
            v9556 = v9561;
            }
          const v9562 = stdlib.div(v8954, v9556);
          const v9563 = stdlib.add(v3197, v9562);
          const v9564 = stdlib.add(v3196, v8954);
          const v9569 = stdlib.add(v9564, v9494);
          const v9574 = stdlib.add(v3188, v9526);
          const v21124 = v9574;
          const v21125 = v3189;
          const v21126 = v3190;
          const v21127 = v3191;
          const v21128 = v3199;
          const v21129 = v3193;
          const v21130 = v3194;
          const v21131 = v3195;
          const v21132 = v9569;
          const v21133 = v9563;
          const v21134 = v3198;
          const v21135 = v3192;
          const v21136 = v3200;
          const v21138 = v9548;
          const v21139 = v8989;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3893], secs: v3895, time: v3894, didSend: v1894, from: v3892 } = txn1;
  switch (v3893[0]) {
    case 'AdminAPI_claimAdminFee0_192': {
      const v3896 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_192': {
      const v4606 = v3893[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_192': {
      const v5316 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_192': {
      const v6026 = v3893[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_192': {
      const v6736 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintFirstStable0_192': {
      const v7446 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_192': {
      const v8156 = v3893[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_192': {
      const v8866 = v3893[1];
      undefined /* setApiDetails */;
      const v8954 = v8866[stdlib.checkedBigNumberify('./index.rsh:274:9:spread', stdlib.UInt_max, '0')];
      const v8955 = stdlib.mul(v8954, v3200);
      const v8956 = stdlib.div(v8955, stdlib.checkedBigNumberify('./index.rsh:162:30:decimal', stdlib.UInt_max, '100'));
      const v8957 = stdlib.add(v8954, v8956);
      const v8989 = stdlib.add(v3208, v8957);
      ;
      const v8990 = v3207[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v8991 = v8990[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v8995 = v8990[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v8996 = v8990[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v8997 = [v8991, v8995, v8996];
      const v8998 = stdlib.Array_set(v3207, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1'), v8997);
      ;
      const v8999 = v8998[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v9000 = v8999[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0')];
      const v9004 = v8999[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '1')];
      const v9005 = v8999[stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '2')];
      const v9006 = [v9000, v9004, v9005];
      const v9007 = stdlib.Array_set(v8998, stdlib.checkedBigNumberify('./index.rsh:109:17:dot', stdlib.UInt_max, '0'), v9006);
      ;
      let v9482;
      const v9483 = stdlib.eq(v3197, stdlib.checkedBigNumberify('./index.rsh:131:23:decimal', stdlib.UInt_max, '0'));
      if (v9483) {
        v9482 = v3198;
        }
      else {
        const v9484 = stdlib.div(v3196, v3197);
        const v9485 = stdlib.gt(v9484, v3198);
        const v9487 = v9485 ? v3198 : v9484;
        v9482 = v9487;
        }
      const v9488 = stdlib.mul(v3197, v9482);
      const v9489 = stdlib.div(v3196, v9488);
      const v9490 = stdlib.ge(v9489, v3193);
      const v9493 = stdlib.mul(v8956, v3194);
      const v9494 = stdlib.div(v9493, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v9495 = stdlib.add(v3196, v9494);
      let v9496;
      if (v9483) {
        v9496 = v3198;
        }
      else {
        const v9498 = stdlib.div(v9495, v3197);
        const v9499 = stdlib.gt(v9498, v3198);
        const v9501 = v9499 ? v3198 : v9498;
        v9496 = v9501;
        }
      const v9502 = stdlib.mul(v3197, v9496);
      const v9503 = stdlib.div(v9495, v9502);
      const v9504 = stdlib.ge(v9503, v3193);
      const v9505 = v9490 ? v9504 : false;
      let v9506;
      if (v9483) {
        v9506 = v3198;
        }
      else {
        const v9508 = stdlib.div(v3196, v3197);
        const v9509 = stdlib.gt(v9508, v3198);
        const v9511 = v9509 ? v3198 : v9508;
        v9506 = v9511;
        }
      const v9512 = stdlib.div(v8954, v9506);
      const v9513 = v9007[stdlib.checkedBigNumberify('./index.rsh:283:91:application', stdlib.UInt_max, '1')];
      const v9514 = v9513[stdlib.checkedBigNumberify('./index.rsh:283:91:application', stdlib.UInt_max, '0')];
      const v9515 = stdlib.le(v9512, v9514);
      const v9516 = v9505 ? v9515 : false;
      const v9525 = stdlib.mul(v8956, v3189);
      const v9526 = stdlib.div(v9525, stdlib.checkedBigNumberify('./index.rsh:159:46:decimal', stdlib.UInt_max, '100'));
      const v9527 = stdlib.add(v9494, v9526);
      const v9528 = stdlib.eq(v8956, v9527);
      const v9529 = v9516 ? v9528 : false;
      stdlib.assert(v9529, {
        at: './index.rsh:281:16:application',
        fs: ['at ./index.rsh:280:23:application call to [unknown function] (defined at: ./index.rsh:280:23:function exp)'],
        msg: null,
        who: 'Claimant_mintStable'
        });
      let v9530;
      if (v9483) {
        v9530 = v3198;
        }
      else {
        const v9532 = stdlib.div(v3196, v3197);
        const v9533 = stdlib.gt(v9532, v3198);
        const v9535 = v9533 ? v3198 : v9532;
        v9530 = v9535;
        }
      const v9536 = stdlib.div(v8954, v9530);
      const v9542 = stdlib.sub(v9514, v9536);
      const v9545 = v9513[stdlib.checkedBigNumberify('./index.rsh:286:54:application', stdlib.UInt_max, '1')];
      const v9546 = v9513[stdlib.checkedBigNumberify('./index.rsh:286:54:application', stdlib.UInt_max, '2')];
      const v9547 = [v9542, v9545, v9546];
      const v9548 = stdlib.Array_set(v9007, stdlib.checkedBigNumberify('./index.rsh:286:54:application', stdlib.UInt_max, '1'), v9547);
      ;
      const v9549 = true;
      const v9550 = await txn1.getOutput('Claimant_mintStable', 'v9549', ctc3, v9549);
      if (v1894) {
        stdlib.protect(ctc10, await interact.out(v8866, v9550), {
          at: './index.rsh:274:10:application',
          fs: ['at ./index.rsh:274:10:application call to [unknown function] (defined at: ./index.rsh:274:10:function exp)', 'at ./index.rsh:287:10:application call to "k" (defined at: ./index.rsh:280:23:function exp)', 'at ./index.rsh:280:23:application call to [unknown function] (defined at: ./index.rsh:280:23:function exp)'],
          msg: 'out',
          who: 'Claimant_mintStable'
          });
        }
      else {
        }
      
      let v9556;
      if (v9483) {
        v9556 = v3198;
        }
      else {
        const v9558 = stdlib.div(v3196, v3197);
        const v9559 = stdlib.gt(v9558, v3198);
        const v9561 = v9559 ? v3198 : v9558;
        v9556 = v9561;
        }
      const v9562 = stdlib.div(v8954, v9556);
      const v9563 = stdlib.add(v3197, v9562);
      const v9564 = stdlib.add(v3196, v8954);
      const v9569 = stdlib.add(v9564, v9494);
      const v9574 = stdlib.add(v3188, v9526);
      const v21124 = v9574;
      const v21125 = v3189;
      const v21126 = v3190;
      const v21127 = v3191;
      const v21128 = v3199;
      const v21129 = v3193;
      const v21130 = v3194;
      const v21131 = v3195;
      const v21132 = v9569;
      const v21133 = v9563;
      const v21134 = v3198;
      const v21135 = v3192;
      const v21136 = v3200;
      const v21138 = v9548;
      const v21139 = v8989;
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
    impure: [`AdminAPI_claimAdminFee()byte`, `AdminAPI_setAdminFee(uint64,uint64)byte`, `AdminAPI_updatePrice(uint64)byte`, `Claimant_burnReserve(uint64)byte`, `Claimant_burnStable(uint64)byte`, `Claimant_mintFirstStable(uint64)byte`, `Claimant_mintReserve(uint64)byte`, `Claimant_mintStable(uint64)byte`],
    pure: [`Viewer_read()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`],
    sigs: [`AdminAPI_claimAdminFee()byte`, `AdminAPI_setAdminFee(uint64,uint64)byte`, `AdminAPI_updatePrice(uint64)byte`, `Claimant_burnReserve(uint64)byte`, `Claimant_burnStable(uint64)byte`, `Claimant_mintFirstStable(uint64)byte`, `Claimant_mintReserve(uint64)byte`, `Claimant_mintStable(uint64)byte`, `Viewer_read()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`]
    },
  appApproval: `BiAdAGQBCAQDSCAoMDigjQbX2I/2Cfe5zagN7bbE1Q3PsKL5DRDOwNzDCp3eg/4ClInhpAav89yQAkBQWGBoBwX///////////8BJgMBAQEAACI1ADEYQRFjKmRJIls1ASVbNQI2GgAXSUEBRyI1BCQ1BkkhDAxAAIFJIQ0MQABJSSEODEAALUkhDwxAABIhDxJEKjX/KTT/UCEQr1BCATEhDhJENhoBNhoCUDX/KDT/UEIBHSENEkQ2GgE1/4ABBTT/UCWvUEIBCEkhEQxAABUhERJENhoBNf+AAQY0/1Alr1BCAOwhDBJENhoBNf+AAQM0/1Alr1BCANdJIRIMQAB+SSETDEAAFSETEkQ2GgE1/4ABAjT/UCWvUEIAtCESEkQ0ASEEEkQpZChkUEk1A1doCDQDV3gIUDQDV3AIUDQDV5AIUDQDVzgIUDQDV2AIUDQDVzAIUDQDV4AIUDQDV4gIUDQDV1AIUDQDV0gIUDQDV1gIUDQDV0AIUDUHQhA1SSEUDEAAFSEUEkQ2GgE1/4ABBDT/UCWvUEIANoHxgORVEkQ2GgE1/4ABBzT/UCWvUEIAHjYaAhc1BDYaAzYaARdJJAxADMhJIQUMQAxHIQUSRCEENAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSkpXACA1/yEHWzX+IQhbNf0hCVs1/CEKWzX7IRVbNfohBls1+SEWWzX4IRdbNfchGFs19iEZWzX1gXBbNfSBeFs184GAAVs18oGIAVs18YGQAVs18FeYIjXvgboBWzXuSTUFNe2ABDQgZdg07VCwNO0iVUkhBAxAB6BJgQYMQATLSSEaDEABySEaEkQ07VcBCDXiNOIXSTXhNPALIwo14DThNOAINd8034gPPTTvVxERNd4071cAETTeVwAINN5XCAhQNN5XEAFQUDXdNN1XABFJNdxXAAg03FcICFA03FcQAVA03VcREVA12zTzIhJJNdlBAAc08jXaQgASNPQ08wpJNdg08jTYNPINTTXaNOA09gsjCjXYNPQ02Ag11zTZQQAHNPI11kIAEjTXNPMKSTXVNPI01TTyDU011jTZQQAHNPI11UIAEjT0NPMKSTXUNPI01DTyDU011TTbVxERSTXUIls10zTgNPsLIwo10jT0NPM02gsKNPcPNNc08zTWCwo09w8QNOE01Qo00w4QNOA02DTSCBIQRDTZQQAHNPI10UIAEjT0NPMKSTXQNPI00DTyDU010TThNNEKNdCxIrIBNNCyEiEEshAxALIUNP2yEbOACQAAAAAAACVNAbAoNQc02UEABzTyNc9CABI09DTzCkk1zjTyNM408g1NNc80/zT+NP00/DTSCDT7NPo0+TTxNPc09jT1NPQ04Qg02Ag08zThNM8KCDTyNPg08DIGNNtXABE00zTQCRY01FcICFA01FcQAVBQNO403whCDKZINO1XAQg14jTiF0k14TTwCyMKNeA04TTgCDXfNN+IDXc071cRETXeNO9XABE03lcACDTeVwgIUDTeVxABUFA13TTdVwARSTXcVwAINNxXCAhQNNxXEAFQNN1XERFQNds04DT2CyMKNdo09DTaCDXZNPMiEkk110EABzTyNdhCABI02TTzCkk11jTyNNY08g1NNdg09SISNdU010EABzTyNdRCABI09DTzCkk10zTyNNM08g1NNdQ01TT0NPM01AsJIhIRQQAHNPk11kIAWjTXQQAHNPI100IAEjT0NPMKSTXSNPI00jTyDU010zTXQQAHNPI10kIAEjT0NPMKSTXRNPI00TTyDU010jT5NPQ08zTSCwk09Qo09DTzNNMLCTT1CjT5DU011jTbVwARSTXTIls10jTgNPsLIwo10TTZNPM02AsKNPoONPM08QwRNOE01go00g4QNOA02jTRCBIQRDTXQQAHNPI1z0IAEjT0NPMKSTXONPI0zjTyDU01zzTVNPQ08zTPCwkiEhFBAAc0+TXQQgBaNNdBAAc08jXOQgASNPQ08wpJNc008jTNNPINTTXONNdBAAc08jXNQgASNPQ08wpJNcw08jTMNPINTTXNNPk09DTzNM0LCTT1CjT0NPM0zgsJNPUKNPkNTTXQNOE00Ao1zrEisgE0zrISIQSyEDEAshQ0/rIRs4AJAAAAAAAAIg0BsCg1BzTXQQAHNPI1zEIAEjT0NPMKSTXLNPI0yzTyDU01zDTVNPQ08zTMCwkiEhFBAAc0+TXNQgBaNNdBAAc08jXLQgASNPQ08wpJNco08jTKNPINTTXLNNdBAAc08jXKQgASNPQ08wpJNck08jTJNPINTTXKNPk09DTzNMoLCTT1CjT0NPM0ywsJNPUKNPkNTTXNNP80/jT9NPw00Qg0+zT6NPk08TT3NPY09TThNM0KCDT0NOEINNoINPM08jT4NPAyBjTSNM4JFjTTVwgIUDTTVxABUDTbVxERUDTuNN8IQgmrSSEbDEABL0g07VcBCDXiNOIXSTXhNPALIwo14DThNOAINd8034gKdTTvVxERNd4071cAETTeVwAINN5XCAhQNN5XEAFQUDXdNN1XABFJNdxXAAg03FcICFA03FcQAVA03VcREVA12zTzIhJJNdpBAAc08jXZQgASNPQ08wpJNdg08jTYNPINTTXZNNtXERFJNdgiWzXXNOA09gsjCjXWNOA0+wsjCjXVNNo04TTZCjTXDhA04DTWNNUIEhBENOE08go11LEisgE01LISIQSyEDEAshQ0/bIRs4AJAAAAAAAAHsEBsCg1BzT/NP40/TT8NNUINPs0+jT5NPE09zT2NPU09DThCDTWCDTzNNQINPI0+DTwMgY021cAETTXNNQJFjTYVwgIUDTYVxABUFA07jTfCEIIdUg07VcBCDXiNOIXNeE071cRETXgNO9XABE04CJbNOEIFjTgVwgIUDTgVxABUFA13zThNP2ICUg031cAETXeNPMiEkk13EEABzTyNd1CABI09DTzCkk12zTyNNs08g1NNd004TTdCkk12zTwCyMKNdo03EEABzTyNdlCABI09DTzCkk12DTyNNg08g1NNdk07jTbDzTaSTT2CyMKNOE02Qo08AsjCjT7CyMKCBIQRDTbNNoJNdixIrIBNNiyCCSyEDEAsgezgAkAAAAAAAAbqgGwKDUHNNxBAAc08jXXQgASNPQ08wpJNdY08jTWNPINTTXXNNxBAAc08jXWQgASNPQ08wpJNdU08jTVNPINTTXWNNxBAAc08jXVQgASNPQ08wpJNdQ08jTUNPINTTXVNP80/jT9NPw04TTVCjTwCyMKNPsLIwoINPs0+jT5NPE09zT2NPU09DThNNcKCTThNNYKNPALIwo09gsjCgg08zThCTTyNPg08DIGNN5XAAg03lcICFA03lcQAVA031cREVA07jTYCUIG3UmBAgxAAs1JIQUMQAI8SDTtVwEINeI04hc14TTvVxERNeA071cAETTgVwAINOBXCAhQNOBXEAFQUDXfNN9XABE13jThNP6IB5409SISNdw08yISSTXaQQAHNPI120IAEjT0NPMKSTXZNPI02TTyDU012zTcNPQ08zTbCwkiEhFBAAc0+TXdQgBaNNpBAAc08jXZQgASNPQ08wpJNdg08jTYNPINTTXZNNpBAAc08jXYQgASNPQ08wpJNdc08jTXNPINTTXYNPk09DTzNNgLCTT1CjT0NPM02QsJNPUKNPkNTTXdNOE03QpJNdk08AsjCjXYNNpBAAc08jXXQgASNPQ08wpJNdY08jTWNPINTTXXNNpBAAc08jXVQgASNPQ08wpJNdQ08jTUNPINTTXVNNw09DTzNNULCSISEUEABzT5NdZCAFo02kEABzTyNdRCABI09DTzCkk10zTyNNM08g1NNdQ02kEABzTyNdNCABI09DTzCkk10jTyNNI08g1NNdM0+TT0NPM00wsJNPUKNPQ08zTUCwk09Qo0+Q1NNdY02DT2CyMKNdQ02DT7CyMKNdM09DTzNNcLCjT3DzThNNYKIg0QNO402Q8QNNg01DTTCBIQRDTZNNgJNdKxIrIBNNKyCCSyEDEAsgezgAkAAAAAAAAYqgGwKDUHNP80/jT9NPw00wg0+zT6NPk08TT3NPY09TThCTT0NNkJNNQINPM08jT4NPAyBjTeIls04QgWNN5XCAhQNN5XEAFQNN9XERFQNO400glCBJNINO1XAQg14jTvVxERNeE071cAETThVwAINOFXCAhQNOFXEAFQUDXgNOBXABE13zTiF0k13iINMQA0/xIQRIAJAAAAAAAAFXYBsCg1BzT/NP40/TT8NPs0+jT5NPE09zT2NPU09DTzNN5JNPAyBjTfVwAINN9XCAhQNN9XEAFQNOBXERFQNO5CBAlJJAxAAKJINO1XARA14jTvVxERNeE071cAETThVwAINOFXCAhQNOFXEAFQUDXgNOBXABE13zTiIls13jTiJVs13TTeNN0IIxJEsSKyATT8sggkshA0/7IHs4AJAAAAAAAAEqIBsCg1BzT/NP40/SI03jT6NPk0+DT3NN009TT0NPM08jTxNPAyBjTfVwAINN9XCAhQNN9XEAFQNOBXERFQNO40/AlCA2FINO9XERE14jTvVwARNOJXAAg04lcICFA04lcQAVBQNeE04VcAETXgMQA0/xJEsSKyATT8sggkshA0/7IHs4AJAAAAAAAAD8wBsCg1BzT/NP40/SI0+zT6NPk0+DT3NPY09TT0NPM08jTxNPAyBjTgVwAINOBXCAhQNOBXEAFQNOFXERFQNO40/AlCAtQkEkQkNAESRDQESSISTDQCEhFEKWQoZFBJNQNXACA1/4AEmouRdLA0/zEAEkQ0AyEGW4HAhD0KNf40/zQDIRhbNAMhGVsiNAMhCFs0AyEVWzQDIRZbNAMhF1s0AyEKWzQDIQlbIiIiNP5JNAMhB1syBjQDV3AiIkICWkghC4gDRiI0ARJENARJIhJMNAISEURJNQVJSkpKSiJbNf8lWzX+IRBbNf2BGFs1/CEHWzX7IQhbNfohCVs1+SEKWzX4V0C4NfdX+Lg19oAE4PiDGzT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlA0+BZQNPdQNPZQsIERr0k19UlQNfQ0/jT9CCMSRDT3IQZbSTXzIg1ENPYhBltJNfIiDUQ08yEcEkQ08iEcEkQhC4gCmLEisgEhBbIQNPOyIjT3IluyIzT3V1AIsiU091coILImNPdXWGCyJzT3VwggsigyCrIps7Q8NfGACAAAAAAAAAwlNPEWULA08TXwNPRXABE17zTzFjTvVwgIUDTvVxABUDT0VxERUEk17lcAEUk17VcACDTzFlA07VcQAVA07lcREVBJNexXABFJNetXAAg061cICFApUDTsVxERUDXqIQuIAfWxIrIBIQWyEDTysiI09iJbsiM09ldQCLIlNPZXKCCyJjT2V1hgsic09lcIILIoMgqyKbO0PDXpgAgAAAAAAAAMSTTpFlCwNOlJNeg08BYiWxNENOpXERE15zTqVwARNPIWNOdXCAhQNOdXEAFQUEk15lcRETXlNOZXABE05VcACDTyFlA05VcQAVBQSTXkVxERNeM05FcAETTjVwAINONXCAhQKVBQSTXiVxERIls08hJENOJXABEiWzTzEkQxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlA0+BZQNPAWUDToFlA04lApSwFXAH9nKEsBV38TZ0gkNQEyBjUCQgCgNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuSTXtNO4WUDTvFlA08BZQNPEWUDTyFlA08xZQNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP5QNP8WUClLAVcAf2coSwFXf0NnSCEENQEyBjUCQgAcMRkhGxJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 194,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:91:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:383:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:109:17:after expr stmt semicolon',
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
