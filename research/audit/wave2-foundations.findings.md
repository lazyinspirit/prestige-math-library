# Wave 2 `foundations` — Audit-Beta A1/A2 findings

## Continuity checkpoint — A2 source-verification stage

- **Substage:** A1/A2 joint read complete; external source verification and artifact assembly in progress.
- **Artifacts at checkpoint:** this findings file initialized; provenance and proof-contract files not yet written.
- **Completed checks:** read all 43 in-scope items, all 31 proof-bearing items step by step, all 67 distinct declared dependency targets, and all nine dependency-edge occurrences into `deferred-set-theory-beyond-choice`; confirmed that `ordinals-and-transfinite-recursion` has no companion B page.
- **Preliminary result:** no mathematical falsehood found; one citation-precision defect isolated in `thm-well-ordering-implies-ac`; both A-page summaries require contract-level restatement; the deferred-target citations are accurate and must remain as published.
- **Exact next action:** verify every URL selected for the provenance ledger returns HTTP 200, then generate the 43 ledger rows and 31 full proof contracts before running the repository gates.


## A1/A2 result

The in-scope inventory is complete: 43 mathematical-content items, comprising
12 A-page and 8 B-page items for `filters-and-ultrafilters`, plus 23 A-page
items for `ordinals-and-transfinite-recursion`. The ordinal page genuinely has
no B companion; none is proposed.

No class **(a) falsehood** was found. The mathematical conclusions and all
numbered proof steps are correct under their displayed hypotheses. Five
non-provenance repairs are proposed below: three class **(b)
citation-precision** repairs and two class **(d) restatement** groups. All 43
items also need the class **(c) provenance retag** recorded item by item below.

The proof-contract artifact covers 31 proof-bearing items, 239 numbered steps,
and 151 direct Facts-and-Assumptions citation pairs. It records all eight
boundary cases for every proof-bearing item. The manifest contains 208 declared
dependency-edge occurrences to 67 distinct targets; all were read against the
target item, not inferred from titles.

## Proposal register for A3

### B1 — separate the well-ordering hypothesis from its definition

- **Class:** (b) citation-precision.
- **Item:** `thm-well-ordering-implies-ac`, Fact `[A1]`.
- **Published text:** “Every set carries a well-order
  ([[def-well-order]]).”
- **Defect:** `def-well-order` defines what a well-order is; it does not assert
  that every set has one. The assertion is the theorem's Given hypothesis.
  Step 2.1 uses both the hypothesis and the definition, so the mathematics is
  sound but the citation over-attributes the existence assertion to the
  definition.
- **Proposed repair:** restate `[A1]` as an assumption supplied by the Given,
  then attach `[[def-well-order]]` only to the meaning/least-element
  consequences of “well-order.”
- **Evidence:** the target's Definition begins “Let $W$ be a set. A
  well-order on $W$ is ...”; the existence of such an order on every set is
  instead the hypothesis in this item's Given and Statement.

### B2 — remove the unused filter-definition fact

- **Class:** (b) citation-precision.
- **Item:** `ex-frechet-filter`, Fact `[F1]`.
- **Defect:** no numbered Verification step cites `[F1]`. Step 2.2 obtains
  filterhood from `[L1]`, and the remaining steps use the base, natural-number,
  and ultrafilter facts.
- **Proposed repair:** delete the unused `[F1]` row (or, if Alpha prefers to
  retain it, make an actual proof step cite and use it).
- **Evidence:** the full step-token audit returns an empty use set for
  `F1 -> def-filter`; this is one of exactly two residual
  `citation-uses` errors from the strict proof-contract checker.

### B3 — remove the unused least-element fact

- **Class:** (b) citation-precision.
- **Item:** `lem-well-order-comparability`, Fact `[L1]`.
- **Defect:** no numbered Proof step cites `[L1]`. The proof uses Separation,
  initial segments, order isomorphisms, and rigidity; it never selects a least
  element from a subset.
- **Proposed repair:** delete the unused `[L1]` row.
- **Evidence:** the full step-token audit returns an empty use set for
  `L1 -> def-well-order`; this is the other residual
  `citation-uses` error from the strict proof-contract checker.

