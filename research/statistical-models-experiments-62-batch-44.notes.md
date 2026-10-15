# Batch 44 — authoring and evidence notes

## Inventory and dependency levels

The assigned pair is `state-space-models-as-probability-laws` /
`state-space-models-as-probability-laws-examples`. The manifest contains five A
items and two B examples:

| Level | Items | In-run logical suppliers |
|---:|---|---|
| 0 | `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal` | none |
| 1 | `def-general-state-space-model-by-kernels` | `def-scientific-statistical-model-contract`; `def-strict-and-weak-stationarity-for-time-series` |
| 2 | `thm-finite-horizon-state-space-kernel-law-exists-uniquely`; `def-linear-gaussian-state-space-model-with-independent-noises` | `def-general-state-space-model-by-kernels` |
| 3 | `thm-linear-gaussian-state-space-path-law-is-jointly-gaussian` | `def-general-state-space-model-by-kernels`; `def-linear-gaussian-state-space-model-with-independent-noises`; `thm-finite-horizon-state-space-kernel-law-exists-uniquely`; `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal` |
| 4 | `ex-state-space-model-same-dynamics-distinct-observation-kernels`; `ex-linear-gaussian-singular-state-covariance-positive-innovation-covariance` | the local finite-horizon law, linear-Gaussian definition, and path-law theorem as listed in each manifest item |

The scoped calculation traversed nine in-run items, including the two level-0
suppliers, and found no cycle or label mismatch. All seven assigned labels
match their in-run logical dependency levels. Direct and transitive published
dependencies remain explicit in the manifest and item frontmatter.

The current SME-44 plan makes the finite-horizon standard-Borel kernel law the
general model contract, then separately specifies an independent-noise
linear-Gaussian subclass. The finite-law theorem lifts each transition and
observation kernel along history-coordinate projections, appends singleton
tails, and applies Ionescu–Tulcea. The Gaussian theorem constructs a finite
product noise law, verifies the translated kernels, identifies the exact
kernel-product law by Tonelli, and uses affine characteristic functions and
Cramér–Wold. Singular covariance is retained throughout. The two B examples
distinguish observation kernels by cross-covariance and show zero predicted
state covariance alongside positive innovation covariance. AC is declared
where the Gaussian, uniqueness, Cramér–Wold, and Ionescu–Tulcea suppliers use
it; finite-product standard-Borel closure and the finite product-measure step
are not assigned extra choice assumptions. No DC branch is introduced.

## Design comparison and recorded conflicts

The current plan section SME-44 and `plan-spec.json` agree on both page IDs,
orders 2004/2005, category, titles, companion links, and page requirements.
The `items: []` arrays in `plan-spec.json` are the pre-authoring inventory
placeholders; the seven authored items and their dependencies are in the
assigned batch manifest. No shared plan was edited.

The older models-05 dossier has broader, stale state-space/HMM language. The
controlling SME-44 plan narrows this pair to the finite-horizon kernel law and
the stated independent linear-Gaussian subclass, with no filtering procedure,
posterior recursion, or convergence result. That plan controls. The SME-44
audit identifies BCS-38/39 as direct downstream consumers of the two named
definitions; they are not suppliers for this pair, and no consumer acceptance
is claimed. The transitive BCS-40–45 links add no filtering or convergence
claim here.

## Supplier checks

The actual bodies and proofs for the in-run suppliers
`def-scientific-statistical-model-contract` (batch 1) and
`def-strict-and-weak-stationarity-for-time-series` (batch 40) were inspected;
both have current ready records. Their relevant contents are the model-contract
context and the distinction between strict stationarity and a finite-horizon
law. No stationarity assumption is imposed on this state-space model.

The cited published supplier bodies and relevant proofs were checked for the
AC convention; standard-Borel and finite-product sigma-algebra definitions;
probability kernels and kernel integration measurability; product measures and
Tonelli; Ionescu–Tulcea existence and uniqueness; independence and product
joint laws; multivariate and scalar Gaussian laws including zero-variance and
singular cases; characteristic-function identities and uniqueness; Cramér–
Wold; expectation factorization; and covariance and moment identities. The
complete local proof arguments, rather than source citations, carry the
claims. The general definition states its model contract and points to the
local theorem for existence and uniqueness.

## Source reading and retrieval

Two independent full-text course-note treatments were used for the A and B
pages:

- Meinshausen, [Time Series Analysis: Notes for the course HS 2022](https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf), complete 57-page PDF. The complete state-space section 4.1 was inspected at PDF pages 46–48 (printed pages 45–47), including the kernel/density factorization, linear equations, AR embedding, and filtering boundary.
- Wang, [STAT 720 Time Series Analysis](https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf), complete 150-page PDF. Section 9.1 was inspected at PDF pages 146–150 (printed pages 143–147), including equations (9.1)–(9.4), its cross-covariance assumptions, and the state-space examples.

