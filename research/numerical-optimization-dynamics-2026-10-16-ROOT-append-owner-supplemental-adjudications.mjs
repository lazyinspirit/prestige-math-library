// Explicit ROOT OWNER layer; preserves every genuine native decision verbatim.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {activeOwnershipRows} from '../tools/defect-ledger-ownership.mjs';
const run='numerical-optimization-dynamics-2026-10-16',p=`research/${run}`;
const read=x=>fs.readFileSync(x),json=x=>JSON.parse(read(x)),sha=x=>createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x))??'undefined');
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const inputs=[
 `${p}-owner-unowned-intake1-supplemental-release-20261016T164155757862Z/owner-supplemental-proposals.json`,
 `${p}-owner-step3-unowned-intake2-supplemental-proposals/owner-supplemental-gate-decision-proposals.json`,
 `${p}-owner-step3-unowned-intake-3-supplement-proposals/owner-gate-decision-proposals.json`,
 `${p}-ROOT-owner-unowned-intake4-proposals/proposal.json`,
];
const proposals=inputs.flatMap(path=>{const doc=json(path);assert(doc.run===run&&!(doc.held??doc.holds??[]).length,'No unresolved delegated holds');return(doc.ready??doc.proposals).map(row=>({path,row,decision:row.decision??row.append_decision}));});
assert(proposals.length===32&&new Set(proposals.map(x=>x.decision.obligation)).size===32,'Exact32 distinct actual unowned defects');
const errors=[],rows=activeOwnershipRows(read('research/defect-ledger.jsonl').toString().trim().split('\n').map(JSON.parse).filter(x=>x.run===run),errors);assert(!errors.length,'Actual active ledger');
const homes=new Map();for(let b=1;b<=107;b++)for(const page of json(`${p}-batch-${b}.pages.json`))for(const item of page.items){assert(!homes.has(item.id),'Unique current home');homes.set(item.id,String(b));}
const out=`${p}-ROOT-owner-supplemental-adjudications`;fs.mkdirSync(out);const docs=new Map(),bindings=[],now=new Date().toISOString();
const ref=path=>({path,sha256:sha(read(path))});
for(const {path,row,decision:proposed}of proposals){
 const d=structuredClone(proposed),defect=d.defect_ids?.[0],matches=rows.filter(x=>x.defect_id===defect);assert(matches.length===1,'Actual unique active recorded defect');const ledger=matches[0];
 assert(d.route==='gate'&&d.obligation===`gate:${defect}`&&d.defect_ids.length===1&&d.id===ledger.subject&&d.repair_confidence===1,'Exact focused owner disposition');
 assert(d.verdict===(ledger.severity==='fatal'?'confirmed_fatal':'confirmed_nonfatal')&&['fixed','nonfatal-recorded'].includes(ledger.disposition),'Retain genuine severity and historical disposition');
 const batch=homes.get(d.id);assert(batch,'Actual current manifest ownership');
 const dp=`${p}-alpha-batch-${batch}-3a-decisions.json`,rp=`${p}-alpha-batch-${batch}-3a.md`;
 assert(!['6','14','17','31','77','90','93'].includes(batch),'Do not race focused native writers');
 const explicit=row.current_decisions_path??row.provenance?.current_decisions_path??row.decisions_file??row.target_decisions_file??row.decision_file;
 assert(!explicit||explicit===dp,'Delegated current group must match actual current home');
 if(!docs.has(dp)){const before=read(dp),doc=JSON.parse(before);assert(doc.version===1&&doc.run===run&&doc.group===`batch-${batch}`,'Actual native group identity');docs.set(dp,{before,doc});fs.writeFileSync(`${out}/batch-${batch}.native-before.json`,before);}
 const file=docs.get(dp);assert(!file.doc.decisions.some(x=>x.obligation===d.obligation),'No native/original owner duplicate or overwrite');
 const source=`items/${d.id}.md`,archive=`${out}/${d.id}.current-source.md`;fs.copyFileSync(source,archive);
 const result=json(`${p}-dispatch/alpha-3a-batch-${batch}.result.json`),immutable=`${p}-dispatch/alpha-3a-batch-${batch}${result.evidence_tag}.result.json`;
 assert(result.ok===true&&result.exit_code===0&&result.process_exit_code===0&&result.terminal_summary.task_completed===true&&result.terminal_summary.task_aborted===false&&result.terminal_summary.final_response_present===true&&read(immutable).equals(read(`${p}-dispatch/alpha-3a-batch-${batch}.result.json`)),'Genuine prior native completed repair acceptance');
 const reportArchive=`${out}/batch-${batch}.native-report.md`;if(!fs.existsSync(reportArchive))fs.copyFileSync(rp,reportArchive);else assert(read(reportArchive).equals(read(rp)),'Native report stable');
 d.evidence=`ROOT OWNER adjudication accepted by /root on ${now}, following the explicitly delegated focused correction review below. This is separately attributed owner work and supplies no new native execution or whole-proof review. Delegated evidence retained verbatim: ${proposed.evidence}`;
 d.owner_adjudication={version:1,owner_identity:'/root',recorded_at:now,basis:'accepted-delegated-focused-correction-review',original_native_output:false,native_execution_coverage_adopted:false,new_full_proof_review_claimed:false,delegated_proposal:ref(path)};
 const {subject_sha256:_stamp,...semantic}=d;
 bindings.push({id:d.id,obligation:d.obligation,defect_id:defect,owner_identity:'/root',recorded_at:now,decision_semantic_sha256:hash(semantic),ledger_row_sha256:hash(ledger),current_source_raw_sha256:sha(read(source)),evidence:[ref(path),ref(immutable),ref(reportArchive),ref(`${out}/batch-${batch}.native-before.json`),ref(archive)]});
 file.doc.decisions.push(d);
}
const ownerPath=`${p}-step3-owner-repair-evidence.json`,ownerBefore=read(ownerPath),owner=JSON.parse(ownerBefore);assert(owner.version===1&&owner.run===run&&!owner.owner_supplemental_adjudications,'Preserve all existing evidence');
fs.writeFileSync(`${out}/owner-evidence.before.json`,ownerBefore);
for(const [path,x]of docs)assert(read(path).equals(x.before),'Concurrent native decision writer');assert(read(ownerPath).equals(ownerBefore),'Concurrent owner-evidence writer');
for(const [path,x]of docs){const beforeDoc=JSON.parse(x.before);assert(hash(x.doc.decisions.slice(0,beforeDoc.decisions.length))===hash(beforeDoc.decisions),'Every original actual native decision preserved exactly');fs.writeFileSync(path,JSON.stringify(x.doc,null,2)+'\n');}
owner.owner_supplemental_adjudications=bindings;fs.writeFileSync(ownerPath,JSON.stringify(owner,null,2)+'\n');
fs.writeFileSync(`${out}/receipt.json`,JSON.stringify({version:1,run,owner_identity:'/root',recorded_at:now,explicit_owner_adjudications:32,groups:docs.size,prior_native_decisions_and_reports_unchanged:true,native_execution_coverage_adopted:false,new_full_proof_review_claimed:false,delegated_proposals:inputs.map(ref),bindings,mandatory_native_full_retry:'Not yet run; current source stamping and every ordinary gate remain mandatory.'},null,2)+'\n');console.log(JSON.stringify({owner_supplemental_decisions:32,groups:docs.size}));
