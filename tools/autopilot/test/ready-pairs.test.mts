import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readyPairUnits, sealedInventory, stages } from '../stages/mathlib.ready-pairs.mts';
import { loadStep3, recordStep3, scopeHash } from '../../step3-decisions.mjs';

test('ready-pair scheduling excludes insufficient and stale pairs, and freezes before authors', t => {
  const repo = mkdtempSync(join(tmpdir(), 'ready-pairs-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research')); mkdirSync(join(repo, 'items'));
  const put = (name: string, value: any) => writeFileSync(join(repo, 'research', name), JSON.stringify(value));
  const pairs = ['ready', 'held', 'stale'].map((id, i) => [
    { id, kind: 'A', companion: `${id}-examples`, category: 'algebra', order: 2 * i + 1,
      requires: [], items: [{ id: `def-${id}`, kind: 'definition', statement: id, deps: [] }] },
    { id: `${id}-examples`, kind: 'B', category: 'algebra', order: 2 * i + 2,
      requires: [id], items: [{ id: `ex-${id}`, kind: 'example', statement: id, deps: [] }] },
  ]);
  pairs.forEach((pair, i) => put(`r-batch-${i + 1}.pages.json`, pair));
  put('plan-spec.json', { pages: pairs.flat() });
  for (const page of ['ready', 'stale']) recordStep3(repo, {
    run: 'r', phase: 'scope', page, decision: 'sufficient', reason: 'fixture current scope',
  });
  recordStep3(repo, { run: 'r', phase: 'scope', page: 'held', decision: 'insufficient', reason: 'missing route' });
  pairs[2][0].items[0].statement = 'changed';
  put('r-batch-3.pages.json', pairs[2]);
  const ctx = { repo, run: 'r' }, snapshot = loadStep3(repo, 'r');
  const seal = { version: 1, run: 'r', authorized_by: 'owner', authorization: 'start ready pairs',
    scopes: [...snapshot.pairs.keys()].map(page => ({ page, sha256: scopeHash(snapshot, page) })) };
  put('r-ready-pair-authoring.json', seal);
  assert.deepEqual(readyPairUnits(ctx, ['ready', 'held', 'stale']), ['ready']);
  assert.equal(sealedInventory(ctx).pairs.size, 3);
  const author: any = stages.find(s => s.id === '3b-author');
  assert.deepEqual(author.plan(ctx, ['ready', 'held', 'stale']).map((p: any) => p.covers), [['ready']]);
  assert.deepEqual(author.cohort(), ['all'], 'the baseline unit must complete before any author');
  const baseline: any = stages.find(s => s.id === '3-baseline');
  assert.deepEqual(baseline.cohort(ctx), ['ready', 'held', 'stale']);
  assert.ok(stages.filter(s => ['3a-scope', '3-baseline', '3b-author'].includes(s.id))
    .every(s => s.pipeline === 'step3-ready-pairs'));
  assert.ok((stages.find(s => s.id === '3a-scope') as any).gates(ctx).some((g: any) => g.id === 'step3-scope'));
  recordStep3(repo, { run: 'r', phase: 'scope', page: 'held', decision: 'proceed', owner: true,
    reason: 'fixture repaired route for current claims' });
  assert.deepEqual(readyPairUnits(ctx, ['ready', 'held', 'stale']), ['ready', 'held']);
  pairs[1][0].items[0].statement = 'new claim';
  put('r-batch-2.pages.json', pairs[1]);
  assert.throws(() => sealedInventory(ctx), /inventory changed/);
  assert.deepEqual(readyPairUnits(ctx, ['held']), [], 'an old owner proceed cannot release changed claims');
  put('r-step3-auditor-baseline.json', { immutable: 'fixture' });
  assert.equal(baseline.plan(ctx, ['all'])[0].label, 'snap-pre-author',
    'doctor can inspect a completed boundary without resealing authored additions');
});
