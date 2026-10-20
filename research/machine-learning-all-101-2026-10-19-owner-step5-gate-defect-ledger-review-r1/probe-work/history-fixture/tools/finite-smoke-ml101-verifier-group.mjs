// Fixed bounded witnesses for the ten batch99 finite_smoke obligations.
// These pure computations neither read sources nor prove general statements.
const close=(a,b,tol=1e-9)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=tol*Math.max(1,Math.abs(a),Math.abs(b));
const demand=(ok,message)=>{if(!ok)throw new Error(message);};
const sum=xs=>xs.reduce((a,b)=>a+b,0);
function tuples(p,n){let rows=[{ys:[],mass:1}];for(let j=0;j<n;j++)rows=rows.flatMap(r=>p.map((mass,i)=>({ys:[...r.ys,i],mass:r.mass*mass})));return rows;}
function reject(ys,accept){let draws=0;for(const y of ys){draws++;if(accept[y])return {y,draws,status:'accepted'};}return {y:null,draws,status:'failure'};}
const supportedCases={"ml101-verifier-one-draw": ["N=1 rejection search"], "ml101-verifier-independent-and-union": ["perfect verifier, p=1/4, N=2"], "ml101-finite-response-ratio-cancellation": ["Y={a,b}, p=(1/3,2/3), q=(1/2,1/2)"], "ml101-group-equal-rewards": ["G=3 and rewards (7,7,7)"], "ml101-bernoulli-score-identities": ["Bernoulli policy at θ=1/4"], "ml101-group-centered-factor": ["Bernoulli policy at θ=1/2, r=(1,0), G=2"], "ml101-perfect-and-false-positive-verifiers": ["π(c)=3/4, π(w)=1/4, N=2"], "ml101-dependent-response-copies": ["two copies of one Bernoulli draw with p=1/2"], "ml101-pass-and-selected-accuracy": ["π(c)=1/4, π(w1)=π(w2)=3/8, A(c)=A(w1)=1, A(w2)=0, N=2"]};
function fixed(name,compute){return(smoke={})=>{try{
  demand(smoke&&typeof smoke==='object'&&!Array.isArray(smoke),'smoke must be an object');
  const allowed=new Set(['check','asserts','case','result','fixture']);
  demand(Object.keys(smoke).every(k=>allowed.has(k)),'unsupported selector or parameters');
  demand(smoke.check===undefined||smoke.check===name,'unsupported check selector');
  demand(smoke.fixture===undefined||smoke.fixture===name,'unsupported fixture selector');
  demand(smoke.case===undefined||supportedCases[name].includes(smoke.case),'unsupported case selector');
  return {ok:true,summary:compute()};
}catch(e){return {ok:false,summary:String(e.message??e)};}};}
const computations={
  'ml101-verifier-one-draw':()=>{
    let accepted=0,failed=0;
    for(const r of tuples([1/4,3/4],1)){const out=reject(r.ys,[1,0]);demand(out.draws===1,'one-draw budget violated');if(out.status==='accepted'){demand(out.y===0,'wrong accepted response');accepted+=r.mass;}else{demand(out.y===null,'failure returned response');failed+=r.mass;}}
    demand(close(accepted,1/4)&&close(failed,3/4),'enumerated N=1 rejection law differs');
    return '2 one-draw outcomes: accepted c mass1/4, failure mass3/4; each stops after one draw';
  },
  'ml101-verifier-independent-and-union':()=>{
    let success=0;for(const r of tuples([1/4,3/4],2)){const out=reject(r.ys,[1,0]);demand(out.draws<=2,'budget violated');if(out.status==='accepted')success+=r.mass;}
    demand(close(success,7/16),'enumerated independent success differs');
    for(const both of [0,1/8,1/4]){
      // Three complete two-event couplings with identical 1/4 marginals,
      // including disjoint, overlapping and perfectly dependent failures.
      const law=[{a:0,b:0,p:1/2+both},{a:1,b:0,p:1/4-both},{a:0,b:1,p:1/4-both},{a:1,b:1,p:both}];
      const ma=sum(law.map(r=>r.p*r.a)),mb=sum(law.map(r=>r.p*r.b)),union=sum(law.map(r=>r.p*Number(r.a||r.b)));
      demand(close(sum(law.map(r=>r.p)),1)&&close(ma,1/4)&&close(mb,1/4),'invalid coupling');
      demand(union<=ma+mb+1e-12&&union<=1/2+1e-12,'finite dependent union bound failed');
    }
    return '4 independent response pairs give success7/16; 3 enumerated dependent false-acceptance couplings with marginals1/4 satisfy bound1/2';
  },
  'ml101-finite-response-ratio-cancellation':()=>{
    const p=[1/3,2/3],q=[1/2,1/2],f=[2,-1],rho=p.map((v,i)=>v/q[i]);
    const lhs=sum(q.map((v,i)=>v*rho[i]*f[i])),rhs=sum(p.map((v,i)=>v*f[i])),normal=sum(q.map((v,i)=>v*rho[i]));
    demand(close(rho[0],2/3)&&close(rho[1],4/3)&&close(lhs,rhs)&&close(lhs,0)&&close(normal,1),'two-response cancellation failed');
    return '2 response entries: computed ratios2/3,4/3, both f-weighted sums0 and reweighted mass1';
  },
  'ml101-group-equal-rewards':()=>{
    const rewards=[7,7,7],mean=sum(rewards)/rewards.length,variance=sum(rewards.map(r=>(r-mean)**2))/rewards.length,sd=Math.sqrt(variance);
    const advantages=rewards.map(r=>sd>0?(r-mean)/sd:0);
    const old=[1/2,1/2],candidate=[3/4,1/4],reference=[1/2,1/2],responses=[0,1,0],epsilon=1/5,beta=1/2;
    const terms=responses.map((y,i)=>{const rho=candidate[y]/old[y],clip=Math.min(1+epsilon,Math.max(1-epsilon,rho));return Math.min(rho*advantages[i],clip*advantages[i]);});
    const surrogate=sum(terms)/3,kl=sum(candidate.map((v,i)=>v*Math.log(v/reference[i]))),objective=surrogate-beta*kl;
    demand(close(mean,7)&&sd===0&&advantages.every(a=>a===0)&&terms.every(t=>t===0),'zero-standard-deviation branch failed');
    demand(kl>0&&objective<0&&close(surrogate,0),'nonzero separately retained KL penalty disappeared');
    return 'G=3 rewards(7,7,7): mean7,sd0,advantages0,clipped terms0; candidate(3/4,1/4) vs reference(1/2,1/2) retains a strictly negative beta=1/2 KL penalty';
  },
  'ml101-bernoulli-score-identities':()=>{
    const theta=1/4,h=1e-6,policy=t=>[t,1-t],p=policy(theta),reward=[1,0];
    const score=p.map((_,i)=>(Math.log(policy(theta+h)[i])-Math.log(policy(theta-h)[i]))/(2*h));
    const scoreMean=sum(p.map((v,i)=>v*score[i])),rewardScore=sum(p.map((v,i)=>v*reward[i]*score[i]));
    const J=t=>sum(policy(t).map((v,i)=>v*reward[i])),derivative=(J(theta+h)-J(theta-h))/(2*h);
    demand(close(score[0],4,1e-7)&&close(score[1],-4/3,1e-7)&&close(scoreMean,0,1e-7),'finite-difference score mean differs');
    demand(close(rewardScore,derivative,1e-7)&&close(derivative,1,1e-7),'reward-score derivative differs');
    return 'theta1/4 two-response policy: independent central differences of log masses and expected reward give scores(4,-4/3), score mean0 and reward-gradient1 within1e-7';
  },
  'ml101-group-centered-factor':()=>{
    const p=[1/2,1/2],r=[1,0],h=1e-6,policy=t=>[t,1-t];
    const score=p.map((_,i)=>(Math.log(policy(1/2+h)[i])-Math.log(policy(1/2-h)[i]))/(2*h));
    let centered=0,loo=0,raw=0;
    for(const row of tuples(p,2)){const rs=row.ys.map(y=>r[y]),ss=row.ys.map(y=>score[y]),mean=sum(rs)/2;centered+=row.mass*sum(rs.map((v,i)=>(v-mean)*ss[i]))/2;loo+=row.mass*sum(rs.map((v,i)=>(v-rs[1-i])*ss[i]))/2;raw+=row.mass*sum(rs.map((v,i)=>v*ss[i]))/2;}
    demand(close(raw,1,1e-7)&&close(centered,1/2,1e-7)&&close(loo,1,1e-7),'four-outcome group expectations differ');
    return '4 independently weighted Bernoulli G=2 groups: raw mean1, same-group-centered mean1/2, leave-one-out mean1 within1e-7';
  },
  'ml101-perfect-and-false-positive-verifiers':()=>{
    let perfect=0,falseAccepted=0;
    for(const r of tuples([3/4,1/4],2)){const a=reject(r.ys,[1,0]),b=reject(r.ys,[1,1]);if(a.status==='accepted')perfect+=r.mass;demand(b.draws===1&&b.status==='accepted','accept-all failed first-draw return');if(b.y===1)falseAccepted+=r.mass;}
    demand(close(perfect,15/16)&&close(falseAccepted,1/4)&&falseAccepted<=1/2,'enumerated perfect/false-positive outcomes differ');
    return '4 response pairs: perfect success15/16; accept-all always stops at draw1 with false mass1/4, below union bound1/2';
  },
  'ml101-dependent-response-copies':()=>{
    const copied=[{ys:[0,0],mass:1/2},{ys:[1,1],mass:1/2}],correct=y=>y===0;
    const union=sum(copied.filter(r=>r.ys.some(correct)).map(r=>r.mass)),joint=sum(copied.filter(r=>r.ys.every(correct)).map(r=>r.mass));
    const independent=sum(tuples([1/2,1/2],2).filter(r=>r.ys.some(correct)).map(r=>r.mass));
    demand(close(union,1/2)&&close(joint,1/2)&&!close(joint,1/4)&&close(independent,3/4),'copied versus product law differs');
    return '2 dependent copied outcomes give union1/2,joint1/2; separate 4-outcome independent product gives union3/4';
  },
  'ml101-pass-and-selected-accuracy':()=>{
    const p=[1/4,3/8,3/8],accept=[1,1,0],correct=y=>y===0;let oracle=0,accepted=0,correctReturn=0;
    for(const row of tuples(p,2)){if(row.ys.some(correct))oracle+=row.mass;const out=reject(row.ys,accept);if(out.status==='accepted'){accepted+=row.mass;if(correct(out.y))correctReturn+=row.mass;}}
    const passOne=sum(p.map((v,i)=>correct(i)?v:0)),selected=correctReturn/accepted;
    demand(close(passOne,1/4)&&close(oracle,7/16)&&close(accepted,55/64)&&close(correctReturn,22/64)&&close(selected,2/5),'nine-outcome accuracy metrics differ');
    return '9 product-law response pairs: pass1=1/4,oracle pass2=7/16,accepted55/64,correct-return22/64,conditional selected accuracy2/5';
  },
};
export const verifierGroupMLChecks=Object.fromEntries(Object.entries(computations).map(([name,compute])=>[name,fixed(name,compute)]));
