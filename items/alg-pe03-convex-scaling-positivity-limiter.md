---
id: alg-pe03-convex-scaling-positivity-limiter
kind: algorithm
title: Maximal convex scaling toward an admissible cell mean
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe03-convex-invariant-domain]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "X. Zhang and C.-W. Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "§2, positivity-preserving scaling limiter, PDF pp. 5–9; complete article read"
---

## Definition

Let $K\subseteq\mathbb R^m$ be closed and convex (convex in the sense of
[[def-pe03-convex-invariant-domain]]), let $J$ be a finite nonempty
index set, let $w_j>0$ with $\sum_{j\in J}w_j=1$, and let input states
$V_j\in\mathbb R^m$ have mean $\bar V=\sum_jw_jV_j\in K$. The **maximal
convex scaling limiter** returns the largest $\theta\in[0,1]$ for which every
$$V_j^\theta=\bar V+\theta(V_j-\bar V)$$
belongs to $K$, together with all the states $V_j^\theta$. Equivalently, form
$$S=\{\theta\in[0,1]:V_j^\theta\in K\text{ for every }j\in J\},$$
and return $\theta_*:=\max S$ and $(V_j^{\theta_*})_{j\in J}$. The mean is
assumed admissible; implementation, cost, and any pointwise-in-cell property
are not part of this definition.

