import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, chmodSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { importMathematics, verifyMathematicsImports } from './physics-imports.mjs';
import { originalMaintenance, originalMaintenancePath } from './original-maintenance.mjs';
import { gateReviewSnapshot } from '../physics-autopilot/src/owner-gate-recertification.mjs';
const sha = value => createHash('sha256').update(value).digest('hex');
function fixture(t, { metadataOnly = false } = {}) {
  const base = mkdtempSync(join(tmpdir(), 'original-maintenance-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = join(base, 'physics'), source = join(base, 'math'), run = 'demo';
  for (const dir of [root, source]) for (const sub of ['items', 'library/math', 'research']) mkdirSync(join(dir, sub), { recursive: true });
  const item = (id, title, deps = [], body = 'A fixture definition.') => `---\nid: ${id}\nkind: definition\ntitle: ${title}\nstatus: published\ndeps: ${JSON.stringify(deps)}\nverification:\n  precheck: n/a\n---\n\n## Definition\n\n${body}\n`;
  const main = 'items/def-supplier.md', deep = 'items/def-deep.md';
  const before = item('def-supplier', 'Supplier', ['def-deep'], 'Use the definition ([[def-deep]]) for every input.')
    .replace('verification:', 'aliases: [supplier-alias]\nverification:');
  writeFileSync(join(source, main), before);
  writeFileSync(join(source, deep), item('def-deep', 'Deeper definition'));
  writeFileSync(join(source, 'items/def-unrelated.md'), item('def-unrelated', 'Unrelated'));
  writeFileSync(join(source, 'library/math/supplier.md'), '---\npage: supplier\nstatus: published\nitems: [def-supplier, def-deep]\n---\n');
  writeFileSync(join(source, 'library/math/unrelated.md'), '---\npage: unrelated\nstatus: published\nitems: [def-unrelated]\n---\n');
  importMathematics(root, source);
  const page = { id: 'selected', category: 'math', kind: 'A', order: 2, library: 'mathematics', requires: [],
    items: [{ id: 'def-local', kind: 'definition', domain: 'mathematics', deps: ['supplier-alias'], dependency_roles: { 'supplier-alias': 'mathematical-premise' } }] };
  writeFileSync(join(root, 'research/demo-batch-1.pages.json'), JSON.stringify([page]));
  writeFileSync(join(root, 'research/plan-spec.json'), JSON.stringify({ pages: [{ ...page, items: [] }] }));
  writeFileSync(join(root, 'items/def-local.md'), item('def-local', 'Local', ['supplier-alias'])
    .replace('status: published', 'status: draft\ndomain: mathematics\ndependency_roles: { supplier-alias: mathematical-premise }'));
  writeFileSync(join(root, 'library/math/selected.md'), '---\npage: selected\nlibrary: mathematics\nitems: [def-local]\n---\n');
  const current = before.replace('verification:\n', 'verification:\n  repair: research/owner-repair.json\n');
  writeFileSync(join(source, main), metadataOnly ? current : current.replace('[[def-deep]]', 'Deeper definition').trimEnd() + '\n\n## Definition references\n\n[[def-deep]]\n\n');
  const evidence = 'research/demo-owner-review.md';
  writeFileSync(join(root, evidence), 'Fixture-only root scientific review: original definition and consumer use remain unchanged by these exact mechanical edits.');
  const pinned = JSON.parse(readFileSync(join(root, 'research/math-imports.json'))).files.find(row => row.path === main).sha256;
  const hashFile = path => sha(readFileSync(resolve(root, path)));
  const original = join(source, main);
  const review = { version: 1, run, reviewer: '/root', native_review: false,
    reason: 'Root reviewed the exact original reference relocation and repair locator; all public claims and actual consumer uses are unchanged.',
    import_receipt_sha256: hashFile('research/math-imports.json'),
    frontier: { 'research/demo-batch-1.pages.json': hashFile('research/demo-batch-1.pages.json') },
    entries: [{ path: main, pinned_sha256: pinned, original_path: original, original_sha256: hashFile(original),
      evidence: [{ path: evidence, sha256: hashFile(evidence) }],
      consumers: [{ id: 'def-local', decision: 'unaffected', reason: 'Reviewed the actual local definition and its supplier chain; the exact public input and all consumer uses are unchanged.' }],
      consumer_sha256: { 'def-local': hashFile('items/def-local.md') },
      titles: metadataOnly ? [] : [{ id: 'def-deep', sha256: hashFile(deep) }] }], inputs: {} };
  function seal() {
    const entry = review.entries[0];
    review.inputs = { 'research/math-imports.json': review.import_receipt_sha256, ...review.frontier,
      [main]: entry.pinned_sha256, [entry.original_path]: entry.original_sha256,
      ...Object.fromEntries(entry.evidence.map(row => [row.path, row.sha256])),
      ...Object.fromEntries(Object.entries(entry.consumer_sha256).map(([id, hash]) => [`items/${id}.md`, hash])),
      ...Object.fromEntries(entry.titles.map(row => [`items/${row.id}.md`, row.sha256])) };
    writeFileSync(originalMaintenancePath(root, run), JSON.stringify(review));
  }
  return { root, source, run, main, deep, before, current, original, evidence, pinned, review, seal,
    verify: options => verifyMathematicsImports(root, { run, ...options }),
    rebindOriginal() { review.entries[0].original_sha256 = hashFile(original); seal(); } };
}
test('exact reviewed reference relocation and added repair locator preserve immutable imports and standalone guards', t => {
  const f = fixture(t), pinBytes = readFileSync(join(f.root, f.main));
  assert.throws(() => f.verify(), /mathematics import changed/);
  f.seal(); assert.ok(f.verify() > 0); assert.ok(f.verify({ frontierOnly: true }) > 0);
  assert.deepEqual(readFileSync(join(f.root, f.main)), pinBytes);
  assert.equal(sha(pinBytes), f.pinned);
  assert.throws(() => verifyMathematicsImports(f.root), /mathematics import changed/);
  assert.throws(() => f.verify({ planning: true }), /mathematics import changed/);
});
test('repair-locator-only original maintenance is guarded independently', t => {
  const f = fixture(t, { metadataOnly: true }); f.seal(); assert.ok(f.verify() > 0);
  writeFileSync(f.original, readFileSync(f.original, 'utf8').replace('Supplier', 'Changed supplier title'));
  f.rebindOriginal(); assert.throws(() => f.verify(), /metadata\/interface/);
});
test('resealed receipts cannot accept substantive body, dependency, source, status or link edits', t => {
  for (const change of [
    text => text.replace('every input', 'some inputs'),
    text => text.replace('deps: ["def-deep"]', 'deps: []'),
    text => text.replace('status: published', 'status: draft'),
    text => text.replace('title: Supplier', 'title: New supplier'),
    text => text.replace('[[def-deep]]', '[[def-unrelated]]'),
    text => text + '\n## Proof\nA new argument.\n',
    text => text.replace('verification:', 'sources: { references: [] }\nverification:'),
    text => text.replace('  precheck: n/a', '  precheck: pass'),
  ]) {
    const f = fixture(t); f.seal(); writeFileSync(f.original, change(readFileSync(f.original, 'utf8'))); f.rebindOriginal();
    assert.throws(() => f.verify(), /Invalid original maintenance/);
  }
});
test('stale original, pin, frontier, evidence and consumer bindings fail closed', t => {
  for (const path of ['original', 'research/demo-batch-1.pages.json', 'research/demo-owner-review.md', 'items/def-local.md', 'items/def-deep.md']) {
    const f = fixture(t); f.seal(); const file = path === 'original' ? f.original : join(f.root, path);
    chmodSync(file, 0o644); writeFileSync(file, readFileSync(file, 'utf8') + '\n');
    assert.throws(() => f.verify(), /Invalid original maintenance/);
  }
  const f = fixture(t); f.seal(); const file = join(f.root, f.main); chmodSync(file, 0o644); writeFileSync(file, f.before + '\n');
  assert.throws(() => f.verify(), /Invalid original maintenance/);
});
test('missing, unrelated, duplicate, foreign and incomplete root dispositions grant no acceptance', t => {
  for (const edit of [
    r => r.run = 'other', r => r.reviewer = 'agent', r => r.native_review = true,
    r => r.entries[0].evidence = [], r => r.entries[0].consumers = [],
    r => r.entries[0].consumers[0].reason = '', r => r.entries.push(r.entries[0]),
    r => r.entries[0].path = 'items/def-unrelated.md', r => r.entries[0].titles = [],
    r => r.frontier['research/demo-batch-2.pages.json'] = '0'.repeat(64),
  ]) {
    const f = fixture(t); edit(f.review); f.seal(); assert.throws(() => f.verify(), /Invalid original maintenance|ENOENT/);
  }
});
test('ordinary owner snapshots bind receipt presence, scientific evidence, original and consumer bytes', t => {
  const f = fixture(t), ctx = { repo: f.root, run: f.run };
  const gates = [{ id: 'physics-content', argv: ['node', 'tools/physics-support/physics-check.mjs', '--run', f.run] }];
  const absent = gateReviewSnapshot(ctx, gates, ['1-scaffold']);
  assert.equal(absent.inputs.find(row => row.path === originalMaintenancePath(f.root, f.run)).sha256, null);
  f.seal(); const snapshot = gateReviewSnapshot(ctx, gates, ['1-scaffold']);
  for (const path of [originalMaintenancePath(f.root, f.run), join(f.root, f.evidence), f.original, join(f.root, 'items/def-local.md')])
    assert.equal(snapshot.inputs.find(row => row.path === path).sha256, sha(readFileSync(path)));
  writeFileSync(join(f.root, f.evidence), 'Changed review evidence.');
  assert.notEqual(gateReviewSnapshot(ctx, gates, ['1-scaffold']).sha256, snapshot.sha256);
});
test('physics-content and run-commit use the same guarded original acceptance and retain later checks', t => {
  const f = fixture(t); f.seal();
  const check = spawnSync(process.execPath, [fileURLToPath(new URL('./physics-check.mjs', import.meta.url)), '--root', f.root, '--run', f.run], { encoding: 'utf8' });
  assert.equal(check.status, 0, check.stderr); assert.match(check.stdout, /physics-content: 0 error/);
  const commit = spawnSync(process.execPath, [fileURLToPath(new URL('./run-commit.mjs', import.meta.url)), '--run', f.run, '--require-proof-layout', '--check'],
    { encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: f.root } });
  assert.notEqual(commit.status, 0); assert.match(commit.stderr, /demo-proof-layout\.json/); assert.doesNotMatch(commit.stderr, /mathematics import changed/);
});

function changedOriginalPaths(error) {
  return [...error.message.matchAll(/^mathematics import changed: ([^;]+); reconcile and re-import before a new run$/gm)]
    .map(match => match[1]);
}
function changeOriginal(f, path, suffix = '\nAn independently changed current original.\n') {
  const file = join(f.source, path);
  writeFileSync(file, readFileSync(file, 'utf8') + suffix);
}
test('scoped original drift reports every reached mismatch in path order and excludes unrelated originals', t => {
  const f = fixture(t);
  changeOriginal(f, f.deep);
  changeOriginal(f, 'library/math/supplier.md');
  changeOriginal(f, 'items/def-unrelated.md');
  changeOriginal(f, 'library/math/unrelated.md');
  // Deliberately reverse receipt order: diagnostics must not depend on it.
  const receiptPath = join(f.root, 'research/math-imports.json');
  const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
  receipt.files.reverse(); writeFileSync(receiptPath, JSON.stringify(receipt));
  const expected = [f.deep, f.main, 'library/math/supplier.md'].sort();
  assert.throws(() => f.verify(), error => {
    assert.deepEqual(changedOriginalPaths(error), expected);
    assert.equal(error.message.split('\n').length, expected.length);
    assert.doesNotMatch(error.message, /unrelated/);
    return true;
  });
});
test('an exactly accepted current original is omitted while other reached drift is aggregated', t => {
  const f = fixture(t); f.seal();
  const receipt = JSON.parse(readFileSync(join(f.root, 'research/math-imports.json'), 'utf8'));
  assert.equal(f.verify(), receipt.files.length);
  changeOriginal(f, f.deep);
  changeOriginal(f, 'library/math/supplier.md');
  assert.throws(() => f.verify(), error => {
    assert.deepEqual(changedOriginalPaths(error), [f.deep, 'library/math/supplier.md']);
    assert.ok(!error.message.includes(f.main));
    return true;
  });
});
test('local immutable pin failures remain immediate despite multiple current original changes', t => {
  const f = fixture(t); changeOriginal(f, f.deep);
  const local = join(f.root, f.deep);
  chmodSync(local, 0o644); writeFileSync(local, readFileSync(local, 'utf8') + '\nLocal snapshot tampering.\n');
  assert.throws(() => f.verify(), error => {
    assert.deepEqual(changedOriginalPaths(error), [f.deep]);
    assert.equal(error.message.split('\n').length, 1);
    return true;
  });
});
test('publication and source classification guards are not hidden by deferred original drift', t => {
  for (const [before, after, expected] of [
    ['status: published', 'status: draft', /mathematics source publication withdrawn: items\/def-deep.md/],
    ['kind: definition', 'kind: postulate', /physical item in mathematics source:/],
    ['kind: definition', 'kind: definition\ndomain: physics', /physical item in mathematics source:/],
    ['id: def-deep', 'id: def-renamed', /mathematics source prerequisite identity def-deep is unknown/],
  ]) {
    const f = fixture(t), path = join(f.source, f.deep);
    writeFileSync(path, readFileSync(path, 'utf8').replace(before, after));
    assert.throws(() => f.verify(), error => {
      assert.match(error.message, expected);
      assert.deepEqual(changedOriginalPaths(error), []);
      return true;
    });
  }
});
test('standalone import CLI retains failing exit status and reports all selected raw original mismatches', t => {
  const f = fixture(t); changeOriginal(f, f.deep); changeOriginal(f, 'items/def-unrelated.md');
  const cli = spawnSync(process.execPath, [fileURLToPath(new URL('./physics-imports.mjs', import.meta.url)), '--verify', '--root', f.root], { encoding: 'utf8' });
  assert.equal(cli.status, 1);
  assert.equal(cli.stdout, '');
  assert.deepEqual(changedOriginalPaths({message:cli.stderr.trimEnd()}), [f.deep, f.main, 'items/def-unrelated.md'].sort());
});

const relocationCommit = '29450da28f82d81f6865b920e64b2dd106cbe4e6';
const relocationBlob = '7593c68f7ed478e48d42176d47580c5899ef10b3';
function relocationFixture(t) {
  const base = mkdtempSync(join(tmpdir(), 'original-metadata-relocation-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = join(base, 'physics'), source = join(base, 'math'), run = 'relocation';
  for (const dir of [root, source]) for (const sub of ['items', 'research']) mkdirSync(join(dir, sub), { recursive: true });
  const repository = fileURLToPath(new URL('../../', import.meta.url));
  const git = args => {
    const r = spawnSync('git', args, { cwd: repository });
    assert.equal(r.status, 0, r.stderr.toString()); return r.stdout;
  };
  writeFileSync(join(source, '.git'), `gitdir: ${git(['rev-parse', '--absolute-git-dir']).toString().trim()}\n`);
  const path = 'items/lem-borel-product-of-second-countable-spaces.md';
  const current = git(['show', `${relocationCommit}:${path}`]);
  const before = Buffer.from(current.toString().replace('  judge:\n', 'verification:\n  precheck: pending\n  judge:\n'));
  assert.equal(sha(before), '65062144095b46cdb23b0b159812f572217ad831bd3aff0f34fae9d72cf2c05b');
  assert.equal(sha(current), 'faac2722234dc29b7e2e7b4adbf31695fc61371c3f9afc1e335dfac2c8cff432');
  const original = join(source, path);
  writeFileSync(join(root, path), before); writeFileSync(original, current);
  const receipt = { source_root: source, files: [{ path, sha256: sha(before) }] };
  writeFileSync(join(root, 'research/math-imports.json'), JSON.stringify(receipt));
  const frontier = 'research/relocation-batch-1.pages.json', evidence = 'research/relocation-owner-review.md';
  writeFileSync(join(root, frontier), '[{"id":"selected"}]');
  writeFileSync(join(root, evidence), 'Fixture evidence reviews the exact metadata-only relocation and unchanged local consumer use.');
  writeFileSync(join(root, 'items/def-local.md'), 'Fixture consumer bytes.');
  const hashFile = p => sha(readFileSync(resolve(root, p)));
  const entry = { path, pinned_sha256: sha(before), original_path: original, original_sha256: sha(current),
    verification_metadata_relocation: { source_commit: relocationCommit, source_blob: relocationBlob },
    evidence: [{ path: evidence, sha256: hashFile(evidence) }], titles: [],
    consumers: [{ id: 'def-local', decision: 'unaffected', reason: 'The actual selected consumer uses the unchanged statement and proof, not the relocated metadata.' }],
    consumer_sha256: { 'def-local': hashFile('items/def-local.md') } };
  const review = { version: 1, run, reviewer: '/root', native_review: false,
    reason: 'Explicit fixture Root opt-in to the exact historically committed metadata relocation without any proof or stamp acceptance.',
    import_receipt_sha256: hashFile('research/math-imports.json'), frontier: { [frontier]: hashFile(frontier) }, entries: [entry] };
  function seal() {
    review.inputs = { 'research/math-imports.json': review.import_receipt_sha256, ...review.frontier,
      [path]: entry.pinned_sha256, [original]: entry.original_sha256, [evidence]: entry.evidence[0]?.sha256,
      'items/def-local.md': entry.consumer_sha256['def-local'] };
    writeFileSync(originalMaintenancePath(root, run), JSON.stringify(review));
  }
  const scope = { paths: new Set([path]), importedItems: new Set(['lem-borel-product-of-second-countable-spaces']),
    owned: new Set(['def-local']), consumers: new Map([['lem-borel-product-of-second-countable-spaces', ['def-local']]]) };
  return { root, source, run, path, original, current, before, review, entry, receipt, seal,
    verify: options => originalMaintenance(root, run, { receipt, scope, ...options }) };
}
test('exact opt-in metadata relocation accepts committed bytes with unchanged immutable pin and full Root bindings', t => {
  const f = relocationFixture(t);
  assert.equal(f.verify().size, 0);
  f.seal(); assert.equal(f.verify().get(f.path), sha(f.current));
  assert.deepEqual(readFileSync(join(f.root, f.path)), f.before);
  assert.equal(f.verify({ planning: true }).size, 0);
  // No run context cannot adopt the scoped Root exception.
  assert.equal(originalMaintenance(f.root, undefined, { receipt: f.receipt }).size, 0);
});
test('relocation cannot accept resealed body, judge, source or repair-locator changes', t => {
  for (const mutate of [
    s => s.replace('second-countable topological spaces', 'arbitrary topological spaces'),
    s => s.replace('verdict: pass', 'verdict: pending'),
    s => s.replace('John K. Hunter', 'Changed source author'),
    s => s.replace('sources:\n', 'verification: { repair: research/repair.json }\nsources:\n'),
    s => s + '\n## Statement references\n\n[[def-borel-sigma-algebra]]\n',
  ]) {
    const f = relocationFixture(t); writeFileSync(f.original, mutate(f.current.toString()));
    f.entry.original_sha256 = sha(readFileSync(f.original)); f.seal();
    assert.throws(() => f.verify(), /verification metadata relocation/);
  }
});
test('relocation opt-in must have exact typed commit/blob and belong to the bound entry', t => {
  for (const mutate of [
    f => delete f.entry.verification_metadata_relocation,
    f => f.entry.verification_metadata_relocation = true,
    f => f.entry.verification_metadata_relocation.source_commit = '0'.repeat(40),
    f => f.entry.verification_metadata_relocation.source_blob = '0'.repeat(40),
    f => f.entry.verification_metadata_relocation.extra = true,
    f => { f.review.verification_metadata_relocation = f.entry.verification_metadata_relocation; delete f.entry.verification_metadata_relocation; },
    f => f.entry.titles = [{ id: 'def-borel-sigma-algebra', sha256: '0'.repeat(64) }],
    f => f.entry.consumers = [],
  ]) {
    const f = relocationFixture(t); mutate(f); f.seal();
    assert.throws(() => f.verify(), /Invalid original maintenance/);
  }
  const f = relocationFixture(t); f.seal();
  delete f.review.inputs[f.original]; writeFileSync(originalMaintenancePath(f.root, f.run), JSON.stringify(f.review));
  assert.throws(() => f.verify(), /missing input binding/);
});
test('relocation verifies actual Git commit/blob bytes and still requires current evidence and consumers', t => {
  const f = relocationFixture(t); f.seal(); rmSync(join(f.source, '.git'));
  assert.throws(() => f.verify(), /Git binding/);
  for (const file of ['research/relocation-owner-review.md', 'items/def-local.md']) {
    const f = relocationFixture(t); f.seal(); writeFileSync(join(f.root, file), 'Changed bound bytes.');
    assert.throws(() => f.verify(), /changed\/nonlocal input/);
  }
});
