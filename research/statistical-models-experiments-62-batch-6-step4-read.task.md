# Step 4 batch reviewer — batch **6**, run `statistical-models-experiments-62`

You are the only reviewer for batch **6**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["6"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 6 | `principal-components-and-eigenspace-stability` | A | scientific-statistical-model-contracts, fixed-design-linear-regression-and-estimability, statistical-experiments-models-and-identifiability, estimators-and-randomized-procedures, the-spectral-theorem-and-singular-value-decomposition, probability-spaces-random-variables-and-expectation, robust-covariance-and-high-dimensional-stability |
| 6 | `principal-components-and-eigenspace-stability-examples` | B | principal-components-and-eigenspace-stability |

## Your content, in full

### `principal-components-and-eigenspace-stability` — PCA and eigengap stability

- `thm-local-leading-eigenvector-stability-under-eigengap` · theorem — Local leading-eigenvector stability under a spectral gap
- `thm-sample-centered-covariance-root-n-frobenius` · theorem — Finite-fourth-moment root-n consistency of sample-centered covariance
- `def-covariance-and-correlation-principal-component-analysis` · definition — Covariance and correlation principal component analysis
- `lem-pca-sample-covariance-is-a-measurable-estimator` · lemma — Sample-centered covariance is a measurable statistic and estimator
- `thm-pca-leading-direction-maximizes-variance` · theorem — The leading PCA eigenspace maximizes projected variance
- `thm-repeated-leading-eigenvalue-identifies-subspace` · theorem — A repeated leading PCA eigenvalue identifies a subspace, not a vector
- `cor-pca-sample-leading-eigenspace-root-n-consistency` · corollary — A simple population eigengap gives root-n sample PCA eigenspace consistency

### `principal-components-and-eigenspace-stability-examples` — PCA and eigengap stability — Examples

- `cex-small-eigengap-allows-fixed-angle-rotation` · counterexample — A vanishing eigengap allows a fixed eigenvector rotation
- `ex-covariance-and-correlation-pca-differ-after-rescaling` · example — Rescaling can change covariance-PCA directions
- `ex-pca-tied-eigenvalues-and-sign-ambiguity` · example — Tied PCA eigenvalues and sign ambiguity

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `principal-components-and-eigenspace-stability` requires `scientific-statistical-model-contracts`
- `principal-components-and-eigenspace-stability` requires `fixed-design-linear-regression-and-estimability`
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
