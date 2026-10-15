# Batch 7 authoring notes — mixed effects and longitudinal models

Run: `statistical-models-experiments-62`  
Role: beta · Batch: 7 · Pages: `mixed-effects-and-longitudinal-models` / `mixed-effects-and-longitudinal-models-examples`

## Run state

The live `.autopilot/statistical-models-experiments-62` status was recomputed from the build driver and checked against the run history; it is in `1-scaffold`, owner-held at the batch-22 gate. The `research/*RESUME.md` files refer to concluded runs. No autopilot state or gate was changed.

## Inventory and dependency levels

The A page has 18 items and the B page has the three examples in controlling plan SME-07. Items are ordered by recomputed dependency level. The local dependency audit found no cycle and confirmed that the batch manifest's `deps` and `dependency_level` fields match each carrier.

| Level | A-page items |
|---:|---|
| 0 | `lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent`; `thm-nondegenerate-multivariate-normal-law-has-density` |
| 2 | `def-error-contrast-matrix`; `def-known-covariance-generalized-least-squares-estimator`; `def-linear-mixed-model` |
| 3 | `def-gaussian-linear-mixed-model`; `def-longitudinal-missingness-mechanisms`; `lem-error-contrast-matrix-exists`; `lem-gls-information-matrix-is-positive-definite`; `lem-marginal-covariance-of-linear-mixed-model`; `lem-reml-error-contrast-covariance-is-positive-definite` |
| 4 | `lem-gaussian-error-contrast-is-multivariate-normal`; `thm-gaussian-conditional-law-of-random-effects`; `thm-variance-component-identifiability-iff-covariance-map-injective` |
| 5 | `def-restricted-maximum-likelihood-error-contrasts`; `thm-known-covariance-gls-is-blue` |
| 6 | `lem-reml-error-contrast-basis-change-is-parameter-free`; `thm-known-covariance-blup-for-random-effects` |

The B-page levels are 4 for `cex-linear-mixed-model-covariance-does-not-imply-ignorable-dropout` and `ex-random-intercept-intraclass-correlation`, and 5 for `cex-two-visits-alias-random-slope-and-residual-variance`.

The stored batch dependency row currently records level 2 with prerequisites 1 and 2. The dispatch carried scheduling hash `a405f7fe8adabe73858aeb407bd96a699d8d9b90b9d67b1856bceef420eb8065`; the stored file now records `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`. No engine-state file was edited in this batch.

## Plan comparison and owner escalation

The pair metadata in `research/plan-spec.json` agrees with the assignment on page IDs, category, order, and `requires`; it contains no item inventory. The controlling design is SME-07 in `research/plan-statistical-models-experiments-track.md`.

SME-07's REML sentence has a dimensional inconsistency. It says that `K` has full row rank, `KX=0`, and rows spanning `col(X)^⊥`, then defines the likelihood from `K^T Y`. With `X` of size `n×p`, a row-basis contrast matrix has size `(n-p)×n`, so `K^T Y` is undefined. A row-basis convention must use `KY`. To retain `K^T Y`, define `K∈R^{n×(n-p)}` with full column rank, `X^T K=0`, and columns spanning `col(X)^⊥`; state `p<n`.

The A-page uses the latter, dimensionally valid convention. Duke Lecture 4 §4.1 uses the compatible `C^T Y` column-basis convention; ILRI §2.4.2 uses the row-basis `KY` convention. The shared plan remains unchanged. Owner reconciliation is required for these six items, which have `escalated` Step 1 records: `def-error-contrast-matrix`, `lem-error-contrast-matrix-exists`, `lem-gaussian-error-contrast-is-multivariate-normal`, `lem-reml-error-contrast-covariance-is-positive-definite`, `def-restricted-maximum-likelihood-error-contrasts`, and `lem-reml-error-contrast-basis-change-is-parameter-free`.

The older dossier at `research/statistics-scaffolds-2026-10-11/models/models-01/dossier.md` includes extra B ideas (unequal-visit random slopes, a negative unconstrained moment estimate, and a REML contrast illustration). Current SME-07 restricts B to random-intercept ICC, an aliased slope, and informative dropout. The assigned B page follows the current plan.

## Mathematical scope and axioms

