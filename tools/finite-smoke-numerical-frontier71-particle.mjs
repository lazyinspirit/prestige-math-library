// Fixed finite models for frontier 71. No source loading, registry imports, or proof claims.
import { q, qadd, qsub, qmul, qdiv, qcmp, qnum, close, solveDense } from './finite-smoke-numerical-core.mjs';
const add = (a,b) => qadd(a,b), sub = (a,b) => qsub(a,b), mul = (a,b) => qmul(a,b), div = (a,b) => qdiv(a,b);
const eq = (a,b) => qcmp(a,b) === 0;
const sum = a => a.reduce(add,q(0));
const dot = (a,b) => sum(a.map((x,i)=>mul(x,b[i])));
const mv = (A,x) => A.map(r=>dot(r,x));
const same = (a,b) => a.length===b.length && a.every((x,i)=>eq(x,b[i]));
const near = (a,b) => a.length===b.length && a.every((x,i)=>close(x,b[i],2e-11));
const total = a => a.reduce((s,x)=>s+x,0);
const norm = a => Math.hypot(...a);
const requireThat = (condition, message) => { if (!condition) throw new Error(message); };
const finite = value => {
  if (typeof value === 'number') return Number.isFinite(value);
  if (typeof value === 'string') return !/^[+-]?(?:nan|infinity|inf)$/i.test(value.trim());
  if (Array.isArray(value)) return value.every(finite);
  if (value && typeof value === 'object') return Object.values(value).every(finite);
  return true;
};
const fixtures = Object.create(null);
function fixture(name, body) { fixtures[name] = body; }

fixture('toeplitz-forecast-order-two', () => {
  const gamma=[q(1),q(1,2),q(1,4)], nu0=gamma[0];
  const k1=div(gamma[1],nu0), nu1=mul(nu0,sub(1,mul(k1,k1)));
  const k2=div(sub(gamma[2],mul(k1,gamma[1])),nu1);
  const phi=[sub(k1,mul(k2,k1)),k2], nu2=mul(nu1,sub(1,mul(k2,k2)));
  const T=[[gamma[0],gamma[1]],[gamma[1],gamma[0]]];
  requireThat(eq(k1,q(1,2)) && eq(nu1,q(3,4)) && eq(k2,0) && same(phi,[q(1,2),q(0)]) && eq(nu2,q(3,4)), 'reflection/variance ledger');
  requireThat(same(mv(T,phi),gamma.slice(1)) && eq(sub(gamma[0],dot(phi,gamma.slice(1))),nu2), 'raw prediction equations');
  return 'Exact rational two-order covariance recursion and direct prediction equations agree.';
});
fixture('toeplitz-general-rhs-two', () => {
  const T=[[q(1),q(1,2)],[q(1,2),q(1)]], det=sub(mul(T[0][0],T[1][1]),mul(T[0][1],T[1][0]));
  const inv=[[div(T[1][1],det),div(sub(0,T[0][1]),det)],[div(sub(0,T[1][0]),det),div(T[0][0],det)]];
  requireThat(same(inv.flat(),[q(4,3),q(-2,3),q(-2,3),q(4,3)]), 'inverse entries');
  for(let j=0;j<2;j++) requireThat(same(mv(T,inv.map(r=>r[j])),[q(j===0?1:0),q(j===1?1:0)]),'inverse product');
  const x=mv(inv,[q(1),q(1)]);
  requireThat(same(x,[q(2,3),q(2,3)]) && same(mv(T,x),[q(1),q(1)]),'general right-hand side');
  return 'Exact rational inverse, both inverse columns, and general RHS residual checked.';
});
fixture('circulant-poisson-four', () => {
  const c=[2,-1,0,-1], N=4, f=[1,-1,1,-1];
  const symbol=Array.from({length:N},(_,k)=>c.reduce((z,a,j)=>[z[0]+a*Math.cos(2*Math.PI*k*j/N),z[1]-a*Math.sin(2*Math.PI*k*j/N)],[0,0]));
  const product=f.map((_,i)=>sum(c.map((a,j)=>mul(q(a),q(f[(i-j+N)%N],4)))));
  requireThat(near(symbol.map(z=>z[0]),[0,2,4,2]) && symbol.every(z=>close(z[1],0)), 'DFT of circulant column');
  requireThat(same(product,f.map(x=>q(x))) && total(f)===0,'raw circulant action/gauge');
  return 'Four-column DFT and exact rational circulant multiplication checked.';
});
fixture('toeplitz-nonpositive-pivot', () => {
  const T=[[q(1),q(2)],[q(2),q(1)]], det=sub(mul(T[0][0],T[1][1]),mul(T[0][1],T[1][0]));
  const nu0=T[0][0], alpha=div(T[0][1],nu0), nu1=mul(nu0,sub(1,mul(alpha,alpha)));
  const status=qcmp(nu0,0)<=0?'nonpositive-pivot(0)':qcmp(nu1,0)<=0?'nonpositive-pivot(1)':'success';
  requireThat(eq(det,-3)&&eq(nu0,1)&&eq(alpha,2)&&eq(nu1,-3)&&status==='nonpositive-pivot(1)','indefinite pivot status');
  return 'Exact determinant and computed first nonpositive innovation produce pivot-1 failure.';
});

