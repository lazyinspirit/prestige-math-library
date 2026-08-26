#!/usr/bin/env node
// step8-scope — partition step-8 adjudication across the group Alphas, and give
// each one the full content of its own group before it starts.
//
// WHY THIS EXISTS. Step 8 was a single lead Alpha with `units: ['all']`,
// `concurrency: 1` and one task file that named no mathematics. Three things
// followed from that shape and all three are what this tool removes.
//
//   1. ONE READER FOR THE WHOLE LEVEL. frontier-18 is 796 items over ten
//      batches in nine categories. A single adjudicator reads every rejection
//      in every subject in one context window, and the last ones it reads are
//      read with the least attention left. Steps 3 and 6 already decided this
//      question the other way: one Alpha per <=3 RELATED batches, assigned by
//      `2-assign` for mathematical relatedness, not by position.
//
//   2. NO CONTENT CONTEXT. The lead's task file carried the step-8 RULES and
//      nothing about the pages. An adjudicator deciding whether a judge's
//      objection to `thm-hilbert-basis` is fatal needs the polynomial-ring
//      conventions that batch 4 fixed, and those live in the batch manifest and
//      in the items themselves — not in a rules file that has read no
//      mathematics.
//
//   3. NO SEAM MAP. A rejection is often about a citation that crosses a page
//      boundary, and sometimes a GROUP boundary. Nothing told an adjudicator
//      which of its `requires` edges left its own group, so the one class of
//      defect that needs two readers to agree had no reader who knew it
//      existed.
//
// This tool is code, not an agent, for the standing reason: which items belong
// to which group, and which rejections are still open, are both functions of
// files on disk (CLAUDE.md, "NO LLM DRIVES A STAGE TRANSITION"). An Alpha that
// had to work its own scope out from the ledger would be doing bookkeeping with
// the attention its mathematics needs.
//
// Usage:
//   node tools/step8-scope.mjs render --run <run>
//   node tools/step8-scope.mjs check  --run <run>
//
// `render` writes:
//   research/<run>-step8-scope.json          the partition, machine-readable
//   research/<run>-alpha-<label>-step8.task.md   one per group, self-contained
//
// `check` is the stage gate. It fails on an unrendered scope, a group with no
// content, a rejection belonging to no group (which would be adjudicated by
// nobody), and a recorded cross-group finding that the owning group never
// answered.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCurrentContextHashes } from './context-hash-pool.mjs';
import { verdictIsCurrent } from './judge-currency.mjs';
import { resolveLineup } from './models.mjs';
import {
  exactSetProblems,
  loadStep8JudgeEvidence,
  readJsonlStrict,
  rejectionKey,
  step8AlertId,
} from './step8-evidence.mjs';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const R = (...p) => join(REPO, ...p);
const argv = process.argv.slice(2);
const mode = argv[0];
const opt = (name, fallback = null) => {
  const at = argv.indexOf(`--${name}`);
  return at >= 0 && argv[at + 1] && !argv[at + 1].startsWith('--') ? argv[at + 1] : fallback;
};

const run = opt('run');
if (!run || !['render', 'check', 'digests', 'published'].includes(mode)) {
  console.error('usage: node tools/step8-scope.mjs <render|check|digests|published> --run <run> [--out <receipt.json>]');
  process.exit(2);
}

const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));
const readJsonl = (p, { allowMissing = true } = {}) => {
  const parsed = readJsonlStrict(p, { allowMissing });
  if (parsed.errors.length) fail(parsed.errors.join('\n'));
  return parsed.rows.map((entry) => entry.row);
};

const scopePath = R('research', `${run}-step8-scope.json`);
const groupsPath = R('research', `${run}-alpha-groups.json`);
const judgePath = R('research', `${run}-judge.jsonl`);
const adjPath = R('research', `${run}-judge-adjudications.jsonl`);
const closurePath = R('research', `${run}-judge-closure.json`);
const crossPath = R('research', `${run}-step8-cross-group.jsonl`);
const alertsPath = R('research', `${run}-step8-alerts.json`);
const alertDecisionsPath = R('research', `${run}-step8-alert-decisions.jsonl`);
const rulesPath = R('briefs/tasks/alpha-step8.md');
const recoveryPath = R('briefs/tasks/alpha-step8-closure-recovery.md');
const preflightPath = R('briefs/tasks/alpha-step8-preflight.md');
const readPath = R('briefs/tasks/alpha-step7-read.md');
const digestPath = (label) => R('research', `${run}-alpha-${label}-step8-context.json`);

/** Every step-7 digest on disk. Missing or malformed ones are skipped here; the
 *  `digests` gate is what fails on them. */
function readAllDigests() {
  const out = [];
  for (const g of readGroups()) {
    const p = digestPath(g.label);
    if (!existsSync(p)) continue;
    try { out.push(readJson(p)); } catch { /* the digests gate reports it */ }
  }
  return out;
}

// ---- the run's shape ---------------------------------------------------------

/** The VALIDATED partition, never the positional fallback.
 *
 *  `stages/mathlib.mts` chunks batches positionally until `2-assign` writes the
 *  real assignment, and the two disagree on purpose — the whole reason the stage
 *  exists is that chunking split topology across two Alphas. A scope rendered
 *  from the fallback would hand an Alpha three unrelated subjects and call it a
 *  group, so this refuses rather than guesses. */
