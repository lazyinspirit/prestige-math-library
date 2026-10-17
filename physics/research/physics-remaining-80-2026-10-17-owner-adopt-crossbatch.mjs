// Lossless structural normalization only; OPEN inventory is not scientific review.
import {readFileSync,writeFileSync,existsSync,mkdirSync,readdirSync,renameSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {split,yaml} from '../../tools/physics-support/pathway-lib.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',out=join(root,'research',run+'-owner-crossbatch-normalization-13');
const json=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Already adopted; preserve history');
const proposal=json(join(out,'proposal.json')),stable=new Set(proposal.successfully_drained_batches.map(String));
const guards={...proposal.ownership_manifest_sha256,...proposal.declared_edge_coverage.consumer_carrier_sha256};
function guard(){
 const state=json(join(root,'.physics-autopilot',run,'state.json'));
 for(const batch of stable){const d=state.dispatches['1-scaffold:batch-'+batch];if(!d?.endedAt||d.lastExitOk!==true)throw Error('Not drained '+batch);}
 for(const [path,digest] of Object.entries(guards))if(sha(readFileSync(join(root,path)))!==digest)throw Error('Bound input changed '+path);
 for(const row of proposal.files){const path=join(root,row.path);if((existsSync(path)?sha(readFileSync(path)):null)!==row.raw_sha256)throw Error('Evidence changed '+row.path);}
}
guard();
const homes=new Map(),records=[];
function home(kind,id,batch){const key=kind+':'+id;if(homes.has(key)&&homes.get(key)!==batch)throw Error('Ambiguous '+key);homes.set(key,batch);}
for(const name of readdirSync(join(root,'research')).filter(n=>new RegExp('^'+run+'-batch-\\d+\\.pages\\.json$').test(n))){
 const batch=name.match(/-batch-(\d+)/)[1];
 for(const page of json(join(root,'research',name))){
  home('page',page.id,batch);records.push({kind:'page',id:page.id,batch,data:page,path:'library/'+page.category+'/'+page.id+'.md'});
  for(const item of page.items??[]){home('item',item.id,batch);records.push({kind:'item',id:item.id,batch,data:item,path:'items/'+item.id+'.md'});}
 }
}
const edgeKey=row=>JSON.stringify([row.kind,row.consumer,row.supplier]),declared=new Set();
for(const record of records){
 if(!stable.has(record.batch))continue;
 const path=join(root,record.path),data=[record.data];if(existsSync(path))data.push(yaml().parse(split(readFileSync(path,'utf8')).fm)??{});
 for(const carrier of data)for(const field of record.kind==='page'?['requires']:['deps','justified_by','forward_refs'])for(const supplier of carrier[field]??[]){
  const other=homes.get(record.kind+':'+supplier);if(other&&other!==record.batch)declared.add(edgeKey({kind:record.kind,consumer:record.id,supplier}));
 }
}
const covered=new Set(),changes=[],supplements=[];
for(const file of proposal.files){
 const seen=new Set();
 for(const row of file.proposed_rows){
  if(!['item','page'].includes(row.kind)||!['open','verified','removed'].includes(row.status)||!String(row.evidence??'').trim()||homes.get(row.kind+':'+row.consumer)!==String(file.batch))throw Error('Invalid proposed review '+file.path);
  const key=edgeKey(row);if(seen.has(key))throw Error('Duplicate edge '+key);seen.add(key);covered.add(key);
 }
 for(const row of file.supplement_rows)supplements.push({source:file.path,source_raw_sha256:file.raw_sha256,...row});
 if(file.requires_normalization)changes.push(file);
}
if(declared.size!==proposal.declared_edge_coverage.declared_cross_batch_edges||[...declared].some(k=>!covered.has(k)))throw Error('Declaration inventory changed or incomplete');
mkdirSync(join(out,'before'),{recursive:true});
for(const file of changes)if(file.raw_sha256!==null)writeFileSync(join(out,'before',String(file.batch)+'.json'),readFileSync(join(root,file.path)));
writeFileSync(join(out,'context-observations.json'),JSON.stringify({run,qualification:'Preserved historical off-owner/aggregate/interface context; not consumer-owned scientific review.',observations:supplements},null,2)+'\n');
guard();
const written=[];
for(const file of changes){const path=join(root,file.path),text=JSON.stringify(file.proposed_rows,null,2)+'\n',temp=path+'.owner-temp';writeFileSync(temp,text);renameSync(temp,path);written.push({batch:file.batch,path:file.path,before:file.raw_sha256,after:sha(text)});}
writeFileSync(join(out,'completion.json'),JSON.stringify({run,at:new Date().toISOString(),qualification:'Structural shape/ownership normalization and explicitly OPEN declaration inventory only; no scientific or independent approval, native gate or transition.',stable_batches:stable.size,changed_inputs:written.length,preserved_context_observations:supplements.length,declared_edges:declared.size,all_declared_edges_have_inventory_rows:true,mechanical_open_inventory_rows:proposal.declared_edge_coverage.mechanical_inventory_rows_added,files:written},null,2)+'\n');
console.log(JSON.stringify({stable_batches:stable.size,normalized_inputs:written.length,preserved_context_observations:supplements.length,declared_edge_inventory:declared.size,scientific_approval_asserted:false}));
