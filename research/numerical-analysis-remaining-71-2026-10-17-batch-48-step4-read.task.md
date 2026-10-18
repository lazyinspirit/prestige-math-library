# Step 4 batch reviewer — batch **48**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **48**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["48"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 48 | `nystrom-product-integration-and-fredholm-error` | A | composite-quadrature-rules, gaussian-quadrature, compact-operators-and-riesz-schauder-theory |
| 48 | `nystrom-product-integration-and-fredholm-error-examples` | B | nystrom-product-integration-and-fredholm-error |

## Your content, in full

### `nystrom-product-integration-and-fredholm-error` — Nystrom product integration and fredholm error

- `def-nystrom-quadrature-and-finite-rank-operators` · definition — Nyström quadrature operators and their reconstructed equations
- `lem-finite-node-equation-reconstruction-equivalence` · lemma — Finite-node Nyström equations are equivalent to their reconstructed equations
- `lem-continuous-kernel-integral-operator-is-compact-on-c` · lemma — A continuous kernel defines a compact integral operator on C of an interval
- `thm-collectively-compact-operator-stability-and-error` · theorem — Collective compactness gives eventual Fredholm invertibility and solution error bounds
- `lem-half-order-singular-integral-exists` · lemma — The half-order diagonal singularity defines a bounded improper integral
- `lem-half-order-kernel-translation-modulus-in-l1` · lemma — Translations of the half-order kernel are continuous in the improper L1 norm
- `thm-nystrom-operator-norm-perturbation-error` · theorem — The operator-norm Nyström perturbation bound
- `lem-midpoint-nystrom-collective-compactness-and-consistency` · lemma — Composite midpoint Nyström operators are collectively compact and consistent
- `def-half-order-product-integration` · definition — Piecewise-linear product integration for a half-order diagonal singularity
- `lem-half-order-product-weights-closed-form` · lemma — Closed forms for the half-order piecewise-linear product weights
- `thm-midpoint-nystrom-smooth-solution-error` · theorem — Smooth-solution error bound for composite midpoint Nyström discretization
- `lem-half-order-product-integration-stability-and-consistency` · lemma — Stability, collective compactness, and consistency of half-order product integration
- `thm-half-order-product-integration-fredholm-error` · theorem — Fredholm error bound for half-order product integration

### `nystrom-product-integration-and-fredholm-error-examples` — Nystrom product integration and fredholm error — Examples

- `ex-gaussian-two-node-nystrom-exact-separable-equation` · example — A two-node Gaussian Nyström rule solves a rank-two separable equation exactly
- `ex-near-resonant-midpoint-solution-error` · example — A near-resonant Nyström equation amplifies midpoint quadrature error
- `cex-standard-midpoint-nystrom-not-operator-norm-convergent` · counterexample — Standard midpoint Nyström operators need not converge in operator norm on C
- `ex-half-order-midpoint-order-loss` · example — Direct midpoint quadrature loses order on a half-order singularity

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `volume-integral-scattering-and-partial-wave-error` requires `nystrom-product-integration-and-fredholm-error`
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
