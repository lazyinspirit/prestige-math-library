---
id: alg-distributed-delay-composite-midpoint-rule
kind: algorithm
title: "Composite midpoint quadrature for a distributed delay history"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-distributed-delay-equation-and-window-integral
  - alg-retarded-delay-euler-with-stored-history
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
    - title: "Roland Pulch, Equivalent Systems for Differential Equations with Polynomially Distributed Delay, version 3"
      url: "https://arxiv.org/pdf/2408.09861v3"
---

## Definition

Let $h=\tau/m$ and let $\widehat y_h$ be the stored piecewise-linear history
from [[alg-retarded-delay-euler-with-stored-history]]. Choose an integer
refinement factor $q\ge1$, put $r=qm$ and $\Delta=\tau/r=h/q$. For a grid query
time $t_n=nh$, define midpoint locations $\theta_j=(j+1/2)\Delta$ for
$j=0,\ldots,r-1$, and return
$$\widehat{\mathcal I}_{K,h,r}(t_n)=\Delta\sum_{j=0}^{r-1}K(\theta_j)\widehat y_h(t_n-\theta_j).$$
The output is a vector in $\mathbb R^d$. Each history query uses the
piecewise-linear interpolant, including queries between Euler nodes. The
quadrature uses $r$ kernel/history evaluations per right-hand-side call; it
uses $O(d)$ working memory if weights are recomputed and $O(r+d)$ if cached.
The refinement condition makes every mesh-aligned history breakpoint a
quadrature-cell endpoint at grid query times.
