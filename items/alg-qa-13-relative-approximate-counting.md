---
id: alg-qa-13-relative-approximate-counting
kind: algorithm
title: "Relative approximate counting with unknown marked count"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-13-counting-from-amplitude-estimation
  - lem-qa-13-counting-zero-outcome-kernel
  - lem-qa-13-certified-count-output-rounding
  - alg-qa-13-certified-count-output-rounding
  - lem-qa-13-pi-rational-bounds
  - def-qa-classical-bit-cost
  - def-nat-power
  - thm-induction-principle
  - thm-of-archimedean
justified_by:
  - thm-qa-13-relative-counting-success
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

**Input.** A Boolean predicate on $N=2^n\ge1$ addresses with an integer $n\ge0$, the fully declared controlled counting access model, and rational $0<\epsilon\le1$.

Set $\ell=0$. Repeatedly increment $\ell$, set $L=2^\ell$, run a fresh Count$(f,L)$, and stop exactly when its label $y$ is nonzero or $L^2\ge4N$. The test $y\ne0$ is an exact finite label test. Initialize $m=0$ and $M=1$; repeatedly increment $m$ and double $M$ while $M<[20(22/7)^2/\epsilon]L$, using exact rational comparison, so that $M=2^m$. Run a fresh Count$(f,M)$ and run [[alg-qa-13-certified-count-output-rounding]] on $(N,M,y)$ to output an integer within $2/3$ of its exact algebraic count estimate, as proved by [[lem-qa-13-certified-count-output-rounding]]. The scale loop returns the least power of two meeting its rational threshold; all scales are powers of two and the multiplier grows as $1/\epsilon$ times $L$.
