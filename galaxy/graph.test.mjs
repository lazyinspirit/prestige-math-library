import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { loadGraph } from './data.mjs';
import { reachable } from './graph-utils.mjs';

test('mathematical universe excludes physics kinds, domains and dependent alias chains', async () => {
  const root = await mkdtemp(join(tmpdir(), 'galaxy-boundary-'));
  try {
    await mkdir(join(root, 'items'));
    for (const name of ['math', 'physics']) await mkdir(join(root, 'library', name), { recursive: true });
    const put = (path, fm) => writeFile(join(root, path), `---\n${JSON.stringify(fm)}\n---\n`);
    const rows = [
      { id: 'def-safe', kind: 'definition' },
      { id: 'thm-shared', kind: 'theorem', domain: 'mathematics', deps: ['def-safe'] },
      ...['postulate', 'experiment', 'physics-theorem', 'thought-experiment', 'physical-theorem'].map((kind, i) => ({ id: `bad-${i}`, kind, domain: 'mathematics', aliases: [`physics-${i}`] })),
      { id: 'def-physical', kind: 'definition', domain: 'physics' },
      { id: 'pthm-disguised', kind: 'theorem', domain: 'mathematics' },
      { id: 'thm-bad', kind: 'theorem', deps: ['physics-0'], aliases: ['bad-alias'] },
      { id: 'thm-indirect', kind: 'theorem', deps: ['bad-alias'] },
      { id: 'def-bad-formulation', kind: 'definition', justified_by: ['physics-1'] },
      { id: 'thm-bad-forward', kind: 'theorem', forward_refs: ['physics-2'] },
    ];
    for (const row of rows) await put(`items/${row.id}.md`, { status: 'published', ...row });
    await put('library/math/_category.md', { title: 'Mathematics', library: 'mathematics' });
    await put('library/physics/_category.md', { title: 'Physics', library: 'physics' });
    await put('library/math/main.md', { status: 'published', items: rows.map(row => row.id) });
    await put('library/physics/shared.md', { status: 'published', items: ['thm-shared'] });
    const graph = await loadGraph(root);
    assert.deepEqual(graph.nodes.map(node => node.id).sort(), ['def-safe', 'thm-shared']);
    assert.deepEqual(graph.nodes.find(node => node.id === 'thm-shared').categories, ['math']);
    assert.deepEqual(graph.categories.map(category => category.id), ['math']);
    assert.equal(graph.edges.length, 1);
    assert.deepEqual(graph.unresolved, []);
  } finally { await rm(root, { recursive: true, force: true }); }
});

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

test('3D scene has finite geometry, real thickness and a central Set Theory bulge', async () => {
  const { layoutItems, createEnvironment } = await import('./galaxy-model.mjs');
  const nodes = Array.from({ length: 300 }, (_, i) => ({ kind: 'definition', categories: [i < 100 ? 'foundations' : 'algebra'] }));
  const vertices = layoutItems(nodes, [{ id: 'foundations' }, { id: 'algebra' }], nodes.map(() => []));
  assert.ok(vertices.every(Number.isFinite));
  assert.ok(nodes.slice(0, 100).every(n => Math.hypot(n.x, n.y) <= .19));
  assert.ok(nodes.some(n => n.z > .02) && nodes.some(n => n.z < -.02));
  const environment = createEnvironment();
  for (const data of Object.values(environment)) {
    assert.ok(data.length > 0 && data.length % 8 === 0);
    assert.ok(data.every(Number.isFinite));
  }
});

test('perspective orbit exposes depth at edge-on and zoom preserves the center', async () => {
  const { project, DEFAULT_CAMERA } = await import('./galaxy-model.mjs');
  const camera = { ...DEFAULT_CAMERA, yaw: 0, pitch: 0, zoom: 1 };
  assert.deepEqual(project({ x: 0, y: 0, z: 0 }, camera, 0, 1200, 800).slice(0, 2), [600, 400]);
  const raised = { x: .3, y: .2, z: .1 };
  const front = project(raised, camera, 0, 1200, 800);
  const edge = project(raised, { ...camera, pitch: Math.PI / 2 }, 0, 1200, 800);
  assert.ok(front[1] < 400 && edge[1] > 400);
  assert.ok(edge[2] < front[2]);
  const zoomed = project(raised, { ...camera, zoom: 2 }, 0, 1200, 800);
  assert.ok(Math.abs((zoomed[0] - 600) - 2 * (front[0] - 600)) < 1e-8);
});

test('live additions and unrelated category changes preserve existing star coordinates', async () => {
  const { layoutItems } = await import('./galaxy-model.mjs');
  const original = [{ id: 'def-existing', kind: 'definition', categories: ['algebra'] }];
  layoutItems(original, [{ id: 'algebra' }], [[]]);
  const expanded = [{ id: 'def-added', kind: 'definition', categories: ['new-category'] }, { ...original[0] }];
  layoutItems(expanded, [{ id: 'new-category' }, { id: 'algebra' }], [[], []]);
  for (const axis of ['x', 'y', 'z']) assert.equal(expanded[1][axis], original[0][axis]);
});

test('downstream counts deduplicate diamonds and correctly collapse cycles', async () => {
  const { downstreamCounts } = await import('./dependency-counts.mjs');
  assert.deepEqual([...downstreamCounts(4, [[1, 0], [2, 0], [3, 1], [3, 2]])], [3, 1, 1, 0]);
  assert.deepEqual([...downstreamCounts(4, [[1, 0], [0, 1], [2, 1], [3, 2], [3, 0]])], [3, 3, 1, 0]);
  // A seeded random cyclic graph exercises many shared paths and component sizes.
  const { random } = await import('./galaxy-model.mjs'); const rng = random(25), edges = [];
  const consumers = Array.from({ length: 75 }, () => []);
  for (let i = 0; i < 150; i++) { const from = Math.floor(rng() * 75), to = Math.floor(rng() * 75); edges.push([to, from]); consumers[from].push(to); }
  const counts = downstreamCounts(75, edges);
  counts.forEach((count, i) => assert.equal(count, reachable(i, consumers).size));
});

test('consumer reach and theorem importance scale light, never the stellar body', async () => {
  const { starAppearance, STAR_RADIUS, MAX_GLOW_RADIUS, projectedStarRadius } = await import('./galaxy-model.mjs');
  const definition = { kind: 'definition', downstreamCount: 0 };
  const low = starAppearance(definition);
  const medium = starAppearance({ ...definition, downstreamCount: 100 });
  const high = starAppearance({ ...definition, downstreamCount: 10000 });
  assert.equal(low.radius, STAR_RADIUS);
  assert.equal(high.radius, low.radius);
  assert.ok(low.luminosity < medium.luminosity && medium.luminosity < high.luminosity);
  assert.ok(low.glowRadius < medium.glowRadius && medium.glowRadius < high.glowRadius);
  const theorem = { kind: 'theorem', downstreamCount: 30 };
  assert.ok(starAppearance({ ...theorem, landmark: true }).luminosity > starAppearance(theorem).luminosity);
  assert.ok(starAppearance({ ...theorem, crossCategoryConsumers: 4 }).luminosity > starAppearance(theorem).luminosity);
  const capped = starAppearance({ ...theorem, downstreamCount: 1e12, landmark: true });
  assert.equal(capped.glowRadius, MAX_GLOW_RADIUS);
  assert.equal(capped.radius, STAR_RADIUS);
  assert.ok(projectedStarRadius(capped, { zoom: 180 }, 1) <= STAR_RADIUS * 12);
});
