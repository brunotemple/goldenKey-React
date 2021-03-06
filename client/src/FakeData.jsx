const fakeUser = {
    email:'test@test.com',
    password:'password123',
    firstName:'Bruno',
    lastName:'Temple',
}

const fakeBankList = [
    { name:'Itau',userEmail:'test@test.com' },
    { name:'Xp Investimentos',userEmail:'test@test.com' },
    { name:'BMO',userEmail:'test@test.com' }
]

const fakeAccountList = [
    {accountType:0,userEmail:'test@test.com',bankName:'Itau',title:'DI Itau',description:'Fundos de Investimento Baixo Risco'},
    {accountType:0,userEmail:'test@test.com',bankName:'Itau',title:'Acoes',description:'Fundos de Investimento Alto Risco'},
    {accountType:0,userEmail:'test@test.com',bankName:'Itau',title:'Multimercado',description:'Fundos de Investimento Medio Risco'},
    {accountType:0,userEmail:'test@test.com',bankName:'Itau',title:'Previdencia Privada',description:'Previdencia Privada Itau'},
    {accountType:0,userEmail:'test@test.com',bankName:'Xp Investimentos',title:'CDB XP',description:'CDB XP Baixo Risco'},
    {accountType:0,userEmail:'test@test.com',bankName:'Xp Investimentos',title:'COE XP',description:'COE XP XP'},
    {accountType:0,userEmail:'test@test.com',bankName:'Xp Investimentos',title:'DLM Hedge',description:'DLM Hedge'},
    {accountType:0,userEmail:'test@test.com',bankName:'Xp Investimentos',title:'Truxt',description:'Truxt'},
    {accountType:0,userEmail:'test@test.com',bankName:'Xp Investimentos',title:'Long Short XP',description:'Long Short XP'},
]

