import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { outsideContextAlertRoute, authenticateNativeAlertEvidence, OUTSIDE_CONTEXT_ALERT_KIND } from './step4-outside-context-alerts.mjs';
import { itemHashGuard } from './item-hash.mjs';
const sha = text => createHash('sha256').update(text).digest('hex');
function fixture(t, status = 'published') {
  const root = mkdtempSync(join(tmpdir(), 'step4-context-')); t.after(() => rmSync(root, {recursive:true,force:true}));
  const run='context-test',batch='1',group='g',id='lem-legacy-context';
  const put=(p,x)=>{mkdirSync(dirname(join(root,p)),{recursive:true});writeFileSync(join(root,p),typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');};
  const reference=p=>({path:p,sha256:sha(readFileSync(join(root,p),'utf8'))});
  const source=`---\nid: ${id}\nkind: lemma\nstatus: ${status}\ndeps: []\n---\n\n## Statement\n\nLegacy context with [[def-context]] in its statement.\n`;
  put(`items/${id}.md`,source);put(`research/${run}-context-before.md`,source);
  put(`research/${run}-batch-1.pages.json`,[{id:'page',items:[{id:'lem-owned-item'}]}]);
  const digest={group,batches:[batch],pages_read:['page'],items_read:['lem-owned-item'],conventions:['fixed convention'],load_bearing:['lem-owned-item'],published_dependencies:[{id,opened:true,used_for:'Prerequisite context.'}],concerns:[],alerts:[{item:id,finding:'The legacy prerequisite Statement retains inline links rather than a following references section.',severity:'presentation'}],seams_checked:[]};
  const digestPath=`research/${run}-batch-1-step5-context.json`;put(digestPath,digest);
  const nativePath=`research/${run}-dispatch/alpha-batch-read-1.attempt-1.result.json`;
  const native={run,role:'alpha-batch-read',label:batch,covers:[batch],attempt:1,evidence_tag:'.attempt-1',ok:true,exit_code:0,process_exit_code:0,timed_out:false,started_at:'2026-01-01T00:00:00Z',ended_at:'2026-01-01T01:00:00Z',terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true}};
  put(nativePath,native);put(nativePath.replace('.result.json','.last-message.json'),digest);
  const policyPath=`research/${run}-statement-first.json`;put(policyPath,{version:1,run,domain:'math',standard:'statement-first-v1',page_layout:'compact-v1'});
  const route={source_batch:batch,source_group:group,digest_path:digestPath,digest_sha256:reference(digestPath).sha256,alert_index:0,alert:structuredClone(digest.alerts[0]),disposition:'unchanged-outside-scope-presentation',category:'statement-first-outside-frontier',reason:'The exact reported link-placement concern concerns unchanged legacy context outside this run frontier; no mathematical defect or repair is inferred from this narrowly scoped disposition.',native_result:reference(nativePath),native_output:reference(nativePath.replace('.result.json','.last-message.json')),before_file:reference(`research/${run}-context-before.md`),source_raw_sha256:sha(source),source_guard:itemHashGuard(source),source_captured_at:'2026-01-01T02:00:00Z',statement_first_policy:reference(policyPath)};
  const review={version:1,kind:'focused-owner-outside-context-presentation-review',run,owner_identity:'/root',review_result:'outside-authored-scope-no-action',category:route.category,source_batch:batch,source_group:group,alert_index:0,digest_sha256:route.digest_sha256,alert:structuredClone(route.alert),source_id:id,source_status:status,source_raw_sha256:route.source_raw_sha256,source_guard:route.source_guard,source_boundary:'current-owner-capture-not-native-observed-bytes',no_math_defect:true,source_changed:false,mathematical_acceptance:false,audit_coverage_adopted:false,native_coverage_adopted:false,reviewed_at:'2026-01-01T03:00:00Z',evidence:'Only the exact reported presentation concern and its legacy prerequisite scope were reviewed. Source capture is a current owner boundary, not a native observed-byte attestation or whole-source audit.'};
  const reviewPath=`research/${run}-owner-review.json`;put(reviewPath,review);route.owner_evidence=reference(reviewPath);
  const receipt={version:1,kind:OUTSIDE_CONTEXT_ALERT_KIND,run,authorized_by:'owner',owner_identity:'/root',recorded_at:'2026-01-01T04:00:00Z',routes:[route]};
  const receiptPath=`research/${run}-step4-outside-context-alert-routes.json`;
  const save=()=>put(receiptPath,receipt),saveReview=()=>{put(reviewPath,review);route.owner_evidence=reference(reviewPath);}; save();
  const args={root,run,batch,group,digestPath,digest,alertIndex:0};
  return {root,run,id,source,put,reference,route,receipt,receiptPath,digest,native,nativePath,review,save,saveReview,args,check:()=>outsideContextAlertRoute(args)};
}
test('absent opt-in never supplies disposition',t=>{const f=fixture(t);rmSync(join(f.root,f.receiptPath));assert.deepEqual(f.check(),{ok:false,unavailable:true,reason:'no outside-context presentation opt-in'});});
test('nonmatching occurrence remains unavailable for ordinary strict fallback',t=>{const f=fixture(t);f.receipt.routes=[];f.save();assert.equal(f.check().unavailable,true);});
for(const status of ['draft','published'])test(`exact unchanged outside ${status} presentation is visible scope-only disposition`,t=>{const f=fixture(t,status);const r=f.check();assert.equal(r.ok,true,r.reason);assert.equal(r.route.scope,'outside-authored-frontier-context-only');assert.equal(r.route.owning_group,undefined);assert.equal(r.route.repair_receipt,undefined);assert.equal(r.route.disposition,'unchanged-outside-scope-presentation');assert.equal(readFileSync(join(f.root,f.args.digestPath),'utf8'),JSON.stringify(f.digest,null,2)+'\n');});
test('explicit focused legacy-formatting category has same strict scope',t=>{const f=fixture(t);f.route.category=f.review.category='legacy-context-formatting';f.saveReview();f.save();assert.equal(f.check().ok,true);});
test('shared native helper authenticates evidence but creates no disposition',t=>{const f=fixture(t);const x=authenticateNativeAlertEvidence({...f.args,route:f.route});assert.deepEqual(x.alert,f.digest.alerts[0]);assert.equal(x.disposition,undefined);});
const mutations={
 'missing owner':f=>delete f.receipt.owner_identity,
 'wrong owner':f=>f.review.owner_identity='/root/other',
 'unknown category':f=>f.route.category='mathematical-waiver',
 'fake repaired disposition':f=>f.route.disposition='repaired-published-supplier',
 'fatal severity':f=>{f.digest.alerts[0].severity='fatal';f.route.alert.severity='fatal';},
 'mathematical severity':f=>{f.digest.alerts[0].severity='mathematical';f.route.alert.severity='mathematical';},
 'duplicate route':f=>f.receipt.routes.push(structuredClone(f.route)),
 'source changed':f=>f.put(`items/${f.id}.md`,f.source+'Changed source.'),
 'before capture changed':f=>f.put(f.route.before_file.path,f.source+'Changed capture.'),
 'wrong source guard':f=>f.route.source_guard='0'.repeat(64),
 'claims native source observation':f=>f.review.source_boundary='native-exact-observed-bytes',
 'claims math acceptance':f=>f.review.mathematical_acceptance=true,
 'claims audit coverage':f=>f.review.audit_coverage_adopted=true,
 'claims native coverage':f=>f.review.native_coverage_adopted=true,
 'unresolved math defect':f=>f.review.no_math_defect=false,
 'missing focused evidence':f=>f.review.evidence='',
 'wrong review finding':f=>f.review.alert.finding='Different finding',
 'wrong review source':f=>f.review.source_id='lem-other',
 'wrong status':f=>f.review.source_status='withdrawn',
 'capture predates native completion':f=>f.route.source_captured_at='2025-01-01T00:00:00Z',
 'review predates capture':f=>f.review.reviewed_at='2026-01-01T01:30:00Z',
 'receipt predates review':f=>f.receipt.recorded_at='2026-01-01T02:30:00Z',
 'changed policy':f=>f.put(f.route.statement_first_policy.path,{version:1,run:f.run,domain:'physics',standard:'statement-first-v1'}),
 'wrong policy after rebinding':f=>{f.put(f.route.statement_first_policy.path,{version:1,run:f.run,domain:'physics',standard:'statement-first-v1'});f.route.statement_first_policy=f.reference(f.route.statement_first_policy.path);},
 'wrong native role after rebinding':f=>{f.native.role='judge';f.put(f.nativePath,f.native);f.route.native_result=f.reference(f.nativePath);},
 'failed native result after rebinding':f=>{f.native.ok=false;f.put(f.nativePath,f.native);f.route.native_result=f.reference(f.nativePath);},
 'native completion missing':f=>{delete f.native.terminal_summary;f.put(f.nativePath,f.native);f.route.native_result=f.reference(f.nativePath);},
 'altered original native output':f=>f.put(f.route.native_output.path,{...f.digest,group:'other'}),
 'different native output after rebinding':f=>{f.put(f.route.native_output.path,{...f.digest,group:'other'});f.route.native_output=f.reference(f.route.native_output.path);},
 'altered digest':f=>f.put(f.args.digestPath,{...f.digest,group:'other'}),
 'path traversal':f=>f.route.before_file.path='research/../items/'+f.id+'.md',
 'symlink source':f=>{rmSync(join(f.root,`items/${f.id}.md`));symlinkSync(join(f.root,f.route.before_file.path),join(f.root,`items/${f.id}.md`));},
 'supplier added to a different current manifest':f=>f.put(`research/${f.run}-batch-2.pages.json`,[{id:'other-page',items:[{id:f.id}]}]),
 'empty actual frontier':f=>f.put(`research/${f.run}-batch-1.pages.json`,[]),
 'duplicate current frontier':f=>f.put(`research/${f.run}-batch-2.pages.json`,[{id:'other-page',items:[{id:'lem-owned-item'}]}]),
};
for(const [name,mutate]of Object.entries(mutations))test('reject '+name,t=>{const f=fixture(t);mutate(f);f.saveReview();f.save();const x=f.check();assert.equal(x.ok,false,JSON.stringify(x));assert.notEqual(x.unavailable,true);});

test('another alert index is unavailable, never an accepted route',t=>{const f=fixture(t);f.route.alert_index=1;f.save();assert.equal(f.check().unavailable,true);assert.equal(f.check().ok,false);});
for(const severity of ['fatal','mathematical'])test('reject fully rebound native '+severity+' alert',t=>{const f=fixture(t);f.digest.alerts[0].severity=severity;f.route.alert=structuredClone(f.digest.alerts[0]);f.review.alert=structuredClone(f.route.alert);f.put(f.args.digestPath,f.digest);f.route.digest_sha256=f.reference(f.args.digestPath).sha256;f.review.digest_sha256=f.route.digest_sha256;f.put(f.route.native_output.path,f.digest);f.route.native_output=f.reference(f.route.native_output.path);f.saveReview();f.save();assert.match(f.check().reason,/only presentation severity/);});

test('fresh frontier accepts existing canonical mixed-case IDs',t=>{const f=fixture(t);f.put(`research/${f.run}-batch-2.pages.json`,[{id:'mixed-case-page',items:[{id:'lem-hat-CF-genus-one-lens-space-order-three-rank-three'},{id:'lem-amenable-D-R-l2-dimension-estimate'}]}]);const r=f.check();assert.equal(r.ok,true,r.reason);});
for(const invalid of ['Lemma-uppercase-prefix','lem--double-gap','lem-trailing-','lem-with_underscore','nohyphen','lem-space in-id'])test('fresh frontier rejects invalid canonical ID '+invalid,t=>{const f=fixture(t);f.put(`research/${f.run}-batch-2.pages.json`,[{id:'bad-page',items:[{id:invalid}]}]);assert.match(f.check().reason,/invalid or duplicate current frontier item/);});

for(const [name,mutate] of [
 ['missing attempt',n=>delete n.attempt],['wrong attempt',n=>n.attempt=2],['noninteger attempt',n=>n.attempt=1.5],
 ['missing evidence tag',n=>delete n.evidence_tag],['wrong evidence tag',n=>n.evidence_tag='.attempt-2'],
 ['unexpected replay tag',n=>n.evidence_tag='.attempt-1.replay-1'],
 ['missing process exit',n=>delete n.process_exit_code],['failed process exit',n=>n.process_exit_code=1]
])test('reject rebound native identity '+name,t=>{const f=fixture(t);mutate(f.native);f.put(f.nativePath,f.native);f.route.native_result=f.reference(f.nativePath);f.save();assert.equal(f.check().ok,false);});
test('relabelled successful result and output under another attempt are rejected',t=>{const f=fixture(t);const p=f.nativePath.replace('.attempt-1.','.attempt-2.');f.put(p,f.native);f.put(p.replace('.result.json','.last-message.json'),f.digest);f.route.native_result=f.reference(p);f.route.native_output=f.reference(p.replace('.result.json','.last-message.json'));f.save();assert.match(f.check().reason,/attempt\/evidence tag/);});
test('exact replay tag/path agreement is supported',t=>{const f=fixture(t);const p=f.nativePath.replace('.attempt-1.','.attempt-1.replay-2.');f.native.evidence_tag='.attempt-1.replay-2';f.put(p,f.native);f.put(p.replace('.result.json','.last-message.json'),f.digest);f.route.native_result=f.reference(p);f.route.native_output=f.reference(p.replace('.result.json','.last-message.json'));f.save();assert.equal(f.check().ok,true,f.check().reason);});
for(const tag of [undefined,'.attempt-1','.attempt-1.replay-3','.attempt-2.replay-2'])test('replay path rejects missing or mismatched tag '+String(tag),t=>{const f=fixture(t);const p=f.nativePath.replace('.attempt-1.','.attempt-1.replay-2.');if(tag===undefined)delete f.native.evidence_tag;else f.native.evidence_tag=tag;f.put(p,f.native);f.put(p.replace('.result.json','.last-message.json'),f.digest);f.route.native_result=f.reference(p);f.route.native_output=f.reference(p.replace('.result.json','.last-message.json'));f.save();assert.match(f.check().reason,/attempt\/evidence tag/);});
