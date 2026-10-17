import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {activeOwnershipRows} from '../tools/defect-ledger-ownership.mjs';
const run='numerical-optimization-dynamics-2026-10-16',p=`research/${run}`;
const read=x=>fs.readFileSync(x),json=x=>JSON.parse(read(x)),sha=x=>createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x))??'undefined');
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const inventory=json(`${p}-ROOT-owner-evidence-inventory-r3.json`),targets=inventory.groups.flatMap(g=>g.targets);
const errors=[],rows=activeOwnershipRows(read('research/defect-ledger.jsonl').toString().trim().split('\n').map(JSON.parse).filter(r=>r.run===run),errors);assert(!errors.length,'Active ownership');
const families=json(`${p}-owner-same-subject-sharing-intake-r3/missing-link-followups-eight.json`).filter(e=>['70','92'].includes(e.native_metadata_owner_batch));assert(families.length===2,'Exact two remaining foreign same-subject identities');
const out=`${p}-ROOT-shared-two-sealing`;fs.mkdirSync(out);
const ref=path=>({path,sha256:sha(read(path))});
const archive=path=>{const dst=`${out}/${path.split('/').at(-1)}`;if(fs.existsSync(dst))assert(read(dst).equals(read(path)),'Consistent archive');else fs.copyFileSync(path,dst);return ref(dst);};
const entries=[];
for(const f of families){
 const id=f.family[0].decision.id,found=rows.filter(r=>r.defect_id===f.defect_id);assert(found.length===1&&found[0].subject===id&&found[0].disposition==='fixed','Same subject fixed row');
 const decisions=[],evidence=[],obligations=[];
 for(const old of f.family){
  const b=old.group.replace('batch-',''),dp=`${p}-alpha-batch-${b}-3a-decisions.json`,doc=json(dp),matches=doc.decisions.filter(d=>d.id===id&&d.obligation===old.decision.obligation);assert(matches.length===1,'Actual exact native decision');
  const d=matches[0];assert(d.repair_confidence===1&&d.defect_ids.includes(f.defect_id),'Actual native accepted closed defect');decisions.push(d);
  const ts=targets.filter(t=>t.obligation===d.obligation);assert(ts.length===1&&ts[0].check_target.id===id,'Actual unchanged owed target');obligations.push({obligation:d.obligation,target_sha256:ts[0].check_target_sha256});
  evidence.push(archive(dp),archive(`${p}-alpha-batch-${b}-3a.md`));
  const rp=`${p}-dispatch/alpha-3a-batch-${b}.result.json`,result=json(rp),ip=`${p}-dispatch/alpha-3a-batch-${b}${result.evidence_tag}.result.json`;
  assert(result.ok===true&&result.exit_code===0&&result.process_exit_code===0&&result.terminal_summary.task_completed===true&&result.terminal_summary.task_aborted===false&&result.terminal_summary.final_response_present===true&&read(rp).equals(read(ip)),'Actual immutable native success');evidence.push(ref(ip),archive(`${p}-step3-scope-${b}.json`));
 }
 assert(decisions.some(d=>d.same_defect_as===f.smallest_followup.candidate_same_defect_as&&d.same_defect_evidence?.length>=80),'Genuine new explicit native identity annotation');
 const source=`items/${id}.md`;evidence.push(archive(source),ref(`${p}-ROOT-native-sharing-followups/ROOT-verified-completions.json`));
 entries.push({id,defect_id:f.defect_id,ledger_row_sha256:hash(found[0]),current_path:source,current_raw_sha256:sha(read(source)),reason:f.native_metadata_owner_batch==='70'
  ?'The genuine focused native70 annotation explicitly identifies its foreign reader finding and original local refuter58 finding as the same missing initial phi(0) evaluation in the owned Wolfe procedure. The actual single initialization correction and fixed row resolve that omission while preserving distinct historical carriers, observation uncertainty and consumer routes. This binding supplies no new review or verdict.'
  :'The genuine focused native92 annotation explicitly identifies both original findings as the same omitted product-adjoint and inverse-adjoint justification in the producer57 whitening proof. The one recorded F3 and local inverse-adjoint derivation repair resolves that omission. Both distinct authentic observations and original routes remain unchanged; no identical-history claim or fresh full-proof review is supplied.',obligations,evidence:[...new Map(evidence.map(x=>[x.path,x])).values()]});
}
const path=`${p}-step3-owner-repair-evidence.json`,before=read(path),doc=JSON.parse(before);assert(doc.shared_defects.length===6&&!entries.some(e=>doc.shared_defects.some(x=>x.defect_id===e.defect_id)),'Preserve six existing families');fs.writeFileSync(`${out}/owner-evidence.before.json`,before);doc.shared_defects.push(...entries);assert(read(path).equals(before),'Guard authority');fs.writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
fs.writeFileSync(`${out}/receipt.json`,JSON.stringify({version:1,run,reviewed_by:'/root',recorded_at:new Date().toISOString(),before_raw_sha256:sha(before),current_raw_sha256:sha(read(path)),added:entries.map(e=>e.defect_id),shared_total:8,native_validation:'Mandatory whole native battery remains owed.'},null,2)+'\n');console.log(out);
