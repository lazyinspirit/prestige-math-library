#!/usr/bin/env node
// wave5-topology-countability.apply-retag.mjs — A4 bulk pure-retag pass for the
// wave-5 `topology-countability` batch, applying research/audit/wave5-A3.md §9:
//
//   * write provenance.statement / provenance.proof from the batch ledger;
//   * write generation.role on the `trivial`-class ai-generated items;
//   * add every ledger evidence URL that is not already reader-visible in
//     sources.references (§5a, extended to the batch on §5c's approved
//     principle — see the findings file).
//
// Frontmatter is edited as TEXT, never re-serialized: 38 of the 73 items carry a
// flow-style `sources:` line and 35 a block-style one, and a YAML round-trip
// would rewrite every field of every item for a two-line addition.
//
// Idempotent: an item that already carries `provenance:` is left alone, and a
// URL already present is not duplicated.

import { readFileSync, writeFileSync } from 'node:fs';

const LEDGER = 'research/audit/wave5-topology-countability.provenance.jsonl';
const MANIFEST = 'research/audit/wave5-topology-countability.pages.json';

// Titles: the most common title already paired with this URL elsewhere in the
// corpus, so the same source reads the same way on every page. The six URLs new
// to the corpus take the dominant `X (Wikipedia)` convention.
const TITLES = {
  'https://en.wikipedia.org/wiki/Alexandroff_extension': 'Alexandroff extension (Wikipedia)',
  'https://en.wikipedia.org/wiki/Ball_(mathematics)': 'Ball (mathematics) (Wikipedia)',
  'https://en.wikipedia.org/wiki/Cantor_cube': 'Cantor cube (Wikipedia)',
  'https://en.wikipedia.org/wiki/Cardinal_function': 'Cardinal function (Wikipedia)',
  'https://en.wikipedia.org/wiki/Connected_space': 'Connected space (Wikipedia)',
  'https://en.wikipedia.org/wiki/Convex_set': 'Convex set',
  'https://en.wikipedia.org/wiki/Countable_chain_condition': 'Countable chain condition (Wikipedia)',
  'https://en.wikipedia.org/wiki/Countable_set': 'Countable set (Wikipedia)',
  'https://en.wikipedia.org/wiki/Deformation_retract': 'Deformation retract',
  'https://en.wikipedia.org/wiki/Delta-system_lemma': 'Delta-system lemma (Wikipedia)',
  'https://en.wikipedia.org/wiki/Euclidean_space': 'Euclidean space (Wikipedia)',
  'https://en.wikipedia.org/wiki/Extreme_value_theorem': 'Extreme value theorem (Wikipedia)',
  'https://en.wikipedia.org/wiki/First-countable_space': 'First-countable space (Wikipedia)',
  'https://en.wikipedia.org/wiki/First_uncountable_ordinal': 'First uncountable ordinal (Wikipedia)',
  'https://en.wikipedia.org/wiki/Fort_space': 'Fort space (Wikipedia)',
  'https://en.wikipedia.org/wiki/General_linear_group': 'General linear group',
  'https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem': 'Heine-Borel theorem (Wikipedia)',
  'https://en.wikipedia.org/wiki/Invariance_of_domain': 'Invariance of domain (Wikipedia)',
  'https://en.wikipedia.org/wiki/Locally_compact_space': 'Locally compact space (Wikipedia)',
  'https://en.wikipedia.org/wiki/Locally_connected_space': 'Locally connected space (Wikipedia)',
  'https://en.wikipedia.org/wiki/Lower_limit_topology': 'Lower limit topology (Wikipedia)',
  'https://en.wikipedia.org/wiki/Norm_(mathematics)': 'Norm (mathematics) (Wikipedia)',
  'https://en.wikipedia.org/wiki/Order_topology': 'Order topology (Wikipedia)',
  'https://en.wikipedia.org/wiki/Particular_point_topology': 'Particular point topology (Wikipedia)',
  'https://en.wikipedia.org/wiki/Pasting_lemma': 'Pasting lemma (Wikipedia)',
  'https://en.wikipedia.org/wiki/Path-connected_space': 'Path-connected space',
  'https://en.wikipedia.org/wiki/Polygonal_chain': 'Polygonal chain',
  'https://en.wikipedia.org/wiki/Product_topology': 'Product topology (Wikipedia)',
  'https://en.wikipedia.org/wiki/Pseudocompact_space': 'Pseudocompact space',
  'https://en.wikipedia.org/wiki/Second-countable_space': 'Second-countable space (Wikipedia)',
  'https://en.wikipedia.org/wiki/Separable_space': 'Separable space (Wikipedia)',
  'https://en.wikipedia.org/wiki/Sequentially_compact_space': 'Sequentially compact space (Wikipedia)',
  'https://en.wikipedia.org/wiki/Sigma-compact_space': 'Sigma-compact space',
  'https://en.wikipedia.org/wiki/Sorgenfrey_plane': 'Sorgenfrey plane (Wikipedia)',
  'https://en.wikipedia.org/wiki/Sphere': 'Sphere',
  'https://en.wikipedia.org/wiki/Sunflower_lemma': 'Sunflower lemma (Wikipedia)',
  'https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf': 'UCR General Topology Notes',
  'https://ncatlab.org/nlab/show/second-countable%2Bspaces%2Bare%2BLindel%C3%B6f': 'nLab: second-countable spaces are Lindelöf',
  'https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf': 'D. H. Fremlin, Measure Theory, Chapter 5A',
};

