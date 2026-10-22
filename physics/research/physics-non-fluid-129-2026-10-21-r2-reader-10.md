# Step 3a reader report — batch 10

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `10` only

## Verdicts

- **A page `emx-paraxial-optics`: pass after repair.** Its four items, prerequisites, and placement match the assigned manifest. Its blank body follows the frontmatter-only page policy. The revised angular-spectrum definition now states the exact homogeneous Maxwell system used for its vector-mode clause.
- **B page `emx-paraxial-optics-examples`: pass after repair.** Its two examples are placed on the companion page, which requires the A page. Its blank body follows the page policy. The focused-field example title now matches the single oblique plane wave actually constructed.

## Opened inventory

### Assigned pages and items

- Pages: `library/classical-electromagnetism/emx-paraxial-optics.md`; `library/classical-electromagnetism/emx-paraxial-optics-examples.md`.
- Assigned items, reviewed as the local chain `lem-emx-paraxial-phase-multiplier-bound` → `def-emx-angular-spectrum` → `pthm-emx-paraxial-error`, followed by its consumers `cex-emx-paraxial-distance-failure` and `ex-emx-longitudinal-focused-field`; `pthm-emx-scalar-vortex-eigenvalue` also consumes the angular-spectrum definition.
- Proof contracts: all six entries in `research/physics-non-fluid-129-2026-10-21-r2-batch-10.proof-contracts.json`.

### Page prerequisite context

- `library/classical-electromagnetism/em-scattering-and-scalar-diffraction.md` (published).
- `library/classical-electromagnetism/emx-classical-helicity-angular-momentum.md` (draft).
- `library/functional-analysis/schwartz-space-and-the-plancherel-theorem.md` (published imported mathematics page).

### Direct prerequisite items

The actual direct prerequisite statements/definitions used by the assigned items were checked. The list below excludes the three in-batch suppliers already named above:

- Mathematics: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-differentiable-implies-continuous`, `cor-mean-value-theorem`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-complex-exponential`, `def-countable-choice`, `def-cross-product-in-r3`, `def-directional-and-partial-derivatives`, `def-divergence-and-curl-of-a-c1-vector-field`, `def-euclidean-inner-product`, `def-limit-point-r`, `def-multidimensional-rectangle-and-volume`, `lem-complex-conjugation-and-modulus-laws`, `lem-of-square-monotone`, `thm-chain-rule-for-total-derivatives`, `thm-complex-exponential-addition-and-real-extension`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-fourier-inversion-on-schwartz-space`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-of-square-roots`, `thm-plancherel`, `thm-quarter-turn-values-and-shift-formulas`, `thm-reals-cauchy-complete`, and `thm-sine-and-cosine-derivatives`.
- Electromagnetism: `def-em-complex-plane-wave`, `def-em-fields`, `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources`, `post-em-scalar-aperture-model`, and `post-em-vacuum-maxwell`.
- Draft supplier context: `def-emx-transverse-fourier-field`. I checked the definition used to distinguish its three-dimensional compactly supported Fourier-packet class from the assigned two-dimensional fixed-frequency data; I found no defect in that used definition.

The published mathematical suppliers were checked for the exact statements and hypotheses consumed here; I did not independently re-prove their published arguments or audit unrelated transitive branches of their dependency trees.

## Mathematical and physical review

