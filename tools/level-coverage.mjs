#!/usr/bin/env node
// level-coverage.mjs — hard coverage gate for a completed future A/B level.
//
// node tools/level-coverage.mjs \
//   --contracts research/level<n>-proof-contracts.json \
//   --judge-ledger research/level<n>-judge.jsonl \
//   --judge-adjudications research/level<n>-judge-adjudications.jsonl \
//   --audit-receipt research/level<n>-audit-coverage.json \
//   [--verify-current-context] research/level<n>-batch-*.pages.json
//
// The batch manifests are the scope of record.  This gate prevents four silent
// omissions: an authored item without component provenance, a proof omitted from the
// contract, an item omitted from either judge lane, and an Alpha audit receipt
// that no longer matches the actual in-flight items and relationships.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tsxLoader } from './paths.mjs';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const verifyCurrent = argv.includes('--verify-current-context');
const contractsPath = option('--contracts');
const judgePath = option('--judge-ledger');
const judgeAdjudicationsPath = option('--judge-adjudications');
const judgeTargetsPath = option('--judge-targets');
const receiptPath = option('--audit-receipt');
const spineReceiptPath = option('--spine-receipt');
const templatePath = option('--template');
// --judge-only: the JUDGE CLOSURE half of this gate, on its own.
//
// The full gate needs a merged contract, a spine receipt and a completed audit
// receipt, none of which exist at step 7 or step 8 — so the only place it could
// run was the very end of a build, which is exactly where frontier-14 found it
// red with nothing left to do about it. Judge closure is answerable much
// earlier: it needs the manifests, the ledger and the items on disk.
//
// Splitting it out here rather than writing a second tool is deliberate. The
// predicate is subtle (context hash vs item hash, clause (a) vs clause (b),
// exact-hash adjudication matching) and a second implementation of it would
// drift from this one and then disagree with it at 3am.
const judgeOnly = argv.includes('--judge-only');
// Step 7 runs before any adjudication exists, so an unadjudicated rejection is
// the expected state there, not a defect. It is a hard error everywhere else.
const allowUnadjudicated = argv.includes('--allow-unadjudicated');
// Step 8 repairs items, and a repaired item's text no longer matches the verdict
// that condemned it — so it correctly has no current pair. That is the rejudge
// stage's input, not step 8's failure. Allowed only there; by the rejudge gate
// and every gate after it, an item with no current pair is a hole.
const allowPendingRejudge = argv.includes('--allow-pending-rejudge');
const outPath = option('--out');
const batchFiles = argv.filter((arg, index) => {
  if (arg.startsWith('--')) return false;
  return !['--contracts', '--judge-ledger', '--judge-adjudications', '--judge-targets', '--audit-receipt', '--spine-receipt', '--template', '--out'].includes(argv[index - 1]);
});
if (!batchFiles.length) usage();
if (judgeOnly) {
  if (receiptPath || templatePath) { console.error('--judge-only does not take an audit receipt; it checks judge closure alone'); process.exit(2); }
  if (!judgePath) { console.error('--judge-only requires --judge-ledger'); process.exit(2); }
  // Without this the check compares verdicts against whatever context they were
  // cast against, which is trivially satisfied and answers nothing. A closure
  // gate that cannot fail is worse than no gate: it reports green.
  if (!verifyCurrent) { console.error('--judge-only requires --verify-current-context; otherwise it checks nothing'); process.exit(2); }
} else if ((!receiptPath && !templatePath) || (receiptPath && templatePath)) usage();

const errors = [];
const warnings = [];
const error = (code, message, id = null) => errors.push({ code, message, id });
const warn = (code, message, id = null) => warnings.push({ code, message, id });
// JUDGE_LINEUP mirrors tools/judge.mts and tools/judge-sweep.mjs: the build
// default is deepseek+terra, and the published-page audit (AUDIT-WORKFLOW.md)
// verifies the same pairs on the current frozen context. Historical rows remain
// evidence only: coverage is per frozen context, not per model name.
const JUDGE_LINEUPS = Object.freeze({
  'deepseek+terra': ['deepseek-v4-pro', 'gpt-5.6-terra'],
});
const lineupName = process.env.JUDGE_LINEUP ?? 'deepseek+terra';
const JUDGES = JUDGE_LINEUPS[lineupName];
if (!JUDGES) { console.error(`JUDGE_LINEUP must be one of ${Object.keys(JUDGE_LINEUPS).join(', ')}`); process.exit(2); }
// --audit: published-page audit scope (AUDIT-WORKFLOW.md). A legacy published
// item whose retro-tag exposes an ai-generated statement in the dependency
// backbone is a genrisk finding to disposition, not an instant gate failure —
// the future-batch prohibition cannot be applied retroactively without either
// blocking every wave on history or inviting dishonest retagging. Everything
// else (provenance coverage, contracts, receipts, judge pairs) stays hard.
const auditMode = argv.includes('--audit');
if (judgeTargetsPath && !auditMode) {
  console.error('--judge-targets is reserved for the published-page audit');
  process.exit(2);
}

