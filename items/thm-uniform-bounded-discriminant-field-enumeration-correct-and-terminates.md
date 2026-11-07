---
id: thm-uniform-bounded-discriminant-field-enumeration-correct-and-terminates
kind: theorem
title: "The uniform field-presentation enumeration is complete and terminating"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - alg-enumerate-number-fields-with-discriminant-at-most
  - thm-fixed-degree-field-enumeration-correct-and-terminates
  - lem-number-field-degree-bounded-by-discriminant
  - def-axiom-of-choice
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

## Statement

Assume the Axiom of Choice. For every integer $B\ge1$, the all-degree enumeration terminates, returns only monic irreducible polynomial presentations of number fields with absolute discriminant at most $B$, and includes at least one presentation of every $\mathbb Q$-isomorphism class of such fields. Isomorphic fields may occur more than once.

## Statement references

[Milne, *Algebraic Number Theory* v3.08, Chapter 8, Theorem 8.43 proof, pp. 151–152](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Neukirch, *Algebraic Number Theory*, Chapter III, §2, Theorem (2.16), pp. 205–206](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice and an integer $B\ge1$.

[A1] The Axiom of Choice asserts that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The all-degree enumeration concatenates fixed-degree lists for $1\le n\le6B-3$ ([[alg-enumerate-number-fields-with-discriminant-at-most]]).

[F2] Each fixed-degree list is sound, complete up to duplicates, and terminating under AC ([[thm-fixed-degree-field-enumeration-correct-and-terminates]]).

[F3] Every field with $|d_K|\le B$ has degree at most $6B-3$ ([[lem-number-field-degree-bounded-by-discriminant]]).

## Proof

1.1 The wrapper makes a finite number $6B-3$ of fixed-degree calls by [F1]. Each call terminates and yields a finite list by [F2], so their concatenation terminates. [A1, F1, F2, given, algebra]

2.1 Every output lies in one fixed-degree list. Its polynomial is irreducible and defines a degree-$n$ field with discriminant at most $B$ by [F2], which proves soundness for every returned presentation. [F1, F2, step 1.1]

3.1 Let $K$ be any number field with $|d_K|\le B$. By [F3], its degree lies in the wrapper's range. The fixed-degree completeness in [F2] supplies a returned polynomial for its $\mathbb Q$-isomorphism class. No uniqueness is needed because the wrapper explicitly retains repeated presentations. [F1, F2, F3, given, algebra] ∎
