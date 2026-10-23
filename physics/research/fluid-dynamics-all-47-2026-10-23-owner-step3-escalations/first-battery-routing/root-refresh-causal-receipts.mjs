import fs from 'node:fs';
import assert from 'node:assert/strict';
import {digest,hashObject as H,decisionCore,sharedCausalRepair} from '../../../tools/physics-support/step3-shared-causal-repair.mjs';

// Root-only actual issuance, after all semantic edits and native decision stamping.
assert.ok(process.argv.includes('--root-reviewed-and-native-stamped'));
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step3-escalations/first-battery-routing`,read=p=>JSON.parse(fs.readFileSync(p)),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n',{flag:'wx'}),guard=p=>({path:p,sha256:digest(fs.readFileSync(p))});
const pendingFiles=new Map(),stage=(p,x)=>{assert.ok(!fs.existsSync(p));pendingFiles.set(p,JSON.stringify(x,null,2)+'\n');},bytes=p=>pendingFiles.has(p)?Buffer.from(pendingFiles.get(p)):fs.readFileSync(p),currentGuard=p=>({path:p,sha256:digest(bytes(p))});
const receiptPath=`research/${run}-step3-cross-group-causal-repairs.json`,oldRaw=fs.readFileSync(receiptPath),old=JSON.parse(oldRaw),ledger=fs.readFileSync('research/defect-ledger.jsonl','utf8').trim().split('\n').map(JSON.parse),archive=`${base}/before-root-causal-refresh`;
assert.equal(old.repairs.length,1);assert.ok(!fs.existsSync(archive));
const readiness=read(`${base}/readiness4/receipt-entry.DRAFT.json`).repairs[0],entries=[structuredClone(old.repairs[0]),readiness];
const original=ledger.find(x=>x.defect_id===readiness.merged_original_ids[0]);assert.ok(original);
const originalPath=`${base}/readiness4/root-original-ledger-row.json`,causalPath=`${base}/readiness4/root-causal-repair-acceptance.json`;
stage(originalPath,original);
stage(causalPath,{run,subject:readiness.subject,accepted_by:'root',accepted_at:new Date().toISOString(),one_actual_defect:true,merged_original_ids:readiness.merged_original_ids,primary_obligation:readiness.primary.obligation,alias_obligations:readiness.aliases.map(x=>x.obligation),same_literal_fault:readiness.causal_statement,evidence:'Actual historical false sentence, dated readiness record, current repaired producer and same-owner consumer review checked; original findings remain unchanged.'});
readiness.original_ledger_row_guards=[currentGuard(originalPath)];readiness.causal_repair_receipt=currentGuard(causalPath);
readiness.immutable_guards=['3','4'].flatMap(b=>[`research/${run}-reader-findings-${b}.json`,`research/${run}-refute-${b}.json`,...['pre','post'].map(s=>`research/${run}-step3-hash-${b}-${s}.json`)]).map(guard);
readiness.final_scientific_reports=[`${base}/routing-diagnosis-and-proposals.json`,`research/${run}-owner-step3-escalations/source3/round1-final-scientific-resolution.json`].map(guard);
const inputs={},documents=new Map(),checks=[];
for(const e of entries){
 const primaryPath=`research/${run}-alpha-batch-${e.primary.batch}-3a-decisions.json`,primary=read(primaryPath).decisions.find(x=>x.obligation===e.primary.obligation),canonical=ledger.filter(x=>x.defect_id===e.canonical_defect_id);assert.equal(canonical.length,1);
 const pages=read(`research/${run}-batch-${e.primary.batch}.pages.json`),page=pages.find(p=>p.items.some(x=>x.id===e.subject)),item=page.items.find(x=>x.id===e.subject),contract=read(`research/${run}-batch-${e.primary.batch}.proof-contracts.json`).contracts[e.subject],carrier={item_sha256:digest(fs.readFileSync(`items/${e.subject}.md`)),contract_sha256:H(contract),manifest_sha256:H({...item,__step4_page_id:page.id})};
 e.canonical_row_sha256=H(canonical[0]);e.current_carrier_sha256=H(carrier);e.primary.decision_guard=guard(primaryPath);e.primary.decision_core_sha256=H(decisionCore(primary));
 for(const a of e.aliases){const path=`research/${run}-alpha-batch-${a.batch}-3a-decisions.json`;if(!documents.has(path))documents.set(path,{before:fs.readFileSync(path),after:read(path)});const d=documents.get(path).after.decisions.find(x=>x.obligation===a.obligation),scope=read(e.consumer_scope_guard.path),f=[...scope.reader_findings,...scope.refuter_findings].filter(x=>x.obligation===a.obligation);assert.equal(f.length,1);assert.equal(d.same_defect_as,primary.obligation);a.frozen_finding_sha256=H(f[0]);a.decision_core_sha256=H(decisionCore(d));checks.push({e,a,d,primary,canonical:canonical[0],carrier,target:{...f[0],batch:a.batch,route:a.route}});}
 for(const g of [...e.original_ledger_row_guards,e.primary.scope_guard,e.primary.decision_guard,e.consumer_scope_guard,...e.immutable_guards,e.causal_repair_receipt,...e.final_scientific_reports,...[e.historical_source_guard,e.ready_record_guard].filter(Boolean)]){assert.equal(digest(bytes(g.path)),g.sha256);inputs[g.path]=g.sha256;}
 inputs[`items/${e.subject}.md`]=carrier.item_sha256;
}
const receipt={version:1,run,reviewed_by:'root',kind:'cross-group-shared-causal-repair',reviewed_at:new Date().toISOString(),repairs:entries,inputs},raw=JSON.stringify(receipt,null,2)+'\n',receiptSha=digest(raw);
// Test the actual proposed receipt and pointer values in memory before publishing.
for(const c of checks){c.d.shared_causal_receipt_sha256=receiptSha;assert.ok(sharedCausalRepair({run,prior:c.primary,decision:c.d,target:c.target,canonicalRow:c.canonical,currentCarrier:c.carrier,readBytes:p=>p===receiptPath?Buffer.from(raw):bytes(p)}),`Actual sharing guard ${c.a.obligation}`);}
fs.mkdirSync(archive);for(const[p,raw]of pendingFiles)fs.writeFileSync(p,raw,{flag:'wx'});fs.writeFileSync(`${archive}/previous-receipt.json`,oldRaw,{flag:'wx'});for(const[p,d]of documents)fs.writeFileSync(`${archive}/${p.split('/').at(-1)}`,d.before,{flag:'wx'});
assert.deepEqual(fs.readFileSync(receiptPath),oldRaw);fs.writeFileSync(receiptPath,raw);for(const[p,d]of documents){assert.deepEqual(fs.readFileSync(p),d.before);fs.writeFileSync(p,JSON.stringify(d.after,null,2)+'\n');}
for(const c of checks)assert.ok(sharedCausalRepair({run,prior:c.primary,decision:c.d,target:c.target,canonicalRow:c.canonical,currentCarrier:c.carrier,readBytes:p=>fs.readFileSync(p)}));
write(`${base}/root-causal-refresh-integration.json`,{run,owner:'/root',at:new Date().toISOString(),archive,receipt:{path:receiptPath,sha256:receiptSha},actual_aliases_checked:checks.map(x=>x.a.obligation),native_observations_rewritten:false,gates_attempted:0});
console.log({actual_repairs:entries.length,actual_aliases_checked:checks.length,receipt_sha256:receiptSha});
