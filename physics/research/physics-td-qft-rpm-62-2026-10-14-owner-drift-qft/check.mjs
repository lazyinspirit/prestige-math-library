import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {parseFrontmatter} from '../../tools/physics-support/content-policy-lib.mjs';
const dir='research/physics-td-qft-rpm-62-2026-10-14-owner-drift-qft';
const sha=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const proposal=JSON.parse(readFileSync(dir+'/integration-proposal.json'));
const inv=JSON.parse(readFileSync('research/scaffold-audit-2026-10-12/qft/revised-inventory.json'));
const old=inv.records.find(r=>r.id==='thm-qft-conformal-external-scalar');
const descendants=seed=>{const seen=new Set([seed]);let changed=true;while(changed){changed=false;for(const r of inv.records)if(!seen.has(r.id)&&r.deps.some(d=>seen.has(d))){seen.add(r.id);changed=true;}}return [...seen].filter(i=>i!==seed)};
const seen=new Set(),todo=['def-gr-smooth-lorentzian-objects','def-gr-metric-selected-connection'],bad=[],sources={};
while(todo.length){const id=todo.pop();if(seen.has(id))continue;seen.add(id);const path='items/'+id+'.md';if(!existsSync(path)){bad.push({id,error:'missing'});continue;}const m=parseFrontmatter(readFileSync(path,'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)[1]);sources[path]=sha(path);if((m.domain??'mathematics')!=='mathematics'||['postulate','physics-theorem','experiment','thought-experiment','open-problem'].includes(m.kind))bad.push({id,kind:m.kind,domain:m.domain});todo.push(...(m.deps??[]));}
const records=[...inv.records];let index=records.findIndex(r=>r.id===old.id);records.splice(index,1,...proposal.insert_records_before.records,proposal.replace_records[0].after);
const byId=new Map(records.map(r=>[r.id,r])),active=new Set(),done=new Set(),cycles=[];
function visit(id){if(active.has(id)){cycles.push(id);return;}if(done.has(id)||!byId.has(id))return;active.add(id);for(const d of byId.get(id).deps)visit(d);active.delete(id);done.add(id);} records.forEach(r=>visit(r.id));
for(const p of ['research/extended-frameworks-2026-10-03/einstein-maxwell-models/complete-local-arguments.md','research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/geometry-actions/proof-modules.md','research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/geometry-actions/inventory.json','research/extended-frameworks-2026-10-03/quantum-field-theory/complete-local-arguments.md','research/extended-frameworks-2026-10-03/quantum-field-theory/workers/free-fields/proof-modules.md','research/scaffold-audit-2026-10-12/qft/revised-inventory.json',dir+'/conformal-prerequisite.md',dir+'/integration-proposal.json'])sources[p]=sha(p);
const evidence={version:1,run:proposal.run,research_only:true,checks:{scope:{before_records:inv.records.length,proposed_records:records.length,before_pairs:inv.pairs.length,after_pairs:inv.pairs.length,pair:'QFT-MC04',new_pairs:0},supplier_dependency_closure:{count:seen.size,bad,scope:'Exact deps closure, existing authored/imported carrier metadata only; no whole-item proof certification.'},proposed_inventory_cycles:cycles,consumer_descendants:descendants(old.id),unchanged_theorem_scope:old.scope===proposal.replace_records[0].after.scope,source_retrieval:'No new external text retrieval or full-text reading attestation; exact local EMG C2/GA0/GA1, QFT C7/C7 B and FF3/FF4 bodies read.'},input_sha256:sources};
writeFileSync(dir+'/evidence.json',JSON.stringify(evidence,null,2)+'\n');
console.log(JSON.stringify(evidence.checks,null,2));
if(bad.length||cycles.length||records.length!==179||descendants(old.id).join()!=='ex-qft-constant-conformal-normalization')process.exitCode=1;
