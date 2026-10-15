# Step 3a reader report — batch 5

Run: `statistical-models-experiments-62`  
Role: independent reader  
Scope: batch `5`

## Opened inventory

The batch manifest, `research/statistical-models-experiments-62-batch-5.proof-contracts.json`, and `research/statistical-models-experiments-62-batch-5.cross-batch-dependencies.json` were consulted as evidence. The manifest assigns the following two pages and twelve items.

Assigned pages:

- `library/statistical-models-and-experiments/multivariate-normal-wishart-hotelling.md` (A page)
- `library/statistical-models-and-experiments/multivariate-normal-wishart-hotelling-examples.md` (B page)

Assigned items, reviewed supplier-first:

1. `def-wishart-law`
2. `lem-standard-normal-matrix-has-full-row-rank-almost-surely`
3. `def-multivariate-normal-sample-model-and-statistics`
4. `lem-standard-wishart-independent-normal-quadratic-form-is-f`
5. `thm-multivariate-normal-sample-mean-scatter-independence-and-wishart`
6. `thm-covariance-likelihood-ratio-asymptotic-chi-square`
7. `thm-hotelling-t2-exact-f-distribution`
8. `thm-wishart-trace-statistic-is-chi-square`
9. `cor-exact-hotelling-one-sample-test`
10. `ex-sample-covariance-singular-when-sample-size-not-exceeding-dimension`
11. `ex-exact-wishart-trace-and-asymptotic-covariance-lrt-differ`
12. `ex-hotelling-t2-two-dimensional-exact-test`

Opened dependency items used to check definitions, measurability, distributional steps, and test interfaces:

- Probability and Gaussian laws: `def-axiom-of-choice`, `def-countable-choice`, `lem-ac-supplies-sequential-choices-for-probability-constructions`, `def-multivariate-normal-law`, `def-standard-normal-and-normal-laws`, `def-probability-measure`, `def-finite-sigma-finite-and-semifinite-measures`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-law-or-distribution-of-a-random-element`, `cor-continuous-functions-are-borel-measurable`, `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, `thm-grouping-independent-sigma-algebras`, `lem-measurable-functions-preserve-independence`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.
- Linear algebra and Gaussian quadratic forms: `thm-finite-dimensional-orthogonal-decomposition`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-orthogonal-transform-preserves-standard-normal-product-law`, `def-orthogonal-projection`, `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`, `thm-orthogonal-projection-has-independent-chi-square-sums`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, and `thm-sylvesters-criterion-for-positive-definiteness`.
- Statistical models, likelihood, and asymptotics: `def-scientific-statistical-model-contract`, `def-statistical-experiment`, `def-parametric-statistical-model`, `def-statistic-and-estimator`, `def-dominated-statistical-experiment`, `def-likelihood-density`, `def-wald-score-likelihood-ratio-statistics`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`, `thm-multivariate-iid-central-limit-theorem`, `thm-continuous-mapping-theorem`, `thm-vector-slutsky`, `thm-vector-stochastic-order-calculus`, and `def-op-and-little-op-stochastic-bounds`.
- Distributional and testing interfaces: `def-chi-square-law`, `def-student-t-and-f-laws`, `lem-positive-df-chi-square-has-density-and-regular-cdf`, `lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing`, `def-randomized-test`, `def-randomized-procedure-as-a-markov-kernel`, `def-measure-kernel-and-probability-kernel`, `def-measurable-function-between-measurable-spaces`, and `def-test-size-and-power`.
- Rank argument: `def-rank-and-nullity` and `thm-rank-nullity`.

