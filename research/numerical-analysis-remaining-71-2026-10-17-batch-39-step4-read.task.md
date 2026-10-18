# Step 4 batch reviewer — batch **39**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **39**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["39"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 39 | `nonlinear-parabolic-compactness-and-monotone-evolution` | A | parabolic-finite-element-methods, homology-axioms-degree-and-classical-applications |
| 39 | `nonlinear-parabolic-compactness-and-monotone-evolution-examples` | B | nonlinear-parabolic-compactness-and-monotone-evolution |

## Your content, in full

### `nonlinear-parabolic-compactness-and-monotone-evolution` — Nonlinear parabolic compactness and monotone evolution

- `def-pe12-gelfand-triple` · definition — Banach evolution triples and weak time derivatives
- `lem-pe12-w1p-compact-l2-embedding` · lemma — The subcritical W0 one p embedding into L2
- `lem-pe12-bochner-lp-mollification` · lemma — Time translations and mollification in Bochner Lp
- `lem-pe12-w0p-separable-reflexive` · lemma — The zero-boundary W1p space is separable and reflexive
- `thm-pe12-bochner-lp-completeness` · theorem — Bochner Lp is complete for a Banach value space
- `lem-pe12-outward-zero-brouwer` · lemma — An outward-pointing finite-dimensional map has a zero
- `lem-pe12-quasiuniform-mass-inverse-decay` · lemma — Quasi-uniform finite-element mass inverses have summable graph decay
- `def-pe12-monotone-diffusion-flux` · definition — Coercive monotone p-growth diffusion fluxes
- `def-pe12-stable-conforming-fem-family` · definition — Conforming FEM families with stable L2 projectors
- `lem-pe12-evolution-energy-chain-rule` · lemma — The Banach evolution-space energy identity and H trace
- `thm-pe12-aubin-lions-compactness` · theorem — Aubin–Lions compactness with exact time exponent
- `lem-pe12-space-time-gradient-weak-compactness` · lemma — Weak compactness of bounded space-time Sobolev gradients
- `thm-pe12-discrete-aubin-lions-compactness` · theorem — Piecewise-constant discrete Aubin–Lions compactness
- `lem-pe12-boundary-preserving-quasi-interpolation` · lemma — Boundary-preserving quasi-interpolation is stable and strongly approximating
- `lem-pe12-minty-identification` · lemma — Minty identification for a monotone Carathéodory flux
- `thm-pe12-strong-monotone-residual-estimate` · theorem — Quantitative residual error under strong monotonicity
- `thm-pe12-l2-projector-w1p-stability` · theorem — L2 projections are uniformly W1p-stable on quasi-uniform conforming meshes
- `thm-pe12-backward-euler-galerkin-existence-energy` · theorem — Nonlinear backward Euler Galerkin existence and energy bounds
- `thm-pe12-monotone-fem-limit` · theorem — Conditional monotone finite-element convergence

### `nonlinear-parabolic-compactness-and-monotone-evolution-examples` — Nonlinear parabolic compactness and monotone evolution — Examples

- `ex-pe12-porous-medium-barenblatt` · example — A Barenblatt profile has finite propagation
- `cex-pe12-linear-ritz-does-not-commute` · counterexample — The linear Ritz projection need not preserve the nonlinear p-Laplacian residual
- `ex-pe12-time-oscillations-without-derivative-control` · example — Time oscillations defeat compactness without derivative control
- `ex-pe12-p-laplacian` · example — The p-Laplacian is an admissible monotone diffusion

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `energy-stable-incompressible-navier-stokes-discretization` requires `nonlinear-parabolic-compactness-and-monotone-evolution`
- `finite-volume-diffusion-and-mimetic-fluxes` requires `nonlinear-parabolic-compactness-and-monotone-evolution`
- `nonlinear-full-approximation-multigrid` requires `nonlinear-parabolic-compactness-and-monotone-evolution`
- `phase-field-and-energy-dissipative-discretization` requires `nonlinear-parabolic-compactness-and-monotone-evolution`
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
