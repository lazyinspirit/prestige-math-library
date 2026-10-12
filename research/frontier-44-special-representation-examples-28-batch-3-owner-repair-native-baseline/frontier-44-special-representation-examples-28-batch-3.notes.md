# Batch 3 — `sequences-and-limits` — scaffold notes

Run `frontier-44-special-representation-examples-28`, role beta, batch 3, 2026-10-08.
Owned scope: the A/B pair `sequences-and-limits` / `sequences-and-limits-examples`
(real-analysis, orders 181/182), the one A/B pair this dispatch owns.
Wrote only this batch's manifest, coverage, notes, cross-batch dependency input
and Step-1 readiness records. No item file, page file, shared plan, design,
engine state or verdict was edited.

**Outcome.** 31 manifest items, all recorded `ready` and all 31 readiness
records current at the time of writing: the 18 published items the canonical
plan already homes on the A page (preserved, not re-authored) and 13 new
example/counterexample items scaffolded for the B page. Highest in-run
`dependency_level` is 4. Nothing was escalated as mathematically unclosable;
four findings are recorded below for owner reconciliation (F1–F4), and the
design/plan reconciliations are recorded in §1.

## 1. Which design controls, and why

The dispatch names `research/plan-first-draft-superseded.md` L65, the pair-1
section "PAIR 1 — Sequences and Limits in R" (lines 64–112: the 1A
definition/theorem/false-statement lists and the 1B supporting-construction and
example/counterexample lists). That file's own header and name say the draft is
superseded; `research/plan-spec.json` controls, per the dispatch. The drift
record for this page (`alpha-step1-drift.md` § `sequences-and-limits` plus
`owner-drift-prerequisite-repair.md`) corrected the page's declared prerequisite
from `suprema-and-infima` to `countability-and-uncountability` (order 17,
applied before this scaffold), because the published `rem-sequence-conventions`
uses `def-countable`, `lem-subset-of-countable` and `lem-pigeonhole`. The plan
and this manifest both carry the corrected `requires`.

**Design-vs-plan conflicts recorded.**

- **C1 (binding constraint, not just a conflict).** The superseded design's 1B
  list asks for geometric sequences `r^n -> 0`, `(1+1/n)^n` increasing and
  bounded by 3, `n^{1/n} -> 1`, the Babylonian `sqrt(2)` sequence and
  limsup/subsequential-limit examples. None of these can be built by an item of
  either page of this pair under the current plan: `tools/validate-plan.mjs`
  check 15 (`undeclared-prereq`) requires every item dependency of a page to
  land in the transitive closure of that page's declared `requires`, and
  closure(`sequences-and-limits`) is exactly
  `the-zfc-axioms-and-basic-set-constructions`,
  `relations-functions-and-quotients`, `construction-of-the-natural-numbers`,
  `construction-of-r-via-cauchy-sequences`, `construction-of-r-via-dedekind-cuts`,
  `foundations-of-the-real-numbers`, `order-zorn-and-the-axiom-of-choice`,
  `suprema-and-infima`, `countability-and-uncountability`. The items these
  examples need — `def-integer-power`, `lem-power-laws`, `lem-power-monotone`,
  `lem-bernoulli-inequality`, `def-finite-sum`, `lem-finite-sum-laws`,
  `thm-nth-roots-exist`, `def-rational-power`, `lem-rational-power-*` — are all
  homed on `roots-and-rational-powers` (order 15), and
  `thm-binomial-theorem`, `thm-binomial-closed-formula`,
  `def-factorial-and-falling-factorial` are homed on
  `finite-counting-and-binomial-coefficients` (order 19); neither page is in
  that closure. Building any of them here would need a new owner-approved
  backward page edge on the A page (and the second also on the counting page),
  which this batch may not add. The design items also already have homes, item
  by item: geometric sequences `lem-geometric-sequence-null` on
  `monotone-sequences-and-cauchy-completeness` (183); the Babylonian sequence
  `ex-babylonian-sqrt-two` and the null-difference counterexample on
  `monotone-sequences-and-cauchy-completeness-examples` (184); `n^{1/n} -> 1`
  `lem-nth-root-of-n-tends-to-one` (191) and `ex-standard-limits-worked` (192);
  the `e`-sequence `cor-two-less-than-e-less-than-three` on
  `the-exponential-function` (266); the enumeration of `Q` and the Cantor
  diagonal construction on the batch-2 pair (`ex-rationals-in-an-interval`,
  `ex-binary-sequences-are-uncountable`); limsup/subsequential-limit examples on
  the 191/192 pair; the nested-interval and sup-not-attained material on the
  13/14 and 183 pairs. Every one of these is recorded in the coverage entries
  with its destination. The one design item that *is* inside the closure —
  `sqrt(n+1) - sqrt(n) -> 0` — is built here as
  `ex-successive-root-differences`, since `thm-of-square-roots` and
  `lem-of-square-monotone` are homed on `foundations-of-the-real-numbers`.
