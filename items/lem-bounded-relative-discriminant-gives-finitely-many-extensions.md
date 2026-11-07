---
id: lem-bounded-relative-discriminant-gives-finitely-many-extensions
kind: lemma
title: "A fixed-base relative discriminant bound gives finitely many extension classes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive
  - thm-hermite-minkowski-finiteness
  - def-number-field
  - def-relative-discriminant-ideal-of-a-number-field-extension
  - def-axiom-of-choice
  - def-absolute-norm-of-an-ideal
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
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

Assume the Axiom of Choice. Let $K$ be a number field, let $n\ge1$ be an integer, and let $X\ge1$ be real. There are only finitely many $K$-isomorphism classes of degree-$n$ extensions $L/K$ satisfying $N_{K/\mathbb Q}\mathfrak d_{L/K}\le X$.

## Statement references

[Milne, *Algebraic Number Theory* v3.08, Chapter 8, Theorem 8.43 proof, pp. 151–152](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

[Neukirch, *Algebraic Number Theory*, Chapter III, §2, Theorem (2.16), pp. 205–206](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions


**Given:** The Axiom of Choice, a number field $K$, an integer $n\ge1$, and a real $X\ge1$.

[A1] The Axiom of Choice asserts that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The relative discriminant tower identity is $|d_L|=|d_K|^{[L:K]}N_{K/\mathbb Q}\mathfrak d_{L/K}$ ([[thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive]]).

[F2] Under AC, for positive integers $m,B$, only finitely many $\mathbb Q$-isomorphism classes of degree-$m$ number fields have absolute discriminant at most $B$ ([[thm-hermite-minkowski-finiteness]]).

[F3] Every finite separable extension is simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]); embeddings of a simple extension correspond to distinct roots of its minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]), which has at most its degree many distinct complex roots ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

[F4] The absolute discriminant of a number field is a positive integer ([[thm-number-field-discriminant-is-well-defined-and-nonzero]]).

## Proof

1.1 For any $L/K$ in the statement, the tower identity [F1] and the bound on the relative norm give $|d_L|=|d_K|^nN_{K/\mathbb Q}\mathfrak d_{L/K}\le |d_K|^nX$. Choose an integer $B\ge |d_K|^nX$. [F1, F4, given, choose, algebra]

2.1 Each such $L$ has degree $[L:\mathbb Q]=n[K:\mathbb Q]$ and absolute discriminant at most $B$. By [F2], only finitely many $\mathbb Q$-isomorphism classes of underlying fields $L$ can occur. [F2, step 1.1, given, algebra]

3.1 For each of those finitely many classes choose a representative field $E$. The number of $\mathbb Q$-embeddings $K\to E$ is finite: [F3] gives a primitive element $\theta$ of $K/\mathbb Q$, each embedding is determined by the image of $\theta$, and that image must be a distinct root of its degree-$[K:\mathbb Q]$ minimal polynomial. Hence there are at most $[K:\mathbb Q]$ such embeddings. [A1, F3, step 2.1, given, choose, algebra]

4.1 Every $K$-isomorphism class of extensions $L/K$ under consideration yields one of the finitely many pairs consisting of an underlying $\mathbb Q$-isomorphism class from step 2.1 and an embedding of $K$ into its representative from step 3.1. Conversely, every extension gives such a pair by transporting the base-field inclusion along a $\mathbb Q$-isomorphism. Thus the finite set of pairs surjects onto the classes being counted, proving their finiteness. [A1, step 2.1, step 3.1, given, algebra] ∎
