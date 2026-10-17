import fs from 'node:fs';
import {splitFrontmatter,sectionText} from '../../tools/facts-block.mjs';
import {yaml} from '../../tools/pathway-lib.mjs';
const run='numerical-optimization-dynamics-2026-10-16';
const base=`research/${run}-ROOT-current-metadata-integration`;
const packet=`research/${run}-owner-current-metadata-inventory-r2/inventory-and-operations.json`;
const j=JSON.parse(fs.readFileSync(packet));const norm=s=>String(s).replace(/\s+/g,' ').trim();const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const targets=new Map(),raws=new Map(),applied=[],noop=[];
for(const op of j.operations){
 if([1,33,77].includes(op.batch)||op.frozen_target)throw Error('Frozen carrier target');
 if(!targets.has(op.target)){const raw=fs.readFileSync(op.target,'utf8');raws.set(op.target,raw);targets.set(op.target,JSON.parse(raw));}
 for(const g of op.fullbyte_guards)if(g.path!==op.target&&fs.readFileSync(g.path,'utf8')!==fs.readFileSync(g.expected_full_bytes_file,'utf8'))throw Error('Source/context drift '+g.path);
 let p=targets.get(op.target);for(const key of op.path.slice(0,-1))p=p[key];const key=op.path.at(-1);
 if(eq(p[key],op.after)){noop.push({id:op.id,target:op.target,path:op.path});continue;}
 if(!eq(p[key]??null,op.before??null)||Object.hasOwn(p,key)!==op.before_exists)throw Error('Current field drift '+op.id+' '+op.pointer);
 const raw=fs.readFileSync(op.source,'utf8');const {fm,body}=splitFrontmatter(raw);
 if(op.type==='citation-quote'){
  const beforeCitation={...p},expected={...op.citation_guard};delete beforeCitation.quote;delete expected.quote;
  if(!eq(beforeCitation,expected))throw Error('Citation field drift '+op.id);
  if(!norm(sectionText(body,op.source_section)).includes(norm(op.after)))throw Error('Quote absent from current section '+op.id);
 }else{
  const meta=yaml().parse(fm);if(!eq(meta[op.source_field]??[],op.after))throw Error('Projection differs from actualsource '+op.id);
  const beforeRow={...p},expected={...op.row_guard};delete beforeRow[key];delete expected[key];
  if(!eq(beforeRow,expected))throw Error('Manifest row drift '+op.id);
 }
 applied.push({id:op.id,batch:op.batch,target:op.target,path:op.path,before:p[key]??null,after:op.after,source:op.source,source_section:op.source_section??null});p[key]=op.after;
}
for(const [p,raw]of raws)if(fs.readFileSync(p,'utf8')!==raw)throw Error('Carrier changed during preparation '+p);
fs.mkdirSync(base+'/before');fs.mkdirSync(base+'/after');
const changed=[];
for(const [p,next]of targets){const raw=raws.get(p);if(eq(JSON.parse(raw),next))continue;fs.writeFileSync(base+'/before/'+p.split('/').at(-1),raw);const after=JSON.stringify(next,null,2)+'\n';fs.writeFileSync(base+'/after/'+p.split('/').at(-1),after);changed.push({path:p,raw,after});}
for(const row of changed)if(fs.readFileSync(row.path,'utf8')!==row.raw)throw Error('Final carrier guard '+row.path);
for(const row of changed)fs.writeFileSync(row.path,row.after);
fs.writeFileSync(base+'/receipt.json',JSON.stringify({version:1,run,owner:'root',at:new Date().toISOString(),purpose:'Fresh after-native-drain field-only metadata reconciliation; actual source/public section and full context guards checked; preserves native derivations, scores, risks and all valid short excerpts.',packet,applied,already_current:noop,changed_carriers:changed.map(r=>r.path),frozen_carriers_untouched:[1,33,77],mathematical_acceptance_created:false},null,2)+'\n');
console.log(JSON.stringify({applied:applied.length,already_current:noop.length,changed_carriers:changed.length}));
