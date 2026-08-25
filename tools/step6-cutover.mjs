#!/usr/bin/env node
// Explicit migration for a run that completed the legacy Step 6 before the
// routed Step 6 stages became active.

import { prepareLegacyStep6Cutover, inspectLegacyStep6Cutover } from './step6-cutover-lib.mjs';

const argv = process.argv.slice(2);
const command = argv[0];
const value = (flag, fallback = undefined) => {
  const at = argv.indexOf(flag);
  return at >= 0 ? argv[at + 1] ?? fallback : fallback;
};
const run = value('--run');
if (!run || !['prepare', 'check'].includes(command)) {
  console.error('usage: node tools/step6-cutover.mjs <prepare|check> --run <run> [--state-dir <dir>] [--dispatch-dir <dir>] [--out <receipt>] [--root <repo>]');
  process.exit(2);
}

const options = {
  root: value('--root', process.cwd()),
  run,
  stateDir: value('--state-dir', '.autopilot'),
  dispatchDir: value('--dispatch-dir'),
  receiptPath: value('--out'),
};
const result = command === 'prepare'
  ? prepareLegacyStep6Cutover(options)
  : inspectLegacyStep6Cutover(options);

console.log(`step6-cutover: ${result.ok ? 'OK' : 'FAIL'} — legacy Step 6 completion`);
if (result.ok) {
  console.log(`step6-cutover: ${result.receipt.completed_stages.length} completed stage(s), ${Object.keys(result.receipt.evidence_sha256).length} evidence file(s)`);
} else {
  for (const error of result.errors) console.error(`ERROR ${error}`);
}
process.exit(result.ok ? 0 : 1);
