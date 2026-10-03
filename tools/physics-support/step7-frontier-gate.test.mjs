import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { projectFrontierGate, frontierGateBattery } from './step7-frontier-gate.mjs';
import { freezeFrontier } from './step7-rounds.mjs';

const frontier = freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ['thm-frontier'] }] });
const allIds = ['thm-frontier', 'thm-outside'];
const raw = (document, code = 1, stderr = '') => ({ stdout: JSON.stringify(document), stderr, code });
const project = (check, document, code = 1, stderr = '') => projectFrontierGate(check, raw(document, code, stderr), frontier, allIds);
const error = id => ({ id, code: 'citation-quote-mismatch', message: 'cites thm-frontier and thm-outside' });

test('outside-only findings are exclusions with full raw evidence, never math passes', () => {
  const document = { errors: [error('thm-outside')] };
  const result = project('proof-contract', document);
  assert.equal(result.code, 0);
  assert.equal(result.rawCode, 1);
  assert.equal(result.rawOutput, JSON.stringify(document));
  assert.deepEqual(JSON.parse(result.output).errors, []);
  assert.match(result.scopeWhy, /excluded, not passed/);
  assert.deepEqual(result.frontierScope.excluded[0].subjects, ['thm-outside']);
});
test('mixed findings retain exact frontier subjects and never cited suppliers', () => {
  const result = project('proof-contract', { errors: [error('thm-outside'), error('thm-frontier')] });
  assert.equal(result.code, 1);
  assert.deepEqual(JSON.parse(result.output).errors, [error('thm-frontier')]);
  assert.deepEqual(result.frontierScope.retained[0].subjects, ['thm-frontier']);
});
test('global, unknown-code, invalid-subject and runtime diagnostics fail closed', () => {
  for (const row of [{ code: 'contract-read', message: 'bad JSON' }, { ...error('thm-outside'), code: 'new-unknown-error' }, error('thm-missing'), null]) {
    const result = project('proof-contract', { errors: [row] });
    assert.equal(result.code, 1);
    assert.equal(result.frontierScope.global.length, 1);
  }
  for (const result of [
    project('proof-contract', { errors: [error('thm-outside')] }, 2),
    project('proof-contract', { errors: [error('thm-outside')] }, 1, 'TypeError: crash'),
    project('proof-contract', { errors: [] }),
    project('proof-contract', { errors: 'bad' }),
    project('proof-contract', { errors: [], error: 'crash' }, 0),
    projectFrontierGate('proof-contract', { stdout: '{', stderr: '', code: 1 }, frontier, allIds),
    projectFrontierGate('proof-contract', { stdout: '', stderr: '', code: null }, frontier, allIds),
  ]) { assert.notEqual(result.code, 0); assert.ok(result.frontierScope.global.length); }
});
test('file subjects exclude outside defects but cycles and page/global findings remain blocking', () => {
  const rows = [
    { code: 'dep-unresolved', msg: 'items/thm-outside.md: cites thm-frontier' },
    { code: 'dep-unresolved', msg: 'items/thm-frontier.md: cites thm-outside' },
    { code: 'item-cycle', msg: 'CIRCULAR: thm-outside -> thm-outside' },
    { code: 'page-item-missing', msg: 'library/page.md: thm-outside' },
  ];
  const result = project('depcheck', { errors: rows });
  assert.deepEqual(JSON.parse(result.output).errors, rows.slice(1));
  assert.equal(result.frontierScope.global.length, 2);
});
test('mixed template clusters retain the complete diagnostic with partitioned owners', () => {
  const cluster = { items: allIds, members: 2 };
  const result = project('boundary-audit', { contradicted: [], templates: [cluster] });
  assert.equal(result.code, 1);
  assert.deepEqual(JSON.parse(result.output).templates, [cluster]);
  assert.deepEqual(result.frontierScope.retained[0].subjects, ['thm-frontier']);
  assert.deepEqual(result.frontierScope.excluded[0].subjects, ['thm-outside']);
});
test('citation widening remains advisory and judge liveness counts only frontier pairs', () => {
  const citation = project('citation-fidelity', { quote_not_found: [], widening: [{ id: 'thm-frontier' }] }, 0);
  assert.equal(citation.code, 0);
  const judge = project('judge-closure', { errors: [], judge_coverage: [{ id: 'thm-outside' }] }, 0);
  assert.equal(JSON.parse(judge.output).frontier_judge_complete, 0);
});
test('battery binds native file arguments and projection to validated immutable frontier only', () => {
  const repo = mkdtempSync(join(tmpdir(), 'frontier-gate-'));
  try {
    mkdirSync(join(repo, 'research/demo-step7-v2'), { recursive: true });
    mkdirSync(join(repo, 'items'));
    const path = join(repo, 'research/demo-step7-v2/frontier.json');
    writeFileSync(path, JSON.stringify(frontier));
    for (const id of allIds) writeFileSync(join(repo, 'items', `${id}.md`), 'fixture');
    const original = ['precheck', 'rendercheck', 'prosecheck', 'proof-contract', 'pathcheck'].map(id => ({ id, argv: ['node', `tools/physics-support/${id}.mjs`] }));
    const gates = frontierGateBattery({ repo, run: 'demo' }, original);
    for (const gate of gates.slice(0, 3)) {
      assert.deepEqual(gate.argv.slice(-1), ['items/thm-frontier.md']);
      assert.deepEqual(gate.needs, ['items/thm-frontier.md']);
    }
    assert.equal(gates[3].argv.at(-1), '--json');
    assert.equal(typeof gates[3].projectResult, 'function');
    assert.equal(gates[4], original[4]);
    writeFileSync(path, JSON.stringify({ ...frontier, ids: allIds }));
    assert.throws(() => frontierGateBattery({ repo, run: 'demo' }, original), /original frontier changed/);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('scoped defect ledger excludes outside fatals but retains frontier and global failures', () => {
  const repo = mkdtempSync(join(tmpdir(), 'frontier-ledger-'));
  const tool = fileURLToPath(new URL('./defect-ledger.mjs', import.meta.url));
  try {
    mkdirSync(join(repo, 'research/demo-step7-v2'), { recursive: true });
    mkdirSync(join(repo, 'items'));
    writeFileSync(join(repo, 'research/demo-step7-v2/frontier.json'), JSON.stringify(frontier));
    for (const id of allIds) writeFileSync(join(repo, 'items', `${id}.md`), 'fixture');
    writeFileSync(join(repo, 'research/defect-ledger.jsonl'), '');
    const adj = join(repo, 'adj.jsonl');
    writeFileSync(adj, JSON.stringify({ id: 'thm-outside', outcome: 'confirmed_fatal' }));
    const run = args => spawnSync(process.execPath, [tool, ...args], { cwd: repo, encoding: 'utf8' });
    assert.equal(run(['render']).status, 0);
    const args = ['check', '--run', 'demo', '--adjudications', adj, '--frontier', 'research/demo-step7-v2/frontier.json'];
    const outside = run(args);
    assert.equal(outside.status, 0, outside.stderr);
    assert.match(outside.stdout, /outside findings excluded, not passed/);
    writeFileSync(adj, JSON.stringify({ id: 'thm-frontier', outcome: 'confirmed_fatal' }));
    const inside = run(args);
    assert.equal(inside.status, 1);
    assert.match(inside.stderr, /never recorded/);
    writeFileSync(adj, '{');
    const broken = run(args);
    assert.equal(broken.status, 1);
    assert.match(broken.stderr, /unparseable adjudication/);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});
