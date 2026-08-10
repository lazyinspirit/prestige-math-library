#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const itemDir = join(root, "items");
const refuterDir = join(audit, "wave12-refuter-tasks");
const certifierDir = join(audit, "wave12-certifier-tasks");
mkdirSync(refuterDir, { recursive: true });
mkdirSync(certifierDir, { recursive: true });

const split = json("wave12-audit-split.json");
const contracts = json("wave12-proof-contracts.json").contracts;
const manifest = json("wave12-audit-manifest.json");
const genrisk = json("genrisk.json");
const pages = json("wave12-real-analysis.pages.json");
const scopeIds = [...new Set(pages.flatMap((page) => page.items.map((item) => item.id)))].sort();

const items = new Map();
const aliases = new Map();
for (const file of walk(itemDir).filter((path) => path.endsWith(".md"))) {
  const text = readFileSync(file, "utf8");
  const id = scalar(frontmatter(text), "id") || basename(file, ".md");
  items.set(id, { id, file, text });
  for (const alias of list(frontmatter(text), "aliases")) aliases.set(alias, id);
}

const provenancePath = join(audit, "wave12-real-analysis.provenance.jsonl");
const provenance = new Map(readFileSync(provenancePath, "utf8").trim().split(/\r?\n/)
  .filter(Boolean).map((line) => { const row = JSON.parse(line); return [row.id, row]; }));

const findings = Object.keys(contracts).map((id) => {
  const signals = riskSignals(items.get(id)?.text ?? "", contracts[id]);
  const score = signals.reduce((sum, signal) => sum + signal.points, 0);
  const tier = score >= 8 ? "critical" : score >= 5 ? "high" : score >= 3 ? "moderate" : "ordinary";
  return { id, score, tier, signals, required: tier === "high" || tier === "critical" };
});

const largestConeCount = 20;
const outgoing = new Map();
for (const edge of manifest.edges) outgoing.set(edge.source, (outgoing.get(edge.source) ?? 0) + 1);
const largestConeConsumers = [...outgoing]
  .filter(([id]) => scopeIds.includes(id))
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, largestConeCount);

const selection = new Map();
for (const finding of findings.filter((entry) => entry.required)) {
  select(finding.id, `${finding.tier} risk (${finding.score}): ${finding.signals.map((s) => s.reason).join("; ")}`);
}
for (const [id, row] of provenance) if (row.statement === "ai-generated") select(id, "Wave 12 ai-generated Statement seed");
for (const [id, edges] of largestConeConsumers) select(id, `top-${largestConeCount} manifest-edge consumer (${edges} outgoing relationships)`);
const scopedSeeds = genrisk.seeds.filter((seed) => scopeIds.includes(seed.id));
for (const seed of scopedSeeds) {
  select(seed.id, `Wave 12 generated-risk seed (cone ${seed.cone_size})`);
  for (const consumer of seed.logical_consumers ?? []) select(idOf(consumer), `logical consumer of generated-risk seed ${seed.id}`);
  for (const consumer of seed.direct_citation_consumers ?? []) select(idOf(consumer), `direct-citation consumer of generated-risk seed ${seed.id}`);
}

