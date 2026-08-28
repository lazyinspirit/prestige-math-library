import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { waves, nextBuildableSet, packBatches, driftEvidence, unsatisfiableEdges } from '../src/frontier.mts';

/** A tiny repo: a plan, some published pages, some unbuilt ones. */
function repo({ pages, published = [], draft = [], docs = {} }) {
  const r = mkdtempSync(join(tmpdir(), 'ap-fr-'));
  mkdirSync(join(r, 'research'), { recursive: true });
  mkdirSync(join(r, 'library', 'x'), { recursive: true });
  writeFileSync(join(r, 'research', 'plan-spec.json'), JSON.stringify({ pages }));
  for (const p of published) writeFileSync(join(r, 'library', 'x', `${p}.md`), '---\nstatus: published\n---\n');
  for (const p of draft) writeFileSync(join(r, 'library', 'x', `${p}.md`), '---\nstatus: draft\n---\n');
  for (const [name, body] of Object.entries<string>(docs)) writeFileSync(join(r, 'research', name), body);
  return r;
}
const A = (id, order, requires = [], category = 'c') =>
  ({ id, order, kind: 'A', category, title: id, requires, companion: `${id}-examples` });
const B = (id, order, requires = [id], category = 'c') =>
  ({ id: `${id}-examples`, order: order + 1, kind: 'B', category, title: '', requires, companion: id });

test('the frontier is publication state, not plan position', () => {
  const pages = [A('base', 1), B('base', 1), A('next', 3, ['base']), B('next', 3)];
  // `base` is PLANNED but not built, so `next` is not buildable
  const r1 = repo({ pages, published: [] });
  assert.equal(waves(r1).waves[0].map((p) => p.id).includes('next'), false);
  // once `base` is published, `next` enters wave 1
  const r2 = repo({ pages, published: ['base'] });
  const w = waves(r2).waves;
  assert.deepEqual(w[0].map((p) => p.id), ['next']);
});

test('waves chain: each wave unlocks the next', () => {
  const pages = [
    A('p1', 1), B('p1', 1),
    A('p2', 3, ['p1']), B('p2', 3),
    A('p3', 5, ['p2']), B('p3', 5),
  ];
  const { waves: w } = waves(repo({ pages, published: [] }));
  assert.equal(w.length, 3);
  assert.deepEqual(w.map((x) => x[0].id), ['p1', 'p2', 'p3']);
});

test('a pair blocked by a page outside scope is reported, not silently dropped', () => {
  const pages = [A('inscope', 1, ['elsewhere']), B('inscope', 1), A('elsewhere', 9, [], 'other')];
  const { blocked } = waves(repo({ pages, published: [] }), { categories: ['c'] });
  assert.equal(blocked.length, 1);
  assert.deepEqual(blocked[0].blockedBy, ['elsewhere']);
});

test('next-run selection includes unbuilt prerequisites of priority subjects', () => {
  const pages = [
    A('foundation', 1, [], 'other'), B('foundation', 1),
    A('target', 3, ['foundation-examples'], 'priority'), B('target', 3),
  ];
  const r = repo({ pages });
  const next = nextBuildableSet(r, { priorities: ['priority'], maxPairs: 2 });
  assert.deepEqual(next.pages.map((p) => p.id), ['foundation', 'target']);
  assert.deepEqual(unsatisfiableEdges(r, next.pages.map((p) => p.id)), []);
  assert.deepEqual(next.waves.map((wave) => wave.map((p) => p.id)), [['foundation'], ['target']]);
});

test('B-side prerequisites participate in closure and strict wave ordering', () => {
  const pages = [
    A('root', 1, [], 'other'), B('root', 1),
    A('dep', 3, ['root-examples'], 'other'), B('dep', 3),
    A('target', 5, [], 'priority'), B('target', 5, ['target', 'dep-examples']),
  ];
  const r = repo({ pages });
  const next = nextBuildableSet(r, { priorities: ['priority'], maxPairs: 3 });
  assert.deepEqual(next.pages.map((p) => p.id), ['root', 'dep', 'target']);
  assert.deepEqual(next.waves.map((wave) => wave.map((p) => p.id)), [['root'], ['dep'], ['target']]);
  assert.deepEqual(unsatisfiableEdges(r, next.pages.map((p) => p.id)), []);
});

test('draft pairs remain in the future schedule and cannot license dependants early', () => {
  const pages = [
    A('foundation', 1, [], 'other'), B('foundation', 1),
    A('target', 3, ['foundation-examples'], 'priority'), B('target', 3),
  ];
  const r = repo({ pages, draft: ['foundation'] });
  const next = nextBuildableSet(r, { priorities: ['priority'], maxPairs: 2 });
  assert.deepEqual(next.waves.map((wave) => wave.map((p) => p.id)), [['foundation'], ['target']]);
});

test('next-run selection refuses an A page whose companion pair is absent', () => {
  const r = repo({ pages: [A('orphan', 1, [], 'priority')] });
  assert.throws(
    () => nextBuildableSet(r, { priorities: ['priority'], maxPairs: 1 }),
    /unsatisfied prerequisite edge/,
  );
});

test('next-run selection respects its cap without returning a broken closure', () => {
  const pages = [
    A('foundation', 1, [], 'other'), B('foundation', 1),
    A('target', 3, ['foundation-examples'], 'priority'), B('target', 3),
    A('independent', 5, [], 'priority'), B('independent', 5),
  ];
  const r = repo({ pages });
  const next = nextBuildableSet(r, { priorities: ['priority'], maxPairs: 1 });
  assert.deepEqual(next.pages.map((p) => p.id), ['independent']);
  assert.equal(next.skipped.some((x) => x.id === 'target' && x.reason === 'capacity'), true);
  assert.deepEqual(unsatisfiableEdges(r, next.pages.map((p) => p.id)), []);
});

