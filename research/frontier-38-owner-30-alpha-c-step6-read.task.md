# Step 6 Alpha group reader — read-only digest — group **c**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **12**, **13**, **14**: 3 A/B pair(s), 6 page(s), 71 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

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

---

# Step 6 Alpha group reader — read-only digest, `frontier-38-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
