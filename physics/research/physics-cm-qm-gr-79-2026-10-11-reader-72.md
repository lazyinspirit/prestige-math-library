# Step 3a reader report — batch 72

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: independent reader (`reader-72`)

## Scope and opened inventory

Assigned pages opened:

- `gr-spherical-vacuum-model` — [library/general-relativity/gr-spherical-vacuum-model.md](../library/general-relativity/gr-spherical-vacuum-model.md)
- `gr-spherical-vacuum-model-examples` — [library/general-relativity/gr-spherical-vacuum-model-examples.md](../library/general-relativity/gr-spherical-vacuum-model-examples.md)

All 27 assigned items were opened from `items/` and reviewed in manifest dependency-level order:

1. `def-gr-schwarzschild-exterior-model`
2. `lem-gr-schwarzschild-metric-properties`
3. `def-gr-kruskal-model-data`
4. `lem-gr-schwarzschild-christoffel-symbols`
5. `lem-gr-schwarzschild-isotropic-coordinate-form`
6. `lem-gr-schwarzschild-static-congruence-and-clock-rates`
7. `ex-gr-schwarzschild-isotropic-weak-field-comparison`
8. `lem-gr-schwarzschild-timelike-geodesic-reduction`
9. `ex-gr-schwarzschild-static-clock-ratio-explicit`
10. `lem-gr-schwarzschild-circular-orbits-and-photon-sphere`
11. `lem-gr-warped-spherical-christoffel-and-ricci`
12. `lem-gr-schwarzschild-ricci-and-einstein-tensors`
13. `lem-gr-warped-base-vacuum-reduction`
14. `ex-gr-schwarzschild-circular-orbit-thresholds-explicit`
15. `lem-gr-schwarzschild-curvature-and-kretschmann-scalar`
16. `thm-gr-local-birkhoff-warped-product`
17. `lem-gr-schwarzschild-extension-chart`
18. `pthm-gr-schwarzschild-vacuum-model`
19. `lem-gr-kruskal-model-properties`
20. `pthm-gr-schwarzschild-stationary-redshift`
21. `pthm-gr-schwarzschild-circular-orbit-predictions`
22. `ex-gr-schwarzschild-extension-horizon-data`
23. `cex-gr-exterior-charts-do-not-cover-the-extension`
24. `lem-gr-kruskal-causal-escape-and-trapping`
25. `rem-gr-schwarzschild-horizon-and-singularity`
26. `ex-gr-kruskal-cone-and-radial-values`
27. `rem-gr-schwarzschild-scope-and-limits`

Supplier items opened where their statements or conventions were needed include:
`def-lorentz-form-and-inertia`, `def-gr-smooth-lorentzian-objects`,
`def-causal-classification-of-lorentz-vectors`,
`def-time-orientation-and-future-causal-sets`,
`def-gr-curvature-tensor-and-derived-tensors`,
`thm-gr-curvature-tensoriality-and-coordinate-formula`,
`thm-gr-curvature-algebraic-symmetries`,
`def-gr-metric-selected-connection`,
`thm-gr-nondegenerate-levi-civita-and-tensor-derivative`,
`def-geodesic-of-an-affine-connection`,
`prop-coordinate-geodesic-equation`,
`thm-gr-local-geodesics-and-exponential-map`,
`thm-picard-lindelof-local-existence-and-uniqueness`,
`def-gr-observer-and-rest-space`,
`def-gr-observer-congruence-and-adapted-charts`,
`def-gr-timelike-worldline-and-proper-time`,
`lem-gr-proper-time-reparametrization-and-four-velocity`,
`def-gr-observer-relative-energy-and-momentum`,
`lem-gr-observer-pairing-with-future-causal-vectors`,
`def-gr-killing-field`, `thm-gr-killing-and-on-shell-matter-identities`,
`post-gr-spacetime-and-classical-domain`,
`post-gr-field-and-matter-assumptions`, `post-gr-einstein-field-law`,
`post-gr-ideal-clocks-and-free-fall`,
`pthm-gr-einstein-consistency-and-energy-conditions`,
`pthm-gr-free-fall-worldline-is-determined-by-initial-data`,
`def-gr-si-unit-and-coordinate-conventions`,
`def-gr-stationary-weak-field-data`,
`def-gr-newtonian-comparison-model-and-identification`,
`ex-the-round-metric-on-the-sphere-as-an-induced-metric`,
`def-euclidean-spheres-and-closed-balls`,
`def-laplacian-of-a-c2-function`,
`def-real-exponential-function-and-e`, and `def-natural-logarithm`.
I also read the two upstream page summaries `gr-flat-and-newtonian-bridges` and
`gr-local-and-global-energy` for context.

