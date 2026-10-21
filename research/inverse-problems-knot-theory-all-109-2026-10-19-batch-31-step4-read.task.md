# Step 4 batch reviewer — batch **31**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **31**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["31"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 31 | `spatial-bv-and-total-variation-regularization` | A | radon-measures-and-the-riesz-markov-kakutani-theorem, the-lp-spaces-holder-minkowski-and-riesz-fischer, bounded-variation-and-riemann-stieltjes, tempered-distributions-and-the-fourier-transform, strongly-continuous-semigroups-and-hille-yosida, sard-theorem-and-transversality, hausdorff-measure-and-hausdorff-dimension |
| 31 | `spatial-bv-and-total-variation-regularization-examples` | B | spatial-bv-and-total-variation-regularization |

## Your content, in full

### `spatial-bv-and-total-variation-regularization` — Spatial BV, finite perimeter, and TV conventions

- `lem-ip-distributional-radon-representation-unique` · lemma — Uniqueness of a Radon measure representing a distribution
- `lem-ip-vector-radon-variation-is-radon` · lemma — Variation of a finite vector Radon measure is Radon
- `lem-ip-open-euclidean-locally-finite-smooth-partition` · lemma — Locally finite smooth partitions of unity on Euclidean open sets
- `lem-ip-smooth-compact-support-dense-in-c0` · lemma — Smooth compactly supported functions are dense in C0 on an open Euclidean set
- `lem-ip-lw-integral-inequality` · lemma — Loomis–Whitney integral inequality
- `lem-ip-bv-zero-gradient-constant-on-connected-domain` · lemma — A zero distributional gradient is constant on a connected domain
- `lem-ip-l1-sequence-compactness-by-cell-averages` · lemma — Sequence compactness in L1 by finite cell averages
- `lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice` · lemma — Lipschitz graph area and calculus under Countable Choice
- `def-ip-spatial-bv-and-distributional-tv` · definition — Spatial BV and distributional total variation
- `lem-ip-unit-vector-density-has-scalar-variation` · lemma — A unit vector density has scalar variation measure
- `lem-ip-euclidean-radon-representation-under-countable-choice` · lemma — Euclidean real Radon representation under Countable Choice
- `lem-ip-bv-test-field-characterization-and-lsc` · lemma — Test-field formula and L1 lower semicontinuity of spatial TV
- `def-ip-boundary-tv-conventions` · definition — Full-space, Dirichlet, and Neumann TV conventions
- `lem-ip-bv-smooth-coarea` · lemma — Coarea identity for smooth scalar functions
- `lem-ip-bv-one-sided-trace-on-lipschitz-graph` · lemma — One-sided BV traces and Green identity on a Lipschitz graph
- `lem-ip-bv-strict-approximation` · lemma — Strict smooth approximation in BV
- `lem-ip-bv-lipschitz-trace-and-zero-extension` · lemma — Trace formula and bounded zero extension on Lipschitz domains
- `lem-ip-bv-coarea-formula` · lemma — Coarea formula for spatial BV
- `lem-ip-bv-sobolev-inequality` · lemma — BV Sobolev inequality in full space
- `lem-ip-bv-extension-and-translation` · lemma — BV extension and translation bounds
- `lem-ip-bv-compactness-lower-semicontinuity` · lemma — Compactness and lower semicontinuity for bounded-domain BV
- `lem-ip-bv-extension-translation-and-coarea` · lemma — BV extension, translation, and coarea
- `lem-ip-finite-perimeter-relative-isoperimetry` · lemma — Relative isoperimetric inequality on bounded connected Lipschitz domains

### `spatial-bv-and-total-variation-regularization-examples` — Spatial BV, finite perimeter, and TV conventions — Examples and Counterexamples

- `ex-ip-bv-jump-across-smooth-curve` · example — A smooth-curve jump has perimeter total variation
- `cex-ip-oscillatory-sequence-unbounded-tv` · counterexample — An oscillatory L1-bounded sequence with unbounded spatial TV
- `ex-ip-neumann-constants-and-dirichlet-boundary-cost` · example — Neumann constants and the Dirichlet boundary cost

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `tv-source-certificates-and-geometric-convergence` requires `spatial-bv-and-total-variation-regularization`
- `eit-logarithmic-stability-and-conductivity-classes` requires `spatial-bv-and-total-variation-regularization`
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
