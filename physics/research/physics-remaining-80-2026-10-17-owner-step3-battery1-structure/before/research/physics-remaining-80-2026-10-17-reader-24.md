# Step 3a reader report — batch 24

Run: `physics-remaining-80-2026-10-17`  
Role: independent read-only reviewer, with repairs limited to the assigned in-flight items and assigned A-page prose.  
Scope: batch 24 only.

## Opened inventory

Assigned pages:

- `library/einstein-maxwell-models/emg-s01.md` — A-page.
- `library/einstein-maxwell-models/emg-s01-examples.md` — B-page.

Assigned items, all opened:

- `def-emg-xs-si-parameters`
- `pthm-emg-xs-rn-model`
- `pthm-emg-xs-kn-model`
- `pthm-emg-xs-dyonic-model`
- `pthm-emg-xs-static-redshift`
- `pthm-emg-xs-rn-horizons`
- `pthm-emg-xs-kn-horizons`
- `texp-emg-xs-photon-radius`
- `texp-emg-xs-rotating-ergoregion`

Dependencies opened in the relevant statements and proof sections, suppliers before their consumers:

- Geometry and electromagnetism: `def-smooth-manifold`, `def-smooth-differential-k-form`, `def-gr-smooth-lorentzian-objects`, `thm-local-coordinate-formula-for-the-exterior-derivative`, `def-emg-lorentzian-forms`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-observer-field-decomposition`, `def-em-electromagnetic-tensor`, `def-em-si-conventions`, `post-em-minkowski-physical-model`, `def-emg-geometry-units`, `def-emg-xs-geometric-electrovac`, `post-emg-covariant-maxwell`, and `post-emg-einstein-maxwell-equations`.
- RN/KN data and verification: `def-countable-choice`, `def-euclidean-spheres-and-closed-balls`, `ex-the-round-metric-on-the-sphere-as-an-induced-metric`, `thm-stokes-theorem-for-smooth-singular-chains`, `def-emg-xs-rn-data`, `def-emg-xs-kn-data`, `def-emg-xs-kn-full-sphere-exterior`, `lem-emg-maxwell-current-forms`, `def-gr-metric-volume-form-and-current-flux`, `thm-gr-density-divergence-and-finite-chain-flux`, `lem-emg-xs-rn-tensor-identities`, `lem-gr-warped-spherical-christoffel-and-ricci`, `lem-emg-maxwell-observer-stress`, `thm-emg-xs-rn-verification`, `alg-emg-rational-electrovac-verification`, `lem-emg-rational-electrovac-verification-correctness`, `lem-emg-rational-electrovac-verification-termination-resources`, `lem-emg-xs-kn-rational-calculus`, `thm-emg-xs-kn-verification`, `lem-emg-xs-duality`, and `prop-emg-xs-rn-local-gauges`.
- Clocks, connections and causal conventions: `def-gr-si-unit-and-coordinate-conventions`, `post-gr-ideal-clocks-and-free-fall`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-gr-metric-selected-connection`, `def-gr-inverse-metric-and-musical-isomorphisms`, `def-geodesic-of-an-affine-connection`, `thm-clairaut-schwarz-mixed-partials`, `def-gr-killing-field`, `thm-gr-killing-and-on-shell-matter-identities`, `lem-gr-future-causal-classification-by-a-timelike-field`, `def-gr-timelike-worldline-and-proper-time`, `lem-gr-inverse-metric-is-smooth`, `def-time-orientation-and-future-causal-sets`, and `def-causal-classification-of-lorentz-vectors`.
- Horizon and escape inputs: `def-emg-causal-solution-and-horizon-vocabulary`, `def-emg-xs-ingoing-rn`, `thm-emg-xs-rn-crossing`, `lem-emg-xs-null-barrier`, `thm-emg-xs-rn-escape`, `thm-emg-xs-kn-extension`, `prop-emg-xs-kn-horizon-data`, `prop-emg-xs-kn-ergoregion`, and `thm-emg-xs-kn-escape`.

The direct claims used from these dependencies were checked against their current item text. The two in-run suppliers listed in “Unedited findings” below are assigned outside batch 24.

## Review and repairs

- `pthm-emg-xs-rn-model`, Proof 3.1: replaced the unsupported appeal to metric compatibility for `∇vol_g=0` with a coordinate derivation from `w=√|det g|`, determinant differentiation and the Christoffel trace. The remaining Hodge-divergence computation is unchanged. This follows directly from the Levi-Civita formula and the stated Hodge convention.
- `pthm-emg-xs-kn-model`, Proof 3.1: made the same volume-form calculation explicit on each stated smooth domain before deriving the Hodge-divergence identity.
- `pthm-emg-xs-dyonic-model`, Proof 2.1: made the same volume-form calculation explicit before using the pointwise identity relating `d(⋆F)` to `∇_a F^{ab}`.
- `pthm-emg-xs-rn-horizons`, Facts [F4] and Proof 2.5: replaced an unsupported sign inference from pairing with future null vectors by the actual product decomposition `Z=αℓ+βn+W`. The proof now derives `αβ≥0` from causality, identifies the positive timelike branch using `N=ℓ+n`, and obtains `α,β≥0` for the future cone by closure. The cited ingoing-RN orientation and causal-classification statements support these steps.
- `pthm-emg-xs-static-redshift`, Statement and Proof 1.1: specified open domains and regularity for the ray and static observer curves, their relation to the phase tangent and proper-time normalization, and how the emitter and receiver events are intersections with those curves. Proof 1.1 derives `dτ/ds=√f/c` and `U=dσ/dτ`. During this repair, I found that Proof 1.2 also requires the eikonal equation off the ray; the Statement now assumes `g^{-1}(dθ,dθ)=0` on the open phase domain `W`, making the gradient-geodesic calculation valid.
- `pthm-emg-xs-kn-horizons`, Statement and Proof 3.1: replaced vague “spatial infinity” language with the fixed-`(v,ω)`, `r→+∞` limit of the two coefficient functions of the displayed global one-form, and proved the limit from `Σ≥r²`.

