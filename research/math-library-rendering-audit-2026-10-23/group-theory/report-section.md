## Group Theory

Completed visual review of **974 items across 62 pages**, with **1175 image tiles**. Findings: 41 confirmed, 14 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/group-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/group-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/group-theory/category-review-receipt.json).

### Confirmed rendering defects

#### group-theory / confirmed 001: `ex-a-stem-extension-that-is-not-universal`

- Location: **Example**; source lines 31.
- Pages: `schur-multipliers-and-universal-central-extensions-examples`.
- Visible defect: The cyclic groups and map are printed as plain ASCII text (C2, D8, C2×C2) rather than mathematical notation.
- Future repair: Typeset the extension sequence with inline math, e.g. $C_2\to D_8\to C_2\times C_2$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-a-stem-extension-that-is-not-universal--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-a-stem-extension-that-is-not-universal.md).

Exact frozen source lines:

```text
31: The central extension C2→D8→C2×C2 is stem but not universal because its base is not perfect.
```

#### group-theory / confirmed 002: `lem-exterior-square-has-the-alternating-universal-property`

- Location: **Statement**; source lines 28.
- Pages: `schur-multipliers-and-universal-central-extensions`.
- Visible defect: The mathematical maps, product and exterior square are printed as plain text (A×A→B, ∧²A), without math typesetting.
- Future repair: Typeset the formula, e.g. “Alternating bilinear maps $A\times A\to B$ factor uniquely through $\bigwedge^2 A$.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/lem-exterior-square-has-the-alternating-universal-property--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/lem-exterior-square-has-the-alternating-universal-property.md).

Exact frozen source lines:

```text
28: Alternating bilinear maps A×A→B factor uniquely through ∧²A.
```

#### group-theory / confirmed 003: `lem-free-presentation-construction-is-a-central-extension`

- Location: **Statement**; source lines 28.
- Pages: `schur-multipliers-and-universal-central-extensions`.
- Visible defect: The group, commutators, quotient and map are printed as plain ASCII text rather than mathematical notation.
- Future repair: Typeset the expression, e.g. “For perfect $G$, $[F,F]/[F,R]\to G$ is central.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/lem-free-presentation-construction-is-a-central-extension--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/lem-free-presentation-construction-is-a-central-extension.md).

Exact frozen source lines:

```text
28: For perfect G, [F,F]/[F,R]→G is central.
```

#### group-theory / confirmed 004: `def-generalized-fitting-subgroup`

- Location: **Definition**; source lines 26.
- Pages: `the-finite-simple-group-classification-landscape`.
- Visible defect: For finite G, F*(G)=F(G)E(G).
- Future repair: Put the group and generalized Fitting subgroup notation in math delimiters, e.g. $F^*(G)=F(G)E(G)$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-generalized-fitting-subgroup--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-generalized-fitting-subgroup.md).

Exact frozen source lines:

```text
26: For finite G, F*(G)=F(G)E(G).
```

#### group-theory / confirmed 005: `ex-hirsch-length-and-growth-degree-need-not-agree`

- Location: **Example**; source lines 27.
- Pages: `hall-malcev-coordinates-and-bass-guivarch-growth-examples`.
- Visible defect: H, h(H)=3 and D(H)=4 are plain text; h=6 and D=10 also plain text.
- Future repair: Typeset H and the invariant values consistently as math.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-hirsch-length-and-growth-degree-need-not-agree--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-hirsch-length-and-growth-degree-need-not-agree.md).

Exact frozen source lines:

```text
27: The nilpotent Hirsch length and growth degree need not agree: for the integer Heisenberg group H, h(H)=3 and D(H)=4; for $\operatorname{UT}_4(\mathbb Z)$, h=6 and D=10.
```

#### group-theory / confirmed 006: `thm-cartan-matrix-is-d-transpose-d`

- Location: **Item body**; source lines 4.
- Pages: `brauer-characters-and-decomposition-matrices`.
- Visible defect: The Cartan matrix is D^T D; the caret is shown literally in the title.
- Future repair: Use math delimiters around $D^{\mathsf T}D$ in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/thm-cartan-matrix-is-d-transpose-d--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/thm-cartan-matrix-is-d-transpose-d.md).

Exact frozen source lines:

```text
4: title: "The Cartan matrix is D^T D"
```

#### group-theory / confirmed 007: `rem-nonabelian-extension-obstruction-in-h-three`

- Location: **Item body**; source lines 4.
- Pages: `second-cohomology-and-abelian-kernel-extensions`.
- Visible defect: Nonabelian extension obstruction in H^3; the caret is shown literally in the title.
- Future repair: Use math delimiters around $H^3$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/rem-nonabelian-extension-obstruction-in-h-three--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/rem-nonabelian-extension-obstruction-in-h-three.md).

