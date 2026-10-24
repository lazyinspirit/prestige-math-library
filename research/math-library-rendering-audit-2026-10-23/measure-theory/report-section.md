## Measure Theory

Completed visual review of **1026 items across 56 pages**, with **1285 image tiles**. Findings: 53 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/measure-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/measure-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/measure-theory/category-review-receipt.json).

### Confirmed rendering defects

#### measure-theory / confirmed 001: `cex-fubini-fails-without-l-one-integrability`

- Location: **frontmatter title**; source lines 4.
- Pages: `product-measures-and-the-fubini-tonelli-theorems-examples`.
- Visible defect: The title displays the polynomial quotient with literal ASCII carets rather than typeset powers.
- Future repair: Use math delimiters for the notation in the title, or replace it with words that do not require mathematical typesetting.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cex-fubini-fails-without-l-one-integrability--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cex-fubini-fails-without-l-one-integrability.md).

Exact frozen source lines:

```text
4: title: "The function (x^2-y^2)/(x^2+y^2)^2 shows that Fubini's integrability hypothesis is not decorative"
```

#### measure-theory / confirmed 002: `cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function`

- Location: **frontmatter title**; source lines 4.
- Pages: `modes-of-convergence-egorov-and-lusin`.
- Visible defect: The title displays R^n literally in both occurrences instead of typesetting the Euclidean spaces.
- Future repair: Use math delimiters for the notation in the title, or replace it with words that do not require mathematical typesetting.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function.md).

Exact frozen source lines:

```text
4: title: "Assuming countable choice and dependent choice, a measurable function on a finite-measure subset of R^n agrees there, off a small set, with a continuous function on R^n"
```

#### measure-theory / confirmed 003: `ex-finite-partition-sigma-algebra`

- Location: **frontmatter title**; source lines 4.
- Pages: `sigma-algebras-and-borel-sets-examples`.
- Visible defect: The title displays k and 2^k literally as prose rather than typesetting the exponent.
- Future repair: Use math delimiters for the notation in the title, or replace it with words that do not require mathematical typesetting.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-finite-partition-sigma-algebra--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-finite-partition-sigma-algebra.md).

Exact frozen source lines:

```text
4: title: "A partition into k nonempty blocks generates a sigma-algebra with 2^k members"
```

#### measure-theory / confirmed 004: `fs-c-c-is-dense-in-l-infinity-for-radon-measures`

- Location: **frontmatter title**; source lines 4.
- Pages: `radon-measures-and-the-riesz-markov-kakutani-theorem`.
- Visible defect: The title displays C_c(X) and L^infinity(mu) as raw ASCII math.
- Future repair: Use math delimiters for the notation in the title, or replace it with words that do not require mathematical typesetting.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/fs-c-c-is-dense-in-l-infinity-for-radon-measures--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/fs-c-c-is-dense-in-l-infinity-for-radon-measures.md).

Exact frozen source lines:

```text
4: title: "C_c(X) is dense in L^infinity(mu) for every Radon measure"
```

#### measure-theory / confirmed 005: `thm-cardinality-of-the-borel-sigma-algebra-on-rn`

- Location: **frontmatter title**; source lines 4.
- Pages: `sigma-algebras-and-borel-sets`.
- Visible defect: The title displays R^n literally instead of typesetting the Euclidean space.
- Future repair: Use math delimiters for the notation in the title, or replace it with words that do not require mathematical typesetting.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-cardinality-of-the-borel-sigma-algebra-on-rn--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-cardinality-of-the-borel-sigma-algebra-on-rn--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-cardinality-of-the-borel-sigma-algebra-on-rn.md).

Exact frozen source lines:

```text
4: title: "Assuming the Axiom of Choice, the Borel sigma-algebra on R^n has cardinality continuum for n at least one"
```

#### measure-theory / confirmed 006: `cex-l-two-not-subset-l-one-on-the-line`

- Location: **Proof technique**; source lines 34.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: The technique banner prints raw TeX delimiters/caret and comparison macros for the exponent range.
- Future repair: Rewrite the banner in plain words or ensure mathematical expressions are passed through the math renderer; keep the intended uppercase technique-banner styling.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cex-l-two-not-subset-l-one-on-the-line--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cex-l-two-not-subset-l-one-on-the-line.md).

