#!/usr/bin/env node
// apply-judge-stamps.mjs — write `verification.judge` from a paired verdict
// ledger, for the text CURRENTLY on disk.
//
//   node tools/apply-judge-stamps.mjs --ledger research/audit/wave0-judge.jsonl \
//     --manifests research/audit/wave0-a.pages.json,... [--apply] [--report out.json]
//
// Published-page audit A8 has one deliberately narrower route:
//
//   JUDGE_LINEUP=deepseek+terra node tools/apply-judge-stamps.mjs \
//     --ledger research/audit/wave<k>-judge.jsonl \
//     --audit-targeted-rejudges research/audit/wave<k>-targeted-judge-receipt.json \
//     [--apply] [--report out.json]
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
// The normal route recomputes each item's context hash through `judge.mts`, the
// same builder the sweep attests with.  The audit-targeted route instead
// requires an Alpha-recorded item-file SHA-256 and the exact paired rejudge
// context.  This is intentional: later edits to an unrelated companion-page
// summary must not turn the targeted-only A8 rule into a whole-wave rejudge.
// It still refuses an item-text change, a missing lane, or any rejection.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tsxLoader } from './paths.mjs';
import { itemHashJudge } from './item-hash.mjs';
import { verdictIsCurrent } from './judge-currency.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : ''; };
const ledgerPath = value('--ledger');
const manifestsArg = value('--manifests');
const targetedReceiptPath = value('--audit-targeted-rejudges');
const reportPath = value('--report');
const apply = argv.includes('--apply');
if (!ledgerPath || Boolean(manifestsArg) === Boolean(targetedReceiptPath)) {
  console.error('usage: node tools/apply-judge-stamps.mjs --ledger <judge.jsonl> (--manifests <a.pages.json,...> | --audit-targeted-rejudges <targeted-rejudge-receipt.json>) [--apply] [--report <out.json>]');
  process.exit(2);
}

let LOADER;
try { LOADER = tsxLoader(); }
catch (cause) { console.error(`apply-judge-stamps: ${cause.message}`); process.exit(2); }
const today = new Date().toISOString().slice(0, 10);

// A stamp is evidence about the item, not a mathematical change to it.  Exclude
// only the block this tool writes so applying/reapplying a stamp cannot make its
// own target receipt fail.  Any other frontmatter or body change remains bound.
// One definition, in tools/item-hash.mjs, shared with judge.mts: a second copy
// here and in the tool that WRITES the hash is how the two silently disagree.
const attestedItemHash = itemHashJudge;
let targeted = new Map();
const ids = manifestsArg
  ? [...new Set(manifestsArg.split(',').map((s) => s.trim()).filter(Boolean)
    .flatMap((file) => JSON.parse(readFileSync(file, 'utf8'))
      .flatMap((page) => page.items.map((item) => item.id))))]
  : (() => {
    let receipt;
    try { receipt = JSON.parse(readFileSync(targetedReceiptPath, 'utf8')); }
    catch (cause) {
      console.error(`cannot read audit targeted-rejudge receipt ${targetedReceiptPath}: ${cause.message}`);
      process.exit(2);
    }
    if (receipt.version !== 1 || receipt.mode !== 'published-audit-targeted-rejudge' || !Array.isArray(receipt.targets)) {
      console.error(`${targetedReceiptPath}: expected {version: 1, mode: "published-audit-targeted-rejudge", targets: [...]}`);
      process.exit(2);
    }
    for (const target of receipt.targets) {
      if (!target || typeof target.id !== 'string' || !target.id ||
        typeof target.context_sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(target.context_sha256) ||
        typeof target.item_sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(target.item_sha256)) {
        console.error(`${targetedReceiptPath}: every target needs id, context_sha256, and item_sha256`);
        process.exit(2);
      }
      if (targeted.has(target.id)) {
        console.error(`${targetedReceiptPath}: duplicate target ${target.id}`);
        process.exit(2);
      }
      targeted.set(target.id, target);
    }
    if (!targeted.size) {
      console.error(`${targetedReceiptPath}: targets must not be empty`);
      process.exit(2);
    }
    return [...targeted.keys()];
  })();