Exact frozen source lines:

```text
4: title: "Nonabelian extension obstruction in H^3"
```

#### group-theory / confirmed 008: `ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate`

- Location: **Item body**; source lines 4.
- Pages: `group-extensions-complements-and-schur-zassenhaus-examples`.
- Visible defect: S_3 and A_3 appear with literal underscores in the title.
- Future repair: Use math delimiters around $S_3$ and $A_3$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate.md).

Exact frozen source lines:

```text
4: title: "The three transposition subgroups of S_3 are conjugate complements to A_3"
```

#### group-theory / confirmed 009: `fs-zp-is-cyclic-as-an-abstract-group`

- Location: **Item body**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: Zp appears without a subscript in the title.
- Future repair: Use math delimiters around $\mathbb Z_p$ in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/fs-zp-is-cyclic-as-an-abstract-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/fs-zp-is-cyclic-as-an-abstract-group.md).

Exact frozen source lines:

```text
4: title: "The additive group of Zp is cyclic as an abstract group"
```

#### group-theory / confirmed 010: `ex-a-three-shell-after-arc-reduction`

- Location: **Diagram**; source lines 45, 47.
- Pages: `small-cancellation-disc-diagrams-and-torsion-toolkit-examples`.
- Visible defect: The original-resolution tile prints the TikZ source as literal text under DIAGRAM; no graphic is rendered. This is source-rendering failure, not a crop artifact.
- Future repair: Put the `\begin{tikzpicture}` environment on its own line after the ` ```tikz ` fence opener; retain the perimeter labels 10, 3, 3, 3.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-a-three-shell-after-arc-reduction--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-a-three-shell-after-arc-reduction.md).

Exact frozen source lines:

```text
45: ## Diagram
47: ```tikz \begin{tikzpicture} \draw[very thick] (0,0) -- node[above] {exterior: 10} (4,0); \draw (4,0) -- node[right] {3} (3,-2) -- node[below] {3} (1,-2) -- node[left] {3} (0,0); \end{tikzpicture} ```
```

#### group-theory / confirmed 011: `def-schur-multiplier-of-a-group`

- Location: **Definition**; source lines 24, 26.
- Pages: `schur-multipliers-and-universal-central-extensions`.
- Visible defect: The tile renders this formula as ordinary text, with literal underscore and ASCII `Z`/`C×`; surrounding statements use rendered mathematics. The formula is legible but visibly untypeset.
- Future repair: Typeset the sentence with inline math delimiters, e.g. `$M(G)=H_2(G;\mathbb{Z})$, not $H^2(G;\mathbb{C}^\times)$ by definition.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-schur-multiplier-of-a-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-schur-multiplier-of-a-group.md).

Exact frozen source lines:

```text
24: ## Definition
26: M(G)=H_2(G;Z), not H²(G,C×) by definition.
```

#### group-theory / confirmed 012: `cex-a-set-theoretic-section-of-c-four-onto-c-two-need-not-be-homomorphic`

- Location: **title**; source lines 4.
- Pages: `group-extensions-complements-and-schur-zassenhaus-examples`.
- Visible defect: The title displays C_4 and C_2 with literal underscores instead of mathematical subscripts.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/cex-a-set-theoretic-section-of-c-four-onto-c-two-need-not-be-homomorphic--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/cex-a-set-theoretic-section-of-c-four-onto-c-two-need-not-be-homomorphic.md).

Exact frozen source lines:

```text
4: title: "A set-theoretic section of C_4 onto C_2 need not be a homomorphism"
```

#### group-theory / confirmed 013: `cex-two-homogeneous-need-not-be-two-transitive`

- Location: **title**; source lines 4.
- Pages: `blocks-primitivity-and-multiple-transitivity-examples`.
- Visible defect: The title displays F_7 with a literal underscore instead of a subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/cex-two-homogeneous-need-not-be-two-transitive--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/cex-two-homogeneous-need-not-be-two-transitive.md).

Exact frozen source lines:

```text
4: title: "The square-affine group of F_7 is 2-homogeneous but not 2-transitive"
```

#### group-theory / confirmed 014: `ex-a-cauchy-sequence-in-the-additive-p-adic-metric`

