# Batch 1 authoring notes

Run: machine-learning-all-101-2026-10-19  
Pair: gaussian-smoothing-densities-scores-and-endpoint-limits  
Scheduling input: 424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0

## Active-run check

The initial recomputed `.autopilot` status was running at 1-scaffold with 0/101 results and no work in flight. The current Git HEAD was `dd17c1fe56` (Lower mathematics workflow worker concurrency to 20). No earlier resume handoff was used.

Final active-run recheck: `.autopilot` reports the run running at `1-scaffold`, 13/101 covered, with no workers in flight; the latest status lists artifacts missing for units 15, 33, 35, and 46. The blocker file at 2026-10-18 19:34 UTC reports a `stage-stalemate` for units 2, 14, 15, 17, 20, 23, 25, 33, 35, and 46. None of the nine batch-1 items appears in that blocker. The run remains held at Step 1. Current HEAD remains `dd17c1fe56`.

## Plan reconciliation

The complete P-SDE-03 section in research/plan-machine-learning-track.md and the matching research/plan-spec.json entry agree on the A/B pages, required pages, five A-page interfaces, compactly supported initial law, scalar time-only noise, truncated-time score regularity, endpoint weak limit, examples, and warnings. No design conflict was found. The plan-spec entry incorporates the complete research/scaffold-refresh-2026-10-18/machine-learning/sde-density-reversal-closure.md module; it does not authorize the broader conditional reverse-time contracts from P-SDE-01/P-SDE-02.

## Item inventory, logical dependencies, and levels

| Item | Level | In-run suppliers |
|---|---:|---|
| lem-deterministic-ito-integral-has-gaussian-independent-increments | 0 | none |
| def-gaussian-smoothed-data-law-and-transition-density | 1 | deterministic-integral lemma |
| thm-gaussian-smoothing-density-and-forward-equation | 2 | smoothed-law definition |
| thm-gaussian-smoothing-endpoint-weak-limit | 2 | deterministic-integral lemma; smoothed-law definition; W2 definition from batch 50 |
| thm-gaussian-mixture-score-and-global-lipschitz-bound | 3 | smoothed-law definition; heat-equation theorem |
| ex-gaussian-two-point-mixture-smoothing-density | 2 | smoothed-law definition |
| ex-singular-line-law-has-smooth-positive-time-density | 3 | smoothed-law definition; heat-equation theorem; box-measure theorem |
| ex-gaussian-point-mass-endpoint-coupling-bound | 3 | smoothed-law definition; endpoint theorem; W2 definition from batch 50 |
| ex-gaussian-point-mass-score-lipschitz-blows-up-at-zero | 4 | smoothed-law definition; score theorem |

Levels use the highest declared item level among in-run suppliers; the W2 definition from batch 50 is level 0 and does not change the item levels. The dispatched scheduling input hash `424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0` declared batch 1 level 0 with no prerequisite batch. The current generated batch-dependency file now lists batch 1 level 1 requiring batch 50, but `node tools/batch-dependency-levels.mjs check` reports that file stale against current manifests. The endpoint theorem and point-mass coupling example therefore retain open cross-batch rows pending owner scheduling reconciliation, and their Step-1 decisions are escalated. No cycle is present in the scoped item graph. The endpoint theorem remains item level 2 from its level-0 increment lemma and level-1 smoothed-law definition.

## Verified supplier interfaces

