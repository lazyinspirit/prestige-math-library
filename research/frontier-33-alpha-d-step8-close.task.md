# Step 8 adjudication — group **d**, run `frontier-33`

You are the group Alpha for batches **8**, **13**, **16**: 3 A/B pair(s), 6 page(s), 138 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-33-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-33-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `homology-axioms-degree-and-classical-applications` | A | algebraic-topology | 366.009 | `cw-complexes-and-cellular-homology-examples` |
| 8 | `homology-axioms-degree-and-classical-applications-examples` | B | algebraic-topology | 366.01 | `homology-axioms-degree-and-classical-applications` |
| 13 | `integration-of-forms-and-the-general-stokes-theorem` | A | differential-geometry | 469 | `smooth-partitions-of-unity-and-exhaustions`, `rank-theorems-and-embedded-submanifolds`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `manifolds-with-boundary-collars-and-orientations`, `the-divergence-theorem-and-classical-stokes` |
| 13 | `integration-of-forms-and-the-general-stokes-theorem-examples` | B | differential-geometry | 470 | `integration-of-forms-and-the-general-stokes-theorem` |
| 16 | `sublevel-deformation-and-the-handle-attachment-theorem` | A | differential-topology | 525 | `stable-unstable-manifolds-and-morse-smale-transversality-examples`, `cw-complexes-and-cellular-homology` |
| 16 | `sublevel-deformation-and-the-handle-attachment-theorem-examples` | B | differential-topology | 526 | `sublevel-deformation-and-the-handle-attachment-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `homology-axioms-degree-and-classical-applications` — Homology Axioms Degree and Classical Applications (44 item(s))

- `def-unreduced-homology-theory-on-cw-pairs` · definition — Unreduced homology theory on cw pairs
- `thm-singular-homology-satisfies-homotopy-exactness-and-excision` · theorem — Singular homology satisfies homotopy exactness and excision
- `thm-singular-homology-satisfies-dimension-and-arbitrary-additivity` · theorem — Singular homology satisfies dimension and arbitrary additivity
- `def-reduced-homology-theory-and-augmentation` · definition — Reduced homology theory and augmentation
- `prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs` · proposition — Unreduced pair and reduced quotient axioms are equivalent on cw pairs
- `def-coefficient-normalized-morphism-of-ordinary-homology-theories` · definition — Coefficient normalized morphism of ordinary homology theories
- `lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group` · lemma — Any ordinary homology theory computes relative cell groups from its coefficient group
- `lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair` · lemma — Any ordinary homology theory has a cellular chain complex on a cw pair
- `lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology` · lemma — Finite dimensional skeletal exactness computes axiomatic homology
- `lem-oriented-simplex-comparison-for-an-ordinary-homology-theory` · lemma — Oriented simplex comparison for an ordinary homology theory
- `lem-finite-simplicial-approximation-for-homology-comparison` · lemma — Finite simplicial approximation for homology comparison
- `lem-subdivision-compatible-continuous-polyhedral-homology-comparison` · lemma — Subdivision compatible continuous polyhedral homology comparison
- `lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts` · lemma — Cw homotopy equivalence inclusions are strong deformation retracts
- `lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models` · lemma — Finite cw pairs admit finite simplicial homotopy models
- `lem-coefficient-comparison-on-finite-cw-pairs` · lemma — Coefficient comparison on finite cw pairs
- `lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory` · lemma — Sphere endomorphisms act by the same integer in every ordinary theory
- `lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients` · lemma — Axiomatic cellular boundaries are integral incidence matrices with coefficients
- `lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support` · lemma — Finite dimensional axiomatic homology has finite subcomplex support
- `lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage` · lemma — A comparison isomorphism propagates over one skeleton stage
- `thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs` · theorem — Eilenberg steenrod uniqueness on finite dimensional cw pairs
- `prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers` · proposition — Ordinary homology theories have mayer vietoris for cw covers
- `def-skeletal-mapping-telescope-of-a-cw-pair` · definition — Skeletal mapping telescope of a cw pair
- `lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs` · lemma — The skeletal telescope projects by a homotopy equivalence of pairs
- `lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift` · lemma — A sequential abelian colimit is the cokernel of one minus shift
- `lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit` · lemma — Additivity and compact cell support control the infinite cw colimit
- `thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs` · theorem — Eilenberg steenrod uniqueness on all cw pairs
- `def-degree-of-a-self-map-of-an-oriented-sphere` · definition — Degree of a self map of an oriented sphere
- `prop-degree-is-homotopy-invariant-and-multiplicative-under-composition` · proposition — Degree is homotopy invariant and multiplicative under composition
- `prop-suspension-preserves-sphere-map-degree` · proposition — Suspension preserves sphere map degree
- `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps` · proposition — Degree of identity constant reflection and antipodal sphere maps
- `lem-a-map-of-nonzero-degree-between-spheres-is-surjective` · lemma — A map of nonzero degree between spheres is surjective
- `def-local-degree-at-an-isolated-preimage` · definition — Local degree at an isolated preimage
- `lem-local-sphere-orientations-and-finite-puncture-excision` · lemma — Local sphere orientations and finite puncture excision
- `thm-global-sphere-degree-is-the-sum-of-local-degrees` · theorem — Global sphere degree is the sum of local degrees
- `prop-every-integer-occurs-as-the-degree-of-a-sphere-map` · proposition — Every integer occurs as the degree of a sphere map
- `thm-no-retraction-from-a-disk-onto-its-boundary` · theorem — No retraction from a disk onto its boundary
- `lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction` · lemma — A fixed point free ball map produces a boundary retraction
- `thm-brouwer-fixed-point-theorem` · theorem — Brouwer fixed point theorem
- `thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere` · theorem — No nowhere zero tangent vector field on an even sphere
- `prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field` · proposition — An odd sphere admits a nowhere zero tangent vector field
- `thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd` · theorem — A sphere has a nowhere zero tangent vector field iff its dimension is odd
- `cor-a-fixed-point-free-sphere-map-has-antipodal-degree` · corollary — A fixed point free sphere map has antipodal degree
- `cor-a-group-acting-freely-on-a-positive-even-sphere-has-at-most-two-elements` · corollary — A group acting freely on a positive even sphere has at most two elements
- `thm-invariance-of-dimension-for-euclidean-spaces` · theorem — Invariance of dimension for euclidean spaces

### `homology-axioms-degree-and-classical-applications-examples` — Homology Axioms Degree and Classical Applications — Examples (8 item(s))

- `ex-degree-of-the-circle-power-map` · example — Degree of the circle power map
- `ex-degree-of-a-coordinate-reflection-on-a-sphere` · example — Degree of a coordinate reflection on a sphere
- `ex-degree-of-the-antipodal-map-in-low-dimensions` · example — Degree of the antipodal map in low dimensions
- `ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere` · example — Local degrees of a polynomial map on the riemann sphere
- `ex-two-homology-theories-with-different-coefficient-groups` · example — Two homology theories with different coefficient groups
- `cex-degree-zero-does-not-imply-a-sphere-map-is-constant` · counterexample — Degree zero does not imply a sphere map is constant
- `cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero` · counterexample — Degree is not defined by top homology for self maps of s zero
- `cex-finite-additivity-alone-does-not-prove-infinite-cw-uniqueness` · counterexample — Finite additivity alone does not prove infinite cw uniqueness

### `integration-of-forms-and-the-general-stokes-theorem` — Integration of Forms and the General Stokes Theorem (47 item(s))

- `def-compactly-supported-differential-form` · definition — Compact support of a differential form
- `lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form` · lemma — Local finiteness near compact support
- `lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions` · lemma — Riemann-integrable half-space extensions of chart coefficients
- `def-integral-of-an-oriented-chart-supported-top-form` · definition — Chart integral with its orientation sign
- `lem-half-space-chart-transitions-extend-locally-to-side-preserving-diffeomorphisms` · lemma — Local side-preserving extensions of half-space transitions
- `thm-oriented-chart-integrals-are-coordinate-independent` · theorem — Coordinate independence of chart integrals
- `def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold` · definition — Integral of a compactly supported top form
- `thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement` · theorem — Independence of atlas, partition and refinement
- `prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components` · proposition — Linearity and additivity of the form integral
- `prop-reversing-orientation-negates-the-integral` · proposition — Orientation reversal changes the integral sign
- `prop-positive-compactly-supported-top-forms-have-positive-integral` · proposition — Positivity of the oriented integral
- `thm-change-of-variables-for-oriented-manifold-diffeomorphisms` · theorem — Change of variables on oriented manifolds
- `prop-integration-over-an-oriented-embedded-submanifold` · proposition — Integration on an oriented embedded submanifold
- `prop-integration-of-top-forms-by-finite-parametrizations` · proposition — Computing form integrals by finite parametrizations
- `def-one-density-on-a-finite-dimensional-real-vector-space` · definition — A signed one-density on a real vector space
- `prop-one-densities-form-a-one-dimensional-vector-space` · proposition — The density line and its positive cone
- `def-density-bundle-and-smooth-density` · definition — Density bundle and smooth density fields
- `prop-the-absolute-value-of-a-top-form-is-a-density` · proposition — Absolute value of a top form as a density
- `prop-every-smooth-manifold-admits-a-positive-smooth-density` · proposition — Existence of positive smooth densities
- `prop-density-pullback-under-local-diffeomorphisms` · proposition — Pullback of densities by local diffeomorphisms
- `def-integral-of-a-compactly-supported-smooth-density` · definition — Integral of a compactly supported smooth density
- `thm-density-integration-is-defined-without-an-orientation` · theorem — Orientation-free density integration and its properties
- `prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond` · proposition — Orientation identifies top forms with signed densities
- `rem-lebesgue-extension-of-manifold-density-integration` · remark — The separate measurable extension of density integration
- `lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary` · lemma — Form calculus extends locally across a manifold boundary
- `lem-euclidean-stokes-for-a-compactly-supported-form` · lemma — Compact-support Stokes on Euclidean space
- `lem-half-space-stokes-for-a-compactly-supported-form` · lemma — Compact-support Stokes on the upper half-space
- `lem-partition-localization-of-stokes` · lemma — Localization of Stokes by a partition of unity
- `thm-general-stokes-theorem` · theorem — The general Stokes theorem
- `cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero` · corollary — A compactly supported primitive has zero total derivative integral
- `cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact` · corollary — Nonzero total integral obstructs exactness on a closed manifold
- `cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries` · corollary — Closed forms have zero boundary integral
- `cor-a-nonzero-period-obstructs-exactness-and-bounding` · corollary — A nonzero period obstructs exactness and bounding
- `cor-fundamental-theorem-of-calculus-from-stokes` · corollary — Stokes agrees with the fundamental theorem of calculus
- `cor-greens-theorem-from-general-stokes` · corollary — General Stokes agrees with both planar Green formulas
- `cor-classical-three-dimensional-stokes-theorem` · corollary — Agreement of general and classical surface Stokes
- `def-volume-form-on-an-oriented-manifold` · definition — Positive volume form on an oriented manifold
- `def-divergence-relative-to-a-volume-form` · definition — Divergence relative to a volume form
- `prop-divergence-is-well-defined-and-has-the-coordinate-formula` · proposition — Coordinate formula and well-definedness of divergence
- `prop-divergence-satisfies-the-product-rule` · proposition — Product rule for volume-form divergence
- `lem-divergence-form-identity` · lemma — Divergence as an exterior derivative
- `thm-divergence-theorem-relative-to-a-volume-form` · theorem — Divergence theorem for a volume form
- `prop-general-stokes-agrees-with-classical-gauss-flux` · proposition — Agreement with classical Gauss flux in Euclidean space
- `fs-the-integral-of-a-top-form-is-defined-without-an-orientation` · false-statement — False: top-form integration needs no orientation
- `fs-the-integral-of-a-form-is-the-sum-over-an-arbitrary-atlas-without-a-partition` · false-statement — False: summing unweighted atlas integrals is valid
- `fs-the-integral-of-every-exact-form-on-every-manifold-is-zero` · false-statement — False: all exact forms integrate to zero everywhere
- `fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold` · false-statement — False: densities and top forms coincide on nonorientable manifolds

### `integration-of-forms-and-the-general-stokes-theorem-examples` — Integration of Forms and the General Stokes Theorem — Examples (12 item(s))

- `ex-integrating-a-compactly-supported-form-in-two-overlapping-charts` · example — Partition weights in two overlapping charts
- `ex-orientation-reversal-under-reflection` · example — Reflection reverses the signed form integral
- `ex-integration-of-a-density-on-the-mobius-band` · example — A density integral on the Mobius band
- `ex-stokes-on-an-oriented-interval` · example — Stokes on an interval with both endpoint chart signs
- `ex-greens-theorem-on-a-planar-disk` · example — Green circulation and flux on a disk
- `ex-classical-stokes-on-an-oriented-graph-surface` · example — Surface Stokes on a graph disk
- `ex-divergence-theorem-on-a-euclidean-ball` · example — Volume-form divergence on the Euclidean ball
- `ex-the-angular-form-has-period-two-pi` · example — The angular period and the obstruction to bounding
- `ex-exact-top-form-with-nonzero-integral-on-a-manifold-with-boundary` · example — An exact top form with nonzero integral on a disk
- `cex-a-noncompactly-supported-form-with-divergent-chart-integral` · counterexample — A noncompactly supported form whose integral diverges
- `cex-opposite-boundary-orientation-gives-the-wrong-sign-in-stokes` · counterexample — The wrong boundary sign in the half-space computation
- `ex-change-of-variables-on-the-oriented-circle` · example — Change of variables on an oriented circle

### `sublevel-deformation-and-the-handle-attachment-theorem` — Sublevel Deformation and the Handle Attachment Theorem (21 item(s))

- `def-closed-sublevel-and-level-set-of-a-smooth-function` · definition — Closed sublevel and level set of a smooth function
- `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time` · lemma — Normalized gradient crosses a compact regular band in controlled time
- `thm-regular-interval-diffeomorphism` · theorem — Regular interval diffeomorphism
- `cor-regular-sublevels-are-diffeomorphic` · corollary — Regular sublevels are diffeomorphic
- `prop-deformation-lemma-for-a-critical-point-free-slab` · proposition — Deformation lemma for a critical point free slab
- `def-k-handle-core-cocore-attaching-region-and-belt-sphere` · definition — K handle core cocore attaching region and belt sphere
- `def-attaching-a-smooth-handle-with-corner-rounding` · definition — Attaching a smooth handle with corner rounding
- `lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism` · lemma — Smooth handle attachment is independent of corner rounding up to diffeomorphism
- `lem-adapted-descending-field-near-a-compact-morse-band` · lemma — Adapted descending field near a compact morse band
- `lem-local-critical-value-lowering-preserves-the-upper-sublevel` · lemma — Local critical-value lowering preserves the upper sublevel
- `lem-local-morse-sublevel-pair-is-a-handle-pair` · lemma — Local morse sublevel pair is a handle pair
- `lem-gradient-flow-identifies-the-local-and-global-attaching-regions` · lemma — Descending flow identifies the local and global attaching regions
- `thm-one-critical-point-handle-attachment` · theorem — One critical point handle attachment
- `cor-unstable-disk-is-the-handle-core` · corollary — Unstable disk is the handle core
- `cor-one-critical-point-cell-attachment-homotopy-type` · corollary — One critical point cell attachment homotopy type
- `lem-relative-homology-of-the-standard-handle-pair` · lemma — Relative homology of the standard handle pair
- `cor-relative-homology-of-a-single-handle-pair` · corollary — Relative homology of a single handle pair
- `prop-simultaneous-attachment-at-a-morse-critical-value` · proposition — Simultaneous attachment at a morse critical value
- `cor-index-zero-handles-create-components` · corollary — Index zero handles create components
- `cor-index-n-handles-cap-boundary-spheres` · corollary — Index n handles cap boundary spheres
- `rem-compact-critical-band-is-the-local-handle-theorem-hypothesis` · remark — Compact critical band is the local handle theorem hypothesis

### `sublevel-deformation-and-the-handle-attachment-theorem-examples` — Sublevel Deformation and the Handle Attachment Theorem — Examples (6 item(s))

- `ex-sublevels-of-height-on-the-sphere` · example — Sublevels of height on the sphere
- `ex-torus-from-one-handle-of-each-index` · example — Torus from one 0-handle, two 1-handles and one 2-handle
- `ex-a-one-handle-joins-components-or-adds-a-tunnel` · example — A one handle joins components or adds a tunnel
- `ex-simultaneous-handles-at-a-repeated-critical-value` · example — Simultaneous handles at a repeated critical value
- `cex-a-critical-point-free-noncompact-band-need-not-be-a-global-product` · counterexample — A critical point free noncompact band need not be a global product
- `ex-relative-homology-of-a-handle-by-excision` · example — Relative homology of a handle by excision

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-33-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-33`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