- Location: **title**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers-examples`.
- Visible defect: The title displays Zp as plain letters without a p subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-a-cauchy-sequence-in-the-additive-p-adic-metric--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-a-cauchy-sequence-in-the-additive-p-adic-metric.md).

Exact frozen source lines:

```text
4: title: "A standard p-adic digit sequence is Cauchy and converges in Zp"
```

#### group-theory / confirmed 015: `ex-z-n-acting-geometrically-on-euclidean-n-space`

- Location: **title**; source lines 4.
- Pages: `geometric-actions-svarc-milnor-and-growth-examples`.
- Visible defect: The title displays the exponent as a literal ASCII caret in Z^n.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-z-n-acting-geometrically-on-euclidean-n-space--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-z-n-acting-geometrically-on-euclidean-n-space.md).

Exact frozen source lines:

```text
4: title: "Z^n acts geometrically on Euclidean n-space"
```

#### group-theory / confirmed 016: `fs-the-zero-h-two-class-corresponds-to-the-direct-product-only`

- Location: **title**; source lines 4.
- Pages: `second-cohomology-and-abelian-kernel-extensions`.
- Visible defect: The title displays H^2 with a literal ASCII caret rather than a superscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/fs-the-zero-h-two-class-corresponds-to-the-direct-product-only--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/fs-the-zero-h-two-class-corresponds-to-the-direct-product-only.md).

Exact frozen source lines:

```text
4: title: "FALSE: the zero H^2 class corresponds to the direct product only"
```

#### group-theory / confirmed 017: `thm-zp-is-the-pro-p-completion-of-the-integers`

- Location: **title**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: The title displays Zp as plain letters without a p subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/thm-zp-is-the-pro-p-completion-of-the-integers--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/thm-zp-is-the-pro-p-completion-of-the-integers.md).

Exact frozen source lines:

```text
4: title: "Zp is the pro-p completion of the integers"
```

#### group-theory / confirmed 018: `cex-composition-factors-do-not-determine-the-extension`

- Location: **Statement**; source lines 24.
- Pages: `the-finite-simple-group-classification-landscape-examples`.
- Visible defect: The group orders appear as plain C4 and C2×C2 rather than with numeric subscripts.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/cex-composition-factors-do-not-determine-the-extension--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/cex-composition-factors-do-not-determine-the-extension.md).

Exact frozen source lines:

```text
24: C4 and C2×C2 share composition factors but are not isomorphic.
```

#### group-theory / confirmed 019: `cex-counting-every-lower-central-generator-with-weight-one`

- Location: **Facts & Assumptions**; source lines 31, 35.
- Pages: `hall-malcev-coordinates-and-bass-guivarch-growth-examples`.
- Visible defect: The original-resolution tile shows the normal form with literal carets and the growth estimate as prose `O(sqrt...)`, while the later commutator proof is properly typeset. These source formulas are legible but visibly untypeset.
- Future repair: Typeset the normal form and estimate, for example `$x^a y^b z^k$` and `$O(\sqrt{|k|})$`, after checking the intended variable in the latter against the source statement.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/cex-counting-every-lower-central-generator-with-weight-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/cex-counting-every-lower-central-generator-with-weight-one.md).

Exact frozen source lines:

```text
31: **Given:** Use H with horizontal generators x,y, central z=[x,y], and unique normal form x^a y^b z^k.
35: [F2] $[x^a,y^b]=z^{ab}$, with central exponent attainable at length O(sqrt of its absolute value) ([[ex-central-distortion-in-the-discrete-heisenberg-group]]).
```

#### group-theory / confirmed 020: `def-perfect-group`

- Location: **Definition**; source lines 26.
- Pages: `schur-multipliers-and-universal-central-extensions`.
- Visible defect: The tile renders the complete definition as plain ASCII, including the commutator subgroup and abelianization subscript. The notation is readable but the formula is untypeset.
- Future repair: Wrap the formulas in supported math delimiters, e.g. `$G=[G,G]$` and `$G_{\mathrm{ab}}=0$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-perfect-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-perfect-group.md).

Exact frozen source lines:

```text
26: G is perfect if G=[G,G], equivalently G_ab=0.
```

#### group-theory / confirmed 021: `lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists`

