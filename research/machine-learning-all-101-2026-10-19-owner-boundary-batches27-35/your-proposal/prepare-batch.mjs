#!/usr/bin/env node
// Proposal-only; one boundary-object CAS per actually reviewed flagged row.
import fs from 'node:fs';import path from 'node:path';import{createHash}from'node:crypto';import{itemHashGuard}from'../../../tools/item-hash.mjs';
const base='research/machine-learning-all-101-2026-10-19-owner-boundary-batches27-35/your-proposal',batch=Number(process.argv[2]);
const assignment=JSON.parse(fs.readFileSync(`${base}/assigned.json`)).find(b=>b.batch===batch),notes=JSON.parse(fs.readFileSync(`${base}/batch-${batch}-review.json`));if(!assignment)throw Error('unassigned batch');
const raw=fs.readFileSync(assignment.contract,'utf8'),doc=JSON.parse(raw),candidate=structuredClone(doc),operations=[];
const save=(prefix,p,s)=>{const target=`${base}/batch-${batch}/${prefix}/${p}`;fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,s);return target;};
const beforeGuard=save('before',assignment.contract,raw);
for(const item of assignment.items){const note=notes[item.id];if(!note?.focus||note.focus.length<100)throw Error('missing substantive focused read '+item.id);const source=fs.readFileSync(item.source,'utf8'),sourceGuard=save('sources',item.source,source),cases=new Set([...item.template_rows,...item.contradicted].map(x=>x.case));
 for(const axis of cases){const index=doc.contracts[item.id].boundaries.findIndex(b=>b.case===axis);if(index<0)throw Error('missing axis');const before=doc.contracts[item.id].boundaries[index],after={...before,...note.overrides?.[axis]};
 if(after.status==='checked'){after.evidence=note.overrides?.[axis]?.reason??note.overrides?.[axis]?.evidence??note.axis?.[axis]??note.focus;delete after.reason;}
 const reason=`Focused ${axis} disposition: ${note.axis?.[axis]??after.reason??after.evidence} Actual item evidence: ${note.focus}`;
 // Template binding is required even for sound repeated dispositions. This is
 // substantive per-item evidence, not rewritten boilerplate to evade clusters.
 after.template_review={...after.template_review,upheld:true,by:'/root/step2_margin53',reason,item_sha256:itemHashGuard(source),row_sha256:createHash('sha256').update(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''})).digest('hex')};
 if(after.status==='not_applicable'&&item.contradicted.some(c=>c.case===axis))after.reviewed={...after.reviewed,upheld:true,by:'/root/step2_margin53',reason};
 candidate.contracts[item.id].boundaries[index]=after;operations.push({path:assignment.contract,json_pointer:`/contracts/${item.id}/boundaries/${index}`,id:item.id,case:axis,expected_value:before,replacement_value:after,source_path:item.source,source_raw_guard:sourceGuard,contract_raw_guard:beforeGuard});
 }
}
const maskedBefore=structuredClone(doc),maskedAfter=structuredClone(candidate);for(const op of operations){const i=Number(op.json_pointer.split('/').at(-1));maskedBefore.contracts[op.id].boundaries[i]=null;maskedAfter.contracts[op.id].boundaries[i]=null;}if(JSON.stringify(maskedBefore)!==JSON.stringify(maskedAfter))throw Error('unrelated fields changed');
save('candidates',assignment.contract,JSON.stringify(candidate,null,2)+'\n');
const report={version:1,run:'machine-learning-all-101-2026-10-19',proposal_only:true,batch,focused_read_items:assignment.items.length,operations:operations.length,finite_smoke_arrays_unchanged:true,all_unrelated_fields_and_unknown_boundary_keys_preserved:true,source_edits:false,math_core_reopening:false,gates_run:false,application:'Root only; exact raw contract/source guards then per-object expected-value CAS. Source-bound template review digests use existing tools/item-hash.mjs grammar and row digest schema of boundary-audit.mjs. Root owns fresh binding/rehash. No gate credit.',field_operations:operations};
fs.writeFileSync(`${base}/batch-${batch}/operations.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({batch,items:assignment.items.length,boundary_objects:operations.length,finite_smoke_preserved:true}));
