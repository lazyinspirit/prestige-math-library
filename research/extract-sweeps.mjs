#!/usr/bin/env node
// extract-sweeps.mjs — pull research-sweep deliverables out of subagent
// transcripts into research/sweep-*.md.
//
//   node research/extract-sweeps.mjs [sessionDir]
//
// Content-addressed, not id-addressed: it scans every agent transcript under the
// session's subagents/ directory, takes each agent's LAST substantial assistant
// text block (that is the deliverable), and files it by matching a signature
// phrase. Safe to re-run; only writes files that are missing or shorter than
// what it found. Used to recover a sweep that finished after the others.

import { readFileSync, readdirSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Order matters: the FIRST match wins, so put the more specific signature first.
// The two counterexample sweeps are distinct deliverables, not two versions of
// one; mapping them to separate files is what stops the size heuristic below
// from treating the shorter one as stale and refusing to write it.
const SIGNATURES = [
  { file: 'sweep-counterexamples-consolidated.md', needles: ['THE STEEN', 'SEEBACH SPINE'], min: 50000 },
  { file: 'sweep-topology-counterexamples.md', needles: ['Steen', 'Seebach'], min: 8000 },
  { file: 'sweep-topology-core.md', needles: ['GENERAL (POINT-SET) TOPOLOGY'], min: 8000 },
  { file: 'sweep-topology-advanced.md', needles: ['ADVANCED POINT-SET TOPOLOGY'], min: 8000 },
  { file: 'sweep-metric-spaces-and-set-theory.md', needles: ['METRIC SPACES: FULL COURSE INVENTORY'], min: 8000 },
];

const projects = '/root/.claude/projects/-root-Projects-prestige-math-library';
const sessionDir = process.argv[2] ?? newestSession();

function newestSession() {
  const dirs = readdirSync(projects, { withFileTypes: true })
    .filter((e) => e.isDirectory() && existsSync(join(projects, e.name, 'subagents')))
    .map((e) => join(projects, e.name))
    .sort((a, b) => statSync(join(b, 'subagents')).mtimeMs - statSync(join(a, 'subagents')).mtimeMs);
  if (!dirs.length) { console.error('no session with subagents/ found'); process.exit(1); }
  return dirs[0];
}

const subagents = join(sessionDir, 'subagents');
const outDir = new URL('.', import.meta.url).pathname;

/** Last substantial assistant text block in a transcript. */
function deliverable(file) {
  let best = '';
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    let o;
    try { o = JSON.parse(line); } catch { continue; }
    if (o.type !== 'assistant' || o.message?.role !== 'assistant') continue;
    const c = o.message.content;
    if (!Array.isArray(c)) continue;
    const txt = c.filter((x) => x.type === 'text').map((x) => x.text).join('\n');
    if (txt.length > 2000) best = txt;
  }
  return best;
}

let wrote = 0;
for (const f of readdirSync(subagents)) {
  if (!f.startsWith('agent-') || !f.endsWith('.jsonl')) continue;
  const text = deliverable(join(subagents, f));
  if (!text) continue;
  const head = text.slice(0, 4000);
  const sig = SIGNATURES.find((s) => s.needles.every((n) => head.includes(n)) && text.length >= s.min);
  if (!sig) continue;
  const out = join(outDir, sig.file);
  const existing = existsSync(out) ? readFileSync(out, 'utf8') : '';
  if (existing.length >= text.length) { console.log(`= ${sig.file} (already current)`); continue; }
  writeFileSync(out, text.endsWith('\n') ? text : text + '\n');
  console.log(`+ ${sig.file}  ${text.split('\n').length} lines, ${(text.length / 1024).toFixed(0)} KB`);
  wrote++;
}
console.log(wrote ? `\n${wrote} file(s) written.` : '\nnothing new.');
