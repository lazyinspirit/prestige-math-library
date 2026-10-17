# Step 4 batch reviewer — batch **52**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **52**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["52"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 52 | `stability-regions-and-stiff-equations` | A | runge-kutta-methods-and-order, linear-multistep-methods-and-dahlquist-equivalence |
| 52 | `stability-regions-and-stiff-equations-examples` | B | stability-regions-and-stiff-equations |

## Your content, in full

### `stability-regions-and-stiff-equations` — Stability regions and stiff equations

- `def-matrix-contractivity-and-logarithmic-norm` · definition — Matrix-step contractivity and the logarithmic norm in a specified inner product
- `def-absolute-stability-regions-for-one-step-and-multistep-methods` · definition — Scalar absolute stability, A-stability, L-stability, and multistep root regions
- `thm-backward-euler-a-and-l-stability` · theorem — Backward Euler is A-stable and L-stable
- `thm-trapezoidal-a-stable-not-l-stable` · theorem — The trapezoidal rule is A-stable but not L-stable
- `lem-bdf2-root-locus-location` · lemma — BDF2 roots on or outside the unit disk map to the closed right half-plane
- `thm-explicit-euler-absolute-stability-disk` · theorem — Forward Euler has the closed unit disk centered at −1 as its absolute-stability region
- `thm-bdf2-is-a-stable` · theorem — Constant-step BDF2 is A-stable under the multistep root condition
- `prop-bdf2-roots-vanish-in-stiff-limit` · proposition — Both constant-step BDF2 test roots vanish in the stiff limit

### `stability-regions-and-stiff-equations-examples` — Stability regions and stiff equations — Examples

- `cex-backward-euler-scalar-stability-not-matrix-contractivity` · counterexample — Backward Euler scalar A-stability does not imply matrix contractivity
- `ex-forward-euler-frequency-step-restriction` · example — Forward Euler's stability region restricts both decay rate and frequency
- `ex-diagonal-fast-slow-system-restricts-explicit-step` · example — A fast component restricts the forward-Euler step in a diagonal fast-slow system
- `ex-stiff-decay-mode-damping-comparison` · example — Backward Euler and BDF2 damp a fast scalar mode while trapezoidal does not

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `stability-regions-and-stiff-equations` requires `runge-kutta-methods-and-order`
- `stability-regions-and-stiff-equations` requires `linear-multistep-methods-and-dahlquist-equivalence`
- `positive-conservative-production-destruction-integrators` requires `stability-regions-and-stiff-equations`
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
