## Complex Analysis

Completed visual review of **1402 items across 100 pages**, with **2578 image tiles**. Findings: 45 confirmed, 4 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/complex-analysis/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/complex-analysis/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/complex-analysis/category-review-receipt.json).

### Confirmed rendering defects

#### complex-analysis / confirmed 001: `cor-bounded-harmonic-functions-have-nontangential-limits`

- Location: **Title and Statement**; source lines 4, 23, 32.
- Pages: `harmonic-hardy-classes-and-fatou-boundary-limits`.
- Visible defect: The original-resolution first tile is blank from its top through roughly the first 300 px apart from a small orange sliver at the far left; it omits the title, Statement heading and statement that exist in source and frozen HTML. The second tile continues later content.
- Future repair: Inspect the local capture/render path for this item and restore its title and opening statement in the first viewport; keep the complete source content.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/cor-bounded-harmonic-functions-have-nontangential-limits--01.png), [tile 02](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/cor-bounded-harmonic-functions-have-nontangential-limits--02.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/cor-bounded-harmonic-functions-have-nontangential-limits.md).

Exact frozen source lines:

```text
4: title: "Bounded harmonic functions have L-infinity Fatou boundary data"
23: ## Statement
32: $\Gamma_A(\zeta)$, $A>1$.
```

#### complex-analysis / confirmed 002: `ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure`

- Location: **Title**; source lines 4.
- Pages: `the-hartogs-phenomena-examples`.
- Visible defect: Title presents the mathematical expression as prose ASCII, with unformatted subscripts and no fraction layout; body math is typeset.
- Future repair: Mark the expression as math in the title using the supported title rendering syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure.md).

Exact frozen source lines:

```text
4: title: "The function 1 / (1 - z1 z2) extends holomorphically from a Hartogs figure"
```

#### complex-analysis / confirmed 003: `ex-trigonometric-integral-one-over-a-plus-cos-theta`

- Location: **Title**; source lines 4.
- Pages: `the-residue-theorem-examples`.
- Visible defect: Title presents the integrand and interval as ASCII prose instead of typeset mathematical notation; body formulas are typeset.
- Future repair: Mark the integrand and interval as math in the title using the supported title rendering syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-trigonometric-integral-one-over-a-plus-cos-theta--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-trigonometric-integral-one-over-a-plus-cos-theta.md).

Exact frozen source lines:

```text
4: title: "The integral of 1 / (a + cos theta) over [0, 2 pi]"
```

#### complex-analysis / confirmed 004: `cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy`

- Location: **Title**; source lines 4.
- Pages: `the-hartogs-phenomena-examples`.
- Visible defect: The title shows the literal caret in C^2 instead of a superscript; the statement below renders C² correctly.
- Future repair: Render C^2 as inline math in the title or spell out the space in words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy.md).

Exact frozen source lines:

```text
4: title: "C^2 minus a complex line is a domain of holomorphy"
```

#### complex-analysis / confirmed 005: `ex-real-rational-function-with-finite-taylor-radius`

- Location: **Title**; source lines 4.
- Pages: `complex-power-series-and-analytic-functions-examples`.
- Visible defect: The title shows x^2 with a literal caret rather than a superscript.
- Future repair: Render the exponent with title-supported math markup or write “one plus x squared”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-real-rational-function-with-finite-taylor-radius--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-real-rational-function-with-finite-taylor-radius.md).

Exact frozen source lines:

```text
4: title: "The real function 1/(1+x^2) is smooth on the real line but its Maclaurin series has radius one"
```

#### complex-analysis / confirmed 006: `ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc`

- Location: **Title**; source lines 4.
- Pages: `the-argument-principle-and-rouche-examples`.
- Visible defect: The title shows z^5 with a literal caret rather than a superscript.
- Future repair: Render z^5 as inline math in the title or spell out “z to the fifth power”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc.md).

Exact frozen source lines:

```text
4: title: "The polynomial z^5 + 3z + 1 has one zero in the unit disc"
```

#### complex-analysis / confirmed 007: `lem-nevanlinna-growth-dominates-logarithm`

