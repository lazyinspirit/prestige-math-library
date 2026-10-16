---
id: def-qa-25-hamiltonian-simulation-polynomial
kind: definition
title: Hamiltonian-simulation polynomial target
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-25-qubitization-access-model
  - def-qa-23-qsp-admissible-polynomial-pair
  - def-qa-24-singular-value-transform
  - def-qa-19-finite-matrix-dynamics
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.4.1"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, §5.1"
      url: "https://arxiv.org/pdf/1806.01838"
---

## Definition

For a finite Hermitian $H$ with exact block-encoding normalization $\alpha>0$, $\|H\|_{\rm op}\le\alpha$, and real time $t$, put $\tau=\alpha t$. On $x\in[-1,1]$ the scalar target is $f_\tau(x)=\exp(-i\tau x)$; if $H\psi_\lambda=\lambda\psi_\lambda$, then $f_\tau(\lambda/\alpha)=\exp(-it\lambda)$, the eigenvalue of the finite matrix evolution [[def-qa-19-finite-matrix-dynamics]].

For $k\ge0$, define the Chebyshev polynomials by $T_0(x)=1$, $T_1(x)=x$, $T_{k+1}(x)=2xT_k(x)-T_{k-1}(x)$. Define the Bessel coefficients used here by the series
$$J_k(\tau)=\sum_{j=0}^{\infty}\frac{(-1)^j(\tau/2)^{2j+k}}{j!(j+k)!}.$$
For fixed $k,\tau$, the ratio of consecutive absolute summands is $\tau^2/[4(j+1)(j+k+1)]\to0$, so this series converges absolutely and defines $J_k(\tau)$ before any estimate is used. The exponential uses the series convention of [[def-complex-exponential]], whose absolute convergence is supplied by [[lem-complex-exponential-series-converges-everywhere]]. This definition specifies the target and coefficient series; it does not assert a Jacobi–Anger expansion or a truncation bound. A real QSP or QSVT theorem alone does not implement this full complex, non-parity target; the finite even/odd combination, complementary-polynomial certificates, normalization, and controlled relative phase are separate operations in the binding simulator.
