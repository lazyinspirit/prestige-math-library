# Step 4 batch reviewer — batch **29**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **29**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["29"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 29 | `pseudo-arclength-continuation-and-fold-certificates` | A | the-inverse-function-theorem-completed, nonlinear-equations-and-newton-methods |
| 29 | `pseudo-arclength-continuation-and-fold-certificates-examples` | B | pseudo-arclength-continuation-and-fold-certificates |

## Your content, in full

### `pseudo-arclength-continuation-and-fold-certificates` — Pseudo arclength continuation and fold certificates

- `def-simple-fold-complement-splitting-and-projection` · definition — Complement splitting and range projection for a simple fold
- `lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound` · lemma — Invertibility and a norm bound for the pseudo-arclength bordered matrix
- `thm-augmented-residual-contraction-certificate` · theorem — A bounded residual and derivative error give a local root certificate
- `lem-regular-curve-chart-and-pseudo-arclength-predictor-defect` · lemma — A regular solution curve has a unique local arclength chart and a quadratic predictor defect
- `lem-simple-fold-complement-restriction-is-an-isomorphism` · lemma — The simple-fold complement restriction is an isomorphism
- `lem-transverse-hyperplane-selects-unique-local-branch-point` · lemma — A transverse predictor hyperplane selects one nearby point of a regular branch
- `thm-simple-fold-lyapunov-schmidt-parameterization` · theorem — A simple fold has a unique local Lyapunov–Schmidt chart and nonzero parameter curvature
- `thm-pseudo-arclength-local-newton-correction` · theorem — A transverse pseudo-arclength section has a locally quadratic Newton corrector
- `alg-pseudo-arclength-continuation-with-certified-local-corrector` · algorithm — Finite-budget pseudo-arclength continuation with a certified local corrector
- `thm-pseudo-arclength-finite-trace-partial-correctness-and-termination` · theorem — Certified pseudo-arclength traces are locally sound and conditionally terminate

### `pseudo-arclength-continuation-and-fold-certificates-examples` — Pseudo arclength continuation and fold certificates — Examples

- `ex-zero-tangent-angle-makes-bordered-corrector-singular` · example — A zero tangent angle makes the bordered corrector singular
- `ex-natural-parameterization-fails-at-x-squared-fold` · example — The natural parameter fails at the fold $x^2-\lambda=0$
- `ex-local-trace-misses-disconnected-branch` · example — A finite local trace misses a disconnected solution branch
- `ex-pseudo-arclength-crosses-x-squared-fold` · example — Pseudo arclength crosses the fold $x^2-\lambda=0$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `pseudo-arclength-continuation-and-fold-certificates` requires `nonlinear-equations-and-newton-methods`
- `local-bifurcation-normal-forms-and-numerical-certificates` requires `pseudo-arclength-continuation-and-fold-certificates`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `pseudo-arclength-continuation-and-fold-certificates`
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
