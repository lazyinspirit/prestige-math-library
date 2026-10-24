# Fourier Analysis visual LaTeX audit — lane 10

Audit date: 2026-10-23. Scope: all 44 unique items assigned in `assignment-10.json`, across their listed Fourier Analysis pages. Screenshots are revision 2 from the local SSR/CSS preview. I opened every listed tile at original resolution; each item’s complete rendered page, including any visible proof or verification sections, was reviewed. I also checked the exact source snapshot for each finding. No item content was changed.

Coverage: 44 items (38 visually clean; 7 findings across 6 items). Every receipt had `capture_revision: 2`. Captured receipts reported zero KaTeX errors. No TikZ/tikzcd diagram appeared in this lane’s rendered items.

## Confirmed raw notation or malformed math display

### 1. `ex-negative-sobolev-order-containing-a-dirac-mass` — Proof technique

Pages: `fourier-multipliers-and-sobolev-characterisations-examples`

Source line 119: **Proof technique:** reduce the membership to the finiteness of a radial integral, bracket that integral between blocks of a real $p$-series, and read off the threshold and its strict endpoint.

Visual symptom: The app displays the literal dollar delimiters around `$p$` in the plain-text Proof technique line; it does not typeset p as math.

Screenshot evidence: [ex-negative-sobolev-order-containing-a-dirac-mass--03.png](screenshots/ex-negative-sobolev-order-containing-a-dirac-mass--03.png)

Suggested repair: Use plain prose (“a real p-series”) in this non-math-rendered technique field, or update the renderer to typeset math there.

### 2. `lem-lca-lone-convolution-is-a-commutative-banach-star-algebra` — Title

Pages: `bochner-inversion-and-plancherel-on-lca-groups`

Source line 4: title: L^1 of an LCA group is a commutative Banach star algebra under convolution

Visual symptom: The title is shown as literal `L^1`, with the caret and exponent digit rather than a typeset superscript.

Screenshot evidence: [lem-lca-lone-convolution-is-a-commutative-banach-star-algebra--01.png](screenshots/lem-lca-lone-convolution-is-a-commutative-banach-star-algebra--01.png)

Suggested repair: Spell out “L one” or use a title-rendering convention that typesets the exponent.

### 3. `lem-hilbert-transform-has-signum-fourier-multiplier` — Title

Pages: `hilbert-and-riesz-transforms`

Source line 4: title: "The Hilbert transform is the tempered convolution with pv(1/(pi x)) and has signum Fourier multiplier"

Visual symptom: The title displays `pv(1/(pi x))` as raw ASCII notation, not a rendered principal-value expression.

Screenshot evidence: [lem-hilbert-transform-has-signum-fourier-multiplier--01.png](screenshots/lem-hilbert-transform-has-signum-fourier-multiplier--01.png)

Suggested repair: Use plain-language title wording, or a renderer-supported math title such as a properly delimited principal-value expression.

### 4. `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces` — Title

Pages: `fourier-multipliers-and-sobolev-characterisations`

Source line 4: title: "Integer-order W^{k,2} and H^k agree with equivalent norms"

Visual symptom: The heading shows literal braces and caret syntax in `W^{k,2}` and `H^k`; the title math is not typeset.

Screenshot evidence: [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces--01.png](screenshots/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces--01.png)

Suggested repair: Spell the spaces out in the title or use a math-aware title format.

### 5. `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces` — Proof technique

Pages: `fourier-multipliers-and-sobolev-characterisations`

Source line 171: **Proof technique:** compare the derivative-sum weight with the bracket weight and transfer the weighted tempered-distribution characterization. Throughout, $P_k(\xi)=\sum_{|\alpha|\le k}(2\pi)^{2|\alpha|}|\xi^\alpha|^2$ and $w_k(\xi)=\langle\xi\rangle^k$.

Visual symptom: The technique text is displayed as plain text, with the literal `$...$` delimiters and backslash commands (`\sum`, `\alpha`, `\le`, `\langle`, etc.) visible.

Screenshot evidence: [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces--03.png](screenshots/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces--03.png)

Suggested repair: Move the formulas into a renderer-supported section or write the technique field without LaTeX delimiters and commands.

### 6. `thm-marcel-riesz-conjugate-function-theorem` — Facts & Assumptions

Pages: `hilbert-and-riesz-transforms`

Source line 66: [[thm-fejer-convergence-in-lp]]

Visual symptom: The linked result title is displayed literally as “Fejer means converge in L^p for 1 <= p < infinity,” exposing raw caret and comparison notation in the citation label.

