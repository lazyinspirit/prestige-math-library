---
id: alg-integral-closure-by-discriminant-cosets
kind: algorithm
title: Finite-coset search for the ring of integers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 1
deps:
  - alg-integer-column-hermite-normal-form
  - def-number-field
  - def-integral-element-and-algebraic-integer
  - def-ring-of-integers-of-a-number-field
  - def-integral-basis-and-power-integral-basis
  - def-field-norm-and-trace
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-discriminant-as-an-embedding-determinant
  - cor-trace-and-norm-of-an-algebraic-integer
  - cor-integral-elements-form-a-subring
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Proposition 2.43 and Algorithms for finding the ring of integers"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification:
  precheck: n/a
---

## Definition

Input a monic irreducible polynomial $f\in\mathbb Z[X]$ of degree $n\ge1$, a root $\alpha$, and $K=\mathbb Q(\alpha)$. Put $A=\mathbb Z[\alpha]$ in the power basis $1,\alpha,\ldots,\alpha^{n-1}$, and let $C$ be the exact companion matrix for multiplication by $\alpha$. Form the trace Gram matrix $G=(\operatorname{Tr}_{K/\mathbb Q}(\alpha^{i+j}))_{0\le i,j<n}$ by taking matrix traces of $C^{i+j}$, and put $D=|\det G|$. Enumerate all $D^n$ vectors $a=(a_0,\ldots,a_{n-1})$ with $0\le a_i<D$. For each, set $\beta_a=D^{-1}\sum_i a_i\alpha^i$, form its multiplication matrix $M_a=D^{-1}\sum_i a_iC^i$, and compute the exact rational characteristic polynomial $\chi_a(T)=\det(TI-M_a)$. Retain $a$ exactly when $\chi_a(T)\in\mathbb Z[T]$.

Return the finite coset list $\{\beta_a+A:a\text{ retained}\}$ and an integral basis as follows: form the integer matrix whose columns are $De_1,\ldots,De_n$ and all retained coordinate vectors $a$, run the exact column-Hermite algorithm, and divide its returned basis vectors by $D$.

## Definition references

[Milne, Proposition 2.43 and integral-closure algorithm, pp. 40–44](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** The polynomial, root, multiplication representation, and exact integer and rational arithmetic in the Definition.

[F1] A number field is a finite extension of $\mathbb Q$, and its ring of integers is the integral closure of $\mathbb Z$ ([[def-number-field]], [[def-ring-of-integers-of-a-number-field]]).

[F2] Norm and trace are determinant and trace of the multiplication operator ([[def-field-norm-and-trace]]).

[F3] The discriminant of a rational basis is the trace-Gram determinant and is nonzero in a number field ([[def-discriminant-of-a-number-field-basis-and-order]], [[thm-discriminant-as-an-embedding-determinant]]).

[F4] Algebraic integers form a subring, and the trace of an algebraic integer in a number field is an integer ([[cor-integral-elements-form-a-subring]], [[cor-trace-and-norm-of-an-algebraic-integer]]).

[F5] The column-Hermite procedure is the exact lattice-basis routine ([[alg-integer-column-hermite-normal-form]]).

[F6] An integral basis is a $\mathbb Z$-basis of the ring of integers ([[def-integral-basis-and-power-integral-basis]]).

## Verification



1.1 The trace Gram determinant is nonzero by [F3], so $D$ is a positive integer. The coordinate ranges contain exactly $D^n$ vectors, and each rational matrix $M_a$ and determinant $\chi_a(T)$ is computed by finitely many exact rational operations. Thus the candidate and integrality-test loops are finite. [F3, given, algebra]

2.1 The matrix supplied to the final Hermite routine contains the $n$ columns $De_i$, which are linearly independent because $D>0$. Hence it has full row rank and meets the stated input condition of the HNF algorithm; its output vectors are divided by the same nonzero integer $D$. [F5, given, step 1.1, algebra] ∎