- Location: **Statement**; source lines 28.
- Pages: `schur-multipliers-and-universal-central-extensions`.
- Visible defect: The standalone statement is rendered as plain text with ASCII commutator brackets and intersection symbol. The proof below uses the same objects in typeset math, making the statement's raw notation visibly inconsistent.
- Future repair: Typeset the statement, e.g. `$[F,R]$ is normal and contained in $R\cap[F,F]$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists.md).

Exact frozen source lines:

```text
28: [F,R] is normal and contained in R∩[F,F].
```

#### group-theory / confirmed 022: `def-canonical-map-from-the-integers-to-zp`

- Location: **Title**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: The title tile visibly prints `Z`, `Zp`, and `p^n` as ordinary title text. The definition body renders its corresponding symbols correctly in LaTeX, so the defect is isolated to title notation.
- Future repair: Use renderer-supported title math or plain language such as “the p-adic integers” and “modulo p to the n-th power.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-canonical-map-from-the-integers-to-zp--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-canonical-map-from-the-integers-to-zp.md).

Exact frozen source lines:

```text
4: title: "The canonical map from Z to Zp sends an integer to its coherent residue classes modulo p^n"
```

#### group-theory / confirmed 023: `thm-the-integers-map-injectively-and-densely-into-zp`

- Location: **Title**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: The title tile displays `Zp` literally, while the statement beneath correctly renders `$\mathbb Z_p$`. The title notation is visibly untypeset.
- Future repair: Use renderer-supported title math or write “the p-adic integers” in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/thm-the-integers-map-injectively-and-densely-into-zp--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/thm-the-integers-map-injectively-and-densely-into-zp.md).

Exact frozen source lines:

```text
4: title: "The canonical map from the integers into Zp is injective and has dense image"
```

#### group-theory / confirmed 024: `prop-zp-is-topologically-generated-by-one`

- Location: **Title**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: The title tile displays `Zp` literally although the statement below uses correctly typeset `$\mathbb Z_p$`.
- Future repair: Use renderer-supported title math or the phrase “p-adic integers.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/prop-zp-is-topologically-generated-by-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/prop-zp-is-topologically-generated-by-one.md).

Exact frozen source lines:

```text
4: title: "The additive topological group of Zp is topologically generated by 1, although it is not abstractly cyclic"
```

#### group-theory / confirmed 025: `ex-the-klein-four-extension-of-c-two-by-c-two-is-direct`

- Location: **Title**; source lines 4.
- Pages: `group-extensions-complements-and-schur-zassenhaus-examples`.
- Visible defect: The title tile prints literal underscores in the cyclic-group notation, unlike the properly rendered `$C_2$` notation in the body.
- Future repair: Typeset the group symbols in title math if supported, or spell out “cyclic groups of order two.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-the-klein-four-extension-of-c-two-by-c-two-is-direct--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-the-klein-four-extension-of-c-two-by-c-two-is-direct.md).

Exact frozen source lines:

```text
4: title: "The split extension C_2 × C_2 of C_2 by C_2 is direct"
```

#### group-theory / confirmed 026: `ex-bass-dimension-of-unitriangular-four-by-four-integers`

- Location: **frontmatter title**; source lines 4.
- Pages: `hall-malcev-coordinates-and-bass-guivarch-growth-examples`.
- Visible defect: The captured title displays UT_4(Z) with the underscore and numeral as ordinary text rather than a subscripted matrix-group notation.
- Future repair: Format the title notation, for example $\operatorname{UT}_4(\mathbb Z)$, while retaining the words that follow.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-bass-dimension-of-unitriangular-four-by-four-integers--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-bass-dimension-of-unitriangular-four-by-four-integers.md).

Exact frozen source lines:

```text
4: title: UT_4(Z) has ranks three, two, one and growth degree ten
```

#### group-theory / confirmed 027: `ex-the-cp-squared-extension-as-a-nonzero-two-cocycle`

- Location: **frontmatter title**; source lines 4.
- Pages: `second-cohomology-and-abelian-kernel-extensions-examples`.
- Visible defect: The captured title prints C_p^2 literally with an underscore and caret; the example body itself typesets the cyclic groups and cocycle correctly.
- Future repair: Typeset the title notation as $C_{p^2}$ (or the intended group notation) and preserve the rest of the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-the-cp-squared-extension-as-a-nonzero-two-cocycle--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-the-cp-squared-extension-as-a-nonzero-two-cocycle.md).

Exact frozen source lines:

```text
4: title: "The C_p^2 extension as a nonzero two-cocycle"
```

#### group-theory / confirmed 028: `rem-cyclic-and-alternating-simple-families`

- Location: **body**; source lines 24.
- Pages: `the-finite-simple-group-classification-landscape`.
- Visible defect: The captured body shows A_n and n≥5 as literal baseline text in a mathematical claim.
- Future repair: Set the family and bound in math mode, for example $A_n$ for $n\ge5$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/rem-cyclic-and-alternating-simple-families--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/rem-cyclic-and-alternating-simple-families.md).

Exact frozen source lines:

```text
24: The elementary finite-simple entries are cyclic groups of prime order and A_n for n≥5.
```

#### group-theory / confirmed 029: `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`

- Location: **Facts & Assumptions**; source lines 32, 34.
- Pages: `asymptotic-cones-and-the-sublinear-triangle-criterion`.
- Visible defect: The preview prints the inequalities and variable names as plain ASCII in the Given/F1 text although the Statement formats the same incidence bounds with LaTeX.
- Future repair: Typeset the displayed quantities and inequalities consistently, e.g. $I\le Lm$ and $E\le Lm+n$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings.md).

Exact frozen source lines:

```text
32: **Given:** A finite diagram supplied by the expression lemma, with its Cayley vertex labels and filled bounded regions; edge count E, expression face bound m, outer length n, total face incidence I, and I<=Lm.
34: [F1] Every bounded region is a face with preserved characteristic occurrence walk; E<=Lm+n and labels are consistent. ([[lem-relator-expressions-give-controlled-singular-planar-diagrams]]).
```

#### group-theory / confirmed 030: `lem-weighted-coordinate-boxes-give-matching-growth-bounds`

- Location: **Statement; Proof**; source lines 27, 43, 45, 49.
- Pages: `hall-malcev-coordinates-and-bass-guivarch-growth`.
- Visible defect: The capture displays several mathematical variables, comparisons, and asymptotic expressions as literal plain text, including a,b>0 in the main statement and b>=1 in the proof.
- Future repair: Put the mathematical symbols and expressions in math mode consistently (including inequalities and O(R^i)); leave ordinary explanatory prose unchanged.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/lem-weighted-coordinate-boxes-give-matching-growth-bounds--01.png), [tile 02](math-library-rendering-audit-2026-10-23/group-theory/screenshots/lem-weighted-coordinate-boxes-give-matching-growth-bounds--02.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/lem-weighted-coordinate-boxes-give-matching-growth-bounds.md).

Exact frozen source lines:

```text
27: For a fixed mixed lower-central coordinate system of a finitely generated nilpotent group G and fixed finite generating set S, there exist a,b>0 such that $Q(an)\subseteq B_S(n)\subseteq Q(bn)$ for all sufficiently large integers n. For real $R\ge1$, $|Q(R)|=\prod_{i=1}^c(2\lfloor R^i\rfloor+1)^{r_i}\prod_{i,j:\ d_{ij}<\infty}d_{ij}$. Consequently $|B_S(n)|$ is between positive multiples of $n^{D(G)}$.
43: 1.1 A word of length at most n has layer-i free exponents at most $C\max(1,n)^i$ by F2. Choose b>=1 such that $b^i\ge C$ for all finitely many i. Then for $n\ge1$ every such integer exponent is at most $\lfloor(bn)^i\rfloor$ in absolute value; its residues are allowed in Q. Thus $B_S(n)\subseteq Q(bn)$. [F2, given]
45: 1.2 We prove $Q(R)\subseteq B_S(KR)$ for $R\ge1$ by induction on class. For G=1 the empty tuple represents only 1. For class one, if $g=\prod u_j^{a_j}\prod v_j^{b_j}$ is in Q(R), repeating fixed S-words for the u_j costs at most $R\sum |u_j|_S$, and the finite residues cost at most $\sum(d_j-1)|v_j|_S$. Since $R\ge1$ this is at most KR. [F1, given]
49: 3.1 Apply F2 to that weighted word. Since h is in H, only last-layer coordinates remain; their free exponents are O(R^c), with bounded residues. The corresponding coordinate generators are a finite generating set of the abelian H, so $|h|_H\le K_1R^c$ after increasing K_1. F3 gives $|h|_S\le K_2R+K_2\le2K_2R$. If H is finite its fixed ambient diameter gives the same conclusion. Hence $|g|_S=|wh|_S\le(K_0+2K_2)R$, completing the induction. Taking K>=1 and a=1/K gives $Q(an)\subseteq B_S(n)$ whenever a$n\ge1$. [F2, F3, step 2.1]
```

#### group-theory / confirmed 031: `def-p-adic-integers-as-compatible-residue-classes`

- Location: **frontmatter title**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: The captured title includes the raw caret in p^n and writes the inverse-limit target as plain “Z mod p^n”; the Definition body correctly typesets $\mathbb Z/p^n\mathbb Z$.
- Future repair: Typeset the title notation consistently, for example $\mathbb Z_p$ and $\mathbb Z/p^n\mathbb Z$, while retaining the explanatory words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-p-adic-integers-as-compatible-residue-classes--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-p-adic-integers-as-compatible-residue-classes.md).

Exact frozen source lines:

```text
4: title: "The p-adic integers are the compatible residue-class tuples in the inverse limit of Z mod p^n"
```

#### group-theory / confirmed 032: `def-central-and-stem-extensions`

- Location: **Definition**; source lines 26.
- Pages: `schur-multipliers-and-universal-central-extensions`.
- Visible defect: The whole definition renders as ordinary ASCII, including containment and commutator notation. It is legible but does not typeset the mathematical operators.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-central-and-stem-extensions--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-central-and-stem-extensions.md).

Exact frozen source lines:

```text
26: Central means K≤Z(E); stem means K≤Z(E)∩[E,E].
```

#### group-theory / confirmed 033: `def-superperfect-group`

- Location: **Definition**; source lines 26.
- Pages: `schur-multipliers-and-universal-central-extensions`.
- Visible defect: Subscripts, coefficient notation and equality remain raw ASCII in the definition body.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-superperfect-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-superperfect-group.md).

Exact frozen source lines:

```text
26: Superperfect means H_1(G;Z)=H_2(G;Z)=0.
```

#### group-theory / confirmed 034: `lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps`

- Location: **Item body**; source lines 5.
- Pages: `group-homology-transfer-and-low-degree-exact-sequences`.
- Visible defect: The notation H2 is ordinary text rather than a typeset cohomology symbol. The surrounding displayed maps render correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps.md).

Exact frozen source lines:

```text
5: status: published
```

#### group-theory / confirmed 035: `ex-transgression-for-the-integral-heisenberg-extension`

- Location: **Facts & Assumptions**; source lines 33.
- Pages: `group-homology-transfer-and-low-degree-exact-sequences-examples`.
- Visible defect: The factor-cocycle expression is printed as unformatted ASCII identifier notation in the Facts tile (eta(q), alpha(q), f(q,r), eta(qr), d(f(q,r))). The surrounding inline formulas elsewhere in this item render through KaTeX. This makes the displayed formula visually ambiguous and differs from the source’s normal mathematical typesetting.
- Future repair: Typeset the expression with explicit mathematical delimiters and Greek-letter notation, then check each term against the cited transgression definition before accepting the wording.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-transgression-for-the-integral-heisenberg-extension--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-transgression-for-the-integral-heisenberg-extension.md).

Exact frozen source lines:

```text
33: [F1] For invariant d and chosen alpha, eta the normalizer quotient has factor cocycle eta(q)+alpha(q)eta(r)-f(q,r)eta(qr)-d(f(q,r)); its construction works with supplied choices. ([[def-low-degree-transgression-for-a-group-extension]]).
```

#### group-theory / confirmed 036: `ex-cartan-matrix-from-d-transpose-d`

- Location: **Item body**; source lines 4.
- Pages: `brauer-characters-and-decomposition-matrices-examples`.
- Visible defect: The title displays the source-authored caret string “D^T D” literally; the body uses rendered math for the transpose.
- Future repair: Use a MathMarkdown title such as $D^{\mathsf T}D$ so the title agrees with the typeset body.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-cartan-matrix-from-d-transpose-d--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-cartan-matrix-from-d-transpose-d.md).

Exact frozen source lines:

```text
4: title: "A Cartan matrix computed from D^T D"
```

#### group-theory / confirmed 037: `ex-frattini-quotient-of-zp`

- Location: **Item body**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers-examples`.
- Visible defect: The title displays “Zp” and “Fp” as plain ASCII identifiers, while the example body typesets $\mathbb Z_p$ and $\mathbb F_p$.
- Future repair: Typeset both symbols in the title as $\mathbb Z_p$ and $\mathbb F_p$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-frattini-quotient-of-zp--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-frattini-quotient-of-zp.md).

