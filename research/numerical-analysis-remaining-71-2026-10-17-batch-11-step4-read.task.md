# Step 4 batch reviewer — batch **11**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **11**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["11"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 11 | `randomized-low-rank-approximation` | A | sparse-matrix-models-and-kernel-costs, computed-singular-values-and-rank-revealing-factorizations, conjugate-families-and-posterior-prediction, identifiability-and-approximation-bias-in-computational-inference |
| 11 | `randomized-low-rank-approximation-examples` | B | randomized-low-rank-approximation |

## Your content, in full

### `randomized-low-rank-approximation` — Randomized low-rank approximation

- `def-standard-real-and-normalized-complex-gaussian-matrix-law` · definition — Standard real and normalized complex Gaussian matrix laws
- `lem-orthogonal-projector-power-error-inequality` · lemma — Orthogonal-projector power error inequality
- `lem-gaussian-matrix-law-normalization-and-second-moments` · lemma — Normalization and second moments of the Gaussian matrix laws
- `alg-gaussian-randomized-range-finder` · algorithm — Exact Gaussian randomized range finder
- `lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence` · lemma — Orthogonal and unitary invariance of Gaussian matrix blocks
- `lem-finite-real-gaussian-increment-comparison` · lemma — Finite Gaussian increment comparison
- `lem-finite-scan-range-basis-is-borel` · lemma — Borel measurability and range correctness of the finite scan
- `alg-randomized-power-subspace-iteration-with-qr` · algorithm — Reorthogonalized randomized power subspace iteration
- `lem-wide-gaussian-matrix-has-full-row-rank-almost-surely` · lemma — A wide Gaussian matrix has full row rank almost surely
- `lem-real-scaled-gaussian-product-expectation` · lemma — Real scaled-Gaussian spectral and Frobenius product bounds
- `lem-randomized-rangefinder-deterministic-svd-partition-error` · lemma — Deterministic SVD-partition error bound for the range finder
- `lem-power-rangefinder-projector-is-borel` · lemma — Measurability of the reorthogonalized power range finder
- `thm-randomized-power-rangefinder-error-transfer` · theorem — Power-rangefinder error transfer under finite expected powered error
- `lem-wide-gaussian-pseudoinverse-frobenius-moments` · lemma — Exact Frobenius moments of wide Gaussian pseudoinverses
- `lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail` · lemma — Spectral moments and integrable tails for wide Gaussian pseudoinverses
- `lem-normalized-complex-gaussian-block-affine-spectral-second-moments` · lemma — Affine second-moment bounds for normalized complex Gaussian block products
- `lem-normalized-complex-rangefinder-direct-spectral-expectation` · lemma — Direct expected spectral bound for the normalized complex range finder
- `thm-real-gaussian-rangefinder-expected-spectral-error` · theorem — Expected spectral error of the real Gaussian range finder
- `thm-gaussian-rangefinder-expected-spectral-error` · theorem — Expected spectral error for real and normalized complex Gaussian range finders
- `thm-real-gaussian-power-rangefinder-expected-error` · theorem — Expected real Gaussian power-rangefinder error
- `thm-gaussian-power-rangefinder-expected-error` · theorem — Expected real and normalized complex Gaussian power-rangefinder error

### `randomized-low-rank-approximation-examples` — Randomized low-rank approximation — Examples

- `ex-power-rangefinder-loses-small-mode-without-qr` · example — A small mode is lost by an unorthogonalized power pass
- `ex-gaussian-rangefinder-exact-on-rank-k-matrices` · example — Exact range recovery on a rank-k matrix
- `ex-slow-singular-tail-rangefinder-error-term` · example — A slowly decaying singular tail makes the Frobenius term dominate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hierarchical-low-rank-matrices-and-error-propagation` requires `randomized-low-rank-approximation`
- `sketched-least-squares-and-subspace-embeddings` requires `randomized-low-rank-approximation`
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