function fmm(withNear) {
  // Coordinates of all six/seven labels, including zero-charge occupancy labels.
  const labels=[[1.25,.5,1],[1.75,.5,1],[.5,.5,0],[3.5,.5,0],[2.5,.5,0],[2.5,1.5,0]];
  if(withNear) labels.push([3.4,.5,3]);
  const P={x:0,y:0,s:2}, Q={x:2,y:0,s:2}, C={x:1,y:0,s:1}, D={x:3,y:0,s:1};
  const count=b=>labels.filter(p=>p[0]>=b.x&&p[0]<b.x+b.s&&p[1]>=b.y&&p[1]<b.y+b.s).length;
  const dist2=(a,b)=>(a.x+a.s/2-b.x-b.s/2)**2+(a.y+a.s/2-b.y-b.s/2)**2;
  const separated=(a,b)=>dist2(a,b)>(a.s+b.s)**2/2;
  const choose=(a,b)=>separated(a,b)?'far':count(a)<=2&&count(b)<=2?'near':count(a)>2&&(count(b)<=2||a.s>=b.s)?'source':'target';
  requireThat(labels.length===(withNear?7:6)&&count(P)===3&&count(Q)===(withNear?4:3)&&count(C)===2&&count(D)===(withNear?2:1),'label occupancy');
  requireThat(choose(P,Q)==='source'&&choose(C,Q)==='target'&&choose(C,D)==='far','pair split path');
  requireThat(dist2(P,Q)===4&&dist2(C,Q)===2.5&&dist2(C,D)===4,'squared center distances');
  if(withNear) requireThat(choose(D,D)==='near','same-leaf direct pair');
  const center=q(3,2), target=q(7,2), sources=[q(5,4),q(7,4)], charges=[q(1),q(1)];
  const M0=sum(charges), M1=sum(sources.map((x,i)=>mul(charges[i],sub(x,center))));
  const R=sub(target,center), farDerivative=sub(div(M0,R),div(M1,mul(R,R)));
  const farPotential=qnum(M0)*Math.log(qnum(R))+qnum(div(M1,R));
  const exactDerivative=sum(sources.map((x,i)=>div(charges[i],sub(target,x))));
  const exactPotential=total(sources.map((x,i)=>qnum(charges[i])*Math.log(qnum(sub(target,x)))));
  let nearDerivative=q(0), nearPotential=0;
  if(withNear) { const separation=sub(target,q(17,5)); nearDerivative=div(3,separation); nearPotential=3*Math.log(qnum(separation)); requireThat(eq(separation,q(1,10))&&eq(nearDerivative,30),'direct near term'); }
  const error=Math.abs((farPotential+nearPotential)-(exactPotential+nearPotential));
  requireThat(eq(M0,2)&&eq(M1,0)&&eq(farDerivative,1)&&eq(exactDerivative,q(64,63))&&eq(sub(exactDerivative,farDerivative),q(1,63)),'moments/derivatives');
  requireThat(close(error,Math.log(64/63))&&error>0&&error<1/63&&close(qnum(add(farDerivative,nearDerivative)),withNear?31:1),'potential remainder/total force');
  const rho=Math.SQRT1_2;
  requireThat(error<rho*rho/(1-rho)&&1/63<rho/(1-rho),'displayed finite error bounds');
  return withNear?'Seven-label split/occupancy, rational direct near term, order-one moments, and total log/derivative errors checked.':'Six-label split/occupancy, order-one moments, and direct-versus-far log/derivative errors checked.';
}
fixture('fmm-separated-order-one',()=>fmm(false));
fixture('fmm-near-far-order-one',()=>fmm(true));

