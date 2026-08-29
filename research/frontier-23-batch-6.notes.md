# frontier-23 batch 6 notes — scaffold

Owned pair:
`product-measures-and-the-fubini-tonelli-theorems` (A, order `288.021`) with
`product-measures-and-the-fubini-tonelli-theorems-examples` (B, order
`288.022`).

Artifacts owned by this batch:
`research/frontier-23-batch-6.pages.json`,
`research/frontier-23-batch-6.coverage.json`,
and this file.

Session date: Saturday, August 29, 2026.

## Design against spec

Recorded here, not adjudicated here.

- The generated batch task still lists only
  `modes-of-convergence-egorov-and-lusin-examples` in `requires`.
- The current `research/plan-spec.json` and the accepted step-0 drift report at
  `research/frontier-23-alpha-step0-drift.md:53-56` add the backward
  prerequisite `countability-axioms-and-cardinal-functions`.
- The MT-11 design prose at `research/plan-measure-theory-track.md:2675-2761`
  names the deeper supplier stack MT-8, MT-4, MT-1, MT-7,
  `the-riemann-integral-in-rn-and-jordan-content`,
  `fubini-and-change-of-variables`, and
  `countability-axioms-and-cardinal-functions`.
- I therefore followed the current spec, not the stale task line: the manifest
  now requires `countability-axioms-and-cardinal-functions` and
  `modes-of-convergence-egorov-and-lusin-examples`, exactly as the live
  `plan-spec.json` row does on Saturday, August 29, 2026.

## Current scaffold shape

- A page `product-measures-and-the-fubini-tonelli-theorems`: **39 items**.
- B page `product-measures-and-the-fubini-tonelli-theorems-examples`:
  **11 items**.

The A page stays well below the 60-item split ceiling, so no split is owed.

## Non-duplication decisions

- I did not re-mint the published monotone-class, double-series Fubini,
  Euclidean-ball-volume, or plane-Gaussian results. The scaffold cites
  `thm-monotone-class`, `thm-double-series-fubini`,
  `cor-volume-of-the-unit-n-ball`, `cor-volume-of-a-radius-r-n-ball`, and
  `lem-plane-gaussian-integral-in-polar-coordinates` instead.
- The Caratheodory route to product measure is kept as the remark
  `rem-caratheodory-also-constructs-the-product-measure` rather than as a
  second full theorem chain parallel to the designed sections route.
- The design's closed-form unit-ball and Gaussian consequences are recorded as
  `rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas`
  instead of duplicating the already-published Gamma-page formulas.
- `cex-equal-iterated-integrals-do-not-imply-l-one-integrability` is the one
  deliberate page-local synthesis branch. No published or previously planned
  item on disk states the measure-theoretic false implication in this exact
  scope. The witness is built from two disjoint copies of the sourced unequal
  Fubini counterexample and its coordinate swap, so the item remains
  source-backed without pretending a harvested source stated that composite
  witness verbatim.

## Design tension kept explicit

- The MT-11 prose at `research/plan-measure-theory-track.md:2701-2706` says
  that without `sigma`-finiteness both the section-measure measurability claim
  and uniqueness fail, and that both should appear as `fs-` items.
- The explicit `FS.` block at `research/plan-measure-theory-track.md:2758-2761`
  names the Tonelli failure, the uniqueness failure, and the other standard
  MT-11 failure statements, but it still does not separately name the
  section-measure-function measurability failure.
- I therefore restored `fs-tonelli-holds-without-sigma-finiteness` exactly as
  the `FS.` block and Alpha step-3 finding require, using Folland's Section
  `2.5` remark plus Exercise `46` as the source-backed witness route.
- I did not independently mint a separate `fs-` item for the non-`sigma`-finite
  section-measure-function measurability failure. The theorem prose gestures at
  that additional failure, but the current step-3 finding only requires the
  Tonelli item, and the three harvested treatments do not isolate that extra
  failure with a comparably direct named result.

## Source set actually read

The coverage ledger records these fetch-verified source documents:

1. Terence Tao, *An Introduction to Measure Theory*
   `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf`
2. John K. Hunter, *Measure Theory*
   `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`
3. Gerald B. Folland, *Real Analysis: Modern Techniques and Their
   Applications*, 2nd ed.
   `https://djvu.online/file/NPF4BEtSuqdFA`

Notes on provenance:

- The Tao and Hunter rows reuse the current stamped URLs already present in the
  frontier-18/19 coverage artifacts.
- The Folland mirror is byte-unstable across the repo history. Earlier runs
  carry an older stamp for the same URL, but frontier-20 restamped the live
  mirror on August 26, 2026 with a different `sha256_16`. I used that later
  receipt and recorded the live mirror URL as-is, rather than silently reusing a
  stale hash for a changed document.

## Source-backed scope decisions

- Tao is the main backing for the theorem chain from product measure through
  Tonelli, Fubini, the area interpretation, and the distribution formula.
- Hunter is the main backing for the section lemmas, the Euclidean Borel-product
  identity, the completion caveat, and the completed Fubini statement on
  `R^{m+n}`.
