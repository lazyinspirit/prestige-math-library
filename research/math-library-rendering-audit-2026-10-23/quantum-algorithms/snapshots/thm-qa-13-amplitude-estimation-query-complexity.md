---
id: thm-qa-13-amplitude-estimation-query-complexity
kind: theorem
title: "Amplitude-estimation query and precision complexity"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-13-phase-estimation-amplitude-estimation
  - thm-qa-13-amplitude-estimation-guarantee
  - thm-qa-phase-estimation-access-cost
  - def-qa-quantum-query-complexity
  - def-qa-13-amplitude-estimation-task
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

For $M=2^m\ge4$, repeated controlled-$Q$ access uses exactly $M-1$ controlled-$Q$ applications in one run; each expands to one call each to controlled $A$, controlled $A^*$, controlled $S_0$, controlled $S_{\rm good}$, and the control phase. Supplied controlled-power access uses exactly $m$ power queries and reports their separate costs. With fixed success probability, additive amplitude error $\epsilon\in(0,1]$ is obtained with $M=\Theta(1/\epsilon)$, hence $O(1/\epsilon)$ repeated controlled-$Q$ calls; state preparation, ordinary gates, and classical encoding are separate costs.

## Facts & Assumptions

**Given:** The $M$-label amplitude-estimation circuit and the access mode from [[def-qa-13-amplitude-estimation-task]].

[F1] The phase-estimation circuit uses one controlled power $Q^{2^j}$ for each $j=0,\ldots,m-1$ ([[alg-qa-13-phase-estimation-amplitude-estimation]]).

[F2] QPE charges exactly $m$ supplied powers or $M-1$ repeated controlled-unitary calls ([[thm-qa-phase-estimation-access-cost]]).

[F3] The quantum query model counts only declared oracle actions ([[def-qa-quantum-query-complexity]]).

[F4] In repeated-unitary mode, each controlled $Q$ expands into separately declared controlled $A$, controlled $A^*$, controlled $S_0$, controlled $S_{\rm good}$, and control phase. In power-query mode each supplied controlled power has its own declared cost vector, including any constituent implementations used ([[def-qa-13-amplitude-estimation-task]]).

[F5] The error guarantee is the inequality in [[thm-qa-13-amplitude-estimation-guarantee]].

## Proof

1.1 In repeated access, the $j$th power takes $2^j$ calls by [F2]. Summing gives $\sum_{j=0}^{m-1}2^j=2^m-1=M-1$. In supplied-power access, there is one call for each of $m$ indices, hence $m$ queries. [given, F1, F2, algebra]

2.1 In repeated-unitary mode, [F4] makes each controlled-$Q$ call the charged product listed in the Statement. In power-query mode, the model instead charges each supplied controlled power and its declared cost vector, without inferring any constituent capability from a bare uncontrolled call. [given, F3, F4, step 1.1]

3.1 For $0<\epsilon\le1$, choose $M$ the least power of two at least $4(22/7)/\epsilon$. By [F5], the $k=1$ error is at most $\pi/M+\pi^2/M^2<\epsilon/4+\epsilon^2/16\le5\epsilon/16<\epsilon$, with success probability at least $8/\pi^2$. The least-power choice gives $M<8(22/7)/\epsilon$, so [F3] yields the $O(1/\epsilon)$ repeated-call bound; other cost coordinates remain separate. [given, F3, F5, step 1.1, algebra] ∎

