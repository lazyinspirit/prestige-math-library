## Partial Differential Equations

Completed visual review of **943 items across 58 pages**, with **1877 image tiles**. Findings: 31 confirmed, 5 typography, 3 uncertain. Evidence: [manifest](math-library-rendering-audit-2026-10-23/pde/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/pde/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/pde/category-review-receipt.json).

### Confirmed rendering defects

#### pde / confirmed 001: `lem-zero-extension-from-w-one-p-zero`

- Location: **frontmatter title**; source lines 4.
- Pages: `smooth-approximation-and-sobolev-extension`.
- Visible defect: The rendered item title prints W_0^{1,p} literally, including the underscore, braces, and caret, rather than typesetting the Sobolev space.
- Future repair: Wrap the Sobolev-space notation in math delimiters in the title, e.g. $W_0^{1,p}$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-zero-extension-from-w-one-p-zero--01.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-zero-extension-from-w-one-p-zero.md).

Exact frozen source lines:

```text
4: title: Zero extension of W_0^{1,p} has no boundary derivative
```

#### pde / confirmed 002: `lem-w-one-p-is-reflexive`

- Location: **Item body**; source lines 4.
- Pages: `the-direct-method-and-euler-lagrange-equations`.
- Visible defect: The original-resolution title tile prints the TeX-like braces, caret, and “Omega” literally, unlike the mathematical notation in the item body. The source title does not put the expression inside math delimiters.
- Future repair: Format the title math, e.g. "$W^{1,p}(\Omega)$ is reflexive for $1<p<\infty$".
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-w-one-p-is-reflexive--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-w-one-p-is-reflexive--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-w-one-p-is-reflexive.md).

Exact frozen source lines:

```text
4: title: "W^{1,p}(Omega) is reflexive for 1<p<infinity"
```

#### pde / confirmed 003: `lem-w-one-p-is-reflexive`

- Location: **Proof**; source lines 50.
- Pages: `the-direct-method-and-euler-lagrange-equations`.
- Visible defect: The original-resolution technique banner prints the inline-math delimiters and TeX commands literally (including “$W^{1,p}(\OMEGA)$”). The proof steps below render math normally.
- Future repair: Rewrite the banner in plain prose (“embedding the first-order Sobolev space isometrically into a finite product of reflexive Lp spaces”) or render its Markdown math before applying the technique-banner style.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-w-one-p-is-reflexive--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-w-one-p-is-reflexive--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-w-one-p-is-reflexive.md).

Exact frozen source lines:

```text
50: **Proof technique:** direct, by embedding $W^{1,p}(\Omega)$ isometrically into a finite product of reflexive $L^p$ spaces.
```

#### pde / confirmed 004: `lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution`

- Location: **Proof**; source lines 49.
- Pages: `weak-elliptic-maximum-principles-and-holder-regularity`.
- Visible defect: The original-resolution technique banner exposes the `$p=1$`, `$u^*$`, and `\Omega` markup literally; adjacent proof formulas render correctly.
- Future repair: Replace the inline formula fragments with prose (“the weak Harnack inequality at exponent one ...”) or make the technique banner process inline math.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution.md).

Exact frozen source lines:

```text
49: **Proof technique:** direct; the weak Harnack inequality with $p=1$ turns the vanishing of $u^*$ at a point into the vanishing of $u$ on a whole ball, which makes the zero set relatively open, while continuity makes it relatively closed; connectedness then forces the zero set to be all of $\Omega$.
```

#### pde / confirmed 005: `thm-higher-order-rellich-kondrachov`

- Location: **Proof**; source lines 70.
- Pages: `rellich-kondrachov-and-sobolev-compactness`.
- Visible defect: The original-resolution technique banner prints `$L^p$` and the raw accent escape `Arzel\`a` literally, rather than typesetting the math and accented name.
- Future repair: Use “Lp convergence” in plain text and spell “Arzelà–Ascoli” with the Unicode accent, or render inline math in the technique banner.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-higher-order-rellich-kondrachov--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-higher-order-rellich-kondrachov--02.png), [tile 03](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-higher-order-rellich-kondrachov--03.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-higher-order-rellich-kondrachov.md).

Exact frozen source lines:

