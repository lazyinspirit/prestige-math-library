# Step 4 batch reviewer — batch **26**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **26**. Step-5 owning group: **w**.
Return `group: "w"` and `batches: ["26"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 26 | `revised-simplex-linear-programming-and-certificates` | A | finite-precision-direct-factorizations, sparse-matrix-models-and-kernel-costs, inequality-kkt-duality-and-optimality-certificates |
| 26 | `revised-simplex-linear-programming-and-certificates-examples` | B | revised-simplex-linear-programming-and-certificates |

## Your content, in full

### `revised-simplex-linear-programming-and-certificates` — Revised simplex linear programming and certificates

- `def-revised-simplex-standard-form-linear-program` · definition — Revised simplex standard-form linear program
- `def-revised-simplex-basis-dictionary` · definition — Basis dictionaries and reduced costs for revised simplex
- `alg-revised-simplex-residual-audit` · algorithm — Exact residual audit of finite-precision simplex candidates
- `lem-revised-simplex-basic-feasible-extreme-point-equivalence` · lemma — Basic feasible solutions, extreme points, and basis existence
- `thm-revised-simplex-primal-pivot-objective-ray-optimality` · theorem — Primal revised-simplex pivot identities and certificates
- `alg-revised-primal-simplex-bland-rule` · algorithm — Primal revised simplex with Bland's rule
- `alg-revised-dual-simplex-with-finite-budget` · algorithm — Dual revised simplex with a finite pivot budget
- `prop-revised-simplex-sparse-pricing-operation-count` · proposition — Sparse reduced-cost pricing operation count
- `thm-revised-simplex-primal-dual-residual-gap` · theorem — Primal-dual residual gap bound for a simplex candidate
- `thm-revised-simplex-bland-rule-finite-termination` · theorem — Bland-rule finite termination and optimal-basis existence
- `thm-revised-dual-simplex-invariant-and-farkas` · theorem — Dual-simplex invariant and Farkas infeasibility certificate
- `alg-revised-simplex-phase-one` · algorithm — Phase I revised simplex and rank reduction
- `thm-revised-simplex-phase-one-extraction-and-farkas` · theorem — Phase I feasible-basis extraction and infeasibility certificate
- `alg-revised-simplex-qr-basis-recompute-and-audit` · algorithm — Revised-simplex basis QR recomputation with finite residual and pivot statuses
- `thm-revised-simplex-qr-basis-residual-status-sound` · theorem — Finite QR basis recomputation has sound residual and stored-data audit statuses

### `revised-simplex-linear-programming-and-certificates-examples` — Revised simplex linear programming and certificates — Examples

- `ex-revised-simplex-unbounded-ray` · example — A revised-simplex unbounded ray
- `ex-revised-simplex-ill-conditioned-basis-residual` · example — A small residual at an ill-conditioned basis
- `ex-revised-simplex-primal-dual-trace` · example — A one-pivot primal and dual certificate trace
- `ex-revised-simplex-degenerate-cycle-prevented-by-bland` · example — A degenerate six-pivot cycle prevented by Bland's rule
- `ex-revised-simplex-phase-one-infeasible` · example — An infeasible Phase I problem and its Farkas certificate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `revised-simplex-linear-programming-and-certificates` requires `finite-precision-direct-factorizations`
- `revised-simplex-linear-programming-and-certificates` requires `sparse-matrix-models-and-kernel-costs`
- `revised-simplex-linear-programming-and-certificates` requires `inequality-kkt-duality-and-optimality-certificates`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