- Location: **Proof technique banner**; source lines 52.
- Pages: `nevanlinna-second-main-theorem-and-defects`.
- Visible defect: The uppercase proof-technique banner exposes literal dollar delimiters around T=O(log r); the rest of the math in the statement/proof renders normally.
- Future repair: Use plain text such as “T is O(log r)” in the banner or the banner field’s supported math syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/lem-nevanlinna-growth-dominates-logarithm--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/lem-nevanlinna-growth-dominates-logarithm.md).

Exact frozen source lines:

```text
52: **Proof technique:** shift the convex Ahlfors–Shimizu potential to the logarithmic variable; a bounded ratio on an unbounded sequence and the convexity chord bound force $T=O(\log r)$, which the rational characterization converts into a contradiction with transcendence.
```

#### complex-analysis / confirmed 008: `thm-ring-of-level-one-modular-forms`

- Location: **Proof technique banner**; source lines 67.
- Pages: `level-one-modular-forms-and-the-j-invariant`.
- Visible defect: The uppercase proof-technique banner exposes literal dollar delimiters around k and 12.
- Future repair: Use plain text “induction on the weight k in steps of 12” or the banner field’s supported math syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/thm-ring-of-level-one-modular-forms--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/thm-ring-of-level-one-modular-forms.md).

Exact frozen source lines:

```text
67: **Proof technique:** induction on the weight $k$ in steps of $12$.
```

#### complex-analysis / confirmed 009: `cex-exp-one-over-z-is-essential-and-omits-zero`

- Location: **Title**; source lines 4.
- Pages: `isolated-singularities-and-laurent-series-examples`.
- Visible defect: The title renders e^{1/z} literally as text rather than as a typeset formula.
- Future repair: Wrap the expression in supported inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/cex-exp-one-over-z-is-essential-and-omits-zero--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/cex-exp-one-over-z-is-essential-and-omits-zero.md).

Exact frozen source lines:

```text
4: title: "e^{1/z} has an essential singularity at 0 and omits the value 0"
```

#### complex-analysis / confirmed 010: `cex-weak-boundary-inequality-does-not-suffice-for-rouche`

- Location: **Title**; source lines 4.
- Pages: `the-argument-principle-and-rouche-examples`.
- Visible defect: The comparison inequality is shown as literal ASCII notation in the title instead of typeset math.
- Future repair: Wrap the inequality in supported inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/cex-weak-boundary-inequality-does-not-suffice-for-rouche--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/cex-weak-boundary-inequality-does-not-suffice-for-rouche.md).

Exact frozen source lines:

```text
4: title: "The weak inequality |f-g| <= |g| does not suffice in Rouche"
```

#### complex-analysis / confirmed 011: `ex-residue-of-exp-over-z-cubed-by-derivative-formula`

- Location: **Title**; source lines 4.
- Pages: `isolated-singularities-and-laurent-series-examples`.
- Visible defect: The expression e^z/z^3 displays as literal plain text in the title.
- Future repair: Wrap the expression in supported inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-residue-of-exp-over-z-cubed-by-derivative-formula--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-residue-of-exp-over-z-cubed-by-derivative-formula.md).

Exact frozen source lines:

```text
4: title: "The residue of e^z/z^3 from the pole-derivative formula"
```

#### complex-analysis / confirmed 012: `thm-harmonic-hardy-representation-p-greater-one`

- Location: **Title**; source lines 4.
- Pages: `harmonic-hardy-classes-and-fatou-boundary-limits`.
- Visible defect: The title shows raw caret/subscript and ASCII inequality notation instead of typeset math.
- Future repair: Wrap the mathematical fragments in supported inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/thm-harmonic-hardy-representation-p-greater-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/thm-harmonic-hardy-representation-p-greater-one.md).

Exact frozen source lines:

```text
4: title: "h^p is the Poisson image of Lp for 1<p<=infinity"
```

#### complex-analysis / confirmed 013: `ex-circle-integral-of-one-over-z-minus-a`

- Location: **Title**; source lines 4.
- Pages: `contour-integration-examples`.
- Visible defect: The fraction is shown as plain ASCII text in the title instead of rendered mathematics.
- Future repair: Wrap the fraction in supported inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-circle-integral-of-one-over-z-minus-a--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-circle-integral-of-one-over-z-minus-a.md).