```text
70: **Proof technique:** extract strong $L^p$ convergence for the finite derivative family, interpolate against higher-order Sobolev bounds, and use Arzel\`a--Ascoli for the supercritical Hölder conclusion.
```

#### pde / confirmed 006: `thm-zero-weak-gradient-implies-componentwise-constancy`

- Location: **Proof**; source lines 152.
- Pages: `weak-derivatives-and-sobolev-spaces`.
- Visible defect: The final original-resolution tile prints the literal `\square` after the proof tags instead of a rendered square or QED glyph.
- Future repair: Replace the trailing command with the schema QED glyph `∎` (or a standalone math-delimited `\square` if supported there).
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-zero-weak-gradient-implies-componentwise-constancy--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-zero-weak-gradient-implies-componentwise-constancy--02.png), [tile 03](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-zero-weak-gradient-implies-componentwise-constancy--03.png), [tile 04](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-zero-weak-gradient-implies-componentwise-constancy--04.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-zero-weak-gradient-implies-componentwise-constancy.md).

Exact frozen source lines:

```text
152: 7.1 Consider the countable family of all balls $B(q,1/m)$ with $q\in\mathbb Q^n$, $m\ge1$, and $\overline{B(q,2/m)}\subset C$. It covers $C$: around any $x\in C$ take $B(x,\delta)\subset C$. By [F17], choose $m\ge1$ with $3/m<\delta$ and then $q\in\mathbb Q^n$ with $|q-x|<1/m$. Thus $x\in B(q,1/m)$ and $\overline{B(q,2/m)}\subset B(x,\delta)\subset C$. By steps 4.1 and 6.1, $u=c_C$ almost everywhere on each such inner ball. The exceptional sets are measurable and null; by [F19] their countable union is null. Hence $u=c_C$ almost everywhere on all of $C$. If $\Omega=\varnothing$, there is no component to consider. [F4, F15, F17, F19, step 4.1, step 6.1] \square
```

#### pde / confirmed 007: `cex-translation-semigroup-is-not-strongly-continuous-on-linfinity`

- Location: **Proof technique banner**; source lines 57.
- Pages: `strongly-continuous-semigroups-and-hille-yosida-examples`.
- Visible defect: Dollar-delimited math and TeX remain literal inside the proof-technique banner instead of typesetting.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/cex-translation-semigroup-is-not-strongly-continuous-on-linfinity--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/cex-translation-semigroup-is-not-strongly-continuous-on-linfinity--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/cex-translation-semigroup-is-not-strongly-continuous-on-linfinity.md).

Exact frozen source lines:

```text
57: **Proof technique:** direct computation with the step function $f=\mathbf 1_{(-\infty,0]}$.
```

#### pde / confirmed 008: `lem-doubling-variables-maximum-localisation`

- Location: **Proof technique banner**; source lines 70.
- Pages: `hamilton-jacobi-equations-and-viscosity-solutions`.
- Visible defect: Dollar-delimited math and TeX remain literal inside the proof-technique banner instead of typesetting.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-doubling-variables-maximum-localisation--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-doubling-variables-maximum-localisation--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-doubling-variables-maximum-localisation.md).

Exact frozen source lines:

```text
70: **Proof technique:** coercive weight for existence, monotonicity in $\alpha$ for the localisation, and explicit $C^1$ contacts for the two tests.
```

#### pde / confirmed 009: `lem-linearity-of-the-bochner-integral`

- Location: **Proof technique banner**; source lines 57.
- Pages: `strongly-continuous-semigroups-and-hille-yosida`.
- Visible defect: Dollar-delimited math and TeX remain literal inside the proof-technique banner instead of typesetting.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-linearity-of-the-bochner-integral--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-linearity-of-the-bochner-integral--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-linearity-of-the-bochner-integral.md).

Exact frozen source lines:

```text
57: **Proof technique:** direct, approximating $\alpha f+\beta g$ by the corresponding linear combinations of the defining simple functions.
```

#### pde / confirmed 010: `lem-sobolev-pasting-across-an-overlap`

- Location: **Proof technique banner**; source lines 79.
- Pages: `weak-derivatives-and-sobolev-spaces`.
- Visible defect: Dollar-delimited math and TeX remain literal inside the proof-technique banner instead of typesetting.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-sobolev-pasting-across-an-overlap--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-sobolev-pasting-across-an-overlap--02.png), [tile 03](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-sobolev-pasting-across-an-overlap--03.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-sobolev-pasting-across-an-overlap.md).

