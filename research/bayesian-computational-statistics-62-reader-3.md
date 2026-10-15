# Step 3a reader report — batch 3

Run: `bayesian-computational-statistics-62`  
Role: reader  
Batch: `3`

## Opened inventory

Assigned pages:

- `library/numerical-analysis/euler-maruyama-convergence.md`
- `library/numerical-analysis/euler-maruyama-convergence-examples.md`

Assigned items, reviewed in their listed dependency levels:

- `alg-euler-maruyama-autonomous`
- `lem-brownian-ito-integral-l1-maximal-bound`
- `lem-euler-maruyama-autonomous-interpolation-increment-moments`
- `thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses`
- `thm-euler-maruyama-strong-rate-for-square-integrable-initial-data`
- `thm-euler-maruyama-weak-order-one-under-backward-regularity`
- `thm-shared-brownian-euler-level-correction-rates`
- `ex-euler-maruyama-additive-noise-strong-error`
- `ex-euler-maruyama-weak-order-one-for-ornstein-uhlenbeck`
- `ex-learned-drift-bias-is-not-solver-error`
- `ex-shared-brownian-euler-level-coupling-rates`

Other current-run suppliers opened:

- Batch 1: `def-ito-sde-and-strong-solution`, `thm-global-strong-well-posedness-for-lipschitz-ito-sdes`, `thm-finite-horizon-moments-for-lipschitz-ito-sdes`, `lem-lipschitz-sde-map-is-well-defined`, and `lem-lipschitz-sde-local-solution-has-finite-path-moment`.
- Batch 2: `alg-euler-maruyama`, `def-euler-maruyama-step-process-and-continuous-interpolation`, `lem-euler-maruyama-one-step-moment-and-increment-estimates`, `thm-euler-maruyama-uniform-moment-and-increment-bounds`, and `lem-square-integrable-predictable-step-ito-integral-is-finite-sum`.

Published dependencies opened for the assigned arguments:

