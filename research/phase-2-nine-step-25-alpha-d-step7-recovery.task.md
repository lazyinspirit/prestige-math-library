# Step 7 adjudication — group **d**, run `phase-2-nine-step-25`

You are the group Alpha for batches **8**, **9**: 3 A/B pair(s), 6 page(s), 153 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-nine-step-25-alpha-d-step7-context.json` is what a group Alpha for this group wrote during step 6,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-nine-step-25-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `higher-homotopy-groups-and-cofiber-sequences` | A | algebraic-topology | 366.019 | `cw-complexes-and-cellular-homology`, `the-fundamental-group`, `homotopy-and-homotopy-equivalence`, `mapping-cones-cylinders-and-chain-triangles`, `simplicial-subdivision-and-simplicial-approximation`, `homology-axioms-degree-and-classical-applications`, `inner-product-spaces-and-orthogonality` |
| 8 | `higher-homotopy-groups-and-cofiber-sequences-examples` | B | algebraic-topology | 366.02 | `higher-homotopy-groups-and-cofiber-sequences` |
| 9 | `the-de-rham-complex-homotopy-and-mayer-vietoris` | A | differential-geometry | 471 | `smooth-partitions-of-unity-and-exhaustions`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `integration-of-forms-and-the-general-stokes-theorem`, `homotopy-and-homotopy-equivalence`, `the-fundamental-theorems-of-calculus`, `chain-complexes-and-homology`, `chain-homotopy-and-the-homotopy-category`, `long-exact-sequences-in-homology` |
| 9 | `the-de-rham-complex-homotopy-and-mayer-vietoris-examples` | B | differential-geometry | 472 | `the-de-rham-complex-homotopy-and-mayer-vietoris` |
| 9 | `riemannian-metrics-length-distance-and-volume` | A | differential-geometry | 477 | `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `smooth-vector-bundles-and-sections`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `manifolds-with-boundary-collars-and-orientations`, `integration-of-forms-and-the-general-stokes-theorem`, `compactness`, `line-integrals-and-the-gradient-theorem`, `measurable-densities-and-radon-volume-on-manifolds` |
| 9 | `riemannian-metrics-length-distance-and-volume-examples` | B | differential-geometry | 478 | `riemannian-metrics-length-distance-and-volume` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `higher-homotopy-groups-and-cofiber-sequences` — Higher Homotopy Groups and Cofiber Sequences (34 item(s))

- `def-compactly-generated-conventions-for-based-homotopy` · definition — Compactly generated conventions for based homotopy
- `lem-kification-compact-tests-and-finite-constructions` · lemma — Kification, compact tests, and finite constructions
- `lem-compact-test-exponential-law-and-products-of-quotients` · lemma — Compact-test exponential law and products of quotient maps
- `lem-weak-hausdorff-diagonals-and-closed-quotients` · lemma — Weak Hausdorff diagonals and closed quotients
- `lem-compact-generation-preserves-the-cylinder-and-closed-pushouts` · lemma — Compact generation preserves the cylinder and closed pushouts
- `lem-interval-exponential-law-and-quotient-homotopies` · lemma — Interval exponential law and quotient homotopies
- `def-higher-homotopy-group-by-based-cubes` · definition — Higher homotopy group by based cubes
- `lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes` · lemma — Cubical concatenation is well defined on higher homotopy classes
- `thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one` · theorem — Higher homotopy classes form groups and are abelian above degree one
- `prop-cubical-and-spherical-models-of-higher-homotopy-agree` · proposition — Cubical and spherical models of higher homotopy agree
- `prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant` · proposition — Higher homotopy groups are functorial and based homotopy invariant
- `def-relative-homotopy-group` · definition — Relative homotopy classes and groups
- `lem-relative-cubical-disk-model-and-compression` · lemma — Relative cubical disk model and compression
- `lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees` · lemma — Relative homotopy operations are well defined in their valid degrees
- `thm-long-exact-sequence-of-relative-homotopy-groups` · theorem — Long exact sequence of relative homotopy groups
- `def-cofibration-and-homotopy-extension-property` · definition — Cofibration and homotopy extension property
- `prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip` · proposition — Cofibrations are characterized by a retraction of the mapping cylinder strip
- `def-mapping-cylinder-and-mapping-cone` · definition — Mapping cylinder and mapping cone
- `thm-mapping-cylinder-factorization` · theorem — Mapping cylinder factorization
- `lem-pushouts-and-products-preserve-the-cofibrations-used-here` · lemma — Pushouts and products preserve the cofibrations used here
- `def-reduced-cone-suspension-and-cofiber-sequence` · definition — Reduced cone suspension and cofiber sequence
- `lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient` · lemma — Cofiber of a based cofibration is equivalent to the quotient
- `lem-iterated-cofibers-rotate-with-suspension-reflection` · lemma — Iterated cofibers rotate with suspension reflection
- `lem-suspension-homotopy-classes-have-natural-group-structures` · lemma — Suspension homotopy classes have natural group structures
- `thm-puppe-sequence-is-exact-after-mapping-into-a-based-space` · theorem — Puppe sequence is exact after mapping into a based space
- `prop-loop-suspension-adjunction-on-based-homotopy-classes` · proposition — Loop suspension adjunction on based homotopy classes
- `cor-higher-homotopy-groups-are-iterated-loop-components` · corollary — Higher homotopy groups are iterated loop components
- `prop-higher-homotopy-basepoint-transport-and-moving-homotopies` · proposition — Higher homotopy basepoint transport and moving homotopies
- `def-n-connected-space-and-n-connected-map` · definition — N connected space and n connected map
- `lem-finite-cw-basepoints-have-explicit-homotopy-extension` · lemma — Finite cw basepoints have explicit homotopy extension
- `thm-lower-dimensional-sphere-maps-are-based-nullhomotopic` · theorem — Lower-dimensional sphere maps are based nullhomotopic
- `lem-based-sphere-maps-have-finite-affine-bubble-normal-forms` · lemma — Based sphere maps have finite affine bubble normal forms
- `lem-finite-affine-bubbles-represent-signed-cubical-sums` · lemma — Finite affine bubbles represent signed cubical sums
- `thm-based-sphere-maps-are-classified-by-geometric-degree` · theorem — Based sphere maps are classified by degree

