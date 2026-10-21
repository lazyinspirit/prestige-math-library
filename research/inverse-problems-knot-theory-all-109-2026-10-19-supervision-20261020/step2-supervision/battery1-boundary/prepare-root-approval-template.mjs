#!/usr/bin/env node
// Prepare unapproved candidates from actual delegated rows. No hashes or gates.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const BASE=path.dirname(fileURLToPath(import.meta.url)),ROOT=path.resolve(BASE,'../../../..');
const args=process.argv.slice(2),value=k=>{const i=args.indexOf(k);return i<0?undefined:args[i+1];};
assert(value('--preview'),'--preview is required');
const preview=JSON.parse(fs.readFileSync(path.resolve(ROOT,value('--preview')),'utf8'));
const fields=['template_review_reason','actual_evidence.boundary_argument','actual_evidence.boundary_reason','actual_evidence.disposition_basis','actual_evidence.reason','actual_evidence','after_row.reason','after_row.evidence'];
const get=(o,f)=>f.split('.').reduce((v,k)=>v&&Object.hasOwn(v,k)?v[k]:undefined,o);
const missing=[];
const review_approvals=preview.rows.map(row=>{
 const field=fields.find(field=>{const v=get(row.raw,field);return typeof v==='string'&&v.trim().length>=40&&!/NOT UPHELD|needs.owner|unresolved/i.test(v);});
 if(!field)missing.push({id:row.id,case:row.case});
 const contradicted=row.flags.some(f=>/contradict/i.test(f.type??''));
 return {id:row.id,case:row.case,lane:row.lane,upheld:false,reason_field:field??'ROOT_REQUIRES_ACTUAL_REVIEWER_REASON',actual_review_reason:field?get(row.raw,field):null,disposition:contradicted&&row.after?.status==='not_applicable'?'reviewed-false-positive':row.before.status!==row.after?.status?'semantic-correction':'specific-boundary-disposition'};
});
const prior=value('--source-adoptions')?JSON.parse(fs.readFileSync(path.resolve(ROOT,value('--source-adoptions')),'utf8')):{};
const template={run:preview.run,authorized_by:'ROOT_MUST_SET_AFTER_ADOPTION',all_mathematical_writers_drained:false,all_source_repairs_integrated:false,authorize_root_hash_bindings:false,authorize_semantic_field_projection:false,authorize_locator_fidelity_projection:false,no_native_alpha_credit:true,approved_preview:value('--preview'),archive_dir:path.relative(ROOT,path.join(BASE,'ROOT_MUST_CHOOSE_FRESH_ARCHIVE')),lane_adoptions:preview.summary.lane_summary.map(l=>({lane:l.lane,proposal_file:l.file,ready:false,root_final_record:'ROOT_MUST_SUPPLY_ACTUAL_LANE_ADOPTION_RECORD'})),adopted_source_repairs:prior.adopted_source_repairs??[],row_hold_resolutions:[],review_approvals,preparation_note:'Each reason is an exact actual authored field, never synthesized. Every upheld flag is false. Only root may approve specific cases after adopting actual12lane records and all source repairs. This file grants no review, hash, Alpha or native credit.'};
if(value('--output')){
 const output=path.resolve(ROOT,value('--output'));assert(output.startsWith(BASE+path.sep),'Research-only output required');assert(!fs.existsSync(output),'Do not overwrite a root decision or prior template');fs.writeFileSync(output,JSON.stringify(template,null,2)+'\n');
}
console.log(JSON.stringify({candidate_rows:review_approvals.length,missing_actual_reason_candidates:missing.length,missing,all_upheld_flags:false,hashes_computed:false,canonical_writes:false,output:value('--output')??null},null,2));