- Brownian and filtration: `def-d-dimensional-brownian-motion`, `def-progressively-measurable-and-predictable-process`, `def-continuous-time-stopping-time`, `lem-rat-embeds-dense`, `def-axiom-of-choice`.
- Itô calculus: `def-elementary-predictable-brownian-integrand`, `def-ito-integral-of-an-elementary-predictable-process`, `def-ito-integral-for-square-integrable-predictable-processes`, `thm-ito-isometry-and-linearity-in-predictable-l2`, `thm-stopping-an-ito-integral`, `thm-doob-maximal-bound-for-the-ito-integral`, `def-continuous-brownian-ito-process`, `thm-multidimensional-ito-formula-for-brownian-driven-processes`, `thm-ito-formula-one-dimensional`.
- Integration and estimates: `thm-density-of-elementary-predictable-processes-in-predictable-l2`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-dominated-convergence`, `thm-monotone-convergence-for-the-integral`, `thm-holder-inequality-for-integrals`, `thm-gronwall-integral-inequality`, `cor-cauchy-schwarz-for-random-variables`.
- Gaussian laws: `def-standard-normal-and-normal-laws`, `def-multivariate-normal-law`, `lem-gaussian-even-moment-bound-for-brownian-increments`, `lem-characteristic-function-of-a-normal-law`, `cor-deterministic-ito-integrals-are-gaussian`.
- Other Euler support: `lem-exponential-dominates-one-plus-x`.

External sources opened at relevant locations:

- Higham, Mao, and Stuart, *Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations*, [PDF](https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf): §2, equations (2.1)–(2.3), printed pp. 1042–43; §4 Assumptions 4.1–4.2, Lemma 4.3, printed pp. 1054–55; Theorem 4.4 and its proof, printed pp. 1055–56. Theorem 4.4 proof uses BDG for its martingale term; the assigned L1 lemma supplies the estimate used in the local proof.
- Särkkä and Solin, *Applied Stochastic Differential Equations*, [PDF](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf): Algorithm 8.1 in §8.2, printed p. 132; §8.3 for weak approximations.
- Li, *Lecture 16: Numerical SDEs: Basics*, [PDF](https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf): §2 strong convergence and §3, Theorem 3.2 and proof. Theorem 3.2 is for a one-dimensional, time-homogeneous additive-noise setting; the assigned weak theorem proves its broader conditional statement locally.
- Giles, *Multilevel Monte Carlo Path Simulation*, [PDF](https://people.maths.ox.ac.uk/gilesm/files/opre.pdf): §2 shared Brownian increments and level correction estimates; Theorem 3.1 is the separate MLMC complexity theorem.

## Edits and evidence

- `lem-brownian-ito-integral-l1-maximal-bound`: added the direct dominated-convergence supplier and made its use explicit in step 2.1. Expanded the dyadic stopping-time argument to verify that the rounded times are stopping times, that `A_lambda` belongs to the rounded stopped sigma-algebra, and that the limiting integral identity holds for continuous versions. The product-measure majorant is the finite-energy function `H^2`; endpoint graphs are null by Tonelli. The cited supplier is `thm-dominated-convergence`. Updated this item's proof-contract citations and derivation inputs in `research/bayesian-computational-statistics-62-batch-3.proof-contracts.json`.
- `thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses`: added Tonelli as a direct dependency and cited it where the pointwise drift and diffusion estimates are integrated in time (steps 1.2–1.3). Updated the proof contract.
- `thm-euler-maruyama-strong-rate-for-square-integrable-initial-data`: added Tonelli as a direct dependency and cited it for exact-coefficient energy and expected stopped-error integrals (steps 1.1, 1.2, and 2.1). Updated the proof contract.
- `thm-euler-maruyama-weak-order-one-under-backward-regularity`: added Tonelli as a direct dependency and cited it for the expected energy of the stochastic-integral coefficient in step 1.1. Updated the proof contract.
- `lem-euler-maruyama-autonomous-interpolation-increment-moments`: corrected the Särkkä–Solin locator from §8.1 to §8.2, Algorithm 8.1, and clarified in Source notes that Lemma 4.3 is the source for the increment estimate while Algorithm 8.1 specifies the recursion.

No changed item had a stale `verification.judge` record. Reflow and precheck passed for all five changed items. The final batched `node tools/proof-layout.mjs` run covered those five paths and reported 24 steps with 0 defects.

## Defects not editable in this batch

`def-euler-maruyama-step-process-and-continuous-interpolation` (batch 2) has a circular well-definedness justification: its `justified_by` points to `thm-euler-maruyama-uniform-moment-and-increment-bounds`, while that theorem lists and uses the definition in its `deps` and proof. The assigned consumer `thm-euler-maruyama-strong-rate-for-square-integrable-initial-data` reaches this cycle. The definition's current bytes at split had SHA-256 `d4ad0a6e319d2c035db0113c921c15a9ad9b24b9ec7fe9f776d62ec0d7c8f4a7`. A noncircular well-definedness proof is needed, or the unnecessary `justified_by` edge must be removed if the definition is only the pathwise construction.

## Page verdicts

- `euler-maruyama-convergence`: pass. Its summary accurately distinguishes the finite-second-moment strong rate, the separate autonomous all-moment result, the conditional weak result, and the coupling rates.
- `euler-maruyama-convergence-examples`: pass. Its summary matches the four checked examples and does not claim a learned-drift bias bound from the solver theorems.

## Blocker and coverage note

The assigned batch has no unresolved in-scope proof defect. Batch 3's consumer closure still has the batch-2 well-definedness cycle above, which blocks an acyclic dependency certification until its owner repairs it.

All assigned items and pages and the direct suppliers needed for their arguments were opened. Supplier-order exceptions occurred: the autonomous algorithm was opened before its Brownian and AC definitions, and the batch-2 uniform-moment theorem and batch-1 Picard theorem were opened before several supporting lemmas exposed by their dependency lists. Those suppliers were then read before reviewing downstream consumers. I checked the statements and proof passages used from published dependencies; I did not audit every transitive proof closure of the published probability and measure-theory library.
