---
id: lem-complex-coordinate-l1-is-a-norm
kind: lemma
title: "The complex coordinate sum norm, including the zero space"
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-norm-and-complex-normed-space, lem-complex-conjugation-and-modulus-laws, def-finite-sum, lem-finite-sum-laws, def-function-space]
justified_by: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1 (complete five-page lecture notes)"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
    - title: "M. Winklmeier, Functional Analysis lecture notes (complete 140-page lecture notes)"
      url: "https://math.uniandes.edu.co/~mwinklme/teaching/FuncAna/FA-lecture_notes.pdf"
---

## Statement

For every $n\in\mathbb N$, on the complex function space $\mathbb C^n$ with pointwise operations, define
$$
N_1(z):=\sum_{j<n}|z_j|_{\mathbb C}.
$$
Then $N_1$ is a complex norm, including at $n=0$, when $\mathbb C^0$ is the singleton zero space.

## Facts & Assumptions

**Given:** $n\in\mathbb N$ and $z,w\in\mathbb C^n$, with finite sums over the coordinates $j<n$.

[F1] $\mathbb C^n$ is the function space of functions from $n$ to $\mathbb C$ ([[def-function-space]]).

[F2] Addition and scalar multiplication on $\mathbb C^n$ are pointwise, and its zero vector is the constant zero function ([[def-function-space]]).

[F3] $\mathbb C^0$ has exactly one element, its zero vector ([[def-function-space]]).

[F4] Complex modulus is nonnegative and definite, multiplicative, and subadditive ([[lem-complex-conjugation-and-modulus-laws]]).

[F5] Finite sums over a finite coordinate list use the recursively defined sum after zero extension ([[def-finite-sum]]).

[F6] The empty finite sum is zero ([[def-finite-sum]]).

[F7] Finite sums preserve addition and real scaling ([[lem-finite-sum-laws]]).

[F8] Finite sums preserve pointwise inequalities, and a sum of nonnegative terms is zero only when every term is zero ([[lem-finite-sum-laws]]).

[F9] A complex norm separates zero, is homogeneous for every complex scalar by the complex modulus, and satisfies the triangle inequality ([[def-complex-norm-and-complex-normed-space]]).

## Proof

1.1 If $n=0$, [F3], [F5] and [F6] say that the only vector is zero and its empty sum is $0$. If $n>0$ and $z=0$, pointwise equality in [F2] makes each coordinate zero; [F4] makes each summand zero, and the finite sum in [F5] is then zero. Conversely, if $N_1(z)=0$, the nonnegative summands from [F4] satisfy the zero-sum condition in [F8], so every $|z_j|_{\mathbb C}=0$ and hence every $z_j=0$ by [F4]. Pointwise equality [F1] identifies $z$ with the zero function [F2]. Thus $N_1(z)=0$ iff $z=0$ for every $n$, as required in [F9]. [F1, F2, F3, F4, F5, F6, F8, F9]

1.2 For every $\lambda\in\mathbb C$, the finite-list sum in [F5], pointwise scalar multiplication from [F2], and multiplicativity from [F4] give $N_1(\lambda z)=\sum_{j<n}|\lambda z_j|_{\mathbb C}=\sum_{j<n}|\lambda|_{\mathbb C}|z_j|_{\mathbb C}=|\lambda|_{\mathbb C}N_1(z)$, where the last equality is finite-sum scaling by the real scalar $|\lambda|_{\mathbb C}$ from [F7]. This is the complex absolute homogeneity clause in [F9]. [F2, F4, F5, F7, F9]

2.1 Pointwise addition from [F2], the finite-list sum from [F5], and complex modulus subadditivity from [F4] give $|z_j+w_j|_{\mathbb C}\le |z_j|_{\mathbb C}+|w_j|_{\mathbb C}$ for every $j<n$. Finite-sum monotonicity and additivity [F7, F8] therefore give $N_1(z+w)=\sum_{j<n}|z_j+w_j|_{\mathbb C}\le\sum_{j<n}(|z_j|_{\mathbb C}+|w_j|_{\mathbb C})=N_1(z)+N_1(w)$. Together with steps 1.1 and 1.2, this is the triangle clause in [F9], so all three complex norm criteria hold. [F2, F4, F5, F7, F8, F9, step 1.1, step 1.2] ∎
