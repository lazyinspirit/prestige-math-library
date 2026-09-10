// Correct bookkeeping only: detector repair is not an item defect.
import fs from 'node:fs';
const run = 'phase-2-merged-25';
const detector = `${run}-6b-gate-boundary-normalisation`;
let count = 0;
for (const name of fs.readdirSync('research').filter(n => new RegExp(`^${run}-alpha-[a-z]+-6b-decisions\\.json$`).test(n))) {
  const path = `research/${name}`;
  const doc = JSON.parse(fs.readFileSync(path, 'utf8'));
  let changed = false;
  for (const row of doc.decisions) {
    if (!row.defect_ids?.includes(detector)) continue;
    if (row.verdict !== 'accepted') throw Error(`Unexpected disposition: ${row.id}`);
    row.diagnostic_defect_ids = [...new Set([...(row.diagnostic_defect_ids ?? []), detector])];
    row.defect_ids = row.defect_ids.filter(id => id !== detector);
    count++; changed = true;
  }
  if (changed) fs.writeFileSync(path, JSON.stringify(doc, null, 2) + '\n');
}
console.log(`Reconciled ${count} accepted decisions; verdicts and mathematics unchanged.`);
