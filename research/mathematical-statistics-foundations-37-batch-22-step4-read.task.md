# Step 4 batch reviewer — batch **22**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **22**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["22"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 22 | `likelihood-asymptotics-wald-score-and-likelihood-ratio` | A | fisher-information-and-finite-sample-information-bounds, asymptotic-convergence-consistency-and-identification, m-and-z-estimation-and-uniform-laws, delta-method-and-asymptotic-normality, gaussian-orthogonal-decomposition-and-quadratic-forms |
| 22 | `likelihood-asymptotics-wald-score-and-likelihood-ratio-examples` | B | likelihood-asymptotics-wald-score-and-likelihood-ratio |

## Your content, in full

### `likelihood-asymptotics-wald-score-and-likelihood-ratio` — Likelihood Theory and Classical Calibration

- `def-qmd-path` · definition — Quadratic-mean differentiability at a parameter
- `lem-parametric-qmd-score-has-mean-zero` · lemma — A finite-dimensional QMD score has mean zero
- `def-wald-score-likelihood-ratio-statistics` · definition — Wald, score, and likelihood-ratio statistics for regular nulls
- `thm-regular-mle-asymptotic-linearity-and-normality` · theorem — Asymptotic linearity and normality of a regular MLE
- `thm-wald-score-likelihood-ratio-asymptotic-chi-square` · theorem — Wald, score, and likelihood-ratio asymptotic chi-square calibration
- `cor-wald-score-lr-asymptotic-equivalence` · corollary — First-order equivalence of Wald, score, and likelihood-ratio statistics

### `likelihood-asymptotics-wald-score-and-likelihood-ratio-examples` — Likelihood Theory and Classical Calibration — Examples

- `ex-normal-mean-exact-likelihood-calibration` · example — Known-variance normal mean and exact likelihood calibration
- `cex-boundary-null-has-nonstandard-lr-limit` · counterexample — A boundary null has a nonstandard likelihood-ratio limit

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `fisher-information-and-finite-sample-information-bounds`
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `asymptotic-convergence-consistency-and-identification`
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `m-and-z-estimation-and-uniform-laws`
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `delta-method-and-asymptotic-normality`
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `gaussian-orthogonal-decomposition-and-quadratic-forms`
- `local-asymptotic-normality-contiguity-and-efficiency` requires `likelihood-asymptotics-wald-score-and-likelihood-ratio`
- `boundary-and-misspecified-asymptotics` requires `likelihood-asymptotics-wald-score-and-likelihood-ratio`
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
