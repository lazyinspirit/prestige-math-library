#!/usr/bin/env node

// The owner ran Waves 8--10 concurrently. Project the shared pre-A4/post-A4
// interval onto Wave 10 only before reconstructing consumer impact.

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { itemContentHash, shortHash, stripVerification } from '../../tools/item-hash.mjs';

const sourcePath = 'research/audit/wave10-touches.json';
const scopePath = 'research/audit/wave10-real-analysis.pages.json';
const outputPath = 'research/audit/wave10-impact-touches.json';
const sourceText = readFileSync(sourcePath, 'utf8');
const ledger = JSON.parse(sourceText);
const scope = new Set(JSON.parse(readFileSync(scopePath, 'utf8')).flatMap((page) => page.items.map((item) => item.id)));
const before = ledger.snapshots.find((snapshot) => snapshot.label === 'pre-A4');
const after = ledger.snapshots.find((snapshot) => snapshot.label === 'post-A4');
if (!before || !after) throw new Error('Wave 10 touch ledger lacks pre-A4/post-A4');

const projectedAfter = structuredClone(after);
projectedAfter.label = 'post-A6-wave10-projection';
projectedAfter.at = new Date().toISOString();
for (const id of Object.keys(projectedAfter.hashes)) if (!scope.has(id)) projectedAfter.hashes[id] = before.hashes[id];
for (const id of Object.keys(projectedAfter.surfaces)) if (!scope.has(id)) projectedAfter.surfaces[id] = before.surfaces[id];
const publicSurface = (text) => {
  const withoutVerification = stripVerification(text);
  const match = /^([\s\S]*?\n---\n)([\s\S]*)$/.exec(withoutVerification);
  if (!match) return withoutVerification;
  const body = match[2].replace(/^## (?:Scratch|Proof|Refutation|Counterexample|Verification)\b[^\n]*\n[\s\S]*?(?=^## |$(?![\s\S]))/gm, '');
  return match[1] + body;
};
for (const id of scope) {
  const text = readFileSync(`items/${id}.md`, 'utf8');
  projectedAfter.hashes[id] = shortHash(itemContentHash(text));
  projectedAfter.surfaces[id] = createHash('sha256').update(publicSurface(text)).digest('hex').slice(0, 16);
}

writeFileSync(outputPath, `${JSON.stringify({
  projection: {
    source_touch_ledger: sourcePath,
    source_sha256: createHash('sha256').update(sourceText).digest('hex'),
    reason: 'Owner-authorized concurrent Waves 8-10 made the global interval contain three audit stages; this projection isolates the 57 Wave 10 scoped ids at exact A6 final text without changing the authoritative touch ledger.',
    scope_manifest: scopePath,
    scoped_ids: [...scope].sort(),
  },
  snapshots: [structuredClone(before), projectedAfter],
  seeded: [],
}, null, 2)}\n`);
console.log(`wrote ${outputPath}: ${scope.size} Wave 10 ids projected from ${Object.keys(after.hashes).length} recorded items`);