Exact frozen source lines:

```text
4: title: "The Frattini quotient of Zp is the one-dimensional vector space Fp"
```

#### group-theory / confirmed 038: `def-p-local-subgroup`

- Location: **Definition**; source lines 26.
- Pages: `the-finite-simple-group-classification-landscape`.
- Visible defect: The definition renders the normalizer and p-subgroup notation as raw ASCII “N_G(P)” and “p”; the math is not marked for MathMarkdown.
- Future repair: Mark the formula and variables as inline math, for example $N_G(P)$ and $p$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-p-local-subgroup--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-p-local-subgroup.md).

Exact frozen source lines:

```text
26: A p-local subgroup is N_G(P) for a nontrivial p-subgroup P of G.
```

#### group-theory / confirmed 039: `lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group`

- Location: **Item body**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: The title displays “Zp” literally, while the statement typesets $\mathbb Z_p$.
- Future repair: Typeset the title occurrence as $\mathbb Z_p$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group.md).

Exact frozen source lines:

```text
4: title: "Coordinatewise addition and negation make Zp a topological abelian group"
```

#### group-theory / confirmed 040: `ex-the-augmentation-ideal-and-loewy-series-for-kcp`

- Location: **Item body**; source lines 4.
- Pages: `modular-representations-and-projective-covers-examples`.
- Visible defect: The title displays “kCp” as plain ASCII, while the example statement typesets $kC_p$.
- Future repair: Typeset the group algebra notation as $kC_p$ in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-the-augmentation-ideal-and-loewy-series-for-kcp--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-the-augmentation-ideal-and-loewy-series-for-kcp.md).

