// Integrate an explicitly released formatting packet. Root owns shared files.
import{readFileSync,writeFileSync,mkdirSync,renameSync}from'node:fs';
import{createHash}from'node:crypto';
import{loadStep1Record}from'../../tools/physics-support/frontier-snapshot.mjs';
import{splitFrontmatter,sourceSectionText}from'../../tools/physics-support/facts-block.mjs';
const run='physics-td-qft-rpm-62-2026-10-14',path=process.argv[2];
if(!path?.startsWith(`research/${run}-`))throw Error('Expected run-local released packet');
const read=p=>JSON.parse(readFileSync(p,'utf8')),packet=read(path),snapshot=loadStep1Record(process.cwd(),run);
if(packet.source_write_handoff!==true&&packet.source_writing_released!==true)throw Error('Source handoff not released');
const docs=new Map(),manifests=new Map(),applied=[];
const doc=n=>{if(!docs.has(n))docs.set(n,read(`research/${run}-batch-${n}.proof-contracts.json`));return docs.get(n)};
const pages=n=>{if(!manifests.has(n))manifests.set(n,read(`research/${run}-batch-${n}.pages.json`));return manifests.get(n)};
function validateQuotes(id,contract){
 for(const c of contract.citations??[]){
  const source=sourceSectionText(splitFrontmatter(readFileSync(`items/${c.source}.md`,'utf8')).body,c.source_section);
  const normalize=s=>String(s).replace(/\s+/g,' ').trim();
  if(!source||!normalize(source).includes(normalize(c.quote)))throw Error(`Stale exact formatting citation ${id}/${c.fact}/${c.source}`);
 }
}
for(const[id,metadata]of Object.entries(packet.metadata)){
 const raw=readFileSync(`items/${id}.md`,'utf8');
 if(createHash('sha256').update(raw).digest('hex')!==metadata.raw_sha256)throw Error(`Stale released formatting source ${id}`);
 const owner=snapshot.items.get(id);if(!owner)throw Error(`Unknown existing run ownership ${id}`);
 const batch=owner.page.batch,row=pages(batch).flatMap(p=>p.items).find(x=>x.id===id);
 for(const key of ['kind','domain','library','title','deps','dependency_roles','physical_scope','empirical_premises','provenance','sources','generation','justified_by','forward_refs','dependency_level','proof_strategy']){
  if(metadata[key]!==undefined)row[key]=metadata[key];
  else if(['justified_by','forward_refs'].includes(key))delete row[key];
 }
 if(typeof metadata.statement==='string'&&metadata.statement.trim())row.statement=metadata.statement.trim();
 const contract=packet.contracts[id];if(!contract)throw Error(`Missing released contract ${id}`);
 validateQuotes(id,contract);
 const target=doc(batch);target.contracts[id]={...target.contracts[id],...contract};if(!target.scope.includes(id))target.scope.push(id);applied.push({id,batch,raw_sha256:metadata.raw_sha256});
}
for(const[id,contract]of Object.entries(packet.contracts))if(!packet.metadata[id]){
 const owner=snapshot.items.get(id);if(!owner)throw Error(`Unknown citation consumer ${id}`);
 validateQuotes(id,contract);const batch=owner.page.batch,target=doc(batch);
 target.contracts[id]={...target.contracts[id],...contract};if(!target.scope.includes(id))target.scope.push(id);
 applied.push({id,batch,citation_metadata_only:true});
}
const planPath='research/plan-spec.json',plan=read(planPath),writes=[];
for(const[batch,rows]of manifests){
 writes.push([`research/${run}-batch-${batch}.pages.json`,JSON.stringify(rows,null,2)+'\n']);
 for(const page of rows){const planned=plan.pages.find(p=>p.id===page.id);if(!planned)throw Error(`Missing approved page ${page.id}`);planned.items=page.items.map(i=>({...i}));planned.requires=page.requires;}
}
for(const[batch,d]of docs)writes.push([`research/${run}-batch-${batch}.proof-contracts.json`,JSON.stringify(d,null,2)+'\n']);
writes.push([planPath,JSON.stringify(plan,null,2)+'\n']);
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),archive=`research/${run}-owner-format-packet-integration/${stamp}`;mkdirSync(archive,{recursive:true});
for(const[p,data]of writes){writeFileSync(`${archive}/${p.replaceAll('/','__')}.before`,readFileSync(p));writeFileSync(`${p}.tmp`,data);renameSync(`${p}.tmp`,p);}
writeFileSync(`${archive}/receipt.json`,JSON.stringify({run,owner:'/root',proposal:path,applied,at:new Date().toISOString(),source_edits:false,gate_authorization:false,independent_acceptance:false},null,2)+'\n');
console.log(JSON.stringify({items:applied.length,batches:docs.size,receipt:`${archive}/receipt.json`}));
