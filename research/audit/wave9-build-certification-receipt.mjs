#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { itemContentHash } from '../../tools/item-hash.mjs';

const audit = 'research/audit';
const index = JSON.parse(readFileSync(`${audit}/wave9-certifier-index.json`, 'utf8'));
const targets = [
  ['def-oscillation', 'a6r3', 'item'],
  ['fs-additive-implies-linear', 'a6r2', 'item'],
  ['thm-baire-one-continuity-points', 'a6r2', 'item'],
  ['thm-continuity-set-realisation', 'a6r2', 'item'],
  ['thm-semicontinuous-evt', 'a6r3', 'item'],
  ['page-monotone-functions-and-discontinuities', 'a6r2', 'page'],
];
const byLabel = new Map(index.targets.map((entry) => [entry.label, entry]));
const rows = targets.map(([label, round, type]) => {
  const expected = byLabel.get(label);
  if (!expected || expected.type !== type) throw new Error(`${label}: missing certification target`);
  const path = type === 'item' ? `items/${expected.id}.md` : expected.path;
  const text = readFileSync(path, 'utf8');
  const current = type === 'item' ? itemContentHash(text) : createHash('sha256').update(text).digest('hex');
  const expectedHash = type === 'item' ? expected.normalized_sha256 : expected.full_file_sha256;
  if (current !== expectedHash) throw new Error(`${label}: current exact-final hash ${current} differs from dispatched ${expectedHash}`);
  const evidence = `${audit}/wave9-dispatch/certifier-${round}-${label}.result.json`;
  const result = JSON.parse(readFileSync(evidence, 'utf8'));
  if (!result.ok || result.exit_code !== 0 || result.runner !== 'codex' || result.model !== 'gpt-5.6-terra' || !/^VERDICT:\s*CERTIFIED\b/m.test(result.tail ?? '')) {
    throw new Error(`${label}: exact-final Terra result is not CERTIFIED`);
  }
  if (type === 'item' && !/verified:\n\s+model: gpt-5\.6-terra-codex-subscription\n\s+verdict: certify\n\s+date: 2026-08-09\n\s+scope: published-audit\n\s+delegated_by: owner/.test(text)) {
    throw new Error(`${label}: verified stamp is absent or malformed`);
  }
  return { label, type, id: expected.id, path, normalized_sha256: type === 'item' ? current : undefined, full_file_sha256: type === 'page' ? current : undefined, verdict: 'CERTIFIED', evidence };
});
const stampedItems = rows.filter((row) => row.type === 'item').map(({ label, type, path, full_file_sha256, ...row }) => row);
const certifiedPages = rows.filter((row) => row.type === 'page').map(({ label, type, id, normalized_sha256, ...row }) => ({ label, ...row }));
const receipt = {
  version: 1,
  scope: 'published-audit',
  delegated_by: 'owner',
  model: 'gpt-5.6-terra-codex-subscription',
  settings: { reasoning_effort: 'xhigh', context_window_tokens: 1000000 },
  certified_targets: rows.map((row) => row.label),
  stamped_items: stampedItems,
  certified_pages: certifiedPages,
  preserved_prior_attempts: [
    { label: 'def-oscillation', evidence: `${audit}/wave9-dispatch/certifier-a6r2-def-oscillation.result.json`, verdict: 'REFUSED', closure: 'Alpha added the exact missing triangle-inequality dependency/citation and obtained a fresh exact-final a6r3 certification.' },
    { label: 'thm-semicontinuous-evt', evidence: `${audit}/wave9-dispatch/certifier-a6r2-thm-semicontinuous-evt.result.json`, verdict: 'BLOCKED', closure: 'The reader reported a self-inconsistent hash calculation while confirming disk text equalled embedded dispatch text; canonical itemContentHash matched dispatch, and a fresh exact-current a6r3 route certified with an explicit hash match.' },
  ],
  pending: [],
};
writeFileSync(`${audit}/wave9-certification-receipt.json`, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote certification receipt: ${stampedItems.length} stamped items, ${certifiedPages.length} certified page`);
