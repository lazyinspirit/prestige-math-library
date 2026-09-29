#!/usr/bin/env node
// Certify items genuinely created and authored by an auditor/adjudicator.
//
// This is deliberately a distinct evidence class. It never writes a review,
// adjudication, or judge-ledger row. A certification is available only for an
// id absent from both the immutable stage baseline and the item filesystem at
// that boundary, and remains current only while its hash-bound carriers match.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { split, yaml } from './pathway-lib.mjs';

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

function ownerRecertification(root, run, step, id, hashes, authorResult, basis = null) {
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
    ? bootstrapStep5Author(root, run, id, liveRow, hashes, evidenceText) : null;
  if (receipt.version !== 1 || receipt.policy !== OWNER_RECERTIFICATION_POLICY
    || receipt.run !== run || receipt.step !== Number(step) || receipt.id !== id
    || receipt.owner !== true || receipt.author_result !== authorResult
    || (basis && receipt.basis !== basis)
    || (receipt.basis !== undefined && !(step === 5
      ? ['initial-step5-contract-only', 'initial-step5-item-repair',
        'initial-step5-source-metadata-repair', 'initial-step5-dependency-repair'].includes(receipt.basis)
      : step === 7 && ['initial-step7-item-repair',
        'initial-step7-contract-only'].includes(receipt.basis)))
    || (step === 5 && receipt.basis !== undefined
      && (!step5Bootstrap || step5Bootstrap.basis !== receipt.basis
        || step5Bootstrap.result_file !== receipt.author_result))
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
function bootstrapStep5Author(root, run, id, row, hashes, evidenceText = '') {
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
    ? step5ManifestRepairBasis(root, run, id, row, hashes, before, evidenceText) : null;
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

// A manifest hash delta is eligible only when the reviewer supplies both full
// canonical projections. The baseline projection must hash to the immutable
// Step-5 carrier snapshot, and the current projection must equal the live row.
// The only admitted row deltas are source-reference URL/locator corrections or
// strictly additive dependency declarations; both must mirror item frontmatter.
function step5ManifestRepairBasis(root, run, id, row, hashes, before, evidenceText) {
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
  const authorResult = prior?.author_result ?? bootstrap?.result_file;
  if (!authorResult) throw Error(`${id}: no prior auditor-created certification to recertify or eligible Step ${step} owner bootstrap`);
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
    author_result: authorResult,
    ...(bootstrap ? { basis: bootstrap.basis } : {}),
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
    && /^(?:5a-[a-z]|5b-lead|gate-batch-[1-9]\d*-(?:[a-z]|all)|5a-gate-risk-report-[1-9]\d*-(?:[a-z]|unowned)|5[ab]-(?:gate|edge)-[a-z0-9]+(?:-[a-z0-9]+)*-[1-9]\d*)$/.test(label);
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
    if (ids.has(row.id) || !row.author_result || !row.page || !row.batch
      || (step === 3 && (!/^[a-f0-9]{64}$/.test(row.sha256 ?? '') || !Array.isArray(row.dependencies))))
      throw Error(`Invalid auditor-created item provenance: ${row.id}`);
    ids.add(row.id);
    // Receipts are engine-owned records of the historical write-window check;
    // their author link must still resolve to genuine dispatch evidence. Do not
    // compare current mtimes here: an unchanged V2 receipt survives file touches.
    const v2Author = step === 7 ? step7V2Creation(root, run, row.id, row) : null;
    if (!authors.some(author => {
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
      const ownerPath = join(root, 'research', `${run}-step3b-owner-${safe(row.id, 'item ID')}.json`);
      if (!/^[a-f0-9]{64}$/.test(marker?.sha256 ?? '') || !existsSync(ownerPath))
        throw Error(`${row.id}: missing owner recertification provenance`);
      const owner = read(ownerPath);
      if (sha(JSON.stringify(owner)) !== marker.sha256 || owner.at !== marker.at
        || owner.version !== 1 || owner.run !== run || owner.phase !== 'item'
        || owner.target !== row.id || owner.owner !== true || owner.decision !== 'repaired'
        || owner.sha256 !== row.sha256 || !Array.isArray(owner.dependencies)
        || JSON.stringify(owner.dependencies) !== JSON.stringify(row.dependencies)
        || !String(owner.reason ?? '').trim())
        throw Error(`${row.id}: invalid owner recertification provenance`);
    }
    if (step !== 3 && row.owner_recertification !== undefined) {
      const marker = ownerRecertification(root, run, step, row.id, row, row.author_result);
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
    const usage = 'Usage: auditor-created-items.mjs baseline|certify --run RUN --step 5|7|8; owner-recertify --run RUN --step 5|7|8 --id ITEM --evidence research/FILE --reason TEXT';
    if (!run || ![5, 7, 8].includes(step)) throw Error(usage);
    const result = command === 'baseline'
      ? writeAuditorCreatedBaseline(process.cwd(), run, step)
      : command === 'certify' ? certifyAuditorCreatedItems(process.cwd(), run, step)
        : command === 'owner-recertify'
          ? recordOwnerRecertification(process.cwd(), run, step, value('--id'), value('--evidence'), value('--reason'))
          : null;
    if (!result) throw Error(usage);
    if (command === 'owner-recertify') console.log(`step${step}-owner-recertification: ${result.path} ${result.reused ? 'reused' : 'recorded'}`);
    else console.log(`step${step}-auditor-${command === 'baseline' ? 'baseline' : 'certifications'}: ${result.items.length ?? result.items} item(s) ${result.reused ? 'reused' : command === 'baseline' ? 'recorded' : 'certified'}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
