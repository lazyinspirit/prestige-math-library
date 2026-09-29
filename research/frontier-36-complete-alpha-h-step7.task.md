# Step 7 adjudication — group **h**, run `frontier-36-complete`

You are the group Alpha for batches **14**, **15**, **19**: 3 A/B pair(s), 6 page(s), 143 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-36-complete-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `jacobi-fields-conjugate-points-and-the-cut-locus` | A | differential-geometry | 485 | `riemann-curvature-and-riemannian-submanifolds`, `distributions-test-functions-and-differentiation`, `further-trigonometric-identities-and-inverses`, `hilbert-space-geometry-and-riesz-representation` |
| 14 | `jacobi-fields-conjugate-points-and-the-cut-locus-examples` | B | differential-geometry | 486 | `jacobi-fields-conjugate-points-and-the-cut-locus` |
| 15 | `the-gauss-bonnet-theorem-for-riemannian-surfaces` | A | differential-geometry | 489 | `whitney-embedding-tubular-neighbourhoods-and-approximation`, `manifolds-with-boundary-collars-and-orientations`, `integration-of-forms-and-the-general-stokes-theorem`, `riemannian-metrics-length-distance-and-volume`, `connections-levi-civita-and-parallel-transport`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `riemann-curvature-and-riemannian-submanifolds`, `classification-of-compact-connected-surfaces` |
| 15 | `the-gauss-bonnet-theorem-for-riemannian-surfaces-examples` | B | differential-geometry | 490 | `the-gauss-bonnet-theorem-for-riemannian-surfaces` |
| 19 | `chern-weil-theory-and-characteristic-forms` | A | differential-geometry | 516.1 | `riemann-curvature-and-riemannian-submanifolds`, `lie-groups-invariant-fields-and-the-exponential-map`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `the-de-rham-theorem-and-degree` |
| 19 | `chern-weil-theory-and-characteristic-forms-examples` | B | differential-geometry | 516.2 | `chern-weil-theory-and-characteristic-forms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `jacobi-fields-conjugate-points-and-the-cut-locus` — Jacobi Fields Conjugate Points and the Cut Locus (49 item(s))

- `def-geodesic-variation` · definition — Geodesic variation
- `lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation` · lemma — Covariant derivatives commute up to curvature in a two parameter variation
- `def-jacobi-field` · definition — Jacobi field
- `thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field` · theorem — Variation field of a geodesic variation is a jacobi field
- `thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data` · theorem — Existence and uniqueness of jacobi fields from initial data
- `cor-the-space-of-jacobi-fields-along-a-geodesic-has-dimension-two-n` · corollary — The space of jacobi fields along a geodesic has dimension two n
- `thm-every-jacobi-field-is-induced-by-a-geodesic-variation` · theorem — Every jacobi field is induced by a geodesic variation
- `prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity` · proposition — Tangential jacobi fields are affine multiples of the velocity
- `prop-killing-fields-restrict-to-jacobi-fields-along-geodesics` · proposition — Killing fields restrict to jacobi fields along geodesics
- `lem-wronskian-of-two-jacobi-fields-is-constant` · lemma — Wronskian of two jacobi fields is constant
- `thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields` · theorem — Differential of the exponential map in terms of jacobi fields
- `def-conjugate-points-along-a-geodesic-and-their-multiplicity` · definition — Conjugate points along a geodesic and their multiplicity
- `thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic` · theorem — Conjugate points are critical values of the exponential map along the geodesic
- `prop-conjugate-instants-are-isolated-unless-the-geodesic-is-constant` · proposition — Conjugate instants are isolated unless the geodesic is constant
- `prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization` · proposition — Conjugate points and multiplicity are invariant under affine reparametrization
- `thm-second-variation-formula-for-energy` · theorem — Second variation formula for energy
- `def-index-form-of-a-geodesic-segment` · definition — Index form of a geodesic segment
- `lem-integration-by-parts-for-the-index-form` · lemma — Integration by parts for the index form
- `prop-jacobi-fields-are-the-null-solutions-of-the-index-form-with-fixed-endpoints` · proposition — Jacobi fields are the null solutions of the index form with fixed endpoints
- `thm-index-lemma` · theorem — Index lemma
- `def-h-one-riemannian-curves-and-half-energy` · definition — H-one Riemannian curves and their half-energy
- `lem-local-length-comparison-for-a-conjugate-free-geodesic` · lemma — Local length comparison for a conjugate-free geodesic
- `lem-h-one-local-length-comparison-for-a-conjugate-free-geodesic` · lemma — H-one local length comparison for a conjugate-free geodesic
- `cor-a-geodesic-segment-before-its-first-conjugate-point-is-locally-energy-minimizing` · corollary — A geodesic segment before its first conjugate point is locally energy minimizing
- `thm-a-geodesic-does-not-minimize-past-its-first-conjugate-point` · theorem — A geodesic does not minimize past its first conjugate point
- `prop-at-a-conjugate-endpoint-the-index-form-is-degenerate` · proposition — At a conjugate endpoint the index form is degenerate
- `def-cut-time-in-a-unit-tangent-direction` · definition — Cut time in a unit tangent direction
- `lem-minimizing-along-a-geodesic-is-an-initial-interval-property` · lemma — Minimizing along a geodesic is an initial interval property
- `def-cut-point-and-cut-locus-of-a-point` · definition — Cut point and cut locus of a point
- `lem-finite-dimensional-unit-spheres-are-sequentially-compact` · lemma — Unit spheres in finite-dimensional normed spaces are sequentially compact
- `lem-the-pointwise-norm-is-smooth-off-the-zero-vector` · lemma — The pointwise norm on a tangent space is smooth off the zero vector
- `thm-characterization-of-a-cut-point` · theorem — Characterization of a cut point
- `thm-cut-time-is-positive-and-continuous` · theorem — Cut time is positive and continuous
- `cor-cut-time-does-not-exceed-first-conjugate-time` · corollary — Cut time does not exceed first conjugate time
- `prop-injectivity-radius-is-the-infimum-of-cut-times` · proposition — Injectivity radius is the infimum of cut times
- `thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p` · theorem — Exp p is a diffeomorphism from the open tangent cut domain onto m minus the cut locus and p
- `thm-distance-from-p-is-smooth-off-p-and-the-cut-locus` · theorem — Distance from p is smooth off p and the cut locus
- `prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus` · proposition — Gradient of the distance is the outward unit radial field off the cut locus
- `prop-hessian-of-distance-in-terms-of-radial-jacobi-fields` · proposition — Hessian of distance in terms of radial jacobi fields
- `thm-cut-locus-of-a-point-is-closed` · theorem — Cut locus of a point is closed
- `thm-cut-locus-of-a-point-has-riemannian-volume-zero` · theorem — Cut locus of a point has riemannian volume zero
- `cor-polar-integration-may-discard-the-cut-locus` · corollary — Polar integration may discard the cut locus
- `rem-the-morse-index-theorem-for-geodesics` · remark — The Morse index theorem for geodesics
- `fs-every-vector-field-along-a-geodesic-is-a-jacobi-field` · false-statement — Every vector field along a geodesic is a jacobi field
- `fs-conjugacy-is-a-property-of-two-points-independent-of-the-geodesic-between-them` · false-statement — Conjugacy is a property of two points independent of the geodesic between them
- `fs-a-geodesic-stops-minimizing-exactly-at-its-first-conjugate-point` · false-statement — A geodesic stops minimizing exactly at its first conjugate point
- `fs-the-distance-from-p-is-smooth-on-m-minus-p` · false-statement — The distance from p is smooth on m minus p
- `fs-the-cut-locus-of-a-point-is-always-a-smooth-hypersurface` · false-statement — The cut locus of a point is always a smooth hypersurface
- `fs-nullity-of-the-cut-locus-follows-merely-because-it-has-empty-interior` · false-statement — Nullity of the cut locus follows merely because it has empty interior

### `jacobi-fields-conjugate-points-and-the-cut-locus-examples` — Jacobi Fields Conjugate Points and the Cut Locus — Examples (12 item(s))

- `ex-jacobi-fields-in-euclidean-space` · example — Jacobi fields in euclidean space
- `ex-jacobi-fields-in-constant-sectional-curvature` · example — Jacobi fields in constant sectional curvature
- `ex-conjugate-antipodes-on-the-round-sphere` · example — Conjugate antipodes on the round sphere
- `ex-no-conjugate-points-in-nonpositive-constant-curvature` · example — No conjugate points in nonpositive constant curvature
- `ex-killing-jacobi-fields-from-rotations` · example — Killing jacobi fields from rotations
- `ex-cut-locus-of-a-point-on-a-round-sphere` · example — Cut locus of a point on a round sphere
- `ex-cut-locus-of-a-point-on-a-flat-circle` · example — Cut locus of a point on a flat circle
- `ex-cut-locus-on-a-flat-rectangular-torus-from-the-dirichlet-cell` · example — Cut locus on a flat rectangular torus from the dirichlet cell
- `cex-a-cut-point-that-is-not-conjugate-because-two-minimizers-arrive` · counterexample — A cut point that is not conjugate because two minimizers arrive
- `cex-a-conjugate-point-at-which-there-are-many-geodesics` · counterexample — A conjugate point at which there are many geodesics
- `ex-distance-hessian-in-euclidean-space` · example — Distance hessian in euclidean space
- `ex-index-form-in-constant-curvature` · example — Index form in constant curvature

### `the-gauss-bonnet-theorem-for-riemannian-surfaces` — The Gauss Bonnet Theorem for Riemannian Surfaces (49 item(s))

- `def-oriented-riemannian-surface-and-positive-quarter-turn` · definition — Oriented surface and positive quarter-turn
- `def-connection-one-form-of-an-oriented-orthonormal-frame` · definition — Connection form of an oriented orthonormal frame
- `thm-connection-one-form-rotation-law-on-an-oriented-surface` · theorem — Rotation law for the surface connection form
- `thm-gaussian-curvature-structure-equation` · theorem — Gaussian curvature structure equation
- `def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve` · definition — Signed geodesic curvature
- `prop-geodesic-curvature-under-orientation-and-parameter-reversal` · proposition — Signs of geodesic curvature under reversals
- `prop-angle-derivative-formula-for-geodesic-curvature` · proposition — Tangent-angle formula for geodesic curvature
- `def-signed-exterior-angle-at-a-piecewise-smooth-corner` · definition — Signed exterior angle at an ordinary corner
- `prop-total-turning-is-the-integral-of-geodesic-curvature-plus-frame-holonomy` · proposition — Total turning with connection and corner terms
- `def-rotation-index-of-a-regular-closed-plane-curve` · definition — Rotation index of a regular closed plane curve
- `thm-hopf-turning-tangent-theorem` · theorem — Hopf turning-tangent theorem with ordinary corners
- `cor-turning-angle-sum-for-a-simple-geodesic-polygon-in-the-plane` · corollary — Exterior-angle sum of a planar polygon
- `def-regular-oriented-surface-region-with-piecewise-smooth-boundary` · definition — Regular oriented surface regions with corners
- `lem-stokes-for-piecewise-smooth-surface-regions` · lemma — Stokes formula for finite ordinary surface corners
- `lem-finite-planar-graph-disk-cuts-and-euler-count` · lemma — Finite planar graph disk cuts and Euler count
- `lem-finite-frameable-decomposition-of-a-regular-disk-region` · lemma — Finite frameable decomposition of a regular disk region
- `thm-local-gauss-bonnet-for-a-frameable-disk-region` · theorem — Local Gauss–Bonnet on a framed disk region
- `thm-gauss-bonnet-for-a-geodesic-triangle` · theorem — Gauss–Bonnet angle formula for a small geodesic triangle
- `cor-angle-sum-comparison-for-small-geodesic-triangles` · corollary — Angle excess and integrated curvature
- `thm-local-gauss-bonnet-for-an-arbitrary-disk-region` · theorem — Local Gauss–Bonnet for any regular disk region
- `def-curvilinear-triangulation-of-a-compact-surface` · definition — Curvilinear face-to-face triangulation
- `def-geodesic-triangulation` · definition — Geodesic triangulation with prescribed boundary arcs
- `lem-a-compact-surface-metric-extends-across-its-boundary` · lemma — Extending a compact surface metric across its boundary
- `lem-a-compact-riemannian-surface-has-a-uniform-short-geodesic-radius` · lemma — Uniform short-geodesic scale on a compact surface
- `thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface` · theorem — Finite curvilinear triangulation of a compact Riemannian surface
- `lem-a-finite-short-geodesic-network-gives-a-curvilinear-polygon-cellulation` · lemma — Finite short-geodesic polygon cellulation from curvilinear triangles
- `thm-finite-geodesic-triangulation-of-a-compact-riemannian-surface` · theorem — Finite face-to-face geodesic triangulation
- `def-euler-characteristic-of-a-finitely-triangulated-compact-surface` · definition — Euler count of a supplied surface triangulation
- `lem-euler-characteristic-is-unchanged-by-edge-and-face-subdivision` · lemma — Euler count under elementary subdivision
- `lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation` · lemma — Summing local Gauss–Bonnet over a supplied triangulation
- `lem-curvilinear-triangulation-induces-a-finite-cw-structure` · lemma — A curvilinear triangulation gives a finite CW structure
- `lem-gauss-bonnet-expression-is-independent-of-the-metric` · lemma — The Gauss–Bonnet curvature and boundary expression is metric independent
- `thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined` · theorem — Topological well-definedness of the surface Euler characteristic
- `prop-euler-characteristic-is-additive-under-gluing-along-a-finite-one-dimensional-subcomplex` · proposition — Euler characteristic under finite subcomplex gluing
- `thm-gauss-bonnet-for-compact-oriented-surfaces-with-boundary-and-corners` · theorem — Gauss–Bonnet for compact oriented surface regions with boundary and corners
- `cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary` · corollary — Gauss–Bonnet with smooth boundary
- `thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces` · theorem — Global Gauss–Bonnet for closed oriented surfaces
- `cor-total-gaussian-curvature-is-independent-of-the-riemannian-metric` · corollary — Metric independence of total Gaussian curvature
- `cor-a-flat-closed-oriented-surface-has-euler-characteristic-zero` · corollary — Flat closed surfaces have Euler characteristic zero
- `cor-a-positively-curved-closed-oriented-surface-has-positive-euler-characteristic` · corollary — Positive curvature forces positive Euler characteristic
- `thm-gauss-bonnet-for-closed-nonorientable-riemannian-surfaces` · theorem — Gauss–Bonnet for closed nonorientable surfaces
- `cor-gauss-bonnet-for-a-geodesic-polygon` · corollary — Gauss–Bonnet for a geodesic polygonal disk
- `rem-surface-gauss-bonnet-versus-higher-dimensional-cern-gauss-bonnet` · remark — Scope of classical surface Gauss–Bonnet
- `fs-geodesic-curvature-is-the-ordinary-curvature-of-a-space-curve` · false-statement — Geodesic curvature need not equal ambient curve curvature
- `fs-the-connection-one-form-of-an-orthonormal-frame-is-frame-independent` · false-statement — A surface connection form depends on its frame
- `fs-a-geodesic-triangle-on-every-surface-has-angle-sum-pi` · false-statement — Geodesic triangles need not have Euclidean angle sum
- `fs-gauss-bonnet-for-a-surface-with-boundary-has-no-boundary-term` · false-statement — A boundary term is necessary
- `fs-euler-characteristic-is-defined-by-choosing-any-triangulation-without-proving-independence` · false-statement — The raw cell-count triple is a surface invariant
- `fs-classical-gauss-bonnet-by-itself-classifies-compact-surfaces` · false-statement — Gauss–Bonnet alone does not classify surfaces

### `the-gauss-bonnet-theorem-for-riemannian-surfaces-examples` — The Gauss Bonnet Theorem for Riemannian Surfaces — Examples (12 item(s))

- `ex-gauss-bonnet-for-a-euclidean-disk` · example — Euclidean disk boundary curvature
- `ex-gauss-bonnet-for-a-euclidean-annulus` · example — Euclidean annulus boundary signs
- `ex-gauss-bonnet-for-the-round-sphere` · example — Total curvature of a round sphere
- `ex-gauss-bonnet-for-a-flat-torus` · example — Flat torus and zero Euler characteristic
- `ex-hyperbolic-geodesic-triangle-area-defect` · example — Area defect of a hyperbolic geodesic triangle
- `ex-spherical-geodesic-triangle-area-excess` · example — Area excess of a spherical geodesic triangle
- `ex-gauss-bonnet-for-a-spherical-cap` · example — Spherical cap boundary sign
- `ex-a-polyhedral-style-geodesic-triangulation-angle-count` · example — Finite triangulation angle bookkeeping
- `ex-projective-plane-total-curvature-from-a-hemisphere-identification` · example — Projective-plane curvature via a hemisphere
- `cex-omitting-exterior-corner-angles-from-a-geodesic-polygon` · counterexample — Corner terms are required even in the plane
- `cex-using-inward-normal-first-reverses-the-boundary-term` · counterexample — Wrong boundary orientation reverses the disk term
- `ex-metric-independence-of-total-curvature-on-a-deformed-sphere` · example — A deformed sphere has the same total curvature

### `chern-weil-theory-and-characteristic-forms` — Chern–Weil Theory and Characteristic Forms (17 item(s))

- `def-invariant-polynomial-on-a-matrix-lie-algebra` · definition — Invariant symmetric polynomials on a matrix Lie algebra
- `def-complex-linear-and-compatible-bundle-connections` · definition — Complex-linear and metric-compatible bundle connections
- `lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles` · lemma — Existence of compatible connections
- `def-evaluation-of-an-invariant-polynomial-on-curvature` · definition — Evaluation of an invariant polynomial on curvature
- `lem-invariant-polynomials-annihilate-covariant-commutators` · lemma — Invariant polynomials cancel connection commutators
- `lem-an-invariant-polynomial-of-curvature-is-closed` · lemma — Closedness of invariant curvature forms
- `def-the-chern-weil-homomorphism` · definition — Chern–Weil map for a chosen connection
- `lem-transgression-between-two-connections-is-exact` · lemma — Explicit Chern–Simons transgression between two connections
- `thm-chern-weil-homomorphism-is-independent-of-connection-and-natural` · theorem — Connection independence and naturality of Chern–Weil classes
- `def-chern-pontryagin-and-euler-characteristic-forms` · definition — Chern, Pontryagin, and Euler characteristic forms
- `lem-second-countable-smooth-manifolds-have-cw-homotopy-type` · lemma — Smooth manifolds have CW homotopy type
- `lem-first-chern-form-agrees-with-the-topological-line-class` · lemma — First Chern form agrees with the topological line class
- `lem-oriented-real-two-plane-splitting-with-injective-real-pullback` · lemma — Oriented real two-plane splitting with real-cohomology injection
- `lem-complex-flag-splitting-over-smooth-bases-with-injective-real-pullback` · lemma — Complex flag splitting with injective real pullback on smooth bases
- `thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals` · theorem — Characteristic forms represent topological characteristic classes over the reals
- `prop-chern-weil-forms-obey-direct-sum-and-pullback-formulas` · proposition — Direct-sum and pullback formulas for characteristic forms
- `rem-integral-torsion-is-not-detected-by-real-characteristic-forms` · remark — Real characteristic forms do not detect integral torsion

### `chern-weil-theory-and-characteristic-forms-examples` — Chern–Weil Theory and Characteristic Forms: Examples (4 item(s))

- `ex-curvature-and-first-chern-form-of-a-line-bundle` · example — Curvature and first Chern form of a complex line
- `ex-flat-connections-have-vanishing-positive-degree-real-chern-weil-classes` · example — Flat connections and real characteristic classes
- `ex-pontryagin-forms-from-a-real-connection` · example — Pontryagin forms from a real connection
- `cex-changing-a-connection-changes-the-form-but-not-its-de-rham-class` · counterexample — Connections can change a representative without changing its class

## Your seams

Your pages depend on another group's:

- `the-gauss-bonnet-theorem-for-riemannian-surfaces` requires `classification-of-compact-connected-surfaces` (group e, batch 10)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-36-complete-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-36-complete`

Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task.
It supplies the batch, exact rejections, ownership, evidence paths and structured
result schema. Do not reconstruct these from an old group task.

Adjudicate by logical validity, repair all confirmed defects (including nonfatal
defects), and identify all
relevant downstream consumers including published items. The engine routes
downstream repairs to three Sol xhigh owners and certifies once after all
writers drain. Sol rejudgment and adjudication/repair/certification repeat
under WORKFLOW.md. New downstream work continues in the repair phase until
complete before certification. Fatal classification controls only the threshold.
Historical terminal receipts cannot close current rounds.
Adjudicators and all three owner agents may author new items only for genuine
unmet prerequisites. Follow the dedicated briefs for evidence, unique IDs,
registry/index and metadata inclusion, downstream repair closure and central
certification and gates; the frozen original scope never grows.
