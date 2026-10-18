# Reader report — batch 13

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `13`  
Role: Step 3a reader

## Opened inventory

Assigned pages:

- A page `oscillatory-filon-and-levin-quadrature` — [current page](../library/numerical-linear-algebra-and-approximation/oscillatory-filon-and-levin-quadrature.md).
- B page `oscillatory-filon-and-levin-quadrature-examples` — [current page](../library/numerical-linear-algebra-and-approximation/oscillatory-filon-and-levin-quadrature-examples.md).

All 19 assigned items were opened. The initial level-0/1 items were read before some external supplier statements; after those suppliers were checked, the remaining items were reviewed in manifest dependency order:

- Level 0: `def-na-finite-interval-oscillatory-integral`, `lem-na-lagrange-interpolation-on-distinct-nodes`, `lem-na-one-dimensional-morse-coordinate`.
- Level 1: `alg-na-fourier-polynomial-moments`, `lem-na-complex-phase-derivative`.
- Level 2: `alg-na-levin-collocation-quadrature`, `lem-na-fresnel-integral`, `lem-na-quadratic-phase-amplitude-bound`, `thm-na-fourier-oscillatory-moment-recurrence`, `thm-na-nonstationary-oscillatory-integration-by-parts`.
- Level 3: `alg-na-nonstationary-moment-expansion`, `lem-na-quadratic-phase-stationary-expansion`, `thm-na-levin-conditioned-residual-bound`.
- Level 4: `alg-na-filon-nodal-moment-quadrature`, `thm-na-single-interior-stationary-phase-expansion`, `ex-na-ill-conditioned-levin-collocation`.
- Level 5: `thm-na-filon-interpolation-error-bound`, `ex-na-interior-stationary-phase-boundary-term`.
- Level 6: `ex-na-large-frequency-fourier-filon-versus-midpoint-sample`.

