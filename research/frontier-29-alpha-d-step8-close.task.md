# Step 8 adjudication — group **d**, run `frontier-29`

You are the group Alpha for batches **11**, **12**, **17**: 3 A/B pair(s), 6 page(s), 114 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-29-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 11 | `derived-functors` | A | homological-algebra | 365.047 | `projective-and-injective-resolutions-examples` |
| 11 | `derived-functors-examples` | B | homological-algebra | 365.048 | `derived-functors` |
| 12 | `simplicial-complexes-and-simplicial-homology` | A | algebraic-topology | 366.001 | `schur-multipliers-and-universal-central-extensions-examples` |
| 12 | `simplicial-complexes-and-simplicial-homology-examples` | B | algebraic-topology | 366.002 | `simplicial-complexes-and-simplicial-homology` |
| 17 | `morse-critical-points-hessians-and-indices` | A | differential-topology | 517 | `moment-maps-and-symplectic-reduction-examples` |
| 17 | `morse-critical-points-hessians-and-indices-examples` | B | differential-topology | 518 | `morse-critical-points-hessians-and-indices` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `derived-functors` — Derived Functors (44 item(s))

- `def-supplied-projective-resolution-datum` · definition — Supplied projective resolution data
- `def-supplied-injective-resolution-datum` · definition — Supplied injective resolution data
- `def-left-derived-object-relative-to-projective-resolution-data` · definition — Left derived objects relative to supplied projective resolution data
- `def-right-derived-object-relative-to-injective-resolution-data` · definition — Right derived objects relative to supplied injective resolution data
- `prop-negative-derived-degrees-vanish-for-one-sided-resolutions` · proposition — Negative derived degrees vanish for one-sided resolutions
- `lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions` · lemma — A morphism has a comparison lift between the supplied projective resolutions
- `lem-the-induced-homology-map-is-independent-of-the-comparison-lift` · lemma — The induced homology map is independent of the chosen comparison lift
- `def-left-derived-map-relative-to-resolution-data` · definition — The left derived map relative to supplied resolution data
- `prop-left-derived-maps-preserve-identities` · proposition — Left derived maps preserve identities
- `prop-left-derived-maps-preserve-composition` · proposition — Left derived maps preserve composition
- `thm-left-derived-functors-relative-to-supplied-data-are-additive-functors` · theorem — Left derived functors relative to supplied data are additive functors
- `lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions` · lemma — A morphism has a comparison extension between the supplied injective resolutions
- `lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension` · lemma — The induced cohomology map is independent of the chosen injective comparison extension
- `def-right-derived-map-relative-to-resolution-data` · definition — The right derived map relative to supplied resolution data
- `thm-right-derived-functors-relative-to-supplied-data-are-additive-functors` · theorem — Right derived functors relative to supplied data are additive functors
- `prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors` · proposition — A natural transformation induces natural transformations of left derived functors
- `prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors` · proposition — A natural transformation induces natural transformations of right derived functors
- `lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects` · lemma — Objectwise comparison of two projective resolution data induces an isomorphism on derived objects
- `lem-the-change-of-projective-resolution-isomorphisms-are-natural` · lemma — The change-of-projective-resolution isomorphisms are natural
- `thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic` · theorem — Two supplied projective resolution data define naturally isomorphic left derived functors
- `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` · proposition — Change-of-projective-resolution isomorphisms satisfy identity and cocycle laws
- `thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic` · theorem — Two supplied injective resolution data define naturally isomorphic right derived functors
- `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` · proposition — Change-of-injective-resolution isomorphisms satisfy identity and cocycle laws
- `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data` · remark — Derived functors are well defined relative to supplied resolution data
- `thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor` · theorem — The zero-th left derived functor of a right exact functor recovers the functor
- `thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor` · theorem — The zero-th right derived functor of a left exact functor recovers the functor
- `prop-positive-left-derived-functors-vanish-on-projective-objects` · proposition — Positive left derived functors vanish on projective objects
- `prop-positive-right-derived-functors-vanish-on-injective-objects` · proposition — Positive right derived functors vanish on injective objects
- `def-acyclic-object-for-a-left-exact-functor` · definition — An acyclic object for a left exact functor
- `def-acyclic-object-for-a-right-exact-functor` · definition — An acyclic object for a right exact functor
- `def-f-acyclic-resolution` · definition — An F-acyclic resolution
- `thm-acyclic-resolution-theorem-for-right-derived-functors` · theorem — The acyclic-resolution theorem for right derived functors
- `thm-acyclic-resolution-theorem-for-left-derived-functors` · theorem — The acyclic-resolution theorem for left derived functors
- `cor-adapted-classes-compute-derived-functors` · corollary — Adapted classes compute derived functors
- `prop-an-exact-functor-has-vanishing-positive-derived-functors` · proposition — An exact functor has vanishing positive derived functors
- `prop-derived-functors-commute-with-finite-biproducts` · proposition — Derived functors commute with finite biproducts
- `prop-contravariant-derived-functors-are-derived-on-the-opposite-category` · proposition — Contravariant derived functors are derived on the opposite category
- `prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied` · proposition — A bifunctor can be derived in either variable when the relevant resolution data are supplied
- `def-balanced-derived-bifunctor` · definition — A balanced derived bifunctor
- `fs-enough-projectives-implies-a-canonical-resolution-for-every-object` · false-statement — FALSE: enough projectives imply a canonical resolution for every object
- `fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift` · false-statement — FALSE: the definition of a derived map may depend on the chosen comparison lift
- `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself` · false-statement — FALSE: every additive functor has L_0 naturally isomorphic to itself
- `fs-derived-functors-in-two-variables-are-automatically-balanced` · false-statement — FALSE: derived functors in two variables are automatically balanced
- `fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution` · false-statement — FALSE: an acyclic resolution is the same thing as an injective resolution

