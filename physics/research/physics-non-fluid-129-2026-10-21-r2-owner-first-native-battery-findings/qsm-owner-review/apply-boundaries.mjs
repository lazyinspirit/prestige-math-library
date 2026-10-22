import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/physics-support/item-hash.mjs';
const base='research/physics-non-fluid-129-2026-10-21-r2-owner-first-native-battery-findings/qsm-owner-review';
const scope=JSON.parse(readFileSync(base+'/../boundary-scopes/qsm.json','utf8'));
const decisions=JSON.parse(readFileSync(base+'/boundary-decisions.json','utf8'));
const docs=new Map(scope.batches.map(b=>[b.batch,{path:b.contract,doc:JSON.parse(readFileSync(b.contract,'utf8'))}]));
const by='/root/qsm_boundary (scientific owner; no independent acceptance)';
for(const d of decisions.rows){
 const e=docs.get(d.batch).doc.contracts[d.id];
 const b=e.boundaries.find(b=>b.case===d.case);
 if(!b)throw Error('Missing '+d.id+':'+d.case);
 const original=scope.batches.find(b=>b.batch===d.batch).rows.find(r=>r.id===d.id&&r.case===d.case);
 if(d.mode==='disposition'){
  b.status=d.status; delete b.reason;delete b.evidence;delete b.reviewed;delete b.template_review;
  b[b.status==='checked'?'evidence':'reason']=d.note;
 }
 if(original.contradicted && b.status==='not_applicable')b.reviewed={upheld:true,by,reason:d.note};
 if(d.mode==='template_review'){
  const text=readFileSync('items/'+d.id+'.md','utf8');
  b.template_review={upheld:true,by,reason:d.note,item_sha256:itemHashGuard(text),row_sha256:createHash('sha256').update(JSON.stringify({case:b.case,status:b.status,text:b.reason??b.evidence??''})).digest('hex')};
 }
}
const defs=['def-qsmx-mps-and-transfer','def-qsmx-lattice-current-and-limits'];
const mirrors=[];
for(const {path,doc}of docs.values()){
 for(const [id,e]of Object.entries(doc.contracts))for(const c of e.citations??[]){
  if(!defs.includes(c.source))continue;
  const t=readFileSync('items/'+c.source+'.md','utf8');
  const section=t.split(/^## Definition\s*$/m)[1]?.split(/^## /m)[0].trim();
  if(!section)throw Error('No definition '+c.source);
  if(c.quote!==section){mirrors.push({contract:path,consumer:id,supplier:c.source,old_quote:c.quote,new_quote:section});c.quote=section;}
 }
 writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
}
writeFileSync(base+'/quote-mirrors.json',JSON.stringify(mirrors,null,2)+'\n');
console.log('Updated '+decisions.rows.length+' boundary dispositions/reviews in '+docs.size+' owned contracts; '+mirrors.length+' exact consumer quotation mirrors.');
