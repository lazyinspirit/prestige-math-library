## Homological Algebra

Completed visual review of **1096 items across 68 pages**, with **1492 image tiles**. Findings: 13 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/homological-algebra/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/homological-algebra/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/homological-algebra/category-review-receipt.json).

### Confirmed rendering defects

#### homological-algebra / confirmed 001: `ex-naturality-of-the-balance-isomorphism`

- Location: **Example**; source lines 30.
- Pages: `ext-and-balanced-resolutions-examples`.
- Visible defect: line 30: literal ASCII arrows M' -> M and N -> N' appear as plain text.
- Future repair: Typeset the reported mathematical notation using supported MathMarkdown delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/ex-naturality-of-the-balance-isomorphism--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/ex-naturality-of-the-balance-isomorphism.md).

Exact frozen source lines:

```text
30: For maps M' -> M and N -> N' draw the square of projective and injective Ext computations and verify that both routes agree through the total-complex comparison.
```

#### homological-algebra / confirmed 002: `ex-the-hom-double-complex-in-low-bidegrees`

- Location: **Example**; source lines 30.
- Pages: `ext-and-balanced-resolutions-examples`.
- Visible defect: line 30: raw caret notation K^{0,0}, K^{1,0}, K^{0,1}, K^{1,1} appears as plain text.
- Future repair: Typeset the reported mathematical notation using supported MathMarkdown delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/ex-the-hom-double-complex-in-low-bidegrees--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/ex-the-hom-double-complex-in-low-bidegrees.md).

Exact frozen source lines:

```text
30: Display K^{0,0}, K^{1,0}, K^{0,1}, and K^{1,1}, label the two unsigned differentials, and compute the signed total differential in degrees zero and one.
```

#### homological-algebra / confirmed 003: `ex-cyclic-tensor-coinvariants-of-matrix-bimodules`

- Location: **Title**; source lines 4.
- Pages: `hochschild-hyperhomology-and-cyclic-tensor-invariance-examples`.
- Visible defect: The title shows the ring and matrix algebra in literal ASCII form, including the raw underscore and parentheses.
- Future repair: Typeset the title expression, e.g. “Matrix-unit rotation for a $k$–$M_n(k)$ Morita pair.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/ex-cyclic-tensor-coinvariants-of-matrix-bimodules--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/ex-cyclic-tensor-coinvariants-of-matrix-bimodules.md).

Exact frozen source lines:

```text
4: title: "Matrix-unit rotation for a k–Mat_n(k) Morita pair"
```

#### homological-algebra / confirmed 004: `ex-projective-dimension-of-a-cyclic-abelian-group`

- Location: **Example**; source lines 30.
- Pages: `yoneda-extensions-and-homological-dimension-examples`.
- Visible defect: The resolution sequence, quotient notation and Ext exponent render as untypeset ASCII math in the Example body.
- Future repair: Typeset the sequence and Ext expression in inline math.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/ex-projective-dimension-of-a-cyclic-abelian-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/ex-projective-dimension-of-a-cyclic-abelian-group.md).

Exact frozen source lines:

```text
30: Use 0 -> Z --n--> Z -> Z/n -> 0 and the nonzero Ext^1 calculation to prove that Z/n has projective dimension one over Z.
```

#### homological-algebra / confirmed 005: `fs-rpg-rqf-is-the-e-one-page-of-the-grothendieck-spectral-sequence`

- Location: **Title**; source lines 4.
- Pages: `grothendieck-spectral-sequences-and-computations`.
- Visible defect: The title prints the derived-functor superscripts and E-page label as raw ASCII, unlike the typeset formulas in the body.
- Future repair: Typeset the title formula with math markup.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/fs-rpg-rqf-is-the-e-one-page-of-the-grothendieck-spectral-sequence--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/fs-rpg-rqf-is-the-e-one-page-of-the-grothendieck-spectral-sequence.md).

Exact frozen source lines:

```text
4: title: "R^pG(R^qF) is the E1 page"
```

#### homological-algebra / confirmed 006: `lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition`

- Location: **Proof technique banner**; source lines 54.
- Pages: `lefschetz-splitting-in-bounded-triangulated-categories`.
- Visible defect: The uppercase technique banner preserves literal dollar signs around the math variable, displaying “$J$” rather than typeset math.
- Future repair: Use plain “j” in the technique phrase or a renderer-supported math treatment; the uppercase banner styling is intentional.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition--01.png), [tile 02](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition--02.png), [tile 03](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition--03.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition.md).

Exact frozen source lines:

```text
54: **Proof technique:** induction on the number $j$ of peeled degree-two steps.
```

#### homological-algebra / confirmed 007: `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`

- Location: **Statement refuted; Facts & Assumptions; Counterexample**; source lines 31, 35, 45.
- Pages: `spectral-sequences`.
- Visible defect: Mathematical notation in the statement and Given line lacks TeX delimiters, so it appears as plain text rather than matching the rendered TeX in the same ItemBody.
- Future repair: Wrap the mathematical expressions in the statement and Given line in inline TeX delimiters, preserving their formulas.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects.md).