Exact frozen source lines:

```text
79: **Proof technique:** paste the two representatives, verify each test identity with a finite grouping of a locally finite partition of unity, and bound each global $L^p$ norm by the two local norms.
```

#### pde / confirmed 011: `thm-direct-method-for-convex-integral-functionals`

- Location: **Proof technique banner**; source lines 72.
- Pages: `the-direct-method-and-euler-lagrange-equations`.
- Visible defect: Dollar-delimited math and TeX remain literal inside the proof-technique banner instead of typesetting.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-direct-method-for-convex-integral-functionals--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-direct-method-for-convex-integral-functionals--02.png), [tile 03](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-direct-method-for-convex-integral-functionals--03.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-direct-method-for-convex-integral-functionals.md).

Exact frozen source lines:

```text
72: **Proof technique:** direct; finiteness, convexity and norm lower semicontinuity of $I$, then the coercivity estimate and the direct method.
```

#### pde / confirmed 012: `thm-subcritical-compactness-of-the-sobolev-trace`

- Location: **Proof technique banner**; source lines 54.
- Pages: `rellich-kondrachov-and-sobolev-compactness`.
- Visible defect: Dollar-delimited math and TeX remain literal inside the proof-technique banner instead of typesetting.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-subcritical-compactness-of-the-sobolev-trace--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-subcritical-compactness-of-the-sobolev-trace--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-subcritical-compactness-of-the-sobolev-trace.md).

Exact frozen source lines:

```text
54: **Proof technique:** bound the traces in the boundary fractional space, apply fractional compactness chart by chart, and take the Morrey branch for $p>n$.
```

#### pde / confirmed 013: `thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class`

- Location: **Proof technique banner**; source lines 63.
- Pages: `strongly-continuous-semigroups-and-hille-yosida`.
- Visible defect: Dollar-delimited math and TeX remain literal inside the proof-technique banner instead of typesetting.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class.md).

Exact frozen source lines:

```text
63: **Proof technique:** direct, reducing to real $f$, converting the Laplace moments into moments of a continuous function on $[0,1]$, and applying polynomial density.
```

#### pde / confirmed 014: `thm-weak-harnack-inequality-for-nonnegative-supersolutions`

- Location: **Proof technique banner**; source lines 61.
- Pages: `weak-elliptic-maximum-principles-and-holder-regularity`.
- Visible defect: Dollar-delimited math and TeX remain literal inside the proof-technique banner instead of typesetting.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-weak-harnack-inequality-for-nonnegative-supersolutions--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-weak-harnack-inequality-for-nonnegative-supersolutions--02.png), [tile 03](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-weak-harnack-inequality-for-nonnegative-supersolutions--03.png), [tile 04](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-weak-harnack-inequality-for-nonnegative-supersolutions--04.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-weak-harnack-inequality-for-nonnegative-supersolutions.md).

Exact frozen source lines:

```text
61: **Proof technique:** direct; scale the doubled ball to $B_2$, add a Lax-Milgram barrier there to make the solution a homogeneous supersolution on the full region required by Moser's comparison, derive the positive-integrability transitions using only negative-power tests with exponent $s-1<0$, then undo the scaling.
```

#### pde / confirmed 015: `cex-a-mild-solution-need-not-be-classical`

- Location: **Proof technique**; source lines 62.
- Pages: `strongly-continuous-semigroups-and-hille-yosida-examples`.
- Visible defect: The uppercase technique banner displays the inline dollar delimiters and TeX text literally; this mathematical phrase is not rendered as math in the preview.
- Future repair: Render the technique field through the same inline-math path as ItemBody prose, or rewrite the phrase in ordinary words without TeX delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/cex-a-mild-solution-need-not-be-classical--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/cex-a-mild-solution-need-not-be-classical--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/cex-a-mild-solution-need-not-be-classical.md).

Exact frozen source lines:

```text
62: **Proof technique:** direct: identify the mild solution and test membership in $W^{1,p}$ by the defining weak-derivative identity.
```

#### pde / confirmed 016: `cex-hopf-lax-without-convex-superlinear-coercivity`

