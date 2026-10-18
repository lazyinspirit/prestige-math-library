---
id: lem-nitsche-global-boundary-flux-bound
kind: lemma
title: Global boundary-flux estimate on a matching mesh
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-nitsche-boundary-penalty-forms, def-matching-affine-simplicial-meshes, lem-nitsche-local-polynomial-flux-inverse-trace, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
---

## Statement

Assume Countable Choice and the nonempty mesh hypotheses of [[def-nitsche-boundary-penalty-forms]]. Let $N_\partial$ be the maximum number of boundary facets incident to a single cell, and use the selected positive local constant $C_{\mathrm{tr}}\ge1$ from [[lem-nitsche-local-polynomial-flux-inverse-trace]]. The mesh has at least one boundary facet, so $1\le N_\partial\le d+1$ and $C_\partial:=\sqrt{N_\partial}C_{\mathrm{tr}}\ge1$. For every $v_h\in V_h$,
$$\left(\sum_{F\in\mathcal F_h^\partial}h_F\|\partial_n v_h\|_{L^2(F)}^2\right)^{1/2}\le C_\partial\|\nabla v_h\|_{L^2(\Omega)},\qquad C_\partial:=\sqrt{N_\partial}\,C_{\mathrm{tr}}.$$
Consequently,
$$\left|\sum_{F\in\mathcal F_h^\partial}\int_F(\partial_n v_h)v_h\,dS\right|\le C_\partial\|\nabla v_h\|_{L^2(\Omega)}\left(\sum_{F\in\mathcal F_h^\partial}h_F^{-1}\|v_h\|_{L^2(F)}^2\right)^{1/2}.$$
For simplices $N_\partial\le d+1$; no sharper face-count bound is needed.

## Facts & Assumptions

**Given:** Countable Choice; the finite matching mesh and boundary facets of [[def-nitsche-boundary-penalty-forms]]; the local inverse-trace bound of [[lem-nitsche-local-polynomial-flux-inverse-trace]]; and $v_h\in V_h$.

[F1] For each boundary facet $F$ with incident cell $K_F$, $h_F\|\partial_n v_h\|_{L^2(F)}^2\le C_{\mathrm{tr}}^2\|\nabla v_h\|_{L^2(K_F)}^2$ ([[lem-nitsche-local-polynomial-flux-inverse-trace]]).

[F2] A $d$-simplex has exactly $d+1$ facets; when the sum ranges over boundary facets, each cell gradient term is therefore counted at most $d+1$ times.

[F3] Distinct mesh-cell interiors are disjoint, and every boundary facet has one incident cell ([[def-matching-affine-simplicial-meshes]]).

[F4] Cauchy–Schwarz for finite sums and for the $L^2(F)$ integrals gives $|\int_F ab|\le\|a\|_{L^2(F)}\|b\|_{L^2(F)}$.

## Proof


**Given:** The finite boundary-facet incidence family and [F1]–[F3].

1.1 Sum [F1] over all boundary facets. Each cell contributes at most $N_\partial$ copies of its squared gradient norm, so $\sum_F h_F\|\partial_n v_h\|_F^2\le N_\partial C_{\mathrm{tr}}^2\sum_K\|\nabla v_h\|_K^2=N_\partial C_{\mathrm{tr}}^2\|\nabla v_h\|_\Omega^2$. Taking square roots proves the first inequality. [F1, F2, given]

1.2 Choose a point $x_0$ in the interior of a mesh cell. The finite union of cells is compact and bounded, so the ray $x_0+tv$ has a last point in that union for every unit direction $v$. Choose $v$ outside the finitely many measure-zero sets of directions whose ray meets a cell face of dimension at most $d-2$ or is parallel to a facet plane; the excluded directions are measure zero because each such face has dimension at most $d-2$ and radial projection from $x_0$ has dimension at most $d-2$ on the $(d-1)$-sphere. The last point therefore lies in the relative interior of a facet and the ray crosses it transversally. If two cells meet at a point in the relative interior of a common facet, their interiors lie on opposite sides: if both lay on the same side of its affine hyperplane, a sufficiently small point displaced to that side near the facet point would lie in the interior of both nondegenerate simplices, contradicting their disjoint interiors in [F3]. Thus such a shared-facet point is interior to the union, contrary to its being the last point on the ray. The last point is consequently on a one-cell boundary facet. Since the local result gives $C_{\mathrm{tr}}\ge1$, we obtain $1\le N_\partial$ and $C_\partial=\sqrt{N_\partial}C_{\mathrm{tr}}\ge1$. [F1, F3, given, choose]

2.1 Apply [F4] on each facet and then finite-sum Cauchy–Schwarz to obtain $\left|\sum_F\int_F(\partial_n v_h)v_h\right|\le\sum_F(h_F^{1/2}\|\partial_n v_h\|_F)(h_F^{-1/2}\|v_h\|_F)\le\left(\sum_Fh_F\|\partial_n v_h\|_F^2\right)^{1/2}\left(\sum_Fh_F^{-1}\|v_h\|_F^2\right)^{1/2}.$ Substitute the first inequality from step 1.1 to get the stated bound. [F4, step 1.1, algebra] ∎