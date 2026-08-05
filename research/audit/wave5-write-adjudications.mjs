import fs from "node:fs";
import { itemContentHash } from "../../tools/item-hash.mjs";

const judge = fs.readFileSync("research/audit/wave5-judge.jsonl", "utf8")
  .trim().split("\n").map((l) => JSON.parse(l));
const rejections = judge.filter((r) => r.keep === false);

// outcome per (id, model). defect_type only on confirmed_fatal.
const D = {
  // ---- CONFIRMED FATAL ----
  "fs-consecutive-differences-null-implies-cauchy|deepseek-v4-pro": ["confirmed_fatal", "other"],
  "def-regular-and-t3-spaces|deepseek-v4-pro": ["confirmed_fatal", "other"],
  "ex-contractive-sequence-fixed-point|claude-sonnet-5": ["confirmed_fatal", "other"],
  "thm-radial-straight-line-map-on-punctured-rn|deepseek-v4-pro": ["confirmed_fatal", "dependency_citation"],
  "lem-radial-normalisation-is-continuous|deepseek-v4-pro": ["confirmed_fatal", "dependency_citation"],
  "lem-radial-normalisation-is-continuous|claude-sonnet-5": ["confirmed_fatal", "dependency_citation"],
  // ---- FALSE POSITIVE ----
  "def-order-topology-on-an-ordinal|deepseek-v4-pro": ["false_positive"],
  "thm-dini|deepseek-v4-pro": ["false_positive"],
  "cex-cauchy-rationals-no-rational-limit|deepseek-v4-pro": ["false_positive"],
};
// everything else: confirmed_nonfatal
const rows = rejections.map((r) => {
  const key = `${r.id}|${r.model}`;
  const [outcome, defect_type] = D[key] || ["confirmed_nonfatal"];
  const text = fs.readFileSync(`items/${r.id}.md`, "utf8");
  const row = {
    id: r.id,
    model: r.model,
    context_sha256: r.context_sha256,
    outcome,
    item_sha256: itemContentHash(text),
    at: new Date("2026-08-06T00:00:00Z").toISOString(),
  };
  if (defect_type) row.defect_type = defect_type;
  return row;
});
fs.writeFileSync("research/audit/wave5-judge-adjudications.jsonl",
  rows.map((r) => JSON.stringify(r)).join("\n") + "\n");
const tally = {};
for (const r of rows) tally[r.outcome] = (tally[r.outcome] || 0) + 1;
console.log("rows", rows.length, tally);
console.log("distinct fatal items", [...new Set(rows.filter(r=>r.outcome==="confirmed_fatal").map(r=>r.id))]);
