# Step 3a reader report — batch 67

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-67`)  
Review date: 2026-10-20

## Verdict

Both assigned pages pass presentation and inventory review. All 14 assigned items were read independently, including their dependency interfaces in dependency order. Nine in-flight items received proof or interface repairs; the remaining five items need no repair. No assigned defect remains unedited, and there is no batch-67 blocker.

## Opened inventory

### Assigned pages

- `anderson-reverse-time-diffusion` — A page, `library/machine-learning/anderson-reverse-time-diffusion.md`.
- `anderson-reverse-time-diffusion-examples` — B page, `library/machine-learning/anderson-reverse-time-diffusion-examples.md`.

Both pages are frontmatter only, preserve their assigned inventories and prerequisites, have `page_layout: compact-v1`, and contain no summary body. No TikZ, tikzcd, or other diagram is present; the reviewed exposition does not require an added diagram.

### Assigned items, opened in dependency order

- `def-reversed-transition-kernels-for-diffusions`
- `lem-continuous-local-martingale-quadratic-variation`
- `lem-density-translation-factorization`
- `def-bayes-reversed-gaussian-smoothing-kernels`
- `lem-elliptic-local-martingale-brownian-representation`
- `lem-predictable-elliptic-martingale-brownian-reconstruction`
- `lem-reversed-kernels-and-generator-identity`
- `thm-anderson-reverse-time-diffusion`
- `thm-markov-diffusion-reversal-by-bayes-kernels`
- `lem-reversed-smoothing-generator-and-martingale`
- `thm-gaussian-smoothing-reversal-on-truncated-time-interval`
- `cex-state-dependent-diffusion-score-only-reversal`
- `ex-bounded-start-anderson-reversal`
- `ex-stationary-ornstein-uhlenbeck-reversal`

### Dependency pages and their listed items

- Published page `forward-ito-sde-well-posedness`, `library/probability/forward-ito-sde-well-posedness.md`; its five listed item claims were checked for the page-summary context: `def-ito-sde-and-strong-solution`, `lem-lipschitz-sde-map-is-well-defined`, `lem-lipschitz-sde-local-solution-has-finite-path-moment`, `thm-global-strong-well-posedness-for-lipschitz-ito-sdes`, and `thm-finite-horizon-moments-for-lipschitz-ito-sdes`.
- Draft page `gaussian-smoothing-densities-scores-and-endpoint-limits`, `library/probability/gaussian-smoothing-densities-scores-and-endpoint-limits.md`; all five suppliers were read in full: `lem-deterministic-ito-integral-has-gaussian-independent-increments`, `def-gaussian-smoothed-data-law-and-transition-density`, `thm-gaussian-smoothing-density-and-forward-equation`, `thm-gaussian-smoothing-endpoint-weak-limit`, and `thm-gaussian-mixture-score-and-global-lipschitz-bound`.

### Other direct dependency interfaces opened

Published item statements or definitions reviewed: `cor-cauchy-schwarz-for-random-variables`, `cor-existence-and-scaling-of-d-dimensional-brownian-motion`, `cor-vector-levy-characterization`, `def-axiom-of-choice`, `def-conditional-expectation-as-an-ae-class`, `def-continuous-brownian-ito-process`, `def-continuous-time-adapted-process-and-martingale`, `def-continuous-time-stopping-time`, `def-d-dimensional-brownian-motion`, `def-ito-sde-and-strong-solution`, `def-measure-kernel-and-probability-kernel`, `def-progressively-measurable-and-predictable-process`, `def-quadratic-covariation-of-brownian-ito-processes`, `def-standard-normal-and-normal-laws`, `lem-adapted-continuous-processes-are-progressively-measurable`, `lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates`, `lem-characteristic-functions-under-affine-maps-and-independent-sums`, `lem-finite-coordinate-cylinders-form-a-pi-system`, `lem-martingale-differences-are-orthogonal-in-l2`, `lem-normal-density-has-total-mass-one`, `thm-a-stopped-martingale-is-a-martingale`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-dominated-convergence`, `thm-doob-lp-maximal-inequality`, `thm-dynkin-pi-lambda`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-global-strong-well-posedness-for-lipschitz-ito-sdes`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-monotone-convergence-for-the-integral`, `thm-multidimensional-ito-formula-for-brownian-driven-processes`, `thm-optional-sampling-for-bounded-stopping-times`, `thm-quadratic-covariation-of-brownian-ito-processes`, `thm-riesz-fischer-completeness-of-l-p`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

Additional stopping interfaces compared while checking the new bounded-stopping argument: `thm-a-stopped-martingale-is-a-martingale`, `thm-optional-sampling-for-bounded-stopping-times`, and `lem-bounded-stopping-preserves-cadlag-square-integrable-martingales`. The full proof of `cor-vector-levy-characterization` was also opened for the finite-horizon Brownian extension argument.

