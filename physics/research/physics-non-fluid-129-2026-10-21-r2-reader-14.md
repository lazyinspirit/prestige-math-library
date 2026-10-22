# Step 3a reader report — batch 14

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `14`

## Reviewed inventory

Assigned pages opened:

- `emx-polarization-bundle` — `library/classical-electromagnetism/emx-polarization-bundle.md`.
- `emx-polarization-bundle-examples` — `library/classical-electromagnetism/emx-polarization-bundle-examples.md`.

Their declared page suppliers were also opened: `emx-classical-helicity-angular-momentum` (batch 9), `emx-lorentz-form-algebra` (batch 2), `the-de-rham-theorem-and-degree`, and `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`. The B page's A-page supplier was read before the B page. Both assigned pages are frontmatter-only, as expected for this fresh statement-first run.

Assigned items opened in dependency order:

1. `def-emx-helicity-line-bundle`.
2. `pthm-emx-helicity-berry-curvature`.
3. `pthm-emx-helicity-rotation-weight`.
4. `ex-emx-polarization-latitude-phase`.
5. `cex-emx-polarization-gauge-singularity`.

Current-run item suppliers opened before their consumers: `def-emx-transverse-fourier-field` and `pthm-emx-helicity-projection` (batch 9), and `def-emx-lorentz-star` (batch 2). I inspected the actual supplier statements and proofs, not the readiness notes as verdicts. I also opened the mathematical statements used for the sphere, forms, exterior derivative, integration, and Stokes arguments, including the smooth-singular Stokes proof and its simplex-level supplier.

## Mathematical and source review

- `def-emx-transverse-fourier-field` correctly restricts to smooth compactly supported amplitudes away from zero and imposes the complex-bilinear transversality condition. Its Fourier integrals are well-defined under the stated cube-limit convention; the local differentiability, Schwartz decay, finite energy, units, and four source-free Maxwell equations follow from the listed smoothness, compact support, cross-product identity, and adopted Maxwell postulate. No empirical conclusion is drawn.
- `pthm-emx-helicity-projection` correctly establishes the Hermitian rank-one projectors, their eigenvalues, and commutation with proper rotations and vacuum evolution. The signs in `C_n=i n×` and the active rotation convention agree with the displayed formulas.
- `def-emx-helicity-line-bundle` correctly gives smooth local frames from the rank-one projector, the spherical frame on its chart, the projected connection, its reality, and the phase rule `A' = A-dχ`. The use of the Lorentz-form supplier for the ordered spatial orientation is sufficient for the assigned construction.
- `pthm-emx-helicity-berry-curvature` has consistent signs: `Aσ=σ cosθ dφ`, `Fσ=-σ sinθ dθ∧dφ=-σωS²`, and the outward flux is `-4πσ`. The eight radially projected octahedral faces form the required finite smooth singular cycle; their boundary edges cancel with the stated orientations. Stokes then rules out a global smooth unit frame. Its TikZ gauge-patch diagram has the correct arrow `vS → vN` and transition `gNS=e^(2iσφ)`; the proof does not rely on the diagram.
- `pthm-emx-helicity-rotation-weight` has the correct active-rotation phase `e^(-iσα)`. Its scalar transport ODE, join factors, final-frame factor, and Stokes clause have consistent signs and domains.
- `ex-emx-polarization-latitude-phase` correctly computes the north-cap solid angle `Ω=2π(1-cosθ0)` and both equivalent holonomies `exp(-iσΩ)=exp(i2πσ cosθ0)`. The north gauge is regular on the cap; this is a model calculation, not an observation.
- `cex-emx-polarization-gauge-singularity` correctly shows that the projector entries are smooth at both poles, despite the spherical frame's coordinate singularity. Its original title referred to a physical “field,” which the counterexample does not construct or analyze; I replaced it with a title naming the proved projector conclusion.

I opened the cited Bliokh et al. discussion of wavevector directions, helicity, and geometric phase in *Spin-orbit interactions of light*, arXiv PDF pp. 3–4, and David Tong's *The Quantum Hall Effect*, §§1.5.1–1.5.2, printed pp. 28–34. Tong uses `-i⟨n|dn⟩`; the local items state their opposite `+i v†dv` convention and derive their signs locally. Tong's spin-1/2 Hamiltonian and adiabatic assumptions are not imported. The items make no measurement or statistical claim.

## Edit and validation

- In `items/cex-emx-polarization-gauge-singularity.md`, changed the title to **“The polar helicity frame is singular while its projector is smooth.”** The evidence is the refuted statement and Verification steps 1.1–2.1, which concern the projector matrix and its regularity, not a physical electric or magnetic field. The proof, citations, and contract derivations were unchanged; no `verification.judge` record was present to remove.
- Reflow: `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/cex-emx-polarization-gauge-singularity.md` — unchanged, exit 0.
- Precheck: `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/cex-emx-polarization-gauge-singularity.md` — pass, 1 checked, 0 failing.
- Final proof layout: `node tools/physics-support/proof-layout.mjs items/cex-emx-polarization-gauge-singularity.md` — 1 item, 2 steps, 0 defects.

## Uneditable defect

`def-emx-lorentz-star` (batch 2), Proof step 1.1, invokes `lem-wedge-monomials-in-a-dual-basis-form-a-basis` for a basis in every degree `0≤k≤4`, although that supplier's Statement only asserts the wedge-monomial basis for positive degrees. The current proof does not separately handle degree zero; it needs the elementary case `Λ⁰V*=R` with `e^∅=1`. This is a nonfatal, immediately repairable omission. It is outside batch 14's write scope, so it is routed as an in-run dependency finding against assigned consumer `def-emx-helicity-line-bundle`. The observed current supplier bytes have raw SHA-256 `6995589d77230f62f928a979dc59e327db53d3b81b7e7a3f40e7237e709ee358`. This gap does not alter the specific coframe-orientation fact consumed by batch 14. No other uneditable defect was confirmed.

## Page verdicts and blocker

- `emx-polarization-bundle`: pass. Its draft identity, item placement, and supplier-page requirements match the assigned inventory; there is no summary prose to repair.
- `emx-polarization-bundle-examples`: pass. Its draft identity, example placement, and dependency on the A page match the assigned inventory; there is no summary prose to repair.
- Blocker: none.

## Coverage limitation

All assigned pages and items and the direct dependencies used in their arguments were inspected. I did not re-audit every transitive proof behind the published mathematics dependencies; the review checked their exact statements and the relevant supplier arguments needed here.
