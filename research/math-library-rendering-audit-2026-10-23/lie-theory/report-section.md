## Lie Theory

Completed visual review of **1074 items across 56 pages**, with **1636 image tiles**. Findings: 34 confirmed, 7 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/lie-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/lie-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/lie-theory/category-review-receipt.json).

### Confirmed rendering defects

#### lie-theory / confirmed 001: `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical`

- Location: **Proof technique**; source lines 45.
- Pages: `lie-algebra-cohomology-and-kostants-nilradical-theorem-examples`.
- Visible defect: The upper-case technique banner visibly prints the dollar delimiters and caret notation as raw text (“compute $H^0$ and $H^1$…”).
- Future repair: Use math-free wording in the technique label, e.g. “compute degree-zero and degree-one cohomology directly for the abelian nilradical”, or ensure math is rendered in that label.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical.md).

Exact frozen source lines:

```text
45: **Proof technique:** compute $H^0$ and $H^1$ directly for the abelian nilradical.
```

#### lie-theory / confirmed 002: `lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags`

- Location: **Proof technique**; source lines 76.
- Pages: `projectives-standard-filtrations-and-bgg-reciprocity`.
- Visible defect: The upper-case technique banner prints the inline math delimiters and TeX command literally (`$\mathfrak b$`, etc.).
- Future repair: Use math-free wording such as “filter the finite-dimensional Borel module E tensor C_mu by one-dimensional quotients and induce, then extend by exactness”, or render math in that label.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags.md).

Exact frozen source lines:

```text
76: **Proof technique:** direct: filter the finite-dimensional $\mathfrak b$-module $E\otimes\mathbb C_\mu$ by one-dimensional quotients and induce, then extend to general $X$ by exactness.
```

#### lie-theory / confirmed 003: `prop-projective-covers-in-o-are-indecomposable-and-unique`

- Location: **Proof technique**; source lines 62.
- Pages: `projectives-standard-filtrations-and-bgg-reciprocity`.
- Visible defect: The upper-case technique banner prints `$P$` literally.
- Future repair: Use math-free wording such as “split the projective into indecomposables…”, or render math in that label.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/prop-projective-covers-in-o-are-indecomposable-and-unique--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/prop-projective-covers-in-o-are-indecomposable-and-unique.md).

Exact frozen source lines:

```text
62: **Proof technique:** direct: split $P$ into indecomposables, make the nonzero component an essential epimorphism, and compare two covers by lifting.
```

#### lie-theory / confirmed 004: `cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra`

- Location: **Proof**; source lines 47.
- Pages: `solvable-and-nilpotent-lie-algebras`.
- Visible defect: The proof-technique banner shows literal TeX delimiters and commands (rendered uppercase as “INDUCTION ON $\DIM\MATHFRAK G$”) in its technique summary. Ordinary proof-body math renders.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: ; [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra.md).

Exact frozen source lines:

```text
47: **Proof technique:** induction on $\dim\mathfrak g$.
```

#### lie-theory / confirmed 005: `ex-pbw-reordering-in-sl-two`

- Location: **Item body**; source lines 4.
- Pages: `lie-algebra-representations-enveloping-algebras-and-pbw-examples`.
- Visible defect: The rendered H1 reads “PBW reordering in sl_2”; the item body correctly renders sl₂ notation.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: ; [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-pbw-reordering-in-sl-two.md).

Exact frozen source lines:

```text
4: title: PBW reordering in sl_2
```

#### lie-theory / confirmed 006: `lem-block-projection-preserves-projectives`

- Location: **Proof technique**; source lines 72, 72.
- Pages: `projectives-standard-filtrations-and-bgg-reciprocity`.
- Visible defect: The uppercase technique banner displays the dollar signs and TeX command literally instead of typesetting Hom. This is raw math inside the intended banner.
- Future repair: Replace the inline TeX in the technique banner with plain “Hom” or a banner-safe rendered expression.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-block-projection-preserves-projectives--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/lem-block-projection-preserves-projectives.md).

Exact frozen source lines:

