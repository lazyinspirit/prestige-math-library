---
id: def-convex-and-strictly-convex-functions-on-euclidean-sets
kind: definition
title: "Convex and strictly convex functions on Euclidean convex sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-convex-subset-of-euclidean-space, def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 2"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Definition

Let $C\subseteq\mathbb R^n$ be convex ([[def-convex-subset-of-euclidean-space]]). The function $f:C\to\mathbb R$ is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for all $x,y\in C$ and $t\in[0,1]$. The parameter interval is the closed interval of [[def-interval]].

It is strictly convex when the inequality is strict for distinct $x,y$ and $0<t<1$. No strict inequality is required at $t=0$ or $t=1$, where the two sides coincide. The empty set and a singleton support convex functions, and strict convexity on either is vacuous.
