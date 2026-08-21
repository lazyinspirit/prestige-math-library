---
id: cor-convex-functions-on-open-convex-sets-are-continuous
kind: corollary
title: "A convex function on an open convex set is continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-convex-functions-on-open-convex-sets-are-locally-lipschitz, thm-metric-regularity-hierarchy]
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
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Every convex function $f:U\to\mathbb R$ on an open convex set is continuous on $U$. The assertion is vacuous when $U$ is empty.

## Facts & Assumptions

**Given:** A convex function on an open convex Euclidean set.

[L1] Such a function is locally Lipschitz on $U$ ([[thm-convex-functions-on-open-convex-sets-are-locally-lipschitz]]).

[L2] Every Lipschitz map is uniformly continuous, and every uniformly continuous map is continuous ([[thm-metric-regularity-hierarchy]]).

## Proof

**Proof technique:** direct.

1.1 At each $a\in U$, [L1] gives a neighbourhood on which the restriction of $f$ is Lipschitz, and [L2] makes that restriction continuous. [L1, L2]

2.1 Thus $f$ is continuous at every domain point, hence continuous on $U$; if $U$ is empty, there is no point to check. [step 1.1] ∎
