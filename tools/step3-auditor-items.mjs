#!/usr/bin/env node
// Snapshot the scaffold inventory before Step 3 authoring, then certify only
// genuinely new items created by successful Step 3 auditor/author dispatches.
// These receipts are a distinct owner-authorized class: they are neither an
// independent review nor an owner repair, and they cannot certify an item that
// already existed in the scaffold or on disk at the baseline.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { itemHash, itemInputPaths, loadStep3, scopeHash } from './step3-decisions.mjs';

const safe = value => {
  if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid run or item ID');
  return value;
};
const json = path => JSON.parse(readFileSync(path, 'utf8'));
const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
// Baselines are immutable inventories, not provenance certifications. Keep their
// v1 identity so existing runs can revalidate without moving the stage boundary.
const BASELINE_POLICY = 'auditor-authored-step3-bypass-v1';
const CERTIFICATION_POLICY = 'auditor-authored-step3-bypass-v2';
export const auditorBaselinePath = (root, run) => join(root, 'research', `${safe(run)}-step3-auditor-baseline.json`);
export const auditorCertificationsPath = (root, run) => join(root, 'research', `${safe(run)}-step3-auditor-certifications.json`);

function snapshot(root, run) {
  const s = loadStep3(root, run);
  return {
    version: 1,
    run,
    policy: BASELINE_POLICY,
    items: [...s.items].map(([id, value]) => ({ id, page: value.page.id, batch: String(value.page.batch) }))
      .sort((a, b) => a.id.localeCompare(b.id)),
    scopes: [...s.pairs.keys()].map(page => ({ page, sha256: scopeHash(s, page) }))
      .sort((a, b) => a.page.localeCompare(b.page)),
    existing_item_files: readdirSync(join(root, 'items')).filter(f => f.endsWith('.md'))
      .map(f => f.slice(0, -3)).sort(),
  };
}

export function writeAuditorBaseline(root, run) {
  safe(run);
  const path = auditorBaselinePath(root, run);
  const current = snapshot(root, run);
  if (existsSync(path)) {
    const prior = json(path);
    const same = prior.version === current.version && prior.run === run && prior.policy === current.policy
      && JSON.stringify(prior.items) === JSON.stringify(current.items)
      && JSON.stringify(prior.scopes) === JSON.stringify(current.scopes)
      && JSON.stringify(prior.existing_item_files) === JSON.stringify(current.existing_item_files);
    if (!same) throw Error(`Refusing to move the Step 3 auditor baseline for ${run}`);
    return { path, reused: true, items: current.items.length };
  }
  writeFileSync(path, JSON.stringify({ ...current, at: new Date().toISOString() }, null, 2) + '\n');
  return { path, reused: false, items: current.items.length };
}

function successfulAuthorResults(root, run) {
  const dir = join(root, 'research', `${run}-dispatch`);
  const rows = [];
  if (!existsSync(dir)) return rows;
  for (const file of readdirSync(dir).filter(f => /^alpha-high-.*\.result\.json$/.test(f) && !f.includes('.attempt-'))) {
    let row;
    try { row = json(join(dir, file)); } catch { continue; }
    if (row.run === run && row.ok === true && row.role === 'alpha-high'
      && /^step3b-/.test(row.label ?? '') && Array.isArray(row.covers) && row.ended_at) rows.push(row);
  }
  return rows;
}