function readGroups() {
  if (!existsSync(groupsPath)) {
    fail(`no ${rel(groupsPath)} — \`2-assign\` has not produced the group assignment yet. `
      + 'Step 8 cannot be partitioned before the partition exists.');
  }
  const raw = readJson(groupsPath);
  const rows = Array.isArray(raw) ? raw : raw?.groups;
  if (!Array.isArray(rows) || !rows.length) fail(`${rel(groupsPath)} holds no groups`);
  return rows.map((g) => ({ label: String(g.label), covers: (g.covers ?? []).map(String) }));
}

const rel = (p) => p.replace(`${REPO}/`, '');
function fail(msg) {
  console.error(`step8-scope: ${msg}`);
  process.exit(1);
}

const manifestOf = (b) => {
  const p = R('research', `${run}-batch-${b}.pages.json`);
  if (!existsSync(p)) fail(`group covers batch ${b} but ${rel(p)} does not exist`);
  const m = readJson(p);
  return Array.isArray(m) ? m : (m.pages ?? []);
};

/** Every page in the run, with the batch and group that owns it. */
function buildIndex(groups) {
  const pageOwner = new Map();   // page id -> {group, batch}
  const itemOwner = new Map();   // item id -> {group, batch, page}
  const pagesOf = new Map();     // group label -> page records
  for (const g of groups) {
    const pages = [];
    for (const b of g.covers) {
      for (const p of manifestOf(b)) {
        const rec = { ...p, batch: b, group: g.label };
        pages.push(rec);
        pageOwner.set(p.id, { group: g.label, batch: b });
        for (const it of p.items ?? []) {
          const id = typeof it === 'string' ? it : it.id;
          itemOwner.set(id, { group: g.label, batch: b, page: p.id });
        }
      }
    }
    pagesOf.set(g.label, pages);
  }
  return { pageOwner, itemOwner, pagesOf };
}

/** Rejections that still owe an outcome, by item.
 *
 *  A capacity refusal is a NULL VERDICT, not a verdict (CLAUDE.md), so a row
 *  without a boolean `keep` is not a rejection and is never handed to an
 *  adjudicator. */
function openRejections() {
  // `7-scope` deliberately renders this partition before the judge sweep so
  // the group readers can start alongside it. At that point no judge ledger
  // exists yet, and the honest rejection set is empty. Once `7-judge` has
  // written the ledger, the later `8-scope` render takes the strict path below
  // and partitions every recorded rejection.
  if (!existsSync(judgePath)) return [];
  const evidence = loadStep8JudgeEvidence(judgePath, adjPath);
  if (evidence.errors.length) fail(evidence.errors.join('\n'));
  const answered = new Set(evidence.answers.keys());
  const reasons = new Map([...evidence.rejections.entries()]
    .map(([key, entry]) => [key, entry.row.reason ?? entry.row.why ?? null]));
  // Once the closure gate has run, it is the exact-current authority. Reading
  // every historical rejection made recovery tasks grow with stale rows from
  // repaired contexts even though those rows no longer owed an adjudication.
  if (existsSync(closurePath)) {
    try {
      const rows = readJson(closurePath)?.unadjudicated_rows;
      if (Array.isArray(rows)) return rows
        .filter((r) => r && typeof r.id === 'string' && typeof r.model === 'string'
          && typeof r.context_sha256 === 'string')
        .filter((r) => !answered.has(rejectionKey(r)))
        .map((r) => ({ ...r, reason: reasons.get(rejectionKey(r)) ?? null }));
    } catch { /* the closure gate reports malformed receipts; fall back safely */ }
  }
  const out = [];
  for (const entry of evidence.rejections.values()) {
    const r = entry.row;
    const key = rejectionKey(r);
    if (answered.has(key)) continue;
    out.push({ id: r.id, model: r.model, context_sha256: r.context_sha256, reason: r.reason ?? r.why ?? null });
  }
  return out;
}

