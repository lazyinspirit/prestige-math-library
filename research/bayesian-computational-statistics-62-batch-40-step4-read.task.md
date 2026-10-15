# Step 4 batch reviewer — batch **40**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **40**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["40"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 40 | `mcmc-diagnostics-and-finite-run-limitations` | A | mcmc-clt-and-monte-carlo-standard-error, adaptive-mcmc-convergence-and-limitations |
| 40 | `mcmc-diagnostics-and-finite-run-limitations-examples` | B | mcmc-diagnostics-and-finite-run-limitations |

## Your content, in full

### `mcmc-diagnostics-and-finite-run-limitations` — MCMC diagnostics and finite-run limitations

- `def-blom-rank-normalization-for-pooled-draws` · definition — Blom rank-normal scores for pooled draws
- `def-empirical-left-quantile-for-finite-draws` · definition — Left empirical quantile of finite draws
- `def-standard-cauchy-law` · definition — Standard Cauchy probability law
- `def-functional-specific-effective-sample-size` · definition — Functional-specific effective sample size
- `alg-split-rhat-from-multiple-chains` · algorithm — Split R-hat from multiple chains
- `alg-multichain-effective-sample-size` · algorithm — Split multi-chain autocorrelation effective sample size
- `alg-rank-normalized-folded-split-rhat` · algorithm — Rank-normalized folded split R-hat
- `alg-bulk-effective-sample-size` · algorithm — Bulk effective sample size
- `alg-tail-effective-sample-size` · algorithm — Tail effective sample size
- `alg-quantile-monte-carlo-standard-error` · algorithm — Quantile Monte Carlo standard error

### `mcmc-diagnostics-and-finite-run-limitations-examples` — MCMC diagnostics and finite-run limitations — Examples

- `ex-thinning-can-mask-sticky-mcmc-output` · example — Thinning lowers observed lag correlation but discards information
- `ex-shared-funnel-region-missed-by-all-chains` · example — A shared missed region in a finite funnel-shaped target
- `ex-cauchy-heavy-tail-and-location-shift-rhat` · example — Heavy tails and a location shift in split R-hat
- `ex-centered-eight-schools-low-tail-ess-and-thinning` · example — Centered eight-schools runs show small R-hat with low tail ESS

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `mcmc-diagnostics-and-finite-run-limitations` requires `mcmc-clt-and-monte-carlo-standard-error`
- `mcmc-diagnostics-and-finite-run-limitations` requires `adaptive-mcmc-convergence-and-limitations`
---

# Step 4 Alpha batch reviewer — read-only digest, `bayesian-computational-statistics-62`

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
