#!/usr/bin/env node
// Freeze Step 6 after exact routing, currency, plan, and ledger checks pass.
// Later stages may rewrite items, but cannot rewrite the Step-6 evidence.

import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { itemHashGuard } from './item-hash.mjs';

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
const fail = (message) => { console.error(`step6-close: ${message}`); process.exit(1); };
if (!run || !['close', 'verify'].includes(mode)) {
  console.error('usage: node tools/step6-close.mjs close|verify --run <run> [--root <repo>]');
  process.exit(2);
}

const receiptPath = R('research', `${run}-step6-closure.json`);
const researchNames = () => readdirSync(R('research'));
const artifactNames = () => researchNames().filter((name) =>
  name.startsWith(`${run}-step6-hash-`)
  || name.startsWith(`${run}-step6-scope-`)
  || name.startsWith(`${run}-reader-findings-`)
  || new RegExp(`^${run}-reader-\\d+\\.md$`).test(name)
  || name.startsWith(`${run}-refute-`)
  || new RegExp(`^${run}-alpha-[a-z]+-6b\\.md$`).test(name)
  || (name.startsWith(`${run}-alpha-`) && name.endsWith('-6b-decisions.json'))
  || name === `${run}-alpha-6c.md`
  || name === `${run}-cross-group-edges.json`
  || name === `${run}-6c-verdicts.jsonl`
  || name === `${run}-step6-published-claims.jsonl`).sort();
const artifactHashes = () => Object.fromEntries(artifactNames().map((name) => [
  `research/${name}`, sha256(readFileSync(R('research', name))),
]));
const jsonl = (path) => existsSync(path)
  ? readFileSync(path, 'utf8').split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line)) : [];
const canonicalRows = (rows, key) => [...rows].sort((left, right) =>
  String(key(left)).localeCompare(String(key(right))));
const step6PublishedRows = () => canonicalRows(
  jsonl(R('research', `${run}-step8-published-repairs.jsonl`))
    .filter((row) => row.found_at_stage === '6a-read'),
  (row) => row.step6_obligation,
);
const step6LedgerRows = () => canonicalRows(
  jsonl(R('research', 'defect-ledger.jsonl')).filter((row) => row.run === run
    && ['6a-read', '6b-adjudicate', '6c-cross'].includes(row.caught_at_stage)),
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
    errors.push('the exact Step-6 artifact set changed');
  }
  for (const [relative, expected] of Object.entries(receipt.artifacts ?? {})) {
    if (currentArtifacts[relative] !== expected) errors.push(`${relative} changed after Step 6 closed`);
  }
  const publishedRows = step6PublishedRows();
  if (sha256(JSON.stringify(publishedRows)) !== receipt.step6_published_rows_sha256
    || publishedRows.length !== receipt.step6_published_rows_count) {
    errors.push('Step-6 published-repair handoff rows changed');
  }
  const ledgerRows = step6LedgerRows();
  if (sha256(JSON.stringify(ledgerRows)) !== receipt.step6_ledger_rows_sha256
    || ledgerRows.length !== receipt.step6_ledger_rows_count) {
    errors.push('Step-6 defect-ledger rows changed');
  }
  if (errors.length) fail(errors.join('; '));
  console.log(`step6-close: verified ${Object.keys(receipt.artifacts ?? {}).length} frozen artifact(s) for ${run}`);
  process.exit(0);
}

const checks = [
  ['cross-group-edges', ['tools/cross-group-edges.mjs', 'check', '--run', run]],
  ['step6-routing-final', ['tools/step6-scope.mjs', 'check', '--run', run, '--phase', 'final']],
  ['splice-verify', ['tools/splice-plan.mjs', '--run', run, '--verify']],
  ['validate-plan', ['tools/validate-plan.mjs', 'research/plan-spec.json']],
  ['defect-ledger', ['tools/defect-ledger.mjs', 'validate', '--run', run]],
];
for (const [label, args] of checks) {
  const result = spawnSync(process.execPath, args, { cwd: root, encoding: 'utf8', timeout: 300_000 });
  if (result.status !== 0) fail(`${label} failed\n${result.stderr || result.stdout}`);
}
const artifacts = artifactHashes();
if (!Object.keys(artifacts).length) fail('no exact Step-6 artifacts exist');
const publishedRows = step6PublishedRows();
const ledgerRows = step6LedgerRows();
writeFileSync(receiptPath, `${JSON.stringify({
  version: 2,
  run,
  status: 'closed',
  closed_at: new Date().toISOString(),
  artifacts,
  step6_published_rows_sha256: sha256(JSON.stringify(publishedRows)),
  step6_published_rows_count: publishedRows.length,
  step6_ledger_rows_sha256: sha256(JSON.stringify(ledgerRows)),
  step6_ledger_rows_count: ledgerRows.length,
  final_item_hashes: currentRunItems(),
}, null, 2)}\n`);
console.log(`step6-close: closed ${run} over ${Object.keys(artifacts).length} frozen artifact(s)`);
