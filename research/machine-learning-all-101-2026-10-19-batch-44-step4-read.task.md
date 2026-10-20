# Step 4 batch reviewer — batch **44**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **44**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["44"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 44 | `implicit-bias-of-gradient-training` | A | automatic-differentiation-and-backpropagation, constant-rank-submersions-and-regular-level-sets, convex-and-semicontinuous-functions-on-rn, inner-product-spaces-and-orthogonality, the-moore-penrose-pseudoinverse-and-regularised-least-squares, numerical-optimization-for-statistical-computation, inequality-kkt-duality-and-optimality-certificates |
| 44 | `implicit-bias-of-gradient-training-examples` | B | implicit-bias-of-gradient-training |

## Your content, in full

### `implicit-bias-of-gradient-training` — Implicit bias of gradient-based learning

- `def-clarke-subdifferential-and-gradient-flow` · definition — Clarke subdifferential and gradient-flow trajectory
- `def-linear-separable-margin-and-hard-margin-svm` · definition — Bias-free linear margins and the hard-margin SVM
- `def-tight-exponential-tail` · definition — Tight exponential tail for a positive loss derivative
- `thm-zero-initialized-gd-selects-minimum-norm-least-squares` · theorem — Zero-initialized gradient descent selects minimum-norm least squares
- `lem-hard-margin-svm-has-unique-minimizer` · lemma — A strictly separable finite sample has a unique hard-margin vector
- `lem-logistic-and-exponential-losses-have-tight-exponential-tail` · lemma — Logistic and exponential losses satisfy the tight-tail condition
- `def-homogeneous-classifier-margin-and-exponential-risk` · definition — Homogeneous classifier margins and exponential training risk
- `def-margin-kkt-and-mfcq` · definition — KKT conditions and MFCQ for margin constraints
- `lem-clarke-euler-identity-for-homogeneous-margins` · lemma — Euler identity for Clarke subgradients of homogeneous margins
- `lem-clarke-sum-chain-rule-for-exponential-risk` · lemma — Clarke chain rule for finite exponential empirical risk
- `lem-recursive-hard-margin-comparison-trajectory` · lemma — Recursive hard-margin comparison trajectories have summable descent defects
- `thm-separable-logistic-gd-selects-hard-margin-direction` · theorem — Separable logistic and exponential gradient descent select the hard-margin direction
- `lem-homogeneous-margin-constraints-satisfy-mfcq` · lemma — Homogeneous margin constraints satisfy MFCQ
- `lem-homogeneous-clarke-flow-margin-monotonicity` · lemma — Smoothed margin monotonicity along homogeneous Clarke flow
- `lem-approximate-margin-kkt-limit-under-mfcq` · lemma — Limits of approximate margin-KKT points under MFCQ
- `lem-local-margin-minimum-satisfies-kkt-under-mfcq` · lemma — A constrained local margin minimum satisfies Clarke KKT under MFCQ
- `lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points` · lemma — Homogeneous Clarke flow produces approximate margin-KKT points
- `thm-homogeneous-gradient-flow-limit-satisfies-margin-kkt` · theorem — Homogeneous gradient-flow limit points satisfy margin KKT conditions

### `implicit-bias-of-gradient-training-examples` — Implicit bias of gradient-based learning — Examples

- `ex-underdetermined-linear-system-gd-minimum-norm` · example — Zero-initialized descent on an underdetermined system
- `ex-degenerate-hard-margin-support-vector` · example — A redundant active margin with zero KKT multiplier
- `ex-homogeneous-kkt-point-not-global-margin-maximizer` · example — A homogeneous-network KKT point that is not globally optimal

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `implicit-bias-of-gradient-training` requires `automatic-differentiation-and-backpropagation`
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
