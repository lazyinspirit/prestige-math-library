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

test('next-run selection considers every category without pulling unpublished prerequisites', () => {
  const pages = [
    A('foundation', 1, [], 'other'), B('foundation', 1),
    A('target', 3, ['foundation-examples'], 'priority'), B('target', 3),
    A('independent', 5, [], 'third'), B('independent', 5),
  ];
  const r = repo({ pages });
  const next = nextBuildableSet(r, { maxPairs: 3 });
  assert.deepEqual(next.pages.map((p) => p.id), ['foundation', 'independent']);
  assert.deepEqual(next.ineligible.map((p) => p.id), ['target']);
  assert.deepEqual(unsatisfiableEdges(r, next.pages.map((p) => p.id)), []);
  assert.deepEqual(next.waves.map((wave) => wave.map((p) => p.id)), [['foundation', 'independent']]);
});

test('both pages of a pair must independently clear the threshold', () => {
  const pages = [
    A('root', 1), B('root', 1),
    A('target', 3), B('target', 3, ['target', 'root-examples']),
  ];
  const r = repo({ pages });
  const next = nextBuildableSet(r, { maxPairs: 2 });
  assert.deepEqual(next.pages.map((p) => p.id), ['root']);
  assert.equal(next.ineligible[0].buildability.A.buildable, true);
  assert.equal(next.ineligible[0].buildability.B.buildable, false);
});

test('strictly more than 95 percent qualifies while exactly 95 percent does not', () => {
  const published = Array.from({ length: 20 }, (_, i) => `dep-${i + 1}`);
  const pages = [
    A('exactly-95', 1, [...published.slice(0, 19), 'missing-exact']), B('exactly-95', 1),
    A('above-95', 3, [...published, 'missing-above']), B('above-95', 3),
  ];
  const r = repo({ pages, published });
  const next = nextBuildableSet(r, { maxPairs: 2 });
  assert.deepEqual(next.pages.map((p) => p.id), ['above-95']);
  assert.equal(next.pages[0].buildability.A.publishedCount, 20);
  assert.equal(next.pages[0].buildability.A.dependencyCount, 21);
  assert.equal(unsatisfiableEdges(r, ['above-95']).length, 0);
  assert.equal(unsatisfiableEdges(r, ['exactly-95']).length, 1);
});

test('next-run selection refuses an A page whose companion pair is absent', () => {
  const r = repo({ pages: [A('orphan', 1, [], 'priority')] });
  assert.throws(
    () => nextBuildableSet(r, { maxPairs: 1 }),
    /has no planned companion orphan-examples/,
  );
});

test('next-run selection applies its cap in deterministic plan order', () => {
  const pages = [
    A('a1', 1, [], 'a'), B('a1', 1),
    A('a2', 3, [], 'a'), B('a2', 3),
    A('b1', 5, [], 'b'), B('b1', 5),
  ];
  const next = nextBuildableSet(repo({ pages }), { maxPairs: 2 });
  assert.deepEqual(next.pages.map((p) => p.id), ['a1', 'a2']);
  assert.deepEqual(next.skipped, [{ id: 'b1', reason: 'capacity' }]);
});

test('a published A with a draft B companion remains in scope', () => {
  const pages = [A('partial', 1, [], 'priority'), B('partial', 1)];
  const r = repo({ pages, published: ['partial'], draft: ['partial-examples'] });
  const next = nextBuildableSet(r, { maxPairs: 1 });
  assert.deepEqual(next.pages.map((p) => p.id), ['partial']);
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
