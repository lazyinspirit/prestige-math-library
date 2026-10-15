# Step 3a reader report — batch 44

Run: `statistical-models-experiments-62`  
Role: reader  
Date: 2026-10-15

## Scope and opened inventory

The active run status was `running`; batch 44 was still uncovered in `3a-read`. I read the batch-44 manifest and the reader brief, then opened both assigned pages, all seven assigned items, the batch proof contract, coverage record, and cross-batch dependency record.

Assigned pages:

- A page `state-space-models-as-probability-laws` — `library/statistical-models-and-experiments/state-space-models-as-probability-laws.md`.
- B companion `state-space-models-as-probability-laws-examples` — `library/statistical-models-and-experiments/state-space-models-as-probability-laws-examples.md`.

Assigned items, in manifest dependency-level order:

- Level 0: `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`.
- Level 1: `def-general-state-space-model-by-kernels`.
- Level 2: `thm-finite-horizon-state-space-kernel-law-exists-uniquely`; `def-linear-gaussian-state-space-model-with-independent-noises`.
- Level 3: `thm-linear-gaussian-state-space-path-law-is-jointly-gaussian`.
- Level 4: `ex-state-space-model-same-dynamics-distinct-observation-kernels`; `ex-linear-gaussian-singular-state-covariance-positive-innovation-covariance`.

I opened the dependency statements and the proof sections needed for the checked inferences in `def-axiom-of-choice`, `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, `def-multivariate-normal-law`, `lem-characteristic-function-of-a-multivariate-normal-law`, `lem-characteristic-functions-under-affine-maps-and-independent-sums`, `thm-uniqueness-of-a-law-from-its-characteristic-function`, `thm-cramer-wold-device`, `def-standard-borel-space`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `lem-finite-products-of-standard-borel-spaces-are-standard-borel`, `def-measure-kernel-and-probability-kernel`, `def-probability-measure`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `thm-measurability-of-integration-against-a-kernel`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-moments-variance-and-covariance`, `def-standard-normal-and-normal-laws`, `lem-variance-and-covariance-identities-for-random-variables`, and `thm-factorization-of-expectations-for-independent-variables`.

For the A-page's references to model adequacy and stationarity, I also opened the current draft suppliers `def-scientific-statistical-model-contract` and `def-strict-and-weak-stationarity-for-time-series`. These support the page's distinction between a proposed law and empirical adequacy, and its description of stationarity; neither adds an assumption to the assigned finite-horizon model.

## Mathematical review

- `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`: the finite product joint law gives the required independence; each scalar projection is a sum of independent normals, and the characteristic-function calculation followed by Cramér–Wold gives the block-diagonal multivariate normal law. The argument includes zero-variance projections and uses no inverse.
- `def-general-state-space-model-by-kernels`: the spaces, initial law, transition kernels, observation kernels, interleaved trajectory space, and finite-horizon convention are specified. The definition makes no density, time-homogeneity, stationarity, or empirical-adequacy claim; well-definedness is assigned to the local existence-and-uniqueness theorem.
- `thm-finite-horizon-state-space-kernel-law-exists-uniquely`: the history projections lift the transition and observation kernels to the interleaved sequence. Ionescu–Tulcea supplies the countable path law after deterministic singleton tails are appended; its prefix laws give existence, and the same extension plus uniqueness proves uniqueness. The separate `T=0` case is handled correctly.
- `def-linear-gaussian-state-space-model-with-independent-noises`: dimensions and covariance domains match the state and observation equations, and positive-semidefinite (including singular) covariances are allowed. The definition's independent-noise representation is established by its local path-law theorem.
- `thm-linear-gaussian-state-space-path-law-is-jointly-gaussian`: finite product measures construct independent noise coordinates; the translated Gaussian kernels are probability kernels with measurable evaluations; Tonelli yields the ordered kernel law; finite affine closure and the multivariate-normal projection definition give the stated path distribution and positive-semidefinite covariance. In step 2.1, Tonelli justifies changing the order of the two independent noise integrations when identifying the successive $K_t,G_t$ factors.
- `ex-state-space-model-same-dynamics-distinct-observation-kernels`: the common state recursion and two observation kernels are computed correctly. The cross-covariances 1 and 2 distinguish the joint laws; finite second moments make the covariance comparison valid.
- `ex-linear-gaussian-singular-state-covariance-positive-innovation-covariance`: the point-mass process noise makes $X_1=0$, hence $P_{1|0}=0$; the observation residual equals $r_1$, hence $S_1=[1]$ is positive definite. The example does not invert the singular state covariance.

