# frontier-26 batch 10 notes - step 1 scaffold

Owned pairs:

- `regular-expressions-and-kleenes-theorem` / `regular-expressions-and-kleenes-theorem-examples`
- `context-free-pumping-ogden-and-parsing` / `context-free-pumping-ogden-and-parsing-examples`

Artifacts written in this dispatch:

- `research/frontier-26-batch-10.pages.json`
- `research/frontier-26-batch-10.coverage.json`
- this file

Session date: Sunday, August 30, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-26-dispatch/beta-batch-10.prompt.md`,
`research/frontier-26-beta-10.task.md`, `research/plan-spec.json`, the
controlling design blocks in
[research/plan-computability-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-computability-theory-track.md:286)
and
[research/plan-computability-theory-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-computability-theory-track.md:432),
and the prerequisite manifests
`research/frontier-25-batch-10.pages.json`,
`research/frontier-24-batch-10.pages.json`, and
`research/frontier-1-batch-2.pages.json`.

For both assigned A pages, the live spec and the controlling design agree on:

- page id
- companion page id
- title
- order
- category
- declared prerequisites

There is no design-versus-spec drift to record for batch 10.

## Item census and split check

- A page `regular-expressions-and-kleenes-theorem`: `16` items
- B page `regular-expressions-and-kleenes-theorem-examples`: `3` items
- A page `context-free-pumping-ogden-and-parsing`: `16` items
- B page `context-free-pumping-ogden-and-parsing-examples`: `3` items

Neither A page is close to the `60`-item split ceiling, so no split is needed.

## Route choices

### TC-4 -- `regular-expressions-and-kleenes-theorem`

I kept the design's 16-item route and made one narrow proof-routing decision.

1. separate regular-expression syntax from denotation,
2. make the structural well-definedness seam explicit before any automata
   conversion,
3. prove regular expression to epsilon-NFA by Thompson recursion,
4. prove DFA to regular expression by GNFA preprocessing and state elimination,
5. package Kleene's theorem from those two directions,
6. use that route for homomorphic images,
7. prove inverse homomorphism by DFA macro-transitions along the image words,
8. prove quotient closure at the automaton level, and
9. finish with the DFA decision bundle plus the two planned false statements.

Important choices:

- I kept `lem-denotation-is-structurally-well-defined` as a real item. Gallier
  explicitly flags the free-generation issue, and the design's "syntax versus
  denotation" trap is exactly there.
- I kept the GNFA/state-elimination route rather than replacing it with Arden or
  derivatives. The design names state elimination, Gallier gives the exact
  preprocessing and update formula, and the companion false statement depends on
  elimination-order nonuniqueness.
- `thm-closure-under-left-and-right-quotient` uses the standard right-quotient
  DFA retagging from Cunningham and the dual "multiple initial states" NFA
  construction for left quotient. I did not split the theorem because the
  design couples left and right quotient as one item.
- The decision theorem is phrased in DFA graph terms: simulation for
  membership, reachability for emptiness, reachable accepting cycles for
  infinitude, and difference/symmetric-difference emptiness for containment and
  equivalence.

### TC-8 -- `context-free-pumping-ogden-and-parsing`

I kept the design's 16-item route and used a mixed source stack because no
single accessible treatment I could verify cleanly covered Ogden and CYK at the
needed level.

1. isolate the CNF tree-height/yield bound,
2. prove the ordinary CFL pumping lemma from repeated variables on a long path,
3. define the marked-position decomposition separately,
4. prove Ogden's lemma from Gallier's marked-leaf route,
5. record nonclosure under intersection and complement,
6. keep reversal as the single positive closure theorem on this page,
7. define the CYK table and prove its invariant,
8. package CYK membership and decidability,
9. record CFG emptiness and finiteness decidability, and
10. finish with the equivalence/ambiguity problem definition and the three
    planned false statements.

Important choices:

- I kept `lem-height-and-yield-bound-for-cnf-trees` explicit because both the
  pumping-lemma proof and the CYK discussion genuinely spend it.
- I did not replace CYK with LR parsing even though Gallier's later parsing
  chapter is LR-focused. The design explicitly wants CYK, and Aho's Lecture 10
  gives the exact triangular-table invariant and algorithm.
- I kept reversal as the page's positive closure theorem and left
  "intersection with a regular language" on
  `pushdown-automata-and-context-free-languages`, exactly where the predecessor
  scaffold already homes it.
- The B-page counterexample to
  `fs-the-cfl-pumping-lemma-characterizes-cfls` uses the classical
  pairwise-distinct-counts language
  `L = {a^i b^j c^k : i,j,k are pairwise distinct}`. On Monday, August 31,
  2026 I repaired its source trail with two directly read live carriers: Yuval
  Filmus's CS StackExchange answer for the classical-witness/Wise attribution,
  and the ROIFE Ogden-lemma note for a worked non-context-freeness proof of the
  exact language.

## Source set actually read

I re-opened these live sources through the web reader on Sunday, August 30,
2026.

### TC-4 pair

Harvested in the coverage ledger:

1. Jean Gallier and Jocelyn Quaintance, *Introduction to the Theory of
   Computation: Some Notes for CIS511*.
   URL: `https://www.scribd.com/document/977881977/Tcbook-Lang`
