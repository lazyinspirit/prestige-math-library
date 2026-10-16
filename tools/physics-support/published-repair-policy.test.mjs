import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { recordedPublishedRepair } from './published-repair-policy.mjs';
import { itemHashGuard } from './item-hash.mjs';

const sha = x => createHash('sha256').update(x).digest('hex');
const tool = resolve('tools/physics-support/published-repairs.mjs');
const id = 'thm-legacy';
function fixture(t, worktree = false) {
  const temp = mkdtempSync(join(tmpdir(), 'physics-published-'));
  t.after(() => rmSync(temp, { recursive: true, force: true }));
  const repo = join(temp, 'repo');
  mkdirSync(join(repo, 'physics/items'), { recursive: true });
  mkdirSync(join(repo, 'items'));
  const git = (args, env = {}) => {
    const r = spawnSync('git', ['--no-replace-objects', '-C', repo, ...args], {
      encoding: 'utf8', env: { ...process.env, GIT_AUTHOR_NAME: 'Test', GIT_AUTHOR_EMAIL: 'test@example.com',
        GIT_COMMITTER_NAME: 'Test', GIT_COMMITTER_EMAIL: 'test@example.com',
        GIT_AUTHOR_DATE: '2026-09-01T00:00:00Z', GIT_COMMITTER_DATE: '2026-09-01T00:00:00Z', ...env },
    });
    assert.equal(r.status, 0, r.stderr); return r.stdout.trim();
  };
  git(['init', '-q']);
  const before = `---\nid: ${id}\nkind: theorem\nstatus: published\n---\n## Statement\nOriginal.\n`;
  writeFileSync(join(repo, `physics/items/${id}.md`), before);
  writeFileSync(join(repo, `items/${id}.md`), 'wrong root-level carrier');
  git(['add', '.']); git(['commit', '-qm', 'authentic legacy publication']);
  const commit = git(['rev-parse', 'HEAD']);
  if (worktree) git(['worktree', 'add', '-qb', 'repair', join(temp, 'linked')]);
  const root = join(worktree ? join(temp, 'linked') : repo, 'physics');
  mkdirSync(join(root, 'research'));
  const current = before.replace('Original.', 'Corrected.');
  const content = itemHashGuard(current);
  writeFileSync(join(root, `items/${id}.md`), current);
  const claim = { version: 1, run: 'r', id, group: 'owner', pre_sha256: itemHashGuard(before), claimed_at: '2026-10-01T00:00:00Z' };
  const evidence = `\n${id} ${content}\n`;
  const receipt = { version: 1, kind: 'recorded-local-published-repair', id, run: 'r', group: 'owner',
    correction: 'Surgical correction.', content_sha256: content, before_file: 'research/before.md',
    before_raw_sha256: sha(before), pre_sha256: claim.pre_sha256, prior_publication_commit: commit,
    recorded_at: '2026-10-01T00:02:00Z', ledger_marker: 'repair', ledger_sha256: sha(evidence),
    local_checks: Object.fromEntries(['precheck', 'rendercheck'].map(name => [name, {
      checked_at: '2026-10-01T00:01:00Z', content_sha256: content, exit_code: 0,
      command: ['node', `tools/physics-support/${name}${name === 'precheck' ? '.mts' : '.mjs'}`, `items/${id}.md`],
      output: name === 'precheck' ? `PASS items/${id}.md\n0 failing` : 'OK — 1 file(s)',
    }])),
  };
  const put = (p, x) => writeFileSync(join(root, p), typeof x === 'string' ? x : JSON.stringify(x));
  put('research/before.md', before);
  put('research/published-consumer-supplier-ledger.md', `<!-- local-published-repair:repair:begin -->${evidence}<!-- local-published-repair:repair:end -->`);
  const save = () => { put('research/r-step3-published-claims.jsonl', claim); put('research/repair.json', receipt); };
  save();
  const check = () => { put('research/repair.json', receipt); return recordedPublishedRepair(root, id, current, 'research/repair.json'); };
  const cli = (...args) => spawnSync(process.execPath, [tool, ...args, '--run', 'r', '--root', root], { encoding: 'utf8' });
  return { root, before, current, receipt, claim, commit, put, save, check, git, cli };
}

