---
id: cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator
kind: corollary
title: 'The inverse of an invertible finite-dimensional endomorphism is a polynomial in that endomorphism'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cayley-hamilton, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, thm-operator-invertible-iff-determinant-nonzero, def-characteristic-polynomial-of-an-operator, def-determinant-of-a-linear-operator]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'J. Demmel, Applied Numerical Linear Algebra, Lecture 14'
      url: 'https://people.eecs.berkeley.edu/~demmel/cs267/lecture14.html'
pipeline_run: null
---

## Statement

If $T$ is an invertible endomorphism of a finite-dimensional vector space, then there is a polynomial $q\in F[x]$ such that $T^{-1}=q(T)$.

## Facts & Assumptions

**Given:** An invertible endomorphism $T$ of a finite-dimensional $F$-vector space $V$.

[L1] Cayley-Hamilton states that $\chi_T(T)=0$ ([[thm-cayley-hamilton]]).

[L2] The characteristic polynomial of an endomorphism is that of any representing matrix $A=[T]$, and the determinant of an endomorphism is $\det(A)$ for any such matrix ([[def-characteristic-polynomial-of-an-operator]], [[def-determinant-of-a-linear-operator]]). For $A\in M_n(F)$ with $n\ge1$, $\chi_A(x)=x^n+c_{n-1}x^{n-1}+\cdots+c_0$ with constant coefficient $c_0=(-1)^n\det(A)$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]). Hence in positive dimension $c_0=(-1)^n\det(T)$.

[L3] An invertible finite-dimensional endomorphism has nonzero determinant ([[thm-operator-invertible-iff-determinant-nonzero]]).

## Proof

**Proof technique:** direct.

1.1 If $V=\{0\}$, the unique endomorphism is at once $T^{-1}$ and the zero endomorphism, so the zero polynomial evaluates to $T^{-1}$. [given, algebra]

1.2 Suppose $n=\dim V\ge1$ and use the coefficients in [L2]. By [L3], $c_0\ne0$. Cayley-Hamilton gives $T^n+c_{n-1}T^{n-1}+\cdots+c_1T+c_0I=0$. [L1, L2, L3]

2.1 Multiply step 1.2 by $T^{-1}$ and solve for the inverse: $T^{-1}=-c_0^{-1}\bigl(T^{n-1}+c_{n-1}T^{n-2}+\cdots+c_2T+c_1I\bigr)$. [step 1.2, given, algebra]

3.1 The right side of step 2.1 is a polynomial in $T$, and step 1.1 handles the zero space. [step 1.1, step 2.1] ∎
