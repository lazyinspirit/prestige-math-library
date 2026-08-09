#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const itemDir = join(root, "items");
const refuterDir = join(audit, "wave10-refuter-tasks");
const certifierDir = join(audit, "wave10-certifier-tasks");
mkdirSync(refuterDir, { recursive: true });
mkdirSync(certifierDir, { recursive: true });

const contractsDoc = json("wave10-proof-contracts.json");
const contracts = contractsDoc.contracts;
const manifest = json("wave10-audit-manifest.json");
const provenance = new Map(readFileSync(join(audit, "wave10-real-analysis.provenance.jsonl"), "utf8")
  .split(/\r?\n/).filter(Boolean).map((line) => { const row = JSON.parse(line); return [row.id, row]; }));

const items = new Map();
const aliases = new Map();
for (const file of walk(itemDir).filter((path) => path.endsWith(".md"))) {
  const body = readFileSync(file, "utf8");
  const fm = frontmatter(body);
  const id = scalar(fm, "id") || basename(file, ".md");
  items.set(id, { id, file, body });
  for (const alias of list(fm, "aliases")) aliases.set(alias, id);
}

const refuters = [];
for (const id of contractsDoc.scope) {
  const target = items.get(id);
  if (!target) throw new Error(`missing refuter target ${id}`);
  const cited = citedIds(target.body);
  cited.delete(id);
  const dependencies = [...cited].map((name) => aliases.get(name) ?? name).sort();
  const missing = dependencies.filter((name) => !items.has(name));
  if (missing.length) throw new Error(`${id}: unresolved cited item(s): ${missing.join(", ")}`);
  const task = [
    `## Wave 10 target — \`${id}\``, "",
    "Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).", "",
    `Normalized current SHA-256: \`${itemContentHash(target.body)}\``, "",
    "## Complete current target", "", "````markdown", target.body.trimEnd(), "````", "",
    "## Current Wave 10 provenance determination", "", "```json",
    JSON.stringify(provenance.get(id) ?? null, null, 2), "```", "",
    "## Current Wave 10 proof contract", "", "```json",
    JSON.stringify(contracts[id], null, 2), "```", "",
    "## Generated cross-batch/cross-level relationships sourced by this target", "", "```json",
    JSON.stringify(manifest.edges.filter((edge) => edge.source === id && edge.edge_type !== "same-page"), null, 2), "```", "",
    `## Complete current text of every declared or cited item (${dependencies.length})`, "",
    ...dependencies.flatMap((sourceId) => [
      `### \`${sourceId}\``, "", "````markdown", items.get(sourceId).body.trimEnd(), "````", "",
    ]),
  ].join("\n") + "\n";
  const path = join(refuterDir, `${id}.md`);
  writeFileSync(path, task);
  refuters.push({ id, normalized_sha256: itemContentHash(target.body), dependencies,
    task: relative(root, path), task_sha256: sha256(task) });
}

const material = [
  ["lem-integral-elementary-bounds", "replace the false equality-characterises-constants Remark with the correct sharpness statement and Dirichlet-indicator witness"],
  ["thm-monotonicity-from-the-derivative", "make the converse's nonnegative-difference-quotient limit inference explicit in L3 and step 1.2"],
  ["ex-integral-of-the-floor-function", "add the integer-part uniqueness fact L1 to the exact step 1.2 that uses it and update the proof contract accordingly"],
];
const certifiers = [];
for (const [id, reason] of material) {
  const target = items.get(id);
  const task = [
    `## Assigned repaired item — \`${id}\``, "", `Named repair: ${reason}.`, "",
    `Item path: \`${relative(root, target.file)}\``, "",
    `Normalized exact-final SHA-256 at dispatch: \`${itemContentHash(target.body)}\``, "",
    "Read the exact current item and relevant dependencies from disk. The exact current text at dispatch follows for hash-bound comparison.", "",
    "````markdown", target.body.trimEnd(), "````", "",
    "## Current manifest rows sourced by this item", "", "```json",
    JSON.stringify(manifest.edges.filter((edge) => edge.source === id), null, 2), "```", "",
  ].join("\n") + "\n";
  const path = join(certifierDir, `${id}.md`);
  writeFileSync(path, task);
  certifiers.push({ label: id, type: "item", id, reason,
    normalized_sha256: itemContentHash(target.body), task: relative(root, path), task_sha256: sha256(task) });
}

