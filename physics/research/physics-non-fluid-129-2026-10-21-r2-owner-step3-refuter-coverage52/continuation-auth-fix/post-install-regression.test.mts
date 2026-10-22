import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { refuterContinuations, refuterContinuationPattern, withRefuterContinuation } from '../../../tools/physics-autopilot/stages/refuter-continuations.mts';
import { refuterContinuations as previousValidator } from './original-refuter-continuations.mts';

const here = dirname(fileURLToPath(import.meta.url));
const physics = resolve(here, '../../..');
const fixtureParent = join(here, '.fixtures');
const run = 'physics-non-fluid-129-2026-10-21-r2';
const nativeArchive = `research/${run}-owner-step3-refuter-coverage52/native-continuation`;
const digest = (bytes: any) => createHash('sha256').update(bytes).digest('hex');

function isolated(t: any, mode: 'synthetic' | 'genuine52' = 'synthetic') {
  mkdirSync(fixtureParent, { recursive: true });
  const repo = mkdtempSync(join(fixtureParent, 'case-'));
  t.after(() => { rmSync(repo, { recursive: true, force: true }); });
  const write = (p: string, value: any) => {
    mkdirSync(dirname(join(repo, p)), { recursive: true });
    writeFileSync(join(repo, p), typeof value === 'string' || Buffer.isBuffer(value) ? value : JSON.stringify(value));
  };
  const ref = (path: string) => ({ path, sha256: digest(readFileSync(join(repo, path))) });
  let auth: any, receipt: any, old: any, fixtureRun: string, unit: string;
  if (mode === 'genuine52') {
    fixtureRun = run; unit = '52';
    auth = JSON.parse(readFileSync(join(physics, `research/${run}-owner-step3-approved-tooling-application-data/native52-authorization.json`), 'utf8'));
    const e = auth.continuations[0];
    // Only isolated fixture bytes are written. Every historical bound source
    // is checked before copying; no live authorization is installed.
    for (const binding of [e.previous_result, e.original_report, e.task, ...e.subjects]) {
      const bytes = readFileSync(join(physics, binding.path));
      assert.equal(digest(bytes), binding.sha256, binding.path);
      write(binding.path, bytes);
    }
    const reportBytes = readFileSync(join(physics, e.original_report.path));
    assert.equal(digest(reportBytes), e.report_sha256);
    write(e.report_path, reportBytes);
    const scopePath = `research/${run}-step3-scope-52.json`;
    const scopeBytes = readFileSync(join(physics, nativeArchive, `${run}-step3-scope-52.json`));
    assert.equal(digest(scopeBytes), e.scope_sha256);
    write(scopePath, scopeBytes);
    write(`research/${run}-batch-52.pages.json`, readFileSync(join(physics, `research/${run}-batch-52.pages.json`)));
    const messagePath = `research/${run}-dispatch/refuter-refute-52.attempt-1.last-message.json`;
    write(messagePath, readFileSync(join(physics, messagePath)));
    e.original_last_message = ref(messagePath);
    receipt = JSON.parse(readFileSync(join(repo, e.previous_result.path), 'utf8'));
    old = JSON.parse(reportBytes.toString());
    assert.equal(old.flagged.length, 10);
    assert.equal(JSON.parse(readFileSync(join(repo, messagePath), 'utf8')).flagged.length, 10);
    assert.ok(!/"not_opened"\s*:/.test(receipt.tail));
    assert.ok(!/"flagged"\s*:/.test(receipt.tail));
  } else {
    fixtureRun = 'r'; unit = '7';
    old = { batch: unit, opened: ['def-a', 'def-context'], not_opened: [], flagged: [], coverage_note: 'native fixture observations '.repeat(20) };
    const raw = JSON.stringify(old, null, 2) + '\n';
    write('research/r-refute-7.json', raw); write('research/r-old-report.json', raw);
    write('research/r-step3-scope-7.json', { refuter_scope: ['def-a'] });
    write('research/r-batch-7.pages.json', [{ id: 'page', category: 'algebra', items: [{ id: 'def-a' }] }]);
    write('items/def-a.md', 'fixture carrier'); write('research/r-correction-task.md', 'fresh actual review');
    receipt = { run: 'r', role: 'refuter', label: 'refute-7', attempt: 1, evidence_tag: '.attempt-1', covers: ['7'], ok: true, exit_code: 0, ended_at: '2026-10-08T04:19:33Z', tail: JSON.stringify(old) };
    write('research/r-dispatch/refuter-refute-7.result.json', receipt);
    write('research/r-dispatch/refuter-refute-7.attempt-1.last-message.json', JSON.stringify(old));
    auth = { version: 1, run: 'r', authorized_by: 'owner', authorization: 'one fresh native read', continuations: [{ unit, label: 'refute-7-coverage-correction-1', reason: 'one extra context carrier', writers_drained_at: '2026-10-08T04:20:00Z', previous_result: ref('research/r-dispatch/refuter-refute-7.result.json'), report_path: 'research/r-refute-7.json', report_sha256: ref('research/r-refute-7.json').sha256, original_report: ref('research/r-old-report.json'), scope_sha256: ref('research/r-step3-scope-7.json').sha256, subjects: [{ id: 'def-a', ...ref('items/def-a.md') }], task: ref('research/r-correction-task.md') }] };
  }
  const entry = auth.continuations[0];
  const save = () => write(`research/${fixtureRun}-step3-refuter-continuations.json`, auth);
  const saveReceipt = () => { write(entry.previous_result.path, receipt); entry.previous_result.sha256 = ref(entry.previous_result.path).sha256; };
  const stage: any = { id: '3a-refute', units: () => [unit, '8'], pattern: /^refuter-refute-\d+\.result\.json$/, plan: (_ctx: any, pending: string[]) => pending.map(u => ({ label: `refute-${u}`, task: 'original-task', covers: [u], role: 'refuter', model: 'unchanged', outputSchema: 'unchanged', resultArtifact: `research/${fixtureRun}-refute-${u}.json` })) };
  return { repo, write, ref, auth, entry, receipt, old, save, saveReceipt, ctx: { repo, run: fixtureRun }, stage, unit };
}

