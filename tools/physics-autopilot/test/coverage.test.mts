import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { stageComplete, covered, pending } from '../src/coverage.mts';

const dir = () => {
  const d = mkdtempSync(join(tmpdir(), 'ap-cov-'));
  mkdirSync(join(d, 'dispatch'), { recursive: true });
  return join(d, 'dispatch');
};
const put = (d, name, rec) => writeFileSync(join(d, `${name}.result.json`), JSON.stringify(rec));

test('one agent covering every unit completes the stage', () => {
  const d = dir();
  put(d, 'alpha-solo', { ok: true, covers: ['1', '2', '3', '4', '5', '6'] });
  const r = stageComplete(d, /^alpha-/, ['1', '2', '3', '4', '5', '6']);
  assert.equal(r.done, true, 'a count of 3 would have called this incomplete');
  assert.equal(r.mode, 'coverage');
});

test('six agents one unit each complete only at the sixth', () => {
  const d = dir();
  for (const u of ['1', '2', '3']) put(d, `alpha-g${u}`, { ok: true, covers: [u] });
  let r = stageComplete(d, /^alpha-/, ['1', '2', '3', '4', '5', '6']);
  assert.equal(r.done, false, 'a count of 3 would have advanced here');
  assert.deepEqual(r.missing, ['4', '5', '6']);
  for (const u of ['4', '5', '6']) put(d, `alpha-g${u}`, { ok: true, covers: [u] });
  r = stageComplete(d, /^alpha-/, ['1', '2', '3', '4', '5', '6']);
  assert.equal(r.done, true);
});

test('agents that all covered the same unit leave a hole a count cannot see', () => {
  const d = dir();
  for (const n of ['a', 'b', 'c']) put(d, `alpha-${n}`, { ok: true, covers: ['1'] });
  const r = stageComplete(d, /^alpha-/, ['1', '2', '3', '4', '5', '6']);
  assert.equal(r.done, false);
  assert.deepEqual(r.missing, ['2', '3', '4', '5', '6']);
});

test('a dead lane covers nothing', () => {
  const d = dir();
  put(d, 'alpha-a', { ok: true, covers: ['1', '2', '3'] });
  put(d, 'alpha-b', { ok: false, covers: ['4', '5', '6'] });
  const r = stageComplete(d, /^alpha-/, ['1', '2', '3', '4', '5', '6']);
  assert.equal(r.done, false);
  assert.deepEqual(r.missing, ['4', '5', '6']);
});

test('an unreadable result record covers nothing rather than everything', () => {
  const d = dir();
  writeFileSync(join(d, 'alpha-broken.result.json'), '{ this is not json');
  put(d, 'alpha-ok', { ok: true, covers: ['1'] });
  const r = stageComplete(d, /^alpha-/, ['1', '2']);
  assert.equal(r.done, false);
  assert.deepEqual(r.missing, ['2']);
});

test('a legacy run with no coverage declared falls back to counting', () => {
  const d = dir();
  put(d, 'beta-1', { ok: true });
  put(d, 'beta-2', { ok: true });
  const r = stageComplete(d, /^beta-/, ['1', '2'], { fallbackCount: 2 });
  assert.equal(r.done, true);
  assert.equal(r.mode, 'count');
});

test('a PARTLY migrated run is read by coverage, so an unannotated lane stalls it', () => {
  const d = dir();
  put(d, 'beta-1', { ok: true, covers: ['1'] });
  put(d, 'beta-2', { ok: true });                       // dispatched before --covers existed
  const r = stageComplete(d, /^beta-/, ['1', '2'], { fallbackCount: 2 });
  assert.equal(r.done, false, 'silently passing here is how a hole ships');
  assert.deepEqual(r.missing, ['2']);
});

test('the covers map annotates a lane that could not declare its own units', () => {
  const d = dir();
  put(d, 'beta-1', { ok: true, covers: ['1'] });
  put(d, 'beta-2', { ok: true });
  const r = stageComplete(d, /^beta-/, ['1', '2'], { coversMap: { 'beta-2': ['2'] } });
  assert.equal(r.done, true);
});

test('an empty owed set is never done — a stage that owes nothing is misconfigured', () => {
  const d = dir();
  put(d, 'x-1', { ok: true, covers: ['1'] });
  const r = stageComplete(d, /^x-/, []);
  assert.equal(r.done, false);
});

test('covered() and pending() agree with stageComplete', () => {
  const d = dir();
  put(d, 'a-1', { ok: true, covers: ['1', '2'] });
  const c = covered(d, /^a-/);
  assert.deepEqual([...c].sort(), ['1', '2']);
  assert.deepEqual(pending(['1', '2', '3'], c), ['3']);
});
