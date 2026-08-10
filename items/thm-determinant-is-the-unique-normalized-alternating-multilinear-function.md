---
id: thm-determinant-is-the-unique-normalized-alternating-multilinear-function
kind: theorem
title: "The determinant is the unique normalized alternating multilinear function on the columns"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-rigidity-of-alternating-multilinear-matrix-functions, thm-leibniz-determinant-is-alternating-multilinear-and-normalized]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.22"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, Definition 6.4.1"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Statement

For $n\ge1$ over a commutative ring, determinant is the unique function $F:M_n(R)\to R$ that is column-multilinear, alternating and normalized.

## Facts & Assumptions

**Given:** A normalized alternating column-multilinear function $F:M_n(R)\to R$.

[L1] Every alternating column-multilinear function satisfies the rigidity formula $F(A)=F(I_n)\det(A)$ ([[lem-rigidity-of-alternating-multilinear-matrix-functions]]).

[L2] The Leibniz determinant itself is alternating, column-multilinear and normalized ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L2] proves existence of a function with the three properties. [L1, L2]

2.1 If $F$ has them, normalization gives $F(I_n)=1$, so [L1] gives $F(A)=\det(A)$ for every $A$. Hence the function is unique. [step 1.1, L1, algebra] ∎

