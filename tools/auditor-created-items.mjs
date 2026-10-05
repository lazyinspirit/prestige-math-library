#!/usr/bin/env node
// Certify items genuinely created and authored by an auditor/adjudicator.
//
// This is deliberately a distinct evidence class. It never writes a review,
// adjudication, or judge-ledger row. A certification is available only for an
// id absent from both the immutable stage baseline and the item filesystem at
// that boundary, and remains current only while its hash-bound carriers match.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, realpathSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { split, yaml } from './pathway-lib.mjs';
import { historicalStep3OwnerReceipt } from './step3-owner-history.mjs';

const safe = (value, what = 'value') => {
  if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error(`Invalid ${what}`);
  return value;
};
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const sha = value => createHash('sha256').update(value).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])]))
    : value;
const hashValue = value => sha(JSON.stringify(canonical(value)) ?? 'undefined');
// Preserve v1 stage inventories; only provenance receipts need a new policy.
const BASELINE_POLICY = 'auditor-created-stage-bypass-v1';
const CERTIFICATION_POLICY = 'auditor-created-stage-bypass-v2';
const OWNER_RECERTIFICATION_POLICY = 'auditor-created-owner-recertification-v1';
const CARRIER_KEYS = ['guard_sha256', 'judge_sha256', 'item_file_sha256',
  'manifest_sha256', 'contract_sha256', 'step5_subject_sha256'];

export const auditorCreatedBaselinePath = (root, run, step) =>
  join(root, 'research', `${safe(run, 'run')}-step${safe(String(step), 'step')}-auditor-baseline.json`);
export const auditorCreatedCertificationsPath = (root, run, step) =>
  join(root, 'research', `${safe(run, 'run')}-step${safe(String(step), 'step')}-auditor-certifications.json`);
const ownerRecertificationPath = (root, run, step, id, hashes) =>
  join(root, 'research', `${safe(run, 'run')}-step${safe(String(step), 'step')}-owner-recertification-${safe(id, 'item ID')}-${hashValue({ id, carriers: Object.fromEntries(CARRIER_KEYS.map(key => [key, hashes[key]])) }).slice(0, 16)}.json`);

// Owner-spawned creation is a separate attestation class, never a native result.
const OWNER_CREATION_POLICY = 'owner-spawned-step5-creation-v1';
const ownerCreationPath = (root, run, id) => join(root, 'research',
  `${safe(run, 'run')}-step5-owner-creation-${safe(id, 'item ID')}.json`);
const researchFile = (root, path) => {
  const file = resolve(root, String(path ?? ''));
  const boundary = realpathSync(join(root, 'research'));
  if (!existsSync(file) || !realpathSync(file).startsWith(`${boundary}/`))
    throw Error('Owner creation evidence must resolve inside research');
  return file;
};

function validateOwnerCreation(root, run, id, receipt) {
  const baseline = stageBaseline(root, run, 5);
  const timeline = receipt?.author?.timeline;
  const at = Date.parse(receipt?.attested_at), baselineAt = Date.parse(baseline.at);
  const known = timeline?.mode === 'known' && Number.isFinite(Date.parse(timeline.started_at))
    && Date.parse(timeline.started_at) >= baselineAt
    && Date.parse(timeline.ended_at) >= Date.parse(timeline.started_at)
    && Date.parse(timeline.ended_at) <= at;
  const unknown = timeline?.mode === 'unknown' && timeline.after_baseline === true
    && timeline.started_at === undefined && timeline.ended_at === undefined
    && typeof timeline.reason === 'string' && !!timeline.reason.trim();
  if (!receipt || Object.keys(receipt).some(key => !['version', 'policy', 'evidence_class',
      'run', 'step', 'id', 'owner', 'owner_identity', 'author', 'attested_at', 'reason',
      'owner_held_escalation', 'baseline_sha256', 'page', 'batch', 'carriers', 'sources'].includes(key))
    || receipt.version !== 1 || receipt.policy !== OWNER_CREATION_POLICY
    || receipt.run !== run || receipt.step !== 5 || receipt.id !== id
    || receipt.owner !== true || receipt.evidence_class !== 'owner-spawned-creation'
    || receipt.author_result !== undefined || receipt.owner_recertification !== undefined
    || typeof receipt.owner_identity !== 'string' || !receipt.owner_identity.trim()
    || !/^\/root\/[a-zA-Z0-9_/-]+$/.test(receipt.author?.identity ?? '')
    || receipt.author.identity === receipt.owner_identity
    || !Number.isFinite(at) || !Number.isFinite(baselineAt) || at < baselineAt
    || (!known && !unknown) || !String(receipt.reason ?? '').trim()
    || !String(receipt.owner_held_escalation ?? '').trim()
    || receipt.baseline_sha256 !== sha(JSON.stringify(baseline))
    || baseline.items.some(row => row.id === id) || baseline.existing_item_files.includes(id)
    || !receipt.page || !receipt.batch
    || CARRIER_KEYS.some(key => !/^[a-f0-9]{64}$/.test(receipt.carriers?.[key] ?? ''))
    || !Array.isArray(receipt.sources)) throw Error(`${id}: invalid owner creation attestation`);
  const texts = [];
  for (const source of receipt.sources) {
    if (!['assignment', 'escalation', 'authorship'].includes(source.role)
      || !/^[a-f0-9]{64}$/.test(source.sha256 ?? '')) throw Error(`${id}: invalid owner creation source`);
    const bytes = readFileSync(researchFile(root, source.path), 'utf8');
    if (sha(bytes) !== source.sha256) throw Error(`${id}: stale owner creation source`);
    texts.push(bytes);
  }
  if (!['assignment', 'escalation', 'authorship'].every(role => receipt.sources.some(s => s.role === role))
    || ![run, id, receipt.author.identity, receipt.owner_held_escalation]
      .every(value => texts.join('\n').includes(value))) throw Error(`${id}: incomplete owner creation source evidence`);
  return receipt;
}

function ownerCreation(root, run, id, marker = null) {
  const path = ownerCreationPath(root, run, id);
  if (!existsSync(path)) return null;
  const bytes = readFileSync(path, 'utf8');
  const receipt = validateOwnerCreation(root, run, id, JSON.parse(bytes));
  const link = { path: `research/${path.split('/').at(-1)}`, sha256: sha(bytes) };
  if (marker && (marker.path !== link.path || marker.sha256 !== link.sha256))
    throw Error(`${id}: invalid owner creation provenance link`);
  return { receipt, marker: link };
}

export function recordOwnerCreation(root, run, step, id, evidence) {
  if (Number(step) !== 5) throw Error('Owner creation supports Step 5 only');
  safe(run, 'run'); safe(id, 'item ID');
  const receipt = read(researchFile(root, evidence));
  validateOwnerCreation(root, run, id, receipt);
  const row = inventory(root, run).find(row => row.id === id);
  const hashes = row ? carrierHashes(root, run, row) : null;
  if (!row || row.page !== receipt.page || row.batch !== String(receipt.batch)
    || CARRIER_KEYS.some(key => receipt.carriers[key] !== hashes[key]))
    throw Error(`${id}: owner creation must bind every current carrier`);
  const path = ownerCreationPath(root, run, id);
  if (existsSync(path)) {
    const prior = ownerCreation(root, run, id);
    if (!sameCanonical(prior.receipt, receipt)) throw Error(`${id}: refusing to replace owner creation origin`);
    return { path, reused: true };
  }
  writeFileSync(path, `${JSON.stringify(receipt, null, 2)}\n`);
  return { path, reused: false };
}

function ownerEvidenceTextForCurrentCarriers(root, run, step, id, hashes) {
  const path = ownerRecertificationPath(root, run, step, id, hashes);
  if (!existsSync(path)) return '';
  try {
    const receipt = read(path), evidencePath = typeof receipt.evidence === 'string'
      ? resolve(root, receipt.evidence) : '';
    const researchRoot = resolve(root, 'research');
    return evidencePath.startsWith(`${researchRoot}/`) && existsSync(evidencePath)
      ? readFileSync(evidencePath, 'utf8') : '';
  } catch { return ''; }
}

