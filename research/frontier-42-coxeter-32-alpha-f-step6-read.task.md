# Step 6 Alpha group reader — read-only digest — group **f**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **10**, **12**, **16**: 3 A/B pair(s), 6 page(s), 25 item(s).

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
| 10 | `parabolic-subgroups-and-double-coset-geometry` | A | coxeter-groups | 1736 | `coxeter-presentations-exchange-and-reduced-word-theorems`, `canonical-roots-signs-and-faithful-reflections` |
| 10 | `parabolic-subgroups-and-double-coset-geometry-examples` | B | coxeter-groups | 1737 | `parabolic-subgroups-and-double-coset-geometry` |
| 12 | `bruhat-subword-order-and-lifting` | A | coxeter-groups | 1740 | `canonical-roots-signs-and-faithful-reflections`, `parabolic-subgroups-and-double-coset-geometry` |
| 12 | `bruhat-subword-order-and-lifting-examples` | B | coxeter-groups | 1741 | `bruhat-subword-order-and-lifting` |
| 16 | `bruhat-interval-labels-shellings-and-mobius-functions` | A | coxeter-groups | 1748 | `bruhat-subword-order-and-lifting`, `finite-lattice-projections-and-coxeter-chain-labels` |
| 16 | `bruhat-interval-labels-shellings-and-mobius-functions-examples` | B | coxeter-groups | 1749 | `bruhat-interval-labels-shellings-and-mobius-functions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `parabolic-subgroups-and-double-coset-geometry` — Parabolic Subgroups and Double Coset Geometry (5 item(s))

- `def-cg-parabolic-quotient-and-two-sided-minima` · definition — Standard parabolic subgroups, descent-free one- and two-sided representatives, parabolic and reflection subgroups
- `thm-cg-parabolic-intersections-and-coset-factorization` · theorem — Intersections of standard parabolics, the parabolic root subsystem, and global minimality of coset representatives
- `lem-cg-double-coset-descent-reduction-and-minimality` · lemma — Descent reduction, minimum-length elements, and the additive factorization in a double coset
- `lem-cg-double-coset-intersection-parabolic` · lemma — The parabolic intersection W_I cap dW_Jd inverse for d in ^IW^J
- `thm-cg-double-coset-unique-minimum-and-normal-form` · theorem — Unique minimal double coset representatives and the additive normal form u-d-v

### `parabolic-subgroups-and-double-coset-geometry-examples` — Parabolic Subgroups and Double Coset Geometry — Examples (3 item(s))

- `ex-cg-s4-coset-minima-and-double-coset-decomposition` · example — Left and right coset minima and a double coset decomposition in S4
- `ex-cg-infinite-dihedral-parabolic-double-cosets` · example — Parabolic double cosets of the infinite dihedral group
- `ex-cg-reflection-subgroups-parabolic-and-not` · example — Reflection subgroups that are parabolic but not standard, and one that is not parabolic

### `bruhat-subword-order-and-lifting` — Bruhat Subword Order and Lifting (6 item(s))

- `def-cg-bruhat-order-by-reflection-chains` · definition — The Bruhat graph by length-increasing reflection chains, the Bruhat order, inversion symmetry, and reflection parity
- `lem-cg-bruhat-right-exchange-and-augmentation` · lemma — Right-handed strong exchange and the augmentation step for reduced subwords
- `thm-cg-bruhat-subword-characterization` · theorem — The subword characterization of Bruhat order and its independence of the reduced expression
- `lem-cg-bruhat-chain-refinement-and-gradedness` · lemma — Finiteness of Bruhat intervals, the chain refinement property, and grading by length
- `thm-cg-bruhat-lifting-and-cover-criterion` · theorem — The lifting property in all four descent cases, the cover criterion, reflection deletion, and directedness
- `thm-cg-bruhat-parabolic-projection-and-quotients` · theorem — The minimal-coset projection onto W^I is order-preserving, and Bruhat order on the parabolic quotient W^I

### `bruhat-subword-order-and-lifting-examples` — Bruhat Subword Order and Lifting — Examples (4 item(s))

- `ex-cg-s4-subwords-and-covers` · example — Subwords, reflection deletions and the covers of the longest element in S4
- `ex-cg-s4-lifting-squares` · example — The four lifting squares in S4
- `ex-cg-s4-bruhat-versus-weak-comparability` · example — Bruhat versus weak comparability in S4
- `ex-cg-s4-subword-descriptions-agree` · example — Two reduced expressions of one element whose subword descriptions agree

### `bruhat-interval-labels-shellings-and-mobius-functions` — Bruhat Interval Labels, Shellings, and Mobius Functions (4 item(s))

- `def-cg-deletion-chain-labels-and-shelling` · definition — Deleted-position labels from a fixed reduced expression, the lexicographic shelling criterion, and Mobius data
- `lem-cg-bruhat-increasing-chain-and-local-descent-replacement` · lemma — At most one increasing chain, rank-two diamonds, the lexicographically first chain, and the local descent replacement
- `thm-cg-bruhat-deletion-label-shelling` · theorem — Deletion-labeled Bruhat intervals are lexicographically shellable, with the explicit earlier/later chain comparison
- `thm-cg-bruhat-eulerian-intervals-and-mobius` · theorem — Bruhat intervals are Eulerian: parity balance of the elements, and the Mobius function of a full interval

### `bruhat-interval-labels-shellings-and-mobius-functions-examples` — Bruhat Interval Labels, Shellings, and Mobius Functions - Examples (3 item(s))

- `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` · example — All maximal chains of a rank-three interval in S4, their deleted-position labels, and the lexicographically first chain
- `ex-cg-s4-rank-three-interval-mobius-from-recurrence` · example — The Mobius value of the rank-three interval [e,c] in S4 from the recurrence, with the parity and falling-chain checks
- `cex-cg-parabolic-quotient-interval-eulerian-claim-fails` · counterexample — A parabolic quotient interval of S4 whose Mobius value is 0, so the Eulerian sign formula does not extend to quotients

## Your seams

Your pages depend on another group's:

- `parabolic-subgroups-and-double-coset-geometry` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)
- `parabolic-subgroups-and-double-coset-geometry` requires `canonical-roots-signs-and-faithful-reflections` (group b, batch 7)
- `bruhat-subword-order-and-lifting` requires `canonical-roots-signs-and-faithful-reflections` (group b, batch 7)
- `bruhat-interval-labels-shellings-and-mobius-functions` requires `finite-lattice-projections-and-coxeter-chain-labels` (group d, batch 5)

Another group's pages depend on yours:

- `spherical-parabolic-cosets-and-the-davis-complex` (group d) requires your `parabolic-subgroups-and-double-coset-geometry`
- `coxeter-descents-poincare-polynomials-and-growth` (group h) requires your `parabolic-subgroups-and-double-coset-geometry`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `parabolic-subgroups-and-double-coset-geometry`
- `weak-order-inversions-and-lattice-operations` (group k) requires your `parabolic-subgroups-and-double-coset-geometry`

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
