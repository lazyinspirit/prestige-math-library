---
id: fs-strict-convexity-gives-a-positive-definite-hessian
kind: false-statement
title: "FALSE: strict convexity gives a positive-definite Hessian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-strictly-convex-function-with-a-singular-hessian]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.4"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

**False claim:** every twice differentiable strictly convex function has a positive-definite Hessian at every point.

## Facts & Assumptions

**Given:** No assumptions beyond the false claim.

[L1] For every $n\ge1$, the function $f:\mathbb R^n\to\mathbb R$ given by $f(x)=\sum_{j<n}x_j^4$ is strictly convex, but its Hessian at the origin is the zero matrix ([[cex-strictly-convex-function-with-a-singular-hessian]]).

## Refutation

**Proof technique:** direct.

1.1 The function in [L1] satisfies strict convexity globally. [L1]

2.1 Its Hessian at the origin is zero and hence not positive definite by [L1], directly refuting the claim. [step 1.1, L1] ∎
