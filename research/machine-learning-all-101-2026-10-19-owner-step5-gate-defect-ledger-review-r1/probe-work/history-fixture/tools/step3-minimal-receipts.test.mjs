import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import * as math from './step3-decisions.mjs';
import * as physics from './physics-support/step3-decisions.mjs';

const digest = row => createHash('sha256').update(JSON.stringify(row)).digest('hex');
const keys = ['version', 'run', 'phase', 'target', 'decision', 'owner', 'sha256', 'at', 'reason', 'defects'].sort();

function fixture(t, api) {
  const root = mkdtempSync(join(tmpdir(), 'step3-minimal-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research')); mkdirSync(join(root, 'items'));
  const put = (name, value) => writeFileSync(join(root, 'research', name), JSON.stringify(value));
  const pages = [
    { id: 'a', kind: 'A', companion: 'b', order: 1, requires: [], items: [
      { id: 'lem-a', kind: 'lemma', statement: 'A', deps: ['lem-supplier'] },
    ] },
    { id: 'b', kind: 'B', companion: 'a', order: 2, requires: ['a'], items: [] },
  ];
  put('demo-batch-1.pages.json', pages);
  put('plan-spec.json', { pages });
  const body = (id, content, deps = []) => writeFileSync(join(root, 'items', `${id}.md`),
    `---\nid: ${id}\ndeps: ${JSON.stringify(deps)}\n---\n${content}\n`);
  body('lem-a', 'Original proof', ['lem-supplier']);
  body('lem-supplier', 'Supplier proof');
  const state = () => api.loadStep3(root, 'demo');
  const record = options => api.recordStep3(root, { run: 'demo', phase: 'item', item: 'lem-a',
    decision: 'accept', reason: 'Authored the stated claim.', ...options });
  const scope = () => api.recordStep3(root, { run: 'demo', phase: 'scope', page: 'a',
    decision: 'sufficient', reason: 'The paired scope is sufficient.' });
  const check = () => api.itemDecision(state(), 'lem-a');
  scope();
  return { root, put, pages, body, state, record, scope, check };
}

