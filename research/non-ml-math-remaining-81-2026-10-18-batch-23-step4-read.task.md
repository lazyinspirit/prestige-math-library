# Step 4 batch reviewer — batch **23**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **23**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["23"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 23 | `quantum-source-compression-and-cq-capacity` | A | quantum-relative-entropy-data-processing-and-strong-subadditivity, iid-lossless-source-coding-and-the-aep, finite-basis-projector-energies-and-variational-electronic-structure, quantum-optimization-sdp-and-variational-algorithms |
| 23 | `quantum-source-compression-and-cq-capacity-examples` | B | quantum-source-compression-and-cq-capacity |

## Your content, in full

### `quantum-source-compression-and-cq-capacity` — Quantum Source Compression and Classical Communication over Quantum Channels

- `lem-it-finite-gentle-measurement` · lemma — Gentle measurement bound in finite dimensions
- `lem-it-finite-positive-square-root-is-order-preserving` · lemma — The finite positive square root preserves operator order
- `lem-it-hayashi-nagaoka-finite-operator-inequality` · lemma — Finite Hayashi–Nagaoka operator inequality
- `def-it-quantum-source-and-compression-code` · definition — Finite IID quantum source and compression code
- `lem-it-finite-quantum-entropy-continuity` · lemma — Continuity of finite-dimensional quantum entropy
- `lem-it-square-root-cq-packing-bound` · lemma — Finite square-root measurement packing bound for cq states
- `lem-it-schmidt-rank-compression-fidelity-bound` · lemma — Compression dimension bounds entanglement fidelity
- `def-it-classical-quantum-memoryless-channel` · definition — Finite-input memoryless cq channel
- `def-it-cq-channel-block-code-and-error` · definition — Finite cq block codes, average error, and capacity
- `lem-it-cq-typical-projector-dimension` · lemma — Typical-projector bounds for finite quantum sources and cq ensembles
- `thm-it-schumacher-quantum-source-coding` · theorem — Finite-dimensional Schumacher quantum source coding theorem
- `thm-it-hsw-classical-quantum-channel-capacity` · theorem — Holevo–Schumacher–Westmoreland capacity theorem for finite cq channels

### `quantum-source-compression-and-cq-capacity-examples` — Quantum Source Compression and Classical Communication over Quantum Channels — Examples

- `ex-it-qubit-source-compression` · example — Schumacher compression of a diagonal qubit source
- `cex-it-ensemble-holevo-information-is-not-measured-by-a-fixed-povm` · counterexample — A fixed POVM need not attain ensemble Holevo information
- `ex-it-cq-binary-pure-state-channel` · example — Holevo information of an equiprobable binary pure-state channel

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-source-compression-and-cq-capacity` requires `quantum-relative-entropy-data-processing-and-strong-subadditivity`
- `quantum-source-compression-and-cq-capacity` requires `iid-lossless-source-coding-and-the-aep`
- `quantum-channel-capacities-and-entanglement-assistance` requires `quantum-source-compression-and-cq-capacity`
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
