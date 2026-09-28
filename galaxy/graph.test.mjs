import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { loadGraph } from './data.mjs';
import { reachable } from './graph-utils.mjs';

test('transitive highlights handle shared ancestors and cycles without including the source', () => {
  const prerequisites = [[], [0], [0, 1], [1, 2], [5], [4]];
  assert.deepEqual([...reachable(3, prerequisites)].sort(), [0, 1, 2]);
  assert.deepEqual([...reachable(4, prerequisites)], [5]);
  const consumers = prerequisites.map(() => []);
  prerequisites.forEach((deps, from) => deps.forEach(to => consumers[to].push(from)));
  assert.deepEqual([...reachable(0, consumers)].sort(), [1, 2, 3]);
  assert.deepEqual([...reachable(0, prerequisites)], []);
});

test('published census, aliases, multiple categories, missing metadata, and live inclusion', async () => {
  const root = await mkdtemp(join(tmpdir(), 'galaxy-test-'));
  try {
    await mkdir(join(root, 'items'));
    for (const category of ['foundations', 'test-category']) await mkdir(join(root, 'library', category), { recursive: true });
    const put = (path, fm) => writeFile(join(root, path), `---\n${JSON.stringify(fm)}\n---\n`);
    await put('items/def-a.md', { id: 'def-a', status: 'published', kind: 'definition', aliases: ['old-a'], deps: [] });
    await put('items/thm-b.md', { id: 'thm-b', status: 'published', kind: 'theorem', deps: ['old-a', 'old-a', 'draft'], forward_refs: ['orphan'] });
    await put('items/orphan.md', { id: 'orphan', status: 'published', kind: 'remark' });
    await put('items/draft.md', { id: 'draft', status: 'draft', deps: [] });
    await put('library/foundations/_category.md', { title: 'Set Theory' });
    await put('library/foundations/a.md', { status: 'published', items: ['def-a', 'thm-b'] });
    await put('library/test-category/b.md', { status: 'published', examples: ['thm-b'] });
    await writeFile(join(root, 'library/test-category/in-progress.md'), 'Incomplete draft');
    const graph = await loadGraph(root);
    assert.equal(graph.nodes.length, 3);
    assert.equal(graph.edges.length, 1);
    assert.deepEqual(graph.unresolved, [{ item: 'thm-b', dependency: 'draft' }]);
    assert.deepEqual(graph.nodes.find(n => n.id === 'thm-b').categories, ['foundations', 'test-category']);
    assert.ok(graph.categories.some(c => c.title === 'Test Category'));
    assert.deepEqual(graph.nodes.find(n => n.id === 'orphan').categories, ['unassigned']);
    const live = await loadGraph(root, new Set(['def-a', 'thm-b']));
    assert.equal(live.nodes.length, 2);
    await assert.rejects(loadGraph(root, new Set(['missing-live-item'])), /Live items missing/);
  } finally { await rm(root, { recursive: true, force: true }); }
});
