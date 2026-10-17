import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {activeOwnershipRows} from '../tools/defect-ledger-ownership.mjs';
const run='numerical-optimization-dynamics-2026-10-16',p=`research/${run}`;
const read=x=>fs.readFileSync(x),json=x=>JSON.parse(read(x));
const sha=x=>createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x))??'undefined');
const assert=(x,msg)=>{if(!x)throw Error(msg);};
const inventory=json(`${p}-ROOT-owner-evidence-inventory-r3.json`);
const targets=inventory.groups.flatMap(g=>g.targets);
const errors=[];
const rows=activeOwnershipRows(read('research/defect-ledger.jsonl').toString().trim().split('\n').map(JSON.parse).filter(x=>x.run===run),errors);
assert(!errors.length,'Actual active ledger ownership');
const entries=json(`${p}-owner-battery-r1-sharing-and-stabilization-intake/batch49-ownerShared-three.UNSEALED.json`);
assert(entries.length===3,'Exactly three49 genuine explicit-link families');
for(const entry of entries){
  const found=rows.filter(r=>r.defect_id===entry.defect_id);
  assert(found.length===1&&found[0].subject===entry.id&&['fixed','narrowed','dropped'].includes(found[0].disposition),'Same physical subject closed row');
  entry.ledger_row_sha256=hash(found[0]);entry.current_raw_sha256=sha(read(entry.current_path));
  for(const ref of entry.evidence)ref.sha256=sha(read(ref.path));
  const actual=[];
  for(const binding of entry.obligations){
    const ts=targets.filter(t=>t.obligation===binding.obligation);
    assert(ts.length===1,'Unique actual owed native obligation');
    const t=ts[0];assert(t.check_target.id===entry.id&&t.decisions.length===1,'Same subject native decision');
    const d=t.decisions[0].decision;assert(d.repair_confidence===1&&d.defect_ids.includes(entry.defect_id),'Existing actual acceptance and same closed defect');
    actual.push(d);binding.target_sha256=t.check_target_sha256;
  }
  assert(actual.some(d=>typeof d.same_defect_evidence==='string'&&d.same_defect_evidence.trim().length>=40&&entry.obligations.some(x=>x.obligation===d.same_defect_as)),'Genuine native explicit defect-equivalence explanation');
  if(entry.id==='alg-age-cohort-characteristic-quadrature')entry.reason='The native producer accepts the genuine per-cell-width correction and separate one-panel midpoint calls; the downstream reader and refuter explicitly link their same-cohort quadrature finding to that correction. The original downstream severities, locations and unbound observations remain intact; this records one actual physical defect across these same-subject obligations without changing any native finding, verdict or confidence.';
}
const path=`${p}-step3-owner-repair-evidence.json`,before=read(path),doc=JSON.parse(before);
assert(doc.run===run&&doc.version===1&&doc.shared_defects.length===8,'Preserve existing eight families');
const out=`${p}-ROOT-shared49-three-sealing`;fs.mkdirSync(out);fs.writeFileSync(`${out}/owner-evidence.before.json`,before);
doc.shared_defects.push(...entries);assert(read(path).equals(before),'Guard current canonical bytes');fs.writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
fs.writeFileSync(`${out}/receipt.json`,JSON.stringify({version:1,run,reviewed_by:'/root',recorded_at:new Date().toISOString(),before_raw_sha256:sha(before),current_raw_sha256:sha(read(path)),same_subject_families:entries.map(e=>({id:e.id,defect_id:e.defect_id})),coverage:'Only explicit actual native same-physical-defect evidence; no review or verdict supplied. Native battery remains owed.'},null,2)+'\n');
console.log(out);
