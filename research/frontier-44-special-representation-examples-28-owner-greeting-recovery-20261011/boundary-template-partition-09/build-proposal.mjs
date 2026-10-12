import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const dest=base+'/boundary-template-partition-09';
const inventoryPath=base+'/boundary-template-inventory/partition-09.json';
const sealedPath=base+'/boundary-template-inventory/SEALED-INVENTORY.json';
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const raw=p=>fs.readFileSync(p);
const p=JSON.parse(raw(inventoryPath)), sealed=JSON.parse(raw(sealedPath));
const s=sealed.packets.find(x=>x.partition==='09');
if(sha(raw(inventoryPath))!==s.sha256)throw Error('partition seal mismatch');
for(const g of [p.merged_contract,p.native_tool])if(sha(raw(g.path))!==g.raw_sha256)throw Error('guard mismatch '+g.path);
const reasons=JSON.parse(raw(dest+'/reasons.json'));
const forcedText={
 'cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading':['empty'],
 'def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves':['degenerate','endpoints','nonempty-choice'],
 'thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives':['endpoints'],
};
const operations=[], notes=[], sources=[];
const at=(o,path)=>path.reduce((v,k)=>v[k],o);
for(const item of p.items){
 const bytes=raw(item.current_item_path), text=bytes.toString();
 if(sha(bytes)!==item.current_item_raw_sha256 || itemHashGuard(text)!==item.current_item_guard_sha256)throw Error('item guard '+item.id);
 sources.push({path:item.current_item_path,raw_sha256:sha(bytes),item_sha256:itemHashGuard(text)});
 const cases=[];
 for(const r of item.rows){
  const [newStatus,why]=reasons[item.id]?.[r.case]??[];
  if(!why||why.length<40)throw Error('missing reason '+item.id+' '+r.case);
  cases.push({case:r.case,inspected_claim_and_proof_clauses:why,scope:'Case explanation only; no whole-item mathematical verdict',disposition:newStatus?'corrected_false_case_explanation_and_status':forcedText[item.id]?.includes(r.case)?'corrected_false_case_explanation':'specific_template_review_preserving_existing_status_and_text'});
  for(const loc of r.batch_locations){
   const batch=JSON.parse(raw(loc.path));
   if(sha(raw(loc.path))!==loc.contract_raw_sha256)throw Error('batch guard '+loc.path);
   const before=at(batch,loc.field_path);
   if(JSON.stringify(before)!==JSON.stringify(loc.before_row)||sha(JSON.stringify(before))!==loc.raw_row_sha256)throw Error('row guard');
   const after=structuredClone(before);
   if(newStatus){after.status=newStatus;delete after.reason;after.evidence=why;}
   else if(forcedText[item.id]?.includes(r.case)){after[after.status==='checked'?'evidence':'reason']=why;}
   if(before.template_review)throw Error('existing template review history must be retained');
   after.template_review={upheld:true,by:'/root/template_case_09',reason:why,item_sha256:itemHashGuard(text),row_sha256:sha(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''}))};
   const keys=new Set([...Object.keys(before),...Object.keys(after)]);
   const changes=[...keys].filter(k=>JSON.stringify(before[k])!==JSON.stringify(after[k])).map(field=>({op:field in after?'set':'delete',pointer:loc.pointer+'/'+field,field,before_present:field in before,...(field in before?{before:before[field]}:{}),...(field in after?{after:after[field]}:{})}));
   if(changes.some(x=>!['status','reason','evidence','template_review'].includes(x.field)))throw Error('scope');
   operations.push({id:item.id,case:r.case,batch_contract_path:loc.path,batch_contract_raw_sha256:loc.contract_raw_sha256,pointer:loc.pointer,field_path:loc.field_path,before_row_sha256:loc.raw_row_sha256,before_native_row_sha256:r.row_sha256,before_row:before,after_row:after,after_row_sha256:sha(JSON.stringify(after)),after_native_row_sha256:after.template_review.row_sha256,item_raw_sha256:sha(bytes),item_guard_sha256:itemHashGuard(text),operations:changes});
  }
 }
 notes.push({id:item.id,source:item.current_item_path,current_raw_sha256:sha(bytes),cases});
}
const supplier='items/def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum.md';
const supplierText=raw(supplier).toString();
const supplierClause=supplierText.split('\n').find(l=>l.includes('R(0)=k'));
const extra={path:supplier,raw_sha256:sha(raw(supplier)),item_sha256:itemHashGuard(supplierText),actual_inspected_clause:supplierClause,used_for:['thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives:zero','thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives:degenerate','thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis:zero']};
const proposal={version:1,run:p.run,partition:'09',by:'/root/template_case_09',recorded_at:new Date().toISOString(),status:'SEALED_RESEARCH_PROPOSAL_AWAITING_ROOT_INTEGRATION_AND_ACTUAL_AFTER_BINDING',scope:'All exact sealed partition09 template flag rows; case-specific explanations only; no whole-proof audit or new mathematical repair round',guards:{partition:{path:inventoryPath,sha256:sha(raw(inventoryPath))},sealed_inventory:{path:sealedPath,sha256:sha(raw(sealedPath))},merged_contract:p.merged_contract,native_tool:p.native_tool,sources,additional_relevant_definition:extra},counts:{items:notes.length,flagged_rows:p.counts.flagged_rows,batch_row_operations:operations.length,status_corrections:operations.filter(x=>x.before_row.status!==x.after_row.status).length,text_corrections:operations.filter(x=>(x.before_row.reason??x.before_row.evidence)!==(x.after_row.reason??x.after_row.evidence)).length},preservation:{canonical_writes:false,native_writes:false,gates_attempted:false,whole_item_acceptance:false,history_and_counters_untouched:true},operations};
fs.writeFileSync(dest+'/proposal.json',JSON.stringify(proposal,null,2)+'\n');
fs.writeFileSync(dest+'/inspection-notes.json',JSON.stringify({version:1,run:p.run,partition:'09',by:proposal.by,scope:proposal.scope,items:notes,additional_definition:extra},null,2)+'\n');
fs.writeFileSync(dest+'/gap-list.json',JSON.stringify({version:1,run:p.run,partition:'09',by:proposal.by,scope:'Exact assigned case explanations only',gaps:[],minimal_prerequisite_holds:[],new_whole_math_audit:false},null,2)+'\n');
const files=['proposal.json','inspection-notes.json','gap-list.json','reasons.json','build-proposal.mjs'];
fs.writeFileSync(dest+'/SEALED-PROPOSAL.json',JSON.stringify({version:1,run:p.run,partition:'09',by:proposal.by,status:proposal.status,files:files.map(name=>({path:dest+'/'+name,sha256:sha(raw(dest+'/'+name))})),counts:proposal.counts,actual_after_binding_pending:true},null,2)+'\n');
console.log(JSON.stringify(proposal.counts));