// The exact graph review is an origin attestation after Step 5 closes. A
// subsequent, certified native Step-7 proof/dependency repair must not make us
// rerun that historical bootstrap against the new manifest. The frozen closure
// and next-stage boundary authenticate the old carriers; the native certificate
// separately authenticates the current item. This is not a new bootstrap.
function closedStep5GraphBootstrap(root, run, id, hashes, receipt, evidenceText) {
  if (id !== 'lem-smooth-euclidean-hypersurface-graph-and-localization'
    || receipt.basis !== 'initial-step5-current-graph-lemma-manifest-review'
    || receipt.historical_delta_unknown !== true) return null;
  try {
    const closure = read(join(root, 'research', `${run}-step5-closure.json`));
    const closedAt = Date.parse(closure.closed_at), attestedAt = Date.parse(receipt.at);
    const closeResult = read(join(root, 'research', `${run}-dispatch`, 'tool-step5-close.result.json'));
    if (closure.version !== 2 || closure.run !== run || closure.status !== 'closed'
      || !Number.isFinite(closedAt) || !Number.isFinite(attestedAt) || attestedAt > closedAt
      || closure.final_item_hashes?.[id] !== hashes.guard_sha256
      || closeResult.run !== run || closeResult.role !== 'tool' || closeResult.label !== 'step5-close'
      || closeResult.ok !== true || closeResult.written_by !== 'autopilot'
      || !Array.isArray(closeResult.covers) || !closeResult.covers.includes('all')
      || !Number.isFinite(Date.parse(closeResult.ended_at))
      || Date.parse(closeResult.ended_at) < closedAt) return null;
    const artifacts = Object.entries(closure.artifacts ?? {});
    if (!artifacts.length || artifacts.some(([path, expected]) =>
      !/^[a-f0-9]{64}$/.test(expected ?? '')
      || sha(readFileSync(researchFile(root, path))) !== expected)) return null;
    const boundary = stageBaseline(root, run, 7), before = boundary.item_carriers?.[id];
    if (!before || !Number.isFinite(Date.parse(boundary.at)) || Date.parse(boundary.at) < closedAt
      || CARRIER_KEYS.some(key => before[key] !== hashes[key])) return null;
    const frozenPath = `research/${run}-step5-hash-${safe(String(before.batch))}-post-5a.json`;
    if (!closure.artifacts[frozenPath]) return null;
    const frozen = read(researchFile(root, frozenPath)), carrier = frozen.hashes?.[id];
    if (frozen.run !== run || String(frozen.batch) !== String(before.batch)
      || frozen.label !== 'post-5a' || !carrier
      || carrier.item_sha256 !== hashes.item_file_sha256
      || carrier.manifest_sha256 !== hashes.manifest_sha256
      || carrier.contract_sha256 !== hashes.contract_sha256) return null;
    const decisionsPath = `research/${run}-alpha-batch-${safe(String(before.batch))}-5a-decisions.json`;
    if (!closure.artifacts[decisionsPath]) return null;
    const decisionsDocument = read(researchFile(root, decisionsPath));
    const decisions = Array.isArray(decisionsDocument) ? decisionsDocument : decisionsDocument.decisions;
    if (!Array.isArray(decisions) || !decisions.some(row => row.id === id
      && row.subject_sha256 === hashes.step5_subject_sha256
      && row.historical_delta_unknown === true && row.change_kind === 'current_content_review'
      && row.verdict === 'reviewed_no_defect')) return null;
    const certificate = read(join(root, 'research', `${run}-step7-v2`, 'certification.json'));
    const { sha256, ...payload } = certificate;
    const item = certificate.items?.find(row => row.id === id);
    const text = readFileSync(join(root, 'items', `${safe(id)}.md`), 'utf8');
    if (certificate.version !== 2 || certificate.run !== run || sha256 !== sha(JSON.stringify(payload))
      || !item || item.guard_sha256 !== itemHashGuard(text)
      || item.item_sha256 !== itemHashJudge(text) || item.guard_sha256 === hashes.guard_sha256)
      return null;
    const nativeEvidence = Object.entries(certificate.evidence ?? {});
    if (!nativeEvidence.length || nativeEvidence.some(([path, expected]) =>
      !/^[a-f0-9]{64}$/.test(expected ?? '')
      || sha(readFileSync(researchFile(root, path))) !== expected)) return null;
    const nativeRepair = nativeEvidence.some(([path]) => {
      if (!new RegExp(`/${run}-step7-v2/step7-v2-(initial|repeat)-r[1-9]\\d*-u[a-zA-Z0-9_-]+\\.json$`)
        .test(resolve(root, path))) return false;
      const report = read(researchFile(root, path));
      const packPath = join(root, 'research', `${run}-step7-v2`, `${report.phase}-${report.round}.json`);
      const dispatchPath = join(root, 'research', `${run}-dispatch`,
        `alpha-adjudicate-step7-v2-${report.phase}-r${report.round}-u${report.unit}.result.json`);
      const bound = file => nativeEvidence.some(([path, expected]) =>
        resolve(root, path) === resolve(file) && expected === sha(readFileSync(file)));
      if (report.run !== run || !['initial', 'repeat'].includes(report.phase)
        || !Number.isInteger(report.round) || report.round < 1
        || !bound(packPath) || !bound(dispatchPath)) return false;
      const pack = read(packPath), dispatch = read(dispatchPath);
      return pack.run === run && pack.phase === report.phase && pack.round === report.round
        && pack.before?.[id] === hashes.guard_sha256
        && dispatch.run === run && authorResultAllowed(7, dispatch)
        && report.decisions?.some(decision => decision.id === id
          && ['confirmed_fatal', 'confirmed_nonfatal'].includes(decision.outcome)
          && decision.uncertain === false && pack.assignments?.[String(report.unit)]?.some(tuple =>
            tuple.id === id && tuple.model === decision.model
            && tuple.context_sha256 === decision.context_sha256))
        && report.reviews?.some(review => review.id === id && review.disposition === 'repaired'
          && review.post_sha256 === item.guard_sha256 && review.uncertain === false);
    });
    if (!nativeRepair) return null;
    const evidence = step5ManifestRepairEvidence(evidenceText);
    if (!evidence?.current_manifest_entry
      || hashValue(evidence.current_manifest_entry) !== hashes.manifest_sha256) return null;
    const live = inventory(root, run).find(row => row.id === id);
    if (!live || live.page !== before.page || live.batch !== String(before.batch)
      || !dependencyMetadataMirrorsItem(root, id, live.manifest_entry)
      || !sourceMetadataMirrorsItem(root, id, live.manifest_entry)) return null;
    // The old projection comes from hash-bound review evidence, never from a
    // reconstructed item. Source/approval/check/direct-consumer guards remain
    // unchanged; only its obsolete dependency list is read as historical.
    return bootstrapStep5Author(root, run, id,
      { ...live, manifest_entry: evidence.current_manifest_entry }, hashes, evidenceText,
      { closedGraphOrigin: true });
  } catch { return null; }
}

function ownerRecertification(root, run, step, id, hashes, authorResult, basis = null,
  { historical = false } = {}) {
  const path = ownerRecertificationPath(root, run, step, id, hashes);
  if (!existsSync(path)) return null;
  const bytes = readFileSync(path, 'utf8');
  const receipt = JSON.parse(bytes);
  const evidencePath = typeof receipt.evidence === 'string' ? resolve(root, receipt.evidence) : '';
  const researchRoot = resolve(root, 'research');
  const evidenceText = evidencePath.startsWith(`${researchRoot}/`) && existsSync(evidencePath)
    ? readFileSync(evidencePath, 'utf8') : '';
  const liveRow = step === 5 ? inventory(root, run).find(row => row.id === id) : null;
  const step5Bootstrap = step === 5 && receipt.basis !== undefined && liveRow
    ? bootstrapStep5Author(root, run, id, liveRow, hashes, evidenceText)
      ?? (historical ? closedStep5GraphBootstrap(root, run, id, hashes, receipt, evidenceText) : null)
    : null;
  if (receipt.version !== 1 || receipt.policy !== OWNER_RECERTIFICATION_POLICY
    || receipt.run !== run || receipt.step !== Number(step) || receipt.id !== id
    || receipt.owner !== true || (authorResult ? receipt.author_result !== authorResult
      : receipt.author_result !== undefined || !receipt.owner_creation
        || !ownerCreation(root, run, id, receipt.owner_creation))
    || (basis && receipt.basis !== basis)
    || (receipt.basis !== undefined && !(step === 5
      ? ['initial-step5-contract-only', 'initial-step5-item-repair',
        'initial-step5-source-metadata-repair', 'initial-step5-dependency-repair',
        'initial-step5-current-definition-manifest-review',
        'initial-step5-current-ball-lemma-manifest-review',
        'initial-step5-current-graph-lemma-manifest-review'].includes(receipt.basis)
      : step === 7 && ['initial-step7-item-repair',
        'initial-step7-contract-only'].includes(receipt.basis)))
    || (step === 5 && receipt.basis !== undefined
      && (!step5Bootstrap || step5Bootstrap.basis !== receipt.basis
        || step5Bootstrap.result_file !== receipt.author_result))
    || (['initial-step5-current-definition-manifest-review',
      'initial-step5-current-ball-lemma-manifest-review',
        'initial-step5-current-graph-lemma-manifest-review'].includes(receipt.basis)
      && receipt.historical_delta_unknown !== true)
    || !String(receipt.reason ?? '').trim() || !Number.isFinite(Date.parse(receipt.at))
    || !evidencePath.startsWith(`${researchRoot}/`) || !existsSync(evidencePath)
    || sha(evidenceText) !== receipt.evidence_sha256
    || (step === 5 && !step5EvidenceBindsCurrentCarriers(
      evidenceText, run, id, hashes))
    || CARRIER_KEYS.some(key => receipt.carriers?.[key] !== hashes[key]))
    throw Error(`${id}: invalid owner recertification receipt`);
  return { path: `research/${path.split('/').at(-1)}`, sha256: sha(bytes), basis: receipt.basis };
}

