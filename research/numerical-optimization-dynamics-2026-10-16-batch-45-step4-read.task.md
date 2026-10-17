# Step 4 batch reviewer — batch **45**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **45**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["45"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 45 | `fractional-evolution-and-convolution-quadrature` | A | composite-quadrature-rules, conformal-mapping-branches-and-the-schwarz-lemma |
| 45 | `fractional-evolution-and-convolution-quadrature-examples` | B | fractional-evolution-and-convolution-quadrature |

## Your content, in full

### `fractional-evolution-and-convolution-quadrature` — Fractional evolution and convolution quadrature

- `lem-fractional-integral-kernel-power-integral` · lemma — Integral of the fractional power kernel
- `def-caputo-derivative-and-fractional-integral` · definition — Fractional integral and Caputo derivative
- `lem-continuous-fractional-integral-is-holder` · lemma — Fractional integrals of continuous data are Hölder continuous
- `lem-fractional-integral-semigroup` · lemma — Semigroup law for fractional integrals
- `alg-uniform-and-graded-grid-l1` · algorithm — Uniform-grid and graded-grid L1 discretization
- `alg-backward-euler-convolution-quadrature` · algorithm — Backward-Euler convolution quadrature for a Caputo equation
- `lem-backward-euler-cq-principal-branch-generating-function` · lemma — Principal-branch generating function for backward-Euler convolution quadrature
- `lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions` · lemma — Caputo and Volterra formulations are equivalent for absolutely continuous solutions
- `lem-l1-positive-weights-and-discrete-comparison` · lemma — Positive L1 weights, discrete comparison, and residual stability
- `lem-weakly-singular-fractional-gronwall` · lemma — Weakly singular fractional Grönwall inequality
- `lem-backward-euler-cq-weights-and-partial-sums` · lemma — Backward-Euler fractional weights and positive partial sums
- `thm-lipschitz-local-existence-for-caputo-volterra-equation` · theorem — A local Lipschitz existence theorem for the Caputo Volterra equation
- `thm-l1-stability-and-smooth-data-error` · theorem — L1 stability and the smooth-data error bound
- `lem-cq-quadratic-generating-coefficient-estimate` · lemma — Generating-coefficient estimate for the quadratic CQ datum
- `thm-backward-euler-cq-scalar-resolvent-stability` · theorem — Scalar resolvent stability for backward-Euler convolution quadrature
- `thm-backward-euler-cq-compatible-quadratic-first-order-error` · theorem — First-order CQ error for a compatible quadratic datum

### `fractional-evolution-and-convolution-quadrature-examples` — Fractional evolution and convolution quadrature — Examples

- `ex-l1-and-cq-fractional-relaxation-first-step` · example — First steps for a scalar fractional relaxation
- `ex-l1-full-history-cost-and-truncation-bias` · example — Full-history cost and the bias from truncating memory
- `ex-caputo-startup-singularity-and-graded-grid` · example — A Caputo startup singularity and a graded-grid calculation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `fractional-evolution-and-convolution-quadrature` requires `composite-quadrature-rules`
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