const pagePath = "library/real-analysis/the-derivative-and-mean-value-theorems.md";
const pageText = readFileSync(join(root, pagePath), "utf8");
const pageLabel = "page-the-derivative-and-mean-value-theorems";
const pageTask = [
  "## Assigned repaired page", "", `Page path: \`${pagePath}\``, "",
  "Named repair: correct the objective sentence to identify the four central theorems whose hypotheses use differentiability, rather than saying all four are mean value theorems.", "",
  `Full-file exact-final SHA-256 at dispatch: \`${sha256(pageText)}\``, "",
  "Read this complete page and all 29 current items on its page pair from disk. The complete page at dispatch follows.", "",
  "````markdown", pageText.trimEnd(), "````", "",
].join("\n") + "\n";
const pageTaskPath = join(certifierDir, `${pageLabel}.md`);
writeFileSync(pageTaskPath, pageTask);
certifiers.push({ label: pageLabel, type: "page", path: pagePath, reason: "four-theorem objective correction",
  full_file_sha256: sha256(pageText), task: relative(root, pageTaskPath), task_sha256: sha256(pageTask) });

const sourceTasks = [
  {
    label: "source-unlp-tls",
    url: "https://www.mate.unlp.edu.ar/practicas/51_5_0505202117553.pdf",
    ids: ["cex-differentiable-with-unbounded-derivative-is-not-lipschitz"],
    caveat: "curl failed certificate validation: unable to get local issuer certificate",
  },
  {
    label: "source-mcgill-large-transfer",
    url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf",
    ids: ["def-derivative", "thm-caratheodory-characterisation", "cor-differentiable-implies-continuous", "thm-derivative-linear-approximation-form", "cex-absolute-value-is-not-differentiable-at-zero", "ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative", "fs-vanishing-derivative-forbids-strict-increase", "rem-derivative-conventions"],
    caveat: "endpoint returned HTTP 200 and 207480/290259 bytes before the 22-second liveness timeout",
  },
];
for (const source of sourceTasks) {
  const task = [
    `## Assigned source disposition — \`${source.label}\``, "", `Exact URL: ${source.url}`, "",
    `Observed automated-liveness caveat: ${source.caveat}.`, "",
    "Use web access to determine the exact current disposition. Check whether the URL is usable by a reader and whether the cited claim is materially supported. A transient/transport-only failure may be retained only if you can give concrete evidence; otherwise say replacement is required.", "",
    "## Complete current citing item text(s)", "",
    ...source.ids.flatMap((id) => [`### \`${id}\``, "", "````markdown", items.get(id).body.trimEnd(), "````", ""]),
  ].join("\n") + "\n";
  const path = join(certifierDir, `${source.label}.md`);
  writeFileSync(path, task);
  certifiers.push({ label: source.label, type: "source", url: source.url, ids: source.ids,
    task: relative(root, path), task_sha256: sha256(task) });
}

writeFileSync(join(audit, "wave10-refuter-index.json"), `${JSON.stringify({
  version: 1, scope: "wave10-a6", counts: { high_or_critical: refuters.length, union: refuters.length }, items: refuters,
}, null, 2)}\n`);
writeFileSync(join(audit, "wave10-certifier-index.json"), `${JSON.stringify({
  version: 1, scope: "wave10-a6-beta-repairs-and-source-dispositions",
  counts: { items: material.length, pages: 1, sources: sourceTasks.length, union: certifiers.length }, targets: certifiers,
}, null, 2)}\n`);
console.log(`assembled ${refuters.length} refuter tasks and ${certifiers.length} certifier tasks`);

function citedIds(text) {
  const fm = frontmatter(text);
  return new Set([
    ...list(fm, "deps"), ...list(fm, "justified_by"), ...list(fm, "forward_refs"), ...list(fm, "external_refs"),
    ...[...text.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)].map((match) => match[1].trim()),
  ]);
}
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
function json(file) { return JSON.parse(readFileSync(join(audit, file), "utf8")); }
function sha256(value) { return createHash("sha256").update(value).digest("hex"); }