### `derived-functors-examples` — Derived Functors — Examples (7 item(s))

- `ex-the-left-derived-functors-of-an-exact-functor` · example — The left derived functors of an exact functor
- `ex-the-right-derived-functors-of-hom-from-a-fixed-object` · example — The right derived functors of Hom from a fixed object
- `ex-two-resolution-data-and-their-change-isomorphism` · example — Two resolution data and their change isomorphism
- `ex-independence-of-two-comparison-lifts-on-homology` · example — Independence of two comparison lifts on homology
- `ex-an-acyclic-resolution-that-is-not-an-injective-resolution` · example — An acyclic resolution that is not an injective resolution
- `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor` · counterexample — L_0 of a non-right-exact functor need not recover the functor
- `ex-a-contravariant-functor-derived-via-the-opposite-category` · example — A contravariant functor derived via the opposite category

### `simplicial-complexes-and-simplicial-homology` — Simplicial Complexes and Simplicial Homology (30 item(s))

- `def-abstract-simplicial-complex` · definition — An abstract simplicial complex
- `def-simplicial-subcomplex-star-closure-and-link` · definition — Subcomplexes, closures, stars, and links in a simplicial complex
- `def-locally-finite-and-finite-dimensional-simplicial-complex` · definition — Local finiteness, finiteness, and finite dimensionality of a simplicial complex
- `def-geometric-simplex-spanned-by-affinely-independent-vertices` · definition — The geometric simplex spanned by affinely independent vertices
- `lem-barycentric-coordinates-are-unique` · lemma — Barycentric coordinates are unique
- `def-geometric-realization-of-an-abstract-simplicial-complex` · definition — The geometric realization of an abstract simplicial complex
- `lem-geometric-simplices-intersect-in-the-realization-of-their-common-face` · lemma — Geometric simplices intersect in the realization of their common face
- `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization` · proposition — A finite simplicial complex has a compact Hausdorff realization
- `def-simplicial-map-and-its-geometric-realization` · definition — A simplicial map and its geometric realization
- `lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial` · lemma — The realization of a simplicial map is continuous and functorial
- `def-orientation-of-a-simplex` · definition — An orientation of a simplex
- `lem-an-odd-permutation-reverses-oriented-simplex-sign` · lemma — An odd permutation reverses the sign of an oriented simplex
- `def-simplicial-chain-groups-and-boundary` · definition — Simplicial chain groups and the boundary operator
- `lem-simplicial-boundary-is-independent-of-oriented-representative` · lemma — The simplicial boundary is independent of the chosen oriented representative
- `thm-the-simplicial-boundary-squares-to-zero` · theorem — The simplicial boundary squares to zero
- `def-simplicial-cycles-boundaries-and-homology` · definition — Simplicial cycles, boundaries, and homology
- `def-augmentation-and-reduced-simplicial-homology` · definition — Augmentation and reduced simplicial homology
- `lem-the-simplicial-augmentation-is-a-chain-map` · lemma — The simplicial augmentation is a chain map
- `def-induced-simplicial-chain-map` · definition — The induced chain map of a simplicial map
- `lem-induced-simplicial-chain-maps-commute-with-boundaries` · lemma — Induced simplicial chain maps commute with boundaries
- `prop-simplicial-homology-is-functorial` · proposition — Simplicial homology is functorial
- `def-contiguous-simplicial-maps` · definition — Contiguous simplicial maps
- `lem-contiguous-simplicial-maps-have-homotopic-realizations` · lemma — Contiguous simplicial maps have homotopic realizations
- `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology` · theorem — Contiguous simplicial maps induce the same map on simplicial homology
- `lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible` · lemma — The augmented simplicial chain complex of a simplex is contractible
- `cor-the-simplex-has-zero-reduced-simplicial-homology` · corollary — A simplex has zero reduced simplicial homology
- `prop-zero-th-simplicial-homology-is-free-on-connected-components` · proposition — Zero-th simplicial homology is free on connected components
- `prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum` · proposition — Simplicial homology of a disjoint union is the direct sum
- `def-simplicial-euler-characteristic` · definition — The simplicial Euler characteristic
- `thm-euler-poincare-formula-for-a-finite-simplicial-complex` · theorem — The Euler-Poincare formula for a finite simplicial complex