Exact frozen source lines:

```text
4: title: "Direct computation of the integral of 1/(z-a) around a semicircle and a full circle centred at a"
```

#### complex-analysis / confirmed 014: `ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x`

- Location: **Title**; source lines 4.
- Pages: `the-residue-theorem-examples`.
- Visible defect: Formula syntax is rendered as literal ASCII in the title instead of typeset math.
- Future repair: Use supported inline math delimiters around the expressions.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x.md).

Exact frozen source lines:

```text
4: title: "The integral of x^(alpha-1) / (1 + x) over (0, infinity) is pi / sin(pi alpha)"
```

#### complex-analysis / confirmed 015: `ex-poisson-integral-of-cos-theta`

- Location: **Title**; source lines 4.
- Pages: `harmonic-functions-and-the-poisson-integral-examples`.
- Visible defect: The formula is rendered literally in the title rather than typeset.
- Future repair: Use supported inline math delimiters around the formula.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-poisson-integral-of-cos-theta--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-poisson-integral-of-cos-theta.md).

Exact frozen source lines:

```text
4: title: "The Poisson integral of cos(theta) is r cos(theta)"
```

#### complex-analysis / confirmed 016: `lem-keyhole-branch-boundary-values`

- Location: **Title**; source lines 4.
- Pages: `the-residue-theorem`.
- Visible defect: Exponent notation renders as raw ASCII in the title rather than a typeset expression.
- Future repair: Use supported inline math delimiters around the expression.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/lem-keyhole-branch-boundary-values--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/lem-keyhole-branch-boundary-values.md).

Exact frozen source lines:

```text
4: title: "A keyhole contour sees the two boundary values of z^(alpha-1)"
```

#### complex-analysis / confirmed 017: `lem-nevanlinna-poisson-jensen-derivative-bound`

- Location: **Proof technique banner**; source lines 38, 39, 40, 41.
- Pages: `nevanlinna-second-main-theorem-and-defects`.
- Visible defect: Uppercase technique styling is expected, but its mathematical expressions are exposed as literal dollar delimiters and formula source.
- Future repair: Render the technique math through supported math handling or rewrite the banner expressions in plain prose.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/lem-nevanlinna-poisson-jensen-derivative-bound--02.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/lem-nevanlinna-poisson-jensen-derivative-bound.md).

Exact frozen source lines:

```text
38: with the logarithmic singularities interpreted as an integrable angular
39: integrand. Then there are constants $C_{f,\alpha}<\infty$ (depending only on
40: $f$ and $\alpha$) and $C_\alpha<\infty$ (depending only on $\alpha$) with
41: $$ m_0(r,f'/f)\le C_{f,\alpha}+C_\alpha\Bigl(\log^+T(R,f)+\log R+\log^+\frac1{R-r}\Bigr). $$
```

#### complex-analysis / confirmed 018: `thm-branch-power-agrees-with-integer-powers`

- Location: **Proof technique banner**; source lines 47.
- Pages: `conformal-mapping-branches-and-the-schwarz-lemma`.
- Visible defect: The uppercase technique banner exposes its math delimiters/formula source literally.
- Future repair: Use the supported banner math form or rewrite this formula in plain text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/thm-branch-power-agrees-with-integer-powers--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/thm-branch-power-agrees-with-integer-powers.md).

Exact frozen source lines:

```text
47: **Proof technique:** induction on the nonnegative integer $m$ with $\exp(mL(z))=z^m$.
```

#### complex-analysis / confirmed 019: `lem-hilbert-complex-solver-from-coercive-estimate`

- Location: **Facts & Assumptions reference [F10]**; source lines 94.
- Pages: `hormander-estimates-and-the-levi-problem`.
- Visible defect: The reference title leaks escaped math source inline in [F10] instead of displaying formatted notation.
- Future repair: Use a reference title without math source, or format the title through the supported math rendering path.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/lem-hilbert-complex-solver-from-coercive-estimate--02.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/lem-hilbert-complex-solver-from-coercive-estimate.md).

