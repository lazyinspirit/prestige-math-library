# Step 4 batch reviewer — batch **71**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **71**. Step-5 owning group: **aa**.
Return `group: "aa"` and `batches: ["71"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 71 | `bfgs-and-limited-memory-quasi-newton-methods` | A | finite-precision-direct-factorizations, nonconvex-line-search-and-inexact-newton-methods |
| 71 | `bfgs-and-limited-memory-quasi-newton-methods-examples` | B | bfgs-and-limited-memory-quasi-newton-methods |

## Your content, in full

### `bfgs-and-limited-memory-quasi-newton-methods` — Bfgs and limited memory quasi newton methods

- `def-bfgs-curvature-pair-and-update-formulas` · definition — Bfgs curvature pairs and Hessian/inverse updates
- `lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder` · lemma — Uniform Hessian bounds control gradient changes and Taylor remainders
- `lem-bfgs-updates-preserve-secant-symmetry-and-spd` · lemma — Bfgs updates preserve the secant equations, symmetry, and positive definiteness
- `lem-wolfe-steps-give-positive-bfgs-curvature` · lemma — A Wolfe step gives positive Bfgs curvature on a descent direction
- `lem-powell-damping-gives-positive-curvature` · lemma — Powell damping gives a strictly positive curvature pair
- `alg-bfgs-hessian-direction-with-rounded-cholesky` · algorithm — Bfgs Hessian direction by failure-aware Cholesky solve
- `alg-lbfgs-two-loop-with-curvature-filter` · algorithm — Limited-memory Bfgs two-loop recursion with curvature filtering
- `lem-bfgs-trace-determinant-potential-identities` · lemma — Bfgs trace and determinant identities give a matrix potential inequality
- `alg-full-memory-bfgs-with-curvature-safeguards` · algorithm — Full-memory Bfgs with Wolfe search, descent reset, and Powell damping
- `lem-lbfgs-two-loop-equals-stored-updates-and-cost` · lemma — The L-Bfgs two-loop recursion equals the stored inverse updates and costs linear memory work
- `thm-full-memory-bfgs-global-linear-convergence` · theorem — Full-memory Bfgs converges globally and linearly on a uniformly strongly convex level set
- `lem-lbfgs-curvature-bounds-imply-uniform-spectrum` · lemma — Fixed-memory L-Bfgs curvature and scale bounds imply uniform spectral bounds
- `lem-full-memory-bfgs-dennis-more-condition` · lemma — Locally Lipschitz Hessians give the BFGS Dennis–Moré condition
- `thm-lbfgs-fixed-memory-linear-convergence` · theorem — Fixed-memory L-Bfgs converges linearly under uniform curvature and scale bounds
- `thm-full-memory-bfgs-local-superlinear-convergence` · theorem — Full-memory Bfgs is locally superlinear when the Hessian is Lipschitz

### `bfgs-and-limited-memory-quasi-newton-methods-examples` — Bfgs and limited memory quasi newton methods — Examples

- `ex-bfgs-secant-on-a-strongly-convex-quadratic` · example — An exact Bfgs secant update on a two-variable quadratic
- `ex-bfgs-powell-damping-after-negative-curvature` · example — Powell damping repairs a negative-curvature trial pair
- `ex-lbfgs-memory-dependent-cost` · example — Full-memory and limited-memory storage costs

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `bfgs-and-limited-memory-quasi-newton-methods` requires `finite-precision-direct-factorizations`
- `bfgs-and-limited-memory-quasi-newton-methods` requires `nonconvex-line-search-and-inexact-newton-methods`
- `sqp-active-set-and-augmented-lagrangian-methods` requires `bfgs-and-limited-memory-quasi-newton-methods`
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
