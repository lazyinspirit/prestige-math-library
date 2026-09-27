---
id: thm-kolmogorov-maximal-inequality
title: "Kolmogorov maximal inequality"
kind: theorem
status: published
origin: pipeline
deps: ["def-partial-sums-and-sample-means", "def-independent-random-elements", "def-moments-variance-and-covariance", "thm-grouping-independent-sigma-algebras", "thm-factorization-of-expectations-for-independent-variables", "lem-variance-and-covariance-identities-for-random-variables", "thm-arithmetic-and-lattice-operations-preserve-measurability"]
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
    - title: "Theorem 2.5.5, p. 84"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Lemma 3.7, p. 62"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Disjoint first-crossing events A_k belong to sigma(X_1,...,X_k). Factor E[1_{A_k}S_k(S_n-S_k)]=0 using grouping and integrability. Sum E[1_{A_k}S_n^2]>=lambda^2 P(A_k)."
---

## Statement

Let $X_1,\ldots,X_n$ be independent centered square-integrable real random variables, $n\ge1$, and $S_k=\sum_{j=1}^kX_j$. For every $\lambda>0$,
$$\mathbb P\left(\max_{1\le k\le n}|S_k|\ge\lambda\right)\le\frac{\operatorname{Var}(S_n)}{\lambda^2}=\frac{\sum_{j=1}^n\operatorname{Var}(X_j)}{\lambda^2}.$$
Thus controlling the whole finite maximum costs no larger bound than controlling the final sum by Chebyshev.

## Facts & Assumptions

[F1] [[thm-grouping-independent-sigma-algebras]]: Let $(\mathcal F_i)_{i\in I}$ be an independent family of sigma-algebras on a probability space, and let $J_0,\dots,J_{m-1}\subseteq I$ be pairwise disjoint index sets. For each $r<m$, define $\mathcal G_r:=\sigma\left(\bigcup_{i\in J_r}\mathcal F_i\right).$ Then the sigma-algebras $\mathcal G_0,\dots,\mathcal G_{m-1}$ are independent.

[F2] [[thm-factorization-of-expectations-for-independent-variables]]: Let $n\ge1$, let $X_0,\dots,X_{n-1}$ be independent real random variables on a common probability space, and let $g_i:\mathbb R\to\mathbb R$ be Borel measurable for each $i<n$. 1. If every $g_i$ is nonnegative, then $\mathbb E\left[\prod_{i<n}g_i(X_i)\right]=\prod_{i<n}\mathbb E[g_i(X_i)]$ in $[0,+\infty]$. 2. If every $g_i(X_i)$ is integrable, then $\prod_{i<n}g_i(X_i)$ is integrable and the same factorization holds in $\mathbb R$.

[F3] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space. Then $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$ $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$ Moreover, covariance is symmetric and bilinear on finite linear combinations. On finite full-power-set probability spaces these formulas reduce to the published finite identities.

[F4] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Let $(X,\mathcal{A})$ be a measurable space and let $f,g : X \to \overline{\mathbb{R}}$ be measurable. Then: 1. $cf$ is measurable for every real scalar $c$; 2. $\max(f,g)$, $\min(f,g)$, $|f|$, $f^+$, and $f^-$ are measurable; 3. if $f+g$ is pointwise defined, then $f+g$ is measurable; 4. with the convention of rem-zero-times-infinity-convention-for-pointwise-products, the pointwise product $fg$ is measurable.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Let $A_k=\{|S_j|<\lambda\ (j<k),\ |S_k|\ge\lambda\}$. These measurable events are disjoint, and their union is the event in the statement. Measurability follows by finite arithmetic. [F4, given]

2.1 Grouping shows that $S_k\mathbf1_{A_k}$ and $S_n-S_k$ are independent. Both are integrable (their squares have finite expectation), and the latter has mean zero. Factorization therefore gives $\mathbb E[S_k\mathbf1_{A_k}(S_n-S_k)]=0$. For $k=n$ the tail is zero and the identity still holds. [F1, F2, step 1.1]

3.1 Expand the square on $A_k$: $\mathbb E[S_n^2\mathbf1_{A_k}]=\mathbb E[S_k^2\mathbf1_{A_k}]+\mathbb E[(S_n-S_k)^2\mathbf1_{A_k}]\ge\lambda^2\mathbb P(A_k)$. Sum over the disjoint events. Centering gives $\mathbb ES_n^2=\operatorname{Var}(S_n)$, and covariance bilinearity with factorization cancels every off-diagonal covariance. This proves the bound even when the variance is zero or $n=1$. [F3, F2, step 1.1, step 2.1, algebra] ∎
