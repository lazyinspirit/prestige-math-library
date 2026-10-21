# Step 4 batch reviewer — batch **88**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **88**. Step-5 owning group: **ad**.
Return `group: "ad"` and `batches: ["88"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 88 | `kontsevich-integral-and-universal-finite-type-invariants` | A | vassiliev-invariants-and-chord-diagrams |
| 88 | `kontsevich-integral-and-universal-finite-type-invariants-examples` | B | kontsevich-integral-and-universal-finite-type-invariants |

## Your content, in full

### `kontsevich-integral-and-universal-finite-type-invariants` — The Kontsevich integral and universality

- `def-conway-polynomial` · definition — The Conway polynomial
- `def-kontsevich-integral-on-parenthesized-braids` · definition — The Kontsevich integral on parenthesized braids
- `lem-kontsevich-configuration-space-compactification-faces` · lemma — Compactified Kontsevich configuration spaces and faces
- `lem-kontsevich-morse-isotopy-decomposition` · lemma — Generic isotopies have finite Morse movies
- `lem-kz-connection-flatness-and-braid-relations` · lemma — Flatness of the KZ connection and braid relations
- `thm-conway-second-coefficient-is-type-two` · theorem — The second Conway coefficient is a degree-two finite-type invariant
- `lem-kontsevich-configuration-integral-convergence-needle-estimates` · lemma — Convergence and needle estimates for Kontsevich integrals
- `lem-kontsevich-morse-tangle-composition` · lemma — Convergence and composition of Morse tangle integrals
- `lem-kontsevich-long-knot-closure-and-connected-sum` · lemma — Closure and connected sum for the Kontsevich integral of one-strand tangles
- `lem-kontsevich-critical-point-normalization-and-associator` · lemma — Tangential KZ regularization and the hump normalization
- `lem-kontsevich-braid-and-knot-isotopy-invariance` · lemma — Braid and knot isotopy invariance of the normalized integral
- `lem-kontsevich-regularization-and-associator-coherence` · lemma — Endpoint regularization and associator coherence
- `thm-kontsevich-universal-associated-graded-proof` · theorem — The Kontsevich integral induces the identity on the associated graded
- `lem-kontsevich-integral-finite-type-truncation` · lemma — Finite-type truncations of the Kontsevich integral
- `thm-kontsevich-integral-is-universal` · theorem — Universality of the Kontsevich integral

### `kontsevich-integral-and-universal-finite-type-invariants-examples` — The Kontsevich integral and universality — Examples and Counterexamples

- `cex-knot-kt-35-boundary-case` · counterexample — The framed degree-one weight system does not pass through 1T
- `ex-knot-kt-35-worked-cases` · example — Conway coefficients and the degree-two Kontsevich symbol

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `kontsevich-integral-and-universal-finite-type-invariants` requires `vassiliev-invariants-and-chord-diagrams`
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