### `higher-homotopy-groups-and-cofiber-sequences-examples` — Higher Homotopy Groups and Cofiber Sequences — Examples (6 item(s))

- `ex-higher-homotopy-groups-of-a-product` · example — Higher homotopy groups of a product
- `ex-relative-homotopy-of-a-disk-boundary-pair` · example — Relative homotopy of a disk boundary pair
- `ex-mapping-cone-of-a-degree-d-circle-map` · example — Mapping cone of a degree d circle map
- `ex-cofiber-sequence-of-a-wedge-summand-inclusion` · example — Cofiber sequence of a wedge summand inclusion
- `cex-unbased-homotopic-based-maps-need-not-induce-the-same-based-homotopy-map-without-basepoint-transport` · counterexample — Unbased homotopic based maps need not induce the same based homotopy map without basepoint transport
- `cex-an-arbitrary-subspace-inclusion-need-not-be-a-cofibration` · counterexample — An arbitrary subspace inclusion need not be a cofibration

### `the-de-rham-complex-homotopy-and-mayer-vietoris` — The De Rham Complex Homotopy and Mayer Vietoris (39 item(s))

- `def-de-rham-cochain-complex` · definition — De rham cochain complex
- `def-closed-and-exact-differential-forms` · definition — Closed and exact differential forms
- `def-de-rham-cohomology` · definition — De rham cohomology
- `prop-zero-and-out-of-range-de-rham-cohomology` · proposition — Zero and out of range de rham cohomology
- `thm-zero-th-de-rham-cohomology-is-locally-constant-functions` · theorem — Zero th de rham cohomology is locally constant functions
- `prop-pullback-is-a-morphism-of-de-rham-complexes` · proposition — Pullback is a morphism of de rham complexes
- `thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology` · theorem — Pullback induces a well defined map on de rham cohomology
- `prop-de-rham-cohomology-is-a-contravariant-functor` · proposition — De rham cohomology is a contravariant functor
- `lem-wedge-with-a-closed-form-preserves-exactness-classes` · lemma — Wedge with a closed form preserves exactness classes
- `thm-wedge-product-descends-to-de-rham-cohomology` · theorem — Wedge product descends to de rham cohomology
- `def-de-rham-cohomology-ring` · definition — De rham cohomology ring
- `prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras` · proposition — Pullback is a homomorphism of de rham cohomology algebras
- `def-integration-along-the-unit-interval-for-a-differential-form` · definition — Integration along the unit interval for a differential form
- `lem-the-interval-homotopy-operator-is-coordinate-independent` · lemma — The interval homotopy operator is coordinate independent
- `thm-de-rham-homotopy-formula-on-a-product` · theorem — De rham homotopy formula on a product
- `thm-de-rham-homotopy-formula-for-a-smooth-homotopy` · theorem — De rham homotopy formula for a smooth homotopy
- `cor-smoothly-homotopic-maps-induce-the-same-de-rham-map` · corollary — Smoothly homotopic maps induce the same de rham map
- `thm-de-rham-cohomology-is-smooth-homotopy-invariant` · theorem — De rham cohomology is smooth homotopy invariant
- `cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds` · corollary — De rham cohomology is continuous homotopy invariant on smooth manifolds
- `def-radial-contraction-of-a-star-shaped-domain` · definition — Radial contraction of a star shaped domain
- `thm-poincare-lemma-for-differential-forms-on-star-shaped-domains` · theorem — Poincare lemma for differential forms on star shaped domains
- `cor-closed-differential-forms-are-locally-exact` · corollary — Closed differential forms are locally exact
- `thm-de-rham-cohomology-of-a-contractible-smooth-manifold` · theorem — De rham cohomology of a contractible smooth manifold
- `def-two-open-set-de-rham-mayer-vietoris-cochain-maps` · definition — Two open set de rham mayer vietoris cochain maps
- `lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms` · lemma — The de rham mayer vietoris sequence is exact at the first two terms
- `lem-the-de-rham-mayer-vietoris-difference-map-is-surjective` · lemma — The de rham mayer vietoris difference map is surjective
- `thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes` · theorem — Short exact mayer vietoris sequence of de rham complexes
- `thm-mayer-vietoris-sequence-in-de-rham-cohomology` · theorem — Mayer vietoris sequence in de rham cohomology
- `prop-explicit-de-rham-mayer-vietoris-connecting-class` · proposition — Explicit de rham mayer vietoris connecting class
- `thm-naturality-of-de-rham-mayer-vietoris-for-maps-of-covered-manifolds` · theorem — Naturality of de rham mayer vietoris for maps of covered manifolds
- `cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum` · corollary — De rham cohomology of a finite disjoint union is the direct sum
- `thm-de-rham-cohomology-of-spheres` · theorem — De rham cohomology of spheres
- `cor-de-rham-cohomology-of-punctured-euclidean-space` · corollary — De rham cohomology of punctured euclidean space
- `fs-the-de-rham-cohomology-class-of-a-form-is-defined-without-closedness` · false-statement — The de rham cohomology class of a form is defined without closedness
- `fs-every-smooth-form-is-either-closed-or-exact` · false-statement — Every smooth form is either closed or exact
- `fs-continuously-homotopic-smooth-maps-can-be-inserted-directly-into-the-differential-form-homotopy-operator` · false-statement — Continuously homotopic smooth maps can be inserted directly into the differential form homotopy operator
- `fs-the-poincare-lemma-says-every-closed-form-is-globally-exact` · false-statement — The poincare lemma says every closed form is globally exact
- `fs-the-mayer-vietoris-sequence-is-obtained-by-restricting-forms-without-a-partition-of-unity` · false-statement — The mayer vietoris sequence is obtained by restricting forms without a partition of unity
- `fs-de-rham-cohomology-is-a-covariant-functor` · false-statement — De rham cohomology is a covariant functor

