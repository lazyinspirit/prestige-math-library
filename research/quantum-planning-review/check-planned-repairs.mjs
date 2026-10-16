/** Virtual prerequisite view only. Published source and actual receipt remain untouched. */
import {readFileSync,readdirSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml,split} from '../../tools/pathway-lib.mjs';
const base='research/quantum-planning-review';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const plan=read(`${base}/prerequisite-repairs.json`),nodes=new Map(),aliases=new Map(),errors=[],unparsedFiles=[];
for(const f of readdirSync('items').filter(x=>x.endsWith('.md'))){
 const {fm}=split(readFileSync(`items/${f}`,'utf8'));let row;
 try{row=yaml().parse(fm);}catch{unparsedFiles.push(f);continue;}
 if(!row?.id)continue;nodes.set(row.id,row);for(const a of row.aliases??[])aliases.set(a,row.id);
}
for(const repair of plan.repairs){
 const hash=createHash('sha256').update(readFileSync(repair.source)).digest('hex');
 if(hash!==repair.source_raw_sha256)errors.push({code:'stale-repair',id:repair.id});
 const row=nodes.get(repair.id);
 if(!row||JSON.stringify(row.deps??[])!==JSON.stringify(repair.current_deps))errors.push({code:'snapshot-deps-mismatch',id:repair.id});
 if(row)nodes.set(repair.id,{...row,deps:repair.replacement_deps});
}
for(const supplier of plan.proposed_suppliers){
 if(nodes.has(supplier.id)||aliases.has(supplier.id))errors.push({code:'supplier-collision',id:supplier.id});
 nodes.set(supplier.id,supplier);
}
const proposals=[];
for(const category of ['computing','algorithms'])for(const row of read(`research/quantum-${category}-planning/proposed-items.json`).items){nodes.set(row.id,row);proposals.push(row.id);}
const seen=new Set(),active=new Set();
function visit(raw,isSupplier=false){
 const id=nodes.has(raw)?raw:aliases.get(raw),row=nodes.get(id);
 if(!row){errors.push({code:'unresolved',id:raw});return;}
 if(isSupplier&&(['remark','open-problem','physics-theorem','postulate','experiment','observation'].includes(row.kind)||/^(pthm-|post-|texp-|obs-)/.test(id)))errors.push({code:'forbidden-planned-supplier',id,kind:row.kind});
 if(active.has(id)){errors.push({code:'cycle',id});return;}
 if(seen.has(id))return;seen.add(id);active.add(id);
 for(const d of row.deps??[])visit(d,true);active.delete(id);
}
for(const id of proposals)visit(id);
const report={status:errors.length?'fail':'pass',scope:'Virtual logical closure after declared prerequisite repairs; not proof validity, placement readiness, source execution, or acceptance',actual_library_closure:'hold',proposed_items:proposals.length,planned_closure_nodes:seen.size,repair_count:plan.repairs.length,proposed_prerequisite_suppliers:plan.proposed_suppliers.length,unparsed_unconsumed_files:unparsedFiles,errors};
writeFileSync(`${base}/planned-repair-check.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));process.exitCode=errors.length?1:0;
