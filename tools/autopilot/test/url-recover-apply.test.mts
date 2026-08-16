// The URL swap must be code, strict, and idempotent.
//
// WHY. url-sweep --recover finds an archived snapshot for a dead citation and
// §3.11c says "the fix is a URL swap" — but no role owned the swap: on
// frontier-15 the url-liveness gate blocked stage 1 with two recovered
// snapshots sitting unread in the artifact, and the agents licensed to edit
// the scaffold were behind the barrier the gate held shut. These tests pin
// the tool that closes that gap, and the stage-1 hook that invokes it.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

import { stages } from '../stages/mathlib.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'url-recover-apply.mjs');

const DEAD = 'https://dead.example.edu/notes.pdf';
const SNAP = 'https://web.archive.org/web/20260101000000if_/https://dead.example.edu/notes.pdf';

function fixture({ rows, coverage }: { rows: any[]; coverage: any }) {
  const dir = mkdtempSync(join(tmpdir(), 'ura-'));
  mkdirSync(join(dir, 'research'));
  writeFileSync(join(dir, 'research', 'liveness.json'), JSON.stringify({ rows }, null, 2));
  writeFileSync(join(dir, 'research', 'cov.json'), JSON.stringify(coverage, null, 2));
  return dir;
}

const run = (dir: string) => spawnSync(process.execPath,
  [TOOL, '--liveness', 'research/liveness.json', '--coverage', 'research/cov.json'],
  { cwd: dir, encoding: 'utf8', timeout: 60_000 });

const COVERAGE = { pages: [{ page: 'p', sources: [{ url: DEAD, title: 'Notes', contents: [] }] }] };

test('a recovered dead URL is swapped in place, original preserved', () => {
  const dir = fixture({
    rows: [
      { url: DEAD, ok: false, status: 0, recovered: { snapshot: SNAP } },
      { url: 'https://live.example.org/a.pdf', ok: true, status: 200 },
    ],
    coverage: COVERAGE,
  });
  const r = run(dir);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /1 swap\(s\) applied/);
  const cov = JSON.parse(readFileSync(join(dir, 'research', 'cov.json'), 'utf8'));
  const src = cov.pages[0].sources[0];
  assert.equal(src.url, SNAP);
  assert.equal(src.original_url, DEAD);
  assert.ok(src.archived.swapped_at);
  rmSync(dir, { recursive: true, force: true });
});

test('a second run is a no-op that still exits 0', () => {
  const dir = fixture({
    rows: [{ url: DEAD, ok: false, status: 0, recovered: { snapshot: SNAP } }],
    coverage: COVERAGE,
  });
  assert.equal(run(dir).status, 0);
  const once = readFileSync(join(dir, 'research', 'cov.json'), 'utf8');
  const r2 = run(dir);
  assert.equal(r2.status, 0, r2.stderr);
  assert.match(r2.stdout, /0 swap\(s\) applied, 1 already applied/);
  assert.equal(readFileSync(join(dir, 'research', 'cov.json'), 'utf8'), once, 'second run must not stack edits');
  rmSync(dir, { recursive: true, force: true });
});

test('a dead URL with no snapshot fails by name — re-sourcing is a judgment', () => {
  const dir = fixture({
    rows: [{ url: DEAD, ok: false, status: 404, recovered: null }],
    coverage: COVERAGE,
  });
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /recover-apply-unrecoverable/);
  // and the coverage file was not touched
  const cov = JSON.parse(readFileSync(join(dir, 'research', 'cov.json'), 'utf8'));
  assert.equal(cov.pages[0].sources[0].url, DEAD);
  rmSync(dir, { recursive: true, force: true });
});

test('a recovered URL cited nowhere is artifact/coverage drift, not a pass', () => {
  const dir = fixture({
    rows: [{ url: 'https://other.example.edu/x.pdf', ok: false, status: 0, recovered: { snapshot: SNAP } }],
    coverage: COVERAGE,
  });
  const r = run(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /recover-apply-missing/);
  rmSync(dir, { recursive: true, force: true });
});

// ------------------------------------------------- the sweep must not re-probe

test('url-sweep excludes declared-superseded originals from its probe queue', () => {
  // No network: every URL in the fixture is superseded or malformed, so the
  // queue is empty and the sweep exits without a single probe. The assertion
  // is on the artifact: the original is listed as superseded, not probed —
  // the exact defect was the sweep re-harvesting original_url out of the
  // file the swap had just repaired, and the stage exhausting its repair
  // round on a URL that had stopped being a citation.
  const dir = mkdtempSync(join(tmpdir(), 'usw-'));
  mkdirSync(join(dir, 'research'));
  writeFileSync(join(dir, 'research', 'cov.json'), JSON.stringify({
    pages: [{ page: 'p', sources: [{ url: SNAP, original_url: DEAD, contents: [] }] }],
  }, null, 2));
  // strip the live snapshot from the queue too, by making it the only URL and
  // asserting on counts: 2 URLs collected (SNAP + DEAD), 1 superseded => 1 probed.
  // absolute paths: url-sweep anchors relative inputs to the library REPO,
  // never to cwd, so a tmpdir fixture must be passed absolutely
  const r = spawnSync(process.execPath, [join(REPO, 'tools', 'url-sweep.mjs'),
    '--coverage', join(dir, 'research', 'cov.json'),
    '--out', join(dir, 'research', 'liveness-out.json'), '--timeout-ms', '3000'],
    { cwd: dir, encoding: 'utf8', timeout: 120_000 });
  assert.equal(r.status, 0, r.stderr);   // no --fail-on-dead: report-only
  const art = JSON.parse(readFileSync(join(dir, 'research', 'liveness-out.json'), 'utf8'));
  assert.equal(art.summary.superseded, 1);
  assert.deepEqual(art.superseded, [DEAD]);
  assert.ok(!art.rows.some((row: any) => row.url === DEAD), 'the dead original must not be probed');
  assert.ok(art.rows.some((row: any) => row.url === SNAP), 'the live snapshot must still be probed');
  rmSync(dir, { recursive: true, force: true });
});

// ---------------------------------------------------------------- the hook

test('stage 1 declares one mechanical repair round for url-liveness', () => {
  const s1: any = stages.find((s: any) => s.id === '1-scaffold');
  assert.equal(s1.maxFixRounds, 1);
  assert.equal(typeof s1.onGateFailure, 'function');
});

test('the hook ignores every other gate failure', async () => {
  const s1: any = stages.find((s: any) => s.id === '1-scaffold');
  // a ctx whose paths do not exist: if the hook acted, the spawn would fail
  // and the hook would throw. Returning quietly is the assertion.
  await s1.onGateFailure({ ctx: { run: 'nope', repo: '/nonexistent' }, failure: { id: 'validate-plan', why: '' } });
});
