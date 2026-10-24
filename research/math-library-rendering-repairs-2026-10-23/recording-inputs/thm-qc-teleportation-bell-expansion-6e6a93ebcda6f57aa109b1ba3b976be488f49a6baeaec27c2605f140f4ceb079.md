---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-qc-teleportation-bell-expansion.json
  precheck: pass
id: thm-qc-teleportation-bell-expansion
kind: theorem
title: Teleportation Bell-basis expansion
status: published
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


## Remarks

The circuit reads from left to right in wire order $A,B,C$. The Bell-resource
box supplies the input on $B,C$; it is not a preparation gate. The filled dot
and circled plus are the control and target of CNOT. Only the encoding
unitary $V_{AB}$ is drawn: there is no measurement or receiver correction.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\node at (3,0.7) {$V_{AB}$};
\node[anchor=east] at (0.65,0) {$|\psi\rangle_A$};
\node[draw,minimum width=1.4cm,minimum height=1.7cm] at (0,-1.5) {$|\Phi^+\rangle_{BC}$};
\draw (0.7,0) -- (1.6,0);
\draw (0.7,-1) -- (1.6,-1);
\draw (1.6,0) -- (1.6,-1);
\fill (1.6,0) circle (0.065);
\draw (1.6,-1) circle (0.14);
\draw (1.46,-1) -- (1.74,-1);
\draw (1.6,-1.14) -- (1.6,-0.86);
\draw (1.6,0) -- (2.65,0);
\node[draw,minimum width=0.6cm,minimum height=0.5cm] (h) at (2.95,0) {$H$};
\draw[->] (h.east) -- (5,0) node[right] {$A$};
\draw[->] (1.74,-1) -- (5,-1) node[right] {$B$};
\draw[->] (0.7,-2) -- (5,-2) node[right] {$C$};
\node at (2.4,-2.75) {Coefficients in the coherent expansion};
\node at (-0.1,-3.4) {$ab$};
\node at (1.2,-3.4) {$00$};
\node at (2.6,-3.4) {$01$};
\node at (4,-3.4) {$10$};
\node at (5.4,-3.4) {$11$};
\node at (-0.1,-4.1) {$2c_{ab}$};
\node at (1.2,-4.1) {$|\psi\rangle$};
\node at (2.6,-4.1) {$X|\psi\rangle$};
\node at (4,-4.1) {$Z|\psi\rangle$};
\node at (5.4,-4.1) {$XZ|\psi\rangle$};
\end{tikzpicture}
```

Here $c_{ab}$ is the vector on $C$ multiplying $|ab\rangle_{AB}$ in the
output, so $c_{ab}=\tfrac12X_C^bZ_C^a|\psi\rangle_C$. The table records
coherent coefficients, not conditional measurement states. In particular,
the $11$ entry is $XZ|\psi\rangle$, with $Z$ acting first. The subsequent
teleportation procedure applies $X^b$ and then $Z^a$, giving the inverse
product $Z^aX^b$. The figure illustrates the identity; the proof above
establishes it independently.
