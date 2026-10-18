# Step 4 batch reviewer — batch **50**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **50**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["50"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 50 | `finitary-ringel-hall-algebras` | A | algebraic-representation-and-tensor-symmetry-map, cyclotomic-klr-algebras-and-highest-weight-categorification, symmetric-functions-hall-inner-product-and-schur-bases |
| 50 | `finitary-ringel-hall-algebras-examples` | B | finitary-ringel-hall-algebras |

## Your content, in full

### `finitary-ringel-hall-algebras` — Finitary Ringel–Hall Algebras

- `def-hall-finitary-abelian-category` · definition — Small finitary abelian categories for Hall multiplication
- `lem-hall-flags-lift-through-a-quotient` · lemma — Flags lift uniquely through a quotient in an abelian category
- `def-jordan-quiver-nilpotent-representation-category` · definition — Nilpotent representations of the Jordan quiver
- `def-untwisted-hall-algebra` · definition — The untwisted Hall algebra of a finitary abelian category
- `lem-jordan-quiver-category-is-finitary` · lemma — Jordan-quiver categories are abelian; finite-field models are finitary
- `lem-jordan-quiver-isoclasses-are-partition-indexed` · lemma — Jordan-quiver isomorphism classes are indexed by partitions
- `lem-untwisted-hall-product-finiteness` · lemma — Untwisted Hall structure constants and products are finite
- `thm-untwisted-hall-algebra-is-associative-and-unital` · theorem — The untwisted Hall product is associative and unital
- `thm-generic-jordan-hall-algebra-is-symmetric-functions` · theorem — The generic Jordan-quiver Hall algebra is the symmetric-function ring
- `def-hall-littlewood-scalar-product-and-functions` · definition — Hall–Littlewood scalar product and monic functions
- `lem-jordan-block-automorphism-count` · lemma — Automorphism counts for nilpotent Jordan representations
- `thm-jordan-hall-pairing-and-hall-littlewood-basis` · theorem — Jordan Hall classes are Hall–Littlewood functions with the transported Green pairing

### `finitary-ringel-hall-algebras-examples` — Finitary Ringel–Hall Algebras: Examples and Counterexamples

- `ex-finite-vector-space-hall-square` · example — The Hall square of the simple finite-field vector space
- `ex-finite-abelian-p-group-hall-square` · example — The Hall square in finite abelian p-groups
- `ex-jordan-quiver-hall-square` · example — The degree-two Jordan-quiver Hall product
- `ex-jordan-hall-littlewood-degree-two-normalizations` · example — Jordan Hall–Littlewood basis and pairing in degrees zero, one and two

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finitary-ringel-hall-algebras` requires `algebraic-representation-and-tensor-symmetry-map`
- `green-hall-bialgebras-and-quantum-group-realizations` requires `finitary-ringel-hall-algebras`
- `derived-hall-algebras` requires `finitary-ringel-hall-algebras`
- `motivic-hall-algebras-and-integration` requires `finitary-ringel-hall-algebras`
- `cohomological-hall-algebras-and-quiver-correspondences` requires `finitary-ringel-hall-algebras`
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
