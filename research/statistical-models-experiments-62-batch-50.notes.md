# Statistical Models and Experimental Methods — batch 50 notes

Run: `statistical-models-experiments-62`  
Role: beta; pair: `finite-window-spatial-point-process-likelihoods` / `finite-window-spatial-point-process-likelihoods-examples`  
Assigned batch dependency level: 2; prerequisite batch: 48  
Assigned scheduling input: `154742198c8edf599c86faa1cd9b420d50d94edcdefe07538e0a1672d56a7c21`  
Output manifest: `research/statistical-models-experiments-62-batch-50.pages.json`

## Controlling plan and conflicts

The binding owner direction is `research/statistical-models-experiments-62-owner-authoring-direction.md`. SME-50 is `research/plan-statistical-models-experiments-track.md`, L292. Its scope is retained: finite Borel observation window and explicit boundary rule; inhomogeneous Poisson likelihood against unit rate; homogeneous MLE including the zero-count boundary; finite-window Gibbs density with support and positive finite normalizer; Papangelou intensity and fixed-boundary pseudolikelihood; and exact/pseudo comparison for Poisson and Strauss models. No generic pseudolikelihood consistency or Gibbs asymptotic claim is added.

There is one page-prerequisite discrepancy. The SME-50 design prose names the SME-48 Poisson/Cox page and MSF-04 dominated-likelihood page. The controlling `plan-spec.json`, assigned task, and page scaffold also require `measures-and-their-basic-properties`. I retained that plan/task prerequisite and its exact page edge; the authored measure operations cite their specific supplier items.

The task’s scheduling input hash (`154742…a7c21`) differs from the shared dependency file’s stored hash (`767882…f5437c6`). Recomputing the current graph gives `3b0469…b74ce23a`; batch 50 remains level 2 with prerequisite batch 48. The shared file is owner-controlled and was not changed.

## Inventory, dependencies, and levels

The manifest contains 12 A-page items and 2 B-page examples. Levels were checked using the actual batch-48 suppliers together with the batch-50 inventory. The complete direct dependency arrays are in the manifest and item frontmatter; the table records every in-run edge and the role of each item.

| Item | Level | In-run suppliers | Claim or role |
|---|---:|---|---|
| `lem-borel-product-of-second-countable-spaces` | 0 | — | Proves equality of the product Borel and product sigma-algebras from countable bases and continuous projections. |
| `def-finite-window-spatial-observation` | 1 | `def-random-measure-and-locally-finite-point-process` | Defines bounded Borel W, restricted volume, finite counting configurations, multiplicities, evaluation sigma-algebra, and boundary inclusion iff membership in W. |
| `lem-finite-configuration-product-measurable` | 2 | `def-finite-window-spatial-observation` | Proves finite occurrence products measurable by simple approximation, including zero values and the empty product. |
| `lem-finite-window-pair-count-is-measurable` | 2 | `def-finite-window-spatial-observation`, `lem-borel-product-of-second-countable-spaces` | Extends product-measure evaluation from rectangles by Dynkin’s theorem and applies it to the closed distance set. |
| `lem-finite-product-measure-with-density` | 2 | `def-finite-window-spatial-observation` | Proves the product density on rectangles using Tonelli and finite-measure uniqueness; includes n=0. |
| `def-papangelou-conditional-intensity` | 2 | `def-finite-window-spatial-observation`, `lem-deletion-of-one-point-is-measurable` | Defines the deletion-form GNZ identity, with multiplicity and fixed boundary convention. |
| `def-finite-window-pseudolikelihood` | 3 | `def-papangelou-conditional-intensity`, `lem-deletion-of-one-point-is-measurable` | Defines finite event factors and fixed-window exposure; explicitly labels the result a criterion, not a joint likelihood. |
| `def-finite-window-gibbs-density` | 3 | `def-finite-window-spatial-observation`, `def-poisson-and-cox-point-process` | Requires measurable support and an explicit normalizer 0<Z<∞. |
| `lem-diffuse-finite-window-poisson-process-is-simple` | 4 | `def-random-measure-and-locally-finite-point-process`, `def-poisson-and-cox-point-process`, `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law` | Proves simplicity by null collision diagonals under the finite mixed-binomial law, including zero intensity. |
| `thm-finite-window-spatial-poisson-likelihood` | 4 | `def-finite-window-spatial-observation`, `lem-finite-configuration-product-measurable`, `lem-finite-product-measure-with-density`, `def-poisson-and-cox-point-process`, `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law` | Verifies the explicit density by integrating over each measurable configuration event; states the zero-intensity/log convention and avoids arbitrary RN-version selection. |
| `prop-homogeneous-poisson-window-mle` | 5 | `def-finite-window-spatial-observation`, `thm-finite-window-spatial-poisson-likelihood` | Proves the positive-count unique MLE and separates zero-rate attainment from the positive-rate boundary supremum. |
| `lem-finite-window-gibbs-density-ratio-is-papangelou` | 5 | `def-finite-window-spatial-observation`, `def-finite-window-gibbs-density`, `def-papangelou-conditional-intensity`, `lem-deletion-of-one-point-is-measurable`, `lem-finite-intensity-mecke-identity`, `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law` | Reweights the finite Mecke identity for positive finite Gibbs densities and proves measurability of the density ratio. |
| `ex-homogeneous-poisson-window-mle-boundary` | 6 | `def-finite-window-spatial-observation`, `prop-homogeneous-poisson-window-mle` | Checks n=3 on [0,2]^2 and the empty-observation boundary. |
| `ex-strauss-exact-likelihood-versus-pseudolikelihood` | 6 | `def-finite-window-spatial-observation`, `lem-finite-window-pair-count-is-measurable`, `def-finite-window-gibbs-density`, `def-papangelou-conditional-intensity`, `def-finite-window-pseudolikelihood`, `lem-diffuse-finite-window-poisson-process-is-simple`, `thm-finite-window-spatial-poisson-likelihood`, `lem-finite-window-gibbs-density-ratio-is-papangelou`, `def-poisson-and-cox-point-process`, `def-scalar-poisson-count-law` | Computes the finite normalizer and insertion ratio; distinguishes exact and pseudo data ratios for 0<γ<1 and records the γ=1 equality case. |

