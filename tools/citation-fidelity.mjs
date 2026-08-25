#!/usr/bin/env node
// citation-fidelity — find `[F#]`/`[L#]`/`[A#]` restatements that claim more
// than the item they cite actually says.
//
// WHY THIS EXISTS. This is the largest confirmed-fatal class the library has:
// ten of twenty-five step-8 rows on frontier-13, and the majority of step-6
// findings. The shape never varies — the fact line restates a cited Statement
// slightly wider than it is, and a numbered step then leans on the wider
// version. Examples that reached disk:
//
//   thm-carmichael-function-formula   used `lcm` over an arbitrary finite list
//                                     while `def-lcm` says "Two arguments only"
//                                     in as many words.
//   thm-gram-determinant-…            `[L4]`/`[L7]` dropped the n >= 1 bound.
//   thm-weighted-walks-…              `[L3]` attributed A^0 = I to a theorem
//                                     with no such clause.
//
// Up to now this class was caught only by a human reading each fact line
// against each cited item — and `alpha-finding-lists-become-fix-scope` is the
// standing lesson that a hand-read sample of a defect class ships as if it were
// the whole class. Once a class has appeared twice it gets a detector.
//
// TWO INDEPENDENT CHECKS.
//
//   quote-not-found   The proof contract records, per fact, the exact `quote`
//                     it is citing and the `source_section` it comes from. If
//                     that text does not appear in THAT SECTION of the cited
//                     item, the citation is to something that is not there.
//                     This is close to a hard error rather than a heuristic:
//                     the author asserted a verbatim quote.
//
//   widening          The fact line generalises the quote: an explicit arity
//                     restriction dropped, a numeric lower bound dropped, or an
//                     existential turned universal. Heuristic, and reported as
//                     a candidate.
//
// WHAT IT IS NOT. It cannot judge mathematics and does not try. It reports
// locations for a human read and never a verdict, and it prints no headline
// count that could be mistaken for a finding count.
//
//   node tools/citation-fidelity.mjs research/<run>-batch-*.proof-contracts.json
//        [--items-dir items] [--json] [--fail-on-missing-quote]

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { factLines, splitFrontmatter, sourceSectionText, SOURCE_SECTIONS } from './facts-block.mjs';

const argv = process.argv.slice(2);
const flag = (name, fallback = null) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : fallback;
};
const files = argv.filter((a) => !a.startsWith('--') && a.endsWith('.json'));
const itemsDir = flag('items-dir', 'items');
const asJson = argv.includes('--json');
const failOnMissingQuote = argv.includes('--fail-on-missing-quote');

if (!files.length) {
  console.error('usage: node tools/citation-fidelity.mjs <contracts.json...> [--items-dir items] [--json]');
  console.error('       [--fail-on-missing-quote]');
  process.exit(2);
}

const read = (() => {
  const cache = new Map();
  return (id) => {
    if (cache.has(id)) return cache.get(id);
    const p = join(itemsDir, `${id}.md`);
    const t = existsSync(p) ? readFileSync(p, 'utf8') : null;
    cache.set(id, t);
    return t;
  };
})();

/** Collapse whitespace and drop markdown emphasis so that a quote reflowed by
 *  an editor still matches the source. Deliberately NOT stripping TeX: a
 *  changed subscript is a changed claim. */
const flat = (s) => String(s ?? '')
  .replace(/\*\*/g, '')
  .replace(/\s+/g, ' ')
  .trim();

// The item's own fact lines, and the text a quote must be found in, both come
// from tools/facts-block.mjs — the one parser for this grammar. Its header
// records why (an end-of-string anchor written `\Z` truncated this block at the
// first `$\mathbb{Z}$` and silenced every detector below on 35 items).

// ---------------------------------------------------------------------------
// Widening detectors. Each takes (quote, restatement) and returns a reason or
// null. Precision over recall: every one of these fired on a real defect that
// reached disk, and none fires on a faithful shortening.
// ---------------------------------------------------------------------------

/** An explicit arity restriction in the source, generalised in the restatement.
 *  This is the `def-lcm` defect: the definition says "Two arguments only" and
 *  the citing Statement applied it to an arbitrary finite list. */