- Folland is the main backing for the A-page false statement
  `fs-tonelli-holds-without-sigma-finiteness` through the Section `2.5` remark
  that `sigma`-finiteness is necessary together with Exercise `46`'s diagonal
  witness, for the explicit counterexamples on the diagonal and on
  sectionwise-measurable non-product-measurable sets, for the polar
  decomposition, for the general `C^1` change-of-variables theorem, and for the
  `L^p` layer-cake formula.
- The non-`sigma`-finite uniqueness witness is an honest synthesis obligation.
  Tao explicitly states the nonuniqueness, but does not name the diagonal
  witness. The scaffold therefore uses Tao's remark as the source-backed failure
  statement and records the standard Lebesgue-times-counting primitive-vs-local
  product construction as the page's proposed proof route.

## Dependency rationale

- The A page is built in five layers:
  1. product `sigma`-algebra, rectangle algebra, and sections;
  2. the `sigma`-finite section-measure theorem, product measure, Tonelli, and
     Fubini;
  3. the completed-product version and its exact weakening;
  4. Euclidean consequences, subgraph/graph theorems, layer cake, and polar
     coordinates;
  5. the R-9 ownership block for `C^1` change of variables in the Lebesgue
     setting.
- The B page groups concrete payoffs first, then the failure witnesses in the
  order the A page's false statements need them: sectionwise measurability,
  loss of `sigma`-finiteness, loss of integrability, equal iterated integrals,
  nonuniqueness, incompleteness, and the completed-section caveat.

## Exact-id audit

- The final manifest contains **50** proposed ids.
- After finalizing `research/frontier-23-batch-6.pages.json`, I ran one exact
  fixed-string audit across `items/` and `research/plan-spec.json`.
