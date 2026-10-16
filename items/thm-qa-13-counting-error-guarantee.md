---
id: thm-qa-13-counting-error-guarantee
kind: theorem
title: "Quantum counting error and boundary cases"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-13-counting-from-amplitude-estimation
  - thm-qa-13-amplitude-estimation-guarantee
  - lem-qa-13-grover-eigenphase-relation
  - thm-qa-phase-estimation-exact-grid
  - def-qa-13-amplitude-estimation-task
  - alg-qa-13-phase-estimation-amplitude-estimation
  - alg-qa-quantum-phase-estimation
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
## Statement

For an integer $n\ge0$, $N=2^n$, $t$ marked addresses among $N$, and $M=2^m\ge4$, the raw estimate satisfies
$$|\widetilde t-t|\le\frac{2\pi k\sqrt{t(N-t)}}M+\frac{\pi^2k^2N}{M^2}$$
with the same success probabilities as the amplitude-estimation theorem for integer $k\ge1$. If $t=0$, the raw estimate is zero with certainty. If $t=N$, the raw estimate is $N$ with certainty because $M$ is even.

For every integer $n\ge0$ and dyadic $M\ge2$, the counting procedure is well-defined, prepares the uniform state with exactly $n$ ordinary Hadamards, specializes the task amplitude to $a=t/N$, and returns the exact algebraic pair $(\widetilde a,N\widetilde a)$ with separately charged optional rounding. Its one-phase-qubit $M=2$ branch is included in this well-definedness claim; the error guarantee above concerns $M\ge4$.

## Facts & Assumptions

**Given:** an integer $n\ge0$, $N=2^n$, a predicate with exactly $t$ marked addresses, and the counting estimator with dyadic $M\ge2$. The error bound is claimed when $M\ge4$.

[F1] Counting uses fraction amplitude $a=t/N$ and raw count $\widetilde t=N\widetilde a$ ([[alg-qa-13-counting-from-amplitude-estimation]]).

[F2] The amplitude-estimation error and confidence bound are stated in [[thm-qa-13-amplitude-estimation-guarantee]].

[F3] The endpoint Grover phases are exactly $0$ for $a=0$ and $1/2$ for $a=1$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F4] A phase on the QPE grid is returned at its exact label with probability one ([[thm-qa-phase-estimation-exact-grid]]).

[F21] The amplitude task specializes to $a=t/N$ when the prepared state is uniform on addresses ([[def-qa-13-amplitude-estimation-task]]).

[F22] QPE uses $m\ge1$ phase qubits and controlled powers of the supplied unitary ([[alg-qa-quantum-phase-estimation]]); for $m\ge2$ the amplitude-estimator specialization has the output map $\sin^2(\pi y/M)$ ([[alg-qa-13-phase-estimation-amplitude-estimation]]).

[F23] The Grover phase relation applies to the good-subspace projector defined by $f$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F24] The exact Hadamard matrix is fixed and each wire receives one ordinary Hadamard in the uniform preparation ([[def-qc-one-qubit-gate-alphabet-and-rotations]], [[def-qc-elementary-circuit-resources]]).

[F25] Classical algebraic encoding and any integer rounding are charged separately ([[def-qa-classical-bit-cost]]).

[F26] The task charges controlled-$Q$ constituents in repeated-unitary mode and records each supplied controlled power with its own cost vector in power-query mode ([[def-qa-13-amplitude-estimation-task]]).

## Proof


1.1 For $m=1$, the $M=2$ procedure is the one-qubit instance of [F22]; for $m\ge2$ it is [F22] specialized by the amplitude-estimation output map. The $n$ Hadamards turn $|0^n\rangle$ into the uniform superposition; the definition of $\Pi_{\rm good}$ makes its squared projection norm $t/N$ by [F21] and [F24]. The eigenphase relation [F23] applies to this projector, and the amplitude-estimation instructions of [F22] use the corresponding $\sin^2$ output map. Thus the procedure estimates precisely this fraction and multiplying by $N$ gives the count estimate. [given, F21, F22, F23, F24, algebra]

1.2 For $M\ge4$, substitute $a=t/N$ in [F2] and multiply its error bound by $N$. Since $N\sqrt{a(1-a)}=\sqrt{t(N-t)}$ and $N(a)=t$, the result is the displayed inequality with unchanged event probability. [given, F1, F2, algebra]

2.1 In repeated-unitary mode, each controlled $Q$ call includes one explicitly supplied or implemented controlled membership reflection. In power-query mode, each supplied controlled power carries its declared cost vector, including any membership-reflection implementation it uses; neither mode infers controlled access from a bare phase query. The exact algebraic result has separate postprocessing cost by [F25]. [given, F22, F25, F26, step 1.1]

3.1 The output remains the real-valued pair $(\widetilde a,\widetilde t)$ unless an integer is explicitly requested. Preparation uses exactly $n$ ordinary Hadamards by [F24]. The access-mode-specific query costs are those declared in [F26], while ordinary gate and bit costs remain separate by [F24]–[F25]. [given, F24, F25, F26, step 1.1, step 2.1]

4.1 If $t=0$, the phase is the exact grid phase zero, so QPE returns $y=0$ and $\widetilde t=0$. If $t=N$, the phase is $1/2$; the even grid size has exact label $M/2$, which returns $\widetilde t=N$. [given, F1, F3, F4, step 1.2, algebra] ∎