- def-d-dimensional-brownian-motion defines vector increments as independent centered Gaussian vectors with covariance proportional to the identity and assumes full AC. It does not itself specify a filtration.
- def-elementary-predictable-brownian-integrand supplies standing hypothesis (H): the Brownian motion is adapted and each increment after time s is independent of F_s. The new statement repeats the filtered increment condition explicitly.
- def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, thm-ito-isometry-and-linearity-in-predictable-l2, thm-ito-integral-process-has-a-continuous-martingale-version, and thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space supply finite step sums, L2 extension, coordinatewise isometry, adapted continuous versions, and L2 norm continuity. These inherit full AC.
- def-ito-sde-and-strong-solution, thm-global-strong-well-posedness-for-lipschitz-ito-sdes, and thm-finite-horizon-moments-for-lipschitz-ito-sdes support the additive SDE with b=0, sigma(t,x)=g(t)I_d, bounded g, and bounded initial support.
- def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-independent-random-elements-have-product-joint-law, and thm-borel-products-of-euclidean-spaces-are-euclidean-borel support the explicit normalized mixture and transition kernels.
- thm-dominated-convergence supports the local derivative and cutoff limits; def-weak-convergence-of-borel-probability-measures, thm-uniqueness-of-a-law-from-its-characteristic-function, and thm-cramer-wold-device support the weak forward-law uniqueness claim. def-moments-variance-and-covariance supplies the covariance convention.
- Full AC is explicit in every new carrier because the Itô/Brownian and strong-SDE interfaces used by the claims require it. The local conditional-covariance estimate is choice-free once the explicit kernel is defined.
- The batch-50 draft `def-wasserstein-two-space-and-couplings` defines `P_2(R^d)`, Borel couplings on the Euclidean product, and `W_2` as the square root of the quadratic-cost infimum. Its body was inspected with its exact hypotheses; its direct dependencies (Borel probability law on Polish space, probability measure, expectation, product sigma-algebra, the Borel product lemma for second-countable spaces, and Polish space) have current published carriers. This interface supplies only the endpoint metric definition; the endpoint proof separately establishes finite second moments and constructs its coupling. The authored scheduling input says batch 1 has no prerequisite batches, so both W2-dependent consumer edges are recorded open rather than silently revising that input.
- The Gaussian smoothing definition was tightened after comparing its statement with the published SDE definition: it now explicitly requires adapted Brownian motion with increments independent of every `F_s`, matching the exact filtered hypothesis used by the item-1 lemma and strong-solution theorem.

## Supplier inventory defect outside this write scope

The published page the-lebesgue-integral-and-the-convergence-theorems lists thm-continuity-under-integral-sign and thm-differentiation-under-integral-sign, but no matching item carriers exist under those IDs. The local heat-equation proof does not depend on either missing supplier: it establishes the required Gaussian derivative bounds and applies the available thm-dominated-convergence with the compact support of mu. This is recorded for owner reconciliation; no published page or shared plan is edited in this batch.

## Item checkpoint: deterministic Itô integral lemma

Completed ID: lem-deterministic-ito-integral-has-gaussian-independent-increments. Claim: for deterministic positive C1 scalar g on [0,T], the coordinatewise integral against a filtered d-dimensional Brownian motion has increments independent of F_s with law N_d(0,(v(t)-v(s))I_d), and hence independent increments on finite time lists. The filtered vector-increment condition is stated explicitly because the published d-dimensional Brownian definition is process-level and does not by itself define a filtration.

Direct dependencies are the Axiom of Choice, the d-dimensional Brownian and scalar predictable/Itô interfaces, Itô isometry and continuous adapted version, L2 norm continuity, variance nonnegativity, Tonelli, and the multivariate-normal characteristic-function/uniqueness interface. There is no in-run supplier, so item dependency_level is 0. The explicit approximation first takes the deterministic expectation of elementary predictable approximants, then truncates them to (s,t]; Jensen is not invoked, and the projection error is bounded by nonnegative variance.

Read source contexts: Lawler, Stochastic Calculus, §§3.2.2–3.2.3 and Exercise 3.8, https://www.math.uchicago.edu/~lawler/finbook.pdf; Särkkä–Solin, Applied Stochastic Differential Equations §4.1, https://users.aalto.fi/~asolin/sde-book/sde-book.pdf; NYU Lecture 7 §1.2, https://math.nyu.edu/~goodman/teaching/StochCalc2007/notes/l7.pdf; Mattingly, Duke Probability Workbook exercise, https://sites.duke.edu/probabilityworkbook/gaussian-ito-integrals/. The first three give complete book/lecture treatment of the stochastic-integral framework; the Duke exercise supplies the requested characteristic-function route but not a completed proof. The new proof is local and complete.

Item body and manifest dependencies agree. Final proof-contract, proof-layout, source-fetch, scoped dependency, and Step-1 checks are recorded below.

## Item checkpoint: smoothed-law definition

Completed ID: def-gaussian-smoothed-data-law-and-transition-density. The definition fixes a compactly supported Borel initial law, deterministic positive C1 scalar noise, v(t)=integral from 0 to t of g squared, the product Gaussian kernel phi, the positive marginal mixture p_t, and the transition kernel q(s,x;t,y). Its verification proves finite positivity and normalization, identifies p_t as the strong solution's law, establishes the joint transition identity from independent increments, and proves Chapman–Kolmogorov by completing the square. The SDE specialization is b=0 and sigma(t,x)=g(t)I_d; the global Lipschitz/linear-growth and initial L2 hypotheses were checked against the actual published SDE supplier.