// A carried Step-5 item can be repaired by a Step-7 adjudicator before the
// Step-7 certification gate first runs. If a shared batch contract is then
// repaired outside that dispatch, there is no Step-7 receipt to recertify.
// Admit an initial owner attestation when the item itself has a genuine Step-7
// content delta in a successful author window. A separate contract-only branch
// covers a carried item whose item and manifest are byte-identical to the
// Step-7 baseline, but whose exact contract entry changed after adjudication.
// Its owner receipt, rather than a fictional item write, binds that repair.
function bootstrapStep7Author(root, run, id, row, hashes) {
  if (!provenanceRows(root, run, 5).some(prior => prior.id === id)) return null;
  const baseline = stageBaseline(root, run, 7);
  const listed = baseline.items.some(value => value.id === id
    && value.page === row.page && String(value.batch) === row.batch);
  const before = baseline.item_carriers?.[id];
  if (!listed || !baseline.existing_item_files.includes(id) || !before
    || before.page !== row.page || String(before.batch) !== row.batch
    || matchesCarriers(before, row, hashes)) return null;
  const itemChanged = before.judge_sha256 !== hashes.judge_sha256;
  const contractOnly = before.item_file_sha256 === hashes.item_file_sha256
    && before.manifest_sha256 === hashes.manifest_sha256
    && before.contract_sha256 !== hashes.contract_sha256;
  if (!itemChanged && !contractOnly) return null;
  const changedAt = itemChanged
    ? statSync(join(root, 'items', `${safe(id, 'item ID')}.md`)).mtimeMs : null;
  const baselineAt = Date.parse(baseline.at);
  return successfulAuthorResults(root, run, 7).filter(author => {
    const started = Date.parse(author.started_at), ended = Date.parse(author.ended_at);
    const covers = author.covers.map(String);
    return Number.isFinite(started) && Number.isFinite(ended) && started <= ended
      && (itemChanged ? changedAt >= started - 1500 && changedAt <= ended
        : Number.isFinite(baselineAt) && started >= baselineAt)
      && (!covers.length || covers.includes('all') || covers.includes(row.batch));
  }).sort((a, b) => Date.parse(a.ended_at) - Date.parse(b.ended_at))
    .map(author => ({ ...author, basis: itemChanged
      ? 'initial-step7-item-repair' : 'initial-step7-contract-only' })).at(-1) ?? null;
}

// A Step-5 gate can first encounter a Step-3-created item whose current
// contract entry changed during a failed adjudicator attempt, or whose item
// proof was repaired by the owner after adjudication. Keep the original Step-3
// provenance. A successful Step-5 result supplies stage/batch context; the
// hash-bound owner receipt, not that result, attests either late repair.
const step5BootstrapContext = new Map();
function bootstrapStep5Author(root, run, id, row, hashes, evidenceText = '',
  { closedGraphOrigin = false } = {}) {
  const key = `${root}\0${run}`;
  if (!step5BootstrapContext.has(key)) {
    step5BootstrapContext.set(key, {
      origins: new Set(provenanceRows(root, run, 3).map(prior => prior.id)),
      baseline: stageBaseline(root, run, 5),
      authors: successfulAuthorResults(root, run, 5),
    });
  }
  const context = step5BootstrapContext.get(key);
  if (!context.origins.has(id)) return null;
  const baseline = context.baseline;
  const listed = baseline.items.some(value => value.id === id
    && value.page === row.page && String(value.batch) === row.batch);
  const before = baseline.item_carriers?.[id];
  if (!listed || !baseline.existing_item_files.includes(id) || !before
    || before.page !== row.page || String(before.batch) !== row.batch) return null;
  const contractOnly = before.item_file_sha256 === hashes.item_file_sha256
    && before.judge_sha256 === hashes.judge_sha256
    && before.manifest_sha256 === hashes.manifest_sha256
    && before.contract_sha256 !== hashes.contract_sha256;
  const itemRepair = before.judge_sha256 !== hashes.judge_sha256
    && before.manifest_sha256 === hashes.manifest_sha256;
  const manifestRepair = before.judge_sha256 !== hashes.judge_sha256
    && before.manifest_sha256 !== hashes.manifest_sha256
    ? step5ManifestRepairBasis(root, run, id, row, hashes, before, evidenceText,
      { closedGraphOrigin }) : null;
  if (!contractOnly && !itemRepair && !manifestRepair) return null;
  const baselineAt = Date.parse(baseline.at);
  const eligible = context.authors.filter(author => {
    const started = Date.parse(author.started_at), ended = Date.parse(author.ended_at);
    const covers = author.covers.map(String);
    return Number.isFinite(started) && Number.isFinite(ended) && started <= ended
      && Number.isFinite(baselineAt) && started >= baselineAt
      && (!covers.length || covers.includes('all') || covers.includes(row.batch));
  }).sort((a, b) => Date.parse(a.ended_at) - Date.parse(b.ended_at));
  // A later successful Step-5 dispatch may cover the same batch without
  // authoring this already reviewed carrier. Keep a current, hash-bound owner
  // receipt attached to its original eligible dispatch instead of silently
  // rebinding its authorship to that later dispatch.
  const receiptPath = ownerRecertificationPath(root, run, 5, id, hashes);
  let preferred = null;
  if (existsSync(receiptPath)) {
    try { preferred = read(receiptPath).author_result; } catch { /* invalid receipt is checked below */ }
  }
  const author = eligible.find(candidate => candidate.result_file === preferred)
    ?? eligible.at(-1);
  return author ? { ...author, basis: manifestRepair ?? (itemRepair
    ? 'initial-step5-item-repair' : 'initial-step5-contract-only') } : null;
}

function step5EvidenceBindsCurrentCarriers(text, run, id, hashes) {
  // Independent reviews report the three source carriers (raw item bytes,
  // canonical manifest entry and canonical contract entry); the normalized
  // guard/judge/subject hashes are derived deterministically from these inputs.
  return text.includes(run) && text.includes(id)
    && ['item_file_sha256', 'manifest_sha256', 'contract_sha256']
      .every(key => text.includes(hashes[key]));
}

function step5ManifestRepairEvidence(text) {
  const match = text.match(/```step5-manifest-repair\s*\r?\n([\s\S]*?)\r?\n```/);
  if (!match) return null;
  try { return JSON.parse(match[1]); } catch { return null; }
}

function sameCanonical(left, right) {
  return JSON.stringify(canonical(left)) === JSON.stringify(canonical(right));
}