function laplacian(N,L=1) {
  const h=L/N;
  return Array.from({length:N},(_,i)=>Array.from({length:N},(_,j)=>(2*Number(i===j)-Number((i+1)%N===j)-Number((i+N-1)%N===j))/(h*h)));
}
const fm=(A,x)=>{ const y=A.map(row=>total(row.map((a,j)=>a*x[j]))); requireThat(finite(y),'nonfinite matrix output'); return y; };
function dft(x,inverse=false) {
  const N=x.length, sign=inverse?1:-1;
  const y=x.map((_,k)=>x.reduce((s,z,j)=>{const a=sign*2*Math.PI*j*k/N,c=Math.cos(a),t=Math.sin(a); return [s[0]+(z[0]*c-z[1]*t)/(inverse?N:1),s[1]+(z[0]*t+z[1]*c)/(inverse?N:1)];},[0,0]));
  requireThat(finite(y),'nonfinite DFT output'); return y;
}
const gaugedSolve=(A,s)=>{ const n=s.length, B=A.map((r,i)=>i===n-1?Array(n).fill(1):r), rhs=s.map((v,i)=>i===n-1?0:v); const r=solveDense(B,rhs); requireThat(r.status==='success'&&finite(r.x),'finite gauged elimination'); return r.x; };
fixture('periodic-trapezoid-cosine-three',()=>{
  const L=1,N=3,h=L/N, values=Array.from({length:N},(_,j)=>Math.cos(2*Math.PI*j/N));
  const integral=L/(2*Math.PI)*(Math.sin(2*Math.PI)-Math.sin(0)), quadrature=h*total(values);
  requireThat(close(integral,0)&&close(quadrature,0)&&close(quadrature,integral),'cosine zero mode quadrature');
  return 'Three cosine samples and analytic sine-antiderivative endpoint evaluation agree to 2e-11.';
});
fixture('centered-poisson-symbol-three',()=>{
  const A=laplacian(3), eigen=[];
  for(let k=0;k<3;k++) { const re=Array.from({length:3},(_,j)=>Math.cos(2*Math.PI*k*j/3)), im=Array.from({length:3},(_,j)=>Math.sin(2*Math.PI*k*j/3)); const ar=fm(A,re), ai=fm(A,im); const lambda=total(ar.map((x,j)=>x*re[j]+ai[j]*im[j]))/3; requireThat(near(ar,re.map(x=>lambda*x))&&near(ai,im.map(x=>lambda*x)),'raw stencil eigenvector'); eigen.push(lambda); }
  requireThat(near(eigen,[0,27,27]),'three symbol values');
  return 'Raw N=3 periodic stencil applied to all three complex Fourier columns gives 0,27,27.';
});
fixture('pseudoinverse-cosine-three',()=>{
  const A=laplacian(3),s=[1,-.5,-.5],x=gaugedSolve(A,s),t=[0,1,-1],y=gaugedSolve(A,t);
  requireThat(near(x,s.map(v=>v/27))&&near(fm(A,x),s)&&close(total(x),0),'gauged inverse');
  requireThat(close(total(x.map((v,i)=>v*t[i])),total(s.map((v,i)=>v*y[i])))&&near(gaugedSolve(A,[0,0,0]),[0,0,0]),'finite adjoint/zero checks');
  return 'Gauged elimination checked against raw residual, cosine scaling, and an independent adjoint pairing.';
});
function deposit() {
  const h=q(1,5),X=div(h,3),w=[div(sub(h,X),h),div(X,h),q(0),q(0),q(0)];
  const raw=w.map(v=>div(mul(2,v),h)),rho=raw.map(v=>sub(v,2));
  requireThat(same(raw,[q(20,3),q(10,3),q(0),q(0),q(0)])&&eq(mul(h,sum(raw)),2)&&eq(mul(h,sum(rho)),0),'deposition/neutralization');
  return {h,X,w,raw,rho};
}
fixture('charge-two-deposition-five',()=>{deposit();return 'Exact CIC weights deposit total charge two; uniform background produces weighted mean zero.';});
fixture('gamma-three',()=>{
  const N=3,h=1/3,A=laplacian(N), ratios=[];
  for(const k of [1,2]) { const re=Array.from({length:N},(_,j)=>Math.cos(2*Math.PI*k*j/N)),im=Array.from({length:N},(_,j)=>Math.sin(2*Math.PI*k*j/N)); const deriv=x=>x.map((_,j)=>(x[(j+1)%N]-x[(j+N-1)%N])/(2*h)); ratios.push(norm([...deriv(re),...deriv(im)])/norm([...fm(A,re),...fm(A,im)])); }
  const gamma=Math.max(...ratios);
  requireThat(close(gamma,Math.sqrt(3)/18)&&gamma<1/4,'raw derivative/inverse multiplier norm');
  return 'Both nonzero N=3 Fourier modes give centered derivative/Laplacian norm ratio sqrt(3)/18 < 1/4.';
});
fixture('fourier-solver-three',()=>{
  const s=[1,-.5,-.5], spectrum=dft(s.map(x=>[x,0])), c=laplacian(3)[0], symbol=dft(c.map(x=>[x,0]));
  const solved=spectrum.map((z,k)=>k===0?[0,0]:[z[0]/symbol[k][0],z[1]/symbol[k][0]]), phi=dft(solved,true);
  requireThat(phi.every(z=>close(z[1],0))&&near(phi.map(z=>z[0]),s.map(x=>x/27))&&near(fm(laplacian(3),phi.map(z=>z[0])),s)&&close(total(phi.map(z=>z[0])),0),'finite Fourier solve and stencil residual');
  return 'Forward DFT, raw-stencil symbol division, inverse DFT, gauge and raw residual recomputed.';
});
fixture('alias-six-to-one-five',()=>{
  const nodes=Array.from({length:5},(_,j)=>2*Math.PI*j/5), forcing=nodes.map(x=>Math.cos(6*x));
  requireThat(nodes.every(x=>close(Math.cos(6*x),Math.cos(x))&&close(Math.sin(6*x),Math.sin(x))),'complex nodal alias');
  // Continuum sampled-source interpolant uses frequency one; true source uses six.
  const sampledSpectrum=dft(forcing.map(x=>[x,0]));
  const potentialSpectrum=sampledSpectrum.map((z,j)=>{const k=j<=2?j:j-5;return k===0?[0,0]:z.map(x=>x/(k*k));});
  const fieldSpectrum=potentialSpectrum.map((z,j)=>{const k=j<=2?j:j-5;return [k*z[1],-k*z[0]];});
  const reconstructed=dft(fieldSpectrum,true);
  requireThat(reconstructed.every(z=>close(z[1],0)), 'real collocation field');
  const nodalGridField=reconstructed.map(z=>z[0]),trueField=nodes.map(x=>Math.sin(6*x)/6);
  requireThat(near(nodalGridField,trueField.map(x=>6*x))&&Math.abs(nodalGridField[1]-trueField[1])>.5&&near(forcing,nodes.map(Math.cos)),'nonzero sixfold field discrepancy');
  return 'Five complex nodal aliases and nonzero sixfold spectral field discrepancy checked (not the centered-stencil field).';
});
fixture('nonneutral-one-particle-three',()=>{
  const N=3,h=q(1,N),source=[q(3),q(0),q(0)], A=laplacian(N);
  requireThat(eq(mul(h,sum(source)),1)&&A[0].every((_,j)=>close(total(A.map(r=>r[j])),0)),'incompatible source versus column sums');
  const output=fm(A,[2,-3,7]); requireThat(close(total(output),0)&&!close(qnum(sum(source)),0),'actual nonzero stencil action');
  return 'Charge-one source has mean one; all stencil columns and a nontrivial stencil output have sum zero.';
});
fixture('cold-two-stream-inventory',()=>{
  const L=2*Math.PI, particles=[];
  for(const sigma of [-1,1]) for(let j=0;j<63;j++){const base=L*j/63,raw=base+sigma*.01*Math.cos(base); particles.push({sigma,x:((raw%L)+L)%L,v:sigma/2,q:q(1,126),m:q(1,126)});}
  requireThat(particles.length===126&&eq(sum(particles.map(p=>p.q)),1)&&eq(sum(particles.map(p=>p.m)),1),'charge/mass inventory');
  requireThat(particles.every(p=>Number.isFinite(p.x)&&p.x>=0&&p.x<L&&p.v===p.sigma/2)&&[-1,1].every(s=>particles.filter(p=>p.sigma===s).length===63)&&eq(mul(q(1,1000),4000),4),'positions/beams/time specification');
  return 'All 126 stipulated initial labels, torus positions, exact charge/mass totals, cold velocities and time inventory constructed; no trajectory claim.';
});
fixture('cic-deposit-and-adjoint-five',()=>{
  const {h,w,rho}=deposit(),v=[q(2),q(-1),q(3),q(0),q(4)];
  requireThat(same(rho,[q(14,3),q(4,3),q(-2),q(-2),q(-2)]),'displayed neutralized density');
  const raw=w.map(x=>div(mul(2,x),h));
  requireThat(eq(mul(h,dot(raw,v)),mul(2,dot(w,v)))&&eq(mul(h,dot(rho,v)),sub(mul(2,dot(w,v)),mul(mul(2,h),sum(v)))),'deposit/gather adjoint including background');
  const delta=q(1,100), hat=x=>qcmp(x,0)<0?add(1,div(x,h)):sub(1,div(x,h));
  requireThat(eq(div(sub(hat(0),hat(sub(0,delta))),delta),5)&&eq(div(sub(hat(delta),hat(0)),delta),-5),'CIC one-sided slopes');
  return 'Exact N=5 CIC density, neutralization, raw/background adjoint pairings and kink slopes checked.';
});
fixture('regularized-first-mode',()=>{
  // Poisson-kernel closed form at alpha=1/2, epsilon=2*pi*log(2).
  // Fixed quadrature is a numerical comparison, not a certified continuum integral.
  const N=4096,L=2*Math.PI,a=.5,alpha=.5,h=L/N;
  const kernel=x=>(1-alpha*alpha)/(L*(1-2*alpha*Math.cos(x)+alpha*alpha));
  const nodes=Array.from({length:N},(_,j)=>h*j), density=y=>(1+a*Math.cos(y))/L;
  for(const x of [0,.3,Math.PI/2,Math.PI]) {
    const source=h*total(nodes.map(y=>kernel(x-y)*density(y)))-1/L;
    const field=y=>a*alpha/L*Math.sin(y), gathered=h*total(nodes.map(y=>kernel(x-y)*field(y)));
    requireThat(close(source,a*alpha/L*Math.cos(x),2e-11)&&close(gathered,a*alpha*alpha/L*Math.sin(x),2e-11),'two convolution multipliers');
  }
  requireThat(close(h*total(nodes.map(kernel)),1)&&close(h*total(nodes.map(y=>kernel(y)*Math.cos(y))),alpha),'kernel normalization/first coefficient');
  return '4096-node Poisson-kernel quadrature checks first source and gathered Fourier multipliers at four positions; no continuum certification or convergence claim.';
});
fixture('harmonic-leapfrog-half',()=>{
  const dt=q(1,2),half=div(dt,2);
  const step=(x,p,t)=>{const h=div(t,2),ph=sub(p,mul(h,x)),xn=add(x,mul(t,ph));return [xn,sub(ph,mul(h,xn))];};
  const [x,p]=step(q(1),q(0),dt), H=div(add(mul(x,x),mul(p,p)),2);
  requireThat(same([x,p],[q(7,8),q(-15,32)])&&eq(H,q(1009,2048))&&!eq(H,q(1,2)),'energy drift');
  requireThat(same(step(x,p,sub(0,dt)),[q(1),q(0)]),'reverse step');
  const c0=step(q(1),q(0),dt),c1=step(q(0),q(1),dt),det=sub(mul(c0[0],c1[1]),mul(c1[0],c0[1]));
  requireThat(eq(det,1)&&eq(half,q(1,4)),'two-dimensional symplectic determinant');
  return 'Exact kick-drift-kick, energy drift, inverse step and determinant-one map checked.';
});
fixture('one-cell-neumann-kernel',()=>{
  // Assemble from the empty interior-face list, rather than asserting the branch.
  const A=[[0]], faces=[]; for(const [i,j,T] of faces){A[i][i]+=T;A[j][j]+=T;A[i][j]-=T;A[j][i]-=T;}
  requireThat(A[0][0]===0&&fm(A,[1])[0]===0,'assembled constant kernel');
  for(const x of [-2,0,3]) {const projected=x-x;requireThat(projected===0&&fm(A,[x])[0]===0&&projected*projected<=fm(A,[x])[0]*x,'projection/Poincare branch');}
  // Gauge equation is the one-by-one identity; source projected to zero.
  const inverse=solveDense([[1]],[0]);requireThat(inverse.status==='success'&&inverse.x[0]===0,'unique gauged zero inverse');
  return 'Empty-face one-cell operator, constant kernel, three projections and uniquely solved zero gauge recomputed.';
});
fixture('one-cell-sav-step',()=>{
  const oldU=2,oldR=1.5,alpha=1/Math.sqrt((oldU*oldU-1)**2/4+1),g=oldU**3-oldU;
  // Unknown ordering (u_new,r_new,mu_new). Full three-equation SAV system.
  const B=[[1,0,0],[0,-alpha*g,1],[-alpha*g/2,1,0]],b=[oldU,0,oldR-alpha*g*oldU/2];
  const solved=solveDense(B,b); requireThat(solved.status==='success','one-cell SAV linear solve'); const [u,r,mu]=solved.x;
  requireThat(finite(solved.x)&&near(fm(B,solved.x),b)&&close(u,oldU)&&close(r,oldR)&&close(mu,alpha*r*g),'three equations/chemical potential');
  // Check invertibility independently by its nonzero scalar determinant.
  const det=B[0][0]*(B[1][1]*B[2][2]-B[1][2]*B[2][1]);
  requireThat(det===-1&&close((r*r-oldR*oldR)+(r-oldR)**2,0)&&close(u-oldU,0),'unique solution and modified-energy identity');
  return 'Nontrivial old state full 3x3 SAV equations solved; determinant, mean, chemical potential and zero-dissipation identity checked.';
});
fixture('one-cell-energy-implication',()=>{
  const potential=u=>div(mul(sub(mul(u,u),1),sub(mul(u,u),1)),4), old=[q(1),q(1)], next=[q(0),q(1,2)];
  const modified=[mul(old[1],old[1]),mul(next[1],next[1])],physical=[potential(old[0]),potential(next[0])];
  requireThat(same(modified,[q(1),q(1,4)])&&same(physical,[q(0),q(1,4)])&&qcmp(modified[1],modified[0])<0&&qcmp(physical[1],physical[0])>0,'opposite energy inequalities');
  return 'Exact scalar energies refute implication from modified-energy inequality alone; these pairs are not a SAV trajectory.';
});
fixture('two-cell-cubic-ledger',()=>{
  const poly=x=>2*x*x*x+7*x-5; let lo=0,hi=1;
  requireThat(poly(lo)===-5&&poly(hi)===4,'root bracket');
  for(let j=0;j<64;j++){const mid=(lo+hi)/2;if(poly(mid)>0)hi=mid;else lo=mid;}
  const a=(lo+hi)/2,A=[[1,-1],[-1,1]],old=[1,-1],next=[a,-a],Anext=fm(A,next),mu=next.map((x,j)=>Anext[j]+x**3+x-2*old[j]);
  const state=fm(A,mu), energy=x=>.5*total(fm(A,x).map((v,j)=>v*x[j]))+total(x.map(v=>(v*v-1)**2/4));
  requireThat(a>0&&a<1&&Math.abs(poly(a))<2e-14&&near(next.map((x,j)=>x-old[j]),state.map(x=>-x)),'bounded root solve and both raw state equations');
  requireThat(close(total(next),0)&&close(mu[0],a**3+3*a-2)&&energy(old)===2&&close(energy(next),2*a*a+.5*(1-a*a)**2)&&energy(next)<2,'chemical potential/mass/energy ledger');
  // Finite derivative samples supplement the analytic coefficient lower bound 7.
  requireThat([lo,a,hi].every(x=>6*x*x+7>=7),'positive polynomial derivative');
  return '64 bisections, raw two-cell chemical/state equations, mass and physical-energy ledger checked; no general root-existence proof claimed.';
});

