---
id: fs-a-positive-semidefinite-hessian-gives-strict-convexity
kind: false-statement
title: "FALSE: a positive-semidefinite Hessian gives strict convexity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-positive-semidefinite-hessian-without-strict-convexity]
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
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.4"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

**False claim:** an everywhere-positive-semidefinite Hessian forces a $C^2$ function on an open convex set to be strictly convex.

## Facts & Assumptions

**Given:** No assumptions beyond the false claim.

[L1] The Hessian of $f(x,y)=x^2$ is positive semidefinite everywhere, but $f$ is not strictly convex ([[cex-positive-semidefinite-hessian-without-strict-convexity]]).

## Refutation

**Proof technique:** direct.

1.1 The function in [L1] satisfies the Hessian hypothesis of the false claim. [L1]

2.1 It is constant along every vertical line and therefore violates strict convexity by [L1]. Hence the claim is false. [step 1.1, L1] ∎
