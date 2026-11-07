---
id: alg-integral-ideals-of-bounded-norm
kind: algorithm
title: Enumerate integral ideals up to a norm bound
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 0
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-integral-basis-and-power-integral-basis
  - thm-ring-of-integers-free-of-rank-degree
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - def-left-right-and-two-sided-ideal
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Lemma 2.44 and Remark 2.45(b)"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Proposition 6.3.6"
      url: "https://wstein.org/books/ant/ant.pdf"
verification:
  precheck: n/a
---

## Definition

Input a number field $K$ with integral basis $e_1=1,e_2,\ldots,e_n$, its exact multiplication matrices $M_{e_i}$ in that basis, and an integer $B\ge1$. Enumerate all upper-triangular integer matrices $H=(h_{ij})$ satisfying $h_{ii}>0$, $0\le h_{ij}<h_{ii}$ for $i<j$, and $\det H\le B$. Keep $H$ exactly when every matrix $H^{-1}M_{e_i}H$ has integer entries. Return the lattices $H\mathbb Z^n$ and their indices $\det H$.

The finite search can be performed by enumerating positive diagonal tuples with product at most $B$, then the finitely many allowed off-diagonal residues for each tuple. The returned lattices are the candidate integral ideals; the separate correctness theorem establishes that the filter returns exactly those ideals of norm at most $B$.

## Definition references

[Milne, Lemma 2.44 and Remark 2.45(b)](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Stein, Proposition 6.3.6](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The field, integral basis, multiplication matrices, and bound specified in the Definition.

[F1] The ring of integers is a free $\mathbb Z$-module of rank $[K:\mathbb Q]$, and an integral basis is a $\mathbb Z$-basis ([[thm-ring-of-integers-free-of-rank-degree]], [[def-integral-basis-and-power-integral-basis]]).

[F2] The norm of a nonzero integral ideal is the cardinality of its quotient, which is finite ([[def-absolute-norm-of-an-ideal]], [[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F3] An ideal is an additive subgroup stable under multiplication by elements of the ring ([[def-left-right-and-two-sided-ideal]]).

## Verification



1.1 For each positive diagonal tuple with product at most $B$, every off-diagonal entry has a finite range. There are finitely many such tuples and residues, and every test computes finitely many exact matrix products and rational inverse entries. [F1, given, algebra]

2.1 A lattice $H\mathbb Z^n$ is an $\mathcal O_K$-submodule exactly when it is stable under multiplication by each additive basis element $e_i$: stability for all $e_i$ extends to their integer linear combinations, and ideal stability implies each test. [F3, given, algebra] ∎

