# Group Theory rendering audit — lane 04

Reviewed all 98 assigned item titles and complete ItemBodies, plus all 119 assigned screenshot tiles. Each tile was opened individually with `tools.view_image` at original resolution. Current source, frozen snapshot, rendered HTML, and screenshot hashes match their frozen records. No item or tile remains unreviewed. Exact per-item and per-tile SHA256 coverage is in [lane-04.json](lane-04.json).

Seven confirmed display-notation issues are confined to raw ASCII mathematical notation in titles or one refuted-statement line: `C_4`/`C_2`, `F_7`, `Zp`, `Z^n`, `H^2`, and `C4`/`C2×C2`. The body versions of `Z_p`, `Z^n`, and `H^2` in the noted items render correctly. The individual records identify source lines and screenshot evidence.

## Optional diagram candidates

- `thm-greendlinger-shell-existence-from-the-curvature-count` (source lines 27, 33, 35, 43, 45): an optional van Kampen shell figure can show an exterior arc `s` with `|s| > |r|/2` and a complementary path made of at most three internal arcs, each shorter than `|r|/6`. The cyclic face reading must orient `s` as an initial segment of the chosen symmetrised relator. The result is already proved in prose; the diagram is explanatory.
- `lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision` (source lines 31–32, 38, 48, 50): an optional two-panel tree sketch can show an edge inversion in `T` and the fixed barycentric midpoint in `T′`, then the odd-diameter case where the no-inversions action fixes both endpoints of the stabilized edge. It must not suggest that the original tree already has a fixed vertex.

Both are uncertain optional candidates, not confirmed omissions. No other source-supported missing diagram is recommended.

## Rendering and diagram checks

The 98 sidecars report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. There were therefore no existing TikZ/tikzcd maps, orientations, indices, or signs to check. Inline formulas and rendered proof content were legible. No standalone clipping was confirmed; the apparent break in `N + \ker\pi=P` in `def-essential-epimorphism-and-projective-cover` is visible across adjacent lines in its original screenshot. Wikilinks render as block lines by design, and the uppercase technique banners are expected CSS styling. No Scratch section or panel occurs in the assigned ItemBodies.
