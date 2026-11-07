---
id: alg-prime-ideals-of-bounded-norm
kind: algorithm
title: Enumerate prime ideals up to a norm bound
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 3
deps:
  - alg-integral-ideals-of-bounded-norm
  - thm-integral-ideal-enumeration-correct
  - def-absolute-norm-of-an-ideal
  - def-left-right-and-two-sided-ideal
  - def-prime-and-maximal-ideals
  - thm-quotient-is-domain-iff-ideal-prime
  - thm-quotient-is-field-iff-ideal-maximal
  - cor-maximal-ideals-are-prime
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Chapter 7"
      url: "https://wstein.org/books/ant/ant.pdf"
verification:
  precheck: n/a
---

## Definition

Input the data for bounded-norm integral-ideal enumeration and an integer $B\ge1$. Run that enumeration. For each output HNF matrix $H$, enumerate representatives of $\mathbb Z^n/H\mathbb Z^n$ by back-substitution from the last coordinate to the first, choosing coordinate $z_i$ with $0\le z_i<h_{ii}$. Use the multiplication table and reduction modulo $H$ to compute the quotient-ring product. Keep $H$ exactly when $\det H>1$ and every nonzero residue class has a multiplicative inverse. Return the kept ideals and their norms.

The determinant guard excludes the unit ideal: its zero quotient has no nonzero elements, so an inverse test alone would pass vacuously. The output is a finite set because the preceding bounded-ideal search is finite.

## Definition references

[Milne, Chapter 4](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Stein, Chapter 7](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** A number field in an integral basis, its multiplication table, and $B\ge1$.

[F1] Bounded-norm ideal enumeration returns the finite list of integral ideals up to norm $B$ ([[alg-integral-ideals-of-bounded-norm]], [[thm-integral-ideal-enumeration-correct]]).

[F2] A prime ideal is a proper ideal $P$ such that $ab\in P$ implies $a\in P$ or $b\in P$ ([[def-left-right-and-two-sided-ideal]], [[def-prime-and-maximal-ideals]]).

[F3] The absolute norm of an integral ideal is the cardinality of its quotient ring ([[def-absolute-norm-of-an-ideal]]).

[F4] An ideal is maximal exactly when its quotient is a field, prime exactly when its quotient is an integral domain, and every maximal ideal is prime ([[thm-quotient-is-field-iff-ideal-maximal]], [[thm-quotient-is-domain-iff-ideal-prime]], [[cor-maximal-ideals-are-prime]]).

## Verification



1.1 The HNF quotient representatives are unique: choose the last coordinate modulo $h_{nn}$, subtract that multiple of the last basis column, and continue upward; positive diagonal entries make each remainder unique. The resulting finite list has exactly $\det H$ representatives. [F1, given, algebra]

2.1 The determinant guard ensures the quotient ring is nonzero. In a finite commutative ring with identity $1\ne0$, the inverse test accepts exactly when the quotient is a field; by [F4] its ideal is then maximal and hence prime. Conversely, if the ideal is prime then [F4] makes the quotient an integral domain, and multiplication by each nonzero class is injective and therefore surjective on this finite set, so the test accepts. Thus the guard and inverse test characterize the nonzero prime ideals in the finite candidate list. [F2, F3, F4, given, algebra] ∎

