---
id: cex-qa-13-controlled-powers-are-not-free
kind: counterexample
title: "A bare unitary oracle does not supply controlled powers for free"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - thm-qa-13-amplitude-estimation-query-complexity
  - def-qc-controlled-unitary-access
  - def-qa-13-amplitude-estimation-task
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: ai-altered
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
## Statement refuted

A query bound stated in controlled powers of a unitary can always be read as the same gate or query bound for a bare uncontrolled unitary oracle, without separately supplying or charging controlled access.

## Facts & Assumptions

**Given:** An access model that grants calls to an uncontrolled unitary $U$ but does not separately grant controlled access.

[F1] Controlled access is a separate block operator $C(U)=\operatorname{diag}(I,U)$ and is not implied by an ordinary call ([[def-qc-controlled-unitary-access]]).

[F2] The amplitude-estimation power-query and repeated-controlled-query counts assume the explicit controlled access mode ([[thm-qa-13-amplitude-estimation-query-complexity]]).

[F3] The amplitude task requires explicit controlled-power access or repeated controlled-$Q$ access. In repeated-unitary mode, the controlled-$Q$ constituents must be supplied or implemented and charged; in power-query mode, each supplied power has its own declared cost vector ([[def-qa-13-amplitude-estimation-task]]).

## Counterexample

1.1 Let the target be one-dimensional and compare $U=I$ with $U'=-I$. An uncontrolled call to $U'$ differs from an uncontrolled call to $U$ by a scalar phase on the target, so every fixed sequence of uncontrolled calls has the same physical outcome probabilities after any final measurement; global phase cancels from a vector's rank-one projector. [given, F1, algebra]

2.1 On a control qubit, however, $C(I)=I$ while $C(-I)=\operatorname{diag}(1,-1)=Z$. On input $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$, the first returns $|+\rangle$ and the second returns $| -\rangle=(|0\rangle-|1\rangle)/\sqrt2$; a computational-basis-independent $X$-basis measurement distinguishes them with certainty. Thus controlled access contains information absent from the uncontrolled phase-equivalence class. [given, F1, F3, step 1.1, algebra]

3.1 The cost theorem [F2] counts supplied controlled powers or repetitions of controlled $Q$ only under the corresponding access declaration. In repeated-unitary mode the controlled-$Q$ constituents must be charged; in power-query mode each supplied power carries its declared cost vector, including any implementation constituents. This witness proves that neither mode's controlled access is free from a bare uncontrolled oracle. [given, F2, F3, step 2.1] ∎