The required role and content instructions were read: `../CLAUDE.md`,
`CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, and `briefs/reader.md`. I used
`research/physics-cm-qm-gr-79-2026-10-11-batch-72.pages.json` as the inventory,
not as an independent verdict.

## Repairs

- `cex-gr-exterior-charts-do-not-cover-the-extension`, Statement and Counterexample:
  changed the inertia at the regular horizon point from `(1,3,0)` to `(3,1,0)`.
  The exact convention is `(positive, negative, zero)` in
  `def-lorentz-form-and-inertia`; `def-gr-smooth-lorentzian-objects` gives the
  Schwarzschild signature as `(3,1,0)`. The extension's null base block has one
  positive and one negative eigenvalue and its round-sphere block is positive,
  so `(3,1,0)` follows directly.
- `lem-gr-schwarzschild-circular-orbits-and-photon-sphere`, Statement (b),
  Facts & Assumptions, and Proof 2.2; and its assigned consumer
  `pthm-gr-schwarzschild-circular-orbit-predictions`, Statement (b), Fact L1,
  and Proof 1.2: the original necessity proof only covered equatorial
  geodesics, while the conclusion excluded every circular timelike geodesic.
  I defined a circular timelike geodesic by constant areal radius and proved
  the unrestricted conclusion in an arbitrary sphere chart. For constant
  `r`, the radial equation gives
  `gamma_ij xi_dot^i xi_dot^j = f' (x0_dot)^2/(2r)`; timelike normalization
  then gives `c^2 = (f - r f'/2) (x0_dot)^2`. Since `x0_dot` cannot vanish,
  `f - r f'/2 = 1 - 3s/(2r)` must be positive, proving `r > 3s/2` for any
  angular orientation. The equatorial angular-momentum formula remains stated
  only in the equatorial case. I reviewed the other assigned direct consumers,
  `pthm-gr-schwarzschild-vacuum-model` and
  `ex-gr-schwarzschild-circular-orbit-thresholds-explicit`; their claims still
  follow from the revised result. The physics theorem now states that the
  geodesic uses proper time, matching the adopted free-fall rule.
- `lem-gr-schwarzschild-timelike-geodesic-reduction`, Remarks: replaced the
  vague claim that both constants were “up to the factor c” with the exact
  coordinate formulas and units. With `x0=ct` in metres and proper time in
  seconds, `e=f dx0/dtau` has units m/s, and on an equatorial geodesic
  `ell=r^2 dphi/dtau` has units m^2/s.

Updated the batch-72 and run-level proof contracts for the changed proof
claims, the new arbitrary-orientation radial computation, and the current
source statement used by its assigned consumers. None of the four edited items
had a `verification.judge` record to remove.

## Validation

For each changed item, reflow and precheck were run. All four prechecks passed.
The final combined proof-layout check covered all four edited items and reported
`4 items, 19 steps, 0 defects`.

## Uneditable findings

None. No assigned page prose, published supplier, or imported mathematical source was changed. No empirical
observation or measurement is reported by either assigned page; the physical
claims reviewed are conditional model deductions.

## Page verdicts

- `gr-spherical-vacuum-model`: pass after the stated item repairs. Its model
  assumptions, mathematical deductions, restricted predictions, horizon
  discussion, and non-empirical scope are consistent with the reviewed items.
- `gr-spherical-vacuum-model-examples`: pass after the corrected inertia entry.
  The worked values and counterexample are supported by the supplied formulas;
  the `1 m` Kruskal scale is identified as an exact model normalization, not a
  measurement.

## Coverage note and blocker

No blocker remains for this batch review. I did not inspect every transitive
mathematical import or every upstream prerequisite page prose; I opened the
item-level suppliers needed for the claims above and checked the assigned page
summaries against those items. Carroll's and Townsend's cited PDFs were
retrieved and checked at the Schwarzschild metric, Kretschmann scalar, radial
potential, and Kruskal locators: Carroll, *Lecture Notes on General
Relativity*, Eqs. (7.29)-(7.30), (7.47)-(7.48), and (7.77), printed pp.
170-175 and 186-187, [arXiv:gr-qc/9712019](https://arxiv.org/pdf/gr-qc/9712019);
Townsend, *Black Holes*, Eqs. (2.32) and (2.56)-(2.57), printed pp. 15 and
20-21, [arXiv:gr-qc/9707012](https://arxiv.org/pdf/gr-qc/9707012). The Tong
PDF endpoints cited by the items returned HTTP 502 during this review, so those
particular locators were not independently checked. The local computations
were checked directly and do not rely on the inaccessible excerpts.
