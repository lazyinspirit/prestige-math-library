---
id: thm-integral-closure-coset-search-correct
kind: theorem
title: The discriminant-coset search returns the ring of integers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - alg-integral-closure-by-discriminant-cosets
  - alg-integer-column-hermite-normal-form
  - thm-integer-column-hnf-terminates-and-is-canonical
  - def-number-field
  - def-integral-element-and-algebraic-integer
  - def-ring-of-integers-of-a-number-field
  - def-integral-basis-and-power-integral-basis
  - def-field-norm-and-trace
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-ring-of-integers-free-of-rank-degree
  - cor-integral-elements-form-a-subring
  - cor-trace-and-norm-of-an-algebraic-integer
  - thm-discriminant-as-an-embedding-determinant
  - thm-cayley-hamilton
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Proposition 2.43 and integral-closure algorithm"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification: {}
---

## Statement

For a monic irreducible $f\in\mathbb Z[X]$ of degree $n\ge1$, a root $\alpha$, and $K=\mathbb Q(\alpha)$, the finite-coset search returns exactly the integral cosets in $D^{-1}\mathbb Z[\alpha]/\mathbb Z[\alpha]$, and its returned basis is a $\mathbb Z$-basis of $\mathcal O_K$, where $D$ is the absolute discriminant of the power basis.

## Statement references

[Milne, Proposition 2.43 and integral-closure algorithm, pp. 40–44](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** The polynomial, root, and algorithm in the Statement.

[F1] The power basis consists of algebraic integers, and the integral elements form the ring of integers ([[def-integral-element-and-algebraic-integer]], [[def-ring-of-integers-of-a-number-field]]).

[F2] The trace of an algebraic integer is an integer; trace is the trace of its multiplication operator ([[cor-trace-and-norm-of-an-algebraic-integer]], [[def-field-norm-and-trace]]).

[F3] The trace Gram determinant of a rational basis is nonzero ([[def-discriminant-of-a-number-field-basis-and-order]], [[thm-discriminant-as-an-embedding-determinant]]).

[F4] Integral elements are closed under sums and products ([[cor-integral-elements-form-a-subring]]).

[F5] Cayley–Hamilton says that a finite-dimensional endomorphism satisfies its characteristic polynomial ([[thm-cayley-hamilton]]).

[F6] The column-Hermite algorithm returns the canonical basis of its generated lattice ([[alg-integer-column-hermite-normal-form]], [[thm-integer-column-hnf-terminates-and-is-canonical]]).

[F7] The ring of integers is a free $\mathbb Z$-module of rank $[K:\mathbb Q]$, so multiplication by an integral element has an integer matrix in an integral basis ([[thm-ring-of-integers-free-of-rank-degree]], [[def-integral-basis-and-power-integral-basis]]).

## Proof



1.1 Let $\beta\in\mathcal O_K$ and write $\beta=\sum_{i=0}^{n-1}x_i\alpha^i$ with $x_i\in\mathbb Q$. For each $j$, $t_j=\operatorname{Tr}_{K/\mathbb Q}(\beta\alpha^j)$ is an integer by [F1], [F2], and [F4]. If $G$ is the trace Gram matrix, then $Gx=t$. Its entries are integers and $\det G=\pm D\ne0$ by [F2]–[F3]. Multiplying by the integer adjugate gives $Dx=\pm\operatorname{adj}(G)t\in\mathbb Z^n$. Thus $\mathcal O_K\subseteq D^{-1}\mathbb Z[\alpha]$; the reverse inclusion $\mathbb Z[\alpha]\subseteq\mathcal O_K$ follows from [F1]. [F1, F2, F3, F4, given, algebra]

2.1 Every coset in $D^{-1}\mathbb Z[\alpha]/\mathbb Z[\alpha]$ has exactly one representative $D^{-1}\sum_i a_i\alpha^i$ with $0\le a_i<D$, by division of each integer coordinate by $D$. Hence the algorithm's $D^n$ representatives cover all possible integral cosets. [step 1.1, given, algebra]

3.1 Integrality is constant on each coset modulo $\mathbb Z[\alpha]$: adding or subtracting an element of that ring preserves integrality by [F1] and [F4]. For any representative $\beta$, multiplication by $\beta$ preserves $\mathcal O_K$ when $\beta$ is integral; [F7] gives an integer matrix in an integral basis, so its characteristic polynomial has integer coefficients. If $S$ is the rational change-of-basis matrix from the power basis to that integral basis, the two matrices are $M$ and $S^{-1}MS$, and $\det(TI-S^{-1}MS)=\det(S^{-1})\det(TI-M)\det(S)=\det(TI-M)$. Conversely, if the characteristic polynomial lies in $\mathbb Z[T]$, [F5] applied to multiplication by $\beta$, then evaluated at $1\in K$, gives a monic integer polynomial annihilating $\beta$. Thus the algorithm retains exactly the integral cosets. [F1, F4, F5, F7, step 2.1, given, algebra]

4.1 Multiplying the coset representatives by $D$ shows that the retained coordinate vectors together with $De_1,\ldots,De_n$ generate exactly $D\mathcal O_K$. By [F6] their column-Hermite basis is a $\mathbb Z$-basis of this lattice; dividing by $D$ gives a basis of $\mathcal O_K$. The search has only $D^n$ tests and a terminating Hermite reduction, so it terminates. [F6, step 3.1, algebra] ∎

