# Step 4 batch reviewer — batch **12**, run `hopf-hecke-unfinished-15-2026-10-15`

You are the only reviewer for batch **12**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["12"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 12 | `type-a-affine-hecke-algebras-and-bernstein-pbw` | A | tensor-coherence-and-algebraic-descent, coxeter-presentations-exchange-and-reduced-word-theorems, generic-coxeter-hecke-algebras-and-the-standard-basis, polynomial-rings-and-roots |
| 12 | `type-a-affine-hecke-algebras-and-bernstein-pbw-examples` | B | type-a-affine-hecke-algebras-and-bernstein-pbw |

## Your content, in full

### `type-a-affine-hecke-algebras-and-bernstein-pbw` — Type A Affine Hecke Algebras and Bernstein PBW

- `lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization` · lemma — The finite type-A Hecke basis over the multiplicative parameter ring
- `def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences` · definition — The type-A weight lattice, Laurent ring, and divided differences
- `def-hh-type-a-rational-skew-group-algebra` · definition — The rational skew group algebra for type A
- `def-hh-type-a-affine-bernstein-presentation` · definition — The multiplicative Bernstein presentation of the affine Hecke algebra of type A
- `lem-hh-demazure-lusztig-operators-satisfy-affine-relations` · lemma — Demazure–Lusztig operators satisfy the affine type-A relations
- `thm-hh-affine-type-a-bernstein-pbw` · theorem — Bernstein PBW basis for the affine Hecke algebra of type A
- `thm-hh-affine-type-a-center` · theorem — The center of the universal affine Hecke algebra of type A

### `type-a-affine-hecke-algebras-and-bernstein-pbw-examples` — Type A Affine Hecke Algebras and Bernstein PBW — Examples

- `ex-hh-type-a-negative-laurent-divided-difference` · example — A divided difference with negative Laurent exponents
- `ex-hh-type-a-rank-two-bernstein-relation` · example — The rank-two multiplicative Bernstein relation
- `ex-hh-type-a-polynomial-module-action` · example — The rank-two polynomial-module action
- `ex-hh-type-a-symmetric-central-elements` · example — Symmetric Laurent polynomials in the center

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cyclotomic-hecke-quotients-and-ariki-koike-pbw` requires `type-a-affine-hecke-algebras-and-bernstein-pbw`
- `cyclotomic-murphy-bases-and-cellular-module-constructions` requires `type-a-affine-hecke-algebras-and-bernstein-pbw`
---

# Step 4 Alpha batch reviewer — read-only digest, `hopf-hecke-unfinished-15-2026-10-15`

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