const rows = readFileSync(ledgerPath, 'utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line));
// The lineup this tool stamps for is configuration, not a constant. Resolve it
// the way judge.mts, judge-sweep.mjs, judge-compare.mjs and level-coverage.mjs
// already do, so one env var stays the single source of truth and a future lane
// change cannot desynchronise this file again. It had drifted: only
// deepseek+terra existed here after the owner moved the build to
// deepseek+sonnet (2026-08-17), so the current lineup could not be stamped at
// all.
const LINEUPS = Object.freeze({
  'deepseek+terra': ['deepseek-v4-pro', 'gpt-5.6-terra'],
  'deepseek+sonnet': ['deepseek-v4-pro', 'claude-sonnet-5'],
});
const lineupName = process.env.JUDGE_LINEUP ?? 'deepseek+sonnet';
const expected = LINEUPS[lineupName];
if (!expected) {
  console.error(`JUDGE_LINEUP must be one of ${Object.keys(LINEUPS).join(', ')}; got ${lineupName}`);
  process.exit(2);
}
// A ledger a retired lane also wrote into is the normal case, not an error: rows
// from a retired lineup stay append-only evidence and never satisfy current
// coverage (CLAUDE.md §"Paired skeptical judges"). Stamp from the lineup's own
// two lanes and ignore every other lane's rows; a lane the ledger never wrote at
// all is still a hard error, since then nothing here judged anything.
const models = [...expected];
const ledgerLanes = new Set(rows.map((r) => r.model));
const absent = models.filter((m) => !ledgerLanes.has(m));
if (absent.length) {
  console.error(`${ledgerPath} carries no rows for the ${lineupName} lane(s): ${absent.join(', ')}`);
  process.exit(2);
}
if (targetedReceiptPath && [...ledgerLanes].some((m) => !models.includes(m))) {
  console.error(`audit targeted rejudge stamps require the ${lineupName} lanes (${expected.join(', ')}); found: ${[...ledgerLanes].sort().join(', ')}`);
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

const result = {
  version: 1,
  at: today,
  ledger: ledgerPath,
  lanes: models,
  mode: targetedReceiptPath ? 'published-audit-targeted-rejudge' : 'current-context',
  targeted_rejudge_receipt: targetedReceiptPath || null,
  stamped: [],
  skipped: [],
};

for (const id of ids) {
  const file = `items/${id}.md`;
  if (!existsSync(file)) { result.skipped.push({ id, reason: 'no-item-file' }); continue; }
  const text = readFileSync(file, 'utf8');
  const target = targeted.get(id);
  if (target && attestedItemHash(text) !== target.item_sha256) {
    result.skipped.push({ id, reason: 'item-hash-changed-since-targeted-rejudge' });
    continue;
  }
  // Currency is tools/judge-currency.mjs, the predicate level-coverage.mjs and
  // judge-sweep.mjs already share: a verdict is current against the CURRENT pair
  // context, or against byte-identical text of that item (owner, 2026-08-06).
  // This tool read clause (a) alone, so on a level where any step-9 repair moved
  // a page's pair context every untouched page-mate stamped as unjudged — 0 of
  // 398 on frontier-15, while the receipt gate read all 398 as covered. Three
  // readings of one rule was the defect judge-currency.mjs was written to end.
  // The audit-targeted route stays clause (a) only: its whole point is that the
  // Alpha-attested pair context and item hash are BOTH exact.
  const now = target
    ? { context: target.context_sha256, item: null }
    : { context: contextHash(id), item: attestedItemHash(text) };
  // Grouped by context hash, as the gate does, so both lanes' verdicts come from
  // one judging of one pair rather than being assembled across two.
  const groups = new Map();
  for (const r of rows) {
    if (r.id !== id || !models.includes(r.model) || typeof r.keep !== 'boolean') continue;
    if (!groups.has(r.context_sha256)) groups.set(r.context_sha256, new Map());
    groups.get(r.context_sha256).set(r.model, r);   // later row wins, as before
  }
  const eligible = [...groups.entries()].filter(([hash, byModel]) =>
    models.every((model) => byModel.has(model)
      && verdictIsCurrent({ context_sha256: hash, item_sha256: byModel.get(model).item_sha256 }, now)));
  if (!eligible.length) {
    const seen = [...groups.values()].flatMap((byModel) => [...byModel.keys()]);
    result.skipped.push({ id, reason: 'no-current-verdict', models: models.filter((m) => !seen.includes(m)) });
    continue;
  }
  const verdicts = models.map((model) => ({ model, row: eligible[eligible.length - 1][1].get(model) }));
  const rejecting = verdicts.filter((v) => v.row.keep === false).map((v) => v.model);
  if (rejecting.length) { result.skipped.push({ id, reason: 'lane-rejected', models: rejecting }); continue; }

  const auditEvidence = target
    ? `    scope: published-audit-targeted\n    context_sha256: ${current}\n    item_sha256: ${target.item_sha256}\n`
    : '';
  const block = `  judge:\n    model: "${models.join(' + ')}"\n    verdict: pass\n    date: ${today}\n${auditEvidence}`;
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
