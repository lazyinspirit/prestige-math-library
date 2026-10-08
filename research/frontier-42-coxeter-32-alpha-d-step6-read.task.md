# Step 6 Alpha group reader — read-only digest — group **d**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **5**, **26**, **30**: 3 A/B pair(s), 6 page(s), 26 item(s).

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
| 5 | `finite-lattice-projections-and-coxeter-chain-labels` | A | coxeter-groups | 1726 | `order-zorn-and-the-axiom-of-choice`, `simplicial-subdivision-and-simplicial-approximation`, `relations-functions-and-quotients`, `chains-antichains-sperner-and-dilworth`, `incidence-algebras-and-mobius-inversion` |
| 5 | `finite-lattice-projections-and-coxeter-chain-labels-examples` | B | coxeter-groups | 1727 | `finite-lattice-projections-and-coxeter-chain-labels` |
| 26 | `spherical-parabolic-cosets-and-the-davis-complex` | A | coxeter-groups | 1768 | `parabolic-subgroups-and-double-coset-geometry`, `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `coxeter-polyhedral-gluings-and-intrinsic-metrics`, `cw-complexes-and-cellular-homology`, `simplicial-subdivision-and-simplicial-approximation`, `simplicial-complexes-and-simplicial-homology`, `hurewicz-whitehead-freudenthal-and-cw-approximation` |
| 26 | `spherical-parabolic-cosets-and-the-davis-complex-examples` | B | coxeter-groups | 1769 | `spherical-parabolic-cosets-and-the-davis-complex`, `free-products-and-amalgamation`, `graphs-of-groups-and-bass-serre-theory` |
| 30 | `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` | A | coxeter-groups | 1776 | `spherical-parabolic-cosets-and-the-davis-complex`, `large-spherical-metric-flags-and-the-moussong-girth-theorem`, `relations-functions-and-quotients` |
| 30 | `davis-cat-zero-geometry-and-finite-subgroup-fixed-points-examples` | B | coxeter-groups | 1777 | `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-lattice-projections-and-coxeter-chain-labels` — Finite Lattice Projections and Coxeter Chain Labels (4 item(s))

- `def-cg-finite-lattice-congruence-and-interval-projections` · definition — Finite lattice congruences, interval endpoints and descending rooted-chain labels
- `lem-cg-lattice-quotient-descent-and-class-intervals` · lemma — Lattice quotient descent, class intervals and monotone endpoints
- `thm-cg-finite-lattice-interval-congruence-criterion` · theorem — The interval criterion for a lattice congruence: interval classes with monotone endpoints
- `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` · lemma — Lexicographic chain shelling and the falling-chain Möbius formula

### `finite-lattice-projections-and-coxeter-chain-labels-examples` — Finite Lattice Projections and Coxeter Chain Labels — Examples (3 item(s))

- `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond` · example — The interval criterion checked on a three-element chain and a diamond
- `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence` · counterexample — A partition into intervals with non-monotone endpoints need not be a lattice congruence
- `ex-cg-rank-three-chain-labeling-and-order-complex-facets` · example — A rank-three chain labeling translated into facets of the order complex

### `spherical-parabolic-cosets-and-the-davis-complex` — Spherical Parabolic Cosets and the Davis Complex (7 item(s))

- `def-cg-spherical-nerve-coset-poset-and-davis-realization` · definition — Spherical subsets, the nerve, the poset of spherical cosets, and the Davis realization
- `lem-cg-spherical-coset-inclusion-and-intersection` · lemma — Equality, inclusion and intersection of spherical cosets, and the quotient poset of the Davis action
- `lem-cg-canonical-cell-exposed-faces-and-normal-cones` · lemma — Exposed faces and normal cones of the finite Coxeter cell conv(Wx)
- `lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics` · lemma — Finite Coxeter orbit polytopes C_T and the metric compatibility of their faces
- `thm-cg-davis-complex-cell-incidence-and-stabilizers` · theorem — The Davis complex as a glued Coxeter-cell complex: incidence, stabilizers, proper action and compact chamber quotient
- `lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta` · lemma — The Coxeter cellulation of the Davis complex is a CW complex with Cayley graph and Cayley 2-complex as skeleta
- `thm-cg-davis-complex-is-simply-connected` · theorem — The Davis complex is simply connected

### `spherical-parabolic-cosets-and-the-davis-complex-examples` — Spherical Parabolic Cosets and the Davis Complex — Examples (5 item(s))

- `ex-cg-a2-davis-complex-hexagon-and-boundary-circle` · example — The A2 Davis complex is a hexagon whose boundary is the Coxeter complex circle
- `ex-cg-b2-davis-complex-octagon-and-boundary-circle` · example — The B2 Davis complex is an octagon whose boundary is the Coxeter complex circle
- `ex-cg-right-angled-cube-davis-complex` · example — The right-angled cube Davis complex and its boundary 2-sphere
- `ex-cg-universal-coxeter-tree-davis-complex` · example — The universal Coxeter Davis complex is a tree
- `ex-cg-spherical-residues-chamber-quotient-and-finite-versus-infinite` · example — Residues, the compact chamber quotient, and the finite Coxeter sphere versus the contractible Davis cell

### `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` — Davis CAT(0) Geometry and Finite Subgroup Fixed Points (4 item(s))

- `lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets` · lemma — Circumcenters of bounded sets and fixed sets of isometries in complete CAT(0) spaces
- `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve` · lemma — The angular link of a vertex of the Davis complex is the large metric flag nerve
- `thm-cg-finite-rank-davis-moussong-cat-zero-theorem` · theorem — The Davis complex of a finite-rank Coxeter system is CAT(0) (Moussong's theorem)
- `thm-cg-finite-subgroups-lie-in-spherical-parabolics` · theorem — Finite subgroups of a Coxeter group lie in spherical parabolics

### `davis-cat-zero-geometry-and-finite-subgroup-fixed-points-examples` — Davis CAT(0) Geometry and Finite Subgroup Fixed Points — Examples (3 item(s))

- `ex-cg-circumcenter-of-a-finite-orbit-in-a-metric-tree` · example — Circumcenters of finite sets in the infinite dihedral Davis line
- `ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve` · example — Link angles in A2, affine A2 and the universal Coxeter nerve
- `ex-cg-fixed-points-and-cell-stabilizers-in-the-infinite-dihedral-tree` · example — Fixed points of finite subgroups in the infinite dihedral tree and their cell stabilizers

## Your seams

Your pages depend on another group's:

- `spherical-parabolic-cosets-and-the-davis-complex` requires `parabolic-subgroups-and-double-coset-geometry` (group f, batch 10)
- `spherical-parabolic-cosets-and-the-davis-complex` requires `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c, batch 17)
- `spherical-parabolic-cosets-and-the-davis-complex` requires `coxeter-polyhedral-gluings-and-intrinsic-metrics` (group e, batch 6)
- `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` requires `large-spherical-metric-flags-and-the-moussong-girth-theorem` (group e, batch 22)

Another group's pages depend on yours:

- `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c) requires your `finite-lattice-projections-and-coxeter-chain-labels`
- `bruhat-interval-labels-shellings-and-mobius-functions` (group f) requires your `finite-lattice-projections-and-coxeter-chain-labels`
- `bipartite-coxeter-elements-and-ordered-root-complexes` (group j) requires your `finite-lattice-projections-and-coxeter-chain-labels`
- `heaps-commutation-classes-and-fully-commutative-elements` (group k) requires your `finite-lattice-projections-and-coxeter-chain-labels`
- `sortable-projections-and-finite-cambrian-lattices` (group k) requires your `finite-lattice-projections-and-coxeter-chain-labels`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-42-coxeter-32`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
