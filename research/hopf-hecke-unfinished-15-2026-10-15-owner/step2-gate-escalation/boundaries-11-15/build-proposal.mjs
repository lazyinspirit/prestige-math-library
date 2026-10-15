import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
const {itemHashGuard} = await import(new URL('file://' + process.cwd() + '/tools/item-hash.mjs'));
const B='research/hopf-hecke-unfinished-15-2026-10-15-owner/step2-gate-escalation/boundaries-11-15';
const cfg=JSON.parse(fs.readFileSync(`${B}/review-decisions.json`));
const failure=JSON.parse(fs.readFileSync(`${B}/selected-failure-analysis.json`));
const targets=new Map();
for(const t of failure.templates) for(const r of t.rows) targets.set(`${r.id}|${r.case}`,r);
for(const r of failure.contradicted) targets.set(`${r.id}|${r.case}`,r);
const hash=s=>createHash('sha256').update(s).digest('hex');
const rowHash=r=>hash(JSON.stringify({case:r.case,status:r.status,text:r.reason??r.evidence??''}));
const files=Array.from({length:5},(_,i)=>`research/hopf-hecke-unfinished-15-2026-10-15-batch-${i+11}.proof-contracts.json`);
const merged={version:1,scope:[],contracts:{}};const patches=[];const guards={};let changed=0,conversions=0;
fs.mkdirSync(`${B}/before/contracts`,{recursive:true});fs.mkdirSync(`${B}/before/items`,{recursive:true});
for(const file of files){
 const raw=fs.readFileSync(file,'utf8'),d=JSON.parse(raw),before=structuredClone(d); const operations=[];
 for(const [id,c] of Object.entries(d.contracts)){
  for(let i=0;i<c.boundaries.length;i++){
   const row=c.boundaries[i], key=`${id}|${row.case}`;if(!targets.has(key))continue;
   const source=`items/${id}.md`; const sourceText=fs.readFileSync(source,'utf8');
   if(!guards[id]) {guards[id]={path:source,raw_sha256:hash(sourceText),item_sha256:itemHashGuard(sourceText)};fs.writeFileSync(`${B}/before/items/${id}.md`,sourceText);}
   const original=structuredClone(row), replacement=cfg.overrides[id]?.[row.case];
   if(replacement){Object.assign(row,replacement);delete row.reason;if(original.status!==row.status)conversions++;}
   let reason=replacement?.evidence;
   if(!reason && row.case.startsWith('iff-'))reason=cfg.profiles[id];
   if(!reason && row.case==='endpoints')reason=cfg.endpoint_reviews[id];
   if(!reason && row.case==='zero')reason=cfg.zero_reviews[id];
   if(!reason)reason=cfg.false_positive[id]?.[row.case];
   if(!reason || reason.length<40)throw Error(`Missing substantive review ${key}`);
   const review={upheld:true,by:'Codex delegated HH15 boundary review, batches 11–15',reason,item_sha256:guards[id].item_sha256,row_sha256:rowHash(row)};
   if(cfg.false_positive[id]?.[row.case])row.reviewed=review;
   row.template_review=review;
   const fields=new Set([...Object.keys(original),...Object.keys(row)]);
   for(const field of fields){if(JSON.stringify(original[field])===JSON.stringify(row[field]))continue;
    const present=Object.hasOwn(original,field),after=Object.hasOwn(row,field);
    const op={op:after?(present?'replace':'add'):'remove',path:`/contracts/${id}/boundaries/${i}/${field}`,boundary_case:row.case,before_present:present};
    if(present)op.before=original[field];if(after)op.value=row[field];operations.push(op);
   }changed++;
  }
 }
 fs.writeFileSync(`${B}/before/contracts/${path.basename(file)}`,raw);
 patches.push({target:file,input_raw_sha256:hash(raw),operations});
 merged.scope.push(...d.scope);Object.assign(merged.contracts,d.contracts);
 // Confirm fields outside the boundaries arrays remain byte-equivalent JSON values.
 for(const id of Object.keys(d.contracts)){const a=structuredClone(before.contracts[id]),z=structuredClone(d.contracts[id]);delete a.boundaries;delete z.boundaries;if(JSON.stringify(a)!==JSON.stringify(z))throw Error(`Nonboundary delta ${id}`);}
}
if(changed!==targets.size)throw Error(`Unmatched targets ${changed}/${targets.size}`);
fs.writeFileSync(`${B}/guarded-boundary-operations.json`,JSON.stringify({version:1,scope:'boundaries fields only; whole-file hashes informational, field preimages authoritative',targets:patches},null,2)+'\n');
fs.writeFileSync(`${B}/projection.json`,JSON.stringify(merged,null,2)+'\n');
fs.writeFileSync(`${B}/source-guards.json`,JSON.stringify(guards,null,2)+'\n');
fs.writeFileSync(`${B}/preparation-checks.json`,JSON.stringify({target_rows:changed,source_items:Object.keys(guards).length,field_operations:patches.reduce((a,p)=>a+p.operations.length,0),checked_conversions:conversions,all_targets_matched:true,nonboundary_fields_preserved:true,regular_source_and_contract_snapshots:true},null,2)+'\n');
console.log(JSON.stringify({rows:changed,items:Object.keys(guards).length,ops:patches.reduce((a,p)=>a+p.operations.length,0),conversions}));
