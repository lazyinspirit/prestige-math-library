import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { recoverStep7Impact } from './step7-impact-recovery.mjs';
import { digest, packPath, workerLabel, workerReport, workflowDir, impactProgressPath } from './step7-workflow.mjs';
import { itemHashGuard } from './item-hash.mjs';

const reason = 'Corrected reference edges previously propagated as proof dependencies.';
function fixture(t) {
  const repo = mkdtempSync(join(tmpdir(), 'step7-impact-recovery-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const run = 'demo', phase = 'impact-initial', active = `${phase}-pass-3`;
  const stateDir = join(repo, '.autopilot', run), dir = workflowDir(repo, run);
  const dispatchDir = join(repo, 'research', `${run}-dispatch`);
  for (const path of [stateDir, dir, dispatchDir, join(repo, 'items')]) mkdirSync(path, { recursive: true });
  const save = (path, value) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
  const current = {};
  for (const id of ['thm-source', 'thm-unrelated']) {
    const text = `---\nid: ${id}\nkind: theorem\ndeps: []\n---\nA mathematical argument.\n`;
    writeFileSync(join(repo, 'items', `${id}.md`), text); current[id] = itemHashGuard(text);
  }
  const state = { run, paused: true, stage: '7.2-impact', stages: { '7.2-impact': { doneAt: null } }, dispatches: {} };
  const statePath = join(stateDir, 'state.json'); save(statePath, state);
  const passes = [phase, `${phase}-pass-2`, active];
  const progressPath = impactProgressPath(repo, run, phase, 1);
  save(progressPath, { version: 2, run, phase, round: 1, passes, activePhase: active, complete: false });
  for (const pass of passes) {
    save(packPath(repo, run, pass, 1), { version: 2, run, phase: pass, round: 1, units: ['1', '2', '3'],
      before: current, seeds: ['thm-source'], assignments: { '1': ['thm-source'], '2': pass === active ? ['thm-unrelated'] : [], '3': [] } });
    for (const unit of ['1', '2', '3']) {
      const path = workerReport(repo, run, pass, 1, unit);
      writeFileSync(path.replace(/\.json$/, '.task.md'), `Historical task ${pass}/${unit}`);
      if (pass !== active) save(path, {});
      else save(join(dispatchDir, `alpha-repair-${workerLabel(pass, 1, unit)}.result.json`), { ok: false, label: workerLabel(pass, 1, unit) });
    }
    if (pass !== active) save(join(dir, `${pass}-1-collected.json`), { evidence: {}, reviews: [], downstream: [], ledger_updates: [], created_items: [] });
  }
  save(join(dir, 'initial-1-collected.json'), { evidence: {}, reviews: [], downstream: [] });
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