No edits were needed in `def-emg-xs-si-parameters`, `texp-emg-xs-photon-radius`, or `texp-emg-xs-rotating-ergoregion`; their reviewed definitions, constructions and model qualifications were adequate for their stated scope.

After these changes, the corresponding entries in `research/physics-remaining-80-2026-10-17-batch-24.proof-contracts.json` were updated. No changed item had a `verification.judge` record to remove. The A-page and B-page prose were not edited.

## Unedited findings

1. `thm-emg-xs-rn-escape` (batch 22), Proof 1.2: the factorization uses `r_+` and `r_-`, while its Statement defines only `r_H=M+√(M²−Q²)` and the item does not introduce the two symbols elsewhere. The intended outer/inner roots follow immediately from factoring the quadratic, so this is a nonfatal ill-formed-notation omission. Its assigned consumer in this batch is `pthm-emg-xs-rn-horizons`.

2. `thm-emg-xs-kn-verification` (batch 21), Facts [F3] and Proof 1.2: [F3] attributes `∇_i 𝓕^{ij}=Σ^{-1}∂_i(Σ𝓕^{ij})` to the vector-density divergence formula in `thm-gr-density-divergence-and-finite-chain-flux`. That theorem states the formula for a vector field, not an antisymmetric 2-tensor. The identity is correct, but needs its short local derivation: expand `∇_i𝓕^{ij}`, use symmetry of `Γ^j_{ik}` against antisymmetry of `𝓕^{ik}`, and use `Γ^i_{ik}=∂_k log Σ` in the stated chart. This is a nonfatal citation-inaccuracy / omitted derivation. Its assigned consumer in this batch is `pthm-emg-xs-kn-model`.

Both are in-run dependencies, not assigned batch-24 items, and were left unchanged. At review time their observed item hashes were respectively `5ea07d3caa5c73c514dbea16a1ef127df91468667a0784d50a8a53d1421d8b5a` and `f470b4a021a02dded167dc37cc64fd6465a692a86d4baef2aa5828826f2d2c5f`.

## Page verdicts

- `emg-s01` (`library/einstein-maxwell-models/emg-s01.md`): pass. The page summary accurately describes the parameter and solution-model scope, including the conditional status of the equations. It does not convert the model into an empirical claim.
- `emg-s01-examples` (`library/einstein-maxwell-models/emg-s01-examples.md`): pass. The examples distinguish conditional deductions from observations and do not claim measured confirmation or fabricated statistical precision.

## Source and evidence checks

- The official BIPM *SI Brochure*, 9th edition, version 4.01 (2026 update), §2.2 and §2.3.1 (the item metadata locates these at printed/PDF pp. 124–129), supports the exact status of `c`, the exact relation `ε₀μ₀=1/c²`, and the experimentally determined status of `μ₀`. These distinctions agree with the parameter map; no measured value of `μ₀` is used as an exact premise.
- Carroll, *Lecture Notes on General Relativity*, arXiv:gr-qc/9712019, Ch. 7, equations (7.106)–(7.116), and Adamo–Newman, *The Kerr-Newman Metric: A Review*, arXiv:1410.6626v2, §§2.1–2.2, were checked for the RN/KN seed conventions and formulas. Their conventions differ from the local SI presentation; the assigned items explicitly state their own normalization and make only conditional model claims.
- The exact rational batch-21 finite-check JSON and its Python script were inspected as supplementary evidence for the finite tensor residuals. They are not an execution proof of the separately defined rational algorithm, nor an audit of SymPy; the local mathematical claims remain conditional on the explicitly stated draft suppliers. I did not independently reproduce every KN Ricci contraction by hand.
- No assigned item reports an experiment or uses measured input data. The examples and pages remain model-based and statistical claims are not presented as observations.

## Validation and blockers

For each of the six repaired items, `reflow.mts` reported unchanged and `precheck.mts` passed: `pthm-emg-xs-rn-model`, `pthm-emg-xs-kn-model`, `pthm-emg-xs-dyonic-model`, `pthm-emg-xs-rn-horizons`, `pthm-emg-xs-static-redshift`, and `pthm-emg-xs-kn-horizons`. The required single batched layout run completed with `proof-layout: 6 items, 33 steps, 0 defects`.

No blocker remains for batch 24. The remaining limitations are the two unedited cross-batch findings above and the lack of a hand reproduction of the large KN contraction table.
