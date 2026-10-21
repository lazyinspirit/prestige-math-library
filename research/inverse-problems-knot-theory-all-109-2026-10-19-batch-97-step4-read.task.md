# Step 4 batch reviewer — batch **97**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **97**. Step-5 owning group: **ag**.
Return `group: "ag"` and `batches: ["97"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 97 | `khovanov-homology-detects-the-unknot` | A | knot-exteriors-and-peripheral-systems, khovanov-homology-and-jones-categorification, connected-sums-and-prime-decomposition, schauder-and-lp-elliptic-estimates, fredholm-elliptic-problems-and-the-elliptic-spectrum |
| 97 | `khovanov-homology-detects-the-unknot-examples` | B | khovanov-homology-detects-the-unknot |

## Your content, in full

### `khovanov-homology-detects-the-unknot` — Khovanov homology detects the unknot

- `def-mirror-of-a-classical-knot` · definition — Mirror of a classical knot
- `lem-essential-curves-on-torus-with-same-primitive-class-are-isotopic` · lemma — Essential torus curves with the same primitive class are isotopic
- `lem-normal-boundary-hodge-estimate-on-four-dimensional-balls` · lemma — The normal-boundary Hodge estimate on four-dimensional balls
- `lem-strong-l-two-neumann-inverse-on-four-dimensional-balls` · lemma — A strong L2 Neumann inverse on four-dimensional balls
- `lem-strong-lp-neumann-inverse-on-four-dimensional-balls` · lemma — A strong Lp Neumann inverse on four-dimensional balls
- `def-singular-instanton-knot-and-sutured-closure-data` · definition — Singular instanton knot and sutured closure data
- `lem-neumann-coulomb-gauge-correction-by-contraction` · lemma — A Neumann Coulomb-gauge correction by contraction
- `def-instanton-knot-homology-and-canonical-class` · definition — Instanton knot homology and its canonical isomorphism class
- `lem-knot-exterior-is-irreducible` · lemma — A smooth knot exterior is irreducible
- `lem-small-critical-curvature-coulomb-gauges-on-four-balls` · lemma — Coulomb gauges from small critical curvature on four-balls
- `lem-instanton-knot-complex-asd-analytic-foundations` · lemma — Analytic foundations for the singular instanton knot complex
- `lem-nontrivial-knot-exterior-boundary-incompressible` · lemma — The boundary of a nontrivial knot exterior is incompressible
- `lem-kh-to-instanton-resolution-spectral-sequence` · lemma — Filtered instanton complex from the cube of knot resolutions
- `thm-sutured-instanton-khi-rank-detects-unknot` · theorem — Sutured instanton knot homology detects the unknot
- `thm-khovanov-to-instanton-spectral-sequence` · theorem — Reduced Khovanov cohomology feeds the singular instanton spectral sequence
- `thm-kronheimer-mrowka-reduced-khovanov-detects-unknot` · theorem — Reduced Khovanov cohomology detects the unknot

### `khovanov-homology-detects-the-unknot-examples` — Khovanov homology detects the unknot — Examples and Counterexamples

- `cex-knot-kt-44-boundary-case` · counterexample — A graded Euler characteristic does not determine total rank
- `ex-knot-kt-44-worked-cases` · example — Reduced Khovanov ranks of the unknot and the three-crossing two-braid

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `khovanov-homology-detects-the-unknot` requires `knot-exteriors-and-peripheral-systems`
- `khovanov-homology-detects-the-unknot` requires `khovanov-homology-and-jones-categorification`
- `khovanov-homology-detects-the-unknot` requires `connected-sums-and-prime-decomposition`
- `satellite-knots-and-jsj-tori` requires `khovanov-homology-detects-the-unknot`
- `smooth-sliceness-and-four-ball-genus-obstructions` requires `khovanov-homology-detects-the-unknot`
- `knot-exterior-rigidity-and-the-complement-theorem` requires `khovanov-homology-detects-the-unknot`
- `character-varieties-and-the-a-polynomial` requires `khovanov-homology-detects-the-unknot`
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
