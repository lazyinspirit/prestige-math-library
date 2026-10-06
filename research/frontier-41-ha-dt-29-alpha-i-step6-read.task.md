# Step 6 Alpha group reader — read-only digest — group **i**, run `frontier-41-ha-dt-29`

- You are the read-only Step 6 Alpha group reader for batches **9**, **16**, **21**: 3 A/B pair(s), 6 page(s), 80 item(s).

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
| 9 | `pontryagin-thom-and-framed-cobordism` | A | differential-topology | 549 | `smooth-cobordism-relations-groups-and-rings`, `thom-spaces-normal-data-and-collapse-maps`, `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `higher-homotopy-groups-and-cofiber-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `spectra-and-stable-homotopy-groups`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 9 | `pontryagin-thom-and-framed-cobordism-examples` | B | differential-topology | 550 | `pontryagin-thom-and-framed-cobordism` |
| 16 | `whitehead-torsion-and-the-s-cobordism-theorem` | A | differential-topology | 563 | `the-smooth-h-cobordism-theorem`, `simple-homotopy-whitehead-groups-and-torsion`, `local-coefficients-twisted-homology-and-duality` |
| 16 | `whitehead-torsion-and-the-s-cobordism-theorem-examples` | B | differential-topology | 564 | `whitehead-torsion-and-the-s-cobordism-theorem`, `fixed-point-index-and-the-lefschetz-theorem` |
| 21 | `foliation-holonomy-and-the-holonomy-groupoid` | A | differential-topology | 573 | `distributions-integral-manifolds-and-the-frobenius-theorem`, `sard-theorem-and-transversality`, `vector-fields-flows-and-lie-derivatives`, `subspaces-products-and-quotients`, `covering-spaces-and-lifting`, `the-fundamental-group` |
| 21 | `foliation-holonomy-and-the-holonomy-groupoid-examples` | B | differential-topology | 574 | `foliation-holonomy-and-the-holonomy-groupoid` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `pontryagin-thom-and-framed-cobordism` — Pontryagin Thom and Framed Cobordism (20 item(s))

- `def-framing-of-a-normal-bundle` · definition — Framings of a normal bundle
- `def-framed-cobordism-of-embedded-submanifolds` · definition — Framed cobordism of framed submanifolds
- `lem-framed-cobordism-is-an-equivalence-relation` · lemma — Framed cobordism is an equivalence relation
- `prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product` · proposition — A framing identifies the Thom target with a sphere smash product
- `def-pontryagin-thom-map-of-a-framed-submanifold` · definition — The Pontryagin-Thom map of a framed submanifold
- `lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy` · lemma — Tube independence of the Pontryagin-Thom map
- `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism` · definition — Collapse of a framed neat cobordism in $X\times I$
- `lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps` · lemma — Framed cobordant submanifolds have homotopic Pontryagin-Thom maps
- `def-framed-regular-preimage-of-a-map-to-a-sphere` · definition — Framed regular preimages of a map to a sphere
- `lem-positively-oriented-bases-are-path-connected` · lemma — Positively oriented bases of an oriented vector space are path-connected
- `lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages` · lemma — Homotopic maps with a common regular value have framed-cobordant preimages
- `lem-regular-value-choice-does-not-change-the-framed-cobordism-class` · lemma — The framed preimage class is independent of regular value and positive basis
- `lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold` · lemma — The regular preimage of the collapse recovers the original framed submanifold
- `lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map` · lemma — The collapse of a regular preimage is homotopic to the original map
- `lem-based-and-free-homotopy-classes-of-sphere-maps-agree` · lemma — Based and free homotopy classes of maps between spheres agree
- `thm-pontryagin-thom-correspondence-in-fixed-codimension` · theorem — The Pontryagin-Thom correspondence in fixed codimension
- `def-stabilized-framed-cobordism-colimit` · definition — Stabilized framed cobordism and the framed bordism group
- `lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map` · lemma — Stabilizing a framed submanifold suspends its Pontryagin-Thom map
- `thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems` · theorem — The stable Pontryagin-Thom theorem identifies framed bordism with stable stems
- `rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data` · remark — Normal framings, stable normal framings and tangential framings are distinct data

### `pontryagin-thom-and-framed-cobordism-examples` — Pontryagin Thom and Framed Cobordism — Examples (5 item(s))

