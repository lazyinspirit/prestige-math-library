# Step 4 batch reviewer — batch **56**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **56**. Step-5 owning group: **ai**.
Return `group: "ai"` and `batches: ["56"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 56 | `parabolic-finite-element-methods` | A | finite-element-meshes-and-interpolation, ceas-lemma-and-aubin-nitsche-error-estimates, the-direct-method-and-euler-lagrange-equations |
| 56 | `parabolic-finite-element-methods-examples` | B | parabolic-finite-element-methods |

## Your content, in full

### `parabolic-finite-element-methods` — Parabolic finite-element methods

- `def-parabolic-evolution-triple-and-energy-space` · definition — Evolution triples and the parabolic energy space
- `lem-parabolic-bochner-l2-approximate-identity` · lemma — Smooth mollifiers approximate Bochner L² functions
- `lem-parabolic-discrete-energy-identity` · lemma — The Hilbert-space discrete energy identity
- `lem-parabolic-hilbert-bnb-criterion` · lemma — The Hilbert-space Babuška–Nečas–Babuška criterion
- `alg-parabolic-backward-euler-averaged-forms` · algorithm — Backward Euler FEM with interval-averaged forms and load
- `alg-parabolic-crank-nicolson-cg1` · algorithm — Crank–Nicolson and cG(1) for an autonomous parabolic form
- `lem-parabolic-bochner-time-mollification` · lemma — Time mollification preserves the evolution-space derivative
- `lem-parabolic-measurable-form-operators-and-inverse` · lemma — Measurable actions and inverse actions of parabolic forms
- `lem-parabolic-projection-time-product-rule` · lemma — Time derivatives of fixed and differentiable comparison projections
- `lem-parabolic-weak-compactness-separable-bochner-hilbert` · lemma — Bounded sequences in a separable Hilbert space have weakly convergent subsequences
- `lem-parabolic-zero-boundary-sobolev-space-is-separable` · lemma — The zero-boundary Sobolev energy space is a separable Hilbert space
- `thm-parabolic-finite-dimensional-measurable-ode` · theorem — Finite-dimensional parabolic Galerkin ODEs with measurable coefficients
- `def-parabolic-ritz-projection` · definition — The elliptic Ritz projection for a conforming finite-element space
- `lem-parabolic-energy-pairing-and-trace` · lemma — The evolution-space energy identity and continuous H trace
- `thm-parabolic-backward-euler-error-and-reconstruction` · theorem — Backward Euler stability, first-order error for exact initial data, and reconstruction bounds
- `thm-parabolic-crank-nicolson-second-order` · theorem — Second-order Crank–Nicolson nodal error for exact initial data under H2 time regularity
- `lem-parabolic-ritz-projection-well-defined` · lemma — Existence, uniqueness, linearity, and boundedness of the Ritz projection
- `thm-parabolic-variational-wellposedness-and-energy-stability` · theorem — Well-posedness for measurable coercive parabolic forms
- `thm-parabolic-fem-semidiscrete-existence-energy` · theorem — Well-posedness and energy stability of the semidiscrete FEM system
- `thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound` · theorem — Semidiscrete Ritz error splitting and energy estimate
- `cor-parabolic-semidiscrete-spatial-error-rates` · corollary — Semidiscrete parabolic energy and L2 rates from elliptic approximation

### `parabolic-finite-element-methods-examples` — Parabolic finite-element methods — Examples

- `ex-parabolic-crank-nicolson-time-regularity-order-loss` · example — A solution with only H1 time regularity loses CN second order
- `ex-parabolic-heat-initial-projection-error` · example — The L2 projection and Ritz projection give different initial data
- `ex-parabolic-semidiscrete-ritz-error-identity` · example — Direct derivation of the semidiscrete Ritz residual

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `parabolic-finite-element-methods` requires `finite-element-meshes-and-interpolation`
- `parabolic-finite-element-methods` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `parabolic-finite-element-methods`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `parabolic-finite-element-methods`
- `finite-element-pde-constrained-optimization` requires `parabolic-finite-element-methods`
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
