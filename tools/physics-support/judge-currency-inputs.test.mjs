import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { tsxLoader } from './paths.mjs';

const tool = fileURLToPath(new URL('./judge.mts', import.meta.url));
const loader = tsxLoader();
const hash = text => createHash('sha256').update(text).digest('hex');

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'judge-currency-inputs-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const path of ['items', 'library/test', 'briefs']) mkdirSync(join(root, path), { recursive: true });
  const target = join(root, 'items/thm-target.md'), supplier = join(root, 'items/def-supplier.md');
  const page = join(root, 'library/test/page.md'), conventions = join(root, 'briefs/judge-conventions.txt');
  writeFileSync(target, '---\nid: thm-target\ntitle: Target identity\nkind: theorem\nstatus: draft\ndeps: [def-supplier]\nverification:\n  precheck: pass\n---\n## Statement\nA finite identity.\n\n## Proof\nA complete argument.\n');
  writeFileSync(supplier, '---\nid: def-supplier\ntitle: Supplier title\nkind: definition\nstatus: draft\ndeps: []\n---\n## Definition\nA supplied finite set.\n');
  writeFileSync(join(root, 'items/thm-neighbor.md'), '---\nid: thm-neighbor\ntitle: Neighbor identity\nkind: theorem\nstatus: draft\ndeps: []\n---\n## Statement\nA neighboring finite identity.\n');
  writeFileSync(page, '---\npage: page\ntitle: Actual page title\nitems: [thm-target, thm-neighbor]\n---\n');
  writeFileSync(conventions, 'Use the stated finite data and complete definitions.\n');
  const run = args => {
    const result = spawnSync(process.execPath, ['--import', loader, tool, ...args], {
      cwd: root, encoding: 'utf8', timeout: 30000,
      env: { ...process.env, PHYSICS_REPO: root, JUDGE_LINEUP: 'luna' },
    });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout;
  };
  const contexts = (extra = []) => JSON.parse(run(['--context-hashes', 'thm-target', ...extra])).contexts['thm-target'];
  return { root, target, supplier, page, conventions, run, contexts };
}

test('currency-inputs is opt-in and leaves actual prompt/context and default schema unchanged', t => {
  const f = fixture(t), ordinary = f.contexts(), opted = f.contexts(['--currency-inputs']);
  assert.deepEqual(Object.keys(ordinary).sort(), ['context_sha256', 'item_sha256']);
  assert.deepEqual(Object.keys(opted).sort(), ['context_sha256', 'item_sha256', 'other_prompt_inputs_sha256']);
  assert.equal(opted.context_sha256, ordinary.context_sha256);
  assert.equal(opted.item_sha256, ordinary.item_sha256);
  const prompt = f.run(['items/thm-target.md', '--dump-prompt']);
  assert.equal(f.run(['items/thm-target.md', '--dump-prompt', '--currency-inputs']), prompt);
  assert.equal(hash(prompt.trimEnd()), ordinary.context_sha256);
});

test('own judge stamp affects actual provider context but not item or other prompt inputs', t => {
  const f = fixture(t), before = f.contexts(['--currency-inputs']);
  writeFileSync(f.target, readFileSync(f.target, 'utf8').replace('  precheck: pass\n',
    '  precheck: pass\n  judge:\n    model: "gpt-6-luna"\n    verdict: pass\n    date: 2026-10-25\n'));
  const after = f.contexts(['--currency-inputs']);
  assert.notEqual(after.context_sha256, before.context_sha256);
  assert.equal(after.item_sha256, before.item_sha256);
  assert.equal(after.other_prompt_inputs_sha256, before.other_prompt_inputs_sha256);
});

for (const [name, path, before, after] of [
  ['supplier title', 'supplier', 'Supplier title', 'Changed supplier title'],
  ['supplier interface', 'supplier', 'A supplied finite set.', 'A supplied finite vector space.'],
  ['page title', 'page', 'Actual page title', 'Changed page title'],
  ['system conventions', 'conventions', 'complete definitions', 'explicit domain conventions'],
]) test('other prompt inputs bind actual ' + name, t => {
  const f = fixture(t), original = f.contexts(['--currency-inputs']);
  writeFileSync(f[path], readFileSync(f[path], 'utf8').replace(before, after));
  const changed = f.contexts(['--currency-inputs']);
  assert.notEqual(changed.context_sha256, original.context_sha256);
  assert.notEqual(changed.other_prompt_inputs_sha256, original.other_prompt_inputs_sha256);
  assert.equal(changed.item_sha256, original.item_sha256);
});
