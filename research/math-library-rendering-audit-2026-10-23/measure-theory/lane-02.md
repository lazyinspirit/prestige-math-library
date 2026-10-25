# Measure Theory rendering review — lane 02

## Scope and coverage

Reviewed all 103 assigned frozen snapshots and local HTML previews. Opened all 122 assigned PNG tiles individually at original resolution. The source and HTML SHA256 values match the assignment for all 103 items; PNG hashes match screenshot metadata for all 122 tiles. Coverage and per-tile hashes are in [lane-02.json](lane-02.json).

The capture metadata reports zero KaTeX errors, zero TikZ renderings, and zero diagram failures. No Scratch labels or standalone embedded images appeared. No existing diagram mathematics was present in this lane to check. Page screenshots are viewport captures; their viewport boundaries were not treated as standalone-image clipping defects. Reference links render in blocks as designed, so their line breaks and adjacent punctuation were not reported.

## Confirmed rendering defects

The uppercase technique banner exposes raw math source rather than typesetting it:

- `cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions`, snapshot line 37: raw `$0$` and `$L^p$` in the technique text.
- `cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval`, line 43: raw `\{0\}` and `$L^p$` in the technique text.
- `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`, line 43: raw `$L^p$` in the technique text.
- `fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm`, line 37: raw `$0$` and `$L^p$` in the technique text.

Two titles contain ASCII math that appears literally in the rendered heading:

- `ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise`, snapshot line 4: `L^1` appears as plain text.
- `ex-zeta-two-from-tonelli-and-the-geometric-series`, line 4: `int_0^1 int_0^1 1/(1-xy) dx dy = pi^2/6` appears as plain text. The example body on line 24 uses TeX and renders correctly.

## Diagram candidate

`def-chacon-three-cut-one-spacer-towers`, snapshot lines 31–35, is a source-supported candidate for an editorial tower diagram. A useful schematic would show a stage-r tower with its equal-width levels, each level cut into the three labeled thirds `L_{r,j}^{(0)}`, `L_{r,j}^{(1)}`, and `L_{r,j}^{(2)}`; arrange the three columns in the order specified on line 32, insert the spacer `J_r` between the middle and right columns, and show the reservoir split into `J_r` and `R_{r+1}`. Label heights `h_r` and `h_{r+1}=3h_r+1`, widths `w_r` and `w_{r+1}=w_r/3`, and indicate that together the new levels and `R_{r+1}` partition `[0,1)`. This is an optional explanatory diagram; no mathematical error is asserted.

## Remaining checks

The assigned titles and full ItemBody render without other confirmed raw math, KaTeX/TeX, reference-title, or Scratch defects. I found no standalone image whose clipping can be assessed in this lane. The review covers frozen local previews only and makes no production-route or publication-state claim.
