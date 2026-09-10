// One-time recovery of an unstarted preparation; preserve actual read attribution.
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { migrateJson, migrateSuffix, selectedInput } from '../tools/autopilot/src/checkpoint-migration.mjs';
const source = 'phase-2-merged-25', target = 'phase-2-nine-step-25';
if (fs.existsSync(`.autopilot/${target}`)) throw Error('Target already has runtime state');
const exported = JSON.parse(fs.readFileSync(`research/${source}-migration-export.json`));
const defects = Object.fromEntries(exported.defects.map(r => [r.defect_id, `${target}-import-${r.defect_id}`]));
const protectedKeys = new Set(['risk_review', 'gate_reviews', 'template_review', 'imported_from', 'prior_handoffs']);
function restore(actual, original) {
  if (!actual || typeof actual !== 'object' || !original || typeof original !== 'object') return;
  for (const k of Object.keys(actual)) {
    if (protectedKeys.has(k) && Object.hasOwn(original, k)) actual[k] = structuredClone(original[k]);
    else restore(actual[k], original[k]);
  }
}
let count = 0;
for (const [file, hash] of Object.entries(exported.files)) {
  const suffix = file.slice(`research/${source}-`.length);
  if (!selectedInput(suffix) || !(/^(batch-\d+\.proof-contracts|alpha-[a-z]+-6b-decisions)\.json$/.test(suffix) || suffix === 'step8-published-repairs.jsonl')) continue;
  const raw = fs.readFileSync(file);
  if (createHash('sha256').update(raw).digest('hex') !== hash) throw Error(`Changed source ${file}`);
  const isLines = suffix.endsWith('.jsonl');
  const parse = raw => isLines ? String(raw).split(/\r?\n/).filter(Boolean).map(JSON.parse) : JSON.parse(raw);
  const original = parse(raw), destination = `research/${target}-${migrateSuffix(suffix)}`;
  const actual = parse(fs.readFileSync(destination));
  restore(actual, original);
  if (JSON.stringify(actual) !== JSON.stringify(migrateJson(original, source, target, defects))) throw Error(`Unexpected target edits: ${destination}`);
  const next = isLines ? actual.map(JSON.stringify).join('\n') + '\n' : JSON.stringify(actual, null, 2) + '\n';
  if (next !== fs.readFileSync(destination, 'utf8')) { fs.writeFileSync(destination, next); count++; }
}
console.log(`Restored historical read attribution in ${count} prepared files; no verdict or mathematical edit.`);
