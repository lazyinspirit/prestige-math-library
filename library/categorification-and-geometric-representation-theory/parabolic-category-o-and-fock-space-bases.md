---
page: parabolic-category-o-and-fock-space-bases
title: "Parabolic Category O and Fock-Space Bases"
status: published
requires: [singular-and-parabolic-kazhdan-lusztig-theory,
            balanced-triples-and-global-crystal-bases,
            grothendieck-groups-and-graded-cartan-pairings,
            young-diagrams-tableaux-and-permutation-modules]
items: [def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category,
        def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules,
        def-higher-level-wedge-tensor-fock-module,
        lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map,
        thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis,
        thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations,
        def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
        lem-finite-type-a-tensor-hecke-bars-and-complementary-coefficient-charts,
        lem-finite-type-a-full-tensor-source-upper-charts-and-string-leading-terms,
        lem-type-a-tableau-central-summands-are-single-linkage-blocks,
        thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
        def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
        def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks,
        thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix,
        lem-residue-casimir-operators-give-local-affine-hecke-actions,
        thm-the-highest-weight-fock-submodule-has-the-qg-global-bases,
        lem-the-local-affine-hecke-socle-argument-for-residue-translations,
        thm-residue-translation-functors-give-the-integrable-fock-space-action,
        thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o,
        thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module,
        def-the-ringel-dual-of-a-finite-highest-weight-ideal,
        lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings,
        thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic,
        thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases]
examples: []
---

**Objective.** This page builds the type-A dictionary between genuine parabolic
category $\mathcal O$ and the higher-level wedge-tensor Fock module: filtered
and tilting objects in a finite highest-weight block, the Fock module with its
column monomial basis and four distinguished Laurent bases, the residue
translation functors with their categorical crystal heads and socles, the
identification of $K_0$ with the integral Fock module, and the parabolic Ringel
duality realized by the opposite parabolic. Everything is stated for the
genuine locally parabolic-finite category, not for a properly stratified
presentable replacement, and the source parameter $s$ is distinguished from
the library parameter $t=s^{-1}$ throughout.

**Filtered and tilting objects.** [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]]
fixes the finite standard- and costandard-flag categories of a genuine
parabolic central summand, proves the homological criterion
$\mathcal F(\Delta)=\{N:\operatorname{Ext}^1(N,\nabla_A)=0\ \forall A\}$ with
its dual, the multiplicity formula and the uniqueness of an indecomposable
tilting object with a given bottom label and maximal support. The
classification [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]
constructs these tiltings locally, proves that every tilting is a sum of them,
and retains the inline prinjectivity criterion with a complete local proof.

**The Fock module.** [[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]
fixes the full $\mathfrak{gl}$ coordinate weight lattice and the semilinear Hopf
dictionary between the source generators $D_a,E_a,F_a$ at parameter $s$ and the
library generators $E_a,F_a,K_h$ at $t=s^{-1}$.
[[def-higher-level-wedge-tensor-fock-module]] defines the higher-level
wedge-tensor Fock module $F(\Lambda)=V(\Lambda_{m_1})\otimes\cdots\otimes
V(\Lambda_{m_l})$ with its column-strict and standard tableaux, weights,
Bruhat order and ground state; the one-dimensional $\Lambda$-weight space is
verified there. [[thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis]]
proves the ordered-wedge integral basis with antisymmetrizer coefficients
$(-s)^{\ell(w)}$, the column monomial basis and the compatible upper-cut and
common-tail embeddings whose direct limit is the semi-infinite module.
[[thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations]]
then produces the ordinary compatible bar, triangular on the monomial basis,
integral and compatible with all cuts.

**The four bases.** [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]
defines the source dual-canonical, canonical and quasi-canonical families, the
reverse-factor families, the two forms with labelled monomial Gram matrix the
inverse ordinary-bar matrix, the delta pairings and the rectification
dictionary; [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]]
proves the standard-monomial basis of the highest constituent, the vanishing of
$\pi L_A$ off $\mathrm{Std}$ and the explicit straightening formula.
[[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]] compares the
source families with the library global bases at the exact weight rescaling
$B_8=s^{-a}C_0$. The parabolic Kazhdan-Lusztig polynomials enter through
[[thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix]],
which proves the entry-antispherical/column-spherical transition formula and the
mixed singular-ambient composition matrix, and
[[lem-type-a-tableau-central-summands-are-single-linkage-blocks]] proves that
the genuine tableau central summands, original and opposite, are single linkage
blocks.

**Category $\mathcal O$ and its Fock action.** [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]]
fixes the finite classical blocks with labels $\mathrm{Col}^\Lambda_\alpha$,
their generalized standards, simples, projectives and costandards in the
half-sum convention $\rho_j=(n+1-2j)/2$, and the opposite blocks by
reverse-column reading. [[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]]
constructs the semi-regular bimodule over the outside nilradical and the exact
contravariant/covariant filtered equivalences with their reverse-column label
shift. [[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]]
defines the residue translation functors as exact biadjoint tensor/block
projections, and [[lem-residue-casimir-operators-give-local-affine-hecke-actions]]
proves the local degenerate affine Hecke relations, the Casimir eigencomponent
description and the integral Fock $K_0$ action with Chevalley/Serre relations.
[[lem-the-local-affine-hecke-socle-argument-for-residue-translations]] proves
the completed partial-centre and simple head/socle stack, and
[[thm-residue-translation-functors-give-the-integrable-fock-space-action]]
combines them into the categorical crystal statement: a residue translate
vanishes exactly when the crystal edge is absent and otherwise is a self-dual
indecomposable with simple equal head and socle.

**$K_0$, pairings and Ringel duality.**
[[thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module]] identifies
the direct-sum $K_0$ with the integral Fock module and proves the
projective/simple Hom pairing at $s=1$;
[[lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings]]
compares the source Fock forms with the genuine standard/costandard Hom pairing
and the library polarization.
[[def-the-ringel-dual-of-a-finite-highest-weight-ideal]] defines the
characteristic tilting generator and the Ringel-dual category,
[[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]]
realizes the full-block Ringel dual by the opposite parabolic and pairs proper
lower ideals with the opposite highest-weight Serre quotient, and
[[thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases]]
identifies simples, projectives and tiltings with the dual-canonical,
quasi-canonical and canonical Fock bases at $s=1$. The companion page computes
the bases and residue action in a four-dimensional tensor model and the
finite-ideal Ringel dictionary in a separate $\mathfrak{gl}_3$ block.
