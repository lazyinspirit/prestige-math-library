---
id: alg-qa-13-phase-estimation-amplitude-estimation
kind: algorithm
title: "QFT-based amplitude estimation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-13-amplitude-estimation-task
  - lem-qa-13-grover-eigenphase-relation
  - def-qa-eigenphase-estimation-model
  - alg-qa-quantum-phase-estimation
  - thm-qa-phase-estimation-access-cost
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - thm-qc-standalone-global-phase-invariance
  - thm-qc-controlled-global-phase-is-relative-phase
  - thm-qc-reflection-unitary-involution
  - def-qa-classical-bit-cost
  - lem-qa-13-real-cyclotomic-comparison
justified_by:
  - thm-qa-13-amplitude-estimation-guarantee
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

**Input.** An instance from [[def-qa-13-amplitude-estimation-task]], an integer $m\ge2$, $M=2^m$, and either the declared controlled-power access mode or repeated controlled-$Q$ access.

**Instructions.** Prepare $\psi=A|0\rangle$, run the $M$-label QPE circuit on $Q$ using controlled powers $Q^{2^j}$, $j=0,\ldots,m-1$, and measure its phase register to obtain $y\in\{0,\ldots,M-1\}$. Output the exact cyclotomic value
$$\widetilde a=\sin^2(\pi y/M)=\frac{2-\zeta_M^y-\zeta_M^{-y}}4,\qquad \zeta_M=e^{2\pi i/M},$$
with the real embedding specified by this root. A decimal approximation is postprocessing and is charged separately. The leading minus in $Q$ is retained: on a controlled call it is the control phase $C(-I)$, not a discarded standalone global phase.
