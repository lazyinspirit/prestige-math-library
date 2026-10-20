import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,lstatSync,chmodSync,symlinkSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
import {inspectSelection,importSelectedContext,verifyContextReceipt,reachedPhysicsMathContext,rawHash} from './physics-math-context-import.mjs';
const run='test-selected', receipt=`research/${run}-physics-math-context-import.json`;
const selection={version:1,entry_ids:['lem-local'],expected_ids:['lem-local','def-local']};
const source=(id,deps=[],extra='')=>`---\nid: ${id}\nkind: ${id.startsWith('def-')?'definition':'lemma'}\ntitle: Example\nstatus: published\ndomain: mathematics\ndeps: [${deps.join(', ')}]\ndependency_roles: ${JSON.stringify(Object.fromEntries(deps.map(id=>[id,'mathematical-premise'])))}\n${extra}---\n\n## ${id.startsWith('def-')?'Definition':'Statement'}\n\nA mathematical test carrier.\n`;
function fixture(t) {
 const root=mkdtempSync(join(tmpdir(),'selected-physics-context-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 for(const dir of ['items','physics/items','research'])mkdirSync(join(root,dir),{recursive:true});
 const put=(path,text)=>writeFileSync(join(root,path),text), git=(...args)=>execFileSync('git',['-C',root,...args],{stdio:'pipe'});
 put('items/def-root.md',source('def-root'));put('physics/items/def-local.md',source('def-local',['def-root']));put('physics/items/lem-local.md',source('lem-local',['def-local']));
 git('init','-q');git('config','user.email','fixture@example.invalid');git('config','user.name','Test fixture');git('add','.');git('commit','-qm','Published mathematical fixture');
 return {root,put,git};
}
function evidence(f) {
 const i=inspectSelection(f.root,run,selection),reviewPath=`research/${run}-review.json`,acceptancePath=`research/${run}-acceptance.json`,science=`research/${run}-science.md`;
 f.put(science,'Actual fixture review evidence exercising only metadata validation, not mathematical audit.');
 const review={version:1,kind:'focused-physics-mathematics-context-review',run,reviewer:'/root/delegated-fixture',scope:'full-supplier-proof-and-dependency-review',reviewed_at:'2026-10-17T10:00:00Z',native_execution_coverage:false,context_sha256:i.context_sha256,evidence_files:[{path:science,sha256:rawHash(readFileSync(join(f.root,science)))}],items:i.files.map(row=>({id:row.id,raw_sha256:row.sha256,verdict:'pass',dependency_review:'pass',[row.kind==='definition'?'definition_review':'proof_review']:'pass',evidence:'Synthetic fixture disposition tests exact subjects and bytes, not a real scientific judgment.'}))};
 f.put(reviewPath,JSON.stringify(review));const acceptance={version:1,kind:'owner-accepted-physics-mathematics-context-review',run,authorized_by:'owner',reviewer:'/root',verdict:'accepted',accepted_at:'2026-10-17T11:00:00Z',native_execution_coverage:false,context_sha256:i.context_sha256,review_file:reviewPath,review_sha256:rawHash(readFileSync(join(f.root,reviewPath))),reason:'Synthetic fixture root acceptance exercises fail-closed import metadata, not real review coverage.'};f.put(acceptancePath,JSON.stringify(acceptance));
 return {review:reviewPath,acceptance:acceptancePath,receipt,reviewObject:review,acceptanceObject:acceptance};
}
test('exact closure stops at canonical root; import preserves bytes/absence of audit and never touches physics',t=>{
 const f=fixture(t),e=evidence(f),before=readFileSync(join(f.root,'physics/items/lem-local.md')); const i=inspectSelection(f.root,run,selection);
 assert.deepEqual(i.expected_ids,['def-local','lem-local']);assert.deepEqual(i.boundary_files.map(r=>r.id),['def-root']);assert.equal(i.files[1].source_verification,null);
 const r=importSelectedContext(f.root,run,selection,e);assert.deepEqual(r.owned_paths.map(r=>r.path),['items/def-local.md','items/lem-local.md']);
 assert.deepEqual(readFileSync(join(f.root,'items/lem-local.md')),before);assert.deepEqual(readFileSync(join(f.root,'physics/items/lem-local.md')),before);assert.equal(lstatSync(join(f.root,'items/lem-local.md')).mode&0o777,0o444);
 assert.equal(verifyContextReceipt(f.root,receipt).receipt.external_context_only,true);
 assert.equal(reachedPhysicsMathContext(f.root,['lem-local']).bindings.length,1);assert.equal(reachedPhysicsMathContext(f.root,['def-root']).bindings.length,0);
 assert.throws(()=>verifyContextReceipt(f.root,receipt,{selectedIds:['lem-local']}),/cannot be a selected/);
 assert.throws(()=>importSelectedContext(f.root,run,selection,e),/receipt already exists/);
});
test('rejects unexpected closure and physical suppliers before any destination is written',t=>{
 const f=fixture(t);assert.throws(()=>inspectSelection(f.root,run,{...selection,expected_ids:['lem-local']}),/closure differs/);
 f.put('physics/items/def-local.md',source('def-local',['def-root'],'physical_scope: empirical\n'));f.git('add','.');f.git('commit','-qm','Physical fixture');assert.throws(()=>inspectSelection(f.root,run,selection),/not an eligible/);assert.equal(existsSync(join(f.root,'items/lem-local.md')),false);
});
test('rejects uncommitted source bytes, canonical collisions and alias collisions',t=>{
 const f=fixture(t);f.put('physics/items/lem-local.md',source('lem-local',['def-local'])+'changed\n');assert.throws(()=>inspectSelection(f.root,run,selection),/differs from authenticated/);f.git('checkout','--','physics/items/lem-local.md');
 f.put('items/def-local.md',source('def-local'));assert.throws(()=>inspectSelection(f.root,run,selection),/collision/);rmSync(join(f.root,'items/def-local.md'));
 f.put('items/def-root.md',source('def-root',[],'aliases: [lem-local]\n'));assert.throws(()=>inspectSelection(f.root,run,selection),/alias collision/);
});
test('rejects symlink destinations and source symlinks',t=>{
 const f=fixture(t);symlinkSync('def-root.md',join(f.root,'items/lem-local.md'));assert.throws(()=>inspectSelection(f.root,run,selection),/symlink|collision/);rmSync(join(f.root,'items/lem-local.md'));
 rmSync(join(f.root,'physics/items/lem-local.md'));symlinkSync('def-local.md',join(f.root,'physics/items/lem-local.md'));assert.throws(()=>inspectSelection(f.root,run,selection),/symlink/);
});
test('publication alone, false or stale review, unsigned acceptance and altered evidence fail closed',t=>{
 const f=fixture(t),e=evidence(f);f.put(e.review,JSON.stringify({...e.reviewObject,items:[]}));assert.throws(()=>importSelectedContext(f.root,run,selection,e),/exact imported closure/);
 f.put(e.review,JSON.stringify({...e.reviewObject,items:e.reviewObject.items.map(row=>({...row,verdict:'fail'}))}));assert.throws(()=>importSelectedContext(f.root,run,selection,e),/unaccepted/);
 f.put(e.review,JSON.stringify(e.reviewObject));f.put(e.acceptance,JSON.stringify({...e.acceptanceObject,reviewer:'/root/unsigned'}));assert.throws(()=>importSelectedContext(f.root,run,selection,e),/owner acceptance/);
 f.put(e.acceptance,JSON.stringify(e.acceptanceObject));f.put('items/def-root.md',source('def-root')+'new dependency context\n');assert.throws(()=>importSelectedContext(f.root,run,selection,e),/stale focused review/);f.git('checkout','--','items/def-root.md');
 f.put(e.review,JSON.stringify({...e.reviewObject,context_sha256:'0'.repeat(64)}));assert.throws(()=>importSelectedContext(f.root,run,selection,e),/stale focused review/);
 f.put(e.review,JSON.stringify(e.reviewObject));f.put(`research/${run}-science.md`,'changed actual evidence');assert.throws(()=>importSelectedContext(f.root,run,selection,e),/stale review evidence/);assert.equal(existsSync(join(f.root,'items/lem-local.md')),false);
});
test('immutable receipt rejects local drift, upstream drift, ownership lies and frontier capture',t=>{
 const f=fixture(t),e=evidence(f);importSelectedContext(f.root,run,selection,e);
 chmodSync(join(f.root,'items/lem-local.md'),0o644);f.put('items/lem-local.md',source('lem-local',['def-local'])+'tampered');assert.throws(()=>verifyContextReceipt(f.root,receipt),/immutable import changed/);f.put('items/lem-local.md',source('lem-local',['def-local']));
 f.put(`research/${run}-batch-1.pages.json`,JSON.stringify([{items:[{id:'lem-local'}]}]));assert.throws(()=>verifyContextReceipt(f.root,receipt),/frontier manifest/);rmSync(join(f.root,`research/${run}-batch-1.pages.json`));
 const r=JSON.parse(readFileSync(join(f.root,receipt)));f.put(receipt,JSON.stringify({...r,owned_paths:[]}));assert.throws(()=>verifyContextReceipt(f.root,receipt),/ownership paths/);f.put(receipt,JSON.stringify(r));
 f.put('physics/items/lem-local.md',source('lem-local',['def-local'])+'upstream changed');assert.throws(()=>verifyContextReceipt(f.root,receipt),/authenticated publication/);
});


// Synthetic local receipts below test provenance mechanics, not mathematics or
// real precheck/render execution. All production checks remain owner duties.
import {recordedPublishedRepair} from './published-repair-policy.mjs';
import {itemHashGuard} from './item-hash.mjs';
function repairedImportFixture(t) {
 const f=fixture(t),e=evidence(f);importSelectedContext(f.root,run,selection,e);
 const before=readFileSync(join(f.root,'items/lem-local.md'),'utf8');
 const importRaw=readFileSync(join(f.root,receipt));const imported=JSON.parse(importRaw);
 const row=imported.files.find(row=>row.id==='lem-local');
 const repairPath=`research/${run}-repair.json`, now=new Date().toISOString();
 const current=before.replace('---\n\n## Statement',`verification:\n  repair: ${repairPath}\n---\n\n## Statement`).replace('A mathematical test carrier.','A corrected mathematical test carrier.');
 chmodSync(join(f.root,'items/lem-local.md'),0o644);f.put('items/lem-local.md',current);
 const pre=itemHashGuard(before),content=itemHashGuard(current);
 const claim={version:1,run,id:'lem-local',group:'owner-fixture',pre_sha256:pre,claimed_at:now};
 const ledger=`\nlem-local local fixture repair ${content}\n`;
 const repair={version:1,kind:'recorded-local-published-repair',run,id:'lem-local',group:claim.group,
  correction:'Synthetic recorded correction of imported root carrier.',content_sha256:content,
  before_file:`research/${run}-before.md`,before_raw_sha256:rawHash(before),pre_sha256:pre,
  recorded_at:now,prior_publication_commit:row.publication_commit,
  prior_publication_context:{path:receipt,sha256:rawHash(importRaw),source_path:row.source_path},
  ledger_marker:'fixture-import',ledger_sha256:rawHash(ledger),local_checks:Object.fromEntries(['precheck','rendercheck'].map(tool=>[tool,{
   checked_at:now,content_sha256:content,exit_code:0,command:['node',`tools/${tool}${tool==='precheck'?'.mts':'.mjs'}`,'items/lem-local.md'],
   output:tool==='precheck'?'PASS items/lem-local.md\n1 checked, 0 failing':'OK — 1 file(s)'}]))};
 f.put(repair.before_file,before);f.put(`research/${run}-step3-published-claims.jsonl`,JSON.stringify(claim)+'\n');
 f.put('research/published-consumer-supplier-ledger.md',`<!-- local-published-repair:fixture-import:begin -->${ledger}<!-- local-published-repair:fixture-import:end -->`);
 const putRepair=()=>f.put(repairPath,JSON.stringify(repair));putRepair();
 return {...f,before,current,claim,repair,repairPath,imported,importRaw,row,putRepair,
  check:()=>recordedPublishedRepair(f.root,'lem-local',readFileSync(join(f.root,'items/lem-local.md'),'utf8'),repairPath),
  putClaim:()=>f.put(`research/${run}-step3-published-claims.jsonl`,JSON.stringify(claim)+'\n')};
}
test('ordinary root repair authenticates original physics publication and preserves immutable import',t=>{
 const f=repairedImportFixture(t);assert.equal(f.check().ok,true);
 const verified=verifyContextReceipt(f.root,receipt);assert.ok(verified.paths.includes(f.repairPath));assert.ok(verified.paths.includes(f.repair.before_file));
 assert.deepEqual(readFileSync(join(f.root,receipt)),f.importRaw);
 assert.equal(readFileSync(join(f.root,f.row.source_path),'utf8'),f.before);
 assert.throws(()=>f.git('show',`${f.row.publication_commit}:items/lem-local.md`),'no original root Git carrier');
 assert.doesNotMatch(f.current,/audited:|verified:/);assert.equal(reachedPhysicsMathContext(f.root,['lem-local']).bindings.length,1);
 assert.throws(()=>verifyContextReceipt(f.root,receipt,{selectedIds:['lem-local']}),/cannot be a selected/);
});
for(const defect of ['missing-reference','reference-hash','reference-path','source-path','source-id','missing-commit','wrong-commit',
 'wrong-run','wrong-owner','pre-import-claim','changed-before','changed-physics','changed-import-pin','changed-owned-paths',
 'changed-review','changed-acceptance','missing-local-check','stale-check','failed-render','changed-ledger','changed-current','adoption-kind']) {
 test(`imported root repair rejects ${defect}`,t=>{
  const f=repairedImportFixture(t),r=f.repair;assert.equal(f.check().ok,true);
  if(defect==='missing-reference')delete r.prior_publication_context;
  if(defect==='reference-hash')r.prior_publication_context.sha256='0'.repeat(64);
  if(defect==='reference-path')r.prior_publication_context.path=`research/${run}-other-import.json`;
  if(defect==='source-path')r.prior_publication_context.source_path='items/lem-local.md';
  if(defect==='source-id')r.prior_publication_context.source_path='physics/items/def-local.md';
  if(defect==='missing-commit')delete r.prior_publication_commit;
  if(defect==='wrong-commit')r.prior_publication_commit='0'.repeat(40);
  if(defect==='wrong-run')r.run='other';
  if(defect==='wrong-owner')r.group='other';
  if(defect==='pre-import-claim'){f.claim.claimed_at='2000-01-01T00:00:00Z';f.putClaim();}
  if(defect==='changed-before'){
   const before=f.before+'fabricated original\n';f.put(r.before_file,before);r.before_raw_sha256=rawHash(before);
   r.pre_sha256=itemHashGuard(before);f.claim.pre_sha256=r.pre_sha256;f.putClaim();
  }
  if(defect==='changed-physics')f.put(f.row.source_path,f.before+'changed physics\n');
  if(defect==='changed-import-pin'||defect==='changed-owned-paths'){
   const imported=structuredClone(f.imported);
   if(defect==='changed-import-pin')imported.files.find(row=>row.id==='lem-local').sha256='0'.repeat(64);
   else imported.owned_paths=[];
   const raw=JSON.stringify(imported);f.put(receipt,raw);r.prior_publication_context.sha256=rawHash(raw);
  }
  if(defect==='changed-review')f.put(f.imported.review.path,'{}');
  if(defect==='changed-acceptance')f.put(f.imported.acceptance.path,'{}');
  if(defect==='missing-local-check')delete r.local_checks.precheck;
  if(defect==='stale-check')r.local_checks.precheck.content_sha256='0'.repeat(64);
  if(defect==='failed-render')r.local_checks.rendercheck.exit_code=1;
  if(defect==='changed-ledger')f.put('research/published-consumer-supplier-ledger.md','changed ledger');
  if(defect==='changed-current')f.put('items/lem-local.md',f.current+'unsupported current change\n');
  if(defect==='adoption-kind'){f.claim.claim_kind='owner-adopted-delegated-repair';f.putClaim();}
  f.putRepair();assert.equal(f.check().ok,false);assert.throws(()=>verifyContextReceipt(f.root,receipt));
 });
}
test('imported publication must remain an ancestor, not merely an available Git object',t=>{
 const f=repairedImportFixture(t);f.git('checkout','--orphan','unrelated');
 f.git('rm','-rf','--cached','.');f.put('unrelated.txt','Unrelated branch\n');f.git('add','unrelated.txt');f.git('commit','-qm','Unrelated root');
 assert.equal(f.check().ok,false);assert.throws(()=>verifyContextReceipt(f.root,receipt));
});
