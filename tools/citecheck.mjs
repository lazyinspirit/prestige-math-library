#!/usr/bin/env node
// citecheck.mjs — heuristic lint for the DOMINANT defect class in this library.
//
//   node tools/citecheck.mjs [files...] [--json] [--quiet]
//
// WHY THIS EXISTS. A 150-item certification pass found 50 defective items
// (research/verification-benchmark.md). The single largest class, 14 of the 50,
// was MIS-ATTRIBUTION: a fact or a step uses an elementary ordered-field or
// order-theoretic move and cites an item that does not state it. Typical shape:
//
//   [L3] ... adding the two inequalities ... ([[lem-of-sign-rules]])
//
// where `lem-of-sign-rules` says nothing about adding inequalities; the fact
// belongs to `lem-of-add-order`. Nothing in the pipeline could see this.
// `precheck` checks proof SHAPE, `depcheck` checks that declared deps RESOLVE
// and stay acyclic, and the judge is told to treat cited items as correct and is
// not shown them. No gate reads the item that a fact cites. This one does the
// cheap half of that: for a fixed list of moves whose canonical home in this
// library is known, it checks that the canonical home is actually in `deps`.
//
// HEURISTIC, SO WARNINGS ONLY. It matches English, so it has false positives:
// an item may quote a move it does not use, or reach it through a lemma that
// packages it. Exit status is 0 unless a file cannot be read. TRIAGE EVERY
// WARNING; do not merely count them, and do not "fix" one by adding a dep the
// proof does not use, which trades a wrong citation for a wrong dependency.
//
// TRIAGED 2026-07-25, whole repo, 402 items. Started at 63 warnings, nearly all
// false; four separate detection bugs accounted for 60 of them, each fixed at
// source rather than by suppressing the warning:
//   1. homes hand-listed          -> derive them from each item's own Statement
//   2. "is an ordered field"      -> ORDERED_STRUCTURE, since a structure states
//                                    every one of these moves without the words
//   3. `## Definition` not read   -> definitions ARE the home of an axiom
//   4. home regex needed "transitivITY", but a home says "$<$ is transitive"
// Three warnings survive and ALL THREE ARE FALSE POSITIVES, verified by reading
// the cited items; they are left standing rather than special-cased, because a
// suppression list rots faster than three lines of noise:
//   * cor-of-neg-one-squared:44 -- "the sign rule" names lem-of-mult-neg, which
//     is in deps and states exactly (-a)(-b) = ab.
//   * thm-reals-dedekind-field:37,51 -- sign rules and reciprocal FOR CUTS,
//     cited to def-cut-multiplication and lem-cut-reciprocal, both in deps.
// Three warnings were REAL and are fixed: thm-holder-finite (adding inequalities
// attributed to lem-of-sign-rules), lem-sup-of-extremals and
// lem-successor-of-extremal (reflexivity and transitivity with no order dep).
//
// Scope: load-bearing sections only (Statement, Statement refuted, Facts &
// Assumptions, Proof, Refutation, Counterexample, Verification). Remarks are
// held to the same standard for TRUTH, but they are orientation prose and may
// legitimately name results they do not depend on, so they are not scanned here.

import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const quiet = argv.includes('--quiet');
const targets = argv.filter((a) => !a.startsWith('--'));

// ------------------------------------------------------------------ the rules
//
// Each rule is a move stated in recognisable English. A rule fires when an item
// USES the move in load-bearing prose and NONE of its declared prerequisites is
// a home for that move.
//
// HOMES ARE DERIVED, NOT LISTED. The first draft of this tool hand-listed the
// canonical home of each move and produced 63 warnings, nearly all false: this
// library develops several ordered structures (N, Z, Q, R, cuts, ordinals,
// posets) and EACH states its own order axioms, so "transitivity" has a dozen
// legitimate homes and any hand-written list is wrong the moment a page is
// added. Instead an item counts as a home for a move when its OWN `## Statement`
// states that move: that is precisely what "this item is where the move is
// established" means, and it stays correct as the library grows.
//
// `seed` is for homes whose Statement phrases the move in symbols rather than in
// the words the regex looks for. It supplements the derived set; it never
// replaces it.

