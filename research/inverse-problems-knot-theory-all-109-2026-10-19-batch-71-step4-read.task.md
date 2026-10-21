# Step 4 batch reviewer — batch **71**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **71**. Step-5 owning group: **x**.
Return `group: "x"` and `batches: ["71"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 71 | `satellite-knots-and-jsj-tori` | A | knot-exteriors-and-peripheral-systems, connected-sums-and-prime-decomposition, torus-knots-and-seifert-fibered-exteriors, khovanov-homology-detects-the-unknot, relative-smooth-triangulation-and-bundle-fitting |
| 71 | `satellite-knots-and-jsj-tori-examples` | B | satellite-knots-and-jsj-tori, relative-smooth-triangulation-and-bundle-fitting |

## Your content, in full

### `satellite-knots-and-jsj-tori` — Satellite knots and JSJ tori

- `def-satellite-pattern-companion-and-winding-number` · definition — Satellite pattern, companion, and winding number
- `def-incompressibility-seifert-fibration-and-jsj-system` · definition — Incompressibility, Seifert fibrations, and JSJ systems
- `lem-boundary-compressible-annulus-is-boundary-parallel` · lemma — Boundary-compressible annuli with torus boundary are boundary-parallel
- `lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel` · lemma — Essential surfaces in a solid torus are meridian disks
- `lem-kneser-haken-finiteness-for-incompressible-tori` · lemma — Kneser–Haken finiteness for incompressible tori
- `lem-boundary-tori-circle-bundle-pants-punctured-mobius-pi1-injective` · lemma — Boundary tori inject into the circle-bundle group
- `lem-torus-in-ball-is-compressible` · lemma — Every embedded torus in a ball is compressible
- `lem-satellite-torus-is-essential` · lemma — Essential companion tori for nontrivial companions and incompressible nonproduct patterns
- `lem-cut-along-incompressible-tori-preserves-irreducibility` · lemma — Cutting an irreducible manifold along incompressible tori preserves irreducibility
- `thm-jsj-decomposition-of-knot-exteriors` · theorem — JSJ decomposition of compact knot exteriors
- `lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus` · lemma — Boundary-compressible incompressible surfaces at torus boundary are parallel annuli
- `lem-atoroidal-piece-with-essential-annulus-is-seifert` · lemma — An atoroidal piece containing an essential annulus is Seifert-fibered
- `cor-satellite-companion-is-detected-by-jsj` · corollary — The JSJ system detects a companion torus when it is not amalgamated
- `lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal` · lemma — Essential annuli and tori in Seifert pieces are vertical or horizontal
- `lem-essential-annulus-in-seifert-piece-isotopic-to-vertical` · lemma — Essential annuli in Seifert pieces can be made vertical
- `lem-seifert-boundary-fiber-slopes-unique-except-small-pieces` · lemma — Boundary fiber slopes are unique outside the small Seifert exceptions

### `satellite-knots-and-jsj-tori-examples` — Satellite knots and JSJ tori — Examples and Counterexamples

- `cex-knot-kt-17-boundary-case` · counterexample — The core pattern has a product companion torus
- `ex-knot-kt-17-worked-cases` · example — A (2,1)-cable of the right trefoil

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `satellite-knots-and-jsj-tori` requires `knot-exteriors-and-peripheral-systems`
- `satellite-knots-and-jsj-tori` requires `connected-sums-and-prime-decomposition`
- `satellite-knots-and-jsj-tori` requires `torus-knots-and-seifert-fibered-exteriors`
- `satellite-knots-and-jsj-tori` requires `khovanov-homology-detects-the-unknot`
- `hyperbolic-knot-complements-and-volume` requires `satellite-knots-and-jsj-tori`
- `freedman-theorem-and-topological-sliceness` requires `satellite-knots-and-jsj-tori`
- `satellite-operators-and-knot-concordance-filtrations` requires `satellite-knots-and-jsj-tori`
- `knot-floer-genus-and-fiberedness-detection` requires `satellite-knots-and-jsj-tori`
- `character-varieties-and-the-a-polynomial` requires `satellite-knots-and-jsj-tori`
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