const refuterIndex = [];
for (const id of [...selection.keys()].sort()) {
  const target = items.get(id);
  if (!target) throw new Error(`missing refuter target ${id}`);
  const cited = citedIds(target.text); cited.delete(id);
  const resolved = [...cited].map((name) => aliases.get(name) ?? name).sort();
  const missing = resolved.filter((name) => !items.has(name));
  if (missing.length) throw new Error(`${id}: unresolved cited item(s): ${missing.join(", ")}`);
  const relevantSeeds = scopedSeeds.filter((seed) => seed.id === id ||
    (seed.logical_consumers ?? []).some((entry) => idOf(entry) === id) ||
    (seed.direct_citation_consumers ?? []).some((entry) => idOf(entry) === id));
  const task = [
    "## Selection reasons", "", ...selection.get(id).map((reason) => `- ${reason}`), "",
    `## Target item — \`${id}\``, "", `Normalized current SHA-256: \`${itemContentHash(target.text)}\``, "",
    "The complete exact-current item follows, including frontmatter:", "", "````markdown", target.text.trimEnd(), "````", "",
    "## Wave 12 provenance row", "", "```json", JSON.stringify(provenance.get(id) ?? null, null, 2), "```", "",
    "## Exact-current proof contract", "", contracts[id] ? `\`\`\`json\n${JSON.stringify(contracts[id], null, 2)}\n\`\`\`` : "No Wave 12 proof contract is required for this target.", "",
    "## Generated audit-manifest relationships", "", "```json", JSON.stringify(manifest.edges.filter((edge) => edge.source === id), null, 2), "```", "",
    "## Relevant current generated-risk rows", "", "```json", JSON.stringify(relevantSeeds, null, 2), "```", "",
    `## Full exact-current text of every cited or declared item (${resolved.length})`, "",
    ...resolved.flatMap((sourceId) => [`### \`${sourceId}\``, "", "````markdown", items.get(sourceId).text.trimEnd(), "````", ""]),
  ].join("\n");
  const taskPath = join(refuterDir, `${id}.md`);
  writeFileSync(taskPath, `${task}\n`);
  refuterIndex.push({ id, normalized_sha256: itemContentHash(target.text), reasons: selection.get(id), dependencies: resolved,
    task: relative(root, taskPath), task_sha256: sha256(`${task}\n`) });
}

const sourceRepairIds = [
  "def-vector-valued-functions-limits-and-continuity", "thm-componentwise-limits-and-continuity",
  "def-vector-valued-derivative-and-integral", "thm-norm-inequality-for-the-vector-valued-integral",
  "thm-mean-value-inequality", "cor-vector-valued-ftc-and-lipschitz-bound",
  "cex-mean-value-equality-fails-for-a-vector-valued-function", "cex-the-mean-value-inequality-is-attained",
  "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
  "def-pointwise-uniform-and-uniformly-cauchy-convergence",
  "lem-uniform-convergence-implies-pointwise-convergence-real-functions", "thm-uniform-cauchy-criterion-real-functions",
  "def-series-of-real-functions", "cor-uniform-cauchy-criterion-function-series",
  "lem-uniform-limits-linear-combinations", "lem-uniform-product-limit-under-boundedness",
  "thm-uniform-limit-continuous-real-functions", "cor-uniform-limit-uniformly-continuous",
  "def-continuous-real-functions-on-a-compact-metric-space", "thm-c-k-complete-in-the-sup-metric",
  "lem-uniform-integral-error-bound", "thm-uniform-limit-interchanges-riemann-integration",
  "thm-uniform-derivative-limit-on-a-closed-interval",
  "rem-uniform-convergence-agrees-with-the-later-uniform-topology",
  "cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly", "cex-shrinking-rectangles-have-integral-one",
  "cex-dini-needs-a-compact-domain", "cex-dini-needs-monotonicity",
  "cex-m-over-m-plus-n-has-noncommuting-iterated-limits", "cex-uniform-convergence-does-not-control-derivatives",
];
const majorRepairIds = [
  "def-norm-and-normed-space",
  "rem-rn-conventions-and-scope",
  "thm-norm-inequality-for-the-vector-valued-integral",
  "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
];
const sourceRepairReasons = new Map([
  ["thm-componentwise-limits-and-continuity", "A6 replaced an off-topic vector-derivative route with exact Toronto/APEX componentwise limit and continuity sources"],
  ["thm-norm-inequality-for-the-vector-valued-integral", "A6 replaced an off-topic vector-derivative route with Semmes's exact vector-integral norm inequality"],
  ["cex-m-over-m-plus-n-has-noncommuting-iterated-limits", "A6 replaced an off-topic function-sequence route with Abbott's exact unequal-iterated-limit witness"],
  ["cex-shrinking-rectangles-have-integral-one", "A6 replaced an off-topic function-sequence route with Faris's exact shrinking-rectangle witness"],
  ["cex-uniform-convergence-does-not-control-derivatives", "A6 replaced general differentiation-interchange routes with exact TCD/KSU sources for this rational witness"],
  ["ex-componentwise-convergence-and-a-vector-valued-integral-computed", "A6 replaced an off-topic vector-derivative route with exact Lebl/APEX componentwise sequence and integral sources"],
]);
const majorRepairReasons = new Map([
  ["def-norm-and-normed-space", "A6 corrected the stale claim that the earlier linear-map page was not built and added the exact def-linear-map dependency"],
  ["rem-rn-conventions-and-scope", "A6 corrected the stale claim that the earlier linear-map page was not built and added the exact def-linear-map dependency"],
  ["thm-norm-inequality-for-the-vector-valued-integral", "A6 moved the square-root continuity step after the definition of its bound K, closing an undefined-quantity proof-order defect"],
  ["ex-componentwise-convergence-and-a-vector-valued-integral-computed", "A6 corrected the convergence proof from rational epsilon to every positive real epsilon"],
]);
const certifierEntries = new Map();
const addCert = (id, type, reason) => {
  if (!certifierEntries.has(id)) certifierEntries.set(id, { id, types: [], reasons: [] });
  const entry = certifierEntries.get(id);
  if (!entry.types.includes(type)) entry.types.push(type);
  if (!entry.reasons.includes(reason)) entry.reasons.push(reason);
};
for (const id of split.material) addCert(id, "A4-material", "A4 material item repair requires exact-final independent certification");
for (const id of sourceRepairIds) addCert(id, "A6-source-correction", sourceRepairReasons.get(id) ?? (id.startsWith("cex-dini-needs-")
  ? "A6 removed the failed redundant KTH endpoint; live Dini/Trench sources remain"
  : "A6 removed the failed redundant Lebl draft endpoint; a live semantic source remains"));
