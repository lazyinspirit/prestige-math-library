---
page: formal-deformation-quantization-and-hochschild-control-examples
title: "Formal Deformation Quantization and Hochschild Obstructions: Examples and Counterexamples"
status: draft
items: []
examples:
  - cex-nonpoisson-bivector-cannot-be-a-first-order-star-commutator
  - ex-moyal-star-product-for-a-constant-poisson-tensor
---

This companion checks the A-page definitions on explicit coordinate models.
The Moyal product verifies a formal star product for every constant skew
tensor, including degenerate and zero tensors. The counterexample computes a
smooth non-Poisson bivector on $\mathbb R^3$ and shows why Jacobi is a
necessary first-order condition for any associative formal deformation.

## Counterexample

- [[cex-nonpoisson-bivector-cannot-be-a-first-order-star-commutator]] uses
  $\{y,z\}=x$, $\{z,x\}=y$, and $\{x,y\}=xy$. Its Jacobiator at
  $(1,0,0)$ is nonzero, so the bracket cannot be the first-order skew part
  of an associative deformation.

## Worked product

- [[ex-moyal-star-product-for-a-constant-poisson-tensor]] defines the formal
  exponential of the constant bidifferential operator and proves
  associativity by commuting the operators on three tensor factors. For the
  zero tensor the product is ordinary multiplication; no nondegeneracy
  assumption enters the calculation.

The existing physics-tree quadratic Wick product is a separate
model-specific example and is not used as a supplier for either calculation.
The full-text source locators and retrieval evidence are recorded in the
[batch source coverage](../../research/non-ml-math-remaining-81-2026-10-18-batch-42.source-coverage.json).

Companion: [[formal-deformation-quantization-and-hochschild-control]].
