#!/usr/bin/env node
// cross-group-edges.mjs — 6c's exact cross-batch and post-6b work list.
//
// Owner, 2026-08-25: the lead Alpha at 6c has one job — "identify dependencies
// across batches managed by different alpha agents, and ensure syntactically
// and semantically correct citations", plus a decision on any forward
// reference that reaches this point.
//
// IDENTIFYING THE EDGES IS NOT THAT JOB. It is a join of the validated
// `2-assign` partition against the items' own `deps`, which makes it a
// function of files on disk and therefore code (CLAUDE.md, roles rule). The
// Alpha is left with the only part no table can do: reading the citing use,
// post-6b item, removal, or page edit and deciding whether it is sound.
//
// WHY THE SCOPE NARROWED. 6c used to audit three edge classes — cross-batch,
// backward-into-published, and forward references. The first is the only one
// no other reader can see: a 6a reader holds one batch, a group Alpha holds
// its own two or three, and neither can see an edge landing in another
// group's batch. Backward edges into published content are already covered by
// the 6a reader's duty to verify EVERY dependency citation in its batch, so
// auditing them again at 6c was a second reading of the same edge, at
// whole-level cost.
//
//   list  --run R    write the work list
//   check --run R    gate: every edge and every forward reference has a verdict
//
// Verdicts: research/<run>-6c-verdicts.jsonl, one JSON object per line.
//   {"kind":"edge","from":"<id>","to":"<id>","verdict":"accurate|repaired|struck","note":"..."}
//   {"kind":"forward","item":"<id>","target":"<id>","decision":"lemmas-added|dropped","note":"..."}
//   {"kind":"addition|removal|page","batch":"<n>","id":"<id>","verdict":"...","note":"..."}

import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, basename, resolve } from 'node:path';
import { split, yaml, REPO } from './pathway-lib.mjs';

const argv = process.argv.slice(2);
const cmd = argv[0];
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i === -1 || i === argv.length - 1 ? d : argv[i + 1]; };
const ROOT = resolve(opt('root', REPO));
const R = (...p) => join(ROOT, ...p);
const die = (m, c = 2) => { console.error(m); process.exit(c); };

const run = opt('run');
if (!run) die('usage: cross-group-edges.mjs list|check|carrier --run <run> [--id <subject>] [--root <repo>]');

const listPath = R('research', `${run}-cross-group-edges.json`);
const verdictPath = R('research', `${run}-6c-verdicts.jsonl`);
const reconcilePlan = argv.includes('--reconcile-plan');

const strList = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []);

/** Item id -> owning batch, and batch -> owning group. */
function ownership() {
  const batchOf = new Map();
  const itemsByBatch = new Map();
  const itemRowsByBatch = new Map();
  const pagesByBatch = new Map();
  for (const f of readdirSync(R('research'))) {
    const m = f.match(new RegExp(`^${run}-batch-(\\d+)\\.pages\\.json$`));
    if (!m) continue;
    const batchItems = [], batchPages = [], batchItemRows = [];
    for (const p of JSON.parse(readFileSync(R('research', f), 'utf8'))) {
      const items = (p.items ?? []).map((item) => typeof item === 'string' ? { id: item } : item);
      const { items: _items, ...pageFields } = p;
      batchPages.push({ id: String(p.id), category: String(p.category),
        metadata: pageFields, itemOrder: items.map((item) => String(item.id)) });
      for (const it of items) {
        const id = it.id;
        batchOf.set(id, m[1]);
        batchItems.push(id);
        batchItemRows.push({ id, metadata: { ...it, __step6_page_id: String(p.id) } });
      }
    }
    itemsByBatch.set(m[1], batchItems);
    itemRowsByBatch.set(m[1], batchItemRows);
    pagesByBatch.set(m[1], batchPages);
  }
  const gp = R('research', `${run}-alpha-groups.json`);
  if (!existsSync(gp)) die(`cross-group-edges: no ${run}-alpha-groups.json — 2-assign has not run`);
  const raw = JSON.parse(readFileSync(gp, 'utf8'));
  const groupOf = new Map();
  for (const g of (Array.isArray(raw) ? raw : raw.groups ?? [])) {
    for (const b of g.covers ?? []) groupOf.set(String(b), String(g.label));
  }
  return { batchOf, groupOf, itemsByBatch, itemRowsByBatch, pagesByBatch };
}

