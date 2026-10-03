import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { recordStep1, checkStep1 } from './step1-decisions.mjs';
import { loadStep3 } from './step3-decisions.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'step1-decisions-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research')); mkdirSync(join(root, 'items'));
  const pages = [
    { id: 'alpha-page', kind: 'A', companion: 'alpha-examples', requires: [],
      items: [{ id: 'lem-local-first', deps: ['def-published-input'], statement: 'first', strategy: 'proof' }] },
    { id: 'alpha-examples', kind: 'B', companion: 'alpha-page', requires: ['alpha-page'],
      items: [{ id: 'ex-local-consumer', deps: ['lem-local-first'], statement: 'example' }] },
  ];
  const path = join(root, 'research/demo-batch-1.pages.json');
  const save = () => writeFileSync(path, JSON.stringify(pages)); save();
  writeFileSync(join(root, 'research/plan-spec.json'), '{"pages":[]}');
  const supplier = join(root, 'items/def-published-input.md');
  writeFileSync(supplier, '---\nid: def-published-input\nstatus: published\ndeps: []\n---\nDefinition.');
  const record = (item, extra = {}) => recordStep1(root, {
    run: 'demo', item, decision: 'ready', reason: 'Examined exact contracts and proof.', dependencies: [], ...extra,
  });
  const check = () => checkStep1(loadStep3(root, 'demo'));
  return { root, pages, save, supplier, record, check };
}

test('no legacy result is readiness; all current item records are required', t => {
  const f = fixture(t);
  assert.equal(f.check().closed, false);
  f.record('lem-local-first');
  assert.equal(f.check().ready, 1);
  f.record('ex-local-consumer');
  assert.equal(f.check().closed, true);
  assert.throws(() => f.record('lem-local-first'), /unchanged ready/);
});

test('changed local or published dependencies invalidate affected readiness', t => {
  const f = fixture(t);
  f.record('lem-local-first'); f.record('ex-local-consumer');
  f.pages[0].items[0].strategy = 'Changed argument'; f.save();
  assert.equal(f.check().ready, 0);
  f.record('lem-local-first'); f.record('ex-local-consumer');
  writeFileSync(f.supplier, readFileSync(f.supplier, 'utf8') + '\nChanged supplier.');
  assert.equal(f.check().ready, 0);
});

test('examined implicit dependencies invalidate readiness too', t => {
  const f = fixture(t);
  const path = join(f.root, 'items/lem-implicit-input.md');
  writeFileSync(path, '---\nid: lem-implicit-input\ndeps: []\n---\nOriginal.');
  f.record('lem-local-first', { dependencies: ['lem-implicit-input'] });
  f.record('ex-local-consumer');
  writeFileSync(path, readFileSync(path, 'utf8') + '\nChanged.');
  assert.equal(f.check().work[0].item, 'lem-local-first');
});

test('escalations remain owner-controlled even after inputs change', t => {
  const f = fixture(t);
  f.record('lem-local-first', { decision: 'escalated', reason: 'Unmet prerequisite.' });
  f.pages[0].items[0].statement = 'Changed'; f.save();
  assert.throws(() => f.record('lem-local-first'), /Only the owner/);
  f.record('lem-local-first', { owner: true, reason: 'Applied local repair; receipt in notes.' });
  f.record('ex-local-consumer');
  assert.equal(f.check().closed, true);
  assert.throws(() => f.record('lem-local-first'), /Only the owner/);
});

test('empty scaffolds, malformed records and missing evidence fail closed', t => {
  const f = fixture(t);
  assert.throws(() => f.record('not-a-run-item'), /Unknown run item/);
  assert.throws(() => f.record('lem-local-first', { reason: '' }), /evidence/);
  assert.throws(() => f.record('lem-local-first', { dependencies: undefined }), /dependency IDs/);
  assert.throws(() => f.record('lem-local-first', { decision: 'accept' }), /ready or escalated/);
  f.pages[1].items = []; f.save();
  assert.ok(f.check().work.some(row => row.reason === 'Empty scaffold inventory'));
  writeFileSync(join(f.root, 'research/demo-step1-lem-local-first.json'), '{"version":2}');
  assert.throws(f.check, /Invalid Step 1 record/);
});
