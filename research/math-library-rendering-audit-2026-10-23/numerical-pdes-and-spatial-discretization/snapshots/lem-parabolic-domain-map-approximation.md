---
id: lem-parabolic-domain-map-approximation
kind: lemma
title: "P1 approximation of a parabolic shear map"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-curved-domain-geometry-approximation
  - def-matching-affine-simplicial-meshes
  - lem-shape-regular-affine-simplex-scaling
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2023, Part III, Chapter 8"
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf
    - title: "Gerald Dziuk and Charles M. Elliott, Finite element methods for surface PDEs, Acta Numerica 22 (2013)"
      url: https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $\widehat\Omega=[-1,1]^2$, let $\mathcal T_h$ be a matching shape-regular affine triangulation, and put $\Phi(x,y)=(x,y+x^2/4)$. Let $I_h$ be the vertexwise P1 interpolant and $\Phi_h(x,y)=(x,y+I_h(x^2/4))$. In the notation of [[def-curved-domain-geometry-approximation]], there is a constant $C$ depending only on the shape-regularity bound such that $e_0\le Ch^2$ and $e_1\le Ch$. For sufficiently small $h$, $\det D\Phi_h\ge1/2$, and $\Phi_h$ is globally one-to-one on the square. The exact map has $\det D\Phi=1$ and a global inverse $(X,Y)\mapsto(X,Y-X^2/4)$.

## Facts & Assumptions

**Given:** Countable Choice; the square and a matching shape-regular affine triangulation with maximal diameter $h$.

[F1] [[def-matching-affine-simplicial-meshes]]: triangle interiors are disjoint and shared boundaries are complete matching facets.

[F2] [[lem-shape-regular-affine-simplex-scaling]]: barycentric gradients on a shape-regular triangle satisfy $|\nabla\lambda_i|\le C h_K^{-1}$.

[F3] [[def-curved-domain-geometry-approximation]]: $e_0$ and $e_1$ are the uniform value and derivative differences of exact and approximate geometry maps.

[A1] Countable Choice is the explicit hypothesis of [F2] ([[def-countable-choice]]).

## Proof

1.1 Direct differentiation gives $D\Phi=\begin{pmatrix}1&0\\x/2&1\end{pmatrix}$ and determinant $1$; the stated inverse is verified by substitution. On a triangle with barycentric coordinates $\lambda_i$ and vertex first-coordinates $x_i$, exact quadratic expansion gives $I_h(x^2/4)-x^2/4=\frac14\sum_{i<j}\lambda_i\lambda_j(x_i-x_j)^2$. Since $|x_i-x_j|\le h_K$ and $0\le\lambda_i\le1$, this is bounded by $Ch_K^2$. [given, algebra]

2.1 Differentiating the barycentric expression in step 1.1, only the factors $\lambda_i\lambda_j$ vary; their derivatives are bounded by $C h_K^{-1}$ using [F2], while $|x_i-x_j|^2\le h_K^2$. The product rule therefore gives a derivative bound $Ch_K$. Thus $\|D(I_h(x^2/4)-x^2/4)\|_{L^\infty(K)}\le Ch_K$, yielding the global $Ch$ derivative estimate and the $Ch^2$ value estimate. By [F3] these are the geometry errors $e_1$ and $e_0$. [F2, F3, A1, step 1.1, algebra]

3.1 The first coordinate of $\Phi_h$ is $x$, and on each vertical segment its second coordinate is the continuous piecewise-affine function $y+I_h(x^2/4)(x,y)$. Its slope on every subsegment is $1+\partial_y I_h(x^2/4)\ge1-Ch$. Choose $h$ with $Ch\le1/2$. Integration over the finitely many subsegments makes this coordinate strictly increasing with increment at least half the vertical increment. Equal images must therefore have equal first coordinates and then equal second-coordinate inputs; hence $\Phi_h$ is injective. The same derivative estimate gives $\det D\Phi_h=1+\partial_yI_h(x^2/4)\ge1/2$. [F1, step 2.1, algebra] ∎
