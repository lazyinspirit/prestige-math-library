## Mathematical Statistics

Completed visual review of **486 items across 74 pages**, with **801 image tiles**. Findings: 7 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/mathematical-statistics/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/mathematical-statistics/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/mathematical-statistics/category-review-receipt.json).

### Confirmed rendering defects

#### mathematical-statistics / confirmed 001: `def-sample-covariance-and-operator-norm-loss`

- Location: **Definition**; source lines 37.
- Pages: `sparse-high-dimensional-estimation-and-covariance`.
- Visible defect: The linked reference title visibly prints max_{||v||=1} ||Tv|| as unformatted ASCII mathematics.
- Future repair: Typeset the formula in the reference title, or replace the formula-heavy link label with a plain-language title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/mathematical-statistics/screenshots/def-sample-covariance-and-operator-norm-loss--01.png); [frozen source](math-library-rendering-audit-2026-10-23/mathematical-statistics/snapshots/def-sample-covariance-and-operator-norm-loss.md).

Exact frozen source lines:

```text
37: For a matrix estimate $A$, squared operator loss is $\|A-\Sigma\|_{\mathrm{op}}^2$, with the operator norm of [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]. This definition distinguishes the known-mean raw second moment from the estimator that removes an unknown mean.
```

#### mathematical-statistics / confirmed 002: `lem-clean-dense-gaussian-covariance-minimax-lower-bound`

- Location: **Facts & Assumptions**; source lines 123.
- Pages: `robust-covariance-and-high-dimensional-stability`.
- Visible defect: The linked operator-norm reference title visibly prints max_{||v||=1} ||Tv|| as unformatted ASCII mathematics.
- Future repair: Typeset the formula in the reference title, or replace the formula-heavy link label with a plain-language title.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/mathematical-statistics/screenshots/lem-clean-dense-gaussian-covariance-minimax-lower-bound--02.png); [frozen source](math-library-rendering-audit-2026-10-23/mathematical-statistics/snapshots/lem-clean-dense-gaussian-covariance-minimax-lower-bound.md).

Exact frozen source lines:

```text
123: [F11] [[def-multivariate-normal-law]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], and [[thm-composition-with-borel-functions-preserves-measurability]]: a fixed zero-padding linear map carries a centered Gaussian to the corresponding covariance-block embedding, including singular covariance; compositions with continuous coordinate embeddings and block extractions preserve Borel measurability. The compression norm inequality used below is proved directly from the operator-norm definition.
```

#### mathematical-statistics / confirmed 003: `lem-second-order-kernel-convolution-l2-bias-bound`

- Location: **Facts & Assumptions**; source lines 59.
- Pages: `nonparametric-density-estimation-and-kernels`.
- Visible defect: The linked reference title visibly prints W^{k,p}(R^n) as unformatted caret/superscript ASCII.
- Future repair: Typeset the spaces and ambient domain in the linked reference title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/mathematical-statistics/screenshots/lem-second-order-kernel-convolution-l2-bias-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/mathematical-statistics/snapshots/lem-second-order-kernel-convolution-l2-bias-bound.md).

Exact frozen source lines:

```text
59: [F2] Under $\mathrm{AC}_\omega$, $C_c^\infty(\mathbb R^d)$ is dense in $W^{2,2}(\mathbb R^d)$: for every $\epsilon>0$ there is a smooth compactly supported $g$ with $\|g-f\|_{W^{2,2}}<\epsilon$ ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).
```

#### mathematical-statistics / confirmed 004: `lem-second-order-kernel-convolution-l2-bias-bound`

- Location: **Facts & Assumptions**; source lines 63.
- Pages: `nonparametric-density-estimation-and-kernels`.
- Visible defect: The linked reference title visibly prints C^1 and L^1 as literal caret notation.
- Future repair: Typeset the exponents in the linked reference title or use plain-language wording.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/mathematical-statistics/screenshots/lem-second-order-kernel-convolution-l2-bias-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/mathematical-statistics/snapshots/lem-second-order-kernel-convolution-l2-bias-bound.md).

Exact frozen source lines:

```text
63: [F4] Under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism satisfies the change-of-variables formula for integrable functions; translations therefore preserve $L^2$ norms ([[cor-c-one-change-of-variables-for-l-one-functions]]).
```

#### mathematical-statistics / confirmed 005: `thm-kde-pointwise-second-order-bias`

- Location: **Facts & Assumptions**; source lines 69.
- Pages: `nonparametric-density-estimation-and-kernels`.
- Visible defect: The linked reference title visibly prints C^1 and L^1 as literal caret notation.
- Future repair: Typeset the exponents in the linked reference title or use plain-language wording.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/mathematical-statistics/screenshots/thm-kde-pointwise-second-order-bias--01.png); [frozen source](math-library-rendering-audit-2026-10-23/mathematical-statistics/snapshots/thm-kde-pointwise-second-order-bias.md).

Exact frozen source lines:

```text
69: [F6] Under $\mathrm{AC}_\omega$, the C$^1$ diffeomorphism $u\mapsto x-hu$ permits substitution for nonnegative integrands and for integrable signed integrands ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[cor-c-one-change-of-variables-for-l-one-functions]]).
```

#### mathematical-statistics / confirmed 006: `lem-qmd-score-centered-and-finite-information`

- Location: **Proof technique**; source lines 72.
- Pages: `local-asymptotic-normality-contiguity-and-efficiency`.
- Visible defect: The technique banner displays the literal $ delimiters and L^2(\mu) instead of rendered mathematics.
- Future repair: Move the formula into a math-enabled prose field or use plain-language wording in the technique banner.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/mathematical-statistics/screenshots/lem-qmd-score-centered-and-finite-information--01.png); [frozen source](math-library-rendering-audit-2026-10-23/mathematical-statistics/snapshots/lem-qmd-score-centered-and-finite-information.md).

Exact frozen source lines:

```text
72: **Proof technique:** differentiate the squared $L^2(\mu)$ norm along a line.
```

#### mathematical-statistics / confirmed 007: `lem-finite-dimensional-functional-convolution-bound`

- Location: **Statement**; source lines 49.
- Pages: `semiparametric-efficiency-and-regular-estimation`.
- Visible defect: The local HTML preview visibly renders a lone opening square bracket on its own line immediately before the Statement text. The frozen source line contains no such bracket; the glyph is an extra rendered artifact.
- Future repair: Inspect the MathMarkdown/rendering boundary for the opening statement paragraph and remove the spurious bracket from the rendered output.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/mathematical-statistics/screenshots/lem-finite-dimensional-functional-convolution-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/mathematical-statistics/snapshots/lem-finite-dimensional-functional-convolution-bound.md).

Exact frozen source lines:

```text
49: Assume AC and let $d,k\ge1$ be finite. Let $\{P_{n,h}:h\in\mathbb R^d\}$ be LAN at $h=0$ with positive-definite information matrix $K$ and central sequence $\Delta_n$. Let $\psi_{n,h}\in\mathbb R^k$ be a local target such that for every fixed $h$,
```

