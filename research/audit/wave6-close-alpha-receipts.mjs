#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const risk = JSON.parse(readFileSync("/tmp/wave6-risk.json", "utf8"));
const required = new Map(
  risk.findings.filter((entry) => entry.required).map((entry) => [entry.id, entry]),
);
const contractFiles = [
  "wave6-real-analysis-laurent.proof-contracts.json",
  "wave6-real-analysis-limits.proof-contracts.json",
  "wave6-topology.proof-contracts.json",
];

let reviewed = 0;
for (const name of contractFiles) {
  const file = join(audit, name);
  const document = JSON.parse(readFileSync(file, "utf8"));
  for (const id of document.scope) {
    const route = required.get(id);
    if (!route) continue;
    const resultName = `audit-refuter-${id}.result.json`;
    const result = JSON.parse(readFileSync(join(audit, "wave6-dispatch", resultName), "utf8"));
    if (result.role !== "audit-refuter" || result.runner !== "deepseek" ||
        result.model !== "deepseek-v4-pro" || result.sandbox !== "read-only" ||
        result.exit_code !== 0 || result.ok !== true || !/VERDICT:\s*CLEAN/.test(result.tail ?? "")) {
      throw new Error(`${id}: no successful DeepSeek V4 Pro CLEAN result`);
    }
    const boundary = section(result.tail, "BOUNDARY:", "SOURCES:");
    const checked = section(result.tail, "CHECKED:", null);
    document.contracts[id].risk_review = {
      status: "complete",
      reviewer: "Audit-Alpha wave 6 (owner-delegated); DeepSeek V4 Pro audit-refuter",
      notes: `${route.tier} risk (${route.score}), routed by risk-report.mjs. ` +
        `The read-only cross-family refuter inspected the complete target, supplied dependency texts, citation direction and boundary cases and returned CLEAN. ` +
        `Boundary evidence: ${clip(boundary, 360)} Checked surface: ${clip(checked, 220)} ` +
        `Audit-Alpha adjudicated the return from disk and found no fatal defect. Evidence: research/audit/wave6-dispatch/${resultName}.`,
    };
    reviewed += 1;
  }
  writeFileSync(file, `${JSON.stringify(document, null, 2)}\n`);
}
if (reviewed !== required.size) throw new Error(`reviewed ${reviewed}/${required.size} required contracts`);

