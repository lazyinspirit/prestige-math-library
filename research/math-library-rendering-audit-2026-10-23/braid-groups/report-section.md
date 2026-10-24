## Braid Groups

Completed visual review of **445 items across 38 pages**, with **1041 image tiles**. Findings: 31 confirmed, 1 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/braid-groups/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/braid-groups/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/braid-groups/category-review-receipt.json).

### Confirmed rendering defects

#### braid-groups / confirmed 001: `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences`

- Location: **title**; source lines 4.
- Pages: `categorical-braid-actions-and-decategorification-examples`.
- Visible defect: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Future repair: Use inline math delimiters in the title: $K_0$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences.md).

Exact frozen source lines:

```text
4: title: "Equal actions on K_0 do not imply isomorphic derived autoequivalences"
```

#### braid-groups / confirmed 002: `def-graded-khovanov-seidel-module-category-and-projectives`

- Location: **title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Future repair: Use inline math delimiters in the title: $A_m$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-graded-khovanov-seidel-module-category-and-projectives--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-graded-khovanov-seidel-module-category-and-projectives.md).

Exact frozen source lines:

```text
4: title: "Finite graded A_m-modules, internal shifts and the vertex projectives"
```

#### braid-groups / confirmed 003: `def-standard-pure-braid-generators`

- Location: **title**; source lines 4.
- Pages: `pure-braids-fadell-neuwirth-and-asphericity`.
- Visible defect: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Future repair: Use inline math delimiters in the title: Standard geometric pure braid generators $A_{ij}$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-standard-pure-braid-generators--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-standard-pure-braid-generators.md).

Exact frozen source lines:

```text
4: title: "Standard geometric pure braid generators A_ij"
```

#### braid-groups / confirmed 004: `def-triangulated-k-zero-of-khovanov-seidel-projectives`

- Location: **title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Future repair: Use inline math delimiters in the title: The triangulated $K_0$ of the Khovanov–Seidel projective category.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-triangulated-k-zero-of-khovanov-seidel-projectives--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-triangulated-k-zero-of-khovanov-seidel-projectives.md).

Exact frozen source lines:

```text
4: title: "The triangulated K_0 of the Khovanov–Seidel projective category"
```

#### braid-groups / confirmed 005: `ex-the-a-two-khovanov-seidel-algebra-and-its-projectives`

