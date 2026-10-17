---
id: def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form
kind: definition
title: 'The matrix, left and right radicals, rank, and nondegeneracy of a bilinear form on a finite-dimensional space'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, thm-dual-family-is-a-basis-in-finite-dimension, def-coordinate-column-and-matrix-of-a-linear-map, def-rank-and-nullity, thm-rank-nullity, thm-invertible-matrices-correspond-to-linear-isomorphisms]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §§1 and 4'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
    - title: 'H. Pinkham, Linear Algebra, Chapter 7'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Definition

Let $B$ be a bilinear form on an $n$-dimensional vector space $V$, and let $\mathcal B=(v_0,\ldots,v_{n-1})$ be an ordered basis. The **matrix of $B$ in $\mathcal B$** is

$$[B]_{\mathcal B}:=(B(v_i,v_j))_{i,j<n}.$$

For coordinate columns $x=[u]_{\mathcal B}$ and $y=[v]_{\mathcal B}$, one has $B(u,v)=x^{\mathsf T}[B]_{\mathcal B}y$.

The **left radical** and **right radical** are

$$\operatorname{rad}_L(B):=\{u:B(u,v)=0\text{ for every }v\},\qquad \operatorname{rad}_R(B):=\{v:B(u,v)=0\text{ for every }u\}.$$

The **rank of $B$** is the rank of the associated map $B^\flat:V\to V^*$, $B^\flat(u)(v)=B(u,v)$. The form is **nondegenerate** when both radicals are zero. In finite dimension this is equivalent to $B^\flat$ being an isomorphism, and also to $[B]_{\mathcal B}$ being invertible.
