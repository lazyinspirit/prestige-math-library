#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const itemDir = join(root, "items");
const refuterDir = join(audit, "wave14-refuter-tasks");
const certifierDir = join(audit, "wave14-certifier-tasks");
mkdirSync(refuterDir, { recursive: true });
mkdirSync(certifierDir, { recursive: true });

const split = json("wave14-audit-split.json");
const contracts = json("wave14-proof-contracts.json").contracts;
const manifest = json("wave14-audit-manifest.json");
const genrisk = json("genrisk.json");
const pages = json("wave14-real-analysis.pages.json");
const scopeIds = [...new Set(pages.flatMap((page) => page.items.map((item) => item.id)))].sort();
if (scopeIds.length !== 25) throw new Error(`expected 25 scoped items, found ${scopeIds.length}`);
if (manifest.edges.length !== 171) throw new Error(`expected 171 current relationships, found ${manifest.edges.length}`);

const items = new Map();
const aliases = new Map();
for (const file of walk(itemDir).filter((path) => path.endsWith(".md"))) {
  const text = readFileSync(file, "utf8");
  const id = scalar(frontmatter(text), "id") || basename(file, ".md");
  items.set(id, { id, file, text });
  for (const alias of list(frontmatter(text), "aliases")) aliases.set(alias, id);
}

const provenancePath = join(audit, "wave14-real-analysis.provenance.jsonl");
const provenance = new Map(readFileSync(provenancePath, "utf8").trim().split(/\r?\n/)
  .filter(Boolean).map((line) => { const row = JSON.parse(line); return [row.id, row]; }));
if (provenance.size !== 25) throw new Error(`expected 25 provenance rows, found ${provenance.size}`);

const findings = Object.keys(contracts).map((id) => {
  const signals = riskSignals(items.get(id)?.text ?? "", contracts[id]);
  const score = signals.reduce((sum, signal) => sum + signal.points, 0);
  const tier = score >= 8 ? "critical" : score >= 5 ? "high" : score >= 3 ? "moderate" : "ordinary";
  return { id, score, tier, signals, required: tier === "high" || tier === "critical" };
});
if (findings.length !== 23 || findings.filter((entry) => entry.required).length !== 21) {
  throw new Error(`unexpected Wave14 risk routing ${findings.length}/${findings.filter((entry) => entry.required).length}`);
}

const selection = new Map();
for (const finding of findings.filter((entry) => entry.required)) {
  select(finding.id, `${finding.tier} risk (${finding.score}): ${finding.signals.map((signal) => signal.reason).join("; ")}`);
}
for (const [id, row] of provenance) if (row.statement === "ai-generated") select(id, "Wave 14 ai-generated Statement seed");
const scopedSeeds = genrisk.seeds.filter((seed) => scopeIds.includes(seed.id));
if (scopedSeeds.length !== 3 || scopedSeeds.some((seed) => seed.cone_size !== 0)) {
  throw new Error(`unexpected Wave14 generated-risk surface: ${scopedSeeds.map((seed) => `${seed.id}:${seed.cone_size}`).join(", ")}`);
}
for (const seed of scopedSeeds) select(seed.id, `Wave 14 generated-risk seed (cone ${seed.cone_size})`);
if (selection.size !== 22) throw new Error(`expected 22 exact refuter routes, found ${selection.size}`);

