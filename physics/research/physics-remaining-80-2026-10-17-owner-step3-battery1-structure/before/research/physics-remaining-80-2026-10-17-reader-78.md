# Step 3a reader report — batch 78

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `78` only

## Opened inventory

**Pages**

- `library/thermodynamics-and-general-relativity/tgr-phs02.md` (`tgr-phs02`, A page): read the complete page and summary.
- `library/thermodynamics-and-general-relativity/tgr-phs02-examples.md` (`tgr-phs02-examples`, B page): read the complete page, summary, and TikZ sketch. The diagram is illustrative and is not used as proof.

**Assigned items, read in supplier order**

- `post-tgr-exponential-current-and-spectral-thermometer` — adopted two-branch model postulate.
- `pthm-tgr-reduced-horizon-temperature` — reduced-branch rate-model deduction and optional stationary-bath clause.
- `pthm-tgr-free-vacuum-acceleration-temperature` — acceleration-branch rate-model result, switched-coefficient estimate, and conditional Rindler comparison.
- `texp-tgr-two-accelerations` — two-orbit model comparison.

**Claim suppliers and relevant dependency context opened**

- QFT/model suppliers: `post-qft-free-field-model`, `post-qft-constructed-model-and-measurement`, `def-qft-scalar-mass-shell`, `def-qft-fock-and-test-spaces`, `lem-qft-fock-ccr-car`, `lem-qft-smeared-free-scalar`, `lem-qft-segal-weyl-domain`, and `lem-qft-mass-shell-test-range-dense`.
- TGR/QFT mathematical suppliers: `def-tgr-framework-units`, `lem-tgr-exponential-current`, `lem-tgr-positive-damping-boundary`, `lem-tgr-thermal-contour-spectrum`, `lem-tgr-timelike-scalar-acceleration`, `lem-tgr-spectral-thermometer`, `def-tgr-stationary-thermal-carriers`, `post-tgr-stationary-equilibrium`, `lem-tgr-killing-thermal-normalization`, and `pthm-tgr-tolman-ehrenfest`.
- Mathematical interfaces used in the local arguments: `def-countable-choice`, `thm-derivative-of-exponential`, `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-gr-smooth-lorentzian-objects`, `def-gr-killing-field`, `def-fourier-transform-of-a-tempered-distribution`, `thm-fourier-inversion-on-schwartz-space`, `thm-plancherel`, `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`, `cor-cauchy-theorem-for-null-homotopic-loops`, `def-complex-line-integral-over-a-rectifiable-path`, `thm-existence-of-complex-line-integrals-on-rectifiable-paths`, `thm-fundamental-theorem-for-complex-line-integrals`, `thm-kernel-and-fibres-of-complex-exponential`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-termwise-differentiation-of-complex-power-series`, and `def-complex-differentiability-holomorphic-and-entire`.
- Downstream use checked for the changed reduced-theorem interface: `pthm-tgr-area-entropy-calibration` and `post-tgr-thermodynamic-horizon-identification`. Both use the reduced reference-temperature clause and do not use the optional stationary-bath clause. The only item consumer of the acceleration theorem is the assigned `texp-tgr-two-accelerations`, reviewed above.

## Repairs and evidence

- **`pthm-tgr-reduced-horizon-temperature`**: the probability-convexity and temperature-calibration arguments used positivity and strict monotonicity of the real exponential, while the item cited only its derivative and the mean value theorem. Added the published `cor-exponential-reciprocal-and-positivity` premise, recorded it as `[F7]`, and cited it in steps 2.1 and 3.1. Also made the optional reference-domain hypothesis `x_ref ∈ O` explicit, matching the exact domain requirement in `pthm-tgr-tolman-ehrenfest` and its proof. The facts now record the current draft status of the contour/current chain and the optional stationary-temperature suppliers; their results are used conditionally without an acceptance claim.
- **`pthm-tgr-free-vacuum-acceleration-temperature`**: quantified the switched-coefficient bound over every `ν ∈ ℝ`. The proof now verifies that the boost field is Killing and future timelike on `W_R`, and verifies that `H⁺ = {x⁰ = x¹ > 0}` is a smooth embedded null hypersurface on which the restricted boost field is nonzero, tangent, and null before applying the geometric surface-gravity definition. Facts record that the optional mathematical and physical temperature suppliers remain draft and conditional.
- **`texp-tgr-two-accelerations`**: corrected an inaccurate citation/notation in `F1`: its supplier defines `T_eff` as a function of acceleration and `T_U` as a function of radius, not `T_U(a)`. The item now defines `T_eff(b)` locally, uses `T_U(ρ_a)` and `T_U(ρ_{2a})` for the Tolman-form comparison, states the shared positive coupling, and defines the normalized observer congruence `u_κ = χ_κ/N` whose two integral curves are compared.
- Updated the batch-78 proof contract for all three repaired items. No `verification.judge` record was present in the edited items. Reflow completed with no changes for all three items. Precheck passed for each. The single final proof-layout command reported **3 items, 11 steps, 0 defects**.

The dependency chain remains deliberately conditional on the current draft mathematical suppliers `lem-tgr-positive-damping-boundary`, `lem-tgr-exponential-current`, `lem-tgr-thermal-contour-spectrum`, `lem-tgr-timelike-scalar-acceleration`, and `lem-tgr-spectral-thermometer`. Their current carrier status was read from the items; no authoring-readiness or prior report was treated as proof acceptance. The cited Preskill, Wald, and Crispino–Higuchi–Matsas passages were checked as context for their listed sections and limitations. They are not used as proofs of the local distributional, rate-model, or Rindler calculations, and no experimental observation is asserted.

## Page verdicts

- **`tgr-phs02` — pass.** Its summary accurately describes the two adopted models and preserves the conditional spectrum, bath-reference, temporal-smearing, finite-switch, and non-observation qualifications.
- **`tgr-phs02-examples` — pass.** Its summary accurately describes the conditional comparison. The drawing matches the stated wedge/orbit conventions and is not used to support a deduction.

## Unedited defects and blocker

None identified in the assigned carriers or the opened dependencies needed for these claims. No blocker.

## Coverage note

I opened the assigned pages and items, the draft supplier proofs used by the claims, and the exact published Fourier, Fock, and Lorentzian interfaces cited by those proofs. I did not re-audit every remote foundational proof in their published transitive mathematical closures. The cited literature was checked at the relevant section locators for context; I did not treat it as completing the local proofs or as experimental evidence.
