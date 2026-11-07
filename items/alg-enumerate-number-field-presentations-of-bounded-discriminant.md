---
id: alg-enumerate-number-field-presentations-of-bounded-discriminant
kind: algorithm
title: "Finite coefficient-box enumeration in a fixed degree"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - alg-integral-closure-by-discriminant-cosets
  - def-number-field
  - def-discriminant-of-a-number-field-basis-and-order
  - def-field-norm-and-trace
  - thm-gauss-lemma-for-integer-polynomials
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Chapter 8, Theorem 8.43 proof, pp. 151–152"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter III, §2, Theorem (2.16), pp. 205–206"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
verification: {}
---

## Definition

Let $n,B\ge1$ be integers. If $n=1$, return the one polynomial $X$. If $n\ge2$, compute for each $1\le k\le n$ the integer
$$A_k=\left\lfloor\sqrt{\binom nk^2(B+2)^k}\right\rfloor$$
using integer arithmetic. Enumerate all monic polynomials $f=X^n+c_1X^{n-1}+\cdots+c_n\in\mathbb Z[X]$ with $|c_k|\le A_k$. For each candidate, first test irreducibility over $\mathbb Q$ by enumerating monic integer polynomials $g$ of degrees $1\le r\le\lfloor n/2\rfloor$ and checking exact divisibility $g\mid f$. For this test, put $R=1+\max_k|c_k|$ and restrict the coefficient of $X^{r-j}$ in $g$ to the integers of absolute value at most $\binom rjR^j$, for every $1\le j\le r$. Reject $f$ if a divisor is found. For each remaining $f$, apply the finite discriminant-coset integral-closure algorithm to the field $\mathbb Q[X]/(f)$, compute the trace-Gram determinant of its returned integral basis, and retain $f$ exactly when the absolute value of this determinant is at most $B$. Return the retained polynomials in lexicographic order of $(c_1,\ldots,c_n)$; repeated isomorphic fields are allowed.

## Definition references

[Milne, *Algebraic Number Theory* v3.08, Chapter 8, Theorem 8.43 proof, pp. 151–152](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Neukirch, *Algebraic Number Theory*, Chapter III, §2, Theorem (2.16), pp. 205–206](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** Integers $n,B\ge1$ and exact integer/rational arithmetic.

[F1] The finite-coset procedure returns an integral-basis output for a monic irreducible polynomial over $\mathbb Z$ ([[alg-integral-closure-by-discriminant-cosets]]).

[F2] A field defined by an irreducible polynomial of degree $n$ over $\mathbb Q$ is a number field ([[def-number-field]]).

[F3] A primitive integer polynomial is reducible over $\mathbb Q$ exactly when it has a factorization into positive-degree integer polynomials ([[thm-gauss-lemma-for-integer-polynomials]]).

[F4] The discriminant of an ordered basis is its trace-Gram determinant ([[def-discriminant-of-a-number-field-basis-and-order]], [[def-field-norm-and-trace]]).

## Verification


1.1 If $n=1$, the algorithm returns $X$ immediately. Now assume $n\ge2$. The coefficient boxes contain finitely many integer tuples. For each candidate put $C=\max_k|c_k|$ and $R=1+C$. If a complex root $z$ satisfied $|z|>R$, then $\left|\sum_{k=1}^n c_kz^{n-k}\right|\le C\sum_{j=0}^{n-1}|z|^j=C\frac{|z|^n-1}{|z|-1}<|z|^n,$ contradicting $f(z)=0$. Thus every root has modulus at most $R$. Every root of a monic factor is among the roots of $f$, and expansion as a product of linear factors bounds its coefficient of $X^{r-j}$ by $\binom rjR^j$. Each divisor box is finite, and exact polynomial division and integer square roots use finite arithmetic. [given, algebra]

2.1 By [F3], if a monic integer candidate is reducible over $\mathbb Q$, its rational factorization can be taken to have monic integer factors; choose the factor with degree at most $n/2$. Step 1.1 shows that factor occurs in a tested finite box. Therefore every candidate left by the factor test is irreducible, and [F2] makes its quotient a number field. [F2, F3, step 1.1, algebra]

3.1 The prescribed integral-closure routine returns a finite basis list by [F1]. Matrix traces and determinants of its rational multiplication matrices are finite exact arithmetic operations; [F4] identifies the computed determinant as the discriminant of that returned ordered basis, which is the integer compared with $B$ by the algorithm. This establishes termination of the filter and finite sort. [F1, F4, step 2.1, algebra] ∎
