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

**Inputs and admissibility.** Take a delay $\tau>0$, an integer $m\ge1$, a
continuous kernel $K:[0,\tau]\to\mathbb R$, and the completed stored
piecewise-linear history $\widehat y_h:[-\tau,T_h]\to\mathbb R^d$ from
[[alg-retarded-delay-euler-with-stored-history]], with $h=\tau/m$ and
$T_h=Nh$ for an integer $N\ge1$. Choose an integer refinement factor $q\ge1$
and a query index $n\in\{0,\ldots,N\}$. Then $t_n=nh$ and
$t_n-\theta\in[-\tau,T_h]$ for every $\theta\in[0,\tau]$, so all evaluations
below are defined.

**Output.** Return the vector
$\widehat{\mathcal I}_{K,h,r}(t_n)\in\mathbb R^d$ given by the following
finite computation.

1. Set $r=qm$, $\Delta=\tau/r=h/q$, initialize $A=0\in\mathbb R^d$, and set
   $\theta_j=(j+1/2)\Delta$ for each $j=0,\ldots,r-1$.

2. For $j=0,\ldots,r-1$, add
   $\Delta K(\theta_j)\widehat y_h(t_n-\theta_j)$ to $A$.

3. Return $A$, equivalently
   $$\widehat{\mathcal I}_{K,h,r}(t_n)=\Delta\sum_{j=0}^{r-1}K(\theta_j)\widehat y_h(t_n-\theta_j).$$

Each history query uses the piecewise-linear interpolant, including queries
between Euler nodes. The computation uses $r$ kernel/history evaluations and
$O(rd)$ arithmetic. It uses $O(d)$ working memory if weights are recomputed
and $O(r+d)$ if cached. Since $h=q\Delta$ and every query time is a multiple of
$h$, every Euler-grid knot of the sampled history, including each delay
breakpoint $k\tau$, is a quadrature-cell endpoint.