for (const id of majorRepairIds) addCert(id, "A6-major-repair", majorRepairReasons.get(id));

const certifierIndex = [];
for (const entry of [...certifierEntries.values()].sort((a, b) => a.id.localeCompare(b.id))) {
  const target = items.get(entry.id);
  if (!target) throw new Error(`missing certifier target ${entry.id}`);
  const task = [
    `## Assigned exact-final target — \`${entry.id}\``, "", `Item path: \`${relative(root, target.file)}\``, "",
    `Normalized final-text SHA-256 at dispatch: \`${itemContentHash(target.text)}\``, "",
    `Target type(s): ${entry.types.map((type) => `\`${type}\``).join(", ")}`, "",
    ...entry.reasons.map((reason) => `- ${reason}`), "",
    "Read the complete current item and every dependency needed for the changed inference or source attribution. For source work, open the retained exact-final URL(s) and compare the public claim with the current provenance rationale.", "",
    "Current generated-manifest rows:", "", "```json", JSON.stringify(manifest.edges.filter((edge) => edge.source === entry.id), null, 2), "```", "",
    "Current provenance row:", "", "```json", JSON.stringify(provenance.get(entry.id) ?? null, null, 2), "```", "",
    "Exact current item at dispatch:", "", "````markdown", target.text.trimEnd(), "````",
  ].join("\n");
  const label = `a6-${entry.id}`;
  const taskPath = join(certifierDir, `${label}.md`);
  writeFileSync(taskPath, `${task}\n`);
  certifierIndex.push({ label, id: entry.id, types: entry.types, normalized_sha256: itemContentHash(target.text), reasons: entry.reasons,
    task: relative(root, taskPath), task_sha256: sha256(`${task}\n`) });
}

writeFileSync(join(audit, "wave12-refuter-index.json"), `${JSON.stringify({
  version: 1, scope: "wave12-a6", counts: {
    high_or_critical: findings.filter((entry) => entry.required).length,
    ai_generated_statement: [...provenance.values()].filter((row) => row.statement === "ai-generated").length,
    scoped_genrisk_seed: scopedSeeds.length,
    largest_cone_consumers: largestConeConsumers.length,
    union: refuterIndex.length,
  }, largest_cone_consumers: largestConeConsumers.map(([id, edges]) => ({ id, edges })), items: refuterIndex,
}, null, 2)}\n`);
writeFileSync(join(audit, "wave12-certifier-index.json"), `${JSON.stringify({
  version: 1, scope: "wave12-a6-exact-final-repairs-and-source-dispositions",
  counts: { a4_material: split.material.length, a6_source_corrections: sourceRepairIds.length,
    a6_major_repairs: majorRepairIds.length, union: certifierIndex.length }, targets: certifierIndex,
}, null, 2)}\n`);
console.log(`assembled ${refuterIndex.length} refuter tasks and ${certifierIndex.length} certifier tasks`);

function select(id, reason) {
  if (!id) throw new Error(`empty selection id for ${reason}`);
  if (!selection.has(id)) selection.set(id, []);
  if (!selection.get(id).includes(reason)) selection.get(id).push(reason);
}
function citedIds(text) {
  const fm = frontmatter(text);
  return new Set([...list(fm, "deps"), ...list(fm, "justified_by"), ...list(fm, "forward_refs"), ...list(fm, "external_refs"),
    ...[...text.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)].map((match) => match[1].trim())]);
}
function riskSignals(text, contract) {
  const fm = frontmatter(text);
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const statement = section(body, "Statement") || section(body, "Statement refuted") || section(body, "Definition") || section(body, "Example");
  const proofSteps = ["Proof", "Refutation", "Counterexample", "Verification"].reduce((n, heading) => n + [...section(body, heading).matchAll(/^\d+\.\d+\s+/gm)].length, 0);
  const factLinks = (section(body, "Facts & Assumptions").match(/\[\[/g) ?? []).length;
  const source = `${scalar(fm, "title")}\n${statement}\n${body}`, signals = [];
  const add = (points, reason) => signals.push({ points, reason });
  const deps = list(fm, "deps");
  if (deps.length >= 7) add(3, `${deps.length} declared dependencies`); else if (deps.length >= 4) add(2, `${deps.length} declared dependencies`);
  if (factLinks >= 4) add(2, `${factLinks} cited facts`); else if (factLinks >= 2) add(1, `${factLinks} cited facts`);
  if (proofSteps >= 10) add(2, `${proofSteps} numbered proof steps`); else if (proofSteps >= 6) add(1, `${proofSteps} numbered proof steps`);
  if (/\bif and only if\b|\biff\b|\\Longleftrightarrow/.test(source)) add(3, "biconditional / both-direction claim");
  if (/well[-\s]defined|\bunique(?:ness)?\b|\bexists?\b|\bchoose\b|axiom of choice/i.test(statement)) add(2, "existence, choice, uniqueness, or well-definedness");
  if (/\bempty\b|\bnull\b|\bzero\b|\bone\b|degenerate|endpoint|boundary/i.test(source)) add(2, "boundary-sensitive language");
  if (/induction|recursion|minimal(?:ity)?|well[-\s]order/i.test(source)) add(2, "induction, recursion, or minimality");
  if (/quotient|coset|equivalence class|modulo/i.test(source)) add(2, "quotient or equivalence-class construction");
  if (/supremum|infimum|limit|integral|series|convergen(?:ce|t)/i.test(source)) add(2, "analytic limiting/completeness language");
  if (Array.isArray(contract?.finite_smoke) && contract.finite_smoke.length) add(1, "finite countermodel smoke test selected");
  return signals;
}
function section(body, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "m"))?.[1] ?? "";
}
function json(file) { return JSON.parse(readFileSync(join(audit, file), "utf8")); }
function idOf(entry) { return typeof entry === "string" ? entry : entry?.id; }
function frontmatter(text) { return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ""; }
function scalar(fm, key) { return fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, "m"))?.[1]?.trim().replace(/^["']|["']$/g, "") ?? ""; }
function list(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(?:\\r?\\n((?:[ \\t]*-[^\\n]*\\r?\\n?)+)|\\[([^\\]]*)\\])`, "m"));
  if (!match) return [];
  if (match[2] != null) return match[2].split(",").map(clean).filter(Boolean);
  return match[1].split(/\r?\n/).map((line) => clean(line.replace(/^[ \t]*-[ \t]*/, ""))).filter(Boolean);
}
function clean(value) { return value.trim().replace(/^["']|["']$/g, ""); }
function walk(dir, result = []) {
  if (!existsSync(dir)) return result;
  for (const name of readdirSync(dir)) { const path = join(dir, name); if (statSync(path).isDirectory()) walk(path, result); else result.push(path); }
  return result;
}
function sha256(value) { return createHash("sha256").update(value).digest("hex"); }
