---
id: alg-qa-13-median-confidence-estimation
kind: algorithm
title: "Median confidence amplification for amplitude estimation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-13-phase-estimation-amplitude-estimation
  - lem-qa-13-pi-rational-bounds
  - def-qa-classical-bit-cost
  - lem-qa-13-real-cyclotomic-comparison
  - def-qa-quantum-query-algorithm
  - def-nat-power
  - thm-induction-principle
  - thm-of-archimedean
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
## Definition

**Input.** The amplitude-estimation task, rational $0<\epsilon\le1$ and rational $0<\delta<1$.

Initialize $m=0$ and $M=1$. Repeatedly increment $m$ and double $M$ while $M<88/(7\epsilon)$, using exact rational comparison, so that $M=2^m$. Set $r=1$ and repeatedly increase $r$ by $2$ while $2^r<(2/\delta)^8$, using exact rational comparisons. Run $r$ independent fresh copies of the QFT estimator with phase-register size $M$, and return the middle order statistic of their exact algebraic estimates (ties are ordered by their exact value and identical values are interchangeable).

## Facts & Assumptions

**Given:** Rational tolerances $0<\epsilon\le1$ and $0<\delta<1$, and the QFT estimator.

[F1] The one-run QFT estimator has the finite output and access instructions stated in [[alg-qa-13-phase-estimation-amplitude-estimation]].

[F2] $\pi<22/7$ ([[lem-qa-13-pi-rational-bounds]]).

[F3] Exact rational comparisons and output processing are charged as classical bit operations ([[def-qa-classical-bit-cost]]).

[F4] Independent repetitions mean separately prepared and measured runs in the quantum query model ([[def-qa-quantum-query-algorithm]]).

[F5] Exact comparisons of real cyclotomic values terminate ([[lem-qa-13-real-cyclotomic-comparison]]).

[F6] The real field is Archimedean, natural powers obey $2^{j+1}=2^j\cdot2$, and induction holds on the naturals ([[thm-of-archimedean]], [[def-nat-power]], [[thm-induction-principle]]).

## Proof

1.1 The threshold $88/(7\epsilon)$ is rational and exceeds $4\pi/\epsilon$ by [F2]. By [F6], powers of two are unbounded: choose a natural $q$ above any fixed real threshold by the Archimedean property and use induction to get $2^q\ge q+1$. Thus the doubling loop for $M$ terminates, and its first value above the threshold is the least such power; since $\epsilon\le1$ and $88/7>8$, this value is at least $16$, so it is an admissible phase-register size and satisfies the one-run precision requirement. The rational target $(2/\delta)^8$ is finite. Choose a natural $q>(2/\delta)^8$ by [F6]; if $q$ is odd take $r=q$, and if $q$ is even take $r=q+1$. Then $r$ is positive odd and $2^r\ge2^q\ge q+1>(2/\delta)^8$, so the odd-increment loop for $r$ terminates at the least positive odd solution. Each comparison is exact rational arithmetic after clearing denominators. [given, F2, F3, F6, algebra]

1.2 Each run returns an algebraic estimate in the same real cyclotomic field $\mathbb Q(\zeta_M+\zeta_M^{-1})$. Exact finite comparisons determine the middle order statistic; repetitions use independent fresh preparations and readouts by [F4]. [given, F1, F3, F4, F5, algebra]

2.1 The output is one of the $r$ finite run estimates, and the odd sample size makes its middle index unique. Thus the procedure is defined for all stated rational inputs, with query and classical comparison costs remaining separate under [F3]. [given, F3, step 1.1, step 1.2] ∎
