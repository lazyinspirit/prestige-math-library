import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { resolveHistoricalRunPath, verifyRunRepositoryRelocation } from './run-repository-relocation.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'physics-relocation-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research', 'r-dispatch'), { recursive: true });
  const prompt = 'research/r-dispatch/alpha-drift.attempt-1.prompt.md', result = 'research/r-dispatch/alpha-drift.attempt-1.result.json';
  const old = root + '-removed', text = 'Genuine unchanged historical assignment.\n';
  writeFileSync(join(root, prompt), text);
  const frozen = JSON.stringify({ run: 'r', prompt: join(old, prompt), ok: true }) + '\n';
  writeFileSync(join(root, result), frozen);
  const receipt = { version: 1, kind: 'root-authorized-run-repository-relocation', run: 'r', reviewer: '/root', old_root: old, new_root: root,
    reason: 'Root explicitly relocated these exact frozen native bytes without rewriting history or granting any coverage.', artifacts: { [prompt]: sha(text), [result]: sha(frozen) } };
  const save = () => writeFileSync(join(root, 'research/r-repository-relocation.json'), JSON.stringify(receipt)); save();
  const resolve = (path = join(old, prompt), extra = {}) => resolveHistoricalRunPath(root, 'r', path, { expectedPath: prompt, sourceArtifact: result, ...extra });
  return { root, old, prompt, result, frozen, receipt, save, resolve };
}
test('removed repository resolves only sealed identical prompt and referring result; frozen bytes stay unchanged', t => {
  const f = fixture(t);
  assert.equal(f.resolve(), join(f.root, f.prompt));
  assert.equal(readFileSync(join(f.root, f.result), 'utf8'), f.frozen);
  assert.equal(verifyRunRepositoryRelocation(f.root, 'r').artifacts, 2);
  assert.equal(resolveHistoricalRunPath(f.root, 'r', f.prompt), join(f.root, f.prompt));
});
test('Root receipt never authorizes changed, unlisted, foreign, wrong-target or traversal paths', t => {
  for (const mode of ['prompt', 'result', 'unlisted', 'foreign', 'wrong-target', 'traversal', 'missing-receipt', 'source-unbound']) {
    const f = fixture(t);
    if (mode === 'prompt') writeFileSync(join(f.root, f.prompt), 'Changed');
    if (mode === 'result') writeFileSync(join(f.root, f.result), 'Changed');
    if (mode === 'unlisted') delete f.receipt.artifacts[f.prompt];
    if (mode === 'source-unbound') delete f.receipt.artifacts[f.result];
    f.save();
    if (mode === 'missing-receipt') rmSync(join(f.root, 'research/r-repository-relocation.json'));
    assert.throws(() => f.resolve(mode === 'foreign' ? '/unrelated/research/r-dispatch/x' : mode === 'traversal' ? join(f.old, 'research') + '/../' + f.prompt : undefined,
      mode === 'wrong-target' ? { expectedPath: 'research/r-other.prompt.md' } : {}), undefined, mode);
  }
});
test('malformed identity, another run, changed expected digest and symlink carriers fail closed', t => {
  for (const mode of ['reviewer', 'run', 'root', 'unsafe', 'digest', 'symlink']) {
    const f = fixture(t);
    if (mode === 'reviewer') f.receipt.reviewer = 'someone';
    if (mode === 'run') f.receipt.run = 'other';
    if (mode === 'root') f.receipt.new_root += '-other';
    if (mode === 'unsafe') f.receipt.artifacts['../escape'] = '0'.repeat(64);
    if (mode === 'symlink') { rmSync(join(f.root, f.prompt)); symlinkSync(join(f.root, f.result), join(f.root, f.prompt)); }
    f.save();
    assert.throws(() => f.resolve(undefined, mode === 'digest' ? { expectedSha256: '0'.repeat(64) } : {}), undefined, mode);
  }
});
test('CLI proposal is read-only and verifies installed exact receipt', t => {
  const f = fixture(t), files = join(f.root, 'files.json');
  writeFileSync(files, JSON.stringify([f.prompt, f.result]));
  const cli = new URL('../physics-autopilot/bin/relocate-repository.mjs', import.meta.url).pathname;
  const proposal = spawnSync(process.execPath, [cli, 'prepare', '--repo', f.root, '--run', 'r', '--old-root', f.old, '--files-file', files, '--reason', f.receipt.reason], { encoding: 'utf8' });
  assert.equal(proposal.status, 0, proposal.stderr); assert.deepEqual(JSON.parse(proposal.stdout), f.receipt);
  const verified = spawnSync(process.execPath, [cli, 'verify', '--repo', f.root, '--run', 'r'], { encoding: 'utf8' });
  assert.equal(verified.status, 0, verified.stderr); assert.equal(JSON.parse(verified.stdout).artifacts, 2);
  assert.equal(readFileSync(join(f.root, f.result), 'utf8'), f.frozen);
});
