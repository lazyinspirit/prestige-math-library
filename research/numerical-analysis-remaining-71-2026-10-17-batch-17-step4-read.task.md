# Step 4 batch reviewer — batch **17**, run `numerical-analysis-remaining-71-2026-10-17`

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
| 17 | `sketched-least-squares-and-subspace-embeddings` | A | randomized-low-rank-approximation, computed-fast-transforms-and-convolution, robust-covariance-and-high-dimensional-stability |
| 17 | `sketched-least-squares-and-subspace-embeddings-examples` | B | sketched-least-squares-and-subspace-embeddings |

## Your content, in full

### `sketched-least-squares-and-subspace-embeddings` — Sketched least squares and subspace embeddings

- `alg-sketch-and-solve-least-squares` · algorithm — Rank-aware sketch-and-solve least squares
- `def-oblivious-l2-subspace-embedding` · definition — Oblivious squared-norm subspace embeddings
- `def-sketch-qr-right-preconditioner` · definition — Right preconditioner from the reduced QR factor of a sketch
- `def-subspace-leverage-scores` · definition — Row leverage scores of a finite-dimensional subspace
- `lem-hermitian-sphere-net-controls-operator-norm` · lemma — A sphere net controls a real or complex Hermitian operator norm
- `lem-subspace-leverage-score-identities` · lemma — Leverage scores are basis-independent and sum to the dimension
- `thm-sketch-and-solve-exact-minimizer` · theorem — A converged exact sketch-and-solve run returns a sketch minimizer
- `thm-sketch-qr-right-preconditioner-conditioned-spectrum` · theorem — An embedded QR right preconditioner has controlled singular values
- `lem-gaussian-squared-norm-tail` · lemma — Squared-norm concentration for real and normalized complex Gaussians
- `alg-leverage-score-row-sampling-sketch` · algorithm — With-replacement leverage-score row sampling and rescaling
- `thm-sketch-and-solve-residual-guarantee` · theorem — Embedding span(A,b) gives the sketch-and-solve residual factor
- `thm-gaussian-oblivious-l2-subspace-embedding` · theorem — Gaussian sketches embed a fixed subspace at the additive dimension rate
- `thm-leverage-score-row-sampling-subspace-embedding` · theorem — Leverage-score row sampling embeds the column space

### `sketched-least-squares-and-subspace-embeddings-examples` — Sketched least squares and subspace embeddings — Examples

- `cex-embedding-the-column-space-alone-does-not-control-ls-residual` · counterexample — Embedding Ran(A) alone does not control the sketch-and-solve residual
- `ex-leverage-zero-rows-and-high-coherence` · example — Zero leverage rows and a maximally coherent one-dimensional design
- `ex-overdetermined-regression-exact-subspace-sketch` · example — An exact two-row sketch for a three-row regression problem

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `sketched-least-squares-and-subspace-embeddings` requires `randomized-low-rank-approximation`
- `interpolative-cur-and-nystrom-decompositions` requires `sketched-least-squares-and-subspace-embeddings`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