function sameExceptSourceReferenceFields(before, after, path = []) {
  const sourceLocator = path.length === 4 && path[0] === 'sources'
    && path[1] === 'references' && /^\d+$/.test(path[2])
    && ['url', 'locator'].includes(path[3]);
  if (sourceLocator) return typeof before === 'string' && typeof after === 'string';
  if (Array.isArray(before) || Array.isArray(after))
    return Array.isArray(before) && Array.isArray(after) && before.length === after.length
      && before.every((value, index) => sameExceptSourceReferenceFields(value, after[index], [...path, String(index)]));
  if (before && typeof before === 'object' || after && typeof after === 'object') {
    if (!before || !after || typeof before !== 'object' || typeof after !== 'object') return false;
    const leftKeys = Object.keys(before).sort(), rightKeys = Object.keys(after).sort();
    return sameCanonical(leftKeys, rightKeys) && leftKeys.every(key =>
      sameExceptSourceReferenceFields(before[key], after[key], [...path, key]));
  }
  return before === after;
}

function sourceReferenceFieldChanges(before, after, path = [], changes = []) {
  const sourceLocator = path.length === 4 && path[0] === 'sources'
    && path[1] === 'references' && /^\d+$/.test(path[2])
    && ['url', 'locator'].includes(path[3]);
  if (sourceLocator) {
    if (before !== after) changes.push(path.join('.'));
    return changes;
  }
  if (Array.isArray(before) && Array.isArray(after)) {
    before.forEach((value, index) => sourceReferenceFieldChanges(value, after[index], [...path, String(index)], changes));
  } else if (before && after && typeof before === 'object' && typeof after === 'object') {
    for (const key of Object.keys(before)) sourceReferenceFieldChanges(before[key], after[key], [...path, key], changes);
  }
  return changes;
}

function sourceMetadataMirrorsItem(root, id, currentEntry) {
  const itemText = readFileSync(join(root, 'items', `${safe(id, 'item ID')}.md`), 'utf8');
  const frontmatter = yaml().parse(split(itemText).fm) ?? {};
  return sameCanonical(frontmatter.sources, currentEntry.sources);
}

function dependencyMetadataMirrorsItem(root, id, currentEntry) {
  const itemText = readFileSync(join(root, 'items', `${safe(id, 'item ID')}.md`), 'utf8');
  const frontmatter = yaml().parse(split(itemText).fm) ?? {};
  return sameCanonical(frontmatter.deps ?? [], currentEntry.deps ?? []);
}

// Classified metadata deltas require both full hash-proven projections. An
// explicitly owner-authorized current-definition review is a separate branch:
// it preserves the unknown historical delta and binds the current projection,
// actual source evidence and direct consumers without inventing a preimage.
function step5ManifestRepairBasis(root, run, id, row, hashes, before, evidenceText,
  { closedGraphOrigin = false } = {}) {
  const evidence = step5ManifestRepairEvidence(evidenceText);
  if (!evidence || evidence.version !== 1 || evidence.policy !== 'step5-manifest-repair-evidence-v1'
    || evidence.run !== run || evidence.step !== 5 || evidence.id !== id
    || evidence.page !== row.page || String(evidence.batch) !== row.batch
    || evidence.baseline_manifest_sha256 !== before.manifest_sha256
    || evidence.current_manifest_sha256 !== hashes.manifest_sha256
    || !evidence.review || evidence.review.current_item_and_contract_checked !== true
    || evidence.review.current_manifest_matches_item !== true
    || evidence.review.no_unresolved_defect !== true
    || evidence.current_carriers?.item_file_sha256 !== hashes.item_file_sha256
    || evidence.current_carriers?.manifest_sha256 !== hashes.manifest_sha256
    || evidence.current_carriers?.contract_sha256 !== hashes.contract_sha256)
    return null;
  const definitionReview = evidence.repair_kind === 'current-definition-manifest-review';
  const ballLemmaReview = evidence.repair_kind === 'current-ball-lemma-manifest-review'
    && id === 'lem-euclidean-balls-are-bounded-c-one-domains';
  const graphLemmaReview = evidence.repair_kind === 'current-graph-lemma-manifest-review'
    && id === 'lem-smooth-euclidean-hypersurface-graph-and-localization';
  if (graphLemmaReview) {
    const link = evidence.owner_authorization?.approval;
    const expectedPath = `research/${run}-step5-historical-owner-checkpoint.json`;
    try {
      if (link?.path !== expectedPath || !/^[a-f0-9]{64}$/.test(link?.sha256 ?? '')) return null;
      const bytes = readFileSync(researchFile(root, link.path), 'utf8');
      const approval = JSON.parse(bytes);
      if (sha(bytes) !== link.sha256 || approval.version !== 1 || approval.run !== run
        || approval.approval?.answer !== 'Approve current-content review with historical uncertainty preserved'
        || !Number.isFinite(Date.parse(approval.approval?.received_at))
        || !Array.isArray(approval.obligations)
        || !approval.obligations.some(row => row.id === id && row.obligation === link.obligation)) return null;
    } catch { return null; }
  }
  if (definitionReview || ballLemmaReview || graphLemmaReview) {
    // Explicit owner resolution of a missing historical projection. Never call
    // this metadata-only or infer the unknown delta from a hash or mtime.
    const currentEntry = evidence.current_manifest_entry;
    const itemText = readFileSync(join(root, 'items', `${safe(id)}.md`), 'utf8');
    const fm = yaml().parse(split(itemText).fm) ?? {};
    const directConsumers = readdirSync(join(root, 'items')).filter(file => file.endsWith('.md')
      && file !== `${id}.md`).filter(file => {
        const text = readFileSync(join(root, 'items', file), 'utf8');
        if (!text.includes(id)) return false;
        const { fm: consumerFm, body } = split(text);
        const consumer = yaml().parse(consumerFm) ?? {};
        if (consumer.deps !== undefined && !Array.isArray(consumer.deps))
          throw Error(`${file}: invalid dependency list during direct-consumer review`);
        // Same target/display-label grammar as depcheck and fwdcheck.
        const links = [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)]
          .map(match => match[1].trim());
        return (consumer.deps ?? []).includes(id) || links.includes(id);
      }).map(file => file.slice(0, -3)).sort();
    if (evidence.historical_delta_unknown !== true || evidence.baseline_manifest_entry !== undefined
      || fm.kind !== (definitionReview ? 'definition' : 'lemma')
      || currentEntry?.kind !== fm.kind
      || evidence.owner_authorization?.owner !== true
      || !String(evidence.owner_authorization?.reason ?? '').trim()
      || (definitionReview ? evidence.review.current_definition_and_direct_consumers_checked !== true
        : evidence.review.current_proof_suppliers_and_direct_consumers_checked !== true)
      || !sameCanonical(evidence.review.direct_consumers, directConsumers)
      || !currentEntry || hashValue(currentEntry) !== hashes.manifest_sha256
      || !sameCanonical(currentEntry, row.manifest_entry)
      || (closedGraphOrigin ? !graphLemmaReview
        : !sameCanonical(currentEntry.deps ?? [], fm.deps ?? []))
      || !sameCanonical(currentEntry.sources, fm.sources)
      || !Array.isArray(evidence.sources) || !evidence.sources.length) return null;
    const texts = [];
    for (const source of evidence.sources) {
      try {
        const text = readFileSync(researchFile(root, source.path), 'utf8');
        if (sha(text) !== source.sha256) return null;
        texts.push(text);
      } catch { return null; }
    }
    if (![run, id, evidence.owner_authorization.reason].every(value => texts.join('\n').includes(value))) return null;
    if (ballLemmaReview || graphLemmaReview) {
      for (const kind of ['precheck', 'rendercheck', 'strict-contract']) {
        const link = evidence.proof_checks?.[kind];
        try {
          const bytes = readFileSync(researchFile(root, link?.path), 'utf8');
          const check = JSON.parse(bytes);
          if (sha(bytes) !== link?.sha256 || check.version !== 1 || check.run !== run
            || check.step !== 5 || check.id !== id || check.kind !== kind
            || check.exit_code !== 0 || !Number.isFinite(Date.parse(check.observed_at))
            || !Array.isArray(check.argv)
            || ['item_file_sha256', 'manifest_sha256', 'contract_sha256']
              .some(key => check.current_carriers?.[key] !== hashes[key])
            || (kind === 'precheck' ? !check.argv.includes('tools/precheck.mts')
                || !check.argv.includes(`items/${id}.md`)
              : kind === 'rendercheck' ? !check.argv.includes('tools/rendercheck.mjs')
                || !check.argv.includes(`items/${id}.md`)
              : !check.argv.includes('tools/proof-contract.mjs')
                || !check.argv.includes('--strict') || !check.argv.includes('--items')
                || !check.argv.includes(id)
                || !check.argv.includes(`research/${run}-batch-${row.batch}.proof-contracts.json`))) return null;
        } catch { return null; }
      }
    }
    return definitionReview ? 'initial-step5-current-definition-manifest-review'
      : graphLemmaReview ? 'initial-step5-current-graph-lemma-manifest-review'
        : 'initial-step5-current-ball-lemma-manifest-review';
  }
  const oldEntry = evidence.baseline_manifest_entry, currentEntry = evidence.current_manifest_entry;
  if (!oldEntry || !currentEntry || oldEntry.id !== id || currentEntry.id !== id
    || oldEntry.__step6_page_id !== row.page || currentEntry.__step6_page_id !== row.page
    || hashValue(oldEntry) !== before.manifest_sha256
    || hashValue(currentEntry) !== hashes.manifest_sha256
    || !sameCanonical(currentEntry, row.manifest_entry)) return null;

  const kind = evidence.repair_kind;
  if (kind === 'source-reference-fields') {
    const changes = sourceReferenceFieldChanges(oldEntry, currentEntry);
    const oldRefs = oldEntry.sources?.references, currentRefs = currentEntry.sources?.references;
    const referencesWellFormed = Array.isArray(oldRefs) && Array.isArray(currentRefs)
      && oldRefs.length > 0 && oldRefs.length === currentRefs.length
      && oldRefs.every((ref, index) => typeof ref?.title === 'string'
        && typeof ref?.url === 'string' && typeof ref?.locator === 'string'
        && typeof currentRefs[index]?.title === 'string'
        && typeof currentRefs[index]?.url === 'string' && typeof currentRefs[index]?.locator === 'string');
    return changes.length > 0 && referencesWellFormed
      && sameExceptSourceReferenceFields(oldEntry, currentEntry)
      && sourceMetadataMirrorsItem(root, id, currentEntry)
      && evidence.review.changed_fields === 'sources.references[*].url,locator'
      ? 'initial-step5-source-metadata-repair' : null;
  }
  if (kind === 'dependency-addition') {
    const oldDeps = oldEntry.deps, newDeps = currentEntry.deps;
    if (!Array.isArray(oldDeps) || !Array.isArray(newDeps) || !oldDeps.every(x => typeof x === 'string')
      || !newDeps.every(x => typeof x === 'string') || new Set(oldDeps).size !== oldDeps.length
      || new Set(newDeps).size !== newDeps.length || !newDeps.length || newDeps.length <= oldDeps.length)
      return null;
    const added = newDeps.filter(dep => !oldDeps.includes(dep));
    let cursor = 0;
    for (const dep of newDeps) if (cursor < oldDeps.length && dep === oldDeps[cursor]) cursor += 1;
    if (cursor !== oldDeps.length || !added.length || !sameExceptDependencyList(oldEntry, currentEntry)
      || !dependencyMetadataMirrorsItem(root, id, currentEntry)
      || !sameCanonical(evidence.review.reviewed_new_dependencies, added)) return null;
    if (!added.every(dep => existsSync(join(root, 'items', `${safe(dep, 'dependency ID')}.md`)))) return null;
    if (evidence.review.changed_fields !== 'deps') return null;
    return 'initial-step5-dependency-repair';
  }
  return null;
}

