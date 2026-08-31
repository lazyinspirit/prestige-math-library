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
