import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { holdBeforeBattery, consumePermission, recertify, recertificationArchiveDir } from '../../owner-gate-supervision.mjs';

function fixture(t, stageId = '1-drift') {
  const repo = mkdtempSync(join(tmpdir(), 'math-owner-gate-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const run = 'sample', stateDir = join(repo, '.autopilot', run);
  mkdirSync(join(repo, 'research')); mkdirSync(stateDir, { recursive: true });
  const pages = [{ id: 'a', kind: 'A', category: 'math', companion: 'a-examples', items: [] },
    { id: 'a-examples', kind: 'B', category: 'math', companion: 'a', items: [] }];
  writeFileSync(join(repo, 'research', `${run}-batch-1.pages.json`), JSON.stringify(pages));
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({ pages }));
  const ctx = { repo, run, stateDir }, stage = { id: stageId, gates: () => [] };
  const state = { paused: false, data: { run, stages: {} }, save() {
    writeFileSync(join(stateDir, 'state.json'), JSON.stringify({ ...this.data, paused: this.paused }));
  } };
  const executor = { state, inflight: new Map(), liveDispatchLabels: () => [], pipelineGroup: () => [stage],
    stageStatus: () => ({ unitsDone: true, gatesPassed: false }), reporter: { notify() {} } };
  return { ctx, stage, executor };
}

test('holds before a native battery and requires explicit supervisor attestation', t => {
  const f = fixture(t);
  holdBeforeBattery(f);
  assert.equal(f.executor.state.paused, true);
  assert.throws(() => consumePermission(f.ctx), /Missing owner/);
  assert.throws(() => recertify(f.ctx), /resolve.*escalations/);
  const receipt = recertify(f.ctx, { resolveEscalations: true });
  assert.equal(receipt.mode, 'page-planning metadata/hash-only');
  f.executor.state.paused = false;
  holdBeforeBattery(f);
  assert.equal(f.executor.state.paused, false);
  consumePermission(f.ctx);
  consumePermission(f.ctx); // Another descriptor in the same synchronous battery.
  holdBeforeBattery(f);
  assert.equal(f.executor.state.paused, true);
});

test('changed inputs invalidate permission without running a native gate', t => {
  const f = fixture(t); holdBeforeBattery(f); recertify(f.ctx, { resolveEscalations: true });
  const file = join(f.ctx.repo, 'research', 'plan-spec.json');
  writeFileSync(file, readFileSync(file, 'utf8') + '\n');
  assert.throws(() => consumePermission(f.ctx), /inputs changed/);
  f.executor.state.paused = false; holdBeforeBattery(f);
  assert.equal(f.executor.state.paused, true);
});

test('incomplete work stays dispatchable; authored gates reject empty inventory', t => {
  const f = fixture(t, '1-scaffold');
  f.executor.stageStatus = () => ({ unitsDone: false, gatesPassed: false });
  holdBeforeBattery(f); assert.equal(f.executor.state.paused, false);
  f.executor.stageStatus = () => ({ unitsDone: true, gatesPassed: false });
  holdBeforeBattery(f);
  assert.throws(() => recertify(f.ctx, { resolveEscalations: true }), /empty scaffold inventory/);
});

test('control files and final recertification cannot dirty the committed report tree', t => {
  const f = fixture(t);
  holdBeforeBattery(f);
  assert.equal(JSON.parse(readFileSync(join(f.ctx.stateDir, 'owner-gate-request.json'))).group, '1-drift');
  assert.equal(recertificationArchiveDir(f.ctx, { stages: ['1-drift'] }),
    join(f.ctx.repo, 'research', `${f.ctx.run}-dispatch`));
  assert.equal(recertificationArchiveDir(f.ctx, { stages: ['6-close-v2'] }), f.ctx.stateDir);
});
