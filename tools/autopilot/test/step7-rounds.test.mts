import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  freezeFrontier, validateFrontier, discoverDownstream, partitionImpacts,
  assessFatalThreshold, certifyRound, readLibraryItems, loadRoundState, saveRoundState,
} from '../../step7-rounds.mjs';

const hash = 'a'.repeat(64);
function frontier(count = 100) {
  return freezeFrontier({ run: 'fixture', batches: [{ id: '1', items: Array.from({ length: count }, (_, i) => `item-${i}`) }] });
}
function decisions(count: number, round = 1) {
  return Array.from({ length: count }, (_, i) => ({ run: 'fixture', round, id: `item-${i}`, decision: 'confirmed-fatal', resolved: true, basis: 'The asserted implication fails; repaired the missing hypothesis.', item_sha256: hash }));
}

test('fatal threshold uses unique latest decisions and strictly less than five percent of frozen original frontier', () => {
  const scope = frontier();
  const five = decisions(5);
  const args = { frontier: scope, round: 1, expectedIds: five.map((r) => r.id), decisions: five };
  assert.equal(assessFatalThreshold(args).belowThreshold, false);
  const rows = [...five, { ...five[4], decision: 'rejected-finding' }];
  const result = assessFatalThreshold({ ...args, decisions: rows });
  assert.equal(result.fatalCount, 4);
  assert.equal(result.originalCount, 100);
  assert.equal(result.belowThreshold, true);
  assert.equal(assessFatalThreshold({ frontier: frontier(20), round: 1, expectedIds: ['item-0'], decisions: decisions(1) }).belowThreshold, false);
  assert.equal(assessFatalThreshold({ frontier: frontier(21), round: 1, expectedIds: ['item-0'], decisions: decisions(1) }).belowThreshold, true);
});

test('missing, wrong-round, uncertain, unresolved, and unbound decisions never pass threshold', () => {
  const row = decisions(1)[0];
  const args = { frontier: frontier(), round: 1, expectedIds: [row.id] };
  for (const rows of [[], [{ ...row, round: 0 }], [{ ...row, run: 'other' }], [{ ...row, decision: 'uncertain' }], [{ ...row, resolved: false }], [{ ...row, item_sha256: '' }], [{ ...row, basis: '' }]]) {
    const result = assessFatalThreshold({ ...args, decisions: rows });
    assert.equal(result.belowThreshold, false);
    assert.ok(result.errors.length);
  }
  assert.equal(assessFatalThreshold({ ...args, decisions: [row, { ...row, id: 'unexpected' }] }).belowThreshold, false);
});

test('downstream discovery includes off-frontier published transitive consumers, aliases, and cycles', () => {
  const items = [
    { id: 'root', deps: [], aliases: ['old-root'] },
    { id: 'middle', deps: ['old-root'], published: true },
    { id: 'leaf', deps: ['middle', 'cycle'], published: true },
    { id: 'cycle', deps: ['leaf'] },
    { id: 'unrelated', deps: [] },
  ];
  const impacts = discoverDownstream({ items, repairedIds: ['root'] });
  assert.deepEqual(impacts.map((r: any) => r.id), ['cycle', 'leaf', 'middle']);
  assert.deepEqual(impacts.find((r: any) => r.id === 'leaf').paths, [['root', 'middle', 'leaf']]);
  assert.equal(impacts.find((r: any) => r.id === 'middle').published, true);
  assert.throws(() => discoverDownstream({ items, repairedIds: ['missing'] }), /missing/);
  const lanes = partitionImpacts(impacts.map((r: any) => r.id), 3, items);
  assert.equal(lanes.length, 3);
  assert.ok(lanes.some((lane: string[]) => lane.length === 3));
  assert.equal(new Set(lanes.flat()).size, 3);
});

test('canonical ids beat aliases and every repaired supplier retains its impact path', () => {
  const items = [
    { id: 'first', deps: [], aliases: ['second'] },
    { id: 'second', deps: [] },
    { id: 'consumer', deps: ['first', 'second'] },
    { id: 'leaf', deps: ['consumer'], published: true },
  ];
  const impacts = discoverDownstream({ items, repairedIds: ['first', 'second'] });
  assert.deepEqual(impacts.find((r: any) => r.id === 'leaf').suppliers, ['first', 'second']);
  assert.deepEqual(impacts.find((r: any) => r.id === 'leaf').paths, [['first', 'consumer', 'leaf'], ['second', 'consumer', 'leaf']]);
  const onlySecond = discoverDownstream({ items, repairedIds: ['second'] });
  assert.deepEqual(onlySecond.map((r: any) => r.id), ['consumer', 'leaf']);
});

