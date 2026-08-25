#!/usr/bin/env node
// Durable, exact decisions for Step 3 coverage declines.
//
// A page-level `sufficient` verdict does not say which deferred or out-of-scope
// rows were actually checked.  This tool gives each decline a stable identity
// and binds its decision to both the exact coverage row and the relevant page
// closure.  Step 9 can then review only decisions whose mathematical context
// changed.  Runs created before this receipt existed safely fall back to a full
// review because every row is pending.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const argv = process.argv.slice(2);
const command = argv[0];
const value = (flag) => { const at = argv.indexOf(flag); return at < 0 ? '' : argv[at + 1] ?? ''; };
const run = value('--run');
const groupArg = value('--group');
const all = argv.includes('--all');
const root = resolve(value('--root') || join(dirname(fileURLToPath(import.meta.url)), '..'));
const research = join(root, 'research');
const die = (message, code = 1) => { console.error(`ERROR ${message}`); process.exit(code); };
if (!run || !['refresh', 'delta', 'check', 'render'].includes(command)) {
  die('usage: node tools/scope-decisions.mjs <refresh|delta|check|render> --run <run> [--group <label>|--all] [--out <path>] [--root <repo>]', 2);
}

const canonical = (value) => {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
};
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const readJson = (path, label = path) => {
  if (!existsSync(path)) die(`${label}: missing`);
  try { return JSON.parse(readFileSync(path, 'utf8')); }
  catch (cause) { die(`${label}: invalid JSON (${cause.message})`); }
};

const plan = readJson(join(research, 'plan-spec.json'), 'research/plan-spec.json');
const pages = Array.isArray(plan?.pages) ? plan.pages : [];
const pageById = new Map(pages.map((page) => [String(page.id), page]));
const itemOwner = new Map();
for (const page of pages) for (const item of page?.items ?? []) {
  const id = typeof item === 'string' ? item : item?.id;
  if (id) itemOwner.set(String(id), String(page.id));
}

function closureIds(pageId) {
  const seen = new Set();
  const visit = (id) => {
    if (!id || seen.has(id)) return;
    seen.add(id);
    for (const dependency of pageById.get(id)?.requires ?? []) visit(String(dependency));
  };
  visit(pageId);
  return [...seen].sort();
}

function destinationState(destination) {
  if (!destination) return { kind: 'none' };
  if (destination === 'owner-decision') return { kind: 'owner-decision' };
  if (pageById.has(destination)) {
    const page = pageById.get(destination);
    return { kind: 'page', id: destination, order: page.order, category: page.category, title: page.title,
      requires: [...(page.requires ?? [])].map(String).sort(),
      items: (page.items ?? []).map((item) => String(typeof item === 'string' ? item : item?.id ?? '')).filter(Boolean).sort() };
  }
  if (itemOwner.has(destination)) return { kind: 'item', id: destination, page: itemOwner.get(destination) };
  return { kind: 'missing', id: destination };
}

const coverageFiles = readdirSync(research)
  .filter((name) => new RegExp(`^${run.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-batch-(\\d+)\\.coverage\\.json$`).test(name))
  .sort((a, b) => Number(a.match(/batch-(\d+)/)?.[1]) - Number(b.match(/batch-(\d+)/)?.[1]));
if (!coverageFiles.length) die(`${run}: no batch coverage files`);

let groups = [];
const groupsPath = join(research, `${run}-alpha-groups.json`);
if (existsSync(groupsPath)) {
  const parsed = readJson(groupsPath);
  groups = Array.isArray(parsed) ? parsed : parsed?.groups ?? [];
}
if (!groups.length) groups = [{ label: 'all', covers: coverageFiles.map((name) => name.match(/batch-(\d+)/)[1]) }];
const groupByBatch = new Map();
for (const group of groups) for (const batch of group.covers ?? []) groupByBatch.set(String(batch), String(group.label));

