---
id: lem-squarefree-integer-polynomial-root-separation-bound
kind: lemma
title: An explicit root-separation bound for squarefree integer polynomials
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-polynomial-squarefree-decomposition-and-multiplicity
  - def-polynomial-ring-over-a-commutative-ring
  - def-formal-derivative-of-a-polynomial
  - def-determinant-of-a-square-matrix
  - thm-polynomial-division-algorithm-over-a-field
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-fundamental-theorem-of-algebra-liouville-proof
  - lem-complex-conjugation-and-modulus-laws
  - thm-rat-ordered-field
  - prop-formal-derivative-laws
  - cor-factor-theorem-over-a-commutative-ring
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - cor-determinant-is-invariant-under-similarity
  - thm-complex-numbers-form-a-field
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Marc Moreno Maza, Tutorial on real root isolation of polynomial systems, Root estimation I–II"
      url: "https://www.csd.uwo.ca/~mmorenom/Publications/RS-SAV-Tutorial.pdf"
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
---

## Statement

Let $P(x)=a_dx^d+\cdots+a_0\in\mathbb Z[x]$ be primitive and squarefree, with $d\ge2$, $a_d\ne0$, and coefficient height $H=\max_j|a_j|\ge1$. Put $R=1+H$ and
$$
\sigma(P)=H^{-(d-1)}(2R)^{-(d(d-1)-2)/2}.
$$
Every complex root $\alpha$ of $P$ satisfies $|\alpha|\le R$, and any two distinct complex roots satisfy $|\alpha-\beta|\ge\sigma(P)$. For $d=1$, $P$ has at most one root, so no pairwise separation bound is needed.

## Facts & Assumptions

**Given:** A primitive squarefree integer polynomial $P$ of degree $d\ge2$, leading coefficient $a_d$, height $H$, and its complex roots counted once.

[F1] Every nonconstant complex polynomial has a complex root and factors into linear factors by repeated division ([[thm-fundamental-theorem-of-algebra-liouville-proof]]).

[F2] The formal derivative obeys the product rule ([[prop-formal-derivative-laws]]).

[F3] The determinant is the signed finite sum of products of matrix entries ([[def-determinant-of-a-square-matrix]]).

[F4] Determinants multiply, are invariant under similarity, and a triangular determinant is the product of its diagonal entries ([[thm-determinant-multiplicative]], [[cor-determinant-is-invariant-under-similarity]], [[thm-determinant-of-a-triangular-matrix]]).

[F5] Complex modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

[F6] Polynomial division over a field gives a quotient and lower-degree remainder ([[thm-polynomial-division-algorithm-over-a-field]]).

[F7] A polynomial vanishing at $\alpha$ is divisible by $x-\alpha$ ([[cor-factor-theorem-over-a-commutative-ring]]).

[F8] The rationals and complex numbers are fields, and the rationals have characteristic zero ([[thm-rat-ordered-field]], [[thm-complex-numbers-form-a-field]]).

[F9] Degrees add under multiplication of nonzero polynomials over a field ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

## Proof

1.1 If $P(z)=0$ and $|z|>1+H$, then $|a_d||z|^d\le H\sum_{j=0}^{d-1}|z|^j < H|z|^d/(|z|-1)<|z|^d\le |a_d||z|^d$, because $|a_d|\ge1$ and $|z|-1>H$. This contradiction proves $|z|\le R$ for every root. [given, F5, F8, algebra]

1.2 Let $\alpha_1,\ldots,\alpha_d$ be the distinct roots from [F1] and set $D=a_d^{2d-2}\prod_{i<j}(\alpha_i-\alpha_j)^2$. Form the coefficient map $\Phi(u,v)=uP+vP'$ from pairs with $\deg u\le d-2$, $\deg v\le d-1$ to polynomials of degree at most $2d-2$. Its square coefficient matrix $S$ has integer entries, so $\det S$ is an integer-coefficient polynomial in $a_d,\ldots,a_0$. [given, F1, F2, F3, F6, construct]

2.1 Divide each output polynomial by $P$ and record its quotient and remainder. In coefficient order from highest degree down, the map $(q,r)\mapsto qP+r$ has triangular diagonal consisting of $d-1$ copies of $a_d$ and $d$ copies of $1$, so the inverse coordinate change has determinant $\pm a_d^{-(d-1)}$. Under this change, $\Phi$ has block form $\begin{pmatrix}I&*\\0&M\end{pmatrix}$, where $M$ is multiplication by $P'$ on $\mathbb C[x]/(P)$. Hence $\det S=\pm a_d^{d-1}\det M$. [step 1.2, F3, F4, F6, algebra]

3.1 For each $i$ define $L_i(x)=\prod_{j\ne i}(x-\alpha_j)/(\alpha_i-\alpha_j)$. These degree-$(d-1)$ polynomials satisfy $L_i(\alpha_j)=1$ when $i=j$ and $0$ otherwise. For every degree-$<d$ representative $q$, the difference $q-\sum_iq(\alpha_i)L_i$ has degree $<d$ and vanishes at all $d$ distinct roots; [F7] and [F9] force this difference to be zero. Thus evaluation is an isomorphism $\mathbb C[x]/(P)\to\mathbb C^d$. It conjugates $M$ to the diagonal matrix with entries $P'(\alpha_i)$, so [F4] gives $\det M=\prod_iP'(\alpha_i)$. By [F2], $P'(\alpha_i)=a_d\prod_{j\ne i}(\alpha_i-\alpha_j)$; pairing the two factors for each $i<j$ yields $\det S=\pm a_d^{2d-1}\prod_{i<j}(\alpha_i-\alpha_j)^2=\pm a_dD$. [step 2.1, F2, F4, F7, F9, algebra]

4.1 Set the variable $a_d$ to zero in the integer-coefficient polynomial $\det S$. Then $\deg P\le d-1$ and $\deg P'\le d-2$, so every $uP+vP'$ has degree at most $2d-3$; the coefficient map misses the $x^{2d-2}$ coordinate and its determinant is zero. Therefore the constant term in $a_d$ of $\det S$ is zero, so $a_d$ divides $\det S$ as an integer-coefficient polynomial. At the given integer coefficients, $\det S/a_d$ is an integer, and [step 3.1] shows that $D$ is an integer up to sign. [step 1.2, step 3.1, F3, algebra]

5.1 Squarefreeness makes every root distinct, so every factor in $D$ is nonzero and $|D|\ge1$. [given, step 4.1, F1, algebra]

6.1 Let $\delta=\min_{i<j}|\alpha_i-\alpha_j|$ and choose a pair attaining it. Every other pairwise distance is at most $2R$ by [step 1.1] and the triangle inequality [F5]. Thus $1\le |D|\le H^{2d-2}\delta^2(2R)^{d(d-1)-2}$. Rearranging gives $\delta\ge H^{-(d-1)}(2R)^{-(d(d-1)-2)/2}=\sigma(P)$. [step 1.1, step 5.1, F5, algebra] ∎
