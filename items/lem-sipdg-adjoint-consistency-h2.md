---
id: lem-sipdg-adjoint-consistency-h2
kind: lemma
title: SIPDG adjoint consistency for piecewise H2 dual solutions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-sipdg-bilinear-form-and-energy-norm,
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
      locator: "§38.2.1 and §38.3, printed pp. 193 and 198–199: the symmetric
        adjoint-consistency term and its duality role."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella
        Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic
        Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_20\
        02.pdf"
      locator: "§3.3 and §5.1, printed pp. 1758–1759 and 1767–1768: the
        adjoint-consistency condition and its use in the L2 duality identity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and the mesh and coefficient hypotheses of [[def-sipdg-bilinear-form-and-energy-norm]]. Let $e|_K\in H^2(K)$ on every cell, and let $z|_K\in H^2(K)$ be a dual solution with matching interior traces, zero boundary trace, matching normal coefficient fluxes, and $-\nabla\cdot(A_K\nabla z)=e$ on every cell. Then the SIPDG form, extended to these piecewise regular functions by its same formula, satisfies
$$a_h(e,z)=\|e\|_{L^2(\Omega)}^2.$$

## Facts & Assumptions

**Given:** Countable Choice; a finite matching affine simplicial mesh; piecewise constant symmetric positive-definite $A_K$; piecewise $H^2$ error $e$; and a piecewise $H^2$ dual solution $z$ with matching traces, zero boundary trace, matching normal fluxes, and $-\nabla\cdot(A_K\nabla z)=e$ cellwise.

[F1] The SIPDG formula is symmetric in its two arguments, with face terms $-q_F(v)[w]_F-q_F(w)[v]_F+\gamma h_F^{-1}[v]_F[w]_F$. ([[def-sipdg-bilinear-form-and-energy-norm]])

[F2] For $v,G\in W^{1,2}$ on a physical affine simplex, the trace Green identity is $\int_Kv\,\operatorname{div}G+\nabla v\cdot G=\sum_{F\subset\partial K}\int_F(\gamma_Fv)(\gamma_FG)\cdot n_{K,F}$. ([[lem-sipdg-physical-simplex-trace-green]])

[F3] Countable Choice is required by the imported reference-simplex Green identity [F2]. ([[def-countable-choice]])

[F4] $H^2(K)$ means $W^{2,2}(K)$, so $A_K\nabla z\in W^{1,2}(K;\mathbb R^d)$ when $A_K$ is constant. ([[def-sobolev-space-wkp-and-its-norm]])

## Proof

1.1 On each cell apply [F2] with scalar $v=e|_K$ and vector field $G=A_K\nabla z$, which belongs to $W^{1,2}$ by [F4]. Symmetry of $A_K$ and the dual equation give $\int_KA_K\nabla e\cdot\nabla z=\int_Ke^2+\sum_{F\subset\partial K}\int_F e(A_K\nabla z\cdot n_{K,F})$. [F1, F2, F3, F4, given]

2.1 Sum step 1.1 over all cells. Matching normal fluxes make each interior-face contribution $\int_Fq_F(z)[e]_F$, and the boundary contributions use $[e]_F=e$. Thus $\sum_K\int_KA_K\nabla e\cdot\nabla z=\|e\|_{L^2(\Omega)}^2+\sum_F\int_Fq_F(z)[e]_F$. [step 1.1, given, algebra]

3.1 The traces of $z$ match on interior facets and vanish on boundary facets, so $[z]_F=0$ for every $F$. In $a_h(e,z)$ the term $-q_F(e)[z]_F$ and the penalty term therefore vanish; the remaining flux term is $-\sum_F\int_Fq_F(z)[e]_F$. Substituting step 2.1 proves the identity. [F1, step 2.1, given, algebra] ∎
