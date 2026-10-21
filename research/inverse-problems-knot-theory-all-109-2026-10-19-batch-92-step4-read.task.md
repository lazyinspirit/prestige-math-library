# Step 4 batch reviewer — batch **92**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **92**. Step-5 owning group: **ae**.
Return `group: "ae"` and `batches: ["92"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 92 | `grid-homology-and-combinatorial-knot-floer-theory` | A | seifert-surfaces-and-knot-genus, smooth-and-topological-knot-concordance, real-clifford-modules-ko-and-abs-orientations |
| 92 | `grid-homology-and-combinatorial-knot-floer-theory-examples` | B | grid-homology-and-combinatorial-knot-floer-theory |

## Your content, in full

### `grid-homology-and-combinatorial-knot-floer-theory` — Grid homology and combinatorial knot Floer theory

- `def-admissible-pointed-heegaard-floer-data` · definition — Admissible multipointed Heegaard data for knot Floer complexes
- `def-grid-diagram-for-an-oriented-knot` · definition — Toroidal grid diagrams and gradings for oriented knots
- `def-hat-heegaard-floer-complex-of-a-closed-three-manifold` · definition — Hat Heegaard Floer complex of a closed three-manifold
- `lem-grid-alexander-grading-integral` · lemma — Integrality and rectangle changes of the grid Alexander grading
- `lem-grid-diagram-is-admissible` · lemma — A knot grid diagram is admissible
- `lem-standard-unknot-hat-diagram-rank-one` · lemma — The standard genus-zero hat diagram of the unknot has rank one
- `thm-grid-moves-generate-oriented-knot-isotopy` · theorem — Grid moves generate isotopy of oriented knots
- `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing` · lemma — Regularity, compactness, and gluing for pointed Heegaard disks
- `def-knot-floer-filtration-and-tau` · definition — The Alexander filtration and tau level
- `lem-os-disk-and-polygon-analytic-foundations` · lemma — Analytic foundations for disk and polygon counts
- `alg-grid-knot-floer-complex` · algorithm — Finite grid complexes for knot Floer theory
- `lem-knot-floer-duality-and-filtration-swap` · lemma — Knot Floer duality and exchange of the two filtrations
- `lem-tau-preserved-by-filtered-chain-homotopy-equivalence` · lemma — The tau level is preserved by filtered chain homotopy equivalence
- `lem-grid-rectangle-boundary-square-zero-and-filtration` · lemma — Rectangle-boundary pairings and grading changes in grid complexes
- `thm-grid-knot-floer-complex-procedure-properties` · theorem — Termination and exact output of the grid-complex algorithm
- `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant` · theorem — Hat Heegaard Floer homology is a closed three-manifold invariant
- `thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization` · theorem — Invariance of the multipointed Heegaard Floer complex
- `lem-grid-rectangle-differential-squares-to-zero` · lemma — The three grid rectangle differentials square to zero
- `lem-grid-2x2-unknot-tilde-rank-two` · lemma — The 2-by-2 unknot grid has tilde homology of rank two
- `lem-grid-3x3-unknot-tilde-rank-four` · lemma — A 3-by-3 unknot grid has tilde homology of rank four
- `lem-grid-marking-variables-chain-homotopic` · lemma — Basepoint variables act chain homotopically on a knot grid
- `thm-grid-commutation-stabilization-invariance-proof` · theorem — Commutation and stabilization invariance of grid complexes
- `thm-grid-homology-independent-of-grid-and-equals-knot-floer` · theorem — Grid homology is independent of the grid and computes knot Floer homology
- `lem-tau-is-independent-of-heegaard-grid` · lemma — The tau level is independent of the normalized Heegaard model

### `grid-homology-and-combinatorial-knot-floer-theory-examples` — Grid homology and combinatorial knot Floer theory — Examples and Counterexamples

- `ex-knot-kt-39-worked-cases` · example — Worked grid-complex cases for the unknot
- `cex-knot-kt-39-boundary-case` · counterexample — Raw tilde grid homology depends on the unknot grid

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `grid-homology-and-combinatorial-knot-floer-theory` requires `seifert-surfaces-and-knot-genus`
- `grid-homology-and-combinatorial-knot-floer-theory` requires `smooth-and-topological-knot-concordance`
- `lee-deformation-and-rasmussen-s-invariant` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `knot-cobordism-maps-and-functoriality` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `tau-invariant-and-the-four-ball-genus` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `epsilon-and-upsilon-concordance-invariants` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `knot-floer-genus-and-fiberedness-detection` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `khovanov-to-floer-spectral-sequence` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `branched-cover-correction-terms-and-sliceness` requires `grid-homology-and-combinatorial-knot-floer-theory`
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
