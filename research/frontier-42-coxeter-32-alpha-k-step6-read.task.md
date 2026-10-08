# Step 6 Alpha group reader — read-only digest — group **k**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **23**, **28**, **32**: 3 A/B pair(s), 6 page(s), 25 item(s).

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
| 23 | `weak-order-inversions-and-lattice-operations` | A | coxeter-groups | 1762 | `parabolic-subgroups-and-double-coset-geometry`, `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `chains-antichains-sperner-and-dilworth`, `incidence-algebras-and-mobius-inversion` |
| 23 | `weak-order-inversions-and-lattice-operations-examples` | B | coxeter-groups | 1763 | `weak-order-inversions-and-lattice-operations` |
| 28 | `heaps-commutation-classes-and-fully-commutative-elements` | A | coxeter-groups | 1772 | `weak-order-inversions-and-lattice-operations`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `finite-lattice-projections-and-coxeter-chain-labels`, `chains-antichains-sperner-and-dilworth` |
| 28 | `heaps-commutation-classes-and-fully-commutative-elements-examples` | B | coxeter-groups | 1773 | `heaps-commutation-classes-and-fully-commutative-elements` |
| 32 | `sortable-projections-and-finite-cambrian-lattices` | A | coxeter-groups | 1780 | `coxeter-euler-forms-and-sortable-chamber-cones`, `finite-lattice-projections-and-coxeter-chain-labels` |
| 32 | `sortable-projections-and-finite-cambrian-lattices-examples` | B | coxeter-groups | 1781 | `sortable-projections-and-finite-cambrian-lattices` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `weak-order-inversions-and-lattice-operations` — Weak Order, Inversions, and Lattice Operations (6 item(s))

- `def-cg-left-right-weak-order-and-descents` · definition — The right and left weak orders, intervals, covers, and meets and joins of subsets
- `lem-cg-weak-order-prefix-property-and-left-translation` · lemma — The length identity, the prefix property, left translation, and interval translation for weak order
- `lem-cg-weak-order-is-a-graded-partial-order` · lemma — Weak order is a graded partial order; covers and the inversion-set criterion
- `lem-cg-bounded-weak-order-join-construction` · lemma — Binary meets, meets of arbitrary nonempty subsets, and joins of bounded subsets in weak order
- `lem-cg-full-descent-element-characterizes-finite-type` · lemma — An element with all simple reflections as left descents characterizes finite type
- `thm-cg-weak-order-meet-semilattice-and-finite-lattice` · theorem — Weak order is a meet-semilattice, finite Coxeter groups are lattices, and joins of simple reflections exist exactly for finite parabolics

### `weak-order-inversions-and-lattice-operations-examples` — Weak Order, Inversions, and Lattice Operations — Examples (3 item(s))

- `ex-cg-s3-weak-order-meets-and-joins` · example — All meets and joins of the right weak order of $A_2$ ($S_3$), with the left order and the inversion sets compared
- `ex-cg-infinite-dihedral-bounded-interval-and-missing-join` · example — Infinite dihedral type: lower intervals are chains, but the two atoms have no upper bound
- `cex-cg-inversion-sets-do-not-compute-meets-and-joins` · counterexample — Meets and joins are not intersection and union of inversion sets: the $A_2$ counterexample

### `heaps-commutation-classes-and-fully-commutative-elements` — Heaps, Commutation Classes, and Fully Commutative Elements (7 item(s))

- `def-cg-linear-extension-of-a-finite-poset` · definition — Linear extensions of a finite poset
- `def-cg-labeled-word-heap-and-fully-commutative-element` · definition — Words, heaps, linear extensions, commutation classes, and fully commutative elements
- `lem-cg-finite-poset-linear-extensions-and-connectivity` · lemma — Linear extensions of a finite poset: existence, prescribed initial ideals, and adjacent-swap connectivity
- `lem-cg-convex-chains-consecutive-in-a-linear-extension` · lemma — A convex chain (in particular a covering pair) of a finite poset occurs consecutively in some linear extension
- `thm-cg-heaps-classify-commutation-classes` · theorem — Labeled linear extensions of a heap are exactly the words in its commutativity class, and heaps classify commutativity classes
- `thm-cg-fully-commutative-forbidden-chain-criterion` · theorem — Fully commutative elements: the braid-factor criterion and the forbidden-chain heap criterion
- `thm-cg-fully-commutative-weak-intervals-are-distributive` · theorem — The right weak order interval below a fully commutative element is the lattice of order ideals of its heap

### `heaps-commutation-classes-and-fully-commutative-elements-examples` — Heaps, Commutation Classes, and Fully Commutative Elements — Examples (4 item(s))

- `ex-cg-heap-of-one-three-two-in-a3` · example — The heap of $s_1s_3s_2$ in type $A_3$: a V-shaped heap with exactly two linear extensions
- `ex-cg-heap-of-one-two-one-in-a2-and-long-braid` · example — The heap of $s_1s_2s_1$ in type $A_2$: a convex alternating chain and two commutation classes
- `ex-cg-distributive-weak-intervals-of-fully-commutative-elements` · example — Two distributive right weak intervals of fully commutative elements in type $A_3$
- `ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element` · example — The right weak interval below the longest element of $A_2$ is not distributive

### `sortable-projections-and-finite-cambrian-lattices` — Sortable Projections and Finite Cambrian Lattices (3 item(s))

- `def-cg-recursive-sortable-projection-and-cambrian-congruence` · definition — The sortable projection kernel and the c-Cambrian quotient
- `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` · theorem — Sortable elements form a sublattice and the c-Cambrian quotient is its lattice-homomorphic image
- `thm-cg-sortable-projection-greatest-element-and-interval-fibers` · theorem — The upper endpoint of a c-Cambrian fiber, interval fibers and the explicit formula u_c(w) = pi_{c^{-1}}(ww0)w0

### `sortable-projections-and-finite-cambrian-lattices-examples` — Sortable Projections and Finite Cambrian Lattices — Examples (2 item(s))

- `ex-cg-a3-sortable-subset-and-a-three-element-fiber` · example — The c-sortable subset of A3 for c = s1s2s3, a three-element fiber, and the upper endpoint map
- `ex-cg-cambrian-quotient-of-s3-and-two-orientations` · example — The c-Cambrian quotient of S3 for both orientations: fibers, endpoints and meet/join preservation

## Your seams

Your pages depend on another group's:

- `weak-order-inversions-and-lattice-operations` requires `parabolic-subgroups-and-double-coset-geometry` (group f, batch 10)
- `weak-order-inversions-and-lattice-operations` requires `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c, batch 17)
- `heaps-commutation-classes-and-fully-commutative-elements` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)
- `heaps-commutation-classes-and-fully-commutative-elements` requires `finite-lattice-projections-and-coxeter-chain-labels` (group d, batch 5)
- `sortable-projections-and-finite-cambrian-lattices` requires `coxeter-euler-forms-and-sortable-chamber-cones` (group i, batch 29)
- `sortable-projections-and-finite-cambrian-lattices` requires `finite-lattice-projections-and-coxeter-chain-labels` (group d, batch 5)

Another group's pages depend on yours:

- `coxeter-descents-poincare-polynomials-and-growth` (group h) requires your `weak-order-inversions-and-lattice-operations`
- `coxeter-euler-forms-and-sortable-chamber-cones` (group i) requires your `weak-order-inversions-and-lattice-operations`

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
