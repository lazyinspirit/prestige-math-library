import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdirSync,mkdtempSync,readFileSync,writeFileSync,rmSync,symlinkSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {loadPhysicsRepository,validatePhysicsContent} from './physics-content.mjs';
import {recordedPublishedRepair} from './published-repair-policy.mjs';
import {itemHashGuard} from './item-hash.mjs';
const hash=x=>createHash('sha256').update(x).digest('hex');
const id='pthm-repaired',receiptPath='research/repair.json';
function fixture(transform=x=>x){
  const base=process.env.PHYSICS_PUBLICATION_TEST_ROOT??tmpdir();mkdirSync(base,{recursive:true});
  const root=mkdtempSync(join(base,'physics-publication-'));
  for(const dir of ['items','library','research'])mkdirSync(join(root,dir));
  const before=`---\nid: ${id}\nkind: physics-theorem\nstatus: published\ndomain: physics\nphysical_scope: Conditional model only\ndeps: []\nproof_strategy: direct\nprovenance:\n  statement: ai-altered\n  proof: ai-altered\nsources:\n  references:\n    - title: Source\n      url: https://example.org/source\nverification:\n  verified:\n    model: prior-reviewer\n---\n\n## Statement\n\nAn original conditional conclusion.\n\n## Proof\n\nA complete synthetic proof carrier for a metadata test.\n`;
  const current=transform(before.replace('  verified:\n    model: prior-reviewer',`  repair: ${receiptPath}`).replace('An original conditional conclusion.','A corrected conditional conclusion.'));
  const content=itemHashGuard(current),evidence=`\n${id}: correction; current content ${content}. No whole-item audit.\n`;
  const claim={version:1,run:'fixture',id,group:'g',pre_sha256:itemHashGuard(before),claimed_at:'2026-10-22T00:00:00Z'};
  const receipt={version:1,kind:'recorded-local-published-repair',id,run:'fixture',group:'g',correction:'Corrected this existing published conditional conclusion.',content_sha256:content,before_file:'research/before.md',before_raw_sha256:hash(before),pre_sha256:itemHashGuard(before),recorded_at:'2026-10-22T00:02:00Z',ledger_marker:'fixture:repair',ledger_sha256:hash(evidence),local_checks:Object.fromEntries(['precheck','rendercheck'].map(tool=>[tool,{checked_at:'2026-10-22T00:01:00Z',content_sha256:content,exit_code:0,command:['node',`tools/physics-support/${tool}${tool==='precheck'?'.mts':'.mjs'}`,`items/${id}.md`],output:tool==='precheck'?`PASS items/${id}.md\n1 checked, 0 failing`:'OK — 1 file(s)'}]))};
  const path=join(root,'items',id+'.md');writeFileSync(path,current);writeFileSync(join(root,'research/before.md'),before);
  writeFileSync(join(root,'research/published-consumer-supplier-ledger.md'),`<!-- local-published-repair:fixture:repair:begin -->${evidence}<!-- local-published-repair:fixture:repair:end -->`);
  const save=()=>{writeFileSync(join(root,receiptPath),JSON.stringify(receipt));writeFileSync(join(root,'research/fixture-step3-published-claims.jsonl'),JSON.stringify(claim)+'\n');};save();
  const check=(repo=loadPhysicsRepository(root))=>validatePhysicsContent(repo);
  return {root,path,before,current,receipt,claim,save,check};
}
const publication=errors=>errors.some(row=>row.code==='physical-publication');
test('authentic filesystem repair retains published maintenance without a new audit',()=>{const f=fixture();assert.equal(recordedPublishedRepair(f.root,id,f.current,receiptPath).ok,true);assert.deepEqual(f.check(),[]);assert.doesNotMatch(f.current,/audited:|verified:/);});
for(const [name,mutate] of [
  ['missing receipt',f=>rmSync(join(f.root,receiptPath))],
  ['generic repair flag',f=>writeFileSync(f.path,f.current.replace(receiptPath,'true'))],
  ['forged receipt',f=>{f.receipt.kind='reviewed';f.save();}],
  ['stale content',f=>writeFileSync(f.path,f.current+'\nUnreviewed source change.\n')],
  ['wrong owner',f=>{f.receipt.group='other';f.save();}],
  ['missing claim',f=>rmSync(join(f.root,'research/fixture-step3-published-claims.jsonl'))],
  ['ledger mismatch',f=>writeFileSync(join(f.root,'research/published-consumer-supplier-ledger.md'),'Forged ledger')],
  ['failed focused check',f=>{f.receipt.local_checks.precheck.exit_code=1;f.save();}],
  ['stale focused check',f=>{f.receipt.local_checks.rendercheck.content_sha256='0'.repeat(64);f.save();}],
  ['newly published draft preimage',f=>{const pre=f.before.replace('status: published','status: draft');writeFileSync(join(f.root,'research/before.md'),pre);f.receipt.before_raw_sha256=hash(pre);f.receipt.pre_sha256=f.claim.pre_sha256=itemHashGuard(pre);f.save();}],
  ['never-audited published preimage',f=>{const pre=f.before.replace('  verified:\n    model: prior-reviewer\n','');writeFileSync(join(f.root,'research/before.md'),pre);f.receipt.before_raw_sha256=hash(pre);f.save();}],
])test('rejects '+name,()=>{const f=fixture();mutate(f);assert.equal(publication(f.check()),true);});
test('standalone in-memory validation has no filesystem repair authority',()=>{const f=fixture(),repo=loadPhysicsRepository(f.root);delete repo.sourceContext;assert.equal(publication(f.check(repo)),true);});
test('a caller-created context or waiver callback has no authority',()=>{const f=fixture(),repo=loadPhysicsRepository(f.root);repo.sourceContext={root:f.root,ok:true,recordedPublishedRepair:()=>({ok:true})};assert.equal(publication(f.check(repo)),true);});
test('another root context cannot validate this source',()=>{const f=fixture(),other=fixture(),repo=loadPhysicsRepository(f.root);repo.sourceContext=loadPhysicsRepository(other.root).sourceContext;assert.equal(publication(f.check(repo)),true);});
test('changed in-memory parsed metadata cannot borrow genuine filesystem repair',()=>{const f=fixture(),repo=loadPhysicsRepository(f.root);repo.items[0].physical_scope='Changed scope';assert.equal(publication(f.check(repo)),true);});
test('an old loaded carrier fails after filesystem mutation',()=>{const f=fixture(),repo=loadPhysicsRepository(f.root);writeFileSync(f.path,f.current+'\nChanged after loading.\n');assert.equal(publication(f.check(repo)),true);});
test('source file identity cannot be forged',()=>{const f=fixture(),repo=loadPhysicsRepository(f.root);repo.items[0].file=join(f.root,'research/before.md');assert.equal(publication(f.check(repo)),true);});
test('symlinked outside source cannot acquire local physics authority',()=>{const f=fixture(),other=fixture();rmSync(f.path);symlinkSync(other.path,f.path);assert.equal(publication(f.check()),true);});
test('an imported original cannot use local physics repair context even with caller-suppressed import ids',()=>{const f=fixture();writeFileSync(join(f.root,'research/math-imports.json'),JSON.stringify({source_root:f.root,files:[{path:`items/${id}.md`}]}));const repo=loadPhysicsRepository(f.root);repo.importedIds=new Set();assert.equal(publication(f.check(repo)),true);});
test('changing the import receipt invalidates existing provenance',()=>{const f=fixture(),repo=loadPhysicsRepository(f.root);writeFileSync(join(f.root,'research/math-imports.json'),JSON.stringify({files:[]}));assert.equal(publication(f.check(repo)),true);});
test('draft source remains draft and cannot be projected as repaired publication',()=>{const f=fixture();writeFileSync(f.path,f.current.replace('status: published','status: draft'));assert.equal(recordedPublishedRepair(f.root,id,readFileSync(f.path,'utf8'),receiptPath).ok,false);const repo=loadPhysicsRepository(f.root);repo.items[0].status='published';assert.equal(publication(f.check(repo)),true);});
test('complete proof and proof provenance remain mandatory for a policy-valid repair',()=>{for(const transform of [x=>x.replace('## Proof','## Notes'),x=>x.replace('  proof: ai-altered','  proof: not-applicable')]){const f=fixture(transform);assert.equal(recordedPublishedRepair(f.root,id,f.current,receiptPath).ok,true);assert.ok(f.check().some(row=>['physical-proof','physical-proof-provenance'].includes(row.code)));}});
test('empirical qualifications remain mandatory for a policy-valid repair',()=>{const f=fixture(x=>x.replace('deps: []','deps: [exp-premise]\ndependency_roles:\n  exp-premise: empirical-premise'));writeFileSync(join(f.root,'items/exp-premise.md'),'---\nid: exp-premise\nkind: experiment\ndomain: physics\ndeps: []\n---\n');assert.equal(recordedPublishedRepair(f.root,id,f.current,receiptPath).ok,true);assert.ok(f.check().some(row=>row.id===id&&row.code==='empirical-qualification'));});
test('ordinary audited and verified publication paths stay valid without repair context',()=>{const f=fixture(),repo=loadPhysicsRepository(f.root);delete repo.sourceContext;delete repo.items[0].verification.repair;for(const verification of [{audited:'2026-10-22'},{verified:{model:'reviewer'}}])assert.equal(publication(validatePhysicsContent({...repo,items:[{...repo.items[0],verification}]})),false);});