function sameExceptDependencyList(before, after, path = []) {
  const dependencyList = path.length === 1 && path[0] === 'deps';
  if (dependencyList) return Array.isArray(before) && Array.isArray(after);
  if (Array.isArray(before) || Array.isArray(after))
    return Array.isArray(before) && Array.isArray(after) && before.length === after.length
      && before.every((value, index) => sameExceptDependencyList(value, after[index], [...path, String(index)]));
  if (before && typeof before === 'object' || after && typeof after === 'object') {
    if (!before || !after || typeof before !== 'object' || typeof after !== 'object') return false;
    const leftKeys = Object.keys(before).sort(), rightKeys = Object.keys(after).sort();
    return sameCanonical(leftKeys, rightKeys) && leftKeys.every(key =>
      sameExceptDependencyList(before[key], after[key], [...path, key]));
  }
  return before === after;
}

export function recordOwnerRecertification(root, run, step, id, evidence, reason) {
  step = Number(step);
  if (![5, 7, 8].includes(step)) throw Error('Owner recertification supports steps 5, 7, and 8');
  safe(run, 'run'); safe(id, 'item ID');
  if (!String(reason ?? '').trim()) throw Error(`${id}: owner recertification needs a reason`);
  const row = inventory(root, run).find(row => row.id === id);
  if (!row) throw Error(`${id}: item is absent from the current run manifest`);
  const hashes = carrierHashes(root, run, row);
  const evidencePath = resolve(root, evidence);
  const researchRoot = resolve(root, 'research');
  const evidenceText = evidencePath.startsWith(`${researchRoot}/`) && existsSync(evidencePath)
    ? readFileSync(evidencePath, 'utf8') : '';
  const priorPath = auditorCreatedCertificationsPath(root, run, step);
  const prior = existsSync(priorPath)
    ? provenanceRows(root, run, step).find(value => value.id === id) : null;
  const bootstrap = !prior
    ? step === 5 ? bootstrapStep5Author(root, run, id, row, hashes, evidenceText)
      : step === 7 ? bootstrapStep7Author(root, run, id, row, hashes) : null
    : null;
  const creation = prior?.owner_creation ? ownerCreation(root, run, id, prior.owner_creation) : null;
  const authorResult = prior?.author_result ?? bootstrap?.result_file;
  if (!authorResult && !creation) throw Error(`${id}: no prior auditor-created certification to recertify or eligible Step ${step} owner bootstrap`);
  if (!evidenceText.includes(id))
    throw Error(`${id}: owner evidence must be a research file naming the item`);
  if (step === 5 && !step5EvidenceBindsCurrentCarriers(evidenceText, run, id, hashes))
    throw Error(`${id}: Step-5 owner evidence must name the active run and every exact current carrier hash`);
  const path = ownerRecertificationPath(root, run, step, id, hashes);
  if (existsSync(path)) {
    ownerRecertification(root, run, step, id, hashes, authorResult, bootstrap?.basis ?? null);
    return { path, reused: true };
  }
  const receipt = { version: 1, policy: OWNER_RECERTIFICATION_POLICY, run, step, id,
    owner: true, at: new Date().toISOString(), reason: String(reason).trim(),
    evidence: `research/${evidencePath.split('/').at(-1)}`,
    evidence_sha256: sha(readFileSync(evidencePath, 'utf8')),
    ...(creation ? { owner_creation: creation.marker } : { author_result: authorResult }),
    ...(bootstrap ? { basis: bootstrap.basis,
      ...(['initial-step5-current-definition-manifest-review',
        'initial-step5-current-ball-lemma-manifest-review',
        'initial-step5-current-graph-lemma-manifest-review'].includes(bootstrap.basis)
        ? { historical_delta_unknown: true } : {}) } : {}),
    carriers: Object.fromEntries(CARRIER_KEYS.map(key => [key, hashes[key]])) };
  writeFileSync(path, `${JSON.stringify(receipt, null, 2)}\n`);
  return { path, reused: false };
}

function inventory(root, run) {
  const items = [];
  for (const file of readdirSync(join(root, 'research')).sort()) {
    const match = file.match(new RegExp(`^${run}-batch-(\\d+)\\.pages\\.json$`));
    if (!match) continue;
    const raw = read(join(root, 'research', file));
    const pages = Array.isArray(raw) ? raw : raw.pages ?? [];
    for (const page of pages) for (const rawItem of page.items ?? []) {
      const item = typeof rawItem === 'string' ? { id: rawItem } : rawItem;
      if (!item?.id) continue;
      items.push({ id: String(item.id), page: String(page.id), batch: String(match[1]),
        manifest_entry: canonical({ ...item, __step6_page_id: String(page.id) }) });
    }
  }
  const ids = items.map(row => row.id);
  if (new Set(ids).size !== ids.length) throw Error('Run manifests contain duplicate item IDs');
  return items;
}

