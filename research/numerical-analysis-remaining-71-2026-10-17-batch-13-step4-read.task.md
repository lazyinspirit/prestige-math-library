# Step 4 batch reviewer — batch **13**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **13**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["13"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 13 | `oscillatory-filon-and-levin-quadrature` | A | composite-quadrature-rules, finite-precision-direct-factorizations, outward-rounded-interval-and-ball-arithmetic, smooth-partitions-of-unity-and-exhaustions |
| 13 | `oscillatory-filon-and-levin-quadrature-examples` | B | oscillatory-filon-and-levin-quadrature |

## Your content, in full

### `oscillatory-filon-and-levin-quadrature` — Oscillatory integrals and filon levin methods

- `def-na-finite-interval-oscillatory-integral` · definition — Finite-interval oscillatory integral and phase convention
- `lem-na-lagrange-interpolation-on-distinct-nodes` · lemma — Lagrange interpolation at distinct real nodes
- `lem-na-one-dimensional-morse-coordinate` · lemma — Local quadratic coordinate at a simple stationary point
- `alg-na-fourier-polynomial-moments` · algorithm — Exact recurrence for polynomial Fourier moments
- `lem-na-complex-phase-derivative` · lemma — Derivative of a complex oscillatory phase
- `alg-na-levin-collocation-quadrature` · algorithm — Levin collocation for a nonstationary oscillatory integral
- `lem-na-fresnel-integral` · lemma — Fresnel whole-line moment from the damped complex Gaussian
- `lem-na-quadratic-phase-amplitude-bound` · lemma — One-dimensional quadratic oscillatory amplitude bound
- `thm-na-fourier-oscillatory-moment-recurrence` · theorem — Exact polynomial moments for the linear Fourier phase
- `thm-na-nonstationary-oscillatory-integration-by-parts` · theorem — Repeated integration by parts for a nonstationary oscillatory integral
- `alg-na-nonstationary-moment-expansion` · algorithm — Bounded integration-by-parts expansion for an oscillatory moment
- `lem-na-quadratic-phase-stationary-expansion` · lemma — Local stationary expansion for a quadratic phase
- `thm-na-levin-conditioned-residual-bound` · theorem — Levin endpoint identity and conditioned residual bound
- `alg-na-filon-nodal-moment-quadrature` · algorithm — Filon quadrature from nodal interpolation and phase moments
- `thm-na-single-interior-stationary-phase-expansion` · theorem — Stationary-phase expansion at one simple interior critical point
- `thm-na-filon-interpolation-error-bound` · theorem — Nonstationary error bound for endpoint Filon interpolation

### `oscillatory-filon-and-levin-quadrature-examples` — Oscillatory integrals and filon levin methods — Examples

- `ex-na-ill-conditioned-levin-collocation` · example — A small Levin collocation residual can hide a large endpoint error
- `ex-na-interior-stationary-phase-boundary-term` · example — An interior stationary point adds a Fresnel-scale term
- `ex-na-large-frequency-fourier-filon-versus-midpoint-sample` · example — A Fourier integral missed by one sample but captured by Filon moments

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