const RULES = [
  {
    id: 'add-order',
    why: 'adding inequalities / translation invariance of the order',
    re: /add(?:ing|s|ed)?\s+(?:the\s+)?(?:two\s+|both\s+)?(?:strict\s+)?inequalit|inequalit\w*\s+(?:may|can)\s+be\s+added|translation[-\s]invarian|compatib\w+\s+with\s+addition|add(?:ing)?\s+(?:a\s+)?constant\s+to\s+both\s+sides|adding\s+\S+\s+to\s+both\s+sides/i,
    seed: ['lem-of-add-order', 'def-ordered-field'],
  },
  {
    id: 'sign-rules',
    why: 'multiplying an inequality by a positive / the sign rules',
    re: /multiply(?:ing)?\s+(?:both\s+sides\s+)?by\s+(?:a|the)\s+positive|sign\s+rules?|product\s+of\s+(?:two\s+)?positives?|positive\s+times\s+(?:a\s+)?positive/i,
    seed: ['lem-of-sign-rules', 'prop-of-multiply-inequalities', 'def-ordered-field'],
  },
  {
    id: 'order-axioms',
    why: 'reflexivity / antisymmetry / transitivity of an order',
    // Three things share this vocabulary and are NOT orders, so they are excluded
    // or the whole set-theory half of the library fires spuriously:
    //   * equinumerosity and equivalence relations, also reflexive/transitive;
    //   * a TRANSITIVE SET (every element a subset), the ordinal-page sense;
    //   * a transitive RELATION being constructed rather than appealed to.
    re: /reflexivit|antisymmetr|transitivit/i,
    unless: /\\approx|equinumer|equivalence\s+relation|\\sim\b|\\equiv|transitive\s+set|is\s+transitive\b|transitivity\s+of\s+\$/i,
    // A USE says "by transitivity"; a HOME says "$<$ is transitive". Detecting
    // homes with the use-regex missed lem-nat-transitive-irreflexive and
    // def-nat-order, so two correctly-cited items were flagged.
    homeRe: /reflexiv|antisymmetr|transitiv|irreflexiv|trichotom/i,
    homeUnless: /\\approx|equinumer|equivalence\s+relation/i,
    seed: ['def-partial-order', 'def-ordered-field', 'def-total-order', 'def-preorder'],
  },
  {
    id: 'inverse-positive',
    why: 'the inverse of a positive element is positive',
    re: /inverse\s+of\s+a\s+positive|reciprocal\s+of\s+a\s+positive/i,
    seed: ['lem-of-inverse-positive', 'prop-of-reciprocal-order'],
  },
];

// Rules deliberately NOT included, and why, so they are not "helpfully" re-added:
//   * "upper bound"  -- stated by def-upper-bound, def-supremum, def-infimum,
//     def-bounded-set, def-archimedean-field, def-chain-complete-poset,
//     def-complete-ordered-field and every completeness theorem. The phrase is
//     near-universal in an order library; the rule carried no signal.
//   * "1 > 0"        -- matched incidental chains ("witness $r = 1 > 0$") far
//     more often than an actual appeal to positivity of the unit.

// ---------------------------------------------------------------- frontmatter

function split(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: src };
}
function scalar(fm, key) {
  const m = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}
function list(fm, key) {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0, end = -1;
  for (let i = open; i < fm.length; i++) {
    if (fm[i] === '[') depth++;
    else if (fm[i] === ']' && --depth === 0) { end = i; break; }
  }
  if (end < 0) return [];
  return fm.slice(open + 1, end).split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
}

const LOAD_BEARING = [
  'Statement', 'Statement refuted', 'Facts & Assumptions',
  'Proof', 'Refutation', 'Counterexample', 'Verification',
  // `Definition` and `Example` are the body of a def- / ex- item: as
  // load bearing as a Statement, and just as able to mis-cite.
  'Definition', 'Example',
];

// What an item ESTABLISHES, i.e. what makes it a home for a move.
// `Definition` MUST be here: definitions are where axioms live, and omitting it
// made the tool blind to def-well-order, def-partial-order and every other
// definition, which is exactly where an order axiom is established.
const ESTABLISHES = ['Statement', 'Statement refuted', 'Definition', 'Example'];

/** Prose of an item under the given `## ` headings, as `[{line, text}]`.
 *  `offset` is the number of frontmatter lines, so `line` is a FILE line and the
 *  reported `path:line` is clickable. */
