import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
const tool = new URL('../../physics-support/physics-check.mjs', import.meta.url).pathname;
function fixture(t: any) {
 const root = mkdtempSync(join(tmpdir(), 'physics-frontier-'));
 t.after(() => rmSync(root, { recursive: true, force: true }));
 for (const dir of ['items', 'library/test', 'research', 'math/items']) mkdirSync(join(root, dir), { recursive: true });
 const save = (path: string, value: any) => writeFileSync(join(root, path), typeof value === 'string' ? value : JSON.stringify(value));
 save('research/math-imports.json', { version: 1, source_root: join(root, 'math'), files: [] });
 const pages = [{ id: 'selected', category: 'test', kind: 'A', order: 1, library: 'physics', items: [{ id: 'post-selected', kind: 'postulate', domain: 'physics', deps: [] }] }];
 save('research/plan-spec.json', { pages: [{ ...pages[0], items: [] }, { id: 'outside', items: [{ id: 'bad', kind: 'wrong' }] }] });
 save('research/run-test-batch-1.pages.json', pages);
 save('items/post-selected.md', '---\nid: post-selected\nkind: postulate\ndomain: physics\nphysical_scope: ideal model\ndeps: []\nprovenance:\n  statement: literature-derived\n  proof: not-applicable\nsources:\n  references:\n    - title: Source\n      url: https://example.org/source\n---\n## Postulate\nAssumption.\n');
 save('library/test/selected.md', '---\npage: selected\nlibrary: physics\nitems: [post-selected]\n---\n');
 save('items/pthm-outside.md', '---\nid: [unterminated\n---\n');
 const run = (args: string[] = []) => spawnSync(process.execPath, [tool, '--root', root, '--run', 'run-test', '--json', ...args], { cwd: root, encoding: 'utf8' });
 return { root, save, pages, run };
}
test('native physics gate excludes malformed outside carriers and preserves current scaffold overlay', t => {
 const f = fixture(t);
 const authored = f.run(); assert.equal(authored.status, 0, authored.stdout + authored.stderr);
 const planned = f.run(['--plan', 'research/plan-spec.json']); assert.equal(planned.status, 0, planned.stdout + planned.stderr);
 assert.equal(JSON.parse(planned.stdout).items, 1, 'current manifest inventory replaces empty canonical inventory');
 f.pages[0].items[0].deps = ['pthm-outside'] as never[];
 f.save('research/run-test-batch-1.pages.json', f.pages);
 const reachable = f.run(['--plan', 'research/plan-spec.json']);
 assert.notEqual(reachable.status, 0); assert.match(reachable.stdout + reachable.stderr, /item-frontmatter-invalid|edge-unresolved|invalid prerequisite carrier/);
});
test('native physics gate fails closed for empty item scopes, missing carriers and pages', t => {
 const f = fixture(t);
 f.save('research/run-test-batch-1.pages.json', [{ ...f.pages[0], items: [] }]);
 assert.notEqual(f.run().status, 0);
 assert.equal(f.run(['--plan', 'research/plan-spec.json']).status, 0);
 f.save('research/run-test-batch-1.pages.json', []); assert.notEqual(f.run(['--plan', 'research/plan-spec.json']).status, 0);
 f.save('research/run-test-batch-1.pages.json', f.pages);
 rmSync(join(f.root, 'items/post-selected.md')); assert.notEqual(f.run().status, 0);
});
