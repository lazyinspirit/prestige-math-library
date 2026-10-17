---
id: thm-matching-continuous-piecewise-polynomials-are-wkp
kind: theorem
title: Continuous matching piecewise polynomials belong to W1p
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-broken-and-conforming-polynomial-spaces, lem-affine-simplex-gauss-green-formula, lem-oriented-facet-cancellation-on-matching-meshes, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2019, Chapter 32
      url: https://people.tamu.edu/~guermond/M661_FALL_2019/chap32.pdf
      locator: "§32.1, printed pp. 144–145: matching traces and H1-conforming polynomial spaces."
    - title: Luca Heltai, Numerical Methods for Partial Differential Equations, Lecture 2
      url: https://luca-heltai.github.io/nmpde/lectures/lecture-02/
      locator: "§10: continuity across matching faces and conforming finite-element functions."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $\mathcal T$ be a finite matching affine simplicial mesh of a bounded
polyhedral open set $\Omega$, let $1\le p\le\infty$, and let $v$ be a
real-valued scalar member of the conforming piecewise-polynomial space in
[[def-broken-and-conforming-polynomial-spaces]]. Then $v\in W^{1,p}(\Omega)$.
Its weak gradient agrees almost everywhere on each cell with the ordinary
cellwise polynomial gradient.

## Facts & Assumptions

**Given:** Countable Choice, a finite matching mesh, $v$ polynomial on each cell with equal polynomial traces across every interior facet, $1\le p\le\infty$, and $\varphi\in C_c^\infty(\Omega)$.

[F1] The conforming condition is equality of the two polynomial traces on each whole interior facet. ([[def-broken-and-conforming-polynomial-spaces]])

[F2] A $C^1$ field on a simplex satisfies the cellwise Gauss–Green formula. ([[lem-affine-simplex-gauss-green-formula]])

[F3] The two outward normals on an interior matching facet are opposite, so its oriented contributions cancel when cell boundaries are summed. ([[lem-oriented-facet-cancellation-on-matching-meshes]])

[F4] A weak first derivative is characterized by integration against compactly supported smooth tests, and $W^{1,p}$ consists of $L^p$ classes whose weak first derivatives lie in $L^p$. ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]])

[F5] Countable Choice is the explicit background assumption in the Sobolev-space definition. ([[def-countable-choice]])

## Proof

1.1 If $\mathcal T=\varnothing$, then $\Omega=\varnothing$ by the mesh definition; $v$ is the unique zero class in $W^{1,p}(\Omega)$ and the cellwise-gradient assertion has no cells. Assume now $\mathcal T\ne\varnothing$. The mesh is finite and each cellwise polynomial and its ordinary first derivatives are bounded on the closed cell. Thus $v$ and the piecewise function $g_i=\partial_i(v|_K)$ belong to $L^p(\Omega)$ for every $1\le p\le\infty$. Fix a coordinate $i$ and a test function $\varphi\in C_c^\infty(\Omega)$. On each cell apply [F2] to $G=(v\varphi)e_i$ to obtain $$\int_Kv\,\partial_i\varphi\,dx =-\int_Kg_i\varphi\,dx+\sum_{F\subset\partial K}\int_Fv\varphi(n_{K,F})_i\,dS.$$ [F2, given]

2.1 Sum these finitely many identities over $K$. On an interior facet, [F1] gives a common trace for $v\varphi$ and [F3] gives opposite outward normals, so the two flux integrals cancel. On a boundary facet, $\varphi=0$ because its support is compact in $\Omega$. Therefore $$\int_\Omega v\,\partial_i\varphi\,dx=-\int_\Omega g_i\varphi\,dx.$$ By [F4], $g_i$ is the weak $i$th derivative. This holds for every coordinate $i$; all $g_i$ are in $L^p$, so $v\in W^{1,p}(\Omega)$ with the stated cellwise gradient. [F1, F3, F4, F5, step 1.1] ∎
