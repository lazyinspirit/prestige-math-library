#!/usr/bin/env node
// risk-report.mjs — route structurally high-risk items to the extra Alpha pass.
//
//   node tools/risk-report.mjs research/level<n>-proof-contracts.json
//   node tools/risk-report.mjs research/level<n>-proof-contracts.json --require-reviewed
//
// This is a routing signal, not a mathematical verdict.  It intentionally uses
// transparent scores and reports its reasons, so Alpha can override a false
// positive without weakening the policy for genuinely intricate proofs.

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const requireReviewed = argv.includes('--require-reviewed');
const requested = option('--items')?.split(',').map((value) => value.trim()).filter(Boolean) ?? null;
const threshold = integerOption('--threshold', 5, 1, 100);
const contractPath = argv.find((arg) => !arg.startsWith('--') && arg !== option('--items') && arg !== option('--threshold'));
if (!contractPath) usage();

const errors = [];
let document;
try {
  document = JSON.parse(readFileSync(resolvePath(contractPath), 'utf8'));
} catch (cause) {
  errors.push({ code: 'contract-read', message: `${contractPath}: ${cause.message}` });
  finish([]);
}
if (document?.version !== 1 || !Array.isArray(document?.scope) || typeof document?.contracts !== 'object') {
  errors.push({ code: 'contract-shape', message: 'expected a version-1 proof contract with scope and contracts' });
  finish([]);
}

const ids = requested ? document.scope.filter((id) => requested.includes(id)) : document.scope;
for (const id of requested ?? []) if (!document.scope.includes(id)) errors.push({ code: 'selection-outside-scope', message: `${id} is outside the contract scope`, id });

const findings = [];
for (const id of ids) {
  const path = join(REPO, 'items', `${id}.md`);
  if (!existsSync(path)) {
    errors.push({ code: 'item-missing', message: `items/${id}.md does not exist`, id });
    continue;
  }
  const source = readFileSync(path, 'utf8');
  const item = parseItem(source);
  const signals = score(item, document.contracts[id] ?? {});
  const risk = signals.reduce((total, signal) => total + signal.points, 0);
  const tier = risk >= 8 ? 'critical' : risk >= threshold ? 'high' : risk >= 3 ? 'moderate' : 'ordinary';
  const review = document.contracts[id]?.risk_review ?? null;
  const finding = {
    id,
    score: risk,
    tier,
    signals: signals.map(({ points, ...signal }) => ({ ...signal, points })),
    required: tier === 'high' || tier === 'critical',
    risk_review: review,
    routing: tier === 'high' || tier === 'critical'
      ? ['Alpha proof-refuter reads every step and cited source', 'Alpha records a risk_review disposition before Step 7']
      : ['ordinary Step-6 reader coverage'],
  };
  if (finding.required && requireReviewed && !(review?.status === 'complete' && typeof review.reviewer === 'string' && review.reviewer.trim() && typeof review.notes === 'string' && review.notes.trim())) {
    errors.push({ code: 'risk-review-missing', message: `${id} is ${tier} risk and lacks a complete Alpha risk_review`, id });
  }
  findings.push(finding);
}
finish(findings);

function score(item, contract) {
  const signals = [];
  const statement = section(item.body, 'Statement') || section(item.body, 'Statement refuted') || section(item.body, 'Definition') || section(item.body, 'Example');
  const proofSteps = ['Proof', 'Refutation', 'Counterexample', 'Verification']
    .reduce((count, heading) => count + [...section(item.body, heading).matchAll(/^\d+\.\d+\s+/gm)].length, 0);
  const factLinks = (section(item.body, 'Facts & Assumptions').match(/\[\[/g) ?? []).length;
  const text = `${item.title}\n${statement}\n${item.body}`;
  const add = (points, reason) => signals.push({ points, reason });
  if (item.deps.length >= 7) add(3, `${item.deps.length} declared dependencies`);
  else if (item.deps.length >= 4) add(2, `${item.deps.length} declared dependencies`);
  if (factLinks >= 4) add(2, `${factLinks} cited facts`);
  else if (factLinks >= 2) add(1, `${factLinks} cited facts`);
  if (proofSteps >= 10) add(2, `${proofSteps} numbered proof steps`);
  else if (proofSteps >= 6) add(1, `${proofSteps} numbered proof steps`);
  if (/\bif and only if\b|\biff\b|\Longleftrightarrow/.test(text)) add(3, 'biconditional / both-direction claim');
  if (/well[-\s]defined|\bunique(?:ness)?\b|\bexists?\b|\bchoose\b|axiom of choice/i.test(statement)) add(2, 'existence, choice, uniqueness, or well-definedness');
  if (/\bempty\b|\bnull\b|\bzero\b|\bone\b|degenerate|endpoint|boundary/i.test(text)) add(2, 'boundary-sensitive language');
  if (/induction|recursion|minimal(?:ity)?|well[-\s]order/i.test(text)) add(2, 'induction, recursion, or minimality');
  if (/quotient|coset|equivalence class|modulo/i.test(text)) add(2, 'quotient or equivalence-class construction');
  if (/supremum|infimum|limit|integral|series|convergen(?:ce|t)/i.test(text)) add(2, 'analytic limiting/completeness language');
  if (Array.isArray(contract.finite_smoke) && contract.finite_smoke.length) add(1, 'finite countermodel smoke test selected');
  return signals;
}

function parseItem(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const fm = match?.[1] ?? '';
  const body = match?.[2] ?? source;
  return { title: scalar(fm, 'title') ?? '', deps: list(fm, 'deps'), body };
}
function scalar(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return match?.[1]?.trim().replace(/^['"]|['"]$/g, '') ?? undefined;
}
function list(fm, key) {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0;
  for (let index = open; index < fm.length; index += 1) {
    if (fm[index] === '[') depth += 1;
    else if (fm[index] === ']' && --depth === 0) return fm.slice(open + 1, index).split(',').map((value) => value.trim()).filter(Boolean);
  }
  return [];
}
function section(body, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, 'm'))?.[1] ?? '';
}
function option(flag) { const index = argv.indexOf(flag); return index >= 0 ? argv[index + 1] : undefined; }
function integerOption(flag, fallback, min, max) {
  const value = option(flag);
  if (value == null) return fallback;
  const number = Number(value);
  if (!Number.isInteger(number) || number < min || number > max) {
    console.error(`${flag} must be an integer from ${min} to ${max}`);
    process.exit(2);
  }
  return number;
}
function resolvePath(path) { return path.startsWith('/') ? path : join(process.cwd(), path); }
function usage() { console.error('usage: node tools/risk-report.mjs <contract.json> [--items id,id] [--threshold n] [--require-reviewed] [--json]'); process.exit(2); }
function finish(findings) {
  const result = { ok: errors.length === 0, threshold, errors, findings };
  if (asJson) console.log(JSON.stringify(result, null, 2));
  else {
    for (const finding of findings) {
      const reasons = finding.signals.map((signal) => `${signal.points}:${signal.reason}`).join('; ') || 'no signals';
      console.log(`${finding.tier.toUpperCase()} ${finding.score} [${finding.id}] ${reasons}`);
    }
    for (const error of errors) console.error(`ERROR ${error.code}${error.id ? ` [${error.id}]` : ''}: ${error.message}`);
    console.log(`risk-report: ${errors.length} error(s), ${findings.length} item(s) routed`);
  }
  process.exit(errors.length ? 1 : 0);
}
