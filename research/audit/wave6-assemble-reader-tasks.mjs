#!/usr/bin/env node

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, join } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const itemDir = join(root, "items");
const refuterDir = join(audit, "wave6-refuter-tasks");
const certifierDir = join(audit, "wave6-certifier-tasks");
mkdirSync(refuterDir, { recursive: true });
mkdirSync(certifierDir, { recursive: true });

const split = json("wave6-split.json");
const contracts = json("wave6-proof-contracts.json").contracts;
const manifest = json("wave6-audit-manifest.json");
const ids = [
  ...split.pure.map((entry) => typeof entry === "string" ? entry : entry.id),
  ...split.material.map((entry) => typeof entry === "string" ? entry : entry.id),
].sort();

const items = new Map();
const aliases = new Map();
for (const file of walk(itemDir).filter((path) => path.endsWith(".md"))) {
  const text = readFileSync(file, "utf8");
  const id = scalar(frontmatter(text), "id") || basename(file, ".md");
  items.set(id, { id, file, text });
  for (const alias of list(frontmatter(text), "aliases")) aliases.set(alias, id);
}

const repairIntent = {
  "thm-laurent-ordered-field": "Added the exact canonical-natural Archimedean-field source needed by the repaired inference; verify that the source licenses the step and that the theorem remains valid.",
  "thm-laurent-cauchy-complete": "Added the natural-number linear-order source needed for the index comparison in the Cauchy argument; verify the repaired licensing and the complete proof.",
  "cor-laurent-nested-intervals": "Added the natural-number linear-order source needed for monotonicity of the indexed interval endpoints; verify the repaired licensing and the complete proof.",
  "cex-zero-times-infinity-indeterminate": "Replaced the false claim that the product sequence has no limit of any kind with the correct extended-real behavior: it tends to positive infinity; verify all three product examples and the conclusion.",
  "cex-limsup-infinite-not-attained-in-r": "Removed an unused duplicated fact, linked the relevant remark directly, and renumbered the proof facts; verify that every remaining citation and numbered use is exact and the counterexample still proves its claim.",
};

for (const id of ids) {
  const target = items.get(id);
  if (!target) throw new Error(`missing target ${id}`);
  const cited = new Set([
    ...list(frontmatter(target.text), "deps"),
    ...list(frontmatter(target.text), "justified_by"),
    ...list(frontmatter(target.text), "forward_refs"),
    ...[...target.text.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)].map((match) => match[1].trim()),
  ]);
  cited.delete(id);
  const resolved = [...cited].map((name) => aliases.get(name) ?? name).sort();
  const missing = resolved.filter((name) => !items.has(name));
  if (missing.length) throw new Error(`${id}: unresolved cited item(s): ${missing.join(", ")}`);
  const edgeRows = manifest.edges.filter((edge) => edge.source === id);
  const task = [
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
    "## Proof contract for the target",
    "",
    contracts[id]
      ? `\`\`\`json\n${JSON.stringify(contracts[id], null, 2)}\n\`\`\``
      : "No proof contract is required for this non-proof-bearing item.",
    "",
    "## Generated audit-manifest relationships for the target",
    "",
    "```json",
    JSON.stringify(edgeRows, null, 2),
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
  writeFileSync(join(refuterDir, `${id}.md`), `${task}\n`);
}

for (const entry of split.material) {
  const id = typeof entry === "string" ? entry : entry.id;
  const target = items.get(id);
  const edges = manifest.edges.filter((edge) => edge.source === id);
  const task = [
    `## Assigned repair — \`${id}\``,
    "",
    `Item path: \`items/${id}.md\``,
    "",
    `Normalized final-text SHA-256 at dispatch: \`${itemContentHash(target.text)}\``,
    "",
    `Named repair: ${repairIntent[id]}`,
    "",
    `Split reasons: ${JSON.stringify(typeof entry === "string" ? [] : entry.reasons)}`,
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

console.log(`assembled ${ids.length} refuter task(s) and ${split.material.length} certifier task(s)`);

function json(file) {
  return JSON.parse(readFileSync(join(audit, file), "utf8"));
}

function frontmatter(text) {
  return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
}

function scalar(fm, key) {
  return fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, "m"))?.[1]?.trim().replace(/^['"]|['"]$/g, "") ?? "";
}

function list(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(?:\\r?\\n((?:[ \\t]*-[^\\n]*\\r?\\n?)+)|\\[([^\\]]*)\\])`, "m"));
  if (!match) return [];
  if (match[2] != null) return match[2].split(",").map(clean).filter(Boolean);
  return match[1].split(/\r?\n/).map((line) => clean(line.replace(/^[ \t]*-[ \t]*/, ""))).filter(Boolean);
}

function clean(value) {
  return value.trim().replace(/^['"]|['"]$/g, "");
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
