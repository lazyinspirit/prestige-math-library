---
id: alg-enumerate-number-fields-with-discriminant-at-most
kind: algorithm
title: "Enumerate bounded-discriminant field presentations over all degrees"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-enumerate-number-field-presentations-of-bounded-discriminant
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

Let $B\ge1$ be an integer. Compute $n_{\max}=6B-3$. For each integer $n=1,2,\ldots,n_{\max}$ in increasing order, run the fixed-degree coefficient-box algorithm with inputs $(n,B)$. Return the concatenation of these finite lists, retaining all defining-polynomial presentations even when two define isomorphic fields.

## Definition references

[Milne, *Algebraic Number Theory* v3.08, Chapter 8, Theorem 8.43 proof, pp. 151–152](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Neukirch, *Algebraic Number Theory*, Chapter III, §2, Theorem (2.16), pp. 205–206](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** An integer $B\ge1$.

[F1] For every fixed pair of integers $n,B\ge1$, the coefficient-box search is a finite terminating list of presentations ([[alg-enumerate-number-field-presentations-of-bounded-discriminant]]).

## Verification

1.1 The loop has $n_{\max}=6B-3\ge3$ iterations, hence finitely many. For each fixed $n$, [F1] terminates and returns a finite list. A finite concatenation of finite lists is finite and the wrapper therefore terminates. [F1, given, algebra]

2.1 The output order is the prescribed increasing-degree concatenation, and repeated polynomials or isomorphic fields are retained because no deduplication pass is specified. This convention is finite because step 1.1 proves every sublist finite. [given, step 1.1, algebra] ∎
