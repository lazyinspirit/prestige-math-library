## Linear Algebra

Completed visual review of **749 items across 44 pages**, with **943 image tiles**. Findings: 23 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/linear-algebra/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/linear-algebra/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/linear-algebra/category-review-receipt.json).

### Confirmed rendering defects

#### linear-algebra / confirmed 001: `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss`

- Location: **Item body**; source lines 4.
- Pages: `the-moore-penrose-pseudoinverse-and-regularised-least-squares`.
- Visible defect: The standalone local preview is cropped on the left: its item slug/title begin midword (the title renders as “he Moore--Penrose…”), and the first visible content starts at the image edge. The complete title is present in the frozen source and local HTML; this is a preview clipping finding, not a source-text defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss.md).

Exact frozen source lines:

```text
4: title: "The Moore--Penrose pseudoinverse is continuous on each fixed-rank stratum and is not continuous across rank loss"
```

#### linear-algebra / confirmed 002: `fs-jordan-canonical-form-is-a-unique-matrix`

- Location: **Item body**; source lines 4.
- Pages: `triangularisation-and-jordan-canonical-form-examples`.
- Visible defect: The standalone local preview clips the left edge of the title: the source title begins “FALSE:” while the tile shows “AL:”. The full title exists in the frozen source and local HTML; this is a preview clipping finding, not a source-text defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/fs-jordan-canonical-form-is-a-unique-matrix--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/fs-jordan-canonical-form-is-a-unique-matrix.md).

Exact frozen source lines:

```text
4: title: "FALSE: Jordan canonical form is a unique literal matrix without fixing block order"
```

#### linear-algebra / confirmed 003: `def-cholesky-factorisation-with-positive-diagonal`

- Location: **Definition**; source lines 36.
- Pages: `direct-matrix-factorisations-lu-cholesky-and-qr`.
- Visible defect: The definition body joins the display-math closing delimiter directly to “for”: `$$x^*Ax>0$$for every nonzero vector...`. The preview consequently renders “0for” with no word break. Insert a space or start a new sentence/paragraph after the display equation.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/def-cholesky-factorisation-with-positive-diagonal--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/def-cholesky-factorisation-with-positive-diagonal.md).

Exact frozen source lines:

```text
36: $$x^*Ax>0$$for every nonzero vector $x\in \mathbb C^n$. A **Cholesky factorisation with positive diagonal** of $A$ is a factorisation$$A=LL^*,$$
```

#### linear-algebra / confirmed 004: `def-operator-norm-on-a-finite-dimensional-inner-product-space`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-spectral-theorem-and-singular-value-decomposition`.
- Visible defect: The rendered title displays max_{||v||=1} ||Tv|| with literal underscores and braces, while the definition below typesets the same maximum in math delimiters.
- Future repair: Wrap the maximum expression in inline math delimiters, matching the notation in the Definition body.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/def-operator-norm-on-a-finite-dimensional-inner-product-space--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/def-operator-norm-on-a-finite-dimensional-inner-product-space.md).

Exact frozen source lines:

```text
4: title: "The operator norm is zero on the zero domain and otherwise is max_{||v||=1} ||Tv||"
```

#### linear-algebra / confirmed 005: `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field`

- Location: **Refutation**; source lines 50.
- Pages: `exterior-powers-orientation-and-hodge-duality-examples`.
- Visible defect: The proof renders the internal annotation [L2, algebra] as literal text between the displayed computation and the next proof step.
- Future repair: Remove the standalone annotation line or express the dependency using supported proof markup.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field.md).

Exact frozen source lines:

```text
50: [L2, algebra]
```

#### linear-algebra / confirmed 006: `cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form`

- Location: **proof technique banner**; source lines 41.
- Pages: `triangularisation-and-jordan-canonical-form`.
- Visible defect: The uppercase technique banner visibly prints the TeX source `\deg\chi_T` (including dollar delimiters) instead of typesetting the math. The banner text is otherwise legible.
- Future repair: Render the mathematical expression in the technique banner, or phrase the label as plain text such as “induction on the degree of the characteristic polynomial.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form.md).

Exact frozen source lines:

