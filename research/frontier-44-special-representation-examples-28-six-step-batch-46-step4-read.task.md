# Step 4 batch reviewer — batch **46**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **46**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["46"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 46 | `klr-algebras-induction-and-quantum-serre-categorification` | A | quantized-enveloping-algebras-and-quantum-serre-relations, divided-powers-integral-forms-and-quantum-highest-weights, balanced-triples-and-global-crystal-bases, graded-bimodules-and-tensor-functors, grothendieck-groups-and-graded-cartan-pairings, signed-quiver-flag-convolution-and-klr-ext-realization, quiver-full-flag-projective-semisimplicity |
| 46 | `klr-algebras-induction-and-quantum-serre-categorification-examples` | B | klr-algebras-induction-and-quantum-serre-categorification |

## Your content, in full

### `klr-algebras-induction-and-quantum-serre-categorification` — KLR Algebras, Induction, and Quantum-Serre Categorification

- `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum` · definition — The quiver Hecke (KLR) algebra of a symmetrizable Cartan datum
- `def-klr-grading-and-diagrammatic-composition` · definition — The KLR grading and the diagrammatic multiplication
- `thm-polynomial-representation-of-a-klr-algebra` · theorem — Faithful polynomial representation of a KLR algebra
- `thm-klr-pbw-basis-theorem` · theorem — The PBW (monomial) basis theorem for KLR algebras
- `def-klr-induction-and-restriction-bimodules` · definition — Induction and restriction bimodules for KLR algebras
- `def-divided-power-klr-idempotents-and-projectives` · definition — Nil-Hecke idempotents and divided-power KLR projectives
- `lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases` · lemma — Graded Krull-Schmidt and shift-orbit bases for finitely generated KLR modules
- `thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives` · theorem — Generic KLR induction and restriction adjunctions preserve projectives
- `def-the-klr-cartan-pairing` · definition — The KLR Cartan (graded Hom) pairing on the projective Grothendieck group
- `lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head` · lemma — Maximal KLR tails give a unique induction head and absolute simple modules
- `thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations` · theorem — The KLR Grothendieck ring satisfies the divided-power quantum Serre relations
- `thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form` · theorem — The KLR Cartan pairing is the Lusztig-normalized half form
- `thm-klr-categorification-of-the-negative-quantum-half` · theorem — The KLR category categorifies the negative quantum half
- `lem-klr-projective-duality-and-positive-divided-string-leading-terms` · lemma — Self-dual KLR projectives have positive first-block divided-string leading terms
- `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis` · theorem — Self-dual indecomposable KLR projectives give the lower global basis (symmetric type)

### `klr-algebras-induction-and-quantum-serre-categorification-examples` — KLR Algebras, Induction, and Quantum-Serre Categorification — Examples

- `ex-the-double-edge-klr-braid-correction` · example — The double-edge $(e=2)$ KLR braid correction
- `ex-the-two-vertex-klr-polynomial-representation` · example — The two-vertex KLR polynomial representation
- `ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i` · example — The KLR algebras in root degrees $\alpha_i$ and $2\alpha_i$
- `cex-degenerate-q-ij-polynomials-destroy-the-faithful-basis-route` · counterexample — Degenerate parameters $Q_{ij}$ destroy the faithful polynomial-representation route
- `ex-a-nil-hecke-divided-power-projective` · example — The nil-Hecke divided-power projective in rank two

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `klr-algebras-induction-and-quantum-serre-categorification` requires `divided-powers-integral-forms-and-quantum-highest-weights`
- `klr-algebras-induction-and-quantum-serre-categorification` requires `balanced-triples-and-global-crystal-bases`
- `klr-algebras-induction-and-quantum-serre-categorification` requires `signed-quiver-flag-convolution-and-klr-ext-realization`
- `klr-algebras-induction-and-quantum-serre-categorification` requires `quiver-full-flag-projective-semisimplicity`
- `cyclotomic-klr-algebras-and-highest-weight-categorification` requires `klr-algebras-induction-and-quantum-serre-categorification`
- `cyclotomic-hecke-and-quiver-hecke-algebras` requires `klr-algebras-induction-and-quantum-serre-categorification`
- `ariki-categorification-and-graded-decomposition-numbers` requires `klr-algebras-induction-and-quantum-serre-categorification`
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
