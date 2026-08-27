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
import { createHash } from 'node:crypto';

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

const writeExactStep6 = (dir: string, decisions: object[]) => {
  writeFileSync(join(dir, 'research', 'r9-alpha-groups.json'), JSON.stringify([
    { label: 'a', covers: ['1'] },
  ]));
  writeFileSync(join(dir, 'research', 'r9-batch-1.pages.json'), JSON.stringify([
    { id: 'p', category: 'test', items: ['thm-x'] },
  ]));
  const snapshot = (label: string, item: string) => ({
    version: 2, run: 'r9', batch: '1', label, manifest: ['thm-x'],
    hashes: { 'thm-x': { item_sha256: item, contract_sha256: 'contract' } },
    page_manifest: ['p'], page_hashes: { p: 'page' },
  });
  writeFileSync(join(dir, 'research', 'r9-step6-hash-1-pre.json'), JSON.stringify(snapshot('pre', 'before')));
  writeFileSync(join(dir, 'research', 'r9-step6-hash-1-post.json'), JSON.stringify(snapshot('post', 'after')));
  const readerText = JSON.stringify({ batch: '1', findings: [], coverage_note: 'none' });
  const refuterText = JSON.stringify({ batch: '1', opened: ['p'], not_opened: [], flagged: [], coverage_note: 'read page' });
  writeFileSync(join(dir, 'research', 'r9-reader-findings-1.json'), readerText);
  writeFileSync(join(dir, 'research', 'r9-refute-1.json'), refuterText);
  const digest = (text: string) => createHash('sha256').update(text).digest('hex');
  writeFileSync(join(dir, 'research', 'r9-step6-scope-1.json'), JSON.stringify({
    version: 2, run: 'r9', batch: '1', group: 'a',
    manifest_pre: ['thm-x'], manifest_post: ['thm-x'], added: [], removed: [],
    page_manifest_pre: ['p'], page_manifest_post: ['p'], pages_added: [], pages_removed: [],
    pages_touched: [], refuter_pages: ['p'], page_order_anchors: { p: [] },
    touched: ['thm-x'], untouched: [], high_risk: [], refuter_scope: ['p'],
    opened: ['p'], not_opened: [], flagged: [], refuter_findings: [], reader_findings: [],
    reader_report_sha256: digest(readerText), refuter_report_sha256: digest(refuterText),
  }));
  writeFileSync(join(dir, 'research', 'r9-alpha-a-6b.md'), '# exact routed decisions');
  writeFileSync(join(dir, 'research', 'r9-alpha-a-6b-decisions.json'), JSON.stringify({
    version: 1, run: 'r9', group: 'a', decisions,
  }));
};

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
  const terra = { id: 'thm-x', model: 'gpt-5.6-terra', context_sha256: context,
    outcome: 'confirmed_fatal', item_sha256: 'abc' };
  const gpt54 = { id: 'thm-x', model: 'gpt-5.4', context_sha256: context,
    outcome: 'confirmed_fatal', item_sha256: 'abc' };
  const dir = fixture([
    row({ adjudication_ref: [gpt54] }),
    row({ defect_id: 'r9-D002', subclass: 'false-or-overstrong-statement',
      location: 'remark', caught_by_role: 'judge-terra', adjudication_ref: [terra] }),
  ], [gpt54, terra]);
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

test('validate accepts legacy step-6 location vocabulary when evidence already carries the note', () => {
  const dir = fixture([
    row({
      defect_id: 'f20-b-t9-01',
      run: 'frontier-20',
      location: 'proof-step 3.1',
      subclass: 'other',
      evidence: [{ path: 'research/frontier-20-alpha-d-6b.md', note: 'Reader note already explains the repaired proof step.' }],
    }),
    row({
      defect_id: 'f20-b-r9-03',
      run: 'frontier-20',
      location: 'statement-and-proof',
      subclass: 'false-or-overstrong-statement',
    }),
    row({
      defect_id: 'f20-b-t9-19',
      run: 'frontier-20',
      location: 'carrier',
      subclass: 'other',
      evidence: [{ path: 'research/frontier-20-alpha-b-6b.md', note: 'Whole-carrier reread closed the routed post-state on current disk.' }],
    }),
  ], []);
  const r = spawnSync(process.execPath, [TOOL, 'validate'], { cwd: dir, encoding: 'utf8', timeout: 60_000 });
  assert.equal(r.status, 0, r.stderr);
});

