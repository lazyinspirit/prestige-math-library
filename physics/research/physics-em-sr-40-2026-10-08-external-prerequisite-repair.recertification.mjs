import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { loadStep3, itemHash } from '../../tools/physics-support/step3-decisions.mjs';
import { recordStep1 } from '../../tools/physics-support/step1-decisions.mjs';
const root=new URL('../',import.meta.url).pathname,run='physics-em-sr-40-2026-10-08',prefix=`${root}/research/${run}-external-prerequisite-repair.recertification`;
const read=p=>readFileSync(`${root}/${p}`,'utf8'),hash=s=>createHash('sha256').update(s).digest('hex');
const archive=JSON.parse(read(`research/${run}-prerequisite-sync-before.json`));
const archivedPages=new Map(archive.manifests.flatMap(m=>m.pages).map(p=>[p.id,p]));
const current=loadStep3(root,run),original=loadStep3(root,run),rows=[],manifestGuards=[];
for(const page of original.pages){const archived=archivedPages.get(page.id);if(JSON.stringify(page.items)!==JSON.stringify(archived.items))throw Error(`Item array changed: ${page.id}`);page.requires=archived.requires;page.order=archived.order;}
for(const m of archive.manifests){const pages=JSON.parse(read(m.path));const before=JSON.stringify(m.pages.map(p=>({id:p.id,items:p.items})));const after=JSON.stringify(pages.map(p=>({id:p.id,items:p.items})));if(before!==after)throw Error(`Item array/identity mismatch: ${m.path}`);manifestGuards.push({path:m.path,archived_sha256:m.sha256,current_sha256:hash(read(m.path)),preserved_item_array_and_id_sha256:hash(before),unchanged_items:true});}
const heldSeeds=['lem-em-antisymmetric-tensor-contraction','lem-sr-proper-time-reparametrization-invariance','ex-sr-four-velocity-and-acceleration-of-a-circular-worldline'];
const held=new Set(heldSeeds);
let changed=true;while(changed){changed=false;for(const [id,{item}] of current.items)if(!held.has(id)&&item.deps.some(d=>held.has(d))){held.add(id);changed=true;}}
const visits=new Set(),active=new Set(),ordered=[];
function visit(id){if(visits.has(id))return;if(active.has(id))throw Error(`Local dependency cycle ${id}`);active.add(id);for(const dep of current.items.get(id).item.deps)if(current.items.has(dep))visit(dep);active.delete(id);visits.add(id);ordered.push(id);}
for(const id of current.items.keys())visit(id);
const sourceGuards=[1,2,3,13,14,15].map(n=>{const path=`research/${run}-batch-${n}.coverage.json`,text=read(path),coverage=JSON.parse(text);return {path,sha256:hash(text),coverage};});
for(const id of ordered){const path=`research/${run}-step1-${id}.json`,text=read(path),record=JSON.parse(text),{item,page}=current.items.get(id);if(record.decision!=='ready'||!record.reason?.trim()||!Array.isArray(record.dependencies))throw Error(`Not legitimately ready ${id}`);if(!item.statement?.trim()||!item.strategy?.trim())throw Error(`Unfinished item ${id}`);const originalHash=itemHash(original,id,record.dependencies),currentHash=itemHash(current,id,record.dependencies);if(record.sha256!==originalHash&&record.sha256!==currentHash)throw Error(`Unexplained old hash ${id}`);rows.push({id,page:page.id,original_record:record,original_record_raw:text,original_record_sha256:hash(text),original_metadata_hash:originalHash,current_metadata_hash:currentHash,invalidated:record.sha256!==currentHash,hold:held.has(id),item_guard_sha256:hash(JSON.stringify(item)),scoped_reconciliation:'Exact archived/current full item arrays equal; prior ready decision and reason preserved as prior author evidence; imported supplier context declared, source-fetch stamps valid; only plan-owned page requires changed. No independent proof audit or external source rereading claimed.'});}
const result={run,at:new Date().toISOString(),plan_sha256:hash(read('research/plan-spec.json')),rows,held_items:[...held].sort(),manifest_guards:manifestGuards,source_guards:sourceGuards,source_review:'Coverage dispositions and existing full-text fetch stamps inspected as preserved source evidence; source-fetch check run in no-network/no-write check mode. No claim of independent source full-text rereading.'};
if(process.argv.includes('--record-safe')){
 if(existsSync(`${prefix}.before.json`))throw Error('Before receipt already exists: avoid replacing legitimate old evidence');
 writeFileSync(`${prefix}.before.json`,JSON.stringify(result,null,2)+'\n');
 const refreshed=[];
 for(const row of rows){if(!row.invalidated||row.hold)continue;
  const old=row.original_record;
  const reason=old.reason+'\n\nFocused owner prerequisite-metadata reconciliation: archived/current complete scaffold item statement, strategy, sources, dependency IDs/roles and qualifications are byte-equivalent as JSON values; exact imported published page context is now declared and synced by native drift-apply. Existing source coverage dispositions and fetch stamps are preserved, with source-fetch-check passing in check mode. Prior author readiness/source-reading evidence above is retained as prior evidence, not a claim of my independent proof audit or source rereading. This refresh covers changed page requires metadata and its downstream hashes only; Step-3 authoring and independent review remain pending. See research/'+run+'-external-prerequisite-repair.recertification.before.json and repair record.';
  const out=recordStep1(root,{run,item:row.id,decision:'ready',reason,dependencies:old.dependencies,owner:true});refreshed.push({item:row.id,before:old.sha256,after:out.sha256,dependencies_preserved:JSON.stringify(old.dependencies)===JSON.stringify(out.dependencies),prior_reason_preserved:out.reason.startsWith(old.reason)});
 }
 for(const source of sourceGuards)if(hash(read(source.path))!==source.sha256)throw Error(`Source evidence changed ${source.path}`);
 writeFileSync(`${prefix}.after.json`,JSON.stringify({run,at:new Date().toISOString(),refreshed,held_items:[...held].sort(),source_guards_unchanged:true},null,2)+'\n');
 console.log(JSON.stringify({items:rows.length,invalidated:rows.filter(r=>r.invalidated).length,refreshed:refreshed.length,held_items:[...held].sort()},null,2));
}else{writeFileSync(`${prefix}.inspection.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({items:rows.length,invalidated:rows.filter(r=>r.invalidated).length,held_items:[...held].sort(),preserved_manifests:manifestGuards.length,source_coverages:sourceGuards.length},null,2));}
