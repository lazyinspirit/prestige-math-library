---
id: thm-qc-tqc-approximate-encoded-two-qubit-gate
kind: theorem
title: Fibonacci B6 approximates one logical two-qubit gate in both charge blocks
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - lem-qc-tqc-b6-joint-su5-su8-density
  - def-qc-tqc-six-anyon-encoded-subspace
  - thm-qc-tqc-block-approximation-error
  - lem-qc-tqc-determinant-character-phase
  - def-countable-choice
dependency_level: 10
axiom_use: Assumes exactly ACω through the joint-density theorem; no full Axiom of Choice is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $U\in U(\mathbb C^4)$ and $\delta>0$.
There is one normalized six-strand Fibonacci braid word $b$ such that its
actions $B_1(b)$ and $B_\tau(b)$ on the total-charge-$1$ and total-charge-$\tau$
blocks are simultaneously within $\delta$ of
$$T_1=U\oplus(\det U)^{-1}\in SU(5),\qquad T_\tau=U\oplus\operatorname{diag}((\det U)^{-1},1,1,1)\in SU(8).$$
For the triple-triple computational subspace in either block, the logical
block error and leakage amplitude are each at most $\delta$. The corresponding
physical categorical braid differs from the normalized word by the common
scalar phase specified by
[[lem-qc-tqc-determinant-character-phase]].

## Facts & Assumptions

**Given:** The four-dimensional code $\mathcal C_a$ in each six-anyon block,
the same ordered path basis in both blocks, $U\in U(4)$, $\delta>0$, and
$\mathrm{AC}_\omega$.

[F1] The normalized simultaneous braid closure contains
$SU(5)\times SU(8)$ under $\mathrm{AC}_\omega$.
[[lem-qc-tqc-b6-joint-su5-su8-density]]

[F2] The two code blocks have dimensions $4$, and their leakage
complements have dimensions $1$ and $4$.
[[def-qc-tqc-six-anyon-encoded-subspace]]

[F3] If a unitary is within $\delta$ of a code-preserving block target, its
logical block error and leakage are at most $\delta$.
[[thm-qc-tqc-block-approximation-error]]

[F4] The original categorical word has one common scalar phase across both
charge blocks. [[lem-qc-tqc-determinant-character-phase]]


[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]]

## Proof

1.1 Put $\lambda=(\det U)^{-1}$. Since $|\det U|=1$, $|\lambda|=1$. Therefore $\det(T_1)=\det(U)\lambda=1$ and $\det(T_\tau)=\det(U)\lambda=1$; both targets are unitary by their orthogonal direct-sum definitions. Hence $T_1\in SU(5)$ and $T_\tau\in SU(8)$. [given, F2, algebra]

2.1 The open product of operator-norm $\delta$-balls around $(T_1,T_\tau)$ meets the normalized braid image because its closure contains $SU(5)\times SU(8)$ by [A1] and [F1]. Thus one word $b$ satisfies both block bounds at once. This is simultaneous density; separate choices of words in the two blocks are not used. [A1, F1, step 1.1, choose]

3.1 In each block, $T_a$ acts as $U$ on the four-dimensional code and as a unitary on its orthogonal complement. Apply [F3] to $B_1(b)$ and $T_1$, then to $B_\tau(b)$ and $T_\tau$. The logical block error and leakage amplitude are at most $\delta$ in both blocks. [F2, F3, step 2.1, algebra]

4.1 By [F4], the physical categorical braid is the same scalar multiple of both normalized blocks; multiplying by a unit scalar leaves leakage unchanged and is recorded as a projective phase for uncontrolled computation. It must be tracked under coherent control. [F2, F4, step 3.1] ∎
