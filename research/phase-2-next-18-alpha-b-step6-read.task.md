# Step 6 whole-group reading — group **b**, run `phase-2-next-18`

You are the group Alpha for batches **3**, **4**: 4 A/B pair(s), 8 page(s), 118 item(s).

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
| 3 | `the-serre-spectral-sequence-and-applications` | A | algebraic-topology | 366.027 | `singular-cohomology-and-coefficient-theorems`, `cup-cap-cross-products-and-cohomology-rings`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, `local-coefficients-twisted-homology-and-duality`, `spectral-sequences`, `double-complexes-exact-couples-and-convergence` |
| 3 | `the-serre-spectral-sequence-and-applications-examples` | B | algebraic-topology | 366.028 | `the-serre-spectral-sequence-and-applications` |
| 3 | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | A | algebraic-topology | 366.035 | `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `the-serre-spectral-sequence-and-applications`, `topological-vector-bundles-and-grassmannian-classification` |
| 3 | `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples` | B | algebraic-topology | 366.036 | `leray-hirsch-thom-isomorphism-and-gysin-sequences` |
| 4 | `topological-vector-bundles-and-grassmannian-classification` | A | algebraic-topology | 366.029 | `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, `partitions-of-unity-and-paracompactness` |
| 4 | `topological-vector-bundles-and-grassmannian-classification-examples` | B | algebraic-topology | 366.03 | `topological-vector-bundles-and-grassmannian-classification` |
| 4 | `complex-topological-k-theory-and-bott-periodicity` | A | algebraic-topology | 366.031 | `cup-cap-cross-products-and-cohomology-rings`, `topological-vector-bundles-and-grassmannian-classification`, `spectra-and-stable-homotopy-groups`, `simply-connected-plane-domains` |
| 4 | `complex-topological-k-theory-and-bott-periodicity-examples` | B | algebraic-topology | 366.032 | `complex-topological-k-theory-and-bott-periodicity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-serre-spectral-sequence-and-applications` — The Serre Spectral Sequence and Applications (25 item(s))

- `lem-serre-fibration-replacement-preserves-fiber-homology-transport` · lemma — Serre-fibration replacement preserves fiber homology transport
- `def-fiber-homology-local-system-of-a-serre-fibration` · definition — Fiber homology local system of a Serre fibration
- `lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid` · lemma — Fiber transport is functorial on the base fundamental groupoid
- `def-serre-filtration-of-the-total-space-over-base-skeleta` · definition — Serre filtration over the base skeleta
- `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology` · lemma — Relative homology over one base cell is shifted fiber homology
- `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients` · lemma — The first Serre differential is the cellular boundary with local coefficients
- `thm-homological-serre-spectral-sequence` · theorem — Homological Serre spectral sequence
- `thm-naturality-of-the-homological-serre-spectral-sequence` · theorem — Naturality of the homological Serre spectral sequence
- `def-serre-edge-homomorphisms-and-transgression` · definition — Serre edge homomorphisms and transgression
- `prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion` · proposition — Serre edge maps come from projection and fiber inclusion
- `prop-serre-transgression-agrees-with-the-relative-connecting-construction` · proposition — Serre transgression agrees with the relative connecting construction
- `thm-cohomological-serre-spectral-sequence` · theorem — Cohomological Serre spectral sequence
- `lem-multiplicative-filtered-cochains-induce-products-on-all-spectral-sequence-pages` · lemma — Multiplicative filtered cochains induce products on every spectral-sequence page
- `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence` · theorem — Multiplicative cohomological Serre spectral sequence
- `prop-degree-and-parity-criteria-for-serre-collapse` · proposition — Degree and parity criteria for Serre collapse
- `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence` · theorem — Gysin sequence from a sphere-fiber Serre spectral sequence
- `thm-wang-sequence-for-a-fibration-over-the-circle` · theorem — Wang sequence for a fibration over the circle
- `def-serre-class-ring-ideal-and-mod-c-morphism` · definition — Serre classes, Serre rings, ideals, and modulo-C morphisms
- `lem-serre-classes-are-stable-under-finite-filtrations` · lemma — Serre classes are stable under finite filtrations
- `thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class` · theorem — First-quadrant spectral-sequence transfer modulo a Serre class
- `thm-serre-class-fibration-transfer` · theorem — Serre-class transfer through a simply connected fibration
- `cor-serre-finite-generation-torsion-and-p-primary-transfer` · corollary — Finite-generation, torsion, and p-primary Serre transfer
- `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber` · theorem — PID finite-generation transfer for simply connected base and fiber
- `lem-circle-and-path-loop-models-for-eilenberg-maclane-induction` · lemma — Circle and path-loop models for Eilenberg–Mac Lane induction
- `thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator` · theorem — Rational cohomology of Eilenberg–Mac Lane spaces in one generator

