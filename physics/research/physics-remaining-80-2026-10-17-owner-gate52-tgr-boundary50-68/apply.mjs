import {readFileSync as read,writeFileSync as write} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
const base=new URL('./',import.meta.url), root=new URL('../../',import.meta.url);
const conclusions=JSON.parse(read(new URL('review-conclusions.json',base))), selection=JSON.parse(read(new URL('selection.json',base)));
const sha=x=>createHash('sha256').update(x).digest('hex');
const docs=new Map(),changes=[],inputs={};
if(!read(new URL('.physics-autopilot/physics-remaining-80-2026-10-17/owner-gate52-edit-release.json',root)).length)throw Error('No release');
for(const {batch,id,cases} of selection){
 const file=`research/physics-remaining-80-2026-10-17-batch-${batch}.proof-contracts.json`;
 if(!docs.has(file)){
  const raw=read(new URL(file,root));if(!raw.equals(read(new URL(`before/${file.split('/').pop()}`,base))))throw Error('Concurrent contract change '+file);
  docs.set(file,{raw,doc:JSON.parse(raw)});
 }
 const source=read(new URL(`items/${id}.md`,root),'utf8');if(source!==read(new URL(`items-reviewed/${id}.md`,base),'utf8'))throw Error('Concurrent item change '+id);
 inputs[id]={raw_sha256:sha(source),item_sha256:itemHashGuard(source)};
 for(const row of docs.get(file).doc.contracts[id].boundaries){
  if(!Object.hasOwn(cases,row.case))continue;
  const before=structuredClone(row), decision=conclusions[id][row.case],reason=decision.slice(2);
  if(decision[0]==='C'){
   row.status='checked';delete row.reason;delete row.reviewed;delete row.template_review;row.evidence=reason;
  }else{
   if(row.status!=='not_applicable')throw Error('Expected not-applicable '+id+' '+row.case);
   row.template_review={upheld:true,by:'physics_gate_coverage_tgr',reason,item_sha256:itemHashGuard(source),row_sha256:sha(JSON.stringify({case:row.case,status:row.status,text:row.reason??row.evidence??''}))};
  }
  changes.push({id,batch,case:row.case,before,after:structuredClone(row),finding:reason});
 }
}
for(const [file,{doc}]of docs)write(new URL(file,root),JSON.stringify(doc,null,2)+'\n');
const contracts=Object.fromEntries([...docs].map(([file,{raw}])=>[file,{before_sha256:sha(raw),after_sha256:sha(read(new URL(file,root)))}]));
write(new URL('receipt.json',base),JSON.stringify({run:'physics-remaining-80-2026-10-17',recorded_at:new Date().toISOString(),owner:'physics_gate_coverage_tgr',scope:'Boundary worksheets only, batches50–68 selected35 items90 cases; unchanged public interfaces; no carrier/manifest/generated merged contract edits',inputs,contracts,changes},null,2)+'\n');
console.log(JSON.stringify({items:selection.length,rows:changes.length,contracts:docs.size,checked:changes.filter(x=>x.after.status==='checked').length,bound_reviews:changes.filter(x=>x.after.template_review).length}));
