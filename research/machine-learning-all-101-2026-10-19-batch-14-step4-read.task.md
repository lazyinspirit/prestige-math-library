# Step 4 batch reviewer — batch **14**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **14**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["14"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 14 | `ml02-linear-classification` | A | convex-and-semicontinuous-functions-on-rn, inner-product-spaces-and-orthogonality, the-spectral-theorem-and-singular-value-decomposition, generalized-linear-models-and-fisher-scoring, mixed-effects-and-longitudinal-models |
| 14 | `ml02-linear-classification-examples` | B | ml02-linear-classification |

## Your content, in full

### `ml02-linear-classification` — Linear classifiers, discriminants, and logistic models

- `def-linear-score-classifier` · definition — Finite linear-score classifiers with a deterministic tie rule
- `def-indicator-response-least-squares-classifier` · definition — Indicator-response least-squares classification
- `lem-indicator-response-least-squares-minimum-norm-fit` · lemma — The minimum-norm indicator-response least-squares fit exists uniquely
- `def-generative-lda-and-qda-models` · definition — Gaussian LDA and QDA model contracts
- `thm-lda-and-qda-log-posterior-scores` · theorem — Common-covariance LDA scores are affine and QDA scores are quadratic
- `def-binary-logistic-and-multiclass-softmax-models` · definition — Binary logistic and multiclass softmax conditional models
- `def-binary-logistic-log-likelihood-and-l1-penalty` · definition — Binary logistic log-likelihood and L1-penalized objective
- `thm-binary-logistic-derivatives-and-irls-update` · theorem — Binary logistic derivatives and the exact Newton/IRLS update
- `thm-complete-separation-precludes-finite-logistic-mle` · theorem — Complete separation gives an unattained logistic likelihood supremum
- `alg-cyclic-perceptron` · algorithm — The cyclic perceptron update procedure
- `thm-perceptron-margin-mistake-bound` · theorem — The perceptron makes at most R squared over gamma squared mistakes

### `ml02-linear-classification-examples` — Linear classifiers, discriminants, and logistic models — Examples

- `ex-generative-lda-and-logistic-share-a-boundary` · example — A Gaussian LDA model and a conditional logistic model can share a decision boundary
- `ex-separated-logistic-sample-has-unattained-supremum` · example — A strictly separated two-point sample has an unattained logistic likelihood supremum
- `ex-nonseparable-perceptron-cycles` · example — Two contradictory labels make the cyclic perceptron repeat a two-pass cycle

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `preference-learning-and-direct-preference-optimization` requires `ml02-linear-classification`
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
