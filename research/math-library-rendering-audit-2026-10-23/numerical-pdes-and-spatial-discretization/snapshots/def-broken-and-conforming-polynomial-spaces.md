---
id: def-broken-and-conforming-polynomial-spaces
kind: definition
title: Broken and conforming polynomial spaces on a matching mesh
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-matching-affine-simplicial-meshes]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2019, Chapter 32, “H1-conforming approximation (I)”
      url: https://people.tamu.edu/~guermond/M661_FALL_2019/chap32.pdf
      locator: "§32.1, printed pp. 144–145: broken, H1-conforming, and zero-trace finite-element spaces."
    - title: Luca Heltai, Numerical Methods for Partial Differential Equations, Lecture 2
      url: https://luca-heltai.github.io/nmpde/lectures/lecture-02/
      locator: "§§5 and 10, broken norms and matching polynomial traces on shared faces."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $\mathcal T$ be a matching affine simplicial mesh of $\Omega$ as defined
in [[def-matching-affine-simplicial-meshes]]. Fix $k\in\mathbb N_0$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, and an integer $q\ge1$. On each
cell let $\mathbb P_k(K;\mathbb K^q)$ denote the
restrictions to $K$ of $\mathbb K^q$-valued polynomials of total degree at
most $k$. The **broken polynomial space** is the finite product
$$V_h^{\mathrm{br}}:=\prod_{K\in\mathcal T}\mathbb P_k(K;\mathbb K^q),$$
viewed as functions defined almost everywhere cell by cell. For an interior
facet $F=K\cap K'$, the **jump** is the difference of the two polynomial
traces, with either fixed ordering of $K,K'$; its vanishing is independent of
that ordering. The **conforming polynomial space** is
$$V_h^{\mathrm{conf}}:=\{v\in V_h^{\mathrm{br}}:v|_{F,K}=v|_{F,K'}\text{ on every interior facet }F\}.$$
The **zero-boundary subspace** consists of those $v\in V_h^{\mathrm{conf}}$
whose polynomial trace is zero on every boundary facet. These are algebraic
definitions. The Sobolev inclusions and the zero-boundary closure conclusion
are proved separately in the corresponding local theorems on matching
piecewise polynomials and zero-boundary values. If $\mathcal T=\varnothing$,
then $\Omega=\varnothing$ by the mesh definition; the empty product is the
zero vector space consisting of the unique empty function, and the trace
conditions are vacuous.
