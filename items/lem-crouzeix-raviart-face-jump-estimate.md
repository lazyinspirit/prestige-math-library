---
id: lem-crouzeix-raviart-face-jump-estimate
kind: lemma
title: Face jumps are controlled by the broken gradient
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-countable-choice
  - def-crouzeix-raviart-global-space
  - def-matching-affine-simplicial-meshes
  - lem-shape-regular-affine-simplex-scaling
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.9, equations (36.14) and its proof, PDF pp. 7–8."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 314–343: face-mean cancellation and local scaling of nonconforming jumps."
---

## Statement

Assume Countable Choice. For every matching shape-regular simplicial mesh and
$v_h\in V_h^{CR,0}$,
$$\sum_{F\in\mathcal F^\circ\cup\mathcal F^\partial} h_F^{-1}\|[v_h]_F\|_{L^2(F)}^2 \le C\|\nabla_hv_h\|_{L^2(\Omega)}^2.$$
On an interior facet, $[v_h]_F=v_{K^+}-v_{K^-}$; on a boundary facet,
$[v_h]_F=v_K$. The constant depends only on $d$ and the shape-regularity
bound.

## Facts & Assumptions

**Given:** Countable Choice, a finite matching shape-regular simplicial mesh, and $v_h$ in the global CR space of [[def-crouzeix-raviart-global-space]].

[A1] Countable Choice is required by the shape-regular affine simplex scaling interface used below. ([[def-countable-choice]])

[F1] The mean of every interior jump and every boundary trace jump is zero by the defining face-average constraints. ([[def-crouzeix-raviart-global-space]])

[F2] On a shape-regular simplex, $|K|\asymp h_K^d$, $|F|\asymp h_K^{d-1}$, and adjacent cell/facet diameters are comparable. ([[lem-shape-regular-affine-simplex-scaling]])

## Proof
1.1 Let $F$ be a facet of $K$ and let $b_F$ be its barycenter. For any affine $j_F$ on $F$, $j_F(x)=j_F(b_F)+\nabla_Fj_F\cdot(x-b_F)$ and $\int_F(x-b_F)\,dS=0$ by the definition $b_F=|F|^{-1}\int_Fx\,dS$; hence its face average is exactly $j_F(b_F)$. On an interior facet, the jump $j_F=[v_h]_F$ is affine with zero mean by [F1], hence $j_F(b_F)=0$. On a boundary facet, $j_F=v_K$ has zero mean and likewise $j_F(b_F)=0$. Therefore for every $x\in F$, $|j_F(x)|=|\nabla_Fj_F\cdot(x-b_F)| \le h_F\bigl(|\nabla v_{K^+}|+|\nabla v_{K^-}|\bigr),$ with the absent cell term omitted on the boundary. [F1, given, algebra]

2.1 Squaring step 1.1 and integrating on $F$ gives $h_F^{-1}\|j_F\|_{L^2(F)}^2\le C h_F^d (|\nabla v_{K^+}|^2+|\nabla v_{K^-}|^2)$, where the factor $h_F^d$ is $h_F^{-1}\cdot h_F^2\cdot |F|$. By [F2], $h_F^d|\nabla v_K|^2\le C|K||\nabla v_K|^2=C\|\nabla v_K\|_{L^2(K)}^2$ for each incident cell. Summing over facets counts each cell at most $d+1$ times, proving the estimate. [A1, F2, step 1.1, algebra] ∎