function linesUnder(body, headings, offset = 0) {
  const out = [];
  let live = false;
  body.split('\n').forEach((text, i) => {
    const h = text.match(/^##\s+(.+?)\s*$/);
    if (h) { live = headings.includes(h[1]); return; }
    if (live && text.trim()) out.push({ line: offset + i + 1, text });
  });
  return out;
}

// ------------------------------------------------------------------ load items

const aliasTo = new Map();
const all = [];
for (const f of readdirSync(join(REPO, 'items')).sort()) {
  if (!f.endsWith('.md')) continue;
  const src = readFileSync(join(REPO, `items/${f}`), 'utf8');
  const { fm, body } = split(src);
  const id = scalar(fm, 'id') ?? basename(f, '.md');
  const rec = {
    id,
    file: `items/${f}`,
    deps: list(fm, 'deps'),
    justified: list(fm, 'justified_by'),
    lines: linesUnder(body, LOAD_BEARING, src.slice(0, src.length - body.length).split('\n').length - 1),
    states: linesUnder(body, ESTABLISHES).map((l) => l.text).join('\n'),
  };
  all.push(rec);
  for (const a of list(fm, 'aliases')) aliasTo.set(a, id);
}
const resolve = (x) => aliasTo.get(x) ?? x;

const selected = targets.length
  ? all.filter((i) => targets.some((t) => t.endsWith(i.file) || basename(t) === basename(i.file)))
  : all;

// --------------------------------------------------------- derive the homes
//
// An item is a home for a move when its own `## Statement` establishes it. Two
// ways that happens:
//
//   1. the Statement says the move in the words the rule looks for; or
//   2. the Statement ESTABLISHES A STRUCTURE whose axioms include every move
//      here. "$\mathbb{Q}$ is a totally ordered field" states translation
//      invariance, the sign rules and the order axioms without using any of
//      those words, and citing it for them is correct. Missing this was the
//      second-largest source of false positives, after hand-listed homes:
//      lem-cut-add-well-defined, lem-rat-cut-embeds and thm-reals-ordered-field
//      all cite thm-rat-ordered-field and all were correct.

const ORDERED_STRUCTURE =
  /is\s+(?:a|an)\s+[^.]*?(?:ordered\s+(?:field|ring|set|group)|linear\s+order|total\s+order|partial\s+order|well[-\s]order)|(?:totally|linearly|partially|well)[-\s]ordered|satisfies\s+the\s+order\s+axioms/i;

/** Items whose own Statement establishes each move. */
const homes = new Map();
for (const rule of RULES) {
  const set = new Set(rule.seed ?? []);
  const hre = rule.homeRe ?? rule.re;
  const hun = rule.homeRe ? rule.homeUnless : rule.unless;
  for (const it of all) {
    const byWords = hre.test(it.states) && !(hun && hun.test(it.states));
    const byStructure = ORDERED_STRUCTURE.test(it.states);
    if (byWords || byStructure) set.add(it.id);
  }
  homes.set(rule.id, set);
}

// ------------------------------------------------------------------- the check

const warns = [];
for (const it of selected) {
  // `justified_by` counts: those targets are declared prerequisites in spirit,
  // and are kept out of `deps` only to avoid a spurious cycle (SCHEMA.md §3).
  const declared = new Set([...it.deps, ...it.justified].map(resolve));

  for (const rule of RULES) {
    const home = homes.get(rule.id);
    // An item that IS a home needs no citation to itself.
    if (home.has(it.id)) continue;
    if ([...declared].some((d) => home.has(d))) continue;

    const hits = it.lines.filter(
      (l) => rule.re.test(l.text) && !(rule.unless && rule.unless.test(l.text)),
    );
    if (!hits.length) continue;

    warns.push({
      code: rule.id,
      file: it.file,
      line: hits[0].line,
      why: rule.why,
      quote: hits[0].text.trim().slice(0, 150),
      count: hits.length,
    });
  }
}

// ---------------------------------------------------------------------- report

if (asJson) {
  console.log(JSON.stringify({ summary: { scanned: selected.length, warnings: warns.length }, warns }, null, 2));
} else {
  if (!quiet) console.log(`citecheck: ${selected.length} item(s) scanned`);
  if (!warns.length) {
    console.log('\nOK — every recognised elementary move cites a home that states it.');
  } else {
    console.log(`\n${warns.length} warning(s). HEURISTIC: triage each one, do not just count them.\n`);
    for (const w of warns) {
      console.log(`  [${w.code}] ${w.file}:${w.line}${w.count > 1 ? ` (+${w.count - 1} more)` : ''}`);
      console.log(`      uses: ${w.why}`);
      console.log('      but no declared prerequisite states it');
      console.log(`      > ${w.quote}`);
    }
    console.log('\nEach is one of three things:');
    console.log('  (a) a real mis-attribution   -> cite the item that states the move;');
    console.log('  (b) the move reached through a lemma that packages it -> leave it;');
    console.log('  (c) the phrase used but the move not made -> leave it.');
    console.log('NEVER silence a warning by adding a dep the proof does not use.');
  }
}

process.exit(0);
