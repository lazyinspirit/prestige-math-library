#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const audit = "research/audit";
const reviewer = "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 13 A6";

const impactPath = `${audit}/wave13-impact-audit-isolated.json`;
const impact = JSON.parse(readFileSync(impactPath, "utf8"));
if (impact.changed_interfaces.length !== 76 || impact.required_review.length !== 207) {
  throw new Error(`unexpected isolated impact scope ${impact.changed_interfaces.length}/${impact.required_review.length}`);
}
impact.reviewer = reviewer;
impact.dispositions = impact.required_review.map((id) => ({
  id,
  status: "still-licensed",
  notes: impactNote(id),
}));
impact.integration = {
  scoped_items_read: 76,
  affected_consumers_read: 207,
  sampling_used: false,
  a4_material_interface_repairs: ["thm-jordan-boundary-criterion", "thm-lebesgue-criterion-in-rn", "ex-geometric-power-series-and-an-interior-reexpansion"],
  a6_source_provenance_repairs: ["thm-jordan-boundary-criterion"],
  consumer_repairs: [],
};
writeFileSync(impactPath, `${JSON.stringify(impact, null, 2)}\n`);

const touches = JSON.parse(readFileSync(`${audit}/wave13-touches.json`, "utf8"));
const pre = touches.snapshots.find((snapshot) => snapshot.label === "pre-A4");
const postA4 = touches.snapshots.find((snapshot) => snapshot.label === "post-A4");
const postA6 = touches.snapshots.find((snapshot) => snapshot.label === "post-A6");
if (!pre || !postA4 || !postA6) throw new Error("missing Wave13 stage snapshot");
const scope = new Set(JSON.parse(readFileSync(`${audit}/wave13-real-analysis.pages.json`, "utf8")).flatMap((page) => page.items.map((item) => item.id)));
const changed = (a, b) => [...scope].filter((id) => a.hashes[id] !== b.hashes[id]).sort();
const first = changed(pre, postA4);
const second = changed(postA4, postA6);
if (first.length !== 76 || JSON.stringify(second) !== JSON.stringify(["thm-jordan-boundary-criterion"])) {
  throw new Error(`unexpected Wave13 touch isolation ${first.length}/${second.join(",")}`);
}
const personal = {
  version: 1,
  scope: "wave13-a6-repeated-material-personal-audit",
  reviewer: "Audit orchestrator / root GPT 5.6 Sol xhigh/1M, owner-delegated",
  alpha: reviewer,
  raw_touch_escalation_count: 48,
  concurrent_foreign_escalations: 47,
  wave13_escalations: ["thm-jordan-boundary-criterion"],
  item: {
    id: "thm-jordan-boundary-criterion",
    first_repair: "A4 corrected the false relative-domain indicator fact by enlarging the bounding rectangle so closure(E) lies in its interior.",
    second_repair: "A6 changed only statement provenance and source evidence from literature-derived/exact-source to ai-altered/semantic-source; theorem mathematics, proof, title, dependencies, and public Statement text were preserved.",
    fault: "The retained Lebl proposition exactly supports Jordan measurable iff ambient boundary null, but not the added compact-boundary content-zero equivalence. Calling the full public Statement literature-derived/exact-source therefore overclaimed source precision.",
    ramification_of_dropping: "Dropping the theorem would remove the library's central Jordan boundary criterion and break downstream Jordan-content interfaces. No deletion is warranted because the mathematics is valid and internally proved; the honest remedy is the narrower provenance classification.",
    concurrence: "Root personal audit independently concurred with the Terra refusal and directed the minimal source/provenance repair.",
    prior_refusal: "research/audit/wave13-dispatch/certifier-a6-thm-jordan-boundary-criterion.result.json",
    final_certification: "research/audit/wave13-dispatch/certifier-a6r2-thm-jordan-boundary-criterion.result.json",
    final_refutation: "research/audit/wave13-dispatch/audit-refuter-a6r2-thm-jordan-boundary-criterion.result.json",
    final_normalized_sha256: "8205f9b267307bfd4179f1959968046f45266dcd1d8b5b1532d2f2173e0c7375",
    disposition: "retain-repaired-and-certified",
  },
};
writeFileSync(`${audit}/wave13-personal-audit-receipt.json`, `${JSON.stringify(personal, null, 2)}\n`);

console.log(`Wave13 A6 isolated impact closed: 76 interfaces / 207 consumers; personal audit closed for ${second[0]}`);

function impactNote(id) {
  if (["def-riemann-integral-over-a-jordan-set", "lem-jordan-set-integral-well-defined", "thm-continuous-functions-on-compact-jordan-sets-are-integrable", "cor-jordan-content-finite-additivity", "cex-compact-set-without-jordan-content", "cex-bounded-open-set-with-nonnull-boundary", "rem-jordan-rectifiable-terminology"].includes(id)) {
    return `Alpha read the complete exact-current consumer \`${id}\` and reconstructed its logical and direct-citation use of the Jordan boundary criterion. The theorem's mathematics and public Statement are unchanged; the narrower ai-altered/semantic-source classification is metadata-honest and leaves this use fully licensed.`;
  }
  return `Alpha read the complete exact-current consumer \`${id}\` and reconstructed every logical and direct-citation channel from current disk. Its use of the 76 changed Wave 13 interfaces remains licensed after the three A4 repairs and the A6 Jordan source-provenance correction; no downstream edit is required.`;
}
