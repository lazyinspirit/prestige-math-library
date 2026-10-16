---
id: lem-qc-stabilizer-average-projector
kind: lemma
title: Stabilizer average is the fixed-space projector
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-stabilizer-subgroup
  - def-qc-dirac-notation-conversion
  - def-matrix-product-and-identity-matrix
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - lem-qc-stabilizer-subgroup-label-space-and-order
justified_by: []
dependency_level: 12
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14 §14.3
      url: https://jhwatrous.github.io/UQIC.pdf
---

## Statement

For a stabilizer subgroup $S$ on $n$ qubits, the finite operator average

$$\Pi_S:=\frac{1}{|S|}\sum_{g\in S}g$$

is self-adjoint and idempotent, and its image is exactly the common $+1$ fixed
space $\mathcal C(S)$. If this image is the span of a unit vector $\psi$, then
$\Pi_S=|\psi\rangle\langle\psi|$ under the root-linear-first Dirac convention.

## Facts & Assumptions

**Given:** A finite abelian stabilizer subgroup $S$ of Hermitian Pauli operators.

[F1] [[def-qc-stabilizer-subgroup]]: each $g\in S$ is Hermitian and the group is closed under multiplication and inverses.

[F2] [[lem-qc-stabilizer-subgroup-label-space-and-order]]: $S$ is finite, $|S|=2^{\operatorname{rank}(S)}$, and its identity occurs once in the sum.

[F3] [[def-matrix-product-and-identity-matrix]]: multiplication is associative and the identity acts on both sides.

[A1] [[def-qc-dirac-notation-conversion]]: in the root-linear-first convention, $|x\rangle\langle y|$ acts by $z\mapsto\langle z,y\rangle_{\rm root}x$.

## Proof

**Given:** The data in the Statement.

1.1 Since every $g$ is Hermitian, $\Pi_S^\dagger=\Pi_S$. In the product $\Pi_S^2=|S|^{-2}\sum_{g,h\in S}gh$, each $k\in S$ occurs exactly $|S|$ times: for each $g$ there is exactly one $h=g^{-1}k\in S$. Therefore $\Pi_S^2=|S|^{-1}\sum_{k\in S}k=\Pi_S$. [F1, F2, F3, given]

2.1 For any $s\in S$, left multiplication $g\mapsto sg$ permutes $S$, so $s\Pi_S=\Pi_S$. Hence every vector in $\operatorname{im}\Pi_S$ is fixed by every $s\in S$. Conversely if $s v=v$ for all $s\in S$, then $\Pi_Sv=|S|^{-1}\sum_{s\in S}sv=v$. Thus $\operatorname{im}\Pi_S=\mathcal C(S)$. [F1, F2, step 1.1]

3.1 If $\mathcal C(S)=\mathbb C\psi$ with $\|\psi\|=1$, then $\Pi_S$ is a self-adjoint idempotent onto that line. Its kernel is orthogonal to its image: for $u=\Pi_S w$ and $\Pi_Sv=0$, $\langle u,v\rangle=\langle w,\Pi_Sv\rangle=0$. Therefore it is the orthogonal projection onto $\mathbb C\psi$. By [A1] that projection is $|\psi\rangle\langle\psi|$. [A1, step 1.1, step 2.1, algebra] ∎

## Sources

Watrous Lesson 14 §14.3, printed pp. 420–421 (PDF pp. 426–427), derives the stabilizer average as the code-space projector. De Wolf §20.3, PDF pp. 187–188, treats the rank-$n$ stabilizer projector. The group-average proof above supplies the full multiplication count locally.