### `the-de-rham-complex-homotopy-and-mayer-vietoris-examples` — The De Rham Complex Homotopy and Mayer Vietoris — Examples (12 item(s))

- `ex-de-rham-cohomology-of-a-point` · example — De rham cohomology of a point
- `ex-de-rham-cohomology-of-euclidean-space` · example — De rham cohomology of euclidean space
- `ex-de-rham-cohomology-of-a-finite-discrete-manifold` · example — De rham cohomology of a finite discrete manifold
- `ex-de-rham-cohomology-of-the-circle-from-mayer-vietoris` · example — De rham cohomology of the circle from mayer vietoris
- `ex-the-angular-form-generates-the-first-de-rham-cohomology-of-the-circle` · example — The angular form generates the first de rham cohomology of the circle
- `ex-de-rham-cohomology-of-the-two-sphere` · example — De rham cohomology of the two sphere
- `ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere` · example — The standard volume form generates top cohomology of a sphere
- `ex-de-rham-cohomology-of-punctured-three-space` · example — De rham cohomology of punctured three space
- `ex-homotopy-equivalent-annulus-and-circle-have-isomorphic-de-rham-rings` · example — Homotopy equivalent annulus and circle have isomorphic de rham rings
- `cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact` · counterexample — The closed angular form on the punctured plane is not exact
- `cex-the-pullback-on-cohomology-reverses-composition-order` · counterexample — The pullback on cohomology reverses composition order
- `ex-an-explicit-mayer-vietoris-connecting-form-on-the-circle` · example — An explicit mayer vietoris connecting form on the circle

