#!/usr/bin/env node
// Compute and close Step 6 routing from disk.
// Version 3 reviews authored content directly; version 2 validates historical evidence.
//
// Historical version-2 routes only:
//   changed by reader                 -> group Alpha
//   untouched, flagged by refuter     -> group Alpha
//   untouched, no refuter finding     -> final gates
//
// Each batch owns a separate scope file. Concurrent pipeline lanes must never
// read-modify-write one shared JSON file and erase a sibling's route.

import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { split, yaml } from './pathway-lib.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { step6Escalations } from './step6-escalations.mjs';

const argv = process.argv.slice(2);
const command = argv[0];
const option = (name, fallback = null) => {
  const at = argv.indexOf(`--${name}`);
  return at >= 0 && argv[at + 1] && !argv[at + 1].startsWith('--') ? argv[at + 1] : fallback;
};
const ROOT = resolve(option('root', join(dirname(fileURLToPath(import.meta.url)), '..')));
const R = (...parts) => join(ROOT, ...parts);
const fail = (message, code = 2) => { console.error(message); process.exit(code); };
const run = option('run');
if (!run) fail('usage: step6-scope.mjs prepare-direct|hash|stamp|post-6b|check --run <run> [--batch N] [--label pre-6b|post-6b] [--phase adjudicate|final]');

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const hashPath = (batch, label) => R('research', `${run}-step6-hash-${batch}-${label}.json`);
const scopePath = (batch) => R('research', `${run}-step6-scope-${batch}.json`);
const refuterPath = (batch) => R('research', `${run}-refute-${batch}.json`);
const readerFindingsPath = (batch) => R('research', `${run}-reader-findings-${batch}.json`);
const decisionsPath = (group) => R('research', `${run}-alpha-${group}-6b-decisions.json`);
const ledgerPath = R(option('ledger', 'research/defect-ledger.jsonl'));
const publishedRepairsPath = R('research', `${run}-step8-published-repairs.jsonl`);
const publishedClaimsPath = R('research', `${run}-step6-published-claims.jsonl`);

if (command === 'check-escalations') {
  const holds = step6Escalations(ROOT, run);
  if (holds.length) fail(`Step 6b owner decision required:\n${holds.join('\n')}`, 1);
  console.log('Step 6b: no owner escalations');
  process.exit(0);
}

const readJson = (path, what) => {
  if (!existsSync(path)) fail(`${what} is missing at ${path}`, 1);
  try { return JSON.parse(readFileSync(path, 'utf8')); }
  catch (cause) { fail(`${what} at ${path} is invalid JSON (${cause.message})`, 1); }
};

function manifestItems() {
  const batches = {};
  for (const name of readdirSync(R('research'))) {
    const match = name.match(new RegExp(`^${run}-batch-(\\d+)\\.pages\\.json$`));
    if (!match) continue;
    const raw = readJson(R('research', name), `batch ${match[1]} manifest`);
    const pages = Array.isArray(raw) ? raw : raw.pages ?? [];
    batches[match[1]] = pages.flatMap((page) => (page.items ?? [])
      .map((item) => typeof item === 'string' ? item : item?.id).filter(Boolean));
  }
  return batches;
}

function manifestPages() {
  const batches = {};
  for (const name of readdirSync(R('research'))) {
    const match = name.match(new RegExp(`^${run}-batch-(\\d+)\\.pages\\.json$`));
    if (!match) continue;
    const raw = readJson(R('research', name), `batch ${match[1]} manifest`);
    const pages = Array.isArray(raw) ? raw : raw.pages ?? [];
    batches[match[1]] = pages.map((page) => ({ id: String(page.id), category: String(page.category) }));
  }
  return batches;
}

/** Published items under an active Step-6 repair claim stay in the reader's
 * dependency scope after the repair correctly returns them to draft. Without
 * this durable ownership evidence, the routing check forgets the finding it is
 * supposed to certify as soon as `status: published` is removed. */
function claimedPublishedIds() {
  if (!existsSync(publishedClaimsPath)) return new Set();
  try {
    return new Set(readFileSync(publishedClaimsPath, 'utf8')
      .split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line))
      .filter((row) => row?.version === 1 && row?.run === run
        && typeof row?.id === 'string' && /^[a-f0-9]{64}$/.test(row?.pre_sha256 ?? ''))
      .map((row) => row.id));
  } catch {
    // The later published-claim validation owns the precise malformed-row
    // diagnostic. An unreadable claim file must not widen reader scope here.
    return new Set();
  }
}

function groups() {
  const raw = readJson(R('research', `${run}-alpha-groups.json`), 'Alpha group assignment');
  const rows = Array.isArray(raw) ? raw : raw.groups ?? [];
  const byBatch = {};
  for (const group of rows) for (const batch of group.covers ?? []) byBatch[String(batch)] = String(group.label);
  return { rows: rows.map((group) => ({ label: String(group.label), covers: (group.covers ?? []).map(String) })), byBatch };
}

const requireBatch = () => {
  const batch = option('batch');
  if (!batch) fail('step6-scope: --batch is required; routing is batch-local');
  return batch;
};
const unique = (values) => new Set(values).size === values.length;
const sameSet = (left, right) => left.length === right.length
  && left.every((value) => new Set(right).has(value));
const matchesBatchLabel = (value, batch) => {
  const actual = String(value ?? '');
  return actual === String(batch) || actual === `${run}-batch-${batch}`;
};
const canonical = (value) => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]))
    : value;
const hashValue = (value) => sha256(JSON.stringify(canonical(value)) ?? 'undefined');
const pageFileHash = (value) => value && typeof value === 'object' ? value.file_sha256 : value;
const pageManifestHash = (value) => value && typeof value === 'object' ? value.manifest_sha256 : null;
const pageItemOrder = (value) => value && typeof value === 'object' && Array.isArray(value.item_order)
  ? value.item_order.map(String) : null;

function orderProjection(beforeValue, afterValue) {
  const before = pageItemOrder(beforeValue);
  const after = pageItemOrder(afterValue);
  if (!before || !after) return { anchor: [], changed: false };
  const afterSet = new Set(after);
  const beforeSet = new Set(before);
  const anchor = before.filter((id) => afterSet.has(id));
  return {
    anchor,
    changed: JSON.stringify(anchor) !== JSON.stringify(after.filter((id) => beforeSet.has(id))),
  };
}

function pageChanged(beforeValue, afterValue) {
  const order = orderProjection(beforeValue, afterValue);
  if (beforeValue && typeof beforeValue === 'object' && afterValue && typeof afterValue === 'object') {
    return pageFileHash(beforeValue) !== pageFileHash(afterValue)
      || pageManifestHash(beforeValue) !== pageManifestHash(afterValue)
      || order.changed;
  }
  return hashValue(beforeValue) !== hashValue(afterValue);
}

function manifestMetadata(batch) {
  const raw = readJson(R('research', `${run}-batch-${batch}.pages.json`), `batch ${batch} manifest`);
  const pages = Array.isArray(raw) ? raw : raw.pages ?? [];
  const itemRows = new Map();
  const pageRows = new Map();
  for (const page of pages) {
    const pageId = String(page.id);
    const items = (page.items ?? []).map((item) => typeof item === 'string' ? { id: item } : item);
    for (const item of items) if (item?.id) itemRows.set(String(item.id), canonical({
      ...item,
      __step6_page_id: pageId,
    }));
    const { items: _items, ...pageFields } = page;
    pageRows.set(pageId, {
      metadata: canonical(pageFields),
      itemOrder: items.map((item) => String(item.id)),
    });
  }
  return { itemRows, pageRows };
}

