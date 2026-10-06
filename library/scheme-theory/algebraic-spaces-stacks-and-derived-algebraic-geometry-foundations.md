---
page: algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations
title: "Algebraic Spaces, Stacks, and Derived Algebraic Geometry Foundations"
status: draft
requires: [fibre-products-base-change-and-scheme-theoretic-fibres,
           finite-proper-and-projective-morphisms,
           kahler-differentials-conormal-sequences-and-infinitesimal-lifting,
           flat-smooth-and-etale-morphisms,
           algebraic-group-actions-orbits-stabilizers-and-controlled-quotients,
           derived-categories]
items:
  - def-fppf-topology-on-schemes
  - def-groupoid-in-schemes-and-etale-equivalence-relation
  - def-category-fibred-in-groupoids
  - def-simplicial-object-and-simplicial-commutative-ring
  - def-polynomial-factorization-category-and-cotangent-diagram
  - lem-projective-representables-and-derived-colimits-of-module-diagrams
  - def-model-category-and-quillen-adjunction
  - def-fppf-sheaf-and-sheafification
  - lem-etale-equivalence-relation-restriction
  - def-descent-data-for-schemes
  - def-standard-resolution-of-a-ring-map
  - def-simplicial-set-homotopy-and-trivial-kan-fibration
  - lem-simplicial-algebra-cotangent-adjunctions-before-deriving
  - lem-fppf-sheafification-exists
  - def-representable-morphism-of-presheaves
  - lem-effective-fppf-descent-separated-locally-quasi-finite
  - def-descent-data-and-stack-in-groupoids
  - def-cotangent-complex-of-a-ring-map
  - lem-trivial-simplicial-fibration-fibres-products-and-contraction
  - lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - def-simplicial-horn-and-kan-fibration
  - def-quotient-fppf-sheaf-of-a-pre-relation
  - def-algebraic-space-as-fppf-sheaf
  - lem-standard-polynomial-resolution-admissibility
  - lem-contractible-cosimplicial-evaluation-computes-derived-colimit
  - thm-dold-kan-equivalence-for-simplicial-modules
  - lem-boundary-horn-product-is-anodyne
  - def-morphism-and-fibre-products-of-algebraic-spaces
  - lem-scheme-functor-is-algebraic-space
  - lem-quotient-sheaf-base-change-along-flat-lfp-map
  - lem-derived-colimit-coefficient-and-category-change
  - lem-additive-kan-and-normalized-fibration-criterion
  - lem-cotangent-complex-resolution-independence
  - lem-presentation-from-surjective-etale-map
  - lem-open-immersion-gluing-of-algebraic-spaces
  - def-morphism-representable-by-algebraic-spaces
  - lem-variable-base-cotensor-corner-and-path-objects
  - lem-cotangent-complex-h0-and-polynomial-case
  - def-presentation-of-an-algebraic-space
  - def-algebraic-stack-and-inertia
  - thm-model-structures-on-variable-simplicial-modules-and-algebras
  - lem-quotient-map-etale-when-quotient-is-algebraic-space
  - lem-inertia-of-a-stack-in-setoids
  - lem-replacement-invariant-derived-enriched-mapping-spaces
  - lem-affine-etale-equivalence-relation-quotient
  - thm-projective-models-for-simplicial-and-variable-module-diagrams
  - lem-fixed-base-simplicial-cotangent-represents-derived-derivations
  - thm-algebraic-space-from-etale-equivalence-relation
  - lem-projective-span-homotopy-pushout-mapping-property
  - def-derived-scheme-and-cotangent-complex
examples: []
---

This page builds the standard fppf foundations for algebraic spaces and
algebraic stacks and the first layer of the cotangent complex. Geometric
points of departure: the **fppf topology**, whose coverings are jointly
surjective families of flat, locally finitely presented morphisms, stable
under base change and composition; **fppf sheaves** and their sheafification by
the two-step plus construction; and **descent data** for schemes with their
cocycle condition. On this basis algebraic spaces are defined at the sheaf
level exactly as in Stacks Definition 65.6.1: an algebraic space is an fppf
sheaf with representable diagonal and an etale scheme cover. The category of
schemes embeds fully faithfully, products and fibre products of algebraic spaces are again algebraic spaces,
and their diagonals are representable morphisms, and every surjective etale map from a
scheme gives a presentation by its kernel pair; conversely, quotients of
schemes by etale equivalence relations are algebraic spaces, through the
affine case, open subquotients along flat locally finitely presented
restrictions, and gluing along open subfunctors.

The stack-theoretic half introduces categories fibred in groupoids, prestacks
and stacks in groupoids, representability by algebraic spaces and the
resulting notion of an algebraic (Artin) stack together with its inertia
stack; stacks in setoids have trivial inertia, which is what separates quotient
sheaves from quotient stacks on the companion page.

The derived half builds the simplicial and model-categorical interface: the
standard polynomial resolution and its contraction, Dold-Kan normalization
with explicit inverse, the Dold-Kan and additive Kan criteria, cotensor corners
and path objects, strict projective diagram models, and the resulting derived
enriched mapping spaces. On that interface the cotangent complex of a ring map
is defined on the standard resolution, its resolution independence and
base-change behaviour are proved, its degree-zero and polynomial computations
are recorded, and the fixed-base simplicial cotangent module is shown to
represent relative derived derivations. The final definition packages these
constructions into derived schemes and the cotangent complex of a morphism of
derived schemes, with truncation right adjoint to the discrete embedding and
with the derived pullback to the truncation distinguished from the full
quasi-coherent derived module. Choice is tracked throughout: the site,
equivalence-relation, stack and simplicial definitions are choice-free, while
sheafification, the fppf descent theorems, the Zariski main input and the
cotangent comparison carry the Axiom of Choice explicitly.
