# Step 4 batch reviewer — batch **94**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **94**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["94"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 94 | `exponential-and-integrating-factor-integrators` | A | global-ode-and-density-error, matrix-exponential-and-phi-function-actions |
| 94 | `exponential-and-integrating-factor-integrators-examples` | B | exponential-and-integrating-factor-integrators |

## Your content, in full

### `exponential-and-integrating-factor-integrators` — Exponential and integrating factor integrators

- `lem-finite-matrix-semilinear-variation-of-constants` · lemma — Variation of constants for a finite-matrix semilinear system
- `lem-skew-hermitian-matrix-exponential-is-unitary` · lemma — A skew-Hermitian matrix exponential is unitary
- `lem-exponential-phi-integral-representations` · lemma — Integral representations of the first two phi functions
- `def-exponential-euler-and-etd2-step-maps` · definition — Exponential Euler and the two-stage ETD2 step maps
- `lem-exponential-integrator-interaction-picture-stability` · lemma — One-step stability after removing the exact linear flow
- `lem-exponential-euler-local-defect` · lemma — Exponential Euler has a second-order local defect
- `lem-etd2-local-defect` · lemma — The two-stage ETD2 method has a third-order local defect
- `alg-certified-exponential-euler-etd2-step` · algorithm — Certified-action implementation of exponential Euler and ETD2
- `lem-certified-exponential-step-action-error` · lemma — Certified action bounds control one exponential-integrator step
- `thm-exponential-euler-etd2-global-error-and-action` · theorem — Fixed-matrix global orders and certified-action error propagation

### `exponential-and-integrating-factor-integrators-examples` — Exponential and integrating factor integrators — Examples

- `ex-diagonal-stiff-diffusion-with-reaction-etd` · example — A diagonal stiff diffusion step with linear reaction
- `ex-nonnormal-transient-growth-exponential-step` · example — Exact exponential stepping captures nonnormal transient growth
- `ex-phi-functions-at-zero-no-division` · example — Phi functions at zero require no matrix division
- `ex-skew-hermitian-imaginary-time-unitary-step` · example — Real-time unitary and imaginary-time finite-matrix propagation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `exponential-and-integrating-factor-integrators` requires `global-ode-and-density-error`
- `exponential-and-integrating-factor-integrators` requires `matrix-exponential-and-phi-function-actions`
- `imex-and-operator-splitting-methods` requires `exponential-and-integrating-factor-integrators`
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