function currentDeclines() {
  const out = [];
  for (const filename of coverageFiles) {
    const batch = filename.match(/batch-(\d+)/)[1];
    const coverage = readJson(join(research, filename));
    for (const pageRecord of coverage?.pages ?? []) {
      const pageId = String(pageRecord?.page ?? '');
      const page = pageById.get(pageId);
      const context = {
        page: page ? { id: pageId, order: page.order, kind: page.kind, category: page.category, title: page.title,
          requires: [...(page.requires ?? [])].map(String).sort(),
          closure: closureIds(pageId).filter((id) => id !== pageId).map((id) => {
            const dependency = pageById.get(id);
            return { id, order: dependency?.order, kind: dependency?.kind, category: dependency?.category,
              title: dependency?.title, requires: [...(dependency?.requires ?? [])].map(String).sort(),
              items: (dependency?.items ?? []).map((item) => String(typeof item === 'string' ? item : item?.id ?? '')).filter(Boolean).sort() };
          }) }
          : { id: pageId, missing: true },
      };
      const sections = [{ kind: 'canonical', url: null, rows: pageRecord?.canonical ?? [] },
        ...(pageRecord?.sources ?? []).map((source) => ({ kind: 'source', url: String(source?.url ?? ''), rows: source?.contents ?? [] }))];
      for (const section of sections) for (const row of section.rows) {
        if (!['deferred', 'out-of-scope'].includes(row?.disposition)) continue;
        const identity = { batch, page: pageId, source_kind: section.kind, source_url: section.url, name: String(row?.name ?? '') };
        const destination = typeof row?.destination === 'string' ? row.destination : null;
        const rowSha = sha256(canonical(row));
        out.push({
          decline_id: sha256(canonical(identity)),
          group: groupByBatch.get(batch) ?? 'all',
          ...identity,
          disposition: row.disposition,
          destination,
          reason: typeof row?.reason === 'string' ? row.reason : '',
          row_sha256: rowSha,
          context_sha256: sha256(canonical({ ...context, destination: destinationState(destination) })),
        });
      }
    }
  }
  const seen = new Set();
  for (const row of out) {
    if (seen.has(row.decline_id)) die(`${row.decline_id}: duplicate decline identity on ${row.page}: ${row.name}`);
    seen.add(row.decline_id);
  }
  return out.sort((a, b) => a.decline_id.localeCompare(b.decline_id));
}

const decisionPath = (label) => join(research, `${run}-alpha-${label}-scope-decisions.json`);
const loadDecisions = (label) => {
  const path = decisionPath(label);
  if (!existsSync(path)) return [];
  try {
    const parsed = JSON.parse(readFileSync(path, 'utf8'));
    return parsed?.version === 1 && Array.isArray(parsed.decisions) ? parsed.decisions : [];
  } catch { return []; }
};
const exact = (old, row) => old?.decline_id === row.decline_id && old?.row_sha256 === row.row_sha256
  && old?.context_sha256 === row.context_sha256 && ['stands', 'owner-decision'].includes(old?.decision)
  && typeof old?.evidence === 'string' && old.evidence.trim();

if (command === 'refresh') {
  const labels = all ? groups.map((group) => String(group.label)) : [groupArg || die('refresh requires --group <label> or --all', 2)];
  const current = currentDeclines();
  for (const label of labels) {
    const old = new Map(loadDecisions(label).map((row) => [row.decline_id, row]));
    const decisions = current.filter((row) => row.group === label).map((row) => {
      const prior = old.get(row.decline_id);
      return {
        ...row,
        decision: exact(prior, row) ? prior.decision : 'pending',
        evidence: exact(prior, row) ? prior.evidence : '',
      };
    });
    writeFileSync(decisionPath(label), `${JSON.stringify({ version: 1, run, group: label, decisions }, null, 2)}\n`);
    console.log(`scope-decisions: ${label}: ${decisions.length} decline(s), ${decisions.filter((row) => row.decision === 'pending').length} pending`);
  }
  process.exit(0);
}

if (command === 'delta') {
  const current = currentDeclines();
  const old = new Map(groups.flatMap((group) => loadDecisions(String(group.label))).map((row) => [row.decline_id, row]));
  const rows = current.map((row) => ({ ...row, prior_decision: exact(old.get(row.decline_id), row) ? old.get(row.decline_id).decision : null,
    prior_evidence: exact(old.get(row.decline_id), row) ? old.get(row.decline_id).evidence : '' }));
  const pending = rows.filter((row) => !row.prior_decision);
  const out = resolve(value('--out') || join(research, `${run}-step9-scope-delta.json`));
  writeFileSync(out, `${JSON.stringify({ version: 1, run, total_declines: rows.length, pending_count: pending.length, rows }, null, 2)}\n`);
  console.log(`scope-decisions: Step 9 delta has ${pending.length}/${rows.length} decision(s) requiring review`);
  process.exit(0);
}

