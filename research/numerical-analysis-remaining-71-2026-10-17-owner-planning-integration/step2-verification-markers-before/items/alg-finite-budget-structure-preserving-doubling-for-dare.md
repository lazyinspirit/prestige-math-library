---
id: alg-finite-budget-structure-preserving-doubling-for-dare
kind: algorithm
title: "Finite-budget structure-preserving doubling iteration for the DARE"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-standard-continuous-and-discrete-riccati-equations
justified_by: [lem-riccati-finite-budget-wrappers-return-a-status]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§5.2, DARE structure-preserving doubling formulas and subspace iteration"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§2, finite and infinite generalized eigenvalues"
---

## Definition

Input $A\in F^{n\times n}$, Hermitian $G_0\succeq0$ and $H_0\succeq0$, a finite iteration budget $N$, and a finite arithmetic/range controller. Set $A_0=A$. For each $j=0,\ldots,N-1$, form
$$W_j=(I+G_jH_j)^{-1},$$
and update
$$A_{j+1}=A_jW_jA_j,\qquad G_{j+1}=G_j+A_jW_jG_jA_j^*,\qquad H_{j+1}=H_j+A_j^*H_jW_jA_j.$$
These formulas use no inverse of $A_j$. The companion recurrence-invariant proof establishes exact-arithmetic invertibility and positive-semidefinite preservation. The finite-arithmetic routine separately reports solve, range, and symmetry status.

In finite arithmetic, attempt each solve by a finite factorization routine. Return range-failure or inverse-inconclusive if the computed solve lacks its declared certificate. Preserve the raw matrices, report $\|G_j-G_j^*\|_F$ and $\|H_j-H_j^*\|_F$, and report the actual DARE residual for $H_j$ whenever its inverse is certified. Symmetrization may be used only to form a candidate and must be followed by fresh residual and positivity checks. No exact positive-semidefinite or structure-preserving backward-error claim is made from a rounded recurrence alone.

