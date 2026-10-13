# Step 3a reader report — batch 70

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `70`

## Opened inventory

Assigned pages:

- `gr-local-and-global-energy` — `library/general-relativity/gr-local-and-global-energy.md` (A page)
- `gr-local-and-global-energy-examples` — `library/general-relativity/gr-local-and-global-energy-examples.md` (B page)

Assigned items, read in the page manifest's supplier-to-consumer order:

1. `def-gr-observer-energy-momentum-current`
2. `lem-gr-observer-energy-momentum-decomposition`
3. `def-gr-measured-energy-density-flux-and-stress`
4. `def-gr-congruence-acceleration-and-expansion`
5. `lem-gr-congruence-acceleration-and-expansion-properties`
6. `lem-gr-energy-momentum-current-divergence`
7. `lem-gr-killing-congruence-kinematics-and-energy-current`
8. `def-gr-killing-energy-charge`
9. `pthm-gr-local-energy-balance`
10. `rem-gr-no-universal-global-energy`
11. `rem-gr-local-and-global-energy-scope-and-deferrals`
12. `ex-gr-translating-dust-measured-energy-and-balance`
13. `ex-gr-boost-congruence-energy-balance-in-flat-space`
14. `ex-gr-perfect-fluid-energy-equation-from-the-local-balance`
15. `ex-gr-killing-energy-charge-of-a-static-dust`
16. `cex-gr-measured-energy-density-depends-on-the-observer`
17. `cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density`

Opened supplier context needed for the definitions, proofs, examples and physical readings:

- Geometry and observer definitions: `def-gr-smooth-lorentzian-objects`, `def-gr-smooth-covariant-two-tensor-field`, `def-gr-inverse-metric-and-musical-isomorphisms`, `def-gr-observer-and-rest-space`, `def-gr-observer-congruence-and-adapted-charts`, `def-gr-tensor-fields-and-components`, `def-causal-classification-of-lorentz-vectors`, `lem-gr-observer-projection-decomposition`, `lem-lorentz-form-has-orthonormal-basis`, `def-c-r-and-smooth-maps-between-smooth-manifolds`, `def-smooth-vector-field-as-a-tangent-bundle-section`, `def-countable-choice`, `prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure`, `prop-identity-maps-and-composites-of-smooth-maps-are-smooth`, `def-affine-connection-on-a-smooth-manifold`, `def-christoffel-symbols-of-an-affine-connection`, `def-covariant-derivative-along-a-curve`, `def-geodesic-of-an-affine-connection`, `def-real-power`, and `thm-real-power-continuity-and-derivatives`.
- GR kinematics and current calculus: `def-gr-metric-selected-connection`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-gr-metric-volume-form-and-current-flux`, `lem-gr-metric-divergence-and-density-formula`, `lem-gr-metric-volume-form-patching-and-face-normal`, `thm-gr-density-divergence-and-finite-chain-flux`, `def-interior-product-of-a-form-by-a-vector-field`, `def-wedge-product-of-differential-forms`, `def-gr-killing-field`, `prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor`, `thm-gr-killing-and-on-shell-matter-identities`, and `thm-gr-point-normal-and-exponential-coordinate-charts`.
- Matter and physical premises: `def-gr-stress-energy-tensor-field`, `def-gr-si-unit-and-coordinate-conventions`, `def-gr-dust-matter-model`, `def-gr-perfect-fluid-matter-model`, `def-gr-energy-conditions`, `prop-gr-dust-and-perfect-fluid-conservation-equations`, `post-gr-spacetime-and-classical-domain`, `post-gr-field-and-matter-assumptions`, `post-gr-einstein-field-law`, `post-gr-classical-gravitational-action`, `post-gr-ideal-clocks-and-free-fall`, `pthm-gr-adopted-action-and-einstein-equations`, `pthm-gr-einstein-consistency-and-energy-conditions`, `thm-gr-second-bianchi-and-divergence-free-einstein`, `rem-gr-einstein-matter-scope-and-conventions`, and `rem-gr-normal-coordinates-and-local-inertial-frames-scope`.

Reviewed `research/physics-cm-qm-gr-79-2026-10-11-batch-70.proof-contracts.json` against the proof-bearing carriers and `research/physics-cm-qm-gr-79-2026-10-11-batch-70.pages.json` as inventory evidence. The manifest and contracts were not treated as verdicts.

## Review and edits

The observer decomposition, congruence identities, current divergence and finite-chain balance, Killing-current calculation, field-law conservation consequence, perfect-fluid reduction, and flat-space examples follow from their stated hypotheses. The counterexamples establish only the stated model-level claims; none is represented as an observation. The assigned material contains no experimental results or statistical inference.

I repaired the normalization-dependent unit reading of `def-gr-killing-energy-charge`. It previously assigned joules whenever `T` had units of energy density, although the defined charge is proportional to the normalization of the arbitrary timelike Killing field. In length coordinates the formula is `Qξ = ∫ X μ d³x`; `X` has units of length divided by the unit of the Killing flow parameter. Thus `Qξ` has joule units when that parameter is length-valued, and otherwise carries the corresponding scale. The boost example `ex-gr-boost-congruence-energy-balance-in-flat-space` uses `X = sqrt((x¹)² − (x⁰)²)`, while the static example uses `ξ = ∂₀`, `X = 1`; these distinguish the general charge from the length-normalized energy reading. The definition now states both cases.

I carried this qualification into `pthm-gr-local-energy-balance`, `rem-gr-no-universal-global-energy`, `rem-gr-local-and-global-energy-scope-and-deferrals`, `ex-gr-killing-energy-charge-of-a-static-dust`, and the assigned A-page summary. The static-dust example is explicitly identified as length-normalized. I also replaced the assigned scope note's undefined phrase “a general metric has no nonzero Killing field” with the precise statement that the theorem supplies no existence result for a specified metric. The `one` boundary records for `pthm-gr-local-energy-balance`, both scope remarks, and `ex-gr-killing-energy-charge-of-a-static-dust` in the batch proof contracts now record the normalization check. No stale `verification.judge` record was present on the changed items.

## Findings not edited

None. All confirmed defects found in assigned carriers were repaired within the assigned batch. No defect requiring an out-of-scope edit remains.

## Page verdicts

- `gr-local-and-global-energy` (A): pass after the unit-normalization repair. Its summary now distinguishes the conserved Killing charge from its joule-valued energy reading. The field-law and finite-chain hypotheses remain explicit.
- `gr-local-and-global-energy-examples` (B): pass. The examples and counterexamples support the page claims. The static Killing-energy example uses the length-normalized field `ξ = ∂₀`; the boost example asserts conservation of the weighted current, not a measured energy.

## Checks and blocker

- `reflow.mts` and `precheck.mts` were run on all five changed items. The two proof-bearing items passed precheck; the three non-proof carriers reported `0 checked, 0 failing`.
- Final `proof-layout.mjs` run: 5 items, 8 steps, 0 defects.
- The edited proof-contract JSON parses successfully.
- Blocker: none.

Coverage limit: I reviewed the assigned pages and all 17 assigned items, together with the supplier statements and proof portions needed for their uses. I did not audit every transitive prerequisite proof of each outside supplier beyond those relevant statements and uses.
