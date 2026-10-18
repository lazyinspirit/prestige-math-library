---
id: rem-general-maurer-cartan-deformation-correspondence-needs-gauge-data
kind: remark
title: "The general Maurer–Cartan deformation correspondence needs a proved gauge construction"
status: published
dependency_level: 12
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-a-infinity-morphism
  - def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra
  - def-filtered-l-infinity-morphism
  - def-filtered-maurer-cartan-gauge-path
  - thm-filtered-l-infinity-morphisms-preserve-gauge-equivalence
  - thm-maurer-cartan-elements-classify-fixed-carrier-codifferential-deformations
  - thm-unital-associative-deformations-are-coderivation-maurer-cartan-classes
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §13.2"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Remarks

The Maurer–Cartan equation defines a solution set. A deformation-class correspondence additionally needs a specified deformation object, its independently defined equivalences, and a proof identifying those equivalences with a gauge construction. The complete filtration proves convergence; it is one part of that correspondence.

This page now supplies filtered L∞ Taylor morphisms and completed polynomial gauge paths, proves that Taylor maps preserve solutions and gauge equivalence, and proves the correspondence for a specified deformation problem: square-zero codifferentials on a fixed coefficient-completed tensor or symmetric coalgebra, modulo continuous coalgebra automorphisms equal to the identity modulo the coefficient ideal. The equivalence is genuine coalgebra conjugacy, defined independently of Maurer–Cartan gauge paths. The noncommutative exponential/logarithm and variable-parameter flow proofs identify all such conjugacies with gauge equivalence. Tensor and symmetric coalgebras give the fixed-carrier A∞ and L∞ versions, respectively.

The strict associative specialization identifies all fixed-unit formal associative products with normalized coderivation Maurer–Cartan elements and all unit-preserving formal changes of variables with the corresponding gauge equivalences. These results specify the deformation objects; they do not attach an unspecified geometric deformation problem to every L∞-algebra. A∞ morphisms remain separately defined in the unsuspended convention, while the L∞ Taylor and gauge constructions use the shifted convention fixed on this page.