const fakeTransactionList = [
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-04-01', amount:47531.82},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-04-09', amount:50415.08},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-04-25', amount:50417.08},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-04-15', amount:50416.08},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-04-30', amount:50530.75},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-05-30', amount:38668.41},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-05-03', amount:38563.17},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-06-01', amount:43668.41},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-06-30', amount:43917.73},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-07-30', amount:41310.93},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-08-30', amount:53623.31},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-09-30', amount:46469.84},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-10-30', amount:46030.68},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-11-30', amount:17510.32},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2018-12-30', amount:17543.06},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2019-01-30', amount:27927.24},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2019-02-28', amount:23973.67},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2019-03-30', amount:24048.48},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2019-04-05', amount:24602.44},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-04-01', amount:20178.82},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-04-09', amount:20738.11},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-04-25', amount:20739.11},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-04-15', amount:20740.11},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-04-30', amount:20428.28},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-05-30', amount:19725.1},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-05-03', amount:18171.98},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-06-01', amount:18171.98},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-06-30', amount:15876.2},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-07-30', amount:18633.53},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-08-30', amount:17830.01},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-09-30', amount:18094.85},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-10-30', amount:20145.2},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-11-30', amount:22385.72},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2018-12-30', amount:21930.65},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2019-01-30', amount:23397.63},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2019-02-28', amount:24545.77},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2019-03-30', amount:23134.03},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2019-04-05', amount:44295.61},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-04-01', amount:17758.8},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-04-09', amount:17758.8},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-04-25', amount:17758.8},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-04-15', amount:17758.8},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-04-30', amount:17868.93},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-05-30', amount:17868.93},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-05-03', amount:18072.33},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-06-01', amount:32072.33},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-06-30', amount:32308.84},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-07-30', amount:32650.99},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-08-30', amount:32955.27},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-09-30', amount:33252.85},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-10-30', amount:33530.55},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-11-30', amount:40875.05},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2018-12-30', amount:41055.87},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2019-01-30', amount:41453.36},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2019-02-28', amount:41854.98},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2019-03-30', amount:42091.19},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2019-04-05', amount:42328.82},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-04-01', amount:17021.19},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-04-09', amount:20531.91},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-04-25', amount:20532.91},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-04-15', amount:20533.91},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-04-30', amount:20610.95},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-05-30', amount:20637.55},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-05-03', amount:20615.21},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-06-01', amount:615.21},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-06-30', amount:573.43},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-07-30', amount:576.93},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-08-30', amount:626.31},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-09-30', amount:628.72},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-10-30', amount:685.35},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-11-30', amount:938.12},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2018-12-30', amount:938.55},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2019-01-30', amount:1150.56},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2019-02-28', amount:2160.51},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2019-03-30', amount:2166.38},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2019-04-05', amount:4160.49},  
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-04-01', amount:113938.27},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-04-09', amount:113978.04},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-04-25', amount:113979.04},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-04-15', amount:113980.04},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-04-30', amount:114185.55},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-05-30', amount:114324.88},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-05-03', amount:114141.97},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-06-01', amount:114142.00},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-06-30', amount:114104.18},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-07-30', amount:114960.72},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-08-30', amount:115363.56},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-09-30', amount:115883.85},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-10-30', amount:116859.58},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-11-30', amount:117308.93},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2018-12-30', amount:117668.70},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2019-01-30', amount:118337.85},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2019-02-28', amount:119345.26},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2019-03-30', amount:119776.02},
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2019-04-05', amount:120104.08},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-04-01', amount:17758.8},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-04-09', amount:17758.8},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-04-25', amount:17758.8},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-04-15', amount:17758.8},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-04-30', amount:17868.93},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-05-30', amount:17868.93},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-05-03', amount:18072.33},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-06-01', amount:32072.33},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-06-30', amount:32308.84},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-07-30', amount:32650.99},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-08-30', amount:32955.27},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-09-30', amount:33252.85},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-10-30', amount:33530.55},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-11-30', amount:40875.05},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2018-12-30', amount:41055.87},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2019-01-30', amount:41453.36},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2019-02-28', amount:41854.98},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2019-03-30', amount:42091.19},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2019-04-05', amount:42328.82},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-04-01', amount:40568.08},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-04-09', amount:40568.08},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-04-25', amount:40568.08},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-04-15', amount:40568.08},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-04-30', amount:40713.46},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-05-30', amount:59758.87},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-05-03', amount:59895.23},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-06-01', amount:60845.23},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-06-30', amount:61106.76},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-07-30', amount:61399.22},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-08-30', amount:61968.01},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-09-30', amount:47285.45},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-10-30', amount:47519.51},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-11-30', amount:47781.05},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2018-12-30', amount:47904.59},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2019-01-30', amount:18128.73},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2019-02-28', amount:18229.17},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2019-03-30', amount:18281.38},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2019-04-05', amount:18343.29},    
    {userEmail:'test@test.com',accountTitle:'Truxt', date:'2018-09-30', amount:20109.06},
    {userEmail:'test@test.com',accountTitle:'Truxt', date:'2018-10-30', amount:20086.84},
    {userEmail:'test@test.com',accountTitle:'Truxt', date:'2018-11-30', amount:20037.46},
    {userEmail:'test@test.com',accountTitle:'Truxt', date:'2018-12-30', amount:19984.48},
    {userEmail:'test@test.com',accountTitle:'Truxt', date:'2019-01-30', amount:20238.03},
    {userEmail:'test@test.com',accountTitle:'Truxt', date:'2019-02-28', amount:0.01},
    {userEmail:'test@test.com',accountTitle:'Truxt', date:'2019-03-30', amount:0.01},
    {userEmail:'test@test.com',accountTitle:'Truxt', date:'2019-04-05', amount:20000.00},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-04-01', amount:43596.02},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-04-09', amount:43596.02},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-04-25', amount:43596.02},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-04-15', amount:43596.02},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-04-30', amount:43889.14},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-05-30', amount:59209.59},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-05-03', amount:58659.58},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-06-01', amount:58659.58},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-06-30', amount:58799.36},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-07-30', amount:59172.67},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-08-30', amount:58755.14},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-09-30', amount:58790.58},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-10-30', amount:59941.19},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-11-30', amount:52510.05},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2018-12-30', amount:52066.81},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2019-01-30', amount:52843.86},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2019-02-28', amount:33267.81},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2019-03-30', amount:33535.69},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2019-04-05', amount:33307.95},
    {userEmail:'test@test.com',accountTitle:'DI Itau', date:'2019-04-20', amount:24628.53},
    {userEmail:'test@test.com',accountTitle:'Multimercado', date:'2019-04-20', amount:4158.21},  
    {userEmail:'test@test.com',accountTitle:'Previdencia Privada', date:'2019-04-20', amount:120184.07},
    {userEmail:'test@test.com',accountTitle:'Acoes', date:'2019-04-20', amount:42764.96},
    {userEmail:'test@test.com',accountTitle:'COE XP', date:'2019-04-20', amount:20000.00},
    {userEmail:'test@test.com',accountTitle:'CDB XP', date:'2019-04-20', amount:42482.34},
    {userEmail:'test@test.com',accountTitle:'DLM Hedge', date:'2019-04-20', amount:18377.06},
    {userEmail:'test@test.com',accountTitle:'Truxt', date:'2019-04-20', amount:20008.92},
    {userEmail:'test@test.com',accountTitle:'Long Short XP', date:'2019-04-20', amount:33311.92},
] 


export { fakeUser, fakeBankList, fakeAccountList, fakeTransactionList }
