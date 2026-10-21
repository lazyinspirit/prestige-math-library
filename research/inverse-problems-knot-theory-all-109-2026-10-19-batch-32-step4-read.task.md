# Step 4 batch reviewer — batch **32**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **32**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["32"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 32 | `tv-source-certificates-and-geometric-convergence` | A | spatial-bv-and-total-variation-regularization, variational-source-conditions-and-bregman-rates, proximal-gradient-and-accelerated-composite-optimization, reeb-stability-and-global-foliation-constructions |
| 32 | `tv-source-certificates-and-geometric-convergence-examples` | B | tv-source-certificates-and-geometric-convergence |

## Your content, in full

### `tv-source-certificates-and-geometric-convergence` — TV source certificates and level-set convergence

- `def-ip-tv-functional-on-l2-distributional-variation` · definition — Distributional TV as an extended functional on L²
- `def-ip-tv-level-set-representatives-and-boundaries` · definition — Canonical TV level sets and their boundaries
- `def-ip-tv-variational-curvature` · definition — Variational curvature of a finite-perimeter set
- `lem-ip-tv-l2-finite-variation-has-radon-derivative` · lemma — Finite L² distributional variation has a finite Radon derivative
- `lem-ip-tv-l2-functional-properties` · lemma — Convexity, lower semicontinuity, and BV agreement of L² TV
- `def-ip-tv-dual-source-certificate` · definition — Dual source certificates for TV regularization
- `lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets` · lemma — Sharp planar isoperimetric inequality for finite-perimeter sets
- `lem-ip-tv-l2-cutoff-approximation` · lemma — Compactly supported BV cutoffs for finite-variation L² functions
- `lem-ip-tv-dual-attainment-and-certificate-limit` · lemma — Dual attainment and convergence of TV source certificates
- `lem-ip-tv-l2-coarea-formula` · lemma — Coarea for finite-variation L² functions
- `lem-ip-tv-l2-sobolev-inequality` · lemma — Full-space BV Sobolev inequality for L² distributional TV
- `lem-ip-neumann-bv-sobolev-poincare` · lemma — BV Sobolev–Poincaré inequality for Neumann TV
- `lem-ip-tv-vanishing-noise-primal-compactness` · lemma — Primal compactness and selection of a minimum-TV limit
- `lem-ip-tv-level-set-uniform-density-and-hausdorff` · lemma — Uniform density and Hausdorff convergence of TV level-set boundaries
- `thm-ip-2d-tv-level-set-convergence` · theorem — Two-dimensional TV level-set convergence under a source condition

### `tv-source-certificates-and-geometric-convergence-examples` — TV source certificates and level-set convergence — Examples and Counterexamples

- `cex-ip-tv-minimum-truth-without-source-certificate` · counterexample — A minimum-TV truth can lack an L² source certificate
- `ex-ip-tv-circular-radon-zero-truth` · example — Circular Radon inversion at the zero truth
- `ex-ip-tv-bessel-deblurring-source-certificate` · example — A smooth Bessel-blur truth with an explicit TV source certificate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `tv-source-certificates-and-geometric-convergence` requires `spatial-bv-and-total-variation-regularization`
- `tv-source-certificates-and-geometric-convergence` requires `variational-source-conditions-and-bregman-rates`
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
