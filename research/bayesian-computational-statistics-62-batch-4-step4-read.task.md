# Step 4 batch reviewer — batch **4**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **4**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["4"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 4 | `bayesian-models-priors-and-posterior-laws` | A | statistical-experiments-models-and-identifiability, conditional-distributions-and-regular-conditional-probability, losses-risk-and-decision-rules |
| 4 | `bayesian-models-priors-and-posterior-laws-examples` | B | bayesian-models-priors-and-posterior-laws |

## Your content, in full

### `bayesian-models-priors-and-posterior-laws` — Bayesian models, priors, and posterior laws

- `def-bayesian-model-as-prior-and-sampling-kernel` · definition — Bayesian model as a prior and sampling kernel
- `def-bayesian-posterior-as-regular-conditional-law` · definition — Bayesian posterior as a regular conditional law
- `cor-posterior-r-c-d-exists-for-standard-borel-parameter` · corollary — Posterior RCD exists for a standard-Borel parameter
- `thm-standard-borel-bayesian-posterior-kernel-exists` · theorem — Standard-Borel Bayesian posterior kernel exists

### `bayesian-models-priors-and-posterior-laws-examples` — Bayesian models, priors, and posterior laws — Examples

- `ex-finite-bayesian-posterior-and-null-version` · example — A finite Bayesian update and a null-data posterior version
- `ex-omega-indexed-bayesian-posterior-r-c-d` · example — A Bayesian posterior RCD indexed by the sample point
- `ex-dominated-posterior-on-nonstandard-observation-space` · example — A dominated posterior on a nonstandard-Borel observation space
- `ex-standard-borel-posterior-kernel-on-countable-data` · example — A standard-Borel posterior kernel for countable data

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `posterior-propriety-and-dominated-bayes-formula` requires `bayesian-models-priors-and-posterior-laws`
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
