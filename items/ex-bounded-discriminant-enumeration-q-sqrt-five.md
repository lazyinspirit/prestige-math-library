---
id: ex-bounded-discriminant-enumeration-q-sqrt-five
kind: example
title: "The quadratic field of discriminant five appears in the bounded search"
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

In the fixed-degree search with $n=2$ and $B=5$, the monic polynomial $X^2-X-1$ lies in the coefficient box and defines $K=\mathbb Q(\sqrt5)$. Its integral basis is $1,\theta$ with $\theta=(1+\sqrt5)/2$, and its absolute field discriminant is $5$, so the search retains this presentation.

## Example references

[[alg-enumerate-number-field-presentations-of-bounded-discriminant|Fixed-degree coefficient-box algorithm]]

[[thm-fixed-degree-field-enumeration-correct-and-terminates|Fixed-degree search correctness theorem]]

[Milne, *Algebraic Number Theory* v3.08, Chapter 3, Example 3.44, printed p. 64](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Neukirch, *Algebraic Number Theory*, Chapter I, §2, Exercise 4, printed pp. 15–16](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions



**Given:** The Axiom of Choice, $n=2$, $B=5$, and $f=X^2-X-1$.

[A1] The Axiom of Choice asserts that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] For $n=2$, the coefficient bounds are $A_1=\lfloor\sqrt{4(B+2)}\rfloor$ and $A_2=\lfloor\sqrt{(B+2)^2}\rfloor$ ([[alg-enumerate-number-field-presentations-of-bounded-discriminant]]).

[F2] The fixed-degree search retains exactly irreducible presentations whose maximal-order discriminant is at most $B$ ([[thm-fixed-degree-field-enumeration-correct-and-terminates]]).

[F3] A root of a monic integer polynomial is an algebraic integer, and the ring of integers consists of the algebraic integers ([[cor-algebraic-integer-minimal-polynomial-criterion]], [[def-ring-of-integers-of-a-number-field]]).

[F4] For a basis $\beta_1,\beta_2$, its discriminant is $\det(\operatorname{Tr}(\beta_i\beta_j))$ ([[def-discriminant-of-a-number-field-basis-and-order]], [[def-field-norm-and-trace]]).

[F5] A change between full-rank integral lattices multiplies discriminants by the square of the index ([[lem-discriminant-change-of-basis]]), and the field discriminant is a nonzero integer ([[thm-number-field-discriminant-is-well-defined-and-nonzero]]).

[F6] The ring of integers is free of rank $[K:\mathbb Q]$, and a number field is finite over $\mathbb Q$ ([[def-number-field]], [[thm-ring-of-integers-free-of-rank-degree]]).

[F7] A monic primitive integer polynomial is irreducible over $\mathbb Q$ exactly when it has no nonconstant integer factorization ([[thm-gauss-lemma-for-integer-polynomials]]).

## Proof

1.1 With $B=5$, [F1] gives $A_1=\lfloor\sqrt{28}\rfloor=5$ and $A_2=\lfloor\sqrt{49}\rfloor=7$. The coefficients $c_1=-1$ and $c_2=-1$ satisfy these bounds, so $f$ is in the enumerated coefficient box. [F1, given, algebra]

2.1 Here $R=1+\max(|c_1|,|c_2|)=2$. Every possible monic proper factor has degree one and is $X+t$ with $t\in\mathbb Z$, $|t|\le R=2$. If it divided $f$, then $f(-t)=t^2+t-1=0$. For $t\ge1$ this is at least $1$, for $t=0$ it is $-1$, and for $t=-s$ with $s\ge1$ it is $s^2-s-1$, which equals $-1$ at $s=1$ and is positive for $s\ge2$. By [F7], any rational factorization would yield integer factors; because $f$ is monic their leading coefficients can be made $1$, so a rational factorization would give a tested monic linear factor. No such factor exists, hence $f$ is irreducible over $\mathbb Q$. [F1, F7, step 1.1, algebra]

3.1 By step 2.1, $\theta=(1+\sqrt5)/2$ has degree two, satisfies $\theta^2-\theta-1=0$, and generates $K=\mathbb Q(\sqrt5)$ because $\sqrt5=2\theta-1$. It is integral by [F3], and $1,\theta$ is a $\mathbb Q$-basis. Multiplication by $1$ has matrix $I_2$ and multiplication by $\theta$ has matrix $\begin{pmatrix}0&1\\1&1\end{pmatrix}$, with traces $2$ and $1$. Since $\theta^2=\theta+1$, its multiplication matrix has trace $3$. Therefore [F4] gives trace matrix $\begin{pmatrix}2&1\\1&3\end{pmatrix}$, of determinant and order discriminant $5$. [F3, F4, given, step 2.1, algebra]

4.1 The vectors $1,\theta$ are linearly independent over $\mathbb Z$, and [F6] makes $\mathcal O_K$ a free rank-two lattice containing them; expressing them in an integral basis gives a full-rank integer matrix, so the index $m=[\mathcal O_K:\mathbb Z[\theta]]$ is finite. By [F5], $5=m^2|d_K|$ with $|d_K|$ a positive integer. Since $5$ is prime, $m=1$, so $1,\theta$ is an integral basis and $|d_K|=5$. The field discriminant filter therefore retains $f$ by [F2]. [F2, F5, F6, step 2.1, step 3.1, algebra] ∎
