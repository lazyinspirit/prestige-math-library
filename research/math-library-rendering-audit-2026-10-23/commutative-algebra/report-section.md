## Commutative Algebra

Completed visual review of **822 items across 44 pages**, with **1068 image tiles**. Findings: 21 typography, 13 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/commutative-algebra/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/commutative-algebra/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/commutative-algebra/category-review-receipt.json).

### Confirmed rendering defects

#### commutative-algebra / confirmed 001: `def-depth-with-respect-to-an-ideal`

- Location: **Definition**; source lines 25, 27.
- Pages: `depth-and-cohen-macaulay-modules`.
- Visible defect: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Future repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/def-depth-with-respect-to-an-ideal--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/def-depth-with-respect-to-an-ideal.md).

Exact frozen source lines:

```text
25: Let $R$ be a commutative ring, $I\subseteq R$ an ideal, and $M$ a finite
27: $$\operatorname{depth}_I(M)=\sup\{r\in\mathbf N : \text{there is an }M\text{-regular sequence of length }r\text{ in }I\}.$$ 
```

#### commutative-algebra / confirmed 002: `def-fractional-ideal`

- Location: **Definition**; source lines 33, 35.
- Pages: `dedekind-domains-and-ideal-classes`.
- Visible defect: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Future repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/def-fractional-ideal--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/def-fractional-ideal.md).

Exact frozen source lines:

```text
33: Let $R$ be a domain with fraction field $K=\operatorname{Frac}(R)$
35: $R$-submodule $I\subseteq K$ for which there exists $0\neq d\in R$ with
```

#### commutative-algebra / confirmed 003: `def-koszul-regular-and-h-one-regular-sequences`

- Location: **Definition**; source lines 24, 26.
- Pages: `koszul-complexes-and-regular-sequences`.
- Visible defect: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Future repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/def-koszul-regular-and-h-one-regular-sequences--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/def-koszul-regular-and-h-one-regular-sequences.md).

Exact frozen source lines:

```text
24: Let $R$ be a commutative unital ring, let $M$ be an $R$-module, and let
26: $M$-Koszul-regular when $H_i(K(\mathbf x;M))=0$ for every $i>0$, and
```

#### commutative-algebra / confirmed 004: `ex-dedekind-localisation-is-dvr`

- Location: **Example**; source lines 34, 36.
- Pages: `dedekind-domains-and-ideal-classes-examples`.
- Visible defect: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Future repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/ex-dedekind-localisation-is-dvr--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/ex-dedekind-localisation-is-dvr.md).

Exact frozen source lines:

```text
34: Let $R$ be a Dedekind domain, let $\mathfrak p$ be a nonzero prime ideal, and let $n\ge0$ be an integer.
36: $$ (\mathfrak p^n)_{\mathfrak p}=\mathfrak p^nR_{\mathfrak p}. $$
```

#### commutative-algebra / confirmed 005: `ex-primes-in-a-prime-localisation`

- Location: **Example**; source lines 36.
- Pages: `prime-spectra-and-radicals-examples`.
- Visible defect: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Future repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/ex-primes-in-a-prime-localisation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/ex-primes-in-a-prime-localisation.md).

Exact frozen source lines:

```text
36: Let $A=k[x,y]$ and let $\mathfrak m=(x,y)$. The prime ideals $(0)$, $(x)$, $(y)$, and $(x+y)$ all lie inside $\mathfrak m$, so they give distinct prime ideals of the localization $A_{\mathfrak m}$.
```

#### commutative-algebra / confirmed 006: `ex-incomparability-in-a-quadratic-integral-extension`

- Location: **Example**; source lines 35, 37.
- Pages: `integral-extensions-and-going-up-examples`.
- Visible defect: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Future repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/ex-incomparability-in-a-quadratic-integral-extension--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/ex-incomparability-in-a-quadratic-integral-extension.md).

Exact frozen source lines:

```text
35: 
37: 
```

#### commutative-algebra / confirmed 007: `lem-finite-variable-polynomial-rings-over-fields-are-ufds`

