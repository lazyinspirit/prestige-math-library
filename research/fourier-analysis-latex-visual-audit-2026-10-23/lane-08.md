# Fourier Analysis visual LaTeX audit — lane 08

## Scope and method

Reviewed all 44 assigned items in lane 08 using every tile listed by each `capture_revision: 2` screenshot receipt. The images are the local app SSR/CSS render supplied for this audit. Scratch was left open in the capture setup. I compared any reported source spans with the corresponding immutable Markdown snapshots. No content files were changed.

Confirmed malformed/raw mathematical notation is separated below from the one uncertain renderer/display discrepancy. No optional typography-only issues are elevated as math defects.

## Findings

### Confirmed: raw notation in `lem-carleson-real-line-to-torus-transfer`

- Pages: `carleson-hunt-time-frequency-theorem`.
- Sections: Statement (line 27), Facts & Assumptions (lines 33 and 39), Proof (lines 55, 57, and 59).
- Source excerpts: line 27 has `Lp` and `1<p<infinity`; line 33 has `phi`, `psi`, and `[-1/8,1/8]`; line 39 has `Lp(T)` and `1<=p<infinity`; line 55 repeats `1<p<infinity`; line 57 includes `a_k`, `k=j`, `0<epsilon<1`, and `N>=0`; line 59 includes `0<epsilon<=1` and `epsilon` in prose.
- Visual symptom: these formula spans render as ordinary raw ASCII words/operators instead of math, repeatedly across the statement, facts, and proof.
- Evidence: `screenshots/lem-carleson-real-line-to-torus-transfer--01.png` through `--03.png`.
- Suggested repair: mark mathematical spans as inline math and use Greek letters, subscripts, and comparison symbols where intended.

### Confirmed: proof technique label for `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero`

- Page: `uncertainty-principles-for-fourier-analysis`.
- Snapshot source line 51 reads `**Proof technique:** induction on $n$`. The screenshot technique header appears as `INDUCTION ON $N$`, exposing the literal dollar delimiters and uppercasing the variable. The source is correct; the renderer inserts the proof-technique string as plain text.
- Evidence: `screenshots/lem-separately-holomorphic-vanishing-on-a-real-box-is-zero--01.png` and `--02.png`.
- Suggested repair: render proof-technique strings with the intended math handling (or strip delimiters while preserving variable case) so inline math is not shown literally.

## Per-item coverage ledger

Every row below has a corresponding receipt and all listed tiles were opened at original resolution. The JSON ledger records each exact tile path and the source headings reviewed.