const arityWidened = (quote, rest) => {
  const restricts = /\b(two arguments only|only two|exactly two|two arguments|binary operation on)\b/i.test(quote);
  if (!restricts) return null;
  const generalises = /\b(finite (list|family|set|collection)|arbitrary|a family|indexed|\\prod_|\\sum_|\\bigcup|\\operatorname\{lcm\}\s*\(\s*[a-z]_1|,\s*\\ldots\s*,)/i.test(rest);
  return generalises
    ? 'the cited text restricts to two arguments; the restatement generalises to a family or list'
    : null;
};

/** A numeric lower bound present in the source, and the restatement then
 *  UNIVERSALLY QUANTIFIES the same symbol without it.
 *
 *  The universal-quantification requirement is what makes this usable. Run
 *  without it — "cited says n >= 1, restatement mentions n" — it produced 96
 *  hits on the frontier-13 corpus, nearly all faithful shortenings where the
 *  bound is carried by the citing item's own hypotheses or by the symbol being
 *  already fixed. A restatement that says "for every $n$" with no bound is a
 *  different thing: it is the widening itself, written down. That is the
 *  `thm-gram-determinant-detects-linear-independence` defect, where `[L4]` and
 *  `[L7]` dropped n >= 1 while quantifying over all n. */
const boundDropped = (quote, rest) => {
  const bounds = [...quote.matchAll(/([A-Za-z])\s*\\(?:ge|geq|geqslant)\s*(\d+)/g)];
  for (const b of bounds) {
    const [, sym, num] = b;
    const universallyQuantified = new RegExp(
      `\\b(?:for\\s+(?:every|all|each)|any)\\s+\\$?\\\\?[a-z]*\\s*\\$?\\s*${sym}\\b`, 'i').test(rest)
      || new RegExp(`\\b(?:every|each)\\s+(?:integer|natural number|index|dimension)\\s+\\$?${sym}\\$?`, 'i').test(rest);
    if (!universallyQuantified) continue;
    const boundKept = new RegExp(`${sym}\\s*\\\\(?:ge|geq|geqslant)\\s*${num}`).test(rest)
      || new RegExp(`${sym}\\s*(?:>=|≥)\\s*${num}`).test(rest)
      || /\bpositive\b|\bnonzero\b|\bnonempty\b|\bnon-empty\b|\bat least\b/i.test(rest);
    if (!boundKept) {
      return `the cited text carries $${sym} \\ge ${num}$; the restatement quantifies over all $${sym}$ without it`;
    }
  }
  return null;
};

// A quantifier-flip detector was written and REMOVED rather than shipped
// noisy. "the cited text asserts existence, the restatement reads as universal"
// fired 16 times on frontier-13 and every case inspected was correct: cited
// theorems of the form "for every f there exists S" are faithfully restated as
// "every f has an S". Distinguishing a real flip from a faithful reading of a
// forall-exists statement needs the quantifier PREFIX, which these heuristics
// cannot recover from prose. Left to the step-6 reader, who can.

const WIDENING = [arityWidened, boundDropped];

// ---------------------------------------------------------------------------

const missingQuotes = [];
const widenings = [];
const upheld = [];
let citationsChecked = 0;
let citingItemsOnDisk = 0;
const unauthored = new Set();

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
    const citingText = read(id);
    if (citingText === null) { unauthored.add(id); continue; }
    citingItemsOnDisk += 1;
    const lines = factLines(citingText);

    for (const c of entry?.citations ?? []) {
      const source = c.source;
      const quote = flat(c.quote);
      if (!source || !quote) continue;
      citationsChecked += 1;

      const sourceText = read(source);
      if (sourceText === null) {
        unauthored.add(source);
      } else {
        // SEARCH THE SECTION THE CITATION NAMES, not the whole file. A contract
        // citation records `source_section`, and proof-contract.mjs has always
        // checked its quote inside that section; this checked the entire file,
        // frontmatter included, so a phrase living in the cited item's Remark or
        // Proof vouched for a quote attributed to its Statement. Same grammar,
        // two answers, and the weaker one ran on every level.
        //
        // A citation naming no section, or one no citation may name, keeps the
        // whole-file search: proof-contract already hard-errors that shape as
        // `citation-section`, and inventing a second, differently-worded report
        // of it here would put false positives in front of a reader instead.
        const scoped = SOURCE_SECTIONS.has(c.source_section)
          ? sourceSectionText(splitFrontmatter(sourceText).body, c.source_section)
          : sourceText;
        const haystack = flat(scoped);
        if (!haystack.includes(quote)) {
          // Try the first sentence: authors legitimately quote a clause and then
          // elide. A PRESENT opening passes as elision; an absent opening is
          // reported whatever its length — the old `> 25` guard silently dropped
          // every short absent quote, and a contract quote is an asserted
          // verbatim citation either way.
          const head = quote.split(/(?<=[.;])\s/)[0];
          if (!haystack.includes(head)) {
            missingQuotes.push({
              id, fact: c.fact, source, quote: quote.slice(0, 180), file,
              searched: SOURCE_SECTIONS.has(c.source_section) ? c.source_section : 'whole item',
            });
          }
        }
      }

      const line = lines.find((l) => l.fact === c.fact);
      if (!line) continue;
      if (c.reviewed?.upheld === true && typeof c.reviewed.reason === 'string' && c.reviewed.reason.trim().length >= 40) {
        upheld.push({ id, fact: c.fact, source, by: c.reviewed.by ?? 'unattributed', reason: c.reviewed.reason });
        continue;
      }
      for (const detect of WIDENING) {
        const why = detect(quote, line.text);
        if (why) {
          widenings.push({ id, fact: c.fact, source, why, restatement: line.text.slice(0, 200), file });
          break;
        }
      }
    }
  }
}

