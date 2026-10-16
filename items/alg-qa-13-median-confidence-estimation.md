---
id: alg-qa-13-median-confidence-estimation
kind: algorithm
title: "Median confidence amplification for amplitude estimation"
status: published
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
justified_by:
  - thm-qa-13-median-confidence-guarantee
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: not-applicable
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
