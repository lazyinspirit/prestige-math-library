#!/usr/bin/env node
// apply-judge-stamps.mjs — write `verification.judge` from a paired verdict
// ledger, for the text CURRENTLY on disk.
//
//   node tools/apply-judge-stamps.mjs --ledger research/audit/wave0-judge.jsonl \
//     --manifests research/audit/wave0-a.pages.json,... [--apply] [--report out.json]
//
// Default is a DRY RUN: it prints what it would write and changes nothing.
//
// WHY THIS EXISTS. A sweep records verdicts in its ledger; nothing carried them
// into the items. After wave 0 that left 197 audited items still advertising a
// judge pass from their ORIGINAL publication lineup (glm-5.2 / gpt-5.4, July
// 2026) while the audit's own paired screen had produced fresh verdicts nobody
// could see on the page.
//
// THE HONESTY RULE IT ENFORCES (SCHEMA §verification, CLAUDE.md): record a
// paired pass ONLY when BOTH current lanes actually returned keep=true, on the
// item's CURRENT frozen context hash. Concretely:
//
//   * both lanes keep=true on the current hash  -> write/overwrite the block
//   * anything else (a rejection, a null, a verdict against a stale hash,
//     a missing lane)                           -> LEAVE THE ITEM ALONE and
//                                                  report it
//
// An adjudication that graded a rejection nonfatal or a false positive does
// NOT manufacture a pass: the judge did not pass the text, and the ledger plus
// `wave<k>-judge-adjudications.jsonl` remain the record. This tool therefore
// cannot ever upgrade a rejection into a displayed pass — the property that
// makes it safe to run over published content.
//
// The context hash is recomputed per item through `judge.mts --context-hash`,
// the same builder the sweep attests with, so a verdict for text that has since
// changed is silently ineligible rather than quietly reused.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : ''; };
const ledgerPath = value('--ledger');
const manifestsArg = value('--manifests');
const reportPath = value('--report');
const apply = argv.includes('--apply');
if (!ledgerPath || !manifestsArg) {
  console.error('usage: node tools/apply-judge-stamps.mjs --ledger <judge.jsonl> --manifests <a.pages.json,...> [--apply] [--report <out.json>]');
  process.exit(2);
}

const LOADER = '/root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs';
const today = new Date().toISOString().slice(0, 10);

const ids = [...new Set(manifestsArg.split(',').map((s) => s.trim()).filter(Boolean)
  .flatMap((file) => JSON.parse(readFileSync(file, 'utf8'))
    .flatMap((page) => page.items.map((item) => item.id))))];

const rows = readFileSync(ledgerPath, 'utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line));
const models = [...new Set(rows.map((r) => r.model))].sort();
if (models.length !== 2) {
  console.error(`expected exactly two judge lanes in ${ledgerPath}, found: ${models.join(', ') || 'none'}`);
  process.exit(2);
}

const contextHash = (id) => {
  const out = execFileSync(process.execPath, ['--import', LOADER, 'tools/judge.mts', `items/${id}.md`, '--context-hash'], { encoding: 'utf8' });
  return JSON.parse(out).context_sha256;
};

// Replace an existing `  judge:` block (a mapping nested under `verification:`)
// or insert one directly after the `  precheck:` line. Frontmatter only; the
// mathematical body is never touched.
const writeBlock = (text, block) => {
  const existing = /^ {2}judge:\n(?: {4}.*\n)*/m;
  if (existing.test(text)) return text.replace(existing, block);
  const precheck = /^( {2}precheck: .*\n)/m;
  if (precheck.test(text)) return text.replace(precheck, `$1${block}`);
  return null;
};

const result = { version: 1, at: today, ledger: ledgerPath, lanes: models, stamped: [], skipped: [] };

for (const id of ids) {
  const file = `items/${id}.md`;
  if (!existsSync(file)) { result.skipped.push({ id, reason: 'no-item-file' }); continue; }
  const current = contextHash(id);
  const verdicts = models.map((model) => ({
    model,
    row: [...rows].reverse().find((r) => r.id === id && r.model === model && r.context_sha256 === current && typeof r.keep === 'boolean'),
  }));
  const missing = verdicts.filter((v) => !v.row).map((v) => v.model);
  if (missing.length) { result.skipped.push({ id, reason: 'no-current-verdict', models: missing }); continue; }
  const rejecting = verdicts.filter((v) => v.row.keep === false).map((v) => v.model);
  if (rejecting.length) { result.skipped.push({ id, reason: 'lane-rejected', models: rejecting }); continue; }

  const block = `  judge:\n    model: "${models.join(' + ')}"\n    verdict: pass\n    date: ${today}\n`;
  const text = readFileSync(file, 'utf8');
  const next = writeBlock(text, block);
  if (next === null) { result.skipped.push({ id, reason: 'no-verification-anchor' }); continue; }
  if (next !== text && apply) writeFileSync(file, next);
  result.stamped.push({ id, changed: next !== text });
}

const byReason = {};
for (const s of result.skipped) byReason[s.reason] = (byReason[s.reason] ?? 0) + 1;
console.log(`${apply ? 'APPLIED' : 'DRY RUN'} — lanes: ${models.join(' + ')}`);
console.log(`  scope ${ids.length} | stamped ${result.stamped.length} | skipped ${result.skipped.length} ${JSON.stringify(byReason)}`);
if (!apply) console.log('  (no file written; pass --apply to write)');
if (reportPath) { writeFileSync(reportPath, `${JSON.stringify(result, null, 1)}\n`); console.log(`  report -> ${reportPath}`); }
