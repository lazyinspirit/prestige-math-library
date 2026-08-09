#!/usr/bin/env node

// Preserve successful DeepSeek result/log/prompt triples before a duplicate
// dispatch label can overwrite the live paths.  Copies are hash-addressed and
// the receipt binds each packet to the current normalized target hash recorded
// by wave7-refuter-index.json.  No verdict is created or altered here.

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { basename } from 'node:path';

const auditDir = 'research/audit';
const dispatchDir = `${auditDir}/wave7-dispatch`;
const preserveDir = `${auditDir}/wave7-preserved-refuters`;
const receiptPath = `${auditDir}/wave7-preserved-refuters.json`;
const index = JSON.parse(readFileSync(`${auditDir}/wave7-refuter-index.json`, 'utf8'));
const indexed = new Map(index.items.map((entry) => [entry.id, entry]));
const hash = (value) => createHash('sha256').update(value).digest('hex');

function itemFromLabel(label) {
  if (indexed.has(label)) return label;
  const retry = label.match(/^a6-retry\d+-(.+)$/)?.[1];
  if (retry && indexed.has(retry)) return retry;
  return null;
}

const receipt = existsSync(receiptPath)
  ? JSON.parse(readFileSync(receiptPath, 'utf8'))
  : { version: 1, scope: 'wave7-a6-preserved-refuter-results', captures: [] };
const keys = new Set(receipt.captures.map((entry) => entry.capture_sha256));
mkdirSync(preserveDir, { recursive: true });

let added = 0;
for (const resultName of readdirSync(dispatchDir).filter((name) => name.startsWith('audit-refuter-') && name.endsWith('.result.json')).sort()) {
  const resultPath = `${dispatchDir}/${resultName}`;
  const resultRaw = readFileSync(resultPath);
  const result = JSON.parse(resultRaw);
  const id = itemFromLabel(result.label ?? '');
  const verdict = String(result.tail ?? '').match(/VERDICT:\s*(CLEAN|DEFECTS)/)?.[1];
  if (!id || !result.ok || !verdict) continue;
  if (id === 'cor-compact-domain-maps-are-uniformly-continuous' && !/^a6-retry(?:[3-9]|\d{2,})-/.test(result.label)) continue;
  if (!existsSync(result.log) || !existsSync(result.prompt)) continue;
  const logRaw = readFileSync(result.log);
  const promptRaw = readFileSync(result.prompt);
  const normalizedSha256 = indexed.get(id).normalized_sha256;
  if (!promptRaw.toString('utf8').includes(normalizedSha256)) continue;
  const captureSha256 = hash(Buffer.concat([resultRaw, Buffer.from([0]), logRaw, Buffer.from([0]), promptRaw]));
  if (keys.has(captureSha256)) continue;

  const stem = `${id}--${captureSha256.slice(0, 16)}`;
  const preserved = {
    result: `${preserveDir}/${stem}.result.json`,
    log: `${preserveDir}/${stem}.log`,
    prompt: `${preserveDir}/${stem}.prompt.md`,
  };
  writeFileSync(preserved.result, resultRaw);
  writeFileSync(preserved.log, logRaw);
  writeFileSync(preserved.prompt, promptRaw);
  receipt.captures.push({
    id,
    normalized_sha256: normalizedSha256,
    verdict,
    original_label: result.label,
    original_result: resultPath,
    preserved,
    sha256: { result: hash(resultRaw), log: hash(logRaw), prompt: hash(promptRaw) },
    capture_sha256: captureSha256,
    started_at: result.started_at,
    ended_at: result.ended_at,
    captured_at: new Date().toISOString(),
  });
  keys.add(captureSha256);
  added += 1;
}

receipt.captures.sort((a, b) => a.id.localeCompare(b.id) || a.capture_sha256.localeCompare(b.capture_sha256));
writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`preserved ${added} new successful result(s); ${receipt.captures.length} total capture(s), ${new Set(receipt.captures.map((entry) => entry.id)).size} unique item(s)`);
