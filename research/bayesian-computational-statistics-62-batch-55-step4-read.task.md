# Step 4 batch reviewer — batch **55**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **55**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["55"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 55 | `asymptotically-robust-permutation-tests` | A | finite-group-permutation-inference, martingale-inequalities-and-convergence, conformal-prediction-and-exchangeable-ranks, horvitz-thompson-variance-and-srswor |
| 55 | `asymptotically-robust-permutation-tests-examples` | B | asymptotically-robust-permutation-tests |

## Your content, in full

### `asymptotically-robust-permutation-tests` — Studentized permutation tests under weak parameter nulls

- `def-two-sample-u-statistic-parameter` · definition — Two-sample U-statistic parameter
- `lem-finite-population-permutation-clt` · lemma — Conditional CLT for a random subset of an IID finite population
- `lem-hypergeometric-binomial-contiguity-for-permutation-samples` · lemma — Hypergeometric and binomial composition counts are contiguous
- `lem-general-measurable-finite-group-randomization-validity` · lemma — Finite-group rank validity on a measurable sample space
- `lem-random-permutation-variance-by-transpositions` · lemma — A successive-revelation variance bound for a uniform permutation
- `def-two-sample-order-r-u-statistic-and-first-projections` · definition — Two-sample order-r U-statistic and first projections
- `lem-permutation-consistency-from-iid-mixture` · lemma — Consistency transfers from IID mixture samples to permuted groups
- `lem-permutation-mixture-coupling-for-two-sample-u-statistics` · lemma — Mixture coupling for permuted two-sample U-statistics
- `lem-two-sample-u-statistic-projections-well-defined` · lemma — First projections are measurable and square-integrable
- `lem-pooled-mixture-projection-and-variance` · lemma — Pooled-mixture projection and variance
- `lem-two-sample-u-statistic-hoeffding-decomposition` · lemma — Two-sample Hoeffding decomposition
- `lem-two-sample-u-statistic-degenerate-remainder-order` · lemma — Second-moment order of the degenerate remainder
- `def-studentized-two-sample-u-statistic` · definition — Studentized two-sample U-statistic and permutation distribution
- `thm-two-sample-u-statistic-projection-clt` · theorem — Projection CLT for a two-sample U-statistic
- `cor-two-sample-permutation-exact-under-equal-distributions` · corollary — Finite-sample exactness under equal distributions
- `thm-two-sample-u-statistic-permutation-clt-under-weak-null` · theorem — Permutation CLT for a two-sample U-statistic under a weak null
- `thm-two-sample-u-statistic-permutation-clt-under-mixed-centering` · theorem — Permutation CLT for a two-sample U-statistic under mixed-assignment centering
- `thm-studentized-two-sample-u-statistic-permutation-validity` · theorem — Studentized permutation validity under a weak two-sample parameter null
- `thm-studentized-permutation-validity-under-mixed-assignment-centering` · theorem — Studentized permutation validity under mixed-assignment centering
- `alg-studentized-two-sample-u-permutation-test` · algorithm — Studentized two-sample U-statistic permutation test
- `thm-studentized-wilcoxon-validity-under-heterogeneous-laws` · theorem — Studentized Wilcoxon validity under heterogeneous laws

### `asymptotically-robust-permutation-tests-examples` — Studentized permutation tests under weak parameter nulls — Examples

- `cex-weak-null-does-not-imply-mixed-assignment-centering` · counterexample — The weak null does not center every mixed kernel assignment
- `cex-positive-kernel-second-moment-does-not-imply-nondegenerate-projections` · counterexample — Positive kernel second moment does not imply nondegenerate first projections
- `ex-same-mean-unequal-variance-studentized-permutation-test` · example — Studentized difference of means with equal means and unequal variances
- `ex-exact-versus-weak-two-sample-null` · example — Exact equality null versus weak parameter null
- `ex-studentized-rank-u-statistic-under-weak-null` · example — A studentized rank U-statistic under a weak null
- `cex-extra-sqrt-m-after-standard-error-studentization-diverges` · counterexample — An extra square-root sample-size factor destroys standard-error studentization

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `asymptotically-robust-permutation-tests` requires `finite-group-permutation-inference`
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
