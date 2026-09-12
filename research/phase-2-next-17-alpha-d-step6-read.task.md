# Step 6 whole-group reading — group **d**, run `phase-2-next-17`

You are the group Alpha for batches **5**, **6**, **7**: 5 A/B pair(s), 10 page(s), 249 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `cup-cap-cross-products-and-cohomology-rings` | A | algebraic-topology | 366.013 | `cw-complexes-and-cellular-homology`, `singular-cohomology-and-coefficient-theorems` |
| 5 | `cup-cap-cross-products-and-cohomology-rings-examples` | B | algebraic-topology | 366.014 | `cup-cap-cross-products-and-cohomology-rings`, `koszul-complexes-and-regular-sequences` |
| 5 | `orientations-poincare-lefschetz-and-alexander-duality` | A | algebraic-topology | 366.015 | `relative-homology-excision-and-mayer-vietoris`, `cup-cap-cross-products-and-cohomology-rings`, `simplicial-subdivision-and-simplicial-approximation`, `the-total-derivative` |
| 5 | `orientations-poincare-lefschetz-and-alexander-duality-examples` | B | algebraic-topology | 366.016 | `orientations-poincare-lefschetz-and-alexander-duality` |
| 6 | `hurewicz-whitehead-freudenthal-and-cw-approximation` | A | algebraic-topology | 366.023 | `relative-homology-excision-and-mayer-vietoris`, `cw-complexes-and-cellular-homology`, `higher-homotopy-groups-and-cofiber-sequences`, `fibrations-fiber-bundles-and-homotopy-exact-sequences` |
| 6 | `hurewicz-whitehead-freudenthal-and-cw-approximation-examples` | B | algebraic-topology | 366.024 | `hurewicz-whitehead-freudenthal-and-cw-approximation` |
| 7 | `the-de-rham-theorem-and-degree` | A | differential-geometry | 475 | `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `manifolds-with-boundary-collars-and-orientations`, `integration-of-forms-and-the-general-stokes-theorem`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`, `singular-cohomology-and-coefficient-theorems`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `chain-complexes-and-homology`, `chain-homotopy-and-the-homotopy-category`, `long-exact-sequences-in-homology`, `free-modules-and-exact-sequences` |
| 7 | `the-de-rham-theorem-and-degree-examples` | B | differential-geometry | 476 | `the-de-rham-theorem-and-degree` |
| 7 | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | A | differential-geometry | 481 | `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `riemannian-metrics-length-distance-and-volume`, `connections-levi-civita-and-parallel-transport`, `compactness`, `completeness-and-uniform-continuity`, `the-winding-number-and-the-global-cauchy-theorem` |
| 7 | `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` | B | differential-geometry | 482 | `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `the-fundamental-group-of-the-circle` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cup-cap-cross-products-and-cohomology-rings` — Cup Cap Cross Products and Cohomology Rings (21 item(s))

- `def-alexander-whitney-diagonal-approximation` · definition — Alexander--Whitney map and diagonal approximation
- `thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses` · theorem — Alexander--Whitney and shuffle are natural chain-homotopy inverses
- `def-singular-cup-product-on-cochains` · definition — Singular cup product on cochains
- `thm-cup-product-leibniz-identity` · theorem — Cup product Leibniz identity
- `def-singular-cohomology-ring` · definition — Singular cohomology ring
- `prop-cup-product-is-natural-unital-and-associative` · proposition — Cup product is natural, unital and associative
- `lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal` · lemma — Factor reversal gives the commutativity chain homotopy
- `thm-singular-cohomology-is-graded-commutative` · theorem — Singular cohomology is graded commutative
- `def-relative-cup-product` · definition — Relative cup product for an excisive triad
- `prop-relative-cup-products-are-natural-and-compatible-with-connectors` · proposition — Relative cup products are natural and connector-compatible
- `def-cap-product-with-cohomology-first` · definition — Cap product with cohomology written first
- `thm-cap-product-boundary-identity` · theorem — Cap product boundary identity
- `prop-cap-product-naturality-and-projection-formula` · proposition — Cap naturality and projection formula
- `def-relative-cap-product` · definition — Relative cap products with quotient domains displayed
- `lem-relative-singular-product-chain-equivalence-for-cw-pairs` · lemma — Relative singular product comparison for CW pairs
- `lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses` · lemma — Relative cohomological Kunneth under finite free homology hypotheses
- `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism` · theorem — Cohomological Kunneth cross product is a ring isomorphism
- `lem-local-coordinate-cup-products-generate-top-relative-cohomology` · lemma — Local coordinate cup products generate top relative cohomology
- `def-cup-length-over-a-coefficient-ring` · definition — Cup length over a coefficient ring
- `prop-positive-degree-cup-products-on-a-suspension-vanish` · proposition — Positive-degree cup products on a suspension vanish
- `lem-integral-surface-cup-pairing-from-the-oriented-polygon` · lemma — Integral surface cup pairing from the oriented polygon

### `cup-cap-cross-products-and-cohomology-rings-examples` — Cup Cap Cross Products and Cohomology Rings — Examples (8 item(s))

- `ex-integral-cohomology-ring-of-a-torus` · example — Integral cohomology ring of a torus
- `ex-integral-cohomology-ring-of-an-orientable-surface` · example — Integral cohomology ring of a closed orientable surface
- `ex-mod-two-cohomology-ring-of-real-projective-space` · example — Mod-two cohomology ring of real projective space
- `ex-integral-cohomology-ring-of-complex-projective-space` · example — Integral cohomology ring of complex projective space
- `ex-cap-product-on-the-oriented-circle` · example — Cap product on the oriented circle
- `ex-same-additive-cohomology-different-rings-cp-three-and-a-wedge` · example — Equal additive cohomology but different rings
- `cex-the-cup-product-of-arbitrary-abelian-group-valued-cochains-is-not-canonical` · counterexample — An additive coefficient group does not determine a cup multiplication
- `cex-cochain-cup-product-is-not-graded-commutative-on-the-nose` · counterexample — Cochain cup product is not strictly graded commutative

### `orientations-poincare-lefschetz-and-alexander-duality` — Orientations Poincare Lefschetz and Alexander Duality (39 item(s))

- `def-topological-manifold-with-and-without-boundary` · definition — Topological manifolds with and without boundary
- `thm-local-homology-detects-interior-points-boundary-points-and-dimension` · theorem — Local homology detects manifold dimension, interior, and boundary
- `lem-coordinate-ball-classes-identify-local-homology-stalks` · lemma — Coordinate-ball classes identify local homology stalks
- `def-orientation-local-system-and-orientation-cover` · definition — Orientation local system and orientation cover
- `def-r-orientation-of-a-topological-manifold` · definition — R-orientation of a topological manifold
- `prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise` · proposition — Every manifold is F2-orientable and orientability is componentwise
- `lem-relative-homology-mayer-vietoris-for-closed-supports` · lemma — Relative homology Mayer–Vietoris for closed supports
- `lem-compatible-local-orientation-classes-exist-over-compact-subsets` · lemma — Compatible orientation classes over compact subsets
- `def-fundamental-class-of-a-compact-oriented-manifold` · definition — Fundamental class of a compact oriented manifold
- `thm-top-homology-characterizes-compact-orientable-manifolds` · theorem — Top homology of a connected manifold
- `def-compactly-supported-singular-cohomology-of-a-locally-compact-space` · definition — Compactly supported singular cohomology
- `def-cap-duality-map-for-an-oriented-manifold` · definition — The cap-duality map of an oriented manifold
- `lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls` · lemma — Cap duality on a Euclidean coordinate ball
- `lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder` · lemma — Cap product and the Mayer–Vietoris duality ladder
- `lem-cap-duality-passes-to-increasing-open-unions` · lemma — Cap duality passes to increasing open unions
- `lem-cap-duality-for-open-subsets-of-euclidean-space` · lemma — Cap duality for open subsets of Euclidean space
- `lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls` · lemma — Duality extends to finite unions of coordinate balls
- `lem-manifold-exhaustion-passes-local-duality-to-the-colimit` · lemma — A manifold exhaustion passes duality to the colimit
- `thm-poincare-duality-for-oriented-topological-manifolds` · theorem — Poincaré duality for oriented topological manifolds
- `lem-closed-oriented-pid-manifolds-have-finitely-generated-homology` · lemma — Finite generation from cap with a finite fundamental cycle
- `cor-poincare-duality-gives-a-nonsingular-cup-pairing` · corollary — Poincaré duality gives a nonsingular cup pairing
- `def-degree-of-a-map-between-oriented-closed-manifolds` · definition — Degree of a map between oriented closed manifolds
- `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology` · proposition — Manifold degree is functorial and detected in top cohomology
- `thm-topological-collaring-for-manifold-boundaries` · theorem — Topological manifold boundaries admit collars
- `lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class` · lemma — A collar constructs the relative orientation class and its boundary class
- `def-relative-fundamental-class-and-boundary-orientation` · definition — Relative fundamental class and boundary orientation
- `thm-poincare-lefschetz-duality` · theorem — Poincaré–Lefschetz duality
- `thm-fully-relative-poincare-lefschetz-duality` · theorem — Fully relative Poincaré–Lefschetz duality
- `thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts` · theorem — Compact locally contractible Euclidean subsets are neighborhood retracts
- `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere` · theorem — Alexander duality for compact locally contractible subsets of a sphere
- `thm-jordan-brouwer-separation` · theorem — Jordan–Brouwer separation
- `thm-invariance-of-domain` · theorem — Invariance of domain
- `lem-horn-replacement-block-has-injective-commutator-meridian` · lemma — A horn replacement block has an injective commutator meridian
- `lem-controlled-nested-horn-construction-embeds-a-closed-three-ball` · lemma — A controlled nested horn construction embeds a closed three-ball
- `def-lefschetz-number-of-a-finite-cw-self-map` · definition — Lefschetz number of a finite CW self-map
- `lem-hopf-trace-formula` · lemma — Hopf trace formula
- `thm-simplicial-approximation-after-sufficient-subdivision` · theorem — Simplicial approximation after sufficient subdivision
- `lem-finite-cw-complexes-are-euclidean-neighborhood-retracts` · lemma — Finite CW complexes are Euclidean neighborhood retracts
- `thm-lefschetz-fixed-point-theorem-for-finite-complexes` · theorem — Lefschetz fixed-point theorem for finite complexes

### `orientations-poincare-lefschetz-and-alexander-duality-examples` — Orientations Poincare Lefschetz and Alexander Duality — Examples (10 item(s))

- `ex-fundamental-classes-and-duality-for-spheres-and-tori` · example — Fundamental classes and duality for spheres and tori
- `ex-intersection-pairing-of-a-closed-oriented-surface` · example — Intersection pairing of a closed oriented surface
- `ex-poincare-lefschetz-duality-for-a-disk-and-its-boundary` · example — Poincaré–Lefschetz duality for a disk
- `ex-mod-two-duality-for-real-projective-space` · example — Mod-two duality for real projective space
- `ex-alexander-duality-for-the-standard-equator` · example — Alexander duality for the standard equator
- `ex-lefschetz-number-of-the-identity-is-euler-characteristic` · example — The Lefschetz number of the identity is Euler characteristic
- `cex-a-nonorientable-manifold-has-no-ordinary-integral-fundamental-class` · counterexample — A nonorientable closed manifold has no integral fundamental class
- `cex-ordinary-cohomology-does-not-give-noncompact-poincare-duality` · counterexample — Ordinary cohomology does not give noncompact Poincaré duality
- `cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls` · counterexample — A horned sphere has complementary components that need not be balls
- `cex-zero-lefschetz-number-does-not-imply-no-fixed-points` · counterexample — Zero Lefschetz number does not imply absence of fixed points

### `hurewicz-whitehead-freudenthal-and-cw-approximation` — Hurewicz Whitehead Freudenthal and Cw Approximation (38 item(s))

- `lem-compact-cw-images-have-finite-cell-support-without-choice` · lemma — Compact CW images have finite cell support without choice
- `lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell` · lemma — A low-dimensional disk can be pushed off a higher cell
- `thm-cellular-approximation-for-maps-of-cw-pairs` · theorem — Cellular approximation for maps of CW pairs
- `cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative` · corollary — Each homotopy representative is supported on a finite CW subcomplex
- `lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex` · lemma — Cellular attachments with finite boundary support form a CW complex
- `thm-cw-approximation-of-an-arbitrary-space` · theorem — CW approximation of an arbitrary space
- `lem-cubical-pinch-is-additive-on-relative-homology` · lemma — Cubical pinch is additive on relative homology
- `def-hurewicz-homomorphism` · definition — Absolute and relative Hurewicz homomorphisms
- `prop-the-first-hurewicz-map-in-degree-one-is-abelianization` · proposition — The first Hurewicz map is abelianization
- `def-weak-homotopy-equivalence` · definition — Weak homotopy equivalence
- `lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups` · lemma — A weak equivalence has vanishing mapping-cylinder relative groups
- `lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells` · lemma — Vanishing relative homotopy extends an inverse over cells
- `lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes` · lemma — Cellular mapping cylinders and relative cylinders are CW complexes
- `thm-whitehead-theorem` · theorem — Whitehead theorem
- `cor-a-weakly-contractible-cw-complex-is-contractible` · corollary — A weakly contractible CW complex is contractible
- `def-n-connected-cw-pair` · definition — Connectivity of a CW pair
- `lem-high-relative-cells-do-not-change-lower-homotopy` · lemma — High relative cells do not change lower homotopy
- `lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice` · lemma — Weak homotopy equivalences induce integral homology isomorphisms without choice
- `lem-a-connected-cw-pair-has-a-model-without-low-relative-cells` · lemma — A connected CW pair has a model without low relative cells
- `lem-finite-relative-homotopy-lifting-across-a-weak-equivalence` · lemma — Finite relative homotopy lifting across a weak equivalence
- `lem-weak-equivalences-glue-along-a-common-connected-cw-subcomplex` · lemma — Weak equivalences glue along a common connected CW subcomplex
- `lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy` · lemma — Weak equivalences of pairs induce isomorphisms on relative homotopy
- `lem-homotopy-excision-for-a-single-relative-cell-layer` · lemma — Homotopy excision for a single relative cell layer
- `lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees` · lemma — Relative homotopy exact sequence of a triple in group degrees
- `thm-homotopy-excision` · theorem — Homotopy excision
- `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex` · lemma — CW quotients and collapse of a contractible subcomplex
- `lem-relative-homotopy-compares-with-the-cw-quotient-in-the-connectivity-range` · lemma — Relative homotopy compares with the CW quotient in the connectivity range
- `lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis` · lemma — The first potentially nonzero homotopy group of a wedge of higher spheres has its cell basis
- `lem-cw-quotient-induces-relative-singular-homology-isomorphisms` · lemma — A CW quotient induces relative singular homology isomorphisms
- `lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis` · lemma — Integral homology of a wedge of higher spheres has its cell basis
- `lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases` · lemma — A relative single cell layer has compatible homotopy and homology bases
- `lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity` · lemma — Cellular reduction for a highly connected pair
- `thm-relative-hurewicz-theorem` · theorem — Relative Hurewicz theorem in the simple-connectivity range
- `lem-relative-hurewicz-comparison-through-a-choice-free-weak-model` · lemma — Relative Hurewicz comparison through a choice-free weak model
- `thm-absolute-hurewicz-theorem` · theorem — Absolute Hurewicz theorem at the first nonzero degree
- `def-double-mapping-cylinder-homotopy-pushout-and-path-space-homotopy-pullback` · definition — Double-mapping-cylinder homotopy pushout and path-space homotopy pullback
- `thm-blakers-massey-connectivity-for-a-homotopy-pushout` · theorem — Blakers--Massey connectivity for a homotopy-pushout square
- `thm-freudenthal-suspension-theorem` · theorem — Freudenthal suspension theorem

### `hurewicz-whitehead-freudenthal-and-cw-approximation-examples` — Hurewicz Whitehead Freudenthal and Cw Approximation — Examples (6 item(s))

- `ex-first-nonzero-homotopy-group-of-a-sphere` · example — First nonzero homotopy group of a sphere
- `ex-hurewicz-calculation-for-a-wedge-of-simply-connected-spheres-in-the-first-degree` · example — Hurewicz calculation for a wedge of simply connected spheres
- `ex-whitehead-recognizes-a-homology-equivalence-between-simply-connected-cw-complexes-under-hurewicz-induction` · example — A simply connected CW homology equivalence is a homotopy equivalence under the stated choice conditions
- `ex-freudenthal-stable-range-for-spheres` · example — Freudenthal stable range for spheres
- `cex-whitehead-theorem-fails-without-cw-type` · counterexample — Whitehead theorem fails without CW type
- `cex-a-homology-equivalence-need-not-be-a-homotopy-equivalence-without-simple-connectivity` · counterexample — A homology equivalence need not be a homotopy equivalence without simple connectivity

### `the-de-rham-theorem-and-degree` — The De Rham Theorem and Degree (52 item(s))

- `def-standard-orientation-of-the-affine-simplex` · definition — Standard orientation of the affine simplex
- `def-integral-of-a-form-over-a-smooth-singular-simplex` · definition — Integral of a form over a smooth singular simplex
- `lem-simplex-integrals-are-independent-of-affine-coordinate-identification` · lemma — Simplex integrals are independent of affine coordinate identification
- `lem-stokes-theorem-for-the-standard-simplex` · lemma — Stokes theorem for the standard simplex
- `thm-stokes-theorem-for-smooth-singular-chains` · theorem — Stokes theorem for smooth singular chains
- `lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary` · lemma — The de Rham complex and pullback extend to manifolds with boundary
- `def-de-rham-integration-cochain-map` · definition — De Rham integration cochain
- `thm-de-rham-integration-is-a-cochain-map` · theorem — De Rham integration is a cochain map
- `thm-the-de-rham-map-on-cohomology-is-well-defined` · theorem — The de Rham map on cohomology is well defined
- `prop-naturality-of-the-de-rham-map` · proposition — Naturality of the de Rham map
- `lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds` · lemma — The de Rham homotopy formula extends to boundary manifolds
- `lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains` · lemma — The de Rham map is an isomorphism on convex coordinate domains
- `lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift` · lemma — De Rham Mayer–Vietoris with boundary and an explicit partition lift
- `lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors` · lemma — The de Rham and smooth singular Mayer–Vietoris diagram commutes away from connectors
- `lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors` · lemma — The de Rham map commutes with Mayer–Vietoris connectors
- `thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection` · theorem — The de Rham map is an isomorphism on a two-open union
- `thm-de-rham-theorem-for-smooth-singular-cohomology` · theorem — De Rham theorem for smooth singular cohomology
- `cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology` · corollary — De Rham vector-space comparison with continuous singular cohomology
- `lem-affine-diagonal-and-front-back-shuffle-have-a-specified-chain-homotopy` · lemma — An affine cone homotopy from the diagonal to the front-back shuffle
- `lem-integration-over-the-signed-shuffle-equals-the-product-of-simplex-integrals` · lemma — Integration over the signed shuffle equals the product of simplex integrals
- `lem-de-rham-integration-respects-wedge-and-cup-in-cohomology` · lemma — De Rham integration respects wedge and cup in cohomology
- `thm-de-rham-theorem` · theorem — The de Rham theorem
- `cor-de-rham-cohomology-depends-only-on-the-underlying-homotopy-type` · corollary — De Rham cohomology depends only on the underlying homotopy type
- `rem-ring-form-of-the-de-rham-theorem-needs-the-singular-cup-product` · remark — The ring form of de Rham’s theorem needs the singular cup product
- `def-compactly-supported-de-rham-cochain-complex-and-cohomology` · definition — Compactly supported de Rham cohomology
- `prop-proper-smooth-maps-pull-back-compactly-supported-forms` · proposition — Proper smooth maps pull back compactly supported forms
- `prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps` · proposition — Compactly supported de Rham cohomology is contravariant for proper smooth maps
- `lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes` · lemma — Finite chart localization gives choice-free integration and compact Stokes
- `thm-integration-descends-to-compactly-supported-top-de-rham-cohomology` · theorem — Integration descends to compactly supported top de Rham cohomology
- `lem-zero-integral-compactly-supported-top-forms-on-euclidean-space-have-compactly-supported-primitives` · lemma — Zero-integral compactly supported top forms on Euclidean space have compactly supported primitives
- `lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls` · lemma — Compactly supported top cohomology propagates across overlapping oriented coordinate balls
- `thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology` · theorem — Integration is an isomorphism on top compactly supported de Rham cohomology
- `cor-top-de-rham-cohomology-of-a-closed-connected-oriented-manifold-is-real` · corollary — Top de Rham cohomology of a closed connected oriented manifold is real
- `def-degree-of-a-proper-smooth-map-by-compact-support-cohomology` · definition — Degree of a proper smooth map by compact-support cohomology
- `lem-degree-is-well-defined-and-independent-of-the-normalized-top-form` · lemma — Degree is well defined and independent of the normalized top form
- `def-local-orientation-sign-of-a-regular-preimage` · definition — Local orientation sign of a regular preimage
- `thm-regular-value-formula-for-compact-support-degree` · theorem — Regular-value formula for compact-support degree
- `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier` · lemma — Smooth orientation sign is the local integral homology multiplier
- `thm-regular-value-formula-for-degree` · theorem — Regular-value formula for degree
- `cor-degree-is-an-integer-and-independent-of-the-regular-value` · corollary — Degree is an integer and independent of the regular value
- `prop-degree-is-multiplicative-under-composition` · proposition — Degree is multiplicative under composition
- `prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism` · proposition — Degree of an orientation-preserving or reversing diffeomorphism
- `thm-degree-is-invariant-under-proper-smooth-homotopy` · theorem — Degree is invariant under proper smooth homotopy
- `cor-a-nonzero-degree-map-to-a-connected-manifold-is-surjective` · corollary — A nonzero-degree map to a connected manifold is surjective
- `prop-degree-of-the-antipodal-map-on-the-sphere` · proposition — Degree of the antipodal map on the sphere
- `prop-degree-of-the-power-map-on-the-circle` · proposition — Degree of the power map on the circle
- `fs-the-de-rham-map-is-a-cochain-map-without-stokes-on-simplices` · false-statement — The de Rham map is a cochain map without Stokes on simplices
- `fs-naturality-alone-implies-that-two-comparison-maps-commute-with-mayer-vietoris-connectors` · false-statement — Naturality alone gives Mayer–Vietoris connector compatibility
- `fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings` · false-statement — The vector-space de Rham comparison is automatically a ring isomorphism
- `fs-compactly-supported-cohomology-is-contravariant-for-every-smooth-map` · false-statement — Compactly supported cohomology is contravariant for every smooth map
- `fs-the-degree-of-a-proper-map-is-the-number-of-points-in-a-regular-fibre` · false-statement — Degree is the unsigned number of points in a regular fibre
- `fs-a-homotopy-between-proper-maps-is-automatically-a-proper-homotopy` · false-statement — A homotopy between proper maps is automatically proper

### `the-de-rham-theorem-and-degree-examples` — The De Rham Theorem and Degree — Examples (12 item(s))

- `ex-de-rham-integration-cochain-on-a-smooth-path` · example — De Rham integration cochain on a smooth path
- `ex-chain-stokes-on-an-oriented-two-simplex` · example — Chain Stokes on an oriented two-simplex
- `ex-the-de-rham-map-on-the-angular-form` · example — The de Rham map on the angular form
- `ex-the-local-de-rham-comparison-on-a-ball` · example — The local de Rham comparison on a ball
- `ex-connector-compatibility-for-a-two-arc-cover-of-the-circle` · example — Connector compatibility for a two-arc cover of the circle
- `ex-a-normalized-compactly-supported-top-form-on-euclidean-space` · example — A normalized compactly supported top form on Euclidean space
- `ex-degree-of-a-reflection-of-a-sphere` · example — Degree of a reflection of a sphere
- `ex-degree-of-z-to-the-m-on-the-circle-from-a-regular-value` · example — Degree of z to the m on the circle from a regular value
- `ex-a-two-sheeted-orientation-preserving-cover-has-degree-two` · example — A displayed two-sheeted orientation-preserving covering has degree two
- `cex-a-map-with-two-preimages-but-degree-zero` · counterexample — A map with two preimages but degree zero
- `cex-a-proper-endpoint-homotopy-that-is-not-a-proper-combined-map` · counterexample — Proper endpoint maps joined by a nonproper combined homotopy
- `ex-nonzero-degree-forces-surjectivity-on-closed-oriented-manifolds` · example — Nonzero degree forces surjectivity on closed oriented manifolds

### `geodesics-the-exponential-map-completeness-and-hopf-rinow` — Geodesics the Exponential Map Completeness and Hopf Rinow (51 item(s))

- `rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow` · remark — Boundaryless convention for geodesic flow and Hopf–Rinow
- `def-geodesic-of-an-affine-connection` · definition — Geodesic of an affine connection
- `prop-geodesics-have-constant-speed-for-a-metric-compatible-connection` · proposition — Geodesics have constant speed for a metric-compatible connection
- `prop-coordinate-geodesic-equation` · proposition — Coordinate geodesic equation
- `def-geodesic-spray` · definition — Geodesic spray
- `lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm` · lemma — The geodesic spray is a well-defined smooth vector field on TM
- `thm-existence-uniqueness-and-smooth-dependence-of-geodesics` · theorem — Existence uniqueness and smooth dependence of geodesics
- `prop-affine-reparametrization-of-a-geodesic-is-a-geodesic` · proposition — Affine reparametrization of a geodesic is a geodesic
- `lem-geodesic-scaling-identity` · lemma — Geodesic scaling identity
- `def-geodesically-complete-riemannian-manifold` · definition — Geodesically complete Riemannian manifold
- `def-domain-and-exponential-map-of-a-connection` · definition — Domain and exponential map of a connection
- `thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth` · theorem — The exponential domain is open and the exponential map is smooth
- `prop-exponential-map-scales-geodesic-time` · proposition — The exponential map scales geodesic time
- `thm-the-differential-of-exp-p-at-zero-is-the-identity` · theorem — The differential of exp at zero is the identity
- `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space` · lemma — Choice-free smooth inverse function theorem in Euclidean space
- `thm-existence-of-normal-neighborhoods` · theorem — Existence of normal neighborhoods
- `def-normal-neighborhood-and-normal-coordinate-chart` · definition — Normal neighborhood and normal coordinate chart
- `prop-properties-of-normal-coordinates-at-the-center` · proposition — Properties of normal coordinates at the center
- `def-injectivity-radius-at-a-point-and-of-a-manifold` · definition — Injectivity radius at a point and of a manifold
- `prop-injectivity-radius-at-each-point-is-positive` · proposition — Injectivity radius at each point is positive
- `def-smooth-variation-and-variation-field-of-a-curve` · definition — Smooth variation and variation field of a curve
- `def-energy-of-a-piecewise-smooth-curve` · definition — Energy of a piecewise smooth curve
- `prop-length-energy-inequality-and-constant-speed-equality-case` · proposition — Length-energy inequality and equality case
- `thm-first-variation-formula-for-energy` · theorem — First variation formula for energy
- `cor-geodesics-are-exactly-critical-points-of-energy-with-fixed-endpoints` · corollary — Geodesics are exactly critical points of energy with fixed endpoints
- `thm-first-variation-formula-for-length` · theorem — First variation formula for length
- `thm-gauss-lemma` · theorem — Gauss lemma
- `cor-polar-form-of-the-metric-in-normal-coordinates` · corollary — Polar form of the metric in normal coordinates
- `thm-radial-geodesics-minimize-length-in-a-normal-neighborhood` · theorem — Radial geodesics minimize length in a normal neighborhood
- `cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood` · corollary — Local distance formula in a normal neighborhood
- `cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing` · corollary — Sufficiently short geodesic segments are uniquely minimizing
- `thm-existence-of-geodesically-convex-neighborhoods` · theorem — Existence of geodesically convex neighborhoods
- `thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization` · theorem — Length minimizers are constant-speed geodesics up to reparametrization
- `lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset` · lemma — Geodesics continue while velocity lifts remain compact
- `lem-a-finite-endpoint-of-a-maximal-unit-speed-geodesic-produces-a-cauchy-curve` · lemma — A finite endpoint of a maximal unit-speed geodesic produces a Cauchy curve
- `thm-metric-completeness-implies-geodesic-completeness` · theorem — Metric completeness implies geodesic completeness
- `lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain` · lemma — Radial geodesics from one point reach every point under global exponential domain
- `thm-hopf-rinow` · theorem — Hopf–Rinow theorem
- `cor-complete-connected-riemannian-manifolds-are-proper-length-spaces` · corollary — Complete connected Riemannian manifolds are proper length spaces
- `cor-compact-riemannian-manifolds-are-geodesically-complete` · corollary — Compact Riemannian manifolds are geodesically complete
- `cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric` · corollary — Closed embedded submanifolds of complete Riemannian manifolds are complete
- `lem-local-isometries-send-geodesics-to-geodesics` · lemma — Local isometries send geodesics to geodesics
- `cor-a-local-isometry-from-a-complete-connected-manifold-has-geodesically-complete-target-image` · corollary — A local isometry from a complete connected manifold has geodesically complete target image
- `prop-a-riemannian-product-is-complete-iff-each-factor-is-complete` · proposition — A Riemannian product is complete iff each factor is complete
- `prop-a-connected-riemannian-manifold-is-incomplete-iff-some-unit-speed-geodesic-escapes-every-compact-set-in-finite-time` · proposition — Incompleteness is finite-time geodesic escape
- `fs-every-affinely-reparametrized-geodesic-remains-unit-speed` · false-statement — Every affinely reparametrized geodesic remains unit speed
- `fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold` · false-statement — The exponential map is always defined on all of TM
- `fs-normal-coordinates-make-the-metric-euclidean-throughout-the-chart` · false-statement — Normal coordinates make the metric Euclidean throughout the chart
- `fs-every-geodesic-segment-is-globally-length-minimizing` · false-statement — Every geodesic segment is globally length minimizing
- `fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic` · false-statement — Any two points admit a minimizing geodesic
- `fs-geodesic-completeness-means-the-manifold-is-compact` · false-statement — Geodesic completeness means compactness

### `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` — Geodesics the Exponential Map Completeness and Hopf Rinow — Examples (12 item(s))

- `ex-straight-lines-as-euclidean-geodesics` · example — Straight lines as Euclidean geodesics
- `ex-great-circles-as-round-sphere-geodesics` · example — Great circles as round-sphere geodesics
- `ex-geodesics-of-a-riemannian-product` · example — Geodesics of a Riemannian product
- `ex-geodesics-in-the-poincare-upper-half-plane` · example — Geodesics in the Poincare upper half-plane
- `ex-normal-coordinates-on-the-round-sphere` · example — Normal coordinates on the round sphere
- `ex-the-exponential-map-of-a-flat-torus-is-not-injective` · example — The exponential map of a flat torus is not injective
- `ex-the-punctured-euclidean-plane-is-geodesically-incomplete` · example — The punctured Euclidean plane is geodesically incomplete
- `ex-an-open-unit-ball-with-euclidean-metric-is-metrically-incomplete` · example — An open Euclidean unit ball is metrically incomplete
- `ex-hyperbolic-space-is-complete` · example — Hyperbolic space is complete
- `cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics` · counterexample — Antipodal points on a round sphere have many minimizing geodesics
- `cex-a-complete-manifold-with-zero-global-injectivity-radius` · counterexample — A complete manifold with zero global injectivity radius
- `ex-hopf-rinow-on-a-flat-cylinder` · example — Hopf–Rinow on a flat cylinder

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-17`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