```text
72: **Proof technique:** direct, through the functorial block decomposition and the $\operatorname{Hom}$ characterisation of projectivity.
```

#### lie-theory / confirmed 007: `lem-engel-common-zero-vector`

- Location: **Proof technique**; source lines 46, 46.
- Pages: `solvable-and-nilpotent-lie-algebras`.
- Visible defect: The uppercase technique banner displays the dollar signs and TeX commands literally rather than typesetting the dimension expression.
- Future repair: Replace the inline TeX in the technique banner with plain “dim g” or a banner-safe rendered expression.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-engel-common-zero-vector--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/lem-engel-common-zero-vector.md).

Exact frozen source lines:

```text
46: **Proof technique:** induction on $\dim\mathfrak g$.
```

#### lie-theory / confirmed 008: `thm-equivalent-characterizations-of-reductive-lie-algebras`

- Location: **Proof technique**; source lines 53, 53.
- Pages: `semisimple-lie-algebras-cohomology-and-levi-theory`.
- Visible defect: The uppercase technique banner prints the dollar signs and `\Rightarrow` commands literally instead of showing the cycle of implications.
- Future repair: Replace the inline TeX in the technique banner with plain “1 → 2 → 3 → 1” or a banner-safe rendered expression.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-equivalent-characterizations-of-reductive-lie-algebras--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/thm-equivalent-characterizations-of-reductive-lie-algebras.md).

Exact frozen source lines:

```text
53: **Proof technique:** prove $1\Rightarrow2\Rightarrow3\Rightarrow1$.
```

#### lie-theory / confirmed 009: `cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two`

- Location: **title**; source lines 4.
- Pages: `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples`.
- Visible defect: Title displays literal underscores in SL_2 and PGL_2 instead of subscripts.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two.md).

Exact frozen source lines:

```text
4: title: SL_2 and PGL_2 have the same Lie algebra but differ globally
```

#### lie-theory / confirmed 010: `ex-positive-roots-and-highest-root-of-g-two`

- Location: **title**; source lines 4.
- Pages: `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples`.
- Visible defect: Title displays G_2 with a literal underscore instead of a subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-positive-roots-and-highest-root-of-g-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-positive-roots-and-highest-root-of-g-two.md).

Exact frozen source lines:

```text
4: title: Positive roots and highest root of G_2
```

#### lie-theory / confirmed 011: `ex-root-strings-in-type-a-two`

- Location: **title**; source lines 4.
- Pages: `cartan-subalgebras-and-root-space-decompositions-examples`.
- Visible defect: Title displays A_2 with a literal underscore instead of a subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-root-strings-in-type-a-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-root-strings-in-type-a-two.md).

Exact frozen source lines:

```text
4: title: Root strings in type A_2
```

#### lie-theory / confirmed 012: `ex-standard-and-dual-representations-of-sl-n-by-highest-weights`

- Location: **title**; source lines 4.
- Pages: `highest-weight-theory-for-complex-semisimple-lie-algebras`.
- Visible defect: Title displays sl_n with a literal underscore instead of a subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-standard-and-dual-representations-of-sl-n-by-highest-weights--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-standard-and-dual-representations-of-sl-n-by-highest-weights--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-standard-and-dual-representations-of-sl-n-by-highest-weights.md).

Exact frozen source lines:

```text
4: title: Standard and dual representations of sl_n
```

#### lie-theory / confirmed 013: `ex-weyl-group-of-a-n-is-the-symmetric-group`

- Location: **title**; source lines 4.
- Pages: `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples`.
- Visible defect: Title displays A_n with a literal underscore instead of a subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-weyl-group-of-a-n-is-the-symmetric-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-weyl-group-of-a-n-is-the-symmetric-group.md).

Exact frozen source lines:

```text
4: title: The Weyl group of A_n is the symmetric group
```

#### lie-theory / confirmed 014: `lem-standard-costandard-hom-and-ext-vanishing`

