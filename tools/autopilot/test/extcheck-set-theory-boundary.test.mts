import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'extcheck.mjs');

function item(id: string, deps = '[]', extra: string[] = []) {
  return [
    '---', `id: ${id}`, `kind: ${id.startsWith('rem-') ? 'remark' : id.startsWith('lem-') ? 'lemma' : 'theorem'}`,
    'status: draft', 'origin: pipeline', `deps: ${deps}`, ...extra, '---', '',
  ].join('\n');
}

test('extcheck rejects a transitive Foundations dependency on the Set Theory deferred catalogue', () => {
  const repo = mkdtempSync(join(tmpdir(), 'extcheck-set-boundary-'));
  mkdirSync(join(repo, 'items'));
  mkdirSync(join(repo, 'library', 'foundations'), { recursive: true });
  mkdirSync(join(repo, 'library', 'not-proved-here'), { recursive: true });

  writeFileSync(join(repo, 'items', 'rem-deferred-result.md'), item('rem-deferred-result', '[]', [
    'proved_here: false',
    'verification:',
    '  precheck: n/a',
    'sources:',
    '  references:',
    '    - title: Primary source',
    '      url: https://example.test/source',
  ]));
  writeFileSync(join(repo, 'items', 'lem-middle.md'), item('lem-middle', '[rem-deferred-result]'));
  writeFileSync(join(repo, 'items', 'thm-consumer.md'), item('thm-consumer', '[lem-middle]'));
  writeFileSync(join(repo, 'library', 'not-proved-here', 'deferred-set-theory-beyond-choice.md'), [
    '---', 'page: deferred-set-theory-beyond-choice', 'status: published',
    'items: [rem-deferred-result]', 'examples: []', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'library', 'foundations', 'consumer.md'), [
    '---', 'page: consumer', 'status: draft', 'items: [thm-consumer]', 'examples: []', '---', '',
  ].join('\n'));

  const result = spawnSync(process.execPath, [TOOL, '--quiet', '--repo', repo], {
    cwd: repo, encoding: 'utf8', timeout: 60_000,
  });
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(result.stdout + result.stderr, /\[foundations-deferred-dependency\].*thm-consumer -> lem-middle -> rem-deferred-result/);
  rmSync(repo, { recursive: true, force: true });
});

test('extcheck also protects planned Foundations items before their page file exists', () => {
  const repo = mkdtempSync(join(tmpdir(), 'extcheck-set-plan-boundary-'));
  mkdirSync(join(repo, 'items'));
  mkdirSync(join(repo, 'library', 'not-proved-here'), { recursive: true });
  mkdirSync(join(repo, 'research'));

  writeFileSync(join(repo, 'items', 'rem-deferred-result.md'), item('rem-deferred-result', '[]', [
    'proved_here: false',
    'verification:',
    '  precheck: n/a',
    'sources:',
    '  references:',
    '    - title: Primary source',
    '      url: https://example.test/source',
  ]));
  writeFileSync(join(repo, 'items', 'lem-existing-middle.md'), item('lem-existing-middle', '[rem-deferred-result]'));
  writeFileSync(join(repo, 'library', 'not-proved-here', 'deferred-set-theory-beyond-choice.md'), [
    '---', 'page: deferred-set-theory-beyond-choice', 'status: published',
    'items: [rem-deferred-result]', 'examples: []', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({ pages: [{
    order: 1,
    id: 'future-foundations-page',
    category: 'foundations',
    items: [{ id: 'thm-planned-consumer', kind: 'theorem', deps: ['lem-existing-middle'] }],
  }] }));

  const result = spawnSync(process.execPath, [TOOL, '--quiet', '--repo', repo], {
    cwd: repo, encoding: 'utf8', timeout: 60_000,
  });
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(result.stdout + result.stderr, /\[foundations-deferred-dependency\].*thm-planned-consumer -> lem-existing-middle -> rem-deferred-result/);
  rmSync(repo, { recursive: true, force: true });
});

test('extcheck inspects actual items on inherited published prerequisite pages', () => {
  const repo = mkdtempSync(join(tmpdir(), 'extcheck-set-p-page-boundary-'));
  mkdirSync(join(repo, 'items'));
  mkdirSync(join(repo, 'library', 'not-proved-here'), { recursive: true });
  mkdirSync(join(repo, 'library', 'real-analysis'), { recursive: true });
  mkdirSync(join(repo, 'research'));

  writeFileSync(join(repo, 'items', 'rem-deferred-result.md'), item('rem-deferred-result', '[]', [
    'proved_here: false',
    'verification:',
    '  precheck: n/a',
    'sources:',
    '  references:',
    '    - title: Primary source',
    '      url: https://example.test/source',
  ]));
  writeFileSync(join(repo, 'items', 'thm-published-supplier.md'), item('thm-published-supplier', '[rem-deferred-result]'));
  writeFileSync(join(repo, 'library', 'not-proved-here', 'deferred-set-theory-beyond-choice.md'), [
    '---', 'page: deferred-set-theory-beyond-choice', 'status: published',
    'items: [rem-deferred-result]', 'examples: []', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'library', 'real-analysis', 'published-supplier.md'), [
    '---', 'page: published-supplier', 'status: published',
    'items: [thm-published-supplier]', 'examples: []', '---', '',
  ].join('\n'));
  writeFileSync(join(repo, 'research', 'plan-spec.json'), JSON.stringify({ pages: [
    { order: 1, id: 'published-supplier', kind: 'P', category: 'real-analysis', requires: [], items: [] },
    { order: 2, id: 'future-foundations-page', kind: 'A', category: 'foundations', requires: ['published-supplier'], items: [] },
  ] }));

  const result = spawnSync(process.execPath, [TOOL, '--quiet', '--repo', repo], {
    cwd: repo, encoding: 'utf8', timeout: 60_000,
  });
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(result.stdout + result.stderr, /\[foundations-deferred-dependency\].*thm-published-supplier -> rem-deferred-result/);
  rmSync(repo, { recursive: true, force: true });
});
