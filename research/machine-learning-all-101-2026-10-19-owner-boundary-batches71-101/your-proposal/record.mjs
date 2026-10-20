import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {resolve,join,dirname} from 'node:path';import {pathToFileURL} from 'node:url';import {createHash} from 'node:crypto';
const root=process.cwd(),base=dirname(new URL(import.meta.url).pathname),run='machine-learning-all-101-2026-10-19';
const {itemHashGuard}=await import(pathToFileURL(join(root,'tools/item-hash.mjs')).href);
const hash=x=>createHash('sha256').update(x).digest('hex');
const diagnosis=JSON.parse(readFileSync(join(root,`research/${run}-owner-boundary-audit-diagnosis/affected-by-batch.json`),'utf8'));
const notes=JSON.parse(readFileSync(process.argv[2],'utf8'));
for(const note of notes){
 if(note.batch<71||note.batch>85)throw Error('Outside effective ownership71–85');
 const batch=diagnosis.find(x=>x.batch===note.batch),item=batch.items.find(x=>x.id===note.id);if(!item)throw Error('Unassigned item');
 const contract=JSON.parse(readFileSync(join(root,batch.contract),'utf8')),source=readFileSync(join(root,item.source),'utf8');
 const entry=contract.contracts[note.id],axes=[...new Set([...item.template_rows.map(x=>x.case),...item.contradicted.map(x=>x.case)])],rows=[];
 if(typeof note.rationale!=='string'||note.rationale.length<60)throw Error('Concrete actual-argument rationale required');
 for(const axis of axes){
  const indices=entry.boundaries.flatMap((x,i)=>x.case===axis?[i]:[]);if(indices.length!==1)throw Error('Boundary identity');
  const index=indices[0],before=entry.boundaries[index],after=structuredClone(before),edit=note.changes?.[axis];
  if(edit){for(const key of edit.remove??[])delete after[key];Object.assign(after,edit.set??{});}
  if(item.contradicted.some(x=>x.case===axis)&&after.status==='not_applicable'){
   const reason=note.contradictions?.[axis];if(typeof reason!=='string'||reason.length<40)throw Error(`Concrete contradiction disposition needed:${note.id}:${axis}`);
   after.reviewed={...(after.reviewed??{}),upheld:true,by:'owner-delegated boundary reader /root/ucrl2_repair (proposal)',reason};
  }
  const text=after.reason??after.evidence??'';
  const rowHash=hash(JSON.stringify({case:after.case,status:after.status,text}));
  if(item.template_rows.some(x=>x.case===axis))after.template_review={...(after.template_review??{}),upheld:true,by:'owner-delegated boundary reader /root/ucrl2_repair (proposal)',reason:note.rationale,item_sha256:itemHashGuard(source),row_sha256:rowHash};
  rows.push({axis,index,before,after,reason:edit?.reason??note.contradictions?.[axis]??note.rationale});
 }
 const output={run,scope:'effective boundary metadata ownership batches71–85 only',batch:note.batch,id:note.id,sourcefile:item.source,source_raw_sha256:hash(source),source_guard_sha256:itemHashGuard(source),contract:batch.contract,focused_actual_read:true,claim:'Focused boundary disposition reading only; no full mathematical re-review or native acceptance credit',rationale:note.rationale,rows,unknown_boundary_fields_preserved:true,finite_smoke_untouched:true,actual_shared_writes:false};
 mkdirSync(join(base,'items'),{recursive:true});writeFileSync(join(base,'items',note.id+'.json'),JSON.stringify(output,null,2)+'\n');
}
const completed=JSON.parse(readFileSync(join(base,'scope.json'),'utf8')).completed??[];
for(const n of notes)if(!completed.includes(n.id))completed.push(n.id);
writeFileSync(join(base,'scope.json'),JSON.stringify({run,effective_batches:[71,85],assignment_reduced_from:[71,101],completed,actual_shared_writes:false},null,2)+'\n');
console.log(JSON.stringify({recorded:notes.length,completed:completed.length}));
