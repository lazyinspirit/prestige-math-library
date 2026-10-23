# Step 3a reader report — batch 37

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader (`reader-37`)  
Date: 2026-10-23

## Opened inventory

Assigned pages:

- `library/fluid-dynamics-mathematics/fd-les01.md` — A page, draft, frontmatter only; lists the four assigned A-page items and its declared prerequisites.
- `library/fluid-dynamics-mathematics/fd-les01-examples.md` — B page, draft, frontmatter only; lists `ex-fd-filtering-constant-field` and requires `fd-les01`.

Assigned items, rechecked through their dependency chain after the supplier statements were inspected:

- `items/def-fd-positive-convolution-fluid-filter.md`
- `items/lem-fd-periodic-filter-normalization-and-commutation.md`
- `items/thm-fd-filtered-covariance-energy.md`
- `items/thm-fd-holder-energy-transfer-bound.md`
- `items/ex-fd-filtering-constant-field.md`

In-run prerequisite context opened:

- `library/fluid-dynamics-mathematics/fd-s01.md` — batch 17, draft, frontmatter only.
- `items/def-fd-periodic-fourier-sobolev-spaces.md` — batch 17, draft; its normalized torus convention and proof were checked against its exact inputs.

Published mathematical suppliers opened for the claims in this batch:

- Filter normalization and change of variables: `def-countable-choice`, `cor-change-of-variables-for-compactly-supported-functions`.
- Differentiation and multidimensional integration: `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-riemann-fubini-on-product-rectangles`, `thm-multidimensional-integral-properties`, `thm-multidimensional-riemann-criterion`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `def-multidimensional-darboux-sums`, `def-multidimensional-grid-partition`, `lem-finite-sum-laws`, `cor-archimedean-reciprocal`.
- Filtered momentum and periodic energy balance: `prop-divergence-satisfies-the-product-rule`, `thm-integration-by-parts`, `thm-continuous-implies-integrable`.
- Time-integrated Hölder estimate: `def-integrable-real-and-complex-functions-and-their-integrals`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-borel-sets-are-lebesgue-measurable`.
- Fourier convention chain: `def-the-one-dimensional-torus-and-normalized-haar-integral`, `def-fourier-coefficients-and-trigonometric-polynomials`, `thm-fourier-basis-and-parseval-on-the-n-torus`.

The batch manifest, batch-37 proof contracts, cross-batch dependency rows, batch notes, and coverage record were read as evidence, not as verdicts. The two source PDFs were checked at the cited sections: [University of Washington ME 544, *Large-Eddy Simulation*, §2 pp. 5–6 and §3 pp. 10–12](https://courses.washington.edu/mengr544/handouts/hd-les.pdf), and [Gregory Eyink, *The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation*, §I pp. 2–3 and §II pp. 5–8](https://arxiv.org/pdf/chao-dyn/9602018). The cited sections support the filter convention and commutation qualifications, exact stress/covariance and transfer sign, and the conditional Hölder scaling. The local proofs supply the specialized periodic, compact-support, explicit-constant, and time-integrated arguments.

## Review and dispositions

- `def-fd-positive-convolution-fluid-filter`: the periodized kernel and volume-measure normalization are consistent; the filter, stress, transfer sign, units, and nonnegative-kernel restriction are explicit. The `justified_by` lemma establishes the required normalization and regularity. No item-local defect found.
- `lem-fd-periodic-filter-normalization-and-commutation`: the locally finite periodization, unit mass, Euclidean representation, derivative commutation, and moment finiteness follow from the stated compact support and regularity. The change-of-variables, Riemann integrability, Fubini, and differentiation inputs match the cited hypotheses. No proof gap affecting the conclusion found.
- `thm-fd-filtered-covariance-energy`: the covariance identity and positive-semidefiniteness use unit mass and nonnegativity correctly. Filtering the stated smooth incompressible system preserves the equations under the lemma's commutation hypotheses. The local flux signs and the periodic global balance check out; no sign is asserted for the transfer. No item-local defect found.
- `thm-fd-holder-energy-transfer-bound`: the componentwise stress and filtered-gradient estimates give the stated `d^2(M_{2α}+M_α^2)N_α` constant. The time integral is measurable under the stated `A^3 ∈ L^1(J)` condition, and decay is concluded only for `α>1/3`. No endpoint, empirical, or anomalous-dissipation conclusion is smuggled in. No item-local defect found.
- `ex-fd-filtering-constant-field`: the constant field solves the displayed mathematical system, is preserved by the unit-mass filter, and has zero stress, transfer, and increments. It is clearly identified as an exact mathematical example, not an observation. No item-local defect found.

No assigned TikZ or tikzcd diagrams are present, and none is needed for these analytic claims.

## Uneditable defects

Seven nonfatal read-only defects remain in published mathematical dependencies. The exact subjects, assigned consumers, locations, and evidence are in the companion findings JSON. They concern two kinds of source-text issue: hyperlinks inside complete statement/definition sections, and one malformed explanatory sentence in the Lebesgue-measure definition. These do not change the mathematical deductions reviewed here, but the published imported items are outside this reader's edit scope.

## Edits and checks

No assigned item or page was changed; this is a read-only reader assignment. No proof contracts or verification stamps were changed. Because no item was edited, reflow, precheck, and proof-layout were not run.

## Page verdicts

- `fd-les01`: pass for its assigned page carrier and four assigned mathematical items. The page is frontmatter-only with the declared inventory. Its read-only supplier findings are reported separately.
- `fd-les01-examples`: pass for its assigned page carrier and constant-field example. The page is frontmatter-only and its example's proof is exact. Its inherited read-only supplier findings are reported separately.

## Blockers and limits

There is no unresolved mathematical blocker in the assigned conditional arguments. The seven published dependency defects require disposition by their owners. I checked the exact published supplier statements and the relevant proof uses needed by this batch; I did not re-audit every published supplier's entire transitive proof tree. The batch-17 Fourier–Sobolev interface itself was checked and matches the assigned period scaling and normalized measure convention; no defect was found in that in-run supplier.
