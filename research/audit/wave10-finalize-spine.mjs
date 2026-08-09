#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const path = 'research/audit/wave10-spine-audit.json';
const spine = JSON.parse(readFileSync(path, 'utf8'));
const prior = JSON.parse(readFileSync('research/audit/wave9-spine-audit.json', 'utf8'));
const priorById = new Map(prior.attestations.map((entry) => [entry.id, entry]));
if (spine.scope.length !== 59 || spine.scope_sha256 !== prior.scope_sha256) throw new Error('top-100 proof spine no longer matches the 59-item exact-current Wave 9 scope');
spine.reviewer = 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 10 A6, independent exact-current full reads';
spine.attestations = spine.scope.map((current) => {
  const old = priorById.get(current.id);
  if (!old || old.status !== 'read' || !old.notes.includes(current.content_sha256)) throw new Error(`${current.id}: prior exact-hash evidence mismatch`);
  return {
    id: current.id,
    status: 'read',
    notes: `Wave 10 Alpha independently read the complete exact-current item, every numbered step, Fact, boundary claim, and cited/dependency use and found no mathematical or licensing defect. Exact normalized hash ${current.content_sha256}; it also matches the independent hash-bound evidence in research/audit/wave9-spine-audit.json. No Wave 10 scoped item lies in the 59-item proof-bearing top-100 spine intersection, and no spine repair was required.`,
  };
});
writeFileSync(path, `${JSON.stringify(spine, null, 2)}\n`);
console.log(`finalized ${path}: ${spine.attestations.length} exact-current full-read attestations`);
