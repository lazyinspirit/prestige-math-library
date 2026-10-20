import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const root='research/machine-learning-all-101-2026-10-19-owner-boundary-batches18-35/your-proposal';
const inventory=JSON.parse(readFileSync('research/machine-learning-all-101-2026-10-19-owner-boundary-audit-diagnosis/affected-by-batch.json','utf8'));
const input=JSON.parse(readFileSync(process.argv[2],'utf8'));
const b=inventory.find(b=>b.batch===input.batch), raw=readFileSync(b.contract,'utf8'), doc=JSON.parse(raw), contracts=doc.contracts??doc;
const sha=s=>createHash('sha256').update(s).digest('hex');
const operations=[];
for(const item of b.items){
 const text=readFileSync(item.source,'utf8'), disposition=input.items[item.id];
 if(!disposition)throw Error(`No focused disposition for ${item.id}`);
 const cases=[...new Set([...item.template_rows,...item.contradicted].map(x=>x.case))];
 const snapshot=`${root}/batch-${b.batch}/sources/${item.id}.md`;
 mkdirSync(dirname(snapshot),{recursive:true});writeFileSync(snapshot,text,{flag:'wx'});
 for(const axis of cases){
  const matches=contracts[item.id].boundaries.map((x,index)=>({x,index})).filter(({x})=>x.case===axis);
  if(matches.length!==1)throw Error(`nonunique ${item.id}/${axis}`);
  const {x:before,index}=matches[0], after=structuredClone(before), selected=disposition.axes?.[axis]??{};
  const reason=selected.reason??disposition.reason;
  if(!reason||reason.length<40)throw Error('missing substantive reason');
  if(selected.status)after.status=selected.status;
  if(selected.reason||disposition.replace_reason){
   after.reason=reason;
   if('evidence' in after && after.status==='checked')after.evidence=reason;
  }
  if(item.contradicted.some(c=>c.case===axis)&&after.status==='not_applicable')after.reviewed={...(after.reviewed??{}),upheld:true,by:'Codex focused boundary metadata review',reason};
  if(item.template_rows.some(c=>c.case===axis))after.template_review={...(after.template_review??{}),upheld:true,by:'Codex focused boundary metadata review',reason,item_sha256:itemHashGuard(text),row_sha256:sha(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''}))};
  operations.push({contract:b.contract,item_id:item.id,axis,boundary_index:index,operation:'compare-and-swap-boundary-object',before,after,reason,source_binding:{path:item.source,raw_sha256:sha(text),item_sha256:itemHashGuard(text),snapshot},contract_fields_outside_this_boundary:'preserve-current-value'});
 }
}
const packet={version:1,kind:'proposal-only-focused-boundary-metadata',batch:b.batch,source_read_scope:'Full current affected source read; focused flagged axes only; no independent whole-proof coverage claimed.',operations,actual_gaps:input.actual_gaps??[],native_credit:false};
writeFileSync(`${root}/batch-${b.batch}/packet.json`,JSON.stringify(packet,null,2)+'\n',{flag:'wx'});
process.stdout.write(`batch ${b.batch}: ${b.items.length} source snapshots, ${operations.length} boundary CAS proposals\n`);
