# Step 4 batch reviewer — batch **59**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **59**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["59"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 59 | `compressible-viscous-flow-and-entropy-stable-fluxes` | A | variational-crimes-and-strang-lemmas, hyperbolic-dg-and-summation-by-parts-discretizations, finite-volume-diffusion-and-mimetic-fluxes |
| 59 | `compressible-viscous-flow-and-entropy-stable-fluxes-examples` | B | compressible-viscous-flow-and-entropy-stable-fluxes |

## Your content, in full

### `compressible-viscous-flow-and-entropy-stable-fluxes` — Compressible viscous flow and entropy-stable viscous fluxes

- `def-compressible-navier-stokes-fourier-model` · definition — Ideal-gas compressible Navier–Stokes–Fourier model
- `lem-compressible-admissible-state-set-open-convex` · lemma — The ideal-gas admissible state set is open and convex
- `lem-compressible-ideal-gas-entropy-pair-and-variables` · lemma — Strict convexity and entropy variables for the ideal-gas Euler flux
- `def-ideal-gas-entropy-conservative-pair-flux` · definition — Explicit entropy-conservative two-point Euler flux
- `lem-compressible-viscous-flux-entropy-variable-factorization` · lemma — Positive-semidefinite entropy-variable factorization of viscous flux
- `lem-ideal-gas-entropy-conservative-flux-properties` · lemma — Properties of the explicit entropy-conservative flux
- `lem-compressible-viscous-smooth-entropy-identity` · lemma — Smooth ideal-gas Navier–Stokes–Fourier entropy identity
- `def-periodic-sbp-compressible-viscous-scheme` · definition — Periodic diagonal-norm SBP compressible viscous scheme
- `def-orthogonal-fv-compressible-viscous-scheme` · definition — One-dimensional orthogonal finite-volume viscous scheme
- `thm-periodic-sbp-compressible-viscous-conservation-and-entropy` · theorem — Conservation and entropy dissipation of the periodic SBP scheme
- `lem-orthogonal-fv-compressible-viscous-flux-consistency` · lemma — Second-order face-flux consistency for the one-dimensional viscous operator
- `thm-orthogonal-fv-compressible-viscous-entropy-dissipation` · theorem — Entropy dissipation of the orthogonal finite-volume viscous scheme
- `alg-positive-tube-forward-euler-for-compressible-sbp` · algorithm — Finite-budget positive-tube forward Euler loop
- `lem-positive-tube-forward-euler-loop-terminates` · lemma — Termination of the finite-budget guarded forward-Euler loop
- `thm-fixed-mesh-forward-euler-error-for-compressible-sbp` · theorem — Conditional fixed-grid forward-Euler error bound

### `compressible-viscous-flow-and-entropy-stable-fluxes-examples` — Compressible viscous flow and entropy-stable viscous fluxes — Examples

- `ex-compressible-entropy-variable-blowup-near-vacuum` · example — Entropy variables leave compact positive-state tubes near vacuum
- `ex-periodic-compressible-viscous-manufactured-state` · example — A periodic manufactured compressible viscous state
- `ex-compressible-couette-thermal-wall-entropy-balance` · example — Couette flow with the thermal wall entropy balance
- `ex-sbp-inviscid-versus-viscous-entropy-budget` · example — An exact three-node inviscid-versus-viscous SBP entropy budget

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `compressible-viscous-flow-and-entropy-stable-fluxes` requires `hyperbolic-dg-and-summation-by-parts-discretizations`
- `compressible-viscous-flow-and-entropy-stable-fluxes` requires `finite-volume-diffusion-and-mimetic-fluxes`
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
