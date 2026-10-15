# Step 4 batch reviewer — batch **11**, run `hopf-hecke-unfinished-15-2026-10-15`

You are the only reviewer for batch **11**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["11"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 11 | `hecke-base-change-semisimplicity-and-deformation` | A | tensor-coherence-and-algebraic-descent, generic-coxeter-hecke-algebras-and-the-standard-basis, hecke-parabolic-induction-and-symmetrizing-traces, chain-conditions-and-semisimple-modules, formal-power-series |
| 11 | `hecke-base-change-semisimplicity-and-deformation-examples` | B | hecke-base-change-semisimplicity-and-deformation |

## Your content, in full

### `hecke-base-change-semisimplicity-and-deformation` — Hecke Base Change, Semisimplicity, and Deformation

- `def-hh-specialization-and-regular-trace-determinant` · definition — Finite Hecke specialization and its regular-trace determinant
- `lem-hh-one-parameter-formal-series-local-ring` · lemma — The one-parameter formal-series ring is complete, separated, and has residue field $k$
- `lem-hh-finite-direct-summands-over-khh-are-free` · lemma — Finite direct summands over a formal-series ring are free with rank read from reduction
- `lem-hh-idempotents-lift-over-formal-power-series-rings` · lemma — Orthogonal idempotents lift over a complete formal power-series ring
- `lem-hh-regular-trace-criterion-in-characteristic-zero` · lemma — A nondegenerate regular-trace pairing forces semisimplicity
- `lem-hh-formal-deformation-matrix-unit-lifting` · lemma — Matrix units lift through a finite free split formal deformation
- `thm-hh-generic-finite-hecke-semisimplicity` · theorem — Finite Coxeter Hecke algebras are semisimple over the generic characteristic-zero field
- `thm-hh-split-deformation-labels-and-exceptional-parameters` · theorem — Split formal deformations preserve simple-block labels; the trace determinant bounds exceptional parameters

### `hecke-base-change-semisimplicity-and-deformation-examples` — Hecke Base Change, Semisimplicity, and Deformation — Examples

- `cex-hh-nondegenerate-symmetrizing-trace-does-not-imply-semisimplicity` · counterexample — A rank-one Hecke algebra with a perfect symmetrizing form and degenerate regular trace
- `ex-hh-two-dimensional-formal-split-deformation` · example — Explicitly lifting the two simple labels in a formal rank-two algebra

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hecke-base-change-semisimplicity-and-deformation` requires `hecke-parabolic-induction-and-symmetrizing-traces`
- `hecke-symmetries-and-generic-quantum-schur-weyl-duality` requires `hecke-base-change-semisimplicity-and-deformation`
---

# Step 4 Alpha batch reviewer — read-only digest, `hopf-hecke-unfinished-15-2026-10-15`

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