export function writeAuditorCreatedBaseline(root, run, step) {
  safe(run, 'run');
  if (![5, 7, 8].includes(Number(step))) throw Error('Auditor baseline supports steps 5, 7, and 8');
  const path = auditorCreatedBaselinePath(root, run, step);
  const live = inventory(root, run);
  const current = {
    version: 1, run, step: Number(step), policy: BASELINE_POLICY,
    items: live.map(({ id, page, batch }) => ({ id, page, batch })),
    existing_item_files: readdirSync(join(root, 'items')).filter(file => file.endsWith('.md'))
      .map(file => file.slice(0, -3)).sort(),
  };
  if (existsSync(path)) {
    const prior = read(path);
    const comparable = ({ at: _at, item_carriers: _carriers, ...row }) => row;
    if (JSON.stringify(comparable(prior)) !== JSON.stringify(current)
      || (prior.item_carriers && live.some(row => {
        const before = prior.item_carriers[row.id], exists = existsSync(join(root, 'items', `${row.id}.md`));
        return exists ? !before || !matchesCarriers(before, row, carrierHashes(root, run, row)) : !!before;
      })))
      throw Error(`Refusing to move the Step ${step} auditor baseline for ${run}`);
    return { path, reused: true, items: current.items.length };
  }
  // Capture candidate-specific evidence before the stage starts. Shared file
  // mtimes can prove a write window, but cannot prove this item was changed.
  const item_carriers = Object.fromEntries(live.filter(row => existsSync(join(root, 'items', `${row.id}.md`)))
    .map(row => [row.id, { page: row.page, batch: row.batch, ...carrierHashes(root, run, row) }]));
  writeFileSync(path, `${JSON.stringify({ ...current, item_carriers, at: new Date().toISOString() }, null, 2)}\n`);
  return { path, reused: false, items: current.items.length };
}

export function authorResultAllowed(step, row) {
  if (row?.ok !== true || !row.ended_at || !row.started_at || !Array.isArray(row.covers)) return false;
  const label = String(row.label ?? '');
  if (Number(step) === 3) return row.role === 'alpha-high'
    && /^(?:step3b-[a-z]|step3b-pair-[a-z0-9-]+)-[a-f0-9]{16}$/.test(label);
  if (Number(step) === 5) return row.role === 'alpha'
    && /^(?:5a-[a-z]|5a-batch-[1-9]\d*|5b-lead|gate-batch-[1-9]\d*-(?:[a-z]|all)|5a-gate-risk-report-[1-9]\d*-(?:[a-z]|unowned)|5[ab]-(?:gate|edge)-[a-z0-9]+(?:-[a-z0-9]+)*-[1-9]\d*)$/.test(label);
  if (Number(step) === 7) return (row.role === 'final-adjudicator'
    && /^step7-fa-[a-z]-round-[1-9]\d*$/.test(label))
    || (row.role === 'alpha-adjudicate'
      && /^(?:step7-v2-(?:initial|repeat)-r[1-9]\d*-u[a-zA-Z0-9_-]+|step7-[a-z]|step7-guard-(?:[a-z]|review)-round-[1-9]\d*|step7-preflight-(?:[a-z]|review)-[1-9]\d*|repair-8-(?:[a-z]-)?round-[1-9]\d*|cross-group-[a-z]-round-[1-9]\d*|adjudicate-closure-recovery-(?:[a-z]-)?[1-9]\d*)$/.test(label))
    || (row.role === 'alpha-repair'
      && /^step7-v2-(?:impact-initial|impact-repeat|gate)(?:-pass-[1-9]\d*)?-r[1-9]\d*-u[123]$/.test(label));
  return Number(step) === 8 && row.role === 'alpha'
    && /^(?:step8-lead|step8-changes-adjudicate-[1-9]\d*|step8-carried-adjudicate-(?:[a-z]-)?[1-9]\d*|step8-gate-adjudication-[1-9]\d*|impact-close-[1-9]\d*|step8-close-adjudicate-[1-9]\d*|step8-close-carried-(?:[a-z]-)?[1-9]\d*|receipts(?:-fix-[1-9]\d*)?)$/.test(label);
}

function successfulAuthorResults(root, run, step) {
  const dir = join(root, 'research', `${run}-dispatch`);
  if (!existsSync(dir)) return [];
  const rows = [];
  for (const file of readdirSync(dir).filter(name => name.endsWith('.result.json') && !name.includes('.attempt-'))) {
    try {
      const row = read(join(dir, file));
      if (row.run === run && authorResultAllowed(step, row)) rows.push({ ...row, result_file: file });
    } catch { /* malformed result is not evidence */ }
  }
  return rows;
}

function coveringResult(results, itemPath, manifestPath, contractPath, batch) {
  const carriers = [itemPath, manifestPath];
  if (existsSync(contractPath)) carriers.push(contractPath);
  const changedAt = Math.max(...carriers.map(path => statSync(path).mtimeMs));
  return results.filter(row => {
    const started = Date.parse(row.started_at), ended = Date.parse(row.ended_at);
    if (!Number.isFinite(started) || !Number.isFinite(ended) || started > ended
      || changedAt < started - 1500 || changedAt > ended) return false;
    const covers = row.covers.map(String);
    return !covers.length || covers.includes('all') || covers.includes(String(batch));
  }).sort((a, b) => Date.parse(a.ended_at) - Date.parse(b.ended_at)).at(-1);
}

function contractEntry(path, id) {
  if (!existsSync(path)) return null;
  return read(path)?.contracts?.[id] ?? null;
}

function certificationRows(receipt, path, { steps = null } = {}) {
  if (receipt?.version !== 1 || receipt?.policy !== CERTIFICATION_POLICY
    || ![5, 7, 8].includes(receipt?.step) || !Array.isArray(receipt?.items))
    throw Error(`Invalid auditor-created certification receipt: ${path}`);
  if (steps && !steps.includes(receipt.step)) return [];
  return receipt.items.map(row => ({ ...row, step: receipt.step, run: receipt.run }));
}

function stageBaseline(root, run, step) {
  const baseline = read(auditorCreatedBaselinePath(root, run, step));
  if (baseline?.version !== 1 || baseline.run !== run
    || (step !== 3 && baseline.step !== step)
    || baseline.policy !== (step === 3 ? 'auditor-authored-step3-bypass-v1' : BASELINE_POLICY)
    || !Array.isArray(baseline.items) || !Array.isArray(baseline.existing_item_files)
    || (step === 3 && !Array.isArray(baseline.scopes)))
    throw Error(`Invalid Step ${step} auditor baseline`);
  return baseline;
}

