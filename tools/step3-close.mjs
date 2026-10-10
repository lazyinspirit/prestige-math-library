#!/usr/bin/env node
// Freeze Step 3 after exact routing, currency, plan, and ledger checks pass.
// Later stages may rewrite items, but cannot rewrite the Step-3 evidence.

import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { itemHashGuard } from './item-hash.mjs';
import { isPublishedItem } from './published-repair-policy.mjs';

const argv = process.argv.slice(2);
const mode = argv[0];
const opt = (name, fallback = null) => {
  const at = argv.indexOf(`--${name}`);
  return at >= 0 && argv[at + 1] && !argv[at + 1].startsWith('--') ? argv[at + 1] : fallback;
};
const root = resolve(opt('root', '.'));
const run = opt('run');
const R = (...parts) => join(root, ...parts);
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const fail = (message) => { console.error(`step3-close: ${message}`); process.exit(1); };
if (!run || !['close', 'verify'].includes(mode)) {
  console.error('usage: node tools/step3-close.mjs close|verify --run <run> [--root <repo>]');
  process.exit(2);
}

const receiptPath = R('research', `${run}-step3-closure.json`);
const researchNames = () => readdirSync(R('research'));
const artifactNames = () => researchNames().filter((name) =>
  name.startsWith(`${run}-step3-hash-`)
  || name.startsWith(`${run}-step3-scope-`)
  || name.startsWith(`${run}-reader-findings-`)
  || new RegExp(`^${run}-reader-\\d+\\.md$`).test(name)
  || name.startsWith(`${run}-refute-`)
  || new RegExp(`^${run}-alpha-(?:[a-z]+|batch-[1-9]\\d*)-3a\\.md$`).test(name)
  || (name.startsWith(`${run}-alpha-`) && name.endsWith('-3a-decisions.json'))
  || name === `${run}-alpha-3b.md`
  || name === `${run}-cross-group-edges.json`
  || name === `${run}-3b-verdicts.jsonl`).sort();
const artifactHashes = () => Object.fromEntries(artifactNames().map((name) => [
  `research/${name}`, sha256(readFileSync(R('research', name))),
]));
const jsonl = (path) => existsSync(path)
  ? readFileSync(path, 'utf8').split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line)) : [];
const canonicalRows = (rows, key) => [...rows].sort((left, right) =>
  String(key(left)).localeCompare(String(key(right))));
const step3LedgerRows = () => canonicalRows(
  jsonl(R('research', 'defect-ledger.jsonl')).filter((row) => row.run === run
    && ['3a-adjudicate', '3b-cross'].includes(row.caught_at_stage)
    && !isPublishedItem(root, row.subject)),
  (row) => row.defect_id,
);
const currentRunItems = () => {
  const ids = new Set();
  for (const name of researchNames().filter((entry) =>
    entry.startsWith(`${run}-batch-`) && entry.endsWith('.pages.json'))) {
    const raw = JSON.parse(readFileSync(R('research', name), 'utf8'));
    for (const page of (Array.isArray(raw) ? raw : raw.pages ?? [])) {
      for (const item of page.items ?? []) ids.add(String(typeof item === 'string' ? item : item.id));
    }
  }
  return Object.fromEntries([...ids].sort().map((id) => {
    const path = R('items', `${id}.md`);
    return [id, existsSync(path) ? itemHashGuard(readFileSync(path, 'utf8')) : null];
  }));
};

if (mode === 'verify') {
  if (!existsSync(receiptPath)) fail(`missing ${receiptPath}`);
  let receipt;
  try { receipt = JSON.parse(readFileSync(receiptPath, 'utf8')); }
  catch (cause) { fail(`invalid receipt (${cause.message})`); }
  const errors = [];
  if (receipt.version !== 2 || receipt.run !== run || receipt.status !== 'closed') {
    errors.push('wrong version, run, or status');
  }
  const currentArtifacts = artifactHashes();
  if (JSON.stringify(Object.keys(currentArtifacts)) !== JSON.stringify(Object.keys(receipt.artifacts ?? {}).sort())) {
    errors.push('the exact Step-3 artifact set changed');
  }
  for (const [relative, expected] of Object.entries(receipt.artifacts ?? {})) {
    if (currentArtifacts[relative] !== expected) errors.push(`${relative} changed after Step 3 closed`);
  }
  const ledgerRows = step3LedgerRows();
  if (sha256(JSON.stringify(ledgerRows)) !== receipt.step3_ledger_rows_sha256
    || ledgerRows.length !== receipt.step3_ledger_rows_count) {
    errors.push('Step-3 defect-ledger rows changed');
  }
  if (errors.length) fail(errors.join('; '));
  console.log(`step3-close: verified ${Object.keys(receipt.artifacts ?? {}).length} frozen artifact(s) for ${run}`);
  process.exit(0);
}

const checks = [
  ['cross-group-edges', ['tools/cross-group-edges.mjs', 'check', '--run', run]],
  ['step3-routing-final', ['tools/step3-scope.mjs', 'check', '--run', run, '--phase', 'final']],
  ['splice-verify', ['tools/splice-plan.mjs', '--run', run, '--verify']],
  ['validate-plan', ['tools/frontier-item-gate.mjs', '--run', run, '--tool', 'validate-plan']],
  ['defect-ledger', ['tools/defect-ledger.mjs', 'validate', '--run', run]],
];
// The routing check is the expensive one: on phase-2-remaining-27's 1,032-item
// corpus it takes about ten minutes, so a five-minute cap aborted the close
// with a bare ETIMEDOUT while the check itself was healthy. The bound below is
// the tool's own safety net; the stage dispatch timeout (30 min) stays the
// binding budget.
const checkTimeoutMs = 20 * 60 * 1000;
for (const [label, args] of checks) {
  const result = spawnSync(process.execPath, args, {
    cwd: root, encoding: 'utf8', timeout: checkTimeoutMs, maxBuffer: 32 * 1024 * 1024,
  });
  if (result.error) fail(`${label} could not complete: ${result.error.message}`);
  if (result.status !== 0) fail(`${label} failed\n${result.stderr || result.stdout}`);
}
const artifacts = artifactHashes();
if (!Object.keys(artifacts).length) fail('no exact Step-3 artifacts exist');
const ledgerRows = step3LedgerRows();
writeFileSync(receiptPath, `${JSON.stringify({
  version: 2,
  run,
  status: 'closed',
  closed_at: new Date().toISOString(),
  artifacts,
  step3_ledger_rows_sha256: sha256(JSON.stringify(ledgerRows)),
  step3_ledger_rows_count: ledgerRows.length,
  final_item_hashes: currentRunItems(),
}, null, 2)}\n`);
console.log(`step3-close: closed ${run} over ${Object.keys(artifacts).length} frozen artifact(s)`);
