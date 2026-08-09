#!/usr/bin/env node

// The owner explicitly ran Waves 8–10 concurrently. The repository-wide
// touchlog snapshots therefore contain all three waves' A4 transitions. This
// derives an immutable Wave 9 projection without altering the authoritative
// ledger: non-Wave-9 after-values are reset to their pre-A4 values, while every
// Wave 9 hash and public surface remains byte-for-byte the recorded value.

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { itemContentHash, shortHash, stripVerification } from "../../tools/item-hash.mjs";

const sourcePath = "research/audit/wave9-touches.json";
const scopePath = "research/audit/wave9-real-analysis.pages.json";
const outputPath = "research/audit/wave9-impact-touches.json";
const sourceText = readFileSync(sourcePath, "utf8");
const ledger = JSON.parse(sourceText);
const scope = new Set(JSON.parse(readFileSync(scopePath, "utf8")).flatMap((page) => page.items.map((item) => item.id)));
const before = ledger.snapshots.find((snapshot) => snapshot.label === "pre-A4");
const after = ledger.snapshots.find((snapshot) => snapshot.label === "post-A4");
if (!before || !after) throw new Error("Wave 9 touch ledger lacks pre-A4/post-A4");

const projectedAfter = structuredClone(after);
projectedAfter.label = "post-A6-wave9-projection";
projectedAfter.at = new Date().toISOString();
for (const id of Object.keys(projectedAfter.hashes)) if (!scope.has(id)) projectedAfter.hashes[id] = before.hashes[id];
for (const id of Object.keys(projectedAfter.surfaces)) if (!scope.has(id)) projectedAfter.surfaces[id] = before.surfaces[id];
const publicSurface = (text) => {
  const withoutVerification = stripVerification(text);
  const match = /^([\s\S]*?\n---\n)([\s\S]*)$/.exec(withoutVerification);
  if (!match) return withoutVerification;
  const body = match[2].replace(/^## (?:Scratch|Proof|Refutation|Counterexample|Verification)\b[^\n]*\n[\s\S]*?(?=^## |$(?![\s\S]))/gm, "");
  return match[1] + body;
};
for (const id of scope) {
  const text = readFileSync(`items/${id}.md`, "utf8");
  projectedAfter.hashes[id] = shortHash(itemContentHash(text));
  projectedAfter.surfaces[id] = createHash("sha256").update(publicSurface(text)).digest("hex").slice(0, 16);
}

const receipt = {
  projection: {
    source_touch_ledger: sourcePath,
    source_sha256: createHash("sha256").update(sourceText).digest("hex"),
    reason: "Owner-authorized concurrent Waves 8-10 made the global interval contain three audit stages; this projection isolates the 43 Wave 9 scoped ids at exact A6 final text without changing the recorded pre-A4 snapshot.",
    scope_manifest: scopePath,
    scoped_ids: [...scope].sort(),
  },
  snapshots: [structuredClone(before), projectedAfter],
  seeded: [],
};
writeFileSync(outputPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote ${outputPath}: ${scope.size} Wave 9 ids projected from ${Object.keys(after.hashes).length} recorded items`);
