# Step 3a reader report — batch 24

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Verdict: completed; no uneditable findings remain.

## Opened inventory

- Instructions and dispatch: `CLAUDE.md`, `README.md`, `briefs/reader.md`, and `research/mathematical-statistics-foundations-37-batch-24.pages.json`.
- Assigned pages: `library/mathematical-statistics/boundary-and-misspecified-asymptotics.md` and `library/mathematical-statistics/boundary-and-misspecified-asymptotics-examples.md`.
- Assigned items, read in their supplier/consumer order: `def-pseudo-true-parameter-under-misspecification`, `def-fisher-information-metric-distance`, `lem-quadratic-likelihood-optimization-is-fisher-distance`, `cex-uniform-maximum-has-n-rate-not-root-n`, `thm-m-estimator-sandwich-limit-under-misspecification`, `thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model`, `ex-uniform-endpoint-mle`, `ex-one-sided-normal-likelihood-ratio-at-boundary`, and `ex-normal-location-under-wrong-variance`.
- Direct dependency items opened and checked: `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-identically-distributed-and-iid-random-variables`, `def-metric-topology`, `def-axiom-of-choice`, `def-euclidean-spheres-and-closed-balls`, `def-convergence-in-probability`, `def-op-and-little-op-stochastic-bounds`, `def-m-estimator`, `def-moments-variance-and-covariance`, `def-convergence-in-distribution-of-random-elements`, `thm-ftc-second-part`, `thm-continuous-implies-integrable`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-factorization-of-expectations-for-independent-variables`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `def-standard-normal-and-normal-laws`, `thm-integration-against-a-density`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-portmanteau-theorem`, `thm-lindeberg-levy-iid-central-limit-theorem`, `def-multivariate-normal-law`, `thm-continuous-mapping-theorem`, `thm-multivariate-iid-central-limit-theorem`, `thm-vector-slutsky`, `def-qmd-path`, `def-convergence-in-distribution-for-real-random-variables`, `thm-slutsky-for-real-random-variables`, `def-chi-square-law`, `lem-gaussian-even-moment-bound-for-brownian-increments`, `cor-cauchy-schwarz-inequality-for-l-two`, and `cor-markov-inequality-for-random-variables`.
- Batch proof contract reviewed: `research/mathematical-statistics-foundations-37-batch-24.proof-contracts.json`.

## Item review and edits

- `def-pseudo-true-parameter-under-misspecification`: the definition requires integrable log densities and correctly makes existence, uniqueness, separation, and interiority separate conditions.
- `thm-m-estimator-sandwich-limit-under-misspecification`: the sandwich argument is valid under its stated separation, uniform laws, nonsingular Hessian, and approximate score equation. In Proof 3.1 I added the measurability derivation for the random segment Hessian average: measurable density sections give measurable derivative sections by difference quotients; parameter continuity and rational-grid approximations give joint measurability; Riemann sums then give a measurable integral. Updated this item's derivation and citation uses in the batch proof contract.
- `def-fisher-information-metric-distance`: the positive-definite matrix defines the stated norm, and the infimum definition correctly leaves attainment to later results.
- `lem-quadratic-likelihood-optimization-is-fisher-distance`: the coercivity, compact restriction, maximum attainment, and completed-square identity follow from its hypotheses.
- `thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model`: the limit proof is sound under its explicit uniform expansion and tightness hypotheses. Its Facts & Assumptions previously labeled both QMD and Euclidean inner product as `[F1]`, leaving proof references ambiguous. I assigned unique labels `[F1]` through `[F11]`, updated the affected proof tags, and synchronized the contract's citation labels and derivations.
- `cex-uniform-maximum-has-n-rate-not-root-n`: the intentionally refuted root-n claim is contradicted by the displayed tail calculation; the endpoint error has the stated exponential n-scaled limit and the support change violates QMD.
- `ex-uniform-endpoint-mle`: the likelihood maximizer is the sample maximum almost surely; the null event with no maximizer is explicitly acknowledged.
- `ex-one-sided-normal-likelihood-ratio-at-boundary`: the QMD verification, exact local expansion, tightness, and half-mass-at-zero chi-square mixture calculation check out.
- `ex-normal-location-under-wrong-variance`: the pseudo-true point, uniform criterion law, clipped MLE score condition, and sandwich variance check out.

No assigned item's statement or definition changed. Neither edited item contained a stale `verification.judge` record.

## Page verdicts

- `boundary-and-misspecified-asymptotics` — pass. Its summary accurately states the sandwich conditions, the explicit local quadratic and tightness conditions for the boundary result, and the Uniform endpoint counterexample.
- `boundary-and-misspecified-asymptotics-examples` — pass. Its summary matches the three verified examples.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model.md` — PASS.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-m-estimator-sandwich-limit-under-misspecification.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-m-estimator-sandwich-limit-under-misspecification.md` — PASS.
- `node tools/proof-layout.mjs items/thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model.md items/thm-m-estimator-sandwich-limit-under-misspecification.md` — 2 items, 11 steps, 0 defects.

## Uneditable defects and blocker

No uneditable defects were confirmed, and there is no blocker.

## Coverage note

I reviewed every assigned item and page, all 37 distinct external direct dependency items, and the batch proof contracts. The transitive dependency closure contained 1,576 item files and was captured in supplier-first order to identify that closure; I did not independently audit the internal proof chains of every deeper transitive supplier. The audit uses direct supplier statements as the cited facts and does not certify their full transitive proof chains.
