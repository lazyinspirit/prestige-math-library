---
id: thm-kolmogorov-strong-law-under-summable-normalized-variances
title: "Strong law under summable normalized variances"
kind: theorem
status: draft
origin: pipeline
deps: ["thm-kolmogorov-convergence-criterion", "lem-kronecker-summation-lemma", "lem-measurable-functions-preserve-independence", "lem-variance-and-covariance-identities-for-random-variables", "def-partial-sums-and-sample-means", "thm-integral-test-for-series"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorems 2.5.6 and 2.5.9; proof of Theorem 2.5.11, pp. 84\u201387"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "Apply the centered convergence criterion to (X_n-E X_n)/b_n, then apply Kronecker pointwise on its probability-one event. State square integrability explicitly instead of mentioning only finite means. Inline rate example: for IID centered L2 variables, b_n=sqrt(n)(log n)^(1/2+epsilon) for n>=2 gives a summable variance series by the integral test, hence S_n/b_n ->0 a.s.; choose the first positive normalizer to preserve monotonicity."
---

## Statement

Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. Let $0<b_n$ be deterministic and nondecreasing with $b_n\to\infty$. If
$$\sum_{n\ge1}\frac{\operatorname{Var}(X_n)}{b_n^2}<\infty,$$
then
$$\frac1{b_n}\sum_{k=1}^n(X_k-\mathbb EX_k)\longrightarrow0\quad\text{almost surely}.$$
In particular, for IID centered square-integrable variables and any $\varepsilon>0$, $S_n/[\sqrt n(\log n)^{1/2+\varepsilon}]\to0$ almost surely (the displayed normalization is used for $n\ge2$).

## Facts & Assumptions

[F1] [[thm-kolmogorov-convergence-criterion]]: For independent centered square-integrable real random variables $(X_n)_{n\ge1}$, if $\sum_{n\ge1}\operatorname{Var}(X_n)<\infty$, then $\sum_{n\ge1}X_n$ converges almost surely and in $L^2$ to the same finite real random variable.

[F2] [[lem-kronecker-summation-lemma]]: Let $(x_n)_{n\ge1}$ be real and let $0<b_n$ be deterministic, nondecreasing, and tend to infinity. If $\sum_{n\ge1}x_n/b_n$ converges in $\mathbb R$, then $\frac1{b_n}\sum_{k=1}^nx_k\longrightarrow0.$ Repeated values of $b_n$ are allowed.

[F3] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let $g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family $(g_i\circ X_i)_{i\in I}$ is independent.

[F4] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space. Then $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$ $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$ Moreover, covariance is symmetric and bilinear on finite linear combinations. On finite full-power-set probability spaces these formulas reduce to the published finite identities.

[F5] [[thm-integral-test-for-series]]: For nonnegative nonincreasing $f$ on $[0,\infty)$, the series $\sum_{k\ge0}f(k)$ converges if and only if the proper integrals $\int_0^N f$ are bounded above as integers $N$ vary.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 The variables $Y_n=(X_n-\mathbb EX_n)/b_n$ are independent, centered, and square-integrable, with variances $\operatorname{Var}(X_n)/b_n^2$. Measurable transformations give independence, and covariance bilinearity gives the variance identity. The convergence criterion makes $\sum_nY_n$ converge on one probability-one event. [F3, F4, F1, given]

2.1 On each path in that event apply Kronecker to $x_n=X_n-\mathbb EX_n$ and the given $b_n$. The deterministic conclusion is precisely the asserted normalized convergence. Zero variances and repeated positive normalizers present no exception. [F2, step 1.1]

3.1 For the rate assertion, set $b_n=\sqrt n(\log n)^{1/2+\varepsilon}$ for $n\ge2$ and choose $b_1=b_2$. These are positive and nondecreasing. The variance sum from $n=2$ is $\sigma^2\sum_{n\ge2}[n(\log n)^{1+2\varepsilon}]^{-1}$. Apply the zero-based integral test to $f(t)=[(t+2)(\log(t+2))^{1+2\varepsilon}]^{-1}$ on $[0,\infty)$: it is nonnegative and decreasing, and substitution $u=\log(t+2)$ bounds its integrals by $\int_{\log2}^\infty u^{-1-2\varepsilon}\,du=(\log2)^{-2\varepsilon}/(2\varepsilon)$. The first variance term is finite. The result already proved therefore gives the rate, also when $\sigma^2=0$. [F5, step 1.1, step 2.1, algebra] ∎
