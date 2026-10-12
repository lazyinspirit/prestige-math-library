// Read-only diagnostic. Run from physics cwd; does not tick the controller or attempt gates.
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { stages } from '../../../../tools/physics-autopilot/stages/mathlib.mts';
import { covered } from '../../../../tools/physics-autopilot/src/coverage.mts';
import { loadStep3 } from '../../../../tools/physics-support/frontier-snapshot.mjs';
import { step1Decision } from '../../../../tools/physics-support/step1-decisions.mjs';
import { computeRunBatchDependencyLevels } from '../../../../tools/physics-support/batch-dependency-levels.mjs';
const repo = process.cwd(), run = 'physics-cm-qm-gr-79-2026-10-11';
const statePath = join(repo, '.physics-autopilot', run, 'state.json');
const before = readFileSync(statePath, 'utf8'), state = JSON.parse(before);
const ctx = { repo, run, dispatchDir:join(repo,'research',`${run}-dispatch`) }, stage:any = stages.find(s => s.id === '1-scaffold');
const coverage = covered(ctx.dispatchDir,stage.pattern,{});
const graph = computeRunBatchDependencyLevels(repo, run);
const recorded = JSON.parse(readFileSync(join(repo, 'research', `${run}-batch-dependency-levels.json`), 'utf8'));
const snapshot = loadStep3(repo, run);
const open = [...snapshot.items].flatMap(([id, entry]:any) => {
  const decision = step1Decision(snapshot, id);
  return decision.closed ? [] : [{ id, batch: entry.page.batch, page: entry.page.id,
    category: decision.row?.decision === 'escalated' ? 'owner-hold' : decision.row ? 'stale-ready' : 'missing-receipt',
    reason: decision.reason, receipt: decision.row ?? null }];
});
const rows = graph.batches.map(row => {
  const artifacts = stage.artifacts(ctx, row.batch);
  const absent = artifacts.filter((p:string) => !existsSync(join(repo,p)));
  const dispatch = state.dispatches[`1-scaffold:batch-${row.batch}`];
  return { ...row, covered: coverage.has(row.batch),
    active: !!dispatch?.startedAt && !dispatch?.endedAt, absent,
    open_items: open.filter(item => item.batch === row.batch).map(item => item.id) };
});
const byBatch = new Map(rows.map(row => [row.batch,row]));
function ancestors(batch:string, out=new Set<string>()) {
  for(const supplier of byBatch.get(batch)?.requires ?? []) if(!out.has(supplier)) {
    out.add(supplier); ancestors(supplier,out);
  }
  return [...out].sort((a,b)=>Number(a)-Number(b));
}
const completed = new Set(rows.filter(row=>row.covered && !row.absent.length && !row.active).map(row=>row.batch));
const pending = rows.filter(row=>!row.covered).map(row=>({...row,
  blockers: ancestors(row.batch).filter(batch=>!completed.has(batch)),
  dispatchable: !row.active && ancestors(row.batch).every(batch=>completed.has(batch)) }));
console.log(JSON.stringify({ at: new Date().toISOString(), run, stage:state.stage,
  state_sha256: createHash('sha256').update(before).digest('hex'),
  state_unchanged_during_scan: before === readFileSync(statePath,'utf8'),
  state_mtime:statSync(statePath).mtime.toISOString(), levels_current:JSON.stringify(graph)===JSON.stringify(recorded),
  successful_coverage:rows.filter(row=>row.covered).length, native_complete:completed.size,
  active:rows.filter(row=>row.active).map(row=>row.batch),
  receipt_counts: Object.fromEntries(['stale-ready','owner-hold','missing-receipt'].map(k=>[k,open.filter(r=>r.category===k).length])),
  pending, covered_but_incomplete:rows.filter(row=>row.covered&&row.absent.length), open },null,2));
