#!/usr/bin/env node

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, join, relative } from "node:path";
import { createHash } from "node:crypto";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const itemDir = join(root, "items");
const refuterDir = join(audit, "wave11-refuter-tasks");
const refuterRetryDir = join(audit, "wave11-refuter-retry-tasks");
const refuterDependencyRetryDir = join(audit, "wave11-refuter-dependency-retry-tasks");
const certifierDir = join(audit, "wave11-certifier-tasks");
mkdirSync(refuterDir, { recursive: true });
mkdirSync(refuterRetryDir, { recursive: true });
mkdirSync(refuterDependencyRetryDir, { recursive: true });
mkdirSync(certifierDir, { recursive: true });

const split = json("wave11-audit-split.json");
const contracts = json("wave11-proof-contracts.json").contracts;
const manifest = json("wave11-audit-manifest.json");
const genrisk = json("genrisk.json");
const pagesPath = join(audit, "wave11-real-analysis.pages.json");
const pages = JSON.parse(readFileSync(pagesPath, "utf8"));
const scopeIds = [...new Set(pages.flatMap((page) => page.items.map((item) => item.id)))].sort();

const items = new Map();
const aliases = new Map();
for (const file of walk(itemDir).filter((path) => path.endsWith(".md"))) {
  const text = readFileSync(file, "utf8");
  const id = scalar(frontmatter(text), "id") || basename(file, ".md");
  items.set(id, { id, file, text });
  for (const alias of list(frontmatter(text), "aliases")) aliases.set(alias, id);
}

const ledgerPath = join(audit, "wave11-real-analysis.provenance.jsonl");
const provenance = new Map(readFileSync(ledgerPath, "utf8").trim().split(/\r?\n/)
  .filter(Boolean).map((line) => { const row = JSON.parse(line); return [row.id, row]; }));

const findings = Object.keys(contracts).map((id) => {
  const signals = riskSignals(items.get(id)?.text ?? "", contracts[id]);
  const score = signals.reduce((total, signal) => total + signal.points, 0);
  const tier = score >= 8 ? "critical" : score >= 5 ? "high" : score >= 3 ? "moderate" : "ordinary";
  return { id, score, tier, signals, required: tier === "high" || tier === "critical" };
});

const largestConeCount = 20;
const dependencyConeSizes = new Map();
for (const edge of manifest.edges) dependencyConeSizes.set(edge.source, (dependencyConeSizes.get(edge.source) ?? 0) + 1);
const largestConeConsumers = [...dependencyConeSizes]
  .filter(([id]) => scopeIds.includes(id))
  .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
  .slice(0, largestConeCount);

const selection = new Map();
for (const finding of findings.filter((entry) => entry.required)) {
  select(finding.id, `${finding.tier} risk (${finding.score}): ${finding.signals.map((s) => s.reason).join("; ")}`);
}
for (const [id, row] of provenance) if (row.statement === "ai-generated") select(id, "Wave 11 ai-generated Statement seed");
for (const [id, edgeCount] of largestConeConsumers) select(id, `top-${largestConeCount} manifest-edge consumer (${edgeCount} outgoing relationships)`);
const pendingSeeds = genrisk.seeds.filter((seed) => scopeIds.includes(seed.id) && seed.disposition?.status === "pending");
for (const seed of pendingSeeds) {
  select(seed.id, `pending Wave 11 generated-risk seed (cone ${seed.cone_size})`);
  for (const consumer of seed.logical_consumers ?? []) select(idOf(consumer), `logical consumer of pending generated-risk seed ${seed.id}`);
}

