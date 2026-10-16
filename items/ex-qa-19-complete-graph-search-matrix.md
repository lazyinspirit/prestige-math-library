---
id: ex-qa-19-complete-graph-search-matrix
kind: example
title: Complete-graph search matrix and gap
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-19-complete-graph-spatial-search
  - lem-qa-19-hadamard-uniform-state-preparation
  - thm-qa-19-complete-graph-search-correctness
  - def-qa-19-graph-generator-conventions
  - def-qc-dirac-notation-conversion
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): finite graph-Hamiltonian convention; this matrix and its gap are computed locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: finite Hamiltonian evolution; this matrix and its gap are computed locally."
---

## Example

For the complete graph search instance with any finite $N\ge2$, let
$|w\rangle$ be the marked vertex and let $|r\rangle$ be the uniform vector on
the $N-1$ unmarked vertices. Compute the invariant $2\times2$ generator matrix
in the ordered basis $(|w\rangle,|r\rangle)$ and its eigenvalue gap. Include
the boundary case $N=2$. Also verify the supplied uniform preparation for
$N=2$ and $N=4$ against the one- and two-qubit Hadamard circuits.

## Facts & Assumptions
**Given:** $N\ge2$, the encoded complete-graph adjacency, marked projector,
and Hamiltonian $H=-A/N-P_w$ of the algorithm.

[F1] [[alg-qa-19-complete-graph-spatial-search]]: on the active label basis,
$A|x\rangle=\sum_{y\ne x}|y\rangle$, $P_w=|w\rangle\langle w|$, and
$H=-A/N-P_w$.

[F2] [[def-qa-19-graph-generator-conventions]]: symmetric graph adjacency is
Hermitian and the ordered vertex basis is fixed.

[F3] [[def-qc-dirac-notation-conversion]]: $|x\rangle\langle y|$ acts by
$z\mapsto\langle z,y\rangle x$.

[F4] [[def-qc-register-and-computational-basis]] and
[[thm-qc-computational-basis-orthonormal]]: distinct encoded labels are
orthonormal basis vectors.

[F5] [[thm-qa-19-complete-graph-search-correctness]]: with the supplied
uniform preparation, exact evolution under $H=-A/N-P_w$ at
$t=\pi\sqrt N/2$ gives marked-label probability exactly $1$.

[F6] [[lem-qa-19-hadamard-uniform-state-preparation]]: for $N=2^n$, the
standard-binary uniform state is $H^{\otimes n}|0^n\rangle$, with $n$
Hadamard gates when primitive.

## Verification

**Proof technique:** direct.

1.1 The $N-1$ unmarked encoded basis vectors are pairwise orthonormal by [F4], so $|r\rangle=(N-1)^{-1/2}\sum_{x\ne w}|x\rangle$ is unit and orthogonal to the unit vector $|w\rangle$. The uniform vector is $|s\rangle=N^{-1/2}|w\rangle+\sqrt{(N-1)/N}|r\rangle$, whose squared coefficient norms sum to $1$. [given, F4, choose, algebra]

2.1 By [F1], $A|w\rangle=\sum_{x\ne w}|x\rangle=\sqrt{N-1}|r\rangle$. For $|r\rangle$, each summand $A|x\rangle$ contains $|w\rangle$ once, so its $|w\rangle$ coefficient is $\sqrt{N-1}$; for each unmarked $y$, the sum contains $|y\rangle$ once for each $x\ne y,w$, hence $N-2$ times. Thus $A|r\rangle=\sqrt{N-1}|w\rangle+(N-2)|r\rangle$. [given, F1, step 1.1, algebra]

3.1 The two vectors span an invariant subspace for $A$ by step 2.1. By [F3], $P_w|w\rangle=|w\rangle$ and $P_w|r\rangle=0$, so $P_w$ also preserves this span. The symmetric adjacency is Hermitian by [F2], and the generator matrix is $H=\begin{pmatrix}-1&-\sqrt{N-1}/N\\-\sqrt{N-1}/N&-(N-2)/N\end{pmatrix}.$ [F1, F2, F3, step 2.1, algebra]

4.1 Put $K=H+(N-1)I/N$. Direct multiplication gives $K^2=I/N$, and $\operatorname{tr}K=0$. Equivalently, its characteristic polynomial is $\lambda^2-1/N$, so its eigenvalues are $\pm1/\sqrt N$. Therefore the eigenvalues of $H$ are $-(N-1)/N\pm1/\sqrt N$, and their gap is $2/\sqrt N$. [step 3.1, algebra]

5.1 At $N=2$, $|r\rangle$ is the single unmarked basis vector and the formula in step 3.1 becomes $H=\begin{pmatrix}-1&-1/2\\-1/2&0\end{pmatrix}$. The shifted matrix has eigenvalues $\pm1/\sqrt2$, so the gap is $\sqrt2$; all normalizations and denominators used above remain valid. [step 1.1, step 3.1, step 4.1, algebra]

5.2 For the uniform input $|s\rangle$ in step 1.1, [F5] gives marked-label probability $1$ after exact evolution at $t=\pi\sqrt N/2$. The invariant matrix and its gap were derived locally in steps 3.1–4.1. [F5, step 1.1, step 3.1, step 4.1]

6.1 Specialize to the standard binary encoding for $N=2$ and $N=4$. For $N=2$, the preparation is $H|0\rangle=(|0\rangle+|1\rangle)/\sqrt2$, which is the required uniform state with one Hadamard gate. For $N=4$, applying the second factor gives $H^{\otimes2}|00\rangle=(|00\rangle+|01\rangle+|10\rangle+|11\rangle)/2$, the required uniform state with two Hadamard gates. These are the $n=1,2$ cases of [F6]; no preparation or gate cost is inferred from the search matrix. [F1, F2, F6, algebra] ∎
