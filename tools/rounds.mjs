#!/usr/bin/env node
// rounds.mjs — compute the parallel authoring round plan from the page spec.
//
//   node tools/rounds.mjs [spec] [--max N] [--round K] [--repo DIR]
//
// Owner-approved protocol (2026-07-25): subagents author pages in parallel, but
// ONLY pages that do not depend on one another; one page per subagent; every
// round is followed by a personal review, fixes, the cross-family judge, and an
// explicit owner approval before the next round starts.
//
// The independence guarantee is computed, not asserted. Each page gets a level,
//
//     level(p) = 1 + max(level(q) : q in p.requires),   published pages at 0,
//
// so two pages sharing a level cannot depend on one another: a dependency would
// force the dependent page to a strictly higher level. Every prerequisite of a
// level-k page sits at a level below k and is therefore already authored.
//
// A level wider than --max (default 8, owner's cap) is split into balanced
// chunks that run as SEQUENTIAL rounds. Any split of a level is safe, since the
// whole level is mutually independent; chunks are grouped by category so a round
// stays on one topic and my review of it stays focused.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const flag = (f, d) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : d; };
const specPath = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1]?.startsWith('--') !== true)
  ?? 'research/plan-spec.json';
const MAX = Number(flag('--max', 8));
const only = flag('--round', null);
const repo = flag('--repo', '/root/Projects/prestige-math-library');

const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));

// ---------------------------------------------------------------- levels

const lvl = new Map();
function level(id) {
  if (lvl.has(id)) return lvl.get(id);
  const p = byId.get(id);
  lvl.set(id, 0);                                   // cycle guard; validate-plan reports real cycles
  const reqs = (p.requires ?? []).filter((r) => byId.has(r));
  const v = p.kind === 'P' ? 0 : (reqs.length ? Math.max(...reqs.map(level)) + 1 : 1);
  lvl.set(id, v);
  return v;
}
for (const p of spec.pages) level(p.id);

// ---------------------------------------------------------------- rounds

const byLevel = new Map();
for (const p of spec.pages) {
  if (p.kind === 'P') continue;
  const L = lvl.get(p.id);
  if (!byLevel.has(L)) byLevel.set(L, []);
  byLevel.get(L).push(p);
}

/** split into ceil(n/MAX) chunks as evenly as possible, keeping categories together */
function chunk(pages) {
  const n = Math.ceil(pages.length / MAX);
  if (n <= 1) return [pages];
  const sorted = [...pages].sort((a, b) =>
    (a.category ?? '').localeCompare(b.category ?? '') || a.order - b.order);
  const size = Math.ceil(sorted.length / n);
  const out = [];
  for (let i = 0; i < sorted.length; i += size) out.push(sorted.slice(i, i + size));
  return out;
}

const rounds = [];
for (const L of [...byLevel.keys()].sort((a, b) => a - b))
  for (const c of chunk(byLevel.get(L))) rounds.push({ level: L, pages: c });

// ---------------------------------------------------------------- authored?

const authored = (p) => p.items.length > 0 &&
  p.items.every((it) => existsSync(join(repo, 'items', `${it.id}.md`)));
const started = (p) => p.items.some((it) => existsSync(join(repo, 'items', `${it.id}.md`)));

// ---------------------------------------------------------------- report

if (only !== null) {
  const r = rounds[Number(only) - 1];
  if (!r) { console.error(`no round ${only} (there are ${rounds.length})`); process.exit(2); }
  console.log(`round ${only}  (level ${r.level}, ${r.pages.length} pages, all mutually independent)`);
  for (const p of r.pages)
    console.log(`  ${p.kind}  ${p.id.padEnd(52)} ${String(p.items.length).padStart(3)} items  <- ${(p.requires ?? []).join(', ')}`);
  process.exit(0);
}

const widths = rounds.map((r) => r.pages.length);
console.log(`${spec.pages.filter((p) => p.kind !== 'P').length} pages, ${byLevel.size} dependency levels, ` +
            `${rounds.length} rounds at max ${MAX} per round`);
console.log(`round widths: ${widths.join(', ')}\n`);

rounds.forEach((r, i) => {
  const done = r.pages.filter(authored).length;
  const part = r.pages.filter((p) => started(p) && !authored(p)).length;
  const mark = done === r.pages.length ? 'DONE' : part || done ? 'WIP ' : '    ';
  console.log(`${mark} round ${String(i + 1).padStart(2)}  level ${String(r.level).padStart(2)}  ` +
              `${String(r.pages.length).padStart(2)} pages  ${r.pages.map((p) => p.id).join(', ')}`);
});
