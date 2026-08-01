---
id: thm-finite-jensen-inequality
kind: theorem
title: "Finite Jensen inequality for a convex function and nonnegative weights summing to one"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convex-concave-and-midpoint-convex-functions, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, def-canonical-natural]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/"
pipeline_run: null
---

## Statement

Let $f:I\to\mathbb R$ be convex. If $N\ge1$, $x_1,\ldots,x_N\in I$, and $\lambda_1,\ldots,\lambda_N\ge0$ satisfy $\sum_{i=1}^N\lambda_i=1$, then

$$f\left(\sum_{i=1}^N\lambda_i x_i\right)\le\sum_{i=1}^N\lambda_i f(x_i).$$

## Facts & Assumptions

**Given:** A convex $f:I\to\mathbb R$, a positive finite family $x_1,\ldots,x_N\in I$, and nonnegative weights summing to $1$.

[L1] A function is convex when the convex-combination inequality holds for every weight in $[0,1]$ ([[def-convex-concave-and-midpoint-convex-functions]]).

## Proof

**Proof technique:** induction.

1.1 For $N=1$, the sole weight is $1$, so the two sides are both $f(x_1)$. [base, L1]

2.1 Assume the assertion for $N-1$ terms. If $\lambda_N=1$, all earlier nonnegative weights vanish and the assertion is immediate; otherwise put $s=1-\lambda_N>0$ and normalize the earlier weights as $\mu_i=\lambda_i/s$. [ih, step 1.1, algebra]

3.1 The induction hypothesis bounds $f(\sum_{i<N}\mu_i x_i)$ by $\sum_{i<N}\mu_i f(x_i)$; applying [L1] to this point and $x_N$ with weights $s,\lambda_N$ gives the asserted $N$-term inequality. [step 1.1, step 2.1, discharge-induction] ∎
