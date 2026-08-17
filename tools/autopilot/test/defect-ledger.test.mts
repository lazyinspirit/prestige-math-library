// The defect ledger's gate must be unsatisfiable by mirroring, and its rows
// must be unable to double-count.
//
// WHY. The pipeline's defect history lived in prose (78% of frontier-14's
// fatals exist only in reports), and its one hand-maintained aggregate was
// wrong by ~6x. The ledger is only worth having if (a) every confirmed_fatal
// adjudication maps to EXACTLY one row — two lanes on one defect is one
// defect; (b) the check cannot be satisfied by copying the adjudication
// ledger, which is why a 6b report demands step-6-caught rows; (c) an open
// row and the closure receipt cannot silently disagree — two blockers once
// lived only in markdown while the engine had no notion of an open fatal.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'defect-ledger.mjs');

const row = (over: object) => ({
  defect_id: 'r9-D001', run: 'r9', at: '2026-08-16', class: 'accuracy',
  subclass: 'citation-inflated', severity: 'fatal', location: 'facts-block',
  subject: 'thm-x', caught_at_stage: '8-adjudicate', caught_by_role: 'judge-terra',
  disposition: 'fixed', adjudication_ref: [{ ledger: 'adj', model: 'terra', item_sha256: 'abc' }],
  ...over,
});

const fixture = (rows: object[], adj: object[], closure?: object) => {
  const dir = mkdtempSync(join(tmpdir(), 'ledger-'));
  mkdirSync(join(dir, 'research'));
  writeFileSync(join(dir, 'research', 'defect-ledger.jsonl'), rows.map((r) => JSON.stringify(r)).join('\n') + '\n');
  writeFileSync(join(dir, 'adj.jsonl'), adj.map((r) => JSON.stringify(r)).join('\n') + '\n');
  if (closure) writeFileSync(join(dir, 'closure.json'), JSON.stringify(closure));
  // `check` now also verifies the generated view is current against these
  // bytes, so a fixture with no view is stale by construction and every case
  // below would fail for a reason that is not the clause it names. Staleness
  // itself is covered in defect-ledger-render.test.mts.
  spawnSync(process.execPath, [TOOL, 'render'], { cwd: dir, encoding: 'utf8', timeout: 60_000 });
  return dir;
};

const check = (dir: string, extra: string[] = []) => spawnSync(process.execPath,
  [TOOL, 'check', '--run', 'r9', '--adjudications', join(dir, 'adj.jsonl'), ...extra],
  { cwd: dir, encoding: 'utf8', timeout: 60_000 });

test('a confirmed_fatal with no ledger row fails the check', () => {
  const dir = fixture([], [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }]);
  const r = check(dir);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /never recorded/);
});

test('one adjudication owned by two rows is a double count', () => {
  const dir = fixture(
    [row({}), row({ defect_id: 'r9-D002' })],
    [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }]);
  const r = check(dir);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /one defect, one row/);
});

test('mirroring the adjudication ledger cannot satisfy the check when a 6b report exists', () => {
  const dir = fixture([row({})], [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }]);
  writeFileSync(join(dir, 'research', 'r9-alpha-a-6b.md'), '# findings');
  const r = check(dir);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /step-6 body/);
});

test('an open row must agree with the closure receipt, both directions', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const agree = fixture([row({ disposition: 'open' })], adj, { open_fatal: ['thm-x'] });
  assert.equal(check(agree, ['--closure', join(agree, 'closure.json')]).status, 0);
  const ledgerOnly = fixture([row({ disposition: 'open' })], adj, { open_fatal: [] });
  assert.match(check(ledgerOnly, ['--closure', join(ledgerOnly, 'closure.json')]).stderr, /stale/);
  const closureOnly = fixture([row({})], adj, { open_fatal: ['thm-y'] });
  assert.match(check(closureOnly, ['--closure', join(closureOnly, 'closure.json')]).stderr, /lived only in markdown/);
});

