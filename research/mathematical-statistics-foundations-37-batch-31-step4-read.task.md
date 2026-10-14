# Step 4 batch reviewer — batch **31**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **31**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["31"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 31 | `contamination-models-and-robust-risk` | A | losses-risk-and-decision-rules, minimax-lower-bounds-and-information-theoretic-methods |
| 31 | `contamination-models-and-robust-risk-examples` | B | contamination-models-and-robust-risk |

## Your content, in full

### `contamination-models-and-robust-risk` — Contamination and Robust Risk

- `lem-convex-mixture-of-probability-laws` · lemma — A convex mixture of probability laws is a probability law
- `lem-common-law-forces-two-point-tail-loss-bound` · lemma — A common data law forces a two-point tail-loss bound
- `def-gross-error-path` · definition — Gross-error contamination path
- `def-huber-contamination-model` · definition — Huber contamination model
- `def-adversarial-sample-replacement` · definition — Adversarial sample replacement
- `lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold` · lemma — TV-close laws have identical Huber mixtures at the contamination threshold
- `def-contamination-robust-risk` · definition — Contamination-robust expected risk and tail risk
- `def-contamination-modulus` · definition — Huber contamination modulus
- `thm-huber-contamination-modulus-lower-bound` · theorem — Huber contamination modulus lower bound for tail risk

### `contamination-models-and-robust-risk-examples` — Contamination and Robust Risk — Examples

- `ex-mean-gross-error-path-has-unbounded-sensitivity` · example — The mean has an unbounded directional derivative supremum
- `ex-bounded-sample-mean-under-replacement` · example — Bounded sample-mean change under replacements and a common corrupted sample
- `ex-bernoulli-huber-modulus-and-identical-mixtures` · example — Exact Bernoulli Huber modulus and indistinguishable mixtures

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `contamination-models-and-robust-risk` requires `losses-risk-and-decision-rules`
- `contamination-models-and-robust-risk` requires `minimax-lower-bounds-and-information-theoretic-methods`
- `robust-influence-and-breakdown` requires `contamination-models-and-robust-risk`
- `robust-mean-estimation-under-heavy-tails` requires `contamination-models-and-robust-risk`
- `robust-covariance-and-high-dimensional-stability` requires `contamination-models-and-robust-risk`
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
