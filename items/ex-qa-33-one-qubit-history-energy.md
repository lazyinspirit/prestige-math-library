---
id: ex-qa-33-one-qubit-history-energy
kind: example
title: One-gate history Hamiltonian energy check
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-33-feynman-kitaev-history-hamiltonian
  - lem-qa-33-feynman-propagation-path-gap
  - lem-qa-33-feynman-input-output-penalties
justified_by: []
proof_strategy: direct
axiom_use: None; all matrices are two-dimensional and explicitly evaluated.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4, history-state construction, PDF pp. 10–13
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.3, PDF pp. 118–120
---

## Example

Take one work qubit in $|0\rangle$, one gate $U_1=H$, and declare outcome $|1\rangle$ accepting. Then the history is
$$|\eta\rangle=\frac1{\sqrt2}\bigl(|0\rangle|c_0\rangle+|+\rangle|c_1\rangle\bigr),\qquad |+\rangle=(|0\rangle+|1\rangle)/\sqrt2.$$
Verify that propagation energy is zero and that the scaled output penalty has energy $1/2$, equal to the verifier's rejection probability.

## Facts & Assumptions

**Given:** The $T=1$ history Hamiltonian and the stated one-qubit circuit.

[F1] [[def-qa-33-feynman-kitaev-history-hamiltonian]]: at $T=1$, propagation is the half-weight edge penalty and output penalty coefficient is $T+1=2$.

[F2] [[lem-qa-33-feynman-propagation-path-gap]]: the edge penalty vanishes exactly when the second computation component is $U_1$ applied to the first.

[F3] [[lem-qa-33-feynman-input-output-penalties]]: the scaled output penalty equals the terminal rejection probability.

## Proof

1.1 The propagation quadratic form on an arbitrary vector $|u\rangle|c_0\rangle+|v\rangle|c_1\rangle$ is $\frac12\|v-Hu\|^2$. Here $v=H|0\rangle=|+\rangle$, so the norm is zero and propagation energy vanishes. [F1, F2, given, algebra]

2.1 The terminal state is $|+\rangle$, whose probability of rejecting the accept-on-$|1\rangle$ predicate is $|\langle0|+\rangle|^2=1/2$. Directly, the clock-$c_1$ history component has squared norm $1/2$, its reject projection has probability $1/2$ within that component, and the coefficient 2 cancels the clock factor $1/2$; the total output energy is $1/2$. This matches [F3]. [F1, F3, step 1.1, algebra] ∎
