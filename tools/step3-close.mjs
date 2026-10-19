#!/usr/bin/env node
// Freeze dependency-ordered Step 3a after the passed native gate and exact carrier/plan currency checks.
// Later stages may rewrite items, but cannot rewrite the Step-3 evidence.

import { foreignRefuterClosureEvidence } from './step3-owner-foreign-refuter-routes.mjs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { itemHashGuard } from './item-hash.mjs';
import { requiredPageClosureEvidence } from './step3-owner-required-page-routes.mjs';
import { PRECLOSURE_MANIFEST_POLICY } from './step3-manifest-history.mjs';
import { downstreamConsumerClosureEvidence } from './step3-owner-downstream-consumer-routes.mjs';
import { closureEvidence, OBSERVATION_EVIDENCE_POLICY } from './step3-owner-unbound-reader-observations.mjs';
import { isPublishedItem } from './published-repair-policy.mjs';
import { ownerRepairEvidenceClosure, OWNER_REPAIR_EVIDENCE_FREEZE_POLICY } from './step3-owner-stabilized-source-identical-continuity.mjs';
import { nativeOriginClosureEvidence } from './auditor-created-items.mjs';
import { NATIVE_ORIGIN_FREEZE_POLICY } from './step3-native-creation-origin.mjs';
import { step3LedgerNormalizationHistory } from './step3-ledger-normalization-history.mjs';

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
const artifactNames = (version = 3) => researchNames().filter((name) =>
  name.startsWith(`${run}-step3-hash-`)
  || name.startsWith(`${run}-step3-scope-`)
  || name.startsWith(`${run}-reader-findings-`)
  || new RegExp(`^${run}-reader-\\d+\\.md$`).test(name)
  || name.startsWith(`${run}-refute-`)
  || new RegExp(`^${run}-alpha-(?:[a-z]+|batch-[1-9]\\d*)-3a\\.md$`).test(name)
  || (name.startsWith(`${run}-alpha-`) && name.endsWith('-3a-decisions.json'))
  || version === 2 && [ `${run}-alpha-3b.md`, `${run}-cross-group-edges.json`,
    `${run}-3b-verdicts.jsonl` ].includes(name)).sort();