// Historical rows prove origin, not currency. A later-stage refresh records the
// original immutable boundary; it never turns an original/preexisting item into
// an auditor-created one or mutates the earlier receipt.
function provenanceRows(root, run, step, cache = new Map()) {
  if (cache.has(step)) return cache.get(step);
  const path = auditorCreatedCertificationsPath(root, run, step);
  if (!existsSync(path)) return [];
  const receipt = read(path), baseline = stageBaseline(root, run, step);
  if (receipt.run !== run || receipt.baseline_sha256 !== sha(JSON.stringify(baseline)))
    throw Error(`Invalid auditor-created certification identity: ${path}`);
  const rows = step === 3
    ? (receipt.version === 1 && receipt.policy === 'auditor-authored-step3-bypass-v2'
      && Array.isArray(receipt.items) ? receipt.items.map(row => ({ ...row, run, step })) : null)
    : certificationRows(receipt, path);
  if (!rows || receipt.step !== undefined && receipt.step !== step)
    throw Error(`Invalid auditor-created certification receipt: ${path}`);
  const ids = new Set();
  const origins = new Map([[step, baseline]]);
  const authors = successfulAuthorResults(root, run, step);
  for (const row of rows) {
    const creation = row.owner_creation ? ownerCreation(root, run, row.id, row.owner_creation) : null;
    if (creation && (step !== 5 || row.author_result !== undefined || row.origin_step !== undefined
      || row.evidence_class !== 'owner-spawned-creation'
      || row.page !== creation.receipt.page || String(row.batch) !== String(creation.receipt.batch)
      || (!row.owner_recertification && CARRIER_KEYS.some(key => row[key] !== creation.receipt.carriers[key]))))
      throw Error(`${row.id}: invalid owner creation certification`);
    if (row.evidence_class !== undefined && row.evidence_class !== 'owner-spawned-creation')
      throw Error(`${row.id}: unknown creation evidence class`);
    if (row.evidence_class === 'owner-spawned-creation' && !creation)
      throw Error(`${row.id}: missing owner creation provenance`);
    if (ids.has(row.id) || (!row.author_result && !creation) || !row.page || !row.batch
      || (step === 3 && (!/^[a-f0-9]{64}$/.test(row.sha256 ?? '') || !Array.isArray(row.dependencies))))
      throw Error(`Invalid auditor-created item provenance: ${row.id}`);
    ids.add(row.id);
    // Receipts are engine-owned records of the historical write-window check;
    // their author link must still resolve to genuine dispatch evidence. Do not
    // compare current mtimes here: an unchanged V2 receipt survives file touches.
    const v2Author = step === 7 ? step7V2Creation(root, run, row.id, row) : null;
    if (!creation && !authors.some(author => {
      const started = Date.parse(author.started_at), ended = Date.parse(author.ended_at);
      const covers = author.covers.map(String);
      const page = step === 3 ? read(join(root, 'research', `${run}-batch-${safe(String(row.batch))}.pages.json`))
        .find(value => value.id === row.page) : null;
      const pair = page?.kind === 'A' ? page.id : page?.companion;
      const step3Covered = author.label.startsWith('step3b-pair-')
        ? Boolean(pair && author.label.startsWith(`step3b-pair-${pair}-`) && covers.includes(pair))
        : covers.includes(String(row.batch));
      return Number.isFinite(started) && Number.isFinite(ended) && started <= ended
        && (v2Author?.result_file === author.result_file
        || (step === 3 ? author.label === row.author_result && author.result_file.startsWith('alpha-high-')
          && step3Covered : author.result_file === row.author_result
          && (!covers.length || covers.includes('all') || covers.includes(String(row.batch)))));
    })) throw Error(`${row.id}: missing successful Step ${step} author-result provenance`);
    if (step === 3 && row.owner_recertification !== undefined) {
      const marker = row.owner_recertification;
      const owner = historicalStep3OwnerReceipt(root, run, row.id, marker);
      if (!owner) throw Error(`${row.id}: missing owner recertification provenance`);
      if (sha(JSON.stringify(owner)) !== marker.sha256 || owner.at !== marker.at
        || owner.version !== 1 || owner.run !== run || owner.phase !== 'item'
        || owner.target !== row.id || owner.owner !== true || owner.decision !== 'repaired'
        || owner.sha256 !== row.sha256 || !Array.isArray(owner.dependencies)
        || JSON.stringify(owner.dependencies) !== JSON.stringify(row.dependencies)
        || !String(owner.reason ?? '').trim())
        throw Error(`${row.id}: invalid owner recertification provenance`);
    }
    if (step !== 3 && row.owner_recertification !== undefined) {
      const marker = ownerRecertification(root, run, step, row.id, row, row.author_result,
        null, { historical: true });
      if (!marker || marker.path !== row.owner_recertification.path
        || marker.sha256 !== row.owner_recertification.sha256)
        throw Error(`${row.id}: invalid owner recertification provenance`);
      if (marker.basis !== row.owner_recertification.basis)
        throw Error(`${row.id}: invalid owner recertification basis`);
    }
    const originStep = row.origin_step ?? step;
    if (![3, 5, 7, 8].includes(originStep) || originStep > step)
      throw Error(`${row.id}: invalid auditor-created origin step`);
    if (!origins.has(originStep)) origins.set(originStep, stageBaseline(root, run, originStep));
    const origin = origins.get(originStep);
    if (origin.items.some(item => item.id === row.id) || origin.existing_item_files.includes(row.id))
      throw Error(`${row.id}: existed before its auditor-created origin`);
    if (originStep !== step && (row.origin_baseline_sha256 !== sha(JSON.stringify(origin))
      || !provenanceRows(root, run, originStep, cache).some(item => item.id === row.id
        && (item.origin_step ?? originStep) === originStep)))
      throw Error(`${row.id}: missing original auditor-created provenance`);
    if (originStep !== step) {
      const before = baseline.item_carriers?.[row.id];
      if (!before || matchesCarriers(before, { page: row.page, batch: String(row.batch) }, row))
        throw Error(`${row.id}: no item-specific Step ${step} promotion delta`);
    }
  }
  cache.set(step, rows);
  return rows;
}

function carrierHashes(root, run, row) {
  const text = readFileSync(join(root, 'items', `${safe(row.id, 'item ID')}.md`), 'utf8');
  const itemFileSha = sha(text);
  const contract = contractEntry(join(root, 'research', `${run}-batch-${safe(row.batch)}.proof-contracts.json`), row.id);
  const carrier = { item_sha256: itemFileSha,
    contract_sha256: hashValue(contract), manifest_sha256: hashValue(row.manifest_entry) };
  return { guard_sha256: itemHashGuard(text), judge_sha256: itemHashJudge(text),
    item_file_sha256: itemFileSha, manifest_sha256: carrier.manifest_sha256,
    contract_sha256: carrier.contract_sha256, step5_subject_sha256: hashValue(carrier) };
}

// Rebuilt Step 7 binds new-item authorship directly into its centralized
// certificate. This survives later serialized edits to a shared manifest or
// contract and avoids inferring per-item provenance from shared-file mtimes.
function step7V2Creation(root, run, id, row, { requireCurrent = false } = {}) {
  const path = join(root, 'research', `${run}-step7-v2`, 'certification.json');
  if (!existsSync(path)) return null;
  const certificate = read(path), { sha256, ...payload } = certificate;
  if (certificate.version !== 2 || certificate.run !== run
    || sha256 !== sha(JSON.stringify(payload))
    || !Array.isArray(certificate.creations) || !Array.isArray(certificate.items)) return null;
  const creation = certificate.creations.find(value => value.id === id);
  const item = certificate.items.find(value => value.id === id);
  if (!creation || !item || creation.home_page !== row.page
    || String(creation.batch) !== String(row.batch)
    || typeof creation.author_result !== 'string') return null;
  if (requireCurrent) {
    const text = readFileSync(join(root, 'items', `${safe(id, 'item ID')}.md`), 'utf8');
    if (item.guard_sha256 !== itemHashGuard(text)) return null;
  }
  const resultPath = join(root, 'research', `${run}-dispatch`, creation.author_result);
  if (!existsSync(resultPath)) return null;
  const result = { ...read(resultPath), result_file: creation.author_result };
  const evidenceHash = certificate.evidence?.[resultPath]
    ?? certificate.evidence?.[`research/${run}-dispatch/${creation.author_result}`];
  if (result.run !== run || !authorResultAllowed(7, result)
    || evidenceHash !== sha(readFileSync(resultPath, 'utf8'))) return null;
  return result;
}

// Step 3 checks currency with its transitive item/scope hash implementation;
// share the same immutable-origin and surviving dispatch-link validation.
export const loadStep3AuditorProvenance = (root, run) => provenanceRows(root, run, 3);

const matchesCarriers = (certificate, row, hashes) => certificate?.page === row.page
  && String(certificate.batch) === row.batch
  // Raw bytes and the old Step-5 composite remain historical audit evidence.
  // Judge add/remove is the sole normalization; other verification fields,
  // mathematical bytes, manifest entries and contracts must still match.
  && ['judge_sha256', 'manifest_sha256', 'contract_sha256']
    .every(key => certificate[key] === hashes[key])
  && typeof certificate.guard_sha256 === 'string' && /^[a-f0-9]{64}$/.test(certificate.guard_sha256)
  && /^[a-f0-9]{64}$/.test(certificate.item_file_sha256 ?? '')
  && certificate.step5_subject_sha256 === hashValue({ item_sha256: certificate.item_file_sha256,
    manifest_sha256: certificate.manifest_sha256, contract_sha256: certificate.contract_sha256 });

// Every consumer uses this reader. Resolve later superseding evidence before
// checking currency, so a valid Step-8 refresh can carry a now-stale Step-7 row.
// A stale latest row is an error, never a reason to silently schedule self-review.
export function loadAuditorCreatedCertifications(paths, options = {}) {
  const selected = new Map();
  const provenance = new Map();
  let root = options.root, run = options.run;
  for (const path of (Array.isArray(paths) ? paths : [paths])) {
    if (!path || !existsSync(path)) continue;
    const receipt = read(path);
    certificationRows(receipt, path);
    root ??= resolve(dirname(path), '..');
    run ??= receipt.run;
    if (receipt.run !== run) throw Error(`Invalid auditor-created certification run: ${path}`);
    if (options.steps && !options.steps.includes(receipt.step)) continue;
    // Read the supplied document, but only at its engine-owned canonical path.
    if (resolve(path) !== resolve(auditorCreatedCertificationsPath(root, run, receipt.step)))
      throw Error(`Invalid auditor-created certification path: ${path}`);
    for (const row of provenanceRows(root, run, receipt.step, provenance)) {
      if (!selected.has(row.id) || selected.get(row.id).step < row.step) selected.set(row.id, row);
    }
  }
  if (!selected.size) return [];
  const current = new Map(inventory(root, run).map(row => [row.id, row]));
  for (const row of selected.values()) {
    const live = current.get(row.id);
    if (!live || !matchesCarriers(row, live, carrierHashes(root, run, live)))
      throw Error(`${row.id}: stale Step ${row.step} auditor-created certification carriers`);
  }
  return [...selected.values()];
}

