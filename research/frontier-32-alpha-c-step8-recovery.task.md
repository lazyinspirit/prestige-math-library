# Step 8 adjudication — group **c**, run `frontier-32`

You are the group Alpha for batches **4**, **14**, **15**: 3 A/B pair(s), 6 page(s), 110 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `the-baire-principles-of-functional-analysis` | A | functional-analysis | 288.057 | `geometric-hahn-banach-and-convex-separation-examples` |
| 4 | `the-baire-principles-of-functional-analysis-examples` | B | functional-analysis | 288.058 | `the-baire-principles-of-functional-analysis` |
| 14 | `harmonic-functions-and-mean-values-in-rn` | A | pde | 458.003 | `quasilinear-characteristics-and-cauchy-kovalevskaya-examples`, `the-divergence-theorem-and-classical-stokes`, `the-maximal-function-and-lebesgue-differentiation` |
| 14 | `harmonic-functions-and-mean-values-in-rn-examples` | B | pde | 458.004 | `harmonic-functions-and-mean-values-in-rn`, `complex-differentiability-and-cauchy-riemann` |
| 15 | `manifolds-with-boundary-collars-and-orientations` | A | differential-geometry | 467 | `smooth-manifolds-and-smooth-maps`, `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `exterior-powers-orientation-and-hodge-duality` |
| 15 | `manifolds-with-boundary-collars-and-orientations-examples` | B | differential-geometry | 468 | `manifolds-with-boundary-collars-and-orientations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-baire-principles-of-functional-analysis` — The Baire Principles of Functional Analysis (16 item(s))

- `thm-uniform-boundedness-principle` · theorem — Uniform boundedness principle
- `thm-banach-steinhaus-dichotomy` · theorem — Baire dichotomy for a pointwise-defined family of bounded linear operators
- `cor-pointwise-limit-of-bounded-operators-is-bounded` · corollary — A pointwise limit of bounded operators is bounded with the liminf norm bound
- `lem-sokal-local-operator-norm-lower-bound` · lemma — A nonzero bounded linear operator is large on one of two nearby points
- `thm-sokal-gliding-hump-uniform-boundedness` · theorem — Sokal's gliding-hump proof of uniform boundedness
- `lem-open-mapping-ball-closure-step` · lemma — The closure of a bounded image contains a ball
- `lem-open-mapping-successive-approximation` · lemma — Successive approximation turns a closure-ball inclusion into an actual preimage
- `thm-open-mapping-theorem` · theorem — Open mapping theorem
- `cor-open-mapping-quantitative-form` · corollary — Quantitative lifting form of the open mapping theorem
- `thm-bounded-inverse-theorem` · theorem — Bounded inverse theorem
- `def-graph-of-a-linear-operator` · definition — The graph of a linear operator with a linear domain
- `thm-closed-graph-theorem` · theorem — Closed graph theorem
- `def-closable-linear-operator` · definition — A closable densely defined linear operator
- `thm-closability-sequential-criterion` · theorem — Sequential criterion for closability
- `cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous` · corollary — A separately continuous bilinear map on Banach spaces is jointly continuous
- `cor-equivalent-complete-norms-from-one-sided-comparison` · corollary — A one-sided comparison of two complete norms makes them equivalent

### `the-baire-principles-of-functional-analysis-examples` — The Baire Principles of Functional Analysis — Examples (5 item(s))

- `ex-condensation-of-singularities` · example — Condensation of singularities
- `cex-uniform-boundedness-fails-on-an-incomplete-domain` · counterexample — Uniform boundedness fails on the incomplete space c_00
- `cex-open-mapping-fails-without-completeness` · counterexample — A bounded bijection of incomplete normed spaces need not be open
- `cex-closed-graph-fails-without-completeness` · counterexample — A closed everywhere-defined graph need not be bounded without completeness
- `ex-a-closed-unbounded-differential-operator` · example — Differentiation on C^1[0,1] is closed and unbounded in the supremum norm

### `harmonic-functions-and-mean-values-in-rn` — Harmonic Functions and Mean Values in Rn (16 item(s))

- `def-distributional-harmonicity-and-poisson-equation-in-rn` · definition — Distributional harmonicity and Poisson's equation on an open subset of Rn
- `def-spherical-averages-and-local-ball-means-in-rn` · definition — Spherical averages and local ball means in Rn
- `lem-sphere-and-ball-measures-scale` · lemma — Surface and volume measures of Euclidean spheres and balls scale with radius
- `lem-radial-derivative-of-a-spherical-average` · lemma — The radial derivative of a spherical average
- `thm-spherical-mean-value-property-for-harmonic-functions` · theorem — Harmonic functions equal their spherical averages
- `cor-ball-mean-value-property-for-harmonic-functions` · corollary — Harmonic functions equal their ball averages
- `def-radial-mollifier-family-in-rn` · definition — A radial mollifier family in Rn
- `lem-radial-mollification-fixes-local-mean-value-functions` · lemma — Radial mollification fixes a function with the local ball mean-value property
- `thm-continuous-mean-value-functions-are-harmonic` · theorem — A continuous function with the ball mean-value property is harmonic
- `cor-local-mean-value-property-is-enough` · corollary — The local ball mean-value property already implies harmonicity
- `lem-distributional-laplacian-commutes-with-mollification` · lemma — The distributional Laplacian commutes with mollification on shrunken domains
- `thm-weyl-lemma-for-the-laplacian` · theorem — Weyl's lemma for the Laplacian
- `cor-locally-integrable-weakly-harmonic-functions-are-smooth` · corollary — A locally integrable weakly harmonic function has a smooth harmonic representative
- `lem-derivatives-of-harmonic-functions-are-harmonic` · lemma — Derivatives of harmonic functions are harmonic
- `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic` · theorem — Locally uniform limits of harmonic functions are harmonic
- `rem-plane-harmonic-theory-is-owned-by-complex-analysis` · remark — Plane-specific harmonic theory remains owned by complex analysis

### `harmonic-functions-and-mean-values-in-rn-examples` — Harmonic Functions and Mean Values in Rn — Examples (6 item(s))

- `ex-affine-and-harmonic-polynomial-functions` · example — Affine functions and mixed quadratic monomials are harmonic
- `ex-real-and-imaginary-parts-of-holomorphic-monomials` · example — The real and imaginary parts of holomorphic monomials
- `ex-radial-harmonic-functions-away-from-the-origin` · example — Radial harmonic functions away from the origin
- `cex-harmonic-on-a-punctured-domain-need-not-extend` · counterexample — A harmonic function on a punctured domain need not extend across the puncture
- `cex-one-centred-ball-mean-identity-does-not-force-harmonicity` · counterexample — One centred ball-mean identity does not force harmonicity
- `ex-distributional-harmonicity-removes-an-apparent-corner` · example — Distributional harmonicity removes an apparent interior corner

### `manifolds-with-boundary-collars-and-orientations` — Manifolds with Boundary Collars and Orientations (55 item(s))

- `def-euclidean-upper-half-space-and-its-boundary` · definition — Euclidean upper half-space and its boundary
- `def-smooth-function-on-a-relatively-open-subset-of-a-half-space` · definition — Smooth functions on relatively open half-space sets
- `lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space` · lemma — Half-space extensions have the same derivatives on the half-space
- `prop-chain-rule-for-smooth-half-space-maps` · proposition — Chain rule for smooth half-space maps
- `def-topological-manifold-with-boundary` · definition — Topological manifolds with boundary
- `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary` · definition — Smooth charts, atlases, and structures with boundary
- `def-smooth-map-between-manifolds-with-boundary` · definition — Smooth maps between manifolds with boundary
- `lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions` · lemma — Boundary smoothness is independent of charts and extensions
- `def-interior-point-boundary-point-interior-and-boundary-of-a-manifold` · definition — Interior and boundary of a manifold with boundary
- `thm-smooth-invariance-of-manifold-boundary` · theorem — Smooth invariance of the manifold boundary
- `cor-diffeomorphisms-preserve-interior-and-boundary` · corollary — Diffeomorphisms preserve interior and boundary
- `thm-the-interior-is-an-open-smooth-n-manifold` · theorem — The interior is an open smooth n-manifold
- `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold` · theorem — The boundary of a positive-dimensional manifold is a closed embedded smooth (n-1)-manifold
- `prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary` · proposition — Empty boundary is equivalent to being boundaryless
- `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary` · theorem — Smooth partitions of unity exist on manifolds with boundary
- `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary` · theorem — Tangent and cotangent bundles extend over a boundary
- `def-inward-outward-and-boundary-tangent-vectors` · definition — Inward, outward, and boundary-tangent vectors
- `prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane` · proposition — The boundary tangent space is the boundary-tangent hyperplane
- `def-boundary-defining-function` · definition — Boundary-defining functions
- `prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors` · proposition — Boundary-defining functions exist locally and detect inward vectors
- `thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary` · theorem — A global inward-pointing boundary vector field exists
- `thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary` · theorem — Boundary-tangent fields have boundary-preserving local two-sided flows
- `thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary` · theorem — Inward-pointing fields have local forward semiflows at the boundary
- `def-smooth-collar-of-a-manifold-boundary` · definition — Smooth collars of a manifold boundary
- `thm-collar-neighborhood-theorem` · theorem — Collar neighborhood theorem
- `def-double-of-a-smooth-manifold-with-boundary` · definition — The double of a smooth manifold with boundary
- `thm-the-double-has-a-well-defined-smooth-structure` · theorem — The double has a well-defined smooth structure
- `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary` · corollary — Smooth functions and tensor fields extend locally across the boundary
- `def-smooth-immersion-and-embedding-for-manifolds-with-boundary` · definition — Immersions and embeddings for manifolds with boundary
- `def-embedded-smooth-submanifold-with-boundary` · definition — Embedded smooth submanifolds with boundary
- `thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts` · theorem — Boundary submanifolds of a boundaryless manifold have half-slice charts
- `def-neat-submanifold-of-a-manifold-with-boundary` · definition — Neat submanifolds of a manifold with boundary
- `thm-neat-submanifolds-have-boundary-adapted-slice-charts` · theorem — Neat submanifolds have boundary-adapted slice charts
- `thm-morse-sard-for-maps-from-manifolds-with-boundary` · theorem — Morse-Sard for maps from manifolds with boundary
- `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space` · definition — Determinant-line orientations of finite-dimensional real vector spaces
- `prop-orientations-and-positive-basis-classes-agree-in-positive-dimension` · proposition — Orientations and positive basis classes agree in positive dimension
- `def-oriented-smooth-manifold-and-oriented-chart` · definition — Oriented smooth manifolds and oriented charts
- `thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension` · theorem — Positive oriented atlases characterize orientations in positive dimension
- `def-orientable-manifold` · definition — Orientable manifolds
- `thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form` · theorem — Orientability is equivalent to a nowhere-vanishing top form
- `prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations` · proposition — Nonempty connected orientable manifolds have exactly two orientations
- `prop-pointwise-orientation-sign-of-a-local-diffeomorphism` · proposition — Pointwise orientation sign of a local diffeomorphism
- `def-product-orientation` · definition — Product orientations
- `def-induced-orientation-on-a-hypersurface-from-a-coorientation` · definition — Orientation induced on a hypersurface by a coorientation
- `def-induced-boundary-orientation` · definition — Induced boundary orientation
- `prop-boundary-orientation-is-independent-of-the-outward-vector-field` · proposition — Boundary orientation is independent of the outward vector field
- `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary` · proposition — Boundary orientation of a product with at most one boundary factor
- `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold` · proposition — An oriented transverse normal bundle orients an embedded submanifold
- `def-orientation-preserving-parametrization` · definition — Orientation-preserving parametrizations
- `fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart` · false-statement — A smooth chart can turn a boundary point into an interior point
- `fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one` · false-statement — The tangent space at a boundary point has dimension n-1
- `fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold` · false-statement — Every boundary vector field has a local two-sided flow inside the manifold
- `fs-an-orientable-manifold-comes-with-a-canonical-orientation` · false-statement — An orientable manifold has a canonical orientation
- `fs-every-manifold-is-orientable` · false-statement — Every manifold is orientable
- `fs-the-boundary-orientation-is-given-by-inward-normal-first` · false-statement — Boundary orientation is inward-normal-first

### `manifolds-with-boundary-collars-and-orientations-examples` — Manifolds with Boundary Collars and Orientations — Examples (12 item(s))

- `ex-the-closed-half-space-as-a-manifold-with-boundary` · example — The closed half-space as a manifold with boundary
- `ex-the-closed-ball-and-its-sphere-boundary` · example — The closed ball and its sphere boundary
- `ex-the-cylinder-with-two-oppositely-oriented-boundary-components` · example — A cylinder with oppositely oriented boundary components
- `ex-the-boundary-of-an-oriented-interval` · example — The boundary of an oriented interval
- `ex-the-standard-collar-of-a-closed-ball` · example — The standard collar of a closed ball
- `ex-the-double-of-a-disk-is-a-sphere` · example — The double of a disk is a sphere
- `ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary` · example — The Mobius band is nonorientable although its boundary circle is orientable
- `ex-real-projective-space-is-orientable-exactly-in-odd-dimension` · example — Positive-dimensional real projective space is orientable exactly in odd dimension
- `ex-the-product-orientation-on-a-torus` · example — The product orientation on a torus
- `cex-a-submanifold-meeting-the-ambient-boundary-nonneatly` · counterexample — A submanifold meeting the ambient boundary nonneatly
- `cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line` · counterexample — An inward field without a negative-time flow in the half-line
- `ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal` · example — Boundary orientation of the unit sphere by the outward normal

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-c667527fa94e3c0e3e35ac45 · `def-spherical-averages-and-local-ball-means-in-rn`** (from group c, would-be-fatal) — The definition introduces M_u(x,r) and A_u(x,r), and then states their mean-value properties, without quantifying an open Omega or requiring u to be measurable and sphere/ball integrable. As written the displayed integrals need not exist for an arbitrary u.
- **s8a-bea9295dcfb0e3326be749b1 · `def-distributional-harmonicity-and-poisson-equation-in-rn`** (from group c, gap-a-reader-closes) — It defines a distribution as a continuous linear functional on C_c^infty(Omega) without specifying the test-function topology. The intended standard LF topology is recoverable, but continuity is otherwise undefined.
- **s8a-b4995ce770e4f4a663df4d20 · `cor-pointwise-limit-of-bounded-operators-is-bounded`** (from group c, gap-a-reader-closes) — Step 3.1 says that the preceding inequality along a subsequence with norms tending to the liminf yields the liminf bound, but the displayed preceding estimate used the global M. One must separately apply ||T_n x||<=||T_n||||x|| along that subsequence before passing to its limit.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-32`

Read `research/frontier-32-judge-closure.json`,
`research/frontier-32-judge.jsonl`,
`research/frontier-32-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-32-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-32-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-32-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
