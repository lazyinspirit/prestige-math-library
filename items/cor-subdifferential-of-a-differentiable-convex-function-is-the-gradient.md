---
id: cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient
kind: corollary
title: "The subdifferential of a differentiable convex function is its gradient singleton"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-subgradient-and-subdifferential, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient]
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
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 12"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
    - title: "D. Drusvyatskiy, Convex Analysis and Nonsmooth Optimization, §3.5"
      url: "https://sites.math.washington.edu/~ddrusv/crs/Math_516_2020/curr_notes.pdf"
pipeline_run: null
---

## Statement

Let $f:U\to\mathbb R$ be convex on an open convex set and differentiable at $a\in U$ ([[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]]). Then $\partial f(a)=\{\nabla f(a)\}$.

## Facts & Assumptions

**Given:** The function and point in the Statement and the subdifferential convention [[def-subgradient-and-subdifferential]].

[F1] If $f$ is convex, then $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for $x,y$ in its convex domain and $t\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

## Proof

**Proof technique:** direct.

1.1 Fix $y\in U$ and put $d=y-a$. For $0<t\le1$, [F1] gives $f(a+td)\le(1-t)f(a)+tf(y)$, hence $$\frac{f(a+td)-f(a)}t\le f(y)-f(a).$$ Differentiability at $a$ makes the left side tend to $\langle\nabla f(a),d\rangle$ as $t\downarrow0$. Thus $f(y)\ge f(a)+\langle\nabla f(a),y-a\rangle$ for every $y\in U$, so $\nabla f(a)\in\partial f(a)$. [F1, given, algebra]

2.1 Let $v\in\partial f(a)$. For each coordinate vector $e_i$ and sufficiently small positive and negative $t$, apply the subgradient inequality at $a+te_i$. Dividing by $t$ with the appropriate reversal and taking the two one-sided limits gives $v_i\le\partial_i f(a)$ and $v_i\ge\partial_i f(a)$. Thus $v=\nabla f(a)$, proving the singleton claim. [step 1.1, given, algebra] ∎