### `the-serre-spectral-sequence-and-applications-examples` — The Serre Spectral Sequence and Applications — Examples (7 item(s))

- `ex-path-loop-serre-computation-of-cp-infinity` · example — Path-loop Serre computation of CP infinity
- `ex-serre-spectral-sequence-of-the-complex-hopf-fibration` · example — Serre spectral sequence of the complex Hopf fibration
- `ex-serre-spectral-sequence-of-the-quaternionic-hopf-fibration` · example — Serre spectral sequence of the quaternionic Hopf fibration
- `ex-homology-of-the-loop-space-of-an-odd-sphere` · example — Homology of the loop space of an odd sphere
- `ex-wang-sequence-of-a-mapping-torus` · example — Wang sequence of a mapping torus
- `cex-serre-page-collapse-does-not-split-the-abutment` · counterexample — A stable Serre diagonal need not split its abutment
- `cex-ignoring-monodromy-gives-the-wrong-serre-e-two-page` · counterexample — Ignoring monodromy gives the wrong Serre E2 page

### `leray-hirsch-thom-isomorphism-and-gysin-sequences` — Leray Hirsch Thom Isomorphism and Gysin Sequences (20 item(s))

- `lem-global-fiber-basis-trivializes-serre-monodromy` · lemma — A global fiber basis trivializes Serre monodromy
- `lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity` · lemma — The Leray–Hirsch associated-graded isomorphism lifts without extension ambiguity
- `thm-leray-hirsch-module-isomorphism` · theorem — Leray–Hirsch module isomorphism
- `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle` · definition — Disk, sphere, and Thom spaces of a metric vector bundle
- `prop-thom-space-of-zero-and-trivial-bundles` · proposition — Thom spaces of zero and trivial bundles
- `lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring` · lemma — Disk-pair cohomology over an arbitrary commutative ring
- `def-r-oriented-vector-bundle-and-orientation-local-system` · definition — R-oriented vector bundle and orientation local system
- `def-thom-class-by-fiberwise-normalization` · definition — Thom class by fiberwise normalization
- `thm-thom-isomorphism-for-a-trivial-oriented-bundle` · theorem — Thom isomorphism for a trivial oriented bundle
- `lem-thom-isomorphisms-glue-over-two-trivializing-opens` · lemma — Thom isomorphisms glue over two trivializing opens
- `lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover` · lemma — Thom isomorphism extends over a finite numerable trivializing cover
- `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence` · lemma — General Thom isomorphism from the relative Serre spectral sequence
- `thm-thom-isomorphism-for-oriented-vector-bundles` · theorem — Thom isomorphism for oriented vector bundles
- `thm-naturality-and-uniqueness-of-thom-classes` · theorem — Naturality and uniqueness of Thom classes
- `thm-external-product-and-whitney-sum-formulas-for-thom-classes` · theorem — External-product and Whitney-sum formulas for Thom classes
- `def-thom-diagonal-and-zero-section-collapse` · definition — Thom diagonal and zero-section collapse
- `def-thom-euler-class-of-an-oriented-vector-bundle` · definition — Thom-defined Euler class of an oriented vector bundle
- `def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section` · definition — Gysin pushforward for an oriented zero section
- `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle` · theorem — Gysin long exact sequence of an oriented sphere bundle
- `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition` · proposition — Thom and Gysin constructions respect pullback and composition

### `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples` — Leray Hirsch Thom Isomorphism and Gysin Sequences — Examples (6 item(s))

