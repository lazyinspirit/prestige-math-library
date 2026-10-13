# Step 3a reader report — batch 74

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader (`reader-74`)  
Scope: batch `74` only

## Opened inventory

Opened the assigned A page [gr-linearized-waves](../library/general-relativity/gr-linearized-waves.md) and its 12 assigned items, in dependency order:

1. `def-gr-plane-wave-perturbation`
2. `def-gr-wave-screen-and-tt-projection`
3. `lem-gr-null-phase-coordinate`
4. `lem-gr-tt-screen-projector`
5. `lem-gr-plane-wave-gauge-decomposition`
6. `thm-gr-tt-plane-wave-solutions`
7. `thm-gr-tt-plane-wave-curvature`
8. `pthm-gr-linearized-field-equations`
9. `def-gr-linearized-wave-regime-and-detector-coupling`
10. `pthm-gr-plane-wave-polarizations`
11. `pthm-gr-plane-wave-tidal-detector-response`
12. `rem-gr-linearized-wave-scope-and-deferred`

Opened the assigned B page [gr-linearized-waves-examples](../library/general-relativity/gr-linearized-waves-examples.md) and its five items:

- `ex-gr-sinusoidal-tt-plane-wave`
- `ex-gr-tt-screen-projection-computation`
- `ex-gr-plane-wave-regauge-to-tt`
- `cex-gr-subluminal-planar-profile-not-a-vacuum-wave`
- `cex-gr-half-trace-subtraction-on-the-rest-space`

Opened the reached current-run suppliers in dependency order:

