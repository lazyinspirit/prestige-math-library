---
id: thm-qc-stabilizer-projector-rank-and-code-dimension
kind: theorem
title: Stabilizer projector rank and code dimension
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-stabilizer-subgroup
  - lem-qc-stabilizer-subgroup-label-space-and-order
  - lem-qc-stabilizer-maximal-isotropic-self-dual
  - lem-qc-stabilizer-average-projector
  - def-qc-pauli-matrices
  - def-qc-pauli-group-on-zero-qubits
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-tensor-map
  - def-qc-tensor-register-and-permutation
  - def-trace-of-a-square-matrix
  - def-trace-of-an-endomorphism
  - lem-trace-of-an-idempotent-is-the-dimension-of-its-image
  - lem-finite-sum-reindexing-and-fubini
justified_by: []
dependency_level: 13
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14 §14.3
      url: https://jhwatrous.github.io/UQIC.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $S$ be a stabilizer subgroup on $n$ qubits of rank $r$, and let $\Pi_S$
be its fixed-space projector. Then

$$\operatorname{Tr}(\Pi_S)=\dim_{\mathbb C}\operatorname{im}\Pi_S =\frac{2^n}{|S|}=2^{n-r}.$$

In particular, if $r=n$, then $\mathcal C(S)$ is one-dimensional; for
arbitrary $r$ it is the $2^{n-r}$-dimensional stabilizer code space.

## Facts & Assumptions

**Given:** An $n$-qubit stabilizer subgroup $S$ of rank $r$.

[F1] [[lem-qc-stabilizer-average-projector]]: $\Pi_S$ is an idempotent whose
image is $\mathcal C(S)$.

[F2] [[lem-qc-stabilizer-subgroup-label-space-and-order]]: $|S|=2^r$, and
the identity is the unique element with zero binary label.

[F3] [[def-qc-pauli-matrices]]: in the ordered computational basis,
$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and
$Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

[F4] [[def-qc-phase-aware-n-qubit-pauli-group]]: for $n\ge1$,
$P(k,x,z)=i^kX^xZ^z$ in the fixed tensor order.

[F5] [[def-qc-tensor-map]]: tensor products of operators act factorwise on
elementary tensor vectors.

[F6] [[def-qc-tensor-register-and-permutation]]: the ordered computational
basis is the lexicographically ordered product basis of the tensor factors,
and the zero-qubit register is $\mathbb C$.

[F7] [[def-qc-pauli-group-on-zero-qubits]] and
[[def-qc-stabilizer-subgroup]]: when $n=0$, the only stabilizer subgroup
element is $I_{\mathbb C}$.

[F8] [[def-trace-of-a-square-matrix]] and
[[def-trace-of-an-endomorphism]]: trace is the finite sum of diagonal
coefficients in a basis.

[F9] [[lem-trace-of-an-idempotent-is-the-dimension-of-its-image]]: for an
idempotent on a finite-dimensional complex space, its trace is its image
dimension viewed as a scalar.

[F10] [[lem-qc-stabilizer-maximal-isotropic-self-dual]]: an isotropic
stabilizer label space of dimension $r$ satisfies $r\le n$.

[F11] [[lem-finite-sum-reindexing-and-fubini]]: a finite sum indexed by a
Cartesian product may be evaluated as iterated finite sums.

## Proof

**Given:** The data in the Statement.

1.1 By [F1], [F2], and [F10], $0\le r\le n$ and $\operatorname{Tr}(\Pi_S)=|S|^{-1}\sum_{g\in S}\operatorname{Tr}(g)$. For $n>0$, the identity is $I^{\otimes n}$. In the ordered product basis [F5]–[F6], its trace is a sum over bit words; [F11] factors this finite sum into the product of its one-qubit diagonal sums, each equal to $2$. Thus its trace is $2^n$. When $n=0$, [F6]–[F8] give trace $1=2^0$. For $n>0$, every other $g\in S$ has nonzero binary label by [F2], hence at least one nonidentity tensor factor. By [F4] that factor is a scalar multiple of $X$, $Z$, or $XZ$. For any tensor Pauli, its trace is the sum over bit words of products of one-qubit diagonal coefficients; [F11] factors this finite sum into the product of the one-qubit traces. By [F3], $X$ and $XZ$ are off-diagonal, while $Z$ has diagonal entries $1,-1$, so the nonidentity factor has trace zero. Hence every such $g$ has trace zero. Therefore $\operatorname{Tr}(\Pi_S)=2^n/|S|=2^{n-r}$. [F1, F2, F3, F4, F5, F6, F7, F8, F10, F11, given, algebra]

2.1 As $\Pi_S$ is idempotent, [F9] gives $\operatorname{Tr}(\Pi_S)=\dim_{\mathbb C}\operatorname{im}\Pi_S$. Combining with step 1.1 proves the dimension formula, including $r=0$ and $r=n$. [F1, F9, step 1.1]

3.1 When $r=n$, step 2.1 gives a one-dimensional common fixed space, so the space is nonzero and all of its nonzero vectors determine the same ray. This is the existence and uniqueness assertion used in the definition of a pure stabilizer state. [step 2.1, algebra] ∎

## Sources

Watrous Lesson 14 §14.3, printed pp. 420–422 (PDF pp. 426–428), expands
commuting stabilizer projectors and computes code-space dimension. De Wolf
§20.3, PDF pp. 187–188,
gives the rank-$n$ stabilizer-state and projector calculation. The local proof
keeps the binary-label injectivity, finite tensor trace factorization, and
trace-zero cases explicit.
