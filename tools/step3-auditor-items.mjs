#!/usr/bin/env node
// Snapshot the scaffold inventory before Step 3 authoring, then certify only
// genuinely new items created by successful Step 3 auditor/author dispatches.
// These receipts are a distinct owner-authorized class: they are neither an
// independent review nor an owner repair, and they cannot certify an item that
// already existed in the scaffold or on disk at the baseline.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, realpathSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { itemHash, itemInputPaths, loadStep3, scopeHash } from './step3-decisions.mjs';
import { authorResultAllowed, loadStep3AuditorProvenance } from './auditor-created-items.mjs';
import { split, yaml } from './pathway-lib.mjs';

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


// Owner splits supplement the immutable inventory; they never reclassify an
// original item as auditor-created or attest an independent mathematical audit.
export const ownerPairSplitsPath = (root, run) => join(root, 'research', `${safe(run)}-step3-owner-pair-splits.json`);
const bytesDigest = value => createHash('sha256').update(value).digest('hex');
const sorted = values => [...values].sort();
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const SPLIT_POLICY = 'step3-owner-pair-splits-v1';

function splitAuthorization(root, run, row) {
  const auth = row.authorization;
  if (auth?.owner !== true || !String(auth.reason ?? '').trim()
    || typeof auth.evidence !== 'string' || !/^[a-f0-9]{64}$/.test(auth.evidence_sha256 ?? ''))
    throw Error('Invalid owner pair split authorization');
  const file = resolve(root, auth.evidence);
  if (!existsSync(file) || !realpathSync(file).startsWith(realpathSync(join(root, 'research')) + sep))
    throw Error('Owner pair split authorization evidence must be inside research');
  const bytes = readFileSync(file);
  if (bytesDigest(bytes) !== auth.evidence_sha256) throw Error('Stale owner pair split authorization evidence');
  const evidence = JSON.parse(bytes.toString('utf8'));
  if (evidence.version !== 1 || evidence.run !== run || evidence.owner !== true
    || evidence.action !== 'step3-owner-pair-split' || evidence.from_page !== row.from_page
    || !equal(evidence.new_pages, row.new_pages) || evidence.reason !== auth.reason)
    throw Error('Owner pair split authorization evidence does not approve this exact split');
}

function validateSplit(root, run, baseline, s, row, { registering = false } = {}) {
  if (!row || !Array.isArray(row.new_pages) || row.new_pages.length !== 2
    || new Set(row.new_pages).size !== 2 || !row.new_pages.includes(row.from_page)
    || !Array.isArray(row.original_pages) || row.original_pages.length !== 2
    || row.original_pages[0] !== row.from_page || row.original_pages[1] === row.from_page
    || !Array.isArray(row.items) || !Array.isArray(row.scopes)
    || !Number.isFinite(Date.parse(row.at))) throw Error('Invalid owner pair split record');
  [row.from_page, ...row.new_pages, ...row.original_pages].forEach(safe);
  splitAuthorization(root, run, row);
  const source = baseline.scopes.find(value => value.page === row.from_page);
  if (!source || row.original_scope_sha256 !== source.sha256
    || row.new_pages.some(page => page !== row.from_page && baseline.scopes.some(value => value.page === page)))
    throw Error('Owner pair split cannot overwrite an existing baseline pair');
  const original = baseline.items.filter(value => row.original_pages.includes(value.page));
  if (!original.length || new Set(row.items.map(value => value.id)).size !== row.items.length
    || !equal(sorted(original.map(value => value.id)), sorted(row.items.map(value => value.id))))
    throw Error('Owner pair split must conserve every original item exactly once');
  const pairs = row.new_pages.map(page => s.pairs.get(page));
  if (pairs.some(pair => !pair) || pairs[0][1].id !== row.original_pages[1])
    throw Error('Owner pair split must retain the original A/B pair identities');
  const pages = new Set(pairs.flat().map(page => page.id));
  for (const value of row.items) {
    const live = s.items.get(value.id), prior = original.find(item => item.id === value.id);
    if (!prior || value.original_page !== prior.page || value.original_batch !== prior.batch
      || !live || !pages.has(value.page) || live.page.id !== value.page || String(live.page.batch) !== value.batch)
      throw Error('Owner pair split item mapping changed');
  }
  // Existing original items outside the split must retain their assignments.
  for (const prior of baseline.items.filter(value => !row.original_pages.includes(value.page))) {
    const live = s.items.get(prior.id);
    if (!live || live.page.id !== prior.page || String(live.page.batch) !== prior.batch)
      throw Error('Owner pair split changed an unrelated original item');
  }
  if (registering && [...s.items].some(([id, value]) => pages.has(value.page.id)
    && !original.some(prior => prior.id === id)))
    throw Error('Owner pair split cannot register added item IDs');
  if (row.scopes.length !== 2 || !equal(sorted(row.scopes.map(value => value.page)), sorted(row.new_pages))
    || row.scopes.some(value => !/^[a-f0-9]{64}$/.test(value.sha256 ?? '')
      || (registering && value.sha256 !== scopeHash(s, value.page))))
    throw Error('Invalid owner pair split pre-author scope hashes');
}

