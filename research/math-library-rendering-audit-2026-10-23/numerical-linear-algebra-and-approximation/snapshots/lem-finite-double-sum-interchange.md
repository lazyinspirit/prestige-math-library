---
id: lem-finite-double-sum-interchange
kind: lemma
title: "Interchanging two finite real sums"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-field
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-induction-principle
  - thm-reals-field
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
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, Math 5466"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
---

## Statement

Let $n\in\mathbb N$ and let $a_{jk}\in\mathbb R$ for $j,k<n$. Then
$$\sum_{j<n}\sum_{k<n}a_{jk}=\sum_{k<n}\sum_{j<n}a_{jk}.$$
The sums are those recursively defined in [[def-finite-sum]], and the identity includes $n=0$.

## Facts & Assumptions

**Given:** A natural number $n$ and an $n$-by-$n$ array of real numbers.

[F1] [[def-finite-sum]]: finite sums have empty value $0$ and append by adding the last term. [[lem-finite-sum-laws]] gives additivity of finite sums.

[F2] [[thm-induction-principle]]: a property true at zero and preserved by successors holds for every natural number.

[F3] [[def-field]] and [[thm-reals-field]]: real addition is associative and commutative.

## Proof

**Proof technique:** induction.

1.1 For $n=0$, both iterated sums are empty and equal $0$ by [F1]. [base, given, F1]

1.2 Assume the identity for every $n$-by-$n$ real array, and consider an arbitrary $(n+1)$-by-$(n+1)$ array. Splitting at the last row and column and using finite-sum additivity [F1] gives $\sum_{j<n+1}\sum_{k<n+1}a_{jk}=\sum_{j<n}\sum_{k<n}a_{jk}+\sum_{j<n}a_{j,n}+\sum_{k<n}a_{n,k}+a_{n,n}$. Splitting in the opposite order gives $\sum_{k<n+1}\sum_{j<n+1}a_{jk}=\sum_{k<n}\sum_{j<n}a_{jk}+\sum_{k<n}a_{n,k}+\sum_{j<n}a_{j,n}+a_{n,n}$. The induction hypothesis equates the first terms, and associativity and commutativity [F3] equate the remaining sums after interchanging their order. Thus the identity holds for the successor size. [given, F1, F3, ih, algebra]

2.1 Induction [F2] using steps 1.1 and 1.2 proves the identity for every finite square array. [step 1.1, step 1.2, F2, discharge-induction] ∎
