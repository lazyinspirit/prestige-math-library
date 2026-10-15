# Step 4 batch reviewer — batch **1**, run `hopf-hecke-unfinished-15-2026-10-15`

You are the only reviewer for batch **1**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["1"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 1 | `coalgebras-counits-and-the-fundamental-coalgebra-theorem` | A | tensor-coherence-and-algebraic-descent |
| 1 | `coalgebras-counits-and-the-fundamental-coalgebra-theorem-examples` | B | coalgebras-counits-and-the-fundamental-coalgebra-theorem |

## Your content, in full

### `coalgebras-counits-and-the-fundamental-coalgebra-theorem` — Coalgebras, Counits, and the Fundamental Coalgebra Theorem

- `def-hh-coalgebra-and-coalgebra-map` · definition — Coalgebra and coalgebra map over a field
- `lem-hh-finite-spanning-list-contains-a-basis` · lemma — A finite spanning list contains a basis, without choice
- `lem-hh-counit-uniqueness-and-finite-sweedler-calculus` · lemma — Counit uniqueness and finite Sweedler calculus
- `def-hh-subcoalgebras-coideals-and-quotient-coalgebras` · definition — Subcoalgebras, coideals, and quotient coalgebras
- `lem-hh-finite-comatrix-coalgebra-exists` · lemma — Finite comatrix coalgebras exist
- `def-hh-group-like-and-primitive-elements` · definition — Group-like elements and primitives relative to a group-like element
- `thm-hh-coalgebra-quotient-and-kernel-descent` · theorem — Coideal quotients, coalgebra-map kernels, and sums of subcoalgebras
- `thm-hh-fundamental-theorem-of-coalgebras` · theorem — The fundamental theorem of coalgebras

### `coalgebras-counits-and-the-fundamental-coalgebra-theorem-examples` — Coalgebras, Counits, and the Fundamental Coalgebra Theorem — Examples

- `ex-hh-group-like-elements-in-finite-set-coalgebra` · example — Group-like elements in a finite set coalgebra
- `ex-hh-relative-primitive-elements-in-two-dimensional-coalgebra` · example — Group-like elements and primitives relative to g in a two-dimensional coalgebra
- `ex-hh-counital-coideal-quotient-of-comatrix-coalgebra` · example — A counital coideal quotient of the two-by-two comatrix coalgebra
- `cex-hh-coideal-with-nonzero-counit-does-not-give-quotient-map` · counterexample — A coproduct coideal with nonzero counit does not give a quotient coalgebra map

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `comodules-matrix-coefficients-and-coalgebra-duality` requires `coalgebras-counits-and-the-fundamental-coalgebra-theorem`
- `bialgebras-convolution-and-antipode-identities` requires `coalgebras-counits-and-the-fundamental-coalgebra-theorem`
- `hopf-ideals-finite-duals-and-basic-constructions` requires `coalgebras-counits-and-the-fundamental-coalgebra-theorem`
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
