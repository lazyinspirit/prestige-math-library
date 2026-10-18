# Step 4 batch reviewer — batch **34**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **34**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["34"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 34 | `mixed-hdiv-fluxes-and-darcy-discretization` | A | mixed-finite-elements-and-stokes-stability |
| 34 | `mixed-hdiv-fluxes-and-darcy-discretization-examples` | B | mixed-hdiv-fluxes-and-darcy-discretization |

## Your content, in full

### `mixed-hdiv-fluxes-and-darcy-discretization` — Mixed H(div) fluxes, Darcy flow and local conservation

- `def-na-contravariant-piola-map` · definition — Contravariant Piola map
- `def-na-hdiv-space` · definition — The real H(div) space
- `lem-na-l2-zero-mean-hilbert` · lemma — The real zero-mean $L^2$ space is Hilbert
- `lem-na-smooth-neighborhood-dense-in-h1-simplex` · lemma — Smooth-neighborhood density in H1 of a simplex
- `lem-na-hdiv-weak-normal-trace` · lemma — Weak normal trace by Green duality
- `lem-na-piola-divergence-and-flux-identities` · lemma — Piola divergence and facet-flux identities
- `def-na-h0div-space` · definition — Zero-normal-trace H(div) space
- `def-na-simplicial-mesh-rt-bdm-spaces` · definition — Affine simplicial meshes and RT/BDM spaces
- `lem-na-h0div-div-zero-mean` · lemma — Zero mean of the divergence under zero normal trace
- `lem-na-h1-zero-boundary-is-zero-normal-hdiv` · lemma — H1-zero fields have zero weak H(div) normal trace
- `lem-na-hdiv-is-hilbert-and-h0div-closed` · lemma — H(div) is Hilbert and H0(div) is closed
- `def-na-neumann-darcy-mixed-problem` · definition — No-flow mixed Darcy problem and coefficient norms
- `lem-na-cell-average-l2-projection` · lemma — Cell averaging is the $L^2$ projection onto P0
- `lem-na-piola-preserves-rt-bdm-spaces` · lemma — Piola maps RT and BDM polynomial families onto the physical cell
- `lem-na-rt0-p0-kernel-is-divergencefree` · lemma — The RT0/P0 discrete kernel is exactly divergence-free
- `lem-na-simplex-h1-facet-trace-bound` · lemma — H1 facet trace inequality on shape-regular simplices
- `def-na-hybridized-rt0-darcy-system` · definition — Hybridized no-flow RT0/P0 Darcy system
- `lem-na-h1-interior-facet-traces-agree` · lemma — H1 traces agree across interior mesh facets
- `lem-na-rt0-unisolvence-and-global-conformity` · lemma — RT0 facet-flux unisolvence and global H(div) conformity
- `thm-na-darcy-mixed-wellposedness` · theorem — Continuous mixed Darcy well-posedness with pressure gauge
- `def-na-rt0-h1-interpolation` · definition — Canonical RT0 interpolation on H1 fields
- `thm-na-rt0-p0-local-mass-conservation` · theorem — Exact RT0/P0 element mass balance and normal continuity
- `lem-na-rt0-h1-interpolation-bounded-and-commuting` · lemma — Boundedness and divergence commutation of RT0 interpolation
- `thm-na-rt0-p0-bounded-divergence-lift-and-infsup` · theorem — Uniform RT0/P0 divergence lift and inf-sup bound
- `thm-na-rt0-bounded-commuting-projection` · theorem — Bounded commuting projection onto the zero-normal RT0 space
- `thm-na-rt0-p0-darcy-error-estimate` · theorem — RT0/P0 Darcy stability and flux/pressure error bound
- `thm-na-rt0-hybridization-equivalence-static-condensation` · theorem — Hybridization, static condensation, and pressure gauge

### `mixed-hdiv-fluxes-and-darcy-discretization-examples` — Mixed H(div) fluxes, Darcy flow and local conservation — Examples

- `ex-na-primal-p1-flux-is-not-locally-conservative` · example — A continuous P1 pressure gives a nonconservative primal flux
- `ex-na-constant-flux-reference-triangle` · example — A constant Darcy flux on the reference triangle
- `ex-na-checkerboard-permeability-contrast` · example — Checkerboard permeability and the explicit contrast factor
- `ex-na-two-triangle-hybrid-static-condensation` · example — Two-triangle hybrid RT0 local elimination

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `mixed-hdiv-fluxes-and-darcy-discretization` requires `mixed-finite-elements-and-stokes-stability`
- `discrete-de-rham-complexes-and-edge-elements` requires `mixed-hdiv-fluxes-and-darcy-discretization`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
