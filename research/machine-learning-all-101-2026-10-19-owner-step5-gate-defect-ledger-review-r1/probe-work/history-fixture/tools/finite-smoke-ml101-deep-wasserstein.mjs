// Bounded deterministic fixtures, not proofs of the general cited results.
// Self-contained: the registry can import and spread deepWassersteinMLChecks.
const close = (a, b, tol = 1e-8) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a-b) <= tol * Math.max(1, Math.abs(b));
const norm2 = x => x.reduce((s,v)=>s+v*v,0);
const dot = (x,y)=>x.reduce((s,v,i)=>s+v*y[i],0);
const mv = (a,x)=>a.map(row=>dot(row,x));
const softplus = x => Math.max(x,0)+Math.log1p(Math.exp(-Math.abs(x)));
const gaussian = x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);
function simpson(f,a,b,n=4096) {
  const h=(b-a)/n;let s=f(a)+f(b);
  for(let i=1;i<n;i++)s+=(i%2?4:2)*f(a+i*h);
  return s*h/3;
}
function midpoint(f,a,b,n=4096) {const h=(b-a)/n;let s=0;for(let i=0;i<n;i++)s+=f(a+(i+.5)*h);return s*h;}
function permutations(a) {if(!a.length)return [[]];return a.flatMap((v,i)=>permutations(a.filter((_,j)=>j!==i)).map(p=>[v,...p]));}
function rk4(x,t,steps) {const h=t/steps;for(let i=0;i<steps;i++){const a=-x,b=-(x+h*a/2),c=-(x+h*b/2),d=-(x+h*c);x+=h*(a+2*b+2*c+d)/6;}return x;}
function callback(check, fixture, compute, selectors={}) {
  return (smoke={}) => {
    if(!smoke || typeof smoke!=='object' || Array.isArray(smoke))return {ok:false,summary:'smoke selector must be an object'};
    const metadata=['check','asserts','claim','checked_in','case','calculation','inputs','result','fixture','original_check','original_asserts'];
    const allowed=new Set([...metadata,...Object.keys(selectors)]);
    for(const key of Reflect.ownKeys(smoke))if(!allowed.has(key))return {ok:false,summary:`unsupported option ${String(key)} for ${check}`};
    if(smoke.check!==undefined && smoke.check!==check)return {ok:false,summary:`invalid check selector for ${check}`};
    if(smoke.fixture!==undefined && smoke.fixture!==fixture)return {ok:false,summary:`fixture must be ${fixture}`};
    for(const key of ['dimension','particles','path_segments','max_support_points'])if(smoke[key]!==undefined && !(key in selectors))return {ok:false,summary:`unsupported selector ${key} for ${check}`};
    for(const [key,value] of Object.entries(selectors))if(smoke[key]!==undefined && smoke[key]!==value)return {ok:false,summary:`${key} must be ${value}`};
    try {return compute();} catch(e) {return {ok:false,summary:String(e?.message??e)};}
  };
}
const result=(ok,summary)=>({ok:Boolean(ok),summary});
const phi=t=>t>0?Math.exp(-1/t):0;
const bump=t=>phi(t+1)*phi(1-t);
function bumpFixture(d) {
  const mass=simpson(bump,-1,1,8192),coarse=simpson(bump,-1,1,4096);
  if(!(mass>0 && Number.isFinite(mass)) || !close(mass,coarse,1e-10))return result(false,'bump normalizing quadratures disagree');
  const psi=t=>bump(t)/mass;
  if(d===1){
    const independentMass=midpoint(psi,-1,1,3072);
    const interior=[-.99,-.8,-.25,0,.25,.8,.99],exterior=[-3,-1.1,-1,1,1.1,3];
    return result(close(independentMass,1,1e-7) && interior.every(x=>psi(x)>0) && exterior.every(x=>psi(x)===0),`1D explicit exp bump: Simpson normalizer ${mass}; independent midpoint mass ${independentMass}, ${interior.length} positive interior and ${exterior.length} zero boundary/exterior samples; no all-orders smoothness claim`);
  }
  const n=256,h=2/n;let twoMass=0;
  // Direct two-dimensional cell sum, rather than returning the square of a 1D mass.
  for(let i=0;i<n;i++)for(let j=0;j<n;j++)twoMass+=psi(-1+(i+.5)*h)*psi(-1+(j+.5)*h)*h*h;
  const points=[[-.9,-.8],[0,0],[.3,.7],[.99,.99]],outside=[[-1,0],[0,1],[-2,.5],[.2,2],[1,1]];
  return result(close(twoMass,1,1e-7)&&points.every(([x,y])=>psi(x)*psi(y)>0)&&outside.every(([x,y])=>psi(x)*psi(y)===0),`2D explicit product bump: direct ${n*n}-cell integral ${twoMass}, ${points.length} positive interior and ${outside.length} zero boundary/exterior fixtures; no general Tonelli/smoothness proof`);
}
export const deepWassersteinMLChecks = {
  'ml101-du-softplus-normalizer':callback('ml101-du-softplus-normalizer','softplus',()=>{
    const f=z=>softplus(z)**2*gaussian(z),a=simpson(f,-10,10,4096),b=simpson(f,-10,10,8192);
    const lower=softplus(-.5)**2*simpson(gaussian,-.5,.5),upper=2*Math.log(2)**2+2;
    let affine=true;for(let k=-40;k<=40;k++){const z=k/4;affine&&=softplus(z)<=Math.log(2)+Math.abs(z)+1e-14;}
    return result(affine&&close(a,b,1e-10)&&a>lower&&a<upper&&Number.isFinite(1/a),`softplus squared Gaussian integral on [-10,10]: ${a}, independent refinement ${b}; positive interval lower fixture ${lower}, affine moment upper bound ${upper}; finite fixture only, no general activation theorem`);
  }),
  'ml101-du-gram-loss-contraction':callback('ml101-du-gram-loss-contraction','zero-residual-and-gram-grid',()=>{
    const matrices=[{g:[[1,0],[0,1]],lo:1,hi:1},{g:[[2,1],[1,2]],lo:1,hi:3}];let cases=0,zeros=0;
    for(const {g,lo,hi} of matrices)for(const eta of [1/(4*hi),1/hi])for(let x=-2;x<=2;x++)for(let y=-2;y<=2;y++)for(const direction of [[0,0],[1,0],[-1,0],[0,1],[0,-1]]){
      const r=[x,y],radius=eta*lo*Math.sqrt(norm2(r))/4,R=direction.map(v=>v*radius),gr=mv(g,r),next=r.map((v,i)=>v-eta*gr[i]+R[i]);
      if(norm2(R)>radius**2+1e-14 || .5*norm2(next)>(1-eta*lo/2)*.5*norm2(r)+1e-12)return result(false,`Gram fixture failed at r=${r}, eta=${eta}`);
      if(!norm2(r)){zeros++;if(norm2(R)!==0||norm2(next)!==0)return result(false,'zero residual did not force zero update and losses');}cases++;
    }
    return result(zeros>0,`${cases} direct matrix/remainder updates including ${zeros} zero-residual fixtures; both quadratic losses zero for r=0, contraction checked on the finite grid only`);
  }),
  'ml101-du-zero-feature-output':callback('ml101-du-zero-feature-output','zero-feature-matrix',()=>{
    let cases=0;for(const n of [1,2,3])for(const m of [1,2,3]){
      const Phi=Array.from({length:n},()=>Array(m).fill(0)),G=Phi.map(row=>Phi.map(other=>dot(row,other))),trace=G.reduce((s,row,i)=>s+row[i],0),frobenius=Math.sqrt(Phi.reduce((s,row)=>s+norm2(row),0));
      for(const a of Array.from({length:9},(_,k)=>Array.from({length:m},(_,j)=>(k+2*j)%5-2)))for(const delta of [.1,.5,.9]){
        const u=mv(Phi,a),threshold=Math.sqrt(trace)+frobenius*Math.sqrt(2*Math.log(1/delta));
        if(norm2(u)!==0||trace!==0||frobenius!==0||threshold!==0||Math.sqrt(norm2(u))>threshold)return result(false,'zero-feature image/Gram/event fixture failed');cases++;
      }
    }
    return result(cases>0,`${cases} zero-matrix image/Gram/threshold evaluations across dimensions1..3; every sampled output is zero and inside the zero threshold, no nonzero Gaussian tail theorem checked`);
  }),
  'ml101-du-relu-one-sided-derivatives':callback('ml101-du-relu-one-sided-derivatives','relu-at-zero',()=>{
    const f=x=>Math.max(0,x);let cases=0;for(let k=1;k<=24;k++){
      const h=2**(-k),left=(f(-h)-f(0))/(-h),right=(f(h)-f(0))/h;
      if(left!==0||right!==1||left===right)return result(false,`ReLU difference quotients agree or have wrong values at h=${h}`);cases++;
    }return result(cases>0,`${cases} dyadic one-sided quotient pairs computed from max(0,t): left0/right1; only the stated kink fixture checked`);
  }),
  'ml101-du-depth-three-residual-skips':callback('ml101-du-depth-three-residual-skips','depth-three-residual',()=>{
    const m=1,H=3,cres=.6,cs=1/simpson(z=>softplus(z)**2*gaussian(z),-10,10),weights=[.5,-.75,.25],x=1;
    let state=Math.sqrt(cs/m)*softplus(weights[0]*x);const initial=state,states=[state],branches=[];
    for(let h=1;h<H;h++){const branch=cres/(H*Math.sqrt(m))*softplus(weights[h]*state);branches.push(branch);state+=branch;states.push(state);}
    const explicit2=initial+.2*softplus(-.75*initial),explicit3=explicit2+.2*softplus(.25*explicit2);
    return result(close(states[1],explicit2)&&close(states[2],explicit3)&&branches.every(v=>v>0)&&close(states[1]-branches[0],initial)&&close(states[2]-branches[1],states[1])&&!close(states[1],branches[0])&&!close(states[2],branches[1]),`scalar softplus H=3 recurrence evaluated: states ${states.join(',')}; explicit unrolling and subtracting each nonlinear branch recover both nonzero identity skips`);
  }),
  'ml101-du-interpolation-test-counterexample':callback('ml101-du-interpolation-test-counterexample','one-training-point',()=>{
    const predictors=[()=>0,x=>x],training=[[0,0]],test=1,losses=predictors.map(g=>training.reduce((s,[x,y])=>s+(g(x)-y)**2/2,0)),predictions=predictors.map(g=>g(test));
    return result(losses.every(x=>x===0)&&predictions[0]===0&&predictions[1]===1&&predictions[0]!==predictions[1],`direct predictor evaluation: training losses ${losses}, test predictions ${predictions}; the one-point counterexample only`);
  }),
  'ml101-w2-tight-tail-dirac-witness':callback('ml101-w2-tight-tail-dirac-witness','n-two-dirac-cost',()=>{
    let cases=0;for(const n of [1,2,4,8,16]){
      const law=[[0,1-1/(n*n)],[n,1/(n*n)]],joint=law.map(([x,p])=>({x,y:0,p})),mass=joint.reduce((s,z)=>s+z.p,0),cost=joint.reduce((s,z)=>s+z.p*(z.x-z.y)**2,0),target=joint.reduce((s,z)=>s+(z.y===0?z.p:0),0);
      if(mass!==1||target!==1||cost!==1)return result(false,`point-target coupling mismatch at n=${n}`);
      if(n===2 && (joint[0].p!==.75||joint[1].p!==.25||joint[1].x!==2))return result(false,'n=2 original witness changed');cases++;
    }return result(cases>0,`${cases} forced point-target joint tables, including (3/4)delta0+(1/4)delta2, have total mass1 and computed transport cost1; no tightness/narrow-limit theorem proved`);
  }),
  'ml101-bump-one-dimensional-mass':callback('ml101-bump-one-dimensional-mass','one-dimensional-bump',()=>bumpFixture(1)),
  'ml101-bump-two-dimensional-mass':callback('ml101-bump-two-dimensional-mass','two-dimensional-bump',()=>bumpFixture(2)),
  'ml101-w2-translated-dirac-action':callback('ml101-w2-translated-dirac-action','a-two-b-three-T-two',()=>{
    const times=[0,.25,.5,1,1.5,2],position=t=>2+3*t;let action=0,pairs=0;
    for(let i=0;i<times.length;i++)for(let j=i+1;j<times.length;j++){
      const cost=(position(times[j])-position(times[i]))**2,speed=Math.sqrt(cost)/(times[j]-times[i]);if(speed!==3)return result(false,'forced Dirac coupling speed differs from3');pairs++;
    }
    for(let i=1;i<times.length;i++){const dt=times[i]-times[i-1],velocity=(position(times[i])-position(times[i-1]))/dt;action+=velocity*velocity*dt;}
    return result(action===18,`${pairs} point-pair coupling costs give speed3; action independently accumulated over ${times.length-1} path increments is ${action}; only the finite translated path fixture checked`);
  }),
  'ml101-w2-isotropic-gaussian-geodesic':callback('ml101-w2-isotropic-gaussian-geodesic','one-dimensional-gaussian-endpoints',()=>{
    const at=(t,z)=>2*t+(1+2*t)*z,cost=simpson(z=>(at(1,z)-at(0,z))**2*gaussian(z),-10,10),midMean=simpson(z=>at(.5,z)*gaussian(z),-10,10),midVariance=simpson(z=>(at(.5,z)-midMean)**2*gaussian(z),-10,10);
    if(!close(cost,8)||!close(midMean,1)||!close(midVariance,4))return result(false,'Gaussian coupling/midpoint quadrature differs from8,1,4');
    const z=[-Math.sqrt(1.5),0,Math.sqrt(1.5)],perms=permutations([0,1,2]),times=[0,.25,.5,.75,1];let pairs=0;
    for(const s of times)for(const t of times){const left=z.map(x=>at(s,x)),right=z.map(x=>at(t,x)),minimum=Math.min(...perms.map(p=>left.reduce((v,x,i)=>v+(x-right[p[i]])**2/3,0)));if(!close(minimum,8*(t-s)**2))return result(false,'enumerated finite coupling optimum has wrong subsegment speed');pairs++;}
    return result(pairs>0,`Gaussian shared-coordinate quadrature: endpoint cost ${cost}, midpoint mean ${midMean}, scale ${Math.sqrt(midVariance)}; ${pairs} three-atom subsegment models enumerate all6 permutation couplings and have the expected speed; no general Gaussian optimality proof`);
  }),
  'ml101-meanfield-radial-separation':callback('ml101-meanfield-radial-separation','one-segment-radial',()=>{
    let crossings=0;for(let i=0;i<8;i++)for(let j=0;j<8;j++){
      const a=[.5*Math.cos(i*Math.PI/4),.5*Math.sin(i*Math.PI/4)],b=[2*Math.cos(j*Math.PI/4),2*Math.sin(j*Math.PI/4)],v=b.map((x,k)=>x-a[k]),A=norm2(v),B=2*dot(a,v),C=norm2(a)-1,disc=B*B-4*A*C,t=(-B+Math.sqrt(disc))/(2*A),point=a.map((x,k)=>x+t*v[k]);
      if(!(t>0&&t<1)||!close(norm2(point),1))return result(false,'straight path did not cross the unit circle');crossings++;
    }
    const a=[.5,0],b=[2,0],v=b.map((x,k)=>x-a[k]),closest=Math.max(0,Math.min(1,-dot(a,v)/norm2(v))),minNorm=Math.sqrt(norm2(a.map((x,k)=>x+closest*v[k])));
    return result(close(Math.sqrt(norm2(a)),.5)&&close(Math.sqrt(norm2(b)),2)&&minNorm===.5,`${crossings} straight sphere-to-sphere paths have computed unit-circle intersections; the exhibited positive radial segment has minimum norm ${minNorm} and avoids the origin; no assertion about all continuous paths or flow limits`);
  },{path_segments:1}),
  'ml101-meanfield-sine-dirac-geodesic':callback('ml101-meanfield-sine-dirac-geodesic','sine-dirac-endpoints',()=>{
    const energy=atoms=>atoms.reduce((s,[x,p])=>s+p*Math.sin(x),0)**2,values=[0,.5,1].map(t=>energy([[Math.PI*t,1]]));
    if(!close(values[0],0)||!close(values[2],0)||!close(values[1],1)||!(values[1]>(values[0]+values[2])/2+.9))return result(false,'sine Dirac midpoint does not violate zero-semiconvexity');
    let cases=0;for(const a of [-1,0,.5,1])for(const b of [-1,0,.5,1])for(const t of [0,.25,.5,.75,1]){
      const atoms0=[[Math.asin(a),1]],atoms1=[[Math.asin(b),1]],mixture=[[atoms0[0][0],1-t],[atoms1[0][0],t]];if(energy(mixture)>(1-t)*energy(atoms0)+t*energy(atoms1)+1e-12)return result(false,'finite mixture Jensen inequality failed');cases++;
    }return result(cases>0,`Dirac path energies ${values.join(',')} give endpoint0/midpoint1; ${cases} direct at-most-two-atom mixture fixtures satisfy convexity, without claiming a general measure proof`);
  },{max_support_points:2}),
  'ml101-meanfield-quadratic-particle-flow':callback('ml101-meanfield-quadratic-particle-flow','one-dimensional-one-particle',()=>{
    const energy=xs=>norm2(xs)/(2*xs.length);let derivatives=0;
    for(const xs of [[-2],[-1],[0],[1],[2],[1,-2]])for(let i=0;i<xs.length;i++){
      const eps=1e-5,left=[...xs],right=[...xs];left[i]-=eps;right[i]+=eps;const weighted=xs.length*(energy(right)-energy(left))/(2*eps);if(!close(weighted,xs[i],1e-9))return result(false,'weighted empirical energy gradient has wrong particle normalization');derivatives++;
    }
    let times=0;for(const t of [0,.25,.5,1,2]){
      const evolved=rk4(1,t,256),refined=rk4(1,t,512),exact=Math.exp(-t),comparison=rk4(2,t,256);
      if(!close(evolved,exact,1e-9)||!close(refined,evolved,1e-9)||!close(Math.abs(comparison-evolved),exact,1e-9))return result(false,`RK4 particle/pushforward/Dirac scaling mismatch at t=${t}`);times++;
    }return result(times>0&&derivatives>0,`${derivatives} empirical-energy finite differences check weighted particle gradients; RK4 and refinement at ${times} times match exp(-t), its one-atom pushforward and Dirac transport scaling; no general PDE uniqueness or particle-limit claim`);
  },{dimension:1,particles:1}),
};
