#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const sha = (text) => createHash('sha256').update(text).digest('hex');
const templatePath = '/tmp/wave10-global-impact-template.json';
const authoritativePath = 'research/audit/wave10-touches.json';
const isolatedTouchesPath = 'research/audit/wave10-impact-touches.json';
const isolatedReceiptPath = 'research/audit/wave10-impact-audit.json';
const template = JSON.parse(readFileSync(templatePath, 'utf8'));
const isolated = JSON.parse(readFileSync(isolatedReceiptPath, 'utf8'));
const isolatedChanged = new Set(isolated.changed_interfaces);
const isolatedRequired = new Set(isolated.required_review);
const receipt = {
  version: 1,
  scope: 'wave10-a6-owner-authorized-concurrent-impact-mismatch',
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 10 A6',
  gate_of_record: { gates: 14, pass: 13, fail: 1, failed_tool: 'impact-audit.mjs' },
  authoritative_interval: {
    touches: authoritativePath,
    touches_sha256: sha(readFileSync(authoritativePath, 'utf8')),
    from: 'pre-A4',
    to: 'post-A6',
    changed_interfaces: template.changed_interfaces.length,
    required_review: template.required_review.length,
    changed_ids: template.changed_interfaces,
    required_ids: template.required_review,
  },
  wave10_isolated_interval: {
    touches: isolatedTouchesPath,
    touches_sha256: sha(readFileSync(isolatedTouchesPath, 'utf8')),
    receipt: isolatedReceiptPath,
    receipt_sha256: sha(readFileSync(isolatedReceiptPath, 'utf8')),
    changed_interfaces: isolated.changed_interfaces.length,
    required_review: isolated.required_review.length,
    errors: 0,
    warnings: 0,
  },
  concurrent_only: {
    changed_interfaces: template.changed_interfaces.filter((id) => !isolatedChanged.has(id)),
    required_review: template.required_review.filter((id) => !isolatedRequired.has(id)),
  },
  disposition: 'The authoritative touch ledger correctly includes owner-authorized concurrent Waves 8-10. Wave 10 Alpha independently read and dispositioned the exact Wave 10 projection (57 interfaces/338 consumers). Root/orchestrator owns the combined 239/729 closure and directed Alpha not to rewrite shared earlier-wave artifacts.',
};
if (receipt.authoritative_interval.changed_interfaces !== 239 || receipt.authoritative_interval.required_review !== 729) throw new Error('unexpected authoritative combined interval');
if (receipt.wave10_isolated_interval.changed_interfaces !== 57 || receipt.wave10_isolated_interval.required_review !== 338) throw new Error('unexpected isolated interval');
writeFileSync('research/audit/wave10-concurrent-impact-mismatch.json', `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`preserved combined ${receipt.authoritative_interval.changed_interfaces}/${receipt.authoritative_interval.required_review} versus isolated ${receipt.wave10_isolated_interval.changed_interfaces}/${receipt.wave10_isolated_interval.required_review}`);
