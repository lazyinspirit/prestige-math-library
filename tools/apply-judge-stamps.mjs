#!/usr/bin/env node
// apply-judge-stamps.mjs — write `verification.judge` from configured verdicts
// ledger, for the text CURRENTLY on disk.
//
//   node tools/apply-judge-stamps.mjs --ledger research/audit/wave0-judge.jsonl \
//     --manifests research/audit/wave0-a.pages.json,... [--apply] [--report out.json]
//
// `--verify` is the engine's GATE mode (the `judge-stamps` gate at 10-close):
// change nothing, exit 1 unless the frontmatter already carries every stamp the
// ledger licenses — and no pass block the current verdicts contradict. At
// closure `level-coverage --verify-current-context` has already passed, so an
// item with NO current verdict here is a currency defect, never a normal case.
// WHY A GATE: frontier-15 closed 398/398 items in the ledger while 0 of 398
// items carried the stamp — no stage owned the stamping act, every closure gate
// read the ledger, and the owner did the stamping by hand on the VPS
// (2026-08-17). A `lane-rejected` item is the one honest skip: an adjudication
// never manufactures a pass.
//
// Published-page audit A8 has one deliberately narrower route:
//
//   JUDGE_LINEUP=terra node tools/apply-judge-stamps.mjs \
//     --ledger research/audit/wave<k>-judge.jsonl \
//     --audit-targeted-rejudges research/audit/wave<k>-targeted-judge-receipt.json \
//     [--apply] [--report out.json]
//
// Default is a DRY RUN: it prints what it would write and changes nothing.
//
// WHY THIS EXISTS. A sweep records verdicts in its ledger; nothing carried them
// into the items. After wave 0 that left 197 audited items still advertising a
// judge pass from their ORIGINAL publication lineup (glm-5.2 / gpt-5.4, July
// 2026) while the audit's fresh screen had produced verdicts nobody
// could see on the page.
//
// THE HONESTY RULE IT ENFORCES (SCHEMA §verification, CLAUDE.md): record a
// pass ONLY when every currently configured judge returned keep=true, on the
// item's CURRENT frozen context hash. Concretely:
//
//   * every configured judge keeps current text -> write/overwrite the block
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
import { JUDGE_LINEUPS, DEFAULT_LINEUP } from './models.mjs';
import { parseTerminalResolutions, terminalResolutionIsCurrent } from './step8-terminal-resolution.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : ''; };
const ledgerPath = value('--ledger');
const manifestsArg = value('--manifests');
const itemsArg = value('--items');
const targetedReceiptPath = value('--audit-targeted-rejudges');
const terminalResolutionsPath = value('--terminal-resolutions');
const reportPath = value('--report');
const apply = argv.includes('--apply');
const verify = argv.includes('--verify');
const ordinaryScopes = [manifestsArg, itemsArg, targetedReceiptPath].filter(Boolean);
if (!ledgerPath || ordinaryScopes.length !== 1
  || (verify && (apply || targetedReceiptPath))) {
  console.error('usage: node tools/apply-judge-stamps.mjs --ledger <judge.jsonl> (--manifests <a.pages.json,...> | --items <item-a,item-b> | --audit-targeted-rejudges <targeted-rejudge-receipt.json>) [--terminal-resolutions <step8.jsonl>] [--verify] [--apply] [--report <out.json>]');
  process.exit(2);
}

let LOADER;
try { LOADER = tsxLoader(); }
catch (cause) { console.error(`apply-judge-stamps: ${cause.message}`); process.exit(2); }
const today = new Date().toISOString().slice(0, 10);
const terminalParsed = parseTerminalResolutions(terminalResolutionsPath, { allowMissing: true });

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
  : itemsArg
    ? [...new Set(itemsArg.split(',').map((id) => id.trim()).filter(Boolean))]
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
// change cannot desynchronise this file again.
// The map is tools/models.mjs; this tool no longer keeps its own copy.
const lineupName = process.env.JUDGE_LINEUP ?? DEFAULT_LINEUP;
const expected = JUDGE_LINEUPS[lineupName];
if (!expected) {
  console.error(`JUDGE_LINEUP must be one of ${Object.keys(JUDGE_LINEUPS).join(', ')}; got ${lineupName}`);
  process.exit(2);
}
// A ledger a retired lane also wrote into is the normal case, not an error: rows
// from a retired lineup stay append-only evidence and never satisfy current
// coverage (CLAUDE.md §"Skeptical judge"). Stamp from the lineup's own
// configured models and ignore every other model's rows; a configured model the
// ledger never wrote at all is still a hard error, since then nothing here judged anything.
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

