#!/usr/bin/env node
// Owner-spawned origin is distinct from native authoring and mathematical audit.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { itemHash, loadStep3, isMinimalItemReceipt } from '/home/lazyinspirit/Projects/prestige-math-library/tools/step3-decisions.mjs';
import { frontmatterList } from '/home/lazyinspirit/Projects/prestige-math-library/tools/frontmatter-list.mjs';

export const STEP3_OWNER_CREATION_POLICY = 'owner-spawned-step3-creation-v1';
const safe = value => {
  if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid run or item ID');
  return value;
};
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const json = path => JSON.parse(readFileSync(path, 'utf8'));
const hash = value => sha(JSON.stringify(value));
const isHash = value => /^[a-f0-9]{64}$/.test(value ?? '');
const baselinePath = (root, run) => join(root, 'research', `${safe(run)}-step3-auditor-baseline.json`);
export const step3OwnerCreationPath = (root, run, id) => join(root, 'research',
  `${safe(run)}-step3-owner-creation-${safe(id)}.json`);
const researchFile = (root, path) => {
  if (typeof path !== 'string' || !path.startsWith('research/')) throw Error('Owner creation evidence must be a research path');
  const file = resolve(root, path);
  if (!existsSync(file) || !realpathSync(file).startsWith(realpathSync(join(root, 'research')) + sep))
    throw Error('Owner creation evidence must resolve inside research');
  return file;
};
function baselineFor(root, run) {
  const bytes = readFileSync(baselinePath(root, run)), baseline = JSON.parse(bytes.toString());
  if (baseline.version !== 1 || baseline.run !== run || baseline.policy !== 'auditor-authored-step3-bypass-v1'
    || !Array.isArray(baseline.items) || !Array.isArray(baseline.existing_item_files)
    || !Array.isArray(baseline.scopes) || !Number.isFinite(Date.parse(baseline.at)))
    throw Error('Invalid immutable Step 3 baseline');
  return { baseline, baseline_sha256: hash(baseline), baseline_file_sha256: sha(bytes) };
}
export function step3OwnerCreationClaim(s, id) {
  const live = s.items.get(id);
  if (!live) throw Error(`${id}: missing current manifest identity`);
  const text = readFileSync(join(s.root, 'items', `${safe(id)}.md`), 'utf8');
  const claim = { ...Object.fromEntries(['id', 'kind', 'title', 'statement'].map(key => [key, live.item[key] ?? null])),
    source_claim: text.split(/^## /m).filter(section => /^(Statement|Definition)\b/.test(section)).map(section => section.trim()) };
  return { page: live.page.id, batch: String(live.page.batch), claim_sha256: hash(claim),
    item_file_sha256: sha(text) };
}
function validate(root, run, id, receipt, s, historicalClaim = null) {
  const boundary = baselineFor(root, run), { baseline } = boundary;
  const at = Date.parse(receipt?.attested_at), baselineAt = Date.parse(baseline.at);
  const timeline = receipt?.author?.timeline;
  const known = timeline?.mode === 'known' && Number.isFinite(Date.parse(timeline.started_at))
    && Date.parse(timeline.started_at) >= baselineAt && Date.parse(timeline.ended_at) >= Date.parse(timeline.started_at)
    && Date.parse(timeline.ended_at) <= at;
  const unknown = timeline?.mode === 'unknown' && timeline.after_baseline === true
    && timeline.started_at === undefined && timeline.ended_at === undefined && !!String(timeline.reason ?? '').trim();
  const allowed = ['version', 'policy', 'evidence_class', 'run', 'step', 'id', 'owner', 'owner_identity',
    'author', 'attested_at', 'reason', 'owner_held_escalation', 'baseline_sha256', 'baseline_file_sha256',
    'page', 'batch', 'claim_sha256', 'item_file_sha256', 'sources'];
  if (!receipt || Object.keys(receipt).some(key => !allowed.includes(key))
    || receipt.version !== 1 || receipt.policy !== STEP3_OWNER_CREATION_POLICY || receipt.evidence_class !== 'owner-spawned-creation'
    || receipt.run !== run || receipt.step !== 3 || receipt.id !== id || receipt.owner !== true
    || Object.keys(receipt.author ?? {}).some(key => !['identity', 'timeline'].includes(key))
    || Object.keys(timeline ?? {}).some(key => !(timeline?.mode === 'known'
      ? ['mode', 'started_at', 'ended_at'] : ['mode', 'after_baseline', 'reason']).includes(key))
    || !/^\/root(?:\/[a-zA-Z0-9_-]+)*$/.test(receipt.owner_identity ?? '')
    || !/^\/root\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(receipt.author?.identity ?? '')
    || receipt.author.identity === receipt.owner_identity || !Number.isFinite(at) || at < baselineAt
    || (!known && !unknown) || !String(receipt.reason ?? '').trim() || !String(receipt.owner_held_escalation ?? '').trim()
    || receipt.baseline_sha256 !== boundary.baseline_sha256 || receipt.baseline_file_sha256 !== boundary.baseline_file_sha256
    || baseline.items.some(row => row.id === id) || baseline.existing_item_files.includes(id)
    || !isHash(receipt.claim_sha256) || !isHash(receipt.item_file_sha256) || !Array.isArray(receipt.sources))
    throw Error(`${id}: invalid owner creation attestation or immutable baseline binding`);
  const claim = historicalClaim ?? step3OwnerCreationClaim(s, id);
  if (claim.page !== receipt.page || claim.batch !== receipt.batch || claim.claim_sha256 !== receipt.claim_sha256)
    throw Error(`${id}: stale owner creation claim identity`);
  const texts = new Map();
  for (const source of receipt.sources) {
    if (!source || Object.keys(source).some(key => !['role', 'path', 'sha256'].includes(key))
      || !['assignment', 'authorship', 'escalation'].includes(source.role) || !isHash(source.sha256))
      throw Error(`${id}: invalid owner creation source`);
    const file = researchFile(root, source.path);
    if (file === resolve(step3OwnerCreationPath(root, run, id))) throw Error('Creation receipt cannot attest its own origin');
    const bytes = readFileSync(file);
    if (sha(bytes) !== source.sha256) throw Error(`${id}: stale owner creation source`);
    texts.set(source.role, `${texts.get(source.role) ?? ''}\n${bytes.toString()}`);
  }
  const binds = (role, values) => values.every(value => texts.get(role)?.includes(value));
  if (!binds('assignment', [run, id, receipt.owner_identity, receipt.author.identity])
    || !binds('authorship', [run, id, receipt.author.identity, receipt.claim_sha256, receipt.item_file_sha256])
    || !binds('escalation', [run, receipt.owner_held_escalation]))
    throw Error(`${id}: incomplete owner creation assignment/authorship/escalation evidence`);
  return receipt;
}
export function loadStep3OwnerCreation(root, run, id, s = loadStep3(root, run)) {
  const path = step3OwnerCreationPath(root, run, id);
  if (!existsSync(path)) return null;
  const origin = json(path), current = step3OwnerCreationClaim(s, id);
  if (current.page === origin.page && current.batch === origin.batch
    && current.claim_sha256 === origin.claim_sha256) {
    if (resolutionFiles(root, run, id).length)
      throw Error(`${id}: claim reverted to the original after resolution; owner recovery required`);
    return validate(root, run, id, origin, s);
  }
  const resolution = loadStep3OwnerClaimResolution(root, run, id, s);
  if (!resolution) throw Error(`${id}: stale owner creation claim identity`);
  // Resolution validates the archived original origin and a separate current
  // owner-held claim repair. Never return a rewritten creation attestation.
  return origin;
}
export function recordStep3OwnerCreation(root, run, id, evidence) {
  safe(run); safe(id);
  const s = loadStep3(root, run), inputPath = researchFile(root, evidence);
  if (inputPath === resolve(step3OwnerCreationPath(root, run, id))) throw Error('Use original creation evidence, not the registration path');
  const receipt = validate(root, run, id, json(inputPath), s);
  if (step3OwnerCreationClaim(s, id).item_file_sha256 !== receipt.item_file_sha256)
    throw Error(`${id}: owner creation must bind the genuine current authored bytes`);
  const nativePath = join(root, 'research', `${run}-step3-auditor-certifications.json`);
  if (existsSync(nativePath) && json(nativePath).items?.some(row => row.id === id))
    throw Error(`${id}: cannot reclassify an existing native creation certificate`);
  const path = step3OwnerCreationPath(root, run, id);
  if (existsSync(path)) {
    const prior = loadStep3OwnerCreation(root, run, id, s);
    if (JSON.stringify(prior) !== JSON.stringify(receipt)) throw Error(`${id}: refusing to replace owner creation origin`);
    return { path, reused: true };
  }
  writeFileSync(path, `${JSON.stringify(receipt, null, 2)}\n`, { flag: 'wx' });
  return { path, reused: false };
}

// Creation alone cannot exclude an item from native classification. The owner
// must separately examine and accept current inputs through recordStep3.
export function currentStep3OwnerCreationDecision(s, id) {
  const path = join(s.root, 'research', `${s.run}-step3b-owner-${safe(id)}.json`);
  if (!existsSync(path)) return false;
  const row = json(path), live = s.items.get(id), deps = row.dependencies;
  if (isMinimalItemReceipt(row)) return row.run === s.run && row.target === id
    && row.owner === true && row.decision === 'repaired' && row.sha256 === itemHash(s, id);
  const text = readFileSync(join(s.root, 'items', `${safe(id)}.md`), 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)?.[1] ?? '';
  const declared = [...(live?.item.deps ?? []), ...(live?.item.justified_by ?? []), ...(live?.item.forward_refs ?? []),
    ...['deps', 'justified_by', 'forward_refs'].flatMap(key => frontmatterList(fm, key))];
  return row.version === 1 && row.run === s.run && row.phase === 'item' && row.target === id
    && row.owner === true && row.decision === 'repaired' && !!String(row.reason ?? '').trim()
    && Number.isFinite(Date.parse(row.at)) && Array.isArray(deps) && deps.every(value => typeof value === 'string')
    && JSON.stringify(deps) === JSON.stringify([...new Set(deps)].sort()) && declared.every(id => deps.includes(id))
    && row.sha256 === itemHash(s, id, deps);
}

// Proposed additions to tools/step3-owner-creation.mjs. Root integrates this
// native guarded resolution; these functions never replace the origin.
export const STEP3_OWNER_CLAIM_RESOLUTION_POLICY = 'owner-held-step3-creation-claim-resolution-v1';
const RESOLUTION_EVIDENCE_POLICY = 'owner-held-step3-creation-claim-resolution-evidence-v1';
const markerKeys = ['path', 'sha256'];
const strictKeys = (value, keys, what) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)
    || Object.keys(value).length !== keys.length || keys.some(key => !Object.hasOwn(value, key)))
    throw Error(`Invalid ${what}`);
};
const readMarker = (root, marker) => {
  strictKeys(marker, markerKeys, 'resolution source marker');
  if (!isHash(marker.sha256)) throw Error('Invalid resolution source hash');
  const file = researchFile(root, marker.path), bytes = readFileSync(file);
  if (sha(bytes) !== marker.sha256) throw Error(`Stale resolution source: ${marker.path}`);
  return { file, bytes };
};
const sourceClaim = text => text.split(/^## /m)
  .filter(section => /^(Statement|Definition)\b/.test(section)).map(section => section.trim());
function archiveClaim(root, id, page, batch, itemMarker, manifestMarker) {
  const item = readMarker(root, itemMarker).bytes.toString();
  const manifest = JSON.parse(readMarker(root, manifestMarker).bytes.toString());
  let entry;
  if (Array.isArray(manifest)) {
    const pages = manifest.filter(row => row?.id === page);
    const entries = pages.flatMap(row => row.items ?? []).filter(row => row?.id === id);
    if (pages.length !== 1 || entries.length !== 1
      || !manifestMarker.path.includes(`-batch-${batch}.`))
      throw Error(`${id}: ambiguous original manifest/home/batch`);
    entry = entries[0];
  } else {
    strictKeys(manifest, ['page', 'batch', 'item'], 'resolved claim archive');
    if (manifest.page !== page || manifest.batch !== batch || manifest.item?.id !== id)
      throw Error(`${id}: resolution archive changed item/home/batch`);
    entry = manifest.item;
  }
  const claim = { ...Object.fromEntries(['id', 'kind', 'title', 'statement']
    .map(key => [key, entry[key] ?? null])), source_claim: sourceClaim(item) };
  return { page, batch, claim_sha256: hash(claim), item_file_sha256: sha(item), claim };
}
const resolutionStem = (run, id) => `${safe(run)}-step3-owner-claim-resolution-${safe(id)}-`;
const resolutionFiles = (root, run, id) => readdirSync(join(root, 'research'))
  .filter(file => file.startsWith(resolutionStem(run, id))
    && /^[a-f0-9]{64}\.json$/.test(file.slice(resolutionStem(run, id).length)));
const resolutionPath = (root, run, id, claimHash) => {
  if (!isHash(claimHash)) throw Error('Invalid resolved claim hash');
  return join(root, 'research', `${resolutionStem(run, id)}${claimHash}.json`);
};
const marker = (root, path) => ({ path: path.slice(root.length + 1), sha256: sha(readFileSync(path)) });
function acceptedSubject(root, run, id, rawHash, reviewMarker) {
  const review = JSON.parse(readMarker(root, reviewMarker).bytes.toString());
  if (review.run !== run || !/^\/root\/[a-zA-Z0-9_/-]+$/.test(review.reviewer ?? ''))
    throw Error(`${id}: missing actual mathematical lead review`);
  const direct = review.current_subject_decisions?.filter(row => row.id === id) ?? [];
  const retained = review.original_subjects?.filter(row => row.id === id) ?? [];
  const expanded = review.expanded_current_whole_accepted_subjects?.filter(row => row.id === id) ?? [];
  const rows = [...direct, ...retained, ...expanded];
  // A current subject and the historical/current-preservation view may both
  // occur in a real lead packet. Require one row per view and exact agreement;
  // a conflicting hold, source hash or ineligible decision is never ignored.
  if (!rows.length || [direct, retained, expanded].some(view => view.length > 1)
    || rows.some(row => row.current_raw_sha256 !== rawHash || row.mathematical_hold === true
      || row.decision_eligible === false))
    throw Error(`${id}: review does not bind exact accepted current source`);
  if (direct.length && (direct[0].verdict !== 'SUFFICIENT_WHOLE_ACTUAL_SUPPLIER_AND_CONSUMER'
    || direct[0].decision_eligible !== true)) throw Error(`${id}: whole-current mathematical acceptance required`);
  if (retained.length && (retained[0].preserved_disposition !== 'SUFFICIENT_WHOLE_ACTUAL_REVIEW_CURRENT_INPUTS_BOUND'
    || retained[0].mathematical_hold !== false)) throw Error(`${id}: whole-current mathematical acceptance required`);
  if (direct.length || retained.length) return;
  const row = expanded[0];
  if (row?.mathematical_hold === false && row.retained_whole_actual_review_packet) {
    const prior = row.retained_whole_actual_review_packet;
    strictKeys(prior, ['path', 'raw_sha256'], 'retained review marker');
    return acceptedSubject(root, run, id, rawHash, { path: prior.path, sha256: prior.raw_sha256 });
  }
  throw Error(`${id}: whole-current mathematical acceptance required`);
}
function consumerGraph(root) {
  const graph = new Map();
  for (const file of readdirSync(join(root, 'items')).filter(name => name.endsWith('.md'))) {
    const text = readFileSync(join(root, 'items', file), 'utf8');
    const fm = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)?.[1] ?? '';
    const targets = new Set(['deps', 'justified_by', 'forward_refs']
      .flatMap(key => frontmatterList(fm, key)));
    for (const link of text.matchAll(/\[\[([a-zA-Z0-9_-]+)(?:\|[^\]]*)?\]\]/g)) targets.add(link[1]);
    graph.set(file.slice(0, -3), targets);
  }
  return graph;
}
function requireConsumers(root, id, rows) {
  if (!Array.isArray(rows) || new Set(rows.map(row => row.id)).size !== rows.length)
    throw Error(`${id}: invalid affected-consumer guards`);
  const graph = consumerGraph(root), direct = [...graph].filter(([, targets]) => targets.has(id)).map(([key]) => key);
  const reached = new Set(), queue = [...direct];
  while (queue.length) {
    const next = queue.pop(); if (reached.has(next)) continue; reached.add(next);
    queue.push(...[...graph].filter(([, targets]) => targets.has(next)).map(([key]) => key));
  }
  if (direct.some(key => !rows.some(row => row.id === key)))
    throw Error(`${id}: missing actual direct-consumer review`);
  for (const row of rows) {
    strictKeys(row, ['id', 'item_file_sha256', 'review'], 'affected consumer'); safe(row.id);
    if (!reached.has(row.id) || row.id === id || !isHash(row.item_file_sha256)
      || sha(readFileSync(join(root, 'items', `${row.id}.md`))) !== row.item_file_sha256)
      throw Error(`${row.id}: unrelated or stale affected consumer`);
  }
}
function validateResolutionEvidence(root, run, id, evidence, s, origin, { historical = false } = {}) {
  strictKeys(evidence, ['version', 'policy', 'run', 'id', 'owner', 'owner_identity', 'authorization', 'reason',
    'origin', 'original_item', 'original_manifest', 'current_claim_sha256', 'current_item_file_sha256',
    'supplier_review', 'consumers', 'owner_decision', 'previous_resolution'], 'owner claim resolution evidence');
  if (evidence.version !== 1 || evidence.policy !== RESOLUTION_EVIDENCE_POLICY || evidence.run !== run
    || evidence.id !== id || evidence.owner !== true || evidence.owner_identity !== origin.owner_identity
    || evidence.reason?.trim().length < 40) throw Error(`${id}: invalid owner-held claim resolution`);
  const authority = JSON.parse(readMarker(root, evidence.authorization).bytes.toString());
  if (authority.run !== run || authority.authorized_by !== 'owner' || !String(authority.authorization ?? '').trim())
    throw Error(`${id}: explicit run owner authorization required`);
  const originFile = step3OwnerCreationPath(root, run, id);
  if (readMarker(root, evidence.origin).file !== resolve(originFile))
    throw Error(`${id}: resolution detached from immutable origin`);
  const original = archiveClaim(root, id, origin.page, origin.batch, evidence.original_item, evidence.original_manifest);
  if (original.item_file_sha256 !== origin.item_file_sha256 || original.claim_sha256 !== origin.claim_sha256)
    throw Error(`${id}: original authored claim reconstruction mismatch`);
  validate(root, run, id, origin, s, original);
  const current = step3OwnerCreationClaim(s, id);
  if (!historical && (current.page !== origin.page || current.batch !== origin.batch
    || current.claim_sha256 !== evidence.current_claim_sha256 || current.item_file_sha256 !== evidence.current_item_file_sha256
    || current.claim_sha256 === origin.claim_sha256)) throw Error(`${id}: stale or unchanged resolved claim`);
  if (!isHash(evidence.current_claim_sha256) || !isHash(evidence.current_item_file_sha256))
    throw Error(`${id}: invalid accepted repair hashes`);
  acceptedSubject(root, run, id, evidence.current_item_file_sha256, evidence.supplier_review);
  const decision = JSON.parse(readMarker(root, evidence.owner_decision).bytes.toString());
  if (!isMinimalItemReceipt(decision) || decision.run !== run || decision.target !== id
    || !decision.owner || decision.decision !== 'repaired'
    || (!historical && (decision.sha256 !== itemHash(s, id) || !currentStep3OwnerCreationDecision(s, id))))
    throw Error(`${id}: ordinary current owner repaired receipt required`);
  if (!historical) requireConsumers(root, id, evidence.consumers);
  for (const row of evidence.consumers) acceptedSubject(root, run, row.id, row.item_file_sha256, row.review);
  // Historical ordinary receipts and reviewer archives prove resolution history;
  // their currency is not substituted for the separate current-owner check.
  return { original, current };
}
function readResolution(root, run, id, origin, s, path, seen = new Set()) {
  const relative = path.startsWith(resolve(root) + sep) ? path.slice(resolve(root).length + 1) : path;
  const absolute = researchFile(root, relative);
  if (seen.has(absolute)) throw Error(`${id}: cyclic owner claim resolution`); seen.add(absolute);
  const record = json(absolute);
  strictKeys(record, ['version', 'policy', 'run', 'id', 'recorded_at', 'evidence', 'current_item_archive',
    'current_manifest_archive'], 'immutable owner claim resolution record');
  if (record.version !== 1 || record.policy !== STEP3_OWNER_CLAIM_RESOLUTION_POLICY || record.run !== run
    || record.id !== id || !Number.isFinite(Date.parse(record.recorded_at)))
    throw Error(`${id}: invalid owner claim resolution record`);
  const evidence = JSON.parse(readMarker(root, record.evidence).bytes.toString());
  const bound = validateResolutionEvidence(root, run, id, evidence, s, origin, { historical: true });
  const resolved = archiveClaim(root, id, origin.page, origin.batch, record.current_item_archive, record.current_manifest_archive);
  if (resolved.claim_sha256 !== evidence.current_claim_sha256 || resolved.item_file_sha256 !== evidence.current_item_file_sha256
    || resolved.claim.id !== bound.original.claim.id || resolved.claim.kind !== bound.original.claim.kind
    || resolved.claim.title !== bound.original.claim.title
    || absolute !== resolutionPath(root, run, id, resolved.claim_sha256))
    throw Error(`${id}: claim resolution changed identity or archive`);
  if (evidence.previous_resolution !== null) {
    const previous = readMarker(root, evidence.previous_resolution);
    const prior = readResolution(root, run, id, origin, s, previous.file, seen);
    if (Date.parse(prior.recorded_at) > Date.parse(record.recorded_at)
      || prior.resolved.claim_sha256 === resolved.claim_sha256)
      throw Error(`${id}: invalid claim resolution predecessor`);
  }
  return { ...record, evidence_fields: evidence, resolved };
}
export function loadStep3OwnerClaimResolution(root, run, id, s = loadStep3(root, run)) {
  const originFile = step3OwnerCreationPath(root, run, id);
  if (!existsSync(originFile)) return null;
  const origin = json(originFile), current = step3OwnerCreationClaim(s, id);
  const path = resolutionPath(root, run, id, current.claim_sha256);
  if (!existsSync(path)) return null;
  const chain = new Set();
  const result = readResolution(root, run, id, origin, s, path, chain);
  if (resolutionFiles(root, run, id).some(file => !chain.has(join(root, 'research', file))))
    throw Error(`${id}: current claim is not the complete immutable resolution-chain tip`);
  if (current.page !== origin.page || current.batch !== origin.batch
    || !currentStep3OwnerCreationDecision(s, id))
    throw Error(`${id}: resolution requires unchanged home and ordinary current repaired bookkeeping`);
  return result;
}
export function checkStep3OwnerClaimResolution(root, run, id, evidencePath) {
  safe(run); safe(id);
  const s = loadStep3(root, run), origin = json(step3OwnerCreationPath(root, run, id));
  const evidence = json(researchFile(root, evidencePath));
  const bound = validateResolutionEvidence(root, run, id, evidence, s, origin);
  if (bound.current.page !== origin.page || bound.current.batch !== origin.batch
    || s.items.get(id).item.kind !== bound.original.claim.kind
    || s.items.get(id).item.title !== bound.original.claim.title)
    throw Error(`${id}: owner claim resolution cannot change item kind/title/home`);
  return { run, id, original_claim_sha256: bound.original.claim_sha256,
    resolved_claim_sha256: bound.current.claim_sha256, current_item_file_sha256: bound.current.item_file_sha256,
    affected_consumers: evidence.consumers.map(row => row.id), no_writes: true };
}
export function recordStep3OwnerClaimResolution(root, run, id, evidencePath) {
  safe(run); safe(id);
  const s = loadStep3(root, run), origin = json(step3OwnerCreationPath(root, run, id));
  const input = researchFile(root, evidencePath), evidence = json(input);
  const bound = validateResolutionEvidence(root, run, id, evidence, s, origin);
  if (bound.current.page !== origin.page || bound.current.batch !== origin.batch
    || s.items.get(id).item.kind !== bound.original.claim.kind
    || s.items.get(id).item.title !== bound.original.claim.title)
    throw Error(`${id}: owner claim resolution cannot change item kind/title/home`);
  const path = resolutionPath(root, run, id, bound.current.claim_sha256);
  const existing = resolutionFiles(root, run, id);
  if (!existsSync(path) && existing.length) {
    if (evidence.previous_resolution === null) throw Error(`${id}: previous immutable claim resolution required`);
    readResolution(root, run, id, origin, s, readMarker(root, evidence.previous_resolution).file);
    const linked = new Set(); let next = evidence.previous_resolution;
    while (next) {
      const prior = readResolution(root, run, id, origin, s, readMarker(root, next).file);
      linked.add(resolve(root, next.path)); next = prior.evidence_fields.previous_resolution;
    }
    if (existing.some(file => !linked.has(join(root, 'research', file))))
      throw Error(`${id}: refusing a claim resolution branch`);
  } else if (!existing.length && evidence.previous_resolution !== null)
    throw Error(`${id}: first resolution must preserve the original origin without a synthetic predecessor`);
  const archive = (bytes, suffix) => {
    const file = join(root, 'research', `${resolutionStem(run, id)}archive-${sha(bytes)}.${suffix}`);
    if (existsSync(file)) { if (sha(readFileSync(file)) !== sha(bytes)) throw Error('Resolution archive collision'); }
    else writeFileSync(file, bytes, { flag: 'wx', mode: 0o444 });
    return marker(root, file);
  };
  // Freeze all current acceptance sources rather than making original history
  // depend on later rewrites of shared reviewer or owner bookkeeping carriers.
  const frozen = structuredClone(evidence);
  frozen.authorization = archive(readMarker(root, evidence.authorization).bytes, 'json');
  frozen.supplier_review = archive(readMarker(root, evidence.supplier_review).bytes, 'json');
  frozen.owner_decision = archive(readMarker(root, evidence.owner_decision).bytes, 'json');
  frozen.consumers = evidence.consumers.map(row => ({ ...row,
    review: archive(readMarker(root, row.review).bytes, 'json') }));
  const record = { version: 1, policy: STEP3_OWNER_CLAIM_RESOLUTION_POLICY, run, id,
    recorded_at: new Date().toISOString(), evidence: archive(Buffer.from(JSON.stringify(frozen)), 'json'),
    current_item_archive: archive(readFileSync(join(root, 'items', `${id}.md`)), 'md'),
    current_manifest_archive: archive(Buffer.from(JSON.stringify({ page: bound.current.page,
      batch: bound.current.batch, item: Object.fromEntries(['id', 'kind', 'title', 'statement']
        .map(key => [key, s.items.get(id).item[key] ?? null])) })), 'json') };
  if (existsSync(path)) {
    const prior = readResolution(root, run, id, origin, s, path);
    if (prior.evidence.sha256 !== record.evidence.sha256
      || prior.current_item_archive.sha256 !== record.current_item_archive.sha256
      || prior.current_manifest_archive.sha256 !== record.current_manifest_archive.sha256)
      throw Error(`${id}: refusing to replace immutable owner claim resolution`);
    return { path, reused: true };
  }
  // Recheck current own claim and input decision after archive writes.
  const fresh = loadStep3(root, run);
  validateResolutionEvidence(root, run, id, evidence, fresh, origin);
  writeFileSync(path, `${JSON.stringify(record, null, 2)}\n`, { flag: 'wx', mode: 0o444 });
  readResolution(root, run, id, origin, fresh, path);
  return { path, reused: false };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2), get = flag => args[args.indexOf(flag) + 1];
    if (!['register', 'resolve-claim', 'check-claim'].includes(args[0]) || !args.includes('--run') || !args.includes('--id') || !args.includes('--evidence'))
      throw Error('Usage: step3-owner-creation.mjs register|resolve-claim|check-claim --run RUN --id ITEM --evidence research/JSON');
    const result = (args[0] === 'check-claim' ? checkStep3OwnerClaimResolution : args[0] === 'resolve-claim' ? recordStep3OwnerClaimResolution : recordStep3OwnerCreation)(process.cwd(), get('--run'), get('--id'), get('--evidence'));
    console.log(args[0] === 'check-claim' ? JSON.stringify(result) : `step3-owner-creation: ${result.path} ${result.reused ? 'reused' : 'recorded'}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
