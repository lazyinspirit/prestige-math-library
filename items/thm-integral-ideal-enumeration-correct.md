---
id: thm-integral-ideal-enumeration-correct
kind: theorem
title: Bounded-norm HNF enumeration returns exactly the integral ideals
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - alg-integral-ideals-of-bounded-norm
  - thm-integer-column-hnf-terminates-and-is-canonical
  - def-ring-of-integers-of-a-number-field
  - thm-ring-of-integers-free-of-rank-degree
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - def-left-right-and-two-sided-ideal
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Lemma 2.44 and Remark 2.45(b)"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Proposition 6.3.6"
      url: "https://wstein.org/books/ant/ant.pdf"
verification: {}
---

## Statement

Given a number field $K$, an integral basis, its multiplication table, and an integer $B\ge1$, the bounded-norm ideal enumeration terminates and returns exactly the nonzero integral ideals $\mathfrak a\subseteq\mathcal O_K$ with $N\mathfrak a\le B$, each represented by its unique canonical upper-triangular column-Hermite basis.

## Statement references

[Milne, Lemma 2.44 and Remark 2.45(b)](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Stein, Proposition 6.3.6, p. 76](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The number field, integral basis, multiplication table, and bound in the Statement.

[F1] The ring of integers is a free $\mathbb Z$-module of rank $n=[K:\mathbb Q]$ ([[def-ring-of-integers-of-a-number-field]], [[thm-ring-of-integers-free-of-rank-degree]]).

[F2] The absolute norm of a nonzero integral ideal is the finite quotient cardinality ([[def-absolute-norm-of-an-ideal]], [[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F3] Every full-rank integer sublattice has a unique canonical column-Hermite basis ([[thm-integer-column-hnf-terminates-and-is-canonical]]).

[F4] The algorithm enumerates exactly the upper-triangular matrices whose multiplication tables preserve the lattice ([[alg-integral-ideals-of-bounded-norm]]).

[F5] An ideal is an additive subgroup stable under multiplication by every ring element ([[def-left-right-and-two-sided-ideal]]).

## Proof



1.1 The positive diagonal entries of an upper-triangular candidate satisfy $h_{11}\cdots h_{nn}\le B$, so there are finitely many diagonal tuples. For each tuple there are finitely many off-diagonal residues $0\le h_{ij}<h_{ii}$. Thus the candidate list and every multiplication-stability test are finite. [given, F4, algebra]

1.2 Every nonzero integral ideal is an additive subgroup of the free rank-$n$ lattice $\mathcal O_K$ by [F5]; [F3] gives its unique upper-triangular basis $H$. Stability under multiplication by each basis element is equivalent to being an $\mathcal O_K$-ideal, because the integral basis additively generates $\mathcal O_K$. Therefore the algorithm keeps exactly the HNF bases of integral ideals. [F1, F3, F4, F5, algebra]

2.1 The index of the lattice with basis $H$ in $\mathbb Z^n$ is $|\det H|=\det H$. Under the integral basis, this is $|\mathcal O_K/H\mathbb Z^n|=N\mathfrak a$ by [F2]. The bound test $\det H\le B$ therefore keeps exactly the ideals of norm at most $B$. [F2, step 1.2, algebra]

3.1 Steps 1.1 and 2.1 prove finite termination and exactness of the returned list. [step 1.1, step 2.1] ∎