### D1 — replace both legacy A-page summaries

- **Class:** (d) debatable restatement / page-contract conformance.
- **Pages:** `filters-and-ultrafilters` and
  `ordinals-and-transfinite-recursion`.
- **Defect:** the current summaries have respectively 4 nonempty paragraphs /
  about 517 words and 6 nonempty paragraphs / about 538 words. The current page
  contract requires exactly two nonempty prose paragraphs and fewer than 150
  words, while avoiding objective language, self-ranking, process narration,
  and item-count/survey prose. Both published summaries contain several of
  those legacy forms.
- **Proposed repair:** at A4, replace each A-page summary with two factual prose
  paragraphs under 150 words, preserving only the page's mathematical scope and
  principal results. Do not create an ordinal B page.

### D2 — correct the relative-strength heading in the choice ledger

- **Class:** (d) debatable restatement.
- **Item:** `rem-choice-ledger`.
- **Published heading:** “A third principle, weaker still,” introducing
  dependent choice immediately after the countable-choice bullet.
- **Defect:** read locally, “weaker still” suggests that DC is weaker than
  $\mathrm{AC}_\omega$, while the same item correctly states
  $\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$ and that the converse fails.
- **Proposed repair:** change the heading to “A third principle below full AC”
  (or another non-linear wording). The following mathematical text needs no
  change.
- **Evidence:** the item's own lines on DC state that DC implies countable
  choice; its explicit warning also says the three weak principles are not
  ranked on one line.

## Class (c) provenance-retag proposals

Every item is currently untagged legacy content. The following is one proposal
per item; the row's rationale, source evidence, and verified URLs are in
`wave2-foundations.provenance.jsonl`. No statement was assigned
`ai-generated`: all 43 statements are recoverable established mathematics.
The six `ai-generated` proof determinations are positive determinations that
the exact local pedagogical verification/refutation is newly written, not
fallbacks from failed source search.

| Item | Statement | Proof | Evidence |
|---|---|---|---|
| `def-filter` | `literature-derived` | `not-applicable` | `exact-source` |
| `def-filter-base` | `ai-altered` | `not-applicable` | `semantic-source` |
| `lem-filter-base-generates` | `ai-altered` | `ai-altered` | `semantic-source` |
| `def-finite-intersection-property` | `ai-altered` | `not-applicable` | `semantic-source` |
| `lem-fip-generates-filter` | `ai-altered` | `ai-altered` | `semantic-source` |
| `def-ultrafilter` | `literature-derived` | `not-applicable` | `exact-source` |
| `lem-union-of-chain-of-filters` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-ultrafilter-lemma` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-ultrafilter-characterisation` | `literature-derived` | `ai-altered` | `exact-source` |
| `lem-ultrafilter-prime` | `ai-altered` | `ai-altered` | `semantic-source` |
| `rem-choice-strengths` | `ai-altered` | `not-applicable` | `semantic-source` |
| `fs-every-ultrafilter-principal` | `ai-altered` | `ai-generated` | `semantic-source` |
| `ex-principal-filter-generated-by-a-set` | `ai-altered` | `ai-altered` | `semantic-source` |
| `ex-principal-ultrafilter` | `literature-derived` | `ai-altered` | `exact-source` |
| `ex-frechet-filter` | `ai-altered` | `ai-altered` | `semantic-source` |
| `ex-free-ultrafilter-on-naturals` | `ai-altered` | `ai-altered` | `semantic-source` |
| `ex-ultrafilter-selects-a-cell-of-a-finite-partition` | `ai-altered` | `ai-altered` | `semantic-source` |
| `cex-union-of-filters-not-filter` | `ai-altered` | `ai-generated` | `semantic-source` |
| `cex-intersection-of-ultrafilters-not-ultrafilter` | `ai-altered` | `ai-generated` | `semantic-source` |
| `cex-improper-filter` | `ai-altered` | `ai-generated` | `semantic-source` |
| `def-well-order` | `literature-derived` | `not-applicable` | `exact-source` |
| `def-order-isomorphism` | `literature-derived` | `not-applicable` | `exact-source` |
| `def-initial-segment` | `ai-altered` | `not-applicable` | `semantic-source` |
| `thm-transfinite-induction` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-transfinite-recursion` | `ai-altered` | `ai-altered` | `semantic-source` |
| `lem-well-order-rigid` | `ai-altered` | `ai-altered` | `semantic-source` |
| `lem-well-order-comparability` | `literature-derived` | `ai-altered` | `exact-source` |
| `def-ordinal` | `literature-derived` | `not-applicable` | `exact-source` |
| `lem-ordinal-basics` | `ai-altered` | `ai-altered` | `semantic-source` |
| `lem-ordinal-trichotomy` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-burali-forti` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-mostowski-collapse` | `ai-altered` | `ai-altered` | `semantic-source` |
| `def-limit-ordinal` | `literature-derived` | `not-applicable` | `exact-source` |
| `lem-omega-least-limit-ordinal` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-hartogs` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-well-ordering-theorem` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-well-ordering-implies-ac` | `literature-derived` | `ai-altered` | `exact-source` |
| `cor-ac-iff-well-ordering` | `literature-derived` | `ai-altered` | `exact-source` |
| `def-cardinal` | `ai-altered` | `not-applicable` | `semantic-source` |
| `rem-choice-ledger` | `ai-altered` | `not-applicable` | `semantic-source` |
| `fs-ordinals-form-a-set` | `ai-altered` | `ai-altered` | `semantic-source` |
| `fs-every-set-well-orderable-in-zf` | `ai-altered` | `ai-generated` | `semantic-source` |
| `fs-transfinite-induction-needs-choice` | `ai-altered` | `ai-generated` | `semantic-source` |