- Location: **Statement**; source lines 32, 33.
- Pages: `prime-spectra-and-radicals`.
- Visible defect: The standalone original-resolution preview omits the opening letters/text of the first body paragraph at its left edge although the frozen source contains them; subsequent text in the same paragraph is visible.
- Future repair: Repair the first-inline-run positioning/clipping in the rendered ItemBody and recapture the preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-finite-variable-polynomial-rings-over-fields-are-ufds--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-finite-variable-polynomial-rings-over-fields-are-ufds.md).

Exact frozen source lines:

```text
32: Let $k$ be a field and let $r\ge0$ be an integer. Then $k[x_1,\ldots,x_r]$ is a
33: unique factorisation domain ([[def-unique-factorisation-domain]]). Every
```

#### commutative-algebra / confirmed 008: `ex-strong-nullstellensatz-nonradical-ideal`

- Location: **title**; source lines 4.
- Pages: `noether-normalisation-and-nullstellensatz-examples`.
- Visible defect: The rendered title prints the caret in `x^2` literally rather than typesetting the exponent. The Example body correctly typesets the same expression.
- Future repair: Wrap the mathematical title expression in inline math delimiters and rerender the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/ex-strong-nullstellensatz-nonradical-ideal--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/ex-strong-nullstellensatz-nonradical-ideal.md).

Exact frozen source lines:

```text
4: title: "I(V(x^2, xy)) keeps only the radical information"
```

#### commutative-algebra / confirmed 009: `lem-evaluation-ideal-is-maximal`

- Location: **title**; source lines 4.
- Pages: `noether-normalisation-and-nullstellensatz`.
- Visible defect: The rendered title shows underscores and the generator tuple in text style instead of typesetting the indexed variables. The Statement body correctly typesets the ideal.
- Future repair: Wrap the generator tuple in inline math delimiters and rerender the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-evaluation-ideal-is-maximal--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-evaluation-ideal-is-maximal.md).

Exact frozen source lines:

```text
4: title: "Evaluation at a point has kernel (x_1-a_1, ..., x_n-a_n)"
```

#### commutative-algebra / confirmed 010: `cor-equicharacteristic-complete-local-power-series-quotient`

- Location: **Proof**; source lines 49.
- Pages: `henselian-rings-and-equicharacteristic-cohen-structure`.
- Visible defect: The proof-technique label renders the math delimiter and literal `\MATHFRAK` command text instead of formatting the maximal ideal and its square. The same notation renders correctly in the Statement and proof steps.
- Future repair: Render inline math in the proof-technique field, or phrase this technique in plain text without TeX; then rerender and inspect the label.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/cor-equicharacteristic-complete-local-power-series-quotient--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/cor-equicharacteristic-complete-local-power-series-quotient.md).

Exact frozen source lines:

```text
49: **Proof technique:** choose a coefficient field and generators of $\mathfrak m/\mathfrak m^2$.
```

#### commutative-algebra / confirmed 011: `def-inverse-system-and-inverse-limit-of-modules`

- Location: **Definition**; source lines 31.
- Pages: `inverse-limits-and-noetherian-completion`.
- Visible defect: The screenshot shows only the trailing “g.” at the left edge where the opening definition sentence should appear. An enlarged crop of the original PNG confirms that the beginning of the line is absent from the captured rendered body.
- Future repair: Correct the rendering or capture layout so the full opening definition sentence remains visible.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/def-inverse-system-and-inverse-limit-of-modules--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/def-inverse-system-and-inverse-limit-of-modules.md).

Exact frozen source lines:

```text
31: Let $R$ be a commutative ring.
```

#### commutative-algebra / confirmed 012: `def-separated-and-complete-filtered-module`

- Location: **Definition**; source lines 31, 32.
- Pages: `inverse-limits-and-noetherian-completion`.
- Visible defect: The rendered definition starts at the left edge with “g and let” and places the filtration immediately after it; the authored opening “Let $R$ be a commutative ring and let” is missing. An enlarged crop of the original PNG confirms the missing left-side text.
- Future repair: Correct the rendering or capture layout so the opening sentence and displayed filtration are both fully visible and separated as authored.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/def-separated-and-complete-filtered-module--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/def-separated-and-complete-filtered-module.md).

