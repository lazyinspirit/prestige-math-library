# Step 4 batch reviewer — batch **75**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **75**. Step-5 owning group: **y**.
Return `group: "y"` and `batches: ["75"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 75 | `mirror-descent-and-adaptive-regularization` | A | convex-and-semicontinuous-functions-on-rn, hedge-and-online-gradient-descent, trust-region-and-cubic-regularization-methods |
| 75 | `mirror-descent-and-adaptive-regularization-examples` | B | mirror-descent-and-adaptive-regularization |

## Your content, in full

### `mirror-descent-and-adaptive-regularization` — Mirror descent and adaptive regularization

- `def-mirror-map-and-bregman-divergence` · definition — Mirror maps, Bregman divergence, and local Hessian norms
- `lem-psd-matrix-has-unique-psd-square-root` · lemma — A positive-semidefinite matrix has a unique positive-semidefinite square root
- `lem-bregman-three-point-identity` · lemma — The Bregman three-point identity
- `lem-bregman-divergence-nonnegative` · lemma — Positive Hessians make Bregman divergence nonnegative
- `lem-negative-entropy-geometry-of-simplex` · lemma — Negative entropy on the simplex is strongly convex and has range log n
- `alg-adagrad` · algorithm — Gram-matrix AdaGrad with full or singular diagonal metrics
- `lem-adagrad-accumulated-gram-matrix-is-psd` · lemma — AdaGrad accumulated Gram matrices and both scales are positive semidefinite
- `alg-online-mirror-descent` · algorithm — Agile online mirror descent
- `lem-adagrad-projection-exists` · lemma — A singular AdaGrad metric still has a projection minimizer
- `lem-adagrad-diagonal-scale-coordinatewise` · lemma — The diagonal AdaGrad scale is the coordinatewise square root
- `lem-mirror-descent-bregman-projection-exists` · lemma — Compactness makes the Bregman projection well-defined
- `thm-mirror-descent-regret` · theorem — A corrected regret bound for agile mirror descent
- `fs-mirror-descent-halved-regret-constants` · false-statement — Halving both terms in the agile mirror-descent regret bound

### `mirror-descent-and-adaptive-regularization-examples` — Mirror descent and adaptive regularization — Examples

- `ex-adagrad-singular-adaptive-metric` · example — AdaGrad with a singular diagonal metric
- `ex-negative-entropy-mirror-descent-on-simplex` · example — Negative entropy gives normalized multiplicative weights
- `ex-euclidean-mirror-descent-is-projected-ogd` · example — A quadratic mirror map gives a projected gradient step

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `mirror-descent-and-adaptive-regularization` requires `hedge-and-online-gradient-descent`
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
