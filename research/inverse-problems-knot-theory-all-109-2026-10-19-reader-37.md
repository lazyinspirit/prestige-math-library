# Step 3a reader report — batch 37

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Review date: 2026-10-21

## Opened inventory

The active autopilot status was `running` at `3a-read`; no dispatch was shown as in flight.

Opened both assigned pages:

- A page: `limited-angle-tomography-and-invisible-singularities`.
- B page: `limited-angle-tomography-and-invisible-singularities-examples`.

Both contain YAML frontmatter only, have `page_layout: compact-v1`, and have empty Markdown bodies. Their page and item inventories agree with the batch manifest. No page-summary prose or page defect was found.

Opened all 13 assigned items in manifest dependency order:

- A page: `lem-ip-compact-support-fourier-laplace-is-entire`; `def-ip-visible-covector-for-limited-angle-data`; `def-ip-schwartz-radon-transform`; `lem-ip-schwartz-radon-well-defined`; `lem-ip-limited-angle-radon-data-is-l2-on-compact-support`; `cor-ip-limited-angle-compact-support-uniqueness`; `prop-ip-limited-angle-data-no-holder-stability`; `lem-ip-fourier-slice-identity-on-schwartz`; `prop-ip-limited-angle-fourier-visibility`; `op-ip-stable-limited-angle-reconstruction`.
- B page: `ex-ip-compact-support-limited-angle-uniqueness`; `ex-ip-high-frequency-limited-angle-instability`; `ex-ip-invisible-wedge-null-function`.

Opened the other-batch draft suppliers that enter the assigned dependency closure: `def-ip-2d-radon-transform` and `thm-ip-fourier-slice-identity` (batch 36); `def-ip-identifiability-and-stability-modulus`, `def-ip-forward-map-and-solution-classes`, and `thm-ip-kernel-directions-preclude-unrestricted-recovery` (batch 1). Their statements and relevant proofs support the assigned uses; no defect was found.

Opened the manifest-listed direct published suppliers and the immediate supporting suppliers needed to inspect those draft arguments: `cor-c-one-change-of-variables-for-l-one-functions`; `cor-cauchy-schwarz-inequality-for-l-two`; `cor-mean-value-theorem`; `cor-change-of-variables-for-compactly-supported-functions`; `def-complex-differentiability-holomorphic-and-entire`; `def-countable-choice`; `def-fourier-transform-on-an-lca-group`; `def-fourier-transform-on-l-one-of-rn`; `def-metric-space`; `def-schwartz-space-and-its-seminorms`; `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`; `lem-metric-nonnegativity`; `lem-schwartz-functions-and-all-derivatives-are-integrable`; `lem-smooth-bump-between-concentric-euclidean-balls`; `thm-algebra-of-derivatives`; `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`; `thm-chain-rule-for-total-derivatives`; `thm-complex-exponential-is-entire-with-derivative-itself`; `thm-continuous-on-a-rectangle-is-riemann-integrable`; `thm-continuous-functions-on-compact-jordan-sets-are-integrable`; `thm-differentiation-under-the-integral-sign`; `thm-dominated-convergence`; `thm-ftc-second-part`; `thm-fourier-inversion-on-schwartz-space`; `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`; `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`; `thm-identity-theorem-holomorphic-functions`; `thm-lebesgue-measure-of-a-box-of-every-kind`; `thm-multidimensional-integral-properties`; `thm-real-stone-weierstrass-for-compact-metric-spaces`; `thm-riemann-fubini-on-product-rectangles`; and `thm-sine-and-cosine-derivatives`.

## Review and page verdicts

**A page: pass.** The definitions preserve the line-normal convention, frequency wedge, and choice qualifications. The Schwartz mapping result has an integrable majorant for every derivative and uniform decay in the normal. The restricted-data L² estimate uses the line-intersection diameter bound and the orthogonal change of variables correctly. The compact-support uniqueness proof obtains an open frequency sector from any nonempty open set of normals, extends in each complex coordinate, and uses vanishing moments plus real Stone–Weierstrass on the compact support. The modulated-bump proof keeps the H¹ norms bounded and gives superpolynomial restricted-data decay; its no-Hölder conclusion follows by choosing an integer m with α(m+1)>1. The Schwartz Fourier-slice result and its visibility and uniqueness consequences preserve their stated domains and Countable Choice assumptions. The visible-wedge TikZ diagram correctly shows antipodal measured sectors, excluded boundary rays, and omitted zero frequency; its caption states that the drawing is schematic.

**B page: pass.** The compact-support uniqueness example applies the assigned uniqueness result to the difference. The explicit aperture example has θ₂ bounded away from zero on its measured set, with infimum √3/2, and correctly instantiates the oscillatory construction. The invisible-wedge example places the Fourier bump in a blind annular sector, uses Fourier inversion with the stated phase, and applies the two-truth estimator lower bound with common datum zero. No diagrams occur on this page.

