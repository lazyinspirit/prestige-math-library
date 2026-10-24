---
id: thm-continuous-midpoint-convex-functions-are-convex
kind: theorem
title: "A continuous midpoint-convex function on an interval is convex"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-midpoint-convexity-extends-to-dyadic-weights, def-continuity-real, cor-archimedean-reciprocal, def-interval, lem-integer-part]
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
    - title: "R. Gardner, Convex Functions, Notes 6.6"
      url: "https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf"
pipeline_run: null
---

## Statement

If $f:I\to\mathbb R$ is midpoint convex and continuous on an interval $I$, then $f$ is convex on $I$.

## Facts & Assumptions

**Given:** A continuous midpoint-convex $f:I\to\mathbb R$, points $x,y\in I$, and $\lambda\in[0,1]$.

[L1] Midpoint convexity gives the convexity inequality at every dyadic weight $k/2^n$ ([[lem-midpoint-convexity-extends-to-dyadic-weights]]).

[L2] For every positive real $\varepsilon$, there is a natural number $n\ge1$ such that $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L3] For every real $r$ there is an integer $k$ with $k\le r<k+1$ ([[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, [L3] applied to $2^n\lambda$ supplies $k_n$ with $k_n/2^n\le\lambda<(k_n+1)/2^n$; the elementary induction $2^n\ge n+1$ and [L2] show $k_n/2^n\to\lambda$. [L1, L2, L3]

2.1 Apply [L1] at the dyadic weight $k_n/2^n$ and let $n\to\infty$. Continuity of $f$ at $\lambda x+(1-\lambda)y$ and ordinary limit laws give the convexity inequality at $\lambda$. [step 1.1, L2, algebra]

3.1 At $\lambda=0$ and $\lambda=1$ the inequality is equality; with step 2.1 this proves convexity for every weight in $[0,1]$. [step 1.1, step 2.1] ∎