- **C2.** The plan's B-page entry declares `forwardRefs:
  ["sine-cosine-and-the-definition-of-pi"]`. No claim on either page needs
  trigonometry at this order (trigonometry is introduced at order 272+), and no
  scaffold item uses the whitelist; recorded so the entry is not silently lost.
- **C3.** `research/plan-realanalysis-completion-track.md` §9.1 (lines ~966–1010)
  proposes, for Phase 3, to move `fs-bounded-implies-convergent`,
  `fs-limit-preserves-strict-inequality` and
  `fs-subsequence-convergence-implies-convergence` from the A page to its B
  companion, and records that `fs-bounded-implies-convergent` has six direct
  published consumers (`fs-cesaro-converse`; `cex-irregular-summability-matrix`,
  `cex-stolz-cesaro-converse-fails`, `ex-cesaro-means-of-alternating`;
  `fs-subsequence-convergence-implies-convergence`, `rem-sequence-conventions`).
  The owner authoring direction for this run says to preserve the four
  published A pages, their file inventories, publication state and mathematics.
  This batch therefore keeps the three false statements on the A page — as the
  current plan also does — and scaffolds new B items only. The Phase-3 move is
  an owner action and must not be attempted before the consumer repairs §9.1
  lists; recorded, not applied.
- **C4.** The remaining design 1A topics that the plan defers (monotone
  sequences, Bolzano–Weierstrass, limsup/liminf, Cauchy completeness on this
  pair) are outside the A page's published inventory and are disposed of in the
  coverage rows as `deferred` to their actual pages.

## 2. Inventory

**A page `sequences-and-limits` — preserved published inventory (18 items, plan
order, unchanged).** `def-sequence, lem-limit-of-tail, lem-limit-unique,
lem-convergent-implies-bounded, lem-convergent-implies-cauchy,
lem-null-times-bounded, thm-algebra-of-limits, lem-limit-preserves-order,
thm-squeeze, lem-limit-abs, def-divergence-to-infinity,
lem-reciprocal-of-null-diverges, lem-index-map-grows,
lem-subsequence-inherits-limit, fs-bounded-implies-convergent,
fs-limit-preserves-strict-inequality, fs-subsequence-convergence-implies-convergence,
rem-sequence-conventions`. Each manifest entry carries the item's own published
`deps` (read from its file) unioned with the plan entry's deps — the only
plan-only addition is `prop-of-reciprocal-order` on
`lem-reciprocal-of-null-diverges` — plus `provenance`, and `justified_by` /
`forward_refs` / `aliases` were found empty on all 18. The published
statements, proofs, publication states and raw bytes were not touched; the 18
item files are byte-identical to the pre-run hashes in
`research/frontier-44-special-representation-examples-28-published-a-preservation.json`
(verified by SHA-256).

**B page `sequences-and-limits-examples` — 13 new items** (page order; a B item
depends only on published items or on earlier items of this page, and nothing
may depend on these):

| # | id | level | content |
|---|---|---:|---|
| 1 | `ex-the-reciprocal-of-k-plus-one-is-null` | 1 | `1/(k+1) -> 0` in `R`, the real-epsilon form of `1/n -> 0`; density of `Q` + `lem-rat-archimedean` + reciprocal order. The reference null sequence for the page. |
| 2 | `ex-a-rational-expression-limit` | 3 | `(2(k+1)+3)/(5(k+1)+1) -> 2/5` by dividing by `k+1` and applying the algebra of limits; quotient hypothesis checked at the value of the limit. |
| 3 | `ex-an-alternating-null-sequence` | 4 | `s_k (k+1)^{-1} -> 0` where `s_k` is the alternating sequence of `fs-bounded-implies-convergent`; `|s_k| = 1` by induction, then `lem-null-times-bounded`. |
| 4 | `ex-square-roots-diverge-to-infinity` | 3 | `sqrt(k) -> +infinity`: Archimedean choice `k > M^2` with monotonicity of squaring on the nonnegatives; only `thm-of-square-roots` and `lem-of-square-monotone` are needed. |
| 5 | `ex-successive-root-differences` | 4 | `sqrt(k+1) - sqrt(k) -> 0` by rationalisation to `1/(sqrt(k+1)+sqrt(k))` and the reciprocal bridge; a difference of two divergent sequences that converges. |
| 6 | `ex-changing-finitely-many-terms` | 2 | The Hunter 3.20 instance: changing the first 100 terms of the null sequence to `k+1` leaves convergence to `0` and bound 100; tail agreement plus discreteness `k < 100 => k+1 <= 100`. |
| 7 | `ex-two-squeeze-computations` | 5 | `1/((k+1)sqrt(k+1)) -> 0` squeezed between `0` and `1/(k+1)`; `(k + s_k)/(k+1) -> 1` squeezed between `1 - 2/(k+1)` and `1`. |
| 8 | `ex-subsequences-of-a-null-sequence` | 4 | The even and odd subsequences of `1/(k+1)` converge to `0` along the published strictly increasing index maps of `fs-bounded-implies-convergent`; instantiates `lem-subsequence-inherits-limit` and `lem-index-map-grows`. |
| 9 | `ex-absolute-value-limit` | 4 | For `x_k = (k+1)^{-1} - 1`: `x_k -> -1` and `|x_k| -> 1`, so the reversal of `lem-limit-abs` fails for a nonzero limit. |
| 10 | `cex-sum-of-divergent-sequences-converges` | 3 | Hunter's own witness `k` and `-k`: both diverge, the sum is the constant `0`; the algebra of limits may not be read backwards. |
| 11 | `cex-null-times-unbounded-need-not-be-null` | 3 | `(k+1)^{-1}` and `k+1`: the product is identically `1`, so boundedness cannot be dropped from `lem-null-times-bounded`. |
| 12 | `cex-quotient-rule-needs-a-nonzero-limit` | 4 | `(k+1)^{-1}` and `1`: the quotient `k+1` diverges to `+infinity`; the quotient clause of `thm-algebra-of-limits` needs a nonzero denominator limit. Instantiates `lem-reciprocal-of-null-diverges`. |
| 13 | `cex-squeeze-with-unequal-bound-limits` | 4 | `-1 <= s_k <= 1` with the bounds converging to different limits; `thm-squeeze` needs a common limit. |

Dependency levels were computed with the run's actual algorithm
(`dependencyLevels` over the current manifests of batches 1–4 plus this
manifest); every label was re-checked after the batch-1 and batch-2 owner
repairs of 2026-10-08 landed, and no label moved.

## 3. Evidence and dependency verification

The substantive proof dependencies were read, not assumed: every supplier
statement cited in a strategy was opened and checked for hypothesis, direction
and convention (for example `lem-null-times-bounded` needs boundedness of the
second factor only; `thm-squeeze` needs the two bounds to share their limit;
`lem-reciprocal-of-null-diverges` needs positive terms; `lem-of-naturals-positive`
is what converts `k >= N` into an inequality of reals; `lem-nat-discrete` is
what converts `k < 100` into `k+1 <= 100`; `lem-of-square-monotone` supplies the
base monotonicity for the square root without any rational-power theory). No
item of this batch uses the axiom of choice, and none needs a choice branch;
the only choice-adjacent items in the closure (`def-countable-choice`,
`def-dependent-choice`) are not consumed here.

All 13 new items are closed local arguments over published items of the
closure plus earlier same-page items. No new prerequisite pair, no new lemma and
no page split was needed: the B page stands at 13 items and the A page at 18,
far below the 100-item cap, and the local closure is complete for every claim
written.

Cross-batch dependency input
`research/frontier-44-special-representation-examples-28-batch-3.cross-batch-dependencies.json`
holds the four declared edges out of this pair, one row per
`(kind, consumer, supplier)`, all `open` (readiness-level review, not
adjudication, so none is marked `verified`):

- page `sequences-and-limits` -> `countability-and-uncountability` (batch 2);
- item `rem-sequence-conventions` -> `def-countable`, `lem-subset-of-countable`,
  `lem-pigeonhole` (batch 2), with the exact use (the identification of
  cofinal index sets with infinite index sets) in the evidence column.

The 13 B items add no cross-batch edge: their suppliers are homed on
`foundations-of-the-real-numbers`, `construction-of-r-via-cauchy-sequences`,
`construction-of-the-natural-numbers`, `suprema-and-infima` and the A page
itself, all published and outside the run's batches, or earlier items of the
same page. A uniform `refresh --run` merged these rows into the unified ledger;
all four edges carry exactly one review row, with no orphaned review.

## 4. Checks actually run (whole batch and whole run at the time of writing)

| Command | Result |
|---|---|
| `node tools/manifest-deps.mjs` (all run manifests) | exit 0; 256 item(s), 0 missing, 0 errors (the total moves while sibling batches write) |
| `node tools/content-policy.mjs --manifest-only` (all run manifests) | exit 0; 256 scoped item(s), 0 errors, 0 warnings |
| `node tools/coverage-checklist.mjs --require-destination` (this batch) | exit 0; 2 page(s), 72 harvested result(s), 0 errors, 1 warning (advisory `coverage-low-yield` on the A page: 8/50 scaffolded, the expected shape because the A page is published) |
| `node tools/source-fetch-check.mjs --coverage <this batch> --stamp` | exit 0; 4/4 source(s) fetch-verified (Hunter and Lebl on both pages), 4/4 resolved |
| `node tools/url-sweep.mjs --coverage <this batch> --fail-on-dead` | exit 0; 2/2 live, 0 failed |
| `node tools/item-dependency-levels.mjs check --run <run>` | no error for any of these 31 items (labels correct, no cycle); the only errors are `empty scaffold inventory` rows for sibling batches still being scaffolded (38 at the last observation, moving), never for this pair |
| `node tools/step1-decisions.mjs check --run <run>` | 256 run items, 87 ready, not closed; all 31 of this batch's items closed and current, re-checked after the citation corrections recorded in §6 |
| `node tools/manifest-integrity.mjs --run <run>` | exit 0; 56 page(s) owed, 56 in the manifests, no scope drift |
| `node tools/drift-review-check.mjs --run <run>` | exit 0; 28 page(s) reviewed, 2 spec edits applied, no blocked edges |
| `node tools/frontier-dependency-ledger.mjs refresh --run <run>` | merged; this batch's 4 edges all reviewed; `--require-reviewed` still refuses because 20 sibling batches have no input yet (live scaffold work, not a finding on this batch) |
| `node tools/frontier-item-gate.mjs --run <run> --tool validate-plan` | pass at the last observation: this batch's two pages validate (18 and 13 items, correct prerequisites, no prefix or undeclared-prereq finding) and the three sibling `undeclared-prereq` errors seen mid-dispatch had been cleared by their writers (see F3) |

`depcheck` and `extcheck` were also attempted and both fail in the documented
Step-1 state — `focus-item-unknown` for 172 manifest items that have no item
file yet, including this batch's 13 new B items. That is exactly why the
Step-1 gate excludes them and runs them after authoring; the attempt is recorded
so the next writer does not re-read the failure as a batch-3 defect. The
`source-backing` gate needs the run-level `url-liveness` artifact, which the
engine writes at the stage join; this batch's own URLs were checked live by
`url-sweep` above and its sources are full-text stamped by
`source-fetch-check`.

## 5. Findings for owner reconciliation

**F1 (design/plan, recorded not applied).** The superseded design's power-based
examples (`r^n`, `(1+1/n)^n`, `n^{1/n}`, binomial-based work) cannot be built on
this pair without new owner-approved backward page edges to
`roots-and-rational-powers` and `finite-counting-and-binomial-coefficients`
(§1 C1 has the exact closure and item homes). If the owner wants any of these
claims inside this pair rather than on their existing pages, the minimal repair
is a `requires` edge on `sequences-and-limits` and, for the `e`-sequence, an
edge to the counting page; every affected claim currently has a home elsewhere,
so no gap is left open by building the pair without them.

**F2 (plan text, informational).** The B page's planned `forwardRefs:
["sine-cosine-and-the-definition-of-pi"]` is unused at this order; keep or drop
at plan reconciliation. The three false statements remain homed on the A page
under this run's owner direction, while
`plan-realanalysis-completion-track.md` §9.1 still proposes to move them to the
B page in Phase 3 (six direct published consumers listed there); the plan and
that audit should be reconciled before any move.

**F3 (run-level, observed; not this batch).** Mid-dispatch, `validate-plan`
across the run reported three non-batch errors, all `undeclared-prereq` rows for
still-in-flight representation-theory pairs:
`type-a-hecke-specht-modules-and-cellular-bases` depending on
`morita-bicategories-and-projective-generators` and on
`blocks-defect-groups-and-the-brauer-homomorphism`, and
`character-polynomials-fi-modules-and-representation-stability` depending on
`integral-specht-modules-and-modular-simple-modules`. All three were cleared by
their own writers before the end of this dispatch, and the last whole-run
`validate-plan` observation passes. Recorded as history so the run-level join
does not read the earlier observation as a batch-3 problem. The
`empty scaffold inventory` rows from `item-dependency-levels` likewise belong
to sibling batches still writing.

**F4 (published-file baseline, observed; not this batch).** Two files in the
pre-run preservation ledger no longer match disk, both in the batch-2 pair and
both documented by the owner repair lane
(`owner-countability-repair.md`): `library/real-analysis/countability-and-uncountability.md`
(baseline `4388c4ca…`, current `0518628d…`) and
`items/thm-countable-union-of-countable.md` (baseline `03654bd0…`, current
`54fa285a…`). All 81 other published item hashes, including all 18 items of
this pair, match their baselines. No batch-3 edit touched either file.

**F5 (mathematical honesty).** The readiness records for the 18 preserved A
items certify that their statements, declared dependencies and proof routes were
read and their dependency closure is closed inside the plan's declared
prerequisites; they do not re-prove the published items, which retain their own
audit markers. For the 13 new items the records certify complete strategies with
published suppliers; the item files, the final proofs and the independent
Step-3-review and Step-5 verdicts remain future work, and no claim here
substitutes for them.

## 6. Corrections made during construction

After the first readiness pass, a self-audit of every strategy citation against
the supplier statements found three loose attributions: the reciprocal-order
step in `ex-the-reciprocal-of-k-plus-one-is-null`,
`ex-successive-root-differences` and `ex-two-squeeze-computations` cited
`prop-of-reciprocal-order` (a lemma about comparisons with `1`) where the actual
step is reciprocal *reversal* for `0 < a < b`, which is
`lem-of-inverse-positive`. The manifest strategies were corrected to cite
`lem-of-inverse-positive`, the unused `prop-of-reciprocal-order` dependency was
removed from those three items (and the unused `def-max-min` from the squeeze
item), dependency levels were recomputed over the current manifests and were
unchanged, and the 10 readiness records whose transitive closure includes the
edited entries were re-recorded. All 31 records are current again; see the
`step1-decisions` row in §4.

A second, link-level audit of every `[[id]]` in a statement or strategy against
its `deps` array then fixed the remaining three mismatches:
`ex-the-reciprocal-of-k-plus-one-is-null` no longer mentions
`prop-of-reciprocal-order` or `thm-of-archimedean` in prose it does not use, its
statement was rewritten without the applied `\iota(\sigma(k))` notation that
the item-level policy checker bans, `ex-two-squeeze-computations` lost a
forward same-page sentence pointing at the not-yet-ordered counterexample, and
the two counterexamples whose refuted claim names a clause of the algebra of
limits (`cex-sum-of-divergent-sequences-converges`,
`cex-quotient-rule-needs-a-nonzero-limit`) now declare
`thm-algebra-of-limits` as the supplier of the clause they refute, as the
published counterexamples on the roots page do. After the second edit, every
link in every statement and strategy resolves to a declared dependency, no
applied `\iota` remains, dependency levels are still unchanged and correct, and
the 10 affected records were re-recorded; `step1-decisions check` then reported
all 31 of this batch's items closed.
