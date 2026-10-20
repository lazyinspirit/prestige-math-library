// Research-only bounded inverse-problem fixtures; no asymptotic theorem is tested.
import {close,matVec,matrixMultiply,vectorNorm,solveDense} from './finite-smoke-numerical-core.mjs';
const expect=(p,m)=>{if(!p)throw new Error(m)};
const dot=(x,y)=>x.reduce((s,a,i)=>s+a*y[i],0), sub=(x,y)=>x.map((a,i)=>a-y[i]);
const transpose=A=>A[0].map((_,j)=>A.map(r=>r[j]));
const equalVector=(x,y)=>x.length===y.length&&x.every((a,i)=>close(a,y[i]));
function landweber(A,y,omega,cap,{delta=0,tau=2,stop=false}={}) {
 const AT=transpose(A);let x=Array(A[0].length).fill(0);const path=[x.slice()];
 for(let k=0;k<=cap;k++) {
  const residual=sub(y,matVec(A,x)), norm=vectorNorm(residual);
  if(stop&&(norm===0||norm<=tau*delta))return {x,k,status:norm===0?'zero-residual':'discrepancy',path};
  if(k===cap)return {x,k,status:'budget-exhausted',path};
  const correction=matVec(AT,residual);x=x.map((a,i)=>a+omega*correction[i]);path.push(x.slice());
 }
}
function irgnm(F,DF,x,x0,y,alpha) {
 const A=DF(x),AT=transpose(A),normal=matrixMultiply(AT,A);
 normal.forEach((r,i)=>r[i]+=alpha);
 const residual=sub(y,F(x));const rhs=matVec(AT,residual).map((a,i)=>a+alpha*(x0[i]-x[i]));
 const z=solveDense(normal,rhs);expect(z.status==='success','IRGNM normal solve failed');return x.map((a,i)=>a+z.x[i]);
}
// First actual Golub-Kahan step and projected one-column least squares.
function lsqrOne(A,b) {
 const AT=transpose(A),beta1=vectorNorm(b),u1=b.map(a=>a/beta1),atu=matVec(AT,u1),alpha1=vectorNorm(atu),v1=atu.map(a=>a/alpha1);
 const av=matVec(A,v1),p=av.map((a,i)=>a-alpha1*u1[i]),beta2=vectorNorm(p),u2=beta2>0?p.map(a=>a/beta2):p;
 const q=matVec(AT,u2).map((a,i)=>a-beta2*v1[i]),alpha2=vectorNorm(q);
 const z=beta1*alpha1/(alpha1*alpha1+beta2*beta2),x=v1.map(a=>a*z);
 return {x,alpha1,beta2,alpha2,physical:vectorNorm(sub(b,matVec(A,x))),projected:Math.hypot(beta1-alpha1*z,beta2*z)};
}
const fixtures={
 'scalar-quadratic-remainder'() {
  for(const x of [0,.25,.5,1])for(const z of [0,.25,.5,1]){const r=x*x-z*z-2*z*(x-z);expect(close(Math.abs(r),(x-z)**2),'quadratic remainder differs from L/2 bound');}
  return '16 scalar quadratic grid pairs, including x=z and both endpoints';
 },
 'two-dimensional-nonbreakdown-one-step'() {
  const r=lsqrOne([[1,0],[0,2]],[1,1]);
  expect(r.alpha1>0&&r.beta2>0&&r.alpha2>0,'first nonbreakdown premise failed');
  expect(close(r.alpha1,Math.sqrt(5/2))&&close(r.beta2,3/Math.sqrt(10))&&close(r.alpha2,4/Math.sqrt(10)),'Golub-Kahan coefficients incorrect');
  expect(equalVector(r.x,[5/17,10/17])&&close(r.physical,r.projected),'projected least squares differs from physical residual');
  const normalDirection=[1,4];expect(close(dot(normalDirection,sub([1,1],matVec([[1,0],[0,2]],r.x))),0),'Krylov residual not orthogonal to A span');
  return '2x2 nonbreakdown Golub-Kahan step; Krylov minimizer and residual identity';
 },
 'scalar-one-step-filter'() {
  const r=landweber([[1]],[1.5],1,1);const g=1,residual=1-1;
  expect(close(r.x[0],g*1.5)&&close(1.5-r.x[0],residual*1.5),'one-step scalar filter identity failed');
  return 'scalar A=1, omega=1, y=3/2, first iterate and zero residual';
 },
 'scalar-linear-one-step-recurrence'() {
  for(const eps of [-.1,0,.1]) {
   const x=irgnm(x=>x,()=>[[1]],[0],[0],[1+eps],.25)[0], e=x-1;
   expect(close(e,-1/5+4*eps/5)&&close(e,.25/(1.25)*(-1)+eps/1.25),'signed IRGNM recurrence failed');
  }return 'three scalar linear IRGNM noise values, exact remainder zero';
 },
 'finite-source-noise-filter-bound'() {
  // Preserve the original A=1, omega=1, k=1 concrete case as well.
  const unitExact=landweber([[1]],[1],1,1),unitNoisy=landweber([[1]],[1.01],1,1);
  expect(close(unitExact.x[0],1)&&close(unitNoisy.x[0]-unitExact.x[0],.01),'original unit-mode noise case failed');
  expect(Math.abs(unitNoisy.x[0]-unitExact.x[0])<=Math.sqrt(2)*.01,'original unit-mode noise bound failed');
  const unitResidual=1-matVec([[1]],unitExact.x)[0],unitGain=unitExact.x[0]/1;
  expect(close(unitResidual,0)&&close(unitGain,1),'original r1=0 and g1=1 scalar filters failed');
  for(const k of [1,2,4]) {
   const exact=landweber([[.5]],[.125],1,k),bias=Math.abs(exact.x[0]-.25),r=.75**k;
   expect(close(bias,.25*r),'source multiplier identity failed');
   // Bounded scalar spectral inequality t*r_k(t)<=1/k for t=1/4.
   expect(.25*r<=1/k,'finite source filter bound failed');
   for(const eps of [-1/64,0,1/64]) {
    const noisy=landweber([[.5]],[.125+eps],1,k),noise=Math.abs(noisy.x[0]-exact.x[0]);
    expect(noise<=Math.sqrt(2*k)/64+1e-13,'finite noise amplification bound failed');
    expect(Math.abs(noisy.x[0]-.25)<=1/k+Math.sqrt(2*k)/64+1e-13,'finite total bound failed');
   }
  }return 'k=1,2,4 source scalar mode and three bounded noise values; no rate limit tested';
 },
 'first-discrepancy-crossing'() {
  // Preserve the original y_delta=1.01, delta=.01, tau=2 instance.
  const original=landweber([[1]],[1.01],1,2,{stop:true,delta:.01,tau:2});
  expect(original.k===1&&1.01>.02&&Math.abs(1.01-original.x[0])<=.02&&close(Math.abs(original.x[0]-1),.01),'original .01 discrepancy/error case failed');
  for(const eps of [-.1,0,.1]) {
   const r=landweber([[1]],[1+eps],1,2,{stop:true,delta:.1,tau:2});
   expect(r.k===1&&Math.abs(1+eps)>.2&&Math.abs(1+eps-r.x[0])<=.2,'not the first discrepancy crossing');
  }
  const zero=landweber([[1]],[.1],1,2,{stop:true,delta:.1,tau:2});
  expect(zero.k===0&&zero.status==='discrepancy','initial discrepancy branch lost');
  return 'first crossing k=1 and a separate k=0 initial discrepancy branch';
 },
 'finite-lsqr-noise-amplification'() {
  const A=[[1,0],[0,.25]],b=[0,.5],r=lsqrOne(A,b);
  expect(equalVector(r.x,[0,2])&&close(r.physical,0),'unstopped LSQR reconstruction failed');
  expect(close(vectorNorm(r.x)/vectorNorm(b),4),'finite inverse amplification ratio failed');
  // With delta=||b|| and tau=2 the real stopping procedure returns x0 immediately.
  expect(vectorNorm(b)<=2*vectorNorm(b),'initial discrepancy branch unavailable');
  return 'N=2 diagonal inverse, noise amplification4; unstopped calculation separated from initial stop';
 },
 'kinetics-noise-endpoints'() {
  const F=x=>[1-Math.exp(-x[0])],DF=x=>[[Math.exp(-x[0])]];
  for(const eps of [-.1,0,.1]) {
   const y=[.5+eps],x=irgnm(F,DF,[0],[0],y,.25)[0];
   expect(Math.abs(y[0])>.2&&close(x,.4+.8*eps)&&x>=0,'kinetics first update/initial discrepancy failed');
   const residual=Math.abs(y[0]-F([x])[0]),status=residual<=.2?'discrepancy':'budget-exhausted';
   expect(['discrepancy','budget-exhausted'].includes(status),'invalid one-step status');
  }return 'kinetics eps=-1/10,0,1/10: update, nonnegative rate, finite residual branch';
 },
 'two-coordinate-semiconvergence-bound'() {
  for(const j of [1,2]) {
   const a=2**(-j), y=2**(-j/2),k=4**j,r=landweber([[a]],[y],1,k);
   const formula=2**(j/2)*(1-(1-4**(-j))**k);
   expect(close(r.x[0],formula)&&Math.abs(r.x[0])>=2**(j/2)/2,'finite coordinate lower bound failed');
   expect(Math.abs(y-a*r.x[0])<=Math.abs(y),'finite residual not reduced');
  }return 'coordinates j=1,2 only at k=4^j; no infinite-dimensional divergence inferred';
 },
 'three-pixel-blur-first-step'() {
  const A=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>(Number(i===j)+1)/4));
  const truth=[1,0,-1],y=matVec(A,truth),r=landweber(A,y,1,1);
  expect(equalVector(y,[.25,0,-.25])&&equalVector(r.x,truth.map(x=>x/16)),'three-pixel first Landweber step failed');
  expect(vectorNorm(sub(y,matVec(A,r.x)))<vectorNorm(y),'blur residual did not decrease');
  return '3pixel blur formed as (I+11^T)/4, exact-data first iterate truth/16';
 },
};
export const numericalInverseChecks={
 'numerical-inverse-problem-fixture'(smoke={}) {
  try {
   const p=smoke.parameters===undefined?{}:smoke.parameters;expect(p!==null&&typeof p==='object'&&!Array.isArray(p),'parameters must be a record');
   expect(Object.keys(p).every(k=>k==='fixture'),'unsupported bounded inverse-fixture parameter');
   if(Object.keys(p).length===0)return {ok:true,summary:Object.values(fixtures).map(f=>f()).join('; ')};
   expect(typeof p.fixture==='string'&&Object.hasOwn(fixtures,p.fixture),'unknown inverse fixture');
   return {ok:true,summary:fixtures[p.fixture]()};
  }catch(e){return {ok:false,summary:String(e.message??e)}}
 },
};
