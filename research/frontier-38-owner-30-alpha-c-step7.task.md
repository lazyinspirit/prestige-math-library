# Step 7 adjudication — group **c**, run `frontier-38-owner-30`

You are the group Alpha for batches **12**, **13**, **14**: 3 A/B pair(s), 6 page(s), 71 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-38-owner-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 12 | `oriented-and-mod-two-intersection-numbers` | A | differential-topology | 529 | `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `manifolds-with-boundary-collars-and-orientations`, `integration-of-forms-and-the-general-stokes-theorem`, `the-de-rham-theorem-and-degree`, `orientations-poincare-lefschetz-and-alexander-duality`, `riemannian-metrics-length-distance-and-volume` |
| 12 | `oriented-and-mod-two-intersection-numbers-examples` | B | differential-topology | 530 | `oriented-and-mod-two-intersection-numbers`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `geodesics-the-exponential-map-completeness-and-hopf-rinow` |
| 13 | `smooth-cobordism-relations-groups-and-rings` | A | differential-topology | 545 | `manifolds-with-boundary-collars-and-orientations`, `orientations-poincare-lefschetz-and-alexander-duality`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `chern-weil-theory-and-characteristic-forms`, `rees-modules-artin-rees-and-hilbert-samuel-theory` |
| 13 | `smooth-cobordism-relations-groups-and-rings-examples` | B | differential-topology | 546 | `smooth-cobordism-relations-groups-and-rings` |
| 14 | `thom-spaces-normal-data-and-collapse-maps` | A | differential-topology | 547 | `smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `manifolds-with-boundary-collars-and-orientations`, `orientations-poincare-lefschetz-and-alexander-duality`, `topological-vector-bundles-and-grassmannian-classification`, `leray-hirsch-thom-isomorphism-and-gysin-sequences`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `riemann-curvature-and-riemannian-submanifolds`, `geodesics-the-exponential-map-completeness-and-hopf-rinow` |
| 14 | `thom-spaces-normal-data-and-collapse-maps-examples` | B | differential-topology | 548 | `thom-spaces-normal-data-and-collapse-maps` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `oriented-and-mod-two-intersection-numbers` — Oriented and Mod Two Intersection Numbers (20 item(s))

- `def-transverse-complementary-dimensional-intersection-set` · definition — Transverse complementary-dimensional intersection sets
- `lem-compact-transverse-complementary-intersections-are-finite` · lemma — Compact transverse complementary intersections are finite
- `def-mod-two-intersection-number` · definition — The mod 2 intersection number
- `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold` · lemma — Overlap structure of arc-length parametrizations of a 1-manifold
- `lem-boundary-of-a-compact-one-manifold-has-even-cardinality` · lemma — Boundary of a compact 1-manifold has even cardinality
- `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count` · lemma — Oriented boundary counts of a compact oriented 1-manifold cancel
- `thm-transverse-preimage-for-manifolds-with-boundary` · theorem — Transverse preimages for maps from manifolds with boundary
- `thm-mod-two-intersection-number-is-homotopy-invariant` · theorem — The mod 2 intersection number is homotopy invariant
- `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign` · lemma — Swapping direct summands scales oriented bases by a sign
- `def-local-oriented-intersection-sign` · definition — The local oriented intersection sign
- `def-oriented-intersection-number` · definition — The oriented intersection number
- `lem-preimage-orientation-agrees-with-the-local-intersection-sign` · lemma — Preimage orientation agrees with the local intersection sign
- `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs` · lemma — Oriented boundary of an intersection trace has opposite end signs
- `thm-oriented-intersection-number-is-homotopy-invariant` · theorem — The oriented intersection number is homotopy invariant
- `cor-oriented-intersection-reduces-to-mod-two-intersection` · corollary — The oriented intersection number reduces to the mod 2 number
- `thm-intersection-number-under-factor-interchange` · theorem — Intersection number under factor interchange
- `prop-two-map-intersection-as-a-diagonal-preimage` · proposition — Two-map intersection as a diagonal preimage
- `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary` · corollary — A cycle has zero algebraic intersection with a bounding cycle
- `cor-negative-expected-dimension-generic-intersections-are-empty` · corollary — Negative expected dimension forces empty generic intersections
- `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact` · remark — Properness can replace compactness only when the intersection trace is compact

### `oriented-and-mod-two-intersection-numbers-examples` — Oriented and Mod Two Intersection Numbers — Examples (5 item(s))

- `ex-latitude-and-meridian-intersections-on-the-torus` · example — Latitude and meridian intersections on the torus
- `ex-two-projective-lines-have-one-mod-two-intersection` · example — Two projective lines have one mod 2 intersection
- `ex-degree-as-intersection-with-a-regular-value` · example — Degree as an intersection with a regular value
- `cex-geometric-cardinality-is-not-homotopy-invariant` · counterexample — Geometric cardinality is not homotopy invariant
- `cex-noncompact-intersections-can-escape-during-a-homotopy` · counterexample — Noncompact intersections can escape during a homotopy

### `smooth-cobordism-relations-groups-and-rings` — Smooth Cobordism Relations Groups and Rings (19 item(s))

