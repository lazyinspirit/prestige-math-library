---
id: thm-chebyshev-weak-law-for-uncorrelated-arrays
title: "Chebyshev weak law for uncorrelated arrays"
kind: theorem
status: published
origin: pipeline
deps: ["def-partial-sums-and-sample-means", "def-moments-variance-and-covariance", "lem-variance-and-covariance-identities-for-random-variables", "cor-chebyshev-inequality-for-random-variables", "def-convergence-in-probability", "def-convergence-in-lp-for-random-variables", "cor-expectation-linearity-monotonicity-and-modulus-bound"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorems 2.2.1, 2.2.3 and 2.2.6, pp. 56\u201359"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "Expand the finite centered square using covariance bilinearity, cancel off-diagonal terms, then apply Chebyshev."
---

## Statement

For each $n\ge1$, let $X_{n,1},\ldots,X_{n,r_n}$ be square-integrable real random variables on one probability space, pairwise uncorrelated within the row, where $r_n\ge0$ is finite. Set $S_n=\sum_{k=1}^{r_n}X_{n,k}$ and let $b_n>0$ be deterministic. If
$$v_n:=b_n^{-2}\sum_{k=1}^{r_n}\operatorname{Var}(X_{n,k})\longrightarrow0,$$
then $(S_n-\mathbb ES_n)/b_n\to0$ in $L^2$ and in probability. More precisely, its second moment is $v_n$, and its probability of absolute value at least $\varepsilon>0$ is at most $v_n/\varepsilon^2$. No independence between rows is required.

## Facts & Assumptions

[F1] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space. Then $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$ $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$ Moreover, covariance is symmetric and bilinear on finite linear combinations. On finite full-power-set probability spaces these formulas reduce to the published finite identities.

[F2] [[cor-chebyshev-inequality-for-random-variables]]: If $X$ is a square-integrable real random variable and $a>0$, then $\mathbb P(|X-\mathbb E[X]|\ge a)\le\frac{\operatorname{Var}(X)}{a^2}.$

[F3] [[def-convergence-in-probability]]: For real random variables $(X_n)$ and $X$ on one probability space, write $X_n\to X$ **in probability** when, for every $\varepsilon>0$, $\mathbb P(|X_n-X|>\varepsilon)\longrightarrow0.$ This is precisely def-convergence-in-measure for the probability measure.

[F4] [[def-convergence-in-lp-for-random-variables]]: Let $1\le p\le\infty$. For real random variables whose classes lie in $L^p(\mathbb P)$ as defined by def-l-p-space-as-a-quotient-by-null-functions, write $X_n\to X$ **in $L^p$** when $\|[X_n]-[X]\|_{L^p(\mathbb P)}\longrightarrow0.$ For $p<\infty$, this norm is $\|[X_n]-[X]\|_{L^p(\mathbb P)}=\bigl(\mathbb E|X_n-X|^p\bigr)^{1/p};$ for $p=\infty$, it is the essential-supremum norm. Thus the assertion concerns almost-everywhere equivalence classes, not chosen representatives.

[F5] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: Let $X,Y$ be integrable real or complex random variables on one probability space. 1. For scalars $a,b$, $\mathbb E[aX+bY]=a\,\mathbb E[X]+b\,\mathbb E[Y].$ 2. If $X$ and $Y$ are real-valued and $X\le Y$ almost surely, then $\mathbb E[X]\le\mathbb E[Y].$ 3. $|\mathbb E[X]|\le\mathbb E[|X|].$

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Put $Z_n=b_n^{-1}\sum_k(X_{n,k}-\mathbb EX_{n,k})=(S_n-\mathbb ES_n)/b_n$. Finite linearity gives $\mathbb EZ_n=0$. Square integrability of the finite sum follows from $(\sum_{k=1}^{r}z_k)^2\le r\sum_kz_k^2$ for $r\ge1$; the empty sum is zero. [F5, given, algebra]

2.1 Covariance bilinearity and the zero off-diagonal covariances give $\mathbb E|Z_n|^2=b_n^{-2}\sum_k\operatorname{Var}(X_{n,k})=v_n$. This includes a singleton row and zero variances without division by a variance. Thus the $L^2$ norm tends to zero. [F1, F4, step 1.1, algebra]

3.1 For every $\varepsilon>0$, Chebyshev gives $\mathbb P(|Z_n|\ge\varepsilon)\le v_n/\varepsilon^2\to0$. This also bounds the strict event defining convergence in probability. [F2, F3, step 2.1] ∎
