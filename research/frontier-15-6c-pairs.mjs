#!/usr/bin/env node
// 6c: print each cross-level citation as (citing fact line) vs (cited Statement).
import fs from 'node:fs';
import { factLines, sectionText } from '../tools/facts-block.mjs';

const { edges } = JSON.parse(fs.readFileSync('research/frontier-15-6c-edges.json', 'utf8'));
const HEADINGS = ['Statement', 'Statement refuted', 'Definition', 'Example', 'Counterexample', 'Remark'];
const stmtOf = (id) => {
  const p = `items/${id}.md`;
  if (!fs.existsSync(p)) return null;
  const md = fs.readFileSync(p, 'utf8');
  for (const h of HEADINGS) { const t = sectionText(md, h); if (t && t.trim()) return t.trim(); }
  return null;
};

const only = process.argv[2];            // batch number, or 'all'
const kinds = (process.argv[3] || 'theorem,lemma,proposition,corollary').split(',');

const rows = edges.filter(e => e.cls === 'CROSS-LEVEL' && e.rtype === 'dep'
  && (only === 'all' || e.srcBatch === only) && kinds.includes(e.tgtKind));

const bySrc = new Map();
for (const e of rows) { if (!bySrc.has(e.src)) bySrc.set(e.src, []); bySrc.get(e.src).push(e); }

const one = (s) => (s || '').replace(/\s+/g, ' ').trim();
let n = 0;
for (const [src, es] of bySrc) {
  const md = fs.readFileSync(`items/${src}.md`, 'utf8');
  const facts = factLines(md);
  console.log(`\n================ ${src}  (batch ${es[0].srcBatch}, page ${es[0].srcPage})`);
  for (const e of es) {
    n++;
    const f = facts.filter(l => l.text.includes(`[[${e.tgt}]]`));
    console.log(`\n  --> ${e.tgt}  [${e.tgtPage}]`);
    for (const l of f) console.log(`      CITES: ${one(l.text)}`);
    if (!f.length) console.log(`      CITES: (no fact line names it — dep only)`);
    console.log(`      SAYS : ${one(stmtOf(e.tgt)).slice(0, 2400)}`);
  }
}
console.error(`\n${n} cross-level ${kinds.join('/')} citations over ${bySrc.size} citing items`);
