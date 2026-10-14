# Step 4 batch reviewer — batch **36**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **36**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["36"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 36 | `hilbert-valued-clt-for-weakly-dependent-functional-time-series` | A | independence-borel-cantelli-and-zero-one-laws, infinite-product-measures-and-kolmogorov-extension, central-limit-theorems, weak-convergence-tightness-and-representation, hilbert-space-geometry-and-riesz-representation, product-measures-and-the-fubini-tonelli-theorems, banach-valued-integration-and-the-radon-nikodym-property, compact-self-adjoint-hilbert-schmidt-and-trace-class-operators |
| 36 | `hilbert-valued-clt-for-weakly-dependent-functional-time-series-examples` | B | hilbert-valued-clt-for-weakly-dependent-functional-time-series |

## Your content, in full

### `hilbert-valued-clt-for-weakly-dependent-functional-time-series` — Hilbert-Valued CLT for Functional Time Series

- `def-l2-m-approximable-causal-bernoulli-shift` · definition — L2-m-approximable causal Bernoulli shifts
- `lem-finite-dependent-vector-clt` · lemma — Finite-dependent vector central limit theorem
- `lem-positive-trace-class-covariance-defines-hilbert-gaussian` · lemma — Positive trace-class covariance defines a Hilbert Gaussian
- `lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible` · lemma — Real L2 kernels define bounded operators and represent rank-one tensors
- `lem-l2-basis-projections-converge-and-satisfy-parseval` · lemma — Complete orthonormal bases give norm-convergent projections and Parseval
- `lem-independent-centered-hilbert-elements-have-zero-expected-inner-product` · lemma — Independent centered Hilbert-valued elements have zero expected inner product
- `lem-long-run-covariance-is-trace-class` · lemma — Long-run covariance of an L2-m-approximable shift is trace class
- `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts` · theorem — Hilbert-valued CLT for L2-m-approximable Bernoulli shifts

### `hilbert-valued-clt-for-weakly-dependent-functional-time-series-examples` — Hilbert-Valued CLT for Functional Time Series — Examples

- `ex-nonsummable-physical-dependence-linear-process` · example — A square-integrable linear shift with nonsummable physical dependence
- `ex-finite-dependent-functional-moving-average` · example — Finite-dependent functional moving average
- `ex-geometrically-summable-bernoulli-shift` · example — A geometrically summable Bernoulli shift
- `cex-terminal-weak-limit-does-not-imply-path-weak-limit` · counterexample — A terminal weak limit does not imply a path-space weak limit

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