- Location: **Proof technique**; source lines 65.
- Pages: `hamilton-jacobi-equations-and-viscosity-solutions-examples`.
- Visible defect: The uppercase technique banner displays the inline dollar delimiters and TeX text literally; this mathematical phrase is not rendered as math in the preview.
- Future repair: Render the technique field through the same inline-math path as ItemBody prose, or rewrite the phrase in ordinary words without TeX delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/cex-hopf-lax-without-convex-superlinear-coercivity--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/cex-hopf-lax-without-convex-superlinear-coercivity--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/cex-hopf-lax-without-convex-superlinear-coercivity.md).

Exact frozen source lines:

```text
65: **Proof technique:** split each conjugate supremum at the sign of $p$ and evaluate the resulting formula.
```

#### pde / confirmed 017: `cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold`

- Location: **Proof technique**; source lines 67.
- Pages: `weak-derivatives-and-sobolev-spaces-examples`.
- Visible defect: The uppercase technique banner displays the inline dollar delimiters and TeX text literally; this mathematical phrase is not rendered as math in the preview.
- Future repair: Render the technique field through the same inline-math path as ItemBody prose, or rewrite the phrase in ordinary words without TeX delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/cex-w-one-p-is-not-an-algebra-below-the-continuity-threshold.md).

Exact frozen source lines:

```text
67: **Proof technique:** multiply the sharp radial example by a cutoff to manufacture a $W^{1,p}$ function whose square has a non-integrable gradient.
```

#### pde / confirmed 018: `thm-frechet-kolmogorov-compactness-criterion-in-lp`

- Location: **Proof technique**; source lines 69.
- Pages: `rellich-kondrachov-and-sobolev-compactness`.
- Visible defect: The uppercase technique banner displays the inline dollar delimiters and TeX text literally; this mathematical phrase is not rendered as math in the preview.
- Future repair: Render the technique field through the same inline-math path as ItemBody prose, or rewrite the phrase in ordinary words without TeX delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-frechet-kolmogorov-compactness-criterion-in-lp--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-frechet-kolmogorov-compactness-criterion-in-lp--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-frechet-kolmogorov-compactness-criterion-in-lp.md).

Exact frozen source lines:

```text
69: **Proof technique:** Make the tails small and the translations small, regularise by convolution, use Arzel\`a--Ascoli to get a finite net for the regularised family, and transfer the net back to $\mathcal F$.
```

#### pde / confirmed 019: `thm-laplace-transform-formula-for-the-semigroup-resolvent`

- Location: **Proof technique**; source lines 65.
- Pages: `strongly-continuous-semigroups-and-hille-yosida`.
- Visible defect: The uppercase technique banner displays the inline dollar delimiters and TeX text literally; this mathematical phrase is not rendered as math in the preview.
- Future repair: Render the technique field through the same inline-math path as ItemBody prose, or rewrite the phrase in ordinary words without TeX delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-laplace-transform-formula-for-the-semigroup-resolvent--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-laplace-transform-formula-for-the-semigroup-resolvent--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-laplace-transform-formula-for-the-semigroup-resolvent.md).

Exact frozen source lines:

```text
65: **Proof technique:** direct: define the Laplace integral as a norm limit of finite integrals, verify the two inverse identities on $D(A)$, and transfer them to $X$ by closedness and density.
```

#### pde / confirmed 020: `thm-variation-of-constants-formula`

- Location: **Proof technique**; source lines 70.
- Pages: `strongly-continuous-semigroups-and-hille-yosida`.
- Visible defect: The uppercase technique banner displays the inline dollar delimiters and TeX text literally; this mathematical phrase is not rendered as math in the preview.
- Future repair: Render the technique field through the same inline-math path as ItemBody prose, or rewrite the phrase in ordinary words without TeX delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-variation-of-constants-formula--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-variation-of-constants-formula--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-variation-of-constants-formula.md).

Exact frozen source lines:

```text
70: **Proof technique:** direct: the product rule for $s\mapsto T(t-s)u(s)$ gives Duhamel's formula; the integral solution identity is verified for simple forcing and transferred by closedness; uniqueness follows from a vanishing integral.
```

#### pde / confirmed 021: `def-real-order-bessel-potential-sobolev-space`