Census: 17 `literature-derived` and 26 `ai-altered` statements; 25
`ai-altered`, 6 `ai-generated`, and 12 `not-applicable` proof
determinations. Every row has `alpha_concurred: false`; none uses
`established-knowledge`, so no row relies on unrecorded Alpha concurrence.

## Deferred-catalogue dependency audit

All nine fuchsia double-dagger edge occurrences into the permanently excluded
`deferred-set-theory-beyond-choice` catalogue were read and found accurate:

- `rem-choice-strengths -> rem-feferman-no-free-ultrafilter-in-zf`
- `rem-choice-strengths -> rem-halpern-levy-bpi-not-ac`
- `rem-choice-ledger -> rem-godel-constructible-universe`
- `rem-choice-ledger -> rem-cohen-forcing-ac-independent`
- `rem-choice-ledger -> rem-schechter-kelley-tychonoff`
- `rem-choice-ledger -> rem-feferman-no-free-ultrafilter-in-zf`
- `rem-choice-ledger -> rem-halpern-levy-bpi-not-ac`
- `rem-choice-ledger -> rem-cohen-first-model`
- `fs-every-set-well-orderable-in-zf ->
  rem-cohen-forcing-ac-independent`

They correctly support the cited relative-consistency, strict-weakness,
Tychonoff/Kelley, no-free-ultrafilter, constructibility, and Cohen-model claims.
No retag or content change to any excluded target is proposed.

## Source and URL verification

The ledger uses 14 distinct URLs. Each was opened successfully during A2 and
returned HTTP 200: the KSU and METU ultrafilter notes; Berkeley and both Cornell
set-theory notes; the Archive of Formal Proofs Mostowski entry; the Open Logic
Project well-ordering note; the Stanford Encyclopedia choice entry; the arXiv
formalization; and the five relevant Wikipedia reference pages. Failed or
internally unavailable candidates were excluded rather than recorded.

## Proof-contract status

The strict proof-contract checker reads all 31 contracts and reports exactly two
errors, both intentional evidence of proposals B2 and B3:

- `ex-frechet-filter: F1 -> def-filter` has no citing proof step.
- `lem-well-order-comparability: L1 -> def-well-order` has no citing proof
  step.

All 239 numbered steps are mapped exactly once; every other direct citation has
an exact source-section quote and a complete use list; all boundary worksheets
are present. The two errors cannot be cleared honestly without the A4 item
repairs that this stage forbids.

## Coverage statement

