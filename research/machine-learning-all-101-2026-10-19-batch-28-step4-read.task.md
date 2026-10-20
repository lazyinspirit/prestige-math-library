# Step 4 batch reviewer — batch **28**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **28**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["28"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 28 | `ml02-differential-privacy` | A | conditional-distributions-and-regular-conditional-probability, measures-and-their-basic-properties, probability-spaces-random-variables-and-expectation, sigma-algebras-and-borel-sets, structural-causal-models-dags-and-adjustment, parametric-survival-and-reliability, feynman-kac-particle-filters, measure-theoretic-information-and-conditioning |
| 28 | `ml02-differential-privacy-examples` | B | ml02-differential-privacy |

## Your content, in full

### `ml02-differential-privacy` — Differential privacy mechanisms and composition

- `def-differential-privacy-and-adjacency` · definition — Differential privacy, databases, and add/remove adjacency
- `def-laplace-distribution` · definition — Laplace noise distribution
- `def-global-l1-sensitivity` · definition — Global L1 sensitivity
- `thm-laplace-density-from-exponential-law` · theorem — Laplace noise has its stated Lebesgue density
- `lem-laplace-product-density` · lemma — Finite independent Laplace noise has product density
- `alg-laplace-mechanism` · algorithm — Laplace mechanism
- `thm-laplace-mechanism-privacy` · theorem — Laplace mechanism privacy
- `def-exponential-mechanism-utility-sensitivity` · definition — Exponential-mechanism utility sensitivity
- `alg-exponential-mechanism` · algorithm — Exponential mechanism
- `thm-exponential-mechanism-privacy-and-utility` · theorem — Exponential mechanism privacy and utility
- `lem-dp-test-function-extension` · lemma — Differential privacy inequality for bounded measurable functions
- `thm-dp-postprocessing` · theorem — Differential privacy is preserved under randomized postprocessing
- `lem-dp-pure-privacy-loss-kl-bound` · lemma — Pure differential privacy bounds relative entropy
- `lem-dp-approximate-kernel-purification` · lemma — Approximate-DP kernels admit a nearby pure-DP kernel on standard-Borel targets
- `thm-basic-adaptive-composition` · theorem — Basic adaptive composition
- `thm-advanced-adaptive-composition-standard-borel-outputs` · theorem — Advanced adaptive composition for standard-Borel outputs
- `lem-dp-joint-measure-purification` · lemma — Approximate privacy admits purification of a joint measure with fixed history marginal
- `thm-advanced-adaptive-composition-arbitrary-measurable-outputs` · theorem — Advanced adaptive composition on arbitrary measurable output spaces
- `thm-basic-and-advanced-composition` · theorem — Basic and advanced adaptive composition
- `rem-differential-privacy-scope-and-limitations` · remark — Record-level scope and limits of differential privacy

### `ml02-differential-privacy-examples` — Differential privacy mechanisms and composition — Examples

- `ex-add-remove-noisy-count` · example — Add/remove noisy count
- `ex-finite-range-private-selection` · example — Finite-range private selection
- `ex-postprocessing-private-noisy-count` · example — Thresholding a private noisy count
- `ex-record-level-versus-client-level-adjacency` · example — Record-level versus client-level adjacency

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `ml02-private-learning` requires `ml02-differential-privacy`
- `ml02-federated-optimization` requires `ml02-differential-privacy`
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