Exact frozen source lines:

```text
4: title: "The augmentation ideal and Loewy series of kCp can be written explicitly"
```

#### group-theory / confirmed 041: `thm-bass-guivarch-growth-degree-formula-with-proof`

- Location: **Facts & Assumptions**; source lines 36, 54, 58.
- Pages: `hall-malcev-coordinates-and-bass-guivarch-growth`.
- Visible defect: Several inline growth exponents are written as plain ASCII caret notation outside math delimiters and render literally (including n^D, n^cr, and n^{D-cr}).
- Future repair: Wrap the inline growth expressions in MathMarkdown, keeping exponent scope explicit.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/thm-bass-guivarch-growth-degree-formula-with-proof--01.png), [tile 02](math-library-rendering-audit-2026-10-23/group-theory/screenshots/thm-bass-guivarch-growth-degree-formula-with-proof--02.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/thm-bass-guivarch-growth-degree-formula-with-proof.md).

Exact frozen source lines:

```text
36: [F1] Word balls have upper and lower bounds by positive multiples of n^D for all sufficiently large n ([[lem-weighted-coordinate-boxes-give-matching-growth-bounds]]).
54: 1.2 The class-induction counting mechanism can also be seen directly. For class one, the cyclic decomposition places an intrinsic ball between cubes with side lengths proportional to n, up to finitely many torsion residues: a word bounds each free exponent linearly, and any tuple with sum of absolute exponents plus the bounded residue cost at most n gives a word. This gives degree r_1, including finite groups with no free coordinates. For class $c\ge2$ let $H=\gamma_c$ and r=r_c. The quotient has dimension $D-cr$ by F4. If H is finite, F3 transfers its inductive quotient bounds immediately to G. [F3, F4, F7]
58: 2.1 If H is infinite, its intrinsic balls have size comparable to t^r by the same abelian calculation. F6 implies, for large n, $B_H(\alpha n^c)\subseteq B_G(n)\cap H\subseteq B_H(\beta n^c)$ for some $\alpha,\beta>0$. Lift the elements of $B_{G/H}(n)$ to words $g_j\in B_G(n)$. The sets $g_j(B_G(n)\cap H)$ are disjoint and lie in $B_G(2n)$; their total size is at least a positive multiple of $n^{D-cr}n^{cr}=n^D$. For an upper bound, any $g\in B_G(n)$ in the coset g_jH has $g_j^{-1}g\in H$ of ambient length at most 2n, so that fiber contains at most a constant times $n^{cr}$ elements. There are at most a constant times $n^{D-cr}$ quotient fibers. Multiplication gives the upper n^D bound. Monotonicity extends the lower estimate at even radii to odd radii, and step 1.1 absorbs small radii. [F6, step 1.1, step 1.2]
```

