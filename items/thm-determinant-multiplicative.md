---
id: thm-determinant-multiplicative
kind: theorem
title: 'For same-sized finite square matrices over a commutative ring, $\det(AB)=\det(A)\det(B)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-determinant-is-the-unique-normalized-alternating-multilinear-function, lem-rigidity-of-alternating-multilinear-matrix-functions, thm-ring-matrix-arithmetic-laws, def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.24"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, Lemma 6.4.2"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Statement

For $n\ge1$ and $A,B\in M_n(R)$ over a commutative ring,
$$\det(AB)=\det(A)\det(B).$$

## Facts & Assumptions

**Given:** A fixed matrix $A\in M_n(R)$ and a variable matrix $B\in M_n(R)$.

[L1] Determinant is the unique normalized alternating column-multilinear matrix function ([[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]]).

[L2] Every alternating column-multilinear $F$ satisfies $F(B)=F(I_n)\det(B)$ ([[lem-rigidity-of-alternating-multilinear-matrix-functions]]).

[L3] Matrix multiplication is associative, distributive and unital ([[thm-ring-matrix-arithmetic-laws]]).

[L4] Determinant is defined for every square matrix over the commutative ring ([[def-determinant-of-a-square-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Define $F(B):=\det(AB)$. Each column of $AB$ is $A$ times the corresponding column of $B$, so distributivity makes $F$ column-multilinear; equal columns of $B$ give equal columns of $AB$, so $F$ is alternating. [L1, L2, L3, L4]

2.1 Since $AI_n=A$, one has $F(I_n)=\det(A)$. [step 1.1, L3, L4]

3.1 Apply [L2] to $F$: $\det(AB)=F(B)=F(I_n)\det(B)=\det(A)\det(B)$. Neither matrix was assumed invertible. [step 2.1, L2, algebra] ∎
