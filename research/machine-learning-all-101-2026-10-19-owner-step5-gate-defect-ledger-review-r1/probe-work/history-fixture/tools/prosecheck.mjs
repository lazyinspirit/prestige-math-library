#!/usr/bin/env node
// prosecheck — the gate for the defect class that produces EVERY defect this
// library actually ships.
//
// WHY THIS EXISTS. Across seven consecutive builds, ~40 defects were found at
// the reading tiers and NOT ONE was in a numbered proof step. Every one was in a
// Statement paragraph, an Example paragraph, a Remark, or a page summary. And
// almost none of them was a mathematical error: they were claims ABOUT THE
// LIBRARY — how many items do something, where a page sits, what the corpus does
// not contain. Those are impossible for an author to verify while writing,
// because each is a claim about a file the author is not looking at. That is why
// they survive authoring, and why they cost a human reading tier to find.
//
// Three rules, from the owner's workflow review (2026-07-28):
//   1. no count in prose;
//   2. no positional claim that is not derived from the spec;
//   3. scope denials are scoped to THIS PAGE'S DECLARED PREREQUISITES, never to
//      "the library".
//
// SEVERITY IS SPLIT ON CERTAINTY, deliberately.
//   ERROR   — `position-contradiction`: a direction word in the same sentence as
//             a wikilink whose home page order CONTRADICTS it. Mechanically
//             decidable from plan-spec.json, so no judgement is involved. This
//             is the exact defect found seven times in one build ("developed on
//             a later page" for a page at order 255, cited from 283).
//   WARNING — the heuristics: counts, library-scoped denials, unverifiable
//             position words. Modelled on citecheck, which is warnings-only for
//             the same reason: they have legitimate cases and a false positive
//             must never block a build. NEVER silence one by rewording a true
//             sentence into a vaguer one — fix it or leave it.
//
// Math is stripped before matching ($…$ and $$…$$), because "n = 3 items" inside
// a formula is not a prose count.
//
// usage: node tools/prosecheck.mjs [files...]   (bare = every item and page)

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const SPEC = "research/plan-spec.json";
const order = new Map();   // page id  -> order
const homeOf = new Map();  // item id  -> page id

if (existsSync(SPEC)) {
  const spec = JSON.parse(readFileSync(SPEC, "utf8"));
  for (const p of spec.pages ?? []) {
    order.set(p.id, p.order);
    for (const it of p.items ?? []) homeOf.set(typeof it === "string" ? it : it.id, p.id);
  }
}
// Page files are the truth for what is actually homed where; the spec lags.
for (const cat of existsSync("library") ? readdirSync("library") : []) {
  for (const f of readdirSync(join("library", cat)).filter((x) => x.endsWith(".md") && x !== "_category.md")) {
    const pid = f.slice(0, -3);
    const t = readFileSync(join("library", cat, f), "utf8");
    for (const sec of ["items", "examples"]) {
      const m = t.match(new RegExp("^" + sec + ":\\s*\\n((?:\\s*-\\s.*\\n)+)", "m"));
      if (!m) continue;
      for (const line of m[1].split("\n")) {
        const id = line.trim().replace(/^-\s*/, "").trim();
        if (id) homeOf.set(id, pid);
      }
    }
  }
}

const stripMath = (s) => s.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/\$[^$\n]*\$/g, " ");
const prose = (t) => {
  // Everything except the frontmatter and the numbered-step block. Steps cite by
  // [L#] and are checked by precheck; this gate is about the sentences around them.
  const body = t.replace(/^---[\s\S]*?\n---\n/, "");
  return body.replace(/^\d+\.\d+ .*$/gm, " ");
};

const NUM = "(?:\\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|half|most|all|none|several|many)";
const NOUN = "(?:items?|pages?|theorems?|examples?|definitions?|lemmas?|corollar(?:y|ies)|claims?|remarks?|false statements?)";
const DIR = "(?:later|earlier|above|below|preceding|subsequent|further on|further down|higher|lower)";
const DENY = "(?:develops?|develop|proved?|proves|contains?|builds?|built|defines?|defined|establish(?:es|ed)?|introduces?|introduced|available|has|have)";

const RULES = [
  { code: "count-in-prose", level: "warn",
    re: new RegExp(`\\b${NUM}\\s+(?:of\\s+(?:the\\s+)?)?${NOUN}\\b`, "gi"),
    skip: (m) => /^step\b/i.test(m) },
  { code: "count-of-this-page", level: "warn",
    re: new RegExp(`\\b${NUM}\\s+of\\s+(?:the\\s+)?(?:this page|these|them|the above)\\b`, "gi") },
  { code: "library-scope-denial", level: "warn",
    re: new RegExp(`\\b(?:not|never|no|neither|nowhere)\\b[^.]{0,70}\\b${DENY}\\b[^.]{0,50}\\b(?:in this library|anywhere in it|anywhere in this library|in the library)\\b`, "gi") },
  { code: "library-scope-denial", level: "warn",
    re: /\bthis library (?:does not|has not|never|cannot)\b[^.]{0,60}/gi },
];

