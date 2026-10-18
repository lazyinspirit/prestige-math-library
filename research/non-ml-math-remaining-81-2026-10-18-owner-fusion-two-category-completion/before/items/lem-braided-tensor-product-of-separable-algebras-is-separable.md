---
id: lem-braided-tensor-product-of-separable-algebras-is-separable
kind: lemma
title: The braided tensor product of separable algebras is separable
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-separable-algebra-and-bimodule-in-fusion-category
  - thm-braided-category-tensor-product-algebra-structure
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

Let $\mathcal C$ be a braided fusion category and let $A,B$ be separable algebra objects, with bimodule sections $\sigma_A,\sigma_B$. Give $A\otimes B$ the braided tensor-product algebra structure from [[thm-braided-category-tensor-product-algebra-structure]]. The candidate separability section is
$$\sigma_{A\otimes B}=(1_A\otimes c_{B,A}^{-1}\otimes1_B)\circ(\sigma_A\otimes\sigma_B):A\otimes B\longrightarrow(A\otimes B)\otimes(A\otimes B).$$
It must be proved that this is an $A\otimes B$-bimodule map and that multiplication composed with it is the identity.

## Proof obligation

No proof is supplied. The displayed formula cancels the middle crossing in the product multiplication and gives the expected section composite, but this alone does not prove bimodule-linearity. The local proof must expand both left- and right-linearity equations, use the two separability-section bimodule identities, and justify every braid replacement by naturality, the hexagon equations, and inverse-braiding cancellation. This is an established result whose proof remains an authoring obligation, not an open problem.