const hash = (value) => createHash('sha256').update(value).digest('hex');
const canonical = (value) => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]))
    : value;
const hashValue = (value) => hash(JSON.stringify(canonical(value)) ?? 'undefined');

const contractCache = new Map();
function contractRows(batch) {
  if (contractCache.has(batch)) return contractCache.get(batch);
  const path = R('research', `${run}-batch-${batch}.proof-contracts.json`);
  const rows = existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')).contracts ?? {} : {};
  contractCache.set(batch, rows);
  return rows;
}

function itemCarrier(batch, id, metadata) {
  const path = R('items', `${id}.md`);
  return {
    item_sha256: existsSync(path) ? hash(readFileSync(path)) : null,
    contract_sha256: hashValue(contractRows(batch)[id] ?? null),
    manifest_sha256: hashValue(metadata ?? { id }),
  };
}

function pageCarrier(page) {
  const path = R('library', page.category, `${page.id}.md`);
  return {
    file_sha256: existsSync(path) ? hash(readFileSync(path)) : null,
    manifest_sha256: hashValue(page.metadata),
    item_order: page.itemOrder,
  };
}

/** Exact currency boundary between group adjudication and lead-Alpha work.
 * A 6c edit must become an explicit current-hash verdict; otherwise a proof-only
 * rewrite could bypass both the 6b decision and the public-surface impact gate. */
function post6bChanges(owned) {
  const changes = [];
  for (const [batch, currentIds] of owned.itemsByBatch) {
    const snapshotPath = R('research', `${run}-step6-hash-${batch}-post-6b.json`);
    if (!existsSync(snapshotPath)) {
      die(`cross-group-edges: missing exact post-6b carrier snapshot ${snapshotPath}`, 1);
    }
    const snapshot = JSON.parse(readFileSync(snapshotPath, 'utf8'));
    if (snapshot.run !== run || String(snapshot.batch) !== batch || snapshot.label !== 'post-6b') {
      die(`cross-group-edges: invalid post-6b carrier snapshot ${snapshotPath}`, 1);
    }
    const before = new Set((snapshot.manifest ?? []).map(String));
    const current = new Set(currentIds.map(String));
    const currentRows = new Map((owned.itemRowsByBatch.get(batch) ?? []).map((row) => [String(row.id), row.metadata]));
    for (const id of current) if (!before.has(id)) {
      changes.push({ kind: 'addition', batch, id, file: `items/${id}.md`,
        sha256: hashValue(itemCarrier(batch, id, currentRows.get(id))) });
    }
    for (const id of before) if (!current.has(id)) changes.push({
      kind: 'removal', batch, id, sha256: hashValue(snapshot.hashes?.[id]),
    });
    for (const id of current) if (before.has(id)) {
      const carrier = itemCarrier(batch, id, currentRows.get(id));
      if (hashValue(snapshot.hashes?.[id]) !== hashValue(carrier)) {
        changes.push({ kind: 'item', batch, id, file: `items/${id}.md`,
          sha256: hashValue(carrier) });
      }
    }
    const currentPages = new Map((owned.pagesByBatch.get(batch) ?? []).map((page) => [page.id, page]));
    const beforePages = new Set((snapshot.page_manifest ?? []).map(String));
    for (const [id, page] of currentPages) if (!beforePages.has(id)) {
      changes.push({ kind: 'page-addition', batch, id,
        file: `library/${page.category}/${id}.md`, sha256: hashValue(pageCarrier(page)) });
    }
    for (const id of beforePages) {
      const page = currentPages.get(id);
      if (!page) {
        changes.push({ kind: 'page-removal', batch, id, file: null,
          sha256: hashValue(snapshot.page_hashes?.[id]) });
      } else if (hashValue(snapshot.page_hashes?.[id]) !== hashValue(pageCarrier(page))) {
        changes.push({ kind: 'page', batch, id,
          file: `library/${page.category}/${id}.md`, sha256: hashValue(pageCarrier(page)) });
      }
    }
  }
  return changes.sort((a, b) => a.batch.localeCompare(b.batch)
    || a.kind.localeCompare(b.kind) || a.id.localeCompare(b.id));
}

