// Root records actual scoped repairs and authentic unchanged reader alerts.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {itemHashGuard} from '../../tools/item-hash.mjs';
import {recordedPublishedRepair} from '../../tools/published-repair-policy.mjs';
import {parseCodexOutput} from '../../tools/codex-output-schema.mjs';
import {publishedAlertRoute} from '../../tools/step4-published-alerts.mjs';
const run='machine-learning-all-101-2026-10-19',base=`research/${run}-owner-step4-published-alert-repair`,app=`${base}/application`;
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p)),sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const put=(p,x)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n',{flag:'wx'});};
const bound=p=>({path:p,sha256:sha(read(p))});
const state=json(`.autopilot/${run}/state.json`);assert.equal(state.paused,true);assert.equal(state.stage,'4-judge');
assert.ok(Object.values(state.dispatches).every(x=>!x.startedAt||x.endedAt));
const plan=json(`${app}/plan.json`),inventory=json(`${base}/inventory.json`),check=json(`${app}/check-summary.json`);
assert.equal(check.subjects,261);assert.deepEqual(check.failed,[]);assert.equal(check.proof_layout_exit_code,0);
const reviewFile=`${base}/review/review.json`;assert.equal(sha(read(reviewFile)),'b1409a1504556a7e3437a320efe235ff7f82705a6018c33ca216b9a93f3497b8');
const ledger='research/published-consumer-supplier-ledger.md',allBefore=read(ledger);
const drafts=[];
for(const row of plan.rows){
 const current=read(row.source);assert.equal(sha(current),row.final_raw_sha256);assert.equal(itemHashGuard(current),row.candidate_content_sha256);
 const checks=json(`${app}/checks/${row.id}.json`);assert.equal(checks.precheck.exit_code,0);assert.equal(checks.rendercheck.exit_code,0);
 for(const t of ['precheck','rendercheck'])assert.equal(checks[t].content_sha256,row.candidate_content_sha256);
 const start=`<!-- local-published-repair:${row.ledger_marker}:begin -->`,end=`<!-- local-published-repair:${row.ledger_marker}:end -->`;
 assert.ok(!allBefore.includes(start));assert.ok(!fs.existsSync(row.receipt));
 const evidence=`\n\n### Step 4 focused supplier correction: ${row.id}\n\nRun: ${run}; original ownership: ${row.claim.group}.\n\n${row.correction}\n\nCurrent content SHA256: ${row.candidate_content_sha256}.\n\nExact independently approved candidate and current local checks: ${base}/review/review.json; ${app}/checks/${row.id}.json. No new native review coverage or publication is claimed. Original mathematical interface meaning is preserved.\n\n`;
 const ownerPath=`${app}/owner-evidence/${row.id}.json`;
 const lane=path.dirname(path.dirname(path.dirname(row.candidate_file)));
 put(ownerPath,{version:1,run,id:row.id,owner:'/root',recorded_at:new Date().toISOString(),correction:row.correction,original_source:bound(`${base}/preimage/${row.source}`),approved_candidate:bound(row.candidate_file),independent_review:bound(reviewFile),author_report:bound(`${lane}/REPORT.md`),current_raw_sha256:row.final_raw_sha256,current_content_sha256:row.candidate_content_sha256,current_local_checks:bound(`${app}/checks/${row.id}.json`),exact_original_alerts:inventory.suppliers[row.id].alerts,statement_or_definition_meaning_changed:false,consumer_contract_changed:false,native_execution_coverage_granted:false,whole_item_audit_granted:false});
 drafts.push({row,ownerPath,block:start+evidence+end+'\n',receipt:{version:1,kind:'recorded-local-published-repair',id:row.id,run,group:row.claim.group,correction:row.correction,content_sha256:row.candidate_content_sha256,before_file:row.before_file,before_raw_sha256:row.before_raw_sha256,pre_sha256:row.pre_sha256,recorded_at:new Date().toISOString(),prior_publication_commit:row.prior_publication_commit,...(row.previous_repair?{previous_repair:row.previous_repair}:{}),ledger_marker:row.ledger_marker,ledger_sha256:sha(evidence),local_checks:{precheck:checks.precheck,rendercheck:checks.rendercheck},focused_owner_evidence:bound(ownerPath),independent_review:bound(reviewFile)}});
}
assert.equal(read(ledger),allBefore);
fs.appendFileSync(ledger,'\n'+drafts.map(x=>x.block).join('\n'));
for(const d of drafts)put(d.row.receipt,d.receipt);
const failures=[];
for(const d of drafts){const result=recordedPublishedRepair(process.cwd(),d.row.id,read(d.row.source),d.row.receipt);if(!result.ok)failures.push({id:d.row.id,...result});}
put(`${app}/repair-policy-results.json`,{run,at:new Date().toISOString(),subjects:drafts.length,failures});
assert.deepEqual(failures,[],'Recorded published repair policy failure');
const routes=[];
const nativeByBatch=new Map();
for(const d of drafts)for(const a of inventory.suppliers[d.row.id].alerts){
 let native=nativeByBatch.get(a.source_batch);
 if(!native){
  const prefix=`research/${run}-dispatch/alpha-batch-read-${a.source_batch}`,stable=json(prefix+'.result.json');
  assert.ok(/^\.attempt-[1-9]\d*(?:\.replay-[1-9]\d*)?$/.test(stable.evidence_tag));
  const result=bound(prefix+stable.evidence_tag+'.result.json'),output=bound(prefix+stable.evidence_tag+'.last-message.json'),r=json(result.path);
  assert.equal(r.run,run);assert.equal(r.role,'alpha-batch-read');assert.equal(r.label,a.source_batch);assert.equal(r.ok,true);assert.equal(r.exit_code,0);assert.equal(r.timed_out,false);assert.deepEqual(r.covers,[a.source_batch]);
  const original=parseCodexOutput(read(output.path));assert.deepEqual(original,json(a.digest_path));assert.equal(read(a.digest_path),JSON.stringify(original,null,2)+'\n');
  native={result,output};nativeByBatch.set(a.source_batch,native);
 }
 assert.equal(sha(read(a.digest_path)),a.digest_sha256);assert.deepEqual(json(a.digest_path).alerts[a.alert_index],a.alert);
 routes.push({...a,disposition:'repaired-published-supplier',native_result:native.result,native_output:native.output,repair_receipt:bound(d.row.receipt),owner_evidence:bound(d.ownerPath),reason:`The exact original native alert is retained. The outside published supplier ${d.row.id} has the actual focused correction recorded with current local checks, original ownership, preserved repair history, and independent candidate review. ${d.row.correction}`});
}
assert.equal(routes.length,630);assert.equal(new Set(routes.map(r=>`${r.source_batch}:${r.alert_index}`)).size,630);
const routePath=`research/${run}-step4-published-alert-routes.json`;
put(routePath,{version:1,kind:'owner-routed-step4-published-alerts',run,authorized_by:'owner',recorded_at:new Date().toISOString(),routes});
const frontierIds=new Set();
for(const name of fs.readdirSync('research'))if(name.startsWith(`${run}-batch-`)&&name.endsWith('.pages.json'))for(const page of json(`research/${name}`))for(const item of page.items??[])frontierIds.add(typeof item==='string'?item:item.id);
const routeFailures=[];
for(const row of routes){const result=publishedAlertRoute({root:process.cwd(),run,batch:row.source_batch,group:row.source_group,digestPath:row.digest_path,digest:json(row.digest_path),alertIndex:row.alert_index,frontierIds});if(!result.ok)routeFailures.push({batch:row.source_batch,index:row.alert_index,id:row.alert.item,...result});}
put(`${app}/route-policy-results.json`,{run,at:new Date().toISOString(),subjects:routes.length,failures:routeFailures});assert.deepEqual(routeFailures,[],'Published alert route validation failed');
console.log(JSON.stringify({recorded_repairs:drafts.length,authenticated_native_reader_batches:nativeByBatch.size,exact_alert_routes:routes.length,repair_policy_failures:failures.length,route_policy_failures:routeFailures.length,native_digests_changed:false}));
