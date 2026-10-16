---
id: lem-qc-x-cnot-toffoli-and-fredkin-are-involutions
kind: lemma
title: "X, CNOT, Toffoli, and Fredkin are involutions"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-pauli-matrices
  - def-qc-cnot-and-control-target-order
  - def-qc-toffoli-and-fredkin
  - def-qc-circuit-denotational-semantics
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2, printed pp.14–19: CNOT and Toffoli basis actions; Fredkin decomposition checked directly here."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.1.2, printed pp.14–15: X, CNOT, Toffoli and reversible computation."
---

## Statement

On the ordered computational basis, $X$, CNOT, Toffoli $T$, and Fredkin $F$ are involutions. Their linear extensions are unitary. With chronological order meaning the gates are applied in the written order, Fredkin is implemented by CNOT$(a,b)$, then $T(c,b,a)$, then CNOT$(a,b)$.

## Facts & Assumptions

**Given:** The displayed gate actions and the ordered tensor-product computational basis. Prove involutivity, unitarity, and the stated Fredkin implementation.

[F5] [[def-qc-pauli-matrices]]: In the ordered computational basis, $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$.

[F1] [[def-qc-cnot-and-control-target-order]]: In the ordered two-qubit basis, $\operatorname{CNOT}_{1\to2}|a,t\rangle=|a,t\mathbin{\oplus}a\rangle$.

[F2] [[def-qc-toffoli-and-fredkin]]: $T|a,b,t\rangle=|a,b,t\oplus ab\rangle$; $F|0,a,b\rangle=|0,a,b\rangle$ and $F|1,a,b\rangle=|1,b,a\rangle$.

[F3] [[thm-qc-computational-basis-orthonormal]]: For every $d\ge1$, the ordered computational basis of $Q_d$ is an orthonormal basis for its declared inner product.

[F4] [[lem-qc-tensor-product-basis-and-dimension]]: The elementary tensors of specified ordered orthonormal factor bases, in lexicographic order, form an orthonormal basis of the tensor register.

[F6] [[def-qc-circuit-denotational-semantics]]: A chronological list of layers $L_1,\ldots,L_d$, with $L_1$ applied first, denotes $U_{L_d}\cdots U_{L_1}$.

## Proof

1.1 The matrix in [F5] sends $|t\rangle$ to $|t\oplus1\rangle$. Applying it twice sends $t$ to $t\oplus1\oplus1=t$, so $X^2=I$. [given, F5, algebra]

1.2 By [F1], applying CNOT twice sends $|a,t\rangle$ to $|a,t\oplus a\oplus a\rangle=|a,t\rangle$, so $\operatorname{CNOT}^2=I$. [given, F1, algebra]

1.3 Applying $T$ twice leaves $a,b$ unchanged and sends $t$ to $t\oplus ab\oplus ab=t$. Thus $T^2=I$. [given, F2, algebra]

1.4 When the Fredkin control is $0$, each application fixes $(a,b)$. When it is $1$, each application swaps $a,b$ and leaves the control unchanged. In either case two applications restore all three bits, so $F^2=I$. [given, F2, choose]

2.1 The four maps permute the ordered orthonormal computational basis by [F1]–[F5]. A permutation of an orthonormal basis preserves inner products, so each linear extension is unitary; by Steps 1.1–1.4 each is its own inverse. [step 1.1, step 1.2, step 1.3, step 1.4, F1, F2, F3, F4, F5, algebra]

3.1 Apply the gates chronologically as prescribed by [F6] to $|c,a,b\rangle$. After CNOT$(a,b)$ the last two bits are $(a,b\oplus a)$. If $c=0$, Toffoli does nothing and the last CNOT restores $(a,b)$. If $c=1$, Toffoli changes its target to $a\oplus(b\oplus a)=b$, and the last CNOT changes the other bit to $(b\oplus a)\oplus b=a$. Thus the output is $|c,a,b\rangle$ for $c=0$ and $|c,b,a\rangle$ for $c=1$, exactly the Fredkin action. [given, F1, F2, F6, choose, algebra] ∎
