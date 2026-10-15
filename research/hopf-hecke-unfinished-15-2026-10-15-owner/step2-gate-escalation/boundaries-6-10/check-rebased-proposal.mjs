import{readFileSync,writeFileSync,mkdirSync}from'node:fs';import{itemHashGuard}from'../../../../tools/item-hash.mjs';
const base='research/hopf-hecke-unfinished-15-2026-10-15-owner/step2-gate-escalation/boundaries-6-10';const data=JSON.parse(readFileSync(`${base}/operations.json`));let applied=0;
for(const file of [...new Set(data.operations.map(o=>o.file))]){
 const doc=JSON.parse(readFileSync(file));
 for(const o of data.operations.filter(o=>o.file===file)){
  const arr=doc.contracts[o.id].boundaries;const before=arr[o.path.at(-1)];
  if(JSON.stringify(before)!==JSON.stringify(o.before))throw Error('Boundary CAS changed '+o.id+' '+o.expected_case);
  if(itemHashGuard(readFileSync(`items/${o.id}.md`,'utf8'))!==o.item_guard)throw Error('Source changed '+o.id);
  arr[o.path.at(-1)]=o.after;applied++;
 }
 const p=`${base}/rebased-proposal/${file}`;mkdirSync(p.slice(0,p.lastIndexOf('/')),{recursive:true});writeFileSync(p,JSON.stringify(doc,null,2)+'\n');
}
const b10='research/hopf-hecke-unfinished-15-2026-10-15-batch-10.proof-contracts.json';const p=`${base}/rebased-proposal/${b10}`;mkdirSync(p.slice(0,p.lastIndexOf('/')),{recursive:true});writeFileSync(p,readFileSync(b10));
console.log(JSON.stringify({CAS_operations_match:applied,nonboundary_fields_preserved:true,live_writes:false}));
