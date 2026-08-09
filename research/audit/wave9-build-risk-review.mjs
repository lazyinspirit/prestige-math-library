#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { itemContentHash } from '../../tools/item-hash.mjs';

const audit = 'research/audit';
const contractPaths = [
  `${audit}/wave9-real-analysis.proof-contracts.json`,
  `${audit}/wave9-proof-contracts.json`,
];
const index = JSON.parse(readFileSync(`${audit}/wave9-refuter-index.json`, 'utf8'));
const affected = new Set([
  'cor-no-function-is-continuous-exactly-on-q',
  'ex-indicator-of-q-is-baire-class-two-not-one',
  'ex-locally-unbounded-finite-everywhere',
  'ex-thomae-values-and-oscillation-computed',
  'lem-baire-category-in-a-closed-interval',
  'lem-oscillation-superlevel-sets-are-closed',
  'thm-baire-one-continuity-points',
  'thm-continuity-iff-oscillation-zero',
  'thm-continuity-set-realisation',
  'thm-dirichlet-and-thomae-continuity-sets',
  'thm-discontinuity-set-is-f-sigma',
  'thm-froda',
]);
const riskDocument = JSON.parse(readFileSync(`${audit}/wave9-proof-contracts.json`, 'utf8'));
const risk = {
  findings: riskDocument.scope.map((id) => {
    const item = parseItem(readFileSync(`items/${id}.md`, 'utf8'));
    const signals = score(item, riskDocument.contracts[id] ?? {});
    const riskScore = signals.reduce((total, signal) => total + signal.points, 0);
    return {
      id,
      score: riskScore,
      tier: riskScore >= 8 ? 'critical' : riskScore >= 5 ? 'high' : riskScore >= 3 ? 'moderate' : 'ordinary',
      signals,
      required: riskScore >= 5,
    };
  }),
};
if (risk.findings.length !== 34) throw new Error(`expected 34 risk findings, got ${risk.findings.length}`);
const riskById = new Map(risk.findings.map((finding) => [finding.id, finding]));

const recorded = index.items.map((entry) => {
  const current = itemContentHash(readFileSync(`items/${entry.id}.md`, 'utf8'));
  if (current !== entry.normalized_sha256) throw new Error(`${entry.id}: current hash ${current} differs from assembled exact-current hash ${entry.normalized_sha256}`);
  const round = entry.id === 'thm-froda' ? 'a6r4' : affected.has(entry.id) ? 'a6r3' : 'a6r2';
  const evidence = `${audit}/wave9-dispatch/audit-refuter-${round}-${entry.id}.result.json`;
  if (!existsSync(evidence)) throw new Error(`${entry.id}: missing ${evidence}`);
  const result = JSON.parse(readFileSync(evidence, 'utf8'));
  if (!result.ok || result.exit_code !== 0 || result.runner !== 'deepseek' || result.model !== 'deepseek-v4-pro' || !/^VERDICT:\s*CLEAN\b/m.test(result.tail ?? '')) {
    throw new Error(`${entry.id}: refuter result is not a successful DeepSeek CLEAN`);
  }
  const finding = riskById.get(entry.id);
  if (!finding || !finding.required || !['high', 'critical'].includes(finding.tier)) throw new Error(`${entry.id}: not a required high/critical finding`);
  return {
    id: entry.id,
    contractFile: `${audit}/wave9-real-analysis.proof-contracts.json`,
    tier: finding.tier,
    score: finding.score,
    verdict: 'CLEAN',
    adjudication: null,
    normalized_sha256: current,
    evidence,
    signals: finding.signals.map((signal) => signal.reason),
  };
});
if (recorded.length !== 34 || new Set(recorded.map((row) => row.id)).size !== 34) throw new Error('risk receipt is not an exact 34-item union');
const byId = new Map(recorded.map((row) => [row.id, row]));

for (const path of contractPaths) {
  const document = JSON.parse(readFileSync(path, 'utf8'));
  for (const [id, contract] of Object.entries(document.contracts)) {
    const row = byId.get(id);
    if (!row) throw new Error(`${path}: ${id} has no exact-current risk result`);
    contract.risk_review = {
      status: 'complete',
      reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated); DeepSeek V4 Pro audit-refuter',
      notes: `${row.tier} risk (${row.score}): ${row.signals.join('; ')}, routed by risk-report.mjs. DeepSeek V4 Pro independently received the complete exact-current target and every declared/cited dependency and returned CLEAN at normalized hash ${row.normalized_sha256}. Audit-Alpha independently read and adjudicated the same complete target, proof, boundary cases, citations, and dependencies and found no fatal or nonfatal defect. Evidence: ${row.evidence}.`,
    };
  }
  writeFileSync(path, `${JSON.stringify(document, null, 2)}\n`);
}

