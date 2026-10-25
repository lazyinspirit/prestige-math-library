# Fourier Analysis LaTeX visual audit — lane 03

Capture revision 2 only. All 44 assigned items were visually inspected from every original-resolution screenshot tile in the local app SSR/CSS preview. Inspection included all rendered sections, including proof or verification content and any visible Scratch area. No item content was changed. No KaTeX parser failures or broken TikZ diagrams were observed. Five findings are confirmed raw TeX notation visibly missing math delimiters (caret/underscore forms); four are optional baseline typography findings.

## Findings

### 1. def-muckenhoupt-a-p-and-a-one-weights — title

- **Page:** muckenhoupt-weights-and-weighted-estimates
- **Source:** `line 4`: `title: Muckenhoupt A_p and A_1 weights`
- **Visual symptom:** The title renders the underscores in A_p and A_1 literally, unlike the formatted math in the Definition body.
- **Classification:** confirmed raw notation (literal TeX caret/underscore shown without math delimiters; no KaTeX parser failure)
- **Screenshot:** `screenshots/def-muckenhoupt-a-p-and-a-one-weights--01.png`
- **Suggested repair:** Format the class names as math, for example $A_p$ and $A_1$, in the title.

### 2. lem-a-one-cube-average-and-maximal-function-forms-agree — title

- **Page:** muckenhoupt-weights-and-weighted-estimates
- **Source:** `line 4`: `title: The two defining forms of A_1 agree`
- **Visual symptom:** The title displays A_1 with a literal underscore; the Statement body renders the same notation as math.
- **Classification:** confirmed raw notation (literal TeX caret/underscore shown without math delimiters; no KaTeX parser failure)
- **Screenshot:** `screenshots/lem-a-one-cube-average-and-maximal-function-forms-agree--01.png`
- **Suggested repair:** Format A_1 as math in the title, for example $A_1$.

### 3. lem-lca-scalar-unitization-character-space-and-spectrum — title

- **Page:** bochner-inversion-and-plancherel-on-lca-groups
- **Source:** `line 4`: `title: "Scalar unitisation of L^1 of an LCA group: characters, spectrum and identity criterion"`
- **Visual symptom:** The title renders L^1 with a literal caret and digit instead of a superscript; the Statement renders the notation correctly.
- **Classification:** confirmed raw notation (literal TeX caret/underscore shown without math delimiters; no KaTeX parser failure)
- **Screenshot:** `screenshots/lem-lca-scalar-unitization-character-space-and-spectrum--01.png`
- **Suggested repair:** Format L^1 as math in the title, for example $L^1$.

### 4. lem-weighted-maximal-weak-bound-for-a-one — title

- **Page:** muckenhoupt-weights-and-weighted-estimates
- **Source:** `line 4`: `title: Weighted weak (1,1) bound for the maximal function under A_1`
- **Visual symptom:** The title displays A_1 with a literal underscore; the Statement renders the class notation as math.
- **Classification:** confirmed raw notation (literal TeX caret/underscore shown without math delimiters; no KaTeX parser failure)
- **Screenshot:** `screenshots/lem-weighted-maximal-weak-bound-for-a-one--01.png`
- **Suggested repair:** Format A_1 as math in the title, for example $A_1$.

### 5. lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds — title

- **Page:** fourier-restriction-and-the-stein-tomas-theorem
- **Source:** `line 4`: `title: 'Graph-patch extension family: dispersive and L2 slice bounds'`
- **Visual symptom:** The title displays L2 on the baseline, while the body uses L^2 notation.
- **Classification:** typography (optional baseline formatting; no literal TeX markup leak)
- **Screenshot:** `screenshots/lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds--01.png`
- **Suggested repair:** Format L^2 as math in the title, for example $L^2$.

### 6. thm-carleson-maximal-operator-is-strong-ltwo — title

- **Page:** carleson-hunt-time-frequency-theorem
- **Source:** `line 4`: `title: "Carleson maximal operator is strong ltwo"`
- **Visual symptom:** The title spells out the exponent as “ltwo,” so the space notation is not presented as math.
- **Classification:** typography (optional baseline formatting; no literal TeX markup leak)
- **Screenshot:** `screenshots/thm-carleson-maximal-operator-is-strong-ltwo--01.png`
- **Suggested repair:** Use a formatted space name in the title, such as strong $L^2$.

