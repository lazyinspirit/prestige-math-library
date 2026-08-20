---
id: fs-a-convex-function-is-differentiable
kind: false-statement
title: "FALSE: every convex function is differentiable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-euclidean-norm-and-squared-norm-are-convex, cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 12"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

**False claim:** every convex real-valued function on an open Euclidean convex set is differentiable everywhere.

## Facts & Assumptions

**Given:** Positive Euclidean dimension.

[L1] The Euclidean norm is convex and its subdifferential at zero is the closed unit ball ([[ex-euclidean-norm-and-squared-norm-are-convex]]).

[L2] If a convex function is differentiable at $a$, then $\partial f(a)=\{\nabla f(a)\}$ ([[cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient]]).

## Refutation

**Proof technique:** direct.

1.1 In positive dimension, the closed unit ball in [L1] contains more than one vector, so the norm has a nonsingleton subdifferential at zero. [L1]

2.1 By [L2], differentiability there would force the subdifferential to be a singleton. Hence the convex Euclidean norm is not differentiable at zero, and the claim is false. [step 1.1, L2] ∎
