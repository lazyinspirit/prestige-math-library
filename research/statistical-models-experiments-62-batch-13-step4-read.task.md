# Step 4 batch reviewer — batch **13**, run `statistical-models-experiments-62`

You are the only reviewer for batch **13**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["13"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 13 | `blocking-and-paired-designs` | A | randomized-treatment-assignment-and-sharp-null-tests, estimators-and-randomized-procedures, gaussian-orthogonal-decomposition-and-quadratic-forms, probability-spaces-random-variables-and-expectation |
| 13 | `blocking-and-paired-designs-examples` | B | blocking-and-paired-designs |

## Your content, in full

### `blocking-and-paired-designs` — Blocking, pairs, and Latin squares

- `def-randomized-complete-block-design` · definition — Randomized complete-block design
- `lem-rcbd-nested-contrast-model-and-projection` · lemma — Nested contrast models and projections in a balanced block design
- `def-randomized-latin-square-design` · definition — Randomized Latin-square design
- `thm-paired-randomization-contrast-moments` · theorem — Design expectation and variance of a paired contrast
- `lem-randomly-selected-unit-effect-moments` · lemma — Moments of the effect for the randomly selected treated unit
- `prop-rcbd-treatment-block-interaction-confounded-with-residual` · proposition — One cell observation confounds unrestricted interaction with residual error
- `thm-rcbd-treatment-contrast-f-law` · theorem — Exact Gaussian F law for RCBD treatment contrasts

### `blocking-and-paired-designs-examples` — Blocking, pairs, and Latin squares — Examples

- `ex-missing-treatment-is-not-a-complete-block` · example — A missing treatment falls outside the complete-block assignment space
- `ex-latin-square-assignment-is-restricted` · example — A Latin-square assignment is a strict subset of RCBD assignments
- `ex-paired-randomization-contrast-with-heterogeneous-effects` · example — A paired contrast with unequal unit-level effects
- `ex-rcbd-interaction-shares-the-residual-subspace` · example — A two-by-two interaction and error share one residual array
- `cex-observed-paired-contrast-variance-is-not-effect-heterogeneity` · counterexample — Observed paired-contrast variance is not determined by effect heterogeneity

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `blocking-and-paired-designs` requires `randomized-treatment-assignment-and-sharp-null-tests`
---

# Step 4 Alpha batch reviewer — read-only digest, `statistical-models-experiments-62`

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
