# Step 3a reader report — batch 1

Run: `machine-learning-all-101-2026-10-19`  
Role: `reader-1`  
Scope: batch `1` only

## Opened inventory

Assigned pages reviewed:

- `library/probability/gaussian-smoothing-densities-scores-and-endpoint-limits.md`
- `library/probability/gaussian-smoothing-densities-scores-and-endpoint-limits-examples.md`

Both are draft `compact-v1` pages with empty Markdown bodies. The A page lists five assigned result items and has the eight declared prerequisites recorded below. The B page lists the four assigned examples. The page inventories match `research/machine-learning-all-101-2026-10-19-batch-1.pages.json`.

Assigned items were read in dependency order:

1. `lem-deterministic-ito-integral-has-gaussian-independent-increments`
2. `def-gaussian-smoothed-data-law-and-transition-density`
3. `thm-gaussian-smoothing-density-and-forward-equation`
4. `thm-gaussian-smoothing-endpoint-weak-limit`
5. `thm-gaussian-mixture-score-and-global-lipschitz-bound`
6. `ex-gaussian-two-point-mixture-smoothing-density`
7. `ex-singular-line-law-has-smooth-positive-time-density`
8. `ex-gaussian-point-mass-endpoint-coupling-bound`
9. `ex-gaussian-point-mass-score-lipschitz-blows-up-at-zero`

Direct item dependencies opened for claim verification:

- Brownian and Itô interfaces: `def-axiom-of-choice`, `def-d-dimensional-brownian-motion`, `def-elementary-predictable-brownian-integrand`, `def-ito-integral-of-an-elementary-predictable-process`, `def-ito-integral-for-square-integrable-predictable-processes`, `thm-ito-isometry-and-linearity-in-predictable-l2`, `thm-ito-integral-process-has-a-continuous-martingale-version`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`.
- Probability and Gaussian interfaces: `def-moments-variance-and-covariance`, `def-multivariate-normal-law`, `lem-characteristic-function-of-a-multivariate-normal-law`, `def-probability-measure`, `def-law-or-distribution-of-a-random-element`, `thm-independent-random-elements-have-product-joint-law`, `def-standard-normal-and-normal-laws`, `lem-normal-density-has-total-mass-one`, `thm-uniqueness-of-a-law-from-its-characteristic-function`, `thm-cramer-wold-device`, `def-weak-convergence-of-borel-probability-measures`.
- Integration, SDE, and product interfaces: `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-dominated-convergence`, `def-ito-sde-and-strong-solution`, `thm-global-strong-well-posedness-for-lipschitz-ito-sdes`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`.
- Remaining direct suppliers: the current draft `def-wasserstein-two-space-and-couplings` from batch 50, `thm-lebesgue-measure-of-a-box-of-every-kind`, and `def-countable-choice`.

The eight A-page prerequisites were opened: `characteristic-functions-inversion-and-continuity`, `forward-ito-sde-well-posedness`, `probability-spaces-random-variables-and-expectation`, `product-measures-and-the-fubini-tonelli-theorems`, `the-ito-integral-with-respect-to-brownian-motion`, `the-lebesgue-integral-and-the-convergence-theorems`, `weak-convergence-tightness-and-representation`, and the draft `wasserstein-metric-and-continuity-equation` page.

## Review and verdicts

- The deterministic-integral proof approximates the deterministic integrand in predictable L2, projects elementary coefficients to deterministic means, obtains the finite-step characteristic functions, and passes both ordinary and past-event-weighted characteristic functions to the limit. Its conditional-law argument establishes independence from every event in the filtration at time s.
- The smoothing definition correctly normalizes the product Gaussian kernel, identifies the law and transition density using filtered increment independence, and verifies Chapman–Kolmogorov by variance addition.
- The forward-equation proof gives local Gaussian derivative bounds for compactly supported finite initial measures, proves narrow continuity and the weak equation, and obtains uniqueness by backward heat tests with spatial cutoffs. It does not import Hunter’s Lp-initial-data theorem for the singular finite-measure case.
- The endpoint proof establishes the exact increment second moment, constructs a coupling on the given probability space, proves both laws have finite second moments, and obtains weak convergence from compact uniform continuity and the second-moment tail bound.
- The score proof differentiates the Gaussian convolution and posterior numerator, derives the posterior mean and covariance identities, and bounds the covariance using compact support. The point-mass example confirms the truncated Lipschitz constant can diverge.
- The two-point mixture and singular-line examples have correct formulas and boundary cases. The line law is normalized and its planar support is shown null by shrinking rectangles.
- The point-mass Wasserstein example originally argued with couplings in the reverse order from W2(mu_epsilon, delta_a) in its statement. I repaired the proof to use arbitrary couplings of mu_epsilon and delta_a, and to construct one in that same order. The point-mass score example’s derivative and exact Lipschitz constant are correct.

