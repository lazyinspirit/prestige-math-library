---
id: lem-product-of-linear-factors-is-monic-polynomial
kind: lemma
title: "A finite product of monic linear factors is monic"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - def-finite-sum
  - lem-finite-sum-laws
  - lem-power-laws
  - thm-induction-principle
  - thm-reals-field
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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

For every $n\in\mathbb N$ and reals $r_0,\ldots,r_{n-1}$, the function
$$P_n(X)=\prod_{k<n}(X-r_k)$$
is the evaluation of a formal real polynomial of degree exactly $n$ with leading coefficient $1$. For $n=0$ the product is empty and equals $1$.

## Facts & Assumptions

**Given:** A natural $n$ and the indicated finite list of real roots.

[F1] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: a finite coefficient list defines its evaluation, degree, and leading coefficient.

[F2] [[def-finite-sum]] and [[lem-finite-sum-laws]]: finite sums obey the recursive last-term rule, addition and scalar multiplication.

[F3] [[lem-power-laws]]: powers satisfy $X^{k+1}=X^kX$ and the usual exponent identities.

[F4] [[thm-reals-field]]: real multiplication distributes over addition and has additive inverses.

[F5] [[thm-induction-principle]]: induction holds on $\mathbb N$.

## Proof

**Proof technique:** induction.

1.1 At $n=0$, the empty product is $1$, the evaluation of the one-term polynomial $(1)$, which is monic of degree zero. [base, given, F1, F2, construct]

1.2 Suppose $P_n(X)=\sum_{k=0}^{n}a_kX^k$ with $a_n=1$, as supplied by the induction hypothesis. Multiplication by the next factor gives $P_n(X)(X-r_n)=\sum_{k=0}^{n}a_kX^{k+1}-\sum_{k=0}^{n}r_na_kX^k.$ By the finite-sum and field laws [F2, F4], this is represented by the coefficient list $b_0=-r_na_0$, $b_k=a_{k-1}-r_na_k$ for $1\le k\le n$, and $b_{n+1}=a_n=1$. This list is a formal polynomial by [F1]; its last coefficient is $1$, so its degree is $n+1$ and it is monic. [given, F1, F2, F3, F4, algebra, ih, construct]

2.1 Induction [F5] proves the claim for every finite list length, including the empty product case. [step 1.1, step 1.2, F5, discharge-induction] ∎
