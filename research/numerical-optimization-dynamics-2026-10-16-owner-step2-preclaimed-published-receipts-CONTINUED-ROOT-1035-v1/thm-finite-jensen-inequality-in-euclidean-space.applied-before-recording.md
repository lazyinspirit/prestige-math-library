---
id: thm-finite-jensen-inequality-in-euclidean-space
kind: theorem
title: 'Finite Jensen inequality for convex functions on $\mathbb R^n$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, def-linear-combination-and-span]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-21
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

[F2] Finite vector sums and linear combinations in $\mathbb R^n$ use [[def-linear-combination-and-span]], with its zero-based finite-list convention reindexed here as $1,\ldots,N$. The domain $C$ of the convex function is convex by [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: it contains $(1-t)x+ty$ for $x,y\in C$ and $0\le t\le1$.

## Proof

**Proof technique:** induction.

1.1 We prove simultaneously that each such weighted sum belongs to $C$ and satisfies the stated inequality. For $N=1$, $\lambda_1=1$, so the vector sum is $x_1\in C$ and both sides equal $f(x_1)$. [F1, F2, algebra, base]

1.2 Fix $N\ge1$ and assume both membership in $C$ and the inequality for every weighted family of $N$ points. [ih]

2.1 For $N+1$ points, if $\lambda_{N+1}=1$, then all earlier nonnegative weights vanish, the vector sum is $x_{N+1}\in C$, and the inequality is equality. Otherwise $s=1-\lambda_{N+1}>0$, and the normalized weights $\mu_j=\lambda_j/s$ for $j\le N$ are nonnegative and sum to one. [step 1.1, step 1.2, algebra]

3.1 By the simultaneous induction hypothesis, $z=\sum_{j=1}^N\mu_jx_j$ belongs to $C$ and $f(z)\le\sum_{j=1}^N\mu_jf(x_j)$. Since $s=1-\lambda_{N+1}$, $0\le\lambda_{N+1}<1$, and $z,x_{N+1}\in C$, convexity of $C$ in [F2] puts $w=sz+\lambda_{N+1}x_{N+1}$ in $C$. The finite-vector-sum recursion and distributivity identify $w=\sum_{j=1}^{N+1}\lambda_jx_j$. Applying [F1] gives $f(w)\le s f(z)+\lambda_{N+1}f(x_{N+1})\le\sum_{j=1}^{N+1}\lambda_jf(x_j)$. Thus both membership and the inequality hold at $N+1$, completing the induction. [step 1.2, step 2.1, F1, F2, algebra, discharge-induction] ∎
