import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { dispatchScaffoldRepairs, scaffoldRepairFingerprint } from '../stages/step1-repairs.mts';

function fixture() {
  const repo = mkdtempSync(join(tmpdir(), 'step1-repair-'));
  mkdirSync(join(repo, 'research'));
  writeFileSync(join(repo, 'research/demo-batch-1.pages.json'), JSON.stringify([
    { id: 'page-one', kind: 'A', items: [{ id: 'thm-one', deps: [] }] },
  ]));
  return { repo, run: 'demo' };
}

test('exhausted primary does not consume the assignment of a live advisory', () => {
  const ctx = fixture();
  try {
    const calls: any[] = [];
    const started = dispatchScaffoldRepairs({ ctx, stage: { id: '1-scaffold' }, round: 9,
      executor: { start: (_s: any, p: any) => calls.push(p) },
      failure: { id: 'coverage-1', liveItems: [], exhaustedItems: ['page-one'], advisory: [
        { id: 'content-policy-scaffold', liveItems: ['thm-one'], exhaustedItems: ['thm-other'], output: 'all diagnostics' },
        { id: 'foreign-gate', stage: '3b-audit', liveItems: ['thm-foreign'] },
      ] } });
    assert.equal(started, true);
    assert.equal(calls.length, 1);
    const packet = JSON.parse(readFileSync(join(ctx.repo, 'research/demo-scaffold-repair-9.json'), 'utf8'));
    assert.deepEqual(packet.failures.map((x: any) => x.id), ['content-policy-scaffold']);
    assert.deepEqual(packet.failures[0].liveItems, ['thm-one']);
    assert.deepEqual(packet.exhausted, [
      { gate: 'coverage-1', items: ['page-one'] },
      { gate: 'content-policy-scaffold', items: ['thm-other'] },
    ]);
  } finally { rmSync(ctx.repo, { recursive: true, force: true }); }
});

test('all exhausted findings launch no writer', () => {
  const ctx = fixture();
  try {
    assert.equal(dispatchScaffoldRepairs({ ctx, stage: { id: '1-scaffold' }, round: 4,
      executor: { start: () => assert.fail('unexpected writer') },
      failure: { id: 'coverage-1', liveItems: [], exhaustedItems: ['page-one'] } }), false);
  } finally { rmSync(ctx.repo, { recursive: true, force: true }); }
});

test('fingerprint ignores recovery churn but detects proof, source, and design changes', () => {
  const ctx = fixture();
  try {
    const path = join(ctx.repo, 'research/demo-batch-1.coverage.json');
    const coverage: any = { pages: [{ sources: [{ url: 'https://example.org/book.pdf',
      contents: [{ name: 'A theorem', disposition: 'included', item: 'thm-one' }],
      recovery_attempts: [{ at: 'first', outcome: 'timeout' }] }] }], checks: { time: 'first' } };
    writeFileSync(path, JSON.stringify(coverage));
    const before = scaffoldRepairFingerprint(ctx);
    coverage.checks.time = 'later';
    coverage.pages[0].sources[0].recovery_attempts.push({ at: 'later', outcome: 'timeout' });
    writeFileSync(path, JSON.stringify(coverage));
    writeFileSync(join(ctx.repo, 'research/demo-scaffold-repair-1.notes.md'), 'still blocked');
    assert.equal(scaffoldRepairFingerprint(ctx), before);
    coverage.pages[0].sources[0].fetch_verified = { sha256_16: 'genuine-content-hash', at: 'now' };
    writeFileSync(path, JSON.stringify(coverage));
    const fetched = scaffoldRepairFingerprint(ctx);
    assert.notEqual(fetched, before);
    writeFileSync(join(ctx.repo, 'research/plan-category.md'), 'A new prerequisite proof');
    const designed = scaffoldRepairFingerprint(ctx);
    assert.notEqual(designed, fetched);
    writeFileSync(join(ctx.repo, 'research/demo-batch-1.pages.json'), '[{"id":"page-one","items":[{"id":"thm-one","deps":["lem-new"]}]}]');
    assert.notEqual(scaffoldRepairFingerprint(ctx), designed);
  } finally { rmSync(ctx.repo, { recursive: true, force: true }); }
});

test('shared repair authority preserves build scope and independent review', () => {
  const brief = readFileSync(new URL('../../../briefs/beta-scaffold-reconcile.md', import.meta.url), 'utf8');
  assert.match(brief, /canonical\nplan/);
  assert.match(brief, /published-consumer-supplier-ledger\.md/);
  assert.match(brief, /Do not edit items\//);
  assert.match(brief, /Preserve every selected pair and batch identity/);
  assert.match(brief, /Step 3 independently/);
  assert.match(brief, /Do not stop|does not excuse stopping/);
});
