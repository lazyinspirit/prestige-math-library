# Step 3a reader report — batch 52

Run: `numerical-analysis-remaining-71-2026-10-17`  
Date: 2026-10-18  
Role: independent reader

## Scope and opened inventory

At review start, the run was live at `3a-read`; the status command showed no active worker. Batch 52 assigns the A page `nitsche-methods-for-weak-boundary-enforcement` and its B page `nitsche-methods-for-weak-boundary-enforcement-examples`.

Both assigned pages were opened. I also opened the published prerequisite pages declared by the batch manifest: [Fourier multipliers and Sobolev characterisations](../library/fourier-analysis/fourier-multipliers-and-sobolev-characterisations.md) and [Variational crimes and Strang lemmas](../library/numerical-pdes-and-spatial-discretization/variational-crimes-and-strang-lemmas.md). The Fourier page contains `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces`, a direct supplier used by the assigned Nitsche items.

Assigned items were read in dependency order:

1. `def-nitsche-restriction-bessel-potential-sobolev-spaces`
2. `lem-nitsche-h-one-zero-functions-have-zero-facet-traces`
3. `lem-nitsche-local-polynomial-flux-inverse-trace`
4. `lem-nitsche-fractional-face-trace-on-simplex`
5. `lem-nitsche-scaled-fractional-simplex-trace`
6. `def-nitsche-boundary-penalty-forms`
7. `lem-nitsche-global-boundary-flux-bound`
8. `lem-nitsche-fractional-weak-green-and-flux-cancellation`
9. `thm-nitsche-zero-boundary-fractional-comparison-interpolation`
10. `lem-nitsche-global-fractional-boundary-flux-trace`
11. `lem-nitsche-penalty-coercivity`
12. `thm-nitsche-consistency-and-energy-quasioptimality`
13. `thm-nonsymmetric-nitsche-l2-error-with-boundary-defect`
14. `thm-symmetric-nitsche-l2-error-under-dual-regularity`
15. `ex-nitsche-exact-affine-data-weak-imposition`
16. `ex-nitsche-penalty-below-and-above-coercivity-threshold`
17. `ex-nitsche-symmetric-and-nonsymmetric-l2-defects`

For the direct published item suppliers, I opened their definitions/statements and the Facts & Assumptions clauses needed to check hypotheses and conclusions. The opened supplier inventory was:

- **Foundations and Sobolev spaces:** `def-countable-choice`; `def-real-order-bessel-potential-sobolev-space`; `def-sobolev-space-wkp-and-its-norm`; `def-hk-and-hk-zero-notation`; `def-wkp-zero-as-a-sobolev-closure`; `def-broken-and-conforming-polynomial-spaces`; `def-l-one-approximate-identity-on-rn`; `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`.
- **Mesh geometry and finite elements:** `def-matching-affine-simplicial-meshes`; `lem-affine-pullback-weak-derivatives-and-scaling`; `lem-affine-simplex-gauss-green-formula`; `thm-reference-simplex-trace-and-gauss-green`; `thm-polynomial-inverse-and-discrete-trace-estimates`; `lem-shape-regular-affine-simplex-scaling`; `thm-reference-simplex-poincare-wirtinger`; `lem-smooth-density-on-reference-simplex`; `lem-reference-polynomial-norm-equivalence`; `thm-matching-continuous-piecewise-polynomials-are-wkp`; `thm-zero-boundary-piecewise-polynomials-in-w10p`.
- **Fourier, integration, and approximation:** `thm-plancherel`; `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`; `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces`; `thm-bessel-potential-completions-embed-in-tempered-distributions`; `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`; `thm-tonelli-and-fubini-for-completed-product-measures`; `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`; `thm-jensens-integral-inequality`; `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`; `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`; `thm-l-one-approximate-identities-converge-in-l-p`; `thm-riesz-fischer-completeness-of-l-p`; `thm-dominated-convergence`; `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`.
- **Localization and variational analysis:** `lem-test-function-cutoffs-and-euclidean-localization`; `lem-smooth-bump-between-concentric-euclidean-balls`; `lem-compact-support-zero-extension-in-wkp`; `lem-mollification-commutes-with-weak-derivatives-in-the-interior`; `lem-weak-leibniz-rule-with-a-smooth-factor`; `thm-adjoint-problem-for-bounded-coercive-variational-forms`; `lem-w-one-two-is-a-hilbert-space`; `thm-poincare-inequality-for-w-one-p-zero`.
- **Additional upstream supplier interfaces opened while checking direct-dependency closure:** `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`; `thm-tonelli-theorem-for-sigma-finite-product-spaces`; `thm-holder-inequality-for-integrals`; `thm-complex-holder-minkowski-and-the-quotient-norm`; `lem-complex-lp-completeness-density-and-inner-product`.

I read the batch-52 proof-contract file and cross-checked the derivation rows, cited supplier IDs, and boundary entries against the current item text. The authors' `risk_review` fields were treated as evidence only.

## Repairs and evidence

