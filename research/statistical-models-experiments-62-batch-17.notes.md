# Batch 17 authoring notes — Power and sample size

Run `statistical-models-experiments-62`; assigned pair: `power-and-sample-size-planning` / `power-and-sample-size-planning-examples`.

## Controlling inputs and conflict record

- Read `CLAUDE.md`, `SCHEMA.md`, the complete `WORKFLOW.md`, the assigned SME-17 section in `research/plan-statistical-models-experiments-track.md`, `research/plan-spec.json`, and the owner authoring direction. The owner direction controls over stale audit/task material.
- SME-17 requires the size/power/type-II-error and effect/precision planning definitions, allocation and sidedness, feasible positive integer sizes, a least-feasible-size rule, and the exact known-variance one-sided normal z-test result, including the nonpositive quantile-sum case. It requires both tails in two-sided power and separate derivations for unknown-variance t procedures or other laws.
- The machine plan specifies the same pair IDs, order 1950, title, companion, and exactly four page prerequisites: `finite-populations-and-sampling-designs`, `randomized-treatment-assignment-and-sharp-null-tests`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, and `weak-convergence-tightness-and-representation`. No design/plan-spec conflict was found. The finite-list search is explicitly a separate algorithm; it does not claim to terminate with `none` for an unbounded candidate set.
- An earlier pair audit described `def-test-size-and-power` as planned but inactive. The current published item exists and was read; current proofs cite that actual item. This is stale audit evidence, not a reason to omit the prerequisite.
- The current dispatch scheduling input is `386e4ae06977e377b90dd7236b8bc21e4477e0cf0b4791e5511c16d11a581f99`, while the shared dependency-level artifact records `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6` as its `input_sha256`. The mismatch is recorded here; the shared artifact was not edited. That artifact independently lists batch 17 at level 3 with prerequisite batches 8 and 12.

## Item inventory and in-run dependency levels

The `pages.json` manifest was built from these item frontmatters and page inventories. Levels count only in-run item dependencies; external published suppliers and required pages do not raise an item level.

| Level | Items |
|---|---|
| 0 | `lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power`; `lem-iid-normal-sample-mean-law`; `lem-least-feasible-sample-size-exists` |
| 1 | `def-power-and-sample-size-planning-specification`; `prop-known-variance-normal-two-sided-z-test-power` |
| 2 | `alg-finite-candidate-power-sample-size-search`; `thm-known-variance-normal-z-test-power-and-minimum-sample-size`; B item `ex-two-sided-normal-z-power-includes-both-tails` |
| 3 | `thm-finite-candidate-power-sample-size-search-correctness`; B item `ex-known-variance-normal-z-sample-size-and-sensitivity` |

The general least-positive-integer lemma depends only on `def-natural-numbers` and `thm-well-ordering-principle`; the planning definition depends on that lemma. This removes a potential definition/lemma cycle. In-run dependencies and labels are recorded item-by-item in `research/statistical-models-experiments-62-batch-17.pages.json`. A-page and B-page inventories are ordered by dependency level.

## Supplier and mathematical scope checks

- Inspected the actual batch-8 finite-population A items and batch-12 assignment/sharp-null A items, including their proofs. These are design-based prerequisites and do not assert Gaussian errors. The local normal theorem separately assumes iid normal observations and known positive standard deviation.
- Inspected the actual published finite-sample test definitions and weak-convergence normal-law items. The actual test-size definition uses the supremum over the stated nonempty null set. No CLT or weak-convergence result is used as a substitute for the exact finite-sample normal calculation.
- The exact normal sample-mean law is proved locally from the characteristic functions of independent normal variables and uniqueness. The CDF, quantile, atomlessness, and tail-symmetry facts are proved locally, including the declared AC/CC use needed for the zero-width-set argument. The generic planning definition covers empty feasible sets, zero components in allocation vectors, integer total size at least one, sidedness, test targets in `[0,1]`, and measurable precision intervals with explicit probability targets.
- Oehlert, Chapter 7, was read in full (printed pp. 149–162/PDF pp. 169–182). The relevant NIST section was read from its official HTML source; its official full PDF was fetch-verified and stamped. Durrett §3.3.1–3.3.2 and the cited normal characteristic-function/uniqueness passages were inspected in full. Harvested source findings and dispositions are in `coverage.json`.

## Source retrieval and verification record

`node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-17.coverage.json --stamp --timeout-sec 45` returned `3/3 source(s) fetch-verified (3 newly stamped)` and `3/3 source(s) resolved (0 documented drops; not fetch stamps)`. The NIST web PDF viewer initially refused display because of response size; its complete official HTML section was inspected and the full-PDF fetch stamp succeeded. This was not a dropped or unresolved source.

## Required scoped-check results

- Local dependency calculation on this batch manifest: all 10 labels equal their recomputed levels; maximum level 3.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-17.proof-contracts.json --strict`: passed, 10/10 items, zero errors and warnings.
- `node tools/tsx-run.mjs tools/precheck.mts --json` on the 10 assigned items: 8 proof-bearing items passed, 2 non-proof items were not applicable, zero failures.
- `node tools/proof-layout.mjs` on all 10 assigned items: 10 items, 24 proof steps, zero defects.
- Final `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-17.coverage.json --stamp --timeout-sec 45`: 3/3 sources fetch-verified, 3/3 resolved, zero drops.
- An initial run-wide check briefly encountered malformed JSON in `research/statistical-models-experiments-62-batch-42.pages.json` at line 244, column 9; the final checks parsed the file, and it was not edited here. All 10 required `step1-decisions.mjs record --decision ready` attempts then succeeded with `owner:false`; each direct dependency list was recorded. `step1Decision` confirms all 10 records are current-hash ready records.
- Final full-run `item-dependency-levels.mjs check` parsed the inventory but reported pre-existing labels outside Batch 17: `lem-bounded-predictable-counting-integral-pathwise-identity` has no valid nonnegative integer label; `lem-cox-partial-likelihood-hessian-convergence` and `lem-cox-score-martingale-replacement` are labeled 6 but compute to 7; `thm-cox-score-limit-and-estimator-linearization` is labeled 7 but computes to 8; `cor-cox-partial-likelihood-asymptotic-normality` is labeled 8 but computes to 9; `def-random-field-stationarity-covariance-and-variogram` is labeled 0 but computes to 1; `lem-random-field-covariance-kernel-is-positive-semidefinite`, `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel`, and `thm-order-two-field-variogram-is-conditionally-negative-definite` are labeled 1 but compute to 2; `thm-continuous-stationary-field-covariance-has-bochner-measure` and `ex-covariance-kernel-and-intrinsic-variogram-checks` are labeled 2 but compute to 3. These items are outside the assignment and were not edited. The batch-local level check passes for all 10 assigned items.
- `batch-dependency-levels.mjs check --run statistical-models-experiments-62` reports the shared dependency-level artifact as stale and requests recomputation. The dispatch input hash is `386e4ae06977e377b90dd7236b8bc21e4477e0cf0b4791e5511c16d11a581f99`; the shared artifact hash is `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`. The shared artifact was not edited because it is owner-controlled; it still lists batch 17 at level 3 with prerequisites 8 and 12.
