# Fourier Analysis LaTeX visual audit — lane 04

Reviewed 44 assigned items against their revision-2 local SSR/CSS screenshots. Every tile in each screenshot receipt was opened at original resolution; the source snapshot was used only to identify exact line numbers and excerpts.

## Findings

1. **cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions — Title**, source line 4 (confirmed). Pages: bochner-inversion-and-plancherel-on-lca-groups-examples.
   Source: `title: LCA Fourier inversion is not an everywhere statement for arbitrary L^1 functions`
   Visual: The item heading visibly prints the literal L^1 instead of a typeset exponent. Screenshot: `screenshots/cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions--01.png`
   Suggested repair: Change the title notation to $L^1$.

2. **lem-a-p-distribution-decay-from-maximal-cubes — Title**, source line 4 (confirmed). Pages: muckenhoupt-weights-and-weighted-estimates.
   Source: `title: Distribution decay from maximal cubes for A_p weights`
   Visual: The item heading visibly prints A_p with a literal underscore and p, rather than a subscript. Screenshot: `screenshots/lem-a-p-distribution-decay-from-maximal-cubes--01.png`
   Suggested repair: Change the title notation to $A_p$.

3. **lem-lca-transform-range-is-dense-in-ltwo-of-the-dual — Title**, source line 4 (confirmed). Pages: pontryagin-duality-for-locally-compact-abelian-groups.
   Source: `title: The Plancherel transform range is dense in L^2 of the dual`
   Visual: The item heading visibly prints the literal L^2 instead of a typeset exponent. Screenshot: `screenshots/lem-lca-transform-range-is-dense-in-ltwo-of-the-dual--01.png`
   Suggested repair: Change the title notation to $L^2$.

4. **lem-fourier-pairing-for-a-finite-measure-and-schwartz-data — Proof**, source line 77 (confirmed). Pages: fourier-restriction-and-the-stein-tomas-theorem.
   Source: `**Proof technique:** direct; the pairing identity is Fubini applied to the product $\mathbb R^n\times\mathbb R^n$ against $\lambda_n\times\mu$...`
   Visual: The Proof technique banner prints the dollar signs and backslashes literally in the mathematical spans. Screenshot: `screenshots/lem-fourier-pairing-for-a-finite-measure-and-schwartz-data--03.png`
   Suggested repair: Remove inline math delimiters from the plain-text technique metadata or render that field through the math-aware Markdown path.

5. **thm-reverse-holder-self-improvement-for-a-p-weights — Title**, source line 4 (confirmed). Pages: muckenhoupt-weights-and-weighted-estimates.
   Source: `title: Reverse Holder self-improvement for A_p weights`
   Visual: The item heading visibly prints A_p with a literal underscore and p, rather than a subscript. Screenshot: `screenshots/thm-reverse-holder-self-improvement-for-a-p-weights--01.png`
   Suggested repair: Change the title notation to $A_p$.

6. **cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity — Title**, source line 4 (typography). Pages: hilbert-and-riesz-transforms.
   Source: `title: The Hilbert transform is an L2 isometry and squares to minus the identity`
   Visual: The heading uses plain L2 where the surrounding statement uses typeset L^2. Screenshot: `screenshots/cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity--01.png`
   Suggested repair: For consistent mathematical typography, set the title as The Hilbert transform is an $L^2$ isometry and squares to minus the identity.

7. **lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality — Title**, source line 4 (typography). Pages: calderon-zygmund-decomposition-and-singular-integrals.
   Source: `title: The Lp range: interpolation below two and adjoint duality above two`
   Visual: The heading uses plain Lp for the function-space notation. Screenshot: `screenshots/lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality--01.png`
   Suggested repair: Set the title notation as $L^p$.

8. **lem-hone-functional-has-compatible-local-ltwo-representatives — Title**, source line 4 (typography). Pages: bmo-john-nirenberg-and-h1-duality.
   Source: `title: Bounded H1 functionals have compatible local L2 representatives`
   Visual: The heading uses plain H1 and L2 for the function-space notation. Screenshot: `screenshots/lem-hone-functional-has-compatible-local-ltwo-representatives--01.png`
   Suggested repair: Set the title notation as $H^1$ and $L^2$.

9. **lem-ltwo-fourier-multiplier-bound — Title**, source line 4 (typography). Pages: fourier-multipliers-and-sobolev-characterisations.
   Source: `title: Exact L2 Fourier multiplier norm`
   Visual: The heading uses plain L2 for the function-space notation. Screenshot: `screenshots/lem-ltwo-fourier-multiplier-bound--01.png`
   Suggested repair: Set the title notation as $L^2$.

