#!/usr/bin/env node
// ROOT-ONLY proposal. Default preview performs no writes and computes no hashes.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {isDeepStrictEqual as same} from 'node:util';
import {fileURLToPath} from 'node:url';
import {splitFrontmatter,numberedProofSteps} from '../../../../tools/facts-block.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19';
const BASE=path.dirname(fileURLToPath(import.meta.url));
const ROOT=path.resolve(BASE,'../../../..');
const args=process.argv.slice(2),arg=k=>{const i=args.indexOf(k);return i<0?undefined:args[i+1];};
assert(args.every((a,i)=>['--apply','--decisions','--report-dir'].includes(a)||i>0&&['--decisions','--report-dir'].includes(args[i-1])),'Unknown argument');
const apply=args.includes('--apply');
const read=p=>fs.readFileSync(path.resolve(ROOT,p),'utf8');
const json=p=>JSON.parse(read(p));
const rel=p=>path.relative(ROOT,p);
const key=(id,c)=>`${id}\u0000${c}`;
const showKey=k=>k.replace('\u0000',' / ');
const decisions=arg('--decisions')?json(arg('--decisions')):null;
const laneAdoptions=new Map((decisions?.lane_adoptions??[]).map(r=>[Number(r.lane),r]));
const inputSnapshots={},proposalSnapshots={},sourceSnapshots={},contractPreimages={};
const problems=[],holds=[],warnings=[],expected=new Map(),homes=new Map();
const problem=(type,detail)=>problems.push({type,...detail});
const held=(type,detail)=>holds.push({type,...detail});
const fields=['rows','supplement_rows_proposals','supplement_rows','proposals','dispositions'];
const cases=new Set(['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']);
for(let batch=1;batch<=109;batch++)for(const page of json(`research/${RUN}-batch-${batch}.pages.json`))for(const item of page.items){assert(!homes.has(item.id));homes.set(item.id,batch);}
assert.equal(homes.size,1471,'Stop on fixed-frontier drift');
let originalCount=0;
for(let lane=1;lane<=12;lane++){
 const file=rel(path.join(BASE,`lane-${lane}/input.json`)),raw=read(file),doc=JSON.parse(raw);inputSnapshots[file]=raw;
 assert.equal(doc.run,RUN);assert.equal(Number(doc.lane),lane);
 for(const row of doc.rows){const k=key(row.id,row.case);assert(!expected.has(k),'Original lane overlap');assert.equal(Number(row.batch),homes.get(row.id));expected.set(k,{lane,id:row.id,case:row.case,batch:Number(row.batch),before:row.before_row,flags:row.flags??[],origin:'original'});originalCount++;}
}
assert.equal(originalCount,4645,'Original4645 input inventory changed');
const supplementsFile=rel(path.join(BASE,'../battery1-contract/strict-boundary-lane-supplements.json'));
const supplementRaw=read(supplementsFile);inputSnapshots[supplementsFile]=supplementRaw;
let extraCount=0;
for(const row of JSON.parse(supplementRaw)){
 const k=key(row.id,row.case),lane=row.boundary_lane?.lane??row.same_item_lane?.lane;
 assert(Number.isInteger(lane)&&lane>=1&&lane<=12,'Unrouted strict supplement');
 if(expected.has(k)){assert.equal(expected.get(k).lane,lane);continue;}
 expected.set(k,{lane,id:row.id,case:row.case,batch:homes.get(row.id),before:row.old,flags:[{type:'strict-anchor-supplement'}],origin:'strict-supplement'});extraCount++;
}
assert.equal(extraCount,16);assert.equal(expected.size,4661);
const normalized=new Map(),laneSummary=[],documentIssues=[];
const reviewerFor=(doc,row)=>[row.reviewer,row.reviewed_by,doc.reviewer,doc.agent,doc.author].find(x=>typeof x==='string'&&/^\/root\/[a-z0-9_]+$/.test(x))??(/^\s*(\/root\/[a-z0-9_]+)(?:[;\s]|$)/.exec(doc.role??'')?.[1]);
const evidencePresent=v=>typeof v==='string'?Boolean(v.trim()):v&&typeof v==='object'&&Object.keys(v).length>0;
const locatorTypography=text=>String(text).replace(/\b(Proof|Verification|Counterexample|Refutation|[Ss]teps?|in)(?=\d+\.\d+)/g,'$1 ');
const readingLocator=row=>{
 if(typeof row.read_extent==='string')return {field:'read_extent',text:row.read_extent};
 for(const field of ['relevant_passages','location','actual_read_extent'])if(typeof row.read_extent?.[field]==='string')return {field:`read_extent.${field}`,text:row.read_extent[field]};
 if(typeof row.actual_evidence?.actual_read_extent==='string')return {field:'actual_evidence.actual_read_extent',text:row.actual_evidence.actual_read_extent};
 if(typeof row.actual_evidence?.read_extent==='string')return {field:'actual_evidence.read_extent',text:row.actual_evidence.read_extent};
 if(typeof row.actual_evidence?.location==='string')return {field:'actual_evidence.location',text:row.actual_evidence.location};
 return null;
};
const fieldValue=(object,field)=>String(field).split('.').reduce((v,k)=>v&&Object.hasOwn(v,k)?v[k]:undefined,object);
const reasonFieldOrder=['template_review_reason','actual_evidence.boundary_argument','actual_evidence.boundary_reason','actual_evidence.disposition_basis','actual_evidence.reason','actual_evidence','after_row.reason','after_row.evidence'];
const authoredReason=row=>{
 for(const field of reasonFieldOrder){const text=fieldValue(row,field);if(typeof text==='string'&&text.trim().length>=40&&!/NOT UPHELD|needs.owner|unresolved/i.test(text))return {field,text};}
 return null;
};
for(let lane=1;lane<=12;lane++){
 const file=laneAdoptions.get(lane)?.proposal_file??rel(path.join(BASE,`lane-${lane}/proposal.json`));
 if(!fs.existsSync(path.resolve(ROOT,file))){held('lane-proposal-not-ready',{lane,file});laneSummary.push({lane,file,ready:false});continue;}
 const raw=read(file),doc=JSON.parse(raw);proposalSnapshots[file]=raw;
 if(doc.run!==undefined&&doc.run!==RUN)problem('proposal-run',{lane,file});
 if(doc.lane!==undefined&&Number(doc.lane)!==lane)problem('proposal-lane',{lane,file});
 const collections=fields.flatMap(field=>Array.isArray(doc[field])?doc[field].map((row,index)=>({field,index,row})):[]);
 if(!collections.length)problem('no-recognized-row-collection',{lane,file,keys:Object.keys(doc)});
 const sourceIssueIds=new Set();
 for(const field of ['narrow_clarifications','source_repairs','required_source_repairs','source_repair_proposals','mathematical_source_repairs_proposed','genuine_mathematical_gaps','mathematical_gaps']){
  if(!Array.isArray(doc[field])||!doc[field].length)continue;
  documentIssues.push({lane,file,field,issues:doc[field]});
  for(const issue of doc[field])if(issue?.id)sourceIssueIds.add(issue.id);
 }
 for(const field of ['known_narrow_issue','holds'])if(evidencePresent(doc[field]))documentIssues.push({lane,file,field,issues:doc[field]});
 let duplicates=0;
 for(const {field,index,row}of collections){
  if(!row||typeof row!=='object'||typeof row.id!=='string'||!cases.has(row.case)){problem('row-identity',{lane,file,field,index});continue;}
  const k=key(row.id,row.case),target=expected.get(k),provenance={file,field,index};
  if(!target){problem('unassigned-extra-row',{lane,id:row.id,case:row.case,file});continue;}
  if(target.lane!==lane||Number(row.batch)!==target.batch){problem('wrong-owner-or-batch',{lane,id:row.id,case:row.case,file});continue;}
  if(!same(row.before_row,target.before)){problem('proposal-before-differs-from-assigned-original',{lane,id:row.id,case:row.case,file});continue;}
  const retainedRowHistory=Object.fromEntries(Object.entries(row.before_row??{}).filter(([k])=>!['case','status','reason','evidence','reviewed','template_review'].includes(k)));
  const reviewer=reviewerFor(doc,row),after=row.after_row?{...structuredClone(retainedRowHistory),...structuredClone(row.after_row)}:undefined;
  // Project the actual author's semantic text, not the old opposite-status
  // field. Some lanes store their fresh checked rationale under `reason`.
  // Its literal authored text is retained; this changes only its field name.
  const projection={};
  if(after){
   const wanted=after.status==='checked'?'evidence':'reason',opposite=wanted==='evidence'?'reason':'evidence';
   const text=typeof after[wanted]==='string'&&after[wanted].trim()?after[wanted]:after[opposite];
   projection.authored_text_field=typeof after[wanted]==='string'&&after[wanted].trim()?wanted:opposite;
   projection.dropped_stale_keys=['reason','evidence','template_review','reviewed'].filter(k=>Object.hasOwn(after,k)&&k!==wanted);
   for(const k of ['reason','evidence','template_review','reviewed'])delete after[k];
   after[wanted]=text;
  }
  const item={...target,raw:row,after,semantic_projection:projection,reviewer,role:row.role??row.review_role??doc.role??null,provenance:[provenance],source_repair_required:row.source_repair_required===true||row.needs_source_repair===true||row.conditional_on_source_application===true||sourceIssueIds.has(row.id),owner_hold:typeof row.disposition==='string'&&/needs|hold|unresolved/i.test(row.disposition)};
  if(normalized.has(k)){
   const prev=normalized.get(k);
   if(!same(prev.before,item.before)||!same(prev.after,item.after)||prev.reviewer!==item.reviewer)problem('conflicting-duplicate-row',{lane,id:row.id,case:row.case,file});
   else{prev.provenance.push(provenance);prev.source_repair_required ||= item.source_repair_required;prev.owner_hold ||= item.owner_hold;duplicates++;}
   continue;
  }
  normalized.set(k,item);
  if(!reviewer)held('actual-reviewer-not-recorded',{lane,id:row.id,case:row.case,file});
  if(!evidencePresent(row.actual_evidence)||!evidencePresent(row.read_extent??row.actual_evidence?.actual_read_extent??row.actual_evidence?.read_extent))held('missing-actual-review-evidence-or-reading-extent',{lane,id:row.id,case:row.case,file});
  if(!after){held('no-after-row-owner-disposition-required',{lane,id:row.id,case:row.case,file,disposition:row.disposition});continue;}
  if(after.case!==row.case||!['checked','not_applicable'].includes(after.status)){problem('after-row-shape',{lane,id:row.id,case:row.case,file});continue;}
  const text=after.status==='checked'?after.evidence:after.reason;
  if(typeof text!=='string'||!text.trim())problem('after-row-missing-concrete-evidence-or-reason',{lane,id:row.id,case:row.case,file});
 }
 laneSummary.push({lane,file,ready:true,occurrences:collections.length,unique_rows:[...normalized.values()].filter(r=>r.lane===lane).length,identical_duplicate_occurrences:duplicates});
}
for(const [k,target]of expected)if(!normalized.has(k))held('missing-proposal-row',{lane:target.lane,id:target.id,case:target.case});
const contractDocs=new Map(),literalAnchorDiagnostics=[];
for(const item of normalized.values()){
 const file=`research/${RUN}-batch-${item.batch}.proof-contracts.json`;
 if(!contractDocs.has(file)){const raw=read(file);contractPreimages[file]=raw;contractDocs.set(file,JSON.parse(raw));}
 const matches=contractDocs.get(file).contracts?.[item.id]?.boundaries?.filter(r=>r.case===item.case)??[];
 if(matches.length!==1||!same(matches[0],item.before))problem('current-before-row-drift',{lane:item.lane,id:item.id,case:item.case,file});
 if(!Object.hasOwn(sourceSnapshots,item.id))sourceSnapshots[item.id]=read(`items/${item.id}.md`);
 if(item.after?.status==='checked'&&typeof item.after.evidence==='string'){
  const body=splitFrontmatter(sourceSnapshots[item.id]).body;
  const steps=new Set(numberedProofSteps(body).map(s=>s.id));
  const headers=[...body.matchAll(/^##\s+(.+)$/gm)].map(m=>m[1]);
  const hasRealLocator=text=>[...text.matchAll(/\b(\d+\.\d+)\b/g)].some(m=>steps.has(m[1]))
    ||['Statement','Definition','Example','Counterexample'].some(h=>new RegExp(`\\b${h}\\b`,'i').test(text)&&headers.some(actual=>actual===h||actual.startsWith(h+' ')));
  const initially=item.after.evidence;
  item.after.evidence=locatorTypography(initially);
  if(initially!==item.after.evidence)item.semantic_projection.locator_typography={before:initially,after:item.after.evidence};
  const initiallyAnchored=[...item.after.evidence.matchAll(/\b(?:steps?\s+)?(\d+\.\d+)\b/gi)].some(m=>/^steps?\s/i.test(m[0])||steps.has(m[1]))
    ||/statement|definition|example|counterexample/i.test(item.after.evidence);
  if(!initiallyAnchored){
   const locator=readingLocator(item.raw);
   if(locator&&hasRealLocator(locatorTypography(locator.text))){
    item.after.evidence+=` [Owner-focused FIRST reviewed location: ${locatorTypography(locator.text)}]`;
    item.semantic_projection.appended_actual_review_locator={...locator,projected_text:locatorTypography(locator.text)};
   }
  }
  // Literal native proof-contract boundary grammar, not a gate invocation.
  const references=[...item.after.evidence.matchAll(/\b(?:steps?\s+)?(\d+\.\d+)\b/gi)]
    .filter(m=>/^steps?\s/i.test(m[0])||steps.has(m[1])).map(m=>m[1]);
  if(!references.length&&!/statement|definition|example|counterexample/i.test(item.after.evidence)){
   const finding={lane:item.lane,id:item.id,case:item.case,type:'checked-evidence-unanchored',evidence:item.after.evidence};literalAnchorDiagnostics.push(finding);problem('literal-checked-anchor',finding);
  }
  for(const step of references)if(!steps.has(step)){
   const finding={lane:item.lane,id:item.id,case:item.case,type:'checked-evidence-missing-explicit-step',step,evidence:item.after.evidence};literalAnchorDiagnostics.push(finding);problem('literal-checked-anchor',finding);
  }
 }
}
const sourceRecords=new Map();
for(const row of decisions?.adopted_source_repairs??[]){
 if(typeof row.id!=='string'||typeof row.record!=='string'||!fs.existsSync(path.resolve(ROOT,row.record)))problem('invalid-root-source-repair-record',{row});
 else sourceRecords.set(row.id,row.record);
}
const resolutions=new Map((decisions?.row_hold_resolutions??[]).map(r=>[key(r.id,r.case),r]));
for(const [k,item]of normalized){
 if(item.source_repair_required&&!sourceRecords.has(item.id))held('source-repair-not-adopted-by-root',{lane:item.lane,id:item.id,case:item.case});
 if(item.owner_hold){const resolution=resolutions.get(k);if(!resolution?.ready||typeof resolution.record!=='string'||!fs.existsSync(path.resolve(ROOT,resolution.record)))held('owner-hold-not-resolved',{lane:item.lane,id:item.id,case:item.case});}
}
const reasonShortages=[...normalized.values()].filter(item=>!authoredReason(item.raw)).map(item=>({lane:item.lane,id:item.id,case:item.case,reason_fields:reasonFieldOrder.flatMap(field=>{const text=fieldValue(item.raw,field);return typeof text==='string'?[{field,length:text.trim().length}]:[];})}));
const summary={run:RUN,mode:apply?'root-apply-request':'preview-only',fixed_frontier_items:homes.size,original_rows:originalCount,additional_unique_strict_rows:extraCount,expected_unique_rows:expected.size,available_unique_rows:normalized.size,lane_summary:laneSummary,problems,holds,literal_checked_anchor_diagnostics:literalAnchorDiagnostics,review_reason_shortages:reasonShortages,document_issues:documentIssues,warnings,hashes_computed:false,canonical_writes:false,limits:'Shape/preimage/coverage/literal-anchor diagnostics only, not a proof or boundary-audit pass. Missing source repairs or owner dispositions are holds. No generic review reasons are synthesized.'};
const snapshot={version:1,run:RUN,input_snapshots:inputSnapshots,proposal_snapshots:proposalSnapshots,source_snapshots:sourceSnapshots,contract_preimages:contractPreimages,rows:[...normalized.values()],summary};
console.log(JSON.stringify({...summary,problem_count:problems.length,hold_count:holds.length,short_review_reason_count:reasonShortages.length,literal_checked_anchor_count:literalAnchorDiagnostics.length,literal_checked_anchor_diagnostics:undefined,review_reason_shortages:reasonShortages.slice(0,10),problems:problems.slice(0,10),holds:holds.slice(0,10),document_issues:documentIssues.map(({lane,file,field,issues})=>({lane,file,field,count:Array.isArray(issues)?issues.length:1}))},null,2));
if(arg('--report-dir')){
 const report=path.resolve(ROOT,arg('--report-dir'));assert(report.startsWith(BASE+path.sep),'Reports must remain in this research directory');
 if(decisions?.approved_preview)assert.notEqual(path.resolve(ROOT,decisions.approved_preview),path.join(report,'preview-snapshot.json'),'Never overwrite an approved snapshot');
 fs.mkdirSync(report,{recursive:true});fs.writeFileSync(path.join(report,'diagnostics.json'),JSON.stringify(summary,null,2)+'\n');fs.writeFileSync(path.join(report,'preview-snapshot.json'),JSON.stringify(snapshot,null,2)+'\n');
}
if(!apply)process.exit(0);

// Actual hashing and writes occur only when ROOT invokes this guarded branch.
assert(decisions,'--apply requires --decisions');assert.equal(decisions.run,RUN);assert.equal(decisions.authorized_by,'/root');
assert.equal(decisions.all_mathematical_writers_drained,true);assert.equal(decisions.all_source_repairs_integrated,true);
assert.equal(decisions.authorize_root_hash_bindings,true);assert.equal(decisions.no_native_alpha_credit,true);
assert.equal(decisions.authorize_semantic_field_projection,true,'Root must adopt the literal reviewer-text field projection and stale-opposite-field clearing');
assert.equal(decisions.authorize_locator_fidelity_projection,true,'Root must explicitly adopt typography and exact actual reviewed-locator projection');
assert.equal(problems.length,0,'Resolve preimage/shape problems');assert.equal(holds.length,0,'Resolve all held rows/source repairs first');
assert.equal(normalized.size,4661);
assert.equal(laneAdoptions.size,12,'All12 ready lane adoptions required');
for(let lane=1;lane<=12;lane++){
 const adopted=laneAdoptions.get(lane);assert.equal(adopted.ready,true);assert(typeof adopted.root_final_record==='string'&&fs.existsSync(path.resolve(ROOT,adopted.root_final_record)),'Actual root lane-adoption record required');
}
const approved=json(decisions.approved_preview);assert.equal(approved.run,RUN);
for(const field of ['input_snapshots','proposal_snapshots','source_snapshots','contract_preimages'])assert(same(approved[field],snapshot[field]),`Approved preview drift: ${field}`);
assert(same(approved.rows,snapshot.rows),'Approved semantic/locator projection drift');
const approvals=new Map();
for(const approval of decisions.review_approvals??[]){const k=key(approval.id,approval.case);assert(!approvals.has(k),'Duplicate root review approval');assert(normalized.has(k),'Unassigned root review approval');approvals.set(k,approval);}
const get=(object,field)=>String(field).split('.').reduce((v,k)=>v&&Object.hasOwn(v,k)?v[k]:undefined,object);
const reasonFields=new Set(['template_review_reason','actual_evidence','actual_evidence.reason','actual_evidence.boundary_reason','actual_evidence.boundary_argument','actual_evidence.disposition_basis','after_row.reason','after_row.evidence']);
for(const [k,approval]of approvals){
 const item=normalized.get(k);assert.equal(approval.upheld,true);assert.equal(Number(approval.lane),item.lane);
 assert(reasonFields.has(approval.reason_field),'Root must select an actual authored reviewer reason, never a synthesized reason');
 const reason=get(item.raw,approval.reason_field);assert(typeof reason==='string'&&reason.trim().length>=40,'Native template-review reason requires concrete>=40-character authored reason');
 assert(!/NOT UPHELD|needs.owner|unresolved/i.test(reason),'Cannot uphold an unresolved reviewer finding');
 assert(['reviewed-false-positive','semantic-correction','specific-boundary-disposition'].includes(approval.disposition));
 const contradicted=item.flags.some(f=>/contradict/i.test(f.type??''));
 if(contradicted&&item.after.status==='not_applicable')assert.equal(approval.disposition,'reviewed-false-positive','Unchanged inapplicability on a contradicted candidate needs actual false-positive review');
 assert.equal(approval.actual_review_reason,reason,'Bind the exact reviewer reason explicitly');
}
// Recheck ALL bytes before creating any archive or mutation. Preview holds no hashes.
for(const [file,raw]of Object.entries({...inputSnapshots,...proposalSnapshots,...contractPreimages}))assert.equal(read(file),raw,`Input changed during preparation: ${file}`);
for(const [id,raw]of Object.entries(sourceSnapshots))assert.equal(read(`items/${id}.md`),raw,`Source changed during preparation: ${id}`);
const archive=path.resolve(ROOT,decisions.archive_dir);assert(archive.startsWith(BASE+path.sep));assert(!fs.existsSync(archive),'Use a fresh immutable archive directory');
const {createHash}=await import('node:crypto');
const {itemHashGuard}=await import('../../../../tools/item-hash.mjs');
const itemHashes=new Map();
const history=[];
for(const [k,item]of normalized){
 const file=`research/${RUN}-batch-${item.batch}.proof-contracts.json`,doc=contractDocs.get(file),entry=doc.contracts[item.id];
 const at=entry.boundaries.findIndex(r=>r.case===item.case);assert(at>=0&&same(entry.boundaries[at],item.before));
 const after=structuredClone(item.after),approval=approvals.get(k);
 if(approval){
  if(!itemHashes.has(item.id))itemHashes.set(item.id,itemHashGuard(sourceSnapshots[item.id]));
  const text=after.reason??after.evidence??'';
  const row_sha256=createHash('sha256').update(JSON.stringify({case:after.case,status:after.status,text})).digest('hex');
  after.template_review={upheld:true,by:'/root',reason:approval.actual_review_reason,item_sha256:itemHashes.get(item.id),row_sha256,role:'root-adopted actual delegated owner-focused FIRST; not native Alpha',delegated_reviewer:item.reviewer,delegated_review_sources:item.provenance,root_adoption_record:laneAdoptions.get(item.lane).root_final_record};
  if(approval.disposition==='reviewed-false-positive'&&after.status==='not_applicable')after.reviewed={upheld:true,by:'/root',reason:approval.actual_review_reason,role:'root-adopted owner-focused FIRST; not native Alpha',delegated_reviewer:item.reviewer,delegated_review_sources:item.provenance,root_adoption_record:laneAdoptions.get(item.lane).root_final_record};
 }
 entry.boundaries[at]=after;
 history.push({id:item.id,case:item.case,lane:item.lane,reviewer:item.reviewer,proposal_sources:item.provenance,original_author_row:item.raw,semantic_projection:item.semantic_projection,before_row:item.before,after_row:after,source_repair_adoption:sourceRecords.get(item.id)??null,native_alpha_credit:false});
}
// Hash bindings above are ROOT-only metadata, not proof acceptance. Preserve all
// nonboundary keys and all untouched boundary entries by modifying only targets.
for(const [file,doc]of contractDocs){const before=JSON.parse(contractPreimages[file]);for(const [id,entry]of Object.entries(before.contracts))for(const key of Object.keys(entry))if(key!=='boundaries')assert(same(entry[key],doc.contracts[id][key]),`Nonboundary field changed: ${id}/${key}`);}
fs.mkdirSync(archive,{recursive:true});
for(const [file,raw]of Object.entries({...inputSnapshots,...proposalSnapshots})){const out=path.join(archive,file);fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,raw,{flag:'wx'});}
fs.writeFileSync(path.join(archive,'approved-preview.json'),read(decisions.approved_preview),{flag:'wx'});
for(const [file,raw]of Object.entries(contractPreimages)){const out=path.join(archive,file);fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,raw,{flag:'wx'});}
fs.writeFileSync(path.join(archive,'root-boundary-integration.json'),JSON.stringify({run:RUN,authorized_by:'/root',decision_file:arg('--decisions'),approved_preview:decisions.approved_preview,rows:history,hashes_computed_by_root:approvals.size>0,binding_algorithms:{item:'itemHashGuard',row:'sha256(JSON.stringify({case,status,text}))'},native_alpha_credit:false,gates_run:false},null,2)+'\n');
for(const [file,doc]of contractDocs)fs.writeFileSync(path.resolve(ROOT,file),JSON.stringify(doc,null,2)+'\n');
console.log(JSON.stringify({root_applied_rows:history.length,root_bound_template_reviews:approvals.size,hashes_computed_by_root:approvals.size>0,contract_files:contractDocs.size,archive:rel(archive),gates_run:false,native_alpha_credit:false},null,2));
