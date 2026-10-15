# Batch 13 authoring notes — blocking, pairs, and Latin squares

## Inventory, levels, and plan reconciliation

This batch owns A page `blocking-and-paired-designs` (order 1942) and B page
`blocking-and-paired-designs-examples` (order 1943), both in
`statistical-models-and-experiments`. Their IDs, title, category, and the four
page-level `requires` entries match the current task and `research/plan-spec.json`.
The track's SME-13 contract names SME-12, MSF-02, covariance algebra, and MSF-35
only for exact Gaussian F inference. This is compatible with the broader page
requirements: item dependencies use the exact assignment, estimator, finite
probability, and Gaussian theorem interfaces needed by each argument.

The initial batch-13 page manifest had an empty inventory. It now records all
seven A items and five B examples/counterexamples, with explicit `deps` and
item levels. Recomputed levels are:

| Level | Items |
|---|---|
| 2 | `def-randomized-complete-block-design` |
| 3 | `lem-rcbd-nested-contrast-model-and-projection`, `def-randomized-latin-square-design`, `ex-missing-treatment-is-not-a-complete-block`, `ex-paired-randomization-contrast-with-heterogeneous-effects` |
| 4 | `thm-paired-randomization-contrast-moments`, `lem-randomly-selected-unit-effect-moments`, `prop-rcbd-treatment-block-interaction-confounded-with-residual`, `thm-rcbd-treatment-contrast-f-law`, `ex-latin-square-assignment-is-restricted` |
| 5 | `ex-rcbd-interaction-shares-the-residual-subspace`, `cex-observed-paired-contrast-variance-is-not-effect-heterogeneity` |

The required batch-level dependency remains level 2 with prerequisite batch
12. The item DAG has no cycle. The pair theorem and latent-effect lemma use batch-12's level-3 finite
average-effect definition, so their item levels are 4. The B paired example
now computes its own two assignment moments from the checked design and finite
probability definitions, so its level is 3 and it does not inherit the unresolved
plan-conflict dependency.

The current `plan-spec.json` entry agrees with the design on page IDs, order,
title, category, companion, and all four page-level requirements; it declares
no competing item inventory or mathematical statement. The track design
specifies the mathematical scope. The older pair-audit row says the MSF-02
item interfaces were planned and unpublished; that observation is stale because
the current page and both definitions are published and were inspected. The
older dossier's E02/E03 item names were proposals, not an authored inventory;
the item IDs now in the batch manifest follow the current SME-13 scope.

## Owner reconciliation required: paired-contrast variance

The assigned plan and audit repeat a false variance formula. The exact claim is
in `research/plan-statistical-models-experiments-track.md` §SME-13 (line 174)
and the SME-13 row of
`research/statistics-ml-scaffold-audit-2026-10-12/models/pair-audit.json`:
the *observed treated-minus-control contrast* is said to have design variance
`(δ1−δ2)^2/4`, where `δl=Yl(1)−Yl(0)`.

For the actual pair randomization, the two observed contrasts are
`D1=Y1(1)−Y2(0)` and `D2=Y2(1)−Y1(0)`. Their mean is indeed
`(δ1+δ2)/2`, but the variance is `(D1−D2)^2/4`, which also depends on the
baseline outcomes. A fully admissible no-interference witness is
`Y1(0)=0, Y1(1)=1, Y2(0)=10, Y2(1)=10`: the effects are 1 and 0, while the
two observed contrasts are −9 and 10. Their mean is 1/2 and their design
variance is 90.25; the planned formula gives 0.25. The planned variance
formula instead equals the variance of the *latent effect of the randomly
selected treated unit* (values 1 and 0); that quantity is not the observed
paired contrast because it uses both potential outcomes for that unit.

To preserve the sound scope and make the defect reviewable, the A page now
contains the corrected observed-contrast theorem and a separate lemma for the
latent selected-unit effect; the B page contains the explicit counterexample.
The corrected theorem, latent-effect lemma, and explicit counterexample are
escalated for owner reconciliation because the theorem and lemma no longer
match the controlling formula's meaning, and the counterexample directly
refutes that formula for the observed contrast. The B worked example now
computes its own two assignment moments from the complete-block and finite
probability definitions; it no longer depends on the disputed theorem. The
proposed minimal plan repair is to retain the expectation formula, replace the
observed contrast variance by `(D1−D2)^2/4`, and label the effect-heterogeneity
formula only for the non-observed selected-unit effect. No claim in the current
plan is silently treated as accepted.

## Supplier inspection and mathematical conventions

- Batch 12's actual draft `def-finite-randomized-treatment-assignment-model`
  states that assignments are random while the unit schedule is fixed, allows
  zero-probability assignment vectors, and does not imply no interference.
  `def-finite-population-average-treatment-effect-and-weak-null` explicitly
  defines the fixed finite-population average effect. Their actual bodies were
  checked; their draft status is not an acceptance stamp.
- The paired result assumes no interference explicitly. Its two-point design
  law is embedded in the binary assignment space by assigning zero weight to
  the two non-pairing vectors, which the finite assignment model permits. The
  expectation is a direct finite sum; the variance calculation uses the
  published covariance-bilinearity theorem. No Gaussian or superpopulation
  model is used for the paired design moments.
- The published MSF-02 page, `def-statistic-and-estimator`, and
  `def-randomized-procedure-as-a-markov-kernel` were inspected. The paired
  contrast is measurable on the full-power-set data space and estimates the
  defined finite target.