- Location: **Proof technique**; source lines 79.
- Pages: `projectives-standard-filtrations-and-bgg-reciprocity`.
- Visible defect: The uppercase technique banner shows the inline TeX source literally, including dollar delimiters and \mathfrak n^+, instead of rendering the mathematical expression. The banner capitalization itself is expected styling.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-standard-costandard-hom-and-ext-vanishing--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-standard-costandard-hom-and-ext-vanishing--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/lem-standard-costandard-hom-and-ext-vanishing.md).

Exact frozen source lines:

```text
79: **Proof technique:** direct: count the $\mathfrak n^+$-fixed weight vectors of a costandard object, then split every extension by a weight argument, dualizing in the remaining case.
```

#### lie-theory / confirmed 015: `fs-the-dual-representation-has-x-lambda-v-equal-lambda-x-v-with-no-minus-sign`

- Location: **Refutation**; source lines 40.
- Pages: `lie-algebra-representations-enveloping-algebras-and-pbw`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Use plain-text wording in the technique field or a rendering-safe technique label without inline TeX.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/fs-the-dual-representation-has-x-lambda-v-equal-lambda-x-v-with-no-minus-sign--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/fs-the-dual-representation-has-x-lambda-v-equal-lambda-x-v-with-no-minus-sign.md).

Exact frozen source lines:

```text
40: **Proof technique:** direct computation in the standard $\mathfrak{sl}_2$-module over a characteristic-zero field.
```

#### lie-theory / confirmed 016: `lem-finite-dimensional-tensors-reach-every-block-simple`

- Location: **Proof**; source lines 94.
- Pages: `projectives-standard-filtrations-and-bgg-reciprocity`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Use plain-text wording in the technique field or a rendering-safe technique label without inline TeX.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-finite-dimensional-tensors-reach-every-block-simple--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-finite-dimensional-tensors-reach-every-block-simple--02.png), [tile 03](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-finite-dimensional-tensors-reach-every-block-simple--03.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/lem-finite-dimensional-tensors-reach-every-block-simple.md).

Exact frozen source lines:

```text
94: **Proof technique:** constructive: shift $\mu$ to a maximal weight of a linkage class, tensor the projective Verma with the self-dual module $L(N\rho)$, and project to the block of $\mu$.
```

#### lie-theory / confirmed 017: `thm-lies-theorem`

- Location: **Proof**; source lines 49.
- Pages: `solvable-and-nilpotent-lie-algebras`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Use plain-text wording in the technique field or a rendering-safe technique label without inline TeX.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-lies-theorem--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-lies-theorem--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/thm-lies-theorem.md).

Exact frozen source lines:

```text
49: **Proof technique:** induction on $\dim\mathfrak g$.
```

#### lie-theory / confirmed 018: `ex-the-affine-a1-gcm-has-singular-rank-one-realization-data`

