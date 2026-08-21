---
id: cor-local-minima-of-convex-functions-on-rn-are-global
kind: corollary
title: "Every local minimum of a convex function on an open Euclidean convex set is global"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-euclidean-local-extrema-and-critical-points]
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
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 5"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

Let $f:U\to\mathbb R$ be convex on an open convex set. Every local minimizer of $f$ ([[def-euclidean-local-extrema-and-critical-points]]) is a global minimizer.

## Facts & Assumptions

**Given:** A local minimizer $a\in U$ of the function in the Statement.

[F1] The function $f:U\to\mathbb R$ is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for all $x,y\in U$ and $t\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $a$ were not a global minimizer, and choose $y\in U$ with $f(y)<f(a)$. For sufficiently small $0<t<1$, the point $z=(1-t)a+ty$ lies in the local-minimum neighbourhood of $a$, while [F1] gives $$f(z)\le(1-t)f(a)+tf(y)<f(a),$$ a contradiction. [F1, assume-contra, algebra]

2.1 The assumption in step 1.1 is untenable, so no domain point has value below $f(a)$ and the local minimizer is global. [step 1.1, discharge-contradiction] ∎