test('certification waits for all writers, exact current-round coverage, and stable whole-library hashes', () => {
  const args = { run: 'fixture', round: 1, phase: '7.7', expectedIds: ['item'], activeWriters: [], beforeHashes: { item: hash, unrelated: hash }, afterHashes: { item: hash, unrelated: hash }, receipts: [{ run: 'fixture', round: 1, phase: '7.7', id: 'item', item_sha256: hash, resolved: true, basis: 'Validated repaired proof and dependency contracts.' }] };
  assert.equal(certifyRound(args).ids.length, 1);
  assert.throws(() => certifyRound({ ...args, activeWriters: ['owner-1'] }), /writers/);
  assert.throws(() => certifyRound({ ...args, receipts: [{ ...args.receipts[0], round: 0 }] }), /missing or stale/);
  assert.throws(() => certifyRound({ ...args, receipts: [] }), /missing or stale/);
  assert.throws(() => certifyRound({ ...args, afterHashes: { ...args.afterHashes, item: 'b'.repeat(64) } }), /changed item/);
  assert.throws(() => certifyRound({ ...args, afterHashes: { ...args.afterHashes, unrelated: 'b'.repeat(64) } }), /library changed/);
});

test('durable state preserves frozen frontier and detects concurrent or stale writes across restart', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step7-rounds-'));
  try {
    const path = join(dir, 'state.json');
    const state = saveRoundState(path, { frontier: frontier(), round: 0 });
    assert.equal(state.revision, 0);
    assert.deepEqual(loadRoundState(path), state);
    const next = saveRoundState(path, { ...state, round: 1 }, 0);
    assert.equal(next.revision, 1);
    assert.throws(() => saveRoundState(path, state, 0), /revision conflict/);
    assert.throws(() => saveRoundState(path, { ...next, frontier: frontier(99) }, 1), /frozen/);
    assert.throws(() => validateFrontier({ ...frontier(), ids: ['item-0'] }), /changed/);
    assert.equal(loadRoundState(path).round, 1);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('library reader separates declared dependencies from reference candidates', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step7-library-'));
  try {
    mkdirSync(join(dir, 'items'));
    writeFileSync(join(dir, 'items', 'item.md'), '---\nid: item\nstatus: published\ndeps: [supplier]\njustified_by: [contract]\nforward_refs: [forward]\nexternal_refs: [orientation]\n---\nUses [[body-supplier|result]].\n');
    const [item] = readLibraryItems(dir);
    assert.equal(item.published, true);
    assert.deepEqual(item.deps, ['contract', 'forward', 'supplier']);
    assert.deepEqual(item.references, ['body-supplier', 'orientation']);
    assert.deepEqual(item.body_links, ['body-supplier']);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('reference edges require examination but do not transitively flood explanatory cycles', () => {
  const items = [
    {id:'root',deps:[],aliases:['old-root']},
    {id:'actual',deps:['old-root']},
    {id:'leaf',deps:['actual']},
    {id:'remark',deps:[],references:['old-root','definition']},
    {id:'definition',deps:[],references:['remark']},
    {id:'library',deps:['definition']},
    {id:'leaf-reference',deps:[],references:['leaf']},
    {id:'reference-user',deps:['remark']},
  ];
  assert.deepEqual(discoverDownstream({items,repairedIds:['root']}).map((r:any)=>r.id),
    ['actual','leaf','leaf-reference','remark']);
  // A repaired reference consumer becomes a genuine new propagation seed.
  assert.deepEqual(discoverDownstream({items,repairedIds:['remark']}).map((r:any)=>r.id),
    ['definition','reference-user']);
  // Promoting an actual proof use to a declared edge also propagates it.
  items[3].deps=['old-root'];
  assert.ok(discoverDownstream({items,repairedIds:['root']}).some((r:any)=>r.id==='reference-user'));
});
