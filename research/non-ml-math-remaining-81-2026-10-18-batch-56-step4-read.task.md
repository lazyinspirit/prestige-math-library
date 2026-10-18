# Step 4 batch reviewer — batch **56**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **56**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["56"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 56 | `hall-stability-dt-bps-and-wall-crossing` | A | derived-hall-algebras, motivic-hall-algebras-and-integration, cohomological-hall-algebras-and-quiver-correspondences, hall-algebra-modules-and-geometric-actions |
| 56 | `hall-stability-dt-bps-and-wall-crossing-examples` | B | hall-stability-dt-bps-and-wall-crossing |

## Your content, in full

### `hall-stability-dt-bps-and-wall-crossing` — Hall Integration, Stability, DT/BPS Invariants, and Wall Crossing

- `def-finite-acyclic-quiver-stability-data` · definition — Finite-field stability data for an acyclic quiver
- `lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form` · lemma — Finite acyclic quiver representations are finitary hereditary with the Euler form
- `lem-upper-half-plane-sum-phase-between` · lemma — The phase of a sum lies between upper-half-plane phases
- `lem-quiver-semistable-loci-are-open` · lemma — Semistable loci of finite-quiver representations are open
- `lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend` · lemma — Quiver Harder–Narasimhan filtrations exist, are unique, and descend
- `lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids` · lemma — Finite-field points of the semistable quiver stack give the Hall groupoid
- `def-subobject-first-completed-finite-quiver-hall-algebra-and-tori` · definition — Subobject-first Hall completion and quantum tori for finite quivers
- `lem-finite-quiver-hall-extension-orbit-count` · lemma — Finite-quiver Hall multiplication counts extensions by automorphism orbits
- `thm-finite-quiver-euler-and-skew-integration-is-multiplicative` · theorem — Euler and skew integration are multiplicative for finite acyclic quivers
- `thm-finite-quiver-hall-wall-crossing` · theorem — Completed Hall wall crossing for finite acyclic quivers
- `rem-finite-quiver-hall-counts-and-dt-bps-interpretation` · remark — Finite-quiver Hall counts and the limits of DT/BPS interpretation

### `hall-stability-dt-bps-and-wall-crossing-examples` — Hall Integration, Stability, DT/BPS Invariants, and Wall Crossing: Examples and Counterexamples

- `ex-one-vertex-finite-quiver-hall-integration-is-quantum-dilogarithm` · example — One vertex with no arrows gives the quantum dilogarithm
- `ex-a2-quiver-hall-wall-crossing-pentagon` · example — The A₂ quiver gives the quantum-dilogarithm pentagon
- `cex-omitting-strictly-semistable-objects-breaks-hn-factorization` · counterexample — Omitting strictly semistable objects breaks Hall factorization at the A₂ wall
- `cex-commutative-target-erases-the-a2-wall-crossing` · counterexample — Commutativizing the target erases the A₂ wall-crossing identity

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hall-stability-dt-bps-and-wall-crossing` requires `derived-hall-algebras`
- `hall-stability-dt-bps-and-wall-crossing` requires `motivic-hall-algebras-and-integration`
- `hall-stability-dt-bps-and-wall-crossing` requires `cohomological-hall-algebras-and-quiver-correspondences`
- `hall-stability-dt-bps-and-wall-crossing` requires `hall-algebra-modules-and-geometric-actions`
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
