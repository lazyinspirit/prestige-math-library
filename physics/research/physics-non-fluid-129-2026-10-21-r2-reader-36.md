# Reader report — batch 36

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: Step 3a reader  
Batch: `36`

## Inventory opened

Assigned pages:

- `gr-fx08-wave-energy-and-black-hole-perturbations` (A page)
- `gr-fx08-wave-energy-and-black-hole-perturbations-examples` (B page)

Assigned items, read in the page's supplier-before-consumer order:

- `def-gr-fx-scalar-wave-stress`
- `prop-gr-fx-wave-multiplier-identity`
- `lem-gr-fx-scalar-dominant-energy`
- `prop-gr-fx-schwarzschild-test-energy`
- `def-gr-fx-nondegenerate-local-energy-estimate`
- `def-gr-fx-kerr-horizon-mode`
- `lem-gr-fx-kerr-horizon-modal-flux`
- `lem-gr-fx-schwarzschild-gaussian-beam-concentration`
- `ex-gr-fx08-1`
- `ex-gr-fx08-2`

Required page dependencies opened as context:

- `gr-fx07-kerr-and-hidden-symmetry`
- `gr-local-and-global-energy`
- `gr-curvature-and-tides`
- `gr-einstein-and-matter`

Load-bearing supplier items checked include `def-countable-choice`,
`def-gr-curvature-tensor-and-derived-tensors`,
`def-gr-killing-field`,
`thm-gr-nondegenerate-levi-civita-and-tensor-derivative`,
`thm-gr-killing-and-on-shell-matter-identities`,
`def-causal-classification-of-lorentz-vectors`,
`def-gr-observer-and-rest-space`,
`lem-gr-observer-projection-decomposition`,
`thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`,
`def-gr-schwarzschild-exterior-model`,
`lem-gr-schwarzschild-metric-properties`,
`lem-gr-schwarzschild-extension-chart`,
`lem-gr-schwarzschild-christoffel-symbols`,
`lem-gr-schwarzschild-timelike-geodesic-reduction`,
`def-geodesic-of-an-affine-connection`,
`prop-coordinate-geodesic-equation`,
`def-gr-metric-volume-form-and-current-flux`,
`thm-gr-density-divergence-and-finite-chain-flux`,
`lem-gr-schwarzschild-circular-orbits-and-photon-sphere`,
`def-gr-fx-kerr-exterior`,
`lem-gr-fx-kerr-exterior-properties`,
`prop-gr-fx-kerr-horizon-generator`,
`def-gr-fx-null-screen-geometry`,
`def-integral-curve-of-a-vector-field`,
`thm-unique-maximal-integral-curve-through-each-point`,
`thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`,
`lem-smooth-bump-between-concentric-euclidean-balls`,
`prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor`,
`cor-primitives-of-a-continuous-function`,
`thm-real-power-continuity-and-derivatives`,
`thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
`def-gr-inverse-metric-and-musical-isomorphisms`, and
`thm-sine-and-cosine-derivatives`.

I also inspected the batch proof-contract, cross-batch dependency, notes, and
source-coverage artifacts as navigation and evidence; their prior dispositions
were not treated as verdicts.

## Repairs and evidence

1. **Overstrong title** (`overstrong-title-or-statement`). In
   `prop-gr-fx-schwarzschild-test-energy`, the title “Nonnegative exterior
   scalar Killing flux” overstated the result: the Statement explicitly says
   the signed outer flux may be negative. I changed the title to “Schwarzschild
   scalar Killing-flux balance.” The Statement and Proof were unchanged.

2. **Missing hypothesis** (`missing-hypothesis`). In `ex-gr-fx08-1`, the flux conclusion depends on
   `lem-gr-fx-kerr-horizon-modal-flux`, whose Statement requires
   `Re(u)` to be the trace of a smooth real scalar field near the horizon
   patch. The example had assumed only a nonzero smooth mode trace. I added
   the smooth real extension to the Example and `[A2]`. A targeted search of
   current item/page prose found no item consumer of `ex-gr-fx08-1` beyond its
   companion page placement. I updated the proof-contract derivations for steps
   2.1 and 3.1 to record that `[A2]` supplies the premise required by `[F2]`.
   The item had no `verification.judge` record to remove.

3. **Insufficiently justified coordinate calculations** (`unlicensed-inference`). In
   `lem-gr-fx-schwarzschild-gaussian-beam-concentration`, I made the local
   coordinate calculations explicit: the logarithm and the smooth inverse of
   the tortoise coordinate, the polar definitions of the sphere Laplacian and
   gradient norm, the angular normalization/integrals, and the scalar
   wave-operator calculation producing `W_l`. The Statement is unchanged. I
   synchronized the proof-contract derivations for steps 1.1 and 2.1. The item
   had no `verification.judge` record to remove.

## Focused checks

- `reflow.mts items/prop-gr-fx-schwarzschild-test-energy.md`: completed.
- `precheck.mts items/prop-gr-fx-schwarzschild-test-energy.md`: PASS.
- `reflow.mts items/ex-gr-fx08-1.md`: completed.
- `precheck.mts items/ex-gr-fx08-1.md`: PASS.
- `reflow.mts items/lem-gr-fx-schwarzschild-gaussian-beam-concentration.md`:
  unchanged.
- `precheck.mts items/lem-gr-fx-schwarzschild-gaussian-beam-concentration.md`:
  PASS.
- Final combined proof-layout command on the three changed items: 3 items,
  19 steps, 0 defects.

## Page verdicts

- `gr-fx08-wave-energy-and-black-hole-perturbations`: PASS. Draft page metadata
  and eight item placements match the batch manifest; the page has no prose
  body under the current frontmatter-only page policy.
- `gr-fx08-wave-energy-and-black-hole-perturbations-examples`: PASS. Draft
  metadata and two example placements match the manifest and point to the A
  page; the page has no prose body under the current policy.

The four prerequisite pages were checked as context. Their relevant summaries
and item interfaces match the assigned uses; this report does not adjudicate
their other content.

## Remaining defects and blockers

- Confirmed defects remaining outside this reader's edit scope: none.
- Blocker: none.
- Diagram review: the assigned pages and items contain no TikZ/tikzcd diagrams.
  The Kerr horizon-generator supplier's stationary-limit plot was checked
  against its formula and labels and is consistent.

## Coverage limitation

The review checked all ten assigned item carriers and the load-bearing direct
supplier interfaces listed above, but did not re-audit their entire transitive
mathematical prerequisite closure or retrieve the cited PDFs anew. The local
proofs and cited supplier statements needed for the reviewed calculations were
inspected; no unresolved issue remained in that checked scope.
