# Step 4 batch reviewer — batch **12**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **12**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["12"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 12 | `feature-inference-and-map-testing` | A | statistical-inverse-experiments-and-white-noise, linear-operators-pseudoinverses-and-picard-criteria, hilbert-space-geometry-and-riesz-representation, bayesian-models-priors-and-posterior-laws, gaussian-process-priors-and-posterior-laws, gaussian-process-support-and-concentration, numerical-inverse-problems-and-regularization-error, detection-and-quantification-limits, continuous-functional-calculus-for-self-adjoint-and-normal-operators |
| 12 | `feature-inference-and-map-testing-examples` | B | feature-inference-and-map-testing, spectral-regularization-and-parameter-choice |

## Your content, in full

### `feature-inference-and-map-testing` — Linear feature identifiability and Gaussian MAP tests

- `def-ip-feature-estimability-through-adjoint-range` · definition — Exact linear feature estimability through the adjoint range
- `thm-ip-isonormal-gaussian-posterior-law` · theorem — Gaussian posterior law in an isonormal inverse experiment
- `alg-ip-gaussian-map-feature-test` · algorithm — Gaussian MAP feature test
- `thm-ip-map-test-level-and-power` · theorem — Level, power, and weighted regularization of Gaussian MAP feature tests
- `thm-ip-unrestricted-map-test-can-have-level-one` · theorem — A non-eigenfeature can give an unrestricted Gaussian MAP test level one

### `feature-inference-and-map-testing-examples` — Linear feature identifiability and Gaussian MAP tests — Examples and Counterexamples

- `ex-ip-adjoint-range-feature-is-estimable` · example — An adjoint-range feature has an exact one-probe estimator
- `ex-ip-closure-only-feature-is-not-exactly-estimable` · example — A compact diagonal map has a closure-only feature
- `ex-ip-non-eigenfeature-map-test-has-level-one` · example — A non-eigenfeature gives Gaussian MAP rejection probabilities tending to one

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `feature-inference-and-map-testing` requires `statistical-inverse-experiments-and-white-noise`
- `feature-inference-and-map-testing` requires `linear-operators-pseudoinverses-and-picard-criteria`
- `bayesian-inverse-experimental-design-and-information-gain` requires `feature-inference-and-map-testing`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
