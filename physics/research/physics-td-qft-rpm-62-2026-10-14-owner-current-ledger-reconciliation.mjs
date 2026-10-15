// Root records new declared edges as OPEN; this is not mathematical acceptance.
import {readFileSync,writeFileSync,mkdirSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {collect,refresh} from '../../tools/physics-support/frontier-dependency-ledger.mjs';
const run='physics-td-qft-rpm-62-2026-10-14';
if(!process.argv.includes('--writers-drained'))throw Error('Root must first verify every writer has handed off');
const data=collect(process.cwd(),run),missing=data.edges.filter(e=>!e.reviews.length);
const docs=new Map(),rows=[];
for(const edge of missing){
 const path=`research/${run}-batch-${edge.consumer_batch}.cross-batch-dependencies.json`;
 if(!docs.has(path))docs.set(path,JSON.parse(readFileSync(path,'utf8')));
 const declarations=edge.declarations.map(p=>({path:p,sha256:createHash('sha256').update(readFileSync(p.split('#')[0])).digest('hex')}));
 const row={kind:edge.kind,consumer:edge.consumer,supplier:edge.supplier,status:'open',
  evidence:`Root records the currently declared ${edge.kind} edge ${edge.consumer} -> ${edge.supplier} from ${edge.declarations.join(', ')} after current owner source and metadata repairs. This OPEN availability record binds declarations only; it does not claim independent scope review, proof acceptance or publication. Actual owning repair and native scope/prerequisite review remain distinct evidence.`,
  metadata_reconciliation:{owner:'/root',at:new Date().toISOString(),declarations}};
 docs.get(path).push(row);rows.push({batch:edge.consumer_batch,...row});
}
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),archive=`research/${run}-owner-current-ledger-reconciliation/${stamp}`;
mkdirSync(archive,{recursive:true});
for(const[p,doc]of docs){writeFileSync(`${archive}/${p.replaceAll('/','__')}.before`,readFileSync(p));writeFileSync(`${p}.tmp`,JSON.stringify(doc,null,2)+'\n');renameSync(`${p}.tmp`,p);}
refresh(process.cwd(),run,true);
writeFileSync(`${archive}/receipt.json`,JSON.stringify({run,at:new Date().toISOString(),new_open_rows:rows,mathematical_acceptance:false,gate_authorization:false},null,2)+'\n');
console.log(JSON.stringify({new_open_rows:rows.length,receipt:`${archive}/receipt.json`}));
