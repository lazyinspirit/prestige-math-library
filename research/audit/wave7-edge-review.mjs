#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const itemsDir = join(root, "items");
const manifest = JSON.parse(readFileSync(join(audit, "wave7-audit-manifest.json"), "utf8"));
const contracts = JSON.parse(readFileSync(join(audit, "wave7-proof-contracts.json"), "utf8")).contracts;
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : fallback;
};
const from = Number(option("--from", "1"));
const to = Number(option("--to", String(Number.MAX_SAFE_INTEGER)));
const mode = option("--mode", "all");

const surface = manifest.edges.filter((edge) =>
  edge.kind === "published-backward" || edge.kind === "cross-batch" || edge.kind === "forward");
const records = surface.map((edge, index) => build(edge, index + 1));
const selected = records.filter((record) =>
  record.index >= from && record.index <= to && (mode === "all" || record.mode === mode || (mode === "noncontract" && record.mode !== "proof-contract")));

console.log(`# Wave 7 cross-level/cross-batch edge review ${from}-${Math.min(to, records.length)} (${mode})`);
console.log("");
for (const record of selected) {
  console.log(`## ${record.index}. ${record.edge.source} -> ${record.edge.target}`);
  console.log("");
  console.log(`Kind: ${record.edge.kind}; edge type: ${record.edge.edge_type}; evidence: ${record.mode}.`);
  console.log("");
  console.log("SOURCE USE:");
  console.log(record.source_use || "(declared dependency only; no body wikilink)");
  console.log("");
  console.log("TARGET TEXT:");
  console.log(record.target_text || "(no public section found)");
  console.log("");
}

function build(edge, index) {
  const sourceText = readFileSync(join(itemsDir, `${edge.source}.md`), "utf8");
  const targetText = readFileSync(join(itemsDir, `${edge.target}.md`), "utf8");
  const citations = (contracts[edge.source]?.citations ?? []).filter((citation) => citation.source === edge.target);
  if (citations.length) {
    const facts = factMap(body(sourceText));
    return {
      index,
      edge,
      mode: "proof-contract",
      source_use: citations.map((citation) => {
        const use = facts.get(citation.fact) ?? `[${citation.fact}] (fact text not parsed)`;
        return `${use}\nProof steps citing ${citation.fact}: ${citation.uses.join(", ")}.`;
      }).join("\n\n"),
      target_text: citations.map((citation) =>
        `${citation.source_section} exact quote:\n${citation.quote}`).join("\n\n"),
    };
  }

  const paragraphs = body(sourceText).split(/\r?\n\s*\r?\n/)
    .filter((paragraph) => paragraph.includes(`[[${edge.declared_target}`) || paragraph.includes(`[[${edge.target}`));
  if (edge.edge_type === "forward_ref") {
    return { index, edge, mode: "forward-reference", source_use: paragraphs.join("\n\n"), target_text: publicSection(targetText) };
  }
  if (paragraphs.length) {
    return { index, edge, mode: "body-link", source_use: paragraphs.join("\n\n"), target_text: publicSection(targetText) };
  }
  return {
    index,
    edge,
    mode: "metadata-only",
    source_use: `Title: ${scalar(frontmatter(sourceText), "title")}\n${publicSection(sourceText)}`,
    target_text: publicSection(targetText),
  };
}

function frontmatter(text) {
  return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
}
function body(text) {
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}
function scalar(fm, key) {
  return fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, "m"))?.[1]?.trim().replace(/^["']|["']$/g, "") ?? "";
}
function publicSection(text) {
  const itemBody = body(text);
  for (const heading of ["Statement", "Statement refuted", "Definition", "Example", "Construction"]) {
    const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = itemBody.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "m"));
    if (match) return `## ${heading}\n${match[1].trim()}`;
  }
  return itemBody.trim();
}
function factMap(itemBody) {
  const section = itemBody.match(/^##\s+Facts & Assumptions\s*$\r?\n([\s\S]*?)(?=^##\s+|(?![\s\S]))/m)?.[1] ?? "";
  const map = new Map();
  const matches = [...section.matchAll(/^\[([FAL]\d+)\]\s+([\s\S]*?)(?=^\[[FAL]\d+\]\s+|(?![\s\S]))/gm)];
  for (const match of matches) map.set(match[1], `[${match[1]}] ${match[2].trim()}`);
  return map;
}