Exact frozen source lines:

```text
94: [F10] A bounded self-adjoint operator $A\in\mathcal B(H_1)$ satisfies $\langle Ax,y\rangle=\langle x,Ay\rangle$ for all $x,y\in H_1$, so in particular $\langle Ax,x\rangle\in\mathbb R$ ([[def-hilbert-space-adjoint]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-space-of-bounded-linear-operators]]).
```

#### complex-analysis / confirmed 020: `thm-c-two-characterization-of-plane-subharmonicity`

- Location: **Title**; source lines 4.
- Pages: `subharmonic-functions-and-the-dirichlet-problem`.
- Visible defect: Title renders C^2 as literal caret notation rather than typeset mathematics.
- Future repair: Typeset C^2 in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/thm-c-two-characterization-of-plane-subharmonicity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/thm-c-two-characterization-of-plane-subharmonicity.md).

Exact frozen source lines:

```text
4: title: "A C^2 function is subharmonic exactly when its Laplacian is nonnegative"
```

#### complex-analysis / confirmed 021: `ex-exp-one-over-z-shows-great-picard-is-sharp`

- Location: **Title**; source lines 4.
- Pages: `bloch-schottky-and-picard-examples`.
- Visible defect: Title renders e^(1/z) as raw ASCII exponent notation.
- Future repair: Typeset the exponential expression in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-exp-one-over-z-shows-great-picard-is-sharp--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-exp-one-over-z-shows-great-picard-is-sharp.md).

Exact frozen source lines:

```text
4: title: "The function e^(1/z) omits zero and takes every nonzero value infinitely often near the origin"
```

#### complex-analysis / confirmed 022: `ex-residue-of-p-over-q-at-a-simple-zero`

- Location: **Title**; source lines 4.
- Pages: `isolated-singularities-and-laurent-series-examples`.
- Visible defect: Title renders p(a)/q'(a) as raw ASCII mathematical notation.
- Future repair: Typeset the quotient and derivative in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-residue-of-p-over-q-at-a-simple-zero--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-residue-of-p-over-q-at-a-simple-zero.md).

Exact frozen source lines:

```text
4: title: "A residue of p over q at a simple zero is p(a)/q'(a)"
```

#### complex-analysis / confirmed 023: `ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane`

- Location: **Title**; source lines 4.
- Pages: `normal-families-and-montels-theorem-examples`.
- Visible defect: Title renders z^n as literal caret notation.
- Future repair: Typeset z^n in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane.md).

Exact frozen source lines:

```text
4: title: "The family z^n is normal on the unit disc and not normal on the complex plane"
```

#### complex-analysis / confirmed 024: `fs-every-continuous-function-on-a-convex-domain-has-a-primitive`

- Location: **Title**; source lines 4.
- Pages: `goursat-and-cauchys-theorem-in-a-convex-domain-examples`.
- Visible defect: The original standalone screenshot begins the title at “ALSE:”; the initial F is visibly clipped.
- Future repair: Correct the title layout so the entire word is visible.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/fs-every-continuous-function-on-a-convex-domain-has-a-primitive--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/fs-every-continuous-function-on-a-convex-domain-has-a-primitive.md).

Exact frozen source lines:

```text
4: title: "FALSE: every continuous complex-valued function on a convex domain has a primitive"
```

#### complex-analysis / confirmed 025: `fs-connected-complement-in-c-implies-simple-connectivity`

- Location: **Title**; source lines 4.
- Pages: `simply-connected-plane-domains-examples`.
- Visible defect: The original standalone screenshot begins the title at “F:”; “ALSE” is clipped.
- Future repair: Correct the title layout so the entire word is visible.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/fs-connected-complement-in-c-implies-simple-connectivity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/fs-connected-complement-in-c-implies-simple-connectivity.md).

Exact frozen source lines:

```text
4: title: "FALSE: a connected plane-domain complement in C already implies simple connectivity"
```

#### complex-analysis / confirmed 026: `def-nevanlinna-deficiency-and-ramification-index`

