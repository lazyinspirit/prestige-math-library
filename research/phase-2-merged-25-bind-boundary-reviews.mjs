// Mechanical mapping of the completed Astra review, not a new mathematical audit.
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { itemHashGuard } from '../tools/item-hash.mjs';
const run = 'phase-2-merged-25';
const report = `research/${run}-boundary-review-1.md`;
const evidence = new Map();
for (const line of fs.readFileSync(report, 'utf8').split('\n')) {
  const match = line.match(/^\| `([^`]+)` \| `([^`]+)` \| ([^|]+) \| (.+) \|$/);
  if (match) evidence.set(match[1], { file: `research/${match[2]}`, cases: match[3].split(',').map(x => x.trim()), reason: match[4] });
}
const check = spawnSync(process.execPath, ['tools/boundary-audit.mjs', `research/${run}-proof-contracts.json`, '--json'], { encoding: 'utf8', maxBuffer: 8e6 });
if (check.status !== 0) throw Error(check.stderr);
const audit = JSON.parse(check.stdout), files = new Map();
let count = 0;
for (const cluster of audit.templates) for (const target of cluster.rows) {
  const reviewed = evidence.get(target.id);
  if (!reviewed?.cases.includes(target.case)) throw Error(`No completed review for ${target.id}/${target.case}`);
  if (!files.has(reviewed.file)) files.set(reviewed.file, JSON.parse(fs.readFileSync(reviewed.file, 'utf8')));
  const row = files.get(reviewed.file).contracts[target.id].boundaries.find(row => row.case === target.case);
  if ((row.reason ?? row.evidence ?? '') !== target.text) throw Error(`Changed reviewed row ${target.id}/${target.case}`);
  row.template_review = { upheld: true, by: 'Astra/medium gate-batch-1-all; root mechanical evidence mapping',
    reason: reviewed.reason, source: report,
    item_sha256: itemHashGuard(fs.readFileSync(`items/${target.id}.md`, 'utf8')), row_sha256: target.row_sha256 };
  count++;
}
for (const [file, doc] of files) fs.writeFileSync(file, JSON.stringify(doc, null, 2) + '\n');
console.log(`Bound ${count} reviewed boundary rows in ${files.size} owning contracts; no mathematical text or verdict changed.`);
