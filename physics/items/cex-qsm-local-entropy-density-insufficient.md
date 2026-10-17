---
id: cex-qsm-local-entropy-density-insufficient
kind: counterexample
title: Entropy density agreement does not force local state agreement
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsm-local-finite-tensor-state
  - def-qsm-local-finite-matrix-entropy
  - def-qsm-local-additive-spectral-ensembles
  - lem-qsm-local-subsystem-trace-tests
dependency_roles:
  def-qsm-local-finite-tensor-state: mathematical-premise
  def-qsm-local-finite-matrix-entropy: mathematical-premise
  def-qsm-local-additive-spectral-ensembles: mathematical-premise
  lem-qsm-local-subsystem-trace-tests: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §§5.2.2–5.2.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §4.4.5
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
---

## Statement

For a finite Hermitian matrix $D$, write $\|D\|_1$ for its **trace norm**:
the sum of the absolute values of its eigenvalues, counted with multiplicity.

For the canonical densities $\gamma_N$ of
[[def-qsm-local-additive-spectral-ensembles]] with $q=2$, $e_1=e_2=0$ and any
fixed finite $\beta\in\mathbb R$, there are finite density sequences whose
dimensionless entropy per site has the same limit as $\gamma_N$ while their
one-site reduced states remain separated from its one-site marginal by a
fixed trace norm.

## Facts & Assumptions

**Given:** The finite tensor density, reduced-state, and spectral entropy conventions of [[def-qsm-local-finite-tensor-state]], [[lem-qsm-local-subsystem-trace-tests]], and [[def-qsm-local-finite-matrix-entropy]].

[F1] [[def-qsm-local-finite-matrix-entropy]]: a density with positive eigenvalues $\lambda_i$ has entropy $-\sum_i\lambda_i\log\lambda_i$.

[F2] [[lem-qsm-local-subsystem-trace-tests]]: the one-site reduction is the partial trace over all remaining factors.

[F3] [[def-qsm-local-additive-spectral-ensembles]]: for the stated zero levels, $p_1=p_2=1/2$, $Z_N=2^N$, and the canonical density is $\gamma_N=(I/2)^{\otimes N}$.

## Proof

1.1 On $V=\mathbb C^2$, the supplier [F3] identifies the stated canonical one-site density as $\gamma=I/2$ and its $N$-site density as $\gamma_N=(I/2)^{\otimes N}$. For each $N\ge1$, set $\gamma_N=(I/2)^{\otimes N}$ and $\tau_N=|1\rangle\langle1|\otimes(I/2)^{\otimes(N-1)}$. Both are positive of trace one, so are finite tensor densities. Their positive eigenvalues are respectively $2^{-N}$ with multiplicity $2^N$ and $2^{-(N-1)}$ with multiplicity $2^{N-1}$. By [F1], $s_N(\gamma_N)=N\log2$ and $s_N(\tau_N)=(N-1)\log2$; therefore $|s_N(\tau_N)-s_N(\gamma_N)|/N=(\log2)/N\to0$. [given, F1, F3, algebra]

2.1 By [F2], the one-site reductions are $\gamma$ and $|1\rangle\langle1|$. Their difference in the ordered basis is $\operatorname{diag}(1/2,-1/2)$, whose eigenvalues have absolute sum one. Thus $\|\tau_{N,1}-\gamma\|_1=1$ for every $N$. Entropy-density agreement alone therefore does not imply local trace-norm convergence. [F2, step 1.1, algebra] ∎
