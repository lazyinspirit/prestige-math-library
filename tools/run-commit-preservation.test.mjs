import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { chmodSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readlinkSync, readdirSync,
  rmSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { sha256 } from './step9-lib.mjs';
import { assertOwnedWorkingPreserved, assertOutsidePreservationSame, assertCurrentOutsidePreserved,
  captureOutsidePreservation } from './run-commit-scope.mjs';

function state(root, path) {
  const full = join(root, path);
  let stat;
  try { stat = lstatSync(full); }
  catch (error) { if (error.code === 'ENOENT') return { path, kind: 'missing' }; throw error; }
  return { path, kind: stat.isSymbolicLink() ? 'symlink' : 'file', mode: stat.mode & 0o777,
    sha256: sha256(stat.isSymbolicLink() ? readlinkSync(full, { encoding: 'buffer' }) : readFileSync(full)) };
}

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'run-commit-preservation-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const git = (args, env = {}) => {
    const result = spawnSync('git', args, { cwd: root,
      env: { ...process.env, ...env }, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout;
  };
  mkdirSync(join(root, 'empty-hooks'));
  git(['init', '-b', 'main']);
  git(['config', 'core.hooksPath', join(root, 'empty-hooks')]);
  git(['config', 'user.name', 'Preservation fixture']);
  git(['config', 'user.email', 'fixture@example.invalid']);
  git(['config', 'core.filemode', 'true']);
  writeFileSync(join(root, 'owned.md'), 'validated owned bytes\n');
  writeFileSync(join(root, 'foreign.md'), 'original foreign bytes\n');
  git(['add', '--', 'owned.md', 'foreign.md']);
  git(['commit', '-m', 'fixture baseline']);
  writeFileSync(join(root, 'foreign.md'), 'foreign staged bytes\n');
  chmodSync(join(root, 'foreign.md'), 0o755);
  git(['add', '--', 'foreign.md']);
  writeFileSync(join(root, 'foreign.md'), 'foreign working bytes beyond staging\n');
  const foreignIndex = git(['ls-files', '--stage', '--', 'foreign.md']);
  const foreignWorking = state(root, 'foreign.md');
  const head = git(['rev-parse', 'HEAD']);
  const assertForeign = () => {
    assert.equal(git(['ls-files', '--stage', '--', 'foreign.md']), foreignIndex);
    assert.deepEqual(state(root, 'foreign.md'), foreignWorking);
    assert.equal(git(['rev-parse', 'HEAD']), head);
  };
  return { root, git, assertForeign };
}

function refusal(root, expected) {
  let error;
  try { assertOwnedWorkingPreserved(root, expected, 'validated owned working bytes'); }
  catch (caught) { error = caught; }
  assert.ok(error, 'changed owned state must refuse closeout');
  const prefix = 'closeout: validated owned working bytes preservation mismatch: ';
  assert.ok(error.message.startsWith(prefix));
  return JSON.parse(error.message.slice(prefix.length));
}

test('unchanged validated owned bytes pass with unrelated staged and working bytes intact', t => {
  const f = fixture(t);
  const expected = [state(f.root, 'owned.md')];
  const temporaryIndex = join(f.root, 'temporary-index');
  f.git(['read-tree', 'HEAD'], { GIT_INDEX_FILE: temporaryIndex });
  f.git(['add', '--', 'owned.md'], { GIT_INDEX_FILE: temporaryIndex });
  assertOwnedWorkingPreserved(f.root, expected, 'validated owned working bytes');
  f.assertForeign();
});

test('concurrent owned-byte mutation refuses with path and hashes, without file contents', t => {
  const f = fixture(t);
  const expected = [state(f.root, 'owned.md')];
  const secret = 'private replacement proof text\n';
  writeFileSync(join(f.root, 'owned.md'), secret);
  const changed = refusal(f.root, expected);
  assert.deepEqual(changed, [{ path: 'owned.md', before: {
    kind: 'file', mode: expected[0].mode, sha256: expected[0].sha256 }, after: {
    kind: 'file', mode: expected[0].mode, sha256: sha256(secret) } }]);
  assert.ok(!JSON.stringify(changed).includes(secret.trim()));
  assert.ok(!JSON.stringify(changed).includes('validated owned bytes'));
  f.assertForeign();
});

test('mode-only mutation refuses even when bytes remain identical', t => {
  const f = fixture(t);
  const expected = [state(f.root, 'owned.md')];
  chmodSync(join(f.root, 'owned.md'), 0o755);
  const [changed] = refusal(f.root, expected);
  assert.equal(changed.path, 'owned.md');
  assert.equal(changed.before.sha256, changed.after.sha256);
  assert.equal(changed.after.mode, 0o755);
  assert.notEqual(changed.before.mode, changed.after.mode);
  f.assertForeign();
});

test('owned deletion and missing-file creation remain hard refusals', t => {
  const f = fixture(t);
  const expected = [state(f.root, 'owned.md'), state(f.root, 'missing.md')];
  unlinkSync(join(f.root, 'owned.md'));
  writeFileSync(join(f.root, 'missing.md'), 'unexpected new bytes');
  const changed = refusal(f.root, expected);
  assert.deepEqual(changed.map(row => row.path), ['owned.md', 'missing.md']);
  assert.deepEqual(changed[0].after, { kind: 'missing' });
  assert.deepEqual(changed[1].before, { kind: 'missing' });
  assert.equal(changed[1].after.sha256, sha256('unexpected new bytes'));
  f.assertForeign();
});

test('a file replaced by a symlink refuses even with identical target contents', t => {
  const f = fixture(t);
  const expected = [state(f.root, 'owned.md')];
  writeFileSync(join(f.root, 'same-content.md'), readFileSync(join(f.root, 'owned.md')));
  unlinkSync(join(f.root, 'owned.md'));
  symlinkSync('same-content.md', join(f.root, 'owned.md'));
  const [changed] = refusal(f.root, expected);
  assert.equal(changed.before.kind, 'file');
  assert.equal(changed.after.kind, 'symlink');
  assert.equal(changed.after.sha256, sha256('same-content.md'));
  f.assertForeign();
});

test('dangling symlink target-byte mutation refuses without following the target', t => {
  const f = fixture(t);
  symlinkSync('absent-original-target', join(f.root, 'dangling-link'));
  const expected = [state(f.root, 'dangling-link')];
  assertOwnedWorkingPreserved(f.root, expected, 'validated owned working bytes');
  unlinkSync(join(f.root, 'dangling-link'));
  symlinkSync('absent-new-target', join(f.root, 'dangling-link'));
  const [changed] = refusal(f.root, expected);
  assert.equal(changed.before.kind, 'symlink');
  assert.equal(changed.after.kind, 'symlink');
  assert.equal(changed.after.sha256, sha256('absent-new-target'));
  assert.notEqual(changed.before.sha256, changed.after.sha256);
  f.assertForeign();
});

const capture = f => captureOutsidePreservation(f.root, 'fixture', { owns: path => path === 'owned.md' });
function outsideRefusal(f, before) {
  let error;
  try { assertOutsidePreservationSame(capture(f), before, 'pre-commit outside'); }
  catch (caught) { error = caught; }
  assert.ok(error, 'changed outside state must refuse closeout');
  const prefix = 'closeout: pre-commit outside preservation mismatch: ';
  assert.ok(error.message.startsWith(prefix));
  return JSON.parse(error.message.slice(prefix.length));
}

test('native outside selectors preserve foreign staged/working differences and exclude owned bytes', t => {
  const f = fixture(t), before = capture(f);
  writeFileSync(join(f.root, 'owned.md'), 'new owned bytes');
  assertOutsidePreservationSame(capture(f), before, 'pre-commit outside');
  assert.ok(!before.outside_working.some(row => row.path === 'owned.md'));
  f.assertForeign();
});

test('foreign working-byte mutation reports only outside_working and exact before/after path hashes', t => {
  const f = fixture(t), before = capture(f);
  writeFileSync(join(f.root, 'foreign.md'), 'private changed foreign text');
  const result = outsideRefusal(f, before);
  assert.deepEqual(Object.keys(result.changes), ['outside_working']);
  const [change] = result.changes.outside_working;
  assert.equal(change.path, 'foreign.md');
  assert.deepEqual(change.before, before.outside_working.find(row => row.path === 'foreign.md'));
  assert.equal(change.after.sha256, sha256('private changed foreign text'));
  assert.ok(!JSON.stringify(result).includes('private changed foreign text'));
});

test('foreign staged blob mutation reports outside_index without changing working bytes', t => {
  const f = fixture(t), before = capture(f), working = state(f.root, 'foreign.md');
  const oid = f.git(['hash-object', 'owned.md']).trim();
  f.git(['update-index', '--cacheinfo', '100755,' + oid + ',foreign.md']);
  const result = outsideRefusal(f, before);
  assert.deepEqual(Object.keys(result.changes), ['outside_index']);
  assert.equal(result.changes.outside_index[0].path, 'foreign.md');
  assert.equal(result.changes.outside_index[0].after.oid, oid);
  assert.deepEqual(state(f.root, 'foreign.md'), working);
});

test('foreign index flag mutation remains a refusal even when staged blob/mode stay identical', t => {
  const f = fixture(t), before = capture(f);
  f.git(['update-index', '--assume-unchanged', '--', 'foreign.md']);
  const result = outsideRefusal(f, before), [change] = result.changes.outside_index;
  assert.deepEqual(Object.keys(result.changes), ['outside_index']);
  assert.equal(change.path, 'foreign.md');
  assert.equal(change.before.oid, change.after.oid);
  assert.equal(change.before.mode, change.after.mode);
  assert.notEqual(change.before.flags, change.after.flags);
});

test('foreign HEAD mutation identifies the exact changed tree entry', t => {
  const f = fixture(t), before = capture(f);
  f.git(['commit', '-m', 'fixture foreign staged change']);
  const result = outsideRefusal(f, before);
  assert.deepEqual(Object.keys(result.changes), ['outside_head']);
  assert.equal(result.changes.outside_head[0].path, 'foreign.md');
  assert.notEqual(result.changes.outside_head[0].before.oid, result.changes.outside_head[0].after.oid);
});

test('foreign creation/deletion, mode change and symlink substitution all retain exact outside diagnostics', t => {
  const f = fixture(t), before = capture(f);
  unlinkSync(join(f.root, 'foreign.md'));
  symlinkSync('absent-private-target', join(f.root, 'foreign.md'));
  writeFileSync(join(f.root, 'new-outside.md'), 'private new outside bytes');
  chmodSync(join(f.root, 'new-outside.md'), 0o700);
  const result = outsideRefusal(f, before);
  assert.deepEqual(Object.keys(result.changes), ['outside_working']);
  assert.deepEqual(result.changes.outside_working.map(row => row.path), ['foreign.md', 'new-outside.md']);
  assert.equal(result.changes.outside_working[0].after.kind, 'symlink');
  assert.equal(result.changes.outside_working[0].after.sha256, sha256('absent-private-target'));
  assert.equal(result.changes.outside_working[1].before, null);
  assert.equal(result.changes.outside_working[1].after.mode, 0o700);
  assert.ok(!JSON.stringify(result).includes('private new outside bytes'));
});

test('foreign ignored operational log append remains protected, without a new exemption', t => {
  const f = fixture(t);
  writeFileSync(join(f.root, '.gitignore'), '*.log\n');
  mkdirSync(join(f.root, 'research', 'foreign-run-dispatch'), { recursive: true });
  const path = 'research/foreign-run-dispatch/worker.log';
  writeFileSync(join(f.root, path), 'before log');
  const before = capture(f);
  writeFileSync(join(f.root, path), 'before log\nnew log record');
  const result = outsideRefusal(f, before);
  assert.deepEqual(Object.keys(result.changes), ['outside_working']);
  assert.equal(result.changes.outside_working[0].path, path);
});

test('foreign mode-only mutation and deletion report their exact outside working states', t => {
  const f = fixture(t), before = capture(f);
  chmodSync(join(f.root, 'foreign.md'), 0o644);
  let result = outsideRefusal(f, before), change = result.changes.outside_working[0];
  assert.deepEqual(Object.keys(result.changes), ['outside_working']);
  assert.equal(change.before.sha256, change.after.sha256);
  assert.equal(change.after.mode, 0o644);
  unlinkSync(join(f.root, 'foreign.md'));
  result = outsideRefusal(f, before);
  change = result.changes.outside_working[0];
  assert.equal(change.path, 'foreign.md');
  assert.equal(change.after, null);
});

test('complete failure metadata survives in physical runtime directories without changing receipt/index/HEAD', t => {
  const f = fixture(t);
  mkdirSync(join(f.root, '.autopilot', 'fixture'), { recursive: true });
  const before = capture(f);
  const indexBefore = f.git(['ls-files', '--stage']), headBefore = f.git(['rev-parse', 'HEAD']);
  writeFileSync(join(f.root, 'foreign.md'), 'private concurrent outside bytes');
  assert.throws(() => assertCurrentOutsidePreserved(f.root, 'fixture', { owns: p => p === 'owned.md' }, before,
    'pre-commit outside'), /pre-commit outside preservation mismatch:.*complete metadata:/);
  const names = readdirSync(join(f.root, '.autopilot', 'fixture'));
  assert.equal(names.length, 1);
  const record = JSON.parse(readFileSync(join(f.root, '.autopilot', 'fixture', names[0])));
  assert.equal(record.label, 'pre-commit outside');
  assert.ok(!record.diagnostic.includes('private concurrent outside bytes'));
  const comparison = JSON.parse(record.diagnostic.slice(record.diagnostic.indexOf(': {') + 2));
  assert.equal(comparison.changes.outside_working[0].path, 'foreign.md');
  assert.equal(comparison.changes.outside_working[0].after.sha256, sha256('private concurrent outside bytes'));
  assert.equal(f.git(['ls-files', '--stage']), indexBefore);
  assert.equal(f.git(['rev-parse', 'HEAD']), headBefore);
});

for (const alias of ['runtime-parent', 'runtime-run']) {
  test('aliased ' + alias + ' cannot redirect diagnostic writes or override preservation refusal', t => {
    const f = fixture(t), target = join(f.root, 'diagnostic-target');
    mkdirSync(target);
    if (alias === 'runtime-parent') {
      mkdirSync(join(target, 'fixture'));
      symlinkSync(target, join(f.root, '.autopilot'));
    } else {
      mkdirSync(join(f.root, '.autopilot'));
      symlinkSync(target, join(f.root, '.autopilot', 'fixture'));
    }
    const before = capture(f);
    writeFileSync(join(f.root, 'foreign.md'), 'concurrent bytes');
    assert.throws(() => assertCurrentOutsidePreserved(f.root, 'fixture', { owns: p => p === 'owned.md' }, before,
      'pre-commit outside'), /pre-commit outside preservation mismatch:.*runtime diagnostic unavailable:/);
    assert.deepEqual(readdirSync(target), alias === 'runtime-parent' ? ['fixture'] : []);
    if (alias === 'runtime-parent') assert.deepEqual(readdirSync(join(target, 'fixture')), []);
  });
}

test('absent runtime directories leave original preservation refusal intact and are never created', t => {
  const f = fixture(t), before = capture(f);
  writeFileSync(join(f.root, 'foreign.md'), 'concurrent bytes');
  assert.throws(() => assertCurrentOutsidePreserved(f.root, 'fixture', { owns: p => p === 'owned.md' }, before,
    'pre-commit outside'), /pre-commit outside preservation mismatch:.*runtime diagnostic unavailable:/);
  assert.ok(!readdirSync(f.root).includes('.autopilot'));
});
