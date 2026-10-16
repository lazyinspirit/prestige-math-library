---
id: thm-qc-teleportation-bell-expansion
kind: theorem
title: Teleportation Bell-basis expansion
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - alg-qc-teleportation
  - def-qc-bell-basis
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-cnot-and-control-target-order
  - def-qc-pauli-matrices
  - def-qc-tensor-map
justified_by: []
proof_strategy: direct
axiom_use: "None; the expansion is a finite calculation in an explicit computational basis."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Example 6.50."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§10.3, equations (135)–(138), PDF pp.82–83."
---

## Statement

For arbitrary $\alpha,\beta\in\mathbb C$, put
$|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$ and
$V_{AB}=(H_A\otimes I_{BC})\operatorname{CNOT}_{A\to B}$, in wire order
$A,B,C$. Then

$$V_{AB}(|\psi\rangle_A\otimes|\Phi^+\rangle_{BC})=\frac12\sum_{a,b\in\{0,1\}}|ab\rangle_{AB}\otimes X_C^bZ_C^a|\psi\rangle_C.$$

No normalization assumption on $|\psi\rangle$ is needed for this vector
identity.

## Facts & Assumptions

**Given:** $\alpha,\beta\in\mathbb C$, the ordered wires $A,B,C$, and the
operators in the Statement.

[A1] $|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$ is an arbitrary vector; it need not be normalized.

[F1] [[alg-qc-teleportation]] specifies initial input $|\psi\rangle_A$, shared resource $|\Phi^+\rangle_{BC}$, wire order $A,B,C$, CNOT followed by $H_A$, and measurement-record order $(a,b)$.

[F2] [[def-qc-bell-basis]] defines $|\Phi^+\rangle=(|00\rangle+|11\rangle)/\sqrt2$.

[F3] [[def-qc-one-qubit-gate-alphabet-and-rotations]] gives $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

[F4] [[def-qc-cnot-and-control-target-order]] gives $\operatorname{CNOT}_{1\to2}|x,t\rangle=|x,t\oplus x\rangle$ with the first wire as control.

[F5] [[def-qc-pauli-matrices]] gives $X|0\rangle=|1\rangle$, $X|1\rangle=|0\rangle$, $Z|0\rangle=|0\rangle$, and $Z|1\rangle=-|1\rangle$.

[F6] [[def-qc-tensor-map]] extends the rule $H\otimes I:x\otimes y\mapsto Hx\otimes y$ linearly to the three-wire register.

## Proof

1.1 By [F2], the initial vector is $2^{-1/2}(\alpha|000\rangle+\alpha|011\rangle+\beta|100\rangle+\beta|111\rangle)$ in wire order $A,B,C$. [given, A1, F1, F2, algebra]

2.1 Applying [F4] to the four basis vectors gives $2^{-1/2}(\alpha|000\rangle+\alpha|011\rangle+\beta|110\rangle+\beta|101\rangle)$ after CNOT: the first two terms have control bit $0$ and are fixed, while the last two have control bit $1$ and their target bits flip. [step 1.1, F4, algebra]

3.1 By [F3] and [F6], $H_A$ sends each first-wire $|0\rangle$ to $(|0\rangle+|1\rangle)/\sqrt2$ and each $|1\rangle$ to $(|0\rangle-|1\rangle)/\sqrt2$. Regrouping the resulting eight terms by the first two wires gives $\frac12\bigl(|00\rangle(\alpha|0\rangle+\beta|1\rangle)+|01\rangle(\alpha|1\rangle+\beta|0\rangle)+|10\rangle(\alpha|0\rangle-\beta|1\rangle)+|11\rangle(\alpha|1\rangle-\beta|0\rangle)\bigr)$. [step 2.1, F3, F6, algebra]

4.1 The four receiver vectors in step 3.1 are respectively $|\psi\rangle$, $X|\psi\rangle$, $Z|\psi\rangle$, and $XZ|\psi\rangle$ by the actions in [F5]. These are exactly $X^bZ^a|\psi\rangle$ for labels $00,01,10,11$, so step 3.1 is the sum in the Statement. [A1, step 3.1, F5, algebra] ∎
