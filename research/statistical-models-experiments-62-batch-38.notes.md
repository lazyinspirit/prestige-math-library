# Statistical models and experiments — batch 38 notes

## Scope and controlling instructions

This batch authors the `method-agreement-and-limits` A/B pair only. The controlling owner direction and current track plan were read before drafting. The current plan controls over the historical SME-38 dossier and older task/design wording. The A-page `requires` list in the batch manifest matches both `plan-spec.json` and the dispatch. The B page requires its A page.

The live `.autopilot/statistical-models-experiments-62` status was recomputed from disk. Stage `1-scaffold` is held for owner repair and recertification; no workers are in flight. Its current blocker lists units 21 and 54 as artifact-incomplete, not this batch. Recent `git log` entries show continuing run/engine activity; no RESUME file was used as a live-state source. This batch did not edit autopilot state, shared plans, published pages, or verdicts.

## Inventory, dependencies, and levels

Batch 38 has four items on the A/B pages below. Levels were recomputed from the manifest’s item dependencies; there are no in-batch cycles. Published/out-of-run prerequisites do not increase an item’s level.

| Item | Page | In-run dependency | Level |
|---|---|---|---:|
| `def-method-agreement-and-limits` | A | none | 0 |
| `thm-normal-difference-agreement-limits` | A | `def-method-agreement-and-limits` | 1 |
| `ex-correlation-without-agreement` | B | `def-method-agreement-and-limits` | 1 |
| `ex-repeated-method-differences-have-random-intercept-covariance` | B | `def-method-agreement-and-limits` | 1 |

The full item dependency arrays are in `statistical-models-experiments-62-batch-38.pages.json`. They include the probability, normal-law, covariance, finite-expectation, independence, and measurability suppliers used by the complete proofs. Supplier statements and relevant proofs were inspected in the published probability and weak-convergence pages. The normal-law supplier declares the Axiom of Choice; the theorem carries that assumption and the required normal-density, measure, calculus, and choice dependencies. No unproved supplier was used.

At page level the pair is batch dependency level 1 and requires prerequisite batch 1. The current batch dependency graph still gives batch 38 level 1 with batch 1 as its prerequisite. Recomputing from current manifests gives input SHA-256 `38852934e8b432483957fa25f6e5c0b1a3d000476aba5ac2ea0a4104be5bad70`; the stored shared dependency artifact has SHA-256 `3ecd0117a9d101092012a6ef52951d7ae10a9e6b0e59d63ff25d96b672984ebc`. The graph/levels are unchanged, but the digest is stale as other manifests change. The shared artifact was left to its owner to refresh.

## Open supplier interface and readiness

The required batch-1 page `scientific-statistical-model-contracts` currently has an empty item inventory and no body to inspect. The SME-38 plan names SME-01 but supplies no exact item ID, so this batch does not invent one. The page-level edge is recorded as `open` in `statistical-models-experiments-62-batch-38.cross-batch-dependencies.json`.

The unresolved supplier must establish the scientific-model contract for the declared target population and measurement-condition law, confirm that methods A and B are paired on the same target, and specify how observed pairs represent that population. These unresolved checks affect the definition’s target-population setup and sample plug-in interpretation, and the normal theorem’s interpretation for the paired difference. The examples are complete finite probability models, but remain within the same page-level prerequisite chain. All four `step1-decisions` records are therefore `escalated`, with the examined dependencies and missing evidence stated; none is marked ready or accepted. Reconcile against the actual batch-1 body before changing those decisions.

## Plan comparisons and mathematical choices

The current SME-38 plan assigns raw paired differences, population bias and standard deviation, normal-reference limits, sample plug-in limits, and warnings about repeated-measure dependence, correlation, calibration, and endpoint confidence coverage. The older historical dossier suggests a narrower approximately-normal iid treatment and adds log-ratio material. Those differences were resolved in favor of the current plan: the drafts retain the raw-difference scope, include an explicit repeated-measure dependence example, and make no endpoint confidence-coverage claim. No log-ratio, clinical acceptability, repeatability coefficient, or graphical diagnostic claim was added.

