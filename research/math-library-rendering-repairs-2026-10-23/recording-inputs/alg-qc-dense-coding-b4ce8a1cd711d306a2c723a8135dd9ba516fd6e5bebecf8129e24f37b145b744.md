---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-qc-dense-coding.json
  precheck: n/a
id: alg-qc-dense-coding
kind: algorithm
title: Dense-coding procedure
status: published
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

## Remarks

The circuit is read from left to right. The top wire is $A$ and the bottom
wire is $B$; the bracket marks the preshared Bell pair. Only $A$ is sent to
Bob, at the dashed divider. The filled control and circled target implement
$\operatorname{CNOT}_{A\to B}$. Each $M_Z$ denotes computational-basis
measurement, with the ordered classical outputs $(a,b)$. The circuit
illustrates the instructions above; correctness is independent of the picture.

```tikz
\begin{tikzpicture}[x=0.85cm,y=1cm,>=stealth]
\node at (-0.9,0.5) {$|\Phi^+\rangle_{AB}$};
\draw (0.15,0) -- (0,0) -- (0,1) -- (0.15,1);
\node at (0.45,1.3) {$A$};
\node at (0.45,-0.3) {$B$};
\node at (2.35,1.85) {Alice: encode};
\node at (7.3,1.85) {Bob: decode and measure};
\draw (0.15,1) -- (1.1,1);
\draw (1.1,0.7) rectangle (1.9,1.3);
\node at (1.5,1) {$X^b$};
\draw (1.9,1) -- (2.5,1);
\draw (2.5,0.7) rectangle (3.3,1.3);
\node at (2.9,1) {$Z^a$};
\draw[->] (3.3,1) -- (4.7,1);
\node at (4,1.5) {send $A$};
\draw[dashed] (4.3,-0.55) -- (4.3,0.65);
\draw[dashed] (4.3,1.15) -- (4.3,1.8);
\draw (4.7,1) -- (6.2,1);
\draw (0.15,0) -- (7.8,0);
\node at (2.35,-0.55) {Bob holds $B$};
\draw (5.3,0.16) -- (5.3,1);
\fill (5.3,1) circle (0.065);
\draw (5.3,0) circle (0.16);
\draw (5.14,0) -- (5.46,0);
\draw (5.3,-0.16) -- (5.3,0.16);
\draw (6.2,0.7) rectangle (7,1.3);
\node at (6.6,1) {$H$};
\draw (7,1) -- (7.8,1);
\draw (7.8,0.7) rectangle (8.7,1.3);
\draw (7.8,-0.3) rectangle (8.7,0.3);
\node at (8.25,1) {$M_Z$};
\node at (8.25,0) {$M_Z$};
\draw[->] (8.7,1) -- (9.5,1) node[right] {$a$};
\draw[->] (8.7,0) -- (9.5,0) node[right] {$b$};
\end{tikzpicture}
```
