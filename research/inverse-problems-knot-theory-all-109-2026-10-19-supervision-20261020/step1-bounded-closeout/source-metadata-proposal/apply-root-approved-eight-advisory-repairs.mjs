#!/usr/bin/env node
// ROOT ONLY. No network, proof audit, validators, hashes, readiness or gates.
// Default: preview. Root's explicit --apply-root-approved applies guarded metadata.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../../../..');
const plan = JSON.parse(fs.readFileSync(path.join(here, 'guarded-eight-advisory-plan.json'), 'utf8'));
const run = 'inverse-problems-knot-theory-all-109-2026-10-19';
if (plan.run !== run || plan.frontier_items !== 1471 || plan.root_only !== true) throw Error('Wrong root-approved scope');
const entries = plan.files.map(e => {
  if (!e.canonical.startsWith(`research/${run}-batch-`) || !e.canonical.endsWith('.coverage.json')) throw Error(`Non-coverage target refused: ${e.canonical}`);
  const target = path.resolve(repo, e.canonical);
  const before = fs.readFileSync(path.resolve(repo, e.expected_preimage), 'utf8');
  const after = fs.readFileSync(path.resolve(repo, e.proposed_after), 'utf8');
  const current = fs.readFileSync(target, 'utf8');
  return { ...e, target, before, after, current };
});
const applied = entries.every(e => e.current === e.after);
if (applied) {
  process.stdout.write(JSON.stringify({ status: 'already-applied-exactly', coverage_files: entries.length, no_actions: true }) + '\n');
  process.exit(0);
}
const drifted = entries.filter(e => e.current !== e.before);
if (drifted.length) throw Error(`Preimage drift; no writes performed. Root must reconcile exact records: ${drifted.map(e => e.canonical).join(', ')}`);
if (!process.argv.includes('--apply-root-approved')) {
  process.stdout.write(JSON.stringify({ status: 'preview-only-no-writes', coverage_files: entries.length, frontier_items: 1471, changes: plan.operation_records, apply_flag: '--apply-root-approved' }, null, 2) + '\n');
  process.exit(0);
}
const archive = path.join(here, 'root-advisory-eight-before');
if (fs.existsSync(archive)) throw Error('Root preimage archive already exists; refusing overwrite');
fs.mkdirSync(archive);
// Archive ALL exact preimages before touching ANY canonical coverage record.
for (const e of entries) fs.writeFileSync(path.join(archive, path.basename(e.target)), e.before, { flag: 'wx' });
const changed = [];
try {
  for (const e of entries) {
    const tmp = `${e.target}.source-closeout.tmp`;
    fs.writeFileSync(tmp, e.after, { flag: 'wx' });
    fs.renameSync(tmp, e.target);
    changed.push(e);
  }
} catch (err) {
  // Preserve the archive and restore all records already written on a partial I/O failure.
  for (const e of changed) fs.writeFileSync(e.target, e.before);
  throw err;
}
const receipt = {
  status: 'root-applied-guarded-source-metadata-only',
  applied_at: new Date().toISOString(),
  run,
  frontier_items: 1471,
  coverage_files: entries.map(e => e.canonical),
  operations: plan.operation_records,
  archive: path.relative(repo, archive),
  limits: 'Integration timestamp only, not a reading date. Actual source-fetch timestamps retained verbatim. No new source/proof reading, source hash currency, readiness, validation, gate or engine action is claimed.',
};
fs.writeFileSync(path.join(here, 'root-advisory-eight-receipt.json'), JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' });
process.stdout.write(JSON.stringify({ status: receipt.status, coverage_files: entries.length, archive: receipt.archive }) + '\n');
