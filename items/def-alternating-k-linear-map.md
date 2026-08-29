---
id: def-alternating-k-linear-map
kind: definition
title: "Alternating $k$-linear maps"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-space]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Definition

Let $F$ be a field and let $V,W$ be $F$-vector spaces ([[def-vector-space]]). For $k\ge0$, a map

$$f:V^k\longrightarrow W$$

is **$k$-linear** (multilinear) when it is linear in each of its $k$ arguments separately, with the other arguments held fixed. It is **alternating** when

$$f(v_1,\ldots,v_k)=0\qquad\text{whenever }v_i=v_j\text{ for some }1\le i<j\le k.$$

For $k=0$, a $0$-linear map is a choice of one element of $W$; for $k=1$, a $1$-linear map is a linear map. Both are alternating vacuously, because there is no pair of arguments to compare.

## Remarks

When $2\ne0$ in $F$, alternation is equivalent to the sign rule $f(\ldots,v_i,\ldots,v_j,\ldots)=-f(\ldots,v_j,\ldots,v_i,\ldots)$: expand $f(\ldots,v_i+v_j,\ldots,v_i+v_j,\ldots)=0$ and use $2\ne0$. In characteristic two the sign rule collapses to the tautology $x=-x$ and does not imply alternation; the published witness is [[cex-antisymmetric-need-not-be-alternating-in-characteristic-two]]. This page therefore works directly with the repeated-argument condition, never with a division by $k!$.
