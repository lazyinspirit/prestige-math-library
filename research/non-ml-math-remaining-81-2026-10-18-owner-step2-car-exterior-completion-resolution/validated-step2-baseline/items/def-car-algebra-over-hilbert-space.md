---
id: def-car-algebra-over-hilbert-space
kind: definition
title: CAR C*-Algebra over a Complex Hilbert Space
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 7
deps:
  - def-finite-dimensional-car-algebra
  - thm-finite-dimensional-car-algebra-is-matrix-algebra
  - lem-car-finite-subspace-inclusions-are-isometric
  - def-c-star-algebra
  - def-hilbert-space
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.4–6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1, 4.2 and 5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Definition

Let $H$ be a complex Hilbert space. Order its finite-dimensional complex subspaces by inclusion. This is a directed system because the span $F+G$ of any two finite-dimensional subspaces is finite-dimensional. To each such $F$, assign the finite-dimensional CAR C*-algebra of [[thm-finite-dimensional-car-algebra-is-matrix-algebra]], with the generator-preserving maps of [[lem-car-finite-subspace-inclusions-are-isometric]]. Identify each stage with its image under these injective maps and let $\mathsf{CAR}_{\mathrm{loc}}(H)$ be their algebraic union.

The common finite-stage norm is well defined on this union because every inclusion is isometric. Define the **CAR C*-algebra over $H$**, $\mathsf{CAR}(H)$, to be the norm completion of $\mathsf{CAR}_{\mathrm{loc}}(H)$. Addition, multiplication, scalar multiplication, and involution are the compatible finite-stage operations; their norm continuity makes them extend to the completion, and the C*-identity passes to limits. The identity is nonzero because the zero-dimensional stage is $\mathbb C$ and every inclusion preserves its unit. For $f\in H$, write $c(f)$ for the image of the generator in the stage $\operatorname{span}\{f\}$; the universal inductive-limit property and its norm are proved in [[thm-general-car-has-universal-inductive-limit-norm]].
