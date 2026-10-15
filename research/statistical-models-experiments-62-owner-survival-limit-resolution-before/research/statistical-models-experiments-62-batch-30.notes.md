# Statistical Models and Experimental Methods — batch 30 notes

Run: statistical-models-experiments-62
Pair: counting-process-compensators-and-integrals / counting-process-compensators-and-integrals-examples
Batch dependency level from the supplied input: 0 (no prerequisite batches). Dispatch scheduling input: be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d.

## Plan comparison and conflict record

The controlling design is SME-30 at L224–225 of
research/plan-statistical-models-experiments-track.md. Its page IDs, category,
order 1976, scope, examples, and finite-horizon model contract are reflected
in the assigned pages and manifest. The plan requires an explicit square-
integrable martingale contract, continuous compensator, bounded predictable
step integrals, the finite-energy L² extension, and no-simultaneous-jump
cross-brackets. It expressly excludes a general compensator-existence claim
and says Brownian Itô integration cannot substitute for the local proof.

The generated task and plan-spec list brownian-motion-construction-and-
continuity, the-ito-integral-with-respect-to-brownian-motion, and conditional-
expectation as page prerequisites. The narrative design names the existing
continuous-time filtration/adaptation/predictability definitions plus
conditional expectation as the logical interface. The Brownian construction
page is retained because it contains those current continuous-time
definitions; the Brownian Itô page is omitted from this assigned manifest's
page-level requires because no proof or item uses its Brownian-integrator
construction. The exact local supplier IDs are declared in item deps and were
inspected. This records the task/plan-spec overstatement without importing an
Itô claim.

The task and design agree on the mathematical scope. The older models-04
dossier proposed an intensity criterion from an at-risk display; the current
controlling plan strengthens that interface to the explicit model contract
that N-A is a square-integrable martingale and E[A_T]<∞. The new definition
uses that stronger contract; no unresolved prerequisite remains.

## Inventory, logical dependencies, and levels

| Item | Home | In-batch suppliers | Level |
|---|---|---|---:|
| lem-continuous-finite-variation-martingale-is-zero | A | none | 0 |
| lem-bounded-stopping-preserves-cadlag-square-integrable-martingales | A | none | 0 |
| def-counting-process-intensity-and-compensator-contract | A | none | 0 |
| def-optional-and-predictable-brackets-for-counting-processes | A | def-counting-process-intensity-and-compensator-contract | 1 |
| def-elementary-predictable-counting-process-integral | A | def-counting-process-intensity-and-compensator-contract | 1 |
| lem-predictable-step-processes-dense-in-compensator-l2 | A | def-counting-process-intensity-and-compensator-contract | 1 |
| def-l2-counting-process-integral | A | def-elementary-predictable-counting-process-integral; def-counting-process-intensity-and-compensator-contract | 2 |
| lem-continuous-predictable-bracket-uniqueness | A | def-optional-and-predictable-brackets-for-counting-processes; lem-continuous-finite-variation-martingale-is-zero | 2 |
| lem-elementary-counting-integral-preserves-martingales | A | def-elementary-predictable-counting-process-integral | 2 |
| lem-finite-variation-integration-by-parts-for-counting-process-martingales | A | def-optional-and-predictable-brackets-for-counting-processes | 2 |
| thm-compensated-counting-process-brackets | A | lem-continuous-predictable-bracket-uniqueness; lem-elementary-counting-integral-preserves-martingales; lem-finite-variation-integration-by-parts-for-counting-process-martingales; lem-bounded-stopping-preserves-cadlag-square-integrable-martingales | 3 |
| thm-cross-brackets-vanish-under-no-simultaneous-jumps | A | def-optional-and-predictable-brackets-for-counting-processes; lem-continuous-predictable-bracket-uniqueness | 3 |
| lem-elementary-counting-process-integral-isometry | A | thm-compensated-counting-process-brackets; lem-elementary-counting-integral-preserves-martingales | 4 |
| thm-l2-counting-process-integral-isometry | A | lem-elementary-counting-process-integral-isometry; lem-predictable-step-processes-dense-in-compensator-l2; def-l2-counting-process-integral | 5 |
| ex-delayed-entry-predictable-risk-process | B | def-counting-process-intensity-and-compensator-contract | 1 |
| ex-tied-jumps-produce-nonzero-cross-bracket | B | thm-compensated-counting-process-brackets; def-optional-and-predictable-brackets-for-counting-processes | 4 |
| ex-one-event-exponential-compensator-and-isometry | B | thm-compensated-counting-process-brackets; lem-elementary-counting-process-integral-isometry | 5 |

All direct external item suppliers are declared in the carriers. They are
current existing library items; direct continuous-time martingale, filtration,
predictability, conditional-expectation, L², measure, stopping, Doob, monotone-
convergence, finite Cauchy–Schwarz, and Heine–Cantor suppliers were inspected
for their exact hypotheses and conventions. No
logical supplier belongs to another batch of this run, so the cross-batch
input is empty and the supplied run-level graph leaves batch 30 at level 0.
The item-level levels are recomputed from the manifest and account for every
in-batch dependency; no cycle was found.

## Mathematics and source disposition

The A page defines a simple unit-jump process, at-risk indicator, predictable
intensity density, continuous compensator, and a model contract. It does not
claim that a hazard/intensity display alone makes N-A a martingale. The
optional bracket is the jump-square sum in this finite-variation model; the
predictable bracket is restricted to the continuous compensator class.

