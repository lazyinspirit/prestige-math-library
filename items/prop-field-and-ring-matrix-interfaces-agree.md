---
id: prop-field-and-ring-matrix-interfaces-agree
kind: proposition
title: "For a field, the ring-matrix operations, invertibility and similarity agree exactly with the established field-matrix interface"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-matrices-over-a-commutative-ring, def-ring-matrix-product-identity-and-transpose, def-invertible-matrix-and-similarity-over-a-commutative-ring, def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-matrix-and-general-linear-group, def-similar-matrices, lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Ch. 4"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field. Viewing $F$ as a commutative ring, the ring-valued matrix set, addition, multiplication, identity, transpose, invertibility, inverse and similarity defined here are exactly the corresponding established field-matrix notions.

## Facts & Assumptions

**Given:** A field $F$ regarded as a commutative ring.

[L1] A ring-valued $m\times n$ matrix is a function $m\times n\to F$ ([[def-matrices-over-a-commutative-ring]]).

[L2] Ring-matrix operations, products, identities and transpose use the entrywise finite-sum formulas ([[def-ring-matrix-product-identity-and-transpose]]).

[L3] A field-valued matrix is a function $m\times n\to F$ ([[def-matrix-space]]).

[L4] Field-matrix products and identities use the same formulas ([[def-matrix-product-and-identity-matrix]]).

[L5] Field-matrix transpose interchanges the same entries ([[def-transpose-of-a-matrix]]).

[L6] Every field is a commutative ring with the same operations and identities ([[lem-field-is-a-commutative-ring]]).

[L7] Ring-matrix invertibility and similarity are defined by $AB=BA=I$ and $B=P^{-1}AP$ ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

[L8] Field-matrix invertibility uses the same two-sided inverse equations ([[def-invertible-matrix-and-general-linear-group]]).

[L9] Field-matrix similarity uses the same conjugation equation ([[def-similar-matrices]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], [L3] and [L6], both matrix carriers are the same function set. The formulas in [L2], [L4] and [L5] agree entry for entry, including empty sums and zero-sized shapes. [L1, L2, L3, L4, L5, L6]

2.1 Since the products and identities agree, the two-sided inverse equations in [L7] and [L8] select the same matrices and the same unique inverses; then the conjugation formulas in [L7] and [L9] select the same similar pairs. [step 1.1, L7, L8, L9] ∎