- Location: **Proof technique**; source lines 61.
- Pages: `nevanlinna-second-main-theorem-and-defects`.
- Visible defect: The CSS-uppercase technique banner exposes the raw $ delimiters and TeX command in the math-bearing phrase.
- Future repair: Render math in the technique banner without exposing delimiters/commands.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/def-nevanlinna-deficiency-and-ramification-index--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/def-nevanlinna-deficiency-and-ramification-index.md).

Exact frozen source lines:

```text
61: **Proof technique:** divide the First Main Theorem by $T$ and use that $T\to\infty$, then bound nonnegative numerators by $T$.
```

#### complex-analysis / confirmed 027: `lem-disc-hardy-traces-and-szego-reproducing`

- Location: **Proof technique**; source lines 100.
- Pages: `bergman-and-szego-kernels`.
- Visible defect: The CSS-uppercase technique banner shows literal $H^1$ delimiters instead of rendered math.
- Future repair: Render math in the technique banner without exposing delimiters.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/lem-disc-hardy-traces-and-szego-reproducing--03.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/lem-disc-hardy-traces-and-szego-reproducing.md).

Exact frozen source lines:

```text
100: **Proof technique:** direct, using radial convergence, the $H^1$ Cauchy representation, and a local closed-range argument.
```

#### complex-analysis / confirmed 028: `lem-round-circles-are-conformally-removable`

- Location: **Proof technique**; source lines 68.
- Pages: `quasisymmetry-welding-and-conformal-removability`.
- Visible defect: The CSS-uppercase technique banner shows literal $1$ delimiters around a mathematical quantity.
- Future repair: Render math in the technique banner without exposing delimiters.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/lem-round-circles-are-conformally-removable--02.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/lem-round-circles-are-conformally-removable.md).

Exact frozen source lines:

```text
68: **Proof technique:** prove removability of the unit circle by gluing analytic $1$-quasiconformality across it, then use Möbius invariance and subset monotonicity.
```

#### complex-analysis / confirmed 029: `lem-borel-nevanlinna-growth-increment`

- Location: **Proof technique**; source lines 58.
- Pages: `nevanlinna-second-main-theorem-and-defects`.
- Visible defect: The CSS-uppercase technique banner exposes raw $ delimiters for u and epsilon.
- Future repair: Render math in the technique banner without exposing delimiters/commands.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/lem-borel-nevanlinna-growth-increment--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/lem-borel-nevanlinna-growth-increment.md).

Exact frozen source lines:

```text
58: **Proof technique:** split the failure set according to the integer level of $u$; the first crossing radii $s_m$ of the levels $m$ give an explicit cover of the failure set by intervals of lengths $m^{-1-\varepsilon}$, whose total length is a convergent series.
```

#### complex-analysis / confirmed 030: `thm-nevanlinna-five-value-theorem`

- Location: **Proof technique**; source lines 55.
- Pages: `nevanlinna-second-main-theorem-and-defects`.
- Visible defect: The CSS-uppercase technique banner exposes raw $ delimiters and the TeX command \equiv.
- Future repair: Render math in the technique banner without exposing delimiters/commands.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/thm-nevanlinna-five-value-theorem--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/thm-nevanlinna-five-value-theorem.md).

Exact frozen source lines:

```text
55: **Proof technique:** normalise the five values to finite values by a Möbius map, compare the common value counts with the zeros of $F-G$, apply the truncated Second Main Theorem to both normalised functions, and use the characteristic growth to reach a contradiction unless $F-G\equiv0$.
```

#### complex-analysis / confirmed 031: `lem-lambda-transformation-laws`

- Location: **Item body**; source lines 4.
- Pages: `level-one-modular-forms-and-the-j-invariant-examples`.
- Visible defect: The title renders S_3 with a literal underscore instead of a subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/lem-lambda-transformation-laws--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/lem-lambda-transformation-laws.md).

Exact frozen source lines:

```text
4: title: "Transformation laws and S_3-action of the modular lambda function"
```

#### complex-analysis / confirmed 032: `cex-nevanlinna-error-bound-without-exceptional-radii`

