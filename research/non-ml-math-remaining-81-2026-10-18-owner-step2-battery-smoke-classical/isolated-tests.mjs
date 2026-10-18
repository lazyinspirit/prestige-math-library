import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {frontier81ClassicalChecks as checks} from './finite-smoke-frontier81-classical.mjs';
const base=new URL('.',import.meta.url),patches=JSON.parse(readFileSync(new URL('row-patches.json',base),'utf8')).patches;
const source=readFileSync(new URL('finite-smoke-frontier81-classical.mjs',base),'utf8');
const outcomes=[];
for(const p of patches) {
  const smoke=p.replacement[0],fn=checks[smoke.check],outcome=fn(smoke);
  assert.equal(outcome.ok,true,outcome.summary);
  const item=readFileSync(p.source,'utf8');
  assert.ok(item.includes(smoke.asserts),'assertion must be exact source excerpt');
  assert.equal(createHash('sha256').update(item).digest('hex'),p.source_raw_sha256);
  const contract=JSON.parse(readFileSync(p.contract,'utf8'));
  assert.deepEqual(contract.contracts[p.id].finite_smoke,p.guard.equals);
  assert.equal(fn({...smoke,fixture:'unsupported'}).ok,false);
  assert.equal(fn({...smoke,parameters:{n:0}}).ok,false);
  assert.equal(fn(null).ok,false);
  assert.equal(fn({fixture:smoke.check}).ok,true);
  outcomes.push({id:p.id,check:smoke.check,...outcome});
}
// Each altered implementation must falsify its own recomputed invariant. These
// run fresh pure module instances from data URLs and never alter production files.
const mutants=[
 ['subprobability-reference-point-mass','[[1],[0.5]]','[[1],[2]]'],
 ['two-point-shannon-codes',"code:['0','10']","code:['0','01']"],
 ['symmetric-markov-block-entropy','1+(n-1)*h','1+n*h'],
 ['iid-bernoulli-half-conditional-block','conditional=mass/past.get(a)','conditional=mass'],
 ['singleton-source-recurrence','R=j;break','R=j+1;break'],
 ['first-block-endpoints','2**(2**(i+1))','2**(2**i)'],
 ['explicit-lz78-parse',"if(c==='#') { demand(!unread.length", "if(c==='#') { dict.push(phrase); demand(!unread.length"],
 ['four-symbol-block-entropies','markov=markovLaw(4,0.25)','markov=markovLaw(4,0.5)']
];
const mutationOutcomes=[];
for(const [name,before,after] of mutants) {
 assert.ok(source.includes(before),'mutation target exists');
 const mutated=await import('data:text/javascript;base64,'+Buffer.from(source.replace(before,after)).toString('base64'));
 const result=mutated.frontier81ClassicalChecks[name]({});
 assert.equal(result.ok,false,`mutation was not detected: ${name}`);
 mutationOutcomes.push({check:name,detected:!result.ok,summary:result.summary});
}
const result={ok:true,kind:'isolated proposal function tests only; no native validator, gate, or global registry self-test',positive_checks:outcomes.length,guard_and_excerpt_checks:patches.length,invalid_shape_checks:patches.length*3,explicit_selector_checks:patches.length,mutations_detected:mutationOutcomes.length,outcomes,mutationOutcomes};
writeFileSync(new URL('isolated-test-results.json',base),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
