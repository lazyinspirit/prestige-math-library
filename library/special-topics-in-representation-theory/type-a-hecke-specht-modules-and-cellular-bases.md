---
page: type-a-hecke-specht-modules-and-cellular-bases
title: "Type-A Hecke Specht Modules and Cellular Bases"
status: draft
requires: [principal-series-representations-of-gl-n-over-a-finite-field,
           integral-specht-modules-and-modular-simple-modules,
           jucys-murphy-elements-and-seminormal-forms,
           rim-hooks-and-the-murnaghan-nakayama-rule,
           grothendieck-groups-and-graded-cartan-pairings,
           artinian-rings-and-length,
           euclidean-domains-pids-and-unique-factorisation,
           ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison]
items: [       def-cellular-algebra-basis-and-cell-module,
       def-e-regular-and-e-restricted-partitions,
       def-quantum-characteristic-of-an-invertible-hecke-parameter,
       lem-central-idempotent-decompositions-of-one-are-unique,
       lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents,
       lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra,
       def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents,
       def-hecke-jucys-murphy-elements-and-q-contents,
       def-murphy-elements-and-murphy-tableau-elements,
       lem-cell-form-is-associative-and-its-radical-is-a-submodule,
       thm-murphy-tableau-elements-form-a-cellular-basis,
       thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra,
       cor-cellular-decomposition-matrices-are-dominance-unitriangular,
       def-type-a-hecke-specht-module-and-cell-form,
       def-jantzen-filtration-of-a-lifted-cell-module,
       thm-hecke-jucys-murphy-action-is-dominance-triangular,
       lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation,
       thm-separated-hecke-residues-give-seminormal-idempotents-and-bases,
       prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one,
       lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage,
       lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations,
       def-type-a-q-schur-algebra-and-weyl-modules,
       def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras,
       lem-semistandard-weight-dimensions-detect-virtual-weyl-classes,
       def-alternating-weyl-and-specht-symbols-from-beta-sequences,
       thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions,
       cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular,
       thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules,
       thm-q-schur-weyl-weight-space-gram-determinant-hook-product,
       thm-q-schaper-virtual-radical-layer-formula,
       rem-general-type-a-decomposition-numbers-remain-unsolved,
       lem-q-schur-central-hecke-jm-scalars-give-residue-separation,
       def-hh-type-a-quantum-tensor-action-for-centralizers,
       lem-hh-quantum-presentation-and-tensor-action-descent,
       lem-integral-divided-power-tensor-action-surjects-onto-type-a-q-schur-algebra,
       lem-polynomial-quantum-highest-vectors-satisfy-all-divided-power-relations,
       lem-integral-quantum-highest-weight-modules-identify-with-normalized-q-schur-weyl-cells,
       lem-polynomial-quantum-schur-first-level-weyl-filtration-and-hecke-corner]
examples: []
---

This page develops the cellular-algebra foundations of the modular
representation theory of the type-A Hecke algebra and its q-Schur algebra. It
begins with the Graham-Lehrer cellular calculus, the cell form and its radical,
and the classification of the simple modules by the nonzero cell heads
$D^{\lambda}=C^{\lambda}/\mathrm{rad}\,C^{\lambda}$, with the
dominance-unitriangular decomposition matrix as its first consequence.

The second half specialises to $H_{F,q}(S_n)$: the Murphy cellular basis and
the identification of the Hecke Specht modules through the Dipper-James
signed-cell dictionary, the triangular action of the Jucys-Murphy elements and
the resulting seminormal bases in the separated range, the classification of
the simple modules by the $e$-regular partitions, and the Schur functor
connecting Weyl modules and their Jantzen filtrations to Specht modules. The
q-Schaper virtual radical-layer formula and its hook-product Gram determinants
are recorded in the form needed by the block and decomposition-number items of
later pages, together with an explicit remark on the limits of what
cellularity and the sum formula determine.
