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
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const itemDir = join(root, "items");
const refuterDir = join(audit, "wave7-refuter-tasks");
const certifierDir = join(audit, "wave7-certifier-tasks");
mkdirSync(refuterDir, { recursive: true });
mkdirSync(certifierDir, { recursive: true });

const split = json("wave7-split.json");
const contracts = json("wave7-proof-contracts.json").contracts;
const manifest = json("wave7-audit-manifest.json");
const genrisk = json("genrisk.json");
const scopeIds = [
  ...split.pure.map(idOf),
  ...split.material.map(idOf),
].sort();

const items = new Map();
const aliases = new Map();
for (const file of walk(itemDir).filter((path) => path.endsWith(".md"))) {
  const text = readFileSync(file, "utf8");
  const id = scalar(frontmatter(text), "id") || basename(file, ".md");
  items.set(id, { id, file, text });
  for (const alias of list(frontmatter(text), "aliases")) aliases.set(alias, id);
}

const provenance = new Map();
for (const file of readdirSync(audit).filter((name) => /^wave7-.*\.provenance\.jsonl$/.test(name))) {
  for (const line of readFileSync(join(audit, file), "utf8").split(/\r?\n/).filter(Boolean)) {
    const row = JSON.parse(line);
    provenance.set(row.id, { ...row, ledger: file });
  }
}

const risk = {
  findings: Object.keys(contracts).map((id) => {
    const signals = riskSignals(items.get(id)?.text ?? "", contracts[id]);
    const score = signals.reduce((total, signal) => total + signal.points, 0);
    const tier = score >= 8 ? "critical" : score >= 5 ? "high" : score >= 3 ? "moderate" : "ordinary";
    return { id, score, tier, signals, required: tier === "high" || tier === "critical" };
  }),
};
const largestConeCount = 20;
const dependencyConeSizes = new Map();
for (const edge of manifest.edges) {
  dependencyConeSizes.set(edge.source, (dependencyConeSizes.get(edge.source) ?? 0) + 1);
}
const largestConeConsumers = [...dependencyConeSizes]
  .filter(([id]) => scopeIds.includes(id))
  .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
  .slice(0, largestConeCount);

const selection = new Map();
for (const finding of risk.findings.filter((entry) => entry.required)) {
  select(finding.id, `${finding.tier} risk (${finding.score}): ${finding.signals.map((s) => s.reason).join("; ")}`);
}
for (const [id, row] of provenance) {
  if (row.statement === "ai-generated") select(id, "Wave 7 ai-generated statement seed");
}
for (const [id, coneSize] of largestConeConsumers) {
  select(id, `top-${largestConeCount} dependency-cone consumer (${coneSize} generated manifest edges)`);
}
const pendingSeeds = genrisk.seeds.filter((seed) => seed.cone_size > 0 && seed.disposition?.status === "pending");
for (const seed of pendingSeeds) {
  select(seed.id, `pending genrisk seed (cone ${seed.cone_size})`);
  for (const consumer of seed.logical_consumers ?? []) {
    select(idOf(consumer), `logical consumer of pending genrisk seed ${seed.id}`);
  }
  for (const consumer of seed.direct_citation_consumers ?? []) {
    select(idOf(consumer), `direct-citation consumer of pending genrisk seed ${seed.id}`);
  }
}

