# Batch 39 authoring notes — batch and measurement-process variation

## Controlling plan and inventory

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner authoring direction,
the beta-39 assignment, the complete SME-39 design section, the current plan
entries, and the available batch-7, batch-36, and batch-39 evidence. The owner
direction makes `plan-statistical-models-experiments-track.md` controlling.
The SME-39 design and `plan-spec.json` agree on page IDs, titles, category,
order, required pages, model, theorem scope, and B example. Both plan-spec item
inventories were empty, so no item IDs or item dependencies were specified
there; the controlling design content was scaffolded as the three items in
the batch-39 manifest. This is an inventory omission, not a scope conflict.

| Item | Home | Direct dependencies | Level |
|---|---|---|---:|
| `def-batch-and-measurement-process-variation` | A | `def-linear-mixed-model`, `def-measurand-calibration-and-measurement-uncertainty`, `def-moments-variance-and-covariance`, `def-independent-random-elements`, `def-random-element-and-real-random-variable` | 3 |
| `thm-nested-batch-repeatability-covariance-and-mean-variance` | A | local definition, `def-moments-variance-and-covariance`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `thm-factorization-of-expectations-for-independent-variables`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-probability-measure` | 4 |
| `ex-day-specific-calibration-slope-drift-and-check-standards` | B | local definition, `def-measurand-calibration-and-measurement-uncertainty` | 4 |

The supplied task identifies batch 39 as level 3 with prerequisite batches 7
and 36. The actual current batch-level record still lists that row. The SME-07
`def-linear-mixed-model` item is level 2, and the SME-36 calibration definition
is level 1. Thus the local definition is level 3; the theorem and B example
are level 4. The authoring dependency graph has no cycle. MSF-01/MSF-02
estimand or estimator definitions are not needed because these items make no
inferential claim.

## Supplier review and mathematical scope

The actual `def-linear-mixed-model` draft body and its batch-7 manifest entry
were inspected. It declares a finite-dimensional centered mixed model with
square-integrable random effects/residuals and independence between their
vectors, without Gaussianity or a missingness assumption. Its current,
hash-bound Step-1 record was also checked and is `ready` with `owner: false`;
this is author readiness, not independent approval. The local definition
specializes that written interface and supplies explicit mutual independence
and common variances for the finite batch and repeat families. The current
`def-measurand-...` body and
its hash-bound `ready` record were inspected; the record is author readiness
(`owner: false`), not independent approval. The published probability, moment,
random-variable, independence, expectation-linearity, and independent-product
expectation suppliers were inspected. The covariance-bilinearity theorem was
also audited, but its transitive dependency closure includes
`def-axiom-of-choice`; it is not used. The authored covariance expansion
instead uses the centered-product definition, expectation linearity, and finite
product factorization. The logical transitive prerequisite closures over
`deps` and `justified_by` contain 329 items for the local definition, 410 for
the theorem, and 330 for the example; none contains `def-axiom-of-choice`.
`SCHEMA.md` defines `forward_refs` as links to later planned pages and forbids
using them as prerequisites, so those reference-only edges are excluded from
this axiom audit. The proof retains its choice-free scope.

The exact SME-07 supplier is `def-linear-mixed-model`; its written body and
current hash-bound author-readiness record were checked. The affected dependent
chain is `def-batch-and-measurement-process-variation`,
`thm-nested-batch-repeatability-covariance-and-mean-variance`, and
`ex-day-specific-calibration-slope-drift-and-check-standards`. No independent
acceptance is inferred.

The A-page model states its finite index domains, fixed process-condition
offset, nested batch/day/operator unit, repeat reading, common finite variances,
and joint independence. It distinguishes within-condition repeatability,
variation across explicitly named conditions, and temporal stability; it
limits random-effects generalization to a target population justified by the
sampling design. Crossed day/operator effects need a different model. A
calibration curve is pooled only under an explicit common-curve or equivalence
model. The covariance and replicate-mean formulas are proved from finite
covariance algebra; no Gaussian assumption, estimator, uncertainty interval,
or empirical adequacy claim is imported. The proof is choice-free.

The B example uses three stipulated stable standards and two exact day-specific
linear curves. It derives both slopes, expands and minimizes the six-point
least-squares objective, and calculates pooled residuals and inverse readings.
One reading per standard/day cannot estimate repeatability or uncertainty; the
example is deterministic and makes no empirical drift or inference claim.
Three standards are used because the NIST section on linear-calibration drift
describes monitoring with at least three check standards. This batch-39 B
example differs from SME-36's correlated reference-uncertainty calculation by
focusing on day-specific slope differences and check-standard residuals.

## Sources and retrieval

The A-page harvest uses the full NIST/SEMATECH Chapter 2 measurement-process
reference work and the full-text Duke STA610 Lecture 5 and Lecture 6 notes.
The complete documents were fetched; the relevant passages read were NIST
§§2.1.2, 2.4.3.2, 2.4.4.1–2.4.4.3, 2.4.5.3; Duke Lecture 5 §3.1 and §4.1;
and Duke Lecture 6 §2 and §§4.1–4.3. The Duke random-effects
examples include Gaussian models; the local proof does not import that
assumption. NIST's terminology varies by standard, so the definitions here
state their scope explicitly.

The B-page harvest additionally uses JCGM 100:2008 Annex H.3.1–H.3.3 for the
reference-temperature calibration setup, least-squares objective, and residual
check, and Duke Lecture 6 §§1.1–1.2 for differing group slopes and the
common-line pooling caution. The example does not import JCGM uncertainty
calculations, Duke likelihood/model-fitting procedures, or NIST control-chart
methods. Every harvested result read for these items and its disposition
appears in the coverage file.

`source-fetch-check --stamp` fetched and verified 6/6 full-text source entries:
NIST Chapter 2 (426 pages), Duke Lecture 5 (11 pages), Duke Lecture 6
(16 pages), and JCGM 100 (134 pages), with the NIST and Duke Lecture 6 entries
also listed on B. Each fetch succeeded on its first attempt. There were no
retrieval failures, dropped sources, or alternate-proof resolutions, so no
`source_resolution` record was needed. The exact retrieval stamps are in the
coverage file.

## Readiness and scoped checks

All three items have current `ready`, `owner: false` Step-1 records; direct
dependencies, placement, and contracts were recorded. The records do not
constitute independent approval.

Passing scoped checks:

- `manifest-deps`: 3 items, 0 missing dependencies.
- Focused `depcheck`: 3 selected items, 411 dependency-closure items and 166
  pages checked; 0 errors and 0 warnings.
- `content-policy`: 3 items; 0 errors and 0 warnings.
- `coverage-checklist`: 2 pages, 11 harvested results; 0 errors and 0 warnings.
- `source-fetch-check`: 6/6 sources fetch-verified and resolved.
- `precheck`: 3 item files, 2 proof-bearing checked, 0 failures.
- `rendercheck`: 5 changed item/page files checked; 0 errors and 0 warnings.
- Strict scoped proof contracts: 3 items checked; 0 errors and 0 warnings.
- Explicit changed-item `proof-layout`: 3 items, 7 proof steps, 0 defects.

Run-wide dependency checks still have owner handoff blockers:

- `batch-dependency-levels.mjs check --run
  statistical-models-experiments-62` reports stale shared batch-level input.
  The recorded row still lists batch 39 at level 3 requiring batches 7 and 36;
  the current shared artifact hash is
  `7f84c6f1a5a348487d1d90af7e7cc65e0dfcee34bf9cf7827c6239c4ac6cbe32`. The
  shared schedule must be recomputed and recertified by its owner; this worker
  did not write it.
- `item-dependency-levels.mjs check --run
  statistical-models-experiments-62` completed its graph calculation and
  reported no error for the three batch-39 items, whose levels match 3, 4, and
  4. It exited with unrelated errors in other batches: missing level for
  `lem-bounded-predictable-counting-integral-pathwise-identity`; stale levels
  for `lem-cox-partial-likelihood-hessian-convergence`,
  `lem-cox-score-martingale-replacement`,
  `thm-cox-score-limit-and-estimator-linearization`,
  `cor-cox-partial-likelihood-asymptotic-normality`,
  `def-random-field-stationarity-covariance-and-variogram`,
  `lem-random-field-covariance-kernel-is-positive-semidefinite`,
  `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel`,
  `thm-order-two-field-variogram-is-conditionally-negative-definite`,
  `thm-continuous-stationary-field-covariance-has-bochner-measure`, and
  `ex-covariance-kernel-and-intrinsic-variogram-checks`. These belong to other
  batches and were left untouched.

No plan conflict requiring owner resolution, mathematical cycle, unsupported
claim, or missing mathematical supplier body remains within batch 39. The
upstream mixed-model body's current author-readiness record is hash-bound and
current; no independent acceptance is inferred.