function collectAlerts(groups, index) {
  const alerts = [];
  const problems = [];
  const groupLabels = new Set(groups.map((g) => g.label));
  for (const digest of readAllDigests()) {
    const from = String(digest.group ?? '');
    for (const raw of digest.alerts ?? []) {
      const owner = index.itemOwner.get(raw.item)?.group;
      const alert = {
        version: 1,
        source: 'step7-read',
        from_group: from,
        owning_group: owner ?? '',
        item: String(raw.item ?? ''),
        finding: String(raw.finding ?? ''),
        severity: String(raw.severity ?? ''),
        source_rejection: null,
      };
      alert.alert_id = step8AlertId(alert);
      if (!groupLabels.has(from)) problems.push(`${alert.alert_id}: unknown source group ${from}`);
      if (!owner) problems.push(`${alert.alert_id}: item ${alert.item} belongs to no run group`);
      if (owner === from) problems.push(`${alert.alert_id}: source group owns ${alert.item}; this belongs in concerns`);
      if (!alert.finding.trim()) problems.push(`${alert.alert_id}: finding is empty`);
      alerts.push(alert);
    }
  }
  for (const raw of readJsonl(crossPath)) {
    const alert = {
      version: 1,
      source: 'step8-rejection',
      from_group: String(raw.from_group ?? ''),
      owning_group: String(raw.owning_group ?? ''),
      item: String(raw.item ?? ''),
      finding: String(raw.finding ?? ''),
      severity: String(raw.severity ?? 'would-be-fatal'),
      source_rejection: raw.source_rejection ?? null,
    };
    alert.alert_id = step8AlertId(alert);
    const actualOwner = index.itemOwner.get(alert.item)?.group;
    if (!groupLabels.has(alert.from_group) || !groupLabels.has(alert.owning_group))
      problems.push(`${alert.alert_id}: source and owner must be current run groups`);
    if (actualOwner !== alert.owning_group || actualOwner === alert.from_group)
      problems.push(`${alert.alert_id}: ownership does not match the Step-8 scope`);
    if (!alert.finding.trim()) problems.push(`${alert.alert_id}: finding is empty`);
    const source = alert.source_rejection;
    if (!source || typeof source.id !== 'string' || typeof source.model !== 'string'
      || !/^[a-f0-9]{64}$/.test(String(source.context_sha256 ?? '')))
      problems.push(`${alert.alert_id}: Step-8 alert requires an exact source_rejection tuple`);
    alerts.push(alert);
  }
  const ids = new Set();
  for (const alert of alerts) {
    if (ids.has(alert.alert_id)) problems.push(`${alert.alert_id}: duplicate alert`);
    ids.add(alert.alert_id);
  }
  return { alerts, problems };
}

/** Edges that leave a group: this group's pages requiring another group's, and
 *  another group's requiring this one's. Published dependencies are NOT here —
 *  they are settled text and are named in the task file separately. */
function seams(groups, index) {
  const out = new Map(groups.map((g) => [g.label, { out: [], in: [] }]));
  for (const g of groups) {
    for (const p of index.pagesOf.get(g.label)) {
      for (const req of p.requires ?? []) {
        const owner = index.pageOwner.get(req);
        if (!owner || owner.group === g.label) continue;
        out.get(g.label).out.push({ from: p.id, to: req, toGroup: owner.group, toBatch: owner.batch });
        out.get(owner.group).in.push({ from: p.id, fromGroup: g.label, to: req });
      }
    }
  }
  return out;
}

// ---- render ------------------------------------------------------------------

function itemLine(it) {
  const id = typeof it === 'string' ? it : it.id;
  const kind = typeof it === 'string' ? '' : (it.kind ?? '');
  const title = typeof it === 'string' ? '' : (it.title ?? '');
  return `- \`${id}\`${kind ? ` · ${kind}` : ''}${title ? ` — ${title}` : ''}`;
}

/** The derived context every per-group step-8 file opens with.
 *
 *  Shared by the adjudication file and the closure-recovery file, because both
 *  are read by a fresh agent that knows nothing about the group. The BODY
 *  differs — the rules, or the reconstruction instructions — and is appended by
 *  the caller after a rule. Nothing here is a judgement about mathematics. */
