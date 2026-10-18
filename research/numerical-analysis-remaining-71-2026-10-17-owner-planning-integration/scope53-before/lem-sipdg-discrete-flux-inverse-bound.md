---
id: lem-sipdg-discrete-flux-inverse-bound
kind: lemma
title: Discrete inverse-trace bound for SIPDG coefficient fluxes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-sipdg-bilinear-form-and-energy-norm, thm-polynomial-inverse-and-discrete-trace-estimates, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38: Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.2.2, printed pp. 194–195: the discrete trace inequality used to bound the consistency flux."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_2002.pdf"
      locator: "§4.1, printed pp. 1763–1764: inverse-trace control of the face consistency terms."
---

## Statement

Assume Countable Choice. Let $\mathcal T$, $A_K$, $k$, $\lambda$, $\Lambda$, $h_F$, and $q_F$ be as in [[def-sipdg-bilinear-form-and-energy-norm]]. There is a constant $C_{\rm flux}<\infty$, depending only on $d$, $k$, $\sigma$, $\lambda$, and $\Lambda$, such that every $v_h\in V_h^{\rm br}$ satisfies
$$\sum_{F\in\mathcal F_h}h_F\|q_F(v_h)\|_{L^2(F)}^2\le C_{\rm flux}\sum_{K\in\mathcal T}\int_K A_K\nabla v_h\cdot\nabla v_h\,dx.$$
The constant is uniform over the mesh family and does not depend on its cell sizes. In particular, the penalty threshold derived from this estimate is mesh-degree and shape dependent; it is not a universal numerical constant.

## Facts & Assumptions

**Given:** Countable Choice; a shape-regular affine simplicial mesh with bound $\sigma$; $k\ge1$; piecewise constant symmetric coefficients satisfying $\lambda I\le A_K\le\Lambda I$; and $v_h\in V_h^{\rm br}$.

[F1] The SIPDG definition gives $q_F(v_h)$ as the arithmetic average of the adjacent coefficient fluxes, dotted with the fixed face normal; the boundary flux is one-sided. ([[def-sipdg-bilinear-form-and-energy-norm]])

[F2] For every cell polynomial and facet, the discrete trace estimate has scaling $\|g\|_{L^2(F)}\le C h_K^{-1/2}\|g\|_{L^2(K)}$; constants depend on degree and shape regularity. ([[thm-polynomial-inverse-and-discrete-trace-estimates]])

[F3] The inverse-trace supplier explicitly assumes Countable Choice. ([[def-countable-choice]])

[A1] Since $F\subset K$ and $h_F=\operatorname{diam}(F)$, $h_F\le h_K$ for every incident cell.

## Proof

1.1 For each cell $K$, $A_K\nabla(v_h|_K)$ is a vector polynomial of degree at most $k-1$. Let $C_{\rm inv}$ be $\sqrt d$ times the trace constant in [F2] with polynomial degree $k-1$, so the estimate applies componentwise. Use $|A_K\xi|\le\Lambda|\xi|$. For an interior face, convexity of the squared norm gives $|\{A\nabla_hv_h\}|^2\le\tfrac12(|A_{K^-}\nabla v_h^-|^2+|A_{K^+}\nabla v_h^+|^2)$; for a boundary face there is one term. By [A1], $h_F\le h_K$, so $h_F\|q_F(v_h)\|_{L^2(F)}^2\le C_{\rm inv}^2\Lambda^2\sum_{K\in\mathcal T_F}\|\nabla v_h\|_{L^2(K)}^2$, where $\mathcal T_F$ is the set of one or two incident cells. [F1, F2, F3, A1, given]

2.1 Each simplex has $d+1$ facets, so summing step 1.1 over all faces counts each cell at most $d+1$ times. Ellipticity gives $\sum_K\|\nabla v_h\|_{L^2(K)}^2\le\lambda^{-1}\sum_K\int_KA_K\nabla v_h\cdot\nabla v_h$. Thus the required estimate holds with $C_{\rm flux}:=(d+1)C_{\rm inv}^2\Lambda^2/\lambda$. [step 1.1, given, algebra] ∎