test('validate still rejects malformed proof-step legacy locations', () => {
  const dir = fixture([
    row({
      defect_id: 'f20-b-r9-01',
      run: 'frontier-20',
      location: 'proof-step nonsense',
    }),
  ], []);
  const r = spawnSync(process.execPath, [TOOL, 'validate'], { cwd: dir, encoding: 'utf8', timeout: 60_000 });
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /outside the closed enum/);
});

test('append remains strict for new rows with legacy-shaped locations or missing subclass_note', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ledger-append-'));
  mkdirSync(join(dir, 'research'));
  writeFileSync(join(dir, 'research', 'defect-ledger.jsonl'), '');
  const incoming = {
    ...row({
      defect_id: 'r9-D001',
      run: 'frontier-20',
      subclass: 'other',
      location: 'carrier',
      evidence: [{ path: 'research/frontier-20-alpha-b-6b.md', note: 'Current carrier reread closes the routed state.' }],
    }),
  };
  writeFileSync(join(dir, 'rows.json'), JSON.stringify(incoming));
  const r = spawnSync(process.execPath, [TOOL, 'append', '--file', join(dir, 'rows.json')],
    { cwd: dir, encoding: 'utf8', timeout: 60_000 });
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

test('exact 6b decisions close every routed obligation against its ledger row', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const dir = fixture([row({ caught_at_stage: '6a-read' })], adj, { open_fatal: [] });
  writeExactStep6(dir, [{
    obligation: 'touched:1:thm-x', id: 'thm-x', route: 'touched',
    verdict: 'accepted_repair', defect_ids: ['r9-D001'], evidence: 'Proof checked.',
    subject_sha256: 'a'.repeat(64),
  }]);
  const r = check(dir, ['--closure', join(dir, 'closure.json')]);
  assert.equal(r.status, 0, r.stderr);
});

test('a routed obligation missing from 6b decisions fails exact closure', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const dir = fixture([row({ caught_at_stage: '6a-read' })], adj, { open_fatal: [] });
  writeExactStep6(dir, []);
  const r = check(dir, ['--closure', join(dir, 'closure.json')]);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /Step-6 routed decisions or frozen closure no longer close/);
  assert.match(r.stderr, /did not decide touched:1:thm-x/);
});

test('a report without its decisions sibling fails once exact routing is present', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const dir = fixture([row({ caught_at_stage: '6a-read' })], adj, { open_fatal: [] });
  writeExactStep6(dir, [{
    obligation: 'touched:1:thm-x', id: 'thm-x', route: 'touched',
    verdict: 'accepted_repair', defect_ids: ['r9-D001'], evidence: 'Proof checked.',
  }]);
  writeFileSync(join(dir, 'research', 'r9-alpha-b-6b.md'), '# b');
  const r = check(dir, ['--closure', join(dir, 'closure.json')]);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /r9-alpha-b-6b\.md has no r9-alpha-b-6b-decisions\.json/);
});

test('a pre-contract run with 6b reports and no decisions files remains historical', () => {
  const adj = [{ id: 'thm-x', outcome: 'confirmed_fatal', item_sha256: 'abc' }];
  const dir = fixture([row({ caught_at_stage: '6b-adjudicate' })], adj, { open_fatal: [] });
  writeFileSync(join(dir, 'research', 'r9-alpha-a-6b.md'), '# findings');
  const r = check(dir, ['--closure', join(dir, 'closure.json')]);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /predate exact -6b-decisions\.json routing/);
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
