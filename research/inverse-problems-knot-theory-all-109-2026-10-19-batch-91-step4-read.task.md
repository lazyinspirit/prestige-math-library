# Step 4 batch reviewer — batch **91**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **91**. Step-5 owning group: **ae**.
Return `group: "ae"` and `batches: ["91"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 91 | `lee-deformation-and-rasmussen-s-invariant` | A | spectral-sequences, smooth-and-topological-knot-concordance, khovanov-homology-and-jones-categorification, grid-homology-and-combinatorial-knot-floer-theory |
| 91 | `lee-deformation-and-rasmussen-s-invariant-examples` | B | lee-deformation-and-rasmussen-s-invariant |

## Your content, in full

### `lee-deformation-and-rasmussen-s-invariant` — Lee deformation and Rasmussen’s s-invariant

- `def-odd-khovanov-barnatan-and-leo-triple` · definition — Odd Khovanov–Bar–Natan–LEO triple
- `lem-based-planar-diagrams-admit-spherical-long-endpoint-presentations` · lemma — Based diagrams admit spherical long endpoint presentations
- `lem-odd-cube-oriented-face-parity-and-sign-existence` · lemma — Oriented odd-cube face parity and constructive edge signs
- `lem-smooth-link-cobordisms-admit-finite-generic-movies` · lemma — Smooth link cobordisms admit finite generic movies
- `lem-puncturing-smooth-four-ball-surfaces-gives-genus-preserving-knot-cobordisms` · lemma — Puncturing a smooth four-ball surface gives a genus-preserving knot cobordism
- `def-lee-deformed-khovanov-complex` · definition — Lee-deformed Khovanov complex and filtration
- `lem-odd-marked-reidemeister-i-ii-contractions` · lemma — Marked integral odd Reidemeister I and II contractions
- `lem-pointed-odd-barnatan-tensor-product-over-marked-rings` · lemma — Pointed odd and Bar–Natan tensor products over the marked rings
- `lem-pointed-spherical-recharting-preserves-odd-barnatan-complexes` · lemma — Pointed spherical recharting preserves the integral odd and Bar–Natan complexes
- `lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark` · lemma — Marked concordances admit finite movies with a protected mark
- `def-generic-movie-of-an-oriented-knot-cobordism` · definition — A generic movie of an oriented knot cobordism
- `lem-odd-marked-reidemeister-iii-common-complex` · lemma — A marked signed common complex for odd Reidemeister III
- `lem-marked-knot-isotopies-admit-protected-reidemeister-movies` · lemma — Marked knot isotopies admit protected Reidemeister movies
- `lem-lee-filtered-spectral-sequence-and-two-orientation-classes` · lemma — Lee filtration, spectral sequence, and orientation classes
- `lem-based-odd-barnatan-movie-maps-and-localized-concordances` · lemma — Based odd and Bar–Natan movie maps and localized concordances
- `thm-lee-filtered-homology-is-an-oriented-link-invariant` · theorem — Lee filtered homology is an oriented link invariant
- `thm-lee-homology-of-a-knot-has-two-generators` · theorem — Lee homology of a knot has two generators
- `def-rasmussen-s-invariant` · definition — Rasmussen’s s-invariant
- `lem-odd-khovanov-and-barnatan-localization-foundations` · lemma — Odd Khovanov and Bar–Natan LEO foundations
- `lem-lee-cobordism-filtration-genus-bound` · lemma — Lee cobordism maps give the genus filtration bound
- `cor-rasmussen-s-for-positive-knots` · corollary — Rasmussen's invariant for positive knots
- `lem-rasmussen-s-mirror` · lemma — Rasmussen's invariant changes sign under mirror image
- `thm-leo-local-equivalence-group-and-concordance-map` · theorem — LEO local-equivalence group and concordance map
- `rem-leo-refined-s-current-computations` · remark — Reported refined s-invariant computations
- `thm-rasmussen-s-bounds-smooth-four-ball-genus` · theorem — Rasmussen's s-invariant bounds smooth four-ball genus
- `lem-knot-kt41-whitehead-double-values` · lemma — The Hedden–Ording t=2 positive Whitehead double has tau zero and s two

### `lee-deformation-and-rasmussen-s-invariant-examples` — Lee deformation and Rasmussen’s s-invariant — Examples and Counterexamples

- `ex-knot-kt-38-worked-cases` · example — Unknot, trefoils, and the 2-twisted positive Whitehead double
- `cex-knot-kt-38-boundary-case` · counterexample — The s-invariant is not twice the knot Floer tau invariant

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `lee-deformation-and-rasmussen-s-invariant` requires `smooth-and-topological-knot-concordance`
- `lee-deformation-and-rasmussen-s-invariant` requires `khovanov-homology-and-jones-categorification`
- `lee-deformation-and-rasmussen-s-invariant` requires `grid-homology-and-combinatorial-knot-floer-theory`
- `knot-cobordism-maps-and-functoriality` requires `lee-deformation-and-rasmussen-s-invariant`
- `zero-traces-and-conway-nonsliceness` requires `lee-deformation-and-rasmussen-s-invariant`
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