function groupHeader(g, index, seam, rejections, alerts) {
  const pages = index.pagesOf.get(g.label);
  const aPages = pages.filter((p) => p.kind === 'A');
  const nItems = pages.reduce((n, p) => n + (p.items ?? []).length, 0);
  const mine = rejections.filter((r) => index.itemOwner.get(r.id)?.group === g.label);
  const byItem = new Map();
  for (const r of mine) (byItem.get(r.id) ?? byItem.set(r.id, []).get(r.id)).push(r);

  const L = [];
  L.push(`# Step 8 — group **${g.label}**, run \`${run}\``);
  L.push('');
  L.push(`You are the group Alpha for batches ${g.covers.map((b) => `**${b}**`).join(', ')}: `
    + `${aPages.length} A/B pair(s), ${pages.length} page(s), ${nItems} item(s), `
    + `${mine.length} open rejection(s) over ${byItem.size} item(s).`);
  L.push('');
  L.push('The engine resumes the read-only conversation you began for this group at');
  L.push('step 7 whenever its exact session record is available; otherwise this file is');
  L.push('the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or');
  L.push('another group is assumed. Everything below is');
  L.push('derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement');
  L.push('about mathematics.');
  L.push('');

  // The step-7 digest, when the reading half has produced one. Named first
  // because reading it first is the whole reason it was written: it is this
  // group's own account of the mathematics, recorded before any verdict
  // existed, and its value is precisely that it was not shaped by the
  // objections that follow.
  {
    const d = digestPath(g.label);
    L.push('## What you recorded at step 7');
    L.push('');
    if (existsSync(d)) {
      L.push(`\`${rel(d)}\` is what a group Alpha for this group wrote during step 7,`);
      L.push('while the judges were still sweeping and no verdict existed. It records the');
      L.push('conventions your pages fix, which items the rest lean on, which published');
      L.push('dependencies were actually opened, and what already looked thin.');
      L.push('');
      L.push('**Its `concerns` list is evidence, not decoration.** Each entry was found with');
      L.push('nobody suggesting where to look. A judge rejection landing at the same place is');
      L.push('two independent readings agreeing and should be very hard to call a');
      L.push('`false_positive`; a rejection landing nowhere near any of them is not thereby');
      L.push('wrong, but it is the case to read most carefully against the text.');
      L.push('');
      L.push('It is notes, not authority. Where it and the item files disagree, the files win.');
    } else {
      L.push('**No step-7 digest exists for this group.** The reading half did not run or did');
      L.push('not produce one, so you are meeting this mathematics for the first time with the');
      L.push('rejections already in front of you. Read the pages before the verdicts anyway —');
      L.push('the order matters more than where the notes came from.');
    }
    L.push('');
  }

  L.push('## Read scope, write scope');
  L.push('');
  L.push('**You may read the entire library.** `items/` holds every published item and');
  L.push('every item this run has built, and your sandbox is the repository root. Open');
  L.push('anything a rejection touches — a published dependency, another group\'s page,');
  L.push('a definition three levels down. Adjudicating a citation objection without');
  L.push('opening the cited item is exactly what the refuter rule forbids.');
  L.push('');
  L.push('**You may write only inside your own group.** A `confirmed_fatal` licenses a');
  L.push('repair to an item in the batches listed above. If a rejection\'s real defect');
  L.push('lies in an item owned by another group, do not repair it: record the finding');
  L.push(`in \`research/${run}-step8-cross-group.jsonl\` as`);
  L.push('`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`');
  L.push('and adjudicate your own rejection on what is true. The source tuple is');
  L.push('provenance only; it cannot license a repair to the target. The gate routes a');
  L.push('stable alert to the owning group, and a finding nobody answers fails the stage.');
  L.push('');

  L.push('## Your pages');
  L.push('');
  L.push('| batch | page | kind | category | order | requires |');
  L.push('|---|---|---|---|---|---|');
  for (const p of pages) {
    const reqs = (p.requires ?? []).map((r) => `\`${r}\``).join(', ') || '—';
    L.push(`| ${p.batch} | \`${p.id}\` | ${p.kind} | ${p.category ?? ''} | ${p.order ?? ''} | ${reqs} |`);
  }
  L.push('');

  L.push('## Your content, in full');
  L.push('');
  L.push('Every item you own. This is the inventory, not the mathematics — open the');
  L.push('files under `items/` for that.');
  L.push('');
  for (const p of pages) {
    const items = p.items ?? [];
    L.push(`### \`${p.id}\` — ${p.title ?? ''} (${items.length} item(s))`);
    L.push('');
    if (!items.length) L.push('- *(the manifest lists no items for this page)*');
    else for (const it of items) L.push(itemLine(it));
    L.push('');
  }

  L.push('## Your seams');
  L.push('');
  if (!seam.out.length && !seam.in.length) {
    L.push('**No dependency edge crosses your group boundary.** Every `requires` your');
    L.push('pages declare points inside your own batches or at published content. A');
    L.push('cross-group finding is therefore unexpected here; if you record one, say');
    L.push('what made you look.');
  } else {
    if (seam.out.length) {
      L.push('Your pages depend on another group\'s:');
      L.push('');
      for (const e of seam.out) L.push(`- \`${e.from}\` requires \`${e.to}\` (group ${e.toGroup}, batch ${e.toBatch})`);
      L.push('');
    }
    if (seam.in.length) {
      L.push('Another group\'s pages depend on yours:');
      L.push('');
      for (const e of seam.in) L.push(`- \`${e.from}\` (group ${e.fromGroup}) requires your \`${e.to}\``);
      L.push('');
    }
    L.push('Both directions are yours to check for citation fidelity: the citing text must');
    L.push('state the cited proposition, not a summary of what it is for, and must not have');
    L.push('changed a domain, quantifier, hypothesis, direction or conclusion.');
  }
  L.push('');

  // Alerts are separate from judge evidence. They carry stable ids and require
  // an owning-group disposition; no source tuple is ever relabelled as though a
  // judge had rejected the target item.
  {
    const incoming = alerts.filter((alert) => alert.owning_group === g.label);
    L.push('## Alerts from other groups');
    L.push('');
    if (!incoming.length) {
      L.push('None. No other group flagged an item you own.');
    } else {
      L.push(`${incoming.length} defect(s) another group found in items you own, while reading at`);
      L.push('step 7. They could not repair them and did not adjudicate them. You own these.');
      L.push('');
      for (const a of incoming) {
        L.push(`- **${a.alert_id} · \`${a.item}\`** (from group ${a.from_group}, ${a.severity}) — ${a.finding}`);
      }
      L.push('');
      L.push(`Append one owning-group disposition per alert to \`research/${run}-step8-alert-decisions.jsonl\`.`);
      L.push('An alert is not a verdict. A fatal repair still requires a real targeted judge rejection');
      L.push('and its exact Alpha adjudication; never reuse the source rejection as target evidence.');
    }
    L.push('');
  }

  L.push('## Your rejections');
  L.push('');
  if (!mine.length) {
    L.push('**None open at render time.** That is a real outcome, not an error: Terra');
    L.push('may have passed every item you own. Verify it against');
    L.push(`\`research/${run}-judge.jsonl\` yourself before reporting nothing to do —`);
    L.push('a rejection recorded after this file was rendered is still yours.');
  } else {
    L.push('| item | page | model | context_sha256 |');
    L.push('|---|---|---|---|');
    for (const r of mine) {
      const owner = index.itemOwner.get(r.id);
      L.push(`| \`${r.id}\` | \`${owner.page}\` | ${r.model} | \`${r.context_sha256}\` |`);
    }
    L.push('');
    L.push('Rendered from the ledger at scope time. **The ledger is the authority** — if');
    L.push('a row appeared since, it is still yours to adjudicate.');
  }
  L.push('');

  return L.join('\n');
}

