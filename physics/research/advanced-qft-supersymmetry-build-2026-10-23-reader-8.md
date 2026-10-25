# Step 3a reader report — reader-8

Run: advanced-qft-supersymmetry-build-2026-10-23  
Batch: 8  
Role: independent reader

## Opened inventory

Assigned pages:

- library/quantum-field-theory-mathematics/qftx-borel-localization.md (A)
- library/quantum-field-theory-mathematics/qftx-borel-localization-examples.md (B)

The direct prerequisite page library/quantum-field-theory-mathematics/qftx-equivariant-cohomology.md was also opened as context. All three page bodies are empty; the assigned pages preserve their frontmatter inventories and compact-v1 layout.

Assigned items were read in manifest dependency order (16 total):

- Level 0: lem-qftx-compact-torus-fixed-locus-normal-weights; lem-qftx-proper-closed-subgroup-has-annihilating-character; lem-qftx-module-localization-preserves-exactness; lem-qftx-rational-torus-classifying-space-cohomology; lem-qftx-singular-cohomology-homotopy-invariance; lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model.
- Level 1: lem-qftx-compact-torus-equivariant-slice-neighborhoods; lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent; lem-qftx-borel-base-is-paracompact-of-cw-type.
- Level 3: def-qftx-character-localization.
- Level 4: lem-qftx-fixed-normal-euler-class-is-unit-after-character-localization; lem-qftx-nonfixed-locus-cohomology-is-torsion-after-localization.
- Level 5: thm-borel-localization-for-compact-torus-actions.
- Level 6: ex-qftx-borel-localization-rotation-on-projective-line; ex-qftx-borel-localization-free-circle-orbit; ex-qftx-borel-localization-positive-dimensional-fixed-components.

The exact Statement or Definition sections for the 57 unique external direct item dependencies were opened. They are: cor-field-kunneth-isomorphism-for-homology-of-products; cor-zero-derivative-implies-constant; def-axiom-of-choice; def-chern-classes-from-the-projective-bundle-relation; def-compactly-generated-based-space-and-well-pointed-object; def-countable-choice; def-disk-sphere-and-thom-space-of-a-metric-vector-bundle; def-euler-class-by-zero-section-pullback-of-the-thom-class; def-locally-trivial-fiber-bundle; def-milnor-infinite-join-model-of-eg; def-one-parameter-subgroup-of-a-lie-group; def-paracompact-space; def-partition-of-unity-subordinate-to-a-cover; def-principal-g-bundle-and-associated-fiber-bundle; def-r-oriented-vector-bundle-and-orientation-local-system; def-riemannian-metric-and-riemannian-manifold; def-singular-boundary-operator; def-singular-cochain-complex-with-coefficients; def-singular-cohomology-with-coefficients; def-smooth-left-action-of-a-lie-group; def-the-one-dimensional-torus-and-normalized-haar-integral; def-torus-equivariant-cohomology-cartan-model; lem-cohomology-ring-of-infinite-complex-projective-space; lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type; lem-local-isometries-send-geodesics-to-geodesics; lem-torus-classifying-space-cohomology; lem-unit-circle-is-a-compact-metrizable-topological-group; lem-universal-complex-flag-bundle-is-bt-n; prop-exponential-scales-one-parameter-subgroups; prop-first-chern-class-of-tensor-dual-and-conjugate-lines; prop-relative-cw-inclusions-are-cofibrations; thm-closed-subspace-of-a-compact-space-is-compact; thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism; thm-compactness-under-continuous-maps; thm-complex-exponential-is-entire-with-derivative-itself; thm-differentiation-under-the-integral-sign-on-a-compact-rectangle; thm-every-orbit-is-an-injectively-immersed-homogeneous-space; thm-every-smooth-manifold-admits-a-riemannian-metric; thm-excision-for-singular-cohomology; thm-existence-of-geodesically-convex-neighborhoods; thm-existence-uniqueness-and-smooth-dependence-of-geodesics; thm-first-chern-class-classifies-complex-line-bundles; thm-long-exact-sequence-of-a-pair-in-singular-cohomology; thm-mayer-vietoris-sequence-in-singular-cohomology; thm-milnor-join-model-is-a-contractible-free-g-space; thm-naturality-orientation-sign-and-whitney-product-for-euler-classes; thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields; thm-quotient-manifold-by-a-closed-lie-subgroup; thm-sine-cosine-zero-sets-and-fundamental-period; thm-singular-chain-homotopy-formula; thm-smooth-inverse-function-theorem-on-manifolds; thm-smooth-partitions-of-unity-exist-on-manifolds; thm-subordinate-partitions-of-unity-exist; thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero; thm-thom-isomorphism-for-oriented-vector-bundles; thm-topological-universal-coefficient-short-exact-sequence-for-cohomology; thm-universal-coefficient-theorem-for-homology-over-a-pid.