### `riemannian-metrics-length-distance-and-volume` — Riemannian Metrics Length Distance and Volume (50 item(s))

- `def-riemannian-metric-and-riemannian-manifold` · definition — Riemannian metric and riemannian manifold
- `prop-coordinate-criterion-for-a-riemannian-metric` · proposition — Coordinate criterion for a riemannian metric
- `thm-every-smooth-manifold-admits-a-riemannian-metric` · theorem — Every smooth manifold admits a riemannian metric
- `def-pullback-riemannian-metric` · definition — Pullback of a riemannian metric as a tensor
- `prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions` · proposition — Pullback of a riemannian metric is riemannian exactly for immersions
- `def-riemannian-isometry-and-local-isometry` · definition — Riemannian isometry and local isometry
- `prop-riemannian-isometries-form-a-group-and-local-isometries-are-local-diffeomorphisms` · proposition — Riemannian isometries form a group and local isometries are local diffeomorphisms
- `def-conformal-equivalence-of-riemannian-metrics` · definition — Conformal equivalence of riemannian metrics
- `def-pointwise-norm-and-angle-from-a-riemannian-metric` · definition — Pointwise norm and angle from a riemannian metric
- `def-musical-isomorphisms` · definition — Musical isomorphisms
- `thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms` · theorem — The musical maps are smooth inverse bundle isomorphisms
- `def-riemannian-gradient` · definition — Riemannian gradient
- `prop-the-gradient-is-characterized-by-inner-products` · proposition — The gradient is characterized by inner products
- `prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles` · proposition — Riemannian metrics induce metrics on dual tensor and exterior bundles
- `def-piecewise-c-one-curve-on-a-manifold` · definition — Piecewise c one curve on a manifold
- `def-riemannian-speed-and-length` · definition — Riemannian speed and length
- `lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision` · lemma — Riemannian length is independent of piecewise c one subdivision
- `thm-riemannian-length-is-invariant-under-orientation-preserving-piecewise-c-one-reparametrization` · theorem — Riemannian length is invariant under orientation preserving piecewise c one reparametrization
- `prop-length-is-additive-under-concatenation-and-invariant-under-reversal` · proposition — Length is additive under concatenation and invariant under reversal
- `lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric` · lemma — Local comparison of a riemannian metric with the euclidean metric
- `lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve` · lemma — Any two points in a connected smooth manifold can be joined by a piecewise c one curve
- `def-riemannian-distance-on-a-connected-manifold` · definition — Riemannian distance on a connected manifold
- `thm-riemannian-distance-is-a-metric` · theorem — Riemannian distance is a metric
- `thm-the-riemannian-distance-topology-is-the-manifold-topology` · theorem — The riemannian distance topology is the manifold topology
- `prop-length-dominates-endpoint-distance` · proposition — Length dominates endpoint distance
- `prop-a-smooth-map-with-pointwise-operator-norm-at-most-c-is-c-lipschitz-for-riemannian-distance` · proposition — A smooth map with pointwise operator norm at most c is c lipschitz for riemannian distance
- `cor-riemannian-isometries-preserve-length-and-distance` · corollary — Riemannian isometries preserve length and distance
- `def-extended-riemannian-distance-on-a-disconnected-manifold` · definition — Extended riemannian distance on a disconnected manifold
- `def-distance-from-a-point-to-a-subset` · definition — Distance from a point to a subset
- `prop-distance-to-a-nonempty-subset-is-one-lipschitz` · proposition — Distance to a nonempty subset is one lipschitz
- `def-riemannian-volume-density` · definition — Riemannian volume density
- `lem-the-riemannian-volume-density-is-coordinate-independent` · lemma — The riemannian volume density is coordinate independent
- `def-riemannian-volume-form-on-an-oriented-manifold` · definition — Riemannian volume form on an oriented manifold
- `prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form` · proposition — The riemannian volume form is the unique positive unit top form
- `def-riemannian-volume-of-a-compactly-supported-smooth-density` · definition — Riemannian volume of a compactly supported smooth density
- `prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density` · proposition — Riemannian volume is the radon measure of the riemannian density
- `def-riemannian-divergence` · definition — Riemannian divergence
- `prop-coordinate-formula-for-riemannian-divergence` · proposition — Coordinate formula for riemannian divergence
- `thm-riemannian-divergence-theorem` · theorem — Riemannian divergence theorem
- `def-riemannian-hodge-star` · definition — Riemannian hodge star
- `thm-hodge-star-is-a-smooth-bundle-isomorphism` · theorem — Hodge star is a smooth bundle isomorphism
- `prop-hodge-star-squared-sign` · proposition — Hodge star squared sign
- `prop-riemannian-inner-product-of-compactly-supported-forms` · proposition — Riemannian inner product of compactly supported forms
- `rem-the-codifferential-and-hodge-theory` · remark — The codifferential and hodge theory
- `fs-the-pullback-of-a-riemannian-metric-by-every-smooth-map-is-a-riemannian-metric` · false-statement — The pullback of a riemannian metric by every smooth map is a riemannian metric
- `fs-every-riemannian-manifold-has-finite-distance-between-points-in-different-components` · false-statement — Every riemannian manifold has finite distance between points in different components
- `fs-riemannian-distance-is-defined-by-the-length-of-a-unique-shortest-curve` · false-statement — Riemannian distance is defined by the length of a unique shortest curve
- `fs-the-riemannian-volume-form-exists-on-every-riemannian-manifold` · false-statement — The riemannian volume form exists on every riemannian manifold
- `fs-the-distance-function-is-smooth-on-all-of-m-times-m` · false-statement — The distance function is smooth on all of m times m
- `fs-the-hodge-star-is-defined-without-an-orientation` · false-statement — The hodge star is defined without an orientation