- Location: **Counterexample**; source lines 54.
- Pages: `nevanlinna-second-main-theorem-and-defects-examples`.
- Visible defect: The CSS-uppercase technique banner displays the math delimiters and TeX commands literally (including \sum, subscripts, and exponent syntax). Uppercasing the banner itself is expected; the raw math within it is the defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/cex-nevanlinna-error-bound-without-exceptional-radii--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/cex-nevanlinna-error-bound-without-exceptional-radii.md).

Exact frozen source lines:

```text
54: **Proof technique:** build the Hayman lacunary series $\sum_n(z/r_n)^{\lambda_n}$ with super-exponentially growing exponents, estimate it from above and its derivative from below on the lacunary circles, and compare the standard proximity of $f'/f$ with the characteristic of $f$.
```

#### complex-analysis / confirmed 033: `ex-alternating-harmonic-power-series-at-the-boundary`

- Location: **Facts & Assumptions**; source lines 37.
- Pages: `complex-power-series-and-analytic-functions-examples`.
- Visible defect: Reference is displayed as a literal library URL/path in the rendered item instead of its linked title.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-alternating-harmonic-power-series-at-the-boundary--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-alternating-harmonic-power-series-at-the-boundary.md).

Exact frozen source lines:

```text
37: [L1] The alternating harmonic series converges to $\log2$ ([[thm-log-one-plus-x-power-series]]).
```

#### complex-analysis / confirmed 034: `def-level-one-eisenstein-series`

- Location: **Item body**; source lines 16.
- Pages: `level-one-modular-forms-and-the-j-invariant`.
- Visible defect: Viewed assigned screenshot tile `def-level-one-eisenstein-series--01.png` at original resolution. The title shows `E_k` and `E_2` as literal ASCII subscripts rather than typeset mathematics.
- Future repair: Use MathMarkdown delimiters around both title expressions.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/def-level-one-eisenstein-series--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/def-level-one-eisenstein-series.md).

Exact frozen source lines:

```text
16: title: "The level-one Eisenstein series E_k and the weight-two series E_2"
```

#### complex-analysis / confirmed 035: `ex-residue-evaluates-cos-over-one-plus-x-squared`

- Location: **Item body**; source lines 4.
- Pages: `the-residue-theorem-examples`.
- Visible defect: Viewed assigned screenshot tile `ex-residue-evaluates-cos-over-one-plus-x-squared--01.png` at original resolution. The title displays `cos x / (1 + x^2)` and `pi / e` as raw ASCII, including caret exponent notation.
- Future repair: Wrap the title expressions in MathMarkdown delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-residue-evaluates-cos-over-one-plus-x-squared--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-residue-evaluates-cos-over-one-plus-x-squared.md).

Exact frozen source lines:

```text
4: title: "The integral of cos x / (1 + x^2) over the real line is pi / e"
```

#### complex-analysis / confirmed 036: `thm-circle-integrals-of-integer-monomials`

- Location: **Item body**; source lines 4.
- Pages: `contour-integration`.
- Visible defect: Viewed assigned screenshot tile `thm-circle-integrals-of-integer-monomials--01.png` at original resolution. The title shows `(z-a)^m`, `-1`, and `2 pi i` literally rather than typeset.
- Future repair: Use MathMarkdown delimiters for the formula and values.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/thm-circle-integrals-of-integer-monomials--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/thm-circle-integrals-of-integer-monomials.md).

Exact frozen source lines:

```text
4: title: "On a positively oriented circle about a, the integral of (z-a)^m is zero for every integer m except -1, and is 2 pi i for m=-1"
```

#### complex-analysis / confirmed 037: `fs-every-domain-in-c-n-is-a-domain-of-holomorphy`

- Location: **Item body**; source lines 4.
- Pages: `domains-of-holomorphy-and-pseudoconvexity-examples`.
- Visible defect: Viewed assigned screenshot tile `fs-every-domain-in-c-n-is-a-domain-of-holomorphy--01.png` at original resolution. The title shows `C^n` literally rather than as the complex n-space notation used in the rendered body.
- Future repair: Use MathMarkdown delimiters around the title expression.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/fs-every-domain-in-c-n-is-a-domain-of-holomorphy--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/fs-every-domain-in-c-n-is-a-domain-of-holomorphy.md).

