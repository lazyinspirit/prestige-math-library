---
id: thm-modc-of-braided-fusion-category-is-fusion-two-category
kind: theorem
title: The algebraic 2-category Mod(C) is a fusion 2-category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-axiom-of-choice
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
  proof: ai-altered
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

Assume the Axiom of Choice. Let $\mathcal C$ be a braided fusion category over an algebraically closed field of characteristic zero. The 2-category $\operatorname{Mod}(\mathcal C)$ of finite semisimple right $\mathcal C$-module categories, module functors, and module-natural transformations, with monoidal product given by relative Deligne tensor product over $\mathcal C$ (using its braiding to convert one action), is a fusion 2-category. In particular it is finite semisimple, has a simple unit, has left and right object duals, every 1-morphism has adjoints, every separable monad splits, and it has finitely many equivalence classes of simple objects.

## Facts & Assumptions

**Given:** The Axiom of Choice and a braided fusion category $\mathcal C$ over an algebraically closed field of characteristic zero.

[F1] [[lem-modc-module-functor-categories-are-finite-semisimple]] gives finite semisimple hom categories and identifies regular-module endofunctors with $\mathcal C$, sending the identity to its unit.

[F2] [[lem-modc-module-functors-have-adjoints-and-separable-monads-split]] gives both module adjoints and separable-monad splittings.

[F3] [[lem-modc-module-category-rank-bound]] bounds indecomposable ranks and all action multiplicities by fixed fusion data.

[F4] [[lem-modc-bounded-rank-structure-varieties-have-finitely-many-orbits]] gives finitely many equivalence classes at every bounded rank.

[F5] [[thm-modc-relative-deligne-product-is-algebra-tensor-product]] constructs the relative products, their unit, and their complete weak monoidal coherence on objects, functors and transformations.

[F6] [[lem-modc-separable-algebra-object-duals]] constructs the object duals with both invertible cusp composites.

[F7] [[thm-modc-module-categories-are-separable-algebra-modules]] gives separable algebra presentations of every object and the bimodule equivalence on hom categories.

[F8] [[def-fusion-two-category]] requires finite semisimplicity, weak monoidality, simple unit and left and right object duals.

[A1] [[def-axiom-of-choice]] is used through the classical algebraic geometry suppliers of [F4]; finite category decompositions introduce no additional choice.

## Proof

1.1 Composition of module functors is ordinary functor composition with the composite action comparison; its module equation follows by substituting the two module equations. Identities have identity comparison. Horizontal and vertical composition of module-natural transformations are their ordinary compositions and obey interchange because horizontal composition is a functor on the functor categories. Each hom category is finite semisimple by [F1]. The zero module category and finite direct sums of module categories are obtained componentwise; inclusions and projections are module functors. Their biproduct equations hold componentwise, and composition preserves these sums since every functor is linear. Both adjoints and all separable-monad splittings exist by [F2]. [F1, F2, given, construct]

2.1 To identify simple objects, write the simple objects of a module category as $m_a$. Join $a$ to $b$ when $m_b$ is a summand of $m_a\odot X$ for a simple $X\in\mathcal C$. Rigidity makes this an undirected graph. Its components are precisely action-stable full semisimple summands, so indecomposability is connectedness. A natural endomorphism of the identity acts on $m_a$ as $t_a1_{m_a}$, because the field is algebraically closed and simple endomorphism rings are finite dimensional. Module-naturality and naturality along each summand inclusion force $t_a=t_b$ along every edge. Conversely scalars constant on components define module-natural endomorphisms. Thus the endomorphism algebra of the identity is one copy of the field for every component. In the semisimple hom category from [F1], an object is simple exactly when its endomorphism algebra is the field: decompose it into simples, whose endomorphism algebras are the field, and use the resulting product of matrix algebras. Hence nonzero simple objects of $\operatorname{Mod}(\mathcal C)$ are exactly indecomposable module categories. By [F3] their ranks are bounded and only finitely many action multiplicity arrays occur; [F4] gives finitely many module equivalence classes for each array. There are consequently finitely many simple-object equivalence classes. [A1, F1, F3, F4, step 1.1, algebra]

3.1 The universal relative products from [F5] supply the tensor pseudofunctor, its composition and identity comparisons, unit $\mathcal C$, associator and unit equivalences, and their coherence modifications. Its proofs establish naturality, the pentagon and triangle and interchange on transformations, so this is a weak monoidal structure on the same $2$-category of step 1.1. Under [F1], the identity of the regular module is the simple unit of $\mathcal C$; therefore the tensor unit is simple. Every object admits a separable algebra presentation by [F7], and [F6] supplies left and right dual objects in the equivalent bimodule presentation. Transporting evaluation, coevaluation and the two invertible cusp comparisons through that equivalence gives the required dual data in $\operatorname{Mod}(\mathcal C)$, since an equivalence preserves their sources, targets, composites and inverse equations. [F1, F5, F6, F7, step 1.1, construct]

4.1 Steps 1.1 and 2.1 establish every clause of finite semisimplicity; step 3.1 establishes weak monoidality, a simple unit, and both object duals. These are exactly the requirements in [F8]. Thus $\operatorname{Mod}(\mathcal C)$ is a fusion $2$-category under the full stated hypotheses. [F8, step 1.1, step 2.1, step 3.1, algebra] ∎