The scoped graph over batches 48 and 50 has 28 items, no cycles, and no declared/computed level mismatches. Batch 50’s maximum item level is 6.

## Mathematical conventions and axiom use

The window is an arbitrary bounded Borel subset of R^d; no convexity, positive volume, or smooth boundary is assumed unless a specific result states it. The finite configuration space allows multiplicities. A boundary point is observed exactly when it belongs to W. The pair statistic removes the n diagonal self-pairs and counts unordered pairs of distinct occurrences, including co-located distinct occurrences.

The Poisson theorem proves the displayed parameter-indexed density directly from the finite mixed-binomial expansions and the local product-density lemma. The generic likelihood-density definition has an AC-qualified simultaneous RN-representative clause; this proof uses the explicitly constructed gθ and does not invoke that selector. Countable Choice is inherited only through the library’s Lebesgue measure construction. The local product-Borel, pair-count, product-density, finite-mixture simplicity, and likelihood arguments use no additional choice; the page makes no full AC or dependent-choice claim.

The Gibbs definition requires real-valued energy on a measurable admissible support and 0<Z<∞. The density-ratio lemma is deliberately stated for an everywhere-positive finite density; it does not infer a ratio on zero-density states. Pseudolikelihood holds the exterior boundary and exposure fixed. The Strauss comparison makes no consistency or asymptotic claim.

## Cross-batch suppliers and unresolved handoff

The page requires SME-48, MSF-04, and the measures page. The latter two published pages and the directly used dominated-likelihood and measure supplier statements were inspected; their page edges are marked verified in `research/statistical-models-experiments-62-batch-50.cross-batch-dependencies.json`.

The actual SME-48 bodies were inspected: `def-random-measure-and-locally-finite-point-process`, `def-poisson-and-cox-point-process`, `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law`, `lem-deletion-of-one-point-is-measurable`, `lem-finite-intensity-mecke-identity`, and `def-scalar-poisson-count-law`. Their exact interfaces and hypotheses match the listed consumers: evaluation sigma-algebra on counting measures; independent Poisson counts; finite ν and the zero-mass branch in the mixed-binomial law; measurable deletion on the occurrence-present domain; finite-ν Mecke with a nonnegative measurable test; and finite scalar Poisson masses. All six items remain draft. Their current Step-1 records are `ready`, `owner:false`, which is authorship-readiness evidence, not independent approval. The finite-intensity theorem still has `verification.precheck: pending`. The batch-48 author dispatch ended at `2026-10-14T17:58:28Z`; cross-batch rows are now `verified` for the exact interfaces and explicitly disclaim publication/approval.

The exact per-consumer supplier IDs and inspected hypotheses are recorded in the cross-batch JSON. The live run remains at `1-scaffold` with an owner repair/recertification hold; this does not change the assigned pair's authored interfaces or grant independent approval. Affected claims are the finite-window setup (random-measure definition), Papangelou/pseudolikelihood and Gibbs density-ratio lemma (deletion), Gibbs reference (Poisson definition), diffuse simplicity and Poisson likelihood (mixed-binomial theorem), and the Strauss normalizer (Poisson definition and scalar count law).

The first attempt to record the local Borel-product lemma failed before writing because `research/statistical-models-experiments-62-batch-42.pages.json` then had malformed JSON at line 244 (a missing comma after the `statement` value for `cor-stable-ar-long-run-variance-plug-in-consistency`). A later read found the shared file valid; no batch-42 file was edited here. I then used `step1-decisions.mjs record` for all 14 assigned items without `--owner`: every record is hash-bound `ready`, `owner:false`, and names its examined direct dependencies. The scoped `step1Decision` check closes all 14/14 records. These are authorship-readiness records, not independent approval or release from the run-wide owner hold.

