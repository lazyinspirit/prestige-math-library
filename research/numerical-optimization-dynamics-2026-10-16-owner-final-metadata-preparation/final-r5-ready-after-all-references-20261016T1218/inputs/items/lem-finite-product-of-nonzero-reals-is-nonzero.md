---
id: lem-finite-product-of-nonzero-reals-is-nonzero
kind: lemma
title: "A finite product of nonzero reals is nonzero"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-field
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-induction-principle
  - thm-reals-field
  - lem-of-no-zero-divisors
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, Math 5466"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
---

## Statement

Let $n\in\mathbb N$ and let $a_0,\ldots,a_{n-1}\in\mathbb R$ all be nonzero. Then the finite product $\prod_{k<n}a_k$ is nonzero. For $n=0$ this is the empty product $1$.

## Facts & Assumptions

**Given:** A natural number $n$ and a finite list of nonzero real factors.

[F1] [[def-finite-sum]] and [[lem-finite-sum-laws]]: $\prod_{k<0}a_k=1$ and $\prod_{k<n+1}a_k=(\prod_{k<n}a_k)a_n$.

[F2] [[thm-induction-principle]]: a property true at zero and preserved by successors holds for every natural number.

[F3] [[thm-reals-field]] and [[def-field]]: $\mathbb R$ is a field and its identities satisfy $1\ne0$.

[F4] [[lem-of-no-zero-divisors]]: if a product of two field elements is zero, at least one factor is zero.

## Proof

**Proof technique:** induction.

1.1 For $n=0$, the empty product is $1$, which is nonzero by [F3]. [base, given, F1, F3]

1.2 Suppose the prefix product $\prod_{k<n}a_k$ is nonzero and the next factor $a_n$ is nonzero. By [F1] the extended product is $(\prod_{k<n}a_k)a_n$; [F4] implies it cannot be zero, since both factors are nonzero. [given, F1, F4, ih, algebra]

2.1 Induction [F2] applied to steps 1.1 and 1.2 proves the claim for every finite list of nonzero real factors. [step 1.1, step 1.2, F2, discharge-induction] ∎
