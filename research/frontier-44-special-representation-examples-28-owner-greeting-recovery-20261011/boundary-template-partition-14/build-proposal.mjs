import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const dir='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011/boundary-template-partition-14';
const inventory='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011/boundary-template-inventory';
const hash=x=>createHash('sha256').update(x).digest('hex');
const read=p=>fs.readFileSync(p,'utf8');
const packetPath=inventory+'/partition-14.json';
const packet=JSON.parse(read(packetPath));
const sealPath=inventory+'/SEALED-INVENTORY.json';
const seal=JSON.parse(read(sealPath));
if(hash(read(packetPath))!==seal.packets.find(p=>p.partition==='14').sha256)throw Error('Packet guard');
const data=JSON.parse(read(dir+'/review-data.json'));
const get=(obj,fields)=>fields.reduce((a,f)=>a[f],obj);
const rowhash=r=>hash(JSON.stringify({case:r.case,status:r.status,text:r.reason??r.evidence??''}));
const operations=[],items=[];
const contracts=new Map();
for(let n=0;n<packet.items.length;n++){
 const item=packet.items[n],source=read(item.current_item_path);
 if(hash(source)!==item.current_item_raw_sha256||itemHashGuard(source)!==item.current_item_guard_sha256)throw Error('Item guard '+item.id);
 if(Object.keys(data[n]).length!==item.rows.length)throw Error('Review coverage '+item.id);
 const notes=[];
 for(const row of item.rows){
  const datum=data[n][row.case];if(!datum)throw Error('Missing reason '+row.case);
  const review=typeof datum==='string'?{reason:datum}:datum;
  for(const loc of row.batch_locations){
   if(!contracts.has(loc.path))contracts.set(loc.path,{source:read(loc.path),parsed:JSON.parse(read(loc.path)),raw_sha256:loc.contract_raw_sha256});
   const carrier=contracts.get(loc.path);if(hash(carrier.source)!==loc.contract_raw_sha256)throw Error('Contract guard');
   const before=get(carrier.parsed,loc.field_path);
   if(JSON.stringify(before)!==JSON.stringify(loc.before_row)||rowhash(before)!==row.row_sha256)throw Error('Row guard');
   const after=structuredClone(before);
   if(review.status)after.status=review.status;
   if(review.text)after[Object.hasOwn(after,'reason')?'reason':'evidence']=review.text;
   if(after.template_review)throw Error('Existing review must preserve');
   after.template_review={upheld:true,by:'/root/template_case_14',reason:review.reason,item_sha256:itemHashGuard(source),row_sha256:rowhash(after)};
   operations.push({path:loc.path,pointer:loc.pointer,field_path:loc.field_path,contract_raw_sha256:loc.contract_raw_sha256,id:item.id,case:row.case,before_row:before,after_row:after,before_row_sha256:rowhash(before),after_row_sha256:rowhash(after),before_raw_row_sha256:hash(JSON.stringify(before)),after_raw_row_sha256:hash(JSON.stringify(after)),item_path:item.current_item_path,item_raw_sha256:hash(source),item_guard_sha256:itemHashGuard(source),inspection:review.reason,disposition:review.status||review.text?'corrected_false_case_explanation_from_actual_case':'upheld_exact_case_from_actual_case'});
  }
  notes.push({case:row.case,original_status:row.status,proposed_status:review.status??row.status,inspection:review.reason,old_text_retained_in_before_row:true});
 }
 items.push({id:item.id,path:item.current_item_path,raw_sha256:hash(source),item_guard_sha256:itemHashGuard(source),inspection_scope:'Current Definition/Statement/Example/Remark and only proof clauses relevant to the assigned boundary cases; no new whole-item mathematical acceptance',cases:notes});
}
const proposal={version:1,run:packet.run,partition:14,agent:'/root/template_case_14',status:'SEALED_PROPOSAL_AWAITING_ROOT_INTEGRATION_AND_SAME_AGENT_ACTUAL_AFTERBINDING',recorded_at:new Date().toISOString(),scope:'Exact final sealed inventory boundary-template case explanations only',packet:{path:packetPath,raw_sha256:hash(read(packetPath))},inventory_seal:{path:sealPath,raw_sha256:hash(read(sealPath))},source_guards:{merged_contract:packet.merged_contract,native_tool:packet.native_tool,policy:packet.policy.path?{path:packet.policy.path,raw_sha256:packet.policy.raw_sha256}:null,batch_contracts:[...contracts].map(([path,c])=>({path,raw_sha256:c.raw_sha256}))},counts:{items:items.length,rows:packet.items.reduce((n,i)=>n+i.rows.length,0),operations:operations.length,corrected_rows:operations.filter(o=>o.disposition.startsWith('corrected')).length},history:{prior_reviews_and_counters_preserved:true,new_mathematical_acceptance:false,source_or_proof_edits:false,canonical_or_native_writes:false},operations,items};
for(const guard of [packet.merged_contract,packet.native_tool,{path:packet.policy.path,raw_sha256:packet.policy.raw_sha256}])if(hash(read(guard.path))!==guard.raw_sha256)throw Error('Source guard '+guard.path);
fs.writeFileSync(dir+'/proposal.json',JSON.stringify(proposal,null,2)+'\n',{flag:'wx'});
fs.writeFileSync(dir+'/gap-list.json',JSON.stringify({version:1,run:packet.run,partition:14,agent:'/root/template_case_14',new_gaps:[],existing_obligations:'Historical supplier and repair-cap obligations are retained unchanged; this case-only review grants no new whole-proof acceptance',afterbinding_required:true},null,2)+'\n',{flag:'wx'});
const files=['proposal.json','gap-list.json','review-data.json','build-proposal.mjs'].map(name=>({path:dir+'/'+name,raw_sha256:hash(read(dir+'/'+name))}));
fs.writeFileSync(dir+'/SEALED-PROPOSAL.json',JSON.stringify({version:1,run:packet.run,partition:14,agent:'/root/template_case_14',recorded_at:new Date().toISOString(),counts:proposal.counts,files,ready_for_root_serial_integration:true,actual_afterbinding_pending:true},null,2)+'\n',{flag:'wx'});
console.log(proposal.counts);
