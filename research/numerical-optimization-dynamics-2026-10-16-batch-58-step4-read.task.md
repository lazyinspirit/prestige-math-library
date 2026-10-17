# Step 4 batch reviewer — batch **58**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **58**. Step-5 owning group: **y**.
Return `group: "y"` and `batches: ["58"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 58 | `nonconvex-line-search-and-inexact-newton-methods` | A | nonlinear-equations-and-newton-methods, krylov-methods-and-lanczos-convergence, numerical-optimization-globalization-and-inexact-certificates |
| 58 | `nonconvex-line-search-and-inexact-newton-methods-examples` | B | nonconvex-line-search-and-inexact-newton-methods |

## Your content, in full

### `nonconvex-line-search-and-inexact-newton-methods` — Nonconvex line search and inexact newton methods

- `def-wolfe-and-strong-wolfe-conditions` · definition — Wolfe and strong Wolfe line-search conditions
- `lem-strong-wolfe-step-exists-on-a-bounded-below-ray` · lemma — A strong Wolfe step exists on a bounded-below descent ray
- `alg-bracketing-zoom-strong-wolfe-search` · algorithm — Finite-budget bracketing and zoom for a strong Wolfe step
- `lem-bracketing-zoom-finite-budget-checked-return` · lemma — Bracketing and zoom terminate with a checked step or a failure
- `lem-wolfe-step-lower-bound-from-the-descent-angle` · lemma — A Wolfe step has a lower bound from its descent angle
- `thm-zoutendijk-summability-for-wolfe-steps` · theorem — Wolfe steps imply the Zoutendijk summability condition
- `cor-uniform-descent-angle-implies-gradient-vanishing` · corollary — A uniform descent angle makes the Wolfe gradient norms vanish
- `alg-inexact-newton-krylov-with-descent-safeguard` · algorithm — Finite-budget inexact Newton–Krylov with a descent safeguard
- `lem-inexact-newton-krylov-finite-budget-checked-return` · lemma — Safeguarded inexact Newton has a finite checked-return bound
- `lem-inexact-newton-error-recurrence-under-lipschitz-jacobian` · lemma — An inexact Newton residual gives a local error recurrence
- `thm-inexact-newton-local-forcing-rates` · theorem — Forcing residuals determine local inexact-Newton rates

### `nonconvex-line-search-and-inexact-newton-methods-examples` — Nonconvex line search and inexact newton methods — Examples

- `ex-rosenbrock-newton-step-satisfies-strong-wolfe` · example — The standard Rosenbrock start accepts a full Newton step
- `ex-rosenbrock-indefinite-hessian-requires-descent-safeguard` · example — An indefinite Rosenbrock Hessian makes the raw Newton direction ascend
- `ex-inexact-newton-forcing-tolerance-cost-and-rate` · example — A scalar inexact Newton solve trades inner work for outer error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `nonconvex-line-search-and-inexact-newton-methods` requires `nonlinear-equations-and-newton-methods`
- `nonconvex-line-search-and-inexact-newton-methods` requires `krylov-methods-and-lanczos-convergence`
- `nonconvex-line-search-and-inexact-newton-methods` requires `numerical-optimization-globalization-and-inexact-certificates`
- `nonlinear-conjugate-gradient-methods` requires `nonconvex-line-search-and-inexact-newton-methods`
- `bfgs-and-limited-memory-quasi-newton-methods` requires `nonconvex-line-search-and-inexact-newton-methods`
- `trust-region-and-cubic-regularization-methods` requires `nonconvex-line-search-and-inexact-newton-methods`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `nonconvex-line-search-and-inexact-newton-methods`
- `sqp-active-set-and-augmented-lagrangian-methods` requires `nonconvex-line-search-and-inexact-newton-methods`
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