const refuterIndex = [];
for (const id of [...selection.keys()].sort()) {
  const target = items.get(id);
  if (!target) throw new Error(`missing refuter target ${id}`);
  const cited = citedIds(target.text); cited.delete(id);
  const resolved = [...cited].map((name) => aliases.get(name) ?? name).sort();
  const missing = resolved.filter((name) => !items.has(name));
  if (missing.length) throw new Error(`${id}: unresolved cited item(s): ${missing.join(", ")}`);
  const relevantSeeds = scopedSeeds.filter((seed) => seed.id === id);
  const task = [
    "## Selection reasons", "", ...selection.get(id).map((reason) => `- ${reason}`), "",
    `## Target item — \`${id}\``, "", `Normalized current SHA-256: \`${itemContentHash(target.text)}\``, "",
    "The complete exact-current item follows, including frontmatter:", "", "````markdown", target.text.trimEnd(), "````", "",
    "## Wave 14 provenance row", "", "```json", JSON.stringify(provenance.get(id) ?? null, null, 2), "```", "",
    "## Exact-current proof contract", "", contracts[id] ? `\`\`\`json\n${JSON.stringify(contracts[id], null, 2)}\n\`\`\`` : "No Wave 14 proof contract is required for this target.", "",
    "## Generated audit-manifest relationships", "", "```json", JSON.stringify(manifest.edges.filter((edge) => edge.source === id), null, 2), "```", "",
    "## Relevant current generated-risk rows", "", "```json", JSON.stringify(relevantSeeds, null, 2), "```", "",
    `## Full exact-current text of every cited or declared item (${resolved.length})`, "",
    ...resolved.flatMap((sourceId) => [`### \`${sourceId}\``, "", "````markdown", items.get(sourceId).text.trimEnd(), "````", ""]),
  ].join("\n");
  const taskPath = join(refuterDir, `${id}.md`);
  writeFileSync(taskPath, `${task}\n`);
  refuterIndex.push({
    id,
    normalized_sha256: itemContentHash(target.text),
    reasons: selection.get(id),
    dependencies: resolved,
    task: relative(root, taskPath),
    task_sha256: sha256(`${task}\n`),
  });
}

