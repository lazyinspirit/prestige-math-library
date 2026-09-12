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

export const auditorCreatedBaselinePath = (root, run, step) =>
  join(root, 'research', `${safe(run, 'run')}-step${safe(String(step), 'step')}-auditor-baseline.json`);
export const auditorCreatedCertificationsPath = (root, run, step) =>
  join(root, 'research', `${safe(run, 'run')}-step${safe(String(step), 'step')}-auditor-certifications.json`);

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
  if (Number(step) === 3) return row.role === 'alpha-high' && /^step3b-[a-z]-[a-f0-9]{16}$/.test(label);
  if (Number(step) === 5) return row.role === 'alpha'
    && /^(?:5a-[a-z]|5b-lead|gate-batch-[1-9]\d*-(?:[a-z]|all)|5a-gate-risk-report-[1-9]\d*-(?:[a-z]|unowned)|5[ab]-(?:gate|edge)-[a-z0-9]+(?:-[a-z0-9]+)*-[1-9]\d*)$/.test(label);
  if (Number(step) === 7) return (row.role === 'final-adjudicator'
    && /^step7-fa-[a-z]-round-[1-9]\d*$/.test(label))
    || (row.role === 'alpha-adjudicate'
      && /^(?:step7-[a-z]|step7-guard-(?:[a-z]|review)-round-[1-9]\d*|step7-preflight-(?:[a-z]|review)-[1-9]\d*|repair-8-(?:[a-z]-)?round-[1-9]\d*|cross-group-[a-z]-round-[1-9]\d*|adjudicate-closure-recovery-(?:[a-z]-)?[1-9]\d*)$/.test(label));
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
    if (!authors.some(author => {
      const started = Date.parse(author.started_at), ended = Date.parse(author.ended_at);
      const covers = author.covers.map(String);
      return Number.isFinite(started) && Number.isFinite(ended) && started <= ended
        && (step === 3 ? author.label === row.author_result && author.result_file.startsWith('alpha-high-')
          && covers.includes(String(row.batch)) : author.result_file === row.author_result
          && (!covers.length || covers.includes('all') || covers.includes(String(row.batch))));
    })) throw Error(`${row.id}: missing successful Step ${step} author-result provenance`);
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
    const author = priorCurrent ? { result_file: prior.author_result }
      : coveringResult(results, itemPath, manifestPath, contractPath, batch);
    if (!author) throw Error(`${id}: no successful Step ${step} auditor/adjudicator dispatch authored its current carriers`);
    const originStep = carried?.origin_step ?? carried?.step;
    if (priorCurrent) for (const key of Object.keys(hashes)) hashes[key] = prior[key];
    certified.push({ id, page: row.page, batch,
      ...hashes,
      author_result: author.result_file,
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
    if (!run || ![5, 7, 8].includes(step))
      throw Error('Usage: auditor-created-items.mjs baseline|certify --run RUN --step 5|7|8');
    const result = command === 'baseline'
      ? writeAuditorCreatedBaseline(process.cwd(), run, step)
      : command === 'certify' ? certifyAuditorCreatedItems(process.cwd(), run, step) : null;
    if (!result) throw Error('Usage: auditor-created-items.mjs baseline|certify --run RUN --step 5|7|8');
    console.log(`step${step}-auditor-${command === 'baseline' ? 'baseline' : 'certifications'}: ${result.items.length ?? result.items} item(s) ${result.reused ? 'reused' : command === 'baseline' ? 'recorded' : 'certified'}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
