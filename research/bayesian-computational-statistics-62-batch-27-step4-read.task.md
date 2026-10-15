# Step 4 batch reviewer — batch **27**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **27**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["27"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 27 | `approximate-bayesian-computation-and-simulation-based-inference` | A | numerical-optimization-for-statistical-computation, complete-sufficiency-exponential-families-and-basu |
| 27 | `approximate-bayesian-computation-and-simulation-based-inference-examples` | B | approximate-bayesian-computation-and-simulation-based-inference |

## Your content, in full

### `approximate-bayesian-computation-and-simulation-based-inference` — Approximate Bayesian computation and summary-based inference

- `def-approximate-bayesian-computation` · definition — Approximate Bayesian computation and the tolerance-conditioned target
- `alg-abc-rejection` · algorithm — ABC rejection sampling
- `thm-abc-rejection-target-is-tolerance-conditioned-posterior` · theorem — ABC rejection returns the tolerance-conditioned posterior
- `thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity` · theorem — ABC targets the density-defined summary posterior at zero tolerance
- `thm-sufficient-summary-recovers-full-posterior` · theorem — A sufficient summary preserves the Bayesian posterior

### `approximate-bayesian-computation-and-simulation-based-inference-examples` — Approximate Bayesian computation and simulation-based inference — Examples

- `cex-abc-zero-tolerance-limit-fails-without-integrable-envelope` · counterexample — Pointwise continuity alone does not guarantee the zero-tolerance limit
- `cex-identifiable-model-with-insufficient-abc-summary` · counterexample — An identifiable model can have persistent ABC summary distortion
- `ex-abc-vanishing-acceptance-rate` · example — Vanishing acceptance probability with a stable zero-tolerance target
- `ex-abc-finite-sample-sufficient-summary` · example — A Bernoulli count is a sufficient summary for a finite-sample posterior

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `approximate-bayesian-computation-and-simulation-based-inference` requires `numerical-optimization-for-statistical-computation`
- `abc-mcmc-and-sequential-abc` requires `approximate-bayesian-computation-and-simulation-based-inference`
- `identifiability-and-approximation-bias-in-computational-inference` requires `approximate-bayesian-computation-and-simulation-based-inference`
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
