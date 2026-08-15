#!/usr/bin/env node
// Emit a frontier-13 splice receipt from a meta file whose `summary_corrections`
// and `summary_rationale` values may be "@file:<path>" references.
//   node scratchpad/emit-receipt.mjs scratchpad/receipt-<i>.meta.json
import { readFileSync, writeFileSync } from 'node:fs';

const meta = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const deref = (v) => (typeof v === 'string' && v.startsWith('@file:') ? readFileSync(v.slice(6), 'utf8').trim() : v);
for (const key of ['summary_corrections', 'summary_rationale']) {
  if (!meta[key]) continue;
  for (const [k, v] of Object.entries(meta[key])) meta[key][k] = deref(v);
}
const out = `research/frontier-13-splice-${meta.batch}.json`;
writeFileSync(out, JSON.stringify(meta, null, 2) + '\n');
console.log(`wrote ${out}`);
