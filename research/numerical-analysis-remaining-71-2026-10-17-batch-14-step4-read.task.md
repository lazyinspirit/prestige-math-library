# Step 4 batch reviewer — batch **14**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **14**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["14"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 14 | `barycentric-rational-and-aaa-approximation` | A | computed-singular-values-and-rank-revealing-factorizations, minimax-approximation-and-remez-algorithms, outward-rounded-interval-and-ball-arithmetic |
| 14 | `barycentric-rational-and-aaa-approximation-examples` | B | barycentric-rational-and-aaa-approximation |

## Your content, in full

### `barycentric-rational-and-aaa-approximation` — Barycentric rational and aaa approximation

- `alg-pade-coefficient-matching` · algorithm — Exact Padé coefficient matching with defect statuses
- `def-distinct-node-divided-difference` · definition — Divided differences on distinct nodes
- `lem-barycentric-denominator-polynomial-nonzero` · lemma — A barycentric denominator polynomial with nonzero weights is nonzero
- `def-barycentric-rational-quotient` · definition — Barycentric rational quotient with support values and reduced poles
- `lem-divided-difference-lagrange-formula-and-symmetry` · lemma — Divided differences are symmetric leading coefficients
- `thm-pade-solvable-system-gives-local-order` · theorem — A solvable Padé moment system gives the stated Taylor order
- `def-floater-hormann-interpolant` · definition — Floater–Hormann barycentric interpolant
- `lem-adjacent-window-divided-difference-recurrence` · lemma — Adjacent-window divided-difference recurrence
- `lem-divided-difference-repeated-rolle-bound` · lemma — Rolle bound for a divided difference
- `lem-hermite-genocchi-simplex-integral` · lemma — Hermite–Genocchi simplex formula for divided differences
- `prop-barycentric-rational-quotient-well-defined` · proposition — Barycentric rational quotients are defined and interpolate at support nodes
- `alg-aaa-finite-sample-rational-approximation` · algorithm — Finite-sample AAA rational approximation with exact SVD
- `def-floater-hormann-local-mesh-ratio` · definition — Local mesh ratio for degree-zero Floater–Hormann interpolation
- `def-floater-hormann-window-polynomial` · definition — Local polynomial in a Floater–Hormann window
- `lem-hermite-genocchi-bv-window-variation` · lemma — Bounded variation controls adjacent Hermite–Genocchi windows
- `lem-floater-hormann-local-mesh-ratio-bounded-by-global` · lemma — A global mesh ratio bounds the local degree-zero ratio
- `lem-floater-hormann-window-polynomial-interpolates` · lemma — Floater–Hormann window polynomials interpolate their local data
- `thm-aaa-loewner-minimum-and-support-interpolation` · theorem — AAA weights minimize the Loewner residual and interpolate support data
- `lem-floater-hormann-weight-and-blend-identity` · lemma — Floater–Hormann weights equal the local-polynomial blend weights
- `lem-floater-hormann-window-newton-remainder` · lemma — Newton remainder for a Floater–Hormann window polynomial
- `lem-floater-hormann-gap-partial-sums-positive` · lemma — Floater–Hormann blend partial sums are positive in each node gap
- `lem-floater-hormann-denominator-lower-bound` · lemma — Floater–Hormann barycentric denominator lower bound
- `thm-floater-hormann-no-real-poles` · theorem — Floater–Hormann interpolants have no real poles
- `cex-floater-hormann-cd1-seminorm-rate-fails` · counterexample — Uniform meshes refute the C^(d+1)-seminorm-only Floater–Hormann rate
- `thm-floater-hormann-error-rate-bv` · theorem — Floater–Hormann error bounds for a bounded-variation highest derivative
- `thm-floater-hormann-error-rate-c2` · theorem — Floater–Hormann C^(d+2) parity error bounds

### `barycentric-rational-and-aaa-approximation-examples` — Barycentric rational and aaa approximation — Examples

- `ex-pade-singular-system-and-froissart-cancellation` · example — Padé matching can be singular or create a Froissart doublet
- `ex-aaa-small-sample-error-does-not-control-off-grid` · example — Zero AAA sample residual can coexist with arbitrary off-grid error
- `ex-aaa-transfer-function-pole` · example — AAA recovers a scalar transfer-function pole from four samples

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `barycentric-rational-and-aaa-approximation` requires `minimax-approximation-and-remez-algorithms`
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
