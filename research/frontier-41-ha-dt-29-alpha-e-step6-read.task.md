# Step 6 Alpha group reader — read-only digest — group **e**, run `frontier-41-ha-dt-29`

- You are the read-only Step 6 Alpha group reader for batches **5**, **6**, **8**: 3 A/B pair(s), 6 page(s), 87 item(s).

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
| 5 | `morse-trajectory-moduli-spaces-and-the-morse-differential` | A | differential-topology | 537 | `gradient-like-vector-fields-and-morse-trajectories`, `stable-unstable-manifolds-and-morse-smale-transversality`, `connections-levi-civita-and-parallel-transport`, `manifolds-with-boundary-collars-and-orientations`, `ascoli-arzela`, `oriented-and-mod-two-intersection-numbers` |
| 5 | `morse-trajectory-moduli-spaces-and-the-morse-differential-examples` | B | differential-topology | 538 | `morse-trajectory-moduli-spaces-and-the-morse-differential` |
| 6 | `morse-homology-continuation-and-comparison` | A | differential-topology | 539 | `morse-trajectory-moduli-spaces-and-the-morse-differential`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `sard-theorem-and-transversality`, `singular-chains-and-singular-homology`, `relative-homology-excision-and-mayer-vietoris`, `cw-complexes-and-cellular-homology`, `handle-decompositions-duality-and-rearrangement`, `local-coefficients-twisted-homology-and-duality`, `banach-space-differential-calculus-and-banach-manifolds`, `completeness-and-uniform-continuity`, `stable-unstable-manifolds-and-morse-smale-transversality`, `inverse-and-implicit-function-theorems`, `manifolds-with-boundary-collars-and-orientations`, `relations-functions-and-quotients`, `oriented-and-mod-two-intersection-numbers`, `chain-complexes-and-homology`, `morse-critical-points-hessians-and-indices`, `smooth-partitions-of-unity-and-exhaustions` |
| 6 | `morse-homology-continuation-and-comparison-examples` | B | differential-topology | 540 | `morse-homology-continuation-and-comparison` |
| 8 | `fixed-point-index-and-the-lefschetz-theorem` | A | differential-topology | 543 | `oriented-and-mod-two-intersection-numbers`, `intersection-pairings-self-intersection-and-euler-classes`, `vector-field-index-euler-characteristic-and-poincare-hopf`, `sard-theorem-and-transversality`, `the-de-rham-theorem-and-degree`, `singular-chains-and-singular-homology`, `singular-cohomology-and-coefficient-theorems`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `local-coefficients-twisted-homology-and-duality`, `lie-subgroups-actions-and-homogeneous-spaces` |
| 8 | `fixed-point-index-and-the-lefschetz-theorem-examples` | B | differential-topology | 544 | `fixed-point-index-and-the-lefschetz-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `morse-trajectory-moduli-spaces-and-the-morse-differential` — Morse Trajectory Moduli Spaces and the Morse Differential (18 item(s))

- `def-mod-two-morse-chain-group` · definition — The mod-two Morse chain group
- `def-broken-morse-trajectory` · definition — Broken Morse trajectories
- `def-geometric-convergence-to-a-broken-morse-trajectory` · definition — Geometric convergence to a broken trajectory
- `lem-broken-trajectories-are-limits-of-ordinary-trajectories` · lemma — Every broken trajectory is a limit of ordinary trajectories
- `thm-morse-trajectory-compactness-up-to-breaking` · theorem — Compactness up to breaking of Morse trajectory spaces
- `lem-breaking-length-is-bounded-by-index-drop` · lemma — Breaking length is bounded by the index drop
- `cor-index-one-trajectory-moduli-spaces-are-finite` · corollary — Index-one trajectory moduli spaces are finite
- `def-mod-two-morse-differential` · definition — The mod-two Morse differential
- `lem-gluing-broken-index-two-trajectories-gives-collar-ends` · lemma — Gluing once-broken index-two trajectories: collar ends
- `thm-index-two-compactification-is-a-compact-one-manifold-with-boundary` · theorem — The index-two compactification is a compact one-manifold with boundary
- `thm-mod-two-morse-differential-squares-to-zero` · theorem — The mod-two Morse differential squares to zero
- `def-orientation-line-of-a-morse-critical-point` · definition — The orientation line of a Morse critical point
- `lem-unstable-orientations-induce-trajectory-moduli-orientations` · lemma — Unstable orientations induce orientations of the trajectory moduli spaces
- `def-signed-morse-differential-over-the-integers` · definition — The signed Morse differential over the integers
- `lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli` · lemma — Boundary orientation of the compactified one-dimensional Morse moduli space
- `thm-integral-morse-differential-squares-to-zero` · theorem — The integral Morse differential squares to zero
- `rem-morse-homology-over-the-integers-does-not-require-orientability-of-m` · remark — Integral Morse homology does not require orientability of the manifold
- `rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package` · remark — Compactness up to breaking needs closedness or a proper compactness package

### `morse-trajectory-moduli-spaces-and-the-morse-differential-examples` — Morse Trajectory Moduli Spaces and the Morse Differential — Examples (5 item(s))

- `ex-morse-complex-of-the-circle` · example — The Morse complex of the circle
- `ex-morse-complex-of-the-two-sphere` · example — The Morse complex of the two-sphere
- `ex-broken-trajectories-in-an-index-two-torus-moduli-space` · example — Broken trajectories in an index-two torus moduli space
- `ex-changing-an-unstable-orientation-changes-two-basis-signs` · example — Changing an unstable orientation changes two sets of basis signs
- `cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero` · counterexample — A naive signed count without the quotient orientation can fail to square to zero

### `morse-homology-continuation-and-comparison` — Morse Homology Continuation and Comparison (27 item(s))

- `def-regular-continuation-datum-between-morse-smale-pairs` · definition — A regular continuation datum between Morse--Smale pairs
- `lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds` · lemma — Mixed boundary hyperbolic passage has uniform endpoint derivative bounds
- `lem-continuation-solutions-have-critical-limits` · lemma — Continuation solutions have critical limits and exponential decay
- `def-two-parameter-continuation-homotopy` · definition — A regular two-parameter continuation datum
- `lem-continuation-energy-identity` · lemma — The continuation energy identity
- `def-broken-continuation-trajectory` · definition — Broken continuation trajectories and geometric convergence
- `lem-metric-end-flow-matching-gives-local-broken-charts` · lemma — Finite flow matching gives local charts at metric-end broken trajectories
- `thm-continuation-trajectories-are-compact-up-to-breaking` · theorem — Continuation trajectories are compact up to breaking
- `lem-gluing-continuation-solutions-gives-collar-ends` · lemma — Gluing continuation solutions gives collar neighbourhoods of the broken ends
- `lem-orientation-lines-orient-continuation-moduli-spaces` · lemma — Orientation lines orient the continuation moduli spaces compatibly with gluing
- `lem-metric-morse-smale-end-counts-form-chain-complexes` · lemma — Arbitrary metric Morse--Smale end counts form finite Morse chain complexes
- `lem-metric-critical-crossing-preserves-pointed-disk-pairs` · lemma — A metric-gradient critical crossing preserves the pointed disk pair
- `def-morse-homology-of-a-morse-smale-pair` · definition — Morse homology of a Morse--Smale pair
- `def-continuation-chain-map` · definition — The continuation chain map
- `lem-compactified-unstable-manifolds-give-a-cw-decomposition` · lemma — Compactified unstable manifolds give the Morse--Smale CW decomposition
- `thm-continuation-count-is-a-chain-map` · theorem — The continuation count is a chain map
- `lem-continuation-map-of-constant-data-is-the-identity` · lemma — The continuation map of constant data is the identity
- `lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count` · lemma — Cellular boundary coefficients are the signed trajectory counts
- `thm-homotopic-continuation-data-give-chain-homotopic-maps` · theorem — Homotopic continuation data give chain homotopic maps
- `prop-relative-morse-complex-for-an-adapted-cobordism` · proposition — The relative Morse complex of an adapted cobordism
- `thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex` · theorem — The Morse complex is chain isomorphic to the handle cellular complex
- `thm-continuation-composition-law-on-homology` · theorem — Composition of continuation maps on homology
- `thm-reverse-continuation-is-an-inverse-on-morse-homology` · theorem — Reverse continuation is an inverse on Morse homology
- `def-canonical-morse-homology-of-a-closed-manifold` · definition — Canonical Morse homology of a closed manifold
- `thm-morse-homology-is-naturally-isomorphic-to-singular-homology` · theorem — Morse homology is naturally isomorphic to singular homology
- `rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control` · remark — Noncompact Morse homology needs properness, completeness and compactness control
- `cor-morse-homology-recovers-the-morse-inequalities` · corollary — Morse homology recovers the Morse inequalities

### `morse-homology-continuation-and-comparison-examples` — Morse Homology Continuation and Comparison — Examples (5 item(s))

- `ex-continuation-across-a-birth-death-adds-an-acyclic-pair` · example — Continuation across a birth--death pair adds an acyclic summand
- `ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology` · example — Two Morse functions on the circle have isomorphic Morse homology
- `ex-relative-morse-homology-of-a-single-handle-cobordism` · example — Relative Morse homology of a single-handle cobordism
- `ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation` · example — Morse and cellular boundaries for a surface handle presentation
- `cex-a-nonproper-noncompact-morse-function-can-lose-continuation-trajectories-at-infinity` · counterexample — A noncompact continuation datum can lose its trajectories at infinity

### `fixed-point-index-and-the-lefschetz-theorem` — Fixed Point Index and the Lefschetz Theorem (27 item(s))

- `lem-a-closed-discrete-subset-of-a-compact-space-is-finite` · lemma — A closed discrete subset of a compact space is finite
- `lem-fixed-points-are-graph-diagonal-intersections` · lemma — Fixed points are exactly the intersections of the graph with the diagonal
- `def-nondegenerate-fixed-point` · definition — Nondegenerate fixed point
- `lem-graph-transversality-is-fixed-point-nondegeneracy` · lemma — Graph-diagonal transversality is exactly fixed-point nondegeneracy
- `def-local-fixed-point-index` · definition — Isolated fixed point and local fixed point index
- `lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation` · lemma — The local fixed point index is invariant under conjugation by a local diffeomorphism
- `lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent` · lemma — The local fixed point index is independent of chart, ball and neighbourhood
- `thm-index-of-a-nondegenerate-fixed-point` · theorem — The index of a nondegenerate fixed point is the sign of det(I-Df)
- `lem-local-fixed-point-index-splits-under-perturbation` · lemma — An isolated fixed point splits under perturbation, preserving its index
- `def-global-geometric-lefschetz-number` · definition — Geometric Lefschetz number (index sum)
- `def-algebraic-lefschetz-number` · definition — Algebraic Lefschetz number via rational homology traces
- `lem-the-local-intersection-sign-of-the-graph-and-diagonal` · lemma — The local intersection sign of graph against diagonal is det(I-Df)
- `lem-diagonal-class-expansion-gives-the-alternating-trace` · lemma — The diagonal and graph classes contract to the alternating trace
- `lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points` · lemma — Lefschetz-Hopf index formula for nondegenerate fixed points (orientable case)
- `lem-the-orientable-double-cover-of-a-smooth-manifold` · lemma — The orientation double cover of a smooth manifold is closed, orientable and canonical
- `lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover` · lemma — A smooth self-map lifts canonically to the orientation double cover
- `lem-fixed-point-sum-of-the-two-lifts-of-a-self-map` · lemma — The two lifts of a self-map carry twice the fixed point index sum
- `lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number` · lemma — The Lefschetz numbers of the two lifts sum to twice the base Lefschetz number
- `thm-lefschetz-hopf-index-formula` · theorem — Lefschetz-Hopf index formula
- `cor-lefschetz-number-is-homotopy-invariant` · corollary — The Lefschetz number is a homotopy invariant
- `thm-lefschetz-fixed-point-theorem` · theorem — Lefschetz fixed point theorem
- `cor-lefschetz-number-of-the-identity-is-the-euler-characteristic` · corollary — The Lefschetz number of the identity is the Euler characteristic
- `prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices` · proposition — Small-time flow fixed point indices and vector field zero indices
- `rem-isolated-does-not-imply-nondegenerate` · remark — Isolated fixed points need not be nondegenerate
- `rem-lefschetz-index-formula-recovers-poincare-hopf` · remark — The Lefschetz index formula recovers Poincare-Hopf
- `lem-orientation-coefficients-as-deck-eigenspaces-and-product-pairings` · lemma — Orientation coefficients are deck eigenspaces, with product and duality pairings
- `lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace` · lemma — The orientation-twisted diagonal realizes the Lefschetz trace

### `fixed-point-index-and-the-lefschetz-theorem-examples` — Fixed Point Index and the Lefschetz Theorem — Examples (5 item(s))

- `ex-rotations-of-the-two-sphere-and-their-lefschetz-number` · example — Rotations of the two-sphere and their Lefschetz number
- `ex-degree-d-map-on-a-sphere-has-lefschetz-number-one-plus-minus-d` · example — Degree-d self-maps of a sphere have Lefschetz number 1+(-1)^n d
- `ex-a-torus-translation-has-zero-lefschetz-number-and-no-fixed-points` · example — A torus translation has zero Lefschetz number and no fixed points
- `ex-a-degenerate-isolated-fixed-point-with-nonzero-local-index` · example — A degenerate isolated fixed point with nonzero local index
- `cex-vanishing-lefschetz-number-allows-fixed-points` · counterexample — A vanishing Lefschetz number with canceling fixed points

## Your seams

Your pages depend on another group's:

- `morse-homology-continuation-and-comparison` requires `handle-decompositions-duality-and-rearrangement` (group f, batch 1)
- `fixed-point-index-and-the-lefschetz-theorem` requires `intersection-pairings-self-intersection-and-euler-classes` (group d, batch 2)
- `fixed-point-index-and-the-lefschetz-theorem` requires `vector-field-index-euler-characteristic-and-poincare-hopf` (group h, batch 7)

Another group's pages depend on yours:

- `reeb-stability-and-global-foliation-constructions` (group c) requires your `fixed-point-index-and-the-lefschetz-theorem`
- `whitehead-torsion-and-the-s-cobordism-theorem-examples` (group i) requires your `fixed-point-index-and-the-lefschetz-theorem`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-41-ha-dt-29`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
