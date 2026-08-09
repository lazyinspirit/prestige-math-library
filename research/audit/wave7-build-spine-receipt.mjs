#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const priorPath = 'research/audit/wave6-spine-audit.json';
const currentPath = 'research/audit/wave7-spine-audit.json';
const prior = JSON.parse(readFileSync(priorPath, 'utf8'));
const current = JSON.parse(readFileSync(currentPath, 'utf8'));
const priorScope = new Map(prior.scope.map((entry) => [entry.id, entry]));
const priorAttestations = new Map(prior.attestations.map((entry) => [entry.id, entry]));

const attestations = current.scope.map((entry) => {
  const oldScope = priorScope.get(entry.id);
  const oldAttestation = priorAttestations.get(entry.id);
  if (!oldScope || oldScope.content_sha256 !== entry.content_sha256) {
    throw new Error(`${entry.id}: current spine hash is not covered by Wave 6`);
  }
  if (!oldAttestation || !['read', 'repaired'].includes(oldAttestation.status) || !oldAttestation.notes?.trim()) {
    throw new Error(`${entry.id}: Wave 6 has no resolved attestation to carry forward`);
  }
  return {
    id: entry.id,
    status: 'read',
    notes: `Exact current normalized hash ${entry.content_sha256} matches the validated independent attestation in ${priorPath}; no mathematical-content change has occurred since that hash-bound reading. Prior evidence: ${oldAttestation.notes}`,
  };
});

const receipt = {
  ...current,
  reviewer: 'Wave 7 audit orchestrator, carrying forward exact-current-hash independent evidence validated by Audit-Alpha wave 6',
  attestations,
};
writeFileSync(currentPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote ${currentPath}: ${attestations.length}/${current.scope.length} exact-hash attestations carried forward`);
