# Step 4 batch reviewer — batch **4**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **4**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["4"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 4 | `minimax-approximation-and-remez-algorithms` | A | polynomial-approximation-and-chebyshev-interpolation |
| 4 | `minimax-approximation-and-remez-algorithms-examples` | B | minimax-approximation-and-remez-algorithms |

## Your content, in full

### `minimax-approximation-and-remez-algorithms` — Minimax approximation and remez algorithms

- `def-na-best-polynomial-uniform-error` · definition — Best uniform polynomial error on a compact interval
- `lem-na-extrema-sign-block-polynomial` · lemma — A polynomial with the sign pattern of the active extrema
- `lem-na-polynomial-alternating-signs-force-root-count` · lemma — Alternating polynomial signs force the Haar zero-count contradiction
- `lem-na-polynomial-coefficient-bound-from-fixed-nodes` · lemma — Polynomial coefficients are bounded by values at fixed distinct nodes
- `lem-na-polynomial-interpolation-alternating-weight-annihilator` · lemma — Alternating interpolation weights annihilate lower-degree polynomials
- `lem-na-reduced-rational-representation-unique` · lemma — Reduced real rational representations are unique up to scale
- `def-na-weighted-rational-minimax-family` · definition — Weighted rational minimax families and defect
- `lem-na-polynomial-remez-system-invertible` · lemma — The Remez alternation linear system has a unique solution
- `thm-na-best-polynomial-approximation-exists` · theorem — Best uniform polynomial approximants exist
- `thm-na-polynomial-equioscillation-certificate` · theorem — Exact polynomial equioscillation certifies best approximation
- `alg-na-minimax-approximation-and-remez-algorithms` · algorithm — Finite-budget polynomial Remez exchange with an exact extrema oracle
- `lem-na-rational-perturbation-space` · lemma — The rational first-variation space has dimension set by defect
- `thm-na-best-weighted-rational-approximation-exists` · theorem — Best weighted rational approximants exist
- `thm-na-polynomial-alternation-necessity` · theorem — A nonzero best polynomial error must alternate at n+2 extrema
- `cor-na-best-polynomial-approximation-unique` · corollary — The best uniform polynomial approximant is unique
- `thm-na-polynomial-remez-budget-termination` · theorem — A budgeted polynomial Remez exchange terminates within its finite cap
- `thm-na-weighted-rational-alternation-characterization` · theorem — Weighted rational minimizers satisfy the defect-sensitive alternation criterion
- `alg-na-weighted-rational-remez-exchange` · algorithm — Finite-budget weighted rational Remez exchange with defect status
- `thm-na-weighted-rational-remez-budget-termination` · theorem — A budgeted weighted rational Remez exchange terminates within its finite cap

### `minimax-approximation-and-remez-algorithms-examples` — Minimax approximation and remez algorithms — Examples

- `ex-na-remez-zero-degree-equioscillation-certificate` · example — A two-node degree-zero Remez certificate
- `ex-na-degree-one-minimax-of-square` · example — The degree-one minimax approximation to x squared
- `cex-na-defective-rational-approximation-naive-count` · counterexample — A defective rational minimizer can have fewer than m+n+2 extrema

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `barycentric-rational-and-aaa-approximation` requires `minimax-approximation-and-remez-algorithms`
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