| Item | Result | Pages | Sections checked | Capture receipt |
|---|---|---|---|---|
| `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity` | clean | calderon-zygmund-decomposition-and-singular-integrals-examples | Statement refuted, Facts & Assumptions, Counterexample | `screenshots/cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity.json` (2 tiles) |
| `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise` | clean | fourier-restriction-and-the-stein-tomas-theorem-examples | Statement refuted, Facts & Assumptions, Counterexample | `screenshots/cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise.json` (2 tiles) |
| `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint` | clean | riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples | Statement refuted, Facts & Assumptions, Counterexample | `screenshots/cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint.json` (4 tiles) |
| `cor-dimensional-heisenberg-uncertainty-inequality` | clean | uncertainty-principles-for-fourier-analysis | Statement, Facts & Assumptions, Proof | `screenshots/cor-dimensional-heisenberg-uncertainty-inequality.json` (2 tiles) |
| `cor-lacunary-series-lp-membership-is-coefficient-ell-two` | clean | lacunary-fourier-series-and-sidon-sets | Statement, Facts & Assumptions, Proof | `screenshots/cor-lacunary-series-lp-membership-is-coefficient-ell-two.json` (2 tiles) |
| `cor-real-hardy-space-equals-lp-for-p-greater-than-one` | clean | real-hardy-spaces-maximal-functions-and-atoms | Statement, Facts & Assumptions, Proof | `screenshots/cor-real-hardy-space-equals-lp-for-p-greater-than-one.json` (2 tiles) |
| `def-carleson-operator-and-measurable-linearisation` | clean | carleson-hunt-time-frequency-theorem | Definition | `screenshots/def-carleson-operator-and-measurable-linearisation.json` (2 tiles) |
| `def-fourier-restriction-and-adjoint-extension-operators` | clean | fourier-restriction-and-the-stein-tomas-theorem | Definition | `screenshots/def-fourier-restriction-and-adjoint-extension-operators.json` (2 tiles) |
| `def-lp-fourier-multiplier-and-multiplier-norm` | clean | fourier-multipliers-and-sobolev-characterisations | Definition | `screenshots/def-lp-fourier-multiplier-and-multiplier-norm.json` (2 tiles) |
| `def-positive-definite-function-on-an-abelian-group` | clean | bochner-inversion-and-plancherel-on-lca-groups | Definition | `screenshots/def-positive-definite-function-on-an-abelian-group.json` (2 tiles) |
| `def-translation-invariant-fourier-multiplier-on-schwartz-space` | clean | fourier-multipliers-and-sobolev-characterisations | Definition | `screenshots/def-translation-invariant-fourier-multiplier-on-schwartz-space.json` (2 tiles) |
| `ex-a-trigonometric-polynomial-in-the-wiener-algebra` | clean | absolute-convergence-and-the-wiener-algebra-examples | Example, Facts & Assumptions, Verification | `screenshots/ex-a-trigonometric-polynomial-in-the-wiener-algebra.json` (2 tiles) |
| `ex-dual-lattice-and-covolume-for-a-diagonal-scaling` | clean | poisson-summation-sampling-and-lattice-duality-examples | Example, Facts & Assumptions, Verification | `screenshots/ex-dual-lattice-and-covolume-for-a-diagonal-scaling.json` (2 tiles) |
| `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` | clean | bochner-inversion-and-plancherel-on-lca-groups-examples | Statement, Facts & Assumptions, Proof | `screenshots/ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual.json` (2 tiles) |
| `ex-localisation-for-functions-equal-on-an-arc` | clean | dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples | Example, Facts & Assumptions, Verification | `screenshots/ex-localisation-for-functions-equal-on-an-arc.json` (2 tiles) |
| `ex-powers-of-two-form-a-hadamard-lacunary-sequence` | clean | lacunary-fourier-series-and-sidon-sets-examples | Example, Facts & Assumptions, Verification | `screenshots/ex-powers-of-two-form-a-hadamard-lacunary-sequence.json` (2 tiles) |
| `ex-translation-and-differentiation-multiplier-symbols` | clean | fourier-multipliers-and-sobolev-characterisations-examples | Example, Facts & Assumptions, Verification | `screenshots/ex-translation-and-differentiation-multiplier-symbols.json` (4 tiles) |
| `lem-absolutely-summable-fourier-coefficients-give-uniform-convergence` | clean | absolute-convergence-and-the-wiener-algebra | Statement, Facts & Assumptions, Proof | `screenshots/lem-absolutely-summable-fourier-coefficients-give-uniform-convergence.json` (2 tiles) |
| `lem-bmo-classes-are-determined-by-their-atom-pairings` | clean | bmo-john-nirenberg-and-h1-duality | Statement, Facts & Assumptions, Proof | `screenshots/lem-bmo-classes-are-determined-by-their-atom-pairings.json` (2 tiles) |
| `lem-carleson-real-line-to-torus-transfer` | findings | carleson-hunt-time-frequency-theorem | Statement, Facts & Assumptions, Proof | `screenshots/lem-carleson-real-line-to-torus-transfer.json` (3 tiles) |
| `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel` | clean | dirichlet-kernel-localisation-and-pointwise-fourier-convergence | Statement, Facts & Assumptions, Proof | `screenshots/lem-closed-form-and-size-bounds-for-the-dirichlet-kernel.json` (2 tiles) |
| `lem-cotlar-inequality-for-maximal-truncations` | clean | calderon-zygmund-decomposition-and-singular-integrals | Statement, Facts & Assumptions, Proof | `screenshots/lem-cotlar-inequality-for-maximal-truncations.json` (3 tiles) |
| `lem-dyadic-cubes-all-generations-partition-and-nesting` | clean | calderon-zygmund-decomposition-and-singular-integrals | Statement, Facts & Assumptions, Proof | `screenshots/lem-dyadic-cubes-all-generations-partition-and-nesting.json` (3 tiles) |
| `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product` | clean | finite-fourier-analysis-and-the-fast-fourier-transform | Statement, Facts & Assumptions, Proof, Remarks | `screenshots/lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product.json` (2 tiles) |
| `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite` | clean | bochner-inversion-and-plancherel-on-lca-groups | Statement, Facts & Assumptions, Proof | `screenshots/lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite.json` (2 tiles) |
| `lem-hedberg-pointwise-inequality` | clean | riesz-potentials-and-the-hardy-littlewood-sobolev-inequality | Statement, Facts & Assumptions, Proof | `screenshots/lem-hedberg-pointwise-inequality.json` (3 tiles) |
| `lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite` | clean | muckenhoupt-weights-and-weighted-estimates | Statement, Facts & Assumptions, Proof | `screenshots/lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite.json` (2 tiles) |
| `lem-lca-haar-measure-is-inversion-invariant` | clean | bochner-inversion-and-plancherel-on-lca-groups | Statement, Facts & Assumptions, Proof | `screenshots/lem-lca-haar-measure-is-inversion-invariant.json` (3 tiles) |
| `lem-local-compact-subgroups-of-hausdorff-groups-are-closed` | clean | pontryagin-duality-for-locally-compact-abelian-groups | Statement, Facts & Assumptions, Proof, Remarks | `screenshots/lem-local-compact-subgroups-of-hausdorff-groups-are-closed.json` (3 tiles) |
| `lem-maximal-dyadic-subcubes-of-a-cube-at-a-height` | clean | muckenhoupt-weights-and-weighted-estimates | Statement, Facts & Assumptions, Proof | `screenshots/lem-maximal-dyadic-subcubes-of-a-cube-at-a-height.json` (2 tiles) |
| `lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core` | clean | bochner-inversion-and-plancherel-on-lca-groups | Statement, Facts & Assumptions, Proof | `screenshots/lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core.json` (3 tiles) |
| `lem-reverse-holder-from-a-distribution-estimate` | clean | muckenhoupt-weights-and-weighted-estimates | Statement, Facts & Assumptions, Proof | `screenshots/lem-reverse-holder-from-a-distribution-estimate.json` (2 tiles) |
| `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero` | findings | uncertainty-principles-for-fourier-analysis | Statement, Facts & Assumptions, Proof | `screenshots/lem-separately-holomorphic-vanishing-on-a-real-box-is-zero.json` (2 tiles) |
| `lem-step-functions-have-vanishing-torus-fourier-coefficients` | clean | dirichlet-kernel-localisation-and-pointwise-fourier-convergence | Statement, Facts & Assumptions, Proof | `screenshots/lem-step-functions-have-vanishing-torus-fourier-coefficients.json` (2 tiles) |
| `lem-van-der-corput-oscillatory-integral-estimate` | clean | fourier-restriction-and-the-stein-tomas-theorem | Statement, Facts & Assumptions, Proof | `screenshots/lem-van-der-corput-oscillatory-integral-estimate.json` (2 tiles) |
| `rem-carleson-hunt-does-not-include-the-lone-endpoint` | clean | carleson-hunt-time-frequency-theorem-examples | Statement, Facts & Assumptions, Proof | `screenshots/rem-carleson-hunt-does-not-include-the-lone-endpoint.json` (2 tiles) |
| `rem-the-lone-endpoint-is-excluded-from-carleson-hunt` | clean | divergence-and-almost-everywhere-convergence-of-fourier-series | Endpoint interpretation | `screenshots/rem-the-lone-endpoint-is-excluded-from-carleson-hunt.json` (2 tiles) |
| `thm-calderon-zygmund-operators-are-bounded-on-weighted-lp` | clean | muckenhoupt-weights-and-weighted-estimates | Statement, Facts & Assumptions, Proof | `screenshots/thm-calderon-zygmund-operators-are-bounded-on-weighted-lp.json` (4 tiles) |
| `thm-dini-pointwise-convergence-criterion-for-fourier-series` | clean | dirichlet-kernel-localisation-and-pointwise-fourier-convergence | Statement, Facts & Assumptions, Proof | `screenshots/thm-dini-pointwise-convergence-criterion-for-fourier-series.json` (2 tiles) |
| `thm-finite-parseval-and-plancherel` | clean | finite-fourier-analysis-and-the-fast-fourier-transform | Statement, Facts & Assumptions, Proof, Remarks | `screenshots/thm-finite-parseval-and-plancherel.json` (2 tiles) |
| `thm-hausdorff-young-for-periodic-fourier-coefficients` | clean | fourier-multipliers-and-sobolev-characterisations | Statement, Facts & Assumptions, Proof | `screenshots/thm-hausdorff-young-for-periodic-fourier-coefficients.json` (2 tiles) |
| `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces` | clean | littlewood-paley-theory-and-square-functions | Statement, Facts & Assumptions, Proof | `screenshots/thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces.json` (3 tiles) |
| `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` | clean | pontryagin-duality-for-locally-compact-abelian-groups | Statement, Facts & Assumptions, Proof | `screenshots/thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator.json` (2 tiles) |
| `thm-shannon-sampling-for-bandlimited-ltwo-functions` | clean | poisson-summation-sampling-and-lattice-duality | Statement, Facts & Assumptions, Proof | `screenshots/thm-shannon-sampling-for-bandlimited-ltwo-functions.json` (3 tiles) |

## Limitations

The proof-technique finding is a renderer delimiter leak confirmed against the frozen snapshot; this lane did not alter content. Visual cleanliness refers only to the captured item render and does not certify mathematical correctness or other viewport states.
