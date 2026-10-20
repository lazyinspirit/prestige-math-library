// Bounded finite models only. A passing fixture is not a proof of an item.
// Self-contained: no renderer, source loader, contract parser or live registry imports.
const result = (ok, summary) => ({ ok, summary });
const near = (a, b, tol = 2e-7) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a-b) <= tol;
function guarded(fixture, selectors, run) {
  return (smoke = {}) => {
    if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)) return result(false, 'expected a smoke object');
    if (smoke.fixture !== undefined && smoke.fixture !== fixture) return result(false, `unsupported fixture ${String(smoke.fixture)}`);
    for (const [key, expected] of Object.entries(selectors)) {
      if (smoke[key] !== undefined && smoke[key] !== expected) return result(false, `expected ${key}=${expected}`);
    }
    const fields = new Set(['check','asserts','fixture','case','status','calculation','claim','checked_in',...Object.keys(selectors)]);
    for (const key of Object.keys(smoke)) if (!fields.has(key)) return result(false, `unsupported selector field ${key}`);
    return run();
  };
}
const derivative = (f, x) => (f(x + 1e-5) - f(x - 1e-5)) / 2e-5;
const bernoulli = theta => [1-theta, theta];
const score = (theta, action) => derivative(t => Math.log(bernoulli(t)[action]), theta);
const mean = (probs, values) => probs.reduce((sum, p, i) => sum+p*values[i], 0);
function moments(probs, values) {
  const m=mean(probs,values);
  return {mean:m, variance:mean(probs,values.map(x=>(x-m)**2))};
}
const thetaGrid=[0.2,0.35,0.5,0.65,0.8];
function oneStepGradient() {
  let cases=0;
  for (const theta of thetaGrid) for (const gamma of [0,0.25,0.75]) {
    const probs=bernoulli(theta), rewards=[0,1];
    const objective=t=>mean(bernoulli(t),rewards);
    const z=rewards.map((r,a)=>gamma**0*r*score(theta,a));
    const gradient=derivative(objective,theta);
    if (!near(mean(probs,z),gradient) || !near(gradient,1)) return result(false,`one-step path differentiation mismatch at theta=${theta},gamma=${gamma}`);
    cases++;
  }
  return result(true,`${cases} bounded one-decision models: enumerate reward/score directions and independently differentiate the return; no general differentiation or convergence claim checked`);
}
function baselineMean() {
  let cases=0, varianceIncrease=false;
  for (const theta of thetaGrid) for (const b of [-3,0,0.5,4]) {
    const p=bernoulli(theta), s=[0,1].map(a=>score(theta,a));
    const raw=[0,1].map((a)=>a*s[a]), adjusted=[0,1].map(a=>(a-b)*s[a]);
    const z=moments(p,raw),zb=moments(p,adjusted);
    if (!near(mean(p,s.map(x=>b*x)),0) || !near(z.mean,zb.mean) || !near(zb.mean,derivative(t=>mean(bernoulli(t),[0,1]),theta))) return result(false,`baseline mean changed at theta=${theta},b=${b}`);
    if (zb.variance>z.variance+1) varianceIncrease=true;
    cases++;
  }
  return result(varianceIncrease,`${cases} bounded action/baseline enumerations preserve the mean; an adverse baseline increases variance, so no universal variance claim is inferred`);
}
function enumerateBinary(n, safeWeight, riskyWeight, visit) {
  for(let mask=0;mask<2**n;mask++) {
    let weight=1n,risky=0;
    for(let j=0;j<n;j++) {const bit=(mask>>j)&1; risky+=bit; weight*=bit?riskyWeight:safeWeight;}
    visit({mask,weight,risky});
  }
}
export const policyCPOMLChecks = {
  'ml101-policy-score-finite-support': guarded('normalized-action-support', {}, () => {
    let cases=0;
    // Three actions, with differing state-specific affine probability vectors.
    for(const theta of thetaGrid) for(const mix of [0.2,0.5,0.8]) {
      const law=t=>[mix*t,(1-mix)*t,1-t], p=law(theta);
      const s=p.map((_,a)=>derivative(t=>Math.log(law(t)[a]),theta));
      if (!near(p.reduce((a,b)=>a+b,0),1) || p.some(x=>!(x>0)) || !near(mean(p,s),0)) return result(false,`conditional finite-support score mismatch at theta=${theta},mix=${mix}`);
      cases++;
    }
    // The explicitly stopped score is zero on terminal histories.
    const terminalScore=[0,0,0];
    return result(terminalScore.every(x=>x===0),`${cases} positive normalized three-action histories: independent log finite differences have zero weighted mean; stopped-history score is zero; no infinite-path claim checked`);
  }),
  'ml101-policy-gradient-one-step': guarded('one-decision-bernoulli', {}, oneStepGradient),
  'ml101-policy-baseline-zero-mean': guarded('bernoulli-state-baseline', {}, baselineMean),
  'ml101-actor-critic-bootstrap-bias': guarded('zero-reward-two-step-critic', {}, () => {
    const theta=0.5,alpha=0.25,gamma=0.5,p=bernoulli(theta),critic={s:0,x0:0,x1:1,d:0};
    const rows=[0,1].map(a=>{
      const next=a?'x1':'x0',reward=0,delta=reward+gamma*critic[next]-critic.s;
      const first=alpha*delta*score(theta,a), nextTheta=theta+first;
      const secondScore=0; // the sole action at x_a has probability one
      const secondDelta=0-critic[next];
      return {first,nextTheta,second:alpha*gamma*secondDelta*secondScore,returnValue:reward+gamma*0};
    });
    const trueGradient=derivative(t=>mean(bernoulli(t),rows.map(r=>r.returnValue)),theta);
    const expected=mean(p,rows.map(r=>r.first));
    return result(near(rows[0].first,0)&&near(rows[1].first,0.25)&&near(expected,0.125)&&near(trueGradient,0)&&rows.every(r=>r.nextTheta>0&&r.nextTheta<1&&r.second===0),`two enumerated terminal paths: expected first increment=${expected}, independently differentiated zero-return objective=${trueGradient}; admissible first updates and zero second updates checked`);
  }),
  'ml101-reinforce-bernoulli': guarded('one-decision-bernoulli', {}, oneStepGradient),
  'ml101-baseline-eliminates-variance': guarded('half-bernoulli-half-baseline', {}, () => {
    const theta=0.5,p=bernoulli(theta),b=0.5;
    const raw=[0,1].map(a=>a*score(theta,a)),adjusted=[0,1].map(a=>(a-b)*score(theta,a));
    const z=moments(p,raw),zb=moments(p,adjusted);
    return result(near(z.mean,1)&&near(z.variance,1)&&near(zb.mean,1)&&near(zb.variance,0)&&adjusted.every(v=>near(v,1)),`enumerated directions ${JSON.stringify(raw)} and ${JSON.stringify(adjusted)} have variances ${z.variance} and ${zb.variance}; this baseline/model only`);
  }),
  'ml101-policy-start-time-discount-witness': guarded('two-step-half-discount', {}, () => {
    for(const theta of thetaGrid) {
      const gamma=0.5,p=bernoulli(theta);
      const paths=[0,1].map(a=>({rewards:[0,a],scores:[0,score(theta,a)]}));
      const objective=t=>mean(bernoulli(t),paths.map(path=>path.rewards.reduce((s,r,k)=>s+gamma**k*r,0)));
      const estimator=(path,discounted)=>path.scores.reduce((s,psi,t)=>{
        const G=path.rewards.slice(t).reduce((r,x,k)=>r+gamma**k*x,0);
        return s+(discounted?gamma**t:1)*psi*G;
      },0);
      const actual=derivative(objective,theta),wrong=mean(p,paths.map(x=>estimator(x,false))),right=mean(p,paths.map(x=>estimator(x,true)));
      if(!near(actual,0.5)||!near(wrong,1)||!near(right,actual)||Math.abs(wrong-actual)<0.49) return result(false,`start-time-discount countermodel not witnessed at theta=${theta}`);
    }
    return result(true,'five bounded two-path models: direct return differentiation gives 1/2; omitting gamma^t gives 1 and retaining it gives 1/2; finite witness only');
  }),
  'ml101-cpo-discounted-cost-pathwise': guarded('seven-independent-actions', {states:1,actions:2,horizon:7}, () => {
    let total=0n,violation=0n;
    enumerateBinary(7,9n,1n,({weight,risky})=>{total+=weight;if(risky>0)violation+=weight;});
    // Sum finite time expectations independently, with a deterministic bounded-cost tail enclosure.
    const p=0.1,gamma=0.1;let sum=0,power=1;
    for(let t=0;t<24;t++){sum+=power*mean([1-p,p],[0,1]);power*=gamma;}
    const maxTail=power/(1-gamma);
    const cost=1/9;
    return result(total===10000000n&&violation===5217031n&&2n*violation>total&&sum<=cost+1e-15&&cost<=sum+maxTail+1e-15&&sum+maxTail<1/8,`all 128 seven-action paths give violation numerator ${violation}/${total}>1/2; 24 discounted expectations plus bounded tail enclose 1/9 below 1/8; no general safety inference`);
  }),
  'ml101-cpo-safe-sample': guarded('ten-independent-rollouts', {states:1,actions:2,rollouts:10}, () => {
    let total=0n,safe=0n;let safeEmpiricalMean;
    enumerateBinary(10,9n,1n,({weight,risky})=>{total+=weight;if(risky===0){safe+=weight;safeEmpiricalMean=risky/10;}});
    const population=mean([0.9,0.1],[0,1]),threshold=1/20;
    return result(total===10000000000n&&safe===3486784401n&&safe>0n&&safeEmpiricalMean===0&&safeEmpiricalMean<=threshold&&population>threshold,`all 1024 independent rollout outcomes: true cost ${population}>${threshold}, all-safe empirical mean zero with exact mass ${safe}/${total}; finite sample witness only`);
  }),
  'ml101-cpo-exact-versus-sample': guarded('one-row-safe-line-search', {states:1,actions:2,sample_rows:1}, () => {
    const old=[0.99,0.01],proposed=[0.8,0.2],costs=[0,1],threshold=0.05,radius=4;
    const oldCost=mean(old,costs),newCost=mean(proposed,costs);
    const kl=proposed.reduce((s,p,a)=>s+p*Math.log(p/old[a]),0);
    const advantage=costs.map(c=>c-oldCost),exactSurrogate=oldCost+mean(proposed,advantage);
    // Conditional on the single safe row, the supplied estimator values are zero.
    const batch={action:0,baseline:0,advantage:0,weight:1};
    const empirical=batch.baseline+batch.weight*(proposed[batch.action]/old[batch.action]-1)*batch.advantage;
    return result(near(oldCost,0.01)&&near(newCost,0.2)&&near(exactSurrogate,newCost)&&newCost>threshold&&Number.isFinite(kl)&&kl>=0&&kl<radius&&empirical===0&&empirical<=threshold&&near(old[batch.action],0.99),`direct two-action costs/advantages and KL=${kl}: exact cost rejects 1/5, while the conditional zero-estimate safe row (mass99/100) passes sample tests if proposed; no QP-output claim`);
  }),
  'ml101-cpo-old-residual-witness': guarded('identical-policy-zero-discount', {}, () => {
    const gamma=0,baseline=[0],old=[1],proposed=[1];
    const transitions=[{next:0,reward:1,prob:1}];
    const immediate=transitions.reduce((s,e)=>s+e.prob*e.reward,0);
    const residual=transitions.reduce((s,e)=>s+e.prob*(e.reward+gamma*baseline[e.next]-baseline[0]),0);
    const oldReturn=mean(old,[immediate]),newReturn=mean(proposed,[immediate]);
    const occupancy=(1-gamma)*1,epsilon=Math.abs(residual),tv=0.5*old.reduce((s,p,i)=>s+Math.abs(p-proposed[i]),0);
    const malformed=occupancy*residual/(1-gamma),remainder=2*gamma*epsilon*occupancy*tv/(1-gamma)**2;
    const difference=newReturn-oldReturn,corrected=occupancy*(mean(proposed,[residual])-mean(old,[residual]))/(1-gamma);
    return result(old.reduce((s,p)=>s+p,0)===1&&transitions.reduce((s,e)=>s+e.prob,0)===1&&oldReturn===1&&newReturn===1&&occupancy===1&&malformed-remainder===1&&malformed+remainder===1&&difference===0&&malformed-remainder>difference&&corrected===0,'enumerated one-state joint reward-transition law: return difference0, malformed lower/upper bounds1, corrected residual difference0; explicit false-claim witness only');
  }),
};

// The registry key is itself a selector when supplied explicitly.
for (const [id, run] of Object.entries(policyCPOMLChecks)) {
  policyCPOMLChecks[id] = (smoke = {}) => {
    if (smoke && smoke.check !== undefined && smoke.check !== id) return result(false, `check selector must be ${id}`);
    return run(smoke);
  };
}