### Optional typography

#### group-theory / typography 001: `def-p-adic-integers-as-compatible-residue-classes`

- Location: **Item body**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: The display title writes “Z mod p^n” in prose; the body uses correctly typeset math. This is optional title typography, not a confirmed broken ItemBody rendering.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-p-adic-integers-as-compatible-residue-classes--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-p-adic-integers-as-compatible-residue-classes.md).

Exact frozen source lines:

```text
4: title: "The p-adic integers are the compatible residue-class tuples in the inverse limit of Z mod p^n"
```

#### group-theory / typography 002: `lem-degree-one-maps-and-quotient-action-are-well-defined`

- Location: **Statement**; source lines 29.
- Pages: `group-homology-transfer-and-low-degree-exact-sequences`.
- Visible defect: “Here H1 is the bar quotient” is plain ASCII after correctly typeset H^1 formulas; consider formatting the abbreviation as H^1. Treated as optional notation consistency because the surrounding context is clear.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/lem-degree-one-maps-and-quotient-action-are-well-defined--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/lem-degree-one-maps-and-quotient-action-are-well-defined.md).

Exact frozen source lines:

```text
29: The formulas define homomorphisms $\operatorname{inf}:H^1(Q,A^N)\to H^1(G,A)$, $\operatorname{res}:H^1(G,A)\to H^1(N,A)^Q$, and a Q-action on $H^1(N,A)$. Here H1 is the bar quotient, with the inherited convention for its derived interpretation.
```

#### group-theory / typography 003: `cor-central-extensions-are-classified-by-h-two-with-trivial-action`

- Location: **Item body**; source lines 4.
- Pages: `second-cohomology-and-abelian-kernel-extensions`.
- Visible defect: The title displays literal caret notation; its ItemBody formula H^2(G,A) typesets correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/cor-central-extensions-are-classified-by-h-two-with-trivial-action--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/cor-central-extensions-are-classified-by-h-two-with-trivial-action.md).

Exact frozen source lines:

```text
4: title: "Central extensions are classified by H^2 with trivial action"
```

#### group-theory / typography 004: `thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action`

- Location: **Item body**; source lines 4.
- Pages: `second-cohomology-and-abelian-kernel-extensions`.
- Visible defect: The title displays literal caret notation; the statement-body H^2(G,M) renders correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action.md).

Exact frozen source lines:

```text
4: title: "H^2 classifies extensions with fixed abelian kernel action"
```

#### group-theory / typography 005: `fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel`

