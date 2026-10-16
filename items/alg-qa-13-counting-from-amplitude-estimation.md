---
id: alg-qa-13-counting-from-amplitude-estimation
kind: algorithm
title: "Quantum counting by uniform-state amplitude estimation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-13-amplitude-estimation-task
  - alg-qa-13-phase-estimation-amplitude-estimation
  - alg-qa-quantum-phase-estimation
  - lem-qa-13-grover-eigenphase-relation
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-elementary-circuit-resources
  - def-qa-classical-bit-cost
justified_by:
  - thm-qa-13-counting-error-guarantee
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

**Input.** A Boolean predicate $f:\{0,1\}^n\to\{0,1\}$, an integer $n\ge0$, $N=2^n$, an explicitly supplied controlled membership reflection for $S_{\rm good}$, a power of two $M=2^m\ge2$, and the other controlled accesses in [[def-qa-13-amplitude-estimation-task]].

Prepare $N^{-1/2}\sum_x|x\rangle=H^{\otimes n}|0^n\rangle$, run the $m$-qubit QPE circuit for $Q$ with $M=2^m$ labels, measure $y$, and output the exact algebraic fraction estimate $\widetilde a=\sin^2(\pi y/M)$ and count estimate $\widetilde t=N\widetilde a$. For $M\ge4$ this is the QFT amplitude-estimation circuit of [[alg-qa-13-phase-estimation-amplitude-estimation]]; for $M=2$, use its one-phase-qubit QPE circuit directly, without invoking the $M\ge4$ error theorem. The fraction and count are real-valued algebraic outputs; integer rounding is optional postprocessing. The controlled membership reflection is an explicit access requirement. In repeated-unitary mode each controlled $Q$ call charges one controlled membership reflection; in power-query mode each supplied controlled power carries its declared cost vector, including any membership-reflection implementations it uses. Neither access mode is inferred from the bare phase oracle $|x\rangle\mapsto(-1)^{f(x)}$.
