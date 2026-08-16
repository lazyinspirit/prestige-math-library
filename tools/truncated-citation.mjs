#!/usr/bin/env node
// truncated-citation.mjs — find [F#]/[L#]/[A#] facts that quote only the OPENING
// of the item they cite and stop before its operative clause.
//
// Why this exists: `citation-fidelity.mjs` flags quotes that do NOT appear in the
// cited item, and fact lines that WIDEN what they cite. A truncated citation does
// neither — the words are verbatim and they claim less, not more — so it passes
// every existing screen while licensing nothing. On frontier-14 a step-6a reader
// found 15 of them by hand in one batch; a hand-read sample of a defect class
// ships as if it were the whole class, so the class gets a detector.
//
// Reports CANDIDATES and their locations for a human read, never a verdict and
// never a total that reads as a finding count.
//
// usage: node tools/truncated-citation.mjs <item.md ...> [--json] [--ratio n]

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const ratioIdx = args.indexOf('--ratio');
const RATIO = ratioIdx >= 0 ? Number(args[ratioIdx + 1]) : 0.5;
const files = args.filter((a, i) => !a.startsWith('--') && !(ratioIdx >= 0 && i === ratioIdx + 1));

const ITEMS = 'items';
const norm = s => s.replace(/\s+/g, ' ').trim();
// Facts write an inline reference as `(def-x)`; the source writes `[[def-x]]`.
// Compare with both spellings erased, or every such fact fails the prefix test
// for a purely cosmetic reason and the truncation goes unreported.
const bare = s => norm(s.replace(/\[\[([a-z0-9-]+)\]\]/g, '$1').replace(/\(([a-z]{2,4}-[a-z0-9-]+(?:,\s*[a-z]{2,4}-[a-z0-9-]+)*)\)/g, '$1'));

// The body section a fact line is quoting from.
const BODY_RE = /^##\s+(Definition|Statement|Example|Statement refuted|Construction)\s*$/;

function sectionOf(id) {
  const p = path.join(ITEMS, `${id}.md`);
  if (!fs.existsSync(p)) return null;
  const lines = fs.readFileSync(p, 'utf8').split('\n');
  let start = -1, end = lines.length;
  for (let i = 0; i < lines.length; i++) {
    if (start < 0 && BODY_RE.test(lines[i].trim())) { start = i + 1; continue; }
    if (start >= 0 && /^##\s+/.test(lines[i])) { end = i; break; }
  }
  return start < 0 ? null : norm(lines.slice(start, end).join(' '));
}

// A fact line: "[F3] <text> ([[id]], [[id2]])."
const FACT_RE = /^\[([FLA]\d+)\]\s+(.*)$/;

const out = [];
for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const lines = raw.split('\n');
  const itemId = (raw.match(/^id:\s*(\S+)/m) || [])[1] || path.basename(file, '.md');
  lines.forEach((line, i) => {
    const m = FACT_RE.exec(line.trim());
    if (!m) return;
    const [, tag, rest] = m;
    const cited = [...rest.matchAll(/\[\[([a-z0-9-]+)\]\]/g)].map(x => x[1]);
    if (!cited.length) return;
    // strip the trailing citation parenthetical to get the asserted text
    const text = norm(rest.replace(/\(\s*(\[\[[a-z0-9-]+\]\][,\s]*)+\)\s*\.?\s*$/, ''));
    if (text.length < 12) return;
    for (const id of cited) {
      const sec = sectionOf(id);
      if (!sec) continue;
      // Truncation signature: the fact text is a verbatim PREFIX of the cited
      // section, and the section carries substantially more after it.
      const bs = bare(sec), bt = bare(text);
      if (!bs.startsWith(bt)) continue;
      const covered = bt.length / bs.length;
      if (covered >= RATIO) continue;
      out.push({
        item: itemId, file, line: i + 1, tag, cites: id,
        covered: Number(covered.toFixed(3)),
        quoted_chars: bt.length, section_chars: bs.length,
        stops_after: bt.slice(-90),
        continues_with: bs.slice(bt.length, bt.length + 140).trim(),
      });
    }
  });
}

if (asJson) { console.log(JSON.stringify({ candidates: out }, null, 2)); process.exit(0); }

if (!out.length) {
  console.log(`truncated-citation: no candidates over ${files.length} file(s) (prefix ratio < ${RATIO})`);
  process.exit(0);
}
for (const c of out) {
  console.log(`${c.file}:${c.line}  [${c.tag}] -> ${c.cites}`);
  console.log(`    quotes ${c.quoted_chars}/${c.section_chars} chars (${(c.covered * 100).toFixed(0)}% of the cited section)`);
  console.log(`    stops after: ...${c.stops_after}`);
  console.log(`    continues:   ${c.continues_with}...`);
  console.log();
}
console.log(`truncated-citation: ${out.length} candidate(s) in ${new Set(out.map(c => c.item)).size} item(s), over ${files.length} file(s) read.`);
console.log('Candidates for a human read, not a verdict: a short faithful restatement of the operative clause is legitimate and will not be a prefix.');
