import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, symlinkSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { protectedEntryHash } from '../step9-lib.mjs';

const tool = fileURLToPath(new URL('./step9-report.mjs', import.meta.url));
function fixture(t) {
  const base = mkdtempSync(join(tmpdir(), 'physics-report-tree-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = join(base, 'repo');
  const outside = join(base, 'outside');
  mkdirSync(join(root, 'research/cache/ocr/usr/share/doc'), { recursive: true });
  mkdirSync(outside);
  return {
    root, outside,
    run(command) {
      return spawnSync(process.execPath, [tool, command, '--run', 'demo', '--root', root], { encoding: 'utf8' });
    },
    tree() { return JSON.parse(readFileSync(join(root, 'research/demo-step9-report-integrity.json'))).protected_tree; },
  };
}

test('snapshot seals dangling cached OCR links and detects literal target changes', t => {
  const f = fixture(t);
  const relative = 'research/cache/ocr/usr/share/doc/changelog.Debian.gz';
  const link = join(f.root, relative);
  symlinkSync('../missing-package/changelog.gz', link);
  const snapshot = f.run('snapshot');
  assert.equal(snapshot.status, 0, snapshot.stderr);
  assert.equal(f.tree()[relative], protectedEntryHash(link));
  assert.equal(f.run('check').status, 0);
  unlinkSync(link);
  symlinkSync('../another-missing-package/changelog.gz', link);
  const changed = f.run('check');
  assert.notEqual(changed.status, 0);
  assert.match(changed.stderr, /step9-report-tree-changed.*changelog.Debian.gz/);
});

test('external tools/directory/file links and cycles are sealed without following their targets', t => {
  const f = fixture(t);
  const externalFile = join(f.outside, 'secret.txt');
  writeFileSync(externalFile, 'external content before\n');
  symlinkSync(f.outside, join(f.root, 'tools'));
  symlinkSync(externalFile, join(f.root, 'research/external-file'));
  symlinkSync('.', join(f.root, 'cycle'));
  const snapshot = f.run('snapshot');
  assert.equal(snapshot.status, 0, snapshot.stderr);
  assert.deepEqual(Object.keys(f.tree()).sort(), ['cycle', 'research/external-file', 'tools']);
  writeFileSync(externalFile, 'external content after\n');
  assert.equal(f.run('check').status, 0, 'external target bytes are outside the protected physical tree');
  unlinkSync(join(f.root, 'tools'));
  symlinkSync(join(f.outside, 'missing-directory'), join(f.root, 'tools'));
  assert.match(f.run('check').stderr, /step9-report-tree-changed.*tools/);
});

test('physical file mutations and link-to-file replacement remain protected', t => {
  const f = fixture(t);
  const file = join(f.root, 'research/source.txt');
  const link = join(f.root, 'research/source-link');
  writeFileSync(file, 'physical bytes\n');
  symlinkSync('source.txt', link);
  assert.equal(f.run('snapshot').status, 0);
  writeFileSync(file, 'changed physical bytes\n');
  assert.match(f.run('check').stderr, /step9-report-tree-changed.*source.txt/);
  writeFileSync(file, 'physical bytes\n');
  assert.equal(f.run('check').status, 0);
  unlinkSync(link);
  writeFileSync(link, 'source.txt');
  assert.match(f.run('check').stderr, /step9-report-tree-changed.*source-link/);
});

test('existing mutable report, dispatch and runtime exclusions remain unchanged', t => {
  const f = fixture(t);
  assert.equal(f.run('snapshot').status, 0);
  for (const file of ['research/demo-step9-report.response.json', 'research/demo-step9-report.md',
    'research/demo-dispatch/events.log', '.physics-autopilot-demo/events.jsonl']) {
    const path = join(f.root, file);
    mkdirSync(join(path, '..'), { recursive: true });
    writeFileSync(path, 'expected mutable output\n');
  }
  assert.equal(f.run('check').status, 0);
});
