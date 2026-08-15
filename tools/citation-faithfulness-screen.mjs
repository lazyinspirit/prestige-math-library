#!/usr/bin/env node
// Screen [F#]/[A#]/[L#] restatements for the defect class frontier-13 produced
// most: a fact that names mathematical objects the cited item's own statement
// never mentions, which is how an inflated restatement usually reads.
//
//   node tools/citation-faithfulness-screen.mjs <id> [id ...]
//   node tools/citation-faithfulness-screen.mjs --items-file <file>
//
// Output is CANDIDATES, not defects: a fact legitimately specialises or renames
// bound variables, so every hit needs a human read. Reports per item so a caller
// can record which items screened clean.
import { readFileSync, existsSync } from 'fs';

const STATEMENT_HEADINGS = ['Statement', 'Statement refuted', 'Definition', 'Example', 'Counterexample', 'Remark'];

function sectionText(md, heading) {
  const esc = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const m = md.match(new RegExp(`^##\\s+${esc}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, 'm'));
  return m?.[1] ?? '';
}
function statementOf(id) {
  const p = `items/${id}.md`;
  if (!existsSync(p)) return null;
  const md = readFileSync(p, 'utf8');
  for (const h of STATEMENT_HEADINGS) {
    const t = sectionText(md, h);
    if (t.trim()) return t;
  }
  return null;
}

// Operators and named functions carry the mathematical content of a restatement;
// single letters are bound names and rename freely, so they are not compared.
const TOKEN = /\\operatorname\{([A-Za-z]+)\}|\\(?:mathbb|mathcal|mathrm)\{([A-Za-z]+)\}|\\([A-Za-z]{3,})/g;
const IGNORE = new Set([
  'left', 'right', 'quad', 'qquad', 'text', 'begin', 'end', 'frac', 'cdot', 'cdots',
  'ldots', 'dots', 'colon', 'displaystyle', 'big', 'Big', 'bigl', 'bigr', 'biggl',
  'biggr', 'mid', 'ast', 'star', 'label', 'ref', 'nonumber', 'notag', 'space',
  'longmapsto', 'mapsto', 'longrightarrow', 'rightarrow', 'to', 'hookrightarrow',
  'Longleftrightarrow', 'Longrightarrow', 'iff', 'implies', 'qquad', 'substack',
]);
function tokens(tex) {
  const out = new Set();
  for (const m of tex.matchAll(TOKEN)) {
    const t = m[1] ?? m[2] ?? m[3];
    if (t && !IGNORE.has(t)) out.add(t);
  }
  return out;
}
function parseFacts(md) {
  const fa = md.split(/\n## Facts & Assumptions\n/)[1];
  if (!fa) return [];
  const body = fa.split(/\n## /)[0];
  const out = [];
  for (const m of body.matchAll(/^\[([LFA]\d+)\]\s([\s\S]*?)(?=\n\n\[[LFA]\d+\]|\n*$)/gm)) {
    out.push({ fact: m[1], text: m[2].trim(), targets: [...m[2].matchAll(/\[\[([^\]]+)\]\]/g)].map(x => x[1]) });
  }
  return out;
}

let ids = process.argv.slice(2);
if (ids[0] === '--items-file') ids = readFileSync(ids[1], 'utf8').split('\n').filter(Boolean);

let clean = 0, flagged = 0;
for (const id of ids) {
  const p = `items/${id}.md`;
  if (!existsSync(p)) { console.log(`MISSING ${id}`); continue; }
  const md = readFileSync(p, 'utf8');
  const hits = [];
  for (const f of parseFacts(md)) {
    if (!f.targets.length) continue;
    const factTokens = tokens(f.text);
    // A token is unexplained only if NO cited target's statement mentions it.
    const covered = new Set();
    for (const t of f.targets) {
      const st = statementOf(t);
      if (st) for (const tok of tokens(st)) covered.add(tok);
    }
    const extra = [...factTokens].filter(t => !covered.has(t));
    if (extra.length) hits.push(`${f.fact} -> ${f.targets.join('+')}: ${extra.join(', ')}`);
  }
  if (hits.length) { flagged++; console.log(`CANDIDATE ${id}`); hits.forEach(h => console.log(`    ${h}`)); }
  else clean++;
}
console.log(`\nscreen: ${ids.length} item(s); ${clean} with no unexplained operator, ${flagged} candidate(s) for a human read`);
