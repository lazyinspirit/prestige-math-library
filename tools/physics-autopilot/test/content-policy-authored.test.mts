import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const POLICY = new URL('../../physics-support/content-policy.mjs', import.meta.url).pathname;
const page = (id = 'home', items: any[] = [{ id: 'def-owned', deps: [] }], kind = 'A', order = 1) =>
  ({ id, category: 'fixture', kind, order, items });

function check({ manifests = [page()], homes = ['home'], planHome, flags = ['--manifest-only', '--authored'] }:
  { manifests?: any[]; homes?: string[]; planHome?: string; flags?: string[] } = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'physics-authored-policy-'));
  try {
    for (const path of ['items', 'research', 'library/fixture']) mkdirSync(join(dir, path), { recursive: true });
    writeFileSync(join(dir, 'items/def-owned.md'), '---\nid: def-owned\nkind: definition\n---\n## Definition\nFixture.\n');
    writeFileSync(join(dir, 'research/plan-spec.json'), JSON.stringify({
      pages: planHome ? [{ id: planHome, items: ['def-owned'] }] : [],
    }));
    for (const home of homes) writeFileSync(join(dir, `library/fixture/${home}.md`),
      `---\npage: ${home}\nitems: [def-owned]\nexamples: []\n---\nFixture.\n`);
    writeFileSync(join(dir, 'batch.json'), JSON.stringify(manifests));
    const result = spawnSync(process.execPath, [POLICY, ...flags, '--json', 'batch.json'], {
      cwd: dir, encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: dir },
    });
    assert.equal(result.error, undefined);
    return { status: result.status, output: result.stdout + result.stderr,
      errors: result.stdout.startsWith('{') ? JSON.parse(result.stdout).errors : [] };
  } finally { rmSync(dir, { recursive: true, force: true }); }
}

test('authored join accepts exact actual home before canonical transcription; pre-mint mode rejects it', () => {
  assert.equal(check().status, 0);
  const mint = check({ flags: ['--manifest-only'] });
  assert.equal(mint.status, 1);
  assert.match(mint.output, /batch-item-already-exists/);
});

test('authored join rejects foreign, duplicate, absent, and wrong-category homes', () => {
  for (const options of [{ homes: ['elsewhere'] }, { homes: ['home', 'elsewhere'] }, { homes: [] },
    { manifests: [{ ...page(), category: 'different' }] }]) {
    const result = check(options);
    assert.equal(result.status, 1, JSON.stringify(options));
    assert.match(result.output, /batch-item-already-exists/);
  }
});

test('authored join retains canonical ownership, duplicate inventory, capacity, and dependency guards', () => {
  for (const [options, code] of [
    [{ planHome: 'foreign' }, 'batch-plan-id-collision'],
    [{ manifests: [page(), page('other')] }, 'batch-duplicate-item'],
    [{ manifests: [page(), page('second', []), page('third', [])] }, 'batch-a-pair-cap'],
    [{ manifests: [page('home', [{ id: 'def-owned', deps: ['def-missing'] }])] }, 'batch-dependency-missing'],
    [{ manifests: [page('home', [{ id: 'def-owned', deps: ['def-later'] }]),
      page('later', [{ id: 'def-later', deps: [] }], 'A', 2)] }, 'batch-forward-dependency'],
    [{ manifests: [page('home', [{ id: 'def-owned', deps: ['def-leaf'] }]),
      page('leaf', [{ id: 'def-leaf', deps: [] }], 'B', 0)] }, 'batch-b-leaf-target'],
  ] as const) {
    const result = check(options);
    assert.equal(result.status, 1, code);
    assert.match(result.output, new RegExp(code));
  }
});

test('authored mode cannot weaken item mode or audit mode', () => {
  assert.equal(check({ flags: ['--authored'] }).status, 2);
  assert.equal(check({ flags: ['--authored', '--manifest-only', '--audit'] }).status, 2);
});
