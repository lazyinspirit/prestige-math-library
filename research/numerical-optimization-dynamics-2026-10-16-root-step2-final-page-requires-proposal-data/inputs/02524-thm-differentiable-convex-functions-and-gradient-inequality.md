---
id: thm-differentiable-convex-functions-and-gradient-inequality
kind: theorem
title: "Differentiable convex functions are characterized by the gradient inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-subgradient-and-subdifferential, thm-chain-rule-for-total-derivatives, def-jacobian-matrix-and-gradient]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.3"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 3"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and convex, and let $f:U\to\mathbb R$ be differentiable. Then $f$ is convex if and only if

$$f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle\qquad(x,y\in U).$$

Equivalently, $\nabla f(x)$ is a subgradient at every $x$ ([[def-subgradient-and-subdifferential]], [[def-jacobian-matrix-and-gradient]]).

## Facts & Assumptions

**Given:** The domain and differentiable function in the Statement, with convexity from [[def-convex-and-strictly-convex-functions-on-euclidean-sets]].

[L1] The total derivative of a composite is the composite of the total derivatives ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication, fix $x,y\in U$ and put $d=y-x$. For $0<t\le1$, convexity gives $f(x+td)\le(1-t)f(x)+tf(y)$, hence $$\frac{f(x+td)-f(x)}t\le f(y)-f(x).$$ By [L1] the left side tends to $\langle\nabla f(x),d\rangle$ as $t\downarrow0$, giving the displayed gradient inequality. [L1, given, algebra]

2.1 For the reverse implication, assume the gradient inequality and take $z=(1-t)x+ty$. Apply it at $z$ toward $x$ and toward $y$, multiply the results by $1-t$ and $t$, and add. The gradient terms cancel because $(1-t)(x-z)+t(y-z)=0$, leaving $f(z)\le(1-t)f(x)+tf(y)$. Thus $f$ is convex. [assume-hyp, algebra] ∎