const sourceRepairs = new Set([
  "cex-exponential-not-uniformly-continuous-on-r",
  "cor-exponential-is-a-bijection-onto-positive-reals",
  "thm-exponential-is-strictly-increasing",
  "thm-exponential-limits-and-range",
  "thm-exponential-product-limit",
]);
const a4Repairs = new Set(split.material);
const certifierIds = [...new Set([...a4Repairs, ...sourceRepairs])].sort();
if (a4Repairs.size !== 5 || sourceRepairs.size !== 5 || certifierIds.length !== 10) {
  throw new Error(`unexpected certifier routing ${a4Repairs.size}/${sourceRepairs.size}/${certifierIds.length}`);
}
const reasons = new Map([
  ["lem-exponential-series-has-infinite-radius", "A4 added the exact canonical-natural positivity/nonzeroness dependency needed for the embedded factorial ratio"],
  ["cor-exponential-reciprocal-and-positivity", "A4 replaced two insufficient ordered-field dependencies with the exact nonzero-square positivity lemma"],
  ["thm-normalized-exponential-functional-equation", "A4 added the exponential definition and derivative theorem needed for the existence half of the two uniqueness arguments"],
  ["thm-e-is-irrational", "A4 reordered the integer-tail contradiction, corrected the tail bound, and added canonical-natural positivity"],
  ["ex-exponential-product-limit-at-negative-input", "A4 added the exponential definition, addition formula, and integer-power definition needed to identify exp(-2)=e^-2"],
  ["thm-exponential-is-strictly-increasing", "A6 removed a redundant shell-blocked Keisler URL; retained Lebl exact support and mathematics are unchanged"],
  ["thm-exponential-limits-and-range", "A6 removed a redundant shell-blocked TAMU URL and made the singular Lebl rationale exact; mathematics is unchanged"],
  ["cor-exponential-is-a-bijection-onto-positive-reals", "A6 removed a redundant shell-blocked TAMU URL; retained Lebl exact support and mathematics are unchanged"],
  ["thm-exponential-product-limit", "A6 removed a redundant shell-blocked Keisler URL; retained Lebl Exercise 5.4.5 exact support and mathematics are unchanged"],
  ["cex-exponential-not-uniformly-continuous-on-r", "A6 removed a redundant shell-blocked Keisler URL and made the singular UTSA rationale exact; mathematics is unchanged"],
]);
const certifierIndex = [];
for (const id of certifierIds) {
  const target = items.get(id);
  if (!target) throw new Error(`missing certifier target ${id}`);
  const types = [...(a4Repairs.has(id) ? ["A4-material"] : []), ...(sourceRepairs.has(id) ? ["A6-source-only"] : [])];
  const cited = [...citedIds(target.text)].map((name) => aliases.get(name) ?? name).filter((name) => name !== id).sort();
  const task = [
    `## Assigned exact-final target — \`${id}\``, "", `Item path: \`${relative(root, target.file)}\``, "",
    `Normalized final-text SHA-256 at dispatch: \`${itemContentHash(target.text)}\``, "",
    `Target type(s): ${types.map((type) => `\`${type}\``).join(", ")}`, "", `- ${reasons.get(id)}`, "",
    `Read these exact-current cited/dependency ids from disk (${cited.length}): ${cited.map((name) => `\`${name}\``).join(", ")}.`, "",
    "For source work, open every retained provenance URL and compare its mathematical claim with the current item and rationale. The two removed shell-blocked routes were independently confirmed browser-accessible but redundant; no retained evidence may be weakened by their removal.", "",
    "Current generated-manifest rows:", "", "```json", JSON.stringify(manifest.edges.filter((edge) => edge.source === id), null, 2), "```", "",
    "Current provenance row:", "", "```json", JSON.stringify(provenance.get(id) ?? null, null, 2), "```", "",
    "Exact current item at dispatch:", "", "````markdown", target.text.trimEnd(), "````",
  ].join("\n");
  const label = `a6-${id}`;
  const taskPath = join(certifierDir, `${label}.md`);
  writeFileSync(taskPath, `${task}\n`);
  certifierIndex.push({
    label,
    id,
    types,
    normalized_sha256: itemContentHash(target.text),
    reasons: [reasons.get(id)],
    task: relative(root, taskPath),
    task_sha256: sha256(`${task}\n`),
  });
}

writeFileSync(join(audit, "wave14-refuter-index.json"), `${JSON.stringify({
  version: 1,
  scope: "wave14-a6",
  genrisk_sha256: sha256(readFileSync(join(audit, "genrisk.json"))),
  counts: {
    high_or_critical: findings.filter((entry) => entry.required).length,
    critical: findings.filter((entry) => entry.tier === "critical").length,
    high: findings.filter((entry) => entry.tier === "high").length,
    ai_generated_statement: [...provenance.values()].filter((row) => row.statement === "ai-generated").length,
    scoped_genrisk_seed: scopedSeeds.length,
    large_cone_consumers: 0,
    union: refuterIndex.length,
  },
  large_cone_consumers: [],
  items: refuterIndex,
}, null, 2)}\n`);
writeFileSync(join(audit, "wave14-certifier-index.json"), `${JSON.stringify({
  version: 1,
  scope: "wave14-a6-exact-final-repairs",
  counts: { a4_material: a4Repairs.size, a6_source_only: sourceRepairs.size, union: certifierIndex.length },
  targets: certifierIndex,
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
  const source = `${scalar(fm, "title")}\n${statement}\n${body}`;
  const signals = [];
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
function section(body, heading) { const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); return body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "m"))?.[1] ?? ""; }
function json(file) { return JSON.parse(readFileSync(join(audit, file), "utf8")); }
function frontmatter(text) { return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ""; }
function scalar(fm, key) { return fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, "m"))?.[1]?.trim().replace(/^["']|["']$/g, "") ?? ""; }
function list(fm, key) { const match = fm.match(new RegExp(`^${key}:[ \\t]*(?:\\r?\\n((?:[ \\t]*-[^\\n]*\\r?\\n?)+)|\\[([^\\]]*)\\])`, "m")); if (!match) return []; if (match[2] != null) return match[2].split(",").map(clean).filter(Boolean); return match[1].split(/\r?\n/).map((line) => clean(line.replace(/^[ \t]*-[ \t]*/, ""))).filter(Boolean); }
function clean(value) { return value.trim().replace(/^["']|["']$/g, ""); }
function walk(dir, result = []) { if (!existsSync(dir)) return result; for (const name of readdirSync(dir)) { const path = join(dir, name); if (statSync(path).isDirectory()) walk(path, result); else result.push(path); } return result; }
function sha256(value) { return createHash("sha256").update(value).digest("hex"); }