const refuterIndex = [];
for (const id of [...selection.keys()].sort()) {
  const target = items.get(id);
  if (!target) throw new Error(`missing refuter target ${id}`);
  const cited = citedIds(target.text); cited.delete(id);
  const resolved = [...cited].map((name) => aliases.get(name) ?? name).sort();
  const missing = resolved.filter((name) => !items.has(name));
  if (missing.length) throw new Error(`${id}: unresolved cited item(s): ${missing.join(", ")}`);
  const task = [
    "## Selection reasons", "", ...selection.get(id).map((reason) => `- ${reason}`), "",
    `## Target item — \`${id}\``, "", `Normalized current SHA-256: \`${itemContentHash(target.text)}\``, "",
    "The complete exact-current item follows, including frontmatter:", "", "````markdown", target.text.trimEnd(), "````", "",
    "## Wave 11 provenance row", "", "```json", JSON.stringify(provenance.get(id) ?? null, null, 2), "```", "",
    "## Exact-current proof contract", "", contracts[id] ? `\`\`\`json\n${JSON.stringify(contracts[id], null, 2)}\n\`\`\`` : "No Wave 11 proof contract is required for this target.", "",
    "## Generated audit-manifest relationships", "", "```json", JSON.stringify(manifest.edges.filter((edge) => edge.source === id), null, 2), "```", "",
    "## Relevant current generated-risk rows", "", "```json", JSON.stringify(genrisk.seeds.filter((seed) => seed.id === id), null, 2), "```", "",
    `## Full exact-current text of every cited or declared item (${resolved.length})`, "",
    ...resolved.flatMap((sourceId) => [`### \`${sourceId}\``, "", "````markdown", items.get(sourceId).text.trimEnd(), "````", ""]),
  ].join("\n");
  const taskPath = join(refuterDir, `${id}.md`);
  writeFileSync(taskPath, `${task}\n`);
  refuterIndex.push({ id, normalized_sha256: itemContentHash(target.text), reasons: selection.get(id), dependencies: resolved,
    task: relative(root, taskPath), task_sha256: sha256(`${task}\n`) });
}

const exactFinalRetryIds = [
  "cor-taylor-remainder-bound",
  "fs-substitution-holds-for-every-integrable-integrand",
  "rem-darboux-lhopital-taylor-scope",
  "rem-integral-conventions-and-scope",
  "thm-first-mean-value-theorem-for-integrals",
  "thm-integration-by-parts",
  "thm-lhopital-zero-over-zero",
  "thm-taylor-peano-remainder",
];
for (const id of exactFinalRetryIds) {
  const source = join(refuterDir, `${id}.md`);
  if (!existsSync(source)) throw new Error(`exact-final retry target is outside the refuter selection: ${id}`);
  writeFileSync(join(refuterRetryDir, `a6r2-${id}.md`), readFileSync(source));
}
const exactFinalDependencyRetryIds = [
  "cex-a-function-with-a-primitive-that-is-not-integrable",
  "cex-the-first-mean-value-theorem-needs-a-one-signed-weight",
  "ex-geometric-function-taylor-remainder",
  "fs-integration-by-parts-needs-no-integrability-hypothesis",
  "thm-first-nonzero-derivative-test",
  "thm-ftc-first-part",
  "thm-substitution",
];
for (const id of exactFinalDependencyRetryIds) {
  const source = join(refuterDir, `${id}.md`);
  if (!existsSync(source)) throw new Error(`exact-final dependency retry target is outside the refuter selection: ${id}`);
  writeFileSync(join(refuterDependencyRetryDir, `a6r3-${id}.md`), readFileSync(source));
}

const certifierEntries = split.material.map((id) => ({ id, type: "item", reasons: ["A4 material item repair"] }));
for (const entry of [
  { id: "thm-taylor-peano-remainder", type: "item-source-repair", reasons: ["A6 replacement of failed Iowa DNS and invalid-TLS Drexel sources with the live exact Taylor source; specialization retagged ai-altered/semantic-source"] },
  { id: "cor-taylor-remainder-bound", type: "item-source-repair", reasons: ["A6 replacement of failed Iowa DNS and invalid-TLS Drexel sources with the live exact Taylor remainder source"] },
  { id: "ex-two-root-x-and-its-unbounded-derivative", type: "item-source-repair", reasons: ["A6 replacement of invalid-TLS Hawaii source with exact live CLP derivative source"] },
  { id: "cex-a-function-with-a-primitive-that-is-not-integrable", type: "item-source-repair", reasons: ["A6 generated-risk retag to source-backed ai-altered/semantic-source"] },
  { id: "fs-substitution-holds-for-every-integrable-integrand", type: "item-source-repair", reasons: ["A3 Pugh Chapter 3 Exercise 35 exact-source override; A6 added the university-hosted verbatim exercise beside the publisher record"] },
  { id: "rem-integral-conventions-and-scope", type: "item-major-repair", reasons: ["A6 fatal repair of the stale scaffold-era Taylor integral-remainder page assignment exposed by page certification"] },
  { id: "rem-darboux-lhopital-taylor-scope", type: "item-major-repair", reasons: ["A6 fatal repair of an undeclared derivative-continuity page relationship exposed by proof refutation"] },
]) if (!certifierEntries.some((candidate) => candidate.id === entry.id)) certifierEntries.push(entry);

