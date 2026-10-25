---
page: analytic-constructible-sheaf-foundations
title: "Analytic Constructible Sheaf Foundations"
status: published
items: [def-analytic-topology-and-finite-smooth-algebraic-stratifications,
        def-locally-constant-sheaf-of-finite-rank,
        def-algebraically-constructible-complex-of-analytic-field-sheaves,
        lem-field-module-sheaves-have-injective-derived-models,
        lem-finite-poset-diagrams-have-bounded-finite-bar-models,
        lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]
requires:
  - cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes
  - derived-categories
  - partitions-of-unity-and-paracompactness
  - presheaves-sheaves-stalks-and-sheafification
  - relations-functions-and-quotients
  - relative-homology-excision-and-mayer-vietoris
  - sheaf-cohomology-cech-cohomology-and-comparison
  - singular-chains-and-singular-homology
---

**Objective.** This page sets up the analytic topology of a complex algebraic
variety, the finite smooth algebraic stratifications with the frontier condition
that organize it, and the constructible sheaves and complexes that are locally
constant of finite rank on the strata. It also records the two finiteness and
resolution results the later constructible calculus consumes: bounded complexes
of diagrams on a finite poset have bounded finite-dimensional bar models, and
the constant sheaf cohomology of a locally contractible metric space agrees with
singular cohomology, so that a nonempty contractible space with a contractible
neighbourhood basis has the cohomology of a point. The page works with
coefficients in an arbitrary field and isolates exactly where the Axiom of
Choice is used, including injective resolutions and their derived comparisons, metric-space
paracompactness and cover shrinking, flasque section lifting, choices of
cochain representatives, and splittings of infinite-dimensional vector-space
complexes.

The constructions here are deliberately small: definitions fix conventions
without asserting an existence theory for stratifications, algebraic constructibility is quantified over a witnessing finite smooth
frontier stratification, and the injective-model lemma proves triangulated
closure for a fixed stratification. Bounded derived morphisms are computed by
bounded-below injective replacements in the declared choice context. The companion page computes
the circle of operations in the two simplest cases, the point and the open
closed line.