for (const [name, api, tool] of [
  ['mathematics', math, './step3-decisions.mjs'],
  ['physics', physics, './physics-support/step3-decisions.mjs'],
]) {
  test(`${name}: item receipt needs no confidence or dependency audit and has a compact shape`, t => {
    const f = fixture(t, api), row = f.record();
    assert.deepEqual(Object.keys(row).sort(), keys);
    assert.equal(row.version, 2);
    assert.deepEqual(row.defects, []);
    assert.equal(row.sha256, api.itemHash(f.state(), 'lem-a'));
    assert.equal(f.check().closed, true);
    const saved = JSON.parse(readFileSync(join(f.root, 'research/demo-step3b-review-lem-a.json'), 'utf8'));
    assert.deepEqual(saved, row);
    const compatibility = f.record({ confidence: .25, dependencies: ['lem-unrelated'] });
    assert.deepEqual(Object.keys(compatibility).sort(), keys);
    assert.equal(compatibility.sha256, row.sha256, 'caller bookkeeping cannot add hidden hash inputs');
  });

  test(`${name}: defects and concise reasons are validated before writing`, t => {
    const f = fixture(t, api);
    for (const reason of ['', '   ', 'x'.repeat(401), 'Two\nlines', 'Two\rlines', 'First sentence. Second sentence.', 42])
      assert.throws(() => f.record({ reason }), /reason/i);
    assert.equal(f.record({ reason: 'x'.repeat(400) }).reason.length, 400);
    for (const defects of ['a defect', [null], [''], ['  '], [' Padded defect. '], ['Two\nlines'], ['x'.repeat(81)], [42]])
      assert.throws(() => f.record({ defects }), /defect/i);
    for (const options of [
      { decision: 'repaired' }, { decision: 'escalate' },
      { decision: 'hold', owner: true }, { decision: 'reopen', owner: true },
    ]) assert.throws(() => f.record({ ...options, defects: [] }), /defect/i);
    const repaired = f.record({ decision: 'repaired', defects: ['Missing endpoint justification.'] });
    assert.deepEqual(repaired.defects, ['Missing endpoint justification.']);
    assert.equal(f.check().closed, true);
  });

  test(`${name}: own proof and declared supplier changes stale the mechanical hash`, t => {
    const f = fixture(t, api), first = f.record();
    f.body('lem-a', 'Changed proof', ['lem-supplier']);
    assert.equal(f.check().closed, false);
    assert.notEqual(api.itemHash(f.state(), 'lem-a'), first.sha256);
    const refreshed = f.record();
    f.body('lem-supplier', 'Changed supplier proof');
    assert.equal(f.check().closed, false);
    assert.notEqual(api.itemHash(f.state(), 'lem-a'), refreshed.sha256);
    assert.equal(api.checkStep3(f.state(), 'scope').closed, true, 'proof edits preserve scope');
  });

  test(`${name}: a changed escalation cannot self-clear and a current owner repair closes it`, t => {
    const f = fixture(t, api);
    f.record({ decision: 'escalate', defects: ['Supplier proof is missing.'] });
    assert.equal(f.check().owner, true);
    f.body('lem-supplier', 'Supplied corrected proof');
    assert.throws(() => f.record(), /owner must resolve/i);
    assert.throws(() => f.record({ decision: 'repaired', defects: ['Supplier supplied.'] }), /owner must resolve/i);
    const owner = f.record({ owner: true, decision: 'repaired', reason: 'Verified the supplied proof.',
      defects: ['Supplier proof was missing.'] });
    assert.deepEqual(Object.keys(owner).sort(), keys);
    assert.equal(f.check().closed, true);
    f.body('lem-a', 'Another proof change', ['lem-supplier']);
    assert.equal(f.check().owner, true, 'stale owner decisions retain owner authority');
    assert.equal(f.check().closed, false);
  });

  test(`${name}: reopen binds the prior receipt and requires a fresh author record`, t => {
    const f = fixture(t, api);
    const escalated = f.record({ decision: 'escalate', defects: ['Missing local argument.'] });
    const reopened = f.record({ owner: true, decision: 'reopen', reason: 'Supply the local argument.',
      defects: ['Missing local argument.'] });
    assert.equal(reopened.reopens_review_sha256, digest(escalated));
    assert.deepEqual(Object.keys(reopened).sort(), [...keys, 'reopens_review_sha256'].sort());
    assert.equal(f.check().closed, false);
    assert.equal(f.check().owner, false);
    f.body('lem-a', 'Now includes the local argument', ['lem-supplier']);
    assert.equal(f.check().closed, false, 'content edits alone do not certify completion');
    assert.match(f.check().reason, /fresh post-reopen/i);
    const fresh = f.record({ decision: 'repaired', defects: ['Missing local argument supplied.'] });
    assert.notEqual(digest(fresh), reopened.reopens_review_sha256);
    assert.equal(f.check().closed, true);
  });

  test(`${name}: valid legacy v1 keeps confidence and extra dependency staleness`, t => {
    const f = fixture(t, api);
    f.body('lem-extra', 'Legacy additional supplier');
    const legacy = { version: 1, run: 'demo', phase: 'item', target: 'lem-a',
      decision: 'accept', owner: false, confidence: 1, dependencies: ['lem-extra'],
      reason: 'Legacy review.', sha256: api.itemHash(f.state(), 'lem-a', ['lem-extra']),
      at: '2026-01-01T00:00:00.000Z' };
    f.put('demo-step3b-review-lem-a.json', legacy);
    assert.equal(f.check().closed, true);
    f.put('demo-step3b-review-lem-a.json', { ...legacy, confidence: .99 });
    assert.equal(f.check().closed, false, 'v1 confidence semantics are preserved');
    f.put('demo-step3b-review-lem-a.json', legacy);
    f.body('lem-extra', 'Changed legacy additional supplier');
    assert.equal(f.check().closed, false);
    assert.equal(api.checkStep3(f.state(), 'scope').closed, true);
  });

  test(`${name}: reopening a legacy escalation still binds its complete receipt`, t => {
    const f = fixture(t, api);
    const legacy = { version: 1, run: 'demo', phase: 'item', target: 'lem-a',
      decision: 'escalate', owner: false, dependencies: [], reason: 'Legacy missing lemma.',
      sha256: api.itemHash(f.state(), 'lem-a'), at: '2026-01-01T00:00:00.000Z' };
    f.put('demo-step3b-review-lem-a.json', legacy);
    const reopened = f.record({ owner: true, decision: 'reopen', defects: ['Legacy missing lemma.'] });
    assert.equal(reopened.reopens_review_sha256, digest(legacy));
    assert.equal(f.check().closed, false);
    f.record({ decision: 'repaired', defects: ['Legacy missing lemma supplied.'] });
    assert.equal(f.check().closed, true);
  });

  test(`${name}: malformed or expanded v2 receipts fail closed on read`, t => {
    const f = fixture(t, api), good = f.record();
    for (const patch of [
      { confidence: 1 }, { dependencies: [] }, { sha256: 'broken' }, { at: 'yesterday' },
      { reason: 'Two\nlines' }, { defects: [''] }, { decision: 'hold' },
      { decision: 'escalate', defects: [] },
    ]) {
      f.put('demo-step3b-review-lem-a.json', { ...good, ...patch });
      assert.throws(() => f.check(), /receipt|invalid|defect|reason/i);
    }
    f.put('demo-step3b-review-lem-a.json', good);
    assert.equal(f.check().closed, true);
  });

  test(`${name}: Step 3a scope remains a version1 receipt`, t => {
    const f = fixture(t, api), scope = f.scope();
    assert.equal(scope.version, 1);
    assert.ok(!Object.hasOwn(scope, 'defects'));
    assert.ok(!Object.hasOwn(scope, 'dependencies'));
    assert.equal(scope.sha256, api.scopeHash(f.state(), 'a'));
    assert.equal(api.checkStep3(f.state(), 'scope').closed, true);
    f.pages[0].items[0].statement = 'Changed claim';
    f.put('demo-batch-1.pages.json', f.pages);
    assert.equal(api.checkStep3(f.state(), 'scope').closed, false);
  });

  test(`${name}: CLI writes a minimal item without legacy bookkeeping flags`, t => {
    const f = fixture(t, api);
    const result = spawnSync(process.execPath, [fileURLToPath(new URL(tool, import.meta.url)),
      'record-item', '--run', 'demo', '--item', 'lem-a', '--decision', 'accept',
      '--reason', 'Authored the stated claim.'], { cwd: f.root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(Object.keys(JSON.parse(result.stdout)).sort(), keys);
    assert.equal(f.check().closed, true);
    const repaired = spawnSync(process.execPath, [fileURLToPath(new URL(tool, import.meta.url)),
      'record-item', '--run', 'demo', '--item', 'lem-a', '--decision', 'repaired',
      '--reason', 'Added the missing argument.', '--defects', '["dependency"]'],
    { cwd: f.root, encoding: 'utf8' });
    assert.equal(repaired.status, 0, repaired.stderr);
    assert.deepEqual(JSON.parse(repaired.stdout).defects, ['dependency']);
    assert.equal(f.check().closed, true);
  });
}