/** A per-group file: the derived context, a rule, then a template body.
 *
 *  Separate bodies are rendered per group — adjudication, closure recovery and
 *  targeted repair-integrity review — because dispatch resolves a task list to the FIRST
 *  file that exists. A recovery round pointed at the ordinary group file would
 *  silently lose the instructions it was dispatched for, and a recovery round
 *  pointed at the shared brief would lose the group's content. Rendering both
 *  is what lets each round have both. */
function compose(header, bodyPath) {
  return `${header}\n---\n\n${readFileSync(bodyPath, 'utf8').replaceAll('{{run}}', run).trim()}\n`;
}

if (mode === 'render') {
  const groups = readGroups();
  const index = buildIndex(groups);
  const seam = seams(groups, index);
  const rejections = openRejections();
  const alertReceipt = collectAlerts(groups, index);
  if (alertReceipt.problems.length) fail(alertReceipt.problems.join('\n'));
  writeFileSync(alertsPath, `${JSON.stringify({ version: 1, run, alerts: alertReceipt.alerts }, null, 2)}\n`);

  const orphans = rejections.filter((r) => !index.itemOwner.has(r.id));

  const scope = {
    run,
    rendered_from: {
      groups: rel(groupsPath),
      judge_ledger: rel(judgePath),
      adjudications: rel(adjPath),
    },
    groups: groups.map((g) => {
      const pages = index.pagesOf.get(g.label);
      const mine = rejections.filter((r) => index.itemOwner.get(r.id)?.group === g.label);
      return {
        label: g.label,
        batches: g.covers,
        task: `research/${run}-alpha-${g.label}-step8.task.md`,
        pages: pages.map((p) => p.id),
        items: pages.flatMap((p) => (p.items ?? []).map((it) => (typeof it === 'string' ? it : it.id))),
        seams: seam.get(g.label),
        rejections: mine,
      };
    }),
    by_item: Object.fromEntries([...index.itemOwner].map(([id, o]) => [id, o.group])),
    orphan_rejections: orphans,
  };
  writeFileSync(scopePath, `${JSON.stringify(scope, null, 2)}\n`);

  for (const g of groups) {
    const header = groupHeader(g, index, seam.get(g.label), rejections, alertReceipt.alerts);
    writeFileSync(R('research', `${run}-alpha-${g.label}-step8.task.md`), compose(header, rulesPath));
    writeFileSync(R('research', `${run}-alpha-${g.label}-step8-recovery.task.md`), compose(header, recoveryPath));
    writeFileSync(R('research', `${run}-alpha-${g.label}-step8-preflight.task.md`), compose(header, preflightPath));
    writeFileSync(R('research', `${run}-alpha-${g.label}-step8-close.task.md`), compose(header, R('briefs/tasks/alpha-step8-close.md')));
    writeFileSync(R('research', `${run}-alpha-${g.label}-step7-read.task.md`), compose(header, readPath));
  }

  const total = rejections.length;
  console.log(`step8-scope: ${groups.length} group(s), ${index.pageOwner.size} page(s), `
      + `${index.itemOwner.size} item(s), ${total} open rejection(s) partitioned, `
      + `${alertReceipt.alerts.length} alert(s) materialised`);
  for (const g of scope.groups) {
    console.log(`  ${g.label}: batches ${g.batches.join(',')} · ${g.pages.length} page(s) · `
      + `${g.items.length} item(s) · ${g.rejections.length} rejection(s) · `
      + `${g.seams.out.length} out-edge(s), ${g.seams.in.length} in-edge(s)`);
  }
  if (orphans.length) {
    console.error(`\nstep8-scope: ${orphans.length} rejection(s) belong to no batch manifest:`);
    for (const o of orphans) console.error(`  ${o.id} (${o.model})`);
    console.error('Nobody would adjudicate these. Fix the manifests or the ledger.');
    process.exit(1);
  }
  process.exit(0);
}

// ---- digests -----------------------------------------------------------------

