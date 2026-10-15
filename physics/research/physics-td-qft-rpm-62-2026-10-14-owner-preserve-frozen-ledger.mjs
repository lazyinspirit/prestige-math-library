import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { isPublishedItem } from '../../tools/physics-support/published-repair-policy.mjs';
const run = 'physics-td-qft-rpm-62-2026-10-14';
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const sha = value => createHash('sha256').update(value).digest('hex');
const check = (ok, message) => { if (!ok) throw Error(message); };
const ledger = 'research/defect-ledger.jsonl', raw = readFileSync(ledger, 'utf8');
const aliases = new Map([
  ['tdqftrpm62-b18-source-norm', ['source-misdescription', 'citation-inaccurate']],
  ['tdqftrpm62-b18-explicit-geometry', ['undefined-term', 'undefined-notation']],
  ['tdqftrpm62-b18-entropy-energy-notation', ['undefined-term', 'undefined-notation']],
  ...['vector-integral-construction', 'diagonal-positive-integral', 'density-complex-positivity', 'shared-block-contractions']
    .map(s => [`${run}-3a-batch-61-${s}`, ['missing-justification', 'unsupported-inference']]),
]);
const urlIds = new Set(['quadratic-example-locator', 'time-order-locator', 'causal-locator', 'local-example-locator']
  .map(s => `${run}-3a-batch-61-${s}`));
const changed = [], preserved = [];
const output = raw.split('\n').map(line => {
  if (!line) return line;
  const row = JSON.parse(line);
  if (row.run !== run) return line;
  const before = structuredClone(row), alias = aliases.get(row.defect_id);
  if (alias && row.subclass === alias[1]) {
    const note = `Historical subclass spelling: ${alias[0]}. step5-v2-gate-r1-u2 maps it to the existing closed taxonomy without changing the recorded finding or disposition.`;
    check(typeof row.subclass_note === 'string' && row.subclass_note.endsWith(note), `Unknown native taxonomy change ${row.defect_id}`);
    row.subclass = alias[0];
    const originalNote = row.subclass_note.slice(0, -note.length).trimEnd();
    if (originalNote) row.subclass_note = originalNote; else delete row.subclass_note;
  }
  if (urlIds.has(row.defect_id)) for (const entry of row.evidence ?? []) {
    if (entry.url && entry.path === `research/${run}-alpha-batch-61-3a.md`) delete entry.path;
  }
  if (JSON.stringify(row) === JSON.stringify(before)) return line;
  changed.push(row.defect_id); preserved.push({ normalized_native_row: before, original_historical_row: row });
  return JSON.stringify(row);
}).join('\n');
const rows = output.split('\n').filter(Boolean).map(JSON.parse);
const historical = rows.filter(row => row.run === run && ['3a-adjudicate', '3b-cross'].includes(row.caught_at_stage)
  && !isPublishedItem(process.cwd(), row.subject)).sort((a, b) => String(a.defect_id).localeCompare(String(b.defect_id)));
const closure = read(`research/${run}-step3-closure.json`);
check(historical.length === closure.step3_ledger_rows_count && sha(JSON.stringify(historical)) === closure.step3_ledger_rows_sha256,
  'Reconstructed historical rows do not match the immutable original closure');
console.log(JSON.stringify({ run, recovered_rows: changed.length, frozen_rows: historical.length, original_frozen_aggregate_matches: true }));
if (process.argv.includes('--apply')) {
  const state = read(`.physics-autopilot/${run}/state.json`);
  check(Object.values(state.dispatches).every(row => !row.startedAt || row.endedAt), 'Native writer active');
  const dir = `research/${run}-owner-preserved-frozen-ledger`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/native-normalized-ledger.before.jsonl`, raw, { flag: 'wx' });
  writeFileSync(`${dir}/authenticated-original-rows.json`, JSON.stringify({ run, changed, preserved,
    frozen_sha256: closure.step3_ledger_rows_sha256, frozen_rows: historical.length }, null, 2) + '\n', { flag: 'wx' });
  check(readFileSync(ledger, 'utf8') === raw, 'Concurrent ledger change');
  writeFileSync(ledger, output);
}
