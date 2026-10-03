import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { buildGroupBundle, citedClauses, interfaceText, section } from '../../physics-support/evidence-bundle.mjs';

const ITEM_A = `---
id: thm-a
title: "A theorem"
---

## Statement

Every widget is a gadget, and the converse holds over a field.

## Facts & Assumptions

[L1] Widgets are closed under retraction ([[def-b]]).

## Proof

1.1 Immediate. [L1]
`;

const DEF_B = `---
id: def-b
title: "Widget"
---

## Definition

A widget is a retract of a gadget.

## Remarks

Widgets are standard.
`;

const DEF_C = `---
id: def-c
title: "Gadget"
---

## Definition

A gadget is a widget in the opposite category.
`;

function fixture() {
  const repo = mkdtempSync(join(tmpdir(), 'evidence-bundle-'));
  mkdirSync(join(repo, 'items'), { recursive: true });
  mkdirSync(join(repo, 'research'), { recursive: true });
  writeFileSync(join(repo, 'items', 'thm-a.md'), ITEM_A);
  writeFileSync(join(repo, 'items', 'def-b.md'), DEF_B);
  writeFileSync(join(repo, 'items', 'def-c.md'), DEF_C);
  writeFileSync(join(repo, 'research', 'demo-batch-1.proof-contracts.json'), JSON.stringify({
    contracts: {
      'thm-a': {
        citations: [
          { fact: 'L2', source: 'def-c', source_section: 'Definition', quote: '' },
          { fact: 'L1', source: 'def-b', source_section: 'Definition', quote: 'A widget is a retract of a gadget.' },
        ],
      },
    },
  }));
  return repo;
}

test('the section and interface extractors keep the item text verbatim', () => {
  assert.match(section(ITEM_A, ['Statement']), /Every widget is a gadget/);
  assert.equal(section(ITEM_A, ['Nowhere']), '');
  const iface = interfaceText(DEF_B);
  assert.match(iface, /A widget is a retract of a gadget\./);
  assert.match(iface, /\*\*Remarks\.\*\*/);
  const long = interfaceText(`## Definition\n\n${'x'.repeat(4_000)}\n`, 3_000);
  assert.match(long, /interface truncated; do not infer absence from this cut/);
  assert.equal(long.length < 3_100, true);
});

test('contract clauses are ordered by fact label and keep their exact quotes', () => {
  const rows = citedClauses({ citations: [
    { fact: 'L10', source: 'def-z', source_section: 'Statement', quote: 'z' },
    { fact: 'L2', source: 'def-b', source_section: 'Definition', quote: 'b' },
  ] });
  assert.deepEqual(rows.map((row) => row.fact), ['L2', 'L10']);
  assert.equal(rows[0].quote, 'b');
});

test('a group bundle quotes the claim, the facts and every cited clause verbatim, grouped by item', () => {
  const repo = fixture();
  const bundle = buildGroupBundle({
    repo,
    run: 'demo',
    group: 'a',
    items: ['thm-a'],
    rejections: [
      { id: 'thm-a', model: 'gpt-6-sol', context_sha256: 'a'.repeat(64), reason: 'citation L1 is misattributed' },
      { id: 'thm-a', model: 'gpt-6-astra', context_sha256: 'b'.repeat(64), reason: 'the converse direction is unproved' },
    ],
  });
  // Verbatim evidence, never a summary.
  assert.match(bundle, /Every widget is a gadget, and the converse holds over a field\./);
  assert.match(bundle, /\[L1\] Widgets are closed under retraction/);
  assert.match(bundle, /A widget is a retract of a gadget\./);
  // Item-grouped queue: both judge lanes sit under one item heading.
  assert.match(bundle, /### `thm-a` — 2 rejection\(s\)/);
  assert.match(bundle, /citation L1 is misattributed/);
  assert.match(bundle, /the converse direction is unproved/);
  // A citation the contract left without a quote names the file to open.
  assert.match(bundle, /the contract records no quote for this citation — open `items\/def-c\.md`/);
  // The access guarantees the owner restated on 2026-09-20.
  assert.match(bundle, /web search/);
  assert.match(bundle, /entire\s+published library under `library\/`/);
  assert.match(bundle, /every item of this frontier under `items\/`/);
  assert.match(bundle, /entry point, never a fence/);
  // Deterministic bytes: identical inputs, identical bundle.
  const again = buildGroupBundle({
    repo, run: 'demo', group: 'a', items: ['thm-a'],
    rejections: [
      { id: 'thm-a', model: 'gpt-6-astra', context_sha256: 'b'.repeat(64), reason: 'the converse direction is unproved' },
      { id: 'thm-a', model: 'gpt-6-sol', context_sha256: 'a'.repeat(64), reason: 'citation L1 is misattributed' },
    ],
  });
  assert.equal(bundle, again);
});

test('bundle caps never drop a clause silently', () => {
  const repo = fixture();
  const bundle = buildGroupBundle({
    repo, run: 'demo', group: 'a', items: ['thm-a'], rejections: [], quoteCap: 5,
  });
  assert.match(bundle, /omitted by the bundle cap — open `items\/def-b\.md`/);
  assert.match(bundle, /claim section/);
});

test('a rejected item with no file on disk is named rather than skipped', () => {
  const repo = fixture();
  const bundle = buildGroupBundle({
    repo, run: 'demo', group: 'a', items: ['thm-missing'], rejections: [
      { id: 'thm-missing', model: 'gpt-6-sol', context_sha256: 'c'.repeat(64), reason: 'unknown' },
    ],
  });
  assert.match(bundle, /MISSING ITEM FILE/);
  assert.match(bundle, /items\/thm-missing\.md does not exist/);
});
