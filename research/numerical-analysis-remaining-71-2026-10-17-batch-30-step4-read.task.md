# Step 4 batch reviewer — batch **30**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **30**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["30"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 30 | `riemann-solvers-for-hyperbolic-systems` | A | nonlinear-equations-and-newton-methods, periodic-orbit-shooting-collocation-and-floquet-error |
| 30 | `riemann-solvers-for-hyperbolic-systems-examples` | B | riemann-solvers-for-hyperbolic-systems |

## Your content, in full

### `riemann-solvers-for-hyperbolic-systems` — Riemann solvers for hyperbolic systems

- `def-hyperbolic-system-and-characteristic-families` · definition — Strictly hyperbolic conservation systems and characteristic families
- `def-rankine-hugoniot-and-lax-shocks` · definition — Rankine–Hugoniot jumps and Lax shocks
- `lem-smooth-simple-characteristic-eigenpairs` · lemma — Smooth local eigenpairs for a simple characteristic spectrum
- `def-ideal-gas-euler-state-and-pressure` · definition — Admissible states and pressure for one-dimensional ideal-gas Euler
- `def-roe-linearization-and-flux` · definition — Roe linearization and Roe numerical flux
- `def-hll-two-wave-flux` · definition — HLL two-wave approximate flux
- `def-scalar-convex-entropy-admissibility` · definition — Convex entropy admissibility for a scalar conservation law
- `def-local-rarefaction-curve` · definition — Local characteristic rarefaction curve
- `lem-rankine-hugoniot-jump-is-a-weak-solution` · lemma — A moving jump is a weak solution exactly under Rankine–Hugoniot
- `lem-local-characteristic-shock-curve` · lemma — Local shock curve by an augmented Rankine–Hugoniot equation
- `thm-one-dimensional-ideal-gas-euler-eigenstructure` · theorem — Eigenstructure of the admissible ideal-gas Euler system
- `def-euler-star-pressure-response` · definition — Ideal-gas rarefaction and shock pressure response
- `thm-roe-flux-is-consistent-and-conservative` · theorem — The Roe flux is consistent and conservative
- `thm-hll-flux-is-consistent-and-conservative` · theorem — The HLL flux follows from the conservative two-wave model
- `lem-euler-acoustic-wave-pressure-response` · lemma — Ideal-gas acoustic wave curves have the stated pressure response
- `lem-local-rarefaction-fan` · lemma — A local genuinely nonlinear curve generates a centered rarefaction fan
- `lem-linearly-degenerate-characteristic-contact` · lemma — A linearly-degenerate characteristic curve is a contact wave
- `thm-euler-star-pressure-root-and-vacuum-criterion` · theorem — The ideal-gas star-pressure root exists uniquely exactly below vacuum threshold
- `def-mixed-characteristic-wave-curve` · definition — Mixed local wave curve for a genuinely nonlinear or linearly degenerate family
- `alg-safeguarded-euler-star-pressure-solver` · algorithm — Finite-budget safeguarded Newton–bisection for Euler star pressure
- `lem-mixed-wave-curves-are-c1` · lemma — Mixed shock–rarefaction wave curves are continuously differentiable
- `lem-euler-pressure-solver-bracket-and-termination` · lemma — The safeguarded Euler pressure solver preserves its root bracket and terminates
- `thm-local-small-data-riemann-solver` · theorem — Local small-data Riemann solver near a strictly hyperbolic state
- `def-godunov-flux-from-a-local-riemann-solver` · definition — Godunov flux from the local Riemann solution
- `thm-godunov-flux-is-consistent-and-conservative` · theorem — The local Godunov flux is consistent and conservative

### `riemann-solvers-for-hyperbolic-systems-examples` — Riemann solvers for hyperbolic systems — Examples

- `cex-roe-jump-property-does-not-imply-entropy-admissibility` · counterexample — A Roe jump property does not imply entropy admissibility
- `ex-ideal-gas-contact-discontinuity` · example — A contact discontinuity with equal velocity and pressure
- `ex-euler-vacuum-threshold-boundary` · example — Euler vacuum detection at and above the pressure-root threshold
- `ex-sod-tube-pressure-root` · example — Sod tube: a unique star-pressure root between the initial pressures
- `ex-acoustic-system-local-riemann-solution` · example — An acoustic system resolved into two characteristic waves

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `high-resolution-tvd-eno-and-weno-methods` requires `riemann-solvers-for-hyperbolic-systems`
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