Exact frozen source lines:

```text
31: The assertion “isomorphic associated graded objects imply isomorphic filtered objects” is false. Let A=ℤ/4 and B=(ℤ/2)². Set $F_pA=F_pB=0$ for p<0, $F_0A=\{0,2\}$, $F_0B=(\mathbb Z/2)\times0$, and $F_pA=A$, $F_pB=B$ for p≥1. These filtered objects have isomorphic graded families and nonisomorphic underlying groups.
35: **Given:** The displayed filtrations on A=ℤ/4 and B=(ℤ/2)².
45: 1.1 The sets {0,2} and (ℤ/2)×0 are subgroups by the additions in [F2], so the specified families are finite increasing filtrations. Their degree-zero pieces are isomorphic via [k]₂↦[2k]₄ for A and [k]₂↦([k]₂,0) for B. The first map is well defined because 2(k+2l)≡2k mod 4, and its two images are exactly 0,2. [F1, F2]
```

#### homological-algebra / confirmed 008: `fs-brutal-and-canonical-truncation-are-the-same`

- Location: **title/front matter**; source lines 2, 3.
- Pages: `derived-categories`.
- Visible defect: The assigned screenshot has no item heading, and its local HTML contains an empty h1 although the full statement body renders.
- Future repair: Provide an item title in the source front matter so the title renders in the preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/fs-brutal-and-canonical-truncation-are-the-same--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/fs-brutal-and-canonical-truncation-are-the-same.md).

Exact frozen source lines:

```text
2: id: "fs-brutal-and-canonical-truncation-are-the-same"
3: kind: "false-statement"
```

#### homological-algebra / confirmed 009: `fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal`

- Location: **title/front matter**; source lines 2, 3.
- Pages: `derived-categories`.
- Visible defect: The assigned screenshot has no item heading, and its local HTML contains an empty h1 although the full statement body renders.
- Future repair: Provide an item title in the source front matter so the title renders in the preview.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal.md).

Exact frozen source lines:

```text
2: id: "fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal"
3: kind: "false-statement"
```

#### homological-algebra / confirmed 010: `ex-brutal-versus-canonical-truncation`

- Location: **Title**; source lines 1, 23, 25.
- Pages: `derived-categories-examples`.
- Visible defect: The rendered document contains an empty <h1></h1>; the visible card starts at the EXAMPLE section, without an item heading.
- Future repair: Add a concise title to the frozen item source so the rendered heading is populated.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/ex-brutal-versus-canonical-truncation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/ex-brutal-versus-canonical-truncation.md).

Exact frozen source lines:

```text
1: ---
23: ## Example
25: For $X=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $0,1$, its four truncations at zero are $\sigma^{\leq0}X=\mathbb Z[0]$, $\tau^{\leq0}X=0$, $\sigma^{\geq0}X=X$, and $\tau^{\geq0}X=X$.
```

#### homological-algebra / confirmed 011: `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor`

- Location: **Title**; source lines 4.
- Pages: `derived-functors-examples`.
- Visible defect: The page H1 visibly prints “L_0” literally, while the corresponding body notation is TeX-rendered.
- Future repair: Replace title notation with a typographic phrase such as “The zero-th left derived functor …” or render the title math.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor.md).

Exact frozen source lines:

```text
4: title: "L_0 of a non-right-exact functor need not recover the functor"
```

#### homological-algebra / confirmed 012: `ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group`

- Location: **Example**; source lines 30.
- Pages: `ext-and-balanced-resolutions-examples`.
- Visible defect: The resolution arrows are raw ASCII `->` / `-->`, and `Ext^1_Z(...)=...` is raw caret/underscore notation. In the local HTML preview these appear literally as plain text instead of typeset mathematics. The later proof uses TeX and renders correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group.md).

Exact frozen source lines:

```text
30: Use the resolution 0 -> Z --n--> Z -> Z/n -> 0 to calculate Ext^1_Z(Z/n,A)=A/nA and show the higher terms vanish.
```

#### homological-algebra / confirmed 013: `ex-an-ext-dimension-shift`

- Location: **Example**; source lines 30.
- Pages: `ext-and-balanced-resolutions-examples`.
- Visible defect: The example description renders Ext^{n+1}(M,N) and Ext^n(Omega M,N) literally with ASCII carets and unrendered Omega in prose. The screenshot confirms mathematical formula text is outside MathMarkdown delimiters.
- Future repair: Typeset the full mathematical phrase with MathMarkdown, e.g. $\operatorname{Ext}^{n+1}(M,N)$ and $\operatorname{Ext}^n(\Omega M,N)$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/homological-algebra/screenshots/ex-an-ext-dimension-shift--01.png); [frozen source](math-library-rendering-audit-2026-10-23/homological-algebra/snapshots/ex-an-ext-dimension-shift.md).

Exact frozen source lines:

```text
30: Use the displayed cyclic-group projective presentation to identify Ext^{n+1}(M,N) with Ext^n(Omega M,N), distinguishing the low-degree exact segment.
```