2. John Watrous, *Introduction to the Theory of Computing*, Lecture 15.
   URL: `https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.15.pdf`
3. H. Conrad Cunningham, *Notes on Models of Computation*, Chapter 4.
   URL: `https://john.cs.olemiss.edu/~hcc/docs/LinzNotes/chap04/ch04.html`

How they are used:

- Gallier is the primary treatment for regular-expression syntax/denotation, the
  Thompson construction, the GNFA preprocessing/state-elimination route, and
  the homomorphism/inverse-homomorphism closure summary.
- Watrous Lecture 15 backs the explicit decidability packaging for regular
  expression membership and DFA emptiness/equivalence.
- Cunningham Chapter 4 independently backs the homomorphism definition, the
  right-quotient construction, and the membership/finite-or-infinite/equality
  question bundle.

### TC-8 pair

Harvested in the coverage ledger:

1. Jean Gallier and Jocelyn Quaintance, *Introduction to the Theory of
   Computation: Some Notes for CIS511*.
   URL: `https://www.scribd.com/document/977881977/Tcbook-Lang`
2. Alfred V. Aho, COMS W3261 CS Theory, Lecture 10.
   URL: `https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html`
3. Alfred V. Aho, COMS W3261 CS Theory, Lecture 11.
   URL: `https://www.cs.columbia.edu/~aho/cs3261/Lectures/L11-Properties_of_CFLs.html`
4. H. Conrad Cunningham, *CSci 311, Models of Computation*, Chapter 8.
   URL: `https://john.cs.olemiss.edu/~hcc/csci311/notes/chap08/ch08.html`
5. Computer Science Stack Exchange discussion naming the classical pumping-only
   counterexample witness.
   URL: `https://cs.stackexchange.com/questions/12041/example-of-a-non-context-free-language-that-nonetheless-can-be-pumped`
6. ROIFE BLOG, *[形式语言] 06 Context-free Language*.
   URL: `https://roife.github.io/posts/formal-languages-and-automata-06/`

How they are used:

- Gallier is the primary treatment for the tree-yield/depth seam and Ogden's
  lemma.
- Aho Lecture 10 independently backs the ordinary pumping lemma and provides
  the exact CYK table recurrence and membership algorithm.
- Aho Lecture 11 supplies reversal, nonclosure under intersection/complement,
  emptiness, and the standard undecidable CFG problem list.
- Cunningham Chapter 8 independently backs nonclosure under
  intersection/complement and, crucially, the emptiness and finiteness
  algorithms.
- The StackExchange item is now a directly read live carrier for the classical
  pairwise-distinct witness and for the Wise attribution that the ordinary
  pumping route does not settle that language.
- The ROIFE note gives a directly read Ogden-lemma proof for the same witness.
  I still do not treat either web exposition as a primary treatment; Gallier,
  Aho, and Cunningham remain the page's primary and textbook-style support.

## Duplicate-control and dependency notes

- I kept the design's exact item ids. None of the planned batch-10 ids collides
  with an existing canonical id or alias on disk.
- No forward reference is load-bearing in either pair.
- The regular-expressions page intentionally depends on already-published
  language-operation, DFA, and homomorphism items rather than reminting basic
  notation already established on earlier pages.
- The context-free page intentionally depends on the earlier
  CFG/parse-tree/CNF/PDA pages for definitions and normalization theorems rather
  than reminting them.

## Known limits and step-5 risks

- The exact witness for `cex-the-cfl-pumping-lemma-characterizes-cfls` is now
  backed by directly read live secondary sources rather than the earlier
  snippet-only archive pointer. Step 5 should still keep the Wise attribution
  explicit if it cites that witness as classical, because I still have not read
  Wise's full paper in this runner.