Screenshot evidence: [thm-marcel-riesz-conjugate-function-theorem--01.png](screenshots/thm-marcel-riesz-conjugate-function-theorem--01.png), [thm-marcel-riesz-conjugate-function-theorem--02.png](screenshots/thm-marcel-riesz-conjugate-function-theorem--02.png)

Suggested repair: Revise the linked item title to prose (“…for finite p”) or make the title renderer math-aware.

## Optional typography

### `lem-singular-kernel-sine-integral-under-countable-choice` — Title

Pages: `hilbert-and-riesz-transforms`

Source line 4: title: "The sine integral under Countable Choice: uniform bounds and the value pi/2"

Visual symptom: The title uses readable ASCII `pi/2` rather than a rendered or Unicode pi fraction; this is a display-style issue, not malformed body math.

Screenshot evidence: [lem-singular-kernel-sine-integral-under-countable-choice--01.png](screenshots/lem-singular-kernel-sine-integral-under-countable-choice--01.png)

Suggested repair: Use “π/2” or “one half of pi” in the title.

## Item coverage ledger

| Item ID | Status | Page memberships | Screenshot tiles | Sections reviewed |
|---|---|---|---:|---|
| `cex-carleson-maximal-operator-is-not-strong-type-one-one` | clean | `divergence-and-almost-everywhere-convergence-of-fourier-series-examples` | 2 | Statement refuted; Facts & Assumptions; Counterexample |
| `cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint` | clean | `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples` | 3 | Statement refuted; Facts & Assumptions; Counterexample |
| `cex-size-without-cancellation-does-not-give-a-principal-value-operator` | clean | `calderon-zygmund-decomposition-and-singular-integrals-examples` | 2 | Statement refuted; Facts & Assumptions; Counterexample |
| `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases` | clean | `pontryagin-duality-for-locally-compact-abelian-groups` | 2 | Statement; Facts & Assumptions; Proof |
| `cor-local-holder-regularity-implies-fourier-convergence-at-a-point` | clean | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | 2 | Statement; Facts & Assumptions; Proof |
| `cor-riesz-transforms-are-ltwo-bounded` | clean | `hilbert-and-riesz-transforms` | 2 | Statement; Facts & Assumptions; Proof |
| `def-cesaro-and-abel-means-of-a-fourier-series` | clean | `fejer-and-poisson-summability-of-fourier-series` | 2 | Definition |
| `def-full-rank-lattice-covolume-and-dual-lattice` | clean | `poisson-summation-sampling-and-lattice-duality` | 2 | Definition |
| `def-maximal-truncated-singular-integral` | clean | `calderon-zygmund-decomposition-and-singular-integrals` | 2 | Definition |
| `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution` | clean | `real-hardy-spaces-maximal-functions-and-atoms` | 2 | Definition |
| `def-unitary-discrete-fourier-transform-on-z-mod-n` | clean | `finite-fourier-analysis-and-the-fast-fourier-transform` | 2 | Definition; Remarks |
| `ex-annihilator-of-a-closed-subgroup-of-euclidean-space` | clean | `pontryagin-duality-for-locally-compact-abelian-groups-examples` | 3 | Example; Facts & Assumptions; Verification |
| `ex-fejer-means-of-a-single-character` | clean | `fejer-and-poisson-summability-of-fourier-series-examples` | 2 | Example; Facts & Assumptions; Verification |
| `ex-hardy-critical-and-subcritical-gaussian-regimes` | clean | `uncertainty-principles-for-fourier-analysis-examples` | 2 | Example; Facts & Assumptions; Verification |
| `ex-negative-sobolev-order-containing-a-dirac-mass` | findings | `fourier-multipliers-and-sobolev-characterisations-examples` | 4 | Statement; Facts & Assumptions; Proof |
| `ex-riesz-product-for-three-powers-of-three` | clean | `lacunary-fourier-series-and-sidon-sets-examples` | 2 | Example; Facts & Assumptions; Verification |
| `ex-unitary-dft-for-n-equals-one-and-two` | clean | `finite-fourier-analysis-and-the-fast-fourier-transform-examples` | 3 | Example; Facts & Assumptions; Verification; Remarks |
| `lem-annihilator-reverses-inclusion-and-double-annihilator-closes` | clean | `pontryagin-duality-for-locally-compact-abelian-groups` | 2 | Statement; Facts & Assumptions; Proof |
| `lem-bochner-functional-extends-and-has-a-radon-representing-measure` | clean | `bochner-inversion-and-plancherel-on-lca-groups` | 3 | Statement; Facts & Assumptions; Proof |
| `lem-carleson-signed-tree-weak-one-one-estimate` | clean | `carleson-hunt-time-frequency-theorem` | 3 | Statement; Facts & Assumptions; Proof |
| `lem-compact-open-character-group-operations-are-continuous` | clean | `character-groups-and-elementary-lca-duals` | 3 | Statement; Facts & Assumptions; Proof |
| `lem-cz-good-part-has-controlled-ltwo-image` | clean | `calderon-zygmund-decomposition-and-singular-integrals` | 2 | Statement; Facts & Assumptions; Proof |
| `lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control` | clean | `calderon-zygmund-decomposition-and-singular-integrals` | 3 | Statement; Facts & Assumptions; Proof |
| `lem-finite-rademacher-blocks-are-equidistributed` | clean | `littlewood-paley-theory-and-square-functions` | 2 | Statement; Facts & Assumptions; Proof |
| `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform` | clean | `uncertainty-principles-for-fourier-analysis` | 3 | Statement; Facts & Assumptions; Proof |
| `lem-hilbert-transform-has-signum-fourier-multiplier` | findings | `hilbert-and-riesz-transforms` | 3 | Statement; Facts & Assumptions; Proof |
| `lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set` | clean | `kolmogorov-block-construction-and-almost-everywhere-divergence` | 2 | Statement; Facts & Assumptions; Proof |
| `lem-lca-lone-convolution-is-a-commutative-banach-star-algebra` | findings | `bochner-inversion-and-plancherel-on-lca-groups` | 4 | Statement; Facts & Assumptions; Proof |
| `lem-localized-curved-patch-measure-transform-decay` | clean | `fourier-restriction-and-the-stein-tomas-theorem` | 2 | Statement; Facts & Assumptions; Proof |
| `lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation` | clean | `calderon-zygmund-decomposition-and-singular-integrals` | 2 | Statement; Facts & Assumptions; Proof |
| `lem-power-decay-weights-are-doubling` | clean | `muckenhoupt-weights-and-weighted-estimates` | 2 | Statement; Facts & Assumptions; Proof |
| `lem-riesz-product-for-a-hadamard-lacunary-set` | clean | `lacunary-fourier-series-and-sidon-sets` | 2 | Statement; Facts & Assumptions; Proof |
| `lem-singular-kernel-sine-integral-under-countable-choice` | findings | `hilbert-and-riesz-transforms` | 4 | Statement; Facts & Assumptions; Proof |
| `lem-symmetric-difference-formula-for-fourier-partial-sums` | clean | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | 2 | Statement; Facts & Assumptions; Proof |
| `lem-weak-derivatives-are-polynomial-fourier-multipliers` | clean | `fourier-multipliers-and-sobolev-characterisations` | 2 | Statement; Facts & Assumptions; Proof; Sources |
| `rem-heisenberg-uncertainty-is-owned-by-functional-analysis` | clean | `uncertainty-principles-for-fourier-analysis` | 2 | Remarks |
| `rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one` | clean | `muckenhoupt-weights-and-weighted-estimates` | 2 | Remark |
| `thm-calderon-zygmund-operators-map-linfinity-to-bmo` | clean | `bmo-john-nirenberg-and-h1-duality` | 3 | Statement; Facts & Assumptions; Proof |
| `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` | clean | `pontryagin-duality-for-locally-compact-abelian-groups` | 3 | Statement; Facts & Assumptions; Proof |
| `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces` | findings | `fourier-multipliers-and-sobolev-characterisations` | 4 | Statement; Facts & Assumptions; Proof |
| `thm-john-nirenberg-exponential-inequality` | clean | `bmo-john-nirenberg-and-h1-duality` | 2 | Statement; Facts & Assumptions; Proof |
| `thm-marcel-riesz-conjugate-function-theorem` | findings | `hilbert-and-riesz-transforms` | 4 | Statement; Facts & Assumptions; Proof |
| `thm-qualitative-compact-support-uncertainty-principle` | clean | `uncertainty-principles-for-fourier-analysis` | 2 | Statement; Facts & Assumptions; Proof |
| `thm-support-measure-uncertainty-inequality` | clean | `uncertainty-principles-for-fourier-analysis` | 2 | Statement; Facts & Assumptions; Proof |

## Limits

This is a visual rendering audit, not a mathematical proof review. The revision-1 captures were discarded after the screenshotter defect was found; all ledger evidence points to revision 2. Titles and Proof technique text are plain-text UI fields in this preview, which accounts for several confirmed raw-notation findings.
