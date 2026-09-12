import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, utimesSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { loadStep3, scopeHash, itemHash, itemDecision, recordStep3, checkStep3 } from '../../step3-decisions.mjs';
import { stages, step3Plan } from '../stages/mathlib.mts';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { writeAuditorBaseline, certifyAuditorItems, certifyCompletedAuditorItems } from '../../step3-auditor-items.mjs';

function fixture(t: any) {
  const root = mkdtempSync(join(tmpdir(), 'step3-'));
  mkdirSync(join(root, 'research')); mkdirSync(join(root, 'items'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (name: string, value: any) => writeFileSync(join(root, 'research', name), JSON.stringify(value));
  const pages: any[] = [
    { id: 'a', kind: 'A', companion: 'b', order: 1, requires: [], items: [
      { id: 'lem-a', kind: 'lemma', statement: 'A', strategy: 'Proof A', deps: ['lem-published'] },
      { id: 'thm-b', kind: 'theorem', statement: 'B', strategy: 'Proof B', deps: ['lem-a'] }] },
    { id: 'b', kind: 'B', companion: 'a', order: 2, requires: ['a'], items: [
      { id: 'ex-c', kind: 'example', statement: 'C', strategy: 'Compute C', deps: ['thm-b'] }] }];
  const published = (text: string) => writeFileSync(join(root, 'items/lem-published.md'),
    `---\nid: lem-published\nstatus: published\ndeps: []\n---\n${text}\n`);
  published('Published proof');
  put('demo-batch-1.pages.json', pages);
  put('demo-batch-1.coverage.json', { pages: [{ page: 'a', sources: [] }] });
  put('plan-spec.json', { pages });
  put('demo-alpha-groups.json', [{ label: 'a', covers: ['1'] }]);
  const record = (input: any) => recordStep3(root, { run: 'demo', reason: 'Exact evidence', ...input });
  const scope = () => record({ phase: 'scope', page: 'a', decision: 'sufficient' });
  const audit = (item: string, options = {}) => record({ phase: 'item', item, decision: 'accept', confidence: 1, dependencies: [], ...options });
  const check = (phase = 'final') => checkStep3(loadStep3(root, 'demo'), phase);
  return { root, put, pages, published, record, scope, audit, check, ctx: { repo: root, run: 'demo' } };
}

test('Step 3 is two barriers with the requested profiles, not a Beta loop', t => {
  const f = fixture(t), pair = stages.filter(s => /^3[a-z]-/.test(s.id));
  assert.deepEqual(pair.map(s => s.id), ['3a-scope', '3b-author']);
  assert.ok(!stages.some(s => ['3-review', '3-fix', '3-recheck'].includes(s.id)));
  assert.ok(pair.every(s => !s.pipeline));
  for (const [s, profile, phase] of [[pair[0], MODEL_PROFILE_NAMES.solXHigh, 'scope'], [pair[1], MODEL_PROFILE_NAMES.solXHigh, 'final']] as any) {
    assert.equal(s.modelProfile, profile);
    const plan = step3Plan(f.ctx, { label: 'a', covers: ['1'] }, phase);
    assert.equal(plan.profile, profile);
    assert.ok(s.pattern.test(`${plan.role}-${plan.label}.result.json`));
  }
});

test('scope is required; legacy sufficient pair verdicts cannot approve items', t => {
  const f = fixture(t);
  f.put('demo-scaffold-final-a.json', { decision: 'accept', confidence: 1 });
  assert.equal(f.check('scope').closed, false);
  assert.throws(() => f.audit('lem-a'), /3a must clear/);
  f.scope();
  assert.equal(f.check('scope').closed, true);
  assert.equal(f.check().closed, false);
});

test('Step-3 auditor-created items bypass self-review but inherit the approved baseline scope', t => {
  const f = fixture(t);
  f.scope();
  writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push({ id: 'lem-created', kind: 'lemma', statement: 'Created', strategy: 'Direct', deps: [] });
  f.put('demo-batch-1.pages.json', f.pages);
  writeFileSync(join(f.root, 'items', 'lem-created.md'), '---\nid: lem-created\nstatus: draft\ndeps: []\n---\n\n## Statement\n\nCreated.\n\n## Proof\n\nDirect.\n');
  mkdirSync(join(f.root, 'research', 'demo-dispatch'));
  f.put('demo-dispatch/alpha-high-step3b-a.result.json', {
    run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'],
    started_at: '2000-01-01T00:00:00.000Z',
    ended_at: '2100-01-01T00:00:00.000Z',
  });
  certifyAuditorItems(f.root, 'demo');
  assert.equal(f.check('scope').closed, true, 'the reviewed baseline plus exact addition closes current scope');
  for (const id of ['lem-a', 'thm-b', 'ex-c']) f.audit(id);
  const final = f.check();
  assert.equal(final.closed, true);
  assert.equal(final.accepted, 4);
});

test('Step-3 author coverage must be an explicit exact-batch array, never an implicit global', t => {
  const f = fixture(t); f.scope(); writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push({ id: 'lem-created', kind: 'lemma', statement: 'Created', deps: [] });
  f.put('demo-batch-1.pages.json', f.pages);
  writeFileSync(join(f.root, 'items/lem-created.md'), '---\ndeps: []\n---\nComplete proof.\n');
  mkdirSync(join(f.root, 'research/demo-dispatch'));
  const result = (covers: any) => f.put('demo-dispatch/alpha-high-author.result.json', {
    run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers,
    started_at: '2000-01-01T00:00:00Z', ended_at: '2100-01-01T00:00:00Z',
  });
  for (const covers of [undefined, null, '1', 'all', [], ['all'], ['2']]) {
    result(covers);
    assert.throws(() => certifyAuditorItems(f.root, 'demo'), /no successful Step 3.*covers batch 1/);
  }
  result(['1']);
  assert.deepEqual(certifyAuditorItems(f.root, 'demo').items.map(row => row.id), ['lem-created']);
  assert.equal(itemDecision(loadStep3(f.root, 'demo'), 'lem-created').closed, true);
  for (const covers of [undefined, null, '1', [], ['all']]) {
    result(covers);
    assert.throws(() => itemDecision(loadStep3(f.root, 'demo'), 'lem-created'), /missing successful Step 3 author-result provenance/);
  }
});

test('Step-3 auditor additions cannot turn an insufficient baseline scope into approval', t => {
  const f = fixture(t);
  f.record({ phase: 'scope', page: 'a', decision: 'insufficient' });
  writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push({ id: 'lem-created', kind: 'lemma', statement: 'Created', strategy: 'Direct', deps: [] });
  f.put('demo-batch-1.pages.json', f.pages);
  writeFileSync(join(f.root, 'items', 'lem-created.md'), '---\nid: lem-created\nstatus: draft\ndeps: []\n---\nCreated.\n');
  mkdirSync(join(f.root, 'research', 'demo-dispatch'));
  f.put('demo-dispatch/alpha-high-step3b-a.result.json', {
    run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'],
    started_at: '2000-01-01T00:00:00.000Z',
    ended_at: '2100-01-01T00:00:00.000Z',
  });
  certifyAuditorItems(f.root, 'demo');
  const result = f.check('scope');
  assert.equal(result.closed, false);
  assert.equal(result.work[0].owner, true);
});

test('recovery certifies only completed V2 inputs and never approves an incomplete pair', t => {
  const f = fixture(t); f.scope();
  writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push(...['lem-ready', 'lem-unwritten', 'lem-stale'].map(id =>
    ({ id, kind: 'lemma', statement: id, deps: id === 'lem-stale' ? ['lem-published'] : [] })));
  f.put('demo-batch-1.pages.json', f.pages);
  for (const id of ['lem-ready', 'lem-stale'])
    writeFileSync(join(f.root, `items/${id}.md`), `---\nid: ${id}\ndeps: []\n---\nAuthored proof.\n`);
  mkdirSync(join(f.root, 'research/demo-dispatch'));
  f.put('demo-dispatch/alpha-high-step3b-a.result.json', {
    run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'],
    started_at: '2000-01-01T00:00:00.000Z',
    ended_at: '2100-01-01T00:00:00.000Z',
  });
  const later = new Date('2100-01-02T00:00:00.000Z');
  utimesSync(join(f.root, 'items/lem-published.md'), later, later);
  const receipt = certifyCompletedAuditorItems(f.root, 'demo');
  assert.equal(receipt.policy, 'auditor-authored-step3-bypass-v2');
  assert.deepEqual(receipt.items.map((row: any) => row.id), ['lem-ready']);
  assert.equal(receipt.pending.length, 2);
  assert.deepEqual(receipt.scopes, []);
  assert.equal(f.check('scope').closed, false);
  assert.equal(itemDecision(loadStep3(f.root, 'demo'), 'lem-ready').closed, true);
  assert.equal(itemDecision(loadStep3(f.root, 'demo'), 'lem-stale').closed, false);
  const path = join(f.root, 'research/demo-step3-auditor-certifications.json');
  const before = readFileSync(path, 'utf8');
  assert.throws(() => certifyAuditorItems(f.root, 'demo'), /no authored item file/);
  assert.equal(readFileSync(path, 'utf8'), before, 'strict refusal preserves the eligible receipts');

  // A restart reuses current V2 rows even after harmless file touches.
  utimesSync(join(f.root, 'items/lem-ready.md'), later, later);
  assert.deepEqual(certifyCompletedAuditorItems(f.root, 'demo').items, receipt.items);
  writeFileSync(join(f.root, 'items/lem-unwritten.md'), '---\ndeps: []\n---\nNew proof.\n');
  f.put('demo-dispatch/alpha-high-step3b-a-fresh.result.json', {
    run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'],
    started_at: '2000-01-01T00:00:00.000Z',
    ended_at: '2100-01-03T00:00:00.000Z',
  });
  assert.equal(certifyAuditorItems(f.root, 'demo').items.length, 3);
  assert.equal(f.check('scope').closed, true);
});

test('recovery certification does not wait for a sibling author result', t => {
  const f = fixture(t); f.scope();
  const sibling = [
    { id: 'c', kind: 'A', companion: 'd', items: [] as any[] },
    { id: 'd', kind: 'B', companion: 'c', items: [] as any[] },
  ];
  f.put('demo-batch-2.pages.json', sibling);
  f.record({ phase: 'scope', page: 'c', decision: 'sufficient' });
  writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push({ id: 'lem-created', kind: 'lemma', statement: 'Created', deps: [] });
  sibling[0].items.push({ id: 'lem-running', kind: 'lemma', statement: 'Running', deps: [] });
  f.put('demo-batch-1.pages.json', f.pages); f.put('demo-batch-2.pages.json', sibling);
  for (const id of ['lem-created', 'lem-running'])
    writeFileSync(join(f.root, `items/${id}.md`), '---\ndeps: []\n---\nProof.\n');
  mkdirSync(join(f.root, 'research/demo-dispatch'));
  f.put('demo-dispatch/alpha-high-step3b-a.result.json', {
    run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'],
    started_at: '2000-01-01T00:00:00.000Z',
    ended_at: '2100-01-01T00:00:00.000Z',
  });
  const receipt = certifyCompletedAuditorItems(f.root, 'demo');
  assert.deepEqual(receipt.items.map((row: any) => row.id), ['lem-created']);
  assert.deepEqual(receipt.scopes.map((row: any) => row.page), ['a']);
  assert.match(receipt.pending[0], /no successful Step 3 auditor\/author result covers batch 2/);
  assert.equal(itemDecision(loadStep3(f.root, 'demo'), 'lem-running').closed, false);
  assert.throws(() => certifyAuditorItems(f.root, 'demo'), /no successful Step 3/);
  const path = join(f.root, 'research/demo-step3-auditor-certifications.json');
  const before = readFileSync(path, 'utf8');
  f.pages[0].items.push({ id: 'lem-published', kind: 'lemma', statement: 'Preexisting', deps: [] });
  f.put('demo-batch-1.pages.json', f.pages);
  assert.throws(() => certifyCompletedAuditorItems(f.root, 'demo'), /existed on disk before Step 3/);
  assert.equal(readFileSync(path, 'utf8'), before, 'structural refusal preserves eligible receipts too');
});

test('unchanged V2 recovery receipts preserve bytes and mtime while pending diagnostics refresh', t => {
  const f = fixture(t); f.scope();
  writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push(...['lem-ready', 'lem-pending'].map(id =>
    ({ id, kind: 'lemma', statement: id, deps: [] })));
  f.put('demo-batch-1.pages.json', f.pages);
  writeFileSync(join(f.root, 'items/lem-ready.md'), '---\ndeps: []\n---\nReady proof.\n');
  mkdirSync(join(f.root, 'research/demo-dispatch'));
  const resultPath = 'demo-dispatch/alpha-high-step3b-a.result.json';
  const author = { run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'],
    started_at: '2000-01-01T00:00:00.000Z',
    ended_at: '2100-01-01T00:00:00.000Z' };
  f.put(resultPath, author);
  const first = certifyCompletedAuditorItems(f.root, 'demo');
  assert.match(first.pending[0], /no authored item file/);
  const path = join(f.root, 'research/demo-step3-auditor-certifications.json');
  const before = readFileSync(path, 'utf8'), old = new Date('2001-01-01T00:00:00.000Z');
  utimesSync(path, old, old);
  const mtime = statSync(path).mtimeMs;
  assert.deepEqual(certifyCompletedAuditorItems(f.root, 'demo'), first);
  assert.equal(readFileSync(path, 'utf8'), before);
  assert.equal(statSync(path).mtimeMs, mtime);

  writeFileSync(join(f.root, 'items/lem-pending.md'), '---\ndeps: []\n---\nLater proof.\n');
  const later = new Date('2100-01-02T00:00:00.000Z');
  utimesSync(join(f.root, 'items/lem-pending.md'), later, later);
  const refreshed = certifyCompletedAuditorItems(f.root, 'demo');
  assert.match(refreshed.pending[0], /changed after its latest successful/);
  assert.deepEqual(refreshed.items, first.items);
  assert.equal(refreshed.at, first.at);
  assert.equal(readFileSync(path, 'utf8'), before);
  assert.equal(statSync(path).mtimeMs, mtime);
  assert.throws(() => certifyAuditorItems(f.root, 'demo'), /changed after its latest successful/);
  assert.equal(readFileSync(path, 'utf8'), before);
  assert.equal(statSync(path).mtimeMs, mtime);

  f.put(resultPath, { ...author, ended_at: '2100-01-03T00:00:00.000Z' });
  const complete = certifyAuditorItems(f.root, 'demo');
  assert.equal(complete.items.length, 2);
  assert.equal(complete.scopes.length, 1);
  assert.notEqual(readFileSync(path, 'utf8'), before, 'new evidence must still be written');
  const finalBytes = readFileSync(path, 'utf8');
  utimesSync(path, old, old);
  assert.deepEqual(certifyAuditorItems(f.root, 'demo'), complete);
  assert.equal(readFileSync(path, 'utf8'), finalBytes);
  assert.equal(statSync(path).mtimeMs, mtime, 'the strict gate is idempotent too');
});

test('stalemate recovery certifies completed groups before routing only the named inactive owner', async t => {
  const f = fixture(t), started: any[] = [];
  const other = (a: string, b: string, id: string) => [
    { id: a, kind: 'A', companion: b, order: 3, items: [{ id, kind: 'lemma', statement: id, deps: [] }] },
    { id: b, kind: 'B', companion: a, order: 4, items: [] },
  ];
  f.put('demo-batch-2.pages.json', other('c', 'd', 'lem-owed'));
  f.put('demo-batch-3.pages.json', other('e', 'f', 'lem-active'));
  f.put('demo-alpha-groups.json', [
    { label: 'a', covers: ['1'] }, { label: 'b', covers: ['2'] }, { label: 'c', covers: ['3'] },
  ]);
  f.scope();
  for (const page of ['c', 'e']) f.record({ phase: 'scope', page, decision: 'sufficient' });
  for (const id of ['lem-a', 'thm-b', 'ex-c']) f.audit(id);
  writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push({ id: 'lem-created', kind: 'lemma', statement: 'Created', deps: [] });
  f.put('demo-batch-1.pages.json', f.pages);
  f.scope(); // Current scope already approved; only mechanical certification is owed by A.
  writeFileSync(join(f.root, 'items/lem-created.md'), '---\ndeps: []\n---\nComplete proof.\n');
  mkdirSync(join(f.root, 'research/demo-dispatch'));
  f.put('demo-dispatch/alpha-high-step3b-a-old.result.json', {
    run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'],
    started_at: '2000-01-01T00:00:00.000Z',
    ended_at: '2100-01-01T00:00:00.000Z',
  });
  assert.ok(f.check().work.some((w: any) => w.item === 'lem-created'));
  const stage: any = stages.find(s => s.id === '3b-author');
  const outcome = await stage.onGateFailure({ ctx: f.ctx, stage,
    failure: { id: 'stage-stalemate', units: ['2'] },
    executor: { start: (_s: any, plan: any) => started.push(plan) },
  });
  assert.equal(outcome, undefined);
  assert.deepEqual(started.map(plan => plan.covers), [['2']]);
  assert.deepEqual(f.check().work.map((w: any) => w.item), ['lem-owed', 'lem-active']);
  assert.equal(itemDecision(loadStep3(f.root, 'demo'), 'lem-created').decision.decision, 'auditor-authored');
  f.put('demo-alpha-groups.json', [{ label: 'a', covers: ['1', '2'] }, { label: 'b', covers: ['3'] }]);
  assert.deepEqual(stage.exclusiveCohort(f.ctx, '2'), ['1', '2']);
});

for (const source of ['proof', 'plan']) test(`Step-3 recertification rejects a transitive supplier ${source} changed after its author dispatch`, t => {
  const f = fixture(t);
  const plannedSupplier = { id: 'published-page', order: 0, requires: [],
    items: [{ id: 'lem-published', statement: 'Original supplier', deps: [] }] };
  f.put('plan-spec.json', { pages: [...f.pages, plannedSupplier] });
  f.scope();
  writeAuditorBaseline(f.root, 'demo');
  f.pages[0].items.push({ id: 'lem-created', kind: 'lemma', statement: 'Created', strategy: 'Direct', deps: ['lem-a'] });
  f.put('demo-batch-1.pages.json', f.pages);
  writeFileSync(join(f.root, 'items/lem-created.md'), '---\nid: lem-created\nstatus: draft\ndeps: [lem-a]\n---\n\n## Proof\n\nUses lem-a.\n');
  mkdirSync(join(f.root, 'research/demo-dispatch'));
  const resultPath = 'demo-dispatch/alpha-high-step3b-a.result.json';
  const author = { run: 'demo', ok: true, role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'],
    started_at: '2024-12-31T00:00:00.000Z', ended_at: '2025-01-02T00:00:00.000Z' };
  f.put(resultPath, author);
  const authoredAt = new Date('2025-01-01T00:00:00.000Z');
  for (const path of ['items/lem-created.md', 'items/lem-published.md',
    'research/demo-batch-1.pages.json', 'research/plan-spec.json']) {
    utimesSync(join(f.root, path), authoredAt, authoredAt);
  }
  const first = certifyAuditorItems(f.root, 'demo');
  const receiptPath = join(f.root, 'research/demo-step3-auditor-certifications.json');
  const receipt = readFileSync(receiptPath, 'utf8');
  const supplierPath = join(f.root, source === 'proof' ? 'items/lem-published.md' : 'research/plan-spec.json');
  if (source === 'proof') f.published('Changed supplier proof');
  else {
    plannedSupplier.items[0].statement = 'Changed supplier statement';
    f.put('plan-spec.json', { pages: [...f.pages, plannedSupplier] });
  }
  const changedAt = new Date('2040-01-01T00:00:00.000Z');
  utimesSync(supplierPath, changedAt, changedAt);
  assert.throws(() => certifyAuditorItems(f.root, 'demo'), /changed after its latest successful Step 3/);
  assert.equal(readFileSync(receiptPath, 'utf8'), receipt, 'refusal preserves prior certification');

  f.put(resultPath, { ...author,
    started_at: '2039-12-31T00:00:00.000Z', ended_at: '2040-01-02T00:00:00.000Z' });
  const refreshed = certifyAuditorItems(f.root, 'demo');
  assert.notEqual(refreshed.items[0].sha256, first.items[0].sha256);
  const touchedAt = new Date('2050-01-01T00:00:00.000Z');
  utimesSync(supplierPath, touchedAt, touchedAt);
  assert.deepEqual(certifyAuditorItems(f.root, 'demo').items, refreshed.items,
    'unchanged hash-bound evidence survives restart and carrier touches');
});

for (const mode of ['legacy', 'post-end']) test(`Step-3 ${mode} supplier provenance must be revalidated`, t => {
  const f = fixture(t);
  f.scope();
  writeAuditorBaseline(f.root, 'demo');
  const baselinePath = join(f.root, 'research/demo-step3-auditor-baseline.json');
  const baseline = readFileSync(baselinePath, 'utf8');
  f.pages[0].items.push({ id: 'lem-created', kind: 'lemma', statement: 'Created', strategy: 'Direct', deps: ['lem-a'] });
  f.put('demo-batch-1.pages.json', f.pages);
  writeFileSync(join(f.root, 'items/lem-created.md'), '---\nid: lem-created\nstatus: draft\ndeps: [lem-a]\n---\n\n## Proof\n\nUses lem-a.\n');
  const authoredAt = new Date('2025-01-01T00:00:05.000Z');
  for (const path of ['items/lem-created.md', 'items/lem-published.md', 'research/demo-batch-1.pages.json']) {
    utimesSync(join(f.root, path), authoredAt, authoredAt);
  }
  mkdirSync(join(f.root, 'research/demo-dispatch'));
  const resultPath = 'demo-dispatch/alpha-high-step3b-a.result.json';
  const author = { run: 'demo', role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'], ok: true,
    started_at: '2025-01-01T00:00:00.000Z', ended_at: '2025-01-01T00:00:10.000Z' };
  f.put(resultPath, author);
  const first = certifyAuditorItems(f.root, 'demo');
  const receiptPath = join(f.root, 'research/demo-step3-auditor-certifications.json');
  f.published('Changed supplier after the author completed');
  const changedAt = new Date('2025-01-01T00:00:10.500Z');
  utimesSync(join(f.root, 'items/lem-published.md'), changedAt, changedAt);
  if (mode === 'legacy') {
    // v1 hashed the current supplier without checking its write time. Recreate
    // that exact receipt shape without invoking a second successful dispatch.
    first.policy = 'auditor-authored-step3-bypass-v1';
    first.items[0].sha256 = itemHash(loadStep3(f.root, 'demo'), 'lem-created', first.items[0].dependencies);
    writeFileSync(receiptPath, JSON.stringify(first));
    assert.equal(itemDecision(loadStep3(f.root, 'demo'), 'lem-created').closed, false);
  }
  const before = readFileSync(receiptPath, 'utf8');
  assert.throws(() => certifyAuditorItems(f.root, 'demo'), /changed after its latest successful Step 3/);
  assert.equal(readFileSync(receiptPath, 'utf8'), before);
  assert.equal(readFileSync(baselinePath, 'utf8'), baseline);

  const partial = certifyCompletedAuditorItems(f.root, 'demo');
  assert.deepEqual(partial.items, [], 'recovery cannot reuse stale or legacy provenance either');
  assert.equal(partial.pending.length, 1);
  assert.equal(itemDecision(loadStep3(f.root, 'demo'), 'lem-created').closed, false);

  f.put(resultPath, { ...author, ended_at: '2025-01-01T00:00:11.000Z' });
  const refreshed = certifyAuditorItems(f.root, 'demo');
  assert.equal(refreshed.policy, 'auditor-authored-step3-bypass-v2');
  assert.equal(itemDecision(loadStep3(f.root, 'demo'), 'lem-created').closed, true);
  assert.equal(readFileSync(baselinePath, 'utf8'), baseline);
});

test('insufficient scope requires owner action; merge/enrich do not mean proceed', t => {
  const f = fixture(t);
  f.record({ phase: 'scope', page: 'a', decision: 'insufficient' });
  assert.equal(f.check('scope').work[0].owner, true);
  assert.throws(() => f.scope(), /Only the owner/);
  for (const decision of ['merge', 'enrich']) {
    f.record({ phase: 'scope', page: 'a', decision, owner: true });
    assert.equal(f.check('scope').closed, false);
    assert.throws(() => f.scope(), /Only the owner/);
  }
  f.record({ phase: 'scope', page: 'a', decision: 'proceed', owner: true });
  assert.equal(f.check('scope').closed, true);
});

test('every A/B item needs a decision; uncertainty escalates; owner repair bypasses rejudge', t => {
  const f = fixture(t); f.scope();
  assert.throws(() => f.audit('lem-a', { confidence: .99 }), /100%/);
  assert.throws(() => f.audit('lem-a', { dependencies: undefined }), /examined dependency/);
  f.audit('lem-a', { decision: 'escalate', confidence: undefined });
  assert.throws(() => f.audit('lem-a'), /owner must resolve/);
  f.record({ phase: 'item', item: 'lem-a', owner: true, decision: 'repaired', dependencies: ['lem-published'] });
  assert.throws(() => f.audit('lem-a'), /owner must resolve/);
  f.audit('thm-b', { decision: 'repaired' });
  assert.equal(f.check().accepted, 2);
  assert.equal(f.check().closed, false);
  f.audit('ex-c'); assert.equal(f.check().closed, true);
});

test('owner reopen authorizes a fresh audit without certifying the repair', t => {
  const f = fixture(t); f.scope();
  f.audit('lem-a', { decision: 'escalate', confidence: undefined });
  const before = step3Plan(f.ctx, { label: 'a', covers: ['1'] }, 'final').label;
  f.record({ phase: 'item', item: 'lem-a', owner: true, decision: 'reopen', dependencies: ['lem-published'],
    reason: 'Supply the named local lemma and preserve the original claim.' });
  const open = f.check().work.find((w: any) => w.item === 'lem-a');
  assert.equal(open.owner, false);
  assert.match(open.reason, /fresh post-reopen item audit/);
  assert.notEqual(step3Plan(f.ctx, { label: 'a', covers: ['1'] }, 'final').label, before);
  f.audit('lem-a', { decision: 'repaired', dependencies: ['lem-published'] });
  assert.equal(f.check().accepted, 1);
  assert.equal(f.check().closed, false);
});

test('proof changes invalidate the item and its consumers but not scope', t => {
  const f = fixture(t); f.scope();
  for (const id of ['lem-a', 'thm-b', 'ex-c']) f.audit(id);
  const before = scopeHash(loadStep3(f.root, 'demo'), 'a');
  f.pages[0].items[0].strategy = 'New proof'; f.put('demo-batch-1.pages.json', f.pages);
  assert.equal(scopeHash(loadStep3(f.root, 'demo'), 'a'), before);
  assert.equal(f.check().accepted, 0);
});

test('published and implicit dependency changes invalidate decisions', t => {
  const f = fixture(t); f.scope();
  const path = join(f.root, 'items/lem-implicit.md');
  writeFileSync(path, '---\nid: lem-implicit\ndeps: []\n---\nFirst proof');
  f.audit('ex-c', { dependencies: ['lem-implicit'] });
  const before = itemHash(loadStep3(f.root, 'demo'), 'ex-c', ['lem-implicit']);
  writeFileSync(path, '---\nid: lem-implicit\ndeps: []\n---\nChanged proof');
  assert.notEqual(itemHash(loadStep3(f.root, 'demo'), 'ex-c', ['lem-implicit']), before);
  assert.equal(f.check().accepted, 0);
  f.audit('lem-a'); f.published('Changed supplier'); assert.equal(f.check().accepted, 0);
});

test('claim changes invalidate scope; shared plan registration alone does not', t => {
  const f = fixture(t);
  f.record({ phase: 'scope', page: 'a', owner: true, decision: 'proceed' });
  f.put('plan-spec.json', { pages: f.pages }); assert.equal(f.check('scope').closed, true);
  f.pages[0].items[0].statement = 'New claim'; f.put('demo-batch-1.pages.json', f.pages);
  assert.equal(f.check('scope').closed, false);
});

test('changed evidence cannot let an adjudicator bypass an escalation', t => {
  const f = fixture(t); f.scope();
  f.audit('lem-a', { decision: 'escalate', confidence: undefined });
  f.published('New dependency evidence');
  assert.throws(() => f.audit('lem-a'), /owner must resolve/);
  assert.equal(f.check().work.find((w: any) => w.item === 'lem-a').owner, true);
});

test('missing prerequisites can be escalated and forged receipt identities fail closed', t => {
  const f = fixture(t); f.scope();
  f.pages[0].items[0].deps.push('lem-missing'); f.put('demo-batch-1.pages.json', f.pages);
  f.audit('lem-a', { decision: 'escalate', confidence: undefined, dependencies: ['lem-missing'] });
  assert.equal(f.check().work.find((w: any) => w.item === 'lem-a').owner, true);
  const row = f.audit('thm-b');
  f.put('demo-step3b-review-thm-b.json', { ...row, target: 'wrong' });
  assert.throws(() => f.check(), /receipt identity/);
});

test('final gate retains mechanical and cross-batch checks', t => {
  const f = fixture(t), s: any = stages.find(s => s.id === '3b-author');
  const ids = s.gates(f.ctx).map((g: any) => g.id);
  for (const id of ['step3-items', 'manifest-deps', 'scope-decisions', 'url-liveness', 'frontier-dependency-ledger', 'proof-contract', 'rendercheck'])
    assert.ok(ids.includes(id), `${id} missing`);
  assert.ok(!ids.includes('splice-verify'), 'the author barrier precedes the splice');
  assert.ok(stages.find(s => s.id === '4-splice').gates(f.ctx).some(g => g.id === 'validate-plan'));
  assert.ok(ids.some((id: string) => /coverage/.test(id)));
  assert.ok(ids.some((id: string) => /policy/.test(id)));
});

test('fresh missing decisions dispatch only the owning groups', async t => {
  const f = fixture(t), started: any[] = [];
  const scope: any = stages.find(s => s.id === '3a-scope');
  const args = { ctx: f.ctx, stage: scope, failure: { id: 'step3-scope' },
    executor: { start: (_s: any, plan: any) => started.push(plan) } };
  await scope.onGateFailure(args);
  assert.equal(started.length, 1);
  assert.deepEqual(started[0].covers, ['1']);
  assert.equal(started[0].profile, MODEL_PROFILE_NAMES.solXHigh);
  f.scope(); started.length = 0;
  writeAuditorBaseline(f.root, 'demo');
  const audit: any = stages.find(s => s.id === '3b-author');
  await audit.onGateFailure({ ...args, stage: audit });
  assert.equal(started.length, 1);
  assert.equal(started[0].profile, MODEL_PROFILE_NAMES.solXHigh);
});

test('the CLI records scope and returns nonzero until every item clears', t => {
  const f = fixture(t);
  const tool = fileURLToPath(new URL('../../step3-decisions.mjs', import.meta.url));
  const run = (...args: string[]) => spawnSync(process.execPath, [tool, ...args, '--run', 'demo'],
    { cwd: f.root, encoding: 'utf8' });
  assert.equal(run('check', '--phase', 'scope').status, 1);
  const r = run('record-scope', '--page', 'a', '--decision', 'sufficient', '--reason', 'Scope evidence');
  assert.equal(r.status, 0, r.stderr);
  assert.equal(run('check', '--phase', 'scope').status, 0);
  assert.equal(run('check', '--phase', 'final').status, 1);
  for (const id of ['lem-a', 'thm-b', 'ex-c']) f.audit(id);
  assert.equal(run('check', '--phase', 'final').status, 0);
});

test('escalations, unchanged incomplete audits and final mechanical failures never loop', async t => {
  const f = fixture(t); f.scope();
  writeAuditorBaseline(f.root, 'demo');
  const s: any = stages.find(s => s.id === '3b-author');
  const args = { ctx: f.ctx, stage: s, failure: { id: 'step3-items' }, executor: { start: () => assert.fail('Unexpected dispatch') } };
  f.audit('lem-a', { decision: 'escalate', confidence: undefined });
  assert.match((await s.onGateFailure(args)).owner.reason, /lem-a/);
  f.record({ phase: 'item', item: 'lem-a', owner: true, decision: 'repaired', dependencies: [] });
  const plan = step3Plan(f.ctx, { label: 'a', covers: ['1'] }, 'final');
  mkdirSync(join(f.root, 'research/demo-dispatch'));
  f.put('demo-dispatch/done.result.json', { label: plan.label });
  assert.match((await s.onGateFailure(args)).owner.reason, /unchanged inputs/);
  f.audit('thm-b'); f.audit('ex-c');
  assert.match((await s.onGateFailure({ ...args, failure: { id: 'source-fetch-check' } })).owner.reason, /mechanical gate/);
});

test('prompts require concise scope decisions and impartial sequential dependency audits', () => {
  const base = new URL('../../../briefs/', import.meta.url);
  assert.match(readFileSync(new URL('step3-scope.md', base), 'utf8'), /owner alone decides/);
  const audit = readFileSync(new URL('group-author.md', base), 'utf8');
  for (const re of [/one item\s+at a time/, /impartial/, /honest/, /authoritative sources/, /published item/, /cross-batch/, /confidence 1/, /still needs authored content/]) assert.match(audit, re);
});
