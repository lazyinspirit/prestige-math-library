import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, readdirSync } from 'node:fs';
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

const carrier = (f, id, fields = '') => writeFileSync(join(f.root, 'items', `${id}.md`),
  `---\nid: ${id}\n${fields}---\nDefinition.\n`);

test('local recording excludes malformed unrelated carriers during alias lookup; drained checking stays strict', t => {
  const f = fixture(t);
  carrier(f, 'def-aliased', 'names: &names [supplier-alias]\naliases: *names\ndeps: []\n');
  carrier(f, 'def-unrelated', 'aliases: [other-alias]\nphysical_scope: [unfinished\n');
  f.pages[0].items[0].deps = ['supplier-alias']; f.save();
  const row = f.record('lem-local-first');
  assert.match(row.sha256, /^[a-f0-9]{64}$/);
  assert.throws(f.check, /Flow sequence/);
  // Removing an unrelated broken carrier cannot change the actual input hash.
  rmSync(join(f.root, 'items/def-unrelated.md'));
  assert.equal(f.check().ready, 1);
  carrier(f, 'def-aliased', 'aliases: [supplier-alias]\ndeps: []\nchanged: true\n');
  assert.equal(f.check().ready, 0);
});

for (const use of ['target', 'direct', 'transitive-alias', 'examined'])
  test(`malformed ${use} carrier fails local recording without writing a readiness receipt`, t => {
    const f = fixture(t);
    const malformed = 'aliases: [broken-alias]\nphysical_scope: [unfinished\n';
    if (use === 'target') carrier(f, 'lem-local-first', malformed);
    else {
      carrier(f, 'def-broken', malformed);
      if (use === 'direct') f.pages[0].items[0].deps = ['def-broken'];
      if (use === 'transitive-alias') carrier(f, 'def-published-input', 'deps: [broken-alias]\n');
    }
    f.save();
    assert.throws(() => f.record('lem-local-first', use === 'examined' ? { dependencies: ['broken-alias'] } : {}), /Flow sequence/);
    assert.equal(readdirSync(join(f.root, 'research')).some(name => name.startsWith('demo-step1-')), false);
  });

test('relevant duplicate aliases and carrier identity claims remain blocking, including malformed claimants', t => {
  for (const malformed of [false, true]) {
    const f = fixture(t);
    carrier(f, 'def-first', 'aliases: [supplier-alias]\n');
    carrier(f, 'def-second', `aliases: [supplier-alias]\n${malformed ? 'scope: [unfinished\n' : ''}`);
    f.pages[0].items[0].deps = ['supplier-alias']; f.save();
    assert.throws(() => f.record('lem-local-first'), /Ambiguous.*supplier-alias/);
    carrier(f, 'def-second', `id: def-published-input\n${malformed ? 'scope: [unfinished\n' : ''}`);
    f.pages[0].items[0].deps = ['def-published-input']; f.save();
    assert.throws(() => f.record('lem-local-first'), /Ambiguous.*def-published-input/);
  }
});

test('nonmapping, mismatched identity and malformed dependency declarations in reached carriers fail closed', t => {
  for (const content of ['---\n[not, a, mapping]\n---\n', '---\nid: def-other\n---\n', '---\nid: def-published-input\ndeps: wrong\n---\n', '---\nid: def-published-input\naliases: wrong\n---\n']) {
    const f = fixture(t);
    writeFileSync(f.supplier, content);
    assert.throws(() => f.record('lem-local-first'), /mapping|identity|dependency IDs/);
  }
});

test('local recording keeps complete manifest structural and ownership checks', t => {
  for (const change of [
    f => { f.pages[1].items.push({ id: 'lem-local-first' }); f.save(); },
    f => { f.pages[1].id = f.pages[0].id; f.save(); },
    f => { f.pages[0].companion = 'absent'; f.save(); },
    f => { f.pages[1].requires = 'invalid'; f.save(); },
    f => writeFileSync(join(f.root, 'research/demo-batch-2.pages.json'), '{unfinished'),
  ]) {
    const f = fixture(t); change(f);
    assert.throws(() => f.record('lem-local-first'), /Duplicate|ownership|pair|JSON/);
  }
});

test('a malformed alias declaration used as a supplier cannot become a missing-input sentinel', t => {
  const f = fixture(t);
  carrier(f, 'def-malformed-alias', 'aliases: bad-alias\n');
  f.pages[0].items[0].deps = ['bad-alias']; f.save();
  assert.throws(() => f.record('lem-local-first'), /aliases must name dependency IDs/);
});