- `ex-framed-zero-manifolds-and-signed-points` · example — Framed zero-manifolds and signed points
- `ex-pontryagin-thom-map-of-the-standard-framed-equator` · example — The Pontryagin-Thom map of the standard framed equator
- `ex-framed-links-represent-elements-of-pi-three-of-s-two` · example — The framed unknot represents a generator of $\pi_3(S^2)$
- `cex-changing-a-framing-can-change-the-pontryagin-thom-class` · counterexample — A framing, not just the submanifold, determines the Pontryagin-Thom class
- `ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map` · example — Stabilizing a framed point suspends its collapse map

### `whitehead-torsion-and-the-s-cobordism-theorem` — Whitehead Torsion and the S Cobordism Theorem (22 item(s))

- `def-based-handle-chain-complex-over-the-fundamental-group-ring` · definition — The based handle chain complex over the fundamental group ring
- `lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring` · lemma — The handle complex of an h-cobordism is contractible over the group ring, with an explicit contraction
- `lem-relative-handle-complex-torsion-agrees-with-the-inclusion` · lemma — The torsion of the handle complex is the torsion of the inclusion
- `def-whitehead-torsion-of-an-h-cobordism` · definition — Presentation-indexed Whitehead torsion of an h-cobordism
- `lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion` · lemma — Handle slides and cancelling-pair creations preserve Whitehead torsion
- `thm-whitehead-torsion-of-an-h-cobordism-is-well-defined` · theorem — The Whitehead torsion of an h-cobordism is well defined for a fixed presentation and its elementary moves
- `lem-product-h-cobordisms-have-zero-whitehead-torsion` · lemma — Product h-cobordisms have zero Whitehead torsion
- `lem-h-cobordisms-admit-two-index-normal-form-presentations` · lemma — h-cobordisms admit two-index normal form presentations
- `lem-group-ring-modification-lemma-for-embedded-spheres` · lemma — The group-ring modification lemma for embedded spheres
- `lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels` · lemma — A vanishing group-ring coefficient sum pairs off opposite-signed equal labels
- `lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy` · lemma — The group-labelled homology lemma realizes group-ring handle bases by isotopy
- `lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves` · lemma — Vanishing torsion allows algebraic diagonalization by simple handle moves
- `lem-group-labelled-whitney-tricks-realize-the-diagonalized-handle-complex` · lemma — Group-labelled Whitney tricks realize the diagonalized handle complex
- `lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence` · lemma — A contractible relative group-ring complex with a pi-one isomorphism detects a homotopy equivalence
- `thm-vanishing-torsion-implies-product-cobordism` · theorem — Vanishing presentation-indexed torsion implies the product cobordism
- `thm-smooth-s-cobordism-theorem` · theorem — The smooth s-cobordism theorem: a vanishing presentation implies a product
- `cor-h-cobordism-theorem-when-the-whitehead-group-vanishes` · corollary — The h-cobordism theorem when the Whitehead group vanishes
- `lem-whitehead-classes-are-represented-by-invertible-matrices` · lemma — Every Whitehead class is represented by an invertible matrix and conversely
- `prop-realization-of-whitehead-torsion-by-h-cobordisms` · proposition — Realization of prescribed Whitehead torsion by h-cobordisms
- `rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned` · remark — Simple homotopy and the vanishing criterion are owned by AT
- `rem-torsion-from-the-opposite-boundary-involves-the-standard-involution-and-dimension-sign` · remark — The opposite-boundary torsion is not naively the same class
- `rem-whitehead-group-construction-remains-at-owned` · remark — The Whitehead group construction remains AT-owned

### `whitehead-torsion-and-the-s-cobordism-theorem-examples` — Whitehead Torsion and the S Cobordism Theorem — Examples (4 item(s))

- `ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction` · example — Simply connected h-cobordisms have zero Whitehead obstruction
- `ex-a-group-ring-handle-matrix-and-its-torsion-class` · example — A group-ring handle matrix and its torsion class
- `ex-handle-slides-change-the-matrix-but-not-whitehead-torsion` · example — Handle slides change the matrix but not the Whitehead torsion
- `cex-ordinary-acyclicity-over-z-does-not-detect-group-ring-torsion` · counterexample — Ordinary acyclicity over Z does not detect group-ring torsion

### `foliation-holonomy-and-the-holonomy-groupoid` — Foliation Holonomy and the Holonomy Groupoid (23 item(s))