1. **Restriction-space citation — `def-nitsche-restriction-bessel-potential-sobolev-spaces`.** The original Nitsche references support the PDE context but do not state the precise quotient restriction convention defined in this item. I added Leszek F. Demkowicz, *Lecture Notes on Energy Spaces*, §3.1, p. 50, which defines `H^s(Ω)` as restrictions from `H^s(R^n)` with the minimum-energy extension norm. [The notes](https://users.ices.utexas.edu/~leszek/classes/CSE393/book.pdf) state the same convention used here. The item remains a definition; no proof-contract derivation or judge record applies.

2. **Fractional facet trace prerequisites and locality — `lem-nitsche-fractional-face-trace-on-simplex`.** The original proof invoked Fubini and Cauchy–Schwarz without identifying those hypotheses, and its locality argument used dominated-convergence limits without a uniform slice-continuity justification. I added direct dependencies and Facts entries for completed-product Tonelli/Fubini and the nonnegative change-of-variables theorem, updated the assigned batch manifest dependency mirror, and supplied the complex Cauchy–Schwarz derivation from the nonnegative squared norm. Step 4.1 now bounds slice increments by `C|t|^δ‖W‖²_{H^s}` for `0<δ<min(1,2s−1)`, extends the continuous `L²` slice representative from Schwartz density, and uses Fubini on interior prisms to prove locality and extension independence. The proof-contract citations and step inputs were updated. The source identity and Fourier scaling hypotheses are explicit; the trace threshold remains strict at `s>1/2`.

3. **Dominated-convergence supplier — `lem-nitsche-scaled-fractional-simplex-trace`.** The cutoff-density proof explicitly used dominated convergence but did not cite it. I added `thm-dominated-convergence` to the item's dependencies, Facts, proof tag, contract citation/input mapping, and the batch-52 manifest dependency mirror.

4. **Divergence-preserving smoothing — `lem-nitsche-fractional-weak-green-and-flux-cancellation`.** The smooth dilation and Fourier-mollifier limits explicitly used dominated convergence but did not cite it. I added `thm-dominated-convergence` to the item's dependencies and Facts, tagged the affected proof steps, updated the corresponding contract citation/input mapping, and synchronized the batch-52 manifest dependency mirror.

5. **Formatting and contracts.** The three affected proof-contract rows now contain the exact current citations and step input maps. The item/manifest dependency sets match for all three dependency-edited items. No stale `verification.judge` entry existed in the changed items or their contract rows.

Validation after the final item edits:

- Reflow: `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` for each of the four changed item paths; all reported `unchanged`.
- Precheck: the definition reported `0 checked, 0 failing`; each of the three proof items passed with `1 checked, 0 failing`.
- Proof-contract validation for the three repaired proof items returned `ok: true`, with no errors or warnings.
- Final layout command `node tools/proof-layout.mjs items/def-nitsche-restriction-bessel-potential-sobolev-spaces.md items/lem-nitsche-fractional-face-trace-on-simplex.md items/lem-nitsche-scaled-fractional-simplex-trace.md items/lem-nitsche-fractional-weak-green-and-flux-cancellation.md` reported `4 items, 17 steps, 0 defects`.

The task brief's literal `tools/tsx-run.mts` runner path is absent from this checkout; the actual runner is `tools/tsx-run.mjs`. The missing path was not counted as a check result; all required checks were run with the existing runner.

## Unedited defect

The A page's `frontmatter.requires` at lines 21–22 lists `variational-crimes-and-strang-lemmas` but omits `fourier-multipliers-and-sobolev-characterisations`, which the assigned run manifest declares. The A page includes `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces` as an item dependency, and that item is homed on the Fourier prerequisite page. This is a page-metadata inconsistency. I left the frontmatter unchanged because the dispatch licenses item edits and assigned A-page prose, not page metadata; it is the sole remaining finding.

## Page verdicts

- **A — `nitsche-methods-for-weak-boundary-enforcement`:** The summary accurately distinguishes the fractional weak Green identity, zero-boundary comparison interpolation, fixed-domain weighted flux trace, the half-order nonsymmetric duality defect, and the symmetric dual-regularity hypothesis. Four item defects were repaired. The `requires` metadata omission above remains for the owner.
- **B — `nitsche-methods-for-weak-boundary-enforcement-examples`:** All three examples were checked. The affine flux values and exact weak imposition computation are correct; the penalty-free constant witness establishes noncoercivity at zero without claiming necessity below the sufficient threshold; and the symmetric/nonsymmetric boundary-pairing comparison matches the two L2 arguments. No remaining B-page/item defect was found.

## Source and coverage notes

The primary Nitsche source was Jean-Luc Guermond, *MATH 661 Fall 2025, Chapter 37, Nitsche boundary penalty method*: §37.1 (discrete form and `h_F^{-1}` scaling), §37.2 (Lemma 37.2 flux bound and Lemma 37.3 coercivity), §37.3.1 (Lemma 37.5 and Theorem 37.6), §37.3.2 (Theorem 37.7 half-order adjoint defect), and §37.3.3 (Theorem 37.8 symmetric estimate). [Chapter 37 PDF](https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf).

For Mika Juntunen and Rolf Stenberg, *Nitsche's method for general boundary conditions*, I checked §2 (Lemma 2.1 consistency) and §3 (Lemma 3.1 inverse trace, Theorem 3.2 coercivity, Lemma 3.4 interpolation, Theorem 3.5 energy error) in the author-uploaded full-text copy, and confirmed the publication metadata on [Aalto's research portal](https://research.aalto.fi/en/publications/nitsches-method-for-general-boundary-conditions/). The supplied Aalto PDF download endpoint returned an internal error; the relevant full-text sections were still available in the author-uploaded copy.

The mathematical review covers all assigned items and their direct dependency statements/Facts sections. I did not independently re-audit every full proof in the transitive published dependency closure. The remaining page metadata finding is routed in the findings JSON; there is no unresolved mathematical blocker.
