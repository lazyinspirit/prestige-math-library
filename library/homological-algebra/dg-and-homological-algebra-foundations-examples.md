---
page: dg-and-homological-algebra-foundations-examples
title: "Differential Graded Algebras and Homological Foundations: Examples and Counterexamples"
status: published
items: []
examples:
  - ex-polynomial-forms-on-the-line-form-a-differential-graded-algebra
  - cex-a-degree-one-derivation-need-not-square-to-zero
  - ex-a-differential-graded-algebra-is-its-own-left-dg-module
---

This companion checks the A-page definitions directly. The examples and
counterexample are model-specific constructions; they are not general theorem
suppliers.

Companion: [[dg-and-homological-algebra-foundations]].

## Reading prerequisites

Read [[dg-and-homological-algebra-foundations]] before these verifications; the
example items name their exact local definition suppliers.

## Existing library route

- [chain-complexes-and-homology](chain-complexes-and-homology.md): the established chain/cochain convention.

- [derived-categories](derived-categories.md): derived categories under the exact hypotheses on that page.

- [hochschild-homology-and-diagonal-koszul-resolutions](hochschild-homology-and-diagonal-koszul-resolutions.md): Hochschild homology; no Gerstenhaber bracket or formality is inferred.

## Scope and local proof obligations

### Worked computations and failure cases

- [[ex-polynomial-forms-on-the-line-form-a-differential-graded-algebra]] verifies the signed rule and $d^2=0$ for polynomial forms.
- [[cex-a-degree-one-derivation-need-not-square-to-zero]] gives a degree-one derivation whose square is nonzero.
- [[ex-a-differential-graded-algebra-is-its-own-left-dg-module]] verifies the regular left-module construction.

## Canonical suppliers and reuse boundaries

- [def-cochain-complex-in-an-abelian-category](../../items/def-cochain-complex-in-an-abelian-category.md): cohomological grading convention.

- [thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism](../../items/thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism.md): a chain homotopy equivalence induces a homology isomorphism.

## Conventions, diagrams, and sources

All verifications use the cohomological convention fixed on the A page. They do
not use tensor-product sign formulas, derived-category claims, Hochschild
brackets, or physics premises.

The B-page inventory and its proofs are recorded in the [batch notes](../../research/non-ml-math-remaining-81-2026-10-18-batch-41.notes.md) and proof contracts.
