# Step 4 batch reviewer — batch **84**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **84**. Step-5 owning group: **ab**.
Return `group: "ab"` and `batches: ["84"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 84 | `skein-modules-for-links-in-three-manifolds` | A | kauffman-bracket-state-sum-and-jones-polynomial |
| 84 | `skein-modules-for-links-in-three-manifolds-examples` | B | skein-modules-for-links-in-three-manifolds |

## Your content, in full

### `skein-modules-for-links-in-three-manifolds` — Skein modules for links in 3-manifolds

- `lem-framed-link-diagram-calculus` · lemma — Framed link diagrams and local Reidemeister moves in plane products
- `def-kauffman-bracket-skein-module-of-a-three-manifold` · definition — Kauffman bracket skein module of a three-manifold
- `lem-kauffman-bracket-module-framing-twist-factor` · lemma — Full framing twists in the Kauffman bracket skein module
- `lem-general-3manifold-skein-quotient-isotopy-and-gluing` · lemma — Functoriality and boundary-collar action for the three-manifold skein quotient
- `lem-kauffman-bracket-evaluation-is-invariant-for-framed-links-in-s-three` · lemma — Kauffman bracket evaluation of framed links in the three-sphere
- `lem-annular-kauffman-bracket-state-expansion` · lemma — Annular state expansion for the Kauffman bracket skein module
- `thm-skein-module-of-s-three-is-rank-one` · theorem — The Kauffman bracket skein module of S³ is rank one
- `thm-skein-module-of-solid-torus-has-core-multicurve-basis` · theorem — The solid-torus skein module has a core-multicurve basis
- `lem-skein-module-isomorphism-respects-framings-and-boundary` · lemma — Framing transport and compatible collar actions under oriented diffeomorphisms

### `skein-modules-for-links-in-three-manifolds-examples` — Skein modules for links in 3-manifolds — Examples and Counterexamples

- `cex-knot-kt-31-boundary-case` · counterexample — Forgetting framing identifies distinct skein classes
- `ex-knot-kt-31-worked-cases` · example — The empty link, trivial circle, and annular core multicurves

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `skein-modules-for-links-in-three-manifolds` requires `kauffman-bracket-state-sum-and-jones-polynomial`
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