### 7. thm-carleson-maximal-operator-is-strong-ltwo — Statement

- **Page:** carleson-hunt-time-frequency-theorem
- **Source:** `line 27`: `Assume AC. The one-sided real-line Carleson maximal operator extends boundedly to complex L2(R).`
- **Visual symptom:** The Statement renders L2(R) as plain baseline text; the same body uses formatted math elsewhere only sparingly.
- **Classification:** typography (optional baseline formatting; no literal TeX markup leak)
- **Screenshot:** `screenshots/thm-carleson-maximal-operator-is-strong-ltwo--01.png`
- **Suggested repair:** Format the function space as $L^2(\mathbb R)$.

### 8. thm-gibbs-overshoot-at-a-piecewise-c-one-jump — title

- **Page:** fejer-and-poisson-summability-of-fourier-series
- **Source:** `line 4`: `title: "Gibbs overshoot at a piecewise C^1 jump"`
- **Visual symptom:** The title displays C^1 with a literal caret; the Statement renders C^1 as math.
- **Classification:** confirmed raw notation (literal TeX caret/underscore shown without math delimiters; no KaTeX parser failure)
- **Screenshot:** `screenshots/thm-gibbs-overshoot-at-a-piecewise-c-one-jump--01.png`
- **Suggested repair:** Format C^1 as math in the title, for example $C^1$.

### 9. thm-real-hone-bmo-duality — title

- **Page:** bmo-john-nirenberg-and-h1-duality
- **Source:** `line 4`: `title: "Real H1-BMO duality"`
- **Visual symptom:** The title displays H1 on the baseline while the Statement uses formatted H^1.
- **Classification:** typography (optional baseline formatting; no literal TeX markup leak)
- **Screenshot:** `screenshots/thm-real-hone-bmo-duality--01.png`
- **Suggested repair:** Format H^1 in the title, for example $H^1$–BMO.

## Coverage ledger

All assigned items are listed. “Clean” means no visual malformed-math or raw-notation defect was found; title-only typography findings are listed above. Screenshot paths are revision-2 evidence.

