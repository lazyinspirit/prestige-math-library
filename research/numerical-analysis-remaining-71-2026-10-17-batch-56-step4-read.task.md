# Step 4 batch reviewer — batch **56**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **56**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["56"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 56 | `supg-and-residual-based-stabilized-finite-elements` | A | variational-crimes-and-strang-lemmas, energy-stable-incompressible-navier-stokes-discretization |
| 56 | `supg-and-residual-based-stabilized-finite-elements-examples` | B | supg-and-residual-based-stabilized-finite-elements |

## Your content, in full

### `supg-and-residual-based-stabilized-finite-elements` — SUPG, residual stabilization and variational multiscale methods

- `def-supg-one-dimensional-convection-diffusion-model` · definition — One-dimensional stationary convection–diffusion model and uniform P1 space
- `def-supg-general-convection-diffusion-reaction-model` · definition — Stationary multidimensional convection–diffusion–reaction P1 model
- `def-supg-pspg-grad-div-stokes-forms` · definition — Residual PSPG and grad-div terms for equal-order flow spaces
- `def-supg-variational-multiscale-block-closure` · definition — Finite-dimensional resolved–unresolved VMS split and residual closure
- `def-supg-one-dimensional-residual-form` · definition — One-dimensional residual SUPG form with the exact cell parameter
- `def-supg-general-residual-form` · definition — Multidimensional P1 SUPG residual form and parameter scaling
- `lem-supg-one-dimensional-l2-interpolation-estimate` · lemma — One-dimensional P1 interpolation has an L2 error bound
- `lem-supg-general-p1-interpolation-estimate` · lemma — Shape-regular affine P1 interpolation estimates for C2 functions
- `thm-supg-pspg-stokes-coercivity` · theorem — P1 PSPG Stokes form is coercive in its stabilization norm
- `thm-supg-vms-schur-defect-bound` · theorem — Finite-dimensional VMS residual closure has an explicit Schur defect bound
- `lem-supg-one-dimensional-optimal-parameter` · lemma — The one-dimensional SUPG parameter is positive and bounded
- `thm-supg-general-p1-error-and-stability` · theorem — Multidimensional P1 SUPG consistency, coercivity, and error bound
- `thm-supg-one-dimensional-consistency-coercivity` · theorem — One-dimensional P1 SUPG is consistent and coercive
- `thm-supg-one-dimensional-energy-error` · theorem — One-dimensional SUPG energy error bound with explicit tau dependence

### `supg-and-residual-based-stabilized-finite-elements-examples` — SUPG, residual stabilization and variational multiscale methods — Examples

- `ex-supg-q1-equal-order-pressure-checkerboard` · example — A periodic Q1/Q1 checkerboard pressure mode is invisible to divergence
- `ex-supg-grad-div-does-not-fix-pressure-kernel` · example — Grad-div alone does not remove the Q1 checkerboard pressure kernel
- `ex-supg-vms-two-scale-closure-defect-sharp` · example — A two-scale VMS closure attains its Schur defect bound
- `ex-supg-overlarge-stabilization-smears-solution` · example — Overlarge streamline stabilization suppresses a one-cell solution
- `ex-supg-convection-boundary-layer-coarse-mesh` · example — A two-cell SUPG mesh misses the interior shape of an outflow layer

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `supg-and-residual-based-stabilized-finite-elements` requires `energy-stable-incompressible-navier-stokes-discretization`
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