### `simplicial-complexes-and-simplicial-homology-examples` — Simplicial Complexes and Simplicial Homology — Examples (9 item(s))

- `ex-simplicial-homology-of-a-point-and-an-edge` · example — The simplicial homology of a point and an edge
- `ex-boundary-of-a-triangle-has-first-homology-z` · example — The boundary of a triangle has first homology Z
- `ex-simplicial-homology-of-the-tetrahedron-boundary` · example — The simplicial homology of the tetrahedron boundary
- `ex-a-contractible-simplicial-cone` · example — A contractible simplicial cone
- `ex-two-contiguous-maps-of-a-subdivided-interval` · example — Two contiguous maps of a subdivided interval
- `ex-a-finite-complex-with-euler-characteristic-zero` · example — A finite complex with Euler characteristic zero
- `cex-a-vertex-map-need-not-be-simplicial` · counterexample — A vertex map need not be simplicial
- `cex-finite-dimensional-does-not-imply-finite-or-locally-finite` · counterexample — Finite dimensional does not imply finite or locally finite
- `ex-a-delta-complex-structure-on-the-torus` · example — A delta-complex structure on the torus

### `morse-critical-points-hessians-and-indices` — Morse Critical Points Hessians and Indices (18 item(s))

- `def-critical-point-and-critical-value-of-a-smooth-function` · definition — Critical points and critical values of a smooth function
- `def-hessian-of-a-function-at-a-critical-point` · definition — The intrinsic Hessian of a smooth function at a critical point
- `lem-coordinate-change-congruence-for-the-critical-hessian` · lemma — Critical-point Hessian matrices transform by congruence under chart changes
- `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian` · definition — Riemannian metrics, symmetric cotangent-bundle connections, and covariant Hessians
- `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle` · theorem — A Riemannian metric has a unique Levi-Civita connection on the cotangent bundle
- `lem-critical-hessian-agrees-with-the-levi-civita-hessian` · lemma — At a critical point, the intrinsic Hessian agrees with the Levi-Civita Hessian
- `def-nondegenerate-critical-point-nullity-index-and-coindex` · definition — Nondegenerate critical points, nullity, index, and coindex
- `lem-sylvester-inertia-makes-morse-index-intrinsic` · lemma — Sylvester inertia makes the Morse index intrinsic
- `def-morse-function-and-excellent-morse-function` · definition — Morse functions and excellent Morse functions
- `lem-nondegenerate-critical-points-are-isolated` · lemma — Nondegenerate critical points are isolated
- `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points` · corollary — A Morse function on a compact manifold has finitely many critical points
- `lem-one-variable-completion-of-the-square-with-a-smooth-parameter` · lemma — A nonzero second derivative splits off a signed square with a smooth parameter
- `lem-morse-splitting-induction-preserves-the-residual-hessian` · lemma — Splitting one Morse coordinate preserves the residual Hessian
- `thm-morse-lemma` · theorem — Morse lemma
- `cor-local-extrema-and-saddles-from-the-morse-index` · corollary — The Morse index detects local extrema and saddles
- `cor-index-and-coindex-swap-under-negation` · corollary — Index and coindex swap under negation
- `cor-local-level-set-cone-at-a-morse-critical-point` · corollary — The critical level is a quadratic cone in Morse coordinates
- `rem-zero-dimensional-morse-convention` · remark — The zero-dimensional Morse convention

### `morse-critical-points-hessians-and-indices-examples` — Morse Critical Points Hessians and Indices — Examples (6 item(s))

- `ex-height-on-the-sphere-is-a-perfect-morse-function` · example — The height function on the sphere is a perfect Morse function
- `ex-standard-quadratic-form-of-each-morse-index` · example — The standard quadratic form realizes every Morse index
- `ex-height-on-a-torus-with-four-critical-points` · example — A standard torus height function has four critical points
- `cex-a-degenerate-isolated-critical-point` · counterexample — An isolated critical point can be degenerate
- `cex-a-degenerate-nonisolated-critical-set` · counterexample — A degenerate critical set can be nonisolated
- `ex-the-empty-and-zero-dimensional-morse-cases` · example — The empty and zero-dimensional Morse cases

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
`research/frontier-29-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-29`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
