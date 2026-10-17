---
id: alg-qsm-finite-gibbs-state-preparation
kind: algorithm
title: Sparse-oracle finite Gibbs purification procedure
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
- def-qsm-finite-gibbs-purification
- alg-qa-30-sdp-gibbs-purification
- thm-qa-30-sdp-gibbs-state-error-cost
dependency_roles:
  def-qsm-finite-gibbs-purification: mathematical-premise
  alg-qa-30-sdp-gibbs-purification: mathematical-premise
  thm-qa-30-sdp-gibbs-state-error-cost: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Joran van Apeldoorn, András Gilyén, Sander Gribling, and Ronald de Wolf, Quantum SDP-Solvers, arXiv:1705.01843v4
    url: https://arxiv.org/pdf/1705.01843v4
  - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, arXiv:1806.01838
    url: https://arxiv.org/pdf/1806.01838
---

## Definition

**Input:** a nonzero finite-dimensional Hilbert space of dimension $d$, a Hermitian Hamiltonian matrix $K$, an inverse-energy parameter $\beta>0$ such that $H=\beta K$ is dimensionless, the ordered reference preparation $|\Phi_d\rangle$ from [[def-qsm-finite-gibbs-purification]], an output vector-error tolerance $\varepsilon_{\rm out}>0$, and a rational failure target $0<\rho<1$. The input contract must additionally supply every sparse-oracle, block-encoding, controlled-evolution, inverse, norm-bound, energy-shift, coefficient-generation, precision, reference-preparation, and cost object required by the published procedure [[alg-qa-30-sdp-gibbs-purification]]. No matrix exponential, trace, exact spectral minimum, or gate is free input.

**Procedure:** invoke the normalized-output branch of [[alg-qa-30-sdp-gibbs-purification]] on $K$ with coefficient $\eta=\beta$, the stated error, failure target, and complete access/cost certificates. Retain its frozen energy shift and all declared finite subroutines. Measure only its specified good/bad flag. On a good branch return the normalized system-reference vector; on a cap failure return the explicit output FAIL. If the certified shift event fails, do not assert the Gibbs approximation guarantee; any overall failure probability includes the supplied shift-confidence budget.

**Output:** either FAIL, or a normalized vector-register state in the successful branch, with the error and success guarantees supplied by [[thm-qa-30-sdp-gibbs-state-error-cost]]. An identity energy shift changes neither the normalized Gibbs density nor its canonical purification, since $e^{-(\beta K+cI)}=e^{-c}e^{-\beta K}$ and the trace is multiplied by the same scalar. This is a mathematical state-preparation procedure under the stated finite access model; it is not a physical bath or thermalization process.
