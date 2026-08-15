#!/usr/bin/env node
// frontier-13 step 6c — pair each load-bearing published citation edge with the
// cited item's own Statement, and rank by defect signature.
//
// Signatures ranked, highest first:
//   hyp-dropped   : cited Statement carries a hypothesis token the restatement lacks
//   sym-extra     : restatement uses an operator/name absent from the cited Statement
//   short         : restatement is drastically shorter than the Statement (summary risk)
import fs from 'node:fs';
import path from 'node:path';

const ITEMS = path.join(process.cwd(), 'items');
const surface = JSON.parse(fs.readFileSync('research/frontier-13-alpha-a-6c-surface.json', 'utf8'));

function section(text, name) {
  const re = new RegExp(`^## ${name}\\s*$`, 'm');
  const m = text.match(re);
  if (!m) return '';
  const rest = text.slice(m.index + m[0].length);
  const nxt = rest.match(/^## /m);
  return (nxt ? rest.slice(0, nxt.index) : rest).trim();
}
function title(text) {
  const m = text.match(/^title:\s*"?(.*?)"?\s*$/m);
  return m ? m[1] : '';
}
function kindOf(text) {
  const m = text.match(/^kind:\s*(\S+)/m);
  return m ? m[1] : '';
}

const cache = new Map();
function cited(id) {
  if (cache.has(id)) return cache.get(id);
  const f = path.join(ITEMS, `${id}.md`);
  if (!fs.existsSync(f)) return null;
  const text = fs.readFileSync(f, 'utf8');
  const v = {
    title: title(text),
    kind: kindOf(text),
    statement: section(text, 'Statement') || section(text, 'Definition') || section(text, 'Construction'),
  };
  cache.set(id, v);
  return v;
}

// hypothesis tokens worth checking for a silent drop
const HYP = [
  [/n\s*\\ge(?:q)?\s*1/, 'n>=1'],
  [/r\s*\\ge(?:q)?\s*1/, 'r>=1'],
  [/p\s*\\ge(?:q)?\s*1/, 'p>=1'],
  [/\\ge(?:q)?\s*1\b/, '>=1'],
  [/\\ne(?:q)?\s*0\b/, '!=0'],
  [/\\ne(?:q)?\s*\\varnothing|\\ne(?:q)?\s*\\emptyset/, 'nonempty-sym'],
  [/\bnonzero\b/i, 'nonzero'],
  [/\bnon-?empty\b/i, 'nonempty'],
  [/\blocally small\b/i, 'locally-small'],
  [/\bfinite[- ]dimensional\b/i, 'fin-dim'],
  [/\bfinitely generated\b/i, 'fin-gen'],
  [/\bcommutative\b/i, 'commutative'],
  [/\balgebraically closed\b/i, 'alg-closed'],
  [/\bmonic\b/i, 'monic'],
  [/\bunital\b/i, 'unital'],
  [/\bsquare[- ]free\b/i, 'squarefree'],
  [/\birreducible\b/i, 'irreducible'],
  [/\bseparable\b/i, 'separable'],
  [/\bsurjective\b/i, 'surjective'],
  [/\binjective\b/i, 'injective'],
  [/\bbijective\b/i, 'bijective'],
  [/\bcharacteristic\s+(?:zero|0)\b/i, 'char-0'],
  [/\bchar(?:acteristic)?\s*\\?ne(?:q)?\s*2|\bcharacteristic not 2\b/i, 'char-ne-2'],
  [/\bdistinct\b/i, 'distinct'],
  [/\babelian\b/i, 'abelian'],
  [/\bnormal\b/i, 'normal'],
  [/\bfaithful\b/i, 'faithful'],
  [/\btransitive\b/i, 'transitive'],
  [/\bconnected\b/i, 'connected'],
  [/\bcompact\b/i, 'compact'],
  [/\bhausdorff\b/i, 'hausdorff'],
  [/\bfree\b/i, 'free'],
  [/\bflat\b/i, 'flat'],
  [/\bexact\b/i, 'exact'],
  [/\bpositive\b/i, 'positive'],
  [/\bproper\b/i, 'proper'],
  [/\bat least one\b/i, 'at-least-one'],
];

// operators/names whose presence in a restatement but absence from the cited
// Statement is a candidate inflation
const SYM = [
  '\\cong', '\\simeq', '\\subseteq', '\\subset', '\\oplus', '\\otimes', '\\times',
  '\\circ', '\\dashv', '\\Rightarrow', '\\longrightarrow', '\\det', '\\deg', '\\dim',
  '\\ker', '\\operatorname{im}', '\\gcd', '\\lcm', '\\sum', '\\prod', '\\int',
  '\\forall', '\\exists', '\\iff', '\\Leftrightarrow', '\\mid', '\\equiv',
  '\\langle', '\\lVert', '\\sigma', '\\chi', '\\varepsilon', '\\eta', '\\alpha',
];

const rows = [];
for (const e of surface) {
  if (e.citedClass !== 'published' || !e.loadBearing) continue;
  const c = cited(e.cited);
  if (!c) continue;
  const R = e.restatement, S = c.statement;
  const sigs = [];
  for (const [re, name] of HYP) {
    if (re.test(S) && !re.test(R)) sigs.push(`hyp-dropped:${name}`);
  }
  for (const s of SYM) {
    if (R.includes(s) && !S.includes(s)) sigs.push(`sym-extra:${s}`);
  }
  if (R.length * 4 < S.length) sigs.push('short');
  rows.push({ ...e, citedTitle: c.title, citedKind: c.kind, citedStatement: S, sigs });
}

rows.sort((a, b) => b.sigs.length - a.sigs.length);
fs.writeFileSync('research/frontier-13-alpha-a-6c-bundle.json', JSON.stringify(rows, null, 1));

const flagged = rows.filter((r) => r.sigs.length);
console.log(`load-bearing published edges: ${rows.length}`);
console.log(`edges with >=1 signature:     ${flagged.length}`);
const tally = {};
for (const r of rows) for (const s of r.sigs) tally[s.split(':')[0]] = (tally[s.split(':')[0]] || 0) + 1;
console.log('signature tally:', tally);
const hypRows = rows.filter(r => r.sigs.some(s => s.startsWith('hyp-dropped')));
console.log(`\nhyp-dropped edges: ${hypRows.length}`);
console.log('wrote research/frontier-13-alpha-a-6c-bundle.json');
