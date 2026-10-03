import { symlinkFixture as symlinkSync } from './fixture-io.mts';
import { spawnSync } from './fixture-process.mts';
import { copyFixtureFile } from './fixture-io.mts';
import { mkdirSync as physicsMkdir } from 'node:fs';
import { dirname as physicsDirname } from 'node:path';
const copyFileSync = copyFixtureFile;
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync as physicsCopyFile, mkdtempSync, mkdirSync, readdirSync, rmSync, symlinkSync as originalFixtureSymlink, writeFileSync } from 'node:fs';

import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { itemHashGuard, shortHash } from '../../physics-support/item-hash.mjs';
import { permittedNewLemmas } from '../../physics-support/step7-new-lemmas.mjs';
import { writeAuditorCreatedBaseline, certifyAuditorCreatedItems } from '../../physics-support/auditor-created-items.mjs';

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
  const sourceTools = new URL('../../physics-support/', import.meta.url).pathname;
  try {
    for (const dir of ['tools/physics-support', 'items', 'research']) mkdirSync(join(root, dir), { recursive: true });
    for (const file of readdirSync(sourceTools).filter((name) => name.endsWith('.mjs'))) {
      if (file === 'step7-guard.mjs') copyFileSync(join(sourceTools, file), join(root, 'tools/physics-support', file));
      else symlinkSync(join(sourceTools, file), join(root, 'tools/physics-support', file));
    }
    const before = '---\nid: thm-consumer\nkind: theorem\ndeps: []\n---\nClaim.\n';
    const after = before.replace('deps: []', 'deps: [lem-missing]');
    writeFileSync(join(root, 'items/thm-consumer.md'), before);
    writeFileSync(join(root, 'research/demo-batch-1.pages.json'), JSON.stringify([
      { id: 'page', items: [{ id: 'thm-consumer' }] },
    ]));
    writeAuditorCreatedBaseline(root, 'demo', 7);
    writeFileSync(join(root, 'items/thm-consumer.md'), after);
    writeFileSync(join(root, 'items/lem-missing.md'), '---\nid: lem-missing\nkind: lemma\ndeps: []\n---\nProof.\n');
    writeFileSync(join(root, 'research/touches.json'), JSON.stringify({ snapshots: [
      { label: 'pre-step7', hashes: { 'thm-consumer': shortHash(itemHashGuard(before)) } },
    ] }));
    writeFileSync(join(root, 'research/scope.json'), JSON.stringify({ run: 'demo', groups: [{ label: 'a' }],
      by_item: { 'thm-consumer': 'a', 'lem-missing': 'a' } }));
    const tuple = { id: 'thm-consumer', model: 'gpt-6-sol', context_sha256: 'a'.repeat(64) };
    writeFileSync(join(root, 'research/judge.jsonl'), JSON.stringify({ ...tuple, keep: false }) + '\n');
    writeFileSync(join(root, 'research/adjudications.jsonl'), JSON.stringify({ ...tuple,
      outcome: 'confirmed_fatal', item_sha256: itemHashGuard(before), defect_type: 'dependency_citation' }) + '\n');
    const run = () => spawnSync(process.execPath, ['tools/physics-support/step7-guard.mjs',
      '--touches', 'research/touches.json', '--baseline', 'pre-step7',
      '--judge-ledger', 'research/judge.jsonl', '--adjudications', 'research/adjudications.jsonl',
      '--scope', 'research/scope.json', '--json'], { cwd: root, encoding: 'utf8' });
    let result = run();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.deepEqual(JSON.parse(result.stdout).created, ['lem-missing']);
    writeFileSync(join(root, 'research/demo-batch-1.pages.json'), JSON.stringify([
      { id: 'page', items: [{ id: 'thm-consumer' }, { id: 'lem-missing' }] },
    ]));
    mkdirSync(join(root, 'research/demo-dispatch'), { recursive: true });
    writeFileSync(join(root, 'research/demo-dispatch/author.result.json'), JSON.stringify({
      run: 'demo', role: 'alpha-adjudicate', label: 'step7-a', covers: ['1'], ok: true,
      started_at: '2000-01-01T00:00:00Z', ended_at: '2100-01-01T00:00:00Z',
    }));
    certifyAuditorCreatedItems(root, 'demo', 7);
    const certifiedGuard = () => spawnSync(process.execPath, ['tools/physics-support/step7-guard.mjs',
      '--touches', 'research/touches.json', '--baseline', 'pre-step7',
      '--judge-ledger', 'research/judge.jsonl', '--adjudications', 'research/adjudications.jsonl',
      '--scope', 'research/scope.json', '--auditor-certifications',
      'research/demo-step7-auditor-certifications.json', '--json'], { cwd: root, encoding: 'utf8' });
    result = certifiedGuard();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    writeFileSync(join(root, 'research/demo-batch-1.proof-contracts.json'), JSON.stringify({
      contracts: { 'lem-missing': { risk: 'high' } },
    }));
    result = certifiedGuard();
    assert.equal(result.status, 1);
    assert.match(result.stdout, /stale Step 7 auditor-created certification carriers/);
    certifyAuditorCreatedItems(root, 'demo', 7);
    result = certifiedGuard();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    writeFileSync(join(root, 'items/lem-unrelated.md'), 'kind: lemma\ndeps: []\n');
    result = run();
    assert.equal(result.status, 1, result.stdout + result.stderr);
    assert.ok(JSON.parse(result.stdout).errors.some((error: any) =>
      error.code === 'step7-creation' && error.id === 'lem-unrelated'));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('owner impact receipts license only an exact, ordered downstream repair path', () => {
  const root = mkdtempSync(join(tmpdir(), 'step7-impact-repair-'));
  const sourceTools = new URL('../../physics-support/', import.meta.url).pathname;
  try {
    for (const dir of ['tools/physics-support', 'items', 'research']) mkdirSync(join(root, dir), { recursive: true });
    for (const file of readdirSync(sourceTools).filter((name) => name.endsWith('.mjs'))) {
      if (file === 'step7-guard.mjs') copyFileSync(join(sourceTools, file), join(root, 'tools/physics-support', file));
      else symlinkSync(join(sourceTools, file), join(root, 'tools/physics-support', file));
    }
    const before: Record<string, string> = {
      'def-root': '---\nid: def-root\nkind: definition\ndeps: []\n---\nOld interface.\n',
      'lem-middle': '---\nid: lem-middle\nkind: lemma\ndeps: [def-root]\n---\nUses old interface.\n',
      'cor-target': '---\nid: cor-target\nkind: corollary\ndeps: [lem-middle]\n---\nUses old conclusion.\n',
    };
    const after: Record<string, string> = {
      'def-root': before['def-root'].replace('Old interface.', 'Corrected interface.'),
      'lem-middle': before['lem-middle'].replace('old interface', 'corrected interface'),
      'cor-target': before['cor-target'].replace('old conclusion', 'corrected conclusion'),
    };
    for (const [id, text] of Object.entries(after)) writeFileSync(join(root, `items/${id}.md`), text);
    writeFileSync(join(root, 'research/touches.json'), JSON.stringify({ snapshots: [
      { label: 'pre-step7', hashes: Object.fromEntries(Object.entries(before)
        .map(([id, text]) => [id, shortHash(itemHashGuard(text))])) },
    ] }));
    writeFileSync(join(root, 'research/scope.json'), JSON.stringify({ run: 'demo', groups: [{ label: 'a' }],
      by_item: { 'def-root': 'a', 'lem-middle': 'a', 'cor-target': 'a' } }));
    const tuple = { id: 'def-root', model: 'gpt-6-sol', context_sha256: 'a'.repeat(64) };
    writeFileSync(join(root, 'research/judge.jsonl'), JSON.stringify({ ...tuple, keep: false }) + '\n');
    writeFileSync(join(root, 'research/adjudications.jsonl'), JSON.stringify({ ...tuple,
      outcome: 'confirmed_fatal', item_sha256: itemHashGuard(before['def-root']), defect_type: 'logic' }) + '\n');
    const common = {
      version: 1, kind: 'owner-impact-repair', run: 'demo', group: 'a', found_via: 'def-root',
      authorized_by: 'owner', at: '2026-09-14T00:00:00Z',
      defect: 'The fatal root correction invalidates this downstream consumer interface.',
      correction_basis: 'The repaired consumer follows the corrected root through every declared dependency edge, and this fixture records that exact ordered path and both content states.',
      source_urls: ['https://example.test/primary', 'https://example.test/secondary'],
    };
    const rows = [
      { ...common, id: 'lem-middle', dependency_path: ['def-root', 'lem-middle'],
        pre_sha256: itemHashGuard(before['lem-middle']), post_sha256: itemHashGuard(after['lem-middle']) },
      { ...common, id: 'cor-target', dependency_path: ['def-root', 'lem-middle', 'cor-target'],
        pre_sha256: itemHashGuard(before['cor-target']), post_sha256: itemHashGuard(after['cor-target']) },
    ];
    const repairs = join(root, 'research/owner-repairs.jsonl');
    const writeRows = (value: any[]) => writeFileSync(repairs, value.map((row) => JSON.stringify(row)).join('\n') + '\n');
    writeRows(rows);
    const run = () => spawnSync(process.execPath, ['tools/physics-support/step7-guard.mjs',
      '--touches', 'research/touches.json', '--baseline', 'pre-step7',
      '--judge-ledger', 'research/judge.jsonl', '--adjudications', 'research/adjudications.jsonl',
      '--scope', 'research/scope.json', '--owner-prerequisite-repairs', 'research/owner-repairs.jsonl',
      '--json'], { cwd: root, encoding: 'utf8' });
    let result = run();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.equal(JSON.parse(result.stdout).summary.licensed_by_fatal_or_terminal_resolution, 3);

    writeRows([rows[0], { ...rows[1], dependency_path: ['def-root', 'cor-target'] }]);
    result = run();
    assert.equal(result.status, 1, result.stdout + result.stderr);
    assert.ok(JSON.parse(result.stdout).errors.some((error: any) =>
      error.code === 'owner-impact-repair-not-path' && error.id === 'cor-target'));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