- Location: **title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors-examples`.
- Visible defect: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Future repair: Use inline math delimiters in the title: The algebra $A_2$ and its vertex projectives.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/ex-the-a-two-khovanov-seidel-algebra-and-its-projectives--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/ex-the-a-two-khovanov-seidel-algebra-and-its-projectives.md).

Exact frozen source lines:

```text
4: title: "The algebra A_2 and its vertex projectives"
```

#### braid-groups / confirmed 006: `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero`

- Location: **title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Future repair: Use inline math delimiters in the title: Homological and internal shifts on $K_0(C_m)$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero.md).

Exact frozen source lines:

```text
4: title: "Homological and internal shifts on K_0(C_m)"
```

#### braid-groups / confirmed 007: `ex-the-artin-action-of-the-b-three-generators`

- Location: **Title**; source lines 4.
- Pages: `the-artin-action-on-a-free-group-examples`.
- Visible defect: The rendered heading displays B_3 with a literal underscore instead of a subscripted braid-group symbol.
- Future repair: Use a rendered title form such as “The Artin action of the $B_3$ generators” or Unicode B₃.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/ex-the-artin-action-of-the-b-three-generators--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/ex-the-artin-action-of-the-b-three-generators.md).

Exact frozen source lines:

```text
4: title: "The Artin action of the B_3 generators"
```

#### braid-groups / confirmed 008: `thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism`

- Location: **Proof (technique label)**; source lines 58.
- Pages: `the-artin-action-on-a-free-group`.
- Visible defect: The proof-technique label displays the inline-math delimiters and TeX command literally in the rendered technique header.
- Future repair: Use plain wording in the technique label, such as “strong induction on the minimal total length of A,” or render math in technique labels.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism--02.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism.md).

Exact frozen source lines:

```text
58: **Proof technique:** strong induction on the minimal total length $\ell(A)$.
```

#### braid-groups / confirmed 009: `thm-ordered-planar-configuration-spaces-are-aspherical`

- Location: **Proof (technique label)**; source lines 66.
- Pages: `pure-braids-fadell-neuwirth-and-asphericity`.
- Visible defect: The proof-technique label displays inline-math delimiters and the TeX command literally in the rendered technique header.
- Future repair: Use plain wording in the technique label, such as “induction on n for fixed degree k ≥ 3,” or render math in technique labels.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-ordered-planar-configuration-spaces-are-aspherical--02.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/thm-ordered-planar-configuration-spaces-are-aspherical.md).

Exact frozen source lines:

```text
66: **Proof technique:** induction on $n$ for fixed degree $k\ge3$.
```

#### braid-groups / confirmed 010: `def-two-sided-projective-khovanov-seidel-bimodule-functors`

- Location: **frontmatter title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The rendered title displays U_i with a literal underscore instead of typeset subscript notation.
- Future repair: Wrap the subscripted expression in math delimiters or use readable Unicode subscripts in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-two-sided-projective-khovanov-seidel-bimodule-functors--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-two-sided-projective-khovanov-seidel-bimodule-functors.md).

Exact frozen source lines:

```text
4: title: "The two-sided projective bimodules U_i and their tensor functors"
```

#### braid-groups / confirmed 011: `def-vertex-khovanov-seidel-modules`

- Location: **frontmatter title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The rendered title displays S_i with a literal underscore instead of typeset subscript notation.
- Future repair: Wrap the subscripted expression in math delimiters or use readable Unicode subscripts in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-vertex-khovanov-seidel-modules--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-vertex-khovanov-seidel-modules.md).

Exact frozen source lines:

```text
4: title: "The vertex modules S_i and their prime quotients"
```

#### braid-groups / confirmed 012: `ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension`

- Location: **frontmatter title**; source lines 4.
- Pages: `pure-braids-fadell-neuwirth-and-asphericity-examples`.
- Visible defect: The rendered title displays PB_3, F_2 with a literal underscore instead of typeset subscript notation.
- Future repair: Wrap the subscripted expression in math delimiters or use readable Unicode subscripts in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension.md).

Exact frozen source lines:

```text
4: title: "PB_3 as F_2 by Z, with its section action"
```

#### braid-groups / confirmed 013: `lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m`

- Location: **frontmatter title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The rendered title displays C_m with a literal underscore instead of typeset subscript notation.
- Future repair: Wrap the subscripted expression in math delimiters or use readable Unicode subscripts in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m.md).

Exact frozen source lines:

```text
4: title: "Bounded two-sided projective bimodule complexes act on C_m"
```

#### braid-groups / confirmed 014: `def-khovanov-seidel-beta-and-gamma-bimodule-maps`

- Location: **Title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The title displays the literal underscores in β_i and γ_i instead of subscripted indices.
- Future repair: Use Unicode subscript characters (βᵢ and γᵢ) in the title, or another title-safe subscript form.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-khovanov-seidel-beta-and-gamma-bimodule-maps--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-khovanov-seidel-beta-and-gamma-bimodule-maps.md).

Exact frozen source lines:

```text
4: title: "The Khovanov–Seidel bimodule maps β_i and γ_i"
```

#### braid-groups / confirmed 015: `ex-a-positive-crossing-factorization-complex`

- Location: **Verification**; source lines 73.
- Pages: `matrix-factorizations-and-khovanov-rozansky-link-homology-examples`.
- Visible defect: The proof-technique label displays the dollar delimiters around w literally.
- Future repair: Use plain text “potential w” in the proof-technique label, or a renderer-supported math form for this field.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/ex-a-positive-crossing-factorization-complex--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/ex-a-positive-crossing-factorization-complex.md).

Exact frozen source lines:

```text
73: **Proof technique:** direct transcription with the two matrix verifications that make each presentation a factorization of potential $w$.
```

#### braid-groups / confirmed 016: `lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction`

- Location: **Proof**; source lines 62.
- Pages: `pure-braids-fadell-neuwirth-and-asphericity`.
- Visible defect: The proof-technique label displays the dollar delimiters around n literally.
- Future repair: Use plain text “induction on n” in the proof-technique label, or a renderer-supported math form for this field.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction.md).

Exact frozen source lines:

```text
62: **Proof technique:** induction on $n$.
```

#### braid-groups / confirmed 017: `def-khovanov-seidel-bigraded-cover-and-bigraded-curves`

- Location: **Title**; source lines 4.
- Pages: `categorical-braid-actions-and-decategorification`.
- Visible defect: The rendered title shows the caret in “Z^2” literally instead of typesetting the exponent.
- Future repair: Typeset the title formula as $Z^2$ or rewrite it as “Z-squared”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-khovanov-seidel-bigraded-cover-and-bigraded-curves--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-khovanov-seidel-bigraded-cover-and-bigraded-curves--02.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-khovanov-seidel-bigraded-cover-and-bigraded-curves.md).

Exact frozen source lines:

```text
4: title: "The Z^2 cover of the projectivized tangent bundle and bigraded curves"
```

#### braid-groups / confirmed 018: `thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n`

- Location: **Title**; source lines 4.
- Pages: `the-artin-action-on-a-free-group`.
- Visible defect: The rendered title shows “Aut(F_n)” literally, including the underscore, instead of typesetting the formula.
- Future repair: Typeset the title expression as $\operatorname{Aut}(F_n)$ or rewrite it in words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n--02.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n.md).

Exact frozen source lines:

```text
4: title: "Artin's characterization of the braid subgroup of Aut(F_n)"
```

#### braid-groups / confirmed 019: `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations`

- Location: **Title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The rendered title shows “U_i” literally, including the underscore, instead of typesetting the subscript.
- Future repair: Typeset the title symbol as $U_i$ or rewrite it in words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations--02.png), [tile 03](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations--03.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations.md).

Exact frozen source lines:

```text
4: title: "Corner computations: the U_i satisfy the Temperley-Lieb relations"
```

#### braid-groups / confirmed 020: `thm-standard-pure-braids-generate-the-pure-braid-group`

- Location: **Proof technique**; source lines 65.
- Pages: `pure-braids-fadell-neuwirth-and-asphericity`.
- Visible defect: The proof-technique label displays the dollar delimiters around n literally instead of typesetting the math.
- Future repair: Rewrite as “induction on the strand count” or render the formula in the proof-technique field.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-standard-pure-braids-generate-the-pure-braid-group--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-standard-pure-braids-generate-the-pure-braid-group--02.png), [tile 03](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-standard-pure-braids-generate-the-pure-braid-group--03.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/thm-standard-pure-braids-generate-the-pure-braid-group.md).

Exact frozen source lines:

```text
65: **Proof technique:** induction on $n$.
```

#### braid-groups / confirmed 021: `def-zariski-braid-combing-words-alpha-and-x`

- Location: **title**; source lines 4.
- Pages: `artin-presentation-completeness-and-braid-combing`.
- Visible defect: The title displays the literal underscores in “alpha_i” and “x_i” instead of formatted subscripts.
- Future repair: Format the indexed symbols as math, for example `$\alpha_i$` and `$x_i$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-zariski-braid-combing-words-alpha-and-x--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-zariski-braid-combing-words-alpha-and-x.md).

