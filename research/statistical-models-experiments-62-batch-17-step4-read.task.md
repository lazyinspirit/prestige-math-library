# Step 4 batch reviewer — batch **17**, run `statistical-models-experiments-62`

You are the only reviewer for batch **17**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["17"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 17 | `power-and-sample-size-planning` | A | finite-populations-and-sampling-designs, randomized-treatment-assignment-and-sharp-null-tests, finite-sample-tests-neyman-pearson-and-valid-p-values, weak-convergence-tightness-and-representation, characteristic-functions-inversion-and-continuity, reeb-stability-and-global-foliation-constructions, central-limit-theorems |
| 17 | `power-and-sample-size-planning-examples` | B | power-and-sample-size-planning |

## Your content, in full

### `power-and-sample-size-planning` — Power and sample size

- `lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power` · lemma — Standard-normal CDF, tail, and quantile identities for power calculations
- `lem-iid-normal-sample-mean-law` · lemma — The mean of a finite independent normal sample is normal
- `lem-least-feasible-sample-size-exists` · lemma — A nonempty set of positive integers has a least member
- `lem-ceiling-and-least-positive-integer-threshold` · lemma — Ceilings give the least positive integer meeting a real threshold
- `def-power-and-sample-size-planning-specification` · definition — Power and sample-size planning specifications
- `prop-known-variance-normal-two-sided-z-test-power` · proposition — Both tails determine power for the known-variance two-sided normal z-test
- `alg-finite-candidate-power-sample-size-search` · algorithm — Finite-candidate power and sample-size search
- `thm-known-variance-normal-z-test-power-and-minimum-sample-size` · theorem — Exact power and least sample size for a known-variance normal z-test
- `thm-finite-candidate-power-sample-size-search-correctness` · theorem — Finite-candidate power and sample-size search is correct
- `alg-positive-integer-power-sample-size-search` · algorithm — Search over all positive sample sizes with explicit stopping certificates
- `thm-positive-integer-power-sample-size-search-correctness` · theorem — Correctness and exact termination conditions for all-size planning search

### `power-and-sample-size-planning-examples` — Power and sample size — Examples

- `ex-two-sided-normal-z-power-includes-both-tails` · example — A two-sided normal z-test retains its lower-tail power
- `ex-known-variance-normal-z-sample-size-and-sensitivity` · example — An exact one-sided normal sample size and its effect-variance sensitivity
- `cex-no-finite-query-universal-sample-size-infeasibility-detector` · counterexample — Finite power-oracle queries cannot universally certify no feasible sample size

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `power-and-sample-size-planning` requires `finite-populations-and-sampling-designs`
- `power-and-sample-size-planning` requires `randomized-treatment-assignment-and-sharp-null-tests`
---

# Step 4 Alpha batch reviewer — read-only digest, `statistical-models-experiments-62`

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
