# Step 5a reader report — batch 26

Run: `frontier-37-owner-30`  
Role: reader (`reader-26`)

## Inventory opened

Read `research/frontier-37-owner-30-batch-26.pages.json`, `briefs/reader.md`, the repository instructions and `README.md`. The run status showed Step 5a reading active and no worker currently running.

Opened both assigned pages:

- A page `nevanlinna-second-main-theorem-and-defects` — [page prose](../library/complex-analysis/nevanlinna-second-main-theorem-and-defects.md)
- B page `nevanlinna-second-main-theorem-and-defects-examples` — [page prose](../library/complex-analysis/nevanlinna-second-main-theorem-and-defects-examples.md)

Opened every assigned item:

- **A page:** `def-nevanlinna-exceptional-radius-notation`; `def-nevanlinna-truncated-and-ramification-counts`; `lem-borel-nevanlinna-growth-increment`; `lem-nevanlinna-poisson-jensen-derivative-bound`; `lem-nevanlinna-ramification-counting-identity`; `lem-nevanlinna-logarithmic-derivative`; `lem-nevanlinna-growth-dominates-logarithm`; `thm-nevanlinna-second-main-theorem`; `def-nevanlinna-deficiency-and-ramification-index`; `thm-nevanlinna-defect-relation`; `lem-nevanlinna-exterior-three-value-extension`; `thm-local-second-main-theorem-on-a-punctured-disc`; `cor-nevanlinna-picard-theorems`; `thm-nevanlinna-five-value-theorem`.
- **B page:** `ex-nevanlinna-omitted-values-of-exponential`; `ex-nevanlinna-deficiencies-of-elementary-functions`; `ex-truncated-versus-full-nevanlinna-counting`; `cex-nevanlinna-error-bound-without-exceptional-radii`; `ex-sharpness-of-nevanlinna-q-minus-two`; `ex-nevanlinna-and-normal-family-picard-proofs`; `ex-five-value-bound-is-sharp`.

Read the statement or definition section of each of the 62 unique published dependency items in the assigned closure:

