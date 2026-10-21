# Step 4 batch reviewer — batch **85**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **85**. Step-5 owning group: **ac**.
Return `group: "ac"` and `batches: ["85"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 85 | `root-of-unity-skein-tqft-for-three-manifolds` | A | three-manifold-surgery-presentations-and-kirby-moves, skein-modules-for-links-in-three-manifolds |
| 85 | `root-of-unity-skein-tqft-for-three-manifolds-examples` | B | root-of-unity-skein-tqft-for-three-manifolds |

## Your content, in full

### `root-of-unity-skein-tqft-for-three-manifolds` — Root-of-unity skein TQFT for 3-manifolds

- `def-sl-two-root-of-unity-skein-parameter` · definition — The BHMV root-of-unity skein parameter
- `lem-jones-wenzl-idempotents-exist-below-root-order` · lemma — Jones–Wenzl projectors exist up to the first zero quantum integer
- `def-semisimplified-temperley-lieb-fusion-category` · definition — Semisimplified Temperley–Lieb quotient at the BHMV root
- `lem-root-jones-wenzl-recursion-and-negligible-ideal` · lemma — Root Jones–Wenzl recursion and its negligible ideal
- `lem-root-fusion-rules-and-simple-object-completeness` · lemma — Root fusion rules and completeness of the simple objects
- `def-extended-skein-cobordism-anomaly-data` · definition — Weighted Lagrangian extension and root anomaly data
- `lem-root-skein-surgery-kirby-color-invariance` · lemma — Root Kirby-color handle-slide and blow-up invariance
- `def-skein-tqft-state-space-and-handlebody-pairing` · definition — Skein TQFT state space and handlebody pairing
- `lem-root-handlebody-spine-state-space-finite-generation` · lemma — Finite generation by admissible handlebody-spine states
- `lem-root-handlebody-pairing-nondegeneracy-and-gluing` · lemma — Handlebody pairing nondegeneracy and gluing
- `thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance` · theorem — Root-of-unity skein TQFT gluing and surgery invariance

### `root-of-unity-skein-tqft-for-three-manifolds-examples` — Root-of-unity skein TQFT for 3-manifolds — Examples and Counterexamples

- `cex-knot-kt-32-boundary-case` · counterexample — The next Jones–Wenzl recursion denominator vanishes at p=6
- `ex-knot-kt-32-worked-cases` · example — Worked root-of-unity fusion and torus-state cases

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `root-of-unity-skein-tqft-for-three-manifolds` requires `three-manifold-surgery-presentations-and-kirby-moves`
- `root-of-unity-skein-tqft-for-three-manifolds` requires `skein-modules-for-links-in-three-manifolds`
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
