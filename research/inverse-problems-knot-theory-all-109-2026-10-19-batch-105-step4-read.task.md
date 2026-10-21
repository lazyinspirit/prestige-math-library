# Step 4 batch reviewer — batch **105**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **105**. Step-5 owning group: **ai**.
Return `group: "ai"` and `batches: ["105"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 105 | `alternating-diagrams-and-crossing-number-minimality` | A | crossing-signs-writhe-and-linking-number, kauffman-bracket-state-sum-and-jones-polynomial |
| 105 | `alternating-diagrams-and-crossing-number-minimality-examples` | B | alternating-diagrams-and-crossing-number-minimality |

## Your content, in full

### `alternating-diagrams-and-crossing-number-minimality` — Alternating diagrams and crossing-number minimality

- `def-crossing-number-of-link` · definition — Crossing number of a link
- `def-flype-crossing-ball-and-alternating-tangle-data` · definition — Flypes, crossing balls, and standard-position Conway spheres
- `def-reduced-alternating-link-diagram` · definition — Reduced alternating link diagram
- `def-split-link` · definition — Split and nonsplit links
- `def-tait-graph-of-a-link-diagram` · definition — Checkerboard coloring and Tait graphs
- `lem-connected-regular-link-diagram-has-checkerboard-coloring` · lemma — Connected four-valent link projections admit checkerboard colorings
- `lem-disconnected-projection-components-separated-by-jordan-curve` · lemma — Disconnected projection components admit a separating Jordan curve
- `lem-kauffman-smoothing-operators-for-braid-crossings` · lemma — Bracket smoothings of positive and negative braid crossings
- `lem-connected-projection-has-connected-tait-graphs` · lemma — The Tait graphs of a connected projection are connected
- `lem-disconnected-link-diagram-represents-a-split-link` · lemma — A disconnected link projection represents a split link
- `lem-definite-normal-pairing-forces-nonsplit-boundary` · lemma — A definite normal pairing forces a nonsplit boundary
- `lem-connected-diagram-bracket-span-bound-and-alternating-equality` · lemma — Connected-diagram bracket span bound and alternating equality
- `lem-alternating-checkerboard-normal-pairing-is-definite` · lemma — The checkerboard normal pairing of a connected alternating diagram is definite
- `lem-connected-alternating-link-is-nonsplit` · lemma — Connected alternating diagrams represent nonsplit links
- `thm-reduced-alternating-diagram-minimizes-crossings` · theorem — Reduced alternating diagrams minimize crossing number
- `thm-tait-flyping-theorem` · theorem — Tait flyping theorem
- `lem-alternating-state-adequacy-and-jones-span` · lemma — Adequacy and Jones span of reduced alternating diagrams
- `cor-jones-span-detects-crossing-number-for-reduced-alternating-knots` · corollary — Jones span detects crossing number for reduced alternating knots

### `alternating-diagrams-and-crossing-number-minimality-examples` — Alternating diagrams and crossing-number minimality — Examples and Counterexamples

- `cex-knot-kt-50-boundary-case` · counterexample — A nugatory kink defeats crossing minimality
- `ex-knot-kt-50-worked-cases` · example — Trefoil and figure-eight Jones spans

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `alternating-diagrams-and-crossing-number-minimality` requires `crossing-signs-writhe-and-linking-number`
- `alternating-diagrams-and-crossing-number-minimality` requires `kauffman-bracket-state-sum-and-jones-polynomial`
- `open-questions-in-knot-polynomials-and-surgery` requires `alternating-diagrams-and-crossing-number-minimality`
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