// The gate for the step-7 reading half. A read-only Alpha cannot write a file, so
// its digest is materialised by `dispatch.mjs --result-artifact` from the
// schema-constrained final message; what this checks is that the digest is the
// group's OWN and is not vacuous.
//
// Vacuity is the failure mode that matters. An agent that spent no time can
// still return a schema-valid object — right shape, nothing in it — and the
// dispatch exits zero. So the check is against the group's real size: a group
// that owns 200 items and reports reading 3 did not do this pass. An empty
// `concerns` list is NOT vacuity and is never failed here: a careful reading
// that finds nothing thin is a result, and failing it would teach the lane to
// manufacture concerns.
if (mode === 'digests') {
  const groups = readGroups();
  const index = buildIndex(groups);
  const bad = [];
  let read = 0;
  for (const g of groups) {
    const p = digestPath(g.label);
    if (!existsSync(p)) { bad.push(`group ${g.label}: no ${rel(p)} — the step-7 read produced no digest`); continue; }
    let d;
    try { d = readJson(p); } catch (e) { bad.push(`group ${g.label}: ${rel(p)} is not valid JSON (${e.message})`); continue; }
    if (String(d.group) !== g.label) bad.push(`group ${g.label}: digest reports group "${d.group}"`);
    const owned = index.pagesOf.get(g.label);
    const ownedPages = owned.map((p2) => p2.id);
    const ownedItems = owned.flatMap((p2) => (p2.items ?? []).map((item) => typeof item === 'string' ? item : item.id));
    if (!Array.isArray(d.pages_read)) bad.push(`group ${g.label}: pages_read must be an exact id array`);
    else bad.push(...exactSetProblems(d.pages_read.map(String), ownedPages, `group ${g.label} pages_read`));
    if (!Array.isArray(d.items_read)) bad.push(`group ${g.label}: items_read must be an exact id array, not a self-attested count`);
    else bad.push(...exactSetProblems(d.items_read.map(String), ownedItems, `group ${g.label} items_read`));
    const expectedSeams = [...seams(groups, index).get(g.label).out, ...seams(groups, index).get(g.label).in]
      .map((edge) => `${edge.from}\u0000${edge.to}`);
    if (!Array.isArray(d.seams_checked)) bad.push(`group ${g.label}: seams_checked must be an exact edge array`);
    else bad.push(...exactSetProblems(d.seams_checked.map((edge) => `${edge?.from ?? ''}\u0000${edge?.to ?? ''}`),
      expectedSeams, `group ${g.label} seams_checked`));
    if (!(d.conventions ?? []).length) {
      bad.push(`group ${g.label}: no conventions recorded — every page fixes at least one`);
    }
    if (!(d.load_bearing ?? []).length) {
      bad.push(`group ${g.label}: no load-bearing items recorded`);
    }
    // An alert is for ANOTHER group. One aimed at an item the sender owns is a
    // defect it should have kept in `concerns` and adjudicated itself, and
    // delivering it would send the group its own finding back.
    for (const a of d.alerts ?? []) {
      const owner = index.itemOwner.get(a.item);
      if (!owner) bad.push(`group ${g.label}: alert names \`${a.item}\`, which belongs to no group in this run`);
      else if (owner.group === g.label) bad.push(`group ${g.label}: alert names \`${a.item}\`, which it owns — that is a concern, not an alert`);
    }
    read += Array.isArray(d.items_read) ? d.items_read.length : 0;
  }
  if (bad.length) {
    console.error(`step8-scope --digests: ${bad.length} problem(s):`);
    for (const b of bad) console.error(`  ${b}`);
    process.exit(1);
  }
  console.log(`step8-scope --digests: ${groups.length} group(s) read their pairs, ${read} item(s) opened across the level`);
  process.exit(0);
}

// ---- published ---------------------------------------------------------------

