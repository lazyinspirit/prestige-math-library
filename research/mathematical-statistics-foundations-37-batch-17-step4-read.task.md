# Step 4 batch reviewer — batch **17**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **17**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["17"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 17 | `minimax-lower-bounds-and-information-theoretic-methods` | A | losses-risk-and-decision-rules, dominated-experiments-likelihood-and-sufficiency, concentration-inequalities-and-tail-bounds, stationary-markov-chains-and-ergodic-limits |
| 17 | `minimax-lower-bounds-and-information-theoretic-methods-examples` | B | minimax-lower-bounds-and-information-theoretic-methods |

## Your content, in full

### `minimax-lower-bounds-and-information-theoretic-methods` — Minimax Lower Bounds

- `lem-sparse-hamming-packing` · lemma — A sparse Hamming packing for every $1\le k\le d/2$
- `def-kullback-leibler-divergence` · definition — Kullback–Leibler divergence
- `def-mutual-information-for-finite-hypothesis-testing` · definition — Mutual information for a finite uniform hypothesis experiment
- `thm-pinsker` · theorem — Pinsker’s inequality with event-supremum total variation
- `thm-product-kl-additivity` · theorem — Additivity of KL divergence for finite product laws
- `lem-gaussian-location-kl-formula` · lemma — KL divergence between equal-variance Gaussian location laws
- `thm-two-point-le-cam-risk-bound` · theorem — Two-point Le Cam lower bound for squared-error risk
- `thm-assouad-hypercube` · theorem — Assouad lower bound for a squared-error hypercube
- `thm-fano-packing` · theorem — Fano’s packing bound with a reference-distribution KL bound

### `minimax-lower-bounds-and-information-theoretic-methods-examples` — Minimax Lower Bounds — Examples

- `ex-gaussian-two-point-le-cam-lower-bound` · example — A Gaussian two-point lower bound
- `ex-sparse-gaussian-sequence-fano-lower-bound` · example — A sparse Gaussian sequence lower bound by Fano’s method
- `ex-gaussian-hypercube-assouad-lower-bound` · example — A dense Gaussian mean lower bound by Assouad’s method

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `minimax-lower-bounds-and-information-theoretic-methods` requires `losses-risk-and-decision-rules`
- `minimax-lower-bounds-and-information-theoretic-methods` requires `dominated-experiments-likelihood-and-sufficiency`
- `minimax-lower-bounds-and-information-theoretic-methods` requires `concentration-inequalities-and-tail-bounds`
- `decision-theoretic-upper-bounds-and-oracle-risk` requires `minimax-lower-bounds-and-information-theoretic-methods`
- `sparse-high-dimensional-estimation-and-covariance` requires `minimax-lower-bounds-and-information-theoretic-methods`
- `local-asymptotic-normality-contiguity-and-efficiency` requires `minimax-lower-bounds-and-information-theoretic-methods`
- `contamination-models-and-robust-risk` requires `minimax-lower-bounds-and-information-theoretic-methods`
- `robust-covariance-and-high-dimensional-stability` requires `minimax-lower-bounds-and-information-theoretic-methods`
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
