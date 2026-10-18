# Step 4 batch reviewer — batch **58**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **58**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["58"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 58 | `variational-inequality-and-contact-finite-elements` | A | variational-crimes-and-strang-lemmas, elasticity-near-incompressibility-and-locking-free-discretization, constrained-variational-problems-and-variational-inequalities |
| 58 | `variational-inequality-and-contact-finite-elements-examples` | B | variational-inequality-and-contact-finite-elements |

## Your content, in full

### `variational-inequality-and-contact-finite-elements` — Variational inequalities and spatial contact discretization

- `def-signorini-partial-trace-space` · definition — Partial-trace displacement space on a polygon
- `lem-signorini-partial-trace-space-bounded` · lemma — The partial-trace displacement space is a Hilbert space
- `lem-signorini-rigid-motion-controlled-by-dirichlet-segment` · lemma — A planar rigid motion is controlled by its trace on a segment
- `def-signorini-elasticity-contact-model` · definition — Small-strain elasticity with a frictionless contact gap
- `def-signorini-contact-variational-inequality` · definition — The vector Signorini contact set and variational inequality
- `lem-signorini-elasticity-form-bounded` · lemma — The isotropic contact elasticity form is well defined and bounded
- `lem-signorini-contact-set-closed-convex-nonempty` · lemma — The Signorini contact set is nonempty, closed, and convex
- `def-signorini-nodal-p1-contact-scheme` · definition — Conforming nodal P1 Signorini contact discretization
- `lem-signorini-partial-dirichlet-korn-coercivity` · lemma — Korn coercivity with a partial Dirichlet segment
- `lem-signorini-nodal-contact-set-conforming` · lemma — The convex-obstacle nodal set is conforming
- `lem-signorini-contact-nodal-test-functions-surjective` · lemma — Contact nodal coordinates are independently attainable
- `def-signorini-dual-mortar-contact-pair` · definition — Dual P1 mortar multipliers for boundary contact
- `thm-signorini-continuous-contact-vi-wellposed` · theorem — Continuous frictionless elasticity contact is well posed
- `lem-signorini-dual-mortar-biorthogonality-and-infsup` · lemma — The dual mortar basis is biorthogonal and uniformly stable on the trace space
- `thm-signorini-nodal-contact-vi-falk-error` · theorem — Falk error bound for nodal Signorini contact
- `thm-signorini-mortar-contact-kkt-and-complementarity` · theorem — The dual mortar contact system is stable and exactly complementary

### `variational-inequality-and-contact-finite-elements-examples` — Variational inequalities and spatial contact discretization — Examples

- `ex-signorini-one-dimensional-obstacle-free-boundary` · example — A one-dimensional obstacle with an explicit free boundary
- `cex-signorini-nodal-contact-feasibility-needs-convex-obstacle` · counterexample — Nodal feasibility can miss a nonconvex obstacle between vertices
- `ex-signorini-contact-patch-test` · example — An affine shear field passes the frictionless contact patch test
- `ex-signorini-mortar-active-set-change` · example — A two-gap contact model changes its active set with the load

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `variational-inequality-and-contact-finite-elements` requires `elasticity-near-incompressibility-and-locking-free-discretization`
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
