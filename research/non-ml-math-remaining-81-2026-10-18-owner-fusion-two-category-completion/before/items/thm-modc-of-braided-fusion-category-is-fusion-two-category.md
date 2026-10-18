---
id: thm-modc-of-braided-fusion-category-is-fusion-two-category
kind: theorem
title: The algebraic 2-category Mod(C) is a fusion 2-category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-semisimple-module-category-over-fusion-category
  - def-separable-algebra-and-bimodule-in-fusion-category
  - thm-separable-bimodule-relative-tensor-is-associative
  - thm-braided-category-tensor-product-algebra-structure
  - lem-modc-module-functors-have-adjoints-and-separable-monads-split
  - lem-modc-separable-algebra-object-duals
  - lem-modc-module-category-rank-bound
  - lem-modc-module-deformation-complex-contracts
  - lem-modc-bounded-rank-structure-varieties-have-finitely-many-orbits
  - thm-modc-module-categories-are-separable-algebra-modules
  - lem-modc-module-functor-categories-are-finite-semisimple
  - def-modc-relative-deligne-product
  - lem-braided-tensor-product-of-separable-algebras-is-separable
  - thm-modc-relative-deligne-product-is-algebra-tensor-product
  - def-braided-monoidal-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19 and Theorem 1.4.9
      url: https://arxiv.org/pdf/1812.11933
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Corollary 9.1.6
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.1
      url: https://arxiv.org/pdf/2306.08117
---

## Statement

Let $\mathcal C$ be a braided fusion category over an algebraically closed field of characteristic zero. The 2-category $\operatorname{Mod}(\mathcal C)$ of finite semisimple right $\mathcal C$-module categories, module functors, and module-natural transformations, with monoidal product given by relative Deligne tensor product over $\mathcal C$ (using its braiding to convert one action), is a fusion 2-category. In particular it is finite semisimple, has a simple unit, has left and right object duals, every 1-morphism has adjoints, every separable monad splits, and it has finitely many equivalence classes of simple objects.

## Proof obligation

No proof of the full fusion 2-category statement is supplied in this batch. The exact remaining local suppliers are [[thm-modc-module-categories-are-separable-algebra-modules]], [[lem-modc-module-functor-categories-are-finite-semisimple]], [[lem-modc-module-functors-have-adjoints-and-separable-monads-split]], [[lem-modc-separable-algebra-object-duals]], [[lem-modc-module-category-rank-bound]], [[lem-modc-module-deformation-complex-contracts]], [[lem-modc-bounded-rank-structure-varieties-have-finitely-many-orbits]], [[def-modc-relative-deligne-product]], [[lem-braided-tensor-product-of-separable-algebras-is-separable]], and [[thm-modc-relative-deligne-product-is-algebra-tensor-product]]. The actual source proof of the general theorem cites external hom-semisimplicity and adjoint results, then invokes EGNO Corollary 9.1.6 for object finiteness; none of those citations is treated as a completed local proof here. The simple-unit check must identify the regular module endomorphism category with $\mathcal C$ and send its identity to the simple tensor unit; the relative Deligne associator, unitors, pentagon, triangle, naturality, and interchange must also be checked locally.
