---
id: def-pe04-diagonal-norm-sbp-element-data
kind: definition
title: Diagonal-norm summation-by-parts element data
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-pe04-one-dimensional-interval-mesh-and-broken-polynomials
  - def-matching-affine-simplicial-meshes
justified_by: []
aliases: []
forward_refs: []
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
    - title: "Travis C. Fisher and Mark H. Carpenter, High-Order Entropy Stable Finite Difference Schemes for Nonlinear Conservation Laws: Finite Domains, NASA/TM-2013-217971"
      url: "https://ntrs.nasa.gov/api/citations/20130011028/downloads/20130011028.pdf"
      locator: "§2.3.2, printed p. 8: positive diagonal norm, derivative matrix, and the SBP matrix identity."
---

## Definition

On an affine element in dimension $d\ge1$, diagonal-norm SBP data consist of a nodal state vector with $N_K$ entries, a positive diagonal matrix $H_K\in\mathbb R^{N_K\times N_K}$, and derivative matrices $D_{K,\ell}$, $1\le\ell\le d$. Put $Q_{K,\ell}=H_KD_{K,\ell}$. For each face $F$ let $R_{K,F}$ select its face nodes from the volume nodes, let $M_{K,F}$ be a positive diagonal face quadrature matrix, and let $n_{K,F}$ be its constant outward unit normal. The data are **SBP compatible** when
$$D_{K,\ell}\mathbf1=0,\qquad R_{K,F}\mathbf1=\mathbf1_F,\qquad Q_{K,\ell}+Q_{K,\ell}^{T}=\sum_{F\subset\partial K} n_{K,F,\ell}R_{K,F}^{T}M_{K,F}R_{K,F}$$
for each coordinate $\ell$. The rows of $R_{K,F}$ select the nodes used by the face quadrature; on an interior face, the two cells have the same face nodes and weights under the face identification and opposite normals. In dimension one, $R_L$ and $R_R$ select the left and right endpoint nodes with normals $-1$ and $+1$.

This is conditional algebraic data: the definition does not assert that every mesh has such a rule. The identities include exact affine metric factors and no curved-element metric approximation.