- `def-local-transversal-to-a-regular-foliation` · definition — Local transversals to a regular foliation
- `def-leafwise-path-and-leafwise-homotopy` · definition — Leafwise paths and leafwise homotopy relative to endpoints
- `def-germ-of-a-local-diffeomorphism-at-a-point` · definition — Germs of local diffeomorphisms at a point
- `lem-germs-of-local-diffeomorphisms-form-a-group` · lemma — Germs of local diffeomorphisms at a point form a group
- `lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism` · lemma — A leafwise path determines a germ of a transverse diffeomorphism
- `lem-holonomy-germ-is-independent-of-the-foliation-chart-chain` · lemma — The holonomy germ is independent of the foliation chart chain
- `thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints` · theorem — Holonomy depends only on leafwise homotopy relative to endpoints
- `lem-holonomy-respects-path-concatenation-and-reversal` · lemma — Holonomy respects path concatenation and reversal
- `def-holonomy-representation-and-holonomy-group-of-a-leaf` · definition — The holonomy representation and the holonomy group of a leaf
- `lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action` · lemma — The deck group of a connected covering acts by a covering-space action
- `lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists` · lemma — The covering of a leaf associated with the holonomy kernel exists
- `def-holonomy-cover-of-a-leaf` · definition — The holonomy cover of a leaf
- `def-monodromy-groupoid-of-a-foliation` · definition — The monodromy groupoid of a foliation
- `def-holonomy-groupoid-of-a-foliation` · definition — The holonomy groupoid of a foliation
- `lem-holonomy-classes-form-a-groupoid-congruence` · lemma — Holonomy classes form a groupoid congruence
- `prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group` · proposition — The isotropy of the holonomy groupoid is the leaf holonomy group
- `def-map-transverse-to-a-regular-foliation` · definition — Smooth maps transverse to a regular foliation
- `prop-pullback-foliation-under-a-transverse-map` · proposition — The pullback foliation under a transverse map
- `prop-quotient-foliation-under-a-free-proper-foliated-action` · proposition — The quotient foliation under a free and properly discontinuous foliated action
- `def-suspension-foliation-of-a-group-action` · definition — The suspension foliation of a representation of the fundamental group
- `prop-suspension-holonomy-is-the-germ-of-the-monodromy-action` · proposition — Suspension holonomy is the germ of the represented monodromy action
- `rem-holonomy-is-a-germ-not-a-globally-defined-return-map` · remark — Holonomy is a germ, not a globally defined return map
- `rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff` · remark — Holonomy and monodromy groupoids need not be Hausdorff

### `foliation-holonomy-and-the-holonomy-groupoid-examples` — Foliation Holonomy and the Holonomy Groupoid — Examples (6 item(s))

- `ex-kronecker-foliation-of-the-torus-has-trivial-leaf-holonomy` · example — The Kronecker foliation of the torus has dense leaves and trivial leaf holonomy
- `ex-mobius-band-central-leaf-has-reflection-holonomy` · example — The Möbius band's central leaf has reflection holonomy
- `ex-suspension-of-a-circle-diffeomorphism` · example — The suspension of a circle diffeomorphism: leaves and return germs
- `ex-flat-bundle-foliation-from-a-linear-representation` · example — The flat-bundle foliation from a linear representation
- `cex-nontransverse-pullback-of-a-foliation-can-change-rank` · counterexample — A nontransverse pullback need not reproduce the rank of a foliation
- `cex-two-nonhomotopic-leaf-loops-can-have-the-same-holonomy-germ` · counterexample — Two nonhomotopic leaf loops can have the same holonomy germ

## Your seams

Your pages depend on another group's:

- `whitehead-torsion-and-the-s-cobordism-theorem` requires `the-smooth-h-cobordism-theorem` (group h, batch 15)
- `whitehead-torsion-and-the-s-cobordism-theorem-examples` requires `fixed-point-index-and-the-lefschetz-theorem` (group e, batch 8)

Another group's pages depend on yours:

- `codimension-one-foliations-and-secondary-classes` (group a) requires your `foliation-holonomy-and-the-holonomy-groupoid`
- `characteristic-numbers-and-cobordism-obstructions` (group b) requires your `pontryagin-thom-and-framed-cobordism`
- `reeb-stability-and-global-foliation-constructions` (group c) requires your `foliation-holonomy-and-the-holonomy-groupoid`
- `the-smooth-h-cobordism-theorem-examples` (group h) requires your `pontryagin-thom-and-framed-cobordism`
- `the-hopf-degree-theorem` (group j) requires your `pontryagin-thom-and-framed-cobordism`
- `vanishing-cycles-novikov-and-taut-foliations` (group k) requires your `foliation-holonomy-and-the-holonomy-groupoid`

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
