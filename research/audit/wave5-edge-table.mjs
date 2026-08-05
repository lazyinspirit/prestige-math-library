#!/usr/bin/env node
// wave5-edge-table.mjs — group the wave's leaving-batch edges by TARGET.
//
// A6 duty (d): Alpha audits every edge leaving a batch — 1,427 of them in
// wave 5 — against the target item on disk. Edge-at-a-time that is 1,427
// separate readings of ~228 target Statements. Grouped by target it is 228
// readings, each followed by every citing restatement of that one Statement
// side by side, which is also the shape the defect actually has: the dominant
// historical failure is a [F#]/[L#] fact that states MORE than the item it
// cites, and that is visible only when the two texts are adjacent.
//
//   node research/audit/wave5-edge-table.mjs [--kind published-backward] [--out dir]

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const arg = (n, d) => { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; };
const kinds = (arg('--kind', 'published-backward,cross-batch,forward')).split(',');
const outDir = arg('--out', join(REPO, 'research/audit/wave5-edge-bundles'));

const manifest = JSON.parse(readFileSync(join(REPO, 'research/audit/wave5-audit-manifest.json'), 'utf8'));
const edges = manifest.edges.filter((e) => kinds.includes(e.kind));

const itemPath = (x) => join(REPO, 'items', `${x}.md`);
const split = (s) => { const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(s); return m ? { front: m[1], body: m[2] } : { front: '', body: s }; };
const field = (front, name) => (new RegExp(`^${name}:\\s*(.*)$`, 'm').exec(front)?.[1] ?? '').trim().replace(/^["']|["']$/g, '');

function claim(body) {
  const wanted = ['Statement', 'Statement refuted', 'Definition', 'Construction', 'Example'];
  const heads = [...body.matchAll(/^##\s+(.+?)\s*$/gm)];
  const out = [];
  for (let i = 0; i < heads.length; i += 1) {
    if (!wanted.includes(heads[i][1].trim())) continue;
    const start = heads[i].index + heads[i][0].length;
    const end = i + 1 < heads.length ? heads[i + 1].index : body.length;
    out.push(`#### ${heads[i][1].trim()}\n\n${body.slice(start, end).trim()}`);
  }
  return out.join('\n\n');
}

/**
 * Every line of the source that names the target in a [[wikilink]]. This is
 * where a citing item restates what it is entitled to use, so it is the text
 * that has to be checked against the target's own Statement.
 */
function citingLines(body, target) {
  return body.split('\n').filter((l) => l.includes(`[[${target}]]`)).map((l) => l.trim());
}

mkdirSync(outDir, { recursive: true });

const byTarget = new Map();
for (const e of edges) {
  if (!byTarget.has(e.target)) byTarget.set(e.target, []);
  byTarget.get(e.target).push(e);
}

const index = [];
let uncited = 0;
for (const [target, group] of [...byTarget].sort((a, b) => b[1].length - a[1].length)) {
  if (!existsSync(itemPath(target))) {
    index.push({ target, citations: group.length, missing: true });
    continue;
  }
  const t = split(readFileSync(itemPath(target), 'utf8'));
  const parts = [];
  parts.push(`# Citation-precision audit — everything that cites \`${target}\``);
  parts.push('');
  parts.push(`## The target, as it actually stands on disk`);
  parts.push('');
  parts.push(`\`items/${target}.md\` — ${field(t.front, 'kind')} — ${field(t.front, 'title')}`);
  parts.push('');
  parts.push(claim(t.body) || '_(no Statement/Definition section)_');
  parts.push('');
  parts.push(`## The ${group.length} citing use(s), quoted verbatim from the citing items`);
  parts.push('');
  for (const e of group.sort((a, b) => a.source.localeCompare(b.source))) {
    const s = split(readFileSync(itemPath(e.source), 'utf8'));
    const lines = citingLines(s.body, target);
    if (!lines.length) uncited += 1;
    parts.push(`### \`${e.source}\` (${e.kind}, page ${e.sourcePage})`);
    parts.push('');
    parts.push(`Title: ${field(s.front, 'title')}`);
    parts.push('');
    if (lines.length) for (const l of lines) parts.push(`- ${l}`);
    else parts.push('- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.');
    parts.push('');
  }
  const file = join(outDir, `${target}.md`);
  writeFileSync(file, parts.join('\n'));
  index.push({ target, citations: group.length, file: file.replace(`${REPO}/`, '') });
}

writeFileSync(join(outDir, '_index.json'), JSON.stringify(index, null, 1));
console.log(`${edges.length} edge(s) over ${byTarget.size} target(s) -> ${outDir}`);
console.log(`${uncited} (source,target) pair(s) have no wikilink to the target in the source body`);
console.log('largest targets:');
for (const e of index.slice(0, 12)) console.log(`  ${String(e.citations).padStart(4)}  ${e.target}`);
