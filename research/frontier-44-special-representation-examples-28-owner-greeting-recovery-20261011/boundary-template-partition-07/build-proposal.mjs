import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const dir=base+'/boundary-template-partition-07';
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const marker=p=>({path:p,raw_sha256:sha(fs.readFileSync(p))});
const packetPath=base+'/boundary-template-inventory/partition-07.json';
const packet=JSON.parse(fs.readFileSync(packetPath));
const sealPath=base+'/boundary-template-inventory/SEALED-INVENTORY.json';
const seal=JSON.parse(fs.readFileSync(sealPath));
assert.equal(sha(fs.readFileSync(packetPath)),seal.packets.find(x=>x.partition==='07').sha256);
const data=JSON.parse(fs.readFileSync(dir+'/review-data.json'));
const operations=[], inspections=[];
const rowHash=r=>sha(JSON.stringify({case:r.case,status:r.status,text:r.reason??r.evidence??''}));
for(const item of packet.items){
 const raw=fs.readFileSync(item.current_item_path,'utf8');
 assert.equal(sha(raw),item.current_item_raw_sha256);assert.equal(itemHashGuard(raw),item.current_item_guard_sha256);
 assert.deepEqual(Object.keys(data[item.id]).sort(),item.rows.map(x=>x.case).sort());
 for(const row of item.rows){
  const review=data[item.id][row.case];const reason=typeof review==='string'?review:review.reason;
  assert(reason.length>=40);
  for(const loc of row.batch_locations){
   const carrier=fs.readFileSync(loc.path);assert.equal(sha(carrier),loc.contract_raw_sha256);
   const actual=loc.field_path.reduce((a,k)=>a[k],JSON.parse(carrier));assert.deepEqual(actual,loc.before_row);
   assert.equal(sha(JSON.stringify(actual)),loc.raw_row_sha256);assert.equal(rowHash(actual),row.row_sha256);
   const after=structuredClone(actual);
   if(typeof review!=='string'){
    after.status=review.status;
    if('reason' in after) after.reason=review.text;else after.evidence=review.text;
   }
   after.template_review={upheld:true,by:'/root/template_case_07',reason,item_sha256:itemHashGuard(raw),row_sha256:rowHash(after)};
   operations.push({id:item.id,case:row.case,path:loc.path,contract_raw_sha256:loc.contract_raw_sha256,pointer:loc.pointer,field_path:loc.field_path,before_row:actual,before_raw_row_sha256:sha(JSON.stringify(actual)),before_row_sha256:rowHash(actual),after_row:after,after_raw_row_sha256:sha(JSON.stringify(after)),after_row_sha256:rowHash(after),changed_fields:Object.keys(after).filter(k=>JSON.stringify(actual[k])!==JSON.stringify(after[k])),source_guard:marker(item.current_item_path),item_sha256:itemHashGuard(raw),inspection_note:reason,disposition:typeof review==='string'?'preserved truthful row and added specific template review':'corrected boundary explanation against current clauses and added specific template review'});
  }
  inspections.push({id:item.id,case:row.case,claim_sections_inspected:raw.includes('## Definition')?['Definition']:raw.includes('## Statement refuted')?['Statement refuted']:raw.includes('## Example')?['Example']:['Statement'],relevant_case_inspection:reason,source_guard:marker(item.current_item_path),item_sha256:itemHashGuard(raw),new_whole_item_mathematical_audit:false,unresolved_case_gap:false});
 }
}
assert.equal(inspections.length,58);assert.equal(new Set(inspections.map(x=>x.id)).size,14);
const proposal={version:1,run:packet.run,partition:'07',by:'/root/template_case_07',recorded_at:new Date().toISOString(),scope:'Exact sealed boundary-template cases only; no new whole-item mathematics audit',inventory:marker(packetPath),authority:marker(sealPath),merged_contract_guard:packet.merged_contract,native_tool_guard:packet.native_tool,item_ids:packet.item_ids,counts:{items:14,assigned_rows:58,batch_operations:operations.length,corrected_rows:operations.filter(x=>x.changed_fields.some(f=>f!=='template_review')).length,gaps:0},operations,inspections,preservation:{canonical_items_unchanged:true,prior_history_and_counters_unchanged:true,no_canonical_contract_writes:true,no_gate_or_control_writes:true},awaiting_actual_after_binding:true};
fs.writeFileSync(dir+'/proposal.json',JSON.stringify(proposal,null,2)+'\n',{flag:'wx'});
fs.writeFileSync(dir+'/gap-list.json',JSON.stringify({version:1,run:packet.run,partition:'07',by:'/root/template_case_07',scope:proposal.scope,gaps:[],note:'No unresolved gap found in assigned case explanations; this is not a whole-item proof acceptance.'},null,2)+'\n',{flag:'wx'});
const outputSeal={version:1,run:packet.run,partition:'07',by:'/root/template_case_07',recorded_at:new Date().toISOString(),artifacts:['proposal.json','gap-list.json','review-data.json','build-proposal.mjs'].map(n=>marker(dir+'/'+n)),counts:proposal.counts,actual_after_binding:'PENDING_ROOT_INTEGRATION'};
fs.writeFileSync(dir+'/SEALED-PROPOSAL.json',JSON.stringify(outputSeal,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(proposal.counts));
