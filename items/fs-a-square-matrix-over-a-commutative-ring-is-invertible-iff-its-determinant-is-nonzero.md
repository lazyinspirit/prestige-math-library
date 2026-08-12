---
id: fs-a-square-matrix-over-a-commutative-ring-is-invertible-iff-its-determinant-is-nonzero
kind: false-statement
title: "FALSE: a square matrix over a commutative ring is invertible if and only if its determinant is nonzero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-determinant-of-a-square-matrix,
       cor-square-matrix-invertible-iff-determinant-is-a-unit, def-ring,
       thm-int-comm-ring, lem-units-of-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "András Pál, Introduction to Commutative Algebra, Proposition 7.2"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every commutative ring $R$ and every positive-sized square
matrix $A$ over $R$, the matrix $A$ is invertible if and only if
$\det(A)\neq0$.

## Facts & Assumptions

**Given:** The claimed equivalence over arbitrary commutative rings.

[F1] A ring in the published convention may be the zero ring
([[def-ring]]).

[F2] $\mathbb Z$ is a commutative ring ([[thm-int-comm-ring]]) and its only
units are $1$ and $-1$ ([[lem-units-of-z]]).

[F3] For a positive-sized square matrix $A=(a_{ij})$ over a commutative ring,
$\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)
\prod_{i<n}a_{\sigma(i),i}$
([[def-determinant-of-a-square-matrix]]).

[L1] The correct general criterion is: a positive-sized square matrix over a
commutative ring is invertible if and only if its determinant is a unit
([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

## Refutation

**Proof technique:** direct.

1.1 The reverse implication fails in $\mathbb Z$. By [F3], the unique term in the $1\times1$ determinant gives $\det([2])=2$. This determinant is nonzero but is not a unit by [F2], so [L1] shows that $[2]$ is not invertible. [F2, F3, L1, algebra]
1.2 The forward implication also fails under the stated ring convention. In the zero ring allowed by [F1], the $1\times1$ identity matrix is $[0]$; it is its own two-sided inverse, and [F3] gives its determinant as $0$. [F1, F3, algebra]
2.1 Thus both directions of the claimed equivalence can fail. Replacing "nonzero" by "a unit" gives the valid equivalence [L1], including for the zero ring. [step 1.1, step 1.2, L1] ∎
