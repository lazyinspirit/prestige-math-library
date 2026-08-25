#!/usr/bin/env node
// cross-group-edges.mjs — 6c's WORK LIST, and the gate that it was finished.
//
// Owner, 2026-08-25: the lead Alpha at 6c has one job — "identify dependencies
// across batches managed by different alpha agents, and ensure syntactically
// and semantically correct citations", plus a decision on any forward
// reference that reaches this point.
//
// IDENTIFYING THE EDGES IS NOT THAT JOB. It is a join of the validated
// `2-assign` partition against the items' own `deps`, which makes it a
// function of files on disk and therefore code (CLAUDE.md, roles rule). The
// Alpha is left with the only part no table can do: reading the citing use
// against the cited Statement and saying whether it is accurate.
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
// An edge inside ONE group is that group Alpha's, and is deliberately not
// listed here.
//
//   list  --run R    write the work list
//   check --run R    gate: every edge and every forward reference has a verdict
//
// Verdicts: research/<run>-6c-verdicts.jsonl, one JSON object per line.
//   {"kind":"edge","from":"<id>","to":"<id>","verdict":"accurate|repaired|struck","note":"..."}
//   {"kind":"forward","item":"<id>","target":"<id>","decision":"lemmas-added|dropped","note":"..."}

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { split, yaml, REPO } from './pathway-lib.mjs';

const R = (...p) => join(REPO, ...p);
const argv = process.argv.slice(2);
const cmd = argv[0];
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i === -1 || i === argv.length - 1 ? d : argv[i + 1]; };
const die = (m, c = 2) => { console.error(m); process.exit(c); };

const run = opt('run');
if (!run) die('usage: cross-group-edges.mjs list|check --run <run>');

const listPath = R('research', `${run}-cross-group-edges.json`);
const verdictPath = R('research', `${run}-6c-verdicts.jsonl`);

const strList = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []);

/** Item id -> owning batch, and batch -> owning group. */
function ownership() {
  const batchOf = new Map();
  for (const f of readdirSync(R('research'))) {
    const m = f.match(new RegExp(`^${run}-batch-(\\d+)\\.pages\\.json$`));
    if (!m) continue;
    for (const p of JSON.parse(readFileSync(R('research', f), 'utf8'))) {
      for (const it of p.items ?? []) batchOf.set(typeof it === 'string' ? it : it.id, m[1]);
    }
  }
  const gp = R('research', `${run}-alpha-groups.json`);
  if (!existsSync(gp)) die(`cross-group-edges: no ${run}-alpha-groups.json — 2-assign has not run`);
  const raw = JSON.parse(readFileSync(gp, 'utf8'));
  const groupOf = new Map();
  for (const g of (Array.isArray(raw) ? raw : raw.groups ?? [])) {
    for (const b of g.covers ?? []) groupOf.set(String(b), String(g.label));
  }
  return { batchOf, groupOf };
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
    const { fm } = split(readFileSync(f, 'utf8'));
    let y = {};
    try { y = Y.parse(fm) ?? {}; } catch { continue; }
    out.set(id, {
      id,
      file: `items/${basename(f)}`,
      deps: strList(y.deps),
      justified: strList(y.justified_by),
      forward: strList(y.forward_refs),
    });
  }
  return out;
}

/** The cross-group edges and forward references TRUE OF DISK RIGHT NOW.
 *
 *  Shared by both subcommands on purpose. `list` writes the obligation; `check`
 *  recomputes and compares, because the Alpha edits items between the two and
 *  a check that read only the saved list could not tell a decision that was
 *  APPLIED from one that was merely recorded — which is exactly the gap that
 *  made step-3 "applied" claims untrustworthy. */
function compute() {
  const { batchOf, groupOf } = ownership();
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
      const toGroup = groupOf.get(b);
      if (toGroup === fromGroup) continue; // inside one Alpha's own view
      edges.push({ from: it.id, to: target, from_group: fromGroup, to_group: toGroup, file: it.file });
    }
    for (const target of it.forward) forwards.push({ item: it.id, target, file: it.file });
  }
  edges.sort((a, b) => a.from.localeCompare(b.from) || a.to.localeCompare(b.to));
  forwards.sort((a, b) => a.item.localeCompare(b.item) || a.target.localeCompare(b.target));
  return { edges, forwards, items };
}