const certifierIndex = [];
for (const entry of certifierEntries) {
  const target = items.get(entry.id);
  if (!target) throw new Error(`missing certifier target ${entry.id}`);
  const task = [
    `## Assigned exact-final target — \`${entry.id}\``, "", `Item path: \`${relative(root, target.file)}\``, "",
    `Normalized final-text SHA-256 at dispatch: \`${itemContentHash(target.text)}\``, "", `Target type: \`${entry.type}\``, "",
    ...entry.reasons.map((reason) => `- ${reason}`), "",
    "Read the complete current item and every exact dependency needed for the changed inference or source attribution. For source work, open the exact final URL(s) with web access and compare the source claim to the current provenance rationale and public Statement.", "",
    "Current generated-manifest rows (completeness checklist only):", "", "```json", JSON.stringify(manifest.edges.filter((edge) => edge.source === entry.id), null, 2), "```", "",
    "Current provenance row:", "", "```json", JSON.stringify(provenance.get(entry.id) ?? null, null, 2), "```", "",
    "Exact current item at dispatch:", "", "````markdown", target.text.trimEnd(), "````",
  ].join("\n");
  const taskPath = join(certifierDir, `${entry.id}.md`); writeFileSync(taskPath, `${task}\n`);
  certifierIndex.push({ label: entry.id, type: entry.type, id: entry.id, normalized_sha256: itemContentHash(target.text), reasons: entry.reasons,
    task: relative(root, taskPath), task_sha256: sha256(`${task}\n`) });
}

const pagePath = "library/real-analysis/properties-of-the-integral-and-the-working-ftc.md";
const pageText = readFileSync(join(root, pagePath), "utf8");
const pageLabel = "page-properties-of-the-integral-and-the-working-ftc";
const pageTask = ["## Assigned repaired page summary", "", `Page path: \`${pagePath}\``, "", `Full-file SHA-256 at dispatch: \`${sha256(pageText)}\``, "",
  "Named repair: correct the stale claim that Taylor's integral remainder is developed on the Darboux/L'Hopital/Taylor page; both current pages explicitly exclude it.", "",
  "Read the complete page and the exact current integral scope ledger below before certifying. This page carries no item verification block.", "", "## Complete repaired page", "", "````markdown", pageText.trimEnd(), "````", "", "## Exact current integral scope ledger", "", "````markdown", items.get("rem-integral-conventions-and-scope").text.trimEnd(), "````"].join("\n");
const pageTaskPath = join(certifierDir, `${pageLabel}.md`); writeFileSync(pageTaskPath, `${pageTask}\n`);
certifierIndex.push({ label: pageLabel, type: "page", path: pagePath, full_file_sha256: sha256(pageText), task: relative(root, pageTaskPath), task_sha256: sha256(`${pageTask}\n`) });

writeFileSync(join(audit, "wave11-certifier-index.json"), `${JSON.stringify({ version: 1, scope: "wave11-a6-exact-final-repairs-and-source-dispositions",
  counts: { items: certifierEntries.length, pages: 1, union: certifierIndex.length }, targets: certifierIndex }, null, 2)}\n`);
writeFileSync(join(audit, "wave11-refuter-index.json"), `${JSON.stringify({ version: 1, scope: "wave11-a6", counts: {
  high_or_critical: findings.filter((entry) => entry.required).length,
  ai_generated_statement: [...provenance.values()].filter((row) => row.statement === "ai-generated").length,
  pending_genrisk_seed: pendingSeeds.length, largest_cone_consumers: largestConeConsumers.length, union: refuterIndex.length,
}, largest_cone_consumers: largestConeConsumers.map(([id, edges]) => ({ id, edges })), exact_final_retry_ids: exactFinalRetryIds, exact_final_dependency_retry_ids: exactFinalDependencyRetryIds, items: refuterIndex }, null, 2)}\n`);
console.log(`assembled ${refuterIndex.length} refuter tasks and ${certifierIndex.length} certifier tasks`);