- Gallier's Penn notes were verified in a live Scribd-hosted full-text mirror,
  not on a Penn host. I used that mirror because it was the accessible
  full-text copy I could actually read in this dispatch.
- The heaviest step-5 proofs are `thm-dfa-to-regular-expression`,
  `thm-ogdens-lemma`, and `thm-cfg-emptiness-and-finiteness-are-decidable`.
  They should be written as decomposed proof blocks, not one long monolith.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-10.coverage.json`
  passed on Sunday, August 30, 2026: `2` page(s), `92` harvested result(s),
  `0` error(s), `0` warning(s).
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  passed on Sunday, August 30, 2026: `361` scoped item(s), `0` error(s),
  `0` warning(s).
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-10.coverage.json`
  passed on Sunday, August 30, 2026: `8/8` source(s) fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Sunday, August 30, 2026. As usual for the current repo, it
  emitted only the standing out-of-batch `redundant-prereq` advisories; there
  was no batch-10 cycle, B-page dependency, unresolved-id, or over-cap failure.

Historical shell-side URL-liveness blocker on the step-1 bytes:

- `node tools/url-sweep.mjs --coverage research/frontier-26-batch-10.coverage.json --out /tmp/frontier-26-batch-10-url-liveness.json --recover --fail-on-dead`
  exited `1` on Sunday, August 30, 2026 with `0/7` live and `7` failed. Every
  failure was shell-side DNS resolution (`curl: (6) Could not resolve host`) for
  the distinct recorded hosts:
  `www.scribd.com`, `cs.uwaterloo.ca`, `john.cs.olemiss.edu`,
  `www.cs.columbia.edu`, and `cs.stackexchange.com`.
  The receipt was still written to
  `/tmp/frontier-26-batch-10-url-liveness.json`.

What this does and does not mean:

- It does not mean the scaffolded mathematics is unbacked. I read the cited
  sources through the web-research channel at the exact locators recorded in
  `research/frontier-26-batch-10.coverage.json`.
- It did mean that, on the Sunday, August 30, 2026 step-1 bytes, a fresh
  shell-side liveness receipt was runner-blocked. The Monday, August 31, 2026
  Step-3 fix pass below records the direct web-reader re-verification that
  closes the batch-local source gap for the TC-8 counterexample witness.

## Step-3 fix pass

Date: Monday, August 31, 2026.

- Stable review file checked:
  `research/frontier-26-alpha-d-step3-scaffold-review.md`.

- `D10-1` — applied.
  Evidence reread in this pass:
  the controlling TC-8 design block at
  `research/plan-computability-theory-track.md:432-458`; the unchanged witness

  route in `research/frontier-26-batch-10.pages.json`; the live CS StackExchange
  page `https://cs.stackexchange.com/questions/12041/example-of-a-non-context-free-language-that-nonetheless-can-be-pumped`
  at the question statement and accepted-answer lines naming
  `L = {a^i b^j c^k : i,j,k are pairwise distinct}` and the Wise attribution;
  and the live ROIFE page
  `https://roife.github.io/posts/formal-languages-and-automata-06/` at sections
  `Ogden 引理` and `应用`, especially `判定 CFL`, for a directly read Ogden-lemma
  proof of the same language.
  Disposition:
  kept the designed pairwise-distinct witness and repaired the source gap
  rather than rerouting the false-statement/counterexample pair.
  Changed scaffold record:
  `research/frontier-26-batch-10.pages.json` unchanged;
  `research/frontier-26-batch-10.coverage.json` now replaces the snippet-only
  archived StackExchange row with the live original URL verified via
  `web-open`, and adds a second directly read live carrier from the ROIFE note;
  `research/frontier-26-batch-10.notes.md` now records the repaired TC-8 source
  stack, the downgraded non-blocking limit, and this receipt.