## Sources and retrieval

The A-page coverage file records the full-text URLs, ranges, harvested results and dispositions. Both independent treatments were read in full over the relevant arguments:

| Source | Read locators | Full-text fetch stamp |
|---|---|---|
| Adrian Baddeley, *Spatial Point Processes and their Applications* | Lecture 4, §§4.3–4.6 and §4.9, PDF pp.61–73; finite Poisson densities, Gibbs/Strauss models, homogeneous MLE, and pseudolikelihood. | 75 pages; 999,280 bytes; SHA-256 prefix `04dd2e35366dffcf`. |
| Günter Last and Mathew Penrose, *Lectures on the Poisson Process* | Chapter 3, Theorem 3.6 and Proposition 3.8, PDF pp.33–34; Chapter 4, Theorem 4.1 and finite-intensity proof, PDF pp.39–43. | 305 pages; 1,465,585 bytes; SHA-256 prefix `04423f7ad07ca1d0`. |

`source-fetch-check --stamp` succeeded for both PDFs. The coverage harvest contains 7 included results and 2 results inline in the local Mecke-ratio and simplicity arguments. No retrieval failed; no source-resolution failure, recovery retry, source drop, or owner-escalation disposition was needed.

## Scoped checks and blockers

| Check | Result |
|---|---|
| Scoped `dependencyLevels` over batches 48 and 50 | Pass: 28 items, no cycles or label mismatches; all 14 batch-50 levels match. |
| `proof-contract.mjs --strict` | Pass: 14 items, 62 exact supplier citations, all 33 proof steps classified, 0 errors/warnings. Finite smoke checks record the square-window MLE boundaries and two Strauss ratio cases. |
| `precheck.mts` | Pass: 10 proof-bearing items, 0 failures. |
| `proof-layout.mjs` on all 14 assigned items | Pass: 14 items, 33 steps, 0 defects. |
| `rendercheck.mjs` on 14 items and both pages | Pass: 16 files; KaTeX, YAML, delimiter, and multiline-display checks clean. |
| `content-policy.mjs` on batch 50 | Pass: 14 items, 0 errors, 0 warnings. |
| `manifest-deps.mjs` | Pass: 14 items, all explicit dependency arrays, 0 errors. |
| `depcheck.mjs` scoped to these items and prerequisite pages | Pass: 14 selected items; prerequisite checks cover 761 items and 131 pages. |
| `source-fetch-check.mjs` check mode | Pass: 2/2 sources fetched and resolved; 0 drops. |
| `coverage-checklist.mjs --require-destination` | Pass: 9 harvested results, 0 errors, 0 warnings. |
| Run-wide `item-dependency-levels.mjs check` | Fails on 11 unrelated defects, none in batch 50: `lem-bounded-predictable-counting-integral-pathwise-identity` has no valid nonnegative level; `lem-cox-partial-likelihood-hessian-convergence` (6 vs 7), `lem-cox-score-martingale-replacement` (6 vs 7), `thm-cox-score-limit-and-estimator-linearization` (7 vs 8), `cor-cox-partial-likelihood-asymptotic-normality` (8 vs 9), `def-random-field-stationarity-covariance-and-variogram` (0 vs 1), `lem-random-field-covariance-kernel-is-positive-semidefinite` (1 vs 2), `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel` (1 vs 2), `thm-order-two-field-variogram-is-conditionally-negative-definite` (1 vs 2), `thm-continuous-stationary-field-covariance-has-bochner-measure` (2 vs 3), and `ex-covariance-kernel-and-intrinsic-variogram-checks` (2 vs 3). The assigned scope’s levels pass above. |
| Run-wide `batch-dependency-levels.mjs check` | Fails as stale: stored input hash `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`; current recomputed hash `4e5aeb91af79e6a1f44b10085f7185885d3abe6b7448c5a3bcf97560019d91ff`. The task-provided hash is `154742198c8edf599c86faa1cd9b420d50d94edcdefe07538e0a1672d56a7c21`. Shared scheduling metadata was not rewritten. |
| Native `step1-decisions.mjs record` and scoped record-hash check | Pass after the shared batch-42 manifest became valid: all 14 assigned items have `ready`, `owner:false` records and the current scoped check closes 14/14. The initial parse failure is recorded above. |

The latest live status showed the run still running in `1-scaffold`, 54/62 covered, with batches 7, 41, 42, 45, 46, 47, 50, and 55 still uncovered, no in-flight process, and the owner repair/recertification blocker. The batch-50 dispatch still has `endedAt:null`; I left it to the owner-controlled autopilot transition. No published item, shared plan, shared dependency-level file, verdict, or engine state was edited. No test suite was added or run.