Every one of the 43 in-scope items was read in full. Every numbered proof,
verification, refutation, and counterexample step (239 total) was read. Every
direct Facts-and-Assumptions citation pair (151 total), every declared dependency
edge occurrence (208 total, 67 distinct targets), and all nine deferred-catalogue
edge occurrences were read against the cited target. There is no reading
exception. The absent ordinal examples page is a confirmed corpus fact, not an
exception and not a proposed file.

## A4 applied repairs — 2026-08-03

### Class (c): 43 provenance retags

For every row below, the **old text** was the absence of both a component `provenance` block and a legacy `authorship` field. The **new text** is the exact statement/proof pair shown. The class is (c) provenance retag. All ledger source URLs are reproduced here; 46 of these item-to-URL assignments were newly added to reader-visible `sources.references`, while already-present exact URLs were retained. Because the other 39 changes were pure frontmatter retags, their existing `verification.judge` and audit/verification evidence was preserved byte-for-byte.

| Item | New `statement / proof` | Evidence | Source URL(s) |
|---|---|---|---|
| `def-filter` | `literature-derived / not-applicable` | `exact-source` | <https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf> |
| `def-filter-base` | `ai-altered / not-applicable` | `semantic-source` | <https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf> |
| `lem-filter-base-generates` | `ai-altered / ai-altered` | `semantic-source` | <https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf><br><https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf> |
| `def-finite-intersection-property` | `ai-altered / not-applicable` | `semantic-source` | <https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf> |
| `lem-fip-generates-filter` | `ai-altered / ai-altered` | `semantic-source` | <https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf><br><https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf> |
| `def-ultrafilter` | `literature-derived / not-applicable` | `exact-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `lem-union-of-chain-of-filters` | `ai-altered / ai-altered` | `semantic-source` | <https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf> |
| `thm-ultrafilter-lemma` | `literature-derived / ai-altered` | `exact-source` | <https://en.wikipedia.org/wiki/Ultrafilter><br><https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf> |
| `thm-ultrafilter-characterisation` | `literature-derived / ai-altered` | `exact-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `lem-ultrafilter-prime` | `ai-altered / ai-altered` | `semantic-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `rem-choice-strengths` | `ai-altered / not-applicable` | `semantic-source` | <https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem><br><https://en.wikipedia.org/wiki/Ultrafilter><br><https://plato.stanford.edu/entries/axiom-choice/> |
| `fs-every-ultrafilter-principal` | `ai-altered / ai-generated` | `semantic-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `ex-principal-filter-generated-by-a-set` | `ai-altered / ai-altered` | `semantic-source` | <https://en.wikipedia.org/wiki/Ultrafilter><br><https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf> |
| `ex-principal-ultrafilter` | `literature-derived / ai-altered` | `exact-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `ex-frechet-filter` | `ai-altered / ai-altered` | `semantic-source` | <https://en.wikipedia.org/wiki/Ultrafilter><br><https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf> |
| `ex-free-ultrafilter-on-naturals` | `ai-altered / ai-altered` | `semantic-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `ex-ultrafilter-selects-a-cell-of-a-finite-partition` | `ai-altered / ai-altered` | `semantic-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `cex-union-of-filters-not-filter` | `ai-altered / ai-generated` | `semantic-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `cex-intersection-of-ultrafilters-not-ultrafilter` | `ai-altered / ai-generated` | `semantic-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `cex-improper-filter` | `ai-altered / ai-generated` | `semantic-source` | <https://en.wikipedia.org/wiki/Ultrafilter> |
| `def-well-order` | `literature-derived / not-applicable` | `exact-source` | <https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `def-order-isomorphism` | `literature-derived / not-applicable` | `exact-source` | <https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `def-initial-segment` | `ai-altered / not-applicable` | `semantic-source` | <https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf><br><https://arxiv.org/abs/1906.03930> |
| `thm-transfinite-induction` | `literature-derived / ai-altered` | `exact-source` | <https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf><br><https://en.wikipedia.org/wiki/Transfinite_induction> |
| `thm-transfinite-recursion` | `ai-altered / ai-altered` | `semantic-source` | <https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf><br><https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf> |
| `lem-well-order-rigid` | `ai-altered / ai-altered` | `semantic-source` | <https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `lem-well-order-comparability` | `literature-derived / ai-altered` | `exact-source` | <https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `def-ordinal` | `literature-derived / not-applicable` | `exact-source` | <https://en.wikipedia.org/wiki/Ordinal_number><br><https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `lem-ordinal-basics` | `ai-altered / ai-altered` | `semantic-source` | <https://en.wikipedia.org/wiki/Ordinal_number><br><https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `lem-ordinal-trichotomy` | `literature-derived / ai-altered` | `exact-source` | <https://en.wikipedia.org/wiki/Ordinal_number><br><https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `thm-burali-forti` | `literature-derived / ai-altered` | `exact-source` | <https://en.wikipedia.org/wiki/Ordinal_number><br><https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `thm-mostowski-collapse` | `ai-altered / ai-altered` | `semantic-source` | <https://isa-afp.org/entries/Mostowski_Collapse.html><br><https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `def-limit-ordinal` | `literature-derived / not-applicable` | `exact-source` | <https://en.wikipedia.org/wiki/Ordinal_number> |
| `lem-omega-least-limit-ordinal` | `ai-altered / ai-altered` | `semantic-source` | <https://en.wikipedia.org/wiki/Ordinal_number><br><https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `thm-hartogs` | `literature-derived / ai-altered` | `exact-source` | <https://en.wikipedia.org/wiki/Hartogs_number><br><https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf> |
| `thm-well-ordering-theorem` | `literature-derived / ai-altered` | `exact-source` | <https://builds.openlogicproject.org/content/set-theory/choice/wellorderingproblem.pdf><br><https://arxiv.org/abs/1906.03930> |
| `thm-well-ordering-implies-ac` | `literature-derived / ai-altered` | `exact-source` | <https://builds.openlogicproject.org/content/set-theory/choice/wellorderingproblem.pdf><br><https://arxiv.org/abs/1906.03930> |
| `cor-ac-iff-well-ordering` | `literature-derived / ai-altered` | `exact-source` | <https://builds.openlogicproject.org/content/set-theory/choice/wellorderingproblem.pdf><br><https://plato.stanford.edu/entries/axiom-choice/> |
| `def-cardinal` | `ai-altered / not-applicable` | `semantic-source` | <https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes.pdf><br><https://en.wikipedia.org/wiki/Ordinal_number> |
| `rem-choice-ledger` | `ai-altered / not-applicable` | `semantic-source` | <https://plato.stanford.edu/entries/axiom-choice/><br><https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem><br><https://en.wikipedia.org/wiki/Ultrafilter> |
| `fs-ordinals-form-a-set` | `ai-altered / ai-altered` | `semantic-source` | <https://en.wikipedia.org/wiki/Ordinal_number><br><https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf> |
| `fs-every-set-well-orderable-in-zf` | `ai-altered / ai-generated` | `semantic-source` | <https://plato.stanford.edu/entries/axiom-choice/><br><https://builds.openlogicproject.org/content/set-theory/choice/wellorderingproblem.pdf> |
| `fs-transfinite-induction-needs-choice` | `ai-altered / ai-generated` | `semantic-source` | <https://en.wikipedia.org/wiki/Transfinite_induction><br><https://plato.stanford.edu/entries/axiom-choice/> |

### Material item repairs

#### B1 — `thm-well-ordering-implies-ac`

- **Class:** (b) citation precision.
- **Old text:** `[A1] Every set carries a well-order ([[def-well-order]]).`
- **New text:** `[A1] By the Given, every set carries a well-order.`
- **Elementary derivation:** the displayed Given assumes that every set carries a well-order. The Definition in `def-well-order` supplies only the meaning of a well-order and the least-element consequence, already cited precisely in `[L3]`; it does not supply existence. The stale `A1 -> def-well-order` contract citation was removed while step 2.1 continues to cite `[A1]` as a Given input.
- **Verification invalidation:** removed the prior `verification.judge` and `verification.verified` blocks; wrote no replacement certification.

#### B2 — `ex-frechet-filter`

- **Class:** (b) citation precision / unused Fact removal.
- **Old text:** `[F1] A filter on $X$ contains $X$, omits $\emptyset$, is closed under pairwise intersection, and is closed upward in $X$ ([[def-filter]]).`
- **New text:** the `[F1]` row is absent; `[F2]` is now the first displayed Fact after the Given.
- **Elementary derivation:** no numbered Verification step cites `[F1]`; filterhood is obtained at step 2.2 from `[F2]` and `[L1]`. The unused `F1 -> def-filter` contract entry was removed.
- **Verification invalidation:** removed the obsolete `verification.audited` stamp; wrote no `verification.verified`.

#### B3 — `lem-well-order-comparability`

- **Class:** (b) citation precision / unused Fact removal.
- **Old text:** `[L1] Every nonempty subset of a well-order has a least element and the order is total ([[def-well-order]]).`
- **New text:** the `[L1]` row is absent; `[L2]` is now the first lemma Fact after `[A1]`.
- **Elementary derivation:** no numbered Proof step cites `[L1]`; the proof uses Separation, initial segments, order isomorphisms, and rigidity. The unused `L1 -> def-well-order` contract entry was removed.
- **Verification invalidation:** removed the prior `verification.judge` and `verification.verified` blocks; wrote no replacement certification.

#### D2 — `rem-choice-ledger`

- **Class:** (d) relative-strength wording.
- **Old text:** `A third principle, weaker still.`
- **New text:** `A third principle below full AC.`
- **Elementary derivation:** the surrounding text states `DC => AC_omega` and that the converse fails. Thus DC is below full AC but is not weaker than countable choice; the new heading records exactly the relation used without imposing a false linear ranking.
- **Verification invalidation:** removed the prior `verification.verified` block; wrote no replacement certification.

### Page-summary repairs

#### D1 — filters-and-ultrafilters

- **Class:** (d) page-summary contract repair.
- **Old text:**

```markdown
**Objective.** This page builds filters and ultrafilters from nothing but sets,
and proves the **ultrafilter lemma**: every filter on a set is contained in an
ultrafilter. It is the second foundations page that Zorn's lemma was developed
for, and the existence statement it reaches is genuinely non-constructive: the
ultrafilter it produces is named and never described.