- Validator results on current bytes:
  `node tools/coverage-checklist.mjs research/frontier-26-batch-10.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 98 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  -> `content-policy: 441 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-10.coverage.json`
  -> `source-fetch-check: 9/9 source(s) fetch-verified`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the standing repo-wide `redundant-prereq` advisories.
  `git diff --check -- research/frontier-26-batch-10.pages.json research/frontier-26-batch-10.coverage.json research/frontier-26-batch-10.notes.md`
  -> clean.
  `node tools/prosecheck.mjs research/frontier-26-batch-10.notes.md --warnings`
  -> `0` error(s), `2` warning(s) (`count-in-prose`).

## Step-5 authoring

Authoring completed on Sunday, August 30, 2026.

Authored pages:

- `library/computability-theory/regular-expressions-and-kleenes-theorem.md`
- `library/computability-theory/regular-expressions-and-kleenes-theorem-examples.md`
- `library/computability-theory/context-free-pumping-ogden-and-parsing.md`
- `library/computability-theory/context-free-pumping-ogden-and-parsing-examples.md`

Authored A-page items:

- `regular-expressions-and-kleenes-theorem`: `def-regular-expression-syntax`, `def-regular-expression-denotation`, `lem-denotation-is-structurally-well-defined`, `thm-regular-expression-to-epsilon-nfa`, `def-generalized-nfa`, `def-gnfa-state-elimination`, `lem-state-elimination-preserves-path-language`, `thm-dfa-to-regular-expression`, `thm-kleenes-theorem`, `thm-closure-under-homomorphic-image`, `thm-closure-under-inverse-homomorphism`, `thm-closure-under-left-and-right-quotient`, `def-regular-language-decision-problems`, `thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable`, `fs-regular-expression-syntax-is-its-denoted-language`, `fs-state-elimination-has-a-unique-output-expression`
- `context-free-pumping-ogden-and-parsing`: `lem-height-and-yield-bound-for-cnf-trees`, `thm-pumping-lemma-for-context-free-languages`, `def-marked-position-decomposition`, `thm-ogdens-lemma`, `thm-cfls-are-not-closed-under-intersection`, `cor-cfls-are-not-closed-under-complement`, `thm-cfls-are-closed-under-reversal`, `def-cyk-table-and-span-variable`, `lem-cyk-table-invariant`, `thm-cyk-membership-algorithm`, `cor-cfl-membership-is-decidable`, `thm-cfg-emptiness-and-finiteness-are-decidable`, `def-cfg-equivalence-and-ambiguity-problems`, `fs-the-cfl-pumping-lemma-characterizes-cfls`, `fs-cyk-needs-no-normal-form-preprocessing`, `fs-cfg-equivalence-is-decidable-by-normalization`

Authored B-page items:

- `regular-expressions-and-kleenes-theorem-examples`: `ex-regular-expression-to-epsilon-nfa`, `ex-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable`, `cex-regular-expression-syntax-is-its-denoted-language`
- `context-free-pumping-ogden-and-parsing-examples`: `ex-pumping-lemma-for-context-free-languages`, `ex-cfg-emptiness-and-finiteness-are-decidable`, `cex-the-cfl-pumping-lemma-characterizes-cfls`

Proof-contract artifact written:

- `research/frontier-26-batch-10.proof-contracts.json` with `30` proof-bearing entries, regenerated from the authored Facts blocks and numbered proof steps on current disk.

Provenance rationale:

- The definition, theorem, lemma, corollary, and false-statement claims on the two A pages remain `literature-derived`; the local work in this pass is the written proof text, recorded as `ai-generated`.
- The six B-page example and counterexample statements are `ai-generated` with truthful `generation.role` markers (`example` or `counterexample`), and none of them is used as a dependency target.
- No authored batch-10 item is recorded-not-proved. No `forward_refs`, `external_dependency`, or `verification.judge` block was added to the new in-flight files. Every authored page and item remains `status: draft`.

Narrowed or dropped claims:

- No batch-10 item id was dropped, renamed, or rehomed.
- No scaffold statement was narrowed during this pass. The TC-8 pumping-lemma counterexample route stayed on the pairwise-distinct language already repaired into the batch-10 coverage ledger at Step 3.

Validator receipts on Sunday, August 30, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts <38 batch items>` -> `30 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-26-batch-10.pages.json` -> `content-policy: 38 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> exit `0`, trailing `OK`, with only the repository's standing unrelated `redundant-prereq` advisories
- `node tools/proof-contract.mjs research/frontier-26-batch-10.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 30/30 item(s) checked`
- `node tools/rendercheck.mjs <4 batch pages + 38 batch items>` -> `OK — 42 file(s)`
- `git diff --check -- library/computability-theory items research/frontier-26-batch-10.proof-contracts.json research/frontier-26-batch-10.notes.md` -> clean

Blockers:

- No Step-5 blocker remains on current batch-10 bytes.
