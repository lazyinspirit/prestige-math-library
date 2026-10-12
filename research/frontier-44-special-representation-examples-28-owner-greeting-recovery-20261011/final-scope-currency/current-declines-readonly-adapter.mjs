#!/usr/bin/env node
// Durable, exact decisions for Step 3 coverage declines.
//
// A page-level `sufficient` verdict does not say which deferred or out-of-scope
// rows were actually checked.  This tool gives each decline a stable identity
// and binds its decision to both the exact coverage row and the relevant page
// closure. Changed rows remain pending until their assigned Step-3 owner
// records a current decision; refresh never invents review evidence.

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
if (!run || !['inspect'].includes(command)) {
  die('usage: node tools/scope-decisions.mjs <refresh|check> --run <run> [--group <label>|--all] [--root <repo>]', 2);
}

const canonical = (value) => {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
};
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const consumedInputs = new Map();
const readJson = (path, label = path) => {
  if (existsSync(path)) consumedInputs.set(path,sha256(readFileSync(path))); 
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

function inverseOrder(value) {
 if (Array.isArray(value)) return value.map(inverseOrder);
 if (value && typeof value==='object') { const out=Object.fromEntries(Object.entries(value).map(([k,v])=>[k,inverseOrder(v)])); if(out.id==='the-degenerate-ariki-categorification-theorem' && out.order===1841.25) out.order=1792; return out; }
 return value;
}
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
          actual_context: { ...context, destination: destinationState(destination) },
          reconstructed_prior_order_context_sha256: sha256(canonical(inverseOrder({ ...context, destination: destinationState(destination) }))),
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


const actual=currentDeclines();
writeFileSync(value('--output'),JSON.stringify({mode:'Read-only copied authoritative currentDeclines adapter; no refresh/check/validate invocation',rows:actual,inputs:[...consumedInputs].map(([path,raw_sha256])=>({path,raw_sha256}))},null,2)+'\n');
