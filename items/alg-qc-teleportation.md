---
id: alg-qc-teleportation
kind: algorithm
title: Qubit teleportation procedure
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-bell-basis
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-classical-control-and-measurement-circuit
  - def-qc-circuit-denotational-semantics
  - def-qc-cnot-and-control-target-order
  - def-qc-pauli-matrices
  - def-qc-projective-measurement
  - thm-qc-computational-basis-orthonormal
justified_by: []
axiom_use: "None; this is a finite procedure on explicit finite-dimensional registers."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Scenario 6.46 and Example 6.50."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§10.2–10.3, PDF pp.81–85."
---

## Definition

The **teleportation procedure** has input a normalized qubit vector $|\psi\rangle_A\in Q_2$ and a preshared resource $|\Phi^+\rangle_{BC}$, with Alice holding wires $A,B$ and Bob holding $C$. The wire order is $A,B,C$. It uses $|\Phi^+\rangle$ from [[def-qc-bell-basis]], CNOT with $A$ control and $B$ target from [[def-qc-cnot-and-control-target-order]], the Hadamard $H$ from [[def-qc-one-qubit-gate-alphabet-and-rotations]], the Pauli matrices from [[def-qc-pauli-matrices]], and the finite projective measurement convention of [[def-qc-projective-measurement]].

1. Alice applies $\operatorname{CNOT}_{A\to B}$ and then $H_A$, so the combined operator is $V_{AB}=(H_A\otimes I_{BC})\operatorname{CNOT}_{A\to B}$, with the rightmost gate applied first.
2. Alice measures $A,B$ in their ordered computational basis and records the pair $(a,b)\in\{0,1\}^2$, in that wire order.
3. Alice sends the two classical bits $a,b$ to Bob.
4. Bob applies $X_C^b$ and then $Z_C^a$, whose operator product is $Z_C^aX_C^b$.

The output is the corrected state on Bob's wire $C$. The shared Bell pair is an
input resource; its preparation and physical realization are outside this
procedure. A zero-probability measurement label has no conditional state and
is assigned no branch output; the normalized-input hypotheses here are later
shown to make all four labels positive.

