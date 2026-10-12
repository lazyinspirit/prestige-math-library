---
page: analytic-derived-six-operations-and-duality
title: "Analytic Derived Six Operations And Duality"
status: draft
items: [def-proper-continuous-map,
        lem-proper-continuous-map-stability,
        lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions,
        def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces,
        thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint,
        lem-analytic-six-operation-support-and-trace-calculus,
        thm-verdier-duality-on-oriented-stratified-complex-varieties,
        thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace,
        lem-analytic-constructible-sheaves-admit-coherent-six-operations,
        thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
        lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure]
requires:
  - analytic-constructible-sheaf-foundations
  - compact-support-sheaf-calculus
  - complex-algebraic-stratified-topology
  - constructible-incidence-and-cochain-models
  - cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes
  - derived-categories
  - relations-functions-and-quotients
  - sheaf-cohomology-cech-cohomology-and-comparison
  - sheaf-operations-exactness-ringed-spaces-and-module-pullback
---

**Objective.** This page builds the ordinary six-operation calculus for sheaves
of vector spaces on analytic spaces of complex algebraic varieties, over an
arbitrary field and with the Axiom of Choice isolated exactly where the
injective models need it. It begins with the topological notion of a proper
continuous map and its basic stability, then records the elementary operations:
exact inverse image with its right adjoint direct image, the derived tensor and
internal Hom with the tensor–Hom adjunction, and flasque acyclicity. The
proper-support functor $f_!$ is defined by proper support of sections, and its
fibrewise compact-support cohomology is used to construct the exceptional
inverse image $f^!$ as the right adjoint of $Rf_!$ on the bounded constructible
specialization, with the support localization, base change, projection and
trace calculus. Verdier duality, its compatibility with complex orientation
$\omega_X=k_X[2d]$, and the coherent six-operation interface follow, and the
page closes with the ordinary middle perverse t-structure, its recollement,
intersection complexes and the exactness of smooth complex pullback.