- `def-unoriented-smooth-cobordism-of-closed-manifolds` · definition — Unoriented smooth cobordism of closed manifolds
- `def-oriented-smooth-cobordism` · definition — Oriented smooth cobordism
- `lem-cylinders-give-reflexivity-of-cobordism` · lemma — Cylinders give reflexivity of cobordism
- `lem-reversing-a-cobordism-gives-symmetry` · lemma — Reversing a cobordism gives symmetry
- `lem-collar-gluing-and-corner-smoothing-give-transitivity` · lemma — Collar gluing and seam smoothing give transitivity
- `thm-smooth-cobordism-is-an-equivalence-relation` · theorem — Smooth cobordism is an equivalence relation
- `def-null-cobordant-closed-manifold` · definition — Null-cobordant closed manifolds
- `def-unoriented-and-oriented-bordism-groups` · definition — Unoriented and oriented bordism groups
- `thm-disjoint-union-makes-bordism-classes-abelian-groups` · theorem — Disjoint union makes bordism classes abelian groups
- `lem-fundamental-class-of-a-boundary-pushes-forward-to-zero` · lemma — The fundamental class of a boundary pushes forward to zero
- `prop-zero-dimensional-bordism-groups` · proposition — Zero-dimensional bordism groups
- `lem-product-boundary-formula-for-oriented-manifolds` · lemma — Product boundary formula for oriented manifolds
- `thm-cartesian-product-makes-bordism-a-graded-ring` · theorem — Cartesian product makes bordism a graded ring
- `def-stiefel-whitney-number-of-a-closed-manifold` · definition — Stiefel-Whitney numbers of a closed manifold
- `def-pontryagin-number-of-a-closed-oriented-manifold` · definition — Pontryagin numbers of a closed oriented manifold
- `lem-boundary-stable-tangent-splits-off-a-trivial-line` · lemma — The boundary stable tangent bundle splits off a trivial line
- `prop-boundaries-have-zero-stiefel-whitney-numbers` · proposition — Boundaries have zero Stiefel-Whitney numbers
- `prop-oriented-boundaries-have-zero-pontryagin-numbers` · proposition — Oriented boundaries have zero Pontryagin numbers
- `rem-bordism-groups-here-are-geometric-not-generalized-homology-constructions` · remark — Bordism groups here are geometric, not generalized homology constructions

### `smooth-cobordism-relations-groups-and-rings-examples` — Smooth Cobordism Relations Groups and Rings — Examples (5 item(s))

- `ex-a-circle-is-the-boundary-of-a-disk` · example — A circle is the boundary of a disk
- `ex-two-unoriented-points-bound-an-interval` · example — Two unoriented points bound an interval
- `ex-signed-points-give-the-oriented-zero-bordism-invariant` · example — Signed points give the oriented zero-bordism invariant
- `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles` · example — The pair of pants is a cobordism realizing addition of circles
- `cex-real-projective-two-space-is-not-unoriented-null-cobordant` · counterexample — The real projective plane is not unoriented null-cobordant

### `thom-spaces-normal-data-and-collapse-maps` — Thom Spaces Normal Data and Collapse Maps (17 item(s))

- `def-disk-bundle-sphere-bundle-and-thom-space` · definition — Disk bundle, sphere bundle, and Thom space: the differential topology interface
- `lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism` · lemma — Metric independence of the Thom space
- `prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product` · proposition — Trivial Thom spaces as suspension smash products
- `rem-thom-space-empty-and-rank-zero-conventions` · remark — Empty-base and rank-zero Thom conventions
- `def-stable-normal-bundle-of-a-compact-smooth-manifold` · definition — Stable normal bundle of a compact smooth manifold
- `thm-stable-normal-bundle-is-independent-of-the-embedding` · theorem — Stable normal bundle is independent of the embedding
- `lem-tubular-charts-realize-a-prescribed-normal-identification` · lemma — Compatible tubular charts realize a prescribed normal identification
- `def-pontryagin-thom-collapse-of-an-embedded-submanifold` · definition — Pontryagin–Thom collapse with specified normal data
- `lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint` · lemma — Continuity and smooth local representatives of collapse
- `lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy` · lemma — Collapse homotopy for a fixed normal identification
- `prop-transverse-preimage-carries-a-pulled-back-normal-structure` · proposition — Transverse preimages carry the pulled-back normal structure
- `lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms` · lemma — Transverse based homotopies give normal cobordisms
- `lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology` · lemma — The Thom quotient identifies relative and reduced cohomology
- `def-thom-class-and-thom-isomorphism-interface` · definition — Thom class and Thom isomorphism: the AT interface
- `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual` · proposition — Collapse pulls the Thom class back to the Poincaré dual
- `lem-stabilizing-a-normal-bundle-suspends-its-thom-space` · lemma — Adding a trivial normal line suspends the Thom space
- `rem-thom-spectrum-construction-is-not-minted-in-dt` · remark — Finite Thom spaces and the spectrum interface

### `thom-spaces-normal-data-and-collapse-maps-examples` — Thom Spaces Normal Data and Collapse Maps — Examples (5 item(s))

- `ex-thom-space-of-a-trivial-line-bundle` · example — Thom space of a trivial line bundle
- `ex-thom-space-of-the-mobius-line-bundle` · example — Möbius line Thom space as a projective-plane quotient
- `ex-collapse-map-of-an-equatorial-sphere` · example — Explicit normal-framed collapse of an equatorial sphere
- `ex-zero-section-pulls-back-the-thom-class-to-the-euler-class` · example — Zero-section pullback is the Euler class
- `cex-different-unstabilized-normal-bundles-can-have-nonisomorphic-thom-data` · counterexample — Embedding-dependent unstable normal Thom data

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-38-owner-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-38-owner-30`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
