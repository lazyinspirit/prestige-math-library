---
id: thm-galois-group-of-an-irreducible-cubic-by-discriminant
kind: theorem
title: "A monic irreducible separable cubic in characteristic not two has Galois group $A_3$ or $S_3$ according to its discriminant"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-irreducible-separable-polynomial-iff-galois-group-transitive, thm-discriminant-square-criterion-for-an-alternating-galois-group, def-alternating-group, cor-orbit-stabilizer-cardinality, thm-lagrange]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Example 4.7"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Theorem 2.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Statement

Let $f\in F[x]$ be a monic irreducible separable cubic over a field of characteristic not two. Then its Galois group is $A_3$ when its discriminant is a square and $S_3$ when its discriminant is not a square.

## Facts & Assumptions

**Given:** The orbit-stabilizer cardinality formula ([[cor-orbit-stabilizer-cardinality]]), Lagrange's divisibility theorem ([[thm-lagrange]]), and the alternating group of [[def-alternating-group]].

[L1] A positive-degree separable polynomial is irreducible if and only if its Galois group acts transitively on its roots ([[thm-irreducible-separable-polynomial-iff-galois-group-transitive]]).

[L2] For a monic separable polynomial in characteristic not two, the Galois group lies in $A_n$ exactly when the discriminant is a square in the base field ([[thm-discriminant-square-criterion-for-an-alternating-galois-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the Galois group $G\le S_3$ acts transitively on three roots. Orbit-stabilizer makes $3$ divide $|G|$, while Lagrange makes $|G|$ divide $6$; hence $|G|$ is $3$ or $6$. In the first case every nonidentity element is a three-cycle and $G=A_3$, while in the second $G=S_3$. [L1, given, algebra]

2.1 If the discriminant is a square, [L2] gives $G\le A_3$, so step 1.1 forces $G=A_3$. If it is not a square, [L2] gives $G\nleq A_3$, so step 1.1 forces $G=S_3$. The two square classes are exhaustive, and separability remains an explicit hypothesis in characteristic three. [step 1.1, L2] ∎