test('an oversized preferred closure advances its buildable foundation prefix', () => {
  const pages = [
    A('p1', 1, [], 'foundation'), B('p1', 1),
    A('p2', 3, ['p1-examples'], 'foundation'), B('p2', 3),
    A('target', 5, ['p2-examples'], 'priority'), B('target', 5),
  ];
  const r = repo({ pages });
  const next = nextBuildableSet(r, { priorities: ['priority'], maxPairs: 2 });
  assert.deepEqual(next.pages.map((p) => p.id), ['p1', 'p2']);
  assert.equal(next.skipped.some((x) => x.id === 'target' && x.reason === 'capacity-prefix'), true);
  assert.deepEqual(unsatisfiableEdges(r, next.pages.map((p) => p.id)), []);
});

test('a published A with a draft B companion remains in scope', () => {
  const pages = [A('partial', 1, [], 'priority'), B('partial', 1)];
  const r = repo({ pages, published: ['partial'], draft: ['partial-examples'] });
  const next = nextBuildableSet(r, { priorities: ['priority'], maxPairs: 1 });
  assert.deepEqual(next.pages.map((p) => p.id), ['partial']);
});

test('priority categories do not exclude prerequisite categories', () => {
  const pages = [
    A('a-root', 1, [], 'a'), B('a-root', 1),
    A('b-root', 3, [], 'b'), B('b-root', 3),
    A('a-next', 5, ['b-root-examples'], 'a'), B('a-next', 5),
  ];
  const r = repo({ pages });
  const next = nextBuildableSet(r, { priorities: ['a'], maxPairs: 3 });
  assert.deepEqual(next.pages.map((p) => p.id), ['a-root', 'b-root', 'a-next']);
});

test('priority subjects are selected round-robin rather than by global order', () => {
  const pages = [
    A('a1', 1, [], 'a'), B('a1', 1), A('a2', 3, [], 'a'), B('a2', 3),
    A('b1', 5, [], 'b'), B('b1', 5),
  ];
  const next = nextBuildableSet(repo({ pages }), { priorities: ['a', 'b'], maxPairs: 2 });
  assert.deepEqual(next.pages.map((p) => p.id), ['a1', 'b1']);
});

test('riemannian geometry uses its plan-spec category without an id allowlist', () => {
  const pages = [
    A('smooth-manifolds-and-smooth-maps', 1, [], 'differential-geometry'), B('smooth-manifolds-and-smooth-maps', 1),
    A('riemannian-metrics-length-distance-and-volume', 3, ['smooth-manifolds-and-smooth-maps-examples'], 'riemannian-geometry'),
    B('riemannian-metrics-length-distance-and-volume', 3, undefined, 'riemannian-geometry'),
  ];
  const next = nextBuildableSet(repo({ pages }), { priorities: ['riemannian-geometry'], maxPairs: 2 });
  assert.deepEqual(next.pages.map((p) => p.id), ['smooth-manifolds-and-smooth-maps', 'riemannian-metrics-length-distance-and-volume']);
  assert.deepEqual(next.unknownPriorities, []);
});

test('batching packs to the cap, within a category, by shared prerequisites', () => {
  const pages = [
    A('shared', 1), B('shared', 1),
    A('a', 3, ['shared']), B('a', 3),
    A('b', 5, ['shared']), B('b', 5),
    A('lonely', 7, []), B('lonely', 7),
  ];
  const r = repo({ pages, published: ['shared'] });
  const groups = packBatches(r, ['a', 'b', 'lonely']);
  assert.equal(groups.length, 2);
  assert.deepEqual(groups[0].sort(), ['a', 'b'], 'a and b share a prerequisite and should pair');
  assert.deepEqual(groups[1], ['lonely']);
});

test('batching never mixes categories', () => {
  const pages = [A('x1', 1, [], 'alg'), B('x1', 1), A('y1', 3, [], 'comb'), B('y1', 3)];
  const groups = packBatches(repo({ pages }), ['x1', 'y1']);
  assert.equal(groups.length, 2, 'two categories must not share a batch');
});

test('batching is deterministic — the same input gives the same batches', () => {
  const pages = [A('a', 1), B('a', 1), A('b', 3), B('b', 3), A('c', 5), B('c', 5)];
  const r = repo({ pages });
  assert.deepEqual(packBatches(r, ['a', 'b', 'c']), packBatches(r, ['c', 'b', 'a']));
});

test('drift evidence: assembles closure and pointers without judging', () => {
  const pages = [A('page', 5, ['have']), B('page', 5), A('have', 1), A('want', 3)];
  const r = repo({
    pages,
    docs: { 'plan-x.md': '## design for `page`\n\nprose naming `want` and `have`\n' },
  });
  const [e] = driftEvidence(r, ['page']);
  assert.deepEqual(e.declaredRequires, ['have']);
  assert.deepEqual(e.closure, ['have']);
  assert.ok(e.designLocations.length > 0, 'must point at where the design discusses the page');
  assert.deepEqual(e.mentionedNearby, ['want'], 'raw reading list, closure members excluded');
});

test('drift evidence: a page with no design mention yields an empty pointer list, not a guess', () => {
  const pages = [A('orphan', 5, []), B('orphan', 5)];
  const [e] = driftEvidence(repo({ pages, docs: {} }), ['orphan']);
  assert.deepEqual(e.designLocations, []);
  assert.deepEqual(e.mentionedNearby, []);
});
