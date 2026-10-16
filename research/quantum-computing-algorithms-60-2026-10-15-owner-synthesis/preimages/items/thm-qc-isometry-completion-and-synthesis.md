---
id: thm-qc-isometry-completion-and-synthesis
kind: theorem
title: Isometry Completion and Synthesis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - alg-qc-isometry-unitary-completion
  - thm-qc-exact-arbitrary-unitary-qsd-upper-bound
  - def-real-and-complex-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-rank-nullity
  - def-qc-ordered-bitstring-encoding
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 1
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Statement

For integers $1\le D\le M$, every exact isometry $V:\mathbb C^D\to\mathbb C^M$ is completed by [[alg-qc-isometry-unitary-completion]] to a unitary matrix $W$ whose first $D$ columns are those of $V$. If integers $0\le n\le w$ satisfy $D=2^n$ and $M=2^w$, the full unitary $W\Pi$ acts as $V$ on the clean-input subspace $|x\rangle|0^{w-n}\rangle$. Under the declared exact QSD interface [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]], for $w\ge2$ this uses at most $\frac{23}{48}4^w-\frac32 2^w+\frac43$ CNOT gates plus one-qubit gates; for $w=0$ or $w=1$ the small-width cases use no CNOT gates. It does not synthesize $W$ and an extra permutation circuit separately. The $M$ output coordinates are retained: extra output wires may contain part of the encoded state and are not required to return to zero. No classical synthesis bit-time bound is asserted.

## Facts & Assumptions

**Given:** An exact matrix $V$ with orthonormal columns, ordered qubit bases when $D$ and $M$ are powers of two, ideal exact arithmetic, and the planned QSD interface described below.

[F1] [[alg-qc-isometry-unitary-completion]] initializes its list with the columns of $V$ and appends each nonzero residual $e_j-\sum_{w\in L}\langle e_j,w\rangle_{\mathrm{root}}w$ after normalization.

[F2] The root inner product is linear in its first argument, conjugate-linear in its second, and induces the norm ([[def-real-and-complex-inner-product-space]]).

[F3] The ordered bit-string encoding is big-endian: $|x\rangle$ has index $\operatorname{enc}_n(x)$ and the word $0^{w-n}x$ has that same index at width $w$ ([[def-qc-ordered-bitstring-encoding]]).

[F4] A finite-dimensional unitary is an invertible linear isometry, and a square norm-preserving operator is unitary ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[F5] An injective endomorphism of a finite-dimensional vector space is surjective ([[thm-rank-nullity]]).

[A1] The current draft supplier [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]] states the exact no-ancilla QSD bound, but its proof leaves the terminal diagonal-extraction identity as an explicit unverified assumption. The synthesis conclusion here is conditional on that full supplier claim; no acceptance is asserted.

## Proof

**Given:** As in Facts & Assumptions.

1.1 The initial list is orthonormal by the input hypothesis. If the current list is orthonormal, then for each $w_i\in L$ the residual satisfies $\langle r_j,w_i\rangle=\langle e_j,w_i\rangle-\sum_{w\in L}\langle e_j,w\rangle\langle w,w_i\rangle=0$ by [F2] and orthonormality. If it is nonzero, division by its positive norm gives a unit vector orthogonal to every previous column; if it is zero, $e_j$ already lies in their span. Thus each update preserves orthonormality and puts $e_j$ in the span of the updated list. [F1, F2, given, algebra, cases]

2.1 After the finite loop, every standard basis vector $e_j$ lies in the final span by step 1.1. The standard basis spans $\mathbb C^M$, so the final orthonormal list spans $\mathbb C^M$ and has exactly $M$ vectors. If $z=\sum_{j=1}^M c_jw_j$ is its expansion in that list, orthonormality and [F2] give $\|z\|_2^2=\sum_j|c_j|^2$; the same coordinate calculation for the standard basis gives $\|Wc\|_2^2=\sum_j|c_j|^2$. Thus the column map $W$ preserves norms and is injective by [F4]. By [F5] it is surjective in finite dimension, hence invertible; as a square norm-preserving map it is unitary by [F4]. Its first $D$ columns are the original list, namely $V$. [F2, F4, F5, step 1.1, algebra]

3.1 For $D=2^n$, $M=2^w$, [F3] identifies $|0^{w-n}\rangle|x\rangle$ with the standard basis vector $e_{\operatorname{enc}_n(x)}$ among the first $D$ vectors. The declared permutation obeys $\Pi(|x\rangle|0^{w-n}\rangle)=|0^{w-n}\rangle|x\rangle$. The first $D$ columns of $W$ then give $(W\Pi)(|x\rangle|0^{w-n}\rangle)=V|x\rangle$ for every computational basis input $x$; linearity gives the identity on the entire clean-input subspace. [F1, F3, step 2.1, algebra]

4.1 The product $W\Pi$ is itself one $w$-qubit unitary, so applying the QSD interface [A1] directly to this matrix gives the stated full-unitary gate upper bound, with the $w=0,1$ cases treated separately. Because the permutation is absorbed into the target matrix before synthesis, no separate permutation gate count is added. The construction places no condition on the $M$ output coordinates beyond the isometry equation, so it makes no claim that the extra output wires are clean. [A1, step 3.1, given] ∎
