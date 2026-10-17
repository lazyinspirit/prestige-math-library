# Step 4 batch reviewer — batch **70**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **70**. Step-5 owning group: **aa**.
Return `group: "aa"` and `batches: ["70"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 70 | `nonlinear-conjugate-gradient-methods` | A | krylov-methods-and-lanczos-convergence, nonconvex-line-search-and-inexact-newton-methods |
| 70 | `nonlinear-conjugate-gradient-methods-examples` | B | nonlinear-conjugate-gradient-methods |

## Your content, in full

### `nonlinear-conjugate-gradient-methods` — Nonlinear conjugate gradient methods

- `alg-nonlinear-conjugate-gradient-methods` · algorithm — Fletcher–Reeves and safeguarded Polak–Ribière nonlinear conjugate gradients
- `lem-fr-descent-and-direction-growth-bound` · lemma — Fletcher–Reeves descent and direction-growth bound
- `lem-safeguarded-pr-plus-uniform-angle` · lemma — The safeguarded PR+ direction has a uniform angle bound
- `thm-nonlinear-cg-finite-budget-terminates` · theorem — Finite-budget nonlinear conjugate gradient returns a status
- `thm-fr-and-raw-prplus-exact-line-search-match-linear-cg` · theorem — FR and unrestarted PR+ match linear CG on SPD quadratics
- `thm-fletcher-reeves-liminf-gradient-under-strong-wolfe` · theorem — Fletcher–Reeves has vanishing gradient liminf under strong Wolfe
- `thm-safeguarded-pr-plus-gradient-norms-converge` · theorem — Safeguarded PR+ converges in gradient norm under strong Wolfe

### `nonlinear-conjugate-gradient-methods-examples` — Nonlinear conjugate gradient methods — Examples

- `ex-rosenbrock-fr-prplus-trace` · example — One accepted Rosenbrock step gives different FR and PR+ coefficients
- `cex-raw-prplus-loses-descent-and-safeguard-restarts` · counterexample — A strong Wolfe step can leave PR+ ascending; the safeguard restarts
- `ex-spd-quadratic-nonlinear-cg-matches-linear-cg` · example — A two-dimensional SPD quadratic gives the same FR and linear-CG trace

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `nonlinear-conjugate-gradient-methods` requires `krylov-methods-and-lanczos-convergence`
- `nonlinear-conjugate-gradient-methods` requires `nonconvex-line-search-and-inexact-newton-methods`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
