import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { writeStatementPolicy } from '../statement-first-policy.mjs';
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'physics-statement-cli-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['research', 'items']) mkdirSync(join(root, dir));
  symlinkSync(fileURLToPath(new URL('../', import.meta.url)), join(root, 'tools'), 'dir');
  writeStatementPolicy(root, 'demo', 'physics');
  writeFileSync(join(root, 'research/math-imports.json'), JSON.stringify({ version: 1, files: [] }));
  writeFileSync(join(root, 'research/demo-batch-1.pages.json'), JSON.stringify([{ id: 'selected', items: [{ id: 'def-local' }] }]));
  const item = body => writeFileSync(join(root, 'items/def-local.md'), `---\nid: def-local\nkind: definition\n---\n\n## Definition\n\n${body}\n`);
  const run = () => spawnSync(process.execPath, ['tools/physics-support/statement-first-check.mjs', '--run', 'demo', '--domain', 'physics'], { cwd: root, encoding: 'utf8' });
  return { root, item, run };
}
test('symlink-invoked physics statement CLI checks actual authored statements and emits liveness', t => {
  const f = fixture(t); f.item('A complete definition with no hyperlinks.');
  const clean = f.run(); assert.equal(clean.status, 0, clean.stderr);
  assert.match(clean.stdout, /statement-first: 1 item\(s\) checked; 0 defect\(s\)/);
  f.item('An interrupted definition using [[def-supplier]] inline.');
  const interrupted = f.run(); assert.equal(interrupted.status, 1);
  assert.match(interrupted.stdout, /statement-first: 1 item\(s\) checked; [1-9]\d* defect/);
  assert.match(interrupted.stderr, /ERROR statement-first:/);
});
test('physics statement CLI retains imported-subject and empty-frontier rejection', t => {
  const f = fixture(t); f.item('A complete definition.');
  writeFileSync(join(f.root, 'research/math-imports.json'), JSON.stringify({ version: 1, files: [{ path: 'items/def-local.md' }] }));
  const imported = f.run(); assert.notEqual(imported.status, 0); assert.match(imported.stderr, /Imported supplier cannot be an authored editorial subject/);
  writeFileSync(join(f.root, 'research/demo-batch-1.pages.json'), '[]');
  const empty = f.run(); assert.notEqual(empty.status, 0); assert.match(empty.stderr, /Empty\/malformed manifest/);
});
