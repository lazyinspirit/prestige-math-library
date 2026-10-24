---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-qc-teleportation.json
  precheck: n/a
id: alg-qc-teleportation
kind: algorithm
title: Qubit teleportation procedure
status: published
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


## Remarks

The circuit reads from left to right in wire order $A,B,C$. The Bell resource
box supplies the preshared pair; it is not a preparation gate. Solid lines
carry qubits, the filled dot and circled plus denote CNOT control and target,
and $M_Z$ denotes computational-basis measurement. Dashed arrows carry the
classical outcomes $a$ and $b$ to the indicated corrections on $C$.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\node at (3.1,0.65) {Alice: $A,B$};
\node at (6.35,-2.85) {Bob: $C$};
\node[anchor=east] at (0.65,0) {$|\psi\rangle_A$};
\node[draw,minimum width=1.4cm,minimum height=1.65cm] at (0,-1.65) {$|\Phi^+\rangle_{BC}$};
\draw (0.7,0) -- (1.6,0);
\draw (0.7,-1) -- (1.6,-1);
\draw (1.6,0) -- (1.6,-1);
\fill (1.6,0) circle (0.065);
\draw (1.6,-1) circle (0.14);
\draw (1.46,-1) -- (1.74,-1);
\draw (1.6,-1.14) -- (1.6,-0.86);
\draw (1.6,0) -- (2.45,0);
\node[draw,minimum width=0.55cm,minimum height=0.5cm] (h) at (2.75,0) {$H$};
\draw (h.east) -- (3.75,0);
\draw (1.74,-1) -- (3.75,-1);
\node[draw,minimum width=0.65cm,minimum height=0.5cm] (ma) at (4.1,0) {$M_Z$};
\node[draw,minimum width=0.65cm,minimum height=0.5cm] (mb) at (4.1,-1) {$M_Z$};
\node[above] at (4.65,0) {$a$};
\node[above] at (4.65,-1) {$b$};
\draw (0.7,-2.3) -- (5.35,-2.3);
\node[draw,minimum width=0.65cm,minimum height=0.55cm] (x) at (5.7,-2.3) {$X^b$};
\node[draw,minimum width=0.65cm,minimum height=0.55cm] (z) at (7,-2.3) {$Z^a$};
\draw (x.east) -- (z.west);
\draw[->] (z.east) -- (8,-2.3) node[right] {output $C$};
\draw[dashed,->] (mb.east) -- (5.7,-1) -- (x.north);
\draw[dashed,->] (ma.east) -- (7,0) -- (z.north);
\end{tikzpicture}
```

The order on $C$ is $X_C^b$ followed by $Z_C^a$, so its correction operator
is $Z_C^aX_C^b$. The circuit illustrates the procedure and does not replace
its definition or the independent algebraic correctness argument.