function checkFile(path) {
  const t = readFileSync(path, "utf8");
  const p = stripMath(prose(t));
  const self = path.startsWith("items/") ? path.slice(6, -3) : path.replace(/^library\/[^/]+\//, "").slice(0, -3);
  const selfPage = homeOf.get(self) ?? self;
  const selfOrder = order.get(selfPage);
  const out = [];

  for (const r of RULES) {
    r.re.lastIndex = 0;
    let m;
    while ((m = r.re.exec(p))) {
      if (r.skip?.(m[0])) continue;
      out.push({ level: r.level, code: r.code, text: m[0].replace(/\s+/g, " ").slice(0, 90) });
    }
  }

  // The decidable one, TIGHTLY scoped. An earlier draft fired on any direction
  // word sharing a sentence with any wikilink, and produced 240 "errors" on a
  // corpus that had just been read end to end — i.e. almost all false. Two
  // lessons, both kept here:
  //
  //   * "above"/"below" nearly always mean "further up/down THIS ITEM", not a
  //     page position. They are excluded outright; only "later"/"earlier" are
  //     positional in this library's idiom.
  //   * the direction word must attach to the LINK, not merely co-occur with it.
  //     So the phrase must name a page or the reading order, and the link must
  //     sit within a short window of it.
  //
  // What survives is decidable from plan-spec.json with no judgement, which is
  // why it is the only ERROR this gate raises.
  if (selfOrder !== undefined) {
    const PHRASE = /\b(later|earlier)\b[^.]{0,40}?\b(page|order|reading order)\b|\b(page|order|reading order)\b[^.]{0,40}?\b(later|earlier)\b/gi;
    let pm;
    while ((pm = PHRASE.exec(p))) {
      // "later on this page" / "earlier in this item" are about position WITHIN
      // the item, not about a page in the reading order. Both produced false
      // positives on the real corpus.
      if (/\b(later|earlier)\b[^.]{0,20}\b(on|in)\s+(this|the present)\s+(page|item)\b/i.test(pm[0])) continue;
      // Clamp to the end of the sentence: a link in the NEXT sentence is not
      // governed by this direction word. Also a real false positive.
      const tail = p.slice(pm.index, pm.index + pm[0].length + 120);
      const win = tail.slice(0, (tail.search(/(?<=[.!?])\s/) + 1) || tail.length);
      const dir = /later/i.test(pm[0]) ? "later" : "earlier";
      for (const lm of win.matchAll(/\[\[([a-z0-9-]+)(?:\|[^\]]*)?\]\]/g)) {
        const o = order.get(homeOf.get(lm[1]));
        if (o === undefined || o === selfOrder) continue;
        if (dir === "later" && o < selfOrder)
          out.push({ level: "error", code: "position-contradiction",
            text: `"${lm[1]}" called LATER but its page is order ${o} < ${selfOrder} — ${win.replace(/\s+/g, " ").slice(0, 80)}` });
        if (dir === "earlier" && o > selfOrder)
          out.push({ level: "error", code: "position-contradiction",
            text: `"${lm[1]}" called EARLIER but its page is order ${o} > ${selfOrder} — ${win.replace(/\s+/g, " ").slice(0, 80)}` });
      }
    }
  }
  return out;
}

const argv = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const strict = process.argv.includes("--strict");
let files = argv;
if (!files.length) {
  files = readdirSync("items").filter((f) => f.endsWith(".md")).map((f) => join("items", f));
  for (const cat of readdirSync("library"))
    for (const f of readdirSync(join("library", cat)).filter((x) => x.endsWith(".md") && x !== "_category.md"))
      files.push(join("library", cat, f));
}

let errors = 0, warns = 0;
const byCode = new Map();
for (const f of files) {
  for (const r of checkFile(f)) {
    byCode.set(r.code, (byCode.get(r.code) ?? 0) + 1);
    if (r.level === "error") { errors++; console.log(`  [${r.code}] ${f}: ${r.text}`); }
    else { warns++; if (process.argv.includes("--warnings")) console.log(`  [${r.code}] ${f}: ${r.text}`); }
  }
}

console.log(`\n${files.length} file(s) checked. ${errors} error(s), ${warns} warning(s).`);
for (const [c, n] of [...byCode].sort((a, b) => b[1] - a[1])) console.log(`  ${c}: ${n}`);
if (!process.argv.includes("--warnings") && warns)
  console.log("\n(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)");
console.log(
  errors === 0
    ? "\nOK — no positional claim contradicts the spec."
    : "\nFAIL — a positional claim contradicts plan-spec order. NEVER fix one by making the sentence vaguer."
);
process.exit(errors > 0 || (strict && warns > 0) ? 1 : 0);
