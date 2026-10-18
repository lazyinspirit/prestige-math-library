# Step 4 batch reviewer — batch **55**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **55**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["55"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 55 | `volume-integral-scattering-and-partial-wave-error` | A | nystrom-product-integration-and-fredholm-error, stable-special-function-recurrences-and-certified-evaluation, randomized-quasi-monte-carlo-and-replicates |
| 55 | `volume-integral-scattering-and-partial-wave-error-examples` | B | volume-integral-scattering-and-partial-wave-error |

## Your content, in full

### `volume-integral-scattering-and-partial-wave-error` — Volume integral scattering and partial wave error

- `def-volume-integral-scattering-model` · definition — The three-dimensional volume integral scattering model
- `lem-finite-volume-hilbert-schmidt-rescaling` · lemma — Rescaling finite-measure kernel operators to probability spaces
- `lem-dyadic-cell-average-projections-converge-in-l2` · lemma — Dyadic cell-average projections converge strongly in L2 of a bounded set
- `def-spherical-harmonic-partial-wave-conventions` · definition — Spherical harmonics and partial-wave conventions in three dimensions
- `lem-three-dimensional-scattering-kernel-is-square-integrable` · lemma — The three-dimensional free-space scattering kernel is square integrable
- `lem-volume-far-field-map-is-bounded` · lemma — The volume far-field map is bounded and is the uniform far-field limit
- `lem-spherical-harmonics-form-complete-basis-and-addition-formula` · lemma — Spherical harmonics form a complete basis with the addition formula
- `lem-outgoing-helmholtz-kernel-is-a-fundamental-solution` · lemma — The outgoing three-dimensional Helmholtz kernel is a fundamental solution
- `lem-volume-integral-operator-well-defined-and-bounded` · lemma — The volume integral operator is well defined and bounded on L2
- `thm-exponential-partial-wave-truncation-bound` · theorem — Exponential coefficient decay gives a uniform partial-wave truncation bound
- `thm-volume-integral-operator-is-compact` · theorem — The volume integral scattering operator is compact
- `thm-volume-integral-scattering-born-neumann-error` · theorem — Born truncation error for a small-norm volume integral operator
- `def-volume-product-integration-scheme` · definition — Cell-volume product integration for the scattering kernel
- `thm-volume-integral-scattering-fredholm-stability` · theorem — Fredholm solvability and residual stability for volume scattering
- `thm-volume-scattering-radial-partial-wave-boundary-problem` · theorem — Radial volume scattering separates into matched partial-wave boundary problems
- `thm-volume-product-integration-solution-and-far-field-error` · theorem — Fredholm convergence and far-field error for cell-volume product integration

### `volume-integral-scattering-and-partial-wave-error-examples` — Volume integral scattering and partial wave error — Examples

- `ex-forward-plane-wave-fixed-partial-wave-cutoff-fails` · example — A fixed partial-wave cutoff misses the forward high-frequency plane wave
- `ex-small-norm-volume-scatterer-born-truncation` · example — A small-norm ball scatterer has a certified Born tail
- `ex-near-resonant-volume-operator-error-amplification` · example — A near-unit volume-operator mode amplifies forcing error
- `ex-radial-square-well-exact-partial-wave-matching` · example — Exact matching for the radial square well in the zeroth partial wave

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `volume-integral-scattering-and-partial-wave-error` requires `nystrom-product-integration-and-fredholm-error`
- `volume-integral-scattering-and-partial-wave-error` requires `stable-special-function-recurrences-and-certified-evaluation`
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
