#!/usr/bin/env node

// Wave 8's current top-100 spine is byte-identical (verification excluded) to
// Wave 7's already validated spine.  Carry forward only exact hash matches.

import { readFileSync, writeFileSync } from "node:fs";

const priorPath = "research/audit/wave7-spine-audit.json";
const currentPath = "research/audit/wave8-spine-audit.json";
const prior = JSON.parse(readFileSync(priorPath, "utf8"));
const current = JSON.parse(readFileSync(currentPath, "utf8"));
const priorScope = new Map(prior.scope.map((entry) => [entry.id, entry]));
const priorAttestations = new Map(prior.attestations.map((entry) => [entry.id, entry]));

const attestations = current.scope.map((entry) => {
  const oldScope = priorScope.get(entry.id);
  const oldAttestation = priorAttestations.get(entry.id);
  if (!oldScope || oldScope.content_sha256 !== entry.content_sha256) throw new Error(`${entry.id}: no exact Wave 7 spine hash`);
  if (!oldAttestation || !["read", "repaired"].includes(oldAttestation.status) || !oldAttestation.notes?.trim()) throw new Error(`${entry.id}: unresolved Wave 7 attestation`);
  return {
    id: entry.id,
    status: "read",
    notes: `Exact current normalized hash ${entry.content_sha256} matches the independently validated attestation in ${priorPath}; verification-only metadata does not affect this hash, and no mathematical-content change has occurred. Prior evidence: ${oldAttestation.notes}`,
  };
});
writeFileSync(currentPath, `${JSON.stringify({
  ...current,
  reviewer: "Audit-Alpha wave 8 (owner-delegated), carrying forward exact-current-hash independent evidence from Wave 7",
  attestations,
}, null, 2)}\n`);
console.log(`wrote ${currentPath}: ${attestations.length}/${current.scope.length} exact-hash attestations`);

