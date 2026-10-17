// Proposed finite multistep fixtures. No general stability/order/limit is proved.
import {q,qadd,qsub,qmul,qdiv,qcmp,qneg} from '../numerical-optimization-dynamics-2026-10-16-owner-finite-smoke-core-rosenbrock/numerical-core.mjs';
const want=(x,m)=>{if(!x)throw Error(m);},eq=(a,b)=>qcmp(a,b)===0;
const sum=xs=>xs.reduce((s,x)=>qadd(s,x),q(0));
const abs=x=>{x=q(x);return q(x.n<0n?-x.n:x.n,x.d);};
function power(x,n){let y=q(1);for(let j=0;j<n;j++)y=qmul(y,x);return y;}
function polyMultiply(a,b){const c=Array.from({length:a.length+b.length-1},()=>q(0));for(let i=0;i<a.length;i++)for(let j=0;j<b.length;j++)c[i+j]=qadd(c[i+j],qmul(a[i],b[j]));return c;}
const polyValue=(a,x)=>a.reduce((s,c,j)=>qadd(s,qmul(c,power(x,j))),q(0));
const derivative=a=>a.slice(1).map((c,j)=>qmul(q(j+1),c));
const integral=(a,u,v)=>sum(a.map((c,j)=>qmul(qdiv(c,q(j+1)),qsub(power(v,j+1),power(u,j+1)))));
function lagrange(nodes,j){let a=[q(1)],d=q(1);for(let k=0;k<nodes.length;k++)if(k!==j){a=polyMultiply(a,[qneg(nodes[k]),q(1)]);d=qmul(d,qsub(nodes[j],nodes[k]));}return a.map(c=>qdiv(c,d));}
function adamsWeights(h){return{predictor:integral(lagrange([q(0)],0),q(0),h),corrector:[h,q(0)].map((_,j)=>integral(lagrange([h,q(0)],j),q(0),h))};}
function pece(z){const w=adamsWeights(q(1)),old=q(1),f=y=>qmul(z,y),pred=qadd(old,qmul(w.predictor,f(old))),next=qadd(old,qadd(qmul(w.corrector[0],f(pred)),qmul(w.corrector[1],f(old))));return{pred,next,stored:f(next)};}
function moments(alpha,beta,p){return Array.from({length:p+1},(_,m)=>m===0?sum(alpha):qsub(sum(alpha.map((a,j)=>qmul(a,power(q(j),m)))),qmul(q(m),sum(beta.map((b,j)=>qmul(b,power(q(j),m-1)))))));}
function bdfWeights(h,r){const nodes=[q(0),qneg(h),qneg(qadd(h,qdiv(h,r)))];return nodes.map((_,j)=>polyValue(derivative(lagrange(nodes,j)),q(0)));}
function bdfStep(h,r,previous,older,fAtEndpoint=q(0),lambda=q(0)){
 const w=bdfWeights(h,r),coefficient=qsub(w[0],lambda);want(qcmp(coefficient,q(0))!==0,'singular selected scalar branch');return qdiv(qsub(fAtEndpoint,qadd(qmul(w[1],previous),qmul(w[2],older))),coefficient);
}
const identity=n=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>q(Number(i===j))));
const matrixMultiply=(A,B)=>A.map(row=>B[0].map((_,j)=>sum(row.map((a,k)=>qmul(a,B[k][j])))));
function companion(alpha){const n=alpha.length-1;return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>i===n-1?qneg(qdiv(alpha[j],alpha[n])):q(Number(j===i+1))));}
function recurrence(alpha,starts,count){const y=starts.map(x=>q(x)),k=alpha.length-1;while(y.length<=count)y.push(qneg(qdiv(sum(alpha.slice(0,k).map((a,j)=>qmul(a,y[y.length-k+j]))),alpha[k])));return y;}
function requireVector(a,b,m){want(a.length===b.length&&a.every((v,j)=>eq(v,b[j])),m);}
function beMoments(){const alpha=[q(-1),q(1)],beta=[q(0),q(1)],mu=moments(alpha,beta,2);requireVector(mu,[q(0),q(0),q(-1)],'backward Euler moments');return{alpha,beta};}
const fixtures={
 'k1-recurrence-polynomials':()=>{
  const {alpha,beta}=beMoments(),h=q(1,2),old=q(3),f=q(2),next=qdiv(qsub(qmul(h,qmul(beta[1],f)),qmul(alpha[0],old)),alpha[1]);
  want(eq(next,q(4))&&alpha.length===2&&beta.length===2&&qcmp(alpha[1],q(0))!==0,'k1 recurrence or polynomial degree');
  want(eq(polyValue(alpha,q(1)),q(0))&&eq(polyValue(beta,q(1)),q(1)),'k1 rho/sigma values');
  return 'k1 backward-Euler constant-field recurrence returns4 from3 with h1/2; degree-one coefficient lists';
 },
 'k1-adams-lagrange-weights':()=>{
  for(const h of[q(1),q(1,2),q(1,4)]){const w=adamsWeights(h);want(eq(w.predictor,h),'one-node predictor integral');requireVector(w.corrector,[qdiv(h,q(2)),qdiv(h,q(2))],'two-node Lagrange corrector integrals');}
  return 'three exact grids: integrated one/two-node Lagrange bases give h,h/2,h/2';
 },
 'pece-z-minus-three':()=>{const z=pece(q(-3));want(eq(z.pred,q(-2))&&eq(z.next,q(5,2))&&eq(z.stored,q(-15,2)),'one-pass predictor/corrector/post-evaluation');return 'z=-3: predictor-2, one correction5/2, final stored derivative-15/2';},
 'zero-companion-powers':()=>{
  const C=companion([q(0),q(1)]);let P=identity(1);for(let n=0;n<=16;n++){want(eq(P[0][0],q(n===0?1:0)),'zero companion lost C0 or nilpotent powers');P=matrixMultiply(P,C);}
  return 'exact scalar companion powers n0..16 retain identity at0 and zero thereafter';
 },
 'backward-euler-order-moments':()=>{beMoments();return 'backward Euler exact mu0=mu1=0, mu2=-1; finite coefficient witness';},
 'uniform-bdf2-derivative-weights':()=>{
  for(const h of[q(1),q(1,2),q(1,4)]){const w=bdfWeights(h,q(1));requireVector(w,[qdiv(q(3),qmul(q(2),h)),qdiv(q(-2),h),qdiv(q(1),qmul(q(2),h))],'uniform quadratic-interpolant derivative weights');for(let p=0;p<=2;p++){const nodes=[q(0),qneg(h),qneg(qmul(q(2),h))],result=sum(w.map((v,j)=>qmul(v,power(nodes[j],p))));want(eq(result,q(p===1?1:0)),'Lagrange differentiation monomial test');}}
  return 'quadratic basis differentiation independently yields(3,-4,1)/(2h), with nine monomial/grid tests';
 },
 'uniform-bdf2-selected-step':()=>{
  const h=q(1,2),older=q(1),previous=q(2,3),next=bdfStep(h,q(1),previous,older,q(0),q(-1));
  want(eq(next,q(5,12))&&qcmp(abs(next),q(2))<=0,'linear selected BDF2 root');
  want(eq(qadd(qsub(qmul(q(3),next),qmul(q(4),previous)),older),qmul(qmul(q(2),h),qneg(next))),'uniform step equation residual');
  return 'f=-Y,h1/2: unique linear selected root5/12 lies in radius-two ball and satisfies3Ynew-4Yold+Yolder=2hf';
 },
 'backward-euler-dahlquist-witness':()=>{
  const {alpha}=beMoments();want(eq(polyValue(alpha,q(1)),q(0))&&eq(polyValue(derivative(alpha),q(1)),q(1)),'backward Euler simple unit root');
  for(const N of[2,4,8]){const h=q(1,N);let y=q(0);for(let j=0;j<N;j++){y=qadd(y,h);want(eq(y,q(j+1,N)),'backward Euler yprime1 recurrence');}want(eq(y,q(1)),'constant-field endpoint');}
  return 'BE simple unit root and consistency coefficients; three finite yprime1 grids exact (no general convergence test)';
 },
 'bdf2-unit-ratio-increment':()=>{
  const next=bdfStep(q(1),q(1),q(3),q(0)),delta=qsub(next,q(3)),ratio=qdiv(qmul(q(1),q(1)),qadd(q(1),qmul(q(2),q(1))));
  want(eq(ratio,q(1,3))&&eq(delta,qmul(ratio,q(3))),'BDF2 increment ratio1');
  return 'r1: independent interpolation step and increment formula agree at q1=1/3';
 },
 'bdf2-threshold-increment':()=>{
  // Exact arithmetic in Q(sqrt2): (a+b sqrt2)(c+d sqrt2).
  const mul=(x,y)=>[qadd(qmul(x[0],y[0]),qmul(q(2),qmul(x[1],y[1]))),qadd(qmul(x[0],y[1]),qmul(x[1],y[0]))],r=[q(1),q(1)],r2=mul(r,r),denominator=[qadd(q(1),qmul(q(2),r[0])),qmul(q(2),r[1])];
  requireVector(r2,denominator,'threshold squared and denominator differ');requireVector(r2,[q(3),q(2)],'sqrt2 field arithmetic');
  for(const [num,den,expectBelow]of[[1,2,true],[1,1,true],[2,1,true],[3,1,false]]){const z=q(num,den),qr=qdiv(qmul(z,z),qadd(q(1),qmul(q(2),z)));want((qcmp(qr,q(1))<=0)===expectBelow,'finite ratio-threshold side');}
  return 'exact Q(sqrt2) endpoint r²=1+2r gives q=1; four finite rational sides checked';
 },
 'bdf2-cubic-local-error':()=>{
  for(const h of[q(1),q(1,2),q(1,4)]){const t=qmul(q(2),h),h3=power(h,3),Y1=qdiv(h3,q(3)),Y2=bdfStep(h,q(1),Y1,q(0),power(t,2)),exact=qdiv(power(t,3),q(3));
   want(eq(Y2,qmul(q(28,9),h3))&&eq(exact,qmul(q(8,3),h3))&&eq(qsub(Y2,exact),qmul(q(4,9),h3)),'BDF2 cubic local-error witness');
   const defect=qsub(qsub(qmul(q(3),exact),qmul(q(4),Y1)),qmul(qmul(q(2),h),power(t,2)));want(eq(defect,qmul(q(-4,3),h3)),'unscaled cubic residual');}
  return 'three exact cubic local steps: Y2=28h³/9, error4h³/9, exact unscaled defect-4h³/3; no global-order proof';
 },
 'repeated-unit-root-finite-growth':()=>{
  const alpha=polyMultiply([q(-1),q(1)],[q(-1),q(1)]);requireVector(moments(alpha,[q(0),q(0),q(0)],1),[q(0),q(0)],'repeated-unit consistency');
  for(const T of[q(1),q(2)])for(const N of[2,4,8,16]){const h=qdiv(T,q(N)),values=recurrence(alpha,[q(0),h],N);want(values.every((v,n)=>eq(v,qmul(q(n),h)))&&eq(values[N],T),'finite parasitic recurrence');}
  return 'eight finite second-difference runs retain Y0=0,Y1=h,Yn=nh,YN=T; finite witnesses, not a limit test';
 },
 'pece-versus-implicit-adams':()=>{
  const z=q(-3),P=pece(z),AM=qdiv(qadd(q(1),qdiv(z,q(2))),qsub(q(1),qdiv(z,q(2))));
  want(eq(P.next,q(5,2))&&eq(AM,q(-1,5))&&qcmp(abs(P.next),q(1))>0&&qcmp(abs(AM),q(1))<0,'one-pass versus solved implicit scalar factors');
  return 'at z=-3 independently constructed PECE5/2 and implicitAM-1/5 have opposite scalar stability';
 },
 'repeated-interior-factorization':()=>{
  const alpha=polyMultiply([q(-1),q(1)],polyMultiply([q(-1,2),q(1)],[q(-1,2),q(1)]));requireVector(alpha,[q(-1,4),q(5,4),q(-2),q(1)],'interior-root product expansion');
  requireVector(moments(alpha,[q(1,4),q(0),q(0),q(0)],1),[q(0),q(0)],'interior-root method consistency');
  want(eq(polyValue(alpha,q(1,2)),q(0))&&eq(polyValue(derivative(alpha),q(1,2)),q(0))&&qcmp(polyValue(derivative(derivative(alpha)),q(1,2)),q(0))!==0,'interior root not exactly double');
  want(qcmp(polyValue(derivative(alpha),q(1)),q(0))!==0,'unit root not simple');
  return 'exact cubic coefficient expansion, consistency and first/second derivative root multiplicities';
 },
 'repeated-interior-finite-mode':()=>{
  const alpha=[q(-1,4),q(5,4),q(-2),q(1)],values=recurrence(alpha,[q(0),q(1,2),q(1,2)],32);
  for(let n=0;n<=32;n++){const mode=qmul(q(n),power(q(1,2),n));want(eq(values[n],mode)&&qcmp(abs(mode),q(1))<=0,'finite repeated-interior mode');if(n>=1&&n<32)want(qcmp(abs(values[n+1]),abs(values[n]))<=0,'finite mode did not decrease after first index');}
  want(qcmp(values[32],q(1,1000000))<0,'finite n32 mode bound');
  return '33 exact recurrence values agree with n/2^n, bounded and decreasing over the finite tail; n32<10^-6 only, no asymptotic inference';
 },
 'simple-unit-roots-period-four':()=>{
  const mul=(a,b)=>[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]],expected=[[1,0],[0,1],[-1,0],[0,-1]];
  for(const sign of[1,-1]){let z=[1,0],history=[];for(let n=0;n<16;n++){history.push(z);const e=expected[(sign*n%4+4)%4];want(z[0]===e[0]&&z[1]===e[1]&&z[0]*z[0]+z[1]*z[1]===1,'finite Gaussian-integer phase');if(n>=3)for(let j=0;j<2;j++)want(history[n][j]-history[n-1][j]+history[n-2][j]-history[n-3][j]===0,'periodic mode recurrence');z=mul(z,[0,sign]);}}
  const alpha=polyMultiply([q(-1),q(1)],[q(1),q(0),q(1)]);requireVector(moments(alpha,[q(2),q(0),q(0),q(0)],1),[q(0),q(0)],'unit-circle method consistency');
  return '32 exact Gaussian-integer mode values, period-four cycles, unit moduli and cubic recurrence';
 },
 'uniform-bdf2-order-moments-roots':()=>{
  const alpha=polyMultiply([q(-1),q(3)],[q(-1),q(1)]);requireVector(alpha,[q(1),q(-4),q(3)],'BDF2 characteristic factors');requireVector(moments(alpha,[q(0),q(0),q(2)],3),[q(0),q(0),q(0),q(-4)],'uniform BDF2 exact order moments');
  for(const root of[q(1),q(1,3)])want(eq(polyValue(alpha,root),q(0))&&qcmp(polyValue(derivative(alpha),root),q(0))!==0,'BDF2 simple factor roots');
  return 'BDF2 exact mu0..2 zero, mu3=-4 and distinct simple roots1,1/3';
 },
 'unrestricted-ratio-m10-witness':()=>{
  for(const m of[2,3,10]){const h=[q(1,m*m),q(1,m),...Array.from({length:m-2},()=>q(1,m)),qsub(q(1,m),q(1,m*m))];want(h.length===m+1&&h.every(x=>qcmp(x,q(0))>0)&&eq(sum(h),q(1)),'actual finite grid increments');
   const max=h.reduce((a,b)=>qcmp(a,b)>0?a:b);want(eq(max,q(1,m)),'maximum step');let y=[q(0),q(1,m)];
   for(let n=1;n<h.length;n++){const r=qdiv(h[n],h[n-1]),next=bdfStep(h[n],r,y[n],y[n-1]);want(qcmp(abs(next),q(3,2))<0,'selected homogeneous root outside prescribed ball');y.push(next);}
   want(eq(qdiv(h[1],h[0]),q(m))&&eq(qsub(y[2],y[1]),q(m,1+2*m)),'first amplified increment');
   if(m===10)want(eq(qsub(y[2],y[1]),q(10,21))&&eq(y[2],q(121,210))&&eq(qadd(h[0],h[1]),q(11,100)),'original m10 witness');
  }
  return 'm2(empty middle block),m3,m10 full finite grids/selected roots; m10Delta2=10/21,Y2=121/210,t2=11/100,H1/10; no limit proof';
 },
};
export const numericalMultistepChecks={
 'numerical-multistep-fixture':(smoke={})=>{
  try{
   want(smoke!==null&&typeof smoke==='object'&&!Array.isArray(smoke),'fixture object required');
   const allowed=new Set(['check','case','fixture','asserts','parameters']);want(Object.keys(smoke).every(k=>allowed.has(k)),'unsupported multistep fixture field');
   want(smoke.parameters===undefined||(smoke.parameters!==null&&typeof smoke.parameters==='object'&&!Array.isArray(smoke.parameters)&&Object.keys(smoke.parameters).length===0),'these fixtures have fixed bounded source parameters');
   const keys=smoke.fixture===undefined?Object.keys(fixtures):[smoke.fixture];want(keys.every(k=>typeof k==='string'&&Object.hasOwn(fixtures,k)),'unknown multistep fixture');
   return{ok:true,summary:`${keys.length} bounded multistep fixture(s); no general convergence/stability/order or limit proved`,results:keys.map(fixture=>({fixture,summary:fixtures[fixture]()}))};
  }catch(error){return{ok:false,summary:error.message};}
 }
};
