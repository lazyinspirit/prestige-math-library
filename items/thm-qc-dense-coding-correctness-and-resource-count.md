---
id: thm-qc-dense-coding-correctness-and-resource-count
kind: theorem
title: Dense-coding correctness and resources
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - alg-qc-dense-coding
  - def-qc-bell-basis
  - thm-qc-bell-transform-inverse
  - def-qc-projective-measurement
  - def-qc-density-operator
  - thm-qc-projective-measurement-outcome-law
  - def-qc-pauli-matrices
  - def-trace-of-an-endomorphism
  - thm-qc-computational-basis-orthonormal
justified_by: []
proof_strategy: direct
axiom_use: "None; the encoding labels and decoder outcomes are checked in four finite cases."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Proposition 6.54 and Example 6.55."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§7.2, equations (82) and the decoding table, PDF pp.61–62. Cleve's input labels are shift bit then phase bit, so they are exchanged to match the present phase/shift order."
---

## Statement

For each input pair $(a,b)\in\{0,1\}^2$ in the procedure
[[alg-qc-dense-coding]], with $a$ the phase bit and $b$ the flip bit, Alice's
encoding $Z_A^aX_A^b$ sends $|\Phi^+\rangle$ to the Bell vector $B|ab\rangle$.
Bob's inverse $B^\dagger$ therefore returns the computational-basis vector
$|ab\rangle$, and the final projective measurement outputs the original two
bits with probability one. This realizes two classical output bits using one
preshared Bell pair and one transmitted qubit. It is an achievability result,
not an optimality claim.

## Facts & Assumptions

**Given:** Bits $a,b\in\{0,1\}$, the preshared $|\Phi^+\rangle$, and the
dense-coding procedure with the stated phase/flip label order.

[A1] $a$ is the phase bit, $b$ is the flip bit, and the input label is ordered $(a,b)$.

[F1] [[alg-qc-dense-coding]] applies $X_A^b$ then $Z_A^a$, sends wire $A$, then has Bob apply CNOT $A\to B$, $H_A$, and measure ordered $A,B$.

[F2] [[def-qc-bell-basis]] defines $\Phi^+,\Psi^+,\Phi^-,\Psi^-$ in label order $00,01,10,11$.

[F3] [[thm-qc-bell-transform-inverse]] proves $B|00\rangle=\Phi^+$, $B|01\rangle=\Psi^+$, $B|10\rangle=\Phi^-$, $B|11\rangle=\Psi^-$ and that $B^\dagger$ decodes these labels.

[F4] [[def-qc-pauli-matrices]] gives the exact matrices and basis actions of $X$ and $Z$.

[F5] [[def-qc-projective-measurement]] assigns outcome weights $\operatorname{tr}(\rho P_{ab})$ to computational-basis projectors.

[F6] [[thm-qc-projective-measurement-outcome-law]] states that these weights are probabilities.

[F7] [[def-trace-of-an-endomorphism]] defines trace as the sum of diagonal entries in a chosen basis.

[F8] [[thm-qc-computational-basis-orthonormal]] proves that Bob's ordered computational-basis outcomes are orthonormal projectors.

[F9] [[def-qc-density-operator]] defines a density operator as a non-negative operator with trace one.

## Proof

1.1 Applying $Z_A^aX_A^b$ to $|\Phi^+\rangle=(|00\rangle+|11\rangle)/\sqrt2$ and using [F4] gives the four cases: $00\mapsto\Phi^+$, $01\mapsto\Psi^+$, $10\mapsto\Phi^-$, and $11\mapsto\Psi^-$. In the last case, $Z_A X_A|00\rangle=-|10\rangle$ and $Z_A X_A|11\rangle=|01\rangle$, so the state is exactly $\Psi^-$ in the chosen convention. [given, A1, F2, F4, algebra]

2.1 For $x\in\{0,1\}$, [F4] gives $Z^a|x\rangle=(-1)^{ax}|x\rangle$. Expanding the left side and then substituting $y=x\oplus b$ gives $(Z^aX^b\otimes I)|\Phi^+\rangle=2^{-1/2}\sum_x(-1)^{a(x\oplus b)}|x\oplus b,x\rangle=2^{-1/2}\sum_y(-1)^{ay}|y,y\oplus b\rangle=(I\otimes X^bZ^a)|\Phi^+\rangle$. The same matrices give $XZ=-ZX$, hence $X^bZ^a=(-1)^{ab}Z^aX^b$. The scalar $\lambda=(-1)^{ab}$ leaves the rank-one projector unchanged because $(\lambda v)(\lambda v)^*=|\lambda|^2vv^*=vv^*$; it changes no projective outcome weight, while the direct four-case vectors in step 1.1 fix the exact label phase. [step 1.1, F2, F4, algebra]

2.2 By [F3], the four encoded vectors in step 1.1 are $B|ab\rangle$, and $B^\dagger$ sends each to $|ab\rangle$. The output projectors are the orthogonal basis projections in [F8]. The rank-one matrix of $|ab\rangle$ has a single diagonal entry $1$ at label $(a,b)$, so its quadratic form is nonnegative and its trace is one by [F7]; it is a density operator by [F9]. Then [F5] and [F7] give weight one at $(a,b)$ and zero at the other labels. By [F6] this is a deterministic output law. [step 1.1, F3, F5, F6, F7, F8, algebra]

3.1 The procedure [F1] begins with one shared pair, sends only wire $A$ once, and outputs the two input bits at Bob's measurement. Its instructions contain at most two conditional Pauli gate occurrences for Alice's encoding, one CNOT and one Hadamard for Bob, and two final measured wires. Thus it achieves the stated resource exchange for this procedure; no optimality statement is used. [F1, algebra] ∎
