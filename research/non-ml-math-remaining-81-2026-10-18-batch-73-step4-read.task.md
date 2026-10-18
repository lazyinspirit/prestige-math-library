# Step 4 batch reviewer — batch **73**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **73**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["73"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 73 | `rational-cherednik-algebras-and-category-o` | A | affine-hecke-algebras-beyond-type-a |
| 73 | `rational-cherednik-algebras-and-category-o-examples` | B | rational-cherednik-algebras-and-category-o |

## Your content, in full

### `rational-cherednik-algebras-and-category-o` — Rational Cherednik Algebras and Their Category O

- `lem-rational-cherednik-log-connection-meridian-eigenvalues` · lemma — A logarithmic connection determines meridian eigenvalues from its residue
- `def-rational-cherednik-reflection-data-and-parameters` · definition — Reflection data and parameters for a rational Cherednik algebra
- `def-rational-cherednik-algebra` · definition — The rational Cherednik algebra H_{t,c}(W,h)
- `lem-rational-cherednik-commutator-jacobi-compatibility` · lemma — The rational Cherednik commutator satisfies Jacobi compatibility
- `thm-rational-cherednik-pbw-theorem` · theorem — The PBW theorem for rational Cherednik algebras
- `def-rational-cherednik-category-o` · definition — Category O for a rational Cherednik algebra
- `def-rational-cherednik-standard-module` · definition — Standard modules for rational Cherednik category O
- `thm-rational-cherednik-standard-module-lies-in-category-o` · theorem — Standard modules lie in rational Cherednik category O
- `def-rational-cherednik-polynomial-representation` · definition — The polynomial representation of a rational Cherednik algebra
- `lem-rational-cherednik-category-o-has-finite-length` · lemma — Every rational Cherednik category-O object has finite length
- `lem-rational-cherednik-polynomial-representation-dunkl-formula` · lemma — Dunkl operators realize the polynomial standard module
- `lem-finite-modules-with-connection-over-a-polynomial-open-are-locally-free` · lemma — Finite modules with a connection on a complex polynomial open are vector bundles
- `lem-rational-cherednik-dunkl-localization-and-flat-connection` · lemma — Dunkl localization gives flat connections on the regular locus
- `def-rational-cherednik-kz-functor-and-finite-hecke-algebra` · definition — The KZ monodromy functor and the reflection Hecke algebra
- `lem-rational-cherednik-standard-module-local-connection-residue` · lemma — The standard-module KZ connection has the reflection residue
- `thm-rational-cherednik-category-o-projective-generator-from-generalized-standards` · theorem — Cherednik category O has a standard-filtered projective generator
- `lem-rational-cherednik-kz-relation-specializes-in-flat-family` · lemma — Hecke relations specialize in the generalized-standard family
- `thm-rational-cherednik-kz-standard-modules-factor-through-hecke` · theorem — KZ monodromy of standard modules satisfies the reflection Hecke relations
- `thm-rational-cherednik-kz-factors-through-hecke-algebra` · theorem — KZ monodromy on category O factors through the reflection Hecke algebra
- `lem-cherednik-nilpotent-induced-connections-have-moderate-growth` · lemma — Nilpotent induced Cherednik connections have uniform moderate growth on generic lines
- `lem-bounded-separate-rationality-is-rational` · lemma — Uniformly bounded separate rationality implies rationality
- `thm-cherednik-localized-monodromy-is-fully-faithful-with-subquotient-closed-image` · theorem — Localized Cherednik monodromy is fully faithful and its image is closed under subquotients
- `lem-rational-cherednik-costandard-orthogonality-and-character` · lemma — Cherednik costandards have orthogonality and the standard character
- `thm-rational-cherednik-category-o-bgg-reciprocity-and-projective-generator-rank` · theorem — Cherednik BGG reciprocity and the KZ projective rank
- `thm-rational-cherednik-kz-quotient-equivalence-under-bmr-rank` · theorem — KZ identifies the torsion quotient with Hecke modules under the Hecke-rank hypothesis

### `rational-cherednik-algebras-and-category-o-examples` — Rational Cherednik Algebras and Their Category O: Examples and Counterexamples

- `ex-rational-cherednik-trivial-group-is-the-weyl-algebra` · example — The trivial reflection group gives the first Weyl algebra
- `cex-rational-cherednik-category-o-not-semisimple-at-half` · counterexample — Category O is not semisimple at the rank-one parameter c=1/2

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `rational-cherednik-algebras-and-category-o` requires `affine-hecke-algebras-beyond-type-a`
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
