---
id: thm-sipdg-exact-consistency
kind: theorem
title: Exact consistency of the symmetric interior-penalty DG form
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-sipdg-bilinear-form-and-energy-norm,
    def-sipdg-jump-average-convention,
    lem-sipdg-physical-simplex-trace-green,
    def-sobolev-space-wkp-and-its-norm,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38:
        Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.2.1, Lemma 38.2, printed pp. 193–194: exact consistency by
        elementwise integration by parts."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella
        Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic
        Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_20\
        02.pdf"
      locator: "§3.3, printed pp. 1758–1759: consistency and Galerkin orthogonality of
        the primal formulation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let the mesh, coefficients, and SIPDG form be as in [[def-sipdg-bilinear-form-and-energy-norm]]. Suppose $u|_K\in H^2(K)$ on every cell, its facet traces agree across every interior facet, its boundary trace is zero, and $f|_K=-\nabla\cdot(A_K\nabla u)$ on each cell with $f\in L^2(\Omega)$. Assume also that the normal coefficient fluxes agree across interior facets: $(A_{K^-}\nabla u^- )\cdot n_F=(A_{K^+}\nabla u^+ )\cdot n_F$. Then for every $w_h\in V_h^{\rm br}$,
$$a_h(u,w_h)=\ell_h(w_h):=\sum_{K\in\mathcal T}\int_K f w_h\,dx.$$

## Facts & Assumptions

**Given:** Countable Choice; a finite matching affine simplicial mesh; cellwise constant symmetric positive-definite $A_K$; a piecewise $H^2$ function $u$ with matching interior traces and zero boundary trace; a piecewise $L^2$ source $f=-\nabla\cdot(A_K\nabla u)$; and matching interior normal fluxes.

[F1] The SIPDG form contains the broken volume term, the two symmetric flux-jump terms, and the jump penalty; the boundary jump equals the trace of its cell. ([[def-sipdg-bilinear-form-and-energy-norm]], [[def-sipdg-jump-average-convention]])

[F2] On each physical affine simplex, for scalar $v\in W^{1,2}$ and vector field $G\in W^{1,2}$, the transferred face traces satisfy $\int_Kv\,\operatorname{div}G+\nabla v\cdot G=\sum_{F\subset\partial K}\int_F(\gamma_Fv)(\gamma_FG)\cdot n_{K,F}$. ([[lem-sipdg-physical-simplex-trace-green]])

[F3] Countable Choice is the stated hypothesis of the physical-simplex trace and Green identity [F2]. ([[def-countable-choice]])

[F4] $H^2(K)$ means $W^{2,2}(K)$ and $W^{1,2}(K)$ consists of $L^2$ classes with first weak derivatives in $L^2$. ([[def-sobolev-space-wkp-and-its-norm]])

## Proof

1.1 On each cell $K$, take $v=w_h|_K$ and $G=A_K\nabla u$. Since $u|_K\in H^2(K)$, [F4] and constant $A_K$ give $G\in W^{1,2}(K;\mathbb R^d)$, so [F2] and the cell equation yield $\int_KA_K\nabla u\cdot\nabla w_h=\int_Kfw_h+\sum_{F\subset\partial K}\int_F(A_K\nabla u\cdot n_{K,F})w_h|_K$. [F1, F2, F3, F4, given]

2.1 Sum step 1.1 over cells. On an interior facet the two outward normals are $n_F$ and $-n_F$; the assumed normal-flux equality makes the two boundary terms equal $\int_Fq_F(u)[w_h]_F$. On a boundary facet the single term is also $\int_Fq_F(u)[w_h]_F$ by the one-sided convention. Therefore the broken volume term equals $\ell_h(w_h)+\sum_F\int_Fq_F(u)[w_h]_F$. [F1, step 1.1, given, algebra]

3.1 The matching traces of $u$ and its zero boundary trace give $[u]_F=0$ on every facet. Substitution into the SIPDG form makes its second flux-jump term exactly cancel the face sum of step 2.1, while its adjoint-consistency term and penalty term vanish. Hence $a_h(u,w_h)=\ell_h(w_h)$. [F1, step 2.1, given, algebra] ∎