- Location: **Item body**; source lines 4.
- Pages: `second-cohomology-and-abelian-kernel-extensions`.
- Visible defect: The title displays literal caret notation; the false statement body renders H^2(G,N) correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel.md).

Exact frozen source lines:

```text
4: title: "FALSE: H^2 classifies extensions with arbitrary nonabelian kernel"
```

#### group-theory / typography 006: `ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three`

- Location: **Item body**; source lines 4.
- Pages: `crossed-homomorphisms-complements-and-first-cohomology-examples`.
- Visible defect: Title shows literal underscores/caret; the corresponding body notation is typeset.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three.md).

Exact frozen source lines:

```text
4: title: "With trivial C_2-action on S_3, the nonabelian H^1 pointed set has two classes"
```

#### group-theory / typography 007: `ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two`

- Location: **Item body**; source lines 4.
- Pages: `group-extensions-complements-and-schur-zassenhaus-examples`.
- Visible defect: Title shows literal underscores; the example body renders the cyclic group subscripts correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two.md).

Exact frozen source lines:

```text
4: title: "The dihedral group of order eight is a split extension of C_4 by C_2"
```

#### group-theory / typography 008: `ex-folner-boxes-in-zn`

- Location: **Item body**; source lines 4.
- Pages: `amenable-groups-and-folner-criteria-examples`.
- Visible defect: Title shows literal caret notation; the body formula for Z^d and Q_n renders correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/ex-folner-boxes-in-zn--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/ex-folner-boxes-in-zn.md).

Exact frozen source lines:

```text
4: title: "Boxes in Z^n are Folner sets"
```

#### group-theory / typography 009: `def-p-adic-metric-on-zp`

- Location: **Item body**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: Title shows plain Zp; the definition body uses and correctly renders Z_p.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/def-p-adic-metric-on-zp--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/def-p-adic-metric-on-zp.md).

Exact frozen source lines:

```text
4: title: "The p-adic metric on Zp is determined by the first coordinate at which two compatible residue systems differ"
```

#### group-theory / typography 010: `thm-baer-sum-agrees-with-addition-in-h-two`

- Location: **Item body**; source lines 4.
- Pages: `second-cohomology-and-abelian-kernel-extensions`.
- Visible defect: The title displays H^2 as literal caret notation; the Statement and body formulas render correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/thm-baer-sum-agrees-with-addition-in-h-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/thm-baer-sum-agrees-with-addition-in-h-two.md).

Exact frozen source lines:

```text
4: title: "The Baer sum agrees with addition in H^2"
```

#### group-theory / typography 011: `thm-frattini-formula-for-finitely-generated-pro-p-groups`

- Location: **Item body**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: The title displays [G,G]G^p as plain title text; the Statement displays the closure and p-th powers correctly in math.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/thm-frattini-formula-for-finitely-generated-pro-p-groups--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/thm-frattini-formula-for-finitely-generated-pro-p-groups.md).

Exact frozen source lines:

```text
4: title: "For a finitely generated pro-p group, the Frattini subgroup is the closure of [G,G]G^p"
```

#### group-theory / typography 012: `thm-topological-burnside-basis-theorem`

- Location: **Item body**; source lines 4.
- Pages: `pro-p-groups-and-the-p-adic-integers`.
- Visible defect: The title displays Fp without subscript formatting; Statement notation over mathbb F_p renders correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/thm-topological-burnside-basis-theorem--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/thm-topological-burnside-basis-theorem.md).

Exact frozen source lines:

```text
4: title: "A subset topologically generates a finitely generated pro-p group exactly when its image spans the Frattini quotient over Fp"
```

#### group-theory / typography 013: `prop-finite-sharply-k-transitive-actions-have-order-falling-factorial`

- Location: **Item body**; source lines 4.
- Pages: `blocks-primitivity-and-multiple-transitivity`.
- Visible defect: The title renders its falling-factorial formula as plain n(n-1)...(n-k+1); the Statement formula renders correctly.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/prop-finite-sharply-k-transitive-actions-have-order-falling-factorial--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/prop-finite-sharply-k-transitive-actions-have-order-falling-factorial.md).

Exact frozen source lines:

```text
4: title: "A finite sharply k-transitive action has order n(n-1)...(n-k+1)"
```

#### group-theory / typography 014: `cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions`

- Location: **Item body**; source lines 4.
- Pages: `group-extensions-complements-and-schur-zassenhaus-examples`.
- Visible defect: Title subscripts such as C_3 display as literal underscores; mathematical notation in the body is formatted.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/group-theory/screenshots/cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions--01.png); [frozen source](math-library-rendering-audit-2026-10-23/group-theory/snapshots/cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions.md).

Exact frozen source lines:

```text
4: title: "The cyclic group Z/9 supports inequivalent extensions of C_3 by C_3"
```

