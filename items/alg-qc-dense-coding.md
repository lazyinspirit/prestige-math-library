---
id: alg-qc-dense-coding
kind: algorithm
title: Dense-coding procedure
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-bell-basis
  - thm-qc-bell-transform-inverse
  - def-qc-classical-control-and-measurement-circuit
  - def-qc-circuit-denotational-semantics
  - def-qc-pauli-matrices
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-cnot-and-control-target-order
  - def-qc-projective-measurement
  - thm-qc-computational-basis-orthonormal
justified_by: []
axiom_use: "None; the procedure has finite bit inputs, finite registers, and fixed gate and measurement instructions."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Scenario 6.53, Proposition 6.54, and Example 6.55."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§7.2, PDF pp.61–62. Cleve labels the X-bit first and Z-bit second; the present $(a,b)$ order is phase bit then flip bit."
---

## Definition

The **dense-coding procedure** takes classical input bits $a,b\in\{0,1\}$ and
a preshared pair $|\Phi^+\rangle_{AB}$, with Alice holding $A$ and Bob holding
$B$. The local convention is that $a$ is the phase bit and $b$ the flip bit.

1. Alice applies $X_A^b$ and then $Z_A^a$, so the encoding operator is $Z_A^aX_A^b$.
2. Alice sends the single qubit $A$ to Bob.
3. Bob applies $\operatorname{CNOT}_{A\to B}$, then $H_A$, and measures the ordered register $A,B$ in the computational basis.
4. Bob outputs the ordered pair of measured bits.

If a surrounding measurement model assigns an outcome zero weight, no
conditional state is assigned for that outcome. For each of the four possible input pairs, the decoded output equals that pair with weight one and the other three outcomes have weight zero, as computed in the correctness theorem.

The Bell resource, Pauli matrices, Hadamard, CNOT wire order, and projective
measurement use the conventions of [[def-qc-bell-basis]],
[[def-qc-pauli-matrices]], [[def-qc-one-qubit-gate-alphabet-and-rotations]],
[[def-qc-cnot-and-control-target-order]], and
[[def-qc-projective-measurement]]. No optimality claim is part of this
procedure.

