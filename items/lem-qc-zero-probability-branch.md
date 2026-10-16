---
id: lem-qc-zero-probability-branch
kind: lemma
title: Zero-probability Pauli measurement branch
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-pauli-measurement-branch-semantics
  - def-qc-density-operator
  - def-trace-of-a-square-matrix
  - def-trace-of-an-endomorphism
  - lem-qc-pauli-measurement-projectors
  - thm-trace-of-ab-equals-trace-of-ba
  - thm-non-negative-operator-characterisations
justified_by: []
dependency_level: 10
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14
      url: https://jhwatrous.github.io/UQIC.pdf
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space, let
$\rho$ be a density operator on $H$, and let $M$ be a Hermitian Pauli
observable on $H$ with $M^2=I_H$. For $b\in\{0,1\}$ put
$P_b=(I_H+(-1)^bM)/2$ and $p_b=\operatorname{Tr}(\rho P_b)$. If $p_b=0$,
then $P_b\rho P_b=0$. The outcome has probability zero and, under the
conditional-state convention, has no normalized conditional state.

## Facts & Assumptions

**Given:** The $H,\rho,M,b,P_b,p_b$ data of the Statement, with $p_b=0$.

[F1] The setup defines $P_b=(I_H+(-1)^bM)/2$ and
$p_b=\operatorname{Tr}(\rho P_b)$.

[F2] [[lem-qc-pauli-measurement-projectors]]: $P_b^*=P_b$ and $P_b^2=P_b$.

[A1] [[def-qc-density-operator]]: $\rho$ is a nonnegative endomorphism on a
nonzero finite-dimensional complex inner-product space.

[F3] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible
finite-dimensional endomorphisms.

[F4] [[thm-non-negative-operator-characterisations]]: a nonnegative
endomorphism has an orthonormal eigenbasis with nonnegative real eigenvalues.

[F5] [[def-trace-of-an-endomorphism]]: trace is basis-independent and equals
the matrix trace in any ordered basis.

## Proof

**Given:** The data in the Statement.

1.1 Set $Q_b=P_b\rho P_b$. For every $v$, self-adjointness of $P_b$ in [F2] gives $\langle Q_bv,v\rangle=\langle\rho P_bv,P_bv\rangle\ge0$ by [A1]. Thus $Q_b$ is nonnegative. [given, F2, A1, algebra]

1.2 By [F1], [F2], and cyclicity [F3], $\operatorname{Tr}(Q_b)=\operatorname{Tr}(P_b\rho P_b) =\operatorname{Tr}(\rho P_b^2)=p_b=0$. By [F4], choose an orthonormal eigenbasis of $Q_b$ whose eigenvalues are nonnegative; [F5] expresses its trace as their finite sum. A finite sum of nonnegative reals is zero only when each term is zero, so $Q_b=0$. [given, F1, F2, F3, F4, F5, algebra]

2.1 The branch output is therefore zero. Normalization would require dividing it by $p_b=0$, which is undefined; the conditional-state convention assigns no state to this zero-probability outcome. [given, step 1.2, algebra] ∎

## Sources

De Wolf §20.3, PDF pp. 187–188, separates deterministic outcomes from random
outcomes; Watrous Lesson 14 §14.1, printed pp. 405–407 (PDF pp. 411–413),
specifies the two projective branches. The zero-trace implication is proved
locally using the finite spectral theorem.
