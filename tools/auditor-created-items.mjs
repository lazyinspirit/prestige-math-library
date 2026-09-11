#!/usr/bin/env node
// Certify items genuinely created and authored by an auditor/adjudicator.
//
// This is deliberately a distinct evidence class. It never writes a review,
// adjudication, or judge-ledger row. A certification is available only for an
// id absent from both the immutable stage baseline and the item filesystem at
// that boundary, and remains current only while its hash-bound carriers match.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
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
  const current = {
    version: 1, run, step: Number(step), policy: 'auditor-created-stage-bypass-v1',
    items: inventory(root, run).map(({ id, page, batch }) => ({ id, page, batch })),
    existing_item_files: readdirSync(join(root, 'items')).filter(file => file.endsWith('.md'))
      .map(file => file.slice(0, -3)).sort(),
  };
  if (existsSync(path)) {
    const prior = read(path);
    const comparable = ({ at: _at, ...row }) => row;
    if (JSON.stringify(comparable(prior)) !== JSON.stringify(current))
      throw Error(`Refusing to move the Step ${step} auditor baseline for ${run}`);
    return { path, reused: true, items: current.items.length };
  }
  writeFileSync(path, `${JSON.stringify({ ...current, at: new Date().toISOString() }, null, 2)}\n`);
  return { path, reused: false, items: current.items.length };
}

function authorResultAllowed(step, row) {
  if (row?.ok !== true || !row.ended_at || !row.started_at) return false;
  const label = String(row.label ?? '');
  if (Number(step) === 5) return row.role === 'alpha' && /^5[ab]-/.test(label);
  if (Number(step) === 7) return ['alpha', 'alpha-adjudicate', 'final-adjudicator'].includes(row.role)
    && /(?:step7|rejudge|final-adjudicat)/.test(label);
  return ['alpha', 'alpha-adjudicate', 'final-adjudicator'].includes(row.role)
    && /(?:step8|impact-close)/.test(label);
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
    if (!Number.isFinite(started) || !Number.isFinite(ended)
      || changedAt < started - 1500 || changedAt > ended + 1500) return false;
    const covers = Array.isArray(row.covers) ? row.covers.map(String) : [];
    return !covers.length || covers.includes('all') || covers.includes(String(batch));
  }).sort((a, b) => Date.parse(a.ended_at) - Date.parse(b.ended_at)).at(-1);
}

function contractEntry(path, id) {
  if (!existsSync(path)) return null;
  return read(path)?.contracts?.[id] ?? null;
}

export function loadAuditorCreatedCertifications(path, { steps = null } = {}) {
  if (!path || !existsSync(path)) return [];
  const receipt = read(path);
  if (receipt?.version !== 1 || receipt?.policy !== 'auditor-created-stage-bypass-v1'
    || ![5, 7, 8].includes(receipt?.step) || !Array.isArray(receipt?.items))
    throw Error(`Invalid auditor-created certification receipt: ${path}`);
  if (steps && !steps.includes(receipt.step)) return [];
  return receipt.items.map(row => ({ ...row, step: receipt.step, run: receipt.run }));
}

export function certifyAuditorCreatedItems(root, run, step) {
  step = Number(step);
  const baselinePath = auditorCreatedBaselinePath(root, run, step);
  if (!existsSync(baselinePath)) throw Error(`Missing Step ${step} auditor baseline: ${baselinePath}`);
  const baseline = read(baselinePath);
  if (baseline?.version !== 1 || baseline?.run !== run || baseline?.step !== step
    || baseline?.policy !== 'auditor-created-stage-bypass-v1'
    || !Array.isArray(baseline.items) || !Array.isArray(baseline.existing_item_files))
    throw Error(`Invalid Step ${step} auditor baseline`);
  const original = new Set(baseline.items.map(row => row.id));
  const preexisting = new Set(baseline.existing_item_files);
  const additions = inventory(root, run).filter(row => !original.has(row.id));
  const results = successfulAuthorResults(root, run, step);
  let priorById = new Map();
  const certificationPath = auditorCreatedCertificationsPath(root, run, step);
  if (existsSync(certificationPath)) {
    try { priorById = new Map(loadAuditorCreatedCertifications(certificationPath, { steps: [step] })
      .map(row => [row.id, row])); } catch { /* rewritten below after complete validation */ }
  }
  const certified = [];
  for (const row of additions) {
    const { id, batch } = row;
    if (preexisting.has(id)) throw Error(`${id}: existed on disk before Step ${step} and is not auditor-created`);
    const itemPath = join(root, 'items', `${safe(id, 'item ID')}.md`);
    const manifestPath = join(root, 'research', `${run}-batch-${batch}.pages.json`);
    const contractPath = join(root, 'research', `${run}-batch-${batch}.proof-contracts.json`);
    if (!existsSync(itemPath)) throw Error(`${id}: auditor-created manifest item has no authored item file`);
    const text = readFileSync(itemPath, 'utf8');
    const itemFileSha = sha(text);
    const contract = contractEntry(contractPath, id);
    const step5Carrier = { item_sha256: itemFileSha,
      contract_sha256: hashValue(contract), manifest_sha256: hashValue(row.manifest_entry) };
    const hashes = {
      guard_sha256: itemHashGuard(text), judge_sha256: itemHashJudge(text),
      item_file_sha256: itemFileSha,
      manifest_sha256: hashValue(row.manifest_entry),
      contract_sha256: hashValue(contract),
      step5_subject_sha256: hashValue(step5Carrier),
    };
    const prior = priorById.get(id);
    const priorCurrent = prior && Object.entries(hashes).every(([key, value]) => prior[key] === value);
    const author = priorCurrent ? { result_file: prior.author_result }
      : coveringResult(results, itemPath, manifestPath, contractPath, batch);
    if (!author) throw Error(`${id}: no successful Step ${step} auditor/adjudicator dispatch authored its current carriers`);
    certified.push({ id, page: row.page, batch,
      ...hashes,
      author_result: author.result_file,
    });
  }
  const receipt = {
    version: 1, run, step, policy: 'auditor-created-stage-bypass-v1',
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
