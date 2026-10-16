---
id: thm-qa-rational-reconstruction-bit-cost
kind: theorem
title: Bit cost of phase-sample rational reconstruction
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-rational-reconstruction-from-phase-sample
  - def-qa-classical-bit-cost
  - def-regular-continued-fraction
  - def-convergents-of-regular-continued-fraction
  - thm-division-algorithm-in-z
justified_by: []
axiom_use: "None; Euclid and schoolbook integer arithmetic are executed by a fixed multitape machine."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; classical continued-fraction postprocessing"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; rational reconstruction steps"
---

## Statement

Let $N\ge1$, $m\ge0$, $Q=2^m>4N^2$, and $y\in\{0,\ldots,Q-1\}$ be integers, and set $L=\lceil\log_2(Q+1)\rceil$. Under the multitape bit-transition model of [[def-qa-classical-bit-cost]], [[alg-qa-rational-reconstruction-from-phase-sample]] uses $O(L)$ Euclidean divisions and $O(L^3)$ deterministic bit transitions. No real-number arithmetic is used.

## Facts & Assumptions

**Given:** Integers $N\ge1$, $m\ge0$, $Q=2^m>4N^2$, $0\le y<Q$, the reconstruction routine, and the bit-cost convention.

[F1] Rational continued fractions are computed by the Euclidean quotient algorithm; integer division has quotient and remainder $u=av+r$ with $0\le r<v$, and convergent denominators obey $q_j=a_jq_{j-1}+q_{j-2}$ ([[alg-qa-rational-reconstruction-from-phase-sample]], [[def-regular-continued-fraction]], [[def-convergents-of-regular-continued-fraction]], [[thm-division-algorithm-in-z]]).

[F2] Bit cost counts transitions of a fixed finite-alphabet multitape machine and charges comparison, arithmetic, reading, and output work ([[def-qa-classical-bit-cost]]).

## Proof

1.1 Let $q_j$ be the convergent denominators, with $q_0=1$ and $q_1\ge1$. The recurrence in [F1] gives $q_{j+2}\ge q_{j+1}+q_j\ge2q_j$ whenever both indices exist. Since the terminal denominator is at most $Q$, every two quotient steps at least double a positive denominator, so the number of Euclidean divisions is at most $2L+O(1)=O(L)$. [F1, given, algebra]

2.1 The reduced denominator of $y/Q$ is at most $Q$, so the recurrence in [F1] makes each convergent denominator at most its terminal denominator. Since $0\le y/Q<1$, the normalized expansion starts with $a_0=0$; its initial convergents satisfy $0\le p_0\le q_0$ and $0\le p_1\le q_1$, and the recurrence with positive later digits preserves $0\le p_j\le q_j$. Thus all convergent numerators and denominators have $O(L)$ bits. By the division algorithm in [F1], binary long division of two such integers can be performed by at most $O(L)$ compare/subtract scans of at most $O(L)$ bits, hence $O(L^2)$ multitape transitions under [F2]. [F1, F2, step 1.1, algebra]

3.1 Updating a convergent numerator and denominator by [F1] uses a constant number of products and sums on $O(L)$-bit integers, hence $O(L^2)$ transitions per update. Each convergent candidate also requires a constant number of products $yq_j$ and $p_jQ$, an absolute difference, a doubling, and a comparison with $q_j$. Schoolbook multiplication and these scans each cost $O(L^2)$ transitions. There are $O(L)$ candidates by step 1.1, so total comparison work is $O(L^3)$; writing the selected numerator and denominator costs only $O(L)$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 The routine normalizes the rational by exact Euclidean divisions and applies only the integer test from [F1]; all work is covered by the above bounds. Hence its deterministic multitape bit cost is $O(L^3)$ and it performs no floating-point comparison. [F1, F2, step 3.1] ∎