export function ownerPairSplitScopes(root, run, baseline = json(auditorBaselinePath(root, run)), s = loadStep3(root, run)) {
  const path = ownerPairSplitsPath(root, run);
  if (!existsSync(path)) return [];
  const supplement = json(path);
  if (supplement.version !== 1 || supplement.run !== run || supplement.policy !== SPLIT_POLICY
    || supplement.baseline_sha256 !== digest(baseline)
    || supplement.baseline_file_sha256 !== bytesDigest(readFileSync(auditorBaselinePath(root, run)))
    || !Array.isArray(supplement.splits)) throw Error('Invalid owner pair split immutable baseline binding');
  const seen = new Set();
  for (const row of supplement.splits) {
    validateSplit(root, run, baseline, s, row);
    for (const page of row.new_pages) {
      if (seen.has(page)) throw Error('Duplicate owner pair split');
      seen.add(page);
    }
  }
  return supplement.splits.flatMap(row => row.scopes);
}

export function registerOwnerPairSplit(root, run, { from_page, new_pages, authorization }) {
  safe(run); safe(from_page);
  if (!Array.isArray(new_pages)) throw Error('Invalid owner pair split pages');
  const baselinePath = auditorBaselinePath(root, run), baseline = json(baselinePath);
  if (baseline.version !== 1 || baseline.run !== run || baseline.policy !== BASELINE_POLICY
    || !Array.isArray(baseline.items) || !Array.isArray(baseline.scopes))
    throw Error('Invalid Step 3 auditor baseline');
  const s = loadStep3(root, run), retained = s.pairs.get(from_page);
  if (!retained) throw Error('Missing retained owner split pair');
  const original_pages = [from_page, retained[1].id];
  const row = { from_page, new_pages: [...new_pages], original_pages, authorization,
    at: new Date().toISOString(),
    original_scope_sha256: baseline.scopes.find(value => value.page === from_page)?.sha256,
    items: baseline.items.filter(value => original_pages.includes(value.page)).map(prior => {
      const live = s.items.get(prior.id);
      return { id: prior.id, original_page: prior.page, original_batch: prior.batch,
        page: live?.page.id, batch: String(live?.page.batch) };
    }).sort((a, b) => a.id.localeCompare(b.id)),
    scopes: new_pages.map(page => ({ page, sha256: scopeHash(s, page) })).sort((a, b) => a.page.localeCompare(b.page)) };
  validateSplit(root, run, baseline, s, row, { registering: true });
  ownerPairSplitScopes(root, run, baseline, s);
  const path = ownerPairSplitsPath(root, run);
  const prior = existsSync(path) ? json(path) : { version: 1, run, policy: SPLIT_POLICY,
    baseline_sha256: digest(baseline), baseline_file_sha256: bytesDigest(readFileSync(baselinePath)), splits: [] };
  if (prior.splits.some(value => value.new_pages.some(page => new_pages.includes(page))))
    throw Error('Refusing to replace an existing owner pair split');
  writeFileSync(path, JSON.stringify({ ...prior, splits: [...prior.splits, row] }, null, 2) + '\n');
  return { path, split: row };
}

