---
id: cex-qa-12-known-probability-is-needed-for-the-fixed-rounding-rule
kind: counterexample
title: "A fixed Grover iteration count can fail when a is unknown"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - thm-qa-12-amplification-rotation-correctness
  - thm-quarter-turn-values-and-shift-formulas
  - cor-pi-is-the-first-positive-sine-zero
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-double-angle-and-power-reduction-identities
  - cor-trigonometric-parity-and-pythagorean-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement refuted

For every pair of initial success weights $a_1,a_2\in(0,1)$, an iteration count maximizing success for $a_1$ over $0\le k\le\lceil1/\sqrt{a_1}\rceil$ gives success probability at least $1/2$ for $a_2$ when reused unchanged.

## Facts & Assumptions

**Given:** Two prepared success weights and a common fixed iteration count.

[F1] [[thm-qa-12-amplification-rotation-correctness]]: after $k$ iterations, success is $\sin^2((2k+1)\theta)$ when $\sin^2\theta=a$.

[F2] [[thm-cofunction-supplementary-and-reflection-identities]] gives $\sin(\pi/6)=\cos(\pi/3)$ and $\cos(2\pi/3)=-\cos(\pi/3)$; [[thm-double-angle-and-power-reduction-identities]] gives $\cos(2x)=2\cos^2x-1$; [[cor-pi-is-the-first-positive-sine-zero]] gives $\sin x>0$ for $0<x<\pi$; [[cor-trigonometric-parity-and-pythagorean-identity]] gives $\sin^2x+\cos^2x=1$; [[thm-quarter-turn-values-and-shift-formulas]] gives $\sin(\pi/2)=1$ and $\sin\pi=0$.

## Counterexample

1.1 Put $c=\cos(\pi/3)=\sin(\pi/6)$ by [F2]. Since $0<\pi/6<\pi$, [F2] gives $c>0$. Also [F2] gives $\cos(2\pi/3)=-c$, while [F2] gives $\cos(2\pi/3)=2c^2-1$. Hence $(2c-1)(c+1)=0$, and positivity gives $c=1/2$. By [F2], $\sin^2(\pi/3)=1-\cos^2(\pi/3)=3/4$. For $a_1=1/4$, take $\theta_1=\pi/6$; the allowed range is $0\le k\le\lceil1/\sqrt{a_1}\rceil=2$. The probabilities for $k=0,1,2$ are $1/4,1,1/4$, respectively, so $k=1$ is the unique maximizer. [given, F1, F2, algebra]

2.1 For $a_2=3/4$, take $\theta_2=\pi/3$. Reusing $k=1$ gives $\sin^2(3\theta_2)=\sin^2\pi=0<1/2$, while direct sampling at $k=0$ succeeds with probability $3/4$. Thus the first weight's maximizing count violates the claimed lower bound at the second weight. [given, F1, F2, step 1.1, algebra] ∎
