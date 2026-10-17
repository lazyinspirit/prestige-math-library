# Step 4 batch reviewer — batch **36**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **36**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["36"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 36 | `linear-multistep-methods-and-dahlquist-equivalence` | A | mixed-partials-taylor-and-extrema, picard-lindelof-and-first-order-odes, the-complex-exponential-and-eulers-formula, stationary-iterations-and-relaxation, linear-recurrences-and-rational-generating-functions, finite-probability-and-the-probabilistic-method |
| 36 | `linear-multistep-methods-and-dahlquist-equivalence-examples` | B | linear-multistep-methods-and-dahlquist-equivalence |

## Your content, in full

### `linear-multistep-methods-and-dahlquist-equivalence` — Linear multistep methods and Dahlquist equivalence

- `def-linear-multistep-method-consistency-order-and-root-condition` · definition — Linear multistep methods, consistency, order, and the root condition
- `lem-variable-step-adams-lagrange-weights` · lemma — Variable-step Adams weights are integrals of the actual-node Lagrange bases
- `alg-adams-pece-one-correction` · algorithm — Variable-step Adams predictor-evaluate-correct-evaluate procedure
- `lem-companion-powers-bounded-under-root-condition` · lemma — The root condition is equivalent to bounded powers of the multistep companion matrix
- `lem-linear-multistep-order-conditions-from-taylor` · lemma — Taylor moment conditions characterize the order of a linear multistep method
- `lem-variable-step-bdf2-interpolation-and-local-defect` · lemma — Quadratic interpolation gives the variable-step BDF2 formula and cubic residual
- `alg-variable-step-bdf2-with-selected-implicit-branch` · algorithm — Variable-step BDF2 with an explicit local implicit-branch rule
- `thm-dahlquist-equivalence-for-linear-multistep-methods` · theorem — Dahlquist equivalence for a consistent linear multistep method
- `lem-variable-step-bdf2-increment-ratio-recurrence` · lemma — The variable-step BDF2 parasitic increment contracts below the sharp ratio threshold
- `thm-variable-step-bdf2-order-two-under-ratio-bound` · theorem — Variable-step BDF2 is second-order convergent under a uniform ratio bound

### `linear-multistep-methods-and-dahlquist-equivalence-examples` — Linear multistep methods and Dahlquist equivalence — Examples

- `cex-repeated-unit-root-causes-linear-parasitic-growth` · counterexample — A repeated unit root causes a linearly growing parasitic mode
- `ex-one-pass-pece-differs-from-implicit-adams-stability` · example — One-pass PECE and fully implicit Adams have different stability
- `ex-repeated-interior-root-preserves-bounded-powers` · example — A repeated interior root preserves bounded companion powers
- `ex-simple-unit-circle-roots-give-bounded-oscillation` · example — Simple unit-circle roots give bounded oscillatory modes
- `ex-uniform-step-bdf2-satisfies-dahlquist-conditions` · example — Uniform-step BDF2 satisfies the Dahlquist conditions
- `cex-unrestricted-variable-step-ratios-amplify-bdf2-starter-error` · counterexample — Unrestricted variable-step ratios amplify a vanishing BDF2 starter error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `linear-multistep-methods-and-dahlquist-equivalence` requires `stationary-iterations-and-relaxation`
- `stability-regions-and-stiff-equations` requires `linear-multistep-methods-and-dahlquist-equivalence`
- `implicit-stiff-time-stepping-and-algebraic-error` requires `linear-multistep-methods-and-dahlquist-equivalence`
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
