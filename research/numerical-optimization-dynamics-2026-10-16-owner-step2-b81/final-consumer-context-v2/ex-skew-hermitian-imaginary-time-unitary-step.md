---
id: ex-skew-hermitian-imaginary-time-unitary-step
kind: example
title: Real-time unitary and imaginary-time finite-matrix propagation
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
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
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

Let $H=\operatorname{diag}(1,2)$ and $y_0=(1,1)^{\mathsf T}$. For imaginary time $\tau\ge0$, solve $u'=-Hu$, $u(0)=y_0$, and compute its norm to exhibit the nonunitary decay. For real time $t\in\mathbb R$, set $A=-iH$ and solve $y'=Ay$, $y(0)=y_0$; show that exact-action exponential Euler and ETD2 preserve the norm at grid points. For a certified implementation of the real-time methods with per-step action bounds $\delta_j$, give the global error bound.

## Facts & Assumptions

**Given:** The finite matrix, initial vector, zero nonlinear term, and methods of [[def-exponential-euler-and-etd2-step-maps]].

[F1] [[lem-skew-hermitian-matrix-exponential-is-unitary]]: if $A^*=-A$, then $(e^{tA})^*e^{tA}=I$ for every real $t$.

[F2] [[def-exponential-euler-and-etd2-step-maps]]: with $g=0$, both exact step maps are $y\mapsto e^{hA}y$.

[F3] [[thm-exponential-euler-etd2-global-error-and-action]]: under its tube and regularity hypotheses, certified step action errors contribute at most $K_+K_-e^{L_pT}\sum_j\delta_j$ in addition to its local-defect term.

[F4] [[def-complex-exponential]]: the scalar complex exponential is defined by its convergent power series.

[F5] [[lem-exponential-series-of-a-bounded-operator]]: the matrix exponential is defined by the same series, and its semigroup property holds.

[F6] [[lem-finite-matrix-semilinear-variation-of-constants]]: when $g=0$, a solution satisfies $y(t)=e^{tA}y(0)$.

[F7] [[cor-exponential-reciprocal-and-positivity]] and [[thm-exponential-is-strictly-increasing]]: $e^x>0$ for real $x$, and $x<y$ implies $e^x<e^y$.

[A1] Here $A_{\rm im}=-H$ and $A_{\rm rt}=-iH$, $g=0$, and the exact initial state is used. The real-time uniform grid has $T>0$, $N\ge1$, and $h=T/N$.

## Verification

1.1 The matrix series [F5] for $A_{\rm im}=-H$ is diagonal term by term and agrees with the real scalar exponential series, so $e^{\tau A_{\rm im}}=\operatorname{diag}(e^{-\tau},e^{-2\tau})$. By [F6], $u(\tau)=(e^{-\tau},e^{-2\tau})^{\mathsf T}$. For $\tau>0$, [F7] gives $0<e^{-\tau}<1$ and $0<e^{-2\tau}<1$, hence $\|u(\tau)\|_2^2=e^{-2\tau}+e^{-4\tau}<2=\|u(0)\|_2^2$; this imaginary-time propagator is not unitary. [A1, F5, F6, F7, algebra]

2.1 The matrix series [F5] for $A_{\rm rt}=-iH$ is diagonal term by term and agrees with [F4], so $e^{tA_{\rm rt}}=\operatorname{diag}(e^{-it},e^{-2it})$. Since $A_{\rm rt}^*=-A_{\rm rt}$, [F1] gives a unitary propagator; [F6] yields $y(t)=(e^{-it},e^{-2it})^{\mathsf T}$ and $\|y(t)\|_2=\sqrt2$. [A1, F1, F4, F5, F6, algebra]

3.1 By [F2], both exact-action methods reduce to multiplication by $e^{hA_{\rm rt}}$. The semigroup identity [F5] gives $(e^{hA_{\rm rt}})^n=e^{nhA_{\rm rt}}$, so every grid value is the exact $y(t_n)$ from step 2.1 and has norm $\sqrt2$. [F2, F5, step 2.1, algebra, induction]

4.1 For a finite certified real-time run, take $D=\mathbb R\times\mathbb C^2$ and $g=0$. The exact path is compact, while the finitely many numerical states and ETD2 predictor stages form a finite set, so their union with the path is a compact tube in $D$; its complement is empty. Here $M=1$, $\omega=0$, $K_+=K_-=1$, $L_g=Q_1=Q_2=0$, and therefore $C_p=L_p=0$ in [F3]. With exact starting data, [F3] gives $\max_n\|\widetilde y_n-y(t_n)\|_2\le\sum_{j=0}^{N-1}\delta_j$. [A1, F1, F3, step 2.1, algebra] ∎
