---
id: thm-sipdg-coercivity-large-penalty
kind: theorem
title: SIPDG coercivity above the discrete inverse-trace threshold
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-sipdg-bilinear-form-and-energy-norm, lem-sipdg-discrete-flux-inverse-bound, lem-sipdg-energy-seminorm-is-a-norm, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38: Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.2.2, Lemma 38.6, printed pp. 194–195: inverse-trace threshold, coercivity, and well-posedness."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_2002.pdf"
      locator: "§4.2, printed pp. 1765–1766: penalty terms absorb the consistency terms once the threshold exceeds the inverse-trace bound."
---

## Statement

Assume Countable Choice. Use the mesh, coefficient field, energy norm, and form of [[def-sipdg-bilinear-form-and-energy-norm]], and let $C_{\rm flux}$ be the constant of [[lem-sipdg-discrete-flux-inverse-bound]]. If $\gamma\ge4C_{\rm flux}$, then
$$a_h(v_h,v_h)\ge\tfrac12\|v_h\|_{DG}^2\qquad(v_h\in V_h^{\rm br}).$$
Thus the discrete bilinear form is coercive with constant $1/2$ in the broken energy norm. For every $f\in L^2(\Omega)$, the finite-dimensional SIPDG system has a unique solution. The sufficient threshold depends on the polynomial degree, shape regularity, and coefficient ellipticity bounds; no universal penalty value is asserted.

## Facts & Assumptions

**Given:** Countable Choice; $k\ge1$; symmetric cellwise constant $A_K$ with ellipticity bounds $0<\lambda\le\Lambda$; a finite matching shape-regular mesh; $\gamma\ge4C_{\rm flux}$; and the SIPDG form and energy norm.

[F1] The form is the cell energy minus the two symmetric flux-jump pairings plus $\gamma\sum_Fh_F^{-1}([v]_F,[w]_F)_{L^2(F)}$. ([[def-sipdg-bilinear-form-and-energy-norm]])

[F2] The squared coefficient-flux trace satisfies $\sum_Fh_F\|q_F(v_h)\|_{L^2(F)}^2\le C_{\rm flux}\sum_K\int_KA_K\nabla v_h\cdot\nabla v_h$. ([[lem-sipdg-discrete-flux-inverse-bound]])

[F3] The broken energy expression is a norm on the finite-dimensional discontinuous polynomial space. ([[lem-sipdg-energy-seminorm-is-a-norm]])

[F4] Countable Choice is the explicit hypothesis in the inverse-trace supplier [F2]. ([[def-countable-choice]])

## Proof

1.1 Put $X^2:=\sum_K\int_KA_K\nabla v_h\cdot\nabla v_h$ and $J^2:=\sum_Fh_F^{-1}\|[v_h]_F\|_{L^2(F)}^2$. Cauchy–Schwarz on the finite face sum and [F2] give $|\sum_F\int_Fq_F(v_h)[v_h]_F|\le (\sum_Fh_F\|q_F(v_h)\|_F^2)^{1/2}J\le\sqrt{C_{\rm flux}}XJ$. [F1, F2, F4, algebra]

2.1 By [F1], $a_h(v_h,v_h)=X^2-2\sum_F\int_Fq_F(v_h)[v_h]_F+\gamma J^2$. Young's inequality gives $2\sqrt{C_{\rm flux}}XJ\le\tfrac12X^2+2C_{\rm flux}J^2$, hence $a_h(v_h,v_h)\ge\tfrac12X^2+(\gamma-2C_{\rm flux})J^2\ge\tfrac12(X^2+\gamma J^2)=\tfrac12\|v_h\|_{DG}^2$. [F1, step 1.1, given, algebra]

3.1 The coefficient matrix of $a_h$ in any basis of the finite-dimensional space $V_h^{\rm br}$ is symmetric by [F1]. If its matrix kernel contained a nonzero vector, the corresponding $v_h\ne0$ would satisfy $a_h(v_h,v_h)=0$, contradicting [F3] and step 2.1. Therefore the square matrix is injective, hence invertible in finite dimension, so every load has exactly one solution. [given, F1, F3, step 2.1, algebra] ∎