- Location: **frontmatter title**; source lines 4.
- Pages: `bessel-potential-completions-and-real-order-sobolev-spaces`.
- Visible defect: The title shows H^s as baseline ASCII, while the Definition body renders H^s as mathematics.
- Future repair: Typeset the title notation, for example $H^s$, preserving the explanatory text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/def-real-order-bessel-potential-sobolev-space--01.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/def-real-order-bessel-potential-sobolev-space.md).

Exact frozen source lines:

```text
4: title: Real-order Bessel-potential completion H^s
```

#### pde / confirmed 022: `def-spherical-averages-and-local-ball-means-in-rn`

- Location: **frontmatter title**; source lines 4.
- Pages: `harmonic-functions-and-mean-values-in-rn`.
- Visible defect: The title shows “Rn” as baseline text rather than the standard mathematical space notation used in the body.
- Future repair: Typeset the title notation, for example “in $\mathbb R^n$”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/def-spherical-averages-and-local-ball-means-in-rn--01.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/def-spherical-averages-and-local-ball-means-in-rn.md).

Exact frozen source lines:

```text
4: title: "Spherical averages and local ball means in Rn"
```

#### pde / confirmed 023: `cex-strong-continuity-does-not-imply-operator-norm-continuity`

- Location: **Counterexample proof-technique banner**; source lines 60.
- Pages: `strongly-continuous-semigroups-and-hille-yosida-examples`.
- Visible defect: The rendered technique banner displays the dollar delimiters and TeX command literally (uppercase monospace `\mathbf`/`T^{-1/P}`) instead of typesetting the unit-vector formula. The same formula is typeset correctly in the proof body.
- Future repair: Render inline mathematics in proof-technique metadata, or write the technique in prose without TeX delimiters.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/cex-strong-continuity-does-not-imply-operator-norm-continuity--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/cex-strong-continuity-does-not-imply-operator-norm-continuity.md).

Exact frozen source lines:

```text
60: **Proof technique:** direct computation with the unit vector $f_t=t^{-1/p}\mathbf 1_{(0,t)}$.
```

#### pde / confirmed 024: `cor-resolvent-power-estimates-for-semigroup-generators`

- Location: **Proof proof-technique banner**; source lines 58.
- Pages: `strongly-continuous-semigroups-and-hille-yosida`.
- Visible defect: The technique banner renders `$\lambda$` and `$R(\lambda,A)^2$` as literal TeX, including uppercase command text, while the same symbols in the statement and proof are typeset.
- Future repair: Render inline mathematics in proof-technique metadata, or replace the TeX fragments with prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/cor-resolvent-power-estimates-for-semigroup-generators--01.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/cor-resolvent-power-estimates-for-semigroup-generators.md).

Exact frozen source lines:

```text
58: **Proof technique:** direct: differentiate the Laplace representation in $\lambda$, identify the derivative with $-R(\lambda,A)^2$ by the resolvent identity, and iterate.
```

#### pde / confirmed 025: `lem-fractional-level-set-kernel-measure-estimate`

- Location: **Proof proof-technique banner**; source lines 53.
- Pages: `rellich-kondrachov-and-sobolev-compactness`.
- Visible defect: The technique banner displays math delimiters and TeX command text literally (for example `$\RHO$`) rather than typesetting the radius notation; formulas in the proof body render normally.
- Future repair: Render inline mathematics in proof-technique metadata, or use prose for the radius notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-fractional-level-set-kernel-measure-estimate--01.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-fractional-level-set-kernel-measure-estimate.md).

Exact frozen source lines:

```text
53: **Proof technique:** Choose the radius $\rho$ carrying the mass of $E$, split the complement of $E$ into its part inside and outside $B(x,\rho)$, use the lower bound $|x-y|\ge\rho$ on the outer part and on $E\setminus B(x,\rho)$ to reach all of $B(x,\rho)^c$, and evaluate the resulting radial integral in polar coordinates.
```

#### pde / confirmed 026: `lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing`

- Location: **Proof proof-technique banner**; source lines 64.
- Pages: `strongly-continuous-semigroups-and-hille-yosida`.
- Visible defect: The banner shows the integral's dollar delimiters and TeX commands as raw uppercase monospace (`$\INT\...`) instead of rendered notation.
- Future repair: Render inline mathematics in proof-technique metadata, or describe the estimate in prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing--01.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing.md).

Exact frozen source lines:

