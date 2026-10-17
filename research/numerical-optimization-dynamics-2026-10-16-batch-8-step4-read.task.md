# Step 4 batch reviewer — batch **8**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **8**. Step-5 owning group: **v**.
Return `group: "v"` and `batches: ["8"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 8 | `rare-event-importance-sampling-and-multilevel-splitting` | A | feynman-kac-particle-filters, iid-monte-carlo-integration-and-error, importance-sampling-and-weight-diagnostics, smc-clts-error-and-degeneracy |
| 8 | `rare-event-importance-sampling-and-multilevel-splitting-examples` | B | rare-event-importance-sampling-and-multilevel-splitting |

## Your content, in full

### `rare-event-importance-sampling-and-multilevel-splitting` — Rare event importance sampling and multilevel splitting

- `def-rare-event-efficiency-criteria` · definition — Rare-event efficiency and work criteria
- `lem-standard-normal-mills-ratio` · lemma — Standard-normal Mills bounds and logarithmic tail asymptotics
- `alg-cross-entropy-pilot-production` · algorithm — Independent-pilot cross-entropy proposal fitting and production
- `def-nested-rare-event-levels` · definition — Nested rare-event levels and conditional laws
- `def-finite-budget-stopped-event-kernel` · definition — Finite-budget stopped-event kernel with a cemetery outcome
- `lem-sir-bounded-potential-unnormalized-update-variance` · lemma — A bounded-potential SIR update has a uniform unnormalized variance bound
- `thm-zero-variance-importance-sampling-proposal` · theorem — The event-conditioned proposal is the zero-variance benchmark
- `thm-gaussian-tail-exponential-tilting` · theorem — Gaussian tail tilting is logarithmically efficient but not bounded-relative-error
- `thm-cross-entropy-production-unbiased-given-pilot` · theorem — Independent cross-entropy production is conditionally unbiased
- `lem-nested-level-probability-factorization` · lemma — Nested-event probabilities factor into conditional levels
- `alg-independent-fixed-level-splitting` · algorithm — Independent fixed-level splitting
- `alg-fixed-level-sir-splitting` · algorithm — Full-resampling fixed-level SIR splitting with invariant mutations
- `lem-finite-budget-stopped-normalizer` · lemma — Finite-budget stopped-kernel measurability and event normalizer
- `lem-stopped-kernel-discretization-bias` · lemma — Truncation and total-variation errors for stopped crossings
- `thm-independent-splitting-product-moments-and-work` · theorem — Independent splitting estimator moments and work
- `thm-fixed-level-sir-estimator-unbiased` · theorem — Fixed-level full-resampling SIR splitting is unbiased
- `thm-fixed-level-sir-absolute-mse-bound` · theorem — Fixed-level SIR has an absolute O(L/N) mean-square bound
- `cex-sir-l2-bound-from-conditional-means-is-false` · counterexample — Conditional future means alone do not bound finite-particle SIR error
- `rem-sir-finite-particle-error-bound-scope` · remark — Finite-particle SIR absolute and relative error scope
- `thm-fixed-level-sir-relative-mse-under-conditional-event-second-moment-bounds` · theorem — Conditional event second moments give a finite-particle SIR relative MSE bound

### `rare-event-importance-sampling-and-multilevel-splitting-examples` — Rare event importance sampling and multilevel splitting — Examples

- `ex-gaussian-barrier-exponential-tilting` · example — Gaussian barrier under the prescribed exponential tilt
- `ex-queue-overflow-and-redundant-splitting-work` · example — Two-stage queue overflow and a redundant split at equal work
- `ex-cross-entropy-pilot-misses-event-support` · example — A pilot with no rare-event hit returns failure
- `cex-dependent-level-samples-bias-product-estimator` · counterexample — Correct level marginals do not justify a dependent product
- `ex-sir-zero-particle-prefix-positive-event` · example — A zero-particle prefix does not prove a zero event probability
- `ex-finite-budget-crossing-misses-between-grid-times` · example — A finite grid can miss a continuous-time crossing
- `ex-importance-sampling-finite-mean-infinite-second-moment` · example — An unbiased importance-sampling weight can have infinite second moment

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