function successfulAuthorResults(root, run) {
  const dir = join(root, 'research', `${run}-dispatch`);
  const rows = [];
  if (!existsSync(dir)) return rows;
  for (const file of readdirSync(dir).filter(f => /^alpha-high-.*\.result\.json$/.test(f) && !f.includes('.attempt-'))) {
    let row;
    try { row = json(join(dir, file)); } catch { continue; }
    if (row.run === run && authorResultAllowed(3, row)
      && Array.isArray(row.covers) && Date.parse(row.started_at) <= Date.parse(row.ended_at)) rows.push(row);
  }
  return rows;
}

// A later owner repair can recertify an item that was genuinely auditor-created
// before the immutable baseline. The original author result remains its origin
// evidence; the current owner decision is a separate, hash-bound repair verdict.
function currentOwnerRepair(s, id, dependencies, sha256) {
  const path = join(s.root, 'research', `${s.run}-step3b-owner-${safe(id)}.json`);
  if (!existsSync(path)) return null;
  const row = json(path);
  if (row.version !== 1 || row.run !== s.run || row.phase !== 'item'
    || row.target !== id || row.owner !== true || row.decision !== 'repaired'
    || row.sha256 !== sha256 || !Array.isArray(row.dependencies)
    || JSON.stringify(row.dependencies) !== JSON.stringify(dependencies)
    || !String(row.reason ?? '').trim()) return null;
  const decided = Date.parse(row.at);
  if (!Number.isFinite(decided) || itemInputPaths(s, id, dependencies)
    .some(path => statSync(path).mtimeMs > decided)) return null;
  return { sha256: digest(row), at: row.at };
}

// An ordinary Step-3b review can recertify a postbaseline addition after its
// author window closes. It must be the current, independent, confidence-1
// decision for the exact current hash and dependencies. The hash binds the
// relevant shared-manifest entries, so only item-source mtimes must predate it.
function currentOrdinaryReview(s, id, dependencies, sha256) {
  const ownerPath = join(s.root, 'research', `${s.run}-step3b-owner-${safe(id)}.json`);
  if (existsSync(ownerPath)) {
    const owner = json(ownerPath);
    if (owner.run === s.run && owner.phase === 'item' && owner.target === id
      && owner.owner === true && owner.decision === 'hold') return null;
  }
  const path = join(s.root, 'research', `${s.run}-step3b-review-${safe(id)}.json`);
  if (!existsSync(path)) return null;
  const row = json(path);
  if (row.version !== 1 || row.run !== s.run || row.phase !== 'item'
    || row.target !== id || row.owner !== false
    || !['accept', 'repaired'].includes(row.decision) || row.confidence !== 1
    || row.sha256 !== sha256 || !Array.isArray(row.dependencies)
    || JSON.stringify(row.dependencies) !== JSON.stringify(dependencies)
    || !String(row.reason ?? '').trim()) return null;
  const decided = Date.parse(row.at);
  const itemRoot = join(s.root, 'items') + sep;
  if (!Number.isFinite(decided) || itemInputPaths(s, id, dependencies)
    .filter(path => path.startsWith(itemRoot) && path.endsWith('.md'))
    .some(path => statSync(path).mtimeMs > decided)) return null;
  return { sha256: digest(row), at: row.at };
}

export function certifyAuditorItems(root, run) {
  return certify(root, run, false);
}

