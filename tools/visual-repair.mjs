#!/usr/bin/env node
// Tau's mechanical guard. It snapshots the whole tracked repository before Tau,
// then proves that Tau changed only Sigma-named sources and did not remove page
// membership, structural sections, proof steps, or diagrams.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { REPO } from './paths.mjs';
import { runScope, sha256, splitFrontmatter } from './step10-lib.mjs';

const argv = process.argv.slice(2);
const command = argv[0];
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
const run = value('--run');
if (!['baseline', 'check', 'verify'].includes(command) || !run) {
  console.error('usage: node tools/visual-repair.mjs baseline|check|verify --run <run>');
  process.exit(2);
}
const sigmaRel = `research/${run}-sigma-initial.json`;
const tauRel = `research/${run}-tau.json`;
const targetsRel = `research/${run}-tau-rejudge-targets.json`;
const baselineFile = join(REPO, '.autopilot', 'render', run, 'tau-baseline.json');
const targetsFile = join(REPO, targetsRel);
const scope = runScope(run);
const sigma = JSON.parse(readFileSync(join(REPO, sigmaRel), 'utf8'));
const allowed = [...new Set((sigma.findings ?? []).map((f) => f.source_file))].sort();

// This repository's tracked path list is larger than Node's 1 MiB default
// child-process buffer. The baseline must see the whole list: truncating or
// skipping it would weaken the exact no-content-loss guard Tau depends on.
const gitList = (args) => execFileSync('git', args, { cwd: REPO, maxBuffer: 64 * 1024 * 1024 })
  .toString('utf8').split('\0').filter(Boolean).sort();
const trackedState = () => Object.fromEntries(gitList(['ls-files', '-z']).map((file) =>
  [file, existsSync(join(REPO, file)) ? sha256(readFileSync(join(REPO, file))) : null]));
const untrackedState = () => gitList(['ls-files', '--others', '--exclude-standard', '-z']);

