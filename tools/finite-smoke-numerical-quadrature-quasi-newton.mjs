// Research proposal: exact bounded fixtures, not general convergence proofs.
import {q,qadd,qsub,qmul,qdiv,qcmp,qneg} from './finite-smoke-numerical-core.mjs';
const equal=(a,b)=>qcmp(a,b)===0;
const want=(condition,message)=>{if(!condition)throw Error(message);};
const dot=(a,b)=>a.reduce((sum,x,i)=>qadd(sum,qmul(x,b[i])),q(0));
const mv=(A,x)=>A.map(row=>dot(row,x));
const outer=(x,y)=>x.map(a=>y.map(b=>qmul(a,b)));
const scale=(c,x)=>x.map(v=>qmul(c,v));
const I=()=>[[q(1),q(0)],[q(0),q(1)]];
function update(B,s,y){const Bs=mv(B,s),c=dot(s,Bs),d=dot(s,y),ss=outer(Bs,Bs),yy=outer(y,y);want(qcmp(c,q(0))!==0&&qcmp(d,q(0))!==0,'zero update denominator');return B.map((row,i)=>row.map((b,j)=>qadd(qsub(b,qdiv(ss[i][j],c)),qdiv(yy[i][j],d))));}
const spd=A=>equal(A[0][1],A[1][0])&&qcmp(A[0][0],q(0))>0&&qcmp(qsub(qmul(A[0][0],A[1][1]),qmul(A[0][1],A[1][0])),q(0))>0;
function suite(cases,smoke={}){
 try{
  const name=smoke.fixture??'all';
  want(typeof name==='string'&&(name==='all'||Object.hasOwn(cases,name)),'unknown bounded fixture');
  want(smoke.parameters===undefined||(typeof smoke.parameters==='object'&&smoke.parameters!==null&&!Array.isArray(smoke.parameters)&&Object.keys(smoke.parameters).length===0),'these fixtures use fixed source parameters');
  const selected=name==='all'?Object.keys(cases):[name];
  for(const key of selected)cases[key]();
  return{ok:true,summary:`${selected.length} exact bounded source fixture(s): ${selected.join(', ')}; no general theorem checked`,fixtures:selected};
 }catch(error){return{ok:false,summary:error.message};}
}
function polynomialPower(x,n){let y=q(1);for(let i=0;i<n;i++)y=qmul(y,x);return y;}
function integralMonomial(p,a,b){return qdiv(qsub(polynomialPower(b,p+1),polynomialPower(a,p+1)),q(p+1));}
function polynomialQuadrature(p,a,b,n){
 const h=qdiv(qsub(b,a),q(n)),f=x=>polynomialPower(x,p);let midpoint=q(0),trapezoid=qmul(q(1,2),qadd(f(a),f(b))),simpson=qadd(f(a),f(b));
 for(let i=0;i<n;i++)midpoint=qadd(midpoint,f(qadd(a,qmul(qadd(q(i),q(1,2)),h))));
 for(let i=1;i<n;i++){let y=f(qadd(a,qmul(q(i),h)));trapezoid=qadd(trapezoid,y);simpson=qadd(simpson,qmul(q(i%2?4:2),y));}
 return{midpoint:qmul(h,midpoint),trapezoid:qmul(h,trapezoid),simpson:qmul(qdiv(h,q(3)),simpson),integral:integralMonomial(p,a,b)};
}
const quadratureCases={
 'convex-quadratic-one-panel-bracket':()=>{const z=polynomialQuadrature(2,q(0),q(1),1);want(equal(z.midpoint,q(1,4))&&equal(z.integral,q(1,3))&&equal(z.trapezoid,q(1,2)),'quadratic one-panel values differ');want(qcmp(z.midpoint,z.integral)<=0&&qcmp(z.integral,z.trapezoid)<=0,'midpoint/integral/trapezoid bracket fails');},
 'quadratic-simpson-one-block':()=>{const z=polynomialQuadrature(2,q(0),q(2),2);want(equal(z.simpson,z.integral)&&equal(z.integral,q(8,3)),'quadratic Simpson sum disagrees with independent monomial integral');},
 'cubic-simpson-one-block':()=>{const z=polynomialQuadrature(3,q(0),q(2),2);want(equal(z.simpson,z.integral)&&equal(z.integral,q(4)),'cubic Simpson sum disagrees with independent monomial integral');},
};
const quasiNewtonCases={
 'quadratic-secant-and-positive-curvature':()=>{
  const A=[[q(2),q(0)],[q(0),q(3)]],x=[q(1),q(1)],g=mv(A,x),p=g.map(qneg),alpha=qdiv(qneg(dot(g,p)),dot(p,mv(A,p))),s=scale(alpha,p),y=mv(A,s),B=update(I(),s,y);
  want(equal(alpha,q(13,35))&&equal(dot(s,y),q(169,35)),'exact line minimizer or curvature differs');
  const expected=[[q(523,455),q(258,455)],[q(258,455),q(1193,455)]];
  want(B.every((row,i)=>row.every((b,j)=>equal(b,expected[i][j]))),'BFGS rank-two update differs from displayed matrix');
  want(mv(B,s).every((b,i)=>equal(b,y[i]))&&equal(y[0],q(-52,35))&&equal(y[1],q(-117,35))&&spd(B),'secant or positive definiteness fails');
  const initialSlope=dot(g,p),finalSlope=qadd(initialSlope,qmul(alpha,dot(p,mv(A,p)))),decrease=qadd(qmul(alpha,initialSlope),qmul(q(1,2),qmul(qmul(alpha,alpha),dot(p,mv(A,p)))));
  want(equal(finalSlope,q(0))&&qcmp(decrease,qmul(q(1,10000),qmul(alpha,initialSlope)))<=0,'specified strong Wolfe line-minimizer branch fails');
 },
 'negative-curvature-powell-damping':()=>{
  const s=[q(1),q(0)],y=[q(-1),q(0)],B=I(),c=dot(s,mv(B,s)),d=dot(s,y),raw=update(B,s,y),theta=qdiv(qmul(q(4,5),c),qsub(c,d));
  const yt=y.map((a,i)=>qadd(qmul(theta,a),qmul(qsub(q(1),theta),mv(B,s)[i]))),damped=update(B,s,yt);
  want(equal(d,q(-1))&&equal(raw[0][0],q(-1))&&!spd(raw),'raw negative-curvature trial is not the required indefinite matrix');
  want(equal(theta,q(2,5))&&equal(dot(s,yt),q(1,5))&&equal(damped[0][0],q(1,5))&&equal(damped[1][1],q(1))&&spd(damped),'Powell damping did not restore the displayed positive matrix');
  want(mv(damped,s).every((a,i)=>equal(a,yt[i])),'damped secant equation fails');
  // The trial is rejected by Wolfe, irrespective of the algebraic damping result.
  const slope0=q(-1),slope1=q(-2),c2=q(2,5);
  want(qcmp(slope1,qmul(c2,slope0))<0&&qcmp(qneg(slope1),qmul(c2,qneg(slope0)))>0,'negative-curvature trial should fail both curvature tests');
 },
 'n1000-m10-storage-count':()=>{
  const n=1000,m=10;
  // Count the declared finite row lengths and stored pair lengths independently.
  const oneMatrix=Array.from({length:n},()=>n).reduce((a,b)=>a+b,0),paired=oneMatrix+oneMatrix;
  const pairCoordinates=Array.from({length:m},()=>[n,n]).flat().reduce((a,b)=>a+b,0);
  want(oneMatrix===1000000&&paired===2000000&&pairCoordinates===20000,'finite stored-coordinate counts differ');
  want(paired/pairCoordinates===100&&oneMatrix/pairCoordinates===50,'paired/one-matrix storage ratios differ');
 },
};
export const numericalPolynomialQuadratureChecks={'numerical-polynomial-quadrature-fixture':smoke=>suite(quadratureCases,smoke)};
export const numericalQuasiNewtonChecks={'numerical-quasi-newton-fixture':smoke=>suite(quasiNewtonCases,smoke)};
