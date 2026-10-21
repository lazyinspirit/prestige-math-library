# Step 4 batch reviewer — batch **72**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **72**. Step-5 owning group: **x**.
Return `group: "x"` and `batches: ["72"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 72 | `hyperbolic-knot-complements-and-volume` | A | knot-exteriors-and-peripheral-systems, satellite-knots-and-jsj-tori, extremal-length-and-planar-quasiconformality, quantitative-hyperbolic-geometry-toolkit |
| 72 | `hyperbolic-knot-complements-and-volume-examples` | B | hyperbolic-knot-complements-and-volume |

## Your content, in full

### `hyperbolic-knot-complements-and-volume` — Hyperbolic knot complements and volume

- `def-lobachevsky-function` · definition — Lobachevsky function
- `def-ideal-tetrahedron-shape-and-cusp-holonomy` · definition — Ideal tetrahedron shape and cusp holonomy
- `lem-torus-curves-same-primitive-class-isotopic-kt18-local` · lemma — Essential torus curves with the same primitive class are isotopic
- `lem-rank-two-kleinian-subgroups-give-proper-embedded-horocusps` · lemma — Rank-two Kleinian subgroups give proper embedded horocusps
- `lem-finite-covolume-kleinian-quasiconformal-conjugacy-is-mobius` · lemma — A quasiconformal conjugacy of finite-covolume Kleinian groups is Möbius
- `lem-uniform-circular-distortion-gives-planar-quasiconformality` · lemma — Uniform circular distortion gives planar quasiconformality by difference quotients
- `lem-lobachevsky-fourier-expansion-and-pi-third-bound` · lemma — Lobachevsky Fourier expansion and a certified π/3 value
- `lem-ideal-tetrahedron-shape-parameter-relations` · lemma — Shape parameters of an ideal tetrahedron
- `lem-horocusp-truncation-has-finite-volume` · lemma — A rank-two horocusp truncation has finite volume
- `lem-peripheral-isomorphisms-of-standard-cusped-hyperbolic-manifolds-give-quasi-isometries` · lemma — Group isomorphisms of standard cusped hyperbolic manifolds give equivariant quasi-isometries
- `lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary` · lemma — A quasi-isometry of hyperbolic three-space has a quasiconformal boundary map
- `lem-ideal-torus-cusp-holonomy-criterion` · lemma — Cusp multipliers detect completeness
- `lem-ideal-orthoscheme-volume` · lemma — Volume of an ideal orthoscheme region
- `lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients` · lemma — Complete curvature minus one three-manifolds are Kleinian quotients
- `thm-regular-ideal-tetrahedron-volume` · theorem — Volume of the regular ideal tetrahedron
- `lem-finite-volume-hyperbolic-three-manifolds-have-finite-standard-cusp-decompositions` · lemma — Finite-volume hyperbolic three-manifolds have finite standard cusp decompositions
- `def-pared-hyperbolic-structures-and-volume` · definition — Pared hyperbolic structures and volume
- `lem-isometry-preserves-finite-volume-integral` · lemma — An isometry preserves the finite hyperbolic volume integral
- `def-finite-volume-hyperbolic-knot-exterior` · definition — Finite-volume hyperbolic knot exterior
- `lem-knot-exterior-irreducible-and-boundary-incompressible-kt18-local` · lemma — Nontrivial knot exteriors are irreducible and boundary-incompressible
- `thm-thurston-hyperbolization-for-atoroidal-knot-exteriors` · theorem — Thurston hyperbolization for atoroidal knot exteriors
- `lem-figure-eight-ideal-gluing-and-cusp-completeness` · lemma — The standard two-tetrahedron figure-eight gluing is complete
- `thm-mostow-prasad-rigidity-for-standard-finite-volume-cusped-three-manifolds` · theorem — Mostow–Prasad rigidity for complete finite-volume hyperbolic three-manifolds
- `lem-hyperbolic-knot-exterior-irreducibility-and-boundary-incompressibility` · lemma — Atoroidal non-Seifert knot exteriors have the required topological hypotheses
- `thm-mostow-prasad-rigidity-and-knot-volume` · theorem — Mostow–Prasad rigidity and knot volume

### `hyperbolic-knot-complements-and-volume-examples` — Hyperbolic knot complements and volume — Examples and Counterexamples

- `cex-knot-kt-18-boundary-case` · counterexample — The trefoil exterior is Seifert-fibered
- `ex-knot-kt-18-worked-cases` · example — Worked case: the figure-eight complement

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hyperbolic-knot-complements-and-volume` requires `knot-exteriors-and-peripheral-systems`
- `hyperbolic-knot-complements-and-volume` requires `satellite-knots-and-jsj-tori`
- `hyperbolic-dehn-filling-and-exceptional-slopes` requires `hyperbolic-knot-complements-and-volume`
- `colored-jones-invariant-and-volume-conjecture` requires `hyperbolic-knot-complements-and-volume`
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
