---
id: lem-qc-unoptimized-qsd-recursive-decomposition-and-count
kind: lemma
title: "Unoptimized recursive QSD decomposition and CNOT count"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - thm-qc-cosine-sine-block-decomposition
  - lem-qc-two-unitary-block-demultiplexing
  - lem-qc-multiplexed-axis-rotation-gray-code
  - lem-qc-multiplexed-rz-gray-code
  - thm-qc-two-qubit-unitary-three-cnot-synthesis
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-polar-form-with-unique-principal-argument
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5"
      url: "https://arxiv.org/pdf/quant-ph/0406176"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For every $n\ge2$, the recursive cosine-sine/demultiplexing construction gives an exact no-ancilla circuit for any $n$-qubit unitary. At each nonterminal level, split off the first wire as target and let the recursive children act on the remaining contiguous wire interval; the node uses four recursive $(n-1)$-qubit unitaries, one multiplexed $R_y$, and two multiplexed $R_z$ rotations, each with $n-1$ controls. If $c_n$ is the construction's CNOT count, then $c_2\le3$ and
$$c_n\le4c_{n-1}+3\cdot2^{n-1}\quad(n\ge3),\qquad c_n\le\frac9{16}4^n-\frac32 2^n.$$
This is the unoptimized recursive count; it does not include cross-block cancellations or terminal diagonal extraction and makes no compilation-time or finite-precision claim.

## Facts & Assumptions

**Given:** Exact matrix semantics, arbitrary one-qubit rotations, CNOT gates, the cosine-sine block decomposition, and two-block demultiplexing.

[F1] [[thm-qc-cosine-sine-block-decomposition]] factors an even-dimensional unitary into two block-diagonal unitaries and a central block $\begin{pmatrix}C_0&-S_0\\S_0&C_0\end{pmatrix}$ with nonnegative diagonal entries satisfying $C_0^2+S_0^2=I$.

[F2] [[lem-qc-two-unitary-block-demultiplexing]] factors each two-block unitary into two identical smaller unitaries surrounding a diagonal two-block factor $\operatorname{diag}(D,D^*)$.

[F3] [[lem-qc-multiplexed-axis-rotation-gray-code]] exactly synthesizes a multiplexed $R_y$ with $2^k$ CNOTs for $k>0$.

[F4] [[lem-qc-multiplexed-rz-gray-code]] exactly synthesizes a multiplexed $R_z$ with $2^k$ CNOTs for $k>0$.

[F5] [[thm-qc-two-qubit-unitary-three-cnot-synthesis]] supplies an exact no-ancilla synthesis of every two-qubit unitary with at most three CNOTs and arbitrary one-qubit gates. Its direct matrix identity for the nonlocal two-qubit factor was inspected; this base case does not require expanding arbitrary one-qubit gates into a smaller primitive rotation alphabet.

[F6] [[thm-sine-and-cosine-parametrize-the-unit-circle]] supplies an angle for each nonnegative pair $(c,s)$ with $c^2+s^2=1$.

[F7] [[thm-polar-form-with-unique-principal-argument]] gives a real argument for each unit complex diagonal entry of $D$.

[F8] [[def-qc-circuit-syntax-and-register-order]] fixes the ordered gate/layer syntax; [[def-qc-circuit-denotational-semantics]] gives the exact chronological matrix product; [[def-qc-elementary-circuit-resources]] counts CNOT occurrences.

## Proof


1.1 Apply [F1] to a $2^n$-dimensional unitary, splitting the first wire from the remaining contiguous $n-1$ wires. The central block acts on each select word $x$ by $\begin{pmatrix}c_x&-s_x\\s_x&c_x\end{pmatrix}$. By [F6], choose $\phi_x$ with $c_x=\cos\phi_x$ and $s_x=\sin\phi_x$; this block is the $R_y(2\phi_x)$ convention used by [F3]. Thus the central block is one $(n-1)$-control multiplexed $R_y$ targeting the first wire. [given, F1, F3, F6, algebra]

1.2 Apply [F2] to each of the two block-diagonal factors from [F1]. Each factor becomes two $(n-1)$-qubit unitaries on the remaining contiguous interval and one $\operatorname{diag}(D,D^*)$. For each computational select word $x$, write the diagonal entry $D_{xx}=e^{i\alpha_x}$ using [F7]. Its action on the first wire is $\operatorname{diag}(e^{i\alpha_x},e^{-i\alpha_x})=R_z(-2\alpha_x)$, so this middle factor is one $(n-1)$-control multiplexed $R_z$. Therefore the recursive circuit has four $(n-1)$-qubit calls and three multiplexed rotations in total. Their exact products compose as claimed by [F8]. [F1, F2, F4, F7, F8, algebra]

1.3 At $n=2$, [F5] gives $c_2\le3$. For $n\ge3$, the four recursive calls contribute at most $4c_{n-1}$ CNOTs. Each of the three $(n-1)$-control multiplexed rotations contributes $2^{n-1}$ CNOTs by [F3] and [F4], giving $c_n\le4c_{n-1}+3\cdot2^{n-1}$. [F3, F4, F5, F8, construct, algebra]

2.1 The claimed closed bound equals $3$ at $n=2$. If it holds at $n-1$, then $$4\left(\frac9{16}4^{n-1}-\frac32 2^{n-1}\right)+3\cdot2^{n-1}=\frac9{16}4^n-\frac32 2^n,$$ so induction proves the formula for every $n\ge2$. No further gate cancellations are used. [step 1.3, induction, algebra] ∎