The plan describes `1.96` as the exact normal quantile. Mathematically, the exact central 95% normal quantile is `z_.975 = Phi^{-1}(.975)`, approximately `1.959963984`; `1.96` is its conventional rounded display. The definition records the customary rounded limits, while the local theorem proves the exact quantile formulas and states the rounding distinction. For zero standard deviation, the distribution is a point mass: both quantiles equal the mean and the singleton has probability 1, not .95. No shared plan edit was made.

The definition fixes `D=A-B`, requires only `D` to be square-integrable, and states measurability and `n >= 2` for the sample standard deviation. The theorem proves the quantile claim for positive scale and handles the degenerate zero-scale boundary separately. The B examples verify (i) perfect correlation with constant nonzero offset and collapsed limits, and (ii) repeated differences with a shared random intercept, covariance 1, and an explicit event-probability witness to dependence.

## Source record

Two complete, separately published and fetch-stamped treatments back the A page, including a book section:

- J. M. Bland and D. G. Altman, “Statistical methods for assessing agreement between two methods of clinical measurement,” *The Lancet* 1986, 327(8476), 307–310. Complete 9-page PDF, pp. 1–9; paired differences, bias, normal-reference limits, sample/population distinction, and repeated measurements. URL: <https://www-users.york.ac.uk/~mb55/meas/ba.pdf>. Fetch stamp verified.
- M. Bland, *An Introduction to Medical Statistics*, 4th ed., Oxford University Press, 2015, Chapter 20 §20.5, PDF pp. 324–326. Paired measurements, mean and standard deviation of differences, the normality condition, rounded `d-bar ± 1.96s` estimate, and application-specific interpretation. URL: <https://faculty.ksu.edu.sa/sites/default/files/An-Introduction-to-Medical-Statistics-Martin-Bland.pdf>. Fetch stamp verified.

The coverage ledger assigns supported results to items and records every harvested result’s disposition. The complete Giavarina 2015 review was downloaded and inspected, but the official journal PDF returned HTTP 403 on the initial attempt and all five permitted recovery retries. Two searches found HRČAK and PMC mirrors; no sixth attempt was made. Its history, alternatives, and item-by-item local proof/dependency arguments are retained in `source_resolution` in the coverage JSON. The source is documented as dropped from active backing; this waives no mathematical coverage. The fetch check reports 2/3 stamped and 3/3 resolved (one documented drop).

## Checks and handoff

- `author-check.mts statistical-models-experiments-62 38`: passed; generated evidence reports precheck (3 proof files, 0 failing), rendercheck (6 files, no errors), content policy (4 items, 0 errors/warnings), and strict proof contract (4/4, 0 errors/warnings).
- `proof-layout.mjs` on the four explicit item files: 4 items, 12 steps, 0 defects.
- `proof-contract.mjs --strict`: 4/4 items, 0 errors, 0 warnings.
- Scoped `depcheck`: 0 errors, 0 warnings; dependency closure 937 items and 134 pages.
- Scoped `fwdcheck`: 0 errors, 0 warnings; one inherited `restingOnLaterMaterial` annotation reaches the theorem through its dependency closure, with no open or closed forward references in the scoped result.
- Scoped `extcheck`: 4 items, 0 unproved items, 0 errors/warnings.
- `coverage-checklist --require-destination`: 0 errors and one `coverage-low-yield` warning (7/26 results scaffolded). The declined results are itemized with reasons in coverage; Alpha/owner should confirm the out-of-scope dispositions.
- `source-fetch-check --coverage`: 2/3 sources fetch-verified; 3/3 resolved with one documented drop.
- `manifest-deps` and the batch-local dependency-level recomputation: 4 items, correct levels 0/1/1/1, no cycles or errors.
- `prosecheck` on these notes: 0 errors and 9 heuristic `count-in-prose` warnings.
- JSON parse on the assigned manifest, contracts, coverage, cross-batch record, author-check evidence, and two sampled decision records: pass.

The authored pages, item files, manifest, coverage, contracts, cross-batch edge, and four escalated decisions are draft scaffolding for owner reconciliation. These checks are not independent approval, acceptance, or publication.
