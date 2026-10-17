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
