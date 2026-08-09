#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const path = 'research/audit/wave7-touches.json';
const ledger = JSON.parse(readFileSync(path, 'utf8'));
const indices = ledger.snapshots
  .map((snapshot, index) => snapshot.label === 'pre-a8' ? index : -1)
  .filter((index) => index >= 0);
if (indices.length < 1) throw new Error('missing pre-a8 snapshot');
for (let offset = 1; offset < indices.length; offset += 1) {
  const index = indices[offset];
  ledger.snapshots[index].label = `pre-a8-resume-noop-${offset}`;
}
writeFileSync(path, `${JSON.stringify(ledger, null, 2)}\n`);
console.log(`preserved original pre-a8 at index ${indices[0]}; renamed ${Math.max(0, indices.length - 1)} duplicate resume snapshot(s)`);