```text
64: **Proof technique:** direct: well-definedness from the Bochner criterion, then a uniform estimate $\int\|(T(h)-I)f\|\to0$ obtained from a single simple approximation, and a splitting of the increment.
```

#### pde / confirmed 027: `thm-morrey-rellich-compactness-for-p-greater-than-n`

- Location: **Proof proof-technique banner**; source lines 63.
- Pages: `rellich-kondrachov-and-sobolev-compactness`.
- Visible defect: The technique banner prints `$C^{0,\alpha}$` and `$C^{0,\beta}$` as literal TeX-like uppercase monospace text instead of typesetting the Hölder spaces; the same notation is typeset in the item body.
- Future repair: Render inline mathematics in proof-technique metadata, or spell out the Hölder exponents in prose.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-morrey-rellich-compactness-for-p-greater-than-n--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-morrey-rellich-compactness-for-p-greater-than-n.md).

Exact frozen source lines:

```text
63: **Proof technique:** extend, cut off, apply Morrey's inequality for uniform $C^{0,\alpha}$ bounds, extract uniformly convergent representatives by Arzel\`a--Ascoli, and interpolate down to $C^{0,\beta}$.
```

#### pde / confirmed 028: `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain`

- Location: **Proof proof-technique banner**; source lines 63.
- Pages: `rellich-kondrachov-and-sobolev-compactness`.
- Visible defect: The banner prints `$\OMEGA$` literally instead of typesetting the domain symbol; the same symbol is typeset throughout the statement and proof.
- Future repair: Render inline mathematics in proof-technique metadata, or write `the domain` in prose.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md).

Exact frozen source lines:

```text
63: **Proof technique:** Extend, multiply by a fixed cutoff, apply the Fr\'echet--Kolmogorov criterion to the products, and restrict to $\Omega$.
```

#### pde / confirmed 029: `rem-meyers-serrin-does-not-assert-density-for-p-infinity`

- Location: **frontmatter title**; source lines 4.
- Pages: `smooth-approximation-and-sobolev-extension`.
- Visible defect: The title shows `W^{k,∞}` as literal caret/braces notation rather than a typeset Sobolev space. The rendered item body uses `$W^{k,\infty}(\Omega)$` and displays the notation correctly.
- Future repair: Spell out the endpoint in the title or use title math delimiters supported by the renderer.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/rem-meyers-serrin-does-not-assert-density-for-p-infinity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/rem-meyers-serrin-does-not-assert-density-for-p-infinity.md).

Exact frozen source lines:

```text
4: title: Meyers–Serrin excludes the W^{k,∞} norm endpoint
```

#### pde / confirmed 030: `lem-contour-definition-of-an-analytic-semigroup`

- Location: **linked reference title in item body**; source lines 4.
- Pages: `analytic-semigroups-and-linear-evolution-equations`.
- Visible defect: The linked reference title visible in the assigned item is rendered with literal math delimiters and `\mathcal` rather than mathematical typography. The link is called at the exact source location in `items/lem-contour-definition-of-an-analytic-semigroup.md` line 81.
- Future repair: Use a plain-language link title or provide math-aware rendering for linked item titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-contour-definition-of-an-analytic-semigroup--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-contour-definition-of-an-analytic-semigroup--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-contour-definition-of-an-analytic-semigroup.md).

Exact frozen source lines:

```text
4: title: The Dunford contour integral defines a bounded holomorphic family on the sector
```

#### pde / confirmed 031: `ex-zero-order-bessel-completion-is-ltwo`

- Location: **frontmatter title**; source lines 4.
- Pages: `bessel-potential-completions-and-real-order-sobolev-spaces-examples`.
- Visible defect: The title renders the Lebesgue-space notation as plain “L2”, with the exponent shown on the baseline.
- Future repair: Typeset the title notation, for example “The zero-order Bessel completion is exactly $L^2$.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/ex-zero-order-bessel-completion-is-ltwo--01.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/ex-zero-order-bessel-completion-is-ltwo.md).

Exact frozen source lines:

```text
4: title: The zero-order Bessel completion is exactly L2
```

### Optional typography

#### pde / typography 001: `cex-not-every-open-set-is-a-w-one-p-extension-domain`

