# Step 4 batch reviewer — batch **13**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **13**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["13"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 13 | `cost-constrained-gaussian-and-feedback-channels` | A | discrete-memoryless-channel-capacity, gaussian-orthogonal-decomposition-and-quadratic-forms, mixed-effects-and-longitudinal-models |
| 13 | `cost-constrained-gaussian-and-feedback-channels-examples` | B | cost-constrained-gaussian-and-feedback-channels |

## Your content, in full

### `cost-constrained-gaussian-and-feedback-channels` — Cost-Constrained, Gaussian, and Feedback Channels

- `def-parallel-gaussian-channel-with-power-constraint` · definition — Finite-dimensional additive Gaussian channel with average power
- `lem-cost-pruned-random-code` · lemma — A low-error random code can be pruned to satisfy a strict average cost constraint
- `lem-density-channel-threshold-random-coding-bound` · lemma — Threshold decoding bound for memoryless channels with densities
- `lem-finite-simplex-entropy-continuity-and-concavity` · lemma — Finite-simplex entropy is continuous and concave
- `lem-gaussian-maximum-differential-entropy-under-variance` · lemma — A Gaussian maximizes scalar differential entropy at fixed variance
- `lem-jensen-for-integrable-cost-random-variable` · lemma — Jensen's inequality for an integrable cost random variable
- `lem-standard-normal-fourth-moment` · lemma — A normal variable has finite fourth moment
- `lem-water-filling-optimal-allocation` · lemma — Water-filling maximizes the finite parallel Gaussian allocation objective
- `def-countable-dmc-zero-cost-information-capacity` · definition — Zero-cost information capacity of a countable-input finite-output DMC
- `def-parallel-awgn-feedback-code` · definition — Causal feedback codes for a finite-dimensional Gaussian channel
- `lem-gaussian-noise-orthogonalization` · lemma — Orthogonal coordinates diagonalize a finite-dimensional Gaussian noise law
- `lem-parallel-awgn-single-use-information-bound` · lemma — Finite-input vector Gaussian mutual information is bounded by water-filling
- `lem-parallel-awgn-information-density-convergence` · lemma — Parallel Gaussian information density obeys a finite-variance law of large numbers
- `def-finite-dmc-cost-model` · definition — Finite DMC with a nonnegative input cost and feasible budget
- `lem-parallel-awgn-cost-constrained-achievability` · lemma — Strictly feasible Gaussian inputs yield cost-feasible Gaussian codes
- `def-cost-constrained-dmc-code-and-capacity` · definition — Average-cost fixed-length codes and operational DMC capacity
- `def-finite-dmc-feedback-code` · definition — Causal feedback codes for a finite cost-constrained DMC
- `lem-cost-constrained-dmc-information-capacity-properties` · lemma — Constrained DMC information capacity is attained, nondecreasing, and concave
- `lem-finite-message-fano-for-density-observation` · lemma — Fano's inequality for a finite message observed through a density
- `lem-cost-constrained-dmc-achievability` · lemma — Strictly feasible DMC input laws achieve every lower mutual-information rate
- `lem-cost-constrained-dmc-mutual-information-under-average-cost` · lemma — An average-cost DMC block input has mutual information at most n C_I(Gamma)
- `thm-parallel-awgn-feedback-capacity-water-filling` · theorem — Capacity of finite parallel Gaussian channels with and without feedback
- `thm-cost-constrained-dmc-capacity-formula` · theorem — Average-cost capacity formula for a finite DMC
- `cor-inactive-dmc-cost-constraint-recovers-capacity` · corollary — An inactive DMC cost constraint recovers ordinary capacity
- `thm-feedback-does-not-increase-cost-constrained-dmc-capacity` · theorem — Causal feedback does not increase finite DMC capacity under average cost

### `cost-constrained-gaussian-and-feedback-channels-examples` — Cost-Constrained, Gaussian, and Feedback Channels — Examples

- `ex-countable-input-channel-finite-capacity-supremum-not-attained` · example — A finite information-capacity supremum need not be attained
- `ex-correlated-gaussian-noise-orthogonal-reduction` · example — Orthogonal reduction of a correlated two-dimensional Gaussian channel
- `ex-two-branch-awgn-water-filling` · example — Water-filling for noise variances one and four
- `ex-binary-identity-channel-with-cost-and-feedback` · example — Cost-constrained capacity of a binary identity channel with feedback

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cost-constrained-gaussian-and-feedback-channels` requires `discrete-memoryless-channel-capacity`
- `finite-blocklength-and-reliability` requires `cost-constrained-gaussian-and-feedback-channels`
- `lossy-source-coding-with-side-information` requires `cost-constrained-gaussian-and-feedback-channels`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
