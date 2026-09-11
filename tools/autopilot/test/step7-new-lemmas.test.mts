import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, mkdtempSync, mkdirSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { itemHashGuard, shortHash } from '../../item-hash.mjs';
import { permittedNewLemmas } from '../../step7-new-lemmas.mjs';

const texts: Record<string, string> = {
  'thm-consumer': 'kind: theorem\ndeps: [lem-missing]\n',
  'lem-missing': 'kind: lemma\ndeps: [lem-support]\n',
  'lem-support': 'kind: lemma\ndeps: []\n',
  'lem-unrelated': 'kind: lemma\ndeps: []\n',
};
const created = ['lem-missing', 'lem-support', 'lem-unrelated'];
const readItem = (id: string) => texts[id];

test('initial or final licensed repairs may add missing dependency lemma chains', () => {
  assert.deepEqual([...permittedNewLemmas({ created, readItem,
    licensedConsumers: ['thm-consumer'] })].sort(), ['lem-missing', 'lem-support']);
});

test('block-form dependencies preserve the same narrow new-lemma authority', () => {
  const blockTexts: Record<string, string> = {
    'thm-consumer': 'kind: theorem\ndeps:\n  - lem-missing\n',
    'lem-missing': 'kind: lemma\ndeps:\n- lem-support\n',
    'lem-support': 'kind: lemma\ndeps: []\n',
    'lem-unrelated': 'kind: lemma\ndeps: []\n',
  };
  assert.deepEqual([...permittedNewLemmas({ created, readItem: (id: string) => blockTexts[id],
    licensedConsumers: ['thm-consumer'] })].sort(), ['lem-missing', 'lem-support']);
});

test('unlicensed consumers cannot authorize new lemmas', () => {
  assert.equal(permittedNewLemmas({ created, readItem, licensedConsumers: [] }).size, 0);
});

test('a lemma id cannot disguise a new theorem', () => {
  assert.equal(permittedNewLemmas({ created, licensedConsumers: ['thm-consumer'],
    readItem: (id: string) => id === 'lem-missing' ? 'kind: theorem\ndeps: [lem-support]' : readItem(id),
  }).size, 0);
});

test('new lemmas cannot acquire authority through an unlicensed existing dependency', () => {
  assert.equal(permittedNewLemmas({ created, licensedConsumers: ['thm-consumer'],
    readItem: (id: string) => id === 'thm-consumer' ? 'deps: [thm-existing]' : readItem(id),
  }).size, 0);
});

test('a cyclic new dependency chain terminates and remains subject to depcheck', () => {
  assert.equal(permittedNewLemmas({ created, licensedConsumers: ['thm-consumer'],
    readItem: (id: string) => id === 'lem-support' ? 'kind: lemma\ndeps: [lem-missing]' : readItem(id),
  }).size, 2);
});

test('the actual Step-7 guard admits a new fatal-repair lemma and rejects an unrelated one', () => {
  const root = mkdtempSync(join(tmpdir(), 'step7-new-lemma-'));
  const sourceTools = new URL('../../', import.meta.url).pathname;
  try {
    for (const dir of ['tools', 'items', 'research']) mkdirSync(join(root, dir));
    for (const file of readdirSync(sourceTools).filter((name) => name.endsWith('.mjs'))) {
      if (file === 'step7-guard.mjs') copyFileSync(join(sourceTools, file), join(root, 'tools', file));
      else symlinkSync(join(sourceTools, file), join(root, 'tools', file));
    }
    const before = '---\nid: thm-consumer\nkind: theorem\ndeps: []\n---\nClaim.\n';
    const after = before.replace('deps: []', 'deps: [lem-missing]');
    writeFileSync(join(root, 'items/thm-consumer.md'), after);
    writeFileSync(join(root, 'items/lem-missing.md'), '---\nid: lem-missing\nkind: lemma\ndeps: []\n---\nProof.\n');
    writeFileSync(join(root, 'research/touches.json'), JSON.stringify({ snapshots: [
      { label: 'pre-step7', hashes: { 'thm-consumer': shortHash(itemHashGuard(before)) } },
    ] }));
    writeFileSync(join(root, 'research/scope.json'), JSON.stringify({ run: 'demo', groups: [{ label: 'a' }],
      by_item: { 'thm-consumer': 'a', 'lem-missing': 'a' } }));
    const tuple = { id: 'thm-consumer', model: 'gpt-5.6-terra', context_sha256: 'a'.repeat(64) };
    writeFileSync(join(root, 'research/judge.jsonl'), JSON.stringify({ ...tuple, keep: false }) + '\n');
    writeFileSync(join(root, 'research/adjudications.jsonl'), JSON.stringify({ ...tuple,
      outcome: 'confirmed_fatal', item_sha256: itemHashGuard(before), defect_type: 'dependency_citation' }) + '\n');
    const run = () => spawnSync(process.execPath, ['tools/step7-guard.mjs',
      '--touches', 'research/touches.json', '--baseline', 'pre-step7',
      '--judge-ledger', 'research/judge.jsonl', '--adjudications', 'research/adjudications.jsonl',
      '--scope', 'research/scope.json', '--json'], { cwd: root, encoding: 'utf8' });
    let result = run();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.deepEqual(JSON.parse(result.stdout).created, ['lem-missing']);
    writeFileSync(join(root, 'items/lem-unrelated.md'), 'kind: lemma\ndeps: []\n');
    result = run();
    assert.equal(result.status, 1, result.stdout + result.stderr);
    assert.ok(JSON.parse(result.stdout).errors.some((error: any) =>
      error.code === 'step7-creation' && error.id === 'lem-unrelated'));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
