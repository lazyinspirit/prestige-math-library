#!/usr/bin/env node
// boundary-audit — find proof-contract boundary rows that are boilerplate
// rather than dispositions.
//
// WHY THIS EXISTS. `proof-contract.mjs --strict` checks that all eight boundary
// axes are PRESENT on every proof-bearing item. It has never checked that a
// disposition is TRUE, and it cannot: a row saying "this case does not arise"
// is a claim about the mathematics, not about the JSON.
//
// On frontier-13 that gap was load-bearing. 2,169 of 3,144 boundary rows were
// `not_applicable`, and the single most-repeated rationale recurred 124 times
// with only the item id substituted:
//
//     "The statement and proof of <id> do not admit a separate <case> boundary
//      case."
//
// TWO of those rows each concealed a confirmed-fatal defect. In
// `thm-counting-lemma-for-a-fixed-graph`, step 1.1 assumed h >= 1 while gamma
// divides by 2h — h = 0 divides by zero — and the `zero` axis was templated
// `not_applicable`. In `cor-symmetric-polynomial-values-on-roots-lie-in-the-
// base-field`, the corollary was false over the zero ring and the relevant axis
// was templated too. `regen-contract-entries.mjs` then re-emits these verbatim
// after a repair, so a fixed proof gets its false boundary row back.
//
// WHAT THIS REPORTS, AND WHAT IT DOES NOT. Every output is a CANDIDATE for a
// human read, never a verdict. A boundary genuinely may not arise, and this
// tool cannot know when. It reports two independent signals:
//
//   template   a `not_applicable` rationale whose text, with the item id and
//              case name removed, is shared by many items. A sentence reused
//              across 124 proofs is not a determination about any of them.
//
//   contradicted   a `not_applicable` row on an axis the item's own text
//              visibly exhibits. Only three detectors, each chosen because it
//              is close to airtight; noisy heuristics would train readers to
//              skim the output, which is how the original rows survived.
//
// It deliberately prints locations rather than a headline count. A previous
// session reported grep totals over prose as if they were findings and the
// numbers were wrong in both directions; a count here would invite the same.
//
//   node tools/boundary-audit.mjs research/<run>-batch-*.proof-contracts.json
//        [--items-dir items] [--min-cluster 3] [--json] [--fail-on-contradicted]
//        [--fail-on-template]

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const flag = (name, fallback = null) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : fallback;
};
const files = argv.filter((a) => !a.startsWith('--') && a.endsWith('.json'));
const itemsDir = flag('items-dir', 'items');
const minCluster = Number(flag('min-cluster', '3'));
const asJson = argv.includes('--json');
const failOnContradicted = argv.includes('--fail-on-contradicted');
const failOnTemplate = argv.includes('--fail-on-template');

if (!files.length) {
  console.error('usage: node tools/boundary-audit.mjs <contracts.json...> [--items-dir items]');
  console.error('       [--min-cluster N] [--json] [--fail-on-contradicted]');
  process.exit(2);
}

/** Strip everything a template substitutes, plus punctuation and case, so that
 *  rows differing only in the substituted content collapse to one cluster key.
 *
 *  Quoted spans, backticks and inline math are substituted content too. On
 *  frontier-14's 2,328 real rows this tool found ZERO clusters, because the
 *  templated wrapper embeds quoted proof-step or title text — 'The move "…"
 *  neither divides nor indexes …' — so with only the id and case stripped,
 *  every key was unique and no cluster could ever form. The id-only rule was
 *  calibrated on frontier-13, where the template substituted nothing else. */
