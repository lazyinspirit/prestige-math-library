---
id: lem-finite-product-of-quotients
kind: lemma
title: "A finite product of quotients is the quotient of finite products"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-field
  - def-finite-sum
  - lem-of-inverse-unique
  - thm-induction-principle
  - thm-reals-field
  - lem-finite-product-of-nonzero-reals-is-nonzero
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
dependency_level: 1
---

## Statement

Let $n\in\mathbb N$, and let $u_0,\ldots,u_{n-1}\in\mathbb R$ and nonzero $d_0,\ldots,d_{n-1}\in\mathbb R$. For $d\ne0$, use $u/d$ to denote $u d^{-1}$. Then
$$\prod_{k<n}\frac{u_k}{d_k}=\frac{\prod_{k<n}u_k}{\prod_{k<n}d_k}.$$
The denominator on the right is nonzero by [[lem-finite-product-of-nonzero-reals-is-nonzero]]. The identity includes $n=0$.

## Facts & Assumptions

**Given:** A finite list of real numerators and a same-length list of nonzero real denominators.

[F1] [[def-finite-sum]]: finite products have empty value $1$ and extend by multiplying the next term.

[F2] [[thm-induction-principle]]: induction holds on the natural numbers.

[F3] [[thm-reals-field]] and [[def-field]]: real multiplication is associative and commutative; nonzero elements have inverses.

[F4] [[lem-of-inverse-unique]]: a multiplicative inverse, when it exists, is unique.

[F5] [[lem-finite-product-of-nonzero-reals-is-nonzero]]: a finite product of nonzero real factors is nonzero.

## Proof

**Proof technique:** induction.

1.1 For $n=0$, both products are empty and equal $1$ by [F1]. Also $1^{-1}=1$, since $1\cdot1=1$ and inverses are unique by [F3, F4]. Thus both sides equal $1$. [base, given, F1, F3, F4]

1.2 Assume the identity for the first $n$ terms, and append $u_n\in\mathbb R$ and $d_n\ne0$. Put $U=\prod_{k<n}u_k$ and $D=\prod_{k<n}d_k$. By [F5], both $D$ and the extended denominator product $Dd_n$ are nonzero, so $D^{-1}$ and $(Dd_n)^{-1}$ exist; also $d_n^{-1}$ exists by [F3]. Associativity and commutativity give $(Dd_n)(D^{-1}d_n^{-1})=(DD^{-1})(d_nd_n^{-1})=1$, so uniqueness [F4] gives $(Dd_n)^{-1}=D^{-1}d_n^{-1}$. Using the induction hypothesis, product recursion [F1], and the quotient convention, $$\prod_{k<n+1}\frac{u_k}{d_k}=\left(\prod_{k<n}\frac{u_k}{d_k}\right)\frac{u_n}{d_n}=\frac{U}{D}\frac{u_n}{d_n}=\frac{Uu_n}{Dd_n}=\frac{\prod_{k<n+1}u_k}{\prod_{k<n+1}d_k}.$$ The equality $(U/D)(u_n/d_n)=(Uu_n)/(Dd_n)$ follows from associativity and commutativity together with $(Dd_n)^{-1}=D^{-1}d_n^{-1}$. [given, F1, F3, F4, F5, ih, algebra]

2.1 Induction [F2] applied to steps 1.1 and 1.2 proves the identity for every finite list length. [step 1.1, step 1.2, F2, discharge-induction] ∎