`def-nevanlinna-counting-proximity-and-characteristic`, `def-order-of-growth-meromorphic-function`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `def-countable-choice`, `thm-nevanlinna-quantities-well-defined`, `thm-zero-order-factorization-holomorphic-function`, `thm-pole-characterizations`, `thm-poles-meromorphic-function-are-discrete-and-countable`, `thm-isolated-zeros-holomorphic-function`, `thm-zero-complex-derivative-on-a-domain-implies-constant`, `thm-rational-functions-characterized-by-logarithmic-characteristic`, `thm-ahlfors-shimizu-characteristic-identity`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-p-series-real-exponents`, `thm-poisson-jensen-formula-meromorphic-function`, `thm-nevanlinna-first-main-theorem`, `thm-nevanlinna-characteristic-elementary-laws`, `thm-jensens-integral-inequality`, `thm-countable-union-of-countable`, `thm-three-point-transitivity-mobius-transformations`, `thm-mobius-transformations-biholomorphic-sphere`, `thm-schottky-theorem`, `lem-cauchy-estimates-on-concentric-subdiscs`, `thm-rational-points-and-boxes-in-rn`, `thm-heine-borel-rn`, `thm-recursion`, `def-chordal-metric-riemann-sphere`, `thm-chordal-metric-induces-sphere-topology`, `thm-compact-implies-complete-and-totally-bounded`, `thm-extreme-value-metric`, `thm-chordal-limit-theorem-for-meromorphic-functions`, `thm-boundary-maximum-modulus-principle`, `thm-removable-singularity-characterizations`, `cor-argument-principle-counts-preimages`, `thm-argument-principle-as-image-winding-number`, `thm-identity-theorem-holomorphic-functions`, `thm-fundamental-theorem-of-algebra-liouville-proof`, `thm-laurent-expansion-annulus`, `thm-laurent-regular-principal-decomposition`, `thm-laurent-coefficient-formula-and-uniqueness`, `thm-termwise-differentiation-of-complex-power-series`, `lem-derived-complex-power-series-has-the-same-radius`, `thm-holomorphic-if-and-only-if-analytic`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-exponential-surjects-onto-the-punctured-plane`, `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant`, `thm-algebra-of-complex-derivatives`, `thm-chain-rule-for-complex-derivatives`, `thm-kernel-and-fibres-of-complex-exponential`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `def-complex-trigonometric-and-hyperbolic-functions`, `cor-complex-trigonometric-and-hyperbolic-derivatives`, `thm-complex-sine-and-cosine-zero-sets`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-derivatives`, `thm-ftc-second-part`, `thm-continuous-implies-integrable`, `cor-differentiable-implies-continuous`, `thm-weierstrass-m-test-for-complex-function-series`, `cor-complex-power-series-sums-are-analytic`.

## Repairs

Only assigned in-flight items were edited. No page prose was changed.

1. **`thm-local-second-main-theorem-on-a-punctured-disc`, step 4.1.** The auxiliary exterior First Main Theorem claim allowed the inner circle to pass through an (a)-point. Its contour integral of (g'/(g-a)) would then be undefined. The claim now requires the inner circle to contain no pole of (g) and no (a)-point. The later uses already choose such regular circles. Updated derivation `d-4.1` in both [batch and run proof contracts](frontier-37-owner-30-batch-26.proof-contracts.json).

2. **`cor-nevanlinna-picard-theorems`, steps 1.2, 2.1–2.2, 3.1, 4.1–4.2, 5.2, 10.1 and 13.2.** The rational-map proof had an invalid degree inference when (deg P<deg Q) and (a=0); the proof now separates the degree cases and handles that value. The plane and punctured-disc arguments reused (f) for functions on different domains, which left the plane characteristic estimate attached to the local function; I named the plane map (h) and kept the local function (f). I distinguished the local exceptional set as (E_{m loc}), used (log^+ y) in the inequality that contains it, handled the case of no preimages in the finite-occurrence argument, and showed that the same at-most-two exceptional values work in every punctured neighbourhood by finiteness on compact annuli. Updated derivations `d-1.1`, `d-1.2`, `d-2.1`, `d-2.2`, `d-3.1`, `d-4.1`, `d-4.2`, `d-5.2`, `d-10.1` and `d-13.2` in both proof-contract files.

3. **`thm-nevanlinna-five-value-theorem`, Fact F1 and step 2.1.** Fact F1 omitted the First Main Theorem's nonconstant hypothesis. Step 2.1 also invoked that theorem when (F-G) could be a nonzero constant. F1 now states the correct hypothesis; the proof handles a nonzero constant difference directly (then the common-value count is zero) and applies FMT only when the difference is nonconstant. Updated derivation `d-2.1` in both proof-contract files.

No changed item contained a `verification.judge` record, so there was none to remove. Reflow reported `unchanged` and precheck passed for each changed item:

- `thm-local-second-main-theorem-on-a-punctured-disc`: 1 checked, 0 failing.
- `cor-nevanlinna-picard-theorems`: 1 checked, 0 failing.
- `thm-nevanlinna-five-value-theorem`: 1 checked, 0 failing.

## Source check and limitation

The local exterior logarithmic-derivative estimate in `thm-local-second-main-theorem-on-a-punctured-disc`, Fact F5, cites Mark Lund and Zhuan Ye, *Nevanlinna theory of meromorphic functions on annuli*, Definition A and Theorem A2, printed pp. 549, 552 ([publisher page](https://link.springer.com/article/10.1007/s11425-010-0037-3); the item also links the [SciEngine PDF](https://www.sciengine.com/doi/pdf/f72880821c9e4c6197bdd1d8c0054a6e)). Springer exposed only a subscription preview, and the SciEngine PDF was inaccessible, so I could not read that exact theorem's full argument.

As a related primary-source check, I read A. Ya. Khrystiyanyn and A. A. Kondratyuk, *On the Nevanlinna Theory for Meromorphic Functions on Annuli. II*, Theorem 1(i), printed p. 57, and its proof in §3, printed pp. 64–66 ([PDF](https://matstud.org.ua/texts/2005/24_1/24_1_057_068.pdf)). For a nonconstant meromorphic function on `A={z:1/R_0<|z|<R_0}` with `R_0=∞`, it bounds `m_0(R,f'/f)` by `O(log(R T_0(R,f)))` outside a set `Δ` where `∫_Δ R^(λ−1) dR<∞`; choosing `λ=1` gives finite linear measure. Its `C*` domain and `T_0` characteristic are not the exact one-sided exterior setup in Fact F5, so it does not replace verification of Lund–Ye Theorem A2. This is a source-verification limitation, not a confirmed mathematical defect in an uneditable item.

## Page verdicts and remaining findings

- **A page:** the summary accurately describes the current notation, counting identities, plane and local Second Main Theorems, defect relations, uniqueness result, and Picard consequences. No A-page prose repair was needed.
- **B page:** the exponential and sine computations, power-map multiplicity example, exceptional-radius counterexample, sharpness examples, and Picard comparison match their assigned items. No B-page edit was authorized or made.
- **Uneditable defects:** none confirmed in assigned pages, assigned items, or published dependencies.
- **Run blocker observed:** the initial autopilot status showed `5a-collect` blocked after `collect-30` failed three times; no workers were running. This reader completed the assigned audit and did not intervene in stage control.
- **Coverage limitation:** the exact external source for Fact F5 remains inaccessible as described above.