if (!citationsChecked && !unauthored.size) {
  console.error('citation-fidelity: no citations found in the supplied contracts — refusing to report a clean run over an empty scope');
  process.exit(2);
}

const summary = {
  contracts_scanned: files.length,
  citing_items_on_disk: citingItemsOnDisk,
  citations_checked: citationsChecked,
  items_not_yet_authored: unauthored.size,
  quote_not_found: missingQuotes.length,
  widening_candidates: widenings.length,
  upheld_by_review: upheld.length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, quote_not_found: missingQuotes, widening: widenings, upheld }, null, 2));
} else {
  console.log(`citation-fidelity: ${summary.citations_checked} citation(s) over ${summary.citing_items_on_disk} authored item(s)`);
  if (summary.items_not_yet_authored) {
    console.log(`  (${summary.items_not_yet_authored} referenced item(s) not on disk — skipped, not passed)`);
  }

  if (missingQuotes.length) {
    console.log(`\nQUOTE NOT FOUND IN THE CITED ITEM — ${missingQuotes.length}.`);
    console.log('The contract asserts a verbatim quote. These do not appear in the source.');
    for (const q of missingQuotes) {
      console.log(`\n  ${q.id}  [${q.fact}] -> ${q.source} (searched: ${q.searched})`);
      console.log(`    quote: "${q.quote}${q.quote.length >= 180 ? '…' : ''}"`);
    }
  } else {
    console.log('\nQUOTE NOT FOUND — none; every recorded quote appears in its cited item.');
  }

  if (widenings.length) {
    console.log(`\nWIDENING CANDIDATES — ${widenings.length}.`);
    console.log('The fact line may claim more than the quote gives. Read both.');
    for (const w of widenings) {
      console.log(`\n  ${w.id}  [${w.fact}] -> ${w.source}`);
      console.log(`    ${w.why}`);
      console.log(`    line: "${w.restatement}${w.restatement.length >= 200 ? '…' : ''}"`);
    }
  } else {
    console.log('\nWIDENING CANDIDATES — none found by the three detectors.');
  }
  if (upheld.length) {
    console.log(`\nUPHELD BY REVIEW — ${upheld.length} citation row(s) an Alpha read and kept, with reasons on the record:`);
    for (const u of upheld) console.log(`  ${u.id}  [${u.fact}] -> ${u.source}  by ${u.by}: ${String(u.reason).slice(0, 120)}`);
  }
  console.log('\nEvery line above is a candidate for a human read, not a verdict.');
}

process.exit(failOnMissingQuote && missingQuotes.length ? 1 : 0);
