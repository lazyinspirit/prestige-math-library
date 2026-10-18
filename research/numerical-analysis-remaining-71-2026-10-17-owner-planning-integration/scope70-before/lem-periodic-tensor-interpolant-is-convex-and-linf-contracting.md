---
id: lem-periodic-tensor-interpolant-is-convex-and-linf-contracting
kind: lemma
title: "Periodic multilinear interpolation is convex and L-infinity contractive"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-semilagrangian-periodic-grid-and-interpolant]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Statement

For the periodic tensor interpolant of [[def-semilagrangian-periodic-grid-and-interpolant]], every value is a convex combination of the $2^d$ corner data. Consequently nonnegative data remain nonnegative, the interpolant lies between the minimum and maximum corner values, and for any node arrays $V,W$,
$$\|\mathcal I_hV-\mathcal I_hW\|_{L^\infty(\mathbb T^d_\ell)}\le\|V-W\|_{\ell^\infty}.$$
These conclusions hold at every foot, with no displacement-to-cell-size restriction.

## Facts & Assumptions

**Given:** The periodic grid, a lifted query point $x$, and finite real node arrays $V,W$.

[F1] [[def-semilagrangian-periodic-grid-and-interpolant]]: the coordinate fractions satisfy $0\le\theta_j<1$ and the corner weights are $w_{\boldsymbol\epsilon}=\prod_j\theta_j^{\epsilon_j}(1-\theta_j)^{1-\epsilon_j}$, with wrapped node indices.

## Proof

1.1 Each factor $\theta_j$ and $1-\theta_j$ is nonnegative, so every $w_{\boldsymbol\epsilon}(x)\ge0$. Summing over all binary vectors factorizes as $\sum_{\boldsymbol\epsilon}w_{\boldsymbol\epsilon}(x)=\prod_{j=1}^d((1-\theta_j)+\theta_j)=1$. Thus $\mathcal I_hV(x)$ is a convex combination of its corner data, even when wrapping makes two corner indices coincide. [given, F1, algebra]

2.1 If $V_{\boldsymbol i}\ge0$ at every node, each summand in the interpolant is nonnegative, so its value is nonnegative; the same convex-combination identity bounds it by the minimum and maximum corner data. [step 1.1, given, algebra]

3.1 At each $x$, [F1] and the triangle inequality give $|\mathcal I_hV(x)-\mathcal I_hW(x)|\le\sum_{\boldsymbol\epsilon}w_{\boldsymbol\epsilon}(x)|V_{\boldsymbol i(\boldsymbol\epsilon)}-W_{\boldsymbol i(\boldsymbol\epsilon)}|\le\|V-W\|_{\ell^\infty}\sum_{\boldsymbol\epsilon}w_{\boldsymbol\epsilon}(x)=\|V-W\|_{\ell^\infty}$. Taking the supremum over $x$ proves the stated contraction; no estimate in this argument uses the displacement size. [given, F1, step 1.1, algebra] ∎
