---
page: cyclotomic-hecke-and-quiver-hecke-algebras
title: "Cyclotomic Hecke and Quiver Hecke Algebras"
status: draft
requires: [type-a-hecke-specht-modules-and-cellular-bases, quantum-affine-type-a-and-level-one-fock-space, klr-algebras-induction-and-quantum-serre-categorification, cyclotomic-klr-algebras-and-highest-weight-categorification, cores-quotients-and-blocks-of-symmetric-groups]
items: [
        def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
        lem-laurent-binomial-valuation-at-one-over-any-field,
        lem-ultra-tight-multisets-admit-column-potentials,
        def-type-a-affine-presentations-and-charged-cyclotomic-quotients,
        lem-dvr-cellular-jantzen-filtration-and-gram-valuation,
        lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis,
        lem-cyclotomic-hecke-bounded-ordered-monomials-span,
        lem-degenerate-affine-hecke-ordered-monomials-form-a-basis,
        lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage,
        lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes,
        lem-symmetric-polynomial-centers-have-primitive-split-content-idempotents,
        lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors,
        def-cyclotomic-hecke-central-content-sector-notation,
        lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity,
        lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension,
        lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations,
        prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras,
        def-affine-and-cyclotomic-type-a-hecke-algebras,
        def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
        lem-cyclotomic-hecke-intertwiners-and-local-power-series,
        lem-cyclotomic-klr-block-satisfies-the-hecke-relations,
        lem-hecke-intertwiners-produce-local-klr-generators,
        thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras,
        lem-cyclotomic-hecke-algebra-basis-and-dimension,
        lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis,
        lem-degenerate-cyclotomic-hecke-center-is-the-symmetric-polynomial-image,
        lem-universal-cyclotomic-hecke-canonical-trace-is-perfect-and-symmetric,
        thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
        lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular,
        lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases,
        lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis,
        thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage,
        lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms,
        lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms,
        lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums,
        thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations,
        lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage,
        lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected,
        thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-connected,
        thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks,
        def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks,
        thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism,
        cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading]
---

**Objective.** This page develops the type-A cyclotomic Hecke algebras in the
nondegenerate and degenerate branches, their charged finite-quantum-characteristic
specializations, the central content sectors, and the Brundan-Kleshchev
comparison with the type-A cyclotomic Khovanov-Lauda-Rouquier algebras. The
first part constructs the universal affine and cyclotomic presentations:
ordered-monomial bases, bounded spanning, the polynomial spectra that split
over the residue values, canonical CRT content projectors, the level-one
identification with the finite Hecke algebra, and the comparison maps between
the Hecke and KLR presentations in both directions. The second part develops
the arbitrary-level Murphy cellular theory with its Jucys-Murphy triangularity,
the semistandard bases of permutation modules, the Schur algebra and the
ordinary Schur functor, and the Jantzen/filtration theory: the DVR Gram
valuation, the monic seminormal Gram determinants, their signed rim-hook
valuation expansion, the Jantzen sum formula, and the resulting classification
of blocks through Jantzen equivalence and content classes. The closing section
identifies the central content sectors with the blocks, proves the
Brundan-Kleshchev blockwise isomorphism, and transports the KLR grading to the
Hecke blocks.

**Conventions.** The field is arbitrary and $e\ge2$ is finite; the
nondegenerate branch uses a Hecke parameter $q_H\ne1$ of quantum
characteristic $e$, while the degenerate branch has $q_H=1$ and
$\operatorname{char}F=e$. The grading variable $v$ of the KLR side is
independent of $q_H$. The cyclotomic relation is imposed on the first
polynomial generator and induction appends strands on the right. The e=0
($A_\infty$) branches are outside this page's cyclic scope and are recorded
as a deferred boundary.

**Reading order.** The affine and cyclotomic presentations come first, then
their bases and spectra, then the Hecke-KLR comparison; the Murphy/cellular and
Schur theory follows the same dependency order, and the Jantzen and block
theory is built on the completed trace and cell machinery. Items on this page
are draft and are consumed by the examples companion and by the Ariki
categorification pair.