Exact frozen source lines:

```text
4: title: "The Zariski combing words alpha_i and x_i in the Artin presentation"
```

#### braid-groups / confirmed 022: `ex-a-simple-module-projective-resolution-for-a-two`

- Location: **title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors-examples`.
- Visible defect: The title displays literal underscores in “S_2” and “A_2” instead of formatted subscripts.
- Future repair: Format the indexed symbols as math, for example `$S_2$` and `$A_2$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/ex-a-simple-module-projective-resolution-for-a-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/ex-a-simple-module-projective-resolution-for-a-two.md).

Exact frozen source lines:

```text
4: title: "An explicit projective resolution of the vertex module S_2 for A_2"
```

#### braid-groups / confirmed 023: `def-khovanov-seidel-complex-of-a-braid-word`

- Location: **Definition**; source lines 39.
- Pages: `categorical-braid-actions-and-decategorification`.
- Visible defect: The linked supplier title is displayed with literal TeX-style underscores and braces (R_i and R_i^{-1}) instead of typeset mathematics.
- Future repair: Use a readable plain-language link label for the supplier, or change its displayed title so the generator names do not appear as raw TeX.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-khovanov-seidel-complex-of-a-braid-word--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-khovanov-seidel-complex-of-a-braid-word--02.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-khovanov-seidel-complex-of-a-braid-word.md).