function fmValue(fm, key) {
  return fm.match(new RegExp(`^${key}:\\s*(.*?)\\s*$`, 'm'))?.[1] ?? null;
}
function contract(file) {
  const text = readFileSync(join(REPO, file), 'utf8');
  const { frontmatter, body } = splitFrontmatter(text);
  const item = file.startsWith('items/');
  const keys = item
    ? ['id', 'kind', 'status', 'depends_on', 'justified_by', 'forward_references', 'proved_here', 'proof_strategy']
    : ['page', 'status', 'items', 'examples'];
  return { frontmatter: Object.fromEntries(keys.map((key) => [key, fmValue(frontmatter, key)])),
    headings: [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1]),
    numbered_steps: [...body.matchAll(/^\d+(?:\.\d+)?\.\s+/gm)].length,
    tikz_blocks: [...body.matchAll(/^```tikz(?:cd)?\s*$/gm)].length };
}

if (command === 'baseline') {
  const receipt = { schema: 1, run, sigma_receipt: sigmaRel,
    sigma_receipt_sha256: sha256(readFileSync(join(REPO, sigmaRel))), allowed_files: allowed,
    tracked: trackedState(), untracked: untrackedState(),
    scope_hashes: Object.fromEntries([...scope.pages.map((p) => p.file), ...scope.items.map((i) => i.file)]
      .map((file) => [file, sha256(readFileSync(join(REPO, file)))])),
    contracts: Object.fromEntries([...scope.pages.map((p) => p.file), ...scope.items.map((i) => i.file)]
      .map((file) => [file, contract(file)])) };
  writeFileSync(baselineFile, JSON.stringify(receipt, null, 2) + '\n');
  console.log(`visual-repair: baseline captured; ${allowed.length} Sigma-authorised file(s)`);
  process.exit(0);
}

if (!existsSync(baselineFile)) throw new Error(`missing ${baselineFile}`);
if (!existsSync(join(REPO, tauRel))) throw new Error(`missing ${tauRel}`);
const baseline = JSON.parse(readFileSync(baselineFile, 'utf8'));
const tau = JSON.parse(readFileSync(join(REPO, tauRel), 'utf8'));
function validateTauReceipt() {
  const issues = [];
  if (tau.schema !== 1 || tau.run !== run || tau.repairer !== 'Tau' || tau.sigma_receipt !== sigmaRel)
    issues.push('Tau receipt identity mismatch');
  const sigmaById = new Map((sigma.findings ?? []).map((f) => [f.finding_id, f]));
  const tauRows = new Map();
  for (const row of tau.findings ?? []) {
    if (tauRows.has(row.finding_id)) issues.push(`duplicate Tau row ${row.finding_id}`);
    tauRows.set(row.finding_id, row);
    const source = sigmaById.get(row.finding_id)?.source_file;
    if (!source || row.source_file !== source) issues.push(`${row.finding_id}: source differs from Sigma`);
    if (!['repaired', 'no-change-required', 'blocked'].includes(row.disposition)) issues.push(`${row.finding_id}: invalid disposition`);
    if (row.content_removed !== false) issues.push(`${row.finding_id}: content_removed must be false`);
    if (row.disposition === 'blocked') issues.push(`${row.finding_id}: repair blocked; content preserved and Step 10 stopped`);
  }
  for (const id of sigmaById.keys()) if (!tauRows.has(id)) issues.push(`${id}: Tau supplied no disposition`);
  for (const id of tauRows.keys()) if (!sigmaById.has(id)) issues.push(`${id}: Tau invented a finding`);
  return issues;
}

// The full diff comparison has one valid time boundary: immediately after Tau.
// Later Step 10 stages deliberately create render, Sigma, judge, and report
// artifacts, so re-attributing the whole post-baseline tree to Tau is false.
// Publication readiness verifies the durable receipt written by the successful
// boundary check instead.
if (command === 'verify') {
  const problems = validateTauReceipt();
  if (!existsSync(targetsFile)) problems.push(`missing ${targetsRel}`);
  else {
    const targets = JSON.parse(readFileSync(targetsFile, 'utf8'));
    const changed = [...(tau.changed_files ?? [])].sort();
    const changedItems = scope.items.filter((item) => changed.includes(item.file)).map((item) => item.id).sort();
    if (targets.schema !== 1 || targets.run !== run || targets.source !== tauRel)
      problems.push('Tau guard receipt identity mismatch');
    if (JSON.stringify([...(targets.changed_files ?? [])].sort()) !== JSON.stringify(changed))
      problems.push('Tau guard changed_files differs from Tau receipt');
    if (JSON.stringify([...(targets.items ?? [])].sort()) !== JSON.stringify(changedItems))
      problems.push('Tau guard rejudge items differ from changed item files');
    for (const file of changed) if (!allowed.includes(file)) problems.push(`${file}: Tau receipt names a file outside Sigma authority`);
  }
  for (const problem of problems) console.error(`visual-repair: ${problem}`);
  if (problems.length) process.exit(1);
  console.log(`visual-repair: durable Tau boundary receipt verified; ${(tau.changed_files ?? []).length} changed file(s)`);
  process.exit(0);
}

const problems = validateTauReceipt();
if (baseline.sigma_receipt_sha256 !== sha256(readFileSync(join(REPO, sigmaRel)))) problems.push('Sigma receipt changed after Tau baseline');
const now = trackedState();
const trackedChanged = Object.keys(baseline.tracked).filter((file) => baseline.tracked[file] !== now[file]).sort();
const changed = Object.keys(baseline.scope_hashes).filter((file) =>
  !existsSync(join(REPO, file)) || baseline.scope_hashes[file] !== sha256(readFileSync(join(REPO, file)))).sort();
for (const file of trackedChanged) {
  if (now[file] === null) problems.push(`${file}: tracked file was deleted`);
  if (!allowed.includes(file)) problems.push(`${file}: changed outside Sigma authority`);
}
for (const file of changed) if (!allowed.includes(file)) problems.push(`${file}: scoped content changed outside Sigma authority`);
// These records are written by the controller/dispatcher after the baseline
// command returns, not by Tau. Keep the exemption exact: no directory-wide
// carve-out, and the Tau receipt/targets remain the only model/guard outputs.
const workflowOwned = new Set([
  `research/${run}-dispatch/tool-tau-baseline-v2.result.json`,
  `research/${run}-dispatch/tau-repair-v2.prompt.md`,
  `research/${run}-dispatch/tau-repair-v2.result.json`,
]);
const newUntracked = untrackedState().filter((file) => !(baseline.untracked ?? []).includes(file));
for (const file of newUntracked) if (file !== tauRel && file !== targetsRel && !workflowOwned.has(file))
  problems.push(`${file}: Tau created an unauthorised file`);
for (const file of changed.filter((f) => allowed.includes(f) && now[f] !== null)) {
  const before = baseline.contracts[file];
  const after = contract(file);
  if (JSON.stringify(before.frontmatter) !== JSON.stringify(after.frontmatter)) problems.push(`${file}: protected frontmatter changed`);
  if (JSON.stringify(before.headings) !== JSON.stringify(after.headings)) problems.push(`${file}: section headings changed or were removed`);
  if (after.numbered_steps < before.numbered_steps) problems.push(`${file}: numbered proof steps were removed`);
  if (after.tikz_blocks < before.tikz_blocks) problems.push(`${file}: TikZ blocks were removed`);
}
if (JSON.stringify([...(tau.changed_files ?? [])].sort()) !== JSON.stringify(changed))
  problems.push(`Tau changed_files does not equal observed changes (${changed.join(', ') || 'none'})`);
for (const problem of problems) console.error(`visual-repair: ${problem}`);
if (problems.length) process.exit(1);
const changedItems = scope.items.filter((item) => changed.includes(item.file)).map((item) => item.id).sort();
writeFileSync(targetsFile, JSON.stringify({ schema: 1, run, source: tauRel,
  changed_files: changed, items: changedItems }, null, 2) + '\n');
console.log(`visual-repair: Tau closed ${(sigma.findings ?? []).length} finding(s); ${changed.length} file(s) changed; ${changedItems.length} item(s) require paired rejudge`);
