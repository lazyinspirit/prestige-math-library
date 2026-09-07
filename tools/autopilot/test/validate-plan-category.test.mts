import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'validate-plan.mjs');

function fixture(companionCategory: string) {
  const repo = mkdtempSync(join(tmpdir(), 'validate-plan-category-'));
  mkdirSync(join(repo, 'research'), { recursive: true });
  mkdirSync(join(repo, 'items'));
  mkdirSync(join(repo, 'library'));
  writeFileSync(join(repo, 'research', 'plan-differential-geometry-track.md'), [
    '| Pair | A page | B/examples page | Direct earlier DG pages |',
    '|---|---|---|---|',
    '| DG-1 | `track-a` | `documented-b` | — |',
    '',
  ].join('\n'));
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({ pages: [
    {
      order: 1, id: 'track-a', title: 'A', kind: 'A', category: 'differential-geometry',
      companion: 'actual-b', requires: [], items: [],
    },
    {
      order: 2, id: 'actual-b', title: 'B', kind: 'B', category: companionCategory,
      companion: 'track-a', requires: ['track-a'], items: [],
    },
  ] }, null, 2));
  return repo;
}

function run(repo: string) {
  return spawnSync(process.execPath, [TOOL, 'research/plan-spec.json', '--repo', repo], {
    cwd: repo, encoding: 'utf8', timeout: 60_000,
  });
}

test('the differential-geometry track fixes both A and actual companion categories', () => {
  const badRepo = fixture('lie-theory');
  const bad = run(badRepo);
  assert.equal(bad.status, 1, bad.stderr);
  assert.match(bad.stdout + bad.stderr, /\[track-category\] page actual-b: .*requires category "differential-geometry"/);
  rmSync(badRepo, { recursive: true, force: true });

  const goodRepo = fixture('differential-geometry');
  const good = run(goodRepo);
  assert.equal(good.status, 0, good.stdout + good.stderr);
  rmSync(goodRepo, { recursive: true, force: true });
});

function functionalFixture(pageDirectory: string) {
  const repo = mkdtempSync(join(tmpdir(), 'validate-plan-functional-category-'));
  mkdirSync(join(repo, 'research'), { recursive: true });
  mkdirSync(join(repo, 'items'));
  mkdirSync(join(repo, 'library', pageDirectory), { recursive: true });
  writeFileSync(join(repo, 'research', 'plan-functional-analysis-track.md'), [
    '| label | A page id | mathematical spine |',
    '|---|---|---|',
    '| FA-1 | `normed-spaces` | foundations |',
    '',
  ].join('\n'));
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({ pages: [
    {
      order: 1, id: 'normed-spaces', title: 'Normed spaces', kind: 'A',
      category: 'functional-analysis', companion: 'normed-spaces-examples',
      requires: [], items: [],
    },
    {
      order: 2, id: 'normed-spaces-examples', title: 'Normed spaces examples', kind: 'B',
      category: 'functional-analysis', companion: 'normed-spaces',
      requires: ['normed-spaces'], items: [],
    },
  ] }, null, 2));
  for (const id of ['normed-spaces', 'normed-spaces-examples']) {
    writeFileSync(join(repo, 'library', pageDirectory, `${id}.md`), [
      '---', `page: ${id}`, 'status: draft', 'items: []', 'examples: []', '---', '',
    ].join('\n'));
  }
  return repo;
}

test('functional-analysis pages live in their own top-level category directory', () => {
  const badRepo = functionalFixture('real-analysis/functional-analysis');
  const bad = run(badRepo);
  assert.equal(bad.status, 1, bad.stderr);
  assert.match(bad.stdout + bad.stderr, /\[track-category-path\].*requires library\/functional-analysis\/normed-spaces\.md/);
  rmSync(badRepo, { recursive: true, force: true });

  const goodRepo = functionalFixture('functional-analysis');
  const good = run(goodRepo);
  assert.equal(good.status, 0, good.stdout + good.stderr);
  rmSync(goodRepo, { recursive: true, force: true });
});

