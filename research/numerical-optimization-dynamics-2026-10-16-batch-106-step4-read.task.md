# Step 4 batch reviewer — batch **106**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **106**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["106"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 106 | `langevin-splittings-and-invariant-measure-error` | A | langevin-monte-carlo-mala-and-ula, milstein-stochastic-taylor-and-iterated-integrals, imex-and-operator-splitting-methods, laplace-approximation-and-marginal-integration |
| 106 | `langevin-splittings-and-invariant-measure-error-examples` | B | langevin-splittings-and-invariant-measure-error |

## Your content, in full

### `langevin-splittings-and-invariant-measure-error` — Langevin splittings and invariant measure error

- `def-underdamped-langevin-equation-and-canonical-gibbs-density` · definition — Underdamped Langevin equation and canonical Gibbs density
- `alg-baoab-underdamped-langevin-splitting` · algorithm — BAOAB underdamped Langevin splitting
- `lem-exact-ornstein-uhlenbeck-momentum-substep` · lemma — Exact Ornstein–Uhlenbeck momentum transition and covariance
- `lem-stable-gaussian-autoregression-invariant-law` · lemma — Invariant Gaussian law and uniqueness for a stable autoregression
- `thm-underdamped-langevin-canonical-measure-is-stationary` · theorem — The canonical Gibbs measure is stationary for underdamped Langevin dynamics
- `thm-harmonic-baoab-invariant-law-and-stability-limit` · theorem — Exact invariant covariance and stability threshold for scalar harmonic BAOAB
- `lem-baoab-one-step-error-moment-bounds` · lemma — Moment-weighted local defect bounds for BAOAB
- `thm-baoab-finite-time-strong-order-one` · theorem — Finite-time strong order one of BAOAB
- `lem-baoab-one-step-weak-expansion` · lemma — Symmetric BAOAB one-step weak expansion
- `thm-baoab-finite-time-weak-order-two` · theorem — Finite-time weak order two of BAOAB

### `langevin-splittings-and-invariant-measure-error-examples` — Langevin splittings and invariant measure error — Examples

- `ex-harmonic-baoab-thermostat-covariance` · example — Harmonic BAOAB thermostat: exact position variance and kinetic bias
- `ex-unstable-baoab-step-has-no-invariant-law` · example — An unstable harmonic BAOAB step has no invariant probability
- `ex-constant-potential-has-no-canonical-gibbs-probability` · example — A constant potential has no canonical Gibbs probability on the line
- `ex-ula-and-baoab-have-distinct-harmonic-variance-bias` · example — Overdamped ULA and underdamped BAOAB have different harmonic variance errors

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `langevin-splittings-and-invariant-measure-error` requires `milstein-stochastic-taylor-and-iterated-integrals`
- `langevin-splittings-and-invariant-measure-error` requires `imex-and-operator-splitting-methods`
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
