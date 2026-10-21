# Step 4 batch reviewer — batch **107**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **107**. Step-5 owning group: **aj**.
Return `group: "aj"` and `batches: ["107"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 107 | `bridge-presentations-and-unknotting-number` | A | wirtinger-presentations-and-knot-groups, crossing-signs-writhe-and-linking-number, connected-sums-and-prime-decomposition, levine-tristram-signatures-and-arf-invariant, zero-traces-and-conway-nonsliceness |
| 107 | `bridge-presentations-and-unknotting-number-examples` | B | bridge-presentations-and-unknotting-number |

## Your content, in full

### `bridge-presentations-and-unknotting-number` — Bridge presentations and unknotting number

- `lem-knot-admits-morse-height-representative` · lemma — Every smooth knot has a Morse representative for the fixed height
- `lem-one-extremum-arc-is-boundary-parallel` · lemma — An arc with one height extremum is boundary-parallel
- `lem-rank-one-hermitian-signature-perturbation` · lemma — A rank-one Hermitian perturbation changes signature by at most two
- `alg-descending-diagram-unknotting-sequence` · algorithm — Descending-diagram crossing-change sequence
- `lem-regular-projection-admits-finite-planar-code` · lemma — Every regular knot projection admits a finite rational planar code
- `thm-descending-diagram-unknotting-sequence-procedure-properties` · theorem — The descending-diagram procedure terminates on admissible finite codes
- `thm-descending-diagram-is-unknot` · theorem — A descending based knot diagram represents the unknot
- `lem-seifert-matrices-differ-rank-one-under-crossing-change` · lemma — One crossing change changes a Seifert matrix by rank at most one
- `thm-every-knot-has-unknotting-sequence` · theorem — Every smooth knot has a finite crossing-change sequence to the unknot
- `def-knot-bridge-position-and-unknotting-number` · definition — Bridge number and unknotting number of an oriented knot
- `lem-bridge-sphere-normalization` · lemma — Normalize a decomposing sphere relative to a bridge sphere
- `thm-bridge-one-is-unknot` · theorem — Bridge number one characterizes the unknot
- `thm-descending-diagram-is-unknot-and-finite-bounds` · theorem — Descending diagrams are unknotted and unknotting number is finite
- `thm-schubert-bridge-connected-sum` · theorem — Bridge number is additive under connected sum minus one
- `thm-unknotting-number-at-least-half-levine-tristram-signature` · theorem — The classical signature bounds unknotting number
- `thm-bridge-one-is-unknot-and-signature-crossing-change-bound` · theorem — Bridge number one characterizes the unknot and signature bounds unknotting number

### `bridge-presentations-and-unknotting-number-examples` — Bridge presentations and unknotting number — Examples and Counterexamples

- `cex-diagram-crossing-count-is-not-unknotting-number` · counterexample — Diagram crossing count can differ from unknotting number
- `ex-trefoil-bridge-and-unknotting-numbers` · example — Bridge and unknotting numbers of the trefoil

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `bridge-presentations-and-unknotting-number` requires `wirtinger-presentations-and-knot-groups`
- `bridge-presentations-and-unknotting-number` requires `crossing-signs-writhe-and-linking-number`
- `bridge-presentations-and-unknotting-number` requires `connected-sums-and-prime-decomposition`
- `bridge-presentations-and-unknotting-number` requires `levine-tristram-signatures-and-arf-invariant`
- `bridge-presentations-and-unknotting-number` requires `zero-traces-and-conway-nonsliceness`
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
