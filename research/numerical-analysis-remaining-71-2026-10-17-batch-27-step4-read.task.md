# Step 4 batch reviewer — batch **27**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **27**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["27"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 27 | `gaussian-basis-integral-recurrences-and-boys-error` | A | stable-special-function-recurrences-and-certified-evaluation |
| 27 | `gaussian-basis-integral-recurrences-and-boys-error-examples` | B | gaussian-basis-integral-recurrences-and-boys-error |

## Your content, in full

### `gaussian-basis-integral-recurrences-and-boys-error` — Gaussian basis integral recurrences and boys error

- `def-cartesian-gaussian-primitives-and-contractions` · definition — Cartesian Gaussian primitives, contractions, and integral conventions
- `def-boys-function-and-coulomb-auxiliary-recurrence` · definition — Boys functions and lower incomplete-gamma notation
- `def-finite-gaussian-basis-variational-energy-and-gradient` · definition — Finite tensor contractions and their variational energy and gradient
- `thm-gaussian-product-theorem-and-polynomial-shift` · theorem — Gaussian product theorem and finite polynomial shifts
- `thm-boys-integral-identities-series-and-incomplete-gamma` · theorem — Boys integral, power series, recurrence, and incomplete-gamma representation
- `lem-boys-positive-midpoint-enclosure` · lemma — A positive midpoint enclosure for Boys functions on bounded arguments
- `lem-cartesian-gaussian-moments-and-parameter-derivatives` · lemma — Cartesian Gaussian moments and exponent-parameter derivatives
- `thm-gaussian-contraction-error-energy-gradient-bounds` · theorem — Explicit finite-dimensional contraction error bounds for energy and gradient
- `def-hermite-gaussian-coulomb-auxiliary-functions` · definition — Hermite Gaussian and Boys Coulomb auxiliary functions
- `thm-cartesian-gaussian-integrals-absolutely-convergent` · theorem — Absolute convergence and local parameter domination for Gaussian basis integrals
- `lem-boys-small-taylor-remainder` · lemma — A monotone-range Taylor remainder for small Boys arguments
- `lem-boys-incomplete-gamma-large-t-tail-bound` · lemma — A scaled incomplete-gamma tail bound for large Boys arguments
- `lem-boys-upward-downward-recurrence-error-amplification` · lemma — Upward and downward Boys recurrence error amplification bounds
- `thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence` · theorem — Finite Hermite expansion and coefficient recurrences for a Cartesian Gaussian pair
- `thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences` · theorem — Cartesian Gaussian raising, lowering, and kinetic-energy recurrences
- `thm-positive-coulomb-bilinear-cauchy-schwarz-screening` · theorem — Positive Coulomb bilinear form, Cauchy–Schwarz, and screening bound
- `thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas` · theorem — Hermite recurrence formulas for Gaussian nuclear-attraction and two-electron Coulomb integrals
- `alg-certified-boys-finite-budget-branch-evaluation` · algorithm — Finite-budget certified evaluation of Boys function tables
- `thm-boys-branch-evaluation-enclosures-are-sound` · theorem — Soundness of every successful finite-budget Boys enclosure
- `alg-finite-gaussian-basis-integral-recurrence-evaluation` · algorithm — Finite primitive and contracted Gaussian integral evaluation with certified screening
- `thm-finite-gaussian-integral-evaluator-soundness-and-screening-error` · theorem — Soundness and accumulated error bounds for the finite Gaussian integral evaluator

### `gaussian-basis-integral-recurrences-and-boys-error-examples` — Gaussian basis integral recurrences and boys error — Examples

- `ex-highly-contracted-gaussian-coefficients-amplify-error` · example — Highly contracted Gaussian coefficients amplify primitive integral error
- `ex-overlap-near-linear-dependence` · example — Nearly duplicate Gaussian primitives produce an ill-conditioned overlap matrix
- `ex-same-center-s-orbital-integrals` · example — Exact same-center s-orbital overlap, kinetic, attraction, and Coulomb integrals
- `ex-small-t-upward-boys-cancellation` · example — Small-argument cancellation in the upward Boys recurrence
- `ex-screened-coulomb-blocks-accumulate-error` · example — Coulomb screening must accumulate every discarded-block bound

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gaussian-basis-integral-recurrences-and-boys-error` requires `stable-special-function-recurrences-and-certified-evaluation`
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
