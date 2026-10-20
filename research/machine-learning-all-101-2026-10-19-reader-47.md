# Step 3a reader report — batch 47

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `47`

## Opened inventory

Assigned pages:

- `library/machine-learning/sample-covariance-resolvent-limits.md` — A page, draft, frontmatter-only, `page_layout: compact-v1`.
- `library/machine-learning/sample-covariance-resolvent-limits-examples.md` — B page, draft, frontmatter-only, `page_layout: compact-v1`.

Assigned items, opened in dependency order:

- A, level 0: `def-sample-covariance-directional-spectral-measure`; `lem-bounded-complex-iid-matrix-norm-bound`; `lem-complex-quadratic-form-fourth-moment-bound`; `lem-deformed-mp-fixed-point-solution-is-unique`; `lem-hermitian-rank-one-resolvent-update-and-trace-norm-bound`.
- A, level 1: `lem-bounded-complex-resolvent-quadratic-form-concentration`; `lem-hermitian-resolvent-trace-concentration`; `lem-hermitian-spectral-measure-is-probability`.
- A, level 2: `lem-bounded-complex-resolvent-deterministic-equivalent`.
- A, level 3: `thm-general-population-sample-covariance-esd-limit-for-bounded-entries`.
- A, level 4: `thm-directional-sample-covariance-resolvent-limit-for-bounded-entries`.
- A, level 5: `lem-complex-sample-covariance-norm-bound-from-real-edge`.
- A, level 6: `thm-directional-sample-covariance-resolvent-limit`.
- A, level 7: `cor-isotropic-minimum-norm-risk-closure-under-edge-gap`; `cor-negative-axis-directional-resolvent-integrals`.
- B, levels 7–8: `ex-anisotropic-sample-covariance-directional-condition`; `ex-isotropic-sample-covariance-directional-marchenko-pastur-limit`; `ex-critical-aspect-one-no-positive-edge-gap`.

Dependency context opened for the assigned arguments included the current Stieltjes definition and inversion lemma; the Marchenko–Pastur measure definition and transform lemma; the real Marchenko–Pastur law, lower- and upper-edge results, and their covariance confinement and fixed-degree trace-witness suppliers; Moore–Penrose projection and rank results; and the finite-dimensional spectral, singular-value, operator-norm, weak-convergence, tightness, integration, iid, Markov, Borel–Cantelli, product-law, and Fubini suppliers. The risk branch's Marchenko–Pastur law supplier is assigned to batch 46; its manifest entry was checked.

## Review and repairs

The authored definitions, fixed-point uniqueness lemma, quadratic-form and resolvent estimates, bounded-entry deterministic equivalent, expected ESD limit, directional limit, finite-fourth truncation argument, risk cutoff calculation, negative-axis corollary, and three examples were checked against their current stated hypotheses and supplier interfaces. The claims retain the complex/real domains, dimensions, aspect ratios, normalization, AC assumptions, and edge cases. The risk proof keeps design-conditional noise expectation separate from the almost-sure design limit and does not pass a reciprocal-spectrum limit through weak convergence without a positive-edge cutoff. The critical example only claims divergence for the limiting law and fixed negative-axis cutoffs; it does not claim convergence of finite-sample reciprocal traces.

Five assigned almost-sure results did not state that their sequences live on one probability space, although their proofs apply Borel–Cantelli across the sequence index. I added that hypothesis to:

- `lem-bounded-complex-iid-matrix-norm-bound`;
- `lem-bounded-complex-resolvent-quadratic-form-concentration`;
- `lem-hermitian-resolvent-trace-concentration`;
- `thm-general-population-sample-covariance-esd-limit-for-bounded-entries`;
- `thm-directional-sample-covariance-resolvent-limit-for-bounded-entries`.

I made the common-space premise explicit in the relevant proof introductions and Borel–Cantelli steps, added the corresponding `given` justifications, and updated the batch 47 proof contract's derivation records and seven exact supplier excerpts used by these items and their assigned consumers. The repository definition of almost-sure convergence explicitly takes the random variables on one probability space. No changed item had a `verification.judge` record to remove.

Validation after edits:

- Reflow: all five changed items reported `unchanged`.
- Precheck: all five changed items passed (`direct`, zero failures).
- Final proof-layout: `5 items, 21 steps, 0 defects`.

No page prose was changed. Both page bodies remain empty. No TikZ or tikzcd diagrams occur in the assigned items or pages, and no diagram was needed to state or prove these results.

## Source checks

- Bai, Miao, and Pan, “On Asymptotics of Eigenvectors of Large Sample Covariance Matrix”: Theorem 1, printed pp. 8–9, and the complete Section 2 proof, printed pp. 12–16, were read. Its hypotheses and directional-resolvent convention match the finite-fourth theorem; the local proof supplies its own truncation, concentration, and deterministic-equivalent steps. [Full paper](https://arxiv.org/pdf/0708.1720).
- Silverstein, “Strong Convergence of the Empirical Distribution of Eigenvalues of Large Dimensional Random Matrices”: Theorem 1.1 and its Section 3 proof, PDF pp. 3–8, were read. The local ESD proof states AC for the Prokhorov extraction and keeps the same Stieltjes-transform convention. [Full paper](https://jack.math.ncsu.edu/strong.pdf).
- Hastie, Montanari, Rosset, and Tibshirani, “Surprises in High-Dimensional Ridgeless Least Squares Interpolation”: §2.1–2.3, the underparameterized Theorem 1, and the overparameterized Theorem 2 statement were checked. Their overparameterized theorem has a stronger moment assumption; the assigned finite-fourth result is derived locally from the directional law and edge suppliers rather than imported from that source. [Author PDF](https://www.stat.cmu.edu/~ryantibs/papers/ridgeless.pdf).
- The Bai–Yin publisher record's abstract confirms the finite-fourth lower-edge limit and aspect-ratio normalization. The assigned lower-edge chain was also checked through its current local confinement and polynomial-witness proofs; the 1993 full paper was not retrieved. [Publisher record](https://doi.org/10.1214/aop/1176989118).

## Uneditable dependency finding

At the time I read `items/thm-marchenko-pastur-law-for-sample-covariance.md` in batch 46, its Statement asserted almost-sure weak convergence for matrices `X_n` specified separately for each `n`, without requiring a common probability space; proof step 5.1 applies Borel–Cantelli to events across `n`. This item is a direct dependency of the assigned `cor-isotropic-minimum-norm-risk-closure-under-edge-gap`. The current item now includes a common-probability-space clause. Its observation-time raw hash was `eea7cad582c74594d0da14224b714df74dfae30327ea61af8ed58fd2b12a8cc7`; its current raw hash is `1c02edd3bd4a0f9e48494471a67470df0094b324576bc19caa7d32545c23353e`. Because the original bytes are no longer current and no immutable pre-reader snapshot binds them, the routed finding leaves `observed_source` null and records this byte limitation.

## Page verdicts and blockers

- `sample-covariance-resolvent-limits`: The A-page inventory, draft status, required-page metadata, and empty compact layout are consistent. Its assigned items are sound after the five hypothesis repairs. The risk corollary's batch 46 MP-law dependency was defective at observation and appears corrected in current bytes; the historic source cannot be bound to an allowed snapshot, as recorded above.
- `sample-covariance-resolvent-limits-examples`: The B-page inventory, draft status, A-page prerequisite, and empty compact layout are consistent. All three examples follow from their displayed calculations and assigned suppliers.

No review blocker remains. The final Autopilot status showed the run still in `3a-read`, with no item running and no active blocker reported.
