---
id: thm-determinant-of-a-triangular-matrix
kind: theorem
title: "The determinant of a triangular matrix is the product of its diagonal entries"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangular-and-diagonal-matrices-over-a-commutative-ring, def-determinant-of-a-square-matrix, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Ch. 4"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §4.1"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

If $A=(a_{ij})\in M_n(R)$ is upper or lower triangular over a commutative ring, with $n\ge1$, then
$$\det(A)=\prod_{i<n}a_{ii}.$$

## Facts & Assumptions

**Given:** A triangular $n\times n$ matrix $A$ over a commutative ring.

[L1] Upper triangular means $a_{ij}=0$ for $i>j$, while lower triangular means $a_{ij}=0$ for $i<j$ ([[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]).

[L2] Determinant is the sum of the signed products $\prod_i a_{\sigma(i),i}$ ([[def-determinant-of-a-square-matrix]]).

[L3] The identity permutation has sign $1$ ([[def-inversions-inversion-number-and-sign]]).

## Proof

**Proof technique:** direct.

1.1 For an upper triangular matrix, a nonzero Leibniz term requires $\sigma(i)\le i$ for every $i$. A permutation with these inequalities is the identity: starting at $i=0$ and proceeding upward, bijectivity forces $\sigma(i)=i$. Thus every nonidentity term contains a zero entry. [L1, L2, L3]

2.1 The identity term has sign $1$ and equals $\prod_{i<n}a_{ii}$, so it is the whole determinant. [step 1.1, L2, L3]

3.1 For a lower triangular matrix the same argument uses $\sigma(i)\ge i$ and proceeds downward, again forcing the identity. The argument includes $n=1$ and makes no cancellation assumption, so zero divisors and the zero ring cause no exception. [step 2.1, L1, L2] ∎

