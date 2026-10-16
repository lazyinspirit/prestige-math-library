---
id: thm-qa-exact-binary-qft-circuit-correct
kind: theorem
title: Exact binary QFT circuit correctness
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps: [alg-qa-exact-binary-qft-circuit, lem-qa-binary-qft-product-factorization, def-qa-cyclic-quantum-fourier-transform, def-qa-qft-gate-cost-model, def-qc-dirac-notation-conversion, def-qc-tensor-register-and-permutation, def-qc-inverse-unitary-access, def-qc-circuit-denotational-semantics, lem-qc-local-gate-wire-embedding]
axiom_use: "No choice axiom is used; the proof checks a specified finite basis and extends linearly."
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

For every $n\ge0$, the exact binary circuit of [[alg-qa-exact-binary-qft-circuit]] implements [[def-qa-cyclic-quantum-fourier-transform]] at $N=2^n$: it maps each computational basis vector $|x\rangle$, $0\le x<2^n$, to

$$2^{-n/2}\sum_{y=0}^{2^n-1}e^{2\pi ixy/2^n}|y\rangle,$$

with the declared output register order. Hence its denotation is $\operatorname{QFT}_{2^n}$ on every state. Reversing the gate list and replacing every gate by its adjoint gives the negative-sign inverse QFT with the same ideal gate count.

## Facts & Assumptions

**Given:** An integer $n\ge0$, an $n$-wire ordered computational register, and the exact circuit of [[alg-qa-exact-binary-qft-circuit]].

[F1] On a basis input $x=\sum_i x_i2^i$, the QFT output factors as $R_0\otimes\cdots\otimes R_{n-1}$ in the ordered output wires; before the final reversal it is $R_{n-1}\otimes\cdots\otimes R_0$ ([[lem-qa-binary-qft-product-factorization]]).

[F2] $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ and $\mathrm{CP}_s=\operatorname{diag}(1,1,1,e^{2\pi i/2^s})$ in control-first basis order ([[def-qa-qft-gate-cost-model]]).

[F3] Ordered tensor factors retain the displayed wire order, and the final wire permutation reverses the corresponding product-basis factors ([[def-qc-tensor-register-and-permutation]]).

[F4] A ket denotes its vector and standard coordinate kets are the corresponding coordinate vectors ([[def-qc-dirac-notation-conversion]]).

[F5] Inverse access to a chronological unitary list reverses the order and replaces each gate by its adjoint ([[def-qc-inverse-unitary-access]]).

[F6] A unitary on a specified ordered tuple of wires has a unique unitary global embedding that acts as that unitary on those wires and as the identity on the others ([[lem-qc-local-gate-wire-embedding]]).

[L1] The positive-sign QFT is the inverse of the negative-sign unitary DFT, so its inverse uses the negative-sign convention ([[def-qa-cyclic-quantum-fourier-transform]]).

[A1] [[def-qc-circuit-denotational-semantics]] must identify a chronological gate list with its ordered operator product and specify the embedding of each gate on the register. Its assigned item body is absent.

## Proof

**Proof technique:** direct.

**Given:** The basis input and circuit above.

1.1 Fix a basis input $|x_{n-1}\cdots x_0\rangle$. In the descending loop, before the step targeting $q_j$, every lower wire $q_i$ with $i<j$ is still in its original basis state $|x_i\rangle$: earlier gates targeted only higher wires, and the lower wires occur only as controls, which the diagonal controlled-phase matrix in [F2] leaves unchanged. The local embedding action [F6] therefore leaves those control bits unchanged. The Hadamard on $q_j$ contributes relative phase $(-1)^{x_j}=e^{2\pi i x_j/2}$, while the controlled phases from lower controls contribute $e^{2\pi i\sum_{i<j}x_i2^{-(j-i+1)}}$. Thus target $q_j$ has state $R_j$. The state before the final swaps is $R_{n-1}\otimes\cdots\otimes R_0$. The tensor order and coordinate-ket convention are [F3] and [F4]; interpreting this finite gate trace as the circuit's operator product requires [A1]. [given, F2, F3, F4, F6, A1, algebra]

2.1 The final swaps reverse those ordered factors by [F3], producing $R_0\otimes\cdots\otimes R_{n-1}$; [F1] identifies this with the positive-sign Fourier output on $|x\rangle$. Therefore the circuit agrees with $\operatorname{QFT}_{2^n}$ on every basis vector, including the empty-register case $n=0$. [given, F1, F3, A1, step 1.1, algebra]

3.1 Both the circuit denotation and $\operatorname{QFT}_{2^n}$ are linear operators by [A1], so equality on the standard basis [F4] implies equality on every finite linear combination of basis vectors. Reversing the gate sequence and taking adjoints is its inverse by [F5]; the reverse list has the same number of gates, and each adjoint is still a Hadamard, controlled phase of opposite angle, or SWAP. Thus the inverse QFT has the same ideal gate count and uses the negative-sign convention by [L1]. [given, F4, F5, L1, A1, step 2.1] ∎
