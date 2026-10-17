---
id: thm-monte-carlo-shapley-effects-clt-and-standard-errors
kind: theorem
title: Monte Carlo permutation Shapley effects have a joint CLT
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [alg-monte-carlo-permutation-shapley-effects, thm-shapley-effects-are-nonnegative-and-efficient, cor-iid-finite-variance-strong-law, lem-measurable-functions-preserve-independence, thm-multivariate-iid-central-limit-theorem, def-moments-variance-and-covariance, def-axiom-of-choice, def-dependent-input-shapley-effects]
proof_strategy: direct
axiom_use: AC is assumed by the dependent-input Shapley definition and the multivariate iid central limit theorem; bounded permutation increments require no additional choice principle.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Eunhye Song, Barry L. Nelson, and Jeremy Staum, Shapley Effects for Global Sensitivity Analysis: Theory and Computation, §4 and Theorem 3"
      url: https://users.iems.northwestern.edu/~nelsonb/Publications/SongNelsonStaum.pdf
---

## Statement

Assume AC, $d<\infty$, $V>0$, and let $v$ be the conditional-expectation
variance game of [[def-dependent-input-shapley-effects]]. For the iid
uniform-permutation increments $\Delta^{(r)}$ of
[[alg-monte-carlo-permutation-shapley-effects]], the estimates are unbiased
for the Shapley effects, converge almost surely, and
$$\sqrt n(\widehat\phi-\phi)\Rightarrow N\left(0,\frac{\operatorname{Cov}(\Delta)}{V^2}\right).$$
The sample covariance estimate in the algorithm converges almost surely to
$\operatorname{Cov}(\Delta)$, so its standard errors are consistent.
For each finite $n\ge2$ and $d$, the procedure terminates after $n$ rows and
makes at most $2nd$ coalition-value calls. Computing the sample means and
covariance requires $O(nd^2)$ arithmetic operations, apart from permutation
generation and oracle costs.

## Facts & Assumptions

**Given:** AC, finite $d$, $V>0$, the conditional-projection variance game $v$, and iid uniform permutations.

[A1] [[def-axiom-of-choice]]: AC is assumed for the multivariate CLT supplier.

[F1] [[def-dependent-input-shapley-effects]]: the Shapley effect averages marginal contributions over all permutations.

[F2] [[alg-monte-carlo-permutation-shapley-effects]]: each row is the vector of marginal coalition increments and the estimate is its mean divided by $V$.

[F3] [[thm-shapley-effects-are-nonnegative-and-efficient]]: the conditional-projection game is monotone with range $[0,V]$ and endpoints $0,V$.

[F4] [[cor-iid-finite-variance-strong-law]]: iid square-integrable real variables obey the strong law for their sample means.

[F5] [[lem-measurable-functions-preserve-independence]]: measurable coordinatewise functions of an independent family remain independent.

[F6] [[thm-multivariate-iid-central-limit-theorem]]: under AC, finite-dimensional iid vectors with finite second moment have the multivariate CLT.

[F7] [[def-moments-variance-and-covariance]]: covariance is the centered product expectation.

## Proof

**Given:** The hypotheses and facts [A1], [F1]–[F7].

1.1 Fix $i$ and $S\subseteq[d]\setminus\{i\}$. Exactly $|S|!(d-|S|-1)!$ permutations place precisely $S$ before $i$: order $S$ first, place $i$, and order the remaining coordinates last. Dividing by $d!$ gives the coefficient of $v(S\cup\{i\})-v(S)$ in the expectation of $\Delta_i$. This is exactly the Shapley weight in [F1], so $\mathbb E\Delta_i=V\phi_i$ and the estimator is unbiased. [F1, F2, algebra]

1.2 The range and monotonicity of $v$ in [F3] give $0\le\Delta_i\le V$ for every permutation. Thus the increment vector is bounded and has finite covariance. Each increment coordinate and each pairwise product is the same measurable function of each sampled permutation; [F5] gives independence, and the common input law gives identical distributions. Apply [F4] to their coordinate and product sequences; the sample mean and covariance converge almost surely to their population values. [F2, F3, F4, F5, F7, algebra]

2.1 The bounded increment vector satisfies the finite second-moment hypothesis of [F6]. The multivariate CLT gives $\sqrt n(\bar\Delta-\mathbb E\Delta)\Rightarrow N(0,\operatorname{Cov}(\Delta))$. Scaling by the fixed positive $V$ and using step 1.1 gives the stated joint limit for $\widehat\phi$. Step 1.2 gives consistency of the covariance and standard-error estimates. [A1, F2, F5, F6, step 1.1, step 1.2, given, algebra]

3.1 For each of the $n$ rows, the procedure traverses $d$ entries and requests two coalition values per entry. The loops are finite, so it terminates after $n$ rows and makes at most $2nd$ oracle calls. Computing the $d$ sample means and the $d\times d$ sample covariance from these rows takes $O(nd^2)$ arithmetic operations; this excludes permutation generation and oracle costs. [F2, given, algebra] ∎
