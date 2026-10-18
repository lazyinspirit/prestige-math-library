# Step 4 batch reviewer — batch **44**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **44**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["44"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 44 | `finite-volume-diffusion-and-mimetic-fluxes` | A | elliptic-finite-difference-methods, conservative-finite-volume-weak-limits, nonlinear-parabolic-compactness-and-monotone-evolution |
| 44 | `finite-volume-diffusion-and-mimetic-fluxes-examples` | B | finite-volume-diffusion-and-mimetic-fluxes |

## Your content, in full

### `finite-volume-diffusion-and-mimetic-fluxes` — Finite-volume diffusion on admissible meshes

- `def-fv-admissible-cell-face-mesh` · definition — Finite-volume cell-face meshes and geometric regularity
- `def-tpfa-harmonic-face-scheme` · definition — Orthogonal TPFA diffusion with harmonic face transmissibility
- `def-hybrid-mimetic-fv-scheme` · definition — Hybrid mimetic finite-volume diffusion on general meshes
- `def-fv-regular-simplicial-companion-family` · definition — Finite-volume families with a regular simplicial companion
- `thm-tpfa-green-coercivity-maximum-principle` · theorem — TPFA discrete Green identity, coercivity, and maximum principle
- `thm-path-certified-fv-discrete-poincare` · theorem — Discrete Poincaré inequality from boundary paths
- `prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact` · proposition — Coercivity, monotonicity, conservation, and affine exactness of the mimetic schemes
- `lem-fv-conforming-companion-and-test-recovery` · lemma — Finite-volume companions, mean tests and weak-gradient closure
- `thm-tpfa-flux-energy-convergence-smooth-interface` · theorem — TPFA flux-energy convergence for smooth face-aligned interfaces
- `thm-tpfa-discrete-rellich-and-physical-gradient-closure` · theorem — Discrete TPFA Rellich compactness and physical weak gradients
- `lem-mimetic-fv-parabolic-limit-identification` · lemma — Conditional monotone finite-volume parabolic limit identification
- `lem-hybrid-mimetic-backward-euler-energy-and-compactness` · lemma — Energy and computed-state compactness for hybrid mimetic backward Euler
- `thm-hybrid-mimetic-parabolic-weak-flux-limit` · theorem — Computed hybrid mimetic states and numerical fluxes converge to monotone diffusion

### `finite-volume-diffusion-and-mimetic-fluxes-examples` — Finite-volume diffusion on admissible meshes — Examples

- `ex-orthogonal-voronoi-harmonic-diffusion` · example — Harmonic TPFA flux on a rectangular Voronoï mesh
- `cex-nonorthogonal-two-point-flux-inconsistent` · counterexample — A nonorthogonal two-point flux gives a false transverse flux
- `ex-harmonic-transmissibility-material-interface` · example — Harmonic transmissibility across a one-dimensional material interface
- `ex-anisotropic-mimetic-flux-on-skew-cell` · example — Affine anisotropic flux on a skew parallelogram

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-volume-diffusion-and-mimetic-fluxes` requires `conservative-finite-volume-weak-limits`
- `finite-volume-diffusion-and-mimetic-fluxes` requires `nonlinear-parabolic-compactness-and-monotone-evolution`
- `compressible-viscous-flow-and-entropy-stable-fluxes` requires `finite-volume-diffusion-and-mimetic-fluxes`
- `reaction-diffusion-invariants-and-pattern-discretization` requires `finite-volume-diffusion-and-mimetic-fluxes`
- `phase-field-and-energy-dissipative-discretization` requires `finite-volume-diffusion-and-mimetic-fluxes`
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
