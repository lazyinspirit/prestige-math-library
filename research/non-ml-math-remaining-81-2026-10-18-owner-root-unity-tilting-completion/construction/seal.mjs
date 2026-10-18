import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard,itemSurfaceHash} from '../../../tools/item-hash.mjs';
const run='non-ml-math-remaining-81-2026-10-18', root=`research/${run}-owner-root-unity-tilting-completion`;
const raw=s=>createHash('sha256').update(s).digest('hex');
const before=JSON.parse(readFileSync(`${root}/before.json`,'utf8'));
const inv=JSON.parse(readFileSync(`${root}/construction/integrated-item-inventory.json`,'utf8'));
const focused=JSON.parse(readFileSync(`${root}/checks/focused-checks.json`,'utf8'));
if(focused.results.some(x=>x.exit_code)||focused.changed_during_checks.length)throw Error('final focused checks not clean/stable');
for(const [p,h]of Object.entries(focused.input_hashes))if(raw(readFileSync(p))!==h)throw Error('checked input changed before seal: '+p);
for(const id of inv.ids)if(!/^status: draft$/m.test(readFileSync(`items/${id}.md`,'utf8')))throw Error('scope item not draft: '+id);
const files=[];
for(const row of before.files){
 const a=readFileSync(row.before_file),b=readFileSync(row.path);if(raw(a)!==row.before_raw_sha256)throw Error('preimage changed');
 const f={path:row.path,before_file:row.before_file,before_raw_sha256:raw(a),current_raw_sha256:raw(b),changed:raw(a)!==raw(b)};
 if(row.path.startsWith('items/'))Object.assign(f,{before_guard_sha256:itemHashGuard(a.toString()),before_surface_sha256:itemSurfaceHash(a.toString()),current_guard_sha256:itemHashGuard(b.toString()),current_surface_sha256:itemSurfaceHash(b.toString())});
 files.push(f);
}
const recorded=new Set(files.map(x=>x.path));
for(const id of inv.ids){const p=`items/${id}.md`;if(recorded.has(p))continue;const s=readFileSync(p,'utf8');if(!/^status: draft$/m.test(s))throw Error('not draft');files.push({path:p,before_exists:false,before_raw_sha256:null,current_raw_sha256:raw(s),current_guard_sha256:itemHashGuard(s),current_surface_sha256:itemSurfaceHash(s),changed:true});}
const history=files.filter(f=>f.path.includes('-dispatch/')||f.path.endsWith('.task.md'));
if(history.some(x=>x.changed))throw Error('native history changed');
const oldCoverage=JSON.parse(readFileSync(`${root}/before/research/${run}-batch-68.coverage.json`,'utf8'));
const currentCoverage=JSON.parse(readFileSync(`research/${run}-batch-68.coverage.json`,'utf8'));
for(let i=0;i<5;i++)if(JSON.stringify(oldCoverage.pages[0].sources[i].fetch_verified)!==JSON.stringify(currentCoverage.pages[0].sources[i].fetch_verified))throw Error('old fetch stamp changed');
const ctx=inv.external_dependencies.map(id=>{const p=`items/${id}.md`,s=readFileSync(p,'utf8');return {id,path:p,current_raw_sha256:raw(s),current_guard_sha256:itemHashGuard(s),current_surface_sha256:itemSurfaceHash(s),edited_by_this_owner:false};});
writeFileSync(`${root}/construction/external-context-hashes.json`,JSON.stringify(ctx,null,2)+'\n');
const native=JSON.parse(readFileSync(`research/${run}-dispatch/beta-batch-68.attempt-1.result.json`,'utf8'));
const record={version:1,kind:'delegated-draft-scientific-completion',run,batch:68,recorded_at:new Date().toISOString(),original_native_attempt:`research/${run}-dispatch/beta-batch-68.attempt-1.result.json`,original_native_end:native.ended_at,approved_scope:'approved-scope.json',approved_source_full:'approved-source.full.json',correction:'Construct full good-order quantum Frobenius and the approved full-weight simply-laced large-odd-order category/Weyl/tilting/negligible/finite-alcove fusion chain; preserve both allowed parameter orders and all ADE types, including explicit E8 displacements.',current_item_count:33,new_item_count:27,definition_count:4,proof_item_count:29,all_items_draft:true,original_scope_preserved:true,source_review:'construction/source-review.md',construction:['frobenius/PROOF-CONSTRUCTION.md','category/source-reading-and-proof-review.md','tilting/completion-review.md','root-pbw/construction.md','translation-order/strong-linkage-construction.md','translation-order/affine-closest-pair-and-strong-order.md'],consumer_checks:'construction/consumer-inventory-and-checks.json',external_context:'construction/external-context-hashes.json',local_checks:'checks/focused-checks.json',focused_summary:{items:33,proofs:29,rendered_files:35,proof_steps:153,contracts:'29/29; zero errors/warnings',dependency_closure_items:2761,dependency_closure_pages:424,all_checks_pass:true,input_hashes_stable:true},mechanical_history:{round_1:'checks/round-1/',round_2:'checks/round-2/',final:'checks/',note:'Archived receipt paths retain their original preimage names; archived stdout/stderr copies are in the same round subdirectory. Two grouped mechanical repair rounds; no content gates run.'},native_history_modified:false,published_carriers_modified:false,live_external_carriers_modified:false,source_fetch_stamps_modified:false,shared_plan_ledger_state_modified:false,readiness_or_gate_claim:false,source_resolution:{original_fetch_stamps_preserved:4,source_count:8,AP_article_read:false,sixth_actual_attempt:'source-recovery/attempt6.json',sixth_outcome:'HTTP 200 HTML challenge, not the article',authentic_local_proof_alternative:true,final_drop_and_new_fetch_stamps_owner:'root'},root_owes:['mathematical owner acceptance','source disposition for inaccessible Andersen–Paradowski after reading actual alternative','genuine new-source fetch verification/stamps for added source inventories','shared dependency metadata/levels/digests','current rehash/readiness/recertification','ordinary native reviews and gates'],files};
writeFileSync(`${root}/repair.json`,JSON.stringify(record,null,2)+'\n');
console.log(JSON.stringify({files:files.length,changed:files.filter(x=>x.changed).length,items:33,native_unchanged:history.length,source_stamps_preserved:true}));