- `ex-leray-hirsch-for-a-trivial-product-bundle` · example — Leray–Hirsch for a trivial product bundle
- `ex-thom-space-of-a-trivial-line-and-plane-bundle` · example — Thom spaces of trivial line and plane bundles
- `ex-mod-two-thom-class-of-the-mobius-line-bundle` · example — Mod-two Thom class of the Möbius line bundle
- `ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity` · example — Thom isomorphism for the tautological complex line over CP infinity
- `cex-leray-hirsch-fails-without-a-global-restricting-fiber-basis` · counterexample — Leray–Hirsch fails without a global restricting fiber basis
- `cex-an-unoriented-real-bundle-has-no-integral-thom-class` · counterexample — An unoriented real bundle has no integral Thom class

### `topological-vector-bundles-and-grassmannian-classification` — Topological Vector Bundles and Grassmannian Classification (26 item(s))

- `def-real-and-complex-topological-vector-bundle` · definition — Real and complex topological vector bundles
- `lem-ac-supplies-dependent-choice-for-vector-bundle-constructions` · lemma — AC supplies the dependent-choice instances used in vector-bundle constructions
- `thm-vector-bundles-glued-from-transition-cocycles` · theorem — Vector bundles are glued from transition cocycles
- `def-vector-bundle-map-section-subbundle-and-isomorphism` · definition — Bundle maps, sections, subbundles, and isomorphisms
- `def-pullback-vector-bundle-and-pullback-section` · definition — Pullback vector bundles and sections
- `prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism` · proposition — Vector-bundle pullback is canonically functorial
- `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles` · definition — Whitney sum, tensor, dual, Hom, and exterior-power bundles
- `thm-numerable-vector-bundles-admit-bundle-metrics` · theorem — Numerable vector bundles admit bundle metrics
- `cor-short-exact-sequences-of-vector-bundles-split-over-the-base` · corollary — Short exact sequences of numerable vector bundles split
- `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases` · theorem — Finite-rank complement theorem over compact Hausdorff bases
- `thm-homotopy-invariance-of-vector-bundle-pullback` · theorem — Homotopy invariance of vector-bundle pullback
- `def-frame-bundle-and-associated-vector-bundle` · definition — Frame bundles and associated vector bundles
- `def-oriented-real-vector-bundle-and-oriented-frame-bundle` · definition — Oriented real bundles and oriented frame bundles
- `prop-orientation-is-equivalent-to-an-so-n-reduction` · proposition — Orientation is equivalent to an SO(n)-reduction
- `def-stiefel-space-grassmannian-and-tautological-bundle` · definition — Stiefel spaces, Grassmannians, and tautological bundles
- `def-oriented-grassmannian-and-tautological-oriented-bundle` · definition — Oriented Grassmannians and the universal oriented bundle
- `thm-stable-stiefel-space-is-contractible` · theorem — The stable Stiefel space is contractible
- `lem-a-bundle-embedding-produces-its-grassmannian-classifying-map` · lemma — A bundle embedding produces its Grassmannian classifying map
- `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely` · lemma — Homotopic Grassmannian maps classify isomorphic bundles and conversely
- `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians` · theorem — Numerable vector bundles are classified by stable Grassmannians
- `thm-oriented-real-vector-bundles-are-classified-by-bso` · theorem — Oriented real vector bundles are classified by BSO(n)
- `def-schubert-cells-in-real-and-complex-grassmannians` · definition — Schubert cells in real and complex Grassmannians
- `thm-schubert-cells-give-the-stable-grassmannian-cw-structure` · theorem — Schubert cells give the stable Grassmannian CW structure
- `def-clutching-construction-for-bundles-over-a-suspension` · definition — Clutching construction for bundles over a suspension
- `thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range` · theorem — Clutching classifies vector bundles over spheres in the stable range
- `thm-oriented-clutching-classifies-oriented-bundles-over-spheres` · theorem — Oriented clutching classifies oriented bundles over spheres

### `topological-vector-bundles-and-grassmannian-classification-examples` — Topological Vector Bundles and Grassmannian Classification — Examples (8 item(s))

