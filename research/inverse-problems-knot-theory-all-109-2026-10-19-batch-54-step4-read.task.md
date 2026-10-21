# Step 4 batch reviewer — batch **54**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **54**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["54"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 54 | `bayesian-inverse-experimental-design-and-information-gain` | A | minimax-lower-bounds-and-information-theoretic-methods, conditional-distributions-and-regular-conditional-probability, gaussian-process-priors-and-posterior-laws, feature-inference-and-map-testing, bayesian-inverse-likelihoods-and-posterior-propriety, linear-gaussian-inverse-posteriors-and-tikhonov, posterior-computation-error-and-diagnostics, numerical-optimization-for-statistical-computation, finite-precision-direct-factorizations, numerical-identifiability-and-optimal-experiment-design |
| 54 | `bayesian-inverse-experimental-design-and-information-gain-examples` | B | bayesian-inverse-experimental-design-and-information-gain, numerical-optimization-for-statistical-computation |

## Your content, in full

### `bayesian-inverse-experimental-design-and-information-gain` — Bayesian measurement design and information gain

- `def-ip-design-indexed-inverse-experiment` · definition — Design-indexed dominated inverse experiment
- `def-ip-expected-information-gain` · definition — Expected information gain
- `thm-ip-eig-is-joint-relative-entropy` · theorem — Expected information gain is joint relative entropy
- `thm-ip-linear-gaussian-information-gain-logdet` · theorem — Linear Gaussian information gain has a log-determinant formula
- `alg-ip-finite-candidate-information-design` · algorithm — Finite-candidate information design
- `thm-ip-finite-candidate-information-design-correctness` · theorem — Finite-candidate information design returns an exact or certified approximate optimum

### `bayesian-inverse-experimental-design-and-information-gain-examples` — Bayesian measurement design and information gain — Examples and Counterexamples

- `cex-ip-eig-cannot-identify-wrong-forward-operator` · counterexample — Expected information gain under a wrong operator does not identify the operator-parameter pair
- `ex-ip-eig-high-prior-variance-direction` · example — Sensor placement along a high prior-variance direction
- `ex-ip-eig-repeated-correlated-noise` · example — Repeated measurements with correlated noise
- `ex-ip-eig-singular-prior-support` · example — Information gain on a singular prior support

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `bayesian-inverse-experimental-design-and-information-gain` requires `feature-inference-and-map-testing`
- `bayesian-inverse-experimental-design-and-information-gain` requires `bayesian-inverse-likelihoods-and-posterior-propriety`
- `bayesian-inverse-experimental-design-and-information-gain` requires `linear-gaussian-inverse-posteriors-and-tikhonov`
- `bayesian-inverse-experimental-design-and-information-gain` requires `posterior-computation-error-and-diagnostics`
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
