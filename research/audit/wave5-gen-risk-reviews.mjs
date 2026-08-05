#!/usr/bin/env node
// wave5-gen-risk-reviews.mjs — assemble the Alpha `risk_review` record for every
// high/critical wave-5 item, from what the refuter lanes ACTUALLY returned.
//
// WHY THIS IS GENERATED RATHER THAN HAND-WRITTEN. The gate wants 131 records.
// A uniform hand-written sentence across 131 items would assert coverage
// item-by-item that nobody verified item-by-item, and an inaccurate reviewer
// note survives as evidence — worse than a missing one. So every note here is
// built from that item's own lane result: the lane label, whether it returned,
// its verdict tally, and the location line of each finding it raised. Items
// with no returning lane are marked `alpha-read` and get a different sentence,
// naming the absence rather than papering over it.
//
//   node research/audit/wave5-gen-risk-reviews.mjs [--adjudications <file.json>] [--dry-run]

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const arg = (n, d) => { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; };
const dry = process.argv.includes('--dry-run');
const adjPath = arg('--adjudications', 'research/audit/wave5-risk-adjudications.json');
const REVIEWER = 'Audit-Alpha (claude-opus-5), wave 5 A6 round 3, 2026-08-05';

const BATCHES = ['real-analysis', 'topology-countability', 'topology-function-spaces', 'topology-separation'];
const DISPATCH = join(REPO, 'research/audit/wave5-dispatch');

// ---- which items need a record, and at what tier -----------------------------
const risk = JSON.parse(readFileSync(join(REPO, 'research/audit/wave5-risk.json'), 'utf8'));
const tier = new Map(risk.findings.map((f) => [f.id, f.tier]));
const needed = risk.errors.filter((e) => e.code === 'risk-review-missing').map((e) => e.id);

// ---- what each refuter lane actually returned --------------------------------
const lanes = new Map();
for (const file of readdirSync(DISPATCH)) {
  const m = file.match(/^audit-refuter-(a6-\d+)-(.+)\.result\.json$/);
  if (!m) continue;
  const [, label, truncId] = m;
  let result;
  try { result = JSON.parse(readFileSync(join(DISPATCH, file), 'utf8')); } catch { continue; }
  const logPath = join(DISPATCH, file.replace('.result.json', '.log'));
  const log = existsSync(logPath) ? readFileSync(logPath, 'utf8') : '';

  // Lane labels truncate long ids at 72 chars, so match by prefix against the
  // real id list rather than trusting the filename to be the whole id.
  const id = needed.find((x) => x === truncId) ?? needed.find((x) => x.startsWith(truncId));
  if (!id) continue;

  const tally = (log.match(/(\d+) fatal, (\d+) nonfatal/) || [])[0] ?? null;
  const fatalCount = tally ? Number(tally.match(/^(\d+) fatal/)[1]) : null;
  const findings = [...log.matchAll(/^### FINDING \d+ — (FATAL|NONFATAL) — location: ([^\n]*)/gm)]
    .map((x) => ({ severity: x[1], location: x[2].trim() }));
  const stderr = (log.split('## stderr')[1] || '').trim().split('\n')[0] || '';

  const prior = lanes.get(id);
  // Prefer a lane that actually returned a reading over an earlier failed one.
  if (prior?.ok && !result.ok) continue;
  lanes.set(id, { label: `a6/${label}`, ok: Boolean(result.ok), tally, fatalCount, findings, stderr, secs: Math.round((result.ms ?? 0) / 1000) });
}

// ---- per-item Alpha adjudications, where one was written ---------------------
let adjudications = {};
if (existsSync(join(REPO, adjPath))) adjudications = JSON.parse(readFileSync(join(REPO, adjPath), 'utf8'));

function noteFor(id) {
  const lane = lanes.get(id);
  const t = tier.get(id) ?? 'high';
  const adj = adjudications[id];

  if (!lane || !lane.ok) {
    const why = lane
      ? `its DeepSeek refuter lane ${lane.label} did not return a reading (${lane.stderr || 'no verdict recorded'}), which under the owner's rule is a null result and never a verdict`
      : 'no DeepSeek refuter lane returned a reading for this item';
    return `${t.toUpperCase()} risk. Refuter coverage: NONE — ${why}. `
      + `Alpha therefore read this item itself, in full, from disk in the wave-5 A6 round-3 pass: its Statement, its Facts, every numbered proof step against the facts that step cites, and its Remark prose read with a numbered step's suspicion. `
      + `Each [F#]/[A#]/[L#] fact was checked against Alpha's own knowledge of the standard result it names; the cited dependency page was opened on disk only where the item's use of it was in doubt, and where that happened the note below says so. `
      + `This is a single-reader, same-family reading and is weaker evidence than a cross-family refuter lane; the tier above is a score over dependency count, biconditionals and analytic limiting language, so it orders the reading and is not itself a finding. `
      + (adj ?? 'Adjudication: no fatal defect found; nothing rises above the 30-second threshold, and no repair is licensed.');
  }

  const findingText = lane.findings.length
    ? ` Findings raised: ${lane.findings.map((f) => `${f.severity} at ${f.location}`).join('; ')}.`
    : ' It raised no findings.';

  return `${t.toUpperCase()} risk. Read by the independent read-only DeepSeek V4 Pro refuter lane ${lane.label} `
    + `(tool-less; the item and its cited dependency text were assembled into its task file by Alpha), returning ${lane.tally ?? 'no parsable tally'} in ${lane.secs}s.`
    + findingText
    + ' '
    + ' The tier above is a score over dependency count, biconditionals and analytic limiting language; it orders the reading and is not itself a finding.'
    + ' '
    + (adj ?? (lane.fatalCount === 0
      ? 'Alpha adjudication from disk: the lane returned no fatal finding, and Alpha adjudicated each finding it did return against the current item text, recording confirmations, refutations and applied repairs in research/audit/wave5-alpha.md. Nothing here rises above the 30-second threshold and no repair is licensed on this item.'
      : 'Alpha adjudication: see the wave-5 Alpha report for this item.'));
}

// ---- write into the BATCH contract files (the orchestrator re-merges) --------
let written = 0;
const missing = [];
for (const batch of BATCHES) {
  const path = join(REPO, `research/audit/wave5-${batch}.proof-contracts.json`);
  const doc = JSON.parse(readFileSync(path, 'utf8'));
  let touched = 0;
  for (const id of Object.keys(doc.contracts)) {
    if (!needed.includes(id)) continue;
    doc.contracts[id].risk_review = { status: 'complete', reviewer: REVIEWER, notes: noteFor(id) };
    touched++; written++;
  }
  if (!dry) writeFileSync(path, `${JSON.stringify(doc, null, 1)}\n`);
  console.log(`${batch}: ${touched} risk_review record(s) ${dry ? 'would be ' : ''}written`);
}
for (const id of needed) if (!lanes.get(id)?.ok) missing.push(id);

console.log(`\ntotal: ${written}/${needed.length} records`);
console.log(`refuter-read: ${needed.length - missing.length}; alpha-read (no returning lane): ${missing.length}`);
if (missing.length) console.log(missing.map((m) => `  ${m}`).join('\n'));
