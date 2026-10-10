import { readFileSync, writeFileSync } from 'node:fs';
import { loadStep3, itemHash } from '../../tools/physics-support/step3-decisions.mjs';
const root=new URL('../',import.meta.url).pathname;
const run='physics-em-sr-40-2026-10-08';
const before=loadStep3(root,run),after=loadStep3(root,run);
const plan=JSON.parse(readFileSync(`${root}/research/plan-spec.json`,'utf8'));
const byId=new Map(plan.pages.map(p=>[p.id,p]));
for(const p of after.pages){p.requires=byId.get(p.id).requires;p.order=byId.get(p.id).order;}
const rows=[];
for(const [id,row] of before.items){const record=JSON.parse(readFileSync(`${root}/research/${run}-step1-${id}.json`,'utf8')); const pre=itemHash(before,id,record.dependencies); const post=itemHash(after,id,record.dependencies);rows.push({item:id,page:row.page.id,record_hash:record.sha256,current_manifest_hash:pre,after_native_metadata_sync_hash:post,currently_current:record.sha256===pre,metadata_sync_invalidates:pre!==post});}
const result={run,at:new Date().toISOString(),simulation_only:true,note:'No readiness records/manifests modified; same native itemHash evaluated on current manifests and an in-memory canonical requires/order overlay. Refresh affected item and downstream readiness only after native sync and writers drain.',items:rows};
writeFileSync(`${root}/research/${run}-external-prerequisite-repair.currency.json`,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({items:rows.length,currently_current:rows.filter(r=>r.currently_current).length,metadata_sync_invalidates:rows.filter(r=>r.metadata_sync_invalidates).length},null,2));
