#!/usr/bin/env node

// Run one uniquely labelled retry batch over high/critical Wave 7 items that
// lack a durable successful result.  dispatch.mjs enforces the read-only,
// tool-less DeepSeek lane and its concurrency cap; this wrapper only schedules.

import { existsSync, readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';

const retry = process.argv[2];
const limit = Number(process.argv[3] ?? 8);
if (!/^\d+$/.test(retry ?? '') || !Number.isInteger(limit) || limit < 1 || limit > 64) {
  console.error('usage: node research/audit/wave7-retry-refuters.mjs <retry-number> [limit]');
  process.exit(2);
}

const index = JSON.parse(readFileSync('research/audit/wave7-refuter-index.json', 'utf8'));
const selectedIds = new Set(index.items.map((entry) => entry.id));

function idFromLabel(label) {
  if (selectedIds.has(label)) return label;
  const retryId = label.match(/^a6-retry\d+-(.+)$/)?.[1];
  if (retryId && selectedIds.has(retryId)) return retryId;
  return null;
}

const successful = new Set();
const preservedPath = 'research/audit/wave7-preserved-refuters.json';
if (existsSync(preservedPath)) {
  const preserved = JSON.parse(readFileSync(preservedPath, 'utf8'));
  for (const capture of preserved.captures ?? []) {
    if (selectedIds.has(capture.id) && capture.normalized_sha256 === index.items.find((entry) => entry.id === capture.id)?.normalized_sha256) successful.add(capture.id);
  }
}

const targets = index.items
  .filter((entry) => selectedIds.has(entry.id) && !successful.has(entry.id))
  .slice(0, limit)
  .map((entry) => entry.id);

if (!targets.length) {
  console.log('no missing high/critical refuter targets');
  process.exit(0);
}

console.log(`retry ${retry}: ${targets.length} target(s): ${targets.join(', ')}`);
const outcomes = await Promise.all(targets.map((id) => new Promise((resolve) => {
  const child = spawn(process.execPath, [
    'tools/dispatch.mjs',
    '--role', 'audit-refuter',
    '--brief', 'research/audit/wave7-refuter-brief.md',
    '--task', `research/audit/wave7-refuter-tasks/${id}.md`,
    '--label', `a6-retry${retry}-${id}`,
    '--run', 'wave7',
    '--timeout', '900',
  ], { cwd: process.cwd(), env: process.env, stdio: ['ignore', 'pipe', 'pipe'] });
  let stdout = '';
  let stderr = '';
  child.stdout.on('data', (chunk) => { stdout += chunk; });
  child.stderr.on('data', (chunk) => { stderr += chunk; });
  child.on('close', (code) => resolve({ id, code, stdout, stderr }));
})));

for (const outcome of outcomes) {
  const marker = outcome.code === 0 ? 'OK' : 'FAILED';
  const detail = `${outcome.stdout}\n${outcome.stderr}`.trim().split('\n').filter(Boolean).at(-1) ?? '';
  console.log(`${marker} ${outcome.id}${detail ? ` — ${detail}` : ''}`);
}
console.log(`retry ${retry} complete: ${outcomes.filter((entry) => entry.code === 0).length}/${outcomes.length} successful`);
process.exit(outcomes.some((entry) => entry.code !== 0) ? 1 : 0);