Exact frozen source lines:

```text
31: Let $R$ be a commutative ring and let
32: $$M=F^0M \supseteq F^1M \supseteq F^2M \supseteq \cdots$$
```

#### commutative-algebra / confirmed 013: `lem-formal-power-series-evaluation-converges`

- Location: **Proof technique**; source lines 46.
- Pages: `henselian-rings-and-equicharacteristic-cohen-structure`.
- Visible defect: The proof-technique badge displays literal math delimiters and a malformed command instead of typeset mathematics: “DEGREE-$N$ TAILS LAND IN $\MATHFRAK M^N$”. The same technique is legible in ordinary prose, but its inline math is not rendered.
- Future repair: Render the proof-technique field through the same Markdown/KaTeX path as the item body, preserving the source \mathfrak m expression.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-formal-power-series-evaluation-converges--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-formal-power-series-evaluation-converges.md).

Exact frozen source lines:

```text
46: **Proof technique:** degree-$N$ tails land in $\mathfrak m^N$.
```

### Optional typography

#### commutative-algebra / typography 001: `ex-auslander-buchsbaum-first-syzygy`

- Location: **frontmatter title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension-examples`.
- Visible defect: The title renders entirely in lowercase and omits the standard hyphenation/capitalization of the Auslander–Buchsbaum name.
- Future repair: Use a display title such as “Auslander–Buchsbaum first syzygy”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/ex-auslander-buchsbaum-first-syzygy--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/ex-auslander-buchsbaum-first-syzygy.md).

Exact frozen source lines:

```text
4: title: "auslander buchsbaum first syzygy"
```

#### commutative-algebra / typography 002: `cor-regular-local-ring-satisfies-r-one`

- Location: **frontmatter title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title prints the name of the condition as plain lowercase words, unlike the mathematical notation used in the statement.
- Future repair: Use “A regular local ring satisfies $(R_1)$” or an equivalent display title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/cor-regular-local-ring-satisfies-r-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/cor-regular-local-ring-satisfies-r-one.md).

Exact frozen source lines:

```text
4: title: "regular local ring satisfies r one"
```

#### commutative-algebra / typography 003: `lem-regular-local-regular-quotient-ideal-is-parameter-generated`

- Location: **frontmatter title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title renders entirely in lowercase, which is visually inconsistent with the neighboring display titles.
- Future repair: Capitalize the title, for example “A regular quotient of a regular local ring is parameter generated”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-regular-local-regular-quotient-ideal-is-parameter-generated--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-regular-local-regular-quotient-ideal-is-parameter-generated.md).

Exact frozen source lines:

```text
4: title: "regular local regular quotient ideal is parameter generated"
```

#### commutative-algebra / typography 004: `lem-affine-algebra-points-as-k-algebra-maps`

- Location: **Item body**; source lines 4.
- Pages: `noether-normalisation-and-nullstellensatz`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-affine-algebra-points-as-k-algebra-maps--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-affine-algebra-points-as-k-algebra-maps.md).

Exact frozen source lines:

```text
4: title: "k-points of k[x_1, ..., x_n]/I are exactly k-algebra maps to k"
```

#### commutative-algebra / typography 005: `ex-incomparability-in-a-quadratic-integral-extension`

- Location: **Item body**; source lines 4.
- Pages: `integral-extensions-and-going-up-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/ex-incomparability-in-a-quadratic-integral-extension--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/ex-incomparability-in-a-quadratic-integral-extension.md).

Exact frozen source lines:

```text
4: title: "In k[Y] subset k[X] with Y = X^2, distinct comparable primes do not share a contraction"
```

#### commutative-algebra / typography 006: `ex-local-test-for-an-isomorphism`

- Location: **Title**; source lines 4.
- Pages: `localisation-of-modules-and-support-examples`.
- Visible defect: The title displays the maps and direct sum as literal ASCII “->” and prose “direct-sum”, while the item body uses typeset mathematical notation.
- Future repair: Typeset the title map and direct sum in math, for example with $\mathbb{Z}/6\mathbb{Z} \to \mathbb{Z}/2\mathbb{Z} \oplus \mathbb{Z}/3\mathbb{Z}$, or replace them with plain-language wording.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/ex-local-test-for-an-isomorphism--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/ex-local-test-for-an-isomorphism.md).

