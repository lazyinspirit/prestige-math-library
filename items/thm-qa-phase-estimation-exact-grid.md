---
id: thm-qa-phase-estimation-exact-grid
kind: theorem
title: Exact phase recovery on the QPE grid
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - lem-qa-phase-estimation-outcome-kernel
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
justified_by: []
axiom_use: "None; the proof uses finite cyclic-character orthogonality."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $m\ge1$, $Q=2^m$, and $\theta\in[0,1)$. If $Q\theta=t\in\mathbb Z$, then $t\in\{0,\ldots,Q-1\}$, phase estimation returns $y=t$ with probability $1$, and every other output has probability $0$.

## Facts & Assumptions

**Given:** The eigenphase input, $m\ge1$, $Q=2^m$, and $Q\theta=t\in\mathbb Z$.

[F1] The outcome probability is $P_\theta(y)=Q^{-2}|\sum_{j<Q}\exp(2\pi ij(\theta-y/Q))|^2$ ([[lem-qa-phase-estimation-outcome-kernel]]).

[F2] For $Q\ge1$ and integers $k,\ell$, $\sum_{j<Q}\exp(2\pi i(k-\ell)j/Q)$ is $Q$ when $k\equiv\ell\pmod Q$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

## Proof

1.1 Since $0\le\theta<1$, the integer $t=Q\theta$ satisfies $0\le t<Q$. At $y=t$, every summand in [F1] is $1$, so $P_\theta(t)=Q^{-2}Q^2=1$. [given, F1, algebra]

2.1 If $y\in\{0,\ldots,Q-1\}$ and $y\ne t$, then $t-y$ is not divisible by $Q$, since $|t-y|<Q$ and $t-y\ne0$. Substituting $\theta=t/Q$ in [F1], the sum is the nontrivial cyclic-character sum in [F2], hence zero; therefore $P_\theta(y)=0$. [given, F1, F2, step 1.1, algebra] ∎
