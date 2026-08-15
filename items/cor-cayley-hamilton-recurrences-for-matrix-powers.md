---
id: cor-cayley-hamilton-recurrences-for-matrix-powers
kind: corollary
title: "For an invertible matrix over a field, Cayley-Hamilton makes every matrix-power entry and trace sequence linearly recurrent"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cayley-hamilton, def-coordinate-endomorphism-over-a-commutative-ring, def-characteristic-polynomial-of-an-operator, def-characteristic-polynomial-of-a-matrix, def-trace-of-a-square-matrix, cor-invertible-matrix-has-unit-determinant]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, slide 18"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field, let $n\ge1$, and let $A\in M_n(K)$ be invertible. Write

$$\chi_A(t)=t^n+b_1t^{n-1}+\cdots+b_n.$$

Then $b_n\ne0$, and for every pair $u,v<n$ the sequence $m\mapsto(A^m)_{uv}$, as well as the sequence $m\mapsto\operatorname{tr}(A^m)$, satisfies from $m=0$ the order-$n$ recurrence

$$s_{m+n}+b_1s_{m+n-1}+\cdots+b_ns_m=0.$$

## Facts & Assumptions

**Given:** A field $K$, a positive size $n$, and an invertible matrix $A\in M_n(K)$ with the displayed characteristic polynomial.

[L1] Every finite-dimensional endomorphism satisfies its characteristic polynomial: $\chi_T(T)=0$ ([[thm-cayley-hamilton]]).

[L2] A matrix $A$ defines the coordinate endomorphism $T_A(x)=Ax$ ([[def-coordinate-endomorphism-over-a-commutative-ring]]).

[L3] The operator characteristic polynomial is the characteristic polynomial of any representing matrix ([[def-characteristic-polynomial-of-an-operator]]).

[L4] The matrix characteristic polynomial is $\chi_A(t)=\det(tI-A)$ ([[def-characteristic-polynomial-of-a-matrix]]).

[L5] The trace of a field matrix is the finite sum of its diagonal entries ([[def-trace-of-a-square-matrix]]).

[L6] An invertible positive-sized matrix over a commutative ring has unit determinant ([[cor-invertible-matrix-has-unit-determinant]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the coordinate endomorphism [L2]. By [L3], its characteristic polynomial is $\chi_A$, so the representing matrices satisfy $A^n+b_1A^{n-1}+\cdots+b_nI=0$. [given, L1, L2, L3]

1.2 By [L4], the constant coefficient is $b_n=\det(-A)=(-1)^n\det(A)$. The determinant is a unit by [L6], so $b_n\ne0$ in the field $K$ and the relation has order $n$ under the page's recurrence convention. [L4, L6, algebra]

2.1 Multiplying the identity in step 1.1 by $A^m$ gives $A^{m+n}+b_1A^{m+n-1}+\cdots+b_nA^m=0$ for every $m\ge0$. [step 1.1, algebra]

3.1 Extracting the $(u,v)$ entry from step 2.1 proves the displayed recurrence for every matrix-power entry; summing its diagonal entries and using [L5] proves the same recurrence for the trace sequence. [step 2.1, L5, algebra]

4.1 Steps 3.1 and 1.2 establish both families of order-$n$ recurrences from $m=0$. [step 3.1, step 1.2] ∎
