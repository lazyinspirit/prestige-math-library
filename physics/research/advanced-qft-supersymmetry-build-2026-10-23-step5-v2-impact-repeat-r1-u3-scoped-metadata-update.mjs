import {readFileSync, writeFileSync} from 'node:fs';

const run = 'advanced-qft-supersymmetry-build-2026-10-23';
const repairs = [
  [33, 'pthm-qftx-n2-bps-central-charge-mass', 'F3', 'def-qftx-n2-coulomb-branch-data'],
  [44, 'pthm-aqft-heavy-chiral-threshold-wess-zumino-match', 'F3', 'def-aqft-anomaly-matching-data'],
  [47, 'ex-qftx-susy-round-s4-localization-data', 'A1', 'post-qftx-rigid-supersymmetric-background'],
  [47, 'ex-qftx-susy-round-s4-localization-data', 'A2', 'post-qftx-rigid-supersymmetric-background'],
  [47, 'ex-qftx-susy-round-s4-localization-data', 'A3', 'post-qftx-rigid-supersymmetric-background'],
  [47, 'ex-qftx-susy-round-s4-localization-data', 'A4', 'post-qftx-rigid-supersymmetric-background'],
  [48, 'pthm-qftx-qexact-localization-ward-identity', 'A1', 'post-qftx-rigid-supersymmetric-background'],
];

// The lock wrapper invokes this script only after acquisition. Reread each
// current owning file here, and preserve every byte outside the selected quote.
for (const batch of [...new Set(repairs.map(row => row[0]))]) {
  const path = `research/${run}-batch-${batch}.proof-contracts.json`;
  const original = readFileSync(path, 'utf8');
  const before = JSON.parse(original);
  const expected = structuredClone(before);
  let output = original;
  for (const [, id, fact, source] of repairs.filter(row => row[0] === batch)) {
    const rows = expected.contracts[id].citations.filter(row => row.fact === fact && row.source === source);
    if (rows.length !== 1) throw Error(`Expected one assigned citation: ${id}/${fact}`);
    const row = rows[0];
    const carrier = readFileSync(`items/${source}.md`, 'utf8');
    const marker = `## ${row.source_section}\n`;
    if (carrier.split(marker).length !== 2) throw Error(`Ambiguous source section: ${source}`);
    const quote = carrier.split(marker)[1].split(/^## /m)[0].trim();
    const parsed = JSON.parse(output);
    const prior = parsed.contracts[id].citations.find(value => value.fact === fact && value.source === source).quote;
    if (quote === prior) continue;
    const key = `    ${JSON.stringify(id)}: {`;
    const start = output.indexOf(key);
    if (start < 0 || output.indexOf(key, start + 1) !== -1) throw Error(`Ambiguous owning subject: ${id}`);
    const tail = output.slice(start + key.length);
    const next = tail.search(/^    "[^"]+": \{/m);
    const end = next < 0 ? output.length : start + key.length + next;
    const body = output.slice(start, end);
    const literal = JSON.stringify(prior);
    // Repeated equal quotations within this subject are selected individually;
    // the complete parsed-object comparison below guards the exact fact mapping.
    const currentRows = parsed.contracts[id].citations;
    const matching = currentRows.filter(value => value.quote === prior);
    const targetIndex = currentRows.indexOf(currentRows.find(value => value.fact === fact && value.source === source));
    const occurrence = currentRows.slice(0, targetIndex).filter(value => value.quote === prior).length;
    const offsets = [...body.matchAll(new RegExp(literal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))].map(value => value.index);
    if (offsets.length !== matching.length) throw Error(`Ambiguous quote occurrence: ${id}/${fact}`);
    const at = start + offsets[occurrence];
    output = output.slice(0, at) + JSON.stringify(quote) + output.slice(at + literal.length);
    row.quote = quote;
    if (JSON.stringify(JSON.parse(output)) !== JSON.stringify(expected)) throw Error(`Unexpected shared delta: ${id}/${fact}`);
    console.log(JSON.stringify({batch, id, fact, source, repaired: 'citation quote'}));
  }
  if (JSON.stringify(JSON.parse(output)) !== JSON.stringify(expected)) throw Error(`Unexpected batch delta: ${batch}`);
  if (readFileSync(path, 'utf8') !== original) throw Error(`Owning file changed during patch: ${path}`);
  if (output !== original) writeFileSync(path, output);
}
