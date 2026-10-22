# Step 3a reader report — batch 9

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Scope: `emx-classical-helicity-angular-momentum` and its examples companion

## Opened inventory

- Batch manifest: `research/physics-non-fluid-129-2026-10-21-r2-batch-9.pages.json`.
- Both assigned page carriers: `library/classical-electromagnetism/emx-classical-helicity-angular-momentum.md` and `library/classical-electromagnetism/emx-classical-helicity-angular-momentum-examples.md`.
- All six assigned item carriers, reviewed in dependency order: `def-emx-transverse-fourier-field`, `pthm-emx-helicity-projection`, `def-emx-angular-momentum-split`, `pthm-emx-canonical-kinetic-integral`, `cex-emx-plane-wave-spin-integral-failure`, and `ex-emx-gauge-boundary-term`.
- Their direct suppliers were opened before the consuming arguments. For the Fourier-field definition these were `def-em-gauge-transformation`, `post-em-vacuum-maxwell`, `def-em-fields`, `def-em-lab-geometry`, `def-divergence-and-curl-of-a-c1-vector-field`, `def-directional-and-partial-derivatives`, `def-cross-product-in-r3`, `def-euclidean-inner-product`, `lem-cm-cross-product-triple-identity`, `def-schwartz-space-and-its-seminorms`, `def-em-complex-plane-wave`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `thm-complex-numbers-form-a-field`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`, `thm-chain-rule-for-total-derivatives`, `def-em-vacuum-energy-flux`, `def-em-si-conventions`, `def-multidimensional-rectangle-and-volume`, `def-multidimensional-darboux-integral`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-riemann-fubini-on-product-rectangles`, `thm-ftc-second-part`, `thm-multidimensional-integral-properties`, `def-complete-ordered-field`, and `thm-reals-cauchy-complete`.
- Additional suppliers for later items were `def-em-vacuum-stress-momentum`, `cor-cauchy-reals-lub-complete`, `def-em-plane-wave-definition`, `pthm-em-plane-wave-maxwell`, `pthm-em-wave-energy-average`, `lem-em-period-average`, `post-em-lorentz-coupling`, `pthm-em-poynting-balance`, `pthm-em-momentum-balance`, `def-em-sources`, `thm-the-divergence-of-a-curl-vanishes`, `thm-clairaut-schwarz-mixed-partials`, and `lem-schwartz-cutoffs-from-the-standard-smooth-step`.
- A-page prerequisite pages and their summaries were opened: `em-energy-momentum-and-angular-balance`, `em-potentials-and-gauge`, `em-vacuum-waves-and-polarization`, `schwartz-space-and-the-plancherel-theorem` (read-only mathematics workspace page), and `cm-math-central`.
- Batch contracts, cross-batch dependency file, author notes and source-coverage file were inspected as context, not treated as proof verdicts. The batch cross-batch dependency array is empty. Relevant imported mathematical supplier records were checked in `research/math-imports.json`.

## Review and page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `emx-classical-helicity-angular-momentum` | Pass | Its four listed items match the manifest; its five page prerequisites appear in the carrier. Its body is empty, so it makes no additional summary claim. The item proofs define their chart, amplitude class, integrals, hypotheses and SI conventions locally or use the exact opened suppliers. |
| `emx-classical-helicity-angular-momentum-examples` | Pass for example mathematics; one nonfatal page-metadata issue remains | Its two listed examples match the manifest and the body is empty. The batch manifest declares `requires: [emx-classical-helicity-angular-momentum]`, but the current B-page carrier has no `requires` field. The examples themselves list their A-page item prerequisites directly, so this discrepancy does not conceal a premise in either example proof. The page carrier was outside the reader's edit scope; see the finding below. |

The Fourier-field definition is sound on its stated compactly supported amplitude class with support away from zero. Its uniform compact-support differentiation argument supplies joint smoothness; integration by parts in the spectral variables supplies spatial Schwartz bounds; the product decay estimate makes the energy absolutely integrable; and the displayed modewise derivatives satisfy the four adopted smooth vacuum Maxwell equations. The complex bilinear transversality convention is preserved, and the SI dimensions follow from the stated spectral measure and amplitude units.

The helicity theorem correctly constructs the Hermitian transverse projection, the Hermitian curl operator and the complementary rank-one projectors on each nonzero transverse fibre. The time and proper-rotation commutation claims follow from the stated operators. It asserts no global smooth polarization vector. The angular-momentum definition fixes its origin, gauge class, units and cube-exhaustion convention; its decay estimates establish absolute convergence. The finite-cube theorem's Levi-Civita contraction and integration-by-parts signs yield the stated divergence and outward-boundary corrections, and the Schwartz boundary estimate justifies the source-free limit.

The plane-wave counterexample's explicit nonzero mode satisfies the exact dispersion, transversality and amplitude hypotheses of `pthm-em-plane-wave-maxwell`. The opened `pthm-em-wave-energy-average` proves its positive period-averaged density and infinite cube-exhaustion energy. This refutes membership in the specific finite-energy packet domain; it does not establish that every conceivable generalized angular-momentum integral is undefined. I corrected the item title to say only that the plane wave lies outside that domain.

The sourced example's compact cutoff, potential, fields and sources are smooth. Direct differentiation verifies each smooth Maxwell equation, including Gauss's law; the finite-cube boundary term vanishes on a sufficiently large cube; and integration by parts gives the claimed nonzero charge-divergence correction. It is explicitly a model calculation, not a reported measurement.

No empirical observation, statistical inference, or measurement uncertainty claim occurs in these items. The mathematical arguments do not depend on a diagram; no TikZ or TikZ-CD diagram was present in the assigned carriers, and no missing diagram is needed to state or verify these identities.

## Edit and validation

- Changed only the title of `cex-emx-plane-wave-spin-integral-failure` from “Infinite plane waves have no total angular-momentum integral” to “Nonzero plane waves lie outside the finite-energy angular-momentum domain.” The counterexample proves exclusion from the defined finite-energy functional domain, not nonexistence of every possible angular-momentum integral.
- The proof and its hypotheses were unchanged, so no derivation or citation contract required amendment. The carrier had no `verification.judge` record to remove.
- Reflow: `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/cex-emx-plane-wave-spin-integral-failure.md` — passed.
- Precheck: `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/cex-emx-plane-wave-spin-integral-failure.md` — passed, one item checked, zero failing.
- Final proof layout: `node tools/physics-support/proof-layout.mjs items/cex-emx-plane-wave-spin-integral-failure.md` — one item, two steps, zero defects.

## Uneditable defect and blocker

The B-page carrier omits the page prerequisite listed for it by the batch manifest: `emx-classical-helicity-angular-momentum-examples` should record `requires: [emx-classical-helicity-angular-momentum]` to preserve the declared page-level reading-order edge. Reader scope excludes B-page prose/carrier edits, so the page metadata issue is routed in the findings JSON for owner disposition. No other unresolved defect or mathematical blocker was found in the assigned item proofs.

## Coverage limitation

I did not retrieve the contextual Bliokh and Beisert source PDFs during this pass. Their cited discussions are not used as proof premises: the reviewed local arguments and opened local suppliers establish the claims above. I did not inspect consumers or pages outside batch 9 beyond the listed prerequisite page summaries.
