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

**Input.** An instance from [[def-qa-13-amplitude-estimation-task]], an integer $m\ge2$, $M=2^m$, and either the declared controlled-power access mode or repeated controlled-$Q$ access.

**Instructions.** Prepare $\psi=A|0\rangle$, run the $M$-label QPE circuit on $Q$ using controlled powers $Q^{2^j}$, $j=0,\ldots,m-1$, and measure its phase register to obtain $y\in\{0,\ldots,M-1\}$. Output the exact cyclotomic value
$$\widetilde a=\sin^2(\pi y/M)=\frac{2-\zeta_M^y-\zeta_M^{-y}}4,\qquad \zeta_M=e^{2\pi i/M},$$
with the real embedding specified by this root. A decimal approximation is postprocessing and is charged separately. The leading minus in $Q$ is retained: on a controlled call it is the control phase $C(-I)$, not a discarded standalone global phase.

## Facts & Assumptions

**Given:** The task contract, $m\ge2$, the signed iterate $Q$, the chosen phase-estimation access mode, and the phase-qubit measurement.

[F1] The two Grover eigenphases are $\theta/\pi$ and $1-\theta/\pi$, with equal weights in the prepared state for $0<a<1$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F2] QPE uses controlled positive powers and a projective readout of its $M$-label register ([[alg-qa-quantum-phase-estimation]]).

[F3] A single controlled-unitary query does not include its inverse or any other controlled operation unless declared ([[def-qc-controlled-unitary-access]], [[def-qc-inverse-unitary-access]]).

[F4] A standalone global phase leaves outcome probabilities invariant, but a controlled global phase is a relative phase on the control ([[thm-qc-standalone-global-phase-invariance]], [[thm-qc-controlled-global-phase-is-relative-phase]]).

[F5] The signed reflections in $Q$ are unitary involutions ([[thm-qc-reflection-unitary-involution]]).

[F6] The phase-estimation access theorem counts $m$ supplied controlled-power queries or $M-1$ repeated controlled-$Q$ calls ([[thm-qa-phase-estimation-access-cost]]).

[F7] Classical algebraic encoding and any decimal refinement are charged separately ([[def-qa-classical-bit-cost]]).

[F8] A real value $P(\zeta_M)$ with $\zeta_M=e^{2\pi i/M}$ has the exact real cyclotomic representation and comparison interface of [[lem-qa-13-real-cyclotomic-comparison]].

## Proof

1.1 By [F1], the input state lies in the span of eigenvectors of $Q$ with phases $\theta/\pi$ and $1-\theta/\pi$; the endpoint cases are single eigenphases. QPE is therefore applied to its finite eigenphase decomposition, and the projective measurement returns a label in the finite set $\{0,\ldots,M-1\}$ by [F2]. [given, F1, F2]

1.2 The controlled iterate is composed from the four controlled factors and control phase specified in the task definition. The scalar minus is invisible only in an uncontrolled call by [F4]; under control it is retained as a relative phase. The reflection factors are unitary by [F5], and controlled access to $A^*$ remains separately supplied by [F3]. Thus the circuit instructions are well-defined under either declared access mode. [given, F3, F4, F5]

2.1 For $\zeta_M=e^{2\pi i/M}$, Euler's formula gives $\sin^2(\pi y/M)=(1-\cos(2\pi y/M))/2=(2-\zeta_M^y-\zeta_M^{-y})/4$. This is a real algebraic element of the cyclotomic field, so the stated output is exactly encoded; query counts are those in [F6] and decimal/bit processing is charged under [F7]. [given, F6, F7, F8, algebra] ∎