function liveFingerprints(batch) {
  const ids = manifestItems()[batch] ?? [];
  const pages = manifestPages()[batch] ?? [];
  const metadata = manifestMetadata(batch);
  const contractPath = R('research', `${run}-batch-${batch}.proof-contracts.json`);
  const contract = existsSync(contractPath) ? readJson(contractPath, `batch ${batch} proof contract`) : { contracts: {} };
  return {
    items: Object.fromEntries(ids.map((id) => {
      const path = R('items', `${id}.md`);
      return [id, {
        item_sha256: existsSync(path) ? sha256(readFileSync(path)) : null,
        contract_sha256: hashValue(contract.contracts?.[id] ?? null),
        manifest_sha256: hashValue(metadata.itemRows.get(id) ?? { id }),
      }];
    })),
    pages: Object.fromEntries(pages.map((page) => {
      const path = R('library', page.category, `${page.id}.md`);
      const row = metadata.pageRows.get(page.id) ?? { metadata: { id: page.id }, itemOrder: [] };
      return [page.id, {
        file_sha256: existsSync(path) ? sha256(readFileSync(path)) : null,
        manifest_sha256: hashValue(row.metadata),
        item_order: row.itemOrder,
      }];
    })),
  };
}

function pageCarrier(value, orderAnchor = null) {
  if (!value || typeof value !== 'object') return value;
  const { item_order: itemOrder = [], ...carrier } = value;
  if (!orderAnchor) return carrier;
  const anchor = new Set(orderAnchor.map(String));
  return { ...carrier, item_order: itemOrder.map(String).filter((id) => anchor.has(id)) };
}

function currentDecisionCarrier(decision, target, live) {
  if (target?.subject_type === 'published-dependency') {
    const path = R('items', `${decision.id}.md`);
    return { item_sha256: existsSync(path) ? sha256(readFileSync(path)) : null };
  }
  if (target?.route === 'page') return pageCarrier(live?.pages[decision.id], target.order_anchor);
  if (live?.items[decision.id]) return live.items[decision.id];
  if (live?.pages[decision.id]) return pageCarrier(live.pages[decision.id]);
  return undefined;
}

function hashSnapshotErrors(doc, batch, label) {
  const errors = [];
  const manifest = Array.isArray(doc?.manifest) ? doc.manifest.map(String) : [];
  const pageManifest = Array.isArray(doc?.page_manifest) ? doc.page_manifest.map(String) : [];
  if (doc?.version !== 2 || doc?.run !== run || String(doc?.batch) !== batch || doc?.label !== label) {
    errors.push(`wrong version, run, batch, or label`);
  }
  if (!unique(manifest) || !sameSet(manifest, Object.keys(doc?.hashes ?? {}))) {
    errors.push('manifest and hash keys are not one exact unique set');
  }
  if (!unique(pageManifest) || !sameSet(pageManifest, Object.keys(doc?.page_hashes ?? {}))) {
    errors.push('page manifest and page hash keys are not one exact unique set');
  }
  return errors;
}

function expectedSplit(pre, post) {
  const preIds = (pre.manifest ?? Object.keys(pre.hashes ?? {})).map(String);
  const postIds = (post.manifest ?? Object.keys(post.hashes ?? {})).map(String);
  const prePages = (pre.page_manifest ?? Object.keys(pre.page_hashes ?? {})).map(String);
  const postPages = (post.page_manifest ?? Object.keys(post.page_hashes ?? {})).map(String);
  const before = new Set(preIds);
  const after = new Set(postIds);
  const universe = [...new Set([...preIds, ...postIds])];
  const pageUniverse = [...new Set([...prePages, ...postPages])];
  return {
    manifestPre: preIds,
    manifestPost: postIds,
    added: postIds.filter((id) => !before.has(id)).sort(),
    removed: preIds.filter((id) => !after.has(id)).sort(),
    touched: universe.filter((id) => !before.has(id) || !after.has(id)
      || hashValue(pre.hashes?.[id]) !== hashValue(post.hashes?.[id])).sort(),
    untouched: universe.filter((id) => before.has(id) && after.has(id)
      && hashValue(pre.hashes?.[id]) === hashValue(post.hashes?.[id])).sort(),
    pageManifestPre: prePages,
    pageManifestPost: postPages,
    pagesAdded: postPages.filter((id) => !prePages.includes(id)).sort(),
    pagesRemoved: prePages.filter((id) => !postPages.includes(id)).sort(),
    pagesTouched: pageUniverse.filter((id) =>
      !prePages.includes(id) || !postPages.includes(id)
      || pageChanged(pre.page_hashes?.[id], post.page_hashes?.[id])).sort(),
    pageOrderAnchors: Object.fromEntries(pageUniverse.map((id) => [
      id, orderProjection(pre.page_hashes?.[id], post.page_hashes?.[id]).anchor,
    ])),
  };
}

function highRiskItems(ids, batch) {
  const contract = R('research', `${run}-batch-${batch}.proof-contracts.json`);
  if (!existsSync(contract)) fail(`step6-scope: merged proof contract is missing at ${contract}`);
  // The batch contract is the authoritative authored-item scope.  Passing the
  // manifest selection again can accidentally include cited dependency ids
  // after a reader rewrite, which risk-report correctly rejects as outside
  // the contract.  Route exactly the contract's own scope instead.
  const result = spawnSync(process.execPath,
    [R('tools', 'risk-report.mjs'), contract, '--json'],
    { cwd: ROOT, encoding: 'utf8', timeout: 120_000 });
  if (result.status !== 0) fail(`step6-scope: risk routing failed\n${result.stderr || result.stdout}`, 1);
  const report = JSON.parse(result.stdout);
  return report.findings.filter((finding) => finding.required).map((finding) => finding.id);
}

function normalizeFindings(findings, batch, allowedSet, reportError, prefix) {
  const defectKinds = new Set(['false-claim', 'unlicensed-inference', 'missing-hypothesis',
    'citation-inaccurate', 'ill-formed', 'overstrong-title-or-statement']);
  return findings.map((finding, index) => {
    const id = typeof finding === 'object' ? String(finding?.id ?? '') : '';
    if (!id || !allowedSet.has(id)) reportError(`finding ${index + 1} names unopened or out-of-scope item ${id || '(missing)'}`);
    for (const field of ['location', 'evidence']) {
      if (typeof finding?.[field] !== 'string' || !finding[field].trim()) reportError(`finding ${index + 1} has no ${field}`);
    }
    if (!defectKinds.has(finding?.defect)) reportError(`finding ${index + 1} has invalid defect ${JSON.stringify(finding?.defect)}`);
    if (!['fatal', 'nonfatal'].includes(finding?.severity)) reportError(`finding ${index + 1} has invalid severity ${JSON.stringify(finding?.severity)}`);
    const normalized = {
      obligation: `${prefix}:${batch}:${index + 1}`,
      id,
      location: finding?.location,
      defect: finding?.defect,
      evidence: finding?.evidence,
      severity: finding?.severity,
    };
    if (prefix === 'reader') {
      normalized.subject_type = finding?.subject_type;
      normalized.consumer_id = finding?.consumer_id ?? null;
    }
    return normalized;
  });
}

function normalizeRefuterFindings(findings, batch, openedSet, reportError) {
  return normalizeFindings(findings, batch, openedSet, reportError, 'refuter');
}

/** Exact published dependency closure reachable from each assigned consumer. */
function publishedDependencies(batchIds, allRunIds) {
  const Y = yaml();
  const owners = new Map();
  const claimed = claimedPublishedIds();
  for (const consumer of batchIds) {
    const queue = [consumer];
    const seen = new Set();
    while (queue.length) {
      const id = queue.shift();
      if (seen.has(id)) continue;
      seen.add(id);
      const path = R('items', `${id}.md`);
      if (!existsSync(path)) continue;
      let item = {};
      try { item = Y.parse(split(readFileSync(path, 'utf8')).fm) ?? {}; } catch { continue; }
      const dependencies = [...(Array.isArray(item.deps) ? item.deps : []),
        ...(Array.isArray(item.justified_by) ? item.justified_by : [])]
        .filter((target) => typeof target === 'string');
      for (const target of dependencies) {
        if (allRunIds.has(target)) continue;
        const targetPath = R('items', `${target}.md`);
        if (!existsSync(targetPath)) continue;
        let targetItem = {};
        try { targetItem = Y.parse(split(readFileSync(targetPath, 'utf8')).fm) ?? {}; } catch { continue; }
        if (targetItem.status !== 'published' && !claimed.has(target)) continue;
        if (!owners.has(target)) owners.set(target, new Set());
        owners.get(target).add(consumer);
        queue.push(target);
      }
    }
  }
  return owners;
}

