import fs from 'node:fs';
import assert from 'node:assert/strict';
const run = 'advanced-qft-supersymmetry-build-2026-10-23';
const anomalyIds = ['ex-aqft-mixed-background-counterterm-shift','ex-aqft-single-chiral-fundamental-polynomial','pthm-aqft-selected-chiral-spectrum-anomaly-cancellation','ex-aqft-vectorlike-conjugate-chiral-pair'];
const bpsId = 'ex-qftx-physical-bps-kronecker-hall-sector';
function section(id, heading) {
  const text = fs.readFileSync(`items/${id}.md`, 'utf8');
  const start = text.indexOf(`\n## ${heading}\n`);
  assert(start >= 0, `missing ${heading}: ${id}`);
  const rest = text.slice(start + `\n## ${heading}\n`.length);
  const end = rest.indexOf('\n## ');
  return (end < 0 ? rest : rest.slice(0, end)).trim();
}
function save(path, data) {
  const next = JSON.stringify(data, null, 2) + '\n';
  if (fs.readFileSync(path, 'utf8') !== next) fs.writeFileSync(path, next);
}
// The lock runner acquires before this process starts. Read live files here.
const changed = [];
for (const [batch, ids, supplier] of [[41, anomalyIds, 'def-aqft-anomaly-matching-data'], [54, [bpsId], 'def-qftx-physical-bps-charge-data']]) {
  const path = `research/${run}-batch-${batch}.proof-contracts.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  for (const id of ids) {
    const matches = data.contracts[id].citations.filter(c => c.source === supplier && c.source_section === 'Definition');
    assert.equal(matches.length, 1, `ambiguous supplier citation for ${id}`);
    const quote = section(supplier, 'Definition');
    if (matches[0].quote !== quote) {
      matches[0].quote = quote;
      changed.push(`${path}: contracts/${id}/citations/${matches[0].fact}/quote`);
    }
  }
  save(path, data);
}
const manifestPath = `research/${run}-batch-41.pages.json`;
const pages = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const rows = pages.flatMap(p => p.items ?? []).filter(i => i.id === anomalyIds[0]);
assert.equal(rows.length, 1);
const example = section(anomalyIds[0], 'Example');
if (rows[0].statement !== example) {
  rows[0].statement = example;
  changed.push(`${manifestPath}: ${anomalyIds[0]}/statement`);
}
save(manifestPath, pages);
for (const path of [`research/${run}-batch-41.proof-contracts.json`, `research/${run}-batch-54.proof-contracts.json`, manifestPath]) JSON.parse(fs.readFileSync(path, 'utf8'));
console.log(JSON.stringify({changed, checks: 'Current supplier Definition quotations and mixed-counterterm Example mirror reread and synchronized; JSON reparsed successfully.'}, null, 2));
