---
id: ex-bounded-discriminant-enumeration-repeated-presentations
kind: example
title: "Two coefficient-box candidates give repeated presentations of one quadratic field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - alg-enumerate-number-field-presentations-of-bounded-discriminant
  - thm-fixed-degree-field-enumeration-correct-and-terminates
  - def-axiom-of-choice
  - def-field-norm-and-trace
  - def-discriminant-of-a-number-field-basis-and-order
  - def-ring-of-integers-of-a-number-field
  - def-number-field
  - thm-ring-of-integers-free-of-rank-degree
  - cor-algebraic-integer-minimal-polynomial-criterion
  - thm-gauss-lemma-for-integer-polynomials
  - lem-discriminant-change-of-basis
  - thm-number-field-discriminant-is-well-defined-and-nonzero
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Chapter 3, Example 3.44"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Printed p. 64, quadratic integer bases and discriminants."
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter I, Section 2, Exercise 4"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp. 15–16, quadratic integer-basis and discriminant classification; the exercise is proved locally here."
verification: {}
---

## Example

For $n=2$ and $B=5$, both $X^2-5$ and $X^2-X-1$ belong to the coefficient box and are retained by the exact maximal-order-discriminant filter. They are distinct defining polynomials but both define $\mathbb Q(\sqrt5)$, so the output may contain repeated presentations of one field.

## Example references

[[alg-enumerate-number-field-presentations-of-bounded-discriminant|Fixed-degree coefficient-box algorithm]]

[[thm-fixed-degree-field-enumeration-correct-and-terminates|Fixed-degree search correctness theorem]]

[Milne, *Algebraic Number Theory* v3.08, Chapter 3, Example 3.44, printed p. 64](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Neukirch, *Algebraic Number Theory*, Chapter I, §2, Exercise 4, printed pp. 15–16](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions



**Given:** The Axiom of Choice, $n=2$, $B=5$, and $f_1=X^2-5$, $f_2=X^2-X-1$.

[A1] The Axiom of Choice asserts that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] For $n=2$ and $B=5$, the coefficient bounds are $A_1=5$ and $A_2=7$ ([[alg-enumerate-number-field-presentations-of-bounded-discriminant]]).

[F2] The fixed-degree search retains precisely the irreducible candidates whose maximal-order discriminant is at most $B$ ([[thm-fixed-degree-field-enumeration-correct-and-terminates]]).

[F3] Roots of monic integer polynomials are algebraic integers ([[cor-algebraic-integer-minimal-polynomial-criterion]]).

[F4] The discriminant of a basis is its trace-Gram determinant ([[def-discriminant-of-a-number-field-basis-and-order]], [[def-field-norm-and-trace]]).

[F5] Discriminants change by the square of the lattice index, and the field discriminant is a nonzero integer ([[lem-discriminant-change-of-basis]], [[thm-number-field-discriminant-is-well-defined-and-nonzero]]).

[F6] The ring of integers is free of rank $[K:\mathbb Q]$, and a number field is finite over $\mathbb Q$ ([[def-number-field]], [[thm-ring-of-integers-free-of-rank-degree]]).

[F7] A monic primitive integer polynomial is irreducible over $\mathbb Q$ exactly when it has no nonconstant integer factorization ([[thm-gauss-lemma-for-integer-polynomials]]).

## Proof

1.1 The bounds [F1] contain the coefficient pairs $(0,-5)$ of $f_1$ and $(-1,-1)$ of $f_2$. For $f_1$, a tested monic linear factor $X+t$ would require $t^2-5=0$, impossible for integer $t$. For $f_2$, it would require $t^2+t-1=0$: this is negative for $t=0,-1$, positive for $t\ge1$ and $t\le-2$, and never zero. By [F7], any rational factorization of either monic polynomial yields integer factors, and their leading coefficients can be made $1$. Thus the checked linear factors exhaust all possible proper factors and both polynomials are irreducible over $\mathbb Q$. [F1, F7, given, algebra]

2.1 By step 1.1, both polynomials are irreducible, so their roots have degree two. The root $\sqrt5$ of $f_1$ and the root $\theta=(1+\sqrt5)/2$ of $f_2$ generate the same field because $\sqrt5=2\theta-1$. By [F3], $\theta$ is integral. In the basis $1,\theta$, multiplication by $1$ has matrix $I_2$ and multiplication by $\theta$ has matrix $\begin{pmatrix}0&1\\1&1\end{pmatrix}$; their traces are $2$ and $1$. Since $\theta^2=\theta+1$, the trace of $\theta^2$ is $3$, so [F4] gives discriminant $5$. The vectors $1,\theta$ are linearly independent over $\mathbb Q$; [F6] makes $\mathcal O_K$ a rank-two lattice containing them, so their inclusion matrix has full rank and finite index $m$. By [F5], $5=m^2|d_K|$; primality of $5$ forces $m=1$, so this is the full field discriminant. [F3, F4, F5, F6, step 1.1, given, algebra]

3.1 Each candidate therefore defines a degree-two field of discriminant $5\le B$, so [F2] makes the search retain both. They are distinct polynomials and define isomorphic fields by step 2.1; the output convention does not deduplicate isomorphic fields. [F2, step 1.1, step 2.1, algebra] ∎