A **filter** on $X$ collects the subsets of $X$ that count as large: the whole
space is large, the empty set is not, two large sets meet largely, and anything
containing a large set is large. Properness, that $\emptyset$ is never a member,
is part of the definition here, and the competing convention that admits the
improper filter $\mathcal{P}(X)$ is recorded where the definition is given rather
than left to be discovered. Two presentations follow immediately. A **filter
base** is a nonempty, downward directed family of nonempty sets, and those three
conditions are the whole of the definition; its upward closure is then a filter,
which is a lemma and not part of the definition, and that closure is how filters
are actually written down. A family has the **finite intersection property**
exactly when it sits inside some filter, which is how filters are actually
produced.

The main object is the **ultrafilter**: a filter that is maximal for inclusion.
Maximal, not greatest. On any set with two points there is no greatest filter, so
maximality cannot be read as greatestness, and doing so is the standard way to
misuse everything on this page. Distinct ultrafilters are never comparable, which
follows from maximality itself; how many of them there are is a separate question
that the absence of a greatest filter does not answer, and that this library does
not answer either, since the ultrafilter lemma below delivers existence and never
a count. Two results carry the subject.
The **ultrafilter lemma** applies Zorn's lemma to the filters
above a given one; the chain condition needs the union of a nonempty chain of
filters to be a filter, which is proved separately, and it needs the empty chain
to be bounded as well, which is why the poset has to be nonempty and why that case
is discharged explicitly by the given filter itself. The **characterisation**
then replaces maximality, a statement about the whole poset, by a statement about
$\mathcal{U}$ alone: an ultrafilter contains exactly one of $A$ and
$X \setminus A$ for every $A \subseteq X$. Everything usable about ultrafilters
follows from that form, starting with primeness: a finite union in $\mathcal{U}$
always has a member in $\mathcal{U}$.

