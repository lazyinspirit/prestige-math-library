## Hecke Algebras and Categorification

Completed visual review of **229 items across 16 pages**, with **551 image tiles**. Findings: 5 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/category-review-receipt.json).

### Confirmed rendering defects

#### hecke-algebras-and-categorification / confirmed 001: `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`

- Location: **Statement**; source lines 29.
- Pages: `ariki-categorification-and-graded-decomposition-numbers`.
- Visible defect: The frozen statement and proof render the shorthand literally as ordinary text, with ASCII function notation, arrows and underscores. This assigned item has katex_count 0; adjacent assigned items render TeX normally. This is source-authored untypeset notation, not a failure of the HTML renderer.
- Future repair: Replace shorthand with explicit renderer-supported math, e.g. $D^{\mathrm{cell}}(\lambda)$, $J(\lambda)$, $G_0$, $D^{\mathrm{crystal}}(\lambda)$, $v\mapsto v^{-1}$ and $[J(\lambda):D^{\mathrm{crystal}}(\lambda)]_q$, while preserving the intended meaning of CP.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/screenshots/lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree--01.png); [frozen source](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/snapshots/lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree.md).

Exact frozen source lines:

```text
29: In the positive-characteristic nondegenerate level-one regime, the normalized cellular head dotD(lambda) for each restricted partition lambda is isomorphic, with shift zero, to the normalized simple of the same right crystal label lambda. The reduction J(lambda) of the characteristic-zero normalized simple contains that crystal-labelled simple once, and has no constituents with cellular labels not dominated by lambda. Its G0 class is invariant under finite-module diagram duality. This proves the CP label comparison needed for the crystal-labelled adjustment matrix; it is not a positive-characteristic global-basis identification.
```

#### hecke-algebras-and-categorification / confirmed 002: `ex-murphy-cellular-basis-for-h3`

- Location: **Title**; source lines 4.
- Pages: `type-a-hecke-specht-modules-and-cellular-bases-examples`.
- Visible defect: The title renders the ASCII underscore literally in “H(S_3)” instead of typesetting the group subscript.
- Future repair: Wrap the notation in math delimiters, e.g. “The Murphy cellular basis of $H(S_3)$.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/screenshots/ex-murphy-cellular-basis-for-h3--01.png); [frozen source](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/snapshots/ex-murphy-cellular-basis-for-h3.md).

Exact frozen source lines:

```text
4: title: "The Murphy cellular basis of H(S_3)"
```

#### hecke-algebras-and-categorification / confirmed 003: `lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels`

- Location: **Statement and Proof**; source lines 27, 39, 41, 42.
- Pages: `ariki-categorification-and-graded-decomposition-numbers`.
- Visible defect: The complete Statement and proof display their mathematical notation as raw ASCII, including underscores, carets, and unrendered function/product notation; the local HTML has zero KaTeX nodes.
- Future repair: Typeset the mathematical expressions throughout the Statement, Facts, and Proof with the item math delimiters; preserve the stated formulas and surrounding prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/screenshots/lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels--01.png); [frozen source](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/snapshots/lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels.md).

Exact frozen source lines:

```text
27: For a nonzero finite-dimensional standard homogeneous cyclotomic KLR module M over any field, choose a word by successive maximal last-color blocks i_1^{r_1}...i_s^{r_s}. Among the simple shift orbits occurring as constituents of M, exactly one normalized orbit S_c contributes to that word; its right crystal label is c=tilde f_{i_s}^{r_s}...tilde f_{i_1}^{r_1}u_Lambda. Its word graded dimension is product_a [r_a]_{i_a}!, and [M:S_c]_v equals gdim e(word)M divided by that product. All other simple orbits occurring in M have zero space at this word; simple orbits absent from M may have nonzero space there. The zero module has zero character and requires no extremal-word selection. Consequently graded word characters are injective on G0. If two fields have modules with the same word character, their extremal words and detected canonical B(Lambda) labels coincide. No one-dimensional word-space assertion is made. Choice is inherited only through the existing abstract crystal identification.
39: 1.1 Let M be a nonzero finite-dimensional standard homogeneous cyclotomic module. Choose a nonzero word by successively maximizing the last constant-color block, then the preceding block after restricting that maximum, until the vacuum is reached. Write the resulting word as i_1^{r_1}...i_s^{r_s}, adjacent colors distinct. Restriction to a word idempotent is exact. Every simple constituent of M with nonzero word space must have precisely the same first maximal last-block length: a shorter length gives zero, a longer length would contradict maximality for M. The actual maximal-tail supplier identifies the full maximal restriction of this simple with N tensor L(i_s^{r_s}), where N is simple with zero residual i_s-tail. Repeat on N and on the corresponding exact restriction of M. At the end N is the unique vacuum simple. Reconstruct using the actual unique-head induction supplier. Hence exactly one simple shift orbit among the constituents of M can contribute at the chosen word. Its crystal label is obtained by the same successive right-induction powers from the vacuum, so is field independent under the native11 canonical B(Lambda) identification. [F1, F2, algebra]
41: 2.1 For the normalized simple S in that orbit, maximal restriction is normalized N tensor normalized L(i^r): restriction commutes with finite vector duality, the two factors are absolutely simple, and their unique self-dual normalizations force the remaining shift to be zero. The normalized rank-r nil-Hecke simple has graded dimension [r]_i!, by the actual polynomial/corner calculation with shift -d_i binomial(r,2). Iterating gives gdim e(word)S=product_a [r_a]_{i_a}!. Therefore the coefficient of [S] in [M] is gdim e(word)M divided by this nonzero product. [F1, F2, step 1.1, algebra]
42: 
```

#### hecke-algebras-and-categorification / confirmed 004: `thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations`

- Location: **Proof technique banner**; source lines 59.
- Pages: `klr-algebras-induction-and-quantum-serre-categorification`.
- Visible defect: The proof-technique banner is plain text and exposes the literal LaTeX delimiters and command (“$\GAMMA$” after CSS uppercase styling) in the screenshot.
- Future repair: Use plain text “gamma” in the technique banner or remove the math delimiters there; keep the rendered formulas in the Statement/Proof.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/screenshots/thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations--02.png); [frozen source](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/snapshots/thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations.md).

Exact frozen source lines:

```text
59: **Proof technique:** direct; build the induction algebra and restriction coalgebra, then the contracting homotopy for the Serre relation, then descend $\gamma$.
```

#### hecke-algebras-and-categorification / confirmed 005: `ex-degenerate-level-one-hecke-klr-map-for-s3`

- Location: **Title**; source lines 4.
- Pages: `cyclotomic-hecke-and-quiver-hecke-algebras-examples`.
- Visible defect: The symmetric-group subscript in the title is not typeset as mathematical notation.
- Future repair: Wrap the group notation in math delimiters, for example `$S_3$`, in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/screenshots/ex-degenerate-level-one-hecke-klr-map-for-s3--01.png); [frozen source](math-library-rendering-audit-2026-10-23/hecke-algebras-and-categorification/snapshots/ex-degenerate-level-one-hecke-klr-map-for-s3.md).

Exact frozen source lines:

```text
4: title: "The degenerate level-one Hecke–KLR map for S_3"
```