The marginal covariance identity, known-covariance GLS, and BLUP use finite second moments and independence, without Gaussianity. GLS is proved by whitening and the actual batch-2 Gauss–Markov theorem; its hypotheses hold for the transformed full-rank design with covariance `I_n`. The BLUP proof compares its prediction-error covariance with every affine predictor unbiased for all fixed `β` and includes the fixed-effect estimation term.

The conditional Gaussian formula uses a residual uncorrelated with the response, the local joint-Gaussian block-independence lemma, and event-integral characterizations of conditional expectations. It allows singular `G` and never inverts it. The local REML chain proves (i) existence of a contrast basis, (ii) positive definiteness of `K^T V K` under `V≻0`, (iii) Gaussianity of `K^T Y` under the Gaussian branch, (iv) the nondegenerate Gaussian density, and (v) parameter-free change-of-basis scaling. Variance-component identifiability is proved for the stated Gaussian family, including singular covariance cases.

AC is explicit on the Gaussian branch and is carried into Gaussian block independence, Gaussian conditional laws, Gaussian identifiability, Gaussian error contrasts, REML, the multivariate-normal density, and the random-slope alias example. The moment-only covariance, GLS, BLUP, ICC, and dropout results use no choice axiom. Finite-dimensional error-contrast basis existence uses no arbitrary-family choice.

## Cross-batch suppliers

`research/statistical-models-experiments-62-batch-7.cross-batch-dependencies.json` records 12 verified page/item edges to batches 1 and 2. The current draft `def-scientific-statistical-model-contract` was read for the unit, index, observation-mechanism, law, and adequacy interfaces. The current batch-2 fixed-design definition and Gauss–Markov proof were read; the local arguments state their stronger full-rank and positive-definite covariance hypotheses explicitly. Edge verification does not accept draft suppliers or count as independent approval.

## Source retrieval and coverage

The coverage ledger records complete reading and per-result dispositions for Duke STA610 Lectures 1–7 and Duchateau–Janssen–Rowlands, Chapter 2. It includes locators, cached full-text evidence, and supported items; it records 44 harvested results with no checklist omissions.

The former Lecture 7 URL ending `Lec7-Longitudinal-LME.pdf` returned HTTP 404 on the initial fetch and all five recovery retries. The official 2026 Duke course index links the same titled 21-page lecture at `https://stat.duke.edu/~fl35/teaching/610-26F/Lec7-LLME.pdf`. That replacement is fully text-fetched and stamped. The old pathname's six attempts, searches, item-specific arguments, and dependency lists are preserved in `source_resolution` in the coverage file; the stale pathname is the single documented drop, and its mathematical coverage remains on the active replacement and the independent ILRI treatment.

## Scoped checks

- Phase precheck: 21 files; 15 proof-bearing items checked; 0 failures. The 6 definitions remain `n/a`.
- `node tools/proof-layout.mjs` on the 21 assigned carriers: 50 steps, 0 defects.
- Strict proof-contract validation: 21/21 items, 0 errors, 0 warnings.
- Coverage checklist: 44 harvested results, 0 errors, 0 warnings.
- Source fetch: 8/9 source rows stamped; 9/9 resolved, including the documented stale-path drop and verified replacement.
- Local batch-7 carrier/manifest level audit: all 21 dependency lists and levels match, no local cycle.
- `item-dependency-levels.mjs check --run statistical-models-experiments-62`: 510 items checked across 124 pages; maximum level 9; pass. The new determinant-invertibility prerequisite is included in the slope counterexample's carrier and manifest; its item level remains 5.
- `batch-dependency-levels.mjs check` reports stale run-level metadata. The current recomputation still gives batch 7 level 2 with prerequisites 1 and 2; the stored input digest is `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6` and the recomputed digest is `e2086307c093425c5fa5ade544b72cb35ef4b8c984de959ae36d81eab61eb0f0`. This run-level file is engine state and was left unchanged.
- The canonical `step1-decisions.mjs record` CLI wrote the assigned hash-bound records from an isolated `/tmp` snapshot prepared when another run manifest was malformed. A transitive dependency audit found 90 IDs in this pair's closure, owned only by batches 1, 2, and 7 or published outside this run; none comes from batch 42. The repository-root `check` now loads the current run inventory; filtered to this batch it confirms 15 ready items and the six deliberate REML convention escalations, with no missing or stale assigned records. The run-wide check remains open for those six escalations and additional work outside this pair.

No tests were run. Readiness records are authoring evidence and do not constitute independent approval.
