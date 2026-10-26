import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, readdirSync, symlinkSync, chmodSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawn } from 'node:child_process';
import { retireUnknownStep1Dispatch, unknownStep1DispatchRetired } from '../src/unknown-step1-dispatch.mts';
import { scanAppendProcesses, appendFrontier } from '../src/frontier-append.mts';
import { covered, pending } from '../src/coverage.mts';

function fixture(t: any) {
  const repo = mkdtempSync(join(tmpdir(), 'physics-unknown-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const stateDir = join(repo, '.physics-autopilot', 'demo'), dir = join(repo, 'research', 'demo-dispatch');
  mkdirSync(stateDir, { recursive: true }); mkdirSync(dir, { recursive: true });
  const key = '1-scaffold:batch-92';
  const row = { stage: '1-scaffold', role: 'beta', label: 'batch-92', covers: ['92'], attempt: 1, attempts: 1,
    startedAt: '2020-01-01T00:00:00.000Z', endedAt: null, lastExitOk: null };
  const stamp = { doneAt: '2020-01-01', gatesPassedAt: '2020-01-01' };
  const state = { version: 1, run: 'demo', paused: true, stage: '1-scaffold', finishedAt: null,
    dispatches: { [key]: row }, stages: { '1-drift': stamp, '1-drift-apply': stamp, '1-scaffold': {} } };
  const save = () => writeFileSync(join(stateDir, 'state.json'), JSON.stringify(state)); save();
  for (const suffix of ['', '.attempt-1']) writeFileSync(join(dir, `beta-batch-92${suffix}.prompt.md`), 'Original real author assignment.');
  const options = { repo, run: 'demo', stateDir, key, reason: 'Root observed the historical author process is absent; unit remains owed.', scan: scanAppendProcesses };
  return { ...options, options, state, row, save, dir };
}

test('only administrative drain changes; raw history/prompts and owed coverage remain exact', t => {
  const f = fixture(t), before = readFileSync(join(f.stateDir, 'state.json'));
  const observed = retireUnknownStep1Dispatch(f.options);
  assert.equal(observed.execution_outcome, 'unknown'); assert.equal(observed.coverage_credit, false);
  assert.equal(unknownStep1DispatchRetired(f.repo, f.run, f.stateDir, f.key, f.row), true);
  assert.deepEqual(readFileSync(join(f.stateDir, 'state.json')), before);
  assert.deepEqual(pending(['92'], covered(f.dir, /beta-batch/)), ['92']);
  assert.equal(readdirSync(f.dir).filter(n => n.endsWith('.result.json')).length, 0);
  assert.throws(() => retireUnknownStep1Dispatch(f.options), /already exists/);
  // Append passes the ordinary drain guard and reaches its next real validation.
  assert.throws(() => appendFrontier({ ...f.options, pairs: ['new-pair'] } as any), /contiguous existing one-pair manifests required/);
});

test('unretired orphan still blocks append', t => {
  const f = fixture(t);
  assert.throws(() => appendFrontier({ ...f.options, pairs: ['new-pair'] } as any), /dispatches not drained/);
});

for (const suffix of ['', '.attempt-1', '.attempt-1.replay-2']) test(`refuses any native result ${suffix}`, t => {
  const f = fixture(t); writeFileSync(join(f.dir, `beta-batch-92${suffix}.result.json`), '{}');
  assert.throws(() => retireUnknownStep1Dispatch(f.options), /result exists/);
});

test('refuses paused-state, other open author, symlink and live controller defects', t => {
  const f = fixture(t); f.state.paused = false; f.save();
  assert.throws(() => retireUnknownStep1Dispatch(f.options), /paused/);
  f.state.paused = true; f.state.dispatches['1-scaffold:batch-93'] = { ...f.row, label: 'batch-93', covers: ['93'] }; f.save();
  assert.throws(() => retireUnknownStep1Dispatch(f.options), /other dispatches/);
  delete f.state.dispatches['1-scaffold:batch-93']; f.save();
  writeFileSync(join(f.stateDir, 'controller.lock'), JSON.stringify({ pid: process.pid }));
  assert.throws(() => retireUnknownStep1Dispatch(f.options), /live controller/);
  rmSync(join(f.stateDir, 'controller.lock'));
  const p = join(f.dir, 'beta-batch-92.prompt.md'); rmSync(p); symlinkSync(join(f.dir, 'beta-batch-92.attempt-1.prompt.md'), p);
  assert.throws(() => retireUnknownStep1Dispatch(f.options), /regular file/);
});

test('actual live run writer is refused by production process scan', async t => {
  const f = fixture(t);
  const child = spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)', '--', '--run', 'demo'], { cwd: f.repo });
  t.after(() => child.kill()); await new Promise<void>(resolve => child.once('spawn', resolve));
  assert.throws(() => retireUnknownStep1Dispatch(f.options), /writers must be absent/);
});

test('creation rechecks process absence after acquiring controller lock', t => {
  const f = fixture(t); let calls = 0;
  assert.throws(() => retireUnknownStep1Dispatch({ ...f.options, scan: () => ({ controller: [], preflight: [], writer: ++calls > 1 ? [123] : [] }) }), /writers must be absent/);
  assert.equal(unknownStep1DispatchRetired(f.repo, f.run, f.stateDir, f.key, f.row), false);
});

test('changed row, prompt, receipt or newly arrived result cannot retire history', t => {
  const f = fixture(t); retireUnknownStep1Dispatch(f.options);
  assert.equal(unknownStep1DispatchRetired(f.repo, f.run, f.stateDir, f.key, { ...f.row, attempt: 2 }), false);
  const prompt = join(f.dir, 'beta-batch-92.prompt.md'); writeFileSync(prompt, 'Changed');
  assert.throws(() => unknownStep1DispatchRetired(f.repo, f.run, f.stateDir, f.key, f.row), /prompt evidence changed/);
  writeFileSync(prompt, 'Original real author assignment.');
  const result = join(f.dir, 'beta-batch-92.attempt-2.result.json'); writeFileSync(result, '{}');
  assert.throws(() => unknownStep1DispatchRetired(f.repo, f.run, f.stateDir, f.key, f.row), /result exists/); rmSync(result);
  const receiptDir = join(f.stateDir, 'unknown-step1-dispatch-retirements');
  const receipt = join(receiptDir, readdirSync(receiptDir).find(n => n.endsWith('.json'))!);
  chmodSync(receipt, 0o600);
  writeFileSync(receipt, readFileSync(receipt, 'utf8').replace('Root observed', 'Root modified'));
  assert.throws(() => unknownStep1DispatchRetired(f.repo, f.run, f.stateDir, f.key, f.row), /receipt changed/);
});

test('actual controller process is refused, and retirement never waives append writer drain', async t => {
  const f = fixture(t);
  const controller = spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)', '--', 'tools/physics-autopilot/bin/autopilot.mts', 'start', '--run', 'demo'], { cwd: f.repo });
  t.after(() => controller.kill()); await new Promise<void>(resolve => controller.once('spawn', resolve));
  assert.throws(() => retireUnknownStep1Dispatch(f.options), /controller\/preflight\/writers must be absent/);
  controller.kill(); await new Promise<void>(resolve => controller.once('exit', () => resolve()));
  retireUnknownStep1Dispatch(f.options);
  const writer = spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)', '--', '--run', 'demo'], { cwd: f.repo });
  t.after(() => writer.kill()); await new Promise<void>(resolve => writer.once('spawn', resolve));
  assert.throws(() => appendFrontier({ ...f.options, pairs: ['new-pair'] } as any), /controller\/preflight\/writers must be stopped and drained/);
});


test('canonical configured dispatch path works; a foreign configured directory is refused', t => {
  const f = fixture(t), config = join(f.repo, 'physics-autopilot.config.json');
  writeFileSync(config, JSON.stringify({ dispatchDir: join(f.repo, 'elsewhere') }));
  assert.throws(() => retireUnknownStep1Dispatch(f.options), /custom dispatch directory/);
  writeFileSync(config, JSON.stringify({ dispatchDir: f.dir }));
  retireUnknownStep1Dispatch(f.options);
  assert.equal(unknownStep1DispatchRetired(f.repo, f.run, f.stateDir, f.key, f.row), true);
});