```text
41: **Proof technique:** induction on $\deg\chi_T$.
```

#### linear-algebra / confirmed 007: `cex-congruence-need-not-preserve-trace-or-determinant`

- Location: **Counterexample technique banner**; source lines 40.
- Pages: `dual-spaces-bilinear-forms-and-inertia-examples`.
- Visible defect: The intended uppercase technique banner renders its embedded $1\times1$ as literal dollar signs and TeX source in the local HTML and screenshot.
- Future repair: Render the embedded one-by-one size as math or use plain typographic text such as “1×1”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/cex-congruence-need-not-preserve-trace-or-determinant--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/cex-congruence-need-not-preserve-trace-or-determinant.md).

Exact frozen source lines:

```text
40: **Proof technique:** direct $1\times1$ computation.
```

#### linear-algebra / confirmed 008: `ex-a-floating-point-dot-product-error-bound`

- Location: **frontmatter title**; source lines 4.
- Pages: `matrix-norms-condition-numbers-and-numerical-stability-examples`.
- Visible defect: The title displays gamma_n with a literal underscore rather than a rendered subscript.
- Future repair: Use a rendered gamma subscript or readable wording such as “gamma n”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/ex-a-floating-point-dot-product-error-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/ex-a-floating-point-dot-product-error-bound.md).

Exact frozen source lines:

```text
4: title: "A short floating-point dot product obeys the gamma_n error bound"
```

#### linear-algebra / confirmed 009: `def-singular-values-of-an-endomorphism`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-spectral-theorem-and-singular-value-decomposition`.
- Visible defect: The title displays T^*T with a literal caret and asterisk instead of a rendered adjoint product.
- Future repair: Wrap T^*T in math delimiters or use a readable typographic form.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/def-singular-values-of-an-endomorphism--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/def-singular-values-of-an-endomorphism.md).

Exact frozen source lines:

```text
4: title: "The singular values of a linear map as the eigenvalues of the positive square root of T^*T"
```

#### linear-algebra / confirmed 010: `prop-singular-values-are-well-defined`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-spectral-theorem-and-singular-value-decomposition`.
- Visible defect: The title displays T^*T with a literal caret and asterisk instead of a rendered adjoint product.
- Future repair: Wrap T^*T in math delimiters or use a readable typographic form.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/prop-singular-values-are-well-defined--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/prop-singular-values-are-well-defined.md).

Exact frozen source lines:

```text
4: title: "Singular values are well defined because the positive square root of T^*T is unique"
```

#### linear-algebra / confirmed 011: `def-condition-number-of-a-nonsingular-linear-system`

- Location: **Item body**; source lines 4.
- Pages: `matrix-norms-condition-numbers-and-numerical-stability`.
- Visible defect: The rendered H1 exposes the title formula literally as “kappa_p(A) = ||A||_p ||A^{-1}||_p” instead of typeset mathematics.
- Future repair: Use a prose title such as “The p-norm condition number of a nonsingular linear system”, or delimit and typeset the formula if title MathMarkdown is supported.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/def-condition-number-of-a-nonsingular-linear-system--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/def-condition-number-of-a-nonsingular-linear-system.md).

Exact frozen source lines:

```text
4: title: "The condition number kappa_p(A) = ||A||_p ||A^{-1}||_p of a nonsingular linear system"
```

#### linear-algebra / confirmed 012: `thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound`

- Location: **Facts & Assumptions**; source lines 48.
- Pages: `direct-matrix-factorisations-lu-cholesky-and-qr`.
- Visible defect: The L3 link renders its linked reference title as raw ASCII mathematical notation (“If |delta_i| <= u and nu < 1, then prod (1+delta_i) = 1+theta_n with |theta_n| <= gamma_n”) in the Facts & Assumptions body.
- Future repair: Typeset the referenced item title or use a prose link label. The source line is the wikilink; the displayed wording comes from the local reference-title resolver.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound.md).

Exact frozen source lines:

```text
48: [L3] Products of factors $(1+\delta)$ with $|\delta|\le u$ collapse to $1+\theta$ with $|\theta|\le \gamma_n$ ([[lem-product-of-one-plus-deltas-gives-theta-n]]).
```

