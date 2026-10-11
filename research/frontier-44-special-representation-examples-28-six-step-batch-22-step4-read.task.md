# Step 4 batch reviewer — batch **22**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **22**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["22"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 22 | `singular-and-parabolic-kazhdan-lusztig-theory` | A | the-kazhdan-lusztig-character-and-multiplicity-theorem, root-systems-dynkin-diagrams-and-cartan-killing-classification, projectives-standard-filtrations-and-bgg-reciprocity, parabolic-subgroups-and-double-coset-geometry |
| 22 | `singular-and-parabolic-kazhdan-lusztig-theory-examples` | B | singular-and-parabolic-kazhdan-lusztig-theory |

## Your content, in full

### `singular-and-parabolic-kazhdan-lusztig-theory` — Singular and Parabolic Kazhdan–Lusztig Theory

- `def-parabolic-hecke-module-and-antispherical-standard-basis` · definition — The parabolic Hecke module and the antispherical standard basis
- `def-singular-integral-category-o-block-and-stabilizer` · definition — The singular integral block and its dot stabilizer
- `def-standard-parabolic-and-levi-subalgebras-from-simple-roots` · definition — Standard parabolic and Levi subalgebras from a subset of simple roots
- `lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars` · lemma — Standard bases, right actions and bar involutions on the parabolic Hecke modules
- `lem-facet-tensor-weight-exclusion` · lemma — The facet tensor-weight exclusion lemma
- `def-parabolic-category-o-for-a-standard-parabolic` · definition — Parabolic category O for a standard parabolic
- `thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis` · theorem — Existence and uniqueness of the parabolic Kazhdan–Lusztig bases
- `thm-translation-to-the-wall-on-verma-simple-and-projective-objects` · theorem — Translation to the wall on Verma, simple and projective objects
- `thm-parabolic-category-o-is-a-highest-weight-category` · theorem — Parabolic category O is a highest weight category
- `def-parabolic-kazhdan-lusztig-basis-and-polynomials` · definition — The parabolic Kazhdan–Lusztig bases and polynomials
- `thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones` · theorem — Parabolic Kazhdan–Lusztig polynomials are alternating sums of ordinary ones
- `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials` · theorem — Singular category O multiplicities are parabolic Kazhdan–Lusztig values
- `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials` · theorem — Parabolic category O multiplicities are parabolic Kazhdan–Lusztig values
- `thm-parabolic-kazhdan-lusztig-character-formula` · theorem — The parabolic Kazhdan–Lusztig character formula

### `singular-and-parabolic-kazhdan-lusztig-theory-examples` — Singular and Parabolic Kazhdan–Lusztig Theory — Examples

- `ex-parabolic-kl-polynomials-for-s-three-modulo-s-two` · example — Parabolic Kazhdan–Lusztig polynomials for S_3 modulo S_2
- `cex-spherical-and-antispherical-normalizations-give-different-polynomials` · counterexample — Spherical and antispherical normalizations give different polynomials
- `ex-translation-to-a-singular-wall-in-type-a-two` · example — Translation to a singular wall in type A_2
- `ex-a-small-parabolic-category-o-character-formula` · example — A small parabolic category O character formula

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `singular-and-parabolic-kazhdan-lusztig-theory` requires `the-kazhdan-lusztig-character-and-multiplicity-theorem`
- `parabolic-category-o-and-fock-space-bases` requires `singular-and-parabolic-kazhdan-lusztig-theory`
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
