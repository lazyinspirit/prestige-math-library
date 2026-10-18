# Step 4 batch reviewer — batch **7**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **7**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["7"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 7 | `certified-geometric-predicates` | A | outward-rounded-interval-and-ball-arithmetic |
| 7 | `certified-geometric-predicates-examples` | B | certified-geometric-predicates |

## Your content, in full

### `certified-geometric-predicates` — Certified geometric predicates

- `def-certified-geometric-predicate-determinants` · definition — Dyadic orientation and lifted sphere determinants
- `alg-interval-geometric-predicate-filter` · algorithm — Certified geometric predicate for interval-valued coordinates
- `alg-symbolic-geometric-determinant-tie-break` · algorithm — Shared formal perturbation for declared determinant tie-breaking
- `lem-dyadic-determinant-integer-clearance-preserves-sign` · lemma — Clearing dyadic row denominators preserves determinant sign
- `lem-leibniz-determinant-forward-error-bound` · lemma — A left-to-right Leibniz determinant has an explicit forward error bound
- `lem-two-and-three-by-three-nonsingular-dyadic-system-solvable` · lemma — A nonzero 2-by-2 or 3-by-3 dyadic determinant gives a unique real solution
- `alg-exact-dyadic-determinant-sign` · algorithm — Exact dyadic determinant sign by integer clearance
- `alg-floating-filter-for-geometric-determinants` · algorithm — Outward-bounded floating determinant filter
- `lem-nondegenerate-dyadic-simplex-determines-unique-sphere` · lemma — A nondegenerate dyadic simplex determines a unique sphere
- `thm-interval-geometric-predicate-filter-sound` · theorem — The interval geometric filter certifies only uniform signs
- `lem-lifted-determinant-sign-matches-sphere-side` · lemma — The lifted determinant records the side of a sphere
- `thm-floating-filter-sign-is-exact` · theorem — A certified floating determinant filter returns only the exact sign
- `alg-certified-dyadic-geometric-predicate` · algorithm — Certified predicate for exact dyadic geometric inputs
- `thm-symbolic-geometric-determinant-tie-break-consistent` · theorem — The formal determinant tie-break is nondegenerate and consistent
- `thm-certified-dyadic-geometric-predicate-sound-and-terminates` · theorem — The filtered exact dyadic predicate is sound and terminates

### `certified-geometric-predicates-examples` — Certified geometric predicates — Examples

- `ex-uncertain-coordinate-interval-with-ambiguous-sign` · example — An uncertain coordinate interval does not decide orientation
- `ex-nearly-cocircular-sites-certified-incircle` · example — A nearly cocircular quadruple has a certified lifted sign
- `ex-nearly-collinear-triangle-certified-orientation` · example — A nearly collinear dyadic triangle falls through to the exact sign

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `delaunay-triangulations-and-voronoi-computation` requires `certified-geometric-predicates`
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
