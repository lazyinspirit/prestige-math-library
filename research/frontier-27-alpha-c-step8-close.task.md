# Step 8 — group **c**, run `frontier-27`

You are the group Alpha for batches **8**: 2 A/B pair(s), 4 page(s), 116 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-27-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `sard-theorem-and-transversality` | A | differential-geometry | 453 | `smooth-partitions-of-unity-and-exhaustions`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections` |
| 8 | `sard-theorem-and-transversality-examples` | B | differential-geometry | 454 | `sard-theorem-and-transversality` |
| 8 | `tensor-fields-exterior-algebra-and-differential-forms` | A | differential-geometry | 463 | `tangent-cotangent-and-the-differential`, `smooth-vector-bundles-and-sections` |
| 8 | `tensor-fields-exterior-algebra-and-differential-forms-examples` | B | differential-geometry | 464 | `tensor-fields-exterior-algebra-and-differential-forms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sard-theorem-and-transversality` — Sard Theorem and Transversality (44 item(s))

- `def-null-subset-of-a-smooth-manifold` · definition — Null subsets of a smooth manifold
- `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets` · lemma — A $C^1$ map is locally Lipschitz on compact coordinate subsets
- `lem-c1-local-diffeomorphisms-preserve-null-sets-locally` · lemma — $C^1$ local diffeomorphisms preserve null sets locally
- `prop-the-null-set-definition-is-independent-of-the-smooth-atlas` · proposition — The manifold null-set definition is independent of the smooth atlas
- `prop-a-countable-chart-cover-detects-manifold-null-sets` · proposition — A countable chart cover detects manifold null sets
- `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` · proposition — Countable unions and subsets of manifold null sets are null
- `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold` · proposition — A null set has dense complement in a positive-dimensional manifold
- `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets` · proposition — An equidimensional $C^1$ map sends null sets to null sets
- `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null` · proposition — The image of a lower-dimensional $C^1$ manifold is null
- `cor-positive-codimension-immersed-submanifolds-are-null` · corollary — Positive-codimension immersed submanifolds are null
- `def-critical-locus-and-critical-value-set` · definition — The critical locus and critical value set
- `lem-sard-slicing-for-compact-null-sections` · lemma — Compact null sections imply a compact set is null
- `lem-sard-on-the-nonflat-critical-strata` · lemma — Sard on the nonflat critical strata
- `lem-sard-on-the-infinitely-flat-critical-stratum` · lemma — Sard on the infinitely flat critical stratum
- `thm-morse-sard-for-euclidean-maps` · theorem — Morse-Sard for Euclidean maps
- `thm-morse-sard-for-smooth-manifolds` · theorem — Morse-Sard for smooth manifolds
- `cor-regular-values-have-null-complement-and-are-dense` · corollary — Regular values have null complement and are dense
- `prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact` · proposition — The critical value set of a smooth map is sigma-compact
- `cor-regular-values-form-a-dense-g-delta-set` · corollary — Regular values form a dense $G_\delta$ set
- `cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective` · corollary — A smooth map from lower to higher dimension cannot be surjective
- `def-transverse-linear-subspaces` · definition — Transverse linear subspaces
- `def-a-smooth-map-transverse-to-an-embedded-submanifold` · definition — A smooth map transverse to an embedded submanifold
- `def-transverse-smooth-maps` · definition — Transverse smooth maps
- `def-transverse-embedded-submanifolds` · definition — Transverse embedded submanifolds
- `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient` · lemma — Transversality is equivalent to surjectivity on the normal quotient
- `thm-transverse-preimage-theorem` · theorem — The transverse preimage theorem
- `cor-transverse-intersection-theorem` · corollary — Transverse embedded submanifolds intersect in the expected codimension
- `thm-transverse-fibre-product-theorem` · theorem — Transverse fibre products are embedded submanifolds
- `cor-a-submersion-is-transverse-to-every-embedded-submanifold` · corollary — A submersion is transverse to every embedded submanifold
- `prop-transversality-to-a-point-is-the-regular-value-condition` · proposition — Transversality to a point is the regular-value condition
- `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target` · proposition — Transversality is invariant under diffeomorphic changes of source and target
- `prop-local-graph-characterization-by-transversality-to-vertical-fibres` · proposition — An $m$-dimensional submanifold transverse to vertical fibres is locally a graph
- `prop-global-graph-characterization-by-one-point-transverse-fibres` · proposition — A globally one-to-one transverse-fibre submanifold is a graph
- `def-smooth-family-of-maps-and-evaluation-map` · definition — Smooth families of maps and their evaluation maps
- `thm-parametric-transversality` · theorem — Parametric transversality
- `cor-generic-translations-of-a-map-to-euclidean-space-are-transverse` · corollary — Generic translations of a Euclidean-valued map are transverse
- `cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation` · corollary — Outside a null set, every translation makes a chosen value a transverse zero
- `prop-transversality-is-stable-on-a-compact-source` · proposition — Transversality is stable on a compact source
- `fs-every-critical-point-is-an-isolated-point` · false-statement — Critical points need not be isolated
- `fs-the-set-of-critical-values-is-always-closed` · false-statement — The critical-value set need not be closed
- `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions` · false-statement — Sard's theorem does not hold for every $C^1$ map
- `fs-two-submanifolds-with-nonempty-intersection-are-transverse` · false-statement — Intersecting submanifolds need not be transverse
- `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold` · false-statement — A preimage need not be a submanifold without transversality
- `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology` · false-statement — Uniform $C^1$ openness of transversality fails on arbitrary noncompact sources

### `sard-theorem-and-transversality-examples` — Sard Theorem and Transversality — Examples (10 item(s))

- `ex-critical-points-and-values-of-a-height-function-on-a-sphere` · example — Critical points and values of a height function on a sphere
- `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value` · example — A constant map has a large critical locus and one critical value
- `ex-a-smooth-map-with-a-nonclosed-critical-value-set` · example — A smooth map with a nonclosed critical-value set
- `ex-transverse-and-tangent-intersections-of-plane-curves` · example — Transverse and tangent intersections of plane curves
- `ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set` · example — Coordinate spheres intersect as a transverse level set
- `ex-a-fibre-product-of-submersions` · example — A fibre product of submersions
- `ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely` · example — Generic affine hyperplanes meet an embedded submanifold transversely
- `ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids` · example — A map can be vacuously transverse to a submanifold it avoids
- `cex-a-c1-map-whose-critical-values-have-positive-measure` · counterexample — A $C^1$ map can have critical values of positive measure
- `cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension` · counterexample — A tangent intersection can fail the expected-dimension conclusion

### `tensor-fields-exterior-algebra-and-differential-forms` — Tensor Fields Exterior Algebra and Differential Forms (50 item(s))

- `def-type-r-s-tensor-on-a-finite-dimensional-vector-space` · definition — Type $(r,s)$ tensors on a finite-dimensional vector space
- `def-tensor-product-of-multilinear-tensors` · definition — The tensor product of multilinear tensors
- `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear` · proposition — Tensor product of multilinear tensors is associative and bilinear
- `def-permutation-action-on-covariant-tensors` · definition — Permutation action on covariant tensors
- `def-symmetrization-and-alternation-operators` · definition — Symmetrization and alternation operators
- `prop-symmetrization-and-alternation-are-projections` · proposition — Symmetrization and alternation are projections
- `def-contraction-of-a-mixed-tensor` · definition — Contraction of a mixed tensor
- `lem-contraction-is-independent-of-the-basis-formula` · lemma — Contraction is independent of the basis formula
- `def-pullback-of-a-covariant-tensor-by-a-linear-map` · definition — Pullback of a covariant tensor by a linear map
- `prop-linear-pullback-respects-tensor-products-and-permutations` · proposition — Linear pullback respects tensor products and permutations
- `def-alternating-k-covectors` · definition — Alternating $k$-covectors
- `def-wedge-product-of-alternating-covectors` · definition — The wedge product of alternating covectors
- `lem-the-wedge-product-is-alternating-and-bilinear` · lemma — The wedge product is alternating and bilinear
- `thm-wedge-product-is-associative-and-graded-commutative` · theorem — The wedge product is associative and graded-commutative
- `def-exterior-algebra-of-covectors` · definition — The exterior algebra of covectors
- `lem-wedge-monomials-in-a-dual-basis-form-a-basis` · lemma — Wedge monomials in a dual basis form a basis
- `cor-dimension-of-the-kth-exterior-power-is-binomial` · corollary — The dimension of the $k$th exterior power is binomial
- `def-finite-dimensional-exterior-power-of-vectors` · definition — The finite-dimensional exterior power of vectors
- `thm-universal-property-of-the-finite-dimensional-exterior-power` · theorem — The finite-dimensional exterior power has the universal property
- `prop-functoriality-of-finite-dimensional-exterior-powers` · proposition — Finite-dimensional exterior powers are functorial
- `prop-exterior-power-duality-pairing` · proposition — Exterior powers carry a canonical duality pairing
- `prop-the-top-exterior-power-is-one-dimensional` · proposition — The top exterior power is one-dimensional
- `def-interior-product-on-alternating-covectors` · definition — Interior product on alternating covectors
- `prop-interior-product-is-a-graded-antiderivation` · proposition — Interior product is a graded antiderivation
- `def-type-r-s-tensor-bundle` · definition — The type $(r,s)$ tensor bundle
- `thm-tensor-transition-laws-define-a-smooth-vector-bundle` · theorem — Tensor transition laws define a smooth vector bundle
- `def-smooth-tensor-field` · definition — Smooth tensor fields
- `prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components` · proposition — Smoothness of a tensor field is equivalent to smooth coordinate components
- `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth` · proposition — Tensor products and contractions of smooth tensor fields are smooth
- `def-pullback-of-a-covariant-tensor-field` · definition — Pullback of a covariant tensor field
- `prop-pullback-of-covariant-tensors-is-smooth-and-functorial` · proposition — Pullback of covariant tensor fields is smooth and functorial
- `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map` · false-statement — A general mixed tensor field does not pull back along every smooth map
- `def-symmetric-and-alternating-covariant-tensor-subbundles` · definition — Symmetric and alternating covariant tensor subbundles
- `thm-symmetric-and-alternating-images-are-smooth-subbundles` · theorem — Symmetric and alternating images are smooth subbundles
- `def-exterior-power-bundle-of-the-cotangent-bundle` · definition — The exterior power bundle of the cotangent bundle
- `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle` · theorem — Exterior power transition laws define a smooth vector bundle
- `def-smooth-differential-k-form` · definition — Smooth differential $k$-forms
- `prop-local-coordinate-expression-for-a-differential-form` · proposition — A differential form has a unique local coordinate expression
- `def-wedge-product-of-differential-forms` · definition — The wedge product of differential forms
- `prop-differential-forms-form-a-graded-commutative-algebra` · proposition — Differential forms form a graded-commutative algebra
- `def-interior-product-of-a-form-by-a-vector-field` · definition — Interior product of a form by a vector field
- `prop-interior-product-on-forms-is-a-graded-antiderivation` · proposition — Interior product on forms is a graded antiderivation
- `def-pullback-of-a-differential-form` · definition — Pullback of a differential form
- `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges` · proposition — Pullback of forms is smooth, functorial, and preserves wedges
- `prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically` · proposition — A diffeomorphism pulls back tensor fields and forms isomorphically
- `fs-the-wedge-product-is-commutative` · false-statement — The wedge product is not commutative
- `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product` · false-statement — A nonzero one-form wedges with itself to zero
- `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n` · false-statement — Forms of degree above dimension vanish
- `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions` · false-statement — Tensor components do not transform as independent scalars
- `fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis` · false-statement — A general tensor is not determined by diagonal values alone

### `tensor-fields-exterior-algebra-and-differential-forms-examples` — Tensor Fields Exterior Algebra and Differential Forms — Examples (12 item(s))

- `ex-tensor-product-and-contraction-in-a-basis` · example — Tensor product and contraction in a basis
- `ex-a-bilinear-form-as-a-type-zero-two-tensor` · example — A bilinear form as a type $(0,2)$ tensor
- `ex-an-endomorphism-as-a-type-one-one-tensor` · example — An endomorphism as a type $(1,1)$ tensor
- `ex-the-identity-endomorphism-and-its-coordinate-independent-trace` · example — The identity endomorphism and its coordinate-independent trace
- `ex-wedge-products-of-the-standard-dual-basis` · example — Wedge products of the standard dual basis
- `ex-determinant-as-the-pairing-of-top-exterior-powers` · example — Determinant as the pairing of top exterior powers
- `ex-the-euclidean-metric-as-a-symmetric-two-tensor` · example — The Euclidean metric as a symmetric two-tensor
- `ex-the-area-form-in-polar-coordinates` · example — The area form in polar coordinates
- `ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve` · example — Pullback of the circle angular form along a parametrized curve
- `cex-a-vector-field-with-no-pullback-under-a-noninjective-map` · counterexample — A vector field need not admit a pullback under a noninjective map
- `cex-the-volume-coordinate-expression-changes-sign-under-a-reflection` · counterexample — A reflection changes the sign of a top-degree coordinate form
- `ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor` · example — The canonical one-form on a cotangent bundle

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-27-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-27`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