The two draft suppliers from batch 7, lem-torus-classifying-space-cohomology and def-torus-equivariant-cohomology-cartan-model, were read in full. Their current mathematical content supplies the real coefficient ring and Borel definition used by assigned consumers; the readiness-gap notes in consumer Facts are not mathematical defects. The diagram in the Cartan/Borel supplier is a commuting quotient square: both paths send (e,p) to [e]. No diagram repair is required.

## Page verdicts

- qftx-borel-localization — pass. The page is frontmatter-only, retains the 13 assigned A-item IDs and the manifest prerequisites, and has page_layout: compact-v1.
- qftx-borel-localization-examples — pass. The page is frontmatter-only, retains its three example IDs, empty items list, prerequisites, and page_layout: compact-v1.

## Mathematical review and repair

The fixed-locus and slice lemmas establish the invariant metric, fixed submanifold, nontrivial normal weights, and orbit-tube facts used downstream. The subgroup-character and module-localization lemmas supply the annihilators and exactness used by the nonfixed-locus argument. The compact good-cover and nilpotence lemmas supply the finite cohomological bound. The Euler-class lemma proves localized invertibility using the weight product and nilpotence. The nonfixed-locus proof uses finite invariant slice covers, a character trivial on each proper isotropy group, Mayer–Vietoris, and the punctured tubular neighborhood. The main theorem then uses localization of the pair sequence, excision, the Thom isomorphism, and the Euler-class Gysin identity to establish injectivity and surjectivity. The three examples' fixed sets, weights, Borel rings, and localized restrictions agree with their statements.

One proof defect was repaired in lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model, step 4.1. The final sentence cited step 4.1 itself as establishing that g h^{-1} is a homotopy inverse, which is not an earlier step and was also recorded as a self-dependency in its proof contract. The repair states the two composite homotopies explicitly: step 3.1 gives g h^{-1}f homotopic to id_F, and the construction in step 4.1 gives fgh^{-1} homotopic to id_|K|. The proof contract claim and its input list were updated to remove the self-reference. The Statement/Definition interface was unchanged, so no consumer interface repair was needed. The item had no verification.judge record to remove.

The local construction agrees with Hatcher's nerve result: [Proposition 4G.2 and Corollary 4G.3 in Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/ATch4.4.pdf), printed pp. 458–459, give the homotopy equivalence of a paracompact space with the nerve of an open cover with contractible finite intersections. Here F is compact Hausdorff, and the selected finite intersections contract by their unique minimizing geodesics. Hatcher's [Theorem A.6](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), printed pp. 524–525, supplies the countable-cell product-topology result used for the product CW model. [Atiyah–Bott, Theorem 3.5 and equation (3.7)](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf), Section 3, printed pp. 8–9, support the fixed-point localization and normal-weight Euler calculations. Hatcher's [homotopy-invariance discussion](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), Section 3.1, printed p. 201, supports the homotopy-cohomology supplier.

## Checks

- Reflow: node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model.md — unchanged.
- Precheck: node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model.md — pass, direct strategy.
- Final proof layout: node tools/physics-support/proof-layout.mjs items/lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model.md — 1 item, 5 steps, 0 defects.

## Unedited defects and blockers

No confirmed defects remain in the assigned items or pages. No blocker remains. Page-level prerequisites other than the directly used qftx-equivariant-cohomology page were not opened individually; the item dependency statements needed to verify the assigned claims were reviewed as listed above.