Exact frozen source lines:

```text
39: [[def-khovanov-seidel-positive-and-negative-twist-complexes]], built from
```

#### braid-groups / confirmed 024: `lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers`

- Location: **Title**; source lines 4.
- Pages: `categorical-braid-actions-and-decategorification`.
- Visible defect: The page heading prints the raw TeX fragment I^{bigr} literally, including the caret and braces.
- Future repair: Replace the title formula with a readable phrase such as “bigraded intersection number,” or format the title through a math-aware renderer.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers--02.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers.md).

Exact frozen source lines:

```text
4: title: "Bigraded string types and their contributions to I^{bigr}"
```

#### braid-groups / confirmed 025: `lem-every-trivial-braid-word-combs-as-w-one-w-two`

- Location: **Title**; source lines 4.
- Pages: `artin-presentation-completeness-and-braid-combing`.
- Visible defect: The page heading displays the literal underscore in W_1W_2 rather than a typeset subscript.
- Future repair: Use a prose title such as “Every trivial braid word combs into two factors,” or use title markup supported by the heading renderer.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/lem-every-trivial-braid-word-combs-as-w-one-w-two--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/lem-every-trivial-braid-word-combs-as-w-one-w-two--02.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/lem-every-trivial-braid-word-combs-as-w-one-w-two.md).

Exact frozen source lines:

```text
4: title: "Every trivial braid word combs as W_1W_2"
```

#### braid-groups / confirmed 026: `thm-the-artin-presentation-is-complete-for-geometric-braids`

- Location: **Facts & Assumptions**; source lines 54.
- Pages: `artin-presentation-completeness-and-braid-combing`.
- Visible defect: The linked item title is rendered with the literal underscores in W_1W_2 in the Facts & Assumptions section.
- Future repair: Give the cross-reference a readable prose label, or update the linked item title to avoid raw TeX-style notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-the-artin-presentation-is-complete-for-geometric-braids--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-the-artin-presentation-is-complete-for-geometric-braids--02.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/thm-the-artin-presentation-is-complete-for-geometric-braids.md).

Exact frozen source lines:

```text
54: [F2] *Combing.* Assume $n\ge2$ and let $W$ be a word in $\sigma_1^{\pm1},\dots,\sigma_{n-1}^{\pm1}$ whose image under $\varphi_n$ is the trivial geometric braid. Then $W$ is equivalent, by the permitted moves of [F1], to a product $W_1W_2$ in which $W_1$ is a word in $x_1^{\pm1},\dots,x_{n-1}^{\pm1}$ and $W_2$ is a word in $\sigma_1^{\pm1},\dots,\sigma_{n-2}^{\pm1}$, where $x_j=\alpha_{j+1}^{-1}\sigma_j^{2}\alpha_{j+1}$ are the combing words of [[def-zariski-braid-combing-words-alpha-and-x]] ([[lem-every-trivial-braid-word-combs-as-w-one-w-two]]).
```

