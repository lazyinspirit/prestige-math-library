import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { recoverStep7Impact } from './step7-impact-recovery.mjs';
import { advanceImpact, digest, packPath, workerLabel, workerReport, workflowDir, impactProgressPath } from './step7-workflow.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { MODELS } from './models.mjs';
import { freezeFrontier } from './step7-rounds.mjs';

const reason = 'Corrected reference edges previously propagated as proof dependencies.';
function fixture(t, baseGate = false) {
  const repo = mkdtempSync(join(tmpdir(), 'step7-impact-recovery-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const run = 'demo', phase = baseGate ? 'gate' : 'impact-initial', active = baseGate ? phase : `${phase}-pass-3`;
  const stateDir = join(repo, '.autopilot', run), dir = workflowDir(repo, run);
  const dispatchDir = join(repo, 'research', `${run}-dispatch`);
  for (const path of [stateDir, dir, dispatchDir, join(repo, 'items')]) mkdirSync(path, { recursive: true });
  const save = (path, value) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
  const current = {};
  save(join(dir,'frontier.json'),freezeFrontier({run,batches:[{id:'1',items:['thm-source','thm-unrelated']}]}));
  for (const id of ['thm-source', 'thm-unrelated']) {
    const text = `---\nid: ${id}\nkind: theorem\ndeps: []\n---\nA mathematical argument.\n`;
    writeFileSync(join(repo, 'items', `${id}.md`), text); current[id] = itemHashGuard(text);
  }
  const stage = baseGate ? '7.9-repair' : '7.2-impact';
  const state = { run, paused: true, stage, stages: { [stage]: { doneAt: null } }, dispatches: {} };
  const statePath = join(stateDir, 'state.json'); save(statePath, state);
  const passes = baseGate ? [phase] : [phase, `${phase}-pass-2`, active];
  const progressPath = impactProgressPath(repo, run, phase, 1);
  save(progressPath, { version: 2, run, phase, round: 1, passes,work_order:passes.map(phase=>({kind:'frontier',phase})), activePhase: active, complete: false });
  for (const pass of passes) {
    save(packPath(repo, run, pass, 1), { version: 2, run, phase: pass, round: 1, units: ['1', '2', '3'],
      before: current, seeds: ['thm-source'], ...(baseGate ? { failures: [{ id: 'precheck', stderr: 'FAIL thm-source: missing contract' }] } : {}),
      assignments: { '1': ['thm-source'], '2': pass === active ? ['thm-unrelated'] : [], '3': [] } });
    for (const unit of ['1', '2', '3']) {
      const path = workerReport(repo, run, pass, 1, unit);
      writeFileSync(path.replace(/\.json$/, '.task.md'), `Historical task ${pass}/${unit}`);
      if (pass !== active) save(path, {});
      else save(join(dispatchDir, `alpha-repair-${workerLabel(pass, 1, unit)}.result.json`), { ok: false, label: workerLabel(pass, 1, unit) });
    }
    if (pass !== active) save(join(dir, `${pass}-1-collected.json`), { evidence: {}, reviews: [], changed: [], post: current, downstream: [], ledger_updates: [], created_items: [] });
  }
  save(join(dir, 'initial-1-collected.json'), { evidence: {}, reviews: [], downstream: [] });
  if (baseGate) save(join(dir, 'certification.json'), { phase: 'impact-repeat', round: 3, preserved: 'Step 7.7 certification' });
  return { repo, run, phase, active, dir, stateDir, statePath, state, progressPath, dispatchDir, save,
    recover: () => recoverStep7Impact({ repo, run, stateDir, reason }) };
}

test('supersession preserves old evidence and generates fresh disjoint assignments without false candidates', t => {
  const f = fixture(t);
  const paths = [f.statePath, ...readdirSync(f.dir).filter(name => !name.endsWith('-progress.json')).map(name => join(f.dir, name)),
    ...readdirSync(f.dispatchDir).map(name => join(f.dispatchDir, name))];
  const before = new Map(paths.map(path => [path, readFileSync(path, 'utf8')]));
  const result = f.recover();
  assert.equal(result.superseded, f.active);
  assert.equal(result.pack.phase, `${f.phase}-pass-4`);
  assert.deepEqual(Object.values(result.pack.assignments).flat(), ['thm-source']);
  const progress = JSON.parse(readFileSync(f.progressPath, 'utf8'));
  assert.deepEqual(progress.passes, [f.phase, `${f.phase}-pass-2`, `${f.phase}-pass-4`]);
  assert.equal(progress.superseded[0].phase, f.active);
  assert.equal(progress.superseded[0].pack_sha256, digest(before.get(packPath(f.repo, f.run, f.active, 1))));
  for (const [path, bytes] of before) assert.equal(readFileSync(path, 'utf8'), bytes, path);
  const progressBytes = readFileSync(f.progressPath, 'utf8');
  assert.deepEqual(f.recover(), result);
  assert.equal(readFileSync(f.progressPath, 'utf8'), progressBytes);
});

for (const [name, change, message] of [
  ['unpaused', f => { f.state.paused = false; f.save(f.statePath, f.state); }, /paused/],
  ['live controller', f => f.save(join(f.stateDir, 'controller.lock'), { pid: process.pid }), /still alive/],
  ['active worker', f => { f.state.dispatches.other = { startedAt: 'now' }; f.save(f.statePath, f.state); }, /active or unresolved/],
  ['shared metadata writer', f => mkdirSync(join(f.repo, '.autopilot', 'step7-shared-write.lock')), /metadata lock/],
  ['completed stage', f => { f.state.stages['7.2-impact'].doneAt = 'now'; f.save(f.statePath, f.state); }, /already completed/],
  ['successful archived attempt', f => f.save(join(f.dispatchDir, `alpha-repair-${workerLabel(f.active, 1, '1')}.attempt-1.result.json`), { ok: true }), /successful dispatch/],
  ['successful state record', f => { f.state.dispatches.old = { label: workerLabel(f.active, 1, '1'), lastExitOk: true }; f.save(f.statePath, f.state); }, /worker succeeded/],
  ['worker report', f => f.save(workerReport(f.repo, f.run, f.active, 1, '1'), {}), /worker report/],
  ['collected evidence', f => f.save(join(f.dir, `${f.active}-1-collected.json`), {}), /collection or certification/],
  ['certified wave', f => f.save(join(f.dir, `certification-${f.phase}-1.json`), {}), /collection or certification/],
  ['partial item edit', f => writeFileSync(join(f.repo, 'items', 'thm-source.md'), '---\nid: thm-source\n---\nChanged argument.\n'), /items changed/],
  ['changed prior evidence', f => f.save(join(f.dir, `${f.phase}-1-collected.json`), { evidence: { [f.statePath]: 'wrong' } }), /evidence changed/],
]) test(`recovery refuses ${name} without altering progress`, t => {
  const f = fixture(t); change(f);
  const before = readFileSync(f.progressPath, 'utf8');
  assert.throws(f.recover, message);
  assert.equal(readFileSync(f.progressPath, 'utf8'), before);
});

test('a recorded supersession can finish after interruption without discarding replacement work', t => {
  const f = fixture(t), first = f.recover();
  const resultPath = join(f.dir, `${f.active}-1-recovery-result.json`);
  rmSync(resultPath);
  const before = readFileSync(f.progressPath, 'utf8');
  const resumed = f.recover();
  assert.equal(resumed.superseded, f.active);
  assert.deepEqual(resumed.passes, first.passes);
  assert.equal(readFileSync(f.progressPath, 'utf8'), before);
});

test('a crash between supersession recording and advancement resumes the same replacement', t => {
  const f = fixture(t), first = f.recover();
  const replacement = first.pack.phase;
  const progress = JSON.parse(readFileSync(f.progressPath, 'utf8'));
  progress.passes = progress.passes.slice(0, -1);
  progress.activePhase = progress.passes.at(-1);
  f.save(f.progressPath, progress);
  rmSync(join(f.dir, `${f.active}-1-recovery-result.json`));
  rmSync(packPath(f.repo, f.run, replacement, 1));
  for (const unit of ['1', '2', '3'])
    rmSync(workerReport(f.repo, f.run, replacement, 1, unit).replace(/\.json$/, '.task.md'));
  const resumed = f.recover();
  assert.deepEqual(resumed, first);
  assert.equal(JSON.parse(readFileSync(f.progressPath, 'utf8')).superseded.length, 1);
});

test('repeated recovery rejects tampering with the preserved failed pass', t => {
  const f = fixture(t); f.recover();
  writeFileSync(packPath(f.repo, f.run, f.active, 1), '{}\n');
  assert.throws(f.recover, /evidence changed/);
});

test('failed initial gate repair is replaced without altering its evidence or prior certification', t => {
  const f = fixture(t, true);
  const paths = [f.statePath, ...readdirSync(f.dir).filter(name => !name.endsWith('-progress.json')).map(name => join(f.dir, name)),
    ...readdirSync(f.dispatchDir).map(name => join(f.dispatchDir, name))];
  const before = new Map(paths.map(path => [path, readFileSync(path, 'utf8')]));
  const result = f.recover();
  assert.equal(result.superseded, 'gate');
  assert.equal(result.pack.phase, 'gate-pass-2');
  assert.deepEqual(Object.values(result.pack.assignments).flat(), ['thm-source']);
  const progress = JSON.parse(readFileSync(f.progressPath, 'utf8'));
  assert.deepEqual(progress.passes, ['gate-pass-2']);
  assert.equal(progress.activePhase, 'gate-pass-2');
  assert.equal(progress.repairBasePhase, 'gate-pass-2');
  assert.equal(progress.superseded[0].phase, 'gate');
  for (const [path, bytes] of before) assert.equal(readFileSync(path, 'utf8'), bytes, path);
  assert.deepEqual(f.recover(), result);
});

test('later certification can replace the latest alias without invalidating recovery history', t => {
  const f = fixture(t, true), latest = join(f.dir, 'certification.json');
  const original = JSON.parse(readFileSync(latest, 'utf8'));
  const result = f.recover();
  const progress = JSON.parse(readFileSync(f.progressPath, 'utf8'));
  assert.equal(Object.hasOwn(progress.superseded[0].evidence, latest), false);
  const snapshot = join(f.dir, 'gate-1-certification-before-supersession.json');
  assert.deepEqual(JSON.parse(readFileSync(snapshot, 'utf8')), original);
  f.save(latest, { phase: 'gate', round: 1, repaired: true });
  assert.deepEqual(f.recover(), result);
  f.save(snapshot, { changed: true });
  assert.throws(f.recover, /evidence changed/);
});

test('recovered gate reports close after a certification alias refresh without reviving abandoned seeds or assignments', t => {
  const f = fixture(t, true);
  const unrelated = '---\nid: thm-unrelated\nkind: theorem\ndeps: [thm-source]\n---\nA sound unchanged consumer.\n';
  writeFileSync(join(f.repo, 'items', 'thm-unrelated.md'), unrelated);
  const originalPath = packPath(f.repo, f.run, 'gate', 1);
  const original = JSON.parse(readFileSync(originalPath, 'utf8'));
  original.before['thm-unrelated'] = itemHashGuard(unrelated);
  f.save(originalPath, original);
  const { pack } = f.recover();
  const evidence = { reason: 'The assigned diagnostic was examined and the existing mathematics remains sound.',
    uncertain: false, familiar: true, source_urls: [] };
  for (const unit of pack.units) {
    f.save(workerReport(f.repo, f.run, pack.phase, 1, unit), {
      run: f.run, phase: pack.phase, round: 1, unit, input_sha256: digest(pack),
      decisions: [], created_items: [], downstream: [], ledger_updates: [],
      reviews: pack.assignments[unit].map(id => ({ id, ...evidence, disposition: 'unaffected',
        post_sha256: pack.before[id], review_context_sha256: digest({ version: 2, carriers: [[id, pack.before[id]]] }) })),
      gate_resolutions: pack.gateAssignments[unit].map(row => ({ index: row.index, ...evidence })),
    });
    f.save(join(f.dispatchDir, `alpha-repair-${workerLabel(pack.phase, 1, unit)}.result.json`), {
      ok: true, run: f.run, role: 'alpha-repair', label: workerLabel(pack.phase, 1, unit), model: MODELS.sol.id, provider_effort: 'xhigh',
    });
  }
  f.save(join(f.dir, 'certification.json'), { phase: 'gate', round: 1, refreshed: true });
  const result = advanceImpact(f.repo, f.run, 'gate', 1);
  assert.equal(result.complete, true);
  assert.deepEqual(result.passes, ['gate-pass-2']);
  const closed = JSON.parse(readFileSync(join(f.dir, 'gate-1-closed.json'), 'utf8'));
  assert.deepEqual(closed.reviews.map(row => row.id), ['thm-source']);
  assert.deepEqual(closed.downstream, []);
  assert.equal(existsSync(packPath(f.repo, f.run, 'gate-pass-3', 1)), false);
});

test('initial gate recovery safely infers the engine default when progress has not been written', t => {
  const f = fixture(t, true);
  rmSync(f.progressPath);
  const result = f.recover();
  const progress = JSON.parse(readFileSync(f.progressPath, 'utf8'));
  assert.deepEqual(progress.passes, ['gate-pass-2']);
  assert.equal(progress.repairBasePhase, 'gate-pass-2');
  assert.deepEqual(f.recover(), result);
});

for (const [name, change, message] of [
  ['continuation pack', f => f.save(packPath(f.repo, f.run, 'gate-pass-3', 1), {}), /continuation evidence/],
  ['successful worker', f => f.save(join(f.dispatchDir, `alpha-repair-${workerLabel('gate', 1, '1')}.result.json`), { ok: true }), /successful dispatch/],
  ['existing collection', f => f.save(join(f.dir, 'gate-1-collected.json'), {}), /collection or certification/],
  ['changed mathematics', f => writeFileSync(join(f.repo, 'items', 'thm-source.md'), '---\nid: thm-source\n---\nChanged.\n'), /items changed/],
]) test(`inferred gate progress still refuses ${name}`, t => {
  const f = fixture(t, true); rmSync(f.progressPath); change(f);
  assert.throws(f.recover, message);
  assert.equal(existsSync(f.progressPath), false);
});

test('missing progress does not infer an impact continuation', t => {
  const f = fixture(t); rmSync(f.progressPath);
  assert.throws(f.recover, /missing continuation progress/);
  assert.equal(existsSync(f.progressPath), false);
});

for (const [name, change, message] of [
  ['unpaused run', f => { f.state.paused = false; f.save(f.statePath, f.state); }, /paused/],
  ['live controller', f => f.save(join(f.stateDir, 'controller.lock'), { pid: process.pid }), /still alive/],
  ['active worker', f => { f.state.dispatches.worker = { startedAt: 'now' }; f.save(f.statePath, f.state); }, /active or unresolved/],
  ['successful dispatch', f => f.save(join(f.dispatchDir, `alpha-repair-${workerLabel('gate', 1, '1')}.result.json`), { ok: true }), /successful dispatch/],
  ['worker report', f => f.save(workerReport(f.repo, f.run, 'gate', 1, '1'), {}), /worker report/],
  ['collection', f => f.save(join(f.dir, 'gate-1-collected.json'), {}), /collection or certification/],
  ['gate certification', f => f.save(join(f.dir, 'certification-gate-1.json'), {}), /collection or certification/],
  ['latest gate certification', f => f.save(join(f.dir, 'certification.json'), { phase: 'gate', round: 1 }), /already certified/],
  ['partial repairs', f => writeFileSync(join(f.repo, 'items', 'thm-source.md'), '---\nid: thm-source\n---\nChanged proof.\n'), /items changed/],
]) test(`initial gate recovery refuses ${name}`, t => {
  const f = fixture(t, true); change(f);
  const before = readFileSync(f.progressPath, 'utf8');
  assert.throws(f.recover, message);
  assert.equal(readFileSync(f.progressPath, 'utf8'), before);
});

for (const checkpoint of ['before pack', 'after pack', 'after progress'])
  test(`initial gate recovery resumes interruption ${checkpoint}`, t => {
    const f = fixture(t, true), first = f.recover();
    rmSync(join(f.dir, 'gate-1-recovery-result.json'));
    if (checkpoint !== 'after progress') {
      const progress = JSON.parse(readFileSync(f.progressPath, 'utf8'));
      progress.passes = ['gate']; progress.activePhase = 'gate'; delete progress.repairBasePhase;
      f.save(f.progressPath, progress);
    }
    if (checkpoint === 'before pack') {
      rmSync(packPath(f.repo, f.run, 'gate-pass-2', 1));
      for (const unit of ['1', '2', '3']) rmSync(workerReport(f.repo, f.run, 'gate-pass-2', 1, unit).replace(/\.json$/, '.task.md'));
    }
    const resumed = f.recover();
    assert.equal(resumed.superseded, 'gate');
    assert.deepEqual(resumed.passes, first.passes);
    const progress = JSON.parse(readFileSync(f.progressPath, 'utf8'));
    assert.equal(progress.superseded.length, 1);
    assert.equal(progress.repairBasePhase, 'gate-pass-2');
    assert.deepEqual(Object.values(JSON.parse(readFileSync(packPath(f.repo, f.run, 'gate-pass-2', 1), 'utf8')).assignments).flat(), ['thm-source']);
    assert.deepEqual(f.recover(), resumed);
  });
