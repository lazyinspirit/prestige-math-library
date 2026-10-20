// Bounded independent categorical/calibration fixtures only. No general proof.
// All selectors are explicit contract metadata; unsupported fixtures/parameters fail.
const close=(a,b,t=1e-11)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=t*Math.max(1,Math.abs(a),Math.abs(b));
const sum=a=>a.reduce((x,y)=>x+y,0),result=(ok,summary)=>({ok:Boolean(ok),summary});
const brier=(q,j)=>sum(q.map((x,i)=>(x-Number(i===j))**2));
const logRisk=(p,q)=>sum(p.map((x,j)=>x===0?0:q[j]===0?Infinity:-x*Math.log(q[j])));
const brierRisk=(p,q)=>sum(p.map((x,j)=>x*brier(q,j)));
const softmax=(z,T)=>{const top=Math.max(...z),v=z.map(x=>Math.exp((x-top)/T)),s=sum(v);return v.map(x=>x/s)};
const maxima=v=>v.map((x,i)=>x===Math.max(...v)?i:-1).filter(i=>i>=0);
function subsets(a){return Array.from({length:2**a.length},(_,mask)=>a.filter((_,i)=>(mask>>i)&1))}
function unique(values){return[...new Map(values.map(v=>[JSON.stringify(v),v])).values()]}
function vectorEqual(a,b){return a.length===b.length&&a.every((x,i)=>close(x,b[i]))}
// Rows specify a finite joint law by P(X=i) and P(Y=j|X=i); compute event
// probabilities by explicitly enumerating every joint (X,Y) atom.
function calibration(rows){
 const K=rows[0].p.length;
 if(!close(sum(rows.map(r=>r.w)),1)||rows.some(r=>r.p.length!==K||r.g.length!==K||!close(sum(r.p),1)||!close(sum(r.g),1)||[...r.p,...r.g,r.w].some(v=>v<0||v>1)))return null;
 const atoms=rows.flatMap((r,i)=>r.p.map((p,j)=>({i,j,m:r.w*p})));let full=true,classwise=true,top=true,maxFull=0,maxClass=0,maxTop=0;
 for(const event of subsets(unique(rows.map(r=>r.g))))for(let j=0;j<K;j++){
  const has=i=>event.some(v=>vectorEqual(v,rows[i].g)),left=sum(atoms.filter(a=>has(a.i)&&a.j===j).map(a=>a.m)),right=sum(rows.map((r,i)=>has(i)?r.w*r.g[j]:0));maxFull=Math.max(maxFull,Math.abs(left-right));full&&=close(left,right);
 }
 for(let j=0;j<K;j++)for(const event of subsets(unique(rows.map(r=>r.g[j])))){
  const has=i=>event.includes(rows[i].g[j]),left=sum(atoms.filter(a=>has(a.i)&&a.j===j).map(a=>a.m)),right=sum(rows.map((r,i)=>has(i)?r.w*r.g[j]:0));maxClass=Math.max(maxClass,Math.abs(left-right));classwise&&=close(left,right);
 }
 for(const event of subsets(unique(rows.map(r=>Math.max(...r.g))))){
  const has=i=>event.includes(Math.max(...rows[i].g)),left=sum(atoms.filter(a=>has(a.i)&&a.j===maxima(rows[a.i].g)[0]).map(a=>a.m)),right=sum(rows.map((r,i)=>has(i)?r.w*Math.max(...r.g):0));maxTop=Math.max(maxTop,Math.abs(left-right));top&&=close(left,right);
 }
 return{full,classwise,top,maxFull,maxClass,maxTop};
}
const priorRows=()=>[{w:0.5,p:[.7,.2,.1],g:[.7,.2,.1]},{w:0.5,p:[.7,.2,.1],g:[.7,.2,.1]}];
const multiclass={
 A:{g:[[.4,.3,.3],[.3,.4,.3],[.3,.3,.4]],p:[[.4,.4,.2],[.2,.4,.4],[.4,.2,.4]],flags:[false,true,true]},
 B:{g:[[.5,.3,.2],[.2,.5,.3],[.3,.2,.5]],p:[[.7,.2,.1],[.1,.5,.4],[.4,.3,.3]],flags:[false,false,true]},
 C:{g:[[.5,.5,0],[.5,0,.5],[0,.5,.5]],p:[[.8,.2,0],[.2,0,.8],[0,.8,.2]],flags:[false,true,false]}
};
function topErrors(forecasts,labels){
 const confidence=forecasts.map(p=>Math.max(...p)),correct=forecasts.map((p,i)=>Number(maxima(p)[0]===labels[i]));
 // These obligations use one predeclared bin [0,1], with all observations.
 const gap=Math.abs(sum(correct)/correct.length-sum(confidence)/confidence.length);return{ece:gap,mce:gap,accuracy:sum(correct)/correct.length};
}
function validation(){
 const labels=[0,0,0,1],z=[2*Math.log(3),0],temperatures=[1,2],prob=temperatures.map(T=>softmax(z,T)),loss=prob.map(p=>-sum(labels.map(y=>Math.log(p[y])))/labels.length);
 const chosen=temperatures.map((T,i)=>({T,loss:loss[i]})).sort((a,b)=>a.loss-b.loss||a.T-b.T)[0].T;
 return{z,prob,loss,chosen,error:prob.map(p=>topErrors(labels.map(()=>p),labels))};
}
function threshold(scores,alpha){const k=Math.ceil((scores.length+1)*(1-alpha)),sorted=scores.map((x,i)=>({x,i})).sort((a,b)=>a.x-b.x||a.i-b.i);return{k,q:k===scores.length+1?Infinity:sorted[k-1].x}}
function conditionalRisk(eta,h){return eta*Number(h<=0)+(1-eta)*Number(h>=0)}
const logistic=t=>Math.max(t,0)+Math.log1p(Math.exp(-Math.abs(t)));
const hinge=t=>Math.max(0,1+t);
function tieData(eta,h){const excess=conditionalRisk(eta,h)-Math.min(eta,1-eta),main=2*Math.abs(eta-.5)*Number(h*(eta-.5)<=0),tie=Math.min(eta,1-eta)*Number(h===0);return{excess,main,tie}}
const families={
 'ml101-finite-proper-scoring':{
  'binary-boundary':()=>{const p=[1,0],q=[0,1],truth=logRisk(p,p),wrong=logRisk(p,q),gap=brierRisk(p,q)-brierRisk(p,p);return result(truth===0&&wrong===Infinity&&gap===2,`direct two-outcome sums: truthful log=${truth}, wrong log=Infinity, Brier regret=${gap}; zero-mass infinite terms omitted`)},
  'truthful-equality':()=>{let n=0;for(const p of[[1,0],[0,1],[.25,.75],[.2,.3,.5]]){const a=logRisk(p,p),b=brierRisk(p,p);if(!Number.isFinite(a)||!Number.isFinite(b)||!close(logRisk(p,[...p])-a,0)||!close(brierRisk(p,[...p])-b,0))return result(false,'truthful score computation disagrees');n++}return result(n===4,`${n} fixed finite distributions, including vertices: equal reports give zero log/Brier regret`)}
 },
 'ml101-simplex-pair-jensen':{'constant-vector':()=>{const u=[.25,.75],v=[.5,.5],atoms=[{w:.25,u,v},{w:.75,u:[...u],v:[...v]}],mean=x=>u.map((_,j)=>sum(atoms.map(a=>a.w*a[x][j]))),psi=(a,b)=>sum(a.map((x,j)=>(x-b[j])**2)),left=psi(mean('u'),mean('v')),right=sum(atoms.map(a=>a.w*psi(a.u,a.v)));return result(vectorEqual(mean('u'),u)&&vectorEqual(mean('v'),v)&&close(left,right),`constant pair finite weighted sums: Jensen sides ${left},${right}; no general Jensen proof checked`)}},
 'ml101-negative-root-power':{
  's=1':()=>{let n=0;for(const x of[0,.25,1,4])for(const y of[0,.25,1,4])for(const w of[0,.25,.5,1]){const l=-(w*x+(1-w)*y),r=w*(-x)+(1-w)*(-y);if(!close(l,r))return result(false,'affine finite mixture failed');n++}return result(n===64,`${n} fixed affine mixtures agree, including zero and endpoint weights`)},
  's=2':()=>{let n=0;const f=t=>-Math.sqrt(t);for(const x of[0,.25,1,4])for(const y of[0,.25,1,4])for(const w of[0,.25,.5,1]){if(f(w*x+(1-w)*y)>w*f(x)+(1-w)*f(y)+1e-12)return result(false,'finite root-power chord violation');n++}for(const t of[.25,1,4]){const h=t*1e-3,curvature=(f(t+h)-2*f(t)+f(t-h))/(h*h),formula=1/(4*t**1.5);if(!(curvature>0)||!close(curvature,formula,2e-6))return result(false,`central-difference curvature mismatch at ${t}`)}const endpoint=Array.from({length:8},(_,i)=>Math.abs(f(2**(-2*(i+1)))));return result(n===64&&f(0)===0&&endpoint.every((v,i)=>close(v,2**(-(i+1)))&&(i===0||v<endpoint[i-1])),`${n} root-power chords; three central-difference curvature checks; eight dyadic endpoint values. These bounded computations do not prove a derivative or continuity theorem`)}
 },
 'ml101-forecast-event-calibration':Object.fromEntries(['truthful-prior','constant-feature'].map(fixture=>[fixture,()=>{const rows=fixture==='constant-feature'?[{w:1,p:[.7,.2,.1],g:[.7,.2,.1]}]:priorRows(),v=calibration(rows);return result(v!==null&&v.full&&v.classwise&&v.top,`${rows.length} feature atoms; finite joint-atom enumeration, all forecast/coordinate/confidence events: ${JSON.stringify(v)}`)}])),
 'ml101-finite-label-conditioning':{'singleton-feature':()=>{let cases=0;for(const p of[0,.25,.5,.75,1])for(const event of[false,true])for(let j=0;j<2;j++){const atoms=[{j:0,m:p},{j:1,m:1-p}],left=sum(atoms.filter(a=>event&&a.j===j).map(a=>a.m)),eta=[p,1-p],right=event?eta[j]:0;if(!close(left,right))return result(false,'singleton class event fails');cases++}return result(cases===20,`${cases} singleton-feature/label events, p on five-point grid including0/1; no general conditional-probability existence assertion`)}},
 'ml101-posterior-brier-vector':{'binary-vector':()=>{let cases=0;for(const p of[0,.25,.5,.75,1])for(const q of[0,.25,.5,.75,1]){const P=[p,1-p],Q=[q,1-q],gap=brierRisk(P,Q)-brierRisk(P,P),squared=sum(P.map((v,j)=>(Q[j]-v)**2));if(!close(gap,squared)||!close(gap,2*(q-p)**2)||gap< -1e-12||(p===q?!close(gap,0):!(gap>0)))return result(false,'binary vector Brier minimizer/regret mismatch');cases++}return result(cases===25,`${cases} direct label-weighted Brier risks; regret=||Q-P||²=2(q-p)² for two-class vectors, unique tested minimizer. The earlier scalar coefficient1 metadata was incorrect`)}},
 'ml101-logistic-margin':{'positive-label-endpoint':()=>{const u=[-2,-1,0,1,2,4,8,32],risks=u.map(x=>1*logistic(-x)+0*logistic(x)),direct=u.map(x=>logistic(-x)),endpoint=logistic(-Infinity);return result(risks.every((x,i)=>close(x,direct[i])&&x>0&&(i===0||x<risks[i-1]))&&endpoint===0,`eta1 logistic conditional risks on eight real scores strictly decrease toward endpoint risk${endpoint}; extended endpoint evaluated explicitly, not a general optimization proof`)}},
 'ml101-binned-calibration':{'one-bin-cancellation':()=>{const rows=[{w:.5,p:[.8,.2],g:[.6,.4]},{w:.5,p:[.6,.4],g:[.8,.2]}],trueError=sum(rows.map(r=>r.w*Math.abs(r.p[0]-r.g[0]))),labelMass=sum(rows.flatMap(r=>r.p.map((p,j)=>j===0?r.w*p:0))),forecastMean=sum(rows.map(r=>r.w*r.g[0])),binError=Math.abs(labelMass-forecastMean);return result(close(trueError,.2)&&close(binError,0)&&trueError>binError,`two-atom joint law: true first-coordinate error${trueError}; one-bin label/forecast means${labelMass},${forecastMean}, discrepancy${binError}; no sampling-limit proof`)}},
 'ml101-zero-score-risk':{
  'fair-label':()=>{const v=tieData(.5,0);return result(close(v.excess,.5)&&close(v.main,0)&&close(v.tie,.5)&&close(v.excess,v.main+v.tie),`enumerated two-label errors at eta1/2,h0: ${JSON.stringify(v)}`)},
  'positive-label':()=>{const v=tieData(1,0);return result(v.excess===1&&v.main===1&&v.tie===0&&v.excess===v.main+v.tie,`deterministic positive-label zero-score error: ${JSON.stringify(v)}`)}
 },
 'ml101-surrogate-regret-witness':{
  'hinge-scale':()=>{const eta=1,s=2,c=.25,h=-.5,minimum=hinge(-1),risk=hinge(-h),gap=hinge(0)-minimum,premise=Math.abs(eta-.5)**s,wrong=2*c*(risk-minimum)**(1/s),correct=2*c**(1/s)*(risk-minimum)**(1/s),excess=conditionalRisk(eta,h);return result(close(premise,c*gap)&&minimum===0&&close(risk,1.5)&&excess===1&&wrong<excess&&correct>=excess&&close(wrong**2,3/8),`finite hinge scale witness: premise${premise}=${c*gap}; false bound${wrong}<excess1, corrected bound${correct}`)},
  'hinge-tie':()=>{const eta=.5,h=0,risk=eta*hinge(-h)+(1-eta)*hinge(h),grid=[-2,-1,0,1,2].map(u=>eta*hinge(-u)+(1-eta)*hinge(u)),excess=conditionalRisk(eta,h)-.5,tie=.5;return result(risk===1&&Math.min(...grid)===1&&excess===.5&&risk-Math.min(...grid)===0&&tie===excess,`finite hinge tie witness: zero surrogate regret but excess${excess}=tie${tie}; contradicts any zero-remainder coefficient`)},
  'logistic-scale':()=>{const eta=1,s=2,c=.5,h=-.1,minimum=logistic(-Infinity),risk=logistic(-h),gap=logistic(0)-minimum,excess=conditionalRisk(eta,h),bad=2*c*Math.sqrt(risk-minimum),good=2*Math.sqrt(c)*Math.sqrt(risk-minimum);return result(.25<=c*gap&&minimum===0&&excess===1&&bad<1&&good>=1&&close(bad**2,Math.log1p(Math.exp(.1))),`eta1 natural-log logistic witness: margin.25<=${c*gap}, bad bound${bad}<1, corrected bound${good}>=1; endpoint explicitly evaluated`)},
  'logistic-tie':()=>{const eta=.5,h=0,risk=eta*logistic(-h)+(1-eta)*logistic(h),grid=[-2,-1,0,1,2].map(u=>eta*logistic(-u)+(1-eta)*logistic(u)),v=tieData(eta,h),plusRisk=1-eta;return result(close(risk,Math.log(2))&&close(Math.min(...grid),risk)&&close(v.excess,.5)&&close(v.tie,.5)&&close(v.excess,v.tie)&&close(plusRisk-.5,0),`fair-label logistic tie: sampled conditional minimumln2, surrogate regret0, zero-is-error excess.5=tie; +1-at-zero classifier excess0`)}
 },
 'ml101-multiclass-calibration':Object.fromEntries(Object.entries(multiclass).map(([name,m])=>[name,()=>{const rows=m.g.map((g,i)=>({w:1/3,g,p:m.p[i]})),v=calibration(rows),accuracy=sum(rows.map(r=>r.w*r.p[maxima(r.g)[0]]));return result(v!==null&&[v.full,v.classwise,v.top].every((x,i)=>x===m.flags[i])&&(name!=='C'||close(accuracy,.6)),`Model${name} all finite label/forecast/coordinate/confidence subsets: ${JSON.stringify(v)}; smallest-index top accuracy${accuracy}`)}])),
 'ml101-coarsened-forecast':{'merge-a-b':()=>{const weights=[1/3,1/3,1/3],success=[.1,.9,.75],group=[0,0,1],forecast=group.map(g=>{const denominator=sum(weights.filter((_,i)=>group[i]===g)),positive=sum(weights.map((w,i)=>group[i]===g?w*success[i]:0))/denominator;return[positive,1-positive]}),v=calibration(success.map((p,i)=>({w:weights[i],p:[p,1-p],g:forecast[i]})));return result(v!==null&&v.full&&vectorEqual(forecast[0],[.5,.5])&&vectorEqual(forecast[1],forecast[0])&&vectorEqual(forecast[2],[.75,.25])&&success[0]!==success[1],`conditional means computed from merged joint atoms: ${JSON.stringify(forecast)}; all forecast events reliable while original success laws differ`)}},
 'ml101-split-conformal-threshold':{
  'zero-calibration':()=>{let n=0;for(const alpha of[.1,.5,.9]){const v=threshold([],alpha),scores=[-2,0,3],returned=scores.map((s,i)=>s<=v.q?i:-1).filter(i=>i>=0);if(v.k!==1||v.q!==Infinity||returned.length!==3)return result(false,'zero-calibration sentinel/inclusion mismatch');n++}return result(n===3,'three alpha values with m0: k1,qInfinity, all three finite-score labels included')},
  'one-calibration':()=>{const v=threshold([3],.5),candidate=[2,3,4],included=candidate.map(s=>s<=v.q);return result(v.k===1&&v.q===3&&included.join()==='true,true,false','m1,alpha1/2: independent order sorting gives the sole calibration score3; threshold membership includes equality')}
 },
 'ml101-top-label-events':{
  'overconfident':()=>{const v=calibration([{w:1,p:[1,0],g:[.9,.1]}]);return result(v!==null&&!v.top&&close(v.maxTop,.1),`one-point correctness/confidence event: ${JSON.stringify(v)}`)},
  'truthful':()=>{let n=0;for(const p of[[1,0],[.5,.5],[.7,.2,.1]]){const v=calibration([{w:1,p,g:p}]);if(!v?.top)return result(false,'constant truthful confidence event failed');n++}return result(n===3,'all confidence subsets for three truthful constant laws, including a top-label tie, satisfy the event identity')}
 },
 'ml101-temperature-validation':{'four-labels':()=>{const v=validation(),tieLoss=[1,2].map(T=>-Math.log(softmax([0,0],T)[0])),smallest=tieLoss[0]===tieLoss[1]?1:0;return result(vectorEqual(v.prob[0],[.9,.1])&&vectorEqual(v.prob[1],[.75,.25])&&v.loss[1]<v.loss[0]&&v.chosen===2&&smallest===1,`four raw validation-label log losses${JSON.stringify(v.loss)} chooseT${v.chosen}; equal-logit candidate tie selects smallestT1`)}},
 'ml101-binned-top-error':{
  'three-quarter-overconfident':()=>{const v=topErrors(Array.from({length:4},()=>[.9,.1]),[0,0,0,1]);return result(close(v.ece,3/20)&&close(v.mce,3/20)&&close(v.accuracy,.75),`four explicit predictions/labels give${JSON.stringify(v)}`)},
  'three-quarter-matched':()=>{const v=topErrors(Array.from({length:4},()=>[.75,.25]),[0,0,0,1]);return result(v.ece===0&&v.mce===0&&v.accuracy===.75,`four explicit predictions/labels give${JSON.stringify(v)}`)}
 },
 'ml101-temperature-argmax':{
  'T1':()=>{const z=[2*Math.log(3),0],p=softmax(z,1);return result(vectorEqual(p,[.9,.1])&&maxima(p).join()==='0'&&maxima(z).join()==='0','T1 raw softmax values.9,.1 have same unique maximizing index as logits')},
  'T2':()=>{const z=[2*Math.log(3),0],p=softmax(z,2);return result(vectorEqual(p,[.75,.25])&&maxima(p).join()==='0'&&maxima(z).join()==='0','T2 raw softmax values.75,.25 retain the same unique maximizing index')},
  'all-tied':()=>{let n=0;for(const T of[.25,1,2,4]){const p=softmax([3,3,3],T);if(!vectorEqual(p,[1/3,1/3,1/3])||maxima(p).join()!=='0,1,2')return result(false,'tied logit set changed');n++}return result(n===4,'four positive temperatures preserve all three equal-logit maximizers and smallest-index label0')}
 },
 'ml101-calibration-shift':{
  'accurate-overconfident':()=>{const c=calibration([{w:1,p:[1,0],g:[.9,.1]}]),v=topErrors([[.9,.1]],[0]);return result(c!==null&&!c.top&&close(v.ece,.1)&&close(v.mce,.1)&&v.accuracy===1,`one exact labeled atom: accuracy1 but${JSON.stringify(c)}, errors${JSON.stringify(v)}`)},
  'four-point-validation':()=>{const v=validation();return result(v.chosen===2&&close(v.error[0].ece,3/20)&&close(v.error[1].ece,0)&&maxima(v.prob[0])[0]===0&&maxima(v.prob[1])[0]===0,`direct four-label validation choosesT2, retains label1, ECE${v.error[0].ece}->${v.error[1].ece}; no future calibration claim`)},
  'rare-subgroup':()=>{const states=[{rare:false,p:.9},{rare:true,p:.1}];let marginal=0,rareMass=0,rareCovered=0;for(const cal of states)for(const test of states){const q=threshold([Number(cal.rare)],.5).q,included=Number(test.rare)<=q,prob=cal.p*test.p;marginal+=prob*Number(included);if(test.rare){rareMass+=prob;rareCovered+=prob*Number(included)}}const conditional=rareCovered/rareMass;return result(close(marginal,91/100)&&close(conditional,1/10)&&close(rareMass,.1),`all four independent calibration/test feature atoms: marginal${marginal}, rare conditional${conditional}; threshold constructed from calibration score`)},
  'source-target':()=>{const scores={clean:[0,1],corrupted:[1,2]},q=threshold([scores.clean[0]],.5).q,included=scores.corrupted.map(s=>s<=q),coverage=Number(included[0]),calLaw=[1,0],testLaw=[0,1],joint=calLaw.map(c=>testLaw.map(t=>c*t));return result(q===0&&included.every(v=>!v)&&coverage===0&&joint[0][1]!==joint[1][0],'source calibration threshold0; both corrupted-label scores exceed0, target true-label coverage0 and joint law fails swap invariance')}
 }
};
export const calibrationMLChecks=Object.fromEntries(Object.entries(families).map(([name,fixtures])=>[name,smoke=>{
 try{
  if(!smoke||typeof smoke!=='object'||Array.isArray(smoke))return result(false,'smoke row must be an object');
  const allowed=new Set(['asserts','case','check','historical_result','parameters','result']);
  if(Reflect.ownKeys(smoke).some(k=>typeof k!=='string'||!allowed.has(k)))return result(false,`${name}: unsupported top-level selector or metadata key`);
  if(smoke.check!==name)return result(false,`${name}: mismatched or missing check selector`);
  const p=smoke.parameters;
  if(!p||typeof p!=='object'||Array.isArray(p)||Reflect.ownKeys(p).length!==1||typeof p.fixture!=='string'||!Object.hasOwn(fixtures,p.fixture)||Object.hasOwn(smoke,'fixture'))return result(false,`${name}: require parameters={fixture: one of ${Object.keys(fixtures).join(',')}}; unsupported selectors rejected`);
  return fixtures[p.fixture]();
 }catch(error){return result(false,`${name}: bounded computation failed: ${error.message}`)}
}]));
