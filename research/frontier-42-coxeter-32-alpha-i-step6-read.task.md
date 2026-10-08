# Step 6 Alpha group reader — read-only digest — group **i**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **14**, **29**: 2 A/B pair(s), 4 page(s), 26 item(s).

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
| 14 | `coxeter-artin-and-hecke-interfaces` | A | coxeter-groups | 1744 | `coxeter-presentations-exchange-and-reduced-word-theorems`, `canonical-roots-signs-and-faithful-reflections`, `parabolic-subgroups-and-double-coset-geometry`, `group-homomorphisms-and-the-isomorphism-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `garside-structure-normal-forms-and-the-center`, `braids-as-fundamental-groups-of-configuration-spaces`, `artin-presentation-completeness-and-braid-combing` |
| 14 | `coxeter-artin-and-hecke-interfaces-examples` | B | coxeter-groups | 1745 | `coxeter-artin-and-hecke-interfaces` |
| 29 | `coxeter-euler-forms-and-sortable-chamber-cones` | A | coxeter-groups | 1774 | `weak-order-inversions-and-lattice-operations`, `finite-reflection-arrangements-and-spherical-coxeter-complexes` |
| 29 | `coxeter-euler-forms-and-sortable-chamber-cones-examples` | B | coxeter-groups | 1775 | `coxeter-euler-forms-and-sortable-chamber-cones` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `coxeter-artin-and-hecke-interfaces` — Coxeter, Artin, and Hecke Interfaces (4 item(s))

- `def-cg-artin-monoid-and-group-presentations` · definition — Artin monoid and Artin group presentations, and the canonical monoid-to-group map
- `lem-cg-artin-presentation-universal-properties-and-coxeter-surjection` · lemma — Universal properties of the Artin monoid and group, the projection onto the Coxeter group, and the quotient by the squares
- `thm-cg-reduced-positive-section-and-length-additive-products` · theorem — The reduced positive section of the Coxeter group, the positive length, and multiplicativity on length-additive products
- `lem-cg-hecke-and-lie-seam-contract-compatibility` · lemma — Hecke, Artin and realization seams: indexing, normalizations, root-length matching and the reflection-faithfulness boundary

### `coxeter-artin-and-hecke-interfaces-examples` — Coxeter, Artin, and Hecke Interfaces — Examples (4 item(s))

- `ex-cg-type-a-artin-projection-and-positive-lifts` · example — The type-A Artin group, its projection to the symmetric group, and reduced positive lifts
- `cex-cg-artin-positive-lift-is-not-a-homomorphism` · counterexample — The positive lift of the Coxeter group is not a homomorphism
- `ex-cg-quadratic-hecke-normalizations-s-equals-q-t` · example — Quadratic Hecke normalizations: S=qT with Q=q^2, the opposite-sign form, and the Soergel-calculus and Kazhdan-Lusztig conversions
- `cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful` · counterexample — A faithful canonical realization that is not reflection faithful: the affine rank-two system

### `coxeter-euler-forms-and-sortable-chamber-cones` — Coxeter Euler Forms and Sortable Chamber Cones (14 item(s))

- `def-cg-coxeter-oriented-euler-form-and-c-sorting-word` · definition — Coxeter elements, the oriented Euler form, the skew form, and the periodic word
- `lem-cg-positive-span-of-transported-simple-roots` · lemma — A transported simple root lies in the positive span of the simple root and the inversion roots
- `lem-cg-coxeter-word-transport-and-form-independence` · lemma — Coxeter words are commutation-connected; the Euler and skew forms depend only on the Coxeter element
- `lem-cg-finite-dihedral-subsystems-and-canonical-roots` · lemma — Plane subsystems, their canonical generators, and the angular order of their roots
- `lem-cg-finite-rank-two-inversion-set-recognition` · lemma — Finite inversion sets are recognized by their rank-two initial or final segments
- `lem-cg-greedy-sorting-word-and-rank-two-alignment` · lemma — The greedy scan computes the c-sorting word; commutation, conjugation and rank-two alignment
- `lem-cg-weak-parabolic-projection-and-cover-joins` · lemma — The weak parabolic projection, its adjoints, and the cover-join lemmas
- `def-cg-sortable-element-skip-roots-and-cone` · definition — c-sortable elements, forced and unforced skips, skip roots, and the chamber cone
- `lem-cg-uniform-omega-positive-and-aligned-sortability` · lemma — Omega-positive reflection sequences are exactly the sorting words; sortable equals aligned; parabolic restriction
- `def-cg-initial-letter-sortable-projection` · definition — The recursive initial-letter sortable projection
- `lem-cg-sortable-recursion-output-and-initial-choice-independence` · lemma — The recursive projection is well defined, sortable-valued, below w, idempotent, descent-detecting and parabolic
- `lem-cg-sortable-skips-basis-and-cover-decomposition` · lemma — Skip roots form a basis, negative skips are cover roots, and the cover decomposition of sortable elements
- `lem-cg-sortable-cone-criterion-and-projection-monotonicity` · lemma — The cone criterion, monotonicity of the projection, and the greatest sortable element below w
- `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions` · theorem — Skip bases, cover roots, greatest-sortable projections, and the chamber union of each cone

### `coxeter-euler-forms-and-sortable-chamber-cones-examples` — Coxeter Euler Forms and Sortable Chamber Cones — Examples (4 item(s))

- `cex-cg-rank-two-inversion-set-violating-closure` · counterexample — A set of two reflections of A2 that fails both closure and the segment criterion
- `ex-cg-euler-and-skew-form-in-a3` · example — The Euler and skew forms of c = s1s2s3 in A3, and the orientation of its rank-two subsystems
- `ex-cg-source-sink-move-and-sign-convention` · example — A source–sink move in A3: transporting the Euler and skew forms by an initial letter
- `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3` · example — All skips and the cone walls of the sortable element s1s2 in A3

## Your seams

Your pages depend on another group's:

- `coxeter-artin-and-hecke-interfaces` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)
- `coxeter-artin-and-hecke-interfaces` requires `canonical-roots-signs-and-faithful-reflections` (group b, batch 7)
- `coxeter-artin-and-hecke-interfaces` requires `parabolic-subgroups-and-double-coset-geometry` (group f, batch 10)
- `coxeter-artin-and-hecke-interfaces` requires `generic-coxeter-hecke-algebras-and-the-standard-basis` (group a, batch 3)
- `coxeter-euler-forms-and-sortable-chamber-cones` requires `weak-order-inversions-and-lattice-operations` (group k, batch 23)
- `coxeter-euler-forms-and-sortable-chamber-cones` requires `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c, batch 17)

Another group's pages depend on yours:

- `sortable-projections-and-finite-cambrian-lattices` (group k) requires your `coxeter-euler-forms-and-sortable-chamber-cones`

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