#### linear-algebra / confirmed 013: `lem-product-of-one-plus-deltas-gives-theta-n`

- Location: **Item body**; source lines 4.
- Pages: `matrix-norms-condition-numbers-and-numerical-stability`.
- Visible defect: The title uses raw ASCII math (“|delta_i| <= u … prod (1+delta_i) … |theta_n| <= gamma_n”) with no TeX delimiters. The local preview exposes the ASCII operators instead of typeset math. The statement body at lines 29–33 uses TeX and renders correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/lem-product-of-one-plus-deltas-gives-theta-n--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/lem-product-of-one-plus-deltas-gives-theta-n.md).

Exact frozen source lines:

```text
4: title: "If |delta_i| <= u and n u < 1, then prod (1+delta_i) = 1 + theta_n with |theta_n| <= gamma_n"
```

#### linear-algebra / confirmed 014: `thm-alternating-forms-have-a-symplectic-normal-form`

- Location: **Proof**; source lines 45.
- Pages: `dual-spaces-bilinear-forms-and-inertia`.
- Visible defect: The uppercase technique banner is intended, but its embedded `$n=\dim V$` remains literal text in the screenshot (“INDUCTION ON $N=\DIM V$”). This is raw math inside the otherwise intended banner.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-alternating-forms-have-a-symplectic-normal-form--01.png), [tile 02](math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-alternating-forms-have-a-symplectic-normal-form--02.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-alternating-forms-have-a-symplectic-normal-form.md).

Exact frozen source lines:

```text
45: **Proof technique:** induction on $n=\dim V$.
```

#### linear-algebra / confirmed 015: `def-forward-and-back-substitution-for-triangular-systems`

- Location: **Definition**; source lines 37, 37.
- Pages: `direct-matrix-factorisations-lu-cholesky-and-qr`.
- Visible defect: The source closes one display equation immediately before “If U” with no separating blank line, then closes the second immediately before the next “construction” and display equation. In the rendered tile, the prose joins the math as “).If U” and “constructionx_i”. Put the prose and each display on separate Markdown blocks.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/research/math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/def-forward-and-back-substitution-for-triangular-systems--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/def-forward-and-back-substitution-for-triangular-systems.md).

Exact frozen source lines:

```text
37: $$x_i:=\frac{1}{\ell_{ii}}\left(b_i-\sum_{j<i}\ell_{ij}x_j\right)\qquad(0\le i<n).$$If $U=(u_{ij})\in M_n(F)$ is upper triangular with every diagonal entry $u_{ii}\ne 0$, the **backward substitution solve** of $Ux=b$ is the recursive construction$$x_i:=\frac{1}{u_{ii}}\left(b_i-\sum_{j>i}u_{ij}x_j\right)\qquad(n-1\ge i\ge 0).$$
```

#### linear-algebra / confirmed 016: `cex-a-tiny-residual-does-not-force-a-small-forward-error`

- Location: **Facts & Assumptions**; source lines 36, 36.
- Pages: `matrix-norms-condition-numbers-and-numerical-stability-examples`.
- Visible defect: The L2 citation title is shown as raw “kappa_p(A) = ||A||_p ||A^{-1}||_p” in the link block, rather than typeset math. The link block rendering itself is expected; the displayed reference title carries literal ASCII math.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/research/math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/cex-a-tiny-residual-does-not-force-a-small-forward-error--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/cex-a-tiny-residual-does-not-force-a-small-forward-error.md).

Exact frozen source lines:

```text
36: [L2] $\kappa_2(A)=\lVert A\rVert_2\lVert A^{-1}\rVert_2=1/\varepsilon$ ([[def-condition-number-of-a-nonsingular-linear-system]]).
```

#### linear-algebra / confirmed 017: `thm-singular-value-decomposition`

- Location: **Facts & Assumptions**; source lines 43, 43.
- Pages: `the-spectral-theorem-and-singular-value-decomposition`.
- Visible defect: The L1 reference block includes a title with the literal string “T^*T”; the caret and asterisk are printed as ordinary characters inside the linked title rather than as a superscript adjoint expression.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/research/math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-singular-value-decomposition--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-singular-value-decomposition.md).