10. **thm-lacunary-lp-norm-equivalence — Title**, source line 4 (typography). Pages: lacunary-fourier-series-and-sidon-sets.
   Source: `title: L-p norm equivalence for finite Hadamard-lacunary sums`
   Visual: The heading prints L-p with a hyphen rather than the usual function-space notation. Screenshot: `screenshots/thm-lacunary-lp-norm-equivalence--01.png`
   Suggested repair: Set the title notation as $L^p$.

## Coverage ledger

| Item | Status | Page membership | Screenshot tiles | Sections visually checked |
|---|---|---|---|---|
| `cex-an-hone-atom-need-not-be-smooth` | clean | real-hardy-spaces-maximal-functions-and-atoms-examples | `screenshots/cex-an-hone-atom-need-not-be-smooth--01.png`, `screenshots/cex-an-hone-atom-need-not-be-smooth--02.png` | Title, Statement refuted, Facts & Assumptions, Counterexample |
| `cex-continuous-function-with-divergent-fourier-series-at-a-point` | clean | divergence-and-almost-everywhere-convergence-of-fourier-series | `screenshots/cex-continuous-function-with-divergent-fourier-series-at-a-point--01.png`, `screenshots/cex-continuous-function-with-divergent-fourier-series-at-a-point--02.png` | Title, Statement refuted, Facts & Assumptions, Counterexample |
| `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions` | findings | bochner-inversion-and-plancherel-on-lca-groups-examples | `screenshots/cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions--01.png`, `screenshots/cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions--02.png` | Title, Statement, Facts & Assumptions, Counterexample |
| `cex-undersampling-identifies-two-distinct-pure-frequencies` | clean | poisson-summation-sampling-and-lattice-duality-examples | `screenshots/cex-undersampling-identifies-two-distinct-pure-frequencies--01.png`, `screenshots/cex-undersampling-identifies-two-distinct-pure-frequencies--02.png` | Title, Statement refuted, Facts & Assumptions, Counterexample |
| `cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity` | findings | hilbert-and-riesz-transforms | `screenshots/cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity--01.png`, `screenshots/cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series` | clean | absolute-convergence-and-the-wiener-algebra | `screenshots/cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series--01.png`, `screenshots/cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `def-axis-parallel-cube-averages-and-cube-maximal-functions` | clean | muckenhoupt-weights-and-weighted-estimates | `screenshots/def-axis-parallel-cube-averages-and-cube-maximal-functions--01.png`, `screenshots/def-axis-parallel-cube-averages-and-cube-maximal-functions--02.png` | Title, Definition |
| `def-density-size-and-tree-count-for-carleson-tiles` | clean | carleson-hunt-time-frequency-theorem | `screenshots/def-density-size-and-tree-count-for-carleson-tiles--01.png`, `screenshots/def-density-size-and-tree-count-for-carleson-tiles--02.png` | Title, Definition |
| `def-inhomogeneous-dyadic-frequency-partition` | clean | littlewood-paley-theory-and-square-functions | `screenshots/def-inhomogeneous-dyadic-frequency-partition--01.png`, `screenshots/def-inhomogeneous-dyadic-frequency-partition--02.png` | Title, Definition |
| `def-normalized-sinc-function` | clean | poisson-summation-sampling-and-lattice-duality | `screenshots/def-normalized-sinc-function--01.png`, `screenshots/def-normalized-sinc-function--02.png` | Title, Definition |
| `def-riesz-transforms-on-euclidean-space` | clean | hilbert-and-riesz-transforms | `screenshots/def-riesz-transforms-on-euclidean-space--01.png`, `screenshots/def-riesz-transforms-on-euclidean-space--02.png` | Title, Definition |
| `def-wiener-algebra-of-the-circle` | clean | absolute-convergence-and-the-wiener-algebra | `screenshots/def-wiener-algebra-of-the-circle--01.png`, `screenshots/def-wiener-algebra-of-the-circle--02.png` | Title, Definition |
| `ex-calderon-zygmund-decomposition-of-an-interval-indicator` | clean | calderon-zygmund-decomposition-and-singular-integrals-examples | `screenshots/ex-calderon-zygmund-decomposition-of-an-interval-indicator--01.png`, `screenshots/ex-calderon-zygmund-decomposition-of-an-interval-indicator--02.png` | Title, Example, Facts & Assumptions, Verification |
| `ex-fourier-partial-sum-operators-and-uniform-boundedness` | clean | divergence-and-almost-everywhere-convergence-of-fourier-series-examples | `screenshots/ex-fourier-partial-sum-operators-and-uniform-boundedness--01.png`, `screenshots/ex-fourier-partial-sum-operators-and-uniform-boundedness--02.png` | Title, Example, Facts & Assumptions, Verification |
| `ex-hilbert-transform-of-the-poisson-kernel` | clean | hilbert-and-riesz-transforms-examples | `screenshots/ex-hilbert-transform-of-the-poisson-kernel--01.png`, `screenshots/ex-hilbert-transform-of-the-poisson-kernel--02.png`, `screenshots/ex-hilbert-transform-of-the-poisson-kernel--03.png`, `screenshots/ex-hilbert-transform-of-the-poisson-kernel--04.png`, `screenshots/ex-hilbert-transform-of-the-poisson-kernel--05.png`, `screenshots/ex-hilbert-transform-of-the-poisson-kernel--06.png` | Title, Statement, Facts & Assumptions, Proof |
| `ex-pontryagin-dual-of-euclidean-space` | clean | character-groups-and-elementary-lca-duals-examples | `screenshots/ex-pontryagin-dual-of-euclidean-space--01.png`, `screenshots/ex-pontryagin-dual-of-euclidean-space--02.png`, `screenshots/ex-pontryagin-dual-of-euclidean-space--03.png` | Title, Example, Facts & Assumptions, Verification |
| `ex-shannon-reconstruction-of-a-sinc-function` | clean | poisson-summation-sampling-and-lattice-duality-examples | `screenshots/ex-shannon-reconstruction-of-a-sinc-function--01.png`, `screenshots/ex-shannon-reconstruction-of-a-sinc-function--02.png` | Title, Example, Facts & Assumptions, Verification |
| `lem-a-p-distribution-decay-from-maximal-cubes` | findings | muckenhoupt-weights-and-weighted-estimates | `screenshots/lem-a-p-distribution-decay-from-maximal-cubes--01.png`, `screenshots/lem-a-p-distribution-decay-from-maximal-cubes--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval` | clean | poisson-summation-sampling-and-lattice-duality | `screenshots/lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval--01.png`, `screenshots/lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality` | findings | calderon-zygmund-decomposition-and-singular-integrals | `screenshots/lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality--01.png`, `screenshots/lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-character-evaluation-pairing-is-jointly-continuous` | clean | character-groups-and-elementary-lca-duals | `screenshots/lem-character-evaluation-pairing-is-jointly-continuous--01.png`, `screenshots/lem-character-evaluation-pairing-is-jointly-continuous--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean` | clean | pontryagin-duality-for-locally-compact-abelian-groups | `screenshots/lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean--01.png`, `screenshots/lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` | clean | pontryagin-duality-for-locally-compact-abelian-groups | `screenshots/lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group--01.png`, `screenshots/lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group--02.png`, `screenshots/lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group--03.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition` | clean | littlewood-paley-theory-and-square-functions | `screenshots/lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition--01.png`, `screenshots/lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-fourier-pairing-for-a-finite-measure-and-schwartz-data` | findings | fourier-restriction-and-the-stein-tomas-theorem | `screenshots/lem-fourier-pairing-for-a-finite-measure-and-schwartz-data--01.png`, `screenshots/lem-fourier-pairing-for-a-finite-measure-and-schwartz-data--02.png`, `screenshots/lem-fourier-pairing-for-a-finite-measure-and-schwartz-data--03.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-hadamard-gaps-bound-additive-representations` | clean | lacunary-fourier-series-and-sidon-sets | `screenshots/lem-hadamard-gaps-bound-additive-representations--01.png`, `screenshots/lem-hadamard-gaps-bound-additive-representations--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-hone-functional-has-compatible-local-ltwo-representatives` | findings | bmo-john-nirenberg-and-h1-duality | `screenshots/lem-hone-functional-has-compatible-local-ltwo-representatives--01.png`, `screenshots/lem-hone-functional-has-compatible-local-ltwo-representatives--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-lattice-fundamental-parallelotope-partitions-euclidean-space` | clean | poisson-summation-sampling-and-lattice-duality | `screenshots/lem-lattice-fundamental-parallelotope-partitions-euclidean-space--01.png`, `screenshots/lem-lattice-fundamental-parallelotope-partitions-euclidean-space--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` | findings | pontryagin-duality-for-locally-compact-abelian-groups | `screenshots/lem-lca-transform-range-is-dense-in-ltwo-of-the-dual--01.png`, `screenshots/lem-lca-transform-range-is-dense-in-ltwo-of-the-dual--02.png`, `screenshots/lem-lca-transform-range-is-dense-in-ltwo-of-the-dual--03.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-ltwo-fourier-multiplier-bound` | findings | fourier-multipliers-and-sobolev-characterisations | `screenshots/lem-ltwo-fourier-multiplier-bound--01.png`, `screenshots/lem-ltwo-fourier-multiplier-bound--02.png`, `screenshots/lem-ltwo-fourier-multiplier-bound--03.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-pointwise-limits-of-characters-are-characters` | clean | character-groups-and-elementary-lca-duals | `screenshots/lem-pointwise-limits-of-characters-are-characters--01.png`, `screenshots/lem-pointwise-limits-of-characters-are-characters--02.png`, `screenshots/lem-pointwise-limits-of-characters-are-characters--03.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-radix-two-even-odd-dft-factorisation` | clean | finite-fourier-analysis-and-the-fast-fourier-transform | `screenshots/lem-radix-two-even-odd-dft-factorisation--01.png`, `screenshots/lem-radix-two-even-odd-dft-factorisation--02.png`, `screenshots/lem-radix-two-even-odd-dft-factorisation--03.png` | Title, Statement, Facts & Assumptions, Proof, Remarks |
| `lem-schwartz-deconvolution-along-dyadic-dilations` | clean | real-hardy-spaces-maximal-functions-and-atoms | `screenshots/lem-schwartz-deconvolution-along-dyadic-dilations--01.png`, `screenshots/lem-schwartz-deconvolution-along-dyadic-dilations--02.png`, `screenshots/lem-schwartz-deconvolution-along-dyadic-dilations--03.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-spherical-cap-and-dual-slab-scales` | clean | fourier-restriction-and-the-stein-tomas-theorem | `screenshots/lem-spherical-cap-and-dual-slab-scales--01.png`, `screenshots/lem-spherical-cap-and-dual-slab-scales--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform` | clean | fourier-restriction-and-the-stein-tomas-theorem | `screenshots/lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform--01.png`, `screenshots/lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space` | clean | real-hardy-spaces-maximal-functions-and-atoms | `screenshots/lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space--01.png`, `screenshots/lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space--02.png`, `screenshots/lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space--03.png` | Title, Statement, Facts & Assumptions, Proof |
| `rem-mihlin-does-not-assert-strong-endpoint-bounds` | clean | calderon-zygmund-decomposition-and-singular-integrals | `screenshots/rem-mihlin-does-not-assert-strong-endpoint-bounds--01.png`, `screenshots/rem-mihlin-does-not-assert-strong-endpoint-bounds--02.png` | Title, Statement, Remarks |
| `thm-bernstein-absolute-convergence-theorem` | clean | absolute-convergence-and-the-wiener-algebra | `screenshots/thm-bernstein-absolute-convergence-theorem--01.png`, `screenshots/thm-bernstein-absolute-convergence-theorem--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `thm-cesaro-summability-implies-abel-summability` | clean | fejer-and-poisson-summability-of-fourier-series | `screenshots/thm-cesaro-summability-implies-abel-summability--01.png`, `screenshots/thm-cesaro-summability-implies-abel-summability--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `thm-fejer-theorem-for-pointwise-midpoint-values` | clean | fejer-and-poisson-summability-of-fourier-series | `screenshots/thm-fejer-theorem-for-pointwise-midpoint-values--01.png`, `screenshots/thm-fejer-theorem-for-pointwise-midpoint-values--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `thm-hadamard-lacunary-sets-are-sidon` | clean | lacunary-fourier-series-and-sidon-sets | `screenshots/thm-hadamard-lacunary-sets-are-sidon--01.png`, `screenshots/thm-hadamard-lacunary-sets-are-sidon--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `thm-lacunary-lp-norm-equivalence` | findings | lacunary-fourier-series-and-sidon-sets | `screenshots/thm-lacunary-lp-norm-equivalence--01.png`, `screenshots/thm-lacunary-lp-norm-equivalence--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `thm-plancherel-theorem-for-lca-groups` | clean | pontryagin-duality-for-locally-compact-abelian-groups | `screenshots/thm-plancherel-theorem-for-lca-groups--01.png`, `screenshots/thm-plancherel-theorem-for-lca-groups--02.png` | Title, Statement, Facts & Assumptions, Proof |
| `thm-reverse-holder-self-improvement-for-a-p-weights` | findings | muckenhoupt-weights-and-weighted-estimates | `screenshots/thm-reverse-holder-self-improvement-for-a-p-weights--01.png`, `screenshots/thm-reverse-holder-self-improvement-for-a-p-weights--02.png` | Title, Statement, Facts & Assumptions, Proof |

## Scope notes

- No content edits were made. The SSR screenshots exposed each item’s rendered title and Markdown sections, including proof, remarks, and examples where present. No separate `Scratch` section appeared in any lane-04 snapshot or rendered item card, and no TikZ/TikZ-CD diagram was present in these assigned items.
- The confirmed findings are raw math notation that displays literally. The typography entries are optional title consistency improvements; they do not show broken Markdown math delimiters.
- All assigned items had revision-2 screenshot receipts and all listed tiles were visually reviewed. KaTeX receipt errors were not used as a substitute for visual review.
