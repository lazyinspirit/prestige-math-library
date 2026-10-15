#!/usr/bin/env node
// Root-owned integration proposal. Default is read-only; no validators or gates.
// Root: inspect, apply the separate narrow Remarks helper patch, drain all writers,
// then run with --apply --all-source-writers-drained. Rebind decisions/certificates
// through the ordinary root preparation after every other source/metadata repair.
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { splitFrontmatter, sectionText } from '../tools/facts-block.mjs';
import { yaml } from '../tools/pathway-lib.mjs';
import { loadStep3OwnerRehomes, ownerRehomeCarrierBatch } from '../tools/step3-owner-rehomes.mjs';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const run='bayesian-computational-statistics-62',base=`research/${run}`;
const apply=process.argv.includes('--apply');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const sha=x=>createHash('sha256').update(x).digest('hex');
const hash=x=>sha(JSON.stringify(canonical(x))??'undefined');
const raw=p=>fs.readFileSync(path.join(ROOT,p),'utf8');
const read=p=>JSON.parse(raw(p));
const assert=(value,message)=>{if(!value)throw Error(message);};
const ref=p=>({path:p,sha256:sha(raw(p))});
const norm=x=>String(x??'').replace(/\s+/g,' ').trim();
const evidencePath=`${base}-step3-owner-repair-evidence.json`;
const evidenceOriginal=raw(evidencePath),evidence=JSON.parse(evidenceOriginal);
assert(evidence.version===1&&evidence.run===run,'Unexpected owner-evidence envelope');
const rehomes=loadStep3OwnerRehomes(ROOT,run);
const helperPath='tools/step3-owner-source-identical-continuity.mjs';
const helper=raw(helperPath); // Entries below are consumed by this existing helper in full scope gates.
const blockersPath=`${base}-owner-step3-gate1-native-blockers.json`;
const laterBlockersPath=`${base}-owner-step3-gate2-native-blockers.json`;
const blockerDocs=[read(blockersPath),...(fs.existsSync(path.join(ROOT,laterBlockersPath))?[read(laterBlockersPath)]:[])];
const blocked=new Set(blockerDocs.flatMap(d=>d.failures.flatMap(f=>[...f.output.matchAll(/ERROR decision-not-applied: \[([^\]]+)\] accepted_repair no longer matches the reader result/g)].map(m=>m[1]))));
assert(blocked.size>0,'Empty failed-acceptance selection is forbidden');
const excluded=new Map([
 ['alg-quantile-monte-carlo-standard-error','Owner-only quantile40 repair; root routes independently.'],
 ['lem-hellinger-ratio-controls-kl-moments','Hellinger18 has a genuine source amendment; root preserves its amended repair route.'],
]);
const documents=new Map(),selected=[],skipped=[];
for(const name of fs.readdirSync(path.join(ROOT,'research')).sort()){
 if(!new RegExp(`^${run}-alpha-batch-\\d+-3a-decisions\\.json$`).test(name))continue;
 const decisionPath=`research/${name}`,decisionDoc=read(decisionPath);
 for(const decision of decisionDoc.decisions??[]){
  if(!blocked.has(decision.id))continue;
  if(excluded.has(decision.id)){skipped.push({id:decision.id,reason:excluded.get(decision.id)});continue;}
  if(decision.verdict!=='accepted_repair'){skipped.push({id:decision.id,reason:`Current verdict ${decision.verdict}; never relabel it as acceptance.`});continue;}
  const match=/^touched:([1-9]\d*):(.+)$/.exec(decision.obligation??'');
  assert(match&&match[2]===decision.id&&decision.route==='touched',`Unsupported native target ${decision.id}`);
  const batch=match[1],id=decision.id;
  // Root sealed all native decisions before routing corrections. Never call a
  // later corrected decision (notably batch39 refs/evidence) the native original.
  const acceptedArchive=`${base}-owner-step3-gate1-native-decisions-before/${run}-alpha-batch-${batch}-3a-decisions.json`;
  const nativeDecisionDoc=read(acceptedArchive),acceptedDecision=(nativeDecisionDoc.decisions??[]).find(d=>d.id===id&&d.obligation===decision.obligation);
  assert(nativeDecisionDoc.run===run&&acceptedDecision?.verdict==='accepted_repair'&&acceptedDecision.route==='touched',`No sealed original native acceptance: ${id}`);
  assert(acceptedDecision.defect_ids?.length&&new Set(acceptedDecision.defect_ids).size===acceptedDecision.defect_ids.length,`Original native acceptance lacks genuine refs: ${id}`);
  const acceptedArchiveRef=ref(acceptedArchive);
  const scopePath=`${base}-step3-scope-${batch}.json`,scope=read(scopePath);
  assert(scope.version===2&&scope.run===run&&(scope.touched??[]).includes(id)&&!(scope.added??[]).includes(id),`Not an original touched obligation: ${id}`);
  const target={obligation:decision.obligation,id,batch,route:'touched',added:false};
  const postPath=`${base}-step3-hash-${batch}-post.json`,post=read(postPath),before=post.hashes?.[id];
  assert(post.version===2&&post.run===run&&String(post.batch)===batch&&post.label==='post'&&before,`Invalid immutable post carrier: ${id}`);
  const sourcePath=`items/${id}.md`,source=raw(sourcePath);
  if(sha(source)!==before.item_sha256){skipped.push({id,reason:'Current raw source differs from the immutable reader-post carrier; requires the genuine source-repair route.'});continue;}
  const nativeResult=`${base}-dispatch/alpha-3a-batch-${batch}.result.json`,result=read(nativeResult);
  assert(result.run===run&&result.role==='alpha'&&result.ok===true&&result.exit_code===0&&!result.timed_out&&result.terminal_summary?.task_completed===true&&!result.terminal_summary?.task_aborted&&result.covers?.map(String).includes(batch),`No successful native Alpha result: ${id}`);
  const readerResult=`${base}-dispatch/reader-reader-${batch}.result.json`,reader=read(readerResult);
  assert(reader.run===run&&reader.role==='reader'&&reader.ok===true&&reader.exit_code===0&&reader.terminal_summary?.task_completed===true,`No successful native reader result: ${id}`);
  const nativeAssignment=`${base}-alpha-batch-${batch}-3a-order.task.md`,nativeReport=`${base}-alpha-batch-${batch}-3a.md`,readerReport=`${base}-reader-${batch}.md`;
  assert(raw(nativeAssignment).includes(id)&&raw(nativeReport).includes(id),'Native assignment/report omit '+id);
  assert(scope.reader_report_sha256===sha(raw(`${base}-reader-findings-${batch}.json`)),'Reader findings no longer match native scope: '+id);
  assert(decision.defect_ids?.length&&new Set(decision.defect_ids).size===decision.defect_ids.length,`Accepted repair lacks genuine unique ledger refs: ${id}`);
  const {fm,body}=splitFrontmatter(source),meta=yaml().parse(fm);
  assert(meta.id===id,'Source ID mismatch '+id);
  // Precisely matches the proposed narrow helper change: prefer Statement;
  // accept Remarks only for a remark lacking Statement with actual Remarks.
  const heading=meta.kind==='definition'||meta.kind==='algorithm'?'Definition':meta.kind==='example'&&sectionText(body,'Example')?'Example':meta.kind==='counterexample'?'Statement refuted':meta.kind==='remark'&&!sectionText(body,'Statement')&&sectionText(body,'Remarks')?'Remarks':'Statement';
  const statement=sectionText(body,heading).trim();assert(statement,'Missing source claim section '+id);
  const currentBatch=ownerRehomeCarrierBatch(rehomes,id,batch),manifestPath=`${base}-batch-${currentBatch}.pages.json`;
  if(!documents.has(manifestPath)){const original=raw(manifestPath);documents.set(manifestPath,{original,doc:JSON.parse(original),changes:[]});}
  const record=documents.get(manifestPath),pages=Array.isArray(record.doc)?record.doc:record.doc.pages;
  const found=pages.flatMap(page=>(page.items??[]).filter(row=>row.id===id).map(row=>({page,row})));
  assert(found.length===1,'Nonunique current manifest owner '+id);const {row,page}=found[0];
  assert(hash(row.deps??[])===hash(meta.deps??[]),'Dependency mirror mismatch; root must resolve before integration: '+id);
  const priorStatement=row.statement;
  row.statement=statement; // Only candidate manifest Statement/Definition/Example/Remarks mirror.
  if(priorStatement!==statement)record.changes.push({id,field:'statement',heading,before:priorStatement,after:statement});
  const contractPath=`${base}-batch-${currentBatch}.proof-contracts.json`,contractDoc=read(contractPath),contract=contractDoc.contracts?.[id]??null;
  const current={item_sha256:sha(source),contract_sha256:hash(contract),manifest_sha256:hash({...row,__step4_page_id:String(page.id)})};
  selected.push({id,batch,currentBatch,decisionPath,decisionDoc,decision,acceptedDecision,acceptedArchive,acceptedArchiveRef,target,before,current,sourcePath,source,postPath,nativeResult,nativeReport,nativeAssignment,readerResult,readerReport,contractPath,manifestPath,heading});
 }
}
assert(selected.length>0,'No genuine unchanged native acceptances found');
assert(new Set(selected.map(x=>x.id)).size===selected.length,'Duplicate accepted subject');
const unaccounted=[...blocked].filter(id=>!selected.some(x=>x.id===id)&&!skipped.some(x=>x.id===id));
assert(!unaccounted.length,'Failed subjects not accounted for: '+unaccounted.join(','));
const plan={run,selected:selected.map(x=>({id:x.id,batch:x.batch,currentBatch:x.currentBatch,heading:x.heading,source_identical:true,source_sha256:x.current.item_sha256})),skipped,manifest_changes:[...documents.values()].flatMap(x=>x.changes),helper:ref(helperPath),preserve_shared_defects:true,validators_executed:false};
if(!apply){console.log(JSON.stringify({...plan,mode:'read-only; no files written'},null,2));process.exit(0);}
assert(process.argv.includes('--all-source-writers-drained'),'Root must assert actual source-writer drain');
const state=read(`.autopilot/${run}/state.json`);
for(const dispatch of Object.values(state.dispatches??{}))assert(dispatch.endedAt,'Native dispatch is still active: '+dispatch.label);
if(selected.some(x=>x.heading==='Remarks'))assert(helper.includes('sectionText(body, "Remarks")')||helper.includes("sectionText(body, 'Remarks')"),'Apply the separate narrowly guarded remark-heading helper patch first');
// Entire plan completed before any mutation. Recheck all bound source/native inputs.
assert(raw(evidencePath)===evidenceOriginal,'Owner repair evidence changed while planning');
for(const [file,record] of documents)assert(raw(file)===record.original,'Manifest changed while planning '+file);
for(const x of selected){assert(raw(x.sourcePath)===x.source,'Source changed while planning '+x.id);assert(hash(read(x.decisionPath))===hash(x.decisionDoc),'Decision changed while planning '+x.id);assert(ref(x.acceptedArchive).sha256===x.acceptedArchiveRef.sha256,'Sealed original native decision archive changed '+x.id);}
const archive=`${base}-owner-step3-gate1-central-continuity-before-${new Date().toISOString().replaceAll(/[:.]/g,'-')}`;
fs.mkdirSync(path.join(ROOT,archive),{recursive:false});
const saved=new Map();
const save=file=>{if(!saved.has(file)){const dest=`${archive}/${file.replaceAll('/','__')}`;fs.writeFileSync(path.join(ROOT,dest),fs.readFileSync(path.join(ROOT,file)),{flag:'wx'});saved.set(file,dest);}return saved.get(file);};
save(evidencePath);save(blockersPath);
const entries=[];
for(const x of selected){
 save(x.decisionPath);save(x.sourcePath);save(x.contractPath);save(x.manifestPath);
 entries.push({version:1,policy:'step3-source-identical-acceptance-continuity-v1',run,id:x.id,obligation:x.decision.obligation,post_reader_carrier_sha256:hash(x.before),target_sha256:hash(x.target),current_carrier_sha256:hash(x.current),historical_manifest_delta_unknown:true,independent_execution_coverage_adopted:false,post_reader_snapshot:ref(x.postPath),native_result:ref(x.nativeResult),native_report:ref(x.nativeReport),native_assignment:ref(x.nativeAssignment),accepted_decision_archive:x.acceptedArchiveRef,accepted_decision_sha256:hash(x.acceptedDecision)});
}
// Preserve every unrelated owner-evidence property and every shared-defect row.
const entryKeys=new Set(entries.map(e=>e.obligation));
evidence.source_identical_acceptance_continuities=[...(evidence.source_identical_acceptance_continuities??[]).filter(e=>!entryKeys.has(e.obligation)),...entries];
assert(hash(evidence.shared_defects)===hash(JSON.parse(evidenceOriginal).shared_defects),'shared_defects must be byte-value-preserved');
for(const [file,record] of documents)if(record.changes.length)fs.writeFileSync(path.join(ROOT,file),JSON.stringify(record.doc,null,2)+'\n');
fs.writeFileSync(path.join(ROOT,evidencePath),JSON.stringify(evidence,null,2)+'\n');
fs.writeFileSync(path.join(ROOT,`${archive}/application.json`),JSON.stringify({...plan,archive,entries:entries.length,mode:'root integration; final hashes remain root-bound',note:'Existing production continuity helper validates these entries during full scope gates. No helper/validator/gate was executed by this integration script. Rebind ordinary decision subject hashes and certificates after all final current inputs freeze.'},null,2)+'\n');
console.log(JSON.stringify({archive,entries:entries.length,manifest_changes:plan.manifest_changes.length,skipped,validators_executed:false},null,2));
