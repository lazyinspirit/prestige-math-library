# Step 4 batch reviewer — batch **53**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **53**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["53"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 53 | `real-phase-retrieval-and-complement-property` | A | the-moore-penrose-pseudoinverse-and-regularised-least-squares, hilbert-space-geometry-and-riesz-representation, the-spectral-theorem-and-singular-value-decomposition, inverse-problems-identifiability-and-stability, linear-operators-pseudoinverses-and-picard-criteria, linear-algebra-methods-in-combinatorics |
| 53 | `real-phase-retrieval-and-complement-property-examples` | B | real-phase-retrieval-and-complement-property |

## Your content, in full

### `real-phase-retrieval-and-complement-property` — Real phase retrieval and phaseless ambiguity

- `lem-ip-vandermonde-determinant` · lemma — The Vandermonde determinant for real moment-curve vectors
- `def-ip-real-frame-phase-retrieval` · definition — Real phase retrieval via finite real measurements
- `lem-ip-real-phase-retrieval-quotient-metric` · lemma — The real sign quotient and its induced measurement maps
- `def-ip-frame-complement-property` · definition — Complement property for a real finite measurement family
- `def-ip-real-full-spark-measurement-family` · definition — Full-spark real measurement families
- `alg-ip-finite-sign-enumeration-phase-retrieval` · algorithm — Finite sign enumeration for real phase retrieval
- `thm-ip-real-phase-retrieval-complement-property` · theorem — Real phase retrieval is equivalent to the complement property
- `thm-ip-finite-sign-enumeration-correctness` · theorem — Correctness and amplitude-residual objective of finite sign enumeration
- `cor-ip-full-spark-sharp-real-phase-measurement-count` · corollary — The sharp real phase-retrieval count for full-spark measurements

### `real-phase-retrieval-and-complement-property-examples` — Real phase retrieval and phaseless ambiguity — Examples and Counterexamples

- `ex-ip-fourier-translation-reflection-ambiguity` · example — Translation and reflection ambiguities for a finite Fourier magnitude map
- `cex-ip-real-failed-complement-partition` · counterexample — A two-vector real family with a failed partition and an ambiguous pair
- `ex-ip-sign-enumeration-budget-exhaustion` · example — A one-pattern sign budget misses the best amplitude fit
- `ex-ip-real-phase-retrieval-two-dimensional-full-spark-frame` · example — A two-dimensional three-vector full-spark real frame
- `cex-ip-complex-complement-property-insufficient` · counterexample — The complement property is not sufficient for complex phase retrieval

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `real-phase-retrieval-and-complement-property` requires `inverse-problems-identifiability-and-stability`
- `real-phase-retrieval-and-complement-property` requires `linear-operators-pseudoinverses-and-picard-criteria`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
