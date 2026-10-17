---
id: def-chaos-total-degree-and-hyperbolic-cross-index-sets
kind: definition
title: Total-degree and hyperbolic-cross chaos index sets
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-finite-product-chaos-input]
justified_by: [lem-chaos-index-sets-are-finite]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: None. The sets use finite tuples of natural numbers.
verification:
  precheck: n/a
sources:
  references:
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §3.3.2
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §3
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
---

## Definition

For $d$ inputs with admissible cutoff vector
$p=(p_1,\ldots,p_d)$ from [[def-finite-product-chaos-input]], the cutoff
total-degree set of order $s\ge0$ and cutoff hyperbolic-cross set of
threshold $N\ge1$ are
$$\Lambda^{\mathrm{TD}}_{s,p}=\{\alpha\in\mathbb N_0^d:0\le\alpha_j\le p_j,\ \sum_{j=1}^d\alpha_j\le s\},\qquad \Lambda^{\mathrm{HC}}_{N,p}=\{\alpha\in\mathbb N_0^d:0\le\alpha_j\le p_j,\ \prod_{j=1}^d(\alpha_j+1)\le N\},$$
The cutoff vector prevents either set from requesting
polynomials above the moment degree declared in
[[def-finite-product-chaos-input]]. Both are finite and contain zero.
An arbitrary finite index set used below is denoted by $\Lambda$; whenever a
downward-closed set is required, this means $\alpha\in\Lambda$ and
$0\le\beta_j\le\alpha_j$ for every $j$ imply $\beta\in\Lambda$.
