// citation-fidelity must read the WHOLE Facts block, and must not silently
// drop a missing quote because its first sentence is short.
//
// WHY. The Facts-block regex ended its lazy match at `\Z` — which is not a
// JavaScript anchor but the literal character Z, so the block was truncated at
// the first `Z` in the text, and `$\mathbb{Z}$` saturates this corpus: 35 of
// frontier-14's 291 contract items lost 108 fact lines to it, unseen by the
// widening detectors built against the library's largest confirmed-fatal
// class. Separately, a quote absent from its cited item was reported only when
// its first sentence exceeded 25 characters — a short absent quote was
// dropped without a trace.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const fixture = () => {
  const dir = mkdtempSync(join(tmpdir(), 'cf-'));
  const items = join(dir, 'items');
  const contracts = join(dir, 'contracts.json');
  writeFileSync(join(dir, 'mk'), '');
  spawnSync('mkdir', ['-p', items]);
  writeFileSync(join(items, 'def-source.md'), [
    '---', 'id: def-source', '---', '## Statement',
    'For every integer $n \\ge 1$ the Gram matrix detects independence.',
    'Another clause entirely.',
  ].join('\n'));
  writeFileSync(join(items, 'thm-consumer.md'), [
    '---', 'id: thm-consumer', '---', '## Facts',
    '[L1] A first fact line. ([[def-source]])',
    'The ring $\\mathbb{Z}$ of integers appears mid-block.',
    '[L2] for every integer $n$, the Gram matrix detects independence. ([[def-source]])',
    '[L3] a short quote that is not in the source. ([[def-source]])',
    '## Proof', 'Steps.',
  ].join('\n'));
  writeFileSync(contracts, JSON.stringify({
    contracts: {
      'thm-consumer': {
        citations: [
          { fact: 'L2', source: 'def-source',
            quote: 'For every integer $n \\ge 1$ the Gram matrix detects independence.' },
          { fact: 'L3', source: 'def-source', quote: 'Then $r > 0$.' },
        ],
      },
    },
  }));
  return { items, contracts };
};

test('a fact line after a Z in the Facts block is still seen by the widening detectors', () => {
  const { items, contracts } = fixture();
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'citation-fidelity.mjs'), contracts, '--items-dir', items, '--json'],
    { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  const out = JSON.parse(r.stdout);
  assert.ok(out.widening.some((w: any) => w.fact === 'L2'),
    'the bound-dropping fact line sits after a Z and was never parsed');
});

test('a missing quote with a short first sentence is reported, not dropped', () => {
  const { items, contracts } = fixture();
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'citation-fidelity.mjs'), contracts, '--items-dir', items, '--json'],
    { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  const out = JSON.parse(r.stdout);
  assert.ok(out.quote_not_found.some((q: any) => q.fact === 'L3'),
    'a wholly absent quote must be reported whatever its length');
});
