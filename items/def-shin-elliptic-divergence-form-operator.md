---
id: def-shin-elliptic-divergence-form-operator
kind: definition
title: "Shin's positive divergence-form operator"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-ck-and-multi-index-notation-in-several-variables]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "equations (3.6)–(3.8), Assumption 3.3"
---

## Definition

Let $U\subset\mathbb R^d$ be open. For finite real coefficient functions $a_{ij},b_i,c_i,d$ on $U$, the positive divergence-form expression is
$$L[u]=\sum_{i,j=1}^d D_i(a_{ij}D_j u)+\sum_{i=1}^dD_i(b_i u)+\sum_{i=1}^d c_iD_i u+du.$$
Its classical domain consists of those $u\in C^2(U)$ for which every displayed flux derivative $D_i(a_{ij}D_j u)$ and $D_i(b_i u)$ exists pointwise and is finite on $U$. The classical formula assigns no value outside this domain. In particular, if each $D_i a_{ij}$ and $D_i b_i$ exists pointwise and is finite, the product rule makes every $u\in C^2(U)$ admissible and gives the nondivergence expansion
$$L[u]=\sum_{i,j=1}^d a_{ij}D_iD_j u+\sum_{j=1}^d\widetilde b_jD_j u+\widetilde c\,u,$$
with
$$\widetilde b_j=\sum_{i=1}^dD_i a_{ij}+b_j+c_j,\qquad \widetilde c=\sum_{i=1}^dD_i b_i+d.$$
The **positive divergence convention** here means that the principal part is $+\sum_{i,j}D_i(a_{ij}D_j u)$. This sign is part of the definition.

When a weak formulation is used, its divergence derivatives are instead distributional derivatives of locally integrable fluxes, with the integrability hypotheses supplied in that formulation. Equality with a pointwise expression requires separate justification; pointwise differentiability alone does not assert it.

## Definition references
[[def-ck-and-multi-index-notation-in-several-variables|ck and multi index notation in several variables]]

[Shin et al., equation (3.6): elliptic divergence-form operator and expanded coefficients](https://arxiv.org/pdf/2004.01806)


## Source indexing discrepancy

The source displays $\sum_{i,j}D_i(a_{ij}D_j u+b_i u)$ while its expanded coefficients and energy argument count $D_i(b_i u)$ only once. Read literally, that displayed sum instead gives $d\sum_iD_i(b_i u)$ and changes both the drift and potential. The active definition above separates the two sums explicitly and agrees with the stated expanded coefficients. The original printed expression is retained here as a source discrepancy, not used as an algebraic identity.
