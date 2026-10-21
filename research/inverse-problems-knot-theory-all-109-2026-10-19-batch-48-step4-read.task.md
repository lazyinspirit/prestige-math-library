# Step 4 batch reviewer — batch **48**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **48**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["48"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 48 | `unrolled-inverse-solvers-and-generalization` | A | learned-reconstruction-targets-and-risk, iterative-regularization-and-early-stopping, automatic-differentiation-and-computational-graphs, proximal-gradient-and-accelerated-composite-optimization |
| 48 | `unrolled-inverse-solvers-and-generalization-examples` | B | unrolled-inverse-solvers-and-generalization |

## Your content, in full

### `unrolled-inverse-solvers-and-generalization` — Unrolled reconstruction and finite-iteration limits

- `lem-ip-unrolled-finite-domain-and-output-are-borel` · lemma — Finite unrolled domains and outputs are Borel
- `def-ip-unrolled-regularization-architecture` · definition — Unrolled regularization architecture
- `prop-ip-finite-unrolling-does-not-imply-regularization-convergence` · proposition — Finite unrolling alone gives no regularization convergence or risk guarantee

### `unrolled-inverse-solvers-and-generalization-examples` — Unrolled reconstruction and finite-iteration limits — Examples and Counterexamples

- `ex-ip-truncated-landweber-versus-learned-unrolling` · example — Exact truncated Landweber and a learned finite-depth update
- `cex-ip-finite-training-fit-fails-under-operator-shift` · counterexample — Zero training loss can fail under an operator shift

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `unrolled-inverse-solvers-and-generalization` requires `learned-reconstruction-targets-and-risk`
- `score-diffusion-inverse-solvers` requires `unrolled-inverse-solvers-and-generalization`
- `inverse-problem-benchmarking-and-shift` requires `unrolled-inverse-solvers-and-generalization`
- `open-frontiers-in-learned-inverse-problems` requires `unrolled-inverse-solvers-and-generalization`
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
