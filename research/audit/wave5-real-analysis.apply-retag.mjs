#!/usr/bin/env node
// wave5-real-analysis.apply-retag.mjs — A4 bulk pure-retag pass for the wave-5
// `real-analysis` batch (31 items), applying research/audit/wave5-A3.md §9.
//
// The determinations are NOT re-derived here: every label comes from
// research/audit/wave5-real-analysis.provenance.jsonl, which is the record of
// record. This script only moves them onto disk. It writes:
//
//   1. `provenance:` (statement/proof) from the ledger row, inserted directly
//      after `origin:`, which is where SCHEMA §3 and every already-tagged item
//      in the corpus put it;
//   2. `generation:\n  role:` on the three `trivial`-class `ai-generated`
//      statements (A3 §9), immediately after the provenance block, per SCHEMA
//      §3 field order — content-policy errors on a generation block over any
//      other statement label, so it is written on those three and nowhere else;
//   3. the A3-approved `sources.references` URLs only: the §5b real-analysis
//      set of six, and `jirka.org/ra/html/sec_seqsandlims.html` on
//      `cor-monotone-converges-iff-bounded` per §4d, whose `exact-source` class
//      stands only if that clause-carrying URL is added. No other ledger URL is
//      added — see the findings file for the two that were deliberately left.
//
// D5: a legacy `authorship` key is deleted in the same edit that writes the
// audited provenance. None of these 31 items carries one, so the branch below
// is a guard rather than a no-op we assume; it reports if it ever fires.
//
// Nothing mathematical is touched, and `verification:` is not touched: a pure
// retag is not a material rewrite under SCHEMA §3, so it voids no judge verdict
// and rides one stage snapshot rather than a per-item one (AUDIT-WORKFLOW A4,
// and the wave-2 95 MB measurement recorded in the Beta brief).
//
// Frontmatter is edited as text, never re-serialized, so a two-line addition
// does not rewrite every field of every item.
//
// Idempotent: an item already carrying `provenance:` keeps it, and a URL
// already present is not duplicated.
//
//   node research/audit/wave5-real-analysis.apply-retag.mjs --dry-run
//   node research/audit/wave5-real-analysis.apply-retag.mjs

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const LEDGER = 'research/audit/wave5-real-analysis.provenance.jsonl';
const MANIFEST = 'research/audit/wave5-real-analysis.pages.json';
const dryRun = process.argv.includes('--dry-run');

const ROLE = new Map([
  ['corollary', 'direct-corollary'],
  ['example', 'example'],
  ['counterexample', 'counterexample'],
]);

// Titles follow the convention already dominant in the corpus for each host:
// "X (Wikipedia)" / "SNCF metric (PlanetMath)" for the wiki-style sources,
// "J. Lebl, Basic Analysis I, <section>" for jirka.org, and
// "MIT 18.100C, Lecture 11: Power Series" for an OCW lecture PDF. Each title
// names the clause-carrying section, not a landing page — that distinction is
// the whole point of A3 §4d.
const PLANETMATH_CONTRACTIVE = {
  title: 'Contractive sequence (PlanetMath)',
  url: 'https://planetmath.org/contractivesequence',
};
const PROOFWIKI_SQRT = {
  title: 'Sequence of Square Roots of Natural Numbers is not Cauchy (ProofWiki)',
  url: 'https://proofwiki.org/wiki/Sequence_of_Square_Roots_of_Natural_Numbers_is_not_Cauchy',
};

const APPROVED_URLS = new Map([
  // A3 §4d — the located clause: Lebl Thm 2.1.10, "A monotone sequence is
  // bounded if and only if it is convergent", verbatim on this page.
  ['cor-monotone-converges-iff-bounded', [
    { title: 'J. Lebl, Basic Analysis I, Sequences and limits (Theorem 2.1.10)',
      url: 'https://www.jirka.org/ra/html/sec_seqsandlims.html' },
  ]],
  // A3 §5b — the six open-access URLs, on the items whose ledger rows record them.
  ['lem-peak-monotone-subsequence', [
    { title: 'Peak Point Lemma (ProofWiki)', url: 'https://proofwiki.org/wiki/Peak_Point_Lemma' },
    { title: 'The Monotone Subsequence Theorem (Mathonline)',
      url: 'http://mathonline.wikidot.com/the-monotone-subsequence-theorem' },
  ]],
  ['def-contractive-sequence', [PLANETMATH_CONTRACTIVE]],
  ['thm-contractive-implies-cauchy', [PLANETMATH_CONTRACTIVE]],
  ['fs-consecutive-differences-null-implies-cauchy', [PROOFWIKI_SQRT]],
  ['cex-sqrt-k-differences-null-not-cauchy', [PROOFWIKI_SQRT]],
  ['ex-two-subsequential-limits', [
    { title: 'MIT 18.100A, Lecture 9: Limsup, Liminf, and the Bolzano-Weierstrass Theorem',
      url: 'https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec92.pdf' },
    { title: 'J. Lebl, Basic Analysis I, Limit superior, limit inferior, and Bolzano-Weierstrass',
      url: 'https://www.jirka.org/ra/html/sec_bw.html' },
  ]],
]);