Also opened the four page prerequisites in the manifest: `composite-quadrature-rules`, `finite-precision-direct-factorizations`, `outward-rounded-interval-and-ball-arithmetic`, and `smooth-partitions-of-unity-and-exhaustions`. The 43 manifest-declared external item suppliers were opened at their current Statements/Definitions and checked against the assigned uses: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-differentiable-implies-continuous`, `cor-pi-is-the-first-positive-sine-zero`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-multidimensional-rectangle-and-volume`, `def-null-and-content-zero-in-rn`, `def-riemann-integral-over-a-jordan-set`, `lem-derivative-of-a-power`, `lem-euclidean-bump-for-a-compact-set-inside-an-open-set`, `lem-mean-value-theorem-on-closed-interval`, `lem-power-laws`, `lem-riemann-integral-unchanged-by-content-zero-modification`, `thm-algebra-of-continuous-functions`, `thm-algebra-of-derivatives`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-chain-rule`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-complex-exponential-addition-and-real-extension`, `thm-complex-numbers-form-a-field`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-continuous-implies-integrable`, `thm-derivative-of-exponential`, `thm-exponential-definition-equivalence`, `thm-exponential-is-strictly-increasing`, `thm-exponential-limits-and-range`, `thm-ftc-second-part`, `thm-gaussian-integral`, `thm-graphs-of-continuous-functions-have-content-zero`, `thm-heine-borel-rn`, `thm-integration-by-parts`, `thm-intermediate-value`, `thm-jordan-boundary-criterion`, `thm-multidimensional-integral-properties`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `thm-of-square-roots`, `thm-polar-form-with-unique-principal-argument`, `thm-quarter-turn-values-and-shift-formulas`, `thm-riemann-fubini-on-product-rectangles`, `thm-sine-and-cosine-derivatives`, `thm-sine-and-cosine-parametrize-the-unit-circle`, `thm-sine-and-cosine-subtraction-formulas`, and `thm-sine-cosine-zero-sets-and-fundamental-period`. Additional suppliers opened to support the repairs below were `def-improper-integral-at-infinity`, `def-mixed-improper-integral`, `def-absolute-and-conditional-improper-convergence`, `thm-cauchy-criterion-for-improper-integrals`, `thm-comparison-test-for-improper-integrals`, `thm-improper-p-test-rational`, `lem-complex-conjugation-and-modulus-laws`, `thm-heine-cantor-r`, and `def-real-and-complex-inner-product-space`.

## Independent mathematical review

The finite-interval definition is consistent with its hypotheses and the basic complex-phase derivative. The Lagrange formula is correct for distinct real nodes and complex data. The local Morse coordinate has the stated regularity and orientation. The Fourier-moment recurrence, Levin endpoint output, nonstationary integration-by-parts expansion, Filon moment rule, residual/conditioning bounds, and both example computations were checked against their local derivations and supplier statements.

The Fresnel argument has the correct damped-Gaussian branch, normalization, and ordinary separate-tail limit. The stationary-phase theorem has the correct sign, Jacobian factor, endpoint term, and remainder order once the local chart is chosen with compact closure inside the open interval. The Levin endpoint expression has no extra factor (1/(i\omega)): Levin’s original paper, §1, equations (1.2)–(1.3), gives (f=p'+iq'p) and the endpoint difference for (pe^{iq}). The NIST DLMF references provide context for the integration-by-parts and stationary-phase methods: §2.3(i), equation 2.3.4; §2.3(iv), equation 2.3.23; and §7.12(ii), equations 7.12.2–7.12.7. The exact whole-line Fresnel normalization is established by the local proof.

## Repairs and evidence

- [lem-na-fresnel-integral](../items/lem-na-fresnel-integral.md): added the separate-tail improper-integral definitions and the Cauchy criterion to the dependencies and Facts; the proof now establishes the one-sided limits explicitly, justifies the radial Fubini/FTC step, explains additivity over the half-annuli and disk/exterior decomposition via zero extensions and content-zero boundaries, proves that \(\operatorname{Re}\alpha>0\) forces the principal argument into \((-\pi/2,\pi/2)\), and uses an explicit complex integral norm bound. Evidence: the opened improper-integral definitions, Cauchy/comparison tests, `thm-multidimensional-integral-properties`, and the algebra of the complex square-root construction.
- [lem-na-quadratic-phase-amplitude-bound](../items/lem-na-quadratic-phase-amplitude-bound.md): cited the affine change of variables and derived the complex integral norm bound from real linearity and monotonicity. The split now uses \(\Lambda\le4\) for the direct bound and \(\delta=2/\sqrt\Lambda\) for \(\Lambda>4\), which gives the stated constant without an unproved logarithm estimate. Evidence: `thm-change-of-variables-for-compact-jordan-sets`, `thm-multidimensional-integral-properties`, and `lem-complex-conjugation-and-modulus-laws`.
- [thm-na-nonstationary-oscillatory-integration-by-parts](../items/thm-na-nonstationary-oscillatory-integration-by-parts.md): made the complex remainder estimate explicit from the componentwise integral convention and the real integral properties.
- [lem-na-quadratic-phase-stationary-expansion](../items/lem-na-quadratic-phase-stationary-expansion.md): specified the separate-tail convention and the comparison/p-test evidence for the improper remainder; the odd term is now justified by reflection; the compact-parameter differentiation for (B\in C^2) is justified by MVT and Heine–Cantor; and the complex integral norm/triangle bounds are explicit.
- [lem-na-one-dimensional-morse-coordinate](../items/lem-na-one-dimensional-morse-coordinate.md): expanded the integral Taylor-remainder step using FTC, the product rule, and the chain rule; added Heine–Cantor to justify uniform convergence of the parameter-integral difference quotients.
- [thm-na-single-interior-stationary-phase-expansion](../items/thm-na-single-interior-stationary-phase-expansion.md): required a chart with \(\overline J\subset(a,b)\), localized the change of variables to a compact interval containing the cutoff support, factored the constant phase explicitly, and cited interval additivity and the complex triangle inequality.
- [thm-na-filon-interpolation-error-bound](../items/thm-na-filon-interpolation-error-bound.md): made the complex finite-sum triangle estimate and componentwise integral linearity explicit.
- [thm-na-levin-conditioned-residual-bound](../items/thm-na-levin-conditioned-residual-bound.md): made the amplitude/basis codomains explicit, added componentwise integral linearity and scalar triangle facts, and expressed the endpoint functional as \(\langle A^{-1}\rho,\overline d\rangle\) before applying Cauchy–Schwarz.
- [alg-na-fourier-polynomial-moments](../items/alg-na-fourier-polynomial-moments.md): wrote the initialization and increasing-index recurrence as explicit instructions.
- [alg-na-levin-collocation-quadrature](../items/alg-na-levin-collocation-quadrature.md): specified the complex-valued basis and complex linear independence.
- [alg-na-filon-nodal-moment-quadrature](../items/alg-na-filon-nodal-moment-quadrature.md): specified integer (n\) and the complex moment estimates with real error bounds.
- [ex-na-interior-stationary-phase-boundary-term](../items/ex-na-interior-stationary-phase-boundary-term.md): cited the complex triangle inequality in comparing the endpoint/remainder scale with the stationary contribution.

Updated the affected entries in `numerical-analysis-remaining-71-2026-10-17-batch-13.proof-contracts.json`; none of the changed items had a `verification.judge` record. The strict proof-contract validator passed for all 19 assigned items. Reflow reported all 12 changed items unchanged; precheck passed for all proof-bearing changed items and returned zero checked proofs for the three algorithm definitions. The final proof-layout command checked all 12 changed item paths: 30 steps, 0 defects.

## Page verdicts

- `oscillatory-filon-and-levin-quadrature` (A): no page-summary defect found. Its descriptions of the exact-real methods, separate rounded-solve boundary, endpoint contribution, and exclusion of stationary endpoints/coalescing points match the assigned items. No A-page prose edit was needed.
- `oscillatory-filon-and-levin-quadrature-examples` (B): no page-summary defect found. The summaries match the three examples. No B-page prose was edited.

## Unedited defects and blocker

No confirmed defect remains in the assigned pages or items, and no defect was found in a published dependency. There is no blocker.

## Coverage note

All assigned items, pages, page prerequisites, and direct dependency statements needed for the reviewed inferences were opened. I did not recursively audit every proof in the full transitive published dependency closure. The initially opened level-0/1 items preceded some of their supplier statement reads; I then checked those suppliers before evaluating downstream items. The cited Iserles–Nørsett–Olver PDF could not be fetched by the available web endpoint (the Oxford archive returned 403 and the direct PDF request failed); its claims are not used in place of the local proofs. DLMF and Levin 1982 were opened at the locators listed above.
