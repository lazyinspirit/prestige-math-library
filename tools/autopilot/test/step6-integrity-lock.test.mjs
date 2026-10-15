import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const TOOL = process.env.STEP6_REPORT_TOOL || fileURLToPath(new URL('../../step6-report.mjs', import.meta.url));
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'step6-lock-cli-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research')); mkdirSync(join(root, 'items'));
  writeFileSync(join(root, 'research/demo-publication-readiness.json'), '{}');
  writeFileSync(join(root, 'research/defect-ledger.jsonl'), 'sealed ledger\n');
  writeFileSync(join(root, 'items/thm-a.md'), 'sealed mathematical carrier\n');
  const integrity = join(root, 'research/demo-step6-report-integrity.json');
  const run = (command, preload) => spawnSync(process.execPath,
    [...(preload ? ['--import', preload] : []), TOOL, command, '--run', 'demo', '--root', root], { encoding: 'utf8' });
  const snapshot = run('snapshot'); assert.equal(snapshot.status, 0, snapshot.stderr);
  const before = readFileSync(integrity);
  // Inject a real TOCTOU: a listed entry is removed before the tool calls lstat.
  const disappear = (name, directory) => {
    const path = join(root, 'research', name);
    if (directory) { mkdirSync(path); writeFileSync(join(path, 'owner.json'), 'process mutex'); }
    else writeFileSync(path, 'ordinary protected evidence');
    const preload = join(root, 'race-preload.mjs');
    writeFileSync(preload, `import fs from 'node:fs'; import { syncBuiltinESMExports } from 'node:module';
const original = fs.readdirSync; let fired = false;
fs.readdirSync = function(dir, ...args) { const names = original.call(this, dir, ...args);
  if (!fired && String(dir) === ${JSON.stringify(join(root, 'research'))} && names.includes(${JSON.stringify(name)})) {
    fired = true; fs.rmSync(${JSON.stringify(path)}, {recursive:true,force:true}); }
  return names; }; syncBuiltinESMExports();`);
    return preload;
  };
  return { root, integrity, run, before, disappear };
}
test('native snapshot and check exclude only the exact operational append mutex, even when removed after listing', t => {
  const f = fixture(t);
  const preload = f.disappear('defect-ledger.jsonl.append-lock', true);
  const result = f.run('snapshot', preload); assert.equal(result.status, 0, result.stderr);
  assert.ok(!Object.keys(JSON.parse(readFileSync(f.integrity)).protected_tree).some(p => p.includes('append-lock')));
  rmSync(preload);
  // Take a fresh native baseline without the preload carrier.
  assert.equal(f.run('snapshot').status, 0);
  const preload2 = f.disappear('defect-ledger.jsonl.append-lock', true);
  // The preload is ordinary protected content: seal it before checking the race.
  assert.equal(f.run('snapshot').status, 0);
  const before = readFileSync(f.integrity);
  const checked = f.run('check', preload2); assert.equal(checked.status, 0, checked.stderr);
  assert.deepEqual(readFileSync(f.integrity), before, 'check must preserve its frozen baseline');
});
test('persistent exact mutex directory and owner metadata do not enter the snapshot', t => {
  const f = fixture(t), lock = join(f.root, 'research/defect-ledger.jsonl.append-lock');
  mkdirSync(lock); writeFileSync(join(lock, 'owner.json'), 'pid metadata');
  assert.equal(f.run('check').status, 0);
  assert.deepEqual(readFileSync(f.integrity), f.before);
});
test('ordinary protected evidence deleted between listing and lstat remains fatal', t => {
  const f = fixture(t), preload = f.disappear('ordinary-evidence.json', false);
  const result = f.run('check', preload);
  assert.notEqual(result.status, 0); assert.match(result.stderr, /ENOENT.*ordinary-evidence|ordinary-evidence.*ENOENT/s);
  assert.deepEqual(readFileSync(f.integrity), f.before);
});
test('a similarly suffixed mutex name is protected and its disappearance remains fatal', t => {
  const f = fixture(t), preload = f.disappear('unrelated.append-lock', true);
  const result = f.run('check', preload);
  assert.notEqual(result.status, 0); assert.match(result.stderr, /ENOENT.*unrelated.append-lock|unrelated.append-lock.*ENOENT/s);
});
test('deleted baseline content and unrelated tool or mathematical edits still fail', t => {
  for (const action of ['delete', 'edit', 'new-lock']) {
    const f = fixture(t);
    if (action === 'delete') rmSync(join(f.root, 'items/thm-a.md'));
    if (action === 'edit') writeFileSync(join(f.root, 'items/thm-a.md'), 'unapproved edit');
    if (action === 'new-lock') writeFileSync(join(f.root, 'research/arbitrary.lock'), 'protected');
    const result = f.run('check'); assert.notEqual(result.status, 0); assert.match(result.stderr, /step6-report-tree-changed/);
    assert.deepEqual(readFileSync(f.integrity), f.before);
  }
});