The page closes on cost and on honesty. The ultrafilter lemma is a genuine choice
principle and, if ZF is consistent, strictly weaker than the Axiom of Choice; the
remark that records this separates the one implication proved here from the
independence results that are cited and not derived. The false statement is the
trap that follows from knowing only the examples one can write down: every
ultrafilter is principal. It is false, the witness is an ultrafilter extending the
filter of tails of $\mathbb{N}$, and the refutation is unusual in consuming the
ultrafilter lemma itself, since, if ZF is consistent, the false statement is
consistent with ZF alone.
```

- **New text:**

```markdown
Filters formalize families of subsets that are closed under finite intersection
and enlargement. The development uses partial orders, chains, upper bounds, and
maximal elements in its application of Zorn's lemma. Natural-number order and
induction support the tail-filter construction, while the Axiom of Choice and
its known equivalents provide the background for comparing the strength of the
ultrafilter lemma.

The definitions of filters, filter bases, the finite intersection property, and
ultrafilters lead first to the generated-filter lemmas. The union-of-a-chain
lemma then supplies the upper bounds needed for the ultrafilter lemma. Maximality
is converted into the complement-decision characterization, from which finite
primality follows. The final results distinguish principal from free
ultrafilters and record precisely which implications use full choice and which
belong to weaker choice principles.
```

- **Elementary validation:** the replacement has exactly two prose paragraphs with word counts 58 and 66; paragraph 1 names the mathematical background and used dependencies, and paragraph 2 gives the definitions/results and their logical progression. It contains no count, self-ranking, reading-position, or other-page survey claim.

#### D1 — ordinals-and-transfinite-recursion

- **Class:** (d) page-summary contract repair.
- **Old text:**

```markdown
**Objective.** Ordinals arrive here and nowhere earlier. This page builds the
theory of well-orders from scratch, introduces the von Neumann ordinals, proves
the two theorems that make transfinite arguments legitimate, and settles the
exact price in choice of everything it proves.

