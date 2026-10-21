# Step 4 batch reviewer — batch **10**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **10**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["10"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 10 | `minimax-testing-and-detection-rates` | A | statistical-inverse-experiments-and-white-noise, gaussian-sequence-models-and-risk-decomposition, minimax-lower-bounds-and-information-theoretic-methods, cost-constrained-gaussian-and-feedback-channels, outward-rounded-interval-and-ball-arithmetic |
| 10 | `minimax-testing-and-detection-rates-examples` | B | minimax-testing-and-detection-rates |

## Your content, in full

### `minimax-testing-and-detection-rates` — Minimax signal detection and separation rates

- `lem-ip-weighted-chi-square-triangular-array-limit` · lemma — Weighted chi-square triangular-array limit
- `lem-ip-sparse-gaussian-extremal-profile` · lemma — Sparse Gaussian scalar certificate and extremal profile
- `lem-ip-finite-independent-array-fourth-moment-normal-limit` · lemma — A finite-array normal limit from vanishing fourth moments
- `def-ip-minimax-detection-risk-and-separation` · definition — Minimax detection risk and separation rate
- `lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r` · lemma — Existence of a finite q=2 ellipsoid extremal profile for small radius
- `lem-ip-q2-ellipsoid-extremal-profile-is-minimizer` · lemma — The q=2 ellipsoid extremal profile minimizes the fourth-power objective
- `lem-ip-gaussian-product-mixture-testing-bound` · lemma — Symmetric Gaussian product-mixture testing bound
- `thm-ip-sparse-detection-regime-split` · theorem — Sparse q<2 detection regime split
- `thm-ip-ellipsoid-detection-boundary` · theorem — q=2 Gaussian-sequence ellipsoid detection boundary
- `cor-ip-ellipsoid-sharp-gaussian-testing-asymptotics` · corollary — Sharp Gaussian asymptotics under a vanishing largest weight

### `minimax-testing-and-detection-rates-examples` — Minimax signal detection and separation rates — Examples and Counterexamples

- `ex-ip-sparse-detection-lambda-zero-boundary` · example — The lambda-zero sparse detection boundary
- `ex-ip-mildly-illposed-sobolev-detection-rate` · example — Mildly ill-posed Sobolev q=2 detection rate
- `ex-ip-mildly-illposed-analytic-detection-rate` · example — Mildly ill-posed analytic q=2 detection rate
- `ex-ip-severely-illposed-sobolev-detection-rate` · example — Severely ill-posed Sobolev q=2 detection rate
- `ex-ip-severely-illposed-analytic-detection-rate` · example — Severely ill-posed analytic q=2 detection rate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `minimax-testing-and-detection-rates` requires `statistical-inverse-experiments-and-white-noise`
- `minimax-testing-and-detection-rates` requires `gaussian-sequence-models-and-risk-decomposition`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