Exact frozen source lines:

```text
4: title: "Assuming the Axiom of Choice, the Chinese-remainder map Z/6Z -> Z/2Z direct-sum Z/3Z is an isomorphism by local tests"
```

#### commutative-algebra / typography 007: `cor-serre-normality-criterion-two-directions`

- Location: **Item title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title begins lowercase (“serre normality criterion two directions”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/cor-serre-normality-criterion-two-directions--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/cor-serre-normality-criterion-two-directions.md).

Exact frozen source lines:

```text
4: title: "serre normality criterion two directions"
```

#### commutative-algebra / typography 008: `def-serre-r-k-and-s-k-conditions`

- Location: **Item title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title begins lowercase (“serre r k and s k conditions”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/def-serre-r-k-and-s-k-conditions--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/def-serre-r-k-and-s-k-conditions.md).

Exact frozen source lines:

```text
4: title: "serre r k and s k conditions"
```

#### commutative-algebra / typography 009: `ex-koszul-euler-characteristic-redundant-zero-generator`

- Location: **Item title**; source lines 4.
- Pages: `koszul-euler-characteristics-and-hilbert-samuel-multiplicity-examples`.
- Visible defect: The title begins lowercase (“koszul euler characteristic redundant zero generator”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/ex-koszul-euler-characteristic-redundant-zero-generator--01.png), [tile 02](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/ex-koszul-euler-characteristic-redundant-zero-generator--02.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/ex-koszul-euler-characteristic-redundant-zero-generator.md).

Exact frozen source lines:

```text
4: title: "koszul euler characteristic redundant zero generator"
```

#### commutative-algebra / typography 010: `lem-depth-two-excludes-finite-punctured-extension`

- Location: **Item title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title begins lowercase (“depth two excludes finite punctured extension”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-depth-two-excludes-finite-punctured-extension--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-depth-two-excludes-finite-punctured-extension.md).

Exact frozen source lines:

```text
4: title: "depth two excludes finite punctured extension"
```

#### commutative-algebra / typography 011: `lem-koszul-euler-characteristic-first-element-reduction`

- Location: **Item title**; source lines 4.
- Pages: `koszul-euler-characteristics-and-hilbert-samuel-multiplicity`.
- Visible defect: The title begins lowercase (“koszul euler characteristic first element reduction”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-koszul-euler-characteristic-first-element-reduction--01.png), [tile 02](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-koszul-euler-characteristic-first-element-reduction--02.png), [tile 03](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-koszul-euler-characteristic-first-element-reduction--03.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-koszul-euler-characteristic-first-element-reduction.md).

Exact frozen source lines:

```text
4: title: "koszul euler characteristic first element reduction"
```

#### commutative-algebra / typography 012: `lem-normal-domain-implies-s-two`

- Location: **Item title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title begins lowercase (“normal domain implies s two”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-normal-domain-implies-s-two--01.png), [tile 02](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-normal-domain-implies-s-two--02.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-normal-domain-implies-s-two.md).

Exact frozen source lines:

```text
4: title: "normal domain implies s two"
```

#### commutative-algebra / typography 013: `lem-r-one-s-two-integral-element-membership`

- Location: **Item title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title begins lowercase (“r one s two integral element membership”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-r-one-s-two-integral-element-membership--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-r-one-s-two-integral-element-membership.md).

Exact frozen source lines:

```text
4: title: "r one s two integral element membership"
```

#### commutative-algebra / typography 014: `lem-regular-local-graded-surjection-has-zero-kernel`

- Location: **Item title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title begins lowercase (“regular local graded surjection has zero kernel”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-regular-local-graded-surjection-has-zero-kernel--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-regular-local-graded-surjection-has-zero-kernel.md).

Exact frozen source lines:

```text
4: title: "regular local graded surjection has zero kernel"
```

#### commutative-algebra / typography 015: `thm-quotient-and-lifting-regularity-across-a-regular-element`