test('validate rejects an enum excursion and a noteless other', () => {
  const dir = fixture([row({ subclass: 'vibes' }), row({ defect_id: 'r9-D002', subclass: 'other' })], []);
  const r = spawnSync(process.execPath, [TOOL, 'validate'], { cwd: dir, encoding: 'utf8', timeout: 60_000 });
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /outside the closed enum/);
  assert.match(r.stderr, /requires subclass_note/);
});

test('render leads with outcomes, never a bare total', () => {
  const dir = fixture([row({}), row({ defect_id: 'r9-D002', subject: 'thm-y', caught_at_stage: '6b-adjudicate', prevention: { kind: 'mechanical', ref: 'tools/x.mjs' } })], []);
  const r = spawnSync(process.execPath, [TOOL, 'render', '--out', join(dir, 'view.md')],
    { cwd: dir, encoding: 'utf8', timeout: 60_000 });
  assert.equal(r.status, 0, r.stderr);
  const view = String(spawnSync('cat', [join(dir, 'view.md')], { encoding: 'utf8' }).stdout);
  assert.match(view, /GENERATED .* do not edit/);
  assert.match(view, /caught before publication \| 2/);
  assert.match(view, /mechanically prevented \| 1/);
  assert.match(view, /escaped to publication \| 0/);
});

test('the check gate is wired at every adjudicating stage with a liveness floor', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['8-adjudicate', '8-rejudge', '9-scope', '10-report']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const g = st.gates(ctx).find((x: any) => {
      const argv = typeof x.argv === 'function' ? x.argv() : x.argv;
      return argv.includes('tools/defect-ledger.mjs');
    });
    assert.ok(g, `${id} never checks the defect ledger`);
    assert.ok(g.liveness, `${id}: a ledger check over zero rows must not pass`);
  }
});

test('a nonfatal row deliberately left open does not contradict the closure receipt', () => {
  // B41 on frontier-15: a 503-ing archive snapshot, adjudicated nonfatal and
  // left open pending a pre-publish re-sweep. The closure receipt's namespace
  // is unrepaired fatal PROOF defects; the first check compared EVERY open row
  // against open_fatal and spent a step-8 repair round on the false positive.
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const dir = fixture(
    [row({}), row({ defect_id: 'r9-D002', severity: 'nonfatal', class: 'richness', subclass: 'unsourced-locator', subject: 'rem-y, archive snapshot', disposition: 'open', adjudication_ref: ['Alpha-b 6b: nonfatal, left open for a pre-publish re-sweep'] })],
    adj, { open_fatal: [] });
  const r = check(dir, ['--closure', join(dir, 'closure.json')]);
  assert.equal(r.status, 0, r.stderr);
});

test('a fatal open row still fails the closure cross-check', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const dir = fixture([row({ disposition: 'open' })], adj, { open_fatal: [] });
  const r = check(dir, ['--closure', join(dir, 'closure.json')]);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /stale/);
});

test('--no-open refuses ANY open row, whatever its severity', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const dir = fixture(
    [row({}), row({ defect_id: 'r9-D002', severity: 'nonfatal', class: 'richness', subclass: 'unsourced-locator', subject: 'rem-y', disposition: 'open', adjudication_ref: ['Alpha-b 6b: nonfatal, left open for a pre-publish re-sweep'] })],
    adj, { open_fatal: [] });
  const r = check(dir, ['--closure', join(dir, 'closure.json'), '--no-open']);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /still open at the terminal stage/);
  assert.ok(!/one defect, one row/.test(r.stderr), 'the failure must be the open row alone');
});

test('only the terminal stage passes --no-open; earlier stages tolerate a deliberate open row', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['8-adjudicate', '8-rejudge', '9-scope', '10-report']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const g = st.gates(ctx).find((x: any) => {
      const argv = typeof x.argv === 'function' ? x.argv() : x.argv;
      return argv.includes('tools/defect-ledger.mjs');
    });
    const argv = typeof g.argv === 'function' ? g.argv() : g.argv;
    if (id === '10-report') assert.ok(argv.includes('--no-open'), '10-report is the no-open backstop');
    else assert.ok(!argv.includes('--no-open'), `${id} must tolerate a nonfatal row left open for later work`);
  }
});
