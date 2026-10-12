import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const dir=base+'/boundary-template-partition-15';
const packetPath=base+'/boundary-template-inventory/partition-15.json';
const packet=JSON.parse(fs.readFileSync(packetPath,'utf8'));
const sealPath=base+'/boundary-template-inventory/SEALED-INVENTORY.json';
const seal=JSON.parse(fs.readFileSync(sealPath,'utf8'));
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const raw=p=>sha(fs.readFileSync(p));
if(raw(packetPath)!==seal.packets.find(p=>p.partition==='15').sha256)throw Error('packet changed');
for(const g of [packet.merged_contract,packet.native_tool])if(raw(g.path)!==g.raw_sha256)throw Error('authority changed '+g.path);
const reasons=JSON.parse(fs.readFileSync(dir+'/reasons.json','utf8'));
const specialRewrite=new Set([
 'def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality/iff-forward',
 'def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality/iff-reverse',
 'def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality/one',
 'prop-global-bases-specialize-to-integral-weight-bases/empty',
 'thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis/zero',
 'thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis/degenerate'
]);
const ops=[],notes=[],guards=[];
for(const item of packet.items){
 const source=fs.readFileSync(item.current_item_path,'utf8');
 if(raw(item.current_item_path)!==item.current_item_raw_sha256||itemHashGuard(source)!==item.current_item_guard_sha256)throw Error('item changed '+item.id);
 guards.push({id:item.id,path:item.current_item_path,raw_sha256:raw(item.current_item_path),item_sha256:itemHashGuard(source)});
 const lines=source.split('\n');
 for(const row of item.rows){
  const [reviewReason,inspected,newStatus]=reasons[item.id]?.[row.case]??[];
  if(!reviewReason||reviewReason.length<40)throw Error('missing review '+item.id+'/'+row.case);
  const rewrite=newStatus!==undefined||specialRewrite.has(item.id+'/'+row.case);
  const rowNotes={id:item.id,case:row.case,inspected_sections_or_steps:inspected,actual_case_inspection:reviewReason,disposition:rewrite?'correct stale explanation against current case text':'retain truthful native status and text',new_whole_item_mathematical_verdict:false};
  notes.push(rowNotes);
  for(const loc of row.batch_locations){
   if(raw(loc.path)!==loc.contract_raw_sha256)throw Error('batch changed '+loc.path);
   const batch=JSON.parse(fs.readFileSync(loc.path,'utf8'));
   const actual=loc.field_path.reduce((a,k)=>a[k],batch);
   if(JSON.stringify(actual)!==JSON.stringify(loc.before_row))throw Error('row changed');
   const after=structuredClone(actual);
   if(rewrite){
    after.status=newStatus??actual.status;
    if(after.status==='checked'){delete after.reason;after.evidence=reviewReason;}
    else{delete after.evidence;after.reason=reviewReason;}
   }
   const rowHash=sha(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''}));
   if(after.template_review)throw Error('prior template review requires distinct preservation');
   after.template_review={upheld:true,by:'/root/template_case_15',reason:reviewReason,item_sha256:itemHashGuard(source),row_sha256:rowHash};
   ops.push({id:item.id,case:row.case,path:loc.path,pointer:loc.pointer,field_path:loc.field_path,contract_raw_sha256:loc.contract_raw_sha256,item_path:item.current_item_path,item_raw_sha256:raw(item.current_item_path),item_sha256:itemHashGuard(source),before_row:actual,before_raw_row_sha256:sha(JSON.stringify(actual)),before_row_sha256:row.row_sha256,after_row:after,after_raw_row_sha256:sha(JSON.stringify(after)),after_row_sha256:rowHash,changed_fields:rewrite?['status',after.status==='checked'?'evidence':'reason','template_review']:['template_review'],inspection_note_index:notes.length-1});
  }
 }
}
if(notes.length!==58)throw Error('incomplete row coverage');
const proposal={version:1,run:packet.run,partition:'15',agent:'/root/template_case_15',recorded_at:new Date().toISOString(),policy:'exact-template-case-research-only-proposal',scope:{items:packet.item_ids,flagged_rows:58,no_new_whole_mathematical_audit:true,no_canonical_native_gate_control_or_source_writes:true,history_and_counters_preserved:true},authority:{packet:{path:packetPath,raw_sha256:raw(packetPath)},sealed_inventory:{path:sealPath,raw_sha256:raw(sealPath)},merged_contract:packet.merged_contract,native_tool:packet.native_tool},item_guards:guards,operations:ops,inspection_notes:notes,gaps:[],status:'SEALED_PROPOSAL_AWAITING_ROOT_INTEGRATION_AND_ACTUAL_AFTERBINDING'};
const output=dir+'/proposal.json';fs.writeFileSync(output,JSON.stringify(proposal,null,2)+'\n',{flag:'wx'});
fs.writeFileSync(dir+'/gap-list.json',JSON.stringify({version:1,run:packet.run,partition:'15',agent:'/root/template_case_15',assigned_case_count:58,actual_case_inspections_completed:58,gaps:[],qualification:'Only the assigned case explanations were inspected; this is not a new whole-proof mathematical acceptance.'},null,2)+'\n',{flag:'wx'});
const sealing={version:1,run:packet.run,partition:'15',agent:'/root/template_case_15',recorded_at:new Date().toISOString(),artifacts:['proposal.json','gap-list.json','reasons.json','build-proposal.mjs'].map(f=>({path:dir+'/'+f,raw_sha256:raw(dir+'/'+f)})),counts:{items:guards.length,case_rows:notes.length,batch_row_operations:ops.length,corrected_rows:ops.filter(o=>o.changed_fields.length>1).length,gaps:0},pending:'Root collective integration then actual afterbinding; no native gate claim made.'};fs.writeFileSync(dir+'/SEALED-PROPOSAL.json',JSON.stringify(sealing,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(sealing.counts));