// Recovery runs before the whole-stage artifact barrier. Certify completed
// authors without requiring unfinished siblings to have supplied their inputs.
// This is not the final gate: deferred rows remain ordinary open obligations.
export function certifyCompletedAuditorItems(root, run) {
  return certify(root, run, true);
}

function certify(root, run, partial) {
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
  // A previously published item can be placed on a draft frontier page while
  // its local prerequisites are repaired. It is a preexisting anchor, never an
  // auditor-created item. Older library items may have no pipeline_run, so
  // require the exact current-run owner re-home receipt for those legacy files.
  const rehomedPath = join(root, 'research', `${safe(run)}-rehomed.json`);
  const rehomed = new Map();
  if (existsSync(rehomedPath)) {
    const receipt = json(rehomedPath);
    if (receipt.version !== 1 || receipt.run !== run || receipt.approved_by !== 'owner'
      || !Array.isArray(receipt.items)) throw Error(`Invalid owner re-home receipt: ${rehomedPath}`);
    for (const row of receipt.items) {
      if (!row?.id || !row.from_page || !row.to_page || !String(row.reason ?? '').trim())
        throw Error(`Invalid owner re-home entry: ${rehomedPath}`);
      safe(row.id); safe(row.from_page); safe(row.to_page);
      if (row.from_page === row.to_page || rehomed.has(row.id))
        throw Error(`Invalid or duplicate owner re-home entry for ${row.id}`);
      rehomed.set(row.id, row);
    }
  }
  const publishedAnchor = (id, pageId) => {
    if (!preexistingFiles.has(id)) return false;
    const path = join(root, 'items', safe(id) + '.md');
    if (!existsSync(path)) return false;
    const fm = yaml().parse(split(readFileSync(path, 'utf8')).fm) ?? {};
    if (fm.id !== id || fm.status !== 'published') return false;
    if (typeof fm.pipeline_run === 'string' && fm.pipeline_run !== run) return true;
    if (fm.pipeline_run !== undefined) return false;
    return rehomed.get(id)?.to_page === pageId;
  };
  const additions = [...s.items].filter(([id, value]) =>
    !original.has(id) && !publishedAnchor(id, value.page.id));
  const results = successfulAuthorResults(root, run);
  const certificationPath = auditorCertificationsPath(root, run);
  let priorById = new Map(), priorReceipt;
  if (existsSync(certificationPath)) {
    try {
      const prior = json(certificationPath);
      if (prior.version === 1 && prior.run === run && prior.policy === CERTIFICATION_POLICY
        && prior.baseline_sha256 === digest(baseline) && Array.isArray(prior.items)) {
        loadStep3AuditorProvenance(root, run);
        priorReceipt = prior;
        priorById = new Map(prior.items.map(row => [row.id, row]));
      }
    } catch { /* replace only after all current inputs validate */ }
  }
  const certified = [], pending = [];
  const defer = reason => {
    if (!partial) throw Error(reason);
    pending.push(reason);
  };

  for (const [id, value] of additions) {
    if (preexistingFiles.has(id))
      throw Error(`${id}: existed on disk before Step 3 and is not auditor-created`);
    const itemPath = join(root, 'items', `${safe(id)}.md`);
    if (!existsSync(itemPath)) {
      defer(`${id}: auditor-created manifest item has no authored item file`);
      continue;
    }
    const batch = String(value.page.batch);
    const dependencies = [...new Set([...(value.item.deps ?? []), ...(value.item.justified_by ?? []),
      ...(value.item.forward_refs ?? [])])].sort();
    const sha256 = itemHash(s, id, dependencies);
    const prior = priorById.get(id);
    const priorCurrent = prior?.sha256 === sha256 && prior.page === value.page.id && prior.batch === batch
      && JSON.stringify(prior.dependencies) === JSON.stringify(dependencies);
    const pair = [...s.pairs].find(([, pages]) => pages.some(page => page.id === value.page.id))?.[0];
    let author, ownerRecertification, reviewRecertification;
    if (priorCurrent) {
      author = { label: prior.author_result };
      // A reused item hash is not permission to detach its owner repair from
      // the provenance certificate. Also restore the binding if an older
      // certifier pass accidentally dropped it from an otherwise current row.
      ownerRecertification = currentOwnerRepair(s, id, dependencies, sha256);
      if (prior.owner_recertification && !ownerRecertification) {
        defer(`${id}: prior owner repair is no longer current`);
        continue;
      }
      if (prior.review_recertification && !ownerRecertification) {
        reviewRecertification = currentOrdinaryReview(s, id, dependencies, sha256);
        if (!reviewRecertification) {
          defer(`${id}: prior ordinary review is no longer current`);
          continue;
        }
      }
    }
    else {
      author = results.filter(row => row.label.startsWith('step3b-pair-')
        ? Boolean(pair && row.label.startsWith(`step3b-pair-${pair}-`) && row.covers.includes(pair))
        : row.covers.map(String).includes(batch))
        .sort((a, b) => Date.parse(a.ended_at) - Date.parse(b.ended_at)).at(-1);
      const ended = Date.parse(author?.ended_at);
      // A batch manifest is a shared carrier in both the legacy group and
      // per-pair layouts. Later repairs can rewrite it without changing this
      // item or any of its dependency files. The item hash binds the current
      // per-item manifest entry; require the item's actual proof inputs to
      // remain inside the successful author's write window.
      const paths = itemInputPaths(s, id, dependencies).filter(path =>
        !/-batch-\d+\.pages\.json$/.test(path));
      if (!author || !Number.isFinite(ended)
        || paths.some(path => statSync(path).mtimeMs > ended)) {
        const originAuthorResult = prior?.author_result ?? author?.label;
        ownerRecertification = originAuthorResult
          ? currentOwnerRepair(s, id, dependencies, sha256) : null;
        reviewRecertification = !ownerRecertification && originAuthorResult
          ? currentOrdinaryReview(s, id, dependencies, sha256) : null;
        if (!ownerRecertification && !reviewRecertification) {
          defer(author ? `${id}: changed after its latest successful Step 3 auditor/author result`
            : `${id}: no successful Step 3 auditor/author result covers batch ${batch} or pair ${pair}`);
          continue;
        }
        author = { label: originAuthorResult };
      }
    }
    certified.push({ id, page: value.page.id, batch, dependencies,
      sha256, author_result: author.label,
      ...(ownerRecertification ? { owner_recertification: ownerRecertification } : {}),
      ...(reviewRecertification ? { review_recertification: reviewRecertification } : {}) });
  }

  const splitScopes = ownerPairSplitScopes(root, run, baseline, s);
  const scopes = [];
  for (const [page, pair] of s.pairs) {
    const ids = certified.filter(row => pair.some(p => p.id === row.page)).map(row => row.id).sort();
    const before = splitScopes.find(row => row.page === page) ?? baseline.scopes.find(row => row.page === page);
    const added = additions.filter(([, value]) => pair.some(p => p.id === value.page.id));
    // Never let one completed addition approve an unfinished pair's scope delta.
    if (ids.length && ids.length === added.length) {
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
  // A blocked recovery tick may refresh diagnostics without changing any
  // certified evidence. Preserve the original bytes, timestamp and file mtime.
  if (priorReceipt && JSON.stringify(priorReceipt.items) === JSON.stringify(receipt.items)
    && JSON.stringify(priorReceipt.scopes) === JSON.stringify(receipt.scopes))
    return partial ? { ...priorReceipt, pending } : priorReceipt;
  writeFileSync(certificationPath, JSON.stringify(receipt, null, 2) + '\n');
  return partial ? { ...receipt, pending } : receipt;
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