const genriskPath = join(audit, "genrisk.json");
const genrisk = JSON.parse(readFileSync(genriskPath, "utf8"));
const dispositions = {
  "cex-laurent-nested-intervals-empty": "verified-generated|Retag declined after source review because the explicit non-Archimedean Laurent-series witness is a bespoke construction, not a located literature statement; its exact unrestricted-NIP claim should not be restated or narrowed. Unfolding would duplicate a long valuation argument across three logical consumers and weaken citation precision. Alpha counterexample-searched every endpoint and valuation case; the current historical judge passes, and the current DeepSeek V4 Pro refuter read the target plus every supplied dependency and returned CLEAN. The six-item cone remains flagged and future batches may not add dependencies on it.",
  "rem-r-native-topology-scope": "verified-generated|This is a repository-local convention bridge, so no external result can establish the exact wording and retagging is unavailable. It has no reverse-dependency consumer, only six explanatory wikilinks, so restating, unfolding, or narrowing would not remove a load-bearing proof edge. Alpha checked each asserted equivalence and empty-set case; the current historical judge passes, and the DeepSeek V4 Pro refuter returned CLEAN after reading the full Remark and supplied dependencies. The direct-citation cone remains flagged.",
  "cex-zero-times-infinity-indeterminate": "narrow|A4 already applied the ladder's narrow step: the third witness no longer overclaims that its product has no limit and now states the exact extended limit +infinity, while the three products still establish indeterminacy. There is no reverse-deps consumer, only three orientation links. The final text was counterexample-checked by Alpha, read CLEAN by DeepSeek V4 Pro, and independently CERTIFIED by GPT 5.6 Terra at normalized hash c8540f4b61482b0e72b08333b770ac6f4f747c66680519ecc5f909e1b3c40d36.",
  "cex-closed-set-with-an-isolated-point-is-not-perfect": "verified-generated|Retag declined because no exact source for this library's chosen witness was located; the claim is already the narrow elementary counterexample needed by its two orientation consumers, and it has no reverse-deps edge to unfold. Alpha checked closedness and the isolated-point boundary directly; the current historical judge passes, and the DeepSeek V4 Pro refuter read the target and dependencies and returned CLEAN. The two-item direct-citation cone remains flagged.",
  "cex-limsup-infinite-not-attained-in-r": "verified-generated|Retag declined because the exact alternating zero/unbounded witness was not located as a sourced statement; its claim is already the narrow counterexample required, and its two consumers are orientation links rather than logical dependency edges, so unfolding would add duplication without removing a reverse-deps cone. Alpha checked all index and extended-limsup cases; DeepSeek V4 Pro returned CLEAN and GPT 5.6 Terra independently CERTIFIED the repaired current text at normalized hash 75f6b52dbb4b55bf29a648a5b64e0d49206b781a28f50b7367c6548ef176363a. The direct-citation cone remains flagged.",
  "cex-limsup-product-strict": "verified-generated|Retag declined because the exact anti-phase alternating witness was not located as a sourced statement. The claim is already a minimal explicit strictness witness and has no reverse-deps consumer; restating, unfolding, or narrowing would not improve its two orientation links. Alpha recomputed both limsups and the zero product; the current historical judge passes, and the DeepSeek V4 Pro refuter returned CLEAN after inspecting all dependencies and boundary cases. The direct-citation cone remains flagged.",
  "ex-standard-limits-worked": "verified-generated|Retag declined because this exact collection and presentation of worked limits is library-local. Each displayed limit was independently recomputed; the item has no reverse-deps consumer and only two orientation links, so unfolding would merely duplicate the same elementary estimates. The current historical judge passes, and the DeepSeek V4 Pro refuter read every numbered step, source and boundary and returned CLEAN. The direct-citation cone remains flagged.",
  "rem-extended-real-conventions": "verified-generated|This is a library-local convention ledger, so no external source can establish its exact scope. Its sole consumer is an explanatory wikilink and there is no reverse-deps edge to unfold; the wording already narrows every undefined operation precisely. Alpha checked each partial-arithmetic convention and both cited gap examples; the current historical judge passes, and the DeepSeek V4 Pro refuter returned CLEAN after reading the full Remark and dependencies. The one-item direct-citation cone remains flagged.",
};
let disposed = 0;
for (const seed of genrisk.seeds) {
  const encoded = dispositions[seed.id];
  if (!encoded) continue;
  const split = encoded.indexOf("|");
  seed.disposition = {
    status: encoded.slice(0, split),
    by: "Audit-Alpha wave 6 (GPT 5.6 Sol, xhigh; owner-delegated)",
    notes: encoded.slice(split + 1),
  };
  disposed += 1;
}
if (disposed !== Object.keys(dispositions).length) {
  throw new Error(`disposed ${disposed}/${Object.keys(dispositions).length} Wave 6 seeds`);
}
writeFileSync(genriskPath, `${JSON.stringify(genrisk, null, 2)}\n`);

console.log(`completed ${reviewed} risk reviews and ${disposed} generated-risk dispositions`);

function section(text, start, end) {
  const from = text.indexOf(start);
  if (from < 0) return "not separately labelled";
  const rest = text.slice(from + start.length);
  const to = end ? rest.indexOf(end) : -1;
  return (to >= 0 ? rest.slice(0, to) : rest).replace(/```/g, "").replace(/\s+/g, " ").trim();
}

function clip(text, length) {
  if (text.length <= length) return text;
  return `${text.slice(0, length - 1).trimEnd()}…`;
}
