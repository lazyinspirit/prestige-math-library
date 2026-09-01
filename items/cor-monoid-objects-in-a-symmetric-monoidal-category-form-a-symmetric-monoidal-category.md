---
id: cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category
kind: corollary
title: "Monoid objects in a symmetric monoidal category form a symmetric monoidal category"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-symmetric-monoidal-category, thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 8.8.2(iv)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

If $\mathcal C$ is a symmetric monoidal category, then
$\operatorname{Mon}(\mathcal C)$ is symmetric monoidal under the tensor product
of [[thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category]].

## Facts & Assumptions

**Given:** A symmetric monoidal category $\mathcal C$.

[L1] A symmetric monoidal category is, in particular, braided ([[def-symmetric-monoidal-category]]).

[L2] In a braided monoidal category, monoid objects form a monoidal category under the braided tensor product ([[thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\operatorname{Mon}(\mathcal C)$ is already a monoidal category. [L1, L2, given]

2.1 The ambient symmetry $c_{A,B}:A\otimes B\to B\otimes A$ is a monoid morphism between the tensor-product monoids because the symmetry is involutive and natural, so it commutes with the braided interchange formula defining multiplication. Its square is the identity because it already is in $\mathcal C$. Therefore these maps provide a symmetric braiding on $\operatorname{Mon}(\mathcal C)$. [L1, L2, step 1.1, algebra] ∎
