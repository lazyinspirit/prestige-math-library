# Step 4 batch reviewer — batch **58**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **58**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["58"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 58 | `crossing-signs-writhe-and-linking-number` | A | geometric-braids-and-artin-generators, oriented-links-braid-closures-and-markov-equivalence, oriented-and-mod-two-intersection-numbers, hecke-markov-traces-and-polynomial-link-invariants, isotopy-extension-and-embedding-theory-beyond-whitney |
| 58 | `crossing-signs-writhe-and-linking-number-examples` | B | crossing-signs-writhe-and-linking-number |

## Your content, in full

### `crossing-signs-writhe-and-linking-number` — Crossing signs, writhe, and linking number

- `def-oriented-crossing-sign-writhe-and-blackboard-framing` · definition — Oriented crossing signs, diagram writhe, and blackboard framing
- `lem-linking-number-even-sum-and-reidemeister-invariance` · lemma — The mixed crossing sum is even and defines linking number
- `alg-oriented-linking-number-from-diagram` · algorithm — Compute oriented linking number from a diagram
- `thm-oriented-linking-number-scan-terminates-and-is-correct` · theorem — The diagram linking-number scan terminates and returns the stated integer
- `thm-linking-number-equals-signed-intersection` · theorem — Linking number equals signed intersection with a spanning surface
- `lem-framed-knot-push-off-self-linking-well-defined` · lemma — Small framed push-offs define a well-defined self-linking number
- `def-framed-knot-self-linking-and-seifert-framing` · definition — Framed knots, self-linking, and the Seifert framing
- `lem-blackboard-push-off-has-two-mixed-crossings-per-crossing` · lemma — A blackboard push-off doubles each crossing into mixed crossings
- `thm-blackboard-framing-self-linking-is-writhe` · theorem — Blackboard self-linking equals diagram self-writhe
- `thm-linking-number-is-invariant-and-writhe-is-not` · theorem — Linking number is invariant and writhe changes under a kink

### `crossing-signs-writhe-and-linking-number-examples` — Crossing signs, writhe, and linking number — Examples and Counterexamples

- `ex-knot-kt-03-worked-cases` · example — Hopf and Whitehead link linking-number computations
- `cex-knot-kt-03-boundary-case` · counterexample — Writhe is not an invariant of an unframed knot

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `seifert-surfaces-and-knot-genus` requires `crossing-signs-writhe-and-linking-number`
- `seifert-matrices-and-the-alexander-module` requires `crossing-signs-writhe-and-linking-number`
- `fox-colorings-and-quandle-invariants` requires `crossing-signs-writhe-and-linking-number`
- `multivariable-alexander-modules-and-chain-models` requires `crossing-signs-writhe-and-linking-number`
- `dehn-surgery-on-knots-and-homology` requires `crossing-signs-writhe-and-linking-number`
- `smooth-and-topological-knot-concordance` requires `crossing-signs-writhe-and-linking-number`
- `kauffman-bracket-state-sum-and-jones-polynomial` requires `crossing-signs-writhe-and-linking-number`
- `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` requires `crossing-signs-writhe-and-linking-number`
- `vassiliev-invariants-and-chord-diagrams` requires `crossing-signs-writhe-and-linking-number`
- `planar-diagram-codes-and-knot-table-enumeration` requires `crossing-signs-writhe-and-linking-number`
- `alternating-diagrams-and-crossing-number-minimality` requires `crossing-signs-writhe-and-linking-number`
- `bridge-presentations-and-unknotting-number` requires `crossing-signs-writhe-and-linking-number`
- `milnor-invariants-and-link-peripheral-nilpotent-quotients` requires `crossing-signs-writhe-and-linking-number`
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