function split(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { fm: match[1], body: match[2] } : { fm: '', body: source };
}
function scalar(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}
function nested(fm, parent, child) {
  const start = fm.search(new RegExp(`^${parent}:[ \\t]*(?:#.*)?$`, 'm'));
  if (start < 0) return undefined;
  const rest = fm.slice(start);
  const match = rest.match(new RegExp(`^[ \\t]+${child}:[ \\t]*(.*)$`, 'm'));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}
function list(fm, key) {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0;
  for (let index = open; index < fm.length; index += 1) {
    if (fm[index] === '[') depth += 1;
    else if (fm[index] === ']' && --depth === 0) {
      return fm.slice(open + 1, index).split(',')
        .map((value) => value.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
    }
  }
  return [];
}
function option(flag) {
  const index = argv.indexOf(flag);
  return index >= 0 ? argv[index + 1] : undefined;
}
function resolvePath(path) { return path.startsWith('/') ? path : join(process.cwd(), path); }
function loadJson(path, code) {
  try { return JSON.parse(readFileSync(resolvePath(path), 'utf8')); }
  catch (cause) { error(code, `${path}: ${cause.message}`); return null; }
}
function isProofBearing(body) {
  return /^## (?:Proof|Refutation|Counterexample|Verification)\s*$/m.test(body);
}

const items = new Map();
const aliases = new Map();
for (const file of readdirSync(join(REPO, 'items')).sort()) {
  if (!file.endsWith('.md')) continue;
  const source = readFileSync(join(REPO, 'items', file), 'utf8');
  const { fm, body } = split(source);
  const id = scalar(fm, 'id') ?? basename(file, '.md');
  items.set(id, {
    id,
    file: `items/${file}`,
    body,
    provenance: {
      statement: nested(fm, 'provenance', 'statement'),
      proof: nested(fm, 'provenance', 'proof'),
    },
    deps: list(fm, 'deps'),
    justified_by: list(fm, 'justified_by'),
    forward_refs: list(fm, 'forward_refs'),
    external_refs: list(fm, 'external_refs'),
  });
  for (const alias of list(fm, 'aliases')) aliases.set(alias, id);
}
const resolve = (id) => items.has(id) ? id : aliases.get(id);

const scope = [];
const seen = new Set();
const plannedDeps = new Map();
for (const file of batchFiles) {
  const manifest = loadJson(file, 'batch-read');
  if (!Array.isArray(manifest)) continue;
  for (const page of manifest) for (const entry of page?.items ?? []) {
    const id = typeof entry === 'string' ? entry : entry?.id;
    if (typeof id !== 'string' || !id) { error('batch-item-shape', `${file}: page ${page?.id ?? '?'} contains an item without an id`); continue; }
    if (seen.has(id)) { error('batch-duplicate-item', `${id} appears more than once in the supplied batch manifests`, id); continue; }
    seen.add(id);
    scope.push(id);
    if (!Array.isArray(entry?.deps)) { if (!judgeOnly) error('batch-deps-missing', `${file}: ${id} needs its planned deps array for post-authoring reconciliation`, id); }
    else plannedDeps.set(id, entry.deps.map((dep) => resolve(dep) ?? dep).sort());
  }
}
scope.sort();
let judgeScope = scope;
if (judgeTargetsPath) {
  const targetReceipt = loadJson(judgeTargetsPath, 'judge-targets-read');
  if (targetReceipt) {
    if (targetReceipt.version !== 1 || targetReceipt.mode !== 'published-audit-repair-targets' || !Array.isArray(targetReceipt.targets)) {
      error('judge-targets-shape', `${judgeTargetsPath}: expected {version:1, mode:"published-audit-repair-targets", targets:[...]}`);
      judgeScope = [];
    } else {
      const ids = targetReceipt.targets.map((target) => typeof target === 'string' ? target : target?.id);
      if (!ids.length || ids.some((id) => typeof id !== 'string' || !id) || new Set(ids).size !== ids.length) {
        error('judge-targets-shape', `${judgeTargetsPath}: targets must name at least one unique item id`);
        judgeScope = [];
      } else {
        const outside = ids.filter((id) => !scope.includes(id));
        if (outside.length) error('judge-targets-outside-scope', `${judgeTargetsPath}: ${outside.join(', ')} are outside the supplied audit manifests`);
        judgeScope = ids.filter((id) => scope.includes(id)).sort();
      }
    }
  } else {
    judgeScope = [];
  }
}
for (const id of scope) {
  const item = items.get(resolve(id) ?? id);
  if (!item) error('scope-item-missing', `${id} is declared by a batch but has no item file`, id);
  else if (!judgeOnly) {
    if (!item.provenance.statement || !item.provenance.proof)
      error('provenance-missing', `${item.file}: in-flight level coverage requires provenance.statement and provenance.proof`, item.id);
    // A final independent backstop for the future-scope policy: a dependency
    // consumes the target's claim, not its proof. Therefore an AI-generated
    // proof is immaterial here, but an AI-generated Statement/Construction is
    // never eligible as a deps target.
    for (const raw of item.deps) {
      const target = items.get(resolve(raw) ?? raw);
      if (target?.provenance.statement === 'ai-generated') {
        const report = auditMode ? warn : error;
        report(
          'ai-generated-statement-dependency',
          item.file + ': ' + item.id + ' depends on ' + target.id
            + ', whose provenance.statement is ai-generated'
            + (auditMode ? ' (legacy audit scope: requires a genrisk.mjs disposition for the seed)' : ''),
          item.id,
        );
      }
    }
  }
}
const proofScope = scope.filter((id) => isProofBearing(items.get(resolve(id) ?? id)?.body ?? ''));

// Contracts must cover every actual proof-bearing item, not merely the subset a
// batch author remembered to put in its own contract file.
if (!contractsPath && receiptPath) error('contracts-missing', '--contracts is required when validating an audit receipt');
const contracts = contractsPath ? loadJson(contractsPath, 'contracts-read') : null;
if (contracts) {
  if (contracts.version !== 1 || !Array.isArray(contracts.scope) || !contracts.contracts || typeof contracts.contracts !== 'object') {
    error('contracts-shape', `${contractsPath}: expected a version-1 merged proof contract`);
  } else {
    const declared = new Set(contracts.scope);
    for (const id of proofScope) if (!declared.has(id) || !contracts.contracts[id]) error('contract-missing-proof', `${id} is proof-bearing but absent from the merged contract`, id);
    for (const id of declared) if (!proofScope.includes(id)) warn('contract-extra-scope', `${id} is in the merged contract but is not proof-bearing in this level`);
  }
}

// A deterministic manifest hash binds Alpha's receipt to every current
// relationship, including non-dependency forward/discharge/external links.
const relationships = [];
const planDrift = [];
for (const source of scope) {
  const item = items.get(resolve(source) ?? source);
  if (!item) continue;
  const actualDeps = item.deps.map((dep) => resolve(dep) ?? dep).sort();
  const planned = plannedDeps.get(source) ?? null;
  if (!planned || JSON.stringify(planned) !== JSON.stringify(actualDeps)) {
    planDrift.push({ id: item.id, planned_deps: planned ?? null, actual_deps: actualDeps });
  }
  for (const [edge_type, values] of Object.entries({
    dependency: item.deps,
    well_definedness_discharge: item.justified_by,
    forward_ref: item.forward_refs,
    external_mention: item.external_refs,
  })) {
    for (const raw of values) relationships.push({ source: item.id, target: resolve(raw) ?? raw, edge_type });
  }
}
relationships.sort((a, b) => a.source.localeCompare(b.source) || a.target.localeCompare(b.target) || a.edge_type.localeCompare(b.edge_type));
const manifest = { scope, proof_scope: proofScope, relationships, plan_drift: planDrift };
const manifestSha256 = createHash('sha256').update(JSON.stringify(manifest)).digest('hex');

if (templatePath) {
  const template = {
    version: 1,
    reviewer: '',
    manifest_sha256: manifestSha256,
    item_scope: scope,
    proof_scope: proofScope,
    plan_reconciliation: planDrift.map((entry) => ({ ...entry, reason: '' })),
    attestation: '',
  };
  writeFileSync(resolvePath(templatePath), `${JSON.stringify(template, null, 2)}\n`);
}

if (receiptPath) {
  const receipt = loadJson(receiptPath, 'audit-receipt-read');
  if (receipt) {
    if (receipt.version !== 1) error('audit-receipt-version', `${receiptPath}: version must be 1`);
    if (typeof receipt.reviewer !== 'string' || !receipt.reviewer.trim()) error('audit-receipt-reviewer', `${receiptPath}: reviewer is required`);
    if (receipt.manifest_sha256 !== manifestSha256) error('audit-receipt-manifest', `${receiptPath}: manifest hash does not match actual current scope/relationships`);
    if (JSON.stringify([...(receipt.item_scope ?? [])].sort()) !== JSON.stringify(scope)) error('audit-receipt-item-scope', `${receiptPath}: item_scope does not match actual batch scope`);
    if (JSON.stringify([...(receipt.proof_scope ?? [])].sort()) !== JSON.stringify(proofScope)) error('audit-receipt-proof-scope', `${receiptPath}: proof_scope does not match actual proof-bearing scope`);
    if (typeof receipt.attestation !== 'string' || !receipt.attestation.trim()) error('audit-receipt-attestation', `${receiptPath}: a concrete audit attestation is required`);
    if (!Array.isArray(receipt.plan_reconciliation)) error('audit-receipt-plan-reconciliation', `${receiptPath}: plan_reconciliation must account for every authored dependency drift`);
    else {
      const reconciled = new Map();
      for (const entry of receipt.plan_reconciliation) {
        if (!entry || typeof entry.id !== 'string') { error('audit-receipt-plan-reconciliation-shape', `${receiptPath}: each plan reconciliation needs an id`); continue; }
        if (reconciled.has(entry.id)) error('audit-receipt-plan-reconciliation-duplicate', `${receiptPath}: duplicate plan reconciliation for ${entry.id}`);
        reconciled.set(entry.id, entry);
        if (typeof entry.reason !== 'string' || !entry.reason.trim()) error('audit-receipt-plan-reconciliation-reason', `${receiptPath}: ${entry.id} needs a concrete drift reason`);
      }
      for (const drift of planDrift) {
        const entry = reconciled.get(drift.id);
        if (!entry || JSON.stringify(entry.planned_deps ?? null) !== JSON.stringify(drift.planned_deps) || JSON.stringify(entry.actual_deps ?? null) !== JSON.stringify(drift.actual_deps)) {
          error('audit-receipt-plan-reconciliation-missing', `${receiptPath}: ${drift.id} does not accurately reconcile its planned and actual deps`, drift.id);
        }
      }
      for (const id of reconciled.keys()) if (!planDrift.some((drift) => drift.id === id)) warn('audit-receipt-plan-reconciliation-extra', `${receiptPath}: ${id} has no current dependency drift`);
    }
  }
}

if (!spineReceiptPath && receiptPath) error('spine-receipt-missing', '--spine-receipt is required when validating a completed level');
if (spineReceiptPath) {
  const result = spawnSync(process.execPath, ['tools/spine-audit.mjs', '--receipt', spineReceiptPath], {
    cwd: REPO,
    encoding: 'utf8',
    timeout: 120_000,
  });
  if (result.status !== 0) error('spine-receipt-invalid', `${spineReceiptPath}: ${(result.stderr || result.stdout || 'spine audit failed').trim()}`);
}

if (!judgePath && receiptPath) error('judge-ledger-missing', '--judge-ledger is required when validating an audit receipt');
const verdicts = new Map(); // id -> context hash -> model -> latest usable verdict
if (judgePath && existsSync(resolvePath(judgePath))) {
  for (const line of readFileSync(resolvePath(judgePath), 'utf8').split(/\r?\n/)) {
    if (!line.trim()) continue;
    let record;
    try { record = JSON.parse(line); } catch { continue; }
    if (!judgeScope.includes(record?.id) || !JUDGES.includes(record?.model) || typeof record?.context_sha256 !== 'string') continue;
    if (record.keep !== true && record.keep !== false) continue;
    if (!verdicts.has(record.id)) verdicts.set(record.id, new Map());
    const byContext = verdicts.get(record.id);
    if (!byContext.has(record.context_sha256)) byContext.set(record.context_sha256, new Map());
    const byModel = byContext.get(record.context_sha256);
    const prior = byModel.get(record.model);
    if (!prior || String(record.at ?? '') >= String(prior.at ?? '')) byModel.set(record.model, record);
  }
} else if (judgePath) {
  error('judge-ledger-read', `${judgePath}: file does not exist`);
}

// Alpha's verdict distinguishes a genuine fatal defect from a strict but
// nonfatal citation/gap finding.  It is keyed to the exact prompt context, so
// a decision about pre-repair text can never clear a changed item.
const judgeOutcomes = new Map();
const judgeOutcomeKey = (id, model, context) => `${id}\u0000${model}\u0000${context}`;
if (judgeAdjudicationsPath) {
  if (!existsSync(resolvePath(judgeAdjudicationsPath))) {
    error('judge-adjudications-read', `${judgeAdjudicationsPath}: file does not exist`);
  } else {
    for (const [index, line] of readFileSync(resolvePath(judgeAdjudicationsPath), 'utf8').split(/\r?\n/).filter(Boolean).entries()) {
      let record;
      try { record = JSON.parse(line); } catch {
        error('judge-adjudication-json', `${judgeAdjudicationsPath}:${index + 1}: invalid JSON`);
        continue;
      }
      const validOutcome = ['confirmed_fatal', 'confirmed_nonfatal', 'false_positive'].includes(record.outcome);
      const validFatalType = ['logic', 'dependency_citation', 'other'].includes(record.defect_type);
      if (
        typeof record.id !== 'string' || !JUDGES.includes(record.model) ||
        typeof record.context_sha256 !== 'string' || !record.context_sha256 || !validOutcome ||
        (record.outcome === 'confirmed_fatal' && !validFatalType)
      ) {
        error('judge-adjudication-shape', `${judgeAdjudicationsPath}:${index + 1}: requires {id, model, context_sha256, outcome, item_sha256}; confirmed_fatal also needs defect_type`);
        continue;
      }
      // R1 (owner, 2026-08-03): the text state the decision was made against.
      // tools/step8-guard.mjs matches a confirmed_fatal row against it to decide
      // whether a step-8 edit was licensed; without it a fatal row would license
      // every edit forever and a nonfatal polish could not be distinguished from
      // a fatal repair. Forward-looking: ledgers written before R1 do not carry
      // it, and their levels are published rather than re-gated.
      if (typeof record.item_sha256 !== 'string' || !/^[0-9a-f]{64}$/.test(record.item_sha256)) {
        error('judge-adjudication-unhashed',
          `${judgeAdjudicationsPath}:${index + 1}: ${record.id} (${record.outcome}) needs item_sha256, ` +
          'the full sha256 of the normalized item text (verification block excluded) at adjudication time', record.id);
        continue;
      }
      judgeOutcomes.set(judgeOutcomeKey(record.id, record.model, record.context_sha256), record);
    }
  }
}

function currentContextHash(id) {
  // Missing tsx is an environment failure, not a coverage verdict: report it as
  // one error against this item rather than throwing out of the whole gate.
  let loader;
  try { loader = tsxLoader(); }
  catch (cause) { error('context-hash', `${id}: ${cause.message}`, id); return null; }
  const result = spawnSync(process.execPath, ['--import', loader, 'tools/judge.mts', `items/${id}.md`, '--context-hash'], {
    cwd: REPO,
    encoding: 'utf8',
    timeout: 120_000,
  });
  if (result.status !== 0) {
    error('context-hash', `${id}: judge context hash failed: ${(result.stderr || result.stdout || 'unknown failure').trim()}`, id);
    return null;
  }
  try {
    const row = JSON.parse(result.stdout);
    return { context: row.context_sha256, item: row.item_sha256 ?? null };
  }
  catch { error('context-hash', `${id}: judge context hash output was not JSON`, id); return null; }
}

// COVERAGE FOLLOWS THE ITEM, NOT THE PAGE.
//
// The judge's context unit is the A/B PAIR — an item is judged with its whole
// page and companion in full, which is what lets a judge catch a claim its own
// siblings falsify. A consequence nobody had costed: `context_sha256` moves when
// ANY item on the pair is edited, so repairing one proof staled the verdicts of
// every item beside it.
//
// Measured, wave 5 A8: 2 repairs demanded a fresh pair for all 31 items on the
// pair, 12 of which cite the repaired items nowhere, not even transitively. Over
// four rounds, 10 real repairs cost ~130 rejudge calls, and each round's repairs
// staled the round before. That is not extra rigour — a judge re-reading an
// unchanged proof against an unchanged argument returns the same verdict, and
// pays for it.
//
// So an item is covered when EITHER
//   (a) its verdicts were cast against the CURRENT pair context — strictly what
//       was checked before, and still the strongest evidence; or
//   (b) its OWN text is byte-identical to what those verdicts were cast against.
//       The proof the judge read is the proof on disk; only a neighbour moved.
//
// (b) is not a relaxation invented here. AUDIT-WORKFLOW.md §9 and CLAUDE.md
// already require audit A8 to "re-run both judges ONLY ON WHAT CHANGED", with an
// item SHA-256 recorded "so the stamp itself and a later unrelated companion-page
// edit cannot stale it". The field simply was never written to the ledger, so
// this gate had nothing to honour the rule with. judge.mts now records it.
//
// In published-audit mode with --judge-targets, this loop is deliberately the
// exact repair set rather than the whole manifest. A2/A6 provide whole-wave
// reading coverage; A7 supplies paired REJUDGE evidence only for actual repairs.
// Legacy rows predating item_sha256 fall back to (a) alone, which is strict.
// The three closure sets, named so a later stage can act on them mechanically.
// frontier-14's step 8 named its 23 rejudge targets in a markdown table, and the
// rejudge never ran: nothing downstream could read a table. A machine-readable
// receipt is what turns "these need rejudging" into a dispatch.
const needsRejudge = [];      // no current verdict pair — repaired, or never judged
const unadjudicated = [];     // current rejection, no exact-hash Alpha outcome
const openFatal = [];         // Alpha confirmed fatal against the text on disk
const judgeCoverage = [];
for (const id of judgePath ? judgeScope : []) {
  const contexts = verdicts.get(id) ?? new Map();
  const now = verifyCurrent ? currentContextHash(id) : null;
  const current = now?.context ?? null;
  const currentItem = now?.item ?? null;
  const coversCurrent = ([hash, byModel]) => {
    if (!verifyCurrent) return true;
    if (hash === current) return true;
    // (b): every lane's verdict was cast against this exact item text.
    return Boolean(currentItem)
      && JUDGES.every((model) => byModel.get(model)?.item_sha256 === currentItem);
  };
  const eligible = [...contexts.entries()].filter((entry) =>
    coversCurrent(entry) && JUDGES.every((model) => entry[1].has(model)));
  if (!eligible.length) {
    needsRejudge.push(id);
    (allowPendingRejudge ? warn : error)('judge-coverage-missing', `${id}: no complete ${JUDGES.join('/')} verdict pair${verifyCurrent ? ' for the current frozen context, and none cast against the item\'s current text' : ''}`, id);
    continue;
  }
  eligible.sort((a, b) => Math.max(...JUDGES.map((m) => String(a[1].get(m).at ?? ''))) < Math.max(...JUDGES.map((m) => String(b[1].get(m).at ?? ''))) ? 1 : -1);
  const [hash, byModel] = eligible[0];
  const models = Object.fromEntries(JUDGES.map((model) => [model, byModel.get(model).keep]));
  // A paired run is coverage, not unchecked clearance.  Each current rejection
  // must either be independently classified by Alpha as nonfatal/false-positive
  // or be repaired and rejudged.  Confirmed fatal and unadjudicated rejections
  // remain hard stops; this preserves the fatal-error gate while honoring the
  // workflow's explicit <30-second nonfatal-gap policy.
  if (!JUDGES.every((model) => models[model] === true)) {
    for (const model of JUDGES.filter((candidate) => models[candidate] === false)) {
      if (!judgeAdjudicationsPath) {
        error('judge-adjudication-missing', `${id}: current ${model} rejection needs --judge-adjudications and an exact Alpha outcome`, id);
        continue;
      }
      const outcome = judgeOutcomes.get(judgeOutcomeKey(id, model, hash));
      if (!outcome) {
        if (!unadjudicated.includes(id)) unadjudicated.push(id);
        // Step 7 has not adjudicated anything yet; everywhere else this is a
        // rejection nobody has read, which is not the same as a rejection
        // somebody decided was harmless.
        (allowUnadjudicated ? warn : error)('judge-adjudication-missing', `${id}: current ${model} rejection has no exact Alpha outcome for context ${hash}`, id);
      } else if (outcome.outcome === 'confirmed_fatal') {
        if (!openFatal.includes(id)) openFatal.push(id);
        error('judge-verdict-confirmed-fatal', `${id}: Alpha confirmed a current ${model} rejection as fatal (${outcome.defect_type}); repair and rejudge`, id);
      } else {
        warn('judge-verdict-adjudicated-nonfatal', `${id}: Alpha classified current ${model} rejection as ${outcome.outcome}`, id);
      }
    }
  }
  judgeCoverage.push({ id, context_sha256: hash, models });
}

const summary = { scope: scope.length, proof_scope: proofScope.length, relationships: relationships.length, plan_drift: planDrift.length, judge_scope: judgeScope.length, judge_pairs: judgeCoverage.length, errors: errors.length, warnings: warnings.length };
const result = { summary, manifest_sha256: manifestSha256, manifest, judge_coverage: judgeCoverage, judge_adjudications: judgeAdjudicationsPath ?? null, errors, warnings };

// The closure receipt. Written whether or not the gate passes — a failing gate
// is exactly when the ids it names need to become someone's work.
if (outPath) {
  writeFileSync(resolvePath(outPath), `${JSON.stringify({
    version: 1,
    mode: judgeOnly ? 'judge-closure' : 'level-coverage',
    judge_lineup: lineupName,
    verified_against_current_context: verifyCurrent,
    scope: judgeScope.length,
    pairs_complete: judgeCoverage.length,
    needs_rejudge: needsRejudge.sort(),
    unadjudicated: unadjudicated.sort(),
    open_fatal: openFatal.sort(),
    // `closed` is the unconditional predicate, ignoring the --allow-* relaxations:
    // a stage may be allowed to proceed with work outstanding, but nothing should
    // be able to read this receipt and conclude the level is finished when it is not.
    closed: needsRejudge.length === 0 && openFatal.length === 0 && unadjudicated.length === 0,
    allowances: { unadjudicated: allowUnadjudicated, pending_rejudge: allowPendingRejudge },
  }, null, 2)}\n`);
}

if (asJson) console.log(JSON.stringify(result, null, 2));
else {
  if (templatePath) console.log(`level-coverage: wrote audit receipt template ${templatePath}`);
  if (judgeOnly) {
    console.log(`level-coverage --judge-only: ${summary.judge_pairs}/${summary.judge_scope} current pair(s); `
      + `${needsRejudge.length} need rejudge, ${unadjudicated.length} unadjudicated, ${openFatal.length} open fatal`);
  } else console.log(`level-coverage: ${summary.scope} item(s), ${summary.proof_scope} proof-bearing, ${summary.relationships} declared relationship(s), ${summary.judge_pairs}/${summary.judge_scope} required judge pair(s)`);
  for (const entry of warnings) console.warn(`WARN ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
  for (const entry of errors) console.error(`ERROR ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
}
process.exit(errors.length ? 1 : 0);

function usage() {
  console.error('usage: node tools/level-coverage.mjs --contracts <contracts.json> --judge-ledger <judge.jsonl> [--judge-adjudications <adjudications.jsonl>] [--audit --judge-targets <repair-targets.json>] --spine-receipt <spine.json> (--audit-receipt <receipt.json> | --template <receipt.json>) [--verify-current-context] research/level<n>-batch-*.pages.json [--json]');
  console.error('       judge closure alone (steps 7, 8, rejudge):');
  console.error('       node tools/level-coverage.mjs --judge-only --verify-current-context --judge-ledger <judge.jsonl> [--judge-adjudications <adj.jsonl>] [--allow-unadjudicated] [--allow-pending-rejudge] [--out <closure.json>] research/<run>-batch-*.pages.json');
  process.exit(2);
}
