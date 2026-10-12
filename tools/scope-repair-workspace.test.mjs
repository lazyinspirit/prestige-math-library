import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, unlinkSync, lstatSync, readlinkSync, existsSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { prepareRepairWorkspace, repairWorkspaceChanges, integrateRepairWorkspace } from './scope-repair-workspace.mjs';

const run = 'workspace-test';
const params = (files, round = 1) => ({ phase: 'repair', round, write_files: files });
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'scope-repair-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const [file, bytes] of Object.entries({
    'items/a.md': 'a original\n', 'items/b.md': 'b original\n',
    'library/topic/page.md': 'page context\n', 'research/context.json': '{}\n',
    'tools/context.mjs': '// context\n', 'README.md': 'read me\n',
  })) {
    mkdirSync(dirname(join(root, file)), { recursive: true });
    writeFileSync(join(root, file), bytes);
  }
  return root;
}
const read = (root, file) => readFileSync(join(root, file), 'utf8');

test('private workspaces keep independent edits and retries retain edits', t => {
  const root = fixture(t), p = params(['items/a.md']);
  const a = prepareRepairWorkspace(root, run, 1, p);
  const b = prepareRepairWorkspace(root, run, 2, p);
  writeFileSync(join(a, 'items/a.md'), 'first private edit\n');
  writeFileSync(join(b, 'items/a.md'), 'second private edit\n');
  assert.equal(read(root, 'items/a.md'), 'a original\n');
  assert.equal(read(a, 'items/a.md'), 'first private edit\n');
  assert.equal(read(b, 'items/a.md'), 'second private edit\n');
  assert.equal(prepareRepairWorkspace(root, run, 1, p), a);
  assert.equal(read(a, 'items/a.md'), 'first private edit\n');
  integrateRepairWorkspace(repairWorkspaceChanges(root, run, 1, p));
  assert.equal(read(root, 'items/a.md'), 'first private edit\n');
  assert.equal(read(b, 'items/a.md'), 'second private edit\n');
  assert.throws(() => repairWorkspaceChanges(root, run, 2, p), /Canonical repair input changed: items\/a\.md/);
});

test('canonical conflict rejects the whole proposal before any canonical edit', t => {
  const root = fixture(t), p = params(['items/a.md', 'items/b.md']);
  const work = prepareRepairWorkspace(root, run, 1, p);
  writeFileSync(join(work, 'items/a.md'), 'private a\n');
  writeFileSync(join(work, 'items/b.md'), 'private b\n');
  writeFileSync(join(root, 'items/b.md'), 'external b\n');
  assert.throws(() => repairWorkspaceChanges(root, run, 1, p), /Canonical repair input changed: items\/b\.md/);
  assert.equal(read(root, 'items/a.md'), 'a original\n');
  assert.equal(read(root, 'items/b.md'), 'external b\n');
});

test('out-of-scope regular writes and context-link replacements are rejected', t => {
  const root = fixture(t), p = params(['items/a.md']);
  const work = prepareRepairWorkspace(root, run, 1, p);
  writeFileSync(join(work, 'items/unauthorized.md'), 'unowned\n');
  assert.throws(() => repairWorkspaceChanges(root, run, 1, p), /outside assigned scope: items\/unauthorized\.md/);
  unlinkSync(join(work, 'items/unauthorized.md'));
  unlinkSync(join(work, 'items/b.md'));
  writeFileSync(join(work, 'items/b.md'), 'regular replacement\n');
  assert.throws(() => repairWorkspaceChanges(root, run, 1, p), /outside assigned scope: items\/b\.md/);
  assert.equal(read(root, 'items/b.md'), 'b original\n');
});