let contextHashes = null;
const contextHash = (id) => {
  // The item-hash fast path below normally avoids context work altogether. If
  // any residue needs clause (a), compute every scoped context in one judge.mts
  // process: one corpus read, no per-item process/load cycle, identical prompts.
  if (contextHashes === null) {
    const out = execFileSync(process.execPath,
      ['--import', LOADER, 'tools/judge.mts', '--context-hashes', ids.join(',')],
      { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
    contextHashes = JSON.parse(out).contexts;
  }
  const hash = contextHashes?.[id]?.context_sha256;
  if (typeof hash !== 'string') throw new Error(`batch context output omitted ${id}`);
  return hash;
};

// Replace an existing `  judge:` block (a mapping nested under `verification:`)
// or insert one directly after the `  precheck:` line. Definitions with no
// precheck legitimately have no `verification:` mapping at all; create that
// mapping immediately before `sources:` instead of silently skipping a licensed
// pass. Frontmatter only; the mathematical body is never touched.
const writeBlock = (text, block) => {
  const existing = /^ {2}judge:\n(?: {4}.*\n)*/m;
  if (existing.test(text)) return text.replace(existing, block);
  const precheck = /^( {2}precheck: .*\n)/m;
  if (precheck.test(text)) return text.replace(precheck, `$1${block}`);
  const verification = /^verification:\n/m;
  if (verification.test(text)) return text.replace(verification, `$&${block}`);
  const sources = /^sources:\n/m;
  if (sources.test(text)) return text.replace(sources, `verification:\n${block}sources:\n`);
  return null;
};

const result = {
  version: 1,
  at: today,
  ledger: ledgerPath,
  lanes: models,
  mode: targetedReceiptPath ? 'published-audit-targeted-rejudge' : (verify ? 'verify' : 'current-context'),
  targeted_rejudge_receipt: targetedReceiptPath || null,
  stamped: [],
  skipped: [],
};

// The whole `  judge:` mapping under `verification:` — what writeBlock replaces
// and what verify reads. Date-agnostic on purpose: a stamp's `date:` records
// WHEN, not WHAT, so a verify run the day after the apply must not demand a
// rewrite.
const judgeBlockRe = /^ {2}judge:\n(?: {4}.*\n)*/m;
const hasCurrentPassBlock = (text) => {
  const m = text.match(judgeBlockRe);
  return Boolean(m) && m[0].includes(`model: "${models.join(' + ')}"`) && m[0].includes('verdict: pass');
};
const problems = [];
for (const message of terminalParsed.errors) problems.push(`terminal resolution: ${message}`);

for (const id of ids) {
  const file = `items/${id}.md`;
  if (!existsSync(file)) {
    result.skipped.push({ id, reason: 'no-item-file' });
    problems.push(`${id}: no item file on disk`);
    continue;
  }
  const text = readFileSync(file, 'utf8');
  // `proved_here: false` is an explicit record that this library supplies no
  // proof. The paired lanes may still have checked citation fidelity and the
  // honesty of that boundary, but `verification.judge` means a local proof
  // passed. Never manufacture that claim. A stale block written by an older
  // version is mechanically removed in apply mode and is a hard error in
  // verify mode until that repair has happened.
  if (/^proved_here:\s*false\s*$/m.test(text)) {
    const stale = judgeBlockRe.test(text);
    if (stale && apply) writeFileSync(file, text.replace(judgeBlockRe, ''));
    if (stale && verify) problems.push(`${id}: a judge block sits on recorded-not-proved material`);
    result.skipped.push({ id, reason: 'recorded-not-proved', ...(stale ? { stripped_stale_pass: apply } : {}) });
    continue;
  }
  const terminal = terminalParsed.latest.get(id);
  if (terminal) {
    let now;
    try {
      now = { context_sha256: contextHash(id), item_sha256: attestedItemHash(text) };
    } catch (cause) {
      problems.push(`${id}: cannot verify terminal resolution — ${cause.message}`);
      result.skipped.push({ id, reason: 'terminal-resolution-unverifiable' });
      continue;
    }
    if (!terminalResolutionIsCurrent(terminal, now)) {
      problems.push(`${id}: terminal resolution is stale against current item/context`);
      result.skipped.push({ id, reason: 'terminal-resolution-stale' });
      continue;
    }
    const stale = judgeBlockRe.test(text);
    if (stale && apply) writeFileSync(file, text.replace(judgeBlockRe, ''));
    if (stale && verify) problems.push(`${id}: a judge pass block sits on a terminal manually resolved item`);
    result.skipped.push({ id, reason: 'terminal-manual-resolution', resolved_by: terminal.resolved_by,
      disposition: terminal.disposition, ...(stale ? { stripped_stale_pass: apply } : {}) });
    continue;
  }
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
  //
  // The pair-context hash is LAZY: clause (b) needs no subprocess and, once a
  // sweep records item_sha256, covers nearly every current verdict. If any
  // residue needs pair context, one batched judge.mts call serves the scope.
  // Both passes go
  // through the ONE shared predicate; the cheap pass hands it a context no row
  // can match, so it is a sound subset of the full check, never a third
  // reading of the rule.
  const itemNow = target ? null : attestedItemHash(text);
  let pairContext;
  const isCurrent = (row) => verdictIsCurrent(row, { context: '', item: itemNow })
    || verdictIsCurrent(row, {
      context: pairContext ??= (target ? target.context_sha256 : contextHash(id)),
      item: itemNow,
    });
  // Grouped by context hash, as the gate does, so every configured verdict comes
  // from one judging of one pair rather than being assembled across contexts.
  const groups = new Map();
  for (const r of rows) {
    if (r.id !== id || !models.includes(r.model) || typeof r.keep !== 'boolean') continue;
    if (!groups.has(r.context_sha256)) groups.set(r.context_sha256, new Map());
    groups.get(r.context_sha256).set(r.model, r);   // later row wins, as before
  }
  const eligible = [...groups.entries()].filter(([hash, byModel]) =>
    models.every((model) => byModel.has(model)
      && isCurrent({ context_sha256: hash, item_sha256: byModel.get(model).item_sha256 })));
  if (!eligible.length) {
    const seen = [...groups.values()].flatMap((byModel) => [...byModel.keys()]);
    result.skipped.push({ id, reason: 'no-current-verdict', models: models.filter((m) => !seen.includes(m)) });
    problems.push(`${id}: no current configured-judge verdict — at closure this is a currency defect, not a normal case`);
    continue;
  }
  const verdicts = models.map((model) => ({ model, row: eligible[eligible.length - 1][1].get(model) }));
  const rejecting = verdicts.filter((v) => v.row.keep === false).map((v) => v.model);
  if (rejecting.length) {
    // A rejection adjudicated nonfatal closes the LEDGER row, never the
    // display: no pass block may sit on text a current lane rejected. Build
    // route only — the audit-targeted route never strips what it did not
    // target.
    const stale = !target && judgeBlockRe.test(text);
    if (stale && apply) writeFileSync(file, text.replace(judgeBlockRe, ''));
    if (stale && verify) problems.push(`${id}: a judge block sits on an item whose current verdict is a rejection`);
    result.skipped.push({ id, reason: 'lane-rejected', models: rejecting, ...(stale ? { stripped_stale_pass: apply } : {}) });
    continue;
  }

  if (verify) {
    const missing = !hasCurrentPassBlock(text);
    if (missing) problems.push(`${id}: the ledger licenses a judge pass the frontmatter does not carry`);
    result.stamped.push({ id, changed: missing });
    continue;
  }
  const auditEvidence = target
    ? `    scope: published-audit-targeted\n    context_sha256: ${target.context_sha256}\n    item_sha256: ${target.item_sha256}\n`
    : '';
  const block = `  judge:\n    model: "${models.join(' + ')}"\n    verdict: pass\n    date: ${today}\n${auditEvidence}`;
  const next = writeBlock(text, block);
  if (next === null) { result.skipped.push({ id, reason: 'no-verification-anchor' }); continue; }
  if (next !== text && apply) writeFileSync(file, next);
  result.stamped.push({ id, changed: next !== text });
}

const byReason = {};
for (const s of result.skipped) byReason[s.reason] = (byReason[s.reason] ?? 0) + 1;
if (verify) {
  const missing = result.stamped.filter((s) => s.changed).length;
  console.log(`judge-stamps: ${ids.length} item(s) in scope — ${result.stamped.length - missing} stamped current, ${byReason['lane-rejected'] ?? 0} lane-rejected, ${byReason['terminal-manual-resolution'] ?? 0} terminal manual, ${byReason['recorded-not-proved'] ?? 0} recorded-not-proved, ${problems.length} problem(s)`);
  for (const p of problems) console.error(`ERROR ${p}`);
  if (reportPath) {
    result.problems = problems;
    writeFileSync(reportPath, `${JSON.stringify(result, null, 1)}\n`);
    console.log(`  report -> ${reportPath}`);
  }
  process.exit(problems.length ? 1 : 0);
}
console.log(`${apply ? 'APPLIED' : 'DRY RUN'} — lanes: ${models.join(' + ')}`);
console.log(`  scope ${ids.length} | stamped ${result.stamped.length} | skipped ${result.skipped.length} ${JSON.stringify(byReason)}`);
if (!apply) console.log('  (no file written; pass --apply to write)');
if (reportPath) { writeFileSync(reportPath, `${JSON.stringify(result, null, 1)}\n`); console.log(`  report -> ${reportPath}`); }
