# Step 4 batch reviewer — batch **76**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **76**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["76"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 76 | `unitary-poincare-representations-and-little-groups` | A | gauge-groups-and-representation-theory-interfaces, mackeys-imprimitivity-theorem, hurewicz-whitehead-freudenthal-and-cw-approximation |
| 76 | `unitary-poincare-representations-and-little-groups-examples` | B | unitary-poincare-representations-and-little-groups |

## Your content, in full

### `unitary-poincare-representations-and-little-groups` — Unitary Poincaré Representations and Little Groups

- `def-connected-poincare-cover-and-positive-energy` · definition — Connected Poincaré covers and positive translation energy
- `lem-mackey-induction-classification-for-regular-euclidean-duals` · lemma — Mackey induction classifies regular Euclidean dual actions
- `lem-lorentz-stabilizers-and-connected-cover-preimages` · lemma — Global Lorentz stabilizers and their connected-cover preimages
- `lem-poincare-dual-orbits-are-regular-homogeneous-borel-spaces` · lemma — Lorentz momentum orbits are regular homogeneous Borel spaces
- `lem-null-little-group-unitary-duals-for-all-dimensions` · lemma — Null little-group unitary duals, including low dimensions
- `lem-central-kernel-descent-for-poincare-inductions` · lemma — Central kernel characters control descent of Poincaré inductions
- `thm-positive-energy-wigner-mackey-classification-for-connected-covers` · theorem — Positive-energy Wigner–Mackey classification for connected covers

### `unitary-poincare-representations-and-little-groups-examples` — Unitary Poincaré Representations and Little Groups: Examples

- `ex-d4-massive-spin-and-so3-descent` · example — D=4 massive spin one-half and spin one descent
- `ex-d4-helicity-and-continuous-spin-central-parities` · example — D=4 helicity and both continuous-spin central parities
- `ex-d4-nonzero-null-translations-are-continuous-spin` · example — A D=4 continuous-spin little representation has nonzero translations
- `ex-d3-irrational-massive-spin-fails-finite-cover-descent` · example — An irrational D=3 massive spin descends to no finite cover
- `ex-d3-null-signs-and-central-phases` · example — D=3 null translations have two signs and independent central phases
- `ex-d2-future-null-rays-are-inequivalent` · example — The two D=2 future null rays give inequivalent representations
- `ex-d2-zero-orbit-has-nontrivial-lorentz-character` · example — A nontrivial D=2 Lorentz character lies over zero momentum

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `unitary-poincare-representations-and-little-groups` requires `gauge-groups-and-representation-theory-interfaces`
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
