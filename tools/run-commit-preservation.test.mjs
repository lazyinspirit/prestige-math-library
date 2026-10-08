import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { chmodSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readlinkSync,
  rmSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { sha256 } from './step9-lib.mjs';
import { assertOwnedWorkingPreserved } from './run-commit-scope.mjs';

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