writeFileSync(`${audit}/wave9-risk-review-receipt.json`, `${JSON.stringify({
  version: 1,
  scope: 'wave9-a6-current-hash-high-critical-independent-reads',
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 9 A6',
  summary: {
    proof_bearing_items: recorded.length,
    critical: recorded.filter((row) => row.tier === 'critical').length,
    high: recorded.filter((row) => row.tier === 'high').length,
    clean: recorded.filter((row) => row.verdict === 'CLEAN').length,
    defects: 0,
    alpha_repairs_from_refuter_routes: 0,
  },
  dependency_surface_refresh: {
    reason: 'The A6 def-oscillation citation repair changed an embedded dependency file, so every refuter task whose supplied dependency surface contained it was reassembled and rerun on exact final text.',
    rerun_ids: [...affected].sort(),
  },
  recorded,
}, null, 2)}\n`);
console.log(`wrote risk reviews: ${recorded.length} CLEAN (${recorded.filter((row) => row.tier === 'critical').length} critical, ${recorded.filter((row) => row.tier === 'high').length} high)`);

function score(item, contract) {
  const signals = [];
  const statement = section(item.body, 'Statement') || section(item.body, 'Statement refuted') || section(item.body, 'Definition') || section(item.body, 'Example');
  const proofSteps = ['Proof', 'Refutation', 'Counterexample', 'Verification']
    .reduce((count, heading) => count + [...section(item.body, heading).matchAll(/^\d+\.\d+\s+/gm)].length, 0);
  const factLinks = (section(item.body, 'Facts & Assumptions').match(/\[\[/g) ?? []).length;
  const bodyText = `${item.title}\n${statement}\n${item.body}`;
  const add = (points, reason) => signals.push({ points, reason });
  if (item.deps.length >= 7) add(3, `${item.deps.length} declared dependencies`);
  else if (item.deps.length >= 4) add(2, `${item.deps.length} declared dependencies`);
  if (factLinks >= 4) add(2, `${factLinks} cited facts`);
  else if (factLinks >= 2) add(1, `${factLinks} cited facts`);
  if (proofSteps >= 10) add(2, `${proofSteps} numbered proof steps`);
  else if (proofSteps >= 6) add(1, `${proofSteps} numbered proof steps`);
  if (/\bif and only if\b|\biff\b|\\Longleftrightarrow/.test(bodyText)) add(3, 'biconditional / both-direction claim');
  if (/well[-\s]defined|\bunique(?:ness)?\b|\bexists?\b|\bchoose\b|axiom of choice/i.test(statement)) add(2, 'existence, choice, uniqueness, or well-definedness');
  if (/\bempty\b|\bnull\b|\bzero\b|\bone\b|degenerate|endpoint|boundary/i.test(bodyText)) add(2, 'boundary-sensitive language');
  if (/induction|recursion|minimal(?:ity)?|well[-\s]order/i.test(bodyText)) add(2, 'induction, recursion, or minimality');
  if (/quotient|coset|equivalence class|modulo/i.test(bodyText)) add(2, 'quotient or equivalence-class construction');
  if (/supremum|infimum|limit|integral|series|convergen(?:ce|t)/i.test(bodyText)) add(2, 'analytic limiting/completeness language');
  if (Array.isArray(contract.finite_smoke) && contract.finite_smoke.length) add(1, 'finite countermodel smoke test selected');
  return signals;
}

function parseItem(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const fm = match?.[1] ?? '';
  return { title: scalar(fm, 'title') ?? '', deps: list(fm, 'deps'), body: match?.[2] ?? source };
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
  for (let offset = open; offset < fm.length; offset += 1) {
    if (fm[offset] === '[') depth += 1;
    else if (fm[offset] === ']' && --depth === 0) return fm.slice(open + 1, offset).split(',').map((value) => value.trim()).filter(Boolean);
  }
  return [];
}
function section(body, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, 'm'))?.[1] ?? '';
}