The open problem is correctly scoped as a deterministic minimax question over the stated unweighted H¹ class and adversarial L² noise. The checked statistical result does not settle that formulation. Caro, Dos Santos Ferreira, and Ruiz, §2.3, Theorem 2.5, give a logarithmic local Lᵖ stability estimate from local angle-distance Radon data under one-sided support and Besov regularity hypotheses; those hypotheses and its local target do not supply matching minimax bounds for every Ω and Θ in this item.

## Edits and evidence

Three assigned Salo locators attributed limited-angle analytic continuation to §2.1, pp. 4–5. Inspection of that section shows Theorem 2.1 is the Fourier-slice identity and Theorem 2.2 proves full-angle uniqueness by Fourier inversion; it does not give the limited-angle analytic-continuation argument. I updated the Salo locators in `lem-ip-compact-support-fourier-laplace-is-entire`, `cor-ip-limited-angle-compact-support-uniqueness`, and `ex-ip-compact-support-limited-angle-uniqueness` to §2.1, Theorems 2.1–2.2: Radon line parameterization, Fourier-slice identity, and full-angle uniqueness by inversion. The lemma locator also says the coordinate-entire extension is proved locally. The Krishnan–Quinto §1.3.2, Theorem 3 proof remains the source for limited-angle compact-support uniqueness. I changed the lemma title from “The compact-support Fourier-Laplace transform is entire by coordinate slices” to “The compact-support Fourier-Laplace transform is entire in each coordinate,” matching its separate-slice statement.

Source checks:

- [Mikko Salo, *On Geometric Inverse Problems and Microlocal Analysis*](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf), §2.1, Theorems 2.1–2.2, pp. 4–5. The relevant section was read; it uses Fourier phase e^{-ix·ξ}, so its normalization differs from this library’s 2π convention.
- [Krishnan and Quinto, *Microlocal Analysis in Tomography*](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf), §1.3.2, Theorems 1–3 and Theorem 3 proof, pp. 12–14; §1.5.1, Theorem 17 and the limited-data visibility discussion, pp. 34–35. These relevant sections were read; the proof says compact support makes the Fourier transform real analytic and concludes from vanishing on an open cone.
- [Mazzucchelli, Salo, and Tzou, *A General Support Theorem for Analytic Double Fibration Transforms*](https://arxiv.org/pdf/2306.05906), §§1.1–1.3, Theorems 1.2–1.3. The theorem statements and context were checked; the proofs were not audited. This is contextual analytic-transform work with Bolker and one-sided-support hypotheses, not a deterministic minimax result for this problem.
- [Hohmann and Holzmann, *Weighted Angle Radon Transform: Convergence Rates and Efficient Estimation*](https://www3.stat.sinica.edu.tw/ss_newpaper/SS-14-064_na.pdf), §3.1, Corollary 3.2, and [its supplementary proof](https://www3.stat.sinica.edu.tw/statistica/oldpdf/A26n17s.pdf), §A.1, Theorem 3.1 proof and Lemma A.4. Corollary 3.2 states, for γ > -1/2, λ = 1_{[-η,η]} with 0 < η < π/2, and i = 1,2, r_ε(Θ_i(κ,L)) ∼ (ξ/2)^{2κ} L log(1/ε)^{-2κ}. This is minimax mean-squared risk in their Gaussian white-noise sequence model, weighted L² spaces on the unit disk and detector space, and ellipsoidal classes. The model, result, and relevant proof excerpts were read; the full supplement was not audited.
- [Caro, Dos Santos Ferreira, and Ruiz, *Stability Estimates for the Radon Transform with Restricted Data and Applications*](https://arxiv.org/pdf/1211.1887), §2.3, Theorem 2.5. The theorem bounds a local Lᵖ norm by a negative power λ/2 of the logarithm of the local angle-distance data integral, under 0 < λ < 1/p, one-sided support at y₀, and Besov regularity on the dependence domain. Its local data window and support/regularity hypotheses differ from this item’s uniform class and global deterministic noise model. The statement and hypotheses were checked; its proof was not audited.

The edits leave mathematical statements, proof steps, dependencies, and proof-contract citations unchanged; therefore no proof-contract row was affected, and the edited items had no stale `verification.judge` records. Reflow reported each item unchanged. Precheck passed for all three edited items. The required batched proof-layout command reported `3 items, 8 steps, 0 defects`.

## Defects not edited

None. No defect was found in an out-of-scope dependency.

## Blocker

None. The working tree already contained changes outside batch 37 when checked; this review did not edit those paths.

## Coverage limitation

All assigned items and pages, the manifest-listed direct proof suppliers, and the immediate supporting suppliers needed for the other-batch drafts were inspected. The full transitive dependency graph of published foundational suppliers was not recursively audited; those suppliers were used at their stated scope where their claims sufficed for the assigned arguments.
