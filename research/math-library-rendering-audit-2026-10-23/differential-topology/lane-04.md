# Differential Topology rendering audit — lane 04

Reviewed 98 assigned items and 191 local PNG tiles. Every tile was opened individually at original resolution. Frozen snapshots match current source byte-for-byte; source, snapshot, rendered HTML, and tile SHA256 values and the complete y-window coverage are recorded in [lane-04.json](lane-04.json). All sequences cover their captured document heights without gaps.

## Findings

1. **Raw caret notation in statement** — `lem-c1-euclidean-maximal-flow-with-c2-upgrade`, source line 28, tile `lem-c1-euclidean-maximal-flow-with-c2-upgrade--01.png`. The undelimited `R^n` is displayed as ordinary text with its caret rather than a typeset exponent. KaTeX error count is zero.
2. **Raw underscore notation in statement** — `lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood`, source line 35, tile `lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood--01.png`. The undelimited `γ_t` is displayed with its underscore rather than a typeset subscript. KaTeX error count is zero.

Wikilinks rendering as block lines and uppercase technique banners are expected renderer behavior. No clipping was confirmed from the individually viewed tiles.

## Coverage and diagram review

All 98 item title/ItemBody sequences have gapless tile coverage; hash mismatch counts are zero. The capture metadata reports zero KaTeX errors, zero diagram failures, and zero TikZ diagrams. Inline SVG elements found in some HTML are KaTeX accent glyphs, not content diagrams, so there were no existing maps, orientations, indices, or signs to verify.

Three source-supported but uncertain optional diagram candidates are documented in the JSON: the handle slide incidence/row operation, the oriented coordinate-circle intersection pairing on the torus, and the Möbius-band quotient illustrating holonomy of `γ` and `2γ`. Their source claims and exact content to depict are included; none is a confirmed omission.

No Scratch sections occur in the assigned source or rendered bodies. Review used frozen local evidence only; no live website, HTTP content, tests, builds, or item/app/tool changes were involved.
