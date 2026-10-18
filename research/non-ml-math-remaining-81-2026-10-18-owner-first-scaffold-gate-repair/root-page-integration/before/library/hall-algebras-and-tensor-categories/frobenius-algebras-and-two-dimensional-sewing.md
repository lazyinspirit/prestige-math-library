---
page: frobenius-algebras-and-two-dimensional-sewing
title: "Frobenius Algebras and Oriented Two-Dimensional Sewing"
status: draft
requires:
  - algebraic-representation-and-tensor-symmetry-map
  - finite-hopf-integrals-frobenius-duality-and-maschke
items:
  - def-oriented-open-closed-surface-category
  - def-frobenius-object-and-knowledgeable-sewing-data
  - lem-finite-frobenius-functional-determines-coproduct
  - lem-relative-surface-collars-and-elementary-decomposition
  - lem-elementary-surface-sewing-relations
  - lem-frobenius-sewing-derived-moves
  - def-relative-open-closed-surface-normal-form
  - lem-boundary-relative-two-dimensional-surface-normal-form
  - thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras
  - thm-knowledgeable-frobenius-data-classify-open-closed-sewing
examples: []
---

This page treats finite-dimensional Frobenius algebra and two-dimensional oriented sewing over an arbitrary field. It keeps symmetric Frobenius algebras distinct from commutative ones, separates the closed theory from surfaces with colored free boundary, and makes no semisimplicity assumption. The closed category has no free boundary at all; it is not the full subcategory on circle objects of the open-closed category, where free windows are allowed.

## Reading prerequisites

- [[algebraic-representation-and-tensor-symmetry-map]] defines unital associative algebra representations and proves their equivalence with unital module actions. Its separate bialgebra tensor-action interface is used only when an actual Hopf or bialgebra coproduct is present.
- [[finite-hopf-integrals-frobenius-duality-and-maschke]] proves that a nonzero finite-dimensional Hopf algebra with a nonzero left-integral functional is Frobenius. Its hypotheses do not assert that the resulting pairing is symmetric.
- [[def-monoidal-category]], [[def-symmetric-monoidal-category]], and [[def-monoidal-natural-transformation]] fix the target coherence and morphism conventions.

## Construction

1. [[def-oriented-open-closed-surface-category]] fixes black boundary parameterizations, corners, color labels, collars, gluing, and the no-free-boundary closed subcategory.
2. [[def-frobenius-object-and-knowledgeable-sewing-data]] gives the finite-dimensional algebra/coalgebra equations and the fully typed $S$-colored knowledgeable data, including Cardy and the distinction between symmetric and commutative.
3. [[lem-finite-frobenius-functional-determines-coproduct]] constructs the inverse-pairing tensor from a Frobenius functional, proves basis independence, counits, coassociativity, both Frobenius identities, and the converse snakes.
4. [[lem-relative-surface-collars-and-elementary-decomposition]] constructs compatible face collars and decomposes a colored surface into the ten local sewing maps, including mixed saddles.
5. [[lem-elementary-surface-sewing-relations]] verifies the finite generator equalities relative to all marked boundaries and colors. [[lem-frobenius-sewing-derived-moves]] proves the pairing, copairing, zipper, window, handle, and Cardy consequences algebraically.
6. [[def-relative-open-closed-surface-normal-form]] defines the marked colored normal word. [[lem-boundary-relative-two-dimensional-surface-normal-form]] supplies the terminating reductions, boundary-relative uniqueness, empty-boundary cases, and disconnected tensor case.
7. [[thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras]] proves the closed classification. [[thm-knowledgeable-frobenius-data-classify-open-closed-sewing]] proves the full colored open-closed equivalence, including monoidal natural transformations and the singleton pair $(A,C,i,i^*)$.

The defining equations do not identify $C$ with the center of an open algebra. Cardy is an additional relation, and a symmetric noncommutative algebra is not itself a closed-sector algebra. The page makes no claim about modular three-dimensional TQFTs or point-level fully extended theories.

## Reused suppliers

- [[def-hh-frobenius-functional-and-associative-pairing]] supplies the finite-dimensional Frobenius-functional convention.
- [[thm-hh-finite-hopf-algebras-are-frobenius]] supplies the finite Hopf example under its nonzero left-integral hypotheses.
- [[prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra]] proves the coefficient-of-identity form is symmetric and nondegenerate for every finite group over every field; its actual statement is broader than its title.

## Sources and draft scope

The local arguments use Lauda–Pfeiffer's full open-closed generators and normal-form proof, Kock's complete lecture-note treatment of the closed theory and inverse-pairing coproduct, and Moore–Segal's independent open-closed sewing and Morse treatment. Exact source spans, inspected items, retrieval hashes, and dispositions are recorded in [the batch source coverage](../../research/non-ml-math-remaining-81-2026-10-18-batch-81.source-coverage.json) and [the harvested coverage](../../research/non-ml-math-remaining-81-2026-10-18-batch-81.coverage.json).

These carriers remain drafts. Their proof contracts and scoped checks record authoring evidence only; they do not constitute independent mathematical approval.

Companion: [[frobenius-algebras-and-two-dimensional-sewing-examples]].
