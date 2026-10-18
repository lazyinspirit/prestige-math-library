# Step 4 batch reviewer — batch **7**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **7**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["7"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 7 | `f-divergences-renyi-and-hypothesis-testing` | A | measure-theoretic-information-and-conditioning, finite-sample-tests-neyman-pearson-and-valid-p-values |
| 7 | `f-divergences-renyi-and-hypothesis-testing-examples` | B | f-divergences-renyi-and-hypothesis-testing |

## Your content, in full

### `f-divergences-renyi-and-hypothesis-testing` — F-Divergences, Rényi Information, and Hypothesis Testing

- `def-finite-probability-vector` · definition — Finite probability vectors
- `lem-convex-generator-boundary-limits-exist` · lemma — Boundary limits of a normalized finite convex generator exist
- `lem-finite-kl-generator-is-admissible` · lemma — The finite KL generator has the required convex boundary extension
- `lem-finite-renyi-generators-are-convex` · lemma — The finite Rényi generators are convex with stated boundary values
- `def-finite-f-divergence` · definition — Finite f-divergence with support conventions
- `def-finite-hypothesis-testing-beta` · definition — Finite type-II testing function with explicit orientation
- `def-finite-stochastic-kernel` · definition — Finite stochastic kernels
- `def-finite-kullback-leibler-divergence` · definition — Finite Kullback–Leibler divergence
- `lem-convex-perspective-is-subadditive` · lemma — The closed convex perspective is subadditive
- `def-finite-renyi-divergence` · definition — Finite Rényi divergence
- `lem-finite-iid-log-likelihood-concentrates` · lemma — Finite iid log-likelihood averages concentrate
- `thm-finite-f-divergence-data-processing` · theorem — Finite data processing for f-divergences
- `thm-finite-kullback-leibler-data-processing` · theorem — Finite data processing for Kullback–Leibler divergence
- `thm-finite-renyi-data-processing` · theorem — Finite data processing for Rényi divergence
- `thm-finite-renyi-limit-is-kullback-leibler` · theorem — The finite Rényi divergence limit is KL
- `thm-kl-is-iid-type-ii-error-exponent` · theorem — KL is the iid type-II testing exponent

### `f-divergences-renyi-and-hypothesis-testing-examples` — F-Divergences, Rényi Information, and Hypothesis Testing — Examples

- `ex-binary-neyman-pearson-randomized-threshold` · example — A binary Neyman–Pearson boundary randomization
- `ex-binary-f-and-renyi-divergences` · example — Binary f-, KL-, and Rényi divergences
- `ex-disjoint-support-f-and-renyi-divergences` · example — Disjoint supports and singular divergence values

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `f-divergences-renyi-and-hypothesis-testing` requires `measure-theoretic-information-and-conditioning`
- `discrete-memoryless-channel-capacity` requires `f-divergences-renyi-and-hypothesis-testing`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
