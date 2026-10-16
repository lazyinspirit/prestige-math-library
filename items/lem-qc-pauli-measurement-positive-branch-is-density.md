---
id: lem-qc-pauli-measurement-positive-branch-is-density
kind: lemma
title: Positive-probability Pauli branches are density operators
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-pauli-measurement-branch-semantics
  - lem-qc-pauli-measurement-projectors
  - def-qc-density-operator
  - prop-trace-is-linear
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
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14 §14.1
      url: https://jhwatrous.github.io/UQIC.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.2"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space, let
$\rho$ be a density operator on $H$, and let $M$ be a Hermitian Pauli
observable on $H$ with $M^2=I_H$. For $b\in\{0,1\}$ put
$P_b=(I_H+(-1)^bM)/2$ and $p_b=\operatorname{Tr}(\rho P_b)$. If $p_b>0$,
then the normalized branch

$$\rho_b:=\frac{P_b\rho P_b}{p_b}$$

is a density operator.

## Facts & Assumptions

**Given:** The data in the Statement.

[F1] The setup defines $P_b=(I_H+(-1)^bM)/2$,
$p_b=\operatorname{Tr}(\rho P_b)$, and
$\rho_b=P_b\rho P_b/p_b$ when $p_b>0$.

[F2] [[lem-qc-pauli-measurement-projectors]]: $Q_b=P_b\rho P_b$ is
nonnegative and $\operatorname{Tr}(Q_b)=p_b$.

[F3] [[prop-trace-is-linear]]: trace respects multiplication by a scalar.

[F4] [[def-qc-density-operator]]: a density operator is a nonnegative
endomorphism of trace one on a nonzero finite-dimensional complex-inner-product
space.

## Proof

**Given:** The data in the Statement.

1.1 Set $Q_b=P_b\rho P_b$. By [F2], $Q_b$ is nonnegative and has trace $p_b$. Since $p_b>0$, the scalar $1/p_b$ is positive. Hence, for every $v$, $\langle (Q_b/p_b)v,v\rangle=(1/p_b)\langle Q_bv,v\rangle\ge0$. [F2, given, algebra]

2.1 By [F3] and [F2], $\operatorname{Tr}(Q_b/p_b)=p_b^{-1}\operatorname{Tr}(Q_b)=1$. Thus $Q_b/p_b$ is a density operator by [F4]. [F2, F3, F4, step 1.1, algebra]

3.1 The conditional state in [F1] is exactly $Q_b/p_b$, so it is the density operator established in step 2.1. [F1, step 2.1] ∎

## Sources

Watrous Lesson 14 §14.1, printed pp. 405–407 (PDF pp. 411–413), defines the
projective conditional state; de Wolf §20.2, PDF pp. 186–188, gives the Pauli branch update. The
positivity and trace-one check is proved locally.
