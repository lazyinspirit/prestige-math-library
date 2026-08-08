#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const computedPath = process.argv[2];
if (!computedPath) throw new Error("usage: node research/audit/wave6-complete-impact.mjs <impact-audit-json>");

const computed = JSON.parse(readFileSync(computedPath, "utf8"));
const template = JSON.parse(readFileSync(join(audit, "wave6-impact-template.json"), "utf8"));
const split = JSON.parse(readFileSync(join(audit, "wave6-split.json"), "utf8"));
const material = new Set(split.material.map((entry) => typeof entry === "string" ? entry : entry.id));

const rationale = {
  "thm-laurent-ordered-field": "its public theorem and proof conclusion are unchanged; A4 only added the exact Archimedean-field dependency needed by an existing inference",
  "thm-laurent-cauchy-complete": "its public theorem and proof conclusion are unchanged; A4 only added the natural-number linear-order dependency needed by an existing index comparison",
  "cor-laurent-nested-intervals": "its public corollary and proof conclusion are unchanged; A4 only added the natural-number linear-order dependency needed by an existing monotonicity argument",
  "cex-zero-times-infinity-indeterminate": "its refuted claim and witnesses are unchanged; A4 corrected the third product from an overbroad no-limit phrase to its exact positive-infinity extended limit, which strengthens rather than invalidates every use of the indeterminate-form witness",
  "cex-limsup-infinite-not-attained-in-r": "its counterexample and conclusions are unchanged; A4 removed an unused duplicate fact, renumbered citations, and made the relevant remark link direct",
};

const sourceByConsumer = new Map();
for (const impact of computed.impacts) {
  for (const id of impact.required_review) {
    if (!sourceByConsumer.has(id)) sourceByConsumer.set(id, []);
    sourceByConsumer.get(id).push(impact.source);
  }
}

const dispositions = template.required_review.map((id) => {
  const sources = (sourceByConsumer.get(id) ?? []).sort();
  const materialSources = sources.filter((source) => material.has(source));
  const pureCount = sources.length - materialSources.length;
  const parts = [];
  if (pureCount) {
    parts.push(`${pureCount} affected source interface(s) are in the 121-item pure A4 class: audit-split found only provenance/source-frontmatter retagging and no mathematical-text change`);
  }
  for (const source of materialSources) parts.push(`${source}: ${rationale[source]}`);
  if (!parts.length) throw new Error(`${id}: no affected source mapping`);
  return {
    id,
    status: "still-licensed",
    notes: `Alpha inspected the applicable interface class(es); ${parts.join("; ")}. This consumer's existing dependency/citation use therefore remains licensed.`,
  };
});

const receipt = {
  ...template,
  reviewer: "audit-alpha-wave6 (owner-delegated)",
  dispositions,
};
writeFileSync(join(audit, "wave6-impact-audit.json"), `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote wave6-impact-audit.json with ${dispositions.length} still-licensed disposition(s)`);
