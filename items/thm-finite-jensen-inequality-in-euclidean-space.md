---
id: thm-finite-jensen-inequality-in-euclidean-space
kind: theorem
title: 'Finite Jensen inequality for convex functions on $\mathbb R^n$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, thm-induction-principle, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.8"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

Let $f:C\to\mathbb R$ be convex. For a positive finite family of points in $C$ and nonnegative weights summing to one, $f$ of their weighted Euclidean sum is at most the weighted sum of their $f$-values. Explicitly, if $N\ge1$, $x_1,\ldots,x_N\in C$, $\lambda_j\ge0$, and $\sum_{j=1}^N\lambda_j=1$, then

$$f\left(\sum_{j=1}^N\lambda_jx_j\right)\le\sum_{j=1}^N\lambda_jf(x_j).$$

## Facts & Assumptions

**Given:** The data in the Statement, the finite-sum convention [[def-finite-sum]], its algebraic laws [[lem-finite-sum-laws]], and induction on the positive integer $N$ [[thm-induction-principle]].

[F1] The function $f:C\to\mathbb R$ is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for all $x,y\in C$ and $t\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

## Proof

**Proof technique:** induction.

1.1 For $N=1$, the only nonnegative weight summing to one is $\lambda_1=1$, so both sides equal $f(x_1)$. [F1, algebra, base]

1.2 Fix $N\ge1$ and assume the inequality for every weighted family of $N$ points. [ih]

2.1 For $N+1$ points, if $\lambda_{N+1}=1$, then all earlier nonnegative weights vanish and the conclusion is immediate. Otherwise $s=1-\lambda_{N+1}>0$, and the normalized weights $\mu_j=\lambda_j/s$ for $j\le N$ are nonnegative and sum to one. [step 1.1, step 1.2, algebra]

3.1 Apply the induction hypothesis to $z=\sum_{j=1}^N\mu_jx_j\in C$, then apply [F1] to $z,x_{N+1}$ with weights $s,\lambda_{N+1}$. The resulting inequality is exactly the $(N+1)$-point formula, completing the induction. [step 1.2, step 2.1, F1, algebra, discharge-induction] ∎