/** In-scope items, with the two frontmatter fields 6c reads.
 *
 *  Parsed with the RENDERER's YAML parser rather than a per-tool regex: the
 *  regex `list()` helper is hand-copied into six tools already, and a
 *  `deps` block it mis-slices is an edge this gate would silently never list. */
function loadItems(ids) {
  const Y = yaml();
  const out = new Map();
  for (const id of ids) {
    const f = R('items', `${id}.md`);
    if (!existsSync(f)) continue;
    const raw = readFileSync(f, 'utf8');
    const { fm } = split(raw);
    let y = {};
    try { y = Y.parse(fm) ?? {}; } catch { continue; }
    out.set(id, {
      id,
      file: `items/${basename(f)}`,
      deps: strList(y.deps),
      justified: strList(y.justified_by),
      forward: strList(y.forward_refs),
      sha256: hash(raw),
    });
  }
  return out;
}

/** The cross-batch edges, forward references, and post-6b changes on disk now.
 *
 *  Shared by both subcommands on purpose. `list` writes the obligation; `check`
 *  recomputes and compares, because the Alpha edits items between the two and
 *  a check that read only the saved list could not tell a decision that was
 *  APPLIED from one that was merely recorded — which is exactly the gap that
 *  made step-3 "applied" claims untrustworthy. */
function compute() {
  const owned = ownership();
  const { batchOf, groupOf } = owned;
  const items = loadItems([...batchOf.keys()]);
  const edges = [], forwards = [];
  for (const it of items.values()) {
    const fromGroup = groupOf.get(batchOf.get(it.id));
    // `justified_by` is a citation too — it is the edge a reader follows to
    // check the claim, and SCHEMA treats it as load-bearing. Listing only
    // `deps` would leave that class unaudited at the one step that can see it.
    for (const target of [...it.deps, ...it.justified]) {
      const b = batchOf.get(target);
      if (!b) continue;                    // published, or outside this run: the 6a reader's
      if (b === batchOf.get(it.id)) continue; // same batch: one reader sees stable local order
      const toGroup = groupOf.get(b);
      edges.push({ from: it.id, to: target, from_group: fromGroup, to_group: toGroup, file: it.file,
        from_sha256: it.sha256, to_sha256: items.get(target)?.sha256 ?? null });
    }
    for (const target of it.forward) forwards.push({ item: it.id, target, file: it.file, item_sha256: it.sha256 });
  }
  edges.sort((a, b) => a.from.localeCompare(b.from) || a.to.localeCompare(b.to));
  forwards.sort((a, b) => a.item.localeCompare(b.item) || a.target.localeCompare(b.target));
  return { edges, forwards, changes: post6bChanges(owned), items, owned };
}

// ---------------------------------------------------------------------------
if (cmd === 'carrier') {
  const id = opt('id');
  if (!id) die('cross-group-edges: carrier requires --id <subject>');
  const owned = ownership();
  const batch = owned.batchOf.get(id);
  if (batch) {
    const metadata = (owned.itemRowsByBatch.get(batch) ?? []).find((row) => String(row.id) === id)?.metadata;
    console.log(hashValue(itemCarrier(batch, id, metadata)));
    process.exit(0);
  }
  for (const pages of owned.pagesByBatch.values()) {
    const page = pages.find((candidate) => candidate.id === id);
    if (page) {
      console.log(hashValue(pageCarrier(page)));
      process.exit(0);
    }
  }
  die(`cross-group-edges: ${id} is not a current in-flight item or page`, 1);
}