const ROLE = { example: 'example', counterexample: 'counterexample', corollary: 'direct-corollary' };

const rows = new Map();
for (const line of readFileSync(LEDGER, 'utf8').split('\n')) {
  if (!line.trim()) continue;
  const row = JSON.parse(line);
  rows.set(row.id, row);
}
const scope = JSON.parse(readFileSync(MANIFEST, 'utf8')).flatMap((p) => p.items.map((i) => i.id));

const report = [];
for (const id of scope) {
  const row = rows.get(id);
  if (!row) throw new Error(`no ledger row for ${id}`);
  const file = `items/${id}.md`;
  const text = readFileSync(file, 'utf8');
  const m = /^(---\n)([\s\S]*?\n)(---\n)([\s\S]*)$/.exec(text);
  if (!m) throw new Error(`no frontmatter in ${file}`);
  let fm = m[2];
  const body = m[4];
  const changes = [];

  // 1. provenance, immediately after `origin:` — the SCHEMA §3 field order.
  if (!/^provenance:/m.test(fm)) {
    const block = `provenance:\n  statement: ${row.statement}\n  proof: ${row.proof}\n`;
    if (!/^origin:.*\n/m.test(fm)) throw new Error(`no origin: line in ${file}`);
    fm = fm.replace(/^(origin:.*\n)/m, `$1${block}`);
    changes.push(`provenance ${row.statement}/${row.proof}`);
  }

  // 2. generation.role, only for an ai-generated statement (content-policy
  //    errors on a generation block over any other statement label).
  if (row.statement === 'ai-generated' && !/^generation:/m.test(fm)) {
    const kind = /^kind:\s*(\S+)/m.exec(fm)?.[1];
    const role = ROLE[kind];
    if (!role) throw new Error(`no generation.role for kind ${kind} (${id})`);
    fm = fm.replace(/^(provenance:\n(?:  \S.*\n)+)/m, `$1generation:\n  role: ${role}\n`);
    changes.push(`generation.role ${role}`);
  }

  // 3. every ledger evidence URL made reader-visible, without removing any
  //    existing entry (A3 §5a: add alongside, never replace).
  const present = new Set([...fm.matchAll(/url:\s*"([^"]+)"/g)].map((x) => x[1]));
  const missing = (row.urls ?? []).filter((u) => !present.has(u));
  for (const url of missing) if (!TITLES[url]) throw new Error(`no title for ${url} (${id})`);
  if (missing.length) {
    const flow = /^sources:\s*\{[\s\S]*?\}\s*$/m.exec(fm);
    const inlineList = /^(\s{2}references:\s*)\[([\s\S]*?)\]\s*$/m.exec(fm);
    const entries = missing.map((u) => `{title: "${TITLES[u]}", url: "${u}"}`).join(', ');
    if (flow) {
      // sources: {scraped: [], references: [{…}]}  → append inside the list
      const line = flow[0];
      const patched = /references:\s*\[\s*\]/.test(line)
        ? line.replace(/references:\s*\[\s*\]/, `references: [${entries}]`)
        : line.replace(/\]\s*\}\s*$/, `, ${entries}]}`);
      if (patched === line) throw new Error(`could not patch flow sources in ${file}`);
      fm = fm.replace(line, patched);
    } else if (inlineList) {
      const line = inlineList[0];
      const inner = inlineList[2].trim();
      fm = fm.replace(line, `${inlineList[1]}[${inner ? inner + ', ' : ''}${entries}]`);
    } else {
      // block style: append `- title:/url:` pairs at the end of the list
      const block = /^(\s{2}references:\s*\n(?:\s{4}[-\s].*\n)+)/m.exec(fm);
      if (!block) throw new Error(`could not locate block references in ${file}`);
      const added = missing.map((u) => `    - title: "${TITLES[u]}"\n      url: "${u}"\n`).join('');
      fm = fm.replace(block[1], block[1] + added);
    }
    changes.push(`+${missing.length} url${missing.length > 1 ? 's' : ''}`);
  }

  if (changes.length) {
    writeFileSync(file, m[1] + fm + m[3] + body);
    report.push(`${id}: ${changes.join('; ')}`);
  }
}
console.log(report.join('\n'));
console.log(`\n${report.length}/${scope.length} item(s) changed`);
