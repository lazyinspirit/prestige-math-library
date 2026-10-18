---
page: derived-hall-algebras
title: "Derived Hall Algebras from dg-Enhanced Categories"
status: published
items:
  - def-locally-finite-homotopy-type
  - lem-homotopy-cardinality-base-change
  - lem-homotopy-fiber-component-weight-ratio
  - def-toen-locally-finite-dg-category
  - lem-homotopy-cardinality-pushforward-is-functorial
  - def-toen-derived-hall-algebra
  - lem-perfect-dg-modules-have-finite-total-ext
  - lem-derived-hall-moduli-spaces-and-convolution-are-finite
  - lem-derived-hall-stabilizer-homotopy-sequence
  - lem-derived-hall-associativity-squares
  - thm-toen-derived-hall-number-formula
  - thm-toen-derived-hall-algebra-is-associative-and-unital
  - thm-hereditary-heart-embeds-in-derived-hall-algebra
  - rem-toen-kapranov-and-triangle-counts-are-distinct
examples: []
---

This page develops Toën's derived Hall algebra over a finite field from a locally finite dg-enhancement. It defines homotopy cardinality, proves the pull-push product is finite, associative and unital, derives the higher-Ext coefficient formula, and compares the product with a hereditary heart. Proofs use functorial dg cofibers and homotopy-cartesian correspondence squares. The heart comparison is explicitly an embedding of the **opposite** untwisted Hall algebra under the current supplier's product order.

The Toën construction is separate from ordinary, motivic and cohomological Hall algebras. This page does not infer the latter constructions from its finite-field homotopy weights.

Companion: [[derived-hall-algebras-examples]].

## Reading prerequisites

Prerequisites: [[finitary-ringel-hall-algebras]] supplies the current untwisted Hall convention, and [[dg-and-homological-algebra-foundations]] supplies cohomological dg-algebra and module conventions. The local items declare their exact item dependencies.

## Existing library route

- [derived-categories](../homological-algebra/derived-categories.md): derived category foundations Hall multiplication needs its own stack/shift hypotheses.

- [hochschild-homology-and-diagonal-koszul-resolutions](../homological-algebra/hochschild-homology-and-diagonal-koszul-resolutions.md): Hochschild foundations Not CoHA.

- [signed-quiver-flag-convolution-and-klr-ext-realization](../representation-theory/signed-quiver-flag-convolution-and-klr-ext-realization.md): geometric quiver flag convolution Does not imply all derived/motivic Hall products.

## Scope and local proof obligations

### 1. Toën multiplication and homotopy weights

Required supplier: A dg enhancement, finite total Hom cohomology, finite automorphism data and explicit derived Hall coefficient..

Local obligation: Prove coefficient finiteness, independence of representatives and associativity from homotopy-cartesian triangles; ordinary extension-count associativity alone is not enough.

Consumer: The comparison with ordinary Hall multiplication on a hereditary heart.

### 2. Hereditary heart comparison

Required supplier: The heart inclusion plus Toën’s higher-Ext coefficient identity..

Local obligation: Compute the higher-Ext correction terms and verify the embedding respects the selected normalizations.

Consumer: Applications to derived categories and 2-periodic Hall constructions.

### 3. Construction boundaries

Required supplier: Exact construction-specific formulas and local comparison lemmas..

Local obligation: State the dg/category hypotheses and do not replace homotopy factors by triangle counts divided only by automorphism groups.

Consumer: Later Hall wall-crossing and quantum-loop examples.

## Canonical suppliers and reuse boundaries

- [thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations](../../items/thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations.md): one quiver-flag/KLR realization. Does not supply derived/motivic/cohomological Hall theory.

## Conventions, diagrams, and sources

Apply the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md) and [prerequisite and repair holds](../../research/physics-algebras-planning-2026-10-17/prerequisites.md) before treating any proposed result as a supplier. All diagrammatic operations require defined domains, codomains, orientations, coefficients, and algebraic verification. Existing carriers keep their canonical identities and placements. Physics-only mathematical carriers require the supported same-ID resolver route specified in those contracts; links here do not establish that route.

- [06-other-physics-algebras](../../research/physics-algebras-planning-2026-10-17/dossiers/06-other-physics-algebras.md)

- [manifest](../../research/physics-algebras-planning-2026-10-17/sources/06-other-physics-algebras/manifest.md)

Full page contract: [placement inventory](../../research/physics-algebras-planning-2026-10-17/splice/placed-pages.json) (entry `derived-hall-algebras`). The original [audited research inventory](../../research/physics-algebras-planning-2026-10-17/proposed-pages.json) and its historical audit receipt remain unchanged.
