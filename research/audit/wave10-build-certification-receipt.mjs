#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { itemContentHash } from '../../tools/item-hash.mjs';

const audit = 'research/audit';
const index = JSON.parse(readFileSync(`${audit}/wave10-certifier-index.json`, 'utf8'));
const sourceIndex = JSON.parse(readFileSync(`${audit}/wave10-source-repair-certifier-index.json`, 'utf8'));
const targets = [
  ['lem-integral-elementary-bounds', 'item', `${audit}/wave10-dispatch/certifier-a6-lem-integral-elementary-bounds.result.json`],
  ['thm-monotonicity-from-the-derivative', 'item', `${audit}/wave10-dispatch/certifier-a6-thm-monotonicity-from-the-derivative.result.json`],
  ['ex-integral-of-the-floor-function', 'item', `${audit}/wave10-dispatch/certifier-a6-ex-integral-of-the-floor-function.result.json`],
  ['page-the-derivative-and-mean-value-theorems', 'page', `${audit}/wave10-dispatch/certifier-a6-page-the-derivative-and-mean-value-theorems.result.json`],
  ['cex-differentiable-source-repair', 'item-source-repair', `${audit}/wave10-dispatch/certifier-a6r3-cex-differentiable-source-repair.result.json`],
];
const allEntries = [...index.targets, ...sourceIndex.targets];
const byLabel = new Map(allEntries.map((entry) => [entry.label, entry]));
const rows = targets.map(([label, type, evidence]) => {
  const expected = byLabel.get(label);
  if (!expected || expected.type !== type) throw new Error(`${label}: missing certification target`);
  const path = type === 'page' ? expected.path : `items/${expected.id}.md`;
  const text = readFileSync(path, 'utf8');
  const current = type === 'page' ? createHash('sha256').update(text).digest('hex') : itemContentHash(text);
  const expectedHash = type === 'page' ? expected.full_file_sha256 : expected.normalized_sha256;
  if (current !== expectedHash) throw new Error(`${label}: current exact-final hash differs from dispatch`);
  const result = JSON.parse(readFileSync(evidence, 'utf8'));
  if (!result.ok || result.exit_code !== 0 || result.runner !== 'codex' || result.model !== 'gpt-5.6-terra' || !/^VERDICT:\s*CERTIFIED\b/m.test(result.tail ?? '')) {
    throw new Error(`${label}: exact-final Terra result is not CERTIFIED`);
  }
  if (type !== 'page' && !/verified:\n\s+model: gpt-5\.6-terra-codex-subscription\n\s+verdict: certify\n\s+date: 2026-08-09\n\s+scope: published-audit\n\s+delegated_by: owner/.test(text)) {
    throw new Error(`${label}: verified stamp absent or malformed`);
  }
  return { label, type, id: expected.id, path, normalized_sha256: type === 'page' ? undefined : current, full_file_sha256: type === 'page' ? current : undefined, verdict: 'CERTIFIED', evidence };
});
const stampedItems = rows.filter((row) => row.type !== 'page').map(({ label, type, path, full_file_sha256, ...row }) => row);
const certifiedPages = rows.filter((row) => row.type === 'page').map(({ type, id, normalized_sha256, ...row }) => row);
writeFileSync(`${audit}/wave10-certification-receipt.json`, `${JSON.stringify({
  version: 1,
  scope: 'published-audit',
  delegated_by: 'owner',
  model: 'gpt-5.6-terra-codex-subscription',
  settings: { reasoning_effort: 'xhigh', context_window_tokens: 1000000 },
  certified_targets: rows.map((row) => row.label),
  stamped_items: stampedItems,
  certified_pages: certifiedPages,
  preserved_prior_attempts: [
    { label: 'source-unlp-tls', evidence: `${audit}/wave10-dispatch/certifier-a6-source-unlp-tls.result.json`, verdict: 'REFUSED', closure: 'Alpha replaced the inaccessible UNLP source with exact live MIT support and obtained exact-final certification.' },
    { label: 'source-mcgill-large-transfer', evidence: `${audit}/wave10-dispatch/certifier-a6-source-mcgill-large-transfer.result.json`, verdict: 'REFUSED-as-broad-attribution', closure: 'Alpha retained the live reader-usable PDF only for derivative material and restricted the two strict-increase rationales to Hunter.' },
    { label: 'cex-differentiable-source-repair-duplicate', evidence: `${audit}/wave10-dispatch/certifier-a6r2-cex-differentiable-source-repair.result.json`, verdict: 'CERTIFIED', closure: 'Preserved append-only; a6r3 independently duplicated the exact-current certification and is the canonical receipt evidence.' },
  ],
  pending: [],
}, null, 2)}\n`);
console.log(`wrote certification receipt: ${stampedItems.length} stamped items, ${certifiedPages.length} certified page`);
