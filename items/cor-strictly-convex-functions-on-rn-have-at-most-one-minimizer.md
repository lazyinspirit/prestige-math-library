---
id: cor-strictly-convex-functions-on-rn-have-at-most-one-minimizer
kind: corollary
title: "A strictly convex function on a Euclidean convex set has at most one global minimizer"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

A strictly convex real-valued function on a Euclidean convex set has at most one global minimizer. This asserts uniqueness only, not existence, and includes empty and singleton domains.

## Facts & Assumptions

**Given:** A strictly convex function on a convex domain.

[F1] Strict convexity means that the convexity inequality is strict for distinct $x,y$ and $0<t<1$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose distinct $x,y$ were both global minimizers with value $m$. By [F1] at their midpoint, $$f((x+y)/2)<\tfrac12f(x)+\tfrac12f(y)=m,$$ contradicting minimality. [F1, assume-contra, algebra]

2.1 Therefore two distinct global minimizers cannot exist. Empty and singleton domains satisfy the conclusion automatically. [step 1.1, discharge-contradiction] ∎
