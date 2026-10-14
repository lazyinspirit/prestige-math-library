# Step 4 batch reviewer — batch **28**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **28**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["28"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 28 | `semiparametric-models-and-tangent-spaces` | A | dominated-experiments-likelihood-and-sufficiency, local-asymptotic-normality-contiguity-and-efficiency, hilbert-space-geometry-and-riesz-representation |
| 28 | `semiparametric-models-and-tangent-spaces-examples` | B | semiparametric-models-and-tangent-spaces |

## Your content, in full

### `semiparametric-models-and-tangent-spaces` — Semiparametric Models and Tangent Spaces

- `def-mean-zero-square-integrable-space` · definition — Mean-zero square-integrable functions
- `def-dqm-submodel-through-a-law` · definition — A dominated differentiable-in-quadratic-mean submodel
- `thm-mean-zero-square-integrable-space-is-hilbert` · theorem — The mean-zero L² space is a Hilbert space
- `thm-dqm-score-mean-zero` · theorem — A DQM score has mean zero and is unique
- `def-tangent-set` · definition — Tangent set of a statistical model at a law
- `def-tangent-space` · definition — Closed tangent space
- `thm-tangent-space-is-closed-linear-subspace` · theorem — A tangent space is a closed linear subspace
- `def-nuisance-tangent-space` · definition — Nuisance tangent space
- `def-nuisance-tangent-orthogonal-complement` · definition — Orthogonal complement of a nuisance tangent space

### `semiparametric-models-and-tangent-spaces-examples` — Semiparametric Models and Tangent Spaces — Examples

- `ex-bounded-scores-generate-unrestricted-tangent-space` · example — Bounded mean-zero scores generate the unrestricted tangent space
- `ex-regular-bernoulli-submodel-dqm-score` · example — A regular Bernoulli submodel and its score
- `ex-boundary-score-cone-and-linear-tangent-space` · example — A boundary score cone differs from its tangent space

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `semiparametric-models-and-tangent-spaces` requires `dominated-experiments-likelihood-and-sufficiency`
- `semiparametric-models-and-tangent-spaces` requires `local-asymptotic-normality-contiguity-and-efficiency`
- `pathwise-differentiability-influence-functions-and-efficient-scores` requires `semiparametric-models-and-tangent-spaces`
---

# Step 4 Alpha batch reviewer — read-only digest, `mathematical-statistics-foundations-37`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
