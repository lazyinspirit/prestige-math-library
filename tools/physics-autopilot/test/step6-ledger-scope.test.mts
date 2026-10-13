import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { stages } from '../stages/mathlib.mts';
import { freezeFrontier } from '../../physics-support/step5-rounds.mjs';

const tool = new URL('../../physics-support/defect-ledger.mjs', import.meta.url).pathname;
const run = 'terminal-test';
const frontierPath = `research/${run}-step5-v2/frontier.json`;
const row = (subject: string, extra = {}) => ({
  defect_id: `${run}-maintenance`, run, at: '2026-10-14', class: 'accuracy',
  subclass: 'false-claim', severity: 'fatal', location: 'proof-step', subject,
  caught_at_stage: '3a-adjudicate', caught_by_role: 'owner', disposition: 'open',
  evidence: [{ path: 'research/context.md', note: 'Independent local construction resolves the consumer; original maintenance remains OPEN.' }],
  ...extra,
});

function fixture(t: any, subject = 'thm-original', extra = {}, frozen = true) {
  const repo = mkdtempSync(join(tmpdir(), 'step6-ledger-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research', `${run}-step5-v2`), { recursive: true });
  mkdirSync(join(repo, 'items'));
  for (const [id, status] of [['thm-owned', 'draft'], ['thm-original', 'published']])
    writeFileSync(join(repo, 'items', `${id}.md`), `---\nid: ${id}\nstatus: ${status}\n---\n`);
  if (frozen) writeFileSync(join(repo, frontierPath), JSON.stringify(freezeFrontier({ run, batches: [{ id: '1', items: ['thm-owned'] }] })));
  writeFileSync(join(repo, 'research', `${run}-judge-adjudications.jsonl`), '');
  writeFileSync(join(repo, 'research', `${run}-judge-closure.json`), JSON.stringify({ open_fatal: [] }));
  writeFileSync(join(repo, 'research', 'defect-ledger.jsonl'), JSON.stringify(row(subject, extra)) + '\n');
  const rendered = spawnSync(process.execPath, [tool, 'render'], { cwd: repo, encoding: 'utf8' });
  assert.equal(rendered.status, 0, rendered.stderr);
  return { repo, run };
}
function ledger(ctx: any, id = '6-contract-close') {
  const stage: any = stages.find(s => s.id === id);
  return stage.gates(ctx).find((g: any) => g.id === 'defect-ledger');
}
function check(ctx: any, id = '6-contract-close') {
  const gate = ledger(ctx, id);
  return spawnSync(process.execPath, [tool, ...gate.argv.slice(2)], { cwd: ctx.repo, encoding: 'utf8' });
}

test('both terminal stage gates bind the frozen scope and preserve outside OPEN maintenance', t => {
  const ctx = fixture(t);
  const before = readFileSync(join(ctx.repo, 'research/defect-ledger.jsonl'), 'utf8');
  for (const id of ['6-contract-close', '6-readiness-v2']) {
    const gate = ledger(ctx, id);
    assert.ok(gate.argv.includes('--no-open'));
    assert.deepEqual(gate.argv.slice(-2), ['--frontier', frontierPath]);
    assert.deepEqual(gate.ownerReviewInputs, [frontierPath]);
    const result = check(ctx, id);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /outside findings excluded, not passed/);
    assert.match(result.stdout, /"subject":"thm-original".*"disposition":"open"/);
    assert.equal(readFileSync(join(ctx.repo, 'research/defect-ledger.jsonl'), 'utf8'), before);
  }
});

for (const [subject, extra, pattern] of [
  ['thm-owned', {}, /still open at the terminal stage/],
  ['thm-owned', { severity: 'nonfatal' }, /still open at the terminal stage/],
  ['thm-unknown', {}, /still open at the terminal stage/],
  ['page-context', {}, /still open at the terminal stage/],
  ['thm-original', { subclass: 'invalid-enum' }, /outside the closed enum/],
] as const) test(`terminal scope retains ${subject} obligations or structural errors ${JSON.stringify(extra)}`, t => {
  const ctx = fixture(t, subject, extra);
  const result = check(ctx);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, pattern);
});

test('a valid frozen frontier from another run fails closed', t => {
  const ctx = fixture(t);
  writeFileSync(join(ctx.repo, frontierPath), JSON.stringify(freezeFrontier({ run: 'wrong-run', batches: [{ id: '1', items: ['thm-owned'] }] })));
  const result = check(ctx);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /wrong run frontier/);
});

test('legacy terminal gates without a frozen frontier retain all-run no-open behavior', t => {
  const ctx = fixture(t, 'thm-original', {}, false);
  const gate = ledger(ctx);
  assert.ok(!gate.argv.includes('--frontier'));
  const result = check(ctx);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /still open at the terminal stage/);
});
