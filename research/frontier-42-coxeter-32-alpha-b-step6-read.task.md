# Step 6 Alpha group reader — read-only digest — group **b**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **2**, **7**, **9**: 3 A/B pair(s), 6 page(s), 26 item(s).

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
| 2 | `coxeter-presentations-exchange-and-reduced-word-theorems` | A | coxeter-groups | 1708 | `tensor-coherence-and-algebraic-descent`, `symmetric-groups-and-the-sign-homomorphism`, `splitting-fields`, `finite-fields-and-cyclotomic-extensions`, `group-homomorphisms-and-the-isomorphism-theorems` |
| 2 | `coxeter-presentations-exchange-and-reduced-word-theorems-examples` | B | coxeter-groups | 1709 | `coxeter-presentations-exchange-and-reduced-word-theorems` |
| 7 | `canonical-roots-signs-and-faithful-reflections` | A | coxeter-groups | 1730 | `real-forms-and-reflection-geometry`, `coxeter-presentations-exchange-and-reduced-word-theorems` |
| 7 | `canonical-roots-signs-and-faithful-reflections-examples` | B | coxeter-groups | 1731 | `canonical-roots-signs-and-faithful-reflections`, `free-products-and-amalgamation` |
| 9 | `tits-cones-chambers-and-parabolic-stabilizers` | A | coxeter-groups | 1734 | `canonical-roots-signs-and-faithful-reflections`, `hilbert-space-geometry-and-riesz-representation` |
| 9 | `tits-cones-chambers-and-parabolic-stabilizers-examples` | B | coxeter-groups | 1735 | `tits-cones-chambers-and-parabolic-stabilizers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `coxeter-presentations-exchange-and-reduced-word-theorems` — Coxeter Presentations, Exchange, and Reduced Word Theorems (6 item(s))

- `def-hh-coxeter-matrix-word-group-and-length` · definition — Coxeter matrices, the presented Coxeter group, reduced words, length, and standard parabolic subgroups
- `def-hh-geometric-coxeter-representation-and-roots` · definition — The geometric representation on the simple-root basis over a common splitting field, and the root set
- `lem-hh-dihedral-root-recurrence-and-root-sign` · lemma — The rank-two block computation, exact dihedral orders, the signed reflection action, and ambient reducedness
- `thm-hh-coxeter-exchange-deletion-and-faithfulness` · theorem — Length parity, exchange, two-letter deletion, and faithfulness of the signed reflection action
- `thm-hh-matsumoto-reduced-word-theorem` · theorem — Matsumoto's theorem: braid connectivity of reduced expressions, with singleton detection in dihedral subgroups
- `thm-hh-parabolic-minimal-representatives-and-length-additivity` · theorem — Support, intrinsic parabolic presentations, minimal coset representatives and length additivity, with the type-A identification

### `coxeter-presentations-exchange-and-reduced-word-theorems-examples` — Coxeter Presentations, Exchange, and Reduced Word Theorems — Examples (5 item(s))

- `ex-hh-rank-one-reduced-words` · example — Reduced words in rank one
- `ex-hh-finite-dihedral-reduced-words` · example — Reduced words and lengths in a finite dihedral group
- `ex-hh-exchange-deletion-on-a-nonreduced-word` · example — A nonreduced word deleted by its repeated prefix reflection, and an exchange step
- `ex-hh-type-a-reduced-words-and-inversions` · example — Type-A reduced words and inversion numbers in $S_3$
- `ex-hh-minimal-representatives-for-s2-in-s3` · example — Minimal coset representatives of $S_2$ in $S_3$

### `canonical-roots-signs-and-faithful-reflections` — Canonical Roots, Signs, and Faithful Reflections (5 item(s))

- `lem-cg-rank-two-prefix-and-chamber-length-induction` · lemma — The rank-two half-space alternative and the chamber-length induction $(P_n)$, $(Q_n)$
- `thm-cg-root-sign-and-simple-reflection-positivity` · theorem — Root sign coherence and the action of simple reflections on positive roots
- `thm-cg-root-length-criterion-and-faithfulness` · theorem — The root-length criterion and faithfulness of the canonical reflection representation
- `def-cg-geometric-inversion-set` · definition — The geometric inversion set $N(w)$ of a Coxeter element and its step recursion
- `thm-cg-root-inversion-formulas-and-strong-exchange` · theorem — The root-reflection dictionary, the inversion-set formula, and strong exchange

### `canonical-roots-signs-and-faithful-reflections-examples` — Canonical Roots, Signs, and Faithful Reflections — Examples (3 item(s))

- `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity` · example — Roots, inversions and chamber images in $I_2(5)$, $A_2$ and infinite dihedral type
- `ex-cg-indefinite-form-admits-faithful-reflection-representation` · example — An indefinite Coxeter form with a faithful canonical reflection representation
- `ex-cg-mixed-sign-vector-is-not-a-root` · example — A vector with mixed signs is not a root, while every root has a sign

### `tits-cones-chambers-and-parabolic-stabilizers` — Tits Cones, Chambers, and Parabolic Stabilizers (4 item(s))

- `def-cg-tits-cone-and-fundamental-chamber` · definition — The Tits cone, its interior, and the negative-root set of a functional
- `thm-cg-tits-cone-finite-negativity-and-convexity` · theorem — The finite-negativity criterion, the reduction step, and convexity of the Tits cone
- `thm-cg-dual-chamber-intersections-and-point-stabilizers` · theorem — Chamber collisions, point stabilizers, and the intersection rule
- `thm-cg-tits-cone-interior-and-local-finiteness` · theorem — The interior of the Tits cone, finite parabolic stabilizers, and local finiteness

### `tits-cones-chambers-and-parabolic-stabilizers-examples` — Tits Cones, Chambers, and Parabolic Stabilizers — Examples (3 item(s))

- `ex-cg-tits-cone-of-infinite-dihedral-type` · example — The Tits cone of infinite dihedral type: interior, boundary, and stabilizers
- `ex-cg-chamber-face-stabilizers-in-a2` · example — Chamber faces and their stabilizers in $A_2$
- `ex-cg-outside-tits-cone-point-with-infinite-stabilizer` · example — A point outside the Tits cone with infinite stabilizer

## Your seams

Your pages depend on another group's:

- `coxeter-presentations-exchange-and-reduced-word-theorems` requires `tensor-coherence-and-algebraic-descent` (group a, batch 1)
- `canonical-roots-signs-and-faithful-reflections` requires `real-forms-and-reflection-geometry` (group c, batch 4)

Another group's pages depend on yours:

- `generic-coxeter-hecke-algebras-and-the-standard-basis` (group a) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `real-forms-and-reflection-geometry` (group c) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `parabolic-subgroups-and-double-coset-geometry` (group f) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `parabolic-subgroups-and-double-coset-geometry` (group f) requires your `canonical-roots-signs-and-faithful-reflections`
- `bruhat-subword-order-and-lifting` (group f) requires your `canonical-roots-signs-and-faithful-reflections`
- `finite-coxeter-diagrams-and-complete-classification` (group h) requires your `tits-cones-chambers-and-parabolic-stabilizers`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `canonical-roots-signs-and-faithful-reflections`
- `heaps-commutation-classes-and-fully-commutative-elements` (group k) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`

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
