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

**Input.** A Boolean predicate $f:\{0,1\}^n\to\{0,1\}$, an integer $n\ge0$, $N=2^n$, an explicitly supplied controlled membership reflection for $S_{\rm good}$, a power of two $M=2^m\ge2$, and the other controlled accesses in [[def-qa-13-amplitude-estimation-task]].

Prepare $N^{-1/2}\sum_x|x\rangle=H^{\otimes n}|0^n\rangle$, run the $m$-qubit QPE circuit for $Q$ with $M=2^m$ labels, measure $y$, and output the exact algebraic fraction estimate $\widetilde a=\sin^2(\pi y/M)$ and count estimate $\widetilde t=N\widetilde a$. For $M\ge4$ this is the QFT amplitude-estimation circuit of [[alg-qa-13-phase-estimation-amplitude-estimation]]; for $M=2$, use its one-phase-qubit QPE circuit directly, without invoking the $M\ge4$ error theorem. The fraction and count are real-valued algebraic outputs; integer rounding is optional postprocessing. The controlled membership reflection is charged once in each controlled Grover iterate and is not inferred from the bare phase oracle $|x\rangle\mapsto(-1)^{f(x)}|x\rangle$.

## Facts & Assumptions

**Given:** The Boolean predicate, an integer $n\ge0$, $N=2^n$, supplied controlled membership-reflection access, and a power-of-two label count $M\ge2$.

[F1] The amplitude task specializes to $a=t/N$ when the prepared state is uniform on addresses ([[def-qa-13-amplitude-estimation-task]]).

[F2] QPE uses $m\ge1$ phase qubits and controlled powers of the supplied unitary ([[alg-qa-quantum-phase-estimation]]); for $m\ge2$ the amplitude-estimator specialization has the output map $\sin^2(\pi y/M)$ ([[alg-qa-13-phase-estimation-amplitude-estimation]]).

[F3] The Grover phase relation applies to the good-subspace projector defined by $f$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F4] The exact Hadamard matrix is fixed and each wire receives one ordinary Hadamard in the uniform preparation ([[def-qc-one-qubit-gate-alphabet-and-rotations]], [[def-qc-elementary-circuit-resources]]).

[F5] Classical algebraic encoding and any integer rounding are charged separately ([[def-qa-classical-bit-cost]]).

## Proof

1.1 For $m=1$, the $M=2$ procedure is the one-qubit instance of [F2]; for $m\ge2$ it is [F2] specialized by the amplitude-estimation output map. The $n$ Hadamards turn $|0^n\rangle$ into the uniform superposition; the definition of $\Pi_{\rm good}$ makes its squared projection norm $t/N$ by [F1] and [F4]. The eigenphase relation [F3] applies to this projector, and the amplitude-estimation instructions of [F2] use the corresponding $\sin^2$ output map. Thus the procedure estimates precisely this fraction and multiplying by $N$ gives the count estimate. [given, F1, F2, F3, F4, algebra]

2.1 In each controlled iterate, the membership reflection appears as the explicitly supplied controlled factor; no operation on the predicate is obtained from an uncontrolled phase query. The total controlled-iterate count is the QPE count stated for $M$, and the exact algebraic result has separate postprocessing cost by [F5]. [given, F2, F5, step 1.1]

3.1 The output remains the real-valued pair $(\widetilde a,\widetilde t)$ unless an integer is explicitly requested. Preparation uses exactly $n$ ordinary Hadamards; controlled reflection, controlled $A/A^*$, query, gate, and bit costs retain their separate declarations in [F4]–[F5]. [given, F4, F5, step 1.1, step 2.1] ∎

