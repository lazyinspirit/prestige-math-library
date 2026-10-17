---
id: ex-skew-hermitian-imaginary-time-unitary-step
kind: example
title: Imaginary-time finite-matrix propagation is unitary
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-complex-exponential
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - lem-exponential-series-of-a-bounded-operator
  - def-exponential-euler-and-etd2-step-maps
  - alg-certified-exponential-euler-etd2-step
  - lem-skew-hermitian-matrix-exponential-is-unitary
  - thm-exponential-euler-etd2-global-error-and-action
  - lem-finite-matrix-semilinear-variation-of-constants
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§3, highly oscillatory problems with purely imaginary eigenvalues, PDF pp. 30–42, printed pp. 244–256."
    - title: "ISEM Team 2011/12, Operator Semigroups for Numerical Analysis, 15th Internet Seminar on Evolution Equations"
      url: "https://fan.uni-wuppertal.de/fileadmin/mathe/reine_mathematik/funktionalanalysis/farkas/15ISEM-NumerSgrp.pdf"
      locator: "Lecture 14, §14.4, semilinear evolution formulation, PDF pp. 166–168."
---

## Statement

For $H=\operatorname{diag}(1,2)$, $A=-iH$, $g=0$, and $y(0)=(1,1)^{\mathsf T}$, compute the exact solution and show that the exact-action versions of both exponential methods preserve its norm at grid points. If a certified implementation has per-step action bounds $\delta_j$, give the resulting global error bound.

## Facts & Assumptions

**Given:** The finite matrix, initial vector, zero nonlinear term, and methods of [[def-exponential-euler-and-etd2-step-maps]].

[F1] [[lem-skew-hermitian-matrix-exponential-is-unitary]]: if $A^*=-A$, then $(e^{tA})^*e^{tA}=I$ for every real $t$.

[F2] [[def-exponential-euler-and-etd2-step-maps]]: with $g=0$, both exact step maps are $y\mapsto e^{hA}y$.

[F3] [[thm-exponential-euler-etd2-global-error-and-action]]: for exact starting data, certified step action errors $\delta_j$ contribute at most $K_+K_-e^{L_pT}\sum_j\delta_j$ to the global error, in addition to the local-defect term.

[F4] [[def-complex-exponential]]: the scalar complex exponential is defined by its convergent power series.

[F5] [[lem-exponential-series-of-a-bounded-operator]]: the matrix exponential is defined by the same series, and its semigroup property holds.

[F6] [[lem-finite-matrix-semilinear-variation-of-constants]]: when $g=0$, a solution satisfies $y(t)=e^{tA}y(0)$.

[A1] Here $A=\operatorname{diag}(-i,-2i)$ is skew-Hermitian, $g=0$, and the exact initial state is used.

## Verification

1.1 Since $A^*=-A$, [F1] gives a unitary propagator. The matrix series in [F5] is diagonal term by term and agrees with the scalar series [F4], so $e^{tA}=\operatorname{diag}(e^{-it},e^{-2it})$. By [F6], this gives $y(t)=(e^{-it},e^{-2it})^{\mathsf T}$, and unitarity gives $\|y(t)\|_2=\sqrt2$. [A1, F1, F4, F5, F6, algebra]

2.1 By [F2], each exact-action exponential Euler or ETD2 step is multiplication by $e^{hA}$. The semigroup identity gives $(e^{hA})^n=e^{nhA}$, so every grid value is the exact $y(t_n)$ and has norm $\sqrt2$. [F2, step 1.1, algebra, induction]

3.1 Here [F1] gives $K_+=K_-=1$, and $g=0$ gives $L_g=Q_1=Q_2=0$, hence $L_p=C_p=0$ by the definitions in [F3]. Thus its certified-action bound reduces to $\max_n\|\widetilde y_n-y(t_n)\|_2\le\sum_{j=0}^{N-1}\delta_j$. [A1, F1, F3, step 1.1, algebra] ∎