function headerless(t: any) {
  const f = isolated(t);
  f.old.flagged = Array.from({ length: 10 }, (_, i) => ({ id: 'def-a', location: `Proof ${i}`, defect: 'unlicensed-inference', evidence: 'An actual native fixture observation. '.repeat(3), severity: 'fatal' }));
  const raw = JSON.stringify(f.old, null, 2) + '\n';
  f.write(f.entry.report_path, raw); f.write(f.entry.original_report.path, raw);
  f.entry.report_sha256 = f.ref(f.entry.report_path).sha256; f.entry.original_report.sha256 = f.entry.report_sha256;
  f.receipt.tail = raw.trimEnd().split('\n').slice(-40).join('\n'); f.saveReceipt();
  const path = 'research/r-dispatch/refuter-refute-7.attempt-1.last-message.json';
  f.write(path, f.old); f.entry.original_last_message = f.ref(path);
  assert.ok(!/"not_opened"\s*:/.test(f.receipt.tail));
  assert.ok(!/"flagged"\s*:/.test(f.receipt.tail));
  return f;
}

function legacyClipped(t: any) {
  const f = isolated(t);
  f.old.opened.push(...Array.from({ length: 40 }, (_, i) => `def-context-${i}`));
  const raw = JSON.stringify(f.old, null, 2) + '\n';
  f.write(f.entry.report_path, raw); f.write(f.entry.original_report.path, raw);
  f.entry.report_sha256 = f.ref(f.entry.report_path).sha256; f.entry.original_report.sha256 = f.entry.report_sha256;
  f.receipt.tail = raw.trimEnd().split('\n').slice(-40).join('\n'); f.saveReceipt();
  assert.throws(() => JSON.parse(f.receipt.tail));
  assert.match(f.receipt.tail, /"not_opened"/); assert.match(f.receipt.tail, /"flagged"/);
  return f;
}

test('genuine 52 receipt rejects old validator and passes exact-attempt message binding in isolated fixture', t => {
  const f = isolated(t, 'genuine52'); f.save();
  assert.throws(() => previousValidator(f.ctx, f.stage, true), /Invalid owner/);
  assert.equal(refuterContinuations(f.ctx, f.stage, true)[0].unit, '52');
  assert.equal(JSON.parse(readFileSync(join(f.repo, f.entry.report_path), 'utf8')).flagged.length, 10);
  assert.equal(JSON.parse(readFileSync(join(f.repo, f.entry.original_report.path), 'utf8')).flagged.length, 10);
});

test('full JSON receipt remains accepted without new binding', t => {
  const f = isolated(t); f.save(); previousValidator(f.ctx, f.stage, true); refuterContinuations(f.ctx, f.stage, true);
});

test('existing legacy clipped-tail acceptance remains unchanged', t => {
  const f = legacyClipped(t); f.save(); previousValidator(f.ctx, f.stage, true); refuterContinuations(f.ctx, f.stage, true);
});

test('headerless clipped tail still rejects absent message binding', t => {
  const f = headerless(t); delete f.entry.original_last_message; f.save();
  assert.throws(() => refuterContinuations(f.ctx, f.stage, true), /Invalid owner/);
});

test('headerless clipped tail accepts differently formatted exact report JSON', t => {
  const f = headerless(t); f.save(); refuterContinuations(f.ctx, f.stage, true);
});

