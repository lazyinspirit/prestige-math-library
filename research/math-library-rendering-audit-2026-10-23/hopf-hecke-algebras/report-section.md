## Hopf Algebras & Hecke Algebras

Completed visual review of **227 items across 42 pages**, with **386 image tiles**. Findings: 3 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/hopf-hecke-algebras/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/hopf-hecke-algebras/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/hopf-hecke-algebras/category-review-receipt.json).

### Confirmed rendering defects

#### hopf-hecke-algebras / confirmed 001: `prop-weak-bialgebra-module-tensor-product-is-delta-one-image`

- Location: **Image and quotient**; source lines 46, 48, 50, 51, 52, 53.
- Pages: `quasi-hopf-weak-hopf-and-relative-tensor-products`.
- Visible defect: The local HTML shows a red “diagram failed to render” block and exposes the fenced tikzcd source instead of a diagram. Tile 01 shows the same failure under “Image and quotient.”
- Future repair: Adjust the fenced tikzcd body to syntax accepted by the local renderer, then verify the intended quotient-to-image diagram renders.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/hopf-hecke-algebras/screenshots/prop-weak-bialgebra-module-tensor-product-is-delta-one-image--01.png); [frozen source](math-library-rendering-audit-2026-10-23/hopf-hecke-algebras/snapshots/prop-weak-bialgebra-module-tensor-product-is-delta-one-image.md).

Exact frozen source lines:

```text
46: ## Image and quotient
48: The quotient map $q:V\otimes_kW\to V\otimes_{H_t}W$ and the idempotent $P=\Delta(1)|_{V\otimes W}$ fit into the following diagram. The lower arrow is the restriction of $q$ and is an isomorphism; the proof constructs its inverse.
50: ```tikzcd
51: V\otimes_k W \arrow[r,"q"] \arrow[d,"P"'] & V\otimes_{H_t}W \\
52: \operatorname{im}P \arrow[ur,"q|_{\operatorname{im}P}"'] &
53: ```
```

#### hopf-hecke-algebras / confirmed 002: `lem-hh-reduced-word-independence-and-length-multiplication`

- Location: **title**; source lines 4.
- Pages: `generic-coxeter-hecke-algebras-and-the-standard-basis`.
- Visible defect: The rendered title prints the underscore in `T_w` literally. The ItemBody formulas and their subscripts render as math.
- Future repair: Wrap `T_w` in inline math delimiters in the title and rerender the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/hopf-hecke-algebras/screenshots/lem-hh-reduced-word-independence-and-length-multiplication--01.png); [frozen source](math-library-rendering-audit-2026-10-23/hopf-hecke-algebras/snapshots/lem-hh-reduced-word-independence-and-length-multiplication.md).

Exact frozen source lines:

```text
4: title: "Reduced-word independence of T_w and the length-multiplication rules"
```

#### hopf-hecke-algebras / confirmed 003: `thm-quasi-bialgebra-modules-form-a-monoidal-category`

- Location: **Pentagon diagram**; source lines 40, 53.
- Pages: `quasi-hopf-weak-hopf-and-relative-tensor-products`.
- Visible defect: The pentagon diagram is absent; raw TikZ-cd code is exposed in the rendered ItemBody.
- Future repair: Repair the tikzcd source or renderer-compatible syntax for the pentagon and recapture the local preview. The textual proof at lines 87–89 states the two pentagon products and triangle identity; use it to check that the rendered arrows connect the corresponding parenthesized tensor products.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/hopf-hecke-algebras/screenshots/thm-quasi-bialgebra-modules-form-a-monoidal-category--01.png); [frozen source](math-library-rendering-audit-2026-10-23/hopf-hecke-algebras/snapshots/thm-quasi-bialgebra-modules-form-a-monoidal-category.md).

Exact frozen source lines:

```text
40: ```tikzcd
53: ```
```