- Location: **Item title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title begins lowercase (“quotient and lifting regularity across a regular element”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/thm-quotient-and-lifting-regularity-across-a-regular-element--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/thm-quotient-and-lifting-regularity-across-a-regular-element.md).

Exact frozen source lines:

```text
4: title: "quotient and lifting regularity across a regular element"
```

#### commutative-algebra / typography 016: `thm-serre-normality-criterion`

- Location: **Item title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The title begins lowercase (“serre normality criterion”). This is a source-title convention observation, separate from rendering defects.
- Future repair: Optionally capitalize the title consistently with neighboring displayed item headings.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/thm-serre-normality-criterion--01.png), [tile 02](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/thm-serre-normality-criterion--02.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/thm-serre-normality-criterion.md).

Exact frozen source lines:

```text
4: title: "serre normality criterion"
```

#### commutative-algebra / typography 017: `cor-regular-local-hilbert-samuel-multiplicity-one`

- Location: **Title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The displayed title is all lowercase (“regular local hilbert samuel multiplicity one”), unlike conventional title casing and the mathematical style used elsewhere.
- Future repair: Use a readable title such as “Regular local Hilbert–Samuel multiplicity is one”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/cor-regular-local-hilbert-samuel-multiplicity-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/cor-regular-local-hilbert-samuel-multiplicity-one.md).

Exact frozen source lines:

```text
4: title: "regular local hilbert samuel multiplicity one"
```

#### commutative-algebra / typography 018: `def-embedding-dimension-and-regular-local-ring`

- Location: **Title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The displayed title is all lowercase (“embedding dimension and regular local ring”).
- Future repair: Capitalize the title consistently, e.g. “Embedding dimension and regular local rings”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/def-embedding-dimension-and-regular-local-ring--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/def-embedding-dimension-and-regular-local-ring.md).

Exact frozen source lines:

```text
4: title: "embedding dimension and regular local ring"
```

#### commutative-algebra / typography 019: `lem-local-global-dimension-equals-residue-field-projective-dimension`

- Location: **Title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The displayed title is all lowercase (“local global dimension equals residue field projective dimension”).
- Future repair: Capitalize the title consistently, e.g. “Local global dimension equals residue-field projective dimension”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-local-global-dimension-equals-residue-field-projective-dimension--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-local-global-dimension-equals-residue-field-projective-dimension.md).

Exact frozen source lines:

```text
4: title: "local global dimension equals residue field projective dimension"
```

#### commutative-algebra / typography 020: `lem-r-one-s-two-intersection-of-height-one-localisations`

- Location: **Title**; source lines 4.
- Pages: `regular-local-rings-and-homological-dimension`.
- Visible defect: The displayed title spells the standard Serre-condition notation in words (“r one s two intersection of height one localisations”), which is difficult to scan as a mathematical title.
- Future repair: Use a title that retains the conventional notation, e.g. “The intersection of height-one localizations under (R₁) and (S₂)”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-r-one-s-two-intersection-of-height-one-localisations--01.png), [tile 02](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-r-one-s-two-intersection-of-height-one-localisations--02.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-r-one-s-two-intersection-of-height-one-localisations.md).

Exact frozen source lines:

```text
4: title: "r one s two intersection of height one localisations"
```

#### commutative-algebra / typography 021: `lem-ext-depth-shift-across-a-regular-element`

- Location: **Statement**; source lines 24.
- Pages: `depth-and-cohen-macaulay-modules`.
- Visible defect: The long inline rendering of the first-nonzero-Ext degree formula reaches the right edge with the relation ending at “<”; its final “∞” appears at the start of the next line, visually separating the relation from its operand. The statement beginning “Let R be Noetherian” and the full “Given:” label are present in the standalone original PNG.
- Future repair: Break the formula at a deliberate point or use a displayed/aligned equation so “< ∞” remains together.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/commutative-algebra/screenshots/lem-ext-depth-shift-across-a-regular-element--01.png); [frozen source](math-library-rendering-audit-2026-10-23/commutative-algebra/snapshots/lem-ext-depth-shift-across-a-regular-element.md).

Exact frozen source lines:

```text
24: $$d=\min\{i:\operatorname{Ext}^i_R(R/I,M)\ne0\}<\infty,$$
```

