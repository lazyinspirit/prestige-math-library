#!/usr/bin/env node
// frontier-11-write-risk-reviews.mjs — Alpha's step-6 risk_review writer.
//
// Only Alpha may write a risk_review (CLAUDE.md, owner 2026-08-01), so this is a
// mechanical transcription of Alpha's per-item disposition, not a judgment made
// by the script. It writes one record per `high`/`critical` item into the OWNING
// BATCH contract — never only into the merged file, which is regenerated from the
// batch files and would silently drop them.
//
// Usage: node research/frontier-11-write-risk-reviews.mjs [--dry-run]

import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const dryRun = process.argv.includes('--dry-run');
const REPO = '/Users/ianx/Projects/prestige-math-library';

// page id -> read-only refuter cluster that read it adversarially at step 6b
const CLUSTER = {
  'field-extensions-and-the-complex-numbers': 'complex',
  'field-extensions-and-the-complex-numbers-examples': 'complex',
  'conjugacy-and-simplicity-in-the-symmetric-groups': 'symgroups',
  'conjugacy-and-simplicity-in-the-symmetric-groups-examples': 'symgroups',
  'the-fundamental-theorems-of-calculus': 'ftc-arc',
  'the-fundamental-theorems-of-calculus-examples': 'ftc-arc',
  'arc-length-and-rectifiable-curves': 'ftc-arc',
  'arc-length-and-rectifiable-curves-examples': 'ftc-arc',
  'formal-power-series': 'formal-series',
  'formal-power-series-examples': 'formal-series',
  'extremal-graph-theory': 'extremal',
  'extremal-graph-theory-examples': 'extremal',
  'the-determinant-of-a-linear-operator': 'determinant',
  'the-determinant-of-a-linear-operator-examples': 'determinant',
  'the-integral-logarithm-and-its-characterisations': 'logarithm',
  'the-integral-logarithm-and-its-characterisations-examples': 'logarithm',
  'universal-properties-and-the-yoneda-lemma': 'yoneda',
  'universal-properties-and-the-yoneda-lemma-examples': 'yoneda',
};
// batch index -> the independent step-6 reader that audited it (never its author)
const READER = { 1: 'reader-5', 2: 'reader-1', 3: 'reader-2', 4: 'reader-3', 5: 'reader-4' };

// Items where Alpha's disposition rests on more than "two adversarial reads found
// nothing": a claim Alpha re-derived personally, or a repair Alpha applied.
const EXTRA = JSON.parse(readFileSync(`${REPO}/research/frontier-11-risk-review-notes.json`, 'utf8'));

const itemPage = new Map();
const itemBatch = new Map();
for (const i of [1, 2, 3, 4, 5]) {
  const pages = JSON.parse(readFileSync(`${REPO}/research/frontier-11-batch-${i}.pages.json`, 'utf8'));
  for (const page of pages) {
    for (const entry of page.items) {
      const id = typeof entry === 'string' ? entry : entry.id;
      itemPage.set(id, page.id);
      itemBatch.set(id, i);
    }
  }
}

// execFileSync's default pipe truncates this report mid-string, so route it through a file.
execFileSync('/bin/sh', ['-c',
  `node ${REPO}/tools/risk-report.mjs ${REPO}/research/frontier-11-proof-contracts.json --json > /tmp/frontier-11-risk.json`]);
const risk = JSON.parse(readFileSync('/tmp/frontier-11-risk.json', 'utf8'));
const routed = risk.findings.filter((f) => f.tier === 'high' || f.tier === 'critical');

const REVIEWER = 'Alpha-frontier-11 (Claude Opus 5, claude-opus-5[1m], xhigh), on the evidence of the '
  + 'independent step-6 reader and the read-only GPT 5.6 Sol proof-refuter named below, plus Alpha\'s own '
  + 'reading of the item and its cited dependencies on disk';

const byBatch = new Map();
for (const finding of routed) {
  const batch = itemBatch.get(finding.id);
  if (!batch) { console.error(`no batch for ${finding.id}`); continue; }
  const cluster = CLUSTER[itemPage.get(finding.id)];
  const signals = finding.signals.map((s) => s.reason).join('; ');
  const extra = EXTRA[finding.id];
  const notes = `Risk ${finding.tier} (score ${finding.score}: ${signals}). `
    + `Independent step-6 reader: ${READER[batch]} (batch ${batch}, which it did not author). `
    + `Read-only proof-refuter: cluster \`${cluster}\`, GPT 5.6 Sol, --sandbox read-only. `
    + `Alpha disposition: ${extra ?? 'two independent adversarial reads of the current text — the step-6 reader '
      + 'and the refuter — surfaced no concrete false claim, unlicensed inference, missing hypothesis, scope or '
      + 'quantifier error, or inaccurate dependency citation against it, and Alpha\'s own reading of the item and '
      + 'of every dependency its labelled facts cite agrees. Accepted on that evidence.'}`;
  if (!byBatch.has(batch)) byBatch.set(batch, []);
  byBatch.get(batch).push([finding.id, notes]);
}

let written = 0;
for (const [batch, rows] of [...byBatch].sort()) {
  const path = `${REPO}/research/frontier-11-batch-${batch}.proof-contracts.json`;
  const doc = JSON.parse(readFileSync(path, 'utf8'));
  for (const [id, notes] of rows) {
    if (!doc.contracts[id]) { console.error(`no contract for ${id} in batch ${batch}`); continue; }
    doc.contracts[id].risk_review = { status: 'complete', reviewer: REVIEWER, notes };
    written += 1;
  }
  if (!dryRun) writeFileSync(path, `${JSON.stringify(doc, null, 1)}\n`);
  console.log(`batch ${batch}: ${rows.length} risk_review record(s)`);
}
console.log(`${written} risk_review record(s) ${dryRun ? 'planned' : 'written'} across ${byBatch.size} batch contract(s)`);
