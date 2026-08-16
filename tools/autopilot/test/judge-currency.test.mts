// One currency rule, two callers, and they used to disagree.
//
// WHY. A judge verdict is current when EITHER it was cast against the item's
// current frozen PAIR context, or against byte-identical text of THAT ITEM.
// Clause (b) is owner policy of 2026-08-06: repairing one item moves the whole
// pair's context hash, so under clause (a) alone every untouched sibling on the
// page reads as unjudged.
//
// `level-coverage.mjs` — the receipt gate — honoured both clauses.
// `judge-sweep.mjs` — the tool that decides which items to SPEND a call on —
// implemented only clause (a), so it re-judged every page-mate of every repair,
// work the gate already considered covered. The spend is the symptom; two
// readings of one rule is the defect, and a later change to either would
// silently not reach the other.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { verdictIsCurrent } from '../../judge-currency.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO: string = process.env.AUTOPILOT_TEST_REPO ?? resolve(HERE, '..', '..', '..');

const CTX = 'c'.repeat(64);
const ITEM = 'i'.repeat(64);
const current = { context: CTX, item: ITEM };

test('clause (a): a verdict cast against the current pair context is current', () => {
  assert.equal(verdictIsCurrent({ context_sha256: CTX, item_sha256: 'stale' }, current), true);
});

test('clause (b): a sibling repair moved the pair context, but this item is byte-identical', () => {
  assert.equal(verdictIsCurrent({ context_sha256: 'old-pair-hash', item_sha256: ITEM }, current), true,
    'this is the rejudge of every untouched page-mate that clause (b) exists to prevent');
});

test('a REPAIRED item is never current: its own item hash changed', () => {
  assert.equal(verdictIsCurrent({ context_sha256: 'old-pair-hash', item_sha256: 'was-repaired' }, current), false,
    'nothing that needs a fresh verdict may escape through the byte-identical clause');
});

test('a legacy row with no item hash falls back to the context hash, which is stricter', () => {
  assert.equal(verdictIsCurrent({ context_sha256: CTX }, current), true);
  assert.equal(verdictIsCurrent({ context_sha256: 'old' }, current), false);
});

test('null never matches undefined into a false pass', () => {
  assert.equal(verdictIsCurrent({ context_sha256: 'old' }, { context: CTX, item: null }), false);
  assert.equal(verdictIsCurrent({ context_sha256: 'old', item_sha256: undefined }, { context: CTX, item: null }), false);
  assert.equal(verdictIsCurrent(null, current), false);
  assert.equal(verdictIsCurrent({ context_sha256: CTX }, null as any), false);
});

test('both callers import the shared rule and neither reimplements it', () => {
  for (const tool of ['judge-sweep.mjs', 'level-coverage.mjs']) {
    const src = readFileSync(join(REPO, 'tools', tool), 'utf8');
    assert.match(src, /from ['"]\.\/judge-currency\.mjs['"]/, `${tool} does not import the shared rule`);
    assert.match(src, /verdictIsCurrent\(/, `${tool} does not use it`);
  }
  // and the sweep no longer compares context hashes by hand
  const sweep = readFileSync(join(REPO, 'tools', 'judge-sweep.mjs'), 'utf8');
  assert.doesNotMatch(sweep, /row\.context_sha256 === current\b/,
    'judge-sweep still spells clause (a) inline, which is how the two readings drifted');
});