// ---------------------------------------------------------------------------
if (cmd === 'list') {
  const { edges, forwards, changes, items } = compute();
  writeFileSync(listPath, JSON.stringify({ run, at: new Date().toISOString(), edges, forwards, changes }, null, 1) + '\n');
  if (!existsSync(verdictPath)) writeFileSync(verdictPath, '');
  console.log(`cross-group-edges: ${edges.length} cross-batch edge(s) and ${forwards.length} forward reference(s) `
    + `and ${changes.length} post-6b change(s) over ${items.size} in-scope item(s)`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
if (cmd === 'check') {
  if (!existsSync(listPath)) die(`cross-group-edges: no work list at ${listPath} — run \`list\` first`, 1);
  const { edges, forwards, changes = [] } = JSON.parse(readFileSync(listPath, 'utf8'));
  const verdicts = existsSync(verdictPath)
    ? readFileSync(verdictPath, 'utf8').split('\n').filter(Boolean).map((l, i) => {
      try { return JSON.parse(l); } catch { die(`cross-group-edges: ${verdictPath} line ${i + 1} is not JSON`, 1); }
    })
    : [];

  const EDGE_OK = new Set(['accurate', 'repaired', 'struck']);
  // The owner's two options, and only those. A forward reference that reaches
  // 6c is resolved, not justified: either the load-bearing lemmas are built so
  // the citation points backwards, or the item is dropped because too many of
  // its prerequisites are unmet. "Justified" is no longer a disposition here.
  const FWD_OK = new Set(['lemmas-added', 'dropped']);

  let errors = 0;
  const err = (code, msg) => { console.error(`ERROR ${code}: ${msg}`); errors += 1; };
  const keyed = (rows, key, label) => {
    const out = new Map();
    for (const row of rows) {
      const id = key(row);
      if (out.has(id)) err('verdict-duplicate', `${label} ${id.replaceAll('\u0000', ' -> ')} has duplicate verdict rows`);
      else out.set(id, row);
    }
    return out;
  };
  const pairKey = (left, right) => `${left}\u0000${right}`;
  const edgeV = keyed(verdicts.filter((v) => v.kind === 'edge'), (v) => pairKey(v.from, v.to), 'edge');
  const fwdV = keyed(verdicts.filter((v) => v.kind === 'forward'), (v) => pairKey(v.item, v.target), 'forward');
  const changeKinds = ['addition', 'removal', 'item', 'item-metadata', 'page', 'page-addition', 'page-removal'];
  const changeV = keyed(verdicts.filter((v) => changeKinds.includes(v.kind)),
    (v) => `${v.kind}\u0000${v.batch}\u0000${v.id}`, 'change');
  const gateV = keyed(verdicts.filter((v) => v.kind === 'gate'),
    (v) => String(v.defect_ids?.[0] ?? ''), 'gate');

  for (const e of edges) {
    const v = edgeV.get(pairKey(e.from, e.to));
    if (!v) { err('edge-unverdicted', `[${e.from}] cites ${e.to} across batches/groups ${e.from_group}->${e.to_group} with no 6c verdict`); continue; }
    if (!EDGE_OK.has(v.verdict)) err('edge-verdict-invalid', `[${e.from}] -> ${e.to}: verdict ${JSON.stringify(v.verdict)} is not one of ${[...EDGE_OK].join(', ')}`);
    if (!String(v.note ?? '').trim()) err('edge-note-missing', `[${e.from}] -> ${e.to}: a verdict with no note is not a reading`);
  }
  for (const f of forwards) {
    const v = fwdV.get(pairKey(f.item, f.target));
    if (!v) { err('forward-undecided', `[${f.item}] declares forward_refs "${f.target}" with no 6c decision — build the intermediate lemmas or drop the item`); continue; }
    if (!FWD_OK.has(v.decision)) err('forward-decision-invalid', `[${f.item}] -> ${f.target}: decision ${JSON.stringify(v.decision)} is not one of ${[...FWD_OK].join(', ')}`);
    if (!String(v.note ?? '').trim()) err('forward-note-missing', `[${f.item}] -> ${f.target}: a decision with no note is not a reading`);
  }
  const listedChangeKeys = new Set(changes.map((change) => `${change.kind}\u0000${change.batch}\u0000${change.id}`));
  for (const change of changes) {
    const key = `${change.kind}\u0000${change.batch}\u0000${change.id}`;
    const verdict = changeV.get(key);
    if (!verdict) { err('change-undecided', `${change.kind} [${change.id}] in batch ${change.batch} has no 6c verdict`); continue; }
  }
  // A DECISION RECORDED BUT NOT APPLIED is the failure mode that made step-3
  // "applied" claims untrustworthy, so the outcome is read from disk NOW
  // rather than from the list the Alpha started with.
  const now = compute();
  const liveEdges = new Set(now.edges.map((edge) => pairKey(edge.from, edge.to)));
  for (const [key, verdict] of edgeV) {
    if (verdict.verdict === 'struck' && liveEdges.has(key)) err('edge-strike-not-applied', `${key.replaceAll('\u0000', ' -> ')} is struck but still exists`);
    if (['accurate', 'repaired'].includes(verdict.verdict) && !liveEdges.has(key)) err('edge-kept-missing', `${key.replaceAll('\u0000', ' -> ')} is ${verdict.verdict} but no longer exists`);
  }
  for (const verdict of edgeV.values()) {
    const source = now.items.get(verdict.from)?.sha256 ?? null;
    const target = now.items.get(verdict.to)?.sha256 ?? null;
    if (verdict.from_sha256 !== source || verdict.to_sha256 !== target) {
      err('edge-verdict-stale', `[${verdict.from}] -> ${verdict.to}: verdict hashes do not match the current citing and target items`);
    }
  }
  const liveFwd = new Set(now.forwards.map((f) => pairKey(f.item, f.target)));
  for (const v of fwdV.values()) {
    const k = pairKey(v.item, v.target);
    const listedForward = forwards.find((forward) => forward.item === v.item && forward.target === v.target);
    const expectedHash = now.items.get(v.item)?.sha256 ?? listedForward?.item_sha256 ?? null;
    if (v.item_sha256 !== expectedHash) {
      err('forward-verdict-stale', `[${v.item}] -> ${v.target}: verdict hash does not match the current item`);
    }
    if (v.decision === 'dropped' && existsSync(R('items', `${v.item}.md`))) {
      err('forward-drop-not-applied', `[${v.item}] is recorded dropped but items/${v.item}.md is still on disk`);
    }
    if (v.decision === 'lemmas-added' && liveFwd.has(k)) {
      err('forward-still-declared', `[${v.item}] is recorded as having its intermediate lemmas built but still declares forward_refs "${v.target}"`);
    }
  }
  const listedEdges = new Set(edges.map((edge) => pairKey(edge.from, edge.to)));
  const listedForwards = new Set(forwards.map((forward) => pairKey(forward.item, forward.target)));
  const liveForwards = new Set(now.forwards.map((forward) => pairKey(forward.item, forward.target)));
  for (const [key, verdict] of edgeV) if (!listedEdges.has(key) && !liveEdges.has(key)
    && !(verdict.defect_ids ?? []).length) {
    err('edge-verdict-extra', `${key.replaceAll('\u0000', ' -> ')} is not a listed/current edge and has no defect row attesting an introduced repair`);
  }
  for (const [key, verdict] of fwdV) if (!listedForwards.has(key) && !liveForwards.has(key)
    && !(verdict.defect_ids ?? []).length) {
    err('forward-verdict-extra', `${key.replaceAll('\u0000', ' -> ')} is not a listed/current forward reference and has no defect row attesting an introduced repair`);
  }
  // An edge the Alpha's own repairs INTRODUCED is unaudited work, and the
  // saved list cannot see it. 6c may add results and rewrite citations, so
  // this is a live case, not a hypothetical.
  const listed = new Set(edges.map((e) => pairKey(e.from, e.to)));
  for (const e of now.edges) {
    const key = pairKey(e.from, e.to);
    if (!listed.has(key) && !edgeV.has(key)) {
      err('edge-introduced-unverdicted', `[${e.from}] now cites ${e.to} across batches/groups ${e.from_group}->${e.to_group}; the edge appeared after the work list was written and carries no verdict`);
    }
  }
  for (const forward of now.forwards) {
    const key = pairKey(forward.item, forward.target);
    if (!listedForwards.has(key) && !fwdV.has(key)) {
      err('forward-introduced-undecided', `[${forward.item}] now declares forward_refs "${forward.target}" but it appeared after the work list and has no decision`);
    }
  }

  const currentItems = now.items;
  const currentItemMetadata = new Map();
  for (const rows of now.owned.itemRowsByBatch.values()) {
    for (const row of rows) currentItemMetadata.set(String(row.id), row.metadata);
  }
  const currentPages = new Map();
  const currentPageBatch = new Map();
  for (const [batch, pages] of now.owned.pagesByBatch) for (const page of pages) {
    const path = R('library', page.category, `${page.id}.md`);
    if (existsSync(path)) {
      currentPages.set(page.id, page);
      currentPageBatch.set(page.id, batch);
    }
  }
  const currentChangeKeys = new Set(now.changes.map((change) => `${change.kind}\u0000${change.batch}\u0000${change.id}`));
  for (const change of now.changes) {
    const key = `${change.kind}\u0000${change.batch}\u0000${change.id}`;
    if (!listedChangeKeys.has(key) && !changeV.has(key)) err('change-introduced-undecided', `${change.kind} [${change.id}] appeared after the work list with no verdict`);
  }
  for (const [key, verdict] of changeV) {
    const [kind, batch, id] = key.split('\u0000');
    if (!listedChangeKeys.has(key) && !currentChangeKeys.has(key)) err('change-verdict-extra', `${kind} [${id}] in batch ${batch} is not a computed change`);
    const allowed = ['addition', 'page-addition'].includes(kind) ? ['accepted', 'repaired', 'dropped']
      : ['removal', 'page-removal'].includes(kind)
        ? (listedChangeKeys.has(key) ? ['reverted'] : ['accepted', 'reverted'])
        : ['accepted', 'repaired', 'reverted'];
    if (!allowed.includes(verdict.verdict)) err('change-verdict-invalid', `${key}: verdict ${JSON.stringify(verdict.verdict)} is not one of ${allowed.join(', ')}`);
    if (!String(verdict.note ?? '').trim()) err('change-note-missing', `${key}: a verdict with no note is not a reading`);
    const exists = currentItems.has(id);
    if (kind === 'addition' && ['accepted', 'repaired'].includes(verdict.verdict) && !exists) err('addition-missing', `[${id}] was accepted but is absent`);
    if (kind === 'addition' && verdict.verdict === 'dropped' && exists) err('addition-drop-not-applied', `[${id}] was dropped but still exists`);
    const itemFileExists = existsSync(R('items', `${id}.md`));
    if (kind === 'removal' && verdict.verdict === 'accepted' && (exists || itemFileExists)) {
      err('removal-not-applied', `[${id}] removal was accepted but its manifest entry or item file still exists`);
    }
    if (kind === 'removal' && verdict.verdict === 'reverted' && (!exists || !itemFileExists)) {
      err('removal-revert-not-applied', `[${id}] removal was reverted without restoring both manifest entry and item file`);
    }
    const listedChange = changes.find((change) => `${change.kind}\u0000${change.batch}\u0000${change.id}` === key);
    const currentChange = now.changes.find((change) => `${change.kind}\u0000${change.batch}\u0000${change.id}` === key);
    const currentPage = currentPages.get(id);
    const currentSubjectHash = ['page', 'page-addition', 'page-removal'].includes(kind)
      ? (currentPage ? hashValue(pageCarrier(currentPage))
        : listedChange?.sha256 ?? currentChange?.sha256 ?? null)
      : (currentItems.has(id) ? hashValue(itemCarrier(batch, id, currentItemMetadata.get(id)))
        : listedChange?.sha256 ?? currentChange?.sha256 ?? null);
    if (verdict.subject_sha256 !== currentSubjectHash) {
      err('change-verdict-stale', `${key}: verdict hash does not match the current or removed subject bytes`);
    }
    if (kind === 'page') {
      const stillChanged = currentChangeKeys.has(key);
      if (verdict.verdict === 'reverted' && stillChanged) err('page-revert-not-applied', `[${id}] page edit was reverted but still differs from the post-6b baseline`);
      if (['accepted', 'repaired'].includes(verdict.verdict) && !stillChanged) err('page-change-missing', `[${id}] page edit was accepted but no longer differs from the post-6b baseline`);
    }
    if (['item', 'item-metadata'].includes(kind)) {
      const stillChanged = currentChangeKeys.has(key);
      if (verdict.verdict === 'reverted' && stillChanged) err('item-revert-not-applied', `[${id}] item carrier was reverted but still differs from the post-6b baseline`);
      if (['accepted', 'repaired'].includes(verdict.verdict) && !stillChanged) err('item-change-missing', `[${id}] item carrier was accepted but no longer differs from the post-6b baseline`);
    }
    if (kind === 'page-addition') {
      err('page-scope-owner', `[${id}] page addition changes build scope and requires owner intervention`);
    }
    if (kind === 'page-removal') {
      err('page-scope-owner', `[${id}] page removal changes build scope and requires owner intervention`);
    }
  }

  // A repaired/removed mathematical obligation is a defect outcome, not only
  // a structural verdict. Bind it to one closed Step-6c ledger row so the final
  // report cannot omit defects that the 6c machine file says it repaired.
  let ledger = [];
  const ledgerPath = R('research', 'defect-ledger.jsonl');
  if (existsSync(ledgerPath)) {
    try { ledger = readFileSync(ledgerPath, 'utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line)); }
    catch (cause) { err('ledger-invalid', cause.message); }
  }
  const usedDefects = new Map();
  const bindDefects = (verdict, subject, required, obligation, allowedDispositions = []) => {
    const ids = Array.isArray(verdict.defect_ids) ? verdict.defect_ids.map(String) : [];
    if (required && !ids.length) err('defect-ledger-missing', `${obligation} is a defect outcome with no defect_ids`);
    if (!required && ids.length) err('defect-ledger-unexpected', `${obligation} is a clean outcome and must use defect_ids: []`);
    if (new Set(ids).size !== ids.length) err('defect-ledger-duplicate', `${obligation} repeats a defect id`);
    for (const id of ids) {
      if (usedDefects.has(id)) err('defect-ledger-double-owned', `${id} is used by ${usedDefects.get(id)} and ${obligation}`);
      else usedDefects.set(id, obligation);
      const row = ledger.find((candidate) => candidate.defect_id === id);
      if (!row) { err('defect-ledger-absent', `${obligation} names absent ${id}`); continue; }
      if (row.run !== run || row.subject !== subject || row.caught_at_stage !== '6c-cross') {
        err('defect-ledger-mismatch', `${id} does not bind ${subject} at ${run}/6c-cross`);
      }
      if (!allowedDispositions.includes(row.disposition)) {
        err('defect-ledger-disposition', `${id} has disposition ${row.disposition}, not one of ${allowedDispositions.join(', ')}`);
      }
    }
  };
  const repairedDispositions = ['fixed', 'narrowed', 'dropped'];
  for (const verdict of edgeV.values()) bindDefects(verdict, String(verdict.from),
    verdict.verdict !== 'accurate', `edge ${verdict.from} -> ${verdict.to}`, repairedDispositions);
  for (const verdict of fwdV.values()) bindDefects(verdict, String(verdict.item), true,
    `forward ${verdict.item} -> ${verdict.target}`, repairedDispositions);
  for (const verdict of changeV.values()) {
    const clean = ['addition', 'item', 'item-metadata', 'page-addition', 'page'].includes(verdict.kind)
      && verdict.verdict === 'accepted';
    const allowed = ['removal', 'page-removal'].includes(verdict.kind) && verdict.verdict === 'accepted'
      ? ['dropped']
      : verdict.verdict === 'reverted' ? ['fixed', 'narrowed', 'false-positive'] : repairedDispositions;
    bindDefects(verdict, String(verdict.id), !clean,
      `${verdict.kind} ${verdict.batch}:${verdict.id}`, allowed);
  }
  for (const verdict of gateV.values()) {
    const ids = Array.isArray(verdict.defect_ids) ? verdict.defect_ids.map(String) : [];
    if (ids.length !== 1) {
      err('gate-defect-cardinality', `[${verdict.id}] gate verdict must name exactly one defect id`);
    }
    if (!['confirmed_fatal', 'confirmed_nonfatal', 'false_positive'].includes(verdict.verdict)) {
      err('gate-verdict-invalid', `gate defect ${verdict.defect_ids?.[0]} has invalid verdict ${verdict.verdict}`);
    }
    if (!String(verdict.note ?? '').trim()) err('gate-note-missing', `gate defect ${verdict.defect_ids?.[0]} has no evidence note`);
    if (typeof verdict.gate !== 'string' || !verdict.gate.trim()) {
      err('gate-origin-missing', `[${verdict.id}] gate verdict must name the originating gate`);
    }
    const itemBatch = now.owned.batchOf.get(verdict.id);
    const page = currentPages.get(verdict.id);
    const pageBatch = currentPageBatch.get(verdict.id);
    const carrier = itemBatch ? itemCarrier(itemBatch, verdict.id, currentItemMetadata.get(verdict.id))
      : pageBatch && page ? pageCarrier(page) : null;
    if (!carrier) {
      err('gate-subject-out-of-scope', `[${verdict.id}] gate verdict does not name a current in-flight item or page`);
    } else if (verdict.subject_sha256 !== hashValue(carrier)) {
      err('gate-verdict-stale', `[${verdict.id}] gate verdict hash does not match the current composite carrier`);
    }
    const allowed = verdict.verdict === 'false_positive' ? ['false-positive']
      : verdict.verdict === 'confirmed_nonfatal' ? ['fixed', 'narrowed', 'nonfatal-recorded']
        : repairedDispositions;
    bindDefects(verdict, String(verdict.id), true, `gate ${verdict.defect_ids?.[0]}`, allowed);
    const row = ids.length === 1 ? ledger.find((candidate) => candidate.defect_id === ids[0]) : null;
    if (row && verdict.verdict === 'confirmed_fatal' && row.severity !== 'fatal') {
      err('gate-defect-severity', `${ids[0]} is ${row.severity}, not fatal`);
    }
    if (row && verdict.verdict === 'confirmed_nonfatal' && row.severity === 'fatal') {
      err('gate-defect-severity', `${ids[0]} is fatal, not nonfatal`);
    }
  }
  for (const row of ledger.filter((candidate) => candidate.run === run && candidate.caught_at_stage === '6c-cross')) {
    if (!usedDefects.has(row.defect_id)) err('defect-ledger-unowned', `${row.defect_id} has no 6c verdict reference`);
  }
  const recognised = new Set(['edge', 'forward', 'gate', ...changeKinds]);
  for (const verdict of verdicts) if (!recognised.has(verdict.kind)) err('verdict-kind-invalid', `unknown verdict kind ${JSON.stringify(verdict.kind)}`);

  if (!errors && reconcilePlan) {
    for (const batch of [...now.owned.itemsByBatch.keys()].sort((a, b) => Number(a) - Number(b))) {
      const reconciled = spawnSync(process.execPath,
        [R('tools', 'splice-plan.mjs'), '--run', run, '--batch', batch, '--update', '--accept-requires'],
        { cwd: ROOT, encoding: 'utf8', timeout: 120_000 });
      if (reconciled.status !== 0) {
        err('plan-reconcile', `batch ${batch}: ${String(reconciled.stderr || reconciled.stdout).trim()}`);
        break;
      }
    }
  }

  console.log(`cross-group-edges: ${edges.length} edge(s), ${forwards.length} forward reference(s), ${changes.length} post-6b change(s), ${errors} error(s)`);
  process.exit(errors ? 1 : 0);
}

die(`cross-group-edges: unknown command ${JSON.stringify(cmd)} — expected list, check, or carrier`);