// ---------------------------------------------------------------------------
if (cmd === 'list') {
  const { edges, forwards, items } = compute();
  writeFileSync(listPath, JSON.stringify({ run, at: new Date().toISOString(), edges, forwards }, null, 1) + '\n');
  console.log(`cross-group-edges: ${edges.length} cross-group edge(s) and ${forwards.length} forward reference(s) `
    + `over ${items.size} in-scope item(s)`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
if (cmd === 'check') {
  if (!existsSync(listPath)) die(`cross-group-edges: no work list at ${listPath} — run \`list\` first`, 1);
  const { edges, forwards } = JSON.parse(readFileSync(listPath, 'utf8'));
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

  const edgeV = new Map(verdicts.filter((v) => v.kind === 'edge').map((v) => [`${v.from}\u0000${v.to}`, v]));
  const fwdV = new Map(verdicts.filter((v) => v.kind === 'forward').map((v) => [`${v.item}\u0000${v.target}`, v]));

  let errors = 0;
  const err = (code, msg) => { console.error(`ERROR ${code}: ${msg}`); errors += 1; };

  for (const e of edges) {
    const v = edgeV.get(`${e.from}\u0000${e.to}`);
    if (!v) { err('edge-unverdicted', `[${e.from}] cites ${e.to} across groups ${e.from_group}->${e.to_group} with no 6c verdict`); continue; }
    if (!EDGE_OK.has(v.verdict)) err('edge-verdict-invalid', `[${e.from}] -> ${e.to}: verdict ${JSON.stringify(v.verdict)} is not one of ${[...EDGE_OK].join(', ')}`);
    if (!String(v.note ?? '').trim()) err('edge-note-missing', `[${e.from}] -> ${e.to}: a verdict with no note is not a reading`);
  }
  for (const f of forwards) {
    const v = fwdV.get(`${f.item}\u0000${f.target}`);
    if (!v) { err('forward-undecided', `[${f.item}] declares forward_refs "${f.target}" with no 6c decision — build the intermediate lemmas or drop the item`); continue; }
    if (!FWD_OK.has(v.decision)) err('forward-decision-invalid', `[${f.item}] -> ${f.target}: decision ${JSON.stringify(v.decision)} is not one of ${[...FWD_OK].join(', ')}`);
  }
  // A DECISION RECORDED BUT NOT APPLIED is the failure mode that made step-3
  // "applied" claims untrustworthy, so the outcome is read from disk NOW
  // rather than from the list the Alpha started with.
  const now = compute();
  const liveFwd = new Set(now.forwards.map((f) => `${f.item} ${f.target}`));
  for (const v of fwdV.values()) {
    const k = `${v.item} ${v.target}`;
    if (v.decision === 'dropped' && existsSync(R('items', `${v.item}.md`))) {
      err('forward-drop-not-applied', `[${v.item}] is recorded dropped but items/${v.item}.md is still on disk`);
    }
    if (v.decision === 'lemmas-added' && liveFwd.has(k)) {
      err('forward-still-declared', `[${v.item}] is recorded as having its intermediate lemmas built but still declares forward_refs "${v.target}"`);
    }
  }
  // An edge the Alpha's own repairs INTRODUCED is unaudited work, and the
  // saved list cannot see it. 6c may add results and rewrite citations, so
  // this is a live case, not a hypothetical.
  const listed = new Set(edges.map((e) => `${e.from} ${e.to}`));
  for (const e of now.edges) {
    if (!listed.has(`${e.from} ${e.to}`) && !edgeV.has(`${e.from} ${e.to}`)) {
      err('edge-introduced-unverdicted', `[${e.from}] now cites ${e.to} across groups ${e.from_group}->${e.to_group}; the edge appeared after the work list was written and carries no verdict`);
    }
  }

  console.log(`cross-group-edges: ${edges.length} edge(s), ${forwards.length} forward reference(s), ${errors} error(s)`);
  process.exit(errors ? 1 : 0);
}

die(`cross-group-edges: unknown command ${JSON.stringify(cmd)} — expected list or check`);