Direct in-run supplier: lem-deterministic-ito-integral-has-gaussian-independent-increments at level 0. Item dependency_level is 1. External dependencies include the published SDE strong-solution definition/theorem, product law for independent random elements, Euclidean Borel products, normal density normalization and scaling, and Tonelli. All are recorded in the item and batch manifest. No density assumption on mu is made.

The proof, placement, and contract are complete; local arguments—not source citations alone—prove normalization, transition identity, and Chapman–Kolmogorov.

## Item checkpoint: heat equation and weak-law uniqueness

Completed ID: thm-gaussian-smoothing-density-and-forward-equation. On each positive-time compact strip, explicit derivatives of the Gaussian kernel have uniform bounds over the compact support of mu, so dominated convergence proves C-infinity spatial regularity, continuous time differentiability, and the heat equation. The family of mixture laws is shown to satisfy the time-dependent weak forward formulation; a backward heat test with an explicit scaled compact cutoff gives the same dual formula for every narrowly continuous weak solution. Compactly supported smooth tests then determine all vector characteristic functions, and scalar uniqueness plus Cramér–Wold identifies the law.

Direct in-run supplier: def-gaussian-smoothed-data-law-and-transition-density at level 1; dependency_level is 2. The local proof uses the available dominated-convergence and Fubini results. It does not depend on the absent published page entries thm-continuity-under-integral-sign or thm-differentiation-under-integral-sign: the Gaussian derivative majorants and the backward-test cutoff estimate are proved here. Exact supplier excerpts and current phase-step claims are in the strict proof contract.

The weak-solution convention, endpoint t=0 (where mu may be singular), probability normalization, boundary terms, compact cutoff limit, and uniqueness of the vector law are handled explicitly. The Gaussian characteristic-function supplier is used in the final Fourier step. No smooth density or score is claimed at t=0. Hunter Theorem 5.5's Lp restriction is not extended to singular starts.

## Item checkpoint: endpoint weak limit

Completed ID: `thm-gaussian-smoothing-endpoint-weak-limit`. For the compactly supported initial law and deterministic scalar noise, the exact increment second moment is `d v(epsilon)`. The joint law of `(X_epsilon,X_0)` is a coupling with that quadratic cost, which gives the `W2` bound; Markov's inequality was proved in-line from the pointwise indicator inequality. For weak convergence, a bounded continuous test is uniformly continuous on a fixed compact neighborhood of the initial support, and the complement is controlled by the same second-moment tail estimate. No score, density, learned-score error, or discretization guarantee is asserted at the singular endpoint.

Direct in-run suppliers are the deterministic-integral lemma (level 0) and smoothed-law definition (level 1), so item level is 2. The needed `W2` notation is defined by `def-wasserstein-two-space-and-couplings` from batch 50; its current statement and published direct definitions were read. The scoped item-level graph passes, but the dispatched batch-1 input says no prerequisite batches while the generated batch-level file now lists batch 50 and is stale against current manifests. This item is complete mathematically and in evidence, with its Step-1 decision escalated for owner reconciliation. Lawler and Hunter provide context; neither substitutes for the local coupling and weak-convergence proofs.

## Item checkpoint: score identities and bound

Completed ID: `thm-gaussian-mixture-score-and-global-lipschitz-bound`. For `nu_{t,x}(dz)=phi_{v(t)}(x-z)mu(dz)/p_t(x)`, direct differentiation and the quotient rule prove `score=-(x-m)/v` and `D score=-I/v+Cov(Z)/v^2`. Compact support gives `0 <= u^T Cov(Z)u <= R^2|u|^2`, hence the uniform truncated-time Lipschitz and linear-growth bounds. The proof includes compact-neighborhood majorants for differentiating the numerator and denominator. Level 3 follows from the smoothed-law definition and heat-equation regularity supplier.

The full arXiv 2605.19391 §1 Gaussian Tweedie identities were inspected; the source's smooth-density reverse-time discussion is not imported. Hunter Ch. 5 supports the Gaussian convolution context but does not supply the posterior covariance bound. That bound and every quotient-rule step are proved locally. The score claim and local derivative/covariance argument pass the final scoped checks.

## Item checkpoints: B-page examples

