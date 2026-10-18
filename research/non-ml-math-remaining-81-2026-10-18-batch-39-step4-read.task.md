# Step 4 batch reviewer — batch **39**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **39**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["39"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 39 | `regular-weyl-representations-and-stone-von-neumann` | A | heisenberg-and-algebraic-weyl-algebras, unitary-representations-positive-type-and-gns, symplectic-manifolds-moser-stability-and-darboux-weinstein-theory, primitive-dirichlet-l-functions-and-functional-equations, mackeys-imprimitivity-theorem |
| 39 | `regular-weyl-representations-and-stone-von-neumann-examples` | B | regular-weyl-representations-and-stone-von-neumann |

## Your content, in full

### `regular-weyl-representations-and-stone-von-neumann` — Exponentiated Weyl Relations and Regular Representations

- `def-heisenberg-group-of-a-symplectic-vector-space` · definition — The Heisenberg group of a finite-dimensional symplectic vector space
- `def-incomplete-tensor-product-with-reference-vector` · definition — Incomplete tensor product of one-mode Hilbert spaces with a reference vector
- `def-universal-weyl-c-star-algebra` · definition — The universal Weyl C*-algebra
- `def-regular-weyl-system-on-a-symplectic-vector-space` · definition — Regular Weyl systems and irreducibility
- `lem-heisenberg-group-lagrangian-splitting-and-dual-orbit` · lemma — Heisenberg group polarization and the fixed-central-character orbit
- `lem-universal-weyl-c-star-algebra-is-well-defined` · lemma — The universal Weyl norm is finite and has the C*-completion property
- `lem-schrodinger-weyl-system-is-regular-and-irreducible` · lemma — The Schrödinger Weyl system is regular and irreducible
- `lem-one-mode-gaussian-weyl-average-is-rank-one` · lemma — The Gaussian Weyl average is a rank-one projection
- `thm-stone-von-neumann-for-finite-dimensional-weyl-systems` · theorem — Stone–von Neumann uniqueness for finite-dimensional regular Weyl systems

### `regular-weyl-representations-and-stone-von-neumann-examples` — Regular Weyl Representations and Uniqueness: Examples and Counterexamples

- `cex-universal-weyl-c-star-algebra-has-nonregular-representations` · counterexample — The universal Weyl C*-algebra has nonregular representations
- `ex-zero-central-character-has-many-regular-characters` · example — At zero central parameter, distinct regular characters are inequivalent
- `ex-one-mode-schrodinger-weyl-relations` · example — The one-mode Schrödinger formulas and their phase
- `cex-infinite-mode-regular-weyl-representations-are-inequivalent` · counterexample — Infinitely many modes admit inequivalent irreducible regular Weyl representations

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `regular-weyl-representations-and-stone-von-neumann` requires `heisenberg-and-algebraic-weyl-algebras`
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
