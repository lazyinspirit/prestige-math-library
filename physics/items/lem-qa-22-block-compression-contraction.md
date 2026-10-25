---
id: lem-qa-22-block-compression-contraction
kind: lemma
title: A projected unitary block is a contraction
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
verification:
  precheck: pass
deps:
  - def-qa-22-block-encoding
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.1 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Definition 43
      url: https://arxiv.org/pdf/1806.01838
---

## Statement

For a finite system space, an ancilla injection $J_ax=e_0\otimes x$, and a unitary $U$ on the joint space, the projected block $B_U=J_a^{\dagger}UJ_a$ satisfies $\|B_U\|_{\rm op}\le1$. Consequently, every exact $(\alpha,a,0)$ block encoding of $A$ satisfies $\|A\|_{\rm op}\le\alpha$.

## Facts & Assumptions

**Given:** The compression and exact-block conventions of [[def-qa-22-block-encoding]], a unitary $U$, and the finite-dimensional operator norm.

[F1] [[def-qa-22-block-encoding]]: $B_U=J_a^{\dagger}UJ_a$, with $J_a$ the isometric inclusion of the all-zero ancilla subspace; in the exact case $B_U=\widehat A/\alpha$, where $\widehat A=E_{\rm out}AE_{\rm in}^{\dagger}$ and $\|\widehat A\|_{\rm op}=\|A\|_{\rm op}$ by its Proof, step 3.1.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum of $\|Tx\|$ over unit vectors, and the zero-domain norm is zero.

[F3] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary preserves every vector norm.

## Proof

1.1 The zero-ancilla coordinate projection $J_a^{\dagger}$ has norm at most one: it discards all coordinates orthogonal to $e_0\otimes\mathbb C^d$, so the squared length of the retained coordinates is at most the squared length of the full vector. Hence for each unit $x$, $\|B_Ux\|=\|J_a^{\dagger}UJ_ax\|\le\|UJ_ax\|=\|J_ax\|=1$, using [F3] and the isometry of $J_a$ from [F1]. Taking the maximum gives $\|B_U\|_{\rm op}\le1$; the zero-dimensional case follows from [F2]. [given, F1, F2, F3, algebra]

2.1 In the exact case [F1] gives $\widehat A=\alpha B_U$ and $\|A\|_{\rm op}=\|\widehat A\|_{\rm op}$. The unit-vector definition [F2] gives $\|\alpha B_U\|_{\rm op}=\alpha\|B_U\|_{\rm op}$ for positive $\alpha$, hence $\|A\|_{\rm op}=\alpha\|B_U\|_{\rm op}\le\alpha$. [step 1.1, F1, F2, algebra] ∎
