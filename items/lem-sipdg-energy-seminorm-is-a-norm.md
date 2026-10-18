---
id: lem-sipdg-energy-seminorm-is-a-norm
kind: lemma
title: The SIPDG broken energy expression is definite
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-sipdg-bilinear-form-and-energy-norm,
    def-matching-affine-simplicial-meshes,
    lem-sipdg-physical-simplex-trace-green,
    thm-holder-inequality-for-integrals,
    thm-cauchy-schwarz-and-the-euclidean-norm,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38:
        Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.2.2, printed p. 194: why the broken energy expression is a norm
        under weak homogeneous Dirichlet enforcement."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella
        Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic
        Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_20\
        02.pdf"
      locator: "§4.1, printed p. 1763: the mesh-dependent DG expressions are norms by
        the discrete Poincaré inequality."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $\|\cdot\|_{DG}$ be the energy expression from [[def-sipdg-bilinear-form-and-energy-norm]] on a finite matching simplicial mesh of a nonempty bounded polyhedral domain, with $\lambda>0$ and $\gamma>0$. Then $\|\cdot\|_{DG}$ is a norm on $V_h^{\rm br}$.

## Facts & Assumptions

**Given:** Countable Choice; a finite face-to-face triangulation of a bounded polyhedral open set, $\lambda>0$, $\gamma>0$, and the broken polynomial space and energy expression of [[def-sipdg-bilinear-form-and-energy-norm]].

[F1] The squared energy expression is the sum of nonnegative cell-gradient terms and positive-weight squared jumps on every interior and boundary facet. ([[def-sipdg-bilinear-form-and-energy-norm]])

[F2] A matching mesh is a finite union of nondegenerate simplices with pairwise-disjoint interiors; each interior facet is shared and each boundary facet is exterior. ([[def-matching-affine-simplicial-meshes]])

[F3] Products of $L^2$ functions satisfy the integral Cauchy–Schwarz inequality. ([[thm-holder-inequality-for-integrals]])

[F4] Cauchy–Schwarz holds for every finite list of real numbers. ([[thm-cauchy-schwarz-and-the-euclidean-norm]])

[F5] On each physical simplex, the Green identity applies to $u=1$ and the vector field $G(x)=x$, giving $d|K|=\sum_{F\subset\partial K}\int_Fx\cdot n_{K,F}\,dS$. ([[lem-sipdg-physical-simplex-trace-green]])

[F6] Countable Choice is the declared Sobolev/trace background of [F1] and the physical-simplex Green supplier [F5]. ([[def-countable-choice]])

## Proof

1.1 Suppose $\|v_h\|_{DG}=0$. Every cell-gradient term is zero, and positive definiteness of $A_K$ implies $\nabla(v_h|_K)=0$ almost everywhere. Since $v_h|_K$ is a polynomial on the connected simplex $K$, it is a constant $c_K$. [F1, given, algebra]

2.1 Every interior-facet jump is zero by [F1], so adjacent cells have equal constants. Thus $c_K$ is constant on each connected component of the cell-facet adjacency graph. For any such component, sum [F5] over its finitely many cells. The cell volumes are positive, while the two oriented integrals on every shared facet cancel; if there were no unshared facet, this would give $d\sum_K|K|=0$, a contradiction. Every unshared facet is an exterior mesh facet by the matching property [F2]. On that facet the boundary jump is the cell trace itself, so [F1] forces the component's constant to be zero. Therefore $v_h=0$ on every cell. [F1, F2, F5, F6, step 1.1, algebra]

3.1 The expression is homogeneous under scalar multiplication. Define its associated pairing by $b_{DG}(v_h,w_h):=\sum_K\int_K\nabla v_h^TA_K\nabla w_h+\gamma\sum_Fh_F^{-1}\int_F[v_h]_F[w_h]_F$. For any vectors $\xi,\eta$, the quadratic $(\xi+t\eta)^TA_K(\xi+t\eta)$ is nonnegative for all real $t$; if $\eta\ne0$, its discriminant is nonpositive, giving $|\xi^TA_K\eta|\le(\xi^TA_K\xi)^{1/2}(\eta^TA_K\eta)^{1/2}$, and the case $\eta=0$ is immediate. [F3] bounds the resulting cell integrals and each facet integral, while [F4] combines the finitely many cell and facet terms to give $|b_{DG}(v_h,w_h)|\le\|v_h\|_{DG}\|w_h\|_{DG}$. Expanding $b_{DG}(v_h+w_h,v_h+w_h)$ gives $\|v_h+w_h\|_{DG}^2\le(\|v_h\|_{DG}+\|w_h\|_{DG})^2$. Thus the triangle inequality holds; together with step 2.1 this proves the norm axioms. [F1, F2, F3, F4, step 2.1, algebra] ∎