export function certifyAuditorItems(root, run) {
  safe(run);
  const baselinePath = auditorBaselinePath(root, run);
  if (!existsSync(baselinePath)) throw Error(`Missing Step 3 auditor baseline: ${baselinePath}`);
  const baseline = json(baselinePath);
  if (baseline.version !== 1 || baseline.run !== run || baseline.policy !== BASELINE_POLICY
    || !Array.isArray(baseline.items) || !Array.isArray(baseline.scopes)
    || !Array.isArray(baseline.existing_item_files))
    throw Error('Invalid Step 3 auditor baseline');

  const original = new Set(baseline.items.map(row => row.id));
  const preexistingFiles = new Set(baseline.existing_item_files);
  const s = loadStep3(root, run);
  const additions = [...s.items].filter(([id]) => !original.has(id));
  const results = successfulAuthorResults(root, run);
  const certificationPath = auditorCertificationsPath(root, run);
  let priorById = new Map();
  if (existsSync(certificationPath)) {
    try {
      const prior = json(certificationPath);
      if (prior.version === 1 && prior.run === run && prior.policy === CERTIFICATION_POLICY
        && prior.baseline_sha256 === digest(baseline) && Array.isArray(prior.items)) {
        priorById = new Map(prior.items.map(row => [row.id, row]));
      }
    } catch { /* replace only after all current inputs validate */ }
  }
  const certified = [];

  for (const [id, value] of additions) {
    if (preexistingFiles.has(id))
      throw Error(`${id}: existed on disk before Step 3 and is not auditor-created`);
    const itemPath = join(root, 'items', `${safe(id)}.md`);
    if (!existsSync(itemPath)) throw Error(`${id}: auditor-created manifest item has no authored item file`);
    const batch = String(value.page.batch);
    const dependencies = [...new Set([...(value.item.deps ?? []), ...(value.item.justified_by ?? []),
      ...(value.item.forward_refs ?? [])])].sort();
    const sha256 = itemHash(s, id, dependencies);
    const prior = priorById.get(id);
    const priorCurrent = prior?.sha256 === sha256 && prior.page === value.page.id && prior.batch === batch
      && JSON.stringify(prior.dependencies) === JSON.stringify(dependencies);
    let author;
    if (priorCurrent) author = { label: prior.author_result };
    else {
      author = results.filter(row => row.covers.map(String).includes(batch))
        .sort((a, b) => Date.parse(a.ended_at) - Date.parse(b.ended_at)).at(-1);
      if (!author) throw Error(`${id}: no successful Step 3 auditor/author result covers batch ${batch}`);
      const ended = Date.parse(author.ended_at);
      if (!Number.isFinite(ended)
        || itemInputPaths(s, id, dependencies).some(path => statSync(path).mtimeMs > ended))
        throw Error(`${id}: changed after its latest successful Step 3 auditor/author result`);
    }
    certified.push({ id, page: value.page.id, batch, dependencies,
      sha256, author_result: author.label });
  }

  const scopes = [];
  for (const [page, pair] of s.pairs) {
    const ids = certified.filter(row => pair.some(p => p.id === row.page)).map(row => row.id).sort();
    const before = baseline.scopes.find(row => row.page === page);
    if (ids.length) {
      if (!before?.sha256) throw Error(`${page}: missing pre-author scope hash`);
      scopes.push({ page, additions: ids, baseline_sha256: before.sha256, sha256: scopeHash(s, page) });
    }
  }
  const receipt = {
    version: 1,
    run,
    policy: CERTIFICATION_POLICY,
    baseline_sha256: digest(baseline),
    at: new Date().toISOString(),
    items: certified.sort((a, b) => a.id.localeCompare(b.id)),
    scopes: scopes.sort((a, b) => a.page.localeCompare(b.page)),
  };
  writeFileSync(certificationPath, JSON.stringify(receipt, null, 2) + '\n');
  return receipt;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2), command = args[0];
    const at = args.indexOf('--run'), run = at < 0 ? undefined : args[at + 1];
    if (!run) throw Error('Usage: step3-auditor-items.mjs baseline|certify --run RUN');
    if (command === 'baseline') {
      const result = writeAuditorBaseline(process.cwd(), run);
      console.log(`step3-auditor-baseline: ${result.items} scaffold item(s) ${result.reused ? 'reused' : 'recorded'}`);
    } else if (command === 'certify') {
      const result = certifyAuditorItems(process.cwd(), run);
      console.log(`step3-auditor-certifications: ${result.items.length} auditor-created item(s) certified`);
    } else throw Error('Usage: step3-auditor-items.mjs baseline|certify --run RUN');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
