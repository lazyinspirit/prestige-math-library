// Archived actual syntax cases, with synthetic approval fixtures only.
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
const {originalPresentationChanges:extract,validateOriginalPresentationReviews:validate}=await import(resolve('../tools/physics-support/original-presentation-maintenance.mjs'));
const sha=x=>createHash('sha256').update(x).digest('hex');
const fixtures=JSON.parse(readFileSync(new URL('./exact-native-fixtures.json',import.meta.url)));
const run=f=>extract(Buffer.from(f.before),Buffer.from(f.after),undefined,undefined,undefined,undefined,undefined,undefined,undefined,f.selector);
const reason='Synthetic test review of archived exact syntax deltas only; these artificial review rows convey no real Root approval or scientific acceptance.';
for(const f of fixtures)test(f.selector.id+' exact source, roles, selector and pending review guards',()=>{
  const changes=run(f);
  assert.equal(changes.id,f.selector.id);assert.deepEqual(changes.source_hashes,{before:sha(f.before),after:sha(f.after)});
  assert.ok(changes.exact_native_context.regions.length>=2);
  assert.ok(Object.keys(changes.proof_support_parser_runtime.inputs).length>0);
  assert.throws(()=>run({...f,after:f.after+'\n'}),/case\/body binding/);
  assert.throws(()=>run({...f,before:f.before.replace('status: published','status: draft')}),/case\/body binding/);
  assert.throws(()=>run({...f,selector:{...f.selector,id:'lem-unrelated'}}),/selector/);
  assert.throws(()=>extract(Buffer.from(f.before),Buffer.from(f.after),{version:1,steps:['1.1']},undefined,undefined,undefined,undefined,undefined,undefined,f.selector),/cannot combine/);
  const files=new Map(), receipt={files:[]}, importedItems=new Set(), paths=new Set();
  for(const d of changes.deltas)if(d.target){const p=`items/${d.target}.md`,bytes=readFileSync(p),hash=sha(bytes);files.set(p,bytes);receipt.files.push({path:p,sha256:hash});importedItems.add(d.target);paths.add(p);}
  const evidence={path:'research/synthetic-review.json',sha256:sha('synthetic')};
  const entry={presentation_version:2,exact_native_presentation:f.selector,pinned_sha256:sha(f.before),original_sha256:sha(f.after),changes,
    scientific_review:{...changes.review_classification,hypotheses:'identical',new_premises:false,new_results:false,reason,reading_limits:reason},
    presentation_reviews:changes.deltas.map(d=>({delta_id:d.id,delta_sha256:sha(JSON.stringify(d)),reviewer:'/root',decision:'accepted',review_kind:d.kind,reason,reading_limits:reason,evidence:[evidence],...(d.target?{pinned_target:receipt.files.find(p=>p.path===`items/${d.target}.md`)}:{})}))};
  const context={receipt,scope:{importedItems,paths},bind:(p,h)=>{const bytes=files.get(p)??readFileSync(p);assert.equal(sha(bytes),h);return bytes;},localEvidence:ref=>{assert.deepEqual(ref,evidence);return Buffer.from('synthetic');}};
  assert.ok(validate(entry,changes,context));
  entry.presentation_reviews.at(-1).decision='pending';assert.throws(()=>validate(entry,changes,context),/typed Root/);
  entry.presentation_reviews.at(-1).decision='accepted';delete entry.presentation_reviews.at(-1).review_kind;assert.throws(()=>validate(entry,changes,context),/typed Root/);
});
test('normal density route is one graphics-free named step; Remarks additions retain diagrams',()=>{
  const normal=run(fixtures.find(f=>f.selector.id==='lem-normal-density-has-total-mass-one'));
  assert.equal(normal.exact_native_context.graphics_free,true);assert.equal(normal.deltas.length,1);
  assert.deepEqual(normal.steps.map(s=>({label:s.label,kind:s.kind})),[{label:'2.1',kind:'proof-inline-math-transcription'}]);
  assert.equal(normal.title,null);assert.equal(normal.technique,null);assert.equal(normal.remarks,null);
  for(const id of ['cor-interval-uncountable','lem-equivalence-classes-partition']){
    const c=run(fixtures.find(f=>f.selector.id===id));assert.equal(c.exact_native_context.graphics_free,false);assert.ok(c.remarks.after.startsWith(c.remarks.before));
  }
});