/** A claimed published repair is a frozen Step-6 obligation even if later
 * closure work removes the consumer's dependency on the withdrawn draft.
 * The split already validated the original edge; the claim and the detailed
 * receipt checks below keep that historical binding exact after repair. */
function preserveClaimedPublishedBindings(published, scope) {
  const claimed = claimedPublishedIds();
  for (const finding of scope.reader_findings ?? []) {
    if (finding?.subject_type !== 'published-dependency'
      || !claimed.has(finding.id)
      || typeof finding.consumer_id !== 'string'
      || !finding.consumer_id.trim()) continue;
    if (!published.has(finding.id)) published.set(finding.id, new Set());
    published.get(finding.id).add(finding.consumer_id);
  }
  return published;
}

/** Run one mechanical Step-6 subcommand without a shell. These composite
 * commands replace the last two `sh -c "a && b"` stage plans while preserving
 * the same fail-fast, idempotent order and forwarding every diagnostic. */
function runChecked(args, label) {
  const result = spawnSync(process.execPath, args, {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 20 * 60_000,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.error) fail(`step6-scope: ${label} could not launch (${result.error.message})`, 1);
  if (result.status !== 0) fail(`step6-scope: ${label} failed with exit ${result.status}`, 1);
}

const selfCommand = (...parts) => [fileURLToPath(import.meta.url), ...parts,
  '--root', ROOT, '--run', run];

if (command === 'post-reader') {
  const batch = requireBatch();
  runChecked(selfCommand('hash', '--batch', batch, '--label', 'post'), `batch ${batch} post-reader hash`);
  runChecked(selfCommand('split', '--batch', batch), `batch ${batch} routing split`);
  console.log(`step6-scope: batch ${batch} post-reader hash and split complete`);
  process.exit(0);
}

if (command === 'post-6b') {
  const batchIds = Object.keys(manifestItems()).sort((a, b) => Number(a) - Number(b));
  if (!batchIds.length) fail(`step6-scope: no batch manifests for ${run}`, 1);
  for (const batch of batchIds) {
    runChecked([R('tools', 'splice-plan.mjs'), '--run', run, '--batch', batch,
      '--update', '--accept-requires'], `batch ${batch} plan reconciliation`);
  }
  for (const batch of batchIds) {
    runChecked(selfCommand('hash', '--batch', batch, '--label', 'post-6b'),
      `batch ${batch} post-6b hash`);
  }
  runChecked([R('tools', 'touchlog.mjs'), 'snap', `research/${run}-touches.json`,
    'post-6b', '--idempotent'], 'post-6b touch snapshot');
  console.log(`step6-scope: reconciled and froze ${batchIds.length} batch(es) at post-6b`);
  process.exit(0);
}


if (command === 'prepare-direct') {
  const assignment = groups();
  const manifests = manifestItems();
  if (!Object.keys(manifests).length) fail('step6-scope: no batches to prepare', 1);
  // Never convert a run whose independent review has already started.
  for (const batch of Object.keys(manifests)) {
    if (assignment.rows.filter((group) => group.covers.includes(batch)).length !== 1) {
      fail(`batch ${batch} needs exactly one Alpha owner`, 1);
    }
    if (existsSync(scopePath(batch))) {
      const scope = readJson(scopePath(batch), 'existing Step 6 scope');
      if (scope.version !== 3) fail('Existing legacy Step 6 evidence requires owner migration; refusing to overwrite it', 1);
    }
  }
  for (const batch of Object.keys(manifests)) {
    if (existsSync(scopePath(batch))) continue; // frozen baseline survives retries
    runChecked(selfCommand('hash', '--batch', batch, '--label', 'pre-6b'), 'authored baseline');
    const baseline = readJson(hashPath(batch, 'pre-6b'), 'authored baseline');
    writeFileSync(scopePath(batch), JSON.stringify({
      version: 3, run, batch, group: assignment.byBatch[batch],
      baseline_sha256: sha256(readFileSync(hashPath(batch, 'pre-6b'))),
      items: baseline.manifest, pages: baseline.page_manifest,
    }, null, 2) + '\n');
  }
  console.log('step6-scope: direct group review prepared');
  process.exit(0);
}

// Current manifests include ad-hoc definitions/lemmas. Final checks instead use
// the sealed post-6b inventory: later 6c changes belong to the unchanged edge audit.
function directObligations(batch, scope, phase = 'adjudicate') {
  const snapshot = phase === 'final'
    ? readJson(hashPath(batch, 'post-6b'), 'post-6b inventory') : null;
  const items = snapshot?.manifest ?? manifestItems()[batch] ?? [];
  const pages = snapshot?.page_manifest ?? (manifestPages()[batch] ?? []).map((p) => p.id);
  return [
    ...new Set([...(scope.items ?? []), ...items]),
    ...new Set([...(scope.pages ?? []), ...pages]),
  ].map((id) => ({
    obligation: `authored:${batch}:${id}`, id, batch, direct: true,
    route: pages.includes(id) || (scope.pages ?? []).includes(id) ? 'page' : 'item',
    added: !(scope.items ?? []).includes(id) && !(scope.pages ?? []).includes(id),
  }));
}

if (command === 'pre-6b') {
  const batches = Object.keys(manifestItems());
  if (!batches.length) fail('step6-scope: no batches to stabilize', 1);
  for (const batch of batches) {
    runChecked(selfCommand('hash', '--batch', batch, '--label', 'pre-6b'), `batch ${batch} stabilized snapshot`);
  }
  process.exit(0);
}

if (command === 'hash') {
  const batch = requireBatch();
  const label = option('label');
  if (label === 'pre' && argv.includes('--validate-author')) {
    runChecked([R('tools', 'tsx-run.mjs'), R('tools', 'author-check.mts'), run, batch], `batch ${batch} author checks`);
  }
  if (!['pre', 'post', 'pre-6b', 'post-6b'].includes(label)) fail('step6-scope: unsupported hash label');
  const ids = manifestItems()[batch];
  if (!ids) fail(`step6-scope: no manifest for batch ${batch}`);
  const pages = manifestPages()[batch] ?? [];
  const metadata = manifestMetadata(batch);
  const contractPath = R('research', `${run}-batch-${batch}.proof-contracts.json`);
  const contract = existsSync(contractPath) ? readJson(contractPath, `batch ${batch} proof contract`) : { contracts: {} };
  const hashes = Object.fromEntries(ids.map((id) => {
    const path = R('items', `${id}.md`);
    return [id, {
      item_sha256: existsSync(path) ? sha256(readFileSync(path)) : null,
      contract_sha256: hashValue(contract.contracts?.[id] ?? null),
      manifest_sha256: hashValue(metadata.itemRows.get(id) ?? { id }),
    }];
  }));
  const pageHashes = Object.fromEntries(pages.map((page) => {
    const path = R('library', page.category, `${page.id}.md`);
    const row = metadata.pageRows.get(page.id) ?? { metadata: { id: page.id }, itemOrder: [] };
    return [page.id, {
      file_sha256: existsSync(path) ? sha256(readFileSync(path)) : null,
      manifest_sha256: hashValue(row.metadata),
      item_order: row.itemOrder,
    }];
  }));
  writeFileSync(hashPath(batch, label), `${JSON.stringify({
    version: 2, run, batch, label, manifest: ids, hashes,
    page_manifest: pages.map((page) => page.id), page_hashes: pageHashes,
  }, null, 2)}\n`);
  console.log(`step6-scope: hashed ${ids.length} item(s) of batch ${batch} as ${label}`);
  process.exit(0);
}

if (command === 'split') {
  const batch = requireBatch();
  const ids = manifestItems()[batch];
  if (!ids) fail(`step6-scope: no manifest for batch ${batch}`);
  const pre = readJson(hashPath(batch, 'pre'), `batch ${batch} pre-reader hash`);
  const post = readJson(hashPath(batch, 'post'), `batch ${batch} post-reader hash`);
  const snapshotErrors = [
    ...hashSnapshotErrors(pre, batch, 'pre').map((message) => `pre ${message}`),
    ...hashSnapshotErrors(post, batch, 'post').map((message) => `post ${message}`),
  ];
  if (snapshotErrors.length) fail(`step6-scope: batch ${batch} hash snapshot invalid: ${snapshotErrors.join('; ')}`);
  if (!sameSet(post.manifest ?? Object.keys(post.hashes ?? {}), ids)) {
    fail(`step6-scope: batch ${batch} post-reader hash does not match the current manifest`);
  }
  const currentPages = (manifestPages()[batch] ?? []).map((page) => page.id);
  if (!sameSet(post.page_manifest ?? Object.keys(post.page_hashes ?? {}), currentPages)) {
    fail(`step6-scope: batch ${batch} post-reader page hash does not match the current manifest`);
  }
  const derived = expectedSplit(pre, post);
  if (derived.removed.length) {
    fail(`step6-scope: batch ${batch} reader removed ${derived.removed.join(', ')}; restore the files and manifest so Alpha can adjudicate the proposed deletion from the actual mathematics`);
  }
  if (derived.pagesRemoved.length
    || derived.pageManifestPre.some((id) => pageFileHash(pre.page_hashes?.[id]) !== null
      && pageFileHash(post.page_hashes?.[id]) === null)) {
    fail(`step6-scope: batch ${batch} reader removed a page or its bytes; restore it so Alpha can adjudicate from the actual page prose`);
  }
  const highRisk = highRiskItems(ids, batch).sort();
  const readerText = existsSync(readerFindingsPath(batch))
    ? readFileSync(readerFindingsPath(batch), 'utf8')
    : fail(`step6-scope: batch ${batch} reader findings artifact is missing`, 1);
  let readerReport;
  try { readerReport = JSON.parse(readerText); }
  catch (cause) { fail(`step6-scope: batch ${batch} reader findings artifact is invalid JSON (${cause.message})`, 1); }
  const readerErrors = [];
  const readerError = (message) => readerErrors.push(message);
  // Readers receive both the run id and batch number in their task and may
  // identify the batch as either "N" or "<run>-batch-N".  Both name this
  // exact scope; rejecting the latter loses a completed independent audit on
  // a presentation-only identifier difference.
  if (![batch, `${run}-batch-${batch}`].includes(String(readerReport.batch))) {
    readerError(`report names batch ${readerReport.batch ?? '(missing)'}`);
  }
  if (!Array.isArray(readerReport.findings)) readerError('findings must be an array');
  if (typeof readerReport.coverage_note !== 'string' || !readerReport.coverage_note.trim()) readerError('coverage_note must be a nonempty string');
  const allRunIds = new Set(Object.values(manifestItems()).flat());
  const published = publishedDependencies(derived.manifestPost, allRunIds);
  const readerAllowed = new Set([...derived.manifestPost, ...derived.pageManifestPost, ...published.keys()]);
  const readerFindings = normalizeFindings(Array.isArray(readerReport.findings) ? readerReport.findings : [],
    batch, readerAllowed, readerError, 'reader');
  const live = liveFingerprints(batch);
  for (const finding of readerFindings) {
    const expectedType = derived.manifestPost.includes(finding.id) ? 'in-flight-item'
      : derived.pageManifestPost.includes(finding.id) ? 'page' : 'published-dependency';
    if (finding.subject_type !== expectedType) readerError(`${finding.obligation} must use subject_type ${expectedType}`);
    if (expectedType === 'published-dependency'
      && (!finding.consumer_id || !published.get(finding.id)?.has(finding.consumer_id))) {
      readerError(`${finding.obligation} must name an assigned consumer that reaches published dependency ${finding.id}`);
    }
    if (derived.touched.includes(finding.id) || derived.pagesTouched.includes(finding.id)) {
      readerError(`${finding.obligation} names changed carrier ${finding.id}; repaired work belongs in the touched route, not the open-findings artifact`);
    }
    const publishedText = expectedType === 'published-dependency' && existsSync(R('items', `${finding.id}.md`))
      ? readFileSync(R('items', `${finding.id}.md`), 'utf8') : null;
    const carrier = expectedType === 'in-flight-item' ? live.items[finding.id]
      : expectedType === 'page' ? pageCarrier(live.pages[finding.id])
        : { item_sha256: publishedText === null ? null : sha256(publishedText) };
    finding.observed_sha256 = hashValue(carrier);
    if (publishedText !== null) finding.pre_sha256 = itemHashGuard(publishedText);
  }
  if (readerErrors.length) fail(`step6-scope: batch ${batch} reader findings invalid: ${readerErrors.join('; ')}`, 1);
  const refuterPages = [...derived.pageManifestPost].sort();
  const refuterScope = [...new Set([...derived.untouched, ...highRisk, ...refuterPages])].sort();
  const group = groups().byBatch[batch];
  if (!group) fail(`step6-scope: batch ${batch} has no Alpha group`);
  const scope = {
    version: 2, run, batch, group,
    manifest_pre: derived.manifestPre, manifest_post: derived.manifestPost,
    added: derived.added, removed: derived.removed,
    page_manifest_pre: derived.pageManifestPre, page_manifest_post: derived.pageManifestPost,
    pages_added: derived.pagesAdded, pages_removed: derived.pagesRemoved,
    pages_touched: derived.pagesTouched, refuter_pages: refuterPages,
    page_order_anchors: derived.pageOrderAnchors,
    touched: derived.touched, untouched: derived.untouched, high_risk: highRisk,
    refuter_scope: refuterScope,
    opened: [], not_opened: [], flagged: [], refuter_findings: [],
    reader_findings: readerFindings,
    reader_report_sha256: sha256(readerText),
    refuter_report_sha256: null,
  };
  writeFileSync(scopePath(batch), `${JSON.stringify(scope, null, 2)}\n`);
  console.log(`step6-scope: batch ${batch} — ${ids.length} current item(s), ${derived.touched.length} touched, ${derived.untouched.length} untouched, ${derived.added.length} added, ${derived.removed.length} removed, ${derived.pagesTouched.length} page(s) touched, ${highRisk.length} high-risk`);
  process.exit(0);
}

if (command === 'collect') {
  const batch = requireBatch();
  const scope = readJson(scopePath(batch), `batch ${batch} split`);
  const reportText = readFileSync(refuterPath(batch), 'utf8');
  let report;
  try { report = JSON.parse(reportText); }
  catch (cause) { fail(`batch ${batch} refuter report is invalid JSON (${cause.message})`, 1); }

  const errors = [];
  const error = (message) => errors.push(message);
  if (!matchesBatchLabel(report.batch, batch)) error(`report names batch ${report.batch ?? '(missing)'}`);
  const opened = Array.isArray(report.opened) ? report.opened.map(String) : [];
  const notOpened = Array.isArray(report.not_opened) ? report.not_opened.map(String) : [];
  const findings = Array.isArray(report.flagged) ? report.flagged : [];
  if (!Array.isArray(report.opened)) error('opened must be an array');
  if (!Array.isArray(report.not_opened)) error('not_opened must be an array');
  if (!Array.isArray(report.flagged)) error('flagged must be an array');
  if (typeof report.coverage_note !== 'string' || !report.coverage_note.trim()) error('coverage_note must be a nonempty string');
  if (!unique(opened)) error('opened contains duplicate ids');
  if (!unique(notOpened)) error('not_opened contains duplicate ids');
  const overlap = opened.filter((id) => new Set(notOpened).has(id));
  if (overlap.length) error(`opened and not_opened overlap: ${overlap.join(', ')}`);
  if (!sameSet([...opened, ...notOpened], scope.refuter_scope)) error('opened and not_opened do not exactly partition the computed refuter scope');
  if (notOpened.length) error(`refuter left ${notOpened.length} item(s) unopened: ${notOpened.join(', ')}`);

  const openedSet = new Set(opened);
  const live = liveFingerprints(batch);
  const refuterFindings = normalizeRefuterFindings(findings, batch, openedSet, error)
    .map((finding) => ({
      ...finding,
      observed_sha256: hashValue(live.items[finding.id] ?? pageCarrier(live.pages[finding.id])),
    }));
  if (errors.length) {
    for (const message of errors) console.error(`ERROR refuter-coverage: batch ${batch}: ${message}`);
    process.exit(1);
  }

  scope.opened = [...opened].sort();
  scope.not_opened = [];
  scope.flagged = [...new Set(refuterFindings.map((finding) => finding.id))].sort();
  scope.refuter_findings = refuterFindings;
  scope.refuter_report_sha256 = sha256(reportText);
  writeFileSync(scopePath(batch), `${JSON.stringify(scope, null, 2)}\n`);
  console.log(`step6-scope: batch ${batch} — opened all ${opened.length} refuter-routed item(s), collected ${findings.length} finding(s)`);
  process.exit(0);
}

function stabilizedObligations(batch, scope) {
  if (scope.version === 3) return [];
  if (!existsSync(hashPath(batch, 'pre-6b'))) return [];
  const reader = readJson(hashPath(batch, 'post'), `batch ${batch} reader snapshot`);
  const stabilized = readJson(hashPath(batch, 'pre-6b'), `batch ${batch} stabilized snapshot`);
  const errors = hashSnapshotErrors(stabilized, batch, 'pre-6b');
  if (errors.length) fail(`batch ${batch} stabilized snapshot: ${errors.join('; ')}`, 1);
  const delta = expectedSplit(reader, stabilized);
  return [...delta.touched, ...delta.pagesTouched]
    .filter((id) => !(scope.touched ?? []).includes(id) && !(scope.pages_touched ?? []).includes(id))
    .map((id) => ({ obligation: `post-reader:${batch}:${id}`, id, batch, stabilized: true,
      added: delta.added.includes(id),
      route: delta.pagesTouched.includes(id) ? 'page' : 'touched',
      order_anchor: delta.pageOrderAnchors[id] }));
}

if (command === 'stamp') {
  const assignment = groups();
  const manifests = manifestItems();
  const pages = manifestPages();
  const onlyGroup = option('group');
  for (const group of assignment.rows.filter((row) => !onlyGroup || row.label === onlyGroup)) {
    const expected = new Map();
    for (const batch of group.covers) {
      const scope = readJson(scopePath(batch), `batch ${batch} scope`);
      if (scope.version === 3) for (const target of directObligations(batch, scope)) expected.set(target.obligation, target);
      for (const target of stabilizedObligations(batch, scope)) expected.set(target.obligation, target);
      for (const id of scope.touched ?? []) expected.set(`touched:${batch}:${id}`, {
        obligation: `touched:${batch}:${id}`, id, batch, route: 'touched', added: (scope.added ?? []).includes(id),
      });
      for (const id of scope.pages_touched ?? []) expected.set(`page:${batch}:${id}`, {
        obligation: `page:${batch}:${id}`, id, batch, route: 'page',
        order_anchor: scope.page_order_anchors?.[id] ?? [],
      });
      for (const finding of scope.reader_findings ?? []) expected.set(finding.obligation, { ...finding, batch, route: 'reader' });
      for (const finding of scope.refuter_findings ?? []) expected.set(finding.obligation, { ...finding, batch, route: 'flagged' });
    }
    const path = decisionsPath(group.label);
    const doc = readJson(path, `group ${group.label} decisions`);
    if (!Array.isArray(doc.decisions)) fail(`group ${group.label} decisions must contain an array`, 1);
    const live = new Map(group.covers.map((batch) => [batch, liveFingerprints(batch)]));
    for (const decision of doc.decisions) {
      const target = expected.get(decision.obligation);
      const batch = target?.batch ?? group.covers.find((candidate) =>
        (manifests[candidate] ?? []).includes(decision.id)
        || (pages[candidate] ?? []).some((page) => page.id === decision.id));
      const carrier = currentDecisionCarrier(decision, target, live.get(batch));
      if (carrier === undefined) fail(`group ${group.label} decision ${decision.obligation ?? '(missing)'} has no current carrier`, 1);
      decision.subject_sha256 = hashValue(carrier);
    }
    writeFileSync(path, `${JSON.stringify(doc, null, 2)}\n`);
    console.log(`step6-scope: stamped ${doc.decisions.length} current carrier hash(es) for group ${group.label}`);
  }
  process.exit(0);
}

if (command === 'check') {
  const phase = option('phase', 'split');
  if (!['split', 'adjudicate', 'final'].includes(phase)) fail('step6-scope: --phase must be split, adjudicate, or final');
  const only = option('batch');
  const manifests = manifestItems();
  const pages = manifestPages();
  const assignment = groups();
  const selected = Object.keys(manifests).filter((batch) => !only || batch === only);
  const scopes = {};
  const errors = [];
  const error = (code, message) => errors.push(`${code}: ${message}`);

  for (const batch of selected) {
    const path = scopePath(batch);
    if (!existsSync(path)) { error('scope-batch-missing', `batch ${batch} has no scope file`); continue; }
    const scope = readJson(path, `batch ${batch} scope`);
    scopes[batch] = scope;
    if (scope.version === 3) {
      const baselinePath = hashPath(batch, 'pre-6b');
      const baseline = readJson(baselinePath, 'authored baseline');
      if (scope.run !== run || String(scope.batch) !== batch
        || scope.group !== assignment.byBatch[batch]
        || assignment.rows.filter((group) => group.covers.includes(batch)).length !== 1) error('scope-identity', `batch ${batch} has wrong identity or group`);
      if (scope.baseline_sha256 !== sha256(readFileSync(baselinePath))
        || !sameSet(scope.items ?? [], baseline.manifest ?? [])
        || !sameSet(scope.pages ?? [], baseline.page_manifest ?? [])) error('scope-stale', `batch ${batch} authored baseline changed`);
      for (const message of hashSnapshotErrors(baseline, batch, 'pre-6b')) error('hash-invalid', message);
      if (phase !== 'final') {
        for (const id of scope.items ?? []) if (!(manifests[batch] ?? []).includes(id)) error('scope-removal', `[${id}] authored item removed before 6c`);
        if (!sameSet(scope.pages ?? [], (pages[batch] ?? []).map((p) => p.id))) error('scope-page-change', `batch ${batch} changed its page scope`);
        for (const id of manifests[batch] ?? []) if (!(scope.items ?? []).includes(id) && !/^(def|lem)-/.test(id)) error('scope-addition', `[${id}] only local definitions and lemmas may be added at 6b`);
      }
      continue;
    }
    const pre = readJson(hashPath(batch, 'pre'), `batch ${batch} pre-reader hash`);
    const post = readJson(hashPath(batch, 'post'), `batch ${batch} post-reader hash`);
    const derived = expectedSplit(pre, post);
    for (const message of hashSnapshotErrors(pre, batch, 'pre')) error('hash-invalid', `batch ${batch} pre ${message}`);
    for (const message of hashSnapshotErrors(post, batch, 'post')) error('hash-invalid', `batch ${batch} post ${message}`);
    if (scope.version !== 2) error('scope-identity', `batch ${batch} has unsupported scope version ${scope.version}`);
    if (scope.run !== run || String(scope.batch) !== batch) error('scope-identity', `batch ${batch} has wrong run or batch`);
    if (scope.group !== assignment.byBatch[batch]) error('scope-group', `batch ${batch} is assigned to ${assignment.byBatch[batch]}, not ${scope.group}`);
    if (!unique(scope.touched ?? []) || !unique(scope.untouched ?? [])) error('scope-duplicate', `batch ${batch} repeats a routed item`);
    const routed = [...(scope.touched ?? []), ...(scope.untouched ?? [])];
    const universe = [...new Set([...derived.manifestPre, ...derived.manifestPost])];
    if (!unique(routed) || !sameSet(routed, universe)) error('scope-partition', `batch ${batch} touched and untouched do not exactly partition its pre/post manifests`);
    if (!sameSet(scope.manifest_pre ?? [], derived.manifestPre)
      || !sameSet(scope.manifest_post ?? [], derived.manifestPost)
      || !sameSet(scope.added ?? [], derived.added)
      || !sameSet(scope.removed ?? [], derived.removed)
      || !sameSet(scope.page_manifest_pre ?? [], derived.pageManifestPre)
      || !sameSet(scope.page_manifest_post ?? [], derived.pageManifestPost)
      || !sameSet(scope.pages_added ?? [], derived.pagesAdded)
      || !sameSet(scope.pages_removed ?? [], derived.pagesRemoved)
      || !sameSet(scope.pages_touched ?? [], derived.pagesTouched)
      || JSON.stringify(scope.page_order_anchors ?? {}) !== JSON.stringify(derived.pageOrderAnchors)
      || !sameSet(scope.refuter_pages ?? [], derived.pageManifestPost)
      || !sameSet(scope.touched ?? [], derived.touched)
      || !sameSet(scope.untouched ?? [], derived.untouched)) {
      error('scope-stale', `batch ${batch} no longer matches its pre/post hashes`);
    }
    if (phase !== 'split') {
      const readerPath = readerFindingsPath(batch);
      if (!existsSync(readerPath)) error('reader-findings-missing', `batch ${batch} reader findings artifact is missing`);
      else {
        const readerText = readFileSync(readerPath, 'utf8');
        if (sha256(readerText) !== scope.reader_report_sha256) error('reader-findings-stale', `batch ${batch} reader findings changed after routing`);
        try {
          const report = JSON.parse(readerText);
          const reportErrors = [];
          const reportError = (message) => reportErrors.push(message);
          if (!matchesBatchLabel(report.batch, batch)) reportError(`report names batch ${report.batch ?? '(missing)'}`);
          if (!Array.isArray(report.findings)) reportError('findings must be an array');
          if (typeof report.coverage_note !== 'string' || !report.coverage_note.trim()) reportError('coverage_note is empty');
          const allRunIds = new Set(Object.values(manifests).flat());
          const published = preserveClaimedPublishedBindings(
            publishedDependencies(derived.manifestPost, allRunIds), scope);
          const normalized = normalizeFindings(Array.isArray(report.findings) ? report.findings : [], batch,
            new Set([...derived.manifestPost, ...derived.pageManifestPost, ...published.keys()]), reportError, 'reader');
          const stored = (scope.reader_findings ?? []).map(({
            observed_sha256: _observed, pre_sha256: _pre, ...finding
          }) => finding);
          if (JSON.stringify(normalized) !== JSON.stringify(stored)) reportError('findings no longer match the routed obligations');
          for (const finding of scope.reader_findings ?? []) {
            if (!/^[a-f0-9]{64}$/.test(finding.observed_sha256 ?? '')) reportError(`${finding.obligation} has no valid observed carrier hash`);
            if (finding.subject_type === 'published-dependency'
              && !/^[a-f0-9]{64}$/.test(finding.pre_sha256 ?? '')) {
              reportError(`${finding.obligation} has no valid pre-repair published hash`);
            }
          }
          for (const message of reportErrors) error('reader-findings-invalid', `batch ${batch}: ${message}`);
        } catch (cause) { error('reader-findings-invalid', `batch ${batch} report is invalid JSON (${cause.message})`); }
      }
      if (!scope.refuter_report_sha256) error('refuter-missing', `batch ${batch} has no collected refuter report`);
      const reportPath = refuterPath(batch);
      if (!existsSync(reportPath)) error('refuter-missing', `batch ${batch} refuter report is missing`);
      else {
        const reportText = readFileSync(reportPath, 'utf8');
        if (sha256(reportText) !== scope.refuter_report_sha256) error('refuter-stale', `batch ${batch} refuter report changed after collection`);
        try {
          const report = JSON.parse(reportText);
          const reportErrors = [];
          const reportError = (message) => reportErrors.push(message);
          const opened = Array.isArray(report.opened) ? report.opened.map(String) : [];
          const notOpened = Array.isArray(report.not_opened) ? report.not_opened.map(String) : [];
          const flagged = Array.isArray(report.flagged) ? report.flagged : [];
          if (!matchesBatchLabel(report.batch, batch)) reportError(`report names batch ${report.batch ?? '(missing)'}`);
          if (!unique(opened) || !unique(notOpened) || opened.some((id) => notOpened.includes(id))) reportError('coverage arrays are not unique and disjoint');
          if (!sameSet(opened, scope.opened ?? []) || notOpened.length) reportError('coverage no longer matches the collected scope');
          if (typeof report.coverage_note !== 'string' || !report.coverage_note.trim()) reportError('coverage_note is empty');
          const normalized = normalizeRefuterFindings(flagged, batch, new Set(opened), reportError);
          const stored = (scope.refuter_findings ?? []).map(({ observed_sha256: _observed, ...finding }) => finding);
          if (JSON.stringify(normalized) !== JSON.stringify(stored)) reportError('findings no longer match the collected obligations');
          for (const finding of scope.refuter_findings ?? []) {
            if (!/^[a-f0-9]{64}$/.test(finding.observed_sha256 ?? '')) reportError(`${finding.obligation} has no valid observed carrier hash`);
          }
          for (const message of reportErrors) error('refuter-invalid', `batch ${batch}: ${message}`);
        } catch (cause) { error('refuter-invalid', `batch ${batch} report is invalid JSON (${cause.message})`); }
      }
      const expectedRefuterScope = [...new Set([...(scope.untouched ?? []), ...(scope.high_risk ?? []), ...derived.pageManifestPost])];
      if (!sameSet(scope.refuter_scope ?? [], expectedRefuterScope)) error('refuter-scope', `batch ${batch} refuter scope is stale`);
      if (!sameSet(scope.opened ?? [], scope.refuter_scope ?? [])) error('refuter-coverage', `batch ${batch} did not open every routed refuter item`);
      if ((scope.not_opened ?? []).length) error('refuter-incomplete', `batch ${batch} retains unopened items`);
      for (const finding of scope.refuter_findings ?? []) {
        if (!(scope.refuter_scope ?? []).includes(finding.id)) error('flag-out-of-scope', `[${finding.id}] ${finding.obligation} is outside the refuter scope`);
      }
    }
  }

  if (phase !== 'split') {
    let ledgerRows = [];
    if (!existsSync(ledgerPath)) error('ledger-missing', `${ledgerPath} is missing`);
    else {
      try { ledgerRows = readFileSync(ledgerPath, 'utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line)); }
      catch (cause) { error('ledger-invalid', cause.message); }
    }
    const mine = ledgerRows.filter((row) => row.run === run);
    const earlyRows = mine.filter((row) => ['6a-read', '6b-adjudicate'].includes(row.caught_at_stage));
    const referenced = new Map();
    const publishedBindings = [];
    const liveByBatch = new Map();
    const ownableSubjects = new Set();
    const liveFor = (batch) => {
      if (!liveByBatch.has(batch)) liveByBatch.set(batch, liveFingerprints(batch));
      return liveByBatch.get(batch);
    };

    for (const group of assignment.rows) {
      if (only && !group.covers.includes(only)) continue;
      const groupSubjects = new Set(group.covers.flatMap((batch) => [
        ...(manifests[batch] ?? []), ...(pages[batch] ?? []).map((page) => page.id),
      ]));
      for (const subject of groupSubjects) ownableSubjects.add(subject);
      const owed = [];
      for (const batch of group.covers) {
        const scope = scopes[batch] ?? (existsSync(scopePath(batch)) ? readJson(scopePath(batch), `batch ${batch} scope`) : null);
        if (!scope) continue;
        if (scope.version === 3) owed.push(...directObligations(batch, scope, phase));
        for (const id of scope.touched ?? []) owed.push({
          obligation: `touched:${batch}:${id}`, id, batch, route: 'touched', added: (scope.added ?? []).includes(id),
        });
        for (const id of scope.pages_touched ?? []) owed.push({
          obligation: `page:${batch}:${id}`, id, batch, route: 'page',
          order_anchor: scope.page_order_anchors?.[id] ?? [],
        });
        owed.push(...stabilizedObligations(batch, scope));
        for (const finding of scope.reader_findings ?? []) {
          ownableSubjects.add(finding.id);
          owed.push({ ...finding, route: 'reader' });
        }
        for (const finding of scope.refuter_findings ?? []) {
          ownableSubjects.add(finding.id);
          owed.push({ ...finding, route: 'flagged' });
        }
      }
      const path = decisionsPath(group.label);
      if (!existsSync(path)) { error('decisions-missing', `group ${group.label} has no 6b decisions file`); continue; }
      const doc = readJson(path, `group ${group.label} decisions`);
      if (doc.version !== 1 || doc.run !== run || doc.group !== group.label || !Array.isArray(doc.decisions)) {
        error('decisions-shape', `group ${group.label} has wrong version, run, group, or decisions array`);
        continue;
      }
      const seen = new Set();
      const expected = new Map(owed.map((row) => [row.obligation, row]));
      for (const decision of doc.decisions) {
        if (!decision?.obligation || seen.has(decision.obligation)) {
          error('decision-duplicate', `group ${group.label} repeats or omits an obligation id`); continue;
        }
        seen.add(decision.obligation);
        const supplemental = String(decision.obligation).startsWith('gate:');
        const target = expected.get(decision.obligation);
        if (!target && !supplemental) { error('decision-extra', `${decision.obligation} is not owed to group ${group.label}`); continue; }
        if (target && (decision.id !== target.id || decision.route !== target.route)) error('decision-route', `[${target.id}] ${decision.obligation} has wrong id or route`);
        if (supplemental) {
          if (decision.route !== 'gate') error('decision-route', `${decision.obligation} must use route gate`);
          if (!groupSubjects.has(decision.id)) error('decision-route', `${decision.obligation} names ${decision.id} outside group ${group.label}`);
        }
        const allowed = target?.direct ? ['accepted', 'repaired'] : ['touched', 'page'].includes(decision.route)
          ? ['accepted_repair', 'amended_repair', 'reverted_change', 'reviewed_no_defect']
          : ['confirmed_fatal', 'confirmed_nonfatal', 'false_positive'];
        if (decision.verdict === 'escalated'
          || (decision.repair_confidence !== undefined && decision.repair_confidence !== 1)) {
          error('owner-escalation', `${decision.obligation} requires an owner decision: ${decision.evidence ?? 'uncertain repair'}`);
          continue;
        }
        if (!allowed.includes(decision.verdict)) error('decision-verdict', `${decision.obligation} has invalid verdict ${decision.verdict}`);
        if (typeof decision.evidence !== 'string' || !decision.evidence.trim()) error('decision-evidence', `${decision.obligation} has no evidence`);
        const accepted = target?.direct && decision.verdict === 'accepted';
        const cleanChange = decision.verdict === 'reviewed_no_defect';
        if (accepted && decision.defect_ids?.length !== 0) error('decision-ledger-refs', `${decision.obligation} accepted content must have empty defect_ids`);
        if (target?.direct && decision.verdict === 'repaired' && decision.repair_confidence !== 1) error('repair-confidence', `${decision.obligation} needs an honest complete repair`);
        if (cleanChange && (!['metadata', 'audit_enrichment'].includes(decision.change_kind)
          || decision.defect_ids?.length !== 0)) {
          error('decision-clean-change', `${decision.obligation} needs metadata/audit_enrichment change_kind and empty defect_ids`);
        }
        if (!Array.isArray(decision.defect_ids) || (!cleanChange && !accepted && !decision.defect_ids.length) || !unique(decision.defect_ids)) {
          error('decision-ledger-refs', `${decision.obligation} needs one or more unique defect_ids`);
          continue;
        }
        if (['reader', 'flagged', 'gate'].includes(decision.route) && decision.defect_ids.length !== 1) error('decision-ledger-refs', `${decision.obligation} must map to exactly one defect row`);
        if (supplemental && decision.defect_ids.length === 1
          && decision.obligation !== `gate:${decision.defect_ids[0]}`) {
          error('decision-ledger-refs', `${decision.obligation} must name its exact defect id`);
        }
        const decisionRows = [];
        for (const defectId of decision.defect_ids) {
          const prior = referenced.get(defectId);
          const sameLocation = (left, right) => String(left ?? '').trim().toLowerCase() === String(right ?? '').trim().toLowerCase();
          const sharedFinding = prior && decision.same_defect_as === prior.obligation
            && typeof decision.same_defect_evidence === 'string' && decision.same_defect_evidence.trim()
            && prior.id === decision.id
            && ['reader', 'flagged'].includes(prior.route)
            && ['reader', 'flagged'].includes(decision.route)
            && prior.verdict === decision.verdict
            && prior.target?.defect === target?.defect
            && prior.target?.severity === target?.severity
            && sameLocation(prior.target?.location, target?.location);
          const sharedCausalAddition = prior && target?.added
            && decision.same_defect_as === prior.obligation
            && decision.causal_subject === prior.id
            && typeof decision.same_defect_evidence === 'string'
            && decision.same_defect_evidence.trim();
          if (prior && !sharedFinding && !sharedCausalAddition) error('ledger-double-owned', `${defectId} is referenced by incompatible decisions`);
          if (!prior) referenced.set(defectId, {
            obligation: decision.obligation, id: decision.id, route: decision.route, verdict: decision.verdict, target,
          });
          const row = mine.find((candidate) => candidate.defect_id === defectId);
          if (!row) { error('ledger-ref-missing', `[${decision.id}] ${decision.obligation} names absent ${defectId}`); continue; }
          decisionRows.push(row);
          const causalAddition = target?.added && decision.causal_subject === row.subject
            && groupSubjects.has(row.subject);
          if ((row.subject !== decision.id && !causalAddition)
            || !['6a-read', '6b-adjudicate'].includes(row.caught_at_stage)) {
            error('ledger-ref-mismatch', `${defectId} does not match ${decision.id} at 6a/6b`);
          }
          if (row.disposition === 'open') error('ledger-open', `[${row.subject}] ${defectId} is still open`);
          if (decision.verdict === 'confirmed_fatal' && row.severity !== 'fatal') error('ledger-severity', `${defectId} is not fatal`);
          if (decision.verdict === 'confirmed_nonfatal' && row.severity === 'fatal') error('ledger-severity', `${defectId} is fatal but the decision is nonfatal`);
          if (decision.verdict === 'false_positive' && row.disposition !== 'false-positive') error('ledger-disposition', `${defectId} is not recorded as false-positive`);
        }
        const repaired = new Set(['fixed', 'narrowed', 'dropped']);
        if (decision.verdict === 'confirmed_fatal'
          && decisionRows.some((row) => row.severity !== 'fatal' || !repaired.has(row.disposition))) {
          error('ledger-disposition', `${decision.obligation} is confirmed_fatal but its row is not a repaired fatal`);
        }
        if (decision.verdict === 'confirmed_nonfatal'
          && decisionRows.some((row) => row.severity === 'fatal'
            || !new Set([...repaired, 'nonfatal-recorded']).has(row.disposition))) {
          error('ledger-disposition', `${decision.obligation} is confirmed_nonfatal but its row has the wrong severity or disposition`);
        }
        if (decision.verdict === 'false_positive'
          && decisionRows.some((row) => row.disposition !== 'false-positive')) {
          error('ledger-disposition', `${decision.obligation} is false_positive but its row is not`);
        }
        if (['accepted_repair', 'amended_repair', 'repaired'].includes(decision.verdict)
          && !decisionRows.some((row) => repaired.has(row.disposition))) {
          error('ledger-disposition', `${decision.obligation} accepts a repair but names no repaired defect row`);
        }
        if (decision.verdict === 'reverted_change'
          && decisionRows.some((row) => row.disposition !== 'false-positive' && !repaired.has(row.disposition))) {
          error('ledger-disposition', `${decision.obligation} reverted the change but its rows are neither repaired defects nor false positives`);
        }
        if (target?.subject_type === 'published-dependency'
          && decisionRows.some((row) => repaired.has(row.disposition))) {
          publishedBindings.push({ group: group.label, decision, target });
        }
        if (phase === 'final' && !/^[a-f0-9]{64}$/.test(decision.subject_sha256 ?? '')) {
          error('decision-hash-missing', `[${decision.id}] ${decision.obligation} has no sealed Step-6 carrier hash`);
        }
        if (phase === 'adjudicate') {
          const subjectBatch = target?.batch ?? group.covers.find((batch) =>
            (manifests[batch] ?? []).includes(decision.id)
            || (pages[batch] ?? []).some((page) => page.id === decision.id));
          const live = subjectBatch ? liveFor(subjectBatch) : null;
          const currentValue = currentDecisionCarrier(decision, target, live);
          if (currentValue === undefined || (target?.direct
            && !(target.route === 'page' ? currentValue?.file_sha256 : currentValue?.item_sha256))) {
            error('decision-subject-missing', `[${decision.id}] ${decision.obligation} has no current carrier`);
          } else {
            const currentSha = hashValue(currentValue);
            if (!/^[a-f0-9]{64}$/.test(decision.subject_sha256 ?? '')
              || decision.subject_sha256 !== currentSha) {
              error('decision-stale', `[${decision.id}] ${decision.obligation} subject_sha256 does not match the current item, contract, manifest, or page carrier`);
            }
            if (target && !target.direct && ['touched', 'page'].includes(target.route)) {
              const pre = readJson(hashPath(target.batch, target.stabilized ? 'post' : 'pre'), `batch ${target.batch} earlier hash`);
              const post = readJson(hashPath(target.batch, target.stabilized ? 'pre-6b' : 'post'), `batch ${target.batch} later hash`);
              const preRaw = target.route === 'page' ? pre.page_hashes?.[target.id] : pre.hashes?.[target.id];
              const postRaw = target.route === 'page' ? post.page_hashes?.[target.id] : post.hashes?.[target.id];
              const preValue = target.route === 'page' ? pageCarrier(preRaw, target.order_anchor) : preRaw;
              const postValue = target.route === 'page' ? pageCarrier(postRaw, target.order_anchor) : postRaw;
              if (decision.verdict === 'accepted_repair' && currentSha !== hashValue(postValue)) {
                error('decision-not-applied', `[${target.id}] accepted_repair no longer matches the reader result`);
              }
              if (decision.verdict === 'reverted_change' && currentSha !== hashValue(preValue)) {
                error('decision-not-applied', `[${target.id}] reverted_change was not restored to the pre-reader state`);
              }
              if (decision.verdict === 'amended_repair'
                && [hashValue(preValue), hashValue(postValue)].includes(currentSha)) {
                error('decision-not-applied', `[${target.id}] amended_repair must differ from both the pre-reader and reader-result carriers`);
              }
            }
            if (target?.observed_sha256 && decisionRows.some((row) => repaired.has(row.disposition))
              && currentSha === target.observed_sha256) {
              error('decision-not-applied', `[${target.id}] ${decision.verdict} names a repaired defect but the carrier is unchanged`);
            }
          }
        }
      }
      for (const [obligation, target] of expected) if (!seen.has(obligation)) error('decision-missing', `[${target.id}] ${group.label} did not decide ${obligation}`);
    }
    let publishedRows = [];
    if (existsSync(publishedRepairsPath)) {
      try { publishedRows = readFileSync(publishedRepairsPath, 'utf8').split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line)); }
      catch (cause) { error('published-repair-invalid', cause.message); }
    }
    const step6Rows = publishedRows.filter((row) => row.found_at_stage === '6a-read');
    const expectedPublished = new Map(publishedBindings.map((binding) => [binding.target.obligation, binding]));
    let publishedClaims = [];
    if (existsSync(publishedClaimsPath)) {
      try { publishedClaims = readFileSync(publishedClaimsPath, 'utf8').split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line)); }
      catch (cause) { error('published-claim-invalid', cause.message); }
    }
    const claimById = new Map();
    for (const claim of publishedClaims) {
      if (claimById.has(claim.id)) error('published-claim-duplicate', `${claim.id} has more than one repair owner`);
      else claimById.set(claim.id, claim);
      const bindings = publishedBindings.filter((binding) => binding.target.id === claim.id
        && binding.target.pre_sha256 === claim.pre_sha256);
      if (claim.version !== 1 || claim.run !== run || !bindings.some((binding) => binding.group === claim.group)) {
        error('published-claim-extra', `${claim.id ?? '(missing id)'} is not owned by one exact repaired Step-6 finding`);
      }
    }
    const seenPublished = new Set();
    for (const row of step6Rows) {
      const binding = expectedPublished.get(row.step6_obligation);
      if (!binding || seenPublished.has(row.step6_obligation)) {
        error('published-repair-extra', `${row.step6_obligation ?? '(missing obligation)'} is not one exact repaired Step-6 reader finding`);
        continue;
      }
      seenPublished.add(row.step6_obligation);
      const { target, group } = binding;
      const path = R('items', `${target.id}.md`);
      const current = existsSync(path) ? itemHashGuard(readFileSync(path, 'utf8')) : null;
      const claim = claimById.get(target.id);
      if (row.kind !== 'repaired' || row.id !== target.id || row.group !== group
        || row.found_via !== target.consumer_id || row.pre_sha256 !== target.pre_sha256
        || !claim || row.repair_owner_group !== claim.group || claim.pre_sha256 !== target.pre_sha256
        || row.post_sha256 !== current || row.step6_defect_class !== target.defect
        || typeof row.defect !== 'string' || !row.defect.trim()
        || typeof row.correction_basis !== 'string' || !row.correction_basis.trim()) {
        error('published-repair-mismatch', `${target.obligation} has no exact current published-repair receipt`);
      }
    }
    for (const [obligation, binding] of expectedPublished) if (!seenPublished.has(obligation)) {
      error('published-repair-missing', `[${binding.target.id}] ${obligation} repaired published mathematics but has no certification handoff row`);
    }
    for (const row of earlyRows) {
      if (ownableSubjects.has(row.subject) && !referenced.has(row.defect_id)) {
        error('ledger-unowned', `[${row.subject}] ${row.defect_id} has no 6b decision reference`);
      }
    }
    if (phase === 'final') {
      for (const row of mine.filter((entry) => ['6a-read', '6b-adjudicate', '6c-cross'].includes(entry.caught_at_stage)
        && ['open', 'deferred'].includes(entry.disposition))) {
        error('step6-open', `[${row.subject}] ${row.defect_id} remains ${row.disposition}`);
      }
    }
  }

  const routedCount = Object.values(scopes).reduce((sum, scope) => sum + (scope.items?.length ?? 0) + (scope.touched?.length ?? 0) + (scope.untouched?.length ?? 0), 0);
  const adjudicatedCount = Object.values(scopes).reduce((sum, scope) => sum + (scope.items?.length ?? 0) + (scope.pages?.length ?? 0)
    + (scope.touched?.length ?? 0) + (scope.pages_touched?.length ?? 0)
    + (scope.reader_findings?.length ?? 0)
    + (scope.refuter_findings?.length ?? 0), 0);
  for (const message of errors) console.error(`ERROR ${message}`);
  console.log(`step6-scope: ${routedCount} item(s) routed, ${adjudicatedCount} adjudication obligation(s), ${errors.length} error(s)`);
  process.exit(errors.length ? 1 : 0);
}

fail(`step6-scope: unknown command ${JSON.stringify(command)}`);
