---
id: cex-qsm-dt-transpose-not-cp
kind: counterexample
title: Transpose positivity fails ancillary positivity
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsm-dt-channel-definition
  - lem-qsm-matrix-state-calculus
  - thm-qsm-dt-choi-kraus
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §2.2.2, Theorem 2.22
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 3, §3.2, Example 3.11 and Theorem 3.18
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Statement refuted

Every complex-linear positive trace-preserving map between finite matrix algebras is completely positive.

## Facts & Assumptions

**Given:** The standard ordered basis of $\mathbb C^2$, finite matrix transpose $T(X)=X^{\mathsf T}$, and the finite channel definitions.

[F1] [[def-qsm-dt-channel-definition]]: a positive map sends positive semidefinite inputs to positive semidefinite outputs; complete positivity additionally requires positivity of $\operatorname{id}_r\otimes\Phi$ for every finite $r$.

[F2] [[lem-qsm-matrix-state-calculus]]: every positive semidefinite finite matrix has a positive square root, finite Hermitian matrices have spectral decompositions, and the finite trace is cyclic.

[F3] [[thm-qsm-dt-choi-kraus]]: with the unnormalized Choi matrix $J(\Phi)=\sum_{i,j}E_{ij}\otimes\Phi(E_{ij})$, a finite map is completely positive if and only if $J(\Phi)\geq0$.

## Counterexample


1.1 The transpose is complex-linear and preserves trace because it fixes the diagonal entries. For any $X\geq0$, [F2] gives $X=YY^*$ for some matrix $Y$; hence $T(X)=X^{\mathsf T}=\overline Y Y^{\mathsf T}=\overline Y(\overline Y)^*\geq0$. Thus $T$ is positive and trace-preserving. [given, F1, F2, algebra]

2.1 Its Choi matrix is $J(T)=\sum_{i,j=0}^1E_{ij}\otimes E_{ji}$, the swap operator $F(|a\rangle\otimes|b\rangle)=|b\rangle\otimes|a\rangle$. For $\eta=(|0\rangle\otimes|1\rangle-|1\rangle\otimes|0\rangle)/\sqrt2$, one has $F\eta=-\eta$; therefore $J(T)\not\geq0$. By [F3], $T$ is not completely positive. [given, F3, step 1.1, algebra] ∎