test('integration replaces complete files and applies owned additions and deletions', t => {
  const root = fixture(t), p = params(['items/a.md', 'items/b.md', 'items/new.md']);
  const work = prepareRepairWorkspace(root, run, 1, p);
  const oldInode = lstatSync(join(root, 'items/a.md')).ino;
  const complete = 'replacement\n'.repeat(10000);
  writeFileSync(join(work, 'items/a.md'), complete);
  unlinkSync(join(work, 'items/b.md'));
  writeFileSync(join(work, 'items/new.md'), 'new owned item\n');
  const proposal = repairWorkspaceChanges(root, run, 1, p);
  assert.deepEqual(proposal.changes.map(row => row.file).sort(), ['items/a.md', 'items/b.md', 'items/new.md']);
  assert.equal(read(root, 'items/a.md'), 'a original\n');
  integrateRepairWorkspace(proposal);
  assert.equal(read(root, 'items/a.md'), complete);
  assert.notEqual(lstatSync(join(root, 'items/a.md')).ino, oldInode);
  assert.equal(existsSync(join(root, 'items/b.md')), false);
  assert.equal(read(root, 'items/new.md'), 'new owned item\n');
  assert.deepEqual(readdirSync(join(root, 'items')).filter(name => name.endsWith('.tmp')), []);
});

test('unowned context remains symlinked through proposal and integration', t => {
  const root = fixture(t), p = params(['items/a.md', 'library/topic/owned.md']);
  const work = prepareRepairWorkspace(root, run, 1, p);
  const links = ['items/b.md', 'library/topic/page.md', 'research/context.json', 'tools', 'README.md'];
  for (const file of links) {
    assert.equal(lstatSync(join(work, file)).isSymbolicLink(), true, file);
    assert.equal(readlinkSync(join(work, file)), join(root, file));
  }
  assert.equal(lstatSync(join(work, 'items/a.md')).isSymbolicLink(), false);
  assert.equal(lstatSync(join(work, '.git')).isDirectory(), true);
  writeFileSync(join(work, 'items/a.md'), 'owned change\n');
  integrateRepairWorkspace(repairWorkspaceChanges(root, run, 1, p));
  for (const file of links) assert.equal(readlinkSync(join(work, file)), join(root, file));
  assert.equal(read(root, 'library/topic/page.md'), 'page context\n');
});

test('canonical changes after proposal creation are rejected before integration', t => {
  const root = fixture(t), p = params(['items/a.md', 'items/b.md']);
  const work = prepareRepairWorkspace(root, run, 1, p);
  writeFileSync(join(work, 'items/a.md'), 'private a\n');
  writeFileSync(join(work, 'items/b.md'), 'private b\n');
  const proposal = repairWorkspaceChanges(root, run, 1, p);
  writeFileSync(join(root, 'items/b.md'), 'late external b\n');
  assert.throws(() => integrateRepairWorkspace(proposal), /Canonical repair input changed/);
  assert.equal(read(root, 'items/a.md'), 'a original\n');
  assert.equal(read(root, 'items/b.md'), 'late external b\n');
});

test('new owned files in absent nested directories stay private until integration', t => {
  const root = fixture(t);
  const files = ['items/new.md', 'library/new-topic/page.md', 'research/new-evidence/receipt.json'];
  const p = params(files), work = prepareRepairWorkspace(root, run, 1, p);
  for (const file of files) {
    mkdirSync(dirname(join(work, file)), { recursive: true });
    writeFileSync(join(work, file), `new ${file}\n`);
    assert.equal(existsSync(join(root, file)), false);
  }
  const proposal = repairWorkspaceChanges(root, run, 1, p);
  assert.equal(proposal.changes.length, files.length);
  assert.equal(proposal.changes.every(row => row.before === null), true);
  integrateRepairWorkspace(proposal);
  for (const file of files) assert.equal(read(root, file), `new ${file}\n`);
});

test('disjoint batches integrate independently while linked context reflects canonical changes', t => {
  const root = fixture(t), pa = params(['items/a.md']), pb = params(['items/b.md']);
  const a = prepareRepairWorkspace(root, run, 1, pa), b = prepareRepairWorkspace(root, run, 2, pb);
  writeFileSync(join(a, 'items/a.md'), 'private a\n');
  writeFileSync(join(b, 'items/b.md'), 'private b\n');
  const proposalB = repairWorkspaceChanges(root, run, 2, pb);
  integrateRepairWorkspace(repairWorkspaceChanges(root, run, 1, pa));
  assert.equal(read(b, 'items/a.md'), 'private a\n');
  assert.equal(lstatSync(join(b, 'items/a.md')).isSymbolicLink(), true);
  assert.equal(read(b, 'items/b.md'), 'private b\n');
  integrateRepairWorkspace(proposalB);
  assert.equal(read(root, 'items/a.md'), 'private a\n');
  assert.equal(read(root, 'items/b.md'), 'private b\n');
});