Exact frozen source lines:

```text
34: **Proof technique:** Use the power-function family $x^{-a}$ at infinity with $1/2<a\le1$.
```

#### measure-theory / confirmed 007: `cor-cauchy-schwarz-inequality-for-l-two`

- Location: **Proof technique**; source lines 45.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The technique banner prints raw dollar delimiters around p=q=2.
- Future repair: Rewrite the banner in plain words or ensure mathematical expressions are passed through the math renderer; keep the intended uppercase technique-banner styling.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cor-cauchy-schwarz-inequality-for-l-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cor-cauchy-schwarz-inequality-for-l-two.md).

Exact frozen source lines:

```text
45: **Proof technique:** Specialize Holder to $p=q=2$, and inherit the equality clause from the strict-exponent equality theorem.
```

#### measure-theory / confirmed 008: `cor-l-p-convergence-implies-convergence-in-measure`

- Location: **Proof technique**; source lines 43.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The technique banner prints raw dollar delimiters and TeX-like notation for the cases and expressions.
- Future repair: Rewrite the banner in plain words or ensure mathematical expressions are passed through the math renderer; keep the intended uppercase technique-banner styling.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cor-l-p-convergence-implies-convergence-in-measure--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cor-l-p-convergence-implies-convergence-in-measure.md).

Exact frozen source lines:

```text
43: **Proof technique:** For $1 \le p < infinity$, apply Chebyshev-Markov to $|f_n-f|^p$. For $p = infinity$, the essential-supremum bound makes the bad set null for all large $n$.
```

#### measure-theory / confirmed 009: `thm-parallelogram-law-in-l-two`

- Location: **Proof technique**; source lines 42.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The technique banner prints raw dollar delimiters around the displayed norm identity.
- Future repair: Rewrite the banner in plain words or ensure mathematical expressions are passed through the math renderer; keep the intended uppercase technique-banner styling.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-parallelogram-law-in-l-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-parallelogram-law-in-l-two.md).

Exact frozen source lines:

```text
42: **Proof technique:** Expand $|f + g|^2 + |f - g|^2$ pointwise to $2|f|^2 + 2|g|^2$ and integrate.
```

#### measure-theory / confirmed 010: `thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one`

- Location: **Proof technique**; source lines 51.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The technique banner prints raw dollar delimiters around variables and inequalities.
- Future repair: Rewrite the banner in plain words or ensure mathematical expressions are passed through the math renderer; keep the intended uppercase technique-banner styling.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one.md).

Exact frozen source lines:

```text
51: **Proof technique:** For nonnegative numbers $a,b$ and $0<p<1$ one has $(a+b)^p\le a^p+b^p$. Apply this pointwise to $f$ and $g$ and integrate.
```

#### measure-theory / confirmed 011: `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric`

- Location: **Proof technique**; source lines 63.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The technique banner prints raw dollar delimiters and TeX-like notation for the defining metric and exponent range.
- Future repair: Rewrite the banner in plain words or ensure mathematical expressions are passed through the math renderer; keep the intended uppercase technique-banner styling.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric.md).

Exact frozen source lines:

```text
63: **Proof technique:** Because $(a+b)^p\le a^p+b^p$ for $0<p<1$, $d_p([f],[g])=\int|f-g|^p\,d\mu$ defines a metric on quotient classes and is translation invariant. Completeness follows by repeating the Riesz-Fischer telescoping argument without taking $p$-th roots.
```

#### measure-theory / confirmed 012: `thm-integer-base-map-is-strongly-mixing`

- Location: **Statement; Facts & Assumptions; Proof / Given**; source lines 26, 30, 38.
- Pages: `measure-preserving-transformations-and-poincare-recurrence`.
- Visible defect: The rendered body contains bare mathematical notation such as A,B and D_b outside math delimiters; D_b visibly retains its underscore in the Facts & Assumptions row. The same unmarked statement is repeated in the Proof Given block.
- Future repair: Delimit mathematical variables and expressions in the statement and repeated Given block, and in [F1], so inline math typesets consistently.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-integer-base-map-is-strongly-mixing--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-integer-base-map-is-strongly-mixing.md).

