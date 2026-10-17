import fs from 'node:fs';
import {createHash} from 'node:crypto';
const run='numerical-optimization-dynamics-2026-10-16',p=`research/${run}`,base=`${p}-ROOT-step3-gate-r1-native-followups`;
const read=x=>fs.readFileSync(x),json=x=>JSON.parse(read(x)),sha=x=>createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x))??'undefined'),same=(a,b)=>hash(a)===hash(b);
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const out=`${p}-ROOT-step3-gate-r1-native-integration`;fs.mkdirSync(out);const completed=[];
for(const [b,n]of [['6',3],['14',3],['17',4],['31',2],['77',3],['90',2],['93',3]]){
 const rp=`${p}-dispatch/alpha-3a-batch-${b}.attempt-${n}.result.json`,r=json(rp);
 assert(r.run===run&&r.role==='alpha'&&r.label===`3a-batch-${b}`&&r.attempt===n&&r.ok===true&&r.exit_code===0&&r.process_exit_code===0&&r.timed_out===false&&r.terminal_summary.task_completed===true&&r.terminal_summary.task_aborted===false&&r.terminal_summary.final_response_present===true,'Genuine actual completed native repair');
 assert(read(rp).equals(read(`${p}-dispatch/alpha-3a-batch-${b}.result.json`)),'Actual immutable stable result');
 const report=`${p}-alpha-batch-${b}-3a.md`,before=read(`${base}/b${b}/${report.split('/').at(-1)}`),current=read(report);
 assert(current.subarray(0,before.length).equals(before),'Full original native report retained');
 completed.push({batch:b,attempt:n,session_id:r.session_id,ended_at:r.ended_at,result:{path:rp,sha256:sha(read(rp))},native_report:{path:report,sha256:sha(current)}});
}
const expectedSources=[
 ['items/alg-implicit-shifted-bidiagonal-qr-with-deflation.md',`${p}-owner-step3-depcheck-b17-correction/proposed/items/alg-implicit-shifted-bidiagonal-qr-with-deflation.md`],
 ['items/alg-rank-thresholded-least-squares-by-svd.md',`${p}-owner-step3-depcheck-b17-correction/proposed/items/alg-rank-thresholded-least-squares-by-svd.md`],
 ['items/alg-critical-reaction-binomial-guarded-tau-leaping.md',`${p}-owner-step3-render-tauleap31-20261016T162951073901Z/proposed/items/alg-critical-reaction-binomial-guarded-tau-leaping.md`],
 ['items/ex-chebyshev-lobatto-endpoint-clustering.md',`${p}-owner-step3-b90-leaf-prerequisite-proposal/proposed/ex-chebyshev-lobatto-endpoint-clustering.md`],
];
for(const [live,proposed]of expectedSources)assert(read(live).equals(read(proposed)),'Exact approved source correction: '+live);
for(const id of ['lem-parareal-sweep-work-and-span','lem-mgrit-two-level-call-counts','lem-mgrit-recursive-work-and-visits'])assert(read(`items/${id}.md`).equals(read(`${base}/b77/${id}.md`)),'77 source remains exact independently reviewed body');
const lp='research/defect-ledger.jsonl',ledgerBefore=read(lp),oldRows=ledgerBefore.toString().trim().split('\n').map(JSON.parse),proposedRows=[],normalizations=[];
for(const b of ['17','31','77','90']){
 const path=`${base}/b${b}/proposed-fixed-rows.json`,native=json(path);assert(Array.isArray(native),'Actual native rows');
 for(const original of native){
  const row=structuredClone(original);
  if(b==='31'){
   assert(!row.defect_id&&typeof row.id==='string','Exact native31 identifier spelling');row.defect_id=row.id;delete row.id;
   const report=`${p}-alpha-batch-31-3a.md`;assert(typeof row.evidence==='string'&&row.evidence.startsWith(report),'Actual native31 report evidence');row.evidence=[{path:report,note:row.evidence.slice(report.length).trim()}];
   assert(typeof row.adjudication_ref==='string','Actual native31 reference spelling');const [decisionPath,obligation,...extra]=row.adjudication_ref.split('#');assert(!extra.length&&decisionPath===`${p}-alpha-batch-31-3a-decisions.json`&&obligation,'Exact actual native reference');row.adjudication_ref=[{path:decisionPath,obligation}];
   normalizations.push({native_proposal:path,original,normalized:row,reason:'Root schema projection only: id→defect_id, literal report evidence→path/note, path#obligation→structured reference; exact native proposal file remains unchanged.'});
  }
  assert(row.run===run&&String(row.batch)===b&&row.group===`batch-${b}`&&row.severity==='nonfatal'&&row.caught_at_stage==='3a-adjudicate'&&row.caught_by_role==='group-alpha'&&row.disposition==='fixed'&&row.repair_confidence===1,'Actual nonfatal metadata/source correction');
  assert(!oldRows.some(x=>x.defect_id===row.defect_id)&&!proposedRows.some(x=>x.defect_id===row.defect_id),'New exact physical correction identity');
  assert(Array.isArray(row.evidence)&&row.evidence.length&&row.evidence.every(x=>typeof x.path==='string'&&fs.existsSync(x.path)),'Concrete actual evidence');
  assert(Array.isArray(row.adjudication_ref)&&row.adjudication_ref.length,'Structured actual reference');
  for(const ref of row.adjudication_ref){const doc=json(ref.path),matches=doc.decisions.filter(x=>x.obligation===ref.obligation&&x.id===row.subject);assert(matches.length===1&&matches[0].repair_confidence===1&&matches[0].defect_ids.includes(row.defect_id),'Actual native current repair disposition references its row');}
  proposedRows.push(row);
 }
}
assert(proposedRows.length===8,'Eight real new corrections, not duplicated original source findings');
const ownerPath=`${p}-step3-owner-repair-evidence.json`,ownerBefore=read(ownerPath),owner=JSON.parse(ownerBefore),retiredIds=['lem-mgrit-two-level-call-counts','lem-mgrit-recursive-work-and-visits'];
const retired=owner.stabilized_source_identical_acceptance_continuities.filter(x=>retiredIds.includes(x.id));assert(retired.length===2,'Exact two now-obsolete conditional accepted records');
const current77=json(`${p}-alpha-batch-77-3a-decisions.json`);
for(const entry of retired)assert(current77.decisions.some(d=>d.id===entry.id&&d.obligation===entry.obligation&&d.verdict==='amended_repair'&&d.repair_confidence===1),'Genuine new native contract amendment before retirement');
fs.writeFileSync(`${out}/owner-evidence.before.json`,ownerBefore);fs.writeFileSync(`${out}/retired-two-accepted-continuities.json`,JSON.stringify(retired,null,2)+'\n');
owner.stabilized_source_identical_acceptance_continuities=owner.stabilized_source_identical_acceptance_continuities.filter(x=>!retiredIds.includes(x.id));assert(owner.stabilized_source_identical_acceptance_continuities.length===6,'Other six preserved');
assert(read(lp).equals(ledgerBefore),'Shared ledger stable before atomic append');assert(read(ownerPath).equals(ownerBefore),'Owner evidence stable');
fs.appendFileSync(lp,proposedRows.map(x=>JSON.stringify(x)).join('\n')+'\n');fs.writeFileSync(ownerPath,JSON.stringify(owner,null,2)+'\n');
fs.writeFileSync(`${out}/receipt.json`,JSON.stringify({version:1,run,reviewed_by:'/root',recorded_at:new Date().toISOString(),actual_completed_native_repairs:completed,exact_approved_sources:expectedSources.map(([path])=>({path,raw_sha256:sha(read(path))})),actual_new_ledger_rows:proposedRows,root_schema_projections:normalizations,retired_conditional_acceptances:retiredIds,retirement_reason:'Actual independent native77 continuation genuinely amended each current boundary contract and classified amended_repair; obsolete accepted-only continuity entries are archived in full, not relabeled or reused. Standard native amendment and current certification gates remain mandatory.',original_ledger_raw_sha256:sha(ledgerBefore),owner_evidence_before_raw_sha256:sha(ownerBefore),owner_evidence_current_raw_sha256:sha(read(ownerPath)),next:'Root levels/current input bindings, final explicit changed-source layout, fresh full dependency-order preparation and actual complete native retry. No pass claimed.'},null,2)+'\n');console.log(JSON.stringify({completed:7,appended_real_fixed_rows:8,stabilized_acceptance_continuities_current:6}));
