# Step 4 batch reviewer — batch **59**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **59**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["59"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 59 | `quasi-monte-carlo-discrepancy-and-rules` | A | statistical-and-computational-error-accounting |
| 59 | `quasi-monte-carlo-discrepancy-and-rules-examples` | B | quasi-monte-carlo-discrepancy-and-rules |

## Your content, in full

### `quasi-monte-carlo-discrepancy-and-rules` — Deterministic quasi-Monte Carlo and discrepancy

- `def-star-discrepancy-and-digital-net` · definition — Star discrepancy, digital nets, and digital sequences
- `def-hardykrause-variation` · definition — Hardy–Krause variation anchored at the upper corner
- `lem-bounded-coordinatewise-monotone-is-riemann-integrable` · lemma — A bounded coordinatewise nondecreasing function on a cube is Riemann integrable
- `def-hardykrause-variation-lower-anchor` · definition — Hardy–Krause variation on subrectangles anchored at the lower corner
- `alg-digital-net-and-lattice-rule` · algorithm — Digital point-set and rank-one lattice cube quadrature
- `lem-hk-smooth-mixed-derivative-formula` · lemma — Mixed-derivative formula for smooth Hardy–Krause variation
- `lem-anchored-box-summation-by-parts-hk-variation` · lemma — Anchored-box summation by parts for finite Hardy–Krause variation
- `thm-uniform-distribution-integrates-riemann-functions` · theorem — Uniform distribution integrates Riemann-integrable functions
- `lem-finite-hardykrause-variation-implies-riemann-integrability` · lemma — Finite Hardy–Krause variation implies bounded Riemann integrability
- `thm-koksma-hlawka-integration-bound` · theorem — Koksma–Hlawka integration bound with upper-anchor variation

### `quasi-monte-carlo-discrepancy-and-rules-examples` — Deterministic quasi-Monte Carlo and discrepancy — Examples

- `ex-diagonal-lattice-poor-joint-projection` · example — Uniform coordinate projections can hide a poor joint projection
- `ex-digital-net-power-of-base-size-restriction` · example — Digital net sizes are powers of their base
- `ex-smooth-finite-hk-integrand-koksma-hlawka` · example — A smooth finite-variation integrand and its deterministic error bound
- `ex-inverse-cdf-integrable-singularity-infinite-variation` · example — An inverse-CDF singularity can be integrable but have infinite variation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quasi-monte-carlo-discrepancy-and-rules` requires `statistical-and-computational-error-accounting`
- `randomized-quasi-monte-carlo-and-replicates` requires `quasi-monte-carlo-discrepancy-and-rules`
---

# Step 4 Alpha batch reviewer — read-only digest, `bayesian-computational-statistics-62`

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