| Item | Status | Sections visually checked | Every screenshot tile viewed |
|---|---|---|---|
| `cex-abel-summability-does-not-imply-ordinary-convergence` | clean | Title; Statement refuted; Facts & Assumptions; Counterexample | `cex-abel-summability-does-not-imply-ordinary-convergence--01.png`, `cex-abel-summability-does-not-imply-ordinary-convergence--02.png` |
| `cex-continuous-fourier-series-need-not-converge-everywhere` | clean | Title; Statement refuted; Facts & Assumptions; Counterexample | `cex-continuous-fourier-series-need-not-converge-everywhere--01.png`, `cex-continuous-fourier-series-need-not-converge-everywhere--02.png` |
| `cex-knapp-rules-out-extension-below-the-tomas-exponent` | clean | Title; Statement refuted; Facts & Assumptions; Counterexample | `cex-knapp-rules-out-extension-below-the-tomas-exponent--01.png`, `cex-knapp-rules-out-extension-below-the-tomas-exponent--02.png` |
| `cex-the-integers-are-not-a-sidon-set` | clean | Title; Statement refuted; Facts & Assumptions; Counterexample | `cex-the-integers-are-not-a-sidon-set--01.png`, `cex-the-integers-are-not-a-sidon-set--02.png` |
| `cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo` | clean | Title; Statement; Facts & Assumptions; Proof | `cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo--01.png`, `cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo--02.png` |
| `cor-nyquist-no-aliasing-condition` | clean | Title; Statement; Facts & Assumptions; Proof | `cor-nyquist-no-aliasing-condition--01.png`, `cor-nyquist-no-aliasing-condition--02.png` |
| `def-annihilator-of-a-subgroup` | clean | Title; Definition | `def-annihilator-of-a-subgroup--01.png`, `def-annihilator-of-a-subgroup--02.png` |
| `def-cyclic-convolution-on-z-mod-n` | clean | Title; Definition; Remarks | `def-cyclic-convolution-on-z-mod-n--01.png`, `def-cyclic-convolution-on-z-mod-n--02.png` |
| `def-hp-atom-with-moment-order` | clean | Title; Definition | `def-hp-atom-with-moment-order--01.png`, `def-hp-atom-with-moment-order--02.png` |
| `def-muckenhoupt-a-p-and-a-one-weights` | findings | Title; Definition | `def-muckenhoupt-a-p-and-a-one-weights--01.png`, `def-muckenhoupt-a-p-and-a-one-weights--02.png` |
| `def-riesz-potential-of-order-alpha` | clean | Title; Definition | `def-riesz-potential-of-order-alpha--01.png`, `def-riesz-potential-of-order-alpha--02.png` |
| `def-weighted-maximal-function-relative-to-a-doubling-weight` | clean | Title; Definition | `def-weighted-maximal-function-relative-to-a-doubling-weight--01.png`, `def-weighted-maximal-function-relative-to-a-doubling-weight--02.png` |
| `ex-bmo-seminorm-is-unchanged-by-adding-a-constant` | clean | Title; Example; Facts & Assumptions; Verification | `ex-bmo-seminorm-is-unchanged-by-adding-a-constant--01.png`, `ex-bmo-seminorm-is-unchanged-by-adding-a-constant--02.png` |
| `ex-four-point-radix-two-fft` | clean | Title; Example; Facts & Assumptions; Verification; Remarks | `ex-four-point-radix-two-fft--01.png`, `ex-four-point-radix-two-fft--02.png` |
| `ex-hilbert-transform-of-an-interval-indicator` | clean | Title; Statement; Facts & Assumptions; Proof | `ex-hilbert-transform-of-an-interval-indicator--01.png`, `ex-hilbert-transform-of-an-interval-indicator--02.png`, `ex-hilbert-transform-of-an-interval-indicator--03.png` |
| `ex-pontryagin-dual-of-a-finite-cyclic-group` | clean | Title; Example; Facts & Assumptions; Verification | `ex-pontryagin-dual-of-a-finite-cyclic-group--01.png`, `ex-pontryagin-dual-of-a-finite-cyclic-group--02.png` |
| `ex-second-derivative-newtonian-kernels-fit-the-cz-framework` | clean | Title; Example; Facts & Assumptions; Verification | `ex-second-derivative-newtonian-kernels-fit-the-cz-framework--01.png`, `ex-second-derivative-newtonian-kernels-fit-the-cz-framework--02.png`, `ex-second-derivative-newtonian-kernels-fit-the-cz-framework--03.png` |
| `lem-a-one-cube-average-and-maximal-function-forms-agree` | findings | Title; Statement; Facts & Assumptions; Proof | `lem-a-one-cube-average-and-maximal-function-forms-agree--01.png`, `lem-a-one-cube-average-and-maximal-function-forms-agree--02.png` |
| `lem-ball-and-cube-maximal-functions-are-comparable` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-ball-and-cube-maximal-functions-are-comparable--01.png`, `lem-ball-and-cube-maximal-functions-are-comparable--02.png` |
| `lem-calderon-zygmund-decomposition-at-height-lambda` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-calderon-zygmund-decomposition-at-height-lambda--01.png`, `lem-calderon-zygmund-decomposition-at-height-lambda--02.png` |
| `lem-centering-by-translation-and-modulation-preserves-the-variance-product` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-centering-by-translation-and-modulation-preserves-the-variance-product--01.png`, `lem-centering-by-translation-and-modulation-preserves-the-variance-product--02.png` |
| `lem-compact-support-gives-an-entire-fourier-laplace-transform` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-compact-support-gives-an-entire-fourier-laplace-transform--01.png`, `lem-compact-support-gives-an-entire-fourier-laplace-transform--02.png`, `lem-compact-support-gives-an-entire-fourier-laplace-transform--03.png` |
| `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb--01.png`, `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb--02.png` |
| `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions--01.png`, `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions--02.png` |
| `lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence--01.png`, `lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence--02.png` |
| `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds` | findings | Title; Statement; Facts & Assumptions; Proof | `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds--01.png`, `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds--02.png`, `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds--03.png` |
| `lem-holder-fourier-coefficients-have-weighted-ltwo-decay` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-holder-fourier-coefficients-have-weighted-ltwo-decay--01.png`, `lem-holder-fourier-coefficients-have-weighted-ltwo-decay--02.png` |
| `lem-kolmogorov-simultaneous-phase-approximation` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-kolmogorov-simultaneous-phase-approximation--01.png`, `lem-kolmogorov-simultaneous-phase-approximation--02.png` |
| `lem-lca-scalar-unitization-character-space-and-spectrum` | findings | Title; Statement; Facts & Assumptions; Proof | `lem-lca-scalar-unitization-character-space-and-spectrum--01.png`, `lem-lca-scalar-unitization-character-space-and-spectrum--02.png`, `lem-lca-scalar-unitization-character-space-and-spectrum--03.png`, `lem-lca-scalar-unitization-character-space-and-spectrum--04.png`, `lem-lca-scalar-unitization-character-space-and-spectrum--05.png` |
| `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz--01.png`, `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz--02.png` |
| `lem-periodic-conjugate-square-identity` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-periodic-conjugate-square-identity--01.png`, `lem-periodic-conjugate-square-identity--02.png` |
| `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function--01.png`, `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function--02.png` |
| `lem-sampling-produces-periodisation-in-frequency` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-sampling-produces-periodisation-in-frequency--01.png`, `lem-sampling-produces-periodisation-in-frequency--02.png` |
| `lem-sphere-finite-graph-charts-and-surface-density` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-sphere-finite-graph-charts-and-surface-density--01.png`, `lem-sphere-finite-graph-charts-and-surface-density--02.png`, `lem-sphere-finite-graph-charts-and-surface-density--03.png` |
| `lem-truncated-maximal-function-estimates` | clean | Title; Statement; Facts & Assumptions; Proof | `lem-truncated-maximal-function-estimates--01.png`, `lem-truncated-maximal-function-estimates--02.png`, `lem-truncated-maximal-function-estimates--03.png`, `lem-truncated-maximal-function-estimates--04.png` |
| `lem-weighted-maximal-weak-bound-for-a-one` | findings | Title; Statement; Facts & Assumptions; Proof | `lem-weighted-maximal-weak-bound-for-a-one--01.png`, `lem-weighted-maximal-weak-bound-for-a-one--02.png` |
| `rem-lone-fourier-series-can-diverge-almost-everywhere` | clean | Title; Reading the endpoint witness | `rem-lone-fourier-series-can-diverge-almost-everywhere--01.png`, `rem-lone-fourier-series-can-diverge-almost-everywhere--02.png` |
| `thm-atomic-characterisation-of-real-hp` | clean | Title; Statement; Facts & Assumptions; Proof | `thm-atomic-characterisation-of-real-hp--01.png`, `thm-atomic-characterisation-of-real-hp--02.png` |
| `thm-carleson-maximal-operator-is-strong-ltwo` | findings | Title; Statement; Facts & Assumptions; Proof | `thm-carleson-maximal-operator-is-strong-ltwo--01.png`, `thm-carleson-maximal-operator-is-strong-ltwo--02.png` |
| `thm-fejer-means-converge-at-lebesgue-points` | clean | Title; Statement; Facts & Assumptions; Proof | `thm-fejer-means-converge-at-lebesgue-points--01.png`, `thm-fejer-means-converge-at-lebesgue-points--02.png` |
| `thm-gibbs-overshoot-at-a-piecewise-c-one-jump` | findings | Title; Statement; Facts & Assumptions; Proof | `thm-gibbs-overshoot-at-a-piecewise-c-one-jump--01.png`, `thm-gibbs-overshoot-at-a-piecewise-c-one-jump--02.png` |
| `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere` | clean | Title; Statement; Facts & Assumptions; Proof | `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere--01.png`, `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere--02.png` |
| `thm-mihlin-fourier-multiplier-theorem` | clean | Title; Statement; Facts & Assumptions; Proof | `thm-mihlin-fourier-multiplier-theorem--01.png`, `thm-mihlin-fourier-multiplier-theorem--02.png`, `thm-mihlin-fourier-multiplier-theorem--03.png` |
| `thm-real-hone-bmo-duality` | findings | Title; Statement; Facts & Assumptions; Proof | `thm-real-hone-bmo-duality--01.png`, `thm-real-hone-bmo-duality--02.png` |

## Limitations

This is a visual rendering audit of the listed SSR/CSS screenshots and the matching source snapshots. No separate Scratch section or Scratch content appears in the assigned snapshots or rendered tiles. The audit does not certify mathematical correctness, inspect content outside lane 03, or infer defects from KaTeX error metadata alone.