- The phase-multiplier lemma is valid on `0 ≤ s ≤ δ² < 1`. Rationalization gives the stated remainder; the positive denominator bound uses `t = sqrt(1−δ²)` and holds through both endpoints. The exponential Lipschitz estimate follows from Euler's formula, the trigonometric parity identities, and the mean value theorem with its continuity and differentiability hypotheses satisfied.
- The angular-spectrum construction uses the stated two-dimensional Fourier convention and the unitary `L²` extension under the declared countable-choice premise. The support disk keeps the positive axial root bounded away from zero. The piecewise exact multiplier is measurable, bounded, and norm preserving on the input's almost-everywhere support; the paraxial multiplier is a unit-modulus multiplier. The real-part scalar fields remain in `L²` at each fixed time. The construction does not claim that arbitrary compact-aperture data lie in this band-limited class or that the scalar propagator is an exact Maxwell field.
- The paraxial `L²` bound follows by applying the local phase estimate on the support disk and Plancherel. For the vector mode, the real-field plane-wave encoding and the homogeneous Maxwell equations imply `K·e=0`: evaluating the real divergence at phases `0` and `−π/2` makes both real and imaginary parts vanish. The complex-bilinear dot-product convention is explicit. The two-dimensional complex norm identity then yields the stated longitudinal bound. The result remains conditional on the adopted smooth source-free vacuum Maxwell model and makes no empirical claim.
- The scalar winding result is a direct eigenfunction calculation for the stated smooth pure-winding field. The axis condition supplies the smooth Cartesian extension; the pointwise identity makes the derivative an `L²` function, and the nonzero equivalence class makes the denominator positive. No integration by parts or physical identification with torque or total electromagnetic angular momentum is used.
- The counterexample constructs positive-measure spectral rectangles inside the cone. Their normalized radii tend uniformly to the cone edge while the scaled phase difference tends uniformly to `π`; Plancherel then gives relative `L²` error tending to `2`, not `0`. The conclusion is a conditional model calculation, not an observed optical result.
- The focused-field example's four Maxwell equations were checked componentwise. `K×e=ωb` and `K×b=−ωe/c²` under the stated convention; the fields are smooth plane waves, the units are consistent, and the example has nonzero longitudinal amplitude for every allowed `κ>0`.
- Both assigned TikZ diagrams were checked against their text. The angular-spectrum diagram is the `q_y=0` cross-section `K_z=sqrt(1−Q²)` with the paraxial curve `1−Q²/2` restricted to `|Q|≤δ=1/2`; the longitudinal-field diagram shows the normalized vectors `(1/2, sqrt(3)/2)` and `(1, −1/sqrt(3))`, whose dot product is zero. Neither proof relies on a diagram. No additional diagram is needed for the remaining claims.
- These items contain model assumptions and conditional deductions only. There are no reported observations, empirical premises, uncertainty estimates, or statistical inferences in this batch.

## Source checks

I checked the cited passages relevant to the conventions and mode statements:

- Konijnenberg, Adam, and Urbach, *BSc Optics*, §6.3: the two-dimensional Fourier decomposition, the positive square-root propagation branch for positive-`z` propagation with the `e^{-iωt}` convention, and the propagating/evanescent distinction ([source](https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/06%3A_Scalar_diffraction_optics/6.04%3A_Angular_Spectrum_Method)).
- Niklas Beisert, ETH Zürich, *Elektrodynamik* (2024 FS), §11.1, equations (11.5)–(11.10), PDF pp. 121–122: source-free Fourier-mode dispersion, transversality, and electric/magnetic amplitude relations ([PDF](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf)).
- Alexander and Charles Cerjan, “Orbital angular momentum of Laguerre–Gaussian beams beyond the paraxial approximation,” §2, equations (2), (8), and (11), PDF pp. 2253–2254, and §4, equations (22), (29)–(31), and (37), PDF pp. 2256–2257: angular-spectrum propagation and longitudinal vector components ([paper](https://alexcerjan.com/documents/papers/cerjan_JOSA_2011.pdf)). The batch's uniform error estimates are proved locally, not imported from these references.

## Repairs and validation

1. In `items/def-emx-angular-spectrum.md:107`, I made the vector-mode definition explicit: the associated real fields have domain `R³ × R`, the SI amplitude units are stated, and an exact source-free mode is defined by `C¹` regularity and the displayed homogeneous vacuum Maxwell equations. This repairs the former “only when” wording, which did not define the source-free condition or its field regularity. I updated Facts & Assumptions and the final verification step to match. The logical supplier set did not change. The direct consumers `pthm-emx-paraxial-error`, `pthm-emx-scalar-vortex-eigenvalue`, `cex-emx-paraxial-distance-failure`, and `ex-emx-longitudinal-focused-field` were checked: the two vector-mode consumers use the explicit homogeneous equations consistently, and the scalar consumers are unaffected.
2. In `items/ex-emx-longitudinal-focused-field.md:4`, I changed the title from “Tight focusing changes polarization bookkeeping” to “An oblique plane wave requires a longitudinal electric component.” The proof constructs one oblique plane-wave mode and contains no focusing apparatus or focused-beam construction.
3. Updated the assigned proof contract's `def-emx-angular-spectrum` step 4.1 derivation and rebound its current source fingerprint. Neither changed item had a `verification.judge` record to remove.
4. Ran `reflow.mts` and `precheck.mts` on both changed items. Both prechecks passed. Ran `node tools/physics-support/proof-layout.mjs items/def-emx-angular-spectrum.md items/ex-emx-longitudinal-focused-field.md` once after the final edits: **2 items, 9 steps, 0 defects**.

## Uneditable defects and blockers

None found. No assigned defect remains unedited, and no blocker prevented the review.

## Coverage limitation

This review covers the assigned carriers, the three page-prerequisite carriers, and the exact direct supplier statements/definitions used by the batch. It does not re-audit the proofs of published mathematics suppliers or every unrelated transitive prerequisite branch. The draft transverse-Fourier supplier was checked only at the definition used by this batch.