Opened page prerequisites named by the A-page manifest: `scientific-statistical-model-contracts`, `exact-gaussian-linear-regression-inference`, `dominated-experiments-likelihood-and-sufficiency`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `confidence-sets-pivots-and-test-inversion`, `gaussian-orthogonal-decomposition-and-quadratic-forms`, `central-limit-theorems`, `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, and `inner-product-spaces-and-orthogonality`.

## Mathematical review

- `def-wishart-law` defines the law as a finite Gaussian outer-product pushforward, preserves singular cases, and makes no unsupported density claim. The matrix-valued map is continuous and the probability product construction is supported by the opened local interfaces.
- `lem-standard-normal-matrix-has-full-row-rank-almost-surely` handles the first-column base case, conditions on fixed proper spans, identifies the rank-deficient sections as Borel, and uses independence and Tonelli to obtain the almost-sure induction. The conclusion for (GG^T) follows from full row rank.
- `def-multivariate-normal-sample-model-and-statistics` specifies vector-valued sampling units and the product Borel experiment. It keeps (S=R/(n-1)) distinct from (M=R/n), and its model-contract fields match the current batch-1 contract definition.
- `lem-standard-wishart-independent-normal-quadratic-form-is-f` proves positive definiteness, identifies the Schur-complement residual as a chi-square quantity, establishes its independence from the numerator by rotational invariance and product integration, and obtains the stated (F_{p,m-p+1}) normalization. The (p=1) case and all extended measurable definitions are included.
- `thm-multivariate-normal-sample-mean-scatter-independence-and-wishart` applies an orthogonal transform in the sample-index coordinate. The transformed mean and residual vectors give the claimed independence, the (n-1) Wishart degrees of freedom, and the (n>p) positive-definiteness condition.
- `thm-covariance-likelihood-ratio-asymptotic-chi-square` derives the explicit Gaussian density and both maximized likelihoods before stating the finite-sample LR identity. Under the fixed-(p) null it proves the covariance-coordinate CLT, includes the Gaussian fourth-moment calculation, removes the sample-centering term, and expands the log determinant to obtain (p(p+1)/2) chi-square degrees of freedom. It does not claim a finite-sample chi-square law.
- `thm-hotelling-t2-exact-f-distribution` whitens the independent sample mean and scatter and applies the inverse-Wishart quadratic-form lemma with (m=n-1); the resulting factor is ((n-p)/(p(n-1))), with positive degrees of freedom under (n>p).
- `thm-wishart-trace-statistic-is-chi-square` reduces the trace to (p(n-1)) independent squared standard-normal coordinates and remains valid when the scatter is singular.
- `cor-exact-hotelling-one-sample-test` establishes Borel measurability of the zero-extended statistic and deterministic test kernel, then uses the continuous strictly increasing (F) CDF to prove rejection probability (alpha) at every null covariance and hence exact size.
- The three B-page computations check directly: the rank bound for the centered data matrix; (R=3,S=1,M=3/4) and LR value (4(\log(4/3)-1/4)\approx0.1507); and (S=(2/3)I_2,T^2=12), scaled (F) statistic (4). Each example retains the relevant model or calibration qualifications.

The cited source checks agree with the local convention. Mathai, Provost, and Haubold, *Multivariate Statistical Analysis in the Real and Complex Domains*, Chapter 6 §6.3.1, Theorem 6.3.1 (printed pp. 417–418; PDF pp. 22–23), state that for the scatter matrix (R=\sum_i(X_i-\bar X)(X_i-\bar X)^T), (u=n(\bar X-\mu)^TR^{-1}(\bar X-\mu)\sim \frac{p}{n-p}F_{p,n-p}); this is equivalent to the assigned (T^2=n(\bar X-\mu)^TS^{-1}(\bar X-\mu)) convention with (S=R/(n-1)). [Source PDF](https://link.springer.com/content/pdf/10.1007/978-3-030-95864-0_6.pdf)

Mukherjee, *Multivariate Analysis*, Lecture 3, Theorem 3.7 (eq. 3.6) and Corollary 3.8 (eq. 3.10, PDF pp. 3–5), give Hotelling's law $T^2(p,m)\overset{d}{=}\frac{mp}{m-p+1}F_{p,m-p+1}$ and the one-sample $F_{p,n-p}$ scaling. [Lecture PDF](https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-3.pdf) Hoff, *Multivariate Statistical Analysis*, Chapter 7 §3, printed pp. 163–165, defines the statistic using $\widehat\Sigma=R/(n-1)$; Exercise 51 states the corresponding conversion to $F_{p,n-p+1}$. The exact conversion used here is established in the assigned proof. [Notes PDF](https://www2.stat.duke.edu/~pdh10/Teaching/832/Materials/notes.pdf)

Mukherjee, Lecture 7 §7.1, eq. 7.1 (PDF p. 2), states the generic fixed-parameter-dimension Wilks limit and notes its fixed-dimension condition. The assigned covariance-LR item supplies its own detailed proof and assumptions. [Lecture PDF](https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-7.pdf)

## Edits and unresolved findings

- **Edits:** none. No item or page prose was changed.
- **Defects not editable:** none confirmed. In particular, the only cross-batch item dependency, `def-scientific-statistical-model-contract` (batch 1), supplies the contract interface instantiated by the assigned sample-model definition; no defect was found in the interface used here.
- **Page verdict — `multivariate-normal-wishart-hotelling`:** no confirmed defect. Its summary preserves the distinction between exact Wishart trace calibration and asymptotic covariance-LR calibration and accurately summarizes the exact Hotelling result.
- **Page verdict — `multivariate-normal-wishart-hotelling-examples`:** no confirmed defect. Its summary matches the three examples and preserves their qualifications.
- **Blocker:** none.
- No item changed, so reflow, precheck, and the changed-item `proof-layout` command were not triggered. No judge record, stamp, gate, or self-certification was made.

## Coverage limitation

The assigned items and pages, their cited mathematical interfaces, and the named page prerequisites were reviewed. This was not a full audit of every transitive proof dependency behind the published foundational suppliers; unrelated supplier proofs and the rest of the library were outside this batch review.
