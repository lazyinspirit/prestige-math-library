---
page: ariki-categorification-and-graded-decomposition-numbers
title: "Ariki Categorification and Graded Decomposition Numbers"
status: published
requires: [level-one-fock-space-and-residue-crystals,
           cyclotomic-hecke-and-quiver-hecke-algebras,
           quantum-affine-type-a-and-level-one-fock-space,
           kazhdan-lusztig-bases-polynomials-and-cells,
           cyclotomic-klr-algebras-and-highest-weight-categorification,
           grothendieck-groups-and-graded-cartan-pairings,
           ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison,
           klr-algebras-induction-and-quantum-serre-categorification,
           modular-representations-and-projective-covers,
           chain-conditions-and-semisimple-modules,
           field-extensions-and-the-complex-numbers,
           arakawa-suzuki-functors-and-higher-level-schur-weyl-duality]
items: [def-tableau-domination-order-garnir-tableaux-and-bricks,
        lem-generic-nondegenerate-local-inverse-tables,
        lem-integer-cyclic-presentation-descends-the-simple-head-generator-line,
        lem-integer-color-degenerate-hecke-klr-local-inverse-tables,
        lem-generic-cyclotomic-type-a-support-is-bounded-by-rank,
        lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower,
        lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels,
        lem-standard-fock-vectors-expand-in-the-upper-global-basis,
        def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
        def-nondegenerate-root-of-unity-level-one-hecke-regime,
        def-graded-cartan-pairing-between-projectives-and-modules,
        def-graded-specht-module-by-homogeneous-standard-tableaux,
        def-integral-form-of-the-cyclotomic-hecke-klr-block,
        lem-degree-and-codegree-of-standard-tableaux,
        lem-graded-algebra-isomorphism-transports-the-graded-module-category,
        prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
        prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux,
        thm-graded-specht-module-has-homogeneous-tableau-basis,
        lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator,
        thm-graded-specht-restriction-has-the-removable-node-filtration,
        thm-graded-specht-classes-realize-standard-fock-vectors,
        cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group,
        thm-ariki-canonical-basis-theorem-in-characteristic-zero,
        thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero,
        thm-graded-specht-heads-classify-the-graded-simple-modules,
        lem-reduction-of-characteristic-zero-simple-modules-modulo-p,
        lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree,
        def-graded-adjustment-polynomials-in-positive-characteristic,
        thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment,
        rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers]
examples: []
---

**Objective.** This page records the nondegenerate level-one form of Ariki's
categorification theorem transported across the blockwise Hecke--KLR
isomorphism, together with the graded decomposition numbers it computes and the
positive-characteristic adjustment boundary. The KLR side supplies the graded
module categories, their projective and module Grothendieck groups, the graded
Cartan pairing and the blockwise integral form; the Hecke side receives all of
this through the explicit graded block isomorphisms, with the Hecke parameter
$\xi$ and the grading variable $q$ kept independent throughout. The graded
Specht modules are constructed by the homogeneous tableau basis over the
Murphy cell datum, with the degree and codegree recursions, the shifted-degree
and Garnir exchange formulas and the removable-node restriction filtration all
stated and proved on this page. Their classes are identified with the standard
Fock vectors, so the graded decomposition numbers in characteristic zero are
the global-basis transition polynomials and the simple classes are the
dual-canonical vectors; the restricted classes form the distinguished basis of
the module Grothendieck group.

The final third of the page states the characteristic-zero canonical-basis
theorem, its decomposition-number form, the head classification of graded
simples, and the reduction of characteristic-zero simples modulo $p$; the
graded adjustment polynomials are then defined and the positive-characteristic
decomposition matrix is factored through them. The page is deliberately honest
about the boundary: the adjustment matrix is not asserted to be the identity,
and the final remark records that the characteristic-zero canonical-basis
theory does not by itself solve the general positive-characteristic
decomposition-number problem. The example companion works the smallest
non-semisimple block explicitly and exhibits the failure of the forgetful
specialization $q\mapsto1$.
