import {readFileSync,writeFileSync} from 'node:fs';
import {policyCPOMLChecks} from './candidates/tools/finite-smoke-policy-cpo.mjs';
const subjects=JSON.parse(readFileSync(new URL('./evidence/focused-subjects.json',import.meta.url),'utf8'));
const outcomes=subjects.map(({id,smoke})=>({id,check:smoke.check,...policyCPOMLChecks[smoke.check](smoke)}));
const negative=[];
for(const {smoke} of subjects) {
  const run=policyCPOMLChecks[smoke.check];
  for(const [label,input] of [['fixture',{...smoke,fixture:'unsupported'}],['check',{...smoke,check:'unregistered-check'}],['unknown-selector',{...smoke,theta:NaN}],['null',null],['array',[]]]) negative.push({check:smoke.check,label,rejected:run(input).ok===false});
  for(const key of ['states','actions','horizon','rollouts','sample_rows']) if(key in smoke) negative.push({check:smoke.check,label:`invalid-${key}`,rejected:run({...smoke,[key]:-1}).ok===false});
}
// Check source guards and exact array CAS against current originals without writing them.
const guards=JSON.parse(readFileSync(new URL('./source-guards.json',import.meta.url),'utf8'));
const sourceCurrent=guards.every(g=>readFileSync(g.source_path,'utf8')===readFileSync(new URL(g.before_snapshot,import.meta.url),'utf8')&&readFileSync(g.source_path,'utf8').split(g.asserts).length-1===g.expected_count);
const cas=JSON.parse(readFileSync(new URL('./contract-array-cas.json',import.meta.url),'utf8'));
const casCurrent=cas.every(c=>JSON.stringify(JSON.parse(readFileSync(c.path,'utf8')).contracts[c.id].finite_smoke)===JSON.stringify(c.before));
const report={scope:'11 staged policy/CPO callbacks only; no live registry or native gates',outcomes,negative,sourceCurrent,casCurrent};
writeFileSync(new URL('./evidence/focused-results.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({positive:outcomes.length,positiveFailures:outcomes.filter(x=>!x.ok),negative:negative.length,negativeFailures:negative.filter(x=>!x.rejected),sourceCurrent,casCurrent},null,2));
process.exitCode=outcomes.some(x=>!x.ok)||negative.some(x=>!x.rejected)||!sourceCurrent||!casCurrent?1:0;
