---
id: alg-chebyshev-composite-simpson-weighted-mass-matrix
kind: algorithm
title: "Composite-Simpson assembly of the Chebyshev weighted mass matrix"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-chebyshev-arcsine-weighted-l2-pairing, alg-composite-simpson-rule, thm-chebyshev-multiple-angle-identities]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice axiom is used; the method evaluates a finite exact-arithmetic quadrature sum."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §§3.1–3.3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–118 / PDF pp. 111–124; weighted Chebyshev-Galerkin mass integrals."
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, §7.2"
      url: "https://artowen.su.domains/mc/Ch-quadrature.pdf"
      locator: "Chapter 7, §7.2; composite Simpson rule and fourth-derivative error bound."
---

## Definition

Input a polynomial degree $N\ge0$ and an even integer $M\ge2$ specifying the number of uniform subintervals of $[0,\pi]$. For $0\le i,j\le N$, form
$$
g_{ij}(\theta)=T_i(\cos\theta)T_j(\cos\theta)
$$
and return
$$
M^{S}_{ij}:=Q_S(g_{ij};0,\pi,M),
$$
where $Q_S$ is the composite Simpson procedure from [[alg-composite-simpson-rule]]. By the Chebyshev multiple-angle identity, $g_{ij}(\theta)=\cos(i\theta)\cos(j\theta)$, so this is the composite-Simpson approximation of the corresponding arcsine-weighted mass entry. The procedure uses exact real arithmetic and asserts no quadrature or floating-point accuracy beyond a separately proved bound.