function run(smoke={}) {
  try {
    requireThat(smoke && typeof smoke==='object'&&!Array.isArray(smoke)&&finite(smoke),'finite object input required (NaN/Infinity literals rejected)');
    requireThat(smoke.check===undefined||smoke.check==='numerical-frontier71-particle-fixture','unsupported check key');
    const allowed=new Set(['check','asserts','fixture','parameters','claim','checked_in']);
    requireThat(Object.keys(smoke).every(k=>allowed.has(k)),'unsupported top-level parameter');
    const p=smoke.parameters??{};
    requireThat(p && typeof p==='object'&&!Array.isArray(p)&&Object.keys(p).every(k=>k==='fixture'),'only fixed fixture parameter is supported');
    requireThat(smoke.fixture===undefined||p.fixture===undefined||smoke.fixture===p.fixture,'conflicting fixture selectors');
    const selector=p.fixture??smoke.fixture;
    requireThat(typeof selector==='string'&&Object.hasOwn(fixtures,selector),'unsupported fixture selector');
    const summary=fixtures[selector]();
    requireThat(typeof summary==='string'&&finite(summary),'nonfinite output rejected');
    return {ok:true,summary};
  } catch(error) {return {ok:false,summary:`Frontier71 particle fixture failed: ${error instanceof Error?error.message:'invalid input'}`};}
}
export const numericalFrontierParticleChecks = { 'numerical-frontier71-particle-fixture': run };
