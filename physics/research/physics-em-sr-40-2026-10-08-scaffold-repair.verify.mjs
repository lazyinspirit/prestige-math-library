import { readFileSync,writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { runPages,dependencyLevels } from '../../tools/physics-support/item-dependency-levels.mjs';
import { loadStep3,itemHash } from '../../tools/physics-support/step3-decisions.mjs';
import { recordStep1,step1Decision } from '../../tools/physics-support/step1-decisions.mjs';
const root=new URL('../',import.meta.url).pathname,run='physics-em-sr-40-2026-10-08',prefix=`${root}/research/${run}-scaffold-repair`;
const hash=s=>createHash('sha256').update(s).digest('hex'),read=p=>readFileSync(`${root}/${p}`,'utf8');
const before=JSON.parse(read(`research/${run}-scaffold-repair.before.json`)),after=JSON.parse(read(`research/${run}-scaffold-repair.after.json`)),allowed=new Set(after.changed_items.map(i=>i.id));
let changes=0;
for(const manifest of before.manifests){const now=JSON.parse(read(manifest.path));if(now.length!==manifest.pages.length)throw Error('Page lost');for(let p=0;p<now.length;p++){const old=manifest.pages[p],current=now[p];for(const key of Object.keys(old))if(key!=='items'&&JSON.stringify(old[key])!==JSON.stringify(current[key]))throw Error(`Page metadata changed ${old.id}`);if(old.items.length!==current.items.length)throw Error('Item lost');for(let i=0;i<old.items.length;i++){const orig=old.items[i],live=current.items[i];if(orig.id!==live.id)throw Error('Item order changed');if(allowed.has(orig.id)){for(const key of new Set([...Object.keys(orig),...Object.keys(live)]))if(!['statement','strategy'].includes(key)&&JSON.stringify(orig[key])!==JSON.stringify(live[key]))throw Error(`Unrelated metadata changed ${orig.id}/${key}`);if(orig.statement!==live.statement||orig.strategy!==live.strategy)changes++;}else if(JSON.stringify(orig)!==JSON.stringify(live))throw Error(`Unrelated item changed ${orig.id}`);}}}
if(changes!==5)throw Error('Expected exactly five claim/strategy edits');
for(const source of before.coverage)if(hash(read(source.path))!==source.sha256)throw Error('Coverage/disposition changed');
const pages=runPages(root,run),populated=pages.filter(p=>p.items.length),levels=dependencyLevels(populated);
if(levels.errors.length)throw Error(`Populated level errors: ${levels.errors}`);
const s=loadStep3(root,run),status=[];
for(const [id] of s.items){const row=JSON.parse(read(`research/${run}-step1-${id}.json`));status.push({id,decision:row.decision,current:row.sha256===itemHash(s,id,row.dependencies),needs_refresh:allowed.has(id),prior_reason:row.reason});if(!allowed.has(id)&&!step1Decision(s,id).closed)throw Error(`Unexpected affected item ${id}`);}
const evidence={run,at:new Date().toISOString(),exactly_five_claim_strategy_changes:true,all_other_fields_and_items_preserved:true,all_40_pair_inventories_and_ids_preserved:true,source_coverage_bytes_and_dispositions_preserved:true,populated_pages:populated.length,populated_items:s.items.size,unwritten_pages:pages.length-populated.length,populated_dependency_levels_errors:levels.errors,readiness_before_resolution:status};
if(process.argv.includes('--resolve')){
 const visited=new Set(),order=[];function visit(id){if(visited.has(id))return;for(const d of s.items.get(id).item.deps)if(allowed.has(d))visit(d);visited.add(id);order.push(id);}for(const id of allowed)visit(id);
 const corrected=[];
 for(const id of order){const old=JSON.parse(read(`research/${run}-step1-${id}.json`));if(old.decision!=='escalated'||old.owner!==true)throw Error(`Expected focused escalation ${id}`);
 const reason=old.reason+'\n\nResolved focused scaffold review/repair: corrected statement and strategy independently checked against the declared supplier interfaces and exact algebra/calculus. Standard raised-index EM pairing is F(w,u), including pointwise varying fields; monotone C1 substitution remains broad while worldline/proper-time-function conclusions require nonzero derivative with endpoint and decreasing-orientation cases explicit; circular zero-frequency static limit is preserved. Applicable target and direct-consumer computations were checked in dependency order. Exact before/after claim hashes, current deps+justified_by consumer closure and mathematical review evidence are in research/'+run+'-scaffold-repair.before.json, .after.json, .symbolic.json and .md. No imported/source change, false source rereading or independent future authored-proof audit is claimed. Previous author evidence and the intervening confirmed finding above are retained as history. Step-1 ready for ordinary authoring/review; later workflow proof/source gates remain required.';
 corrected.push(recordStep1(root,{run,item:id,decision:'ready',dependencies:old.dependencies,reason,owner:true}));
 }
 evidence.corrected_records=corrected;
}
writeFileSync(`${prefix}.verification.json`,JSON.stringify(evidence,null,2)+'\n');
console.log(JSON.stringify({exact_claim_strategy_edits:changes,populated_pages:populated.length,populated_items:s.items.size,unwritten_pages:pages.length-populated.length,level_errors:levels.errors.length,records_resolved:evidence.corrected_records?.length??0},null,2));