Exact frozen source lines:

```text
26: Assume countable choice. For every integer $b\ge2$ and every pair of Borel or completed Lebesgue measurable circle sets A,B, $\lambda(A\cap D_b^{-n}B)\to\lambda(A)\lambda(B)$. Thus $D_b$ is strongly mixing for either measure.
30: [F1] D_b preserves either probability measure. [[prop-integer-base-map-preserves-lebesgue-measure]].
38: **Given:** Assume countable choice. For every integer $b\ge2$ and every pair of Borel or completed Lebesgue measurable circle sets A,B, $\lambda(A\cap D_b^{-n}B)\to\lambda(A)\lambda(B)$. Thus $D_b$ is strongly mixing for either measure.
```

#### measure-theory / confirmed 013: `cex-half-norm-fails-the-triangle-inequality-on-two-indicators`

- Location: **Verification / proof technique**; source lines 39.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.
- Future repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cex-half-norm-fails-the-triangle-inequality-on-two-indicators--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cex-half-norm-fails-the-triangle-inequality-on-two-indicators.md).

Exact frozen source lines:

```text
39: **Proof technique:** Take two disjoint indicators of equal positive measure. Then the $1/2$-functional of the sum exceeds the sum of the two $1/2$-functionals.
```

#### measure-theory / confirmed 014: `ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing`

- Location: **Verification / proof technique**; source lines 47.
- Pages: `the-duality-of-lp-and-lq-examples`.
- Visible defect: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.
- Future repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing.md).

Exact frozen source lines:

```text
47: **Proof technique:** Specialize the counting-measure duality corollary to $p=q=2$ and rewrite the integral pairing as an ordinary series.
```

#### measure-theory / confirmed 015: `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q`

- Location: **Verification / proof technique**; source lines 51.
- Pages: `the-duality-of-lp-and-lq`.
- Visible defect: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.
- Future repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q.md).

Exact frozen source lines:

```text
51: **Proof technique:** For $1<p<\infty$, test the Radon-Nikodym density against bounded truncated extremizers and pass to the limit by monotone convergence. For $p=1$, level-set testing forces the essential supremum below the operator norm.
```

#### measure-theory / confirmed 016: `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class`

- Location: **Verification / proof technique**; source lines 57.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.
- Future repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class.md).

Exact frozen source lines:

```text
57: **Proof technique:** Use countable-union stability of null sets for addition and scalar multiplication. For $1 \le p < infinity$, the $p$-seminorm vanishes exactly when the integral of $|f|^p$ is zero; for $p = infinity$, vanishing means the essential supremum is zero.
```

#### measure-theory / confirmed 017: `thm-ell-p-includes-into-ell-r-for-p-less-r`

- Location: **Verification / proof technique**; source lines 45.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.
- Future repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-ell-p-includes-into-ell-r-for-p-less-r--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-ell-p-includes-into-ell-r-for-p-less-r.md).

Exact frozen source lines:

```text
45: **Proof technique:** For counting measure, only finitely many terms can exceed $1$ when a sequence lies in $\ell^p$. Split the series at that finite set and compare $|a_n|^r$ to $|a_n|^p$ on the tail where $|a_n|\le1$.
```

#### measure-theory / confirmed 018: `thm-riesz-fischer-completeness-of-l-p`

- Location: **Verification / proof technique**; source lines 63.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.
- Future repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-riesz-fischer-completeness-of-l-p--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-riesz-fischer-completeness-of-l-p--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-riesz-fischer-completeness-of-l-p.md).

Exact frozen source lines:

```text
63: **Proof technique:** For $1 \le p < infinity$, choose a rapidly Cauchy subsequence by least indices, sum the successive differences with monotone convergence and Minkowski, and recover the limit by dominated convergence. For $p = infinity$, union the exceptional null sets and take the pointwise limit outside them.
```

#### measure-theory / confirmed 019: `ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval`