for (const linked of [false, true]) test(`legacy publication uses exact nested physics path${linked ? ' in a linked worktree' : ''}`, t => {
  const f = fixture(t, linked);
  assert.equal(f.check().ok, true);
  assert.doesNotMatch(f.before + f.current, /audited:|verified:/);
});
for (const defect of ['short-commit', 'nonancestor', 'future', 'wrong-before', 'unpublished', 'stale', 'missing-render', 'preclaim-check']) {
  test(`legacy repair rejects ${defect}`, t => {
    const f = fixture(t);
    if (defect === 'short-commit') f.receipt.prior_publication_commit = f.commit.slice(0, 12);
    if (defect === 'nonancestor') f.receipt.prior_publication_commit = f.git(['commit-tree', 'HEAD^{tree}', '-m', 'disconnected']);
    if (defect === 'future') {
      const commit = f.git(['commit-tree', 'HEAD^{tree}', '-p', 'HEAD', '-m', 'future'], { GIT_COMMITTER_DATE: '2026-11-01T00:00:00Z' });
      f.git(['update-ref', 'HEAD', commit]); f.receipt.prior_publication_commit = commit;
    }
    if (['wrong-before', 'unpublished'].includes(defect)) {
      const before = defect === 'wrong-before' ? f.before + 'not committed\n' : f.before.replace('status: published', 'status: draft');
      f.put('research/before.md', before); f.receipt.before_raw_sha256 = sha(before);
      f.receipt.pre_sha256 = f.claim.pre_sha256 = itemHashGuard(before); f.save();
    }
    if (defect === 'stale') f.receipt.content_sha256 = '0'.repeat(64);
    if (defect === 'missing-render') delete f.receipt.local_checks.rendercheck;
    if (defect === 'preclaim-check') f.receipt.local_checks.precheck.checked_at = '2026-09-30T00:00:00Z';
    assert.equal(f.check().ok, false);
  });
}

test('owner-maintenance claims bind a fixed separate ledger and cannot authorize Step3 append', t => {
  const f = fixture(t);
  rmSync(join(f.root, 'research/r-step3-published-claims.jsonl'));
  f.put(`items/${id}.md`, f.before);
  assert.equal(f.cli('claim', '--id', id, '--group', 'owner', '--claim-namespace', 'owner-maintenance').status, 0);
  assert.equal(existsSync(join(f.root, 'research/r-step3-published-claims.jsonl')), false);
  assert.equal(existsSync(join(f.root, 'research/r-step5-published-repairs.jsonl')), false);
  const path = 'research/r-owner-maintenance-published-claims.jsonl';
  const claim = JSON.parse(readFileSync(join(f.root, path), 'utf8'));
  // Actual checks must postdate the actual claim; no scientific evidence is fabricated by claim.
  f.receipt.recorded_at = new Date(Date.now() + 1000).toISOString();
  for (const c of Object.values(f.receipt.local_checks)) c.checked_at = new Date().toISOString();
  Object.assign(f.receipt, { ownership_namespace: 'owner-maintenance', ownership_claims_file: path,
    ownership_claims_sha256: sha(readFileSync(join(f.root, path))) });
  assert.equal(f.check().ok, true);
  assert.notEqual(f.cli('claim', '--id', id, '--group', 'owner').status, 0);
  f.put('research/rows.json', { kind: 'repaired', id, group: 'owner', repair_owner_group: 'owner',
    found_via: 'consumer', found_at_stage: '3a-adjudicate', pre_sha256: claim.pre_sha256 });
  assert.notEqual(f.cli('append', '--file', 'research/rows.json', '--claim-namespace', 'owner-maintenance').status, 0);
  assert.notEqual(f.cli('append', '--file', 'research/rows.json').status, 0);
  for (const patch of [{ ownership_claims_file: 'research/../research/r-owner-maintenance-published-claims.jsonl' },
    { ownership_namespace: 'step3' }, { ownership_claims_sha256: '0'.repeat(64) }]) {
    const original = { ...f.receipt }; Object.assign(f.receipt, patch);
    assert.equal(f.check().ok, false); Object.assign(f.receipt, original);
  }
  f.put('research/r-step3-published-claims.jsonl', { ...claim, ownership_namespace: undefined });
  assert.equal(f.check().ok, false);
});

test('a maintenance claim copied into the Step3 ledger cannot impersonate Step3 ownership', t => {
  const f = fixture(t);
  f.claim.ownership_namespace = 'owner-maintenance';
  f.claim.ownership_claims_file = 'research/r-owner-maintenance-published-claims.jsonl';
  f.save();
  assert.equal(f.check().ok, false);
  f.put('research/rows.json', { kind: 'repaired', id, group: 'owner', repair_owner_group: 'owner',
    found_via: 'consumer', found_at_stage: '3a-adjudicate', pre_sha256: f.claim.pre_sha256 });
  assert.notEqual(f.cli('append', '--file', 'research/rows.json').status, 0);
});
