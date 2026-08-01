---
id: thm-total-differentiability-gives-a-local-linear-bound-and-continuity
kind: theorem
title: "Total differentiability gives a local $O(\\|h\\|_2)$ increment bound and therefore continuity"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-total-derivative-in-euclidean-space, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-metric-continuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement

If $f:U\to\mathbb R^n$ is totally differentiable at $a\in U$, then some $C,\delta>0$ satisfy $\|f(a+h)-f(a)\|_2\le C\|h\|_2$ whenever $\|h\|_2<\delta$ and $a+h\in U$. In particular $f$ is continuous at $a$.

## Facts & Assumptions

**Given:** A total derivative $Df(a)$ for $f$ at $a$.

[L1] The normalized remainder in the total-derivative definition tends to zero as $h$ tends to zero ([[def-total-derivative-in-euclidean-space]]).

[L2] Every Euclidean linear map has a norm bound $\|Lh\|_2\le K\|h\|_2$ for some $K\ge0$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $\delta>0$ such that the remainder $r(h)=f(a+h)-f(a)-Df(a)h$ satisfies $\|r(h)\|_2\le\|h\|_2$ whenever $0<\|h\|_2<\delta$. [L1, L2]

2.1 If $K$ bounds $Df(a)$ as in [L2], the triangle inequality gives $\|f(a+h)-f(a)\|_2\le(K+1)\|h\|_2$ for those $h$, and it also holds at $h=0$. [step 1.1, L2, algebra]

3.1 Given $\varepsilon>0$, take $\|h\|_2<\min\{\delta,\varepsilon/(K+1)\}$; step 2.1 is the metric continuity condition at $a$. [step 1.1, step 2.1] ∎