- Location: **Title**; source lines 4.
- Pages: `modes-of-convergence-egorov-and-lusin-examples`.
- Visible defect: The title math is displayed as raw ASCII caret/underscore notation.
- Future repair: Typeset the exponent in the title, e.g. `Egorov for $x^k$ on the unit interval`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval.md).

Exact frozen source lines:

```text
4: title: "Egorov for x^k on the unit interval"
```

#### measure-theory / confirmed 020: `ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition`

- Location: **Title**; source lines 4.
- Pages: `signed-and-complex-measures-hahn-and-jordan-examples`.
- Visible defect: The title math is displayed as raw ASCII caret/underscore notation.
- Future repair: Typeset the subscripts in the title, e.g. `$\delta_1$` and `$\delta_{-1}$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition.md).

Exact frozen source lines:

```text
4: title: "The signed measure delta_1 minus delta_-1 has the obvious Hahn and Jordan decomposition"
```

#### measure-theory / confirmed 021: `cex-distinct-borel-measures-can-represent-the-same-c-c-functional`

- Location: **title**; source lines 4.
- Pages: `radon-measures-and-the-riesz-markov-kakutani-theorem-examples`.
- Visible defect: The title displays C_c with a literal underscore rather than a subscript. The body typesets C_c(X) correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cex-distinct-borel-measures-can-represent-the-same-c-c-functional--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cex-distinct-borel-measures-can-represent-the-same-c-c-functional.md).

Exact frozen source lines:

```text
4: title: "Distinct Borel measures can represent the same C_c functional"
```

#### measure-theory / confirmed 022: `lem-positive-c-zero-functionals-have-finite-regular-representing-measures`

- Location: **title**; source lines 4.
- Pages: `radon-measures-and-the-riesz-markov-kakutani-theorem`.
- Visible defect: The title displays C_0(X) with a literal underscore rather than a subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/lem-positive-c-zero-functionals-have-finite-regular-representing-measures--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/lem-positive-c-zero-functionals-have-finite-regular-representing-measures.md).

Exact frozen source lines:

```text
4: title: "Positive C_0(X) functionals have finite regular representing measures"
```

#### measure-theory / confirmed 023: `rem-borel-product-equality-needs-second-countability`

- Location: **title**; source lines 4.
- Pages: `product-measures-and-the-fubini-tonelli-theorems`.
- Visible defect: The title emits B(X) tensor B(Y) = B(X x Y) as unformatted ASCII mathematical notation.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/rem-borel-product-equality-needs-second-countability--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/rem-borel-product-equality-needs-second-countability.md).

Exact frozen source lines:

```text
4: title: "The equality B(X) tensor B(Y) = B(X x Y) needs second countability"
```

#### measure-theory / confirmed 024: `thm-lusins-theorem`

- Location: **title**; source lines 4.
- Pages: `modes-of-convergence-egorov-and-lusin`.
- Visible defect: The title displays R^n with a literal caret rather than a superscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-lusins-theorem--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-lusins-theorem--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-lusins-theorem.md).

Exact frozen source lines:

```text
4: title: "Assuming countable choice, Lusin's theorem on finite-measure subsets of R^n"
```

#### measure-theory / confirmed 025: `ex-a-power-function-realises-the-duality-norm-on-unit-interval`

- Location: **proof technique**; source lines 46.
- Pages: `the-duality-of-lp-and-lq-examples`.
- Visible defect: The uppercase technique banner renders inline $...$ math delimiters literally (including $g(x)=x^{-a}$ and $0<a<1/q$).
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-a-power-function-realises-the-duality-norm-on-unit-interval--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-a-power-function-realises-the-duality-norm-on-unit-interval.md).

Exact frozen source lines:

```text
46: **Proof technique:** Take $g(x)=x^{-a}$ with $0<a<1/q$, normalize the extremizer $|g|^{q-1}$ explicitly, and compute both norms by one-variable power integrals.
```

#### measure-theory / confirmed 026: `ex-proportional-functions-realise-the-equality-case-of-holder`

- Location: **proof technique**; source lines 41.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: The uppercase technique banner renders $|f|^p$ and $|g|^q$ with literal dollar delimiters.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-proportional-functions-realise-the-equality-case-of-holder--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-proportional-functions-realise-the-equality-case-of-holder.md).

Exact frozen source lines:

```text
41: **Proof technique:** Choose nonnegative functions with $|f|^p$ and $|g|^q$ proportional almost everywhere and invoke the equality theorem.
```

#### measure-theory / confirmed 027: `lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu`

- Location: **proof technique**; source lines 42.
- Pages: `the-duality-of-lp-and-lq`.
- Visible defect: The uppercase technique banner renders the raw \$ delimiters and TeX command in \$\mathbf 1_E\$.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu.md).

Exact frozen source lines:

```text
42: **Proof technique:** If $\mu(E)=0$, then $\mathbf 1_E$ is the zero class in $L^p$, so the induced set function must vanish on $E$.
```

#### measure-theory / confirmed 028: `cor-graph-of-a-measurable-function-is-lebesgue-null`

- Location: **Title**; source lines 4.
- Pages: `product-measures-and-the-fubini-tonelli-theorems`.
- Visible defect: The Euclidean dimension in the title is displayed as raw ASCII math.
- Future repair: Typeset the title notation, for example `$\mathbb R^n$` and `$\mathbb R$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cor-graph-of-a-measurable-function-is-lebesgue-null--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cor-graph-of-a-measurable-function-is-lebesgue-null.md).

