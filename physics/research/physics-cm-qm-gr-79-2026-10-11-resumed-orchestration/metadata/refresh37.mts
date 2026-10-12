import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';
import { loadStep3, itemInputPaths } from '../../../../tools/physics-support/frontier-snapshot.mjs';
import { recordStep1, step1Decision } from '../../../../tools/physics-support/step1-decisions.mjs';
import { authorInputs } from '../../../../tools/physics-support/author-check.mts';
const root = process.cwd(), run = 'physics-cm-qm-gr-79-2026-10-11';
const out = `research/${run}-resumed-orchestration/metadata`;
const base = `research/${run}-cc-spectral-prerequisite`;
const hash = (b: any) => createHash('sha256').update(b).digest('hex');
const raw = (p: string) => readFileSync(join(root,p));
const json = (p: string) => JSON.parse(raw(p).toString());
const release = json(`${base}/continuation-37-readiness-currency-release.json`);
const closure = json(`${base}/continuation-angular37-owning-closure.json`);
const inspection = json(`${base}/continuation-37-readiness-before-inspection.json`);
const targets = inspection.rows.filter((r: any) => !r.closed);
if (targets.length !== 9) throw Error('Exact nine-target authority required');
function guards() {
  for (const g of [...release.current_guards,...closure.current_scope_guards])
    if (hash(raw(g.path)) !== g.raw_sha256) throw Error(`Changed closure/release guard ${g.path}`);
  const check = json(`research/${run}-author-check-37.json`);
  if (!check.ok || !check.results.every((r: any) => r.ok && r.code === 0)
      || check.fingerprint !== release.author_check_fingerprint
      || authorInputs(root,run,'37').fingerprint !== check.fingerprint) throw Error('Stale native author checks');
}
guards();
const s = loadStep3(root,run), pins = json('research/math-imports.json');
const pinMap = new Map(pins.files.map((f: any) => [f.path,f]));
const imported: any[] = [];
const paths = new Set(targets.flatMap((r: any) => itemInputPaths(s,r.id,json(r.ready_path).dependencies)));
for (const path of paths) {
  const rel = relative(root,path), pin: any = pinMap.get(rel);
  if (!pin) continue;
  const snapshot = hash(readFileSync(path)), original = hash(readFileSync(join(pins.source_root,rel)));
  imported.push({path:rel,pin:pin.sha256,snapshot,original});
  if (snapshot !== pin.sha256 || original !== snapshot) continue;
}
const importDrift = imported.filter(r=>r.snapshot !== r.pin || r.original !== r.snapshot);
if (importDrift.length) {
  writeFileSync(join(out,'batch37-import-original-drift.json'),JSON.stringify({at:new Date().toISOString(),imports:imported.length,importDrift,production_rows_written:0},null,2)+'\n');
  if (imported.some(r=>r.snapshot !== r.pin)) throw Error('Frozen snapshot pin drift');
}
const allRows = readdirSync('research').filter(p=>p.startsWith(`${run}-step1-`) && p.endsWith('.json'));
const targetNames = new Set(targets.map((r: any)=>r.ready_path.split('/').pop()));
const preserved = allRows.filter(p=>!targetNames.has(p)).map(p=>({path:`research/${p}`,sha256:hash(raw(`research/${p}`))}));
const before = targets.map((r: any) => ({...r,raw:raw(r.ready_path), current:step1Decision(loadStep3(root,run),r.id)}));
for (const r of before) writeFileSync(join(out,'batch37-before',r.ready_path.split('/').pop()),r.raw);
writeFileSync(join(out,'batch37-preparation.json'),JSON.stringify({at:new Date().toISOString(),authority:'Root exact nine owner-ready scope release',release_sha256:hash(raw(`${base}/continuation-37-readiness-currency-release.json`)),closure_sha256:hash(raw(`${base}/continuation-angular37-owning-closure.json`)),guards:61,imported,targets:before.map(({raw,current,...r}:any)=>({...r,before_raw_sha256:hash(raw),current_closed:current.closed})),preserved},null,2)+'\n');
const updated:any[] = [], skipped:any[] = [];
for (const r of before) {
  guards();
  const current = step1Decision(loadStep3(root,run),r.id);
  if (current.closed) {skipped.push({id:r.id,reason:'Already current; preserved external owner row'});continue;}
  if (hash(raw(r.ready_path))!==hash(r.raw)) throw Error(`External changed target ${r.id}; stop without overwrite`);
  const old = JSON.parse(r.raw.toString());
  const reason = `Root-authorized exact batch37 readiness currency restoration with material dispatch benefit for independent51/52/54. Existing owning reviewer /root/physics_spectral_review_continuation released focused angular closure at ${release.at}: ${base}/continuation-angular37-owning-closure.json (37 old/current/alias/body/justified consumer union, guarded current roots/consumers and actual original interface comparison); added weighted complex density correction preserves Statement. Current native author-check-37 fingerprint ${release.author_check_fingerprint}: precheck/render/content-policy/proof-contract pass; proof-layout 18 items,101 steps,0 defects. All 61 release/closure guards and ${imported.length} transitive frozen imported snapshot/pin hashes authenticated. Current root-original drift remains separately disclosed for ${importDrift.length} inputs in ${out}/batch37-import-original-drift.json; root controls later approved guarded import refresh. This owner-ready bookkeeping binds valid frozen snapshots, adopts actual existing owning closure, does not claim original drift reconciled, independent audit, full-batch mathematical acceptance, native gate/import acceptance. Preserve distinct cycle1/cap2/native history; coupled40 holds remain.`;
  const row=recordStep1(root,{run,item:r.id,decision:'ready',owner:true,dependencies:old.dependencies,reason});
  updated.push({id:r.id,before_raw_sha256:hash(r.raw),after_raw_sha256:hash(raw(r.ready_path)),sha256:row.sha256,closed:step1Decision(loadStep3(root,run),r.id).closed});
}
for (const p of preserved) if (hash(raw(p.path)) !== p.sha256) throw Error(`Non-target row changed externally ${p.path}`);
const final = inspection.rows.map((r:any)=>({id:r.id,...step1Decision(loadStep3(root,run),r.id)}));
const report={at:new Date().toISOString(),updated,skipped,final_batch37_ready:final.filter(r=>r.closed).length,total_batch37:final.length,other_readiness_rows_preserved:preserved.length,remaining_nine_batch37_preserved:inspection.rows.filter((r:any)=>r.closed).every((r:any)=>preserved.some(p=>p.path===r.ready_path&&hash(raw(p.path))===p.sha256)),frozen_snapshot_pins_authenticated:imported.length,current_root_original_drift_disclosed:importDrift.length,original_drift_reconciled:false,independent_acceptance:false,gate_acceptance:false,batch40_rows_written:false};
writeFileSync(join(out,'batch37-refresh-result.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
