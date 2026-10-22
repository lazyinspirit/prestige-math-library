import test from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const tool = fileURLToPath(new URL('./publication-ready.mjs', import.meta.url));
function fixture(t, { priorStatus = 'published', currentStatus = 'published', priorId = 'def-local', absent = false, absentPage = false, priorPageStatus = 'published' } = {}) {
  const base = mkdtempSync(join(tmpdir(), 'physics-publication-baseline-')), root = join(base, 'physics');
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const putAt = (dir, path, value) => { mkdirSync(join(dir, path, '..'), { recursive: true }); writeFileSync(join(dir, path), typeof value === 'string' ? value : JSON.stringify(value)); };
  const put = (path, value) => putAt(root, path, value);
  const git = (...args) => { const r = spawnSync('git', args, { cwd: base, encoding: 'utf8' }); assert.equal(r.status, 0, r.stderr); return r.stdout.trim(); };
  const item = (id, status) => `---\nid: ${id}\nkind: definition\ndomain: physics\nstatus: ${status}\ndeps: []\n---\n## Definition\nA fixture definition.\n`;
  const page = status => `---\npage: selected\nstatus: ${status}\nitems: [def-local]\nexamples: []\n---\n`;
  mkdirSync(root); git('init', '-b', 'main'); git('config', 'user.name', 'Publication fixture'); git('config', 'user.email', 'fixture@example.invalid');
  mkdirSync(join(base, 'empty-hooks')); git('config', 'core.hooksPath', join(base, 'empty-hooks'));
  // Root decoys must never supply physics publication history.
  putAt(base, 'items/def-local.md', item('def-local', 'published'));
  putAt(base, 'library/test/selected.md', page('published'));
  if (!absent) put('items/def-local.md', item(priorId, priorStatus));
  if (!absentPage) put('library/test/selected.md', page(priorPageStatus));
  git('add', '.'); git('commit', '-m', 'real fixture publication baseline'); const baseline = git('rev-parse', 'HEAD');
  put('items/def-local.md', item('def-local', currentStatus)); put('library/test/selected.md', page(currentStatus));
  const pages = [{ id: 'selected', kind: 'A', category: 'test', requires: [], items: [{ id: 'def-local', kind: 'definition', domain: 'physics', deps: [] }] }];
  put('research/demo-scope-ledger.json', { baseline_commit: baseline, pages });
  put('research/demo-batch-1.pages.json', pages); put('research/plan-spec.json', { pages });
  put('research/defect-ledger.jsonl', ''); put('research/published-consumer-supplier-ledger.md', '');
  put('research/math-imports.json', { version: 1, source_root: base, files: [] });
  put('research/demo-pathway.json', { run: 'demo', briefsToRevisit: [] });
  put('research/demo-pathway-closure.json', { run: 'demo', briefs: [] });
  put('research/demo-judge-closure.json', {});
  // Actual closure checker, with an empty fixture-specific obligation set.
  for (const name of ['pathway-closure.mjs', 'paths.mjs', 'step6-lib.mjs', 'frontmatter-list.mjs']) {
    const target = join(root, 'tools/physics-support', name); mkdirSync(join(target, '..'), { recursive: true });
    copyFileSync(fileURLToPath(new URL('./' + name, import.meta.url)), target);
  }
  git('add', '.'); git('commit', '-m', 'current fixture packaging inputs');
  const check = (flags = ['--write'], selectedRoot = root) => spawnSync(process.execPath,
    [tool, '--run', 'demo', '--root', selectedRoot, ...flags], { cwd: root, encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: root } });
  return { base, root, put, git, baseline, check, receipt: join(root, 'research/demo-publication-readiness.json') };
}

for (const [priorStatus, currentStatus] of [['published', 'published'], ['"published"', "'published'"], ["'published'", '"published"'], ['draft', '"draft"']]) {
  test(`readiness write/verify retain nested history for ${priorStatus} to ${currentStatus}`, t => {
    const f = fixture(t, { priorStatus, currentStatus, priorPageStatus: priorStatus });
    const write = f.check(); assert.equal(write.status, 0, write.stderr);
    const saved = readFileSync(f.receipt), receipt = JSON.parse(saved);
    assert.equal(receipt.verdict, 'publishable-pending-owner-approval');
    assert.equal(receipt.published_baseline_commit, f.baseline);
    const verify = f.check(['--verify']); assert.equal(verify.status, 0, verify.stderr);
    assert.deepEqual(readFileSync(f.receipt), saved, 'verification does not rewrite the receipt');
    const report = f.check(['--verify', '--require-report']); assert.notEqual(report.status, 0); assert.match(report.stderr, /missing research\/demo-step6-report.md/);
  });
}
for (const mode of ['draft-baseline', 'missing-baseline', 'missing-page-baseline', 'wrong-baseline-identity', 'draft-page-baseline', 'invalid-baseline', 'nonancestor', 'unknown-current-status']) {
  test(`readiness rejects ${mode}, even with root published decoys`, t => {
    const f = fixture(t, { priorStatus: mode === 'draft-baseline' ? 'draft' : 'published', absent: mode === 'missing-baseline', absentPage: mode === 'missing-page-baseline', priorId: mode === 'wrong-baseline-identity' ? 'def-other' : 'def-local', priorPageStatus: mode === 'draft-page-baseline' ? 'draft' : 'published', currentStatus: mode === 'unknown-current-status' ? 'accepted' : 'published' });
    if (mode === 'invalid-baseline') { const ledger = JSON.parse(readFileSync(join(f.root, 'research/demo-scope-ledger.json'))); ledger.baseline_commit = 'HEAD'; f.put('research/demo-scope-ledger.json', ledger); }
    if (mode === 'nonancestor') {
      const unrelated = f.git('commit-tree', f.git('rev-parse', 'HEAD^{tree}'), '-m', 'unrelated fixture history'); f.git('update-ref', 'refs/heads/main', unrelated);
    }
    const result = f.check(); assert.notEqual(result.status, 0); assert.match(result.stderr, /expected status:draft pending owner approval/);
    assert.equal(JSON.parse(readFileSync(f.receipt)).verdict, 'blocked');
    assert.notEqual(f.check(['--verify']).status, 0);
  });
}
test('wrong root fails before a readiness receipt is written', t => {
  const f = fixture(t);
  // Root contains valid scope-shaped content too; domain isolation must decide.
  for (const path of ['research/demo-scope-ledger.json', 'research/demo-batch-1.pages.json', 'research/plan-spec.json']) {
    const target = join(f.base, path); mkdirSync(join(target, '..'), { recursive: true }); copyFileSync(join(f.root, path), target);
  }
  const result = f.check(['--write'], f.base); assert.notEqual(result.status, 0); assert.match(result.stderr, /unexpected physics domain root/);
  assert.equal(existsSync(join(f.base, 'research/demo-publication-readiness.json')), false);
});
test('write/verify flag exclusivity is unchanged', t => {
  const f = fixture(t);
  for (const flags of [[], ['--write', '--verify']]) { const result = f.check(flags); assert.equal(result.status, 2); assert.match(result.stderr, /usage:/); }
});
