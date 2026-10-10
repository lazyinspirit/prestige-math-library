import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { stages } from '../stages/mathlib.mts';
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

function stagePhysicsCommand(root: string, id: string): string[] {
 const stage = stages.find(stage => stage.id === id)!;
 const gate = stage.gates!({ repo: root, run: 'run-test', doctor: true } as any).find(gate => gate.id === 'physics-content');
 assert.ok(gate, `${id} must retain its native physics-content gate`);
 const argv = typeof gate.argv === 'function' ? gate.argv() : gate.argv;
 assert.deepEqual(argv.slice(0, 4), ['node', 'tools/physics-support/physics-check.mjs', '--run', 'run-test']);
 return argv;
}
function runStagePhysics(root: string, id: string) {
 const argv = stagePhysicsCommand(root, id);
 // Execute the actual stage flags with the real native validator; only its
 // tool path/root are relocated to this isolated fixture.
 return spawnSync(process.execPath, [tool, ...argv.slice(2), '--root', root, '--json'], { cwd: root, encoding: 'utf8' });
}
test('native pre-author joins validate current scaffolds without inventing authored items or pages', t => {
 const f = fixture(t);
 rmSync(join(f.root, 'items/post-selected.md'));
 rmSync(join(f.root, 'library/test/selected.md'));
 for (const id of ['1-drift', '1-drift-apply', '1-scaffold', '3a-scope', '3-baseline']) {
  const argv = stagePhysicsCommand(f.root, id);
  assert.deepEqual(argv.slice(4), ['--plan', 'research/plan-spec.json'], id);
  const result = runStagePhysics(f.root, id);
  assert.equal(result.status, 0, `${id}: ${result.stdout}${result.stderr}`);
  assert.equal(JSON.parse(result.stdout).items, 1, 'current manifest overlays the empty canonical item inventory');
 }
 const assign = stages.find(stage => stage.id === '2-assign')!;
 assert.deepEqual(assign.gates!({ repo: f.root, run: 'run-test' } as any).map(gate => gate.id), ['alpha-groups']);
 // Scaffold mode still checks actual declared prerequisite metadata.
 f.pages[0].items[0].deps = ['def-missing-prerequisite'] as never[];
 f.save('research/run-test-batch-1.pages.json', f.pages);
 for (const id of ['3a-scope', '3-baseline']) {
  const result = runStagePhysics(f.root, id);
  assert.notEqual(result.status, 0, id);
  assert.match(result.stdout + result.stderr, /edge-unresolved|unknown|unresolved|invalid prerequisite/i);
 }
});
test('native authoring and post-author joins require actual carriers, pages and class-specific bodies', t => {
 const f = fixture(t), itemPath = join(f.root, 'items/post-selected.md');
 const original = readFileSync(itemPath, 'utf8');
 rmSync(itemPath);
 for (const id of ['3b-author', '3-splice', '3-baseline']) {
  const argv = stagePhysicsCommand(f.root, id);
  assert.equal(argv.includes('--plan'), false, id);
  const result = runStagePhysics(f.root, id);
  assert.notEqual(result.status, 0, id);
  assert.match(result.stdout + result.stderr, /missing.*post-selected/i);
 }
 f.save('items/post-selected.md', original.replace('## Postulate\nAssumption.', '## Remarks\nMissing the required Postulate section.'));
 for (const id of ['3b-author', '3-splice']) {
  const result = runStagePhysics(f.root, id);
  assert.notEqual(result.status, 0, id);
  assert.match(result.stdout + result.stderr, /postulate-section/);
 }
 f.save('items/post-selected.md', original);
 for (const id of ['3b-author', '3-splice']) {
  const result = runStagePhysics(f.root, id);
  assert.equal(result.status, 0, `${id}: ${result.stdout}${result.stderr}`);
 }
 rmSync(join(f.root, 'library/test/selected.md'));
 const missingPage = runStagePhysics(f.root, '3b-author');
 assert.notEqual(missingPage.status, 0);
 assert.match(missingPage.stdout + missingPage.stderr, /missing selected physics page selected/i);
});