#### braid-groups / confirmed 027: `def-bounded-projective-homotopy-category-for-a-m`

- Location: **Title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The title displays C_m with a literal underscore instead of a subscript; the same title rendering is visible in screenshot tile 01.
- Future repair: Use supported title math formatting for C_m or replace it with a plain-language title that avoids raw TeX-style notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-bounded-projective-homotopy-category-for-a-m--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-bounded-projective-homotopy-category-for-a-m.md).

Exact frozen source lines:

```text
4: title: "The bounded projective homotopy category C_m and the two shifts"
```

#### braid-groups / confirmed 028: `def-signed-totalization-of-graded-a-m-bimodule-actions`

- Location: **Title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The title displays A_m with a literal underscore instead of a subscript; the same title rendering is visible in screenshot tile 01.
- Future repair: Use supported title math formatting for A_m or replace it with a plain-language title that avoids raw TeX-style notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-signed-totalization-of-graded-a-m-bimodule-actions--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-signed-totalization-of-graded-a-m-bimodule-actions.md).

Exact frozen source lines:

```text
4: title: "Signed totalization of graded A_m-bimodule actions"
```

#### braid-groups / confirmed 029: `def-graded-grothendieck-group-of-a-m-perfect-complexes`

- Location: **Title**; source lines 4.
- Pages: `categorical-braid-actions-and-decategorification`.
- Visible defect: The title displays `A_m` literally, including the underscore, rather than as a subscripted algebra name.
- Future repair: typeset the algebra name as `$A_m$` in the title
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-graded-grothendieck-group-of-a-m-perfect-complexes--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-graded-grothendieck-group-of-a-m-perfect-complexes.md).

Exact frozen source lines:

```text
4: title: "The graded Grothendieck group of A_m"
```

#### braid-groups / confirmed 030: `def-khovanov-seidel-positive-and-negative-twist-complexes`

- Location: **Title**; source lines 4.
- Pages: `graded-quiver-algebras-and-derived-tensor-functors`.
- Visible defect: The title displays `R_i` and `R_i^{-1}` literally, including underscores, braces, caret, and hyphenated exponent markup.
- Future repair: typeset both symbols in math, for example `$R_i$` and `$R_i^{-1}$`
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-khovanov-seidel-positive-and-negative-twist-complexes--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-khovanov-seidel-positive-and-negative-twist-complexes--02.png), [tile 03](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-khovanov-seidel-positive-and-negative-twist-complexes--03.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-khovanov-seidel-positive-and-negative-twist-complexes.md).

Exact frozen source lines:

```text
4: title: "The twist complexes R_i and R_i^{-1}"
```

#### braid-groups / confirmed 031: `def-peripheral-boundary-preserving-automorphism-of-f-n`

- Location: **Title**; source lines 4.
- Pages: `the-artin-action-on-a-free-group`.
- Visible defect: The title displays `F_n` literally with an underscore instead of a subscript.
- Future repair: typeset the free group name as `$F_n$` in the title
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/def-peripheral-boundary-preserving-automorphism-of-f-n--01.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/def-peripheral-boundary-preserving-automorphism-of-f-n.md).

Exact frozen source lines:

```text
4: title: "Peripheral-boundary-preserving automorphisms of F_n"
```

### Optional typography

#### braid-groups / typography 001: `thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two`

- Location: **Title**; source lines 4.
- Pages: `garside-structure-normal-forms-and-the-center`.
- Visible defect: The title shows the braid group as plain lowercase `b n`; the standard name and subscripted index are not represented.
- Future repair: Use standard braid-group notation in the title, for example `The center of $B_n$ is generated by the full twist for n greater than two`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two--01.png), [tile 02](math-library-rendering-audit-2026-10-23/braid-groups/screenshots/thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two--02.png); [frozen source](math-library-rendering-audit-2026-10-23/braid-groups/snapshots/thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two.md).

Exact frozen source lines:

```text
4: title: "The center of b n is generated by the full twist for n greater than two"
```

