---
id: pthm-qsm-static-quantum-response
kind: physics-theorem
title: Static finite quantum response and covariance
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: Nonzero finite-dimensional static canonical model with a bounded Hermitian control observable; noncommuting response uses Kubo–Mori covariance, while ordinary variance is asserted only in the commuting case.
deps:
  - post-qsm-thermal-gibbs-preparation
  - lem-qsm-matrix-exponential-response
dependency_roles:
  post-qsm-thermal-gibbs-preparation: physical-assumption
  lem-qsm-matrix-exponential-response: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Zhang Jiang, Quantum Fisher information for states in exponential form, arXiv:1310.2687v3, §II, equations (2.1)–(2.14)
      url: https://arxiv.org/pdf/1310.2687
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Adopt the finite canonical state rule of [[post-qsm-thermal-gibbs-preparation]]. Let $H(h)=H_0-hB$ on a finite-dimensional complex Hilbert space of dimension $d\geq1$, where $H_0,B$ are Hermitian, $h$ is a real static control, $hB$ has units J, and $\beta>0$ is fixed in J$^{-1}$. Put $\rho_h=e^{-\beta H(h)}/Z(h)$. With $\delta B=B-\operatorname{Tr}(\rho_hB)I$, define
$
\operatorname{Cov}_{KM,\rho_h}(B,B)=\int_0^1\operatorname{Tr}(\rho_h^{1-u}\delta B\rho_h^u\delta B)\,du.
$
Then the static susceptibility is
$
\frac{d}{dh}\operatorname{Tr}(\rho_hB)=\beta\operatorname{Cov}_{KM,\rho_h}(B,B)\geq0.
$
Here $\operatorname{Var}_{\rho_h}(B)=\operatorname{Tr}(\rho_h(B-\operatorname{Tr}(\rho_hB)I)^2)$ is the ordinary variance. The Kubo–Mori covariance equals this variance exactly when $[H(h),B]=0$; for noncommuting matrices the Kubo–Mori expression is the applicable covariance. This is a static model deduction, not a dynamical response or observation.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space of dimension $d\geq1$, Hermitian $H_0,B$, real differentiable control $h$, fixed $\beta>0$, $hB$ in energy units, and canonical preparation at each control value.

[F1] [[post-qsm-thermal-gibbs-preparation]]: at each $h$, the adopted canonical state is $e^{-\beta H(h)}/Z(h)$.

[F2] [[lem-qsm-matrix-exponential-response]]: for finite Hermitian matrix paths, the response Hessian is the Kubo–Mori covariance; its diagonal quadratic form is nonnegative and bounded above by ordinary variance, with equality exactly when the observable commutes with the Gibbs state.

## Proof

1.1 The parameter matrix is $M(h)=-\beta H(h)=-\beta H_0+\beta hB$, so $M'(h)=\beta B$. The finite Duhamel/quotient calculation in [F2] therefore gives $\frac{d}{dh}\operatorname{Tr}(\rho_hB)=\beta\operatorname{Cov}_{KM,\rho_h}(B,B)$, with $\rho_h$ given by [F1]. [given, F1, F2, algebra]

2.1 The eigenbasis expression in [F2] writes the Kubo–Mori quadratic form as a sum of $|(\delta B)_{ij}|^2L(p_i,p_j)$, where $L(p_i,p_j)>0$. Every summand is nonnegative, so the susceptibility is nonnegative. Since $E\mapsto e^{-\beta E}/Z(h)$ is injective on the real eigenvalues of $H(h)$, those operators have the same eigenspaces and $[H(h),B]=0$ iff $[\rho_h,B]=0$. The equality characterization in [F2] therefore gives the ordinary variance formula exactly in the commuting case and strict inequality otherwise. [given, step 1.1, F1, F2, algebra] ∎
