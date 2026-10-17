---
id: lem-finite-coefficient-vector-has-polynomial-representative
kind: lemma
title: "A finite coefficient vector has a canonical polynomial representative"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-induction-principle
  - thm-reals-field
  - lem-of-zero-mult
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 1"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
---

## Statement

For every $n\in\mathbb N$ and reals $c_0,\ldots,c_n$, the function
$$q(x)=\sum_{k=0}^{n}c_kx^k$$
is the evaluation of a formal real polynomial of degree at most $n$. The representative can be chosen so that it is the zero polynomial exactly when every $c_k=0$; if $c_n\ne0$, it has degree $n$ and leading coefficient $c_n$. Here the coefficient vector may be padded by zeros for the displayed sum; padding describes the evaluation, not a change to the formal polynomial object.

## Facts & Assumptions

**Given:** A natural $n$ and a finite real coefficient vector $c_0,\ldots,c_n$.

[F1] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: a nonzero formal polynomial is a finite coefficient list whose final coefficient is nonzero; its evaluation is the corresponding finite sum, and the zero polynomial is a separate object.

[F2] [[def-finite-sum]] and [[lem-finite-sum-laws]]: the empty sum is zero, a finite sum extends by its last term, and the finite-sum notation agrees with that recursion.

[F3] [[thm-induction-principle]]: a property true at zero and preserved by successors holds for every natural number.

[F4] [[thm-reals-field]] and [[lem-of-zero-mult]]: real addition and multiplication have the field identities, including $0x=0$.

## Proof

**Proof technique:** induction.

1.1 For $n=0$, if $c_0=0$ choose the zero polynomial, whose evaluation is $0$; if $c_0\ne0$, choose the one-term formal list $(c_0)$, of degree $0$ and leading coefficient $c_0$. In both cases its evaluation is $c_0x^0=c_0$. [base, given, F1, F4, algebra, construct]

1.2 Suppose the assertion holds for vectors of length $n+1$, and consider $c_0,\ldots,c_n,c_{n+1}$. If $c_{n+1}=0$, the finite-sum recursion and [F4] show that the displayed evaluation is the evaluation for the prefix vector; use its representative from the induction hypothesis. If $c_{n+1}\ne0$, the formal coefficient list $(c_0,\ldots,c_n,c_{n+1})$ is valid by [F1], has degree $n+1$ and leading coefficient $c_{n+1}$, and evaluates to the displayed sum by [F2]. The zero-characterization in the first case is inherited from the prefix; in the second case both the vector and the polynomial are nonzero. [given, F1, F2, F4, algebra, ih, construct]

2.1 Induction [F3] now supplies the representative for every $n$. The construction also proves that it is zero exactly when all vector entries vanish, and that a nonzero final entry is its leading coefficient at degree $n$. [step 1.1, step 1.2, F3, discharge-induction] ∎