Wang's cited assumptions give zero cross-covariances; SME-44 requires mutual
independence. The items state and use the stronger plan hypothesis explicitly
and never infer independence from uncorrelatedness. The ETH direct browser open
initially failed; a search located the full-text PDF, which was fetched and the
relevant section inspected. The Wang PDF fetch succeeded directly. The coverage
file records source URLs, locators, 13 harvested results, and a disposition for
each. The `source-fetch-check --stamp` pass fetched the full PDFs and wrote
fetch receipts; the final check-only pass verified all four page/source
entries, with zero drops. No source-resolution waiver or mathematical coverage
waiver was needed.

## Scoped checks

| Check | Result |
|---|---|
| `proof-contract.mjs ... --strict` | 7/7 items; 0 errors, 0 warnings |
| scoped `precheck.mts` | 5 proof-bearing items passed; definitions not applicable |
| `proof-layout.mjs` on all seven changed items | 7 items, 16 steps, 0 defects |
| `rendercheck.mjs` on seven items and two pages | 9 files, no errors or warnings; all math parsed with KaTeX and all frontmatter parsed |
| `manifest-deps.mjs` and `content-policy.mjs` | 7 items; 0 errors or warnings |
| `coverage-checklist.mjs` | 2 pages, 13 harvested results; 0 errors or warnings |
| `source-fetch-check.mjs --coverage ...` | 4/4 source entries fetch-verified; 0 documented drops |
| focused `depcheck`, `fwdcheck`, `extcheck` | all selected item/page and cycle checks passed |
| scoped item-level calculation | all 7 declared levels matched; 9-item in-run closure, 0 closure errors |

The run-wide `item-dependency-levels.mjs check` currently reports 20 unrelated
errors and none in batch 44: six empty page inventories (`power-and-sample-size-planning`,
its examples page, `spatial-field-summary-estimators`, its examples page,
`kriging-as-best-linear-prediction`, and its examples page); one stale label
(`def-central-composite-design`, 1 declared/2 computed); two items with missing
or invalid labels (`lem-active-routes-in-a-finite-dag-have-active-paths` and
`lem-conditional-independence-under-kernel-extension-and-conditioning`); and
these stale labels: `thm-standardization-identifies-a-causal-mean` (1/3),
`thm-inverse-probability-weighting-identifies-a-causal-mean` (1/2),
`ex-standardization-and-ipw-two-strata-calculation` (2/4),
`ex-extreme-ipw-weights-under-poor-overlap` (2/3),
`ex-weight-truncation-changes-the-ipw-target` (2/3),
`def-random-field-stationarity-covariance-and-variogram` (0/1),
`lem-random-field-covariance-kernel-is-positive-semidefinite` (1/2),
`thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel`
(1/2), `thm-order-two-field-variogram-is-conditionally-negative-definite`
(1/2),
`thm-continuous-stationary-field-covariance-has-bochner-measure` (2/3), and
`ex-covariance-kernel-and-intrinsic-variogram-checks` (2/3). These require
run-owner reconciliation; no other pair's manifest or item was edited.

The assigned dispatch input digest is
`e49613901563fb05077ad47645c7d8b78fa4bf49bfe591d549c271565eb1e2f3`.
Batch 44 remains level 2 with prerequisites 1 and 40. The shared artifact
currently stores digest `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`,
while a read-only recomputation gives
`f9b59566d39ddf3854fb3a9acdb1b3136d53def963f85b318a84ea6179238442`.
Accordingly, `batch-dependency-levels.mjs check` reports the shared artifact
stale. It was not rewritten.

The live `.autopilot/statistical-models-experiments-62` state records stage
`1-scaffold`, controller PID 780354, 37 authored out of 62 dispatched pairs,
and 25 remaining. Its pending list includes focused resolutions for SME-08,
SME-13, SME-23, and SME-32; recent events still report stage `1-scaffold`.
The 2026-10-15 Git history contains scheduling-fix commits, not a run closeout.
This confirms the run is still active without relying on a RESUME file.

The run blocker evidence at
`research/statistical-models-experiments-62-step1-blockers.json` records stage
`1-scaffold`, failure `stage-stalemate`, and units 20, 21, 8, 13, and 32 as
covered but artifact-incomplete and no longer running. This is an owner-level
run blocker; no engine or shared state was changed.

An initial `step1-decisions.mjs record` attempt found the unrelated batch 33
manifest temporarily malformed at line 245, column 9. A later attempt loaded
the run snapshot successfully and recorded all seven items `ready` with
`owner: false`, using their direct manifest dependencies. The focused
hash/readiness check reports all seven records closed against the current item
and supplier inputs. The batch 33 manifest was not edited. These records report
completed authoring checks and do not constitute independent approval.
