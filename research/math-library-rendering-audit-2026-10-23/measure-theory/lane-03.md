# Measure Theory rendering audit — lane 03

Reviewed 103 assigned items and 128 screenshot tiles.

Every assigned PNG was opened separately at original resolution. All 103 frozen Markdown snapshots are byte-identical to the assigned source files; assigned source and tile hashes match their assignment/manifests. Review was limited to the frozen local snapshots and HTML.

## Confirmed rendering defects

### `cex-half-norm-fails-the-triangle-inequality-on-two-indicators` — raw-math-in-technique-banner

Source: `items/cex-half-norm-fails-the-triangle-inequality-on-two-indicators.md` line 39.

The technique banner displays the literal `$1/2$` delimiters after its uppercase label. The mathematical phrase is intelligible but the delimiters are source syntax, not notation.

Observed: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.

Repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.

Tile: `cex-half-norm-fails-the-triangle-inequality-on-two-indicators--01.png` (SHA-256 `7c13d8a0393d368574961294dd342d88e8cc404eb09c975dc85487bb1f9c6cdc`).

### `ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing` — raw-math-in-technique-banner

Source: `items/ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing.md` line 47.

The technique banner displays `$p=q=2$` literally instead of typesetting the exponents.

Observed: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.

Repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.

Tile: `ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing--01.png` (SHA-256 `a183bd8d0b9f36b121c42cce70b65b31621baac546125112d6e620bfdcd6d77e`).

### `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q` — raw-math-in-technique-banner

Source: `items/lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q.md` line 51.

The uppercase technique banner displays inline math markup literally (`$1<p<\infty$`, `$p=1$`).

Observed: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.

Repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.

Tile: `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q--01.png` (SHA-256 `1d54cb87d527504ea10c930bd27af526b3c6366d91ba2539076c6c2b4c847ea7`).

### `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class` — raw-math-in-technique-banner

Source: `items/prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class.md` line 57.

The uppercase technique banner displays inline math markup literally (`$1 \le p < infinity$`, `$p=infinity$`, `$|f|^p$`).

Observed: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.

Repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.

Tile: `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class--01.png` (SHA-256 `46246a80a7ef998eb912a8988873acf0b1ab5046706ce0ec908341c70771ae40`).

### `thm-ell-p-includes-into-ell-r-for-p-less-r` — raw-math-in-technique-banner

Source: `items/thm-ell-p-includes-into-ell-r-for-p-less-r.md` line 45.

The uppercase technique banner displays inline math markup literally (`$\ell^p$`, `$|a_n|^r$`, `$|a_n|^p$`).

Observed: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.

Repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.

Tile: `thm-ell-p-includes-into-ell-r-for-p-less-r--01.png` (SHA-256 `36ef135652a4216af4ecfb06d7f84a488045bab79375d04a978e3cba816fd7cd`).

### `thm-riesz-fischer-completeness-of-l-p` — raw-math-in-technique-banner

Source: `items/thm-riesz-fischer-completeness-of-l-p.md` line 63.

The uppercase technique banner displays inline math markup literally (`$1 \le p < infinity$`, `$p = infinity$`).

Observed: The render’s uppercase technique banner does not typeset the inline math delimiters; literal dollar signs and math source are visible.

Repair: Render the technique math in the same way as inline math in the ItemBody, or rewrite the technique as plain prose without math delimiters.

Tile: `thm-riesz-fischer-completeness-of-l-p--01.png` (SHA-256 `cb6169c221d9e57565c339db6c5ce40ea3a7cf7ed9e134d916a592b661ffd81d`).

### `ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval` — unformatted-math-in-title

Source: `items/ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval.md` line 4.

The title is authored as `Egorov for x^k on the unit interval` and the heading displays `x^k` literally.

Observed: The title math is displayed as raw ASCII caret/underscore notation.

Repair: Typeset the exponent in the title, e.g. `Egorov for $x^k$ on the unit interval`.

Tile: `ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval--01.png` (SHA-256 `e1f8878eb834cdcf468d19ead0455fae04f943ca12e1e6bc0205e5b0abd5fd52`).

### `ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition` — unformatted-math-in-title

Source: `items/ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition.md` line 4.

The title displays `delta_1` and `delta_-1` with literal underscores.

Observed: The title math is displayed as raw ASCII caret/underscore notation.

Repair: Typeset the subscripts in the title, e.g. `$\delta_1$` and `$\delta_{-1}$`.

Tile: `ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition--01.png` (SHA-256 `ce38d395afe186d79135aab7c1aa8a9953afbc25edd366093b9f02846e4dd6c8`).

## Editorial diagram candidate

### `ex-an-interval-endpoint-is-not-a-density-point`

Source: `items/ex-an-interval-endpoint-is-not-a-density-point.md` lines 29, 31, 37, 39, 45.

The example defines the density ratio at 0 and computes it for E=[0,1], showing E∩(-r,r)=[0,r) and the ratio r/(2r)=1/2.

Draw the symmetric interval (-r,r) with the positive half [0,r) highlighted as E∩(-r,r); label total length 2r and highlighted length r, yielding the displayed ratio 1/2. Preserve the endpoint conventions at 0 and the fact that 0<r≤1.

Optionally add a simple number-line diagram of (-r,r) and its intersection [0,r), with length labels 2r and r. This is an explanatory addition, not a correction.

Tile reviewed: `ex-an-interval-endpoint-is-not-a-density-point--01.png` (SHA-256 `0f6b3fed3335ecb7e063dbaf79cc3ca0822fdd93472a1fac14026967b0e199d8`).

## Other checks

Across the remaining assigned titles and full ItemBody renders, I found no other unformatted math, literal source code, broken TeX/KaTeX, failed TikZ, reference-title leak beyond the expected block-style reference rendering, Scratch content, or standalone-tile clipping. No existing diagram was present in the assigned coverage, so there were no diagram-mathematics checks to report. Punctuation wraps alone were not treated as defects.

The complete per-item and per-tile hash inventory is in `lane-03.json`.
