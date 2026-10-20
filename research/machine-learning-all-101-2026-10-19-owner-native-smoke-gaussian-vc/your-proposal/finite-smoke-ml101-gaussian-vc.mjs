// Fixed bounded smoke fixtures, never proofs of the general source claims.
const result=(ok,summary)=>({ok,summary});
const near=(a,b,t=2e-6)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=t*(1+Math.abs(b));
const phi=(x,v=1)=>Math.exp(-x*x/(2*v))/Math.sqrt(2*Math.PI*v);
function integral(f,a,b,n=4096){let z=f(a)+f(b);for(let k=1;k<n;k++)z+=(k%2?4:2)*f(a+(b-a)*k/n);return z*(b-a)/(3*n);}
const normalMoment=f=>integral(z=>phi(z)*f(z),-10,10);
const d1=(f,x,h=1e-4)=>(f(x+h)-f(x-h))/(2*h);
const d2=(f,x,h=2e-4)=>(f(x+h)-2*f(x)+f(x-h))/(h*h);
const checks={};
function register(name,fixture,selectors,fn){checks[name]=smoke=>{
 const allowed=new Set(['check','asserts','claim','checked_in','result','fixture',...Object.keys(selectors)]);
 if(!smoke||typeof smoke!=='object'||Array.isArray(smoke)||smoke.fixture!==fixture||Object.keys(smoke).some(k=>!allowed.has(k))||Object.entries(selectors).some(([k,v])=>smoke[k]!==v))return result(false,`invalid selectors; expected fixture=${fixture} and ${JSON.stringify(selectors)}`);
 try{return fn();}catch(e){return result(false,`fixture computation failed: ${e.message}`);}
};}
register('ml101-constant-integrand-increment','scalar-adjacent-gaussian-integrals',{dimension:1,intervals:2},()=>{
 let cases=0;for(const c of [.5,1,2])for(const theta of [-1,.25,1.5]){
 const a=c*Math.sqrt(.25),b=c*Math.sqrt(.75);
 const marginal=normalMoment(z=>Math.cos(theta*a*z));
 let re=0,im=0;const n=240,h=20/n;
 // Direct tensor quadrature of the joint two-increment density.
 for(let j=0;j<=n;j++)for(let k=0;k<=n;k++){const x=-10+j*h,y=-10+k*h,w=(j===0||j===n?1:j%2?4:2)*(k===0||k===n?1:k%2?4:2)*phi(x)*phi(y)*h*h/9;re+=w*Math.cos(theta*a*x+.7*b*y);im+=w*Math.sin(theta*a*x+.7*b*y);}
 const second=normalMoment(z=>Math.cos(.7*b*z));
 if(!near(marginal,Math.exp(-theta*theta*a*a/2))||!near(re,marginal*second)||!near(im,0))return result(false,'joint increment characteristic-function quadrature mismatch');cases++;
 }return result(true,`${cases} scalar constant-integrand joint Gaussian quadratures; adjacent increments factor within tolerance`);
});
register('ml101-point-mass-and-gaussian-convolution','scalar-point-and-convolution',{dimension:1,atoms:1},()=>{
 for(const a of [-1,0,2])for(const v of [.25,1,2]){const mass=integral(x=>phi(x-a,v),a-10*Math.sqrt(v),a+10*Math.sqrt(v));if(!near(mass,1))return result(false,'translated density mass mismatch');}
 for(const [v,w] of [[.25,.75],[1,2]])for(const x of [-1,0,2]){const q=integral(z=>phi(z,v)*phi(x-z,w),-16,16);if(!near(q,phi(x,v+w)))return result(false,'direct convolution integral disagrees');}
 return result(true,'9 translated density masses and 6 direct convolution integrals verify point specialization and variance addition');
});
register('ml101-point-mass-heat-equation','scalar-heat-finite-differences',{dimension:1},()=>{
 let n=0;for(const c of [.5,1,2])for(const t of [.5,1,2])for(const x of [-1,0,1]){const dt=d1(s=>phi(x,c*c*s),t),lap=d2(y=>phi(y,c*c*t),x);if(!near(dt,c*c*lap/2,1e-5))return result(false,'time/spatial independent finite differences disagree');n++;}return result(true,`${n} positive-time heat-kernel derivative comparisons; endpoint/general PDE not tested`);
});
register('ml101-symmetric-two-point-posterior','scalar-symmetric-mixture',{dimension:1,atoms:2},()=>{
 for(const r of [.5,1,2])for(const v of [.5,1,2]){const atoms=[-r,r],ws=atoms.map(a=>phi(-a,v)/2),p=ws.reduce((a,b)=>a+b),m=atoms.reduce((s,a,i)=>s+a*ws[i],0)/p,C=atoms.reduce((s,a,i)=>s+(a-m)**2*ws[i],0)/p;const logp=x=>Math.log((phi(x-r,v)+phi(x+r,v))/2);if(!near(m,0)||!near(C,r*r)||!near(d1(logp,0),0)||!near(d2(logp,0),-1/v+r*r/(v*v),1e-5))return result(false,'posterior summation or independent log-density derivative mismatch');}
 return result(true,'9 symmetric two-atom posterior means/covariances and numerical log-density derivatives checked');
});
function pointCost(){for(const c of [.5,1,2])for(const eps of [.125,.5,1])for(const a of [-2,0,1]){const cost=normalMoment(z=>(a+c*Math.sqrt(eps)*z-a)**2);if(!near(cost,c*c*eps)||!near(Math.sqrt(cost),c*Math.sqrt(eps)))return result(false,'direct point-mass displacement quadrature mismatch');}return result(true,'27 direct Gaussian displacement second moments agree with scalar point coupling cost; deterministic marginal fixes the point coordinate');}
register('ml101-point-mass-endpoint-cost','scalar-endpoint-second-moment',{dimension:1},pointCost);
register('ml101-constant-noise-point-coupling','scalar-dirac-coupling-cost',{dimension:1},pointCost);
register('ml101-mixture-weight-boundaries','scalar-mixture-degeneracies',{dimension:1},()=>{
 const mix=(atoms,x,v)=>atoms.reduce((s,[a,w])=>s+w*phi(x-a,v),0);let n=0;
 for(const v of [.25,1,2])for(const x of [-2,0,1])for(const [atoms,center] of [[[[-1,0],[2,1]],2],[[[-1,1],[2,0]],-1],[[[1,.3],[1,.7]],1]]){const merged=new Map();for(const [a,w]of atoms)merged.set(a,(merged.get(a)||0)+w);const nonzero=[...merged].filter(([,w])=>w!==0);if(nonzero.length!==1||nonzero[0][0]!==center||!near(nonzero[0][1],1)||!near(mix(atoms,x,v),phi(x-center,v)))return result(false,'weighted atom collapse mismatch');n++;}return result(true,`${n} boundary-weight/coincident-atom density evaluations and independently merged atom tables checked`);
});
register('ml101-line-density-integrand','planar-unit-segment',{dimension:2,support_segments:1},()=>{
 let n=0;for(const v of [.25,1,2])for(const x of [-1,0,1])for(const y of [-1,0,1]){const f=u=>phi(x-u,v)*phi(y,v),p=integral(f,0,1),dx=integral(u=>-(x-u)/v*f(u),0,1);if(!(p>0)||!near(dx,d1(z=>integral(u=>phi(z-u,v)*phi(y,v),0,1),x)))return result(false,'line convolution positivity/differentiation mismatch');for(let k=0;k<=32;k++){const u=k/32,q=f(u);const bounds=[q,Math.abs((x-u)/v*q),Math.abs(((x-u)**2/v**2-1/v)*q)];if(bounds.some(b=>!Number.isFinite(b))||!(q>0))return result(false,'nonfinite sampled compact derivative bound');}n++;}return result(true,`${n} planar line convolution quadratures, positive sampled integrands and first/second derivative bounds on the fixed compact grid; not an all-orders theorem`);
});
register('ml101-translated-gaussian-score','scalar-translated-log-density',{dimension:1,atoms:1},()=>{
 for(const a of [-1,0,2])for(const v of [.25,1,2])for(const x of [-1,0,1]){const l=z=>Math.log(phi(z-a,v)),score=d1(l,x);if(!near(score,-(x-a)/v)||!near(d2(l,x),-1/v,1e-5))return result(false,'numerical log-density score mismatch');const sx=d1(l,x+.5);if(!near(Math.abs(sx-score)/.5,1/v))return result(false,'point score secant ratio mismatch');}return result(true,'27 translated log-density finite differences and score secant ratios verify the scalar Lipschitz constant');
});
const vectors=n=>Array.from({length:2**n},(_,k)=>Array.from({length:n},(_,i)=>(k>>i)&1));
const trace=(H,tuple)=>new Set(H.map(h=>tuple.map(i=>h[i]).join('')));
const tuples=(size,n)=>n===0?[[]]:tuples(size,n-1).flatMap(t=>Array.from({length:size},(_,i)=>[...t,i]));
function dim(H,n){let d=0;for(let mask=0;mask<2**n;mask++){const ix=Array.from({length:n},(_,i)=>i).filter(i=>mask>>i&1);if(trace(H,ix).size===2**ix.length)d=Math.max(d,ix.length);}return d;}
register('ml101-vc-empty-tuple','nonempty-binary-classes-empty',{},()=>{for(let mask=1;mask<256;mask++){const H=vectors(3).filter((_,i)=>mask>>i&1);if(trace(H,[]).size!==1||!trace(H,[]).has(''))return result(false,'empty trace mismatch');}return result(true,'all 255 nonempty binary classes on a three-point universe have the unique empty trace');});
register('ml101-vc-constant-one-point','constant-classes-one-coordinate',{},()=>{for(const h of [[0,0,0],[1,1,1]])for(const i of [0,1,2])if(trace([h],[i]).size!==1)return result(false,'constant class shattered a point');return result(true,'six constant-class one-coordinate traces enumerated; none shattered');});
function growthSmall(m){for(let mask=1;mask<256;mask++){const H=vectors(3).filter((_,i)=>mask>>i&1),sizes=tuples(3,m).map(t=>trace(H,t).size),max=Math.max(...sizes);const expected=m===0?1:(H[0].some((value,i)=>H.some(h=>h[i]!==value))?2:1);if(max!==expected)return result(false,'trace maximum disagrees with independent empty-tuple/pointwise-variation criterion');}return result(true,`all 255 nonempty binary classes and every ${m}-tuple on three points enumerated`);}
register('ml101-vc-growth-zero','all-three-point-classes-m0',{},()=>growthSmall(0));
register('ml101-vc-growth-one','all-three-point-classes-m1',{},()=>growthSmall(1));
register('ml101-vc-rademacher-one','one-coordinate-two-traces',{},()=>{const val=[-1,1].reduce((s,sig)=>s+Math.max(...[0,1].map(g=>sig*g)),0)/2;const K0=3*Math.E**2/(Math.E-1),A=12*Math.E*4*K0+2,C=3*Math.sqrt(8*A)*(Math.sqrt(Math.log(A))+2*Math.sqrt(Math.log(2)));return result(val===.5&&val<C*Math.sqrt(2),`exact two-sign enumeration gives ${val}, below the stated fixed constant`);});
register('ml101-vc-sauer-two-one','two-coordinate-sauer-families',{},()=>{let n=0;for(let mask=1;mask<16;mask++){const H=vectors(2).filter((_,i)=>mask>>i&1);if(dim(H,2)<=1){if(H.length>3)return result(false,'dimension-one family exceeds three');n++;}}const H=[[0,0],[1,0],[0,1]];return result(n>0&&dim(H,2)===1&&H.length===3,`${n} nonempty dimension-at-most-one families enumerated; extremal family size three`);});
function choose(n,k){let c=1;for(let j=1;j<=k;j++)c=c*(n-j+1)/j;return c;}
register('ml101-vc-single-class-hoeffding','bernoulli-singleton-exact-tails',{},()=>{let n=0;for(let m=1;m<=12;m++)for(const p of [.1,.25,.5,.9])for(const delta of [.05,.25,.75]){const t=Math.sqrt(Math.log(2/delta)/(2*m));let prob=0;for(let k=0;k<=m;k++)if(Math.abs(k/m-p)>t)prob+=choose(m,k)*p**k*(1-p)**(m-k);if(prob>delta+1e-12)return result(false,'exact binomial tail violates singleton threshold');n++;}return result(true,`${n} exact finite Bernoulli-sample tail sums checked against singleton Hoeffding threshold`);});
register('ml101-vc-realizable-zero','three-point-zero-vc-realizable',{},()=>{let n=0;for(let mask=1;mask<256;mask++){const H=vectors(3).filter((_,i)=>mask>>i&1);if(dim(H,3)!==0)continue;for(const sample of tuples(3,3)){const labels=sample.map(i=>H[0][i]);for(const h of H){const empirical=sample.filter((x,j)=>h[x]!==labels[j]).length/3;const risk=h.filter((v,i)=>v!==H[0][i]).length/3;if(empirical!==0||risk!==0)return result(false,'zero-VC realizable risk mismatch');n++;}}}return result(true,`${n} realizable labeled sample/output risks enumerated across every zero-VC class on three points`);});
register('ml101-vc-agnostic-zero','three-point-zero-vc-agnostic',{},()=>{let n=0;for(let mask=1;mask<256;mask++){const H=vectors(3).filter((_,i)=>mask>>i&1);if(dim(H,3)!==0)continue;for(const labels of vectors(3)){const risks=H.map(h=>h.filter((v,i)=>v!==labels[i]).length/3),best=Math.min(...risks);if(risks.some(r=>r-best!==0))return result(false,'zero-VC agnostic excess mismatch');n++;}}return result(true,`${n} arbitrary-label finite laws checked against all zero-VC class outputs; excess zero`);});
// Generate from actual real parameter grids, rather than the count formulas.
function parameterTraces(type,m){const x=Array.from({length:m},(_,i)=>i),H=[];if(type==='threshold')for(let t=-1;t<=m;t+=.5)H.push(x.map(v=>Number(v<=t)));if(type==='interval')for(let a=-1;a<=m;a+=.5)for(let b=a;b<=m;b+=.5)H.push(x.map(v=>Number(a<=v&&v<=b)));if(type==='singleton'){H.push(x.map(()=>0));for(let a=0;a<=m;a++)H.push(x.map(v=>Number(v===a)));}return new Set(H.map(h=>h.join('')));}
for(const [name,type,expected] of [['threshold','threshold',[1,2,3]],['interval','interval',[1,2,4,7]],['singleton','singleton',[1,2,3,4]]])register(`ml101-vc-${name}-growth`,`${type}-parameter-grid`,{},()=>{for(let m=0;m<expected.length;m++){const set=parameterTraces(type,m);if(set.size!==expected[m])return result(false,`${type} m=${m} traces=${set.size}`);if(type==='interval'&&m===3&&(set.has('101')||set.size!==7))return result(false,'interval forbidden labeling mismatch');}return result(true,`${type} explicit classifier parameter evaluations give growth counts ${expected.join(',')}; bounded sample lengths only`);});
register('ml101-vc-affine-p1','scalar-affine-parameter-grid',{},()=>{for(const m of [2,3]){const x=Array.from({length:m},(_,i)=>i),set=new Set();for(const w of [-1,0,1])for(let b=-4;b<=4;b+=.5)set.add(x.map(v=>Number(w*v+b>=0)).join(''));if(m===2&&set.size!==4||m===3&&(set.size!==6||set.has('010')||set.has('101')))return result(false,'scalar affine shattering mismatch');}return result(true,'affine parameter evaluations shatter {0,1}; three ordered points have six traces, excluding 010 and 101');});
export const gaussianVCMLChecks=Object.freeze(checks);
