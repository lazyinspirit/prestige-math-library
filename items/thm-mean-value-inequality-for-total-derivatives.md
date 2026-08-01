---
id: thm-mean-value-inequality-for-total-derivatives
kind: theorem
title: "On a convex open set, a uniform bound $\\|Df(z)v\\|_2\\le M\\|v\\|_2$ implies $\\|f(y)-f(x)\\|_2\\le M\\|y-x\\|_2$"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convex-subset-of-euclidean-space, thm-chain-rule-for-total-derivatives, thm-mean-value-inequality, def-total-derivative-in-euclidean-space, thm-total-differentiability-gives-a-local-linear-bound-and-continuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^m$ be convex and open, and let $f:U\to\mathbb R^n$ be totally differentiable at every point. If $M\ge0$ satisfies $\|Df(z)v\|_2\le M\|v\|_2$ for every $z\in U$ and $v\in\mathbb R^m$, then

$$\|f(y)-f(x)\|_2\le M\|y-x\|_2\qquad(x,y\in U).$$

## Facts & Assumptions

**Given:** The stated convex open domain, total differentiability, and uniform derivative bound.

[L1] A convex subset contains every line segment between two of its points ([[def-convex-subset-of-euclidean-space]]).

[L2] The chain rule for total derivatives is $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L3] The vector mean-value inequality gives $\lVert f(b)-f(a)\rVert_2\le M(b-a)$ when the derivative norm is bounded by $M$ ([[thm-mean-value-inequality]]).

[L4] Total differentiability implies continuity at the point of total differentiability ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

## Proof

**Proof technique:** direct.

1.1 If $x=y$ the conclusion is immediate. Otherwise put $\gamma(t)=x+t(y-x)$ for $0\le t\le1$; [L1] keeps $\gamma([0,1])$ in $U$. [L1, L2, L3]

2.1 The chain rule gives $(f\circ\gamma)'(t)=Df(\gamma(t))(y-x)$ for $0<t<1$, whose norm is at most $M\|y-x\|_2$ by hypothesis. [step 1.1, L2, algebra]

3.1 By [L4] the curve $f\circ\gamma$ is continuous at the endpoints, so [L3] applied on $[0,1]$ yields $\|f(y)-f(x)\|_2\le M\|y-x\|_2$. [step 1.1, step 2.1, L3, L4] ∎
