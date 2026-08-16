#!/usr/bin/env node
// drift-review-check — gate the step-0 prerequisite-drift review.
//
//   node tools/drift-review-check.mjs --run <run>
//
// The drift review is an Alpha reading task: does any track design require a
// prerequisite the spec's `requires` closure lacks? `autopilot plan` assembles
// the evidence and writes the task; the engine dispatches it as the `drift`
// unit of stage 1. THIS gate is what makes that node unable to be skipped —
// it was written after the review was found to be a never-invoked node: the
// task file existed, the plan output said "dispatched as the first audit
// node", and nothing dispatched it or required its report.
//
// Fails when:
//   - the report is missing (the review has not run),
//   - any A page the run owes lacks exactly one well-formed VERDICT line,
//   - a drift-applied/drift-blocked verdict names no edge,
//   - any verdict is drift-blocked. A blocked edge is a reading-order change,
//     which is the owner's alone — the correct engine behaviour is to stop
//     with the blocker named, not to build past an unresolved ordering
//     question and meet it again at step 4 as `undeclared-prereq`.
//
// The verdict contract (written into the task template in
// tools/autopilot/bin/autopilot.mts — change them together):
//   ### <a-page-id>
//   ...prose: what was read, what was found...
//   VERDICT: no-drift
//   VERDICT: drift-applied — added <page-id> (order <n>)[, ...]
//   VERDICT: drift-blocked — <the exact edge and why it is not addable>

import { readFileSync, existsSync } from 'node:fs';

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] ? argv[i + 1] : null; };
const run = opt('run');
if (!run) { console.error('usage: node tools/drift-review-check.mjs --run <run>'); process.exit(2); }

const ledgerPath = `research/${run}-scope-ledger.json`;
const reportPath = `research/${run}-alpha-step0-drift.md`;

if (!existsSync(ledgerPath)) {
  console.error(`ERROR drift-check-no-ledger: ${ledgerPath} does not exist — run \`autopilot plan\``);
  process.exit(1);
}
const owed = (JSON.parse(readFileSync(ledgerPath, 'utf8')).pages ?? [])
  .filter((p) => p.kind === 'A')
  .map((p) => p.id);
if (!owed.length) {
  // An empty owed set would make every report "complete". That is a scope
  // defect upstream, never a pass here.
  console.error(`ERROR drift-check-empty-ledger: ${ledgerPath} owes no A pages`);
  process.exit(1);
}
if (!existsSync(reportPath)) {
  console.error(`ERROR drift-check-no-report: ${reportPath} — the drift review has not run`);
  process.exit(1);
}
const text = readFileSync(reportPath, 'utf8');

const errors = [];
let applied = 0;
for (const id of owed) {
  const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const head = text.match(new RegExp(`^###\\s+\`?${esc}\`?\\s*$`, 'm'));
  if (!head) { errors.push(`drift-check-missing-page: no \`### ${id}\` section in the report`); continue; }
  const start = head.index + head[0].length;
  const rest = text.slice(start);
  const next = rest.search(/^###\s/m);
  const body = next < 0 ? rest : rest.slice(0, next);
  const verdicts = [...body.matchAll(/^VERDICT:\s*(no-drift|drift-applied|drift-blocked)\b[ —-]*(.*)$/gm)];
  if (verdicts.length !== 1) {
    errors.push(`drift-check-verdict: ${id} has ${verdicts.length} VERDICT line(s); exactly one is required`);
    continue;
  }
  const [, kind, detail] = verdicts[0];
  if (kind !== 'no-drift' && !detail.trim()) {
    errors.push(`drift-check-detail: ${id} is ${kind} but names no edge`);
  }
  if (kind === 'drift-applied') applied += 1;
  if (kind === 'drift-blocked') {
    errors.push(`drift-check-blocked: ${id} — ${detail.trim() || 'unspecified edge'} (owner decision; the run must not build past it)`);
  }
}

if (errors.length) {
  for (const e of errors) console.error(`ERROR ${e}`);
  process.exit(1);
}
console.log(`drift-review-check: ${owed.length} page(s) reviewed, ${applied} spec edit(s) applied, no blocked edges`);
