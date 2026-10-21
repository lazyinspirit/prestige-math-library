# Step 4 batch reviewer — batch **79**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **79**. Step-5 owning group: **aa**.
Return `group: "aa"` and `batches: ["79"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 79 | `smooth-sliceness-and-four-ball-genus-obstructions` | A | knot-exteriors-and-peripheral-systems, cyclic-branched-covers-and-knot-determinants, dehn-surgery-on-knots-and-homology, smooth-and-topological-knot-concordance, casson-gordon-invariants-and-sliceness-obstructions, khovanov-homology-detects-the-unknot, gauge-groups-and-representation-theory-interfaces, spin-geometry-dirac-and-index-theory |
| 79 | `smooth-sliceness-and-four-ball-genus-obstructions-examples` | B | smooth-sliceness-and-four-ball-genus-obstructions |

## Your content, in full

### `smooth-sliceness-and-four-ball-genus-obstructions` — Smooth sliceness and four-ball genus obstructions

- `def-integral-intersection-lattice-of-a-simply-connected-four-manifold` · definition — Integral intersection lattice of a simply connected four-manifold
- `lem-full-rank-unimodular-sublattice-has-index-one` · lemma — A full-rank unimodular sublattice has index one
- `lem-integral-intersection-pairing-is-unimodular` · lemma — The integral intersection pairing is unimodular for a simply connected four-manifold
- `def-asd-moduli-fredholm-index-and-lattice-setup` · definition — Sign-fixed self-dual moduli and deformation setup
- `def-intersection-lattice-of-a-four-manifold-with-boundary` · definition — Intersection lattice of a four-manifold with rational-homology-sphere boundary
- `def-e8-root-lattice` · definition — The E8 lattice from its Cartan Gram matrix
- `thm-asd-deformation-complex-index-formula` · theorem — Index formula for the sign-fixed self-dual deformation operator
- `lem-boundary-intersection-pairing-well-defined-and-nondegenerate` · lemma — The boundary intersection pairing is well defined and rationally nondegenerate
- `thm-e8-lattice-is-even-unimodular-and-nondiagonal` · theorem — The E8 lattice is even unimodular and is not diagonal
- `lem-taubes-positive-definite-instanton-existence` · lemma — Taubes existence of an irreducible self-dual instanton on a positive-definite four-manifold
- `thm-freedman-e8-topological-realization` · theorem — Topological realization of the E8 intersection form
- `lem-asd-regularity-perturbation-and-orientability` · lemma — Generic regularity and orientability for the sign-fixed self-dual moduli problem
- `lem-uhlenbeck-compactness-and-removable-singularities` · lemma — Uhlenbeck compactness and removable singularities for self-dual connections
- `lem-donaldson-reducible-ends-and-one-instanton-compactification` · lemma — Reducible ends and compactification of the one-instanton moduli space
- `thm-donaldson-definite-diagonalization` · theorem — Donaldson diagonalization theorem for positive-definite four-manifolds
- `lem-slice-branched-cover-produces-definite-four-manifold` · lemma — A slice-branched-cover gluing produces a closed definite four-manifold
- `cor-lattice-obstruction-to-smooth-sliceness` · corollary — Failure of a full-rank standard lattice embedding obstructs smooth sliceness under the gluing hypotheses

### `smooth-sliceness-and-four-ball-genus-obstructions-examples` — Smooth sliceness and four-ball genus obstructions — Examples and Counterexamples

- `ex-knot-kt-26-worked-cases` · example — E8 as the lattice input to a conditional sliceness obstruction
- `cex-knot-kt-26-boundary-case` · counterexample — The topological E8 manifold does not satisfy the smooth diagonalization conclusion

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `smooth-sliceness-and-four-ball-genus-obstructions` requires `knot-exteriors-and-peripheral-systems`
- `smooth-sliceness-and-four-ball-genus-obstructions` requires `cyclic-branched-covers-and-knot-determinants`
- `smooth-sliceness-and-four-ball-genus-obstructions` requires `dehn-surgery-on-knots-and-homology`
- `smooth-sliceness-and-four-ball-genus-obstructions` requires `smooth-and-topological-knot-concordance`
- `smooth-sliceness-and-four-ball-genus-obstructions` requires `casson-gordon-invariants-and-sliceness-obstructions`
- `smooth-sliceness-and-four-ball-genus-obstructions` requires `khovanov-homology-detects-the-unknot`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
