import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const R='frontier-44-special-representation-examples-28',B=`research/${R}-owner-greeting-recovery-20261011`,O=B+'/boundary-template-unified-review',sha=x=>createHash('sha256').update(x).digest('hex'),raw=p=>readFileSync(p),read=p=>JSON.parse(raw(p)),eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b),sp=B+'/boundary-template-inventory/SEALED-INVENTORY.json',seal=read(sp),issues=[],holds=[],packets=[],ops=[],sourceProposals=[],artifacts=new Map(),guardIssues=[];
const noteArtifact=p=>{if(existsSync(p))artifacts.set(p,sha(raw(p)));};
const checkSeal=p=>{if(!existsSync(p))throw Error('Required owner seal missing '+p);noteArtifact(p);const seal=read(p),entries=Array.isArray(seal.artifacts)?seal.artifacts:Object.entries(seal.artifacts??{}).map(([path,raw_sha256])=>({path,raw_sha256}));for(const x of [...entries,...Object.values(seal).filter(x=>x&&typeof x==='object'&&!Array.isArray(x)&&x.path&&(x.raw_sha256||x.sha256))]){const expected=x.raw_sha256??x.sha256;if(expected&&sha(raw(x.path))!==expected)throw Error('Owner seal artifact drift '+x.path);noteArtifact(x.path);}};
const select={'01':'sealed-template-row-proposal.json','02':'boundary-row-proposal.json','03':'repaired-source/complete-boundary-operations.json','04':'guarded-partition-04-plan.json','05':'guarded-boundary-operations.json','06':'proposal-final-formatted.json'};
const get=(o,p)=>p.split('/').slice(1).reduce((a,k)=>Array.isArray(a)?a[Number(k)]:a[k],o),set=(o,p,v)=>{const ks=p.split('/').slice(1),k=ks.pop();let x=o;for(const a of ks)x=Array.isArray(x)?x[Number(a)]:x[a];x[Array.isArray(x)?Number(k):k]=v;};
const overlay=(id,path,proposal,before,after,author,evidence)=>{noteArtifact(evidence);noteArtifact(proposal);if(!existsSync(proposal)){holds.push({id,reason:'genuine source proposal missing',proposal});return;}const bytes=raw(proposal);if(sha(bytes)!==after)issues.push({id,reason:'source proposal hash mismatch',proposal});sourceProposals.push({id,path,proposal,before_raw_sha256:before,after_raw_sha256:after,after_item_sha256:itemHashGuard(bytes.toString()),author,evidence,actual_afterbinding_required:true});if(sha(raw(path))!==before)guardIssues.push({path,reason:'canonical source preimage changed',expected:before,actual:sha(raw(path))});};
// Explicit actual source packets; nothing is inferred from a desired future hash.
const ap=B+'/boundary-template-partition-01/repaired-source/guarded-source-repairs.json';if(existsSync(ap)){const p=read(ap);for(const x of p.repairs)overlay(x.id,x.item_path,x.proposal_path,x.before_raw_sha256,x.proposal_raw_sha256,p.reviewer,ap);}
const bp=B+'/boundary-template-partition-03/repaired-source/item-operations.json';if(existsSync(bp)){const p=read(bp);for(const x of p.operations)overlay(x.id,x.canonical_path,x.proposal_path,x.before_raw_sha256,x.after_raw_sha256,'/root/boundary_metadata_b',bp);}
const cp=B+'/boundary-template-partition-06/pyramid-final-source-repair-proposal.json';if(existsSync(cp)){const p=read(cp),x=p.source_operation;overlay(p.subject,x.path,x.after_archive,x.before_raw_sha256,x.after_raw_sha256,p.by,cp);}
const dp=B+'/boundary-template-partition-10/repaired-source/proposal.json';if(existsSync(dp)){const p=read(dp),x=p.source_operation;overlay(p.subject,x.path,x.after_file,x.before_raw_sha256,x.after_raw_sha256,p.by,dp);}
// Partition13 is not guessed: a source/case packet must be explicitly finalized and selected by its owner.
const overridesPath=O+'/owner-final-packet-overrides.json',overrides=existsSync(overridesPath)?read(overridesPath):{};noteArtifact(overridesPath);
if(overrides.source_proposals)for(const x of overrides.source_proposals)overlay(x.id,x.path,x.proposal,x.before_raw_sha256,x.after_raw_sha256,x.author,x.evidence);
checkSeal(B+'/boundary-template-partition-06/SEALED-FINAL-FORMATTED-PYRAMID.json');
checkSeal(B+'/boundary-template-partition-03/repaired-source/SEALED-PROPOSAL.json');
checkSeal(B+'/boundary-template-partition-10/repaired-source/SEALED-PROPOSAL.json');
for(const p of overrides.source_seals??[])checkSeal(p);
noteArtifact(sp);noteArtifact('tools/boundary-audit.mjs');noteArtifact('tools/item-hash.mjs');
const sourceById=new Map(sourceProposals.map(x=>[x.id,x]));
const supplierGuards=[];
for(const packetPath of [cp,dp,...(overrides.source_proposals??[]).map(x=>x.evidence)])if(existsSync(packetPath)){const p=read(packetPath),entries=[...(p.supplier_guards??p.suppliers??[]),...Object.entries(p.actual_direct_supplier_guards??{}).map(([path,g])=>({path,...g}))];for(const x of entries){supplierGuards.push({path:x.path,raw_sha256:x.raw_sha256,source_packet:packetPath});noteArtifact(x.path);if(sha(raw(x.path))!==x.raw_sha256)guardIssues.push({path:x.path,reason:'actual source supplier raw guard drift',expected:x.raw_sha256,actual:sha(raw(x.path))});}}
const expected=new Map(),physicalExpected=new Map();
for(const partition of seal.packets){
 if(sha(raw(partition.path))!==partition.sha256)throw Error('assignment seal drift '+partition.partition);noteArtifact(partition.path);
 const assignment=read(partition.path),dir=B+'/boundary-template-partition-'+partition.partition;
 let packetPath=overrides.packets?.[partition.partition]??dir+'/'+(select[partition.partition]??'proposal.json');noteArtifact(packetPath);
 const packet=read(packetPath);let rows=packet.operations??packet.row_operations??[];
 for(const supplement of overrides.row_supplements??[])if(supplement.partition===partition.partition){noteArtifact(supplement.path);if(supplement.seal)checkSeal(supplement.seal);const sup=read(supplement.path),replacement=sup.operations??sup.row_operations??sup.rows??sup;if(!Array.isArray(replacement))throw Error('Supplement must contain row operations');const keys=new Set(replacement.map(x=>(x.path??x.contract_path??x.batch_contract_path??x.batch_contract??x.target)+'#'+(x.pointer??x.json_pointer)));rows=[...rows.filter(x=>!keys.has((x.path??x.contract_path??x.batch_contract_path??x.batch_contract??x.target)+'#'+(x.pointer??x.json_pointer))),...replacement];}
 if(partition.partition==='10'&&existsSync(dp)){const supplement=read(dp);rows=[...rows.filter(x=>(x.id??x.item_id)!==supplement.subject),...supplement.operations];}
 packets.push({partition:partition.partition,agent:partition.agent,path:packetPath,raw_sha256:sha(raw(packetPath)),assigned_items:partition.item_count,assigned_rows:partition.row_count,physical_operations:rows.length});
 for(const item of assignment.items)for(const row of item.rows){const key=JSON.stringify([item.id,row.case]);if(expected.has(key))issues.push({key,reason:'sealed owner overlap'});expected.set(key,{partition:partition.partition,row,item});for(const loc of row.batch_locations)physicalExpected.set(loc.path+'#'+loc.pointer,{key,loc,item,partition:partition.partition});}
 for(const original of rows){
  const path=original.path??original.contract_path??original.batch_contract_path??original.batch_contract??original.target,pointer=original.pointer??original.json_pointer,id=original.id??original.item_id??pointer?.split('/')[2],before=original.before_row??original.expected_value??original.before,after=original.after_row??original.replacement_value??original.after,contractGuard=original.contract_raw_sha256??original.before_raw_contract_sha256??original.before_file_raw_sha256??original.batch_contract_raw_sha256;
  const key=JSON.stringify([id,after?.case??original.case]),sealed=expected.get(key);if(!sealed||sealed.partition!==partition.partition)issues.push({partition:partition.partition,key,reason:'operation outside sealed row ownership'});
  const physical=physicalExpected.get(path+'#'+pointer);if(!physical||!eq(before,physical.loc.before_row))issues.push({partition:partition.partition,key,path,pointer,reason:'before row differs from sealed source'});
  if(sha(raw(path))!==contractGuard)guardIssues.push({path,expected:contractGuard,actual:sha(raw(path)),reason:'canonical contract raw guard drift'});
  if(!eq(get(read(path),pointer),before))guardIssues.push({path,pointer,reason:'canonical expected row drift'});
  const currentPath='items/'+id+'.md',current=raw(currentPath).toString(),future=sourceById.get(id),target=future?raw(future.proposal).toString():current,targetGuard=itemHashGuard(target),review=after?.template_review;
  if(!review?.upheld||!review.by||typeof review.reason!=='string'||review.reason.trim().length<40||review.item_sha256!==targetGuard||review.row_sha256!==sha(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''})))issues.push({partition:partition.partition,key,reason:'native template-review binding mismatch',expected_item_sha256:targetGuard,actual_review:review});
  ops.push({partition:partition.partition,author:review?.by??partition.agent,id,case:after?.case,path,pointer,before_raw_sha256:contractGuard,before,after,source_current_path:currentPath,source_current_raw_sha256:sha(current),source_target_path:future?.proposal??currentPath,source_target_raw_sha256:sha(target),source_target_item_sha256:targetGuard,prospective_source:!!future,original_packet:packetPath});
 }
 const packetHolds=packet.remaining_actual_gap_holds??packet.gaps??packet.true_gaps??packet.held_rows??[];
 if(Array.isArray(packetHolds)&&packetHolds.length&&!['03','10'].includes(partition.partition))holds.push({partition:partition.partition,actual_owner_holds:packetHolds});
}
const owned=new Map(),phys=new Map();for(const op of ops){const key=JSON.stringify([op.id,op.case]),pk=op.path+'#'+op.pointer;if(phys.has(pk))issues.push({path:op.path,pointer:op.pointer,reason:'duplicate physical row operations'});phys.set(pk,op);if(!owned.has(key))owned.set(key,[]);owned.get(key).push(op);}
const missing=[...expected].filter(([k])=>!owned.has(k)).map(([key,v])=>({key,partition:v.partition,id:v.item.id,case:v.row.case}));if(missing.length)holds.push({reason:'assigned case proposals missing',rows:missing});
// Exact source-owner metadata operations accompany prospective source overlays; source proofs are not rewritten here.
const sourceFieldOps=[];
const fieldOperation=(original,evidence,author)=>{const path=original.path??original.contract_path??original.file,pointer=original.pointer??original.json_pointer,before=original.before??original.expected_value??original.before_value??original.before_row,after=original.after??original.replacement_value??original.after_value??original.after_row,beforeGuard=original.contract_raw_sha256??original.manifest_raw_sha256??original.raw_sha256??original.before_raw_sha256;if(!path||!pointer||before===undefined||after===undefined)throw Error('Unknown source-field operation shape '+evidence);if(sha(raw(path))!==beforeGuard)guardIssues.push({path,reason:'source-owner field raw guard drift',expected:beforeGuard,actual:sha(raw(path))});if(!eq(get(read(path),pointer),before))guardIssues.push({path,pointer,reason:'source-owner expected field drift'});if(after?.template_review){const id=pointer.split('/')[2],future=sourceById.get(id),text=raw(future?.proposal??('items/'+id+'.md')).toString(),v=after.template_review;if(v.item_sha256!==itemHashGuard(text)||v.row_sha256!==sha(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''}))||v.reason.trim().length<40)issues.push({path,pointer,reason:'additional genuine source-case native review binding mismatch'});}
 sourceFieldOps.push({path,pointer,before,after,before_raw_sha256:beforeGuard,author,evidence});};
