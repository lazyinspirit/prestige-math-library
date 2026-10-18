# Step 4 batch reviewer — batch **30**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **30**. Step-5 owning group: **aa**.
Return `group: "aa"` and `batches: ["30"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 30 | `toric-code-anyons-logical-operators-and-protection` | A | stabilizer-css-codes-syndromes-and-procedures |
| 30 | `toric-code-anyons-logical-operators-and-protection-examples` | B | toric-code-anyons-logical-operators-and-protection |

## Your content, in full

### `toric-code-anyons-logical-operators-and-protection` — Toric Code Anyons, Logical Operators, and Protection

- `def-qc-tqc-periodic-square-cellulation` · definition — Periodic square cellulation of the torus
- `lem-qc-tqc-finite-square-cycle-is-boundary` · lemma — Finite square-lattice cycles are boundaries
- `def-qc-tqc-toric-checks` · definition — Toric star and plaquette checks
- `lem-qc-tqc-contractible-disk-lifts-to-plane` · lemma — A contractible toric disk lifts to the square grid
- `lem-qc-tqc-toric-incidence-ranks` · lemma — Toric incidence maps have exactly one relation each
- `def-qc-tqc-toric-excitations` · definition — Toric e and m syndromes
- `lem-qc-tqc-toric-check-commutation` · lemma — Toric checks commute and have two global relations
- `lem-qc-tqc-toric-cycle-quotient` · lemma — Toric cycle classes are determined by two winding parities
- `def-qc-tqc-toric-hamiltonian` · definition — Finite toric-code Hamiltonian
- `lem-qc-tqc-toric-joint-check-eigenspaces` · lemma — Toric checks decompose into joint syndrome eigenspaces
- `lem-qc-tqc-toric-string-syndrome` · lemma — Open toric strings have endpoint syndromes
- `thm-qc-tqc-toric-code-dimension` · theorem — The periodic toric code encodes two qubits
- `def-qc-tqc-toric-logical-loops` · definition — Noncontractible toric logical loops
- `thm-qc-tqc-toric-gap` · theorem — Exact finite-volume toric-code gap
- `thm-qc-tqc-toric-local-indistinguishability` · theorem — Exact indistinguishability in a contractible disk
- `thm-qc-tqc-toric-mutual-sign` · theorem — A single primal-dual crossing anticommutes
- `def-qc-tqc-toric-energy-barrier` · definition — Pauli-path energy barrier
- `thm-qc-tqc-toric-distance` · theorem — Toric code distance is L
- `thm-qc-tqc-toric-logical-algebra` · theorem — Two anticommuting toric logical Pauli pairs
- `thm-qc-tqc-toric-constant-barrier` · theorem — A toric logical string has constant energy barrier
- `thm-qc-tqc-toric-recovery` · theorem — Toric code corrects Pauli errors below half the distance
- `cex-qc-tqc-gap-not-physical-protection` · counterexample — A finite toric gap does not imply arbitrary perturbation stability

### `toric-code-anyons-logical-operators-and-protection-examples` — Toric Code Anyons, Logical Operators, and Protection — Examples

- `ex-qc-tqc-l3-toric-checks` · example — L=3 torus checks and syndrome calculation
- `cex-qc-tqc-planar-is-not-toric` · counterexample — Planar and periodic surface-code distances differ

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `topological-quantum-algorithms-and-braid-compilation` requires `toric-code-anyons-logical-operators-and-protection`
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
