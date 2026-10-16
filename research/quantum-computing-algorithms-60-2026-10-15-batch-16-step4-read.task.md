# Step 4 batch reviewer — batch **16**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **16**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["16"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 16 | `stabilizer-circuits-and-gottesman-knill-simulation` | A | circuit-syntax-denotational-semantics-and-measurement, finite-averaging-and-character-theory-prerequisites, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, inner-product-spaces-and-orthogonality, linear-independence-bases-and-dimension, matrices-and-the-matrix-of-a-linear-map, measurements-povms-and-instruments, monoids-groups-and-subgroups, pauli-and-clifford-groups-binary-symplectic-tableaux, pure-and-mixed-states-ensembles-and-schmidt-decomposition, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, registers-tensor-products-and-partial-trace, the-spectral-theorem-and-singular-value-decomposition, linear-algebra-methods-in-combinatorics |
| 16 | `stabilizer-circuits-and-gottesman-knill-simulation-examples` | B | stabilizer-circuits-and-gottesman-knill-simulation |

## Your content, in full

### `stabilizer-circuits-and-gottesman-knill-simulation` — Stabilizer Circuits and Gottesman–Knill Simulation

- `def-qc-pauli-measurement-branch-semantics` · definition — Pauli measurement branch semantics
- `lem-qc-pauli-measurement-projectors` · lemma — Pauli measurement projectors and total probability
- `lem-qc-stabilizer-maximal-isotropic-self-dual` · lemma — A maximal stabilizer label space is self-dual
- `def-qc-stabilizer-subgroup` · definition — Stabilizer subgroup
- `lem-qc-pauli-measurement-defines-an-instrument` · lemma — Pauli projectors define a finite measurement instrument
- `lem-qc-pauli-measurement-positive-branch-is-density` · lemma — Positive-probability Pauli branches are density operators
- `lem-qc-zero-probability-branch` · lemma — Zero-probability Pauli measurement branch
- `def-qc-adaptive-pauli-circuit-tree` · definition — Finite adaptive Pauli-measurement circuit tree
- `def-qc-stabilizer-state` · definition — Stabilizer state
- `lem-qc-stabilizer-subgroup-label-space-and-order` · lemma — Stabilizer labels form an isotropic space of the same rank
- `lem-qc-stabilizer-average-projector` · lemma — Stabilizer average is the fixed-space projector
- `def-qc-stabilizer-tableau` · definition — Phase-aware stabilizer tableau
- `lem-qc-anticommuting-stabilizer-measurement-is-fair` · lemma — An anticommuting stabilizer measurement is fair
- `lem-qc-computational-basis-stabilizer-tableau` · lemma — Computational basis states have an extended stabilizer tableau
- `lem-qc-tableau-clifford-update` · lemma — Phase-aware tableau updates for Clifford generators
- `lem-qc-tableau-deterministic-sign` · lemma — Tableau row reduction returns the deterministic Pauli sign
- `thm-qc-stabilizer-projector-rank-and-code-dimension` · theorem — Stabilizer projector rank and code dimension
- `lem-qc-deterministic-stabilizer-measurement` · lemma — Deterministic Pauli measurement on a pure stabilizer state
- `lem-qc-random-measurement-stabilizer-update` · lemma — Random Pauli measurement updates stabilizer generators
- `alg-qc-stabilizer-exact-simulator` · algorithm — Exact generator-tableau simulator for stabilizer circuits
- `thm-qc-tableau-measurement-update` · theorem — Phase-aware tableau measurement agrees with the projective instrument
- `thm-qc-gottesman-knill-exact-simulation` · theorem — Exact Gottesman–Knill simulation with measurement

### `stabilizer-circuits-and-gottesman-knill-simulation-examples` — Stabilizer Circuits and Gottesman–Knill Simulation — Examples

- `ex-qc-stabilizer-x-measurement-branches` · example — Stabilizer measurement on $|0\rangle$ in the $X$ basis

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `circuit-syntax-denotational-semantics-and-measurement`
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `measurements-povms-and-instruments`
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `pauli-and-clifford-groups-binary-symplectic-tableaux`
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `registers-tensor-products-and-partial-trace`
- `stabilizer-css-codes-syndromes-and-procedures` requires `stabilizer-circuits-and-gottesman-knill-simulation`
- `graph-states-and-measurement-based-computation` requires `stabilizer-circuits-and-gottesman-knill-simulation`
---

# Step 4 Alpha batch reviewer — read-only digest, `quantum-computing-algorithms-60-2026-10-15`

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