Exact frozen source lines:

```text
4: title: "The graph of a measurable function R^n to R is Lebesgue null"
```

#### measure-theory / confirmed 029: `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`

- Location: **Title**; source lines 4.
- Pages: `radon-measures-and-the-riesz-markov-kakutani-theorem`.
- Visible defect: The subscript in the space name is displayed as raw ASCII math.
- Future repair: Typeset the space name in the title, for example `$C_0(X)$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals.md).

Exact frozen source lines:

```text
4: title: "The bounded complex dual of C_0(X) is regular complex measures"
```

#### measure-theory / confirmed 030: `rem-measurable-function-codomain-convention`

- Location: **Remarks**; source lines 39.
- Pages: `measurable-functions-and-simple-approximation`.
- Visible defect: A composition symbol is exposed as a TeX command in the prose.
- Future repair: Render the expression as math, such as `$g\circ f$`, instead of inline code.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/rem-measurable-function-codomain-convention--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/rem-measurable-function-codomain-convention.md).

Exact frozen source lines:

```text
39: `g \circ f` with $g$ merely Lebesgue measurable possible.
```

#### measure-theory / confirmed 031: `cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality`

- Location: **Proof technique banner**; source lines 48.
- Pages: `the-duality-of-lp-and-lq-examples`.
- Visible defect: Math markup remains raw inside the intentionally uppercase technique banner.
- Future repair: Use plain words in the banner or adjust the renderer to typeset math within it.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality.md).

Exact frozen source lines:

```text
48: **Proof technique:** Build the countable-cocountable measure directly, then use Chebyshev-Markov to force every $L^1$ representative to vanish off an at most countable set while $L^\infty$ still contains distinct bounded representatives.
```

#### measure-theory / confirmed 032: `ex-k-to-the-minus-a-membership-in-ell-p`

- Location: **Proof technique banner**; source lines 46.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: Math markup remains raw inside the intentionally uppercase technique banner.
- Future repair: Use plain words in the banner or adjust the renderer to typeset math within it.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-k-to-the-minus-a-membership-in-ell-p--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-k-to-the-minus-a-membership-in-ell-p.md).

Exact frozen source lines:

```text
46: **Proof technique:** Apply the real $p$-series test to the series $\sum k^{-ap}$ and read off the threshold $ap>1$.
```

#### measure-theory / confirmed 033: `fs-l-one-half-with-its-p-functional-is-a-normed-space`

- Location: **Proof technique banner**; source lines 37.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: Math delimiters remain raw inside the intentionally uppercase technique banner.
- Future repair: Use plain words in the banner or adjust the renderer to typeset math within it.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/fs-l-one-half-with-its-p-functional-is-a-normed-space--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/fs-l-one-half-with-its-p-functional-is-a-normed-space.md).

Exact frozen source lines:

```text
37: **Proof technique:** Refute with the explicit $1/2$-triangle-inequality failure on two indicators.
```

#### measure-theory / confirmed 034: `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm`

- Location: **Proof technique banner**; source lines 57.
- Pages: `the-duality-of-lp-and-lq`.
- Visible defect: Math delimiters and TeX commands remain raw inside the intentionally uppercase technique banner.
- Future repair: Use plain words in the banner or adjust the renderer to typeset math within it.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm.md).

Exact frozen source lines:

```text
57: **Proof technique:** Use Holder for the upper bound. For $1<p<\infty$ test against the normalized extremizer with conjugate phase; for $p=1$ use a finite-measure subset of an almost-maximal level set, which is exactly where semifiniteness enters.
```

#### measure-theory / confirmed 035: `thm-equality-case-in-holder-inequality`

- Location: **Proof technique banner**; source lines 58.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: Math delimiters and formulas remain raw inside the intentionally uppercase technique banner.
- Future repair: Use plain words in the banner or adjust the renderer to typeset math within it.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-equality-case-in-holder-inequality--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-equality-case-in-holder-inequality--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-equality-case-in-holder-inequality.md).

Exact frozen source lines:

```text
58: **Proof technique:** Trace where equality can occur in the normalized Young-inequality proof. Equality in Young forces the normalized powers $|f|^p$ and $|g|^q$ to be proportional almost everywhere, and conversely that proportionality makes the inequality an equality.
```

#### measure-theory / confirmed 036: `thm-holder-inequality-for-integrals`

- Location: **Proof technique banner**; source lines 69.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: Math delimiters and TeX commands remain raw inside the intentionally uppercase technique banner.
- Future repair: Use plain words in the banner or adjust the renderer to typeset math within it.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-holder-inequality-for-integrals--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-holder-inequality-for-integrals--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-holder-inequality-for-integrals.md).

Exact frozen source lines:

```text
69: **Proof technique:** For $1 < p < infinity$, normalize the nonzero norms and apply the published Young inequality pointwise before integrating. Treat the endpoint pairs $(1,\infty)$ and $(\infty,1)$ separately from the essential-bound definition.
```

#### measure-theory / confirmed 037: `thm-lyapunov-interpolation-inequality-for-l-p-norms`

- Location: **Proof technique banner**; source lines 47.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: Math delimiters and formulas remain raw inside the intentionally uppercase technique banner.
- Future repair: Use plain words in the banner or adjust the renderer to typeset math within it.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-lyapunov-interpolation-inequality-for-l-p-norms--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-lyapunov-interpolation-inequality-for-l-p-norms.md).

Exact frozen source lines:

```text
47: **Proof technique:** If $1/p = \theta/p_0 + (1 - \theta)/p_1$, rewrite $|f|^p$ as the product $|f|^{\theta p}|f|^{(1-\theta)p}$ and apply Holder with conjugate exponents $p_0/(\theta p)$ and $p_1/((1-\theta)p)$.
```

#### measure-theory / confirmed 038: `thm-minkowski-inequality-for-integrals`

- Location: **Proof technique banner**; source lines 52.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: Math delimiters and TeX commands remain raw inside the intentionally uppercase technique banner.
- Future repair: Use plain words in the banner or adjust the renderer to typeset math within it.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-minkowski-inequality-for-integrals--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-minkowski-inequality-for-integrals--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-minkowski-inequality-for-integrals.md).

Exact frozen source lines:

```text
52: **Proof technique:** For $1 < p < infinity$, first use the two-term finite Holder inequality to show $|f + g|^p$ is integrable, then apply the standard Holder step to $|f + g| |f + g|^{p - 1}$. The cases $p = 1$ and $p = \infty$ are handled directly from subadditivity of absolute value and the essential-supremum bound.
```

#### measure-theory / confirmed 039: `cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm`

- Location: **Counterexample**; source lines 38.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: Uppercase technique banner displays literal $[0,1]$.
- Future repair: Keep the uppercase technique banner, but render or suppress inline math in its text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm.md).

Exact frozen source lines:

```text
38: **Proof technique:** Use the indicator of a countable null subset of $[0,1]$. It is not the zero function, but its $p$-seminorm and essential supremum both vanish.
```

#### measure-theory / confirmed 040: `ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one`

- Location: **Verification**; source lines 46.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: Uppercase technique banner displays literal $[0,1]$.
- Future repair: Keep the uppercase technique banner, but render or suppress inline math in its text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one.md).

Exact frozen source lines:

```text
46: **Proof technique:** Use that the rationals in $[0,1]$ are countable and therefore null, so every positive threshold is exceeded only on a null set.
```

#### measure-theory / confirmed 041: `fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r`

- Location: **Refutation**; source lines 41.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: Uppercase technique banner displays literal $L^1\setminus L^2$ and $L^2\setminus L^1$.
- Future repair: Keep the uppercase technique banner, but render or suppress inline math in its text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r.md).

Exact frozen source lines:

```text
41: **Proof technique:** Refute with the two power-function counterexamples on the line: one witness lies in $L^1\setminus L^2$ and another lies in $L^2\setminus L^1$.
```

#### measure-theory / confirmed 042: `thm-equality-case-in-minkowski-inequality`

- Location: **Proof**; source lines 50.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: Uppercase technique banner displays literal $|f|$ and $|g|$.
- Future repair: Keep the uppercase technique banner, but render or suppress inline math in its text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-equality-case-in-minkowski-inequality--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-equality-case-in-minkowski-inequality.md).

Exact frozen source lines:

```text
50: **Proof technique:** Examine the Holder step in the standard proof of Minkowski. Equality forces the nonnegative functions $|f|$ and $|g|$ to be proportional almost everywhere, and the pointwise triangle inequality then forces the same sign.
```

#### measure-theory / confirmed 043: `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities`

- Location: **Proof**; source lines 57.
- Pages: `the-duality-of-lp-and-lq`.
- Visible defect: Continuation tile visibly shows raw inline mathematics in the uppercase technique banner, including the set function formula.
- Future repair: Keep the uppercase technique banner, but render or suppress inline math in its text.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities.md).

Exact frozen source lines:

```text
57: **Proof technique:** Apply Radon-Nikodym to the measure $\nu(E)=\Lambda(\mathbf 1_E)$, identify the pairing first on indicators and simple functions, and then extend to bounded measurable representatives by dominated convergence.
```

#### measure-theory / confirmed 044: `cex-equal-iterated-integrals-do-not-imply-l-one-integrability`

- Location: **Facts & Assumptions**; source lines 51.
- Pages: `product-measures-and-the-fubini-tonelli-theorems-examples`.
- Visible defect: The linked reference title appears as literal (x^2-y^2)/(x^2+y^2)^2.
- Future repair: Typeset the formula in the reference title or use a prose title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cex-equal-iterated-integrals-do-not-imply-l-one-integrability--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cex-equal-iterated-integrals-do-not-imply-l-one-integrability.md).

Exact frozen source lines:

```text
51: [L1] The function $f$ from [[cex-fubini-fails-without-l-one-integrability]] has two existing iterated integrals equal to $\pi/4$ and $-\pi/4$, and it is not in $L^1$.
```

#### measure-theory / confirmed 045: `ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership`

- Location: **Verification**; source lines 49.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: The uppercase technique banner displays formula delimiters and LaTeX literally (for example $X^{-AP}$, $(0,1)$, $(1,\INFTY)$, and $AP<1$).
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/research/math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership.md).

Exact frozen source lines:

```text
49: **Proof technique:** Integrate $x^{-ap}$ on $(0,1)$ and on $(1,\infty)$ using the real-power antiderivative and compare the two thresholds $ap<1$ and $ap>1$.
```

#### measure-theory / confirmed 046: `fs-holder-equality-forces-the-functions-themselves-to-be-proportional`

- Location: **Refutation**; source lines 43.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`.
- Visible defect: The banner shows raw $P=1$, $Q=\INFTY$, $F=\CHI_A$, and $G=1$ markup in uppercase text.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/research/math-library-rendering-audit-2026-10-23/measure-theory/screenshots/fs-holder-equality-forces-the-functions-themselves-to-be-proportional--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/fs-holder-equality-forces-the-functions-themselves-to-be-proportional.md).

