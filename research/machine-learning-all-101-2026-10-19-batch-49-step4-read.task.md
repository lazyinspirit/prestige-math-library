# Step 4 batch reviewer — batch **49**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **49**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["49"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 49 | `neural-tangent-kernels-and-lazy-training` | A | automatic-differentiation-and-backpropagation, ml02-rkhs-svm, plancherel-measure-and-asymptotic-young-diagrams, cost-constrained-gaussian-and-feedback-channels |
| 49 | `neural-tangent-kernels-and-lazy-training-examples` | B | neural-tangent-kernels-and-lazy-training |

## Your content, in full

### `neural-tangent-kernels-and-lazy-training` — Neural tangent kernels and lazy training

- `def-neural-tangent-kernel` · definition — The neural tangent kernel of a differentiable parameterized function
- `def-width-normalized-fully-connected-network` · definition — Jacot–Gabriel–Hongler width-normalized fully connected networks
- `lem-gaussian-ltwo-hermite-completeness` · lemma — Completeness of normalized probabilists’ Hermite polynomials in Gaussian L²
- `lem-bivariate-gaussian-feature-expectations-continuous` · lemma — Continuity of bivariate Gaussian feature expectations, including singular limits
- `lem-gaussian-activation-covariance-strictness-and-ntk-recursion` · lemma — Gaussian activation covariance and tangent recursion preserve strict positivity
- `lem-gaussian-hermite-covariance-expansion` · lemma — Hermite expansion of a correlated Gaussian feature kernel
- `thm-positive-definite-kernel-flow-converges-for-attained-convex-cost` · theorem — A finite positive-definite kernel flow converges for an attained convex cost
- `lem-biased-hermite-kernel-is-strictly-positive-definite` · lemma — Positive bias makes the Hermite feature kernel strictly positive definite on every sphere
- `lem-fixed-time-lazy-training-stability` · lemma — Finite-data fixed-time NTK stability under integrably bounded training directions
- `thm-sequential-infinite-width-ntk-limit` · theorem — Sequential infinite-width NTK limit and finite-time lazy training dynamics
- `prop-ntk-positive-definite-on-the-sphere` · proposition — The limiting neural tangent kernel is strictly positive definite on every unit sphere
- `thm-least-squares-ntk-mode-decay` · theorem — Least-squares NTK flow decays mode by mode and fits distinct sphere data

### `neural-tangent-kernels-and-lazy-training-examples` — Neural tangent kernels and lazy training — Examples

- `ex-finite-width-quadratic-network-has-changing-features-and-ntk` · example — A finite-width quadratic feature network has a changing NTK
- `ex-wide-tanh-network-lazy-on-a-fixed-time-horizon` · example — A wide tanh network stays lazy on a fixed time horizon
- `ex-ntk-mode-wise-exponential-decay` · example — An NTK eigenmode decays exponentially under least squares
- `ex-duplicate-inputs-make-ntk-gram-singular` · example — Duplicate inputs make the unquotiented NTK Gram matrix singular

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `neural-tangent-kernels-and-lazy-training` requires `automatic-differentiation-and-backpropagation`
- `neural-tangent-kernels-and-lazy-training` requires `ml02-rkhs-svm`
---

# Step 4 Alpha batch reviewer — read-only digest, `machine-learning-all-101-2026-10-19`

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
