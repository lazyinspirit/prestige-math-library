#!/usr/bin/env node
// slots.test.mjs — the concurrency pool actually bounds concurrency.
//
//   node tools/slots.test.mjs
//
// This exists because tools/slots.mjs is the extracted form of judge-sweep's
// scheduler, and "extracted verbatim in behaviour" is a claim, not a fact, until
// something checks it. The properties that matter are the ones a lane cap is
// bought for: never more than `cap` holders at once, a released slot is reusable,
// a crashed holder's slot is reclaimed rather than lost, and one process's
// cleanup never touches another's slots.

import { mkdtempSync, rmSync, mkdirSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { createSlotPool } from './slots.mjs';

let failures = 0;
const check = (name, condition, detail = '') => {
  if (condition) {
    console.log(`[ ok ] ${name}`);
  } else {
    failures += 1;
    console.log(`[FAIL] ${name}${detail ? ` — ${detail}` : ''}`);
  }
};

const root = mkdtempSync('/tmp/slots-test-');

// ---- 1. the cap is never exceeded under contention ---------------------------

{
  const CAP = 3;
  const WORKERS = 12;
  const pool = createSlotPool({ root: `${root}/a`, caps: { lane: CAP }, label: 'test' });
  let live = 0;
  let peak = 0;
  let completed = 0;

  await Promise.all(Array.from({ length: WORKERS }, async () => {
    const release = await pool.acquire('lane');
    live += 1;
    peak = Math.max(peak, live);
    // Yield so overlapping holders genuinely coexist rather than running serially.
    await new Promise((resolve) => setTimeout(resolve, 20));
    live -= 1;
    completed += 1;
    release();
  }));

  check(`${WORKERS} workers, cap ${CAP}: peak concurrency never exceeded the cap`, peak <= CAP, `peak was ${peak}`);
  check('every worker eventually acquired a slot', completed === WORKERS, `${completed}/${WORKERS}`);
  check('all slots released at the end', pool.held('lane') === 0, `${pool.held('lane')} still held`);
  check('the cap was actually reached (the test exercised contention)', peak === CAP, `peak was ${peak}`);
}

// ---- 2. a slot is genuinely exclusive ---------------------------------------

{
  const pool = createSlotPool({ root: `${root}/b`, caps: { solo: 1 }, label: 'test' });
  const first = await pool.acquire('solo');
  let secondAcquired = false;
  const pending = pool.acquire('solo').then((release) => { secondAcquired = true; return release; });
  await new Promise((resolve) => setTimeout(resolve, 300));
  check('a cap-1 lane blocks the second acquirer while the first holds', !secondAcquired);
  first();
  const release = await pending;
  check('the second acquirer proceeds once the first releases', secondAcquired);
  release();
  check('cap-1 lane empty after release', pool.held('solo') === 0);
}

// ---- 3. a crashed holder's slot is reclaimed --------------------------------

{
  const laneRoot = `${root}/c`;
  const dir = `${laneRoot}/lane`;
  mkdirSync(dir, { recursive: true });
  // Simulate a killed holder: a slot directory that never released and whose
  // heartbeat is long dead. mtime is set into the past via a zero staleMs pool.
  mkdirSync(`${dir}/slot-0`);
  writeFileSync(`${dir}/slot-0/holder.json`, '{"lane":"lane","pid":999999}\n');

  const strict = createSlotPool({ root: laneRoot, caps: { lane: 1 }, label: 'test', staleMs: 10 });
  await new Promise((resolve) => setTimeout(resolve, 50));
  const release = await strict.acquire('lane');
  check('a stale slot is reclaimed rather than blocking the lane forever', true);
  release();

  // And the converse: a FRESH foreign slot must not be stolen.
  const fresh = createSlotPool({ root: `${root}/d`, caps: { lane: 1 }, label: 'test' });
  mkdirSync(`${root}/d/lane`, { recursive: true });
  mkdirSync(`${root}/d/lane/slot-0`);
  let stolen = false;
  fresh.acquire('lane').then(() => { stolen = true; });
  await new Promise((resolve) => setTimeout(resolve, 400));
  check('a fresh foreign slot is NOT reclaimed', !stolen);
}

// ---- 4. releaseAll only releases this pool's own slots ----------------------

{
  const shared = `${root}/e`;
  const mine = createSlotPool({ root: shared, caps: { lane: 4 }, label: 'test' });
  const theirs = createSlotPool({ root: shared, caps: { lane: 4 }, label: 'test' });
  const a = await mine.acquire('lane');
  await theirs.acquire('lane');
  check('two pools on one root hold two distinct slots', mine.held('lane') === 2, `${mine.held('lane')}`);
  mine.releaseAll();
  check("releaseAll left the other pool's slot alone", mine.held('lane') === 1, `${mine.held('lane')} held`);
  void a;
}

rmSync(root, { recursive: true, force: true });
console.log(failures ? `\n${failures} FAILURE(S)` : '\nall slot-pool properties hold');
process.exit(failures ? 1 : 0);
