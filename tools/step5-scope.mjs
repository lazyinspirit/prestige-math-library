#!/usr/bin/env node
// Compute and close Step 5 routing from disk.
// Version 2 is the active route: the reader/refuter pass, its exact coverage
// and the obligations batch Alpha adjudicates. Version 3 is read-only support
// for imported or historical direct-review evidence; nothing writes it.
//
//   changed by reader                 -> batch Alpha
//   untouched, flagged by refuter     -> batch Alpha
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
import { step5Escalations, externalContextReceipt } from './step5-escalations.mjs';
import { step5Adjudicators } from './step5-adjudicators.mjs';
import { loadAuditorCreatedCertifications } from './auditor-created-items.mjs';
import { loadOwnerIdMigrations } from './step5-owner-id-migrations.mjs';
import { activeOwnershipRows } from './defect-ledger-ownership.mjs';
import { loadOwnerHistoricalRoutes } from './step5-owner-historical-routes.mjs';
import { isCertifiedOwnerContextAddition } from './step5-owner-context-addition.mjs';
import { loadOwnerPageRepairs, ownerPageFindingRepair } from './step5-owner-post-reader-page-repairs.mjs';

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
if (!run) fail('usage: step5-scope.mjs hash|post-reader|split|collect|post-5a|stamp|check --run <run> [--batch N] [--label pre|post|pre-5a|post-5a] [--phase adjudicate|final]');

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const hashPath = (batch, label) => R('research', `${run}-step5-hash-${batch}-${label}.json`);
const scopePath = (batch) => R('research', `${run}-step5-scope-${batch}.json`);
const refuterPath = (batch) => R('research', `${run}-refute-${batch}.json`);
const readerFindingsPath = (batch) => R('research', `${run}-reader-findings-${batch}.json`);
const decisionsPath = (group) => R('research', `${run}-alpha-${group}-5a-decisions.json`);
const ledgerPath = R(option('ledger', 'research/defect-ledger.jsonl'));
const publishedClaimsPath = R('research', `${run}-step5-published-claims.jsonl`);
const auditorCertificationsPath = R('research', `${run}-step5-auditor-certifications.json`);