The order of business is deliberate. **Transfinite induction** and **transfinite
recursion** come first, before ordinals exist, because they are statements about
an arbitrary well-order and need nothing else. Induction is three lines from the
least element property. Recursion is the substantial theorem: it produces a
unique function whose value at each point is prescribed in terms of all its
earlier values, and it does so from Separation, Union and **Replacement**.
Replacement is the whole cost, and no form of the Axiom of Choice appears
anywhere in it. That is worth saying loudly, because the belief that transfinite
methods are inherently choice-laden is the single most common error in this
area, and it is refuted explicitly on this page.

The structural fact that makes everything work is **rigidity**: a strictly
increasing map of a well-order into itself never moves a point down, so a
well-order has no nontrivial symmetry and there is at most one isomorphism
between any two well-orders. Uniqueness of witnesses is what keeps choice out.
It gives **comparability** of well-orders, and then, once ordinals are defined,
it gives each well-order a unique **order type**. Comparability of arbitrary
sets is equivalent to the Axiom of Choice; comparability of well-orders is free,
and the difference is exactly rigidity.

An **ordinal** is a transitive set strictly well ordered by membership, so each
ordinal is literally the set of all smaller ordinals and the order relation is
$\in$. The basic closure properties, trichotomy, and the identification of the
natural numbers as the ordinals below $\omega$ follow. Two boundary results
mark the edges: **Burali-Forti**, that the ordinals are not a set, and
**Hartogs**, that every set $A$ admits a least ordinal $\aleph(A)$ that does not
inject into it. Hartogs is choice-free, and that is its entire point: it is what
survives in ZF when cardinal comparability does not.

Only at the end does choice enter. The **well-ordering theorem** is proved from
Zorn's lemma by ordering the well-ordered subsets of $X$ by end extension, and
the converse is a single line: well order the union of a family and take least
elements. Together with the previous page this closes the circle, so the Axiom
of Choice, Zorn's lemma and the well-ordering theorem stand as equivalent over
ZF. The Axiom of Choice is spent exactly once in the whole development, at one
step inside Zorn's lemma, and every result on this page states whether it
inherits that cost.

Three false statements guard the standard errors. The ordinals do not form a
set, however locally set sized they look. Transfinite induction and recursion do
not need choice; the choosing that often accompanies them does. And the
well-ordering theorem is not a theorem of ZF, a claim kept strictly conditional
on the consistency of ZF, since what is available here is Cohen's result cited
rather than derived. The final remark is the ledger: what is equivalent to the
Axiom of Choice, what is strictly weaker, what is free, and where in this
library the axiom has actually been spent.
```

- **New text:**

```markdown
Well-orders extend ordinary induction by giving every nonempty subset a least
element. The development uses partial orders, chains, natural-number induction
and well-ordering, the pigeonhole principle, and the set-theoretic axioms of
Separation, Union, Replacement, and Foundation. Zorn's lemma, choice functions,
and the Axiom of Choice enter only in the results comparing choice with the
existence of well-orders on arbitrary sets.

