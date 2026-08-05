#!/usr/bin/env node
// wave5-topology-countability.normalize-sources.mjs — rewrite the batch's
// flow-style `sources:` frontmatter line into the block form SCHEMA §3 shows.
//
// WHY. tools/content-policy.mjs:117 `referenceUrls` says it supports "both the
// normal block form and YAML's inline flow form", but its locator is
// `lines.findIndex(line => /^\s{2}references:\s*/.test(line))` — `references:`
// must START a line under exactly two spaces. A whole-mapping flow line,
//
//     sources: {scraped: [], references: [{title: "…", url: "…"}]}
//
// keeps `references:` mid-line, so the finder returns -1 and the reader reports
// NO reference URLs at all. Every source-backed item written that way then fails
// the A4 gate with `source-backed-provenance-uncited` while carrying a perfectly
// good reader-visible URL. Measured on this batch: 35 false errors, exactly the
// 35 source-backed flow-style items, and zero on any block-style item.
//
// The real repair is one line in content-policy.mjs and is not a Beta's to make.
// This is the half that is: the two forms are the same YAML, the renderer parses
// both identically, and block form is what SCHEMA §3 prescribes — so converting
// changes no claim, no rendered output, and no mathematics, and it lets the gate
// read a truth it currently cannot see. See the findings file, N10.
//
// Verifies its own work: the ordered (title, url) list must be identical before
// and after, or the file is left untouched and the script exits nonzero.

import { readFileSync, writeFileSync } from 'node:fs';

const MANIFEST = 'research/audit/wave5-topology-countability.pages.json';
const scope = JSON.parse(readFileSync(MANIFEST, 'utf8')).flatMap((p) => p.items.map((i) => i.id));

const pairs = (text) => [...text.matchAll(/\{\s*title:\s*"([^"]*)"\s*,\s*url:\s*"([^"]*)"\s*\}/g)]
  .map((m) => [m[1], m[2]]);

let changed = 0;
for (const id of scope) {
  const file = `items/${id}.md`;
  const text = readFileSync(file, 'utf8');
  const line = /^sources:\s*\{.*\}\s*$/m.exec(text);
  if (!line) continue;

  const scraped = /scraped:\s*\[\s*\]/.test(line[0]);
  if (!scraped) throw new Error(`${file}: non-empty sources.scraped, not handled`);
  const refs = pairs(line[0]);
  const declared = [...line[0].matchAll(/url:\s*"([^"]*)"/g)].length;
  if (refs.length !== declared) throw new Error(`${file}: ${declared} url(s) but ${refs.length} parsed pair(s)`);

  const block = refs.length
    ? ['sources:', '  scraped: []', '  references:',
       ...refs.flatMap(([title, url]) => [`    - title: "${title}"`, `      url: "${url}"`])].join('\n')
    : ['sources:', '  scraped: []', '  references: []'].join('\n');

  const next = text.replace(line[0], block);
  const after = pairs(next.slice(0, next.indexOf('\n---\n', 4)));
  if (JSON.stringify(after) !== JSON.stringify(refs)) {
    // block form writes one field per line, so re-read it the same way
    const reread = [...next.slice(0, next.indexOf('\n---\n', 4))
      .matchAll(/- title:\s*"([^"]*)"\n\s+url:\s*"([^"]*)"/g)].map((m) => [m[1], m[2]]);
    if (JSON.stringify(reread) !== JSON.stringify(refs)) {
      throw new Error(`${file}: round-trip mismatch\n  before ${JSON.stringify(refs)}\n  after  ${JSON.stringify(reread)}`);
    }
  }
  writeFileSync(file, next);
  changed += 1;
  console.log(`${id}: ${refs.length} reference(s) normalized to block form`);
}
console.log(`\n${changed} item(s) normalized`);