const artifactHashes = (version = 3, observationPolicy = null, manifestPolicy = null, repairEvidencePolicy = null, frozenManifestArtifacts = null, nativeOriginPolicy = null, requireLiveNativeLog = false) => ({
  ...Object.fromEntries(artifactNames(version).map((name) => [
    `research/${name}`, sha256(readFileSync(R('research', name))),
  ])),
  ...(version === 3 ? foreignRefuterClosureEvidence(root, run) : {}),
  ...(version === 3 ? requiredPageClosureEvidence(root, run) : {}),
  ...(version === 3 ? downstreamConsumerClosureEvidence(root, run, manifestPolicy, { frozenArtifacts: frozenManifestArtifacts }) : {}),
  ...(version === 3 && observationPolicy === OBSERVATION_EVIDENCE_POLICY ? closureEvidence(root, run) : {}),
  ...(version === 3 && repairEvidencePolicy === OWNER_REPAIR_EVIDENCE_FREEZE_POLICY
    ? ownerRepairEvidenceClosure(root, run, { required: true }) : {}),
  ...(version === 3 && nativeOriginPolicy === NATIVE_ORIGIN_FREEZE_POLICY
    ? nativeOriginClosureEvidence(root, run, { requireLiveLog: requireLiveNativeLog }) : {}),
});
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
  if (![2, 3].includes(receipt.version) || receipt.run !== run || receipt.status !== 'closed'
    || receipt.version === 3 && receipt.basis !== 'dependency-ordered-step3a') {
    errors.push('wrong version, run, or status');
  }
  if (Object.hasOwn(receipt, 'observation_evidence_policy')
    && (receipt.version !== 3 || receipt.observation_evidence_policy !== OBSERVATION_EVIDENCE_POLICY)) {
    fail('unknown or unsupported observation_evidence_policy');
  }
  if (Object.hasOwn(receipt, 'manifest_evidence_policy')
    && (receipt.version !== 3 || receipt.manifest_evidence_policy !== PRECLOSURE_MANIFEST_POLICY)) {
    fail('unknown or unsupported manifest_evidence_policy');
  }
  if (Object.hasOwn(receipt, 'owner_repair_evidence_policy')
    && (receipt.version !== 3 || receipt.owner_repair_evidence_policy !== OWNER_REPAIR_EVIDENCE_FREEZE_POLICY)) {
    fail('unknown or unsupported owner_repair_evidence_policy');
  }
  if (Object.hasOwn(receipt, 'native_origin_evidence_policy')
    && (receipt.version !== 3 || receipt.native_origin_evidence_policy !== NATIVE_ORIGIN_FREEZE_POLICY)) {
    fail('unknown or unsupported native_origin_evidence_policy');
  }
  // Only verification authenticates closure-time manifest slots through their
  // already sealed archives. Close/default calls retain live preclosure currency.
  const currentArtifacts = artifactHashes(receipt.version, receipt.observation_evidence_policy, receipt.manifest_evidence_policy, receipt.owner_repair_evidence_policy,
    receipt.manifest_evidence_policy === PRECLOSURE_MANIFEST_POLICY ? receipt.artifacts : null,
    receipt.native_origin_evidence_policy);
  if (JSON.stringify(Object.keys(currentArtifacts).sort()) !== JSON.stringify(Object.keys(receipt.artifacts ?? {}).sort())) {
    errors.push('the exact Step-3 artifact set changed');
  }
  for (const [relative, expected] of Object.entries(receipt.artifacts ?? {})) {
    if (currentArtifacts[relative] !== expected) errors.push(`${relative} changed after Step 3 closed`);
  }
  const ledgerRows = step3LedgerRows();
  if (sha256(JSON.stringify(ledgerRows)) !== receipt.step3_ledger_rows_sha256
    || ledgerRows.length !== receipt.step3_ledger_rows_count) {
    try {
      if (!step3LedgerNormalizationHistory(root, run, receipt, ledgerRows)) errors.push('Step-3 defect-ledger rows changed');
    } catch (cause) { errors.push(`Step-3 defect-ledger rows changed: ${cause.message}`); }
  }
  if (errors.length) fail(errors.join('; '));
  console.log(`step3-close: verified ${Object.keys(receipt.artifacts ?? {}).length} frozen artifact(s) for ${run}`);
  process.exit(0);
}

const checks = [
  ['passed-step3a-currency', ['tools/step3-scope.mjs', 'verify-post-3a', '--run', run]],
  ['splice-verify', ['tools/splice-plan.mjs', '--run', run, '--verify']],
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
const repairEvidencePolicy = existsSync(R('research', `${run}-step3-owner-repair-evidence.json`))
  ? OWNER_REPAIR_EVIDENCE_FREEZE_POLICY : null;
const artifacts = artifactHashes(3, OBSERVATION_EVIDENCE_POLICY, PRECLOSURE_MANIFEST_POLICY, repairEvidencePolicy,
  null, NATIVE_ORIGIN_FREEZE_POLICY, true);
if (!Object.keys(artifacts).length) fail('no exact Step-3 artifacts exist');
const ledgerRows = step3LedgerRows();
writeFileSync(receiptPath, `${JSON.stringify({
  version: 3,
  basis: 'dependency-ordered-step3a',
  observation_evidence_policy: OBSERVATION_EVIDENCE_POLICY,
  native_origin_evidence_policy: NATIVE_ORIGIN_FREEZE_POLICY,
  ...(repairEvidencePolicy ? { owner_repair_evidence_policy: repairEvidencePolicy } : {}),
  manifest_evidence_policy: PRECLOSURE_MANIFEST_POLICY,
  run,
  status: 'closed',
  closed_at: new Date().toISOString(),
  artifacts,
  step3_ledger_rows_sha256: sha256(JSON.stringify(ledgerRows)),
  step3_ledger_rows_count: ledgerRows.length,
  final_item_hashes: currentRunItems(),
}, null, 2)}\n`);
console.log(`step3-close: closed ${run} over ${Object.keys(artifacts).length} frozen artifact(s)`);