if(existsSync(ap)){const p=read(ap);for(const r of p.repairs)for(const x of r.contract_operations??[])fieldOperation(x,ap,p.reviewer);}
const bm=B+'/boundary-template-partition-03/repaired-source/contract-and-manifest-operations.json';if(existsSync(bm)){noteArtifact(bm);const p=read(bm);for(const x of [...p.field_operations,...p.manifest_operations])fieldOperation(x,bm,'/root/boundary_metadata_b');}
if(existsSync(cp)){const p=read(cp);for(const x of [...(p.contract_quote_operations??[]),...(p.source_contract_field_operations??[])])fieldOperation(x,cp,p.by);}
if(existsSync(dp)){const p=read(dp);for(const x of p.contract_derivation_field_operations??[])fieldOperation(x,dp,p.by);}
for(const x of overrides.source_field_operations??[])fieldOperation(x,x.evidence,x.author);
const allPhysical=[...ops,...sourceFieldOps];for(let i=0;i<allPhysical.length;i++)for(let j=i+1;j<allPhysical.length;j++){const a=allPhysical[i],b=allPhysical[j];if(a.path===b.path&&(a.pointer===b.pointer||a.pointer.startsWith(b.pointer+'/')||b.pointer.startsWith(a.pointer+'/')))issues.push({path:a.path,pointer:a.pointer,other_pointer:b.pointer,reason:'overlapping source/row field operations; require owner coalescence'});}
// Review-only copies compose exact boundary rows; canonical carriers are never written.
const batchCopies=new Map();for(const op of ops){if(!batchCopies.has(op.path))batchCopies.set(op.path,read(op.path));set(batchCopies.get(op.path),op.pointer,op.after);}
const merged=read(seal.source_guards.merged_contract.path);for(const op of ops)set(merged,op.pointer,op.after);
for(const op of sourceFieldOps){if(!batchCopies.has(op.path))batchCopies.set(op.path,read(op.path));set(batchCopies.get(op.path),op.pointer,op.after);if(op.path.endsWith('.proof-contracts.json')&&op.pointer.startsWith('/contracts/'))set(merged,op.pointer,op.after);}
const native=raw('tools/boundary-audit.mjs').toString(),start=native.indexOf('const CASES ='),end=native.indexOf('\n/** If step',start),normalise=new Function(native.slice(start,end)+';return normalise;')();
const allRows=Object.entries(merged.contracts).flatMap(([id,c])=>(c.boundaries??[]).map(row=>({id,...row}))),reasonSets=new Map();for(const r of allRows)if(typeof r.template_review?.reason==='string'){const k=normalise(r.template_review.reason,r.id,'');if(!reasonSets.has(k))reasonSets.set(k,new Set());reasonSets.get(k).add(r.id);}
const reasonReuse=[...reasonSets].filter(([k,ids])=>ids.size>=3).map(([normalised,ids])=>({normalised,items:[...ids],assigned_affected:ops.filter(o=>ids.has(o.id)&&normalise(o.after.template_review.reason,o.id,'')===normalised).map(o=>({partition:o.partition,id:o.id,case:o.case,by:o.after.template_review.by}))}));if(reasonReuse.length)issues.push({reason:'cross-partition native review-reason reuse at minCluster3',clusters:reasonReuse});
let nativePureScreen=null;
if(process.argv.includes('--screen')||process.argv.includes('--strict-review')) {
 if(guardIssues.length) throw Error('REFUSE virtual source/case screen: current before guards drift');
 writeFileSync(O+'/virtual-merged-for-screen.json',JSON.stringify(merged,null,2)+'\n');
 writeFileSync(O+'/virtual-source-proposals.json',JSON.stringify(Object.fromEntries(sourceProposals.map(x=>[x.id,x.proposal])),null,2)+'\n');
 const pure=await import('./copied-native-pure-proposal-screen.mjs?current='+Date.now());
 nativePureScreen={mode:'Native PURE body on virtual actual proposals; no CLI/gate or acceptance',summary:pure.summary,templates:pure.templates,contradicted:pure.contradicted,upheld:pure.upheld};
 writeFileSync(O+'/native-pure-proposal-screen.json',JSON.stringify(nativePureScreen,null,2)+'\n');
 if(pure.contradicted.length)issues.push({reason:'pure native contradicted candidates remain',rows:pure.contradicted});
 if(pure.templates.length)issues.push({reason:'pure native template candidates remain',clusters:pure.templates});
}
const summary={version:1,run:R,mode:'REVIEW ONLY - no canonical/native writes or gate calls',recorded_at:new Date().toISOString(),packets,inventory:{expected_distinct_rows:expected.size,proposed_distinct_rows:owned.size,physical_operations:ops.length,expected_physical_rows:physicalExpected.size,items:new Set([...expected.values()].map(x=>x.item.id)).size},known_remaining_holds:holds,missing_rows:missing,overlap_or_binding_issues:issues,current_guard_issues:guardIssues,reason_reuse_clusters:reasonReuse,native_pure_screen:nativePureScreen,prospective_sources:sourceProposals,source_field_operations:sourceFieldOps,supplier_guards:[...new Map(supplierGuards.map(x=>[x.path+'#'+x.raw_sha256,x])).values()],readiness:holds.length||issues.length||guardIssues.length?'HOLD - read diagnostic; strict review build refuses':'READY FOR ROOT REVIEW ONLY; actual source and same-owner afterbinding required before native acceptance'};
writeFileSync(O+'/current-unified-inventory-diagnostic.json',JSON.stringify(summary,null,2)+'\n');
writeFileSync(O+'/normalised-row-operations.review.json',JSON.stringify({version:1,run:R,rows:ops},null,2)+'\n');
if(process.argv.includes('--screen')) {
 if(guardIssues.length) throw Error('REFUSE virtual copies: current before guards drift');
 writeFileSync(O+'/virtual-merged-for-screen.json',JSON.stringify(merged,null,2)+'\n');
 writeFileSync(O+'/virtual-source-proposals.json',JSON.stringify(Object.fromEntries(sourceProposals.map(x=>[x.id,x.proposal])),null,2)+'\n');
}
if(process.argv.includes('--strict-review')){
 if(holds.length||issues.length||guardIssues.length||expected.size!==912||owned.size!==912)throw Error('REFUSE: holds/guards/ownership/hash bindings incomplete; inspect current-unified-inventory-diagnostic.json');
 // All original file/row guards have passed before any review-copy output is emitted.
 mkdirSync(O+'/proposed-batches',{recursive:true});for(const [path,copy] of batchCopies)writeFileSync(O+'/proposed-batches/'+path.split('/').at(-1),JSON.stringify(copy,null,2)+'\n');writeFileSync(O+'/merged-contracts.review.json',JSON.stringify(merged,null,2)+'\n');
 writeFileSync(O+'/guarded-unified-review-plan.json',JSON.stringify({...summary,artifacts:[...artifacts].map(([path,raw_sha256])=>({path,raw_sha256})),row_operations:ops,source_field_operations:sourceFieldOps},null,2)+'\n');
}
console.log(JSON.stringify({diagnostic:O+'/current-unified-inventory-diagnostic.json',...summary.inventory,holds:holds.length,issues:issues.length,guard_issues:guardIssues.length,reason_reuse:reasonReuse.length,missing}));
