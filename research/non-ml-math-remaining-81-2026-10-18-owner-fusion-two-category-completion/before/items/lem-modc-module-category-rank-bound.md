---
id: lem-modc-module-category-rank-bound
kind: lemma
title: A uniform rank bound for indecomposable module categories over C
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
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Corollary 9.1.6
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

For a fixed fusion category $\mathcal C$ over an algebraically closed field of characteristic zero, there is a finite integer $R(\mathcal C)$ such that every indecomposable finite semisimple right $\mathcal C$-module category has at most $R(\mathcal C)$ isomorphism classes of simple objects.

## Proof obligation

No uniform bound has been proved here. EGNO Corollary 9.1.6(ii), printed p. 277, invokes “a bound” on the number of simple objects without stating or proving it. The local supplier must derive a bound depending only on $\mathcal C$ and include its dependence on the fusion data; finiteness for each fixed module category is not enough.
