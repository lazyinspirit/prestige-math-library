---
id: thm-qa-modular-order-finding-cost
kind: theorem
title: Separate order-finding query, gate, and bit costs
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-modular-order-finding
  - thm-qa-phase-estimation-access-cost
  - thm-qa-modular-arithmetic-cost
  - def-qc-circuit-cost-model
  - def-qa-classical-bit-cost
  - thm-qa-rational-reconstruction-bit-cost
justified_by: []
axiom_use: "None; the bounds count the declared finite circuit and multitape operations."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; order-finding cost discussion"
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§3, PDF pp. 8–11; modular-exponentiation cost; §5, PDF pp. 16–19; order-finding procedure"
---

## Statement

Let integer $N\ge3$, $n=\lceil\log_2N\rceil$, $b\in\mathbb Z_{\ge1}$, and $\delta=2^{-b}$. With the explicit multiplier of [[thm-qa-modular-arithmetic-cost]] and the ideal continuous exact-arbitrary-angle QFT cost model, the algorithm uses $O(n^2b)$ controlled modular-multiplier circuits, $O(n^4b)$ elementary gates, and $O(n^4b)$ schoolbook classical bit transitions. Equivalently these are $O(n^2(1+\ln(1/\delta)))$, $O(n^4(1+\ln(1/\delta)))$, and $O(n^4(1+\ln(1/\delta)))$. With only controlled $U_x$ access, the query count is exactly $t(Q-1)$ for $t=4(n+1)b$ and $Q=2^{2n+3}$; this is not a polynomial query bound. No finite gate alphabet, uniform circuit family, or generator-time bound is asserted.

## Facts & Assumptions

**Given:** The modular order-finding circuit and sample count, the QPE cost model, and the distinct gate/bit/query coordinates in [[def-qc-circuit-cost-model]] and [[def-qa-classical-bit-cost]].

[F1] The algorithm uses $m=2n+3$ phase bits, $Q=2^m$, $t=4(n+1)b$ independent samples, and one controlled modular multiplication for each of the $m$ QPE powers per sample ([[alg-qa-modular-order-finding]]).

[F2] One phase-estimation run uses $Q-1$ controlled-$U_x$ calls if only controlled-$U_x$ is supplied; exact ideal QFT gate count is $O(m^2)$ ([[thm-qa-phase-estimation-access-cost]]).

[F3] Each controlled modular multiplier uses $O(n^2)$ gates, while repeated-squaring constants and inverses cost $O(n^3)$ classical bit transitions ([[thm-qa-modular-arithmetic-cost]]).

[F4] Continued-fraction reconstruction costs $O(n^3)$ bit transitions when $Q=2^{2n+3}$, and the declared model charges classical arithmetic separately from oracle and gate operations ([[thm-qa-rational-reconstruction-bit-cost]], [[def-qa-classical-bit-cost]], [[def-qc-circuit-cost-model]]).

## Proof

1.1 Since $Q=2^{2n+3}$, its bit length is $O(n)$; [F1] has $m=O(n)$ and $t=O(nb)$. There are exactly $tm=O(n^2b)$ controlled modular-multiplier circuits. [F1, given, algebra]

2.1 By [F3], those arithmetic circuits contribute $O(n^2)\cdot O(n^2b)=O(n^4b)$ gates. Each QPE phase preparation and ideal inverse QFT contributes $O(m^2)=O(n^2)$ more gates per sample by [F2], for total $O(n^3b)$, which is bounded by $O(n^4b)$ since $n\ge2$. Thus the stated gate bound follows. [F1, F2, F3, step 1.1, algebra]

2.2 Precomputing all modular powers and inverses costs $O(n^3)$ bits by [F3]. In each sample, reconstruction costs $O(n^3)$ by [F4]. Testing a candidate $q\le N$ by binary modular exponentiation uses $O(n)$ modular products on $O(n)$-bit values, each with $O(n^2)$ schoolbook transitions as in [F3], hence $O(n^3)$ bits. Across $t=O(nb)$ samples this is $O(n^4b)$, including preprocessing because $n\ge2$ and $b\ge1$. [F1, F3, F4, step 1.1, algebra]

3.1 Under only controlled-$U_x$ access, [F2] charges exactly $Q-1$ calls for each run, so $t(Q-1)$ is the total query count. Under compiled known modular arithmetic, the multiplier circuits have the separate cost in step 2.1. The cost coordinates in [F4] are independent, so this gate bound does not turn a black-box controlled-$U_x$ query into a polynomial-cost circuit. [F1, F2, F3, F4, step 2.1, step 2.2]

4.1 For $b\ge1$, $1+b=O(1+\ln(1/\delta))$ when $\delta=2^{-b}$, since $\ln(1/\delta)=b\ln2$. This gives the equivalent logarithmic forms. The ideal QFT model uses exact continuous rotations, and none of [F1]–[F4] provides a finite-alphabet compilation or a uniform-family generator, so those claims are outside this theorem. [F1, F2, F3, F4, step 3.1] ∎
