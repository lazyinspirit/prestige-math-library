---
id: lem-qc-anticommuting-stabilizer-measurement-is-fair
kind: lemma
title: An anticommuting stabilizer measurement is fair
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-pauli-measurement-branch-semantics
  - def-qc-pure-state-and-ray
  - def-qc-stabilizer-subgroup
  - def-qc-stabilizer-state
  - thm-qc-hermitian-pauli-phase-criterion
  - lem-qc-pauli-measurement-projectors
  - lem-qc-pure-projective-branch-norm
  - thm-qc-ray-projector-well-defined-and-bijective
justified_by: []
dependency_level: 15
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
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §III
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Statement

Let $\rho=|\psi\rangle\langle\psi|$ be a pure stabilizer state density operator,
and let $M$ be a Hermitian Pauli observable that anticommutes with one of its
stabilizer generators. Then
$\operatorname{Tr}(P_0\rho)=\operatorname{Tr}(P_1\rho)=1/2$.

## Facts & Assumptions

**Given:** A rank-$n$ stabilizer subgroup $S$ fixing the ray of $\psi$, a
normalized representative $\psi$, and a Hermitian Pauli $M$ with
$gM=-Mg$ for some $g\in S$.

[F1] [[def-qc-stabilizer-state]]: every $g\in S$ fixes $\psi$.

[F2] [[thm-qc-hermitian-pauli-phase-criterion]]: a Hermitian Pauli is
self-adjoint and squares to $I$.

[F3] [[def-qc-pauli-measurement-branch-semantics]]: $P_b=(I+(-1)^bM)/2$,
and its probability on a pure state is
$p_b=\operatorname{Tr}(|\psi\rangle\langle\psi|P_b)$.

[F4] [[lem-qc-pure-projective-branch-norm]]: for a unit vector $\psi$ and
orthogonal projection $P$, $\operatorname{Tr}(|\psi\rangle\langle\psi|P)
=\|P\psi\|^2$.

[F5] [[thm-qc-ray-projector-well-defined-and-bijective]]: the projector of a
unit representative of a pure-state ray is a positive trace-one density
operator.

[F6] [[lem-qc-pauli-measurement-projectors]]: $P_0,P_1$ are orthogonal
complementary projections.

## Proof

**Given:** The data in the Statement.

1.1 Since $g=g^\dagger$ and $g^2=I$ by [F2], it is unitary. From $g\psi=\psi$ and $gMg=-M$, we get $gP_bg=P_{1-b}$ and $gP_b\psi=P_{1-b}\psi$. Hence $\|P_b\psi\|=\|P_{1-b}\psi\|$. [given, F1, F2, F3, algebra]

2.1 By [F5], the unit ray projector is a density operator, so its branch law [F3] and the norm identity [F4] give $p_b=\|P_b\psi\|^2=\|P_{1-b}\psi\|^2=p_{1-b}$. The complementary orthogonal projections in [F6] satisfy $\|P_0\psi\|^2+\|P_1\psi\|^2=\|\psi\|^2=1$, so equal probabilities must both be $1/2$. [F3, F4, F5, F6, step 1.1, algebra]

3.1 This proves that each outcome bit has probability $1/2$. [step 2.1] ∎

## Sources

De Wolf §20.3, PDF p. 188, proves equality of the two outcome probabilities
by conjugating with an anticommuting stabilizer. Aaronson–Gottesman §III,
PDF pp. 4–5, gives the corresponding tableau measurement case.
