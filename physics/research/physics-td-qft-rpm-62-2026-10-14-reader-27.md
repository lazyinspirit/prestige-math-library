# Step 3a reader report — batch 27

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader (`reader-27`)  
Scope: batch `27`

## Verdicts

- **`rpm-spin-finite-size` (A page): hold.** Its summary accurately separates the adopted BMT/MPD models, mathematical estimates, and conditional physical deductions. I repaired assigned definitions and claims below. The BMT postulate dependency still writes a derivative of a vector defined only along a curve without supplying its definition. The indirect spacetime/worldline dependency also contains a false regularity description. The final proof-layout command could not load the renderer.
- **`rpm-spin-finite-size-examples` (B page): hold.** Its summary correctly says the cases are model assumptions, not measurements, and keeps polarization distinct from body angular momentum. The BMT examples inherit the unresolved BMT postulate dependency. The final proof-layout command could not load the renderer.

## Opened inventory

Assigned pages opened:

- `library/relativistic-particle-mechanics/rpm-spin-finite-size.md`
- `library/relativistic-particle-mechanics/rpm-spin-finite-size-examples.md`

All 17 assigned item carriers opened, in dependency order:

- Mathematical suppliers: `lem-rpm-bmt-transport-algebra`, `lem-rpm-body-spin-size-bound`, `lem-rpm-charge-multipole-remainder`, `lem-rpm-flat-centroid-shift`, `lem-rpm-ssc-momentum-identity`, `lem-rpm-td-local-closure`.
- Definition and adopted model: `def-rpm-body-moments`, `post-rpm-mpd-truncation`.
- Physical deductions: `pthm-rpm-bmt-constraints`, `pthm-rpm-spherical-charge-size-bound`, `pthm-rpm-hidden-momentum`, `pthm-rpm-rest-spin-and-size-bound`, `pthm-rpm-td-invariants`.
- Examples: `ex-rpm-bmt-fw-and-g-two`, `ex-rpm-fixed-versus-scaled-charge`, `ex-rpm-rest-spin-and-size-bound`, `ex-rpm-spinless-td`.

Relevant prerequisite pages opened: `cm-math-dynamics`, `em-electrostatics-in-vacuum`, `gr-gr13-convex-normal-neighborhoods`, `rpm-external-charge`, and `sr-accelerated-observers`.

