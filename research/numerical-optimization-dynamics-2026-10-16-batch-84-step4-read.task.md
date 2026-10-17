# Step 4 batch reviewer — batch **84**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **84**. Step-5 owning group: **ab**.
Return `group: "ab"` and `batches: ["84"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 84 | `gauss-newton-and-levenberg-marquardt-methods` | A | finite-precision-direct-factorizations, nonlinear-equations-and-newton-methods, trust-region-and-cubic-regularization-methods |
| 84 | `gauss-newton-and-levenberg-marquardt-methods-examples` | B | gauss-newton-and-levenberg-marquardt-methods |

## Your content, in full

### `gauss-newton-and-levenberg-marquardt-methods` — Gauss newton and levenberg marquardt methods

- `thm-nonlinear-least-squares-gradient-and-hessian` · theorem — The nonlinear least-squares gradient and Hessian formulas
- `lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian` · lemma — Rectangular residual linearization error under a Lipschitz Jacobian
- `lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer` · lemma — A damped least-squares step solves a scaled trust-region model
- `alg-gauss-newton-qr-svd-step-with-rank-safeguard` · algorithm — Gauss-Newton linearized least-squares step with QR/SVD rank safeguards
- `alg-safeguarded-levenberg-marquardt` · algorithm — Finite-budget Levenberg-Marquardt with a trust-ratio safeguard
- `thm-gauss-newton-local-linear-contraction` · theorem — Gauss-Newton contracts linearly under a controlled residual-curvature bound
- `thm-gauss-newton-zero-residual-quadratic-convergence` · theorem — Gauss-Newton converges quadratically at a full-rank zero-residual root
- `lem-levenberg-marquardt-large-damping-forces-sufficient-decrease` · lemma — Uniformly large damping forces an acceptable LM trial in finitely many attempts
- `thm-safeguarded-levenberg-marquardt-global-stationarity` · theorem — Exact safeguarded Levenberg-Marquardt iterates approach stationarity on compact sublevels

### `gauss-newton-and-levenberg-marquardt-methods-examples` — Gauss newton and levenberg marquardt methods — Examples

- `ex-exponential-kinetics-gauss-newton-fit` · example — An exponential-decay kinetics fit has a full-rank exact solution
- `ex-rank-deficient-identifiability-and-lm-step` · example — Rank-deficient data do not identify both parameters, while LM has a unique damped step
- `ex-nonzero-residual-gauss-newton-is-only-linear` · example — A nonzero-residual stationary point gives only linear Gauss-Newton convergence

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gauss-newton-and-levenberg-marquardt-methods` requires `finite-precision-direct-factorizations`
- `gauss-newton-and-levenberg-marquardt-methods` requires `nonlinear-equations-and-newton-methods`
- `gauss-newton-and-levenberg-marquardt-methods` requires `trust-region-and-cubic-regularization-methods`
- `iterative-regularization-and-early-stopping` requires `gauss-newton-and-levenberg-marquardt-methods`
- `numerical-identifiability-and-optimal-experiment-design` requires `gauss-newton-and-levenberg-marquardt-methods`
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
