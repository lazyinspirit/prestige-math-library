---
id: thm-qc-isometry-completion-and-synthesis
kind: theorem
title: Isometry Completion and Synthesis
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - alg-qc-isometry-unitary-completion
  - thm-qc-exact-arbitrary-unitary-qsd-upper-bound
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-real-and-complex-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-rank-nullity
  - def-qc-ordered-bitstring-encoding
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 1
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Statement

For integers $1\le D\le M$, every exact isometry $V:\mathbb C^D\to\mathbb C^M$ is completed by [[alg-qc-isometry-unitary-completion]] to a unitary matrix $W$ whose first $D$ columns are those of $V$. If integers $0\le n\le w$ satisfy $D=2^n$ and $M=2^w$, the full unitary $W\Pi$ acts as $V$ on the clean-input subspace $|x\rangle|0^{w-n}\rangle$. By the exact QSD theorem [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]], for $w\ge2$ this uses at most $\frac{23}{48}4^w-\frac32 2^w+\frac43$ CNOT gates plus one-qubit gates; for $w=1$ it uses no CNOT gates. When $w=0$, necessarily $n=0$ and $W\Pi$ is a scalar on $\mathbb C$. The matrix completion remains valid, but the stated circuit syntax has no zero-arity gates, so the empty circuit realizes only the identity; exact circuit synthesis at width zero is asserted only when $V=I$. For $w\ge1$, QSD is applied directly to $W\Pi$, without synthesizing $W$ and an extra permutation circuit separately. The $M$ output coordinates are retained: extra output wires may contain part of the encoded state and are not required to return to zero. No classical synthesis bit-time bound is asserted.

## Facts & Assumptions

**Given:** An exact matrix $V$ with orthonormal columns, ordered qubit bases when $D$ and $M$ are powers of two, ideal exact arithmetic, and the exact QSD theorem described below.

[F1] [[alg-qc-isometry-unitary-completion]] initializes its list with the columns of $V$ and appends each nonzero residual $e_j-\sum_{w\in L}\langle e_j,w\rangle_{\mathrm{root}}w$ after normalization.

[F2] The root inner product is linear in its first argument, conjugate-linear in its second, and induces the norm ([[def-real-and-complex-inner-product-space]]).

[F3] The ordered bit-string encoding is big-endian: $|x\rangle$ has index $\operatorname{enc}_n(x)$ and the word $0^{w-n}x$ has that same index at width $w$ ([[def-qc-ordered-bitstring-encoding]]).

[F4] A finite-dimensional unitary is an invertible linear isometry, and a square norm-preserving operator is unitary ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[F5] An injective endomorphism of a finite-dimensional vector space is surjective ([[thm-rank-nullity]]).

[F6] Every gate has positive arity, so every layer on zero wires is empty and every zero-wire circuit denotes the identity ([[def-qc-circuit-syntax-and-register-order]], [[def-qc-circuit-denotational-semantics]]).

[A1] [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]] proves the exact no-ancilla QSD CNOT bound, including terminal diagonal extraction and migration, and treats widths zero and one separately.

## Proof

**Given:** As in Facts & Assumptions.

1.1 The initial list is orthonormal by the input hypothesis. If the current list is orthonormal, then for each $w_i\in L$ the residual satisfies $\langle r_j,w_i\rangle=\langle e_j,w_i\rangle-\sum_{w\in L}\langle e_j,w\rangle\langle w,w_i\rangle=0$ by [F2] and orthonormality. If it is nonzero, division by its positive norm gives a unit vector orthogonal to every previous column; if it is zero, $e_j$ already lies in their span. Thus each update preserves orthonormality and puts $e_j$ in the span of the updated list. [F1, F2, given, algebra, cases]

2.1 After the finite loop, every standard basis vector $e_j$ lies in the final span by step 1.1. The standard basis spans $\mathbb C^M$, so the final orthonormal list spans $\mathbb C^M$ and has exactly $M$ vectors. If $z=\sum_{j=1}^M c_jw_j$ is its expansion in that list, orthonormality and [F2] give $\|z\|_2^2=\sum_j|c_j|^2$; the same coordinate calculation for the standard basis gives $\|Wc\|_2^2=\sum_j|c_j|^2$. Thus the column map $W$ preserves norms and is injective by [F4]. By [F5] it is surjective in finite dimension, hence invertible; as a square norm-preserving map it is unitary by [F4]. Its first $D$ columns are the original list, namely $V$. [F2, F4, F5, step 1.1, algebra]

3.1 For $D=2^n$, $M=2^w$, [F3] identifies $|0^{w-n}\rangle|x\rangle$ with the standard basis vector $e_{\operatorname{enc}_n(x)}$ among the first $D$ vectors. The declared permutation obeys $\Pi(|x\rangle|0^{w-n}\rangle)=|0^{w-n}\rangle|x\rangle$. The first $D$ columns of $W$ then give $(W\Pi)(|x\rangle|0^{w-n}\rangle)=V|x\rangle$ for every computational basis input $x$; linearity gives the identity on the entire clean-input subspace. [F1, F3, step 2.1, algebra]

4.1 For $w\ge1$, $W\Pi$ is a unitary on a positive-width register, so applying the QSD interface [A1] directly to this matrix gives the stated CNOT bound, with its one-qubit case at $w=1$. The permutation is absorbed into the target matrix before synthesis, so no separate permutation gate count is added. If $w=0$, then $n=0$ and $W\Pi=V$ is a scalar on $\mathbb C$. By [F6], the only zero-wire circuit denotes $1$, so a circuit realizes this scalar exactly only when $V=I$; the matrix completion of steps 1.1–3.1 does not itself claim a general zero-width synthesis. The construction places no condition on the $M$ output coordinates beyond the isometry equation, so it makes no claim that the extra output wires are clean. [A1, F6, step 3.1, given] ∎
