---
id: ex-frobenius-inner-product-on-matrix-space
kind: example
title: "The Frobenius inner product on a real or complex matrix space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inner-product-space, def-matrix-space, def-monoid-finite-product, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Example 5.1.3'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Example

On $M_{m\times n}(\mathbb F)$, where $\mathbb F=\mathbb R$ or $\mathbb C$, the formula

$$\langle A,B\rangle_F=\sum_{i<m}\sum_{j<n}A_{ij}\overline{B_{ij}}$$

defines the **Frobenius inner product**, and

$$\lVert A\rVert_F^2=\sum_{i<m}\sum_{j<n}|A_{ij}|^2.$$

## Facts & Assumptions

**Given:** Matrices $A,B$ of one fixed $m\times n$ shape.

[L1] Matrices of a fixed shape form a vector space under entrywise operations ([[def-matrix-space]]).

[L2] An inner product must be linear in its first argument, conjugate symmetric, positive, and definite ([[def-inner-product-space]]).

[L3] Complex conjugation distributes over finite sums and satisfies $z\overline z=|z|^2$, vanishing exactly at $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L4] Empty finite sums have additive value zero ([[def-monoid-finite-product]]).

## Verification

**Proof technique:** direct.

1.1 Entrywise operations and finite-sum algebra give linearity in $A$. Applying conjugation termwise and using [L3] gives conjugate symmetry. [L1, L3]

1.2 On the diagonal, [L3] gives the displayed sum of squared moduli. It is nonnegative and vanishes exactly when every entry vanishes, which by [L1] means $A=0$. Hence [L2] is satisfied. [L1, L2, L3]

2.1 If $m=0$ or $n=0$, the matrix space contains only its zero matrix and [L4] makes the formula zero, so definiteness remains valid. [L1, L4] ∎