Well-orders, order isomorphisms, and initial segments support transfinite
induction and recursion, followed by rigidity and comparability. Von Neumann
ordinals are then developed through their basic closure and trichotomy laws,
Burali--Forti, Mostowski collapse, limit ordinals, and the characterization of
$\omega$ as the least limit ordinal. Hartogs' theorem supplies a choice-free
bound, after which the well-ordering theorem and its converse establish the
equivalence with the Axiom of Choice. Cardinals and the final choice ledger
organize these consequences and their precise foundational assumptions.
```

- **Elementary validation:** the replacement has exactly two prose paragraphs with word counts 59 and 80; paragraph 1 names the mathematical background and used dependencies, and paragraph 2 gives the definitions/results and their logical progression. It contains no count, self-ranking, reading-position, or other-page survey claim.

### Contract regeneration

The affected citation arrays were regenerated after the item edits: `A1 -> def-well-order` was removed from `thm-well-ordering-implies-ac`, `F1 -> def-filter` from `ex-frechet-filter`, and `L1 -> def-well-order` from `lem-well-order-comparability`. Derivation maps and all step inputs were retained because the numbered proofs did not change.

### A4 gates and results

- Dedicated touch snapshots: all 43 required `pre-<id>` labels are present in `research/audit/wave2-touches.json`.
- `reflow.mts`: 31 proof-bearing foundations items checked; all reported `unchanged`.
- `precheck.mts`: 31/31 passed; 0 failing; no REPAIR output.
- `proof-contract.mjs --strict`: 31/31 checked; 0 errors, 0 warnings. This confirms B2 and B3 cleared both residual `citation-uses` failures.
- `content-policy.mjs --audit`: 43 scoped items; 0 errors, 0 warnings.
- `citecheck.mjs`: four materially edited items scanned; 0 warnings.
- `rendercheck.mjs`: all 43 items plus both A pages (45 files); clean.
- `prosecheck.mjs`: both replacement summaries separately passed with 0 errors and 0 warnings. The broader six-file material set had 0 errors and seven unchanged heuristic warnings in legacy item prose (four count-of-this-page, two library-scope-denial, one count-in-prose); none points to either new summary or the D2 heading.
- `fwdcheck.mjs`: exit 0; 0 open forward references, 341 closed, 25 load-bearing; all declarations and ordering constraints valid.
- `extcheck.mjs`: exit 0; no hard errors; 83 standing `unproved-on-published` warnings, including the already-recorded deferred-catalogue dependencies of this batch.
- `depsource.mjs`: exit 0; 16,177 dependencies resolved to published pages and 0 unresolved.
- `depcheck.mjs`: exit 1 only for ten `published-unaudited` items awaiting A6 after concurrent material A4 repairs. Exactly four belong to this batch: `thm-well-ordering-implies-ac`, `ex-frechet-filter`, `lem-well-order-comparability`, and `rem-choice-ledger`. No other depcheck error class appeared.
- `git diff --check`: exit 0 on the 43 items, two pages, and the three namespaced foundations artifacts. JSON and JSONL parse checks also passed.

### A4 coverage statement

The changed mathematical-content items are exactly the 43 ids named in the provenance table above. Of them, 39 are pure retags and four are material repairs: `thm-well-ordering-implies-ac`, `ex-frechet-filter`, `lem-well-order-comparability`, and `rem-choice-ledger`. The changed page files are `library/foundations/filters-and-ultrafilters.md` and `library/foundations/ordinals-and-transfinite-recursion.md`. The namespaced repair records changed are this findings file and `research/audit/wave2-foundations.proof-contracts.json`; the evidence ledger remains the approved 43-row A1 record. No id, reading order, item list, example list, dependency list, or item was renamed, removed, reordered, or deleted.