const index = [];
for (const id of [...selection.keys()].sort()) {
  const target = items.get(id);
  if (!target) throw new Error(`missing refuter target ${id}`);
  const cited = citedIds(target.text);
  cited.delete(id);
  const resolved = [...cited].map((name) => aliases.get(name) ?? name).sort();
  const missing = resolved.filter((name) => !items.has(name));
  if (missing.length) throw new Error(`${id}: unresolved cited item(s): ${missing.join(", ")}`);
  const edgeRows = manifest.edges.filter((edge) => edge.source === id);
  const seedRows = pendingSeeds.filter((seed) =>
    seed.id === id ||
    (seed.logical_consumers ?? []).some((consumer) => idOf(consumer) === id) ||
    (seed.direct_citation_consumers ?? []).some((consumer) => idOf(consumer) === id));
  const task = [
    `## Selection reasons`,
    "",
    ...selection.get(id).map((reason) => `- ${reason}`),
    "",
    `## Target item — \`${id}\``,
    "",
    `Normalized current SHA-256: \`${itemContentHash(target.text)}\``,
    "",
    "The complete current item follows, including frontmatter:",
    "",
    "````markdown",
    target.text.trimEnd(),
    "````",
    "",
    "## Wave 7 provenance row for the target",
    "",
    "```json",
    JSON.stringify(provenance.get(id) ?? null, null, 2),
    "```",
    "",
    "## Proof contract for the target",
    "",
    contracts[id]
      ? `\`\`\`json\n${JSON.stringify(contracts[id], null, 2)}\n\`\`\``
      : "No Wave 7 proof contract is required for this target.",
    "",
    "## Generated audit-manifest relationships for the target",
    "",
    "```json",
    JSON.stringify(edgeRows, null, 2),
    "```",
    "",
    "## Relevant pending generated-risk rows",
    "",
    "```json",
    JSON.stringify(seedRows, null, 2),
    "```",
    "",
    `## Full text of every cited or declared item (${resolved.length})`,
    "",
    ...resolved.flatMap((sourceId) => {
      const source = items.get(sourceId);
      return [
        `### \`${sourceId}\``,
        "",
        "````markdown",
        source.text.trimEnd(),
        "````",
        "",
      ];
    }),
  ].join("\n");
  const taskPath = join(refuterDir, `${id}.md`);
  writeFileSync(taskPath, `${task}\n`);
  index.push({
    id,
    normalized_sha256: itemContentHash(target.text),
    reasons: selection.get(id),
    cited_items: resolved,
    task: relative(root, taskPath),
  });
}

const additionalCertifierEntries = [
  { id: "ex-a-urysohn-function-on-the-real-line", reasons: ["A6 Remark falsehood repair"] },
  { id: "fs-nth-term-test-converse", reasons: ["A6 Remark falsehood repair"] },
];
const certifierEntries = [...split.material];
for (const entry of additionalCertifierEntries) {
  if (!certifierEntries.some((candidate) => idOf(candidate) === entry.id)) certifierEntries.push(entry);
}
for (const entry of certifierEntries) {
  const id = idOf(entry);
  const target = items.get(id);
  if (!target) throw new Error(`missing certifier target ${id}`);
  const edges = manifest.edges.filter((edge) => edge.source === id);
  const task = [
    `## Assigned repair — \`${id}\``,
    "",
    `Item path: \`${relative(root, target.file)}\``,
    "",
    `Normalized final-text SHA-256 at dispatch: \`${itemContentHash(target.text)}\``,
    "",
    `Split reasons: ${JSON.stringify(typeof entry === "string" ? [] : entry.reasons)}`,
    "",
    `Provenance ledger: \`${provenance.get(id)?.ledger ?? "not found"}\``,
    "",
    "The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.",
    "",
    "Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:",
    "",
    "```json",
    JSON.stringify(edges, null, 2),
    "```",
    "",
    "For a byte-exact cross-check, the current item at dispatch was:",
    "",
    "````markdown",
    target.text.trimEnd(),
    "````",
  ].join("\n");
  writeFileSync(join(certifierDir, `${id}.md`), `${task}\n`);
}

const page = "library/real-analysis/equivalent-forms-of-completeness.md";
const pageText = readFileSync(join(root, page), "utf8");
writeFileSync(join(certifierDir, "page-equivalent-forms-of-completeness.md"), [
  "## Assigned repaired page summary",
  "",
  `Page path: \`${page}\``,
  "",
  "Certify only the mathematical accuracy and citation consistency of the changed summary, and that it matches the page's current item set. This page does not carry an item verification block.",
  "",
  "````markdown",
  pageText.trimEnd(),
  "````",
].join("\n") + "\n");

writeFileSync(join(audit, "wave7-refuter-index.json"), JSON.stringify({
  version: 1,
  scope: "wave7-a6",
  counts: {
    high_or_critical: risk.findings.filter((entry) => entry.required).length,
    ai_generated_statement: [...provenance.values()].filter((row) => row.statement === "ai-generated").length,
    pending_genrisk_seed: pendingSeeds.length,
    largest_cone_consumers: largestConeConsumers.length,
    union: index.length,
  },
  items: index,
}, null, 2) + "\n");

