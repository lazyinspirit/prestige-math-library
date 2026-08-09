#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const itemDir = join(root, "items");
const refuterDir = join(audit, "wave9-refuter-tasks");
const certifierDir = join(audit, "wave9-certifier-tasks");
mkdirSync(refuterDir, { recursive: true });
mkdirSync(certifierDir, { recursive: true });

const contractsDoc = json("wave9-proof-contracts.json");
const contracts = contractsDoc.contracts;
const manifest = json("wave9-audit-manifest.json");
const provenance = new Map(readFileSync(join(audit, "wave9-real-analysis.provenance.jsonl"), "utf8")
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
    `## Wave 9 target — \`${id}\``, "",
    "Selection: mandatory Wave 9 high/critical proof-bearing route.", "",
    `Normalized current SHA-256: \`${itemContentHash(target.body)}\``, "",
    "## Complete current target", "", "````markdown", target.body.trimEnd(), "````", "",
    "## Current Wave 9 provenance determination", "", "```json",
    JSON.stringify(provenance.get(id) ?? null, null, 2), "```", "",
    "## Current Wave 9 proof contract", "", "```json",
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
  ["def-oscillation", "correct empty-set oscillation claims while retaining the extended-real convention"],
  ["fs-additive-implies-linear", "replace the invalid basis-vector multiplication argument by a range-based irrational-value contradiction"],
  ["thm-baire-one-continuity-points", "remove a circular dependency/use and prove the needed oscillation implication directly"],
  ["thm-continuity-set-realisation", "replace the false monotone-existence Remark by the boundedness-only conclusion actually constructed"],
  ["thm-semicontinuous-evt", "license the lower-semicontinuous clause through the explicit negation equivalence"],
];
const certifiers = [];
for (const [id, reason] of material) {
  const target = items.get(id);
  const task = [
    `## Assigned repaired item — \`${id}\``, "",
    `Named repair: ${reason}.`, "",
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

const pagePath = "library/real-analysis/monotone-functions-and-discontinuities.md";
const pageText = readFileSync(join(root, pagePath), "utf8");
const pageLabel = "page-monotone-functions-and-discontinuities";
const pageTask = [
  "## Assigned repaired page", "", `Page path: \`${pagePath}\``, "",
  "Named repair: correct the one-sided-limit summary so increasing and decreasing cases use the right supremum/infimum orientation.", "",
  `Full-file exact-final SHA-256 at dispatch: \`${sha256(pageText)}\``, "",
  "Read this complete page and all 43 current items on its page pair from disk. The complete page at dispatch follows.", "",
  "````markdown", pageText.trimEnd(), "````", "",
].join("\n") + "\n";
const pageTaskPath = join(certifierDir, `${pageLabel}.md`);
writeFileSync(pageTaskPath, pageTask);
certifiers.push({ label: pageLabel, type: "page", path: pagePath, reason: "one-sided-limit orientation correction",
  full_file_sha256: sha256(pageText), task: relative(root, pageTaskPath), task_sha256: sha256(pageTask) });

writeFileSync(join(audit, "wave9-refuter-index.json"), `${JSON.stringify({
  version: 1, scope: "wave9-a6", counts: { high_or_critical: refuters.length, union: refuters.length }, items: refuters,
}, null, 2)}\n`);
writeFileSync(join(audit, "wave9-certifier-index.json"), `${JSON.stringify({
  version: 1, scope: "wave9-a6-beta-repairs", counts: { items: material.length, pages: 1, union: certifiers.length }, targets: certifiers,
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
