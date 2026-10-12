import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const out=base+'/restored-partitions-01-05';
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const ref=p=>({path:p,raw_sha256:hash(p)});
const at=(d,p)=>p.split('/').slice(1).reduce((a,k)=>a[k.replace(/~1/g,'/').replace(/~0/g,'~')],d);
const packet={version:1,run:'frontier-44-special-representation-examples-28',reviewer:'/root/restore_boundary_01_05',scope:'Research-only normalized integration proposal. No source/row afterbinding or gate claimed.',source_operations:[],json_operations:[],authoritative_seals:[],row_coverage:[],holds:[],guard_checks:[],schema_examples:[]};
function add(op,origin){
 const path=op.path??op.contract_path??op.batch_contract??op.target??op.file;
 const pointer=op.pointer??op.json_pointer;
 const before=op.before??op.expected_value??op.before_row;
 const after=op.after??op.replacement_value??op.after_row;
 const declared=op.before_file_raw_sha256??op.before_raw_contract_sha256??op.contract_raw_sha256??op.before_file_raw_sha256??op.raw_sha256;
 const current=at(read(path),pointer);
 const matches=JSON.stringify(current)===JSON.stringify(before);
 const check={path,pointer,before_field_matches:matches,declared_before_file_raw_sha256:declared,current_before_file_raw_sha256:hash(path),file_guard_matches:declared?declared===hash(path):null};
 packet.guard_checks.push(check);
 if(!matches||check.file_guard_matches===false)packet.holds.push({...check,reason:'Saved exact before guard is stale; do not apply without root reconciliation.'});
 packet.json_operations.push({path,pointer,before,after,before_file_raw_sha256:hash(path),proposal_origin:origin,guard_status:matches?'exact-current-field':'stale-saved-field',saved_before_file_raw_sha256:declared});
}
const one=base+'/boundary-template-partition-01/sealed-template-row-proposal.json';
const oneSource=base+'/boundary-template-partition-01/repaired-source/guarded-source-repairs.json';
for(const r of read(oneSource).repairs){
 packet.source_operations.push({path:r.item_path,before_raw_sha256:r.before_raw_sha256,after_path:r.proposal_path,after_raw_sha256:r.proposal_raw_sha256,proposal_origin:oneSource,interface_unchanged:r.Statement_or_Definition_unchanged});
 for(const op of r.contract_operations)add(op,oneSource);
}
const threeRoot=base+'/boundary-template-partition-03/repaired-source/';
for(const r of read(threeRoot+'item-operations.json').operations)packet.source_operations.push({path:r.canonical_path,before_raw_sha256:r.before_raw_sha256,after_path:r.proposal_path,after_raw_sha256:r.after_raw_sha256,proposal_origin:threeRoot+'item-operations.json',interface_unchanged:r.id!=='lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage'});
for(const key of ['field_operations','manifest_operations'])for(const op of read(threeRoot+'contract-and-manifest-operations.json')[key])add(op,threeRoot+'contract-and-manifest-operations.json');
const lists=[
 ['01',one,'operations',[]],
 ['02',base+'/boundary-template-partition-02/boundary-row-proposal.json','operations',[base+'/boundary-template-partition-02/covariant-conditional-case-guard-continuation.json',out+'/partition02-final-source-guard-overlay.json']],
 ['03',threeRoot+'complete-boundary-operations.json','operations',[]],
 ['04',base+'/boundary-template-partition-04/guarded-partition-04-plan.json','row_operations',[]],
 ['05',base+'/boundary-template-partition-05/guarded-boundary-operations.json','operations',[base+'/boundary-template-partition-05/guard-continuation-nonzero-cell/guarded-row-continuation-operations.json']]
];
for(const [partition,path,key,successors] of lists){
 const ops=read(path)[key];const replacement=new Map();
 for(const sp of successors)for(const op of read(sp).operations)replacement.set(op.pointer??op.json_pointer,{op,origin:sp});
 const inventory=read(base+'/boundary-template-inventory/partition-'+partition+'.json');
 const seen=[];
 for(const orig of ops){const pointer=orig.pointer??orig.json_pointer;const sel=replacement.get(pointer)??{op:orig,origin:path};add(sel.op,sel.origin);seen.push(pointer);}
 packet.row_coverage.push({partition,assigned_items:inventory.counts.items,assigned_rows:inventory.counts.flagged_rows,operations:ops.length,unique_pointers:new Set(seen).size,conditional_overrides:replacement.size,complete:ops.length===inventory.counts.flagged_rows});
 packet.authoritative_seals.push(ref(path),...successors.map(ref));
}
for(const p of [oneSource,threeRoot+'SEALED-PROPOSAL.json',base+'/boundary-template-partition-03/SEALED-PROPOSAL.json',base+'/boundary-template-partition-05/SEALED-PROPOSAL.json',base+'/boundary-template-partition-05/guard-continuation-nonzero-cell/SEALED-CONTINUATION.json'])packet.authoritative_seals.push(ref(p));
const sourceById=new Map(packet.source_operations.map(s=>[s.path.split('/').pop().replace(/\.md$/,''),s]));
for(const op of packet.json_operations){
 if(!op.pointer.includes('/boundaries/'))continue;
 const id=op.pointer.split('/')[2];
 const source=sourceById.get(id);const target=source?.after_path??'items/'+id+'.md';
 if(id==='lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize'){op.planned_final_source=read(out+'/partition02-final-source-guard-overlay.json').planned_final_source; continue;}
 const targetGuard=itemHashGuard(fs.readFileSync(target,'utf8'));
 op.planned_final_source={path:source?.path??target,after_path:target,raw_sha256:hash(target),itemHashGuard:targetGuard,conditional:!!source};
 if(op.after?.template_review?.item_sha256!==targetGuard)packet.holds.push({path:op.path,pointer:op.pointer,reason:'Saved template row target differs from planned final source guard',saved:op.after?.template_review?.item_sha256,planned:targetGuard});
}
for(const s of packet.source_operations){
 s.current_before_raw_sha256=hash(s.path);s.current_before_guard_matches=s.before_raw_sha256===s.current_before_raw_sha256;
 s.proposal_after_guard_matches=s.after_raw_sha256===hash(s.after_path);
 if(!s.current_before_guard_matches||!s.proposal_after_guard_matches)packet.holds.push({source:s.path,reason:'Stale source operation',before:s.current_before_guard_matches,after:s.proposal_after_guard_matches});
}
packet.schema_examples=packet.json_operations.filter(x=>x.pointer.includes('/boundaries/')).filter((x,i,a)=>a.findIndex(y=>y.proposal_origin===x.proposal_origin)===i);
packet.integration_order=['Verify every raw source, seal and current field guard before any writes.','Apply five source operations and exact derivative/quotation/manifest operations collectively with other packets.','Use the seven partition02 covariants conditional rows after partition13 source integration, and seven partition05 Schur conditional rows after partition03 consumer repair.','Apply all 309 boundary rows against final planned item guards; preserve original findings, counters and non-template history.','Recompute native contracts and perform actual supplier/consumer and case-author afterbinding on integrated carriers.'];
fs.writeFileSync(out+'/integration-packet.json',JSON.stringify(packet,null,2)+'\n');
console.log(JSON.stringify({source_operations:packet.source_operations.length,json_operations:packet.json_operations.length,coverage:packet.row_coverage,holds:packet.holds},null,2));
