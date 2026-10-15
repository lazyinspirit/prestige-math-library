# Step 4 batch reviewer — batch **34**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **34**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["34"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 34 | `gibbs-sampling-and-scan-schemes` | A | metropolis-hastings-algorithm-and-invariance, mixed-effects-and-longitudinal-models, structural-causal-models-dags-and-adjustment |
| 34 | `gibbs-sampling-and-scan-schemes-examples` | B | gibbs-sampling-and-scan-schemes |

## Your content, in full

### `gibbs-sampling-and-scan-schemes` — Gibbs sampling and scan schemes

- `def-gibbs-full-conditional-kernel` · definition — Proper full conditional kernel
- `def-gibbs-reversibility-for-a-markov-kernel` · definition — Reversibility for a probability kernel
- `def-finite-markov-chain-reducible` · definition — Reducibility of a finite Markov chain
- `cor-gibbs-density-formula-supplies-full-conditional-kernels` · corollary — A joint density supplies a proper full conditional kernel
- `alg-gibbs-block-update` · algorithm — Exact Gibbs block update
- `cor-bivariate-normal-full-conditional-kernels` · corollary — Proper full conditionals of a nondegenerate bivariate normal law
- `lem-gibbs-block-update-is-a-probability-kernel` · lemma — The Gibbs block update is a probability kernel
- `alg-gibbs-scan-schemes` · algorithm — Random and systematic Gibbs scan schemes
- `lem-gibbs-block-refresh-is-conditionally-independent` · lemma — A Gibbs refresh is conditionally independent of the old block
- `lem-gibbs-block-update-is-reversible-and-invariant` · lemma — Each exact Gibbs block update is reversible and invariant
- `lem-gibbs-scan-schemes-are-probability-kernels` · lemma — Random and systematic scan kernels are well-defined
- `thm-random-scan-gibbs-is-reversible-and-invariant` · theorem — Random-scan Gibbs is reversible and invariant
- `thm-systematic-gibbs-sweep-preserves-target` · theorem — A systematic Gibbs sweep preserves the target

### `gibbs-sampling-and-scan-schemes-examples` — Gibbs sampling and scan schemes — Examples

- `ex-single-site-gibbs-reducible-on-disconnected-support` · example — A constrained support can make single-site Gibbs reducible
- `ex-bivariate-normal-gibbs-full-conditionals` · example — Full conditionals for a correlated bivariate normal target
- `ex-systematic-gibbs-sweep-is-not-reversible` · example — A systematic Gaussian Gibbs sweep need not be reversible

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gibbs-sampling-and-scan-schemes` requires `metropolis-hastings-algorithm-and-invariance`
- `mcmc-ergodicity-and-mixing` requires `gibbs-sampling-and-scan-schemes`
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