// The §4d URL is the one A3 located itself, so it is legitimately absent from
// the ledger row. Every other approved URL must already be recorded as A1
// evidence for that item; if it is not, this script is adding a source the
// determination never rested on, which is exactly what it must not do.
const NOT_IN_LEDGER = new Set(['https://www.jirka.org/ra/html/sec_seqsandlims.html']);

const rows = new Map();
for (const line of readFileSync(LEDGER, 'utf8').split('\n')) {
  if (!line.trim()) continue;
  const row = JSON.parse(line);
  rows.set(row.id, row);
}
const scope = JSON.parse(readFileSync(MANIFEST, 'utf8')).flatMap((p) => p.items.map((i) => i.id));
if (new Set(scope).size !== scope.length) throw new Error('manifest lists an id twice');

for (const [id, urls] of APPROVED_URLS) {
  if (!scope.includes(id)) throw new Error(`approved URL target ${id} is not in this batch's scope`);
  for (const { url } of urls) {
    if (NOT_IN_LEDGER.has(url)) continue;
    if (!(rows.get(id)?.urls ?? []).includes(url)) {
      throw new Error(`${id}: ${url} is not recorded as A1 evidence in the ledger`);
    }
  }
}

const report = [];
let tagged = 0, generated = 0, urlsAdded = 0, authorshipRemoved = 0;

for (const id of scope) {
  const row = rows.get(id);
  if (!row) throw new Error(`no ledger row for ${id}`);
  const file = `items/${id}.md`;
  if (!existsSync(file)) throw new Error(`missing item file ${file}`);
  const text = readFileSync(file, 'utf8');
  const m = /^(---\n)([\s\S]*?\n)(---\n)([\s\S]*)$/.exec(text);
  if (!m) throw new Error(`no frontmatter in ${file}`);
  let fm = m[2];
  const changes = [];

  // 1. provenance, immediately after `origin:`.
  if (!/^provenance:/m.test(fm)) {
    if (!/^origin:.*\n/m.test(fm)) throw new Error(`no origin: line in ${file}`);
    fm = fm.replace(/^(origin:.*\n)/m, `$1provenance:\n  statement: ${row.statement}\n  proof: ${row.proof}\n`);
    tagged += 1;
    changes.push(`provenance ${row.statement}/${row.proof}`);
  }

  // 2. generation.role, only under an ai-generated statement.
  if (row.statement === 'ai-generated' && !/^generation:/m.test(fm)) {
    const kind = /^kind:\s*(\S+)/m.exec(fm)?.[1];
    const role = ROLE.get(kind);
    if (!role) throw new Error(`${id}: ai-generated ${kind} has no permitted generation.role`);
    fm = fm.replace(/^(provenance:\n(?:  \S.*\n)+)/m, `$1generation:\n  role: ${role}\n`);
    generated += 1;
    changes.push(`generation.role ${role}`);
  }

  // 3. D5 — the superseded one-axis field goes in the same edit.
  const authorship = /^authorship:.*\n(?:[ \t]+\S.*\n)*/m.exec(fm);
  if (authorship) {
    fm = fm.replace(authorship[0], '');
    authorshipRemoved += 1;
    changes.push('legacy authorship removed');
  }

  // 4. the approved URLs, appended to the existing block-form references list.
  const approved = APPROVED_URLS.get(id) ?? [];
  const present = new Set([...fm.matchAll(/url:\s*"([^"]+)"/g)].map((x) => x[1]));
  const missing = approved.filter((entry) => !present.has(entry.url));
  if (missing.length) {
    const list = /^(\s{2}references:\s*\n(?:\s{4}[-\s].*\n)+)/m.exec(fm);
    if (!list) throw new Error(`${file}: no block-form "  references:" list to append to`);
    const added = missing.map((e) => `    - title: "${e.title}"\n      url: "${e.url}"\n`).join('');
    fm = fm.replace(list[1], list[1] + added);
    urlsAdded += missing.length;
    changes.push(`+${missing.length} url${missing.length > 1 ? 's' : ''}`);
  }

  if (!changes.length) continue;
  if (!dryRun) writeFileSync(file, m[1] + fm + m[3] + m[4]);
  report.push(`${id}: ${changes.join('; ')}`);
}

console.log(report.join('\n'));
console.log(`\n${dryRun ? '[dry run] ' : ''}${report.length}/${scope.length} item(s) changed — ` +
            `${tagged} newly tagged, ${generated} generation.role, ${urlsAdded} url(s) added, ` +
            `${authorshipRemoved} legacy authorship key(s) removed`);
