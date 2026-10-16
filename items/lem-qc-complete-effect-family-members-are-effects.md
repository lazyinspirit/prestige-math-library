---
id: lem-qc-complete-effect-family-members-are-effects
kind: lemma
title: A complete positive family consists of effects
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: [def-qc-finite-positive-effect-family, def-non-negative-and-positive-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapters 1–3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §15.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For a nonzero finite-dimensional complex-inner-product space $H$, if $E_1,\ldots,E_n$ is a finite complete positive family as defined in [[def-qc-finite-positive-effect-family]], then each $E_a$ is an effect: $E_a$ and $I_H-E_a$ are non-negative.

## Facts & Assumptions

**Given:** A nonempty finite family $E_1,\ldots,E_n$ of non-negative endomorphisms on $H$ with $\sum_{a=1}^n E_a=I_H$.

[F1] [[def-qc-finite-positive-effect-family]]: a finite complete positive family has $E_b$ non-negative for every $b$ and its finite sum is $I_H$; an effect is a non-negative $E$ whose complement $I_H-E$ is non-negative.

[F2] [[def-non-negative-and-positive-operator]]: an operator is non-negative when it is self-adjoint and its quadratic form is nonnegative on every vector.

## Proof

1.1 Fix $a\in\{1,\ldots,n\}$. The family identity gives $I_H-E_a=\sum_{b\ne a}E_b$. For every $x\in H$, each $\langle E_bx,x\rangle$ is a nonnegative real by [F2]; their finite sum is therefore nonnegative, including the empty sum $0$ when $n=1$. The sum is self-adjoint because each $E_b$ is self-adjoint and the sum is finite. Thus $I_H-E_a$ is non-negative. [given, F1, F2, algebra]

2.1 Since $E_a$ is non-negative by [F1] and its complement is non-negative by step 1.1, it is an effect by the definition in [F1]. The index $a$ was arbitrary. [F1, step 1.1] ∎