for (const [name, mutate] of [
  ['message bytes changed without rebinding', (f: any) => f.write(f.entry.original_last_message.path, '{}')],
  ['different report even with rebound message digest', (f: any) => { f.write(f.entry.original_last_message.path, { ...f.old, flagged: [] }); f.entry.original_last_message = f.ref(f.entry.original_last_message.path); }],
  ['same bytes at wrong native attempt', (f: any) => { const p = 'research/r-dispatch/refuter-refute-7.attempt-2.last-message.json'; f.write(p, f.old); f.entry.original_last_message = f.ref(p); }],
  ['same bytes at wrong unit', (f: any) => { const p = 'research/r-dispatch/refuter-refute-8.attempt-1.last-message.json'; f.write(p, f.old); f.entry.original_last_message = f.ref(p); }],
  ['stable message alias instead of immutable attempt name', (f: any) => { const p = 'research/r-dispatch/refuter-refute-7.last-message.json'; f.write(p, f.old); f.entry.original_last_message = f.ref(p); }],
  ['arbitrary archive path with correct digest', (f: any) => { const p = 'research/r-message-copy.json'; f.write(p, f.old); f.entry.original_last_message = f.ref(p); }],
  ['traversal path', (f: any) => { f.entry.original_last_message.path = 'research/r-dispatch/../r-message.json'; }],
  ['missing message digest', (f: any) => { delete f.entry.original_last_message.sha256; }],
  ['invalid native attempt', (f: any) => { f.receipt.attempt = 0; f.saveReceipt(); }],
  ['mismatched native evidence tag', (f: any) => { f.receipt.evidence_tag = '.attempt-2'; f.saveReceipt(); }],
  ['wrong receipt run', (f: any) => { f.receipt.run = 'other'; f.saveReceipt(); }],
  ['wrong receipt role', (f: any) => { f.receipt.role = 'reader'; f.saveReceipt(); }],
  ['wrong receipt label', (f: any) => { f.receipt.label = 'refute-8'; f.saveReceipt(); }],
  ['wrong receipt unit', (f: any) => { f.receipt.covers = ['8']; f.saveReceipt(); }],
  ['failed native receipt', (f: any) => { f.receipt.ok = false; f.saveReceipt(); }],
  ['altered diagnostic despite bound exact message', (f: any) => { f.receipt.tail = f.receipt.tail.replace('actual', 'changed'); f.saveReceipt(); }],
  ['unrelated diagnostic despite bound exact message', (f: any) => { f.receipt.tail = 'unrelated diagnostic'.repeat(30); f.saveReceipt(); }],
  ['too-short suffix despite bound exact message', (f: any) => { f.receipt.tail = f.receipt.tail.slice(-100); f.saveReceipt(); }],
  ['parseable different report despite bound exact message', (f: any) => { f.receipt.tail = JSON.stringify({ ...f.old, flagged: [] }); f.saveReceipt(); }],
  ['current source drift', (f: any) => f.write('items/def-a.md', 'changed source')],
  ['wrong subject path', (f: any) => { f.entry.subjects[0].path = 'items/def-other.md'; }],
  ['subject omitted', (f: any) => { f.entry.subjects = []; }],
  ['current scope drift', (f: any) => f.write('research/r-step3-scope-7.json', { refuter_scope: ['def-b'] })],
  ['current report drift', (f: any) => f.write(f.entry.report_path, '{}')],
  ['original archive drift', (f: any) => f.write(f.entry.original_report.path, '{}')],
  ['previous receipt drift without digest update', (f: any) => f.write(f.entry.previous_result.path, '{}')],
  ['task drift', (f: any) => f.write(f.entry.task.path, 'changed task')],
  ['authorization drift', (f: any) => { f.auth.authorized_by = 'helper'; }],
] as const) test(`new binding rejects ${name}`, t => {
  const f = headerless(t); mutate(f); f.save();
  assert.throws(() => refuterContinuations(f.ctx, f.stage, true), /Invalid owner/);
});

test('provided optional binding is checked even for an otherwise valid full tail', t => {
  const f = isolated(t); f.entry.original_last_message = { path: 'research/r-other.json', sha256: '0'.repeat(64) }; f.save();
  assert.throws(() => refuterContinuations(f.ctx, f.stage, true), /Invalid owner/);
});

test('one-attempt budget, sibling routing and native plan descriptor are preserved', t => {
  const f = headerless(t); f.save();
  const wrapped = withRefuterContinuation(f.stage);
  const plans = wrapped.plan(f.ctx, ['7', '8']);
  assert.equal(plans[0].label, 'refute-7-coverage-correction-1');
  assert.equal(plans[0].task, f.entry.task.path);
  assert.equal(plans[0].model, 'unchanged'); assert.equal(plans[0].outputSchema, 'unchanged');
  assert.equal(plans[1].label, 'refute-8');
  const pattern = refuterContinuationPattern(f.ctx, f.stage);
  assert.equal(pattern.test('refuter-refute-7.result.json'), false);
  assert.equal(pattern.test('refuter-refute-8.result.json'), true);
  assert.equal(pattern.test('refuter-refute-7-coverage-correction-1.result.json'), true);
  assert.equal(pattern.test('refuter-refute-7-coverage-correction-2.result.json'), false);
  f.write('research/r-dispatch/refuter-refute-7-coverage-correction-1.result.json', { ok: false });
  assert.throws(() => refuterContinuations(f.ctx, f.stage, true), /already attempted/);
});

test('no live authorization is created by tests', () => {
  assert.equal(existsSync(join(physics, `research/${run}-step3-refuter-continuations.json`)), false);
});
