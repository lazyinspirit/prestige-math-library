# Step 4 batch reviewer — batch **46**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **46**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["46"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 46 | `nonlinear-full-approximation-multigrid` | A | multigrid-methods-and-complexity, nonlinear-equations-and-newton-methods, nonlinear-parabolic-compactness-and-monotone-evolution |
| 46 | `nonlinear-full-approximation-multigrid-examples` | B | nonlinear-full-approximation-multigrid |

## Your content, in full

### `nonlinear-full-approximation-multigrid` — Nonlinear full-approximation multigrid

- `alg-fas-two-grid-cycle` · algorithm — Finite-budget nonlinear FAS two-grid cycle
- `lem-fas-second-derivative-of-composed-cycle-map` · lemma — Second derivative formula for a composed cycle map
- `alg-fas-vw-cycle` · algorithm — Finite-budget recursive nonlinear FAS V/W cycle
- `lem-fas-coarse-branch-derivative` · lemma — Derivative of the exact-branch FAS two-grid cycle
- `lem-fas-vw-cycle-work-and-status` · lemma — A finite FAS V/W cycle terminates with bounded stated work
- `lem-fas-fine-root-fixed-point` · lemma — An exact fine root is fixed by the FAS V/W cycle
- `thm-fas-local-contraction-under-derivative-bound` · theorem — A smooth FAS cycle converges locally under its actual derivative bounds
- `lem-fas-linear-vw-cycle-translation` · lemma — A linear Galerkin V/W cycle is translation-covariant
- `thm-fas-linear-cycle-reduces-to-galerkin-correction` · theorem — Linear FAS exactly reduces to a Galerkin correction V/W cycle
- `lem-fas-inexact-coarse-solve-residual-defect` · lemma — An inexact FAS coarse solve contributes a bounded correction defect
- `ex-fas-semilinear-reaction-diffusion-local-convergence` · example — A two-node semilinear diffusion FAS cycle has an explicit local rate

### `nonlinear-full-approximation-multigrid-examples` — Nonlinear full-approximation multigrid — Examples

- `ex-fas-reaction-poisson-tau-cancellation` · example — The tau term recovers the restricted root in reaction Poisson
- `cex-fas-zero-tau-breaks-fine-root` · counterexample — Omitting tau can move an exact fine root
- `ex-fas-bifurcation-shrinks-contraction-ball` · example — The certified FAS contraction radius shrinks at a pitchfork
- `ex-fas-linear-cycle-equivalence` · example — A one-level linear FAS correction is the Galerkin correction

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `nonlinear-full-approximation-multigrid` requires `multigrid-methods-and-complexity`
- `nonlinear-full-approximation-multigrid` requires `nonlinear-parabolic-compactness-and-monotone-evolution`
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