I found no mathematical defect in the assigned item bodies or page summaries.

## Source check

The cited notes support the model context, with the stated qualifications. Meinshausen's *Time Series Analysis: Notes for the course HS 2022*, §4.1 (PDF pp. 46–48; printed pp. 45–47), describes a latent Markov state, state-dependent observations, the density factorization, and linear state-space equations. Wang's *STAT 720 Time Series Analysis*, §9.1 (relevant equations and assumptions at PDF pp. 146–147; printed pp. 143–144), gives the transition/observation equations and permits degenerate noise covariance; its additional assumptions assert uncorrelatedness, not mutual independence. The assigned linear-Gaussian definition states mutual independence explicitly and proves its finite path-law consequences locally, so it does not infer independence from Wang's weaker source conditions.

- [Meinshausen, *Time Series Analysis*](https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf), §4.1, PDF pp. 46–48 (printed pp. 45–47).
- [Wang, *STAT 720 Time Series Analysis*](https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf), §9.1, relevant equations and assumptions at PDF pp. 146–147 (printed pp. 143–144).

## Edits and validation

No assigned item or page was edited. A formatting pass found that the numbered steps were already blank-line separated, so it made no changes. No material proof repair occurred; therefore no proof contract update or judge-record removal was needed, and no reflow/precheck run was triggered.

I ran the required final layout check on the five proof-bearing assigned items:

```text
node tools/proof-layout.mjs items/lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal.md items/thm-finite-horizon-state-space-kernel-law-exists-uniquely.md items/thm-linear-gaussian-state-space-path-law-is-jointly-gaussian.md items/ex-state-space-model-same-dynamics-distinct-observation-kernels.md items/ex-linear-gaussian-singular-state-covariance-positive-innovation-covariance.md
```

Result: `5 items, 16 steps, 0 defects` (exit code 0).

## Defect not edited

In `research/statistical-models-experiments-62-batch-44.proof-contracts.json:631`, the boundary note for `thm-linear-gaussian-state-space-path-law-is-jointly-gaussian` (`contracts[...].boundaries[case="degenerate"].evidence`) says “Steps 2.1 and 4.1 use characteristic functions.” The item has no step 4.1; its step 1.2 uses characteristic functions, step 2.1 proves the kernel-product integration formula, and step 3.1 proves the affine Gaussian conclusion. This is stale and inaccurate contract evidence. I did not edit the contract file because the dispatch authorizes source repair only in assigned item prose or assigned A-page prose; the theorem proof itself is sound. The exact finding is in the companion JSON.

## Page verdicts and blocker

- `state-space-models-as-probability-laws`: pass. The summary matches the finite-horizon kernel definition and linear-Gaussian theorem, states the Axiom of Choice use and singular-covariance allowance, and disclaims stationarity, filtering, convergence, and empirical-adequacy conclusions.
- `state-space-models-as-probability-laws-examples`: pass. The summary accurately describes the two computations and makes no filtering or convergence claim.
- Blocker: none.

## Coverage note

The final mathematical judgments were made after checking the relevant dependency statements and proof arguments. The assigned files were initially opened before their supplier files, so the literal supplier-before-consumer file-opening order was not achieved; I did not reread them, in keeping with the one-read instruction. I reviewed the direct suppliers and the relevant sections of the two cited source PDFs, but did not audit every transitive proof dependency of published foundational suppliers or every unrelated page listed in the page-level `requires` arrays. No claim is made about those unreviewed transitive proofs or unrelated page summaries.
