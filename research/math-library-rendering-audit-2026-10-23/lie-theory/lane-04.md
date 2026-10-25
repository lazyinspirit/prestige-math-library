# Lie Theory rendering audit — lane 04

Reviewed all 108 assigned item titles and complete ItemBodies, all assigned local HTML renderings, and all 166 screenshot tiles. Every PNG was opened individually with `tools.view_image` at original resolution. Current source, frozen snapshot, rendered HTML, and screenshot hashes match their frozen records; no item or tile remains unreviewed. Exact per-item and per-tile SHA256 coverage is in [lane-04.json](lane-04.json).

Six confirmed display issues were found: five titles display raw ASCII subscripts (`SL_2`, `PGL_2`, `G_2`, `A_2`, `sl_n`, `A_n`), and one proof-technique banner displays raw inline TeX for `\\mathfrak n^+`. Findings list exact source lines and screenshot evidence. No other literal ASCII math, carets, or underscores were confirmed in rendered mathematical content.

## Optional diagram candidates

- `thm-rank-two-root-system-classification` (source lines 35–57, 97, 99, 101): an optional four-panel root-system comparison could show `A_1 ⨿ A_1`, `A_2`, `B_2 ≅ C_2`, and `G_2`. Label all roots by the source's simple-root coordinates, include their central opposites, and check the angles, length ratios, Cartan integer pairs, and positive-root counts against the text. This classification is already proved in prose; the candidate is explanatory and uncertain.
- `ex-root-strings-in-type-a-two` (source lines 31–38 and 52–54): an optional pair of α-direction strings could show the terms `β, β+α` with `(p,q)=(0,1)` and `−α,0,α` with `(p,q)=(2,0)`, marking the origin as zero rather than a root and checking `p−q=β(h_α)` in each case. The example is complete in prose; the candidate is explanatory and uncertain.

## Rendering and diagram checks

All 108 sidecars report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. There were no existing content diagrams to check for correct mathematics. No standalone clipping was confirmed. Wikilinks render as block lines by design; uppercase technique banners are expected CSS styling, while the raw math inside one banner is a confirmed display defect. No Scratch section or disclosure occurs in the assigned ItemBodies.