- The published probability suppliers `def-finite-probability-space-and-event`,
  `def-expectation-on-a-finite-probability-space`,
  `def-moments-variance-and-covariance`, and
  `thm-covariance-bilinearity-and-symmetry` were inspected. The finite sums
  remain on one explicitly specified assignment space.
- The local projection lemma proves the additive and contrast-restricted
  RCBD dimensions, residual space, and reduction in residual sum of squares.
  It states the full double-centering conditions and proves the projection
  formulas rather than importing an unreviewed ANOVA shortcut.
- The interaction result is an algebraic design limitation: the observed
  double-centered residual can be decomposed into interaction and projected
  error in multiple ways, and the unrestricted interaction consumes all
  residual directions. It does not claim distribution-level nonidentifiability
  under every specified stochastic model.
- The published Gaussian supplier
  `thm-gaussian-linear-model-qr-and-exact-t-f-pivots` was read with its full
  proof. Its nested-space clause applies because the local lemma gives
  dimensions `p` and `p-q`, `p=t+b-1<tb`, and the null mean belongs to the
  reduced space. AC is explicitly carried in the new theorem and dependency
  list because the Gaussian supplier requires it. The F law is conditional
  model-based inference; the assignment law does not supply Gaussian errors.
- The Latin-square definition uses the uniform law on all Latin squares as
  one explicit restricted randomization mechanism. A cyclic construction
  proves the finite assignment set is nonempty for every order. The NIST
  section is not used for Latin-square claims; its separate Latin-square pages
  were not read.

## Source reading and retrieval

The A-page coverage records Oehlert's complete relevant Chapter 13 sections
(full textbook PDF), Holmes and Huber's complete §13.4.4 (author-hosted book),
and the full official NIST §5.3.3.2 page. The B page records Oehlert and Holmes
and Huber with the specific example concepts each supports. Every source has
exact locators, supported item IDs, dispositions, and an honest limit on what
it supports. `source-fetch-check --stamp` verified all five coverage records
(three A-page records and two B-page records; zero newly stamped); there were no
retrieval failures or recovery retries, so no `source_resolution` drop or
escalation is needed.

## Checks and handoff

Scoped checks after the final carrier edits:

- `manifest-deps`: 12 items, 0 missing dependencies.
- `depcheck --items-file`: 12 scoped items, 0 errors or warnings; prerequisite
  closure checks covered 1,597 items and 371 pages.
- `precheck.mts`: 12 files, 10 proof-bearing items checked, 0 failures.
- Strict proof contracts: 12 items, 0 errors or warnings. `proof-layout`: 12
  items, 32 steps, 0 defects.
- `coverage-checklist`: 2 pages, 12 harvested results, 0 errors or warnings.
  `source-fetch-check --stamp`: 5/5 source records verified, 0 newly stamped.
- `content-policy`: 12 scoped items, 0 errors or warnings.
- `rendercheck`: 14 files (12 items and both pages), 0 errors or warnings.
- The paired worked example's declared finite smoke passed its two-atom
  enumeration check.
- Recomputed batch-13 item levels with the run dependency graph: all 12
  manifest labels match, from level 2 through level 5; no batch-13 cycle.
  `step1-decisions` records are current: 9 `ready`, 3 `escalated`, each with
  its examined item dependencies.

Two run-wide scheduling checks remain outside this pair's scope. The full
`item-dependency-levels.mjs check --run statistical-models-experiments-62`
reports 24 errors, none in batch 13: ten empty inventories on the A/B pages
for `response-surfaces-and-optimal-design`, `power-and-sample-size-planning`,
`competing-risks-and-cumulative-incidence`, `spatial-field-summary-estimators`,
and `kriging-as-best-linear-prediction`; and fourteen stale labels on
`thm-standardization-identifies-a-causal-mean`,
`thm-inverse-probability-weighting-identifies-a-causal-mean`,
`ex-standardization-and-ipw-two-strata-calculation`,
`ex-extreme-ipw-weights-under-poor-overlap`,
`ex-weight-truncation-changes-the-ipw-target`,
`ex-logrank-crossing-hazards-zero-score`,
`thm-durbin-levinson-solves-the-prediction-equations`,
`ex-nongaussian-conditional-mean-not-best-affine-predictor`,
`def-random-field-stationarity-covariance-and-variogram`,
`lem-random-field-covariance-kernel-is-positive-semidefinite`,
`thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel`,
`thm-order-two-field-variogram-is-conditionally-negative-definite`,
`thm-continuous-stationary-field-covariance-has-bochner-measure`, and
`ex-covariance-kernel-and-intrinsic-variogram-checks`.
`batch-dependency-levels.mjs check --run` reports stale shared scheduling
input: the current artifact hash is
`7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`, while this
dispatch supplied `a405f7fe8adabe73858aeb407bd96a699d8d9b90b9d67b1856bceef420eb8065`.
The existing batch-13 row remains level 2 with prerequisite batch 12. These
shared scheduling artifacts were left for the owner to reconcile.

The current autopilot status was checked from disk: run
`statistical-models-experiments-62` is running but Step 1 is held by the existing
owner blocker in `research/statistical-models-experiments-62-step1-blockers.json`.
This batch records authoring readiness only and does not alter that blocker,
shared dependency state, engine state, or any verdict.
