---
id: lem-complex-coordinate-l1-is-a-norm
kind: lemma
title: "The complex coordinate sum norm, including the zero space"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-norm-and-complex-normed-space, lem-complex-conjugation-and-modulus-laws, def-finite-sum, lem-finite-sum-laws, def-function-space]
proof_strategy: direct
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1, Definition 1.1 and Example 1.2"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
---

## Statement

For every natural $n$, on the complex vector space $\mathbb C^n$ with coordinatewise operations, $N_1(a)=\sum_{j<n}|a_j|$ is a complex norm. For $n=0$, this is the unique zero-valued norm on the singleton $\mathbb C^0$.

## Facts & Assumptions

**Given:** $n\in\mathbb N$, the finite function space $\mathbb C^n$ ([[def-function-space]]), and real finite sums ([[def-finite-sum]]).

[F1] Complex modulus is nonnegative, definite, multiplicative and subadditive ([[lem-complex-conjugation-and-modulus-laws]]).

[F2] Finite real sums preserve inequalities and distribute over addition and real scaling; a sum of nonnegative terms vanishes only when every term vanishes ([[lem-finite-sum-laws]]).

[F3] The complex norm axioms are those of [[def-complex-norm-and-complex-normed-space]].

## Proof

1.1 Each summand is a finite nonnegative real. By [F2], $N_1(a)=0$ if and only if every $|a_j|=0$, equivalently every $a_j=0$ by [F1]. This remains true at $n=0$: the empty sum is zero and the empty tuple is the only vector. [F1, F2, given]

2.1 For every complex $\lambda$, multiplicativity gives $N_1(\lambda a)=\sum_{j<n}|\lambda a_j|=\sum_{j<n}|\lambda||a_j|=|\lambda|N_1(a)$; the scaling law applies to the real number $|\lambda|$. Subadditivity and sum monotonicity give $N_1(a+b)\le\sum_{j<n}(|a_j|+|b_j|)=N_1(a)+N_1(b)$. Together with step 1.1 these verify [F3] for every $n$. [F1, F2, F3, step 1.1] ∎