export function certifyAuditorCreatedItems(root, run, step) {
  step = Number(step);
  const baselinePath = auditorCreatedBaselinePath(root, run, step);
  if (!existsSync(baselinePath)) throw Error(`Missing Step ${step} auditor baseline: ${baselinePath}`);
  const baseline = read(baselinePath);
  if (baseline?.version !== 1 || baseline?.run !== run || baseline?.step !== step
    || baseline?.policy !== BASELINE_POLICY
    || !Array.isArray(baseline.items) || !Array.isArray(baseline.existing_item_files))
    throw Error(`Invalid Step ${step} auditor baseline`);
  const original = new Set(baseline.items.map(row => row.id));
  const preexisting = new Set(baseline.existing_item_files);
  const results = successfulAuthorResults(root, run, step);
  const earlier = new Map();
  const provenance = new Map();
  for (const priorStep of [3, 5, 7].filter(value => value < step)) {
    for (const row of provenanceRows(root, run, priorStep, provenance)) earlier.set(row.id, row);
  }
  const additions = inventory(root, run).filter(row => !original.has(row.id) || earlier.has(row.id));
  let priorById = new Map();
  const certificationPath = auditorCreatedCertificationsPath(root, run, step);
  if (existsSync(certificationPath)) {
    try {
      const prior = read(certificationPath);
      if (prior.run === run && prior.baseline_sha256 === sha(JSON.stringify(baseline))) {
        priorById = new Map(provenanceRows(root, run, step, provenance)
          .map(row => [row.id, row]));
      }
    } catch { /* rewritten below after complete validation */ }
  }
  const certified = [];
  for (const row of additions) {
    const { id, batch } = row;
    const carried = earlier.get(id);
    if (preexisting.has(id) && !carried) throw Error(`${id}: existed on disk before Step ${step} and is not auditor-created`);
    const itemPath = join(root, 'items', `${safe(id, 'item ID')}.md`);
    const manifestPath = join(root, 'research', `${run}-batch-${batch}.pages.json`);
    const contractPath = join(root, 'research', `${run}-batch-${batch}.proof-contracts.json`);
    if (!existsSync(itemPath)) throw Error(`${id}: auditor-created manifest item has no authored item file`);
    const hashes = carrierHashes(root, run, row);
    const bootstrapEvidence = step === 5
      ? ownerEvidenceTextForCurrentCarriers(root, run, step, id, hashes) : '';
    const prior = priorById.get(id);
    const priorCurrent = prior && matchesCarriers(prior, row, hashes);
    if (carried) {
      // Only the exact current-stage boundary proves a candidate-specific
      // delta in this stage. Older receipts (including Step-3 transitive
      // hashes) cannot reconstruct missing per-item boundary snapshots.
      // Never invent that missing snapshot or promote from a sibling's mtime.
      const before = baseline.item_carriers?.[id];
      if (!before || matchesCarriers(before, row, hashes)) continue;
    }
    const creation = step === 5 && !carried ? ownerCreation(root, run, id) : null;
    if (creation) {
      if (row.page !== creation.receipt.page || row.batch !== String(creation.receipt.batch))
        throw Error(`${id}: owner creation home and batch cannot be changed by recertification`);
      const currentCreation = row.page === creation.receipt.page
        && row.batch === String(creation.receipt.batch)
        && CARRIER_KEYS.every(key => hashes[key] === creation.receipt.carriers[key]);
      const owner = !currentCreation && !priorCurrent
        ? ownerRecertification(root, run, step, id, hashes, undefined) : null;
      if (!currentCreation && !priorCurrent && !owner)
        throw Error(`${id}: stale owner creation carriers; explicit owner recertification required`);
      if (priorCurrent) for (const key of Object.keys(hashes)) hashes[key] = prior[key];
      certified.push({ id, page: row.page, batch, ...hashes,
        evidence_class: 'owner-spawned-creation', owner_creation: creation.marker,
        ...((priorCurrent && prior.owner_recertification) || owner
          ? { owner_recertification: priorCurrent ? prior.owner_recertification : owner } : {}) });
      continue;
    }
    const v2Author = step === 7 ? step7V2Creation(root, run, id, row, { requireCurrent: true }) : null;
    const covering = priorCurrent || v2Author ? null : coveringResult(results, itemPath, manifestPath, contractPath, batch);
    const bootstrap = !priorCurrent && !covering && !prior && carried
      ? step === 5 ? bootstrapStep5Author(root, run, id, row, hashes, bootstrapEvidence)
        : step === 7 ? bootstrapStep7Author(root, run, id, row, hashes) : null
      : null;
    const authorResult = prior?.author_result ?? bootstrap?.result_file;
    const owner = !priorCurrent && !covering && authorResult
      ? ownerRecertification(root, run, step, id, hashes, authorResult,
        bootstrap?.basis ?? null) : null;
    const author = priorCurrent ? { result_file: prior.author_result }
      : v2Author ?? covering ?? (owner ? { result_file: authorResult } : null);
    if (!author) throw Error(`${id}: no successful Step ${step} auditor/adjudicator dispatch authored its current carriers`);
    const originStep = carried?.origin_step ?? carried?.step;
    if (priorCurrent) for (const key of Object.keys(hashes)) hashes[key] = prior[key];
    certified.push({ id, page: row.page, batch,
      ...hashes,
      author_result: author.result_file,
      ...((priorCurrent && prior.owner_recertification) || owner
        ? { owner_recertification: priorCurrent ? prior.owner_recertification : owner } : {}),
      ...(carried ? { origin_step: originStep,
        origin_baseline_sha256: sha(JSON.stringify(stageBaseline(root, run, originStep))) } : {}),
    });
  }
  const receipt = {
    version: 1, run, step, policy: CERTIFICATION_POLICY,
    baseline_sha256: sha(JSON.stringify(baseline)), at: new Date().toISOString(),
    items: certified.sort((a, b) => a.id.localeCompare(b.id)),
  };
  writeFileSync(auditorCreatedCertificationsPath(root, run, step), `${JSON.stringify(receipt, null, 2)}\n`);
  return receipt;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2), command = args[0];
    const value = flag => { const at = args.indexOf(flag); return at < 0 ? undefined : args[at + 1]; };
    const run = value('--run'), step = Number(value('--step'));
    const usage = 'Usage: auditor-created-items.mjs baseline|certify --run RUN --step 5|7|8; owner-create --run RUN --step 5 --id ITEM --evidence research/JSON; owner-recertify --run RUN --step 5|7|8 --id ITEM --evidence research/FILE --reason TEXT';
    if (!run || ![5, 7, 8].includes(step)) throw Error(usage);
    const result = command === 'baseline'
      ? writeAuditorCreatedBaseline(process.cwd(), run, step)
      : command === 'certify' ? certifyAuditorCreatedItems(process.cwd(), run, step)
        : command === 'owner-create'
          ? recordOwnerCreation(process.cwd(), run, step, value('--id'), value('--evidence'))
        : command === 'owner-recertify'
          ? recordOwnerRecertification(process.cwd(), run, step, value('--id'), value('--evidence'), value('--reason'))
          : null;
    if (!result) throw Error(usage);
    if (['owner-recertify', 'owner-create'].includes(command)) console.log(`step${step}-${command === 'owner-create' ? 'owner-creation' : 'owner-recertification'}: ${result.path} ${result.reused ? 'reused' : 'recorded'}`);
    else console.log(`step${step}-auditor-${command === 'baseline' ? 'baseline' : 'certifications'}: ${result.items.length ?? result.items} item(s) ${result.reused ? 'reused' : command === 'baseline' ? 'recorded' : 'certified'}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