The exact definitions/statements needed for the assigned arguments were opened for the following published mathematics suppliers: `def-countable-choice`, `def-covariant-derivative-along-a-curve`, `def-cross-product-in-r3`, `def-euclidean-inner-product`, `def-gr-curvature-tensor-and-derived-tensors`, `def-gr-metric-selected-connection`, `def-gr-observer-and-rest-space`, `def-gr-smooth-lorentzian-objects`, `def-gr-timelike-worldline-and-proper-time`, `def-inertial-frame-and-inertial-chart`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-l-one-of-a-measure`, `def-sr-affine-minkowski-model`, `lem-gr-future-causal-classification-by-a-timelike-field`, `lem-gr-observer-pairing-with-future-causal-vectors`, `lem-gr-observer-projection-decomposition`, `lem-gr-parallel-transport-and-geodesic-speed`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-algebra-of-derivatives`, `thm-bolzano-weierstrass`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-chain-rule`, `thm-chain-rule-for-total-derivatives`, `thm-clairaut-schwarz-mixed-partials`, `thm-continuous-implies-integrable`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-extreme-value-metric`, `thm-ftc-second-part`, `thm-gr-compact-metric-and-timelike-curve-variation`, `thm-gr-curvature-algebraic-symmetries`, `thm-gr-local-geodesics-and-exponential-map`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `thm-heine-borel-rn`, `thm-integration-by-parts`, `thm-integral-triangle-inequality`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-monotonicity-of-the-integral`, `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-real-power-continuity-and-derivatives`, `thm-sr-proper-orthochronous-lorentz-algebra`, `thm-sr-proper-time-and-observer-decomposition`, `thm-sr-stress-balance-and-finite-flux`, and `thm-monotone-convergence-for-the-integral`. I also opened the exact ODE, cutoff, flat particle-variation, and integral-calculus supplier statements used by the current batch-24 action-variation chain: `lem-em-particle-curve-variation`, `lem-test-function-cutoffs-and-euclidean-localization`, `lem-of-inverse-positive`, `lem-of-naturals-positive`, `cor-archimedean-reciprocal`, `cor-cauchy-reals-lub-complete`, `def-real-numbers`, and `thm-additivity-over-subintervals`.

Additional EM and action-equivalence suppliers opened: `def-em-electromagnetic-tensor`, `def-em-si-conventions`, `def-em-vacuum-energy-flux`, `pthm-em-coulomb-solution`, `pthm-em-point-self-energy-divergence`, `thm-ftc-first-part`, `thm-algebra-of-continuous-functions`, and `thm-composition-of-continuous-functions`.

Current batch-24 dependency carriers opened and checked against their consumers: `def-rpm-charge-spin-model`, `def-rpm-spacetime-observer-and-worldline`, `lem-rpm-charge-gauge-boundary`, `lem-rpm-curved-charge-action-variation`, `post-rpm-bmt-dipole-model`, `post-rpm-external-charge-action`, and `pthm-rpm-external-charge-action-equivalence`. I also reviewed the outside batch-30 consumer `rem-rpm-self-force-status` because the body-moments definition is used in its dependency closure.

I inspected all 16 proof-bearing item contract mappings in `research/physics-td-qft-rpm-62-2026-10-14-batch-27.proof-contracts.json`, comparing their derivation IDs, step numbers, and cited suppliers with the current carriers. Author risk notes were treated as context, not as review verdicts.

## Repairs made

- **`lem-rpm-bmt-transport-algebra`:** replaced the ill-formed `D_\tau z` with `U=dz/d\tau`, stated the proper-time interval and C1 spin-field domain, and gave the pullback-connection definition plus its chart formula for `D_\tau`. The coefficient-comparison target `G` and the ranges of the spatial vectors are now quantified. Its contract now matches the pointwise projected derivative at a fixed event; the stale moving-rest-frame description, citation excerpt for metric compatibility, and obsolete step reference were corrected.
- **`lem-rpm-ssc-momentum-identity`:** replaced `U=D_\tau z` with `U=dz/d\tau` and stated its open proper-time interval explicitly. Its existing contract already cites the exact worldline and pullback-derivative suppliers.
- **`lem-rpm-flat-centroid-shift`:** introduced the representative event as `z∈A`, defined the exterior product on displacement vectors, and expressed total angular momentum about the inertial-frame origin as `J_o=(z-o)∧p+S`. This removes the undefined exterior product of an affine point. Its contract now uses the corrected affine displacement identity.
- **`def-rpm-body-moments`:** separated the curve `\zeta` from the local event `z`; made the inertial coordinate-time parameter explicit; defined spatial support on time slices and compact support on every finite time slab; defined the hypersurface volume density in local parametrizations; and stated the Lebesgue measure and stress-energy units. The batch-30 self-force remark was checked and still accurately treats these as finite-body definitions with no slice-independence or point-limit claim.
- **`post-rpm-mpd-truncation`:** defined `D_\tau` as a pullback covariant derivative with component formulas, specified its open proper-time interval, and defined optional multipole state bundles, admissible domains, smooth force/torque maps, and their units. The postulate contract's formulation evidence was updated.
- **`pthm-rpm-spherical-charge-size-bound`:** replaced the undefined enclosing radius with the exact support radius `max_{x∈supp_0 T}|x|`, clarified that the Coulomb exterior is an independent assumption, and changed the title/scope to “Coulomb-exterior support-radius energy bound.” The A-page summary and fixed-versus-scaled example now use that precise name. The relevant contract title references were updated.
- **`pthm-rpm-rest-spin-and-size-bound`:** corrected the strict disk claim at zero spin: if `s_*≠0`, shifts lie in the open disk; if `s_*=0`, the only shift is zero. Reworded the Lorentz statement to say the scalar mass, support radius, spin magnitude, and disk radius are invariant while spatial vector components transform with the rest-space basis. Its contract now records the zero-spin branch and scalar/vector distinction.
- **`ex-rpm-bmt-fw-and-g-two`:** defined Fermi–Walker transport before using the term, and replaced the inaccurate “skew-adjointness from [F1]” citation with the metric-symmetry identity actually used. Its contract was updated.
- **`lem-rpm-charge-multipole-remainder`:** specified that `d^3y` and its `L^1` space use three-dimensional Lebesgue measure.

The affected consumer contracts were refreshed with current source-section snapshots for changed BMT, SSC, centroid, body-moment, MPD, and support-radius supplier statements (15 citation rows). No stale `verification.judge` records were present in the changed items.

The mathematical/physical prose changes were reviewed against all assigned direct and indirect consumers; the page summaries were also checked. No empirical observation is asserted in these pages: the physical results remain conditional on their stated model assumptions.

## Evidence and source checks

- Bargmann–Michel–Telegdi, *Precession of the Polarization of Particles Moving in a Homogeneous Electromagnetic Field*, author-hosted 1959 PDF, pp. 1–2, especially the rest-frame torque and covariant equation (7). The paper uses its own signature/unit conventions and only treats homogeneous flat fields; the curved/varying-field extension remains an adopted postulate.
- University of Virginia, “Relativistic Spin Precession: the BMT Equation,” lines 111–166 of the author-hosted lecture: the covariant spin equation and coefficient match. The PSI Zürich frozen-spin lecture, pp. 6–7, gives the curved Fermi–Walker derivative and a separate EDM term; the local model discloses its convention conversion.
- Costa and Natário, arXiv:1410.6443v2, §2 equation (13) for the dominant-energy-condition spin-size estimate and §3 equations (14)–(16) for the pole-dipole/SSC momentum–velocity identity. The assigned proofs state their own signs, SI factors, and hypotheses.
- Likharev, *Essential Graduate Physics: Classical Electrodynamics*, §1.3 equations (1.34)–(1.35), (1.65)–(1.68): point-charge field, field-energy density, and uniform-sphere energy context. The assigned Coulomb-exterior estimate is proved locally by shell exhaustion.
- CMU 21-269, “Riemann integrals in one dimension,” Theorems 17–18: the FTC used in the local Taylor-remainder proof. That source does not state the full Taylor estimate; the item proves the remainder directly.
- Poisson, Pound, and Vega, arXiv:1102.0529v3, §18.1 equations (18.3)–(18.7), pp. 96–97: coupled field-particle action, reparameterization invariance, and formal point-charge equation, with the singular self-field limitation. The current batch-24 references now use this section.
- Tong’s author-hosted GR Chapter 1 HTML was readable and checked for the relativistic action and proper-time/geodesic material. The linked `gr1.pdf` endpoint itself returned an internal retrieval error in the browser, and the HTML states the opposite interaction sign for equation (1.21); current batch-24 notes disclose that difference and supply their own sign derivation. Teschl, *Ordinary Differential Equations and Dynamical Systems*, Theorem 2.2, supports local existence and uniqueness for the smooth finite-dimensional state equation.

At the beginning of review, four batch-24 Poisson–Pound–Vega references used the incorrect locator `§5.2.1` (the arXiv v3 contents identify §5.2 as the parallel propagator). While I was reviewing, another writer corrected those current carriers to PDF §18.1, equations (18.3)–(18.7). I observed the old locator text, but its raw bytes were not retained or matched to an immutable snapshot, so the historical findings below have `observed_source: null`; I do not attribute the corrected current bytes to the earlier observation.

## Uneditable findings and blockers

The current batch-24 dependencies still contain two defects. Four source-locator defects observed earlier were corrected by another writer before split, but their old bytes could not be bound; these historical claims are retained in the findings JSON with null `observed_source`.

The required final command, `node tools/physics-support/proof-layout.mjs` over the ten changed item paths, failed before checking rows. The renderer could not import `@/components` from `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx` (`ERR_MODULE_NOT_FOUND`). Reflow and precheck completed successfully for all ten changed items; this does not replace proof-layout.