test('foundations pages cannot require the Set Theory deferred catalogue', () => {
  const repo = mkdtempSync(join(tmpdir(), 'validate-plan-set-boundary-'));
  mkdirSync(join(repo, 'research'), { recursive: true });
  mkdirSync(join(repo, 'items'));
  mkdirSync(join(repo, 'library'));
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({ pages: [
    {
      order: 1, id: 'deferred-set-theory-beyond-choice', title: 'Deferred', kind: 'X',
      category: 'not-proved-here', requires: [], items: [],
    },
    {
      order: 2, id: 'set-foundation', title: 'Set foundation', kind: 'A',
      category: 'foundations', companion: 'set-foundation-examples',
      requires: ['deferred-set-theory-beyond-choice'], items: [],
    },
    {
      order: 3, id: 'set-foundation-examples', title: 'Examples', kind: 'B',
      category: 'foundations', companion: 'set-foundation',
      requires: ['set-foundation'], items: [],
    },
  ] }, null, 2));

  const result = run(repo);
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(result.stdout + result.stderr, /\[set-theory-boundary\].*must build the recorded results/);
  rmSync(repo, { recursive: true, force: true });
});

test('foundations plans cannot hide a dependency on a deferred Set Theory item', () => {
  const repo = mkdtempSync(join(tmpdir(), 'validate-plan-set-item-boundary-'));
  mkdirSync(join(repo, 'research'), { recursive: true });
  mkdirSync(join(repo, 'items'));
  mkdirSync(join(repo, 'library', 'not-proved-here'), { recursive: true });
  writeFileSync(join(repo, 'items', 'rem-deferred-result.md'), [
    '---', 'id: rem-deferred-result', 'kind: remark', 'status: published',
    'proved_here: false', 'deps: []', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'items', 'lem-existing-middle.md'), [
    '---', 'id: lem-existing-middle', 'kind: lemma', 'status: published',
    'deps: [rem-deferred-result]', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'library', 'not-proved-here', 'deferred-set-theory-beyond-choice.md'), [
    '---', 'page: deferred-set-theory-beyond-choice', 'status: published',
    'items: [rem-deferred-result]', 'examples: []', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({ pages: [
    {
      order: 1, id: 'set-foundation', title: 'Set foundation', kind: 'A',
      category: 'foundations', companion: 'set-foundation-examples', requires: [],
      items: [{ id: 'thm-consumer', kind: 'theorem', deps: ['lem-existing-middle'] }],
    },
    {
      order: 2, id: 'set-foundation-examples', title: 'Examples', kind: 'B',
      category: 'foundations', companion: 'set-foundation',
      requires: ['set-foundation'], items: [],
    },
  ] }, null, 2));

  const result = run(repo);
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(result.stdout + result.stderr, /\[set-theory-boundary\].*thm-consumer -> lem-existing-middle -> rem-deferred-result/);
  rmSync(repo, { recursive: true, force: true });
});

test('foundations plans inspect actual items on inherited P pages', () => {
  const repo = mkdtempSync(join(tmpdir(), 'validate-plan-set-p-page-boundary-'));
  mkdirSync(join(repo, 'research'), { recursive: true });
  mkdirSync(join(repo, 'items'));
  mkdirSync(join(repo, 'library', 'not-proved-here'), { recursive: true });
  mkdirSync(join(repo, 'library', 'real-analysis'), { recursive: true });
  writeFileSync(join(repo, 'items', 'rem-deferred-result.md'), [
    '---', 'id: rem-deferred-result', 'kind: remark', 'status: published',
    'proved_here: false', 'deps: []', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'items', 'thm-published-supplier.md'), [
    '---', 'id: thm-published-supplier', 'kind: theorem', 'status: published',
    'deps: [rem-deferred-result]', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'library', 'not-proved-here', 'deferred-set-theory-beyond-choice.md'), [
    '---', 'page: deferred-set-theory-beyond-choice', 'status: published',
    'items: [rem-deferred-result]', 'examples: []', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'library', 'real-analysis', 'published-supplier.md'), [
    '---', 'page: published-supplier', 'status: published',
    'items: [thm-published-supplier]', 'examples: []', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({ pages: [
    {
      order: 1, id: 'published-supplier', title: 'Published supplier', kind: 'P',
      category: 'real-analysis', requires: [], items: [],
    },
    {
      order: 2, id: 'set-foundation', title: 'Set foundation', kind: 'A',
      category: 'foundations', companion: 'set-foundation-examples',
      requires: ['published-supplier'], items: [],
    },
    {
      order: 3, id: 'set-foundation-examples', title: 'Examples', kind: 'B',
      category: 'foundations', companion: 'set-foundation',
      requires: ['set-foundation'], items: [],
    },
  ] }, null, 2));

  const result = run(repo);
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(result.stdout + result.stderr, /\[set-theory-boundary\].*thm-published-supplier -> rem-deferred-result/);
  rmSync(repo, { recursive: true, force: true });
});
