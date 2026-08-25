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

test('two models may record different defects on the same item version', () => {
  const context = 'ctx-1';
  const deepseek = { id: 'thm-x', model: 'deepseek-v4-pro', context_sha256: context,
    outcome: 'confirmed_fatal', item_sha256: 'abc' };
  const terra = { id: 'thm-x', model: 'gpt-5.6-terra', context_sha256: context,
    outcome: 'confirmed_fatal', item_sha256: 'abc' };
  const dir = fixture([
    row({ adjudication_ref: [deepseek] }),
    row({ defect_id: 'r9-D002', subclass: 'false-or-overstrong-statement',
      location: 'remark', caught_by_role: 'judge-terra', adjudication_ref: [terra] }),
  ], [deepseek, terra]);
  const r = check(dir);
  assert.equal(r.status, 0, r.stderr);
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

test('the check gate closes the ledger outside the bounded judge loop', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['8-preflight', '8-close', '9-scope', '10-contract-close']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const g = st.gates(ctx).find((x: any) => {
      const argv = typeof x.argv === 'function' ? x.argv() : x.argv;
      return argv.includes('tools/defect-ledger.mjs');
    });
    assert.ok(g, `${id} never checks the defect ledger`);
    assert.ok(g.liveness, `${id}: a ledger check over zero rows must not pass`);
  }
  for (const id of ['8-adjudicate', '8-rejudge']) {
    const st = mod.stages.find((s: any) => s.id === id);
    assert.ok(!st.gates(ctx).some((x: any) => {
      const argv = typeof x.argv === 'function' ? x.argv() : x.argv;
      return argv.includes('tools/defect-ledger.mjs');
    }), `${id}: ledger bookkeeping must not consume a mathematical adjudication/rejudge round`);
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

test('the 6b findings files audit the ledger COUNT — 13 rows against 58 fatals now fails', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  // Two step-6 rows in the ledger, three confirmed_fatal findings asserted.
  const dir = fixture(
    [row({ caught_at_stage: '6b-adjudicate' }),
      row({ defect_id: 'r9-D002', subject: 'thm-y', caught_at_stage: '6a-read', adjudication_ref: ['R1-1'] })],
    adj, { open_fatal: [] });
  writeFileSync(join(dir, 'research', 'r9-alpha-a-6b.md'), '# findings');
  writeFileSync(join(dir, 'research', 'r9-alpha-a-6b-findings.json'), JSON.stringify([
    { id: 'thm-x', verdict: 'confirmed_fatal', source: 'R1-1' },
    { id: 'thm-y', verdict: 'confirmed_fatal', source: 'R1-2' },
    { id: 'thm-z', verdict: 'confirmed_fatal', source: 'R1-3' },
    { id: 'thm-w', verdict: 'confirmed_nonfatal', source: 'R1-4' },
  ]));
  const r = check(dir, ['--closure', join(dir, 'closure.json')]);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /assert 3 confirmed-fatal finding\(s\) but only 2/);
});

test('a 6b report without its findings sibling fails once any group has one', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const dir = fixture([row({ caught_at_stage: '6b-adjudicate' })], adj, { open_fatal: [] });
  writeFileSync(join(dir, 'research', 'r9-alpha-a-6b.md'), '# a');
  writeFileSync(join(dir, 'research', 'r9-alpha-b-6b.md'), '# b');
  writeFileSync(join(dir, 'research', 'r9-alpha-a-6b-findings.json'), JSON.stringify([
    { id: 'thm-x', verdict: 'confirmed_fatal', source: 'R1-1' },
  ]));
  const r = check(dir, ['--closure', join(dir, 'closure.json')]);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /r9-alpha-b-6b\.md has no r9-alpha-b-6b-findings\.json/);
});

test('a pre-contract run with 6b reports and no findings files gets a note, never a failure', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const dir = fixture([row({ caught_at_stage: '6b-adjudicate' })], adj, { open_fatal: [] });
  writeFileSync(join(dir, 'research', 'r9-alpha-a-6b.md'), '# findings');
  const r = check(dir, ['--closure', join(dir, 'closure.json')]);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /cannot be audited against the ledger/);
});

test('only the terminal stage passes --no-open; earlier stages tolerate a deliberate open row', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['8-preflight', '8-close', '9-scope', '10-contract-close']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const g = st.gates(ctx).find((x: any) => {
      const argv = typeof x.argv === 'function' ? x.argv() : x.argv;
      return argv.includes('tools/defect-ledger.mjs');
    });
    const argv = typeof g.argv === 'function' ? g.argv() : g.argv;
    if (id === '10-contract-close') assert.ok(argv.includes('--no-open'), '10-contract-close is the no-open backstop');
    else assert.ok(!argv.includes('--no-open'), `${id} must tolerate a nonfatal row left open for later work`);
  }
});
