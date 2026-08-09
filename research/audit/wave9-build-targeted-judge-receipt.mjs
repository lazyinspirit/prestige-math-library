#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const id = 'thm-semicontinuous-evt';
const models = ['deepseek-v4-pro', 'gpt-5.6-terra'];
const rows = readFileSync('research/audit/wave9-judge.jsonl', 'utf8')
  .split(/\n/).filter(Boolean).map((line) => JSON.parse(line));
const itemHash = (text) => createHash('sha256')
  .update(text.replace(/^ {2}judge:\n(?: {4}.*\n)*/m, ''))
  .digest('hex');

const verdicts = models.map((model) => [...rows].reverse()
  .find((row) => row.id === id && row.model === model && typeof row.keep === 'boolean'));
if (verdicts.some((row) => !row)) throw new Error('missing a current Boolean lane result');
if (new Set(verdicts.map((row) => row.context_sha256)).size !== 1) {
  throw new Error('latest lane contexts differ');
}
if (verdicts.some((row) => row.keep !== true)) throw new Error('latest paired result is not keep/keep');

const currentItemHash = itemHash(readFileSync(`items/${id}.md`, 'utf8'));
if (verdicts.some((row) => row.item_sha256 !== currentItemHash)) {
  throw new Error('latest judge item hash is not current');
}

const receipt = {
  version: 1,
  mode: 'published-audit-targeted-rejudge',
  reviewer: 'Wave 9 audit orchestrator personal audit (owner-delegated)',
  lineup: models,
  targets: [{
    id,
    context_sha256: verdicts[0].context_sha256,
    item_sha256: currentItemHash,
    reason: 'confirmed-fatal A8 repair, independently certified and rejudged only on the edited item',
    rejudged_at: verdicts.map((row) => row.at).sort().at(-1),
  }],
};

writeFileSync('research/audit/wave9-targeted-judge-receipt.json', `${JSON.stringify(receipt, null, 2)}\n`);
console.log('wrote Wave 9 targeted judge receipt for exactly one A8 repair');
