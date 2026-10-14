# Step 4 batch reviewer — batch **27**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **27**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["27"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 27 | `splines-series-and-approximation-rates` | A | decision-theoretic-upper-bounds-and-oracle-risk, nonparametric-regression-and-smoothing, losses-risk-and-decision-rules, weak-derivatives-and-sobolev-spaces, sobolev-traces-and-zero-boundary-values, inner-product-spaces-and-orthogonality |
| 27 | `splines-series-and-approximation-rates-examples` | B | splines-series-and-approximation-rates |

## Your content, in full

### `splines-series-and-approximation-rates` — Splines and Series Methods

- `def-b-spline-space-and-basis` · definition — B-spline spaces and knot conventions
- `def-natural-cubic-spline` · definition — Natural cubic splines
- `def-local-spline-quasi-interpolant` · definition — Bounded local spline quasi-interpolants
- `def-natural-cubic-smoothing-spline` · definition — Natural cubic smoothing spline
- `thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots` · theorem — Natural cubic interpolation at distinct knots
- `thm-spline-polynomial-reproduction` · theorem — B-spline basis properties and polynomial reproduction
- `def-series-spline-least-squares` · definition — Series least squares with a spline basis
- `thm-natural-cubic-smoothing-spline-exists-uniquely` · theorem — Existence, uniqueness, and spline reduction for cubic smoothing
- `thm-sobolev-spline-quasi-interpolant-rate` · theorem — Sobolev approximation by local spline quasi-interpolants
- `thm-series-training-risk` · theorem — Expected empirical training risk for spline series least squares
- `cor-series-spline-sobolev-training-risk-rate` · corollary — Sobolev rate for spline-series training risk

### `splines-series-and-approximation-rates-examples` — Splines and Series Methods — Examples

- `cex-one-observation-does-not-identify-a-smoothing-spline` · counterexample — One observation does not determine a natural cubic smoothing fit
- `ex-b-spline-basis-and-polynomial-reproduction` · example — A quadratic Bernstein B-spline basis
- `ex-natural-cubic-interpolants-on-two-and-three-knots` · example — Natural cubic interpolation with two and three knots
- `ex-uniform-mesh-linear-spline-approximation` · example — Uniform-mesh linear spline approximation
- `ex-spline-training-risk-can-differ-from-independent-test-risk` · example — Training risk and independent test risk are different quantities

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `splines-series-and-approximation-rates` requires `decision-theoretic-upper-bounds-and-oracle-risk`
- `splines-series-and-approximation-rates` requires `nonparametric-regression-and-smoothing`
- `splines-series-and-approximation-rates` requires `losses-risk-and-decision-rules`
---

# Step 4 Alpha batch reviewer — read-only digest, `mathematical-statistics-foundations-37`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
