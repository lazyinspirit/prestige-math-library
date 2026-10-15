# Step 4 batch reviewer — batch **8**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **8**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["8"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 8 | `hierarchical-bayesian-models-and-partial-pooling` | A | conjugate-families-and-posterior-prediction, markov-kernels-and-markov-chains, structural-causal-models-dags-and-adjustment |
| 8 | `hierarchical-bayesian-models-and-partial-pooling-examples` | B | hierarchical-bayesian-models-and-partial-pooling |

## Your content, in full

### `hierarchical-bayesian-models-and-partial-pooling` — Hierarchical Bayes and partial pooling

- `lem-finite-products-of-dominated-kernels-have-product-density` · lemma — Finite products of dominated kernels have the product density
- `def-hierarchical-bayesian-model` · definition — Finite-group hierarchical Bayesian model
- `thm-hierarchical-latent-tuple-has-rcd-given-data` · theorem — A finite-group hierarchical model has a conditional law of its latent tuple
- `thm-hierarchical-posterior-normalization-on-positive-finite-evidence` · theorem — Hierarchical posterior normalization on positive finite evidence
- `thm-normal-normal-hierarchical-shrinkage` · theorem — Conditional normal shrinkage in a finite hierarchy
- `def-current-and-new-group-posterior-predictive-laws` · definition — Current-group and new-group posterior prediction
- `thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels` · theorem — Current-group and new-group posterior predictions are probability kernels

### `hierarchical-bayesian-models-and-partial-pooling-examples` — Hierarchical Bayes and partial pooling — Examples

- `ex-improper-variance-hyperprior-can-make-posterior-improper` · example — An improper variance hyperprior can give an improper posterior
- `ex-full-hyperposterior-versus-plug-in-normal-hierarchy` · example — Integrating hyperparameter uncertainty versus plugging in
- `ex-hierarchical-normal-pooling-extremes` · example — Complete, partial, and no-pooling limits in the normal hierarchy

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hierarchical-bayesian-models-and-partial-pooling` requires `conjugate-families-and-posterior-prediction`
- `marginal-likelihoods-bayes-factors-and-empirical-bayes` requires `hierarchical-bayesian-models-and-partial-pooling`
- `dirichlet-normal-mixture-contraction` requires `hierarchical-bayesian-models-and-partial-pooling`
- `em-algorithm-and-latent-variable-likelihood-ascent-examples` requires `hierarchical-bayesian-models-and-partial-pooling`
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