console.log(`assembled ${index.length} refuter task(s), ${certifierEntries.length} item certifier task(s), and 1 page certifier task`);
console.log(`selection counts: ${risk.findings.filter((entry) => entry.required).length} high/critical; ${[...provenance.values()].filter((row) => row.statement === "ai-generated").length} generated statements; ${largestConeConsumers.length} largest-cone consumers; ${pendingSeeds.length} pending genrisk seeds`);

function select(id, reason) {
  if (!id) throw new Error(`empty selection id for ${reason}`);
  if (!selection.has(id)) selection.set(id, []);
  if (!selection.get(id).includes(reason)) selection.get(id).push(reason);
}
function citedIds(text) {
  const fm = frontmatter(text);
  return new Set([
    ...list(fm, "deps"),
    ...list(fm, "justified_by"),
    ...list(fm, "forward_refs"),
    ...[...text.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)].map((match) => match[1].trim()),
  ]);
}
function riskSignals(text, contract) {
  const fm = frontmatter(text);
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const statement = section(body, "Statement") || section(body, "Statement refuted") || section(body, "Definition") || section(body, "Example");
  const proofSteps = ["Proof", "Refutation", "Counterexample", "Verification"]
    .reduce((count, heading) => count + [...section(body, heading).matchAll(/^\d+\.\d+\s+/gm)].length, 0);
  const factLinks = (section(body, "Facts & Assumptions").match(/\[\[/g) ?? []).length;
  const source = `${scalar(fm, "title")}\n${statement}\n${body}`;
  const signals = [];
  const add = (points, reason) => signals.push({ points, reason });
  const deps = list(fm, "deps");
  if (deps.length >= 7) add(3, `${deps.length} declared dependencies`);
  else if (deps.length >= 4) add(2, `${deps.length} declared dependencies`);
  if (factLinks >= 4) add(2, `${factLinks} cited facts`);
  else if (factLinks >= 2) add(1, `${factLinks} cited facts`);
  if (proofSteps >= 10) add(2, `${proofSteps} numbered proof steps`);
  else if (proofSteps >= 6) add(1, `${proofSteps} numbered proof steps`);
  if (/\bif and only if\b|\biff\b|\\Longleftrightarrow/.test(source)) add(3, "biconditional / both-direction claim");
  if (/well[-\s]defined|\bunique(?:ness)?\b|\bexists?\b|\bchoose\b|axiom of choice/i.test(statement)) add(2, "existence, choice, uniqueness, or well-definedness");
  if (/\bempty\b|\bnull\b|\bzero\b|\bone\b|degenerate|endpoint|boundary/i.test(source)) add(2, "boundary-sensitive language");
  if (/induction|recursion|minimal(?:ity)?|well[-\s]order/i.test(source)) add(2, "induction, recursion, or minimality");
  if (/quotient|coset|equivalence class|modulo/i.test(source)) add(2, "quotient or equivalence-class construction");
  if (/supremum|infimum|limit|integral|series|convergen(?:ce|t)/i.test(source)) add(2, "analytic limiting/completeness language");
  if (Array.isArray(contract.finite_smoke) && contract.finite_smoke.length) add(1, "finite countermodel smoke test selected");
  return signals;
}
function section(body, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "m"))?.[1] ?? "";
}
function json(file) {
  return JSON.parse(readFileSync(join(audit, file), "utf8"));
}
function idOf(entry) {
  return typeof entry === "string" ? entry : entry?.id;
}
function frontmatter(text) {
  return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
}
function scalar(fm, key) {
  return fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, "m"))?.[1]?.trim().replace(/^[\"']|[\"']$/g, "") ?? "";
}
function list(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(?:\\r?\\n((?:[ \\t]*-[^\\n]*\\r?\\n?)+)|\\[([^\\]]*)\\])`, "m"));
  if (!match) return [];
  if (match[2] != null) return match[2].split(",").map(clean).filter(Boolean);
  return match[1].split(/\r?\n/).map((line) => clean(line.replace(/^[ \t]*-[ \t]*/, ""))).filter(Boolean);
}
function clean(value) {
  return value.trim().replace(/^[\"']|[\"']$/g, "");
}
function walk(dir, result = []) {
  if (!existsSync(dir)) return result;
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, result);
    else result.push(path);
  }
  return result;
}
