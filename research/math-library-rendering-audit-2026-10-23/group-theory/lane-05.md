# Group Theory rendering audit — lane 05

Reviewed all 97 assigned items and all 121 screenshot tiles at original resolution. Every tile was opened individually with `tools.view_image`; no collage or downscaled view was used. For each item, I checked the frozen title and complete ItemBody against its rendered HTML and screenshot tiles, including internal reference titles, formulas, and any diagram content.

All current item source hashes match `assignment-05.json`; each frozen snapshot is byte-identical to its current source; all HTML hashes match the assignment; and all 121 tile hashes match their individual screenshot manifests. No source, snapshot, HTML, or tile drift remains unreviewed. No valid TikZ diagram or diagram failure was recorded in the assigned lane.

## Confirmed rendering findings

1. **`cex-counting-every-lower-central-generator-with-weight-one`** — Facts & Assumptions, source lines 31 and 35. The given normal form `x^a y^b z^k` and bound `O(sqrt of its absolute value)` appear as raw ASCII/plain prose, while the later proof formulas are typeset. Typeset these expressions, checking the intended variable in the square-root bound against the cited statement. Screenshot: `screenshots/cex-counting-every-lower-central-generator-with-weight-one--01.png`.
2. **`def-perfect-group`** — Definition, line 26. `G=[G,G]` and `G_ab=0` render as raw ASCII. Use math delimiters and a subscripted abelianization. Screenshot: `screenshots/def-perfect-group--01.png`.
3. **`lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists`** — Statement, line 28. `[F,R]` and `R∩[F,F]` render as raw ASCII, despite the proof using typeset versions of the same notation. Screenshot: `screenshots/lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists--01.png`.
4. **`def-canonical-map-from-the-integers-to-zp`** — Title, line 4. `Zp` and `p^n` appear literally; the body typesets the corresponding notation. Screenshot: `screenshots/def-canonical-map-from-the-integers-to-zp--01.png`.
5. **`thm-the-integers-map-injectively-and-densely-into-zp`** — Title, line 4. `Zp` appears literally, while the statement uses typeset notation. Screenshot: `screenshots/thm-the-integers-map-injectively-and-densely-into-zp--01.png`.
6. **`prop-zp-is-topologically-generated-by-one`** — Title, line 4. `Zp` appears literally; the statement typesets it. Screenshot: `screenshots/prop-zp-is-topologically-generated-by-one--01.png`.
7. **`ex-the-klein-four-extension-of-c-two-by-c-two-is-direct`** — Title, line 4. The cyclic group notation prints literal underscores (`C_2`) although the body uses rendered subscripts. Screenshot: `screenshots/ex-the-klein-four-extension-of-c-two-by-c-two-is-direct--01.png`.

The raw notation findings are source-authored formula/title formatting issues visible in the frozen render. Reference wikilinks appearing as block lines and uppercase proof-technique banners are expected behavior and were not reported. Some multi-tile captures cut text at a tile boundary; the next overlapping tile showed the continuation, so I found no confirmed loss or clipping of the complete rendered item.

## Optional diagram candidates

These are uncertain editorial opportunities, not confirmed defects. No diagram is needed to establish any proof.

- **`def-labeled-schreier-coset-graph`**, source lines 32–44. The source defines right-coset vertices `Hg`, basepoint `H`, directed edges `Hg → Hgx`, and inverse traversal. A small example for `F(a)` and `H=<a²>` can show the two cosets and their generator edges, making the right-multiplication convention concrete. Check each coset/edge label against the endpoint formula before drawing. Screenshot: `screenshots/def-labeled-schreier-coset-graph--01.png`.
- **`lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions`**, lines 29–40 and 54–56. The stated oriented edge `e:v→w` has inclusion maps `G_e↪G_v` and `G_e↪G_w`, and changing representative conjugates all three stabilizers by the same element. A diagram can show the two inclusions and simultaneous conjugation while retaining the source orientation. Screenshot: `screenshots/lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions--01.png`.
- **`thm-normal-form-for-fundamental-groups-of-graphs-of-groups`**, lines 30–34 and 54–60. The proof distinguishes maximal-subtree edges, which yield amalgamated products, from non-tree edges, which yield HNN extensions. A small graph-of-groups example could label the spanning-tree edge and non-tree stable letter, with incident edge-group maps and the reduced-word backtracking rule. Check directions against the edge-reversal and HNN conventions. Screenshots: `screenshots/thm-normal-form-for-fundamental-groups-of-graphs-of-groups--01.png`, `screenshots/thm-normal-form-for-fundamental-groups-of-graphs-of-groups--02.png`.

## Existing diagram checks and coverage

No assigned source had a valid rendered TikZ diagram, so there were no existing diagram maps, orientations, indices, or signs to check. No candidate is a repair request. The JSON report records the exact source, snapshot, HTML, and PNG SHA-256 values for every assigned item and tile, whether each hash matches, the individually opened tile record, section coverage, screenshot capture diagnostics, findings, candidate evidence, and the limitations of this local review.

This was a local frozen-snapshot review only; I did not inspect an HTTP/live site, invoke the renderer, build, run tests, modify items or tools, or change publication state.
