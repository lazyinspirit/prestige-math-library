import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, chmodSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { importMathematics } from './physics-imports.mjs';

const tool = fileURLToPath(new URL('./run-commit.mjs', import.meta.url));
function fixture(t) {
  const base = mkdtempSync(join(tmpdir(), 'physics-close-imports-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = join(base, 'physics'), source = join(base, 'math');
  for (const dir of [root, source]) for (const sub of ['items', 'library/math', 'research']) mkdirSync(join(dir, sub), { recursive: true });
  const item = (id, deps = [], aliases = []) => `---\nid: ${id}\nkind: definition\nstatus: published\ndeps: ${JSON.stringify(deps)}\naliases: ${JSON.stringify(aliases)}\n---\n## Definition\nA fixture definition.\n`;
  writeFileSync(join(source, 'items/def-supplier.md'), item('def-supplier', ['def-deep'], ['supplier-alias']));
  writeFileSync(join(source, 'items/def-deep.md'), item('def-deep'));
  writeFileSync(join(source, 'items/def-unrelated.md'), item('def-unrelated'));
  writeFileSync(join(source, 'library/math/supplier.md'), '---\npage: supplier\nstatus: published\nitems: [def-supplier, def-deep]\n---\n');
  writeFileSync(join(source, 'library/math/unrelated.md'), '---\npage: unrelated\nstatus: published\nitems: [def-unrelated]\n---\n');
  importMathematics(root, source);
  const page = { id: 'selected', category: 'math', kind: 'A', order: 2, library: 'mathematics',
    requires: [], items: [{ id: 'def-local', kind: 'definition', domain: 'mathematics', deps: ['supplier-alias'],
      dependency_roles: { 'supplier-alias': 'mathematical-premise' } }] };
  const manifest = join(root, 'research/demo-batch-1.pages.json');
  writeFileSync(manifest, JSON.stringify([page]));
  writeFileSync(join(root, 'research/plan-spec.json'), JSON.stringify({ pages: [{ ...page, items: [] }] }));
  writeFileSync(join(root, 'items/def-local.md'), item('def-local', ['supplier-alias'])
    .replace('status: published', 'status: draft\ndomain: mathematics\ndependency_roles: { supplier-alias: mathematical-premise }'));
  writeFileSync(join(root, 'library/math/selected.md'), '---\npage: selected\nlibrary: mathematics\nitems: [def-local]\n---\n');
  return {
    root, source, manifest,
    preflight() {
      // Read-only gate mode; deliberately absent proof-layout receipt stops
      // after import/content verification, before any Git command or mutation.
      return spawnSync(process.execPath, [tool, '--run', 'demo', '--require-proof-layout', '--check'],
        { encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: root } });
    },
  };
}

test('closeout preflight ignores unrelated original drift and reaches its proof-layout guard', t => {
  const f = fixture(t);
  writeFileSync(join(f.source, 'items/def-unrelated.md'), readFileSync(join(f.source, 'items/def-unrelated.md'), 'utf8') + 'Unrelated original update.\n');
  const checked = f.preflight();
  assert.notEqual(checked.status, 0, 'missing proof-layout evidence still holds closeout');
  assert.match(checked.stderr, /demo-proof-layout\.json/);
  assert.doesNotMatch(checked.stderr, /mathematics import changed/);
});

test('closeout preflight retains alias-resolved transitive original supplier guards', t => {
  const f = fixture(t);
  writeFileSync(join(f.source, 'items/def-deep.md'), readFileSync(join(f.source, 'items/def-deep.md'), 'utf8') + 'Changed required supplier.\n');
  const checked = f.preflight();
  assert.notEqual(checked.status, 0);
  assert.match(checked.stderr, /mathematics import changed: items\/def-deep.md/);
});

test('every local snapshot remains pinned, including outside the selected original closure', t => {
  const f = fixture(t);
  const path = join(f.root, 'items/def-unrelated.md');
  chmodSync(path, 0o644);
  writeFileSync(path, readFileSync(path, 'utf8') + 'Altered pinned local snapshot.\n');
  const checked = f.preflight();
  assert.notEqual(checked.status, 0);
  assert.match(checked.stderr, /mathematics import changed: items\/def-unrelated.md/);
});

test('an empty current frontier cannot fall back to whole-corpus import verification', t => {
  const f = fixture(t);
  writeFileSync(f.manifest, '[]');
  const checked = f.preflight();
  assert.notEqual(checked.status, 0);
  assert.match(checked.stderr, /Empty or invalid manifest/);
});
