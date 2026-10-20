import assert from 'node:assert/strict';
import test from 'node:test';
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { APP_DIR } from './paths.mjs';

const tools = new URL('.', import.meta.url).pathname;
const proof = `---
id: thm-owned
kind: theorem
deps: [thm-supplier]
proof_strategy: direct
---

## Proof

**Given:** A number $x=0$.

1.1 We have $x=0$. [given]

2.1 Therefore $x+x=0$. [step 1.1, algebra] ∎
`;

function fixture(t) {
  const repo = mkdtempSync(join(tmpdir(), 'gate-liveness-frontier-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  for (const dir of ['tools', 'research', 'items']) mkdirSync(join(repo, dir));
  for (const file of ['gate-liveness.mjs', 'frontier-gate-scope.mjs', 'precheck.mts',
    'tsx-run.mjs', 'paths.mjs', 'typescript-register.mjs', 'typescript-loader-hooks.mjs'])
    copyFileSync(join(tools, file), join(repo, 'tools', file));
  const write = (path, text) => writeFileSync(join(repo, path), text);
  // Both the unrelated item and an external prerequisite have failing proof
  // formatting. Neither is a formatting subject of this run.
  write('items/thm-owned.md', proof);
  write('items/thm-unrelated.md', '\n## Proof\n\nBroken proof without a strategy.\n');
  write('items/thm-supplier.md', '\n## Proof\n\nBroken supplier proof without a strategy.\n');
  const manifest = items => JSON.stringify([{ id: 'selected', category: 'test', items }]);
  write('research/run-test-batch-1.pages.json', manifest([{ id: 'thm-owned' }]));
  const run = (args = []) => spawnSync(process.execPath, ['tools/gate-liveness.mjs',
    '--run', 'run-test', '--json', '--allow-missing', ...args], {
    cwd: repo, encoding: 'utf8', timeout: 30_000,
    env: { ...process.env, ...(APP_DIR ? { PRESTIGE_APP_DIR: APP_DIR } : {}) },
  });
  return { repo, write, manifest, run };
}

test('precheck liveness counts exactly current owned proofs and retains its exit', t => {
  const f = fixture(t);
  let result = f.run();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  let row = JSON.parse(result.stdout).results.find(row => row.gate === 'precheck');
  assert.deepEqual(row, { gate: 'precheck', status: 'live', checked: 1, unit: 'items checked', exit: 0 });
  f.write('items/thm-owned.md', proof.replace('[given]', '[invalid-justification]'));
  result = f.run();
  row = JSON.parse(result.stdout).results.find(row => row.gate === 'precheck');
  assert.equal(result.status, 0); // Liveness measures examination, not validity.
  assert.equal(row.status, 'live');
  assert.equal(row.checked, 1);
  assert.equal(row.exit, 1);
  f.write('items/thm-owned.md', proof.replace('proof_strategy: direct\n', ''));
  result = f.run();
  row = JSON.parse(result.stdout).results.find(row => row.gate === 'precheck');
  assert.equal(result.status, 1);
  assert.equal(row.status, 'VACUOUS');
  assert.equal(row.checked, 0);
  assert.equal(row.exit, 1);
  f.write('items/thm-owned.md', '---\nid: thm-owned\nkind: definition\n---\n\n## Definition\n\nZero.\n');
  result = f.run();
  row = JSON.parse(result.stdout).results.find(row => row.gate === 'precheck');
  assert.equal(result.status, 1);
  assert.equal(row.status, 'VACUOUS');
  assert.equal(row.checked, 0);
  assert.equal(row.exit, 0);
});

test('precheck liveness refreshes manifest selection instead of retaining old subjects', t => {
  const f = fixture(t);
  assert.equal(f.run().status, 0);
  f.write('items/thm-second.md', proof.replaceAll('thm-owned', 'thm-second'));
  f.write('research/run-test-batch-1.pages.json', f.manifest([{ id: 'thm-owned' }, { id: 'thm-second' }]));
  const result = f.run();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(JSON.parse(result.stdout).results.find(row => row.gate === 'precheck').checked, 2);
  assert.equal(f.run(['--min-checks', '3']).status, 1);
});

test('bad frontier inventory cannot pass through allow-missing or a corpus fallback', t => {
  const f = fixture(t);
  const path = 'research/run-test-batch-1.pages.json';
  for (const text of ['{', '{}', '[]', f.manifest([]), f.manifest([{ id: 'thm-unknown' }]),
    f.manifest([{ id: '../thm-owned' }]), f.manifest([{ id: 'thm-owned' }, { id: 'thm-owned' }])]) {
    f.write(path, text);
    const result = f.run();
    assert.equal(result.status, 1, text + result.stdout + result.stderr);
    const row = JSON.parse(result.stdout).results.find(row => row.gate === 'precheck');
    assert.equal(row.status, 'unparsed');
    assert.equal(row.exit, 1);
  }
  f.write(path, f.manifest([{ id: 'thm-owned' }]));
  // A missing run has no manifests; existing proof files cannot provide scope.
  rmSync(join(f.repo, path));
  const result = f.run();
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.equal(JSON.parse(result.stdout).results.find(row => row.gate === 'precheck').status, 'unparsed');
});
