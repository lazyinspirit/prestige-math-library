# Step 4 batch reviewer — batch **71**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **71**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["71"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 71 | `affine-hecke-algebras-beyond-type-a` | A | hopf-hecke-and-quantum-symmetry-interfaces, split-reductive-root-systems-bruhat-cells-and-parabolics, absolute-values-completions-and-p-adic-numbers, affine-reflections-coroot-translations-and-alcoves, haar-measure-existence-and-uniqueness |
| 71 | `affine-hecke-algebras-beyond-type-a-examples` | B | affine-hecke-algebras-beyond-type-a |

## Your content, in full

### `affine-hecke-algebras-beyond-type-a` — Affine Hecke Algebras Beyond Type A

- `def-hh-affine-hecke-algebra-from-root-datum` · definition — The Iwahori–Matsumoto affine Hecke algebra of a based root datum
- `lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic` · lemma — A positive real p-adic parameter is not a finite quantum-characteristic specialization
- `lem-hh-sl2-q3-lattice-tree-and-iwahori-orbits` · lemma — The lattice tree and Iwahori orbits for SL2(Q3)
- `lem-hh-affine-hecke-im-basis` · lemma — The extended Iwahori–Matsumoto basis
- `lem-hh-root-datum-affine-geometry-and-wall-parameters` · lemma — Canonical affine geometry and wall parameters of a root datum
- `def-hh-affine-hecke-bernstein-presentation` · definition — The formal Bernstein presentation for a reduced based root datum
- `lem-hh-signed-alcove-products-and-oriented-basis` · lemma — Signed alcove products and the oriented affine Hecke basis
- `thm-hh-sl2-q3-iwahori-convolution-corner` · theorem — The SL2(Q3) Iwahori convolution corner has affine parameters 3
- `lem-hh-affine-hecke-bernstein-quotients-are-well-defined` · lemma — The Bernstein cross-relation quotients are Laurent polynomials
- `thm-hh-affine-hecke-general-root-data-bernstein-pbw` · theorem — General Bernstein PBW and the Iwahori–Matsumoto comparison
- `def-hh-affine-hecke-parabolic-subalgebras-and-central-characters` · definition — Parabolic affine Hecke algebras and their weight characters
- `rem-hh-affine-hecke-general-bernstein-pbw-awaits-local-proof` · remark — The general Bernstein PBW construction and source boundary
- `def-hh-affine-hecke-weight-temperedness-and-positive-position` · definition — Weight temperedness and positive Langlands data
- `lem-hh-affine-hecke-parabolic-weight-filtration` · lemma — Parabolic induction, central orbit blocks and weight filtrations
- `lem-hh-langlands-dominant-projection` · lemma — Dominant projection and strict parabolic weight decrease
- `thm-hh-affine-hecke-standard-module-unique-irreducible-quotient` · theorem — The unique irreducible quotient of an affine Hecke standard module
- `thm-hh-affine-hecke-tempered-langlands-classification` · theorem — The tempered Langlands classification for affine Hecke algebras
- `rem-hh-affine-tempered-langlands-classification-awaits-local-proof` · remark — The local tempered Langlands proof and the selected-group boundary

### `affine-hecke-algebras-beyond-type-a-examples` — Affine Hecke Algebras Beyond Type A: Examples and Counterexamples

- `ex-hh-affine-padic-versus-root-of-unity-parameters` · example — A positive p-adic parameter and a finite root-of-unity parameter
- `ex-hh-affine-b2-unequal-parameters` · example — A rank-two affine B2 Hecke algebra with unequal parameters

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `affine-hecke-algebras-beyond-type-a` requires `hopf-hecke-and-quantum-symmetry-interfaces`
- `rational-cherednik-algebras-and-category-o` requires `affine-hecke-algebras-beyond-type-a`
- `double-affine-hecke-algebras-and-macdonald-theory` requires `affine-hecke-algebras-beyond-type-a`
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