No assigned item contains TikZ/tikzcd diagrams. The statements/definitions are uninterrupted by hyperlinks, and their references are in immediately following reference sections. Both assigned pages have no summary body.

### Page verdicts

- `gaussian-smoothing-densities-scores-and-endpoint-limits`: **pass**. The five-item inventory, title, compact layout, and prerequisite list are consistent; no page summary is present.
- `gaussian-smoothing-densities-scores-and-endpoint-limits-examples`: **pass**. The four-example inventory and compact layout are consistent; no page summary is present.

### Source checks

- [Lawler, *Stochastic Calculus*, §§3.2.2–3.2.3](https://www.math.uchicago.edu/~lawler/finbook.pdf), printed pp. 86–91, gives the simple-process integral and L2 approximation context. Exercise 3.8, printed p. 121, asks the reader to justify normality; the local lemma supplies the finite-vector and filtration-independence argument.
- [Mattingly, “Gaussian Itô Integrals,” Duke Probability Workbook](https://sites.duke.edu/probabilityworkbook/gaussian-ito-integrals/) gives a deterministic-step approximation and characteristic-function exercise, not a completed proof. [NYU Lecture 7, §1.1](https://math.nyu.edu/~goodman/teaching/StochCalc2007/notes/l7.pdf) states deterministic-integral Gaussianity as prior context; the local proof does not depend on it.
- [Hunter, *Notes on Partial Differential Equations*, Chapter 5, §§5.1.1–5.1.2](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf), gives Gaussian heat-kernel smoothing. Theorem 5.5 assumes an Lp initial density, so it would not alone cover the singular finite-measure examples; the assigned local differentiation argument does.
- [Särkkä and Solin, *Applied Stochastic Differential Equations*, Chapter 5](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf), §5.2, gives the general Fokker–Planck context. [Tang et al., “Tweedie’s Formulae and Diffusion Generative Models Beyond Gaussian,” §1, equations (1.1)–(1.3)](https://arxiv.org/pdf/2605.19391) gives the Gaussian posterior-mean/score identity under suitable integrability; compact support meets that condition. The covariance identity and bound are proved locally.

## Edit and validation

- Edited `items/ex-gaussian-point-mass-endpoint-coupling-bound.md`, proof step 2.1, to match the stated order of the two Wasserstein marginals. Evidence: the definition takes the infimum over couplings of the ordered arguments, while the previous proof considered the reverse order without stating the coordinate-swap argument.
- Updated `contracts.ex-gaussian-point-mass-endpoint-coupling-bound.derivations[step-2-1]` and its risk note in `research/machine-learning-all-101-2026-10-19-batch-1.proof-contracts.json` to match the repaired proof.
- No `verification.judge` record was present on the edited draft.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-gaussian-point-mass-endpoint-coupling-bound.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-gaussian-point-mass-endpoint-coupling-bound.md`: PASS.
- `node tools/proof-layout.mjs items/ex-gaussian-point-mass-endpoint-coupling-bound.md`: 1 item, 2 steps, 0 defects.

## Defects not edited

Two finite-smoke contract locators are stale. They are in the batch proof-contract artifact, outside this reader’s item/page-prose edit scope:

1. `contracts.lem-deterministic-ito-integral-has-gaussian-independent-increments.finite_smoke[0].checked_in` says “Statement and steps 2.1–5.1”. The current item has steps 1.1, 1.2, 2.1, 3.1, and 4.1; there is no step 5.1. The pointer should be changed to the extant steps that support the fixture.
2. `contracts.def-gaussian-smoothed-data-law-and-transition-density.finite_smoke[0].checked_in` says “Statement and steps 2.1, 3.1, 6.1”. The current item ends at step 4.1; there is no step 6.1, and the Gaussian-convolution computation is in step 4.1. The pointer should cite the extant law/transition/convolution steps.

Both are nonfatal contract citation defects; the mathematical item arguments remain supported. They are included in the returned findings.

## Workflow status and blocker

The live `.autopilot` status still reports the run active in Step 3a, with no work in flight. `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reports 101 batches and maximum level 5. The current batch-1 cross-batch ledger marks the two item edges from `def-wasserstein-two-space-and-couplings` verified, but the A-page edge to the draft `wasserstein-metric-and-continuity-equation` page remains open, with the ledger noting that a separate Step 2 scope/interface review is owed. I inspected the W2 definition actually used by the assigned consumers; I did not audit the other items on that draft page, which are outside batch 1. This is a downstream workflow obligation, not a mathematical blocker to the batch-1 item review.
