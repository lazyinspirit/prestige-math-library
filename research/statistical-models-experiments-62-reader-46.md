# Step 3a reader report — batch 46

Run: `statistical-models-experiments-62`  
Batch: `46`  
Reader label: `reader-46`

## Opened inventory

Pages:

- `library/statistical-models-and-experiments/spatial-field-summary-estimators.md`
- `library/statistical-models-and-experiments/spatial-field-summary-estimators-examples.md`

Assigned items, followed in their supplier-before-consumer order:

- A page, mean-estimation branch: `def-van-hove-window-sequence`, `def-spatial-window-average`, `thm-van-hove-window-average-l2-consistency`.
- A page, lattice summaries: `def-lattice-covariance-and-variogram-estimators`, `thm-lattice-covariance-estimator-asymptotically-unbiased`.
- A page, spectral branch: `lem-integers-lattice-is-discrete-lca-group`, `lem-dual-of-zd-is-torus`, `lem-transport-lattice-spectral-measure-to-torus`, `def-regular-grid-periodogram-and-smoother`, `thm-regular-grid-periodogram-fejer-expectation`, `lem-fixed-grid-sampling-spectral-alias-identity`, `thm-regular-grid-smoothed-periodogram-bias-vanishes`, `cor-fixed-grid-unaliased-spectral-bias-under-no-alias-condition`.
- B page: `ex-boundary-dominated-windows-are-not-van-hove`, `cex-lattice-sample-covariance-not-positive-definite`.

