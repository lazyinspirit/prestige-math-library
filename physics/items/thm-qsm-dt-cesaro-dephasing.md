---
id: thm-qsm-dt-cesaro-dephasing
kind: theorem
title: Finite Cesaro dephasing with degenerate energy blocks
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 3
deps:
  - thm-qsm-dt-finite-unitary
  - lem-qsm-dt-finite-matrix-trace-ideal
dependency_roles:
  thm-qsm-dt-finite-unitary: mathematical-premise
  lem-qsm-dt-finite-matrix-trace-ideal: mathematical-premise
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
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §§2–3
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §1.1"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
---

## Statement

Under the finite-dimensional unitary dynamics of [[thm-qsm-dt-finite-unitary]], let $P_E$ be the orthogonal spectral projection of $H$ for its distinct energy $E$. For every density matrix $\rho$,

$$\frac1T\int_0^T U(t)\rho U(t)^*\,dt\longrightarrow\sum_E P_E\rho P_E$$

in trace norm as $T\to\infty$. The diagonal energy blocks, including all blocks within degenerate eigenspaces, remain. This is Cesaro convergence of the averaged state; pointwise convergence of $U(t)\rho U(t)^*$ is not asserted.

## Facts & Assumptions

**Given:** A finite-dimensional $\mathcal H$, a Hermitian $H$, $\hbar>0$, and a positive matrix $\rho$ with trace one.

[F1] [[thm-qsm-dt-finite-unitary]]: $U(t)=e^{-itH/\hbar}$ is unitary and has the finite-dimensional spectral dynamics of the Statement.

[F2] [[lem-qsm-dt-finite-matrix-trace-ideal]]: the finite trace norm is a norm on the matrix space, so convergence of finite sums in that norm is well defined.

## Proof


**Given:** The finite-dimensional unitary evolution and density matrix above.

1.1 Write $H=\sum_E EP_E$ by finite Hermitian spectral calculus. Then $U(t)\rho U(t)^*=\sum_{E,F}e^{-i(E-F)t/\hbar}P_E\rho P_F$. There are finitely many ordered pairs $(E,F)$, so the time average is the corresponding finite sum of averaged coefficients times fixed matrices. [given, F1, algebra]


2.1 If $E=F$, the averaged scalar coefficient is $1$. If $E\ne F$, then $\left|T^{-1}\int_0^T e^{-i(E-F)t/\hbar}\,dt\right|=\left|\frac{\hbar(e^{-i(E-F)T/\hbar}-1)}{-i(E-F)T}\right|\le\frac{2\hbar}{T|E-F|}\to0$. Since the finite trace norm is a norm by [F2], the finite matrix sum converges in that norm to $\sum_E P_E\rho P_E$. Equal-energy blocks are not removed, so degeneracies are retained. [step 1.1, F2, algebra] ∎
