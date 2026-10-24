---
id: thm-qa-phase-estimation-success-and-tail
kind: theorem
title: Phase-estimation nearest-grid and tail bounds
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - lem-qa-phase-estimation-outcome-kernel
  - thm-qa-phase-estimation-exact-grid
  - lem-qa-phase-estimation-nearest-grid-bound
  - lem-qa-phase-estimation-tail-bound
  - def-qa-circular-phase-distance
justified_by: []
axiom_use: "None; this theorem combines finite probability bounds."
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
    - title: "Lin Lin, Lecture Notes on Quantum Algorithms for Scientific Computation, §§16.1–16.3"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
---

## Statement

Let $m\ge1$, $Q=2^m$, and $\theta\in[0,1)$. Every nearest grid label $y$ has $P_\theta(y)\ge4/\pi^2$. For any $\eta\in\mathbb R$ with $K=\lfloor Q\eta\rfloor\ge2$,
$$\Pr_{y\sim P_\theta}\!\left[d_{\mathbb T}(\theta-y/Q)\ge\eta\right]\le\frac1{2(K-1)}.$$
If $Q\theta$ is an integer $t$, then $P_\theta(t)=1$ and all other labels have probability $0$.

## Facts & Assumptions

**Given:** $m\ge1$, $Q=2^m$, $\theta\in[0,1)$, and, for the tail conclusion, $\eta\in\mathbb R$ with $K=\lfloor Q\eta\rfloor\ge2$.

[F1] A nearest label exists and every nearest label has probability at least $4/\pi^2$ ([[lem-qa-phase-estimation-nearest-grid-bound]]).

[F2] The circular-distance tail for $K\ge2$ is at most $1/(2(K-1))$ ([[lem-qa-phase-estimation-tail-bound]], [[def-qa-circular-phase-distance]]).

[F3] Exact-grid phases are returned with probability one ([[thm-qa-phase-estimation-exact-grid]]).

## Proof

1.1 Apply [F1] to the given $\theta$; it supplies a nearest label $y$ and the lower bound $P_\theta(y)\ge4/\pi^2$. [given, F1]

1.2 If $K=\lfloor Q\eta\rfloor\ge2$, all hypotheses of [F2] hold, so the stated circular-distance tail bound follows. [given, F2]

2.1 If $Q\theta=t\in\mathbb Z$, [F3] gives $P_\theta(t)=1$ and zero probability at every other label. These conclusions prove the theorem. [given, F3, step 1.1, step 1.2] ∎