- `ex-mobius-and-trivial-real-lines-over-the-circle` · example — The Möbius and trivial real lines over the circle
- `ex-tautological-real-and-complex-lines-over-projective-space` · example — Tautological lines over projective spaces
- `ex-hopf-line-bundle-over-the-two-sphere-by-clutching` · example — The Hopf line bundle over S² by clutching
- `ex-all-complex-vector-bundles-over-the-circle-are-trivial` · example — All complex vector bundles over the circle are trivial
- `ex-rank-zero-and-empty-base-vector-bundle-classification` · example — Rank-zero and empty-base vector-bundle classification
- `ex-oriented-two-plane-bundles-over-s-two-by-winding-number` · example — Oriented two-plane bundles over the two-sphere by winding number
- `cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement` · counterexample — The tautological line over RP∞ has no finite-rank complement
- `cex-vector-bundle-classification-without-numerability-can-fail` · counterexample — Vector-bundle classification can fail without numerability

### `complex-topological-k-theory-and-bott-periodicity` — Complex Topological K Theory and Bott Periodicity (20 item(s))

- `def-whitney-sum-monoid-of-complex-vector-bundles` · definition — The Whitney-sum monoid of complex vector bundles
- `def-complex-topological-k-zero-by-grothendieck-completion` · definition — Complex topological K⁰ by Grothendieck completion
- `prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases` · proposition — Equality in K⁰ is stable isomorphism over compact bases
- `def-grothendieck-ring-structure-and-rank-map` · definition — Grothendieck ring structure and rank map
- `def-reduced-complex-k-theory` · definition — Reduced complex K-theory
- `prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant` · proposition — K⁰ is contravariantly functorial and homotopy invariant
- `thm-reduced-k-theory-exact-sequence-of-a-cofibration` · theorem — Reduced K-theory exact sequence of a cofibration
- `def-external-product-in-complex-k-theory` · definition — External product in complex K-theory
- `lem-determinant-classifies-loops-in-complex-general-linear-groups` · lemma — Determinant classifies loops in complex general linear groups
- `thm-hopf-line-calculation-of-k-zero-of-the-two-sphere` · theorem — Hopf-line calculation of K⁰(S²)
- `lem-normalized-clutching-data-for-bundles-over-x-times-s-two` · lemma — Normalized clutching data for bundles over X×S²
- `lem-uniform-laurent-approximation-through-bundle-automorphisms` · lemma — Uniform Laurent approximation through bundle automorphisms
- `lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization` · lemma — Negative Laurent powers are cleared by Hopf-line stabilization
- `lem-polynomial-clutching-families-stabilize-to-linear-clutching` · lemma — Polynomial clutching families stabilize to linear clutching
- `lem-linear-clutching-splits-into-eigenbundles` · lemma — Linear clutching splits into spectral subbundles
- `thm-fundamental-product-theorem-for-complex-k-theory` · theorem — Fundamental product theorem for complex K-theory
- `def-negative-degree-complex-k-groups` · definition — Negative-degree complex K-groups
- `thm-complex-bott-periodicity` · theorem — Complex Bott periodicity
- `cor-complex-k-theory-of-spheres` · corollary — Complex K-theory of spheres
- `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory` · theorem — Complex K-theory is a two-periodic generalized cohomology theory

### `complex-topological-k-theory-and-bott-periodicity-examples` — Complex Topological K Theory and Bott Periodicity — Examples (6 item(s))

- `ex-k-theory-of-a-point-and-the-empty-space` · example — K-theory of a point and the empty space
- `ex-complex-k-ring-of-the-two-sphere` · example — The complex K-ring of S²
- `ex-complex-k-theory-of-even-and-odd-spheres` · example — Complex K-theory of even and odd spheres
- `ex-complex-k-ring-of-complex-projective-space` · example — The complex K-ring of CPⁿ
- `ex-rank-map-on-a-disconnected-compact-space` · example — The rank map on a disconnected compact space
- `cex-stable-isomorphism-does-not-imply-actual-bundle-isomorphism` · counterexample — Stable isomorphism does not imply actual bundle isomorphism

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-18`

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
