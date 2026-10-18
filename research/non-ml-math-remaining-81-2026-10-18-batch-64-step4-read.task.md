# Step 4 batch reviewer — batch **64**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **64**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["64"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 64 | `hopf-hecke-and-quantum-symmetry-interfaces` | A | algebraic-representation-and-tensor-symmetry-map, hecke-symmetries-and-generic-quantum-schur-weyl-duality, yang-baxter-operators-and-quantum-braid-representations, klr-algebras-induction-and-quantum-serre-categorification |
| 64 | `hopf-hecke-and-quantum-symmetry-interfaces-examples` | B | hopf-hecke-and-quantum-symmetry-interfaces |

## Your content, in full

### `hopf-hecke-and-quantum-symmetry-interfaces` — Hopf, Hecke, Quantum-Group, and Braid Interfaces

- `def-hh-rational-spectral-r-matrix` · definition — The rational spin-1/2 spectral R-matrix
- `lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter` · lemma — The rational spin-1/2 spectral R-matrix satisfies Yang-Baxter

### `hopf-hecke-and-quantum-symmetry-interfaces-examples` — Hopf, Hecke, Quantum-Group, and Braid Interfaces: Examples and Counterexamples

- `ex-hh-rank-one-hecke-specializations-at-q-i` · example — Rank-one Hecke specializations can be semisimple or nonsemisimple
- `ex-hh-rational-spectral-r-matrix-singular-parameters` · example — The rational spectral R-matrix has singular parameter values

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hopf-hecke-and-quantum-symmetry-interfaces` requires `algebraic-representation-and-tensor-symmetry-map`
- `yangians-quantum-affine-and-transfer-matrices` requires `hopf-hecke-and-quantum-symmetry-interfaces`
- `quantum-groups-at-roots-of-unity-and-tilting-quotients` requires `hopf-hecke-and-quantum-symmetry-interfaces`
- `noninvertible-symmetries-and-anyonic-chains` requires `hopf-hecke-and-quantum-symmetry-interfaces`
- `quasi-hopf-weak-hopf-and-relative-tensor-products` requires `hopf-hecke-and-quantum-symmetry-interfaces`
- `unequal-parameter-hecke-cells-and-representations` requires `hopf-hecke-and-quantum-symmetry-interfaces`
- `affine-hecke-algebras-beyond-type-a` requires `hopf-hecke-and-quantum-symmetry-interfaces`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
