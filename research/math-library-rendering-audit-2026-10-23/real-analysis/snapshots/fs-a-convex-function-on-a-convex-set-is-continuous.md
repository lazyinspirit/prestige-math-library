---
id: fs-a-convex-function-on-a-convex-set-is-continuous
kind: false-statement
title: "FALSE: a convex function on a convex set is continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-convex-function-on-closed-convex-set-discontinuous-at-the-boundary]
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
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

**False claim:** every convex real-valued function on a convex Euclidean domain is continuous at every domain point.

## Facts & Assumptions

**Given:** No openness assumption is imposed.

[L1] There is a function on $[0,1]$ that is convex on $[0,1]$ but is not continuous at $0$ ([[cex-convex-function-on-closed-convex-set-discontinuous-at-the-boundary]]).

## Refutation

**Proof technique:** direct.

1.1 The interval in [L1] is convex and the displayed function is convex on it. [L1]

2.1 The same function fails continuity at the boundary point zero by [L1], so it refutes the claim. Openness of the domain, or restriction to its interior, is essential. [step 1.1, L1] ∎
