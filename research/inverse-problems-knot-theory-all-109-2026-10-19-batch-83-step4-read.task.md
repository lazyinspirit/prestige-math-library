# Step 4 batch reviewer — batch **83**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **83**. Step-5 owning group: **ab**.
Return `group: "ab"` and `batches: ["83"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 83 | `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` | A | crossing-signs-writhe-and-linking-number, kauffman-bracket-state-sum-and-jones-polynomial, brauer-bmw-and-partition-diagram-algebras |
| 83 | `kauffman-and-dubrovnik-polynomials-from-bmw-algebras-examples` | B | kauffman-and-dubrovnik-polynomials-from-bmw-algebras |

## Your content, in full

### `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` — Kauffman and Dubrovnik polynomials from BMW algebras

- `def-kauffman-regular-isotopy-and-dubrovnik-conventions` · definition — Kauffman regular-isotopy and Dubrovnik conventions
- `def-bmw-dubrovnik-coefficient-extension` · definition — BMW coefficient extension for Dubrovnik parameters
- `lem-kauffman-dubrovnik-writhe-component-conversion` · lemma — Kauffman and Dubrovnik writhe-component conversion
- `lem-bmw-relations-dubrovnik-parameter-dictionary` · lemma — BMW relations in the Dubrovnik parameter convention
- `def-dubrovnik-tangle-skein-algebra` · definition — Ordinary Dubrovnik tangle skein algebra
- `lem-bmw-presentation-tangle-evaluation-is-well-defined` · lemma — The BMW presentation maps to the Dubrovnik tangle algebra
- `lem-bmw-descending-tangle-spanning` · lemma — BMW tangle skein spanning by descending matchings
- `lem-bmw-finite-source-normal-form-over-dubrovnik-extension` · lemma — Finite source normal form over the Dubrovnik coefficient extension
- `lem-bmw-closure-pairing-independence` · lemma — BMW descending matchings are independent by closure pairing
- `lem-bmw-markov-trace-stabilization` · lemma — BMW closure trace and stabilization scalars
- `lem-bmw-descending-tangle-spanning-and-independence` · lemma — BMW has the descending Kauffman tangle basis
- `alg-kauffman-polynomial-from-bmw-braid-closure` · algorithm — Compute the Kauffman polynomial from a BMW braid closure
- `thm-bmw-markov-trace-gives-dubrovnik-invariant` · theorem — The BMW Markov trace gives the Dubrovnik link invariant
- `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties` · theorem — The BMW braid-closure algorithm terminates and returns its stated value
- `thm-kauffman-and-dubrovnik-conversion` · theorem — The Kauffman and Dubrovnik polynomials agree under the stated conversion

### `kauffman-and-dubrovnik-polynomials-from-bmw-algebras-examples` — Kauffman and Dubrovnik polynomials from BMW algebras — Examples and Counterexamples

- `cex-knot-kt-30-boundary-case` · counterexample — The leading minus sign in the Dubrovnik conversion is necessary
- `ex-knot-kt-30-worked-cases` · example — BMW Kauffman and Dubrovnik worked cases

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` requires `crossing-signs-writhe-and-linking-number`
- `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` requires `kauffman-bracket-state-sum-and-jones-polynomial`
- `ribbon-categories-and-reshetikhin-turaev-knot-invariants` requires `kauffman-and-dubrovnik-polynomials-from-bmw-algebras`
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