- Location: **Title**; source lines 4, 4.
- Pages: `smooth-approximation-and-sobolev-extension-examples`.
- Visible defect: The title contains literal W^{1,3/2} source notation, which the title preview shows as plain caret/braces. The complete body typesets the Sobolev exponent normally.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/cex-not-every-open-set-is-a-w-one-p-extension-domain.md](math-library-rendering-audit-2026-10-23/pde/snapshots/cex-not-every-open-set-is-a-w-one-p-extension-domain.md).

Exact frozen source lines:

```text
4: title: An inward cusp blocks W^{1,3/2} extension
```

#### pde / typography 002: `def-radial-mollifier-family-in-rn`

- Location: **Title**; source lines 4, 4.
- Pages: `harmonic-functions-and-mean-values-in-rn`.
- Visible defect: The title uses plain Rn, displayed without a superscript n; the definition body typesets R^n correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/def-radial-mollifier-family-in-rn.md](math-library-rendering-audit-2026-10-23/pde/snapshots/def-radial-mollifier-family-in-rn.md).

Exact frozen source lines:

```text
4: title: "A radial mollifier family in Rn"
```

#### pde / typography 003: `lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation`

- Location: **Title**; source lines 4, 4.
- Pages: `constrained-variational-problems-and-variational-inequalities`.
- Visible defect: The title displays L^2 and H^1_0 as literal source notation. The statement body typesets these expressions correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation.md](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation.md).

Exact frozen source lines:

```text
4: title: "The absolute value preserves the L^2 norm and the Dirichlet energy on H^1_0"
```

#### pde / typography 004: `lem-strong-ltwo-compactness-preserves-unit-normalisation`

- Location: **Title**; source lines 4, 4.
- Pages: `constrained-variational-problems-and-variational-inequalities`.
- Visible defect: The title displays H^1 and L^2 as literal source notation. The body typesets both spaces correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/lem-strong-ltwo-compactness-preserves-unit-normalisation.md](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-strong-ltwo-compactness-preserves-unit-normalisation.md).

Exact frozen source lines:

```text
4: title: "Weak H^1 convergence plus Rellich preserves the L^2 unit normalisation"
```

#### pde / typography 005: `thm-instantaneous-smoothing-of-lp-heat-flow`

- Location: **Title**; source lines 4, 4.
- Pages: `heat-equation-maximum-principles-duhamel-and-smoothing`.
- Visible defect: The title spells the space as plain Lp rather than typesetting L^p. The statement and proof typeset L^p correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/thm-instantaneous-smoothing-of-lp-heat-flow.md](math-library-rendering-audit-2026-10-23/pde/snapshots/thm-instantaneous-smoothing-of-lp-heat-flow.md).

Exact frozen source lines:

```text
4: title: Instantaneous smoothing of the Lp heat flow
```

### Uncertain observations

#### pde / uncertain 001: `lem-translation-estimate-for-w-one-p-functions`

- Location: **Proof**; source lines 62.
- Pages: `rellich-kondrachov-and-sobolev-compactness`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-translation-estimate-for-w-one-p-functions--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-translation-estimate-for-w-one-p-functions--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-translation-estimate-for-w-one-p-functions.md).

Exact frozen source lines:

```text
62: **Proof technique:** Prove the estimate for smooth approximants along line segments, then use density to pass to the $W^{1,p}$ limit. Identify the translated weak derivatives by testing against compactly supported smooth functions.
```

#### pde / uncertain 002: `lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed`

- Location: **Proof**; source lines 46.
- Pages: `the-direct-method-and-euler-lagrange-equations`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed.md).

Exact frozen source lines:

```text
46: **Proof technique:** direct, by writing $K_g$ as a translate of the kernel of the trace and applying the closed-convex weak-closure lemma.
```

#### pde / uncertain 003: `ex-one-dimensional-euler-lagrange-equation`

- Location: **Verification**; source lines 54.
- Pages: `the-direct-method-and-euler-lagrange-equations-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/pde/screenshots/ex-one-dimensional-euler-lagrange-equation--01.png), [tile 02](math-library-rendering-audit-2026-10-23/pde/screenshots/ex-one-dimensional-euler-lagrange-equation--02.png); [frozen source](math-library-rendering-audit-2026-10-23/pde/snapshots/ex-one-dimensional-euler-lagrange-equation.md).

Exact frozen source lines:

```text
54: **Proof technique:** direct, by testing the minimality of $u$ against compactly supported variations.
```

