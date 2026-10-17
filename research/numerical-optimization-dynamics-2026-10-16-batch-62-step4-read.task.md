# Step 4 batch reviewer — batch **62**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **62**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["62"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 62 | `interval-newton-krawczyk-and-polynomial-root-isolation` | A | nonlinear-equations-and-newton-methods, outward-rounded-interval-and-ball-arithmetic, verified-linear-systems-and-spectral-enclosures, analyticity-liouville-and-morera |
| 62 | `interval-newton-krawczyk-and-polynomial-root-isolation-examples` | B | interval-newton-krawczyk-and-polynomial-root-isolation |

## Your content, in full

### `interval-newton-krawczyk-and-polynomial-root-isolation` — Interval newton krawczyk and polynomial root isolation

- `lem-polynomial-squarefree-decomposition-and-multiplicity` · lemma — Exact gcd squarefree decomposition preserves roots and multiplicities
- `thm-sturm-sign-variation-counts-distinct-roots` · theorem — Sturm sign variation counts distinct real polynomial roots
- `lem-squarefree-integer-polynomial-root-separation-bound` · lemma — An explicit root-separation bound for squarefree integer polynomials
- `alg-rational-polynomial-root-isolation` · algorithm — Exact dyadic Sturm isolation of all real roots of a nonzero rational polynomial
- `thm-rational-polynomial-root-isolation-is-sound-and-finite` · theorem — Exact Sturm bisection isolates every distinct real root of a nonzero rational polynomial
- `def-real-boxes-and-interval-jacobian-enclosures` · definition — Real boxes and interval Jacobian enclosures
- `lem-brouwer-fixed-point-for-closed-box` · lemma — A continuous self-map of a nonempty closed box has a fixed point
- `lem-real-interval-arithmetic-preserves-enclosure` · lemma — Finite real interval operations enclose their exact values
- `alg-scalar-interval-newton-certification` · algorithm — Finite-budget scalar interval Newton root certification
- `alg-krawczyk-root-certification` · algorithm — Finite-budget multidimensional Krawczyk root certification
- `alg-smooth-function-root-isolation` · algorithm — Finite-budget interval isolation for smooth scalar roots
- `lem-interval-jacobian-mean-value-enclosure` · lemma — An interval Jacobian encloses a vector mean-value matrix
- `thm-scalar-interval-newton-exclusion-and-inclusion` · theorem — Scalar interval Newton exclusion and strict inclusion certificates
- `thm-smooth-function-root-isolation-soundness` · theorem — Soundness and finite termination of smooth-function root isolation
- `thm-krawczyk-inclusion-exclusion-and-uniqueness` · theorem — Krawczyk inclusion proves existence, disjointness excludes roots, and contraction proves uniqueness

### `interval-newton-krawczyk-and-polynomial-root-isolation-examples` — Interval newton krawczyk and polynomial root isolation — Examples

- `ex-double-polynomial-root-has-no-sign-change` · example — A double polynomial root has no sign change
- `ex-validated-mass-action-equilibrium-root` · example — A validated mass-action chemical equilibrium root
- `ex-event-root-with-derivative-separated-from-zero` · example — An event root with derivative bounded away from zero

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `interval-newton-krawczyk-and-polynomial-root-isolation` requires `nonlinear-equations-and-newton-methods`
- `interval-newton-krawczyk-and-polynomial-root-isolation` requires `outward-rounded-interval-and-ball-arithmetic`
- `interval-newton-krawczyk-and-polynomial-root-isolation` requires `verified-linear-systems-and-spectral-enclosures`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `interval-newton-krawczyk-and-polynomial-root-isolation`
- `event-location-and-hybrid-trajectory-error` requires `interval-newton-krawczyk-and-polynomial-root-isolation`
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