### `riemannian-metrics-length-distance-and-volume-examples` — Riemannian Metrics Length Distance and Volume — Examples (12 item(s))

- `ex-the-euclidean-metric-and-its-musical-maps` · example — The euclidean metric and its musical maps
- `ex-the-round-metric-on-the-sphere-as-an-induced-metric` · example — The round metric on the sphere as an induced metric
- `ex-the-product-riemannian-metric` · example — The product riemannian metric
- `ex-a-conformal-metric-on-the-plane` · example — A conformal metric on the plane
- `ex-the-hyperbolic-upper-half-space-metric` · example — The hyperbolic upper half space metric
- `ex-the-flat-torus-metric-from-periodic-euclidean-coordinates` · example — The flat torus metric from periodic euclidean coordinates
- `ex-length-and-distance-on-the-circle` · example — Length and distance on the circle
- `ex-a-riemannian-distance-with-no-cross-component-finite-value` · example — A riemannian distance with no cross component finite value
- `ex-volume-density-in-polar-coordinates` · example — Volume density in polar coordinates
- `ex-hodge-star-on-euclidean-three-space` · example — Hodge star on euclidean three space
- `ex-divergence-in-polar-coordinates` · example — Divergence in polar coordinates
- `cex-a-degenerate-pullback-metric-under-a-constant-map` · counterexample — A degenerate pullback metric under a constant map

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

1 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-177f88e7fa54794dd2cd2198 · `lem-iterated-cofibers-rotate-with-suspension-reflection`** (from group d, presentation) — The Statement writes “The collapse ψ:C_i→ΣX is a based homotopy equivalence with ψ∘i(i)=q(f).” Here i was declared as Y→C_f, whereas ψ has domain C_i; neither i(i) nor q(f) has a coherent declared type. Proof 1.1 instead refers to the included C_f without naming the inclusion C_f→C_i. Clarify that inclusion and the intended commuting equality before relying on the displayed formula.

Append one owning-group disposition per warning to `research/phase-2-nine-step-25-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-nine-step-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-nine-step-25`

Read `research/phase-2-nine-step-25-judge-closure.json`,
`research/phase-2-nine-step-25-judge.jsonl`,
`research/phase-2-nine-step-25-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-nine-step-25-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-nine-step-25-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-nine-step-25-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
