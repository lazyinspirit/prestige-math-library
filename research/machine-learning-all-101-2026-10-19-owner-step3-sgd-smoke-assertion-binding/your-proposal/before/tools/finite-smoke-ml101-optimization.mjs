// Independent bounded fixtures only. No claim about general convergence, integrability or regret.
export const optimizationMLChecks = {};
const close=(a,b)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=2e-12*Math.max(1,Math.abs(a),Math.abs(b));
const result=(ok,summary)=>({ok,summary});
function define(name,selectors,calculate){
 optimizationMLChecks[name]=smoke=>{
  const metadataKeys=new Set(['check','asserts','selectors','case','calculation','result','claim','checked_in','horizon','iterations','indices','sample_size','batch_size','original_check','original_asserts']);
  if(!smoke||typeof smoke!=='object'||Array.isArray(smoke))return result(false,'Fixture must be an object.');
  if(Reflect.ownKeys(smoke).some(k=>typeof k!=='string'||!metadataKeys.has(k)))return result(false,'Unknown top-level fixture metadata field.');
  if(Object.hasOwn(smoke,'check')&&smoke.check!==name)return result(false,'Callback check ID mismatch.');
  if(!smoke.selectors||typeof smoke.selectors!=='object'||Array.isArray(smoke.selectors))return result(false,'Missing fixed fixture selectors.');
  const keys=Object.keys(selectors),got=Object.keys(smoke.selectors);
  if(got.length!==keys.length||keys.some(k=>!Object.hasOwn(smoke.selectors,k)||!Object.is(smoke.selectors[k],selectors[k])))return result(false,`Unsupported selectors for ${name}.`);
  for(const k of ['horizon','iterations','indices','sample_size','batch_size'])if(Object.hasOwn(smoke,k)&&(!Object.hasOwn(selectors,k)||!Object.is(smoke[k],selectors[k])))return result(false,`Invalid legacy selector ${k}.`);
  if(Object.hasOwn(smoke,'parameters'))return result(false,'This fixture accepts no free parameters.');
  try{return calculate();}catch(e){return result(false,`Bounded calculation failed: ${e.message}`);}
 };
}
const quadratic=x=>x*x/2;
function enumerateSigns(n,visit){for(let mask=0;mask<2**n;mask++){let a=[];for(let j=0;j<n;j++)a.push(mask&(1<<j)?1:-1);visit(a,1/2**n);}}
function rawMoments(gradients,beta2){let v=0,maximum=0;return gradients.map(g=>{v=beta2*v+(1-beta2)*g*g;maximum=Math.max(maximum,v);return{v,maximum};});}
define('ml101-gd-one-step-lower-bound',{fixture:'quadratic-t1',horizon:1},()=>{
 let count=0;for(const curvature of [1,2,4])for(const x of [-2,-1,0,1,2])for(const fraction of [.25,.5,1]){
  const F=z=>curvature*z*z/2,alpha=fraction/curvature;
  // Symmetric difference is exactly the derivative of this quadratic, not a descent-bound oracle.
  const gradient=(F(x+1)-F(x-1))/2,next=x-alpha*gradient;
  const decrease=F(x)-F(next),sufficient=alpha*gradient*gradient/2;
  if(decrease+1e-12<sufficient||gradient*gradient>2*(F(x)-0)/alpha+1e-12)return result(false,'One-step descent/lower-bound counterexample in quadratic grid.');count++;
 }return result(true,`${count} independently updated one-step quadratic models satisfy the finite-horizon bound; no limit tested.`);
});
define('ml101-gd-cosine-fixed-endpoints',{fixture:'cosine-boundaries',horizon:1},()=>{
 const states=[0,2*Math.PI],rows=states.map(x=>({x,next:x-Math.sin(x),objective:1-Math.cos(x),gradient:Math.sin(x)}));
 return result(rows.every(r=>close(r.next,r.x)&&close(r.objective,0)&&close(r.gradient,0)),'Two periodic boundary starts are fixed to floating-point tolerance; no basin convergence tested.');
});
define('ml101-gd-saddle-first-two-iterates',{fixture:'saddle-trajectory',horizon:2},()=>{
 const F=([x,y])=>x*x-y*y;let w=[1,0],states=[w];for(let t=0;t<2;t++){const g=w.map((_,i)=>{const plus=[...w],minus=[...w];plus[i]++;minus[i]--;return(F(plus)-F(minus))/2;});w=w.map((x,i)=>x-g[i]/4);states.push(w);}
 const expected=[[1,0],[.5,0],[.25,0]],values=states.map(F);
 return result(states.every((s,t)=>s.every((x,i)=>close(x,expected[t][i])))&&close(values[1],1/4)&&close(values[2],1/16),'Direct two-dimensional quadratic difference/update gives (1/2,0),(1/4,0) and objectives 1/4,1/16; no infinite trajectory claim.');
});
define('ml101-sgd-scalar-two-step-integrability',{fixture:'deterministic-trajectory',horizon:2},()=>{
 let x=1;const states=[x];for(const [g,step]of [[2,1/2],[3,1/3]]){x-=step*g;states.push(x);}const momentRows=states.map(x=>({stateSecond:x*x,gradientSecond:x*x,objectiveAbsolute:Math.abs(quadratic(x))}));
 return result(close(states[1],0)&&close(states[2],-1)&&momentRows.every(r=>Object.values(r).every(Number.isFinite)),'Three singleton-law states have directly finite state/gradient second moments and absolute objective expectations; no general integrability proof.');
});
define('ml101-sgd-two-point-weighted-expectation',{fixture:'finite-product-law',indices:2},()=>{
 const base=[1/4,3/4],index=[1/3,2/3],H=[[2,4],[0,6]];let mass=0,lifted=0,absolute=0;const marginal=[0,0];
 for(let w=0;w<2;w++)for(let k=0;k<2;k++){const p=base[w]*index[k];mass+=p;marginal[k]+=p;lifted+=p*H[k][w];absolute+=p*Math.abs(H[k][w]);}
 const means=H.map(h=>h.reduce((s,x,w)=>s+base[w]*x,0)),weighted=means.reduce((s,x,k)=>s+index[k]*x,0);
 return result(close(mass,1)&&marginal.every((x,k)=>close(x,index[k]))&&close(means[0],7/2)&&close(means[1],9/2)&&close(lifted,25/6)&&close(lifted,weighted)&&Number.isFinite(absolute),'Four product atoms independently give mass one, index marginals and expectation 25/6.');
});
define('ml101-sgd-one-step-smoothness-equality',{fixture:'quadratic-descent',iterations:1},()=>{
 const x=1,direction=1,alpha=.5,next=x-alpha*direction,gradient=(quadratic(x+1)-quadratic(x-1))/2;
 const actual=quadratic(next),descent=quadratic(x)-alpha*gradient*direction+alpha*alpha*direction*direction/2;
 return result(close(next,.5)&&close(actual,1/8)&&close(actual,descent),'Direct updated objective equals 1/8 and the one-step smoothness upper expression; zero noise.');
});
define('ml101-sgd-single-iterate-weighted-equality',{fixture:'weighted-one-index',iterations:1},()=>{
 const gamma=1,L=1,x=1,gradient=(quadratic(x+1)-quadratic(x-1))/2;const next=x-gamma*gradient;
 const atoms=[{mass:1,value:gradient*gradient/L}],lhs=atoms.reduce((s,a)=>s+a.mass*a.value,0),a=2*gamma-L*gamma*gamma,D2=2*(quadratic(x)-quadratic(next))/L;
 return result(close(next,0)&&close(a,1)&&close(D2,1)&&close(lhs,1)&&close(lhs,D2/a),'Explicit single-index law and one-step quadratic reach the weighted bound at one; no general SGD rate tested.');
});
define('ml101-sgd-two-step-sign-cube-moment',{fixture:'noise-sign-cube',horizon:2},()=>{
 const alpha=1/4,moments=[0,0,0];enumerateSigns(2,(signs,p)=>{let x=0;for(let t=0;t<2;t++){x-=alpha*(x+signs[t]);moments[t+1]+=p*x*x;}});
 // The promised floor is checked only as the invariant second moment of a finite two-sign transition.
 const invariant=1/7,amplitude=Math.sqrt(invariant);let after=0;for(const xsign of[-1,1])for(const noise of[-1,1]){let x=xsign*amplitude;x-=alpha*(x+noise);after+=x*x/4;}
 return result(close(moments[1],1/16)&&close(moments[2],25/256)&&close(after,invariant),'Four two-sign paths give moments 1/16 and 25/256; a separate four-atom transition preserves second moment 1/7. This does not prove a limiting law.');
});
define('ml101-sgd-two-observation-minibatch',{fixture:'ordered-with-replacement',sample_size:2,batch_size:2},()=>{
 const ys=[0,2],theta=2,directions=[];for(const a of ys)for(const b of ys)directions.push(((theta-a)+(theta-b))/2);const mean=directions.reduce((s,x)=>s+x,0)/4,variance=directions.reduce((s,x)=>s+(x-mean)**2,0)/4;
 const empirical=z=>ys.reduce((s,y)=>s+(z-y)**2/2,0)/2,gradient=(empirical(theta+1)-empirical(theta-1))/2,gap=empirical(theta)-empirical(1),bound=variance+2*gap;
 return result(directions.every((x,i)=>close(x,[2,1,1,0][i]))&&close(mean,1)&&close(variance,.5)&&close(gap,.5)&&close(bound,1.5)&&gradient*gradient<=bound,'Four ordered minibatches give directions 2,1,1,0, mean1, variance1/2, and directly evaluated empirical gap1/2 with bound3/2.');
});
define('ml101-sgd-one-step-negative-alignment',{fixture:'reversed-gradient',iterations:1},()=>{
 const x=1,G=-1,alpha=.5,next=x-alpha*G,gradient=(quadratic(x+1)-quadratic(x-1))/2;
 return result(close(next,1.5)&&close(quadratic(next),9/8)&&quadratic(next)>quadratic(x)&&gradient*G<0&&close(Math.abs(G),Math.abs(gradient)),'One deterministic reversed-gradient step increases the quadratic objective and has alignment -1.');
});
define('ml101-rmsprop-outside-root-epsilon',{fixture:'rmsprop-round-one',horizon:1},()=>{
 const g=2,r=0*0+(1-0)*g*g,denominator=Math.sqrt(r)+1,x=0-1*g/denominator;
 return result(close(r,4)&&close(denominator,3)&&close(x,-2/3)&&!close(x,-2/Math.sqrt(5)),'Raw moment4, outside-root denominator3 and update-2/3; distinguishes the inside-root variant.');
});
define('ml101-adam-inside-root-epsilon',{fixture:'uncorrected-adam-round-one',horizon:1},()=>{
 const g=1,m=0*0+(1-0)*g,v=.5*0+(1-.5)*g*g,denominator=Math.sqrt(v+1),unprojected=-m/denominator,clipped=Math.max(-1,Math.min(1,unprojected));
 return result(close(m,1)&&close(v,.5)&&close(denominator,Math.sqrt(3/2))&&close(clipped,-Math.sqrt(2/3))&&clipped>=-1&&clipped<=1&&!close(clipped,-1/(Math.sqrt(v)+1)),'Uncorrected moment1, raw second moment1/2, inside-root denominator sqrt(3/2), projected output-sqrt(2/3).');
});
define('ml101-amsgrad-raw-moment-maximum',{fixture:'amsgrad-raw-max',horizon:2},()=>{
 const rows=rawMoments([2,0],.5);return result(close(rows[0].v,2)&&close(rows[1].v,1)&&rows.every(r=>close(r.maximum,2)),'Two raw moment updates independently retain historical maximum2 despite decay2 to1.');
});
define('ml101-amsgrad-example-historical-maximum',{fixture:'amsgrad-two-linear-losses',horizon:2},()=>{
 // Slopes are recovered from losses, rather than supplied as the asserted moment values.
 const losses=[x=>2*x,x=>0*x],gradients=losses.map(f=>(f(1)-f(-1))/2),rows=rawMoments(gradients,.5);
 return result(close(gradients[0],2)&&close(gradients[1],0)&&close(rows[0].v,2)&&close(rows[1].v,1)&&rows.every(r=>close(r.maximum,2)),'Finite linear-loss differences yield gradients2,0 and raw moments2,1 with both historical maxima2.');
});
define('ml101-amsgrad-constant-beta-correction',{fixture:'constant-beta-bound-term',horizon:2},()=>{
 const rows=rawMoments([1,1],.5),beta1=1/4,diameter=2;let correction=0;for(let t=1;t<=2;t++){const step=1/Math.sqrt(t);correction+=diameter*diameter/(1-beta1)**2*beta1*Math.sqrt(rows[t-1].maximum)/step;}
 const lower=4*Math.pow(2,1.5)/9;
 return result(close(rows[0].v,.5)&&close(rows[1].v,.75)&&correction>0&&correction>=lower,'At T2, raw moments1/2,3/4 give a directly summed positive correction term above 4*2^(3/2)/9; no actual-regret or asymptotic claim.');
});