- Location: **Facts & Assumptions**; source lines 30.
- Pages: `kac-moody-algebras-from-generalized-cartan-matrices-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Wrap the mathematical variables and expressions in inline TeX.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-the-affine-a1-gcm-has-singular-rank-one-realization-data--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-the-affine-a1-gcm-has-singular-rank-one-realization-data.md).

Exact frozen source lines:

```text
30: **Given:** The displayed matrix and independent h_0,h_1,d.
```

#### lie-theory / confirmed 019: `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra`

- Location: **Facts & Assumptions**; source lines 30.
- Pages: `kac-moody-algebras-from-generalized-cartan-matrices`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Wrap the mathematical variables and expressions in inline TeX.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra.md).

Exact frozen source lines:

```text
30: **Given:** A finite symmetrizable GCM, positive d_i and a finite Cartan complement.
```

#### lie-theory / confirmed 020: `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra`

- Location: **Facts & Assumptions**; source lines 32.
- Pages: `kac-moody-algebras-from-generalized-cartan-matrices`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Wrap the mathematical variables and expressions in inline TeX.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra.md).

Exact frozen source lines:

```text
32: [F1] Symmetry means d_i a_ij=d_j a_ji. ([[def-symmetrizable-generalized-cartan-matrix]]).
```

#### lie-theory / confirmed 021: `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra`

- Location: **Facts & Assumptions**; source lines 36.
- Pages: `kac-moody-algebras-from-generalized-cartan-matrices`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Wrap the mathematical variables and expressions in inline TeX.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra.md).

Exact frozen source lines:

```text
36: [F3] A positive vector commuting with every f_i is zero; a negative vector commuting with every e_i is zero. ([[lem-kac-moody-opposite-simple-centralizer-vanishes]]).
```

#### lie-theory / confirmed 022: `ex-root-systems-a-two-b-two-and-g-two`

- Location: **Title**; source lines 4.
- Pages: `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples`.
- Visible defect: The H1 displays A_2, B_2 and G_2 with literal underscores instead of mathematical subscripts. This is a title typography/rendering defect; the corresponding body notation is typeset.
- Future repair: Use math-aware title rendering or spell the rank-two types in plain text (for example, A2, B2, G2) so the underscores do not appear literally.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-root-systems-a-two-b-two-and-g-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-root-systems-a-two-b-two-and-g-two.md).

Exact frozen source lines:

```text
4: title: Rank-two systems A_2, B_2 and G_2
```

#### lie-theory / confirmed 023: `ex-projective-covers-in-the-regular-sl2-block`

- Location: **Proof technique banner**; source lines 109.
- Pages: `projectives-standard-filtrations-and-bgg-reciprocity-examples`.
- Visible defect: The uppercase technique banner is intentional, but the embedded $n\ge0$ is rendered as literal dollar and backslash math source rather than typeset mathematics.
- Future repair: Move the mathematical condition out of the technique banner or convert it to plain text (for example, “for each nonnegative n”), keeping the banner itself in its intended uppercase style.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-projective-covers-in-the-regular-sl2-block--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-projective-covers-in-the-regular-sl2-block.md).

Exact frozen source lines:

```text
109: **Proof technique:** direct: derive the rank-one Verma submodule and quotient from the PBW model, then identify both projective covers for every $n\ge0$ and specialise to $n=0$.
```

#### lie-theory / confirmed 024: `cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations`

- Location: **Proof**; source lines 46.
- Pages: `solvable-and-nilpotent-lie-algebras`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations.md).

Exact frozen source lines:

```text
46: **Proof technique:** induction on $\dim V$.
```

#### lie-theory / confirmed 025: `lem-kostant-laplacian-is-scalar-on-weight-components`

- Location: **Proof**; source lines 60.
- Pages: `lie-algebra-cohomology-and-kostants-nilradical-theorem`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-kostant-laplacian-is-scalar-on-weight-components--03.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/lem-kostant-laplacian-is-scalar-on-weight-components.md).

Exact frozen source lines:

```text
60: **Proof technique:** establish the Hodge decomposition, compute the two anticommutators of $d$ from the exterior algebra relations, and identify the resulting operator with the Casimir.
```

#### lie-theory / confirmed 026: `ex-a-levi-decomposition-of-the-euclidean-motion-algebra`

- Location: **frontmatter title**; source lines 4.
- Pages: `semisimple-lie-algebras-cohomology-and-levi-theory-examples`.
- Visible defect: The rendered H1 prints R^3 literally, exposing the caret instead of typesetting the exponent.
- Future repair: Write the mathematical symbol with inline math, e.g. $\mathbb{R}^3$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-a-levi-decomposition-of-the-euclidean-motion-algebra--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-a-levi-decomposition-of-the-euclidean-motion-algebra.md).

Exact frozen source lines:

```text
4: title: A Levi decomposition of the Euclidean-motion algebra of R^3
```

#### lie-theory / confirmed 027: `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n`

- Location: **frontmatter title**; source lines 4.
- Pages: `cartan-subalgebras-and-root-space-decompositions`.
- Visible defect: The rendered H1 prints sl_n literally with a raw underscore.
- Future repair: Format the Lie algebra notation with inline math, e.g. $\mathfrak{sl}_n$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-diagonal-cartan-subalgebra-and-roots-of-sl-n--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-diagonal-cartan-subalgebra-and-roots-of-sl-n.md).

Exact frozen source lines:

```text
4: title: Diagonal Cartan subalgebra and roots of sl_n
```

#### lie-theory / confirmed 028: `thm-root-sl-two-triple`

- Location: **frontmatter title**; source lines 4.
- Pages: `cartan-subalgebras-and-root-space-decompositions`.
- Visible defect: The rendered H1 prints sl_2 literally with a raw underscore.
- Future repair: Format the Lie algebra notation with inline math, e.g. $\mathfrak{sl}_2$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-root-sl-two-triple--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/thm-root-sl-two-triple.md).

Exact frozen source lines:

```text
4: title: The root sl_2 triple
```

#### lie-theory / confirmed 029: `lem-hom-from-projectives-counts-simple-composition-factors`

- Location: **Proof technique banner**; source lines 64.
- Pages: `projectives-standard-filtrations-and-bgg-reciprocity`.
- Visible defect: The uppercase Proof technique banner prints the dollar delimiters and \operatorname source literally instead of rendering Hom(P(λ),−).
- Future repair: Render math inside the technique banner while preserving the intended uppercase technique label.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-hom-from-projectives-counts-simple-composition-factors--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/lem-hom-from-projectives-counts-simple-composition-factors.md).

Exact frozen source lines:

```text
64: **Proof technique:** induction on the length of a composition series, using exactness of $\operatorname{Hom}(P(\lambda),-)$ and additivity of multiplicities.
```

#### lie-theory / confirmed 030: `thm-engels-triangularization-theorem`

- Location: **Proof technique banner**; source lines 49.
- Pages: `solvable-and-nilpotent-lie-algebras`.
- Visible defect: The uppercase technique banner visibly prints raw dollar delimiters and the uppercased command `\DIM` instead of typesetting the dimension expression.
- Future repair: Keep the intended uppercase banner, but render its math expression independently or replace it with plain prose such as `induction on the dimension of V`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-engels-triangularization-theorem--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/thm-engels-triangularization-theorem.md).

Exact frozen source lines:

```text
49: **Proof technique:** induction on $\dim V$.
```

#### lie-theory / confirmed 031: `thm-malcev-conjugacy-of-levi-subalgebras`

- Location: **Proof technique banner**; source lines 50.
- Pages: `semisimple-lie-algebras-cohomology-and-levi-theory`.
- Visible defect: The uppercase technique banner visibly prints raw dollar delimiters and uppercased TeX commands rather than typesetting the commutator expression.
- Future repair: Keep the intended uppercase banner and render the commutator expression independently, or describe it in plain text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-malcev-conjugacy-of-levi-subalgebras--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/thm-malcev-conjugacy-of-levi-subalgebras.md).

Exact frozen source lines:

```text
50: **Proof technique:** induction on the radical, strengthened to place every conjugator in $[\mathfrak g,\mathfrak r]$.
```

#### lie-theory / confirmed 032: `ex-serre-relations-for-a-two-recover-sl-three`

- Location: **Title**; source lines 4.
- Pages: `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples`.
- Visible defect: The title renders the literal underscores in `A_2` and `sl_3` rather than mathematical subscripts.
- Future repair: Use rendered math in the title or spell the labels without raw subscript notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-serre-relations-for-a-two-recover-sl-three--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-serre-relations-for-a-two-recover-sl-three.md).

Exact frozen source lines:

```text
4: title: Serre relations for A_2 recover sl_3
```

#### lie-theory / confirmed 033: `fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields`

- Location: **Title**; source lines 4.
- Pages: `lie-groups-invariant-fields-and-the-exponential-map`.
- Visible defect: The title renders `T_eG` with a literal underscore; it is intended as the tangent space notation T_eG.
- Future repair: Set the tangent-space notation in rendered math or spell out `the tangent space at the identity`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields.md).

Exact frozen source lines:

```text
4: title: Right-invariant fields identify T_eG with the same bracket as left-invariant fields
```

#### lie-theory / confirmed 034: `lem-hom-to-costandards-counts-verma-flag-factors`

- Location: **Proof technique banner**; source lines 64.
- Pages: `projectives-standard-filtrations-and-bgg-reciprocity`.
- Visible defect: The uppercase technique banner visibly prints raw dollar delimiters and uppercased `\DELTA`/`\NABLA` commands in place of the intended Greek-letter notation.
- Future repair: Keep the uppercase banner and render the two Greek symbols as math, or describe the orthogonality in plain prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/lem-hom-to-costandards-counts-verma-flag-factors--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/lem-hom-to-costandards-counts-verma-flag-factors.md).

Exact frozen source lines:

```text
64: **Proof technique:** induction on the length of a Verma flag, using the long exact sequence and the $\Delta$-$\nabla$ orthogonality.
```

### Optional typography

#### lie-theory / typography 001: `def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group`

- Location: **Item body**; source lines 4.
- Pages: `compact-lie-groups-maximal-tori-and-peter-weyl-theory`.
- Visible defect: The H1 title uses plain L2(G).
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group.md).

Exact frozen source lines:

```text
4: title: Left and right regular representations on L2(G)
```

#### lie-theory / typography 002: `ex-cartan-subalgebra-and-roots-of-sl-two`

- Location: **Item body**; source lines 4.
- Pages: `cartan-subalgebras-and-root-space-decompositions-examples`.
- Visible defect: The H1 title uses plain sl_2.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-cartan-subalgebra-and-roots-of-sl-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-cartan-subalgebra-and-roots-of-sl-two.md).

Exact frozen source lines:

```text
4: title: Cartan subalgebra and roots of sl_2
```

#### lie-theory / typography 003: `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras`

- Location: **Item body**; source lines 4.
- Pages: `cartan-subalgebras-and-root-space-decompositions-examples`.
- Visible defect: The H1 title uses plain B_2 and C_2.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras.md).

Exact frozen source lines:

```text
4: title: Root systems B_2 and C_2 from matrix Lie algebras
```

#### lie-theory / typography 004: `ex-weyl-reflection-in-sl-two`

- Location: **Item body**; source lines 4.
- Pages: `cartan-subalgebras-and-root-space-decompositions-examples`.
- Visible defect: The H1 title uses plain sl_2.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-weyl-reflection-in-sl-two--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-weyl-reflection-in-sl-two--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-weyl-reflection-in-sl-two.md).

Exact frozen source lines:

```text
4: title: The Weyl reflection in sl_2
```

#### lie-theory / typography 005: `cex-symmetrization-does-not-preserve-products-in-sl-two`

- Location: **Item body**; source lines 4.
- Pages: `lie-algebra-representations-enveloping-algebras-and-pbw-examples`.
- Visible defect: The captured title displays literal underscore notation “sl_2”; the statement and proof use correctly typeset $\mathfrak{sl}_2$.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/cex-symmetrization-does-not-preserve-products-in-sl-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/cex-symmetrization-does-not-preserve-products-in-sl-two.md).

Exact frozen source lines:

```text
4: title: Symmetrization does not preserve products in sl_2
```

#### lie-theory / typography 006: `ex-killing-form-of-sl-two`

- Location: **Item body**; source lines 4.
- Pages: `semisimple-lie-algebras-cohomology-and-levi-theory`.
- Visible defect: The captured title displays literal underscore notation “sl_2”; the example body uses correctly typeset $\mathfrak{sl}_2$.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/ex-killing-form-of-sl-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/ex-killing-form-of-sl-two.md).

Exact frozen source lines:

```text
4: title: Killing form of sl_2
```

#### lie-theory / typography 007: `thm-finite-dimensional-representations-of-sl-two`

- Location: **Item body**; source lines 4.
- Pages: `cartan-subalgebras-and-root-space-decompositions`.
- Visible defect: The captured title displays literal underscore notation “sl_2”; the statement and body use correctly typeset $\mathfrak{sl}_2$.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-finite-dimensional-representations-of-sl-two--01.png), [tile 02](math-library-rendering-audit-2026-10-23/lie-theory/screenshots/thm-finite-dimensional-representations-of-sl-two--02.png); [frozen source](math-library-rendering-audit-2026-10-23/lie-theory/snapshots/thm-finite-dimensional-representations-of-sl-two.md).

Exact frozen source lines:

```text
4: title: Finite-dimensional representations of sl_2
```