The local proof builds bracket existence from a stopping argument and a
finite-variation partition identity. It proves the bounded-step martingale
property and isometry by conditional variance and orthogonal increments,
proves density for the finite compensator measure, and completes only the
predictable finite-energy domain in L². The cross-bracket theorem assumes a
common filtration and no simultaneous jumps, with no independence premise.
The examples verify the exponential one-event model, delayed-entry endpoint
convention, and a tied-jump case where both cross brackets are nonzero.
No general semimartingale integral, unbounded-energy claim, general
compensator existence, functional martingale limit, or process-level limit is
asserted.

The A page has multiple independent full-text treatments: Stanford STAT331
Units 8–10, Bass's 54-page Cornell lecture notes, and the 38-page Andersen–
Borgan–Gill–Keiding report. Mai Zhou's 35-page notes are supplemental only.
Exact source locators, each harvested result, and its item/disposition are in
research/statistical-models-experiments-62-batch-30.coverage.json. No selected coverage source had a failed retrieval or a drop disposition. Three
unverified draft bibliography entries were removed because this pair had no
reading evidence for the cited ranges: van der Vaart, Theorem 2.42; Hunter,
Theorems 7.10–7.11; and the CWI report’s Example 4.1, PDF pp. 24–25. No claim
depends on those citations; the relevant results are proved locally, and the
remaining sources meet the independent-treatment requirement. They were not
retrieval failures or selected coverage sources, so no source_resolution
recovery record was applicable.

## Check results

- Manifest consistency: 17 explicit dependency arrays; all item frontmatter
  dependencies and `justified_by` entries match the batch manifest. A page has
  14 items and B page has 3 examples, below the 100-item cap.
- Scoped dependency levels: 17 items, no cycles or label mismatches; levels
  range 0–5 as tabulated above. Batch 30 remains level 0 with no prerequisite
  batches; its cross-batch dependency input is `[]`.
- `precheck.mts` through `tools/tsx-run.mjs`: 13 proof-bearing items passed;
  the 4 definitions were not applicable. Every proof item records
  `verification.precheck: pass`.
- `proof-contract.mjs --strict`: 17/17 items, 0 errors, 0 warnings; contracts
  contain 40 numbered derivations and exact excerpts for linked supplier
  statements/definitions. No finite-smoke registry check applies to these
  general pathwise and analytic arguments, so `finite_checks` is empty.
- Explicit `proof-layout.mjs` on all 17 changed items: 40 steps, 0 defects.
- Scoped `rendercheck.mjs`: 19 files (17 items and 2 pages), 0 errors,
  0 warnings. Scoped `depcheck`, `fwdcheck`, and `extcheck`: 0 errors and
  0 warnings; no unresolved dependencies or open forward references.
- `manifest-deps.mjs`: 17 items, no missing dependency arrays or errors.
  `content-policy.mjs` on the batch manifest: 17 items, 0 errors, 0 warnings.
- `coverage-checklist.mjs --require-destination`: 24 harvested results,
  0 errors, 0 warnings. `source-fetch-check.mjs --stamp`: 6/6 full-text
  sources verified, all 6 newly stamped; the subsequent check also passed.
  Stamps are recorded in the coverage file: Stanford Units 8/9/10 (81,161 /
  132,741 / 54,275 bytes; 21 / 14 / 16 pages), Bass (307,234 bytes; 54 pages),
  Andersen–Borgan–Gill–Keiding (7,702,765 bytes; 38 pages), and Mai Zhou
  (389,115 bytes; 35 pages). No recovery attempts or source drops were needed.
- Scoped whitespace scan over assigned items, pages, manifest, coverage,
  contracts, notes, and cross-batch input: no trailing whitespace.

A read-only full-run `node tools/item-dependency-levels.mjs check --run
statistical-models-experiments-62` does not pass yet because other batches still
contain empty scaffold inventories and level labels that do not match their
current dependencies. The empty A/B inventories are for: multivariate-normal-
Wishart-hotelling, principal-components-and-eigenspace-stability, mixed-effects-
and-longitudinal-models, horvitz-thompson-variance-and-srswor, stratified-
sampling-and-allocation, cluster-and-two-stage-sampling, full-factorial-
contrasts-and-interactions, fractional-factorial-aliasing-and-foldover,
response-surfaces-and-optimal-design, power-and-sample-size-planning,
biological-and-technical-replication, mediation-effects-and-identification,
interference-exposure-mappings-and-design-based-effects, parametric-survival-
and-reliability, logrank-and-weighted-logrank, cox-ph-and-partial-likelihood,
competing-risks-and-cumulative-incidence, measurement-batch-and-process-
variation, spectral-measures-and-periodogram-bias, arma-causality-invertibility-
and-spectra, linear-prediction-for-dependent-data, state-space-models-as-
probability-laws, random-fields-covariance-and-variograms, spatial-field-
summary-estimators, kriging-as-best-linear-prediction, spatial-point-process-
summaries-and-palm-laws, finite-window-spatial-point-process-likelihoods,
temporal-point-process-intensity-and-likelihood, and fdr-control-under-
dependence (and each `-examples` companion). The same run-wide check reports
stale levels for thm-exact-gaussian-linear-regression-inference (3 vs computed
4), thm-gaussian-regression-confidence-and-prediction-intervals (4 vs 5),
ex-gaussian-regression-mean-and-prediction-intervals (5 vs 6),
thm-standardization-identifies-a-causal-mean (1 vs 3),
thm-inverse-probability-weighting-identifies-a-causal-mean (1 vs 2),
ex-standardization-and-ipw-two-strata-calculation (2 vs 4),
ex-extreme-ipw-weights-under-poor-overlap (2 vs 3), and
ex-weight-truncation-changes-the-ipw-target (2 vs 3). These are outside batch 30
and left untouched; the scoped batch-30 level calculation and all its readiness
inputs pass.

Readiness records bind the finished items and examined direct dependency IDs;
they are authoring records, not independent approval.
