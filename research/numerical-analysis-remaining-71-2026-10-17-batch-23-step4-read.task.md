# Step 4 batch reviewer — batch **23**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **23**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["23"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 23 | `numerical-algebraic-riccati-equations-and-stabilizing-branches` | A | generalized-eigenvalue-pencils-and-qz-methods, matrix-functions-and-scaling-squaring |
| 23 | `numerical-algebraic-riccati-equations-and-stabilizing-branches-examples` | B | numerical-algebraic-riccati-equations-and-stabilizing-branches |

## Your content, in full

### `numerical-algebraic-riccati-equations-and-stabilizing-branches` — Numerical algebraic riccati equations and stabilizing branches

- `def-lqr-stabilizability-and-detectability` · definition — Stabilizability and detectability for continuous and discrete linear systems
- `lem-reachable-decomposition-and-state-feedback-pole-placement` · lemma — Reachable block decomposition and same-field state-feedback pole placement
- `alg-finite-budget-stable-block-reordering-for-schur-and-qz` · algorithm — Finite-budget stable block reordering for Schur and QZ forms
- `def-standard-continuous-and-discrete-riccati-equations` · definition — Standard CARE and DARE data, equations, and conventions
- `lem-powers-of-a-schur-stable-matrix-decay` · lemma — Powers of a Schur-stable matrix decay geometrically up to a polynomial factor
- `lem-stabilizability-and-detectability-pbh-necessary-conditions` · lemma — Stabilizability and detectability imply the closed-region PBH rank tests
- `thm-finite-budget-stable-block-reordering-correctness-and-status` · theorem — Finite-budget stable block reordering has exact adjacent-swap correctness and status
- `alg-finite-budget-newton-kleinman-policy-iteration` · algorithm — Finite-budget exact or safeguarded inexact Newton-Kleinman policy iteration
- `alg-finite-budget-structure-preserving-doubling-for-dare` · algorithm — Finite-budget structure-preserving doubling iteration for the DARE
- `thm-pbh-stabilizability-and-detectability-equivalence` · theorem — Closed-region PBH rank tests characterize continuous and discrete stabilizability and detectability
- `thm-care-stabilizing-psd-solution-and-value` · theorem — Stabilizability and detectability give the unique stabilizing positive-semidefinite CARE solution
- `thm-dare-stabilizing-psd-solution-and-value` · theorem — Stabilizability and detectability give the unique stabilizing positive-semidefinite DARE solution
- `lem-sda-doubling-composition-and-psd-invariants` · lemma — The DARE doubling recurrence composes two Riccati steps and preserves positive semidefiniteness
- `prop-care-hamiltonian-stable-graph` · proposition — The stabilizing CARE solution is the Hamiltonian stable invariant graph
- `prop-dare-symplectic-pencil-graph-and-stable-spectrum` · proposition — The stabilizing DARE solution is the stable deflating graph of a regular symplectic pencil
- `prop-inexact-newton-kleinman-safeguard` · proposition — Verified Lyapunov residual, descent, and stability checks make an inexact Newton-Kleinman step safe
- `thm-care-local-residual-ball-certificate` · theorem — A CARE residual and Lyapunov margin certify a unique stabilizing root in a matrix ball
- `thm-dare-local-residual-ball-certificate` · theorem — A DARE residual, Stein inverse bound, and Lyapunov margin certify a stabilizing root
- `thm-newton-kleinman-exact-global-and-local-quadratic-convergence` · theorem — Exact Newton-Kleinman iteration preserves stability, decreases cost matrices, and converges quadratically locally
- `alg-finite-budget-schur-qz-riccati-candidate-extraction` · algorithm — Finite-budget CARE and DARE candidate extraction from ordered Schur and QZ forms
- `prop-graph-basis-yields-care-or-dare-solution` · proposition — An invertible graph block converts an exact stable Schur or QZ basis into a Riccati solution
- `thm-sda-convergence-and-eventual-quadratic-envelope` · theorem — DARE structure-preserving doubling converges with a quantified quadratic error envelope
- `prop-dare-stable-deflating-subspace-perturbation-bound` · proposition — Separated DARE pencils have quantitatively stable deflating graphs
- `lem-riccati-finite-budget-wrappers-return-a-status` · lemma — Finite Riccati candidate, Newton-Kleinman, and doubling wrappers return a status
- `prop-riccati-dense-work-and-acceptance-diagnostics` · proposition — Dense Riccati work counts and numerical acceptance require equation-level diagnostics
- `prop-riccati-sensitivity-and-graph-subspace-conditioning` · proposition — Riccati residual sensitivity and invariant graph conditioning retain spectral separation

### `numerical-algebraic-riccati-equations-and-stabilizing-branches-examples` — Numerical algebraic riccati equations and stabilizing branches — Examples

- `ex-scalar-care-two-stabilizing-branches` · example — A scalar CARE has two real roots but only one stabilizing branch
- `ex-singular-a-dare-infinite-pencil-eigenvalue` · example — A singular A can give a stable DARE solution and an infinite pencil eigenvalue
- `ex-unstabilizable-or-undetectable-mode-breaks-stability` · example — Unstabilizable and undetectable unstable modes break the CARE conclusion
- `ex-near-boundary-riccati-residual-inconclusive` · example — A tiny CARE residual is inconclusive near the stability boundary
- `ex-newton-kleinman-exact-and-inexact-step` · example — Exact Newton-Kleinman decreases the cost while an unchecked inexact step can lose stability
- `ex-sda-psd-blocks-and-symmetry-defect` · example — SDA preserves PSD blocks exactly and exposes a finite-precision symmetry defect

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `square-root-covariance-update-error-and-stability` requires `numerical-algebraic-riccati-equations-and-stabilizing-branches`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
