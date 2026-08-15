#!/usr/bin/env node
// Emit the step-8 adjudication ledger, one row per judge rejection.
// item_sha256 is the FULL normalized hash frozen before any repair, matching the
// pre-step8 touchlog baseline that step8-guard compares the tree against.
import fs from "node:fs";

const dec = JSON.parse(fs.readFileSync("research/frontier-13-alpha-a-step8-decisions.json", "utf8"));
const pre = JSON.parse(fs.readFileSync("research/frontier-13-alpha-a-step8-prehashes.json", "utf8"));
const verdicts = fs.readFileSync("research/frontier-13-judge.jsonl", "utf8").trim().split("\n").map(JSON.parse);

const rows = [];
for (const v of verdicts) {
  if (v.keep !== false) continue;
  const d = dec[v.id]?.[v.model];
  if (!d) throw new Error(`no adjudication for ${v.id} / ${v.model}`);
  if (!pre[v.id]) throw new Error(`no frozen hash for ${v.id}`);
  rows.push({
    id: v.id,
    model: v.model,
    context_sha256: v.context_sha256,
    item_sha256: pre[v.id],
    outcome: d.outcome,
    defect_type: d.defect_type,
    note: d.note,
  });
}
fs.writeFileSync("research/frontier-13-judge-adjudications.jsonl", rows.map((r) => JSON.stringify(r)).join("\n") + "\n");

const by = {};
for (const r of rows) by[r.outcome] = (by[r.outcome] ?? 0) + 1;
console.log(`rows ${rows.length}`, JSON.stringify(by));
const fatalItems = [...new Set(rows.filter((r) => r.outcome === "confirmed_fatal").map((r) => r.id))];
console.log(`fatal items (${fatalItems.length}):`);
for (const id of fatalItems) console.log("  " + id);