The out-of-scope direct consumer `alg-predictor-corrector-score-sampling` (batch 68) was opened to check the clarified SDE interface. Its definition already supplies the usual filtered Brownian increment condition, finite adapted initial state, continuous Brownian Itô-process integrability, and Markov property; no consumer repair was needed.

## Repairs and evidence

- `lem-density-translation-factorization`, Proof 1.1: changed the variable-subtraction calculation to test nonnegative Borel functions, applying Tonelli to the iterated integral and translation invariance to the fixed-c change of variables. This makes the joint pushforward density argument explicit. Proof contract updated.
- `lem-continuous-local-martingale-quadratic-variation`, Statement and Proof 1.1, 2.1, 4.1, 5.1: added the bounded-stopping property used by the localization and polarization arguments. Proof 1.1 derives continuous-time bounded stopping by finite-grid optional sampling, truncation of the terminal variable for uniform integrability, and passage through continuous paths. It also establishes stopping of local martingales and the bounded-local-martingale implication. In Proof 2.1, the Fatou step is derived from monotone convergence instead of being left as an unproved citation. The direct dependency on `thm-optional-sampling-for-bounded-stopping-times` and its proof contract were added.
- `lem-elliptic-local-martingale-brownian-representation`, Facts and Proof 1.1, 2.1, 4.1: added direct dependencies and fact citations for dominated convergence, monotone convergence, and Cauchy–Schwarz, which the construction uses. Replaced the unstated stopped-bracket identity in Proof 4.1 with the product-compensator argument for (B^2-t), followed by the bounded-stopping fact established by `lem-continuous-local-martingale-quadratic-variation`.
- `lem-predictable-elliptic-martingale-brownian-reconstruction`, Fact F2 and Proof 1.1: cited the established stopping/localization property used when passing to the augmented filtration and stopping at the energy level.
- `lem-reversed-kernels-and-generator-identity`, Statement and Proof 1.2, 2.1: defined the natural reversed filtration σ(Y_r: r≤u) for the martingale problem. Expanded the generator proof using the density-adjoint forward equation and stated domination, and made the finite-time Riemann-sum passage explicit.
- `thm-anderson-reverse-time-diffusion`, Statement and Proof 4.1: stated the filtration-relative Brownian increment conditions, initial measurability, finite coefficient energies, and the strong restart property used to prove independence from the reversed past. The bounded-start example’s filtration was made explicit, and its restart map (X_r=X_s+(W_r-W_s)) is recorded in its proof.
- `thm-markov-diffusion-reversal-by-bayes-kernels`: clarified the statement's usual filtered Brownian Itô setup and finite pathwise coefficient integrability, while retaining the finite initial-state scope. Its dependency now names the continuous Brownian Itô-process convention rather than imposing a square-integrable initial state. Fact F4 records the bounded-stopping result used for compact-test martingale localization; the batch-68 predictor-corrector consumer was checked and is compatible.
- `thm-gaussian-smoothing-reversal-on-truncated-time-interval`, Fact F4: recorded the bounded-stopping result used for compact-test martingale localization.
- Regenerated the affected contracts in `research/machine-learning-all-101-2026-10-19-batch-67.proof-contracts.json`. No `verification.judge` record was present on the nine edited carriers.

The Anderson source was checked at Section 3’s theorem and Section 4’s complete proof (printed pp. 317–322), including Lemmas 1–5 and the reverse-noise filtration argument. Tang and Zhao, Section 2.2 (PDF pp. 3–5), was checked for the reverse-drift identity and its explicit heuristic status; Section 3(a) (PDF pp. 5–6) was checked for the OU example. Anderson’s Lemma 4 (printed pp. 320–321) supports the subtraction-factorization context. Their sources were not substituted for local proofs.

## Final checks

- `reflow.mts` reported no changes for all nine edited items.
- `precheck.mts` passed for all nine edited items.
- The required single batched `proof-layout.mjs` command passed: 9 items, 45 steps, 0 defects.
- Assigned item statements and definitions were checked for uninterrupted prose and links; no statement references interrupt an assigned statement.

## Page verdicts

- `anderson-reverse-time-diffusion` — pass. Frontmatter-only A page; item order, prerequisite pages, draft status, and compact layout are preserved.
- `anderson-reverse-time-diffusion-examples` — pass. Frontmatter-only B page; example inventory, A-page prerequisite, draft status, and compact layout are preserved.

## Unedited findings and blockers

No confirmed defects remain in the assigned scope. No batch-67 blocker.

At handoff the live run remained active at Step 3a read; batch 67 was still uncovered. The run status showed an unrelated Step 3a collect blocker on batch 57 (three failed attempts). This reader did not alter run state or other batches.

Coverage limit: published suppliers were checked at the exact Statement or Definition interfaces used by batch 67; their entire transitive published proof closures were not re-audited. The five Gaussian-smoothing draft suppliers and the vector Lévy proof were read in full.