const CASES = ['empty', 'zero', 'one', 'degenerate', 'endpoints', 'nonempty-choice', 'iff-forward', 'iff-reverse'];
const normalise = (text, id) => {
  let t = String(text ?? '')
    .replace(/"[^"]*"/g, '<QUOTE>')
    .replace(/“[^”]*”/g, '<QUOTE>')
    .replace(/`[^`]*`/g, '<QUOTE>')
    .replace(/\$[^$]*\$/g, '<MATH>');
  if (id) t = t.split(id).join('<ID>');
  for (const c of CASES) t = t.split(c).join('<CASE>');
  return t.toLowerCase().replace(/[^a-z<>]+/g, ' ').trim();
};

const itemText = (() => {
  const cache = new Map();
  return (id) => {
    if (cache.has(id)) return cache.get(id);
    const p = join(itemsDir, `${id}.md`);
    const t = existsSync(p) ? readFileSync(p, 'utf8') : null;
    cache.set(id, t);
    return t;
  };
})();

/** Everything below the frontmatter. Frontmatter titles carry "iff" too, and a
 *  title is not where a proof discharges a direction. */
const body = (text) => {
  const m = /^---\n[\s\S]*?\n---\n/.exec(text);
  return m ? text.slice(m[0].length) : text;
};

/** Split an item into its `## `-delimited sections.
 *
 *  Scoping each detector to the right section is what makes the output
 *  readable. Run whole-body, the biconditional detector fired 256 times on the
 *  frontier-13 corpus, and the first case inspected was a false positive:
 *  `thm-monomial-symmetric-polynomials-form-a-basis` has "exactly when" in its
 *  **Facts & Assumptions** block, inside `[L2]`, which is a QUOTED DEPENDENCY —
 *  someone else's biconditional, not this item's claim. The boundary axis asks
 *  about the top-level claim, so the detector must read the Statement. Same
 *  logic for division: a quoted fact may divide by anything; what matters is
 *  whether THIS proof does. */
const sections = (text) => {
  const out = {};
  const parts = body(text).split(/^##\s+/m);
  for (const part of parts.slice(1)) {
    const nl = part.indexOf('\n');
    const head = (nl < 0 ? part : part.slice(0, nl)).trim().toLowerCase();
    out[head] = nl < 0 ? '' : part.slice(nl + 1);
  }
  return out;
};
const claimOf = (text) => {
  const s = sections(text);
  return s['statement'] ?? s['definition'] ?? s['construction'] ?? '';
};
const proofOf = (text) => {
  const s = sections(text);
  // Every proof-bearing section name the corpus uses: an `ex-`/`cex-` item
  // carries its numbered steps under Example or Counterexample. Scoping to
  // Proof/Verification/Refutation alone made every step reference in a
  // counterexample's boundary row read as "step does not occur".
  return s['proof'] ?? s['verification'] ?? s['refutation']
    ?? s['counterexample'] ?? s['example'] ?? '';
};

// ---------------------------------------------------------------------------
// The three contradiction detectors.
//
// Each returns a short reason string when the axis is exhibited by the text, or
// null. Precision over recall throughout: a detector that fires on a third of
// the corpus is a detector nobody reads.
// ---------------------------------------------------------------------------

/** A biconditional in the item's own prose or TeX. Nearly airtight: if the
 *  claim is an iff, both directions are obligations, full stop. Guarded against
 *  the common false friend "if and only if" appearing inside a QUOTED external
 *  statement in a Facts block — those are citations, not this item's claim. */
const exhibitsIff = (t) => {
  const stripped = t
    .replace(/^>.*$/gm, '')                     // block quotes: cited text
    .replace(/\\\[[\s\S]*?\\\]/g, ' ');         // display math is not prose
  const patterns = [
    /\bif and only if\b/i, /\biff\b/i, /\\iff\b/, /\\Leftrightarrow\b/,
    /\\longleftrightarrow\b/, /\bexactly when\b/i, /\bprecisely when\b/i,
    /\bare equivalent\b/i,
  ];
  const hit = patterns.find((p) => p.test(stripped));
  return hit ? `the item's own text states a biconditional (${hit.source})` : null;
};

/** Division by an expression that names a variable. The counting-lemma defect
 *  was exactly this: gamma divides by 2h with h unbounded below. Denominators
 *  that are pure numerals are ignored. */
const exhibitsDivision = (t) => {
  const denoms = [];
  for (const m of t.matchAll(/\\d?frac\{[^{}]*\}\{([^{}]+)\}/g)) denoms.push(m[1]);
  // `\over` only as the primitive fraction command. The negative lookahead is
  // load-bearing: without it `\overline{y}` matches and the tool reports a
  // denominator of "line y", which is how a detector loses its reader.
  for (const m of t.matchAll(/\\over(?![A-Za-z])\s*\{?([A-Za-z][A-Za-z0-9_^{}\\ ]*)\}?/g)) denoms.push(m[1]);
  const symbolic = denoms.filter((d) => /[A-Za-z]/.test(d) && !/^\\(?:pi|infty|epsilon)\b/.test(d.trim()));
  if (!symbolic.length) return null;
  const shown = [...new Set(symbolic)].slice(0, 3).join(', ');
  return `the proof divides by a symbolic denominator (${shown}) — the zero case is a real obligation unless a hypothesis excludes it`;
};

/** An indexed family, union, product or sum over a set the item does not
 *  visibly bound below. The empty case is where "for every element" claims go
 *  quietly vacuous or quietly false. */
const exhibitsFamily = (t) => {
  const patterns = [
    /\\bigcup/, /\\bigcap/, /\\prod_\{/, /\\sum_\{/,
    /\bfamily\b/i, /\bindexed by\b/i, /\bcollection of\b/i,
  ];
  const hit = patterns.find((p) => p.test(t));
  return hit ? `the item quantifies over a family or indexed aggregate (${hit.source})` : null;
};

/** Each detector is paired with the section it is entitled to read. */
const DETECTORS = {
  'iff-forward': { scope: claimOf, detect: exhibitsIff },
  'iff-reverse': { scope: claimOf, detect: exhibitsIff },
  zero: { scope: proofOf, detect: exhibitsDivision },
  empty: { scope: claimOf, detect: exhibitsFamily },
};

// ---------------------------------------------------------------------------

const rows = [];
for (const file of files) {
  let doc;
  try { doc = JSON.parse(readFileSync(file, 'utf8')); }
  catch (err) { console.error(`${file}: unreadable (${err.message})`); process.exit(2); }
  const contracts = doc?.contracts ?? doc;
  if (!contracts || typeof contracts !== 'object') {
    console.error(`${file}: no \`contracts\` object`);
    process.exit(2);
  }
  for (const [id, entry] of Object.entries(contracts)) {
    for (const b of entry?.boundaries ?? []) {
      rows.push({ file, id, case: b.case, status: b.status, text: b.reason ?? b.evidence ?? '' });
    }
  }
}

if (!rows.length) {
  console.error('boundary-audit: no boundary rows found in the supplied contracts — refusing to report a clean run over an empty scope');
  process.exit(2);
}

// Signal 1 — template reuse. `checked` rows cluster too, keyed separately: a
// "we verified this" sentence reused verbatim across items is as suspect as a
// reused not_applicable — frontier-14's three fatal-concealing rows were all
// marked `checked`, a status this signal used to skip entirely.
const clusters = new Map();
for (const r of rows) {
  if (r.status !== 'not_applicable' && r.status !== 'checked') continue;
  const key = `${r.status}|${normalise(r.text, r.id)}`;
  if (key.endsWith('|')) continue;
  if (!clusters.has(key)) clusters.set(key, []);
  clusters.get(key).push(r);
}
const templates = [...clusters.entries()]
  .filter(([, members]) => members.length >= minCluster)
  .map(([key, members]) => ({
    status: members[0].status,
    members: members.length,
    sample: members[0].text,
    normalised: key.slice(key.indexOf('|') + 1),
    items: [...new Set(members.map((m) => m.id))],
    cases: [...new Set(members.map((m) => m.case))].sort(),
  }))
  .sort((a, b) => b.members - a.members);

// Signal 2 — contradicted dispositions.
const contradicted = [];
for (const r of rows) {
  const text = itemText(r.id);
  if (text === null) continue;            // not authored yet — step 5 has not run
  if (r.status === 'checked') {
    // A `checked` row is a claim that somebody verified the case, usually
    // crediting a proof step. The mechanical half of that claim is checkable:
    // a credited step number that does not occur in the proof at all. (Whether
    // an EXISTING step really does the work stays a human read — frontier-14's
    // three false `checked` rows credited real steps that ran only after the
    // case was already assumed away.)
    const proof = proofOf(text);
    for (const m of String(r.text).matchAll(/\bsteps?\s+(\d+\.\d+)\b/gi) ?? []) {
      if (!proof.includes(m[1])) {
        contradicted.push({ id: r.id, case: r.case,
          why: `the row credits step ${m[1]}, which does not occur in the proof`,
          reason: r.text, file: r.file });
      }
    }
    continue;
  }
  if (r.status !== 'not_applicable') continue;
  const d = DETECTORS[r.case];
  if (!d) continue;
  const scoped = d.scope(text);
  if (!scoped.trim()) continue;           // no such section: nothing to contradict
  const why = d.detect(scoped);
  if (why) contradicted.push({ id: r.id, case: r.case, why, reason: r.text, file: r.file });
}

const summary = {
  contracts_scanned: files.length,
  boundary_rows: rows.length,
  not_applicable_rows: rows.filter((r) => r.status === 'not_applicable').length,
  template_clusters: templates.length,
  rows_in_template_clusters: templates.reduce((n, t) => n + t.members, 0),
  contradicted_candidates: contradicted.length,
  items_not_yet_authored: [...new Set(rows.map((r) => r.id))].filter((id) => itemText(id) === null).length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, templates, contradicted }, null, 2));
} else {
  console.log(`boundary-audit: ${summary.boundary_rows} rows over ${summary.contracts_scanned} contract file(s); ` +
    `${summary.not_applicable_rows} marked not_applicable`);
  if (summary.items_not_yet_authored) {
    console.log(`  (${summary.items_not_yet_authored} item(s) not yet on disk — contradiction detectors skipped those)`);
  }

  if (templates.length) {
    console.log(`\nTEMPLATE REUSE — ${templates.length} cluster(s) at or above ${minCluster} members.`);
    console.log('A rationale shared across many items is not a determination about any of them.');
    for (const t of templates.slice(0, 12)) {
      console.log(`\n  ${t.members} rows · axes: ${t.cases.join(', ')}`);
      console.log(`    "${t.sample.slice(0, 160)}${t.sample.length > 160 ? '…' : ''}"`);
      console.log(`    items: ${t.items.slice(0, 6).join(', ')}${t.items.length > 6 ? ` … +${t.items.length - 6}` : ''}`);
    }
    if (templates.length > 12) console.log(`\n  … ${templates.length - 12} further cluster(s); use --json for all`);
  } else {
    console.log(`\nTEMPLATE REUSE — none at or above ${minCluster} members.`);
  }

  if (contradicted.length) {
    console.log(`\nCONTRADICTED DISPOSITIONS — ${contradicted.length} candidate(s).`);
    console.log('Each is a not_applicable row on an axis the item\'s own text exhibits. Read the item.');
    for (const c of contradicted) {
      console.log(`\n  ${c.id}  [${c.case}]`);
      console.log(`    ${c.why}`);
      console.log(`    row says: "${String(c.reason).slice(0, 140)}${String(c.reason).length > 140 ? '…' : ''}"`);
    }
  } else {
    console.log('\nCONTRADICTED DISPOSITIONS — none found by the three detectors.');
  }
  console.log('\nEvery line above is a candidate for a human read, not a verdict.');
}

process.exit((failOnContradicted && contradicted.length) || (failOnTemplate && templates.length) ? 1 : 0);
