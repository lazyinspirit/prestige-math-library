---
id: thm-determinant-of-transpose
kind: theorem
title: 'For every square matrix over a commutative ring, $\det(A^{\mathsf T})=\det(A)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-square-matrix, def-ring-matrix-product-identity-and-transpose, thm-sign-is-a-homomorphism, lem-finite-sum-reindexing-and-fubini]
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
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.23"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, Proposition 6.4.3"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Statement

For every $n\ge1$, every commutative ring $R$, and every $A\in M_n(R)$,
$$\det(A^{\mathsf T})=\det(A).$$

## Facts & Assumptions

**Given:** A square matrix $A=(a_{ij})$ over a commutative ring.

[L1] Determinant is the Leibniz sum over permutations ([[def-determinant-of-a-square-matrix]]).

[L2] Transpose satisfies $(A^{\mathsf T})_{ij}=a_{ji}$ ([[def-ring-matrix-product-identity-and-transpose]]).

[L3] Sign is a homomorphism into $\{1,-1\}$, so $\operatorname{sgn}(\sigma^{-1})=\operatorname{sgn}(\sigma)$ ([[thm-sign-is-a-homomorphism]]).

[L4] A finite sum may be reindexed by a bijection ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Substituting [L2] into [L1] gives $\det(A^{\mathsf T})=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{i,\sigma(i)}$. [L1, L2]

2.1 Reindex the sum by $\tau=\sigma^{-1}$ and the product by $j=\sigma(i)$. Commutativity and [L3] turn the expression into $\sum_{\tau\in S_n}\operatorname{sgn}(\tau)\prod_{j<n}a_{\tau(j),j}=\det(A)$. [step 1.1, L3, L4, algebra] ∎
