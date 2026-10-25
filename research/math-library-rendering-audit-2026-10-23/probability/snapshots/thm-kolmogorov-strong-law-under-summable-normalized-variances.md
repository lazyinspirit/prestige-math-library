---
id: thm-kolmogorov-strong-law-under-summable-normalized-variances
title: "Strong law under summable normalized variances"
kind: theorem
status: published
origin: pipeline
deps: [thm-kolmogorov-convergence-criterion, lem-kronecker-summation-lemma, lem-measurable-functions-preserve-independence, lem-variance-and-covariance-identities-for-random-variables, def-partial-sums-and-sample-means, thm-natural-logarithm-laws, def-real-power, thm-real-power-laws, thm-exponential-is-strictly-increasing, thm-p-series-real-exponents, thm-nonnegative-series-bounded-partial-sums]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-dyadic-rate-interface-repair
    delegated_by: owner
sources:
  references:
    - title: "Theorems 2.5.6 and 2.5.9; proof of Theorem 2.5.11, pp. 84\u201387"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "Apply the centered convergence criterion to (X_n-E X_n)/b_n, then Kronecker pointwise. For the logarithmic rate, verify positive nondecreasing unbounded normalizers using earlier logarithm and real-power laws; bound each dyadic variance block by a constant times j^(-1-2epsilon), and apply the earlier real p-series and bounded-partial-sum criterion."
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

[F5] The natural logarithm is strictly increasing, $\log1=0$, and $\log(ab)=\log a+\log b$ for positive $a,b$ ([[thm-natural-logarithm-laws]]). Real powers of positive bases are $a^r=\exp(r\log a)$ ([[def-real-power]]) and satisfy the product and iterated-power laws ([[thm-real-power-laws]]). Since the exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]), $a\mapsto a^r$ is strictly increasing for $r>0$.

[F6] For real $p>1$, $\sum_{j\ge1}j^{-p}$ converges ([[thm-p-series-real-exponents]]). A nonnegative series converges exactly when its partial sums are bounded ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 The variables $Y_n=(X_n-\mathbb EX_n)/b_n$ are independent, centered, and square-integrable, with variances $\operatorname{Var}(X_n)/b_n^2$. Measurable transformations give independence, and covariance bilinearity gives the variance identity. The convergence criterion makes $\sum_nY_n$ converge on one probability-one event. [F3, F4, F1, given]

2.1 On each path in that event apply Kronecker to $x_n=X_n-\mathbb EX_n$ and the given $b_n$. The deterministic conclusion is precisely the asserted normalized convergence. Zero variances and repeated positive normalizers present no exception. [F2, step 1.1]

3.1 To apply the general assertion of step 2.1 to the rate, put $q=1/2+\varepsilon>0$, $p=2q=1+2\varepsilon>1$, and $b_n=n^{1/2}(\log n)^q$ for $n\ge2$, with $b_1=b_2$. By [F5], $\log n\ge\log2>0$, both factors are positive and nondecreasing, and $b_n\ge(\log2)^q\sqrt n\to\infty$. Here the positive real power $n^{1/2}$ is the positive square root because its square is $n$ by the power laws; its unboundedness follows directly from $n>A^2$ implying $\sqrt n>A$ for $A>0$. Also $b_n^2=n(\log n)^p$. Thus the normalizers satisfy every hypothesis of the general assertion, once variance summability is checked. [F5, given, step 2.1, algebra]

4.1 For each integer $j\ge1$, the block $2^j\le n<2^{j+1}$ has exactly $2^j$ terms. The logarithm product law gives $\log(2^j)=j\log2$ by finite induction. Consequently every term in that block is at most $1/[2^j(j\log2)^p]$, and the whole block satisfies $\sum_{n=2^j}^{2^{j+1}-1}1/[n(\log n)^p]\le(\log2)^{-p}j^{-p}$. Every finite partial sum starting at $n=2$ is bounded by a sum of finitely many complete blocks: the elementary induction $2^J\ge J+1$ ensures such an upper endpoint exists. By [F6] these block bounds have uniformly bounded partial sums, at most $(\log2)^{-p}\sum_{j\ge1}j^{-p}<\infty$. Applying the nonnegative bounded-partial-sum criterion, rather than assuming an infinite regrouping identity, proves $\sum_{n\ge2}1/[n(\log n)^p]<\infty$. [F5, F6, step 3.1, algebra]

5.1 The common variance is a finite $\sigma^2\ge0$. By steps 3.1–4.1, $\sum_n\operatorname{Var}(X_n)/b_n^2=\sigma^2/b_1^2+\sigma^2\sum_{n\ge2}1/[n(\log n)^p]<\infty$. The general assertion proved in steps 1.1–2.1 now gives the stated rate, including $\sigma^2=0$. All normalizers, blocks and measurable transforms were explicitly defined; no Choice assumption or later strong-law/rate theorem is used. [step 1.1, step 2.1, step 3.1, step 4.1, given] ∎
