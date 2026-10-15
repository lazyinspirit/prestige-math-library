# Batch 35 authoring notes — statistical-models-experiments-62

## Scope and plan comparison

The controlling design is `research/plan-statistical-models-experiments-track.md` §SME-35. It calls for first-event/cause data, all-cause survival, cause-specific hazard measures, cumulative incidence, the survival-weighted hazard decomposition, and the finite Aalen–Johansen update. It excludes limit theorems and warns that observed competing events are not censoring for the target cause-specific incidence and that latent joint event-time laws need not be identified. The six authored items retain that scope.

`research/plan-spec.json` contains the assigned A/B page identities and requirements but lists `items: []` for both pages. This is an inventory omission, not a competing mathematical specification. The task and controlling design supply the scope; this batch manifest now lists the four A items and two B items needed for the design, including a local fixed-time measurability lemma and a two-law latent-time counterexample. No substantive formula conflict with §SME-35 was found. The pages remain below the 100-item cap.

## Inventory, dependency levels, and suppliers

The assigned pair requires pages 28, 30, and 32. The current batch dependency record assigns level 3 and those same prerequisite batches. Item levels were recomputed from the current run manifests; all six declared labels agree:

| Level | Items |
| --- | --- |
| 1 | `def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence` |
| 2 | `thm-cause-specific-cumulative-incidence-decomposition`, `alg-aalen-johansen-cumulative-incidence-estimator`, `cex-observed-first-cause-does-not-identify-latent-failure-times` |
| 3 | `lem-aalen-johansen-fixed-time-output-is-a-statistic`, `ex-competing-event-risk-versus-cause-incidence` |

I inspected the current supplier bodies and Step 1 records. `def-event-time-observation-schemes` is ready and fixes $U=\min(T,C)$ and $\delta=\mathbf1\{T\le C\}$, including an event at a censoring tie. `def-counting-process-intensity-and-compensator-contract` is ready; its martingale/compensator hypotheses are not used. The Nelson–Aalen/Kaplan–Meier definition is ready and uses the same risk set and tied-event grouping, but its product-limit interval is $(0,t]$; the design's possible baseline event is handled explicitly at $u=0$, and the formulas agree when no baseline event occurs. The published IID and independence definitions supply the population-sampling and independent-censoring language. The model/estimand/identifiability definitions supply the exact same-law/different-target criterion for the B counterexample. The dependency evidence and exact item edges are in `research/statistical-models-experiments-62-batch-35.cross-batch-dependencies.json`.

The competing-risk definition gives a measurable smallest-label tie-break on the null set of nonunique minima, makes no independence assumption on latent event times, and follows the library's event-at-censoring convention. The hazard-measure identity is proved directly from the event-law measure and a nonnegative density; it does not use a general Lebesgue–Stieltjes extension theorem or countable choice. The Aalen–Johansen item is a finite-sample procedure; its usual population setup explicitly states IID subjects, independent censoring, and $\mathbb P(C\ge t)>0$. No consistency, variance, compensator, martingale-bracket, or process-limit result is asserted. The source slides use a strict $T<C$ censor indicator in one convention; where this differs, the authored definitions follow the inspected library supplier's $T\le C$ convention.

## Sources and retrieval evidence

Both pages have three independent treatments, including two full lecture treatments. Full retrieval records, locators, supported items, and every harvested result's disposition are in `research/statistical-models-experiments-62-batch-35.coverage.json`.

| Source | Inspected locator and use | Fetch stamp |
| --- | --- | --- |
| Tian and Olshen, Stanford STAT331 slides | Full 25-page deck; pp. 2–8, 12 for first-event quantities, continuous decomposition, Aalen–Johansen structure, nonidentifiability, and the $1-$KM warning. | 76,686 bytes; SHA-256 prefix `f77b9a519481a09b` |
| Pitkäniemi and Läärä, University of Tartu lecture notes | Full 117-page PDF; complete competing-risks section, slides 13–24, for event-specific quantities, competing-hazard dependence, net-risk warning, and Aalen–Johansen. | 1,534,933 bytes; SHA-256 prefix `406dbd48f9b112be` |
| Austin, Lee, and Fine, *Circulation* 133(6) | Full PMC article; Introduction, “Estimating Crude Incidence,” and “Hazard Function Regression” for the observed CIF and interpretation. Local proofs supply the atom-inclusive identity and exact finite procedure. | 161,426 bytes on each page reference; A SHA-256 prefix `06ade01922587df9`, B `dc574ad23bad69a7` |

All six page/source references have successful fetch stamps and `source-fetch-check` passes 6/6. There were no retrieval failures or dropped sources, so no recovery escalation was needed.

## Checks and readiness

- Scoped `depcheck`: 6 items and 2 pages checked; 0 errors and 0 warnings.
- Scoped content policy: 6 items; 0 errors and 0 warnings.
- `proof-contract.mjs --strict`: all 6 contracts pass, with exact supplier excerpts, mapped proof steps, and boundary dispositions.
- `precheck.mts`: all 4 proof-bearing items pass; definition and algorithm items are `precheck: n/a`.
- `proof-layout.mjs` on all six changed items: 14 steps, 0 defects.
- `rendercheck.mjs` on the six items and two pages: all 8 files pass.
- Focused item-level recomputation: all six declared levels equal their computed levels; no batch-35 dependency errors or cycles.
- All six `step1-decisions` records are `ready`, non-owner records. Their hashes were checked against the current run inventory and dependency closure.

The whole-run item-level check still reports unrelated defects in `lem-bounded-predictable-counting-integral-pathwise-identity` (missing level), `lem-cox-partial-likelihood-hessian-convergence`, `lem-cox-score-martingale-replacement`, `thm-cox-score-limit-and-estimator-linearization`, `cor-cox-partial-likelihood-asymptotic-normality`, `def-random-field-stationarity-covariance-and-variogram`, `lem-random-field-covariance-kernel-is-positive-semidefinite`, `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel`, `thm-order-two-field-variogram-is-conditionally-negative-definite`, `thm-continuous-stationary-field-covariance-has-bochner-measure`, and `ex-covariance-kernel-and-intrinsic-variogram-checks`. No batch-35 item is among those errors.

The whole-run batch dependency check reports a stale hash-bound input. Its stored `input_sha256` is `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`; recomputation from current manifests gives `e429bf2bc8c98c548b2c74a8ea06aaf08f6798254cb209905721afd8fbe46545`. The recomputed graph still assigns batch 35 level 3 with prerequisites 28, 30, and 32. The run-level dependency record was left to the owner. The run-wide Step 1 check remains open (510 items, 380 ready); each of this batch's six item records is closed and current. These completion records are author readiness evidence, not independent approval.
