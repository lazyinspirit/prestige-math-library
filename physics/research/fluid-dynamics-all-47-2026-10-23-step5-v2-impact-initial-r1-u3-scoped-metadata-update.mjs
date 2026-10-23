import fs from 'node:fs';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';

const run = 'fluid-dynamics-all-47-2026-10-23';
const reportPath = `research/${run}-step5-v2/step5-v2-impact-initial-r1-u3.json`;
const assignments = JSON.parse(fs.readFileSync(`research/${run}-step5-v2/impact-initial-1.json`, 'utf8')).assignments['3'];
const targets = [
  [12, 'pthm-fd-px01-prediction', 'F1', 'def-fd-incompressible-newtonian-model'],
  [13, 'pthm-fd-px04-prediction', 'F1', 'def-fd-incompressible-newtonian-model'],
  [13, 'pthm-fd-px13-prediction', 'F3', 'def-fd-x00'],
  [18, 'thm-fd-compatible-wall-shear-heat', 'F1', 'def-fd-flat-channel-domains'],
  [19, 'thm-fd-polytropic-energy', 'F1', 'def-fd-polytropic-symmetric-variables'],
  [19, 'thm-fd-smooth-wall-energy-uniqueness', 'F1', 'def-fd-smooth-wall-exterior-solution-domains'],
  [20, 'pthm-fd-two-dimensional-viscous-model-globality', 'A3', 'def-fd-incompressible-newtonian-model'],
  [22, 'thm-fd-periodic-global-weak-existence', 'F4', 'lem-fd-negative-space-nonlinear-bound'],
  [24, 'pthm-fd-rectangular-weak-pressure', 'F2', 'thm-fd-bounded-global-weak-existence'],
  [6, 'thm-fd-x06', 'F1', 'def-fd-x00'],
  [7, 'thm-fd-x07', 'F1', 'def-fd-x00'],
  [7, 'thm-fd-x10', 'F1', 'def-fd-x00'],
  [7, 'thm-fd-x11', 'F1', 'def-fd-x00'],
];
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
function sourceSection(id, heading) {
  const source = fs.readFileSync(`items/${id}.md`, 'utf8');
  const marker = `\n## ${heading}\n`;
  const start = source.indexOf(marker);
  if (start < 0 || source.indexOf(marker, start + marker.length) >= 0) throw Error(`Ambiguous section ${id}/${heading}`);
  const rest = source.slice(start + marker.length);
  const end = rest.search(/^## /m);
  return (end < 0 ? rest : rest.slice(0, end)).trim();
}
const changes = [];
const batches = [...new Set(targets.map(row => row[0]))];
for (const batch of batches) {
  const path = `research/${run}-batch-${batch}.proof-contracts.json`;
  // Reread the current owning file only after the wrapper has acquired the lock.
  const before = fs.readFileSync(path);
  const data = JSON.parse(before);
  const original = structuredClone(data);
  for (const [, id, fact, supplier] of targets.filter(row => row[0] === batch)) {
    if (!assignments.includes(id)) throw Error(`Unassigned subject ${id}`);
    const contract = data.contracts[id];
    const rows = contract.citations.filter(row => row.fact === fact && row.source === supplier);
    if (rows.length !== 1) throw Error(`Ambiguous citation ${id}/${fact}`);
    const row = rows[0];
    const quote = sourceSection(supplier, row.source_section);
    if (row.quote === quote) continue;
    const oldQuote = row.quote;
    row.quote = quote;
    // This subject alone has an explicitly mirrored supplier excerpt.
    for (const excerpt of contract.supplier_excerpts ?? []) {
      if (excerpt.supplier === supplier) {
        if (excerpt.source_section !== row.source_section) throw Error(`Wrong excerpt section ${id}`);
        excerpt.exact_statement = quote;
      }
    }
    changes.push({id, path, fact, supplier, source_section: row.source_section,
      before_quote_sha256: sha(oldQuote), after_quote_sha256: sha(quote)});
  }
  for (const id of Object.keys(original.contracts)) {
    if (!targets.some(row => row[0] === batch && row[1] === id) &&
        JSON.stringify(data.contracts[id]) !== JSON.stringify(original.contracts[id])) throw Error(`Foreign contract change ${id}`);
  }
  if (JSON.stringify(data) !== JSON.stringify(original)) fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
}
const checks = [];
for (const batch of batches) {
  const path = `research/${run}-batch-${batch}.proof-contracts.json`;
  const current = JSON.parse(fs.readFileSync(path, 'utf8'));
  const ids = assignments.filter(id => current.contracts[id]);
  const args = ['tools/physics-support/proof-contract.mjs', path, '--strict', '--items', ids.join(','), '--json'];
  const result = spawnSync(process.execPath, args, {encoding: 'utf8'});
  const check = {command: `node ${args.join(' ')}`, exit_code: result.status, output: JSON.parse(result.stdout)};
  checks.push(check);
  if (result.status !== 0) throw Error(JSON.stringify(check));
}
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
report.repair_notes.contract_repairs = changes;
report.repair_notes.focused_checks = checks;
report.repair_notes.next_action = 'Examine the exact metadata-only patch effects, obtain fresh review contexts, and finish the report.';
for (const review of report.reviews) {
  const change = changes.find(row => row.id === review.id);
  if (!change) continue;
  review.metadata_repair_only = true;
  review.reason += ` Refreshed only the stale ${change.fact} supplier quotation in its owning batch contract${review.id === 'pthm-fd-px04-prediction' ? ' and mirrored exact supplier excerpt' : ''}; the item carrier is byte-unchanged.`;
}
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
process.stdout.write(JSON.stringify({changes, checks: checks.map(row => ({command: row.command, exit_code: row.exit_code, warnings: row.output.warnings}))}, null, 2) + '\n');
