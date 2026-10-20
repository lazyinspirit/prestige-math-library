import {readFileSync,writeFileSync,readdirSync,mkdirSync} from 'node:fs';import {dirname,join} from 'node:path';import {createHash} from 'node:crypto';
const base=dirname(new URL(import.meta.url).pathname),root=process.cwd(),hash=x=>createHash('sha256').update(x).digest('hex');
const all=JSON.parse(readFileSync('research/machine-learning-all-101-2026-10-19-owner-boundary-audit-diagnosis/affected-by-batch.json','utf8')).filter(x=>x.batch>=71&&x.batch<=85);
const observations=readdirSync(join(base,'items')).filter(x=>x.endsWith('.json')).map(x=>JSON.parse(readFileSync(join(base,'items',x),'utf8')));
const records=[],batches=[];
for(const scope of all){
 const selected=observations.filter(x=>x.batch===scope.batch);if(selected.length!==scope.items.length)continue;
 const beforeRaw=readFileSync(scope.contract,'utf8'),original=JSON.parse(beforeRaw),document=structuredClone(original),ops=[];
 for(const item of selected){
  if(hash(readFileSync(item.sourcefile))!==item.source_raw_sha256)throw Error('Source moved after focused read: '+item.id);
  for(const row of item.rows){
   const current=document.contracts[item.id].boundaries[row.index];if(JSON.stringify(current)!==JSON.stringify(row.before))throw Error('Boundary object changed: '+item.id+':'+row.axis);
   document.contracts[item.id].boundaries[row.index]=structuredClone(row.after);
   ops.push({item:item.id,case:row.axis,index:row.index,before:row.before,after:row.after,sourcefile:item.sourcefile,source_raw_sha256:item.source_raw_sha256,source_guard_sha256:item.source_guard_sha256,reason:row.reason});
  }
 }
 // Reversing exactly the owned objects must recover every other current value.
 const reverted=structuredClone(document);for(const op of ops)reverted.contracts[op.item].boundaries[op.index]=structuredClone(op.before);
 if(JSON.stringify(reverted)!==JSON.stringify(original))throw Error('Foreign field changed');
 for(const id of Object.keys(original.contracts))if(JSON.stringify(original.contracts[id].finite_smoke)!==JSON.stringify(document.contracts[id].finite_smoke))throw Error('Finite smoke changed');
 const file=`batch-${scope.batch}.proof-contracts.json`,p=join(base,'proposed',file);mkdirSync(dirname(p),{recursive:true});writeFileSync(p,JSON.stringify(document,null,2)+'\n');
 const record={batch:scope.batch,contract:scope.contract,source_items:selected.length,boundary_objects:ops.length,operations:ops,unknown_fields_preserved:true,finite_smoke_preserved:true,proposal:p.slice(root.length+1),proposal_sha256:hash(readFileSync(p)),native_credit:false};
 writeFileSync(join(base,`batch-${scope.batch}.json`),JSON.stringify(record,null,2)+'\n');records.push(record);batches.push(scope.batch);
}
writeFileSync(join(base,'progress.json'),JSON.stringify({effective_batches:[71,85],completed_batches:batches,completed_items:observations.length,target_items:all.reduce((n,x)=>n+x.items.length,0),completed_boundary_objects:records.reduce((n,x)=>n+x.boundary_objects,0),actual_shared_writes:false,native_credit:false},null,2)+'\n');
console.log(JSON.stringify({completed_batches:batches,completed_items:observations.length,rows:records.reduce((n,x)=>n+x.boundary_objects,0)}));
