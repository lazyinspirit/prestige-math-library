# Step 4 batch reviewer — batch **49**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **49**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["49"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 49 | `the-degenerate-ariki-categorification-theorem` | A | arakawa-suzuki-functors-and-higher-level-schur-weyl-duality, grothendieck-groups-and-graded-cartan-pairings |
| 49 | `the-degenerate-ariki-categorification-theorem-examples` | B | the-degenerate-ariki-categorification-theorem, cyclotomic-hecke-and-quiver-hecke-algebras |

## Your content, in full

### `the-degenerate-ariki-categorification-theorem` — The Degenerate Ariki Categorification Theorem

- `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` · definition — The degenerate cyclotomic Hecke tower and its residue functors
- `thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module` · theorem — The degenerate cyclotomic Hecke $G_0$ is the dual highest weight module
- `thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module` · theorem — The degenerate cyclotomic Hecke projective $K_0$ is the highest weight module
- `thm-degenerate-ariki-categorification` · theorem — The degenerate Ariki categorification theorem
- `rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges` · remark — The degenerate and nondegenerate Ariki theorems have distinct parameter ranges
- `thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one` · theorem — Degenerate Specht decomposition numbers are canonical basis coefficients at one
- `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` · proposition — Sign duality and Ringel duality match the Fock-space involutions

### `the-degenerate-ariki-categorification-theorem-examples` — The Degenerate Ariki Categorification Theorem — Examples

- `ex-projective-simple-dual-bases-in-a-degenerate-cyclotomic-block` · example — Projective and simple dual bases in a degenerate cyclotomic block
- `cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one` · counterexample — The generic Hecke algebra comparison does not extend to every parameter
- `ex-degenerate-ariki-decomposition-numbers-in-small-rank` · example — Degenerate Ariki decomposition numbers in small rank
- `ex-charge-reversal-and-fock-involution-in-a-small-example` · example — Charge reversal and the Fock involution in a small example

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `the-degenerate-ariki-categorification-theorem` requires `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`
- `the-degenerate-ariki-categorification-theorem-examples` requires `cyclotomic-hecke-and-quiver-hecke-algebras`
---

# Step 4 Alpha batch reviewer — read-only digest, `frontier-44-special-representation-examples-28-six-step`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
