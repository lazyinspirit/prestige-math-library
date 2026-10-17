---
id: prop-standard-coordinate-inner-products
kind: proposition
title: "The standard formulas $\\langle x,y\\rangle=\\sum_{k<n}x_k y_k$ on $\\mathbb R^n$ and $\\sum_{k<n}x_k\\overline{y_k}$ on $\\mathbb C^n$ are inner products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inner-product-space, def-monoid-finite-product, lem-standard-basis-of-f-n, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §6A, Example 6.3'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For $x,y\in\mathbb R^n$ and $z,w\in\mathbb C^n$, the formulas

$$\langle x,y\rangle_{\mathbb R^n}=\sum_{k<n}x_ky_k,\qquad \langle z,w\rangle_{\mathbb C^n}=\sum_{k<n}z_k\overline{w_k}$$

define inner products, linear in the first argument. At $n=0$, the unique pairing on the zero space is an inner product.

## Facts & Assumptions

**Given:** A natural number $n$ and the two displayed coordinate pairings.

[L1] Finite products in a commutative monoid have an empty value and may be read additively as finite sums ([[def-monoid-finite-product]]).

[L2] Complex conjugation preserves sums and products, and $z\overline z=|z|^2\ge0$, with equality exactly when $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L3] The standard unit vectors form an ordered basis of $F^n$, including $n=0$ ([[lem-standard-basis-of-f-n]]).

[L4] An inner product is linear in the first argument, conjugate symmetric, positive on the diagonal, and definite ([[def-inner-product-space]]).

## Proof

**Proof technique:** direct.

1.1 Distributivity of the finite sums in [L1] gives linearity in the first variable. In the complex case [L2] gives conjugate-linearity in the second and conjugate symmetry; in the real case conjugation is the identity. [L1, L2, algebra]

1.2 On the diagonal, the real formula is $\sum x_k^2$ and the complex formula is $\sum|z_k|^2$. Each is nonnegative and vanishes only when every coordinate is zero, which by [L3] means the vector is zero. [L2, L3, algebra]

2.1 Hence all the axioms in [L4] hold. When $n=0$, the sum is empty and equals $0$, while the zero vector is the only vector, so definiteness is valid. [step 1.1, step 1.2, L1, L3, L4] ∎
