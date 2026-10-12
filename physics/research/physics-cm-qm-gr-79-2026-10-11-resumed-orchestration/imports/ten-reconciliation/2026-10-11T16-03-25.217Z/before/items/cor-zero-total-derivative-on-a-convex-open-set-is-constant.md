---
id: cor-zero-total-derivative-on-a-convex-open-set-is-constant
kind: corollary
title: "A totally differentiable map with zero derivative on a convex open set is constant"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-mean-value-inequality-for-total-derivatives]
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

Let $U\subseteq\mathbb R^m$ be convex and open. If $f:U\to\mathbb R^n$ is totally differentiable at every point and $Df(z)=0$ for every $z\in U$, then $f$ is constant on $U$.

## Facts & Assumptions

**Given:** A convex open $U$ and a totally differentiable map with zero total derivative at every point.

[L1] The total-derivative mean-value inequality implies $\|f(y)-f(x)\|_2\le M\|y-x\|_2$ under a uniform derivative bound $M$ ([[thm-mean-value-inequality-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 The zero derivative hypothesis satisfies the bound in [L1] with $M=0$ for arbitrary $x,y\in U$. [L1]

2.1 Hence $\|f(y)-f(x)\|_2\le0$, so norm separation gives $f(y)=f(x)$. [step 1.1, algebra]

3.1 Since $x,y$ were arbitrary, the map is constant; if $U$ is empty this conclusion is vacuous. [step 1.1, step 2.1] ∎