- It returned no pre-existing canonical-id hit outside this batch manifest.
- I also ran a batch-local dependency-resolution audit against the current
  on-disk `items/` corpus plus `research/plan-spec.json`; every `deps` target in
  the new manifest resolves.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-6.coverage.json`
  passed on Saturday, August 29, 2026:
  `1` page, `58` harvested results, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  passed on Saturday, August 29, 2026:
  `499` scoped items, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-6.pages.json`
  passed on Saturday, August 29, 2026:
  `50` scoped items, `0` errors, `0` warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-6.coverage.json`
  passed on Saturday, August 29, 2026:
  `3/3` source(s) fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Saturday, August 29, 2026. As usual for the live unspliced
  plan, this validates the current repository plan rather than classifying the
  new batch-6 ids before step 4. The terminal output ended cleanly with the
  standard `OK` line and only repository-wide `redundant-prereq` notes outside
  this batch.

## What I did not materialize

- I did not create or overwrite a run-wide
  `research/frontier-23-url-liveness.json` artifact from this batch session.
  `url-sweep` and `source-backing` are stage gates, but their liveness output is
  run-scoped rather than batch-local, and the dispatch instructions forbid me to
  write non-batch workflow artifacts here.

## Step-3 fix pass

Run date for this pass: Saturday, August 29, 2026 (Australia/Sydney local
time). The governing alpha review is
`research/frontier-23-alpha-c-step3-scaffold-review.md`, written against the
Friday, August 28, 2026 scaffold bytes.

- Finding `C6-1` disposition: applied.
  Evidence: the MT-11 `FS.` block at
  `research/plan-measure-theory-track.md:2758-2761` explicitly requires the
  false statement `Tonelli holds without sigma-finiteness`, and Folland, *Real
  Analysis*, Section `2.5` states that the hypothesis is necessary and points
  to Exercise `46`, whose diagonal witness is already harvested in this batch.
  Changed scaffold record:
  `research/frontier-23-batch-6.pages.json` now includes
  `fs-tonelli-holds-without-sigma-finiteness` on the A page with only A-safe
  dependencies;
  `research/frontier-23-batch-6.coverage.json` now maps Folland's remark after
  Theorem `2.37` to that new item while keeping Exercise `46` on
  `cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal`;
  and this notes file now corrects the MT-11 design reading, the scaffold
  counts, and the validation counts.

Current validator evidence on the batch-6 scaffold bytes:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-6.coverage.json`
  passed on Saturday, August 29, 2026: `1` page, `58` harvested result(s),
  `0` error(s), `0` warning(s).
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  passed on Saturday, August 29, 2026: `499` scoped item(s), `0` error(s),
  `0` warning(s).
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-6.coverage.json`
  passed on Saturday, August 29, 2026: `3/3` source(s) fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Saturday, August 29, 2026. It again emitted only the
  repository's standing out-of-batch `redundant-prereq` advisories, with no
  batch-6 cycle, forward-reference, B-page dependency, unresolved-id, or
  item-cap failure.

## Step-5 authoring

Run date for this pass: Saturday, August 29, 2026 (Australia/Sydney local
time).

- Authored ids on the A page:
  `def-measurable-rectangle`,
  `def-product-sigma-algebra-and-finite-product-sigma-algebras`,
  `lem-finite-rectangle-unions-form-a-generating-algebra`,
  `rem-caratheodory-also-constructs-the-product-measure`,
  `def-sections-of-sets-and-functions-on-products`,
  `thm-sections-of-product-measurable-sets-are-measurable`,
  `thm-sections-of-product-measurable-functions-are-measurable`,
  `fs-measurable-sections-imply-product-measurability`,
  `prop-sigma-finite-section-measure-functions-are-measurable`,
  `thm-iterated-section-measures-agree-on-product-measurable-sets`,
  `def-product-measure-on-sigma-finite-spaces`,
  `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`,
  `fs-product-measure-is-unique-without-sigma-finiteness`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
  `fs-tonelli-holds-without-sigma-finiteness`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `rem-fubini-should-be-applied-after-tonelli-on-absolute-values`,
  `def-completed-product-measure`,
  `thm-tonelli-and-fubini-for-completed-product-measures`,
  `fs-completed-product-sections-are-measurable-for-every-parameter`,
  `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`,
  `rem-borel-product-equality-needs-second-countability`,
  `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`,
  `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures`,
  `fs-product-of-complete-measure-spaces-is-complete`,
  `fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra`,
  `thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral`,
  `cor-graph-of-a-measurable-function-is-lebesgue-null`,
  `def-distribution-function-of-absolute-value`,
  `thm-layer-cake-formula-for-l-p-powers`,
  `def-polar-surface-measure-on-the-unit-sphere`,
  `thm-polar-coordinates-formula-for-lebesgue-measure`,
  `rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas`,
  `lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets`,
  `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets`,
  `lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands`,
  `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`,
  `cor-c-one-change-of-variables-for-l-one-functions`,
  `rem-finite-product-measures-are-the-base-case-for-countable-product-constructions`.
- Authored ids on the B page:
  `ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates`,
  `ex-zeta-two-from-tonelli-and-the-geometric-series`,
  `ex-region-under-x-squared-has-measure-one-third`,
  `ex-cavalieri-computes-the-area-of-the-unit-disc`,
  `cex-measurable-sections-do-not-imply-product-measurability`,
  `cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal`,
  `cex-fubini-fails-without-l-one-integrability`,
  `cex-equal-iterated-integrals-do-not-imply-l-one-integrability`,
  `cex-product-measure-need-not-be-unique-without-sigma-finiteness`,
  `cex-product-of-complete-measures-need-not-be-complete`,
  `cex-completed-product-sections-need-not-be-pointwise-measurable`.
- Wrote the page files
  `library/measure-theory/product-measures-and-the-fubini-tonelli-theorems.md`
  and
  `library/measure-theory/product-measures-and-the-fubini-tonelli-theorems-examples.md`,
  and wrote the batch contract
  `research/frontier-23-batch-6.proof-contracts.json`.
- Provenance rationale:
  sourced theorem, definition, remark, and standard witness statements are
  tagged `ai-altered` because the final wording is library-local but tied
  directly to Tao, Hunter, and Folland; local proofs are `ai-generated`; proof
  free definitions and remarks keep `proof: not-applicable`; and only
  `cex-equal-iterated-integrals-do-not-imply-l-one-integrability` is marked
  `provenance.statement: ai-generated` with `generation.role: counterexample`,
  matching the planned two-copy synthesis branch recorded earlier in this file.
- Narrowed or adjusted authoring choices:
  `cex-measurable-sections-do-not-imply-product-measurability` uses the exact
  Folland Exercise `47` well-ordered witness rather than the stronger
  `[0,1]^2` CH-only Sierpinski form, so the batch keeps a ZFC-safe local item
  instead of silently importing the published recorded-not-proved CH remark;
  `ex-zeta-two-from-tonelli-and-the-geometric-series` keeps the Basel value as
  a classical inline input rather than taking a forbidden dependency on the
  draft `ai-generated` item `ex-sine-product-recovers-the-basel-sum`; and
  `cex-fubini-fails-without-l-one-integrability` was rewritten to a direct
  arctangent computation so it no longer depends on the published
  `ai-generated` worked example
  `ex-unequal-iterated-improper-integrals-on-the-unit-square`.
- Narrowed or dropped claims:
  none. Every planned batch-6 id remains authored on disk and `status: draft`.
- Blockers:
  none remain on the current batch-6 bytes.

Final validator evidence on the authored batch-6 bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...` on the 38 proof-bearing
  batch-6 items passed on Saturday, August 29, 2026:
  `38` checked, `0` failing.
- `node tools/content-policy.mjs research/frontier-23-batch-6.pages.json`
  passed on Saturday, August 29, 2026:
  `50` scoped item(s), `0` error(s), `0` warning(s).
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Saturday, August 29, 2026, with only the repository's standing
  out-of-batch `redundant-prereq` advisories.
- `node tools/proof-contract.mjs research/frontier-23-batch-6.proof-contracts.json --strict`
  passed on Saturday, August 29, 2026:
  `0` error(s), `0` warning(s), `38/38` item(s) checked.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-6.proof-contracts.json --fail-on-missing-quote`
  passed on Saturday, August 29, 2026:
  `93` citation(s), no missing quote, no widening candidate.
- `git diff --check -- ...batch-6-authored-paths...`
  passed on Saturday, August 29, 2026 with no whitespace or merge-marker
  defects in the authored item, page, or contract files.