Used dependency material included the Borel/Lebesgue/choice interfaces (`def-borel-sigma-algebra`, `def-countable-choice`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-borel-sets-are-lebesgue-measurable`, `thm-lebesgue-measure-is-a-complete-measure`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-linear-change-of-variables-for-lebesgue-measure`, and translation invariance); product integration and probability interfaces (probability/random-variable, expectation, covariance, joint-measurability sections, product measures, Tonelli, Fubini, dominated convergence, Cauchy–Schwarz, and (L^2) convergence); and the relevant lattice/Fourier interfaces (integer group laws, discrete LCA structure, product and compact-open topologies, Pontryagin dual, unit-circle group, character powers, spectral-measure transport, Bochner's theorem, angular Fourier orthogonality, and the finite-product compactness/regularity results). The B-example computations were checked against the measure and positive-definiteness definitions they cite.

## Item review

| Item | Review result |
|---|---|
| `def-van-hove-window-sequence` | The Borel/volume domain, countable-choice premise, compact-set quantifier, and measurable-excess condition are explicit and sufficient. |
| `def-spatial-window-average` | The joint-measurability and almost-sure path-integrability domain supports the integral and null-set convention; the consistency theorem establishes these properties under its stronger hypotheses. |
| `thm-van-hove-window-average-l2-consistency` | Tonelli/Fubini justify path integrability, measurability, unbiasedness and the covariance double integral. The overlap ratio tends to one by applying the stated Van Hove condition to the compact set `{0,h}`; its integrable domination is `|C|`, so the claimed (L^2) limit follows. |
| `def-lattice-covariance-and-variogram-estimators` | Pair sets, admissible lags, global-mean subtraction, and the increment-based semivariogram are distinguished precisely. |
| `thm-lattice-covariance-estimator-asymptotically-unbiased` | The finite-pair expectation and (L^2)-to-squared-mean passage are valid; each admissible increment-square has expectation (2\gamma(h)). |
| `lem-integers-lattice-is-discrete-lca-group` | Coordinatewise group laws, discreteness, Hausdorff separation, compact singleton neighborhoods and continuity from the discrete domain are justified. |
| `lem-dual-of-zd-is-torus` | The standard-basis values determine each character, and compact-open equals pointwise topology on the discrete domain; both directions of continuity are established. |
| `lem-transport-lattice-spectral-measure-to-torus` | Pushforward through the homeomorphism preserves finiteness and the two stated Radon regularity conditions; the integral identity extends correctly from indicators to bounded Borel functions. |
| `def-regular-grid-periodogram-and-smoother` | The frequency coordinates are treated periodically modulo (2\pi), the finite periodization is well-defined, and the target is expressly the sampled lattice spectrum. |
| `thm-regular-grid-periodogram-fejer-expectation` | The covariance sequence is positive definite by a finite variance calculation. Bochner, transport, the finite Fourier expansion and angular normalization give the stated Fejer convolution with the displayed normalization. |
| `lem-fixed-grid-sampling-spectral-alias-identity` | The countable sum is measurable and integrable; tiling the frequency space and changing variables gives the alias sum with factor (\delta^{-d}). The finite expectation identity retains every reciprocal-grid translate. |
| `thm-regular-grid-smoothed-periodogram-bias-vanishes` | The product Fejer tail bound, target continuity and grid localization under (b_n\to0), (nb_n\to\infty) support the raw and smoothed expectation limits and eventual denominator positivity. |
| `cor-fixed-grid-unaliased-spectral-bias-under-no-alias-condition` | Physical normalization cancels (\delta^{-d}); nonnegativity makes equality with the unaliased value equivalent to pointwise vanishing of every noncentral term. The compactly supported interior-Nyquist case is sufficient. |
| `ex-boundary-dominated-windows-are-not-van-hove` | The Minkowski sum is ([-1,n+1]\times[-1,2]); its excess-to-window area ratio is (2+6/n\to2), not zero. |
| `cex-lattice-sample-covariance-not-positive-definite` | The data `(1,2,3)` give diagonal (2/3), lag-two entries (-1), and quadratic form (-2/3) at `(1,1)`, so the counterexample is valid. |

## Source checks

- Spodarev, *Spatial Statistics: Lecture Notes* (2024), §2.1, PDF pp. 15–17: the Van Hove boundary-neighborhood condition is given at PDF p. 15; Lemma 2.2 gives unbiasedness, Lemma 2.3 the variance-overlap representation, and Theorem 2.5 gives (L^2) consistency under its window-bound and overlap-limit hypotheses at PDF p. 16. For the assigned windows, the overlap limit follows directly from the local definition, and the local proof establishes the result without leaving those hypotheses implicit. [Source PDF](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf)
- Spodarev, §2.3, PDF pp. 18–23: Definition 2.9 and Lemma 2.10 give the periodogram setup and asymptotic expectation calculation; Lemma 2.14 states a sequential (n\to\infty), then smoothing-index limit. The assigned triangular bandwidth conclusion is supplied by its local Fejer-tail and grid-localization proof. Lemma 2.10's continuous-space conclusion does not remove fixed-grid aliases; the assigned alias lemma and its source note state the corrected fixed-spacing target. [Source PDF](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf)
- Oxford Mathematical Institute, *Harmonic Analysis* lecture notes, printed pp. 17–18: bounded characters of ℤ have the form (n\mapsto z^n), (|z|=1), identifying its dual with the circle; the assigned ℤ^d proof supplies the finite-product extension. [Lecture notes](https://www.maths.ox.ac.uk/system/files/media/HarmAnLectureNotes.pdf)
- Li and North's cited continuous-time aliasing relation is also stated in Maybank, *Methods for Irregularly Sampled Continuous Time Processes*, §4.2.2, printed pp. 85–86, Eq. (4.10): the sampled density is the sum over frequency shifts (k/\Delta_t) in cycles per unit time. Converting to angular frequency and sampling interval (\delta) gives shifts (2\pi k/\delta), consistent with the assigned formula; its multidimensional Jacobian and normalization are derived locally. [UCL thesis PDF](https://discovery.ucl.ac.uk/1428862/1/Methods%20for%20Irregularly%20Sampled%20Continuous%20Time%20Processes.pdf)

## Edits, defects, pages, and blockers

- Item edits: none. No confirmed defect required a repair in an assigned item or the A-page prose. Consequently no item contract, judge record, proof layout, reflow, or precheck was changed or run.
- Uneditable defects: none found in the B page or in a dependency required by the reviewed claims.
- Page `spatial-field-summary-estimators`: **pass**. Its summary preserves the choice assumption, the precise expectation-only scope of the lattice estimators and periodogram, and the fixed-grid alias qualification.
- Page `spatial-field-summary-estimators-examples`: **pass**. Its summary matches the boundary-ratio and finite-sample positive-definiteness examples.
- Blocker: none.

Coverage note: all assigned pages and items and the directly used supplier statements/proofs were reviewed. I did not recursively audit unrelated transitive proof chains behind published foundational measure, topology, real-analysis, and harmonic-analysis suppliers; no unresolved uncertainty in the batch claims remained after the item-local derivations and source checks above.
