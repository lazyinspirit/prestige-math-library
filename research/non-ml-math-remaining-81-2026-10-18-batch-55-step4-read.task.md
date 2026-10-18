# Step 4 batch reviewer — batch **55**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **55**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["55"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 55 | `cohomological-hall-algebras-and-quiver-correspondences` | A | finitary-ringel-hall-algebras, dg-and-homological-algebra-foundations, graded-quiver-algebras-and-derived-tensor-functors |
| 55 | `cohomological-hall-algebras-and-quiver-correspondences-examples` | B | cohomological-hall-algebras-and-quiver-correspondences |

## Your content, in full

### `cohomological-hall-algebras-and-quiver-correspondences` — Cohomological Hall Algebras and Quiver Correspondences

- `lem-general-linear-quotient-stacks-are-algebraic` · lemma — Affine quotients by products of general linear groups are algebraic stacks
- `def-quiver-representation-stacks-and-exact-sequence-correspondences` · definition — Representation stacks and exact-sequence correspondences of a finite quiver
- `lem-quiver-exact-sequence-correspondence-is-smooth-and-proper` · lemma — The quiver exact-sequence correspondence is smooth and proper
- `lem-algebraic-milnor-neighborhoods-admit-controlled-sector-transport` · lemma — Algebraic Milnor neighborhoods admit controlled sector transport
- `thm-normalized-rational-vanishing-cycles-have-coherent-operations` · theorem — Normalized rational vanishing cycles have coherent correspondence operations
- `rem-preprojective-coha-and-nakajima-action-source-boundaries` · remark — Source-reported preprojective CoHA actions and their type boundaries
- `def-intrinsic-quotient-stack-borel-moore-grading` · definition — Intrinsic Borel–Moore grading on quiver quotient stacks
- `def-quiver-potential-and-monodromic-vanishing-cycle-data` · definition — Quiver potentials and realized monodromic coefficient data
- `lem-quiver-parabolic-levi-borel-model-comparisons` · lemma — Parabolic and Levi Borel models for quiver extension and flag stacks
- `thm-quiver-quotient-stack-borel-moore-operation-package` · theorem — Borel–Moore operations for quiver extension and flag quotient stacks
- `def-untwisted-quiver-cohomological-hall-algebra` · definition — The untwisted equivariant Borel–Moore CoHA of a finite quiver
- `lem-quiver-potential-trace-is-additive-on-extensions` · lemma — A quiver potential trace is additive on exact sequences
- `thm-untwisted-quiver-coha-is-associative-and-unital` · theorem — The untwisted quiver CoHA is associative and unital
- `lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences` · lemma — Standard rational quiver vanishing cycles realize the critical coefficient package
- `def-critical-quiver-coha-from-vanishing-cycle-data` · definition — Critical quiver CoHA and its standard rational realization
- `thm-critical-quiver-coha-associative-under-coherence-axioms` · theorem — Critical quiver CoHA is associative and unital, including the standard realization

### `cohomological-hall-algebras-and-quiver-correspondences-examples` — Cohomological Hall Algebras and Quiver Correspondences: Examples and Counterexamples

- `ex-jordan-quiver-extension-correspondence` · example — The one-loop quiver extension correspondence in dimension two
- `ex-jordan-quiver-potential-critical-locus` · example — The trace potential x squared on the one-loop quiver

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cohomological-hall-algebras-and-quiver-correspondences` requires `finitary-ringel-hall-algebras`
- `cohomological-hall-algebras-and-quiver-correspondences` requires `dg-and-homological-algebra-foundations`
- `motivic-hall-algebras-and-integration` requires `cohomological-hall-algebras-and-quiver-correspondences`
- `hall-stability-dt-bps-and-wall-crossing` requires `cohomological-hall-algebras-and-quiver-correspondences`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
