#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const read = (name) => JSON.parse(readFileSync(`research/audit/${name}`, 'utf8'));
const template = read('wave10-concurrent-impact-template.json');
const wave8 = read('wave8-impact-audit.json');
const wave9 = read('wave9-impact-audit.json');
const wave10 = read('wave10-impact-audit.json');

// Preserve Alpha's scoped receipt before replacing the gate-of-record path
// with the owner-authorized combined concurrent interval.
writeFileSync(
  'research/audit/wave10-impact-audit-isolated.json',
  `${JSON.stringify(wave10, null, 2)}\n`,
);

const same = (left, right) =>
  left.length === right.length && left.every((value, index) => value === right[index]);
if (!same(template.changed_interfaces, wave8.changed_interfaces) ||
    !same(template.required_review, wave8.required_review)) {
  throw new Error('Wave 8 combined receipt does not match the authoritative Wave 10 concurrent interval');
}

// Later-wave readers saw later final text, so they override an earlier-wave
// disposition for consumers that lie in more than one impact surface.
const merged = new Map();
for (const receipt of [wave8, wave9, wave10]) {
  for (const row of receipt.dispositions) merged.set(row.id, row);
}

const dispositions = template.required_review.map((id) => {
  const row = merged.get(id);
  if (!row || row.status !== 'still-licensed' || !row.notes?.trim()) {
    throw new Error(`${id}: missing complete current still-licensed disposition`);
  }
  return { id, status: row.status, notes: row.notes };
});

const receipt = {
  version: 1,
  reviewer: 'Waves 8–10 Audit-Alpha readers, integrated by the owner-delegated audit orchestrator',
  source: template.source,
  changed_interfaces: template.changed_interfaces,
  required_review: template.required_review,
  dispositions,
  integration: {
    method: 'exact identical 239/729 concurrent surface; later-wave exact-current dispositions override earlier-wave overlap rows',
    inputs: [
      'research/audit/wave8-impact-audit.json',
      'research/audit/wave9-impact-audit.json',
      'research/audit/wave10-impact-audit-isolated.json',
    ],
  },
};

writeFileSync('research/audit/wave10-impact-audit.json', `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote combined Wave 10 impact receipt: ${receipt.changed_interfaces.length} interfaces, ${receipt.dispositions.length} dispositions`);
