---
id: thm-modc-relative-deligne-product-is-algebra-tensor-product
kind: theorem
title: The relative Deligne product is represented by the braided tensor algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-modc-relative-deligne-product
  - thm-modc-module-categories-are-separable-algebra-modules
  - thm-braided-category-tensor-product-algebra-structure
  - lem-braided-tensor-product-of-separable-algebras-is-separable
  - def-separable-algebra-and-bimodule-in-fusion-category
  - def-braided-monoidal-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet, The Relative Deligne Tensor Product over Pointed Braided Fusion Categories, §1
      url: https://arxiv.org/pdf/2203.10331
---

## Statement

Let $\mathcal C$ be a braided fusion category and let $\mathcal M\simeq\operatorname{Mod}^{l}_{\mathcal C}(A)$ and $\mathcal N\simeq\operatorname{Mod}^{l}_{\mathcal C}(B)$ be finite semisimple right module categories represented by separable algebras; the left-module notation is fixed in [[def-separable-algebra-and-bimodule-in-fusion-category]]. Their relative Deligne product as fixed in [[def-modc-relative-deligne-product]] exists, is finite semisimple, and is equivalent as a right $\mathcal C$-module category to $\operatorname{Mod}^{l}_{\mathcal C}(A\otimes B)$, where the algebra product uses the braiding $c_{B,A}$. This equivalence is independent, up to canonical equivalence, of the chosen algebra presentations and supplies the object tensor product in the separable-algebra model of $\operatorname{Mod}(\mathcal C)$. The relative products assemble into a weak monoidal $2$-category: associators and unitors are the unique equivalences preserving the relevant universal balanced functors, the pentagon and triangle equations hold, and the product is compatible with module functors and module-natural transformations.

## Proof obligation

No local proof is supplied. The proof must construct the universal balanced module functor, prove its universal property and finite semisimplicity, identify it with modules over the braided tensor algebra, and show independence of algebra presentations. It must construct the associator and unitors on triples of module categories and the induced module functors, prove the triangle equation by the universal property, prove the pentagon because both paths preserve the same four-variable balanced functor, and verify naturality and interchange for 1- and 2-morphisms. It must use [[lem-braided-tensor-product-of-separable-algebras-is-separable]] to show that the resulting algebra is an allowed object of the separable-algebra model. The cited sources state or use this construction but defer the universal-property and separability arguments; no citation is counted as their proof.
