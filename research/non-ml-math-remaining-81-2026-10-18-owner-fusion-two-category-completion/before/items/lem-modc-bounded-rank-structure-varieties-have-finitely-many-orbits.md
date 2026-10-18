---
id: lem-modc-bounded-rank-structure-varieties-have-finitely-many-orbits
kind: lemma
title: Bounded-rank module-structure varieties have finitely many open orbits
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - lem-modc-module-deformation-complex-contracts
  - lem-modc-module-category-rank-bound
  - thm-modc-module-categories-are-separable-algebra-modules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Theorems 9.1.4-9.1.6
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: Etingof, Nikshych, and Ostrik, On fusion categories, Annals of Mathematics 162 (2005), §2
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v162-n2-p01.pdf
---

## Statement

For each fixed possible rank of a finite semisimple module category over a fusion category $\mathcal C$, the algebraic variety of module-structure constraints on the fixed semisimple category is of finite type. The change-of-basis algebraic group has finitely many orbits, each open, when the positive-degree deformation cohomology vanishes.

## Proof obligation

No proof is supplied here. The carrier must define the finite-type parameter variety and the change-of-basis group, identify its tangent space modulo the orbit tangent with the relevant deformation cohomology, prove the tangent surjectivity at every point, and give the algebraic-geometric argument that open orbits in a finite-type variety are finite in number. EGNO Theorem 9.1.4 leaves the tangent identification as an exercise and the open-orbit implication as a “standard argument.”
