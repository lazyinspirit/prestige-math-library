import assert from 'node:assert/strict';
import test from 'node:test';
import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { runFocusedFailedChecks } from './focused-failed-item-recheck.mjs';

const HERE = new URL('.', import.meta.url).pathname;
const digest = text => createHash('sha256').update(text).digest('hex');

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'focused-item-recheck-'));
  mkdirSync(join(root, 'items'));
  return root;
}

function evidenceFor(root, { failed = ['lem-failed'], passed = ['lem-passed'] } = {}) {
  const retained = [];
  for (const id of passed) {
    const path = `items/${id}.md`;
    retained.push({ id, inputs: [{ path, sha256: digest(readFileSync(join(root, path))) }] });
  }
  return { version: 1, run: 'focused-test', gates: { depcheck: {
    complete: true,
    failed_subjects: failed,
  } }, retained_pass_inputs: { depcheck: retained } };
}

test('focused validators check only selected item-local errors and keep global cycles complete', () => {
  const root = fixture();
  try {
    mkdirSync(join(root, 'tools'));
    mkdirSync(join(root, 'research'));
    mkdirSync(join(root, 'library', 'test'), { recursive: true });
    for (const file of ['depcheck.mjs', 'fwdcheck.mjs', 'facts-block.mjs', 'frontmatter-list.mjs', 'item-scope.mjs', 'published-repair-policy.mjs', 'item-hash.mjs'])
      copyFileSync(join(HERE, file), join(root, 'tools', file));
    writeFileSync(join(root, 'research', 'b-leaf-legacy-allowlist.json'), JSON.stringify({ version: 1, edges: [] }));
    writeFileSync(join(root, 'research', 'plan-spec.json'), JSON.stringify({ pages: [
      { id: 'page-a', order: 1, kind: 'A', requires: [], items: ['lem-selected', 'lem-unselected', 'thm-page-a'] },
      { id: 'page-b', order: 2, kind: 'A', requires: ['page-a'], items: ['thm-page-b'] },
    ] }));
    const item = (id, kind, deps = [], extra = '') => `---\nid: ${id}\nkind: ${kind}\nstatus: draft\ndeps: [${deps.join(', ')}]\n${extra}---\n## Statement\n\n${id}.\n`;
    writeFileSync(join(root, 'items', 'lem-selected.md'), item('lem-selected', 'lemma', ['def-missing-selected'], 'forward_refs: [thm-later]\n'));
    writeFileSync(join(root, 'items', 'lem-unselected.md'), item('lem-unselected', 'lemma', ['def-missing-unselected'], 'forward_refs: [thm-other-later]\n'));
    writeFileSync(join(root, 'items', 'thm-page-a.md'), item('thm-page-a', 'theorem', ['thm-page-b']));
    writeFileSync(join(root, 'items', 'thm-page-b.md'), item('thm-page-b', 'theorem', ['thm-page-a']));
    writeFileSync(join(root, 'library', 'test', 'page-a.md'), '---\npage: page-a\nstatus: draft\nitems: [lem-selected, lem-unselected, thm-page-a]\nexamples: []\n---\n');
    writeFileSync(join(root, 'library', 'test', 'page-b.md'), '---\npage: page-b\nstatus: draft\nitems: [thm-page-b]\nexamples: []\n---\n');
    writeFileSync(join(root, 'research', 'selected.json'), JSON.stringify(['lem-selected']));

    const depcheck = spawnSync(process.execPath, ['tools/depcheck.mjs', '--items-file', 'research/selected.json', '--json'], { cwd: root, encoding: 'utf8' });
    assert.equal(depcheck.status, 1, depcheck.stderr);
    const dep = JSON.parse(depcheck.stdout);
    assert.equal(dep.summary.scope, 'focused-items');
    assert.ok(dep.errors.some(row => row.code === 'dep-unresolved' && row.msg.includes('lem-selected')));
    assert.ok(!dep.errors.some(row => row.code === 'dep-unresolved' && row.msg.includes('lem-unselected')));
    assert.ok(dep.errors.some(row => row.code === 'item-cycle'));
    assert.ok(dep.errors.some(row => row.code === 'page-cycle'));

    const fwdcheck = spawnSync(process.execPath, ['tools/fwdcheck.mjs', '--items-file', 'research/selected.json', '--json'], { cwd: root, encoding: 'utf8' });
    assert.equal(fwdcheck.status, 1, fwdcheck.stderr);
    const fwd = JSON.parse(fwdcheck.stdout);
    assert.equal(fwd.summary.scope, 'focused-items');
    assert.ok(fwd.errors.some(row => row.code === 'forward-unused' && row.msg.includes('lem-selected')));
    assert.ok(!fwd.errors.some(row => row.code === 'forward-unused' && row.msg.includes('lem-unselected')));
    assert.ok(fwd.errors.some(row => row.code === 'forward-cycle'));
    assert.ok(fwd.errors.some(row => row.code === 'stack-cycle'));
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('focused retry runs only recorded failed subjects and retains hash-matching passes', async () => {
  const root = fixture();
  try {
    for (const id of ['lem-failed', 'lem-passed', 'ex-passed'])
      writeFileSync(join(root, 'items', `${id}.md`), `body for ${id}\n`);
    const evidence = evidenceFor(root, { passed: ['lem-passed', 'ex-passed'] });
    const calls = [];
    const result = await runFocusedFailedChecks({ repo: root, evidence, runner: async (command, args, cwd) => {
      const index = args.indexOf('--items-file');
      calls.push({ command, args, cwd, selected: JSON.parse(readFileSync(args[index + 1], 'utf8')) });
      return { code: 0, stdout: JSON.stringify({ summary: { scope: 'focused-items' }, errors: [] }), stderr: '' };
    } });
    assert.deepEqual(calls.map(row => row.selected), [['lem-failed']]);
    assert.deepEqual(result.selected, ['lem-failed']);
    assert.deepEqual(result.retained_passes.depcheck, ['ex-passed', 'lem-passed']);
    assert.equal(result.checks.depcheck.selected.includes('lem-passed'), false);
    assert.equal(result.selected_items_clear, true);
    assert.equal(result.native_gate_pass, false);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('changed passed input blocks before execution and is never reported retained', async () => {
  const root = fixture();
  try {
    for (const id of ['lem-failed', 'lem-passed'])
      writeFileSync(join(root, 'items', `${id}.md`), `original ${id}\n`);
    const evidence = evidenceFor(root);
    writeFileSync(join(root, 'items', 'lem-passed.md'), 'changed after recorded pass\n');
    let called = false;
    const result = await runFocusedFailedChecks({ repo: root, evidence, runner: async (command, args) => {
      called = true;
      const index = args.indexOf('--items-file');
      assert.deepEqual(JSON.parse(readFileSync(args[index + 1], 'utf8')), ['lem-failed']);
      return { code: 0, stdout: JSON.stringify({ summary: {}, errors: [] }), stderr: '' };
    } });
    assert.equal(called, true);
    assert.deepEqual(result.invalidated_passes.depcheck.map(row => row.id), ['lem-passed']);
    assert.ok(!result.retained_passes.depcheck.includes('lem-passed'));
    assert.equal(result.native_gate_pass, false);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('incomplete historical output with no exact subject IDs does not launch a retry', async () => {
  const root = fixture();
  try {
    writeFileSync(join(root, 'items', 'lem-failed.md'), 'body\n');
    let called = false;
    const result = await runFocusedFailedChecks({ repo: root, evidence: {
      version: 1, run: 'legacy', gates: { precheck: { complete: false, failed_subjects: [] } },
    }, runner: async () => { called = true; } });
    assert.equal(called, false);
    assert.equal(result.native_gate_pass, false);
    assert.equal(result.historical_completeness.precheck, false);
    assert.match(result.blocked, /no exact failed item IDs/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('precheck JSON mode honors an explicit file scope', () => {
  const root = fixture();
  try {
    const file = join(root, 'fixture.md');
    writeFileSync(file, '---\nid: def-fixture\nkind: definition\n---\n## Statement\n\nNo phase body.\n');
    const run = spawnSync(process.execPath, ['tools/tsx-run.mjs', 'tools/precheck.mts', file, '--json'], {
      cwd: HERE.replace(/tools\/$/, ''), encoding: 'utf8',
    });
    assert.equal(run.status, 0, run.stderr);
    const result = JSON.parse(run.stdout);
    assert.equal(result.summary.files, 1);
    assert.equal(result.results.length, 1);
    assert.equal(result.results[0].status, 'not-applicable');
  } finally { rmSync(root, { recursive: true, force: true }); }
});
