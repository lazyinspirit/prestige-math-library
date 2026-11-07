---
id: thm-small-prime-ideal-class-generators-correct
kind: theorem
title: The bounded prime ideals generate the ideal class group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - alg-prime-ideals-of-bounded-norm
  - thm-integral-ideal-enumeration-correct
  - thm-minkowski-bound-for-ideal-classes
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ideal-norm-is-multiplicative
  - def-ideal-class-group-of-a-domain
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - def-left-right-and-two-sided-ideal
  - def-prime-and-maximal-ideals
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - thm-ring-of-integers-free-of-rank-degree
  - thm-quotient-is-domain-iff-ideal-prime
  - thm-quotient-is-field-iff-ideal-maximal
  - cor-maximal-ideals-are-prime
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Theorem 4.3"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Theorem 7.1.2"
      url: "https://wstein.org/books/ant/ant.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field of degree $n$ and signature $(r_1,r_2)$, with discriminant $d_K$. Put
$$M_K=\left(\frac4\pi\right)^{r_2}\frac{n!}{n^n}\sqrt{|d_K|}.$$
For every integer $B\ge M_K$, the prime ideals of $\mathcal O_K$ with absolute norm at most $B$ generate the finite group $\operatorname{Cl}(\mathcal O_K)$.

## Statement references

[Milne, Theorem 4.3](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Stein, Theorem 7.1.2](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, the number field, and the integer bound $B\ge M_K$.

[A1] The Axiom of Choice is the hypothesis of the Minkowski ideal-class bound ([[def-axiom-of-choice]], [[thm-minkowski-bound-for-ideal-classes]]).

[F1] Every ideal class has an integral ideal representative of norm at most $M_K$ ([[thm-minkowski-bound-for-ideal-classes]]).

[F2] Every nonzero integral ideal factors as a finite product of prime ideals, and norms multiply ([[thm-number-field-integral-ideal-factorisation-in-zf]], [[thm-ideal-norm-is-multiplicative]]).

[F3] Bounded-norm ideal enumeration returns every nonzero integral ideal of norm at most $B$, with its unique Hermite basis ([[thm-integral-ideal-enumeration-correct]]).

[F4] A nonzero integral ideal has finite quotient, and its norm is the quotient cardinality ([[def-absolute-norm-of-an-ideal]], [[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F5] An ideal is an additive subgroup stable under multiplication by the ring; its quotient is a field exactly when it is maximal, and an ideal is prime exactly when its quotient is an integral domain ([[def-left-right-and-two-sided-ideal]], [[def-prime-and-maximal-ideals]], [[thm-quotient-is-field-iff-ideal-maximal]], [[thm-quotient-is-domain-iff-ideal-prime]]).

[F6] Every maximal ideal of a commutative ring is prime ([[cor-maximal-ideals-are-prime]]).

[F7] The ideal class group is the quotient of nonzero fractional ideals by principal fractional ideals ([[def-ideal-class-group-of-a-domain]]).

## Proof



1.1 The basis input makes $\mathcal O_K$ a free rank-$n$ additive group by its integral basis. By [F3], every nonzero integral ideal with norm at most $B$ occurs among the matrices examined by the bounded-ideal algorithm. Its HNF matrix has determinant equal to its norm by the index formula, so the norm cutoff loses none of these ideals. [F3, given, algebra]

1.2 Fix any class $[I]\in\operatorname{Cl}(\mathcal O_K)$. By [F1], choose an integral ideal $\mathfrak a$ in that class with $N\mathfrak a\le M_K\le B$. [A1, F1, F7, given, choose]

2.1 For any examined ideal $\mathfrak a$ with HNF $H$, the condition $\det H>1$ says that $\mathcal O_K/\mathfrak a$ is nonzero, and by [F4] it is a finite commutative ring. The inverse test accepts exactly when every nonzero quotient class is a unit, which is precisely the field condition; [F5] then makes $\mathfrak a$ maximal and [F6] makes it prime. Conversely, if $\mathfrak a$ is a nonzero prime ideal, [F5] makes its quotient a finite integral domain. Multiplication by any nonzero class is injective and hence surjective on the finite quotient, so every nonzero class is a unit and it passes the inverse test. Therefore the filter returns exactly the nonzero prime ideals of norm at most $B$. [F4, F5, F6, step 1.1, algebra]

3.1 Factor $\mathfrak a=\prod_j\mathfrak p_j^{e_j}$ by [F2]. Since each ideal norm is a positive integer and $N\mathfrak a=\prod_j(N\mathfrak p_j)^{e_j}\le B$, every factor $\mathfrak p_j$ has norm at most $B$. By step 2.1 they all occur in the filtered output, and [F7] gives $[I]=[\mathfrak a]=\prod_j[\mathfrak p_j]^{e_j}$. Thus the output prime ideals generate every class. [F2, F7, step 2.1, step 1.2, algebra]

4.1 The set of integral ideals of norm at most $M_K$ is contained in the finite list from step 1.1 because $M_K\le B$. By [F1], every class has a representative in this set. Hence the class group is finite. [F1, step 1.1, given] ∎