- `ex-gaussian-two-point-mixture-smoothing-density` (level 2): direct substitution of a two-atom law gives the normalized positive-time mixture and the coincident-atom/endpoint cases. Its only in-run supplier is the smoothed-law definition.
- `ex-singular-line-law-has-smooth-positive-time-density` (level 3): the line segment has zero planar Lebesgue measure by rectangle covers of area `2/n`, while its law gives the segment mass one; the explicit convolution is the displayed line integral and the heat theorem supplies positive-time spatial smoothness. Its in-run suppliers are the smoothed-law definition and heat theorem; the published box-measure result supplies the covering areas.
- `ex-gaussian-point-mass-score-lipschitz-blows-up-at-zero` (level 4): the posterior under a point mass is deterministic, so the score is `-(x-a)/v(t)` with exact Lipschitz constant `1/v(t)`; the bound diverges as the truncation tends to zero.
- `ex-gaussian-point-mass-endpoint-coupling-bound` (level 3): every coupling with first marginal `delta_a` is concentrated on `{a} x R^d`, so its cost is the Gaussian second moment `d c^2 epsilon`; hence the `W2` endpoint estimate is exact. Like the endpoint theorem, it consumes the batch-50 W2 definition and is escalated pending schedule reconciliation.

The examples are all B-page leaves. Source references are contextual and the finite calculations are proved locally. The point-mass endpoint example has the same open batch-50 W2 scheduling edge as the A endpoint theorem; its Step-1 decision is escalated.

## Source reading and retrieval history

- John K. Hunter, Notes on Partial Differential Equations, Chapter 5, §§5.1.1–5.1.2, PDF pp. 127–132, https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf. The complete heat-kernel and Theorems 5.4–5.5 arguments were read. The source's Theorem 5.5 treats Lp initial densities; it does not cover a singular finite measure, so the local compact-measure differentiation and weak uniqueness proof remains necessary.
- Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, §4.1, PDF pp. 42–45, and §5, Fokker–Planck discussion, https://users.aalto.fi/~asolin/sde-book/sde-book.pdf. The Itô integral construction and forward-equation context were inspected. Its general density discussion assumes a density and is context only for the singular-start branch.
- Jonathan Mattingly, Gaussian Itô Integrals, Duke Probability Workbook, https://sites.duke.edu/probabilityworkbook/gaussian-ito-integrals/. The complete exercise was read; it specifies the finite-step characteristic-function argument but asks the reader to supply the proof. It is treated as proof-route context, not as proof evidence.
- Simo Särkkä and Arno Solin, Stochastic Calculus Notes, Lecture 7, §1.2, PDF pp. 1–2, https://math.nyu.edu/~goodman/teaching/StochCalc2007/notes/l7.pdf. The complete relevant lecture section was read; it states the deterministic-integral Gaussian property as known, so the new item supplies its full proof.
- Wenpin Tang, Nizar Touzi, Zikun Zhang, and Xun Yu Zhou, Tweedie's Formulae and Diffusion Generative Models Beyond Gaussian, arXiv:2605.19391, §1, equations (1.1)–(1.3), https://arxiv.org/pdf/2605.19391. The accessible full text was read for the Gaussian posterior-mean/score identity. Its broader time-reversal discussion assumes a smooth density and does not establish the local score covariance bound or the singular-start endpoint result.

Retrieval attempts for Efron's Tweedie's Formula and Selection Bias via PMC/Europe PMC returned a browser challenge/403, and the Columbia mirror timed out. Those optional alternatives were not retained as supporting sources; the accessible arXiv full-text treatment of the Gaussian Tweedie identity was read, and the covariance bound is proved locally. The failed-copy history remains here; no claim relies on those copies and none is represented as successfully read. All six selected sources fetched and stamped successfully, with no source drops or retrieval-resolution fallback needed for the selected set. Hunter Theorem 5.5 assumes an `L^p` initial density, so its argument does not directly prove the singular-finite-measure claims.

## Current status and next action

All five A items and four B examples have draft carriers, and both A/B pages contain YAML frontmatter only. Page inventories, direct dependencies, and item levels match the manifest. The strict proof-contract check covers all 9 items with 67 exact supplier quotations, 33 phase-step records, all 8 boundary worksheets per item, and 9 finite-smoke cases. All six selected sources have fetch stamps. Statement continuity (9 items), precheck (9/9), proof-layout (9 items/33 steps), rendercheck (11 files), content-policy (9 items), and focused depcheck pass. The scoped item-level calculation passes with levels 0, 1, 2, 2, 3, 2, 3, 3, and 4. The full-run item-level check is blocked by 144 other empty scaffold inventories; the batch-level file is stale against current manifests. Step-1 records mark 7 of these items ready and the two W2-dependent endpoint items escalated. The latest native Step-1 check reports 198/359 ready overall, 161 item records unclosed (including these two escalations and 159 other unclosed items), plus 144 empty pages. The full run remains open; no independent approval or publication is implied.