- Batch 65, `gr-framework-and-geometry`: `def-gr-smooth-lorentzian-objects`, `def-gr-smooth-covariant-two-tensor-field`, `def-gr-inverse-metric-and-musical-isomorphisms`, `def-gr-si-unit-and-coordinate-conventions`, `def-gr-stress-energy-tensor-field`, `def-gr-metric-selected-connection`, `post-gr-spacetime-and-classical-domain`, `post-gr-field-and-matter-assumptions`.
- Batch 66, `gr-tensors-and-observers`: `def-gr-minkowski-model-and-inertial-chart`, `def-gr-tensor-fields-and-components`, `def-gr-observer-and-rest-space`, `lem-gr-observer-projection-decomposition`.
- Batch 67, `gr-connections-and-free-fall`: `def-gr-timelike-worldline-and-proper-time`, `lem-gr-proper-time-reparametrization-and-four-velocity`, `post-gr-ideal-clocks-and-free-fall`, `pthm-gr-free-fall-worldline-is-determined-by-initial-data`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`.
- Batch 68, `gr-curvature-and-tides`: `def-gr-curvature-tensor-and-derived-tensors`, `def-gr-jacobi-field-and-conjugate-instant`, `thm-gr-curvature-tensoriality-and-coordinate-formula`, `pthm-gr-tidal-comparison`, `thm-gr-jacobi-equation-and-geodesic-deviation`.
- Batch 69, `gr-einstein-and-matter`: `post-gr-classical-gravitational-action`, `post-gr-einstein-field-law`, `pthm-gr-adopted-action-and-einstein-equations`, `lem-gr-lorentzian-perturbations-remain-lorentzian`.
- Batch 71, `gr-flat-linearization`: `def-gr-flat-linearized-perturbation`, `thm-gr-flat-linearized-curvature-and-gauge`, `thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge`.

Also opened the exact published-mathematics statements used in the reviewed facts and computations. Relevant checks included the compact-space convention (`def-compact-space`), uniform continuity on metric compact spaces (`thm-heine-cantor-metric`), Taylor remainder (`cor-taylor-lagrange-and-cauchy-remainders`), derivative and mixed-partial rules (`thm-algebra-of-derivatives`, `thm-clairaut-schwarz-mixed-partials`), finite-dimensional orthogonal projection and rank-nullity results, and the sine/cosine derivative and parity identities (`thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`).

## Source check

Read the relevant derivations in Carroll, *Lecture Notes on General Relativity*, [arXiv:gr-qc/9712019](https://arxiv.org/pdf/gr-qc/9712019), Chapter 6: equations (6.30)–(6.53), PDF pp. 154–157 / printed pp. 148–151, for null plane waves, harmonic gauge, residual gauge freedom and the TT amplitude; equations (6.55)–(6.57), PDF p. 158 / printed p. 152, for the screen projection; and equations (6.58)–(6.62), PDF pp. 158–159 / printed pp. 152, for geodesic deviation and the TT tidal relation. Carroll's complex-amplitude convention is consistent with two independent TT polarization types, each with independent real cosine and sine coefficients. This source supports model calculations only; this batch makes no empirical claim. The archived Tong and Reall PDFs cited in some carriers could not be retrieved through the web reader, so they were not used as evidence.

## Repairs

| Carrier and location | Repair | Evidence and validation |
|---|---|---|
| `thm-gr-tt-plane-wave-solutions`, title, Statement (c), and Remarks | Made the title identify the quadratic Einstein-tensor residual, explicitly kept the estimate mathematical rather than a field-law claim, and restricted the compact-set supremum to nonempty compact sets. The remarks now identify exact vacuum residuals with the zero-source, zero-cosmological-constant branch. | The former formulation admitted an undefined supremum over an empty compact set and blurred a mathematical estimate with the physical field law. Nonempty compactness makes the stated real suprema defined; the branch qualification is explicit in the postulates and field-law consequence. Proof contract updated. Reflow and precheck passed. |
| `pthm-gr-linearized-field-equations`, dependencies, Statement (d), Given, and `physical_scope` | Removed `post-gr-classical-gravitational-action` as a second physical assumption while retaining `pthm-gr-adopted-action-and-einstein-equations` for the alternative-presentation remark. Required nonempty compact sets for the residual estimate and stated that its exact residual interpretation is the source-free, zero-cosmological-constant branch. | The action route is presented as an alternative derivation, not an assumption to impose simultaneously with the adopted field law. The compact-set estimate now has defined real suprema and its physical branch is explicit. Proof contract updated. Reflow and precheck passed. |
| `pthm-gr-plane-wave-polarizations`, title, Statement, proof, and `physical_scope` | Clarified that the quotient is two-dimensional for one real cosine or sine coefficient; the full real amplitude quotient is two copies, hence four real coefficients. Defined the curvature-component function space and map, and established injectivity by evaluating at phases (0) and (pi/2). The residual estimate now uses nonempty compact sets. | The prior statement conflated the quotient for one phase coefficient with the full real amplitude pair and did not specify the curvature map's codomain. The revised statement and proof preserve independent cosine and sine coefficients. Proof contract updated. Reflow and precheck passed. |
| `pthm-gr-plane-wave-tidal-detector-response`, residual statement and `physical_scope` | Specified the source-free, zero-cosmological-constant branch and nonempty compact sets for the residual estimate. | This carries the field-law hypotheses and the real-supremum domain into the detector-response conclusion. Proof contract updated. Reflow and precheck passed. |
| `ex-gr-sinusoidal-tt-plane-wave`, residual claim, Facts, and scope | Made the residual explicitly source-free with Lambda = 0, and restricted its compact set to be nonempty. | The example's exact-residual deduction now states the adopted branch and has a defined compact-set bound. Proof contract updated. Reflow and precheck passed. |
| `cex-gr-subluminal-planar-profile-not-a-vacuum-wave`, Facts, dependencies, and proof | Replaced the unbounded profile f(s) = s^2 with the bounded smooth profile f(s) = cos(s). Added the sine/cosine derivative and parity suppliers. Established the admissible flat linearized family and computed Box f(U) = -3/4 cos(U), hence G^(1)_11 = 3/8 cos(U) != 0 where U = 0. | Boundedness makes the perturbation satisfy the assigned linearized-family definition; the derivative calculation gives a pointwise nonzero residual while retaining the subluminal planar phase. Proof contract updated. Reflow and precheck passed. |
| `rem-gr-linearized-wave-scope-and-deferred`, residual and polarization remarks | Specified the source-free, zero-cosmological-constant branch and nonempty compact sets for the residual statement; changed “two polarizations” to “two polarization types” to match the coefficient-wise quotient definition. | This avoids implying that the full real cosine/sine amplitude pair has only two real coefficients. Reflow and precheck passed; no proof-bearing steps are present. |
| A page `gr-linearized-waves`, summary | Updated the summary to state the two-dimensional quotient per real phase coefficient, its two copies/four real cosine-sine coefficients, and the source-free, zero-cosmological-constant residual branch on nonempty compact sets. | The revised summary matches the repaired item statements and preserves their model qualifications. |

The affected proof-contract entries in `research/physics-cm-qm-gr-79-2026-10-11-batch-74.proof-contracts.json` were refreshed for changed statements, derivation claims and dependency facts. No stale `verification.judge` record was present on a changed item. Reflow and precheck were run on all seven changed items; the six proof-bearing items passed, and the remark reported zero proof-bearing items and zero failures. After the final item edits and reflow, one batched proof-layout command over all seven changed item paths reported **7 items, 29 steps, 0 defects**.

## Uneditable finding

`thm-gr-flat-linearized-curvature-and-gauge` is a batch 71 supplier and is outside this assignment's edit scope. In Statement (f), the universal quantifier is over every compact set K ⊆ Ω, and B_K(A) is then defined using three real suprema over K. The published `def-compact-space` explicitly declares the empty space compact. Thus K = ∅ is admitted, but the statement supplies no convention making these real suprema defined. The displayed B_K(A) is therefore undefined for an admitted case, so clause (f) is ill-formed as written. The finding is routed through assigned consumer `pthm-gr-linearized-field-equations`, whose dependency closure includes this supplier. The supplier's current-source SHA-256 is `90b57c121b1930684c2a1a901b721e57b113ed66425903994e6eecf484f78685`.

## Page verdicts

- **`gr-linearized-waves` — pass after the listed repairs, with the routed batch 71 supplier finding noted above.** Definitions, gauge and TT computations, linearized equations, polarization count and physical scope now agree. No observation or statistical inference is claimed.
- **`gr-linearized-waves-examples` — pass after the listed repair.** The examples and counterexamples are conditional calculations from their stated definitions and hypotheses; the subluminal profile counterexample now uses an admissible bounded perturbation.

## Blocker and coverage limits

No operational blocker remains. The batch 71 supplier finding cannot be repaired in this reader scope and is included in the findings JSON. The archived Tong and Reall PDFs were not retrievable through the web reader. Relevant published mathematical statements were inspected, but I did not independently reopen and audit the full proof of every transitive published mathematical supplier; this limitation is reflected in `coverage_note`. The report records only sources and checks actually used.
