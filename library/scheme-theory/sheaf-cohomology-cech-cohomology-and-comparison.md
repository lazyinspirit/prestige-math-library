---
page: sheaf-cohomology-cech-cohomology-and-comparison
title: "Sheaf Cohomology Cech Cohomology and Comparison"
status: draft
requires: [presheaves-sheaves-stalks-and-sheafification, sheaf-operations-exactness-ringed-spaces-and-module-pullback, projective-and-injective-resolutions, derived-functors, dimension-constructible-images-and-dimensions-of-fibres, derived-categories, double-complexes-exact-couples-and-convergence]
items: [def-global-sections-functor-sheaves, lem-abelian-sheaves-form-a-grothendieck-category,
        thm-abelian-sheaves-have-enough-injectives, def-sheaf-cohomology-derived-global-sections,
        thm-zero-sheaf-cohomology-global-sections, thm-long-exact-sequence-sheaf-cohomology,
        lem-comparison-map-from-an-exact-complex-into-an-injective-resolution, lem-cohomology-functoriality-sheaf-and-space,
        def-acyclic-sheaf-global-sections, def-flasque-sheaf,
        lem-injective-sheaves-flasque, lem-flasque-kernel-lifts-quotient-sections,
        thm-flasque-sheaves-acyclic, def-godement-resolution,
        thm-godement-resolution-flasque, def-cech-cochain-complex-open-cover,
        lem-cech-differential-squares-zero, def-cech-cohomology-open-cover,
        lem-cech-h0-global-sections, lem-increasing-cech-complex-extends-to-alternating-tuples,
        def-refinement-open-cover, thm-refinement-map-independent-on-cohomology,
        def-global-cech-cohomology-directed-limit, def-acyclic-cover-for-sheaf,
        lem-acyclic-rows-and-columns-of-cech-double-complex, thm-cech-to-sheaf-cohomology-comparison,
        thm-leray-acyclic-cover-theorem, lem-two-open-cover-cech-complex,
        thm-mayer-vietoris-sheaf-cohomology, thm-cohomology-disjoint-union,
        thm-cohomology-one-point-space, def-cohomological-dimension-space,
        lem-cech-vanishing-on-a-cofinal-basis-implies-acyclicity, lem-noetherian-subspaces-and-compact-opens,
        lem-sections-on-compact-opens-commute-with-filtered-colimits, lem-filtered-colimits-of-abelian-groups-are-exact,
        lem-filtered-colimits-commute-with-sheaf-cohomology-on-noetherian-spaces, lem-subsheaf-generated-by-sections,
        lem-locally-constant-functions-form-a-sheaf, lem-finite-filtration-of-generated-subsheaves-of-the-constant-integer-sheaf, lem-extension-by-zero-vanishing-reduces-to-all-sheaves,
        lem-closed-immersion-preserves-sheaf-cohomology, lem-irreducibility-criteria-and-open-subspaces,
        lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, lem-constant-sheaf-on-irreducible-space-is-flasque,
        def-irreducible-component-of-a-topological-space, lem-irreducible-components-of-a-topological-space,
        lem-noetherian-space-has-finitely-many-irreducible-components, lem-extension-by-zero-short-exact-sequence,
        lem-sheaf-supported-on-a-closed-subset-is-a-pushforward, thm-noetherian-topological-space-dimension-vanishing,
        def-tensor-product-of-abelian-sheaves, lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product,
        def-flat-abelian-sheaf, lem-flatness-criteria-and-flat-covers-for-abelian-sheaves,
        def-k-flat-complex-of-abelian-sheaves, lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms,
        lem-abelian-sheaves-admit-bounded-above-flat-resolutions, lem-derived-tensor-product-of-abelian-sheaves,
        lem-morphisms-from-the-constant-sheaf-are-global-sections, lem-sheaf-cohomology-classes-as-derived-morphisms,
        lem-koszul-structure-of-the-abelian-sheaf-tensor-product, lem-koszul-coherence-for-derived-sheaf-tensor,
        def-cup-product-sheaf-cohomology, thm-cup-product-graded-associative-natural,
        rem-cech-cohomology-cover-dependent-without-acyclicity, rem-spectral-sequence-belongs-homological-algebra]
examples: []
---

This page develops sheaf cohomology on a topological space from a supplied
functorial injective resolution datum, as the right derived functors of the
global-sections functor, and records the shapes the rest of the library
consumes: $H^0$ is the global-sections functor, a short exact sequence of
abelian sheaves has a natural long exact sequence with connecting maps,
cohomology is functorial in the sheaf and in the space, injective and flasque
sheaves are acyclic, and the flasque Godement resolution computes cohomology.

The middle block builds the Čech side of the comparison. The ordered Čech
cochain complex of an open cover and its degree-zero identification with the
global sections come first, then refinement functions, the induced cochain maps
and their independence on cohomology. The Čech--Godement double complex is then
used to construct the canonical comparison map from fixed-cover Čech cohomology
to sheaf cohomology, and the Leray acyclic-cover theorem identifies this map as
an isomorphism for covers that are acyclic on their nonempty finite
intersections; that theorem is obtained here from the double-complex argument
and the mapping-cone criterion rather than from a spectral sequence. Around it
sit the structural results that later scheme-theoretic work cites: Mayer--Vietoris,
disjoint unions, one-point spaces, cohomological dimension, the Noetherian
vanishing theorem, the cofinal-basis Čech criterion for acyclicity, the
extension-by-zero and closed-immersion comparisons, and the flasqueness of the
constant sheaf on an irreducible space.

The page closes with the tensor apparatus the cup product needs: the tensor
product of abelian sheaves and its total complex, flat and K-flat sheaves and
complexes, the bounded-above flat resolutions and the derived tensor product,
the identification of cohomology classes with derived morphisms, the Koszul
coherence of the shifted constant sheaf, and the cup product with its
associativity, naturality, unit and graded-commutativity laws for a unital
associative sheaf of rings. Two closing remarks record that a fixed cover's
Čech groups depend on the cover and that the spectral-sequence packaging of
the comparison belongs to homological algebra and is not developed here.