Exact frozen source lines:

```text
4: title: "FALSE: every domain in C^n is a domain of holomorphy"
```

#### complex-analysis / confirmed 038: `ex-riesz-measure-of-log-modulus-is-zero-divisor`

- Location: **Verification**; source lines 102.
- Pages: `logarithmic-potential-capacity-and-riesz-decomposition-examples`.
- Visible defect: Viewed assigned screenshot tile `ex-riesz-measure-of-log-modulus-is-zero-divisor--03.png` at original resolution. The proof conclusion is followed by the literal text `## Remarks` on the same rendered line; the Markdown heading is not parsed.
- Future repair: Place `## Remarks` on its own line after the proof conclusion.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-riesz-measure-of-log-modulus-is-zero-divisor--03.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-riesz-measure-of-log-modulus-is-zero-divisor.md).

Exact frozen source lines:

```text
102: 4.1 Since $\lambda$ is a positive Radon measure by step 2.1 that represents $\mu_u$ on all smooth compactly supported tests, the uniqueness clause of [F3] gives $\mu_u=\lambda=\sum_{a\in Z(f)}\operatorname{ord}_a(f)\delta_a$, which is the asserted formula; in particular every compact subset of $\Omega\setminus Z(f)$ carries no $\lambda$-mass, so $\log|f|$ has no Riesz mass off the zero set. [step 2.1, step 3.1, F3] ∎ ## Remarks
```

#### complex-analysis / confirmed 039: `cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane`

- Location: **title**; source lines 4.
- Pages: `normal-families-and-montels-theorem-examples`.
- Visible defect: The preview title displays the exponent as literal ASCII e^(nz), including the caret and parentheses, rather than typeset mathematics.
- Future repair: Set the formula in the title using supported inline math delimiters, or use a plain-language title without a raw formula.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane.md).

Exact frozen source lines:

```text
4: title: "The family e^(nz) converges chordally to infinity on the right half-plane without being holomorphically normal there"
```

#### complex-analysis / confirmed 040: `ex-a-harmonic-conjugate-of-x-squared-minus-y-squared`

- Location: **title**; source lines 4.
- Pages: `harmonic-functions-and-the-poisson-integral-examples`.
- Visible defect: The preview title displays x^2-y^2 with a literal caret and exponent digits; the formula is not typeset.
- Future repair: Set the formula in the title using supported inline math delimiters, or use a plain-language title without a raw formula.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-a-harmonic-conjugate-of-x-squared-minus-y-squared--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-a-harmonic-conjugate-of-x-squared-minus-y-squared.md).

Exact frozen source lines:

```text
4: title: "2xy is a harmonic conjugate of x^2-y^2"
```

#### complex-analysis / confirmed 041: `ex-residue-evaluates-int-one-over-one-plus-x-squared`

- Location: **title**; source lines 4.
- Pages: `the-residue-theorem-examples`.
- Visible defect: The preview title exposes x^2 as literal ASCII with a caret rather than rendered mathematics.
- Future repair: Set the formula in the title using supported inline math delimiters, or use a plain-language title without a raw formula.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-residue-evaluates-int-one-over-one-plus-x-squared--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-residue-evaluates-int-one-over-one-plus-x-squared.md).

Exact frozen source lines:

```text
4: title: "The integral of 1 / (1 + x^2) over the real line is pi"
```

#### complex-analysis / confirmed 042: `lem-e2-transformation-law`

- Location: **title**; source lines 4.
- Pages: `level-one-modular-forms-and-the-j-invariant`.
- Visible defect: The preview title exposes E_2 with a literal underscore rather than a typeset subscript.
- Future repair: Set E_2 using supported inline math delimiters, or spell it out as E two in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/lem-e2-transformation-law--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/lem-e2-transformation-law.md).

Exact frozen source lines:

```text
4: title: "The transformation law of the weight-two Eisenstein series E_2"
```

#### complex-analysis / confirmed 043: `cex-reversing-orientation-preserves-a-contour-integral`

