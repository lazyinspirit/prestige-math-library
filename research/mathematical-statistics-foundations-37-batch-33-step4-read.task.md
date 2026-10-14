# Step 4 batch reviewer — batch **33**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **33**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `robust-mean-estimation-under-heavy-tails` | A | concentration-inequalities-and-tail-bounds, contamination-models-and-robust-risk, hilbert-space-geometry-and-riesz-representation, banach-valued-integration-and-the-radon-nikodym-property, compact-self-adjoint-hilbert-schmidt-and-trace-class-operators, symmetrization-rademacher-complexity-and-covering-entropy |
| 33 | `robust-mean-estimation-under-heavy-tails-examples` | B | robust-mean-estimation-under-heavy-tails |

## Your content, in full

### `robust-mean-estimation-under-heavy-tails` — Robust Means under Heavy Tails

- `lem-variance-sensitive-bounded-empirical-process-concentration` · lemma — A variance-sensitive bound for bounded empirical suprema
- `alg-geometric-median-of-block-means` · algorithm — Geometric median of block means
- `alg-multivariate-trimmed-mean` · algorithm — Adaptive multivariate trimmed mean
- `alg-univariate-trimmed-mean` · algorithm — Split-sample univariate winsorized trimmed mean
- `lem-absolutely-continuous-upper-quantile-exact-tail-mass` · lemma — An absolutely continuous upper quantile has its specified tail mass
- `lem-finite-covariance-matrix-basic-properties` · lemma — Basic finite covariance matrix identities for robust mean bounds
- `lem-positive-real-has-dyadic-scale-in-factor-two` · lemma — Every positive real lies below a dyadic scale less than twice as large
- `cex-correct-scale-trimming-slab-radius-four-is-false` · counterexample — The four-Q0 trimming slab radius is false
- `cex-excess-tail-functional-does-not-bound-trimmed-mean` · counterexample — The excess-tail functional cannot upper-bound the trimmed mean
- `cex-univariate-clean-quantile-count-exponent-is-false` · counterexample — The claimed univariate clean-quantile count exponent is too strong
- `lem-geometric-median-majority-radius-bound` · lemma — A geometric median is close when a strict majority is close
- `lem-measurable-minimum-norm-geometric-median-selection` · lemma — Measurable minimum-norm geometric-median selection
- `lem-multivariate-trimmed-mean-selector-total-and-measurable` · lemma — Totality and measurability of the repaired multivariate trimmed-mean selector
- `lem-univariate-trimmed-mean-total-and-measurable` · lemma — The split-sample univariate trimmed mean is total and Borel measurable
- `lem-multivariate-mean-rate-given-correct-scale-event` · lemma — The multivariate trimmed-mean rate follows from a correct-scale slab event
- `lem-zero-covariance-multivariate-trimmed-mean-exact` · lemma — Exact recovery by the multivariate trimmed mean at zero covariance
- `prop-correct-scale-multivariate-trimming-slab-bound` · proposition — Correct-scale slab bound for multivariate trimming
- `thm-finite-variance-geometric-median-mean-bound` · theorem — Finite-variance Hilbert mean bound for geometric medians of means
- `thm-univariate-trimmed-mean-under-replacement` · theorem — Univariate trimmed-mean bound under sample replacement
- `thm-multivariate-trimmed-mean-under-replacement` · theorem — Multivariate trimmed-mean bound under sample replacement

### `robust-mean-estimation-under-heavy-tails-examples` — Robust Means under Heavy Tails — Examples

- `ex-one-corrupted-block-is-rejected-by-the-geometric-median` · example — One corrupted block is rejected by the geometric median
- `cex-half-replacement-prevents-covariance-only-mean-recovery` · counterexample — Half-sample replacement prevents covariance-only mean recovery
- `ex-polynomial-tail-law-with-finite-variance` · example — A polynomial-tail law with finite variance

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `robust-mean-estimation-under-heavy-tails` requires `concentration-inequalities-and-tail-bounds`
- `robust-mean-estimation-under-heavy-tails` requires `contamination-models-and-robust-risk`
- `robust-mean-estimation-under-heavy-tails` requires `symmetrization-rademacher-complexity-and-covering-entropy`
- `robust-covariance-and-high-dimensional-stability` requires `robust-mean-estimation-under-heavy-tails`
---

# Step 4 Alpha batch reviewer — read-only digest, `mathematical-statistics-foundations-37`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
