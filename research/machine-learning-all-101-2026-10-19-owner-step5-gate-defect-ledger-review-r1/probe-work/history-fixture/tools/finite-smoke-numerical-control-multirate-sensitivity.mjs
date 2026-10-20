// Research-only proposal. No imports of canonical item/contract state, no execution here.
// Fixed bounded sanity models only: these are not analytic/general proof checks.
import {q,qadd,qsub,qmul,qdiv,qcmp,close} from './finite-smoke-numerical-core.mjs';
const expect=(p,m)=>{if(!p)throw new Error(m);};
const eq=(a,b,m)=>expect(qcmp(a,b)===0,m);
const sum=xs=>xs.reduce(qadd,q(0)), mean=xs=>qdiv(sum(xs),q(xs.length)), square=x=>qmul(x,x);
const dot=(a,b)=>sum(a.map((v,i)=>qmul(v,b[i])));
const variance=xs=>{const m=mean(xs);return mean(xs.map(v=>square(qsub(v,m))));};
function projection(rows,values,mask) {
 const key=row=>row.filter((_,i)=>mask&(1<<i)).join(',');
 const groups=new Map();rows.forEach((r,i)=>{const k=key(r);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(values[i]);});
 const averages=new Map([...groups].map(([k,vs])=>[k,mean(vs)]));return rows.map(r=>averages.get(key(r)));
}
const signs=[[-1,-1],[-1,1],[1,-1],[1,1]];
const control={
 'heat-three-node-mode-and-box-projection'() {
  const lambda=Math.PI**2+1;
  for(const x of [0,.5,1]) {
   const s=Math.sin(Math.PI*x),qstar=s/2,ustar=qstar/lambda,pstar=-qstar,ud=ustar+lambda*s/2;
   // Derivative values of the stipulated finite trigonometric mode, not a PDE solve.
   const udd=-(Math.PI**2)*ustar,pdd=-(Math.PI**2)*pstar;
   expect(close(-udd+ustar,qstar),'heat mode state equation');
   expect(close(-pdd+pstar,ustar-ud),'heat mode adjoint equation');
   expect(close(Math.min(1,Math.max(0,-pstar)),qstar),'heat box projection');
   expect(qstar>=-1e-14&&qstar<=1+1e-14,'heat control bounds');
  }
  expect(close(Math.sin(0),0)&&close(Math.sin(Math.PI),0),'heat endpoint trace sanity');
  return 'three nodes0,1/2,1: stipulated sine-mode state/adjoint coefficient identities and box projection; no continuum optimality proof';
 }
};
const multirate={
 'coupled-fast-two-microsteps'() {
  const H=q(3,5),h=qdiv(H,q(2)),x=q(1);let z=q(1);let slowCalls=0,fastCalls=0;
  const f=x=>{slowCalls++;return qmul(q(-1),x);},g=(x,z)=>{fastCalls++;return qsub(x,qmul(q(8),z));};
  const xp=qadd(x,qmul(H,f(x))),path=[];
  for(let j=0;j<2;j++){z=qadd(z,qmul(h,g(x,z)));path.push(z);}
  eq(xp,q(2,5),'coupled slow update');eq(path[0],q(-11,10),'coupled first fast update');eq(path[1],q(46,25),'coupled second fast update');
  const multiplier=qsub(q(1),qmul(q(8),h));eq(multiplier,q(-7,5),'fast perturbation multiplier');expect(qcmp(square(multiplier),q(1))>0,'fast perturbation must expand');
  expect(slowCalls===1&&fastCalls===2,'actual one-slow two-fast call count');
  return 'exact rational H=3/5,m=2, both microstates and multiplier -7/5; one slow/two fast calls';
 },
 'frozen-versus-midpoint-macro-nodes'() {
  // Include original declarative T=2,N=1 case as well as the bounded grid.
  const cases=[... [1,2,4].flatMap(N=>[1,2,5].map(m=>({T:1,N,m}))),{T:2,N:1,m:1}];
  for(const {T,N,m} of cases) {
   const H=q(T,N),h=qdiv(H,q(m));let x=q(0),z=q(0),mid=q(0);
   for(let n=0;n<N;n++) {
    // All fast calls in a macro block read the same pre-update x.
    for(let j=0;j<m;j++){z=qadd(z,qmul(h,x));const sample=qadd(x,qmul(q(2*j+1,2),h));mid=qadd(mid,qmul(h,sample));}
    x=qadd(x,H);eq(x,qmul(q(n+1),H),'frozen node x');eq(mid,qdiv(square(x),q(2)),'midpoint exact macro node');
   }
   const exact=q(T*T,2),error=qsub(exact,z),formula=qdiv(qmul(q(T),H),q(2));
   eq(error,formula,'frozen terminal error TH/2');eq(z,qsub(exact,formula),'frozen terminal formula');
  }
  return 'ten bounded (T,N,m) triples, including original T=2,N=1; exact rational frozen terminal error and midpoint macro nodes';
 },
 'electromechanical-four-microsteps-and-cost'() {
  const initial=[q(0),q(1),q(0)],H=q(1,10),h=q(1,40);let slowCalls=0,fastCalls=0;
  const f=(q0,v,i)=>{slowCalls++;return [v,qadd(qsub(qmul(q(-1),q0),v),i)];};
  const g=(v,i)=>{fastCalls++;return qsub(v,qmul(q(8),i));};
  const field=f(...initial),xp=initial.slice(0,2).map((v,i)=>qadd(v,qmul(H,field[i])));let current=initial[2];const path=[];
  for(let j=0;j<4;j++){current=qadd(current,qmul(h,g(initial[1],current)));path.push(current);}
  eq(xp[0],q(1,10),'mechanical q update');eq(xp[1],q(9,10),'mechanical v update');
  [q(1,40),q(9,200),q(61,1000),q(369,5000)].forEach((v,j)=>eq(path[j],v,'current microstate '+j));
  expect(slowCalls===1&&fastCalls===4,'electromechanical actual field calls');
  for(const q0 of [-1,0,1])for(const v of [-1,0,1])for(const i of [-1,0,1]) {
   const direct=qadd(qadd(q(q0*v),q(v*(-q0-v+i))),q(i*(v-8*i)));
   const dissipative=q(-((v-i)**2)-7*i*i);eq(direct,dissipative,'energy derivative identity');expect(qcmp(direct,q(0))<=0,'finite-grid energy derivative sign');
  }
  return 'original exact four-current path, one slow/four fast calls,27 integer energy-derivative witnesses; no trajectory energy claim';
 }
};
const sensitivity={
 'two-outcome-perfect-correlation-shapley'() {
  const rows=[[-1,-1],[1,1]],Y=rows.map(r=>q(r[0])),V=variance(Y),coalition=mask=>variance(projection(rows,Y,mask));
  eq(V,q(1),'correlated population variance');eq(coalition(0),q(0),'empty coalition');for(const mask of [1,2,3])eq(coalition(mask),V,'nonempty coalition');
  const accum=[q(0),q(0)];
  for(const permutation of [[0,1],[1,0]]){let mask=0;for(const i of permutation){const next=mask|(1<<i);accum[i]=qadd(accum[i],qsub(coalition(next),coalition(mask)));mask=next;}}
  accum.forEach(v=>eq(qdiv(v,qmul(q(2),V)),q(1,2),'permutation Shapley effect'));
  return 'two equiprobable correlated sign outcomes, conditional means for four coalitions, two exact permutations; each effect1/2';
 },
 'ishigami-six-variance-coefficient-cases'() {
  // s=b*pi^4. This checks the algebra AFTER the source uniform moments,
  // and deliberately does not claim to integrate sine/uniform moments.
  for(const a of [0,7])for(const s of [0,1,-5]) {
   const V1=qdiv(square(qadd(q(1),q(s,5))),q(2)),V2=q(a*a,8),V13=q(8*s*s,225);
   const total=sum([V1,V2,V13]),expanded=sum([q(1,2),q(a*a,8),q(s,5),q(s*s,18)]);
   eq(total,expanded,'Ishigami component expansion');expect(qcmp(total,q(0))>0,'Ishigami finite positive variance');
   if(s===-5)eq(V1,q(0),'Ishigami cancellation branch');
   for(const v of [V1,V2,V13])expect(qcmp(v,q(0))>=0,'negative Ishigami component');
  }
  return 'six exact (a,s=b*pi^4) coefficient cases including cancellation s=-5; algebraic post-moment sanity ONLY, not analytic uniform-moment proof';
 },
 'four-sign-tensor-and-sobol'() {
  const basis=signs.map(([x,y])=>[q(1),q(x),q(y),q(x*y)]),Y=signs.map(([x,y])=>q(2+3*x+4*x*y));
  for(let i=0;i<4;i++)for(let j=0;j<4;j++)eq(mean(basis.map(row=>qmul(row[i],row[j]))),q(Number(i===j)),'tensor Gram');
  [2,3,0,4].forEach((v,j)=>eq(mean(basis.map((row,i)=>qmul(Y[i],row[j]))),q(v),'tensor coefficient'));
  const V=variance(Y),meanY=projection(signs,Y,0),P1=projection(signs,Y,1),P2=projection(signs,Y,2);
  const f1=P1.map((v,i)=>qsub(v,meanY[i])),f2=P2.map((v,i)=>qsub(v,meanY[i]));
  const f12=Y.map((v,i)=>qsub(qsub(qsub(v,meanY[i]),f1[i]),f2[i]));
  const Vs=[mean(f1.map(square)),mean(f2.map(square)),mean(f12.map(square))];
  eq(V,q(25),'chaos variance');[9,0,16].forEach((v,j)=>eq(Vs[j],q(v),'ANOVA component variance'));
  [q(9,25),q(0),q(1),q(16,25)].forEach((v,j)=>eq([qdiv(Vs[0],V),qdiv(Vs[1],V),qdiv(qadd(Vs[0],Vs[2]),V),qdiv(qadd(Vs[1],Vs[2]),V)][j],v,'Sobol ratio'));
  return 'four equiprobable sign pairs:16 Gram entries, four coefficients, conditional averages, component variances and all four exact Sobol ratios';
 },
 'constant-four-point-undefined-indices'() {
  const Y=signs.map(()=>q(3)),P=Array.from({length:4},(_,mask)=>projection(signs,Y,mask));
  for(const mask of [1,2,3])for(let r=0;r<4;r++) {
   let component=q(0);for(let sub=mask;;sub=(sub-1)&mask){const parity=(mask.toString(2).replaceAll('0','').length-sub.toString(2).replaceAll('0','').length)%2;component=qadd(component,qmul(q(parity?-1:1),P[sub][r]));if(sub===0)break;}
   eq(component,q(0),'constant nonempty ANOVA component');
  }
  const V=variance(Y);eq(V,q(0),'constant output variance');
  // Domain guard precedes every normalization; no fake numeric zero index.
  const normalized=(num,den)=>qcmp(den,q(0))>0?{status:'defined',value:qdiv(num,den)}:{status:'undefined'};
  const first=normalized(q(0),V),total=normalized(q(0),V);
  expect(first.status==='undefined'&&total.status==='undefined'&&!Object.hasOwn(first,'value')&&!Object.hasOwn(total,'value'),'zero variance must not return indices');
  return 'constant3 on four-point product: three nonempty ANOVA components vanish and both index domains reject zero variance';
 },
 'two-row-bernoulli-returned-ratio'() {
  const rows=Array.from({length:32},(_,bits)=>{const b=Array.from({length:5},(_,j)=>(bits>>j)&1);return {N:q(b[0]-b[1]*b[2]),D:q((b[3]-b[4])**2,2)};});
  eq(mean(rows.map(r=>r.N)),q(1,4),'one-row numerator mean');eq(mean(rows.map(r=>r.D)),q(1,4),'one-row denominator mean');
  let returned=0,zero=0,ratios=q(0);const countK=[0,0,0];
  for(const a of rows)for(const b of rows) {
   const N=qdiv(qadd(a.N,b.N),q(2)),D=qdiv(qadd(a.D,b.D),q(2)),K=Number(qcmp(a.D,q(0))>0)+Number(qcmp(b.D,q(0))>0);countK[K]++;
   if(qcmp(D,q(0))===0){zero++;expect(K===0,'zero return event');continue;}
   returned++;ratios=qadd(ratios,qdiv(N,D));
  }
  expect(zero===256&&returned===768&&countK[1]===512&&countK[2]===256,'two-row denominator event counts');
  eq(qdiv(ratios,q(returned)),q(5,6),'conditional returned-ratio mean');
  eq(qdiv(variance([q(0),q(1)]),variance([q(0),q(1)])),q(1),'one-coordinate true Sobol effect');
  return 'all1024 equiprobable two-row five-bit bundles;256 zero statuses,768 ratios; exact conditional mean5/6 versus true index1';
 }
};
function run(fixtures,smoke) {
 try {
  expect(smoke!==null&&typeof smoke==='object'&&!Array.isArray(smoke),'smoke must be a record');
  const p=smoke.parameters===undefined?{}:smoke.parameters;expect(p!==null&&typeof p==='object'&&!Array.isArray(p),'parameters must be a record');
  expect(Object.keys(p).every(k=>k==='fixture'),'unsupported bounded-fixture parameter');
  if(Object.keys(p).length===0)return {ok:true,summary:Object.values(fixtures).map(f=>f()).join('; ')};
  expect(typeof p.fixture==='string'&&Object.hasOwn(fixtures,p.fixture),'unknown fixture enum');
  return {ok:true,summary:fixtures[p.fixture]()};
 }catch(e){return {ok:false,summary:String(e.message??e)};}
}
export const numericalControlChecks={'numerical-elliptic-control-fixture':(smoke={})=>run(control,smoke)};
export const numericalMultirateChecks={'numerical-multirate-fixture':(smoke={})=>run(multirate,smoke)};
export const numericalSensitivityChecks={'numerical-sensitivity-fixture':(smoke={})=>run(sensitivity,smoke)};