function select(id, reason) { if (!id) throw new Error(`empty selection id for ${reason}`); if (!selection.has(id)) selection.set(id, []); if (!selection.get(id).includes(reason)) selection.get(id).push(reason); }
function citedIds(text) { const fm = frontmatter(text); return new Set([...list(fm,"deps"),...list(fm,"justified_by"),...list(fm,"forward_refs"),...list(fm,"external_refs"),...[...text.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)].map((m)=>m[1].trim())]); }
function riskSignals(text, contract) { const fm=frontmatter(text), body=text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/,""); const statement=section(body,"Statement")||section(body,"Statement refuted")||section(body,"Definition")||section(body,"Example"); const proofSteps=["Proof","Refutation","Counterexample","Verification"].reduce((n,h)=>n+[...section(body,h).matchAll(/^\d+\.\d+\s+/gm)].length,0); const factLinks=(section(body,"Facts & Assumptions").match(/\[\[/g)??[]).length; const source=`${scalar(fm,"title")}\n${statement}\n${body}`, signals=[]; const add=(points,reason)=>signals.push({points,reason}); const deps=list(fm,"deps"); if(deps.length>=7)add(3,`${deps.length} declared dependencies`);else if(deps.length>=4)add(2,`${deps.length} declared dependencies`); if(factLinks>=4)add(2,`${factLinks} cited facts`);else if(factLinks>=2)add(1,`${factLinks} cited facts`); if(proofSteps>=10)add(2,`${proofSteps} numbered proof steps`);else if(proofSteps>=6)add(1,`${proofSteps} numbered proof steps`); if(/\bif and only if\b|\biff\b|\\Longleftrightarrow/.test(source))add(3,"biconditional / both-direction claim"); if(/well[-\s]defined|\bunique(?:ness)?\b|\bexists?\b|\bchoose\b|axiom of choice/i.test(statement))add(2,"existence, choice, uniqueness, or well-definedness"); if(/\bempty\b|\bnull\b|\bzero\b|\bone\b|degenerate|endpoint|boundary/i.test(source))add(2,"boundary-sensitive language"); if(/induction|recursion|minimal(?:ity)?|well[-\s]order/i.test(source))add(2,"induction, recursion, or minimality"); if(/quotient|coset|equivalence class|modulo/i.test(source))add(2,"quotient or equivalence-class construction"); if(/supremum|infimum|limit|integral|series|convergen(?:ce|t)/i.test(source))add(2,"analytic limiting/completeness language"); if(Array.isArray(contract.finite_smoke)&&contract.finite_smoke.length)add(1,"finite countermodel smoke test selected"); return signals; }
function section(body, heading) { const escaped=heading.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"); return body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`,"m"))?.[1]??""; }
function json(file) { return JSON.parse(readFileSync(join(audit,file),"utf8")); }
function idOf(entry) { return typeof entry === "string" ? entry : entry?.id; }
function frontmatter(text) { return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??""; }
function scalar(fm,key) { return fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`,"m"))?.[1]?.trim().replace(/^["']|["']$/g,"")??""; }
function list(fm,key) { const match=fm.match(new RegExp(`^${key}:[ \\t]*(?:\\r?\\n((?:[ \\t]*-[^\\n]*\\r?\\n?)+)|\\[([^\\]]*)\\])`,"m")); if(!match)return[]; if(match[2]!=null)return match[2].split(",").map(clean).filter(Boolean); return match[1].split(/\r?\n/).map((line)=>clean(line.replace(/^[ \t]*-[ \t]*/,""))).filter(Boolean); }
function clean(value) { return value.trim().replace(/^["']|["']$/g,""); }
function walk(dir,result=[]) { if(!existsSync(dir))return result; for(const name of readdirSync(dir)){const path=join(dir,name); if(statSync(path).isDirectory())walk(path,result);else result.push(path);} return result; }
function sha256(value) { return createHash("sha256").update(value).digest("hex"); }
