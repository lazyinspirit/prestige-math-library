---
id: lem-modc-module-deformation-complex-contracts
kind: lemma
title: Categorical separability contracts the module deformation complex
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
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Theorem 9.1.3 and Corollary 9.1.6
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: Etingof, Nikshych, and Ostrik, On fusion categories, Annals of Mathematics 162 (2005), §2
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v162-n2-p01.pdf
---

## Statement

For a finite semisimple $\mathcal C$-module category $\mathcal M$, define the normalized deformation cochain complex of its module-action and module-functor constraints. In positive degrees this complex is contractible by a homotopy built from a categorical separability section; in particular its degree-two cohomology vanishes.

## Proof obligation

No proof is supplied here. The normalized deformation complex and its differential must first be defined with the exact module-functor convention. The source route identifies a categorical Hochschild/Davydov-Yetter complex and invokes a separability homotopy, but leaves the categorical calculation as “the same argument.” A local homotopy must be written and checked against the differential in every positive degree.