if (command === 'check-escalations') {
  const holds = step5Escalations(ROOT, run);
  if (holds.length) fail(`Step 5a owner decision required:\n${holds.join('\n')}`, 1);
  console.log('Step 5a: no owner escalations');
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

/** Published items under an active Step-5 repair claim stay in the reader's
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
    // An unreadable historical claim file must not widen reader scope.
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
  if (!batch) fail('step5-scope: --batch is required; routing is batch-local');
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
      // This private hash-schema key predates step renumbering. Changing it
      // would invalidate unchanged historical manifest carriers, not content.
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

let ownerIdMigrations = null;
function currentItemId(id, batch = null) {
  if (ownerIdMigrations === null) {
    try { ownerIdMigrations = loadOwnerIdMigrations(ROOT, run); }
    catch (cause) { fail(`step5-scope: ${cause.message}`, 1); }
  }
  return ownerIdMigrations.find(row => row.old_id === id
    && (batch === null || String(row.batch) === String(batch)))?.new_id ?? id;
}

function currentDecisionCarrier(decision, target, live) {
  if (target?.subject_type === 'in-run-dependency') {
    return producerCarrier(target.id, target.producer_batch);
  }
  if (decision.verdict === 'context_accepted') {
    const context = externalContextReceipt(ROOT, run, decision, target);
    if (!context.valid) return undefined;
    const path = R('items', `${decision.id}.md`);
    return { item_sha256: sha256(readFileSync(path)), context_evidence: context.seal };
  }
  if (target?.subject_type === 'published-dependency') {
    const path = R('items', `${decision.id}.md`);
    return { item_sha256: existsSync(path) ? sha256(readFileSync(path)) : null };
  }
  if (target?.route === 'page') return pageCarrier(live?.pages[decision.id], target.order_anchor);
  const currentId = currentItemId(decision.id, target?.batch ?? null);
  if (live?.items[currentId]) return live.items[currentId];
  if (live?.pages[decision.id]) return pageCarrier(live.pages[decision.id]);
  return undefined;
}

let auditorCertificationRows = null;
function currentAuditorCertification(target) {
  if (!target?.direct || target.route !== 'item') return null;
  if (auditorCertificationRows === null) {
    try { auditorCertificationRows = loadAuditorCreatedCertifications(auditorCertificationsPath, { root: ROOT, run, steps: [5] }); }
    catch (cause) { fail(`step5-scope: ${cause.message}`, 1); }
  }
  const row = auditorCertificationRows.find(candidate => candidate.id === target.id && String(candidate.batch) === String(target.batch));
  // The shared reader already checked the exact current carriers, excluding
  // only the mechanical judge stamp. Do not reintroduce a raw-byte comparison.
  return row ?? null;
}

function ownerContextAddition(id, batch) {
  if (!/^rem-/.test(id)) return false;
  const itemPath = R('items', id + '.md');
  if (!existsSync(itemPath)) return false;
  const item = yaml().parse(split(readFileSync(itemPath, 'utf8')).fm);
  if (item?.kind !== 'remark' || item.proved_here !== false || item.provenance?.proof !== 'not-supplied') return false;
  const certificates = loadAuditorCreatedCertifications(auditorCertificationsPath, { root: ROOT, run, steps: [5] });
  return isCertifiedOwnerContextAddition({ id, batch, run, item, certificates });
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
  if (!existsSync(contract)) fail(`step5-scope: merged proof contract is missing at ${contract}`);
  // The batch contract is the authoritative authored-item scope.  Passing the
  // manifest selection again can accidentally include cited dependency ids
  // after a reader rewrite, which risk-report correctly rejects as outside
  // the contract.  Route exactly the contract's own scope instead.
  const result = spawnSync(process.execPath,
    [R('tools', 'risk-report.mjs'), contract, '--json'],
    { cwd: ROOT, encoding: 'utf8', timeout: 120_000 });
  if (result.status !== 0) fail(`step5-scope: risk routing failed\n${result.stderr || result.stdout}`, 1);
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
      if (finding?.observed_source != null) normalized.observed_source = finding.observed_source;
    }
    return normalized;
  });
}

function normalizeRefuterFindings(findings, batch, openedSet, reportError) {
  return normalizeFindings(findings, batch, openedSet, reportError, 'refuter');
}

function manifestProducers(manifests = manifestItems()) {
  const producers = new Map();
  for (const [producer, ids] of Object.entries(manifests)) for (const id of ids) {
    if (!producers.has(id)) producers.set(id, []);
    producers.get(id).push(producer);
  }
  return producers;
}

// Current manifests establish ownership. Older locally authored draft carriers
// need not contain pipeline_run, but a contradictory explicit marker must fail
// closed rather than importing another run's draft into this run's closure.
function currentRunDraft(item, owners) {
  return owners.length === 1 && item?.status === 'draft'
    && (item.pipeline_run === undefined || item.pipeline_run === run);
}

/** Exact published dependency closure reachable from each assigned consumer. */
function publishedDependencies(batchIds, allRunIds) {
  const Y = yaml();
  const owners = new Map();
  const claimed = claimedPublishedIds();
  const itemMetadata = new Map();
  const producers = manifestProducers();
  const metadataFor = (id) => {
    if (itemMetadata.has(id)) return itemMetadata.get(id);
    const path = R('items', `${id}.md`);
    let item = null;
    if (existsSync(path)) {
      try { item = Y.parse(split(readFileSync(path, 'utf8')).fm) ?? {}; }
      catch { /* An unreadable item is excluded from dependency traversal. */ }
    }
    itemMetadata.set(id, item);
    return item;
  };
  for (const consumer of batchIds) {
    const queue = [consumer];
    const seen = new Set();
    while (queue.length) {
      const id = queue.shift();
      if (seen.has(id)) continue;
      seen.add(id);
      const item = metadataFor(id);
      if (!item) continue;
      const dependencies = [...(Array.isArray(item.deps) ? item.deps : []),
        ...(Array.isArray(item.justified_by) ? item.justified_by : [])]
        .filter((target) => typeof target === 'string');
      for (const target of dependencies) {
        const targetItem = metadataFor(target);
        if (!targetItem) continue;
        // Current-manifest prerequisites are traversal context, never
        // published subjects; their real edges may reach published suppliers.
        if (allRunIds.has(target)) {
          queue.push(target);
          continue;
        }
        if (targetItem.status !== 'published' && !claimed.has(target)) continue;
        if (!owners.has(target)) owners.set(target, new Set());
        owners.get(target).add(consumer);
        queue.push(target);
      }
    }
  }
  return owners;
}

/** Other current-run producers reachable through declared item prerequisites.
 * Keep a concrete path; a run-wide inventory is not evidence of a dependency. */
function inRunDependencies(batch, consumers, manifests = manifestItems()) {
  const Y = yaml(), metadata = new Map(), producers = manifestProducers(manifests), result = new Map();
  const claimed = claimedPublishedIds();
  const itemFor = id => {
    if (!metadata.has(id)) {
      const path = R('items', `${id}.md`);
      let item = null;
      if (/^[a-z][a-z0-9-]*$/.test(id) && existsSync(path)) {
        try { item = Y.parse(split(readFileSync(path, 'utf8')).fm) ?? {}; }
        catch { /* Unreadable prerequisites cannot establish reachability. */ }
      }
      metadata.set(id, item);
    }
    return metadata.get(id);
  };
  for (const consumer of consumers) {
    const queue = [[consumer]], seen = new Set();
    while (queue.length) {
      const path = queue.shift(), id = path.at(-1);
      if (seen.has(id)) continue;
      seen.add(id);
      const item = itemFor(id);
      if (!item) continue;
      const deps = [...(Array.isArray(item.deps) ? item.deps : []),
        ...(Array.isArray(item.justified_by) ? item.justified_by : [])];
      for (const dep of deps) {
        if (typeof dep !== 'string' || path.includes(dep)) continue;
        const source = itemFor(dep), owners = producers.get(dep) ?? [];
        if (!source || (!owners.length && source.status !== 'published' && !claimed.has(dep))) continue;
        if (owners.length && !currentRunDraft(source, owners)) continue;
        const next = [...path, dep];
        if (owners.length === 1 && owners[0] !== batch) {
          if (!result.has(dep)) result.set(dep, { producer_batch: owners[0], consumers: new Map() });
          result.get(dep).consumers.set(consumer, next);
        }
        queue.push(next);
      }
    }
  }
  return result;
}

function findingDependencies(batch, consumers, findings, manifests = manifestItems()) {
  const runIds = new Set(Object.values(manifests).flat()), assigned = new Set(consumers);
  if (!findings.some(row => row?.subject_type === 'in-run-dependency'
    || runIds.has(row?.id) && !assigned.has(row.id))) return new Map();
  const dependencies = inRunDependencies(batch, consumers, manifests);
  for (const row of loadOwnerHistoricalRoutes(ROOT, run).filter(row => row.batch === String(batch))) {
    const finding = row.finding;
    if (!assigned.has(finding.consumer_id)) continue;
    let route = dependencies.get(finding.id);
    if (route?.consumers.has(finding.consumer_id) && !route.historical?.has(finding.consumer_id)) continue;
    if (!route) { route = { producer_batch: finding.producer_batch, consumers: new Map() }; dependencies.set(finding.id, route); }
    route.consumers.set(finding.consumer_id, finding.dependency_path.map(node => node.id));
    route.historical ??= new Map();
    if (!route.historical.has(finding.consumer_id)) route.historical.set(finding.consumer_id, new Map());
    route.historical.get(finding.consumer_id).set(finding.obligation, finding);
  }
  return dependencies;
}

// Definition carriers are exact source/manifest evidence even when there is no
// numbered-proof contract. The null contract hash records that absence; it is
// not a proof certificate and does not waive normal definition adjudication.
function definitionWithoutProofContract(id) {
  const path = R('items', `${id}.md`);
  if (!existsSync(path)) return false;
  try {
    const item = yaml().parse(split(readFileSync(path, 'utf8')).fm) ?? {};
    return item.kind === 'definition' && item.provenance?.proof === 'not-applicable';
  } catch { return false; }
}

function producerCarrier(id, producer) {
  const owners = Object.entries(manifestItems()).filter(([, ids]) => ids.includes(id)).map(([batch]) => batch);
  if (owners.length !== 1 || owners[0] !== String(producer)) return undefined;
  const contractPath = R('research', `${run}-batch-${producer}.proof-contracts.json`);
  if (!existsSync(contractPath) || (!readJson(contractPath, `producer ${producer} proof contract`).contracts?.[id]
    && !definitionWithoutProofContract(id)) || !manifestMetadata(String(producer)).itemRows.has(id)) return undefined;
  const carrier = liveFingerprints(String(producer)).items[id];
  return carrier?.item_sha256 ? { producer_batch: String(producer), ...carrier } : undefined;
}

function bindInRunFinding(finding, batch, dependencies, reportError) {
  const route = dependencies.get(finding.id), path = route?.consumers.get(finding.consumer_id);
  if (!route || !path) { reportError(`${finding.obligation} must name an assigned consumer reaching another exact current-run draft producer`); return; }
  const historicalBindings = route.historical?.get(finding.consumer_id);
  const frozen = historicalBindings?.get(finding.obligation);
  if (historicalBindings && !frozen) { reportError(`${finding.obligation} has no exact owner historical route authorization`); return; }
  const current = producerCarrier(finding.id, route.producer_batch);
  const prePath = hashPath(route.producer_batch, 'pre');
  const pre = readJson(prePath, `producer ${route.producer_batch} pre-reader snapshot`);
  for (const message of hashSnapshotErrors(pre, route.producer_batch, 'pre')) reportError(`${finding.obligation} producer baseline: ${message}`);
  const historical = pre.hashes?.[finding.id];
  if (!current || !historical || (historical.contract_sha256 === hashValue(null) && !definitionWithoutProofContract(finding.id)) || !['item_sha256', 'contract_sha256', 'manifest_sha256']
    .every(key => /^[a-f0-9]{64}$/.test(historical[key] ?? ''))) {
    reportError(`${finding.obligation} lacks exact current/pre-reader producer fingerprints`); return;
  }
  finding.producer_batch = route.producer_batch;
  finding.dependency_path = frozen ? frozen.dependency_path : path.map(id => ({ id, item_sha256: sha256(readFileSync(R('items', `${id}.md`))) }));
  finding.producer_carrier_at_split = current;
  finding.producer_pre_snapshot = {
    path: `research/${run}-step5-hash-${route.producer_batch}-pre.json`,
    sha256: sha256(readFileSync(prePath)), carrier: { producer_batch: route.producer_batch, ...historical },
  };
  // A pre-reader hash is a baseline, not proof that the reader observed those
  // bytes. Never rebind a historical counterexample to corrected live bytes.
  const observed = finding.observed_source;
  if (observed !== undefined && (!observed || Object.keys(observed).some(key => !['snapshot', 'item_sha256'].includes(key))
    || !['pre', 'current'].includes(observed.snapshot) || !/^[a-f0-9]{64}$/.test(observed.item_sha256 ?? ''))) {
    reportError(`${finding.obligation} has malformed observed_source`); return;
  }
  const carrier = observed?.snapshot === 'pre' ? finding.producer_pre_snapshot.carrier : current;
  if (observed && observed.item_sha256 !== carrier.item_sha256) reportError(`${finding.obligation} observed_source does not match its declared producer snapshot`);
  finding.observation_basis = observed?.snapshot ?? 'unbound';
  finding.observed_sha256 = observed ? hashValue(carrier) : null;
}

function validateInRunFinding(finding, batch, dependencies, reportError) {
  if (finding.observed_source !== undefined && (!finding.observed_source
    || Object.keys(finding.observed_source).some(key => !['snapshot', 'item_sha256'].includes(key))
    || !['pre', 'current'].includes(finding.observed_source.snapshot)
    || !/^[a-f0-9]{64}$/.test(finding.observed_source.item_sha256 ?? ''))) {
    reportError(`${finding.obligation} has malformed observed_source`);
  }
  const expected = { obligation: finding.obligation, id: finding.id, consumer_id: finding.consumer_id };
  bindInRunFinding(expected, batch, dependencies, reportError);
  if (finding.producer_batch !== expected.producer_batch
    || hashValue(finding.producer_pre_snapshot) !== hashValue(expected.producer_pre_snapshot)) {
    reportError(`${finding.obligation} producer identity/immutable pre-reader snapshot changed`);
  }
  // Path bytes at split remain historical evidence; require its exact IDs and
  // valid hashes, while independently rechecking current reachability.
  const path = finding.dependency_path;
  if (!Array.isArray(path) || path.length < 2 || path[0]?.id !== finding.consumer_id
    || path.at(-1)?.id !== finding.id || !unique(path.map(row => row.id))
    || path.some(row => !/^[a-z][a-z0-9-]*$/.test(row.id ?? '') || !/^[a-f0-9]{64}$/.test(row.item_sha256 ?? ''))) {
    reportError(`${finding.obligation} has invalid frozen dependency path`);
  }
  const carrier = finding.producer_carrier_at_split;
  if (carrier?.producer_batch !== finding.producer_batch || !['item_sha256', 'contract_sha256', 'manifest_sha256']
    .every(key => /^[a-f0-9]{64}$/.test(carrier?.[key] ?? ''))) reportError(`${finding.obligation} has invalid split producer carrier`);
  const observedCarrier = finding.observation_basis === 'pre' ? finding.producer_pre_snapshot?.carrier : carrier;
  if (finding.observation_basis !== (finding.observed_source?.snapshot ?? 'unbound')
    || (finding.observation_basis === 'unbound' ? finding.observed_sha256 !== null
      : finding.observed_source?.item_sha256 !== observedCarrier?.item_sha256 || finding.observed_sha256 !== hashValue(observedCarrier))) {
    reportError(`${finding.obligation} conflates original observation and current producer`);
  }
}

function reportOnlyFinding(finding, refuter = false) {
  const { observed_sha256: _observed, pre_sha256: _pre,
    producer_batch: _producer, dependency_path: _path,
    producer_carrier_at_split: _current, producer_pre_snapshot: _historical,
    observation_basis: _basis, owner_page_repair: _ownerPageRepair, ...row } = finding;
  if (refuter && finding.subject_type === 'in-run-dependency') {
    delete row.subject_type; delete row.consumer_id; delete row.observed_source;
  }
  return row;
}

/** A claimed published repair is a frozen Step-5 obligation even if later
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

/** Run one mechanical Step-5 subcommand without a shell. These composite
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
  if (result.error) fail(`step5-scope: ${label} could not launch (${result.error.message})`, 1);
  if (result.status !== 0) fail(`step5-scope: ${label} failed with exit ${result.status}`, 1);
}

const selfCommand = (...parts) => [fileURLToPath(import.meta.url), ...parts,
  '--root', ROOT, '--run', run];

if (command === 'post-reader') {
  const batch = requireBatch();
  runChecked(selfCommand('hash', '--batch', batch, '--label', 'post'), `batch ${batch} post-reader hash`);
  runChecked(selfCommand('split', '--batch', batch), `batch ${batch} routing split`);
  console.log(`step5-scope: batch ${batch} post-reader hash and split complete`);
  process.exit(0);
}

if (command === 'post-5a') {
  const batchIds = Object.keys(manifestItems()).sort((a, b) => Number(a) - Number(b));
  if (!batchIds.length) fail(`step5-scope: no batch manifests for ${run}`, 1);
  for (const batch of batchIds) {
    runChecked([R('tools', 'splice-plan.mjs'), '--run', run, '--batch', batch,
      '--update', '--accept-requires'], `batch ${batch} plan reconciliation`);
  }
  for (const batch of batchIds) {
    runChecked(selfCommand('hash', '--batch', batch, '--label', 'post-5a'),
      `batch ${batch} post-5a hash`);
  }
  runChecked([R('tools', 'touchlog.mjs'), 'snap', `research/${run}-touches.json`,
    'post-5a', '--idempotent'], 'post-5a touch snapshot');
  console.log(`step5-scope: reconciled and froze ${batchIds.length} batch(es) at post-5a`);
  process.exit(0);
}


// Current manifests include ad-hoc definitions/lemmas. Final checks instead use
// the sealed post-5a inventory: later 5b changes belong to the unchanged edge audit.
function directObligations(batch, scope, phase = 'adjudicate') {
  const snapshot = phase === 'final'
    ? readJson(hashPath(batch, 'post-5a'), 'post-5a inventory') : null;
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

if (command === 'pre-5a') {
  const batches = Object.keys(manifestItems());
  if (!batches.length) fail('step5-scope: no batches to stabilize', 1);
  for (const batch of batches) {
    runChecked(selfCommand('hash', '--batch', batch, '--label', 'pre-5a'), `batch ${batch} stabilized snapshot`);
  }
  process.exit(0);
}

if (command === 'hash') {
  const batch = requireBatch();
  const label = option('label');
  if (label === 'pre' && argv.includes('--validate-author')) {
    runChecked([R('tools', 'tsx-run.mjs'), R('tools', 'author-check.mts'), run, batch], `batch ${batch} author checks`);
  }
  if (!['pre', 'post', 'pre-5a', 'post-5a'].includes(label)) fail('step5-scope: unsupported hash label');
  const ids = manifestItems()[batch];
  if (!ids) fail(`step5-scope: no manifest for batch ${batch}`);
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
  console.log(`step5-scope: hashed ${ids.length} item(s) of batch ${batch} as ${label}`);
  process.exit(0);
}

if (command === 'split') {
  const batch = requireBatch();
  const ids = manifestItems()[batch];
  if (!ids) fail(`step5-scope: no manifest for batch ${batch}`);
  const pre = readJson(hashPath(batch, 'pre'), `batch ${batch} pre-reader hash`);
  const post = readJson(hashPath(batch, 'post'), `batch ${batch} post-reader hash`);
  const snapshotErrors = [
    ...hashSnapshotErrors(pre, batch, 'pre').map((message) => `pre ${message}`),
    ...hashSnapshotErrors(post, batch, 'post').map((message) => `post ${message}`),
  ];
  if (snapshotErrors.length) fail(`step5-scope: batch ${batch} hash snapshot invalid: ${snapshotErrors.join('; ')}`);
  if (!sameSet((post.manifest ?? Object.keys(post.hashes ?? {})).map(id => currentItemId(id, batch)), ids)) {
    fail(`step5-scope: batch ${batch} post-reader hash does not match the current manifest`);
  }
  const currentPages = (manifestPages()[batch] ?? []).map((page) => page.id);
  if (!sameSet(post.page_manifest ?? Object.keys(post.page_hashes ?? {}), currentPages)) {
    fail(`step5-scope: batch ${batch} post-reader page hash does not match the current manifest`);
  }
  const derived = expectedSplit(pre, post);
  if (derived.removed.length) {
    fail(`step5-scope: batch ${batch} reader removed ${derived.removed.join(', ')}; restore the files and manifest so Alpha can adjudicate the proposed deletion from the actual mathematics`);
  }
  if (derived.pagesRemoved.length
    || derived.pageManifestPre.some((id) => pageFileHash(pre.page_hashes?.[id]) !== null
      && pageFileHash(post.page_hashes?.[id]) === null)) {
    fail(`step5-scope: batch ${batch} reader removed a page or its bytes; restore it so Alpha can adjudicate from the actual page prose`);
  }
  const highRisk = highRiskItems(ids, batch).sort();
  const readerText = existsSync(readerFindingsPath(batch))
    ? readFileSync(readerFindingsPath(batch), 'utf8')
    : fail(`step5-scope: batch ${batch} reader findings artifact is missing`, 1);
  let readerReport;
  try { readerReport = JSON.parse(readerText); }
  catch (cause) { fail(`step5-scope: batch ${batch} reader findings artifact is invalid JSON (${cause.message})`, 1); }
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
  const inRun = findingDependencies(batch, derived.manifestPost, Array.isArray(readerReport.findings) ? readerReport.findings : []);
  const readerAllowed = new Set([...derived.manifestPost, ...derived.pageManifestPost, ...published.keys(), ...inRun.keys()]);
  const readerFindings = normalizeFindings(Array.isArray(readerReport.findings) ? readerReport.findings : [],
    batch, readerAllowed, readerError, 'reader');
  const live = liveFingerprints(batch);
  const ownerPages = loadOwnerPageRepairs(ROOT, run, batch);
  for (const finding of readerFindings) {
    const expectedType = derived.manifestPost.includes(finding.id) ? 'in-flight-item'
      : derived.pageManifestPost.includes(finding.id) ? 'page'
        : inRun.has(finding.id) ? 'in-run-dependency' : 'published-dependency';
    if (finding.subject_type !== expectedType) readerError(`${finding.obligation} must use subject_type ${expectedType}`);
    if (expectedType === 'published-dependency'
      && (!finding.consumer_id || !published.get(finding.id)?.has(finding.consumer_id))) {
      readerError(`${finding.obligation} must name an assigned consumer that reaches published dependency ${finding.id}`);
    }
    const ownerPage = expectedType === 'page' ? ownerPageFindingRepair(ownerPages, batch, finding) : null;
    if ((derived.touched.includes(finding.id) || derived.pagesTouched.includes(finding.id)) && !ownerPage) {
      readerError(`${finding.obligation} names changed carrier ${finding.id}; repaired work belongs in the touched route, not the open-findings artifact`);
    }
    if (expectedType === 'in-run-dependency') {
      bindInRunFinding(finding, batch, inRun, readerError);
      continue;
    }
    if (finding.observed_source !== undefined) readerError(`${finding.obligation} observed_source is only supported for in-run-dependency`);
    const publishedText = expectedType === 'published-dependency' && existsSync(R('items', `${finding.id}.md`))
      ? readFileSync(R('items', `${finding.id}.md`), 'utf8') : null;
    const carrier = expectedType === 'in-flight-item' ? live.items[finding.id]
      : expectedType === 'page' ? pageCarrier(live.pages[finding.id])
        : { item_sha256: publishedText === null ? null : sha256(publishedText) };
    if (ownerPage) {
      // The native reader did not bind an exact full-byte observation. Preserve
      // that uncertainty; the registered before carrier is routing provenance.
      finding.observed_sha256 = null;
      finding.observation_basis = 'unbound';
      finding.owner_page_repair = { ...ownerPage.binding,
        before_carrier_sha256: hashValue(pageCarrier(ownerPage.capture_value.before_carrier)),
        before_provenance: ownerPage.capture_value.before_provenance };
    } else finding.observed_sha256 = hashValue(carrier);
    if (publishedText !== null) finding.pre_sha256 = itemHashGuard(publishedText);
  }
  if (readerErrors.length) fail(`step5-scope: batch ${batch} reader findings invalid: ${readerErrors.join('; ')}`, 1);
  const refuterPages = [...derived.pageManifestPost].sort();
  const refuterScope = [...new Set([...derived.untouched, ...highRisk, ...refuterPages,
    ...readerFindings.filter(row => row.subject_type === 'in-run-dependency').map(row => row.id)])].sort();
  const group = groups().byBatch[batch];
  if (!group) fail(`step5-scope: batch ${batch} has no Alpha group`);
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
  console.log(`step5-scope: batch ${batch} — ${ids.length} current item(s), ${derived.touched.length} touched, ${derived.untouched.length} untouched, ${derived.added.length} added, ${derived.removed.length} removed, ${derived.pagesTouched.length} page(s) touched, ${highRisk.length} high-risk`);
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
  const inRun = findingDependencies(batch, scope.manifest_post ?? [], scope.reader_findings ?? []);
  for (const finding of scope.reader_findings ?? []) if (finding.subject_type === 'in-run-dependency') {
    validateInRunFinding(finding, batch, inRun, error);
  }
  const refuterFindings = normalizeRefuterFindings(findings, batch, openedSet, error)
    .map((finding) => {
      const source = (scope.reader_findings ?? []).find(row => row.id === finding.id && row.subject_type === 'in-run-dependency');
      if (source) {
        const carrier = producerCarrier(source.id, source.producer_batch);
        finding.subject_type = 'in-run-dependency';
        finding.consumer_id = source.consumer_id;
        finding.observed_source = { snapshot: 'current', item_sha256: carrier?.item_sha256 };
        bindInRunFinding(finding, batch, inRun, error);
      } else finding.observed_sha256 = hashValue(live.items[finding.id] ?? pageCarrier(live.pages[finding.id]));
      return finding;
    });
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
  console.log(`step5-scope: batch ${batch} — opened all ${opened.length} refuter-routed item(s), collected ${findings.length} finding(s)`);
  process.exit(0);
}

function stabilizedObligations(batch, scope) {
  if (scope.version === 3) return [];
  if (!existsSync(hashPath(batch, 'pre-5a'))) return [];
  const reader = readJson(hashPath(batch, 'post'), `batch ${batch} reader snapshot`);
  const stabilized = readJson(hashPath(batch, 'pre-5a'), `batch ${batch} stabilized snapshot`);
  const errors = hashSnapshotErrors(stabilized, batch, 'pre-5a');
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
  for (const group of step5Adjudicators(ROOT, run, assignment.rows)
    .filter((row) => !onlyGroup || row.label === onlyGroup || row.scopeGroup === onlyGroup)) {
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
        (manifests[candidate] ?? []).includes(currentItemId(decision.id, candidate))
        || (pages[candidate] ?? []).some((page) => page.id === decision.id));
      if (decision.verdict === 'context_accepted') {
        const context = externalContextReceipt(ROOT, run, decision, target, group.label);
        if (!context.valid) fail(`group ${group.label} ${decision.obligation}: ${context.error}`, 1);
        decision.context_evidence = context.seal;
      }
      const carrier = currentDecisionCarrier(decision, target, live.get(batch));
      if (carrier === undefined) fail(`group ${group.label} decision ${decision.obligation ?? '(missing)'} has no current carrier`, 1);
      decision.subject_sha256 = hashValue(carrier);
    }
    writeFileSync(path, `${JSON.stringify(doc, null, 2)}\n`);
    console.log(`step5-scope: stamped ${doc.decisions.length} current carrier hash(es) for group ${group.label}`);
  }
  process.exit(0);
}

if (command === 'check') {
  const phase = option('phase', 'split');
  if (!['split', 'adjudicate', 'final'].includes(phase)) fail('step5-scope: --phase must be split, adjudicate, or final');
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
      const baselinePath = hashPath(batch, 'pre-5a');
      const baseline = readJson(baselinePath, 'authored baseline');
      if (scope.run !== run || String(scope.batch) !== batch
        || scope.group !== assignment.byBatch[batch]
        || assignment.rows.filter((group) => group.covers.includes(batch)).length !== 1) error('scope-identity', `batch ${batch} has wrong identity or group`);
      if (scope.baseline_sha256 !== sha256(readFileSync(baselinePath))
        || !sameSet(scope.items ?? [], baseline.manifest ?? [])
        || !sameSet(scope.pages ?? [], baseline.page_manifest ?? [])) error('scope-stale', `batch ${batch} authored baseline changed`);
      for (const message of hashSnapshotErrors(baseline, batch, 'pre-5a')) error('hash-invalid', message);
      if (phase !== 'final') {
        for (const id of scope.items ?? []) if (!(manifests[batch] ?? []).includes(id)) error('scope-removal', `[${id}] authored item removed before 5b`);
        if (!sameSet(scope.pages ?? [], (pages[batch] ?? []).map((p) => p.id))) error('scope-page-change', `batch ${batch} changed its page scope`);
        for (const id of manifests[batch] ?? []) if (!(scope.items ?? []).includes(id) && !/^(def|lem)-/.test(id) && !ownerContextAddition(id, batch)) error('scope-addition', `[${id}] only local definitions and lemmas may be added at 5a`);
      }
      continue;
    }
    const pre = readJson(hashPath(batch, 'pre'), `batch ${batch} pre-reader hash`);
    const post = readJson(hashPath(batch, 'post'), `batch ${batch} post-reader hash`);
    const derived = expectedSplit(pre, post);
    // Owner migration projects historical post-reader IDs onto current
    // carriers only. Actual reader removals remain forbidden, unchanged.
    if (derived.removed.length) error('reader-removal', `batch ${batch} reader removed ${derived.removed.join(', ')}`);
    const currentPostIds = derived.manifestPost.map(id => currentItemId(id, batch));
    for (const id of currentPostIds) if (!(manifests[batch] ?? []).includes(id)) {
      error('scope-removal', `[${id}] post-reader item removed without a valid owner representation migration`);
    }
    for (const id of manifests[batch] ?? []) if (!currentPostIds.includes(id)
      && !/^(def|lem)-/.test(id) && !ownerContextAddition(id, batch)) error('scope-addition', `[${id}] unsupported post-reader item addition`);
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
    // Freeze authority per page, not the registry inventory: adding another
    // independently registered page cannot change a previously split finding.
    let ownerPages = [];
    try { ownerPages = loadOwnerPageRepairs(ROOT, run, batch, { requireCurrent: false }); }
    catch (cause) { error('owner-page-authority-invalid', `batch ${batch}: ${cause.message}`); }
    for (const finding of scope.reader_findings ?? []) {
      const ownerPage = ownerPageFindingRepair(ownerPages, batch, finding);
      if (!ownerPage && finding.owner_page_repair) error('owner-page-authority-invalid', `${finding.obligation} has no matching frozen page authority`);
      if (ownerPage) {
        const expected = { ...ownerPage.binding,
          before_carrier_sha256: hashValue(pageCarrier(ownerPage.capture_value.before_carrier)),
          before_provenance: ownerPage.capture_value.before_provenance };
        if (hashValue(finding.owner_page_repair) !== hashValue(expected)
          || finding.observed_sha256 !== null || finding.observation_basis !== 'unbound') {
          error('owner-page-authority-stale', `${finding.obligation} changed its frozen owner-before binding or invented a reader observation`);
        }
      }
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
          const inRun = findingDependencies(batch, derived.manifestPost,
            [...(Array.isArray(report.findings) ? report.findings : []), ...(scope.reader_findings ?? [])], manifests);
          const normalized = normalizeFindings(Array.isArray(report.findings) ? report.findings : [], batch,
            new Set([...derived.manifestPost, ...derived.pageManifestPost, ...published.keys(), ...inRun.keys()]), reportError, 'reader');
          const stored = (scope.reader_findings ?? []).map(finding => reportOnlyFinding(finding));
          if (JSON.stringify(normalized) !== JSON.stringify(stored)) reportError('findings no longer match the routed obligations');
          for (const finding of scope.reader_findings ?? []) {
            if (finding.subject_type === 'in-run-dependency') {
              validateInRunFinding(finding, batch, inRun, reportError);
              continue;
            }
            if (inRun.has(finding.id)) reportError(`${finding.obligation} must retain subject_type in-run-dependency`);
            if (!finding.owner_page_repair && !/^[a-f0-9]{64}$/.test(finding.observed_sha256 ?? '')) reportError(`${finding.obligation} has no valid observed carrier hash`);
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
          const stored = (scope.refuter_findings ?? []).map(finding => reportOnlyFinding(finding, true));
          if (JSON.stringify(normalized) !== JSON.stringify(stored)) reportError('findings no longer match the collected obligations');
          const inRun = findingDependencies(batch, scope.manifest_post ?? [], scope.reader_findings ?? [], manifests);
          for (const finding of scope.refuter_findings ?? []) {
            if (finding.subject_type === 'in-run-dependency') {
              validateInRunFinding(finding, batch, inRun, reportError);
              continue;
            }
            if (!/^[a-f0-9]{64}$/.test(finding.observed_sha256 ?? '')) reportError(`${finding.obligation} has no valid observed carrier hash`);
          }
          for (const message of reportErrors) error('refuter-invalid', `batch ${batch}: ${message}`);
        } catch (cause) { error('refuter-invalid', `batch ${batch} report is invalid JSON (${cause.message})`); }
      }
      const expectedRefuterScope = [...new Set([...(scope.untouched ?? []), ...(scope.high_risk ?? []), ...derived.pageManifestPost,
        ...(scope.reader_findings ?? []).filter(row => row.subject_type === 'in-run-dependency').map(row => row.id)])];
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
    const runRows = ledgerRows.filter((row) => row.run === run);
    const ownershipErrors = [];
    const activeMine = activeOwnershipRows(runRows, ownershipErrors);
    for (const message of ownershipErrors) error('ledger-invalid', message);
    const mine = activeMine;
    const earlyRows = activeMine.filter((row) => ['5a-adjudicate'].includes(row.caught_at_stage));
    // Owner adjudications can bind one already-applied repair or one physical
    // defect to distinct immutable observations. They never rewrite a finding.
    const ownerEvidencePath = R('research', `${run}-step5-owner-repair-evidence.json`);
    const ownerEvidence = existsSync(ownerEvidencePath)
      ? readJson(ownerEvidencePath, 'owner repair evidence') : null;
    const closedOwnerRepairs = new Set(['fixed', 'narrowed', 'dropped']);
    const evidenceBinds = (entry, row) => {
      if (ownerEvidence?.version !== 1 || ownerEvidence.run !== run
        || !entry || entry.id !== row?.subject || entry.defect_id !== row?.defect_id
        || entry.ledger_row_sha256 !== hashValue(row)
        || !closedOwnerRepairs.has(row.disposition)
        || typeof entry.reason !== 'string' || entry.reason.trim().length < 80
        || typeof entry.current_path !== 'string' || !existsSync(R(entry.current_path))
        || sha256(readFileSync(R(entry.current_path))) !== entry.current_raw_sha256
        || !Array.isArray(entry.evidence) || !entry.evidence.length) return false;
      return entry.evidence.every(ref => typeof ref?.path === 'string'
        && existsSync(R(ref.path)) && /^[a-f0-9]{64}$/.test(ref.sha256 ?? '')
        && sha256(readFileSync(R(ref.path))) === ref.sha256);
    };
    const ownerSharedDefect = (row, left, right) => (ownerEvidence?.shared_defects ?? []).some(entry =>
      evidenceBinds(entry, row) && left.id === right.id && left.id === entry.id
      && left.repair_confidence === 1 && right.repair_confidence === 1
      && Array.isArray(entry.obligations)
      && [left, right].some(value => typeof value.same_defect_evidence === 'string'
        && value.same_defect_evidence.trim().length >= 40
        && entry.obligations.some(binding => binding.obligation === value.same_defect_as))
      && [left, right].every(value => entry.obligations.some(binding =>
        binding.obligation === value.obligation && binding.target_sha256 === hashValue(value.target))));
    const priorAppliedRepair = (decision, target, rows) => (ownerEvidence?.prior_applied_repairs ?? []).some(entry => {
      const row = rows.find(value => value.defect_id === entry.defect_id);
      if (!evidenceBinds(entry, row) || decision.repair_confidence !== 1
        || entry.obligation !== decision.obligation || entry.target_sha256 !== hashValue(target)
        || entry.after_raw_sha256 !== entry.current_raw_sha256
        || entry.before_raw_sha256 === entry.after_raw_sha256
        || !/^[a-f0-9]{64}$/.test(entry.before_raw_sha256 ?? '')
        || typeof entry.before_literal !== 'string' || !entry.before_literal
        || typeof entry.after_literal !== 'string' || !entry.after_literal) return false;
      const original = entry.original_owner_artifact;
      if (typeof original?.path !== 'string' || !existsSync(R(original.path))) return false;
      const originalRaw = readFileSync(R(original.path), 'utf8');
      if (sha256(originalRaw) !== original.sha256 || !originalRaw.includes(entry.before_raw_sha256)
        || !originalRaw.includes(entry.after_raw_sha256)) return false;
      try { if (JSON.parse(originalRaw).run !== run) return false; } catch { return false; }
      const current = readFileSync(R(entry.current_path), 'utf8');
      if (current.split(entry.after_literal).length !== 2) return false;
      return sha256(current.replace(entry.after_literal, entry.before_literal)) === entry.before_raw_sha256;
    });
    const referenced = new Map();
    const contextualDefects = new Set();
    const stabilizedChecks = [];
    const findingSourceClasses = new Map();
    function findingSourceClass(claim) {
      const match = /^(reader|refuter):([1-9]\d*):([1-9]\d*)$/.exec(claim?.obligation ?? '');
      if (!match || claim.route !== (match[1] === 'reader' ? 'reader' : 'flagged')) return null;
      const key = `${claim.obligation}:${hashValue(claim.target)}`;
      if (findingSourceClasses.has(key)) return findingSourceClasses.get(key);
      const batch = match[2], scope = scopes[batch] ?? readJson(scopePath(batch), 'native finding source class');
      const finding = scope[match[1] === 'reader' ? 'reader_findings' : 'refuter_findings']
        ?.find(row => row.obligation === claim.obligation);
      const { route: _route, ...target } = claim.target ?? {};
      let kind = null;
      if (scope.version === 2 && scope.run === run && String(scope.batch) === batch
        && finding?.id === claim.id && hashValue(finding) === hashValue(target)) {
        if (typeof finding.subject_type === 'string') kind = finding.subject_type;
        else if (match[1] === 'refuter' && (scope.refuter_scope ?? []).includes(claim.id)) {
          // Ordinary native refuters predate subject_type. Resolve that absent
          // optional field from their actual typed immutable reader-post source;
          // an in-run producer or a forged class cannot use this inference.
          const post = readJson(hashPath(batch, 'post'), 'native refuter source class snapshot');
          const page = (scope.page_manifest_post ?? []).includes(claim.id) && (post.page_manifest ?? []).includes(claim.id);
          const item = (scope.manifest_post ?? []).includes(claim.id) && (post.manifest ?? []).includes(claim.id);
          const observed = page ? post.page_hashes?.[claim.id] : post.hashes?.[claim.id];
          if (page !== item && hashSnapshotErrors(post, batch, 'post').length === 0
            && (page ? ['file_sha256', 'manifest_sha256'] : ['item_sha256', 'contract_sha256', 'manifest_sha256'])
              .every(field => /^[a-f0-9]{64}$/.test(observed?.[field] ?? ''))
            && finding.observed_sha256 === hashValue(page ? pageCarrier(observed) : observed)) kind = page ? 'page' : 'in-flight-item';
        }
      }
      findingSourceClasses.set(key, kind);
      return kind;
    }
    const liveByBatch = new Map();
    const contractsByBatch = new Map();
    const ownableSubjects = new Set();
    const liveFor = (batch) => {
      if (!liveByBatch.has(batch)) liveByBatch.set(batch, liveFingerprints(batch));
      return liveByBatch.get(batch);
    };
    const riskReviewOnlyDelta = (target, before, current) => {
      if (target.route !== 'touched' || !before || !current
        || before.item_sha256 !== current.item_sha256
        || before.manifest_sha256 !== current.manifest_sha256) return false;
      if (!contractsByBatch.has(target.batch)) {
        contractsByBatch.set(target.batch, readJson(R('research', `${run}-batch-${target.batch}.proof-contracts.json`),
          `batch ${target.batch} proof contract`).contracts ?? {});
      }
      const entry = contractsByBatch.get(target.batch)[target.id];
      if (!entry || !Object.hasOwn(entry, 'risk_review')) return false;
      const { risk_review: _riskReview, ...withoutReview } = entry;
      return hashValue(withoutReview) === before.contract_sha256
        && hashValue(entry) === current.contract_sha256;
    };

    for (const group of step5Adjudicators(ROOT, run, assignment.rows)) {
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
      if (!existsSync(path)) { error('decisions-missing', `group ${group.label} has no 5a decisions file`); continue; }
      const doc = readJson(path, `group ${group.label} decisions`);
      if (doc.version !== 1 || doc.run !== run || doc.group !== group.label || !Array.isArray(doc.decisions)) {
        error('decisions-shape', `group ${group.label} has wrong version, run, group, or decisions array`);
        continue;
      }
      const seen = new Set(), recognizedStabilizedShares = new Set(), pendingStabilizedAmendments = [];
      const expected = new Map(owed.map((row) => [row.obligation, row]));
      for (const decision of doc.decisions) {
        const decisionErrorStart = errors.length, candidateSharing = [];
        if (!decision?.obligation || seen.has(decision.obligation)) {
          error('decision-duplicate', `group ${group.label} repeats or omits an obligation id`); continue;
        }
        seen.add(decision.obligation);
        const supplemental = String(decision.obligation).startsWith('gate:');
        const target = expected.get(decision.obligation);
        if (!target && !supplemental) { error('decision-extra', `${decision.obligation} is not owed to group ${group.label}`); continue; }
        if (target && (decision.id !== target.id || decision.route !== target.route)) error('decision-route', `[${target.id}] ${decision.obligation} has wrong id or route`);
        if (target?.subject_type === 'in-run-dependency') {
          if (decision.producer_batch !== target.producer_batch || decision.consumer_id !== target.consumer_id) {
            error('decision-producer-binding', `${decision.obligation} must retain exact producer_batch and consumer_id`);
          }
          if (target.observation_basis === 'unbound' && (decision.historical_delta_unknown !== true
            || typeof decision.owner_resolution !== 'string' || decision.owner_resolution.trim().length < 40)) {
            error('decision-historical-observation', `${decision.obligation} has no original observed-byte binding; preserve historical_delta_unknown and explicit owner resolution/evidence`);
          }
        }
        if (supplemental) {
          if (decision.route !== 'gate') error('decision-route', `${decision.obligation} must use route gate`);
          if (!groupSubjects.has(decision.id)) error('decision-route', `${decision.obligation} names ${decision.id} outside group ${group.label}`);
        }
        if (decision.verdict === 'context_accepted') {
          const context = externalContextReceipt(ROOT, run, decision, target, group.label);
          if (!target || !context.valid) {
            error('decision-context-invalid', `${decision.obligation}: ${context.error ?? 'no owed target'}`);
          } else {
            if (typeof decision.evidence !== 'string' || !decision.evidence.trim()) {
              error('decision-evidence', `${decision.obligation} has no evidence`);
            }
            if (hashValue(decision.context_evidence) !== hashValue(context.seal)) {
              error('decision-context-stale', `${decision.obligation} context evidence needs current stamping`);
            }
            const carrier = currentDecisionCarrier(decision, target, null);
            if (decision.subject_sha256 !== hashValue(carrier)) {
              error('decision-context-stale', `${decision.obligation} context carrier changed`);
            }
            // Retain the original obligation and outside defect as context,
            // with no claim that the published interface was fixed or false.
            contextualDefects.add(context.defect_id);
          }
          continue;
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
        if (target?.owner_page_repair && (decision.historical_delta_unknown !== true
          || typeof decision.owner_resolution !== 'string' || decision.owner_resolution.trim().length < 40)) {
          error('owner-page-observation-unbound', `${decision.obligation} needs explicit owner resolution of the unbound original reader observation`);
        }
        const accepted = target?.direct && decision.verdict === 'accepted';
        const cleanChange = decision.verdict === 'reviewed_no_defect';
        const currentContentReview = decision.change_kind === 'current_content_review'
          && decision.historical_delta_unknown === true
          && typeof decision.owner_resolution === 'string'
          && decision.owner_resolution.trim().length >= 40;
        if (accepted && decision.defect_ids?.length !== 0) error('decision-ledger-refs', `${decision.obligation} accepted content must have empty defect_ids`);
        if (target?.direct && decision.verdict === 'repaired' && decision.repair_confidence !== 1) error('repair-confidence', `${decision.obligation} needs an honest complete repair`);
        if (cleanChange && ((!['metadata', 'audit_enrichment'].includes(decision.change_kind) && !currentContentReview)
          || decision.defect_ids?.length !== 0)) {
          error('decision-clean-change', `${decision.obligation} needs metadata/audit_enrichment or an explicit owner-resolved current_content_review with historical_delta_unknown, and empty defect_ids`);
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
          const compatible = (prior) => {
          const sameLocation = (left, right) => String(left ?? '').trim().toLowerCase() === String(right ?? '').trim().toLowerCase();
          const sameObservedCarrier = /^[a-f0-9]{64}$/.test(prior?.target?.observed_sha256 ?? '')
            && prior.target.observed_sha256 === target?.observed_sha256;
          const sharedFinding = prior && decision.same_defect_as === prior.obligation
            && typeof decision.same_defect_evidence === 'string' && decision.same_defect_evidence.trim()
            && prior.id === decision.id
            && ['reader', 'flagged'].includes(prior.route)
            && ['reader', 'flagged'].includes(decision.route)
            && prior.verdict === decision.verdict
            && findingSourceClass(prior) !== null
            && findingSourceClass(prior) === findingSourceClass({ ...decision, target })
            && prior.target?.defect === target?.defect
            && ((prior.target?.severity === target?.severity
              && sameLocation(prior.target?.location, target?.location))
              || sameObservedCarrier);
          const sharedCausalAddition = prior && !['reader', 'flagged'].includes(prior.route) && target?.added
            && decision.same_defect_as === prior.obligation
            && decision.causal_subject === prior.id
            && typeof decision.same_defect_evidence === 'string'
            && decision.same_defect_evidence.trim();
          // A genuine added repair helper can be encountered before the
          // original cross-batch finding. Keep that causal sharing directional
          // in evidence, but independent of group/decision iteration order.
          const causalCurrent = { ...decision, target, decision_path: `research/${run}-alpha-${group.label}-5a-decisions.json` };
          const causalHelper = prior?.target?.added === true ? prior : target?.added === true ? causalCurrent : null;
          const causalFinding = causalHelper === prior ? causalCurrent : prior;
          const causalMatch = /^(reader|refuter):([1-9]\d*):([1-9]\d*)$/.exec(causalFinding?.obligation ?? '');
          let sharedFindingCausalAddition = false;
          if (prior && causalHelper?.target?.added === true && causalMatch
            && causalFinding.route === (causalMatch[1] === 'reader' ? 'reader' : 'flagged')
            && causalHelper.same_defect_as === causalFinding.obligation && causalHelper.causal_subject === causalFinding.id
            && typeof causalHelper.same_defect_evidence === 'string' && causalHelper.same_defect_evidence.trim().length >= 40
            && ['accepted_repair', 'amended_repair'].includes(causalHelper.verdict)
            && ['confirmed_fatal', 'confirmed_nonfatal'].includes(causalFinding.verdict)) {
            const batch = causalMatch[2], scope = scopes[batch] ?? readJson(scopePath(batch), 'causal source finding scope');
            const finding = scope[causalMatch[1] === 'reader' ? 'reader_findings' : 'refuter_findings']
              ?.find(row => row.obligation === causalFinding.obligation);
            const { route: _route, ...findingTarget } = causalFinding.target ?? {};
            let sourceBinding = false;
            if (finding?.subject_type === 'in-run-dependency') {
              const producer = String(finding.producer_batch), path = hashPath(producer, 'pre');
              const pre = readJson(path, 'causal producer immutable pre-reader snapshot');
              sourceBinding = Boolean(producerCarrier(finding.id, producer))
                && finding.producer_pre_snapshot?.path === `research/${run}-step5-hash-${producer}-pre.json`
                && finding.producer_pre_snapshot.sha256 === sha256(readFileSync(path))
                && hashSnapshotErrors(pre, producer, 'pre').length === 0
                && hashValue(finding.producer_pre_snapshot.carrier) === hashValue({ producer_batch: producer, ...pre.hashes?.[finding.id] });
            } else if (finding) {
              const post = readJson(hashPath(batch, 'post'), 'causal source immutable reader-post snapshot');
              const page = finding.subject_type === 'page' || (scope.page_manifest_post ?? []).includes(finding.id);
              const observed = page ? post.page_hashes?.[finding.id] : post.hashes?.[finding.id];
              sourceBinding = hashSnapshotErrors(post, batch, 'post').length === 0
                && (page ? (scope.page_manifest_post ?? []).includes(finding.id) && (post.page_manifest ?? []).includes(finding.id)
                  : (scope.manifest_post ?? []).includes(finding.id) && (post.manifest ?? []).includes(finding.id))
                && (page ? ['file_sha256', 'manifest_sha256'] : ['item_sha256', 'contract_sha256', 'manifest_sha256'])
                  .every(key => /^[a-f0-9]{64}$/.test(observed?.[key] ?? ''))
                && finding.observed_sha256 === hashValue(page ? pageCarrier(observed) : observed);
            }
            const row = mine.find(row => row.defect_id === defectId);
            const referencesBoth = [[causalHelper.decision_path, causalHelper.obligation], [causalFinding.decision_path, causalFinding.obligation]]
              .every(([path, obligation]) => Array.isArray(row?.adjudication_ref)
                && row.adjudication_ref.some(ref => ref?.path === path && ref.obligation === obligation));
            sharedFindingCausalAddition = scope.version === 2 && scope.run === run && String(scope.batch) === batch
              && finding?.id === causalFinding.id && hashValue(finding) === hashValue(findingTarget) && sourceBinding
              && (causalMatch[1] !== 'refuter' || (scope.refuter_scope ?? []).includes(causalFinding.id))
              && row?.subject === causalFinding.id && row.caught_at_stage === '5a-adjudicate'
              && ['fixed', 'narrowed', 'dropped'].includes(row.disposition) && referencesBoth
              && (causalFinding.verdict === 'confirmed_fatal' ? row.severity === 'fatal' : row.severity !== 'fatal');
          }
          // One historical supplier defect may be the producer's reader
          // repair and another batch's uneditable reader finding. Retain both
          // obligations without manufacturing a second defect-ledger row.
          const foreign = target?.subject_type === 'in-run-dependency' ? { target, verdict: decision.verdict }
            : prior?.target?.subject_type === 'in-run-dependency' ? prior : null;
          const producer = foreign && foreign.target === target ? prior : { target, route: decision.route, verdict: decision.verdict };
          const explicitShared = prior && [
            [decision.same_defect_as, prior.obligation, decision.same_defect_evidence],
            [prior.same_defect_as, decision.obligation, prior.same_defect_evidence],
          ].some(([reference, obligation, evidence]) => reference === obligation
            && typeof evidence === 'string' && evidence.trim().length >= 40);
          const sharedProducerRepair = prior && foreign && prior.id === decision.id && explicitShared
            && producer?.target?.batch === foreign.target.producer_batch
            && producer.route === 'touched' && ['accepted_repair', 'amended_repair'].includes(producer.verdict)
            && ['confirmed_fatal', 'confirmed_nonfatal'].includes(foreign.verdict)
            && hashValue(foreign.target.producer_pre_snapshot?.carrier) === hashValue({ producer_batch: foreign.target.producer_batch,
              ...readJson(hashPath(foreign.target.producer_batch, 'pre'), 'producer pre-reader snapshot').hashes?.[foreign.target.id] });
          // The refuter can independently flag the reader's post-reader
          // carrier, then Alpha amends that same item or typed page. Keep both exact
          // obligations for the one defect, in either decision iteration order.
          const currentDecision = { ...decision, target };
          const refuted = decision.route === 'flagged' ? currentDecision : prior?.route === 'flagged' ? prior : null;
          const repairedDecision = refuted === currentDecision ? prior : currentDecision;
          const refuterMatch = /^refuter:([1-9]\d*):([1-9]\d*)$/.exec(refuted?.obligation ?? '');
          // Coarse defect classes can differ for one actual typing/inference
          // error. Require two actual same-batch reader/refuter rows, an exact
          // immutable observed carrier, and explicit mathematical equivalence.
          const readerDecision = decision.route === 'reader' ? currentDecision : prior?.route === 'reader' ? prior : null;
          const readerMatch = /^reader:([1-9]\d*):([1-9]\d*)$/.exec(readerDecision?.obligation ?? '');
          let sharedReclassifiedFinding = false;
          if (prior && prior.id === decision.id && explicitShared && readerMatch && refuterMatch
            && readerMatch[1] === refuterMatch[1]
            && readerDecision.verdict === refuted.verdict
            && ['confirmed_fatal', 'confirmed_nonfatal'].includes(refuted.verdict)
            && readerDecision.target?.defect !== refuted.target?.defect
            && readerDecision.target?.severity === refuted.target?.severity
            && sameObservedCarrier) {
            const findingBatch = readerMatch[1];
            const actualScope = scopes[findingBatch] ?? readJson(scopePath(findingBatch), 'reader/refuter scope');
            const actualReader = actualScope.reader_findings?.find(row => row.obligation === readerDecision.obligation);
            const actualRefuter = actualScope.refuter_findings?.find(row => row.obligation === refuted.obligation);
            const { route: _readerRoute, ...readerTarget } = readerDecision.target ?? {};
            const { route: _refuterRoute, ...refuterTarget } = refuted.target ?? {};
            const postReader = readJson(hashPath(findingBatch, 'post'), 'post-reader snapshot');
            const sharedRow = mine.find(row => row.defect_id === defectId);
            const decisionRefPath = `research/${run}-alpha-${group.label}-5a-decisions.json`;
            const referencesBoth = [readerDecision.obligation, refuted.obligation].every(obligation =>
              Array.isArray(sharedRow?.adjudication_ref) && sharedRow.adjudication_ref.some(reference =>
                reference?.path === decisionRefPath && reference.obligation === obligation));
            const closedDisposition = ['fixed', 'narrowed', 'dropped',
              ...(refuted.verdict === 'confirmed_nonfatal' ? ['nonfatal-recorded'] : [])];
            const pageSubject = actualReader?.subject_type === 'page';
            const observed = pageSubject ? postReader.page_hashes?.[decision.id] : postReader.hashes?.[decision.id];
            const typedCarrier = pageSubject
              ? (actualScope.page_manifest_post ?? []).includes(decision.id)
                && (postReader.page_manifest ?? []).includes(decision.id)
                && observed && typeof observed === 'object'
                && ['file_sha256', 'manifest_sha256'].every(key => /^[a-f0-9]{64}$/.test(observed[key] ?? ''))
              : actualReader?.subject_type === 'in-flight-item'
                && (actualScope.manifest_post ?? []).includes(decision.id)
                && (postReader.manifest ?? []).includes(decision.id)
                && ['item_sha256', 'contract_sha256', 'manifest_sha256']
                  .every(key => /^[a-f0-9]{64}$/.test(observed?.[key] ?? ''));
            sharedReclassifiedFinding = actualScope.version === 2 && actualScope.run === run
              && String(actualScope.batch) === findingBatch
              && actualReader?.id === decision.id && actualRefuter?.id === decision.id
              && hashValue(actualReader) === hashValue(readerTarget)
              && hashValue(actualRefuter) === hashValue(refuterTarget)
              && (actualScope.refuter_scope ?? []).includes(decision.id)
              && sharedRow?.subject === decision.id && sharedRow.caught_at_stage === '5a-adjudicate'
              && referencesBoth && closedDisposition.includes(sharedRow.disposition)
              && (refuted.verdict === 'confirmed_fatal' ? sharedRow.severity === 'fatal' : sharedRow.severity !== 'fatal')
              && hashSnapshotErrors(postReader, findingBatch, 'post').length === 0
              && typedCarrier
              && actualReader.observed_sha256 === hashValue(pageSubject ? pageCarrier(observed) : observed);
          }
          const pageRepair = repairedDecision?.route === 'page';
          let sharedPostReaderRepair = false;
          if (prior && prior.id === decision.id && explicitShared && refuterMatch
            && ['confirmed_fatal', 'confirmed_nonfatal'].includes(refuted.verdict)
            && ['touched', 'page'].includes(repairedDecision?.route)
            && ['accepted_repair', 'amended_repair'].includes(repairedDecision.verdict)
            && repairedDecision.repair_confidence === 1
            && repairedDecision.target?.batch === refuterMatch[1]
            && repairedDecision.obligation === `${pageRepair ? 'page' : 'touched'}:${refuterMatch[1]}:${decision.id}`) {
            const refuterBatch = refuterMatch[1];
            const actualScope = scopes[refuterBatch] ?? readJson(scopePath(refuterBatch), 'refuter scope');
            const actualFinding = actualScope.refuter_findings?.find(row => row.obligation === refuted.obligation);
            const { route: _route, ...findingTarget } = refuted.target ?? {};
            const postReader = readJson(hashPath(refuterBatch, 'post'), 'post-reader snapshot');
            const observed = pageRepair ? postReader.page_hashes?.[decision.id] : postReader.hashes?.[decision.id];
            const typedCarrier = pageRepair
              ? (actualScope.pages_touched ?? []).includes(decision.id)
                && (actualScope.page_manifest_post ?? []).includes(decision.id)
                && (postReader.page_manifest ?? []).includes(decision.id)
                && observed && typeof observed === 'object'
                && ['file_sha256', 'manifest_sha256']
                  .every(key => /^[a-f0-9]{64}$/.test(observed[key] ?? ''))
              : (postReader.manifest ?? []).includes(decision.id)
                && ['item_sha256', 'contract_sha256', 'manifest_sha256']
                  .every(key => /^[a-f0-9]{64}$/.test(observed?.[key] ?? ''));
            sharedPostReaderRepair = actualScope.version === 2 && actualScope.run === run
              && String(actualScope.batch) === refuterBatch
              && actualFinding?.id === decision.id
              && hashValue(actualFinding) === hashValue(findingTarget)
              && hashSnapshotErrors(postReader, refuterBatch, 'post').length === 0
              && typedCarrier
              // Refuters use an unanchored page carrier, even when the page
              // repair decision retains its separate item-order anchor.
              && actualFinding.observed_sha256 === hashValue(pageRepair ? pageCarrier(observed) : observed);
          }
          // An owner may amend a previously untouched, genuinely flagged
          // source after reading. Stabilization creates a distinct obligation,
          // not a second defect. Bind both exact obligations to the original
          // typed reader-post carrier and one explicitly shared closed row.
          const originalDecision = ['reader', 'flagged'].includes(currentDecision.route) ? currentDecision
            : ['reader', 'flagged'].includes(prior?.route) ? prior : null;
          const stabilizedRepair = originalDecision === currentDecision ? prior : currentDecision;
          const originalMatch = /^(reader|refuter):([1-9]\d*):([1-9]\d*)$/.exec(originalDecision?.obligation ?? '');
          let sharedStabilizedRepair = false;
          if (prior && prior.id === decision.id && explicitShared && originalMatch
            && originalDecision.route === (originalMatch[1] === 'reader' ? 'reader' : 'flagged')
            && ['confirmed_fatal', 'confirmed_nonfatal'].includes(originalDecision.verdict)
            && stabilizedRepair?.target?.stabilized === true && !stabilizedRepair.target.added
            && ['touched', 'page'].includes(stabilizedRepair.route)
            && stabilizedRepair.verdict === 'amended_repair' && stabilizedRepair.repair_confidence === 1
            && stabilizedRepair.target.batch === originalMatch[2]
            && stabilizedRepair.obligation === `post-reader:${originalMatch[2]}:${decision.id}`) {
            const batch = originalMatch[2], page = stabilizedRepair.route === 'page';
            const scope = scopes[batch] ?? readJson(scopePath(batch), 'original finding scope');
            const finding = scope[originalMatch[1] === 'reader' ? 'reader_findings' : 'refuter_findings']
              ?.find(row => row.obligation === originalDecision.obligation);
            const { route: _route, ...findingTarget } = originalDecision.target ?? {};
            const post = readJson(hashPath(batch, 'post'), 'immutable reader-post snapshot');
            const observed = page ? post.page_hashes?.[decision.id] : post.hashes?.[decision.id];
            const typed = page ? (scope.page_manifest_post ?? []).includes(decision.id)
              && (post.page_manifest ?? []).includes(decision.id)
              && ['file_sha256', 'manifest_sha256'].every(key => /^[a-f0-9]{64}$/.test(observed?.[key] ?? ''))
              : (scope.manifest_post ?? []).includes(decision.id) && (post.manifest ?? []).includes(decision.id)
                && ['item_sha256', 'contract_sha256', 'manifest_sha256'].every(key => /^[a-f0-9]{64}$/.test(observed?.[key] ?? ''));
            const row = mine.find(row => row.defect_id === defectId);
            const path = `research/${run}-alpha-${group.label}-5a-decisions.json`;
            const referencesBoth = [originalDecision.obligation, stabilizedRepair.obligation].every(obligation =>
              Array.isArray(row?.adjudication_ref) && row.adjudication_ref.some(ref => ref?.path === path && ref.obligation === obligation));
            const actualTarget = stabilizedObligations(batch, scope).find(row => row.obligation === stabilizedRepair.obligation);
            sharedStabilizedRepair = scope.version === 2 && scope.run === run && String(scope.batch) === batch
              && finding?.id === decision.id && hashValue(finding) === hashValue(findingTarget)
              && (originalMatch[1] !== 'refuter' || (scope.refuter_scope ?? []).includes(decision.id))
              && hashSnapshotErrors(post, batch, 'post').length === 0 && typed
              && finding.observed_sha256 === hashValue(page ? pageCarrier(observed) : observed)
              && hashValue(actualTarget) === hashValue(stabilizedRepair.target)
              && row?.subject === decision.id && row.caught_at_stage === '5a-adjudicate'
              && ['fixed', 'narrowed', 'dropped'].includes(row.disposition) && referencesBoth
              && (originalDecision.verdict === 'confirmed_fatal' ? row.severity === 'fatal' : row.severity !== 'fatal');
          }
          if (sharedStabilizedRepair) recognizedStabilizedShares.add(stabilizedRepair.obligation);
          const sharedOwnerAdjudication = prior
            && ownerSharedDefect(mine.find(row => row.defect_id === defectId), prior, { ...decision, target });
          return Boolean(sharedFinding || sharedCausalAddition || sharedProducerRepair || sharedPostReaderRepair
            || sharedReclassifiedFinding || sharedStabilizedRepair || sharedFindingCausalAddition || sharedOwnerAdjudication);
          };
          candidateSharing.push({ defectId, compatible, anchor: {
            obligation: decision.obligation, id: decision.id, route: decision.route, verdict: decision.verdict, target,
            same_defect_as: decision.same_defect_as, same_defect_evidence: decision.same_defect_evidence,
            repair_confidence: decision.repair_confidence, causal_subject: decision.causal_subject,
            decision_path: `research/${run}-alpha-${group.label}-5a-decisions.json`,
          } });
          const row = mine.find((candidate) => candidate.defect_id === defectId);
          if (!row) { error('ledger-ref-missing', `[${decision.id}] ${decision.obligation} names absent ${defectId}`); continue; }
          decisionRows.push(row);
          const causalAddition = target?.added && decision.causal_subject === row.subject
            && groupSubjects.has(row.subject);
          if ((row.subject !== decision.id && !causalAddition)
            || !['5a-adjudicate'].includes(row.caught_at_stage)) {
            error('ledger-ref-mismatch', `${defectId} does not match ${decision.id} at preliminary/5a`);
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
        if (phase === 'final' && !/^[a-f0-9]{64}$/.test(decision.subject_sha256 ?? '')) {
          error('decision-hash-missing', `[${decision.id}] ${decision.obligation} has no sealed Step-5 carrier hash`);
        }
        if (phase === 'adjudicate') {
          const subjectBatch = target?.batch ?? group.covers.find((batch) =>
            (manifests[batch] ?? []).includes(currentItemId(decision.id, batch))
            || (pages[batch] ?? []).some((page) => page.id === decision.id));
          const live = subjectBatch ? liveFor(subjectBatch) : null;
          const currentValue = currentDecisionCarrier(decision, target, live);
          if (currentValue === undefined || (target?.direct
            && !(target.route === 'page' ? currentValue?.file_sha256 : currentValue?.item_sha256))) {
            error('decision-subject-missing', `[${decision.id}] ${decision.obligation} has no current carrier`);
          } else {
            const currentSha = hashValue(currentValue);
            if ((!/^[a-f0-9]{64}$/.test(decision.subject_sha256 ?? '')
              || decision.subject_sha256 !== currentSha)
              && !currentAuditorCertification(target)) {
              error('decision-stale', `[${decision.id}] ${decision.obligation} subject_sha256 does not match the current item, contract, manifest, or page carrier`);
            }
            if (target && !target.direct && ['touched', 'page'].includes(target.route)) {
              const pre = readJson(hashPath(target.batch, target.stabilized ? 'post' : 'pre'), `batch ${target.batch} earlier hash`);
              const post = readJson(hashPath(target.batch, target.stabilized ? 'pre-5a' : 'post'), `batch ${target.batch} later hash`);
              const preRaw = target.route === 'page' ? pre.page_hashes?.[target.id] : pre.hashes?.[target.id];
              const postRaw = target.route === 'page' ? post.page_hashes?.[target.id] : post.hashes?.[target.id];
              const preValue = target.route === 'page' ? pageCarrier(preRaw, target.order_anchor) : preRaw;
              const postValue = target.route === 'page' ? pageCarrier(postRaw, target.order_anchor) : postRaw;
              if (decision.verdict === 'accepted_repair' && currentSha !== hashValue(postValue)
                && !riskReviewOnlyDelta(target, postValue, currentValue)) {
                error('decision-not-applied', `[${target.id}] accepted_repair no longer matches the reader result`);
              }
              if (decision.verdict === 'reverted_change' && currentSha !== hashValue(preValue)) {
                error('decision-not-applied', `[${target.id}] reverted_change was not restored to the pre-reader state`);
              }
              if (decision.verdict === 'amended_repair') {
                if (currentSha === hashValue(preValue) || currentSha === hashValue(postValue) && !target.stabilized) {
                  error('decision-not-applied', `[${target.id}] amended_repair must differ from both the pre-reader and reader-result carriers`);
                } else if (currentSha === hashValue(postValue) && target.stabilized) {
                  // A genuine post-reader owner amendment may already be frozen
                  // into pre-5a. Admit it only after exact shared-defect validation,
                  // deferred so the finding and repair can appear in either order.
                  pendingStabilizedAmendments.push({ obligation: decision.obligation, id: target.id });
                }
              }
            }
            if (target?.observed_sha256 && decisionRows.some((row) => repaired.has(row.disposition))
              && currentSha === target.observed_sha256
              && !priorAppliedRepair(decision, target, decisionRows)) {
              error('decision-not-applied', `[${target.id}] ${decision.verdict} names a repaired defect but the carrier is unchanged`);
            }
          }
        }
        // Only independently valid decisions can anchor a sharing family.
        // Pair compatibility is resolved after collection so a valid bridge
        // cannot depend on which group or decision happened to come first.
        if (errors.length === decisionErrorStart) for (const claim of candidateSharing) {
          const family = referenced.get(claim.defectId) ?? [];
          family.push(claim);
          referenced.set(claim.defectId, family);
        }
      }
      stabilizedChecks.push(() => {
        for (const row of pendingStabilizedAmendments) if (!recognizedStabilizedShares.has(row.obligation))
          error('decision-not-applied', `[${row.id}] stabilized amended_repair equal to pre-5a requires exact shared historical defect evidence`);
      });
      for (const [obligation, target] of expected) if (!seen.has(obligation)) {
        if (target?.direct && target.route === 'item'
          && currentAuditorCertification(target)) continue;
        error('decision-missing', `[${target.id}] ${group.label} did not decide ${obligation}`);
      }
    }
    for (const [defectId, family] of referenced) {
      const edges = family.map(() => new Set());
      for (let i = 0; i < family.length; i++) for (let j = i + 1; j < family.length; j++) {
        // Evaluate both directions: explicit links remain directional evidence,
        // but iteration order is not evidence. Each edge keeps its full typed
        // native-finding, snapshot, current-carrier and ledger checks.
        const forward = family[i].compatible(family[j].anchor);
        const reverse = family[j].compatible(family[i].anchor);
        if (forward || reverse) { edges[i].add(j); edges[j].add(i); }
      }
      const reached = new Set([0]), pending = [0];
      while (pending.length) for (const next of edges[pending.pop()]) {
        if (!reached.has(next)) { reached.add(next); pending.push(next); }
      }
      if (reached.size !== family.length) error('ledger-double-owned', `${defectId} is referenced by incompatible decisions`);
    }
    for (const check of stabilizedChecks) check();
    // Published repairs retain their optional provenance files, but those
    // files are not a Step-5 certification or gate obligation.
    for (const row of earlyRows) {
      if (ownableSubjects.has(row.subject) && !referenced.has(row.defect_id) && !contextualDefects.has(row.defect_id)) {
        error('ledger-unowned', `[${row.subject}] ${row.defect_id} has no 5a decision reference`);
      }
    }
    if (phase === 'final') {
      for (const row of activeMine.filter((entry) => ['5a-adjudicate', '5b-cross'].includes(entry.caught_at_stage)
        && ['open', 'deferred'].includes(entry.disposition) && !contextualDefects.has(entry.defect_id))) {
        error('step5-open', `[${row.subject}] ${row.defect_id} remains ${row.disposition}`);
      }
    }
  }

  const routedCount = Object.values(scopes).reduce((sum, scope) => sum + (scope.items?.length ?? 0) + (scope.touched?.length ?? 0) + (scope.untouched?.length ?? 0), 0);
  const adjudicatedCount = Object.values(scopes).reduce((sum, scope) => sum + (scope.items?.length ?? 0) + (scope.pages?.length ?? 0)
    + (scope.touched?.length ?? 0) + (scope.pages_touched?.length ?? 0)
    + (scope.reader_findings?.length ?? 0)
    + (scope.refuter_findings?.length ?? 0), 0);
  for (const message of errors) console.error(`ERROR ${message}`);
  console.log(`step5-scope: ${routedCount} item(s) routed, ${adjudicatedCount} adjudication obligation(s), ${errors.length} error(s)`);
  process.exit(errors.length ? 1 : 0);
}

fail(`step5-scope: unknown command ${JSON.stringify(command)}`);
