#!/usr/bin/env node
// Validate Sigma's schema-constrained receipt against the exact capture bytes
// and run scope. The model supplies visual judgment; this tool supplies identity,
// completeness, currency, and the final hard stop.

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { REPO } from './paths.mjs';
import { runContentHash, runScope, sha256 } from './step10-lib.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
const run = value('--run');
const phase = value('--phase');
const requireApproved = argv.includes('--require-approved');
if (!run || !['initial', 'final'].includes(phase)) {
  console.error('usage: node tools/visual-adjudication.mjs --run <run> --phase initial|final [--require-approved]');
  process.exit(2);
}

const receiptRel = `research/${run}-sigma-${phase}.json`;
const manifestRel = `research/${run}-render-${phase}.json`;
const receiptPath = join(REPO, receiptRel);
const manifestPath = join(REPO, manifestRel);
const problems = [];
if (!existsSync(receiptPath)) problems.push(`missing ${receiptRel}`);
if (!existsSync(manifestPath)) problems.push(`missing ${manifestRel}`);
if (problems.length) {
  for (const problem of problems) console.error(`visual-adjudication: ${problem}`);
  process.exit(1);
}

const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
const manifestBytes = readFileSync(manifestPath);
const manifest = JSON.parse(manifestBytes);
const scope = runScope(run);
const pageIds = scope.pages.map((p) => p.id).sort();
const allowed = new Set([...scope.pages.map((p) => p.file), ...scope.items.map((i) => i.file)]);
const itemByFile = new Map(scope.items.map((i) => [i.file, i.id]));

if (receipt.run !== run || receipt.phase !== phase || receipt.adjudicator !== 'Sigma')
  problems.push('Sigma identity/run/phase mismatch');
if (receipt.capture_manifest !== manifestRel) problems.push(`capture_manifest must be ${manifestRel}`);
if (receipt.capture_manifest_sha256 !== sha256(manifestBytes)) problems.push('capture manifest hash is stale');
if (manifest.run !== run || manifest.phase !== phase) problems.push('render manifest identity mismatch');
if (manifest.content_sha256 !== runContentHash(run)) problems.push('render manifest predates current page/item/pathway content');
if (manifest.pages_expected !== pageIds.length || manifest.pages_captured !== pageIds.length)
  problems.push(`render manifest captured ${manifest.pages_captured}/${pageIds.length} pages`);
const captured = (manifest.captures ?? []).map((r) => r.page).sort();
if (JSON.stringify(captured) !== JSON.stringify(pageIds)) problems.push('render manifest page set differs from run scope');
if (JSON.stringify([...(receipt.pages_reviewed ?? [])].sort()) !== JSON.stringify(pageIds))
  problems.push('Sigma pages_reviewed differs from the exact run scope');
for (const capture of manifest.captures ?? []) {
  const image = join(REPO, capture.image ?? '');
  if (!existsSync(image)) { problems.push(`${capture.page}: screenshot missing`); continue; }
  if (sha256(readFileSync(image)) !== capture.image_sha256) problems.push(`${capture.page}: screenshot hash is stale`);
  if ((capture.dom?.renderer_errors ?? []).length && !(receipt.findings ?? []).some((f) => f.page === capture.page))
    problems.push(`${capture.page}: renderer reported errors but Sigma filed no finding`);
}
const findingIds = new Set();
for (const finding of receipt.findings ?? []) {
  if (findingIds.has(finding.finding_id)) problems.push(`duplicate finding ${finding.finding_id}`);
  findingIds.add(finding.finding_id);
  if (!pageIds.includes(finding.page)) problems.push(`${finding.finding_id}: page is outside run scope`);
  if (!allowed.has(finding.source_file)) problems.push(`${finding.finding_id}: source_file is outside run scope`);
  const expectedItem = itemByFile.get(finding.source_file);
  if (expectedItem && finding.item !== expectedItem) problems.push(`${finding.finding_id}: item does not match source_file`);
  if (!expectedItem && finding.item !== null) problems.push(`${finding.finding_id}: page-file finding must use item:null`);
  if (finding.content_preserved !== true) problems.push(`${finding.finding_id}: repair must preserve content`);
}
const approvedByCount = (receipt.findings ?? []).length === 0;
if (receipt.approved !== approvedByCount) problems.push('approved must be true exactly when findings is empty');
if (requireApproved && !receipt.approved) problems.push(`Sigma final rejected ${(receipt.findings ?? []).length} finding(s)`);
finish();

function finish() {
  for (const problem of problems) console.error(`visual-adjudication: ${problem}`);
  if (problems.length) process.exit(1);
  console.log(`visual-adjudication: Sigma ${phase} receipt current; ${(receipt.findings ?? []).length} finding(s); approved=${receipt.approved}`);
  process.exit(0);
}
