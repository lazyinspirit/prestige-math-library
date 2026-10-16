---
id: thm-qc-two-qubit-unitary-three-cnot-synthesis
kind: theorem
title: Exact Three-CNOT Synthesis of Two-Qubit Unitaries
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - thm-qc-two-qubit-cartan-decomposition
  - thm-qc-one-qubit-euler-decomposition
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-pauli-matrices
  - thm-qc-axis-rotation-pauli-formula
  - def-qc-cnot-and-control-target-order
  - thm-qc-computational-basis-orthonormal
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Farrokh Vatan and Colin Williams, Optimal quantum circuits for general two-qubit gates, arXiv:quant-ph/0308006v2"
      url: "https://arxiv.org/pdf/quant-ph/0308006"
    - title: "Vivek V. Shende, Igor L. Markov, and Stephen S. Bullock, Smaller Two-Qubit Circuits for Quantum Communication and Computation, NIST full-text publication"
      url: "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50704"
---

## Statement

Every $U\in U(4)$ has an exact circuit with no ancillas, at most three CNOT gates, and arbitrary one-qubit gates. The scalar phase is implemented as a one-qubit scalar gate and is not discarded.

## Facts & Assumptions

**Given:** Exact matrix semantics, both CNOT orientations, and the Cartan decomposition.

[F1] [[thm-qc-two-qubit-cartan-decomposition]]: $U=e^{i\delta}(A\otimes B)N(a,b,c)(C\otimes D)$, where $N(a,b,c)=e^{i(aX\otimes X+bY\otimes Y+cZ\otimes Z)}$ and $A,B,C,D\in SU(2)$.

[F2] [[thm-qc-one-qubit-euler-decomposition]]: every $SU(2)$ factor and every scalar one-qubit unitary has an exact Euler realization using the QC7 rotation convention.

[F3] [[thm-qc-axis-rotation-pauli-formula]]: $R_{\mathbf n}(t)=\cos(t/2)I-i\sin(t/2)(\mathbf n\cdot\boldsymbol\sigma)$ for real unit $\mathbf n$.

[F4] [[def-qc-pauli-matrices]]: $X,Y,Z$ are the displayed Pauli matrices in the ordered computational basis.

[F5] [[def-qc-cnot-and-control-target-order]]: the first-wire-control CNOT maps $|a,t\rangle$ to $|a,t\oplus a\rangle$; its wire order is part of the definition.

[F6] [[def-qc-circuit-denotational-semantics]]: chronological circuit layers $L_1,\ldots,L_d$ denote the exact matrix product $U_{L_d}\cdots U_{L_1}$.

[F7] [[def-qc-elementary-circuit-resources]]: size and gate costs count the occurrences declared in the explicit operation model; gate access is not inferred from a matrix alone.

[F8] [[thm-qc-computational-basis-orthonormal]]: the ordered two-qubit computational basis is orthonormal.

## Proof



1.1 The Pauli matrices in [F4] give commuting products $XX,YY,ZZ$. On the even-parity subspace with ordered basis $(|00\rangle,|11\rangle)$, $XX$ and $YY$ restrict to $X$ and $-X$, while $ZZ$ restricts to $I$. Hence $N$ restricts there to $e^{ic}e^{i(a-b)X}$, whose entries are $e^{ic}\cos(a-b)$ on the diagonal and $ie^{ic}\sin(a-b)$ off diagonal. On the odd-parity basis $(|01\rangle,|10\rangle)$, $XX$ and $YY$ both restrict to $X$ and $ZZ$ restricts to $-I$, so the block is $e^{-ic}e^{i(a+b)X}$. These two blocks give $N(a,b,c)=\begin{pmatrix}e^{ic}\cos(a-b)&0&0&ie^{ic}\sin(a-b)\\0&e^{-ic}\cos(a+b)&ie^{-ic}\sin(a+b)&0\\0&ie^{-ic}\sin(a+b)&e^{-ic}\cos(a+b)&0\\ie^{ic}\sin(a-b)&0&0&e^{ic}\cos(a-b)\end{pmatrix}.$ In basis $00,01,10,11$, the two CNOT orientations are $C_{12}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix},\qquad C_{21}=\begin{pmatrix}1&0&0&0\\0&0&0&1\\0&0&1&0\\0&1&0&0\end{pmatrix}.$ Here $C_{12}$ is the gate from [F5] and $C_{21}$ is obtained by interchanging the wire names. Both displayed permutations are unitary because they permute the orthonormal basis in [F8]. Using [F3] with the Pauli matrices [F4] gives the QC7 rotation convention in [F2]; multiplication of those rotations and the displayed CNOT permutations gives exactly $N(a,b,c)=e^{i\pi/4}(R_z(\pi/2)\otimes I)C_{21}(I\otimes R_y(\pi/2-2b))C_{12}(R_z(\pi/2-2c)\otimes R_y(2a-\pi/2))C_{21}(I\otimes R_z(-\pi/2)).$ All entries agree with the two parity blocks above; thus this is an exact identity, including its scalar. [given, F1, F2, F3, F4, F5, F8, algebra]

2.1 The factorization in step 1.1 uses three CNOTs and otherwise one-qubit rotations. By [F2], the local factors $A,B,C,D$ and the scalar $e^{i\delta}$ in [F1] have exact one-qubit implementations; $e^{i\delta}I_4=(e^{i\delta}I_2)\otimes I_2$. The circuit product [F6] therefore equals the written factorization exactly, and [F7] counts three CNOT occurrences and no additional wires. [step 1.1, F1, F2, F6, F7, algebra] ∎