Exact frozen source lines:

```text
43: **Proof technique:** Refute at the endpoint $p=1$, $q=\infty$ with $f=\chi_A$ and $g=1$ on a proper positive-measure subset $A$. Equality holds, but the functions are not proportional on the whole space.
```

#### measure-theory / confirmed 047: `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions`

- Location: **Proof**; source lines 43.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The banner displays raw delimiters, carets, underscores, and commands, beginning $\|F\|_P^P\LE\|F\|_\INFTY^{P-R}\|F\|_R^R$.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/research/math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions.md).

Exact frozen source lines:

```text
43: **Proof technique:** The upper bound is $\|f\|_p^p\le\|f\|_\infty^{p-r}\|f\|_r^r$. For the lower bound, every $\varepsilon$ below the essential supremum leaves a set of positive measure where $|f|$ exceeds $\|f\|_\infty-\varepsilon$, forcing the $p$-norm above that level as $p$ grows.
```

#### measure-theory / confirmed 048: `cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one`

- Location: **Item body**; source lines 4.
- Pages: `modes-of-convergence-egorov-and-lusin-examples`.
- Visible defect: The H1 displays literal “k chi_(0,1/k)” instead of typeset mathematical notation. The corresponding title is visible in the local tile.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one.md).

Exact frozen source lines:

