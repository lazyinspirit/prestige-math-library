import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { projectFrontierGate, frontierGateBattery } from './step5-frontier-gate.mjs';
import { freezeFrontier } from './step5-rounds.mjs';
import { PREFIXES } from './physics-content.mjs';

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
  const repo = mkdtempSync(join(process.env.STEP5_FRONTIER_TEST_ROOT ?? tmpdir(), 'frontier-gate-'));
  try {
    mkdirSync(join(repo, 'research/demo-step5-v2'), { recursive: true });
    mkdirSync(join(repo, 'items'));
    const path = join(repo, 'research/demo-step5-v2/frontier.json');
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
    assert.deepEqual(gates[4], { ...original[4], ownerReviewItems: frontier.ids, ownerReviewInputs: [path] });
    assert.equal(gates[4].argv, original[4].argv);
    writeFileSync(path, JSON.stringify({ ...frontier, ids: allIds }));
    assert.throws(() => frontierGateBattery({ repo, run: 'demo' }, original), /original frontier changed/);
  } finally { rmSync(repo, { recursive: true, force: true }); }
});

test('scoped defect ledger excludes outside fatals but retains frontier and global failures', () => {
  const repo = mkdtempSync(join(process.env.STEP5_FRONTIER_TEST_ROOT ?? tmpdir(), 'frontier-ledger-'));
  const tool = fileURLToPath(new URL('./defect-ledger.mjs', import.meta.url));
  try {
    mkdirSync(join(repo, 'research/demo-step5-v2'), { recursive: true });
    mkdirSync(join(repo, 'items'));
    writeFileSync(join(repo, 'research/demo-step5-v2/frontier.json'), JSON.stringify(frontier));
    for (const id of allIds) writeFileSync(join(repo, 'items', `${id}.md`), 'fixture');
    writeFileSync(join(repo, 'research/defect-ledger.jsonl'), '');
    const adj = join(repo, 'adj.jsonl');
    writeFileSync(adj, JSON.stringify({ id: 'thm-outside', outcome: 'confirmed_fatal' }));
    const run = args => spawnSync(process.execPath, [tool, ...args], { cwd: repo, encoding: 'utf8' });
    assert.equal(run(['render']).status, 0);
    const args = ['check', '--run', 'demo', '--adjudications', adj, '--frontier', 'research/demo-step5-v2/frontier.json'];
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

function batteryFixture(t, ids, statuses = {}) {
  const repo = mkdtempSync(join(process.env.STEP5_FRONTIER_TEST_ROOT ?? tmpdir(), 'frontier-open-problem-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const path = join(repo, 'research/demo-step5-v2/frontier.json');
  mkdirSync(join(repo, 'research/demo-step5-v2'), { recursive: true });
  mkdirSync(join(repo, 'items'));
  const frozen = freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ids }] });
  writeFileSync(path, JSON.stringify(frozen));
  for (const id of ids) writeFileSync(join(repo, 'items', id + '.md'), `---\nid: ${id}\nstatus: ${statuses[id] ?? 'draft'}\n---\n`);
  return { repo, path, frozen, battery: gates => frontierGateBattery({ repo, run: 'demo' }, gates) };
}
test('every schema item prefix, including open problems, retains exact frozen frontier scope', t => {
  const ids = Object.values(PREFIXES).map(prefix => prefix + '-valid');
  const f = batteryFixture(t, ids);
  const [gate] = f.battery([{ id: 'precheck', argv: ['node', 'precheck.mts'] }]);
  assert.deepEqual(gate.ownerReviewItems, f.frozen.ids);
  assert.deepEqual(gate.argv.slice(2), f.frozen.ids.map(id => 'items/' + id + '.md'));
  assert.ok(gate.ownerReviewItems.includes('op-valid'));
});
test('open-problem subjects remain blocking when owned and excluded with raw evidence only when outside', () => {
  const f = freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ['op-owned'] }] });
  const ids = ['op-owned', 'op-outside'];
  for (const [check, make] of [
    ['risk-report', id => ({ id, code: 'item-missing', message: 'Actual owned formulation is missing.' })],
    ['depcheck', id => ({ code: 'dep-unresolved', msg: 'items/' + id + '.md: unresolved formulation dependency' })],
  ]) {
    const outside = raw({ errors: [make('op-outside')] });
    const excluded = projectFrontierGate(check, outside, f, ids);
    assert.equal(excluded.code, 0); assert.equal(excluded.rawCode, 1);
    assert.equal(excluded.rawOutput, outside.stdout);
    assert.deepEqual(excluded.frontierScope.excluded[0].subjects, ['op-outside']);
    const owned = projectFrontierGate(check, raw({ errors: [make('op-owned')] }), f, ids);
    assert.equal(owned.code, 1);
    assert.deepEqual(owned.frontierScope.retained[0].subjects, ['op-owned']);
  }
});
test('missing, malformed and unknown open-problem diagnostic subjects remain global blockers', () => {
  const f = freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ['op-owned'] }] });
  for (const id of ['op-missing', 'op-invalid_underscore', 'unknown-outside', 'OP-uppercase', 'op-trailing-']) {
    const result = projectFrontierGate('risk-report', raw({ errors: [{ id, code: 'item-missing' }] }), f, ['op-owned', 'op-invalid_underscore', 'unknown-outside', 'OP-uppercase', 'op-trailing-']);
    assert.equal(result.code, 1); assert.equal(result.frontierScope.global.length, 1);
  }
});
test('open-problem support does not accept unknown or malformed frozen frontier IDs', t => {
  for (const id of ['unknown-item', 'OP-uppercase', 'op-invalid_underscore', 'op-trailing-']) {
    const f = batteryFixture(t, [id]);
    assert.throws(() => f.battery([{ id: 'precheck', argv: ['node', 'precheck.mts'] }]), /invalid current Step 5 frontier/);
  }
});
test('open-problem frontier still enforces frozen hash and run identity', t => {
  const f = batteryFixture(t, ['op-valid']);
  writeFileSync(f.path, JSON.stringify({ ...f.frozen, ids: [] }));
  assert.throws(() => f.battery([]), /original frontier changed/);
  writeFileSync(f.path, JSON.stringify(freezeFrontier({ run: 'another-run', batches: [{ id: '1', items: ['op-valid'] }] })));
  assert.throws(() => f.battery([]), /invalid current Step 5 frontier/);
});
test('published maintenance filtering retains original inventory and open-problem draft selection', t => {
  const published = ['pthm-local-repair', 'cex-local-repair', 'thm-local-repair'];
  const f = batteryFixture(t, ['op-owned', 'thm-owned', ...published], Object.fromEntries(published.map(id => [id, 'published'])));
  const original = JSON.stringify(f.frozen);
  const [gate] = f.battery([{ id: 'precheck', argv: ['node', 'precheck.mts'] }]);
  assert.deepEqual(gate.ownerReviewItems, ['op-owned', 'thm-owned']);
  assert.deepEqual(gate.argv.slice(2), ['items/op-owned.md', 'items/thm-owned.md']);
  assert.equal(JSON.stringify(f.frozen), original);
});
test('current-manifest native wrappers retain exact arguments with an open-problem frontier', t => {
  const f = batteryFixture(t, ['op-owned']);
  for (const id of ['precheck', 'rendercheck', 'prosecheck']) {
    const argv = ['node', 'tools/physics-support/frontier-item-gate.mjs', '--run', 'demo', '--tool', id, '--'];
    const [gate] = f.battery([{ id, argv }]);
    assert.deepEqual(gate.argv, argv); assert.equal(gate.ownerReviewItems, undefined);
    assert.deepEqual(gate.ownerReviewInputs, [f.path]);
  }
});

test('open-problem recognition cannot turn a retained finding or unknown code into success', () => {
  const f = freezeFrontier({ run: 'demo', batches: [{ id: '1', items: ['op-owned'] }] });
  const owned = projectFrontierGate('risk-report', raw({ errors: [{ id: 'op-owned', code: 'item-missing' }] }, 0), f, ['op-owned', 'op-outside']);
  assert.equal(owned.code, 1); assert.match(owned.scopeError, /exit disagrees/);
  const unknown = projectFrontierGate('risk-report', raw({ errors: [{ id: 'op-outside', code: 'unknown-code' }] }), f, ['op-owned', 'op-outside']);
  assert.equal(unknown.code, 1); assert.equal(unknown.frontierScope.global.length, 1);
});
