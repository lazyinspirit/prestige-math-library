// Bounded deterministic/exhaustive PAC-MDP fixtures. A pass is not a PAC proof.
// No filesystem, dependencies, random sampling, or unbounded search.
const outcome = (ok, summary) => ({ok, summary});
const allowed = new Set(['check','fixture','asserts','name','inputs','calculation','expected']);
function checked(id, fixture, compute) {
  return (smoke = {}) => {
    if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)
      || Object.keys(smoke).some(k => !allowed.has(k))
      || (smoke.check !== undefined && smoke.check !== id)
      || (smoke.fixture !== undefined && smoke.fixture !== fixture))
      return outcome(false, `invalid selector: expected check ${id}, fixture ${fixture}`);
    try { return compute(); } catch (error) { return outcome(false, error.message); }
  };
}
function requireFixture(condition, message) { if (!condition) throw Error(message); }
function empirical(samples, states) {
  const counts = Array(states).fill(0); let rewards = 0;
  for (const [next, reward] of samples) { counts[next]++; rewards += reward; }
  return {r:rewards/samples.length, p:counts.map(n=>n/samples.length)};
}
function backup(rewards, transitions, gamma, value) {
  return rewards.map((r, a)=>r + gamma*transitions[a].reduce((sum,p,s)=>sum+p*value[s],0));
}
// Directly accumulate a finite discounted path; its explicit remaining tail
// bounds comparison error for the nonzero-discount supplementary cases.
function constantReturn(reward, gamma, horizon=128) {
  let sum=0, weight=1;
  for(let i=0;i<horizon;i++){sum+=weight*reward;weight*=gamma;}
  return {sum, tail:weight/(1-gamma)};
}
function argmax(q, order) {
  let best=order[0]; for(const a of order) if(q[a]>q[best]) best=a;
  return best;
}
function rmaxRun({rewards,U,m,beta=.5,steps,order}) {
  const q=[...U], counts=U.map(()=>0), sums=U.map(()=>0), known=U.map(()=>false), trace=[];
  let rebuilds=0, escapes=0;
  for(let t=1;t<=steps;t++) {
    const action=argmax(q,order), before=[...q];
    if(!known[action]) {
      escapes++; counts[action]++; sums[action]+=rewards[action];
      if(counts[action]===m) {
        known[action]=true; rebuilds++;
        // The actual R-MAX zero-discount rebuild from a zero working table.
        let working=U.map(()=>0);
        const L=Math.max(1,Math.ceil(Math.log(1/beta)));
        for(let j=0;j<L;j++) working=working.map((_,a)=>known[a]?sums[a]/counts[a]:U[a]);
        q.splice(0,q.length,...working);
      }
    }
    trace.push({t,action,value:rewards[action],before,after:[...q]});
  }
  return {q,counts,sums,known,trace,rebuilds,escapes};
}
function delayedRun({rewards,U,m,bonus,steps,order}) {
  const q=[...U], sums=U.map(()=>0), counts=U.map(()=>0), starts=U.map(()=>0), flags=U.map(()=>true);
  let lastUpdate=0, updates=0, outside=0; const trace=[];
  for(let t=1;t<=steps;t++) {
    const action=argmax(q,order), before=[...q];
    if(q[action]-rewards[action]>3*bonus) outside++;
    if(starts[action]<=lastUpdate) flags[action]=true;
    let changed=false;
    if(flags[action]) {
      if(counts[action]===0) starts[action]=t;
      counts[action]++; sums[action]+=rewards[action]; // gamma=0 target
      if(counts[action]===m) {
        const mean=sums[action]/m;
        if(q[action]-mean>=2*bonus) {
          q[action]=mean+bonus; lastUpdate=t; updates++; changed=true;
        } else if(starts[action]>lastUpdate) flags[action]=false;
        sums[action]=0;counts[action]=0;
      }
    }
    trace.push({t,action,value:rewards[action],before,after:[...q],changed});
  }
  return {q,flags,counts,starts,lastUpdate,updates,outside,trace};
}
// Find the least nonnegative integer satisfying an increasing inequality,
// independently of the ceiling expressions under test. Bounded doubling/search.
function leastInteger(test) {
  let hi=1;
  for(let k=0;!test(hi);k++) { requireFixture(k<52,'threshold exceeded bounded safe search'); hi*=2; }
  let lo=0; while(lo<hi) { const mid=Math.floor((lo+hi)/2); if(test(mid))hi=mid;else lo=mid+1; }
  return lo;
}
function valueFunctions() {
  const samples=[[0,.5]], model=empirical(samples,1);
  for(const value of [-7,0,.5,2,19]) {
    const q=backup([model.r],[model.p],0,[value]);
    requireFixture(q[0]===.5,'gamma-zero Bellman backup differs from direct reward expectation');
  }
  const path=constantReturn(.5,0);
  requireFixture(path.sum===.5 && path.tail===0,'discounted deterministic return differs');
  requireFixture(argmax([.5],[0])===0,'one-action greedy policy not attained');
  return outcome(true,'one-state/action r=1/2, gamma=0: five Bellman inputs map to 1/2, direct 128-term return is 1/2, zero contraction and greedy attainment agree; bounded fixture only');
}
function concentration() {
  const samples=[[0,.5]], model=empirical(samples,1);
  const rewardError=Math.abs(model.r-.5), l1=model.p.reduce((s,p,i)=>s+Math.abs(p-(i===0?1:0)),0);
  requireFixture(rewardError===0&&l1===0,'deterministic empirical reward/transition error nonzero');
  let tails=0;
  for(const x of [.125,.25,.5]) {
    const probability=Number(rewardError>x);
    requireFixture(probability<=2*Math.exp(-2*x*x),'deterministic reward tail exceeds Hoeffding bound');tails++;
  }
  requireFixture(l1<=Math.sqrt(1),'deterministic L1 expectation bound fails');
  for(const delta of [.125,.25,.5])requireFixture(Number(l1>1+Math.sqrt(2*Math.log(1/delta)))<=delta,'deterministic transition tail fails');
  // Supplement: enumerate every Bernoulli reward path, rather than echoing a
  // tail bound. The deterministic obligation above remains present.
  let paths=0;
  for(const m of [1,2,3,4])for(const x of [.125,.25,.5,.75]) {
    let mass=0;
    for(let mask=0;mask<2**m;mask++) {
      let sum=0;for(let i=0;i<m;i++)sum+=(mask>>i)&1;
      if(Math.abs(sum/m-.5)>x)mass+=1/2**m;paths++;
    }
    requireFixture(mass<=2*Math.exp(-2*m*x*x)+1e-12,'enumerated finite Bernoulli reward tail exceeds bound');
  }
  return outcome(true,`deterministic m=1 empirical reward and transition errors are zero (${tails} positive tolerances); ${paths} supplementary Bernoulli paths evaluated directly; fixed finite sample checks only, no adaptive uniform-time claim`);
}
function simulation() {
  let cases=0;
  for(const alpha of [0,.125,.25,.5])for(const gamma of [0,.25,.5]) {
    const p=[[1]], first=empirical([[0,.5]],1),second=empirical([[0,.5+alpha]],1);
    const one=constantReturn(first.r,gamma),two=constantReturn(second.r,gamma);
    const beta=first.p.reduce((s,v,i)=>s+Math.abs(v-second.p[i]),0), cap=1/(1-gamma);
    const difference=Math.abs(one.sum-two.sum), bound=(alpha+gamma*cap*beta)/(1-gamma);
    requireFixture(beta===0&&difference<=bound+one.tail+two.tail+1e-12,'independently accumulated returns violate simulation bound');
    if(gamma===0)requireFixture(difference===alpha&&bound===alpha,'original gamma-zero equality fails');
    requireFixture(backup([first.r],p,gamma,[one.sum])[0]-one.sum<=one.tail+1e-12,'first path return fails Bellman check');
    cases++;
  }
  return outcome(true,`${cases} one-state/action deterministic perturbations: direct discounted paths agree with the bound, including original gamma=0 equality for four alpha values; finite fixtures only`);
}
function escape() {
  const eta=1/8,rho=1/4,B=1,W=1,C=B+W,q=eta/(2*C),H=1,zeta=0;
  const M=Math.ceil((2*(zeta+1)+2*Math.log(1/rho))/q);
  const known=true, qTable=[1], transition=[1], reward=1;
  let bad=0,events=0,state=0;
  for(let t=1;t<=H*M;t++) {
    const before=[...qTable], action=argmax(qTable,[0]);
    const current=backup([reward],[transition],0,[1])[action];
    const value=constantReturn(reward,0).sum;
    if(value<1-4*eta)bad++;
    // Controller is fixed and its sole pair was known initially.
    if(!known||qTable.some((q,a)=>q!==before[a]))events++;
    state=transition.findIndex(p=>p===1);
    requireFixture(current===1&&value===1&&state===0,'no-escape controller/model disagreement');
  }
  requireFixture(events===0&&bad===0&&bad<=H*M&&Number.isSafeInteger(M),'no-escape count/bound fails');
  return outcome(true,`already-known optimal one-action controller: ${H*M} explicit gamma-zero transitions, zero updates/escapes and zero 1/2-bad times; H=1, M=${M}; finite fixture, not the general escape theorem`);
}
function rmaxAccuracy() {
  let cases=0;
  for(const r of [0,.5,1])for(const U of [r,1])for(const m of [1,2,5]) {
    const model=empirical(Array.from({length:m},()=>[0,r]),1);
    const trace=rmaxRun({rewards:[r],U:[U],m,beta:.5,steps:m+2,order:[0]});
    requireFixture(model.r===r&&model.p[0]===1,'deterministic empirical law differs');
    requireFixture(trace.q[0]===r&&trace.rebuilds===1&&trace.escapes===m,'RMAX known-model rebuild/count differs');
    requireFixture(trace.trace[m-1].after[0]===r,'first known rebuild not exact at gamma zero');
    requireFixture(trace.q[0]===backup([r],[[1]],0,[U])[0],'empirical and true trap values differ after known');
    cases++;
  }
  return outcome(true,`${cases} deterministic one-state RMAX runs, r=0,1/2,1 and m=1,2,5: sample means, transition frequencies, first rebuild and exact known-model value checked; no general high-probability claim`);
}
function zeroSlack() {
  const m=1,bonus=.25,U=[1,1],rewards=[1,0],optimal=Math.max(...rewards);
  const trace=delayedRun({rewards,U,m,bonus,steps:4,order:[1,0]});
  const slack=U.map(v=>Math.max(v-optimal,0)),G=slack.reduce((sum,d)=>sum+1+d/bonus,0);
  requireFixture(trace.trace[0].action===1&&trace.trace[0].changed&&trace.trace[0].after[1]===.25,'first zero-slack batch does not lower b to bonus');
  requireFixture(trace.trace[1].action===0&&trace.updates===1,'post-update controller does not choose a');
  requireFixture(slack.every(d=>d===0)&&trace.updates<=G&&trace.outside<=2*m*G,'additive update/escape allowance fails');
  requireFixture(trace.q.every((q,a)=>q>=rewards[a]),'optimism fails in deterministic witness');
  return outcome(true,'m=1, epsilon1=1/4: actual delayed batch lowers b from1 to1/4, next action is a; one update despite both initial slacks zero, bounded by G=2 (outside visits1<=4); finite algorithm witness only');
}
function rmaxPAC() {
  const epsilon=.5,delta=.5,eta=epsilon/4,b=eta/64;
  const numerator=8*(1+Math.log(16/delta)), m=Math.ceil(numerator/(b*b));
  const independentlyBracketed=leastInteger(k=>k*b*b>=numerator);
  requireFixture(m===independentlyBracketed&&Number.isSafeInteger(m),'RMAX sample ceiling differs from inequality search');
  // A deterministic all-one batch is represented by its exact sufficient
  // statistics. Integer repeated addition computes its sum in O(log m),
  // independently of the empirical-mean identity under test.
  let n=m,block=1,sum=0,count=0,blockCount=1;
  while(n>0){if(n%2){sum+=block;count+=blockCount;}n=Math.floor(n/2);block+=block;blockCount+=blockCount;}
  const after=backup([sum/count],[[1]],0,[0])[0], before=1;
  const beta=eta/16,q=eta/4,zeta=m+1,H=1,target=2*(zeta+1)+2*Math.log(2/delta),M=Math.ceil(target/q);
  requireFixture(count===m&&before===1&&after===1&&beta>0&&beta<1,'deterministic RMAX aggregate model changes optimal value');
  requireFixture(M===leastInteger(k=>k*q>=target)&&Number.isSafeInteger(M),'RMAX M threshold differs from independent inequality search');
  const bad=Number(before<1-epsilon)+Number(after<1-epsilon);
  requireFixture(bad===0&&bad<=H*M,'deterministic RMAX branch violates count bound');
  return outcome(true,`one-state all-one deterministic RMAX: batch of m=${m} reduced by exact repeated addition, pre/post model values1 and zero bad actions; independent ceiling inequalities give finite H=1,M=${M}; bounded fixture only, no general PAC proof`);
}
function delayedPAC() {
  const epsilon=.5,delta=.5,eta=epsilon/4,bonus=eta/3,S=1,A=2,Vmax=1;
  const kappa=Math.ceil(S*A*Vmax/bonus),N=S*A*(1+kappa),target=Math.log(16*N/delta)/(2*bonus*bonus),m=Math.ceil(target);
  requireFixture(m===leastInteger(k=>2*k*bonus*bonus>=Math.log(16*N/delta))&&m<10000,'delayed batch ceiling differs/exceeds bounded fixture');
  const U=[1,1],rewards=[1,0],trace=delayedRun({rewards,U,m,bonus,steps:2*m+2,order:[1,0]});
  const optimal=Math.max(...rewards),slack=U.map(v=>Math.max(v-optimal,0));
  const G=slack.reduce((sum,d)=>sum+1+d/bonus,0),zeta=Math.ceil((2*m+1)*G),q=eta/(4*Vmax),H=1;
  const threshold=2*(zeta+1)+2*Math.log(2/delta),M=Math.ceil(threshold/q);
  const bad=trace.trace.filter(row=>row.value<optimal-epsilon).length;
  requireFixture(slack.every(d=>d===0)&&G===2&&S*A*epsilon>0,'zero-slack additive allowance vanished');
  requireFixture(trace.trace[m-1].changed&&trace.trace[m].action===0&&trace.updates===1&&bad===m,'direct delayed-Q trajectory disagrees');
  requireFixture(trace.q[0]===1&&trace.q[1]===bonus&&!trace.flags[0]&&trace.counts[0]===0,'post-batch deterministic greedy state is not fixed');
  requireFixture(bad<=H*M&&M===leastInteger(k=>k*q>=threshold),'delayed finite count/threshold fails');
  return outcome(true,`zero-slack S=1,A=2 deterministic delayed-Q: ${2*m+2} simulated actions, m=${m} bad b-actions then fixed greedy a, one update and G=2; additive term positive, finite H=1,M=${M}; bounded fixture only`);
}
function nonpermanent() {
  let cases=0;
  for(const n of [1,2,4]) {
    const rewards=[1,0],values=[];
    for(let t=1;t<=n+3;t++){const action=t<=n||t===n+2?1:0;values.push(rewards[action]);}
    const bad=values.map((v,i)=>v<1-.5?i+1:null).filter(t=>t!==null);
    requireFixture(bad.length===n+1&&bad.at(-1)===n+2&&values[n]===1,'bad/good/bad schedule differs');
    if(n===1)requireFixture(values.slice(0,3).join(',')==='0,1,0'&&bad.join(',')==='1,3','original n=1 obligation differs');
    cases++;
  }
  return outcome(true,`${cases} explicit schedules n=1,2,4: n+1 bad actions and a later bad action after a good one; original n=1 values0,1,0 give exactly times1,3; no permanent-stopping inference`);
}
function inadmissible() {
  const trace=rmaxRun({rewards:[1,0],U:[0,0],m:1,beta:.5,steps:8,order:[1,0]});
  requireFixture(trace.trace.every(row=>row.action===1&&row.value<1-.5),'inadmissible RMAX does not stay bad in replay');
  requireFixture(!trace.known[0]&&trace.known[1]&&trace.q.every(v=>v===0)&&trace.rebuilds===1,'invariant Q/known state differs');
  requireFixture(argmax(trace.q,[1,0])===1&&0<1,'tie order or inadmissibility witness fails');
  return outcome(true,'m=1 inadmissible U=(0,0): eight exact RMAX actions all choose zero-reward b, first rebuild leaves tied zero table and known set{b}; optimal reward1 exceeds U(a); finite replay plus fixed-state check only');
}
const prefix='ml101-pacmdp-';
export const pacMDPMLChecks = Object.fromEntries([
  ['value-functions','one-state-gamma-zero',valueFunctions],
  ['concentration','deterministic-one-state-sample',concentration],
  ['value-simulation','one-state-gamma-zero-perturbation',simulation],
  ['escape','no-escape-optimal-controller',escape],
  ['rmax-accuracy','deterministic-one-state-rmax',rmaxAccuracy],
  ['delayed-update-count','zero-slack-one-state-update',zeroSlack],
  ['rmax-pac','one-state-deterministic-pac',rmaxPAC],
  ['delayed-pac','one-state-zero-slack-pac',delayedPAC],
  ['nonpermanent','n-one-schedule',nonpermanent],
  ['inadmissible','m-one-rmax-failure',inadmissible],
  ['delayed-zero-slack','m-one-zero-slack-update',zeroSlack],
].map(([name,fixture,fn])=>[prefix+name,checked(prefix+name,fixture,fn)]));