```text
4: title: "The spikes k chi_(0,1/k) converge almost everywhere and in measure to zero but not in L^1"
```

#### measure-theory / confirmed 049: `ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates`

- Location: **Item body**; source lines 4.
- Pages: `product-measures-and-the-fubini-tonelli-theorems-examples`.
- Visible defect: The H1 displays “int_R e^{-x^2} dx = sqrt(pi)” literally instead of typeset notation. The body formula is properly typeset.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates.md).

Exact frozen source lines:

```text
4: title: Tonelli and the plane polar formula give int_R e^{-x^2} dx = sqrt(pi)
```

#### measure-theory / confirmed 050: `lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p`

- Location: **Proof**; source lines 46.
- Pages: `the-duality-of-lp-and-lq`.
- Visible defect: The intended uppercase technique banner contains raw $u$ and $\{|u|\ge1/n\}$ delimiters and backslashes; these show literally in the banner.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p.md).

Exact frozen source lines:

```text
46: **Proof technique:** Take a representative $u$ and use the level sets $\{|u|\ge1/n\}$. Chebyshev-Markov makes each level set finite-measure, and their union contains every point where $u\ne0$.
```

#### measure-theory / confirmed 051: `lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure`

- Location: **Proof**; source lines 50.
- Pages: `the-ergodic-theorems-of-von-neumann-and-birkhoff`.
- Visible defect: The uppercase technique banner contains raw $\alpha$ and displays the TeX delimiters literally.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure.md).

