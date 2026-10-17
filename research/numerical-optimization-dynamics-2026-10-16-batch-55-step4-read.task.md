# Step 4 batch reviewer — batch **55**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **55**. Step-5 owning group: **ah**.
Return `group: "ah"` and `batches: ["55"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 55 | `hyperbolic-finite-difference-methods` | A | wave-energy-finite-propagation-and-huygens, linear-scheme-stability-and-lax-equivalence, stationary-iterations-and-relaxation, parabolic-finite-difference-methods, finite-fourier-analysis-and-the-fast-fourier-transform |
| 55 | `hyperbolic-finite-difference-methods-examples` | B | hyperbolic-finite-difference-methods |

## Your content, in full

### `hyperbolic-finite-difference-methods` — Hyperbolic finite-difference methods

- `def-uniform-grid-and-difference-operators` · definition — Uniform periodic, infinite, and Dirichlet grid conventions
- `def-periodic-one-way-advection-schemes` · definition — Periodic advection schemes and the finite-interval upwind row
- `def-centered-leapfrog-wave-scheme` · definition — Centered leapfrog wave recurrence with Dirichlet and periodic rows
- `lem-dirichlet-grid-summation-by-parts` · lemma — One-dimensional discrete summation by parts with boundary terms
- `lem-dirichlet-grid-poincare-inequality` · lemma — A finite-grid Poincare inequality for zero endpoint values
- `thm-smooth-advection-stencils-consistent` · theorem — Smooth consistency orders for the five periodic advection stencils
- `thm-dirichlet-leapfrog-discrete-energy` · theorem — Coercive discrete energy for the Dirichlet leapfrog wave scheme
- `lem-periodic-advection-amplification-symbols` · lemma — Amplification symbols for periodic scalar advection stencils
- `thm-periodic-centered-wave-amplification-and-endpoint` · theorem — Periodic leapfrog amplification, finite-time bounds, and the Nyquist endpoint
- `thm-periodic-advection-power-stability` · theorem — Scheme-specific periodic power stability for scalar advection
- `thm-nearest-neighbor-cfl-domain-condition` · theorem — The nearest-neighbor CFL condition is necessary but not sufficient

### `hyperbolic-finite-difference-methods-examples` — Hyperbolic finite-difference methods — Examples

- `ex-wave-cfl-endpoint-and-energy-breakdown` · example — The Nyquist mode at and beyond the leapfrog CFL endpoint
- `ex-upwind-versus-downwind-advection` · example — Upwind damping versus downwind growth on a periodic grid
- `ex-centered-advection-consistent-but-unstable` · example — Centered advection is consistent and unstable under the CFL bound
- `ex-grid-fourier-stability-needs-a-common-space-lift` · example — Grid Fourier stability alone does not instantiate Lax equivalence

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hyperbolic-finite-difference-methods` requires `linear-scheme-stability-and-lax-equivalence`
- `hyperbolic-finite-difference-methods` requires `stationary-iterations-and-relaxation`
- `hyperbolic-finite-difference-methods` requires `parabolic-finite-difference-methods`
- `renewal-age-and-size-structured-numerical-methods` requires `hyperbolic-finite-difference-methods`
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
