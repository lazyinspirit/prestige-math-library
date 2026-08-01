#!/usr/bin/env node
// level-coverage.mjs — hard coverage gate for a completed future A/B level.
//
// node tools/level-coverage.mjs \
//   --contracts research/level<n>-proof-contracts.json \
//   --judge-ledger research/level<n>-judge.jsonl \
//   --audit-receipt research/level<n>-audit-coverage.json \
//   [--verify-current-context] research/level<n>-batch-*.pages.json
//
// The batch manifests are the scope of record.  This gate prevents four silent
// omissions: an authored item without provenance, a proof omitted from the
// contract, an item omitted from either judge lane, and an Alpha audit receipt
// that no longer matches the actual in-flight items and relationships.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const verifyCurrent = argv.includes('--verify-current-context');
const contractsPath = option('--contracts');
const judgePath = option('--judge-ledger');
const receiptPath = option('--audit-receipt');
const spineReceiptPath = option('--spine-receipt');
const templatePath = option('--template');
const batchFiles = argv.filter((arg, index) => {
  if (arg.startsWith('--')) return false;
  return !['--contracts', '--judge-ledger', '--audit-receipt', '--spine-receipt', '--template'].includes(argv[index - 1]);
});
if (!batchFiles.length || (!receiptPath && !templatePath) || (receiptPath && templatePath)) usage();

const errors = [];
const warnings = [];
const error = (code, message, id = null) => errors.push({ code, message, id });
const warn = (code, message, id = null) => warnings.push({ code, message, id });
const JUDGES = ['deepseek-v4-pro', 'gpt-5.6-terra'];

function split(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { fm: match[1], body: match[2] } : { fm: '', body: source };
}
function scalar(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
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
    authorship: scalar(fm, 'authorship'),
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
    if (!Array.isArray(entry?.deps)) error('batch-deps-missing', `${file}: ${id} needs its planned deps array for post-authoring reconciliation`, id);
    else plannedDeps.set(id, entry.deps.map((dep) => resolve(dep) ?? dep).sort());
  }
}
scope.sort();
for (const id of scope) {
  const item = items.get(resolve(id) ?? id);
  if (!item) error('scope-item-missing', `${id} is declared by a batch but has no item file`, id);
  else if (!item.authorship) error('authorship-missing', `${item.file}: in-flight level coverage requires authorship`, item.id);
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
    if (!scope.includes(record?.id) || !JUDGES.includes(record?.model) || typeof record?.context_sha256 !== 'string') continue;
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

function currentContextHash(id) {
  const loader = '/root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs';
  const result = spawnSync(process.execPath, ['--import', loader, 'tools/judge.mts', `items/${id}.md`, '--context-hash'], {
    cwd: REPO,
    encoding: 'utf8',
    timeout: 120_000,
  });
  if (result.status !== 0) {
    error('context-hash', `${id}: judge context hash failed: ${(result.stderr || result.stdout || 'unknown failure').trim()}`, id);
    return null;
  }
  try { return JSON.parse(result.stdout).context_sha256; }
  catch { error('context-hash', `${id}: judge context hash output was not JSON`, id); return null; }
}

const judgeCoverage = [];
for (const id of judgePath ? scope : []) {
  const contexts = verdicts.get(id) ?? new Map();
  const current = verifyCurrent ? currentContextHash(id) : null;
  const eligible = [...contexts.entries()].filter(([hash, byModel]) =>
    (!verifyCurrent || hash === current) && JUDGES.every((model) => byModel.has(model)));
  if (!eligible.length) {
    error('judge-coverage-missing', `${id}: no complete DeepSeek/Terra verdict pair${verifyCurrent ? ' for the current frozen context' : ''}`, id);
    continue;
  }
  eligible.sort((a, b) => Math.max(...JUDGES.map((m) => String(a[1].get(m).at ?? ''))) < Math.max(...JUDGES.map((m) => String(b[1].get(m).at ?? ''))) ? 1 : -1);
  const [hash, byModel] = eligible[0];
  const models = Object.fromEntries(JUDGES.map((model) => [model, byModel.get(model).keep]));
  // A paired run is only coverage, not clearance.  A false verdict must remain
  // a hard stop until the item is repaired and both independent lanes accept
  // the *same current* context.  Otherwise a ledger could record that a fatal
  // defect was found yet still let the level close merely because both models
  // happened to run.
  if (!JUDGES.every((model) => models[model] === true)) {
    const refuters = JUDGES.filter((model) => models[model] === false).join(', ');
    error('judge-verdict-refuted', `${id}: current complete judge pair contains a refutation from ${refuters}; repair and obtain a fresh paired keep=true verdict`, id);
  }
  judgeCoverage.push({ id, context_sha256: hash, models });
}

const summary = { scope: scope.length, proof_scope: proofScope.length, relationships: relationships.length, plan_drift: planDrift.length, judge_pairs: judgeCoverage.length, errors: errors.length, warnings: warnings.length };
const result = { summary, manifest_sha256: manifestSha256, manifest, judge_coverage: judgeCoverage, errors, warnings };
if (asJson) console.log(JSON.stringify(result, null, 2));
else {
  if (templatePath) console.log(`level-coverage: wrote audit receipt template ${templatePath}`);
  console.log(`level-coverage: ${summary.scope} item(s), ${summary.proof_scope} proof-bearing, ${summary.relationships} declared relationship(s), ${summary.judge_pairs} complete judge pair(s)`);
  for (const entry of warnings) console.warn(`WARN ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
  for (const entry of errors) console.error(`ERROR ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
}
process.exit(errors.length ? 1 : 0);

function usage() {
  console.error('usage: node tools/level-coverage.mjs --contracts <contracts.json> --judge-ledger <judge.jsonl> --spine-receipt <spine.json> (--audit-receipt <receipt.json> | --template <receipt.json>) [--verify-current-context] research/level<n>-batch-*.pages.json [--json]');
  process.exit(2);
}
