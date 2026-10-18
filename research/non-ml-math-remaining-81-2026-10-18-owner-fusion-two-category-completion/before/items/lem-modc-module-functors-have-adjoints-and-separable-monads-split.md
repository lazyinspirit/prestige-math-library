---
id: lem-modc-module-functors-have-adjoints-and-separable-monads-split
kind: lemma
title: Module functor adjoints and separable-monad splittings in Mod(C)
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-semisimple-module-category-over-fusion-category
  - def-fusion-and-multifusion-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Theorem 1.4.9
      url: https://arxiv.org/pdf/1812.11933
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §9.1
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $\mathcal C$ be a fusion category over an algebraically closed field of characteristic zero, and let $\mathcal M,\mathcal N$ be finite semisimple right $\mathcal C$-module categories. Every module functor $F:\mathcal M\to\mathcal N$ has left and right adjoints whose adjunction units and counits are module-natural. Every separable monad in the 2-category of finite semisimple $\mathcal C$-module categories has a separable splitting in that 2-category.

## Proof obligation

No proof is supplied here. The local argument must construct the ordinary finite semisimple left/right adjoints, take mates of the module constraint, verify the mate coherence and both triangle identities, then realize a separable monad by its finite semisimple module category and verify the separable adjunction. The references state the result but do not supply these steps as local proof.