// A step-8 Alpha that finds a falsehood in a PUBLISHED item repairs it and routes
// the repaired item to every currently configured judge. This gate is what
// makes the second half real: without it, a repair to live content ships on one
// agent's say-so, and published content has no step-6 reader left to certify it.
//
// Judge certification is the certifier here, and it is stronger than the single
// reader the published-dependency-repair rule asks for at step 6 — but only if
// the verdicts are CURRENT against the repaired text. A verdict cast before the
// repair says nothing about it.
if (mode === 'published') {
  const rows = readJsonl(R('research', `${run}-step8-published-repairs.jsonl`));
  const bad = [];
  const repaired = rows.filter((r) => r.kind === 'repaired');
  const escalated = rows.filter((r) => r.kind === 'escalated');
  const receiptPath = opt('out');
  const pending = { version: 1, run, repaired: [...new Set(repaired.map((row) => row.id).filter(Boolean))],
    needs_rejudge: [], unadjudicated_rows: [], open_fatal: [], escalations: escalated };

  // An escalation is a real disposition and must not be silent: the owner rule
  // reserves deletions, id changes and reading-order changes on published pages,
  // and a correction needing one of those is reported rather than improvised.
  for (const r of escalated) {
    if (typeof r.id !== 'string' || !r.id || typeof r.group !== 'string' || !r.group
      || typeof r.found_via !== 'string' || !r.found_via || !String(r.why ?? '').trim())
      bad.push('escalated row requires {kind:"escalated", id, group, found_via, why}');
    else bad.push(`\`${r.id}\` is escalated to the owner and unresolved: ${r.why}`);
  }

  const repairedIds = [...new Set(repaired.map((row) => row.id).filter(Boolean))];
  // A run with no published repairs has no published judge obligation.  Do not
  // manufacture a missing-ledger failure for an empty lane; escalations above
  // remain hard blockers in their own right.
  const evidence = repairedIds.length
    ? loadStep8JudgeEvidence(judgePath, adjPath)
    : { errors: [], answers: new Map(), rejections: new Map() };
  bad.push(...evidence.errors);
  const verdicts = repairedIds.length ? readJsonl(judgePath) : [];
  const { models: currentModels } = resolveLineup();
  const currentHashes = new Map();
  for (const result of await buildCurrentContextHashes(repairedIds, {
    cwd: REPO,
    cachePath: R('research', `${run}-judge-context-hashes.json`),
  })) {
    if (result.ok) currentHashes.set(result.id, { context: result.context, item: result.item });
    else bad.push(result.error);
  }
  for (const r of repaired) {
    const p = R('items', `${r.id}.md`);
    if (!existsSync(p)) { bad.push(`repaired row names \`${r.id}\`, which is not an item on disk`); continue; }
    const now = currentHashes.get(r.id);
    if (!now) continue;
    // Use the same currency predicate and same-context configured-model shape as
    // level-coverage. Published items are outside the run manifests, so the
    // run-scoped closure receipt cannot perform this check for us.
    const byContext = new Map();
    for (const verdict of verdicts.filter((v) => v.id === r.id
      && currentModels.includes(v.model) && typeof v.context_sha256 === 'string'
      && (v.keep === true || v.keep === false))) {
      if (!byContext.has(verdict.context_sha256)) byContext.set(verdict.context_sha256, new Map());
      const byModel = byContext.get(verdict.context_sha256);
      const prior = byModel.get(verdict.model);
      if (!prior || String(verdict.at ?? '') >= String(prior.at ?? '')) byModel.set(verdict.model, verdict);
    }
    const eligible = [...byContext.entries()].filter(([context, byModel]) =>
      currentModels.every((model) => byModel.has(model)
        && verdictIsCurrent({ context_sha256: context, item_sha256: byModel.get(model).item_sha256 }, now)));
    if (!eligible.length) {
      bad.push(`\`${r.id}\` was repaired but lacks a current verdict from ${currentModels.join(' + ')} — `
        + 'historic or retired-lane rows do not certify the repaired text');
      pending.needs_rejudge.push(r.id);
      continue;
    }
    eligible.sort((a, b) => Math.max(...currentModels.map((m) => String(a[1].get(m).at ?? '')))
      < Math.max(...currentModels.map((m) => String(b[1].get(m).at ?? ''))) ? 1 : -1);
    for (const v of [...eligible[0][1].values()].filter((v2) => v2.keep === false)) {
      const answer = evidence.answers.get(rejectionKey(v))?.row;
      if (!answer) {
        bad.push(`\`${r.id}\`: ${v.model} rejected the repaired text and nothing adjudicated it`);
        pending.unadjudicated_rows.push({ id: v.id, model: v.model, context_sha256: v.context_sha256 });
      } else if (answer.outcome === 'confirmed_fatal') {
        bad.push(`\`${r.id}\`: ${v.model} rejection was confirmed fatal and remains on the current text`);
        pending.open_fatal.push(r.id);
      }
    }
  }

  pending.needs_rejudge = [...new Set(pending.needs_rejudge)].sort();
  pending.open_fatal = [...new Set(pending.open_fatal)].sort();
  pending.unadjudicated_rows.sort((a, b) => `${a.id}|${a.model}`.localeCompare(`${b.id}|${b.model}`));
  if (receiptPath) {
    const resolvedReceipt = receiptPath.startsWith('/') ? receiptPath : R(receiptPath);
    writeFileSync(resolvedReceipt, `${JSON.stringify(pending, null, 2)}\n`);
  }

  if (bad.length) {
    console.error(`step8-scope --published: ${bad.length} problem(s):`);
    for (const b of bad) console.error(`  ${b}`);
    process.exit(1);
  }
  console.log(`step8-scope --published: ${repaired.length} published item(s) repaired and judged by the configured model set, `
    + `${escalated.length} escalated, ${rows.length} row(s) checked`);
  process.exit(0);
}

// ---- check -------------------------------------------------------------------

const problems = [];
const reportProblems = () => {
  if (!problems.length) return;
  console.error(`step8-scope --check: ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
};

if (!existsSync(scopePath)) {
  fail(`no ${rel(scopePath)} — stage \`8-scope\` has not rendered the partition. `
    + 'Nothing below could be checked against it.');
}
const scope = readJson(scopePath);
const groups = readGroups();

// 1. The rendered partition still describes the assignment on disk. A re-run of
//    `2-assign` after a render would leave an Alpha holding batches it no longer
//    owns, and the render is cheap to redo.
const rendered = new Map(scope.groups.map((g) => [g.label, g.batches.join(',')]));
for (const g of groups) {
  if (!rendered.has(g.label)) problems.push(`group ${g.label} is assigned batches but absent from ${rel(scopePath)}`);
  else if (rendered.get(g.label) !== g.covers.join(',')) {
    problems.push(`group ${g.label} covers ${g.covers.join(',')} on disk but ${rendered.get(g.label)} in the rendered scope — re-render`);
  }
}
for (const label of rendered.keys()) {
  if (!groups.some((g) => g.label === label)) problems.push(`rendered scope holds group ${label}, which the assignment does not`);
}