function validate(labels = groups.map((group) => String(group.label))) {
  const selected = new Set(labels);
  const current = currentDeclines().filter((row) => selected.has(row.group));
  const errors = [];
  const recorded = labels.flatMap((label) => loadDecisions(label));
  const byId = new Map();
  for (const row of recorded) {
    if (byId.has(row.decline_id)) errors.push(`${row.decline_id}: duplicate decision`);
    byId.set(row.decline_id, row);
  }
  for (const row of current) {
    const got = byId.get(row.decline_id);
    if (!got) { errors.push(`${row.decline_id}: missing decision for ${row.page}: ${row.name}`); continue; }
    if (got.row_sha256 !== row.row_sha256 || got.context_sha256 !== row.context_sha256) errors.push(`${row.decline_id}: stale row or closure context`);
    if (!['stands', 'owner-decision'].includes(got.decision)) errors.push(`${row.decline_id}: decision is ${JSON.stringify(got.decision)}, expected stands or owner-decision`);
    if (typeof got.evidence !== 'string' || !got.evidence.trim()) errors.push(`${row.decline_id}: evidence is empty`);
  }
  const expected = new Set(current.map((row) => row.decline_id));
  for (const row of recorded) if (!expected.has(row.decline_id)) errors.push(`${row.decline_id}: decision no longer corresponds to a current decline; run refresh`);
  return { current, recorded, errors };
}

if (command === 'check') {
  const { current, errors } = validate(groupArg ? [groupArg] : groups.map((group) => String(group.label)));
  for (const error of errors) console.error(`ERROR ${error}`);
  console.log(`scope-decisions: ${current.length} current decline(s), ${errors.length} error(s)`);
  process.exit(errors.length ? 1 : 0);
}

const deltaPath = join(research, `${run}-step9-scope-delta.json`);
const delta = existsSync(deltaPath) ? readJson(deltaPath) : { rows: [] };
const { current, recorded, errors } = validate();
if (errors.length) die(`cannot render with ${errors.length} invalid current decision(s); run check`);
const currentById = new Map(current.map((row) => [row.decline_id, row]));
const decisionById = new Map(recorded.map((row) => [row.decline_id, row]));
const reviewed = new Set((delta.rows ?? []).filter((row) => !row.prior_decision).map((row) => row.decline_id));
const historicalOverturns = (delta.rows ?? []).filter((row) => reviewed.has(row.decline_id) && !currentById.has(row.decline_id));
const lines = [`# Step 9 scope-denial decision register — ${run}`, '',
  `- Current declines: ${current.length}`,
  `- Decisions re-examined in Step 9: ${reviewed.size}`,
  `- Overturned in Step 9: ${historicalOverturns.length}`, '',
  '| Batch | Page | Result | Verdict | Step 9 review | Evidence |',
  '|---:|---|---|---|---|---|'];
const cell = (text) => String(text ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ');
for (const row of current) {
  const decision = decisionById.get(row.decline_id);
  lines.push(`| ${cell(row.batch)} | ${cell(row.page)} | ${cell(row.name)} | ${cell(decision.decision)} | ${reviewed.has(row.decline_id) ? 'reviewed' : 'carried exact decision'} | ${cell(decision.evidence)} |`);
}
for (const row of historicalOverturns) lines.push(`| ${cell(row.batch)} | ${cell(row.page)} | ${cell(row.name)} | overturned | reviewed | Coverage row removed or changed to an included disposition; see the updated coverage and authored artifacts. |`);
const notesPath = join(research, `${run}-alpha-step9-review.md`);
if (existsSync(notesPath)) lines.push('', '## Alpha review notes', '', readFileSync(notesPath, 'utf8').trim());
const out = resolve(value('--out') || join(research, `${run}-alpha-step9.md`));
writeFileSync(out, `${lines.join('\n').trim()}\n`);
console.log(`scope-decisions: rendered ${current.length + historicalOverturns.length} decision row(s) to ${out}`);