- Location: **Statement refuted**; source lines 29, 31.
- Pages: `contour-integration-examples`.
- Visible defect: The rendered item starts with the item title and then places the statement sentence directly in the body; the “Statement refuted” section marker/banner is absent. Other counterexample tiles in this lane show that marker. This is a missing section rendering, not a clipping claim.
- Future repair: Render the “Statement refuted” section label/banner consistently for this counterexample.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/cex-reversing-orientation-preserves-a-contour-integral--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/cex-reversing-orientation-preserves-a-contour-integral.md).

Exact frozen source lines:

```text
29: ## Statement refuted
31: Reversing a contour's orientation preserves every complex contour integral.
```

#### complex-analysis / confirmed 044: `thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range`

- Location: **Proof**; source lines 88.
- Pages: `hodge-theory-on-compact-riemann-surfaces`.
- Visible defect: The proof-technique banner shows escaped inline-math delimiters and command text literally (including \$I-B\$ and \$\DELTA\prime\prime\$) after CSS uppercasing; the mathematics was not typeset inside the banner. Uppercase banner styling itself is expected.
- Future repair: Keep math in proof-technique banners in a math-aware child element or render the banner text without literal escaped TeX delimiters.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range--02.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range.md).

Exact frozen source lines:

```text
88: **Proof technique:** Use compact-perturbation facts for $I-B$ and the exact Green identities for $\Delta''$.
```

#### complex-analysis / confirmed 045: `thm-poisson-jensen-formula-meromorphic-function`

- Location: **Proof**; source lines 69, 71, 72, 73, 75.
- Pages: `jensen-theory-and-nevanlinnas-first-main-theorem`.
- Visible defect: The proof step label “1.3 Form” is rendered in its own step card while the following display equation and its continuation are detached from that card, breaking the visual grouping of the step. Screenshot shows this separation; no clipping is asserted.
- Future repair: Keep the display equation and explanatory paragraph inside the numbered proof-step container when a display block follows the step lead-in.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/thm-poisson-jensen-formula-meromorphic-function--02.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/thm-poisson-jensen-formula-meromorphic-function.md).

Exact frozen source lines:

```text
69: 1.3 Form
71: $$
72: g(z)=f(z)\frac{\prod_p B_p(z)^{\nu_p}}{\prod_b B_b(z)^{m_b}}.
73: $$
75: By [F3], each zero factor cancels locally against the corresponding denominator factor; by [F4], each pole is cancelled by the numerator factor. Thus $g$ is holomorphic and nowhere zero on a neighbourhood of the closed disc, and $|g|=|f|$ on the boundary. [F3, F4, step 1.1, step 1.2, given]
```

### Optional typography

#### complex-analysis / typography 001: `cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle`

- Location: **Item body**; source lines 4.
- Pages: `the-argument-principle-and-rouche-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle.md).

Exact frozen source lines:

```text
4: title: "The function e^(1/z) shows that essential singularities lie outside the argument principle"
```

#### complex-analysis / typography 002: `ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc`

- Location: **Item body**; source lines 4.
- Pages: `the-argument-principle-and-rouche-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc.md).

Exact frozen source lines:

```text
4: title: "The equation e^z = 3z has exactly one solution in the unit disc"
```

#### complex-analysis / typography 003: `fs-level-one-e2-is-a-weight-two-modular-form`

- Location: **Item body**; source lines 4.
- Pages: `level-one-modular-forms-and-the-j-invariant-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/fs-level-one-e2-is-a-weight-two-modular-form--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/fs-level-one-e2-is-a-weight-two-modular-form.md).

Exact frozen source lines:

```text
4: title: "FALSE: the weight-two Eisenstein series E_2 is a modular form"
```

#### complex-analysis / typography 004: `ex-residue-evaluates-sine-over-x-principal-value`

- Location: **Item body**; source lines 4.
- Pages: `the-residue-theorem-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/complex-analysis/screenshots/ex-residue-evaluates-sine-over-x-principal-value--01.png); [frozen source](math-library-rendering-audit-2026-10-23/complex-analysis/snapshots/ex-residue-evaluates-sine-over-x-principal-value.md).

Exact frozen source lines:

```text
4: title: "The whole-line principal value of sin x / x is pi, so the half-line integral is pi / 2"
```