Exact frozen source lines:

```text
50: **Proof technique:** cases on the sign of $\alpha$.
```

#### measure-theory / confirmed 052: `prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one`

- Location: **Proof**; source lines 45.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The uppercase technique banner contains raw $2^{1/p}\le2$ and displays the TeX delimiters literally.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one.md).

Exact frozen source lines:

```text
45: **Proof technique:** Use two disjoint equal-mass indicators, so the triangle inequality becomes the scalar inequality $2^{1/p}\le2$, which fails because $1/p>1$.
```

#### measure-theory / confirmed 053: `thm-generalized-holder-inequality-for-products`

- Location: **Proof**; source lines 51.
- Pages: `the-lp-spaces-holder-minkowski-and-riesz-fischer`.
- Visible defect: The uppercase technique banner contains raw expressions such as $|fg|$ and $p/r$; the TeX delimiters display literally.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-generalized-holder-inequality-for-products--01.png), [tile 02](math-library-rendering-audit-2026-10-23/measure-theory/screenshots/thm-generalized-holder-inequality-for-products--02.png); [frozen source](math-library-rendering-audit-2026-10-23/measure-theory/snapshots/thm-generalized-holder-inequality-for-products.md).

Exact frozen source lines:

```text
51: **Proof technique:** Raise $|fg|$ to the $r$-th power and apply Holder to $|f|^r$ and $|g|^r$ with conjugate exponents $p/r$ and $q/r$.
```