Exact frozen source lines:

```text
43: [L1] The singular values of $T$ are the eigenvalues of the non-negative operator $|T|=\sqrt{T^*T}$ ([[def-singular-values-of-an-endomorphism]], [[prop-singular-values-are-well-defined]]).
```

#### linear-algebra / confirmed 018: `thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity`

- Location: **Statement**; source lines 41, 41.
- Pages: `matrix-norms-condition-numbers-and-numerical-stability`.
- Visible defect: The citation title in the statement prints “kappa_p(A) = ||A||_p ||A^{-1}||_p” literally inside the link, exposing underscores, carets, and ASCII norm delimiters.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/research/math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity.md).

Exact frozen source lines:

```text
41:    [[def-condition-number-of-a-nonsingular-linear-system]]. Equivalently,
```

#### linear-algebra / confirmed 019: `thm-derivative-of-matrix-inversion`

- Location: **Facts & Assumptions**; source lines 51, 51.
- Pages: `matrix-differentiation-and-first-order-spectral-perturbation`.
- Visible defect: The L3 operator-norm citation title prints max_{||v||=1} ||Tv|| as ordinary ASCII with literal underscores and braces inside the link block.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/research/math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-derivative-of-matrix-inversion--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-derivative-of-matrix-inversion.md).

Exact frozen source lines:

```text
51: [L3] The operator norm on finite-dimensional real or complex inner-product spaces bounds $\|Xv\|_2$ by $\|X\|_2\|v\|_2$ by rescaling a nonzero $v$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]). It is submultiplicative ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]). Singular-value formulas give $\|X\|_2\le\|X\|_F$ and unitary invariance of both norms ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]); a singular value decomposition exists over both fields ([[thm-singular-value-decomposition]]).
```

#### linear-algebra / confirmed 020: `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`

- Location: **Proof**; source lines 45.
- Pages: `eigenvalues-eigenvectors-and-the-characteristic-polynomial`.
- Visible defect: TECHNIQUE · INDUCTION ON $M$
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/research/math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent.md).

Exact frozen source lines:

```text
45: **Proof technique:** induction on $m$.
```

#### linear-algebra / confirmed 021: `thm-nilpotent-jordan-string-basis`

- Location: **Proof**; source lines 41.
- Pages: `triangularisation-and-jordan-canonical-form`.
- Visible defect: TECHNIQUE · INDUCTION ON $\DIM\OPERATORNAME{IM}N$
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/research/math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-nilpotent-jordan-string-basis--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-nilpotent-jordan-string-basis.md).

Exact frozen source lines:

```text
41: **Proof technique:** induction on $\dim\operatorname{im}N$.
```

#### linear-algebra / confirmed 022: `thm-sylvesters-criterion-for-positive-definiteness`

- Location: **Proof**; source lines 49.
- Pages: `dual-spaces-bilinear-forms-and-inertia`.
- Visible defect: TECHNIQUE · FORWARD DETERMINANT COMPARISON AND REVERSE INDUCTION ON $N$
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/linear-algebra/research/math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-sylvesters-criterion-for-positive-definiteness--01.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-sylvesters-criterion-for-positive-definiteness.md).

Exact frozen source lines:

```text
49: **Proof technique:** forward determinant comparison and reverse induction on $n$.
```

#### linear-algebra / confirmed 023: `thm-spectral-mapping-for-polynomials`

- Location: **Proof**; source lines 57.
- Pages: `eigenvalues-eigenvectors-and-the-characteristic-polynomial`.
- Visible defect: TECHNIQUE · INDUCTION ON $N$ (literal dollar delimiters are visible)
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/linear-algebra/research/math-library-rendering-audit-2026-10-23/linear-algebra/screenshots/thm-spectral-mapping-for-polynomials--02.png); [frozen source](math-library-rendering-audit-2026-10-23/linear-algebra/snapshots/thm-spectral-mapping-for-polynomials.md).

Exact frozen source lines:

```text
57: **Proof technique:** induction on $n$.
```

