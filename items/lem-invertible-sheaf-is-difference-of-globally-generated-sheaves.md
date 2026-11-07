---
id: lem-invertible-sheaf-is-difference-of-globally-generated-sheaves
kind: lemma
title: "An invertible sheaf on a projective scheme is a difference of globally generated sheaves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-ample-invertible-sheaf
  - def-coherent-module-scheme
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-ring-and-module
  - def-axiom-of-choice
  - def-projective-morphism-pre-proj
  - def-relative-projective-space-standard-charts
  - def-very-ample-invertible-sheaf-relative
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-eventual-global-generation-coherent-twists
  - lem-very-ample-implies-ample
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph H. Silverman, The Theory of Height Functions"
      url: "https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Cornell%2C%20Silverman%20-%20Arithmetic%20Geometry.pdf"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a field, let $X$ be a projective $K$-scheme, and let $\mathcal L$ be an invertible sheaf on $X$. Then there are globally generated invertible sheaves $\mathcal M$ and $\mathcal N$ on $X$ with $\mathcal L\cong\mathcal M\otimes\mathcal N^{-1}$.

## Statement references

[[def-projective-morphism-pre-proj]]

[[def-invertible-sheaf]]

[[lem-eventual-global-generation-coherent-twists]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $K$, a projective $K$-scheme $X$, and an invertible sheaf $\mathcal L$.

[A1] AC is an explicit hypothesis of the eventual-global-generation theorem; under it, the theorem applies to coherent sheaves twisted by sufficiently high powers of an ample invertible sheaf. ([[lem-eventual-global-generation-coherent-twists]])

[F1] A projective scheme has a relatively very ample invertible sheaf $\mathcal O_X(1)$; it is ample. ([[def-projective-morphism-pre-proj]], [[def-relative-projective-space-standard-charts]], [[def-very-ample-invertible-sheaf-relative]], [[def-ample-invertible-sheaf]], [[lem-very-ample-implies-ample]])

[F2] The projective scheme is Noetherian because it is of finite type over the Noetherian field; on it an invertible sheaf and the structure sheaf are coherent, and [A1] gives a sufficiently large globally generated twist of each. ([[def-axiom-of-choice]], [[def-coherent-module-scheme]], [[def-globally-generated-sheaf]], [[def-noetherian-ring-and-module]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[def-invertible-sheaf]], [[def-locally-noetherian-and-noetherian-scheme]], [[lem-eventual-global-generation-coherent-twists]])

## Proof

1.1 By [F1], choose the ample invertible sheaf $\mathcal O_X(1)$ furnished by projectivity. The projective scheme is Noetherian over the field, so [F2] applies to $\mathcal L$ and $\mathcal O_X$. [given, A1, F1, F2, choose]

1.2 Choose an integer $m$ large enough that both $\mathcal L\otimes\mathcal O_X(1)^{\otimes m}$ and $\mathcal O_X(1)^{\otimes m}$ are globally generated, as [F2] permits. Both are invertible, and $\mathcal L\cong(\mathcal L\otimes\mathcal O_X(1)^{\otimes m})\otimes(\mathcal O_X(1)^{\otimes m})^{-1}$. Taking these two factors as $\mathcal M$ and $\mathcal N$ proves the claim. [given, A1, F2, algebra] ∎
