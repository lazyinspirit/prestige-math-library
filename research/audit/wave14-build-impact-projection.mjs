#!/usr/bin/env node

// Build a Wave14-only impact projection without rewriting the authoritative
// full-corpus touch snapshots. Wave11-13 finalization changed unrelated public
// surfaces after Wave14's pre-A4 baseline.

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const audit = "research/audit";
const touchesPath = `${audit}/wave14-touches.json`;
const pagesPath = `${audit}/wave14-real-analysis.pages.json`;
const projectionPath = `${audit}/wave14-impact-touches-isolated.json`;
const isolationPath = `${audit}/wave14-impact-isolation.json`;

const touches = JSON.parse(readFileSync(touchesPath, "utf8"));
const pages = JSON.parse(readFileSync(pagesPath, "utf8"));
const scope = [...new Set(pages.flatMap((page) => page.items.map((item) => item.id)))].sort();
if (scope.length !== 25) throw new Error(`expected 25 Wave14 ids, got ${scope.length}`);

const before = touches.snapshots.find((snapshot) => snapshot.label === "pre-A4");
const after = touches.snapshots.find((snapshot) => snapshot.label === "post-A6");
if (!before || !after) throw new Error("missing raw pre-A4 or post-A6 snapshot");

const scopeSet = new Set(scope);
const rawChanged = [...new Set([...Object.keys(before.surfaces), ...Object.keys(after.surfaces)])]
  .filter((id) => before.surfaces[id] !== after.surfaces[id]).sort();
const foreignChanged = rawChanged.filter((id) => !scopeSet.has(id));
const scopedChanged = rawChanged.filter((id) => scopeSet.has(id));
if (scopedChanged.length !== 25) throw new Error(`expected 25 Wave14 changed surfaces, got ${scopedChanged.length}`);

const select = (record) => Object.fromEntries(scope.map((id) => [id, record[id]]));
const projection = {
  version: 1,
  scope: "wave14-only-impact-projection-from-byte-honest-full-corpus-snapshots",
  source: touchesPath,
  snapshots: [
    { label: "pre-A4", at: before.at, hashes: select(before.hashes), surfaces: select(before.surfaces) },
    { label: "post-A6", at: after.at, hashes: select(after.hashes), surfaces: select(after.surfaces) },
  ],
};
writeFileSync(projectionPath, `${JSON.stringify(projection, null, 2)}\n`);

const sha256 = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");
writeFileSync(isolationPath, `${JSON.stringify({
  version: 1,
  reviewer: "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 14 A6",
  authoritative_raw_touch_ledger: touchesPath,
  authoritative_raw_touch_ledger_sha256: sha256(touchesPath),
  projection: projectionPath,
  projection_sha256: sha256(projectionPath),
  raw_window: { from: "pre-A4", to: "post-A6", changed_interfaces: rawChanged.length },
  wave14_scope: { items: scope.length, changed_interfaces: scopedChanged.length, ids: scope },
  concurrent_foreign_changes: { count: foreignChanged.length, ids: foreignChanged },
  disposition: "The raw snapshots are preserved byte-honestly. Only the separate impact projection filters to the 25 page-manifest Wave14 ids. No item file, raw hash, or raw public-surface fingerprint was rewritten. The generic A6 impact mismatch is caused only by concurrent Wave11-13 finalization after Wave14's pre-A4 baseline.",
}, null, 2)}\n`);

console.log(`wave14 impact projection: ${scopedChanged.length} scoped / ${foreignChanged.length} concurrent foreign changed surfaces`);
