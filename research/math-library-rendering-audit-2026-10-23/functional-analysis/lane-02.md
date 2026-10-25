# Functional Analysis rendering audit — lane 02

Reviewed all 94 assigned items and all 164 assigned screenshot tiles. Every PNG was opened as a standalone image at original resolution. Titles and complete rendered ItemBody sections were checked, including displayed formulas, raw ASCII math, technique banners, internal reference titles, Scratch text/panels, and any existing diagrams.

## Findings

1. **ex-choice-free-discontinuous-functional-on-c00** — Title (source line 4, confirmed). The rendered title exposes the literal underscore in c_00, rather than typesetting the subscript or spelling the notation out. Screenshot: `screenshots/ex-choice-free-discontinuous-functional-on-c00--01.png` Repair: Use renderer-supported math delimiters for c_{00}, or write the space name in words.
2. **thm-c-zero-is-not-complemented-in-ell-infinity** — Title (source line 4, confirmed). The rendered title exposes the literal underscore in c_0 instead of a subscript. Screenshot: `screenshots/thm-c-zero-is-not-complemented-in-ell-infinity--01.png` Repair: Use renderer-supported math delimiters for c_0, or write “the space of sequences converging to zero” in words.
3. **cor-separable-reflexive-space-has-separable-dual** — Proof technique (source line 49, confirmed). The uppercase technique banner prints the dollar delimiters and caret notation literally (`$X^*$`). Uppercase technique banners are expected; the raw math inside is the rendering defect. Screenshot: `screenshots/cor-separable-reflexive-space-has-separable-dual--01.png` Repair: Spell out “the dual space” in this banner, or render its formula with supported markup.
4. **thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms** — Proof technique (source line 59, confirmed). The uppercase technique banner prints `$L^2$` literally, including dollar delimiters and the caret. Screenshot: `screenshots/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms--01.png` Repair: Replace the formula with “square-integrable approximation” or use supported markup.
5. **ex-fredholm-determinant-of-a-finite-rank-operator** — Verification, final step (source line 128, confirmed). The final proof line displays the literal `\qed` command after the citation tags. Screenshot: `screenshots/ex-fredholm-determinant-of-a-finite-rank-operator--03.png` Repair: Use the schema-supported QED glyph `∎` after the trailing tags.
6. **lem-fredholm-determinant-zeros-and-algebraic-multiplicities** — Proof, final step (source line 164, confirmed). The final proof line displays the literal `\qed` command after the citation tags. Screenshot: `screenshots/lem-fredholm-determinant-zeros-and-algebraic-multiplicities--04.png` Repair: Use the schema-supported QED glyph `∎` after the trailing tags.
7. **lem-quasinilpotent-trace-class-operator-has-zero-trace** — Proof, final step (source line 155, confirmed). The final proof line displays the literal `\qed` command after the citation tags. Screenshot: `screenshots/lem-quasinilpotent-trace-class-operator-has-zero-trace--04.png` Repair: Use the schema-supported QED glyph `∎` after the trailing tags.

## Optional typography

- **def-invertible-element-and-general-linear-group-of-a-banach-algebra** — Remarks show backticked machine IDs (`ex-spectrum-of-the-unilateral-shift` and `ex-unitization-of-a-nonunital-banach-algebra`) in reader-facing prose. Source lines 61, 77; screenshot: `screenshots/def-invertible-element-and-general-linear-group-of-a-banach-algebra--01.png`.
- **def-spectral-radius** — A remark shows the backticked machine ID `cex-norm-need-not-equal-spectral-radius` in reader-facing prose. Source lines 61; screenshot: `screenshots/def-spectral-radius--01.png`.

## Diagram review

No assigned item contains TikZ (`tikz_count: 0` for all 94 manifests), and all manifests report zero diagram failures. I found no source-supported missing diagram candidate; maps and relations in the reviewed items are adequately stated in text and formulas.

## Integrity and coverage

- Source SHA256 matches assignment for 94/94 items; each frozen snapshot is byte-identical to its source.
- Captured HTML SHA256 matches assignment for 94/94 items.
- Screenshot SHA256 matches capture manifest for 164/164 tiles; all 164 were individually opened at original resolution.
- KaTeX capture errors: 0. Diagram failures: 0. Unreviewed items/tiles: 0.
- No Scratch text or panel appears in the assigned source bodies or opened captures.

The JSON file contains exact per-item and per-tile coverage, filenames, and SHA256 values. This was a visual audit rather than a mathematical proof re-audit. No HTTP/live-site inspection, content/tool edits, build, tests, or publication changes were made.