// 2. Every group has a task file, and it is not empty of content. A group Alpha
//    dispatched at a rules-only file is the shape this stage exists to remove.
for (const g of scope.groups) {
  const p = R(g.task);
  if (!existsSync(p)) { problems.push(`group ${g.label}: ${g.task} does not exist`); continue; }
  if (!g.pages.length) problems.push(`group ${g.label}: the rendered scope names no pages`);
  if (!g.items.length) problems.push(`group ${g.label}: the rendered scope names no items`);
  const body = readFileSync(p, 'utf8');
  for (const page of g.pages) {
    if (!body.includes(page)) { problems.push(`group ${g.label}: ${g.task} never names its own page \`${page}\``); break; }
  }
}

// Report what is already wrong BEFORE the index-dependent checks. Building the
// index reads every batch manifest and hard-fails on a missing one, and a stale
// or half-rendered scope is exactly the state where a manifest can be missing —
// so an early exit there would hide the accumulated problems behind a message
// about a file, which is the less useful half of the truth.
if (problems.length) reportProblems();

// 3. Every OPEN rejection maps to exactly one group. This is the direction that
//    matters: an item in no manifest is adjudicated by nobody, and the closure
//    gate would then fail at the end of a stage that had already passed.
const index = buildIndex(groups);
const open = openRejections();
const orphans = open.filter((r) => !index.itemOwner.has(r.id));
for (const o of orphans) problems.push(`rejection ${o.id} (${o.model}) belongs to no group — nobody adjudicates it`);

// 4. Every cross-group alert has a stable identity and a genuine owning-group
//    disposition. Alerts are observations, never relabelled judge rejections.
const alertReceipt = collectAlerts(groups, index);
problems.push(...alertReceipt.problems);
const alertById = new Map(alertReceipt.alerts.map((alert) => [alert.alert_id, alert]));
// The same checker closes both renders. During `7-scope` the ledger does not
// exist yet, so there cannot be a judge-backed cross-group alert to validate.
// `8-scope` runs after the sweep and takes the strict evidence path.
const evidence = existsSync(judgePath)
  ? loadStep8JudgeEvidence(judgePath, adjPath)
  : { errors: [], answers: new Map(), rejections: new Map() };
problems.push(...evidence.errors);
for (const alert of alertReceipt.alerts.filter((entry) => entry.source === 'step8-rejection')) {
  const source = evidence.rejections.get(rejectionKey(alert.source_rejection))?.row;
  if (!source) problems.push(`${alert.alert_id}: source_rejection is not a real keep:false judge row`);
  else if (index.itemOwner.get(source.id)?.group !== alert.from_group)
    problems.push(`${alert.alert_id}: source rejection is not owned by raising group ${alert.from_group}`);
}
const decisionRows = readJsonl(alertDecisionsPath);
const decisions = new Map();
for (const decision of decisionRows) {
  if (decision?.version !== 1 || typeof decision?.alert_id !== 'string'
    || typeof decision?.rationale !== 'string' || decision.rationale.trim().length < 20
    || typeof decision?.at !== 'string' || !Number.isFinite(Date.parse(decision.at))
    || !['not_defect', 'nonfatal', 'covered_by_rejection', 'confirmed_fatal_unlicensed'].includes(decision?.outcome)) {
    problems.push(`malformed alert decision ${JSON.stringify(decision)}`);
    continue;
  }
  if (!alertById.has(decision.alert_id)) {
    problems.push(`decision names unknown alert ${decision.alert_id}`);
    continue;
  }
  decisions.set(decision.alert_id, decision);
}
for (const alert of alertReceipt.alerts) {
  const decision = decisions.get(alert.alert_id);
  if (!decision) {
    problems.push(`${alert.alert_id}: alert on \`${alert.item}\` has no owning-group disposition`);
    continue;
  }
  if (String(decision.owning_group ?? '') !== alert.owning_group
    || String(decision.item ?? '') !== alert.item
    || String(decision.from_group ?? '') !== alert.from_group) {
    problems.push(`${alert.alert_id}: decision provenance does not match the materialised alert`);
    continue;
  }
  if (decision.outcome === 'confirmed_fatal_unlicensed') {
    problems.push(`${alert.alert_id}: owning group confirmed a fatal defect in \`${alert.item}\` but no targeted rejection licenses repair`);
    continue;
  }
  if (decision.outcome === 'covered_by_rejection') {
    const target = decision.target_rejection;
    const key = rejectionKey(target);
    const rejection = evidence.rejections.get(key)?.row;
    const answer = evidence.answers.get(key)?.row;
    if (!rejection || rejection.id !== alert.item) {
      problems.push(`${alert.alert_id}: covered_by_rejection does not name a real rejection of target ${alert.item}`);
    } else if (!answer || answer.outcome !== 'confirmed_fatal') {
      problems.push(`${alert.alert_id}: target rejection lacks an exact confirmed_fatal adjudication`);
    }
  }
}
writeFileSync(alertsPath, `${JSON.stringify({ version: 1, run, alerts: alertReceipt.alerts }, null, 2)}\n`);

reportProblems();
console.log(`step8-scope --check: ${scope.groups.length} group(s) scoped, `
  + `${index.itemOwner.size} item(s) partitioned, ${open.length} open rejection(s) routed, `
  + `${alertReceipt.alerts.length} cross-group alert(s) dispositioned`);
