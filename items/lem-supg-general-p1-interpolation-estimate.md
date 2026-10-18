---
id: lem-supg-general-p1-interpolation-estimate
kind: lemma
title: "Shape-regular affine P1 interpolation estimates for C2 functions"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-supg-general-convection-diffusion-reaction-model, def-matching-affine-simplicial-meshes]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Theorem 5.26 and its proof, printed pp. 59–62: the SUPG convergence route applies P1 interpolation estimates in each term of the stabilized norm."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11, Local interpolation on affine meshes"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf"
      locator: "§§11.2 and 11.4, printed pp. 120–125: affine scaling and local interpolation estimates."
---

## Statement

Use the fixed dimension $d\ge2$ and the finite shape-regular affine simplicial mesh family from [[def-supg-general-convection-diffusion-reaction-model]] and [[def-matching-affine-simplicial-meshes]]. Let $u\in C^2(\overline\Omega)$, and on each simplex $K$ let $I_Ku=\sum_{i=0}^d u(a_i)\lambda_i$ be its nodal affine interpolant, where $a_i$ are the vertices and $\lambda_i$ the barycentric coordinates. Set $I_hu|_K=I_Ku$ and $M_2:=|\Omega|^{1/2}\|D^2u\|_{L^\infty(\Omega)}$, using the Euclidean matrix norm for $D^2u$. There is a constant $C_I$ depending only on $d$ and the shape-regularity bound such that
$$\|u-I_hu\|_{L^2(\Omega)}\le C_Ih^2M_2,\qquad \|\nabla(u-I_hu)\|_{L^2(\Omega)}\le C_IhM_2.$$
If $u=0$ on $\partial\Omega$, then $I_hu=0$ on every boundary facet.

## Facts & Assumptions

**Given:** The finite matching affine simplicial mesh family, its shape-regularity bound $\sigma$, and $u\in C^2(\overline\Omega)$.

[F1] [[def-matching-affine-simplicial-meshes]]: each cell is a nondegenerate affine simplex, its barycentric coordinates are affine, and its inradius $\rho_K$ satisfies $h_K/\rho_K\le\sigma$.

[F2] [[def-supg-general-convection-diffusion-reaction-model]]: $h=\max_K h_K$, the mesh is finite, and $\sum_K|K|=|\Omega|$.

## Proof

1.1 Fix a cell $K$ and a vertex $a_0$. Taylor's formula along the segment from $a_0$ to $x\in K$ gives $u(x)=p_K(x)+r_K(x)$ with $p_K(x)=u(a_0)+\nabla u(a_0)\cdot(x-a_0)$, $|r_K(x)|\le\frac12h_K^2\|D^2u\|_{L^\infty(K)}$, and $|\nabla r_K(x)|\le h_K\|D^2u\|_{L^\infty(K)}$. [F1, given, construct]

2.1 The nodal interpolant reproduces $p_K$, so $u-I_Ku=r_K-\sum_i r_K(a_i)\lambda_i$. On $K$, $0\le\lambda_i\le1$ and $\sum_i\lambda_i=1$. The altitude from any vertex to its opposite facet is at least $\rho_K$, hence $|\nabla\lambda_i|\le\rho_K^{-1}\le\sigma h_K^{-1}$ by [F1]. Substitution of the bounds in step 1.1 gives $|u-I_Ku|\le C(d)h_K^2\|D^2u\|_{L^\infty(K)}$ and $|\nabla(u-I_Ku)|\le C(d,\sigma)h_K\|D^2u\|_{L^\infty(K)}$. [F1, step 1.1, algebra]

3.1 Squaring the two pointwise bounds, integrating on each cell, summing over the finite mesh, using $h_K\le h$ and $\sum_K|K|=|\Omega|$, and taking square roots proves both global estimates with $M_2=|\Omega|^{1/2}\|D^2u\|_\infty$. [F2, step 2.1, algebra]

4.1 On a shared interior facet, the affine traces from its two incident cells agree at all facet vertices, so they agree everywhere on that facet; thus the cell interpolants assemble to a continuous $I_hu$. If $u$ vanishes on a boundary facet, all its vertices there have zero nodal values, so the affine trace also vanishes there. This proves both global conformity and the boundary claim. [F1, given, step 2.1] ∎