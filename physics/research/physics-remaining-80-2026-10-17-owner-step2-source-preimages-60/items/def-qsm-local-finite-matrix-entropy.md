---
id: def-qsm-local-finite-matrix-entropy
kind: definition
title: Dimensionless entropy of a finite density matrix
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-local-finite-tensor-state
  - lem-qsm-local-hermitian-diagonalization
  - def-natural-logarithm
dependency_roles:
  def-qsm-local-finite-tensor-state: mathematical-premise
  lem-qsm-local-hermitian-diagonalization: mathematical-premise
  def-natural-logarithm: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §5.2.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §4.4.5
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: n/a
---

## Definition

For a finite tensor density $\rho$ on $V_N$, list its eigenvalues with
multiplicity as $\lambda_1,\ldots,\lambda_{q^N}$. The finite Hermitian
diagonalization in [[lem-qsm-local-hermitian-diagonalization]] and positivity
of $\rho$ give $\lambda_i\ge0$ and $\sum_i\lambda_i=1$. Define its
**dimensionless spectral entropy**, measured in nats, by
$$s_N(\rho):=-\sum_{i:\lambda_i>0}\lambda_i\log\lambda_i,$$
with $0\log0:=0$. This is independent of the ordering of the eigenvalues,
including when eigenvalues are repeated. It contains no physical entropy
unit; here $\log$ is the natural logarithm of [[def-natural-logarithm]],
and a later physical postulate may assign $S_N=k_Bs_N$.
