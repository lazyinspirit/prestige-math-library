---
id: lem-qa-37-product-error
kind: lemma
title: "Operator error adds under finite unitary products"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
justified_by: []
axiom_use: "None; the finite telescoping estimate is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, unitary approximation and finite circuit composition, PDF pp. 26–29."
---

## Statement

Let $U_1,\ldots,U_m$ and $V_1,\ldots,V_m$ be unitary operators on the same
finite-dimensional Hilbert space, and suppose
$\|U_j-V_j\|_{\rm op}\le\epsilon_j$ with $\epsilon_j\ge0$. With empty
products equal to the identity and empty sums equal to zero,
$$\|U_m\cdots U_1-V_m\cdots V_1\|_{\rm op} \le\sum_{j=1}^m\epsilon_j.$$

## Facts & Assumptions

**Given:** Two finite lists of unitaries on one finite-dimensional Hilbert space and their individual error bounds.

[F1] The operator norm is induced by the Hilbert-space norm, and a unitary preserves that vector norm. [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]

[F2] The operator norm is submultiplicative. On a nonzero Hilbert space, for a unitary $Q$, its norm and the norm of $Q^*$ are both $1$ by [F1], so submultiplicativity gives $\|QX\|_{\rm op}=\|X\|_{\rm op}=\|XQ\|_{\rm op}$ by applying the same upper bound to $Q$ and the reverse bound to $Q^*$. [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]

## Proof

1.1 If $m=0$, both products are $I$, so their difference is zero and the empty sum is zero. This is the claimed bound in the empty case. [given, algebra]

2.1 If the Hilbert space is zero-dimensional, its unique endomorphism has norm zero, so the product difference is zero and the claimed bound holds. Otherwise, for $m\ge1$, insert and subtract mixed products to obtain $U_m\cdots U_1-V_m\cdots V_1 =\sum_{j=1}^m U_m\cdots U_{j+1}(U_j-V_j)V_{j-1}\cdots V_1.$ Expansion cancels adjacent terms and leaves exactly the left side. Each outer product is unitary and has norm one by [F1]; [F2] and the unitary invariance derived there show that each summand has norm at most $\epsilon_j$. The operator-norm triangle inequality then gives the stated sum. [F1, F2, given, algebra] ∎
