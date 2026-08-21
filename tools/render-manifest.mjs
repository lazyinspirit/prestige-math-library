#!/usr/bin/env node
// Currency/completeness gate for real-page captures. Visual judgment remains
// Sigma's; this proves Sigma received every page and the exact current bytes.

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { REPO } from './paths.mjs';
import { runContentHash, runScope, sha256 } from './step10-lib.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
const run = value('--run');
const phase = value('--phase');
if (!run || !['initial', 'final'].includes(phase)) {
  console.error('usage: node tools/render-manifest.mjs --run <run> --phase initial|final');
  process.exit(2);
}
const file = join(REPO, 'research', `${run}-render-${phase}.json`);
if (!existsSync(file)) throw new Error(`missing research/${run}-render-${phase}.json`);
const manifest = JSON.parse(readFileSync(file, 'utf8'));
const scope = runScope(run);
const expected = scope.pages.map((p) => p.id).sort();
const actual = (manifest.captures ?? []).map((p) => p.page).sort();
const problems = [];
if (manifest.run !== run || manifest.phase !== phase) problems.push('manifest identity mismatch');
if (manifest.content_sha256 !== runContentHash(run)) problems.push('manifest content hash is stale');
if (manifest.pages_expected !== expected.length || manifest.pages_captured !== expected.length)
  problems.push(`captured ${manifest.pages_captured}/${expected.length} pages`);
if (JSON.stringify(actual) !== JSON.stringify(expected)) problems.push('captured page set differs from scope ledger');
for (const row of manifest.captures ?? []) {
  const image = join(REPO, row.image ?? '');
  if (!existsSync(image)) { problems.push(`${row.page}: image missing`); continue; }
  if (sha256(readFileSync(image)) !== row.image_sha256) problems.push(`${row.page}: image hash stale`);
  if (!(row.width > 0 && row.height > 0)) problems.push(`${row.page}: invalid dimensions`);
}
for (const problem of problems) console.error(`render-manifest: ${problem}`);
if (problems.length) process.exit(1);
console.log(`render-manifest: ${actual.length} current ${phase} page capture(s)`);
