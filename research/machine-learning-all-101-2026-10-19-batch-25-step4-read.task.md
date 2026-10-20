# Step 4 batch reviewer — batch **25**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **25**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["25"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 25 | `ml02-graphical-models` | A | central-limit-theorems, convex-and-semicontinuous-functions-on-rn, markov-kernels-and-markov-chains, probability-spaces-random-variables-and-expectation, the-spectral-theorem-and-singular-value-decomposition, hierarchical-bayesian-models-and-partial-pooling |
| 25 | `ml02-graphical-models-examples` | B | ml02-graphical-models |

## Your content, in full

### `ml02-graphical-models` — Undirected graphical models and sparse precision estimation

- `def-undirected-graphical-model-and-markov-properties` · definition — Finite undirected graphs, Markov properties, and clique factorization
- `def-graphical-lasso-objective` · definition — Gaussian sparse-precision objective with the all-entry penalty
- `def-restricted-boltzmann-machine` · definition — Binary restricted Boltzmann machine, exact likelihood gradient, and finite contrastive divergence
- `thm-gaussian-precision-zero-conditional-independence` · theorem — Gaussian precision zeros characterize pairwise conditional independence
- `lem-graphical-lasso-profiled-gaussian-likelihood` · lemma — The Gaussian profile likelihood reduces to the trace score
- `alg-graphical-lasso-coordinate-descent` · algorithm — Finite-budget block and cyclic-coordinate graphical-lasso procedure
- `lem-graphical-lasso-finite-budget-properties` · lemma — Coordinate minimization, positive-definiteness invariant and termination of the finite-budget graphical-lasso procedure
- `thm-graphical-lasso-convexity-and-kkt` · theorem — The all-entry graphical-lasso objective has a unique KKT optimizer

### `ml02-graphical-models-examples` — Undirected graphical models and sparse precision estimation — Examples

- `ex-rbm-visible-units-conditionally-independent-given-hidden` · example — Visible RBM units are conditionally independent but dependent marginally
- `ex-three-node-gaussian-chain` · example — A three-node Gaussian chain has conditionally independent endpoints
- `ex-graphical-lasso-penalty-sparsity-threshold` · example — Increasing λ creates an exact zero edge in a two-variable graphical lasso

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
