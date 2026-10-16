---
id: thm-qa-13-counting-query-complexity
kind: theorem
title: "Quantum counting query complexity"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-13-counting-from-amplitude-estimation
  - thm-qa-13-counting-error-guarantee
  - thm-qa-13-amplitude-estimation-query-complexity
  - thm-qa-13-amplitude-estimation-guarantee
  - def-qa-quantum-query-complexity
  - def-qa-classical-bit-cost
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For an integer $n\ge0$, $N=2^n$, and a power of two $M=2^m\ge4$, Count uses exactly $M-1$ repeated controlled-Grover calls, or exactly $m$ supplied controlled-power queries, in addition to its $n$ ordinary Hadamards for uniform-state preparation. At fixed success probability, additive count error $\epsilon_c\in(0,N]$ is obtained using $O(N/\epsilon_c)$ repeated controlled-Grover calls; additive fraction error $\epsilon_f\in(0,1]$ uses $O(1/\epsilon_f)$. The count-dependent error bound retains the terms $2\pi k\sqrt{t(N-t)}/M$ and $\pi^2k^2N/M^2$. Algebraic output encoding and integer rounding have separate classical bit costs.

## Facts & Assumptions

**Given:** The counting algorithm, an integer $n\ge0$, $N=2^n$, a power-of-two $M\ge4$, and the declared query mode.

[F1] The estimator has the phase-estimation circuit and uniform preparation specified in [[alg-qa-13-counting-from-amplitude-estimation]].

[F2] Repeated controlled-$Q$ access costs $M-1$ calls and supplied powers cost $m$ calls ([[thm-qa-13-amplitude-estimation-query-complexity]]).

[F3] The additive amplitude guarantee is the statement of [[thm-qa-13-amplitude-estimation-guarantee]].

[F4] Query counts and classical bit operations are separate resources ([[def-qa-quantum-query-complexity]], [[def-qa-classical-bit-cost]]).

## Proof

1.1 The exact controlled-iterate counts follow from [F2]. The uniform address preparation applies one Hadamard to each of the $n$ wires by [F1], in addition to phase-register and QFT gates separately counted in [F4]. [given, F1, F2, F4]

2.1 For fraction error $\epsilon_f$, set amplitude precision $\epsilon=\epsilon_f$; for count error $\epsilon_c$, set $\epsilon=\epsilon_c/N$. Choosing $M$ the least power of two at least $4(22/7)/\epsilon$ makes the $k=1$ error $\pi/M+\pi^2/M^2<\epsilon$ for $\epsilon\le1$ by [F3]. The least-power bound is $M<8(22/7)/\epsilon$, giving the two asymptotic query bounds. [given, F3, step 1.1, algebra]

3.1 The count-dependent expression is [F3] multiplied by $N$ as in [[thm-qa-13-counting-error-guarantee]]. Multiplication by $N$, exact cyclotomic representation, and optional integer rounding are classical bit work and remain separate under [F4]. [given, F3, F4, step 2.1, algebra] ∎

