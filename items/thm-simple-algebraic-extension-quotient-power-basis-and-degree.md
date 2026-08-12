---
id: thm-simple-algebraic-extension-quotient-power-basis-and-degree
kind: theorem
title: 'A simple algebraic extension is its minimal-polynomial quotient and has power basis $1,a,\ldots,a^{n-1}$ and degree $n$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-field-extension-generated-subfields-and-simple-extension, thm-evaluation-kernel-and-minimal-polynomial, thm-first-isomorphism-theorem-rings, thm-polynomial-division-algorithm-over-a-field, thm-polynomial-quotient-is-a-field-iff-irreducible]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

## Statement

Let $K/F$ be a field extension and let $a\in K$ be algebraic with minimal
polynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism
$$F[x]/(m_a)\cong F(a),\qquad f+(m_a)\longmapsto f(a).$$
Moreover, every element of $F(a)$ has a unique expression
$$c_0+c_1a+\cdots+c_{n-1}a^{n-1},\qquad c_j\in F.$$
Thus $1,a,\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the
simple extension is $[F(a):F]=n$.

## Facts & Assumptions

**Given:** A field extension $K/F$ and an algebraic element $a\in K$ whose minimal polynomial $m_a$ has degree $n$.

[F1] Evaluation has kernel $(m_a)$, and $m_a$ is irreducible ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F2] The first isomorphism theorem identifies a ring modulo the kernel of a homomorphism with its image ([[thm-first-isomorphism-theorem-rings]]).

[F3] Division by a nonzero polynomial gives a unique remainder of smaller degree ([[thm-polynomial-division-algorithm-over-a-field]]).

[F4] A quotient $F[x]/(p)$ by a nonconstant polynomial is a field exactly when $p$ is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[F5] $F[a]$ is the generated subring and $F(a)$ the generated subfield ([[def-field-extension-generated-subfields-and-simple-extension]]).

## Proof

**Proof technique:** direct.

1.1 Evaluation has image $F[a]$ and kernel $(m_a)$ by [F1]; [F2] therefore induces $F[x]/(m_a)\cong F[a]$. [F1, F2]

2.1 Since $m_a$ is irreducible, [F4] makes the quotient and hence $F[a]$ a field. [F1, F4, step 1.1]

3.1 The field $F[a]$ contains $F$ and $a$, while every subfield containing them contains all polynomial values; minimality in [F5] gives $F[a]=F(a)$. [F5, step 2.1]

4.1 Division by $m_a$ in [F3] gives each quotient class a representative of degree below $n$, hence gives every element of $F(a)$ a displayed power expression. [F3, step 1.1, step 3.1]

5.1 If two such expressions agree, their difference is a polynomial of degree below $n$ in the kernel $(m_a)$; uniqueness of the remainder in [F3] makes the difference zero coefficientwise. [F1, F3, step 4.1]

6.1 The existence and uniqueness in steps 4.1--5.1 are exactly the assertion that the displayed powers form a basis; by definition, its number $n$ is $[F(a):F]$. [step 4.1, step 5.1] ∎
