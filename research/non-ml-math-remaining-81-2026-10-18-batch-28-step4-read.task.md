# Step 4 batch reviewer — batch **28**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **28**. Step-5 owning group: **aa**.
Return `group: "aa"` and `batches: ["28"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 28 | `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models` | A | yang-baxter-operators-and-quantum-braid-representations, hecke-symmetries-and-generic-quantum-schur-weyl-duality, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces |
| 28 | `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models-examples` | B | unitary-fusion-spaces-f-and-r-symbols-and-anyon-models |

## Your content, in full

### `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models` — Unitary Fusion Spaces, F/R Symbols, and Anyon Models

- `cex-qc-tqc-algebraic-braid-not-unitary` · counterexample — Algebraic braid relations do not imply unitarity
- `def-qc-tqc-unitary-fusion-category` · definition — Unitary fusion category
- `def-qc-tqc-fusion-multiplicity-space` · definition — Fusion multiplicity space
- `def-qc-tqc-ribbon-modular-data` · definition — Unitary ribbon data
- `def-qc-tqc-modularity` · definition — Modular nondegeneracy
- `def-qc-tqc-topological-spin` · definition — Topological spin
- `thm-qc-tqc-fusion-multiplicity-space-is-hilbert` · theorem — Fusion multiplicity spaces are finite-dimensional inner-product spaces
- `thm-qc-tqc-ribbon-link-invariant` · theorem — Ribbon evaluation and framed anyon links
- `def-qc-tqc-fusion-tree-basis` · definition — Multiplicity-aware fusion-tree basis
- `def-qc-tqc-gauge-transform` · definition — Fusion-basis gauge change
- `def-qc-tqc-r-symbol` · definition — R-symbol as a channel exchange map
- `lem-qc-tqc-fusion-tree-dimension` · lemma — Fusion-tree basis and dimension recursion
- `thm-qc-tqc-r-symbol-unitary` · theorem — R-symbol unitarity
- `def-qc-tqc-f-symbol` · definition — F-symbol as a recoupling matrix
- `ex-qc-tqc-fibonacci-data` · example — Fibonacci fusion data and chiral convention
- `ex-qc-tqc-ising-data` · example — Ising fusion data and chiral convention
- `thm-qc-tqc-f-symbol-unitary` · theorem — F-symbol unitarity
- `thm-qc-tqc-hexagon-coordinates` · theorem — Hexagon in F/R coordinates
- `thm-qc-tqc-pentagon-coordinates` · theorem — Pentagon in fusion-tree coordinates
- `thm-qc-tqc-gauge-covariance` · theorem — Gauge covariance of fusion-space braid actions

### `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models-examples` — Unitary Fusion Spaces, F/R Symbols, and Anyon Models — Examples

- `cex-qc-tqc-hecke-not-positive` · counterexample — A Hecke parameter does not certify a positive unitary structure
- `ex-qc-tqc-small-model-matrices` · example — Worked Fibonacci and Ising braid matrices

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `noninvertible-symmetries-and-anyonic-chains` requires `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models`
- `topological-braid-gates-encodings-and-universality` requires `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models`
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
